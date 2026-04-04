/**
 * Content patches for Grade 5 topics:
 * - grade5-decimal-operations (7 parts)
 * - grade5-fraction-operations (7 parts)
 * - grade5-volume (7 parts)
 */
module.exports = {

'grade5-decimal-operations': [
  // Part 1: Place Value to Thousandths
  {
    introContent: `
# 📐 Place Value to Thousandths

**Part 1 of 7 — Place Value to Thousandths**

Every digit has a place value. After the decimal point:
- **Tenths** (0.1) — first place
- **Hundredths** (0.01) — second place
- **Thousandths** (0.001) — third place

Example: $3.456$ → 3 ones, 4 tenths, 5 hundredths, 6 thousandths
    `,
    workedContent: `
## Worked Example

**What is the value of 7 in 0.372?**

7 is in the hundredths place → $7 \\times 0.01 = 0.07$ ✅
    `,
    practiceContent: `
## Practice

| # | Number | Find the value of… |
|---|--------|--------------------|
| 1 | 4.829 | the 2 |
| 2 | 0.561 | the 5 |
| 3 | 7.043 | the 3 |
    `,
    mcq1: { questions: [{ question: 'In 5.238, which digit is in the hundredths place?', options: ['3','2','8','5'], correctAnswer: 0, explanation: 'Tenths=2, hundredths=3, thousandths=8.' }] },
    mcq2: { questions: [{ question: 'How many thousandths are in 0.045?', options: ['45','4','5','450'], correctAnswer: 0, explanation: '0.045 = 45 thousandths (45/1000).' }] },
    input: { boxes: 3, correctAnswers: ['0.02','0.5','0.003'], content: `
**Place Value** 🧮

1) In 4.829, the value of the digit 2 is?

2) In 0.561, the value of the digit 5 is?

3) In 7.043, the value of the digit 3 is?
    `, hint1: '2 is in the hundredths place.', hint2: '5 is in the tenths place.', hint3: '3 is in the thousandths place.', explanation: '1) 2 hundredths = 0.02. 2) 5 tenths = 0.5. 3) 3 thousandths = 0.003.' },
    dropdown: { dropdowns: [{ label: 'The third place after the decimal is called', options: ['Thousandths','Hundredths','Tenths','Ten-thousandths'] }, { label: '0.009 is read as', options: ['Nine thousandths','Nine hundredths','Nine tenths','Ninety thousandths'] }], correctAnswers: ['Thousandths','Nine thousandths'], hint1: 'Count places: tenths, hundredths, …', hint2: 'The 9 is in the thousandths place.', explanation: 'Third decimal place = thousandths. 0.009 = nine thousandths.' }
  },
  // Part 2: Comparing Decimals
  {
    introContent: `
# 📊 Comparing Decimals

**Part 2 of 7 — Comparing Decimals**

Compare decimals place by place, left to right:
1. Line up decimal points
2. Compare digits in each place
3. First different digit determines the order

Example: $0.45$ vs $0.438$ → tenths same (4), hundredths: 5 > 3 → $0.45 > 0.438$
    `,
    workedContent: `
## Worked Example

**Order from least to greatest: 0.6, 0.58, 0.605**

Rewrite: $0.600,\\; 0.580,\\; 0.605$. Compare tenths (all 6), then hundredths: $0 < 0 ... $ wait — $0.580 < 0.600 < 0.605$

Answer: $0.58 < 0.6 < 0.605$ ✅
    `,
    practiceContent: `
## Practice

| # | Task | Strategy |
|---|------|----------|
| 1 | Compare 0.7 and 0.70 | Trailing zeros |
| 2 | Order 3.5, 3.05, 3.55 | Place by place |
| 3 | Compare 0.099 and 0.1 | Add trailing zeros |
    `,
    mcq1: { questions: [{ question: 'Which is greater: 0.32 or 0.308?', options: ['0.32','0.308','They are equal','Cannot tell'], correctAnswer: 0, explanation: '0.320 vs 0.308: hundredths 2 > 0.' }] },
    mcq2: { questions: [{ question: 'True or false: 0.5 = 0.50 = 0.500', options: ['True','False','Only 0.5 = 0.50','Only 0.50 = 0.500'], correctAnswer: 0, explanation: 'Trailing zeros do not change the value.' }] },
    input: { boxes: 3, correctAnswers: ['<','>','='], content: `
**Compare Decimals** 🧮

Write <, >, or =:

1) 0.35 _____ 0.4

2) 2.71 _____ 2.709

3) 0.80 _____ 0.8
    `, hint1: '0.35 vs 0.40 — tenths: 3 vs 4.', hint2: '2.710 vs 2.709 — thousandths: 0 vs 9… wait, hundredths first: 1 vs 0.', hint3: 'Are trailing zeros significant?', explanation: '1) 0.35 < 0.40, so <. 2) 2.710 > 2.709, so >. 3) Equal.' },
    dropdown: { dropdowns: [{ label: 'To compare decimals, first', options: ['Line up decimal points','Add the numbers','Multiply both by 10','Count total digits'] }, { label: 'Adding trailing zeros to a decimal', options: ['Does not change its value','Makes it larger','Makes it smaller','Is not allowed'] }], correctAnswers: ['Line up decimal points','Does not change its value'], hint1: 'Alignment is key.', hint2: '0.5 = 0.50 = 0.500.', explanation: 'Line up decimals, then compare left to right. Trailing zeros keep the value the same.' }
  },
  // Part 3: Adding & Subtracting Decimals
  {
    introContent: `
# 🔢 Adding & Subtracting Decimals

**Part 3 of 7 — Adding & Subtracting Decimals**

### Steps
1. **Line up** the decimal points vertically
2. **Add zeros** to fill empty places
3. **Add or subtract** as with whole numbers
4. **Bring down** the decimal point
    `,
    workedContent: `
## Worked Example

$3.45 + 2.7 = ?$

Line up: $3.45 + 2.70 = 6.15$ ✅

$5.3 - 2.86 = ?$

Line up: $5.30 - 2.86 = 2.44$ ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Key Step |
|---|---------|----------|
| 1 | $4.5 + 3.28$ | Add trailing zero |
| 2 | $10 - 6.43$ | 10.00 - 6.43 |
| 3 | $0.75 + 0.8 + 0.125$ | Align all three |
    `,
    mcq1: { questions: [{ question: 'What is $4.56 + 3.2$?', options: ['7.76','7.58','7.78','4.88'], correctAnswer: 0, explanation: '$4.56 + 3.20 = 7.76$.' }] },
    mcq2: { questions: [{ question: 'Why add trailing zeros?', options: ['To keep place values aligned','To make the number bigger','Because zeros change value','It is optional decoration'], correctAnswer: 0, explanation: 'Trailing zeros ensure every column lines up.' }] },
    input: { boxes: 3, correctAnswers: ['7.78','3.57','1.675'], content: `
**Add & Subtract** 🧮

1) $4.5 + 3.28 = ?$

2) $10 - 6.43 = ?$

3) $0.75 + 0.8 + 0.125 = ?$
    `, hint1: 'Rewrite as 4.50 + 3.28.', hint2: 'Rewrite as 10.00 − 6.43.', hint3: 'Rewrite as 0.750 + 0.800 + 0.125.', explanation: '1) 4.50+3.28=7.78. 2) 10.00−6.43=3.57. 3) 0.750+0.800+0.125=1.675.' },
    dropdown: { dropdowns: [{ label: 'First step when adding decimals', options: ['Line up decimal points','Add the digits left to right','Multiply by 10','Remove the decimal'] }, { label: '$6.2 - 3.85$ requires you to rewrite 6.2 as', options: ['6.20','62.0','0.62','6.02'] }], correctAnswers: ['Line up decimal points','6.20'], hint1: 'Alignment comes first.', hint2: 'Add a zero in the hundredths place.', explanation: 'Align decimals first. 6.2 → 6.20 for subtraction.' }
  },
  // Part 4: Multiplying Decimals
  {
    introContent: `
# 📈 Multiplying Decimals

**Part 4 of 7 — Multiplying Decimals**

### Steps
1. Multiply as if both numbers are whole numbers
2. Count total decimal places in both factors
3. Place the decimal point in the product (same total)

$0.3 \\times 0.4 = 0.12$ → 1+1 = 2 decimal places
    `,
    workedContent: `
## Worked Example

$2.5 \\times 0.3 = ?$

Multiply: $25 \\times 3 = 75$

Decimal places: 1 + 1 = 2 → $0.75$ ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Decimal Places |
|---|---------|----------------|
| 1 | $1.2 \\times 4$ | 1 |
| 2 | $0.6 \\times 0.7$ | 2 |
| 3 | $3.14 \\times 2$ | 2 |
    `,
    mcq1: { questions: [{ question: 'How many decimal places in $0.25 \\\\times 0.4$?', options: ['3','2','1','4'], correctAnswer: 0, explanation: '0.25 has 2, 0.4 has 1 → 2+1 = 3 total.' }] },
    mcq2: { questions: [{ question: '$0.1 \\\\times 0.1 = ?$', options: ['0.01','0.1','1','0.001'], correctAnswer: 0, explanation: '1 × 1 = 1, total 2 places → 0.01.' }] },
    input: { boxes: 3, correctAnswers: ['4.8','0.42','6.28'], content: `
**Multiply Decimals** 🧮

1) $1.2 \\times 4 = ?$

2) $0.6 \\times 0.7 = ?$

3) $3.14 \\times 2 = ?$
    `, hint1: '12 × 4 = 48, one decimal place.', hint2: '6 × 7 = 42, two decimal places.', hint3: '314 × 2 = 628, two decimal places.', explanation: '1) 48 → 4.8. 2) 42 → 0.42. 3) 628 → 6.28.' },
    dropdown: { dropdowns: [{ label: 'After multiplying, count decimal places in', options: ['Both factors combined','Only the larger factor','Only the product','Neither factor'] }, { label: '$0.5 \\\\times 0.5 =$', options: ['0.25','2.5','0.025','25'] }], correctAnswers: ['Both factors combined','0.25'], hint1: 'Total places from BOTH numbers.', hint2: '5×5=25, 2 decimal places.', explanation: 'Count places in both factors. 5×5=25, 1+1=2 places → 0.25.' }
  },
  // Part 5: Dividing Decimals
  {
    introContent: `
# 🧮 Dividing Decimals

**Part 5 of 7 — Dividing Decimals**

### Dividing by a whole number
Divide normally; bring up the decimal point.

### Dividing by a decimal
Multiply both divisor and dividend by 10 (or 100) to make the divisor a whole number.

$3.6 \\div 0.4 = 36 \\div 4 = 9$
    `,
    workedContent: `
## Worked Example

$4.8 \\div 0.6 = ?$

Multiply both by 10: $48 \\div 6 = 8$ ✅

$7.5 \\div 3 = 2.5$ ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Strategy |
|---|---------|----------|
| 1 | $9.6 \\div 4$ | Direct division |
| 2 | $2.4 \\div 0.8$ | Multiply both by 10 |
| 3 | $0.35 \\div 0.07$ | Multiply both by 100 |
    `,
    mcq1: { questions: [{ question: 'To divide by 0.5, you can multiply both numbers by:', options: ['10','0.5','5','100'], correctAnswer: 0, explanation: 'Multiply by 10 to make 0.5 into 5.' }] },
    mcq2: { questions: [{ question: '$6.3 \\\\div 0.9 = ?$', options: ['7','0.7','70','63'], correctAnswer: 0, explanation: '63 ÷ 9 = 7.' }] },
    input: { boxes: 3, correctAnswers: ['2.4','3','5'], content: `
**Divide Decimals** 🧮

1) $9.6 \\div 4 = ?$

2) $2.4 \\div 0.8 = ?$

3) $0.35 \\div 0.07 = ?$
    `, hint1: 'Divide 9.6 by 4 directly.', hint2: 'Multiply both by 10: 24 ÷ 8.', hint3: 'Multiply both by 100: 35 ÷ 7.', explanation: '1) 9.6÷4=2.4. 2) 24÷8=3. 3) 35÷7=5.' },
    dropdown: { dropdowns: [{ label: 'To make a decimal divisor a whole number, multiply by', options: ['A power of 10','The numerator','A fraction','Zero'] }, { label: '$1.44 \\\\div 1.2 =$', options: ['1.2','12','0.12','14.4'] }], correctAnswers: ['A power of 10','1.2'], hint1: 'Powers of 10 = 10, 100, 1000…', hint2: '14.4 ÷ 12 = ?', explanation: 'Multiply by 10/100/1000. 14.4 ÷ 12 = 1.2.' }
  },
  // Part 6: Problem-Solving Workshop
  {
    introContent: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Apply decimal skills to real-world problems:
- **Money**: Dollars and cents use decimals
- **Measurement**: Metric measurements (meters, liters, grams)
- **Science**: Temperature, dosages, distances
    `,
    workedContent: `
## Worked Example

**A shirt costs \\$12.50 and tax is \\$0.94. Total?**

$12.50 + 0.94 = 13.44$ → **\\$13.44** ✅

**Three friends split a \\$23.97 meal. Each pays?**

$23.97 \\div 3 = 7.99$ → **\\$7.99** ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Operation |
|---|---------|-----------|
| 1 | Gas: 12.5 gallons at \\$3.20/gal | Multiply |
| 2 | \\$50 − \\$23.75 change | Subtract |
| 3 | 5 items at \\$4.99 each | Multiply |
    `,
    mcq1: { questions: [{ question: 'You buy 3 items at $4.25 each. Total cost?', options: ['$12.75','$7.25','$12.25','$42.50'], correctAnswer: 0, explanation: '3 × $4.25 = $12.75.' }] },
    mcq2: { questions: [{ question: '$20.00 − $13.47 = ?$', options: ['$6.53','$7.53','$6.47','$33.47'], correctAnswer: 0, explanation: '$20.00 − $13.47 = $6.53.' }] },
    input: { boxes: 3, correctAnswers: ['40','26.25','24.95'], content: `
**Word Problems** 🧮

1) Gas: 12.5 gallons at \\$3.20/gal. Total cost?

2) \\$50 − \\$23.75 = ?

3) 5 items at \\$4.99 each. Total?
    `, hint1: '12.5 × 3.20.', hint2: 'Subtract: 50.00 − 23.75.', hint3: '5 × 4.99.', explanation: '1) 12.5×3.20=40.00. 2) 50.00−23.75=26.25. 3) 5×4.99=24.95.' },
    dropdown: { dropdowns: [{ label: 'To find the total cost of multiple items, you', options: ['Multiply price × quantity','Divide price by quantity','Add all prices then multiply','Subtract'] }, { label: 'If you pay $20 for a $13.80 item, your change is', options: ['$6.20','$7.20','$6.80','$33.80'] }], correctAnswers: ['Multiply price × quantity','$6.20'], hint1: 'Price per item × number of items.', hint2: '$20.00 − $13.80.', explanation: 'Total = price × quantity. $20.00 − $13.80 = $6.20.' }
  },
  // Part 7: Review & Applications
  {
    introContent: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Concepts
- Place value: tenths, hundredths, thousandths
- Compare decimals left to right
- Add/subtract: line up decimal points
- Multiply: count total decimal places
- Divide: make divisor a whole number
    `,
    workedContent: `
## Worked Example

$2.45 \\times 0.3 = ?$

$245 \\times 3 = 735$, decimal places: $2 + 1 = 3$ → $0.735$ ✅
    `,
    practiceContent: `
## Practice

| # | Type | Problem |
|---|------|---------|
| 1 | Add | $5.6 + 3.45$ |
| 2 | Multiply | $0.4 \\times 0.8$ |
| 3 | Divide | $7.2 \\div 0.9$ |
    `,
    mcq1: { questions: [{ question: '$5.6 + 3.45 = ?$', options: ['9.05','9.5','8.05','8.95'], correctAnswer: 0, explanation: '5.60 + 3.45 = 9.05.' }] },
    mcq2: { questions: [{ question: 'Which place value is smallest: tenths, hundredths, or thousandths?', options: ['Thousandths','Hundredths','Tenths','They are equal'], correctAnswer: 0, explanation: 'Thousandths (0.001) < hundredths (0.01) < tenths (0.1).' }] },
    input: { boxes: 3, correctAnswers: ['9.05','0.32','8'], content: `
**Review** 🧮

1) $5.6 + 3.45 = ?$

2) $0.4 \\times 0.8 = ?$

3) $7.2 \\div 0.9 = ?$
    `, hint1: 'Align: 5.60 + 3.45.', hint2: '4 × 8 = 32, two decimal places.', hint3: 'Multiply both by 10: 72 ÷ 9.', explanation: '1) 9.05. 2) 0.32. 3) 8.' },
    dropdown: { dropdowns: [{ label: 'When adding decimals, the most important step is', options: ['Lining up the decimal points','Adding from left to right','Removing the decimals first','Rounding'] }, { label: 'To divide by 0.25, multiply both numbers by', options: ['100','10','25','4'] }], correctAnswers: ['Lining up the decimal points','100'], hint1: 'Alignment ensures correct place values.', hint2: '0.25 × 100 = 25 (a whole number).', explanation: 'Align decimals. 0.25 × 100 = 25.' }
  }
],

