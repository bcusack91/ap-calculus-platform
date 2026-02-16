import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating more comprehensive SAT Reading & Writing content...')

  const sat = await prisma.course.findUnique({
    where: { slug: 'sat-prep' }
  })

  if (!sat) {
    throw new Error('SAT Prep course not found')
  }

  // Get existing categories
  const readingInfo = await prisma.category.findUnique({
    where: { slug: 'sat-reading-info-ideas' }
  })

  const expressionIdeas = await prisma.category.findUnique({
    where: { slug: 'sat-expression-ideas' }
  })

  const englishConventions = await prisma.category.findUnique({
    where: { slug: 'sat-english-conventions' }
  })

  if (!readingInfo || !expressionIdeas || !englishConventions) {
    throw new Error('Required categories not found')
  }

  // Reading Topic: Vocabulary in Context
  const vocabulary = await prisma.topic.upsert({
    where: { slug: 'sat-vocabulary-context' },
    update: {},
    create: {
      slug: 'sat-vocabulary-context',
      title: 'Vocabulary in Context',
      description: 'Determine word meanings based on context and usage',
      order: 2,
      categoryId: readingInfo.id,
      isPremium: false,
      textContent: `
# Vocabulary in Context (SAT Reading)

## What Are Vocabulary in Context Questions?

**Format:** "As used in line X, [word] most nearly means..."

**NOT about:**
- Memorizing obscure vocabulary
- Dictionary definitions

**ABOUT:**
- Understanding words **in context**
- How the word functions in **this specific passage**

## Key Strategy

### The "Plug-In" Method

**Steps:**
1. **Read the sentence** (and surrounding sentences)
2. **Cover the word** with your hand/finger
3. **Predict your own word** that fits
4. **Compare to answer choices** - pick closest match
5. **Plug it back in** to verify it works

**Example:**

*"The scientist was **skeptical** of the new theory."*

1. Cover "skeptical"
2. Think: "The scientist was **doubtful/questioning** of the new theory"
3. Look for answer choice meaning "doubtful"
4. Check: Does "doubtful" fit? Yes!

## Common Tricks to Watch For

### Trap 1: Common Definition (Wrong Context)

**Word has multiple meanings - SAT tests the less common one**

**Example:** "Current"
- Common meaning: Present/now
- In science passage: Flow of electricity
- In river passage: Movement of water

**Always check context!**

### Trap 2: Looks Right But Wrong Tone

**Answer choice is related but wrong connotation**

**Example:** "The politician was **calculating**"

Could mean:
- Doing math ❌ (wrong context)
- Strategic/scheming ✓ (fits negative tone)

### Trap 3: Synonym But Wrong Intensity

**Too strong or too weak for context**

**Example:** If passage says "somewhat worried"
- "Concerned" ✓ (moderate)
- "Terrified" ❌ (too strong)

## Types of Words Tested

### 1. Multiple Meaning Words
**Same spelling, different meanings**

- "Appreciate" → understand OR increase in value
- "Charged" → accused OR filled with emotion
- "Bear" → animal OR endure
- "Express" → state OR fast train

### 2. Academic/Formal Words
**Words common in academic writing**

- "Undermine" → weaken
- "Substantiate" → prove/support
- "Mitigate" → lessen/reduce
- "Corroborate" → confirm

### 3. Connotation Words
**Shades of meaning - positive vs negative**

- "Stubborn" (negative) vs "Determined" (positive)
- "Cheap" (negative) vs "Economical" (positive)
- "Curious" (positive) vs "Nosy" (negative)

## Context Clues in Passages

### 1. Definition Clues
**Passage defines the word directly**

*"Photosynthesis, **the process by which plants convert light to energy**, is essential."*

### 2. Example Clues
**Examples illustrate meaning**

*"The **cacophony** - horns blaring, people shouting, sirens wailing - was overwhelming."*

### 3. Contrast Clues
**Opposite word provides hint**

*"Unlike his **reticent** brother, Tom was outgoing and talkative."*

Reticent = opposite of outgoing = shy/quiet

### 4. Synonym Clues
**Similar word appears nearby**

*"She was **elated**, absolutely thrilled by the news."*

Elated = thrilled

## Testing Your Answer

### The "Substitution Test"

**Replace the original word with your answer choice**

Does the sentence:
- ✓ Make sense?
- ✓ Keep the same meaning?
- ✓ Match the tone?

**If no to any → wrong answer!**

## SAT Vocabulary Strategies

### Don't Rely on First Instinct
**First meaning that comes to mind often wrong**

### Read Before and After
**Context is usually in surrounding sentences**

### Eliminate Obvious Wrong Answers
**Cross out choices that clearly don't fit**

### Match Tone
**Positive passage → positive word**
**Negative passage → negative word**

### Consider All Answer Choices
**Sometimes multiple could work - pick BEST fit**

## Common SAT Words to Know

### Words Meaning "Support"
- Corroborate, substantiate, bolster, buttress, validate

### Words Meaning "Weaken"
- Undermine, refute, contradict, debunk, invalidate

### Words Meaning "Lessen"
- Mitigate, alleviate, diminish, abate, assuage

### Words Meaning "Increase"
- Augment, amplify, exacerbate, intensify, escalate

### Words Meaning "Criticize"
- Denounce, censure, disparage, rebuke, admonish

### Words Meaning "Praise"
- Laud, extol, commend, acclaim, venerate

## Context Categories

### Scientific Passages
**Look for technical vs common usage**

"Compound" → chemical substance (not housing complex)

### Literary Passages
**Look for figurative vs literal**

"Consumed" → obsessed with (not ate)

### Historical Passages
**Look for period-specific meanings**

"Civil" → polite (in social context) OR relating to citizens (in government)

## SAT Tips

- **Always read full sentence** (minimum)
- **Use context clues** - don't just use dictionary knowledge
- **Plug in your answer** to test if it works
- **Match the tone** (positive/negative/neutral)
- **Eliminate extremes** first (usually wrong)
- **Multiple meanings** → use context to pick right one
- **Don't overthink** → simplest answer often correct
- **"Most nearly means"** → doesn't have to be exact synonym, just closest
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: vocabulary.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Passage: "The student\'s argument was **sound**, supported by strong evidence and logical reasoning."\n\nAs used here, "sound" most nearly means:\n\nA) Noise\nB) Valid\nC) Musical\nD) Whole',
        solution: `
**Solution:**

**Context:** Argument supported by evidence and logic

**Plug-in method:** "The argument was ___"

**Test choices:**
- A) Noise → doesn't fit ❌
- B) Valid → fits perfectly! (strong, logical) ✓
- C) Musical → wrong context ❌
- D) Whole → doesn't fit meaning ❌

