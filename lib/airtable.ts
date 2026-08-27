type AirtableFields = Record<string, string>

export async function submitToAirtable(tableEnvVar: string, defaultTableName: string, fields: AirtableFields) {
  const apiKey = process.env.AIRTABLE_API_KEY
  const baseId = process.env.AIRTABLE_BASE_ID
  const tableName = process.env[tableEnvVar] || defaultTableName

  if (!apiKey || !baseId) {
    throw new Error(
      "Airtable is not configured. Set AIRTABLE_API_KEY and AIRTABLE_BASE_ID in your environment variables.",
    )
  }

  const response = await fetch(`https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fields, typecast: true }),
  })

  if (!response.ok) {
    const errorBody = await response.text()
    throw new Error(`Airtable request failed (${response.status}): ${errorBody}`)
  }

  return response.json()
}