'grade5-fraction-operations': [
  // Part 1: Adding Unlike Denominators
  {
    introContent: `
# 🔢 Adding Unlike Denominators

**Part 1 of 7 — Adding Unlike Denominators**

To add fractions with different denominators:
1. Find the **LCD** (Least Common Denominator)
2. Convert each fraction to an equivalent fraction with the LCD
3. Add numerators, keep the LCD
4. Simplify if needed

$\\frac{1}{3} + \\frac{1}{4} = \\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$
    `,
    workedContent: `
## Worked Example

$\\frac{2}{5} + \\frac{1}{3} = ?$

LCD of 5 and 3 = 15.
$\\frac{2}{5} = \\frac{6}{15}$, $\\frac{1}{3} = \\frac{5}{15}$
$\\frac{6}{15} + \\frac{5}{15} = \\frac{11}{15}$ ✅
    `,
    practiceContent: `
## Practice

| # | Problem | LCD |
|---|---------|-----|
| 1 | $\\frac{1}{2} + \\frac{1}{3}$ | 6 |
| 2 | $\\frac{3}{4} + \\frac{1}{6}$ | 12 |
| 3 | $\\frac{2}{3} + \\frac{3}{5}$ | 15 |
    `,
    mcq1: { questions: [{ question: 'LCD of 4 and 6 is:', options: ['12','24','6','10'], correctAnswer: 0, explanation: 'Multiples of 4: 4,8,12… Multiples of 6: 6,12… LCD=12.' }] },
    mcq2: { questions: [{ question: '$\\\\frac{1}{2} + \\\\frac{1}{3} = ?$', options: ['$\\\\frac{5}{6}$','$\\\\frac{2}{5}$','$\\\\frac{1}{6}$','$\\\\frac{2}{6}$'], correctAnswer: 0, explanation: 'LCD=6: 3/6 + 2/6 = 5/6.' }] },
    input: { boxes: 3, correctAnswers: ['5','11','19'], content: `
**Add Fractions** 🧮

1) $\\frac{1}{2} + \\frac{1}{3} = \\frac{?}{6}$ — Numerator?

2) $\\frac{3}{4} + \\frac{1}{6} = \\frac{?}{12}$ — Numerator?

3) $\\frac{2}{3} + \\frac{3}{5} = \\frac{?}{15}$ — Numerator?
    `, hint1: 'Convert: 3/6 + 2/6.', hint2: 'Convert: 9/12 + 2/12.', hint3: 'Convert: 10/15 + 9/15.', explanation: '1) 3+2=5. 2) 9+2=11. 3) 10+9=19.' },
    dropdown: { dropdowns: [{ label: 'To add fractions with unlike denominators, first find the', options: ['Least Common Denominator','Greatest Common Factor','Sum of denominators','Product of numerators'] }, { label: 'LCD of 3 and 5 is', options: ['15','8','3','5'] }], correctAnswers: ['Least Common Denominator','15'], hint1: 'Denominators must match.', hint2: 'LCM of 3 and 5?', explanation: 'Find LCD first. LCD(3,5)=15.' }
  },
  // Part 2: Subtracting Mixed Numbers
  {
    introContent: `
# 🔢 Subtracting Mixed Numbers

**Part 2 of 7 — Subtracting Mixed Numbers**

To subtract mixed numbers:
1. Make sure fractions have the **same denominator**
2. If needed, **borrow** from the whole number
3. Subtract fractions, then subtract whole numbers

$3\\frac{1}{4} - 1\\frac{3}{4}$: borrow 1 from 3 → $2\\frac{5}{4} - 1\\frac{3}{4} = 1\\frac{2}{4} = 1\\frac{1}{2}$
    `,
    workedContent: `
## Worked Example

$5\\frac{1}{3} - 2\\frac{2}{3} = ?$

$\\frac{1}{3} < \\frac{2}{3}$, so borrow: $5\\frac{1}{3} = 4\\frac{4}{3}$

$4\\frac{4}{3} - 2\\frac{2}{3} = 2\\frac{2}{3}$ ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Borrowing? |
|---|---------|------------|
| 1 | $4\\frac{3}{5} - 2\\frac{1}{5}$ | No |
| 2 | $6\\frac{1}{4} - 3\\frac{3}{4}$ | Yes |
| 3 | $8 - 2\\frac{2}{3}$ | Yes |
    `,
    mcq1: { questions: [{ question: 'When do you borrow in mixed number subtraction?', options: ['When the first fraction is smaller than the second','Always','Never','When denominators differ'], correctAnswer: 0, explanation: 'Borrow when you cannot subtract the fraction part.' }] },
    mcq2: { questions: [{ question: '$7\\\\frac{1}{6} - 4\\\\frac{5}{6} = ?$', options: ['$2\\\\frac{2}{6}$','$3\\\\frac{4}{6}$','$2\\\\frac{4}{6}$','$3\\\\frac{2}{6}$'], correctAnswer: 0, explanation: 'Borrow: $6\\\\frac{7}{6} - 4\\\\frac{5}{6} = 2\\\\frac{2}{6}$.' }] },
    input: { boxes: 3, correctAnswers: ['2','2','5'], content: `
**Subtract Mixed Numbers** 🧮

1) $4\\frac{3}{5} - 2\\frac{1}{5}$: whole number part of the answer?

2) $6\\frac{1}{4} - 3\\frac{3}{4}$: whole number part of the answer?

3) $8 - 2\\frac{2}{3}$: whole number part of the answer?
    `, hint1: 'No borrowing needed: 4−2=2.', hint2: 'Borrow from 6: 5 4/4 − 3 3/4.', hint3: '8 = 7 3/3. Then subtract.', explanation: '1) 4 3/5 − 2 1/5 = 2 2/5. 2) 5 5/4 − 3 3/4 = 2 2/4. 3) 7 3/3 − 2 2/3 = 5 1/3.' },
    dropdown: { dropdowns: [{ label: 'Borrowing in mixed numbers means', options: ['Taking 1 from the whole and adding it to the fraction','Changing the denominator','Adding 1 to the whole number','Subtracting the fraction'] }, { label: '$5 - 1\\\\frac{2}{3} = ?$', options: ['$3\\\\frac{1}{3}$','$4\\\\frac{2}{3}$','$4\\\\frac{1}{3}$','$3\\\\frac{2}{3}$'] }], correctAnswers: ['Taking 1 from the whole and adding it to the fraction','$3\\\\frac{1}{3}$'], hint1: 'You convert 1 whole into fraction form.', hint2: '5 = 4 3/3. Then 4 3/3 − 1 2/3.', explanation: 'Borrow: convert 1 whole to b/b. 4 3/3 − 1 2/3 = 3 1/3.' }
  },
  // Part 3: Multiplying Fractions
  {
    introContent: `
# 🔢 Multiplying Fractions

**Part 3 of 7 — Multiplying Fractions**

$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$$

- Multiply numerators
- Multiply denominators
- Simplify the result
    `,
    workedContent: `
## Worked Example

$\\frac{3}{4} \\times \\frac{2}{5} = \\frac{6}{20} = \\frac{3}{10}$ ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Simplify? |
|---|---------|-----------|
| 1 | $\\frac{1}{2} \\times \\frac{3}{4}$ | No |
| 2 | $\\frac{2}{3} \\times \\frac{3}{5}$ | Yes |
| 3 | $\\frac{4}{7} \\times \\frac{1}{2}$ | No |
    `,
    mcq1: { questions: [{ question: '$\\\\frac{2}{3} \\\\times \\\\frac{3}{4} = ?$', options: ['$\\\\frac{1}{2}$','$\\\\frac{6}{7}$','$\\\\frac{5}{12}$','$\\\\frac{6}{12}$'], correctAnswer: 0, explanation: '6/12 = 1/2.' }] },
    mcq2: { questions: [{ question: 'When multiplying fractions, do you need a common denominator?', options: ['No','Yes','Only for unlike fractions','Sometimes'], correctAnswer: 0, explanation: 'Just multiply straight across: numerator × numerator, denominator × denominator.' }] },
    input: { boxes: 3, correctAnswers: ['3','2','4'], content: `
**Multiply Fractions** 🧮

1) $\\frac{1}{2} \\times \\frac{3}{4} = \\frac{?}{8}$ — Numerator?

2) $\\frac{2}{3} \\times \\frac{3}{5} = \\frac{?}{5}$ — Simplified numerator?

3) $\\frac{4}{7} \\times \\frac{1}{2} = \\frac{?}{14}$ — Numerator?
    `, hint1: '1 × 3 in the numerator.', hint2: '2×3 = 6 over 3×5 = 15. Simplify 6/15.', hint3: '4 × 1 in the numerator.', explanation: '1) 1×3=3. 2) 6/15 = 2/5. 3) 4×1=4.' },
    dropdown: { dropdowns: [{ label: 'To multiply fractions, multiply', options: ['Numerator × numerator, denominator × denominator','Only numerators','Only denominators','Cross-multiply'] }, { label: '$\\\\frac{5}{6} \\\\times \\\\frac{3}{5}$ simplifies to', options: ['$\\\\frac{1}{2}$','$\\\\frac{15}{30}$','$\\\\frac{3}{6}$','$\\\\frac{8}{11}$'] }], correctAnswers: ['Numerator × numerator, denominator × denominator','$\\\\frac{1}{2}$'], hint1: 'Multiply across.', hint2: '15/30 simplified is?', explanation: 'Multiply across: 5×3=15, 6×5=30. 15/30 = 1/2.' }
  },
  // Part 4: Dividing Fractions
  {
    introContent: `
# 🔢 Dividing Fractions

**Part 4 of 7 — Dividing Fractions**

**Keep, Change, Flip** (KCF):
$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$$

Keep the first fraction, change ÷ to ×, flip the second fraction.
    `,
    workedContent: `
## Worked Example

$\\frac{3}{4} \\div \\frac{2}{5} = \\frac{3}{4} \\times \\frac{5}{2} = \\frac{15}{8} = 1\\frac{7}{8}$ ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Reciprocal |
|---|---------|------------|
| 1 | $\\frac{1}{2} \\div \\frac{1}{4}$ | Flip 1/4 → 4/1 |
| 2 | $\\frac{3}{5} \\div \\frac{2}{3}$ | Flip 2/3 → 3/2 |
| 3 | $4 \\div \\frac{1}{3}$ | Flip 1/3 → 3/1 |
    `,
    mcq1: { questions: [{ question: 'The reciprocal of $\\\\frac{3}{7}$ is:', options: ['$\\\\frac{7}{3}$','$\\\\frac{3}{7}$','$\\\\frac{1}{3}$','$-\\\\frac{3}{7}$'], correctAnswer: 0, explanation: 'Flip numerator and denominator: 7/3.' }] },
    mcq2: { questions: [{ question: '$\\\\frac{1}{2} \\\\div \\\\frac{1}{4} = ?$', options: ['2','$\\\\frac{1}{8}$','4','$\\\\frac{1}{2}$'], correctAnswer: 0, explanation: '1/2 × 4/1 = 4/2 = 2.' }] },
    input: { boxes: 3, correctAnswers: ['2','9','12'], content: `
**Divide Fractions** 🧮

1) $\\frac{1}{2} \\div \\frac{1}{4} = ?$

2) $\\frac{3}{5} \\div \\frac{2}{3}$: numerator of the result (before simplifying)?

3) $4 \\div \\frac{1}{3} = ?$
    `, hint1: 'Keep 1/2, flip 1/4 → 4/1, multiply.', hint2: '3/5 × 3/2 = ?/?', hint3: '4/1 × 3/1 = ?', explanation: '1) 1/2 × 4/1 = 4/2 = 2. 2) 3×3=9 (over 10). 3) 4×3=12.' },
    dropdown: { dropdowns: [{ label: 'When dividing fractions, you "Keep, Change, Flip." "Flip" means', options: ['Take the reciprocal of the second fraction','Flip the first fraction','Change the sign','Swap numerators'] }, { label: '$6 \\\\div \\\\frac{1}{2} =$', options: ['12','3','$\\\\frac{1}{12}$','$\\\\frac{6}{2}$'] }], correctAnswers: ['Take the reciprocal of the second fraction','12'], hint1: 'Reciprocal = flip.', hint2: '6 × 2/1 = ?', explanation: 'Flip the divisor. 6 × 2 = 12.' }
  },
  // Part 5: Word Problems
  {
    introContent: `
# 🔢 Word Problems with Fractions

**Part 5 of 7 — Word Problems**

### Clue Words
- **"of"** often means multiply: $\\frac{1}{3}$ **of** 12 → $\\frac{1}{3} \\times 12$
- **"How many groups?"** means divide
- **"shared equally"** means divide
    `,
    workedContent: `
## Worked Example

**A recipe uses $\\frac{3}{4}$ cup flour. You triple it. How much flour?**

$3 \\times \\frac{3}{4} = \\frac{9}{4} = 2\\frac{1}{4}$ cups ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Operation |
|---|---------|-----------|
| 1 | 1/3 of 24 students | Multiply |
| 2 | $\\frac{3}{4}$ pizza, share among 6 | Divide |
| 3 | Double $\\frac{2}{5}$ of a recipe | Multiply |
    `,
    mcq1: { questions: [{ question: '"1/4 of 20" means:', options: ['$\\\\frac{1}{4} \\\\times 20 = 5$','$\\\\frac{1}{4} + 20$','$20 - \\\\frac{1}{4}$','$20 \\\\div \\\\frac{1}{4}$'], correctAnswer: 0, explanation: '"Of" means multiply: 1/4 × 20 = 5.' }] },
    mcq2: { questions: [{ question: 'Share $\\\\frac{3}{4}$ lb among 3 people. Each gets:', options: ['$\\\\frac{1}{4}$ lb','$\\\\frac{3}{12}$ lb','$\\\\frac{9}{4}$ lb','$2\\\\frac{1}{4}$ lb'], correctAnswer: 0, explanation: '3/4 ÷ 3 = 3/4 × 1/3 = 3/12 = 1/4 lb.' }] },
    input: { boxes: 3, correctAnswers: ['8','4','6'], content: `
**Word Problems** 🧮

1) $\\frac{1}{3}$ of 24 students went to the fair. How many?

2) $\\frac{2}{5}$ of a 10-meter rope. How many meters?

3) A jar has $\\frac{3}{4}$ liter. You buy 8 jars. How many liters total?
    `, hint1: '(1/3) × 24.', hint2: '(2/5) × 10.', hint3: '(3/4) × 8.', explanation: '1) 24÷3=8. 2) 10×2÷5=4. 3) 3×8÷4=6.' },
    dropdown: { dropdowns: [{ label: '"Of" in a fraction word problem means', options: ['Multiply','Add','Divide','Subtract'] }, { label: '2/3 of 18 equals', options: ['12','6','9','36'] }], correctAnswers: ['Multiply','12'], hint1: '"Of" signals an operation.', hint2: '(2/3) × 18.', explanation: '"Of" = multiply. 2×18÷3 = 12.' }
  },
  // Part 6: Problem-Solving Workshop
  {
    introContent: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Combine all fraction operations:
1. Read carefully — which operation?
2. Set up the expression
3. Solve step by step
4. Check: Does the answer make sense?
    `,
    workedContent: `
## Worked Example

**Tom has $2\\frac{1}{2}$ lbs of sugar. He uses $\\frac{3}{4}$ lb per batch. How many batches?**

$2\\frac{1}{2} \\div \\frac{3}{4} = \\frac{5}{2} \\times \\frac{4}{3} = \\frac{20}{6} = 3\\frac{1}{3}$ → **3 full batches** ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Steps |
|---|---------|-------|
| 1 | $\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6}$ | LCD = 6 |
| 2 | $3\\frac{1}{4} - 1\\frac{2}{3}$ | LCD = 12, borrow |
| 3 | $\\frac{2}{3} \\times \\frac{3}{4} \\div \\frac{1}{2}$ | Left to right |
    `,
    mcq1: { questions: [{ question: '$\\\\frac{1}{2} + \\\\frac{1}{3} + \\\\frac{1}{6} = ?$', options: ['1','$\\\\frac{3}{6}$','$\\\\frac{1}{6}$','$\\\\frac{5}{6}$'], correctAnswer: 0, explanation: 'LCD=6: 3/6 + 2/6 + 1/6 = 6/6 = 1.' }] },
    mcq2: { questions: [{ question: 'After multiplying and dividing fractions: $\\\\frac{2}{3} \\\\times \\\\frac{3}{4} = \\\\frac{1}{2}$. Then $\\\\frac{1}{2} \\\\div \\\\frac{1}{2} = ?$', options: ['1','$\\\\frac{1}{4}$','2','$\\\\frac{1}{2}$'], correctAnswer: 0, explanation: '$\\\\frac{1}{2} \\\\div \\\\frac{1}{2} = \\\\frac{1}{2} \\\\times \\\\frac{2}{1} = 1$.' }] },
    input: { boxes: 3, correctAnswers: ['1','19','1'], content: `
**Mixed Practice** 🧮

1) $\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6} = ?$ (simplify)

