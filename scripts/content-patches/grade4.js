/**
 * Content patches for Grade 4 topics:
 * - grade4-fractions (7 parts)
 * - grade4-geometry-measurement (7 parts)
 * - grade4-multi-digit-multiplication (7 parts)
 */
module.exports = {

'grade4-fractions': [
  // Part 1: Equivalent Fractions
  {
    introContent: `
# 📐 Equivalent Fractions

**Part 1 of 7 — Equivalent Fractions**

Two fractions are **equivalent** if they represent the same value.

Create equivalent fractions by **multiplying or dividing** both the numerator and denominator by the same non-zero number.

### Examples
- $\\frac{1}{2} = \\frac{2}{4} = \\frac{3}{6} = \\frac{4}{8}$
- $\\frac{2}{3} = \\frac{4}{6} = \\frac{6}{9}$
- $\\frac{6}{8} = \\frac{3}{4}$ (divided both by 2)
    `,
    workedContent: `
## Worked Example

**Find the missing numerator:** $\\frac{3}{5} = \\frac{?}{15}$

**Step 1:** Denominators: $5 \\to 15$, multiplied by $3$.

**Step 2:** Multiply numerator by same: $3 \\times 3 = 9$.

**Answer:** $\\frac{3}{5} = \\frac{9}{15}$ ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Strategy |
|---|---------|----------|
| 1 | Find equivalent fractions for $\\frac{2}{5}$ | Multiply top and bottom by 2, 3, or 4 |
| 2 | Simplify $\\frac{12}{16}$ | Divide by GCF |
| 3 | Is $\\frac{3}{4} = \\frac{9}{12}$? | Cross-multiply to check |
    `,
    mcq1: { questions: [{ question: 'Which fraction is equivalent to $\\\\frac{2}{3}$?', options: ['$\\\\frac{4}{6}$','$\\\\frac{3}{4}$','$\\\\frac{4}{9}$','$\\\\frac{2}{6}$'], correctAnswer: 0, explanation: '$\\\\frac{2}{3} = \\\\frac{2 \\\\times 2}{3 \\\\times 2} = \\\\frac{4}{6}$.' }] },
    mcq2: { questions: [{ question: 'Which method tests whether two fractions are equivalent?', options: ['Add the numerators','Cross-multiply and compare','Subtract the denominators','Multiply the numerators only'], correctAnswer: 1, explanation: 'Cross-multiplication: $\\\\frac{a}{b} = \\\\frac{c}{d}$ if and only if $a \\\\times d = b \\\\times c$.' }] },
    input: { boxes: 3, correctAnswers: ['4','6','3'], content: `
**Equivalent Fractions Practice** 🧮

1) $\\frac{1}{2} = \\frac{?}{8}$ — What goes in the numerator?

2) $\\frac{2}{3} = \\frac{?}{9}$ — What goes in the numerator?

3) Simplify $\\frac{9}{12}$. What is the numerator of the simplified fraction?
    `, hint1: 'The denominator went from 2 to 8. What did you multiply by? Do the same to the numerator.', hint2: 'The denominator went from 3 to 9. What factor was used?', hint3: 'Find the greatest common factor of 9 and 12, then divide both by it.', explanation: '1) 2→8 means ×4, so 1×4=4. 2) 3→9 means ×3, so 2×3=6. 3) GCF(9,12)=3. 9÷3=3, 12÷3=4, so 3/4.' },
    dropdown: { dropdowns: [{ label: '$\\\\frac{3}{4}$ is equivalent to', options: ['$\\\\frac{6}{8}$','$\\\\frac{6}{12}$','$\\\\frac{9}{16}$','$\\\\frac{4}{5}$'] }, { label: 'To simplify a fraction, you divide by the', options: ['Greatest Common Factor','Least Common Multiple','Denominator','Numerator'] }], correctAnswers: ['$\\\\frac{6}{8}$','Greatest Common Factor'], hint1: 'Multiply both parts of 3/4 by the same number.', hint2: 'Simplifying means making the numbers smaller.', explanation: '3/4 = 6/8 (multiply by 2). Simplify by dividing by the GCF.' }
  },
  // Part 2: Comparing Fractions
  {
    introContent: `
# 📐 Comparing Fractions

**Part 2 of 7 — Comparing Fractions**

To compare fractions with different denominators:

### Method 1: Common Denominator
Find the LCD, convert, compare numerators.

### Method 2: Cross-Multiplication
$\\frac{a}{b}$ vs $\\frac{c}{d}$: compare $a \\times d$ and $b \\times c$.
    `,
    workedContent: `
## Worked Example

**Compare $\\frac{3}{5}$ and $\\frac{2}{3}$.**

Cross-multiply: $3 \\times 3 = 9$ and $5 \\times 2 = 10$.

Since $9 < 10$: $\\frac{3}{5} < \\frac{2}{3}$ ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Hint |
|---|---------|------|
| 1 | Compare $\\frac{1}{3}$ and $\\frac{1}{4}$ | Larger denominator = smaller pieces |
| 2 | Order: $\\frac{1}{2}, \\frac{3}{8}, \\frac{5}{8}$ | Convert to eighths |
| 3 | Find a fraction between $\\frac{1}{4}$ and $\\frac{1}{2}$ | Common denominator |
    `,
    mcq1: { questions: [{ question: 'Which is greater: $\\\\frac{5}{8}$ or $\\\\frac{3}{4}$?', options: ['$\\\\frac{3}{4}$','$\\\\frac{5}{8}$','They are equal','Cannot determine'], correctAnswer: 0, explanation: '$\\\\frac{3}{4} = \\\\frac{6}{8}$, and $\\\\frac{6}{8} > \\\\frac{5}{8}$.' }] },
    mcq2: { questions: [{ question: 'Using cross-multiplication, $\\\\frac{a}{b} > \\\\frac{c}{d}$ when:', options: ['$a \\\\times d > b \\\\times c$','$a \\\\times b > c \\\\times d$','$a + d > b + c$','$a > c$'], correctAnswer: 0, explanation: 'Cross-multiply: if $ad > bc$, then $\\\\frac{a}{b} > \\\\frac{c}{d}$.' }] },
    input: { boxes: 3, correctAnswers: ['>','<','='], content: `
**Compare Fractions** 🧮

Write >, <, or = :

1) $\\frac{3}{4}$ _____ $\\frac{2}{3}$

2) $\\frac{1}{3}$ _____ $\\frac{2}{5}$

3) $\\frac{4}{6}$ _____ $\\frac{2}{3}$
    `, hint1: 'Find common denominator 12: 9/12 vs 8/12.', hint2: 'Common denominator 15: 5/15 vs 6/15.', hint3: 'Try simplifying 4/6 by dividing both parts by 2.', explanation: '1) 9/12 > 8/12, so >. 2) 5/15 < 6/15, so <. 3) 4/6 = 2/3, so =.' },
    dropdown: { dropdowns: [{ label: 'The larger of $\\\\frac{7}{10}$ and $\\\\frac{3}{5}$ is', options: ['$\\\\frac{7}{10}$','$\\\\frac{3}{5}$','They are equal','Cannot tell'] }, { label: 'To compare fractions with unlike denominators, first find the', options: ['Least Common Denominator','Greatest Common Factor','Sum of numerators','Product'] }], correctAnswers: ['$\\\\frac{7}{10}$','Least Common Denominator'], hint1: 'Convert 3/5 to tenths.', hint2: 'What must the denominators share?', explanation: '3/5 = 6/10, and 7/10 > 6/10. Use the LCD to compare.' }
  },
  // Part 3: Adding Like Denominators
  {
    introContent: `
# 📐 Adding Fractions (Like Denominators)

**Part 3 of 7 — Adding Like Denominators**

When fractions share a denominator, add the numerators and keep the denominator:

$$\\frac{a}{d} + \\frac{b}{d} = \\frac{a+b}{d}$$

Always simplify the result!
    `,
    workedContent: `
## Worked Example

$\\frac{3}{8} + \\frac{4}{8} = \\frac{7}{8}$ ✅

$\\frac{5}{6} + \\frac{1}{6} = \\frac{6}{6} = 1$ ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Key Idea |
|---|---------|----------|
| 1 | $\\frac{1}{5} + \\frac{2}{5}$ | Keep denominator |
| 2 | $\\frac{3}{10} + \\frac{7}{10}$ | Simplify result |
| 3 | $\\frac{2}{9} + \\frac{4}{9}$ | Check for simplification |
    `,
    mcq1: { questions: [{ question: 'What is $\\\\frac{2}{7} + \\\\frac{3}{7}$?', options: ['$\\\\frac{5}{7}$','$\\\\frac{5}{14}$','$\\\\frac{6}{7}$','$\\\\frac{2}{3}$'], correctAnswer: 0, explanation: 'Same denominator: $\\\\frac{2+3}{7} = \\\\frac{5}{7}$.' }] },
    mcq2: { questions: [{ question: 'When adding fractions with the same denominator, you should:', options: ['Keep the denominator the same','Add the denominators','Multiply the denominators','Find the LCM'], correctAnswer: 0, explanation: 'Like denominators: keep the denominator, add only the numerators.' }] },
    input: { boxes: 3, correctAnswers: ['5','7','1'], content: `
**Adding Practice** 🧮

1) $\\frac{2}{8} + \\frac{3}{8} = \\frac{?}{8}$ — Numerator?

2) $\\frac{3}{10} + \\frac{4}{10} = \\frac{?}{10}$ — Numerator?

3) $\\frac{5}{6} + \\frac{1}{6} = $ ? (simplify to a whole number)
    `, hint1: 'Add the numerators: 2 + 3.', hint2: 'Add the numerators: 3 + 4.', hint3: '(5+1)/6 = 6/6. What does that equal?', explanation: '1) 2+3=5. 2) 3+4=7. 3) 6/6 = 1.' },
    dropdown: { dropdowns: [{ label: '$\\\\frac{4}{9} + \\\\frac{2}{9}$ equals', options: ['$\\\\frac{6}{9}$','$\\\\frac{6}{18}$','$\\\\frac{8}{9}$','$\\\\frac{4}{18}$'] }, { label: '$\\\\frac{6}{9}$ simplifies to', options: ['$\\\\frac{2}{3}$','$\\\\frac{3}{4}$','$\\\\frac{1}{3}$','Cannot simplify'] }], correctAnswers: ['$\\\\frac{6}{9}$','$\\\\frac{2}{3}$'], hint1: 'Add numerators, keep denominator.', hint2: 'GCF of 6 and 9 is 3. Divide both.', explanation: '(4+2)/9 = 6/9. GCF = 3: 6/9 = 2/3.' }
  },
  // Part 4: Mixed Numbers
  {
    introContent: `
# 📐 Mixed Numbers

**Part 4 of 7 — Mixed Numbers**

A **mixed number** = whole number + fraction: $2\\frac{3}{4}$

### Mixed → Improper
$2\\frac{3}{4} = \\frac{2 \\times 4 + 3}{4} = \\frac{11}{4}$

### Improper → Mixed
$\\frac{11}{4} = 2\\frac{3}{4}$ (11 ÷ 4 = 2 R 3)
    `,
    workedContent: `
## Worked Example

**Convert $3\\frac{2}{5}$ to improper:** $3 \\times 5 + 2 = 17 \\Rightarrow \\frac{17}{5}$ ✅

**Convert $\\frac{13}{4}$ to mixed:** $13 ÷ 4 = 3$ R $1 \\Rightarrow 3\\frac{1}{4}$ ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Type |
|---|---------|------|
| 1 | Convert $2\\frac{1}{3}$ to improper | Mixed → Improper |
| 2 | Convert $\\frac{15}{4}$ to mixed | Improper → Mixed |
| 3 | Add $1\\frac{1}{4} + 2\\frac{2}{4}$ | Mixed addition |
    `,
    mcq1: { questions: [{ question: 'What is $1\\\\frac{3}{5}$ as an improper fraction?', options: ['$\\\\frac{8}{5}$','$\\\\frac{13}{5}$','$\\\\frac{5}{3}$','$\\\\frac{3}{5}$'], correctAnswer: 0, explanation: '$1 \\\\times 5 + 3 = 8$, so $\\\\frac{8}{5}$.' }] },
    mcq2: { questions: [{ question: 'Which mixed number equals $\\\\frac{17}{3}$?', options: ['$5\\\\frac{2}{3}$','$4\\\\frac{2}{3}$','$5\\\\frac{1}{3}$','$6\\\\frac{2}{3}$'], correctAnswer: 0, explanation: '$17 ÷ 3 = 5$ R $2$.' }] },
    input: { boxes: 3, correctAnswers: ['5','3','4'], content: `
**Mixed Numbers Practice** 🧮

1) Convert $2\\frac{1}{2}$ to improper. What is the numerator?

2) Convert $\\frac{7}{2}$ to a mixed number. What is the whole number part?

3) $1\\frac{3}{4} + 2\\frac{1}{4} = $ ? (whole number)
    `, hint1: 'Multiply: 2 × 2 + 1.', hint2: 'Divide: 7 ÷ 2 = ? remainder ?', hint3: 'Add whole parts (1+2) and fractions (3/4 + 1/4).', explanation: '1) 2(2)+1=5. 2) 7÷2=3 R 1. 3) 3 + 4/4 = 3+1 = 4.' },
    dropdown: { dropdowns: [{ label: '$4\\\\frac{1}{3}$ as an improper fraction is', options: ['$\\\\frac{13}{3}$','$\\\\frac{12}{3}$','$\\\\frac{4}{3}$','$\\\\frac{41}{3}$'] }, { label: '$\\\\frac{11}{5}$ as a mixed number is', options: ['$2\\\\frac{1}{5}$','$1\\\\frac{6}{5}$','$2\\\\frac{2}{5}$','$3\\\\frac{1}{5}$'] }], correctAnswers: ['$\\\\frac{13}{3}$','$2\\\\frac{1}{5}$'], hint1: '4 × 3 + 1 = ?', hint2: '11 ÷ 5 = ? remainder ?', explanation: '4(3)+1=13. 11÷5=2 R 1.' }
  },
  // Part 5: Fractions on Number Lines
  {
    introContent: `
# 📐 Fractions on Number Lines

**Part 5 of 7 — Fractions on Number Lines**

To place $\\frac{a}{b}$ on a number line:
1. Divide the space between whole numbers into $b$ equal parts
2. Count $a$ parts from the left
    `,
    workedContent: `
## Worked Example

**Place $\\frac{3}{4}$ on a 0–1 number line.**

Divide 0–1 into 4 equal parts. The 3rd mark is $\\frac{3}{4}$. ✅
    `,
    practiceContent: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Place $\\frac{1}{3}$ on 0–1 | Divide into 3 parts |
| 2 | Place $1\\frac{1}{2}$ on 0–2 | Past the 1 mark |
| 3 | Identify fractions at marks | Count equal divisions |
    `,
    mcq1: { questions: [{ question: 'On a 0–1 line divided into 6 parts, the 4th mark is:', options: ['$\\\\frac{4}{6}$','$\\\\frac{6}{4}$','$\\\\frac{4}{1}$','$\\\\frac{1}{4}$'], correctAnswer: 0, explanation: '4th mark out of 6 parts = $\\\\frac{4}{6}$.' }] },
    mcq2: { questions: [{ question: 'Where is $\\\\frac{5}{3}$ on a number line?', options: ['Between 1 and 2','Between 0 and 1','At exactly 2','Between 2 and 3'], correctAnswer: 0, explanation: '$\\\\frac{5}{3} = 1\\\\frac{2}{3}$, between 1 and 2.' }] },
    input: { boxes: 3, correctAnswers: ['3','6','5'], content: `
**Number Lines** 🧮

1) A 0–1 line divided into 4 parts. The 3rd mark = $\\frac{?}{4}$. Numerator?

2) Halfway between $\\frac{1}{2}$ and $1$: express as $\\frac{?}{8}$. Numerator?

3) How many eighths from 0 is $\\frac{5}{8}$?
    `, hint1: '1st=1/4, 2nd=2/4, 3rd=?', hint2: '1/2 = 4/8, 1 = 8/8. Halfway between 4 and 8?', hint3: '5/8 means 5 groups of one-eighth.', explanation: '1) 3. 2) (4+8)/2 = 6. 3) 5.' },
    dropdown: { dropdowns: [{ label: '$\\\\frac{7}{4}$ is between which whole numbers?', options: ['1 and 2','0 and 1','2 and 3','3 and 4'] }, { label: 'On a line divided into fifths, the 2nd mark is', options: ['$\\\\frac{2}{5}$','$\\\\frac{5}{2}$','$\\\\frac{1}{5}$','$\\\\frac{2}{1}$'] }], correctAnswers: ['1 and 2','$\\\\frac{2}{5}$'], hint1: 'Convert 7/4 to a mixed number.', hint2: 'Each mark = one-fifth.', explanation: '7/4 = 1 3/4 → between 1 and 2. 2nd mark = 2/5.' }
  },
  // Part 6: Problem-Solving Workshop
  {
    introContent: `
