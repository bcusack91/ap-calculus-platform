#!/usr/bin/env python3
"""
Generates 7 interactive-lesson TypeScript files for SAT Ratios & Proportions.
Output directory: src/data/interactive-lessons/
File pattern:    sat-sat-ratios-proportions-sat-part{1..7}.ts
"""

import os, textwrap

OUT_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "src", "data", "interactive-lessons",
)

SLUG = "sat-ratios-proportions-sat"


def write(n: int, body: str):
    path = os.path.join(OUT_DIR, f"sat-{SLUG}-part{n}.ts")
    with open(path, "w") as f:
        f.write(body)
    print(f"  ✓ wrote {path}  ({len(body.splitlines())} lines)")


# ── Part 1: Ratio Basics ────────────────────────────────────────────────────
def part1():
    write(1, textwrap.dedent("""\
export const satRatiosPart1Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'sat-rp1-intro',
      type: 'text' as const,
      content: `
# 📊 Ratio Basics

**Part 1 of 7 — Part-to-Part, Part-to-Whole, Simplifying Ratios & Ratio Tables**

A **ratio** compares two (or more) quantities. Ratios show up constantly on the SAT — in word problems, data tables, and geometry.

| Notation | Meaning |
|----------|---------|
| $a : b$ | Part-to-part ratio |
| $\\\\frac{a}{a+b}$ | Part-to-whole fraction for $a$ |
| $\\\\frac{b}{a+b}$ | Part-to-whole fraction for $b$ |

**Key idea:** A ratio like $3 : 5$ means for every 3 units of one quantity there are 5 units of another. The actual amounts could be $6 : 10$, $9 : 15$, etc.

**Simplifying ratios:** Divide every term by the GCF (greatest common factor).

$$12 : 8 = \\\\frac{12}{4} : \\\\frac{8}{4} = 3 : 2$$
      `
    },
    {
      id: 'sat-rp1-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1 — Part-to-Part:** A bag contains red and blue marbles in the ratio $4 : 7$. If there are 28 blue marbles, how many red marbles are there?

$$\\\\frac{4}{7} = \\\\frac{r}{28} \\\\implies r = 4 \\\\times 4 = 16 \\\\text{ red marbles}$$

**Example 2 — Part-to-Whole:** In the same bag, what fraction of the marbles are red?

$$\\\\text{Total parts} = 4 + 7 = 11 \\\\implies \\\\frac{4}{11} \\\\text{ are red}$$

**Example 3 — Three-part ratio:** A recipe uses flour, sugar, and butter in the ratio $5 : 3 : 2$. If you use 15 cups of flour, how much sugar and butter?

$$\\\\text{Multiplier} = \\\\frac{15}{5} = 3 \\\\implies \\\\text{sugar} = 9, \\\\; \\\\text{butter} = 6$$

**SAT Tip:** When a ratio problem says "the ratio of A to B is $m$ to $n$", set up $\\\\frac{A}{B} = \\\\frac{m}{n}$ immediately.

---

### Ratio Tables

A **ratio table** scales every column by the same multiplier:

| Multiplier | Red | Blue | Total |
|------------|-----|------|-------|
| $\\\\times 1$ | 4 | 7 | 11 |
| $\\\\times 2$ | 8 | 14 | 22 |
| $\\\\times 3$ | 12 | 21 | 33 |
| $\\\\times 5$ | 20 | 35 | 55 |
      `
    },
    {
      id: 'sat-rp1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Ratio Fundamentals** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'The ratio of cats to dogs at a shelter is $5 : 3$. If there are 40 cats, how many dogs are there?',
            options: ['$15$', '$20$', '$24$', '$30$'],
            correctAnswer: 2,
            explanation: 'Multiplier $= 40 / 5 = 8$. Dogs $= 3 \\\\times 8 = 24$.'
          },
          {
            question: 'Simplify the ratio $45 : 30 : 15$.',
            options: ['$9 : 6 : 3$', '$3 : 2 : 1$', '$15 : 10 : 5$', '$6 : 4 : 2$'],
            correctAnswer: 1,
            explanation: 'GCF $= 15$. Divide each term: $45/15 : 30/15 : 15/15 = 3 : 2 : 1$.'
          }
        ]
      }
    },
    {
      id: 'sat-rp1-partwhole',
      type: 'text' as const,
      content: `
## Part-to-Whole Conversions

Conversion between part-to-part and part-to-whole is **the single most tested ratio skill** on the SAT.

**Given:** The ratio of boys to girls in a class is $3 : 5$.

| Question | Setup | Answer |
|----------|-------|--------|
| Fraction of boys | $\\\\frac{3}{3+5}$ | $\\\\frac{3}{8}$ |
| Fraction of girls | $\\\\frac{5}{3+5}$ | $\\\\frac{5}{8}$ |
| If 40 students total, how many boys? | $\\\\frac{3}{8} \\\\times 40$ | $15$ |
| If 25 girls, total students? | $\\\\frac{5}{8} = \\\\frac{25}{T}$ | $T = 40$ |

**SAT Tip:** Whenever you see "ratio of A to B", add the parts to get the whole. This converts any part-to-part ratio into part-to-whole fractions instantly.
      `
    },
    {
      id: 'sat-rp1-input1',
      type: 'input-boxes' as const,
      content: `
**Part-to-Whole Practice** 🧮

The ratio of apples to oranges in a basket is $7 : 3$. There are 50 pieces of fruit total.

1) How many apples are in the basket?
2) How many oranges are in the basket?
3) If 5 more oranges are added, what is the new total number of oranges?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['35', '15', '20'],
        hint1: 'Total parts $= 7 + 3 = 10$. Multiplier $= 50 / 10 = 5$. Apples $= 7 \\\\times 5$.',
        hint2: 'Oranges $= 3 \\\\times 5 = 15$.',
        hint3: 'New oranges $= 15 + 5 = 20$.',
        explanation: 'Apples $= 35$, oranges $= 15$. After adding 5 oranges you have $20$ oranges total.'
      }
    },
    {
      id: 'sat-rp1-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Ratio Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A ratio of $4 : 6$ in simplest form is …',
            options: ['$4 : 6$', '$2 : 3$', '$1 : 1.5$', '$8 : 12$']
          },
          {
            label: 'If the ratio of X to Y is $5 : 2$, the fraction of the total that is Y equals …',
            options: ['$\\\\frac{2}{5}$', '$\\\\frac{5}{7}$', '$\\\\frac{2}{7}$', '$\\\\frac{5}{2}$']
          },
          {
            label: 'Doubling every term in a ratio …',
            options: ['changes the ratio', 'keeps the ratio the same', 'halves the ratio', 'squares the ratio']
          }
        ],
        correctAnswers: ['$2 : 3$', '$\\\\frac{2}{7}$', 'keeps the ratio the same'],
        hint1: 'Divide both terms by 2.',
        hint2: 'Total parts $= 5 + 2 = 7$. Y's share is $2/7$.',
        hint3: 'Multiplying every term by the same number is like scaling — the ratio is unchanged.',
        explanation: '$4:6 = 2:3$. Part-to-whole for Y: $2/(5+2) = 2/7$. Scaling all terms preserves the ratio.'
      }
    },
    {
      id: 'sat-rp1-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'In a mixture of nuts, almonds and cashews are in the ratio $2 : 3$. If the mixture weighs 500 grams, how many grams of cashews are in the mixture?',
            options: ['$100$', '$200$', '$250$', '$300$'],
            correctAnswer: 3,
            explanation: 'Total parts $= 2 + 3 = 5$. Cashews $= \\\\frac{3}{5} \\\\times 500 = 300$ grams.'
          },
          {
            question: 'The ratio of red to blue to green beads on a necklace is $1 : 4 : 5$. If there are 60 beads in total, how many more green beads are there than red beads?',
            options: ['$18$', '$20$', '$24$', '$30$'],
            correctAnswer: 2,
            explanation: 'Total parts $= 10$. Multiplier $= 6$. Red $= 6$, green $= 30$. Difference $= 30 - 6 = 24$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 2: Proportions & Cross-Multiplication ──────────────────────────────
def part2():
    write(2, textwrap.dedent("""\
export const satRatiosPart2Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'sat-rp2-intro',
      type: 'text' as const,
      content: `
# ⚖️ Proportions & Cross-Multiplication

**Part 2 of 7 — Setting Up Proportions, Cross-Multiplying & Scaling**

A **proportion** states that two ratios are equal:

$$\\\\frac{a}{b} = \\\\frac{c}{d}$$

**Cross-multiplication** gives:

$$a \\\\cdot d = b \\\\cdot c$$

This is the primary tool for solving proportion problems on the SAT.

**Example 1:** Solve $\\\\frac{3}{8} = \\\\frac{x}{24}$.

$$3 \\\\times 24 = 8 \\\\times x \\\\implies 72 = 8x \\\\implies x = 9$$

**Example 2:** Solve $\\\\frac{5}{x} = \\\\frac{15}{27}$.

$$5 \\\\times 27 = 15x \\\\implies 135 = 15x \\\\implies x = 9$$
      `
    },
    {
      id: 'sat-rp2-scaling',
      type: 'text' as const,
      content: `
## Scaling Recipes & Real-World Proportions

**Example 3 — Recipe Scaling:** A recipe for 4 servings calls for 6 cups of flour. How much flour is needed for 10 servings?

$$\\\\frac{6}{4} = \\\\frac{x}{10} \\\\implies 6 \\\\times 10 = 4x \\\\implies x = 15 \\\\text{ cups}$$

**Example 4 — Map Scale:** On a map, 2 cm represents 50 km. If two cities are 7 cm apart on the map, what is the actual distance?

$$\\\\frac{2}{50} = \\\\frac{7}{d} \\\\implies 2d = 350 \\\\implies d = 175 \\\\text{ km}$$

**Example 5 — Shadow Proportion:** A 6-foot person casts a 4-foot shadow. A tree casts a 20-foot shadow. How tall is the tree?

$$\\\\frac{6}{4} = \\\\frac{h}{20} \\\\implies 6 \\\\times 20 = 4h \\\\implies h = 30 \\\\text{ feet}$$

**SAT Tip:** Always put matching units in matching positions:

$$\\\\frac{\\\\text{object}_1}{\\\\text{shadow}_1} = \\\\frac{\\\\text{object}_2}{\\\\text{shadow}_2}$$
      `
    },
    {
      id: 'sat-rp2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Cross-Multiplication** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Solve: $\\\\frac{7}{x} = \\\\frac{21}{36}$',
            options: ['$x = 9$', '$x = 12$', '$x = 14$', '$x = 18$'],
            correctAnswer: 1,
            explanation: '$7 \\\\times 36 = 21x \\\\implies 252 = 21x \\\\implies x = 12$.'
          },
          {
            question: 'A recipe for 6 cookies uses 2 eggs. How many eggs are needed for 21 cookies?',
            options: ['$5$', '$6$', '$7$', '$8$'],
            correctAnswer: 2,
            explanation: '$\\\\frac{2}{6} = \\\\frac{e}{21} \\\\implies 2 \\\\times 21 = 6e \\\\implies e = 7$.'
          }
        ]
      }
    },
    {
      id: 'sat-rp2-multivar',
      type: 'text' as const,
      content: `
## Multi-Step Proportion Problems

Sometimes the SAT nests a proportion inside a larger problem.

**Example 6:** The ratio of boys to girls in a class is $3 : 4$. The ratio of girls to teachers is $8 : 1$. If there are 3 teachers, how many boys are in the class?

**Step 1:** Girls $= 8 \\\\times 3 = 24$.

**Step 2:** $\\\\frac{\\\\text{boys}}{\\\\text{girls}} = \\\\frac{3}{4} \\\\implies \\\\frac{b}{24} = \\\\frac{3}{4} \\\\implies b = 18$.

**Example 7:** If $\\\\frac{a}{b} = \\\\frac{2}{5}$ and $\\\\frac{b}{c} = \\\\frac{5}{3}$, find $\\\\frac{a}{c}$.

$$\\\\frac{a}{c} = \\\\frac{a}{b} \\\\cdot \\\\frac{b}{c} = \\\\frac{2}{5} \\\\cdot \\\\frac{5}{3} = \\\\frac{2}{3}$$

**SAT Tip:** Chain ratios by ensuring the shared quantity has the same value in both ratios. Then multiply straight across.
      `
    },
    {
      id: 'sat-rp2-input1',
      type: 'input-boxes' as const,
      content: `
**Proportion Practice** 🧮

1) Solve $\\\\frac{4}{9} = \\\\frac{x}{45}$.
2) A car uses 3 gallons of gas for every 90 miles. How many gallons for 210 miles?
3) If $\\\\frac{a}{b} = \\\\frac{3}{7}$ and $b = 35$, find $a$.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '7', '15'],
        hint1: '$4 \\\\times 45 = 9x$.',
        hint2: '$\\\\frac{3}{90} = \\\\frac{g}{210} \\\\implies 3 \\\\times 210 = 90g$.',
        hint3: '$\\\\frac{a}{35} = \\\\frac{3}{7} \\\\implies 7a = 105$.',
        explanation: '$x = 20$, gallons $= 7$, $a = 15$.'
      }
    },
    {
      id: 'sat-rp2-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Proportion Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Cross-multiplying $\\\\frac{a}{b} = \\\\frac{c}{d}$ gives …',
            options: ['$a + d = b + c$', '$ad = bc$', '$ac = bd$', '$a/c = b/d$']
          },
          {
            label: 'In a proportion, if you multiply numerator and denominator of one side by the same number, the proportion …',
            options: ['becomes invalid', 'stays true', 'reverses', 'doubles']
          },
          {
            label: 'To find the unknown in $\\\\frac{5}{12} = \\\\frac{x}{36}$, the fastest method is …',
            options: ['guess and check', 'cross-multiply', 'add 5 to both sides', 'subtract 12 from 36']
          }
        ],
        correctAnswers: ['$ad = bc$', 'stays true', 'cross-multiply'],
        hint1: 'Multiply diagonally.',
        hint2: 'Equivalent fractions have the same value.',
        hint3: '$5 \\\\times 36 = 12x$ is the fastest path.',
        explanation: 'Cross-multiplication gives $ad = bc$. Scaling a fraction keeps it equivalent. Cross-multiplying is the standard technique.'
      }
    },
    {
      id: 'sat-rp2-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'On a blueprint, $\\\\frac{1}{4}$ inch represents 3 feet. A room measures $2\\\\frac{1}{2}$ inches on the blueprint. What is the actual length of the room in feet?',
            options: ['$24$', '$30$', '$36$', '$42$'],
            correctAnswer: 1,
            explanation: '$\\\\frac{0.25}{3} = \\\\frac{2.5}{d} \\\\implies 0.25d = 7.5 \\\\implies d = 30$ feet.'
          },
          {
            question: 'If 8 machines can produce 560 widgets in 7 hours, how many widgets can 5 machines produce in 10 hours?',
            options: ['$350$', '$400$', '$500$', '$700$'],
            correctAnswer: 2,
            explanation: 'Rate per machine per hour $= 560/(8 \\\\times 7) = 10$. With 5 machines for 10 hours: $5 \\\\times 10 \\\\times 10 = 500$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 3: Unit Rates & Unit Conversions ────────────────────────────────────
def part3():
    write(3, textwrap.dedent("""\
export const satRatiosPart3Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'sat-rp3-intro',
      type: 'text' as const,
      content: `
# ⏱️ Unit Rates & Unit Conversions

**Part 3 of 7 — Rate = Quantity ÷ Time, Dimensional Analysis & Speed Conversions**

A **unit rate** expresses a ratio as "something per one unit":

$$\\\\text{Unit rate} = \\\\frac{\\\\text{total quantity}}{\\\\text{total units}}$$

**Common examples:**

| Situation | Rate |
|-----------|------|
| 240 miles in 4 hours | $60$ mph |
| \\$45 for 9 pounds | \\$5 per pound |
| 150 words in 3 minutes | 50 wpm |

**Example 1:** A printer produces 360 pages in 6 minutes. What is the rate in pages per minute?

$$\\\\text{Rate} = \\\\frac{360}{6} = 60 \\\\text{ pages/min}$$
      `
    },
    {
      id: 'sat-rp3-dimensional',
      type: 'text' as const,
      content: `
## Dimensional Analysis (Unit Conversion)

Multiply by conversion factors so that unwanted units cancel:

**Example 2:** Convert 45 miles per hour to feet per second.

$$45 \\\\;\\\\frac{\\\\text{mi}}{\\\\text{hr}} \\\\times \\\\frac{5{,}280 \\\\;\\\\text{ft}}{1 \\\\;\\\\text{mi}} \\\\times \\\\frac{1 \\\\;\\\\text{hr}}{3{,}600 \\\\;\\\\text{sec}} = \\\\frac{45 \\\\times 5{,}280}{3{,}600} = 66 \\\\;\\\\frac{\\\\text{ft}}{\\\\text{sec}}$$

**Example 3:** A car gets 30 miles per gallon. Gas costs \\$4.50 per gallon. How much does it cost to drive 450 miles?

$$\\\\text{Gallons needed} = \\\\frac{450}{30} = 15 \\\\implies \\\\text{Cost} = 15 \\\\times 4.50 = \\\\$67.50$$

**Key conversion factors for the SAT:**

| From | To | Factor |
|------|----|--------|
| 1 mile | 5,280 feet | multiply by 5,280 |
| 1 hour | 60 minutes | multiply by 60 |
| 1 hour | 3,600 seconds | multiply by 3,600 |
| 1 km | 1,000 m | multiply by 1,000 |
| 1 mile | ≈ 1.609 km | multiply by 1.609 |
      `
    },
    {
      id: 'sat-rp3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Unit Rates** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A factory produces 2,400 bolts in an 8-hour shift. What is the production rate in bolts per minute?',
            options: ['$5$', '$30$', '$50$', '$300$'],
            correctAnswer: 0,
            explanation: '$8$ hours $= 480$ minutes. Rate $= 2{,}400 / 480 = 5$ bolts per minute.'
          },
          {
            question: 'A car travels 180 km in 2.5 hours. What is its average speed in km/h?',
            options: ['$45$', '$60$', '$72$', '$90$'],
            correctAnswer: 2,
            explanation: 'Speed $= 180 / 2.5 = 72$ km/h.'
          }
        ]
      }
    },
    {
      id: 'sat-rp3-compare',
      type: 'text' as const,
      content: `
## Comparing Rates

The SAT frequently asks you to compare two rates and decide which is better.

**Example 4:** Store A sells 5 lb of rice for \\$8.75. Store B sells 8 lb for \\$13.60. Which is the better deal?

$$\\\\text{Store A: } \\\\frac{8.75}{5} = \\\\$1.75/\\\\text{lb}$$

$$\\\\text{Store B: } \\\\frac{13.60}{8} = \\\\$1.70/\\\\text{lb}$$

Store B is cheaper per pound.

**Example 5 — Speed comparison:** Runner 1 covers 400 m in 50 s. Runner 2 covers 1 km in 2 min 5 s. Who is faster?

$$\\\\text{Runner 1: } \\\\frac{400}{50} = 8 \\\\text{ m/s}$$

$$\\\\text{Runner 2: } \\\\frac{1{,}000}{125} = 8 \\\\text{ m/s}$$

They have the same speed!
      `
    },
    {
      id: 'sat-rp3-input1',
      type: 'input-boxes' as const,
      content: `
**Unit Conversion Practice** 🧮

1) Convert 90 km/h to m/s. (Give as a whole number.)
2) A worker earns \\$18 per hour and works 40 hours per week. What is the weekly pay in dollars?
3) If 1 inch = 2.54 cm, how many centimeters are in 5 inches? (Give to one decimal.)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['25', '720', '12.7'],
        hint1: '$90 \\\\times \\\\frac{1{,}000}{3{,}600} = 90 \\\\times \\\\frac{1}{3.6}$.',
        hint2: '$18 \\\\times 40$.',
        hint3: '$5 \\\\times 2.54$.',
        explanation: '$90 \\\\div 3.6 = 25$ m/s. Weekly pay $= 720$. $5 \\\\times 2.54 = 12.7$ cm.'
      }
    },
    {
      id: 'sat-rp3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Rate Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To convert hours to seconds you multiply by …',
            options: ['60', '360', '3,600', '60,000']
          },
          {
            label: 'If a unit rate is $\\\\$2.50$ per item and you buy 12 items, the total cost is …',
            options: ['$\\\\$25.00$', '$\\\\$30.00$', '$\\\\$35.00$', '$\\\\$14.50$']
          },
          {
            label: 'Dimensional analysis works by multiplying by fractions that equal …',
            options: ['zero', 'one', 'the unit rate', 'infinity']
          }
        ],
        correctAnswers: ['3,600', '$\\\\$30.00$', 'one'],
        hint1: '$1$ hour $= 60$ min $\\\\times 60$ sec.',
        hint2: '$2.50 \\\\times 12 = 30$.',
        hint3: 'Each conversion fraction equals 1 (numerator = denominator in different units).',
        explanation: '1 hr $= 3{,}600$ s. $2.50 \\\\times 12 = \\\\$30$. Conversion factors are fractions equal to 1.'
      }
    },
    {
      id: 'sat-rp3-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A hose fills a 600-gallon tank in 4 hours. A second hose fills the same tank in 6 hours. If both hoses run together, how long does it take to fill the tank?',
            options: ['$2$ hours', '$2.4$ hours', '$3$ hours', '$5$ hours'],
            correctAnswer: 1,
            explanation: 'Hose 1: $150$ gal/hr. Hose 2: $100$ gal/hr. Combined: $250$ gal/hr. Time $= 600/250 = 2.4$ hours.'
          },
          {
            question: 'An athlete runs a 10-km race in 42 minutes. What is the runner\\'s average speed in km/h?',
            options: ['$12.0$', '$\\\\approx 14.3$', '$15.0$', '$\\\\approx 16.7$'],
            correctAnswer: 1,
            explanation: '$42$ min $= 0.7$ hr. Speed $= 10 / 0.7 \\\\approx 14.3$ km/h.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 4: Percent Problems ────────────────────────────────────────────────
def part4():
    write(4, textwrap.dedent("""\
export const satRatiosPart4Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'sat-rp4-intro',
      type: 'text' as const,
      content: `
# 💯 Percent Problems

**Part 4 of 7 — Percent Of, Percent Increase/Decrease & Successive Percents**

A **percent** is a ratio out of 100:

$$p\\\\% = \\\\frac{p}{100}$$

**Three core percent equations:**

| Find | Formula |
|------|---------|
| Percent of a number | $\\\\text{part} = \\\\frac{p}{100} \\\\times \\\\text{whole}$ |
| What percent? | $\\\\frac{\\\\text{part}}{\\\\text{whole}} \\\\times 100$ |
| Find the whole | $\\\\text{whole} = \\\\frac{\\\\text{part}}{p/100}$ |

**Example 1:** What is $35\\\\%$ of $80$?

$$0.35 \\\\times 80 = 28$$

**Example 2:** $18$ is what percent of $72$?

$$\\\\frac{18}{72} \\\\times 100 = 25\\\\%$$
      `
    },
    {
      id: 'sat-rp4-change',
      type: 'text' as const,
      content: `
## Percent Increase & Decrease

$$\\\\text{Percent change} = \\\\frac{|\\\\text{new} - \\\\text{old}|}{\\\\text{old}} \\\\times 100\\\\%$$

**Multiplier shortcut:**
- Increase by $p\\\\%$: multiply by $1 + p/100$.
- Decrease by $p\\\\%$: multiply by $1 - p/100$.

**Example 3 — Increase:** A shirt costs \\$40. After a $15\\\\%$ markup, the new price is:

$$40 \\\\times 1.15 = \\\\$46$$

**Example 4 — Decrease:** A laptop originally costs \\$1{,}200. It's on sale for $25\\\\%$ off:

$$1{,}200 \\\\times 0.75 = \\\\$900$$

**Example 5:** A stock goes from \\$50 to \\$62. What is the percent increase?

$$\\\\frac{62 - 50}{50} \\\\times 100 = 24\\\\%$$

**SAT Tip:** The denominator in percent change is always the **original** value, not the new value.
      `
    },
    {
      id: 'sat-rp4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Percent Calculations** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A population grows from 800 to 1,000. What is the percent increase?',
            options: ['$20\\\\%$', '$25\\\\%$', '$80\\\\%$', '$200\\\\%$'],
            correctAnswer: 1,
            explanation: '$\\\\frac{1{,}000 - 800}{800} \\\\times 100 = \\\\frac{200}{800} \\\\times 100 = 25\\\\%$.'
          },
          {
            question: 'After a $30\\\\%$ discount, a jacket costs \\$56. What was the original price?',
            options: ['$\\\\$70$', '$\\\\$72.80$', '$\\\\$80$', '$\\\\$86$'],
            correctAnswer: 2,
            explanation: 'After $30\\\\%$ off the multiplier is $0.70$. $0.70 \\\\times P = 56 \\\\implies P = 80$.'
          }
        ]
      }
    },
    {
      id: 'sat-rp4-successive',
      type: 'text' as const,
      content: `
## Successive Percent Changes

When two (or more) percent changes happen one after another, **multiply** the multipliers — do NOT add the percentages.

**Example 6:** A price increases by $20\\\\%$ then decreases by $20\\\\%$. Is it back to the original?

$$1.20 \\\\times 0.80 = 0.96$$

**No!** The final price is $96\\\\%$ of the original — a $4\\\\%$ net decrease.

**Example 7:** An investment gains $10\\\\%$ in year 1 and $15\\\\%$ in year 2. Starting value: \\$2{,}000.

$$2{,}000 \\\\times 1.10 \\\\times 1.15 = 2{,}000 \\\\times 1.265 = \\\\$2{,}530$$

Overall increase: $26.5\\\\%$, not $25\\\\%$.

**Example 8 — Tax then tip:** A meal costs \\$50. Tax is $8\\\\%$, then a $20\\\\%$ tip is computed on the post-tax amount.

$$50 \\\\times 1.08 \\\\times 1.20 = 50 \\\\times 1.296 = \\\\$64.80$$
      `
    },
    {
      id: 'sat-rp4-input1',
      type: 'input-boxes' as const,
      content: `
**Percent Practice** 🧮

1) What is $18\\\\%$ of $250$?
2) A TV costs \\$600 after a $25\\\\%$ discount. What was the original price?
3) A value increases by $50\\\\%$ then decreases by $50\\\\%$. What percent of the original value remains?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['45', '800', '75'],
        hint1: '$0.18 \\\\times 250$.',
        hint2: '$0.75 \\\\times P = 600 \\\\implies P = ?$',
        hint3: '$1.50 \\\\times 0.50 = ?$',
        explanation: '$0.18 \\\\times 250 = 45$. $P = 600/0.75 = 800$. $1.50 \\\\times 0.50 = 0.75 = 75\\\\%$.'
      }
    },
    {
      id: 'sat-rp4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Percent Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Increasing a value by $40\\\\%$ is the same as multiplying by …',
            options: ['$0.40$', '$1.04$', '$1.40$', '$4.0$']
          },
          {
            label: 'The percent change formula always divides by the …',
            options: ['new value', 'original value', 'difference', 'average']
          },
          {
            label: 'If a price increases by $10\\\\%$ and then by another $10\\\\%$, the overall increase is …',
            options: ['$20\\\\%$', '$21\\\\%$', '$22\\\\%$', '$11\\\\%$']
          }
        ],
        correctAnswers: ['$1.40$', 'original value', '$21\\\\%$'],
        hint1: 'Add the percent as a decimal to 1.',
        hint2: 'Percent change = (new − old) / old.',
        hint3: '$1.10 \\\\times 1.10 = 1.21$, so $21\\\\%$ increase.',
        explanation: 'Multiply by $1 + 0.40 = 1.40$. Always divide by the original. $1.1^2 = 1.21$, i.e., $21\\\\%$.'
      }
    },
    {
      id: 'sat-rp4-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A store marks up a product by $60\\\\%$ then offers a $25\\\\%$ discount. The final price is what percent of the original cost?',
            options: ['$120\\\\%$', '$135\\\\%$', '$100\\\\%$', '$85\\\\%$'],
            correctAnswer: 0,
            explanation: 'Multiplier $= 1.60 \\\\times 0.75 = 1.20$. The final price is $120\\\\%$ of cost — a $20\\\\%$ profit.'
          },
          {
            question: 'In 2023, a town\\'s population was 12,000. It grew by $5\\\\%$ in 2024 and by $8\\\\%$ in 2025. What is the population at the end of 2025?',
            options: ['$13{,}560$', '$13{,}608$', '$14{,}000$', '$13{,}200$'],
            correctAnswer: 1,
            explanation: '$12{,}000 \\\\times 1.05 \\\\times 1.08 = 12{,}000 \\\\times 1.134 = 13{,}608$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 5: Direct & Inverse Variation ──────────────────────────────────────
def part5():
    write(5, textwrap.dedent("""\
export const satRatiosPart5Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'sat-rp5-intro',
      type: 'text' as const,
      content: `
# 🔗 Direct & Inverse Variation

**Part 5 of 7 — $y = kx$, $y = k/x$, Identifying from Tables & Solving**

**Direct variation:** $y$ is directly proportional to $x$:

$$y = kx \\\\qquad \\\\text{or equivalently} \\\\qquad \\\\frac{y}{x} = k$$

The constant $k$ is called the **constant of proportionality**.

**Example 1:** If $y$ varies directly with $x$, and $y = 12$ when $x = 4$, find $k$ and the equation.

$$k = \\\\frac{y}{x} = \\\\frac{12}{4} = 3 \\\\implies y = 3x$$

**How to identify direct variation from a table:** Compute $y/x$ for each row. If the ratio is constant, the relationship is direct.

| $x$ | $y$ | $y/x$ |
|-----|-----|--------|
| 2 | 6 | 3 |
| 5 | 15 | 3 |
| 8 | 24 | 3 |

Constant ratio → direct variation with $k = 3$.
      `
    },
    {
      id: 'sat-rp5-inverse',
      type: 'text' as const,
      content: `
## Inverse Variation

$y$ is **inversely proportional** to $x$:

$$y = \\\\frac{k}{x} \\\\qquad \\\\text{or equivalently} \\\\qquad xy = k$$

**Example 2:** If $y$ varies inversely with $x$, and $y = 10$ when $x = 3$, find $y$ when $x = 6$.

$$k = xy = 3 \\\\times 10 = 30 \\\\implies y = \\\\frac{30}{6} = 5$$

**How to identify inverse variation from a table:** Compute $x \\\\cdot y$ for each row. If the product is constant, the relationship is inverse.

| $x$ | $y$ | $x \\\\cdot y$ |
|-----|-----|------------|
| 2 | 15 | 30 |
| 5 | 6 | 30 |
| 10 | 3 | 30 |

Constant product → inverse variation with $k = 30$.

---

**Comparison Summary:**

| Feature | Direct ($y = kx$) | Inverse ($y = k/x$) |
|---------|-------------------|---------------------|
| Graph | Line through origin | Hyperbola |
| Test | $y/x$ constant | $xy$ constant |
| As $x$ increases | $y$ increases | $y$ decreases |
      `
    },
    {
      id: 'sat-rp5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Variation Type** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'If $y = 48/x$, what happens to $y$ when $x$ is tripled?',
            options: ['$y$ triples', '$y$ is divided by 3', '$y$ stays the same', '$y$ is multiplied by 9'],
            correctAnswer: 1,
            explanation: 'Inverse variation: $y = 48/(3x) = (1/3)(48/x)$. So $y$ is divided by 3.'
          },
          {
            question: 'Which table shows direct variation?',
            options: ['$x: 1,2,3$ / $y: 5,10,20$', '$x: 1,2,3$ / $y: 4,8,12$', '$x: 1,2,4$ / $y: 12,6,3$', '$x: 2,4,8$ / $y: 1,3,5$'],
            correctAnswer: 1,
            explanation: '$y/x$ = $4/1, 8/2, 12/3$ = $4, 4, 4$. Constant ratio confirms direct variation.'
          }
        ]
      }
    },
    {
      id: 'sat-rp5-solving',
      type: 'text' as const,
      content: `
## Solving Variation Problems

**Example 3 — Direct:** The cost $C$ of gasoline varies directly with the number of gallons $g$ purchased. If 8 gallons cost \\$28, how much do 15 gallons cost?

$$k = \\\\frac{C}{g} = \\\\frac{28}{8} = 3.50 \\\\implies C = 3.50 \\\\times 15 = \\\\$52.50$$

**Example 4 — Inverse:** The time $t$ to complete a job varies inversely with the number of workers $w$. If 6 workers finish in 10 hours, how long will 4 workers take?

$$k = wt = 6 \\\\times 10 = 60 \\\\implies t = \\\\frac{60}{4} = 15 \\\\text{ hours}$$

**Example 5 — Joint:** $z$ varies directly with $x$ and inversely with $y$: $z = kx/y$. If $z = 8$ when $x = 4$ and $y = 3$:

$$8 = \\\\frac{4k}{3} \\\\implies k = 6 \\\\implies z = \\\\frac{6x}{y}$$

Find $z$ when $x = 10, y = 5$: $z = 60/5 = 12$.
      `
    },
    {
      id: 'sat-rp5-input1',
      type: 'input-boxes' as const,
      content: `
**Variation Practice** 🧮

1) $y$ varies directly with $x$. If $y = 20$ when $x = 8$, find $y$ when $x = 14$.
2) $y$ varies inversely with $x$. If $y = 9$ when $x = 4$, find $y$ when $x = 12$.
3) The product $xy$ for a data set is always $60$. What is $y$ when $x = 15$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['35', '3', '4'],
        hint1: '$k = 20/8 = 2.5$. $y = 2.5 \\\\times 14$.',
        hint2: '$k = 9 \\\\times 4 = 36$. $y = 36/12$.',
        hint3: '$y = 60/15$.',
        explanation: '$y = 2.5 \\\\times 14 = 35$. $y = 36/12 = 3$. $y = 60/15 = 4$.'
      }
    },
    {
      id: 'sat-rp5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Variation Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The graph of $y = kx$ (direct variation) always passes through …',
            options: ['$(1, 1)$', '$(0, k)$', '$(0, 0)$', '$(k, 0)$']
          },
          {
            label: 'For inverse variation, the test on a data table is to check whether … is constant.',
            options: ['$y / x$', '$x + y$', '$x \\\\cdot y$', '$x - y$']
          },
          {
            label: 'If $y = kx$ and $k = 7$, what is $y$ when $x = 0$?',
            options: ['$7$', '$0$', '$1$', 'undefined']
          }
        ],
        correctAnswers: ['$(0, 0)$', '$x \\\\cdot y$', '$0$'],
        hint1: 'When $x = 0$, $y = k(0) = 0$.',
        hint2: 'Inverse: $xy = k$, so check the product.',
        hint3: '$y = 7(0) = 0$.',
        explanation: 'Direct variation lines pass through the origin. Inverse variation: $xy = k$. $y = 7 \\\\cdot 0 = 0$.'
      }
    },
    {
      id: 'sat-rp5-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The number of hours $h$ it takes to paint a house varies inversely with the number of painters $p$. If 3 painters can finish in 8 hours, how many painters are needed to finish in 2 hours?',
            options: ['$6$', '$8$', '$12$', '$24$'],
            correctAnswer: 2,
            explanation: '$k = 3 \\\\times 8 = 24$. $p = 24/2 = 12$ painters.'
          },
          {
            question: 'If $y$ varies directly with $x^2$, and $y = 50$ when $x = 5$, what is $y$ when $x = 3$?',
            options: ['$18$', '$30$', '$12$', '$6$'],
            correctAnswer: 0,
            explanation: '$y = kx^2$. $50 = k(25) \\\\implies k = 2$. $y = 2(9) = 18$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 6: Scale Factors & Similar Figures ─────────────────────────────────
def part6():
    write(6, textwrap.dedent("""\
export const satRatiosPart6Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'sat-rp6-intro',
      type: 'text' as const,
      content: `
# 🗺️ Scale Factors & Similar Figures

**Part 6 of 7 — Map Scales, Similar Triangles & Area/Volume Scaling**

A **scale factor** $k$ relates corresponding lengths of two similar figures:

$$\\\\text{new length} = k \\\\times \\\\text{original length}$$

**Key scaling rules:**

| Dimension | How it scales |
|-----------|---------------|
| Length | $\\\\times k$ |
| Area | $\\\\times k^2$ |
| Volume | $\\\\times k^3$ |

**Example 1 — Map:** A map has scale $1 : 25{,}000$. Two points are 8 cm apart on the map. Actual distance?

$$8 \\\\times 25{,}000 = 200{,}000 \\\\text{ cm} = 2 \\\\text{ km}$$
      `
    },
    {
      id: 'sat-rp6-similar',
      type: 'text' as const,
      content: `
## Similar Triangles

Two triangles are **similar** ($\\\\triangle ABC \\\\sim \\\\triangle DEF$) when corresponding angles are equal and corresponding sides are proportional.

**Example 2:** $\\\\triangle ABC \\\\sim \\\\triangle DEF$ with sides $AB = 6$, $BC = 8$, $CA = 10$ and $DE = 9$. Find $EF$ and $FD$.

$$k = \\\\frac{DE}{AB} = \\\\frac{9}{6} = 1.5$$

$$EF = 8 \\\\times 1.5 = 12 \\\\qquad FD = 10 \\\\times 1.5 = 15$$

**Example 3 — Indirect measurement:** A 5-foot student casts a 3-foot shadow. A flagpole casts a 21-foot shadow. Height of flagpole?

$$\\\\frac{5}{3} = \\\\frac{h}{21} \\\\implies h = \\\\frac{5 \\\\times 21}{3} = 35 \\\\text{ feet}$$

**SAT Tip:** Parallel lines inside a triangle create smaller similar triangles (AA similarity). Watch for these!
      `
    },
    {
      id: 'sat-rp6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Similar Figures** 🔍
      `,
      exercise: {
        questions: [
          {
            question: '$\\\\triangle PQR \\\\sim \\\\triangle STU$. If $PQ = 4$, $QR = 6$, and $ST = 10$, what is $TU$?',
            options: ['$12$', '$15$', '$8$', '$20$'],
            correctAnswer: 1,
            explanation: '$k = 10/4 = 2.5$. $TU = 6 \\\\times 2.5 = 15$.'
          },
          {
            question: 'Two similar rectangles have a length ratio of $3 : 5$. If the smaller has area $36$ cm², what is the area of the larger?',
            options: ['$60$ cm²', '$100$ cm²', '$90$ cm²', '$75$ cm²'],
            correctAnswer: 1,
            explanation: 'Area scales by $k^2 = (5/3)^2 = 25/9$. Area $= 36 \\\\times 25/9 = 100$ cm².'
          }
        ]
      }
    },
    {
      id: 'sat-rp6-areavolume',
      type: 'text' as const,
      content: `
## Area & Volume Scaling

These scaling laws are **extremely important** for SAT geometry.

**Example 4 — Area:** Two similar pentagons have corresponding sides in ratio $2 : 7$. The smaller has area $20$ cm². Find the larger's area.

$$\\\\text{Area ratio} = \\\\left(\\\\frac{7}{2}\\\\right)^2 = \\\\frac{49}{4}$$

$$\\\\text{Larger area} = 20 \\\\times \\\\frac{49}{4} = 245 \\\\text{ cm}^2$$

**Example 5 — Volume:** A model car is built at $1 : 18$ scale. If the model's fuel tank holds $0.5$ mL, estimate the real tank's capacity.

$$\\\\text{Volume ratio} = 18^3 = 5{,}832$$

$$\\\\text{Real capacity} = 0.5 \\\\times 5{,}832 = 2{,}916 \\\\text{ mL} \\\\approx 2.9 \\\\text{ L}$$

**Real-world tank ≈ 50 L**, so this is a rough model (real scaling of hollow objects is more complex), but the math principle holds.

---

**Quick Reference:**

$$\\\\text{If scale factor} = k \\\\implies \\\\text{Perimeter} \\\\times k, \\\\; \\\\text{Area} \\\\times k^2, \\\\; \\\\text{Volume} \\\\times k^3$$
      `
    },
    {
      id: 'sat-rp6-input1',
      type: 'input-boxes' as const,
      content: `
**Scale Factor Practice** 🧮

1) A map scale is $1$ cm $: 50$ km. Two cities are $7.5$ cm apart on the map. Actual distance in km?
2) Two similar triangles have side ratio $3 : 4$. The smaller has area $27$ cm². What is the larger's area?
3) A cube has side 2 cm. A similar cube has side 6 cm. How many times larger is the bigger cube's volume?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['375', '48', '27'],
        hint1: '$7.5 \\\\times 50$.',
        hint2: 'Area ratio $= (4/3)^2 = 16/9$. Larger area $= 27 \\\\times 16/9$.',
        hint3: 'Volume ratio $= (6/2)^3 = 3^3$.',
        explanation: '$7.5 \\\\times 50 = 375$ km. $27 \\\\times 16/9 = 48$ cm². $3^3 = 27$ times.'
      }
    },
    {
      id: 'sat-rp6-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Scaling Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If every length in a figure is doubled, the area is multiplied by …',
            options: ['2', '4', '8', '16']
          },
          {
            label: 'Two triangles with the same three angles are always …',
            options: ['congruent', 'similar', 'right triangles', 'isosceles']
          },
          {
            label: 'The volume of a sphere scales with the cube of the radius, so tripling the radius multiplies the volume by …',
            options: ['3', '9', '27', '81']
          }
        ],
        correctAnswers: ['4', 'similar', '27'],
        hint1: 'Area scales as $k^2$; $2^2 = 4$.',
        hint2: 'AAA (or AA) similarity.',
        hint3: '$3^3 = 27$.',
        explanation: 'Area $\\\\propto k^2$, so doubling lengths quadruples area. Equal angles ⇒ similar. Volume $\\\\propto r^3$, so $3^3 = 27$.'
      }
    },
    {
      id: 'sat-rp6-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'In the figure, $\\\\overline{DE} \\\\parallel \\\\overline{BC}$ in $\\\\triangle ABC$. If $AD = 4$, $DB = 6$, and $DE = 5$, what is $BC$?',
            options: ['$7.5$', '$10$', '$12.5$', '$8$'],
            correctAnswer: 2,
            explanation: '$\\\\triangle ADE \\\\sim \\\\triangle ABC$. $k = AB/AD = 10/4 = 2.5$. $BC = 5 \\\\times 2.5 = 12.5$.'
          },
          {
            question: 'Two similar cylinders have height ratio $2 : 5$. The smaller has volume $40\\\\pi$ cm³. What is the volume of the larger?',
            options: ['$100\\\\pi$', '$250\\\\pi$', '$625\\\\pi$', '$500\\\\pi$'],
            correctAnswer: 2,
            explanation: 'Volume ratio $= (5/2)^3 = 125/8$. $V = 40\\\\pi \\\\times 125/8 = 625\\\\pi$ cm³.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 7: Review & Mixed Practice ─────────────────────────────────────────
def part7():
    write(7, textwrap.dedent("""\
export const satRatiosPart7Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'sat-rp7-intro',
      type: 'text' as const,
      content: `
# 🏁 Review & Mixed Practice

**Part 7 of 7 — Formula Cheat Sheet & Mixed SAT-Style Problems**

## Formula Quick Reference

| Topic | Key Formula / Concept |
|-------|----------------------|
| Simplify ratio | Divide all terms by GCF |
| Part-to-whole | $\\\\frac{\\\\text{part}}{\\\\text{sum of all parts}}$ |
| Proportion | $\\\\frac{a}{b} = \\\\frac{c}{d} \\\\implies ad = bc$ |
| Unit rate | $\\\\frac{\\\\text{quantity}}{\\\\text{units}}$ |
| Percent of | $\\\\text{part} = \\\\frac{p}{100} \\\\times \\\\text{whole}$ |
| Percent change | $\\\\frac{|\\\\text{new} - \\\\text{old}|}{\\\\text{old}} \\\\times 100\\\\%$ |
| Successive % | Multiply the multipliers |
| Direct variation | $y = kx$ ⟹ $y/x$ constant |
| Inverse variation | $y = k/x$ ⟹ $xy$ constant |
| Scale: length | $\\\\times k$ |
| Scale: area | $\\\\times k^2$ |
| Scale: volume | $\\\\times k^3$ |
      `
    },
    {
      id: 'sat-rp7-tips',
      type: 'text' as const,
      content: `
## Top SAT Strategies for Ratio & Proportion Questions

**1. Set up immediately.** Write the proportion or ratio equation before doing any arithmetic.

**2. Match units.** Make sure numerators correspond to the same quantity and denominators to the same quantity.

**3. Part-to-whole is your friend.** Convert part-to-part ratios to part-to-whole if the problem asks about totals.

**4. Never add percents across steps.** Multiply the multipliers for successive percent changes.

**5. Check for inverse variation.** If "more workers → less time" or "faster speed → less time", it's inverse.

**6. Scale correctly.** Length scales by $k$, area by $k^2$, volume by $k^3$. Don't confuse them.

**7. Estimate first.** Before computing, estimate the answer. If a 25% discount on \\$80 is asked, you know it's around \\$60 — eliminate wild choices.
      `
    },
    {
      id: 'sat-rp7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review — Set 1** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A recipe calls for flour and sugar in the ratio $5 : 2$. A baker uses 3.5 cups of sugar. How many cups of flour does the baker use?',
            options: ['$7.0$', '$7.5$', '$8.75$', '$10.0$'],
            correctAnswer: 2,
            explanation: '$\\\\frac{5}{2} = \\\\frac{f}{3.5} \\\\implies f = 5 \\\\times 1.75 = 8.75$ cups.'
          },
          {
            question: 'A shirt is marked up $40\\\\%$ from the wholesale price to the retail price, then put on sale for $30\\\\%$ off retail. What is the final price as a percent of wholesale?',
            options: ['$110\\\\%$', '$98\\\\%$', '$108\\\\%$', '$90\\\\%$'],
            correctAnswer: 1,
            explanation: '$1.40 \\\\times 0.70 = 0.98 = 98\\\\%$ of wholesale — a $2\\\\%$ loss!'
          }
        ]
      }
    },
    {
      id: 'sat-rp7-mixed1',
      type: 'text' as const,
      content: `
## Worked Mixed Problems

**Problem A — Ratio + Percent:** In a class, the ratio of boys to girls is $3 : 5$. If $40\\\\%$ of the boys and $60\\\\%$ of the girls passed an exam, what fraction of the entire class passed?

$$\\\\text{Let boys} = 3k, \\\\; \\\\text{girls} = 5k. \\\\; \\\\text{Total} = 8k.$$

$$\\\\text{Passed} = 0.4(3k) + 0.6(5k) = 1.2k + 3k = 4.2k$$

$$\\\\text{Fraction} = \\\\frac{4.2k}{8k} = \\\\frac{4.2}{8} = \\\\frac{21}{40} = 52.5\\\\%$$

**Problem B — Rate + Proportion:** Pipe A fills a pool at 120 gallons/hour. Pipe B fills it at 80 gallons/hour. The pool holds 600 gallons. How long with both pipes?

$$\\\\text{Combined rate} = 200 \\\\text{ gal/hr}. \\\\quad t = \\\\frac{600}{200} = 3 \\\\text{ hours.}$$

**Problem C — Scale + Area:** A park on a map (scale $1 : 5{,}000$) measures $4$ cm by $6$ cm. Actual area?

$$\\\\text{Actual dimensions:} \\\\; 4 \\\\times 5{,}000 = 20{,}000 \\\\text{ cm} = 200 \\\\text{ m}$$

$$6 \\\\times 5{,}000 = 30{,}000 \\\\text{ cm} = 300 \\\\text{ m}$$

$$\\\\text{Area} = 200 \\\\times 300 = 60{,}000 \\\\text{ m}^2 = 6 \\\\text{ hectares}$$
      `
    },
    {
      id: 'sat-rp7-input1',
      type: 'input-boxes' as const,
      content: `
**Mixed Practice** 🧮

1) If $12$ workers can build a wall in $10$ days, how many days will $15$ workers take? (inverse variation)
2) A price increases by $20\\\\%$ then decreases by $10\\\\%$. What single percent change is this equivalent to? (give as a whole number)
3) Two similar triangles have perimeters $30$ cm and $45$ cm. The smaller has area $50$ cm². What is the larger's area? (give as a decimal)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '8', '112.5'],
        hint1: '$k = 12 \\\\times 10 = 120$. Days $= 120 / 15$.',
        hint2: '$1.20 \\\\times 0.90 = 1.08$, so $8\\\\%$ increase.',
        hint3: '$k = 45/30 = 1.5$. Area ratio $= 1.5^2 = 2.25$. $50 \\\\times 2.25$.',
        explanation: '$120/15 = 8$ days. $1.20 \\\\times 0.90 = 1.08$ → $8\\\\%$ increase. $50 \\\\times 2.25 = 112.5$ cm².'
      }
    },
    {
      id: 'sat-rp7-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Concept Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If the ratio of A to B is $7 : 3$, the fraction of the total that is A equals …',
            options: ['$\\\\frac{7}{3}$', '$\\\\frac{3}{10}$', '$\\\\frac{7}{10}$', '$\\\\frac{3}{7}$']
          },
          {
            label: 'Tripling every side of a cube multiplies its surface area by …',
            options: ['$3$', '$6$', '$9$', '$27$']
          },
          {
            label: 'If speed doubles and distance stays the same, travel time is …',
            options: ['doubled', 'halved', 'unchanged', 'quartered']
          }
        ],
        correctAnswers: ['$\\\\frac{7}{10}$', '$9$', 'halved'],
        hint1: 'Total parts $= 7 + 3 = 10$.',
        hint2: 'Surface area scales as $k^2$; $3^2 = 9$.',
        hint3: '$t = d/v$. If $v$ doubles, $t$ halves (inverse relationship).',
        explanation: 'A's fraction $= 7/10$. Surface area $\\\\propto k^2 = 9$. Time and speed are inversely related.'
      }
    },
    {
      id: 'sat-rp7-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Mixed Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A store sells pens and pencils. The ratio of pens to pencils sold on Monday was $5 : 8$. On Tuesday, the store sold $20\\\\%$ more pens and $25\\\\%$ fewer pencils than Monday. What is the new ratio of pens to pencils?',
            options: ['$1 : 1$', '$6 : 5$', '$3 : 2$', '$2 : 3$'],
            correctAnswer: 0,
            explanation: 'Monday: pens $= 5k$, pencils $= 8k$. Tuesday: pens $= 5k \\\\times 1.2 = 6k$, pencils $= 8k \\\\times 0.75 = 6k$. Ratio $= 6k : 6k = 1 : 1$.'
          },
          {
            question: 'A model airplane is built at $1 : 72$ scale. The real airplane has a wingspan of 36 meters. What is the model\\'s wingspan in centimeters?',
            options: ['$50$ cm', '$72$ cm', '$36$ cm', '$25$ cm'],
            correctAnswer: 0,
            explanation: 'Model wingspan $= 36/72 = 0.5$ m $= 50$ cm.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Main ─────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    os.makedirs(OUT_DIR, exist_ok=True)
    print("Generating SAT Ratios & Proportions lessons…")
    part1()
    part2()
    part3()
    part4()
    part5()
    part6()
    part7()
    print("Done — 7 files written.")
