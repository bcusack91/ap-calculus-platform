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

**Asch findings:** a substantial share of responses conformed to an obviously wrong unanimous majority; conformity DROPS sharply with even ONE dissenting ally and rises with group size (plateauing at about 3–4 confederates).

<!-- yield:low -->
- The exact figure: conformity on about a third of critical trials (roughly 37%), and about 75% of participants conformed at least once.
<!-- /yield -->

### Milgram's Obedience Study

- A majority of ordinary participants continued to the maximum "shock" when the experimenter insisted.

<!-- yield:low -->
- The exact figure: 65% in the baseline study went all the way to the 450-volt maximum.
<!-- /yield -->

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
      id: 'sp3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Social Influence

**Problem 1.** A nurse gives a drug because the attending ordered it. A teen starts vaping because their friend group does. A shopper buys an upgrade after saying a small "yes" earlier.

- **(a)** What is the source of influence on the nurse, and which type of influence is it?
- **(b)** What is the source of influence on the teen, and which type is it?
- **(c)** What is the source of influence on the shopper, and which type is it?

**(a) The nurse.** An explicit command from an AUTHORITY → obedience.

**(b) The teen.** Matching the GROUP's behavior, an implicit norm → conformity.

**(c) The shopper.** Yielding to escalating REQUESTS → compliance (foot-in-the-door). The source decides it: authority (obedience), peer norm (conformity) or a request (compliance).

**Problem 2.** Participant 1 faces a clear line-judgment task, echoes a wrong unanimous group, but privately knows the right answer. Participant 2 judges how far a still dot of light in a dark room seems to move, shifts to the group's estimate, and keeps it when later tested alone.

- **(a)** Is Participant 1 showing public compliance or private acceptance?
- **(b)** Is Participant 1 showing normative or informational conformity?
- **(c)** Which type is Participant 2 showing?
- **(d)** Which features of a situation push toward each type?

**(a) Participant 1's agreement.** Public compliance: the participant agrees aloud but privately disagrees.

**(b) Participant 1's motive.** Normative: on a clear task the only reason to go along is the wish to fit in.

**(c) Participant 2.** Informational: the light's apparent motion is ambiguous, so the group serves as information; keeping its estimate when alone shows genuine private acceptance (Sherif's autokinetic studies).

**(d) What pushes each.** Ambiguity and the importance of accuracy push toward informational influence; the desire for acceptance pushes toward normative influence.

**Problem 3.** In Milgram's baseline, most participants obeyed to the maximum shock. In one variation the experimenter phones in orders from another room; in another the participant must press the victim's hand onto the "shock plate."

- **(a)** How does obedience change when the experimenter gives orders by phone?
- **(b)** How does obedience change when the participant must touch the victim?
- **(c)** What do the two results show about the cause of obedience?

**(a) Remote authority.** Obedience drops markedly: an absent authority weakens the legitimacy and pressure of the command.

**(b) Closer victim.** Obedience also drops: the victim's proximity and the participant's direct involvement make the harm harder to ignore.

**(c) Situational cause.** Both manipulations change the SITUATION, not the person, so obedience is largely situationally driven.`
    },
    {
      id: 'sp3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Conformity & Obedience** 🎯`,
      exercise: {
        questions: [
          {
            question: `In Asch's line-judgment experiments, conformity to the incorrect majority dropped most dramatically when:`,
            options: [`A single confederate gave the correct answer`, `The group size increased beyond five`, `Participants answered out loud`, `The lines were made more similar`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The presence of even ONE ally who dissents shatters the unanimity of the majority and frees the participant to give the correct answer — conformity plummets. Unanimity is the critical ingredient; break it and normative pressure collapses.`
          },
          {
            question: `A fundraiser first asks you to donate \\$500 (you refuse), then asks for \\$20 (you agree). This compliance technique is:`,
            options: [`Door-in-the-face`, `Foot-in-the-door`, `Lowball`, `That's-not-all`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Door-in-the-face starts with a large request that is expected to be refused, then follows with a smaller one. The concession triggers reciprocity (they "compromised," so you should too). Foot-in-the-door is the reverse: small request first, then larger.`
          },
          {
            question: `A student looks to classmates to figure out the right answer on an ambiguous question and genuinely comes to believe their answer. This is:`,
            options: [`Informational conformity`, `Normative conformity`, `Public compliance`, `Obedience to authority`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Informational conformity occurs under UNCERTAINTY: the person uses others as a source of information to be CORRECT, and it produces genuine private acceptance. Normative conformity, by contrast, is driven by the desire to be liked and often yields only public compliance.`
          }
        ]
      }
    },
    {
      id: 'sp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Three sources of influence.** Conformity follows group norms (Asch), compliance a direct request, obedience an authority (Milgram).
- **Normative vs. informational.** Normative conformity seeks acceptance (public compliance); informational seeks accuracy (private belief).
- **Asch's unanimity.** Many conform to a wrong unanimous majority, but one dissenting ally makes conformity drop sharply.
- **Milgram's obedience.** A majority obeyed to the maximum shock; a remote authority, a closer victim or rebelling peers cut it.

**Common traps**

- **Mixing up the door techniques.** Foot-in-the-door goes small, then larger; door-in-the-face goes large (refused), then smaller.
- **Lowball vs. that's-not-all.** Lowball raises the cost after commitment; that's-not-all adds a bonus before the person decides.
- **Obedience as a personality flaw.** Milgram's participants were ordinary people; changing the situation is what changed obedience.
- **Ever-bigger groups, ever more conformity.** Conformity rises with group size but plateaus at about 3–4 confederates.

<!-- yield:low -->
**Low-yield extras**

- The exact Asch and Milgram percentages: conformity on about a third of critical trials, about 75% conforming at least once; 65% to the 450-volt maximum.
<!-- /yield -->`
    }
  ]
};
