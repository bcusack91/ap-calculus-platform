export const factoringPart2DifferenceOfSquaresData = {
  topicSlug: 'factoring-algebra1',
  sections: [
    {
      id: 'introduction',
      type: 'text' as const,
      content: `
**Part 2: Difference of Squares** 📊

You've mastered the GCF! Now let's learn one of the most important patterns in algebra.

## The Difference of Squares Pattern

This is a special pattern you'll use throughout algebra and calculus!

**The Pattern:**
$$a^2 - b^2 = (a + b)(a - b)$$

**What makes it special:**
- ✅ It's fast and easy to recognize
- ✅ It always works the same way
- ✅ You'll see it everywhere in math!
      `
    },
    {
      id: 'difference-of-squares-technique',
      type: 'text' as const,
      content: `
**How to Recognize the Difference of Squares** 🎯

**Three Requirements:**
1. ✅ **Two terms only** (nothing else!)
2. ✅ Both terms are **perfect squares**
3. ✅ **Subtraction** sign between them (difference, not sum!)

**The Pattern:**
$$a^2 - b^2 = (a + b)(a - b)$$

**The Method:**
1. Identify what's being squared in the first term → this is "$a$"
2. Identify what's being squared in the second term → this is "$b$"
3. Write two factors: $(a + b)(a - b)$

**Key Insight:** One factor has **addition**, one has **subtraction**!

Let's see this in action with some examples...
      `
    },
    {
      id: 'difference-of-squares-example1',
      type: 'text' as const,
      content: `
**Example 1: Basic Difference of Squares** 📝

**Problem:** Factor $x^2 - 25$

**Step 1:** Check the three requirements
- ✅ Two terms only: $x^2$ and $25$
- ✅ Both are perfect squares: $x^2 = (x)^2$ and $25 = (5)^2$
- ✅ Subtraction sign between them

**Step 2:** Identify $a$ and $b$
- $a = x$ (because $x^2 = (x)^2$)
- $b = 5$ (because $25 = (5)^2$)

**Step 3:** Apply the pattern $a^2 - b^2 = (a + b)(a - b)$
$$x^2 - 25 = (x + 5)(x - 5)$$

**Verification:** Let's check by expanding
$$(x + 5)(x - 5) = x^2 - 5x + 5x - 25 = x^2 - 25$$ ✅
      `
    },
    {
      id: 'difference-of-squares-example2',
      type: 'text' as const,
      content: `
**Example 2: Coefficients on Variables** 📝

**Problem:** Factor $9x^2 - 16$

**Step 1:** Check the three requirements
- ✅ Two terms only: $9x^2$ and $16$
- ✅ Both are perfect squares: $9x^2 = (3x)^2$ and $16 = (4)^2$
- ✅ Subtraction sign between them

**Step 2:** Identify $a$ and $b$
- $a = 3x$ (because $9x^2 = (3x)^2$)
- $b = 4$ (because $16 = (4)^2$)

**Step 3:** Apply the pattern $a^2 - b^2 = (a + b)(a - b)$
$$9x^2 - 16 = (3x + 4)(3x - 4)$$

**Verification:** Let's check by expanding
$$(3x + 4)(3x - 4) = 9x^2 - 12x + 12x - 16 = 9x^2 - 16$$ ✅
      `
    },
    {
      id: 'difference-of-squares-example3',
      type: 'text' as const,
      content: `
**Example 3: Higher Powers and Multiple Variables** 📝

**Problem:** Factor $49x^4 - 64y^2$

**Step 1:** Check the three requirements
- ✅ Two terms only: $49x^4$ and $64y^2$
- ✅ Both are perfect squares: $49x^4 = (7x^2)^2$ and $64y^2 = (8y)^2$
- ✅ Subtraction sign between them

**Step 2:** Identify $a$ and $b$
- $a = 7x^2$ (because $49x^4 = (7x^2)^2$)
- $b = 8y$ (because $64y^2 = (8y)^2$)

**Step 3:** Apply the pattern $a^2 - b^2 = (a + b)(a - b)$
$$49x^4 - 64y^2 = (7x^2 + 8y)(7x^2 - 8y)$$

**Verification:** Let's check by expanding
$$(7x^2 + 8y)(7x^2 - 8y) = 49x^4 - 56x^2y + 56x^2y - 64y^2 = 49x^4 - 64y^2$$ ✅
      `
    },
    {
      id: 'difference-of-squares-common-mistake',
      type: 'text' as const,
      content: `
**Common Mistake to Avoid!** ⚠️

**IMPORTANT:** The difference of squares pattern **ONLY** works with **subtraction**!

**Does NOT Factor (with real numbers):**
$$x^2 + 25$$

This is a **sum of squares**, not a difference. It cannot be factored using real numbers.

**Why?** If we try to use a similar pattern:
- $(x + 5)(x + 5) = x^2 + 10x + 25$ ❌ (has a middle term)
- $(x - 5)(x - 5) = x^2 - 10x + 25$ ❌ (has a middle term)
- $(x + 5)(x - 5) = x^2 - 25$ ❌ (this is difference, not sum!)

**Rule:** $a^2 + b^2$ is **prime** (cannot be factored with real numbers)

**Pro Tip:** Sometimes you need to factor out a GCF first to reveal a difference of squares!

**Example:** Factor $2x^2 - 50$
1. Factor out the GCF first: $2(x^2 - 25)$
2. Now apply difference of squares: $2(x + 5)(x - 5)$ ✅

**Always check for a GCF before applying any factoring pattern!**
      `
    },
    {
      id: 'difference-of-squares-practice',
      type: 'factoring-practice' as const,
      content: `
**Practice: Difference of Squares** 🎯

Factor each expression using the difference of squares pattern.

Remember: $a^2 - b^2 = (a + b)(a - b)$

You need to answer **3 questions correctly in a row** to proceed to the Mini-Boss Challenge!
      `,
      problemType: 'difference-of-squares'
    },
    {
      id: 'mini-boss-battle',
      type: 'mini-boss' as const,
      content: `
**Mini-Boss Challenge** ⚔️

Test your skills against the Factoring Guardian!
      `,
      miniBossConfig: {
        bossName: 'The Factoring Guardian',
        questionSequence: [
          'gcf-identify',
          'gcf-factor',
          'simple-diff-squares',
          'complex-diff-squares',
          'combined'
        ],
        questionBankModule: 'factoring-part2-boss',
        aiAccuracy: 0.8,
        aiResponseTime: 20000 // 20 seconds
      }
    },
    {
      id: 'part2-complete',
      type: 'text' as const,
      content: `
**Part 2 Complete! Excellent Work!** 🎉

You've mastered the difference of squares pattern AND defeated the Factoring Guardian!

**Remember:**
- ✅ $a^2 - b^2 = (a + b)(a - b)$
- ✅ Look for two perfect squares with subtraction
- ✅ Always check for a GCF first!

**Next Up: Part 3 - Simple Trinomials**

In the next part, you'll learn how to factor trinomials like $x^2 + 7x + 12$ where the leading coefficient is 1.

Ready to continue? Click "Next" or use the navigation menu above!
      `
    }
  ]
}