**Answer:** B - Valid

**SAT Tip:** "Sound" has multiple meanings. Context (evidence, reasoning) points to "valid/well-reasoned"!
`
      },
      {
        topicId: vocabulary.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Passage: "The detective\'s investigation was **exhaustive**, leaving no detail unexplored."\n\nAs used here, "exhaustive" most nearly means:\n\nA) Tiring\nB) Thorough\nC) Depleting\nD) Finished',
        solution: `
**Solution:**

**Context:** "leaving no detail unexplored"

**Clue phrase** gives the meaning! Unexplored = everything checked

**Test choices:**
- A) Tiring → about energy, not completeness ❌
- B) Thorough → matches "no detail unexplored" ✓
- C) Depleting → about using up resources ❌
- D) Finished → about completion, not thoroughness ❌

**Answer:** B - Thorough

**SAT Tip:** Look for definition/synonym clues in same sentence!
`
      },
      {
        topicId: vocabulary.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Passage: "The new evidence did not **support** the researcher\'s hypothesis; in fact, it seemed to contradict her earlier findings."\n\nAs used here, "support" most nearly means:\n\nA) Hold up physically\nB) Confirm\nC) Encourage\nD) Finance',
        solution: `
**Solution:**

**Context:** Evidence and hypothesis (scientific context)

**Contrast clue:** "contradict" is opposite, so support = agree with/confirm

**Test choices:**
- A) Hold up physically → wrong context (not physical) ❌
- B) Confirm → fits scientific context! ✓
- C) Encourage → emotional support, wrong context ❌
- D) Finance → monetary support, wrong context ❌

**Answer:** B - Confirm

