export const mcatSocialPsychPart5Data = {
  topicSlug: 'mcat-social-psychology-mcat',
  sections: [
    {
      id: 'sp5-intro',
      type: 'text' as const,
      content: `# Social Psychology

**Part 5 of 5 — Group Dynamics, Aggression & Prosocial Behavior**

### Group Process Phenomena

| Phenomenon | Description | Condition |
|------------|-------------|-----------|
| **Social facilitation** | Arousal improves SIMPLE/dominant tasks, impairs COMPLEX ones | Others present (stronger when evaluated) |
| **Social loafing** | Less individual effort in a pooled group product | Anonymous contribution |
| **Deindividuation** | Loss of self-awareness in a group → impulsive acts | Anonymity, arousal |
| **Group polarization** | Group discussion AMPLIFIES the members' initial leaning | Like-minded group |
| **Groupthink** | Desire for harmony overrides realistic appraisal | Cohesive, insulated group |

### Group Decision-Making Cautions (Groupthink Symptoms)

Illusion of invulnerability, self-censorship, pressure on dissenters, illusion of unanimity. **Remedies:** assign a devil's advocate, invite outside experts, encourage open dissent.

### Bystander Effect & Helping (Latané & Darley)

$$\\uparrow \\text{Number of bystanders} \\to \\uparrow \\text{diffusion of responsibility} \\to \\downarrow \\text{probability any individual helps}$$

The 5-step decision model: **notice → interpret as emergency → assume responsibility → know how to help → decide to help.** Failure at any step stops helping. **Pluralistic ignorance** (everyone looks calm, so each assumes it's not an emergency) blocks step 2.

### Prosocial Behavior & Altruism

| Concept | Idea |
|---------|------|
| **Altruism** | Helping at a cost to oneself with no expected reward |
| **Kin selection / inclusive fitness** | Favor genetic relatives when relatedness × benefit > cost (Hamilton's rule) |
| **Reciprocal altruism** | Help expecting future return |
| **Empathy–altruism hypothesis** | Empathy can drive genuinely selfless helping |
| **Social exchange theory** | Helping follows cost–benefit calculation |

### Aggression — Key Frameworks

- **Frustration–aggression hypothesis:** blocked goals → frustration → aggression (later: frustration creates readiness, cues trigger it).
- **Social learning (Bandura, Bobo doll):** aggression is learned by observation and modeling.`
    },
    {
      id: 'sp5-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Group Behavior & Helping

**Problem 1.** A skilled typist types faster while coworkers watch. Workers on an anonymous group task each slack off. A masked crowd at night vandalizes property.

- **(a)** Which phenomenon explains the typist's speed-up?
- **(b)** Which phenomenon explains the workers' slacking?
- **(c)** Which phenomenon explains the vandalism?
- **(d)** Would the typist speed up with an audience on a complex, unfamiliar task?

**(a) The typist.** Social facilitation: the presence of others (an audience or co-actors; evaluation strengthens it) raises arousal, which boosts a well-learned task.

**(b) The workers.** Social loafing: individual effort falls when contributions are pooled into a SHARED, anonymous product.

**(c) The crowd.** Deindividuation: anonymity plus arousal strip away self-awareness and restraint, so individual identity is lost in the group.

**(d) A complex task.** No. The same arousal impairs complex or unfamiliar tasks, so performance would likely drop with coworkers watching.

**Problem 2.** At a party, someone slumps over. Several guests glance over, see that no one else is reacting, and go back to their conversations.

- **(a)** Did the guests complete step 1 (notice) of the bystander decision model?
- **(b)** At which step did the helping process break down?
- **(c)** What phenomenon blocked that step?
- **(d)** What happens to the steps after it?

**(a) Notice.** Yes: they glanced over, so they DID notice.

**(b) Where it broke.** Step 2, interpreting the event as an emergency: because everyone else looked calm, each guest assumed it was not serious.

**(c) The phenomenon.** Pluralistic ignorance: each person reads the others' calm as evidence that nothing is wrong.

**(d) The rest of the chain.** Without an emergency to respond to, no one assumes responsibility, works out how to help or acts. Helping can fail at any stage; diffusion of responsibility would block step 3, but here the chain broke earlier.

**Problem 3.** An animal will sacrifice itself if doing so saves enough relatives.

- **(a)** By Hamilton's rule, when is kin-selected altruism favored?
- **(b)** What share of genes do siblings and first cousins have in common?
- **(c)** Must more siblings or more cousins be saved for the sacrifice to pay off?
- **(d)** How does this explanation of altruism differ from reciprocal altruism?

**(a) Hamilton's rule.** Altruism is favored when (relatedness × benefit to recipient) > (cost to actor).

**(b) Relatedness.** Siblings share about 50% of their genes; first cousins about 12.5%.

**(c) Siblings vs. cousins.** More cousins. With their higher relatedness, fewer siblings are needed for the inequality to hold: if each saved relative gains as much as the actor loses, the sacrifice pays off only for more than 2 siblings, versus more than 8 cousins.

**(d) Inclusive fitness.** It reframes altruism as propagating shared genes. Reciprocal altruism instead expects a future return, and empathy-driven helping is a third explanation.`
    },
    {
      id: 'sp5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Group Dynamics & Helping** 🎯`,
      exercise: {
        questions: [
          {
            question: `A person collapses on a crowded subway, but no one helps because each rider assumes someone else will. This is best explained by:`,
            options: [`Diffusion of responsibility`, `Social facilitation`, `Group polarization`, `Fundamental attribution error`],
            correctAnswer: 0,
            yield: 'ULTRA_HIGH',
            explanation: `As the number of bystanders increases, responsibility to act is diffused across the group, so each individual feels less personally obligated — lowering the chance anyone helps. This diffusion of responsibility is the core of the bystander effect.`
          },
          {
            question: `A group of moderately pro-policy members discusses the issue together and emerges far MORE strongly in favor than it began. This is:`,
            options: [`Group polarization`, `Groupthink`, `Social facilitation`, `Deindividuation`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Group polarization is the tendency for group discussion to STRENGTHEN the members' pre-existing average attitude — moderate views become more extreme in the same direction. Groupthink specifically concerns flawed decision-making driven by a desire for consensus, which is related but distinct.`
          },
          {
            question: `Hamilton's rule and kin selection predict that altruistic helping is MOST likely directed toward:`,
            options: [`Close relatives`, `Reciprocating non-relatives`, `Out-group members`, `Anyone, regardless of relatedness`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Kin selection (inclusive fitness) explains altruism toward genetic relatives: helping relatives propagates shared genes. Hamilton's rule states a behavior is favored when the benefit to the recipient, weighted by relatedness, exceeds the cost to the helper — predicting more help for closer kin. Help toward reciprocating non-relatives is explained by reciprocal altruism, a separate theory from kin selection.`
          }
        ]
      }
    },
    {
      id: 'sp5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- **Others present.** Social facilitation lifts simple tasks and impairs complex ones; loafing cuts effort on anonymous pooled work.
- **Group decisions.** Polarization amplifies the initial leaning; groupthink trades appraisal for harmony, and a devil's advocate counters it.
- **The bystander effect.** Helping runs notice → interpret → take responsibility → know how → act; more bystanders diffuse responsibility.
- **Why people help or harm.** Kin selection, reciprocity, empathy and social exchange explain helping; frustration and modeling explain aggression.

**Common traps**

- **Polarization vs. groupthink.** Polarization makes shared views more extreme; groupthink is a flawed decision driven by the wish for harmony.
- **Facilitation helps every task.** Arousal from an audience boosts only simple, well-learned tasks; complex or new tasks get worse.
- **Pluralistic ignorance as diffusion.** They block different steps: others' calm stops interpreting (step 2); "someone else will" stops step 3.
- **Loafing vs. deindividuation.** Loafing is less effort on a pooled task; deindividuation is lost self-awareness leading to impulsive acts.`
    }
  ]
};
