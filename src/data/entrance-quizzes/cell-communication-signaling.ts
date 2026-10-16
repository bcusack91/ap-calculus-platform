/**
 * Entrance Quiz — Cell Communication & Signaling (AP Biology)
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Signal Transduction Overview (why transduction exists, response needs target proteins)
 *  2 — Types of Signaling (gap junctions, autocrine signaling)
 *  3 — Signal Reception (intracellular receptors, receptor kinase domain)
 *  4 — Signal Transduction Pathways (amplification, pathway order)
 *  5 — Cellular Responses (blocked signal termination, insulin and diabetes)
 *  6 — Problem-Solving Workshop (locating a defect, dose-response with a drug)
 *  7 — Synthesis & AP Review (combined defects, switching a pathway off)
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Signal Transduction Overview
  {
    id: 'bccs-ent-1a',
    question:
      'Most signaling pathways include a transduction stage between reception at the receptor and the final response. What does this middle stage allow the cell to do?',
    options: [
      'Amplify the message and regulate it at each relay step',
      'Supply the energy that the final response requires',
      'Carry the ligand itself into the nucleus to alter DNA',
      'Convert the ligand directly into the response product',
    ],
    correctIndex: 0,
    explanation:
      'Each relay step can activate many molecules of the next (amplification), can be adjusted by other inputs, and can branch to several targets. The ligand carries information, not energy, and it usually never enters the cell.',
    partNumber: 1,
    partTitle: 'Signal Transduction Overview',
  },
  {
    id: 'bccs-ent-1b',
    question:
      'Cultured cells have working insulin receptors and a normal insulin pathway, but they lack the gene for the glucose transporter that insulin normally sends to the cell surface. What happens when insulin is added?',
    options: [
      'Glucose uptake rises, since insulin itself carries glucose into the cell',
      'Insulin cannot bind, since the receptor needs the transporter to work',
      'Insulin binds, but glucose uptake cannot rise without the transporter',
      'The cells make the transporter, since insulin supplies the missing gene',
    ],
    correctIndex: 2,
    explanation:
      'A signal selects a response the cell is already equipped to make. Reception and transduction can occur, but the final target protein is missing, so the response cannot happen. Insulin does not carry glucose or supply genes.',
    partNumber: 1,
    partTitle: 'Signal Transduction Overview',
  },

  // Part 2: Types of Signaling
  {
    id: 'bccs-ent-2a',
    question:
      'A drug closes the gap junctions between heart muscle cells but has no other effects. Which change is most likely?',
    options: [
      'Each cell stops responding to hormones carried in the blood',
      'The cells contract less in unison, since signals cannot pass cell to cell',
      'Each cell contracts faster, since ions now stay inside it',
      'Nothing changes, since heart cells signal only through hormones',
    ],
    correctIndex: 1,
    explanation:
      'Gap junctions link the cytoplasm of neighboring cells so ions pass directly, letting an electrical signal spread quickly and the heart contract in a coordinated way. Closing them disrupts this direct-contact signaling; hormone signaling is unaffected.',
    partNumber: 2,
    partTitle: 'Types of Signaling',
  },
  {
    id: 'bccs-ent-2b',
    question:
      'An activated immune cell secretes a growth signal and also has receptors for that same signal on its own surface, so it stimulates its own division. How is this signaling best classified?',
    options: [
      'Endocrine, since the signal travels in the blood',
      'Synaptic, since the signal crosses a narrow gap',
      'Autocrine, since the cell responds to its own signal',
      'Direct contact, since the cells must be touching',
    ],
    correctIndex: 2,
    explanation:
      'Autocrine signaling is a form of local signaling in which a cell responds to a regulator it secreted itself. The signal is not carried in the blood, does not cross a synapse, and is released rather than displayed on a touching cell.',
    partNumber: 2,
    partTitle: 'Types of Signaling',
  },

  // Part 3: Signal Reception
  {
    id: 'bccs-ent-3a',
    question:
      'A drug binds the intracellular receptor for a steroid hormone and prevents the hormone-receptor complex from entering the nucleus, but the hormone can still bind. What is the most likely result in target cells?',
    options: [
      'The response is stronger, since the complex remains in the cytoplasm longer',
      'The usual genes are not transcribed, so the response fails',
      'The hormone acts through cAMP instead, so the response is unchanged',
      'The hormone now binds membrane receptors and triggers a quick response',
    ],
    correctIndex: 1,
    explanation:
      'A steroid hormone-receptor complex acts as a transcription factor in the nucleus. If it cannot reach the DNA, the target genes are not turned on and no new proteins are made. Steroid receptors do not switch to cAMP pathways.',
    partNumber: 3,
    partTitle: 'Signal Reception',
  },
  {
    id: 'bccs-ent-3b',
    question:
      'A mutant growth-factor receptor has a normal outside binding site, but the inside portion that adds phosphate groups to proteins has been deleted. What happens when the growth factor is added?',
    options: [
      'No cascade begins, though the ligand still binds',
      'The cascade runs constantly, even with no ligand present',
      'The ligand cannot bind, since the receptor is incomplete',
      'The receptor carries the growth factor into the nucleus',
    ],
    correctIndex: 0,
    explanation:
      'For a receptor tyrosine kinase, the inside portion is the enzyme that starts the phosphorylation cascade. Binding can still occur at the intact outside site, but nothing is passed on, so the cell does not divide in response.',
    partNumber: 3,
    partTitle: 'Signal Reception',
  },

  // Part 4: Signal Transduction Pathways
  {
    id: 'bccs-ent-4a',
    question:
      'In a hypothetical pathway, one active receptor activates 8 G proteins; each G protein activates one enzyme that makes 50 cAMP; each cAMP activates one kinase; and each kinase activates 15 target proteins. How many target proteins are activated per active receptor?',
    options: ['73', '400', '750', '6,000'],
    correctIndex: 3,
    explanation:
      'Multiply through the cascade: $8 \\times 50 = 400$ cAMP, and $400 \\times 15 = 6{,}000$ target proteins. Adding the numbers (73) or stopping at cAMP (400) misses the amplification at each step.',
    partNumber: 4,
    partTitle: 'Signal Transduction Pathways',
  },
  {
    id: 'bccs-ent-4b',
    question:
      'Which sequence correctly orders the steps of the epinephrine pathway in a liver cell?',
    options: [
      'Receptor → G protein → cAMP-making enzyme → cAMP → protein kinase',
      'Receptor → cAMP → G protein → protein kinase → cAMP-making enzyme',
      'G protein → receptor → protein kinase → cAMP → cAMP-making enzyme',
      'Receptor → protein kinase → cAMP-making enzyme → G protein → cAMP',
    ],
    correctIndex: 0,
    explanation:
      'Epinephrine binding changes the receptor\'s shape, which activates the G protein; the G protein activates the membrane enzyme that converts ATP to cAMP; and cAMP activates a protein kinase that starts the phosphorylation cascade.',
    partNumber: 4,
    partTitle: 'Signal Transduction Pathways',
  },

  // Part 5: Cellular Responses
  {
    id: 'bccs-ent-5a',
    question:
      'A pesticide inhibits the enzyme that breaks down acetylcholine at the junctions between nerves and muscles. What is the most likely effect?',
    options: [
      'Muscles cannot contract, since acetylcholine is never released',
      'Muscle cells lose their acetylcholine receptors within seconds',
      'Muscles relax, since acetylcholine now blocks its own receptor',
      'Acetylcholine builds up, and the muscles keep being stimulated',
    ],
    correctIndex: 3,
    explanation:
      'Breaking down the neurotransmitter is the off-switch at the synapse. With that enzyme inhibited, acetylcholine accumulates and keeps binding receptors, so muscles are stimulated without stopping.',
    partNumber: 5,
    partTitle: 'Cellular Responses',
  },
  {
    id: 'bccs-ent-5b',
    question:
      'Patient A makes normal amounts of insulin, but the target cells respond weakly. Patient B makes no insulin because the cells that produce it were destroyed. For which patient would insulin injections be most effective at lowering blood glucose?',
    options: [
      'Patient A, since more insulin always overcomes a faulty pathway',
      'Patient B, since the signal is missing but the pathway works',
      'Neither patient, since injected insulin cannot reach any receptors',
      'Both equally, since both patients have the same underlying defect',
    ],
    correctIndex: 1,
    explanation:
      'Patient B (type 1) lacks the signal, so supplying insulin restores the pathway. Patient A (type 2) has a problem in the receptor or downstream steps, so adding more of a signal that is already present helps less.',
    partNumber: 5,
    partTitle: 'Cellular Responses',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'bccs-ent-6a',
    question:
      'In a mutant liver cell line, cAMP does not rise when epinephrine is added, and it still does not rise when a drug that directly switches on the cAMP-making enzyme is added. Adding cAMP itself restores glucose release. Where is the defect most likely located?',
    options: [
      'In the epinephrine receptor',
      'In the G protein',
      'In the enzyme that makes cAMP',
      'In a kinase enzyme downstream of cAMP',
    ],
    correctIndex: 2,
    explanation:
      'The drug bypasses the receptor and G protein, so its failure places the defect at the cAMP-making enzyme. Because added cAMP restores the response, every step from cAMP onward works.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'bccs-ent-6b',
    question:
      'Without drug Z, the response to a hormone rises from 30% at 1 nM to 100% at 1,000 nM. With drug Z present, the response is 15% at 1 nM and levels off at 50% even at 1,000 nM. Which conclusion is best supported?',
    options: [
      'Drug Z competes with the hormone for the binding site',
      'Drug Z acts as an agonist that activates the receptor itself',
      'Drug Z lowers the maximum, so more hormone cannot overcome it',
      'Drug Z has no effect once the hormone reaches 10 nM or more',
    ],
    correctIndex: 2,
    explanation:
      'If the drug competed for the binding site, enough hormone would push the response back to nearly 100%. Instead the maximum is cut in half, so drug Z must act in a way extra hormone cannot reverse, such as blocking a downstream step.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'bccs-ent-7a',
    question:
      'Liver cells are treated with two toxins: one keeps the G protein from binding GTP, and the other blocks the enzyme that breaks down cAMP. Epinephrine is then added. What is the expected result?',
    options: [
      'cAMP rises and stays high, since it can no longer be broken down',
      'Glucose release rises, since the two toxins cancel each other out',
      'The receptor cannot bind epinephrine, so cAMP rises from other sources',
      'Little cAMP is made, so glucose release stays low',
    ],
    correctIndex: 3,
    explanation:
      'A G protein that cannot bind GTP never activates the cAMP-making enzyme, so the signal stops at that step. Blocking cAMP breakdown does not matter when almost no cAMP is being made; a change acts on the steps downstream of it.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'bccs-ent-7b',
    question:
      'Which set lists only events that switch a signaling pathway off?',
    options: [
      'GTP binding, cAMP synthesis, kinase activity',
      'cAMP synthesis, GTP hydrolysis, kinase activity',
      'Ligand binding, cAMP breakdown, phosphatase activity',
      'GTP hydrolysis, cAMP breakdown, phosphatase activity',
    ],
    correctIndex: 3,
    explanation:
      'G proteins turn off by hydrolyzing GTP, cAMP is broken down to inactive AMP, and phosphatases remove the phosphates that kinases added. GTP binding, cAMP synthesis, kinase activity and ligand binding are all "on" events.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

/**
 * Generate an entrance quiz for the cell-communication-signaling topic.
 * Returns all 14 questions in shuffled order.
 */
export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

/**
 * Get the list of part numbers and titles covered by this entrance quiz.
 */
export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Signal Transduction Overview' },
    { partNumber: 2, partTitle: 'Types of Signaling' },
    { partNumber: 3, partTitle: 'Signal Reception' },
    { partNumber: 4, partTitle: 'Signal Transduction Pathways' },
    { partNumber: 5, partTitle: 'Cellular Responses' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
