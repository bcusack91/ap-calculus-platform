const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons');

function write(name, content) {
  fs.writeFileSync(path.join(dir, name), content);
  console.log('Wrote:', name);
}

// ─── 1. Claims & Evidence (Reading) ───
write('englang-claims-evidence-reading-part1.ts', `export const englangClaimsEvidenceReadingPart1Data = {
  topicSlug: 'englang-claims-evidence-reading',
  sections: [
    {
      id: 'elcer1-intro',
      type: 'text' as const,
      content: \`
# 📖 Claims and Evidence in Reading

**Part 1 of 7 — Identifying What an Author Argues and How They Support It**

---

## Reading Arguments Like a Rhetorician

When you read a nonfiction passage on AP Lang, do not just ask, "What is this about?"
Ask:
- What is the author claiming?
- What evidence supports that claim?
- Is the evidence credible and sufficient?
- How effectively is the claim developed?

---

## Types of Claims You Will Encounter

| Claim Type | What It Does | Signal Words |
|-----------|--------------|--------------|
| **Factual claim** | Asserts what is true | "is," "are," "did" |
| **Value claim** | Judges what is good/bad, right/wrong | "better," "ethical," "unjust" |
| **Policy claim** | Recommends action | "should," "must," "ought" |
| **Causal claim** | Links cause and effect | "because," "leads to," "results in" |

### Example Passage Snippet
"Schools should start no earlier than 8:30 AM because adolescent sleep cycles shift later during puberty, and districts that adopted later start times saw attendance and test scores rise."

- Main claim: Schools should start later (policy claim)
- Supporting reason: Teen sleep cycles shift (causal claim)
- Evidence: District outcomes improved (data-based support)

> 🔑 On AP multiple-choice, wrong answers often confuse **topic** with **claim**. Topic = broad subject. Claim = specific arguable assertion.
      \`
    },
    {
      id: 'elcer1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which statement is a policy claim?',
            options: [
              'Teenagers often get less sleep than adults.',
              'Schools that start later report fewer tardies.',
              'School start times should be moved to 8:30 AM or later.',
              'Later start times are more common in urban districts.'
            ],
            correctAnswer: 2,
            explanation: 'Policy claims advocate action and are usually signaled by words like "should" or "must." "Schools should be moved..." explicitly proposes a change, making it a policy claim.'
          },
          {
            question: 'In rhetorical reading, what is the difference between topic and claim?',
            options: [
              'They mean the same thing.',
              'Topic is broad subject; claim is specific arguable assertion about that subject.',
              'Topic is always emotional; claim is always factual.',
              'Claim is broad; topic is narrow.'
            ],
            correctAnswer: 1,
            explanation: 'Topic names what the text is about (e.g., education policy). Claim states what the author argues about that topic (e.g., schools should start later). AP questions often test this distinction.'
          }
        ]
      }
    },
    {
      id: 'elcer1-content',
      type: 'text' as const,
      content: \`
## Evidence Types in Passages

| Evidence Type | Strength | What to Watch For |
|--------------|----------|-------------------|
| **Statistics/data** | Strong if sourced and contextualized | Sample size, source credibility, date |
| **Expert testimony** | Strong if expertise is relevant | Is the expert qualified in THIS field? |
| **Historical example** | Moderate-strong | Is the comparison truly analogous? |
| **Anecdote** | Vivid but limited | Does one story stand in for many cases? |
| **Hypothetical scenario** | Useful but speculative | Is it plausible and relevant? |

### Reading for Evidence Quality
Use these checks:
1. **Relevance**: Does this evidence directly support the claim?
2. **Sufficiency**: Is there enough evidence, or only one example?
3. **Credibility**: Is the source trustworthy?
4. **Representativeness**: Is this typical, or cherry-picked?

### Common Weaknesses in AP Passages
- Overgeneralizing from one anecdote
- Using outdated statistics without context
- Appealing to authority outside the expert's domain
- Presenting correlation as proof of causation

### Your Annotation Strategy
Mark passages like this:
- C = claim
- E = evidence
- Co = commentary (analysis connecting evidence to claim)
- CA = counterargument
- R = rebuttal

This gives you a map of the argument before answering questions.
      \`
    },
    {
      id: 'elcer1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) A claim that recommends action using words like "should" is a _______ claim.

2) Evidence must be both relevant and _______ to be persuasive.

3) In annotation shorthand, the letter pair used for counterargument is _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['policy', 'sufficient', 'CA'],
        hint1: 'It proposes policy/action.',
        hint2: 'Enough quantity and depth.',
        hint3: 'Counterargument initials.',
        explanation: 'Policy claims advocate action. Evidence must be sufficient. CA = counterargument.'
      }
    },
    {
      id: 'elcer1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Evaluate the Support** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: '"My uncle quit social media and felt happier, so social media harms everyone." The weakness is ___',
            options: ['Overgeneralization from anecdotal evidence', 'Lack of policy recommendation', 'Too many statistics', 'No emotional appeal']
          },
          {
            label: '"A 2025 longitudinal study of 15,000 students found..." This is strongest as ___',
            options: ['Data-based evidence with strong credibility potential', 'Anecdotal support only', 'Circular reasoning', 'Pathos only']
          },
          {
            label: '"Because two variables rise together, one causes the other." This likely commits ___',
            options: ['Correlation-causation error', 'Concession', 'Ethos appeal', 'Rogerian structure']
          }
        ],
        correctAnswers: ['Overgeneralization from anecdotal evidence', 'Data-based evidence with strong credibility potential', 'Correlation-causation error'],
        hint1: 'One uncle is not everyone.',
        hint2: 'Large longitudinal sample is strong data.',
        hint3: 'Association is not automatic causation.',
        explanation: 'Single anecdote overgeneralizes. Large long-term study is credible data. Correlation does not prove causation.'
      }
    },
    {
      id: 'elcer1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Claims & Evidence in Reading

- In MC passages, find the **main claim** first, then map each paragraph's support
- Distinguish **what the author says** from **how well it is supported**
- Watch for distractors that cite details not tied to the central claim
- Evaluate source credibility and whether evidence is representative
- If a question asks "the primary purpose of paragraph 4," think function: evidence, concession, rebuttal, transition, etc.
- Fast annotation with C/E/CA/R saves time and improves accuracy
      \`
    },
    {
      id: 'elcer1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'An author argues that urban parks reduce crime. She cites one neighborhood where crime fell after a park opened, but gives no broader data. Which evaluation is strongest?',
            options: [
              'The evidence is conclusive because the example is vivid.',
              'The evidence is suggestive but insufficient; one case cannot establish a general causal claim.',
              'The argument is invalid because anecdotes are never allowed.',
              'The claim is strong because it includes pathos.'
            ],
            correctAnswer: 1,
            explanation: 'A single case can illustrate a possibility but cannot prove a broad causal claim. Strong support would require wider data, controls, and repeated results across contexts.'
          },
          {
            question: 'A passage begins with a policy claim, then presents statistics, then acknowledges critics, then explains why the policy still stands. What is the best structural description?',
            options: [
              'Narrative only',
              'Claim → Evidence → Concession → Rebuttal',
              'Description → Definition → Anecdote',
              'Counterclaim → Refutation → No thesis'
            ],
            correctAnswer: 1,
            explanation: 'The sequence matches a standard argumentative progression: state claim, support it, acknowledge opposing views, and rebut them. Recognizing this structure helps answer rhetorical function questions.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 2. Reasoning and Organization (Reading) ───
write('englang-reasoning-org-reading-part1.ts', `export const englangReasoningOrgReadingPart1Data = {
  topicSlug: 'englang-reasoning-org-reading',
  sections: [
    {
      id: 'elror1-intro',
      type: 'text' as const,
      content: \`
# 🧠 Reasoning and Organization in Reading

**Part 1 of 7 — Following the Line of Reasoning in Complex Passages**

---

## What Is a Line of Reasoning?

A **line of reasoning** is the logical sequence by which a writer moves from claim to conclusion.

Think of it as an argument chain:
\\\`\\\`\\\`
Claim A -> Reason 1 -> Evidence -> Inference -> Reason 2 -> Counterargument -> Rebuttal -> Conclusion
\\\`\\\`\\\`

If any link is weak or missing, the argument becomes less persuasive.

---

## Common Organizational Patterns

| Pattern | How It Works | Signals |
|--------|--------------|---------|
| **General to specific** | Opens broad, narrows to example/case | "For instance," "Specifically" |
| **Specific to general** | Starts with case, derives broader claim | "Therefore," "Thus" |
| **Problem-solution** | Defines problem, proposes fix | "The issue is..." "To address this..." |
| **Cause-effect** | Explains causes and consequences | "Leads to," "results in" |
| **Compare-contrast** | Weighs alternatives | "Whereas," "however," "in contrast" |
| **Concession-rebuttal** | Acknowledges other side, then counters | "Although," "while," "nevertheless" |

> 🔑 AP reading questions often ask what a paragraph "primarily does." That is a function question about organization, not a content-summary question.
      \`
    },
    {
      id: 'elror1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A paragraph begins, "Although critics argue the policy is costly, long-term outcomes show clear savings." What is the paragraph doing?',
            options: [
              'Introducing unrelated background',
              'Conceding and rebutting a counterargument',
              'Providing narrative detail only',
              'Defining a technical term'
            ],
            correctAnswer: 1,
            explanation: '"Although critics argue..." signals concession, and "long-term outcomes show..." signals rebuttal. The paragraph acknowledges opposition and then counters it with evidence.'
          },
          {
            question: 'Which best describes line of reasoning?',
            options: [
              'The number of rhetorical devices in a passage',
              'The sequence of claims and support that logically advances an argument',
              'The emotional tone of the conclusion',
              'The biography of the author'
            ],
            correctAnswer: 1,
            explanation: 'Line of reasoning is the argument-s logic in motion: how each idea builds toward the conclusion. AP scoring rewards clear, coherent reasoning rather than isolated points.'
          }
        ]
      }
    },
    {
      id: 'elror1-content',
      type: 'text' as const,
      content: \`
## Tracking Reasoning at the Paragraph Level

Use this checklist as you read each paragraph:
1. What claim is made here?
2. What evidence appears?
3. How does this paragraph connect to the previous one?
4. What function does it serve in the whole argument?

### Paragraph Functions

| Function | Description |
|----------|-------------|
| **Set-up/context** | Introduces issue, stakes, or background |
| **Main claim** | States central thesis or sub-claim |
| **Evidence development** | Provides data, examples, or testimony |
| **Counterargument** | Presents opposing view fairly |
| **Rebuttal** | Refutes or qualifies the opposing view |
| **Synthesis/turn** | Integrates points or shifts direction |
| **Call to action** | Urges audience toward specific response |

### Cohesion and Logical Flow

Strong passages use:
- Repeated key terms for continuity
- Pronoun reference clarity
- Transitional phrases showing relationships
- Topic sentences that preview paragraph roles

Weak passages often:
- Jump between points without connection
- Offer evidence without interpretation
- Introduce counterarguments but never rebut them
      \`
    },
    {
      id: 'elror1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) The logical chain that moves an argument from claim to conclusion is called the line of _______.

2) A paragraph that acknowledges the opposing side is introducing a counter_______.

3) Words like "however" and "in contrast" often signal a _______-contrast structure.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['reasoning', 'argument', 'compare'],
        hint1: 'Claim -> evidence -> conclusion chain.',
        hint2: 'The other side of the issue.',
        hint3: 'Comparing similarities and differences.',
        explanation: 'Line of reasoning tracks logic. Counterargument introduces opposition. "However" often marks compare-contrast shifts.'
      }
    },
    {
      id: 'elror1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Identify the Structure** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'A passage opens with a broad statement about democracy, then analyzes one Supreme Court case. This is ___',
            options: ['General to specific organization', 'Specific to general organization', 'Cause-effect only', 'Narrative sequence']
          },
          {
            label: 'A writer presents three policy options and weighs pros/cons of each. This is primarily ___',
            options: ['Compare-contrast organization', 'Problem-solution only', 'Chronological narration', 'Definition process']
          },
          {
            label: 'The sentence "Therefore, stricter disclosure laws are necessary" functions as ___',
            options: ['Inference/conclusion from prior reasoning', 'Background context', 'Anecdotal evidence', 'Counterargument']
          }
        ],
        correctAnswers: ['General to specific organization', 'Compare-contrast organization', 'Inference/conclusion from prior reasoning'],
        hint1: 'Starts broad, then narrows to one case.',
        hint2: 'Multiple alternatives being weighed.',
        hint3: '"Therefore" marks logical conclusion.',
        explanation: 'Broad to case = general-specific. Weighing options = compare-contrast. "Therefore" indicates inference/conclusion.'
      }
    },
    {
      id: 'elror1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Reasoning & Organization (Reading)

- Before answering questions, outline paragraph functions quickly in margins
- For "purpose of paragraph" questions, think role in argument, not topic summary
- Track transitions: they reveal logical relationships
- Look for concession-rebuttal pairs; AP frequently tests these
- If a question asks how evidence supports claim, identify the inference connecting them
- Practice recognizing patterns (problem-solution, cause-effect, compare-contrast)
      \`
    },
    {
      id: 'elror1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'In a passage, paragraph 3 presents critics concerns, and paragraph 4 begins, "Yet these objections overlook the long-term savings." What is paragraph 4 doing?',
            options: [
              'Introducing a new unrelated topic',
              'Rebutting the counterargument to restore the line of reasoning',
              'Concluding the essay with a call to action',
              'Providing neutral background'
            ],
            correctAnswer: 1,
            explanation: 'The "Yet" transition signals a turn from counterargument to rebuttal. Paragraph 4 directly responds to paragraph 3 and restores the writer-s main line of reasoning.'
          },
          {
            question: 'Why is identifying paragraph function useful on AP Lang multiple-choice?',
            options: [
              'It helps memorize quotes faster',
              'It clarifies how each paragraph advances the author-s purpose and argument',
              'It replaces the need to read carefully',
              'It only helps on poetry questions'
            ],
            correctAnswer: 1,
            explanation: 'Many AP questions ask about rhetorical function. Knowing whether a paragraph provides evidence, concession, rebuttal, or transition helps you answer purpose and organization questions accurately.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 3. Style (Reading) ───
write('englang-style-reading-part1.ts', `export const englangStyleReadingPart1Data = {
  topicSlug: 'englang-style-reading',
  sections: [
    {
      id: 'elsr1-intro',
      type: 'text' as const,
      content: \`
# ✍️ Style in Reading

**Part 1 of 7 — How Diction and Syntax Shape Meaning and Effect**

---

## What Is Style?

**Style** is the distinctive way a writer uses language. On AP Lang, style analysis focuses on how choices in diction and syntax advance purpose.

| Style Element | Questions to Ask |
|--------------|------------------|
| **Diction** (word choice) | Are words formal, colloquial, technical, charged, concrete, abstract? |
| **Syntax** (sentence structure) | Are sentences short/long, varied, parallel, periodic, fragmented? |
| **Imagery** | What sensory language appears, and to what effect? |
| **Tone** | What attitude does the language convey? |
| **Figurative language** | Why use metaphor, analogy, irony, etc.? |

> 🔑 On AP Lang, style is never decorative only. Every stylistic choice should be tied to rhetorical purpose.

---

## Diction Categories

| Diction Type | Example | Likely Effect |
|-------------|---------|---------------|
| **Formal** | "The proposal warrants immediate implementation." | Authority, seriousness |
| **Colloquial** | "This plan just does not work in real life." | Accessibility, relatability |
| **Technical** | "Photosynthetic efficiency declines under low PAR levels." | Precision, expertise |
| **Loaded/charged** | "This reckless policy endangers families." | Emotional urgency |
| **Concrete** | "Rusting pipes leaked brown water into kitchen sinks." | Vividness, specificity |
| **Abstract** | "Justice requires structural accountability." | Conceptual framing |
      \`
    },
    {
      id: 'elsr1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Why does AP style analysis focus on diction and syntax?',
            options: [
              'Because grammar rules are the only thing that matters',
              'Because language choices shape tone, audience response, and rhetorical effectiveness',
              'Because AP questions never ask about argument',
              'Because style is independent from purpose'
            ],
            correctAnswer: 1,
            explanation: 'Diction and syntax are tools that create tone and emphasis, guide interpretation, and influence audience response. AP analysis requires explaining how those choices serve purpose.'
          },
          {
            question: 'Which phrase is most clearly loaded diction?',
            options: [
              '"The committee met at 3:00 PM."',
              '"The committee reviewed three budget options."',
              '"The committee pushed through a reckless and dangerous proposal."',
              '"The committee is composed of seven members."'
            ],
            correctAnswer: 2,
            explanation: 'Words like "reckless" and "dangerous" carry strong emotional judgment. This is loaded diction, used to influence audience perception rather than neutrally report facts.'
          }
        ]
      }
    },
    {
      id: 'elsr1-content',
      type: 'text' as const,
      content: \`
## Syntax and Rhetorical Effect

### Common Syntactic Moves

| Move | Description | Effect |
|------|-------------|--------|
| **Parallelism** | Repeated grammatical structure | Rhythm, clarity, emphasis |
| **Anaphora** | Repetition at sentence beginnings | Momentum, emotional force |
| **Periodic sentence** | Main clause delayed until end | Suspense, emphasis on final idea |
| **Short sentence after long ones** | Abrupt contrast | Punch, urgency, finality |
| **Rhetorical question** | Asks without expecting answer | Engages reader, provokes reflection |

### Example
"We can postpone reform, we can ignore the warnings, we can pretend nothing is wrong. But we cannot escape the consequences."

- Parallelism + anaphora in first sentence build rhythm and accumulation
- Short final sentence delivers emphatic conclusion

## How to Write Better Analysis

Weak: "The author uses short sentences."

Strong: "After a series of layered periodic sentences, the abrupt declaration 'We cannot wait' punctures abstraction and creates urgency, reinforcing the writer's call for immediate action."

### Reading Checklist for Style Questions
1. Identify specific diction/syntax choices
2. Describe literal effect (tone, pace, emphasis)
3. Explain rhetorical effect on audience
4. Connect to purpose and argument
      \`
    },
    {
      id: 'elsr1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Repetition of grammatical structure to create emphasis and rhythm is called _______.

2) When a sentence delays its main clause until the end, it is a _______ sentence.

3) AP style analysis should always connect language choices to rhetorical _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['parallelism', 'periodic', 'purpose'],
        hint1: 'Parallel grammatical form.',
        hint2: 'Main point arrives late.',
        hint3: 'Why the author made the choice.',
        explanation: 'Parallelism repeats structure. Periodic sentences delay the main clause. Analysis must connect style to purpose.'
      }
    },
    {
      id: 'elsr1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Identify the Style Move** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: '"We will work in our schools, in our neighborhoods, in our courts." This primarily uses ___',
            options: ['Parallelism', 'Hyperbole', 'Irony', 'Metonymy']
          },
          {
            label: '"Only after years of warnings, failed negotiations, and public protest did the council act." This is a ___',
            options: ['Periodic sentence', 'Loose sentence', 'Fragment', 'Run-on sentence']
          },
          {
            label: 'Words like "reckless," "outrageous," and "shameful" create ___',
            options: ['Loaded diction and emotional tone', 'Neutral technical precision', 'Detached objectivity', 'Humorous irony']
          }
        ],
        correctAnswers: ['Parallelism', 'Periodic sentence', 'Loaded diction and emotional tone'],
        hint1: 'Repeated phrase structure.',
        hint2: 'Main clause delayed to the end.',
        hint3: 'Emotionally charged word choice.',
        explanation: 'Repeated structure = parallelism. Delayed main clause = periodic. Charged terms = loaded diction.'
      }
    },
    {
      id: 'elsr1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Style in Reading

- Quote specific words/phrases; avoid broad claims like "the diction is good"
- Name the move, then explain the effect, then connect to purpose
- Compare sentence lengths and patterns to analyze pacing and emphasis
- Watch for tone shifts; AP often tests where and why shifts occur
- For MC, eliminate answers that describe a feature without rhetorical effect
- For essays, 2-3 deeply analyzed examples beat a long list of devices
      \`
    },
    {
      id: 'elsr1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A writer uses three long, heavily qualified sentences to explain complexity, then ends with "Act now." What is the likely rhetorical effect?',
            options: [
              'The final short sentence weakens credibility',
              'The abrupt shift to brevity creates urgency and emphasis after sustained complexity',
              'There is no meaningful effect',
              'The pattern is accidental and irrelevant'
            ],
            correctAnswer: 1,
            explanation: 'The contrast in sentence length is deliberate. After nuanced explanation, the short imperative lands with force, making the call to action more memorable and urgent.'
          },
          {
            question: 'Which AP analysis sentence is strongest?',
            options: [
              '"The author uses diction."',
              '"The language is powerful and effective."',
              '"By describing the policy as 'reckless' and 'dangerous,' the writer frames opponents as irresponsible, steering readers toward support for stricter regulation."',
              '"The syntax is varied."'
            ],
            correctAnswer: 2,
            explanation: 'This option names specific language, explains connotation, and ties the effect to audience persuasion and purpose. It moves beyond identification to analysis, which AP rewards.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 4. Tone and Voice Analysis ───
write('englang-tone-voice-analysis-part1.ts', `export const englangToneVoiceAnalysisPart1Data = {
  topicSlug: 'englang-tone-voice-analysis',
  sections: [
    {
      id: 'eltva1-intro',
      type: 'text' as const,
      content: \`
# 🎙️ Tone and Voice Analysis

**Part 1 of 7 — Distinguishing Authorial Attitude from Stylistic Persona**

---

## Tone vs Voice

Students often confuse these terms. They are related but distinct:

| Term | Definition | Guiding Question |
|------|------------|------------------|
| **Tone** | The author's attitude toward subject or audience | How does the writer feel? |
| **Voice** | The distinctive persona/style through which ideas are expressed | Who is this writer on the page? |

### Tone Can Shift
A passage might move from:
- Concerned -> urgent
- Skeptical -> hopeful
- Detached -> indignant

Tracking tone shifts is a core AP skill.

### Voice Is More Stable
Voice reflects recurring stylistic identity:
- Conversational and witty
- Formal and analytical
- Reflective and meditative
- Polemical and confrontational

> 🔑 Tone is often local (sentence/paragraph level), while voice is global (whole-text style identity).
      \`
    },
    {
      id: 'eltva1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which statement best distinguishes tone from voice?',
            options: [
              'Tone and voice are exact synonyms.',
              'Tone is the writer's attitude; voice is the writer's stylistic persona.',
              'Voice changes every paragraph, while tone stays fixed.',
              'Tone only applies to fiction, voice only to nonfiction.'
            ],
            correctAnswer: 1,
            explanation: 'Tone describes attitude (e.g., ironic, urgent, hopeful). Voice describes broader stylistic identity (e.g., formal, witty, authoritative). Tone can shift quickly; voice tends to persist across a text.'
          },
          {
            question: 'A speaker begins calm and measured, then becomes outraged after listing injustices. This is best described as:',
            options: [
              'A voice collapse',
              'A tone shift from measured to indignant',
              'A logical fallacy',
              'A change in audience'
            ],
            correctAnswer: 1,
            explanation: 'The speaker-s attitude changes from measured to indignant, which is a tone shift. The underlying voice may remain the same (e.g., formal and authoritative) even as tone evolves.'
          }
        ]
      }
    },
    {
      id: 'eltva1-content',
      type: 'text' as const,
      content: \`
## How Writers Create Tone and Voice

### Diction and Connotation
| Word Pair | Tone Difference |
|-----------|-----------------|
| "slim" vs "skinny" | positive vs negative nuance |
| "assertive" vs "aggressive" | confident vs hostile |
| "economical" vs "cheap" | prudent vs stingy |

### Syntax and Rhythm
- Long periodic sentences can sound formal, reflective, or controlled
- Short declaratives can sound forceful, urgent, or blunt
- Repetition can sound passionate, insistent, or obsessive

### Figurative and Structural Cues
- Irony can create sardonic or skeptical tone
- Rhetorical questions can create confrontational or invitational tone
- Strategic concessions can create fair-minded, balanced voice

## Tone Vocabulary (Use Precise Words)

| Weak Term | Stronger Alternatives |
|-----------|-----------------------|
| "nice" | conciliatory, warm, appreciative |
| "mean" | scornful, caustic, contemptuous |
| "sad" | elegiac, mournful, somber |
| "angry" | indignant, outraged, accusatory |
| "serious" | earnest, grave, resolute |

### AP Writing Move
Do not just label tone. Explain progression:
"The author shifts from cautiously analytical to sharply accusatory, a turn that mirrors the essay's movement from diagnosis to moral indictment."
      \`
    },
    {
      id: 'eltva1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) The writer's attitude toward the subject is called _______.

2) The writer's recurring stylistic persona is called _______.

3) A shift from calm to outraged is a tone _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['tone', 'voice', 'shift'],
        hint1: 'Attitude toward topic/audience.',
        hint2: 'The "who" of the writing persona.',
        hint3: 'Movement from one attitude to another.',
        explanation: 'Tone = attitude. Voice = stylistic persona. Movement between attitudes = tone shift.'
      }
    },
    {
      id: 'eltva1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Identify Tone and Voice Moves** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: '"I once believed this system was fair. I no longer can." This likely signals a tone of ___',
            options: ['Disillusionment / sober reconsideration', 'Celebratory optimism', 'Comic detachment', 'Technical neutrality']
          },
          {
            label: 'Consistent use of precise terms, balanced concessions, and formal syntax contributes most to ___',
            options: ['An authoritative analytical voice', 'A chaotic voice', 'A playful comic tone only', 'No rhetorical effect']
          },
          {
            label: 'Replacing "angry" with "indignant" in analysis improves ___',
            options: ['Precision of tone vocabulary', 'Sentence length', 'Plot summary', 'Grammar correctness only']
          }
        ],
        correctAnswers: ['Disillusionment / sober reconsideration', 'An authoritative analytical voice', 'Precision of tone vocabulary'],
        hint1: 'The writer abandons prior trust.',
        hint2: 'Formal balance + precision = authority.',
        hint3: 'Specific tone words are stronger on AP.',
        explanation: '"I no longer can" suggests disillusionment. Formal precision builds authoritative voice. "Indignant" is more exact than "angry."'
      }
    },
    {
      id: 'eltva1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Tone and Voice

- Use precise tone adjectives (indignant, sardonic, elegiac) rather than vague words
- Identify WHERE tone shifts and explain WHY that shift matters
- Distinguish local tone effects from overall voice identity
- Support tone claims with diction/syntax evidence, not intuition
- In essays, connect tone evolution to argument progression
- Avoid over-labeling: 1-2 accurate tone terms are better than a long list
      \`
    },
    {
      id: 'eltva1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A writer opens with neutral policy summary, then recounts victims stories, then ends with "Silence is complicity." What is the best description?',
            options: [
              'Tone remains neutral throughout',
              'Tone shifts from analytical to morally urgent, intensifying persuasive force',
              'Voice disappears in the conclusion',
              'The ending is irrelevant to tone'
            ],
            correctAnswer: 1,
            explanation: 'The passage moves from detached analysis toward urgent moral judgment. This tonal escalation aligns with persuasive intent: inform first, then compel ethical response.'
          },
          {
            question: 'Which AP analysis sentence is strongest?',
            options: [
              '"The tone is serious."',
              '"The author has a voice."',
              '"Through clipped declaratives and charged verbs, the speaker adopts an indignant tone that culminates in a direct call for accountability."',
              '"The tone is formal and informal."'
            ],
            correctAnswer: 2,
            explanation: 'This choice identifies concrete language features, uses precise tone vocabulary, and links style to rhetorical effect. That is the depth AP analysis requires.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 5. Diction and Syntax ───
write('englang-diction-syntax-part1.ts', `export const englangDictionSyntaxPart1Data = {
  topicSlug: 'englang-diction-syntax',
  sections: [
    {
      id: 'elds1-intro',
      type: 'text' as const,
      content: \`
# 🧩 Diction and Syntax

**Part 1 of 7 — The Two Core Levers of Rhetorical Style**

---

## Diction: Choosing the Right Words

**Diction** is deliberate word choice. Word-level decisions shape clarity, tone, and persuasion.

### Diction Dimensions

| Dimension | Spectrum | Impact |
|----------|----------|--------|
| **Register** | Formal <-> informal | Signals audience and context |
| **Connotation** | Positive <-> neutral <-> negative | Influences emotional response |
| **Specificity** | Abstract <-> concrete | Controls vividness and precision |
| **Technicality** | Everyday <-> specialized jargon | Signals expertise, may limit accessibility |

### Example
- Neutral: "The policy changed."
- Charged: "The policy was dismantled."
- Positive spin: "The policy was modernized."

Same event, different connotations.

---

## Syntax: Arranging the Words

**Syntax** is sentence structure. It controls pacing, emphasis, and coherence.

| Syntax Choice | Effect |
|--------------|--------|
| Short sentence | Urgency, punch, emphasis |
| Long periodic sentence | Complexity, suspense, control |
| Parallel structure | Rhythm, memorability |
| Inversion | Emphasis on unusual element |
| Fragment (intentional) | Dramatic effect |
| Repetition | Reinforcement, momentum |

> 🔑 Diction answers "which words?" Syntax answers "in what arrangement?" Together they produce rhetorical force.
      \`
    },
    {
      id: 'elds1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What is the best definition of connotation?',
            options: [
              'The dictionary definition of a word',
              'The emotional/cultural associations a word carries beyond its literal meaning',
              'The grammatical role of a word in a sentence',
              'The number of syllables in a word'
            ],
            correctAnswer: 1,
            explanation: 'Connotation refers to implied associations and emotional coloring beyond denotation. For example, "slim" and "skinny" may denote similar body size but carry different connotations.'
          },
          {
            question: 'A writer uses three long explanatory sentences followed by "Enough." The final one-word sentence primarily creates:',
            options: [
              'Confusion',
              'Syntactic emphasis and abrupt rhetorical force',
              'Technical precision',
              'Narrative neutrality'
            ],
            correctAnswer: 1,
            explanation: 'The sudden contraction from long syntax to a one-word sentence creates contrast and emphasis. It signals emotional intensity and decisiveness.'
          }
        ]
      }
    },
    {
      id: 'elds1-content',
      type: 'text' as const,
      content: \`
## Analyzing Diction and Syntax Together

Strong AP analysis shows how these features interact.

### Example Passage
"For decades, we postponed difficult choices, deferred hard truths, and disguised structural failures as temporary setbacks. Today, that pretense ends."

- Diction: "postponed," "deferred," "disguised" imply avoidance
- Parallel syntax (three-part series) accumulates indictment
- Short final sentence delivers finality and urgency

### Common Pairings and Effects

| Diction + Syntax | Typical Rhetorical Effect |
|------------------|--------------------------|
| Concrete diction + short clauses | Immediacy, visceral impact |
| Abstract diction + long periodic syntax | Intellectual authority, reflective depth |
| Loaded diction + repetition | Intensified emotional pressure |
| Formal diction + balanced syntax | Credibility and control |

## Avoiding Superficial Analysis

Weak: "The author uses diction and syntax to persuade."

Strong: "By pairing charged verbs ('exploit,' 'abandon') with clipped declaratives, the writer casts institutional actors as morally culpable and pushes readers toward urgent reform."

### Quick AP Checklist
1. Identify specific word patterns (charged, technical, concrete)
2. Identify sentence patterns (length, repetition, structure)
3. Explain audience effect
4. Link to purpose
      \`
    },
    {
      id: 'elds1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Diction refers to word _______.

2) Syntax refers to sentence _______.

3) A three-part repeated grammatical sequence is called _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['choice', 'structure', 'parallelism'],
        hint1: 'Which words are selected.',
        hint2: 'How those words are arranged.',
        hint3: 'Same grammatical pattern repeated.',
        explanation: 'Diction = choice of words. Syntax = sentence structure. Repeated grammar = parallelism.'
      }
    },
    {
      id: 'elds1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Diagnose the Effect** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Replacing "asked" with "demanded" changes diction by adding ___',
            options: ['More forceful, confrontational connotation', 'More neutrality', 'More technical precision', 'No rhetorical difference']
          },
          {
            label: 'A long sentence that postpones the main clause until the end is a ___ sentence',
            options: ['Periodic', 'Fragmented', 'Run-on', 'Simple']
          },
          {
            label: 'Formal diction plus balanced syntax most often projects ___',
            options: ['Authority and composure', 'Comic chaos', 'Childlike spontaneity', 'Randomness']
          }
        ],
        correctAnswers: ['More forceful, confrontational connotation', 'Periodic', 'Authority and composure'],
        hint1: 'Demanding is stronger than asking.',
        hint2: 'Main clause delayed.',
        hint3: 'Controlled language builds credibility.',
        explanation: '"Demanded" intensifies connotation. Delayed main clause = periodic. Formal balance projects authority.'
      }
    },
    {
      id: 'elds1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Diction and Syntax

- Pair diction and syntax in your analysis; they are strongest together
- Quote short, high-impact words rather than long blocks
- Note sentence-length contrasts for pacing/emphasis analysis
- Use precise terms: periodic, parallelism, anaphora, loaded diction, concrete imagery
- Explain effect on audience and purpose every time
- Quality beats quantity: 2 strong analyses > 8 vague device labels
      \`
    },
    {
      id: 'elds1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A writer describes pollution using words like "poisoned," "choked," and "scarred," then follows with short commands: "Look. Listen. Act." What is the combined rhetorical effect?',
            options: [
              'Neutral description and detached tone',
              'Loaded diction plus clipped syntax to create alarm and urgency',
              'Technical precision for scientific objectivity',
              'Humor and irony'
            ],
            correctAnswer: 1,
            explanation: 'The diction is emotionally charged and negative, framing pollution as active harm. The short imperative syntax accelerates pace and pushes readers toward immediate response.'
          },
          {
            question: 'Which analysis best meets AP expectations?',
            options: [
              '"The author uses words and sentences."',
              '"The syntax is varied."',
              '"Through formal diction and periodic syntax, the writer delays key claims to build anticipation, reinforcing a controlled, authoritative argument."',
              '"The passage sounds good."'
            ],
            correctAnswer: 2,
            explanation: 'This response names specific choices and explains how they produce rhetorical effect tied to argument control. It demonstrates the precision and linkage AP analysis requires.'
          }
        ]
      }
    }
  ]
};
`);

console.log('Done with English Language batch 2 (5 files)');
