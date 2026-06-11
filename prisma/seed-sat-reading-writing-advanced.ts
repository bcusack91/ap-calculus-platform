import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating additional SAT Reading & Writing content...')

  const sat = await prisma.course.findUnique({
    where: { slug: 'sat-prep' }
  })

  if (!sat) {
    throw new Error('SAT Prep course not found')
  }

  // Create new category: SAT Reading - Information and Ideas
  const readingInfo = await prisma.category.upsert({
    where: { slug: 'sat-reading-info-ideas' },
    update: {},
    create: {
      slug: 'sat-reading-info-ideas',
      name: 'Reading: Information and Ideas',
      order: 3,
      courseId: sat.id
    }
  })

  // Topic 1: Central Ideas and Details
  const centralIdeas = await prisma.topic.upsert({
    where: { slug: 'sat-central-ideas-details' },
    update: {},
    create: {
      slug: 'sat-central-ideas-details',
      title: 'Central Ideas and Details',
      description: 'Identify main ideas, themes, and supporting evidence',
      order: 1,
      categoryId: readingInfo.id,
      isPremium: false,
      textContent: `
# Central Ideas and Details (SAT Reading)

## SAT Reading Format

**52 questions, 65 minutes**

**Passage types:**
1. Literature (fiction)
2. History/Social Studies (2 passages or 1 paired)
3. Science (2 passages or 1 paired)

## Identifying Central Ideas

### Main Idea vs. Details

**Main Idea:**
- What the **whole passage** is about
- Author's **primary purpose**
- Usually more **abstract/general**

**Supporting Details:**
- **Specific examples**, facts, quotes
- **Support** the main idea
- More **concrete/specific**

### Where to Find Main Ideas

**First paragraph:** Often introduces topic
**Last paragraph:** Often reinforces/concludes
**Topic sentences:** First sentence of paragraphs
**Thesis statement:** Direct statement of purpose

## Question Types

### Type 1: Main Purpose
**"The primary purpose of the passage is to..."**

**Common purposes:**
- Describe a process
- Explain a concept
- Argue a position
- Compare two things
- Narrate an experience

### Type 2: Central Claim
**"Which choice best states the main idea?"**

**Strategy:**
- Eliminate too narrow (just one detail)
- Eliminate too broad (beyond passage scope)
- Choose what covers the whole passage

### Type 3: Function of a Detail
**"The author mentions X primarily to..."**

**Why include this detail?**
- Support main argument
- Provide an example
- Show contrast
- Transition to new idea
- Introduce evidence

### Type 4: Best Evidence
**"Which choice provides the best evidence for the answer to the previous question?"**

**Strategy:**
- Re-read the cited lines
- Must directly support your previous answer
- Often appears in pairs

## Working with Evidence

### Direct Evidence
**Explicitly states the answer**

Quote clearly says what you need

### Implied Evidence
**Suggests the answer through context**

Requires inference but still text-based

### Strong vs. Weak Evidence
**Strong:** Directly relevant, clear
**Weak:** Vague, tangential, unclear

## SAT Reading Strategies

### Read Actively
- **Underline** main ideas
- **Bracket** important details
- **Note** transitions and shifts

### Answer in Order
Questions follow passage order (mostly)

### Prove Every Answer
Point to specific lines that support it

### Eliminate Wrong Answers
- Too extreme
- Not mentioned
- Opposite of passage
- Mixes up details

## Paired Passages

**Two passages on related topic**

### Question types:
1. **Passage 1 only** - ignore Passage 2
2. **Passage 2 only** - ignore Passage 1
3. **Both passages** - compare/contrast
4. **How would author of Passage 2 respond** - synthesis

### Strategy:
1. Read Passage 1, answer its questions
2. Read Passage 2, answer its questions
3. Answer comparison questions

## Central Ideas in Different Genres

### Literature (Fiction)
**Look for:**
- Character development
- Theme (universal message)
- Conflict and resolution
- Narrative arc

### History/Social Studies
**Look for:**
- Historical argument
- Author's perspective
- Evidence and reasoning
- Implications

### Science
**Look for:**
- Hypothesis or theory
- Research findings
- Scientific process
- Significance of discovery

## Common Wrong Answer Types

### 1. Too Specific
Only covers one paragraph or detail

### 2. Too Broad
Goes beyond passage scope

### 3. Not Mentioned
Sounds reasonable but isn't in passage

### 4. Extreme Language
"Always," "never," "only," "must"

### 5. Reversal
Opposite of what passage says

### 6. Mix-Up
Confuses different details from passage

## SAT Tips

- **Main idea** appears multiple times throughout
- **Read intro and conclusion** carefully
- **Best evidence** questions point to specific lines
- **Don't overthink** - answer is in the passage
- **Avoid outside knowledge** - use only what's given
- **Skim difficult sections** first, return if needed
- **Time management:** ~13 minutes per passage
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: centralIdeas.id,
        order: 1,
        difficulty: 'EASY',
        question: 'What is the difference between a main idea and a supporting detail?',
        solution: `
**Solution:**

**Main Idea:**
- Central point of entire passage
- What the passage is ABOUT
- General/abstract
- Author's primary purpose

**Supporting Detail:**
- Specific fact, example, or evidence
- Helps PROVE or SUPPORT main idea
- Concrete/specific
- Subordinate to main idea

**Example:**
- Main idea: "Exercise benefits mental health"
- Detail: "Study showed 30 minutes daily reduced anxiety by 25%"

**Answer:** Main idea is the central point; details are specific evidence that supports it

**SAT Tip:** Details fit UNDER the umbrella of the main idea!
`
      },
      {
        topicId: centralIdeas.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'When answering "best evidence" questions, what should you look for in the cited lines?',
        solution: `
**Solution:**

**Best evidence must:**

1. **Directly support** your previous answer
2. **Actually say** what you claimed (explicit or clear implication)
3. Be **relevant** to the specific question
4. Be **clear and unambiguous**

**Wrong evidence:**
- Vaguely related but doesn't prove it
- About a different aspect
- Too general or off-topic

**Strategy:**
- Go back to your previous answer
- Find lines that DIRECTLY support that choice
- If you can't find good evidence, reconsider previous answer!

**Answer:** Lines that directly and clearly support your answer to the previous question

**SAT Tip:** Evidence questions are paired - use them to check each other!
`
      },
      {
        topicId: centralIdeas.id,
        order: 3,
        difficulty: 'HARD',
        question: 'A passage discusses several examples of renewable energy (solar, wind, hydro) and concludes they could reduce fossil fuel dependence. Which main idea is BEST?\n\nA) Solar panels convert sunlight to electricity\nB) Renewable energy sources offer environmental benefits\nC) Wind turbines are placed in windy locations\nD) Hydroelectric dams use water flow',
        solution: `
**Solution:**

**Evaluate each choice:**

**A) Solar panels...** 
- Too specific (just one detail) ❌
- Only covers solar, not whole passage

**B) Renewable energy sources...**
- Covers ALL examples ✓
- Addresses main point (benefits/reducing fossil fuels) ✓
- Appropriate scope (whole passage)

**C) Wind turbines...**
- Too specific (just one detail) ❌
- Only about wind

