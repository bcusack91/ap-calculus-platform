export const factoringPart3SimpleTrinomialsData = {
  topicSlug: 'factoring-algebra1',
  sections: [
    {
      id: 'introduction',
      type: 'text' as const,
      content: `
**Part 3: Simple Trinomials** 🎯

Great progress! Now let's tackle trinomials (three-term polynomials).

## Factoring Simple Trinomials

**Simple trinomials** have the form: $x^2 + bx + c$ where the leading coefficient is **1**.

**The Goal:**
Find two numbers that multiply and add to specific values!

**What You'll Learn:**
- 🎯 The "multiply and add" strategy
- ➕➖ How to handle positive and negative signs
- ✅ Practice to build speed and confidence
      `
    },
    {
      id: 'simple-trinomials-explanation',
      type: 'text' as const,
      content: `
**The Multiply and Add Strategy** 🎯

For trinomials in the form: $x^2 + bx + c$

**The Pattern:**
$$x^2 + bx + c = (x + m)(x + n)$$

where:
- $m + n = b$ (the two numbers **add** to give the middle coefficient)
- $m \\times n = c$ (the two numbers **multiply** to give the constant term)

**Example 1:** $x^2 + 7x + 12$
- Need two numbers that **add to 7** and **multiply to 12**
- Think: factors of 12 are... 1×12, 2×6, 3×4
- **3 + 4 = 7** ✅ and **3 × 4 = 12** ✅
- Answer: $(x + 3)(x + 4)$

**Example 2:** $x^2 - 5x + 6$
- Need two numbers that **add to -5** and **multiply to +6**
- Both numbers must be negative! (negative + negative = negative, negative × negative = positive)
- **-2 + (-3) = -5** ✅ and **-2 × -3 = 6** ✅
- Answer: $(x - 2)(x - 3)$

**Example 3:** $x^2 + 2x - 15$
- Need two numbers that **add to +2** and **multiply to -15**
- One must be positive, one negative (to get a negative product)
- **5 + (-3) = 2** ✅ and **5 × -3 = -15** ✅
- Answer: $(x + 5)(x - 3)$

**Sign Rules:**
- If $c$ is **positive**, both numbers have the **same sign** (both + or both -)
- If $c$ is **negative**, the numbers have **opposite signs**
- The sign of $b$ tells you which number has the larger absolute value
      `
    },
    {
      id: 'simple-trinomials-practice',
      type: 'factoring-practice' as const,
      content: `
**Practice: Simple Trinomials** 🎯

Factor each trinomial where the leading coefficient is 1.

Find two numbers that multiply to $c$ and add to $b$.

You need to answer **4 questions correctly in a row** to complete Part 3.
      `,
      problemType: 'simple-trinomials'
    },
    {
      id: 'part3-complete',
      type: 'text' as const,
      content: `
**Part 3 Complete! You're on Fire!** 🔥

You've mastered factoring simple trinomials!

**Remember:**
- ✅ For $x^2 + bx + c$, find two numbers that multiply to $c$ and add to $b$
- ✅ If $c$ is positive, both numbers have the same sign
- ✅ If $c$ is negative, the numbers have opposite signs

**Next Up: Part 4 - Complex Trinomials**

In the next part, you'll learn the AC Method for factoring trinomials when the leading coefficient is NOT 1 (like $2x^2 + 7x + 3$).

Ready for the challenge? Click "Next" or use the navigation menu!
      `
    }
  ]
}
