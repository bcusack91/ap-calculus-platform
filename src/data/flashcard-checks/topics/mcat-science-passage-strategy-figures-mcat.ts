import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-science-passage-strategy-figures-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`What should you read first on any figure?`]: {
    question: r`A bar graph has two bars: Drug P reaches 40 and Drug Q reaches 20. A student glances at it and concludes that Drug P works better against tumors. The y-axis is labeled "Tumor volume at day 14 (mm³)". Which drug worked better, and why?`,
    options: [
      r`Drug P; the y-axis shows tumor volume, so higher is better`,
      r`Drug P; the taller bar always marks the stronger effect`,
      r`Drug Q; the y-axis shows tumor volume, so lower is better`,
      r`Neither; bar heights cannot be compared between two drugs`,
    ],
    correctAnswer: 2,
    explanation: r`The axis label says the bars are tumor volume, so the smaller bar (20 mm³ for Drug Q) means smaller tumors and the better drug. Choosing Drug P comes from assuming a taller bar means more benefit without reading what is plotted. The bars share one axis and one unit, so they can be compared directly.`,
  },
  [r`What does a logarithmic axis imply?`]: {
    question: r`A graph plots bacterial cell count against time. The y-axis has equally spaced gridlines labeled 10², 10³ and 10⁴ cells. The data form a straight line from 10² cells at 0 h to 10⁴ cells at 4 h. What is the count at 2 h, and what kind of growth is this?`,
    options: [
      r`10³ cells; the growth is exponential`,
      r`5,050 cells; the growth is linear`,
      r`10³ cells; the growth is linear`,
      r`5,050 cells; the growth is exponential`,
    ],
    correctAnswer: 0,
    explanation: r`On a logarithmic axis equal distances are equal multiples, so halfway between 10² and 10⁴ is 10³, and a straight line means the count multiplies by 10 every 2 h, which is exponential growth. The value 5,050 is the arithmetic midpoint, correct only on a linear axis. Calling the growth linear mistakes a straight line on a log axis for a constant amount added per hour.`,
  },
  [r`How should you handle error bars?`]: {
    question: r`A bar graph shows enzyme activity as mean ± error bar: wild type 50 ± 8 units, mutant X 46 ± 7 units, and mutant Y 20 ± 5 units. Which conclusion do the error bars support?`,
    options: [
      r`Both mutants clearly differ from the wild type`,
      r`Only mutant X clearly differs from the wild type`,
      r`Neither mutant clearly differs from the wild type`,
      r`Only mutant Y clearly differs from the wild type`,
    ],
    correctAnswer: 3,
    explanation: r`The wild-type bar spans 42 to 58 and mutant X spans 39 to 53, so they overlap and that difference may not be significant. Mutant Y spans 15 to 25, far below the wild-type range, so it clearly differs. Saying both mutants differ ignores the overlap for X, and saying neither differs ignores the wide gap for Y.`,
  },
  [r`How do you compare two curves on one plot?`]: {
    question: r`One plot shows plasma drug concentration (mg/L) over time for two formulations. Curve A reads 8 at 1 h, 4 at 4 h and 1 at 8 h. Curve B reads 2 at 1 h, 4 at 4 h and 3 at 8 h. Which statement correctly compares the curves?`,
    options: [
      r`A is higher than B at every time point shown`,
      r`A is higher before 4 h and B is higher after 4 h`,
      r`B is higher before 4 h and A is higher after 4 h`,
      r`A and B are equal at every time point after 4 h`,
    ],
    correctAnswer: 1,
    explanation: r`The curves cross at 4 h, where both read 4 mg/L: before that A is above B (8 versus 2), and after it B is above A (3 versus 1). Saying A is always higher misses the crossover. The reversed statement swaps the curves, and the curves are equal only at the crossover point, not afterward.`,
  },
  [r`How do you interpret a graph quickly?`]: {
    question: r`A graph plots reaction rate against temperature. The rate is 10 units at 10 °C, climbs to 80 units at 40 °C, and then drops to 5 units at 60 °C. Which one-line reading captures the graph?`,
    options: [
      r`Rate rises to a peak at 40 °C and then falls sharply`,
      r`Rate rises steadily across the whole range shown`,
      r`Rate falls to a minimum at 40 °C and then rises`,
      r`Rate stays level until 40 °C and then falls sharply`,
    ],
    correctAnswer: 0,
    explanation: r`A quick read names the trend, where it changes and the extremes: the rate rises, turns at 40 °C where it peaks at 80 units, and falls to its lowest value at 60 °C. A steady rise ignores the drop after 40 °C. A minimum at 40 °C inverts the shape, and a level start ignores the climb from 10 to 80 units.`,
  },
  [r`What is the first question to ask of a data table?`]: {
    question: r`A table has four rows labeled 0, 50, 100 and 200 mM NaCl. Its columns are headed "Trial 1", "Trial 2" and "Mean", and a note above the columns reads "Clotting time (s)". What are the independent variable and the measured quantity?`,
    options: [
      r`IV: clotting time; measured: NaCl concentration`,
      r`IV: trial number; measured: NaCl concentration`,
      r`IV: NaCl concentration; measured: clotting time`,
      r`IV: trial number; measured: mean of the trials`,
    ],
    correctAnswer: 2,
    explanation: r`The rows list the values the researchers set (NaCl concentration), and the cells hold what was measured at each one (clotting time in seconds). Swapping them confuses what was set with what was recorded. Trial number only labels repeated measurements; it is not a variable being tested.`,
  },
  [r`What should you do when a figure has an unfamiliar technique?`]: {
    question: r`A figure comes from a technique the student has never seen. The x-axis is "Ligand added per protein (mol/mol)" and the y-axis is "Heat released per injection". The caption says heat is released when ligand binds. The wild-type curve starts high and falls to zero by a ratio of 1; the mutant curve is flat at zero throughout. Which protein binds the ligand?`,
    options: [
      r`The mutant, since a flat line means binding is complete`,
      r`It cannot be told, since the technique was not explained`,
      r`Both equally, since both curves end at zero heat released`,
      r`The wild type, since only it releases heat as ligand is added`,
    ],
    correctAnswer: 3,
    explanation: r`The axes and caption are enough: heat means binding, the wild type gives heat until it is saturated near a ratio of 1, and the mutant never gives any. Reading the flat mutant line as complete binding ignores that it shows no heat at any point. Giving up because the technique is unfamiliar, or looking only at where the curves end, skips the trend the axes make readable.`,
  },
  [r`Why should you read the figure caption?`]: {
    question: r`A figure has two panels of bars showing glucose uptake. In panel A, uptake is 10 without insulin and 30 with insulin. In panel B, uptake is 10 with or without insulin. The caption reads: "Panel A: wild-type cells. Panel B: cells lacking the GLUT4 transporter. Uptake in pmol/min." What best explains panel B?`,
    options: [
      r`The panel B cells were not given insulin, so uptake did not rise`,
      r`The panel B cells lack GLUT4, so insulin cannot raise uptake`,
      r`The panel B axis uses different units, so the bars look equal`,
      r`The panel B cells are wild type, so the insulin was inactive`,
    ],
    correctAnswer: 1,
    explanation: r`Only the caption says that panel B used cells without GLUT4, which explains why insulin raised uptake threefold in panel A but not at all in panel B. Panel B does include an insulin bar, so the cells were treated. The caption gives one unit for both panels, and it states that the wild-type cells are in panel A.`,
  },
}
