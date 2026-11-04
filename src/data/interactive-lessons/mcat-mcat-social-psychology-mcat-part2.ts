export const mcatSocialPsychPart2Data = {
  topicSlug: 'mcat-social-psychology-mcat',
  sections: [
    {
      id: 'sp2-intro',
      type: 'text' as const,
      content: `# Social Psychology

**Part 2 of 5 — Attribution Theory (Explaining Behavior)**

**Attribution** is the process of inferring the causes of behavior — either **dispositional** (internal: personality, traits) or **situational** (external: circumstances).

### Kelley's Covariation Model

We weigh three kinds of information to decide internal vs. external:

| Dimension | Question | High value implies... |
|-----------|----------|------------------------|
| **Consistency** | Does the person always act this way here? | (needed for any stable attribution) |
| **Distinctiveness** | Is the behavior specific to THIS situation? | High → situational |
| **Consensus** | Do OTHERS act the same way? | High → situational |

- **High** consistency + **high** distinctiveness + **high** consensus → **situational** attribution.
- **High** consistency + **low** distinctiveness + **low** consensus → **dispositional** attribution.

### Major Attribution Biases

| Bias | Definition |
|------|------------|
| **Fundamental attribution error (FAE)** | Overweight DISPOSITION, underweight situation, when judging OTHERS |
| **Actor–observer bias** | Attribute OWN behavior to situation, OTHERS' to disposition |
| **Self-serving bias** | Credit successes to self (internal), blame failures on situation (external) |
| **Just-world hypothesis** | Belief that people get what they deserve → victim blaming |

### Cultural Modulation

- **Individualist** cultures (e.g., US) show STRONGER FAE — they emphasize personal agency.
- **Collectivist** cultures attend more to situational/contextual causes, weakening the FAE.`
    },
    {
      id: 'sp2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Attribution

**Problem 1.** Dev complains about the noise every time he visits one gym. Most other members complain about it too, but Dev rarely complains about noise anywhere else.

- **(a)** Is consistency high or low, and what does that allow?
- **(b)** Are consensus and distinctiveness high or low?
- **(c)** Is the complaint best attributed to Dev or to the gym?
- **(d)** Which attribution would follow if only Dev complained, and he complained at every gym?

**(a) Consistency.** High: he complains on every visit, so the response is stable and an attribution is warranted.

**(b) Consensus and distinctiveness.** Both high. Others complain too (high consensus), and Dev complains only here (high distinctiveness); both point to the stimulus, not to Dev.

**(c) Attribution.** Situational (external). High consistency, high consensus and high distinctiveness mean the gym is noisy, not that "Dev complains about everything."

**(d) The contrast.** Dispositional (internal). High consistency with LOW consensus and LOW distinctiveness points to Dev himself.

**Problem 2.** Tom trips on a sidewalk. An onlooker thinks, "He's clumsy." Tom thinks, "That sidewalk is uneven."

- **(a)** Is the onlooker's explanation dispositional or situational, and which bias does it show?
- **(b)** Is Tom's own explanation dispositional or situational?
- **(c)** Which bias names the mismatch between the two explanations?
- **(d)** Why do actor and observer explain the same trip differently?

**(a) The onlooker.** Dispositional: the trip is blamed on a trait (clumsiness) while the sidewalk is ignored. That is the fundamental attribution error.

**(b) Tom.** Situational: he blames the uneven sidewalk.

**(c) The mismatch.** Actor–observer bias: the observer attributes the act to disposition, the actor attributes it to the situation.

**(d) Why.** We have access to our own situational pressures but see others mainly as actors, so we over-attribute their behavior internally.

**Problem 3.** Some people assume a patient with lung disease "must have smoked and brought it on themselves," even without evidence.

- **(a)** Is this explanation of the illness dispositional or situational?
- **(b)** Which attribution bias is at work?
- **(c)** Why does this bias matter in medicine?

**(a) Type of attribution.** Dispositional: the illness is blamed on the patient's own choices, with no evidence about the actual cause.

**(b) The bias.** The just-world hypothesis: assuming people get the outcomes they deserve leads to victim blaming.

**(c) Why it matters.** It fuels stigma (e.g., toward patients with addiction, obesity or HIV), worsening care and adherence. The MCAT links attribution biases to health disparities and the patient–provider relationship.`
    },
    {
      id: 'sp2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Attribution Theory** 🎯`,
      exercise: {
        questions: [
          {
            question: `A driver cuts you off and you immediately think "What a rude, reckless person!" without considering they might be rushing to an emergency. This illustrates the:`,
            options: [`Fundamental attribution error`, `Mere exposure effect`, `Just-world hypothesis`, `Illusory correlation`],
            correctAnswer: 0,
            yield: 'ULTRA_HIGH',
            explanation: `The fundamental attribution error is the tendency to overattribute OTHERS' behavior to disposition (rude person) while underweighting situational causes (an emergency). It is the default error when explaining other people's actions.`
          },
          {
            question: `A student gets an A and says "I'm brilliant," then gets an F and says "the test was unfair." This is the:`,
            options: [`Self-serving bias`, `Fundamental attribution error`, `Consensus effect`, `Mere exposure effect`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The self-serving bias protects self-esteem by attributing successes to internal factors (ability) and failures to external factors (unfair test). It is distinct from the FAE, which concerns how we explain OTHERS, not ourselves.`
          },
          {
            question: `Using Kelley's covariation model: a behavior shows HIGH consensus, HIGH distinctiveness, and HIGH consistency. The most likely attribution is:`,
            options: [`Situational (external)`, `Dispositional (internal)`, `Equally internal and external`, `Cannot be determined from the data`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `High consensus (others do it too) + high distinctiveness (only in this situation) + high consistency points to the SITUATION as the cause. In contrast, LOW consensus + LOW distinctiveness + high consistency points to disposition.`
          }
        ]
      }
    },
    {
      id: 'sp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Two kinds of cause.** Attribution infers whether behavior stems from disposition (internal traits) or situation (circumstances).
- **Kelley's covariation.** High consensus, distinctiveness and consistency → situational; low consensus and distinctiveness, high consistency → dispositional.
- **FAE and actor–observer.** We overweight disposition when judging others, yet cite the situation for our own behavior.
- **Self-serving and just-world.** We credit our successes to ourselves and blame failures on circumstances; just-world belief blames victims.

**Common traps**

- **Self-serving bias vs. FAE.** The FAE explains OTHERS' behavior; the self-serving bias explains our OWN successes and failures.
- **High distinctiveness as internal.** Behavior seen only in this one situation points to the situation, not to the person.
- **Skipping consistency.** Without high consistency there is no stable pattern, so neither attribution is warranted.
- **Assuming the FAE is universal.** It is stronger in individualist cultures; collectivist cultures weigh situational causes more.`
    }
  ]
};
