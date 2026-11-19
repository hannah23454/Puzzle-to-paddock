"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "../ui/button"
import { FormField, fieldId } from "./FormField"
import {
  CONSENT_KEY,
  REGISTRATION_FORMS,
  type FieldDef,
  type FieldSection,
  type FieldValue,
  type FormValues,
  type RegistrationType,
  getAllFields,
  getInitialValues,
  todayIsoDate,
  validateRegistration,
} from "../../lib/registration-fields"

type Status = "idle" | "submitting" | "error"

interface RegistrationFormProps {
  type: RegistrationType
  values: FormValues
  onValuesChange: (update: (prev: FormValues) => FormValues) => void
  onSuccess: () => void
}

const consentLabel = (
  <>
    I agree to the{" "}
    <Link href="/privacy" className="text-[#064232] underline" target="_blank">
      Privacy Policy
    </Link>{" "}
    and to Puzzle to Paddock contacting me by WhatsApp, phone or email about my registration.
  </>
)

export function RegistrationForm({ type, values, onValuesChange, onSuccess }: RegistrationFormProps) {
  const config = REGISTRATION_FORMS[type]
  const consentField = getAllFields(type).find((f) => f.key === CONSENT_KEY)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<Status>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (key: string, value: FieldValue) => {
    // Functional update so two changes fired in one event (e.g. "None yet") both apply.
    onValuesChange((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[key]
        return next
      })
    }
  }

  const focusFirstError = (errorKeys: string[]) => {
    const firstField = getAllFields(type).find((f) => errorKeys.indexOf(f.key) !== -1)
    if (!firstField) return
    const el = document.getElementById(fieldId(type, firstField.key))
    if (!el) return
    const focusable = el.matches("input, select, textarea") ? el : el.querySelector<HTMLElement>("input, select, textarea")
    el.scrollIntoView({ behavior: "smooth", block: "center" })
    focusable?.focus({ preventScroll: true })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("")

    const result = validateRegistration(type, values, { today: todayIsoDate() })
    const errorKeys = Object.keys(result.errors)
    if (errorKeys.length > 0) {
      setErrors(result.errors)
      setStatus("error")
      setErrorMessage("Please check the highlighted fields above.")
      focusFirstError(errorKeys)
      return
    }

    setErrors({})
    setStatus("submitting")
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, ...result.values }),
      })

      if (!response.ok) {
        const data: { error?: string } = await response.json().catch(() => ({}))
        throw new Error(data.error || "Something went wrong. Please try again.")
      }

      setStatus("idle")
      onValuesChange(() => getInitialValues(type))
      onSuccess()
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.")
    }
  }

  const renderField = (field: FieldDef) => {
    if (field.showIf && !field.showIf(values)) return null
    const wide = field.wide || field.kind === "textarea" || field.kind === "checkboxes"
    return (
      <div key={field.key} className={wide ? "md:col-span-2" : undefined}>
        <FormField formType={type} field={field} values={values} error={errors[field.key]} onChange={handleChange} />
      </div>
    )
  }

  const renderSection = (section: FieldSection) => {
    const grid = <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{section.fields.map(renderField)}</div>

    if (section.collapsible) {
      return (
        <details key={section.title} className="group rounded-2xl border border-gray-200 p-4 sm:p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-lg font-['Poppins'] text-[#064232] [&::-webkit-details-marker]:hidden">
            {section.title}
            <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="pt-6">{grid}</div>
        </details>
      )
    }

    return (
      <section key={section.title} aria-label={section.title} className="space-y-4">
        <h4 className="font-semibold text-lg font-['Poppins'] text-[#568f87] border-b border-gray-100 pb-2">
          {section.title}
        </h4>
        {grid}
      </section>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {config.sections.map(renderSection)}

      {consentField && (
        <FormField
          formType={type}
          field={consentField}
          values={values}
          error={errors[CONSENT_KEY]}
          onChange={handleChange}
          labelContent={consentLabel}
        />
      )}

      {config.beforeSubmitNote && (
        <p className="text-[#696983] text-sm font-['Poppins']">{config.beforeSubmitNote}</p>
      )}

      {status === "error" && errorMessage && (
        <p className="text-red-600 text-sm font-['Poppins']" role="alert">
          {errorMessage}
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="flex-1 bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full py-3 text-lg font-semibold font-['Poppins'] disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting..." : "Submit Registration"}
        </Button>
        <Button
          type="button"
          variant="outline"
          className="flex-1 border-[#064232] text-[#064232] hover:bg-[#064232] hover:text-white rounded-full py-3 text-lg font-semibold font-['Poppins'] bg-transparent"
          asChild
        >
          <Link href="/contact">Book a Call Instead</Link>
        </Button>
      </div>
    </form>
  )
}
