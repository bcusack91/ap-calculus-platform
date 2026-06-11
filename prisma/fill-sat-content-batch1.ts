import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('📝 Filling in SAT Prep content...\n');

  // Systems of Inequalities
  await prisma.topic.update({
    where: { slug: 'systems-of-inequalities' },
    data: {
      textContent: `# Systems of Inequalities

## What is a System of Inequalities?

A **system of inequalities** consists of two or more inequalities that must be satisfied simultaneously. On the SAT, you'll graph these to find the solution region.

## Graphing Steps

**Example:** Graph the system:
$$\\begin{cases}
y > 2x + 1 \\\\
y \\leq -x + 4
\\end{cases}$$

### Step 1: Graph Each Inequality

**First inequality:** $y > 2x + 1$
- Graph the line $y = 2x + 1$ (dashed line since it's $>$, not $\\geq$)
- Shade above the line

**Second inequality:** $y \\leq -x + 4$
- Graph the line $y = -x + 4$ (solid line since it's $\\leq$)
- Shade below the line

### Step 2: Find the Overlap

The **solution** is where the shaded regions overlap.

## SAT Question Types

### Type 1: Identify the System from a Graph

**Strategy:** 
- Check whether lines are solid ($\\leq$ or $\\geq$) or dashed ($<$ or $>$)
- Test a point in the shaded region to verify the inequality direction

### Type 2: Determine if a Point is in the Solution Region

**Test point $(2, 3)$ in the system above:**
- $3 > 2(2) + 1 \\rightarrow 3 > 5$ ✗ (FALSE)
- Since it fails one inequality, $(2, 3)$ is NOT in the solution

### Type 3: Word Problems

**Example:** A store sells notebooks ($x$) and pens ($y$). 
- You need at least 5 items total: $x + y \\geq 5$
- You can spend at most $20: $2x + 3y \\leq 20$

## Quick Tips

✓ **Solid vs Dashed:** $\\leq$ and $\\geq$ use solid lines; $<$ and $>$ use dashed  
✓ **Shade Direction:** Use test point $(0, 0)$ if not on the line  
✓ **Solution Region:** Look for the overlap of all shaded areas  
✓ **Boundary Check:** Points ON dashed lines are NOT solutions

## Common SAT Mistakes

❌ Confusing solid and dashed lines  
❌ Shading the wrong side  
❌ Not checking if points are in BOTH regions  
❌ Forgetting that dashed lines exclude boundary points
`
    }
  });

  // Two-Way Tables and Conditional Probability
  await prisma.topic.update({
    where: { slug: 'two-way-tables-conditional-probability' },
    data: {
      textContent: `# Two-Way Tables and Conditional Probability

## What is a Two-Way Table?

A **two-way table** (also called a contingency table) shows the relationship between two categorical variables.

**Example:** Survey of 100 students about pets:

|           | Dog | Cat | Total |
|-----------|-----|-----|-------|
| Male      | 24  | 16  | 40    |
| Female    | 36  | 24  | 60    |
| **Total** | 60  | 40  | 100   |

## Reading Two-Way Tables

**Key vocabulary:**
- **Joint frequency:** Cell value (e.g., 24 males have dogs)
- **Marginal frequency:** Row/column total (e.g., 40 males total)
- **Total:** Overall sum (100 students)

## Conditional Probability

**Formula:**
$$P(A|B) = \\frac{P(A \\text{ and } B)}{P(B)}$$

Read as: "Probability of A **given** B"

### Example Questions

**Q1:** What's the probability a randomly selected student is female?
$$P(\\text{Female}) = \\frac{60}{100} = 0.6$$

**Q2:** What's the probability a student has a dog, **given** they're male?
$$P(\\text{Dog}|\\text{Male}) = \\frac{24}{40} = 0.6$$

**Q3:** What's the probability a student is male, **given** they have a cat?
$$P(\\text{Male}|\\text{Cat}) = \\frac{16}{40} = 0.4$$

## SAT Strategy

### Step 1: Identify What You're Finding

Look for "given" or "if" → use conditional probability

**"Given that a student is female, what's the probability they have a cat?"**
- Condition: Female (use Female row only)
- Want: Cat
- Answer: $\\frac{24}{60} = 0.4$

### Step 2: Find the Right Row or Column

**The condition determines your denominator:**
- "Given male" → Use male row (denominator = 40)
- "Given has dog" → Use dog column (denominator = 60)

### Step 3: Calculate

$$\\text{Conditional Probability} = \\frac{\\text{Intersection}}{\\text{Condition Total}}$$

## Common SAT Mistakes

❌ Using the wrong denominator (using 100 instead of the condition total)  
❌ Confusing $P(A|B)$ with $P(B|A)$ — order matters!  
❌ Not identifying the condition properly  
❌ Adding when you should divide

## Practice Tip

Always ask: **"Out of WHAT?"** This tells you the denominator.

- "Out of all males" → denominator is 40
- "Out of all students" → denominator is 100
- "Out of all dog owners" → denominator is 60
`
    }
  });

  // Statistical Claims and Studies
  await prisma.topic.update({
    where: { slug: 'statistical-claims-studies' },
    data: {
      textContent: `# Statistical Claims and Studies

## Types of Studies

### 1. Observational Study

**Definition:** Researchers observe and collect data without manipulating variables.

**Example:** Survey students about study habits and compare to grades.

**Limitation:** Can show **correlation** but NOT **causation**  
❌ Cannot prove studying CAUSES better grades (other factors may be involved)

### 2. Experiment

**Definition:** Researchers assign treatments to groups and control variables.

**Example:** Randomly assign students to study methods and measure results.

**Advantage:** Can establish **causation** if properly designed  
✓ Can prove method A CAUSES better results than method B

## Key Study Design Concepts

### Randomization

**Why it matters:** Eliminates bias by ensuring groups are similar

**Example:** Flip a coin to assign students to study groups (not let them choose)

### Control Group

**Purpose:** Provides baseline for comparison

**Example:** Group that studies with no intervention vs. group with new method

### Placebo Effect

**What it is:** People improve simply because they think they're receiving treatment

**Solution:** Use a **blind** or **double-blind** design where participants (and sometimes researchers) don't know who gets the real treatment

## Sample Selection

### Random Sample

✓ Every member has equal chance of selection  
✓ **Allows generalization** to the population

### Biased Samples

Common types:
- **Convenience sample:** Survey only people nearby (not random)
- **Voluntary response:** Only people who choose to respond (biased toward strong opinions)
- **Undercoverage:** Some groups aren't included in sampling frame

## SAT Question Types

### Type 1: Can This Study Show Causation?

**Ask yourself:**
1. Was it an experiment or observational study?
2. Was there random assignment?
3. Was there a control group?

**If all yes → Can show causation**  
**If any no → Can only show correlation**

### Type 2: Can Results Be Generalized?

**Ask yourself:**
1. Was the sample random?
2. Was it large enough?
3. Was the population well-defined?

**Example:**  
Study of 1000 randomly selected US adults → Can generalize to US adults  
Study of 50 college students at one university → Cannot generalize to all students

### Type 3: Identify the Bias

**Look for:**
- How was sample selected?
- Who was excluded?
- What incentive did people have to respond?

## Quick Decision Tree

**Question: Does X cause Y?**

- Is it an experiment?
  - YES → Was there random assignment?
    - YES → Can show causation ✓
    - NO → Association only
  - NO (observational) → Association only, NOT causation

## Common SAT Mistakes

❌ Saying observational studies prove causation  
❌ Generalizing from non-random samples  
❌ Ignoring confounding variables  
❌ Not recognizing bias in sample selection

## Red Flag Words

**Causation claims to watch for:**
- "proves that X causes Y" (need experiment)
- "X is the reason for Y" (need experiment)
- "shows a relationship" (✓ okay for observational)
- "associated with" (✓ okay for observational)
`
    }
  });

  // Analyzing Arguments
  await prisma.topic.update({
    where: { slug: 'analyzing-arguments' },
    data: {
      textContent: `# Analyzing Arguments (SAT Reading)

## What is Analyzing Arguments?

On the SAT Reading section, you'll be asked to:
- Identify the author's **claim** or **central argument**
- Evaluate the **evidence** used to support it
- Assess the **reasoning** and logic
- Recognize **counterarguments** and how they're addressed

## Components of an Argument

### 1. Claim (Thesis)

The main point the author wants to prove.

**Example:** "Social media has a negative impact on teenage mental health."

### 2. Evidence

Facts, statistics, examples, or expert opinions that support the claim.

**Example:** "Studies show 40% of teens report increased anxiety from social media use."

### 3. Reasoning

How the evidence connects to and supports the claim.

**Example:** "Because constant comparison leads to lower self-esteem."

### 4. Counterargument

An opposing viewpoint that the author acknowledges or refutes.

**Example:** "While some argue social media enhances connection, research shows..."

## SAT Question Types

### Type 1: Identify the Central Claim

**What they ask:**
- "The main argument of the passage is..."
- "The author's primary claim..."
- "Which statement best represents the author's position?"

**Strategy:**
- Usually found in introduction or conclusion
- Look for definitive statements, not just observations
- Avoid choices that are too narrow (minor points) or too broad

### Type 2: Evaluate Evidence

**What they ask:**
- "Which choice provides the best evidence for the previous question?"
- "The author supports the claim by..."
- "The data in lines 23-27 primarily serves to..."

**Strategy:**
- Evidence should **directly support** the specific claim
- Look for facts, studies, examples
- Avoid opinions without backing

### Type 3: Analyze Reasoning

**What they ask:**
- "The author uses the example of X to..."
- "By mentioning Y, the author implies..."
- "The comparison between A and B serves to..."

**Strategy:**
- Ask: WHY did the author include this?
- Connect evidence to claim
- Consider rhetorical purpose (persuade, explain, contrast)

### Type 4: Identify Counterarguments

**What they ask:**
- "The author addresses the opposing view by..."
- "Lines 45-48 serve to..."
- "The author mentions the alternative explanation in order to..."

**Strategy:**
- Look for transition words: "however," "although," "critics argue," "some believe"
- Authors mention counterarguments to strengthen their own position

## Evaluating Argument Strength

**Strong arguments have:**
✓ Specific, relevant evidence  
✓ Clear logical connections  
✓ Acknowledgment of complexity  
✓ Credible sources

**Weak arguments have:**
❌ Vague or irrelevant evidence  
❌ Logical fallacies  
❌ Overgeneralizations  
❌ Unsupported claims

## Common Logical Fallacies

### False Cause

**Error:** Assuming correlation = causation

**Example:** "Ice cream sales and drowning both increase in summer, so ice cream causes drowning."

### Hasty Generalization

**Error:** Drawing broad conclusion from limited evidence

**Example:** "My friend got sick after the vaccine, so vaccines are dangerous."

### Straw Man

**Error:** Misrepresenting opponent's argument to make it easier to attack

### Appeal to Authority

**Error:** Relying on authority figure outside their expertise

**Example:** "This celebrity endorses it, so it must be good."

## SAT Reading Strategy

### Step 1: Identify the Structure

As you read, note:
- Main claim (usually intro/conclusion)
- Supporting points (body paragraphs)
- Evidence for each point
- Counterarguments (if any)

### Step 2: Annotate Active Words

Circle:
- Claim indicators: "argues that," "maintains," "contends"
- Evidence markers: "studies show," "for example," "data reveals"
- Reasoning connectors: "therefore," "because," "thus"
- Counter indicators: "however," "critics," "opponents claim"

### Step 3: Match Question to Passage Purpose

**Ask:** What is this sentence/paragraph doing?
- Introducing main idea?
- Providing evidence?
- Addressing opposition?
- Drawing conclusion?

## Common SAT Mistakes

❌ Confusing a minor point with the main claim  
❌ Choosing evidence that's interesting but doesn't support the specific claim  
❌ Missing the author's purpose for including information  
❌ Not recognizing when author is presenting opposing views

## Quick Tips

✓ The claim is what the author wants you to believe  
✓ Evidence is the facts/examples that support it  
✓ Not all information is evidence—some is context or counterargument  
✓ Strong passages acknowledge complexity and opposing views
`
    }
  });

  console.log('✅ Added content for 4 SAT topics');
  console.log('\nContinuing with more topics...\n');

  // Function Notation and Transformations
  await prisma.topic.update({
    where: { slug: 'function-notation-transformations' },
    data: {
      textContent: `# Function Notation and Transformations

## Function Notation Review

### Basic Notation

**$f(x) = 2x + 3$** means "the function $f$ takes an input $x$ and outputs $2x + 3$"

**Examples:**
- $f(5) = 2(5) + 3 = 13$
- $f(-2) = 2(-2) + 3 = -1$
- $f(a) = 2a + 3$

### Composite Functions

**Notation:** $(f \\circ g)(x) = f(g(x))$

**Example:** If $f(x) = x^2$ and $g(x) = x + 1$:

$$f(g(3)) = f(3 + 1) = f(4) = 4^2 = 16$$

$$g(f(3)) = g(3^2) = g(9) = 9 + 1 = 10$$

**Note:** Order matters! $f(g(x)) \\neq g(f(x))$

### Inverse Functions

**Notation:** $f^{-1}(x)$

**Property:** $f(f^{-1}(x)) = x$ and $f^{-1}(f(x)) = x$

**Example:** If $f(x) = 2x + 3$, then $f^{-1}(x) = \\frac{x - 3}{2}$

Verify: $f(f^{-1}(7)) = f(\\frac{7-3}{2}) = f(2) = 2(2) + 3 = 7$ ✓

## Function Transformations

### Vertical Transformations

**Vertical Shift:**
- $f(x) + k$ shifts **UP** $k$ units
- $f(x) - k$ shifts **DOWN** $k$ units

**Vertical Stretch/Compression:**
- $a \\cdot f(x)$ where $a > 1$: **stretch** (taller)
- $a \\cdot f(x)$ where $0 < a < 1$: **compression** (shorter)

**Reflection over x-axis:**
- $-f(x)$ flips the graph **upside down**

### Horizontal Transformations

**Horizontal Shift:**
- $f(x - h)$ shifts **RIGHT** $h$ units (opposite of what you'd think!)
- $f(x + h)$ shifts **LEFT** $h$ units

**Horizontal Stretch/Compression:**
- $f(bx)$ where $b > 1$: **compression** (narrower)
- $f(bx)$ where $0 < b < 1$: **stretch** (wider)

**Reflection over y-axis:**
- $f(-x)$ flips the graph **horizontally**

## Transformation Examples

### Example 1: Multiple Transformations

**Given:** $f(x) = x^2$  
**New:** $g(x) = -2f(x - 3) + 1 = -2(x-3)^2 + 1$

**Transform in this order:**
1. Shift right 3: $(x-3)^2$
2. Stretch vertically by 2: $2(x-3)^2$
3. Reflect over x-axis: $-2(x-3)^2$
4. Shift up 1: $-2(x-3)^2 + 1$

### Example 2: From Graph to Equation

If the parent function $f(x) = \\sqrt{x}$ is:
- Shifted left 2
- Reflected over x-axis
- Shifted down 3

**Equation:** $g(x) = -\\sqrt{x + 2} - 3$

## SAT Question Types

### Type 1: Evaluate Composite Functions

**Given:** $f(x) = x^2 + 1$ and $g(x) = 2x - 3$

**Find:** $f(g(2))$

**Solution:**
1. Find $g(2) = 2(2) - 3 = 1$
2. Find $f(1) = 1^2 + 1 = 2$

### Type 2: Match Transformations to Graphs

**Strategy:**
- Check key points (vertex, intercepts)
- Identify shifts first (easiest to spot)
- Then check reflections and stretches

### Type 3: Inverse Function Properties

**If $f(5) = 12$, what is $f^{-1}(12)$?**

**Answer:** $f^{-1}(12) = 5$ (inverse "undoes" the function)

## Common SAT Mistakes

❌ Confusing $f(x) + 3$ (shift up) with $f(x + 3)$ (shift left)  
❌ Thinking $f(x - 2)$ shifts left (it shifts RIGHT!)  
❌ Forgetting order matters in composite functions  
❌ Not simplifying composite functions step-by-step

## Transformation Quick Reference

| Transformation | Notation | Effect |
|---------------|----------|--------|
| Shift up $k$ | $f(x) + k$ | Move graph up |
| Shift down $k$ | $f(x) - k$ | Move graph down |
| Shift right $h$ | $f(x - h)$ | Move graph right |
| Shift left $h$ | $f(x + h)$ | Move graph left |
| Reflect over x-axis | $-f(x)$ | Flip upside down |
| Reflect over y-axis | $f(-x)$ | Flip horizontally |
| Vertical stretch | $a \\cdot f(x)$, $a>1$ | Make taller |
| Vertical compression | $a \\cdot f(x)$, $0<a<1$ | Make shorter |

## Pro Tips

✓ **Inside the parentheses affects x (horizontal)**  
✓ **Outside the parentheses affects y (vertical)**  
✓ **Horizontal shifts are counterintuitive** (opposite sign)  
✓ **Work from inside out** for composite functions
`
    }
  });

  // Organization and Focus
  await prisma.topic.update({
    where: { slug: 'organization-and-focus' },
    data: {
      textContent: `# Organization and Focus (SAT Writing)

## What is Organization?

Good writing has a **logical flow** where:
- Ideas connect smoothly
- Paragraphs have clear purposes
- Information is in the most effective order
- The focus stays on the main topic

## Types of SAT Questions

### 1. Transition Words

**What they test:** Choosing the right word to connect ideas

**Common transitions:**

**To add information:**
- Furthermore, Moreover, Additionally, Also

**To contrast:**
- However, Nevertheless, On the other hand, Conversely

**To show cause/effect:**
- Therefore, Consequently, Thus, As a result

**To give examples:**
- For instance, For example, Specifically, In particular

**To conclude:**
- In conclusion, Ultimately, Finally

**Strategy:** Read the sentences before and after. Are they:
- Agreeing? → Use addition/continuation
- Disagreeing? → Use contrast
- Cause and effect? → Use therefore/thus

### 2. Sentence Placement

**What they test:** Where a sentence best fits in a paragraph

**Example question:** "To make this paragraph most logical, sentence 4 should be placed..."

**Strategy:**
1. Read the sentence that needs to be moved
2. Look for **connecting words** (this, that, these, those, such)
3. Find what those words refer to
4. Place the sentence AFTER what it references

**Example:**

[1] The pyramids were built over 4,000 years ago. [2] Modern engineers marvel at their precision. [3] **This achievement** required thousands of workers. [4] The blocks weigh up to 80 tons each.

→ Sentence 3 should come AFTER sentence 1 (not 2) because "this achievement" refers to the building mentioned in sentence 1.

### 3. Adding or Deleting Information

**What they test:** Whether information should be included

**Question types:**
- "Should the writer add this sentence?"
- "Which sentence should be deleted?"

**Decision process:**

**Add the sentence if it:**
✓ Supports the paragraph's main idea  
✓ Provides relevant detail or example  
✓ Clarifies a confusing point  
✓ Creates logical flow

**DON'T add if it:**
❌ Introduces a new topic  
❌ Is irrelevant to the point  
❌ Repeats information already stated  
❌ Contradicts the paragraph's focus

### 4. Opening or Closing Sentences

**What they test:** Best introduction or conclusion for a paragraph

**Effective opening sentences:**
- Introduce the main idea
- Connect to previous paragraph
- Are broad enough to encompass what follows

**Effective closing sentences:**
- Wrap up the paragraph's main point
- Don't introduce new information
- May transition to the next paragraph

### 5. Logical Sequence

**What they test:** The best order for sentences or paragraphs

**Organizational patterns:**

**Chronological:** Time order (first, then, finally)  
**Spatial:** Location/position (above, below, nearby)  
**Order of importance:** Most to least important (or reverse)  
**General to specific:** Broad statement → specific details  
**Problem to solution:** Issue → how to fix it

## Focus and Precision

### Staying On Topic

**Every sentence should:**
- Relate to the paragraph's main idea
- Support the essay's thesis
- Avoid tangents or unrelated information

**Red flags for off-topic sentences:**
- Introduces completely new subject
- Provides interesting but irrelevant information
- Belongs in a different paragraph

### Maintaining Consistent Focus

**Watch for shifts in:**
- **Point of view:** Don't switch from "one" to "you" to "we"
- **Tense:** Stay in past or present throughout
- **Tone:** Keep formal or informal consistent

## SAT Strategy Guide

### For Transition Questions:

**Step 1:** Read the sentence before the blank  
**Step 2:** Read the sentence after the blank  
**Step 3:** Determine the relationship  
**Step 4:** Choose the transition that matches

### For Sentence Placement:

**Step 1:** Identify connecting words in the sentence  
**Step 2:** Find what they refer to  
**Step 3:** Place the sentence after its reference  
**Step 4:** Check that the flow makes sense

### For Add/Delete Questions:

**Step 1:** Identify the paragraph's main idea  
**Step 2:** Ask: Does this sentence support it?  
**Step 3:** Check if information is new or redundant  
**Step 4:** Choose accordingly (and pick correct reason!)

## Common SAT Mistakes

❌ Choosing transitions based on sound rather than meaning  
❌ Not reading enough context (need sentences before AND after)  
❌ Adding sentences just because they're interesting  
❌ Forgetting that referential words (this, that, these) need clear antecedents  
❌ Ignoring the "reason" part of add/delete questions

## Quick Tips

✓ **Transition words are NOT interchangeable** — meaning matters  
✓ **Pronouns and demonstratives** (this, these, such) are clues for sentence placement  
✓ **Relevance trumps interest** — stay on topic even if info is fascinating  
✓ **Chronology matters** — don't put effects before causes  
✓ **Read the whole paragraph** before deciding on organization

## Practice Approach

When you see an organization question:
1. **Pause** — don't rush
2. **Read context** — usually need full paragraph
3. **Identify purpose** — what is this paragraph trying to do?
4. **Eliminate clearly wrong** — narrow it down
5. **Check your answer** — reread with your choice to verify flow
`
    }
  });

  console.log('✅ Added content for 6 SAT topics total');
  console.log('\nMoving to SAT Test Strategy topics...\n');

  // Calculator Strategies
  await prisma.topic.update({
    where: { slug: 'calculator-strategies' },
    data: {
      textContent: `# Calculator vs No-Calculator Strategies

## SAT Math Structure

- **Section 3:** No Calculator (20 questions, 25 minutes)
- **Section 4:** Calculator Allowed (38 questions, 55 minutes)

## When to Use Your Calculator

### ✓ ALWAYS Use for:

**1. Complex Arithmetic**
- $147 \\times 23$
- $\\frac{2847}{93}$
- $15.7 + 23.8 + 41.9$

**2. Long Division**
- Any division that doesn't simplify nicely
- Decimal calculations

**3. Square Roots of Non-Perfect Squares**
- $\\sqrt{47}$
- $\\sqrt{123.5}$

**4. Checking Your Work**
- Plug answers back into equations
- Verify solutions

**5. Statistics Problems**
- Mean, median calculations with many numbers
- Standard deviation

### ✗ DON'T Use for:

**1. Simple Mental Math**
- $25 \\times 4 = 100$
- $\\frac{1}{2} + \\frac{1}{4} = \\frac{3}{4}$

**2. Problems Testing Concepts**
- Factoring quadratics
- Simplifying expressions
- Understanding function notation

**3. When Mental Math is Faster**
- $50\\% \\text{ of } 80 = 40$
- $2^3 = 8$

## Calculator Section Strategies

### Strategy 1: Graphing Function Behavior

**Use your graphing calculator to:**
- Find intersections of two functions
- Determine maximum/minimum values
- Visualize transformations

**Example:** Where does $y = x^2 - 4x + 3$ cross the x-axis?

**Calculator method:**
1. Graph $y = x^2 - 4x + 3$
2. Use "zero" or "root" function
3. Find $x = 1$ and $x = 3$

### Strategy 2: Testing Answer Choices

**For "which equation..." questions:**

**Example:** Which equation has solutions $x = 2$ and $x = 5$?

**Calculator method:**
1. Plug in $x = 2$ to each answer choice
2. See which equals zero
3. Verify with $x = 5$

### Strategy 3: Table Feature

**Use tables to:**
- Evaluate functions quickly at multiple x-values
- Find patterns
- Check which x gives a certain y

**Example:** For what value of $x$ does $f(x) = 2x^2 - 5x + 1 = 10$?

**Calculator method:**
1. Enter $y = 2x^2 - 5x + 1$
2. Make table
3. Look for where $y = 10$

## No-Calculator Section Strategies

### Strategy 1: Fraction Sense

**Keep answers in fraction form:**
- $\\frac{2}{3} + \\frac{1}{4} = \\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}$

**Don't convert to decimals** (more error-prone)

### Strategy 2: Factor and Simplify

**Example:** $\\frac{x^2 - 9}{x - 3} = ?$

**Solution:** $\\frac{(x+3)(x-3)}{x-3} = x + 3$

### Strategy 3: Recognize Patterns

**Perfect squares:** $x^2 \\pm 2xy + y^2 = (x \\pm y)^2$

**Difference of squares:** $x^2 - y^2 = (x+y)(x-y)$

**Example:** $49 - x^2 = (7+x)(7-x)$

### Strategy 4: Estimation

**When stuck, estimate:**

**Example:** Which is closest to $\\frac{51}{9.8}$?
- Think: $\\frac{50}{10} = 5$
- Answer should be slightly more than 5

### Strategy 5: Properties of Exponents

**Memorize:**
- $x^a \\cdot x^b = x^{a+b}$
- $(x^a)^b = x^{ab}$
- $x^0 = 1$
- $x^{-a} = \\frac{1}{x^a}$

## Time Management

### Calculator Section (55 minutes, 38 questions)

**Recommended pace:**
- **First 15 questions:** ~1 minute each (15 min)
- **Next 15 questions:** ~1.5 minutes each (22.5 min)
- **Last 8 questions:** ~2 minutes each (16 min)
- **Review:** 1.5 minutes

**If stuck:** Skip and come back (you have your calculator as backup)

### No-Calculator Section (25 minutes, 20 questions)

**Recommended pace:**
- **First 10 questions:** ~1 minute each (10 min)
- **Next 10 questions:** ~1.3 minutes each (13 min)
- **Review:** 2 minutes

**If stuck:** Must rely on algebra/mental math skills

## Common Calculator Mistakes

❌ **Over-relying on calculator** for simple problems (wastes time)  
❌ **Rounding too early** (keep extra decimals until final answer)  
❌ **Mistyping** parentheses (e.g., typing $1/2+3$ instead of $1/(2+3)$)  
❌ **Not checking mode** (degrees vs radians, though SAT uses degrees)  
❌ **Forgetting to clear** previous calculations

## Calculator Tips for SAT

### Parentheses are Your Friend

**Always use parentheses for fractions:**
- WRONG: $1/2x$ (calculator reads as $\\frac{1}{2x}$)
- RIGHT: $(1/2)x$ or $1/(2x)$ depending on what you mean

### Store Values in Memory

**For multi-step problems:**
1. Calculate first part
2. Store in calculator memory (STO button)
3. Recall for next calculation (RCL button)

**Prevents rounding errors and saves time**

### Know Your Calculator

**Practice with YOUR calculator before test day:**
- Where is the ² button?
- How to enter fractions?
- How to use graphing features?
- Where is ANS (previous answer)?

## The Golden Rule

**ASK YOURSELF: "Is the calculator making this easier or am I just avoiding thinking?"**

✓ Calculator for: **computation**  
✗ Calculator for: **conceptual understanding**

**Remember:** The no-calculator section exists to test your understanding. If you can't solve those problems, practice more mental math and algebraic manipulation!

## Quick Decision Chart

**Deciding whether to use your calculator:**

1. Is it in the calculator section?
   - NO → Must use mental math/algebra
   - YES → Continue to #2
2. Is it simple mental math?
   - YES → Do it in your head (faster)
   - NO → Continue to #3
3. Is it testing a concept?
   - YES → Work it out (calculator won't help)
   - NO → Use calculator to compute
`
    }
  });

  // Process of Elimination
  await prisma.topic.update({
    where: { slug: 'process-of-elimination' },
    data: {
      textContent: `# Process of Elimination (POE)

## Why Process of Elimination Matters

**Key SAT fact:** There is **NO guessing penalty**

- Correct answer: +1 point
- Wrong answer: 0 points  
- Blank: 0 points

**Therefore:** ALWAYS guess! Even if you have no idea.

But with **Process of Elimination**, you can often get it right even when you don't know the answer.

## The POE Strategy

### Step 1: Eliminate the Obviously Wrong

**Look for answers that are:**
- Factually incorrect
- Contradict the passage/problem
- Use extreme language ("always," "never," "only")
- Impossible based on the data

**Example (Reading):**

**Question:** The author's tone is best described as...

A) Hostile and aggressive  
B) Thoughtful and analytical  
C) Completely neutral  
D) Wildly enthusiastic

**POE:** If the passage discusses pros and cons calmly → Eliminate A and D (too extreme), probably C too (likely has SOME perspective). Choose B.

### Step 2: Use Partial Knowledge

**Even if you don't know the full answer, you might know:**
- What it's NOT
- A constraint it must meet
- One part of a multi-step problem

**Example (Math):**

**Question:** If $x^2 = 16$ and $x < 0$, what is $x$?

A) 16  
B) 8  
C) 4  
D) -4

**POE:** 
- A is wrong (16² = 256, not 16)
- B is wrong (8² = 64, not 16)
- C is wrong (problem says $x < 0$, so must be negative)
- **D must be correct** ✓

### Step 3: Check Reasonableness

**Eliminate answers that:**
- Don't make sense in context
- Are way too big or too small
- Have wrong units
- Violate basic rules

**Example (Word Problem):**

**A car travels 60 miles in 2 hours. What is its average speed?**

A) 0.033 mph  
B) 2 mph  
C) 30 mph  
D) 120 mph

**POE:** A and B are way too slow for a car. D seems too fast (60 miles in 2 hours). Must be C.

## Subject-Specific POE Strategies

### Reading POE

**Eliminate if the answer:**
❌ Goes too far (passage says "suggests," answer says "proves")  
❌ Contradicts stated facts  
❌ Uses words NOT in the passage (for vocabulary questions)  
❌ Is too narrow (doesn't cover whole passage) or too broad (includes things not discussed)

**For "main idea" questions:**
- Eliminate answers about minor details
- Eliminate answers too general (could apply to any passage)

**For "evidence" questions:**
- Must directly support the previous answer
- Eliminate if it talks about something else

### Writing POE

**Eliminate if it:**
❌ Is grammatically incorrect  
❌ Changes the meaning  
❌ Is wordy when a concise option exists  
❌ Has unclear pronoun references  
❌ Creates run-on sentences or fragments

**Quick checks:**
- Subject-verb agreement
- Verb tense consistency
- Pronoun-antecedent agreement
- Parallel structure

### Math POE

**Eliminate if it:**
❌ Doesn't answer what's asked (question asks for $2x$, answer gives $x$)  
❌ Results from a common mistake (forgetting negative sign, dropping exponent)  
❌ Fails a quick substitution check  
❌ Violates constraints (e.g., negative when must be positive)

**Strategy: Plug in answer choices**

For "solve for x" questions, test each answer:

**Example:** $2x + 5 = 13$

A) 2  
B) 4  
C) 8  
D) 16

**Test A:** $2(2) + 5 = 9 \\neq 13$ ✗  
**Test B:** $2(4) + 5 = 13$ ✓ (STOP, found it!)

## Advanced POE: When Down to Two

**When you've eliminated to 2 choices:**

### Reread Carefully
- Look for subtle differences
- Check exact wording in passage/problem
- See which matches more precisely

### Look for Trap Answers
**SAT includes "partial" correct answers:**
- Right idea, wrong application
- Correct for different question
- Mixes up cause and effect

**Example:**

**Passage says:** "The invention, though innovative, was too expensive for widespread adoption."

**Question:** Why wasn't the invention adopted?

A) It wasn't innovative  
B) It cost too much

**POE:** A contradicts the passage. B is correct (even though the passage mentions innovation, that's not WHY it wasn't adopted).

### Trust Patterns

**After eliminating, if both seem possible:**
- Avoid extreme language
- Pick the more specific one (for reading)
- Pick the simpler calculation (for math)
- Choose active voice over passive (for writing)

## Common POE Mistakes

❌ **Eliminating too quickly** — read all choices first  
❌ **Not committing** — if you eliminate, REALLY eliminate (don't second-guess without reason)  
❌ **Ignoring gut feeling** — if something "feels wrong," there's often a reason  
❌ **Choosing first answer that sounds okay** — compare ALL before deciding  
❌ **Not physically marking** — cross out eliminated answers on test booklet

## POE in Action

**Mental checklist for each answer:**
1. ☐ Is this factually correct?
2. ☐ Does this match the question asked?
3. ☐ Is this reasonable/logical?
4. ☐ Does this match the passage/data given?
5. ☐ Is this better than other remaining choices?

## Time-Saving POE

**When short on time:**
1. Read the question
2. Predict the answer (if possible)
3. If your prediction matches a choice → pick it
4. If not → eliminate obviously wrong answers
5. Guess from remaining choices

**Remember:** Eliminating even ONE wrong answer increases your odds significantly:
- 4 choices: 25% chance
- 3 choices: 33% chance  
- 2 choices: 50% chance
- 1 choice: 100% chance!

## The POE Mindset

**Think like this:**

"I might not know the right answer, but I can definitely spot wrong answers."

**Approach each answer asking:**
"Can I eliminate this?" (not "Is this correct?")

**Why this works:**
- Less pressure
- Uses partial knowledge
- Often easier to spot wrong than to know right
- Increases confidence even when uncertain

## Practice Drill

**For your next practice test:**
1. **Before looking at choices:** Try to predict answer
2. **Read all 4 choices**
3. **Physically cross out** eliminated choices
4. **Make note:** How many did you eliminate?
5. **Track:** Did eliminating help?

**Goal:** Get comfortable eliminating 1-2 choices on EVERY question where you're not 100% confident.
`
    }
  });

  console.log('✅ Completed 8 SAT topics with substantial content\n');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
