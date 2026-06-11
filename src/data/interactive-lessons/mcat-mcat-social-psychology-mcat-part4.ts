export const mcatSocialPsychPart4Data = {
  topicSlug: 'mcat-social-psychology-mcat',
  sections: [
    {
      id: 'sp4-intro',
      type: 'text' as const,
      content: `# Social Psychology

**Part 4 of 5 — Prejudice, Stereotypes & Discrimination**

Distinguish the three carefully — a classic MCAT trap:

| Term | Component | Definition |
|------|-----------|------------|
| **Stereotype** | Cognitive | Generalized belief about a group |
| **Prejudice** | Affective | Negative ATTITUDE/feeling toward a group |
| **Discrimination** | Behavioral | Differential ACTION/treatment of a group |

You can hold a stereotype without prejudice, or feel prejudice without acting (no discrimination), though they often co-occur.

### Mechanisms That Sustain Bias

| Mechanism | Description |
|-----------|-------------|
| **In-group bias / out-group homogeneity** | Favor "us"; see "them" as all alike |
| **Ethnocentrism** | Judge other cultures by one's own standards |
| **Stereotype threat** | Fear of confirming a negative stereotype impairs performance |
| **Self-fulfilling prophecy** | Expectations elicit behavior that confirms them |
| **Just-world belief** | Rationalizes inequality ("they deserve it") |
| **Implicit bias** | Automatic, unconscious associations |

### Stereotype Threat (Steele & Aronson)

$$\\text{Salient negative stereotype} \\to \\text{anxiety / extra cognitive load} \\to \\downarrow \\text{performance}$$

The mere awareness that one's group is stereotyped as worse at a task can depress performance — even among capable, motivated individuals.

### Reducing Prejudice — Contact Hypothesis (Allport)

Intergroup contact reduces prejudice ONLY under conditions:
1. **Equal status** between groups
2. **Common goals**
3. **Intergroup cooperation** (not competition)
4. **Support of authorities/institutions**

The **jigsaw classroom** is the canonical application (interdependent cooperation reduces bias).`
    },
    {
      id: 'sp4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Prejudice & Discrimination** 🎯`,
      exercise: {
        questions: [
          {
            question: `An employer believes older workers are less tech-savvy (a belief) but treats all applicants identically. The belief alone is best classified as:`,
            options: [`A stereotype (cognitive component)`, `Discrimination (behavioral component)`, `Prejudice (affective component)`, `Ethnocentrism`],
            correctAnswer: 0,
            explanation: `A generalized belief about a group is a STEREOTYPE (cognitive). Because the employer does not act differentially, there is no discrimination (behavior), and a belief without negative feeling is not yet prejudice (affect). The MCAT tests this stereotype/prejudice/discrimination distinction directly.`
          },
          {
            question: `Capable students underperform on a math test after being reminded their group is "stereotypically bad at math." This is:`,
            options: [`Stereotype threat`, `In-group bias`, `The just-world hypothesis`, `Out-group homogeneity`],
            correctAnswer: 0,
            explanation: `Stereotype threat is the performance drop caused by the anxiety and cognitive load of fearing one will confirm a negative stereotype about one's group. It impairs even well-prepared, motivated individuals and disappears when the stereotype is not made salient.`
          },
          {
            question: `According to Allport's contact hypothesis, intergroup contact reduces prejudice MOST effectively when groups have:`,
            options: [`Equal status, common goals, cooperation, and institutional support`, `Frequent competitive interaction`, `Unequal status but shared space`, `No shared goals but proximity`],
            correctAnswer: 0,
            explanation: `Mere contact is not enough — and can worsen prejudice if competitive. Allport specified that contact reduces prejudice when groups have EQUAL status, pursue COMMON goals through COOPERATION, and have the SUPPORT of authorities. The jigsaw classroom operationalizes these conditions.`
          }
        ]
      }
    },
    {
      id: 'sp4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Prejudice & Discrimination

<details>
<summary><b>Example 1: Sort a scenario into stereotype / prejudice / discrimination</b></summary>

**Question:** A landlord (a) believes a certain ethnic group is "loud," (b) feels dislike toward them, and (c) refuses to rent to them. Label each part.

**Solution:**
- (a) Generalized belief → **stereotype** (cognitive). ✓
- (b) Negative feeling/attitude → **prejudice** (affective). ✓
- (c) Differential treatment (refusing to rent) → **discrimination** (behavioral). ✓

**MCAT key:** Cognition = stereotype, affect = prejudice, behavior = discrimination. Match the verb to the component.
</details>

<details>
<summary><b>Example 2: Design a prejudice-reduction intervention</b></summary>

**Question:** A hospital wants to reduce friction between two staff groups that distrust each other. Using the contact hypothesis, propose an intervention and predict why simple "mixer" events might fail.

**Solution:**
1. Effective design: assign mixed teams to a SHARED clinical goal requiring COOPERATION, with equal status and explicit leadership support (a jigsaw-style structure). ✓
2. A casual mixer may fail or backfire because it lacks interdependence and common goals; contact without those conditions can reinforce stereotypes (especially if competitive). ✓

**Connection:** Contact alone is insufficient — the Allport conditions are what make contact work.
</details>

<details>
<summary><b>Example 3: Explain a self-fulfilling prophecy in stereotyping</b></summary>

**Question:** A teacher expects students from a stereotyped group to do poorly, gives them less attention, and they indeed score lower. Trace the mechanism and name it.

**Solution:**
1. The stereotype-based EXPECTATION changes the teacher's BEHAVIOR (less attention/encouragement).
2. The altered treatment depresses the students' performance, "confirming" the expectation.
3. The false belief produced its own confirmation → **self-fulfilling prophecy.** ✓

**Why it matters:** Self-fulfilling prophecies make stereotypes self-perpetuating, independent of any real group difference.
</details>`
    },
    {
      id: 'sp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Stereotype = belief (cognitive); prejudice = attitude/feeling (affective); discrimination = action (behavioral).
- In-group bias, out-group homogeneity, ethnocentrism, and just-world beliefs sustain prejudice.
- Stereotype threat: fear of confirming a stereotype lowers performance in capable individuals.
- Contact hypothesis reduces prejudice only with equal status, common goals, cooperation, and institutional support (jigsaw classroom).`
    }
  ]
};