# 📐 Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Apply fraction skills to real-world problems!

### Steps
1. **Read** — What is being asked?
2. **Plan** — Which operation?
3. **Solve** — Show your work
4. **Check** — Does the answer make sense?
    `,
    workedContent: `
## Worked Example

**A recipe calls for $\\frac{3}{4}$ cup of milk. You halve the recipe. How much milk?**

$\\frac{3}{4} \\times \\frac{1}{2} = \\frac{3}{8}$ cup ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Strategy |
|---|---------|----------|
| 1 | Share 3 pizzas among 4 people | Division |
| 2 | Ate 2/8 of pie, friend ate 3/8. How much left? | Subtraction |
| 3 | $\\frac{5}{6}$ m rope − $\\frac{1}{6}$ m cut | Subtraction |
    `,
    mcq1: { questions: [{ question: 'A pizza has 8 slices. You eat 3 slices. Fraction left?', options: ['$\\\\frac{5}{8}$','$\\\\frac{3}{8}$','$\\\\frac{8}{5}$','$\\\\frac{5}{3}$'], correctAnswer: 0, explanation: '(8−3)/8 = 5/8 remains.' }] },
    mcq2: { questions: [{ question: 'Sara has $\\\\frac{3}{4}$ yd fabric, uses $\\\\frac{1}{4}$ yd, buys $\\\\frac{2}{4}$ yd. Total?', options: ['1 yard','$\\\\frac{3}{4}$ yard','$\\\\frac{1}{2}$ yard','$\\\\frac{5}{4}$ yards'], correctAnswer: 0, explanation: '3/4 − 1/4 + 2/4 = 4/4 = 1 yard.' }] },
    input: { boxes: 3, correctAnswers: ['10','6','8'], content: `
