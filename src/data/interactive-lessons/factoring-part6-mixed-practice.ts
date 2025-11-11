export const factoringPart6MixedPracticeData = {
  topicSlug: 'factoring-algebra1',
  sections: [
    {
      id: 'introduction',
      type: 'text' as const,
      content: `
**Part 6: Complete Strategy & Mastery** 🏆

Final part! Let's put it all together.

## Your Complete Factoring Toolkit

You've learned all the major techniques. Now it's time to master **when** to use each one!

**What You'll Learn:**
- 🎯 The complete factoring strategy (step-by-step)
- 🔄 How to decide which technique to use
- 💪 Mixed practice with all techniques combined
      `
    },
    {
      id: 'strategy-overview',
      type: 'text' as const,
      content: `
**Your Complete Factoring Strategy** 🎯

Here's the order to try factoring techniques - follow this every time!

**STEP 1: GCF First!** 🔍
- Always factor out the greatest common factor first
- Example: $3x^2 + 6x = 3x(x + 2)$

**STEP 2: Count the Terms** 📊

**2 Terms?** → Try **Difference of Squares**
- Pattern: $a^2 - b^2 = (a+b)(a-b)$
- Example: $x^2 - 16 = (x+4)(x-4)$

**3 Terms?** → **Trinomial Factoring**
- First, check if it's a **perfect square trinomial**
  - $a^2 + 2ab + b^2 = (a+b)^2$
  - $a^2 - 2ab + b^2 = (a-b)^2$
- If leading coefficient is 1: Use **simple trinomial** method
  - Find two numbers that multiply to $c$ and add to $b$
  - Example: $x^2 + 5x + 6 = (x+2)(x+3)$
- If leading coefficient ≠ 1: Use **AC method**
  - Example: $2x^2 + 7x + 3 = (2x + 1)(x + 3)$

**4+ Terms?** → Try **Factoring by Grouping**
- Group terms in pairs
- Factor out GCF from each pair
- Factor out common binomial
- Example: $x^3 + 2x^2 + 3x + 6 = (x^2 + 3)(x + 2)$

**STEP 3: Check if You Can Factor Further** ✅
- Always check each factor to see if it can be factored more
- Example: $2x^2 - 50 = 2(x^2 - 25) = 2(x+5)(x-5)$

**Pro Tips:**
- 💡 Always factor completely!
- 💡 Check your answer by multiplying the factors back out
- 💡 Some polynomials don't factor (they're "prime")
- 💡 If you get stuck, verify you've factored out the GCF first!
      `
    },
    {
      id: 'mixed-practice',
      type: 'factoring-practice' as const,
      content: `
**Mixed Practice: All Techniques!** 🎯

Now for the ultimate challenge - mixed practice with all factoring techniques!

You'll need to decide which method to use for each problem. Remember the strategy:
1. ✅ Check for GCF first
2. ✅ Count the terms
3. ✅ Apply the appropriate technique
4. ✅ Check if you can factor further

You need to answer **5 questions correctly in a row** to master factoring!
      `,
      problemType: 'mixed'
    },
    {
      id: 'congratulations',
      type: 'text' as const,
      content: `
**🎉 CONGRATULATIONS! You've Mastered Factoring! 🎉**

You now have all the tools you need to factor any polynomial:

✅ **Part 1: GCF** - Always check first
✅ **Part 2: Difference of Squares** - $a^2 - b^2$
✅ **Part 3: Simple Trinomials** - When $a = 1$
✅ **Part 4: Complex Trinomials** - AC Method
✅ **Part 5: Special Patterns** - Perfect square trinomials
✅ **Part 6: Complete Strategy** - Know what to try when

**Your Factoring Checklist:**
1. 🔍 Check for GCF first (always!)
2. 📊 Count the terms
3. 🎯 Apply the right technique
4. ✅ Factor completely
5. 🔄 Verify by multiplying back

**Remember:**
- Practice makes perfect - the more you factor, the faster you'll recognize patterns
- Always factor completely - check each factor to see if it can be factored further
- Verify your answer by multiplying the factors back together

**Next Steps:**
- Use factoring to solve quadratic equations
- Apply factoring to simplify rational expressions
- Practice with our competitive mode to test your speed!

You're now a **Factoring Master!** Keep practicing and you'll be unstoppable! 🚀
      `
    }
  ]
}
