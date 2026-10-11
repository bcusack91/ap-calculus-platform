/**
 * National Merit Semifinalist cutoffs (PSAT/NMSQT Selection Index) by state.
 *
 * NMSC sets a separate Semifinalist cutoff for every state each year, plus a
 * single national Commended cutoff. The numbers move every year, so the page
 * that shows them must always say which class they belong to.
 *
 * SOURCE (both classes): the state-by-state table NMSC releases to high
 * schools each September, as compiled and published by Compass Education
 * Group ("National Merit Semifinalist Cutoffs", compassprep.com, page
 * updated 2026-09-22). Every value below was cross-checked against a second
 * read of that table; the Class of 2026 column also matches the figures
 * widely reported in September 2025.
 *
 *   - CURRENT  = Class of 2027 — PSAT/NMSQT taken October 2025, cutoffs
 *                released September 9, 2026. The most recent published.
 *   - PREVIOUS = Class of 2026 — PSAT/NMSQT taken October 2024, cutoffs
 *                released September 2025.
 *
 * Boarding-school students are grouped by region (the region's highest state
 * cutoff); NMSC does not publish those regional numbers, so they are not here.
 * A state missing from the map falls back to the national range on the page.
 * When next September's cutoffs are released: move CURRENT to PREVIOUS, add
 * the new class as CURRENT, and update the labels.
 */

export interface CutoffClass {
  /** Graduating class the cutoffs belong to, e.g. 2027. */
  classOf: number
  /** When those students took the PSAT/NMSQT, e.g. 'October 2025'. */
  testTaken: string
  /** When NMSC released the cutoffs, e.g. 'September 2026'. */
  released: string
  /** National Commended Student cutoff (Selection Index). */
  commended: number
  /** Semifinalist cutoff by region key (two-letter state code, DC, or special). */
  semifinalist: Record<string, number>
}

/** Region keys in display order: the 50 states, DC, then the two special groups. */
export const CUTOFF_REGIONS: { key: string; name: string }[] = [
  { key: 'AL', name: 'Alabama' },
  { key: 'AK', name: 'Alaska' },
  { key: 'AZ', name: 'Arizona' },
  { key: 'AR', name: 'Arkansas' },
  { key: 'CA', name: 'California' },
  { key: 'CO', name: 'Colorado' },
  { key: 'CT', name: 'Connecticut' },
  { key: 'DE', name: 'Delaware' },
  { key: 'DC', name: 'District of Columbia' },
  { key: 'FL', name: 'Florida' },
  { key: 'GA', name: 'Georgia' },
  { key: 'HI', name: 'Hawaii' },
  { key: 'ID', name: 'Idaho' },
  { key: 'IL', name: 'Illinois' },
  { key: 'IN', name: 'Indiana' },
  { key: 'IA', name: 'Iowa' },
  { key: 'KS', name: 'Kansas' },
  { key: 'KY', name: 'Kentucky' },
  { key: 'LA', name: 'Louisiana' },
  { key: 'ME', name: 'Maine' },
  { key: 'MD', name: 'Maryland' },
  { key: 'MA', name: 'Massachusetts' },
  { key: 'MI', name: 'Michigan' },
  { key: 'MN', name: 'Minnesota' },
  { key: 'MS', name: 'Mississippi' },
  { key: 'MO', name: 'Missouri' },
  { key: 'MT', name: 'Montana' },
  { key: 'NE', name: 'Nebraska' },
  { key: 'NV', name: 'Nevada' },
  { key: 'NH', name: 'New Hampshire' },
  { key: 'NJ', name: 'New Jersey' },
  { key: 'NM', name: 'New Mexico' },
  { key: 'NY', name: 'New York' },
  { key: 'NC', name: 'North Carolina' },
  { key: 'ND', name: 'North Dakota' },
  { key: 'OH', name: 'Ohio' },
  { key: 'OK', name: 'Oklahoma' },
  { key: 'OR', name: 'Oregon' },
  { key: 'PA', name: 'Pennsylvania' },
  { key: 'RI', name: 'Rhode Island' },
  { key: 'SC', name: 'South Carolina' },
  { key: 'SD', name: 'South Dakota' },
  { key: 'TN', name: 'Tennessee' },
  { key: 'TX', name: 'Texas' },
  { key: 'UT', name: 'Utah' },
  { key: 'VT', name: 'Vermont' },
  { key: 'VA', name: 'Virginia' },
  { key: 'WA', name: 'Washington' },
  { key: 'WV', name: 'West Virginia' },
  { key: 'WI', name: 'Wisconsin' },
  { key: 'WY', name: 'Wyoming' },
  { key: 'TERRITORIES', name: 'U.S. territories' },
  { key: 'ABROAD', name: 'U.S. citizens studying abroad' },
]