**Word Problems** 🧮

1) A pizza has 12 slices. You eat $\\frac{1}{6}$. How many slices left?

2) Sarah has $\\frac{9}{12}$ yd ribbon. Uses $\\frac{3}{12}$ yd. How many twelfths remain?

3) $\\frac{2}{3}$ of 12 students passed. How many passed?
    `, hint1: '1/6 of 12 = 12 ÷ 6. Then subtract from 12.', hint2: '9 − 3 = ? twelfths.', hint3: 'Multiply: (2/3) × 12.', explanation: '1) 12÷6=2 eaten, 12−2=10. 2) 9−3=6. 3) (2/3)×12=8.' },
    dropdown: { dropdowns: [{ label: '1/4 of 20 students absent means how many?', options: ['5','4','10','8'] }, { label: 'After cutting 2/5 of a 10 m rope, remaining length is', options: ['6 meters','8 meters','2 meters','4 meters'] }], correctAnswers: ['5','6 meters'], hint1: '(1/4) × 20 = ?', hint2: '(2/5) × 10 = ? cut off. Subtract from 10.', explanation: '(1/4)×20=5. (2/5)×10=4 cut, 10−4=6 remain.' }
  },
  // Part 7: Review & Applications
  {
    introContent: `
# 📐 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Concepts Review
- **Equivalent fractions**: Multiply/divide both parts by same number
- **Comparing**: Common denominator, then compare numerators
- **Adding** (like denom.): Add numerators, keep denominator
- **Mixed numbers**: Convert between mixed and improper
- **Number lines**: Fractions as points between whole numbers
    `,
    workedContent: `
## Worked Example

**Simplify $\\frac{12}{18}$, then compare to $\\frac{1}{2}$.**

GCF(12,18) = 6: $\\frac{12}{18} = \\frac{2}{3}$

$\\frac{2}{3} = \\frac{4}{6}$ and $\\frac{1}{2} = \\frac{3}{6}$ → $\\frac{2}{3} > \\frac{1}{2}$ ✅
    `,
    practiceContent: `
