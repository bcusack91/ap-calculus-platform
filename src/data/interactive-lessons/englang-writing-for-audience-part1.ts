export const englangWritingForAudiencePart1Data = {
  topicSlug: 'englang-writing-for-audience',
  sections: [
    {
      id: 'elwa1-intro',
      type: 'text' as const,
      content: `
# 👥 Writing for Audience

**Part 1 of 7 — Adapting Rhetorical Choices to Reader Expectations and Values**

---

## Audience-Centered Writing

Your argument succeeds only if the intended audience finds it credible, relevant, and compelling.

### Audience Questions
- What does this audience already believe?
- What evidence do they trust?
- What language level is appropriate?
- What objections are likely?
- What tone will persuade rather than alienate?

---

## Audience Profiles and Strategies

| Audience Type | Best Moves | Risk to Avoid |
|--------------|-----------|---------------|
| Skeptical/hostile | Concession, measured tone, shared values | Mocking tone |
| Sympathetic | Strong call to action, momentum | Preaching to choir only |
| General public | Clear terms, relatable examples | Excessive jargon |
| Expert audience | Technical precision, methodological rigor | Oversimplification |

### Framing the Same Idea Differently
Policy: Ban single-use plastic bags

- For consumers: emphasize long-term cost savings and cleaner neighborhoods
- For business owners: emphasize phased rollout and predictable compliance
- For environmental groups: emphasize measurable waste reduction and ecosystem benefits

> 🔑 Adaptation changes framing, evidence, and tone. It does NOT require changing your core claim.
      `
    },
    {
      id: 'elwa1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the primary goal of audience adaptation?',
            options: [
              'To impress the audience with complex vocabulary and a formal register',
              'To align rhetorical choices with audience values and expectations',
              'To avoid a clear stance so no audience member feels challenged',
              'To use the same examples in every context for consistency'
            ],
            correctAnswer: 1,
            explanation: 'Audience adaptation means selecting tone, evidence, and framing that resonate with the intended audience while maintaining argumentative integrity.'
          },
          {
            question: 'When writing for a skeptical audience, which move is most effective?',
            options: [
              'Dismiss opposing concerns as uninformed to project confidence',
              'Acknowledge concerns and address them with evidence',
              'Rely on emotional anecdotes rather than data or reasoning',
              'Avoid counterarguments so readers are not reminded of doubts'
            ],
            correctAnswer: 1,
            explanation: 'Skeptical audiences respond to fair-mindedness and evidence. Concession + rebuttal builds ethos and lowers defensiveness.'
          }
        ]
      }
    },
    {
      id: 'elwa1-content',
      type: 'text' as const,
      content: `
## Audience Levers You Control

### 1. Diction/Register
- General audience: define terms, avoid unnecessary jargon
- Expert audience: use precise technical language efficiently

### 2. Evidence Selection
- Community audience: local data and concrete examples
- Policy audience: cost-benefit analyses and implementation feasibility
- Academic audience: peer-reviewed sources and methodological rigor

### 3. Tone Management
| Situation | Productive Tone |
|----------|------------------|
| Polarized issue | Respectful, measured |
| Urgent crisis | Firm, urgent, solution-oriented |
| Educational context | Explanatory, clear |

### 4. Anticipating Resistance
Plan a response to likely objections before your audience raises them.

Example:
"Some business owners worry that compliance costs will rise; however, phased implementation and tax credits reduce transition burdens."

## Ethical Audience Adaptation
Adaptation should persuade ethically, not manipulate:
- Avoid misinformation and cherry-picking
- Represent opposing views fairly
- Use emotional appeals responsibly
- Maintain intellectual honesty
      `
    },
    {
      id: 'elwa1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Matching evidence and tone to a reader group is audience _______.

2) For skeptical readers, acknowledging concerns first is called a _______.

3) Adapting to audience should not require changing your core _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['adaptation', 'concession', 'claim'],
        hint1: 'You adapt rhetoric to readers.',
        hint2: 'You concede part of opposing view.',
        hint3: 'Your central thesis remains stable.',
        explanation: 'Audience adaptation aligns strategy. Concession builds trust. Core claim can stay constant while framing changes.'
      }
    },
    {
      id: 'elwa1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Pick the Better Audience Move** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Writing for a general audience, the best diction choice is ___',
            options: ['Accessible, with terms defined', 'Dense, specialized jargon', 'Formal, legalistic phrasing', 'Elevated, abstract academic language']
          },
          {
            label: 'For policymakers, strongest support usually includes ___',
            options: ['Cost-benefit and implementation data', 'Moving stories from affected residents', 'Expert opinions on the moral stakes', 'Historical background on the issue']
          },
          {
            label: 'Ethical audience adaptation requires ___',
            options: ['Fair representation of opposing views', 'Changing your claim to match the audience', 'Omitting evidence the audience might dislike', 'Mirroring the audience\'s opinions']
          }
        ],
        correctAnswers: ['Accessible, with terms defined', 'Cost-benefit and implementation data', 'Fair representation of opposing views'],
        hint1: 'Accessibility matters for broad readers.',
        hint2: 'Policy audiences care about feasibility.',
        hint3: 'Persuasion should remain honest.',
        explanation: 'General readers need clarity. Policymakers need feasibility evidence. Ethical adaptation requires fairness and accuracy.'
      }
    },
    {
      id: 'elwa1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Writing for Audience

- Identify target audience in first planning minute
- Match evidence type to what that audience trusts
- Use concession/rebuttal for skeptical readers
- Avoid jargon unless writing to expert audiences
- Keep tone strategic: respectful in controversy, urgent in crisis
- Show sophistication by balancing persuasion with fairness
      `
    },
    {
      id: 'elwa1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student argues for renewable energy to a city council by citing local outage costs, grid resilience data, and phased budget options. Why is this effective?',
            options: [
              'It appeals mainly to council members\' fears about outage costs',
              'It matches its evidence to the costs and feasibility a council weighs',
              'It shows the student\'s own expertise, which is what councils value',
              'It changes the claim in each paragraph to please different members'
            ],
            correctAnswer: 1,
            explanation: 'City councils prioritize practical governance concerns. Local costs, resilience, and budget phasing align evidence with audience decision criteria, making persuasion stronger.'
          },
          {
            question: 'Which opening best addresses a skeptical audience?',
            options: [
              '"Anyone who still disagrees with this plan is clearly uninformed about the facts and has not read the research carefully."',
              '"Although concerns about implementation costs are valid, current pilot programs show that phased adoption can reduce expenses over time."',
              '"This topic is simple and has one obvious answer that every reasonable person in our community will surely accept."',
              '"I feel very strongly about this issue, and I hope that after reading my argument you will come to feel exactly the same way that I do about it."'
            ],
            correctAnswer: 1,
            explanation: 'This opening concedes a legitimate concern and responds with evidence-based reasoning. That balanced approach builds credibility and lowers resistance in skeptical readers. The others insult doubters, deny that the question is open, or rely on the writer\'s feelings instead of evidence.'
          }
        ]
      }
    }
  ]
};
