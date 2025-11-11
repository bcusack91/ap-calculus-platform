export const factoringPart1GCFData = {
  topicSlug: 'factoring-algebra1',
  sections: [
    {
      id: 'introduction',
      type: 'text' as const,
      content: `
**Part 1: Greatest Common Factor (GCF)** 🔍

Welcome to factoring! We'll start with the most important rule:

## Always Look for the GCF First!

The **Greatest Common Factor (GCF)** is the largest expression that divides evenly into all terms.

**Why start here?**
Because factoring out the GCF first makes everything else easier! It's like simplifying before you solve - and you should **always** check for a GCF before trying any other factoring technique.

**What You'll Learn in Part 1:**
- 🔍 How to identify the GCF
- 📝 How to factor out the GCF
- ✅ Practice problems to master the technique
      `
    },
    {
      id: 'gcf-technique',
      type: 'text' as const,
      content: `
**How to Find and Factor Out the GCF** 🎯

**Step 1: Identify the GCF**
- Look at the **coefficients** - What's the largest number that divides all of them?
- Look at the **variables** - Take the lowest power of each variable that appears in **all** terms

**Step 2: Factor Out the GCF**
This means you're doing two things simultaneously:
1. **Divide each term by the GCF**
2. **Write the GCF outside parentheses** with the divided terms inside

**The Process:**
$$\\text{Original} \\rightarrow \\text{GCF}(\\text{each term} \\div \\text{GCF})$$

Let's see this in action with examples...
      `
    },
    {
      id: 'gcf-example1',
      type: 'text' as const,
      content: `
**Example 1: Factoring Out the GCF** 📝

**Problem:** $6x^3 + 9x^2$

**Step 1: Find the GCF**
- Coefficients: GCF of 6 and 9 is **3**
- Variables: Both terms have $x$, lowest power is $x^2$
- **GCF = $3x^2$**

**Step 2: Factor Out the GCF**

Divide each term by $3x^2$ and write $3x^2$ outside:

$$6x^3 + 9x^2 = 3x^2(\\text{?} + \\text{?})$$

**Divide each term:**
- $6x^3 \\div 3x^2 = 2x$ ← First term inside parentheses
- $9x^2 \\div 3x^2 = 3$ ← Second term inside parentheses

**Final Answer:**
$$6x^3 + 9x^2 = 3x^2(2x + 3)$$ ✅

**Check your work:** Multiply back out: $3x^2 \\cdot 2x + 3x^2 \\cdot 3 = 6x^3 + 9x^2$ ✓
      `
    },
    {
      id: 'gcf-example2',
      type: 'text' as const,
      content: `
**Example 2: More Complex GCF** 📝

**Problem:** $10x^4y^2 - 15x^2y^3 + 5xy$

**Step 1: Find the GCF**
- Coefficients: GCF of 10, 15, and 5 is **5**
- Variables: All have $x$ (lowest: $x$) and $y$ (lowest: $y$)
- **GCF = $5xy$**

**Step 2: Factor Out the GCF**

Divide each term by $5xy$ and write $5xy$ outside:

$$10x^4y^2 - 15x^2y^3 + 5xy = 5xy(\\text{?} - \\text{?} + \\text{?})$$

**Divide each term:**
- $10x^4y^2 \\div 5xy = 2x^3y$ ← First term
- $15x^2y^3 \\div 5xy = 3xy^2$ ← Second term  
- $5xy \\div 5xy = 1$ ← Third term

**Final Answer:**
$$10x^4y^2 - 15x^2y^3 + 5xy = 5xy(2x^3y - 3xy^2 + 1)$$ ✅

**Important:** Don't forget the "+ 1" at the end! When a term equals the GCF exactly, dividing gives you 1.
      `
    },
    {
      id: 'gcf-practice-identify',
      type: 'factoring-practice' as const,
      content: `
**Practice: Identify the GCF** 🎯

First, let's practice just identifying the GCF (you don't need to factor it out yet).

For each polynomial, determine what the Greatest Common Factor is.

You need to answer **3 questions correctly in a row** to continue.
      `,
      problemType: 'gcf-identify'
    },
    {
      id: 'gcf-practice-complete',
      type: 'factoring-practice' as const,
      content: `
**Practice: Factor Out the GCF** 🎯

Now it's your turn to factor completely! 

For each polynomial:
1. Find the GCF
2. Divide each term by the GCF
3. Write the GCF outside with the divided terms inside

You need to answer **3 questions correctly in a row** to complete Part 1.
      `,
      problemType: 'gcf'
    },
    {
      id: 'part1-complete',
      type: 'text' as const,
      content: `
**Part 1 Complete! Great Job!** 🎉

You've mastered finding and factoring out the GCF!

**Remember:**
- ✅ Always check for a GCF first - it's the foundation of all factoring
- ✅ Look at both coefficients and variables
- ✅ Take the lowest power of each variable that appears in all terms

**Next Up: Part 2 - Difference of Squares**

In the next part, you'll learn one of the most powerful factoring patterns: $a^2 - b^2 = (a + b)(a - b)$

Ready to continue? Click "Next" or use the navigation menu above!
      `
    }
  ]
}