## Practice

| # | Topic | Problem |
|---|-------|---------|
| 1 | Simplify | $\\frac{8}{12}$ |
| 2 | Compare | $\\frac{5}{6}$ vs $\\frac{7}{8}$ |
| 3 | Add | $\\frac{3}{10} + \\frac{7}{10}$ |
    `,
    mcq1: { questions: [{ question: 'Simplified $\\\\frac{8}{12}$ is:', options: ['$\\\\frac{2}{3}$','$\\\\frac{4}{6}$','$\\\\frac{3}{4}$','Already simplified'], correctAnswer: 0, explanation: 'GCF(8,12)=4. 8÷4=2, 12÷4=3.' }] },
    mcq2: { questions: [{ question: 'A student says $\\\\frac{3}{5} > \\\\frac{7}{10}$. Correct?', options: ['No — $\\\\frac{3}{5} = \\\\frac{6}{10} < \\\\frac{7}{10}$','Yes — 3 and 5 are closer','Cannot compare','Yes — fifths are bigger'], correctAnswer: 0, explanation: '3/5 = 6/10, and 6/10 < 7/10.' }] },
    input: { boxes: 3, correctAnswers: ['3','7','3'], content: `
**Review** 🧮

1) Simplify $\\frac{9}{12}$. Numerator?

2) $\\frac{3}{5} + \\frac{4}{5} = \\frac{?}{5}$. Numerator?

3) $\\frac{3}{4} \\times 4 = $ ? (whole number)
    `, hint1: 'GCF of 9 and 12?', hint2: 'Add the numerators.', hint3: '(3×4)/4 = 12/4.', explanation: '1) GCF=3: 3/4. 2) 3+4=7. 3) 12/4=3.' },
    dropdown: { dropdowns: [{ label: '$2\\\\frac{1}{4}$ improper is', options: ['$\\\\frac{9}{4}$','$\\\\frac{8}{4}$','$\\\\frac{21}{4}$','$\\\\frac{3}{4}$'] }, { label: 'To add unlike denominators, first find the', options: ['Least Common Denominator','Greatest Common Factor','Sum','Product'] }], correctAnswers: ['$\\\\frac{9}{4}$','Least Common Denominator'], hint1: '2 × 4 + 1 = ?', hint2: 'Denominators must match.', explanation: '2(4)+1=9. Need LCD to add fractions.' }
  }
],

'grade4-geometry-measurement': [
  // Part 1: Lines & Angles
  {
    introContent: `
# 📏 Lines & Angles

**Part 1 of 7 — Lines & Angles**

### Types of Angles
- **Acute**: less than 90°
- **Right**: exactly 90°
- **Obtuse**: between 90° and 180°
- **Straight**: exactly 180°

### Angle Pairs
- **Complementary**: sum to 90°
- **Supplementary**: sum to 180°
    `,
    workedContent: `
## Worked Example

**Classify an angle of 135°.**

$90° < 135° < 180°$ → **obtuse** ✅

**Find the supplement of 65°.**

$180° - 65° = 115°$ ✅
    `,
    practiceContent: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Acute vs obtuse | Compare to 90° |
| 2 | Complementary | Sum to 90° |
| 3 | Supplementary | Sum to 180° |
    `,
    mcq1: { questions: [{ question: 'An angle of exactly 90° is called:', options: ['Right angle','Acute angle','Obtuse angle','Straight angle'], correctAnswer: 0, explanation: 'A right angle = exactly 90°.' }] },
    mcq2: { questions: [{ question: 'Two supplementary angles: one is 65°. The other?', options: ['115°','25°','90°','65°'], correctAnswer: 0, explanation: '180° − 65° = 115°.' }] },
    input: { boxes: 3, correctAnswers: ['90','180','360'], content: `
**Angle Measures** 🧮

1) A right angle measures _____ degrees.

2) A straight angle measures _____ degrees.

3) A full rotation measures _____ degrees.
    `, hint1: 'Think of a corner of a square.', hint2: 'A straight line = half turn.', hint3: 'A full circle.', explanation: '1) 90°. 2) 180°. 3) 360°.' },
    dropdown: { dropdowns: [{ label: 'A 45° angle is classified as', options: ['Acute','Right','Obtuse','Straight'] }, { label: 'A 120° angle is classified as', options: ['Obtuse','Acute','Right','Reflex'] }], correctAnswers: ['Acute','Obtuse'], hint1: 'Is 45° less than 90°?', hint2: 'Is 120° between 90° and 180°?', explanation: '45° < 90° → acute. 90° < 120° < 180° → obtuse.' }
  },
  // Part 2: Classifying Shapes
  {
    introContent: `
# 📏 Classifying Shapes

**Part 2 of 7 — Classifying Shapes**

### Triangles
- **Equilateral**: 3 equal sides
- **Isosceles**: 2 equal sides
- **Scalene**: no equal sides

### Quadrilaterals
- **Square**: 4 equal sides, 4 right angles
- **Rectangle**: opposite sides equal, 4 right angles
- **Parallelogram**: opposite sides parallel & equal
- **Trapezoid**: 1 pair of parallel sides
    `,
    workedContent: `
## Worked Example

**A shape has 4 equal sides but no right angles. What is it?**

4 equal sides → could be square or rhombus.
No right angles → **rhombus** ✅
    `,
    practiceContent: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Count sides | Tri=3, Quad=4, Pent=5, Hex=6 |
| 2 | Identify properties | Parallel sides, equal angles |
| 3 | Shape hierarchy | A square is a special rectangle |
    `,
    mcq1: { questions: [{ question: 'A triangle with all sides equal is:', options: ['Equilateral','Isosceles','Scalene','Right'], correctAnswer: 0, explanation: 'Equilateral = three equal sides.' }] },
    mcq2: { questions: [{ question: 'Which is always true?', options: ['Every square is a rectangle','Every rectangle is a square','Every rhombus is a square','Every trapezoid is a parallelogram'], correctAnswer: 0, explanation: 'A square has all rectangle properties plus equal sides.' }] },
    input: { boxes: 3, correctAnswers: ['4','0','6'], content: `
**Shape Properties** 🧮

1) How many sides does a quadrilateral have?

2) How many curved sides does a triangle have?

3) How many faces does a cube have?
    `, hint1: '"Quad" means four.', hint2: 'Triangles have only straight sides.', hint3: 'Think of a die.', explanation: '1) 4. 2) 0. 3) 6.' },
    dropdown: { dropdowns: [{ label: 'A shape with 5 sides is called a', options: ['Pentagon','Hexagon','Quadrilateral','Octagon'] }, { label: 'A shape with 8 sides is called an', options: ['Octagon','Hexagon','Decagon','Pentagon'] }], correctAnswers: ['Pentagon','Octagon'], hint1: '"Penta" = 5.', hint2: '"Octa" = 8.', explanation: 'Pentagon = 5. Octagon = 8.' }
  },
  // Part 3: Perimeter
  {
    introContent: `
# 📏 Perimeter

