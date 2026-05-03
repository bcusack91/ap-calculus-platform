import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Psychology — 2 FRQs in 70 minutes (revised 2024–25 CED).
 *   Q1 Article Analysis Question (AAQ) — 7 points, ~25 minutes
 *   Q2 Evidence-Based Question (EBQ) — 7 points, ~45 minutes
 *
 * AAQ: read a brief research summary, identify methodology, evaluate, and apply.
 * EBQ: argue a defensible claim using two of three provided sources.
 */

export const FRQS: SAQItem[] = [
  /* ---- Q1: Article Analysis Question (AAQ) ---- */
  {
    type: 'saq',
    topic: 'frq-aaq',
    stimulus: `**FRQ #1 — Article Analysis Question (7 points, ~25 min)**

**Source: Research Study Summary**

A team of psychologists conducted a study to investigate whether brief mindfulness meditation reduces test anxiety in undergraduate students. The researchers recruited 200 college students (mean age = 19.4) who reported moderate-to-high test anxiety on the Test Anxiety Inventory (TAI). Participants were randomly assigned to one of two conditions:

- **Mindfulness condition** (n = 100): completed a 10-minute guided breath-focused mindfulness exercise immediately before taking a difficult cognitive test.
- **Control condition** (n = 100): listened to a 10-minute neutral audiobook excerpt before taking the same test.

Outcome measures: (1) self-reported state anxiety on a standardized 1–10 scale immediately before the test, and (2) test performance (percent correct).

Results: Mean state anxiety was significantly LOWER in the mindfulness group (M = 4.2, SD = 1.1) than in the control group (M = 6.1, SD = 1.3), p < .001. Mean test performance was significantly HIGHER in the mindfulness group (M = 78%, SD = 9) than the control group (M = 71%, SD = 11), p < .01. The researchers concluded that even brief mindfulness practice can reduce test anxiety and improve cognitive performance under stress in college students.`,
    parts: [
      {
        prompt: '(A) Identify the research method used in this study. (1 pt)',
        rubric: 'Random assignment + manipulation of an IV (mindfulness vs. control) + measurement of DVs ⇒ TRUE EXPERIMENT (or experimental research). +1 for correctly identifying the study as an experiment (must explicitly use the word "experiment" or "experimental").',
      },
      {
        prompt: '(B) State the operational definition of one of the dependent variables in the study. (1 pt)',
        rubric: 'Acceptable answers (any one): "State anxiety operationally defined as self-reported anxiety on a 1–10 scale immediately before the test." OR "Test performance operationally defined as percent correct on the cognitive test." +1 for naming a DV AND specifying the measurement.',
      },
      {
        prompt: '(C) Identify at least one ethical guideline that the researchers should have followed when conducting this study. (1 pt)',
        rubric: 'Acceptable: informed consent, debriefing, right to withdraw, protection from harm, confidentiality, IRB approval. +1 for naming a recognized ethical guideline (one is sufficient).',
      },
      {
        prompt: '(D) Describe the meaning of the difference in state anxiety scores in the context of the study. (1 pt)',
        rubric: 'Mindfulness group reported lower state anxiety (M = 4.2) than control (M = 6.1) by about 1.9 points on the 10-point scale, suggesting that the mindfulness manipulation reduced students\' immediate, in-the-moment anxiety relative to the control activity. +1 for an interpretation that goes beyond restating the means.',
      },
      {
        prompt: '(E) Explain how the results of the study support the conclusion that mindfulness reduced test anxiety. (1 pt)',
        rubric: 'Random assignment controls for pre-existing differences. The mindfulness group showed significantly lower state anxiety (p < .001) than the control group, and the only systematic difference between conditions was the mindfulness vs. neutral audiobook activity ⇒ the difference can be causally attributed to mindfulness. +1 for linking random assignment / manipulation to causal inference.',
      },
      {
        prompt: '(F) Identify ONE potential limitation of this study that could affect the generalizability of its conclusions. (1 pt)',
        rubric: 'Acceptable: limited to college students (mean age 19) and one cognitive test; sample only included people with moderate-to-high anxiety; demand characteristics; no measure of long-term effects; only one type of mindfulness intervention; etc. +1 for any reasonable threat to external validity that is clearly stated.',
      },
      {
        prompt: '(G) Apply a relevant psychological concept or theory (e.g., Selye\'s GAS, Yerkes-Dodson law, classical conditioning, attention, working memory) to explain WHY mindfulness might improve test performance. (1 pt)',
        rubric: 'Example responses: Yerkes-Dodson law — performance peaks at moderate arousal; mindfulness reduced excessive arousal in the high-anxiety group, moving them closer to optimal arousal. OR: working memory — anxiety consumes WM resources via worry; reducing anxiety frees WM capacity for the test. OR: Selye\'s GAS — mindfulness reduced sympathetic activation. +1 for naming a relevant concept AND linking it to the result.',
      },
    ],
  },

  /* ---- Q2: Evidence-Based Question (EBQ) ---- */
  {
    type: 'saq',
    topic: 'frq-ebq',
    stimulus: `**FRQ #2 — Evidence-Based Question (7 points, ~45 min)**

**Question:** Develop an argument that addresses the following claim:

> *"Group settings produce reliable changes in individual behavior that would not occur if the individual were alone."*

In your response, use AT LEAST TWO of the three provided sources to support your claim, and use the third to qualify or refute one of your supporting claims.

---

**Source 1 — Latané & Darley (1968), "The Bystander Effect"**

In a series of staged emergencies, individuals who believed they were the only witness to an emergency helped 85% of the time. Individuals who believed two other witnesses were present helped only 31% of the time. Latané and Darley attributed this to "diffusion of responsibility" — the spreading of perceived obligation across multiple bystanders — and to "pluralistic ignorance" — interpreting others\' inaction as evidence that no help is needed.

---

**Source 2 — Asch (1956), "Conformity in a Line-Judgment Task"**

Asch presented subjects with a clear perceptual judgment: which of three comparison lines matched a target line. When tested alone, subjects were correct 99% of the time. When tested with confederates who unanimously gave the wrong answer, 75% of subjects conformed to the incorrect majority on at least one of the 12 critical trials, and approximately 37% of all responses conformed to the wrong majority. Subjects often reported afterward that they "knew" the correct answer but did not want to disagree publicly.

---

**Source 3 — Cohen et al. (2014), "Cooperation Across Group Sizes"**

Cohen and colleagues tracked donations to a community service project among groups of 2, 6, and 24 people. Average per-person donations were highest in the smallest groups (M = $24 in dyads) and decreased significantly in larger groups (M = $11 in 24-person groups). However, when each individual\'s contribution was made publicly visible to other group members, this group-size effect disappeared: per-person donations did not differ significantly across the three group sizes.`,
    parts: [
      {
        prompt: '(A) Propose a defensible claim about whether group settings produce reliable changes in individual behavior. (1 pt)',
        rubric: 'Example: "Group settings reliably reduce prosocial behavior and shift judgment toward the group consensus, but these effects are moderated by accountability." +1 for a clear, defensible claim that takes a position on the prompt.',
      },
      {
        prompt: '(B) Support your claim by using evidence from one of the sources. Cite the source explicitly. (2 pts)',
        rubric: 'Example using Source 2 (Asch): "Asch (1956) showed that 75% of participants conformed to a unanimously wrong group on at least one trial, and 37% of all responses matched the wrong majority — evidence that the mere presence of a unanimous group reliably changes individual judgments away from what the individual would say alone." +1 specific evidence (statistic / finding) cited from a source · +1 explicit linkage of evidence to claim.',
      },
      {
        prompt: '(C) Support your claim with evidence from a SECOND source. Cite the source explicitly. (2 pts)',
        rubric: 'Example using Source 1 (Latané & Darley): "Latané & Darley (1968) found that helping rates dropped from 85% (alone) to 31% (with two other witnesses present), demonstrating that being in a group reliably changes prosocial behavior — diffusion of responsibility." +1 specific evidence from a different source · +1 explicit linkage to claim.',
      },
      {
        prompt: '(D) Use the third source to QUALIFY or REFUTE one of the supporting claims you made in (B) or (C). (2 pts)',
        rubric: 'Example using Source 3 (Cohen et al.): "Cohen et al. (2014) qualifies the diffusion-of-responsibility finding: when individual contributions were made publicly visible, the effect of group size on contributions disappeared. This suggests that group effects on individual behavior are not inevitable but depend critically on individual ACCOUNTABILITY. So the claim that group settings reliably change behavior should be modified: groups change individual behavior most when individual responsibility is diluted by anonymity." +1 correct use of the remaining source as qualifier/refutation · +1 explicit identification of WHAT is being qualified and HOW the source qualifies it.',
      },
    ],
  },
]