**D) Hydroelectric dams...**
- Too specific (just one detail) ❌
- Only about hydro

**Answer:** B - Renewable energy sources offer environmental benefits

**SAT Tip:** Main idea should cover the WHOLE passage, not just one part!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: centralIdeas.id,
        front: 'How much time should you spend on each SAT Reading passage?',
        back: 'About 13 minutes per passage (65 minutes ÷ 5 passages)'
      },
      {
        topicId: centralIdeas.id,
        front: 'What is wrong with main idea answers that use "always," "never," or "only"?',
        back: 'Too extreme - passages rarely make absolute claims; these words are red flags'
      },
      {
        topicId: centralIdeas.id,
        front: 'For paired passages, what order should you read and answer?',
        back: 'Passage 1 + its questions, then Passage 2 + its questions, then comparison questions'
      }
    ]
  })

  console.log('✓ Created topic: Central Ideas and Details (3 examples, 3 flashcards)')

  // Get the existing English Conventions category
  const englishConventions = await prisma.category.findUnique({
    where: { slug: 'sat-english-conventions' }
  })

  if (!englishConventions) {
    throw new Error('English Conventions category not found')
  }

  // Topic 2: Sentence Structure
  const sentenceStructure = await prisma.topic.upsert({
    where: { slug: 'sat-sentence-structure' },
    update: {},
    create: {
      slug: 'sat-sentence-structure',
      title: 'Sentence Structure',
      description: 'Fragments, run-ons, and combining sentences effectively',
      order: 4,
      categoryId: englishConventions.id,
      isPremium: false,
      textContent: `
# Sentence Structure (SAT Writing)

## Complete Sentences

### What Makes a Complete Sentence?

**Must have:**
1. **Subject** (who/what)
2. **Verb** (action/state)
3. **Complete thought**

**Example:**
✓ "The dog barked." (complete)
❌ "The dog." (no verb)
❌ "Barked loudly." (no subject)
❌ "When the dog barked." (incomplete thought)

## Sentence Fragments

### What is a Fragment?
**Incomplete sentence missing one of:**
- Subject
- Verb
- Complete thought

### Common Fragment Types

**1. Dependent clause alone**
❌ "Because I was tired."
✓ "I left early because I was tired."

**2. Missing subject**
❌ "Ran to the store."
✓ "She ran to the store."

**3. Missing verb**
❌ "The students in the library."
✓ "The students are in the library."

**4. -ing phrase alone**
❌ "Running through the park."
✓ "She was running through the park."

### SAT Fragment Questions

**"Which choice completes the sentence?"**

Look for option that creates complete thought

## Run-On Sentences

### What is a Run-On?
**Two or more complete sentences improperly joined**

### Types of Run-Ons

**1. Fused sentence (no punctuation)**
❌ "I studied I passed."

**Fixes:**
- Period: "I studied. I passed."
- Semicolon: "I studied; I passed."
- Comma + conjunction: "I studied, and I passed."

**2. Comma splice (comma alone)**
❌ "I studied, I passed."

**Wrong:** Comma CANNOT join two complete sentences alone

**Fixes:**
- Replace comma with semicolon
- Add conjunction after comma
- Split into two sentences

## Properly Joining Sentences

### Method 1: Coordinating Conjunction
**FANBOYS:** For, And, Nor, But, Or, Yet, So

**Use with comma:**
"I like coffee**,** **and** she likes tea."

### Method 2: Semicolon
**Joins related independent clauses**

"I studied hard**;** I earned an A."

### Method 3: Subordination
**Make one clause dependent**

"**Because** I studied, I passed."
"I passed **because** I studied."

**Common subordinators:**
- although, because, if, since, when, while
- after, before, until, unless

### Method 4: Transition + Semicolon
"I studied**; therefore,** I passed."

**Transitions:** however, therefore, moreover, consequently

**Note:** Transition alone CANNOT join sentences (needs semicolon before)

## Combining Sentences

### SAT Questions:
**"Which choice most effectively combines the sentences?"**

**Goals:**
- Grammatically correct
- Clear and concise
- Maintains meaning
- Flows well

### Techniques:

**1. Use relative clauses**
Before: "The book is on the table. It is red."
After: "The book that is on the table is red."

**2. Use appositives**
Before: "Dr. Smith is a scientist. She won the award."
After: "Dr. Smith, a scientist, won the award."

**3. Use participles**
Before: "She finished her homework. She went to bed."
After: "Having finished her homework, she went to bed."

## Modifiers and Placement

### Dangling Modifiers
**Modifier doesn't clearly modify anything**

❌ "Walking to school, the rain started."
(The rain wasn't walking!)

✓ "Walking to school, I noticed the rain start."

### Misplaced Modifiers
**Modifier in wrong position**

❌ "I saw a dog driving my car."
(The dog wasn't driving!)

✓ "Driving my car, I saw a dog."

### SAT Rule:
**Modifying phrase at start must describe the subject right after the comma**

## Parallel Structure

### Definition:
**Items in a list/comparison must have same grammatical form**

❌ "I like swimming, biking, and to run."
✓ "I like swimming, biking, and running."

❌ "The book is long, interesting, and has good characters."
✓ "The book is long, interesting, and well-characterized."

### When to Use:
- Lists
- Comparisons
- Correlative conjunctions (either...or, neither...nor, both...and, not only...but also)

## SAT Strategies

### Identify Complete Sentences
**Subject + Verb + Complete thought**

### Spot Run-Ons
**If you can put period between, they're two sentences**

### Fix Comma Splices
**Never use comma alone to join two complete sentences**

### Check Modifiers
**Opening phrase describes the subject immediately after**

### Maintain Parallelism
**Items in series should match in form**

## Common SAT Traps

### Trap 1: Comma Splice Looks OK
❌ "She studied hard, she passed."
(Feels natural but is wrong!)

### Trap 2: Long Dependent Clause Seems Complete
❌ "Although she studied for hours and reviewed all the material."
(Has "although" - still dependent!)

### Trap 3: Transition Word = Conjunction
❌ "I studied, however, I failed."
(However is NOT a FANBOYS conjunction!)

✓ "I studied; however, I failed."

### Trap 4: Subject After Modifier Looks Right
❌ "Having finished the test, it was submitted."
("It" didn't finish the test!)

✓ "Having finished the test, I submitted it."

## SAT Tips

- **Complete sentence** = subject + verb + complete thought
- **Comma alone** cannot join two sentences
- **FANBOYS** (comma + conjunction) can join sentences
- **Semicolon** joins related independent clauses
- **Opening modifier** must describe the subject right after comma
- **Parallel structure** for lists and comparisons
- **"However"** is NOT a coordinating conjunction!
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: sentenceStructure.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Which is correct?\n\nA) I love reading, my sister prefers sports.\nB) I love reading; my sister prefers sports.\nC) I love reading my sister prefers sports.',
        solution: `
**Solution:**

**Two complete sentences:**
- "I love reading"
- "My sister prefers sports"

**Check each option:**

**A)** Comma alone (comma splice) ❌
**B)** Semicolon (correct way to join) ✓
**C)** No punctuation (run-on) ❌