**Part 3 of 7 — Perimeter**

**Perimeter** = total distance around a shape.

- **Rectangle**: $P = 2l + 2w$
- **Square**: $P = 4s$
- **Triangle**: $P = a + b + c$
- **Regular polygon**: $P = n \\times s$
    `,
    workedContent: `
## Worked Example

**Rectangle: length 7 cm, width 3 cm.**

$P = 2(7) + 2(3) = 14 + 6 = 20$ cm ✅
    `,
    practiceContent: `
## Practice

| # | Shape | Dimensions |
|---|-------|------------|
| 1 | Square | Side = 6 cm |
| 2 | Rectangle | 9 × 4 cm |
| 3 | Triangle | 5, 7, 8 cm |
    `,
    mcq1: { questions: [{ question: 'Perimeter of a square, side = 9 cm?', options: ['36 cm','81 cm','18 cm','27 cm'], correctAnswer: 0, explanation: 'P = 4 × 9 = 36 cm.' }] },
    mcq2: { questions: [{ question: 'Rectangle perimeter = 24 m, width = 5 m. Length?', options: ['7 m','12 m','19 m','14 m'], correctAnswer: 0, explanation: '24 = 2l + 10 → l = 7 m.' }] },
    input: { boxes: 3, correctAnswers: ['20','18','24'], content: `
**Perimeter** 🧮

1) Square, side 5 cm. Perimeter (cm)?

2) Rectangle 5 cm × 4 cm. Perimeter (cm)?

3) Regular hexagon, side 4 cm. Perimeter (cm)?
    `, hint1: 'P = 4s for a square.', hint2: 'P = 2l + 2w.', hint3: 'Hexagon has 6 equal sides.', explanation: '1) 4(5)=20. 2) 2(5)+2(4)=18. 3) 6(4)=24.' },
    dropdown: { dropdowns: [{ label: 'Rectangle perimeter formula is', options: ['P = 2l + 2w','P = l × w','P = 4s','P = l + w'] }, { label: 'Triangle with sides 3, 4, 5 has perimeter', options: ['12','7','60','15'] }], correctAnswers: ['P = 2l + 2w','12'], hint1: 'Perimeter = sum of all sides.', hint2: '3 + 4 + 5 = ?', explanation: 'Rectangle: P=2l+2w. Triangle: 3+4+5=12.' }
  },
  // Part 4: Area of Rectangles
  {
    introContent: `
# 📏 Area of Rectangles

**Part 4 of 7 — Area of Rectangles**

**Area** = space inside, measured in **square units**.

$$A = l \\times w$$

For squares: $A = s^2$
    `,
    workedContent: `
## Worked Example

**Rectangle: 8 m × 5 m.** $A = 8 \\times 5 = 40$ m² ✅
    `,
    practiceContent: `
## Practice

| # | Shape | Dimensions |
|---|-------|------------|
| 1 | Rectangle | 6 × 4 cm |
| 2 | Rectangle | 7 × 5 m |
| 3 | Square | Side = 10 in |
    `,
    mcq1: { questions: [{ question: 'Area of rectangle 12 cm × 3 cm?', options: ['36 cm²','30 cm²','15 cm²','72 cm²'], correctAnswer: 0, explanation: 'A = 12 × 3 = 36 cm².' }] },
    mcq2: { questions: [{ question: 'Square garden, area 49 m². Side length?', options: ['7 m','24.5 m','14 m','49 m'], correctAnswer: 0, explanation: 's = √49 = 7 m.' }] },
    input: { boxes: 3, correctAnswers: ['24','35','100'], content: `
**Area** 🧮

1) Rectangle 6 × 4 cm. Area (cm²)?

2) Rectangle 7 × 5 m. Area (m²)?

3) Square, side 10 in. Area (in²)?
    `, hint1: 'A = l × w = 6 × 4.', hint2: 'A = 7 × 5.', hint3: 'A = s² = 10².', explanation: '1) 24. 2) 35. 3) 100.' },
    dropdown: { dropdowns: [{ label: 'Area is measured in', options: ['Square units','Linear units','Cubic units','No units'] }, { label: 'Rectangle area 30 m², length 6 m. Width?', options: ['5 m','24 m','180 m','36 m'] }], correctAnswers: ['Square units','5 m'], hint1: 'Area describes a 2D region.', hint2: '30 = 6 × w → w = ?', explanation: 'Area → square units. w = 30 ÷ 6 = 5 m.' }
  },
  // Part 5: Symmetry
  {
    introContent: `
# 📏 Symmetry

**Part 5 of 7 — Symmetry**

A **line of symmetry** divides a shape into two matching halves.

| Shape | Lines of Symmetry |
|-------|-------------------|
| Circle | Infinite |
| Square | 4 |
| Rectangle | 2 |
| Equilateral △ | 3 |
| Isosceles △ | 1 |
    `,
    workedContent: `
## Worked Example

**Lines of symmetry in a regular pentagon?**

Regular pentagon → 5 equal sides, so **5 lines of symmetry** ✅
    `,
    practiceContent: `
## Practice

| # | Shape | Lines of Symmetry |
|---|-------|-------------------|
| 1 | Rectangle | 2 |
| 2 | Equilateral triangle | 3 |
| 3 | Regular hexagon | 6 |
    `,
    mcq1: { questions: [{ question: 'How many lines of symmetry in a regular hexagon?', options: ['6','3','2','12'], correctAnswer: 0, explanation: 'Regular n-gon has n lines. Hexagon: 6.' }] },
    mcq2: { questions: [{ question: 'Which letter has exactly 1 line of symmetry?', options: ['A','H','X','O'], correctAnswer: 0, explanation: 'A has one vertical line. H, X, O have 2+.' }] },
    input: { boxes: 3, correctAnswers: ['2','4','1'], content: `
**Symmetry** 🧮

1) Lines of symmetry in a rectangle (non-square)?

2) Lines of symmetry in a square?

3) Lines of symmetry in an isosceles (non-equilateral) triangle?
    `, hint1: 'Fold horizontally and vertically.', hint2: 'Horizontal, vertical, and two diagonals.', hint3: 'Only one line — through the vertex angle.', explanation: '1) 2. 2) 4. 3) 1.' },
    dropdown: { dropdowns: [{ label: 'A circle has how many lines of symmetry?', options: ['Infinitely many','1','4','0'] }, { label: 'A scalene triangle has how many?', options: ['0','1','3','2'] }], correctAnswers: ['Infinitely many','0'], hint1: 'Any diameter works.', hint2: 'No equal sides → no symmetry.', explanation: 'Circle: infinite. Scalene triangle: 0.' }
  },
  // Part 6: Problem-Solving Workshop
  {
    introContent: `
# 📏 Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Apply geometry and measurement skills to real-world problems!

1. Draw a picture
2. Identify what to find (perimeter? area? angle?)
3. Use the right formula
4. Include units
    `,
    workedContent: `
## Worked Example

**Rectangular garden 12 m × 8 m. Find perimeter and area.**

