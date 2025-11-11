export const factoringPart4ComplexTrinomialsData = {
  topicSlug: 'factoring-algebra1',
  sections: [
    {
      id: 'introduction',
      type: 'text' as const,
      content: `
**Part 4: Complex Trinomials (AC Method)** 🚀

You're doing great! Now for the trickier trinomials.

## When the Leading Coefficient is NOT 1

**Complex trinomials** have the form: $ax^2 + bx + c$ where $a \\neq 1$.

Examples: $2x^2 + 7x + 3$ or $3x^2 - 10x + 8$

**The Solution:**
We'll use the **AC Method** (also called grouping) - a systematic approach that always works!

**What You'll Learn:**
- 📐 The AC Method step-by-step
- 🔄 How to factor by grouping
- ✅ Practice with challenging trinomials
      `
    },
    {
      id: 'complex-trinomials-technique',
      type: 'text' as const,
      content: `
**The AC Method (Factoring by Grouping)** 🚀

For trinomials: $ax^2 + bx + c$ where $a \\neq 1$

**The 4-Step Process:**

**Step 1:** Multiply $a \\times c$ (the first and last coefficients)

**Step 2:** Find two numbers that **multiply to $ac$** and **add to $b$**

**Step 3:** Rewrite the middle term using these two numbers

**Step 4:** Factor by grouping
- Group the first two terms and last two terms
- Factor out the GCF from each pair
- Factor out the common binomial

**Pro Tip:** In Step 4, both parentheses should be identical. If they're not, you made an error!

**Sign Rules:**
- If $c$ is **positive**: both numbers have the **same sign** as $b$
- If $c$ is **negative**: numbers have **opposite signs**, larger one matches sign of $b$
      `
    },
    {
      id: 'complex-trinomials-example1',
      type: 'text' as const,
      content: `
**Example 1: Both Positive** ✨

Factor: $2x^2 + 7x + 3$

**Step 1:** Multiply $a \\times c$
$$ac = 2 \\times 3 = 6$$

**Step 2:** Find two numbers that multiply to **6** and add to **7**
- Try: 1 and 6 → **1 + 6 = 7** ✅ and **1 × 6 = 6** ✅
- Perfect!

**Step 3:** Rewrite the middle term
$$2x^2 + 7x + 3 = 2x^2 + 1x + 6x + 3$$

**Step 4:** Factor by grouping
$$= (2x^2 + 1x) + (6x + 3)$$
$$= x(2x + 1) + 3(2x + 1)$$
$$= (x + 3)(2x + 1)$$ ✅

**Check:** $(x + 3)(2x + 1) = 2x^2 + x + 6x + 3 = 2x^2 + 7x + 3$ ✅
      `
    },
    {
      id: 'complex-trinomials-example2',
      type: 'text' as const,
      content: `
**Example 2: Negative Middle Term** 🔄

Factor: $3x^2 - 10x + 8$

**Step 1:** Multiply $a \\times c$
$$ac = 3 \\times 8 = 24$$

**Step 2:** Find two numbers that multiply to **24** and add to **-10**
- Need both negative (since $c$ is positive but $b$ is negative)
- Try: -4 and -6 → **-4 + (-6) = -10** ✅ and **(-4) × (-6) = 24** ✅

**Step 3:** Rewrite the middle term
$$3x^2 - 10x + 8 = 3x^2 - 4x - 6x + 8$$

**Step 4:** Factor by grouping
$$= (3x^2 - 4x) + (-6x + 8)$$
$$= x(3x - 4) - 2(3x - 4)$$
$$= (x - 2)(3x - 4)$$ ✅

**Check:** $(x - 2)(3x - 4) = 3x^2 - 4x - 6x + 8 = 3x^2 - 10x + 8$ ✅
      `
    },
    {
      id: 'complex-trinomials-example3',
      type: 'text' as const,
      content: `
**Example 3: Negative Last Term** ⚡

Factor: $2x^2 + 5x - 12$

**Step 1:** Multiply $a \\times c$
$$ac = 2 \\times (-12) = -24$$

**Step 2:** Find two numbers that multiply to **-24** and add to **5**
- Need opposite signs (since $ac$ is negative)
- Larger number is positive (since $b$ is positive)
- Try: 8 and -3 → **8 + (-3) = 5** ✅ and **8 × (-3) = -24** ✅

**Step 3:** Rewrite the middle term
$$2x^2 + 5x - 12 = 2x^2 + 8x - 3x - 12$$

**Step 4:** Factor by grouping
$$= (2x^2 + 8x) + (-3x - 12)$$
$$= 2x(x + 4) - 3(x + 4)$$
$$= (2x - 3)(x + 4)$$ ✅

**Check:** $(2x - 3)(x + 4) = 2x^2 + 8x - 3x - 12 = 2x^2 + 5x - 12$ ✅
      `
    },
    {
      id: 'complex-trinomials-common-mistakes',
      type: 'text' as const,
      content: `
**Common Mistakes to Avoid** ⚠️

**Mistake 1: Forgetting to check for GCF first**
❌ Factor $6x^2 + 15x + 6$ directly
✅ Factor out 3 first: $3(2x^2 + 5x + 2)$, then use AC method on what remains

**Mistake 2: Wrong signs when finding the two numbers**
❌ For $2x^2 - 7x + 3$, using 1 and 6 (adds to 7, not -7)
✅ Use -1 and -6 (both negative since $c$ is positive and $b$ is negative)

**Mistake 3: Not matching binomials in Step 4**
❌ Getting $x(2x + 1) + 3(x + 2)$ - these don't match!
✅ Should get $x(2x + 1) + 3(2x + 1)$ - identical binomials

**Mistake 4: Incorrect grouping factorization**
❌ From $(3x^2 - 6x) + (4x - 8)$, getting $x(3x - 6) + 4(x - 2)$
✅ Factor completely: $3x(x - 2) + 4(x - 2)$

**Pro Tip:** Always check your answer by multiplying it back out!
      `
    },
    {
      id: 'complex-trinomials-practice',
      type: 'factoring-practice' as const,
      content: `
**Practice: Complex Trinomials** 🎯

Factor each trinomial using the AC Method.

Remember:
1. Check for GCF first!
2. Multiply $a \\times c$
3. Find two numbers that multiply to $ac$ and add to $b$
4. Rewrite and group
5. Factor out common binomial

You need to answer **4 questions correctly in a row** to proceed to the mini-boss.
      `,
      problemType: 'complex-trinomials'
    },
    {
      id: 'mini-boss-battle',
      type: 'mini-boss' as const,
      content: `
**Mini-Boss Challenge** ⚔️

Face The Trinomial Master!
      `,
      miniBossConfig: {
        bossName: 'The Trinomial Master',
        questionSequence: [
          'gcf-identify',
          'gcf-factor',
          'simple-diff-squares',
          'simple-trinomials',
          'complex-trinomials',
          'combined'
        ],
        questionBankModule: 'factoring-part4-boss',
        aiAccuracy: 0.8,
        aiResponseTime: 20000
      }
    },
    {
      id: 'part4-complete',
      type: 'text' as const,
      content: `
**Part 4 Complete! Outstanding!** 🌟

You've conquered the AC Method AND defeated The Trinomial Master!

**Remember:**
- ✅ The AC Method works for any trinomial
- ✅ Multiply $a \\times c$, then find two numbers
- ✅ Factor by grouping - the binomials should match!

**Next Up: Part 5 - Special Patterns**

In the next part, you'll learn to recognize perfect square trinomials and other special patterns that make factoring even faster!

Ready to learn the shortcuts? Click "Next"!
      `
    }
  ]
}
