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
      id: 'perfect-square-technique',
      type: 'text' as const,
      content: `
**Perfect Square Trinomials** 🎨

These are special trinomials that factor into a binomial squared!

**The Two Patterns:**
$$a^2 + 2ab + b^2 = (a + b)^2$$
$$a^2 - 2ab + b^2 = (a - b)^2$$

**How to Recognize Them:**

**Step 1:** Check if the first term is a perfect square
- Is it $x^2$, $4x^2$, $9x^2$, $16x^2$, etc.?

**Step 2:** Check if the last term is a perfect square
- Is it $1$, $4$, $9$, $16$, $25$, $36$, etc.?

**Step 3:** Check if the middle term equals $2ab$
- Take the square roots from steps 1 and 2
- Multiply them together and double it
- Does it match the middle term?

**Step 4:** Write the answer
- If all checks pass: $(\\text{first root} \\pm \\text{second root})^2$
- Use $+$ if middle term is positive, $-$ if negative

**Quick Check:** Expand your answer to verify!
      `
    },
    {
      id: 'perfect-square-example1',
      type: 'text' as const,
      content: `
**Example 1: Basic Perfect Square** ✨

Factor: $x^2 + 6x + 9$

**Step 1:** Is $x^2$ a perfect square?
- Yes! $\\sqrt{x^2} = x$ ✅

**Step 2:** Is $9$ a perfect square?
- Yes! $\\sqrt{9} = 3$ ✅

**Step 3:** Is the middle term $2ab$?
- $2 \\times x \\times 3 = 6x$ ✅
- Matches the middle term!

**Step 4:** Write the answer
- $x^2 + 6x + 9 = (x + 3)^2$ ✅

**Verify:** $(x + 3)^2 = x^2 + 6x + 9$ ✅
      `
    },
    {
      id: 'perfect-square-example2',
      type: 'text' as const,
      content: `
**Example 2: Negative Middle Term** 🔄

Factor: $4x^2 - 12x + 9$

**Step 1:** Is $4x^2$ a perfect square?
- Yes! $\\sqrt{4x^2} = 2x$ ✅

**Step 2:** Is $9$ a perfect square?
- Yes! $\\sqrt{9} = 3$ ✅

**Step 3:** Is the middle term $2ab$?
- $2 \\times 2x \\times 3 = 12x$
- We have $-12x$ (negative) ✅

**Step 4:** Write the answer
- Use minus sign: $(2x - 3)^2$ ✅

**Verify:** $(2x - 3)^2 = 4x^2 - 12x + 9$ ✅
      `
    },
    {
      id: 'perfect-square-example3',
      type: 'text' as const,
      content: `
**Example 3: Larger Coefficients** ⚡

Factor: $25x^2 - 30x + 9$

**Step 1:** Is $25x^2$ a perfect square?
- Yes! $\\sqrt{25x^2} = 5x$ ✅

**Step 2:** Is $9$ a perfect square?
- Yes! $\\sqrt{9} = 3$ ✅

**Step 3:** Is the middle term $2ab$?
- $2 \\times 5x \\times 3 = 30x$
- We have $-30x$ (negative) ✅

**Step 4:** Write the answer
- Use minus sign: $(5x - 3)^2$ ✅

**Verify:** $(5x - 3)^2 = 25x^2 - 30x + 9$ ✅
      `
    },
    {
      id: 'perfect-square-example4',
      type: 'text' as const,
      content: `
**Example 4: Two Variables** 🌟

Factor: $9x^2 + 24xy + 16y^2$

**Step 1:** Is $9x^2$ a perfect square?
- Yes! $\\sqrt{9x^2} = 3x$ ✅

**Step 2:** Is $16y^2$ a perfect square?
- Yes! $\\sqrt{16y^2} = 4y$ ✅

**Step 3:** Is the middle term $2ab$?
- $2 \\times 3x \\times 4y = 24xy$ ✅

**Step 4:** Write the answer
- $(3x + 4y)^2$ ✅

**Verify:** $(3x + 4y)^2 = 9x^2 + 24xy + 16y^2$ ✅
      `
    },
    {
      id: 'perfect-square-common-mistakes',
      type: 'text' as const,
      content: `
**Common Mistakes to Avoid** ⚠️

**Mistake 1: Forgetting to check the middle term**
❌ Seeing $x^2 + 5x + 9$ and writing $(x + 3)^2$
✅ Check: $2 \\times x \\times 3 = 6x$, not $5x$ → NOT a perfect square, use AC method

**Mistake 2: Forgetting to check for GCF first**
❌ Factoring $2x^2 + 12x + 18$ as a perfect square
✅ Factor out 2 first: $2(x^2 + 6x + 9) = 2(x + 3)^2$

**Mistake 3: Wrong sign in the factored form**
❌ For $x^2 - 10x + 25$, writing $(x + 5)^2$
✅ Middle term is negative, so: $(x - 5)^2$

**Mistake 4: Not checking if first/last terms are perfect squares**
❌ Trying to use perfect square pattern on $2x^2 + 8x + 8$
✅ $2x^2$ is NOT a perfect square; factor out 2 first: $2(x^2 + 4x + 4) = 2(x + 2)^2$

**Pro Tip:** If it's not a perfect square trinomial, no problem! Just use the regular trinomial factoring methods you already know.
      `
    },
    {
      id: 'special-patterns-practice',
      type: 'factoring-practice' as const,
      content: `
**Practice: Mixed Factoring** 🎯

Factor each expression. Some may be perfect squares, others may need different methods.

**Remember the complete strategy:**
1. Always check for GCF first!
2. Count the terms (2? difference of squares; 3? trinomial)
3. For trinomials: Is it a perfect square? Check the pattern!
4. If not perfect square, use simple or AC method
5. Always verify your answer!

You need to answer **4 questions correctly in a row** to proceed to the mini-boss.
      `,
      problemType: 'mixed'
    },
    {
      id: 'mini-boss-battle',
      type: 'mini-boss' as const,
      content: `
**Mini-Boss Challenge** ⚔️

Face The Pattern Sage!
      `,
      miniBossConfig: {
        bossName: 'The Pattern Sage',
        questionSequence: [
          'gcf-identify',
          'gcf-factor',
          'simple-diff-squares',
          'simple-trinomials',
          'complex-trinomials',
          'combined'
        ],
        questionBankModule: 'factoring-part5-boss',
        aiAccuracy: 0.8,
        aiResponseTime: 20000
      }
    },
    {
      id: 'part5-complete',
      type: 'text' as const,
      content: `
**Part 5 Complete! You're a Pattern Master!** ✨

You've conquered perfect square trinomials AND defeated The Pattern Sage!

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