**SAT Tip:** "Contradict" as opposite helps identify meaning. In research, support = confirm/validate!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: vocabulary.id,
        front: 'What is the best strategy for SAT vocabulary in context questions?',
        back: 'Plug-in method: Cover the word, predict your own word that fits, then match to answer choices'
      },
      {
        topicId: vocabulary.id,
        front: 'SAT Trap: Why is the most common definition often wrong?',
        back: 'SAT tests words with multiple meanings in less common contexts - always check how the word is used in THIS passage'
      },
      {
        topicId: vocabulary.id,
        front: 'What are the main types of context clues?',
        back: 'Definition (direct), Example (illustrative), Contrast (opposite), Synonym (similar word nearby)'
      }
    ]
  })

  console.log('✓ Created topic: Vocabulary in Context (3 examples, 3 flashcards)')

  // Writing Topic: Conciseness and Redundancy
  const conciseness = await prisma.topic.upsert({
    where: { slug: 'sat-conciseness-redundancy' },
    update: {},
    create: {
      slug: 'sat-conciseness-redundancy',
      title: 'Conciseness and Redundancy',
      description: 'Eliminate wordiness and redundant expressions',
      order: 2,
      categoryId: expressionIdeas.id,
      isPremium: false,
      textContent: `
# Conciseness and Redundancy (SAT Writing)

## SAT Writing Principle

### "Shorter is Better"
**When multiple answers are grammatically correct:**
- Choose the **most concise** option
- Eliminate **unnecessary words**
- Avoid **redundancy** (saying same thing twice)

**BUT:** Don't sacrifice clarity or meaning!

## Redundancy

### What is Redundancy?
**Repeating the same idea unnecessarily**

### Common Redundant Phrases

**Time Redundancies:**
❌ "Past history" → ✓ "History" (history is always past)
❌ "Future plans" → ✓ "Plans" (plans are for the future)
❌ "Advance warning" → ✓ "Warning"
❌ "Currently ongoing" → ✓ "Ongoing" OR "Current"

**Meaning Redundancies:**
❌ "Free gift" → ✓ "Gift" (gifts are free)
❌ "End result" → ✓ "Result"
❌ "Final outcome" → ✓ "Outcome"
❌ "Basic fundamentals" → ✓ "Fundamentals" OR "Basics"

**Number Redundancies:**
❌ "Each individual person" → ✓ "Each person"
❌ "12 noon" → ✓ "Noon" (noon is always 12)
❌ "Sum total" → ✓ "Sum" OR "Total"

**Description Redundancies:**
❌ "Small in size" → ✓ "Small"
❌ "Round in shape" → ✓ "Round"
❌ "Blue in color" → ✓ "Blue"
❌ "Completely eliminate" → ✓ "Eliminate"

**Reason/Cause Redundancies:**
❌ "The reason is because..." → ✓ "The reason is..." OR "Because..."
❌ "Due to the fact that" → ✓ "Because"

## Wordy Phrases

### Replace Wordy Phrases with Concise Alternatives

**Wordy → Concise:**
- "At this point in time" → "Now"
- "In spite of the fact that" → "Although"
- "For the purpose of" → "To"
- "In the event that" → "If"
- "On account of the fact that" → "Because"
- "With regard to" → "About"
- "In order to" → "To"
- "Has the ability to" → "Can"
- "Is able to" → "Can"
- "Make a decision" → "Decide"
- "Give consideration to" → "Consider"
- "Come to a conclusion" → "Conclude"

## SAT Question Types

### Type 1: Which is Most Concise?

**Question:** "Which choice most effectively expresses the idea?"

**Strategy:**
1. Eliminate redundant options
2. Eliminate wordy phrases
3. Choose shortest that preserves meaning

### Type 2: DELETE Redundancy

**Sometimes answer is "DELETE the underlined portion"**

If the underlined portion repeats info already stated, delete it!

### Type 3: Combining Sentences

**Choose option that eliminates repetition**

Before: "The book was long. The book was interesting."
Better: "The book was long and interesting."

## When Conciseness Rules

### All Are Grammatically Correct
**Pick shortest**

**Example:**
- A) Due to the fact that it rained
- B) Because it rained ✓ (shortest, same meaning)
- C) Owing to the rainfall
- D) On account of it raining

### Same Meaning, Different Length
**Pick concise**

**Example:**
- A) Has the ability to succeed
- B) Can succeed ✓
- C) Possesses the capability of succeeding
- D) Is able to achieve success

## When NOT to Choose Shortest

### Changes Meaning
**If shortest option changes meaning, DON'T choose it!**

### Loses Clarity
**If conciseness creates confusion, choose clearer option**

### Loses Important Detail
**Sometimes extra words add necessary information**

## Identifying Redundancy

### Ask: Is This Word Necessary?

**Test:** Remove the word. Does sentence still mean the same?

"Completely exhausted" → "exhausted" 
(exhausted already means completely tired)

### Look for Doubles

**Two words that mean the same:**
- "Various different"
- "Join together"
- "Absolutely essential"
- "Exact same"

### Check for Implied Meaning

**If meaning is already implied, don't state it:**
- "Tall skyscraper" (skyscrapers are tall by definition)
- "Empty void" (voids are empty)
- "New innovation" (innovations are new)

## SAT Strategies

### Eliminate Longest First
**Usually the wordiest options are wrong**

### Look for "DELETE"
**If underlined portion is redundant, DELETE might be right**

### Check for Repeated Info
**Is same idea stated twice in passage?**

### Trust Your Ear
**Read it aloud - does it sound repetitive?**

### Know Common Redundant Phrases
**Memorize the frequently tested ones**

## Common SAT Redundancies to Know

### Definitional Redundancies
- Past history/experience
- Future plans/goals
- Unexpected surprise
- Final conclusion
- Advance preview
- Close proximity

### Descriptive Redundancies
- Very unique (unique = one of a kind, can't be "very")
- Extremely essential
- Most optimal (optimal = already best)
- Continue to remain
- Still persists

### Verb Redundancies
- Combine together
- Merge together
- Cooperate together
- Return back
- Refer back
- Revert back

## SAT Tips

- **Shorter is better** when meaning is preserved
- **Check for redundancy** - saying same thing twice
- **"DELETE"** is often correct for redundant text
- **Common phrases:** "The reason is because" → choose "The reason is" or "Because"
- **"In order to"** → usually just "To"
- **Descriptive redundancy:** "Blue in color" → just "Blue"
- **If all are correct, choose shortest**
- **Trust your instinct** - if it sounds repetitive, it probably is
- **Don't sacrifice clarity** for conciseness
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: conciseness.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Which is most concise?\n\nA) Due to the fact that I was tired\nB) Because I was tired\nC) On account of being tired\nD) For the reason that I was tired',
        solution: `
**Solution:**

All mean the same thing: explaining the cause (being tired)

**Check length:**
- A) 7 words
- B) 4 words ✓ (shortest!)
- C) 5 words
- D) 7 words

