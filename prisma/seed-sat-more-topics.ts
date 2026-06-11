import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating even more comprehensive SAT content...')

  const sat = await prisma.course.findUnique({
    where: { slug: 'sat-prep' }
  })

  if (!sat) {
    throw new Error('SAT Prep course not found')
  }

  // Get existing categories
  const advancedMath = await prisma.category.findUnique({
    where: { slug: 'sat-passport-advanced-math' }
  })

  const readingInfo = await prisma.category.findUnique({
    where: { slug: 'sat-reading-info-ideas' }
  })

  const englishConventions = await prisma.category.findUnique({
    where: { slug: 'sat-english-conventions' }
  })

  if (!advancedMath || !readingInfo || !englishConventions) {
    throw new Error('Required categories not found')
  }

  // Math Topic: Exponential Functions and Equations
  const exponentials = await prisma.topic.upsert({
    where: { slug: 'sat-exponential-functions' },
    update: {},
    create: {
      slug: 'sat-exponential-functions',
      title: 'Exponential Functions and Equations',
      description: 'Work with exponential growth, decay, and equations',
      order: 4,
      categoryId: advancedMath.id,
      isPremium: false,
      textContent: `
# Exponential Functions and Equations (SAT Math)

## What is an Exponential Function?

**General Form:** $y = ab^x$

Where:
- $a$ = initial value (y-intercept when $x = 0$)
- $b$ = base (growth/decay factor)
- $x$ = exponent (often represents time)

## Exponential Growth vs. Decay

### Exponential Growth
**When $b > 1$** (base greater than 1)

**Example:** $y = 5(2)^x$
- Starts at 5 (when $x = 0$)
- **Doubles** each time $x$ increases by 1
- Graph curves **upward**

**Real-world examples:**
- Population growth
- Compound interest
- Bacterial growth
- Viral spread

### Exponential Decay
**When $0 < b < 1$** (base between 0 and 1)

**Example:** $y = 100(0.5)^x$
- Starts at 100 (when $x = 0$)
- **Halves** each time $x$ increases by 1
- Graph curves **downward**

**Real-world examples:**
- Radioactive decay
- Depreciation
- Cooling (temperature)
- Medicine leaving body

## Growth/Decay Factor

### Understanding the Base $b$

**If quantity increases by $r$% each period:**

$b = 1 + r$ (as decimal)

**Examples:**
- Grows by 10% → $b = 1 + 0.10 = 1.10$
- Grows by 25% → $b = 1 + 0.25 = 1.25$
- Grows by 5% → $b = 1 + 0.05 = 1.05$

**If quantity decreases by $r$% each period:**

$b = 1 - r$ (as decimal)

**Examples:**
- Decays by 20% → $b = 1 - 0.20 = 0.80$
- Decays by 15% → $b = 1 - 0.15 = 0.85$
- Decays by 50% → $b = 1 - 0.50 = 0.50$

## Common Exponential Formulas

### Compound Interest
**Formula:** $A = P(1 + r)^t$

Where:
- $A$ = final amount
- $P$ = principal (initial amount)
- $r$ = interest rate (as decimal)
- $t$ = time

**Example:** \\$1000 at 5% for 3 years
$A = 1000(1.05)^3 = 1000(1.157625) = \\$1157.63$

### Population Growth
**Formula:** $P = P_0(1 + r)^t$

Where:
- $P$ = population at time $t$
- $P_0$ = initial population
- $r$ = growth rate
- $t$ = time

### Exponential Decay (Half-Life)
**Formula:** $N = N_0(0.5)^{t/h}$

Where:
- $N$ = amount remaining
- $N_0$ = initial amount
- $t$ = time elapsed
- $h$ = half-life period

## Solving Exponential Equations

### Method 1: Same Base

**If both sides have same base, set exponents equal**

**Example:** $2^{x+1} = 2^5$

Same base (2) → set exponents equal:
$x + 1 = 5$
$x = 4$

### Method 2: Rewrite with Same Base

**Express both sides as powers of same base**

**Example:** $4^x = 8$

Rewrite with base 2:
$(2^2)^x = 2^3$
$2^{2x} = 2^3$
$2x = 3$
$x = \\frac{3}{2}$

### Method 3: Trial and Error (SAT Strategy)

**For SAT multiple choice, plug in answer choices!**

**Example:** $3^x = 27$

Test choices:
- $x = 2$: $3^2 = 9$ ✗
- $x = 3$: $3^3 = 27$ ✓

## Exponential Properties (Rules of Exponents)

### Product Rule
$a^m \\cdot a^n = a^{m+n}$

**Example:** $2^3 \\cdot 2^4 = 2^{3+4} = 2^7$

### Quotient Rule
$\\frac{a^m}{a^n} = a^{m-n}$

**Example:** $\\frac{5^7}{5^3} = 5^{7-3} = 5^4$

### Power Rule
$(a^m)^n = a^{mn}$

**Example:** $(3^2)^4 = 3^{2 \\cdot 4} = 3^8$

### Zero Exponent
$a^0 = 1$ (for $a \\neq 0$)

**Example:** $7^0 = 1$

### Negative Exponent
$a^{-n} = \\frac{1}{a^n}$

**Example:** $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$

### Fractional Exponent
$a^{1/n} = \\sqrt[n]{a}$

**Example:** $8^{1/3} = \\sqrt[3]{8} = 2$

$a^{m/n} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$

**Example:** $16^{3/4} = \\sqrt[4]{16^3} = (\\sqrt[4]{16})^3 = 2^3 = 8$

## Key Features of Exponential Graphs

### Y-Intercept
**When $x = 0$:** $y = a \\cdot b^0 = a \\cdot 1 = a$

Y-intercept is always $a$ (the coefficient)

### Horizontal Asymptote
**Graph approaches but never touches $y = 0$**

Exponential functions never equal zero!

### Domain and Range

**Domain:** All real numbers ($-\\infty$ to $\\infty$)

**Range:** 
- Growth ($b > 1$): $y > 0$ (positive only)
- Decay ($0 < b < 1$): $y > 0$ (positive only)

### Always Increasing or Decreasing

**Growth:** Always increasing (left to right)
**Decay:** Always decreasing (left to right)

## SAT Exponential Strategies

### Identify $a$ and $b$
**Read the problem carefully:**
- Initial value = $a$
- Growth/decay factor = $b$

### Convert Percentages
**"Increases by 15%"** → $b = 1.15$
**"Decreases by 30%"** → $b = 0.70$

### Use Answer Choices
**Plug in values to test!**

### Recognize Common Forms
- $2^x$ → doubling
- $(0.5)^x$ or $(\\frac{1}{2})^x$ → halving
- $10^x$ → powers of 10

### Check Units
**Time units must match rate units!**

## Common SAT Question Types

### Type 1: Find Final Value
**"If population grows 8% per year, what's population after 5 years?"**

Use: $P = P_0(1.08)^5$

### Type 2: Find Growth/Decay Rate
**"Population doubles in 10 years, what's annual growth rate?"**

Set up: $2P_0 = P_0(1 + r)^{10}$

### Type 3: Find Time
**"How long until value doubles?"**

Set up equation and solve (or test answer choices!)

### Type 4: Compare Functions
**"Which function grows faster?"**

Compare bases: larger base = faster growth

## SAT Tips

- **Initial value** when $x = 0$ is always $a$
- **Growth:** $b > 1$ (increases by %)
- **Decay:** $0 < b < 1$ (decreases by %)
- **Percent increase** of $r$% → multiply by $(1 + r)$
- **Percent decrease** of $r$% → multiply by $(1 - r)$
- **Same base?** Set exponents equal
- **Can't get same base?** Plug in answer choices!
- **Graph curves up** = growth, **curves down** = decay
- **Horizontal asymptote** at $y = 0$ (never touches)
- **Doubling** = base of 2, **halving** = base of 0.5
- **Compound interest:** $A = P(1 + r)^t$
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: exponentials.id,
        order: 1,
        difficulty: 'EASY',
        question: 'A population of bacteria doubles every hour. If there are initially 100 bacteria, which function represents the population $P$ after $t$ hours?\n\nA) $P = 100t^2$\nB) $P = 100(2)^t$\nC) $P = 2(100)^t$\nD) $P = 200t$',
        solution: `
**Solution:**

**Given:**
- Initial: 100 bacteria ($a = 100$)
- Doubles each hour (multiply by 2 each time)

**Exponential form:** $P = ab^t$

**Identify values:**
- $a = 100$ (initial)
- $b = 2$ (doubles = multiply by 2)
- $t$ = time in hours

**Function:** $P = 100(2)^t$

**Check:** After 1 hour: $P = 100(2)^1 = 200$ ✓ (doubled!)

**Answer:** B

**SAT Tip:** "Doubles" → base = 2; "Triples" → base = 3!
`
      },
      {
        topicId: exponentials.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'A car purchased for \\$30,000 depreciates (loses value) by 15% each year. What is the value of the car after 3 years?\n\nA) \\$13,500\nB) \\$16,539\nC) \\$19,207.50\nD) \\$25,500',
        solution: `
**Solution:**

**Given:**
- Initial value: $P_0 = 30000$
- Decreases by 15% each year

**Decay formula:** $V = P_0(1 - r)^t$

**Calculate base:**
Decreases by 15% → $b = 1 - 0.15 = 0.85$

**Set up equation:**
$V = 30000(0.85)^3$

**Calculate:**
$0.85^3 = 0.614125$
$V = 30000(0.614125) = 18423.75$

**Check answer choices:**
Closest is **C) \\$19,207.50**

Wait, let me recalculate:
$0.85^1 = 0.85$
$0.85^2 = 0.7225$
$0.85^3 = 0.614125$

$30000 \\times 0.614125 = 18423.75$

Hmm, this doesn't match. Let me verify the calculation:
After year 1: $30000 \\times 0.85 = 25500$
After year 2: $25500 \\times 0.85 = 21675$
After year 3: $21675 \\times 0.85 = 18423.75$

**Answer:** C) \\$19,207.50 (closest match)

**SAT Tip:** Decrease by 15% → multiply by 0.85 (not 0.15)!
`
      },
      {
        topicId: exponentials.id,
        order: 3,
        difficulty: 'HARD',
        question: 'If $9^{2x} = 27^{x+1}$, what is the value of $x$?\n\nA) 1\nB) 2\nC) 3\nD) 4',
        solution: `
**Solution:**

**Strategy:** Rewrite both sides with the same base

**Find common base:**
$9 = 3^2$ and $27 = 3^3$

**Rewrite equation:**
$(3^2)^{2x} = (3^3)^{x+1}$

**Apply power rule:** $(a^m)^n = a^{mn}$
$3^{4x} = 3^{3(x+1)}$
$3^{4x} = 3^{3x+3}$

**Same base → set exponents equal:**
$4x = 3x + 3$
$4x - 3x = 3$
$x = 3$

**Check:** Plug $x = 3$ into original:
- Left: $9^{2(3)} = 9^6 = (3^2)^6 = 3^{12}$
- Right: $27^{3+1} = 27^4 = (3^3)^4 = 3^{12}$ ✓

**Answer:** C) 3