**Other correct options:**
- "I love reading, and my sister prefers sports." (comma + FANBOYS)
- "I love reading. My sister prefers sports." (two sentences)

**Answer:** B

**SAT Tip:** Comma CANNOT join two complete sentences alone!
`
      },
      {
        topicId: sentenceStructure.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Which is correct?\n\nA) Walking to school, the rain started falling.\nB) Walking to school, I felt the rain start falling.\nC) Walking to school, it rained.\nD) The rain, walking to school, started.',
        solution: `
**Solution:**

**Opening modifier:** "Walking to school"

**Rule:** Must describe the subject immediately after comma

**Check each:**

**A)** The rain walked to school? ❌
**B)** "I" walked to school ✓ (makes sense!)
**C)** "It" (rain) walked to school? ❌
**D)** Awkward/unclear ❌

**Answer:** B

**SAT Tip:** Opening modifying phrase must clearly describe the subject that follows!
`
      },
      {
        topicId: sentenceStructure.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Which maintains parallel structure?\n\nA) The goals are to increase revenue, reducing costs, and improve efficiency.\nB) The goals are to increase revenue, to reduce costs, and improving efficiency.\nC) The goals are to increase revenue, to reduce costs, and to improve efficiency.\nD) The goals are increasing revenue, to reduce costs, and to improve efficiency.',
        solution: `
