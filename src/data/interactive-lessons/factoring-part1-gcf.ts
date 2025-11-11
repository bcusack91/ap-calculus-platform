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
      id: 'gcf-explanation',
      type: 'text' as const,
      content: `
**How to Find the GCF** 🎯

**Step 1: Look at the coefficients**
What's the largest number that divides all of them?

**Step 2: Look at the variables**
Take the lowest power of each variable that appears in **all** terms.

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

Now it's your turn! Factor each polynomial completely by identifying and factoring out the GCF.

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
