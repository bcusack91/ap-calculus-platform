#!/usr/bin/env python3
"""Generate SAT Prep Batch 3: Reading Evidence (7), Reading/Writing Strategy (7), Expression of Ideas (7), Geometry/Angles (7) = 28 files."""
import os

BASE_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'interactive-lessons')

def write_file(filename, content):
    filepath = os.path.join(BASE_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  Written: {filename}")

###############################################################################
# READING & EVIDENCE (7 parts)
###############################################################################

def gen_reading_evidence():
    parts = {}

    parts[1] = r"""export const satReadingEvidencePart1Data = {
  topicSlug: 'sat-reading-evidence-sat',
  sections: [
    {
      id: 're1-intro',
      type: 'text' as const,
      content: `# Reading Comprehension: Main Idea & Central Theme

**Part 1 of 7 — Finding the Central Idea**

Every SAT Reading passage—whether literary, social science, or natural science—will test whether you can identify the **central idea** or main purpose.

### How to Identify the Central Idea

1. **Read the first and last sentences** of the passage carefully—they usually frame the argument
2. **Ask:** "What is the author trying to convince me of, or what point are they making?"
3. **Eliminate answers** that are too narrow (only about one detail) or too broad (beyond what the passage discusses)

### Common Main Idea Question Stems

- "Which choice best states the main idea of the passage?"
- "The primary purpose of this passage is to..."
- "The passage is mainly concerned with..."

### Example Passage

> Recent studies suggest that bilingual children develop stronger executive function skills than their monolingual peers. Researchers at Georgetown University found that bilinguals showed enhanced ability to switch between tasks, filter out irrelevant information, and maintain focus—skills collectively known as cognitive flexibility.

**Main idea:** Bilingualism in children is associated with stronger executive function/cognitive flexibility.

### SAT Trap ⚠️

Wrong answers often restate a **supporting detail** as if it were the main idea. If an answer choice mentions a specific study finding without connecting it to the broader argument, it's probably a trap.`
    },
    {
      id: 're1-quiz',
      type: 'multiple-choice' as const,
      content: '**Main Idea Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage discusses how ancient Roman aqueducts used gravity to transport water over long distances, then explains how modern engineers have adopted similar principles in sustainable water systems. Which best states the main idea?',
            options: ['Ancient Roman engineering principles remain relevant in modern sustainable water design', 'Roman aqueducts were more advanced than previously believed', 'Modern water systems are copies of Roman designs', 'Gravity-based water systems are the most efficient'],
            correctAnswer: 0,
            explanation: 'The passage connects ancient Roman principles to modern applications—that connection IS the main idea. Options B, C, and D are either too narrow or make claims not supported by the passage.'
          },
          {
            question: 'When a main idea answer choice uses the word "prove" or "definitively establish," you should:',
            options: ['Be skeptical—SAT passages rarely make absolute claims', 'Choose it if the passage mentions research', 'Eliminate it only if the passage says "suggests"', 'Accept it if supporting evidence is strong'],
            correctAnswer: 0,
            explanation: 'SAT passages almost always use hedging language like "suggests," "indicates," or "may." Answer choices with absolute language like "proves" are usually wrong.'
          },
          {
            question: 'A passage opens: "While many assume that coral reefs are declining uniformly, a growing body of research reveals a more nuanced picture." The passage will most likely:',
            options: ['Present evidence that some coral reefs are recovering or stable', 'Argue that coral reefs are not actually in danger', 'Prove that previous research was entirely wrong', 'Discuss only the negative effects of climate change on reefs'],
            correctAnswer: 0,
            explanation: 'The phrase "more nuanced picture" signals the author will complicate the simple narrative. This usually means showing both decline AND recovery/stability—a balanced view.'
          }
        ]
      }
    },
    {
      id: 're1-detail',
      type: 'text' as const,
      content: `## Strategy: The "One Sentence Summary" Test

After reading a passage, try to summarize it in ONE sentence. If your summary matches an answer choice, that's likely correct.

**Practice this pattern:**

| Passage About | One-Sentence Summary |
|---|---|
| Sleep and memory research | "Sleep plays a critical role in memory consolidation" |
| Jane Austen's writing style | "Austen used irony to critique social class structures" |
| Climate change and migration | "Climate change is becoming a significant driver of human migration" |

If you can't summarize in one sentence, you may need to reread the passage more carefully.

### Red Flags in Wrong Answers

- **Too extreme:** "completely disproves," "the only cause," "all scientists agree"
- **Too narrow:** Focuses on one paragraph instead of the whole passage
- **Reversed logic:** States the opposite of the author's argument
- **Out of scope:** Introduces ideas not discussed in the passage`
    }
  ]
};"""

    parts[2] = r"""export const satReadingEvidencePart2Data = {
  topicSlug: 'sat-reading-evidence-sat',
  sections: [
    {
      id: 're2-intro',
      type: 'text' as const,
      content: `# Command of Evidence: Textual

**Part 2 of 7 — Finding Evidence in the Text**

"Command of Evidence" questions ask you to identify which part of a passage **supports** a given claim or conclusion. These are among the most common SAT Reading question types.

### Two Main Types

**Type 1: "Which choice provides the best evidence for the answer to the previous question?"**
- These are paired with another question
- Strategy: Answer the first question, THEN find the quote that supports your answer

**Type 2: "Which quotation from the passage most effectively illustrates the claim?"**
- You're given a claim and must find the matching evidence
- Strategy: Read each quote and ask "Does this directly support the stated claim?"

### The Evidence Must Be DIRECT

The correct quote must **directly** support the claim—not just be related to the same topic.

**Claim:** "The author suggests that early childhood education has long-term economic benefits."

| Quote | Verdict |
|---|---|
| "Children who attended preschool earned 25% more by age 40" | ✅ Direct economic evidence |
| "Early education fosters social development" | ❌ Related topic, but not about economics |
| "The program cost \\$8,000 per student" | ❌ About cost, not about benefits |

### SAT Trap ⚠️

Trap answers are quotes that mention the same topic as the claim but don't actually **support** it. Just because a quote discusses the same subject doesn't mean it's evidence for the specific claim.`
    },
    {
      id: 're2-quiz',
      type: 'multiple-choice' as const,
      content: '**Evidence Identification Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Claim: "The author argues that social media has fundamentally altered how people form political opinions." Which quote best supports this claim?',
            options: ['"A 2023 survey found that 68% of adults under 30 cited social media as their primary source of political news, compared to just 12% who relied on newspapers"', '"Social media companies have faced increasing scrutiny from lawmakers concerned about data privacy"', '"The first social media platform launched in 2003 and quickly gained millions of users"', '"Political advertising spending on social media reached \\$3 billion in 2024"'],
            correctAnswer: 0,
            explanation: 'The claim is about HOW people form political opinions. The survey data showing 68% get political news from social media directly supports this fundamental change. The other options discuss related topics (regulation, history, spending) but don\'t address opinion formation.'
          },
          {
            question: 'When answering a paired evidence question, what is the most efficient approach?',
            options: ['Answer the first question using the passage, then match your answer to one of the evidence quotes', 'Read all four evidence quotes first, then answer the first question', 'Skip the first question and only answer the evidence question', 'Choose the longest quote as evidence'],
            correctAnswer: 0,
            explanation: 'The most efficient method is to answer the comprehension question first based on the passage, then find the quote that directly supports your answer. Working backwards from quotes is less efficient and more error-prone.'
          },
          {
            question: 'A passage argues that wolves reintroduced to Yellowstone improved the entire ecosystem. Which evidence would be WEAKEST support for this claim?',
            options: ['"Wolf populations grew from 31 to 94 in the first five years"', '"Elk herds moved away from riverbanks, allowing vegetation to regrow along streams"', '"The return of wolves led to a measurable increase in songbird populations"', '"Beaver colonies expanded as riverside willow trees recovered"'],
            correctAnswer: 0,
            explanation: 'Wolf population growth describes what happened to the wolves, not how they improved the ecosystem. The other quotes show direct cascading ecological benefits—vegetation regrowth, songbird increase, beaver expansion.'
          }
        ]
      }
    }
  ]
};"""

    parts[3] = r"""export const satReadingEvidencePart3Data = {
  topicSlug: 'sat-reading-evidence-sat',
  sections: [
    {
      id: 're3-intro',
      type: 'text' as const,
      content: `# Inference & Implied Meaning

**Part 3 of 7 — Reading Between the Lines**

Inference questions ask you to determine what the passage **implies** or **suggests** without directly stating. These require careful attention to tone, word choice, and logical connections.

### Inference vs. Speculation

- **Valid inference:** A conclusion logically supported by evidence in the passage
- **Speculation:** A guess that goes beyond what the passage supports

**Rule:** If you can point to specific words or sentences that support your inference, it's valid. If you're imagining scenarios the author didn't address, it's speculation.

### Common Inference Question Stems

- "It can be inferred from the passage that..."
- "The author most likely believes that..."
- "The passage suggests that..."
- "Based on the passage, it is reasonable to conclude that..."

### Example

> Dr. Chen spent fourteen years developing the vaccine, working through three failed clinical trials before the fourth showed promising results. When asked about her persistence, she simply said, "The problem was worth solving."

**We can infer:**
- ✅ Dr. Chen is dedicated to her research (evidence: 14 years, persisted through failures)
- ✅ She is motivated by the importance of the work, not just personal success (evidence: "The problem was worth solving")
- ❌ She was the only person working on this vaccine (not stated or implied)
- ❌ The vaccine is now widely available (we only know trial 4 was promising)`
    },
    {
      id: 're3-quiz',
      type: 'multiple-choice' as const,
      content: '**Inference Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage describes a musician who "abandoned a lucrative career in law to pursue composing, despite her family\'s vocal disapproval." What can most reasonably be inferred?',
            options: ['Music was more important to her than financial security or family approval', 'She was unsuccessful as a lawyer', 'Her family eventually supported her decision', 'She regretted leaving law'],
            correctAnswer: 0,
            explanation: 'She gave up something "lucrative" (financial security) and acted "despite" disapproval (family approval). This directly implies music mattered more than both. The other options require information not in the passage.'
          },
          {
            question: 'A historian writes: "While popular accounts credit Edison as the sole inventor of the lightbulb, the reality involves at least two dozen contemporaneous inventors working on similar designs." The author most likely believes:',
            options: ['Innovation is typically a collective rather than individual process', 'Edison should receive no credit for the lightbulb', 'Popular history is always inaccurate', 'The other inventors were more talented than Edison'],
            correctAnswer: 0,
            explanation: 'The contrast between "sole inventor" and "two dozen contemporaneous inventors" implies innovation is collective. The author doesn\'t say Edison deserves NO credit (just not sole credit), doesn\'t say popular history is ALWAYS wrong, and makes no comparison of talent.'
          },
          {
            question: 'Which approach is MOST reliable for inference questions?',
            options: ['Choose the answer that is supported by specific evidence in the passage', 'Choose the answer that seems most logical based on your outside knowledge', 'Choose the most detailed or specific answer', 'Choose the answer that the author would most likely agree with personally'],
            correctAnswer: 0,
            explanation: 'SAT inferences must be textually grounded. Outside knowledge, level of detail, and personal opinions are all unreliable criteria. Always ask: "What specific words in the passage support this?"'
          }
        ]
      }
    }
  ]
};"""

    parts[4] = r"""export const satReadingEvidencePart4Data = {
  topicSlug: 'sat-reading-evidence-sat',
  sections: [
    {
      id: 're4-intro',
      type: 'text' as const,
      content: `# Vocabulary in Context

**Part 4 of 7 — Word Meaning from Context**

The SAT tests "words in context"—you need to determine which meaning of a word fits the passage, NOT just the most common definition.

### Strategy: Substitution Method

1. Read the sentence with the target word
2. Cover the word and predict what should go there
3. Check which answer choice matches your prediction

### Example

> "The company decided to **table** the proposal until the next quarterly meeting."

The word "table" most nearly means:
- A) a piece of furniture ❌
- B) postpone ✅
- C) present for discussion ❌ (British English meaning—less common in SAT context)
- D) organize into rows ❌

### Multiple-Meaning Words the SAT Loves

| Word | Common Meaning | SAT Contextual Meaning |
|---|---|---|
| **Acute** | sharp, severe | perceptive, keen |
| **Check** | verify | restrain, limit |
| **Arrest** | detain by police | stop, halt (progress) |
| **Qualify** | become eligible | limit, moderate (a statement) |
| **Gravity** | force of attraction | seriousness, importance |
| **Champion** | winner | advocate for, support |
| **Craft** | art project | skill, careful construction |
| **Provincial** | from a province | narrow-minded, unsophisticated |

### SAT Trap ⚠️

The most **obvious** definition is almost always wrong. If "table" is in the answer choices and one option is "a flat surface for eating," that's the trap. The SAT wants the **secondary** or **contextual** meaning.`
    },
    {
      id: 're4-quiz',
      type: 'multiple-choice' as const,
      content: '**Vocabulary in Context Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '"The senator sought to TEMPER her criticism of the bill with acknowledgment of its sponsors\' good intentions." In this context, "temper" most nearly means:',
            options: ['moderate', 'anger', 'heat-treat (as metal)', 'disposition'],
            correctAnswer: 0,
            explanation: 'She is softening her criticism by also praising intentions. "Moderate"—to reduce the intensity of—fits perfectly. "Temper" meaning anger or heat-treating metal doesn\'t fit this context.'
          },
          {
            question: '"The artist\'s PEDESTRIAN approach to the landscape disappointed critics who expected innovation." "Pedestrian" most nearly means:',
            options: ['unimaginative and dull', 'walking on foot', 'related to foot traffic', 'methodical and thorough'],
            correctAnswer: 0,
            explanation: 'Critics expected innovation but were disappointed—so the approach was the opposite of innovative. "Pedestrian" meaning "ordinary, unimaginative" fits. The literal meaning (walking) is the trap.'
          },
          {
            question: 'When you encounter a vocabulary-in-context question, the FIRST thing you should do is:',
            options: ['Reread the sentence and predict a synonym BEFORE looking at the choices', 'Look at all four choices and pick the most common definition', 'Think about how you personally use the word', 'Choose the most sophisticated-sounding option'],
            correctAnswer: 0,
            explanation: 'Predicting before looking prevents you from being attracted to trap answers. Your prediction based on context will almost always match the correct choice.'
          }
        ]
      }
    }
  ]
};"""

    parts[5] = r"""export const satReadingEvidencePart5Data = {
  topicSlug: 'sat-reading-evidence-sat',
  sections: [
    {
      id: 're5-intro',
      type: 'text' as const,
      content: `# Purpose & Rhetoric

**Part 5 of 7 — Why Did the Author Write This?**

Purpose questions test your ability to understand not just WHAT the author says, but WHY they structured the passage the way they did.

### Author's Purpose Categories

| Purpose | Signal Words | Example |
|---|---|---|
| **Argue/Persuade** | "should," "must," "critical that" | "Schools should require financial literacy courses" |
| **Inform/Explain** | "researchers found," "data shows" | "A 2024 study revealed that bees navigate using Earth's magnetic field" |
| **Analyze/Evaluate** | "however," "on the other hand," "while" | "While the policy reduced crime, it disproportionately affected minority communities" |
| **Narrate** | descriptive language, chronological | "Maria opened the letter with trembling hands" |
| **Compare/Contrast** | "unlike," "similarly," "whereas" | "Unlike previous telescopes, JWST can detect infrared light" |

### Function of a Specific Paragraph/Sentence

Some questions ask: "The author includes the anecdote in lines 15-20 primarily to..."

**Common functions:**
- Provide a concrete example of an abstract concept
- Introduce a counterargument before refuting it
- Establish the author's credibility or emotional connection
- Transition between two main ideas
- Anticipate and address a potential objection

### Example

> "Skeptics argue that renewable energy cannot reliably power a modern grid. However, a 2024 analysis of Germany's Energiewende program shows that wind and solar provided 52% of the nation's electricity with fewer blackouts than the previous decade."

**Purpose of the first sentence:** To introduce a counterargument (the skeptics' view) that the author will then refute with evidence.`
    },
    {
      id: 're5-quiz',
      type: 'multiple-choice' as const,
      content: '**Purpose & Rhetoric Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage begins with a personal anecdote about the author\'s grandmother, then shifts to discussing the economics of elder care in America. The anecdote primarily serves to:',
            options: ['Create an emotional connection before presenting data-driven arguments', 'Prove that the author has personal expertise in elder care', 'Entertain the reader before a dry topic', 'Show that the author\'s grandmother needed better care'],
            correctAnswer: 0,
            explanation: 'Opening anecdotes in argumentative passages humanize the issue and create emotional investment before the author presents statistics and policy arguments. This is a standard rhetorical move.'
          },
          {
            question: 'In a passage about ocean acidification, the author writes: "Some might argue that marine organisms have adapted to changing conditions for millions of years." This sentence primarily serves to:',
            options: ['Acknowledge a counterargument the author will likely challenge', 'Support the author\'s central claim about adaptation', 'Shift the focus from ocean chemistry to biology', 'Conclude the author\'s argument'],
            correctAnswer: 0,
            explanation: '"Some might argue" is a classic signal that the author is introducing a counterargument. The author will almost certainly follow this with "However" or "But" and then present evidence against this view.'
          }
        ]
      }
    }
  ]
};"""

    parts[6] = r"""export const satReadingEvidencePart6Data = {
  topicSlug: 'sat-reading-evidence-sat',
  sections: [
    {
      id: 're6-intro',
      type: 'text' as const,
      content: `# Data Interpretation in Reading

**Part 6 of 7 — Charts, Graphs, and Tables in R&W**

The Digital SAT includes informational graphics alongside some Reading & Writing passages. You must integrate data from both the text and the visual.

### Common Graphic Types

- **Bar charts:** Compare quantities across categories
- **Line graphs:** Show trends over time
- **Tables:** Present precise numerical data
- **Scatter plots:** Show relationships between two variables

### Strategy: Text + Graphic Integration

1. Read the passage first to understand the main argument
2. Examine the graphic: title, axes, labels, units
3. Ask: "How does this graphic support or complicate the passage's claims?"

### Example Question Pattern

**Passage says:** "Renewable energy adoption has accelerated dramatically in the past decade."

**Graph shows:** Solar installation growing from 2 GW in 2010 to 150 GW in 2023.

**Question:** "Which claim from the passage is best supported by the data in the figure?"

✅ Answer: The claim about dramatic acceleration—the graph shows 75x growth.

### SAT Trap ⚠️

- Don't confuse what the **text claims** with what the **data shows**. Sometimes the data actually **contradicts** or **qualifies** the text's claims.
- Always check the **scale and units** on graphs. A graph that looks dramatic might only show a change from 50.0% to 50.5%.`
    },
    {
      id: 're6-quiz',
      type: 'multiple-choice' as const,
      content: '**Data + Reading Integration** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage claims "Exercise significantly improves test scores." A table shows students who exercised 30 min/day scored an average of 82%, while non-exercisers scored 78%. Does the data support the claim?',
            options: ['Partially—the data shows improvement but "significantly" may overstate a 4-point difference', 'Yes—any improvement counts as significant', 'No—the data completely contradicts the claim', 'The data is irrelevant to the claim'],
            correctAnswer: 0,
            explanation: 'The data does show improvement (82 vs 78), so it partially supports the claim. But a 4-percentage-point difference might not qualify as "significant"—the word choice in the passage is stronger than the data warrants.'
          },
          {
            question: 'When a graph appears with a passage, you should read:',
            options: ['The passage first, then the graph title and labels, then integrate both', 'The graph first because visual data is more objective', 'Only the passage—the graph is supplementary', 'Only the graph—the passage is just context'],
            correctAnswer: 0,
            explanation: 'Start with the passage to understand the argument, then examine the graph with attention to title, axes, and units. Integration of both is always required for correct answers.'
          }
        ]
      }
    }
  ]
};"""

    parts[7] = r"""export const satReadingEvidencePart7Data = {
  topicSlug: 'sat-reading-evidence-sat',
  sections: [
    {
      id: 're7-intro',
      type: 'text' as const,
      content: `# Reading Comprehension Review

**Part 7 of 7 — Comprehensive Review & Test Strategy**

### Quick-Reference Decision Tree

When you see a Reading question:

1. **"Main idea" or "primary purpose"** → Summarize passage in one sentence, match to answer
2. **"Best evidence" or "which quote"** → Find the DIRECT support, not just related topic  
3. **"Infer" or "suggests"** → Must be supported by specific text, not outside knowledge
4. **"Word in context"** → Cover the word, predict a synonym, match to choices
5. **"Purpose of paragraph/sentence"** → Ask WHY the author included it (counter? example? transition?)
6. **"Data/graphic"** → Integrate text claims with visual evidence; watch for overstatement

### Time Management for Reading

- **Budget:** ~1.2 minutes per question (R&W module: 27 questions, 32 minutes)
- **Don't read the whole passage first** on the Digital SAT—each question comes with its own short passage
- **Read the question stem first** to know what to look for
- If a question is taking more than 2 minutes, flag it and move on

### Most Common Mistakes

| Mistake | Fix |
|---|---|
| Choosing an answer that "sounds smart" but isn't supported | Always point to specific text evidence |
| Overthinking inference questions | The correct inference is usually straightforward |
| Picking the most common word definition | Context determines meaning, not familiarity |
| Not reading all four choices | The best answer might be D—compare all options |
| Bringing in outside knowledge | Only what's in the passage counts |`
    },
    {
      id: 're7-quiz',
      type: 'multiple-choice' as const,
      content: '**Comprehensive Review Quiz** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage states: "The market for electric vehicles, while growing, faces infrastructure challenges that may slow adoption." The word "temper" would best replace:',
            options: ['"slow" — it means to moderate or restrain', '"growing" — it means to increase', '"faces" — it means to confront', '"challenges" — it means difficulties'],
            correctAnswer: 0,
            explanation: '"Temper" in this context means to moderate or restrain, which aligns with "slow adoption." This is a vocabulary-in-context application.'
          },
          {
            question: 'What is the MOST efficient reading strategy for Digital SAT R&W?',
            options: ['Read the question, then read the passage with that question in mind', 'Speed-read the passage then answer from memory', 'Read only the first and last sentences', 'Read the answer choices first'],
            correctAnswer: 0,
            explanation: 'On the Digital SAT, each question has its own passage. Reading the question first tells you what to focus on, making your passage reading targeted and efficient.'
          },
          {
            question: 'A passage discusses the benefits of urban green spaces. A graph shows park acreage per capita declining in 15 of 20 cities studied. This data:',
            options: ['Complicates the passage by showing a decline despite the described benefits', 'Directly contradicts and disproves the passage claims', 'Is irrelevant to the passage topic', 'Fully supports the passage argument'],
            correctAnswer: 0,
            explanation: 'The data doesn\'t disprove that green spaces are beneficial—it shows they\'re declining. This complicates the narrative: the benefits are real but access is shrinking. "Complicates" is the nuanced answer the SAT favors.'
          }
        ]
      }
    }
  ]
};"""

    print("Generating Reading & Evidence (7 parts)...")
    for i in range(1, 8):
        write_file(f"sat-sat-reading-evidence-sat-part{i}.ts", parts[i])


###############################################################################
# READING/WRITING STRATEGY (7 parts)
###############################################################################

def gen_rw_strategy():
    parts = {}

    parts[1] = r"""export const satRWStrategyPart1Data = {
  topicSlug: 'sat-reading-writing-strategy-sat',
  sections: [
    {
      id: 'rw1-intro',
      type: 'text' as const,
      content: `# R&W Module Strategy: Sentence Structure & Boundaries

**Part 1 of 7 — Run-ons, Fragments, and Sentence Combining**

The SAT Writing section tests your ability to identify and fix sentence structure errors. These appear in nearly every test.

### Run-on Sentences (Comma Splices)

A **run-on** joins two independent clauses incorrectly.

❌ "The experiment failed, the researchers tried again."

**Four ways to fix a run-on:**

| Fix | Example |
|---|---|
| Period | "The experiment failed. The researchers tried again." |
| Semicolon | "The experiment failed; the researchers tried again." |
| Comma + conjunction | "The experiment failed, so the researchers tried again." |
| Subordinate clause | "Because the experiment failed, the researchers tried again." |

### Fragments

A **fragment** lacks a subject, verb, or complete thought.

❌ "Running through the park on a sunny afternoon."  
✅ "She was running through the park on a sunny afternoon."

❌ "Which caused significant delays in the project."  
✅ "The supply shortage caused significant delays in the project."

### SAT Trap ⚠️

Long sentences aren't automatically run-ons. A sentence can be 40+ words and still be grammatically correct if properly structured. Similarly, short "sentences" can be fragments.`
    },
    {
      id: 'rw1-quiz',
      type: 'multiple-choice' as const,
      content: '**Sentence Structure Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which correctly fixes this run-on? "The museum opened in 1923, it quickly became a cultural landmark."',
            options: ['The museum opened in 1923; it quickly became a cultural landmark.', 'The museum opened in 1923 it quickly became a cultural landmark.', 'The museum opened in 1923, becoming a cultural landmark quickly.', 'The museum, opened in 1923, it quickly became a cultural landmark.'],
            correctAnswer: 0,
            explanation: 'A semicolon correctly joins two related independent clauses. The original is a comma splice (two independent clauses joined by just a comma). Option C changes the meaning, and D creates a new error.'
          },
          {
            question: 'Which is a sentence fragment? (A) "Although she studied for weeks." (B) "She studied for weeks." (C) "She studied for weeks and passed the exam."',
            options: ['A—"Although" makes it a dependent clause that can\'t stand alone', 'B—it\'s too short to be a complete sentence', 'C—compound sentences are fragments', 'None of these are fragments'],
            correctAnswer: 0,
            explanation: '"Although she studied for weeks" is a dependent clause—it has a subject and verb but starts with a subordinating conjunction ("although") that makes it incomplete. It needs an independent clause to finish the thought.'
          }
        ]
      }
    }
  ]
};"""

    parts[2] = r"""export const satRWStrategyPart2Data = {
  topicSlug: 'sat-reading-writing-strategy-sat',
  sections: [
    {
      id: 'rw2-intro',
      type: 'text' as const,
      content: `# Subject-Verb Agreement

**Part 2 of 7 — Making Subjects and Verbs Match**

Subject-verb agreement is one of the most tested grammar concepts on the SAT. The trick is identifying the TRUE subject, which the SAT deliberately obscures.

### Basic Rule

Singular subjects take singular verbs; plural subjects take plural verbs.

- "The dog **runs**." (singular)
- "The dogs **run**." (plural)

### SAT's Favorite Tricks

**1. Prepositional phrase between subject and verb:**

❌ "The collection of rare stamps **are** valuable."  
✅ "The collection of rare stamps **is** valuable."

The subject is "collection" (singular), NOT "stamps."

**2. Inverted sentence order:**

❌ "Among the ruins **was** several ancient artifacts."  
✅ "Among the ruins **were** several ancient artifacts."

The subject is "artifacts" (plural), which comes AFTER the verb.

**3. Compound subjects with "or/nor":**

The verb agrees with the **nearer** subject:
- "Neither the teacher nor the students **were** prepared." (students = plural)
- "Neither the students nor the teacher **was** prepared." (teacher = singular)

**4. Indefinite pronouns:**

| Always Singular | Always Plural | Depends on Context |
|---|---|---|
| everyone, each, nobody, either, neither | both, few, many, several | all, some, most, none |

### Strategy: Cross Out the Clutter

When you see a long sentence, mentally cross out prepositional phrases and modifying clauses to find the bare subject-verb pair.

"The **impact** [of rising temperatures] [on coastal communities] **has** been devastating."  
Subject: impact (singular) → Verb: has (singular) ✅`
    },
    {
      id: 'rw2-quiz',
      type: 'multiple-choice' as const,
      content: '**Subject-Verb Agreement Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '"Each of the scientists _____ the findings independently." Which verb is correct?',
            options: ['verified', 'were verifying', 'verify', 'have verified'],
            correctAnswer: 0,
            explanation: '"Each" is ALWAYS singular, regardless of the prepositional phrase "of the scientists." So the singular "verified" is correct.'
          },
          {
            question: '"The data from the three experiments _____ a clear pattern." Which verb is correct?',
            options: ['reveal—"data" is treated as plural in scientific writing on the SAT', 'reveals—"data" is always singular', 'has revealed—singular collective noun', 'are revealing—always use plural with "data"'],
            correctAnswer: 0,
            explanation: 'On the SAT, "data" is typically treated as plural (its original Latin form). "The data reveal" is standard. However, note that both singular and plural are accepted in modern usage—on the SAT, match the context clues.'
          },
          {
            question: '"Neither the CEO nor the board members _____ willing to compromise." Which is correct?',
            options: ['were—the verb agrees with "board members" (nearer, plural)', 'was—the verb agrees with "CEO" (first subject)', 'is—always use singular with "neither"', 'has been—use present perfect with "neither/nor"'],
            correctAnswer: 0,
            explanation: 'With "neither...nor," the verb agrees with the subject CLOSER to it. "Board members" is closer and plural, so "were" is correct.'
          }
        ]
      }
    }
  ]
};"""

    parts[3] = r"""export const satRWStrategyPart3Data = {
  topicSlug: 'sat-reading-writing-strategy-sat',
  sections: [
    {
      id: 'rw3-intro',
      type: 'text' as const,
      content: `# Transitions & Logical Flow

**Part 3 of 7 — Connecting Ideas Effectively**

Transition questions test whether you understand the logical relationship between sentences or paragraphs. They're among the most frequent on the SAT Writing section.

### Transition Categories

| Relationship | Transitions | Example |
|---|---|---|
| **Continuation/Addition** | furthermore, moreover, additionally, also | "She excels in math. Moreover, she leads the debate team." |
| **Contrast** | however, nevertheless, on the other hand, yet | "The plan was expensive. However, it produced results." |
| **Cause/Effect** | therefore, consequently, as a result, thus | "Sales dropped 40%. Consequently, the company restructured." |
| **Example/Illustration** | for instance, for example, specifically | "Many species are threatened. For example, the vaquita population fell below 10." |
| **Concession** | admittedly, granted, although | "Admittedly, the sample size was small." |
| **Sequence** | first, then, finally, subsequently | "First, gather data. Then, analyze the results." |

### Strategy: Cover the Transition, Predict the Relationship

1. Read the sentence BEFORE the transition
2. Read the sentence AFTER the transition
3. Ask: Are these ideas **continuing**, **contrasting**, or **cause/effect**?
4. Choose the transition that matches

### Example

"The city invested \\$50 million in public transit. _______, ridership increased by 35% the following year."

- Before: investment happened
- After: positive result occurred
- Relationship: **cause → effect**
- Answer: **As a result** (not "However," "Nevertheless," or "For example")

### SAT Trap ⚠️

"However" is the most commonly chosen WRONG answer. Students pick it because it "sounds academic." Only use "however" when the second sentence **contradicts or contrasts** with the first.`
    },
    {
      id: 'rw3-quiz',
      type: 'multiple-choice' as const,
      content: '**Transitions Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '"The new policy reduced carbon emissions by 15%. _______, manufacturing output remained unchanged, dispelling fears of economic harm." Choose the best transition.',
            options: ['Moreover', 'However', 'Therefore', 'For example'],
            correctAnswer: 0,
            explanation: 'The first sentence gives a positive result (emissions down). The second adds ANOTHER positive result (output stayed the same). "Moreover" adds supporting information. "However" would imply contrast, which isn\'t the relationship here.'
          },
          {
            question: '"Critics argued the study was flawed due to its small sample size. _______, the researchers conducted a follow-up study with 10,000 participants and found identical results."',
            options: ['In response', 'Similarly', 'For instance', 'Meanwhile'],
            correctAnswer: 0,
            explanation: 'The second sentence directly addresses the criticism from the first. "In response" captures this action-reaction relationship. "Similarly" implies the same kind of thing happened. "For instance" would give an example of the criticism.'
          },
          {
            question: 'The transition "nevertheless" is most similar in meaning to:',
            options: ['Despite that / even so (contrast despite expectation)', 'As a result (cause-effect)', 'In addition (continuation)', 'Specifically (example)'],
            correctAnswer: 0,
            explanation: '"Nevertheless" means "despite what was just said" — it introduces a contrasting result that goes against expectation. It belongs in the contrast/concession category alongside "however" and "yet."'
          }
        ]
      }
    }
  ]
};"""

    parts[4] = r"""export const satRWStrategyPart4Data = {
  topicSlug: 'sat-reading-writing-strategy-sat',
  sections: [
    {
      id: 'rw4-intro',
      type: 'text' as const,
      content: `# Conciseness & Redundancy

**Part 4 of 7 — Eliminating Wordiness**

The SAT rewards clear, concise writing. If two answer choices are grammatically correct, the **shorter one is usually right**.

### Common Redundancy Patterns

| Redundant | Concise |
|---|---|
| "In the event that" | "If" |
| "Due to the fact that" | "Because" |
| "In order to" | "To" |
| "At the present time" | "Now" / "Currently" |
| "Each and every" | "Each" or "Every" |
| "Past history" | "History" |
| "True fact" | "Fact" |
| "Completely eliminate" | "Eliminate" |
| "The reason why is because" | "The reason is" or "Because" |

### The Conciseness Rule

When choosing between answer options:

1. **Eliminate grammatically incorrect choices first**
2. **Among correct choices, pick the most concise**
3. **Don't sacrifice clarity for brevity** — the shortest answer isn't correct if it changes the meaning

### Example

"The artist, **who was known for her innovative and groundbreaking approach to sculpture**, won the award."

Best revision: "The artist, **known for her innovative approach to sculpture**, won the award."

- Removed "who was" (unnecessary)
- Removed "groundbreaking" (redundant with "innovative")
- Same meaning, fewer words

### SAT Trap ⚠️

Sometimes the most concise answer creates ambiguity. Clarity beats brevity:

❌ "She told her she was wrong." (Ambiguous: who is "she"?)  
✅ "Maria told Sarah that Sarah was wrong." (Clear but longer)`
    },
    {
      id: 'rw4-quiz',
      type: 'multiple-choice' as const,
      content: '**Conciseness Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which is the most concise and effective revision? "The CEO, who is the person in charge of leading the company, announced a new strategy."',
            options: ['The CEO announced a new strategy.', 'The CEO of the company announced a new strategy for the future.', 'The company leader and CEO announced a new strategy.', 'Being the CEO, she announced a new strategy.'],
            correctAnswer: 0,
            explanation: 'Everyone knows what a CEO does—"who is the person in charge of leading the company" is completely redundant. The simplest version preserves all essential information.'
          },
          {
            question: '"Due to the fact that the weather was bad, the game was postponed." The most concise revision is:',
            options: ['Because of bad weather, the game was postponed.', 'The game was postponed due to the fact of bad weather.', 'Since the weather was bad in nature, the game was postponed.', 'Owing to the inclement weather conditions, the game was postponed.'],
            correctAnswer: 0,
            explanation: '"Due to the fact that" → "Because of." This is one of the most common wordiness patterns the SAT tests. Always replace multi-word phrases with single words when possible.'
          }
        ]
      }
    }
  ]
};"""

    parts[5] = r"""export const satRWStrategyPart5Data = {
  topicSlug: 'sat-reading-writing-strategy-sat',
  sections: [
    {
      id: 'rw5-intro',
      type: 'text' as const,
      content: `# Pronoun Clarity & Agreement

**Part 5 of 7 — Pronoun Reference and Number**

Pronoun questions test two things: (1) Does the pronoun clearly refer to a specific noun? (2) Does it agree in number?

### Pronoun-Antecedent Agreement

The pronoun must match its antecedent (the noun it replaces) in number.

| Antecedent | Correct Pronoun |
|---|---|
| "A student" (singular) | he/she/they (singular they is accepted on SAT) |
| "Students" (plural) | they/their/them |
| "The team" (collective singular) | it/its |
| "Everyone" (singular indefinite) | their (modern) / he or she |

### Ambiguous Reference

❌ "When **the managers** met with **the clients**, **they** were disappointed."  
(Who was disappointed — managers or clients?)

✅ "When the managers met with the clients, **the clients** were disappointed."

### SAT's Favorite Pronoun Traps

**1. "It" without clear reference:**  
❌ "The company released its earnings report, and **it** showed growth." ("It" = company or report?)

**2. Singular "they" with clear antecedent — now standard on SAT:**  
✅ "Each student should bring **their** textbook." (Accepted on modern SAT)

**3. Pronoun shifts:**  
❌ "When **one** tries hard, **you** can succeed."  
✅ "When **one** tries hard, **one** can succeed." (or "When **you** try hard, **you** can succeed.")

### Strategy

For every pronoun, ask: "Can I point to EXACTLY one noun this refers to?" If not, the sentence has an error.`
    },
    {
      id: 'rw5-quiz',
      type: 'multiple-choice' as const,
      content: '**Pronoun Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '"Neither the coach nor the players have expressed _____ opinion on the new rule." Which pronoun is correct?',
            options: ['their—agrees with "players" (nearer plural subject)', 'his—agrees with "coach" (first subject)', 'its—collective noun', 'his or her—formal agreement'],
            correctAnswer: 0,
            explanation: 'Like subject-verb agreement with "neither...nor," the pronoun agrees with the nearer subject. "Players" is nearer and plural, so "their" is correct.'
          },
          {
            question: 'Which revision fixes the ambiguous pronoun? "The biologist showed the student her research."',
            options: ['The biologist showed the student the biologist\'s research.', 'The biologist showed her research to the student.', 'She showed the student her research.', 'The biologist showed them her research.'],
            correctAnswer: 1,
            explanation: 'Rearranging to "showed her research to the student" makes clear that "her" refers to the biologist (the subject). The original was ambiguous because "her" could refer to either person.'
          }
        ]
      }
    }
  ]
};"""

    parts[6] = r"""export const satRWStrategyPart6Data = {
  topicSlug: 'sat-reading-writing-strategy-sat',
  sections: [
    {
      id: 'rw6-intro',
      type: 'text' as const,
      content: `# Rhetorical Synthesis

**Part 6 of 7 — Notes-Based Questions**

A new question type on the Digital SAT presents you with bullet-point **notes** from a student's research and asks you to write a sentence that accomplishes a specific goal.

### Format

You'll see something like:

**Notes:**
- The James Webb Space Telescope (JWST) launched in December 2021
- JWST orbits the sun at Lagrange Point 2, about 1 million miles from Earth
- Its primary mirror is 6.5 meters in diameter, compared to Hubble's 2.4 meters  
- JWST primarily observes infrared light, while Hubble observes visible and ultraviolet light

**Question:** "The student wants to emphasize a difference between JWST and Hubble. Which choice most effectively uses the notes to accomplish this goal?"

### Strategy

1. **Read the goal carefully** — What does the question ask you to do?
2. **Identify which notes are relevant** to that specific goal
3. **Eliminate choices** that accomplish a DIFFERENT goal

### Common Goals

| Goal | What to Look For |
|---|---|
| "Emphasize a difference" | Answer must COMPARE two things |
| "Present a key finding" | Answer must state a result or discovery |
| "Introduce the topic to a new audience" | Answer should be general/accessible |
| "Support the claim that X" | Answer must directly support X |

### SAT Trap ⚠️

All four answer choices will use information from the notes. The trap is choosing an answer that's **factually correct** but doesn't **accomplish the stated goal**. Always re-read the goal before selecting your answer.`
    },
    {
      id: 'rw6-quiz',
      type: 'multiple-choice' as const,
      content: '**Rhetorical Synthesis Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Notes: Prairie dogs live in underground burrow systems called "towns." Some towns contain thousands of individuals. Prairie dogs use distinct alarm calls for different predators—one call for hawks, another for coyotes. Researchers believe this represents a sophisticated language system. Goal: "Emphasize the complexity of prairie dog communication."',
            options: ['"Prairie dogs use distinct alarm calls to differentiate between predators such as hawks and coyotes, which researchers consider a sophisticated language system."', '"Prairie dogs live in large underground burrow systems called towns that can contain thousands of individuals."', '"Researchers have studied prairie dogs to understand their underground living habitat and social behavior."', '"Prairie dogs, which live in underground towns, are found throughout the American Great Plains."'],
            correctAnswer: 0,
            explanation: 'The goal is about communication complexity. Only option A discusses alarm calls and language sophistication. The other options focus on habitat (B, D) or are too general (C).'
          },
          {
            question: 'When answering rhetorical synthesis questions, what should you do FIRST?',
            options: ['Underline the specific goal stated in the question', 'Read all the notes carefully', 'Look at the answer choices', 'Identify the main topic of the notes'],
            correctAnswer: 0,
            explanation: 'The goal is everything in these questions. All answers will be factually based on the notes, but only one achieves the stated goal. Reading the goal first focuses your evaluation.'
          }
        ]
      }
    }
  ]
};"""

    parts[7] = r"""export const satRWStrategyPart7Data = {
  topicSlug: 'sat-reading-writing-strategy-sat',
  sections: [
    {
      id: 'rw7-intro',
      type: 'text' as const,
      content: `# R&W Module Review & Test Strategy

**Part 7 of 7 — Putting It All Together**

### Digital SAT R&W Structure

| Module | Questions | Time | Focus |
|---|---|---|---|
| **Module 1** | 27 | 32 min | Mix of reading & writing |
| **Module 2** | 27 | 32 min | Adaptive difficulty based on Module 1 |

### Question Type Distribution

| Type | ~Questions Per Module |
|---|---|
| Craft and Structure | 6-7 |
| Information and Ideas | 6-7 |
| Standard English Conventions | 6-7 |
| Expression of Ideas | 6-7 |

### Time Strategy: The 70-Second Rule

- 32 minutes ÷ 27 questions = ~71 seconds per question
- **Easy questions:** 30-45 seconds (save time for harder ones)
- **Medium questions:** 60-90 seconds
- **Hard questions:** Flag and return if over 2 minutes

### Decision Framework for Writing Questions

1. Is there a grammar error? → Fix it (conventions)
2. Is there wordiness? → Choose concise option (eliminate redundancy)
3. Is there a transition? → Identify the relationship (addition, contrast, cause)
4. Is it a rhetorical synthesis? → Match the stated goal

### Final Tips

- **Read answer choices vertically** — compare what's different between them to identify what's being tested
- **On pronouns:** Always check what the pronoun refers to
- **On transitions:** Cover the transition word and predict the relationship first
- **On conciseness:** Among grammatically correct choices, shorter is usually better
- **When stuck:** Eliminate the two most obviously wrong choices, then compare the remaining two carefully`
    },
    {
      id: 'rw7-quiz',
      type: 'multiple-choice' as const,
      content: '**Comprehensive R&W Review** 🎯',
      exercise: {
        questions: [
          {
            question: '"The study, which was conducted by researchers at MIT, _____ that sleep deprivation affects memory." Which answer is most concise and correct?',
            options: ['found', 'was able to find out and determine', 'found and concluded definitively', 'had the finding that'],
            correctAnswer: 0,
            explanation: 'All convey similar meaning, but "found" is the most concise. The SAT consistently rewards eliminating unnecessary words. "Was able to find out and determine" is redundant; "had the finding that" is wordy.'
          },
          {
            question: 'Approximately how many seconds should you spend on each R&W question?',
            options: ['About 70 seconds (32 min ÷ 27 questions)', 'About 30 seconds to leave time for review', 'About 2 minutes per question', 'Exactly 60 seconds'],
            correctAnswer: 0,
            explanation: '32 minutes ÷ 27 questions = approximately 71 seconds each. Budget less time for easy questions (30-45s) and more for hard ones (up to 2 minutes), but 70 seconds is the target average.'
          },
          {
            question: '"The new medication proved effective. _____, it carried fewer side effects than existing treatments." Best transition:',
            options: ['Moreover — adds another positive point', 'However — this contrasts with effectiveness', 'Therefore — side effects are a result of effectiveness', 'For example — side effects illustrate effectiveness'],
            correctAnswer: 0,
            explanation: 'Both sentences present positive aspects of the medication. "Moreover" adds supporting information. "However" would imply contrast (but both points are positive). "Therefore" implies causation that isn\'t present.'
          }
        ]
      }
    }
  ]
};"""

    print("Generating R&W Strategy (7 parts)...")
    for i in range(1, 8):
        write_file(f"sat-sat-reading-writing-strategy-sat-part{i}.ts", parts[i])


###############################################################################
# EXPRESSION OF IDEAS (7 parts)
###############################################################################

def gen_expression_ideas():
    parts = {}

    parts[1] = r"""export const satExpressionPart1Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei1-intro',
      type: 'text' as const,
      content: `# Effective Language Use

**Part 1 of 7 — Precision and Word Choice**

Expression of Ideas questions test whether you can choose the most **precise**, **effective**, and **appropriate** word or phrase for a given context.

### Precision Over Generality

The SAT rewards **specific** language over **vague** language.

| Vague | Precise |
|---|---|
| "The results were good" | "The results showed a 23% improvement" |
| "The politician talked about problems" | "The senator addressed income inequality" |
| "The thing that happened" | "The earthquake that struck in March" |
| "They did stuff about it" | "The committee implemented new regulations" |

### Tone Matching

Your word choice must match the passage's established tone:

- **Academic/Formal:** "The findings corroborate previous research."
- **Journalistic/Neutral:** "The study supports earlier work."
- **Informal (rare on SAT):** "The study backs up what we already knew."

The SAT will include a correct-but-wrong-tone answer choice as a trap.

### Connotation Awareness

Words can have similar denotations but different connotations:

| Positive | Neutral | Negative |
|---|---|---|
| **thrifty** | economical | **cheap** |
| **confident** | self-assured | **arrogant** |
| **youthful** | young | **immature** |
| **firm** | decided | **stubborn** |

Choose the word whose connotation matches the author's attitude.`
    },
    {
      id: 'ei1-quiz',
      type: 'multiple-choice' as const,
      content: '**Precision Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '"The scientist _____ that the species had migrated further north than any previous study had documented." Which verb is most precise?',
            options: ['discovered', 'found out', 'knew about', 'saw'],
            correctAnswer: 0,
            explanation: '"Discovered" implies finding something new and previously unknown, which matches documenting something no previous study had shown. "Found out" is informal, "knew about" implies prior knowledge, and "saw" is too literal.'
          },
          {
            question: 'In a formal academic passage about economic policy, which word best replaces "things got worse"?',
            options: ['conditions deteriorated', 'stuff declined', 'things went downhill', 'the situation got bad'],
            correctAnswer: 0,
            explanation: '"Conditions deteriorated" matches academic tone perfectly. "Stuff" and "things" are informal, and "went downhill" is colloquial.'
          },
          {
            question: 'A passage praises an architect\'s innovative design. Which word best describes her approach? "Her _____ approach to public spaces transformed urban design."',
            options: ['visionary', 'weird', 'radical', 'unusual'],
            correctAnswer: 0,
            explanation: 'The passage praises the architect, so we need a positive connotation. "Visionary" (positive), "weird" (negative), "radical" (neutral-to-negative in this context), "unusual" (neutral but underwhelming). "Visionary" best matches the praising tone.'
          }
        ]
      }
    }
  ]
};"""

    parts[2] = r"""export const satExpressionPart2Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei2-intro',
      type: 'text' as const,
      content: `# Organization & Logical Sequence

**Part 2 of 7 — Paragraph Organization**

These questions ask you to place a sentence in the best location within a paragraph, or to determine the most logical order for ideas.

### Sentence Placement Strategy

When asked "Where should this sentence be placed?" look for:

1. **Referential links:** Does the sentence mention something that must come AFTER its introduction?
2. **Transition clues:** Does it start with "However," "Additionally," "For example"?
3. **Chronological order:** Does it describe an event that happened before or after other events?
4. **General → Specific:** Broad claims usually come before supporting details

### Example

**Paragraph order question:**

[1] Monarch butterflies migrate up to 3,000 miles each fall.  
[2] They navigate using a combination of the sun's position and Earth's magnetic field.  
[3] Scientists were puzzled by this navigational ability for decades.  
[4] Recent research identified magnetite crystals in their antennae as the key biological compass.

**Best order:** 1, 3, 2, 4

Because: Introduce the behavior (1) → puzzle about it (3) → describe the ability (2) → explain the discovery (4).

### Transition Signals for Placement

| If the sentence starts with... | It likely goes... |
|---|---|
| "For example" or "For instance" | AFTER a general claim |
| "However" or "Nevertheless" | AFTER a point it contradicts |
| "As a result" or "Consequently" | AFTER a cause |
| "First" / "Finally" | At the start / end of a sequence |
| "This" + noun | AFTER the noun is introduced |`
    },
    {
      id: 'ei2-quiz',
      type: 'multiple-choice' as const,
      content: '**Organization Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Where should this sentence go? "This discovery challenged the long-held assumption that birds were the only animals capable of true migration navigation." [1] Sea turtles have been tracked traveling thousands of miles. [2] Researchers attached GPS devices to 40 turtles. [3] [INSERT] [4] Further studies confirmed that turtles use Earth\'s magnetic signature to find their birth beaches.',
            options: ['Position 3 is correct—it responds to the GPS tracking findings and leads into further studies', 'Position 1—it should open the paragraph', 'After position 4—as a concluding statement', 'Position 2—between the introduction and the tracking study'],
            correctAnswer: 0,
            explanation: 'The sentence discusses a "discovery" (the GPS tracking results from sentence 2) and "challenged" an assumption (setting up the confirmation in sentence 4). Position 3 creates a logical flow: track→discover→challenge assumption→confirm.'
          },
          {
            question: 'A sentence begins "This phenomenon, known as..." It most logically follows a sentence that:',
            options: ['Describes the phenomenon without naming it', 'Provides a statistic about the phenomenon', 'Concludes the paragraph', 'Introduces an unrelated concept'],
            correctAnswer: 0,
            explanation: '"This phenomenon, known as..." uses "this" to refer back to something just described and then provides its technical name. It must follow the description of that phenomenon.'
          }
        ]
      }
    }
  ]
};"""

    parts[3] = r"""export const satExpressionPart3Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei3-intro',
      type: 'text' as const,
      content: `# Effective Introductions & Conclusions

**Part 3 of 7 — Opening and Closing Sentences**

The SAT may ask which sentence best introduces or concludes a paragraph or passage. Strong openings and closings share specific characteristics.

### Effective Topic Sentences (Paragraph Openers)

A good topic sentence:
- States the paragraph's main point
- Connects to the previous paragraph (if not the first)
- Is general enough to cover the paragraph's content
- Is specific enough to give direction

**Test:** Can you predict what the paragraph will discuss from the topic sentence alone?

✅ "While solar panels reduce electricity costs, their manufacturing process raises environmental concerns."  
→ You can predict: the paragraph will discuss environmental downsides of solar panel production.

❌ "Solar panels are interesting."  
→ Too vague — could go anywhere.

### Effective Conclusions

A conclusion should:
- NOT introduce new information
- Synthesize or summarize the main point
- Sometimes look forward (implications, significance)

### Bad Conclusion Signals

- Introduces a brand-new topic
- Asks a question that the paragraph hasn't addressed
- Contradicts the paragraph's argument
- Restates the introduction word-for-word (too mechanical)`
    },
    {
      id: 'ei3-quiz',
      type: 'multiple-choice' as const,
      content: '**Introduction & Conclusion Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'A paragraph discusses how composting reduces landfill waste and produces nutrient-rich soil. Which is the best concluding sentence?',
            options: ['By diverting organic waste from landfills and enriching soil, composting offers a practical solution to two environmental challenges simultaneously.', 'Recycling is another important environmental practice that people should consider.', 'The history of composting dates back thousands of years to ancient civilizations.', 'There are many types of composting bins available at hardware stores.'],
            correctAnswer: 0,
            explanation: 'A good conclusion synthesizes the paragraph\'s two main points (waste reduction + soil enrichment). Option B introduces a new topic, C goes backward to history, and D introduces commercial information not discussed.'
          },
          {
            question: 'Which would be the best topic sentence for a paragraph about the decline of honeybee populations?',
            options: ['Honeybee populations have declined by nearly 40% in the past decade, threatening both agriculture and ecosystem stability.', 'Honeybees are fascinating creatures that live in complex social colonies.', 'Many people are allergic to bee stings.', 'Scientists have studied insects for centuries.'],
            correctAnswer: 0,
            explanation: 'This topic sentence names the issue (decline), quantifies it (40%), situates it in time (past decade), and explains its significance (agriculture + ecosystems). The other options are either too general or off-topic.'
          }
        ]
      }
    }
  ]
};"""

    parts[4] = r"""export const satExpressionPart4Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei4-intro',
      type: 'text' as const,
      content: `# Synthesis & Integrating Information

**Part 4 of 7 — Combining Ideas Effectively**

Synthesis questions ask you to combine information from multiple sources or multiple parts of a passage into a single, coherent statement.

### Combining with Relative Clauses

Two choppy sentences:
- "Marie Curie discovered radium in 1898."
- "She was the first woman to win a Nobel Prize."

Combined: "Marie Curie, **who was the first woman to win a Nobel Prize**, discovered radium in 1898."

### Combining with Appositives

An appositive renames or describes a noun:
- "Dr. Marcus Thompson, **a leading cardiologist at Johns Hopkins**, published the study."

### Combining with Participial Phrases

- "The hurricane destroyed 500 homes." + "It caused \\$2 billion in damage."
- → "**Destroying 500 homes**, the hurricane caused \\$2 billion in damage."

### Which Information to Keep?

When combining, ask: **What is the most important information for the passage's purpose?**

If the passage is about scientific achievement:
✅ Keep: discovery, impact, significance
❌ Cut: biographical trivia, exact dates (unless relevant)

### SAT Trap ⚠️

Trap answers combine the information correctly but **change the emphasis** or **relationship** between ideas. Always check that the relative importance of each idea is preserved.`
    },
    {
      id: 'ei4-quiz',
      type: 'multiple-choice' as const,
      content: '**Synthesis Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which best combines these sentences? "The Great Barrier Reef spans 2,300 kilometers. It is the world\'s largest coral reef system. It is visible from space."',
            options: ['The Great Barrier Reef, the world\'s largest coral reef system, spans 2,300 kilometers and is visible from space.', 'Spanning 2,300 kilometers, the Great Barrier Reef is large and visible from space, being the world\'s largest coral reef system.', 'The world\'s largest coral reef system is the Great Barrier Reef, which spans 2,300 kilometers, and it is visible from space.', 'The Great Barrier Reef spans 2,300 kilometers; it is the world\'s largest coral reef system; it is visible from space.'],
            correctAnswer: 0,
            explanation: 'Option A uses an appositive cleanly, flows well, and preserves all three pieces of information. The other options are either wordy (B), structurally awkward (C), or just a list with semicolons (D).'
          },
          {
            question: 'When combining sentences on the SAT, the most important factor is:',
            options: ['Maintaining the original meaning while improving flow', 'Making the sentence as short as possible', 'Using the most complex grammatical structure', 'Keeping every word from both original sentences'],
            correctAnswer: 0,
            explanation: 'The SAT values clarity and flow. You can cut words, but you must not change the meaning. Brevity and complexity are secondary to preserving meaning and improving readability.'
          }
        ]
      }
    }
  ]
};"""

    parts[5] = r"""export const satExpressionPart5Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei5-intro',
      type: 'text' as const,
      content: `# Style, Tone, and Audience

**Part 5 of 7 — Matching Register and Purpose**

The SAT tests whether you can adjust language to fit the passage's style, audience, and purpose.

### Register Levels

| Register | Audience | Example |
|---|---|---|
| **Formal/Academic** | Scholars, specialists | "The data substantiate the hypothesis" |
| **Professional** | General educated audience | "The study supports the theory" |
| **Informal** | Friends, casual setting | "The study totally backs it up" |

### The SAT almost always uses **professional** register. But occasionally you'll see:
- **Science passages:** More formal, technical vocabulary
- **Literary narratives:** More descriptive, figurative
- **Social science:** Analytical, balanced

### Consistency Rule

Within a single passage, tone must stay consistent. If a passage is formal throughout, inserting a casual phrase is wrong.

❌ "The researchers meticulously documented each specimen and they basically found a lot of new stuff."  
✅ "The researchers meticulously documented each specimen and identified several previously unknown species."

### Audience-Appropriate Detail

When the question asks about what information to include:
- **Expert audience:** Can skip basic definitions
- **General audience:** Needs brief explanations of technical terms
- **The SAT reader:** Assumed to be a general educated reader`
    },
    {
      id: 'ei5-quiz',
      type: 'multiple-choice' as const,
      content: '**Style & Tone Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'In a formal scientific passage, which phrase best replaces "Scientists figured out that the gene was messed up"?',
            options: ['Researchers determined that the gene contained a deleterious mutation', 'Scientists found that the gene was broken', 'The gene was found to be messed up by researchers', 'Science people discovered a gene problem'],
            correctAnswer: 0,
            explanation: '"Researchers determined" is formal and precise. "Deleterious mutation" is proper scientific terminology. The other options use informal language ("broken," "messed up," "science people") inappropriate for an academic passage.'
          },
          {
            question: 'A passage about art history consistently uses formal language. Which sentence best fits? "Monet\'s late works _____."',
            options: ['demonstrate an increasingly abstract approach to color and light', 'are really amazing and beautiful paintings', 'show he was getting into different stuff toward the end', 'basically changed how everyone thought about art'],
            correctAnswer: 0,
            explanation: '"Demonstrate" and "increasingly abstract approach" match formal art criticism tone. The other options are too casual for the passage\'s established register.'
          }
        ]
      }
    }
  ]
};"""

    parts[6] = r"""export const satExpressionPart6Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei6-intro',
      type: 'text' as const,
      content: `# Cohesion & Paragraph Unity

**Part 6 of 7 — Keeping Paragraphs Focused**

Cohesion questions ask whether a sentence belongs in a paragraph, or whether the paragraph maintains a consistent focus.

### The Unity Test

Every sentence in a paragraph should support the topic sentence. If a sentence introduces unrelated information, it should be deleted.

### "Should the writer add/delete this sentence?"

When you see this question type:

**Reasons to ADD:**
- Provides needed context or definition
- Supports the paragraph's main claim with evidence
- Creates a logical transition

**Reasons to DELETE:**
- Introduces information unrelated to the paragraph's focus
- Repeats what's already been stated
- Contradicts the paragraph without purpose

### Example

**Topic sentence:** "Urban rooftop gardens provide multiple environmental benefits."

✅ Keep: "They reduce stormwater runoff by up to 50%." (supports environmental benefits)  
✅ Keep: "Rooftop vegetation lowers building temperatures by 5-10°F." (supports environmental benefits)  
❌ Delete: "The first rooftop garden in New York was installed in 1882." (historical trivia, not about benefits)

### Logical Connectors for Cohesion

Sentences should connect to each other. Look for:
- **Pronouns** pointing back (this, these, such)
- **Repeated key terms** or synonyms
- **Transitions** that show the relationship`
    },
    {
      id: 'ei6-quiz',
      type: 'multiple-choice' as const,
      content: '**Cohesion & Unity Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'A paragraph argues that public libraries promote literacy. A writer wants to add: "Libraries also serve as community meeting spaces and warming centers during winter." Should this sentence be added?',
            options: ['No—it introduces services unrelated to the paragraph\'s focus on literacy', 'Yes—it shows libraries are important', 'Yes—all library benefits should be included', 'No—the sentence is too long'],
            correctAnswer: 0,
            explanation: 'The paragraph is specifically about literacy. Meeting spaces and warming centers are valuable library functions but are off-topic here. Adding this would weaken the paragraph\'s focus.'
          },
          {
            question: 'Which question should you ask yourself when deciding if a sentence belongs?',
            options: ['Does this sentence directly support the paragraph\'s topic sentence?', 'Is this sentence interesting to read?', 'Is this sentence grammatically correct?', 'Is this the longest sentence in the paragraph?'],
            correctAnswer: 0,
            explanation: 'Paragraph unity means every sentence supports the topic. A sentence can be interesting, grammatically perfect, and any length—but if it doesn\'t support the topic sentence, it doesn\'t belong.'
          }
        ]
      }
    }
  ]
};"""

    parts[7] = r"""export const satExpressionPart7Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei7-intro',
      type: 'text' as const,
      content: `# Expression of Ideas Review

**Part 7 of 7 — Comprehensive Review**

### Quick Decision Guide

| Question Asks About | Look For |
|---|---|
| **Best word/phrase** | Precision, tone match, correct connotation |
| **Sentence placement** | Reference links, transition clues, chronology |
| **Best introduction** | Covers paragraph scope, connects to previous |
| **Best conclusion** | Synthesizes (no new info), looks forward |
| **Add/delete sentence** | Does it support the topic sentence? |
| **Combine sentences** | Preserve meaning, improve flow |
| **Rhetorical synthesis** | Match the stated goal, not just accuracy |

### Common Mistakes on Expression Questions

1. **Choosing "sounds sophisticated" over "fits the passage"** — An answer can be well-written but wrong if it doesn't match the tone or purpose
2. **Ignoring the stated goal** on synthesis questions — Read the goal twice
3. **Adding information that's interesting but off-topic** — Every sentence must serve the paragraph
4. **Choosing the longest option** — Longer ≠ better; often the trap

### Test Day Checklist ✅

Before choosing your answer on any Expression question:
- [ ] Does it match the passage's tone?
- [ ] Is it the most precise option?
- [ ] Does it accomplish the stated goal?
- [ ] Would removing it weaken the paragraph?
- [ ] Is it the most concise correct option?`
    },
    {
      id: 'ei7-quiz',
      type: 'multiple-choice' as const,
      content: '**Expression of Ideas Final Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage about marine conservation uses formal language throughout. Which sentence best fits at the end of a paragraph about coral bleaching? "The implications of a 2°C ocean temperature rise _____."',
            options: ['could prove catastrophic for reef ecosystems that support approximately 25% of all marine species', 'would be really bad for all the fish and stuff living near coral', 'might possibly maybe cause some issues for ocean life', 'are worrisome, concerning, and deeply troubling to scientists and researchers worldwide'],
            correctAnswer: 0,
            explanation: 'Option A is precise (2°C, 25%), formal, and specific. B is informal, C is hedging with redundant qualifiers, and D is redundant ("worrisome, concerning, and deeply troubling" all mean the same thing).'
          },
          {
            question: 'When asked "Which choice most effectively accomplishes the goal?" the key word is:',
            options: ['"Goal" — you must identify and match the specific stated objective', '"Effectively" — choose the most sophisticated writing', '"Choice" — compare all options before deciding', '"Most" — pick the longest, most detailed option'],
            correctAnswer: 0,
            explanation: 'The stated goal is the deciding factor. All choices will be grammatically correct and use information from the notes. Only one actually accomplishes the specific goal asked for.'
          }
        ]
      }
    }
  ]
};"""

    print("Generating Expression of Ideas (7 parts)...")
    for i in range(1, 8):
        write_file(f"sat-sat-expression-ideas-sat-part{i}.ts", parts[i])


###############################################################################
# GEOMETRY & ANGLES (7 parts)
###############################################################################

def gen_geometry():
    parts = {}

    parts[1] = r"""export const satGeometryPart1Data = {
  topicSlug: 'sat-geometry-angles-sat',
  sections: [
    {
      id: 'geo1-intro',
      type: 'text' as const,
      content: `# Geometry: Lines, Angles, and Triangles

**Part 1 of 7 — Angle Relationships**

Geometry accounts for roughly 10-15% of SAT Math questions. Mastering angle relationships gives you quick points.

### Fundamental Angle Rules

- **Supplementary angles:** Sum to $180°$
- **Complementary angles:** Sum to $90°$
- **Vertical angles:** Equal (formed by intersecting lines)
- **Angles on a straight line:** Sum to $180°$

### Parallel Lines Cut by a Transversal

When a line crosses two parallel lines, it creates 8 angles with key relationships:

- **Corresponding angles** are equal (same position at each intersection)
- **Alternate interior angles** are equal (opposite sides, between parallels)
- **Alternate exterior angles** are equal (opposite sides, outside parallels)
- **Co-interior (same-side interior) angles** sum to $180°$

### Triangle Angle Sum

The angles in any triangle sum to $180°$.

If a triangle has angles $55°$ and $70°$:
$$\\text{Third angle} = 180° - 55° - 70° = 55°$$

This is an isosceles triangle (two equal angles → two equal sides).

### Exterior Angle Theorem

An exterior angle of a triangle equals the sum of the two non-adjacent interior angles.

$$\\text{Exterior angle} = \\text{Remote interior}_1 + \\text{Remote interior}_2$$

### SAT Trap ⚠️

When the SAT shows a figure with parallel lines, check if they actually SAY the lines are parallel. "Looks parallel" ≠ IS parallel. Look for arrows or explicit statements.`
    },
    {
      id: 'geo1-quiz',
      type: 'multiple-choice' as const,
      content: '**Angle Relationships Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Two parallel lines are cut by a transversal. One of the angles formed is $65°$. What is the measure of the co-interior angle on the same side?',
            options: ['$115°$', '$65°$', '$25°$', '$130°$'],
            correctAnswer: 0,
            explanation: 'Co-interior angles (same-side interior) are supplementary: $180° - 65° = 115°$.'
          },
          {
            question: 'An exterior angle of a triangle measures $130°$. One of the non-adjacent interior angles is $55°$. What is the other non-adjacent interior angle?',
            options: ['$75°$', '$50°$', '$125°$', '$55°$'],
            correctAnswer: 0,
            explanation: 'Exterior angle = sum of remote interiors: $130° = 55° + x$, so $x = 75°$.'
          },
          {
            question: 'In a triangle, the three angles are in the ratio $2:3:4$. What is the largest angle?',
            options: ['$80°$', '$60°$', '$90°$', '$100°$'],
            correctAnswer: 0,
            explanation: '$2x + 3x + 4x = 180°$ → $9x = 180°$ → $x = 20°$. Largest angle: $4 \\times 20° = 80°$.'
          }
        ]
      }
    }
  ]
};"""

    parts[2] = r"""export const satGeometryPart2Data = {
  topicSlug: 'sat-geometry-angles-sat',
  sections: [
    {
      id: 'geo2-intro',
      type: 'text' as const,
      content: `# Triangle Properties & Theorems

**Part 2 of 7 — Special Triangles, Similarity, Congruence**

### Special Right Triangles

The SAT provides these in the reference sheet, but memorizing them saves time:

**45-45-90 Triangle:**
- Legs: $x$, $x$
- Hypotenuse: $x\\sqrt{2}$

**30-60-90 Triangle:**
- Short leg: $x$ (opposite 30°)
- Long leg: $x\\sqrt{3}$ (opposite 60°)
- Hypotenuse: $2x$ (opposite 90°)

### Example

A 30-60-90 triangle has a hypotenuse of 10. Find the legs.

- Hypotenuse $= 2x = 10$ → $x = 5$
- Short leg $= 5$
- Long leg $= 5\\sqrt{3} \\approx 8.66$

### Triangle Inequality Theorem

For any triangle with sides $a$, $b$, $c$:
$$a + b > c$$

The sum of any two sides must exceed the third.

**Example:** Can a triangle have sides 3, 5, and 9?  
$3 + 5 = 8 < 9$ → **No!**

### Similar Triangles (AA Similarity)

If two angles of one triangle equal two angles of another, the triangles are **similar** (same shape, proportional sides).

$$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$$

### SAT Trap ⚠️

In 30-60-90 triangles, students often mix up which leg is which. Remember: the **shortest side** is opposite the **smallest angle** (30°).`
    },
    {
      id: 'geo2-quiz',
      type: 'multiple-choice' as const,
      content: '**Triangle Properties Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'A 45-45-90 triangle has a hypotenuse of $10\\sqrt{2}$. What is the length of each leg?',
            options: ['$10$', '$10\\sqrt{2}$', '$5\\sqrt{2}$', '$20$'],
            correctAnswer: 0,
            explanation: 'Hypotenuse $= x\\sqrt{2} = 10\\sqrt{2}$, so $x = 10$. Each leg is $10$.'
          },
          {
            question: 'Which set of three lengths CANNOT form a triangle?',
            options: ['$2, 3, 6$', '$3, 4, 5$', '$5, 5, 8$', '$7, 10, 12$'],
            correctAnswer: 0,
            explanation: 'Check: $2 + 3 = 5 < 6$. The sum of the two shorter sides must EXCEED the longest side. Since $5 < 6$, these cannot form a triangle.'
          },
          {
            question: 'Two similar triangles have a scale factor of $3:5$. If the perimeter of the smaller triangle is 24, what is the perimeter of the larger?',
            options: ['$40$', '$30$', '$36$', '$72$'],
            correctAnswer: 0,
            explanation: 'Perimeters of similar triangles are in the same ratio as their sides: $\\frac{24}{P} = \\frac{3}{5}$ → $P = \\frac{24 \\times 5}{3} = 40$.'
          }
        ]
      }
    }
  ]
};"""

    parts[3] = r"""export const satGeometryPart3Data = {
  topicSlug: 'sat-geometry-angles-sat',
  sections: [
    {
      id: 'geo3-intro',
      type: 'text' as const,
      content: `# Area, Perimeter, and Quadrilaterals

**Part 3 of 7 — Polygons and Their Properties**

### Essential Area Formulas

| Shape | Area | Perimeter |
|---|---|---|
| Rectangle | $A = lw$ | $P = 2l + 2w$ |
| Square | $A = s^2$ | $P = 4s$ |
| Triangle | $A = \\frac{1}{2}bh$ | $P = a + b + c$ |
| Parallelogram | $A = bh$ | $P = 2a + 2b$ |
| Trapezoid | $A = \\frac{1}{2}(b_1 + b_2)h$ | Sum of all sides |

### Key Insight: Height ≠ Side Length

The **height** (altitude) is the **perpendicular** distance from base to top. In non-right triangles and parallelograms, the height is NOT the same as a side length.

### Coordinate Geometry Areas

For a rectangle or right triangle on the coordinate plane:
- Find the lengths of the sides using the distance formula or by counting grid units
- Apply the appropriate area formula

### Shaded Region Problems

**Strategy:**
$$\\text{Shaded area} = \\text{Total area} - \\text{Unshaded area}$$

**Example:** A circle of radius 5 is inscribed in a square. Find the shaded area (corners).

- Square area: $(2 \\times 5)^2 = 100$
- Circle area: $\\pi(5)^2 = 25\\pi \\approx 78.54$
- Shaded area: $100 - 25\\pi \\approx 21.46$

### SAT Trap ⚠️

In "shaded region" problems, make sure you subtract the RIGHT shape. Draw the overlapping shapes clearly and label dimensions.`
    },
    {
      id: 'geo3-quiz',
      type: 'multiple-choice' as const,
      content: '**Area & Perimeter Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'A trapezoid has parallel sides of length 8 and 14, with a height of 6. What is its area?',
            options: ['$66$', '$84$', '$48$', '$132$'],
            correctAnswer: 0,
            explanation: '$A = \\frac{1}{2}(b_1 + b_2)h = \\frac{1}{2}(8 + 14)(6) = \\frac{1}{2}(22)(6) = 66$.'
          },
          {
            question: 'A rectangle has area 48 and width 6. What is its perimeter?',
            options: ['$28$', '$24$', '$20$', '$54$'],
            correctAnswer: 0,
            explanation: 'Length $= 48 ÷ 6 = 8$. Perimeter $= 2(8) + 2(6) = 16 + 12 = 28$.'
          },
          {
            question: 'A square has a diagonal of $6\\sqrt{2}$. What is its area?',
            options: ['$36$', '$72$', '$18$', '$6$'],
            correctAnswer: 0,
            explanation: 'The diagonal of a square with side $s$ is $s\\sqrt{2}$. So $s\\sqrt{2} = 6\\sqrt{2}$, meaning $s = 6$. Area $= 6^2 = 36$.'
          }
        ]
      }
    }
  ]
};"""

    parts[4] = r"""export const satGeometryPart4Data = {
  topicSlug: 'sat-geometry-angles-sat',
  sections: [
    {
      id: 'geo4-intro',
      type: 'text' as const,
      content: `# Circles: Arc Length, Sector Area, Central Angles

**Part 4 of 7 — Circle Geometry**

### Circle Fundamentals

| Property | Formula |
|---|---|
| Circumference | $C = 2\\pi r = \\pi d$ |
| Area | $A = \\pi r^2$ |
| Arc length | $L = \\frac{\\theta}{360°} \\times 2\\pi r$ |
| Sector area | $A_{\\text{sector}} = \\frac{\\theta}{360°} \\times \\pi r^2$ |

Where $\\theta$ is the central angle in degrees.

### The Proportion Rule

A central angle of $\\theta°$ creates an arc that is $\\frac{\\theta}{360}$ of the full circle. This fraction applies to BOTH arc length AND sector area.

**Example:** A circle with radius 10 has a central angle of $72°$.

- Arc length $= \\frac{72}{360} \\times 2\\pi(10) = \\frac{1}{5} \\times 20\\pi = 4\\pi$
- Sector area $= \\frac{72}{360} \\times \\pi(10)^2 = \\frac{1}{5} \\times 100\\pi = 20\\pi$

### Inscribed Angle Theorem

An inscribed angle is HALF the central angle that subtends the same arc.

$$\\text{Inscribed angle} = \\frac{1}{2} \\times \\text{Central angle}$$

**Special case:** An inscribed angle that subtends a diameter (semicircle) is always $90°$.

### Tangent Lines

A tangent to a circle is perpendicular to the radius at the point of tangency (`
    },
    {
      id: 'geo4-quiz',
      type: 'multiple-choice' as const,
      content: '**Circle Geometry Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'A circle has radius 12. What is the area of a sector with central angle $90°$?',
            options: ['$36\\pi$', '$144\\pi$', '$72\\pi$', '$12\\pi$'],
            correctAnswer: 0,
            explanation: 'Sector area $= \\frac{90}{360} \\times \\pi(12)^2 = \\frac{1}{4} \\times 144\\pi = 36\\pi$.'
          },
          {
            question: 'An inscribed angle measures $35°$. What is the measure of the central angle subtending the same arc?',
            options: ['$70°$', '$35°$', '$17.5°$', '$145°$'],
            correctAnswer: 0,
            explanation: 'Central angle $= 2 \\times$ inscribed angle $= 2 \\times 35° = 70°$.'
          },
          {
            question: 'A circle has circumference $20\\pi$. What is its area?',
            options: ['$100\\pi$', '$400\\pi$', '$10\\pi$', '$200\\pi$'],
            correctAnswer: 0,
            explanation: '$C = 2\\pi r = 20\\pi$, so $r = 10$. Area $= \\pi(10)^2 = 100\\pi$.'
          }
        ]
      }
    }
  ]
};"""

    parts[5] = r"""export const satGeometryPart5Data = {
  topicSlug: 'sat-geometry-angles-sat',
  sections: [
    {
      id: 'geo5-intro',
      type: 'text' as const,
      content: `# Volume and Surface Area

**Part 5 of 7 — 3D Figures**

The SAT reference sheet includes these formulas, but knowing them cold saves time.

### Volume Formulas

| Shape | Volume |
|---|---|
| Rectangular prism | $V = lwh$ |
| Cylinder | $V = \\pi r^2 h$ |
| Cone | $V = \\frac{1}{3}\\pi r^2 h$ |
| Sphere | $V = \\frac{4}{3}\\pi r^3$ |
| Pyramid | $V = \\frac{1}{3}Bh$ (where $B$ = base area) |

### Surface Area

| Shape | Surface Area |
|---|---|
| Rectangular prism | $SA = 2(lw + lh + wh)$ |
| Cylinder | $SA = 2\\pi r^2 + 2\\pi rh$ |
| Sphere | $SA = 4\\pi r^2$ |

### Common SAT Problem: Filling and Draining

"A cylindrical tank has radius 3 ft and height 10 ft. Water fills it at 2 cubic feet per minute. How long until it's full?"

$$V = \\pi(3)^2(10) = 90\\pi \\approx 282.7 \\text{ ft}^3$$
$$\\text{Time} = \\frac{90\\pi}{2} = 45\\pi \\approx 141.4 \\text{ minutes}$$

### Scaling Rule for 3D

If dimensions are scaled by factor $k$:
- **Lengths** scale by $k$
- **Areas** scale by $k^2$
- **Volumes** scale by $k^3$

**Example:** If you double all dimensions of a box, its volume increases by $2^3 = 8$ times.`
    },
    {
      id: 'geo5-quiz',
      type: 'multiple-choice' as const,
      content: '**Volume & Surface Area Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'A cone and a cylinder have the same radius and height. The volume of the cone is:',
            options: ['$\\frac{1}{3}$ of the cylinder\'s volume', '$\\frac{1}{2}$ of the cylinder\'s volume', 'Equal to the cylinder\'s volume', '$\\frac{2}{3}$ of the cylinder\'s volume'],
            correctAnswer: 0,
            explanation: 'Cone volume $= \\frac{1}{3}\\pi r^2 h$, cylinder volume $= \\pi r^2 h$. The cone is exactly $\\frac{1}{3}$ of the cylinder.'
          },
          {
            question: 'A sphere has surface area $100\\pi$. What is its volume?',
            options: ['$\\frac{500\\pi}{3}$', '$\\frac{400\\pi}{3}$', '$500\\pi$', '$100\\pi$'],
            correctAnswer: 0,
            explanation: '$SA = 4\\pi r^2 = 100\\pi$ → $r^2 = 25$ → $r = 5$. Volume $= \\frac{4}{3}\\pi(5)^3 = \\frac{500\\pi}{3}$.'
          },
          {
            question: 'A model building is a 1:50 scale replica. If the model has volume 8 cubic inches, the real building has volume:',
            options: ['$1{,}000{,}000$ cubic inches', '$400$ cubic inches', '$125{,}000$ cubic inches', '$50{,}000$ cubic inches'],
            correctAnswer: 0,
            explanation: 'Volume scales by $k^3$. Scale factor is 50, so real volume $= 8 \\times 50^3 = 8 \\times 125{,}000 = 1{,}000{,}000$ cubic inches.'
          }
        ]
      }
    }
  ]
};"""

    parts[6] = r"""export const satGeometryPart6Data = {
  topicSlug: 'sat-geometry-angles-sat',
  sections: [
    {
      id: 'geo6-intro',
      type: 'text' as const,
      content: `# Coordinate Geometry

**Part 6 of 7 — Distance, Midpoint, and Equations of Lines/Circles**

### Distance Formula

$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

This is just the Pythagorean theorem applied to the coordinate plane.

### Midpoint Formula

$$M = \\left(\\frac{x_1 + x_2}{2},\\, \\frac{y_1 + y_2}{2}\\right)$$

### Slope

$$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\text{rise}}{\\text{run}}$$

**Parallel lines:** Same slope ($m_1 = m_2$)  
**Perpendicular lines:** Negative reciprocal slopes ($m_1 \\times m_2 = -1$)

### Equation of a Circle

Standard form: $(x - h)^2 + (y - k)^2 = r^2$

- Center: $(h, k)$
- Radius: $r$

**Example:** $(x - 3)^2 + (y + 2)^2 = 25$
- Center: $(3, -2)$ ← note: $y + 2$ means $k = -2$
- Radius: $\\sqrt{25} = 5$

### Converting General Form to Standard Form (Completing the Square)

$x^2 + y^2 - 6x + 4y - 12 = 0$

Group and complete the square:
$(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$
$(x - 3)^2 + (y + 2)^2 = 25$

### SAT Trap ⚠️

When reading circle equations, remember: $(x - h)^2$ means the center's x-coordinate is $+h$, and $(y + k)^2$ means the center's y-coordinate is $-k$. The signs flip!`
    },
    {
      id: 'geo6-quiz',
      type: 'multiple-choice' as const,
      content: '**Coordinate Geometry Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is the distance between $(1, 4)$ and $(7, 12)$?',
            options: ['$10$', '$8$', '$6\\sqrt{2}$', '$14$'],
            correctAnswer: 0,
            explanation: '$d = \\sqrt{(7-1)^2 + (12-4)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.'
          },
          {
            question: 'A line passes through $(2, 5)$ and has slope $-3$. A perpendicular line through the same point has slope:',
            options: ['$\\frac{1}{3}$', '$3$', '$-\\frac{1}{3}$', '$-3$'],
            correctAnswer: 0,
            explanation: 'Perpendicular slopes are negative reciprocals. The negative reciprocal of $-3$ is $\\frac{1}{3}$ (flip and change sign).'
          },
          {
            question: 'The equation $x^2 + y^2 + 8x - 6y = 0$ represents a circle. What is its center?',
            options: ['$(-4, 3)$', '$(4, -3)$', '$(8, -6)$', '$(-8, 6)$'],
            correctAnswer: 0,
            explanation: 'Complete the square: $(x^2 + 8x + 16) + (y^2 - 6y + 9) = 0 + 16 + 9$ → $(x+4)^2 + (y-3)^2 = 25$. Center: $(-4, 3)$.'
          }
        ]
      }
    }
  ]
};"""

    parts[7] = r"""export const satGeometryPart7Data = {
  topicSlug: 'sat-geometry-angles-sat',
  sections: [
    {
      id: 'geo7-intro',
      type: 'text' as const,
      content: `# Geometry Review & SAT Strategy

**Part 7 of 7 — Comprehensive Review**

### Formula Quick Reference

| Category | Key Formulas |
|---|---|
| **Angles** | Triangle sum $= 180°$, exterior angle $=$ sum of remotes |
| **Triangles** | $A = \\frac{1}{2}bh$, Pythagorean theorem: $a^2 + b^2 = c^2$ |
| **Special △** | 30-60-90: $x, x\\sqrt{3}, 2x$; 45-45-90: $x, x, x\\sqrt{2}$ |
| **Circles** | $C = 2\\pi r$, $A = \\pi r^2$, sector $= \\frac{\\theta}{360}$ of full |
| **Volume** | Cylinder $= \\pi r^2 h$, Cone $= \\frac{1}{3}\\pi r^2 h$, Sphere $= \\frac{4}{3}\\pi r^3$ |
| **Coordinate** | $d = \\sqrt{\\Delta x^2 + \\Delta y^2}$, circle: $(x-h)^2 + (y-k)^2 = r^2$ |

### Common SAT Geometry Question Patterns

1. **"Find the missing angle"** → Use angle sum rules
2. **"Find the area of the shaded region"** → Total minus unshaded
3. **"Similar triangles"** → Set up proportions
4. **"Volume word problem"** → Identify the shape, plug into formula
5. **"Coordinate geometry"** → Distance, midpoint, or circle equation

### Strategy: Draw It

If the SAT doesn't give you a figure, **draw one yourself**. Even a rough sketch helps you avoid errors.

If they DO give you a figure:
- **"Not drawn to scale"** → Don't trust visual proportions
- **"Figure drawn to scale"** → You can estimate to eliminate wrong answers

### Top 3 Geometry Mistakes

1. Using the wrong formula (mixing up circumference and area)
2. Forgetting to take the square root when finding radius from area
3. Not converting units (e.g., diameter given but formula needs radius)`
    },
    {
      id: 'geo7-quiz',
      type: 'multiple-choice' as const,
      content: '**Geometry Comprehensive Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'A right triangle has legs 5 and 12. What is the area?',
            options: ['$30$', '$60$', '$13$', '$17$'],
            correctAnswer: 0,
            explanation: 'Area $= \\frac{1}{2}(5)(12) = 30$. Note: the hypotenuse is $13$ (5-12-13 triple) but that\'s the perimeter trap—the question asks for area.'
          },
          {
            question: 'A cylinder has volume $200\\pi$ and radius 5. What is its height?',
            options: ['$8$', '$40$', '$4$', '$10$'],
            correctAnswer: 0,
            explanation: '$V = \\pi r^2 h$ → $200\\pi = \\pi(25)h$ → $h = \\frac{200}{25} = 8$.'
          },
          {
            question: 'Two similar triangles have areas 16 and 64. What is the ratio of their corresponding sides?',
            options: ['$1:2$', '$1:4$', '$1:8$', '$4:16$'],
            correctAnswer: 0,
            explanation: 'Area ratio $= $ (side ratio)$^2$. So $\\frac{16}{64} = \\frac{1}{4} = k^2$, meaning $k = \\frac{1}{2}$. Side ratio is $1:2$.'
          }
        ]
      }
    }
  ]
};"""

    print("Generating Geometry & Angles (7 parts)...")
    for i in range(1, 8):
        write_file(f"sat-sat-geometry-angles-sat-part{i}.ts", parts[i])


###############################################################################
# MAIN
###############################################################################

if __name__ == '__main__':
    print("=== SAT Batch 3: Reading Evidence, R&W Strategy, Expression of Ideas, Geometry ===")
    gen_reading_evidence()
    gen_rw_strategy()
    gen_expression_ideas()
    gen_geometry()
    print("\nDone! 28 files generated.")
