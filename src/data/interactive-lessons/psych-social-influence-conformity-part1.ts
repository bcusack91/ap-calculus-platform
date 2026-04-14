export const psychSocialInfluencePart1Data = {
  topicSlug: 'social-influence-conformity',
  sections: [
    {
      id: 'socia1-s1-intro',
      type: 'text' as const,
      content: `
# 🤝 Social Influence & Conformity

**Part 1 of 7 — Social Psychology Introduction**

Social psychology studies how people's thoughts, feelings, and behaviors are influenced by the actual, imagined, or implied presence of others. The central lesson: **situations are more powerful than we think.**

### Key Definitions

| Term | Definition | Example |
|------|-----------|---------|
| **Social psychology** | Study of how people think about, influence, and relate to one another | Studying why people conform in groups |
| **Attribution** | Explaining the cause of someone's behavior | "She failed because she didn't study" |
| **Dispositional attribution** | Explaining behavior by internal traits (personality, character) | "He's lazy" |
| **Situational attribution** | Explaining behavior by external circumstances | "He was exhausted from working two jobs" |
| **Fundamental attribution error (FAE)** | Tendency to overestimate dispositional causes and underestimate situational causes when explaining OTHERS' behavior | Assuming a rude cashier is a mean person rather than someone having a terrible day |
| **Self-serving bias** | Attributing our successes to internal factors and our failures to external factors | "I aced the test because I'm smart" but "I failed because the test was unfair" |
| **Actor-observer bias** | We attribute OUR OWN behavior to situations but OTHERS' behavior to dispositions | You trip → "The sidewalk was uneven." Someone else trips → "They're clumsy." |

### The FAE in Action

| What You Observe | FAE Explanation (Dispositional) | More Accurate Explanation (Situational) |
|-----------------|-------------------------------|---------------------------------------|
| A student falls asleep in class | "She's lazy and doesn't care" | She works the night shift to pay tuition |
| A driver cuts you off | "He's a terrible, reckless person" | He just got an emergency call about his child |
| A waiter is slow | "He's incompetent" | The restaurant is understaffed today |

> **Why this matters for the AP exam:** The FAE is one of the most tested concepts in social psychology. You must recognize it in scenarios AND explain why it occurs (we focus on the person, not the situation — the person is "figural" while the situation is "background").
      `
    },
    {
      id: 'socia1-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student watches a classmate give a nervous, disorganized presentation and thinks, "She must be a terrible public speaker." The student doesn\'t consider that the classmate\'s grandmother died that morning. The student is demonstrating:',
            options: [
              'Self-serving bias — attributing the classmate\'s failure to external causes',
              'Actor-observer bias — the student is explaining her own behavior differently',
              'Fundamental attribution error — overestimating dispositional causes for the classmate\'s behavior',
              'Situational attribution — considering the circumstances'
            ],
            correctAnswer: 2,
            explanation: 'The student is making the FUNDAMENTAL ATTRIBUTION ERROR: attributing the classmate\'s poor performance to a dispositional trait ("terrible public speaker") rather than considering the situational factor (grandmother\'s death). The FAE specifically refers to overestimating DISPOSITIONAL causes and underestimating SITUATIONAL causes when judging OTHERS\' behavior. Note: this is about judging SOMEONE ELSE (not yourself), which distinguishes it from self-serving bias.'
          },
          {
            question: 'After failing a math test, Jake says "The test was unfair and the room was too loud." After acing an English essay, Jake says "I\'m a naturally talented writer." Jake is demonstrating:',
            options: [
              'Fundamental attribution error — overestimating personality for others',
              'Self-serving bias — attributing success internally and failure externally',
              'Actor-observer bias — explaining behavior differently as actor vs. observer',
              'Dispositional attribution for both events'
            ],
            correctAnswer: 1,
            explanation: 'Jake shows the SELF-SERVING BIAS: success → internal attribution ("I\'m talented") and failure → external attribution ("unfair test, loud room"). This protects self-esteem. It\'s NOT the FAE (which is about judging OTHERS). It\'s NOT actor-observer bias (which compares how you explain YOUR behavior vs. SOMEONE ELSE\'s). The self-serving bias is specifically about the asymmetry between how we explain our own successes vs. failures.'
          }
        ]
      }
    },
    {
      id: 'socia1-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Attribution Biases Compared

| Bias | Who Is Being Judged? | Pattern | Example |
|------|---------------------|---------|---------|
| **FAE** | OTHER people | Overestimate disposition, underestimate situation | "That driver is an idiot" (not "they might be rushing to the hospital") |
| **Self-serving bias** | YOURSELF | Success → internal; Failure → external | "I won because I'm skilled; I lost because the ref was biased" |
| **Actor-observer bias** | Yourself vs. Others | YOUR behavior → situational; THEIR behavior → dispositional | You're late → "Traffic was terrible." They're late → "They're irresponsible." |

### Why the FAE Occurs

| Factor | Explanation |
|--------|-------------|
| **Perceptual salience** | The person is "figural" (stands out); the situation is "background" (invisible) |
| **Lack of information** | We often don't know the situational pressures others face |
| **Cultural factors** | FAE is stronger in individualist cultures (US, Western Europe) that emphasize personal responsibility |
| **Cognitive efficiency** | Dispositional attributions are simpler and faster |

### Cultural Differences in Attribution

| Culture | Attribution Tendency | Why? |
|---------|---------------------|------|
| **Individualist** (US, UK, Australia) | Stronger FAE — more dispositional attributions | Culture emphasizes individual responsibility |
| **Collectivist** (Japan, China, India) | Weaker FAE — more situational attributions | Culture emphasizes context, relationships, and circumstances |

> **AP Connection:** The cultural difference in FAE connects to cross-cultural psychology. Don't say the FAE is "universal" — it's WEAKER in collectivist cultures.
      `
    },
    {
      id: 'socia1-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'The FAE involves overestimating ___ (dispositional/situational) causes for others\' behavior', answer: 'dispositional' },
          { label: 'Attributing your success to ability but failure to bad luck is the self-___ bias', answer: 'serving' },
          { label: 'The FAE is stronger in ___ (individualist/collectivist) cultures', answer: 'individualist' }
        ]
      }
    },
    {
      id: 'socia1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Attribution Bias** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'Watching a homeless person and thinking "They must be lazy" without considering economic factors', options: ['Fundamental attribution error', 'Self-serving bias', 'Actor-observer bias', 'Situational attribution'] },
          { label: 'A coach says "We won because of my strategy" and "We lost because the players didn\'t execute"', options: ['Fundamental attribution error', 'Self-serving bias', 'Actor-observer bias', 'Dispositional attribution'] },
          { label: 'You explain your own road rage as "I was cut off first" but judge another road-rager as "an angry person"', options: ['Fundamental attribution error', 'Self-serving bias', 'Actor-observer bias', 'Just-world hypothesis'] }
        ],
        correctAnswers: ['Fundamental attribution error', 'Self-serving bias', 'Actor-observer bias'],
        hint1: 'Judging others\' behavior by personality while ignoring their circumstances.',
        hint2: 'Taking credit for successes, blaming external factors for failures.',
        hint3: 'Explaining your own behavior situationally but others\' behavior dispositionally.',
        explanation: 'Judging homelessness as laziness = FAE (dispositional attribution ignoring situation). Coach taking credit/shifting blame = self-serving bias. Your road rage is situational, others\' is dispositional = actor-observer bias.'
      }
    },
    {
      id: 'socia1-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Strategy: Attribution Questions

**Common Misconceptions:**

| Misconception | Reality |
|--------------|---------|
| FAE = any attribution error | FAE is specifically about overestimating DISPOSITIONAL causes for OTHERS' behavior |
| Self-serving bias = FAE | Self-serving bias is about YOUR OWN successes/failures; FAE is about OTHERS' behavior |
| Actor-observer = self-serving | Actor-observer compares explanations for self vs. others; self-serving compares success vs. failure explanations |
| The FAE is universal | It's weaker in collectivist cultures |

**Quick Decision Tree:**
1. Is the judgment about YOURSELF or OTHERS?
   - Others → Could be FAE or actor-observer
   - Yourself → Could be self-serving or actor-observer
2. Is it about SUCCESS vs. FAILURE of your own behavior? → Self-serving bias
3. Is it comparing YOUR explanation vs. explanation of OTHERS for similar behavior? → Actor-observer bias
4. Is it simply attributing OTHERS' behavior to their personality? → FAE

> **AP Tip:** The phrase "fundamental attribution error" implies it's a MISTAKE. We SHOULD consider situational factors but we DON'T. On the AP exam, FAE almost always involves someone judging another person harshly without considering circumstances.
      `
    },
    {
      id: 'socia1-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'In a classic study, participants read essays either supporting or opposing Fidel Castro. Even when told the essay writers were ASSIGNED their position (had no choice), participants still believed the writers personally agreed with the position they wrote about. This demonstrates:',
            options: [
              'Self-serving bias — participants protected their self-esteem',
              'Actor-observer bias — participants explained their own behavior differently',
              'Fundamental attribution error — participants attributed the essay content to the writers\' personal beliefs despite knowing about the situational constraint (assignment)',
              'Cognitive dissonance — participants experienced discomfort from conflicting beliefs'
            ],
            correctAnswer: 2,
            explanation: 'This is the classic Jones & Harris (1967) study demonstrating the FAE. Even with CLEAR situational information (the writer was ASSIGNED the position), participants still attributed the essay to the writer\'s personal attitude (dispositional attribution). This shows how powerful the FAE is — we attribute others\' behavior to their personality even when we KNOW the situation caused it.'
          },
          {
            question: 'After a group project, Sarah received an A. She tells her friends, "I worked really hard and I\'m good at research." Her teammate, who received a C, tells his friends, "Sarah took over the whole project and didn\'t let me contribute." Sarah\'s explanation BEST demonstrates:',
            options: [
              'Fundamental attribution error',
              'Self-serving bias — she attributes her success to internal factors (hard work, ability)',
              'Actor-observer bias — she explains the same event differently than her teammate',
              'Dispositional attribution applied to herself'
            ],
            correctAnswer: 1,
            explanation: 'Sarah attributes her SUCCESS to internal factors (hard work, ability) — classic self-serving bias. Her teammate attributes his FAILURE to external factors (Sarah taking over) — also self-serving bias! Both are protecting self-esteem. While actor-observer bias (C) is tempting, the question specifically asks about SARAH\'s explanation. Sarah\'s pattern (success → internal attribution) is textbook self-serving bias.'
          }
        ]
      }
    }
  ]
}