2) $3\\frac{1}{4} - 1\\frac{2}{3} = \\frac{?}{12}$ — Numerator?

3) $\\frac{2}{3} \\times \\frac{3}{4} \\div \\frac{1}{2} = ?$ (simplify)
    `, hint1: 'Convert all to sixths.', hint2: 'LCD=12: 39/12 − 20/12.', hint3: '2/3 × 3/4 = 1/2. Then 1/2 ÷ 1/2.', explanation: '1) 3/6+2/6+1/6=6/6=1. 2) 39/12−20/12=19/12. 3) 1/2 × 2/1=1.' },
    dropdown: { dropdowns: [{ label: 'To add fractions with different denominators', options: ['Find a common denominator first','Add both numerators and denominators','Just add the numerators','It cannot be done'] }, { label: 'Division by a fraction is the same as', options: ['Multiplication by its reciprocal','Subtraction','Addition','Squaring'] }], correctAnswers: ['Find a common denominator first','Multiplication by its reciprocal'], hint1: 'Unlike denominators require conversion.', hint2: 'Keep, Change, Flip.', explanation: 'LCD for unlike denominators. Division = multiply by reciprocal.' }
  },
  // Part 7: Review & Applications
  {
    introContent: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Operations
- **Add/Subtract**: Need common denominators
- **Multiply**: Straight across, then simplify
- **Divide**: Keep, Change, Flip
- **Mixed numbers**: Convert to improper first if needed
    `,
    workedContent: `
## Worked Example

$\\frac{5}{6} - \\frac{1}{4} = ?$

LCD = 12: $\\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}$ ✅
    `,
    practiceContent: `
## Practice

| # | Operation | Problem |
|---|-----------|---------|
| 1 | Add | $\\frac{3}{8} + \\frac{1}{4}$ |
| 2 | Multiply | $\\frac{5}{6} \\times \\frac{2}{5}$ |
| 3 | Divide | $\\frac{2}{3} \\div \\frac{4}{9}$ |
    `,
    mcq1: { questions: [{ question: '$\\\\frac{3}{8} + \\\\frac{1}{4} = ?$', options: ['$\\\\frac{5}{8}$','$\\\\frac{4}{12}$','$\\\\frac{4}{8}$','$\\\\frac{1}{2}$'], correctAnswer: 0, explanation: '1/4 = 2/8. 3/8 + 2/8 = 5/8.' }] },
    mcq2: { questions: [{ question: '$\\\\frac{2}{3} \\\\div \\\\frac{4}{9} = ?$', options: ['$\\\\frac{3}{2}$','$\\\\frac{8}{27}$','$\\\\frac{6}{12}$','$\\\\frac{2}{4}$'], correctAnswer: 0, explanation: '2/3 × 9/4 = 18/12 = 3/2.' }] },
    input: { boxes: 3, correctAnswers: ['5','1','3'], content: `
**Review** 🧮

1) $\\frac{3}{8} + \\frac{1}{4} = \\frac{?}{8}$ — Numerator?

2) $\\frac{5}{6} \\times \\frac{2}{5}$: simplify. Numerator?

3) $\\frac{2}{3} \\div \\frac{4}{9}$: simplify. Numerator?
    `, hint1: '1/4 = 2/8. Then add.', hint2: '10/30 simplifies to...', hint3: 'Keep, Change, Flip: 2/3 × 9/4 = 18/12.', explanation: '1) 3+2=5. 2) 10/30=1/3, numerator=1. 3) 18/12=3/2, numerator=3.' },
    dropdown: { dropdowns: [{ label: 'When multiplying fractions, you do NOT need', options: ['A common denominator','Numerators','Denominators','To simplify'] }, { label: 'The reciprocal of 5 is', options: ['$\\\\frac{1}{5}$','5','$-5$','$\\\\frac{5}{1}$'] }], correctAnswers: ['A common denominator','$\\\\frac{1}{5}$'], hint1: 'Multiplication works differently from addition.', hint2: '5 = 5/1. Flip it.', explanation: 'No common denominator needed for multiplication. Reciprocal of 5 = 1/5.' }
  }
],

