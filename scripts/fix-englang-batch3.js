const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons');

function write(name, content) {
  fs.writeFileSync(path.join(dir, name), content);
  console.log('Wrote:', name);
}

// ─── 1. Rhetorical Situation (Writing) ───
write('englang-rhetorical-situation-writing-part1.ts', `export const englangRhetoricalSituationWritingPart1Data = {
  topicSlug: 'englang-rhetorical-situation-writing',
  sections: [
    {
      id: 'elrsw1-intro',
      type: 'text' as const,
      content: \`
# 🧭 Rhetorical Situation in Writing

**Part 1 of 7 — Making Deliberate Choices for Audience, Purpose, and Context**

---

## Writing Is Situation-Dependent

Strong AP writing is not just "good prose." It is prose tailored to a rhetorical situation.

Before writing, ask:
- Who is my audience?
- What is my purpose?
- What is the context/exigence?
- What tone and evidence will this audience trust?

---

## Planning with Rhetorical Situation

| Element | What to Decide as a Writer |
|--------|-----------------------------|
| **Audience** | Knowledge level, values, concerns, likely objections |
| **Purpose** | Persuade, explain, qualify, challenge, propose |
| **Exigence** | Why this argument matters right now |
| **Context** | Social/historical circumstances shaping reception |
| **Persona (voice)** | Credible, fair, confident, urgent, reflective |

### Same Claim, Different Audience
Claim: "Cities should expand public transit."

| Audience | Strategic Choice |
|----------|------------------|
| Taxpayers | Emphasize cost savings, reduced congestion |
| Environmental advocates | Emphasize emissions reduction |
| Business leaders | Emphasize worker mobility and productivity |

> 🔑 Audience adaptation is not changing your principles. It is choosing the most persuasive framing for the people you need to reach.
      \`
    },
    {
      id: 'elrsw1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What is the most important first step before drafting an AP argument essay?',
            options: [
              'Choose advanced vocabulary words',
              'Identify audience, purpose, and exigence',
              'Write the conclusion first',
              'Add as many rhetorical devices as possible'
            ],
            correctAnswer: 1,
            explanation: 'Rhetorical planning comes first. If you do not know who you are addressing and why, your evidence, tone, and organization will be unfocused. Effective writing starts with situational awareness.'
          },
          {
            question: 'A student keeps the same thesis but shifts examples when writing for a different audience. This is best described as:',
            options: [
              'Inconsistency',
              'Audience adaptation',
              'Logical fallacy',
              'Plagiarism'
            ],
            correctAnswer: 1,
            explanation: 'Audience adaptation means selecting framing and evidence that resonate with a specific audience while preserving the core claim. This is a hallmark of effective rhetoric, not inconsistency.'
          }
        ]
      }
    },
    {
      id: 'elrsw1-content',
      type: 'text' as const,
      content: \`
## Turning Situation into Structure

### Practical Prewriting Template
1. **Thesis**: What exactly do I claim?
2. **Audience profile**: What does this audience value or resist?
3. **Evidence plan**: Which examples/statistics will they trust?
4. **Counterargument**: What objection is most likely?
5. **Tone plan**: Measured, urgent, conciliatory, assertive?

### Sample Situation Response
Prompt: Should schools ban phones in class?

- Audience: school board and families
- Purpose: persuade toward a partial phone ban with instructional exceptions
- Context: rising distraction + equity concerns
- Strategy:
  - Use local classroom data (logos)
  - Acknowledge family emergency concerns (concession)
  - Propose structured exception policy (rebuttal + compromise)

## Common Writing Mistakes

| Mistake | Consequence |
|--------|-------------|
| Ignoring audience concerns | Argument feels tone-deaf |
| No context/exigence | Writing feels generic and low stakes |
| Evidence mismatch | Audience distrusts support |
| One-note tone | Essay sounds rigid or simplistic |

### Sophistication Move
Show awareness of constraints:
"While an immediate full ban may overburden underfunded schools, phased implementation with teacher training offers a realistic path forward."

This signals nuanced engagement with real-world context.
      \`
    },
    {
      id: 'elrsw1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) The urgent issue that makes a writer respond now is the _______.

2) Adapting examples and framing to fit a specific audience is called audience _______.

3) Acknowledging likely objections before responding strengthens rhetorical _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['exigence', 'adaptation', 'effectiveness'],
        hint1: 'The trigger behind the writing.',
        hint2: 'You adapt to audience needs.',
        hint3: 'How well persuasion works.',
        explanation: 'Exigence drives urgency. Audience adaptation tailors strategy. Addressing objections improves effectiveness.'
      }
    },
    {
      id: 'elrsw1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Choose the Best Strategic Move** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Writing to budget-conscious voters, the strongest transit argument is ___',
            options: ['Cost savings and reduced congestion', 'Only moral duty language', 'Technical engineering details only', 'No evidence needed']
          },
          {
            label: 'If your audience is skeptical, an effective tone is often ___',
            options: ['Measured and fair-minded', 'Mocking and dismissive', 'Overly dramatic', 'Purely sentimental']
          },
          {
            label: 'An essay with no discussion of why the issue matters now is weak in ___',
            options: ['Exigence/context', 'Grammar', 'Word count', 'Citation style']
          }
        ],
        correctAnswers: ['Cost savings and reduced congestion', 'Measured and fair-minded', 'Exigence/context'],
        hint1: 'Match argument to what voters prioritize.',
        hint2: 'Skeptics respond better to balance than mockery.',
        hint3: 'Why now? That is exigence.',
        explanation: 'Audience values guide evidence choice. Skeptical audiences need fair tone. Missing urgency means weak exigence/context.'
      }
    },
    {
      id: 'elrsw1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Rhetorical Situation in Writing

- Spend 2-3 minutes planning audience/purpose/context before drafting
- Choose evidence your target audience finds credible
- Include one concession + rebuttal to show nuanced reasoning
- Avoid generic intros; establish stakes and exigence quickly
- Match tone to audience receptivity (hostile audience -> measured tone)
- Sophistication often comes from qualifying claims in real-world context
      \`
    },
    {
      id: 'elrsw1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A student writes an argument full of highly technical economic jargon for a general public audience. What is the biggest rhetorical issue?',
            options: [
              'Too much logos',
              'Audience mismatch undermining accessibility and persuasion',
              'Too many transitions',
              'Lack of thesis'
            ],
            correctAnswer: 1,
            explanation: 'Even strong information fails if the audience cannot process it. Effective rhetoric requires matching diction and explanation level to audience knowledge and expectations.'
          },
          {
            question: 'Which opening best demonstrates awareness of exigence?',
            options: [
              '"Pollution has existed for a long time."',
              '"In the past month alone, two local water advisories have left 40,000 residents without safe tap water, making infrastructure reform urgent."',
              '"This essay will discuss water."',
              '"People have opinions about infrastructure."'
            ],
            correctAnswer: 1,
            explanation: 'This opening establishes immediate stakes, specific context, and urgency. It gives a clear reason the argument matters now, which is exactly what exigence does.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 2. Claims and Evidence (Writing) ───
write('englang-claims-evidence-writing-part1.ts', `export const englangClaimsEvidenceWritingPart1Data = {
  topicSlug: 'englang-claims-evidence-writing',
  sections: [
    {
      id: 'elcew1-intro',
      type: 'text' as const,
      content: \`
# 🛠️ Claims and Evidence in Writing

**Part 1 of 7 — Crafting Defensible Claims and Supporting Them Effectively**

---

## Defensible Claims

On AP argument essays, your claim must be:

| Quality | What It Means |
|--------|----------------|
| **Clear** | Readers know exactly what you argue |
| **Debatable** | Reasonable people could disagree |
| **Specific** | Narrow enough to support in one essay |
| **Qualified** | Not absolute when complexity exists |

### Weak vs Strong Claims
- Weak: "Technology is bad."
- Better: "While educational technology improves access, schools should limit passive screen-based instruction to preserve discussion-based learning."

---

## Building an Evidence Set

Use a balanced evidence mix:

| Evidence Type | Best Use |
|--------------|----------|
| Historical example | Show precedent/pattern |
| Current event | Show relevance and urgency |
| Research/statistics | Establish measurable support |
| Hypothetical scenario | Test logic of policy outcomes |
| Literary/cultural reference | Add conceptual depth |

> 🔑 AP readers reward evidence that is **specific and explained**, not just dropped into paragraphs.
      \`
    },
    {
      id: 'elcew1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which claim is most defensible for an AP argument essay?',
            options: [
              '"All social media is evil and should be banned immediately everywhere."',
              '"Social media has both benefits and risks, and schools should teach digital literacy to reduce harm."',
              '"Social media exists."',
              '"People use phones a lot."'
            ],
            correctAnswer: 1,
            explanation: 'This claim is specific, debatable, and qualified. It recognizes complexity and proposes a concrete policy response, which supports nuanced development.'
          },
          {
            question: 'What is the biggest problem with evidence "Everyone I know agrees with me"?',
            options: [
              'It is too formal',
              'It is anecdotal and unrepresentative',
              'It uses a concession',
              'It has too much data'
            ],
            correctAnswer: 1,
            explanation: 'A personal social circle is a narrow sample and cannot support broad claims. AP arguments need representative examples, credible sources, or well-developed reasoning beyond personal consensus.'
          }
        ]
      }
    },
    {
      id: 'elcew1-content',
      type: 'text' as const,
      content: \`
## Commentary: The Most Important Step

Evidence does not speak for itself. You must explain:
- Why this evidence matters
- How it supports your claim
- What inference the reader should draw

### Commentary Frame
\\\`\\\`\\\`
Evidence: [specific fact/example]
Interpretation: This demonstrates that...
Connection: Therefore, this supports my claim that...
\\\`\\\`\\\`

## Integrating Counterarguments

Strong AP essays include an opposing view and response.

| Move | Sentence Starter |
|------|------------------|
| Concession | "Admittedly, ..." |
| Qualification | "This concern is valid in cases where..." |
| Rebuttal | "However, this objection overlooks..." |

### Example Paragraph Spine
1. Topic claim
2. Evidence 1 + commentary
3. Evidence 2 + commentary
4. Counterargument + rebuttal
5. Link back to thesis

## Avoiding Common Failures
- Claim too broad to prove
- Evidence list with no analysis
- Repetition of same evidence type
- Counterargument mentioned but never answered
- Conclusion that introduces new evidence
      \`
    },
    {
      id: 'elcew1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) A claim that avoids absolute language and acknowledges complexity is _______.

2) The explanation that links evidence back to your claim is called _______.

3) "Admittedly" usually signals a _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['qualified', 'commentary', 'concession'],
        hint1: 'Not all-or-nothing.',
        hint2: 'Your analytical bridge.',
        hint3: 'Acknowledging part of the opposing view.',
        explanation: 'Qualified claims show nuance. Commentary connects evidence to argument. "Admittedly" signals concession.'
      }
    },
    {
      id: 'elcew1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Choose the Stronger Move** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Best evidence set for a policy essay on public transit:',
            options: ['City ridership data + budget analysis + commuter case study', 'Only personal opinion', 'Only one anecdote', 'No evidence, just moral language']
          },
          {
            label: 'After presenting evidence, the next strongest move is to add ___',
            options: ['Commentary explaining significance', 'A random quote', 'A new unrelated claim', 'A rhetorical question only']
          },
          {
            label: 'A claim that says "always" and "never" is often rhetorically ___',
            options: ['Vulnerable/overstated', 'Sophisticated', 'Unquestionable', 'Ideal for every topic']
          }
        ],
        correctAnswers: ['City ridership data + budget analysis + commuter case study', 'Commentary explaining significance', 'Vulnerable/overstated'],
        hint1: 'Blend quantitative and contextual evidence.',
        hint2: 'Interpretation is the key AP skill.',
        hint3: 'Absolute claims are easy to attack.',
        explanation: 'Best support is mixed and specific. Commentary is essential. Absolute language weakens defensibility.'
      }
    },
    {
      id: 'elcew1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Claims & Evidence in Writing

- Write a claim that is specific, debatable, and qualified
- Use at least 2-3 distinct evidence types across essay
- Prioritize commentary over evidence-dumping
- Include one meaningful concession/rebuttal sequence
- Use evidence you can explain deeply, not just name-drop
- End each body paragraph by reconnecting to thesis
      \`
    },
    {
      id: 'elcew1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A student includes four statistics in one paragraph but only one sentence of explanation. Why is this weak?',
            options: [
              'Statistics are never persuasive',
              'Insufficient commentary leaves unclear how evidence supports the claim',
              'Too much ethos',
              'AP forbids numbers in essays'
            ],
            correctAnswer: 1,
            explanation: 'AP readers value analysis. Without commentary, evidence becomes a list rather than an argument. The writer must explain significance, inference, and claim connection.'
          },
          {
            question: 'Which thesis is strongest?',
            options: [
              '"Homework is bad."',
              '"Because moderate practice can reinforce learning but excessive assignments harm sleep and equity, schools should cap nightly homework at grade-specific limits."',
              '"Homework exists in many countries."',
              '"Students and teachers disagree sometimes."'
            ],
            correctAnswer: 1,
            explanation: 'This thesis is nuanced, qualified, and policy-oriented. It acknowledges tradeoffs while proposing a concrete, defensible action.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 3. Reasoning and Organization (Writing) ───
write('englang-reasoning-org-writing-part1.ts', `export const englangReasoningOrgWritingPart1Data = {
  topicSlug: 'englang-reasoning-org-writing',
  sections: [
    {
      id: 'elrow1-intro',
      type: 'text' as const,
      content: \`
# 🧱 Reasoning and Organization in Writing

**Part 1 of 7 — Building a Coherent Line of Reasoning in Your Essays**

---

## What AP Readers Want

High-scoring essays show a clear **line of reasoning**:
- Thesis establishes direction
- Each paragraph advances that direction
- Transitions show logic between points
- Counterargument is addressed
- Conclusion reinforces implications

---

## Practical Essay Blueprint

| Section | Goal |
|--------|------|
| Intro + thesis | Frame issue and present defensible claim |
| Body 1 | Strongest reason + evidence + commentary |
| Body 2 | Second reason + evidence + commentary |
| Body 3 | Counterargument + rebuttal (or qualification) |
| Conclusion | Synthesize reasoning and stakes |

### Topic Sentence Formula
\\\`\\\`\\\`
[Reason statement] + [link to thesis]
\\\`\\\`\\\`

Example:
"Because attendance policies shape both learning and equity, districts should replace punitive absence penalties with support-based interventions."

> 🔑 Topic sentences are mini-claims. If they are vague, your reasoning chain weakens.
      \`
    },
    {
      id: 'elrow1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which feature most clearly indicates a coherent line of reasoning?',
            options: [
              'Many rhetorical questions',
              'Paragraphs that each connect back to and develop the thesis',
              'Advanced vocabulary in every sentence',
              'A very long introduction'
            ],
            correctAnswer: 1,
            explanation: 'Coherence depends on logical development: each paragraph must perform a clear argumentative function connected to the thesis. Style alone cannot substitute for reasoning structure.'
          },
          {
            question: 'What is the best role of a counterargument paragraph?',
            options: [
              'Ignore opposing views to keep writing concise',
              'Demonstrate awareness of complexity and strengthen your position through rebuttal or qualification',
              'Replace the thesis with a new claim',
              'Add unrelated examples'
            ],
            correctAnswer: 1,
            explanation: 'Addressing opposition shows maturity and strengthens credibility. Effective rebuttal demonstrates why your position remains stronger after considering alternatives.'
          }
        ]
      }
    },
    {
      id: 'elrow1-content',
      type: 'text' as const,
      content: \`
## Transition Logic

Use transitions to mark reasoning relationships:

| Relationship | Transition Examples |
|-------------|---------------------|
| Addition | furthermore, moreover, in addition |
| Contrast | however, by contrast, nevertheless |
| Cause | because, since, given that |
| Effect | therefore, consequently, thus |
| Qualification | admittedly, while, to be sure |
| Emphasis | indeed, notably, crucially |

### Paragraph Coherence Moves
- Repeat core terms (e.g., equity, access, sustainability)
- Use pronouns with clear antecedents
- End paragraph by linking to thesis
- Open next paragraph with logical continuation

## Common Organization Problems

| Problem | Revision Move |
|--------|----------------|
| Paragraph drift (off-topic) | Rewrite topic sentence around claim |
| Evidence pile-up | Add commentary after each piece |
| Abrupt jumps | Insert transition + logic sentence |
| Weak conclusion | Synthesize implications, do not summarize only |

### Conclusion Upgrade Formula
\\\`\\\`\\\`
Restate thesis with nuance -> synthesize key reasons -> explain stakes/implications
\\\`\\\`\\\`
      \`
    },
    {
      id: 'elrow1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) A sentence that states the paragraph's reason and links it to the thesis is a _______ sentence.

2) The transition "therefore" signals a logical _______.

3) A counterargument paragraph should include a _______ or qualification to strengthen your position.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['topic', 'effect', 'rebuttal'],
        hint1: 'It starts the paragraph claim.',
        hint2: 'What follows from prior reasons.',
        hint3: 'You respond to opposition with this.',
        explanation: 'Topic sentence frames reasoning. "Therefore" indicates effect/conclusion. Counterarguments need rebuttal or qualification.'
      }
    },
    {
      id: 'elrow1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Choose the Best Organizational Move** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'If paragraph 2 feels disconnected from thesis, the first fix is to revise the ___',
            options: ['Topic sentence and claim link', 'Title only', 'Font size', 'Conclusion punctuation']
          },
          {
            label: '"Admittedly" followed by "however" typically signals ___',
            options: ['Concession then rebuttal', 'Narrative flashback', 'Definition sequence', 'Cause-effect only']
          },
          {
            label: 'A strong conclusion should primarily ___',
            options: ['Synthesize reasoning and explain stakes', 'Introduce new evidence', 'Repeat intro word-for-word', 'Add unrelated anecdotes']
          }
        ],
        correctAnswers: ['Topic sentence and claim link', 'Concession then rebuttal', 'Synthesize reasoning and explain stakes'],
        hint1: 'Paragraph focus starts there.',
        hint2: 'Acknowledge then respond.',
        hint3: 'Show why your argument matters.',
        explanation: 'Disconnected paragraph = topic sentence issue. "Admittedly...however" marks concession/rebuttal. Conclusions should synthesize and project implications.'
      }
    },
    {
      id: 'elrow1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Reasoning & Organization in Writing

- Build essay around 2-3 clear reasons, not many shallow points
- Make topic sentences explicit mini-claims tied to thesis
- Use transitions to reveal logic (cause, contrast, qualification)
- Add commentary after each evidence unit
- Include at least one counterargument response
- End with implications: what follows if your claim is accepted?
      \`
    },
    {
      id: 'elrow1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A student essay has strong evidence but reads like disconnected points. What revision would most improve line of reasoning?',
            options: [
              'Add more quotations only',
              'Insert clear topic sentences and transitions showing relationships among claims',
              'Replace all short sentences with long ones',
              'Use more advanced vocabulary'
            ],
            correctAnswer: 1,
            explanation: 'The issue is coherence, not evidence quantity. Topic sentences and transitions make the argument-s logical structure explicit and help readers follow the reasoning chain.'
          },
          {
            question: 'Which paragraph order best supports a persuasive line of reasoning?',
            options: [
              'Counterargument first, then random examples, then thesis',
              'Thesis, reason 1, reason 2, counterargument/rebuttal, synthesis conclusion',
              'Only one long paragraph with many ideas',
              'Conclusion first, intro last'
            ],
            correctAnswer: 1,
            explanation: 'This order creates progressive logic: state claim, develop support, test against opposition, and synthesize implications. It reflects coherent argumentative structure AP readers value.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 4. Style (Writing) ───
write('englang-style-writing-part1.ts', `export const englangStyleWritingPart1Data = {
  topicSlug: 'englang-style-writing',
  sections: [
    {
      id: 'elsw1-intro',
      type: 'text' as const,
      content: \`
# 🖋️ Style in Writing

**Part 1 of 7 — Crafting Prose That Is Precise, Persuasive, and Purposeful**

---

## What "Good Style" Means on AP Lang

AP style is not about sounding fancy. It is about rhetorical control:
- Precise diction
- Varied but purposeful syntax
- Consistent tone
- Clear emphasis
- Audience-appropriate register

---

## Style Priorities

| Priority | Why It Matters |
|---------|----------------|
| **Clarity** | Readers must follow your reasoning quickly |
| **Precision** | Specific wording avoids vague claims |
| **Control** | Syntax and transitions guide emphasis |
| **Consistency** | Stable voice builds credibility |
| **Energy** | Strategic variation keeps reader engaged |

### Weak vs Strong Sentence
- Weak: "There are many reasons this issue is important and people should think about it."
- Strong: "Because housing costs now outpace wages in most metro areas, local governments must expand zoning flexibility and rental assistance."

The strong version is concrete, specific, and actionable.
      \`
    },
    {
      id: 'elsw1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which sentence shows strongest AP writing style?',
            options: [
              '"This thing is kind of bad in lots of ways for many reasons."',
              '"Given rising flood risk and repeated infrastructure failures, the city should prioritize stormwater upgrades in vulnerable neighborhoods."',
              '"There are issues and stuff to discuss."',
              '"People have opinions about this topic."'
            ],
            correctAnswer: 1,
            explanation: 'This sentence is specific, precise, and policy-oriented. It identifies conditions (flood risk, failures) and proposes action (prioritize upgrades), demonstrating rhetorical control and clarity.'
          },
          {
            question: 'What is the best reason to vary sentence length in an AP essay?',
            options: [
              'To appear sophisticated without changing meaning',
              'To control pacing, emphasis, and reader attention',
              'To avoid all short sentences',
              'Because AP forbids simple sentences'
            ],
            correctAnswer: 1,
            explanation: 'Sentence variation is a rhetorical tool. Longer sentences can develop nuance; shorter ones can emphasize key judgments. Variation should serve meaning, not decoration.'
          }
        ]
      }
    },
    {
      id: 'elsw1-content',
      type: 'text' as const,
      content: \`
## Style Moves You Can Use Immediately

### Precision Upgrades
| Weak Word | Stronger Alternative |
|----------|----------------------|
| thing | policy, practice, institution, pattern |
| good/bad | equitable, effective, harmful, unsustainable |
| a lot | substantially, markedly, consistently |
| people | voters, students, workers, residents |

### Syntax Moves
- Use periodic sentences for nuanced setup
- Use short declaratives for key claims
- Use parallelism for triadic emphasis
- Use concession clauses ("While..., ...") for sophistication

### Rhythm Pattern Example
"While short-term costs are unavoidable, long-term savings are measurable, equitable, and durable."

- Concession clause adds nuance
- Parallel adjective triad adds emphasis and cadence

## Editing Pass for Style
1. Replace vague nouns/verbs
2. Tighten wordy phrases
3. Check tone consistency
4. Vary sentence openings
5. Ensure transitions reflect logic

### High-Value Revision
Weak: "This shows that the issue matters a lot to everyone in society."
Strong: "This pattern matters because it concentrates financial risk in communities already facing wage stagnation and housing scarcity."
      \`
    },
    {
      id: 'elsw1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) AP style emphasizes precision, clarity, and rhetorical _______.

2) Replacing vague words like "thing" with specific nouns improves _______.

3) A "While..., ..." structure often introduces _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['control', 'precision', 'concession'],
        hint1: 'Writers control tone and emphasis intentionally.',
        hint2: 'Specific wording quality.',
        hint3: 'You acknowledge complexity before claim.',
        explanation: 'Strong style reflects control. Specific vocabulary improves precision. "While" often signals concession.'
      }
    },
    {
      id: 'elsw1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Select the Stronger Style Choice** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Best replacement for "people are affected" in a transit essay:',
            options: ['Low-income commuters face longer travel times and reduced job access', 'Stuff happens to everyone', 'People have feelings', 'Things are different now']
          },
          {
            label: 'A short sentence after two long sentences typically creates ___',
            options: ['Emphasis and punch', 'Confusion only', 'Less clarity always', 'No effect']
          },
          {
            label: 'For AP argument writing, style should be ___',
            options: ['Purposeful and audience-aware', 'Decorative and vague', 'Overly complex at all times', 'Emotionally flat']
          }
        ],
        correctAnswers: ['Low-income commuters face longer travel times and reduced job access', 'Emphasis and punch', 'Purposeful and audience-aware'],
        hint1: 'Specific stakeholders and impacts.',
        hint2: 'Length contrast highlights key point.',
        hint3: 'Style serves persuasion, not ornament.',
        explanation: 'Specific stakeholders improve precision. Short-after-long adds emphasis. Effective AP style is purposeful and audience-aware.'
      }
    },
    {
      id: 'elsw1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Style in Writing

- Prefer precise verbs/nouns over vague filler language
- Keep diction aligned with your audience and argument
- Use sentence-length variation for emphasis and pacing
- Revise for concision: cut repetitive phrasing
- Maintain a controlled voice; avoid abrupt register shifts
- In timed writing, revise one paragraph deeply rather than skimming all
      \`
    },
    {
      id: 'elsw1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A draft says: "There are many ways this is bad and people should fix it." Which revision best improves style and argument quality?',
            options: [
              '"This is bad."',
              '"Because repeated lead-pipe failures contaminate drinking water, the city should prioritize replacement in high-risk neighborhoods within a two-year timeline."',
              '"People should think about this issue seriously."',
              '"The issue has many sides and complexities and things."'
            ],
            correctAnswer: 1,
            explanation: 'This revision is specific, causal, and actionable. It names the mechanism (lead-pipe failures), consequence (contamination), and policy action (timeline-based replacement).'
          },
          {
            question: 'Why does a controlled, precise style improve AP scores?',
            options: [
              'It replaces the need for evidence',
              'It helps readers follow reasoning and signals rhetorical competence',
              'It guarantees sophistication automatically',
              'It allows grammatical errors'
            ],
            correctAnswer: 1,
            explanation: 'Precise style clarifies claims and analysis. AP readers reward prose that communicates reasoning effectively and demonstrates intentional rhetorical choices.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 5. Writing for Audience ───
write('englang-writing-for-audience-part1.ts', `export const englangWritingForAudiencePart1Data = {
  topicSlug: 'englang-writing-for-audience',
  sections: [
    {
      id: 'elwa1-intro',
      type: 'text' as const,
      content: \`
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
      \`
    },
    {
      id: 'elwa1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What is the primary goal of audience adaptation?',
            options: [
              'To impress readers with complex vocabulary',
              'To align rhetorical choices with audience values and expectations',
              'To avoid taking a clear stance',
              'To use the same examples in every context'
            ],
            correctAnswer: 1,
            explanation: 'Audience adaptation means selecting tone, evidence, and framing that resonate with the intended audience while maintaining argumentative integrity.'
          },
          {
            question: 'When writing for a skeptical audience, which move is most effective?',
            options: [
              'Dismiss opposing concerns as irrational',
              'Acknowledge concerns and address them with evidence',
              'Use only emotional anecdotes',
              'Avoid counterarguments entirely'
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
      content: \`
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
      \`
    },
    {
      id: 'elwa1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Matching evidence and tone to a reader group is audience _______.

2) For skeptical readers, acknowledging concerns first is called a _______.

3) Adapting to audience should not require changing your core _______.
      \`,
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
      content: \`
**Pick the Better Audience Move** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Writing for a general audience, the best diction choice is ___',
            options: ['Clear and accessible with defined terms', 'Dense specialized jargon', 'Legalistic phrasing only', 'Highly abstract language']
          },
          {
            label: 'For policymakers, strongest support usually includes ___',
            options: ['Cost-benefit and implementation evidence', 'Only personal anecdotes', 'Only emotional language', 'No data, only slogans']
          },
          {
            label: 'Ethical audience adaptation requires ___',
            options: ['Fair representation of opposing views', 'Distorting evidence to persuade', 'Ignoring counterarguments', 'Using fear regardless of accuracy']
          }
        ],
        correctAnswers: ['Clear and accessible with defined terms', 'Cost-benefit and implementation evidence', 'Fair representation of opposing views'],
        hint1: 'Accessibility matters for broad readers.',
        hint2: 'Policy audiences care about feasibility.',
        hint3: 'Persuasion should remain honest.',
        explanation: 'General readers need clarity. Policymakers need feasibility evidence. Ethical adaptation requires fairness and accuracy.'
      }
    },
    {
      id: 'elwa1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Writing for Audience

- Identify target audience in first planning minute
- Match evidence type to what that audience trusts
- Use concession/rebuttal for skeptical readers
- Avoid jargon unless writing to expert audiences
- Keep tone strategic: respectful in controversy, urgent in crisis
- Show sophistication by balancing persuasion with fairness
      \`
    },
    {
      id: 'elwa1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A student argues for renewable energy to a city council by citing local outage costs, grid resilience data, and phased budget options. Why is this effective?',
            options: [
              'It avoids evidence and relies on style only',
              'It tailors support to council priorities: cost, reliability, and feasibility',
              'It uses emotional language exclusively',
              'It changes the claim for each paragraph'
            ],
            correctAnswer: 1,
            explanation: 'City councils prioritize practical governance concerns. Local costs, resilience, and budget phasing align evidence with audience decision criteria, making persuasion stronger.'
          },
          {
            question: 'Which opening best addresses a skeptical audience?',
            options: [
              '"Anyone who disagrees is clearly uninformed."',
              '"Although concerns about implementation costs are valid, current pilot programs show that phased adoption can reduce expenses over time."',
              '"This topic is simple and has one obvious answer."',
              '"I feel strongly about this issue."'
            ],
            correctAnswer: 1,
            explanation: 'This opening concedes a legitimate concern and responds with evidence-based reasoning. That balanced approach builds credibility and lowers resistance in skeptical readers.'
          }
        ]
      }
    }
  ]
};
`);

console.log('Done with English Language batch 3 (5 files)');
