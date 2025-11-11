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
      id: 'strategy-step1-gcf',
      type: 'text' as const,
      content: `
**Step 1: Always Check for GCF First!** 🔍

This is the **most important step** - never skip it!

**Why start with GCF?**
- Makes the remaining expression simpler
- Often reveals hidden patterns
- Required for complete factorization

**Examples:**

**Easy to spot:**
$$6x^2 + 9x = 3x(2x + 3)$$

**Less obvious:**
$$2x^2 - 50 = 2(x^2 - 25) = 2(x - 5)(x + 5)$$
↑ After factoring GCF, we see a difference of squares!

**Must do it:**
$$4x^2 + 12x + 9$$
- GCF is 1 (prime coefficients), but check anyway!
- This is a perfect square: $(2x + 3)^2$ ✅

**Pro Tip:** Even if the GCF is 1, checking takes only seconds and prevents errors!
      `
    },
    {
      id: 'strategy-step2-count-terms',
      type: 'text' as const,
      content: `
**Step 2: Count the Terms** 📊

After factoring out GCF, count what remains:

**2 Terms?** → **Difference of Squares**
$$x^2 - 25 = (x - 5)(x + 5)$$
$$4x^2 - 9 = (2x - 3)(2x + 3)$$

**3 Terms?** → **Trinomial** (check in this order):

1️⃣ **Is it a perfect square?**
   - Check if $a^2 \\pm 2ab + b^2$
   - $x^2 + 6x + 9 = (x + 3)^2$ ✅

2️⃣ **Is leading coefficient 1?**
   - Use simple trinomial method
   - $x^2 + 5x + 6 = (x + 2)(x + 3)$ ✅

3️⃣ **Leading coefficient ≠ 1?**
   - Use AC method
   - $2x^2 + 7x + 3 = (2x + 1)(x + 3)$ ✅

**4+ Terms?** → **Grouping**
$$x^3 + 2x^2 + 3x + 6 = (x + 2)(x^2 + 3)$$
      `
    },
    {
      id: 'strategy-step3-factor-further',
      type: 'text' as const,
      content: `
**Step 3: Check if You Can Factor Further** ✅

Never stop at the first factorization - always check each factor!

**Example 1: Hidden difference of squares**
$$3x^2 - 75$$
- ❌ **WRONG:** Stop at $3(x^2 - 25)$
- ✅ **RIGHT:** $3(x^2 - 25) = 3(x - 5)(x + 5)$

**Example 2: Factor can be factored more**
$$2x^3 + 10x^2 + 12x$$
- Step 1: Factor GCF → $2x(x^2 + 5x + 6)$
- Step 2: Factor trinomial → $2x(x + 2)(x + 3)$ ✅

**Example 3: GCF in factors**
$$6x^2 + 21x + 9$$
- Factor GCF first: $3(2x^2 + 7x + 3)$
- Factor trinomial: $3(2x + 1)(x + 3)$ ✅
- If we had: $(6x + 3)(x + 3)$ → NOT fully factored! ($6x + 3$ has GCF of 3)

**How to check:** Each factor should have no common factors (except 1)
      `
    },
    {
      id: 'strategy-common-mistakes',
      type: 'text' as const,
      content: `
**Common Strategy Mistakes** ⚠️

**Mistake 1: Skipping the GCF check**
❌ $2x^2 + 8x + 6 = (2x + 2)(x + 3)$ → NOT fully factored!
✅ Factor out 2 first: $2(x^2 + 4x + 3) = 2(x + 1)(x + 3)$

**Mistake 2: Not factoring completely**
❌ $x^4 - 16 = (x^2 - 4)(x^2 + 4)$ → NOT done!
✅ $x^2 - 4$ is difference of squares: $(x - 2)(x + 2)(x^2 + 4)$

**Mistake 3: Using the wrong technique for the number of terms**
❌ Trying to use difference of squares on $x^2 + 25$ (sum of squares doesn't factor!)
✅ Recognize that $x^2 + 25$ is prime over the reals

**Mistake 4: Forgetting to check your work**
- Always multiply your factors back together
- If it doesn't match the original, find your error

**Golden Rule:** GCF first, count terms, factor completely, verify!
      `
    },
    {
      id: 'mixed-practice',
      type: 'factoring-practice' as const,
      content: `
**Mixed Practice: All Techniques!** 🎯

Now for the ultimate challenge - mixed practice with all factoring techniques!

You'll need to decide which method to use for each problem. Remember the strategy:
1. ✅ Check for GCF first (always!)
2. ✅ Count the terms (2, 3, or 4+)
3. ✅ Apply the appropriate technique
4. ✅ Check if you can factor further
5. ✅ Verify by expanding

You need to answer **5 questions correctly in a row** to proceed to the final boss!
      `,
      problemType: 'mixed'
    },
    {
      id: 'ultimate-boss-battle',
      type: 'mini-boss' as const,
      content: `
**🔥 ULTIMATE BOSS BATTLE 🔥**

Face The Factoring Grandmaster - the ultimate test of all your skills!

This is it - the final challenge. Victory requires mastery of every technique!
      `,
      miniBossConfig: {
        bossName: 'The Factoring Grandmaster',
        questionSequence: [
          'gcf-identify',
          'gcf-factor',
          'simple-diff-squares',
          'simple-trinomials',
          'complex-trinomials',
          'combined',
          'gcf-factor',
          'simple-trinomials',
          'complex-trinomials',
          'combined'
        ],
        questionBankModule: 'factoring-part6-boss',
        aiAccuracy: 0.85, // Tougher opponent for final boss
        aiResponseTime: 20000
      }
    },
    {
      id: 'congratulations',
      type: 'text' as const,
      content: `
**🎉 CONGRATULATIONS! You've Mastered Factoring! 🎉**

**You defeated The Factoring Grandmaster!**

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

**🎮 Competitive Mode Unlocked! 🎮**

Ready to test your speed? You've unlocked **Competitive Mode** where you can:
- ⚡ Race against the clock
- 🏆 Compete on the leaderboard
- 💪 Practice all factoring types under pressure
- 📊 Track your best times and accuracy

**Next Steps:**
- Click the competitive mode button to start racing!
- Use factoring to solve quadratic equations
- Apply factoring to simplify rational expressions

You're now a **Factoring Master!** Keep practicing and you'll be unstoppable! 🚀
      `
    }
  ]
}
