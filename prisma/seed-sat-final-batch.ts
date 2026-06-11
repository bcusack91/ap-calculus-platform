import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating final batch of comprehensive SAT content...')

  const sat = await prisma.course.findUnique({
    where: { slug: 'sat-prep' }
  })

  if (!sat) {
    throw new Error('SAT Prep course not found')
  }

  // Get existing categories
  const problemSolving = await prisma.category.findUnique({
    where: { slug: 'sat-problem-solving-data' }
  })

  const expressionIdeas = await prisma.category.findUnique({
    where: { slug: 'sat-expression-ideas' }
  })

  const englishConventions = await prisma.category.findUnique({
    where: { slug: 'sat-english-conventions' }
  })

  if (!problemSolving || !expressionIdeas || !englishConventions) {
    throw new Error('Required categories not found')
  }

  // Math Topic: Scatterplots and Line of Best Fit
  const scatterplots = await prisma.topic.upsert({
    where: { slug: 'sat-scatterplots-line-fit' },
    update: {},
    create: {
      slug: 'sat-scatterplots-line-fit',
      title: 'Scatterplots and Line of Best Fit',
      description: 'Interpret scatterplots, correlation, and trend lines',
      order: 4,
      categoryId: problemSolving.id,
      isPremium: false,
      textContent: `
# Scatterplots and Line of Best Fit (SAT Math)

## What is a Scatterplot?

**Graph showing relationship between two variables**

**Each point represents:**
- x-coordinate: one variable
- y-coordinate: another variable

**Example:** Height vs. Weight
- Each point = one person
- x = height
- y = weight

## Types of Correlation

### Positive Correlation
**As x increases, y increases**

**Pattern:** Points slope upward (↗)

**Examples:**
- Study time vs. test scores
- Temperature vs. ice cream sales
- Height vs. shoe size

### Negative Correlation
**As x increases, y decreases**

**Pattern:** Points slope downward (↘)

**Examples:**
- Speed vs. travel time
- Price vs. quantity demanded
- Outdoor temperature vs. heating costs

### No Correlation
**No clear pattern**

**Pattern:** Points scattered randomly

**Examples:**
- Shoe size vs. test scores
- Height vs. favorite color

## Strength of Correlation

### Strong Correlation
**Points cluster tightly around a line**
- Clear pattern
- Easy to predict

### Weak Correlation
**Points loosely follow pattern**
- General trend but lots of variation
- Harder to predict

### Perfect Correlation
**All points exactly on a line**
- Rare in real data
- r = 1 (positive) or r = -1 (negative)

## Line of Best Fit (Trend Line)

### What Is It?
**Line that best represents the data trend**

Also called:
- Regression line
- Trend line
- Best-fit line

### Equation Form
**Usually written as:** $y = mx + b$

Where:
- $m$ = slope (rate of change)
- $b$ = y-intercept (starting value)

**Or:** $\\hat{y} = ax + b$ (predicted value)

## Interpreting Slope

### Slope ($m$) Meaning

**Positive slope ($m > 0$):**
- Positive correlation
- For every 1 unit increase in x, y increases by $m$

**Example:** $y = 2x + 10$
- For every 1 hour of study, score increases by 2 points

**Negative slope ($m < 0$):**
- Negative correlation
- For every 1 unit increase in x, y decreases by $|m|$

**Example:** $y = -3x + 100$
- For every 1 mph faster, travel time decreases by 3 minutes

## Interpreting Y-Intercept

### Y-Intercept ($b$) Meaning

**Value of y when x = 0**

**Example:** $y = 5x + 20$
- When study time = 0, predicted score = 20

**Watch out:** Sometimes x = 0 doesn't make sense!
- If x = year (like 2020), y-intercept is for year 0 (not useful!)

## Making Predictions

### Interpolation
**Predicting within the data range**

**Generally reliable**

**Example:** Data from x = 10 to x = 50
- Predicting at x = 30 → interpolation ✓

### Extrapolation
**Predicting outside the data range**

**Less reliable - pattern may not continue!**

**Example:** Data from x = 10 to x = 50
- Predicting at x = 100 → extrapolation ⚠️

## Outliers

### What is an Outlier?
**Point far from the general pattern**

**Effects:**
- Can significantly affect line of best fit
- May indicate error or special case

**On SAT:**
- Questions may ask about outliers
- "Which point doesn't fit the pattern?"

## Correlation vs. Causation

### CRITICAL DISTINCTION!

**Correlation:** Variables are related
**Causation:** One variable CAUSES change in other

### Correlation ≠ Causation!

**Example:**
- Ice cream sales and drowning deaths are correlated
- But ice cream doesn't CAUSE drowning!
- Both are caused by third factor (hot weather!)

**SAT Trap:** Don't assume correlation means causation!

## Correlation Coefficient ($r$)

### What is $r$?
**Number measuring strength and direction of correlation**

### Range: $-1 \\leq r \\leq 1$

**$r = 1$:** Perfect positive correlation
**$r = 0.8$:** Strong positive correlation
**$r = 0.5$:** Moderate positive correlation
**$r = 0$:** No correlation
**$r = -0.5$:** Moderate negative correlation
**$r = -0.8$:** Strong negative correlation
**$r = -1$:** Perfect negative correlation

### Interpreting $r$

**Sign (+ or -):** Direction
- Positive = positive correlation
- Negative = negative correlation

**Magnitude (how close to 1):** Strength
- Close to 1 or -1 = strong
- Close to 0 = weak

## Residuals

### What is a Residual?
**Difference between actual value and predicted value**

**Formula:** Residual = Actual - Predicted

**Positive residual:** Point above line (actual > predicted)
**Negative residual:** Point below line (actual < predicted)
**Zero residual:** Point exactly on line

### Residual Plots
**Graph of residuals**

**Random pattern:** Good fit
**Clear pattern:** Poor fit (need different model)

## SAT Question Types

### Type 1: Interpret Slope
**"What does the slope represent?"**

**Answer:** Rate of change, change in y per unit change in x

### Type 2: Use Equation to Predict
**"According to the line, what is y when x = 10?"**

**Plug in:** $y = m(10) + b$

### Type 3: Identify Correlation
**"Which best describes the relationship?"**

**Look at:** Direction and strength of pattern

### Type 4: Find Outlier
**"Which point is farthest from the trend?"**

**Look for:** Point that doesn't fit pattern

### Type 5: Correlation vs. Causation
**"Does x cause y?"**

**Remember:** Correlation doesn't prove causation!

## SAT Strategies

### Read the Axes!
**Always check what variables are being plotted**

### Look at the Pattern
**Upward slope = positive, downward = negative**

### Use the Equation
**Plug in values - don't try to eyeball!**

### Check Units
**Slope units = (y units) per (x unit)**

### Remember Real-World Context
**Does the answer make sense?**

## Common SAT Patterns

### Temperature and Sales
**Often positive correlation**
- Hot temperature → more cold drinks sold

### Time and Distance
**Positive correlation for travel**
- More time → more distance covered

### Price and Demand
**Negative correlation**
- Higher price → lower demand

### Practice and Performance
**Positive correlation**
- More practice → better performance

## SAT Tips

- **Positive correlation:** Both increase together (upward slope ↗)
- **Negative correlation:** One increases, other decreases (downward slope ↘)
- **No correlation:** Random scatter, no pattern
- **Strong correlation:** Points cluster tightly around line
- **Weak correlation:** Points loosely follow pattern
- **Slope ($m$):** Rate of change (rise/run)
- **Y-intercept ($b$):** Value when x = 0
- **Outlier:** Point far from pattern
- **Interpolation:** Predicting within data range (reliable)
- **Extrapolation:** Predicting outside data range (less reliable)
- **Correlation ≠ Causation:** Related doesn't mean one causes other!
- **Use the equation:** Plug in values to predict
- **Read axes carefully:** Know what x and y represent
- **Context matters:** Does answer make real-world sense?
- **$r$ close to 1 or -1:** Strong correlation
- **$r$ close to 0:** Weak or no correlation
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: scatterplots.id,
        order: 1,
        difficulty: 'EASY',
        question: 'A scatterplot shows the relationship between hours studied (x-axis) and test scores (y-axis). The points show an upward trend from left to right. This indicates:\n\nA) Negative correlation\nB) Positive correlation\nC) No correlation\nD) Causation',
        solution: `
**Solution:**

**Pattern:** Upward trend (↗)

**Meaning:** As x increases, y increases

**This is positive correlation!**

**Check choices:**
- A) Negative → downward slope ✗
- B) Positive → upward slope ✓
- C) No correlation → random scatter ✗
- D) Causation → correlation doesn't prove causation ✗

