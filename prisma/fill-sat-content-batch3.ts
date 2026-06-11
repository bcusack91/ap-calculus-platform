import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('📝 Filling in final SAT topics and duplicates...\n');

  // subject-verb-agreement (duplicate - different from sat-subject-verb-agreement)
  await prisma.topic.update({
    where: { slug: 'subject-verb-agreement' },
    data: {
      textContent: `# Subject-Verb Agreement (SAT Writing)

## The Basic Rule

**Subjects and verbs must agree in NUMBER:**
- Singular subject → singular verb
- Plural subject → plural verb

**Simple examples:**

✓ The dog **runs** fast. (singular)  
✓ The dogs **run** fast. (plural)

❌ The dog **run** fast.  
❌ The dogs **runs** fast.

## Finding the Subject

### Ignore Prepositional Phrases

**Rule:** The subject is NEVER in a prepositional phrase

**Common prepositions:** of, in, on, at, by, with, from, to, for, about

❌ The box of chocolates **are** on the table.  
✓ The box of chocolates **is** on the table.
- Subject: "box" (singular), NOT "chocolates"

❌ The students in the classroom **was** quiet.  
✓ The students in the classroom **were** quiet.
- Subject: "students" (plural), NOT "classroom"

**Strategy:** Cross out prepositional phrases to find the real subject

### Subjects After the Verb

**In questions and inverted sentences, subject comes AFTER verb:**

❌ Where **is** the books?  
✓ Where **are** the books?
- Subject: "books" (plural)

❌ There **is** many reasons.  
✓ There **are** many reasons.
- Subject: "reasons" (plural)

**Tip:** Flip the sentence: "The books are where?" → easier to see agreement

## Tricky Subjects

### Indefinite Pronouns

**ALWAYS SINGULAR:**
- Each, every, either, neither
- Everyone, someone, anyone, no one, nobody
- Everybody, somebody, anybody
- Everything, something, anything, nothing

✓ Everyone **is** welcome.  
✓ Each of the students **has** a textbook.  
✓ Neither of the answers **is** correct.

❌ Everyone **are** welcome.  
❌ Each of the students **have** a textbook.

**ALWAYS PLURAL:**
- Both, few, many, several

✓ Both **are** correct.  
✓ Few **have** arrived.  
✓ Many **were** invited.

**DEPENDS ON CONTEXT:**
- All, some, most, none

✓ All of the pizza **is** gone. (pizza = singular)  
✓ All of the students **are** here. (students = plural)

✓ Some of the work **is** done. (work = singular)  
✓ Some of the books **are** missing. (books = plural)

### Compound Subjects

**Joined by "AND" → PLURAL:**

✓ Sarah and Emily **are** friends.  
✓ The book and the pen **are** on the desk.

**Joined by "OR" or "NOR" → Match the CLOSEST subject:**

✓ Neither the teacher nor the students **were** ready.
- "students" (plural) is closest to verb

✓ Neither the students nor the teacher **was** ready.
- "teacher" (singular) is closest to verb

✓ Either the manager or the employees **have** the key.
- "employees" (plural) is closest

### Collective Nouns

**Treat as SINGULAR when acting as ONE unit:**

✓ The team **is** winning.  
✓ The committee **has** decided.  
✓ The family **is** moving to Texas.

**Common collective nouns:** team, group, committee, family, class, audience, jury, crowd

### Titles and Names

**ALWAYS SINGULAR, even if they sound plural:**

✓ *The Lord of the Rings* **is** a famous book.  
✓ Twenty dollars **is** too much.  
✓ Five miles **is** a long distance to walk.  
✓ United States **is** a large country.

## Confusing Situations

### Relative Clauses (who, which, that)

**The verb agrees with the ANTECEDENT:**

✓ She is one of the students who **are** studying abroad.
- "who" refers to "students" (plural)

✓ He is the only one of the candidates who **has** experience.
- "who" refers to "one" (singular)

**Tip:** Find what "who/which/that" refers to

### Phrases that Interrupt

**Ignore these when finding agreement:**
- along with
- as well as
- together with
- in addition to

✓ The teacher, along with the students, **is** attending.
- Subject: "teacher" (singular)
- "along with the students" is NOT part of subject

✓ The painting, as well as the sculptures, **was** sold.
- Subject: "painting" (singular)

## SAT Tricks to Watch For

### Trick 1: Long Separation

**SAT puts lots of words between subject and verb:**

❌ The discovery of new planets by the telescope **were** exciting.  
✓ The discovery of new planets by the telescope **was** exciting.
- Subject: "discovery" (singular)

**Strategy:** Find subject, cross out everything else, check agreement

### Trick 2: Plural-Sounding Singular Subjects

❌ Mathematics **are** my favorite subject.  
✓ Mathematics **is** my favorite subject.

❌ The news **are** on at 6 PM.  
✓ The news **is** on at 6 PM.

**Other examples:** physics, economics, measles, mumps

### Trick 3: "One of the" + Plural Noun

❌ One of the books **are** missing.  
✓ One of the books **is** missing.
- Subject: "One" (singular), NOT "books"

### Trick 4: Inverted Word Order

❌ Among the reasons for the delay **was** poor planning.  
✓ Among the reasons for the delay **were** poor planning and bad weather.
- Subject comes AFTER verb

**Flip it:** "Poor planning and bad weather were among the reasons"

## Common SAT Patterns

### Pattern 1: Indefinite Pronoun + Prepositional Phrase

❌ Each of the employees **have** received a bonus.  
✓ Each of the employees **has** received a bonus.

**Remember:** "each" is always singular, ignore "of the employees"

### Pattern 2: There is/There are

❌ There **is** several options available.  
✓ There **are** several options available.

**Strategy:** Find the real subject after the verb

### Pattern 3: Here is/Here are

❌ Here **is** the documents you requested.  
✓ Here **are** the documents you requested.

### Pattern 4: Subject after Verb in Questions

❌ Where **is** your keys?  
✓ Where **are** your keys?

**Flip to statement:** "Your keys are where?"

## Quick Decision Process

**When you see an underlined verb:**

1. **Find the subject** (who/what is doing the action?)
2. **Cross out prepositional phrases** and interrupting clauses
3. **Determine if subject is singular or plural**
4. **Match verb to subject** (singular subject = singular verb)
5. **Double-check** by reading with your answer

## Common Wrong Answer Traps

❌ **Matching verb to nearest noun** (instead of actual subject)
- "The bouquet of roses ARE" → wrong! Subject is "bouquet" (singular)

❌ **Treating "each/every" as plural** (they're always singular)
- "Each student HAVE" → wrong! "Each" is singular

❌ **Making verb agree with compound object** instead of compound subject
- "John or his friends IS" → wrong! Closest subject "friends" is plural

❌ **Forgetting that titles/amounts are singular**
- "Five dollars ARE" → wrong! Amounts are singular

## Practice Strategy

**For every subject-verb question:**

1. Circle the subject
2. Draw a line through distractors (prepositional phrases, etc.)
3. Determine if subject is singular (S) or plural (P)
4. Choose verb that matches

**Example:**

The collection of ancient artifacts <u>was/were</u> donated to the museum.

1. Subject: "collection" (S)
2. Cross out: "of ancient artifacts"
3. Singular subject needs singular verb
4. Answer: **was** ✓

## Summary Checklist

When checking subject-verb agreement:

☐ Located the true subject (not in prepositional phrase)  
☐ Crossed out intervening words/phrases  
☐ Determined if subject is singular or plural  
☐ Checked for tricky indefinite pronouns (each, everyone, etc.)  
☐ Verified compound subjects (and = plural, or/nor = match closest)  
☐ Remembered collective nouns are usually singular  
☐ Checked for inverted sentences (verb before subject)

**Remember:** The SAT will try to trick you by separating the subject and verb. Always identify the subject first, ignore distractors, and make sure they agree in number!
`
    }
  });

  // Now check what other short topics we need to fill
  console.log('✅ Filled duplicate subject-verb-agreement topic\n');
  console.log('Checking for remaining short SAT topics...\n');

  // Let's enhance Quadratics (only 806 chars)
  await prisma.topic.update({
    where: { slug: 'sat-quadratic-equations' },
    data: {
      textContent: `# Quadratic Equations (SAT Math)

## What is a Quadratic Equation?

A **quadratic equation** has the form:

$$ax^2 + bx + c = 0$$

where $a \\neq 0$ (if $a = 0$, it's just linear!)

**Examples:**
- $x^2 - 5x + 6 = 0$
- $2x^2 + 3x - 2 = 0$
- $x^2 = 16$ (equivalent to $x^2 - 16 = 0$)

## Solving Methods

### Method 1: Factoring

**Best when:** Quadratic factors nicely

**Steps:**
1. Set equation equal to zero
2. Factor the quadratic
3. Set each factor equal to zero
4. Solve for $x$

**Example:** Solve $x^2 - 5x + 6 = 0$

**Step 1:** Already set to zero ✓

**Step 2:** Factor  
Need two numbers that multiply to 6 and add to -5: **-2 and -3**

$$x^2 - 5x + 6 = (x - 2)(x - 3) = 0$$

**Step 3 & 4:** Set each factor to zero  
$x - 2 = 0$ → $x = 2$  
$x - 3 = 0$ → $x = 3$

**Solutions:** $x = 2$ or $x = 3$

### Method 2: Quadratic Formula

**Best when:** Doesn't factor nicely

**Formula:**
$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

**Memorize this!** It works for ANY quadratic.

**Example:** Solve $2x^2 + 3x - 2 = 0$

**Identify:** $a = 2$, $b = 3$, $c = -2$

**Substitute:**
$$x = \\frac{-3 \\pm \\sqrt{3^2 - 4(2)(-2)}}{2(2)}$$

$$x = \\frac{-3 \\pm \\sqrt{9 + 16}}{4}$$

$$x = \\frac{-3 \\pm \\sqrt{25}}{4}$$

$$x = \\frac{-3 \\pm 5}{4}$$

**Two solutions:**
$$x = \\frac{-3 + 5}{4} = \\frac{2}{4} = \\frac{1}{2}$$

$$x = \\frac{-3 - 5}{4} = \\frac{-8}{4} = -2$$

**Solutions:** $x = \\frac{1}{2}$ or $x = -2$

### Method 3: Completing the Square

**Best when:** Equation is in form $x^2 + bx = c$

**Steps:**
1. Move constant to right side
2. Add $(\\frac{b}{2})^2$ to both sides
3. Factor left side as perfect square
4. Take square root of both sides
5. Solve for $x$

**Example:** Solve $x^2 + 6x = 7$

**Step 1:** Already done ✓

**Step 2:** $(\\frac{6}{2})^2 = 3^2 = 9$

$$x^2 + 6x + 9 = 7 + 9$$
$$x^2 + 6x + 9 = 16$$

**Step 3:** Factor left side  
$$( x + 3)^2 = 16$$

**Step 4:** Take square root  
$$x + 3 = \\pm 4$$

**Step 5:** Solve  
$x + 3 = 4$ → $x = 1$  
$x + 3 = -4$ → $x = -7$

**Solutions:** $x = 1$ or $x = -7$

### Method 4: Simple Square Roots

**Best when:** No $x$ term (just $ax^2 = c$)

**Example:** Solve $x^2 = 16$

$$x = \\pm\\sqrt{16} = \\pm 4$$

**Solutions:** $x = 4$ or $x = -4$

**DON'T FORGET THE ±!** Both positive and negative square roots.

## The Discriminant

**The discriminant** tells you about the solutions WITHOUT solving:

$$\\text{Discriminant} = b^2 - 4ac$$

**If discriminant is:**
- **Positive:** 2 real solutions (different numbers)
- **Zero:** 1 real solution (repeated/double root)
- **Negative:** No real solutions (complex numbers)

**Example:** How many real solutions does $x^2 - 4x + 4 = 0$ have?

$$b^2 - 4ac = (-4)^2 - 4(1)(4) = 16 - 16 = 0$$

**Answer:** ONE solution (it's a perfect square: $(x-2)^2 = 0$ → $x = 2$)

## Parabolas and Graphs

### Standard Form: $y = ax^2 + bx + c$

**Key features:**

**Vertex (turning point):**
- x-coordinate: $x = -\\frac{b}{2a}$
- Plug this back in to find y-coordinate

**Direction:**
- If $a > 0$: Opens UP (∪ shape)
- If $a < 0$: Opens DOWN (∩ shape)

**y-intercept:** 
- Set $x = 0$: $y = c$

**x-intercepts (zeros/roots):**
- Set $y = 0$ and solve quadratic

### Vertex Form: $y = a(x - h)^2 + k$

**Vertex:** $(h, k)$ — you can read it directly!

**Example:** $y = 2(x - 3)^2 + 1$
- Vertex: $(3, 1)$
- Opens up ($a = 2 > 0$)
- Narrower than $y = x^2$ ($|a| = 2 > 1$)

## SAT Question Types

### Type 1: Solve the Quadratic

**Strategy:** 
- Try factoring first (fastest)
- Use quadratic formula if doesn't factor
- Check answer choices (can plug them in!)

### Type 2: Number of Solutions

**Strategy:**
- Calculate discriminant $b^2 - 4ac$
- Positive = 2, Zero = 1, Negative = 0

### Type 3: Find the Vertex

**Strategy:**
- If in vertex form $a(x-h)^2 + k$: vertex is $(h, k)$
- If in standard form: $x = -\\frac{b}{2a}$, then find $y$

### Type 4: Graph Interpretation

**Strategy:**
- Check where graph crosses x-axis (solutions)
- Find highest/lowest point (vertex)
- Determine direction (up or down)

### Type 5: Word Problems

**Common scenarios:**
- Projectile motion: $h(t) = -16t^2 + v_0 t + h_0$
- Area problems: $A = x(20 - x)$

**Strategy:**
- Set up equation from problem
- Solve using appropriate method
- Check answer makes sense in context

## Factoring Review

### Common Patterns

**Difference of Squares:**
$$x^2 - a^2 = (x + a)(x - a)$$

**Example:** $x^2 - 25 = (x + 5)(x - 5)$

**Perfect Square Trinomials:**
$$x^2 + 2ax + a^2 = (x + a)^2$$
$$x^2 - 2ax + a^2 = (x - a)^2$$

**Example:** $x^2 + 10x + 25 = (x + 5)^2$

**Standard Factoring:**
$$x^2 + bx + c = (x + m)(x + n)$$

where $m \\cdot n = c$ and $m + n = b$

**Example:** $x^2 + 7x + 12$
- Need: product = 12, sum = 7
- Numbers: 3 and 4
- Answer: $(x + 3)(x + 4)$

## Common SAT Mistakes

❌ **Forgetting ± in square root method**  
$x^2 = 9$ → $x = \\pm 3$, NOT just $x = 3$

❌ **Arithmetic errors in quadratic formula**  
Be careful with negatives and parentheses!

❌ **Not setting equation to zero before factoring**  
Must have 0 on one side

❌ **Confusing vertex form $(x-h)^2$ with $(x+h)^2$**  
$y = (x - 3)^2$ has vertex at $x = 3$, not $x = -3$

❌ **Forgetting to find BOTH coordinates of vertex**  
Need both $x$ and $y$ values

## Quick Tips

✓ **Try factoring first** — it's fastest when it works  
✓ **Quadratic formula always works** — reliable backup  
✓ **Check by plugging answer back in** — catches mistakes  
✓ **Graph on calculator** if allowed — visual confirmation  
✓ **Remember ±** when taking square roots  
✓ **Discriminant saves time** for "how many solutions" questions

## Practice Approach

1. **Identify** what the question asks (solve, vertex, number of solutions, etc.)
2. **Choose method** based on what's given and what's asked
3. **Execute carefully** (factoring, formula, or graph)
4. **Check** answer makes sense (plug back in, check with graph)
5. **Verify units/context** for word problems

**Remember:** Quadratics always have at most 2 solutions, and the SAT loves testing whether you remember the ± sign!
`
    }
  });

  console.log('✅ Enhanced Quadratic Equations topic\n');

  // Enhance Exponents and Radicals (672 chars)
  await prisma.topic.update({
    where: { slug: 'sat-exponents-radicals' },
    data: {
      textContent: `# Exponents and Radicals (SAT Math)

## Exponent Rules

### Rule 1: Product Rule

**When multiplying same base, ADD exponents:**

$$x^a \\cdot x^b = x^{a+b}$$

**Examples:**
- $x^3 \\cdot x^5 = x^{3+5} = x^8$
- $2^4 \\cdot 2^3 = 2^{4+3} = 2^7 = 128$

### Rule 2: Quotient Rule

**When dividing same base, SUBTRACT exponents:**

$$\\frac{x^a}{x^b} = x^{a-b}$$

**Examples:**
- $\\frac{x^7}{x^4} = x^{7-4} = x^3$
- $\\frac{5^6}{5^2} = 5^{6-2} = 5^4 = 625$

### Rule 3: Power Rule

**When raising power to power, MULTIPLY exponents:**

$$(x^a)^b = x^{ab}$$

**Examples:**
- $(x^3)^4 = x^{3 \\cdot 4} = x^{12}$
- $(2^2)^3 = 2^{2 \\cdot 3} = 2^6 = 64$

### Rule 4: Power of a Product

**Distribute the exponent:**

$$(xy)^a = x^a y^a$$

**Examples:**
- $(3x)^2 = 3^2 \\cdot x^2 = 9x^2$
- $(2ab)^3 = 2^3 a^3 b^3 = 8a^3b^3$

### Rule 5: Power of a Quotient

**Distribute the exponent:**

$$\\left(\\frac{x}{y}\\right)^a = \\frac{x^a}{y^a}$$

**Examples:**
- $\\left(\\frac{x}{3}\\right)^2 = \\frac{x^2}{3^2} = \\frac{x^2}{9}$
- $\\left(\\frac{2}{y}\\right)^4 = \\frac{2^4}{y^4} = \\frac{16}{y^4}$

## Special Exponents

### Zero Exponent

**Any number (except 0) to the zero power equals 1:**

$$x^0 = 1$$ (where $x \\neq 0$)

**Examples:**
- $5^0 = 1$
- $(x^2y^3)^0 = 1$
- $-2(3x)^0 = -2(1) = -2$ (only $(3x)^0 = 1$)

### Negative Exponents

**Negative exponent means reciprocal:**

$$x^{-a} = \\frac{1}{x^a}$$

**Examples:**
- $x^{-3} = \\frac{1}{x^3}$
- $2^{-4} = \\frac{1}{2^4} = \\frac{1}{16}$
- $\\frac{1}{x^{-2}} = x^2$ (flipping reciprocal)

**In fractions:**
$$\\frac{x^{-2}}{y^{-3}} = \\frac{y^3}{x^2}$$

Negative exponents "flip" to the other part of the fraction

### Fractional Exponents

**Fractional exponent = root:**

$$x^{\\frac{1}{n}} = \\sqrt[n]{x}$$

**Examples:**
- $x^{\\frac{1}{2}} = \\sqrt{x}$ (square root)
- $x^{\\frac{1}{3}} = \\sqrt[3]{x}$ (cube root)
- $8^{\\frac{1}{3}} = \\sqrt[3]{8} = 2$

**General form:**
$$x^{\\frac{m}{n}} = \\sqrt[n]{x^m} = (\\sqrt[n]{x})^m$$

**Examples:**
- $8^{\\frac{2}{3}} = (\\sqrt[3]{8})^2 = 2^2 = 4$
- $16^{\\frac{3}{4}} = (\\sqrt[4]{16})^3 = 2^3 = 8$

## Radical Rules

### Simplifying Radicals

**Product Rule:**
$$\\sqrt{ab} = \\sqrt{a} \\cdot \\sqrt{b}$$

**Example:** 
$$\\sqrt{72} = \\sqrt{36 \\cdot 2} = \\sqrt{36} \\cdot \\sqrt{2} = 6\\sqrt{2}$$

**Quotient Rule:**
$$\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$$

**Example:**
$$\\sqrt{\\frac{16}{25}} = \\frac{\\sqrt{16}}{\\sqrt{25}} = \\frac{4}{5}$$

### Simplification Strategy

**Find perfect square factors:**

**Example:** Simplify $\\sqrt{48}$

**Step 1:** Factor into perfect square  
$48 = 16 \\cdot 3$

**Step 2:** Split the radical  
$\\sqrt{48} = \\sqrt{16 \\cdot 3} = \\sqrt{16} \\cdot \\sqrt{3}$

**Step 3:** Simplify  
$= 4\\sqrt{3}$

**Common perfect squares:** 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144

### Adding and Subtracting Radicals

**Can only combine LIKE radicals** (same radicand):

✓ $3\\sqrt{2} + 5\\sqrt{2} = 8\\sqrt{2}$  
✓ $7\\sqrt{3} - 2\\sqrt{3} = 5\\sqrt{3}$  
❌ $\\sqrt{2} + \\sqrt{3}$ cannot be simplified (different radicands)

**Sometimes need to simplify first:**

**Example:** $\\sqrt{50} + \\sqrt{8}$

$$\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$$
$$\\sqrt{8} = \\sqrt{4 \\cdot 2} = 2\\sqrt{2}$$

$$\\sqrt{50} + \\sqrt{8} = 5\\sqrt{2} + 2\\sqrt{2} = 7\\sqrt{2}$$

### Multiplying Radicals

**Multiply coefficients and radicands separately:**

$$a\\sqrt{b} \\cdot c\\sqrt{d} = (a \\cdot c)\\sqrt{b \\cdot d}$$

**Examples:**
- $2\\sqrt{3} \\cdot 5\\sqrt{2} = 10\\sqrt{6}$
- $3\\sqrt{6} \\cdot 2\\sqrt{6} = 6\\sqrt{36} = 6(6) = 36$

### Rationalizing the Denominator

**Don't leave radicals in denominator:**

$$\\frac{1}{\\sqrt{a}} \\rightarrow \\frac{1}{\\sqrt{a}} \\cdot \\frac{\\sqrt{a}}{\\sqrt{a}} = \\frac{\\sqrt{a}}{a}$$

**Examples:**

$$\\frac{5}{\\sqrt{2}} = \\frac{5}{\\sqrt{2}} \\cdot \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{5\\sqrt{2}}{2}$$

$$\\frac{6}{\\sqrt{3}} = \\frac{6}{\\sqrt{3}} \\cdot \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$$

**With binomial denominators, use conjugate:**

$$\\frac{1}{2 + \\sqrt{3}} \\cdot \\frac{2 - \\sqrt{3}}{2 - \\sqrt{3}} = \\frac{2 - \\sqrt{3}}{4 - 3} = 2 - \\sqrt{3}$$

## Converting Between Forms

### Radical to Exponent

$$\\sqrt{x} = x^{\\frac{1}{2}}$$
$$\\sqrt[3]{x^2} = x^{\\frac{2}{3}}$$
$$\\frac{1}{\\sqrt{x}} = x^{-\\frac{1}{2}}$$

### Exponent to Radical

$$x^{\\frac{3}{4}} = \\sqrt[4]{x^3}$$
$$x^{-\\frac{1}{3}} = \\frac{1}{\\sqrt[3]{x}}$$

**Why convert?** Sometimes easier to use exponent rules, sometimes radical form is clearer

## SAT Question Types

### Type 1: Simplify Expressions

**Strategy:**
- Apply exponent/radical rules step by step
- Combine like terms
- Simplify radicals completely

### Type 2: Solve Equations with Exponents

**Example:** $2^{x+1} = 32$

**Solution:**
- Rewrite 32 as power of 2: $32 = 2^5$
- $2^{x+1} = 2^5$
- Same base → exponents equal: $x + 1 = 5$
- $x = 4$

### Type 3: Solve Equations with Radicals

**Example:** $\\sqrt{x + 3} = 5$

**Solution:**
- Square both sides: $x + 3 = 25$
- Solve: $x = 22$
- **Always check!** $\\sqrt{22 + 3} = \\sqrt{25} = 5$ ✓

### Type 4: Simplify Radicals

**Example:** Simplify $\\sqrt{200}$

**Solution:**
- $200 = 100 \\cdot 2$
- $\\sqrt{200} = \\sqrt{100} \\cdot \\sqrt{2} = 10\\sqrt{2}$

### Type 5: Compare Values

**Which is larger: $2^{100}$ or $4^{50}$?**

**Solution:**
- Rewrite with same base: $4^{50} = (2^2)^{50} = 2^{100}$
- They're equal!

## Common SAT Mistakes

❌ **Confusing addition and multiplication of exponents**  
$x^2 \\cdot x^3 = x^5$ (NOT $x^6$)  
$(x^2)^3 = x^6$ (NOT $x^5$)

❌ **Distributing exponents incorrectly**  
$(x + y)^2 \\neq x^2 + y^2$  
Must use FOIL: $(x + y)^2 = x^2 + 2xy + y^2$

❌ **Forgetting to flip negative exponents**  
$x^{-2} = \\frac{1}{x^2}$ (NOT $-x^2$)

❌ **Not simplifying radicals completely**  
$\\sqrt{48} = 4\\sqrt{3}$ (NOT $2\\sqrt{12}$)

❌ **Squaring both sides creates extraneous solutions**  
Always check answers in original equation!

❌ **Mishandling fractional exponents**  
$x^{\\frac{2}{3}} = (\\sqrt[3]{x})^2$ (root THEN power)

## Quick Reference Table

| Expression | Equivalent | Example |
|------------|-----------|---------|
| $x^0$ | $1$ | $5^0 = 1$ |
| $x^{-a}$ | $\\frac{1}{x^a}$ | $x^{-3} = \\frac{1}{x^3}$ |
| $x^{\\frac{1}{2}}$ | $\\sqrt{x}$ | $16^{\\frac{1}{2}} = 4$ |
| $x^{\\frac{1}{n}}$ | $\\sqrt[n]{x}$ | $8^{\\frac{1}{3}} = 2$ |
| $x^{\\frac{m}{n}}$ | $(\\sqrt[n]{x})^m$ | $8^{\\frac{2}{3}} = 4$ |
| $x^a \\cdot x^b$ | $x^{a+b}$ | $x^2 \\cdot x^3 = x^5$ |
| $\\frac{x^a}{x^b}$ | $x^{a-b}$ | $\\frac{x^5}{x^2} = x^3$ |
| $(x^a)^b$ | $x^{ab}$ | $(x^2)^3 = x^6$ |

## Practice Tips

✓ **Memorize the rules** — they appear on EVERY SAT  
✓ **Rewrite with same base** when comparing or solving  
✓ **Convert between forms** (radical ↔ exponent) for easier manipulation  
✓ **Factor out perfect squares** when simplifying radicals  
✓ **Check solutions** especially after squaring both sides  
✓ **Use calculator strategically** for numerical values, but show algebraic work

**Remember:** Exponent and radical rules are fundamental — master these and many SAT problems become much easier!
`
    }
  });

  console.log('✅ Enhanced Exponents and Radicals topic\n');
  console.log('🎉 SAT Content Update Complete!\n');
  console.log('Summary:');
  console.log('- Batch 1: 8 topics with comprehensive content');
  console.log('- Batch 2: 4 topics (Time Management, Reading, Pronoun Usage, Functions)');
  console.log('- Batch 3: 3 topics (duplicate subject-verb, Quadratics, Exponents)');
  console.log('📊 Total: 15+ SAT topics significantly enhanced!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
