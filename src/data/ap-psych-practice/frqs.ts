import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Psychology — Section II: 2 free-response questions in 70 minutes (2024–25 CED).
 *   Q1 Article Analysis Question (AAQ) — 7 points, ~25 minutes
 *       (A) research method · (B) operational definition · (C) statistic ·
 *       (D) ethical guideline applied · (E) generalizability · (F) argumentation (2 pts)
 *   Q2 Evidence-Based Question (EBQ) — 7 points, ~45 minutes
 *       (A) claim · (B)(i) evidence + (B)(ii) explanation with a psychological concept (3 pts) ·
 *       (C)(i) evidence from a different source + (C)(ii) explanation with a different concept (3 pts)
 *
 * Each rubric array holds one entry per point, so frqPossible() counts 7 + 7.
 * The studies and sources are fictional practice material, not real citations.
 */

export const FRQS: SAQItem[] = [
  /* ---- Q1: Article Analysis Question (AAQ) ---- */
  {
    type: 'saq',
    topic: 'frq-aaq',
    prompt: `**Question 1 — Article Analysis Question (AAQ) · 7 points · suggested time 25 minutes**

Using the source provided, respond to all parts of the question.

**Source:** practice study summary (fictional; written for this exam, not a real publication)

**Introduction.** Many college students report test anxiety that interferes with their performance. Researchers hypothesized that a brief mindfulness exercise completed right before an exam would reduce students' anxiety during the exam.

**Participants.** 180 undergraduates (ages 18–22; 104 women, 76 men) enrolled in introductory statistics at one large public university in the southeastern United States volunteered for course credit. All had scored above the midpoint on a test-anxiety screening questionnaire. Each participant gave informed consent before the study began.

**Method.** Participants were randomly assigned to one of two conditions. In the mindfulness condition (n = 90), they listened to a 10-minute recording that guided them to focus on their breathing. In the control condition (n = 90), they listened to a 10-minute recording of a nature documentary. All participants then took the same 30-question statistics quiz. Halfway through the quiz, they rated their current anxiety on a scale from 1 (not at all anxious) to 10 (extremely anxious). At the end, all participants were debriefed.

**Results.** Mean anxiety ratings were lower in the mindfulness condition (M = 4.3, SD = 1.2) than in the control condition (M = 6.0, SD = 1.4); the difference was statistically significant. Mean quiz scores were 74 percent in the mindfulness condition and 69 percent in the control condition, a difference that was not statistically significant.`,
    parts: [
      {
        letter: 'A',
        question: 'Identify the research method used in the study.',
        rubric: [
          { id: 'a1', label: 'Research method (1 pt)', description: 'Identifies the study as an **experiment** (e.g., "This was an experiment, because participants were randomly assigned to a mindfulness or control condition"). "Correlational study" or "the researchers studied anxiety" does not earn the point.' },
        ],
      },
      {
        letter: 'B',
        question: 'State the operational definition of anxiety in the study.',
        rubric: [
          { id: 'b1', label: 'Operational definition (1 pt)', description: 'States how anxiety was measured: a self-rating from 1 (not at all anxious) to 10 (extremely anxious) given halfway through the quiz. "How nervous the students felt" is not measurable and does not earn the point.' },
        ],
      },
      {
        letter: 'C',
        question: 'Describe the meaning of the difference in mean anxiety ratings between the two conditions.',
        rubric: [
          { id: 'c1', label: 'Statistic interpretation (1 pt)', description: 'Explains what the means show in context: students who did the mindfulness exercise reported less anxiety during the quiz, on average (4.3 vs. 6.0 on the 10-point scale), than students who heard the documentary. Restating a mean without relating it to the groups, or defining "mean," does not earn the point.' },
        ],
      },
      {
        letter: 'D',
        question: 'Identify at least one ethical guideline applied by the researchers.',
        rubric: [
          { id: 'd1', label: 'Ethical guideline applied (1 pt)', description: 'Names a guideline the summary says the researchers applied: **informed consent** or **debriefing**. A guideline the summary does not mention (e.g., confidentiality, IRB approval) or one the researchers "should have" used does not earn the point.' },
        ],
      },
      {
        letter: 'E',
        question: 'Explain the extent to which the research findings may or may not be generalizable using specific and relevant evidence from the study.',
        rubric: [
          { id: 'e1', label: 'Generalizability (1 pt)', description: 'Makes a claim about a population and supports it with participant evidence, e.g., "The findings may not generalize to all students, because every participant was an 18- to 22-year-old statistics student at one university who already reported high test anxiety." "The study is generalizable because the sample was large" does not earn the point (sample size alone is not participant evidence).' },
        ],
      },
      {
        letter: 'F',
        question: 'Explain how at least one of the research findings supports or refutes the researchers\' hypothesis that a brief mindfulness exercise reduces students\' anxiety during an exam.',
        rubric: [
          { id: 'f1', label: 'Uses a specific result (1 pt)', description: 'Cites an accurate result from the study, such as the lower mean anxiety rating in the mindfulness condition (4.3 vs. 6.0), or the nonsignificant 74 vs. 69 percent difference in quiz scores.' },
          { id: 'f2', label: 'Explains support or refutation (1 pt)', description: 'Explains how that result supports (or refutes) the hypothesis, e.g., "Because participants were randomly assigned and only the recording differed, the lower anxiety ratings in the mindfulness group support the hypothesis that the exercise reduced anxiety during the quiz." Saying "the study supports the hypothesis" with no result earns at most one of these two points.' },
        ],
      },
    ],
    sampleResponse: `**(A)** The study is an experiment: the researchers randomly assigned participants to the mindfulness or control recording and compared the groups.

**(B)** Anxiety was operationally defined as each participant's self-rating on a 1 (not at all anxious) to 10 (extremely anxious) scale, given halfway through the statistics quiz.

**(C)** The mindfulness group's mean rating (4.3) was about 1.7 points lower than the control group's (6.0), meaning that, on average, students who did the breathing exercise felt less anxious while taking the quiz than students who heard the documentary.

**(D)** The researchers obtained informed consent from every participant before the study began.

**(E)** The findings may not generalize to all students. Every participant was an 18- to 22-year-old in introductory statistics at a single university who had already reported high test anxiety, so the results may not apply to students with low anxiety, older students, or students at other schools.

**(F)** The finding that the mindfulness group reported lower mean anxiety (4.3) than the control group (6.0) supports the hypothesis. Because participants were randomly assigned and the only difference between conditions was the recording they heard, the lower anxiety can be attributed to the mindfulness exercise.`,
  },

  /* ---- Q2: Evidence-Based Question (EBQ) ---- */
  {
    type: 'saq',
    topic: 'frq-ebq',
    prompt: `**Question 2 — Evidence-Based Question (EBQ) · 7 points · suggested time 45 minutes**

Using the sources provided, develop and justify an argument about whether being part of a group changes how individuals behave.

Cite each source you use, for example "(Source 1)." The three sources are fictional practice study summaries written for this exam, not real publications.

---

**Source 1 — Helping in an online emergency**

*Participants:* 312 adult users of a study-help website.
*Method:* During a live chat session, a confederate posted that they felt faint and asked someone to call for help. Participants were randomly assigned to chat rooms in which they believed they were the only other member, or in which they believed 4 or 9 other members were present.
*Results:* 72 percent of participants who believed they were alone offered help within two minutes, compared with 38 percent in the 5-person rooms and 21 percent in the 10-person rooms.

---

**Source 2 — Judging an ambiguous image**

*Participants:* 96 high school students.
*Method:* Students estimated how many dots were shown briefly on a screen, first alone and then after hearing three peers' estimates. Unknown to the students, the peers were confederates who always gave estimates 40 percent higher than the true number.
*Results:* Students' estimates moved an average of 27 percent closer to the peers' estimates. When interviewed afterward, 81 percent said they assumed the peers had seen the dots more clearly.

---

**Source 3 — Effort in team tasks**

*Participants:* 140 employees of a manufacturing company, in teams of 4.
*Method:* Each team assembled product kits for one hour. In half the teams, only the team's total output was recorded. In the other half, each worker's output was recorded and posted for the whole team to see.
*Results:* Workers whose individual output was posted assembled an average of 31 kits, compared with an average of 22 kits per worker when only team totals were recorded.`,
    parts: [
      {
        letter: 'A',
        question: 'Propose a specific and defensible claim based in psychological science that responds to the question.',
        rubric: [
          { id: 'a1', label: 'Claim (1 pt)', description: 'States a claim that takes a position on whether group membership changes individual behavior, e.g., "Being in a group changes individual behavior, often reducing personal responsibility and effort unless individuals feel accountable." Restating the question or summarizing a source is not a claim.' },
        ],
      },
      {
        letter: 'B',
        question: '(i) Support your claim using at least one piece of specific and relevant evidence from one of the sources. (ii) Explain how the evidence from Part B(i) supports your claim using a psychological perspective, theory, concept, or research finding learned in AP Psychology.',
        rubric: [
          { id: 'b1', label: 'B(i) Evidence (1 pt)', description: 'Uses specific, accurate evidence that is correctly cited, e.g., "Only 21 percent of participants in 10-person chat rooms offered help, compared with 72 percent who believed they were alone (Source 1)." Evidence with no citation, or a vague statement such as "people help less in groups," does not earn the point.' },
          { id: 'b2', label: 'B(ii) Explains the evidence (1 pt)', description: 'Correctly interprets how the evidence relates to the claim, e.g., the presence of more group members made individuals less likely to act.' },
          { id: 'b3', label: 'B(ii) Applies a psychological concept (1 pt)', description: 'Uses a concept from the CED to explain the link, e.g., **diffusion of responsibility** or the **bystander effect**: with more people present, each person feels less personally responsible for helping. Note: "confederate" and "statistically significant" do not count as the psychological concept.' },
        ],
      },
      {
        letter: 'C',
        question: '(i) Support your claim using an additional piece of specific and relevant evidence from a different source. (ii) Explain how the evidence from Part C(i) supports your claim using a different psychological perspective, theory, concept, or research finding learned in AP Psychology.',
        rubric: [
          { id: 'c1', label: 'C(i) Evidence from a different source (1 pt)', description: 'Uses specific, accurate, correctly cited evidence from a source other than the one used in Part B, e.g., "Workers made 22 kits each when only team totals were recorded but 31 when individual output was posted (Source 3)," or "students\' estimates shifted 27 percent toward the peers\' (Source 2)."' },
          { id: 'c2', label: 'C(ii) Explains the evidence (1 pt)', description: 'Correctly interprets how this evidence relates to the claim.' },
          { id: 'c3', label: 'C(ii) Applies a different concept (1 pt)', description: 'Uses a CED concept different from the one in Part B, e.g., **social loafing** (less effort when individual output is pooled; Source 3) or **informational social influence / conformity** (adopting the group\'s answer because others seem to know better; Source 2). Reusing the Part B concept earns at most the explanation point.' },
        ],
      },
    ],
    sampleResponse: `**(A)** Being part of a group changes individual behavior: people tend to take less personal responsibility and put in less effort when their own contribution is hidden in the group.

**(B)** In a chat-room emergency, 72 percent of participants who believed they were alone offered help, but only 21 percent did when they believed 9 others were present (Source 1). This supports my claim because the same emergency drew far less helping from each person once a group was present. This is diffusion of responsibility: as the number of bystanders rises, each person feels less personally obligated to act, so individuals in larger groups assume someone else will call for help.

**(C)** Workers produced only 22 kits each when just the team total was recorded, compared with 31 when each person's output was posted (Source 3). This shows that the group setting itself lowered individual effort when contributions were pooled. This is social loafing: people exert less effort on a collective task when their individual contribution cannot be identified, and posting individual output removed that anonymity.`,
  },
]