'grade5-volume': [
  // Part 1: Understanding Volume
  {
    introContent: `
# 📦 Understanding Volume

**Part 1 of 7 — Understanding Volume**

**Volume** = the amount of space inside a 3D object, measured in **cubic units** (cm³, m³, in³).

Think of volume as the number of unit cubes that fit inside a shape.
    `,
    workedContent: `
## Worked Example

**A box is filled with unit cubes in 3 layers, each layer has 4 rows of 5 cubes.**

$V = 5 \\times 4 \\times 3 = 60$ unit cubes ✅
    `,
    practiceContent: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Unit cube | Volume = 1 cubic unit |
| 2 | Count cubes | Multiply layers × rows × columns |
| 3 | Units | Always cubic (cm³, not cm²) |
    `,
    mcq1: { questions: [{ question: 'Volume is measured in:', options: ['Cubic units','Square units','Linear units','No units'], correctAnswer: 0, explanation: 'Volume is 3D → cubic units.' }] },
    mcq2: { questions: [{ question: 'A unit cube has a volume of:', options: ['1 cubic unit','1 square unit','6 cubic units','3 cubic units'], correctAnswer: 0, explanation: 'A unit cube is 1×1×1 = 1 cubic unit.' }] },
    input: { boxes: 3, correctAnswers: ['24','60','12'], content: `
**Counting Cubes** 🧮

1) A box: 4 long, 3 wide, 2 high. Volume (unit cubes)?

2) A box: 5 long, 4 wide, 3 high. Volume?