**Solution:**

**Parallel structure:** All items must have same form

**Check each:**

**A)** to increase, reducing, improve (THREE DIFFERENT FORMS) ❌
**B)** to increase, to reduce, improving (NOT ALL SAME) ❌
**C)** to increase, to reduce, to improve (ALL INFINITIVES) ✓
**D)** increasing, to reduce, to improve (NOT ALL SAME) ❌

**Answer:** C

**SAT Tip:** In a list, all items should match: all infinitives, all -ing forms, all nouns, etc.
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: sentenceStructure.id,
        front: 'What is a comma splice and why is it wrong?',
        back: 'Using only a comma to join two complete sentences - wrong because comma alone cannot join independent clauses'
      },
      {
        topicId: sentenceStructure.id,
        front: 'What does FANBOYS stand for?',
        back: 'For, And, Nor, But, Or, Yet, So - coordinating conjunctions that can join sentences with a comma'
      },
      {
        topicId: sentenceStructure.id,
        front: 'SAT Rule: What must an opening modifying phrase describe?',
        back: 'The subject immediately after the comma (e.g., "Running quickly, SHE caught the bus")'
      }
    ]
  })

  console.log('✓ Created topic: Sentence Structure (3 examples, 3 flashcards)')

  // Create Expression of Ideas category
  const expressionIdeas = await prisma.category.upsert({
    where: { slug: 'sat-expression-ideas' },
    update: {},
    create: {
      slug: 'sat-expression-ideas',
      name: 'Writing: Expression of Ideas',
      order: 4,
      courseId: sat.id
    }
  })

  // Topic 3: Transitions and Organization
  const transitions = await prisma.topic.upsert({
    where: { slug: 'sat-transitions-organization' },
    update: {},
    create: {
      slug: 'sat-transitions-organization',
      title: 'Transitions and Organization',
      description: 'Use transitions effectively and organize ideas logically',
      order: 1,
      categoryId: expressionIdeas.id,
      isPremium: false,
      textContent: `
# Transitions and Organization (SAT Writing)

## Purpose of Transitions

**Transitions show relationships between ideas:**
- How sentences connect
- How paragraphs flow
- Logical progression

## Types of Transitions

### 1. Addition/Continuation
**Add similar information**

**Words:** furthermore, moreover, additionally, also, in addition

**Example:**
"Solar panels reduce costs. **Moreover,** they help the environment."

### 2. Contrast/Opposition
**Show differences or opposing ideas**

**Words:** however, nevertheless, conversely, on the other hand, in contrast, yet, although

**Example:**
"I studied hard. **However,** the test was still difficult."

### 3. Cause and Effect
**Show results or consequences**

**Words:** therefore, thus, consequently, as a result, accordingly, hence

**Example:**
"The experiment failed. **Therefore,** we revised our hypothesis."

### 4. Example/Illustration
**Provide specific instances**

**Words:** for example, for instance, specifically, namely, in particular

**Example:**
"Many fruits are healthy. **For instance,** apples contain important vitamins."

### 5. Emphasis
**Stress importance**

**Words:** indeed, in fact, certainly, undoubtedly

**Example:**
"The results were significant. **In fact,** they changed the entire field."

### 6. Sequence/Time
**Show order**

**Words:** first, next, then, finally, meanwhile, subsequently, previously

**Example:**
"**First,** heat the water. **Then,** add the ingredients."

### 7. Conclusion/Summary
**Wrap up or summarize**

**Words:** in conclusion, ultimately, in summary, overall, in short

**Example:**
"**Overall,** the study supports the hypothesis."

## SAT Transition Questions

### Type 1: Choose Best Transition
**"Which choice provides the most logical transition?"**

**Strategy:**
1. Read sentence before transition
2. Read sentence after transition
3. Determine relationship between ideas
4. Choose matching transition

**Example:**
"Renewable energy is expensive. _____, many cities are investing in it."

- Need contrast word (despite cost, still investing)
- Answer: "Nevertheless" or "However"

### Type 2: NO CHANGE vs. Transition
**Sometimes NO transition is best!**

If ideas flow naturally without transition, choose option with no transition word

## Sentence Placement

### SAT Questions:
**"Where should sentence X be placed?"**
**"The writer wants to add the following sentence..."**

**Clues to look for:**

**1. Transition words in the sentence**
"However" → needs something to contrast
"For example" → needs general statement before

**2. Pronouns**
"This discovery" → what discovery? Must follow mention
"They" → needs clear antecedent

**3. Chronological order**
"Later that day" → comes after earlier event
"Before the experiment" → comes before procedure

**4. Logical flow**
General → Specific
Problem → Solution
Claim → Evidence

### Strategy:
1. Read sentence to be placed
2. Note key words (transitions, pronouns, specific references)
3. Find where those references appear
4. Check if flow makes sense

## Paragraph Organization

### Common Structures:

**1. Topic Sentence → Supporting Details**
- Start with main idea
- Follow with evidence/examples

**2. Chronological**
- Events in time order
- Common in narratives, procedures

**3. Problem → Solution**
- Present issue
- Propose fix

**4. Compare and Contrast**
- Similarities first, then differences
- Or alternate between subjects

**5. Cause and Effect**
- What happened and why
- Effect can come first (more dramatic)

## Deleting Sentences

### SAT Questions:
**"Should the writer delete this sentence?"**

**Delete if:**
- ❌ Off-topic/irrelevant
- ❌ Redundant (already said)
- ❌ Contradicts passage

**Keep if:**
- ✓ Supports main idea
- ✓ Provides necessary example
- ✓ Creates smooth transition
- ✓ Adds important detail

## Adding Sentences

### SAT Questions:
**"The writer wants to emphasize X. Which sentence should be added?"**

**Choose sentence that:**
- Matches the stated goal
- Fits the tone/style
- Connects logically
- Stays on topic

## Introductions and Conclusions

### Effective Introductions:
- State main topic
- Provide context
- Engage reader
- Preview what's coming

### Effective Conclusions:
- Summarize main points
- Reinforce thesis
- Provide closure
- Don't introduce new info!

## SAT Strategies

### Read Before and After
**Context is key for transition questions**

### Match the Relationship
**What's the connection between ideas?**
- Same direction → addition
- Opposite → contrast
- Result → cause/effect

### Check for Logic
**Does the order make sense?**

### Eliminate Extremes
**"Always," "never" usually wrong**

### Consider "NO CHANGE"
**Sometimes passage is already correct**

## Common SAT Traps

### Trap 1: Sounds Good But Wrong Relationship
"I love swimming. **Therefore,** I joined the team."

Should be: "I love swimming. **So,** I joined the team."
(Cause-effect, not conclusion)

### Trap 2: Transition Doesn't Match Logic
"Exercise is healthy. **However,** it improves mood."

Should be: "Exercise is healthy. **Moreover,** it improves mood."
("However" signals contrast, but this continues same idea)

### Trap 3: Placing Sentence Based on Topic Alone
Must consider FLOW, not just topic match

### Trap 4: Keeping Interesting But Irrelevant Info
Cool fact but off-topic → DELETE

## SAT Tips

- **Read surrounding sentences** to understand context
- **Identify the relationship** (addition, contrast, cause/effect)
- **Match transition to relationship**
- **"However"** is NOT the same as "therefore"!
- **For sentence placement,** look for pronouns and transition words
- **Chronological clues** (before, after, later) show order
- **Delete** if off-topic or redundant
- **NO CHANGE** is often correct - don't overthink!
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: transitions.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Which transition fits best?\n\n"Electric cars are expensive. _____, they are becoming more popular."\n\nA) Therefore\nB) However\nC) For example\nD) Specifically',
        solution: `
**Solution:**

**Sentence 1:** Electric cars are expensive (potential negative)
**Sentence 2:** They are becoming popular (positive/surprising)

**Relationship:** CONTRAST (despite being expensive, still popular)

**Check transitions:**
- A) Therefore = cause/effect ❌
- B) However = contrast ✓
- C) For example = illustration ❌
- D) Specifically = clarification ❌

