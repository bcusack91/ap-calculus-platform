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
      id: 'sp2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Attribution Theory** 🎯`,
      exercise: {
        questions: [
          {
            question: `A driver cuts you off and you immediately think "What a rude, reckless person!" without considering they might be rushing to an emergency. This illustrates the:`,
            options: [`Fundamental attribution error`, `Self-serving bias`, `Just-world hypothesis`, `Actor–observer bias only`],
            correctAnswer: 0,
            explanation: `The fundamental attribution error is the tendency to overattribute OTHERS' behavior to disposition (rude person) while underweighting situational causes (an emergency). It is the default error when explaining other people's actions.`
          },
          {
            question: `A student gets an A and says "I'm brilliant," then gets an F and says "the test was unfair." This is the:`,
            options: [`Self-serving bias`, `Fundamental attribution error`, `Consensus effect`, `Mere exposure effect`],
            correctAnswer: 0,
            explanation: `The self-serving bias protects self-esteem by attributing successes to internal factors (ability) and failures to external factors (unfair test). It is distinct from the FAE, which concerns how we explain OTHERS, not ourselves.`
          },
          {
            question: `Using Kelley's covariation model: a behavior shows HIGH consensus, HIGH distinctiveness, and HIGH consistency. The most likely attribution is:`,
            options: [`Situational (external)`, `Dispositional (internal)`, `Equally internal and external`, `Cannot be determined`],
            correctAnswer: 0,
            explanation: `High consensus (others do it too) + high distinctiveness (only in this situation) + high consistency points to the SITUATION as the cause. In contrast, LOW consensus + LOW distinctiveness + high consistency points to disposition.`
          }
        ]
      }
    },
    {
      id: 'sp2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Attribution

<details>
<summary><b>Example 1: Apply Kelley's covariation model to data</b></summary>

**Question:** Maria laughs at a particular comedian (consistency high). Almost everyone laughs at this comedian (consensus high), but Maria rarely laughs at other comedians (distinctiveness high). Internal or external attribution?

**Solution:**
1. High consistency → the response is stable, so an attribution is warranted.
2. High consensus (others laugh too) → points to the stimulus, not Maria.
3. High distinctiveness (only this comedian) → points to the stimulus.
4. Conclusion: **situational/external** — the comedian is funny, not "Maria laughs at everything." ✓

**MCAT pattern:** High-high-high → external; high consistency with low consensus & low distinctiveness → internal.
</details>

<details>
<summary><b>Example 2: Separate FAE from actor–observer bias</b></summary>

**Question:** Tom trips on a sidewalk. An onlooker thinks "He's clumsy." Tom thinks "That sidewalk is uneven." Name each attribution and the combined bias.

**Solution:**
1. Onlooker attributes Tom's trip to DISPOSITION (clumsy) → **fundamental attribution error.** ✓
2. Tom attributes his own trip to the SITUATION (bad sidewalk).
3. The mismatch — observer blames disposition, actor blames situation — is the **actor–observer bias.** ✓

**Key:** We have access to our own situational pressures but see others mainly as actors, so we over-attribute their behavior internally.
</details>

<details>
<summary><b>Example 3: Connect the just-world hypothesis to a health scenario</b></summary>

**Question:** Some people assume a patient with lung disease "must have smoked and brought it on themselves," even without evidence. What bias is this, and why is it relevant to medicine?

**Solution:**
1. Assuming people get the outcomes they deserve → **just-world hypothesis** → victim blaming. ✓
2. In medicine this fuels stigma (e.g., toward patients with addiction, obesity, or HIV), worsening care and adherence.

**Connection:** The MCAT links attribution biases to health disparities and the patient–provider relationship.
</details>`
    },
    {
      id: 'sp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Attribution = inferring causes: dispositional (internal) vs. situational (external).
- Kelley's covariation: high consensus + high distinctiveness + high consistency → situational; low consensus + low distinctiveness → dispositional.
- FAE: overattribute OTHERS' behavior to disposition. Actor–observer: situation for self, disposition for others. Self-serving: success internal, failure external.
- Just-world hypothesis → victim blaming; individualist cultures show stronger FAE.`
    }
  ]
};
