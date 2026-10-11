/**
 * Middle-50% (25th–75th percentile) SAT and ACT scores of enrolled students at
 * well-known US colleges, for the score-goal college picker.
 *
 * SOURCE: Compass Education Group "College Profiles" table (compassprep.com/
 * college-profiles/, page updated July 2026), which reports each college's
 * most recent Common Data Set figures. Every row was read twice and a
 * 12-school sample a third time; all reads agreed. Checked 2026-10-10.
 *
 * Deliberately omitted: colleges that report no SAT range (Caltech, UT Austin
 * at the time of checking; the University of California campuses are test-blind)
 * and colleges we could not verify. MCAT medians are NOT listed: published
 * figures disagree between sources (mean vs median, class year), so students
 * add medical schools as free text. Ranges move a little every year; update
 * from the same source when refreshing.
 */

export interface CollegeScoreRange {
  name: string
  /** SAT composite 25th–75th percentile. */
  sat: { low: number; high: number }
  /** ACT composite 25th–75th percentile (single value → low = high). */
  act: { low: number; high: number }
}

const c = (name: string, satLow: number, satHigh: number, actLow: number, actHigh: number): CollegeScoreRange => ({
  name,
  sat: { low: satLow, high: satHigh },
  act: { low: actLow, high: actHigh },
})

export const COLLEGE_SCORE_RANGES: CollegeScoreRange[] = [
  c('Massachusetts Institute of Technology', 1520, 1570, 34, 36),
  c('Harvard University', 1510, 1580, 34, 36),
  c('Stanford University', 1520, 1570, 34, 36),
  c('Yale University', 1470, 1560, 33, 35),
  c('Princeton University', 1490, 1560, 34, 35),
  c('Columbia University', 1510, 1560, 34, 36),
  c('University of Chicago', 1510, 1560, 34, 35),
  c('University of Pennsylvania', 1510, 1570, 34, 36),
  c('Brown University', 1470, 1550, 33, 35),
  c('Duke University', 1510, 1570, 34, 35),
  c('Dartmouth College', 1440, 1550, 32, 35),
  c('Cornell University', 1490, 1550, 33, 35),
  c('Northwestern University', 1510, 1560, 34, 35),
  c('Johns Hopkins University', 1530, 1570, 35, 35),
  c('Rice University', 1500, 1570, 34, 36),
  c('Vanderbilt University', 1510, 1560, 34, 35),
  c('Washington University in St. Louis', 1500, 1570, 33, 35),
  c('University of Notre Dame', 1460, 1540, 33, 35),
  c('Georgetown University', 1410, 1530, 32, 35),
  c('Carnegie Mellon University', 1500, 1560, 34, 36),
  c('Emory University', 1480, 1540, 33, 35),
  c('University of Michigan', 1360, 1530, 31, 34),
  c('University of Virginia', 1410, 1510, 32, 34),
  c('University of North Carolina at Chapel Hill', 1400, 1530, 28, 34),
  c('Georgia Institute of Technology', 1370, 1530, 31, 35),
  c('University of Southern California', 1450, 1550, 32, 35),
  c('New York University', 1480, 1550, 34, 35),
  c('Boston University', 1420, 1510, 33, 34),
  c('Boston College', 1440, 1520, 33, 35),
  c('Tufts University', 1460, 1520, 33, 35),
  c('University of Florida', 1330, 1470, 29, 33),
  c('University of Wisconsin–Madison', 1370, 1490, 29, 33),
  c('University of Illinois Urbana-Champaign', 1390, 1520, 31, 34),
  c('Ohio State University', 1300, 1440, 27, 32),
  c('Penn State University Park', 1280, 1410, 28, 32),
  c('Purdue University', 1220, 1470, 28, 34),
  c('University of Washington', 1320, 1500, 30, 34),
  c('Texas A&M University', 1160, 1390, 24, 32),
  c('Rutgers University–New Brunswick', 1310, 1500, 28, 33),
  c('University of Maryland', 1410, 1520, 32, 35),
  c('Virginia Tech', 1280, 1450, 28, 32),
  c('Clemson University', 1250, 1400, 28, 32),
  c('University of Georgia', 1250, 1420, 27, 33),
  c('Northeastern University', 1440, 1510, 33, 34),
  c('University of Rochester', 1400, 1510, 30, 34),
  c('Case Western Reserve University', 1440, 1530, 32, 34),
  c('Wake Forest University', 1420, 1490, 32, 34),
  c('Tulane University', 1430, 1500, 32, 34),
  c('Williams College', 1490, 1550, 33, 35),
  c('Amherst College', 1470, 1540, 33, 35),
  c('Swarthmore College', 1480, 1550, 33, 35),
  c('Pomona College', 1490, 1550, 32, 34),
  c('Wellesley College', 1460, 1540, 33, 35),
  c('Bowdoin College', 1470, 1540, 33, 35),
  c('Middlebury College', 1460, 1530, 33, 35),
  c('Barnard College', 1480, 1540, 32, 34),
  c('Brandeis University', 1370, 1470, 31, 34),
  c('Lehigh University', 1380, 1480, 31, 34),
  c('Villanova University', 1420, 1490, 32, 34),
  c('Fordham University', 1340, 1470, 30, 33),
  c('Syracuse University', 1270, 1440, 29, 32),
  c('University of Pittsburgh', 1280, 1450, 29, 33),
  c('Florida State University', 1300, 1410, 29, 32),
  c('University of Miami', 1350, 1450, 30, 33),
  c('Rensselaer Polytechnic Institute', 1390, 1500, 30, 34),
  c('Colorado School of Mines', 1320, 1480, 29, 33),
  c('Brigham Young University', 1290, 1430, 28, 32),
  c('Howard University', 1050, 1250, 22, 28),
  c('Spelman College', 1100, 1300, 22, 28),
  c('United States Naval Academy', 1210, 1430, 25, 32),
  c('United States Military Academy (West Point)', 1210, 1420, 27, 33),
  c('United States Air Force Academy', 1230, 1440, 26, 33),
]

export const COLLEGE_RANGES_SOURCE = {
  name: 'Compass Education Group college profiles (most recent Common Data Set figures)',
  url: 'https://www.compassprep.com/college-profiles/',
  checked: '2026-10-10',
}

export function findCollege(name: string): CollegeScoreRange | null {
  const key = name.trim().toLowerCase()
  return COLLEGE_SCORE_RANGES.find((col) => col.name.toLowerCase() === key) ?? null
}
