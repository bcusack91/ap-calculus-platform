import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Angle Relationships (Grade 7 Math, CCSS 7.G.B.5).
 * Registry key / DB Topic.slug: 'angle-relationships-grade7'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. Pitched at Grade 7:
 * complementary, supplementary, vertical & adjacent angles, plus one- and two-step
 * equations to find unknown angles. Distinct from the high-school
 * 'angle-relationships-geometry' lesson. LaTeX uses doubled backslashes
 * (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'angle-relationships-grade7',
    sections: [
      {
        id: 'ar7-1-intro',
        type: 'text' as const,
        content: `# 📐 Angle Relationships

**Part 1 of 5 — Angle Basics & Adjacent Angles**

---

### Topics in This Part

| Section |
|---------|
| What Is an Angle? Measuring in Degrees |
| Classifying Angles by Size |
| Adjacent Angles & Adding Them Up |

> 🔑 **Key Concept:** Almost every Grade 7 angle problem comes down to one big idea — *angles that fit together add up to a known total*, usually $90^\\circ$, $180^\\circ$, or $360^\\circ$. Part 1 builds the vocabulary so the rest of the lesson is careful arithmetic and a little algebra.`,
      },
      {
        id: 'ar7-1-measure',
        type: 'text' as const,
        content: `## What Is an Angle?

An **angle** is the "opening" between two **rays** that share a common endpoint. That shared endpoint is the **vertex**, and the two rays are the **sides**.

We measure an angle in **degrees**, written with the little circle symbol: $^\\circ$.

- A full turn all the way around is $360^\\circ$.
- A half turn (a straight line) is $180^\\circ$.
- A quarter turn (a square corner) is $90^\\circ$.

We often name an angle with three points, like $\\angle ABC$, where the **middle letter is always the vertex**. So in $\\angle ABC$, the vertex is $B$.

> 💡 **Reading tip:** The little square drawn in a corner means exactly $90^\\circ$ — a **right angle**. No square means you cannot assume it is $90^\\circ$.`,
      },
      {
        id: 'ar7-1-classify',
        type: 'text' as const,
        content: `## Classifying Angles by Size

| Name | Measure | Looks like |
|------|---------|-----------|
| **Acute** | between $0^\\circ$ and $90^\\circ$ | a sharp, narrow corner |
| **Right** | exactly $90^\\circ$ | a square corner |
| **Obtuse** | between $90^\\circ$ and $180^\\circ$ | wide open, but not flat |
| **Straight** | exactly $180^\\circ$ | a straight line |

**Examples:** $35^\\circ$ is acute, $90^\\circ$ is right, $128^\\circ$ is obtuse, and $180^\\circ$ is straight.

> 🔑 **Memory hook:** "**A**cute" angles are "**a** cute" little angles — small and under $90^\\circ$. **Obtuse** angles are the big, wide ones over $90^\\circ$.`,
      },
      {
        id: 'ar7-1-classify-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How would you classify a $73^\\circ$ angle?',
              options: ['Acute', 'Right', 'Obtuse', 'Straight'],
              correctAnswer: 0,
              explanation: '$73^\\circ$ is between $0^\\circ$ and $90^\\circ$, so it is an **acute** angle.',
            },
            {
              question: 'In the angle $\\angle XYZ$, which point is the vertex?',
              options: ['$X$', '$Y$', '$Z$', 'You cannot tell'],
              correctAnswer: 1,
              explanation: 'The **middle letter** always names the vertex, so the vertex of $\\angle XYZ$ is $Y$.',
            },
            {
              question: 'A $115^\\circ$ angle is best described as:',
              options: ['Acute', 'Right', 'Obtuse', 'Straight'],
              correctAnswer: 2,
              explanation: '$115^\\circ$ is greater than $90^\\circ$ but less than $180^\\circ$, so it is **obtuse**.',
            },
          ],
        },
      },
      {
        id: 'ar7-1-adjacent',
        type: 'text' as const,
        content: `## Adjacent Angles

Two angles are **adjacent** when they:
1. share the **same vertex**, and
2. share a **common side** (a ray between them), and
3. do **not overlap** (one is not inside the other).

Think of two slices of pizza sitting side by side — they touch along one straight cut but do not overlap.

The big idea you will use all lesson long:

> 🔑 **Adding Adjacent Angles:** When two angles sit next to each other with no gap and no overlap, their measures **add together** to give the whole angle.

$$\\angle ABD + \\angle DBC = \\angle ABC$$

**Example:** If two adjacent angles measure $40^\\circ$ and $25^\\circ$, the whole angle they form is $40^\\circ + 25^\\circ = 65^\\circ$.`,
      },
      {
        id: 'ar7-1-adjacent-dropdown',
        type: 'dropdown-select' as const,
        content: `**Adjacent or Not?** 🔽

Adjacent angles must share a vertex **and** a common side **and** not overlap. Choose whether each described pair is adjacent.`,
        exercise: {
          dropdowns: [
            { label: 'Two angles sharing one ray, side by side, no overlap:', options: ['Adjacent', 'Not adjacent'] },
            { label: 'Two angles with different vertices, far apart:', options: ['Adjacent', 'Not adjacent'] },
            { label: 'A small angle drawn completely inside a larger angle:', options: ['Adjacent', 'Not adjacent'] },
          ],
          correctAnswers: ['Adjacent', 'Not adjacent', 'Not adjacent'],
          hint1: 'Adjacent angles share a vertex and a side, sitting next to each other like two pizza slices.',
          hint2: 'If the angles do not share a vertex, they cannot be adjacent.',
          hint3: 'One angle inside another **overlaps**, so those are not adjacent.',
          explanation: 'Side by side sharing a ray → adjacent. Different vertices → not adjacent. One inside the other (overlapping) → not adjacent.',
        },
      },
      {
        id: 'ar7-1-adjacent-recap',
        type: 'text' as const,
        content: `## From Adjacent Angles to Totals

Once you can add adjacent angles, the next step is recognizing **what total they should reach**. A few totals come up again and again:

| The whole angle is… | when the pieces form… |
|---------------------|------------------------|
| $90^\\circ$ | a right (square) corner |
| $180^\\circ$ | a straight line |
| $360^\\circ$ | a complete turn around a point |

Keep these three totals in mind — they are the keys to the rest of the lesson. Let's practice adding adjacent pieces.`,
      },
      {
        id: 'ar7-1-adjacent-drill',
        type: 'input-boxes' as const,
        content: `**Add the Adjacent Angles** 🧮

Two adjacent angles together form one larger angle. Find each missing measure (in degrees — just type the number).

**1)** Adjacent angles of $30^\\circ$ and $45^\\circ$ form a whole angle of $\\,?$
**2)** A whole angle of $80^\\circ$ is split into a $50^\\circ$ piece and another piece of $\\,?$
**3)** Adjacent angles of $18^\\circ$ and $72^\\circ$ form a whole angle of $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['75', '30', '90'],
          hint1: 'To find the whole angle, **add** the two adjacent pieces: $30 + 45$.',
          hint2: 'To find a missing piece, **subtract** the known piece from the whole: $80 - 50$.',
          hint3: '$18 + 72 = 90$ — these two pieces form a right angle.',
          explanation: '1) $30 + 45 = 75^\\circ$.  2) $80 - 50 = 30^\\circ$.  3) $18 + 72 = 90^\\circ$.',
        },
      },
      {
        id: 'ar7-1-wrap',
        type: 'text' as const,
        content: `## Wrapping Up Part 1

You now know how to **name**, **classify**, and **add** angles. That last skill — adjacent angles adding up — is the engine for everything ahead.

In Part 2 we meet **complementary** and **supplementary** angles: special pairs that add to $90^\\circ$ and $180^\\circ$. Once you spot those totals, finding a missing angle is just subtraction.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'angle-relationships-grade7',
    sections: [
      {
        id: 'ar7-2-intro',
        type: 'text' as const,
        content: `# 📐 Angle Relationships

**Part 2 of 5 — Complementary & Supplementary Angles**

---

> 🔑 **The Idea:** Two special pairs show up everywhere. **Complementary** angles add to $90^\\circ$. **Supplementary** angles add to $180^\\circ$. If you know one angle in the pair, you can always find the other by subtracting.`,
      },
      {
        id: 'ar7-2-comp-supp',
        type: 'text' as const,
        content: `## The Two Big Pairs

| Pair | They add to | How to find the partner |
|------|-------------|--------------------------|
| **Complementary** | $90^\\circ$ | partner $= 90^\\circ - \\text{angle}$ |
| **Supplementary** | $180^\\circ$ | partner $= 180^\\circ - \\text{angle}$ |

### Complementary ($90^\\circ$)

If $\\angle A$ and $\\angle B$ are complementary, then $\\angle A + \\angle B = 90^\\circ$.

**Example:** The complement of $35^\\circ$ is $90^\\circ - 35^\\circ = 55^\\circ$.

### Supplementary ($180^\\circ$)

If $\\angle A$ and $\\angle B$ are supplementary, then $\\angle A + \\angle B = 180^\\circ$.

**Example:** The supplement of $110^\\circ$ is $180^\\circ - 110^\\circ = 70^\\circ$.

> 💡 **Spelling memory:** "**C**omplementary" comes before "**S**upplementary" in the alphabet, just like $90$ comes before $180$ on the number line. **C = 90, S = 180.**`,
      },
      {
        id: 'ar7-2-comp-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the complement of a $62^\\circ$ angle?',
              options: ['$28^\\circ$', '$38^\\circ$', '$118^\\circ$', '$128^\\circ$'],
              correctAnswer: 0,
              explanation: 'Complements add to $90^\\circ$, so $90^\\circ - 62^\\circ = 28^\\circ$.',
            },
            {
              question: 'What is the supplement of a $45^\\circ$ angle?',
              options: ['$45^\\circ$', '$55^\\circ$', '$135^\\circ$', '$145^\\circ$'],
              correctAnswer: 2,
              explanation: 'Supplements add to $180^\\circ$, so $180^\\circ - 45^\\circ = 135^\\circ$.',
            },
            {
              question: 'Two angles add up to $90^\\circ$. They are called:',
              options: ['Supplementary', 'Complementary', 'Vertical', 'Adjacent'],
              correctAnswer: 1,
              explanation: 'Angles that add to $90^\\circ$ are **complementary**. (Supplementary angles add to $180^\\circ$.)',
            },
          ],
        },
      },
      {
        id: 'ar7-2-classify-dropdown',
        type: 'dropdown-select' as const,
        content: `**Name That Pair** 🔽

For each pair of angle measures, choose whether they are complementary, supplementary, or neither.`,
        exercise: {
          dropdowns: [
            { label: '$40^\\circ$ and $50^\\circ$ are:', options: ['Complementary', 'Supplementary', 'Neither'] },
            { label: '$120^\\circ$ and $60^\\circ$ are:', options: ['Complementary', 'Supplementary', 'Neither'] },
            { label: '$70^\\circ$ and $70^\\circ$ are:', options: ['Complementary', 'Supplementary', 'Neither'] },
          ],
          correctAnswers: ['Complementary', 'Supplementary', 'Neither'],
          hint1: 'Add the two measures, then check: does it equal $90^\\circ$, $180^\\circ$, or something else?',
          hint2: '$40 + 50 = 90$, and $120 + 60 = 180$.',
          hint3: '$70 + 70 = 140$, which is neither $90$ nor $180$, so they are **neither**.',
          explanation: '$40+50=90$ → complementary. $120+60=180$ → supplementary. $70+70=140$ → neither.',
        },
      },
      {
        id: 'ar7-2-subtraction-tip',
        type: 'text' as const,
        content: `## Finding a Missing Partner

Naming the pair is half the job. The other half is **finding the missing angle**, and it is always one subtraction:

$$\\text{missing complement} = 90^\\circ - \\text{known angle}$$
$$\\text{missing supplement} = 180^\\circ - \\text{known angle}$$

**Example:** If two angles are supplementary and one is $58^\\circ$, the other is $180^\\circ - 58^\\circ = 122^\\circ$.

> 💡 Decide the total **first** ($90^\\circ$ or $180^\\circ$), then subtract. Try a few below.`,
      },
      {
        id: 'ar7-2-find-partner',
        type: 'input-boxes' as const,
        content: `**Find the Missing Angle** 🧮

Use subtraction to find each missing partner (type the number of degrees).

**1)** The complement of $25^\\circ$ is $\\,?$
**2)** The supplement of $90^\\circ$ is $\\,?$
**3)** The complement of $1^\\circ$ is $\\,?$
**4)** The supplement of $173^\\circ$ is $\\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['65', '90', '89', '7'],
          hint1: 'Complement means $90^\\circ - \\text{angle}$; supplement means $180^\\circ - \\text{angle}$.',
          hint2: '$90 - 25 = 65$ and $180 - 90 = 90$.',
          hint3: '$90 - 1 = 89$ and $180 - 173 = 7$.',
          explanation: '1) $90-25=65^\\circ$.  2) $180-90=90^\\circ$.  3) $90-1=89^\\circ$.  4) $180-173=7^\\circ$.',
        },
      },
      {
        id: 'ar7-2-wrap',
        type: 'text' as const,
        content: `## Wrapping Up Part 2

> ⚠️ **Common mix-up:** Do not confuse *complementary* with *supplementary*. A right angle ($90^\\circ$) is the total for **c**omplementary; a straight line ($180^\\circ$) is the total for **s**upplementary.

So far the missing angle has always been a plain number. In Part 3 we meet **vertical angles** and then start using **variables** like $x$ — that is where the algebra begins.`,
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'angle-relationships-grade7',
    sections: [
      {
        id: 'ar7-3-intro',
        type: 'text' as const,
        content: `# 📐 Angle Relationships

**Part 3 of 5 — Vertical Angles & Angles on a Line**

---

> 🔑 **Two new facts:** (1) When two straight lines cross, the angles **directly across** from each other are equal — these are **vertical angles**. (2) Angles in a row that form a straight line add up to $180^\\circ$ — a **linear pair**.`,
      },
      {
        id: 'ar7-3-vertical',
        type: 'text' as const,
        content: `## Vertical Angles

When two straight lines cross, they make an "X" shape with **four** angles. The angles that sit **directly across** from each other (not next to each other) are called **vertical angles**, and they are always **equal**.

$$\\text{Vertical angles are congruent (equal): } \\angle 1 = \\angle 3 \\text{ and } \\angle 2 = \\angle 4$$

The angles that sit **next to** each other along a straight line form a **linear pair**, and they are **supplementary** (add to $180^\\circ$).

### Example

Two lines cross. One of the four angles is $70^\\circ$.
- The angle **directly across** is also $70^\\circ$ (vertical angles).
- Each angle **next to** the $70^\\circ$ is $180^\\circ - 70^\\circ = 110^\\circ$ (linear pair).
- And the fourth angle, across from a $110^\\circ$, is also $110^\\circ$.

> 💡 The four angles always come in two matching pairs, and the four of them go all the way around: $70 + 110 + 70 + 110 = 360^\\circ$. ✓`,
      },
      {
        id: 'ar7-3-vertical-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Two lines cross. One angle measures $55^\\circ$. What is the measure of the angle **directly across** from it?',
              options: ['$35^\\circ$', '$55^\\circ$', '$125^\\circ$', '$145^\\circ$'],
              correctAnswer: 1,
              explanation: 'Vertical angles (directly across) are **equal**, so it is also $55^\\circ$.',
            },
            {
              question: 'Using the same crossing lines, what is the measure of the angle **right next to** that $55^\\circ$ angle?',
              options: ['$55^\\circ$', '$90^\\circ$', '$125^\\circ$', '$135^\\circ$'],
              correctAnswer: 2,
              explanation: 'An adjacent angle forms a linear pair (a straight line), so it is supplementary: $180^\\circ - 55^\\circ = 125^\\circ$.',
            },
          ],
        },
      },
      {
        id: 'ar7-3-line-dropdown',
        type: 'dropdown-select' as const,
        content: `**Angles on a Straight Line** 🔽

Three angles sit in a row along a straight line, so all three add to $180^\\circ$. Two of them are $50^\\circ$ and $90^\\circ$.`,
        exercise: {
          dropdowns: [
            { label: 'The three angles must add to:', options: ['$90^\\circ$', '$180^\\circ$', '$360^\\circ$'] },
            { label: 'So far $50^\\circ + 90^\\circ$ uses up:', options: ['$120^\\circ$', '$140^\\circ$', '$150^\\circ$'] },
            { label: 'The third angle must be:', options: ['$30^\\circ$', '$40^\\circ$', '$50^\\circ$'] },
          ],
          correctAnswers: ['$180^\\circ$', '$140^\\circ$', '$40^\\circ$'],
          hint1: 'Angles that form a straight line always total $180^\\circ$.',
          hint2: 'Add the two known angles: $50 + 90 = 140$.',
          hint3: 'Subtract from the total: $180 - 140 = 40$.',
          explanation: 'Straight line $= 180^\\circ$. The known angles use $50+90=140^\\circ$, so the third is $180-140=40^\\circ$.',
        },
      },
      {
        id: 'ar7-3-four-angles',
        type: 'text' as const,
        content: `## All Four Angles at a Crossing

When two lines cross, knowing **one** angle gives you **all four**. Here is the routine:

1. The angle **directly across** is **equal** (vertical angle).
2. Each angle **next to** it is $180^\\circ - \\text{angle}$ (linear pair).
3. The last angle is across from one of those, so it matches it.

The two values always repeat: angle, its supplement, angle, its supplement. Use this routine on the crossing below.`,
      },
      {
        id: 'ar7-3-drill',
        type: 'input-boxes' as const,
        content: `**Crossing Lines** 🧮

Two straight lines cross, making four angles. One of them is $130^\\circ$. Find each of the other three (type the number of degrees).

**1)** The angle **directly across** from the $130^\\circ$ is $\\,?$
**2)** An angle **next to** the $130^\\circ$ (linear pair) is $\\,?$
**3)** The remaining fourth angle is $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['130', '50', '50'],
          hint1: 'The angle directly across is a vertical angle, so it is **equal** to $130^\\circ$.',
          hint2: 'An angle next to $130^\\circ$ is supplementary: $180 - 130 = 50$.',
          hint3: 'The fourth angle is across from a $50^\\circ$ angle, so it is also $50^\\circ$.',
          explanation: '1) Vertical → $130^\\circ$.  2) Linear pair → $180-130=50^\\circ$.  3) Vertical to that $50^\\circ$ → $50^\\circ$. Check: $130+50+130+50=360^\\circ$. ✓',
        },
      },
      {
        id: 'ar7-3-wrap',
        type: 'text' as const,
        content: `## Wrapping Up Part 3

You now have the full toolkit of relationships:

| Relationship | Rule |
|--------------|------|
| Complementary | add to $90^\\circ$ |
| Supplementary / linear pair | add to $180^\\circ$ |
| Vertical | **equal** to each other |
| All the way around | add to $360^\\circ$ |

In Part 4 we stop using known numbers for the unknown angle and start calling it $x$. Each rule above becomes a quick **equation** to solve.`,
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'angle-relationships-grade7',
    sections: [
      {
        id: 'ar7-4-intro',
        type: 'text' as const,
        content: `# 📐 Angle Relationships

**Part 4 of 5 — Writing & Solving Equations for Unknown Angles**

---

> 🔑 **The Move:** This is the heart of Grade 7 (CCSS 7.G.B.5). Pick the right relationship ($90^\\circ$, $180^\\circ$, equal, or $360^\\circ$), write an **equation**, and solve for $x$ with the same algebra you already know.`,
      },
      {
        id: 'ar7-4-one-step',
        type: 'text' as const,
        content: `## One-Step Equations

### Example: Complementary

An angle and its complement: one is $x$, the other is $52^\\circ$. They add to $90^\\circ$.

$$x + 52 = 90 \\;\\Rightarrow\\; x = 90 - 52 = 38^\\circ$$

### Example: Supplementary

Angles $x$ and $135^\\circ$ form a straight line, so they add to $180^\\circ$.

$$x + 135 = 180 \\;\\Rightarrow\\; x = 180 - 135 = 45^\\circ$$

### Example: Vertical

Two vertical angles are $x$ and $77^\\circ$. Vertical angles are equal, so:

$$x = 77^\\circ$$

> 💡 **Strategy:** First decide which total fits ($90$, $180$, equal, or $360$). Then the equation almost writes itself.`,
      },
      {
        id: 'ar7-4-one-step-drill',
        type: 'input-boxes' as const,
        content: `**Solve for $x$** 🧮

Write the right equation in your head, then solve (type the number of degrees).

**1)** $x$ and $66^\\circ$ are complementary: $x = \\,?$
**2)** $x$ and $48^\\circ$ are supplementary: $x = \\,?$
**3)** $x$ and $103^\\circ$ are vertical angles: $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['24', '132', '103'],
          hint1: 'Complementary → $x + 66 = 90$. Supplementary → $x + 48 = 180$. Vertical → $x = $ the other angle.',
          hint2: '$90 - 66 = 24$ and $180 - 48 = 132$.',
          hint3: 'Vertical angles are **equal**, so $x = 103$ with no subtraction needed.',
          explanation: '1) $90-66=24^\\circ$.  2) $180-48=132^\\circ$.  3) Vertical → $x=103^\\circ$.',
        },
      },
      {
        id: 'ar7-4-two-step',
        type: 'text' as const,
        content: `## Two-Step Equations

Sometimes both angles contain $x$, or there are extra numbers. Add up the parts, set them equal to the right total, then solve.

### Example: Two angles that make a right angle

Two complementary angles measure $2x$ and $x$. Together they make $90^\\circ$.

$$2x + x = 90 \\;\\Rightarrow\\; 3x = 90 \\;\\Rightarrow\\; x = 30$$

So the angles are $2x = 60^\\circ$ and $x = 30^\\circ$. (Check: $60 + 30 = 90$. ✓)

### Example: Supplementary with a constant

Two supplementary angles are $(x + 20)^\\circ$ and $x^\\circ$.

$$(x + 20) + x = 180 \\;\\Rightarrow\\; 2x + 20 = 180 \\;\\Rightarrow\\; 2x = 160 \\;\\Rightarrow\\; x = 80$$

So the angles are $100^\\circ$ and $80^\\circ$. (Check: $100 + 80 = 180$. ✓)

> ⚠️ **Watch out:** $x$ is usually **not** the final answer by itself. Plug $x$ back in to report the actual angle measures, and always check that your two measures add to the right total.`,
      },
      {
        id: 'ar7-4-two-step-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Two supplementary angles measure $3x$ and $x$. Which equation finds $x$?',
              options: ['$3x + x = 90$', '$3x + x = 180$', '$3x = x + 180$', '$3x \\cdot x = 180$'],
              correctAnswer: 1,
              explanation: 'Supplementary angles add to $180^\\circ$, so $3x + x = 180$ (which gives $4x = 180$, $x = 45$).',
            },
            {
              question: 'Solve $3x = 90$ for $x$.',
              options: ['$x = 27$', '$x = 30$', '$x = 87$', '$x = 270$'],
              correctAnswer: 1,
              explanation: 'Divide both sides by $3$: $x = 90 \\div 3 = 30$.',
            },
          ],
        },
      },
      {
        id: 'ar7-4-two-step-drill',
        type: 'input-boxes' as const,
        content: `**Two-Step Solving** 🧮

Set up the equation, solve for $x$, then find the angles where asked.

**1)** Complementary angles $4x$ and $x$: solve $4x + x = 90$. $x = \\,?$
**2)** Supplementary angles $(x+30)$ and $x$: solve $(x+30)+x = 180$. $x = \\,?$
**3)** For problem 2, the **larger** angle measures $\\,?$ degrees.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['18', '75', '105'],
          hint1: 'For #1: $4x + x = 5x = 90$, so $x = 90 \\div 5$.',
          hint2: 'For #2: $(x+30)+x = 2x + 30 = 180$, so $2x = 150$ and $x = 75$.',
          hint3: 'The larger angle in #2 is $x + 30 = 75 + 30 = 105^\\circ$.',
          explanation: '1) $5x=90 \\Rightarrow x=18$.  2) $2x+30=180 \\Rightarrow 2x=150 \\Rightarrow x=75$.  3) larger $= x+30 = 105^\\circ$ (and $105+75=180$ ✓).',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'angle-relationships-grade7',
    sections: [
      {
        id: 'ar7-5-intro',
        type: 'text' as const,
        content: `# 📐 Angle Relationships

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) classify angles, (2) use complementary and supplementary pairs, (3) use vertical angles and linear pairs, and (4) write and solve equations for unknown angles. Let's put it all together.`,
      },
      {
        id: 'ar7-5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| If the angles are… | Then… | Equation to write |
|--------------------|-------|--------------------|
| Complementary | they add to $90^\\circ$ | parts $= 90$ |
| Supplementary / a linear pair | they add to $180^\\circ$ | parts $= 180$ |
| Vertical (across crossing lines) | they are **equal** | one part $=$ other part |
| All the way around a point | they add to $360^\\circ$ | parts $= 360$ |

> ⚠️ **Two reminders:** (1) Vertical angles are *equal*, not supplementary — do not subtract from $180^\\circ$. (2) After solving for $x$, plug it back in and check that your angle measures add to the correct total.`,
      },
      {
        id: 'ar7-5-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Total** 🔽

For each situation, choose the total the angles must add to (or "equal" if they are vertical angles).`,
        exercise: {
          dropdowns: [
            { label: 'Two angles that form a straight line:', options: ['$90^\\circ$', '$180^\\circ$', '$360^\\circ$', 'they are equal'] },
            { label: 'Two angles directly across crossing lines:', options: ['$90^\\circ$', '$180^\\circ$', '$360^\\circ$', 'they are equal'] },
            { label: 'Two angles that together form a right angle:', options: ['$90^\\circ$', '$180^\\circ$', '$360^\\circ$', 'they are equal'] },
            { label: 'All the angles meeting around a single point:', options: ['$90^\\circ$', '$180^\\circ$', '$360^\\circ$', 'they are equal'] },
          ],
          correctAnswers: ['$180^\\circ$', 'they are equal', '$90^\\circ$', '$360^\\circ$'],
          hint1: 'A straight line is $180^\\circ$; a right angle is $90^\\circ$; a full turn around a point is $360^\\circ$.',
          hint2: 'Vertical angles (directly across crossing lines) are **equal**, not a sum.',
          hint3: 'Right angle → $90^\\circ$; straight line → $180^\\circ$; around a point → $360^\\circ$; across → equal.',
          explanation: 'Straight line $=180^\\circ$; vertical → equal; right angle $=90^\\circ$; around a point $=360^\\circ$.',
        },
      },
      {
        id: 'ar7-5-strategy',
        type: 'text' as const,
        content: `## Your Three-Step Strategy

For any unknown-angle problem, run this routine:

1. **Spot the relationship** — complementary, supplementary, vertical, or around a point?
2. **Write the equation** — set the parts equal to $90$, $180$, $360$, or to each other.
3. **Solve and check** — find $x$, plug it back in, and confirm the totals work.

Apply all three steps to the mixed problems below.`,
      },
      {
        id: 'ar7-5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

Find each unknown (type the number of degrees).

**1)** $x$ and $34^\\circ$ are complementary: $x = \\,?$
**2)** Two vertical angles are $5x$ and $80^\\circ$: solve $5x = 80$, so $x = \\,?$
**3)** Supplementary angles $(2x)$ and $(x)$: solve $2x + x = 180$, so $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['56', '16', '60'],
          hint1: 'Complementary → $x + 34 = 90$, so $x = 90 - 34$.',
          hint2: 'Vertical angles are equal → $5x = 80$, so $x = 80 \\div 5$.',
          hint3: 'Supplementary → $2x + x = 3x = 180$, so $x = 180 \\div 3$.',
          explanation: '1) $90-34=56^\\circ$.  2) $5x=80 \\Rightarrow x=16$.  3) $3x=180 \\Rightarrow x=60$.',
        },
      },
      {
        id: 'ar7-5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'An angle measures $40^\\circ$. What is its supplement?',
              options: ['$40^\\circ$', '$50^\\circ$', '$140^\\circ$', '$320^\\circ$'],
              correctAnswer: 2,
              explanation: 'Supplements add to $180^\\circ$, so $180^\\circ - 40^\\circ = 140^\\circ$.',
            },
            {
              question: 'Two lines cross. One of the four angles is $112^\\circ$. What is the angle **directly across** from it?',
              options: ['$68^\\circ$', '$78^\\circ$', '$112^\\circ$', '$248^\\circ$'],
              correctAnswer: 2,
              explanation: 'Vertical angles (directly across) are **equal**, so it is also $112^\\circ$.',
            },
            {
              question: 'Two supplementary angles are $(x + 10)^\\circ$ and $x^\\circ$. What is the value of $x$?',
              options: ['$x = 75$', '$x = 80$', '$x = 85$', '$x = 95$'],
              correctAnswer: 2,
              explanation: '$(x+10)+x = 180 \\Rightarrow 2x + 10 = 180 \\Rightarrow 2x = 170 \\Rightarrow x = 85$. (Angles: $95^\\circ$ and $85^\\circ$.)',
            },
          ],
        },
      },
    ],
  },
]
