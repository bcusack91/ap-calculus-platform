import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Expanding SAT Expression of Ideas & Test Strategy topics with thorough content...\n')

  // ============================================================
  // TOPIC 1: Effective Language Use
  // ============================================================
  const effectiveLang = await prisma.topic.findUnique({
    where: { slug: 'sat-effective-language-use' }
  })

  if (effectiveLang) {
    await prisma.topic.update({
      where: { id: effectiveLang.id },
      data: {
        textContent: `# Effective Language Use on the SAT

## What the SAT Tests

The SAT Writing section tests your ability to choose words and phrases that:
1. Are **precise** — say exactly what is meant
2. Are **concise** — avoid unnecessary words
3. Are **appropriate** in style and tone
4. Are **effective** in achieving the author's purpose

---

## Precision: Choosing the Right Word

The right word expresses the exact intended meaning with no ambiguity.

**Example:**
- Weak: "The scientist *got* good results."
- Better: "The scientist *obtained* promising results."
- Best: "The scientist *achieved* statistically significant results."

### Strategy
Ask: Does this word convey EXACTLY what the author means? Is there a more specific word?

---

## Conciseness: Eliminating Wordiness

The SAT strongly prefers the **shortest answer that preserves the full meaning**.

### Common Wordy Phrases → Concise Alternatives

| Wordy | Concise |
|---|---|
| in order to | to |
| due to the fact that | because |
| at this point in time | now / currently |
| in the event that | if |
| for the purpose of | to / for |
| has the ability to | can |
| it is important to note that | (just state the fact) |
| the reason is because | because |
| in spite of the fact that | although / despite |
| a large number of | many |
| in close proximity to | near |
| on a daily basis | daily |
| in the near future | soon |

### Red Flags for Wordiness
If an answer choice is significantly longer than the others, it's probably wrong (unless the others have grammatical errors).

---

## Style and Tone

The answer must match the passage's overall **style and tone**.

- **Formal passage** → Use formal language (not slang)
- **Scientific passage** → Use precise, technical terms
- **Narrative passage** → Use vivid, descriptive language
- **Argumentative passage** → Use convincing, measured language

### Examples
- Too informal for an academic passage: "The results were really awesome."
- Appropriate: "The results were remarkably significant."

---

## Syntax: Sentence Variety

Good writing uses a MIX of sentence types:
- Simple sentences for emphasis
- Complex sentences for nuance
- Short sentences after long ones for impact

The SAT may test whether a revision improves sentence variety and flow.

---

## Rhetorical Effectiveness

Some questions ask which revision best accomplishes a specific purpose:
- "Which choice most effectively sets up the information that follows?"
- "Which choice best maintains the tone of the passage?"

### Strategy
1. Read the question's purpose CAREFULLY
2. Evaluate each choice against that specific purpose
3. Choose the one that best serves the stated goal

---

## Common SAT Mistakes

1. **Choosing the "fanciest" word** — precision beats complexity
2. **Adding unnecessary detail** — more words ≠ better writing
3. **Mismatching tone** — casual words in formal passages
4. **Ignoring redundancy** — "free gift" (gifts are already free)
5. **Overlooking the shorter answer** — conciseness is key
`
      }
    })

    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: effectiveLang.id,
          order: 10,
          difficulty: 'EASY',
          question: 'Which is most concise?\n(A) "She has the ability to speak three languages."\n(B) "She is able to speak three languages."\n(C) "She can speak three languages."\n(D) "She possesses the ability to speak three languages."',
          solution: `**Evaluate each option for conciseness:**

(A) "has the ability to" — 6 words for what can be said in 1 ❌
(B) "is able to" — 3 words, still wordy ❌
(C) "can" — 1 word, clear, complete meaning ✅ **BEST**
(D) "possesses the ability to" — 5 words, most verbose ❌

**All four convey THE SAME meaning.** The shortest one that preserves meaning wins.

**Answer:** **(C) "She can speak three languages."**

**SAT Rule:** When all choices have the same meaning, choose the shortest.`
        },
        {
          topicId: effectiveLang.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'In a formal scientific passage, which word best replaces "got"?\n"The researchers got data from 500 participants."\n(A) got\n(B) obtained\n(C) grabbed\n(D) scored',
          solution: `**Evaluate tone and precision:**

(A) "got" — too informal for a scientific passage ❌
(B) "obtained" — formal, precise, appropriate for scientific writing ✅
(C) "grabbed" — too casual/physical, implies snatching ❌
(D) "scored" — informal, more appropriate for sports or games ❌

**Answer:** **(B) "obtained"**

**"Got" is almost always replaced on the SAT** because it's vague and informal. Better alternatives:
- got (received) → obtained, acquired
- got (understood) → comprehended, grasped
- got (became) → became, grew
- got (arrived) → arrived, reached`
        },
        {
          topicId: effectiveLang.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'Identify the redundancy and fix it:\n"The biography tells the story of her past life history."',
          solution: `**Redundancies found:**

1. "biography" already means "the story of a life" → "tells the story" is redundant
2. "past" and "history" are redundant (history is inherently about the past)
3. "life history" is redundant with "biography"

**The sentence essentially says:** "The story-of-a-life tells the story of her past-events-of-the-past."

**Fix:** "The biography chronicles her life." ✅
Or: "The biography details her life." ✅

**Answer:** Remove "past" and restructure to eliminate the triple redundancy.

**Common SAT redundancies to watch for:**
- "past history" (history IS the past)
- "free gift" (gifts ARE free)
- "completely finished" (finished IS complete)
- "advance planning" (planning IS in advance)
- "end result" (a result IS the end)
- "repeat again" (repeat means to do again)
- "true facts" (facts ARE true)`
        },
        {
          topicId: effectiveLang.id,
          order: 13,
          difficulty: 'HARD',
          question: 'A passage about a community garden project ends: "The garden has become a place where neighbors meet." Which revision most effectively concludes the passage by emphasizing the garden\'s impact?\n(A) NO CHANGE\n(B) "The garden has transformed empty lots into productive spaces."\n(C) "The garden has become a vibrant community hub, fostering connections that extend far beyond its borders."\n(D) "The garden is nice."',
          solution: `**The question asks which "most effectively concludes by emphasizing impact":**

(A) "a place where neighbors meet" — Fine but generic, doesn't emphasize broader impact ❌

(B) "transformed empty lots into productive spaces" — Describes physical change, not community impact ❌

(C) "a vibrant community hub, fostering connections that extend far beyond its borders" — ✅
- "Vibrant community hub" = emphasizes community impact
- "Fostering connections" = shows the garden creates relationships
- "Extend far beyond its borders" = emphasizes wider, lasting impact
- This best accomplishes the question's goal

(D) "The garden is nice" — Too vague, too simple, no detail about impact ❌

**Answer:** **(C)** — it most strongly emphasizes the garden's impact on the community.

**Strategy for "most effectively" questions:**
1. Identify what the question asks you to accomplish
2. Evaluate each choice ONLY against that criterion
3. The answer with the strongest connection to the stated purpose wins`
        },
        {
          topicId: effectiveLang.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'A passage argues that standardized testing should be reformed. The underlined sentence reads: "Tests should be changed in some ways." Which revision most effectively supports the author\'s argument?\n(A) NO CHANGE\n(B) "The current testing system has problems that need to be fixed."\n(C) "Standardized assessments should incorporate performance-based tasks and portfolio reviews to measure a broader range of student competencies."\n(D) "Something should definitely be done about testing soon."',
          solution: `**Evaluate each against "most effectively supports the argument":**

(A) "Tests should be changed in some ways" — Extremely vague. What tests? What ways? Provides no substance. ❌

(B) "The current testing system has problems that need to be fixed" — Better than (A) but still vague. What problems? What fixes? ❌

(C) "Standardized assessments should incorporate performance-based tasks and portfolio reviews to measure a broader range of student competencies" — ✅
- Specific proposals (performance-based tasks, portfolio reviews)
- Clear purpose (measure broader competencies)
- Precise language matching the passage's formal tone
- Actually advances the argument with concrete ideas

(D) "Something should definitely be done about testing soon" — Even vaguer than (A). "Something" and "definitely" add no meaning. ❌

**Answer:** **(C)** — it provides specific, concrete support for the reform argument.

**SAT Principle:** Effective writing is SPECIFIC. Vague language like "some ways," "things," "stuff," or "something" weakens an argument. Choose the answer with concrete details.`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: effectiveLang.id,
          front: 'What does "conciseness" mean on the SAT?',
          back: 'Saying the same thing in fewer words. The shortest answer that preserves the full meaning is usually correct. "In order to" → "to." "Due to the fact that" → "because."',
          hint: 'Fewer words, same meaning'
        },
        {
          topicId: effectiveLang.id,
          front: 'What is redundancy?',
          back: 'Using multiple words that mean the same thing: "past history," "free gift," "completely finished," "advance planning." Eliminate the redundant word.',
          hint: 'Saying the same thing twice'
        },
        {
          topicId: effectiveLang.id,
          front: 'How do you handle "which choice most effectively" questions?',
          back: 'Read what specific PURPOSE the question states (set up information, emphasize a point, conclude, etc.). Evaluate each choice ONLY against that purpose. The one that best achieves the stated goal wins.',
          hint: 'Match the answer to the specific purpose stated'
        },
        {
          topicId: effectiveLang.id,
          front: 'When should you choose a longer answer over a shorter one?',
          back: 'Only when the shorter answers: (1) have grammatical errors, (2) are too vague to convey the meaning, or (3) don\'t accomplish the specific purpose the question requires. Otherwise, shorter wins.',
          hint: 'Only if short answers have errors or are too vague'
        },
        {
          topicId: effectiveLang.id,
          front: 'What is word precision?',
          back: 'Choosing the word that most exactly conveys the intended meaning. "The scientist **obtained** results" is more precise than "The scientist **got** results." Consider both meaning AND tone.',
          hint: 'The most exact word, not the fanciest'
        },
        {
          topicId: effectiveLang.id,
          front: 'How do you match tone on the SAT?',
          back: 'Read the surrounding passage. If it\'s formal and academic, the answer should be too. If it\'s narrative, match that style. An informal word in a formal passage (or vice versa) is usually wrong.',
          hint: 'The answer should sound like the rest of the passage'
        },
        {
          topicId: effectiveLang.id,
          front: 'What are SAT "red flag" phrases for wordiness?',
          back: '"In order to" (→to), "due to the fact that" (→because), "has the ability to" (→can), "at this point in time" (→now), "for the purpose of" (→to/for), "it is important to note" (→delete).',
          hint: 'Long phrases that can be replaced with one word'
        }
      ]
    })

    console.log('✓ sat-effective-language-use expanded')
  }

  // ============================================================
  // TOPIC 2: Transitions and Organization
  // ============================================================
  const transitions = await prisma.topic.findUnique({
    where: { slug: 'sat-transitions-organization' }
  })

  if (transitions) {
    await prisma.topic.update({
      where: { id: transitions.id },
      data: {
        textContent: `# Transitions and Organization on the SAT

## What Transition Questions Test

The SAT tests your ability to:
1. Choose the correct transition word or phrase
2. Place sentences in the most logical order
3. Add or delete sentences for coherence

---

## Transition Words by Category

### Addition (adding similar ideas)
Furthermore, Moreover, In addition, Also, Similarly, Likewise, Additionally

### Contrast (showing differences)
However, Nevertheless, On the other hand, In contrast, Conversely, Although, Despite, Yet, Still, Nonetheless

### Cause/Effect (showing results)
Therefore, Consequently, As a result, Thus, Hence, Accordingly, Because of this, For this reason

### Sequence/Time (showing order)
First, Second, Next, Then, Finally, Subsequently, Meanwhile, Previously, Afterward, Initially

### Example (illustrating a point)
For example, For instance, Specifically, In particular, To illustrate, Namely

### Conclusion/Summary
In conclusion, In summary, Overall, Ultimately, To sum up, In short

### Emphasis
Indeed, In fact, Certainly, Importantly, Notably

---

## How to Choose the Right Transition

### Step 1: Identify the Relationship
Read the sentence BEFORE and the sentence AFTER the transition. What's the logical relationship?

| Relationship | Transition |
|---|---|
| Sentence 2 adds to Sentence 1 | Furthermore, Moreover, Additionally |
| Sentence 2 contrasts Sentence 1 | However, In contrast, Nevertheless |
| Sentence 2 is caused by Sentence 1 | Therefore, As a result, Consequently |
| Sentence 2 gives an example | For example, For instance |
| Sentence 2 is next in sequence | Next, Then, Subsequently |

### Step 2: Test Your Choice
Read the sentences with the transition. Does the logical flow make sense?

---

## Sentence Placement Questions

"To make this paragraph most logical, sentence 3 should be placed..."

### Strategy:
1. Read the sentence in question — what does it say?
2. Look for **pronoun references** — "this," "these," "it" must refer to something in a previous sentence
3. Look for **logical flow** — does each sentence build on the previous?
4. Look for **chronological order** in narratives
5. Try placing the sentence in each option and read the paragraph aloud

---

## Add/Delete Questions

"Should the writer add/keep this sentence?"

### YES, keep it if:
- It provides a relevant example or evidence
- It supports the paragraph's main idea
- It aids the logical flow

### NO, delete it if:
- It's off-topic (introduces unrelated information)
- It's redundant (repeats what was already said)
- It disrupts the flow or logical progression
- It contradicts the passage's argument

---

## Common SAT Mistakes

1. Choosing a transition that SOUNDS good but creates the WRONG relationship
2. Confusing "however" (contrast) with "furthermore" (addition)
3. Not reading BOTH sentences around the transition
4. Placing sentences without checking pronoun references
5. Keeping irrelevant sentences because the information is "interesting"
`
      }
    })

    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: transitions.id,
          order: 10,
          difficulty: 'EASY',
          question: 'Choose the best transition:\n"The study found that exercise improves mood. __________, regular physical activity can reduce the risk of depression."\n(A) However\n(B) Furthermore\n(C) Instead\n(D) Nevertheless',
          solution: `**Step 1: What's the relationship?**
- Sentence 1: exercise improves mood (positive finding)
- Sentence 2: exercise reduces depression risk (another positive finding)

These sentences are ADDING similar ideas — both are benefits of exercise.

**Step 2: Match the transition:**
(A) "However" = contrast → these sentences don't contrast ❌
(B) "Furthermore" = addition → perfect! Adding another benefit ✅
(C) "Instead" = replacement → sentence 2 doesn't replace sentence 1 ❌
(D) "Nevertheless" = contrast → no contrast here ❌

**Answer:** **(B) Furthermore**

**Tip:** If both sentences point in the same direction (same argument, additional support), use an addition transition.`
        },
        {
          topicId: transitions.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'Choose the best transition:\n"The city invested millions in a new transit system. __________, ridership has remained below projections for three consecutive years."\n(A) Therefore\n(B) Similarly\n(C) Nevertheless\n(D) For example',
          solution: `**Step 1: What's the relationship?**
- Sentence 1: The city invested millions (positive action, big effort)
- Sentence 2: Ridership is below projections (disappointing result)

This is a **CONTRAST** — the big investment hasn't led to expected results.

**Step 2: Match the transition:**
(A) "Therefore" = cause/effect → This implies ridership SHOULD be low because they invested, which is wrong ❌
(B) "Similarly" = addition → These ideas aren't similar ❌
(C) "Nevertheless" = contrast → ✅ Despite the big investment, results are disappointing
(D) "For example" = illustration → Sentence 2 isn't an example of sentence 1 ❌

**Answer:** **(C) Nevertheless**

**"Nevertheless" vs. "However":** Both show contrast. "Nevertheless" emphasizes that something is true DESPITE what was said before. "However" is a more general contrast.`
        },
        {
          topicId: transitions.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'Should this sentence be added before sentence 4?\n\nSentence to add: "This technique was first developed in Japan in the 1950s."\n\nParagraph context: Discusses a modern manufacturing process, sentence 3 introduces the technique, sentence 4 describes how it works today.\n\n(A) Yes, because it provides historical context.\n(B) Yes, because it explains how the technique works.\n(C) No, because it interrupts the flow from introduction to explanation.\n(D) No, because it contradicts the passage.',
          solution: `**Analyze the placement:**

The paragraph flow is:
- Sentence 3: Introduces the technique
- [Proposed addition: History of the technique]
- Sentence 4: Describes how it works today

**Does the sentence fit here?**

**(A)** "provides historical context" — True, but is this the right PLACE for it? Between introduction and explanation, it could interrupt the flow.

**(B)** "explains how the technique works" — No, it gives history, not explanation. ❌

**(C)** "interrupts the flow from introduction to explanation" — ✅ The reader expects to learn HOW it works after the introduction, not a historical tangent.

**(D)** "contradicts the passage" — Nothing contradictory about stating when it was developed. ❌

**Answer:** **(C)** — While the information is relevant, placing it between the introduction and explanation disrupts the logical flow. It might fit better in a separate paragraph about the technique's history.

**SAT Key:** A sentence can be TRUE and RELEVANT but still be in the WRONG place. Always consider flow.`
        },
        {
          topicId: transitions.id,
          order: 13,
          difficulty: 'HARD',
          question: 'Reorder these sentences for the most logical paragraph:\n[1] "Today, solar panel efficiency has reached 22%."\n[2] "In 1954, Bell Labs created the first practical solar cell with 6% efficiency."\n[3] "Solar energy technology has advanced dramatically over the past seven decades."\n[4] "Researchers predict efficiency could exceed 30% within the next decade."',
          solution: `**Step 1: Identify the topic sentence:**
[3] "Solar energy technology has advanced dramatically..." — This is the broadest, most general statement. It introduces the paragraph's main idea.

**Step 2: Find the chronological order for supporting details:**
[2] "In 1954..." — Starting point (earliest time)
[1] "Today..." — Current status
[4] "Researchers predict..." — Future projection

**Logical order: [3], [2], [1], [4]**

**Reading it through:**
"Solar energy technology has advanced dramatically over the past seven decades. In 1954, Bell Labs created the first practical solar cell with 6% efficiency. Today, solar panel efficiency has reached 22%. Researchers predict efficiency could exceed 30% within the next decade."

✅ Topic sentence → historical start → present → future

**Why this works:**
- General statement first (topic sentence)
- Chronological progression (past → present → future)
- Each sentence builds on the previous
- The paragraph tells a coherent story of progress

**Answer:** [3], [2], [1], [4]`
        },
        {
          topicId: transitions.id,
          order: 14,
          difficulty: 'EXPERT',
          question: "In a five-sentence paragraph, sentence 3 reads: \"This phenomenon, which scientists call the 'observer effect,' has been demonstrated in numerous experiments.\" Where should this sentence be placed if sentence 1 introduces quantum mechanics, sentence 2 describes particles, sentence 4 describes a 1998 experiment, and sentence 5 concludes the paragraph?",
          solution: `**Analyze the clues in sentence 3:**

- "This phenomenon" → must refer to something already described (needs to come AFTER the phenomenon is mentioned)
- "which scientists call the 'observer effect'" → this DEFINES the term (should come BEFORE the term is used without definition)
- "has been demonstrated in numerous experiments" → sets up sentence 4 (which gives a SPECIFIC experiment)

**Check the current position (as sentence 3):**
- Sentence 2 describes particles → does it describe the phenomenon? If sentence 2 talks about how observing particles changes their behavior, then YES, "this phenomenon" refers to it.
- Sentence 4 describes a 1998 experiment → this is a specific example of the "numerous experiments" mentioned in sentence 3.

**Flow: Introduction (1) → Phenomenon description (2) → Name and general claim (3) → Specific example (4) → Conclusion (5)**

**Answer:** Sentence 3 should STAY where it is (position 3). It correctly:
1. Follows sentence 2 (which describes the phenomenon it references)
2. Names the phenomenon (defining "observer effect")
3. Makes a general claim ("numerous experiments")
4. Sets up sentence 4 (a specific experiment example)

**Strategy used:**
- "This" pronouns must follow their referent
- Definitions should precede usage of the term
- General claims should precede specific examples`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: transitions.id,
          front: 'What are the main categories of transition words?',
          back: '**Addition:** furthermore, moreover. **Contrast:** however, nevertheless. **Cause/Effect:** therefore, consequently. **Example:** for instance. **Sequence:** first, then, finally. **Conclusion:** in summary, overall.',
          hint: 'Add, contrast, cause, example, sequence, conclude'
        },
        {
          topicId: transitions.id,
          front: 'How do you choose the correct transition?',
          back: 'Read the sentence BEFORE and AFTER. Identify the relationship: Does sentence 2 add, contrast, result from, or illustrate sentence 1? Then choose the transition that matches that relationship.',
          hint: 'Identify the relationship between the two sentences'
        },
        {
          topicId: transitions.id,
          front: 'How do you answer sentence placement questions?',
          back: '1. Check pronoun references ("this," "it" must refer to a previous sentence), 2. Check logical/chronological order, 3. Try reading the paragraph with the sentence in each position, 4. Choose the position with the smoothest flow.',
          hint: 'Pronoun references and logical order'
        },
        {
          topicId: transitions.id,
          front: 'When should a sentence be DELETED from a passage?',
          back: 'Delete if it: is off-topic, is redundant (repeats earlier info), interrupts logical flow, or contradicts the argument. Keep if it adds relevant evidence, supports the main idea, or aids flow.',
          hint: 'Off-topic, redundant, or flow-disrupting'
        },
        {
          topicId: transitions.id,
          front: 'What is the difference between "however" and "therefore"?',
          back: '**However** = CONTRAST (the next idea opposes or differs from the previous). **Therefore** = CAUSE/EFFECT (the next idea is a result or consequence). These are opposites and cannot be interchanged!',
          hint: 'However contrasts; therefore shows consequence'
        },
        {
          topicId: transitions.id,
          front: 'What makes a good topic sentence?',
          back: 'A topic sentence: (1) is broad enough to cover the whole paragraph, (2) is specific enough to guide the reader, (3) usually comes first, (4) connects to the thesis of the passage.',
          hint: 'Broad enough for the paragraph, specific enough to guide'
        },
        {
          topicId: transitions.id,
          front: 'How do you handle "which sentence best concludes the paragraph" questions?',
          back: 'The concluding sentence should: summarize the paragraph\'s main point, connect back to the topic sentence, or transition to the next paragraph. It should NOT introduce new evidence or details.',
          hint: 'Summarize, connect back, or transition forward'
        }
      ]
    })

    console.log('✓ sat-transitions-organization expanded')
  }

  // ============================================================
  // TOPIC 3: Conciseness and Redundancy
  // ============================================================
  const concise = await prisma.topic.findUnique({
    where: { slug: 'sat-conciseness-redundancy' }
  })

  if (concise) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: concise.id,
          order: 10,
          difficulty: 'EASY',
          question: 'Which version is most concise?\n(A) "She returned back to her home."\n(B) "She returned to her home."\n(C) "She returned home."\n(D) "She went back and returned to her home again."',
          solution: `**Evaluate each for redundancy:**

(A) "returned **back**" — "returned" already means "went back." "Back" is redundant. ❌
(B) "returned **to her home**" — Correct but "home" can replace "to her home." Could be more concise. ❌
(C) "returned home" — ✅ Two words, complete meaning. Most concise.
(D) "went back and returned... again" — Triple redundancy! "Went back" = "returned" = "again" ❌

**Answer:** **(C) "She returned home."**

**Rule:** If a word already implies another word, don't include both:
- returned back → returned
- ascended up → ascended
- descended down → descended
- combined together → combined
- entered into → entered`
        },
        {
          topicId: concise.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'Eliminate the redundancy:\n"The two candidates each have different and distinct policy positions on a variety of many different issues."',
          solution: `**Identifying redundancies:**

1. "different and distinct" → These words mean the same thing. Pick one.
2. "a variety of many different" → Triple redundancy. "A variety of" = "many" = "different."

**Step-by-step reduction:**
Original: "The two candidates each have different and distinct policy positions on a variety of many different issues." (21 words)

Remove "and distinct": "The two candidates each have different policy positions on a variety of many different issues." (17 words)

Remove "a variety of" and "different": "The two candidates each have different policy positions on many issues." (12 words)

Remove "each" (implied by "two"): "The two candidates have different policy positions on many issues." (11 words)

**Answer:** "The two candidates have different policy positions on many issues." (11 words vs. original 21)

**Reduction:** Cut nearly 50% of the words while preserving full meaning.`
        },
        {
          topicId: concise.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'Choose the most concise version:\n(A) "Due to the fact that it was raining, the game was postponed and delayed until a later date."\n(B) "Because of the rain, the game was postponed until a later date."\n(C) "Because it rained, the game was postponed."\n(D) "The game was postponed on account of the fact that rain was falling."',
          solution: `**Evaluate each:**

(A) "Due to the fact that" (wordy for "because") + "postponed and delayed" (redundant — same meaning) + "until a later date" (redundant — postponing IS delaying to later) ❌

(B) "Because of the rain" (good) + "until a later date" (redundant with "postponed") ❌

(C) "Because it rained, the game was postponed." ✅
- "Because" = concise
- "postponed" = already implies delayed to a later date
- 7 words, full meaning preserved

(D) "on account of the fact that" (extremely wordy for "because") + "rain was falling" (wordy for "it rained") ❌

**Answer:** **(C)** — 7 words, no redundancy, complete meaning.

**Key insight:** "Postponed" already means "delayed to a later date," so adding "until a later date" is redundant.`
        },
        {
          topicId: concise.id,
          order: 13,
          difficulty: 'HARD',
          question: 'The passage says: "In today\'s modern contemporary society, many people are of the opinion that..." Which revision is best?\n(A) NO CHANGE\n(B) "In today\'s society, many people believe that..."\n(C) "In modern society, many believe that..."\n(D) "Many people believe that..."',
          solution: `**Analyze each choice:**

(A) "today's modern contemporary" — triple redundancy (today's = modern = contemporary). "Are of the opinion that" — wordy for "believe." ❌

(B) "In today's society, many people believe that..." — Still has unnecessary "In today's society" but improvement on the verb. ❌

(C) "In modern society, many believe that..." — Better, but "In modern society" is often unnecessary. ❌

(D) "Many people believe that..." — ✅ Most concise. "In today's modern contemporary society" is usually unnecessary context.

**However, context matters!**

If the passage is CONTRASTING modern views with historical ones, "In modern society" (choice C) provides necessary context.

If there's no such contrast, choice D is best — the phrase adds no meaning.

**Answer:** Most likely **(D)**, unless the passage specifically contrasts modern and historical perspectives, in which case **(C)**.

**SAT strategy:** Introductory phrases like "In today's society" are often filler. If the meaning is clear without them, cut them.`
        },
        {
          topicId: concise.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'A student writes: "The research study conducted an investigation and examination into and regarding the various different effects and impacts of social media usage and use on the mental health and psychological well-being of teenagers and adolescents." Make this concise.',
          solution: `**This sentence is spectacularly redundant. Let's identify EVERY redundancy:**

1. "research study" → both mean investigation (pick one)
2. "conducted an investigation and examination" → "investigated" or "examined"
3. "into and regarding" → pick one ("of")
4. "various different" → "various" already means "different"
5. "effects and impacts" → same meaning (pick one)
6. "social media usage and use" → redundant
7. "mental health and psychological well-being" → same concept
8. "teenagers and adolescents" → same group

**Concise version:**
"The study examined the effects of social media on teenagers' mental health."

**Word count comparison:**
- Original: 38 words
- Revised: 12 words
- Reduction: 68%!

**Answer:** "The study examined the effects of social media on teenagers' mental health." (12 words)

**The principle:** Every pair of synonyms should be reduced to one word. Every unnecessary modifier should be cut.`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: concise.id,
          front: 'What is the SAT\'s golden rule for conciseness?',
          back: 'Choose the **shortest answer that preserves the full meaning**. If two answers say the same thing, the shorter one is almost always correct.',
          hint: 'Shorter is almost always better'
        },
        {
          topicId: concise.id,
          front: 'Name 5 common redundant phrases.',
          back: '"Past history" (history IS past), "free gift" (gifts ARE free), "end result" (results ARE at the end), "completely finished" (finished IS complete), "advance planning" (planning IS in advance).',
          hint: 'Words that repeat the meaning already in the other word'
        },
        {
          topicId: concise.id,
          front: 'What wordy phrases should be replaced with single words?',
          back: '"Due to the fact that" → because. "In order to" → to. "Has the ability to" → can. "At this point in time" → now. "For the purpose of" → to. "In the event that" → if.',
          hint: 'Multi-word phrases with one-word equivalents'
        },
        {
          topicId: concise.id,
          front: 'When is "DELETE the underlined portion" the right answer?',
          back: 'When the underlined portion is: (1) redundant with other words in the sentence, (2) unnecessary filler, or (3) restates information already present. If removing it doesn\'t change the meaning, delete it.',
          hint: 'When removing changes nothing'
        },
        {
          topicId: concise.id,
          front: 'What is the difference between conciseness and simplicity?',
          back: '**Conciseness** = fewest words to express the FULL meaning. **Simplicity** = easy to understand. A concise sentence can still use sophisticated vocabulary — it just doesn\'t waste words.',
          hint: 'Concise means no wasted words, not dumbed down'
        },
        {
          topicId: concise.id,
          front: 'How do you spot redundancy on the SAT?',
          back: 'Look for: (1) two words/phrases that mean the same thing, (2) adjectives that restate the noun\'s meaning, (3) unnecessary qualifiers. Ask: "Does removing this word change the meaning?" If no → it\'s redundant.',
          hint: 'If removing it changes nothing, it is redundant'
        },
        {
          topicId: concise.id,
          front: 'Should you always choose the shortest answer?',
          back: 'Usually yes, BUT only if the shortest answer: (1) has no grammar errors, (2) preserves the full meaning, and (3) accomplishes the question\'s purpose. A longer answer is better if the shorter ones are incorrect or incomplete.',
          hint: 'Shortest wins unless it has errors or loses meaning'
        }
      ]
    })

    console.log('✓ sat-conciseness-redundancy expanded')
  }

  // ============================================================
  // TOPIC 4: Calculator Strategies
  // ============================================================
  const calcStrat = await prisma.topic.findUnique({
    where: { slug: 'calculator-strategies' }
  })

  if (calcStrat) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: calcStrat.id,
          order: 10,
          difficulty: 'EASY',
          question: 'On the SAT, which section allows a calculator and which does not?',
          solution: `**SAT Math has two sections:**

**Section 3: No Calculator** (25 minutes, 20 questions)
- Tests mental math and algebraic reasoning
- Problems are designed to be solved without a calculator
- Simpler arithmetic, but requires strong number sense

**Section 4: Calculator Allowed** (55 minutes, 38 questions)
- Calculator is permitted but NOT always needed
- Many questions are faster WITHOUT a calculator
- Calculator helps most with: statistics, complex arithmetic, graphing

**Key insight:** Having a calculator doesn't mean you should use it for every problem. Many "calculator-allowed" questions are faster by hand.

**Answer:** Section 3 = No Calculator, Section 4 = Calculator Allowed.`
        },
        {
          topicId: calcStrat.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'When should you use your calculator on the SAT and when should you not?',
          solution: `**USE your calculator for:**
1. **Complex arithmetic** — large numbers, decimals, fractions
2. **Graphing** — finding intersections, zeros, or behavior of functions
3. **Statistics** — mean, standard deviation, regression
4. **Checking work** — plug your answer back in
5. **Trigonometry** — when exact values aren't expected

**DON'T use your calculator for:**
1. **Simple algebra** — solving $2x + 5 = 11$ is faster by hand
2. **Factoring** — $x^2 + 5x + 6 = (x+2)(x+3)$ is faster mentally
3. **Estimation** — "approximately how many..." questions
4. **Conceptual questions** — "which graph represents..."
5. **Unit conversion** — set up the ratios first

**Rule of thumb:** If you can solve it in under 15 seconds by hand, don't pick up the calculator. Time spent entering numbers is time wasted.

**Answer:** Use calculators for complex computation; avoid for simple algebra and conceptual questions.`
        },
        {
          topicId: calcStrat.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'How can you use the graphing calculator to solve: $x^2 - 5x + 6 = 0$?',
          solution: `**Method 1: Graph and find zeros**
1. Enter $Y_1 = x^2 - 5x + 6$
2. Graph the function
3. Find where the graph crosses the x-axis (zeros/roots)
4. Use the ZERO function (2nd → CALC → 2:zero)
5. The zeros are $x = 2$ and $x = 3$

**Method 2: Table**
1. Enter $Y_1 = x^2 - 5x + 6$
2. Go to TABLE (2nd → TABLE)
3. Look for y-values of 0
4. At $x = 2$: $y = 0$ ✓
5. At $x = 3$: $y = 0$ ✓

**Method 3: Solver (some calculators)**
Enter the equation and let the calculator solve.

**By hand (faster for this problem!):**
$x^2 - 5x + 6 = (x-2)(x-3) = 0$
$x = 2$ or $x = 3$

**Lesson:** For simple quadratics, factoring by hand is faster. Use the calculator for complex quadratics that don't factor easily.

**Answer:** $x = 2$ and $x = 3$`
        },
        {
          topicId: calcStrat.id,
          order: 13,
          difficulty: 'HARD',
          question: 'Solve using a graphing calculator: "At what point(s) do $y = x^3 - 4x$ and $y = x^2 - 4$ intersect?"',
          solution: `**Calculator method:**

**Step 1:** Enter both functions:
- $Y_1 = x^3 - 4x$
- $Y_2 = x^2 - 4$

**Step 2:** Graph both and find intersections:
- Use 2nd → CALC → 5:intersect
- Move cursor near each intersection point
- Press ENTER three times to find each intersection

**Algebraic verification:**
Set equal: $x^3 - 4x = x^2 - 4$
$x^3 - x^2 - 4x + 4 = 0$
Factor: $x^2(x - 1) - 4(x - 1) = 0$
$(x^2 - 4)(x - 1) = 0$
$(x-2)(x+2)(x-1) = 0$
$x = 2, x = -2, x = 1$

**Find y-values:**
- $x = 2$: $y = 4 - 4 = 0$ → Point: $(2, 0)$
- $x = -2$: $y = 4 - 4 = 0$ → Point: $(-2, 0)$
- $x = 1$: $y = 1 - 4 = -3$ → Point: $(1, -3)$

**Answer:** Three intersection points: $(2, 0)$, $(-2, 0)$, and $(1, -3)$.`
        },
        {
          topicId: calcStrat.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'You solve an SAT problem and get $x = 3.5$, but the answer choices are all integers. What should you do?',
          solution: `**Don't panic. Here's your debugging checklist:**

**Step 1: Re-read the question**
- Did you answer what was actually asked? (Common: solving for $x$ when they want $2x$, or finding the value when they want the number of solutions)
- Check: "What is the value of $2x + 1$?" → If $x = 3.5$, then $2(3.5) + 1 = 8$ ✓

**Step 2: Check your arithmetic**
- Re-enter calculations in your calculator
- Check for sign errors
- Verify you copied the problem correctly

**Step 3: Check your setup**
- Did you read the problem correctly?
- Did you use the right formula?
- Did you set up the equation properly?

**Step 4: Try plugging in the answer choices**
- This is called "backsolving" — a powerful SAT strategy
- Try the middle value first, then adjust up or down
- This can be faster than solving algebraically

**Step 5: Consider the student-produced response format**
- If it's a grid-in question, 3.5 might actually be the correct answer!
- Grid-in answers CAN be non-integers: fractions and decimals are valid

**Answer:** Re-read the question (you may need a different expression), check your work, or try backsolving from the answer choices.`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: calcStrat.id,
          front: 'What type of calculator is best for the SAT?',
          back: 'A **graphing calculator** (TI-83, TI-84, or TI-Nspire). It can graph functions, find intersections, create tables, and compute statistics. Make sure you know how to use it BEFORE test day!',
          hint: 'TI-84 is the most popular choice'
        },
        {
          topicId: calcStrat.id,
          front: 'How do you find the intersection of two functions on a graphing calculator?',
          back: 'Enter as $Y_1$ and $Y_2$. Graph both. Press 2nd → CALC → 5:intersect. Move cursor near the intersection. Press ENTER three times.',
          hint: '2nd CALC 5:intersect'
        },
        {
          topicId: calcStrat.id,
          front: 'What is "backsolving" on the SAT?',
          back: 'Plugging the answer choices back into the problem to see which one works. Start with choice (B) or (C) (middle values). If the result is too small, try larger; if too large, try smaller.',
          hint: 'Try the answers instead of solving'
        },
        {
          topicId: calcStrat.id,
          front: 'Should you use a calculator for every problem in the calculator section?',
          back: 'NO! Many calculator-section problems are faster by hand. Use the calculator for complex arithmetic, graphing, and statistics. Simple algebra, factoring, and conceptual questions are faster without it.',
          hint: 'Many problems are faster without a calculator'
        },
        {
          topicId: calcStrat.id,
          front: 'How do you use the TABLE function?',
          back: 'Enter the function in $Y=$, then press 2nd → TABLE. You\'ll see x and y values. Use this to find zeros (y=0), evaluate functions at specific points, or compare two functions.',
          hint: '2nd TABLE shows x-y value pairs'
        },
        {
          topicId: calcStrat.id,
          front: 'What should you check on your calculator before the SAT?',
          back: '1. **Fresh batteries**, 2. **Degree mode** (not radians, unless specified), 3. **Memory cleared** (some testing centers require this), 4. **You know the key functions** (graph, table, calc menu).',
          hint: 'Batteries, mode, memory, and practice'
        },
        {
          topicId: calcStrat.id,
          front: 'What is "plugging in" numbers on the SAT?',
          back: 'Replace variables with simple numbers (like 2, 3, or 10) to test abstract problems. If a question asks "for all values of $x$," pick a simple $x$ value, calculate the answer, and see which choice matches.',
          hint: 'Substitute easy numbers to test abstract problems'
        }
      ]
    })

    console.log('✓ calculator-strategies expanded')
  }

  // ============================================================
  // TOPIC 5: Time Management
  // ============================================================
  const timeMgmt = await prisma.topic.findUnique({
    where: { slug: 'sat-time-management' }
  })

  if (timeMgmt) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: timeMgmt.id,
          order: 10,
          difficulty: 'EASY',
          question: 'How much time per question do you have on each SAT section?',
          solution: `**Time per question by section:**

| Section | Time | Questions | Per Question |
|---|---|---|---|
| Reading | 65 min | 52 Q | ~75 sec |
| Writing | 35 min | 44 Q | ~48 sec |
| Math No-Calc | 25 min | 20 Q | 75 sec |
| Math Calculator | 55 min | 38 Q | ~87 sec |

**Key takeaway:**
- **Writing** has the LEAST time per question (~48 seconds)
- **Math Calculator** has the MOST time per question (~87 seconds)
- **Reading** requires ~13 minutes per passage (including reading + questions)

**Strategy:** Don't spend the same amount of time on every question. Easy questions: 30-45 seconds. Hard questions: 60-90 seconds. If a question takes more than 2 minutes, skip and return.

**Answer:** Times range from ~48 sec (Writing) to ~87 sec (Calculator Math) per question.`
        },
        {
          topicId: timeMgmt.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'What is the best strategy for ordering passages on SAT Reading?',
          solution: `**Do your strongest passage type FIRST.**

**Common ordering strategies:**

**Strategy 1: Strength-based**
1. Start with your strongest passage type (e.g., science)
2. Then your second strongest
3. Save your weakest for last
4. Even if you run out of time, you've maximized your score

**Strategy 2: History First**
Some tutors recommend doing the history passage first while you're freshest, since it's often the hardest.

**Strategy 3: Paired Passage Last**
The dual passage set takes longer. Do single passages first.

**What NOT to do:**
- Don't always do passages in order (unless they're all equal for you)
- Don't spend 20 minutes on one passage and rush through four
- Don't skip a passage entirely — at least guess on its questions

**Time checkpoints:**
- After passage 1: ~13 minutes elapsed
- After passage 2: ~26 minutes elapsed
- After passage 3: ~39 minutes elapsed
- After passage 4: ~52 minutes elapsed
- After passage 5: ~65 minutes (done!)

**Answer:** Do your strongest passage type first to maximize score; do paired passages or your weakest last.`
        },
        {
          topicId: timeMgmt.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'You have 5 minutes left and 8 questions remaining on SAT Math. What do you do?',
          solution: `**Triage strategy for the final minutes:**

**Step 1: Scan all 8 questions (30 seconds)**
Identify which ones you can answer quickly vs. which require complex work.

**Step 2: Answer the EASIEST ones first**
- Multiple choice where you can backsolve
- Questions where you can estimate
- Short, straightforward calculations

**Step 3: For questions you can't solve:**
- Eliminate obviously wrong answers
- Make an educated guess from remaining choices
- NEVER leave anything blank (no penalty for guessing on the SAT!)

**Step 4: In the final 30 seconds:**
- Fill in an answer for EVERY remaining question
- Random guess on multiple choice = 25% chance (better than 0%)

**The math:**
- 8 questions × 25% random = ~2 correct = ~2 raw points
- With elimination of 1 choice: 33% = ~2.7 correct
- Skipping them = 0 points

**Answer:** Quickly solve what you can, eliminate wrong answers on the rest, and NEVER leave anything blank.`
        },
        {
          topicId: timeMgmt.id,
          order: 13,
          difficulty: 'HARD',
          question: 'Describe a complete time management plan for all four SAT sections.',
          solution: `**Complete SAT Time Plan:**

---

**SECTION 1: READING (65 minutes, 52 questions)**
- 13 minutes per passage (5 passages)
- Read passage: ~4-5 minutes
- Answer questions: ~8-9 minutes
- Set checkpoints at 13, 26, 39, 52 minutes
- If behind, speed up reading and use process of elimination

---

**SECTION 2: WRITING (35 minutes, 44 questions)**
- ~8 minutes per passage (4 passages, 11 questions each)
- Read paragraph → answer questions in order
- Most questions take 30-45 seconds
- Don't over-think grammar — trust your ear + rules
- Set checkpoint at 17 minutes (should be through 2 passages)

---

**SECTION 3: MATH NO-CALC (25 minutes, 20 questions)**
- First 15 questions (multiple choice): ~18 minutes (~72 sec each)
- Last 5 questions (grid-in): ~7 minutes (~84 sec each)
- Questions get harder as you go — spend less time on early, more on later
- Skip anything taking >2 minutes; return if time permits

---

**SECTION 4: MATH CALCULATOR (55 minutes, 38 questions)**
- First 30 questions (multiple choice): ~40 minutes (~80 sec each)
- Last 8 questions (grid-in): ~15 minutes (~112 sec each)
- Use calculator for complex calculations, NOT for simple algebra
- Checkpoint at 27 minutes: should be through ~19 questions

---

**Universal rules:**
1. Never spend more than 2 minutes on one question
2. Never leave anything blank
3. Mark skipped questions clearly and return to them`
        },
        {
          topicId: timeMgmt.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'A student completes SAT Math sections with 10 minutes to spare but makes careless errors. How should they adjust their time strategy?',
          solution: `**This student needs to SLOW DOWN and use extra time for checking.**

**Adjusted strategy:**

**Phase 1: First Pass (original pace minus 10 min)**
- Work through all questions at current pace
- Mark answers you're uncertain about with a star (★)
- Note questions that required complex calculations

**Phase 2: Review Starred Questions (4-5 minutes)**
- Return to uncertain questions
- Re-read the problem — did you answer what was ASKED?
- Try a different approach if your first method seemed shaky

**Phase 3: Error-Check Strategy (5 minutes)**
For each "check," spend 15-20 seconds:

1. **Plug answers back in** — substitute your answer into the original equation
2. **Estimate and verify** — does your answer make sense? (negative distance? 200% probability?)
3. **Check units** — did you convert correctly?
4. **Re-read the question** — did they ask for $x$ or $2x$? Perimeter or area?

**Common careless errors to watch:**
- Sign errors (negative signs)
- Reading the wrong answer choice
- Solving for the wrong variable
- Calculator entry errors
- Misreading graphs

**Answer:** Use the 10 minutes of spare time to systematically check work: plug in answers, estimate reasonableness, re-read questions, and verify calculations.`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: timeMgmt.id,
          front: 'What is the #1 time management rule for the SAT?',
          back: 'Never spend more than **2 minutes** on a single question. If you\'re stuck, skip it, mark it, and come back. One hard question isn\'t worth missing three easy ones.',
          hint: 'Two-minute maximum'
        },
        {
          topicId: timeMgmt.id,
          front: 'Is there a penalty for guessing on the SAT?',
          back: '**NO!** There is no penalty for wrong answers on the current SAT. ALWAYS answer every question, even if you have to guess randomly. A random guess has a 25% chance of being correct.',
          hint: 'No penalty — always guess!'
        },
        {
          topicId: timeMgmt.id,
          front: 'How should you order SAT Reading passages?',
          back: 'Do your **strongest passage type first** (science, literature, or history — whichever you\'re best at). Save your weakest for last. This maximizes your score even if you run short on time.',
          hint: 'Play to your strengths first'
        },
        {
          topicId: timeMgmt.id,
          front: 'What are time checkpoints for SAT Math (Calculator)?',
          back: '55 minutes, 38 questions. Checkpoint: By 27 minutes, you should be through ~19 questions (halfway). If you\'re behind, skip harder problems and focus on ones you can solve quickly.',
          hint: 'Half the time = half the questions'
        },
        {
          topicId: timeMgmt.id,
          front: 'What should you do with extra time on the SAT?',
          back: '**Check your work!** (1) Plug answers back into equations, (2) re-read questions to make sure you answered what was asked, (3) check for sign errors and unit conversions, (4) review starred/uncertain answers.',
          hint: 'Use it to catch careless errors'
        },
        {
          topicId: timeMgmt.id,
          front: 'How should you handle the hardest questions?',
          back: 'On SAT Math, questions get harder toward the end of each section. For the hardest ones: (1) eliminate choices, (2) try backsolving, (3) make an educated guess if needed. Don\'t let them eat your time.',
          hint: 'Eliminate, backsolve, or educated guess'
        },
        {
          topicId: timeMgmt.id,
          front: 'What is "triaging" on the SAT?',
          back: 'Quickly classifying questions as: **Easy** (do first, 30-45 sec), **Medium** (do second, 60-90 sec), or **Hard** (do last, or skip). This ensures you get all the easy points first.',
          hint: 'Sort questions by difficulty, do easiest first'
        }
      ]
    })

    console.log('✓ sat-time-management expanded')
  }

  // ============================================================
  // TOPIC 6: Process of Elimination
  // ============================================================
  const poe = await prisma.topic.findUnique({
    where: { slug: 'process-of-elimination' }
  })

  if (poe) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: poe.id,
          order: 10,
          difficulty: 'EASY',
          question: 'On a multiple-choice question, you\'re certain that choices A and D are wrong but can\'t decide between B and C. What are your odds and what should you do?',
          solution: `**The math:**

- Random guess from 4 choices: $\\frac{1}{4} = 25\\%$
- After eliminating 2 choices: $\\frac{1}{2} = 50\\%$

You've DOUBLED your odds just by eliminating!

**What to do:**
1. Re-read the question carefully — did you miss a clue?
2. Look for subtle differences between B and C
3. Check if one is "too extreme" (SAT prefers moderate answers)
4. If you're still stuck, GUESS — 50% is great odds
5. Mark the question and return if time permits

**Key principle:** Even eliminating ONE wrong answer improves your odds from 25% to 33%. Eliminating TWO gives you 50%.

**Answer:** You have a 50% chance of getting it right. Make your best guess, mark it, and move on.`
        },
        {
          topicId: poe.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'What are common "wrong answer" patterns on SAT Reading that help with elimination?',
          solution: `**Five types of wrong answers to eliminate:**

**1. Too Extreme**
Contains words like "always," "never," "proves," "all," "none," "completely."
SAT correct answers usually use softer language: "suggests," "may," "often," "some."

**2. Too Narrow (Overly Specific)**
Focuses on one detail when the question asks about the whole passage.
"The passage is mainly about the author's childhood bicycle" when the passage covers the author's entire life.

**3. Too Broad (Overly General)**
Goes beyond the scope of the passage.
"The passage argues all governments should reform" when it only discusses one country.

**4. Distortion (Almost Right)**
Contains elements from the passage but changes, reverses, or misrepresents them.
Passage says "A causes B." Answer says "B causes A." Close but WRONG.

**5. Outside Knowledge**
Uses information that may be TRUE but is NOT in the passage.
On the SAT, only passage-based answers are correct.

**Strategy:** Before choosing the "right" answer, eliminate wrong ones. You can often eliminate 2-3 choices quickly using these patterns.

**Answer:** Look for extreme language, scope issues, distortions, and outside knowledge.`
        },
        {
          topicId: poe.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'On SAT Math, you need to find $x$ in $3x + 7 = 22$. The choices are: (A) 3, (B) 5, (C) 7, (D) 10. How do you use backsolving?',
          solution: `**Backsolving: Plug each answer choice into the equation.**

(A) $x = 3$: $3(3) + 7 = 9 + 7 = 16 \\neq 22$ ❌
(B) $x = 5$: $3(5) + 7 = 15 + 7 = 22$ ✅ **This is it!**
(No need to check C and D)

**Time spent:** About 15 seconds (faster than solving algebraically for some students)

**Backsolving strategy:**
1. Start with choice (B) or (C) — the middle values
2. If the result is too small, go higher (C or D)
3. If the result is too large, go lower (A or B)
4. This is especially useful for complex equations

**When backsolving is best:**
- When you're not sure how to set up the algebra
- When the answer choices are simple numbers
- When the equation is complex but easy to evaluate
- When you want to CHECK your algebraic solution

**Answer:** (B) $x = 5$`
        },
        {
          topicId: poe.id,
          order: 13,
          difficulty: 'HARD',
          question: 'On SAT Writing, the question asks for the best transition. You can eliminate two choices but the remaining two both seem reasonable. How do you decide?',
          solution: `**When two transition answers seem correct:**

**Step 1: Re-read the SURROUNDING sentences carefully**
- Read the sentence BEFORE the transition
- Read the sentence AFTER the transition
- What is the EXACT relationship? (Addition? Contrast? Cause?)

**Step 2: Check for subtle differences**
- "However" vs. "Moreover" → completely opposite relationships
- "Therefore" vs. "Nevertheless" → one shows cause, the other shows contrast
- "For example" vs. "In addition" → one illustrates, the other adds

**Step 3: Read both options in context**
Replace the transition with each option and read the full paragraph. Which one creates better logical flow?

**Step 4: Trust the LOGIC, not the sound**
Sometimes an answer "sounds right" but creates the wrong logical relationship. Focus on MEANING.

**Example:**
"The company cut costs. _____, it hired 200 new employees."
- "Therefore" would mean cutting costs CAUSED hiring → possible but unusual
- "Nevertheless" means DESPITE cutting costs, they hired → more logical in context

**Answer:** Focus on the exact logical relationship. Read both in context. Choose the one that creates the correct meaning, not just the one that sounds pleasant.`
        },
        {
          topicId: poe.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'Describe a systematic process of elimination strategy for SAT questions you find difficult.',
          solution: `**The Systematic POE Framework:**

**Step 1: Read and Understand (15-20 sec)**
- Read the question stem carefully
- Identify exactly what's being asked
- Note any key qualifiers ("best," "most likely," "primary")

**Step 2: First Pass Elimination (15-20 sec)**
Go through each choice quickly:
- ❌ Obviously wrong? Cross it out
- ✅ Possibly correct? Keep it
- ? Unsure? Keep it for now
Goal: Eliminate at least 1-2 choices

**Step 3: Second Pass Comparison (20-30 sec)**
For remaining choices:
- Compare them AGAINST EACH OTHER (not in isolation)
- Which one more precisely answers the SPECIFIC question asked?
- Check for the common traps: too extreme, too narrow, distortion

**Step 4: Final Decision (10 sec)**
- If you're still torn: go with your first instinct (research shows it's usually right)
- If it's truly 50/50: pick one and move on — don't agonize
- Mark the question to revisit if time permits

**Mindset tips:**
- You don't need to find the "right" answer — find the LEAST wrong answer
- Every elimination improves your odds significantly
- It's OK to not be 100% certain — educated guesses score points

**Expected outcomes:**
- Eliminate 1 → 33% chance (up from 25%)
- Eliminate 2 → 50% chance
- Eliminate 3 → 100% chance!

**Answer:** Read → eliminate obvious wrong answers → compare remaining → choose the best and move on.`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: poe.id,
          front: 'What is Process of Elimination (POE)?',
          back: 'Instead of finding the right answer, **eliminate wrong answers** first. Even if you can\'t find the right answer, removing wrong ones improves your odds. Eliminate 2 of 4 = 50% chance.',
          hint: 'Remove wrong answers to improve odds'
        },
        {
          topicId: poe.id,
          front: 'What does "too extreme" mean as a wrong answer?',
          back: 'Answers with absolute language: always, never, all, none, proves, completely, certainly. The SAT prefers moderate answers: suggests, may, often, some, tends to, can.',
          hint: 'Absolute words are usually wrong'
        },
        {
          topicId: poe.id,
          front: 'What is "backsolving"?',
          back: 'Plugging answer choices back into the problem to see which one works. Start with the middle value (B or C). If the result is too small → try larger. Too large → try smaller.',
          hint: 'Test the answers instead of solving'
        },
        {
          topicId: poe.id,
          front: 'How much do your odds improve by eliminating one answer?',
          back: 'From **25% to 33%** (1 in 3 instead of 1 in 4). Eliminating two: **50%**. Eliminating three: **100%**. ALWAYS eliminate what you can before guessing.',
          hint: 'Each elimination significantly improves odds'
        },
        {
          topicId: poe.id,
          front: 'What is a "distortion" wrong answer?',
          back: 'An answer that uses words or ideas from the passage but changes, reverses, or misrepresents them. "A causes B" becomes "B causes A." Close to the passage but subtly wrong.',
          hint: 'Almost right but changes a key detail'
        },
        {
          topicId: poe.id,
          front: 'Should you change your answer if you\'re unsure?',
          back: 'Research shows your **first instinct is usually correct** — about 60% of the time. Only change your answer if you find a clear reason why your first choice was wrong. Don\'t second-guess without cause.',
          hint: 'First instinct wins unless you find a clear error'
        },
        {
          topicId: poe.id,
          front: 'How do you handle a question where NO answer seems right?',
          back: 'Re-read the question — you may have misunderstood what\'s being asked. Try eliminating answers you\'re MOST sure are wrong. Choose the "least wrong" answer. Remember: one of them IS correct.',
          hint: 'Look for the least wrong answer'
        }
      ]
    })

    console.log('✓ process-of-elimination expanded')
  }

  console.log('\n✅ SAT Expression of Ideas & Test Strategy expansion complete!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