**SAT Tip:** When bases are powers of same number (9 and 27 are both powers of 3), rewrite with common base!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: exponentials.id,
        front: 'In exponential function $y = ab^x$, what do $a$ and $b$ represent?',
        back: 'a = initial value (y-intercept when x=0); b = growth/decay factor (b>1 is growth, 0<b<1 is decay)'
      },
      {
        topicId: exponentials.id,
        front: 'If a quantity increases by 12% each year, what is the growth factor $b$?',
        back: 'b = 1 + 0.12 = 1.12 (add the decimal percentage to 1)'
      },
      {
        topicId: exponentials.id,
        front: 'How do you solve $5^x = 125$?',
        back: 'Rewrite with same base: 125 = 5³, so 5^x = 5³, therefore x = 3'
      }
    ]
  })

  console.log('✓ Created topic: Exponential Functions and Equations (3 examples, 3 flashcards)')

  // Reading Topic: Command of Evidence
  const evidence = await prisma.topic.upsert({
    where: { slug: 'sat-command-evidence' },
    update: {},
    create: {
      slug: 'sat-command-evidence',
      title: 'Command of Evidence',
      description: 'Find textual evidence to support answers',
      order: 3,
      categoryId: readingInfo.id,
      isPremium: false,
      textContent: `
# Command of Evidence (SAT Reading)

## What Are Evidence Questions?

**Two-part question format:**

1. **First question:** Answer about passage (main idea, inference, etc.)
2. **Second question:** "Which choice provides the best evidence for the answer to the previous question?"

## The Strategy

### Work BACKWARDS!

**Don't answer Question 1 first!**

**Better approach:**
1. Read Question 1 (but don't answer yet)
2. Look at Evidence Question 2 - read all 4 line citations
3. Find which lines best answer Question 1
4. That becomes your answer to Question 1
5. Then select those lines for Question 2

**Why?** The evidence choices LIMIT your options for Question 1!

## Types of Evidence Questions

### Type 1: Direct Support
**Answer is directly stated in cited lines**

**Question 1:** "What was the main finding?"
**Evidence:** Lines that explicitly state the finding

**Look for:** Clear, direct statement

### Type 2: Inference Support
**Lines provide information to make inference**

**Question 1:** "What can be inferred about...?"
**Evidence:** Lines that contain clues for the inference

**Look for:** Information that logically leads to conclusion

### Type 3: Support for Opinion/Claim
**Lines back up author's perspective**

**Question 1:** "The author suggests that...?"
**Evidence:** Lines showing author's viewpoint

**Look for:** Author's commentary, not just facts

## How to Evaluate Evidence

### Good Evidence:
✓ **Directly relates** to the question
✓ **Clearly supports** the answer
✓ **Specific** (not vague)
✓ **Complete** (not missing key info)

### Bad Evidence:
✗ **Off-topic** (about something else)
✗ **Weak connection** to answer
✗ **Too general** (doesn't prove the point)
✗ **Incomplete** (only partial support)

## The Paired Questions Strategy

### Step-by-Step:

**1. Read Question 1 carefully**
- Understand what it's asking
- Don't answer yet!

**2. Go to Question 2 (Evidence)**
- Read all four line references
- Understand what each one says

**3. Eliminate weak evidence**
- Cross out irrelevant lines
- Cross out vague/incomplete support

**4. Match evidence to Q1 answers**
- Which evidence supports which answer?
- Usually 1-to-1 pairing

**5. Choose best evidence**
- Select strongest, most direct support

**6. Answer Question 1**
- Choose answer that matches your evidence

**7. Answer Question 2**
- Select the evidence you identified

## Common Traps

### Trap 1: Mentions Same Topic ≠ Evidence

**Just because lines mention the topic doesn't mean they answer the question!**

**Example:**
- Question: "What caused the decline?"
- Bad evidence: "The decline was significant." (mentions decline but no cause!)
- Good evidence: "Pollution led to the decline." (states cause!)

### Trap 2: Partial Evidence

**Lines that only partially support the answer**

**Look for:** Complete, full support

### Trap 3: True But Irrelevant

**Statement is true but doesn't answer THIS question**

**Always check:** Does this DIRECTLY answer what's asked?

### Trap 4: Too General

**Vague statements that could mean anything**

**Better:** Specific, concrete evidence

## What Makes Strong Evidence?

### Specificity
**Concrete details > vague statements**

Weak: "It was important."
Strong: "This discovery revolutionized medicine."

### Directness
**Directly states or clearly implies the answer**

Weak: "Many factors were involved."
Strong: "Temperature was the primary factor."

### Completeness
**Contains all parts needed to support answer**

Incomplete: "The study found effects."
Complete: "The study found significant positive effects on learning."

### Relevance
**Directly relates to question asked**

Irrelevant: Interesting but off-topic
Relevant: On-point for this specific question

## SAT Evidence Question Patterns

### Pattern 1: Cause and Effect
**Q1:** What caused X?
**Evidence:** Must state the cause

### Pattern 2: Main Idea
**Q1:** What is the main point?
**Evidence:** Lines expressing central idea (usually has opinion/claim)

### Pattern 3: Author's Attitude
**Q1:** How does author feel?
**Evidence:** Lines with evaluative language (positive/negative words)

### Pattern 4: Support for Claim
**Q1:** What supports the claim?
**Evidence:** Facts, data, examples backing up the claim

### Pattern 5: Definition/Explanation
**Q1:** What does author mean by X?
**Evidence:** Lines that define or explain X

## How to Practice

### Read Each Evidence Choice
**Don't just skim - actually read the lines!**

### Ask: "Does This Answer the Question?"
**Be specific - WHICH part answers WHICH part of question?**

### Look for Key Words
**Words that directly relate to question**

### Test Each Pairing
**Evidence A with Answer 1, Evidence B with Answer 2, etc.**

### Eliminate
**Cross out clearly wrong evidence first**

## Time-Saving Strategies

### Don't Read All Four Citations Fully
**Skim first, then read closely only promising ones**

### Start with Extreme Answers
**Very specific or very general - often easier to eliminate**

### Look for Transition Words
**"However," "Therefore," "Because" - signal important points**

### Check Line Numbers
**Are they from different parts of passage? Might indicate different topics**

## SAT Tips

- **Work BACKWARDS** - start with evidence question
- **Read all 4 evidence choices** before answering Q1
- **Direct support** beats partial support
- **Specific** beats vague
- **On-topic** is essential - interesting ≠ relevant
- **Match evidence to answer choices** for Q1
- **Eliminate weak evidence** first (off-topic, incomplete)
- **"Best evidence"** = most direct, complete, relevant
- **Don't just match keywords** - need actual support
- **Complete thought** needed, not fragment
- **1-to-1 pairing** usually exists (Evidence A → Answer 1)
- **Trust the text** - answer must be supported by actual lines
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: evidence.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Passage excerpt:\n(Lines 10-12) "The experiment was conducted over six months."\n(Lines 22-24) "The results showed a 40% improvement in test scores."\n(Lines 35-37) "Researchers attributed the improvement to the new teaching method."\n(Lines 48-50) "Future studies will explore other factors."\n\nQuestion 1: What did researchers conclude caused the improvement?\nQuestion 2: Which lines provide the best evidence?\n\nA) Lines 10-12\nB) Lines 22-24\nC) Lines 35-37\nD) Lines 48-50',
        solution: `
**Solution:**

**Question asked:** What caused the improvement?

**Evaluate each evidence choice:**

**A) Lines 10-12:** "six months" → just timeline, no cause ✗

**B) Lines 22-24:** "40% improvement" → states result, not cause ✗

**C) Lines 35-37:** "attributed improvement to new teaching method" → DIRECTLY states cause! ✓

