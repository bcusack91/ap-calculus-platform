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
      id: 'sp4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Prejudice & Discrimination

**Problem 1.** A landlord believes a certain ethnic group is "loud," feels dislike toward its members, and refuses to rent to them.

- **(a)** Which component of bias is the belief that the group is "loud"?
- **(b)** Which component is the dislike?
- **(c)** Which component is the refusal to rent?

**(a) The belief.** A generalized belief about a group → stereotype (cognitive).

**(b) The dislike.** A negative feeling or attitude → prejudice (affective).

**(c) The refusal.** Differential treatment → discrimination (behavioral). Match the verb to the component: believe = stereotype, feel = prejudice, act = discrimination.

**Problem 2.** A teacher expects students from a stereotyped group to do poorly, gives them less attention, and they indeed score lower.

- **(a)** What does the teacher's expectation change first?
- **(b)** How does that change lead to the lower scores?
- **(c)** What is this mechanism called, and why does it keep stereotypes alive?
- **(d)** Is this stereotype threat?

**(a) The first change.** The teacher's BEHAVIOR: the stereotype-based expectation leads to less attention and encouragement.

**(b) The result.** The altered treatment depresses the students' performance, which seems to "confirm" the expectation.

**(c) The name.** Self-fulfilling prophecy: the false belief produced its own confirmation, so the stereotype perpetuates itself independent of any real group difference.

**(d) Not threat.** No. Stereotype threat is the students' own fear of confirming a stereotype; here the drop runs through the teacher's expectation and treatment.

**Problem 3.** Two departments of a newly merged company distrust each other. One manager proposes casual "mixer" events. Another proposes joint project teams in which one department's staff direct the other's work.

- **(a)** Why might the mixers fail to reduce prejudice?
- **(b)** Which of Allport's conditions does the joint-team plan still violate?
- **(c)** What would an intervention meeting all of Allport's conditions look like?

**(a) The mixer's flaw.** A casual mixer lacks interdependence and common goals. Contact without those conditions can fail or backfire, reinforcing stereotypes, especially if it turns competitive.

**(b) The missing condition.** Equal status. Shared projects supply common goals and cooperation, but one group directing the other recreates a status gap. The full list: equal status, common goals, intergroup cooperation (not competition), and the support of authorities.

**(c) A better design.** Mixed teams with equal roles work toward a SHARED goal that requires COOPERATION, with explicit leadership support: a jigsaw-style structure. Contact alone is insufficient; the conditions are what make it work.`
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
            yield: 'ULTRA_HIGH',
            explanation: `A generalized belief about a group is a STEREOTYPE (cognitive). Because the employer does not act differentially, there is no discrimination (behavior), and a belief without negative feeling is not yet prejudice (affect). The MCAT tests this stereotype/prejudice/discrimination distinction directly.`
          },
          {
            question: `Capable students underperform on a math test after being reminded their group is "stereotypically bad at math." This is:`,
            options: [`Stereotype threat`, `In-group bias`, `The just-world hypothesis`, `Out-group homogeneity`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Stereotype threat is the performance drop caused by the anxiety and cognitive load of fearing one will confirm a negative stereotype about one's group. It impairs even well-prepared, motivated individuals and shrinks or disappears when the stereotype is not made salient.`
          },
          {
            question: `According to Allport's contact hypothesis, intergroup contact reduces prejudice MOST effectively when groups have:`,
            options: [`Equal status and cooperative goals`, `Unequal status and competitive goals`, `Unequal status and cooperative goals`, `Equal status and competitive goals`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Mere contact is not enough — and can worsen prejudice if competitive. Allport specified that contact reduces prejudice when groups have EQUAL status, pursue COMMON goals through COOPERATION, and have the SUPPORT of authorities. The jigsaw classroom operationalizes these conditions.`
          }
        ]
      }
    },
    {
      id: 'sp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Belief, feeling, action.** A stereotype is a belief (cognitive), prejudice a feeling (affective), discrimination an action (behavioral).
- **What sustains bias.** In-group bias, out-group homogeneity, ethnocentrism and just-world beliefs keep prejudice going.
- **Stereotype threat.** A salient negative stereotype adds anxiety and cognitive load, lowering performance even in capable people.
- **Contact that works.** Contact reduces prejudice only with equal status, common goals, cooperation and institutional support.

**Common traps**

- **Treating the three as one.** A stereotype can exist without prejudice, and prejudice without discrimination; classify by component.
- **Contact alone is enough.** Mere or competitive contact can fail or worsen prejudice; Allport's conditions make contact work.
- **Reading the drop as low ability.** Stereotype threat impairs capable, motivated people, and it fades when the stereotype is not salient.
- **Threat vs. self-fulfilling prophecy.** Threat is the target's own fear of confirming a stereotype; a prophecy runs through others' expectations.`
    }
  ]
};
