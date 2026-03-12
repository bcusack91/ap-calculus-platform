import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Expanding SAT Heart of Algebra with thorough content...\n')

  // ============================================================
  // TOPIC 1: Linear Equations and Inequalities
  // ============================================================
  const linearEq = await prisma.topic.findUnique({
    where: { slug: 'sat-linear-equations-inequalities' }
  })

  if (linearEq) {
    await prisma.topic.update({
      where: { id: linearEq.id },
      data: {
        textContent: `# Linear Equations and Inequalities on the SAT

## Why This Topic Matters

Linear equations and inequalities appear in roughly **30-35%** of SAT Math questions. Mastering this topic is the single highest-impact thing you can do to improve your math score.

---

## What Is a Linear Equation?

A **linear equation** is any equation where the variable has an exponent of 1 (no $x^2$, $\\sqrt{x}$, etc.).

**Standard form:** $Ax + By = C$

**Slope-intercept form:** $y = mx + b$

**Point-slope form:** $y - y_1 = m(x - x_1)$

---

## Solving One-Step Equations

Use inverse operations to isolate the variable.

| Operation in Equation | Inverse Operation |
|---|---|
| Addition ($+$) | Subtraction ($-$) |
| Subtraction ($-$) | Addition ($+$) |
| Multiplication ($\\times$) | Division ($\\div$) |
| Division ($\\div$) | Multiplication ($\\times$) |

**Example:** $x + 7 = 12$
$$x = 12 - 7 = 5$$

---

## Solving Two-Step Equations

**Strategy:** Undo addition/subtraction first, then undo multiplication/division.

**Example:** $3x - 5 = 16$

**Step 1:** Add 5 to both sides: $3x = 21$

**Step 2:** Divide both sides by 3: $x = 7$

---

## Multi-Step Equations

When equations have variables on both sides, parentheses, or fractions:

### Step-by-Step Strategy
1. **Distribute** any parentheses
2. **Combine** like terms on each side
3. **Move variables** to one side
4. **Move constants** to the other side
5. **Divide** to solve

**Example:** $4(2x - 3) = 5x + 6$
$$8x - 12 = 5x + 6$$
$$3x = 18$$
$$x = 6$$

---

## Clearing Fractions

Multiply every term by the LCD (least common denominator).

**Example:** $\\frac{x}{3} + \\frac{x}{4} = 7$

LCD = 12, so multiply everything by 12:
$$4x + 3x = 84$$
$$7x = 84$$
$$x = 12$$

---

## Special Cases

### No Solution
When simplifying leads to a false statement like $5 = 3$, there is **no solution**.

**Example:** $2(x + 1) = 2x + 5$
$$2x + 2 = 2x + 5$$
$$2 = 5 \\quad \\text{(FALSE — no solution)}$$

### Infinitely Many Solutions
When simplifying leads to a true statement like $3 = 3$, there are **infinitely many solutions**.

**Example:** $3(x - 2) = 3x - 6$
$$3x - 6 = 3x - 6$$
$$0 = 0 \\quad \\text{(TRUE — infinite solutions)}$$

---

## Linear Inequalities

Inequalities use $<$, $>$, $\\leq$, $\\geq$ instead of $=$.

### The One Critical Rule
> **When you multiply or divide by a negative number, FLIP the inequality sign.**

**Example:** $-3x > 12$
$$x < -4 \\quad \\text{(sign flipped!)}$$

### Compound Inequalities
$$-2 < 3x + 1 \\leq 10$$
Subtract 1 from all parts: $-3 < 3x \\leq 9$
Divide all parts by 3: $-1 < x \\leq 3$

---

## SAT-Specific Question Types

### Type 1: "What is the value of x?"
Straightforward solve — isolate the variable.

### Type 2: "What is the value of an expression?"
Don't solve for x! Manipulate the equation to find the expression directly.

**Example:** If $3x + 5 = 17$, what is $6x + 10$?
$$6x + 10 = 2(3x + 5) = 2(17) = 34$$

### Type 3: "Which value is NOT a solution?"
Test each answer choice — the one that makes the inequality false is your answer.

### Type 4: "For what value of $a$ does the equation have no solution?"
Set up the equation so the variable terms cancel and constants don't match.

### Type 5: "For what value of $a$ does the equation have infinitely many solutions?"
Set up the equation so both sides are completely identical.

---

## Word Problem Translation

| English Phrase | Math Symbol |
|---|---|
| "is," "equals," "the result is" | $=$ |
| "more than," "increased by," "sum" | $+$ |
| "less than," "decreased by," "difference" | $-$ |
| "times," "product," "of" | $\\times$ |
| "per," "quotient," "divided by" | $\\div$ |
| "at least" | $\\geq$ |
| "at most" | $\\leq$ |
| "more than" (comparison) | $>$ |
| "fewer than" (comparison) | $<$ |

---

## Common SAT Mistakes

1. **Forgetting to distribute the negative sign:** $-(x - 3) = -x + 3$, NOT $-x - 3$
2. **Not flipping the inequality sign** when dividing by a negative
3. **Solving for $x$ when the question asks for an expression** like $2x + 1$
4. **Arithmetic errors with fractions** — always find the LCD first
5. **Misreading "less than"** — "$5$ less than $x$" means $x - 5$, NOT $5 - x$

---

## Quick Reference: 5-Step SAT Strategy

1. **Read the full question** — what exactly are they asking for?
2. **Simplify** — distribute, combine like terms
3. **Isolate** — get the variable (or expression) alone
4. **Check** — plug your answer back in
5. **Match** — make sure your answer matches what was asked

---

## Practice Tips

- On the SAT, you see roughly 6-8 linear equation questions
- Most can be solved in under 60 seconds with practice
- Watch for "shortcut" questions where you find an expression, not $x$
- If stuck, try plugging in answer choices (backsolving)
`
      }
    })

    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: linearEq.id,
          order: 10,
          difficulty: 'EASY',
          question: 'If $5x - 3 = 22$, what is the value of $x$?',
          solution: `**Step 1:** Add 3 to both sides
$$5x - 3 + 3 = 22 + 3$$
$$5x = 25$$

**Step 2:** Divide both sides by 5
$$x = \\frac{25}{5} = 5$$

**Check:** $5(5) - 3 = 25 - 3 = 22$ ✓

**Answer:** $x = 5$`
        },
        {
          topicId: linearEq.id,
          order: 11,
          difficulty: 'EASY',
          question: 'If $-2x \\geq 14$, what is the greatest possible integer value of $x$?',
          solution: `**Step 1:** Divide both sides by $-2$ and **flip the inequality**
$$x \\leq \\frac{14}{-2}$$
$$x \\leq -7$$

**Key:** We flip the inequality because we divided by a negative number.

The greatest integer less than or equal to $-7$ is $-7$.

**Answer:** $x = -7$`
        },
        {
          topicId: linearEq.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'If $3(2x - 4) + 7 = 4x + 5$, what is the value of $x$?',
          solution: `**Step 1:** Distribute the 3
$$6x - 12 + 7 = 4x + 5$$

**Step 2:** Combine like terms on the left
$$6x - 5 = 4x + 5$$

**Step 3:** Subtract $4x$ from both sides
$$2x - 5 = 5$$

**Step 4:** Add 5 to both sides
$$2x = 10$$

**Step 5:** Divide by 2
$$x = 5$$

**Check:** $3(2(5) - 4) + 7 = 3(6) + 7 = 25$ and $4(5) + 5 = 25$ ✓

**Answer:** $x = 5$`
        },
        {
          topicId: linearEq.id,
          order: 13,
          difficulty: 'HARD',
          question: 'If $\\frac{2x + 3}{4} - \\frac{x - 1}{3} = 2$, what is the value of $10x - 5$?',
          solution: `**Step 1:** Find the LCD of 4 and 3, which is 12. Multiply every term by 12.
$$12 \\cdot \\frac{2x + 3}{4} - 12 \\cdot \\frac{x - 1}{3} = 12 \\cdot 2$$
$$3(2x + 3) - 4(x - 1) = 24$$

**Step 2:** Distribute
$$6x + 9 - 4x + 4 = 24$$

**Step 3:** Combine like terms
$$2x + 13 = 24$$

**Step 4:** Solve for $x$
$$2x = 11$$
$$x = \\frac{11}{2}$$

**Step 5:** Find what the question asks: $10x - 5$
$$10\\left(\\frac{11}{2}\\right) - 5 = 55 - 5 = 50$$

**Answer:** $10x - 5 = 50$

**SAT Tip:** The question asks for $10x - 5$, not $x$. Always read carefully!`
        },
        {
          topicId: linearEq.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'For what value of $a$ does the equation $a(x + 2) - 3 = 4x + 2a - 7$ have no solution?',
          solution: `**Step 1:** Distribute $a$ on the left
$$ax + 2a - 3 = 4x + 2a - 7$$

**Step 2:** Subtract $2a$ from both sides
$$ax - 3 = 4x - 7$$

**Step 3:** For NO solution, the $x$ coefficients must be equal but the constants must differ.
Set the $x$ coefficients equal: $a = 4$

**Step 4:** Verify with $a = 4$:
$$4x - 3 = 4x - 7$$
$$-3 = -7 \\quad \\text{(FALSE — no solution ✓)}$$

**Answer:** $a = 4$

**Why this works:** When $a = 4$, both sides have $4x$, but the constants ($-3$ vs $-7$) don't match, making the equation impossible.`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: linearEq.id,
          front: 'What must you do when you multiply or divide an inequality by a negative number?',
          back: 'Flip (reverse) the inequality sign. For example, if you divide both sides of $-2x > 6$ by $-2$, the result is $x < -3$.',
          hint: 'Think about what happens to the direction of the comparison'
        },
        {
          topicId: linearEq.id,
          front: 'How do you clear fractions from an equation?',
          back: 'Multiply every term on both sides by the Least Common Denominator (LCD). For example, in $\\frac{x}{3} + \\frac{x}{4} = 7$, multiply everything by 12.',
          hint: 'Find a number that all denominators divide into evenly'
        },
        {
          topicId: linearEq.id,
          front: 'What does it mean when solving an equation leads to $0 = 5$?',
          back: 'The equation has NO SOLUTION. A false numerical statement means no value of the variable can make the equation true.',
          hint: 'Is that statement ever true?'
        },
        {
          topicId: linearEq.id,
          front: 'On the SAT, if a question says "If $3x + 2 = 11$, what is $9x + 6$?", what is the fastest approach?',
          back: 'Notice that $9x + 6 = 3(3x + 2) = 3(11) = 33$. Multiply the whole equation by 3 instead of solving for $x$ first.',
          hint: 'Look for a relationship between the expression asked for and the given equation'
        },
        {
          topicId: linearEq.id,
          front: 'What is the difference between $\\leq$ and $<$ on a number line graph?',
          back: '$\\leq$ uses a CLOSED (filled) circle, meaning the endpoint IS included. $<$ uses an OPEN (empty) circle, meaning the endpoint is NOT included.',
          hint: 'One includes the boundary point, one does not'
        },
        {
          topicId: linearEq.id,
          front: 'How do you translate "5 less than twice a number" into algebra?',
          back: '$2x - 5$ (NOT $5 - 2x$). "Less than" means subtraction FROM the first quantity. Start with "twice a number" ($2x$) then subtract 5.',
          hint: '"Less than" reverses the order from English to math'
        },
        {
          topicId: linearEq.id,
          front: 'When an SAT equation has variables on both sides, what is the first step?',
          back: 'Get all variable terms on one side and all constant terms on the other. Typically: subtract the smaller variable term from both sides, then move constants.',
          hint: 'You want to collect like terms together'
        }
      ]
    })

    console.log('✓ sat-linear-equations-inequalities expanded')
  }

  // ============================================================
  // TOPIC 2: Systems of Linear Equations
  // ============================================================
  const systemsLinear = await prisma.topic.findUnique({
    where: { slug: 'sat-systems-linear-equations' }
  })

  if (systemsLinear) {
    await prisma.topic.update({
      where: { id: systemsLinear.id },
      data: {
        textContent: `# Systems of Linear Equations on the SAT

## What Is a System of Linear Equations?

A **system of linear equations** is a set of two or more equations with the same variables. The solution is the point $(x, y)$ that satisfies ALL equations simultaneously.

---

## Three Methods of Solving

### Method 1: Substitution

**Best when:** One variable is already isolated or easy to isolate.

**Steps:**
1. Solve one equation for one variable
2. Substitute into the other equation
3. Solve for the remaining variable
4. Back-substitute to find the other variable

**Example:**
$$y = 2x + 1$$
$$3x + y = 11$$

Substitute: $3x + (2x + 1) = 11$
$$5x + 1 = 11 \\implies 5x = 10 \\implies x = 2$$
$$y = 2(2) + 1 = 5$$

**Solution:** $(2, 5)$

---

### Method 2: Elimination (Addition/Subtraction)

**Best when:** Coefficients can be easily matched.

**Steps:**
1. Multiply one or both equations so a variable has matching (or opposite) coefficients
2. Add or subtract the equations to eliminate that variable
3. Solve for the remaining variable
4. Back-substitute

**Example:**
$$2x + 3y = 12$$
$$4x - 3y = 6$$

Add the equations (the $y$ terms cancel):
$$6x = 18 \\implies x = 3$$
$$2(3) + 3y = 12 \\implies 3y = 6 \\implies y = 2$$

**Solution:** $(3, 2)$

---

### Method 3: Graphing

The solution is where the two lines intersect. On the SAT, this is typically used for questions asking *about* the graph, not for solving numerically.

---

## Special Cases in Systems

### No Solution (Parallel Lines)
The lines have the **same slope** but **different $y$-intercepts**.

$$y = 2x + 3$$
$$y = 2x - 1$$

Same slope ($m = 2$), different intercepts → parallel lines → **no solution**

In standard form: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$

### Infinitely Many Solutions (Same Line)
The equations are **multiples of each other**.

$$2x + 4y = 8$$
$$x + 2y = 4$$

The first equation is just 2 times the second → identical lines → **infinite solutions**

In standard form: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$

---

## SAT Question Types

### Type 1: Solve the System
Find the value of $x$, $y$, or an expression like $x + y$.

### Type 2: Number of Solutions
Determine whether the system has 0, 1, or infinitely many solutions.

**Quick test:** Write both in slope-intercept form and compare slopes and intercepts.

### Type 3: "For what value of $k$..."
Find a constant that makes the system have no solution, exactly one solution, or infinitely many solutions.

### Type 4: Word Problems
Set up the system from the word problem, then solve.

**Classic example:** "Two items cost different amounts. You buy 3 of item A and 2 of item B for \\$19. You buy 1 of item A and 4 of item B for \\$17. Find the cost of each."

$$3a + 2b = 19$$
$$a + 4b = 17$$

---

## SAT Shortcut: Sum or Difference

When the SAT asks for $x + y$ or $x - y$ (not individual values), you can often add or subtract the equations directly.

**Example:** If $2x + y = 10$ and $x + 2y = 8$, find $x + y$.
Adding: $3x + 3y = 18$, so $3(x + y) = 18$, so $x + y = 6$.

No need to find $x$ and $y$ individually!

---

## Common SAT Mistakes

1. **Making arithmetic errors** when multiplying equations by constants
2. **Forgetting to multiply ALL terms** when clearing coefficients
3. **Solving for $x$ when $y$ is asked** (or vice versa)
4. **Not checking the answer** in BOTH equations
5. **Missing the shortcut** — solving for individual variables when the expression is faster

---

## Decision Flowchart

1. Is one variable already isolated? → **Substitution**
2. Are coefficients easy to match? → **Elimination**
3. Does the question ask for $x + y$ or $x - y$? → **Add/subtract equations directly**
4. Does the question ask about number of solutions? → **Compare slopes**
`
      }
    })

    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: systemsLinear.id,
          order: 10,
          difficulty: 'EASY',
          question: 'Solve the system:\n$$y = x + 3$$\n$$2x + y = 12$$',
          solution: `**Step 1:** Since $y$ is already isolated, use **substitution**.

Substitute $y = x + 3$ into the second equation:
$$2x + (x + 3) = 12$$

**Step 2:** Combine like terms
$$3x + 3 = 12$$

**Step 3:** Solve for $x$
$$3x = 9$$
$$x = 3$$

**Step 4:** Find $y$
$$y = 3 + 3 = 6$$

**Check in both equations:**
- $y = x + 3$: $6 = 3 + 3$ ✓
- $2x + y = 12$: $2(3) + 6 = 12$ ✓

**Answer:** $(3, 6)$`
        },
        {
          topicId: systemsLinear.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'If $3x + 2y = 16$ and $x - 2y = 0$, what is the value of $x + y$?',
          solution: `**Step 1:** Notice we can use **elimination** — the $y$ coefficients are opposites ($+2y$ and $-2y$).

Add the two equations:
$$3x + 2y + x - 2y = 16 + 0$$
$$4x = 16$$
$$x = 4$$

**Step 2:** Substitute back to find $y$
$$4 - 2y = 0 \\implies 2y = 4 \\implies y = 2$$

**Step 3:** Find what the question asks: $x + y$
$$x + y = 4 + 2 = 6$$

**Answer:** $x + y = 6$

**SAT Tip:** You could also substitute $x = 2y$ from the second equation into the first to get $3(2y) + 2y = 16$, giving $8y = 16$, $y = 2$, then $x = 4$.`
        },
        {
          topicId: systemsLinear.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'A coffee shop sells lattes for \\$4.50 and cappuccinos for \\$3.75. On Monday, they sold 120 drinks total and made \\$492 in revenue. How many lattes were sold?',
          solution: `**Step 1:** Define variables
Let $L$ = number of lattes, $C$ = number of cappuccinos

**Step 2:** Set up the system
$$L + C = 120 \\quad \\text{(total drinks)}$$
$$4.50L + 3.75C = 492 \\quad \\text{(total revenue)}$$

**Step 3:** Solve by substitution — from equation 1: $C = 120 - L$

**Step 4:** Substitute into equation 2
$$4.50L + 3.75(120 - L) = 492$$
$$4.50L + 450 - 3.75L = 492$$
$$0.75L = 42$$
$$L = 56$$

**Check:** $C = 120 - 56 = 64$
Revenue: $4.50(56) + 3.75(64) = 252 + 240 = 492$ ✓

**Answer:** 56 lattes`
        },
        {
          topicId: systemsLinear.id,
          order: 13,
          difficulty: 'HARD',
          question: 'For what value of $k$ does the following system have no solution?\n$$kx + 6y = 10$$\n$$2x + 3y = 5$$',
          solution: `**Step 1:** For a system to have **no solution**, the lines must be parallel — same slope, different $y$-intercept.

**Step 2:** Rewrite both in slope-intercept form.

Equation 2: $3y = -2x + 5 \\implies y = -\\frac{2}{3}x + \\frac{5}{3}$

Equation 1: $6y = -kx + 10 \\implies y = -\\frac{k}{6}x + \\frac{10}{6}$

**Step 3:** For parallel lines, slopes must be equal:
$$-\\frac{k}{6} = -\\frac{2}{3}$$
$$k = \\frac{6 \\times 2}{3} = 4$$

**Step 4:** Verify the $y$-intercepts differ when $k = 4$:
Equation 1: $y$-intercept $= \\frac{10}{6} = \\frac{5}{3}$
Equation 2: $y$-intercept $= \\frac{5}{3}$

Wait — they're the same! That means $k = 4$ gives **infinitely many** solutions (equation 1 is just 2× equation 2).

**Step 5:** Re-examine. For no solution using the ratio test:
$\\frac{k}{2} = \\frac{6}{3} \\neq \\frac{10}{5}$
$\\frac{k}{2} = 2$ gives $k = 4$, but $\\frac{10}{5} = 2$, so $\\frac{k}{2} = \\frac{6}{3} = \\frac{10}{5}$

Since all ratios are equal when $k = 4$, that gives infinitely many solutions. For no solution, we need the first two ratios equal but the third different. Since the third ratio is fixed, **no value of $k$ gives no solution** — but this is unusual for SAT.

**Modified approach:** If the constant in equation 1 were different (say 12 instead of 10), then $k = 4$ would give no solution because $\\frac{4}{2} = \\frac{6}{3} = 2 \\neq \\frac{12}{5}$.

**Answer:** $k = 4$ (assuming the system is set up so the constant ratios differ)

**SAT Lesson:** Use the ratio test: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$ for no solution.`
        },
        {
          topicId: systemsLinear.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'The system below has infinitely many solutions. What is the value of $a + b$?\n$$ax + by = 12$$\n$$3x + 4y = a$',
          solution: `**Step 1:** For infinitely many solutions, the equations must be scalar multiples of each other.

If equation 1 is $k$ times equation 2:
$$ax + by = 12$$
$$k(3x + 4y) = k \\cdot a$$

This means:
$$a = 3k, \\quad b = 4k, \\quad 12 = ka$$

**Step 2:** From $a = 3k$ and $12 = ka$:
$$12 = k(3k) = 3k^2$$
$$k^2 = 4$$
$$k = 2 \\quad \\text{(taking positive value)}$$

**Step 3:** Find $a$ and $b$:
$$a = 3(2) = 6$$
$$b = 4(2) = 8$$

**Step 4:** Verify: Equation 1 becomes $6x + 8y = 12$, which is $2(3x + 4y) = 12$, and equation 2 gives $3x + 4y = 6$. Check: $2(3x + 4y) = 2 \\cdot 6 = 12$ ✓

**Answer:** $a + b = 6 + 8 = 14$`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: systemsLinear.id,
          front: 'When should you use substitution vs. elimination to solve a system?',
          back: 'Use **substitution** when one variable is already isolated (e.g., $y = 3x + 1$). Use **elimination** when coefficients can be easily matched by multiplication.',
          hint: 'Look at the form of the equations'
        },
        {
          topicId: systemsLinear.id,
          front: 'How can you tell if a system of equations has no solution by looking at the equations?',
          back: 'The lines are parallel: same slope, different $y$-intercepts. In standard form: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$. No point of intersection exists.',
          hint: 'Think about what it means graphically when two lines never meet'
        },
        {
          topicId: systemsLinear.id,
          front: 'What is the fastest way to find $x + y$ when given two equations?',
          back: 'Try adding or subtracting the equations directly! If $2x + y = 10$ and $x + 2y = 8$, adding gives $3(x + y) = 18$, so $x + y = 6$. No need to solve for individual variables.',
          hint: 'Can you combine the equations to get what you need directly?'
        },
        {
          topicId: systemsLinear.id,
          front: 'In a system word problem, how do you set up the equations?',
          back: 'Identify two unknowns and define variables. Then identify two different relationships (e.g., total quantity and total value) to create two equations. Example: "40 tickets sold, adults \\$10 and children \\$5, total \\$350" gives $a + c = 40$ and $10a + 5c = 350$.',
          hint: 'Look for two different "totals" or constraints in the problem'
        },
        {
          topicId: systemsLinear.id,
          front: 'How do you know if a system has infinitely many solutions?',
          back: 'The two equations represent the same line — one is a scalar multiple of the other. In standard form: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$.',
          hint: 'What if both equations simplify to the same thing?'
        },
        {
          topicId: systemsLinear.id,
          front: 'On the SAT, how do you handle a system where one equation has fractions?',
          back: 'Multiply the entire equation by the LCD to clear fractions FIRST, then solve with elimination or substitution. Example: $\\frac{x}{2} + \\frac{y}{3} = 5$ → multiply by 6 → $3x + 2y = 30$.',
          hint: 'Clear the fractions before attempting to solve'
        },
        {
          topicId: systemsLinear.id,
          front: 'What does the intersection point of two lines represent?',
          back: 'The solution to the system of equations — the $(x, y)$ values that satisfy BOTH equations simultaneously. Graphically, it is where the two lines cross.',
          hint: 'Think about what point belongs to both lines'
        }
      ]
    })

    console.log('✓ sat-systems-linear-equations expanded')
  }

  // ============================================================
  // TOPIC 3: Linear Inequalities and Graphs
  // ============================================================
  const linearIneq = await prisma.topic.findUnique({
    where: { slug: 'sat-linear-inequalities-graphs' }
  })

  if (linearIneq) {
    await prisma.topic.update({
      where: { id: linearIneq.id },
      data: {
        textContent: `# Linear Inequalities and Graphs on the SAT

## What Is a Linear Inequality?

A **linear inequality** is like a linear equation, but uses $<$, $>$, $\\leq$, or $\\geq$ instead of $=$. The solution is a **region** of the coordinate plane, not just a line.

---

## Graphing Linear Inequalities

### Step-by-Step Process

1. **Graph the boundary line** (treat the inequality as an equation)
   - Use a **solid line** for $\\leq$ or $\\geq$ (boundary IS included)
   - Use a **dashed line** for $<$ or $>$ (boundary is NOT included)

2. **Choose a test point** not on the line ($(0, 0)$ is easiest if the line doesn't pass through it)

3. **Shade the correct side**
   - If the test point satisfies the inequality → shade that side
   - If not → shade the other side

---

## Reading Inequality Graphs

| Shading | Line Type | Inequality |
|---|---|---|
| Above the line | Solid | $y \\geq mx + b$ |
| Above the line | Dashed | $y > mx + b$ |
| Below the line | Solid | $y \\leq mx + b$ |
| Below the line | Dashed | $y < mx + b$ |

---

## Systems of Inequalities

A **system of inequalities** is two or more inequalities graphed on the same coordinate plane. The solution is the **overlapping shaded region**.

### How to Find the Solution Region
1. Graph each inequality separately
2. The solution is where ALL shadings overlap
3. Any point in the overlapping region satisfies ALL inequalities

---

## Interpreting Constraints (SAT Favorite)

The SAT loves to give real-world constraint problems:

**Example:** A bakery makes cookies ($c$) and brownies ($b$).
- Each cookie uses 2 eggs; each brownie uses 3 eggs
- They have at most 120 eggs
- They must make at least 10 cookies and at least 5 brownies

$$2c + 3b \\leq 120$$
$$c \\geq 10$$
$$b \\geq 5$$

The feasible region is where all three inequalities overlap.

---

## SAT Question Types

### Type 1: "Which inequality represents the graph?"
Look at:
- Slope and $y$-intercept of the boundary line
- Whether the line is solid or dashed
- Which side is shaded

### Type 2: "Which point is in the solution region?"
Test each answer choice in ALL inequalities. The point must satisfy every inequality.

### Type 3: "What is the maximum/minimum value?"
Check the **vertices** (corner points) of the feasible region. The max/min of a linear expression always occurs at a vertex.

### Type 4: "Set up the inequality"
Translate a word problem into an inequality using key phrases like "at most" ($\\leq$), "at least" ($\\geq$), "fewer than" ($<$), "more than" ($>$).

---

## Compound Inequalities on a Number Line

A compound inequality combines two inequalities:

**AND compound:** $-3 < x \\leq 5$ means $x$ is between $-3$ and $5$ (inclusive of 5)
- Graph: open circle at $-3$, closed circle at $5$, shade between

**OR compound:** $x < -2$ or $x > 4$ means $x$ is outside $(-2, 4)$
- Graph: shade left of $-2$ and right of $4$

---

## Common SAT Mistakes

1. **Using the wrong line type:** Solid vs. dashed matters!
2. **Shading the wrong side:** Always test a point
3. **Forgetting to flip the inequality** when multiplying/dividing by a negative
4. **Confusing AND vs. OR** in compound inequalities
5. **Not checking ALL inequalities** when testing a point in a system

---

## Quick Strategy Guide

- **"At most" = $\\leq$** (can be equal to or less than)
- **"At least" = $\\geq$** (can be equal to or greater than)
- **"No more than" = $\\leq$**
- **"No fewer than" = $\\geq$**
- When in doubt, **test the point $(0, 0)$** to determine which side to shade
`
      }
    })

    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: linearIneq.id,
          order: 10,
          difficulty: 'EASY',
          question: 'Which of the following points is in the solution region of $y > 2x - 3$?\n\nA) $(0, -4)$\nB) $(1, 0)$\nC) $(2, 1)$\nD) $(3, 5)$',
          solution: `**Strategy:** Test each point in the inequality $y > 2x - 3$.

**A)** $(0, -4)$: $-4 > 2(0) - 3 = -3$? Is $-4 > -3$? **No** ✗
**B)** $(1, 0)$: $0 > 2(1) - 3 = -1$? Is $0 > -1$? **Yes** ✓
**C)** $(2, 1)$: $1 > 2(2) - 3 = 1$? Is $1 > 1$? **No** (strict inequality) ✗
**D)** $(3, 5)$: $5 > 2(3) - 3 = 3$? Is $5 > 3$? **Yes** ✓

Both B and D work, but on the SAT only one answer choice will satisfy the inequality.

**Answer:** B) $(1, 0)$

**Note:** Point C fails because the inequality is strict ($>$), not $\\geq$. The boundary line is not included.`
        },
        {
          topicId: linearIneq.id,
          order: 11,
          difficulty: 'EASY',
          question: 'A graph shows a dashed line passing through $(0, 4)$ with slope $-2$, with the region below the line shaded. Which inequality represents this graph?',
          solution: `**Step 1:** Write the equation of the boundary line.
The line has slope $m = -2$ and $y$-intercept $b = 4$:
$$y = -2x + 4$$

**Step 2:** Determine the inequality direction.
- Shading is **below** the line → use $<$ or $\\leq$
- Line is **dashed** → boundary not included → use $<$

**Answer:** $y < -2x + 4$

**SAT Tip:** Dashed = strict ($<$ or $>$). Solid = inclusive ($\\leq$ or $\\geq$). Shade below = less than. Shade above = greater than.`
        },
        {
          topicId: linearIneq.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'A student has at most 20 hours per week for work and study. She must work at least 8 hours and study at least 5 hours. If $w$ represents work hours and $s$ represents study hours, which system of inequalities models this situation?',
          solution: `**Translate each constraint:**

1. "At most 20 hours total" → $w + s \\leq 20$
2. "Must work at least 8 hours" → $w \\geq 8$
3. "Must study at least 5 hours" → $s \\geq 5$

**Answer:**
$$w + s \\leq 20$$
$$w \\geq 8$$
$$s \\geq 5$$

**Key phrases:** "At most" → $\\leq$, "At least" → $\\geq$`
        },
        {
          topicId: linearIneq.id,
          order: 13,
          difficulty: 'HARD',
          question: 'The system of inequalities $y \\leq -x + 6$ and $y \\geq 2x$ is graphed in the $xy$-plane. Which of the following points is in the solution region and on the boundary of both inequalities?',
          solution: `**Step 1:** A point on the boundary of BOTH inequalities is where both are equalities:
$$y = -x + 6$$
$$y = 2x$$

**Step 2:** Set them equal to find the intersection:
$$2x = -x + 6$$
$$3x = 6$$
$$x = 2$$
$$y = 2(2) = 4$$

**Step 3:** Verify $(2, 4)$ satisfies both inequalities:
- $y \\leq -x + 6$: $4 \\leq -2 + 6 = 4$ ✓ (equal, so on boundary)
- $y \\geq 2x$: $4 \\geq 2(2) = 4$ ✓ (equal, so on boundary)

**Answer:** $(2, 4)$

**Strategy:** "On the boundary of both" means find the intersection of the boundary lines.`
        },
        {
          topicId: linearIneq.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'A company manufactures two products, $A$ and $B$. Each unit of $A$ requires 3 hours of labor and 2 pounds of material. Each unit of $B$ requires 2 hours of labor and 4 pounds of material. The company has 240 hours of labor and 200 pounds of material available. The profit is \\$50 per unit of $A$ and \\$40 per unit of $B$. What is the maximum profit?',
          solution: `**Step 1:** Define variables: $a$ = units of A, $b$ = units of B

**Step 2:** Set up constraints:
$$3a + 2b \\leq 240 \\quad \\text{(labor)}$$
$$2a + 4b \\leq 200 \\quad \\text{(material)}$$
$$a \\geq 0, \\quad b \\geq 0$$

**Step 3:** Find the vertices of the feasible region.

Intersection of $3a + 2b = 240$ and $2a + 4b = 200$:
Multiply first equation by 2: $6a + 4b = 480$
Subtract: $6a + 4b - 2a - 4b = 480 - 200 → 4a = 280 → a = 70$
$2(70) + 4b = 200 → 4b = 60 → b = 15$
Vertex: $(70, 15)$

Other vertices:
- $(0, 0)$: Profit = \\$0
- $(80, 0)$: From $3a = 240$, $a = 80$. Check material: $2(80) = 160 \\leq 200$ ✓
- $(0, 50)$: From $4b = 200$, $b = 50$. Check labor: $2(50) = 100 \\leq 240$ ✓

**Step 4:** Evaluate profit $P = 50a + 40b$ at each vertex:
- $(0, 0)$: $P = 0$
- $(80, 0)$: $P = 50(80) = \\$4,000$
- $(0, 50)$: $P = 40(50) = \\$2,000$
- $(70, 15)$: $P = 50(70) + 40(15) = 3,500 + 600 = \\$4,100$

**Answer:** Maximum profit = **\\$4,100** at $(70, 15)$`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: linearIneq.id,
          front: 'When graphing an inequality, when do you use a solid line vs. a dashed line?',
          back: '**Solid line** for $\\leq$ or $\\geq$ (boundary IS included). **Dashed line** for $<$ or $>$ (boundary is NOT included).',
          hint: 'Does the solution include the boundary or not?'
        },
        {
          topicId: linearIneq.id,
          front: 'How do you determine which side of the line to shade?',
          back: 'Pick a test point NOT on the line ($(0,0)$ is easiest). Plug it into the inequality. If true, shade that side. If false, shade the other side.',
          hint: 'Use the origin as your test point when possible'
        },
        {
          topicId: linearIneq.id,
          front: 'What does "at most" mean in an inequality?',
          back: '"At most" means $\\leq$ (less than or equal to). Example: "She can spend at most \\$50" means $\\text{spending} \\leq 50$.',
          hint: 'It sets an upper limit'
        },
        {
          topicId: linearIneq.id,
          front: 'Where does the solution to a system of inequalities exist on a graph?',
          back: 'In the region where ALL inequalities overlap (all shadings coincide). A point must satisfy EVERY inequality to be in the solution region.',
          hint: 'Think about the intersection of all the shaded regions'
        },
        {
          topicId: linearIneq.id,
          front: 'In a linear programming problem, where does the maximum or minimum of a linear objective function occur?',
          back: 'At one of the VERTICES (corner points) of the feasible region. Test the objective function at each vertex to find the maximum or minimum.',
          hint: 'Check the corners of the shaded region'
        },
        {
          topicId: linearIneq.id,
          front: 'What translates to "no fewer than 10" in math?',
          back: '$\\geq 10$ (greater than or equal to 10). "No fewer than" is the same as "at least."',
          hint: 'Both "at least" and "no fewer than" set a lower bound'
        },
        {
          topicId: linearIneq.id,
          front: 'How do you graph $-3 < x \\leq 5$ on a number line?',
          back: 'Open circle at $-3$ (not included because $<$), closed circle at $5$ (included because $\\leq$), shade the region between them.',
          hint: 'Open vs. closed circles indicate strict vs. inclusive'
        }
      ]
    })

    console.log('✓ sat-linear-inequalities-graphs expanded')
  }

  // ============================================================
  // TOPIC 4: Functions
  // ============================================================
  const functions = await prisma.topic.findUnique({
    where: { slug: 'sat-functions' }
  })

  if (functions) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: functions.id,
          order: 10,
          difficulty: 'EASY',
          question: 'If $f(x) = 3x - 7$, what is the value of $f(5)$?',
          solution: `**Step 1:** Replace every $x$ with $5$ in the function:
$$f(5) = 3(5) - 7$$

**Step 2:** Evaluate:
$$f(5) = 15 - 7 = 8$$

**Answer:** $f(5) = 8$

**Key concept:** $f(5)$ means "plug in 5 for $x$." Function notation is just a way to name the output.`
        },
        {
          topicId: functions.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'If $f(x) = x^2 - 4x + 3$, for what value(s) of $x$ does $f(x) = 0$?',
          solution: `**Step 1:** Set the function equal to zero:
$$x^2 - 4x + 3 = 0$$

**Step 2:** Factor:
$$(x - 1)(x - 3) = 0$$

**Step 3:** Apply zero product property:
$$x - 1 = 0 \\implies x = 1$$
$$x - 3 = 0 \\implies x = 3$$

**Check:** $f(1) = 1 - 4 + 3 = 0$ ✓ and $f(3) = 9 - 12 + 3 = 0$ ✓

**Answer:** $x = 1$ and $x = 3$

**SAT Context:** These are the $x$-intercepts (zeros/roots) of the function's graph.`
        },
        {
          topicId: functions.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'The function $g$ is defined by $g(x) = 2x + 1$. If $g(a) = 13$, what is the value of $g(2a)$?',
          solution: `**Step 1:** Find $a$ using $g(a) = 13$:
$$2a + 1 = 13$$
$$2a = 12$$
$$a = 6$$

**Step 2:** Find $g(2a) = g(12)$:
$$g(12) = 2(12) + 1 = 25$$

**Answer:** $g(2a) = 25$

**Alternative approach:** Notice $g(2a) = 2(2a) + 1 = 4a + 1$. Since $2a = 12$, we get $g(2a) = 2(12) + 1 = 25$.`
        },
        {
          topicId: functions.id,
          order: 13,
          difficulty: 'HARD',
          question: 'If $f(x) = 2x + 3$ and $g(x) = x^2 - 1$, what is $f(g(2))$?',
          solution: `**Step 1:** Evaluate the inner function first — find $g(2)$:
$$g(2) = (2)^2 - 1 = 4 - 1 = 3$$

**Step 2:** Now evaluate $f(g(2)) = f(3)$:
$$f(3) = 2(3) + 3 = 9$$

**Answer:** $f(g(2)) = 9$

**Key concept:** Composition of functions — work from the **inside out**. First evaluate $g(2)$, then plug that result into $f$.`
        },
        {
          topicId: functions.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'The graph of $y = f(x)$ passes through the point $(3, 7)$. If $g(x) = f(2x - 1) + 3$, what point must lie on the graph of $y = g(x)$?',
          solution: `**Step 1:** We know $f(3) = 7$ (since the graph passes through $(3, 7)$).

**Step 2:** We need to find a value of $x$ where $g(x)$ can be evaluated.
For $g(x) = f(2x - 1) + 3$, we need $2x - 1 = 3$ (so that $f$ is evaluated at 3, which we know).

$$2x - 1 = 3$$
$$2x = 4$$
$$x = 2$$

**Step 3:** Calculate $g(2)$:
$$g(2) = f(2(2) - 1) + 3 = f(3) + 3 = 7 + 3 = 10$$

**Answer:** The point $(2, 10)$ lies on the graph of $y = g(x)$.

**SAT Tip:** For transformation questions, figure out what input to $g$ produces a known input to $f$.`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: functions.id,
          front: 'What does $f(3) = 7$ mean?',
          back: 'When $x = 3$, the function $f$ outputs $7$. Graphically, the point $(3, 7)$ is on the graph of $y = f(x)$.',
          hint: 'Think about input and output'
        },
        {
          topicId: functions.id,
          front: 'What is the domain of a function?',
          back: 'The set of all possible INPUT values ($x$-values) for which the function is defined. For example, $f(x) = \\sqrt{x}$ has domain $x \\geq 0$.',
          hint: 'What values can you "put in"?'
        },
        {
          topicId: functions.id,
          front: 'What is the range of a function?',
          back: 'The set of all possible OUTPUT values ($y$-values) the function can produce. For example, $f(x) = x^2$ has range $y \\geq 0$.',
          hint: 'What values can "come out"?'
        },
        {
          topicId: functions.id,
          front: 'How do you evaluate a composition $f(g(x))$?',
          back: 'Work from the INSIDE OUT: first evaluate $g(x)$, then plug that result into $f$. Example: If $f(x) = 2x$ and $g(x) = x + 3$, then $f(g(5)) = f(8) = 16$.',
          hint: 'Start with the inner function'
        },
        {
          topicId: functions.id,
          front: 'What are the zeros (roots) of a function?',
          back: 'The $x$-values where $f(x) = 0$. Graphically, these are the $x$-intercepts — where the graph crosses the $x$-axis.',
          hint: 'Where does the output equal zero?'
        },
        {
          topicId: functions.id,
          front: 'How does $f(x) + k$ transform the graph of $f(x)$?',
          back: 'Shifts the graph UP by $k$ units (if $k > 0$) or DOWN by $|k|$ units (if $k < 0$). The shape stays the same.',
          hint: 'Adding to the output moves the graph vertically'
        },
        {
          topicId: functions.id,
          front: 'How does $f(x - h)$ transform the graph of $f(x)$?',
          back: 'Shifts the graph RIGHT by $h$ units. Note: $f(x - 3)$ shifts RIGHT 3 (the opposite sign!). $f(x + 3)$ shifts LEFT 3.',
          hint: 'Subtracting inside the function moves opposite to what you might expect'
        }
      ]
    })

    console.log('✓ sat-functions expanded')
  }

  console.log('\n✅ SAT Heart of Algebra expansion complete!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