All grammatically correct → choose shortest

**Answer:** B - Because I was tired

**SAT Tip:** "Due to the fact that" = wordy way to say "because"!
`
      },
      {
        topicId: conciseness.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'The team will **collaborate together** to finish the project.\n\nA) NO CHANGE\nB) collaborate\nC) work collaboratively together\nD) work together in collaboration',
        solution: `
**Solution:**

**"Collaborate"** already means "work together"

**A) collaborate together** → REDUNDANT ❌
**B) collaborate** → eliminates redundancy ✓
**C) work collaboratively together** → MORE redundant ❌
**D) work together in collaboration** → wordier ❌

**Answer:** B

**SAT Tip:** "Collaborate together" is redundant - collaborate means "together" already!
`
      },
      {
        topicId: conciseness.id,
        order: 3,
        difficulty: 'HARD',
        question: 'The museum houses a collection of **past historical** artifacts from ancient civilizations.\n\nA) NO CHANGE\nB) historical\nC) historic and historical\nD) DELETE the underlined portion',
        solution: `
**Solution:**

**"Historical"** already means "from the past"

**Check options:**
- A) past historical → redundant ❌
- B) historical → removes redundancy ✓
- C) historic and historical → MORE words, still redundant ❌
- D) DELETE → "collection of artifacts" works, but less clear than B

**Both B and D grammatically correct, but:**
- B keeps important descriptor (historical vs contemporary)
- D is shorter but loses useful distinction

**Answer:** B - historical

