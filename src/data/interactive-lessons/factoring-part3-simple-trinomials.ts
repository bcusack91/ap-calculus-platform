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
      id: 'simple-trinomials-technique',
      type: 'text' as const,
      content: `
**The Multiply and Add Strategy** 🎯

For trinomials in the form: $x^2 + bx + c$

**The Pattern:**
$$x^2 + bx + c = (x + m)(x + n)$$

**The Two Rules:**
1. Find two numbers where: $m + n = b$ (they **add** to the middle coefficient)
2. And: $m \\times n = c$ (they **multiply** to the constant)

**Strategy:**
1. List all factor pairs of $c$
2. Find which pair adds to $b$
3. Write as $(x + m)(x + n)$

**Sign Rules to Remember:**
- If $c$ is **positive** → both numbers have the **same sign**
- If $c$ is **negative** → numbers have **opposite signs**
- The sign of $b$ tells you which number is larger

Let's see this in action...
      `
    },
    {
      id: 'simple-trinomials-example1',
      type: 'text' as const,
      content: `
**Example 1: Both Numbers Positive** 📝

**Problem:** Factor $x^2 + 7x + 12$

**Step 1:** Identify what we need
- Need $m + n = 7$ (add to the middle coefficient)
- Need $m \\times n = 12$ (multiply to the constant)
- Since $c = 12$ is positive, both numbers have the **same sign**
- Since $b = 7$ is positive, both numbers are **positive**

**Step 2:** List factor pairs of 12
- $1 \\times 12 = 12$ → $1 + 12 = 13$ ❌
- $2 \\times 6 = 12$ → $2 + 6 = 8$ ❌
- $3 \\times 4 = 12$ → $3 + 4 = 7$ ✅

**Step 3:** Write the factored form
$$x^2 + 7x + 12 = (x + 3)(x + 4)$$

**Verification:** $(x + 3)(x + 4) = x^2 + 4x + 3x + 12 = x^2 + 7x + 12$ ✅
      `
    },
    {
      id: 'simple-trinomials-example2',
      type: 'text' as const,
      content: `
**Example 2: Both Numbers Negative** 📝

**Problem:** Factor $x^2 - 5x + 6$

**Step 1:** Identify what we need
- Need $m + n = -5$ (add to the middle coefficient)
- Need $m \\times n = 6$ (multiply to the constant)
- Since $c = 6$ is positive, both numbers have the **same sign**
- Since $b = -5$ is negative, both numbers are **negative**

**Step 2:** List negative factor pairs of 6
- $(-1) \\times (-6) = 6$ → $-1 + (-6) = -7$ ❌
- $(-2) \\times (-3) = 6$ → $-2 + (-3) = -5$ ✅

**Step 3:** Write the factored form
$$x^2 - 5x + 6 = (x - 2)(x - 3)$$

**Verification:** $(x - 2)(x - 3) = x^2 - 3x - 2x + 6 = x^2 - 5x + 6$ ✅
      `
    },
    {
      id: 'simple-trinomials-example3',
      type: 'text' as const,
      content: `
**Example 3: Opposite Signs** 📝

**Problem:** Factor $x^2 + 2x - 15$

**Step 1:** Identify what we need
- Need $m + n = 2$ (add to the middle coefficient)
- Need $m \\times n = -15$ (multiply to the constant)
- Since $c = -15$ is negative, numbers have **opposite signs**
- Since $b = 2$ is positive, the positive number is larger

**Step 2:** List factor pairs of 15 with opposite signs
- $1 \\times (-15) = -15$ → $1 + (-15) = -14$ ❌
- $(-1) \\times 15 = -15$ → $-1 + 15 = 14$ ❌
- $3 \\times (-5) = -15$ → $3 + (-5) = -2$ ❌
- $(-3) \\times 5 = -15$ → $-3 + 5 = 2$ ✅

**Step 3:** Write the factored form
$$x^2 + 2x - 15 = (x - 3)(x + 5)$$

**Verification:** $(x - 3)(x + 5) = x^2 + 5x - 3x - 15 = x^2 + 2x - 15$ ✅
      `
    },
    {
      id: 'simple-trinomials-common-mistakes',
      type: 'text' as const,
      content: `
**Common Mistakes to Avoid!** ⚠️

**Mistake 1: Forgetting to Check Both Add AND Multiply**
- ❌ For $x^2 + 8x + 12$, seeing $2 + 6 = 8$ and writing $(x + 2)(x + 6)$
- Problem: $2 \\times 6 = 12$ ✅ but this gives $x^2 + 8x + 12$ which is correct!
- Actually, for $x^2 + 7x + 12$: need $3 \\times 4 = 12$ AND $3 + 4 = 7$

**Mistake 2: Wrong Signs**
- ❌ For $x^2 - 7x + 12$, writing $(x + 3)(x + 4)$
- Problem: This gives $x^2 + 7x + 12$ (positive middle term!)
- ✅ Correct: $(x - 3)(x - 4) = x^2 - 7x + 12$

**Mistake 3: Not Checking for GCF First**
- ❌ Trying to factor $2x^2 + 14x + 24$ directly
- ✅ Factor out GCF first: $2(x^2 + 7x + 12) = 2(x + 3)(x + 4)$
- **Always check for a GCF before using other methods!**

**Mistake 4: Mixing Up Which Number Goes Where**
- For $x^2 + 2x - 15$: found $5$ and $-3$
- ❌ Writing $(x + 3)(x - 5)$ (backwards!)
- ✅ Correct: $(x + 5)(x - 3)$
- Tip: FOIL your answer to check!

**Pro Tip:** Always verify by expanding your answer! If it doesn't match the original, try again.
      `
    },
    {
      id: 'simple-trinomials-practice',
      type: 'factoring-practice' as const,
      content: `
**Practice: Simple Trinomials** 🎯

Factor each trinomial where the leading coefficient is 1.

Find two numbers that multiply to $c$ and add to $b$.

You need to answer **4 questions correctly in a row** to proceed to the Mini-Boss!
      `,
      problemType: 'simple-trinomials'
    },
    {
      id: 'mini-boss-battle',
      type: 'mini-boss' as const,
      content: `
**Mini-Boss Challenge** ⚔️

Face The Polynomial Warrior!
      `,
      miniBossConfig: {
        bossName: 'The Polynomial Warrior',
        questionSequence: [
          'gcf-identify',
          'gcf-factor',
          'simple-diff-squares',
          'simple-trinomials',
          'combined'
        ],
        questionBankModule: 'factoring-part3-boss',
        aiAccuracy: 0.8,
        aiResponseTime: 20000
      }
    },
    {
      id: 'part3-complete',
      type: 'text' as const,
      content: `
**Part 3 Complete! You're on Fire!** 🔥

You've mastered factoring simple trinomials AND defeated The Polynomial Warrior!

**Remember:**
- ✅ For $x^2 + bx + c$, find two numbers that multiply to $c$ and add to $b$
- ✅ If $c$ is positive, both numbers have the same sign
- ✅ If $c$ is negative, the numbers have opposite signs
- ✅ Always check for a GCF first!

**Next Up: Part 4 - Complex Trinomials**

In the next part, you'll learn the AC Method for factoring trinomials when the leading coefficient is NOT 1 (like $2x^2 + 7x + 3$).

Ready for the challenge? Click "Next" or use the navigation menu!
      `
    }
  ]
}