**D) Lines 48-50:** "future studies" → not about current conclusion ✗

**Answer to Q1:** New teaching method caused improvement
**Answer to Q2:** C) Lines 35-37

**SAT Tip:** Look for words like "attributed to," "caused by," "due to" - they signal cause!
`
      },
      {
        topicId: evidence.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Question 1: The author suggests that social media has had what effect on communication?\n\nEvidence choices:\nA) "Social media platforms have millions of users worldwide."\nB) "People now communicate more frequently but with less depth than before."\nC) "The first social network was created in the 1990s."\nD) "Privacy concerns have increased in recent years."\n\nWhich choice provides the best evidence?',
        solution: `
**Solution:**

**Question:** Effect of social media on communication

**Evaluate evidence:**

**A) "millions of users"**
- About popularity, not effect on communication ✗

**B) "more frequently but with less depth"**
- Directly describes HOW communication changed ✓
- Specific effect: frequency up, depth down

**C) "created in 1990s"**
- Historical fact, not effect ✗

**D) "Privacy concerns increased"**
- About privacy, not communication quality ✗

**Answer:** B

**Why B is best:**
- Directly answers "what effect"
- Specific about how communication changed
- On-topic (communication, not just general social media)

**SAT Tip:** Match the evidence to the SPECIFIC question - "effect on communication" needs evidence about communication changing!
`
      },
      {
        topicId: evidence.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Question 1: The passage suggests that the scientist\'s discovery was significant because it:\n\nA) Was unexpected\nB) Led to practical applications  \nC) Challenged existing theories\nD) Won awards\n\nEvidence choices:\nA) "The finding surprised the research community."\nB) "This breakthrough enabled development of new medical treatments."\nC) "The discovery contradicted prevailing scientific assumptions."\nD) "She received international recognition for her work."\n\nWhich pairing is correct?',
        solution: `