3) A box: 3 long, 2 wide, 2 high. Volume?
    `, hint1: '4 × 3 × 2.', hint2: '5 × 4 × 3.', hint3: '3 × 2 × 2.', explanation: '1) 24. 2) 60. 3) 12.' },
    dropdown: { dropdowns: [{ label: 'Volume tells us how much _____ a 3D shape takes up', options: ['Space','Surface','Length','Weight'] }, { label: 'The abbreviation for cubic centimeters is', options: ['cm³','cm²','cm','c³'] }], correctAnswers: ['Space','cm³'], hint1: 'Volume is about the inside.', hint2: 'Cubic = exponent 3.', explanation: 'Volume = space inside. Cubic centimeters = cm³.' }
  },
  // Part 2: Counting Unit Cubes
  {
    introContent: `
# 📦 Counting Unit Cubes

**Part 2 of 7 — Counting Unit Cubes**

To count unit cubes:
1. Count cubes in one **layer** (length × width)
2. Multiply by the number of **layers** (height)

A 6 × 3 layer with 4 layers: $6 \\times 3 \\times 4 = 72$
    `,
    workedContent: `
## Worked Example

**A rectangular prism has a base of 5 × 3 and is 4 cubes tall.**

Base layer: $5 \\times 3 = 15$ cubes
Total: $15 \\times 4 = 60$ cubes ✅
    `,
    practiceContent: `
