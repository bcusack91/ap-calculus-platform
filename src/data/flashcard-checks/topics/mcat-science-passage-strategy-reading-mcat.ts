import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-science-passage-strategy-reading-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`How do you handle a passage contradicting what you learned?`]: {
    question: r`A passage reports that enzyme E from a deep-sea fish has an activity of 90 units at 4 °C and 30 units at 20 °C. A student has learned that enzymes generally work faster as temperature rises toward their optimum. A question asks: "According to the passage, what happens to the activity of enzyme E when the temperature is raised from 4 °C to 20 °C?"`,
    options: [
      r`It rises about threefold, as enzyme kinetics would predict`,
      r`It stays the same, since the two effects cancel each other`,
      r`It falls to about one third, as the passage data show`,
      r`It falls to zero, since the enzyme denatures above 4 °C`,
    ],
    correctAnswer: 2,
    explanation: r`The passage gives 90 units at 4 °C and 30 units at 20 °C, so activity falls to one third, and the passage wins over a general rule. A threefold rise comes from answering with outside expectations instead of the data. Nothing in the passage supports no change, and 30 units is not zero.`,
  },
  [r`What should you do with a dense methods description?`]: {
    question: r`A methods paragraph reads: "Cells were lysed in 50 mM Tris, pH 7.4, with 1% detergent and centrifuged at 12,000 g for 10 min. The supernatant was incubated with 0, 5 or 25 μM inhibitor for 30 min, and caspase activity was then read by fluorescence." What should be noted on a first read?`,
    options: [
      r`Inhibitor dose was varied; caspase activity was measured`,
      r`Lysis used 50 mM Tris at pH 7.4 with 1% detergent added`,
      r`The spin was 12,000 g for 10 min before the incubation`,
      r`Buffer pH was varied; inhibitor dose was held constant`,
    ],
    correctAnswer: 0,
    explanation: r`The useful part of a methods paragraph is what was manipulated (inhibitor at 0, 5 or 25 μM) and what was measured (caspase activity). The buffer recipe and the spin settings are procedural details to look up only if a question asks. The buffer pH was fixed at 7.4, so saying it was varied misreads the design.`,
  },
  [r`What signals that a sentence is likely to be tested?`]: {
    question: r`Four sentences appear in a passage about a gene knockout in mice. Which one is most likely to be the basis of a question?`,
    options: [
      r`"Mice were housed in standard cages on a 12-hour light cycle."`,
      r`"Tissue samples were kept at −80 °C until they were analyzed."`,
      r`"The gene was first described in the 1990s by another group."`,
      r`"Unexpectedly, the knockout mice lived longer than controls."`,
    ],
    correctAnswer: 3,
    explanation: r`The sentence about lifespan flags an unexpected result and makes a comparison between knockout and control mice, both strong signals of a tested point. Housing conditions and sample storage are routine procedure. The history of the gene is background that questions rarely depend on.`,
  },
  [r`What is the difference between reading for gist and reading for detail?`]: {
    question: r`After a 90-second first pass, a student can say: "They tested whether drug D lowers heart rate in rats, and it did; doses are in Table 1." The student cannot recall any dose. A question then asks which dose produced the largest drop. Was the first pass done well?`,
    options: [
      r`No; the doses should have been memorized on the first pass`,
      r`Yes; the gist is in hand and the dose can be looked up now`,
      r`No; Table 1 should have been ignored until the final question`,
      r`Yes; the dose can be inferred from the gist without Table 1`,
    ],
    correctAnswer: 1,
    explanation: r`Reading for gist gives the purpose, the finding and where the data sit; the specific dose is a detail to retrieve from Table 1 when a question asks for it. Memorizing doses on the first pass spends time on details that may never be tested. The gist alone cannot supply a number, and knowing where the table is was part of a good first pass.`,
  },
  [r`How should you treat the introductory paragraph of a science passage?`]: {
    question: r`A passage begins: "Statins lower LDL cholesterol, but some patients develop muscle pain. It is unclear whether this pain results from reduced coenzyme Q10 in muscle." What should a reader expect the rest of the passage to be about?`,
    options: [
      r`A test of whether low coenzyme Q10 explains the muscle pain`,
      r`A test of whether statins really do lower LDL cholesterol`,
      r`A review of how the liver makes and exports LDL cholesterol`,
      r`A test of whether coenzyme Q10 lowers LDL cholesterol levels`,
    ],
    correctAnswer: 0,
    explanation: r`The introduction frames the open question: does reduced coenzyme Q10 cause the muscle pain? That tells the reader what the experiments will address. The LDL-lowering effect is stated as settled background, not as the question. Nothing suggests a review of LDL synthesis or a claim that coenzyme Q10 affects LDL.`,
  },
  [r`How should you read passages with multiple experiments?`]: {
    question: r`A passage describes three experiments on yeast. Experiment 1: glucose medium with oxygen, giving 2 units of ethanol. Experiment 2: the same as Experiment 1 but without oxygen, giving 20 units. Experiment 3: the same as Experiment 2 but with glycerol in place of glucose, giving 0 units. Which comparison isolates the effect of oxygen?`,
    options: [
      r`Experiment 1 versus Experiment 3`,
      r`Experiment 2 versus Experiment 3`,
      r`Experiment 1 versus Experiment 2`,
      r`All three experiments taken together`,
    ],
    correctAnswer: 2,
    explanation: r`Tracking what changed shows that only oxygen differs between Experiments 1 and 2, so that pair isolates its effect (2 versus 20 units). Experiments 2 and 3 differ only in the carbon source, so they isolate glucose versus glycerol. Experiments 1 and 3 differ in two ways at once, and pooling all three mixes both changes.`,
  },
  [r`Why is annotating sparingly better than heavily?`]: {
    question: r`On the same passage, student A spends 20 seconds jotting "P1 background, P2 method, P3 result: drug lowers BP". Student B spends 3 minutes writing a full-sentence summary of each paragraph and copying every value from the table. Which evaluation is best?`,
    options: [
      r`B did better: copied values mean the passage is never reopened`,
      r`B did better: more notes always mean more questions answered`,
      r`A did worse: with no values written, details cannot be found`,
      r`A did better: a few structural markers give most of the benefit`,
    ],
    correctAnswer: 3,
    explanation: r`A few markers showing where things are give most of the benefit of annotation for a fraction of the time, so student A is better placed. Student B spent 3 minutes copying values that stay on screen and are mostly never asked about. Details are found by returning to the passage, which A's markers make quick.`,
  },
  [r`What is the role of the final paragraph in science passages?`]: {
    question: r`A passage ends: "These results suggest that compound K slows tumor growth in mice. However, only male mice were tested, and the doses used exceeded those tolerated by humans." Which inference does this paragraph best support?`,
    options: [
      r`The effect has been shown in both sexes at human doses`,
      r`The effect may not extend to females or to human doses`,
      r`The compound has no real effect on tumor growth in mice`,
      r`The compound is unsafe for mice at every dose tested`,
    ],
    correctAnswer: 1,
    explanation: r`The final paragraph states the conclusion and then its limits: only males were tested and doses were above what humans tolerate, so the finding may not generalize to females or to human dosing. Claiming it was shown in both sexes at human doses contradicts those limits. The paragraph says the compound did slow growth, and it says nothing about harm to the mice.`,
  },
}