/** Class of 2027 (PSAT Oct 2025; released Sept 9, 2026). Source: Compass Education Group compilation, updated 2026-09-22. */
export const CURRENT_CUTOFFS: CutoffClass = {
  classOf: 2027,
  testTaken: 'October 2025',
  released: 'September 2026',
  commended: 208,
  semifinalist: {
    AL: 210, AK: 208, AZ: 215, AR: 210, CA: 220, CO: 217, CT: 220, DE: 219, DC: 223,
    FL: 216, GA: 217, HI: 218, ID: 211, IL: 218, IN: 215, IA: 210, KS: 212, KY: 211,
    LA: 211, ME: 214, MD: 221, MA: 221, MI: 216, MN: 214, MS: 211, MO: 214, MT: 208,
    NE: 212, NV: 211, NH: 215, NJ: 223, NM: 209, NY: 220, NC: 217, ND: 208, OH: 216,
    OK: 210, OR: 216, PA: 219, RI: 213, SC: 212, SD: 210, TN: 214, TX: 219, UT: 209,
    VT: 212, VA: 221, WA: 221, WV: 208, WI: 212, WY: 208,
    TERRITORIES: 208, ABROAD: 223,
  },
}

/** Class of 2026 (PSAT Oct 2024; released Sept 2025). Source: Compass Education Group compilation (same table, prior-year column). */
export const PREVIOUS_CUTOFFS: CutoffClass = {
  classOf: 2026,
  testTaken: 'October 2024',
  released: 'September 2025',
  commended: 210,
  semifinalist: {
    AL: 214, AK: 215, AZ: 218, AR: 215, CA: 224, CO: 219, CT: 223, DE: 220, DC: 225,
    FL: 219, GA: 220, HI: 219, ID: 215, IL: 222, IN: 218, IA: 214, KS: 216, KY: 214,
    LA: 216, ME: 217, MD: 224, MA: 225, MI: 220, MN: 219, MS: 213, MO: 217, MT: 213,
    NE: 214, NV: 214, NH: 219, NJ: 225, NM: 210, NY: 223, NC: 220, ND: 210, OH: 219,
    OK: 212, OR: 219, PA: 221, RI: 219, SC: 215, SD: 211, TN: 219, TX: 222, UT: 213,
    VT: 216, VA: 224, WA: 224, WV: 210, WI: 215, WY: 210,
    TERRITORIES: 210, ABROAD: 225,
  },
}

export const CUTOFF_SOURCE = {
  name: 'Compass Education Group, compiling the cutoffs NMSC releases to schools',
  url: 'https://www.compassprep.com/national-merit-semifinalist-cutoffs/',
  checked: '2026-10-10',
}

export function regionName(key: string): string | null {
  return CUTOFF_REGIONS.find((r) => r.key === key)?.name ?? null
}

/** The Semifinalist cutoff for a region in a class, or null when we don't have it. */
export function semifinalistCutoff(key: string, cls: CutoffClass = CURRENT_CUTOFFS): number | null {
  const v = cls.semifinalist[key]
  return typeof v === 'number' ? v : null
}

/** Lowest and highest Semifinalist cutoff in a class (the national range). */
export function nationalRange(cls: CutoffClass = CURRENT_CUTOFFS): { low: number; high: number } {
  const values = Object.values(cls.semifinalist)
  return { low: Math.min(...values), high: Math.max(...values) }
}