## Practice

| # | Base | Height | Volume |
|---|------|--------|--------|
| 1 | 4 × 2 | 3 | ? |
| 2 | 6 × 5 | 2 | ? |
| 3 | 3 × 3 | 3 | ? |
    `,
    mcq1: { questions: [{ question: 'A layer has 12 cubes. With 5 layers, total =', options: ['60','17','7','120'], correctAnswer: 0, explanation: '12 × 5 = 60.' }] },
    mcq2: { questions: [{ question: 'Base is 8 × 3. Height is 2. Volume?', options: ['48','24','13','16'], correctAnswer: 0, explanation: '8 × 3 × 2 = 48.' }] },
    input: { boxes: 3, correctAnswers: ['24','60','27'], content: `
**Count Cubes** 🧮

1) Base 4 × 2, height 3. Volume?

2) Base 6 × 5, height 2. Volume?

3) Base 3 × 3, height 3. Volume?
    `, hint1: '4 × 2 = 8 per layer, × 3 layers.', hint2: '6 × 5 = 30 per layer, × 2.', hint3: '3 × 3 = 9 per layer, × 3.', explanation: '1) 8×3=24. 2) 30×2=60. 3) 9×3=27.' },
    dropdown: { dropdowns: [{ label: 'To count unit cubes in a prism, multiply', options: ['Length × Width × Height','Length + Width + Height','Length × Width','2(L+W+H)'] }, { label: 'A cube with side 4 has volume', options: ['64','16','12','24'] }], correctAnswers: ['Length × Width × Height','64'], hint1: 'Three dimensions multiplied.', hint2: '4 × 4 × 4.', explanation: 'V = L×W×H. 4³ = 64.' }
  },
  // Part 3: Volume Formulas
  {
    introContent: `
