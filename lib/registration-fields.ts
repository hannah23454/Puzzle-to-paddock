/**
 * Single source of truth for the /register forms.
 *
 * Used by the form UI (to render + validate on the client) and by
 * app/api/register/route.ts (to validate on the server), so the two can't drift.
 *
 * Option `value`s must match the Airtable single/multi-select options exactly.
 */

export type RegistrationType = "family" | "nanny" | "professional"

export const REGISTRATION_TYPES: readonly RegistrationType[] = ["family", "nanny", "professional"]

export function isRegistrationType(value: unknown): value is RegistrationType {
  return typeof value === "string" && REGISTRATION_TYPES.some((t) => t === value)
}

/** Raw value held in form state (client) or received in the request body (server). */
export type FieldValue = string | string[] | boolean
export type FormValues = Record<string, FieldValue>

/** Value after validation / normalisation. */
export type CleanValue = string | string[] | boolean | number
export type CleanValues = Record<string, CleanValue>

export interface FieldOption {
  value: string
  /** Shown to the user. Defaults to `value`. */
  label?: string
}

interface BaseField {
  key: string
  label: string
  required?: boolean
  placeholder?: string
  /** Only shown (and only sent) when this returns true. */
  showIf?: (values: FormValues) => boolean
  /** Lay this field out at full width on desktop instead of half width. */
  wide?: boolean
}

export interface TextField extends BaseField {
  kind: "text" | "email" | "tel" | "textarea"
  /** Optional format check: value must match, otherwise `message` is shown. */
  pattern?: { regex: RegExp; message: string }
  maxLength?: number
  inputMode?: "numeric" | "text"
}

export interface DateField extends BaseField {
  kind: "date"
  /** Client-side only: earliest selectable date is today. */
  minToday?: boolean
}

export interface NumberField extends BaseField {
  kind: "number"
  min: number
  max: number
}

export interface ChoiceField extends BaseField {
  kind: "select" | "radio"
  options: readonly FieldOption[]
}

export interface MultiChoiceField extends BaseField {
  kind: "checkboxes"
  options: readonly FieldOption[]
  /** Picking this option unticks the others (and vice versa). */
  exclusiveValue?: string
  /**
   * Adds a "None yet"-style checkbox stored under its own boolean key.
   * Ticking it satisfies `required` and sends an empty list.
   */
  noneOption?: { key: string; label: string }
}

export interface BooleanField extends BaseField {
  kind: "checkbox"
}

export type FieldDef = TextField | DateField | NumberField | ChoiceField | MultiChoiceField | BooleanField

export interface FieldSection {
  title: string
  /** Optional sections render as a collapsible, closed by default. */
  collapsible?: boolean
  fields: readonly FieldDef[]
}

export interface RegistrationFormConfig {
  type: RegistrationType
  /** Title line used in the plain-text summary. */
  summaryTitle: string
  sections: readonly FieldSection[]
  /** Short line shown above the submit button. */
  beforeSubmitNote?: string
}

// ---------------------------------------------------------------------------
// Shared options
// ---------------------------------------------------------------------------

const opts = (...values: string[]): FieldOption[] => values.map((value) => ({ value }))

const STATES = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "NT", "ACT"]
const YES_NO = opts("Yes", "No")
const YES_APPLIED_NO = opts("Yes", "Applied", "No")
const QUALIFICATIONS = opts(
  "First Aid / CPR",
  "Childcare certificate",
  "Teacher",
  "Occupational Therapist",
  "Nursing",
  "Other",
)

export const CONSENT_KEY = "consent"
export const CONSENT_LABEL =
  "I agree to the Privacy Policy and to Puzzle to Paddock contacting me by WhatsApp, phone or email about my registration."

const consentField: BooleanField = { key: CONSENT_KEY, label: CONSENT_LABEL, kind: "checkbox", required: true }

const isFilled = (v: FieldValue | undefined) => typeof v === "string" && v.trim() !== ""

// ---------------------------------------------------------------------------
// A. Nanny / Au Pair
// ---------------------------------------------------------------------------