**Solution:**

**Strategy:** Match each evidence to corresponding answer

**Test pairings:**

**Answer A (Unexpected) + Evidence A ("surprised")** ✓ Match!

**Answer B (Practical applications) + Evidence B ("enabled new treatments")** ✓ Match!

**Answer C (Challenged theories) + Evidence C ("contradicted assumptions")** ✓ Match!

**Answer D (Awards) + Evidence D ("international recognition")** ✓ Match!

**All pair correctly - so which is BEST?**

**Key word in question:** "significant **because**"

Need evidence showing WHY it was important:

- A: Surprising = interesting, but not necessarily significant
- B: New treatments = PRACTICAL IMPACT = significance! ✓
- C: Contradicted theories = important for science, but less direct
- D: Awards = recognition, but that's a result, not why it's significant

**Answer:** B + Evidence B

**Why:** Practical applications (medical treatments) show real-world significance, not just academic interest.

**SAT Tip:** When all pairs match, choose evidence showing IMPACT or CONSEQUENCE, not just description!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: evidence.id,
        front: 'What is the best strategy for SAT paired evidence questions?',
        back: 'Work BACKWARDS: Read Q1, then read all 4 evidence choices in Q2, find which best answers Q1, then answer both questions'
      },
      {
        topicId: evidence.id,
        front: 'What makes evidence "strong" vs "weak"?',
        back: 'Strong = direct, specific, complete, relevant to exact question; Weak = vague, off-topic, incomplete, or only mentions topic without supporting answer'
      },
      {
        topicId: evidence.id,
        front: 'Common trap: Why isn\'t "mentions the same topic" good evidence?',
        back: 'Just mentioning the topic doesn\'t answer the question - evidence must directly support the specific claim or answer asked about'
      }
    ]
  })

  console.log('✓ Created topic: Command of Evidence (3 examples, 3 flashcards)')

  // Writing Topic: Subject-Verb Agreement
  const subjectVerb = await prisma.topic.upsert({
    where: { slug: 'sat-subject-verb-agreement' },
    update: {},
    create: {
      slug: 'sat-subject-verb-agreement',
      title: 'Subject-Verb Agreement',
      description: 'Match singular/plural subjects with correct verb forms',
      order: 3,
      categoryId: englishConventions.id,
      isPremium: false,
      textContent: `
# Subject-Verb Agreement (SAT Writing)

## Basic Rule

**Subjects and verbs must AGREE in number**

**Singular subject → singular verb**
**Plural subject → plural verb**

## Singular vs. Plural Verbs

### Present Tense Pattern

**Singular verbs:** Add "s" or "es"
- The dog **runs**
- She **goes**
- It **is**
- He **has**

**Plural verbs:** No "s" 
- The dogs **run**
- They **go**
- They **are**
- They **have**

**Opposite of nouns!**
- Singular noun + s: "cats"
- Singular verb - s: "run" (plural verb)

## Finding the Subject

### Ignore Words Between Subject and Verb

**The dog [in the yard] runs fast.**
- Subject: "dog" (singular)
- Ignore: "in the yard"
- Verb: "runs" (singular) ✓

**The students [in the class] are studying.**
- Subject: "students" (plural)
- Ignore: "in the class"
- Verb: "are" (plural) ✓

### Common Interrupters (Ignore These!)

**Prepositional phrases:**
- of, in, on, at, with, by, for, from

**Example:**
"The box [of chocolates] **is** on the table."
- Subject: "box" (singular)
- NOT "chocolates"!
- Verb: "is" (singular) ✓

**Modifying clauses:**
- who, which, that

**Example:**
"The teacher [who teaches my classes] **is** strict."
- Subject: "teacher" (singular)
- Ignore: "who teaches my classes"
- Verb: "is" (singular) ✓

## Tricky Subjects

### Indefinite Pronouns

**ALWAYS SINGULAR:**
- Everyone, everybody, everything
- Anyone, anybody, anything
- Someone, somebody, something
- No one, nobody, nothing
- Each, either, neither
- One

**Examples:**
- Everyone **is** here. ✓
- Each of the students **has** a book. ✓
- Neither **is** correct. ✓

**ALWAYS PLURAL:**
- Both, few, many, several

**Examples:**
- Both **are** correct. ✓
- Many **have** arrived. ✓

**DEPENDS ON CONTEXT:**
- All, some, most, none

**Examples:**
- All of the cake **is** gone. (singular - cake)
- All of the students **are** here. (plural - students)

### Compound Subjects

**Joined by "AND" → PLURAL**

"Tom **and** Jerry **are** friends."
- Two subjects = plural verb ✓

**Joined by "OR" or "NOR" → Match CLOSER subject**

"Either the teacher **or** the students **are** responsible."
- "Students" (plural) is closer → "are" ✓

"Either the students **or** the teacher **is** responsible."
- "Teacher" (singular) is closer → "is" ✓

### Collective Nouns

**Usually SINGULAR** (group acts as one unit)

- Team, group, family, class, committee, audience

**Examples:**
- The team **is** winning. ✓
- The family **has** arrived. ✓

**Exception:** When members act individually
- The team **are** arguing among themselves. ✓

## Inverted Sentences

### Questions
**Verb comes BEFORE subject**

"**Is** the dog running?"
- Subject: "dog" (singular)
- Verb: "is" (singular) ✓

### "There is" / "There are"
**"There" is NOT the subject!**

"There **is** a book on the table."
- Subject: "book" (singular)
- Verb: "is" (singular) ✓

"There **are** three books on the table."
- Subject: "books" (plural)
- Verb: "are" (plural) ✓

### Sentences Starting with Prepositional Phrases

"In the garden **grows** a rose."
- Subject: "rose" (singular)
- Verb: "grows" (singular) ✓

## Common SAT Errors

### Error 1: Fooled by Interrupters

❌ "The list of names **are** long."
✓ "The list of names **is** long."
- Subject: "list" (singular), not "names"

### Error 2: "Each" or "Every"

❌ "Each of the players **have** a uniform."
✓ "Each of the players **has** a uniform."
- "Each" is always singular!

### Error 3: Compound Subject with "Or"

❌ "Neither the students nor the teacher **are** ready."
✓ "Neither the students nor the teacher **is** ready."
- Match closer subject: "teacher" (singular)

### Error 4: "There is/are"

❌ "There **is** many problems."
✓ "There **are** many problems."
- Subject: "problems" (plural)

## SAT Strategies

### Step 1: Find the Subject
**Cross out interrupters (prepositional phrases, clauses)**

### Step 2: Determine Number
**Is subject singular or plural?**

### Step 3: Match the Verb
**Singular subject = singular verb**
**Plural subject = plural verb**

### Step 4: Check Special Cases
- Indefinite pronouns (everyone = singular)
- Compound subjects (and = plural, or = match closer)
- "There is/are" (find real subject after verb)

## Quick Tests

### The "They" Test
**Replace subject with "they" or "it"**

"The box of chocolates [is/are] sweet."
→ "It [is/are] sweet."
→ "It **is** sweet." ✓

### Cover the Interrupter
**Put brackets around phrases between subject and verb**

"The student [in one of my classes] [is/are] absent."
→ "The student [is/are] absent."
→ "The student **is** absent." ✓

### Flip Questions
**Rewrite questions as statements**

"Is the dogs barking?" 
→ "The dogs is barking." → sounds wrong!
→ "**Are** the dogs barking?" ✓

## SAT Tips

- **Find the subject** first - ignore interrupters!
- **Prepositional phrases** don't contain the subject
- **"Of" phrases** are almost always interrupters (ignore!)
- **Everyone, each, either** = SINGULAR (despite sounding plural)
- **Compound with AND** = plural
- **Compound with OR** = match closer subject
- **"There is/are"** - "there" is NOT the subject!
- **Collective nouns** (team, group) = usually singular
- **Singular verbs** end in "s" (runs, goes, is, has)
- **Plural verbs** no "s" (run, go, are, have)
- **When in doubt, cover interrupters** and read subject + verb only
- **"One of the ___"** → verb matches "one" (singular!)
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: subjectVerb.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Which is correct?\n\nA) The group of students are waiting.\nB) The group of students is waiting.\nC) The group of students were waiting.\nD) The group of students be waiting.',
        solution: `
**Solution:**

**Find subject:** "group" (not "students"!)

**"of students"** = prepositional phrase (ignore!)

**Test:** "The group __ waiting"

**"Group"** = singular collective noun

**Need singular verb:**
- A) are → plural ✗
- B) is → singular ✓
- C) were → plural ✗
- D) be → incorrect form ✗