**SAT Tip:** "Past history" or "past historical" is redundant. But don't delete if the word adds useful meaning!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: conciseness.id,
        front: 'SAT Writing Rule: When all answers are grammatically correct, which should you choose?',
        back: 'Choose the most CONCISE option (shortest) that preserves the meaning'
      },
      {
        topicId: conciseness.id,
        front: 'What are 3 common redundant phrases?',
        back: '"Past history" → "history"; "The reason is because" → "because"; "Collaborate together" → "collaborate"'
      },
      {
        topicId: conciseness.id,
        front: 'What wordy phrase means "because"?',
        back: '"Due to the fact that" and "on account of the fact that" - always replace with "because"!'
      }
    ]
  })

  console.log('✓ Created topic: Conciseness and Redundancy (3 examples, 3 flashcards)')

  // Writing Topic: Pronoun Agreement and Clarity
  const pronouns = await prisma.topic.upsert({
    where: { slug: 'sat-pronoun-agreement' },
    update: {},
    create: {
      slug: 'sat-pronoun-agreement',
      title: 'Pronoun Agreement and Clarity',
      description: 'Ensure pronouns agree with antecedents and are clear',
      order: 5,
      categoryId: englishConventions.id,
      isPremium: false,
      textContent: `
# Pronoun Agreement and Clarity (SAT Writing)

## What is a Pronoun?

**Replaces a noun**

**Common pronouns:**
- Personal: I, you, he, she, it, we, they
- Possessive: my, your, his, her, its, our, their
- Relative: who, whom, whose, which, that

**Antecedent:** The noun the pronoun refers to

## Pronoun-Antecedent Agreement

### Rule: Pronouns must match their antecedents in NUMBER

**Singular antecedent → singular pronoun**
**Plural antecedent → plural pronoun**

### Singular Pronouns
he, she, it, him, her, his, hers, its

### Plural Pronouns
they, them, their, theirs

## Common Agreement Errors

### Error 1: Singular Antecedent, Plural Pronoun

❌ "Each student must bring **their** book."
- "Each" = singular
- "Their" = plural

✓ "Each student must bring **his or her** book."
✓ "Students must bring **their** books." (make both plural)

### Error 2: Indefinite Pronouns

**These are SINGULAR:**
- Everyone, everybody, everyone
- Anyone, anybody, anything
- Someone, somebody, something
- No one, nobody, nothing
- Each, either, neither

❌ "Everyone should do **their** best."
✓ "Everyone should do **his or her** best."
✓ "All students should do **their** best." (use plural antecedent)

### Error 3: Compound Subjects with "Or"

**Use pronoun that matches the CLOSER noun**

"Either the teacher or the students will present **their** project."
(Students is closer and plural → their)

"Either the students or the teacher will present **her** project."
(Teacher is closer and singular → her)

## Pronoun Clarity

### Rule: Antecedent must be CLEAR

**Unclear pronoun reference = error**

### Error: Ambiguous Antecedent

❌ "John told Mark that **he** won the award."
- Who won? John or Mark? Unclear!

✓ "John told Mark that **Mark** won the award."
✓ "John told Mark, 'You won the award.'"

### Error: No Clear Antecedent

❌ "In the article, **it** says climate is changing."
- What is "it"? The article isn't a person who says things!

✓ "The article states that climate is changing."
✓ "According to the article, climate is changing."

### Error: Pronoun Too Far from Antecedent

❌ "The scientist studied the cells. Many tests were performed. **She** was surprised by the results."
- Too much between "scientist" and "she" - could be confusing

✓ Keep pronouns close to their antecedents

## Pronoun Case

### Subject Pronouns
**Used as subject of sentence**

I, you, he, she, it, we, they

"**She** and **I** went to the store."

### Object Pronouns
**Used as object of verb or preposition**

me, you, him, her, it, us, them

"The teacher called **him** and **me**."
"Between you and **me**..." (after preposition "between")

### Common Case Errors

❌ "Me and him went shopping."
✓ "He and I went shopping." (subjects)

❌ "The gift is for John and I."
✓ "The gift is for John and me." (object of preposition)

**Trick:** Remove the other person
- "The gift is for I" → sounds wrong!
- "The gift is for me" → correct!

## Relative Pronouns

### Who vs. Whom

**Who:** Subject (does the action)
**Whom:** Object (receives the action)

"**Who** is coming?" (subject)
"To **whom** should I give this?" (object of preposition)

**Trick:** Replace with he/him
- He is coming → WHO
- Give it to him → WHOM

### Who vs. Which vs. That

**Who/whom:** People
**Which:** Things (non-essential clauses)
**That:** Things or people (essential clauses)

"The woman **who** won the prize..." (person)
"The book **that** I read..." (thing, essential)
"The book, **which** was long, was interesting." (thing, non-essential)

## Possessive Pronouns

### Its vs. It's

**Its:** Possessive (belonging to it)
"The dog wagged **its** tail."

**It's:** Contraction (it is)
"**It's** raining."

### Their vs. There vs. They're

**Their:** Possessive (belonging to them)
"**Their** house is blue."

**There:** Location or placeholder
"**There** is a problem."
"Put it over **there**."

**They're:** Contraction (they are)
"**They're** coming soon."

### Your vs. You're

**Your:** Possessive
"**Your** book is here."

**You're:** Contraction (you are)
"**You're** welcome."

## SAT Strategies

### Check Agreement
**Find the antecedent - is pronoun singular/plural matching?**

### Look for Indefinite Pronouns
**Everyone, each, someone = SINGULAR**

### Test Pronoun Clarity
**Can you clearly identify what the pronoun refers to?**

### Remove Compounds
**"John and I" → test with just "I"**

### Check Possessives
**Its vs. it's, their vs. they're, your vs. you're**

## Common SAT Traps

### Trap 1: "Everyone" Sounds Plural
❌ "Everyone brought their lunch"
✓ "Everyone brought his or her lunch"

### Trap 2: "Between you and I"
**Always "between you and ME" (object of preposition)**

### Trap 3: It's vs. Its
**Apostrophe = contraction, not possessive!**

### Trap 4: Vague "This" or "It"
❌ "The study found problems. **This** is important."
✓ "The study found problems. **This discovery** is important."

## SAT Tips

- **Singular indefinite pronouns:** everyone, anyone, someone, each, either, neither
- **Check number agreement:** singular antecedent = singular pronoun
- **Clear antecedent:** must be obvious what pronoun refers to
- **Subject pronouns:** I, he, she, we, they
- **Object pronouns:** me, him, her, us, them
- **"Between you and ___"** → always ME (object!)
- **Its** = possessive; **It's** = it is
- **Their** = possessive; **They're** = they are; **There** = location
- **Who** = subject; **Whom** = object
- **Remove compounds** to test case (John and I → I went)
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: pronouns.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Which is correct?\n\nA) Everyone should bring their notebook.\nB) Everyone should bring his or her notebook.\nC) Everyone should bring they notebook.\nD) Everyone should bring its notebook.',
        solution: `
**Solution:**

**"Everyone"** = singular indefinite pronoun

Needs **singular** pronoun:

**A) their** → plural ❌
**B) his or her** → singular ✓
**C) they** → plural + wrong form ❌
**D) its** → for things, not people ❌

