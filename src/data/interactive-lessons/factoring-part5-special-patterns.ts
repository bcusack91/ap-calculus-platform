export const factoringPart5SpecialPatternsData = {
  topicSlug: 'factoring-algebra1',
  sections: [
    {
      id: 'introduction',
      type: 'text' as const,
      content: `
**Part 5: Special Patterns** 🎨

Almost there! Let's learn to recognize special trinomials that have shortcuts.

## Perfect Square Trinomials

These are special trinomials that factor into a **binomial squared**!

**Why learn these?**
- ⚡ They're faster than regular factoring
- ✅ They appear frequently in algebra and calculus
- 🎯 Recognizing them saves time on tests

**What You'll Learn:**
- 🎨 How to recognize perfect square trinomials
- 📝 The two patterns to memorize
- 🔍 How to verify your answer
      `
    },
    {
      id: 'perfect-square-trinomials-explanation',
      type: 'text' as const,
      content: `
**Perfect Square Trinomials** 🎨

These are trinomials that factor into a binomial squared!

**The Patterns:**
$$a^2 + 2ab + b^2 = (a + b)^2$$
$$a^2 - 2ab + b^2 = (a - b)^2$$

**How to Recognize Them:**
1. ✅ First and last terms are **perfect squares**
2. ✅ Middle term is **twice the product** of the square roots
3. ✅ All terms positive, OR middle term negative

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

**Example 4:** $25x^2 - 30x + 9$
- $25x^2$ is a perfect square (square of $5x$)
- $9$ is a perfect square (square of $3$)
- Middle term: $-30x = -2 \\times 5x \\times 3$ ✅
- Answer: $(5x - 3)^2$ ✅

**Quick Check:** After you factor, expand it out to verify!
$(a + b)^2 = a^2 + 2ab + b^2$ ← The middle term must have that factor of 2!

**Note:** If it doesn't match the perfect square pattern, just use regular trinomial factoring methods!
      `
    },
    {
      id: 'part5-complete',
      type: 'text' as const,
      content: `
**Part 5 Complete! You're a Pattern Master!** ✨

You can now recognize perfect square trinomials at a glance!

**Remember:**
- ✅ $a^2 + 2ab + b^2 = (a + b)^2$
- ✅ $a^2 - 2ab + b^2 = (a - b)^2$
- ✅ Check: Is the middle term twice the product?

**Next Up: Part 6 - Complete Strategy & Mixed Practice**

In the final part, you'll learn the complete factoring strategy (what to try when) and practice mixing all the techniques together!

Ready to master factoring? Click "Next"!
      `
    }
  ]
}
