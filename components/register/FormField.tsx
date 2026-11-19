"use client"

import type { ReactNode } from "react"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { type FieldDef, type FieldValue, type FormValues, todayIsoDate } from "../../lib/registration-fields"

export const labelClass = "block text-sm font-medium text-[#464646] mb-2 font-['Poppins']"
export const inputClass = "rounded-lg border-gray-300 focus:border-[#064232] focus:ring-[#064232]"
const selectClass =
  "w-full h-10 rounded-lg border border-gray-300 bg-white px-3 text-sm text-[#464646] font-['Poppins'] focus:outline-none focus:border-[#064232] focus:ring-2 focus:ring-[#064232]"
const choiceLabelClass = "flex items-center gap-2 text-sm text-[#464646] font-['Poppins'] cursor-pointer"
const choiceInputClass = "h-4 w-4 accent-[#064232] cursor-pointer"

export function fieldId(formType: string, key: string) {
  return `${formType}-${key}`
}

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} role="alert" className="mt-1 text-red-600 text-sm font-['Poppins']">
      {message}
    </p>
  )
}

interface FormFieldProps {
  formType: string
  field: FieldDef
  values: FormValues
  error?: string
  onChange: (key: string, value: FieldValue) => void
  /** Overrides the label text (used for labels that contain links). */
  labelContent?: ReactNode
}

export function FormField({ formType, field, values, error, onChange, labelContent }: FormFieldProps) {
  const id = fieldId(formType, field.key)
  const errorId = `${id}-error`
  const label = (
    <>
      {labelContent ?? field.label}
      {field.required && " *"}
    </>
  )
  const describedBy = error ? errorId : undefined
  const stringValue = typeof values[field.key] === "string" ? (values[field.key] as string) : ""

  switch (field.kind) {
    case "radio":
      return (
        <fieldset id={id} aria-describedby={describedBy}>
          <legend className={labelClass}>{label}</legend>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {field.options.map((opt) => (
              <label key={opt.value} className={choiceLabelClass}>
                <input
                  type="radio"
                  name={id}
                  value={opt.value}
                  checked={stringValue === opt.value}
                  onChange={() => onChange(field.key, opt.value)}
                  required={field.required}
                  className={choiceInputClass}
                />
                {opt.label ?? opt.value}
              </label>
            ))}
          </div>
          <FieldError id={errorId} message={error} />
        </fieldset>
      )

    case "checkboxes": {
      const selected = Array.isArray(values[field.key]) ? (values[field.key] as string[]) : []
      const noneKey = field.noneOption?.key
      const noneTicked = noneKey ? values[noneKey] === true : false

      const toggle = (value: string, checked: boolean) => {
        let next: string[]
        if (!checked) next = selected.filter((v) => v !== value)
        else if (field.exclusiveValue && value === field.exclusiveValue) next = [value]
        else next = [...selected.filter((v) => v !== field.exclusiveValue), value]
        onChange(field.key, next)
        if (checked && noneKey) onChange(noneKey, false)
      }

      return (
        <fieldset id={id} aria-describedby={describedBy}>
          <legend className={labelClass}>{label}</legend>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2">
            {field.options.map((opt) => (
              <label key={opt.value} className={choiceLabelClass}>
                <input
                  type="checkbox"
                  value={opt.value}
                  checked={selected.indexOf(opt.value) !== -1}
                  onChange={(e) => toggle(opt.value, e.target.checked)}
                  className={choiceInputClass}
                />
                {opt.label ?? opt.value}
              </label>
            ))}
            {field.noneOption && noneKey && (
              <label className={choiceLabelClass}>
                <input
                  type="checkbox"
                  checked={noneTicked}
                  onChange={(e) => {
                    onChange(noneKey, e.target.checked)
                    if (e.target.checked) onChange(field.key, [])
                  }}
                  className={choiceInputClass}
                />
                {field.noneOption.label}
              </label>
            )}
          </div>
          <FieldError id={errorId} message={error} />
        </fieldset>
      )
    }

    case "checkbox":
      return (
        <div>
          <label htmlFor={id} className={`${choiceLabelClass} items-start`}>
            <input
              id={id}
              type="checkbox"
              checked={values[field.key] === true}
              onChange={(e) => onChange(field.key, e.target.checked)}
              required={field.required}
              aria-describedby={describedBy}
              className={`${choiceInputClass} mt-0.5 shrink-0`}
            />
            <span>{label}</span>
          </label>
          <FieldError id={errorId} message={error} />
        </div>
      )

    case "select":
      return (
        <div>
          <label htmlFor={id} className={labelClass}>
            {label}
          </label>
          <select
            id={id}
            value={stringValue}
            onChange={(e) => onChange(field.key, e.target.value)}
            required={field.required}
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy}
            className={selectClass}
          >
            <option value="">Select an option</option>
            {field.options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label ?? opt.value}
              </option>
            ))}
          </select>
          <FieldError id={errorId} message={error} />
        </div>
      )

    case "textarea":
      return (
        <div>
          <label htmlFor={id} className={labelClass}>
            {label}
          </label>
          <Textarea
            id={id}
            value={stringValue}
            onChange={(e) => onChange(field.key, e.target.value)}
            required={field.required}
            rows={4}
            placeholder={field.placeholder}
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy}
            className={inputClass}
          />
          <FieldError id={errorId} message={error} />
        </div>
      )

    default: {
      // text, email, tel, date, number
      const extra =
        field.kind === "number"
          ? { min: field.min, max: field.max, step: 1, inputMode: "numeric" as const }
          : field.kind === "date" && field.minToday
            ? { min: todayIsoDate() }
            : field.kind === "tel"
              ? { inputMode: "tel" as const, autoComplete: "tel" }
              : field.kind === "email"
                ? { autoComplete: "email" }
                : field.kind === "text"
                  ? { inputMode: field.inputMode, maxLength: field.maxLength }
                  : {}
      return (
        <div>
          <label htmlFor={id} className={labelClass}>
            {label}
          </label>
          <Input
            id={id}
            type={field.kind}
            value={stringValue}
            onChange={(e) => onChange(field.key, e.target.value)}
            required={field.required}
            placeholder={field.placeholder}
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy}
            className={inputClass}
            {...extra}
          />
          <FieldError id={errorId} message={error} />
        </div>
      )
    }
  }
}