# 📦 Volume Formulas

**Part 3 of 7 — Volume Formulas**

### Rectangular Prism
$$V = l \\times w \\times h$$

or equivalently: $V = B \\times h$ where $B$ = area of the base

### Cube
$$V = s^3$$
    `,
    workedContent: `
## Worked Example

**Rectangular prism: $l = 8$ cm, $w = 5$ cm, $h = 3$ cm.**

$V = 8 \\times 5 \\times 3 = 120$ cm³ ✅
    `,
    practiceContent: `
## Practice

| # | Dimensions | Formula |
|---|-----------|---------|
| 1 | 10 × 4 × 3 cm | V = lwh |
| 2 | Cube, s = 5 cm | V = s³ |
| 3 | 7 × 6 × 2 m | V = lwh |
    `,
    mcq1: { questions: [{ question: 'Volume of a cube with side 3 cm:', options: ['27 cm³','9 cm³','12 cm³','6 cm³'], correctAnswer: 0, explanation: '$3^3 = 27$ cm³.' }] },
    mcq2: { questions: [{ question: '$V = B \\\\times h$. If B = 20 cm² and h = 6 cm, V = ?', options: ['120 cm³','26 cm³','120 cm²','26 cm³'], correctAnswer: 0, explanation: '20 × 6 = 120 cm³.' }] },
    input: { boxes: 3, correctAnswers: ['120','125','84'], content: `
**Volume Formulas** 🧮

1) Rectangular prism: 10 × 4 × 3 cm. Volume (cm³)?

2) Cube, side 5 cm. Volume (cm³)?

3) Rectangular prism: 7 × 6 × 2 m. Volume (m³)?
    `, hint1: '10 × 4 × 3.', hint2: '5 × 5 × 5.', hint3: '7 × 6 × 2.', explanation: '1) 120. 2) 125. 3) 84.' },
    dropdown: { dropdowns: [{ label: 'Volume of a rectangular prism formula', options: ['V = l × w × h','V = 2(lw + lh + wh)','V = l + w + h','V = l × w'] }, { label: 'Volume of a cube with side s', options: ['s³','s²','6s²','4s'] }], correctAnswers: ['V = l × w × h','s³'], hint1: 'Three dimensions multiplied.', hint2: 'All sides equal.', explanation: 'Rectangular prism: V = lwh. Cube: V = s³.' }
  },
  // Part 4: Irregular Shapes
  {
    introContent: `
# 📦 Irregular Shapes

**Part 4 of 7 — Irregular Shapes**

To find volume of irregular (composite) shapes:
1. **Break** the shape into rectangular prisms
2. **Calculate** the volume of each piece
3. **Add** the volumes together
    `,
    workedContent: `
## Worked Example

**An L-shaped solid: a 4×3×2 block joined to a 2×3×2 block.**

$V_1 = 4 \\times 3 \\times 2 = 24$
$V_2 = 2 \\times 3 \\times 2 = 12$
$V = 24 + 12 = 36$ cubic units ✅
    `,
    practiceContent: `
## Practice

| # | Shape | Strategy |
|---|-------|----------|
| 1 | T-shape | Split into two rectangles |
| 2 | Steps | Split into layers |
| 3 | L-shape | Two rectangular prisms |
    `,
    mcq1: { questions: [{ question: 'To find volume of an L-shaped prism:', options: ['Split into rectangular prisms and add','Measure the longest side only','Use L × W × H directly','It cannot be measured'], correctAnswer: 0, explanation: 'Break composite shapes into simpler pieces.' }] },
    mcq2: { questions: [{ question: 'A shape is made of a 5×2×3 block and a 3×2×3 block. Volume?', options: ['48','30','18','15'], correctAnswer: 0, explanation: '5×2×3=30, 3×2×3=18. Total=48.' }] },
    input: { boxes: 3, correctAnswers: ['36','48','45'], content: `
**Composite Volumes** 🧮

1) Block A: 4×3×2, Block B: 2×3×2. Total volume?

2) Block A: 5×2×3, Block B: 3×2×3. Total volume?

3) Block A: 5×3×2, Block B: 5×1×3. Total volume?
    `, hint1: '24 + 12.', hint2: '30 + 18.', hint3: '30 + 15.', explanation: '1) 24+12=36. 2) 30+18=48. 3) 30+15=45.' },
    dropdown: { dropdowns: [{ label: 'Composite shapes are solved by', options: ['Breaking into simpler shapes and adding volumes','Using one formula for the whole shape','Measuring water displacement only','Guessing'] }, { label: 'If one part has V=20 cm³ and another has V=15 cm³, total is', options: ['35 cm³','300 cm³','5 cm³','20 cm³'] }], correctAnswers: ['Breaking into simpler shapes and adding volumes','35 cm³'], hint1: 'Decompose, then add.', hint2: 'Add them.', explanation: 'Split and add. 20 + 15 = 35 cm³.' }
  },
  // Part 5: Real-World Volume
  {
    introContent: `
