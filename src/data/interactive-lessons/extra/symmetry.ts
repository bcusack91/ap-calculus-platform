import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Symmetry (Grade 4 Math).
 * Registry key: 'symmetry' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. Grade-4 friendly: favors
 * concept checks (multiple-choice + dropdown) with light counting via input-boxes.
 * Math uses doubled backslashes (template-literal strings); the degree symbol is
 * written literally (°). Pedagogical arc: line symmetry → finding lines → reflection
 * (mirror) symmetry → rotational symmetry → mixed mastery.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'symmetry',
    sections: [
      {
        id: 'sym1-intro',
        type: 'text' as const,
        content: `# 🪞 Symmetry

**Part 1 of 5 — What Is a Line of Symmetry?**

---

### Topics in This Part

| Section |
|---------|
| The Fold Test |
| Lines of Symmetry |
| Symmetric vs. Not Symmetric |

> 🔑 **Key Idea:** A shape has **symmetry** when one half is a perfect mirror image of the other half. A **line of symmetry** is the special line you could fold the shape along so the two halves match up *exactly*.`,
      },
      {
        id: 'sym1-foldtest',
        type: 'text' as const,
        content: `## The Fold Test

The easiest way to find symmetry is to imagine **folding** the shape.

If you can fold a shape so that **both halves line up perfectly** — every edge and corner landing right on top of the other side — then the fold line is a **line of symmetry**.

Think about folding a paper heart down the middle:

| Step | What Happens |
|------|--------------|
| Fold the heart in half (top to bottom) | The two bumps land on top of each other ✅ |
| The halves match exactly | The fold line **is** a line of symmetry ✅ |

> 💡 **Try it for real:** Cut out a shape, then fold it. If the two halves cover each other with no part sticking out, you found a line of symmetry!`,
      },
      {
        id: 'sym1-foldtest-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A line of symmetry is a line you could fold a shape along so that...',
              options: ['The shape gets bigger', 'Both halves match up perfectly', 'The shape turns into a circle', 'One half disappears'],
              correctAnswer: 1,
              explanation: 'A line of symmetry folds the shape into two halves that match up exactly, like a mirror image.',
            },
            {
              question: 'You fold a shape in half and one half sticks out past the other. What does this tell you?',
              options: ['That fold is a line of symmetry', 'That fold is NOT a line of symmetry', 'The shape has no sides', 'The shape is a circle'],
              correctAnswer: 1,
              explanation: 'If the halves do not match perfectly (one part sticks out), then that fold line is NOT a line of symmetry.',
            },
          ],
        },
      },
      {
        id: 'sym1-symmetric-or-not',
        type: 'text' as const,
        content: `## Symmetric vs. Not Symmetric

Some shapes and pictures are **symmetric** (they have at least one line of symmetry). Others are **not symmetric** (no fold makes the halves match).

| Picture | Symmetric? | Why |
|---------|------------|-----|
| A butterfly | ✅ Yes | The left wing matches the right wing |
| A perfect square | ✅ Yes | It folds to match many ways |
| The letter **A** | ✅ Yes | Fold down the middle and both sides match |
| Your left hand | ❌ No | One side does not match the other |
| The letter **R** | ❌ No | No fold makes the two halves match |

> 💡 **Look around the room!** Many things are symmetric: your face, a stop sign, a snowflake, the wings of an airplane. Nature and people love symmetry because it looks balanced.`,
      },
      {
        id: 'sym1-identify-drill',
        type: 'dropdown-select' as const,
        content: `**Symmetric or Not?** 🔽

Decide whether each picture has a line of symmetry.`,
        exercise: {
          dropdowns: [
            { label: 'A butterfly with matching wings:', options: ['Symmetric', 'Not symmetric'] },
            { label: 'The capital letter **A**:', options: ['Symmetric', 'Not symmetric'] },
            { label: 'The capital letter **F**:', options: ['Symmetric', 'Not symmetric'] },
          ],
          correctAnswers: ['Symmetric', 'Symmetric', 'Not symmetric'],
          hint1: 'Ask yourself: can I fold this so both halves match exactly?',
          hint2: 'A butterfly folds down the middle and the wings match. The letter A folds down the middle too.',
          hint3: 'The letter F has nothing on its bottom-left, so no fold makes the halves match.',
          explanation: 'A butterfly and the letter A both have a line of symmetry. The letter F has no line of symmetry — no fold makes its two halves match.',
        },
      },
      {
        id: 'sym1-zero-one-many',
        type: 'text' as const,
        content: `## Zero, One, or Many

A shape doesn't just "have symmetry" or "not have symmetry" — it can have a **different number** of fold lines.

| Shape | How Many Fold Lines Match? |
|-------|----------------------------|
| A scalene triangle (all sides different) | **0** — no fold works |
| The letter **A** | **1** — only the up-and-down fold |
| A square | **4** — it matches many ways! |

> 💡 **Counting is the next skill.** Knowing *whether* a shape is symmetric is step one. Counting *how many* lines of symmetry it has is step two — and that's exactly what Part 2 is about.`,
      },
      {
        id: 'sym1-count-intro-drill',
        type: 'input-boxes' as const,
        content: `**How Many Fold Lines?** 🧮

Using the table above, enter how many lines of symmetry each one has.

**1)** A scalene triangle (all sides different lengths)
**2)** The capital letter **A**`,
        exercise: {
          boxes: 2,
          correctAnswers: ['0', '1'],
          hint1: 'Try to picture folding each one so the halves match.',
          hint2: 'A scalene triangle has no two sides the same, so no fold makes it match.',
          hint3: 'The letter A only matches when you fold it straight down the middle — that is 1 line.',
          explanation: '1) A scalene triangle = 0 lines of symmetry (no fold works). 2) The letter A = 1 line of symmetry (the up-and-down fold).',
        },
      },
      {
        id: 'sym1-wrap',
        type: 'text' as const,
        content: `## What You Learned

You now know the most important idea in this whole lesson:

> 🔑 **A line of symmetry is a fold line that makes both halves match perfectly.**

A shape can have **zero, one, or many** lines of symmetry. In Part 2, you'll learn how to **count** all the lines of symmetry a shape has — and you'll discover a cool pattern hidden inside regular shapes.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'symmetry',
    sections: [
      {
        id: 'sym2-intro',
        type: 'text' as const,
        content: `# 🪞 Symmetry

**Part 2 of 5 — Counting Lines of Symmetry**

---

> 🔑 **The Idea:** A shape can have more than one line of symmetry. Lines of symmetry can run **up-and-down** (vertical), **side-to-side** (horizontal), or **slanted** (diagonal). Our job is to find *all* of them.`,
      },
      {
        id: 'sym2-directions',
        type: 'text' as const,
        content: `## Lines Can Point Different Ways

A line of symmetry doesn't have to be straight up and down. There are three directions to check:

| Direction | What It Looks Like | Example Fold |
|-----------|--------------------|--------------|
| **Vertical** | up and down ⬍ | Fold left side onto right side |
| **Horizontal** | side to side ⬌ | Fold top onto bottom |
| **Diagonal** | slanted ⟍ or ⟋ | Fold corner onto corner |

A **square** is a great example. It has **4** lines of symmetry:
- 1 vertical (up and down)
- 1 horizontal (side to side)
- 2 diagonal (corner to corner)

> 💡 **Don't forget the diagonals!** Many students count only the up-down and side-to-side folds and miss the slanted ones. Always check corner-to-corner too.`,
      },
      {
        id: 'sym2-table',
        type: 'text' as const,
        content: `## Lines of Symmetry in Common Shapes

| Shape | Lines of Symmetry |
|-------|-------------------|
| Square | **4** |
| Rectangle (not a square) | **2** |
| Equilateral triangle (all sides equal) | **3** |
| Isosceles triangle (2 sides equal) | **1** |
| Scalene triangle (no sides equal) | **0** |
| Circle | **endless** (infinite) |

> ⚠️ **Watch out — a rectangle is not a square!** A long rectangle has only **2** lines of symmetry (up-down and side-to-side). Its diagonals do **not** work, because folding corner-to-corner would not make the halves match.`,
      },
      {
        id: 'sym2-count-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How many lines of symmetry does a square have?',
              options: ['1', '2', '4', '0'],
              correctAnswer: 2,
              explanation: 'A square has 4 lines of symmetry: 1 vertical, 1 horizontal, and 2 diagonal (corner to corner).',
            },
            {
              question: 'How many lines of symmetry does a long rectangle (that is NOT a square) have?',
              options: ['4', '2', '1', '0'],
              correctAnswer: 1,
              explanation: 'A non-square rectangle has only 2 lines of symmetry: up-and-down, and side-to-side. The diagonals do NOT work for a rectangle.',
            },
          ],
        },
      },
      {
        id: 'sym2-regular-pattern',
        type: 'text' as const,
        content: `## A Cool Pattern in Regular Shapes

A **regular** polygon is one where **all the sides are equal AND all the angles are equal** (like a perfect square or a perfect hexagon).

> 🔑 **The Pattern:** A regular polygon has the **same number of lines of symmetry as it has sides!**

$$\\text{lines of symmetry} = \\text{number of sides}$$

| Regular Shape | Sides | Lines of Symmetry |
|---------------|-------|-------------------|
| Equilateral triangle | 3 | **3** |
| Square | 4 | **4** |
| Regular pentagon | 5 | **5** |
| Regular hexagon | 6 | **6** |
| Regular octagon | 8 | **8** |

> 💡 A circle is like a shape with *endless* sides, which is why it has *endless* lines of symmetry — you can fold it through the center in any direction!`,
      },
      {
        id: 'sym2-count-drill',
        type: 'input-boxes' as const,
        content: `**Count the Lines** 🧮

Use the pattern "lines of symmetry = number of sides" for regular shapes.

**1)** How many lines of symmetry does an **equilateral triangle** have?
**2)** How many lines of symmetry does a **regular hexagon** (6 sides) have?
**3)** How many lines of symmetry does a **regular octagon** (8 sides) have?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '6', '8'],
          hint1: 'For a regular shape, count the sides — that is the number of lines of symmetry.',
          hint2: 'An equilateral triangle has 3 equal sides. A hexagon has 6.',
          hint3: 'An octagon has 8 sides, so it has 8 lines of symmetry.',
          explanation: '1) Equilateral triangle = 3 lines. 2) Regular hexagon = 6 lines. 3) Regular octagon = 8 lines. For any regular polygon, lines of symmetry = number of sides.',
        },
      },
      {
        id: 'sym2-mix-text',
        type: 'text' as const,
        content: `## Careful: Regular vs. Not Regular

The "sides = lines of symmetry" pattern **only** works for **regular** shapes (all sides and angles equal).

> ⚠️ A **rectangle** has 4 sides but only **2** lines of symmetry, because its sides are *not* all equal — it is **not** a regular shape. The pattern does not apply to it!

So always ask first: *"Is this shape regular?"* If yes, count the sides. If no, you have to check each fold by hand.`,
      },
      {
        id: 'sym2-match-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Lines of Symmetry** 🔽

Choose how many lines of symmetry each shape has.`,
        exercise: {
          dropdowns: [
            { label: 'A square:', options: ['1', '2', '4'] },
            { label: 'A long rectangle (not a square):', options: ['1', '2', '4'] },
            { label: 'A scalene triangle (no equal sides):', options: ['0', '1', '3'] },
          ],
          correctAnswers: ['4', '2', '0'],
          hint1: 'A square is regular, so count its sides: 4.',
          hint2: 'A rectangle is not regular — it only folds up-down and side-to-side: 2 lines.',
          hint3: 'A scalene triangle has no matching sides, so no fold makes the halves match: 0 lines.',
          explanation: 'Square → 4 lines (it is regular). Long rectangle → 2 lines (not regular). Scalene triangle → 0 lines (no fold works).',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'symmetry',
    sections: [
      {
        id: 'sym3-intro',
        type: 'text' as const,
        content: `# 🪞 Symmetry

**Part 3 of 5 — Symmetry in Letters & Real Life**

---

> 🔑 **The Idea:** Letters of the alphabet are a perfect place to practice symmetry. Some letters fold **up and down**, some fold **side to side**, some fold **both ways**, and some don't fold at all!`,
      },
      {
        id: 'sym3-letter-types',
        type: 'text' as const,
        content: `## Sorting Letters by Their Symmetry

Look at capital letters. We sort them by **which way** they fold:

| Type of Symmetry | Letters | How It Folds |
|------------------|---------|--------------|
| **Vertical only** (up-down fold) | A, M, T, U, V, W, Y | Fold left side onto right |
| **Horizontal only** (side-to-side fold) | B, C, D, E, K | Fold top onto bottom |
| **Both directions** | H, I, O, X | Folds up-down AND side-to-side |
| **No line of symmetry** | F, G, J, L, P, Q, R, S, Z | No fold makes the halves match |

> 💡 **Try this trick:** To test for a **vertical** line, picture a mirror standing straight up in the middle of the letter. If the reflection looks exactly like the other half, it has vertical symmetry.`,
      },
      {
        id: 'sym3-letter-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which capital letter has a VERTICAL line of symmetry (folds left side onto right side)?',
              options: ['F', 'A', 'L', 'R'],
              correctAnswer: 1,
              explanation: 'The letter A folds down the middle and both sides match, so it has a vertical line of symmetry. F, L, and R do not fold to match.',
            },
            {
              question: 'Which capital letter has NO line of symmetry at all?',
              options: ['H', 'T', 'R', 'O'],
              correctAnswer: 2,
              explanation: 'The letter R has no fold that makes its halves match, so it has no line of symmetry. H and O fold both ways, and T folds vertically.',
            },
          ],
        },
      },
      {
        id: 'sym3-both-ways',
        type: 'text' as const,
        content: `## Letters That Fold Two Ways

A few special letters have **two** lines of symmetry — one vertical *and* one horizontal:

| Letter | Vertical Fold? | Horizontal Fold? | Total Lines |
|--------|----------------|------------------|-------------|
| **H** | ✅ Yes | ✅ Yes | **2** |
| **I** | ✅ Yes | ✅ Yes | **2** |
| **X** | ✅ Yes | ✅ Yes | **2** |
| **O** | ✅ Yes | ✅ Yes | **2** (or more, since it's round!) |

> 🔑 **Big idea:** Just like shapes, letters can have **0, 1, or 2** lines of symmetry. The more "balanced" a letter looks, the more lines of symmetry it usually has.`,
      },
      {
        id: 'sym3-letter-dropdown',
        type: 'dropdown-select' as const,
        content: `**Which Way Does It Fold?** 🔽

Pick the kind of line symmetry each capital letter has.`,
        exercise: {
          dropdowns: [
            { label: 'The letter **T**:', options: ['Vertical only', 'Horizontal only', 'Both ways', 'No symmetry'] },
            { label: 'The letter **B**:', options: ['Vertical only', 'Horizontal only', 'Both ways', 'No symmetry'] },
            { label: 'The letter **H**:', options: ['Vertical only', 'Horizontal only', 'Both ways', 'No symmetry'] },
            { label: 'The letter **P**:', options: ['Vertical only', 'Horizontal only', 'Both ways', 'No symmetry'] },
          ],
          correctAnswers: ['Vertical only', 'Horizontal only', 'Both ways', 'No symmetry'],
          hint1: 'Vertical fold = left onto right. Horizontal fold = top onto bottom.',
          hint2: 'T folds only left-onto-right. B folds only top-onto-bottom.',
          hint3: 'H matches both ways. P does not match with any fold.',
          explanation: 'T = vertical only. B = horizontal only. H = both ways (2 lines). P = no symmetry (no fold makes its halves match).',
        },
      },
      {
        id: 'sym3-count-letters-text',
        type: 'text' as const,
        content: `## Turning Folds Into Numbers

Once you know *which way* a letter folds, you can count its lines of symmetry:

- Folds **only one way** (vertical OR horizontal) → **1** line.
- Folds **both ways** (vertical AND horizontal) → **2** lines.
- Folds **no way** → **0** lines.

> 🔑 **Quick recap:** A, B, C, D, E, K, M, T, U, V, W, Y → 1 line (vertical *or* horizontal). H, I, O, X → 2 lines (both ways). F, G, J, L, P, Q, R, S, Z → 0 lines.`,
      },
      {
        id: 'sym3-count-letters-drill',
        type: 'input-boxes' as const,
        content: `**Count the Lines in Each Letter** 🧮

How many lines of symmetry does each capital letter have? *(Enter 0, 1, or 2.)*

**1)** The letter **A**
**2)** The letter **X**
**3)** The letter **R**`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '2', '0'],
          hint1: 'Check both a vertical fold (left-right) and a horizontal fold (top-bottom).',
          hint2: 'A folds only one way. X folds two ways.',
          hint3: 'R does not fold to match in any direction.',
          explanation: '1) A = 1 line (vertical only). 2) X = 2 lines (vertical and horizontal). 3) R = 0 lines (no symmetry).',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'symmetry',
    sections: [
      {
        id: 'sym4-intro',
        type: 'text' as const,
        content: `# 🪞 Symmetry

**Part 4 of 5 — Reflections (Mirror Images)**

---

> 🔑 **The Idea:** A **reflection** flips a shape over a line, like looking in a mirror. The line is called the **line of reflection**, and the flipped copy is the **mirror image**.`,
      },
      {
        id: 'sym4-reflection',
        type: 'text' as const,
        content: `## What Is a Reflection?

When you stand in front of a mirror, your reflection is **the same distance behind the mirror** as you are in front of it. A reflection in math works the exact same way.

**Two rules of a reflection:**
1. The mirror image is the **same size and shape** as the original (it does not grow or shrink).
2. Each point and its reflection are the **same distance** from the line of reflection, just on opposite sides.

> 💡 **Mirror writing:** Hold up a word to a mirror and it reads backwards! That's because a reflection flips left and right. The shape stays the same, but it faces the other way.

> ⚠️ A reflection does **not** turn or spin a shape — it only **flips** it over a line.`,
      },
      {
        id: 'sym4-reflection-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'When you reflect a shape across a line, the mirror image is...',
              options: ['Bigger than the original', 'Smaller than the original', 'The same size as the original', 'Always a circle'],
              correctAnswer: 2,
              explanation: 'A reflection never changes the size of a shape. The mirror image is exactly the same size and shape — it just faces the other way.',
            },
            {
              question: 'A point is 3 squares to the LEFT of the mirror line. Where is its reflection?',
              options: ['3 squares to the right of the line', '6 squares to the left of the line', 'Right on the line', '3 squares up from the line'],
              correctAnswer: 0,
              explanation: 'A reflection puts the image the same distance on the opposite side. 3 squares left becomes 3 squares right of the line.',
            },
          ],
        },
      },
      {
        id: 'sym4-grid',
        type: 'text' as const,
        content: `## Reflecting Points on a Grid

To reflect a point over a vertical mirror line, count how far the point is from the line, then count the **same distance** to the other side.

### Worked Example

A mirror line runs straight up and down. A dot sits **2 squares to the left** of the line.

$$\\text{Original: 2 left} \\;\\longrightarrow\\; \\text{Reflection: 2 right}$$

The reflection lands **2 squares to the right** of the line, at the same height.

| Original Distance from Line | Side | Reflection Distance | Side |
|------------------------------|------|---------------------|------|
| 2 squares | left | 2 squares | right |
| 5 squares | right | 5 squares | left |
| 0 squares (on the line) | — | 0 squares (stays put) | — |

> 🔑 **Same distance, opposite side.** A point sitting *right on* the mirror line does not move at all — its reflection is itself!`,
      },
      {
        id: 'sym4-grid-drill',
        type: 'input-boxes' as const,
        content: `**Reflect the Point** 🧮

A mirror line runs straight up and down. For each point, the reflection is the same distance on the **opposite** side. How many squares from the line is the reflection?

**1)** A point is 4 squares LEFT of the line. Its reflection is how many squares from the line?
**2)** A point is 7 squares RIGHT of the line. Its reflection is how many squares from the line?
**3)** A point sits exactly ON the line. Its reflection is how many squares from the line?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '7', '0'],
          hint1: 'A reflection keeps the SAME distance from the mirror line, just on the other side.',
          hint2: '4 left reflects to 4 right. The distance stays 4.',
          hint3: 'A point on the line does not move, so its distance is 0.',
          explanation: '1) 4 squares (same distance, now on the right). 2) 7 squares (same distance, now on the left). 3) 0 squares — a point on the mirror line stays exactly where it is.',
        },
      },
      {
        id: 'sym4-connect',
        type: 'text' as const,
        content: `## Reflections and Lines of Symmetry Are Connected!

Here is the big secret that ties Part 1 and Part 4 together:

> 🔑 **A line of symmetry is a line where the shape reflects onto itself.** If you reflect a symmetric shape across its line of symmetry, you get the **exact same shape** back!

That's *why* the two halves match when you fold — folding is just reflecting one half onto the other.

> 💡 So "line of symmetry" and "line of reflection that maps a shape onto itself" mean the same thing. Cool, right?`,
      },
      {
        id: 'sym4-reflection-dropdown',
        type: 'dropdown-select' as const,
        content: `**True or False: Reflections** 🔽

A reflection flips a shape over a line. Decide if each statement is true or false.`,
        exercise: {
          dropdowns: [
            { label: 'A reflection keeps the shape the same size.', options: ['True', 'False'] },
            { label: 'A reflection makes the shape bigger.', options: ['True', 'False'] },
            { label: 'A point on the mirror line stays exactly where it is.', options: ['True', 'False'] },
            { label: 'A reflection spins the shape around in a circle.', options: ['True', 'False'] },
          ],
          correctAnswers: ['True', 'False', 'True', 'False'],
          hint1: 'Remember the two rules: same size, and same distance on the opposite side.',
          hint2: 'A reflection never changes the size of a shape.',
          hint3: 'A reflection FLIPS over a line — it does not spin or turn. Spinning is rotational symmetry (Part 5).',
          explanation: 'True (same size), False (it never grows), True (a point on the line does not move), False (a reflection flips — it does not spin).',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'symmetry',
    sections: [
      {
        id: 'sym5-intro',
        type: 'text' as const,
        content: `# 🪞 Symmetry

**Part 5 of 5 — Rotational Symmetry & Mastery Check**

---

> 🔑 **A New Kind of Symmetry:** So far we've folded and flipped. Now we'll **spin**! A shape has **rotational symmetry** if you can turn it part of the way around and it looks **exactly the same** as it did before you turned it.`,
      },
      {
        id: 'sym5-rotational',
        type: 'text' as const,
        content: `## What Is Rotational Symmetry?

Imagine sticking a pin through the center of a shape and spinning it. If the shape looks **identical** at some point *before* a full turn, it has **rotational symmetry**.

- A **square** looks the same every quarter-turn (4 times as you spin it all the way around).
- An **equilateral triangle** looks the same every third of a turn (3 times around).
- A **circle** looks the same no matter how little you turn it!

| Shape | Looks the Same This Many Times in One Full Spin |
|-------|-------------------------------------------------|
| Square | **4** |
| Equilateral triangle | **3** |
| Regular pentagon | **5** |
| Regular hexagon | **6** |
| Circle | **endless** |

> 💡 The letters **S, N, and Z** have rotational symmetry — turn them halfway around (upside down) and they look the same — even though they have **no** line of symmetry!`,
      },
      {
        id: 'sym5-rotational-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A shape has ROTATIONAL symmetry when...',
              options: ['You can fold it in half to match', 'You can turn it part way and it looks the same', 'It has exactly 4 sides', 'It is the color red'],
              correctAnswer: 1,
              explanation: 'Rotational symmetry means you can spin (turn) a shape part of the way around and it looks exactly the same as before.',
            },
            {
              question: 'In one full spin, how many times does an equilateral triangle look exactly the same?',
              options: ['1', '2', '3', '6'],
              correctAnswer: 2,
              explanation: 'An equilateral triangle looks the same 3 times in one full turn — once every third of a spin.',
            },
          ],
        },
      },
      {
        id: 'sym5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| To find... | Do this... |
|------------|------------|
| **A line of symmetry** | Fold the shape; if both halves match, it's a line of symmetry |
| **Lines in a regular shape** | Count the sides — that's the number of lines of symmetry |
| **A reflection** | Flip the shape over a line; same size, same distance, opposite side |
| **Rotational symmetry** | Spin the shape; does it look the same before a full turn? |

> 🔑 **Three kinds of symmetry to remember:** fold (line symmetry), flip (reflection), and spin (rotational symmetry).

> ⚠️ **Don't forget the diagonals** when counting lines of symmetry in a square — it has 4, not 2!`,
      },
      {
        id: 'sym5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Counting Review** 🧮

**1)** How many lines of symmetry does a **square** have?
**2)** How many lines of symmetry does a **regular pentagon** (5 sides) have?
**3)** A point is 6 squares left of a mirror line. How many squares from the line is its reflection?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '5', '6'],
          hint1: 'A square folds 4 ways: up-down, side-to-side, and 2 diagonals.',
          hint2: 'For a regular shape, lines of symmetry = number of sides. A pentagon has 5 sides.',
          hint3: 'A reflection keeps the same distance, just on the opposite side.',
          explanation: '1) Square = 4 lines. 2) Regular pentagon = 5 lines (one per side). 3) Reflection = 6 squares from the line (same distance, opposite side).',
        },
      },
      {
        id: 'sym5-ready',
        type: 'text' as const,
        content: `## You're Ready!

Look how much you can do now. You can:

1. **Test** whether a shape is symmetric (the fold test).
2. **Count** lines of symmetry in shapes and letters.
3. **Reflect** points and figures across a mirror line.
4. **Spot** rotational symmetry when a shape spins onto itself.

> 💡 Take your time on the Exit Quiz below — read each choice carefully and picture the fold, the flip, or the spin in your head before you answer.`,
      },
      {
        id: 'sym5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'How many lines of symmetry does a long rectangle (NOT a square) have?',
              options: ['4', '2', '1', '0'],
              correctAnswer: 1,
              explanation: 'A non-square rectangle has 2 lines of symmetry: up-and-down and side-to-side. Its diagonals do not make matching halves.',
            },
            {
              question: 'Which letter has a line of symmetry?',
              options: ['R', 'F', 'T', 'G'],
              correctAnswer: 2,
              explanation: 'The letter T has a vertical line of symmetry — fold it left onto right and both sides match. R, F, and G have no line of symmetry.',
            },
            {
              question: 'You reflect a triangle across a line. The mirror image is...',
              options: ['Twice as big', 'The same size, just flipped', 'Turned into a square', 'Half as big'],
              correctAnswer: 1,
              explanation: 'A reflection never changes the size of a shape. The mirror image is the same size and shape, just facing the other way.',
            },
          ],
        },
      },
    ],
  },
]
