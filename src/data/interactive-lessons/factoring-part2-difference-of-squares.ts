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
      id: 'difference-of-squares-explanation',
      type: 'text' as const,
      content: `
**How to Recognize the Difference of Squares** 🎯

**Three Requirements:**
1. ✅ **Two terms only** (nothing else!)
2. ✅ Both terms are **perfect squares**
3. ✅ **Subtraction** sign between them (difference, not sum!)

**The Pattern:**
$$a^2 - b^2 = (a + b)(a - b)$$

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

**Common Mistake:** $x^2 + 25$ does **NOT** factor with real numbers (sum of squares doesn't factor!)

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

Remember: $a^2 - b^2 = (a + b)(a - b)$

You need to answer **3 questions correctly in a row** to complete Part 2.
      `,
      problemType: 'difference-of-squares'
    },
    {
      id: 'part2-complete',
      type: 'text' as const,
      content: `
**Part 2 Complete! Excellent Work!** 🎉

You've mastered the difference of squares pattern!

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