**Answer:** B - However

**SAT Tip:** "However" shows contrast - when second idea goes against expectations from first!
`
      },
      {
        topicId: transitions.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Where should this sentence be placed?\n\n"This discovery led to a breakthrough in treatment."\n\nThe paragraph discusses: [1] A disease affects millions. [2] Researchers studied it for years. [3] They identified a key protein. [4] New therapies are being developed.',
        solution: `
**Solution:**

**Key word:** "This discovery"

**What discovery?** Must refer to something previously mentioned

**Check each position:**
- After [1]? No discovery mentioned yet ❌
- After [2]? Just says "studied" - vague ❌
- After [3]? "Identified a key protein" = discovery! ✓
- After [4]? Already past the breakthrough ❌

**Logical flow:**
Studied → Identified protein (discovery) → **Led to breakthrough** → New therapies

**Answer:** After sentence [3]

**SAT Tip:** "This" needs a clear antecedent - find what it refers to!
`
      },
      {
        topicId: transitions.id,
        order: 3,
        difficulty: 'HARD',
        question: 'A passage about renewable energy includes this sentence: "My uncle installed solar panels last year."\n\nShould this sentence be kept or deleted?',
        solution: `
**Solution:**

**Consider:**
- Is it **relevant** to main topic (renewable energy in general)? 
  - Personal anecdote, not about renewable energy broadly ❌
- Does it **support the main idea**?
  - Too specific/personal ❌
- Is it **necessary**?
  - No - passage works without it ❌

**This is off-topic!** Too personal for academic passage about renewable energy

**Unless passage is specifically about personal experiences with solar, this should be:**

**Answer:** DELETED - it's an irrelevant personal detail

**SAT Tip:** Delete sentences that are off-topic, even if they're interesting!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: transitions.id,
        front: 'What transition words show CONTRAST?',
        back: 'However, nevertheless, conversely, on the other hand, in contrast, yet, although'
      },
      {
        topicId: transitions.id,
        front: 'What transition words show CAUSE AND EFFECT?',
        back: 'Therefore, thus, consequently, as a result, accordingly, hence'
      },
      {
        topicId: transitions.id,
        front: 'When should you delete a sentence on the SAT?',
        back: 'If it\'s off-topic, redundant, or contradicts the passage - even if it\'s interesting!'
      }
    ]
  })

  console.log('✓ Created topic: Transitions and Organization (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully created additional SAT Reading & Writing content!')
  console.log('   New categories: 2 (Information/Ideas, Expression of Ideas)')
  console.log('   New topics: 3')
  console.log('   Total example problems added: 9')
  console.log('   Total flashcards added: 9')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
