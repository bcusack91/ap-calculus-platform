import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating SAT Reading & Writing content...')

  const sat = await prisma.course.findUnique({
    where: { slug: 'sat-prep' }
  })

  if (!sat) {
    throw new Error('SAT Prep course not found')
  }

  // Category 4: Reading - Command of Evidence
  const commandEvidence = await prisma.category.upsert({
    where: { slug: 'sat-command-evidence' },
    update: {},
    create: {
      slug: 'sat-command-evidence',
      name: 'Reading: Command of Evidence',
      order: 4,
      courseId: sat.id
    }
  })

  // Topic 1: Finding Textual Evidence
  const textualEvidence = await prisma.topic.upsert({
    where: { slug: 'sat-finding-textual-evidence' },
    update: {},
    create: {
      slug: 'sat-finding-textual-evidence',
      title: 'Finding Textual Evidence',
      description: 'Locate evidence in passages to support answers',
      order: 1,
      categoryId: commandEvidence.id,
      isPremium: false,
      textContent: `
# Finding Textual Evidence (SAT)

## What Are Evidence Questions?

The SAT asks you to find **specific lines** that support your answer to the previous question.

**Format:**
- Question 1: "What does the author suggest about X?"
- Question 2: "Which choice provides the best evidence for the previous question?"

## Strategy

### Step 1: Answer Question 1 First
Read and answer based on the passage.

### Step 2: Find Supporting Evidence
Look for lines that **directly prove** your answer.

### Step 3: Check Both Ways
- Does the evidence support your Q1 answer? ✓
- Does your Q1 answer match the evidence? ✓

## Common Mistakes

❌ **Choosing lines that:**
- Mention keywords but don't prove the point
- Are interesting but irrelevant
- Partially support but aren't the BEST evidence

✅ **Best evidence:**
- Directly answers the question
- Uses specific details, not vague statements
- Makes the claim explicit, not implied

## Tips for Success

1. **Underline as you read** - mark key claims
2. **Predict evidence** before looking at choices
3. **Paired questions** - if stuck on Q1, check Q2 evidence to help
4. **Eliminate** weak evidence first
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: textualEvidence.id,
        order: 1,
        difficulty: 'EASY',
        question: 'When looking for evidence, you should choose lines that:\n\nA) Mention the topic\nB) Directly prove your answer\nC) Sound intelligent\nD) Are the longest',
        solution: `
**Solution:**

The best evidence **directly proves** your answer to the previous question.

- A is wrong - just mentioning the topic isn't enough
- C is wrong - fancy language ≠ good evidence
- D is wrong - length doesn't matter

**Answer:** B - Directly prove your answer

**SAT Tip:** Evidence must PROVE, not just mention!
`
      },
      {
        topicId: textualEvidence.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'What should you do if you\'re unsure about Question 1 in a paired question set?',
        solution: `
**Solution:**

**Strategy: Work backwards!**

1. Read Question 2 (evidence question) first
2. Check what each evidence choice says
3. Use the evidence to help answer Question 1
4. Verify they match

**Answer:** Use the evidence choices to help answer Q1

**SAT Tip:** Paired questions help each other - use this to your advantage!
`
      },
      {
        topicId: textualEvidence.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Why might the SAT include a choice that mentions the right topic but doesn\'t provide good evidence?',
        solution: `
**Solution:**

This is a **trap answer** that tests if you:
- Actually understand what counts as evidence
- Can distinguish relevance from proof
- Read carefully vs. skim for keywords

**Example:**
- Q1: "The author believes climate change is urgent"
- Bad evidence: "Climate change is discussed widely" (mentions topic)
- Good evidence: "We must act now or face catastrophe" (proves urgency)

**Answer:** To test if you can distinguish mentioning vs. proving

**SAT Tip:** Keywords alone don't make good evidence!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: textualEvidence.id,
        front: 'What makes good textual evidence on the SAT?',
        back: 'Lines that directly prove your answer with specific details, not just mention the topic'
      },
      {
        topicId: textualEvidence.id,
        front: 'Strategy for paired questions (Q1 + evidence Q2)?',
        back: 'Answer Q1, then find evidence. OR work backwards - check Q2 evidence to help answer Q1'
      },
      {
        topicId: textualEvidence.id,
        front: 'What is a common trap in evidence questions?',
        back: 'Choices that mention keywords but don\'t actually prove the claim'
      }
    ]
  })

  console.log('✓ Created topic: Finding Textual Evidence (3 examples, 3 flashcards)')

  // Category 5: Writing - Standard English Conventions
  const englishConventions = await prisma.category.upsert({
    where: { slug: 'sat-english-conventions' },
    update: {},
    create: {
      slug: 'sat-english-conventions',
      name: 'Writing: Standard English Conventions',
      order: 5,
      courseId: sat.id
    }
  })

  // Topic 2: Grammar and Usage
  const grammarUsage = await prisma.topic.upsert({
    where: { slug: 'sat-grammar-usage' },
    update: {},
    create: {
      slug: 'sat-grammar-usage',
      title: 'Grammar and Usage',
      description: 'Master subject-verb agreement, pronouns, and verb tenses',
      order: 1,
      categoryId: englishConventions.id,
      isPremium: false,
      textContent: `
# Grammar and Usage (SAT)

## Subject-Verb Agreement

**Rule:** Subjects and verbs must agree in number (singular/plural).

### Common Traps

❌ **Prepositional phrases between subject and verb:**
- "The box of chocolates **are** here" → WRONG
- "The box of chocolates **is** here" → ✓ (subject is "box")

❌ **Compound subjects:**
- "Tom and Jerry **is** friends" → WRONG  
- "Tom and Jerry **are** friends" → ✓ (two people = plural)

## Pronoun Agreement

**Rule:** Pronouns must agree with their antecedent in number.

❌ "Each student must bring **their** book" → WRONG
✓ "Each student must bring **his or her** book"
✓ "Students must bring **their** books"

## Verb Tense Consistency

**Rule:** Keep tenses consistent unless time shifts.

❌ "She walks to school and **bought** lunch" → WRONG
✓ "She walked to school and bought lunch" → both past
✓ "She walks to school and buys lunch" → both present

## Common SAT Errors

### 1. Who vs. Whom
- **Who** = subject (who did it?)
- **Whom** = object (to whom? for whom?)

### 2. Its vs. It's
- **Its** = possessive
- **It's** = it is

### 3. Their/There/They're
- **Their** = possessive
- **There** = location
- **They're** = they are
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: grammarUsage.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Which is correct?\n\nA) The team are winning\nB) The team is winning',
        solution: `
**Solution:**

"Team" is a **collective noun** (singular) even though it contains multiple people.

Use singular verb: **is**

**Answer:** B - The team is winning

**SAT Tip:** Collective nouns (team, group, class) are singular!
`
      },
      {
        topicId: grammarUsage.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Fix the error: "Everyone must submit their homework by Friday."',
        solution: `
**Solution:**

"Everyone" is **singular** but "their" is plural.

**Options to fix:**
1. "Everyone must submit **his or her** homework by Friday."
2. "Students must submit **their** homework by Friday."

**Answer:** Change "their" to "his or her" OR make subject plural

**SAT Tip:** "Everyone," "each," "either," "neither" are all singular!
`
      },
      {
        topicId: grammarUsage.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Which is correct?\n\nA) The author, along with her editors, are attending\nB) The author, along with her editors, is attending',
        solution: `
**Solution:**

The phrase "along with her editors" is extra information.

The **true subject** is "author" (singular).

Ignore the phrase between commas when determining agreement.

**Answer:** B - The author... is attending

**SAT Tip:** Phrases like "along with," "as well as," "in addition to" don't change the subject!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: grammarUsage.id,
        front: 'What is subject-verb agreement?',
        back: 'Subjects and verbs must match in number (singular subject = singular verb, plural = plural)'
      },
      {
        topicId: grammarUsage.id,
        front: 'Are "everyone," "each," and "neither" singular or plural?',
        back: 'Singular! Use singular verbs and pronouns (everyone is, each has, etc.)'
      },
      {
        topicId: grammarUsage.id,
        front: 'What\'s the difference between "its" and "it\'s"?',
        back: 'its = possessive (no apostrophe); it\'s = it is (with apostrophe)'
      }
    ]
  })

  console.log('✓ Created topic: Grammar and Usage (3 examples, 3 flashcards)')

  // Topic 3: Punctuation
  const punctuation = await prisma.topic.upsert({
    where: { slug: 'sat-punctuation' },
    update: {},
    create: {
      slug: 'sat-punctuation',
      title: 'Punctuation',
      description: 'Master commas, semicolons, colons, and dashes',
      order: 2,
      categoryId: englishConventions.id,
      isPremium: false,
      textContent: `
# Punctuation (SAT)

## Commas

### Use commas for:

**1. Lists (3+ items):**
"I bought apples, oranges, and bananas."

**2. Independent clauses with FANBOYS:**
"I studied hard, **and** I passed the test."
(FANBOYS: For, And, Nor, But, Or, Yet, So)

**3. Introductory elements:**
"After the game**,** we went home."

**4. Non-essential information:**
"My friend**,** who lives in Boston**,** is visiting."

### DON'T use commas:
❌ Between subject and verb (unless non-essential info)
❌ Before "that" in most cases

## Semicolons (;)

**Use semicolons to:**

**1. Join independent clauses (complete sentences):**
"I love reading**;** my sister prefers sports."

**2. Separate complex list items:**
"We visited Portland, Maine**;** Austin, Texas**;** and Seattle, Washington."

## Colons (:)

**Use colons to introduce:**
- Lists: "Bring three things**:** pencil, paper, calculator."
- Explanations: "She had one goal**:** to win."

**Rule:** Must have a **complete sentence** before the colon!

## Dashes (—)

**Use dashes for:**
- Emphasis: "She bought the car**—**a red convertible**—**yesterday."
- Dramatic pause or interruption

**Note:** Can often replace commas or parentheses
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: punctuation.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Which is correct?\n\nA) I like dogs, cats and birds.\nB) I like dogs, cats, and birds.',
        solution: `
**Solution:**

With **3 or more items**, use commas to separate all items.

The comma before "and" is called the **Oxford comma** (SAT accepts it).

**Answer:** B - I like dogs, cats, and birds.

**SAT Tip:** In lists of 3+, use commas between all items!
`
      },
      {
        topicId: punctuation.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Which is correct?\n\nA) The movie was long, it lasted three hours.\nB) The movie was long; it lasted three hours.',
        solution: `
**Solution:**

Two independent clauses (complete sentences):
- "The movie was long"
- "It lasted three hours"

**Cannot use comma alone** → comma splice error!

**Options:**
- Semicolon: "long**;** it lasted"
- Period: "long**.** It lasted"
- Comma + conjunction: "long**, and** it lasted"

**Answer:** B - The movie was long; it lasted three hours.

**SAT Tip:** Comma alone can't join two complete sentences!
`
      },
      {
        topicId: punctuation.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Which is correct?\n\nA) She had one goal: to become a doctor.\nB) She had: one goal, to become a doctor.',
        solution: `
**Solution:**

Colons introduce lists or explanations, but must follow a **complete sentence**.

**A:** "She had one goal" is complete → ✓
**B:** "She had" is incomplete → ✗

**Answer:** A - She had one goal: to become a doctor.

**SAT Tip:** Complete sentence before colon; fragment is okay after!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: punctuation.id,
        front: 'When do you use a semicolon?',
        back: 'To join two independent clauses (complete sentences) OR to separate complex list items'
      },
      {
        topicId: punctuation.id,
        front: 'What must come before a colon?',
        back: 'A complete sentence (but what follows can be a fragment, list, or explanation)'
      },
      {
        topicId: punctuation.id,
        front: 'What is a comma splice?',
        back: 'Using only a comma to join two complete sentences (incorrect! Use semicolon, period, or comma + conjunction)'
      }
    ]
  })

  console.log('✓ Created topic: Punctuation (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully created SAT Reading & Writing content!')
  console.log('   New categories: 2 (Reading: Command of Evidence, Writing: English Conventions)')
  console.log('   New topics: 3')
  console.log('   Total example problems added: 9')
  console.log('   Total flashcards added: 9')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