- $P = 2(12)+2(8) = 40$ m
- $A = 12 \\times 8 = 96$ m² ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Find |
|---|---------|------|
| 1 | Garden 10 × 5 m | Area |
| 2 | Room 8 × 6 ft, border tape | Perimeter |
| 3 | Two 2-cm squares side by side | Perimeter |
    `,
    mcq1: { questions: [{ question: 'Room 5 m × 4 m. Carpet needed?', options: ['20 m²','18 m','9 m²','40 m²'], correctAnswer: 0, explanation: 'Carpet = area = 5×4 = 20 m².' }] },
    mcq2: { questions: [{ question: 'Square park, perimeter 80 m. Area?', options: ['400 m²','20 m²','80 m²','160 m²'], correctAnswer: 0, explanation: 'Side = 80÷4 = 20 m. Area = 20² = 400 m².' }] },
    input: { boxes: 3, correctAnswers: ['50','28','12'], content: `
**Real-World Problems** 🧮

1) Garden 10 m × 5 m. Area (m²)?

2) Room 8 ft × 6 ft. Border tape needed (perimeter in ft)?

3) Two squares (side 2 cm) side by side form a 4 × 2 cm rectangle. Perimeter (cm)?
    `, hint1: 'A = l × w.', hint2: 'P = 2l + 2w.', hint3: 'P = 2(4) + 2(2).', explanation: '1) 10×5=50. 2) 2(8)+2(6)=28. 3) 2(4)+2(2)=12.' },
    dropdown: { dropdowns: [{ label: 'To find fencing needed, calculate the', options: ['Perimeter','Area','Volume','Weight'] }, { label: 'To find paint for a wall, calculate the', options: ['Area','Perimeter','Length','Diagonal'] }], correctAnswers: ['Perimeter','Area'], hint1: 'Fencing goes around the outside.', hint2: 'Paint covers a surface.', explanation: 'Fencing = perimeter. Paint = area.' }
  },
  // Part 7: Review
  {
    introContent: `
# 📏 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Concepts
- Acute (<90°), Right (=90°), Obtuse (>90°), Straight (=180°)
- Shapes classified by sides and angles
- $P = 2l + 2w$, $A = l \\times w$
- Lines of symmetry
    `,
    workedContent: `
## Worked Example

**Rectangle 9 × 6 m.**

$P = 2(9)+2(6) = 30$ m, $A = 9 \\times 6 = 54$ m² ✅
    `,
    practiceContent: `
## Practice

| # | Topic | Problem |
|---|-------|---------|
| 1 | Area | Square, side 6 cm |
| 2 | Area | Rectangle 12 × 5 m |
| 3 | Shapes | Sides of an octagon? |
    `,
    mcq1: { questions: [{ question: 'Equilateral triangle, side 7 cm. Perimeter?', options: ['21 cm','14 cm','49 cm','28 cm'], correctAnswer: 0, explanation: 'P = 3×7 = 21 cm.' }] },
    mcq2: { questions: [{ question: 'Rectangle area 48 cm², length 8 cm. Perimeter?', options: ['28 cm','14 cm','22 cm','56 cm'], correctAnswer: 0, explanation: 'w = 48÷8 = 6. P = 2(8)+2(6) = 28 cm.' }] },
    input: { boxes: 3, correctAnswers: ['36','60','8'], content: `
**Review** 🧮

1) Square, side 6 cm. Area (cm²)?

2) Rectangle 12 × 5 m. Area (m²)?

3) An octagon has how many sides?
    `, hint1: 'A = s² = 6².', hint2: 'A = 12 × 5.', hint3: '"Oct" = eight.', explanation: '1) 36. 2) 60. 3) 8.' },
    dropdown: { dropdowns: [{ label: 'Area of rectangle formula', options: ['A = l × w','A = 2l + 2w','A = s²','A = ½bh'] }, { label: 'Supplementary angles sum to', options: ['180°','90°','360°','270°'] }], correctAnswers: ['A = l × w','180°'], hint1: 'Area = product of sides.', hint2: 'What do supplementary angles add to?', explanation: 'A = l × w. Supplementary = 180°.' }
  }
],

'grade4-multi-digit-multiplication': [
  // Part 1: Multiplying by 10s and 100s
  {
    introContent: `
# ✖️ Multiplying by 10s and 100s

**Part 1 of 7 — Multiplying by 10s and 100s**

### Pattern
- Multiply by **10**: add one zero to the end
- Multiply by **100**: add two zeros
- Multiply by **1000**: add three zeros

$35 \\times 10 = 350$, $35 \\times 100 = 3{,}500$
    `,
    workedContent: `
## Worked Example

**$46 \\times 100 = ?$**

Add two zeros: $46 \\to 4{,}600$ ✅

**$70 \\times 30 = ?$**

$7 \\times 3 = 21$, then add two zeros: $2{,}100$ ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Strategy |
|---|---------|----------|
| 1 | $25 \\times 10$ | Add one zero |
| 2 | $43 \\times 100$ | Add two zeros |
| 3 | $50 \\times 20$ | Multiply non-zero digits, count zeros |
    `,
    mcq1: { questions: [{ question: 'What is $67 \\\\times 100$?', options: ['6,700','670','67,000','6.7'], correctAnswer: 0, explanation: 'Multiply by 100 = add two zeros: 6,700.' }] },
    mcq2: { questions: [{ question: 'What is $40 \\\\times 30$?', options: ['1,200','120','12,000','700'], correctAnswer: 0, explanation: '4 × 3 = 12, then add two zeros = 1,200.' }] },
    input: { boxes: 3, correctAnswers: ['350','2400','6000'], content: `
**Multiply** 🧮

1) $35 \\times 10 = ?$

2) $24 \\times 100 = ?$

3) $60 \\times 100 = ?$
    `, hint1: 'Add one zero to 35.', hint2: 'Add two zeros to 24.', hint3: '60 already ends in a zero. Add two more.', explanation: '1) 350. 2) 2,400. 3) 6,000.' },
    dropdown: { dropdowns: [{ label: 'When multiplying by 10, you', options: ['Add one zero','Add two zeros','Double the number','Remove a zero'] }, { label: '$80 \\\\times 50$ equals', options: ['4,000','400','40,000','800'] }], correctAnswers: ['Add one zero','4,000'], hint1: '×10 = shift digits one place left.', hint2: '8×5=40, then add two zeros.', explanation: '×10 adds one zero. 80×50: 8×5=40, zeros: 4,000.' }
  },
  // Part 2: Area Model
  {
    introContent: `
# ✖️ Area Model

**Part 2 of 7 — Area Model**

Break numbers into expanded form, multiply each part, and add:

$23 \\times 17 = (20+3)(10+7)$
$= 20(10) + 20(7) + 3(10) + 3(7)$
$= 200 + 140 + 30 + 21 = 391$
    `,
    workedContent: `
## Worked Example

**$34 \\times 12$** using the area model:

| × | 10 | 2 |
|---|-----|-----|
| 30 | 300 | 60 |
| 4 | 40 | 8 |