const nannyForm: RegistrationFormConfig = {
  type: "nanny",
  summaryTitle: "Nanny/Au Pair Registration",
  sections: [
    {
      title: "About you",
      fields: [
        { key: "firstName", label: "First name", kind: "text", required: true },
        { key: "lastName", label: "Last name", kind: "text", required: true },
        { key: "email", label: "Email address", kind: "email", required: true },
        { key: "phone", label: "Mobile / WhatsApp number", kind: "tel", required: true, placeholder: "+61 4xx xxx xxx" },
        { key: "nationality", label: "Nationality", kind: "text", required: true, placeholder: "e.g. German" },
        {
          key: "currentLocation",
          label: "Where are you right now?",
          kind: "text",
          required: true,
          placeholder: "e.g. Byron Bay NSW, or still overseas",
        },
      ],
    },
    {
      title: "Visa & availability",
      fields: [
        {
          key: "visaType",
          label: "Visa type",
          kind: "select",
          required: true,
          options: [
            { value: "Working Holiday (417)" },
            { value: "Work and Holiday (462)" },
            { value: "Student" },
            { value: "Tourist" },
            { value: "Citizen / PR" },
            { value: "Other" },
            { value: "Unknown", label: "Not sure" },
          ],
        },
        { key: "visaExpiry", label: "Visa expiry date", kind: "date" },
        {
          key: "doing88Days",
          label: "Are you doing your 88 days (regional work for a 2nd-year visa)?",
          kind: "radio",
          options: opts("Yes", "No", "Not sure"),
          wide: true,
          showIf: (v) => v.visaType === "Working Holiday (417)" || v.visaType === "Work and Holiday (462)",
        },
        { key: "availableFrom", label: "Available from", kind: "date", required: true, minToday: true },
        {
          key: "duration",
          label: "How long can you stay?",
          kind: "text",
          required: true,
          placeholder: "e.g. 3 months, 6+ months",
        },
        {
          key: "preferredLocation",
          label: "Where would you like to work?",
          kind: "checkboxes",
          required: true,
          options: opts(...STATES, "Anywhere"),
          exclusiveValue: "Anywhere",
          wide: true,
        },
        {
          key: "preferredLocationNotes",
          label: "Anything else about location?",
          kind: "text",
          placeholder: "e.g. happy to go remote / on a farm",
          wide: true,
        },
        {
          key: "roleType",
          label: "What kind of role are you after?",
          kind: "checkboxes",
          options: opts("Au pair", "Nanny", "Support worker", "Behaviour mentor", "Educator / teacher", "Allied health"),
          wide: true,
        },
      ],
    },
    {
      title: "Experience & qualifications",
      fields: [
        {
          key: "experienceWithKids",
          label: "Your experience with children",
          kind: "textarea",
          required: true,
          placeholder: "Ages you've cared for, how long, where (au pair, daycare, nanny, siblings...)",
          wide: true,
        },
        { key: "yearsExperience", label: "Years of experience with children", kind: "number", min: 0, max: 50 },
        {
          key: "specialNeedsExperience",
          label: "Any experience with additional needs (autism, ADHD, disability)?",
          kind: "textarea",
          wide: true,
        },
        {
          key: "qualifications",
          label: "Qualifications",
          kind: "checkboxes",
          required: true,
          options: QUALIFICATIONS,
          noneOption: { key: "qualificationsNone", label: "None yet" },
          wide: true,
        },
        {
          key: "qualificationsNotes",
          label: "Qualification details",
          kind: "text",
          placeholder: "e.g. Cert III ECE, first aid expires 2027",
          wide: true,
        },
        {
          key: "driversLicence",
          label: "Driver's licence",
          kind: "select",
          required: true,
          options: [
            { value: "Yes - full", label: "Yes - full Australian licence" },
            { value: "Yes - international / overseas" },
            { value: "Learner / provisional" },
            { value: "No" },
          ],
        },
        { key: "wwcc", label: "Working With Children Check / Blue Card", kind: "radio", options: YES_APPLIED_NO },
        { key: "policeCheck", label: "Police check", kind: "radio", options: YES_APPLIED_NO },
      ],
    },
    {
      title: "A bit more about you (optional)",
      collapsible: true,
      fields: [
        { key: "languages", label: "Languages you speak", kind: "text" },
        { key: "preferredAgeGroup", label: "Preferred age group", kind: "text", placeholder: "e.g. 2-8 years" },
        { key: "willingToRelocate", label: "Willing to relocate?", kind: "radio", options: YES_NO },
        { key: "okWithCooking", label: "Happy to help with cooking?", kind: "radio", options: YES_NO },
        { key: "okWithHousekeeping", label: "Happy to help with light housekeeping?", kind: "radio", options: YES_NO },
        { key: "smoker", label: "Do you smoke?", kind: "radio", options: YES_NO },
        { key: "okWithPets", label: "OK with pets / farm animals?", kind: "radio", options: YES_NO },
        { key: "ownCar", label: "Do you have your own car?", kind: "radio", options: YES_NO },
        { key: "dietary", label: "Dietary needs / allergies", kind: "text", wide: true },
        { key: "message", label: "Anything else we should know?", kind: "textarea", wide: true },
      ],
    },
  ],
}

