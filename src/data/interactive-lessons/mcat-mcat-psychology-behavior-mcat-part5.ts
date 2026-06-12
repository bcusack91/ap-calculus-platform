export const mcatPsychBehavPart5Data = {
  topicSlug: 'mcat-psychology-behavior-mcat',
  sections: [
    {
      id: 'pb5-intro',
      type: 'text' as const,
      content: `# Psychology & Behavior for the MCAT

**Part 5 of 7 — Personality & Psychological Disorders**

### Personality Theories

| Theory | Key Idea |
|--------|----------|
| **Psychoanalytic** (Freud) | Id (pleasure), Ego (reality), Superego (morality); unconscious drives |
| **Humanistic** (Rogers, Maslow) | Self-actualization, unconditional positive regard |
| **Trait** (Big Five) | Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism (OCEAN) |
| **Social-cognitive** (Bandura) | Reciprocal determinism (behavior ↔ cognition ↔ environment) |
| **Biological** | Temperament, genetics, brain structure |

### Freud's Defense Mechanisms

| Defense | Description | Example |
|---------|-------------|---------|
| Repression | Pushing threatening thoughts unconscious | Forgetting traumatic event |
| Projection | Attributing own unacceptable feelings to others | Cheater accuses partner of cheating |
| Displacement | Redirecting emotion to safer target | Angry at boss → kicks dog |
| Rationalization | Logical excuse for unacceptable behavior | "I deserved to cheat — the test was unfair" |
| Reaction formation | Acting opposite to true feelings | Being overly kind to someone you hate |
| Sublimation | Channeling unacceptable impulses into acceptable ones | Aggression → contact sports |

### Psychological Disorders

| Disorder | Key Features |
|----------|-------------|
| Major Depressive Disorder | Persistent sadness, anhedonia, sleep/appetite changes |
| Bipolar Disorder | Manic and depressive episodes |
| Schizophrenia | Positive symptoms (hallucinations, delusions) + negative (flat affect, social withdrawal) |
| Anxiety Disorders | GAD, panic, phobias, OCD, PTSD |

### DSM-5 Categories & Biological Correlates (High Yield)

| Disorder | Distinguishing features | Biological correlate |
|----------|------------------------|----------------------|
| **Major depressive disorder** | $\\geq 2$ weeks of depressed mood OR anhedonia + somatic symptoms | Low serotonin/norepinephrine; targeted by SSRIs |
| **Bipolar I** | At least one full **manic** episode (grandiosity, decreased need for sleep, flight of ideas) | Treated with lithium and mood stabilizers |
| **Schizophrenia** | **Positive** symptoms (added: hallucinations, delusions) + **negative** (removed: avolition, flat affect, alogia) for $\\geq 6$ months | **Dopamine hypothesis** — excess dopamine activity in mesolimbic pathway |
| **OCD** | Obsessions (intrusive thoughts) + compulsions (ritualized acts that reduce anxiety) | Now classed separately from anxiety disorders in DSM-5 |
| **PTSD** | Re-experiencing, avoidance, hyperarousal after trauma | Hyperactive amygdala, hippocampal changes |

**Positive vs. negative symptoms trap:** "Positive" means a behavior is ADDED (hallucination), NOT that it is desirable; "negative" means a normal function is LOST (flat affect). Positive symptoms respond better to typical antipsychotics (D2 blockers).

### Personality Theories — Deeper Contrasts

- **Freud (psychoanalytic):** behavior driven by unconscious conflict among id, ego, superego; psychosexual stages; defense mechanisms reduce anxiety.
- **Trait theorists & the Big Five (OCEAN):** describe personality on continuous dimensions; the **person-situation controversy** (Mischel) questioned whether traits predict behavior consistently across situations.
- **Social-cognitive (Bandura):** **reciprocal determinism** — behavior, personal/cognitive factors, and environment all influence one another. **Locus of control** (internal vs. external) and **self-efficacy** are key constructs.
- **Humanistic (Maslow, Rogers):** people strive toward **self-actualization**; Rogers stressed **unconditional positive regard** and congruence between the real and ideal self.`
    },
    {
      id: 'pb5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Personality & Disorders** 🎯`,
      exercise: {
        questions: [
          {
            question: `A person who is extremely hostile unconsciously but acts overly friendly to everyone is demonstrating:`,
            options: [`Reaction formation — acting opposite to true unconscious feelings`, `Projection`, `Sublimation`, `Displacement`],
            correctAnswer: 0,
            explanation: `Reaction formation involves behaving in the OPPOSITE way of one's true (threatening) feelings. Being overly kind when harboring hostility is the classic example. The trap is **projection**, where one would instead attribute the hostility to OTHERS ("everyone is so hostile to me"). Sublimation channels the impulse into an acceptable activity rather than masking it with its opposite.`
          },
          {
            question: `A clinician evaluates a patient who, for the past 8 months, has reported hearing voices commenting on his actions (a positive symptom) alongside markedly diminished emotional expression and near-total loss of motivation. Which diagnosis and which biological model best fit?`,
            options: [`Schizophrenia, explained by the dopamine hypothesis`, `Major depressive disorder, explained by the monoamine hypothesis`, `Bipolar I disorder, treated with lithium`, `Generalized anxiety disorder, linked to low GABA`],
            correctAnswer: 0,
            explanation: `Hallucinations (positive symptom) PLUS flat affect and avolition (negative symptoms) persisting $\\geq 6$ months indicate **schizophrenia**, classically tied to the **dopamine hypothesis** (excess mesolimbic dopamine). The depression trap fails because anhedonia alone does not produce hallucinations; bipolar requires a manic episode, which is not described here.`
          },
          {
            question: `In a study, participants high in an internal locus of control were more likely than those with an external locus to persist on a difficult task after early failures, attributing outcomes to their own effort. This construct is most central to which theoretical tradition?`,
            options: [`Social-cognitive theory (Bandura/Rotter)`, `Psychoanalytic theory (Freud)`, `Humanistic theory (Maslow)`, `Biological/trait temperament theory`],
            correctAnswer: 0,
            explanation: `**Locus of control** (and the related concept of **self-efficacy**) belongs to the **social-cognitive** tradition, which emphasizes how cognition and beliefs about one's control interact with behavior and environment (reciprocal determinism). The psychoanalytic trap centers on unconscious drives, not conscious attributions about personal control, so it does not fit this attribution-based finding.`
          }
        ]
      }
    },
    {
      id: 'pb5-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Personality & Disorders

<details>
<summary><b>Example 1: Identify the defense mechanism</b></summary>

**Question:** A man who is deeply attracted to a coworker but considers the feeling unacceptable becomes convinced, without evidence, that the coworker is constantly flirting with HIM. Which Freudian defense mechanism is this, and how does it differ from displacement?

**Solution:**
1. The man takes his OWN unacceptable impulse (attraction) and attributes it to another person → **projection.** ✓
2. **Displacement** would instead redirect the *emotion* onto a safer target (e.g., snapping at a subordinate), not reassign the impulse's ownership to someone else.

**Key idea:** Projection = "the feeling is yours, not mine." Displacement = "I'll aim my feeling at a safer target."
</details>

<details>
<summary><b>Example 2: Distinguish two mood disorders from a vignette</b></summary>

**Question:** A patient reports a one-week period of needing only 3 hours of sleep, racing thoughts, grandiose plans to start five companies, and reckless spending — followed by weeks of depressed mood and anhedonia. What is the most likely DSM-5 diagnosis?

**Solution:**
1. The decreased need for sleep, grandiosity, flight of ideas, and impulsive spending define a **manic episode.** ✓
2. A single full manic episode is sufficient for **bipolar I disorder**, even with intervening depressive episodes.
3. Major depressive disorder is ruled out precisely because mania has occurred — the presence of a manic episode is the deciding criterion.

**MCAT lesson:** One manic episode = bipolar I. Don't be distracted by the depressive phase; mania is the diagnostic key.
</details>

<details>
<summary><b>Example 3: Match a personality construct to its theorist</b></summary>

**Question:** A therapist offers a client acceptance and warmth regardless of what the client discloses, aiming to close the gap between the client's real self and ideal self. Name the construct and the theorist.

**Solution:**
1. Acceptance "regardless of what is disclosed" = **unconditional positive regard.** ✓
2. The real-self/ideal-self congruence framework and unconditional positive regard belong to **Carl Rogers**, a **humanistic** theorist.

**Connection:** Contrast with Freud (unconscious conflict) and trait theory (OCEAN dimensions) — humanism is uniquely growth- and self-concept-oriented.
</details>`
    },
    {
      id: 'pb5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Big Five (OCEAN): Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism
- Freud: Id (pleasure), Ego (reality), Superego (morality) + defense mechanisms
- Schizophrenia: positive symptoms (additions) + negative symptoms (deficits)
- Bandura: reciprocal determinism (person ↔ behavior ↔ environment)`
    }
  ]
};
