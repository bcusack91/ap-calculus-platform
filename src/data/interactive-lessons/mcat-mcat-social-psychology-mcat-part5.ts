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
| **Social facilitation** | Arousal improves SIMPLE/dominant tasks, impairs COMPLEX ones | When evaluated |
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
| **Kin selection / inclusive fitness** | Favor genetic relatives (Hamilton's rule) |
| **Reciprocal altruism** | Help expecting future return |
| **Empathy–altruism hypothesis** | Empathy can drive genuinely selfless helping |
| **Social exchange theory** | Helping follows cost–benefit calculation |

### Aggression — Key Frameworks

- **Frustration–aggression hypothesis:** blocked goals → frustration → aggression (later: frustration creates readiness, cues trigger it).
- **Social learning (Bandura, Bobo doll):** aggression is learned by observation and modeling.`
    },
    {
      id: 'sp5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Group Dynamics & Helping** 🎯`,
      exercise: {
        questions: [
          {
            question: `A person collapses on a crowded subway, but no one helps because each rider assumes someone else will. This is best explained by:`,
            options: [`Diffusion of responsibility (bystander effect)`, `Social facilitation`, `Group polarization`, `Stereotype threat`],
            correctAnswer: 0,
            explanation: `As the number of bystanders increases, responsibility to act is diffused across the group, so each individual feels less personally obligated — lowering the chance anyone helps. This diffusion of responsibility is the core of the bystander effect.`
          },
          {
            question: `A group of moderately pro-policy members discusses the issue together and emerges far MORE strongly in favor than any began. This is:`,
            options: [`Group polarization`, `Groupthink`, `Social loafing`, `Deindividuation`],
            correctAnswer: 0,
            explanation: `Group polarization is the tendency for group discussion to STRENGTHEN the members' pre-existing average attitude — moderate views become more extreme in the same direction. Groupthink specifically concerns flawed decision-making driven by a desire for consensus, which is related but distinct.`
          },
          {
            question: `Hamilton's rule and kin selection predict that altruistic helping is MOST likely directed toward:`,
            options: [`Close genetic relatives, because shared genes are propagated`, `Random strangers, to maximize reciprocity`, `Out-group members, to reduce prejudice`, `Anyone, equally, regardless of relatedness`],
            correctAnswer: 0,
            explanation: `Kin selection (inclusive fitness) explains altruism toward genetic relatives: helping relatives propagates shared genes. Hamilton's rule states a behavior is favored when the benefit to the recipient, weighted by relatedness, exceeds the cost to the helper — predicting more help for closer kin.`
          }
        ]
      }
    },
    {
      id: 'sp5-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Group Behavior & Helping

<details>
<summary><b>Example 1: Distinguish social facilitation, loafing, and deindividuation</b></summary>

**Question:** (a) An expert sprinter runs faster with a crowd watching. (b) Workers on an anonymous group task each slack off. (c) A masked crowd at night vandalizes property. Classify each.

**Solution:**
- (a) Arousal from being evaluated boosts a well-learned task → **social facilitation.** ✓
- (b) Reduced effort when contributions are pooled/anonymous → **social loafing.** ✓
- (c) Anonymity + arousal → loss of self-awareness and restraint → **deindividuation.** ✓

**MCAT key:** Facilitation requires evaluation; loafing requires anonymity in a SHARED product; deindividuation is loss of individual identity in a group.
</details>

<details>
<summary><b>Example 2: Walk a scenario through the bystander decision model</b></summary>

**Question:** At a party, someone slumps over. Others glance, see no one reacting, and continue. Identify where the helping process broke down.

**Solution:**
1. Step 1 (notice): people DID notice.
2. Step 2 (interpret as emergency): because everyone else looked calm, each assumed it was not serious → **pluralistic ignorance** blocked this step. ✓
3. Without interpreting it as an emergency, no one assumes responsibility or helps.

**Why it matters:** The 5-step model shows helping can fail at any stage; pluralistic ignorance commonly stalls it at interpretation.
</details>

<details>
<summary><b>Example 3: Apply Hamilton's rule logic</b></summary>

**Question:** An animal will sacrifice itself if doing so saves enough relatives. Qualitatively, when does kin-selected altruism pay off, and why does it favor siblings over cousins?

**Solution:**
1. Hamilton's rule: altruism is favored when (relatedness × benefit to recipient) > (cost to actor). ✓
2. Siblings share ~50% of genes; cousins ~12.5%. The higher relatedness of siblings means fewer of them are needed for the inequality to hold.
3. Thus self-sacrifice is "worth it" for fewer siblings than cousins. ✓

**Connection:** Inclusive fitness reframes altruism as gene propagation, complementing reciprocal altruism (expecting return) and empathy-driven helping.
</details>`
    },
    {
      id: 'sp5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5 (and Suite Review)

- Social facilitation (evaluated, simple task ↑), social loafing (anonymous pooled effort ↓), deindividuation (anonymity → impulsivity).
- Group polarization amplifies the initial leaning; groupthink sacrifices good decisions for harmony (use a devil's advocate).
- Bystander effect = diffusion of responsibility; helping requires notice → interpret → take responsibility → know how → act.
- Altruism explained by kin selection (Hamilton's rule), reciprocal altruism, empathy–altruism, and social exchange; aggression by frustration–aggression and social learning (Bandura).`
    }
  ]
};