**Answer:** B

**Why not D?**
Scatterplot shows correlation, but doesn't prove studying CAUSES higher scores (though it likely does - the graph alone doesn't prove it!)

**SAT Tip:** Upward slope = positive correlation; Downward slope = negative correlation!
`
      },
      {
        topicId: scatterplots.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'A line of best fit has equation $y = 3x + 15$, where $x$ represents hours worked and $y$ represents earnings in dollars. What does the slope represent?\n\nA) Total earnings\nB) Earnings when hours = 0\nC) Dollars earned per hour\nD) Total hours worked',
        solution: `
**Solution:**

**Equation:** $y = 3x + 15$

**Slope = 3**

**Slope meaning:** Change in y per unit change in x

**In context:**
- x = hours worked
- y = earnings (dollars)
- Slope = change in dollars per hour

**Slope = 3** means earning \\$3 per hour

**Check choices:**
- A) Total earnings → that's $y$, not slope ✗
- B) Earnings when hours = 0 → that's y-intercept (15) ✗
- C) Dollars per hour → YES! ✓
- D) Total hours → that's $x$ ✗

**Answer:** C

**Note:** Y-intercept of 15 might represent a base payment or starting amount.

**SAT Tip:** Slope = rate of change = (y units) per (x unit)!
`
      },
      {
        topicId: scatterplots.id,
        order: 3,
        difficulty: 'HARD',
        question: 'A scatterplot shows the relationship between age of a car (years) and its value (thousands of dollars). The line of best fit is $y = -2x + 30$. According to the model, what is the predicted value of a 12-year-old car?\n\nA) \\$6,000\nB) \\$8,000\nC) \\$54,000\nD) \\$66,000',
        solution: `