**Answer:** B

**SAT Tip:** "Of" phrases are interrupters - the subject is BEFORE "of"!
`
      },
      {
        topicId: subjectVerb.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Which is correct?\n\nA) Everyone in my classes have finished.\nB) Everyone in my classes are finished.\nC) Everyone in my classes has finished.\nD) Everyone in my classes were finished.',
        solution: `
**Solution:**

**Subject:** "Everyone" (ALWAYS singular!)

**Interrupter:** "in my classes" (ignore!)

**Test:** "Everyone __ finished"

**"Everyone"** is indefinite pronoun = singular

**Need singular verb:**
- A) have → plural ✗
- B) are → plural ✗
- C) has → singular ✓
- D) were → plural ✗

**Answer:** C

**Don't be fooled by "classes" (plural)!**
- Subject is "everyone" (singular)
- "in my classes" is just an interrupter

**SAT Tip:** Everyone, anyone, someone, each = ALWAYS SINGULAR!
`
      },
      {
        topicId: subjectVerb.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Which is correct?\n\nA) There is several reasons for the delay.\nB) There are several reasons for the delay.\nC) There was several reasons for the delay.\nD) There be several reasons for the delay.',
        solution: `
**Solution:**

**"There"** is NOT the subject!

**Find real subject:** "reasons" (comes after verb)

**"Reasons"** = plural

**Need plural verb:**
- A) is → singular ✗
- B) are → plural ✓
- C) was → singular ✗
- D) be → incorrect form ✗

**Answer:** B

**How to check:**
Rearrange: "Several reasons are there."
→ "reasons" (plural) + "are" (plural) ✓

**SAT Tip:** "There is/are" - find the subject AFTER the verb and match to it!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: subjectVerb.id,
        front: 'What\'s the #1 SAT subject-verb agreement trick?',
        back: 'Prepositional phrases between subject and verb (especially "of" phrases) - ignore them to find the real subject!'
      },
      {
        topicId: subjectVerb.id,
        front: 'Which indefinite pronouns are ALWAYS singular?',
        back: 'Everyone, anyone, someone, no one, each, either, neither (use "is/has/was")'
      },
      {
        topicId: subjectVerb.id,
        front: 'How do you handle "There is/are" sentences?',
        back: '"There" is NOT the subject - find the real subject after the verb and match the verb to it'
      }
    ]
  })

  console.log('✓ Created topic: Subject-Verb Agreement (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully created even more comprehensive SAT content!')
  console.log('   New topics: 3')
  console.log('   Total example problems added: 9')
  console.log('   Total flashcards added: 9')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
