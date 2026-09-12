export const mcatSocioCulturePart3Data = {
  topicSlug: 'mcat-sociology-culture-socialization-mcat',
  sections: [
    {
      id: 'cult3-intro',
      type: 'text' as const,
      content: `# Culture & Socialization — Deep Dive

**Part 3 of 4 — Deviance, Stigma & Social Control**

### Deviance Is Relative — That IS the Theory

**Deviance** is any violation of a group's norms — from elevator etiquette to homicide. Three relativities organize every exam question: deviance varies by CULTURE, by SITUATION (killing in war vs. peace), and by WHO does the act and who is watching. Nothing is deviant in itself; deviance is a relationship between an act and an audience's norms. **Crime** is the subset of deviance a state formally outlaws.

### Durkheim's Provocation — Deviance Is Functional

A society of saints would still find deviants, because deviance does work: it **clarifies moral boundaries** (public reactions teach the rules), **builds solidarity** (nothing unites like a shared villain), and **drives social change** (yesterday's deviant civil-rights sit-in is today's honored history). Function, not approval — the claim is about consequences for the system.

### Strain Theory — Merton's Grid

When a culture preaches goals (wealth, success) but the structure denies some groups the legitimate MEANS, the goal-means gap ("strain") produces patterned adaptations:

| Adaptation | Cultural goals | Legitimate means | Profile |
|------------|---------------|------------------|---------|
| Conformity | Accept | Accept | Keep striving legitimately |
| **Innovation** | Accept | REJECT | The classic criminal: wants the wealth, invents illegitimate routes |
| Ritualism | Reject (gives up on goals) | Accept | Goes through the motions — the rule-bound clerk who stopped aiming |
| Retreatism | Reject | Reject | Drops out entirely |
| Rebellion | REPLACE | REPLACE | New goals, new means — revolutionaries |

Innovation is the tested star: deviance here is caused by SHARED values plus BLOCKED opportunity, not deviant values.

### Learning and Bonding Theories

- **Differential association** (Sutherland): deviance is LEARNED in intimate groups — techniques and, crucially, definitions favorable to violation. You become deviant when favorable definitions outweigh unfavorable ones. Prediction: deviant peers precede deviant acts.
- **Social control theory** (Hirschi): everyone would deviate; the question is why most DON'T. Answer: bonds — attachment (to people), commitment (stakes in conformity), involvement (time occupied), belief (norm endorsement). Weak bonds, not deviant learning, predict deviance. Note the inverted question — the exam contrasts it with Sutherland directly.

### Labeling Theory — Deviance as a Career

The interactionist entry: no act is deviant until labeled, and the LABEL itself has causal power.

- **Primary deviance**: initial norm-breaking, minor, un-labeled, no identity change (most people's shoplifted candy bar).
- **Secondary deviance**: deviance committed AS A RESULT of being labeled — the label reorganizes opportunities (expulsion, records, exclusion) and self-concept until deviance becomes a **master status** overriding all other statuses.
- **Stigma** (Goffman): a deeply discrediting attribute reducing the person "from whole to tainted" — physical, moral, or group-based (tribal). Stigma management (concealment, passing, disclosure timing) shapes the lives of the labeled far beyond any original act.
- Who gets labeled is patterned by power — connecting labeling theory to conflict theory: the same act draws different labels by class and race.

### Formal Social Control

- **Sanction architecture** (from Part 1) scales up into policing, courts, prisons. Justifications for punishment: deterrence (specific = this offender; general = the watching public), retribution, incapacitation, rehabilitation.
- **Recidivism** — relapse into crime after punishment — is the empirical stress test: high recidivism is exactly what labeling theory predicts when punishment amplifies stigma and blocks reintegration, and what deterrence theory must explain away.`
    },
    {
      id: 'cult3-worked',
      type: 'text' as const,
      content: `### Worked Example — Four Theories, One Delinquent

**Passage-style problem.** A longitudinal study follows Marcus, arrested at 15 for selling stolen electronics. Researchers with four theoretical commitments each cite one finding:

1. "Marcus fully endorses conventional success — he wants a house, a business, 'the whole dream' — but his neighborhood's schools rarely place students in college or stable jobs."
2. "Marcus's selling techniques, supplier contacts, and his saying that 'insurance covers it so nobody's hurt' were all acquired from two older cousins over months of daily contact."
3. "Before the arrest, Marcus was failing school, had no adult he felt close to, no activities, and said rules 'never made sense to me.'"
4. "After the arrest was publicized, Marcus was expelled, legitimate employers stopped responding, adults introduced him as 'the criminal kid,' and his offending — previously occasional — became his main activity and identity."

**Finding 1 is strain theory (Merton).** Conventional GOALS embraced, legitimate MEANS structurally blocked → **innovation**. The tell: the researcher documents Marcus's mainstream values; his deviance flows from the goal-means gap, not from deviant values.

**Finding 2 is differential association (Sutherland).** Intimate-group transmission of both techniques AND neutralizing definitions ("nobody's hurt" is a definition favorable to violation). The dosage language — months of daily contact — mirrors Sutherland's frequency/intensity variables.

**Finding 3 is control theory (Hirschi).** All four bonds read as absent: attachment (no close adult), commitment (failing school = no stakes), involvement (no activities), belief (rules "never made sense"). Note this theory needs no positive cause of deviance at all — only missing restraints.

**Finding 4 is labeling theory.** Occasional offending (primary deviance) is transformed BY the public label: expulsion and hiring exclusion close legitimate doors, "the criminal kid" becomes a master status, and offending reorganizes into identity — secondary deviance. The causal arrow runs from societal REACTION to escalated deviance, the theory's defining claim.

**Discrimination drill.** Findings 2 and 3 are the classic confusable pair: both involve peers and family, but Sutherland says deviance is LEARNED (a positive acquisition), while Hirschi says it is UNRESTRAINED (a failure of bonds). Ask: does the evidence show transmission of deviant content, or absence of conventional ties? Findings 1 and 4 separate on timing: strain explains the FIRST offense; labeling explains the ESCALATION after the reaction.`
    },
    {
      id: 'cult3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Deviance & Social Control** 🎯`,
      exercise: {
        questions: [
          {
            question: `An accountant who long ago stopped believing she will ever be promoted nonetheless follows every procedure meticulously, year after year. In Merton's typology she is a(n):`,
            options: [`Innovator`, `Retreatist`, `Ritualist`, `Rebel`],
            correctAnswer: 2,
            explanation: `Ritualism is the adaptation that gives up on the success goals while clinging to the approved means — rule-following emptied of ambition. Innovation is the reverse (goals kept, means abandoned), retreatism rejects both, and rebellion replaces both with alternatives. Classify by the two axes separately: goals abandoned, means kept = ritualist.`
          },
          {
            question: `Two theories both predict that adolescents with delinquent friends offend more. Sutherland's differential association differs from Hirschi's control theory in that Sutherland attributes the offending to:`,
            options: [`The absence of attachment to conventional adults`, `Weak commitment and stakes in conventional conformity`, `An innate impulse to deviate that friends fail to restrain`, `Definitions favorable to deviance learned from peers`],
            correctAnswer: 3,
            explanation: `Sutherland's mechanism is positive transmission: intimate groups teach the how (techniques) and the why-it-is-acceptable (favorable definitions), and deviance follows when favorable definitions predominate. Hirschi's mechanism is the ABSENCE of bonds (attachment, commitment, involvement, belief) restraining a motivation he treats as universal — options A, B, and C belong to the control-theory family, with C stating its premise.`
          },
          {
            question: `A college student caught with a fake ID (an isolated, unremarked act) versus a student whose fake-ID arrest goes viral, who is then barred from campus jobs, and who subsequently builds an identity around rule-breaking: labeling theory calls these, respectively:`,
            options: [`Stigma and master status`, `Primary and secondary deviance`, `Merton's innovation and rebellion`, `Folkway violation and taboo violation`],
            correctAnswer: 1,
            explanation: `Primary deviance is initial, minor, un-labeled norm-breaking with no identity consequence; secondary deviance is the further deviance generated by the labeling process itself, as closed opportunities and a spoiled identity make the label self-fulfilling. Master status and stigma are components of HOW the label works, not the names of the two stages; Merton's terms concern goal-means adaptations.`
          },
          {
            question: `Durkheim's claim that deviance is "functional" is best supported by which observation?`,
            options: [`A scandal re-teaches the rules and boosts cohesion`, `Crime rates rise whenever policing declines sharply`, `Deviants report higher wellbeing than conformists`, `Most deviant acts go undetected by authorities`],
            correctAnswer: 0,
            explanation: `Durkheim's functions of deviance are boundary clarification (the reaction announces the norms) and solidarity (shared condemnation binds the group) — precisely what a scandal's aftermath displays; his third function is deviance as an engine of change. The other options describe enforcement effects, individual outcomes, and detection rates, none of which speaks to system-level functions.`
          },
          {
            question: `A program lets first-time offenders complete restitution privately, with records sealed and no public disclosure — and their reoffending falls sharply relative to matched offenders processed publicly. This outcome most directly supports which theory's core prediction?`,
            options: [`Strain theory, because restitution restores legitimate means`, `Differential association, as offenders avoided deviant peers`, `General deterrence, as the public learned the consequences`, `Labeling theory, because withholding the label prevents stigma`],
            correctAnswer: 3,
            explanation: `The manipulated variable is the LABEL'S publicity, holding the offense constant; reduced reoffending when the label is withheld is labeling theory's signature prediction, since stigma and blocked reintegration are what convert primary into secondary deviance. Nothing changed in goal-means structure or peer exposure, and general deterrence would if anything suffer from concealment.`
          }
        ]
      }
    },
    {
      id: 'cult3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Deviance is norm-relative (culture, situation, actor/audience); crime is state-outlawed deviance; Durkheim: deviance clarifies boundaries, builds solidarity, drives change
- Merton's strain grid: classify by goals and means separately — innovation (goals yes, means no) is the tested cell; deviance from shared values plus blocked opportunity
- Sutherland vs. Hirschi is transmission vs. restraint: learned techniques and favorable definitions VERSUS missing bonds (attachment, commitment, involvement, belief)
- Labeling: primary deviance is minor and unlabeled; the societal reaction — stigma, master status, closed doors — manufactures secondary deviance; who gets labeled tracks power
- Punishment logics (deterrence, retribution, incapacitation, rehabilitation) are graded empirically by recidivism — which labeling theory predicts punishment can worsen`
    }
  ]
};