**Solution:**

**Given equation:** $y = -2x + 30$

**Variables:**
- x = age (years)
- y = value (thousands of dollars)

**Find:** Value when x = 12

**Plug in x = 12:**
$y = -2(12) + 30$
$y = -24 + 30$
$y = 6$

**But y is in THOUSANDS of dollars!**

$y = 6$ thousand = $6,000

**Answer:** A) \\$6,000

**Check reasonableness:**
- Negative slope (-2) makes sense: car loses value as it ages ✓
- Starting value (y-intercept) = 30 thousand = \\$30,000 (new car) ✓
- Loses \\$2,000 per year ✓
- After 12 years: 30 - 24 = 6 thousand ✓

**SAT Tip:** Watch the UNITS! "Thousands of dollars" means multiply by 1,000!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: scatterplots.id,
        front: 'What\'s the difference between positive and negative correlation?',
        back: 'Positive: both variables increase together (upward slope ↗); Negative: one increases while other decreases (downward slope ↘)'
      },
      {
        topicId: scatterplots.id,
        front: 'What does slope represent in a line of best fit?',
        back: 'Rate of change: how much y changes for each 1-unit increase in x. Units are (y units) per (x unit)'
      },
      {
        topicId: scatterplots.id,
        front: 'Why is "correlation ≠ causation" important on the SAT?',
        back: 'Variables can be related (correlated) without one causing the other - both might be caused by a third factor!'
      }
    ]
  })

  console.log('✓ Created topic: Scatterplots and Line of Best Fit (3 examples, 3 flashcards)')

  // Writing Topic: Effective Language Use
  const effectiveLanguage = await prisma.topic.upsert({
    where: { slug: 'sat-effective-language-use' },
    update: {},
    create: {
      slug: 'sat-effective-language-use',
      title: 'Effective Language Use',
      description: 'Choose precise, clear, and appropriate word choices',
      order: 3,
      categoryId: expressionIdeas.id,
      isPremium: false,
      textContent: `
# Effective Language Use (SAT Writing)

## What is Effective Language?

**The right word for the context**

Consider:
- **Precision:** Exact, specific meaning
- **Clarity:** Easy to understand
- **Style:** Appropriate tone and formality
- **Economy:** Not wordy or redundant

## Precision in Word Choice

### Specific vs. Vague

**Vague words:** General, unclear
**Specific words:** Exact, clear

**Examples:**

Vague → Specific:
- "good" → "excellent," "beneficial," "skillful"
- "bad" → "harmful," "ineffective," "detrimental"
- "thing" → specific noun
- "very" → often unnecessary or weak

### Wrong Word

**Similar-sounding words with different meanings**

**Common confusions:**

**Accept vs. Except**
- Accept = receive/agree to
- Except = excluding

**Affect vs. Effect**
- Affect = verb (to influence)
- Effect = noun (result)
- (Exception: "effect change" = cause)

**Allusion vs. Illusion**
- Allusion = reference
- Illusion = false perception

**Complement vs. Compliment**
- Complement = complete/enhance
- Compliment = praise

**Ensure vs. Insure**
- Ensure = make certain
- Insure = protect financially

**Imply vs. Infer**
- Imply = suggest (speaker does)
- Infer = conclude (listener does)

**Principal vs. Principle**
- Principal = main/head person
- Principle = rule/belief

**Than vs. Then**
- Than = comparison
- Then = time sequence

## Tone and Style

### Formal vs. Informal

**SAT prefers formal/academic tone**

**Too informal:**
❌ "The scientist was super confused."
✓ "The scientist was perplexed."

❌ "They messed up the experiment."
✓ "They conducted the experiment incorrectly."

### Consistency in Style

**Match the passage's tone**

If passage is formal → choose formal words
If passage is technical → choose technical terms

### Avoid Slang and Colloquialisms

**Don't use:**
- "a lot" → "many" or "much"
- "kind of" → "somewhat" or delete
- "sort of" → "somewhat" or delete
- "got" → "obtained," "received," "became"
- "kids" → "children"

## Connotation

### Positive, Negative, or Neutral?

**Same basic meaning, different feelings**

**Positive → Neutral → Negative:**
- Slender → Thin → Skinny
- Confident → Certain → Arrogant
- Persistent → Determined → Stubborn
- Economical → Cheap → Stingy
- Youthful → Young → Immature

**Choose word matching passage tone!**

## Commonly Confused Words

### Their / There / They're

**Their:** Possessive (belonging to them)
- "Their book is blue."

**There:** Location or placeholder
- "Put it there."
- "There is a problem."

**They're:** Contraction (they are)
- "They're coming soon."

### Your / You're

**Your:** Possessive (belonging to you)
- "Your car is red."

**You're:** Contraction (you are)
- "You're welcome."

### Its / It's

**Its:** Possessive (belonging to it)
- "The dog wagged its tail."

**It's:** Contraction (it is)
- "It's raining."

### To / Too / Two

**To:** Direction or infinitive
- "Go to the store."
- "I want to run."

**Too:** Also or excessive
- "Me too!"
- "Too hot."

**Two:** Number 2
- "Two cats."

### Lie / Lay

**Lie:** Recline (no object)
- "I lie down." (present)
- "I lay down." (past)
- "I have lain down." (past participle)

**Lay:** Put/place (requires object)
- "I lay the book down." (present)
- "I laid the book down." (past)
- "I have laid the book down." (past participle)

## Idioms

### Correct Preposition Use

**Common SAT idioms:**

- Ability **to** (not "of")
- Agree **with** (person) / **on** (issue)
- Angry **with** (person) / **about** (thing)
- Consistent **with**
- Different **from** (not "than")
- Independent **of**
- Native **to**
- Potential **for**
- Prohibit **from**
- Regard **as**
- Responsible **for**
- Similar **to**
- Superior **to**

## Unnecessary Intensifiers

### Weak Words to Avoid

**"Very"**
Often adds nothing → delete or use stronger word

❌ "very big" → ✓ "enormous"
❌ "very small" → ✓ "tiny"
❌ "very good" → ✓ "excellent"

**"Really," "Quite," "Extremely"**
Similar issue - often unnecessary

## Context-Appropriate Vocabulary

### Match the Field

**Scientific passage:** Use technical terms accurately
**Historical passage:** Use period-appropriate language
**Literary passage:** May allow more figurative language

### Don't Be Too Fancy

**SAT doesn't reward obscure vocabulary**

**Clear and precise > unnecessarily complex**

❌ "utilize" → ✓ "use" (usually)
❌ "endeavor" → ✓ "try" (in most contexts)

## SAT Question Types

### Type 1: Word Choice
**"Which choice most effectively establishes...?"**

**Look for:** Word that best fits meaning and tone

### Type 2: Wrong Word
**Underlined word seems wrong**

**Check:** Is this the right word for context?

### Type 3: Style/Tone
**"Which maintains the style of the passage?"**

**Match:** Formal/informal, technical/general

## SAT Strategies

### Read for Context
**What is the passage about? What tone?**

### Check Each Word Carefully
**Does this word mean what the sentence needs?**

### Sound It Out
**"Their" vs "They're" - say full words to check**

### Look for Common Errors
**Affect/effect, accept/except, etc.**

### Match the Tone
**Formal passage = formal word choice**

### Eliminate Clearly Wrong
**Obviously too informal or too formal?**

## SAT Tips

- **Precision matters:** Choose exact word for meaning
- **Watch similar words:** affect/effect, accept/except, ensure/insure
- **Formal tone** on SAT (avoid slang, contractions in formal writing)
- **Connotation:** positive/negative/neutral must match context
- **Their/there/they're:** Most common error on SAT!
- **Its/it's:** Possessive vs contraction
- **Your/you're:** Possessive vs contraction
- **Lie/lay:** Lie = recline (no object); Lay = place (needs object)
- **Idioms:** Check prepositions (different FROM not THAN)
- **"Very" is weak:** Often unnecessary or use stronger word
- **Match passage tone:** Formal passage = formal words
- **Clear > complex:** Don't use fancy words unnecessarily
- **Sound it out:** "They're" = "they are" - does it work?
- **Imply vs infer:** Speaker implies, listener infers
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: effectiveLanguage.id,
        order: 1,
        difficulty: 'EASY',
        question: 'The temperature change will **effect** the experiment.\n\nA) NO CHANGE\nB) affect\nC) infect\nD) defect',
        solution: `
**Solution:**

**Need:** Verb meaning "influence/impact"

**Affect vs Effect:**
- **Affect** = verb (to influence) ✓
- **Effect** = noun (result) ✗

**Sentence needs verb:** "will __ the experiment"

**Test:**
- A) effect → noun form ✗
- B) affect → verb form ✓
- C) infect → means contaminate ✗
- D) defect → means flaw or abandon ✗