// ---------------------------------------------------------------------------
// B. Family
// ---------------------------------------------------------------------------

const familyForm: RegistrationFormConfig = {
  type: "family",
  summaryTitle: "Family Registration",
  beforeSubmitNote: "After you submit, we'll get in touch to book a quick intro call.",
  sections: [
    {
      title: "About you",
      fields: [
        { key: "contactFirstName", label: "Your first name", kind: "text", required: true },
        { key: "familyName", label: "Family name (surname)", kind: "text", required: true },
        { key: "email", label: "Email address", kind: "email", required: true },
        { key: "phone", label: "Mobile / WhatsApp number", kind: "tel", required: true, placeholder: "+61 4xx xxx xxx" },
        {
          key: "townProperty",
          label: "Town or property name",
          kind: "text",
          required: true,
          placeholder: "e.g. 40km from Longreach",
          wide: true,
        },
        { key: "state", label: "State", kind: "select", required: true, options: opts(...STATES) },
        {
          key: "postcode",
          label: "Postcode",
          kind: "text",
          placeholder: "e.g. 4730",
          maxLength: 4,
          inputMode: "numeric",
          pattern: { regex: /^\d{4}$/, message: "Postcode should be 4 digits." },
        },
      ],
    },
    {
      title: "Your children",
      fields: [
        { key: "numberOfKids", label: "Number of children", kind: "number", required: true, min: 1, max: 15 },
        { key: "kidsAges", label: "Children's ages", kind: "text", required: true, placeholder: "e.g. 2, 6, 9" },
        {
          key: "specialNeeds",
          label: "Does any child have additional needs?",
          kind: "textarea",
          placeholder: "e.g. autism, ADHD, disability. Leave blank if not",
          wide: true,
        },
        {
          key: "ndisFunded",
          label: "Is this NDIS funded?",
          kind: "radio",
          options: opts("Yes", "No", "Not sure"),
          showIf: (v) => isFilled(v.specialNeeds),
        },
        {
          key: "ndisPlanType",
          label: "NDIS plan type",
          kind: "select",
          options: opts("Self-managed", "Plan-managed", "Agency-managed", "Not sure"),
          showIf: (v) => isFilled(v.specialNeeds) && v.ndisFunded === "Yes",
        },
      ],
    },
    {
      title: "The role",
      fields: [
        {
          key: "helpNeeded",
          label: "What help do you need?",
          kind: "checkboxes",
          required: true,
          options: opts("Childcare", "School runs", "Distance ed / homeschool", "Home help", "Farm help", "Other"),
          wide: true,
        },
        { key: "helpNeededNotes", label: "Tell us more about the help needed", kind: "textarea", wide: true },
        { key: "startDate", label: "Ideal start date", kind: "date", required: true, minToday: true },
        { key: "duration", label: "How long for?", kind: "text", required: true, placeholder: "e.g. 6 months, ongoing" },
        { key: "hoursDays", label: "Hours / days", kind: "text", required: true, placeholder: "e.g. Mon-Fri 7am-3pm" },
        {
          key: "liveIn",
          label: "Live-in or live-out?",
          kind: "radio",
          required: true,
          options: opts("Live-in", "Live-out", "Either"),
        },
        {
          key: "accommodationOffered",
          label: "Accommodation / extras offered",
          kind: "text",
          placeholder: "e.g. own room, meals, car provided",
          wide: true,
        },
        { key: "licenceRequired", label: "Carer must have a driver's licence", kind: "checkbox", wide: true },
        {
          key: "qualificationsWanted",
          label: "Qualifications you'd like",
          kind: "checkboxes",
          options: QUALIFICATIONS,
          wide: true,
        },
        {
          key: "requirements",
          label: "Any other requirements?",
          kind: "textarea",
          required: true,
          placeholder: "Experience, non-smoker, comfortable with pets...",
          wide: true,
        },
      ],
    },
    {
      title: "A bit more (optional)",
      collapsible: true,
      fields: [
        { key: "dutiesRequired", label: "Other duties", kind: "textarea", wide: true },
        {
          key: "otherBenefits",
          label: "Other benefits",
          kind: "text",
          placeholder: "e.g. fuel allowance, shared car",
          wide: true,
        },
        { key: "familyPreferences", label: "What would your ideal carer be like?", kind: "textarea", wide: true },
        { key: "routineDetails", label: "A typical day / routine", kind: "textarea", wide: true },
        { key: "message", label: "Anything else we should know?", kind: "textarea", wide: true },
      ],
    },
  ],
}

