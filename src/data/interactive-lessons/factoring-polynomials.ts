export const factoringPolynomialsLessonData = {
  topicSlug: 'factoring-algebra1',
  sections: [
    {
      id: 'introduction',
      type: 'text' as const,
      content: `
**Master Factoring Polynomials!** 🎯

Factoring is like "un-multiplying" - taking a polynomial and breaking it down into simpler pieces (factors) that multiply together to give you the original expression.

**Why is this important?**
- ✅ Solving quadratic equations
- ✅ Simplifying rational expressions
- ✅ Finding zeros of functions
- ✅ Graphing polynomials
- ✅ Calculus applications

**What You'll Learn:**
1. 🔍 **GCF** - Always factor out the Greatest Common Factor first
2. 📊 **Difference of Squares** - The pattern $a^2 - b^2$
3. 🎯 **Simple Trinomials** - When the leading coefficient is 1
4. 🚀 **Complex Trinomials** - When the leading coefficient is not 1
5. 🎨 **Special Patterns** - Perfect square trinomials and more

Let's master all the techniques step by step!
      `
    },
    {
      id: 'gcf-intro',
      type: 'text' as const,
      content: `
**Step 1: Always Look for the GCF First!** 🔍

The **Greatest Common Factor (GCF)** is the largest expression that divides evenly into all terms.

**Why start here?**
Because factoring out the GCF first makes everything else easier! It's like simplifying before you solve.

**How to Find the GCF:**

1. **Look at the coefficients** - What's the largest number that divides all of them?
2. **Look at the variables** - Take the lowest power of each variable that appears in all terms

**Examples:**

**Example 1:** $6x^3 + 9x^2$
- Coefficients: GCF of 6 and 9 is **3**
- Variables: Both have $x$, lowest power is $x^2$
- **GCF = $3x^2$**
- Factor out: $3x^2(2x + 3)$ ✅

**Example 2:** $10x^4y^2 - 15x^2y^3 + 5xy$
- Coefficients: GCF of 10, 15, and 5 is **5**
- Variables: All have $x$ (lowest: $x$) and $y$ (lowest: $y$)
- **GCF = $5xy$**
- Factor out: $5xy(2x^3y - 3xy^2 + 1)$ ✅

**Pro Tip:** Even if the GCF is just a number or just a variable, always factor it out first!
      `
    },
    {
      id: 'gcf-practice',
      type: 'factoring-practice' as const,
      content: `
**Practice: Factor Out the GCF** 🎯

Factor each polynomial completely by identifying and factoring out the GCF.

You need to answer **3 questions correctly in a row** to proceed.
      `,
      problemType: 'gcf'
    },
    {
      id: 'difference-of-squares',
      type: 'text' as const,
      content: `
**The Difference of Squares Pattern** 📊

This is one of the most important patterns to recognize!

**The Pattern:**
$$a^2 - b^2 = (a + b)(a - b)$$

**Key Points:**
- ✅ Both terms must be **perfect squares**
- ✅ There must be a **subtraction** (difference) between them
- ✅ Always factors into two binomials: one sum, one difference

**How to Recognize It:**
1. Two terms only
2. Both are perfect squares
3. Subtraction sign between them

**Examples:**

**Example 1:** $x^2 - 25$
- $x^2$ is a perfect square (square of $x$)
- $25$ is a perfect square (square of $5$)
- Factors: $(x + 5)(x - 5)$ ✅

**Example 2:** $9x^2 - 16$
- $9x^2$ is a perfect square (square of $3x$)
- $16$ is a perfect square (square of $4$)
- Factors: $(3x + 4)(3x - 4)$ ✅

**Example 3:** $49x^4 - 64y^2$
- $49x^4$ is a perfect square (square of $7x^2$)
- $64y^2$ is a perfect square (square of $8y$)
- Factors: $(7x^2 + 8y)(7x^2 - 8y)$ ✅

**Common Mistake:** $x^2 + 25$ does NOT factor (sum of squares doesn't factor with real numbers)

**Pro Tip:** Sometimes you need to factor out a GCF first to reveal a difference of squares!
Example: $2x^2 - 50 = 2(x^2 - 25) = 2(x + 5)(x - 5)$
      `
    },
    {
      id: 'difference-of-squares-practice',
      type: 'factoring-practice' as const,
      content: `
**Practice: Difference of Squares** 🎯

Factor each expression using the difference of squares pattern.

You need to answer **3 questions correctly in a row** to proceed.
      `,
      problemType: 'difference-of-squares'
    },
    {
      id: 'simple-trinomials',
      type: 'text' as const,
      content: `
**Factoring Simple Trinomials** 🎯

When the leading coefficient is 1: $x^2 + bx + c$

**The Pattern:**
$$x^2 + bx + c = (x + m)(x + n)$$

where $m + n = b$ and $m \\times n = c$

**The Strategy:**
Find two numbers that:
- **Add** to give you the middle coefficient ($b$)
- **Multiply** to give you the constant term ($c$)

**Example 1:** $x^2 + 7x + 12$
- Need two numbers that add to **7** and multiply to **12**
- Think: factors of 12 are... 1×12, 2×6, 3×4
- **3 + 4 = 7** ✅ and **3 × 4 = 12** ✅
- Answer: $(x + 3)(x + 4)$

**Example 2:** $x^2 - 5x + 6$
- Need two numbers that add to **-5** and multiply to **+6**
- Both numbers must be negative! (negative + negative = negative, negative × negative = positive)
- **-2 + (-3) = -5** ✅ and **-2 × -3 = 6** ✅
- Answer: $(x - 2)(x - 3)$

**Example 3:** $x^2 + 2x - 15$
- Need two numbers that add to **+2** and multiply to **-15**
- One must be positive, one negative (to get a negative product)
- **5 + (-3) = 2** ✅ and **5 × -3 = -15** ✅
- Answer: $(x + 5)(x - 3)$

**Sign Rules:**
- If $c$ is **positive**, both numbers have the **same sign** (both + or both -)
- If $c$ is **negative**, the numbers have **opposite signs**
- The sign of $b$ tells you which number is bigger (in absolute value)
      `
    },
    {
      id: 'simple-trinomials-practice',
      type: 'factoring-practice' as const,
      content: `
**Practice: Simple Trinomials** 🎯

Factor each trinomial where the leading coefficient is 1.

You need to answer **4 questions correctly in a row** to proceed.
      `,
      problemType: 'simple-trinomials'
    },
    {
      id: 'complex-trinomials',
      type: 'text' as const,
      content: `
**Factoring Complex Trinomials** 🚀

When the leading coefficient is NOT 1: $ax^2 + bx + c$ (where $a \\neq 1$)

This is trickier! We'll use the **AC Method** (also called grouping).

**The AC Method:**

**Step 1:** Multiply $a \\times c$ (the first and last coefficients)

**Step 2:** Find two numbers that **multiply to $ac$** and **add to $b$**

**Step 3:** Rewrite the middle term using these two numbers

**Step 4:** Factor by grouping (factor the first pair and last pair separately)

**Example 1:** $2x^2 + 7x + 3$

**Step 1:** $a \\times c = 2 \\times 3 = 6$

**Step 2:** Need two numbers that multiply to **6** and add to **7**
- Try: 1 and 6 → **1 + 6 = 7** ✅ and **1 × 6 = 6** ✅

**Step 3:** Rewrite: $2x^2 + 1x + 6x + 3$

**Step 4:** Group and factor:
- $(2x^2 + 1x) + (6x + 3)$
- $x(2x + 1) + 3(2x + 1)$
- $(x + 3)(2x + 1)$ ✅

**Example 2:** $3x^2 - 10x + 8$

**Step 1:** $a \\times c = 3 \\times 8 = 24$

**Step 2:** Need two numbers that multiply to **24** and add to **-10**
- Both must be negative: **-4 + (-6) = -10** ✅ and **-4 × -6 = 24** ✅

**Step 3:** Rewrite: $3x^2 - 4x - 6x + 8$

**Step 4:** Group and factor:
- $(3x^2 - 4x) + (-6x + 8)$
- $x(3x - 4) - 2(3x - 4)$
- $(x - 2)(3x - 4)$ ✅

**Pro Tip:** In Step 4, both parentheses should be identical. If they're not, you made an error!
      `
    },
    {
      id: 'complex-trinomials-practice',
      type: 'factoring-practice' as const,
      content: `
**Practice: Complex Trinomials** 🎯

Factor each trinomial using the AC Method.

You need to answer **4 questions correctly in a row** to proceed.
      `,
      problemType: 'complex-trinomials'
    },
    {
      id: 'perfect-square-trinomials',
      type: 'text' as const,
      content: `
**Perfect Square Trinomials** 🎨

These are special trinomials that factor into a binomial squared!

**The Patterns:**
$$a^2 + 2ab + b^2 = (a + b)^2$$
$$a^2 - 2ab + b^2 = (a - b)^2$$

**How to Recognize Them:**
1. ✅ First and last terms are perfect squares
2. ✅ Middle term is **twice the product** of the square roots
3. ✅ All terms are positive, OR middle term is negative

**Example 1:** $x^2 + 6x + 9$
- $x^2$ is a perfect square (square of $x$)
- $9$ is a perfect square (square of $3$)
- Middle term: $6x = 2 \\times x \\times 3$ ✅
- Answer: $(x + 3)^2$ ✅

**Example 2:** $4x^2 - 12x + 9$
- $4x^2$ is a perfect square (square of $2x$)
- $9$ is a perfect square (square of $3$)
- Middle term: $-12x = -2 \\times 2x \\times 3$ ✅
- Answer: $(2x - 3)^2$ ✅

**Example 3:** $9x^2 + 24xy + 16y^2$
- $9x^2$ is a perfect square (square of $3x$)
- $16y^2$ is a perfect square (square of $4y$)
- Middle term: $24xy = 2 \\times 3x \\times 4y$ ✅
- Answer: $(3x + 4y)^2$ ✅

**Quick Check:** After you factor, expand it out to verify!
$(a + b)^2 = a^2 + 2ab + b^2$ ← The middle term must have that factor of 2!
      `
    },
    {
      id: 'strategy-overview',
      type: 'text' as const,
      content: `
**Your Complete Factoring Strategy** 🎯

Here's the order to try factoring techniques:

**STEP 1: GCF First!** 🔍
- Always factor out the greatest common factor first
- Example: $3x^2 + 6x = 3x(x + 2)$

**STEP 2: Count the Terms** 📊

**2 Terms?** → Try Difference of Squares
- $a^2 - b^2 = (a+b)(a-b)$
- Example: $x^2 - 16 = (x+4)(x-4)$

**3 Terms?** → Trinomial Factoring
- Check if it's a perfect square first
- If leading coefficient is 1: Find two numbers
- If leading coefficient ≠ 1: Use AC method
- Example: $x^2 + 5x + 6 = (x+2)(x+3)$

**4+ Terms?** → Try Factoring by Grouping
- Group terms in pairs
- Factor out GCF from each pair
- Factor out common binomial
- Example: $x^3 + 2x^2 + 3x + 6 = (x^2 + 3)(x + 2)$

**STEP 3: Check if You Can Factor Further** ✅
- Always check each factor to see if it can be factored more
- Example: $2x^2 - 50 = 2(x^2 - 25) = 2(x+5)(x-5)$

**Pro Tips:**
- 💡 Always factor completely!
- 💡 Check your answer by multiplying the factors back out
- 💡 Some polynomials don't factor (they're "prime")
      `
    },
    {
      id: 'mixed-practice',
      type: 'factoring-practice' as const,
      content: `
**Mixed Practice: All Techniques!** 🎯

Now let's practice all the factoring techniques together. You'll need to decide which method to use for each problem!

You need to answer **5 questions correctly in a row** to master factoring!
      `,
      problemType: 'mixed'
    },
    {
      id: 'congratulations',
      type: 'text' as const,
      content: `
**Congratulations! You've Mastered Factoring!** 🎉

You now have all the tools you need to factor polynomials:

✅ **GCF** - Always check first
✅ **Difference of Squares** - $a^2 - b^2$
✅ **Simple Trinomials** - When $a = 1$
✅ **Complex Trinomials** - AC Method
✅ **Perfect Square Trinomials** - $(a ± b)^2$
✅ **Complete Factoring Strategy** - Know what to try when

**Remember:**
- Practice makes perfect - the more you factor, the faster you'll recognize patterns
- Always factor completely - check each factor to see if it can be factored further
- Verify your answer by multiplying the factors back together

**Next Steps:**
- Use factoring to solve quadratic equations
- Apply factoring to simplify rational expressions
- Practice with our competitive mode to test your speed!

Keep practicing and you'll be a factoring expert in no time! 🚀
      `
    }
  ]
}