**Answer:** B

**Remember:**
- "The change will **affect** the results." (verb)
- "The **effect** of the change was significant." (noun)

**SAT Tip:** AFFECT = verb (Action), EFFECT = noun (End result)!
`
      },
      {
        topicId: effectiveLanguage.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'The painting was different **than** the others.\n\nA) NO CHANGE\nB) from\nC) to\nD) as',
        solution: `
**Solution:**

**Idiom:** "Different from" (NOT "than")

**Correct preposition with "different" = FROM**

**Test choices:**
- A) than → incorrect idiom ✗
- B) from → correct idiom ✓
- C) to → wrong preposition ✗
- D) as → wrong preposition ✗

**Answer:** B

**Why "from" not "than"?**
Standard English idiom - "different from" is correct form

**Similar idioms:**
- Similar **to**
- Superior **to**
- Consistent **with**

**SAT Tip:** "Different FROM" is always correct on SAT (not "than")!
`
      },
      {
        topicId: effectiveLanguage.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Which word choice best maintains the formal, academic tone of the passage about climate research?\n\nThe scientists were **really** surprised by the findings.\n\nA) NO CHANGE (really)\nB) super\nC) genuinely\nD) like totally',
        solution: `
**Solution:**

**Context:** Formal, academic passage about research

**Need:** Formal word for "very" or "truly"