$300 + 60 + 40 + 8 = 408$ ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Break Down |
|---|---------|------------|
| 1 | $15 \\times 13$ | $(10+5)(10+3)$ |
| 2 | $22 \\times 14$ | $(20+2)(10+4)$ |
| 3 | $31 \\times 25$ | $(30+1)(20+5)$ |
    `,
    mcq1: { questions: [{ question: 'In the area model for $26 \\\\times 13$, which is NOT a partial product?', options: ['$26 \\\\times 13 = 338$','$20 \\\\times 10 = 200$','$6 \\\\times 3 = 18$','$20 \\\\times 3 = 60$'], correctAnswer: 0, explanation: 'That is the final answer, not a partial product. Partial products: 200, 60, 60, 18.' }] },
    mcq2: { questions: [{ question: 'The area model works because of the _____ property.', options: ['Distributive','Commutative','Associative','Identity'], correctAnswer: 0, explanation: 'The area model uses the distributive property: a(b+c) = ab + ac.' }] },
    input: { boxes: 3, correctAnswers: ['391','408','775'], content: `
**Area Model Practice** 🧮

1) $23 \\times 17 = ?$

2) $34 \\times 12 = ?$

3) $25 \\times 31 = ?$
    `, hint1: '20×17 + 3×17 = 340 + 51.', hint2: '30×12 + 4×12 = 360 + 48.', hint3: '25×30 + 25×1 = 750 + 25.', explanation: '1) 340+51=391. 2) 360+48=408. 3) 750+25=775.' },
    dropdown: { dropdowns: [{ label: 'In the area model, you break numbers into', options: ['Expanded form (tens and ones)','Prime factors','Even and odd parts','Halves'] }, { label: 'After finding all partial products, you', options: ['Add them together','Multiply them','Subtract them','Take the largest'] }], correctAnswers: ['Expanded form (tens and ones)','Add them together'], hint1: 'Think place value.', hint2: 'Partial products combine by...', explanation: 'Break into tens/ones (expanded form). Add all partial products for the final answer.' }
  },
  // Part 3: Partial Products
  {
    introContent: `
# ✖️ Partial Products

**Part 3 of 7 — Partial Products**

Multiply each digit separately, then add:

$24 \\times 7$:
- $20 \\times 7 = 140$
- $4 \\times 7 = 28$
- $140 + 28 = 168$
    `,
    workedContent: `
## Worked Example

$36 \\times 24$:
- $36 \\times 20 = 720$
- $36 \\times 4 = 144$
- $720 + 144 = 864$ ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Partial Products |
|---|---------|-----------------|
| 1 | $18 \\times 5$ | $10(5) + 8(5)$ |
| 2 | $27 \\times 13$ | $27(10) + 27(3)$ |
| 3 | $45 \\times 32$ | $45(30) + 45(2)$ |
    `,
    mcq1: { questions: [{ question: 'What is the first partial product of $43 \\\\times 26$ (tens first)?', options: ['$43 \\\\times 20 = 860$','$43 \\\\times 6 = 258$','$40 \\\\times 26 = 1040$','$3 \\\\times 6 = 18$'], correctAnswer: 0, explanation: 'Multiply by the tens digit first: 43 × 20 = 860.' }] },
    mcq2: { questions: [{ question: '$52 \\\\times 14$: partial products are $52 \\\\times 10 = 520$ and $52 \\\\times 4 = 208$. Final answer?', options: ['728','520','208','312'], correctAnswer: 0, explanation: '520 + 208 = 728.' }] },
    input: { boxes: 3, correctAnswers: ['168','936','2128'], content: `
**Partial Products** 🧮

1) $24 \\times 7 = ?$

2) $36 \\times 26 = ?$

3) $56 \\times 38 = ?$
    `, hint1: '20×7 + 4×7.', hint2: '36×20 + 36×6.', hint3: '56×30 + 56×8.', explanation: '1) 140+28=168. 2) 720+216=936. 3) 1680+448=2128.' },
    dropdown: { dropdowns: [{ label: 'Partial products means you multiply by each place value and then', options: ['Add the results','Multiply the results','Subtract','Take the average'] }, { label: '$15 \\\\times 8 = 10(8) + 5(8) =$', options: ['120','80','40','160'] }], correctAnswers: ['Add the results','120'], hint1: 'After getting partial products...', hint2: '80 + 40 = ?', explanation: 'Add partial products. 10(8)+5(8) = 80+40 = 120.' }
  },
  // Part 4: Standard Algorithm
  {
    introContent: `
# ✖️ Standard Algorithm

**Part 4 of 7 — Standard Algorithm**

The standard method lines up numbers vertically:

1. Multiply by the ones digit
2. Multiply by the tens digit (shift one place left)
3. Add the two products
    `,
    workedContent: `
## Worked Example

$47 \\times 23$:
- $47 \\times 3 = 141$
- $47 \\times 20 = 940$
- $141 + 940 = 1{,}081$ ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Steps |
|---|---------|-------|
| 1 | $34 \\times 18$ | 34×8 + 34×10 |
| 2 | $62 \\times 38$ | 62×8 + 62×30 |
| 3 | $86 \\times 54$ | 86×4 + 86×50 |
    `,
    mcq1: { questions: [{ question: 'In $56 \\\\times 34$, first multiply $56 \\\\times 4 = 224$. Next step?', options: ['Multiply $56 \\\\times 30 = 1680$','Multiply $56 \\\\times 3 = 168$','Add 224 + 34','Multiply 224 × 3'], correctAnswer: 0, explanation: 'Multiply by the tens: 56 × 30 = 1,680. Then add: 224 + 1,680.' }] },
    mcq2: { questions: [{ question: 'Why do we shift left when multiplying by the tens digit?', options: ['Because the digit represents tens, not ones','To make it look neater','To avoid carrying','No reason — it is optional'], correctAnswer: 0, explanation: 'The tens digit is worth 10×, so the product is shifted one place left.' }] },
    input: { boxes: 3, correctAnswers: ['612','2356','4644'], content: `
**Standard Algorithm** 🧮

1) $34 \\times 18 = ?$

2) $62 \\times 38 = ?$

3) $86 \\times 54 = ?$
    `, hint1: '34×8 + 34×10.', hint2: '62×8 + 62×30.', hint3: '86×4 + 86×50.', explanation: '1) 272+340=612. 2) 496+1860=2356. 3) 344+4300=4644.' },
    dropdown: { dropdowns: [{ label: 'In the standard algorithm, you multiply by each digit starting from the', options: ['Ones place','Tens place','Hundreds place','Largest digit'] }, { label: '$25 \\\\times 12 = 25(2) + 25(10) =$', options: ['300','50','250','275'] }], correctAnswers: ['Ones place','300'], hint1: 'Start with the rightmost digit.', hint2: '50 + 250 = ?', explanation: 'Start from ones. 25(2)+25(10) = 50+250 = 300.' }
  },
  // Part 5: Word Problems
  {
    introContent: `
# ✖️ Multiplication Word Problems

