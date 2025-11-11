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
      id: 'complex-trinomials-explanation',
      type: 'text' as const,
      content: `
**The AC Method (Factoring by Grouping)** 🚀

For trinomials: $ax^2 + bx + c$ where $a \\neq 1$

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

Remember:
1. Multiply $a \\times c$
2. Find two numbers that multiply to $ac$ and add to $b$
3. Rewrite and group
4. Factor out common binomial

You need to answer **4 questions correctly in a row** to complete Part 4.
      `,
      problemType: 'complex-trinomials'
    },
    {
      id: 'part4-complete',
      type: 'text' as const,
      content: `
**Part 4 Complete! Outstanding!** 🌟

You've conquered the AC Method - one of the most powerful factoring techniques!

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