**Evaluate tone:**
- A) really → informal/casual ✗
- B) super → very informal/slang ✗
- C) genuinely → formal, academic ✓
- D) like totally → extremely informal/slang ✗

**Answer:** C

**Why "genuinely"?**
- Formal, sophisticated word
- Matches academic tone
- Means "truly/authentically"
- Appropriate for research context

**Formal alternatives to "really":**
- Genuinely
- Truly  
- Remarkably
- Significantly

**SAT Tip:** Formal passage = avoid casual intensifiers like "really," "very," "super"!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: effectiveLanguage.id,
        front: 'What\'s the difference between "affect" and "effect"?',
        back: 'AFFECT = verb (to influence/impact); EFFECT = noun (the result). Memory: "A" for Action (verb), "E" for End result (noun)'
      },
      {
        topicId: effectiveLanguage.id,
        front: 'Should you say "different than" or "different from"?',
        back: '"Different FROM" is correct on the SAT (standard English idiom)'
      },
      {
        topicId: effectiveLanguage.id,
        front: 'What makes word choice "effective" on the SAT?',
        back: 'Precision (exact meaning), appropriate formality (match passage tone), clarity (easy to understand), and economy (not wordy)'
      }
    ]
  })

  console.log('✓ Created topic: Effective Language Use (3 examples, 3 flashcards)')

  // Writing Topic: Punctuation - Commas and Semicolons
  const punctuation = await prisma.topic.upsert({
    where: { slug: 'sat-punctuation-commas-semicolons' },
    update: {},
    create: {
      slug: 'sat-punctuation-commas-semicolons',
      title: 'Punctuation: Commas and Semicolons',
      description: 'Master comma rules and semicolon usage',
      order: 4,
      categoryId: englishConventions.id,
      isPremium: false,
      textContent: `
# Punctuation: Commas and Semicolons (SAT Writing)

## Commas - When to Use

### 1. Items in a List (Series)

**Use commas to separate 3+ items**

✓ "I bought apples, oranges, and bananas."

**Oxford comma (before "and"):**
- SAT accepts with or without
- Be consistent!

### 2. Introductory Elements

**Comma after introductory word/phrase/clause**

✓ "However, the results were surprising."
✓ "After the game, we went home."
✓ "Because it was raining, we stayed inside."

**Short introductions (3 words or less):**
- Comma optional
- "On Monday we meet." (acceptable)

### 3. Independent Clauses with Coordinating Conjunction

**FANBOYS:** For, And, Nor, But, Or, Yet, So

**Pattern:** Independent clause **,** FANBOYS independent clause

✓ "I studied hard, **and** I passed the test."
✓ "She was tired, **but** she kept working."

**Both clauses must be independent (could stand alone)!**

❌ "I studied, and passed the test." (second part not independent)
✓ "I studied and passed the test." (no comma needed)

### 4. Non-Essential Information

**Use commas to set off information that can be removed**

✓ "My sister, **who lives in Texas**, is visiting."
- Remove "who lives in Texas" → sentence still works

✓ "The book, **published in 1950**, is rare."

**Test:** Remove the part between commas - does sentence still make sense?

### 5. Transitional Words/Phrases

**Set off with commas:**

✓ "The experiment, **therefore**, was a success."
✓ "**Moreover**, the findings were significant."
✓ "We need to leave, **however**, before noon."

**Common transitions:**
- however, therefore, moreover, nevertheless
- for example, in fact, on the other hand

## Commas - When NOT to Use

### 1. Don't Separate Subject from Verb

❌ "The students in my class, are studying."
✓ "The students in my class are studying."

### 2. Don't Separate Verb from Object

❌ "She gave, her best effort."
✓ "She gave her best effort."

### 3. Don't Use Before "That"

❌ "I know, that you are right."
✓ "I know that you are right."

### 4. Don't Separate Compound Elements (Two Items)

❌ "I like pizza, and pasta."
✓ "I like pizza and pasta."

**Only 2 items → no comma before "and"**
**3+ items → use commas**

## Semicolons - When to Use

### 1. Join Two Independent Clauses (No Conjunction)

**Pattern:** Independent clause **;** independent clause

✓ "I studied hard; I passed the test."
✓ "The movie was long; we left early."

**Alternative:** Could use period instead
- "I studied hard**.** I passed the test."

**When to choose semicolon:**
- Ideas closely related
- Want to show connection

### 2. Before Transitional Word Between Clauses

**Pattern:** Clause **;** transition**,** clause

✓ "I was tired; however, I kept working."
✓ "She studied; therefore, she passed."

**Common transitions:**
- however, therefore, moreover, nevertheless
- furthermore, consequently, otherwise
- for example, in fact

### 3. Separate Complex Items in List

**When list items contain commas**

✓ "I've lived in Austin, Texas; Portland, Oregon; and Miami, Florida."

**Without semicolons:** Too confusing
❌ "Austin, Texas, Portland, Oregon, and Miami, Florida" (unclear!)

## Semicolons - When NOT to Use

### 1. Don't Connect Independent and Dependent

❌ "I went home; because I was tired."
✓ "I went home because I was tired."

**"Because I was tired"** = dependent clause (can't stand alone)

### 2. Don't Use Before Coordinating Conjunction (FANBOYS)

❌ "I studied; and I passed."
✓ "I studied, and I passed." (comma before FANBOYS)

**OR:**
✓ "I studied; I passed." (semicolon with no conjunction)

### 3. Don't Use to Introduce a List

❌ "I need; eggs, milk, and bread."
✓ "I need eggs, milk, and bread."

**Use colon (:) to introduce list after complete sentence**
✓ "I need three things: eggs, milk, and bread."

## Comma vs. Semicolon vs. Period

### Compare:

**Period (.):** Strongest separation
- Completely separate sentences
- ✓ "I studied. I passed."

**Semicolon (;):** Medium separation
- Connected ideas, both independent
- ✓ "I studied; I passed."

**Comma + FANBOYS (,and):** Weakest separation
- Connected with conjunction
- ✓ "I studied, and I passed."

**All three can work - choose based on style and connection strength**

## SAT Comma Rules Summary

### ALWAYS use commas:

1. **Three or more items:** A, B, and C
2. **After intro element:** "However, ..."
3. **Before FANBOYS** joining independent clauses
4. **Around non-essential info:** "My sister, who..., is..."
5. **Around transitions:** "The result, however, was..."

### NEVER use commas:

1. **Between subject and verb**
2. **Between verb and object**
3. **Before "that"**
4. **Before "and" with only 2 items**
5. **To fix run-on** (need semicolon or period!)

## SAT Semicolon Rules Summary

### Use semicolon to:

1. **Join two independent clauses** (no conjunction)
2. **Before transition** joining clauses: ; however,
3. **Separate complex list items**

### Don't use semicolon:

1. **With dependent clause**
2. **Before FANBOYS** (use comma)
3. **To introduce list**

## SAT Strategies

### Test Independence
**Can both parts stand alone? → semicolon possible**
**One dependent? → use comma or no punctuation**

### Check for FANBOYS
**Has conjunction? → comma before it**
**No conjunction? → semicolon or period**

### Look for Transitions
**"however," "therefore," etc. → likely need semicolon before**

### Remove Non-Essential Info
**If removing text in commas, sentence still works**

### Count Items
**2 items → no comma before "and"**
**3+ items → use commas**

## SAT Tips

- **Comma before FANBOYS** joining two independent clauses
- **Semicolon between** two independent clauses (no conjunction)
- **Semicolon before transition:** ; however,
- **Don't separate subject from verb** with comma
- **3+ items** → use commas in list
- **Only 2 items** → no comma before "and"
- **Non-essential info** → set off with commas
- **Can both parts stand alone?** → semicolon works
- **Dependent clause?** → no semicolon
- **After intro phrase** → comma
- **"That" clauses** → no comma before "that"
- **Test:** Remove text between commas - sentence should still work
- **FANBOYS + comma OR semicolon alone** (not both!)
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: punctuation.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Which is correctly punctuated?\n\nA) I studied hard, and I passed the test.\nB) I studied hard and, I passed the test.\nC) I studied hard; and I passed the test.\nD) I studied hard and I passed the test.',
        solution: `
**Solution:**

**Two independent clauses:**
1. "I studied hard"
2. "I passed the test"

**Joined by:** "and" (coordinating conjunction)

**Rule:** Comma before FANBOYS joining independent clauses

**Test options:**
- A) comma before "and" ✓ (correct!)
- B) comma after "and" ✗ (wrong position)
- C) semicolon + "and" ✗ (use comma with FANBOYS)
- D) no punctuation ✗ (creates run-on)