**Part 5 of 7 — Word Problems**

Look for key words that signal multiplication:
- "each", "per", "every"
- "total", "altogether"
- "rows of", "groups of"
    `,
    workedContent: `
## Worked Example

**A school has 24 classrooms with 28 desks each. Total desks?**

$24 \\times 28 = 24(20) + 24(8) = 480 + 192 = 672$ ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Expression |
|---|---------|------------|
| 1 | 12 crayons per box, 8 boxes | $12 \\times 8$ |
| 2 | 6 rows of 30 chairs | $6 \\times 30$ |
| 3 | 15 rows, 16 seeds each | $15 \\times 16$ |
    `,
    mcq1: { questions: [{ question: 'A bookshelf has 6 shelves with 14 books each. Which expression finds the total?', options: ['$6 \\\\times 14$','$6 + 14$','$14 - 6$','$14 ÷ 6$'], correctAnswer: 0, explanation: '"Each shelf has 14" means multiply: 6 × 14.' }] },
    mcq2: { questions: [{ question: 'A box has 15 candies. You have 12 boxes. Is "15 + 12" or "15 × 12" correct?', options: ['$15 \\\\times 12$','$15 + 12$','It depends','Neither'], correctAnswer: 0, explanation: 'Equal groups → multiply. 15 × 12 = 180 candies.' }] },
    input: { boxes: 3, correctAnswers: ['96','180','240'], content: `
**Word Problems** 🧮

1) A box holds 12 crayons. How many in 8 boxes?

2) A classroom has 6 rows of 30 chairs. How many chairs?

3) A farmer plants 15 rows with 16 seeds each. Total seeds?
    `, hint1: '12 × 8.', hint2: '6 × 30.', hint3: '15 × 16.', explanation: '1) 96. 2) 180. 3) 240.' },
    dropdown: { dropdowns: [{ label: '"5 bags with 20 apples each" means', options: ['5 × 20 = 100 apples','5 + 20 = 25 apples','20 − 5 = 15 apples','20 ÷ 5 = 4 apples'] }, { label: 'The word "each" in a problem usually signals', options: ['Multiplication','Addition','Subtraction','Division'] }], correctAnswers: ['5 × 20 = 100 apples','Multiplication'], hint1: 'Equal groups of the same size.', hint2: '"Each" means every one has the same amount.', explanation: '5 bags × 20 apples = 100. "Each" signals multiplication.' }
  },
  // Part 6: Problem-Solving Workshop
  {
    introContent: `
# ✖️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Choose the best multiplication strategy for each problem:
- **Mental math**: multiples of 10, 100
- **Area model**: see partial products visually
- **Standard algorithm**: efficient for larger numbers
    `,
    workedContent: `
## Worked Example

**$45 \\times 22 = ?$**

Strategy: Break apart 22 = 20 + 2.
- $45 \\times 20 = 900$
- $45 \\times 2 = 90$
- $900 + 90 = 990$ ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Best Strategy |
|---|---------|---------------|
| 1 | $25 \\times 40$ | Mental math (×10s) |
| 2 | $37 \\times 23$ | Standard algorithm |
| 3 | $99 \\times 5$ | Mental math: $100(5) - 1(5)$ |
    `,
    mcq1: { questions: [{ question: 'Best strategy for $50 \\\\times 60$?', options: ['Mental math: 5×6=30, add two zeros','Standard algorithm','Guess and check','Area model'], correctAnswer: 0, explanation: '50×60: multiply 5×6=30, add two zeros → 3,000.' }] },
    mcq2: { questions: [{ question: 'For $99 \\\\times 7$, a clever trick is:', options: ['$100(7) - 1(7) = 693$','$99 + 7 = 106$','$90(7) + 9 = 639$','Round to 100 and stop'], correctAnswer: 0, explanation: '99×7 = 100(7) − 1(7) = 700 − 7 = 693.' }] },
    input: { boxes: 3, correctAnswers: ['575','1350','2400'], content: `
**Problem Solving** 🧮

1) $25 \\times 23 = ?$

2) $45 \\times 30 = ?$

3) 48 classrooms × 50 desks each. Total desks?
    `, hint1: '25×20 + 25×3.', hint2: '45×3 = 135, then add a zero.', hint3: '48 × 50.', explanation: '1) 500+75=575. 2) 1,350. 3) 2,400.' },
    dropdown: { dropdowns: [{ label: 'For multiplying by 10, 20, 30, etc., use', options: ['Mental math','Long division','A calculator','Guess and check'] }, { label: '$99 \\\\times 4 = 100(4) - 1(4) =$', options: ['396','400','404','300'] }], correctAnswers: ['Mental math','396'], hint1: 'Multiples of 10 are easy mental math.', hint2: '400 − 4 = ?', explanation: 'Mental math for ×10s. 100(4)−4 = 396.' }
  },
  // Part 7: Review
  {
    introContent: `
# ✖️ Review & Applications

**Part 7 of 7 — Review & Applications**

### Methods Reviewed
- **Multiples of 10/100**: Add zeros
- **Area model**: Break apart and visualize
- **Partial products**: Multiply by each place value, add
- **Standard algorithm**: Efficient vertical method
    `,
    workedContent: `
## Worked Example

**$38 \\times 45$:**

$38 \\times 40 = 1{,}520$
$38 \\times 5 = 190$
$1{,}520 + 190 = 1{,}710$ ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Method |
|---|---------|--------|
| 1 | $12 \\times 12$ | Perfect square |
| 2 | $27 \\times 27$ | Standard algorithm |
| 3 | $45 \\times 45$ | Partial products |
    `,
    mcq1: { questions: [{ question: 'What is $12 \\\\times 12$?', options: ['144','124','132','156'], correctAnswer: 0, explanation: '12 × 12 = 144.' }] },
    mcq2: { questions: [{ question: 'A store sells 36 packs per day for 25 days. Total packs?', options: ['900','61','850','750'], correctAnswer: 0, explanation: '36 × 25 = 36(20) + 36(5) = 720 + 180 = 900.' }] },
    input: { boxes: 3, correctAnswers: ['144','729','2025'], content: `
**Review** 🧮

1) $12 \\times 12 = ?$

2) $27 \\times 27 = ?$

3) $45 \\times 45 = ?$
    `, hint1: '12².', hint2: '27×20 + 27×7.', hint3: '45×40 + 45×5.', explanation: '1) 144. 2) 540+189=729. 3) 1800+225=2025.' },
    dropdown: { dropdowns: [{ label: 'The fastest strategy for $50 \\\\times 200$ is', options: ['Mental math: 5×2=10, add three zeros','Standard algorithm','Area model','Guess and check'] }, { label: '$25 \\\\times 4 =$', options: ['100','29','21','104'] }], correctAnswers: ['Mental math: 5×2=10, add three zeros','100'], hint1: 'Count the trailing zeros.', hint2: '25 × 4 is a well-known product.', explanation: '50×200: 5×2=10, add 3 zeros = 10,000. 25×4 = 100.' }
  }
]

};
