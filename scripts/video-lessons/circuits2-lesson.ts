/**
 * The website video lesson for Circuits Part 2 (MCAT), built from the
 * SECTIONS of the YouTube videos: which section carries which checkpoint
 * question, and the worked examples' numeric answer keys. This is the
 * question → section map; `sync-circuits2.ts` writes it to the database.
 *
 * Videos 1–4 are live. A new video's section files go to
 * public/video-lessons/mcat-circ2/c0N/ (cut with _manim/tools/web_clips.py)
 * and its block is added here.
 */
import { shotList } from '../../src/data/video-shot-lists/mcat-prep/mcat-physics-electricity-kirchhoff-power-mcat'
import type { CheckpointQuestion } from '../../src/lib/video-lesson-core'
import type { LessonSpec } from './lesson-spec'
import { FIG } from './circuits2-figures'

const plan = (video: number, index: number): CheckpointQuestion => {
  const q = shotList.clips[video - 1]?.checkpoint[index]
  if (!q) throw new Error(`shot list has no question ${index} for clip ${video}`)
  return q
}

export const LESSON: LessonSpec = {
  key: 'mcat-circ2',
  topicSlug: 'mcat-physics-electricity-kirchhoff-power-mcat',
  courseSlug: 'mcat-prep',
  title: "Circuits Part 2: Kirchhoff's Rules & Power",
  instructor: {
    slug: 'brendan-cusack',
    name: 'Brendan Cusack',
    headline: 'Physics & MCAT tutor',
    bio: 'Teaches MCAT physics and AP Physics in live StudyMondo classes and on the StudyMondo YouTube channel.',
    email: 'brendan@cusackprep.com',
    photoUrl: '/instructors/brendan-cusack.png',
    courses: ['mcat-prep'],
  },
  videos: [
    {
      video: 1,
      sections: [
        { id: '02-junction', title: 'The junction rule: charge is conserved', role: 'teach', questions: [plan(1, 0)] },
        { id: '03-loop-rule', title: 'The loop rule: energy is conserved', role: 'teach' },
        { id: '04-signs', title: 'Sign conventions for walking a loop', role: 'teach' },
        { id: '05-guess', title: 'Guess a direction, then trust the sign', role: 'teach', questions: [plan(1, 1)] },
        { id: '06-two-sources', title: 'Two sources in one loop', role: 'teach' },
        { id: '07-staircase', title: 'The potential staircase', role: 'teach', questions: [plan(1, 2)] },
        { id: '08-recap', title: 'Remember', role: 'teach' },
      ],
    },
    {
      video: 2,
      sections: [
        {
          id: '02-ex1-problem',
          title: 'Example 1: the problem',
          role: 'problem',
          questions: [
            {
              kind: 'numeric',
              figure: FIG.v2_ex1,
              question: 'Example 1. A 30 V ideal battery drives 3 Ω, 5 Ω and 7 Ω resistors in series, in that order from its + terminal. Walk the loop with the current.',
              parts: [
                { label: 'a', prompt: 'The current the loop rule predicts', answer: 2.0, unit: 'A', expected: '2.0 A' },
                { label: 'b', prompt: 'Voltage drop across the 3 Ω resistor', answer: 6, unit: 'V', expected: '6 V' },
                { label: 'b', prompt: 'Voltage drop across the 5 Ω resistor', answer: 10, unit: 'V', expected: '10 V' },
                { label: 'b', prompt: 'Voltage drop across the 7 Ω resistor', answer: 14, unit: 'V', expected: '14 V' },
              ],
              explanation:
                '(a) Walking with the current: +30 − 3I − 5I − 7I = 0, so 30 = 15I and I = 2.0 A. (b) Each drop is IR: 2.0 A × 3 Ω = 6 V, 2.0 A × 5 Ω = 10 V, 2.0 A × 7 Ω = 14 V. The drops add back to the source: 6 + 10 + 14 = 30 V.',
            },
            {
              kind: 'numeric',
              figure: FIG.v2_ex1,
              question: 'Example 1, part (c). The battery’s − terminal is grounded (0 V). Give the potential at each point, following the current from the + terminal.',
              parts: [
                { label: 'c', prompt: 'Just past the battery’s + terminal', answer: 30, unit: 'V', expected: '30 V' },
                { label: 'c', prompt: 'After the 3 Ω resistor', answer: 24, unit: 'V', expected: '24 V' },
                { label: 'c', prompt: 'After the 5 Ω resistor', answer: 14, unit: 'V', expected: '14 V' },
                { label: 'c', prompt: 'After the 7 Ω resistor', answer: 0, unit: 'V', expected: '0 V (back at ground)' },
              ],
              explanation:
                'Start at 30 V just past the + terminal and subtract each drop: 30 − 6 = 24 V after the 3 Ω, 24 − 10 = 14 V after the 5 Ω, 14 − 14 = 0 V after the 7 Ω, right back at ground. A common trap: 10 V is the drop ACROSS the 5 Ω; the potential AFTER it is 14 V.',
            },
          ],
        },
        { id: '03-ex1-solution', title: 'Example 1: the solution', role: 'solution' },
        {
          id: '04-ex2-problem',
          title: 'Example 2: the problem',
          role: 'problem',
          questions: [
            {
              kind: 'numeric',
              figure: FIG.v2_ex2,
              question: 'Example 2. A 12 V and a 4 V ideal battery sit in one loop, oriented to push current in opposite directions, with a 2 Ω and a 6 Ω resistor.',
              parts: [
                { label: 'a', prompt: 'The current in the loop', answer: 1.0, unit: 'A', expected: '1.0 A, the way the 12 V battery pushes' },
                { label: 'b', prompt: 'Voltage across the 2 Ω resistor', answer: 2, unit: 'V', expected: '2 V' },
                { label: 'b', prompt: 'Voltage across the 6 Ω resistor', answer: 6, unit: 'V', expected: '6 V' },
              ],
              explanation:
                '(a) Opposing sources subtract: the net is 12 − 4 = 8 V, pushing the way the 12 V battery does. Walking that way: +12 − 4 − 2I − 6I = 0, so 8 = 8I and I = 1.0 A, out of the 12 V battery’s + terminal and into the 4 V battery’s + terminal. The trap is adding the batteries to 16 V. (b) IR: 1.0 A × 2 Ω = 2 V and 1.0 A × 6 Ω = 6 V; together 8 V, the net source voltage.',
            },
            {
              kind: 'numeric',
              figure: FIG.v2_ex2,
              question: 'Example 2, part (c). Walk the same loop AGAINST the current. Record the potential change for each element (negative for a drop) and check that the sum closes.',
              parts: [
                { label: 'c', prompt: 'The 12 V battery, crossed + to −', answer: -12, unit: 'V', expected: '−12 V' },
                { label: 'c', prompt: 'The 6 Ω resistor, crossed against the current', answer: 6, unit: 'V', expected: '+6 V' },
                { label: 'c', prompt: 'The 2 Ω resistor, crossed against the current', answer: 2, unit: 'V', expected: '+2 V' },
                { label: 'c', prompt: 'The 4 V battery, crossed − to +', answer: 4, unit: 'V', expected: '+4 V' },
              ],
              explanation:
                'Against the current every sign flips, the batteries too: the 12 V battery crossed + to − is −12 V, the 6 Ω against the current is +6 V, the 2 Ω is +2 V, and the 4 V battery crossed − to + is +4 V. −12 + 6 + 2 + 4 = 0: the loop still closes.',
            },
          ],
        },
        { id: '05-ex2-solution', title: 'Example 2: the solution', role: 'solution' },
        { id: '06-recap', title: 'Remember: the method', role: 'teach', questions: [plan(2, 0), plan(2, 1), plan(2, 2)] },
      ],
    },
    {
      // Video 3 carries extra practice on every section (owner request,
      // 2026-11-12: students found this set hard). Up to three questions
      // per section is the player's cap (MAX_QUESTIONS_PER_STEP).
      video: 3,
      sections: [
        {
          id: '02-nodes',
          title: 'Nodes: what is really in series or parallel',
          role: 'teach',
          questions: [
            {
              figure: FIG.v3_nodes_1,
              question: 'Resistor R₁ runs from node a to node b. R₂ and R₃ each run from node b to node c. The battery connects node c back to node a. How are the resistors arranged?',
              options: [
                'R₂ and R₃ are in parallel, and R₁ is in series with that pair',
                'R₁ and R₂ are in series, and R₃ is in parallel with the battery',
                'All three are in parallel, since each one touches node b',
                'R₁ and R₃ are in parallel, and R₂ is in series with the battery',
              ],
              correctAnswer: 0,
              explanation:
                'R₂ and R₃ join the same two nodes, b and c, so they are in parallel. The current leaving node a has only one path, through R₁, before it reaches the junction at b, so R₁ is in series with the pair. R₁ and R₂ are not in series: junction b lies between them and splits the current. Touching one shared node is not enough for parallel; the elements must share BOTH nodes. And R₃ joins b to c, not the battery’s two terminals.',
            },
            {
              figure: FIG.v3_nodes_2,
              question: 'Two resistors lie end to end along one wire. At the point where they meet, a third wire branches off to another part of the circuit. Are the two resistors in series?',
              options: [
                'No: the branch point is a junction, so the current splits between them',
                'Yes: they lie along one wire, so one current passes through both of them',
                'Yes: two resistors that touch at a node always share the same current',
                'No: resistors are in series only when they also share their other ends',
              ],
              correctAnswer: 0,
              explanation:
                'Two elements are in series only if NO junction lies between them. The branch wire at the meeting point is a junction: some of the current that leaves the first resistor takes the branch, so the second resistor carries less. Lying along one drawn wire proves nothing; the nodes decide. Sharing one node is not enough for series; and sharing both ends would make them parallel, not series.',
            },
          ],
        },
        {
          id: '03-collapse',
          title: 'Collapse inside-out, then walk back out',
          role: 'teach',
          questions: [
            {
              kind: 'numeric',
              figure: FIG.v3_collapse_1,
              question: 'Practice 1. A 24 V ideal battery feeds a 2 Ω resistor in series with a parallel pair of 3 Ω and 6 Ω. Collapse inside-out, then walk back out.',
              parts: [
                { label: 'a', prompt: 'Resistance of the 3 Ω ∥ 6 Ω pair', answer: 2, unit: 'Ω', expected: '2 Ω' },
                { label: 'b', prompt: 'Total resistance seen by the battery', answer: 4, unit: 'Ω', expected: '4 Ω' },
                { label: 'c', prompt: 'Current from the battery', answer: 6, unit: 'A', expected: '6 A' },
                { label: 'd', prompt: 'Current in the 3 Ω resistor', answer: 4, unit: 'A', expected: '4 A' },
              ],
              explanation:
                '(a) Product over sum: (3)(6)/(3 + 6) = 2 Ω. (b) In series with the 2 Ω: 2 + 2 = 4 Ω. (c) I = 24/4 = 6 A. (d) Walk back out: the 2 Ω resistor drops (6)(2) = 12 V, leaving 12 V across the pair, so the 3 Ω carries 12/3 = 4 A and the 6 Ω carries 12/6 = 2 A. Checks: 4 + 2 = 6 A at the junction, and 24 − 12 − 12 = 0 around the loop.',
            },
            {
              kind: 'numeric',
              figure: FIG.v3_collapse_2,
              question: 'Practice 2. A 12 V ideal battery sits directly across two branches: one is a single 6 Ω resistor, the other is a 2 Ω and a 4 Ω resistor in series. Collapse the innermost group first.',
              parts: [
                { label: 'a', prompt: 'Resistance of the 2 Ω + 4 Ω branch', answer: 6, unit: 'Ω', expected: '6 Ω' },
                { label: 'b', prompt: 'Total resistance seen by the battery', answer: 3, unit: 'Ω', expected: '3 Ω' },
                { label: 'c', prompt: 'Current from the battery', answer: 4, unit: 'A', expected: '4 A' },
                { label: 'd', prompt: 'Voltage across the 2 Ω resistor', answer: 4, unit: 'V', expected: '4 V' },
              ],
              explanation:
                '(a) The innermost group here is a SERIES pair inside a branch: 2 + 4 = 6 Ω. (b) Two 6 Ω branches in parallel: (6)(6)/12 = 3 Ω. (c) I = 12/3 = 4 A. (d) Each branch has the full 12 V, so the series branch carries 12/6 = 2 A, and the 2 Ω resistor drops (2)(2) = 4 V; the 4 Ω takes the other 8 V. Junction check: 2 A + 2 A = 4 A.',
            },
          ],
        },
        {
          id: '04-dividers',
          title: 'The voltage divider and the current divider',
          role: 'teach',
          questions: [
            {
              kind: 'numeric',
              figure: FIG.v3_dividers_1,
              question: 'Practice 1. A 12 V ideal source sits across a 1 kΩ and a 5 kΩ resistor in series. Use the voltage divider, then check with Ohm’s law.',
              parts: [
                { label: 'a', prompt: 'Voltage across the 1 kΩ resistor', answer: 2, unit: 'V', expected: '2 V' },
                { label: 'b', prompt: 'Voltage across the 5 kΩ resistor', answer: 10, unit: 'V', expected: '10 V' },
                { label: 'c', prompt: 'Current in the loop', answer: 2, unit: 'mA', expected: '2 mA' },
              ],
              explanation:
                'Series resistors share the voltage in proportion to resistance: V₁ = 12 × 1/(1 + 5) = 2 V and V₅ = 12 × 5/6 = 10 V, which add back to 12 V. The bigger resistor takes the bigger share. Check: I = 12 V / 6 kΩ = 2 mA, and (2 mA)(1 kΩ) = 2 V, (2 mA)(5 kΩ) = 10 V.',
            },
            {
              kind: 'numeric',
              figure: FIG.v3_dividers_2,
              question: 'Practice 2. A total current of 9.0 mA enters a parallel pair of 1 kΩ and 2 kΩ. Use the current divider, then check that both branches have the same voltage.',
              parts: [
                { label: 'a', prompt: 'Current in the 1 kΩ branch', answer: 6, unit: 'mA', expected: '6.0 mA' },
                { label: 'b', prompt: 'Current in the 2 kΩ branch', answer: 3, unit: 'mA', expected: '3.0 mA' },
                { label: 'c', prompt: 'Voltage across the pair', answer: 6, unit: 'V', expected: '6 V' },
              ],
              explanation:
                'Parallel resistors share the current inversely, with the OTHER resistor on top: I₁ = 9.0 × 2/(1 + 2) = 6.0 mA and I₂ = 9.0 × 1/3 = 3.0 mA. The smaller resistance takes the bigger share, and the two add back to 9.0 mA. Check: (6.0 mA)(1 kΩ) = 6 V and (3.0 mA)(2 kΩ) = 6 V, the same voltage across both branches. Putting the branch’s own resistance on top would give the 1 kΩ only 3 mA, backwards.',
            },
            plan(3, 0),
          ],
        },
        {
          id: '05-body',
          title: 'Current through the body: parallel tissue paths',
          role: 'teach',
          questions: [
            {
              kind: 'numeric',
              figure: FIG.v3_body_1,
              question: 'Practice 1. Two electrodes on an arm drive a total of 10 mA through two parallel tissue paths: a 500 Ω blood-and-muscle path and a 4.5 kΩ fat path.',
              parts: [
                { label: 'a', prompt: 'Current through the blood-and-muscle path', answer: 9, unit: 'mA', expected: '9 mA' },
                { label: 'b', prompt: 'Current through the fat path', answer: 1, unit: 'mA', expected: '1 mA' },
                { label: 'c', prompt: 'Voltage between the electrodes', answer: 4.5, unit: 'V', expected: '4.5 V' },
              ],
              explanation:
                'Other resistance on top: I_blood = 10 × 4500/(500 + 4500) = 9 mA, leaving 1 mA for fat. The low-resistance path takes nine tenths of the current. Check: (9 mA)(500 Ω) = 4.5 V and (1 mA)(4.5 kΩ) = 4.5 V, the same voltage across both paths, which is also the voltage between the electrodes.',
            },
            {
              kind: 'numeric',
              figure: FIG.v3_body_2,
              question: 'Practice 2. A total of 12 mA splits among THREE parallel tissue paths of 1 kΩ, 2 kΩ and 2 kΩ. With three branches, find the shared voltage first, then each current.',
              parts: [
                { label: 'a', prompt: 'Resistance of the three paths together', answer: 500, unit: 'Ω', expected: '500 Ω (0.5 kΩ)' },
                { label: 'b', prompt: 'Voltage across the paths', answer: 6, unit: 'V', expected: '6 V' },
                { label: 'c', prompt: 'Current in the 1 kΩ path', answer: 6, unit: 'mA', expected: '6 mA' },
                { label: 'd', prompt: 'Current in each 2 kΩ path', answer: 3, unit: 'mA', expected: '3 mA' },
              ],
              explanation:
                'The two-resistor divider formula is for two branches. With three, add the reciprocals: 1/R = 1/1 + 1/2 + 1/2 = 2 per kΩ, so R = 0.5 kΩ = 500 Ω. Then V = (12 mA)(0.5 kΩ) = 6 V across every path, and each current is that voltage over its own resistance: 6/1 = 6 mA, 6/2 = 3 mA, 6/2 = 3 mA. They add back to 12 mA, and half the current takes the one path with half the resistance.',
            },
            plan(3, 1),
          ],
        },
        {
          id: '06-chain',
          title: 'When the circuit changes: follow the chain',
          role: 'teach',
          questions: [
            {
              kind: 'numeric',
              figure: FIG.v3_chain_1,
              question: 'Practice 1. A 12 V ideal battery feeds a 2 Ω resistor in series with a single 6 Ω branch. A second 6 Ω branch is then added in parallel with the first. Follow the chain: R_eq, total current, series drop, bank voltage.',
              parts: [
                { label: 'a', prompt: 'New total resistance', answer: 5, unit: 'Ω', expected: '5 Ω' },
                { label: 'b', prompt: 'New total current', answer: 2.4, unit: 'A', expected: '2.4 A' },
                { label: 'c', prompt: 'New voltage across the bank', answer: 7.2, unit: 'V', expected: '7.2 V' },
                { label: 'd', prompt: 'New current in the ORIGINAL 6 Ω branch', answer: 1.2, unit: 'A', expected: '1.2 A' },
              ],
              explanation:
                'Before: R_eq = 2 + 6 = 8 Ω, I = 1.5 A, and the 6 Ω had 12 − 3 = 9 V and 1.5 A. After: the bank is 6 ∥ 6 = 3 Ω, so R_eq = 2 + 3 = 5 Ω and I = 12/5 = 2.4 A. The 2 Ω now drops (2.4)(2) = 4.8 V, leaving 12 − 4.8 = 7.2 V for the bank, so the original branch falls to 7.2/6 = 1.2 A. The total current rose, but the old branch dimmed, because the series resistor took more of the voltage. A common trap is keeping the old 1.5 A.',
            },
            {
              kind: 'numeric',
              figure: FIG.v3_chain_2,
              question: 'Practice 2. A 15 V ideal battery feeds a 1 Ω resistor in series with a bank of two 4 Ω branches in parallel. One 4 Ω branch then breaks open. Compare before and after.',
              parts: [
                { label: 'a', prompt: 'Total current BEFORE the branch opens', answer: 5, unit: 'A', expected: '5 A' },
                { label: 'b', prompt: 'Current in one 4 Ω branch BEFORE', answer: 2.5, unit: 'A', expected: '2.5 A' },
                { label: 'c', prompt: 'Total current AFTER', answer: 3, unit: 'A', expected: '3 A' },
                { label: 'd', prompt: 'Current in the surviving 4 Ω branch AFTER', answer: 3, unit: 'A', expected: '3 A' },
              ],
              explanation:
                'Before: the bank is 4 ∥ 4 = 2 Ω, R_eq = 3 Ω, I = 15/3 = 5 A; the 1 Ω drops 5 V, the bank has 10 V, and each branch carries 10/4 = 2.5 A. After: R_eq = 1 + 4 = 5 Ω, I = 15/5 = 3 A, all of it through the survivor; the 1 Ω drops only 3 V, so the bank now has 12 V and the survivor rises from 2.5 A to 3 A. Opening a branch is the reverse of adding one: the total current falls, the series drop shrinks, and the remaining branch gets more.',
            },
          ],
        },
        {
          id: '07-cases',
          title: 'Which branches feel a change',
          role: 'teach',
          questions: [
            {
              kind: 'numeric',
              figure: FIG.v3_cases_1,
              question: 'Practice 1. A 12 V ideal battery has two branches directly across it, 4 Ω and 6 Ω, with nothing in series. A third branch of 3 Ω is then added across the battery.',
              parts: [
                { label: 'a', prompt: 'Current in the 4 Ω branch AFTER the change', answer: 3, unit: 'A', expected: '3 A (unchanged)' },
                { label: 'b', prompt: 'Current from the battery BEFORE', answer: 5, unit: 'A', expected: '5 A' },
                { label: 'c', prompt: 'Current from the battery AFTER', answer: 9, unit: 'A', expected: '9 A' },
              ],
              explanation:
                'Every branch sits straight across the ideal 12 V source, so each keeps the full 12 V no matter what the others do: the 4 Ω carries 12/4 = 3 A before and after, the 6 Ω 2 A before and after. The battery supplied 3 + 2 = 5 A; the new 3 Ω branch draws 12/3 = 4 A, so the battery now supplies 9 A, and ALL of the extra goes to the new branch. Only a series resistor in front would make the old branches feel the change.',
            },
            {
              kind: 'numeric',
              figure: FIG.v3_cases_2,
              question: 'Practice 2. A 12 V ideal battery feeds a 2 Ω resistor in series with a bank of 3 Ω and 6 Ω in parallel. A bare wire is then laid across the 6 Ω branch.',
              parts: [
                { label: 'a', prompt: 'Current in the 3 Ω resistor BEFORE the short', answer: 2, unit: 'A', expected: '2 A' },
                { label: 'b', prompt: 'Voltage across the bank AFTER the short', answer: 0, unit: 'V', expected: '0 V' },
                { label: 'c', prompt: 'Current from the battery AFTER the short', answer: 6, unit: 'A', expected: '6 A' },
                { label: 'd', prompt: 'Current in the 3 Ω resistor AFTER the short', answer: 0, unit: 'A', expected: '0 A' },
              ],
              explanation:
                'Before: the bank is 2 Ω, R_eq = 4 Ω, I = 3 A, the 2 Ω drops 6 V, the bank has 6 V and the 3 Ω carries 2 A. After: the wire joins the bank’s two nodes with zero resistance, and every branch shares those same two nodes, so the whole bank has 0 V across it and the 3 Ω carries nothing. The battery now sees only the 2 Ω: I = 12/2 = 6 A, all of it through the wire. Short one branch and you short the whole bank, and the series resistor takes the full 12 V.',
            },
            plan(3, 2),
          ],
        },
        {
          id: '08-recap',
          title: 'Remember',
          role: 'teach',
          questions: [
            {
              kind: 'numeric',
              figure: FIG.v3_recap_1,
              question: 'Put it together, 1. A 16 V ideal battery feeds a 1 Ω resistor in series with a parallel pair of 4 Ω and 12 Ω.',
              parts: [
                { label: 'a', prompt: 'Total resistance seen by the battery', answer: 4, unit: 'Ω', expected: '4 Ω' },
                { label: 'b', prompt: 'Current from the battery', answer: 4, unit: 'A', expected: '4 A' },
                { label: 'c', prompt: 'Current in the 4 Ω branch', answer: 3, unit: 'A', expected: '3 A' },
                { label: 'd', prompt: 'Current in the 4 Ω branch after the 12 Ω branch breaks open', answer: 3.2, unit: 'A', expected: '3.2 A' },
              ],
              explanation:
                '(a) The pair: (4)(12)/16 = 3 Ω; with the 1 Ω, R_eq = 4 Ω. (b) I = 16/4 = 4 A. (c) The 1 Ω drops 4 V, leaving 12 V across the pair: 12/4 = 3 A in the 4 Ω and 12/12 = 1 A in the 12 Ω. (d) Re-solve from R_eq: 1 + 4 = 5 Ω, I = 16/5 = 3.2 A, all through the 4 Ω. Its current ROSE (3 → 3.2 A) because the series drop shrank from 4 V to 3.2 V, even though the total current fell.',
            },
            {
              kind: 'numeric',
              figure: FIG.v3_recap_2,
              question: 'Put it together, 2. Both dividers with the same two resistors. First a 24 V ideal source sits across a 2 kΩ and a 6 kΩ resistor in series; then, separately, 24 mA enters the same two resistors in parallel.',
              parts: [
                { label: 'a', prompt: 'Series: voltage across the 2 kΩ', answer: 6, unit: 'V', expected: '6 V' },
                { label: 'b', prompt: 'Series: voltage across the 6 kΩ', answer: 18, unit: 'V', expected: '18 V' },
                { label: 'c', prompt: 'Parallel: current in the 2 kΩ', answer: 18, unit: 'mA', expected: '18 mA' },
                { label: 'd', prompt: 'Parallel: current in the 6 kΩ', answer: 6, unit: 'mA', expected: '6 mA' },
              ],
              explanation:
                'Series splits VOLTAGE in proportion to R: V₂ = 24 × 2/8 = 6 V, V₆ = 24 × 6/8 = 18 V; the bigger resistor takes the bigger share. Parallel splits CURRENT inversely, other resistor on top: I₂ = 24 × 6/8 = 18 mA, I₆ = 24 × 2/8 = 6 mA; the smaller resistor takes the bigger share. The shares are mirror images: 1 : 3 for voltage, 3 : 1 for current. Check: (18 mA)(2 kΩ) = (6 mA)(6 kΩ) = 36 V.',
            },
          ],
        },
      ],
    },
    {
      video: 4,
      sections: [
        {
          id: '02-ex1-problem',
          title: 'Example 1: the problem',
          role: 'problem',
          questions: [
            {
              kind: 'numeric',
              figure: FIG.v4_ex1,
              question: 'Example 1. A 12 V ideal battery feeds a 2 Ω resistor in series with a parallel pair of 6 Ω and 3 Ω.',
              parts: [
                { label: 'a', prompt: 'Resistance of the 6 Ω ∥ 3 Ω pair', answer: 2, unit: 'Ω', expected: '2 Ω' },
                { label: 'a', prompt: 'Total resistance seen by the battery', answer: 4, unit: 'Ω', expected: '4 Ω' },
                { label: 'a', prompt: 'Current from the battery', answer: 3.0, unit: 'A', expected: '3.0 A' },
                { label: 'b', prompt: 'Voltage left across the pair', answer: 6, unit: 'V', expected: '6 V' },
              ],
              explanation:
                '(a) Inside-out: the pair is (6)(3)/(6 + 3) = 2 Ω; in series with the 2 Ω, R_eq = 4 Ω; I = 12/4 = 3.0 A. (b) Walking back out, the 2 Ω drops (3.0)(2) = 6 V first, so 12 − 6 = 6 V is left across the pair. A common trap is giving the pair the full 12 V.',
            },
            {
              kind: 'numeric',
              figure: FIG.v4_ex1c,
              question: 'Example 1, parts (b) and (c). The pair has 6 V across it. Then the 6 Ω branch breaks open.',
              parts: [
                { label: 'b', prompt: 'Current in the 6 Ω branch', answer: 1.0, unit: 'A', expected: '1.0 A' },
                { label: 'b', prompt: 'Current in the 3 Ω branch', answer: 2.0, unit: 'A', expected: '2.0 A' },
                { label: 'c', prompt: 'New current from the battery after the 6 Ω opens', answer: 2.4, unit: 'A', expected: '2.4 A' },
                { label: 'c', prompt: 'New current in the 3 Ω resistor', answer: 2.4, unit: 'A', expected: '2.4 A' },
              ],
              explanation:
                '(b) Each branch current is the pair voltage over its own resistance: 6/6 = 1.0 A and 6/3 = 2.0 A, which add back to 3.0 A. (c) Re-solve from R_eq: only 2 Ω + 3 Ω = 5 Ω remain, so I = 12/5 = 2.4 A, all of it through the 3 Ω. The total current fell (3.0 → 2.4 A) while the 3 Ω current rose (2.0 → 2.4 A): the 2 Ω now drops only 4.8 V and leaves 7.2 V for the 3 Ω. Never carry the old 3.0 A over.',
            },
          ],
        },
        { id: '03-ex1-solution', title: 'Example 1: the solution', role: 'solution' },
        {
          id: '04-ex2-problem',
          title: 'Example 2: the problem',
          role: 'problem',
          questions: [
            {
              kind: 'numeric',
              figure: FIG.v4_ex2,
              question: 'Example 2. (a) A 15 V ideal source sits across a 2 kΩ and a 3 kΩ resistor in series. (b) Separately, a total current of 8.0 mA enters a parallel pair of 2 kΩ and 6 kΩ.',
              parts: [
                { label: 'a', prompt: 'Voltage across the 2 kΩ resistor', answer: 6, unit: 'V', expected: '6.0 V' },
                { label: 'a', prompt: 'Voltage across the 3 kΩ resistor', answer: 9, unit: 'V', expected: '9.0 V' },
                { label: 'b', prompt: 'Current in the 2 kΩ branch', answer: 6, unit: 'mA', expected: '6.0 mA' },
                { label: 'b', prompt: 'Current in the 6 kΩ branch', answer: 2, unit: 'mA', expected: '2.0 mA' },
              ],
              explanation:
                '(a) Series: voltage in proportion to R. V₂ = 15 × 2/5 = 6.0 V and V₃ = 15 × 3/5 = 9.0 V, which add to 15 V. (b) Parallel: current with the OTHER resistor on top. I₂ = 8.0 × 6/8 = 6.0 mA and I₆ = 8.0 × 2/8 = 2.0 mA; the smaller resistance takes the larger share. Check: (6.0 mA)(2 kΩ) = (2.0 mA)(6 kΩ) = 12 V, the same voltage across both branches.',
            },
          ],
        },
        { id: '05-ex2-solution', title: 'Example 2: the solution', role: 'solution' },
        { id: '06-recap', title: 'Remember: the method', role: 'teach', questions: [plan(4, 0), plan(4, 1), plan(4, 2)] },
      ],
    },
  ],
}