**Answer:** A

**Note:** Both parts must be independent for comma!

**SAT Tip:** Comma BEFORE coordinating conjunction (FANBOYS), not after!
`
      },
      {
        topicId: punctuation.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'The experiment was successful**;** however**,** the results were unexpected.\n\nIs the punctuation correct?\n\nA) YES - correct as is\nB) NO - should be: successful, however, the\nC) NO - should be: successful; however; the\nD) NO - should be: successful. However, the',
        solution: `
**Solution:**

**Two independent clauses:**
1. "The experiment was successful"
2. "the results were unexpected"

**Connected by:** "however" (transition)

**Rule:** Semicolon before transition; comma after

**Pattern:** clause **;** however**,** clause

**Current punctuation:** ; however,  ✓

**Answer:** A - Correct as is

**Why not D?**
Period would work, but the semicolon version shows closer connection between ideas. Both are acceptable!

**Other acceptable:**
✓ "successful. However, the results..."

**SAT Tip:** Transitional words between clauses: semicolon before, comma after (;however,)
`
      },
      {
        topicId: punctuation.id,
        order: 3,
        difficulty: 'HARD',
        question: 'My teacher**,** Mr. Smith**,** is strict.\n\nA) NO CHANGE (commas correct)\nB) Remove both commas\nC) Keep first comma, remove second\nD) Remove first comma, keep second',
        solution: `
