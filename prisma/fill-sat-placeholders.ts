/**
 * Fill Placeholder SAT Topic Content
 *
 * Fixes topics created by create-missing-sat-topics.ts that have
 * placeholder textContent. Uses update blocks to overwrite placeholders.
 *
 * Run with: npx tsx prisma/fill-sat-placeholders.ts
 */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface TopicUpdate {
  slug: string
  textContent: string
}

const topicUpdates: TopicUpdate[] = [
  // ──────────────────────────────────────────────────────────
  //  Problem Solving & Data Analysis
  // ──────────────────────────────────────────────────────────
  {
    slug: 'sat-scatterplots-line-fit',
    textContent: `# Scatterplots and Line of Best Fit

## Understanding Scatterplots
A scatterplot displays the relationship between two quantitative variables. Each point represents one observation with coordinates (x, y).

### Key Concepts
- **Positive association**: As x increases, y tends to increase
- **Negative association**: As x increases, y tends to decrease
- **No association**: No clear pattern between x and y
- **Linear vs. nonlinear**: Does the pattern follow a straight line or a curve?
- **Outliers**: Points that fall far from the general pattern

## Line of Best Fit (Regression Line)
The line of best fit minimizes the sum of squared vertical distances from each point to the line.

### Equation Form
$y = mx + b$
- **m** = slope (rate of change)
- **b** = y-intercept (predicted value when x = 0)

### Interpreting the Slope
"For each additional unit of x, the predicted value of y changes by m units."

### Interpreting the Y-Intercept
"When x = 0, the predicted value of y is b."

## Residuals
A residual is the difference between the actual y-value and the predicted y-value:
$$\\text{Residual} = y_{\\text{actual}} - y_{\\text{predicted}}$$
- Positive residual: point is above the line
- Negative residual: point is below the line
- A good fit has residuals randomly scattered around zero

## SAT Tips
1. Always read axis labels carefully
2. Use the line equation to make predictions
3. Watch for extrapolation (predicting beyond the data range)
4. Correlation does not imply causation`,
  },

  {
    slug: 'sat-data-statistics',
    textContent: `# Data Collection and Statistics

## Measures of Center
- **Mean**: Sum of all values divided by the number of values. Sensitive to outliers.
- **Median**: Middle value when data is ordered. Resistant to outliers.
- **Mode**: Most frequently occurring value.

### When to Use Which
| Situation | Best Measure |
|-----------|-------------|
| Symmetric data, no outliers | Mean |
| Skewed data or outliers | Median |
| Categorical data | Mode |

## Measures of Spread
- **Range**: Maximum – Minimum
- **Interquartile Range (IQR)**: Q3 – Q1 (middle 50% of data)
- **Standard Deviation**: Average distance from the mean

## Data Collection Methods
- **Random sample**: Every member of the population has an equal chance of being selected
- **Stratified sample**: Population divided into groups, random sample from each
- **Convenience sample**: Non-random, may introduce bias
- **Observational study**: Researchers observe without intervention
- **Experiment**: Researchers assign treatments to subjects

### Bias Types
- **Selection bias**: Sample not representative of population
- **Response bias**: Question wording influences answers
- **Non-response bias**: Some selected individuals don't participate

## Box Plots and Histograms
- Box plots show the five-number summary: min, Q1, median, Q3, max
- Histograms show frequency distribution across intervals

## SAT Tips
1. Outliers pull the mean toward them but don't affect the median
2. To find the median of even-numbered data: average the two middle values
3. Read study descriptions carefully to identify bias`,
  },

  // ──────────────────────────────────────────────────────────
  //  Passport to Advanced Math
  // ──────────────────────────────────────────────────────────
  {
    slug: 'sat-exponential-functions',
    textContent: `# Exponential Functions

## General Form
$$f(x) = a \\cdot b^x$$
- **a** = initial value (y-intercept when x = 0)
- **b** = growth/decay factor
  - b > 1: exponential growth
  - 0 < b < 1: exponential decay

## Growth and Decay
### Growth: $f(x) = a(1 + r)^x$
- r = growth rate (as decimal)
- Example: Population growing 5% per year: $P = P_0(1.05)^t$

### Decay: $f(x) = a(1 - r)^x$
- r = decay rate (as decimal)
- Example: Value depreciating 20% per year: $V = V_0(0.80)^t$

## Compound Interest
$$A = P(1 + \\frac{r}{n})^{nt}$$
- P = principal (initial amount)
- r = annual interest rate
- n = number of times compounded per year
- t = time in years

## Key Properties
1. **Domain**: All real numbers
2. **Range**: (0, ∞) for positive a
3. **Asymptote**: y = 0 (the x-axis)
4. **Always increasing** (if b > 1) or **always decreasing** (if 0 < b < 1)
5. Growth is MUCH faster than linear growth for large x

## Comparing Linear vs. Exponential
| Feature | Linear | Exponential |
|---------|--------|-------------|
| Rate of change | Constant | Increasing/Decreasing |
| Graph shape | Straight line | Curved |
| Equation | y = mx + b | y = ab^x |
| Eventually dominates? | No | Yes (for b > 1) |

## SAT Tips
1. Read word problems for "percent increase/decrease per year" — that's exponential
2. Doubling time: solve $2 = b^t$ for t
3. Half-life: solve $0.5 = b^t$ for t`,
  },

  {
    slug: 'sat-polynomials-factoring',
    textContent: `# Polynomials and Factoring

## Polynomial Basics
A polynomial is an expression with terms of the form $ax^n$ where n is a non-negative integer.
- **Degree**: Highest power of x
- **Leading coefficient**: Coefficient of the highest-degree term

## Factoring Techniques

### 1. Greatest Common Factor (GCF)
Factor out the largest common factor from all terms.
$6x^3 + 9x^2 = 3x^2(2x + 3)$

### 2. Difference of Squares
$a^2 - b^2 = (a + b)(a - b)$
Example: $x^2 - 25 = (x + 5)(x - 5)$

### 3. Trinomial Factoring
$x^2 + bx + c = (x + p)(x + q)$ where $p + q = b$ and $pq = c$
Example: $x^2 + 7x + 12 = (x + 3)(x + 4)$

### 4. Factoring by Grouping
For four-term polynomials, group in pairs and factor each.
$x^3 + 3x^2 + 2x + 6 = x^2(x + 3) + 2(x + 3) = (x^2 + 2)(x + 3)$

### 5. Sum/Difference of Cubes
$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$
$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$

## Polynomial Division
### Long Division or Synthetic Division
Used when dividing a polynomial by a linear factor $(x - c)$.
**Remainder Theorem**: $f(c) = $ remainder when $f(x)$ is divided by $(x - c)$.

## Zeros and Factors
If $(x - r)$ is a factor of $f(x)$, then $r$ is a zero (root) of $f(x)$.
The number of real zeros is at most the degree of the polynomial.

## SAT Tips
1. Always check for GCF first
2. Recognize difference of squares patterns quickly
3. Use the Remainder Theorem to test potential zeros
4. Remember: if asked to find all factors, start by finding one zero`,
  },

  // ──────────────────────────────────────────────────────────
  //  Additional Topics in Math
  // ──────────────────────────────────────────────────────────
  {
    slug: 'sat-geometry-basics',
    textContent: `# Geometry Basics

## Angle Relationships
- **Supplementary angles**: Sum to 180°
- **Complementary angles**: Sum to 90°
- **Vertical angles**: Equal (formed by intersecting lines)
- **Linear pair**: Supplementary and adjacent

### Parallel Lines and Transversals
When a transversal crosses parallel lines:
- **Corresponding angles**: Equal
- **Alternate interior angles**: Equal
- **Alternate exterior angles**: Equal
- **Co-interior (same-side interior) angles**: Supplementary (sum to 180°)

## Triangle Properties
- Angle sum: 180°
- Exterior angle = sum of two remote interior angles
- Triangle Inequality: Sum of any two sides > third side

### Special Triangles
- **Equilateral**: All sides equal, all angles 60°
- **Isosceles**: Two sides equal, base angles equal
- **30-60-90**: Sides in ratio $1 : \\sqrt{3} : 2$
- **45-45-90**: Sides in ratio $1 : 1 : \\sqrt{2}$

## Area Formulas
| Shape | Formula |
|-------|---------|
| Triangle | $A = \\frac{1}{2}bh$ |
| Rectangle | $A = lw$ |
| Parallelogram | $A = bh$ |
| Trapezoid | $A = \\frac{1}{2}(b_1 + b_2)h$ |
| Circle | $A = \\pi r^2$ |

## Volume Formulas
| Shape | Formula |
|-------|---------|
| Rectangular prism | $V = lwh$ |
| Cylinder | $V = \\pi r^2 h$ |
| Cone | $V = \\frac{1}{3}\\pi r^2 h$ |
| Sphere | $V = \\frac{4}{3}\\pi r^3$ |

## SAT Tips
1. These formulas are given on the SAT reference sheet — know how to use them quickly
2. Draw diagrams for word problems
3. Mark equal angles and sides on your figure`,
  },

  {
    slug: 'sat-circles',
    textContent: `# Circles

## Standard Form of a Circle
$$(x - h)^2 + (y - k)^2 = r^2$$
- Center: $(h, k)$
- Radius: $r$

## General Form
$$x^2 + y^2 + Dx + Ey + F = 0$$
Convert to standard form by completing the square for both x and y.

### Example
$x^2 + y^2 - 6x + 4y - 12 = 0$
$(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$
$(x - 3)^2 + (y + 2)^2 = 25$
Center: $(3, -2)$, Radius: $5$

## Arc Length and Sector Area
For a central angle of $\\theta$ degrees:
- **Arc length**: $L = \\frac{\\theta}{360} \\cdot 2\\pi r$
- **Sector area**: $A = \\frac{\\theta}{360} \\cdot \\pi r^2$

## Circle Theorems
- **Central angle** = intercepted arc
- **Inscribed angle** = half the intercepted arc
- A diameter subtends a 90° inscribed angle (Thales' theorem)
- Tangent line is perpendicular to the radius at the point of tangency
- Two tangent segments from an external point are equal in length

## Circumference and Area
- $C = 2\\pi r = \\pi d$
- $A = \\pi r^2$

## SAT Tips
1. When given general form, always complete the square
2. Remember to add the same value to both sides when completing the square
3. Tangent-radius perpendicularity is frequently tested`,
  },

  // ──────────────────────────────────────────────────────────
  //  Reading & Writing Topics
  // ──────────────────────────────────────────────────────────
  {
    slug: 'sat-finding-textual-evidence',
    textContent: `# Finding Textual Evidence

## What Is Textual Evidence?
Textual evidence is specific information from a passage that supports a conclusion, claim, or answer choice. On the Digital SAT, you must identify which part of the text best supports a given interpretation.

## Types of Evidence Questions
1. **"Which choice provides the best evidence?"** — Select a quote/reference from the text
2. **"Which finding, if true, would support the claim?"** — Choose data or info that strengthens an argument
3. **"The author uses the example of X to..."** — Identify the function of cited evidence

## Strategy: CLAIM → EVIDENCE
1. Read the question to identify the CLAIM being made
2. Evaluate each answer choice as potential EVIDENCE
3. Ask: "Does this evidence directly support THAT specific claim?"
4. Eliminate evidence that is true but irrelevant to the claim

## Common Traps
- **True but irrelevant**: The information is accurate but doesn't support the specific claim
- **Too broad**: The evidence relates to the general topic but not the specific point
- **Mismatched scope**: Evidence about a different time period, population, or context

## Practice Approach
For every answer you choose on reading questions, you should be able to point to specific words or sentences in the passage that justify your choice.

## SAT Tips
1. Underline or highlight key phrases as you read
2. Return to the passage — don't rely on memory
3. The correct evidence must directly and specifically support the claim
4. Wrong answers often relate to the passage topic but don't support the exact claim`,
  },

  {
    slug: 'sat-command-evidence',
    textContent: `# Command of Evidence

## Overview
Command of Evidence questions test your ability to evaluate how authors use data, examples, quotations, and reasoning to support their arguments. This goes beyond finding evidence — it's about understanding WHY evidence is used and HOW it functions.

## Key Question Types

### 1. Strengthening/Weakening Arguments
"Which choice most effectively supports/undermines the author's claim?"
- Evaluate whether evidence DIRECTLY connects to the specific claim
- Strong evidence is specific, relevant, and from a credible source

### 2. Using Data from Tables/Graphs
The Digital SAT often pairs passages with data visualizations.
- Read axis labels and titles carefully
- Identify trends (increasing, decreasing, stable)
- Find specific data points that support or contradict claims
- Watch for correlation vs. causation

### 3. Integrating Information
Combine information from the passage text with data from a figure.
- The text may make a claim → the data either supports or contradicts it
- Look for alignment between what the author says and what the data shows

## Analytical Framework
For any evidence question, ask:
1. What CLAIM is being made?
2. What EVIDENCE is presented?
3. Does the evidence DIRECTLY support the claim?
4. Are there any LIMITATIONS to the evidence?

## SAT Tips
1. Data questions: always read the title, axis labels, and units
2. For "best evidence" questions: the correct answer must be BOTH true and relevant
3. Watch for answers that present accurate data but from the wrong part of the table/graph
4. Claims about cause-and-effect require experimental evidence, not just correlation`,
  },

  {
    slug: 'sat-central-ideas-details',
    textContent: `# Central Ideas and Details

## Understanding Central Ideas
The central idea (or main idea) is the primary message or argument of a passage. Everything else in the passage serves to explain, support, or illustrate this central idea.

## How to Find the Central Idea
1. **Read the first and last sentences** of the passage — they often state or restate the main point
2. **Ask: "What is the author's overall message?"** — not just what the passage is about, but what the author is SAYING about it
3. **Check supporting details** — they should all connect back to the central idea

## Central Idea vs. Topic
| | Example |
|---|---|
| **Topic** | Renewable energy |
| **Central Idea** | Despite higher initial costs, renewable energy sources are more economically viable than fossil fuels in the long term |

## Detail Questions
### Explicit Details
"According to the passage, which of the following is true?"
- The answer is stated directly in the text
- Find it by scanning for keywords from the question

### Inferential Details
"The passage most strongly suggests..."
- The answer is implied but not directly stated
- Combine multiple pieces of information to draw a logical conclusion

## Common Distractors
- **Too broad**: Covers more than the passage discusses
- **Too narrow**: Focuses on one detail, not the main idea
- **Opposite**: States the reverse of the author's position
- **Off-topic**: Mentions something not discussed in the passage

## SAT Tips
1. The central idea should account for the ENTIRE passage, not just one paragraph
2. Summary questions at the end often ask for the central idea
3. If two answers seem similar, choose the more specific and well-supported one`,
  },

  {
    slug: 'sat-vocabulary-context',
    textContent: `# Vocabulary in Context

## What's Tested
The SAT doesn't test obscure vocabulary. Instead, it tests whether you can determine the meaning of common words used in specific and sometimes unusual ways.

## The Approach
1. **Read the sentence** containing the word carefully
2. **Cover the word** and predict what word would fit in context
3. **Check each answer choice** against your prediction
4. **Plug it back in** to verify the sentence still makes sense

## Common Word Traps
Many SAT vocabulary questions use words with multiple meanings:

| Word | Common Meaning | SAT Context Meaning |
|------|---------------|---------------------|
| "Address" | Mailing location | To deal with or handle |
| "Check" | Verify | To restrain or limit |
| "Gravity" | Force of attraction | Seriousness or importance |
| "Reserve" | To book in advance | Restraint or caution |
| "Channel" | TV station | To direct or guide |
| "Appreciate" | To be grateful | To increase in value |
| "Reflect" | Mirror image | To think carefully about |

## Context Clues
- **Definition clues**: The word is defined or paraphrased nearby
- **Example clues**: Examples illustrate the meaning
- **Contrast clues**: Words like "but," "however," "unlike" signal the opposite meaning
- **Tone clues**: The overall positive/negative tone indicates meaning

## Practice Strategy
Read widely (articles, editorials, science writing) and when you encounter a word used in an unfamiliar way, note the context meaning.

## SAT Tips
1. NEVER choose an answer just because it's a valid definition — it must fit THIS context
2. The most common definition is often a trap answer
3. Look at surrounding sentences, not just the target sentence
4. Positive/negative tone of the passage must match your answer`,
  },

  {
    slug: 'sat-subject-verb-agreement',
    textContent: `# Subject-Verb Agreement

## The Rule
A verb must agree in number with its subject.
- Singular subject → singular verb
- Plural subject → plural verb

## Tricky Patterns

### 1. Prepositional Phrase Between Subject and Verb
"The box **of chocolates** is on the table."
- "box" is the subject (singular), not "chocolates"
- Cross out prepositional phrases to find the true subject

### 2. Inverted Sentences
"Among the trees **stands** a small cabin."
- The subject is "cabin" (singular), which comes after the verb

### 3. Compound Subjects
- "A and B" → plural: "Tom and Jerry **are** friends."
- "A or B" → verb agrees with B: "The teacher or the students **are** responsible."
- "Neither A nor B" → verb agrees with B: "Neither the cats nor the dog **is** inside."

### 4. Collective Nouns
Words like "team," "group," "committee," "family":
- Usually treated as singular: "The team **is** winning."
- Plural when emphasizing individual members: "The team **are** arguing among themselves."

### 5. Indefinite Pronouns
| Always Singular | Always Plural | Singular OR Plural |
|----------------|---------------|-------------------|
| each, every, either, neither | both, few, many, several | all, any, most, none, some |
| anyone, everyone, someone | | (depends on noun referred to) |

### 6. Relative Clauses
"She is one of the students who **are** passing." (who = students = plural)
"She is the only one of the students who **is** passing." (only one = singular)

## SAT Tips
1. Find the actual subject — ignore phrases between subject and verb
2. "There is/are" — look at what follows to determine the verb
3. When in doubt, identify the subject first, then match the verb`,
  },

  {
    slug: 'sat-grammar-usage',
    textContent: `# Grammar and Usage

## Pronoun Errors

### Pronoun-Antecedent Agreement
Pronouns must agree with their antecedents in number and gender.
- "Each student must bring **their** book." (informal, but SAT prefers "his or her")
- "The scientists published **their** findings." ✓

### Pronoun Case
| Subject | Object | Possessive |
|---------|--------|-----------|
| I | me | my/mine |
| he/she | him/her | his/her |
| we | us | our |
| they | them | their |
| who | whom | whose |

**Tip**: "Between you and **me**" (object), not "between you and I"

### Ambiguous Pronouns
"When Tim talked to John, **he** was nervous." — Who was nervous?
Fix: "When Tim talked to John, **Tim** was nervous."

## Modifier Errors

### Dangling Modifiers
"**Running to the bus**, my backpack fell." — The backpack wasn't running!
Fix: "**Running to the bus, I** dropped my backpack."

### Misplaced Modifiers
"She almost drove **300 miles**." vs. "She drove **almost 300** miles."

## Verb Errors

### Tense Consistency
Don't shift tenses unnecessarily within a passage.

### Subjunctive Mood
"If I **were** president..." (not "was" in hypothetical conditions)

## Parallel Structure
Items in a list or comparison must be in the same grammatical form.
- Wrong: "She likes **swimming**, **to run**, and **biking**."
- Right: "She likes **swimming**, **running**, and **biking**."

## SAT Tips
1. Most grammar questions have exactly one error — find it
2. "No change" is sometimes correct
3. Read the full sentence before choosing — context matters`,
  },

  {
    slug: 'sat-punctuation',
    textContent: `# Punctuation

## Commas
### Required Uses
1. **Lists**: "apples, oranges, and bananas"
2. **Introductory elements**: "However, the results were surprising."
3. **Nonessential clauses**: "My sister, who lives in Boston, is a doctor."
4. **Compound sentences with conjunction**: "I ran, and she walked."
5. **Coordinate adjectives**: "a tall, elegant building"

### NOT Used
- Between subject and verb: ~~"The dog, ran away."~~
- Before "that" in essential clauses: "The book that I read was great."
- After a conjunction: ~~"But, she disagreed."~~

## Semicolons
1. **Join independent clauses**: "I studied hard; the test was still difficult."
2. **Separate list items with internal commas**: "cities including Paris, France; London, England; and Tokyo, Japan."

**Key rule**: Both sides of a semicolon must be complete sentences.

## Colons
1. **Introduce a list, explanation, or elaboration**: "She needed three things: food, water, and shelter."
2. **Must follow a complete sentence**

## Dashes
- **Em dash (—)**: Sets off nonessential information with emphasis. Can replace commas, colons, or parentheses.
- "The results — which surprised everyone — were published yesterday."
- Dashes come in pairs (like parentheses) unless at the end of a sentence.

## Apostrophes
- **Possession**: "the dog's bone" (singular), "the dogs' bones" (plural)
- **Contractions**: "it's" = "it is" vs. "its" = possessive
- **Never for plurals**: ~~"apple's for sale"~~

## SAT Tips
1. If you can remove the phrase between commas/dashes and the sentence still works, the punctuation is correct
2. Semicolons = period (both sides must be complete sentences)
3. "Its" vs. "it's" is one of the most tested rules`,
  },

  {
    slug: 'sat-punctuation-commas-semicolons',
    textContent: `# Commas, Semicolons, and Colons

## When to Use a Comma
1. **After introductory phrases**: "After the meeting, we went to lunch."
2. **Around nonessential information**: "The CEO, Maria Gonzalez, announced the merger."
3. **In compound sentences (with FANBOYS)**: "I studied, but I still struggled."
4. **Separating items in a list**: "We need pens, paper, and notebooks."

## When NOT to Use a Comma
- Between a subject and its verb
- Before or after "that" (in most cases)
- Between two items joined by "and"
- After a coordinating conjunction

## Semicolons: Two Key Rules

### Rule 1: Join Related Independent Clauses
"The experiment failed; the researchers redesigned the protocol."
- Both parts must be complete sentences
- No conjunction needed (semicolon replaces ", and")

### Rule 2: Separate List Items with Internal Commas
"The committee included Dr. Smith, the chair; Prof. Lee, the secretary; and Ms. Park, the treasurer."

## Colons: The Setup Rule
A colon must follow a complete sentence. It introduces:
- A list: "She bought three items: milk, eggs, and bread."
- An explanation: "The reason was simple: they ran out of time."
- A quotation: "Einstein said: 'Imagination is more important than knowledge.'"

## Common SAT Patterns
| Correct | Incorrect |
|---------|-----------|
| clause; clause | clause; and clause |
| clause: explanation | fragment: explanation |
| clause, FANBOYS clause | clause, clause (comma splice) |

## Comma Splices (Always Wrong)
"I went home, I was tired." ← This is a comma splice!
**Fixes**: 
- Period: "I went home. I was tired."
- Semicolon: "I went home; I was tired."
- Conjunction: "I went home, and I was tired."
- Subordination: "I went home because I was tired."

## SAT Tips
1. Read both sides of a semicolon — each must be a complete sentence
2. Colons MUST follow a complete sentence
3. If unsure about commas, try removing the phrase between them — the sentence should still make sense`,
  },

  {
    slug: 'sat-sentence-structure',
    textContent: `# Sentence Structure

## Sentence Types
1. **Simple**: One independent clause. "The dog barked."
2. **Compound**: Two independent clauses joined by conjunction or semicolon. "The dog barked, and the cat hissed."
3. **Complex**: One independent + one dependent clause. "When the dog barked, the cat hissed."
4. **Compound-Complex**: Multiple independent + at least one dependent clause.

## Fragments (Always Wrong on the SAT)
A fragment is a group of words that looks like a sentence but lacks a subject, a verb, or a complete thought.
- "Running through the park on a sunny day." (no subject + finite verb)
- "Because the experiment was successful." (dependent clause alone)

## Run-On Sentences (Always Wrong)
A run-on joins two independent clauses without proper punctuation or conjunction.
- **Fused sentence**: "I ran she walked" 
- **Comma splice**: "I ran, she walked"

### Fixes for Run-Ons
1. Period: "I ran. She walked."
2. Semicolon: "I ran; she walked."
3. Comma + conjunction: "I ran, and she walked."
4. Subordination: "While I ran, she walked."

## Subordination and Coordination
### Coordinating Conjunctions (FANBOYS)
For, And, Nor, But, Or, Yet, So — join equal elements.

### Subordinating Conjunctions
Because, although, when, while, if, since, unless, until, after, before — make one clause dependent.

## Parallel Structure
Elements in a series or comparison must match grammatically:
- ✗ "She likes **reading**, **to write**, and **cooking**."
- ✓ "She likes **reading**, **writing**, and **cooking**."

Also applies to correlative conjunctions:
- "**Both** the teacher **and** the students were present."
- "**Not only** did she study, **but** she also practiced."

## SAT Tips
1. Every sentence needs: subject + finite verb + complete thought
2. Dependent clauses CANNOT stand alone as sentences
3. When combining sentences, choose the option that preserves the original meaning
4. Parallel structure applies to lists, comparisons, and both/and constructions`,
  },

  {
    slug: 'sat-pronoun-agreement',
    textContent: `# Pronoun Agreement and Clarity

## Pronoun-Antecedent Agreement
A pronoun must agree with its antecedent (the noun it replaces) in number and person.

### Number Agreement
- Singular antecedent → singular pronoun
- Plural antecedent → plural pronoun

| Antecedent | Pronoun | Example |
|-----------|---------|---------|
| Each student | he or she | "Each student should open **his or her** book." |
| The students | they | "The students should open **their** books." |
| A person | he or she | "A person should always check **his or her** work." |
| Everyone | he or she | "Everyone should do **his or her** best." |

### Tricky Indefinite Pronouns
These are **singular**: each, every, either, neither, anyone, everyone, someone, nobody, nothing
- "Everyone has **his or her** own opinion." (not "their" on the SAT)
- "Neither of the boys brought **his** book." (not "their")

## Pronoun Case
| Use | Subject Case | Object Case |
|-----|-------------|-------------|
| Subject of sentence | I, he, she, we, they | — |
| Object of verb/preposition | — | me, him, her, us, them |
| After linking verb | I, he, she, we, they | — |

### Tips for Choosing Case
- Remove the other person: "between you and ~~me~~ / ~~I~~" → "between me" ✓
- "~~Him~~ / He and I went" → "He went" + "I went" ✓

## Who vs. Whom
- **Who** = subject (who did it?)
- **Whom** = object (to whom was it done?)
- Trick: Substitute he/him. If "him" works, use "whom."

## Ambiguous Pronouns (Clarity)
"When Sarah met Lisa, **she** smiled." — Who smiled?  
Fix: "When Sarah met Lisa, **Sarah** smiled."

The SAT tests whether a pronoun clearly refers to ONE specific antecedent.

## SAT Tips
1. If a pronoun is underlined, find its antecedent and check agreement
2. Ambiguous pronouns → replace with the actual noun
3. "Their" with a singular antecedent is marked wrong on the SAT
4. Watch for shifts in person: don't switch from "one" to "you"`,
  },

  {
    slug: 'sat-effective-language-use',
    textContent: `# Effective Language Use

## What's Tested
These questions ask you to choose the most effective, precise, and appropriate word or phrase in context.

## Precision
Choose the word that most accurately conveys the intended meaning.
- Vague: "The experiment had **good** results."
- Precise: "The experiment had **conclusive** results."

### Common Precision Pairs
| Vague Word | More Precise Alternatives |
|-----------|--------------------------|
| things | factors, elements, components |
| good | effective, beneficial, advantageous |
| bad | detrimental, harmful, counterproductive |
| a lot | substantial, considerable, extensive |
| said | argued, contended, asserted, maintained |

## Conciseness
Eliminate unnecessary words. The SAT values brevity.
- Wordy: "Due to the fact that it was raining..."
- Concise: "Because it was raining..."

### Common Wordiness Traps
| Wordy | Concise |
|-------|---------|
| in order to | to |
| at this point in time | now |
| in the event that | if |
| a large number of | many |
| the reason why is that | because |
| despite the fact that | although |

## Tone and Style
The answer must match the passage's tone:
- Formal/academic passages → no slang or colloquialisms
- Narrative passages → can be more casual
- Scientific passages → precise, technical vocabulary

## Redundancy
Avoid saying the same thing twice:
- ~~"advance forward"~~ → "advance"
- ~~"past history"~~ → "history"
- ~~"basic fundamentals"~~ → "fundamentals"
- ~~"end result"~~ → "result"

## SAT Tips
1. Shorter is usually better (unless it changes the meaning)
2. Choose the most specific word that fits the context
3. Match the author's tone — don't shift to casual or overly formal
4. If two answers mean the same thing, neither is likely correct`,
  },

  {
    slug: 'sat-transitions-organization',
    textContent: `# Transitions and Organization

## What Are Transitions?
Transitions are words and phrases that connect ideas between sentences and paragraphs. They signal the relationship between ideas.

## Transition Categories

### Addition / Continuation
furthermore, moreover, additionally, in addition, also, similarly, likewise

### Contrast / Opposition
however, nevertheless, nonetheless, on the other hand, conversely, in contrast, although, yet, but

### Cause / Effect
therefore, consequently, as a result, thus, hence, accordingly, because, since

### Example / Illustration
for example, for instance, specifically, in particular, to illustrate, such as

### Sequence / Time
first, next, then, finally, subsequently, meanwhile, previously, afterward

### Summary / Conclusion
in summary, in conclusion, overall, to summarize, ultimately, in short

## How to Choose the Right Transition
1. **Read the sentence BEFORE** the transition
2. **Read the sentence AFTER** the transition
3. **Determine the RELATIONSHIP** between the two ideas
4. **Choose the transition** that accurately signals that relationship

## Common SAT Traps
- **Choosing a transition that "sounds right"** without checking the logical relationship
- **Confusing contrast with addition**: "She studied hard. **Moreover**, she failed." ← Wrong! (Should be "Nevertheless")
- **Using "however" when there's no contrast**: "The results were positive. **However**, they confirmed the hypothesis." ← No contrast here

## Organization Questions
These ask you to:
1. Place a sentence in the most logical position within a paragraph
2. Determine the most effective opening or closing sentence
3. Decide whether to add, delete, or keep a sentence

### Strategy for Placement
- Look for pronoun references (what does "this" refer to?)
- Look for logical sequence (does cause come before effect?)
- Look for specificity flow (general → specific or specific → general)

## SAT Tips
1. ALWAYS read the sentences before and after the blank
2. The relationship between ideas determines the transition — not just the sentence after
3. "However" is the most over-used wrong answer — verify there's actually a contrast
4. If asked to add or delete a sentence, check if it supports the paragraph's main point`,
  },

  {
    slug: 'sat-conciseness-redundancy',
    textContent: `# Conciseness and Redundancy

## The SAT Principle
The best writing is clear and concise. If two answer choices convey the same meaning, choose the shorter one.

## Redundancy: Saying the Same Thing Twice
Redundancy occurs when a phrase repeats an idea that's already expressed.

### Common Redundancies
| Redundant | Concise |
|-----------|---------|
| past history | history |
| advance forward | advance |
| revert back | revert |
| free gift | gift |
| true fact | fact |
| basic fundamentals | fundamentals |
| close proximity | proximity |
| each and every | each / every |
| final outcome | outcome |
| first and foremost | first |
| completely eliminate | eliminate |
| join together | join |
| personal opinion | opinion |
| unexpected surprise | surprise |

## Wordiness: Using Too Many Words
### Wordy Phrases → Concise Alternatives
| Wordy (5+ words) | Concise (1–2 words) |
|-------------------|---------------------|
| due to the fact that | because |
| in spite of the fact that | although |
| at this point in time | now |
| in the event that | if |
| for the purpose of | to |
| in the near future | soon |
| a large number of | many |
| on a daily basis | daily |
| has the ability to | can |
| is able to | can |
| in order to | to |
| the reason why is that | because |
| it is important to note that | (delete entirely) |

## How to Identify the Concise Answer
1. If two choices say the same thing, pick the shorter one
2. Eliminate any choice that repeats information already in the sentence
3. Check if a phrase can be replaced by a single word
4. Delete empty filler phrases ("it is worth noting that," "basically")

## When Longer IS Better
Sometimes the longer answer adds necessary meaning:
- Additional detail that clarifies an ambiguous point
- A qualifying word that changes the meaning ("some" vs. "all")
- A transition word needed for logical flow

## SAT Tips
1. "DELETE the underlined portion" is sometimes the correct answer — and it's often right when the information is redundant
2. Read the FULL sentence — the redundancy might be with words outside the underlined portion
3. The shortest answer isn't always correct, but it often is
4. If an answer adds no new information, it's probably redundant`,
  },

  // ──────────────────────────────────────────────────────────
  //  Test-Taking Strategies
  // ──────────────────────────────────────────────────────────
  {
    slug: 'sat-calculator-strategies',
    textContent: `# Calculator Strategies

## Calculator Policy on the Digital SAT
On the Digital SAT, a calculator is allowed on ALL math questions. The Desmos graphing calculator is built into the testing platform.

## When to Use the Calculator
### USE IT For:
- Complex arithmetic (large numbers, decimals, fractions)
- Graphing equations to find intersections
- Checking your algebraic work
- Systems of equations (graph both lines)
- Verifying solutions by substitution

### DON'T USE IT For:
- Simple arithmetic you can do mentally
- Conceptual questions about properties
- Questions that ask "which is true" about an equation's form
- Estimation problems (faster by hand)

## Desmos Tips for the SAT
1. **Graphing equations**: Type any equation to see its graph instantly
2. **Finding intersections**: Graph two equations and click the intersection point
3. **Solving equations**: Type the equation and look for the x-intercept
4. **Systems of equations**: Graph both equations to find where they meet
5. **Quadratic vertex**: Graph $y = ax^2 + bx + c$ and click the vertex
6. **Tables**: Use the table feature to see output values for specific inputs
7. **Sliders**: For equations with parameters, use sliders to explore behavior

## Common Calculator Mistakes
- Parentheses errors: $-3^2 = -9$, but $(-3)^2 = 9$
- Order of operations mistakes
- Rounding too early (keep full precision until the final answer)
- Relying on the calculator when mental math is faster

## Time Management with Calculator
- Set up the problem on paper first, THEN use the calculator
- If a problem seems to require heavy calculation, look for shortcuts
- The calculator should save time, not waste it

## SAT Tips
1. Practice with Desmos before test day (desmos.com/calculator)
2. Know how to use the graph to solve equations visually
3. Type equations exactly as written — watch for negatives and parentheses
4. For multiple-choice, try plugging in answer choices`,
  },

  {
    slug: 'sat-time-management',
    textContent: `# Time Management

## Digital SAT Timing
| Section | Questions | Time | Per Question |
|---------|-----------|------|-------------|
| Reading & Writing Module 1 | 27 | 32 min | ~71 sec |
| Reading & Writing Module 2 | 27 | 32 min | ~71 sec |
| Math Module 1 | 22 | 35 min | ~95 sec |
| Math Module 2 | 22 | 35 min | ~95 sec |
| **Total** | **98** | **134 min** | |

## The Two-Pass Strategy
### Pass 1: Quick Sweep (First 70% of time)
1. Answer every question you can do quickly and confidently
2. If a question takes more than 90 seconds (R&W) or 2 minutes (Math), **flag it and move on**
3. Goal: Answer 70-80% of questions in Pass 1

### Pass 2: Return to Flagged (Remaining 30% of time)
1. Go back to flagged questions
2. Work through them more carefully
3. If still stuck after 2 minutes, make your best guess and move on

## Question Difficulty Strategy
The Digital SAT arranges questions roughly from easy to hard within each module.
- **Questions 1-10**: Should be quick (under 1 minute each)
- **Questions 11-20**: Moderate time (1-1.5 minutes each)
- **Questions 20+**: May require more time — but don't spend too long on any one question

## Pacing Checkpoints
### Reading & Writing (27 questions in 32 minutes)
- After 10 questions: ~12 minutes used
- After 20 questions: ~24 minutes used
- Last 7 questions: ~8 minutes remaining

### Math (22 questions in 35 minutes)
- After 8 questions: ~12 minutes used
- After 15 questions: ~24 minutes used
- Last 7 questions: ~11 minutes remaining

## Key Principles
1. **Never leave a question blank** — there's no penalty for guessing
2. **Don't get stuck** — flag and return
3. **Easy questions are worth the same as hard questions** — get the easy ones right first
4. **Use the last 2 minutes** to review flagged questions and make sure everything is answered

## SAT Tips
1. Wear a watch or check the on-screen timer regularly
2. Practice full timed sections to build your pacing instinct
3. If you're running behind, start guessing on the hardest remaining questions
4. Speed comes from content mastery — the better you know the material, the faster you'll be`,
  },

  {
    slug: 'sat-process-of-elimination',
    textContent: `# Process of Elimination

## Why Elimination Works
On every SAT question, there are 4 answer choices. Only 1 is correct, which means 3 are wrong. Finding wrong answers is often easier than finding the right one.

## The Elimination Strategy
1. **Read the question carefully** — know exactly what's being asked
2. **Evaluate each choice** — don't just look for the right answer
3. **Eliminate definitely wrong answers** first
4. **Compare remaining choices** against each other
5. **Choose the best remaining answer**

## How to Identify Wrong Answers

### Reading & Writing Wrong Answers
- **Too extreme**: Words like "always," "never," "completely," "all" are often wrong
- **Too broad**: Covers more than the passage discusses
- **Too narrow**: Only addresses part of the question
- **Opposite**: States the reverse of what the passage says
- **Out of scope**: Mentions something not in the passage
- **Partially correct**: One part is right, but another part is wrong (the whole answer must be correct)

### Math Wrong Answers
- **Common calculation errors**: The test makers know the most common mistakes and include those results as wrong answers
- **Sign errors**: Positive when it should be negative
- **Partial answers**: You solved part of the problem but not all of it
- **Wrong operation**: Added when you should have multiplied

## When You Can't Eliminate Any Choices
If you truly can't eliminate anything:
1. Re-read the question — you may have misunderstood what's being asked
2. Re-read the relevant part of the passage
3. If still stuck, make your best guess and move on
4. Flag the question to return to if time permits

## Strategic Guessing
- If you eliminate even 1 choice, your odds improve from 25% to 33%
- Eliminate 2 choices → 50% chance
- Eliminate 3 choices → you've found the answer!
- **Always guess** — there's no penalty for wrong answers on the SAT

## Plugging In (Math)
For multiple-choice math, try plugging answer choices back into the problem:
1. Start with choice B or C (middle values)
2. If too big, try a smaller answer; if too small, try larger
3. This works especially well for "what value of x" questions

## SAT Tips
1. Cross out eliminated answers (use the strikethrough tool on the digital SAT)
2. "All of the above" / "None of the above" — if you can find ONE exception, eliminate it
3. When two answers mean essentially the same thing, neither is likely correct
4. Trust your elimination — if 3 answers are clearly wrong, the remaining one is correct even if you're not sure why`,
  },
]

async function main() {
  console.log('📝 Filling SAT placeholder topic content...\n')

  let updated = 0
  let notFound = 0
  let alreadyFilled = 0

  for (const { slug, textContent } of topicUpdates) {
    const topic = await prisma.topic.findUnique({ where: { slug } })
    if (!topic) {
      console.log(`  ⚠️  Topic not found: ${slug}`)
      notFound++
      continue
    }

    // Only update if content is placeholder or very short
    if (
      topic.textContent === 'Placeholder - will be populated by expansion script' ||
      topic.textContent.length < 200
    ) {
      await prisma.topic.update({
        where: { slug },
        data: { textContent },
      })
      console.log(`  ✅ Updated: ${slug} (${textContent.length} chars)`)
      updated++
    } else {
      console.log(`  ℹ️  Already has content: ${slug} (${topic.textContent.length} chars)`)
      alreadyFilled++
    }
  }

  console.log(`\n✨ Done! Updated: ${updated}, Already filled: ${alreadyFilled}, Not found: ${notFound}`)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
