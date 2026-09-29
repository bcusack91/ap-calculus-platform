/**
 * Serialize a single CSV cell:
 *  1. Neutralize formula injection — a cell that a spreadsheet would evaluate as
 *     a formula (leading = + - @, or the Tab/CR control chars some apps treat the
 *     same) is prefixed with a single quote so it is rendered as literal text.
 *  2. Quote the value and escape embedded double-quotes per RFC 4180.
 */
export function csvCell(value: unknown): string {
  let str = String(value ?? '')
  if (/^[=+\-@\t\r]/.test(str)) {
    str = `'${str}`
  }
  return `"${str.replace(/"/g, '""')}"`
}