// ---------------------------------------------------------------------------
// C. Allied Health Professional
// ---------------------------------------------------------------------------

const professionalForm: RegistrationFormConfig = {
  type: "professional",
  summaryTitle: "Allied Health Professional Registration",
  sections: [
    {
      title: "About you",
      fields: [
        { key: "firstName", label: "First name", kind: "text", required: true },
        { key: "lastName", label: "Last name", kind: "text", required: true },
        { key: "email", label: "Email address", kind: "email", required: true },
        { key: "phone", label: "Mobile / WhatsApp number", kind: "tel", required: true, placeholder: "+61 4xx xxx xxx" },
        { key: "location", label: "Location", kind: "text", required: true, placeholder: "City, State", wide: true },
      ],
    },
    {
      title: "Your practice",
      fields: [
        {
          key: "specialty",
          label: "Professional specialty",
          kind: "select",
          required: true,
          options: opts(
            "Speech Therapy",
            "Occupational Therapy",
            "Physiotherapy",
            "Psychology",
            "Behavior Support",
            "Other",
          ),
        },
        { key: "ndisRegistered", label: "NDIS registered?", kind: "radio", options: opts("Yes", "In progress", "No") },
        { key: "message", label: "Tell us more about your services", kind: "textarea", wide: true },
      ],
    },
  ],
}

