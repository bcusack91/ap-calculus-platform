export const asvabArFractionsDecimalsPart2Data = {
  topicSlug: 'asvab-ar-fractions-decimals',
  sections: [
    {
      id: 'arfd2-intro',
      type: 'text' as const,
      content: `# 🧩 Fractions and Decimals in Context

**Part 2 of 7 — Finding a Fraction of a Quantity**

### "Of" Means Multiply

"Five-sixths **of** 42" means $\\frac{5}{6} \\times 42$. Without a calculator, do it in two easy steps:

1. **Divide by the denominator** (the bottom number) to find the size of one equal part.
2. **Multiply by the numerator** (the top number) to count how many parts you need.

**Example 1.** What is $\\frac{5}{6}$ of 42?

$$42 \\div 6 = 7 \\qquad 7 \\times 5 = 35$$

**Estimate:** $\\frac{5}{6}$ is a little less than the whole, so the answer should be a little less than 42. $35$ fits.

**Example 2 — a fraction of a population.** A town has 2,400 residents, and $\\frac{3}{8}$ of them are under 25 years old. How many residents are under 25?

$$2{,}400 \\div 8 = 300 \\qquad 300 \\times 3 = 900$$

**Estimate:** $\\frac{3}{8}$ is a bit less than half, and half of 2,400 is 1,200. So 900 residents is reasonable.

> **Key Fact:** Divide first, then multiply. Dividing first keeps the numbers small, and in AR problems the division almost always comes out even.`
    },
    {
      id: 'arfd2-left',
      type: 'text' as const,
      content: `## The Fraction That Is Left

Many questions give you the fraction that **did** something and ask about the rest. The rest is always $1 -$ the fraction.

| If this fraction did it... | ...this fraction did not |
|:---:|:---:|
| $\\frac{2}{3}$ | $\\frac{1}{3}$ |
| $\\frac{3}{8}$ | $\\frac{5}{8}$ |
| $\\frac{4}{7}$ | $\\frac{3}{7}$ |

**Example 3.** Two-thirds of a 27-member crew work the day shift. The rest work nights. How many work nights?

$$1 - \\frac{2}{3} = \\frac{1}{3} \\qquad \\frac{1}{3} \\text{ of } 27 = 27 \\div 3 = 9$$

**Check:** day shift $= 27 \\div 3 \\times 2 = 18$, and $18 + 9 = 27$. ✓`
    },
    {
      id: 'arfd2-successive',
      type: 'text' as const,
      content: `## Two Fractions in a Row: "Of the Rest"

This is the classic AR fraction trap. Read slowly:

**Example 4.** A recruit's paycheck is \\$960. She spends $\\frac{1}{3}$ of it on rent and then $\\frac{1}{4}$ **of the rest** on food. How much money is left?

**Step 1 — First fraction.** Rent: $960 \\div 3 = 320$, so \\$320.

**Step 2 — Find what is left.** $960 - 320 = 640$, so \\$640 is "the rest."

**Step 3 — Second fraction applies to the rest.** Food: $640 \\div 4 = 160$, so \\$160.

**Step 4 — Answer the question asked.** Left: $640 - 160 = 480$, so \\$480.

**The trap:** taking $\\frac{1}{4}$ of the whole \\$960 (which is \\$240) gives \\$400 left. The words "of the rest" (or "of the remaining," "of what was left") tell you the second fraction applies to the smaller amount.

**Shortcut: multiply the fractions that are left.** After rent, $\\frac{2}{3}$ of the pay is left. After food, $\\frac{3}{4}$ of *that* is left:

$$\\frac{2}{3} \\times \\frac{3}{4} = \\frac{1}{2} \\qquad \\frac{1}{2} \\text{ of } 960 = 480$$

> **Key Fact:** Whenever you see "of the rest" or "of the remaining," write "rest = ___" on your scratch paper and fill it in before you use the second fraction.`
    },
    {
      id: 'arfd2-whole',
      type: 'text' as const,
      content: `## Finding the Whole When You Know a Part

Sometimes the question runs backward: it tells you the size of a fraction and asks for the whole.

**Example 5.** Eighteen trucks make up $\\frac{3}{7}$ of a convoy's vehicles. How many vehicles are in the convoy?

**Step 1 — Find one part.** 3 parts are 18 trucks, so 1 part is $18 \\div 3 = 6$ vehicles.

**Step 2 — Count all the parts.** The whole has 7 parts: $6 \\times 7 = 42$ vehicles.

**Check:** $\\frac{3}{7}$ of 42 is $42 \\div 7 \\times 3 = 18$. ✓

**Reasonableness:** the whole must be **bigger** than the part. If your answer is smaller than 18, you multiplied by the fraction instead of working backward.

**Back-solving works too.** The whole must split into 7 equal parts, so it must be a multiple of 7. If the choices were 42, 54, 63 and 126, you could test each: only $\\frac{3}{7}$ of 42 gives 18.`
    },
    {
      id: 'arfd2-mc',
      type: 'multiple-choice' as const,
      content: '**Fraction of a quantity.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Of the 40 recruits in a training class, $\\frac{5}{8}$ completed the obstacle course on the first try. How many recruits completed it on the first try?',
            options: ['15', '25', '5', '64'],
            correctAnswer: 1,
            explanation: '$40 \\div 8 = 5$ recruits per eighth, and $5 \\times 5 = 25$. The 15 recruits are the ones who did not finish on the first try, 5 is just one eighth (stopped after dividing), and 64 comes from dividing by 5 and multiplying by 8, which flips the fraction and gives more recruits than the class has.'
          },
          {
            question: 'A volunteer group has a budget of \\$720. It spends $\\frac{1}{4}$ of the budget on equipment and then $\\frac{1}{3}$ of the remaining money on transportation. How much money is left?',
            options: ['\\$300', '\\$180', '\\$540', '\\$360'],
            correctAnswer: 3,
            explanation: 'Equipment: $720 \\div 4 = 180$, leaving \\$540. Transportation: $540 \\div 3 = 180$, leaving $540 - 180 = 360$, so \\$360. Taking one third of the full \\$720 (\\$240) gives \\$300, the classic trap. \\$540 stops after the first step, and \\$180 is an amount spent, not the amount left.'
          },
          {
            question: 'Sam has driven $\\frac{3}{5}$ of a trip, which is 210 miles. How long is the whole trip?',
            options: ['350 miles', '126 miles', '525 miles', '140 miles'],
            correctAnswer: 0,
            explanation: 'Three fifths is 210 miles, so one fifth is $210 \\div 3 = 70$ miles and the whole trip is $70 \\times 5 = 350$ miles. 126 miles is $\\frac{3}{5}$ of 210, which multiplies instead of working backward (and is shorter than the part already driven). 140 miles is the distance still to go, and 525 miles divides by 2 (the fifths still to go) instead of 3 (the fifths driven).'
          }
        ]
      }
    },
    {
      id: 'arfd2-input',
      type: 'input-boxes' as const,
      content: `**Work it out.** ✍️

**1)** A high school has 840 students, and $\\frac{2}{7}$ of them ride the bus. How many students do **not** ride the bus? (number only)

**2)** A storage tank holds 480 gallons of fuel. On Monday $\\frac{3}{8}$ of the fuel is used. On Tuesday $\\frac{1}{2}$ of the remaining fuel is used. How many gallons are left? (number only, in gallons)`,
      exercise: {
        boxes: 2,
        correctAnswers: ['600', '150'],
        hint1: 'For (1), the students who do not ride are $1 - \\frac{2}{7} = \\frac{5}{7}$ of the school.',
        hint2: 'For (2), Monday uses $480 \\div 8 \\times 3$ gallons. Subtract to find what remains before Tuesday.',
        hint3: 'Tuesday\'s half applies to what is left after Monday, not to the full 480 gallons.',
        explanation: '(1) $840 \\div 7 = 120$, and $\\frac{5}{7}$ is $120 \\times 5 = 600$ students. (2) Monday: $480 \\div 8 = 60$, $60 \\times 3 = 180$ gallons used, so 300 gallons remain. Tuesday: half of 300 is 150 used, leaving 150 gallons. Check with the shortcut: $\\frac{5}{8} \\times \\frac{1}{2} = \\frac{5}{16}$, and $480 \\div 16 \\times 5 = 150$. ✓'
      }
    },
    {
      id: 'arfd2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- A fraction **of** a number: **divide by the denominator, multiply by the numerator**
- The part that did *not* is $1 -$ the fraction that did
- "Of the rest" means the second fraction applies to **what is left**, not to the original amount
- Working backward: part $\\div$ numerator = one part; one part $\\times$ denominator = the whole, which must be **bigger** than the part

> **Up Next:** Part 3 — adding and subtracting fractions and mixed numbers in measurements.`
    }
  ]
};
