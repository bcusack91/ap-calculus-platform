export const mcatSocialPsychPart3Data = {
  topicSlug: 'mcat-social-psychology-mcat',
  sections: [
    {
      id: 'sp3-intro',
      type: 'text' as const,
      content: `# Social Psychology

**Part 3 of 5 — Conformity, Compliance & Obedience**

These three are distinguished by the SOURCE of social influence.

| Concept | Source of influence | Classic study |
|---------|---------------------|---------------|
| **Conformity** | Implicit group norms | Asch (line judgments) |
| **Compliance** | A direct request | Cialdini techniques |
| **Obedience** | An explicit authority | Milgram (shock study) |

### Two Motives for Conformity

| Type | Motive | Result |
|------|--------|--------|
| **Normative** | To be LIKED/accepted | Public compliance (may not believe it) |
| **Informational** | To be CORRECT (uncertainty) | Private acceptance (genuine belief) |

**Asch findings:** ~33–37% conformity to an obviously wrong majority; conformity DROPS sharply with even ONE dissenting ally and rises with group size (up to ~3–5 members).

### Milgram's Obedience Study

- ~65% delivered the maximum (450 V) "shock."
- Obedience FELL when: the authority was remote/absent, the victim was closer/visible, the experiment lacked institutional prestige, or peers rebelled.
- Lesson: obedience is **situational**, not merely a personality flaw.

### Compliance Techniques (Cialdini)

| Technique | Method |
|-----------|--------|
| **Foot-in-the-door** | Small request first, then larger (consistency) |
| **Door-in-the-face** | Large request first (refused), then smaller (reciprocity) |
| **Lowball** | Get commitment, then raise the cost |
| **That's-not-all** | Add a bonus before the person decides |`
    },
    {
      id: 'sp3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Conformity & Obedience** 🎯`,
      exercise: {
        questions: [
          {
            question: `In Asch's line-judgment experiments, conformity to the incorrect majority dropped most dramatically when:`,
            options: [`A single confederate broke from the majority and gave the correct answer`, `The group size increased beyond five`, `Participants answered out loud`, `The lines were made more similar`],
            correctAnswer: 0,
            explanation: `The presence of even ONE ally who dissents shatters the unanimity of the majority and frees the participant to give the correct answer — conformity plummets. Unanimity is the critical ingredient; break it and normative pressure collapses.`
          },
          {
            question: `A fundraiser first asks you to donate $500 (you refuse), then asks for $20 (you agree). This compliance technique is:`,
            options: [`Door-in-the-face`, `Foot-in-the-door`, `Lowball`, `That's-not-all`],
            correctAnswer: 0,
            explanation: `Door-in-the-face starts with a large request that is expected to be refused, then follows with a smaller one. The concession triggers reciprocity (they "compromised," so you should too). Foot-in-the-door is the reverse: small request first, then larger.`
          },
          {
            question: `A student looks to classmates to figure out the right answer on an ambiguous question and genuinely comes to believe their answer. This is:`,
            options: [`Informational conformity`, `Normative conformity`, `Obedience`, `Reactance`],
            correctAnswer: 0,
            explanation: `Informational conformity occurs under UNCERTAINTY: the person uses others as a source of information to be CORRECT, and it produces genuine private acceptance. Normative conformity, by contrast, is driven by the desire to be liked and often yields only public compliance.`
          }
        ]
      }
    },
    {
      id: 'sp3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Social Influence

<details>
<summary><b>Example 1: Classify the type of influence</b></summary>

**Question:** (a) A nurse gives a drug because the attending ordered it. (b) A teen starts vaping because their friend group does. (c) A shopper buys an upgrade after a small "yes" earlier. Classify each.

**Solution:**
- (a) Explicit command from an AUTHORITY → **obedience.** ✓
- (b) Matching the GROUP's behavior (implicit norm) → **conformity.** ✓
- (c) Yielding to escalating REQUESTS → **compliance** (foot-in-the-door). ✓

**MCAT key:** Identify the source — authority (obedience), peer norm (conformity), or a request (compliance).
</details>

<details>
<summary><b>Example 2: Predict the effect of a situational manipulation in Milgram's paradigm</b></summary>

**Question:** Milgram's baseline obedience was ~65%. Predict the effect of (a) moving the experimenter to another room giving orders by phone and (b) placing the participant's hand on the victim's "shock plate."

**Solution:**
1. (a) Remote authority weakens the legitimacy/pressure of the command → obedience DROPS markedly. ✓
2. (b) Increasing the victim's proximity and the participant's direct involvement → obedience DROPS. ✓

**Why it matters:** Both manipulations change the SITUATION, not the person — reinforcing that obedience is largely situationally driven.
</details>

<details>
<summary><b>Example 3: Distinguish normative from informational conformity</b></summary>

**Question:** In a clear, easy judgment task, a participant still goes along with a wrong unanimous group but privately knows the right answer. In an ambiguous task, a participant adopts the group's answer and believes it. Which is normative and which informational?

**Solution:**
1. Clear task, public agreement but private disagreement → **normative** (wants to fit in). ✓
2. Ambiguous task, genuine private acceptance → **informational** (wants to be correct). ✓

**Connection:** Ambiguity and importance of accuracy push toward informational influence; desire for acceptance pushes toward normative influence.
</details>`
    },
    {
      id: 'sp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Conformity = group norms (Asch); compliance = direct request; obedience = authority (Milgram).
- Normative conformity = to be liked (public); informational = to be correct (private acceptance).
- Asch: ~⅓ conform; one ally collapses conformity. Milgram: ~65% max shock; obedience is situational.
- Compliance tricks: foot-in-the-door (small→large), door-in-the-face (large→small), lowball, that's-not-all.`
    }
  ]
};