# 📦 Real-World Volume

**Part 5 of 7 — Real-World Volume**

Volume is used everywhere:
- **Packing**: How many boxes fit in a crate?
- **Filling**: How much water does a tank hold?
- **Building**: How much concrete is needed?

1 liter = 1,000 cm³
    `,
    workedContent: `
## Worked Example

**A fish tank is 40 cm × 20 cm × 30 cm. How many liters?**

$V = 40 \\times 20 \\times 30 = 24{,}000$ cm³

$24{,}000 \\div 1{,}000 = 24$ liters ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Find |
|---|---------|------|
| 1 | Box 12×8×5 in | Volume |
| 2 | Pool 10×5×2 m | Volume |
| 3 | 50 cm × 30 cm × 20 cm tank | Liters |
    `,
    mcq1: { questions: [{ question: 'A box is 12 in × 8 in × 5 in. Volume?', options: ['480 in³','25 in³','96 in³','200 in³'], correctAnswer: 0, explanation: '12 × 8 × 5 = 480 in³.' }] },
    mcq2: { questions: [{ question: 'How many cm³ in 1 liter?', options: ['1,000','100','10','10,000'], correctAnswer: 0, explanation: '1 L = 1,000 cm³.' }] },
    input: { boxes: 3, correctAnswers: ['480','100','30'], content: `
**Real-World Volume** 🧮

1) Box: 12 × 8 × 5 inches. Volume (in³)?

2) Pool: 10 × 5 × 2 m. Volume (m³)?

3) Tank: 50 × 30 × 20 cm. How many liters?
    `, hint1: '12 × 8 × 5.', hint2: '10 × 5 × 2.', hint3: 'Find cm³ first, then divide by 1000.', explanation: '1) 480. 2) 100. 3) 50×30×20=30,000 cm³ = 30 liters.' },
    dropdown: { dropdowns: [{ label: '1 liter equals', options: ['1,000 cm³','100 cm³','1 m³','10 cm³'] }, { label: 'To find how many boxes fit in a crate, you need', options: ['Volume of both','Perimeter of both','Area of both','Weight of both'] }], correctAnswers: ['1,000 cm³','Volume of both'], hint1: 'Liter-cm³ conversion.', hint2: 'Packing is about 3D space.', explanation: '1 L = 1,000 cm³. Packing requires volume.' }
  },
  // Part 6: Problem-Solving Workshop
  {
    introContent: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Apply volume to multi-step problems:
1. Identify dimensions
2. Choose the right formula
3. Calculate
4. Check units (cubic)
    `,
    workedContent: `
## Worked Example

**A garden bed is 6 m × 3 m × 0.5 m. Soil costs \\$5/m³. Total cost?**

$V = 6 \\times 3 \\times 0.5 = 9$ m³

Cost: $9 \\times 5 = 45$ → **\\$45** ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Steps |
|---|---------|-------|
| 1 | Fill a 4×3×2 box with 1-inch cubes | V = lwh |
| 2 | Double the height of a 5×4×3 box | Compare volumes |
| 3 | Cost to fill 2×2×2 m with gravel at \\$3/m³ | V then cost |
    `,
    mcq1: { questions: [{ question: 'Double the height of a 5×4×3 box. New volume?', options: ['120','60','240','30'], correctAnswer: 0, explanation: '5 × 4 × 6 = 120.' }] },
    mcq2: { questions: [{ question: 'A pool holds 200 m³. Half-filled = ?', options: ['100 m³','400 m³','200 m³','50 m³'], correctAnswer: 0, explanation: '200 ÷ 2 = 100 m³.' }] },
    input: { boxes: 3, correctAnswers: ['24','120','24'], content: `
**Problem Solving** 🧮

1) How many 1-inch cubes fill a 4 × 3 × 2 inch box?

2) A 5 × 4 × 3 box. You double the height. New volume?

3) A 2 × 2 × 2 m hole. Gravel costs \\$3/m³. Total cost?
    `, hint1: 'V = 4 × 3 × 2.', hint2: 'New height = 6. V = 5 × 4 × 6.', hint3: 'V = 8. Cost = 8 × 3.', explanation: '1) 24. 2) 120. 3) V=8, cost=8×3=$24.' },
    dropdown: { dropdowns: [{ label: 'Doubling one dimension of a prism', options: ['Doubles the volume','Quadruples the volume','Does not change volume','Triples the volume'] }, { label: 'To find cost of filling, first find', options: ['Volume','Perimeter','Surface area','Weight'] }], correctAnswers: ['Doubles the volume','Volume'], hint1: 'V = l × w × h. Double one = double V.', hint2: 'Cost depends on how much space to fill.', explanation: 'Doubling one dimension doubles V. Cost needs volume first.' }
  },
  // Part 7: Review & Applications
  {
    introContent: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Formulas
- **Rectangular prism**: $V = l \\times w \\times h$
- **Cube**: $V = s^3$
- **Composite**: Split and add volumes
- **1 liter = 1,000 cm³**
    `,
    workedContent: `
## Worked Example

**Cube side 6 cm. Volume?**
$V = 6^3 = 216$ cm³ ✅
    `,
    practiceContent: `
## Practice

| # | Type | Problem |
|---|------|---------|
| 1 | Prism | 8 × 5 × 4 |
| 2 | Cube | s = 7 |
| 3 | Convert | 5,000 cm³ to liters |
    `,
    mcq1: { questions: [{ question: 'Volume of 8 × 5 × 4 cm prism?', options: ['160 cm³','80 cm³','17 cm³','320 cm³'], correctAnswer: 0, explanation: '8 × 5 × 4 = 160 cm³.' }] },
    mcq2: { questions: [{ question: '5,000 cm³ = ? liters', options: ['5','50','0.5','500'], correctAnswer: 0, explanation: '5,000 ÷ 1,000 = 5 liters.' }] },
    input: { boxes: 3, correctAnswers: ['160','343','5'], content: `
**Review** 🧮

1) Rectangular prism 8 × 5 × 4 cm. Volume (cm³)?

2) Cube, side 7 cm. Volume (cm³)?

3) 5,000 cm³ = ? liters
    `, hint1: '8 × 5 × 4.', hint2: '7³.', hint3: 'Divide by 1,000.', explanation: '1) 160. 2) 343. 3) 5.' },
    dropdown: { dropdowns: [{ label: 'Volume formula for a rectangular prism', options: ['V = l × w × h','V = 2(l+w+h)','V = l × w','V = 6s²'] }, { label: 'To convert cm³ to liters, divide by', options: ['1,000','100','10','10,000'] }], correctAnswers: ['V = l × w × h','1,000'], hint1: 'Three dimensions.', hint2: '1 L = 1,000 cm³.', explanation: 'V = lwh. Divide cm³ by 1,000 for liters.' }
  }
]

};