**Solution:**

**Test:** Remove "Mr. Smith"

"My teacher is strict." ✓ (Still works!)

**"Mr. Smith"** = non-essential information (identifies which teacher, but sentence works without it)

**Rule:** Non-essential info is set off with commas on BOTH sides

**Need commas:**
- Before: "teacher,"
- After: "Smith,"

**Answer:** A - NO CHANGE (both commas correct)

**If removed first comma:**
"My teacher Mr. Smith, is strict." ✗ (separates subject from verb!)

**If removed second comma:**
"My teacher, Mr. Smith is strict." ✗ (incomplete - missing closing comma)

**SAT Tip:** Non-essential info needs commas on BOTH sides (opening AND closing)!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: punctuation.id,
        front: 'When do you use a comma with coordinating conjunctions (FANBOYS)?',
        back: 'Use comma BEFORE the conjunction when joining two INDEPENDENT clauses: "I studied, and I passed."'
      },
      {
        topicId: punctuation.id,
        front: 'How do you punctuate a transition word like "however" between two independent clauses?',
        back: 'Semicolon before, comma after: "I was tired; however, I kept working."'
      },
      {
        topicId: punctuation.id,
        front: 'How do you test if information should be set off with commas?',
        back: 'Remove the information - if sentence still makes sense and is complete, use commas on BOTH sides'
      }
    ]
  })

  console.log('✓ Created topic: Punctuation - Commas and Semicolons (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully created final batch of comprehensive SAT content!')
  console.log('   New topics: 3')
  console.log('   Total example problems added: 9')
  console.log('   Total flashcards added: 9')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