export const REGISTRATION_FORMS: Record<RegistrationType, RegistrationFormConfig> = {
  family: familyForm,
  nanny: nannyForm,
  professional: professionalForm,
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Every field for a type, including the shared consent checkbox. */
export function getAllFields(type: RegistrationType): FieldDef[] {
  const fields: FieldDef[] = []
  REGISTRATION_FORMS[type].sections.forEach((section) => section.fields.forEach((f) => fields.push(f)))
  fields.push(consentField)
  return fields
}

export function getInitialValues(type: RegistrationType): FormValues {
  const values: FormValues = {}
  getAllFields(type).forEach((field) => {
    if (field.kind === "checkboxes") {
      values[field.key] = []
      if (field.noneOption) values[field.noneOption.key] = false
    } else if (field.kind === "checkbox") {
      values[field.key] = false
    } else {
      values[field.key] = ""
    }
  })
  return values
}

export const MAX_STRING_LENGTH = 2000
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/

/**
 * Strip spaces (and common separators) and turn a leading Australian `0` into `+61`.
 * `0412 345 678` -> `+61412345678`
 */
export function normalizePhone(raw: string): string {
  let phone = raw.replace(/[\s\-().]/g, "")
  if (phone.startsWith("00")) phone = `+${phone.slice(2)}`
  else if (phone.startsWith("0")) phone = `+61${phone.slice(1)}`
  return phone
}

function countDigits(value: string): number {
  return value.replace(/\D/g, "").length
}

/** Local `YYYY-MM-DD` for today (used for `min` on date inputs). */
export function todayIsoDate(): string {
  const d = new Date()
  const pad = (n: number) => (n < 10 ? `0${n}` : String(n))
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

function toCleanString(value: unknown): string {
  return typeof value === "string" ? value.trim().slice(0, MAX_STRING_LENGTH) : ""
}

function optionValues(options: readonly FieldOption[]): string[] {
  return options.map((o) => o.value)
}

function isOneOf(value: string, allowed: string[]): boolean {
  return allowed.some((a) => a === value)
}

export interface ValidationResult {
  /** Validated, normalised values. Unknown keys and hidden conditional fields are dropped. */
  values: CleanValues
  /** Field key -> friendly message. Empty when valid. */
  errors: Record<string, string>
}

interface ValidateOptions {
  /** If set, `minToday` date fields must be on/after this `YYYY-MM-DD` date. */
  today?: string
}

/**
 * Validate and normalise a submission. Safe to run on untrusted input (server)
 * and on form state (client).
 */
export function validateRegistration(
  type: RegistrationType,
  input: Record<string, unknown>,
  options: ValidateOptions = {},
): ValidationResult {
  const values: CleanValues = {}
  const errors: Record<string, string> = {}

  // Values used to evaluate `showIf` conditions: only well-typed inputs.
  const visibleState: FormValues = {}
  Object.keys(input).forEach((key) => {
    const v = input[key]
    if (typeof v === "string" || typeof v === "boolean") visibleState[key] = v
    else if (Array.isArray(v)) visibleState[key] = v.filter((x): x is string => typeof x === "string")
  })

  getAllFields(type).forEach((field) => {
    if (field.showIf && !field.showIf(visibleState)) return
    const raw = input[field.key]

    switch (field.kind) {
      case "checkbox": {
        const checked = raw === true || raw === "true"
        if (field.required && !checked) {
          errors[field.key] =
            field.key === CONSENT_KEY ? "Please tick this box so we can contact you." : "Please tick this box."
        }
        values[field.key] = checked
        return
      }

      case "checkboxes": {
        const allowed = optionValues(field.options)
        const list = Array.isArray(raw) ? raw.filter((x): x is string => typeof x === "string").map((x) => x.trim()) : []
        const invalid = list.filter((x) => !isOneOf(x, allowed))
        let selected = list.filter((x, i) => isOneOf(x, allowed) && list.indexOf(x) === i)
        if (field.exclusiveValue && isOneOf(field.exclusiveValue, selected)) selected = [field.exclusiveValue]

        const noneTicked = field.noneOption
          ? input[field.noneOption.key] === true || input[field.noneOption.key] === "true"
          : false
        if (noneTicked) selected = []

        if (invalid.length > 0) errors[field.key] = `Please choose from the options listed.`
        else if (field.required && selected.length === 0 && !noneTicked) {
          errors[field.key] = field.noneOption
            ? `Please pick at least one, or tick "${field.noneOption.label}".`
            : "Please pick at least one."
        }
        values[field.key] = selected
        return
      }

      case "select":
      case "radio": {
        const value = toCleanString(raw)
        if (!value) {
          if (field.required) errors[field.key] = "Please choose an option."
          return
        }
        if (!isOneOf(value, optionValues(field.options))) {
          errors[field.key] = "Please choose one of the options listed."
          return
        }
        values[field.key] = value
        return
      }

      case "number": {
        const str = typeof raw === "number" ? String(raw) : toCleanString(raw)
        if (!str) {
          if (field.required) errors[field.key] = "This field is required."
          return
        }
        const num = Number(str)
        if (!/^\d+$/.test(str) || num < field.min || num > field.max) {
          errors[field.key] = `Please enter a whole number between ${field.min} and ${field.max}.`
          return
        }
        values[field.key] = num
        return
      }

      case "date": {
        const value = toCleanString(raw)
        if (!value) {
          if (field.required) errors[field.key] = "Please pick a date."
          return
        }
        if (!DATE_RE.test(value) || isNaN(Date.parse(value))) {
          errors[field.key] = "Please pick a valid date."
          return
        }
        if (field.minToday && options.today && value < options.today) {
          errors[field.key] = "Please pick today or a later date."
          return
        }
        values[field.key] = value
        return
      }

      default: {
        // text, email, tel, textarea
        const value = toCleanString(raw)
        if (!value) {
          if (field.required) errors[field.key] = "This field is required."
          return
        }
        if (field.kind === "email" && !EMAIL_RE.test(value)) {
          errors[field.key] = "Please enter a valid email address."
          return
        }
        if (field.kind === "tel") {
          const phone = normalizePhone(value)
          if (countDigits(phone) < 8 || !/^\+?\d+$/.test(phone)) {
            errors[field.key] = "Please enter a valid phone number (at least 8 digits)."
            return
          }
          values[field.key] = phone
          return
        }
        if (field.pattern && !field.pattern.regex.test(value)) {
          errors[field.key] = field.pattern.message
          return
        }
        values[field.key] = value
      }
    }
  })

  return { values, errors }
}

/** Plain-text summary: title line, then one `Label: value` per line. Empty fields are left out. */
export function buildSummaryText(type: RegistrationType, values: CleanValues): string {
  const config = REGISTRATION_FORMS[type]
  const lines: string[] = [config.summaryTitle]

  getAllFields(type).forEach((field) => {
    const value = values[field.key]
    if (value === undefined) return

    let display = ""
    if (Array.isArray(value)) {
      if (field.kind === "checkboxes" && field.noneOption && value.length === 0 && field.required) {
        display = field.noneOption.label
      } else {
        display = value
          .map((v) => {
            const opt = field.kind === "checkboxes" ? field.options.find((o) => o.value === v) : undefined
            return opt?.label ?? v
          })
          .join(", ")
      }
    } else if (typeof value === "boolean") {
      if (!value) return
      display = "Yes"
    } else {
      display = String(value)
      if (field.kind === "select" || field.kind === "radio") {
        const opt = field.options.find((o) => o.value === display)
        if (opt?.label) display = opt.label
      }
    }

    if (display.trim() === "") return
    const label = field.key === CONSENT_KEY ? "Consent to contact" : field.label
    lines.push(`${label}: ${display}`)
  })

  return lines.join("\n")
}