**Answer:** B

**Alternative:** Make both plural: "All students should bring their notebooks."

**SAT Tip:** Everyone, anyone, someone, each = SINGULAR!
`
      },
      {
        topicId: pronouns.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Which is correct?\n\nA) The gift is for Sarah and I.\nB) The gift is for Sarah and me.\nC) The gift is for Sarah and myself.\nD) The gift is for I and Sarah.',
        solution: `
**Solution:**

**"For"** = preposition → needs object pronoun

**Test:** Remove "Sarah and"
- "The gift is for I" → sounds wrong! ❌
- "The gift is for me" → correct! ✓

**Check all options:**
- A) I → subject pronoun, wrong! ❌
- B) me → object pronoun, correct! ✓
- C) myself → only use when subject = object ❌
- D) I → wrong, plus wrong order ❌

**Answer:** B

**SAT Tip:** After prepositions (for, to, with, between), use object pronouns (me, him, her, us, them)!
`
      },
      {
        topicId: pronouns.id,
        order: 3,
        difficulty: 'HARD',
        question: 'The dog wagged **its** tail excitedly.\n\nA) NO CHANGE\nB) it\'s\nC) its\'\nD) their',
        solution: `
**Solution:**

Need **possessive:** the tail belonging to the dog

**Test each:**
- A) its → possessive (correct!) ✓
- B) it's → "it is" (contraction) → "The dog wagged it is tail" ❌
- C) its' → not a real word ❌
- D) their → plural, dog is singular ❌

**Answer:** A - NO CHANGE

**Remember:**
- **Its** = possessive (belonging to it)
- **It's** = contraction (it is)

**SAT Tip:** Unlike nouns, possessive pronouns (its, your, their) have NO apostrophe!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: pronouns.id,
        front: 'Which indefinite pronouns are SINGULAR?',
        back: 'Everyone, anyone, someone, no one, each, either, neither (despite sounding plural!)'
      },
      {
        topicId: pronouns.id,
        front: 'What\'s the difference between "its" and "it\'s"?',
        back: 'Its = possessive (belonging to it); It\'s = contraction (it is)'
      },
      {
        topicId: pronouns.id,
        front: 'Should you say "between you and I" or "between you and me"?',
        back: '"Between you and me" - after prepositions, use object pronouns (me, him, her, us, them)'
      }
    ]
  })

  console.log('✓ Created topic: Pronoun Agreement and Clarity (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully created more comprehensive SAT Reading & Writing content!')
  console.log('   New topics: 3')
  console.log('   Total example problems added: 9')
  console.log('   Total flashcards added: 9')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
