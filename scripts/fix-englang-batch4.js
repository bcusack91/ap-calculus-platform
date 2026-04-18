const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons');

function write(name, content) {
  fs.writeFileSync(path.join(dir, name), content);
  console.log('Wrote:', name);
}

// ─── 1. Synthesis ───
write('englang-synthesis-part1.ts', `export const englangSynthesisPart1Data = {
  topicSlug: 'englang-synthesis',
  sections: [
    {
      id: 'elsyn1-intro',
      type: 'text' as const,
      content: \`
# 🧷 Synthesis Writing

**Part 1 of 7 — Combining Multiple Sources into One Coherent Argument**

---

## What Is Synthesis?

In AP Lang, **synthesis** means building your own argument by integrating information from multiple provided sources.

You are not summarizing each source separately. You are:
1. Taking a defensible position
2. Selecting relevant source evidence
3. Combining sources to support your line of reasoning
4. Explaining your own analysis between source references

> 🔑 Sources are tools, not substitutes for your thinking.

---

## Synthesis vs Summary

| Summary | Synthesis |
|--------|-----------|
| Reports what each source says | Combines source ideas to advance YOUR claim |
| Source-by-source organization | Claim-driven organization |
| Minimal analysis | Sustained commentary and reasoning |
| "Source A says... Source B says..." | "Given A and C, we can infer..." |

## Core Source Moves

| Move | Example |
|------|---------|
| **Corroborate** | Source B confirms Source A trend |
| **Qualify** | Source D introduces a condition/exception |
| **Complicate** | Source F challenges a simplistic conclusion |
| **Concede** | Acknowledge valid concerns from opposing source |
| **Synthesize** | Combine two sources to make a stronger inference |
      \`
    },
    {
      id: 'elsyn1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What is the biggest difference between summary and synthesis on AP Lang?',
            options: [
              'Summary uses quotations while synthesis does not',
              'Synthesis organizes around your claim and combines source ideas to support reasoning',
              'Summary is always longer than synthesis',
              'Synthesis ignores sources'
            ],
            correctAnswer: 1,
            explanation: 'Synthesis is claim-driven. You use sources as evidence within your own argument structure, rather than reporting each source in isolation.'
          },
          {
            question: 'Which sentence demonstrates true synthesis?',
            options: [
              '"Source A is about schools. Source B is about money."',
              '"Source A says homework helps. Source B says homework hurts."',
              '"While Source A shows gains from structured homework, Source B indicates diminishing returns after 90 minutes, suggesting schools should cap nightly assignments."',
              '"I agree with Source C because it sounds right."'
            ],
            correctAnswer: 2,
            explanation: 'This sentence combines two sources, identifies relationship (qualification), and draws a policy inference. That is synthesis, not summary.'
          }
        ]
      }
    },
    {
      id: 'elsyn1-content',
      type: 'text' as const,
      content: \`
## Building a Synthesis Essay

### Step-by-Step Plan
1. Read prompt and define the task precisely
2. Skim sources, marking each source's position and evidence type
3. Group sources by idea (not by source letter)
4. Draft thesis with qualification
5. Build body paragraphs around reasons, integrating 2+ sources per body when possible

### Source Integration Techniques

| Technique | Sentence Pattern |
|----------|------------------|
| Attribute briefly | "As Source C notes,..." |
| Compare sources | "Unlike Source E, Source B suggests..." |
| Pair with commentary | "Source A's data indicates X, which supports..." |
| Use as concession | "Although Source D raises valid concerns..." |

### Common Synthesis Mistakes
- Source parade (one paragraph per source)
- Over-quoting with little analysis
- Misreading source claim
- Using sources without connecting to thesis
- Failing to address counterarguments from sources

## Minimum Source Requirement
AP synthesis requires use of at least **three** sources. Strong essays integrate more where relevant and accurate.

> Better to analyze 3-4 sources deeply than to mention 6 sources superficially.
      \`
    },
    {
      id: 'elsyn1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) In synthesis, essays should be organized by _______ rather than by source letter.

2) Combining two sources to draw a stronger inference is to _______ sources.

3) AP synthesis requires at least _______ sources.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['claim', 'synthesize', 'three'],
        hint1: 'Your line of reasoning drives structure.',
        hint2: 'Blend source insights into one argument move.',
        hint3: 'Minimum number required by task.',
        explanation: 'Synthesis is claim-driven. You synthesize sources. AP requires at least three sources.'
      }
    },
    {
      id: 'elsyn1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Choose the Stronger Source Move** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Best paragraph strategy in synthesis essay:',
            options: ['Reason-based paragraphs integrating multiple sources', 'One paragraph per source in source-letter order', 'Only summary of each source', 'No source attribution']
          },
          {
            label: '"Source B supports Source A claim about costs, but Source F qualifies this by showing long-term savings." This is ___',
            options: ['Corroboration plus qualification', 'Narrative sequencing', 'Pure summary', 'Ad hominem']
          },
          {
            label: 'After citing a source, strongest next step is ___',
            options: ['Commentary explaining how evidence advances your thesis', 'Another quote immediately', 'A new unrelated claim', 'End the paragraph']
          }
        ],
        correctAnswers: ['Reason-based paragraphs integrating multiple sources', 'Corroboration plus qualification', 'Commentary explaining how evidence advances your thesis'],
        hint1: 'Organize by your reasoning, not by source list.',
        hint2: 'One source supports, one adds condition.',
        hint3: 'Analysis is where AP points are earned.',
        explanation: 'Strong synthesis integrates sources around claims, uses relationships among sources, and provides commentary after citation.'
      }
    },
    {
      id: 'elsyn1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Synthesis

- Build thesis first, then select sources that serve it
- Group sources by idea clusters before drafting
- Use source attribution efficiently; do not over-quote
- Include at least one source-based concession/rebuttal move
- Keep paragraphs claim-centered, not source-centered
- Always explain source significance with commentary
      \`
    },
    {
      id: 'elsyn1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A student uses five sources but spends most of essay summarizing each one. Why is this likely low-scoring?',
            options: [
              'Using five sources is too many',
              'Synthesis requires claim-driven integration and analysis, not source-by-source summary',
              'AP prefers only one source',
              'Summary is always penalized automatically'
            ],
            correctAnswer: 1,
            explanation: 'Source quantity does not guarantee quality. AP scoring prioritizes coherent argument and effective source integration with commentary.'
          },
          {
            question: 'Which thesis best fits synthesis expectations?',
            options: [
              '"This topic has many opinions."',
              '"Given evidence of short-term costs (Sources A, C) and long-term gains (Sources D, F), districts should adopt phased transit reform with equity safeguards."',
              '"Source B is interesting."',
              '"I will summarize all sources."'
            ],
            correctAnswer: 1,
            explanation: 'This thesis is specific, qualified, and source-aware. It signals an argumentative path that synthesizes evidence with nuance.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 2. Synthesis Essay ───
write('englang-synthesis-essay-part1.ts', `export const englangSynthesisEssayPart1Data = {
  topicSlug: 'englang-synthesis-essay',
  sections: [
    {
      id: 'else1-intro',
      type: 'text' as const,
      content: \`
# 📝 The Synthesis Essay

**Part 1 of 7 — Executing a High-Scoring AP Synthesis Response Under Time Pressure**

---

## Time-Smart Synthesis Workflow

Recommended 40-minute plan:

| Minutes | Task |
|--------|------|
| 0-5 | Read prompt, define task, annotate source positions |
| 5-10 | Group sources, draft thesis + paragraph plan |
| 10-33 | Write intro + body paragraphs + concession/rebuttal |
| 33-40 | Write conclusion, revise for clarity, source accuracy |

---

## What the Rubric Rewards

| Rubric Category | High-Scoring Features |
|-----------------|-----------------------|
| **Thesis** | Defensible, specific, responsive to prompt |
| **Evidence/Commentary** | Accurate source use, strong integration, clear analysis |
| **Sophistication** | Nuance, qualification, complexity, strategic style |

### Core Body Paragraph Template
1. Topic claim
2. Source evidence (A)
3. Commentary
4. Source evidence (B or contrast source)
5. Commentary + synthesis move
6. Link to thesis

> 🔑 You are not writing about sources. You are writing an argument with sources.
      \`
    },
    {
      id: 'else1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What is the best use of source material in a synthesis essay?',
            options: [
              'Quote full paragraphs to prove you read carefully',
              'Use concise source references and prioritize your commentary',
              'Mention all sources once without analysis',
              'Avoid attribution to save time'
            ],
            correctAnswer: 1,
            explanation: 'High-scoring essays use sources efficiently and devote most space to analysis. Long quotations reduce room for reasoning and often weaken control.'
          },
          {
            question: 'What is the biggest advantage of grouping sources before writing?',
            options: [
              'It helps memorize source letters only',
              'It enables claim-centered organization and smoother synthesis',
              'It guarantees sophistication automatically',
              'It eliminates need for thesis'
            ],
            correctAnswer: 1,
            explanation: 'Grouping by idea lets you integrate sources around argumentative reasons, avoiding source-by-source summary and producing stronger structure.'
          }
        ]
      }
    },
    {
      id: 'else1-content',
      type: 'text' as const,
      content: \`
## Intro and Conclusion Strategy

### Intro Goals
- Establish issue quickly
- Signal complexity (if appropriate)
- State defensible thesis

### Conclusion Goals
- Synthesize key reasoning (not repeat intro verbatim)
- Reassert stakes and implications
- End with controlled rhetorical force

## Source Attribution Options

| Style | Example |
|------|---------|
| Parenthetical | "Public trust declines when transparency drops" (Source C). |
| Integrated | "As Source E's survey indicates, trust rises when..." |
| Comparative | "Unlike Source B, Source F emphasizes..." |

## Common Pitfalls on Timed Synthesis
- Mislabeling or misreading a source
- Claim drift (thesis changes mid-essay)
- Source mentions without commentary
- Ignoring strongest opposing source
- Conclusion that adds unrelated new claim

### Rapid Revision Checklist
1. Thesis still clear and defensible?
2. At least three sources used accurately?
3. Each source followed by commentary?
4. Counterargument addressed?
5. Paragraph transitions logical?
      \`
    },
    {
      id: 'else1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) In a timed synthesis essay, sources should be grouped by _______ rather than summarized one-by-one.

2) After source evidence, the highest-value next move is analytical _______.

3) A strong conclusion should restate stakes and _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['idea', 'commentary', 'implications'],
        hint1: 'Group by argument reason/theme.',
        hint2: 'Your explanation of meaning.',
        hint3: 'Why your argument matters going forward.',
        explanation: 'Group by ideas, not source order. Commentary earns points. Conclusions should project implications.'
      }
    },
    {
      id: 'else1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Select the Higher-Scoring Choice** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Best paragraph sequence in synthesis:',
            options: ['Claim -> Source evidence -> Commentary -> Additional source relation -> Commentary', 'Source A summary -> Source B summary -> Source C summary', 'Quotes only', 'Personal anecdote only']
          },
          {
            label: '"Unlike Source D, Source B suggests..." is a move that ___',
            options: ['Compares sources to deepen analysis', 'Avoids using sources', 'Summarizes without purpose', 'Introduces plagiarism']
          },
          {
            label: 'Most effective revision in final 5 minutes is ___',
            options: ['Fix thesis clarity and ensure commentary follows each source', 'Add extra long quotes', 'Rewrite entire intro from scratch', 'Change topic completely']
          }
        ],
        correctAnswers: ['Claim -> Source evidence -> Commentary -> Additional source relation -> Commentary', 'Compares sources to deepen analysis', 'Fix thesis clarity and ensure commentary follows each source'],
        hint1: 'Reasoning should lead, sources should support.',
        hint2: 'Comparison is core synthesis behavior.',
        hint3: 'Thesis + commentary quality drives score.',
        explanation: 'High-scoring paragraphs are claim-centered with layered source analysis. Source comparison strengthens synthesis. Final revision should prioritize thesis and commentary quality.'
      }
    },
    {
      id: 'else1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Synthesis Essay Execution

- Spend up to 10 minutes planning source clusters and thesis
- Use short source references; reserve space for analysis
- Integrate at least one source relationship move (corroborate/qualify/contrast)
- Address a meaningful counter-source argument
- Keep argument line consistent from intro to conclusion
- In final minutes, fix clarity and source-commentary balance
      \`
    },
    {
      id: 'else1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A student has 8 minutes left and has a full draft with weak commentary. Best use of remaining time?',
            options: [
              'Add two more quotes from unused sources',
              'Strengthen analysis after existing source references and sharpen thesis wording',
              'Rewrite essay completely',
              'Delete all source citations'
            ],
            correctAnswer: 1,
            explanation: 'At this stage, improving commentary and thesis clarity yields the biggest rubric gain. More quotes without analysis rarely helps.'
          },
          {
            question: 'Which sentence best demonstrates synthesis sophistication?',
            options: [
              '"Source A says one thing and Source B says another."',
              '"Sources A and C support immediate reform, but Source F caution about implementation suggests a phased model that preserves urgency while reducing disruption."',
              '"Many sources are interesting."',
              '"I used four sources."'
            ],
            correctAnswer: 1,
            explanation: 'This response integrates multiple sources, acknowledges tension, and resolves it through a qualified policy inference. That is sophisticated synthesis reasoning.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 3. Logical Fallacies ───
write('englang-logical-fallacies-part1.ts', `export const englangLogicalFallaciesPart1Data = {
  topicSlug: 'englang-logical-fallacies',
  sections: [
    {
      id: 'ellf1-intro',
      type: 'text' as const,
      content: \`
# ⚠️ Logical Fallacies

**Part 1 of 7 — Identifying Flawed Reasoning in Arguments**

---

## What Is a Logical Fallacy?

A **logical fallacy** is an error in reasoning that weakens an argument, even if the claim itself might be true.

Fallacy detection is crucial for AP reading and writing:
- In reading: evaluate argument quality
- In writing: avoid weak reasoning in your own essays

---

## Common AP Fallacies

| Fallacy | Definition | Example |
|--------|------------|---------|
| **Ad hominem** | Attacks person instead of argument | "Do not trust her climate plan; she is not even from this town." |
| **Straw man** | Misrepresents opponent's view to make it easier to attack | "My opponent wants bike lanes, so he wants to ban cars entirely." |
| **False dilemma** | Presents only two options when more exist | "Either cut all taxes or destroy the economy." |
| **Hasty generalization** | Draws broad conclusion from too little evidence | "Two students cheated, so the school has no integrity." |
| **Slippery slope** | Claims one step inevitably leads to extreme outcome | "If we allow late work, soon no deadlines will exist." |
| **Post hoc** | Assumes sequence implies causation | "I wore lucky socks and we won, so socks caused victory." |
| **Circular reasoning** | Claim is "proven" by restating itself | "The law is fair because it is just." |
| **Appeal to popularity** | Claims true/good because many people believe it | "Millions use it, so it must be safe." |

> 🔑 Identifying a fallacy does not automatically disprove the entire claim, but it DOES expose weakness in the argument's logic.
      \`
    },
    {
      id: 'ellf1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: '"Either we ban phones in schools or students will never learn anything." Which fallacy is this?',
            options: [
              'Ad hominem',
              'False dilemma',
              'Post hoc',
              'Circular reasoning'
            ],
            correctAnswer: 1,
            explanation: 'This statement presents only two extreme options and ignores possible middle-ground solutions (limited use policies, structured classroom rules, etc.). That is a false dilemma.'
          },
          {
            question: '"My opponent's education policy is wrong because he failed algebra in high school." This is:',
            options: [
              'Straw man',
              'Ad hominem',
              'Appeal to popularity',
              'Hasty generalization'
            ],
            correctAnswer: 1,
            explanation: 'The statement attacks the person-s character/history instead of addressing the policy argument itself. That is ad hominem reasoning.'
          }
        ]
      }
    },
    {
      id: 'ellf1-content',
      type: 'text' as const,
      content: \`
## Fallacies in AP Passages

### Why Writers Use Fallacies
- Emotional impact may distract from weak evidence
- Simplified framing can persuade quickly
- Audience bias may reward familiar but faulty logic

### How to Analyze Fallacies Effectively

| Weak Analysis | Strong Analysis |
|--------------|-----------------|
| "The author uses a fallacy." | "By framing the issue as only two options, the writer creates a false dilemma that ignores viable compromises, weakening logical credibility." |
| "This is bad logic." | "The ad hominem attack shifts focus from policy evidence to personal insult, which may energize supporters but undermines rational persuasion." |

### Distinguish Rhetorical Force from Logical Validity
A passage may be rhetorically powerful and logically flawed at the same time.

Example:
- Powerful emotional appeal to protect children
- But uses hasty generalization from one isolated incident

Your job: evaluate both rhetorical effectiveness and reasoning quality.

## Avoiding Fallacies in Your Writing
1. Represent opposing views accurately
2. Avoid absolute binaries unless truly exhaustive
3. Differentiate correlation from causation
4. Use representative evidence
5. Critique ideas, not people
      \`
    },
    {
      id: 'ellf1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Attacking a person instead of addressing their argument is _______ hominem.

2) Assuming that because one event follows another, the first caused the second is a _______ hoc fallacy.

3) Presenting only two extreme options when others exist is a false _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['ad', 'post', 'dilemma'],
        hint1: 'Latin phrase starts with "ad."',
        hint2: 'Latin phrase starts with "post."',
        hint3: 'Two choices only, falsely.',
        explanation: 'Ad hominem attacks person. Post hoc confuses sequence with causation. False dilemma reduces options to extremes.'
      }
    },
    {
      id: 'ellf1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Identify the Fallacy** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: '"If we allow one extension, deadlines will disappear forever."',
            options: ['Slippery slope', 'Circular reasoning', 'Appeal to popularity', 'Ad hominem']
          },
          {
            label: '"Three athletes from that city were rude; everyone there is rude."',
            options: ['Hasty generalization', 'False dilemma', 'Post hoc', 'Straw man']
          },
          {
            label: '"You want to regulate social media ads, so you want to censor all speech."',
            options: ['Straw man', 'Ad hominem', 'Appeal to authority', 'Circular reasoning']
          }
        ],
        correctAnswers: ['Slippery slope', 'Hasty generalization', 'Straw man'],
        hint1: 'Predicts extreme chain reaction.',
        hint2: 'Too few examples for broad claim.',
        hint3: 'Distorts opponent position.',
        explanation: 'Extreme inevitability = slippery slope. Few examples to broad claim = hasty generalization. Misrepresentation = straw man.'
      }
    },
    {
      id: 'ellf1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Logical Fallacies

- Name the fallacy and explain the specific reasoning flaw
- Connect flaw to argumentative consequence (credibility, logic, fairness)
- Do not over-label: ensure the fallacy truly fits
- In essays, avoid fallacies in your own reasoning chain
- Differentiate rhetorical intensity from logical validity
- Fallacy-aware analysis can raise sophistication in rhetorical commentary
      \`
    },
    {
      id: 'ellf1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A speech claims: "Crime rose after bike lanes were installed, so bike lanes cause crime." Which evaluation is strongest?',
            options: [
              'Valid causal claim due to chronological order',
              'Post hoc fallacy: temporal sequence alone does not establish causation',
              'Ad hominem fallacy',
              'Appeal to popularity'
            ],
            correctAnswer: 1,
            explanation: 'The argument assumes causation from sequence only. Many confounding variables could explain crime changes. Without controlled evidence, causal inference is invalid.'
          },
          {
            question: 'Which revision best fixes a false dilemma?',
            options: [
              'Make language more emotional',
              'Acknowledge multiple alternatives and evaluate tradeoffs',
              'Add a personal insult',
              'Repeat the binary more strongly'
            ],
            correctAnswer: 1,
            explanation: 'False dilemmas collapse complexity into two options. Fixing them requires presenting plausible additional options and reasoning through comparative merits.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 4. Developing Arguments ───
write('englang-developing-arguments-part1.ts', `export const englangDevelopingArgumentsPart1Data = {
  topicSlug: 'englang-developing-arguments',
  sections: [
    {
      id: 'elda1-intro',
      type: 'text' as const,
      content: \`
# 🧠 Developing Arguments

**Part 1 of 7 — Moving from Initial Claim to Sophisticated Reasoning**

---

## From Opinion to Argument

An opinion says what you think.
An argument demonstrates WHY your claim should persuade others.

### Argument Development Ladder

| Stage | Description |
|------|-------------|
| **Assertion** | Initial claim stated |
| **Support** | Evidence introduced |
| **Analysis** | Evidence interpreted |
| **Qualification** | Limits/conditions acknowledged |
| **Synthesis** | Counterviews integrated into stronger final position |

> 🔑 High AP scores come from development across stages, not from assertion alone.

---

## Building a Reasoned Position

### Start with a Defensible Thesis
Weak: "Standardized testing is bad."
Strong: "While standardized tests can provide broad benchmarking data, over-reliance on test scores distorts curriculum and should be balanced with performance-based assessment."

### Expand with Reasons
Use 2-3 core reasons:
1. Educational quality effects
2. Equity implications
3. Policy feasibility

### Support with Layered Evidence
- Statistics for scope
- Examples for concreteness
- Counterexample for qualification
- Policy comparison for practicality
      \`
    },
    {
      id: 'elda1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What most distinguishes a developed argument from a simple opinion?',
            options: [
              'Longer sentences',
              'Evidence, analysis, and qualification that build a coherent line of reasoning',
              'Stronger emotional language only',
              'More rhetorical questions'
            ],
            correctAnswer: 1,
            explanation: 'Argument development requires support and reasoning progression: claim -> evidence -> analysis -> qualification. Opinion alone lacks this structure.'
          },
          {
            question: 'Why does qualification improve argument quality?',
            options: [
              'It makes the thesis weaker by avoiding commitment',
              'It acknowledges complexity and prevents overstatement',
              'It removes need for evidence',
              'It shifts focus away from audience'
            ],
            correctAnswer: 1,
            explanation: 'Qualification demonstrates intellectual honesty and nuance. It strengthens credibility by showing awareness of limits and exceptions rather than making absolute claims.'
          }
        ]
      }
    },
    {
      id: 'elda1-content',
      type: 'text' as const,
      content: \`
## Development Moves That Raise Scores

### 1. Deepen, Do Not Just Add
Instead of adding many points, deepen fewer points with stronger analysis.

### 2. Use Counterargument Strategically
| Move | Purpose |
|------|---------|
| Concession | Shows fairness |
| Rebuttal | Protects thesis |
| Qualification | Refines claim |

### 3. Connect Paragraphs Logically
End each paragraph by forecasting the next reasoning step.

Example transition:
"If curricular narrowing is one cost of test overuse, equity disparities reveal an even deeper systemic consequence."

### 4. Project Implications
Ask: If my argument is accepted, what follows?
- Policy implications
- Ethical implications
- Social consequences

## Common Development Problems
- Repeating thesis in different words
- Evidence without interpretation
- Counterargument as token mention
- No progression in reasoning
- Ending without implications
      \`
    },
    {
      id: 'elda1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Moving from claim to evidence to interpretation builds a line of _______.

2) A nuanced argument often avoids absolute language by using _______.

3) A concession should usually be followed by a _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['reasoning', 'qualification', 'rebuttal'],
        hint1: 'Logical chain in argument.',
        hint2: 'Adds conditions/limits.',
        hint3: 'Response that defends your position.',
        explanation: 'Claim-evidence-analysis forms line of reasoning. Qualification adds nuance. Concession is strongest with rebuttal.'
      }
    },
    {
      id: 'elda1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Choose the Stronger Development Move** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Best revision for "Testing is bad" thesis:',
            options: ['Qualified claim balancing benefits and harms with policy direction', 'Add exclamation marks', 'Repeat "bad" three times', 'Remove thesis entirely']
          },
          {
            label: 'If paragraph includes data but no explanation, the missing element is ___',
            options: ['Commentary/analysis', 'Topic sentence', 'Grammar only', 'Audience']
          },
          {
            label: 'A conclusion that projects policy and ethical consequences shows ___',
            options: ['Argument development depth', 'Plot summary', 'Source paraphrase', 'Narrative exposition']
          }
        ],
        correctAnswers: ['Qualified claim balancing benefits and harms with policy direction', 'Commentary/analysis', 'Argument development depth'],
        hint1: 'Nuance + direction > blunt assertion.',
        hint2: 'Interpret what the data means.',
        hint3: 'Implications extend reasoning beyond recap.',
        explanation: 'Qualified thesis is stronger. Data needs commentary. Implications signal deeper argument development.'
      }
    },
    {
      id: 'elda1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Developing Arguments

- Focus on depth: 2-3 well-developed reasons are enough
- After each evidence point, add explicit interpretation
- Qualify claims to show complexity and control
- Use concession/rebuttal to strengthen credibility
- Build transitions that show progression, not repetition
- End with implications to demonstrate mature reasoning
      \`
    },
    {
      id: 'elda1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A student essay has clear thesis and examples but little analysis. Which revision most improves argument development?',
            options: [
              'Add more examples without explanation',
              'Insert commentary that explains how each example supports the thesis and acknowledges limitations',
              'Use more emotional language',
              'Cut the thesis'
            ],
            correctAnswer: 1,
            explanation: 'The missing piece is analysis. Commentary and qualification turn examples into reasoning, which is essential for high-scoring development.'
          },
          {
            question: 'Which thesis is most development-ready?',
            options: [
              '"Technology is bad."',
              '"Although automation increases productivity in some sectors, labor policy must pair innovation with retraining protections to prevent concentrated worker displacement."',
              '"Technology changes society."',
              '"People disagree about automation."'
            ],
            correctAnswer: 1,
            explanation: 'This thesis is specific, qualified, and policy-oriented. It contains built-in complexity, making it easier to develop with layered reasons and counterarguments.'
          }
        ]
      }
    }
  ]
};
`);

console.log('Done with English Language batch 4 (4 files)');
