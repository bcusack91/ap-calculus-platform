#!/usr/bin/env python3
"""
Generates 7 interactive-lesson TypeScript files for SAT Exponential Functions.
Output directory: src/data/interactive-lessons/
File pattern:    sat-sat-exponential-functions-sat-part{1..7}.ts
"""

import os, textwrap

OUT_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "src", "data", "interactive-lessons",
)

SLUG = "sat-exponential-functions-sat"


def write(n: int, body: str):
    path = os.path.join(OUT_DIR, f"sat-{SLUG}-part{n}.ts")
    with open(path, "w") as f:
        f.write(body)
    print(f"  ✓ wrote {path}  ({len(body.splitlines())} lines)")


# ── Part 1: Exponential Functions Basics ─────────────────────────────────────
def part1():
    write(1, textwrap.dedent("""\
export const satExponentialFnPart1Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-ef1-intro',
      type: 'text' as const,
      content: `
# 📈 Exponential Functions Basics

**Part 1 of 7 — The Form $f(x)=a \\\\cdot b^x$, Growth vs Decay, Reading Tables**

An **exponential function** has the general form:

$$f(x) = a \\\\cdot b^x$$

| Parameter | Meaning |
|-----------|---------|
| $a$ | Initial value (the $y$-intercept when $x=0$) |
| $b$ | Base (growth/decay factor) |

**Key rules:**
- If $b > 1$ the function models **exponential growth**.
- If $0 < b < 1$ the function models **exponential decay**.
- $a$ is the value of $f(0)$ because $b^0 = 1$.
- The base $b$ must be **positive** and **not equal to 1**.

**SAT Tip:** On the SAT you'll often need to identify $a$ and $b$ from a table or context — nail down $a$ first by looking at $x = 0$.
      `
    },
    {
      id: 'sat-ef1-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1 — Identify growth or decay:**

$f(x) = 5 \\\\cdot 2^x$

Here $a = 5$ and $b = 2$. Since $b = 2 > 1$, this is **exponential growth**. The function doubles every time $x$ increases by 1.

**Example 2 — Decay:**

$g(x) = 100 \\\\cdot (0.75)^x$

$a = 100$, $b = 0.75$. Since $0 < 0.75 < 1$, this is **exponential decay**. The function retains 75 % of its value with each unit increase in $x$.

**Example 3 — From a table:**

| $x$ | $f(x)$ |
|-----|--------|
| 0 | 8 |
| 1 | 24 |
| 2 | 72 |
| 3 | 216 |

$a = f(0) = 8$. The ratio $\\\\frac{24}{8} = 3$, $\\\\frac{72}{24} = 3$, $\\\\frac{216}{72} = 3$. So $b = 3$ and $f(x) = 8 \\\\cdot 3^x$.

**SAT Trap:** Students sometimes confuse the *ratio* with the *difference*. If the ratio between consecutive outputs is constant, the function is exponential — not linear.
      `
    },
    {
      id: 'sat-ef1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Growth or Decay?** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Which function represents exponential decay?',
            options: ['$f(x)=3 \\\\cdot 4^x$', '$f(x)=7 \\\\cdot (1.05)^x$', '$f(x)=10 \\\\cdot (0.6)^x$', '$f(x)=2 \\\\cdot 3^x$'],
            correctAnswer: 2,
            explanation: 'Decay requires $0 < b < 1$. Only $b = 0.6$ satisfies that condition.'
          },
          {
            question: 'For $f(x) = 12 \\\\cdot 5^x$, what is $f(0)$?',
            options: ['$0$', '$5$', '$12$', '$60$'],
            correctAnswer: 2,
            explanation: '$f(0) = 12 \\\\cdot 5^0 = 12 \\\\cdot 1 = 12$. The coefficient $a$ always equals $f(0)$.'
          }
        ]
      }
    },
    {
      id: 'sat-ef1-tables',
      type: 'text' as const,
      content: `
## Identifying Exponential Functions from Tables

**Strategy:** Compute the ratio of consecutive outputs. If the ratio is constant, the data is exponential.

| $x$ | $f(x)$ | Ratio |
|-----|--------|-------|
| 0 | 4 | — |
| 1 | 12 | $12/4 = 3$ |
| 2 | 36 | $36/12 = 3$ |
| 3 | 108 | $108/36 = 3$ |

Constant ratio $= 3$, so $f(x) = 4 \\\\cdot 3^x$.

Compare with a **linear** table where the *difference* is constant:

| $x$ | $g(x)$ | Difference |
|-----|--------|------------|
| 0 | 4 | — |
| 1 | 7 | $+3$ |
| 2 | 10 | $+3$ |
| 3 | 13 | $+3$ |

Here $g(x) = 3x + 4$ — *linear*, not exponential.

**SAT Tip:** Always check ratios first. If the ratio isn't constant, check differences for linearity.
      `
    },
    {
      id: 'sat-ef1-input1',
      type: 'input-boxes' as const,
      content: `
**Finding $a$ and $b$** 🧮

Given the table below, find the exponential function $f(x) = a \\\\cdot b^x$.

| $x$ | $f(x)$ |
|-----|--------|
| 0 | 5 |
| 1 | 15 |
| 2 | 45 |
| 3 | 135 |

1) What is $a$ (the initial value)?
2) What is $b$ (the base / common ratio)?
3) What is $f(5)$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '3', '1215'],
        hint1: '$a = f(0)$.',
        hint2: '$b = f(1) / f(0) = 15/5$.',
        hint3: '$f(5) = 5 \\\\cdot 3^5 = 5 \\\\cdot 243$.',
        explanation: '$a = 5$, $b = 3$, so $f(x) = 5 \\\\cdot 3^x$. Then $f(5) = 5 \\\\cdot 3^5 = 5 \\\\cdot 243 = 1215$.'
      }
    },
    {
      id: 'sat-ef1-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In $f(x) = a \\\\cdot b^x$, the value of $a$ represents the …',
            options: ['growth rate', 'initial value (y-intercept)', 'exponent', 'slope']
          },
          {
            label: 'If $b = 0.85$, the function is …',
            options: ['growing by 85%', 'decaying by 15%', 'decaying by 85%', 'growing by 15%']
          },
          {
            label: 'To test if a table is exponential you check for a constant …',
            options: ['difference', 'ratio', 'sum', 'product']
          }
        ],
        correctAnswers: ['initial value (y-intercept)', 'decaying by 15%', 'ratio'],
        hint1: 'Plug in $x = 0$: $f(0) = a \\\\cdot b^0 = a$.',
        hint2: '$b = 0.85 = 1 - 0.15$, so the function loses 15 % each step.',
        hint3: 'Exponential → constant ratio between successive outputs.',
        explanation: '$a = f(0)$ is the initial value. $b = 0.85$ means 15 % decay per unit. Exponential data has a constant ratio.'
      }
    },
    {
      id: 'sat-ef1-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A population of bacteria is modeled by $P(t) = 200 \\\\cdot 3^t$, where $t$ is measured in hours. How many bacteria are there after 4 hours?',
            options: ['$2{,}400$', '$16{,}200$', '$600$', '$5{,}400$'],
            correctAnswer: 1,
            explanation: '$P(4) = 200 \\\\cdot 3^4 = 200 \\\\cdot 81 = 16{,}200$.'
          },
          {
            question: 'The table below shows values of a function $h$. Which equation best models $h(x)$?\\n\\n| $x$ | 0 | 1 | 2 | 3 |\\n|-----|---|---|---|---|\\n| $h(x)$ | 6 | 18 | 54 | 162 |',
            options: ['$h(x)=6+12x$', '$h(x)=6 \\\\cdot 3^x$', '$h(x)=3 \\\\cdot 6^x$', '$h(x)=18^x$'],
            correctAnswer: 1,
            explanation: '$h(0)=6$ so $a=6$. Ratio $= 18/6 = 3$, so $b=3$. Therefore $h(x)=6 \\\\cdot 3^x$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 2: Growth & Decay Models ───────────────────────────────────────────
def part2():
    write(2, textwrap.dedent("""\
export const satExponentialFnPart2Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-ef2-intro',
      type: 'text' as const,
      content: `
# 🌱 Growth & Decay Models

**Part 2 of 7 — $A = P(1+r)^t$, Population Growth, Depreciation, Half-Life**

Real-world exponential models usually appear in one of these forms:

| Model | Formula |
|-------|---------|
| Growth | $A = P(1 + r)^t$ |
| Decay | $A = P(1 - r)^t$ |
| Half-life | $A = P\\\\left(\\\\frac{1}{2}\\\\right)^{t/h}$ |

Where:
- $P$ = initial amount (principal)
- $r$ = rate of growth or decay (as a decimal)
- $t$ = time
- $h$ = half-life period
- $A$ = amount after time $t$

**Key insight:** Growth by $r$ means the base is $1 + r$. Decay by $r$ means the base is $1 - r$.
      `
    },
    {
      id: 'sat-ef2-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1 — Population growth:**
A town of 20,000 people grows at 3 % per year. What is the population after 5 years?

$$A = 20{,}000(1 + 0.03)^5 = 20{,}000(1.03)^5$$

$$(1.03)^5 \\\\approx 1.1593 \\\\implies A \\\\approx 23{,}186$$

**Example 2 — Depreciation:**
A car worth \\$25,000 depreciates at 12 % per year. Find the value after 3 years.

$$A = 25{,}000(1 - 0.12)^3 = 25{,}000(0.88)^3$$

$$(0.88)^3 \\\\approx 0.6815 \\\\implies A \\\\approx \\$17{,}037$$

**Example 3 — Half-life:**
A radioactive substance has a half-life of 6 hours. If you start with 400 mg, how much remains after 18 hours?

$$A = 400\\\\left(\\\\frac{1}{2}\\\\right)^{18/6} = 400\\\\left(\\\\frac{1}{2}\\\\right)^3 = 400 \\\\cdot \\\\frac{1}{8} = 50 \\\\text{ mg}$$

**SAT Tip:** When the problem says "decreases by 20 %," the base is $1 - 0.20 = 0.80$, **not** $0.20$.
      `
    },
    {
      id: 'sat-ef2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Growth & Decay Identification** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A quantity increases by 8 % each year. Which expression gives its value after $t$ years if the initial amount is $P$?',
            options: ['$P(0.08)^t$', '$P(0.92)^t$', '$P(1.08)^t$', '$P(8)^t$'],
            correctAnswer: 2,
            explanation: 'Growth of 8 % means the base is $1 + 0.08 = 1.08$. So the expression is $P(1.08)^t$.'
          },
          {
            question: 'A substance has a half-life of 10 years. What fraction of the original amount remains after 30 years?',
            options: ['$\\\\frac{1}{2}$', '$\\\\frac{1}{4}$', '$\\\\frac{1}{8}$', '$\\\\frac{1}{16}$'],
            correctAnswer: 2,
            explanation: '$30/10 = 3$ half-lives. $(1/2)^3 = 1/8$.'
          }
        ]
      }
    },
    {
      id: 'sat-ef2-rates',
      type: 'text' as const,
      content: `
## Interpreting Growth & Decay Rates

On the SAT you may see a function like:

$$V(t) = 18{,}000(0.85)^t$$

**How to interpret:**
1. **Initial value:** $V(0) = 18{,}000$ — the starting value.
2. **Base:** $0.85 = 1 - 0.15$, so the value **decreases by 15 %** each period.
3. **Retained fraction:** 85 % of the value remains after each period.

Another example: $N(t) = 500(1.12)^t$

1. $N(0) = 500$ — initial count.
2. $1.12 = 1 + 0.12$ — grows by 12 % per period.

**Common SAT question:** "By what percent does the value decrease each year?" → Extract the rate from the base.

| Base $b$ | Interpretation |
|----------|---------------|
| $1.07$ | 7 % growth |
| $0.95$ | 5 % decay |
| $0.5$ | 50 % decay (halving) |
| $2$ | 100 % growth (doubling) |
      `
    },
    {
      id: 'sat-ef2-input1',
      type: 'input-boxes' as const,
      content: `
**Applying Growth & Decay** 🧮

1) A city has 50,000 people and grows at 4 % per year. What is the population after 2 years? (Round to the nearest whole number.)
2) A laptop worth $1,200 depreciates at 25 % per year. What is its value after 2 years? (In dollars, no $ sign.)
3) A radioactive sample of 160 g has a half-life of 5 years. How many grams remain after 15 years?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['54080', '675', '20'],
        hint1: '$A = 50{,}000(1.04)^2 = 50{,}000 \\\\times 1.0816$.',
        hint2: '$A = 1200(0.75)^2 = 1200 \\\\times 0.5625$.',
        hint3: '$15/5 = 3$ half-lives. $160 \\\\times (1/2)^3 = 160/8$.',
        explanation: '1) $50{,}000 \\\\times 1.0816 = 54{,}080$. 2) $1{,}200 \\\\times 0.5625 = 675$. 3) $160 / 8 = 20$ g.'
      }
    },
    {
      id: 'sat-ef2-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Interpreting Models** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In $A = 5000(0.92)^t$, the value decreases by … each period.',
            options: ['92%', '8%', '0.92%', '108%']
          },
          {
            label: 'A half-life model uses a base of …',
            options: ['$2$', '$0.5$', '$1.5$', '$0.25$']
          },
          {
            label: 'If a population triples every year, the base $b$ is …',
            options: ['$1.03$', '$3$', '$1/3$', '$0.3$']
          }
        ],
        correctAnswers: ['8%', '$0.5$', '$3$'],
        hint1: '$0.92 = 1 - 0.08$, so the decay rate is $0.08 = 8\\\\%$.',
        hint2: 'Half-life means the quantity is multiplied by $1/2$ each period.',
        hint3: 'Tripling means $f(x+1) = 3 \\\\cdot f(x)$, so the base is 3.',
        explanation: 'Base $0.92$ → 8 % decay. Half-life base is $0.5$. Tripling gives $b = 3$.'
      }
    },
    {
      id: 'sat-ef2-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The value of a collectible is modeled by $V(t) = 800(1.06)^t$, where $t$ is years since purchase. What does $1.06$ represent?',
            options: ['The value increases by $6$ each year', 'The value is multiplied by $6$ each year', 'The value increases by $6\\\\%$ each year', 'The initial value is $1.06$'],
            correctAnswer: 2,
            explanation: '$1.06 = 1 + 0.06$, so the value increases by 6 % per year.'
          },
          {
            question: 'A medication in the bloodstream decreases by 30 % every hour. If the initial dose is 500 mg, how much remains after 3 hours?',
            options: ['$171.5$ mg', '$350$ mg', '$150$ mg', '$120.05$ mg'],
            correctAnswer: 0,
            explanation: '$A = 500(0.70)^3 = 500 \\\\times 0.343 = 171.5$ mg.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 3: Compound Interest ───────────────────────────────────────────────
def part3():
    write(3, textwrap.dedent("""\
export const satExponentialFnPart3Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-ef3-intro',
      type: 'text' as const,
      content: `
# 💰 Compound Interest

**Part 3 of 7 — $A=P(1+r/n)^{nt}$, Continuous Compounding, Comparing Accounts**

Compound interest is one of the most tested exponential applications on the SAT.

$$A = P\\\\left(1 + \\\\frac{r}{n}\\\\right)^{nt}$$

| Variable | Meaning |
|----------|---------|
| $A$ | Final amount |
| $P$ | Principal (initial deposit) |
| $r$ | Annual interest rate (decimal) |
| $n$ | Number of times compounded per year |
| $t$ | Time in years |

**Common compounding frequencies:**

| Frequency | $n$ |
|-----------|-----|
| Annually | 1 |
| Semi-annually | 2 |
| Quarterly | 4 |
| Monthly | 12 |
| Daily | 365 |
      `
    },
    {
      id: 'sat-ef3-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1 — Annual compounding:**
\\$2,000 is invested at 5 % compounded annually for 3 years.

$$A = 2000\\\\left(1 + \\\\frac{0.05}{1}\\\\right)^{1 \\\\cdot 3} = 2000(1.05)^3$$

$$(1.05)^3 = 1.157625 \\\\implies A = \\$2{,}315.25$$

**Example 2 — Quarterly compounding:**
\\$5,000 at 8 % compounded quarterly for 2 years.

$$A = 5000\\\\left(1 + \\\\frac{0.08}{4}\\\\right)^{4 \\\\cdot 2} = 5000(1.02)^8$$

$$(1.02)^8 \\\\approx 1.17166 \\\\implies A \\\\approx \\$5{,}858.30$$

**Example 3 — Monthly compounding:**
\\$10,000 at 6 % compounded monthly for 5 years.

$$A = 10000\\\\left(1 + \\\\frac{0.06}{12}\\\\right)^{12 \\\\cdot 5} = 10000(1.005)^{60}$$

$$(1.005)^{60} \\\\approx 1.34885 \\\\implies A \\\\approx \\$13{,}488.50$$

**SAT Tip:** Don't forget to convert the percentage rate to a decimal before plugging in!
      `
    },
    {
      id: 'sat-ef3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Compound Interest Setup** 🔍
      `,
      exercise: {
        questions: [
          {
            question: '\\$3,000 is invested at 4 % interest compounded semi-annually. Which expression gives the amount after 6 years?',
            options: ['$3000(1.04)^6$', '$3000(1.02)^{12}$', '$3000(1.04)^{12}$', '$3000(1.02)^6$'],
            correctAnswer: 1,
            explanation: '$r/n = 0.04/2 = 0.02$ and $nt = 2 \\\\times 6 = 12$. So $A = 3000(1.02)^{12}$.'
          },
          {
            question: '\\$1,000 earns 10 % interest compounded annually. After how many years will the investment first exceed \\$1,331?',
            options: ['$2$', '$3$', '$4$', '$5$'],
            correctAnswer: 1,
            explanation: '$1000(1.10)^3 = 1000(1.331) = 1331$. After 3 years the amount equals \\$1,331, which is the first time it reaches that threshold.'
          }
        ]
      }
    },
    {
      id: 'sat-ef3-continuous',
      type: 'text' as const,
      content: `
## Continuous Compounding

When interest is compounded **continuously**, we use:

$$A = Pe^{rt}$$

where $e \\\\approx 2.71828$.

**Example 4:**
\\$4,000 invested at 3 % compounded continuously for 10 years.

$$A = 4000 \\\\cdot e^{0.03 \\\\times 10} = 4000 \\\\cdot e^{0.3}$$

$$e^{0.3} \\\\approx 1.34986 \\\\implies A \\\\approx \\$5{,}399.44$$

**Comparing continuous vs annual:**
- Annual: $4000(1.03)^{10} \\\\approx \\$5{,}375.67$
- Continuous: $4000e^{0.3} \\\\approx \\$5{,}399.44$

Continuous compounding always yields slightly more, but the difference is small for moderate rates.

**SAT Tip:** Continuous compounding problems are less common on the SAT, but when they appear, always use $A = Pe^{rt}$.
      `
    },
    {
      id: 'sat-ef3-input1',
      type: 'input-boxes' as const,
      content: `
**Compound Interest Calculations** 🧮

Round all answers to the nearest whole dollar (no $ sign).

1) \\$6,000 at 5 % compounded annually for 4 years. What is the final amount?
2) What is the total interest earned in problem 1?
3) \\$2,000 at 12 % compounded quarterly for 1 year. What is the final amount?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7293', '1293', '2255'],
        hint1: '$A = 6000(1.05)^4 = 6000 \\\\times 1.21551$.',
        hint2: 'Interest = Final amount $-$ Principal = $A - 6000$.',
        hint3: '$A = 2000(1 + 0.12/4)^{4} = 2000(1.03)^4 \\\\approx 2000(1.12551)$.',
        explanation: '1) $6000(1.05)^4 \\\\approx 7{,}293$. 2) $7{,}293 - 6{,}000 = 1{,}293$. 3) $2000(1.03)^4 \\\\approx 2{,}255$.'
      }
    },
    {
      id: 'sat-ef3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Compound Interest Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In $A = P(1 + r/n)^{nt}$, increasing $n$ while keeping everything else constant will …',
            options: ['decrease A', 'increase A', 'not change A', 'double A']
          },
          {
            label: 'The formula for continuous compounding is …',
            options: ['$A = P(1+r)^t$', '$A = Prt$', '$A = Pe^{rt}$', '$A = P(1+r/n)^{nt}$']
          },
          {
            label: 'If an account earns 6 % compounded monthly, the monthly rate is …',
            options: ['$6\\\\%$', '$0.06\\\\%$', '$0.5\\\\%$', '$0.6\\\\%$']
          }
        ],
        correctAnswers: ['increase A', '$A = Pe^{rt}$', '$0.5\\\\%$'],
        hint1: 'More frequent compounding → interest earns interest sooner.',
        hint2: 'Continuous compounding uses the natural base $e$.',
        hint3: '$6\\\\% / 12 = 0.5\\\\%$ per month.',
        explanation: 'More compounding increases $A$. Continuous compounding uses $A = Pe^{rt}$. Monthly rate = annual rate / 12 = $0.5\\\\%$.'
      }
    },
    {
      id: 'sat-ef3-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'Maria deposits \\$8,000 in an account that compounds interest quarterly at an annual rate of 4 %. Which expression represents the amount in the account after 5 years?',
            options: ['$8000(1.04)^5$', '$8000(1.01)^{20}$', '$8000(1.04)^{20}$', '$8000(1.01)^5$'],
            correctAnswer: 1,
            explanation: '$r/n = 0.04/4 = 0.01$ and $nt = 4 \\\\times 5 = 20$. So $A = 8000(1.01)^{20}$.'
          },
          {
            question: 'Two accounts both start with \\$1,000 at 6 % interest. Account X compounds annually; Account Y compounds monthly. After 1 year, which account has more money, and by approximately how much?',
            options: ['X has more, by about \\$1.50', 'Y has more, by about \\$1.68', 'They are equal', 'Y has more, by about \\$6.00'],
            correctAnswer: 1,
            explanation: 'X: $1000(1.06)^1 = 1060.00$. Y: $1000(1.005)^{12} \\\\approx 1061.68$. Difference $\\\\approx \\$1.68$ in favour of Y.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 4: Exponential vs Linear ───────────────────────────────────────────
def part4():
    write(4, textwrap.dedent("""\
export const satExponentialFnPart4Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-ef4-intro',
      type: 'text' as const,
      content: `
# ⚖️ Exponential vs Linear

**Part 4 of 7 — Constant Ratio vs Constant Difference, Tables, Graphs & SAT Strategies**

The SAT frequently asks you to determine whether data follows a **linear** or **exponential** pattern.

| Property | Linear | Exponential |
|----------|--------|-------------|
| Defining feature | Constant **difference** | Constant **ratio** |
| General form | $f(x) = mx + b$ | $f(x) = a \\\\cdot b^x$ |
| Graph shape | Straight line | Curved (J-shape or decaying) |
| Rate of change | Constant (slope $m$) | Proportional to current value |

**Quick test from a table:**
1. Compute successive **differences**: $f(x+1) - f(x)$.
2. Compute successive **ratios**: $f(x+1) / f(x)$.
3. If differences are constant → **linear**. If ratios are constant → **exponential**.
      `
    },
    {
      id: 'sat-ef4-examples',
      type: 'text' as const,
      content: `
## Side-by-Side Comparison

**Linear data:**

| $x$ | $f(x)$ | Difference |
|-----|--------|------------|
| 0 | 3 | — |
| 1 | 7 | 4 |
| 2 | 11 | 4 |
| 3 | 15 | 4 |
| 4 | 19 | 4 |

Constant difference $= 4$, so $f(x) = 4x + 3$.

**Exponential data:**

| $x$ | $g(x)$ | Ratio |
|-----|--------|-------|
| 0 | 3 | — |
| 1 | 6 | 2 |
| 2 | 12 | 2 |
| 3 | 24 | 2 |
| 4 | 48 | 2 |

Constant ratio $= 2$, so $g(x) = 3 \\\\cdot 2^x$.

**Key observation:** At first the values may look similar, but exponential functions *eventually* outpace linear ones — always.

$$\\\\text{For large } x: \\\\quad a \\\\cdot b^x \\\\gg mx + b \\\\quad (b > 1)$$

**SAT Trap:** Some tables have only 2–3 rows. Both difference and ratio may *look* constant with limited data. Use $x = 0$ as your anchor and check at least 3 consecutive values.
      `
    },
    {
      id: 'sat-ef4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Linear or Exponential?** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A function has values $f(0)=5$, $f(1)=10$, $f(2)=20$, $f(3)=40$. Is this linear or exponential, and what is the function?',
            options: ['Linear: $f(x) = 5x + 5$', 'Exponential: $f(x) = 5 \\\\cdot 2^x$', 'Linear: $f(x) = 10x - 5$', 'Exponential: $f(x) = 2 \\\\cdot 5^x$'],
            correctAnswer: 1,
            explanation: 'Ratios: $10/5=2, 20/10=2, 40/20=2$. Constant ratio $= 2$, initial value $= 5$, so $f(x) = 5 \\\\cdot 2^x$.'
          },
          {
            question: 'Which of the following tables shows exponential growth?\\n\\n(A) $2, 6, 10, 14$ (B) $2, 6, 18, 54$ (C) $2, 4, 8, 14$ (D) $2, 5, 10, 17$',
            options: ['Table A', 'Table B', 'Table C', 'Table D'],
            correctAnswer: 1,
            explanation: 'Table B: $6/2=3, 18/6=3, 54/18=3$ — constant ratio of 3. The others have non-constant ratios.'
          }
        ]
      }
    },
    {
      id: 'sat-ef4-graphs',
      type: 'text' as const,
      content: `
## Graphs: Linear vs Exponential

**Linear graph:**
- Straight line
- Constant slope
- Crosses the $y$-axis at $b$

**Exponential growth graph ($b > 1$):**
- J-shaped curve
- Starts slowly, then rises steeply
- Has a **horizontal asymptote** at $y = 0$
- Never touches the $x$-axis (always positive if $a > 0$)

**Exponential decay graph ($0 < b < 1$):**
- Starts high, decreases toward zero
- Also has a horizontal asymptote at $y = 0$
- Never reaches zero

**SAT Graph-Reading Strategy:**
1. Check if the graph is a straight line → linear.
2. If curved, check if it approaches a horizontal line → likely exponential.
3. Read two points and verify: is the ratio constant?

**Important:** A quadratic ($y = ax^2 + bx + c$) is also curved, but it's symmetric (U-shaped or inverted U). Exponential curves are *not* symmetric.
      `
    },
    {
      id: 'sat-ef4-input1',
      type: 'input-boxes' as const,
      content: `
**Classify and Model** 🧮

| $x$ | $h(x)$ |
|-----|--------|
| 0 | 2 |
| 1 | 8 |
| 2 | 32 |
| 3 | 128 |

1) What is the common ratio $b$?
2) What is the initial value $a$?
3) What is $h(5)$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '2', '2048'],
        hint1: '$b = h(1)/h(0) = 8/2$.',
        hint2: '$a = h(0) = 2$.',
        hint3: '$h(5) = 2 \\\\cdot 4^5 = 2 \\\\cdot 1024$.',
        explanation: '$b = 4$, $a = 2$, so $h(x) = 2 \\\\cdot 4^x$. Then $h(5) = 2 \\\\cdot 4^5 = 2 \\\\cdot 1024 = 2048$.'
      }
    },
    {
      id: 'sat-ef4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Key Distinctions** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For large $x$, which type of function eventually grows faster?',
            options: ['Linear', 'Exponential (with $b > 1$)', 'They grow at the same rate', 'It depends on the coefficients']
          },
          {
            label: 'A table has constant differences of 5. The function is …',
            options: ['Exponential', 'Linear', 'Quadratic', 'Logarithmic']
          },
          {
            label: 'An exponential growth curve has a horizontal asymptote at …',
            options: ['$y = 1$', '$y = a$', '$y = 0$', 'There is no asymptote']
          }
        ],
        correctAnswers: ['Exponential (with $b > 1$)', 'Linear', '$y = 0$'],
        hint1: 'Exponential growth eventually outpaces any polynomial, including linear.',
        hint2: 'Constant differences = constant rate of change = linear.',
        hint3: 'For $f(x) = a \\\\cdot b^x$ with $b > 1$, as $x \\\\to -\\\\infty$, $f(x) \\\\to 0$.',
        explanation: 'Exponential always wins for large $x$. Constant differences → linear. The basic exponential has asymptote $y = 0$.'
      }
    },
    {
      id: 'sat-ef4-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'At time $t=0$, Carlos has \\$100. Each year the amount doubles. Elena also starts with \\$100, but she adds \\$100 each year. After how many years does Carlos first have strictly more money than Elena?',
            options: ['After 2 years', 'After 3 years', 'After 4 years', 'After 5 years'],
            correctAnswer: 0,
            explanation: 'Carlos: $100 \\\\cdot 2^t$. Elena: $100 + 100t$. At $t=1$: Carlos $= 200$, Elena $= 200$ (tied). At $t=2$: Carlos $= 400$, Elena $= 300$. Carlos first has strictly more after 2 years.'
          },
          {
            question: 'A scientist measures a quantity every hour: $10, 15, 22.5, 33.75, \\\\ldots$ Which model best fits this data?',
            options: ['$f(t) = 10 + 5t$', '$f(t) = 10 \\\\cdot (1.5)^t$', '$f(t) = 5t^2 + 10$', '$f(t) = 15^t$'],
            correctAnswer: 1,
            explanation: 'Ratios: $15/10 = 1.5$, $22.5/15 = 1.5$, $33.75/22.5 = 1.5$. Constant ratio of $1.5$ with initial value $10$, so $f(t) = 10(1.5)^t$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 5: Transformations of Exponential Functions ────────────────────────
def part5():
    write(5, textwrap.dedent("""\
export const satExponentialFnPart5Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-ef5-intro',
      type: 'text' as const,
      content: `
# 🔄 Transformations of Exponential Functions

**Part 5 of 7 — Shifts, Reflections, Asymptotes, SAT Graph Reading**

Starting from the parent function $f(x) = b^x$, transformations work just like they do for any function:

| Transformation | Equation | Effect |
|---------------|----------|--------|
| Vertical shift up $k$ | $f(x) = b^x + k$ | Asymptote moves to $y = k$ |
| Vertical shift down $k$ | $f(x) = b^x - k$ | Asymptote moves to $y = -k$ |
| Horizontal shift left $h$ | $f(x) = b^{(x+h)}$ | Graph moves left $h$ units |
| Horizontal shift right $h$ | $f(x) = b^{(x-h)}$ | Graph moves right $h$ units |
| Vertical stretch by $a$ | $f(x) = a \\\\cdot b^x$ | Steeper curve, $y$-intercept at $a$ |
| Reflection over $x$-axis | $f(x) = -b^x$ | Flips upside down |
| Reflection over $y$-axis | $f(x) = b^{-x}$ | Growth ↔ decay swap |

**Key point:** The horizontal asymptote of $f(x) = a \\\\cdot b^{(x-h)} + k$ is always $y = k$.
      `
    },
    {
      id: 'sat-ef5-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1 — Vertical shift:**
$f(x) = 2^x + 3$

- Parent: $y = 2^x$ has asymptote $y = 0$.
- The $+3$ shifts everything **up** 3 units.
- New asymptote: $y = 3$.
- $f(0) = 2^0 + 3 = 1 + 3 = 4$.

**Example 2 — Horizontal shift:**
$g(x) = 3^{(x-2)}$

- The graph of $3^x$ shifted **right** 2 units.
- Asymptote stays at $y = 0$ (no vertical shift).
- $g(2) = 3^0 = 1$ (the "anchor point" moved from $x=0$ to $x=2$).

**Example 3 — Reflection over the $y$-axis:**
$h(x) = 2^{-x}$

- This is the same as $h(x) = (1/2)^x$.
- Growth becomes decay (and vice versa).

**Example 4 — Combined:**
$p(x) = -5 \\\\cdot 2^{(x+1)} + 10$

- Shifted left 1, vertically stretched by 5, reflected over $x$-axis, shifted up 10.
- Asymptote: $y = 10$.
- $p(0) = -5 \\\\cdot 2^1 + 10 = -10 + 10 = 0$.
      `
    },
    {
      id: 'sat-ef5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Transformations** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What is the horizontal asymptote of $f(x) = 4 \\\\cdot 3^x - 7$?',
            options: ['$y = 4$', '$y = 3$', '$y = -7$', '$y = 0$'],
            correctAnswer: 2,
            explanation: 'The form is $a \\\\cdot b^x + k$ where $k = -7$. The horizontal asymptote is $y = k = -7$.'
          },
          {
            question: 'The graph of $g(x) = 2^{(x-3)} + 1$ passes through which of these points?',
            options: ['$(0, 2)$', '$(3, 2)$', '$(1, 3)$', '$(3, 1)$'],
            correctAnswer: 1,
            explanation: '$g(3) = 2^{(3-3)} + 1 = 2^0 + 1 = 1 + 1 = 2$. So the point $(3, 2)$ is on the graph.'
          }
        ]
      }
    },
    {
      id: 'sat-ef5-asymptotes',
      type: 'text' as const,
      content: `
## Asymptotes & End Behavior

For $f(x) = a \\\\cdot b^{(x-h)} + k$:

**If $b > 1$ and $a > 0$:**
- As $x \\\\to \\\\infty$: $f(x) \\\\to \\\\infty$ (rises steeply)
- As $x \\\\to -\\\\infty$: $f(x) \\\\to k$ (approaches asymptote from above)

**If $b > 1$ and $a < 0$:**
- As $x \\\\to \\\\infty$: $f(x) \\\\to -\\\\infty$ (falls steeply)
- As $x \\\\to -\\\\infty$: $f(x) \\\\to k$ (approaches asymptote from below)

**Finding the asymptote from a graph:**
1. Look at which horizontal line the curve approaches but never crosses.
2. That line is $y = k$.

**SAT Tip:** If a graph levels off at $y = 5$ as $x$ goes to the left, the asymptote is $y = 5$, and the function likely has $+5$ at the end.

---

**Finding the $y$-intercept:**

Set $x = 0$: $f(0) = a \\\\cdot b^{(0-h)} + k = a \\\\cdot b^{-h} + k$.

This is useful for matching a graph to an equation on the SAT.
      `
    },
    {
      id: 'sat-ef5-input1',
      type: 'input-boxes' as const,
      content: `
**Evaluating Transformed Exponentials** 🧮

1) $f(x) = 3 \\\\cdot 2^x - 5$. What is $f(3)$?
2) $g(x) = 2^{(x-1)} + 4$. What is $g(1)$?
3) What is the horizontal asymptote of $h(x) = 7 \\\\cdot 5^x + 12$? (Write just the number.)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['19', '5', '12'],
        hint1: '$f(3) = 3 \\\\cdot 2^3 - 5 = 3 \\\\cdot 8 - 5$.',
        hint2: '$g(1) = 2^{(1-1)} + 4 = 2^0 + 4$.',
        hint3: 'The asymptote is $y = k$ where $k$ is the constant added at the end.',
        explanation: '1) $3(8) - 5 = 24 - 5 = 19$. 2) $1 + 4 = 5$. 3) Asymptote is $y = 12$.'
      }
    },
    {
      id: 'sat-ef5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Transformation Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$f(x) = 2^{(x+4)}$ is the graph of $2^x$ shifted …',
            options: ['right 4', 'left 4', 'up 4', 'down 4']
          },
          {
            label: '$f(x) = 2^{-x}$ converts growth into …',
            options: ['faster growth', 'decay', 'linear decrease', 'no change']
          },
          {
            label: 'If the asymptote of an exponential function is $y = -3$, the function includes …',
            options: ['$+ 3$', '$- 3$', '$\\\\cdot 3$', '$/ 3$']
          }
        ],
        correctAnswers: ['left 4', 'decay', '$- 3$'],
        hint1: '$x + 4 = x - (-4)$, so $h = -4$ → left 4 units.',
        hint2: 'Reflecting over the $y$-axis swaps growth and decay.',
        hint3: 'The asymptote $y = k$ means there is a $+ k$ term at the end.',
        explanation: 'The shift is left 4. Replacing $x$ with $-x$ converts growth to decay. Asymptote $y = -3$ means the constant term is $-3$.'
      }
    },
    {
      id: 'sat-ef5-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The function $f(x) = 500 \\\\cdot (0.8)^x + 20$ models the temperature of a cooling object. What temperature does the object approach over time?',
            options: ['$500°$', '$20°$', '$0°$', '$520°$'],
            correctAnswer: 1,
            explanation: 'As $x \\\\to \\\\infty$, $(0.8)^x \\\\to 0$, so $f(x) \\\\to 500(0) + 20 = 20$. The asymptote — and the temperature approached — is $20°$.'
          },
          {
            question: 'The graph of an exponential function passes through $(0, 6)$ and has a horizontal asymptote at $y = 2$. Which could be its equation?',
            options: ['$f(x) = 6 \\\\cdot 3^x$', '$f(x) = 4 \\\\cdot 3^x + 2$', '$f(x) = 2 \\\\cdot 3^x + 6$', '$f(x) = 3^x + 2$'],
            correctAnswer: 1,
            explanation: 'Asymptote $y = 2$ means the equation ends with $+ 2$. Check $f(0)$: $4 \\\\cdot 3^0 + 2 = 4 + 2 = 6$ ✓. Option D gives $f(0) = 1 + 2 = 3$ ✗.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 6: Exponential Equations & Logarithms ──────────────────────────────
def part6():
    write(6, textwrap.dedent("""\
export const satExponentialFnPart6Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-ef6-intro',
      type: 'text' as const,
      content: `
# 🔑 Exponential Equations & Logarithms

**Part 6 of 7 — Solving Exponential Equations, Intro to Logs, Change of Base**

Many SAT problems require solving equations where the variable is in the **exponent**.

**Strategy 1 — Same-base method:**
If both sides can be written with the same base, set the exponents equal.

$$2^x = 32 \\\\implies 2^x = 2^5 \\\\implies x = 5$$

$$3^{2x} = 81 \\\\implies 3^{2x} = 3^4 \\\\implies 2x = 4 \\\\implies x = 2$$

**Strategy 2 — Using logarithms:**
When you *can't* match bases, take the log of both sides.

$$5^x = 200$$

$$\\\\log(5^x) = \\\\log(200)$$

$$x \\\\log 5 = \\\\log 200$$

$$x = \\\\frac{\\\\log 200}{\\\\log 5} \\\\approx \\\\frac{2.301}{0.699} \\\\approx 3.29$$

**SAT Tip:** Most SAT exponential equations can be solved via the same-base method. Logarithm-based solutions are rarer but do appear.
      `
    },
    {
      id: 'sat-ef6-logs',
      type: 'text' as const,
      content: `
## Introduction to Logarithms

A **logarithm** answers: "What exponent gives me this value?"

$$\\\\log_b(a) = c \\\\iff b^c = a$$

**Examples:**
- $\\\\log_2(8) = 3$ because $2^3 = 8$.
- $\\\\log_3(81) = 4$ because $3^4 = 81$.
- $\\\\log_{10}(1000) = 3$ because $10^3 = 1000$.
- $\\\\log_5(1) = 0$ because $5^0 = 1$.

**Common log properties (reference):**

| Property | Rule |
|----------|------|
| Product | $\\\\log_b(mn) = \\\\log_b m + \\\\log_b n$ |
| Quotient | $\\\\log_b(m/n) = \\\\log_b m - \\\\log_b n$ |
| Power | $\\\\log_b(m^k) = k\\\\log_b m$ |
| Log of 1 | $\\\\log_b(1) = 0$ |
| Log of base | $\\\\log_b(b) = 1$ |

**SAT Note:** You rarely need log properties on the SAT, but understanding the definition $\\\\log_b(a) = c \\\\iff b^c = a$ is essential.
      `
    },
    {
      id: 'sat-ef6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Solving Exponential Equations** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Solve: $4^x = 256$',
            options: ['$x = 3$', '$x = 4$', '$x = 5$', '$x = 64$'],
            correctAnswer: 1,
            explanation: '$256 = 4^4$, so $4^x = 4^4 \\\\implies x = 4$.'
          },
          {
            question: 'Solve: $2^{(x+1)} = 16$',
            options: ['$x = 2$', '$x = 3$', '$x = 4$', '$x = 5$'],
            correctAnswer: 1,
            explanation: '$16 = 2^4$, so $2^{(x+1)} = 2^4 \\\\implies x + 1 = 4 \\\\implies x = 3$.'
          }
        ]
      }
    },
    {
      id: 'sat-ef6-change',
      type: 'text' as const,
      content: `
## Change of Base & More Practice

**Change of base formula:**

$$\\\\log_b(a) = \\\\frac{\\\\log a}{\\\\log b} = \\\\frac{\\\\ln a}{\\\\ln b}$$

This lets you evaluate any logarithm using a calculator (which has $\\\\log$ = base 10 and $\\\\ln$ = base $e$).

**Example:** $\\\\log_3(20) = \\\\frac{\\\\log 20}{\\\\log 3} = \\\\frac{1.301}{0.477} \\\\approx 2.727$

---

**More same-base examples:**

$9^x = 27$

Rewrite with base 3: $(3^2)^x = 3^3 \\\\implies 3^{2x} = 3^3 \\\\implies 2x = 3 \\\\implies x = 3/2$

$8^{x-1} = 32$

Rewrite with base 2: $(2^3)^{x-1} = 2^5 \\\\implies 2^{3(x-1)} = 2^5$

$$3(x-1) = 5 \\\\implies 3x - 3 = 5 \\\\implies x = 8/3$$

**SAT Tip:** When the answer choices are nice fractions or integers, the same-base method almost always works. Look for a common prime base (2, 3, or 5).
      `
    },
    {
      id: 'sat-ef6-input1',
      type: 'input-boxes' as const,
      content: `
**Solve for $x$** 🧮

Give answers as integers or simplified fractions (e.g., 3/2).

1) $3^x = 729$
2) $2^{(2x)} = 64$
3) $\\\\log_2(32) = ?$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '3', '5'],
        hint1: '$729 = 3^6$. Count: $3, 9, 27, 81, 243, 729$.',
        hint2: '$64 = 2^6$, so $2x = 6$.',
        hint3: '$2^? = 32$. Since $2^5 = 32$, the answer is $5$.',
        explanation: '1) $3^6 = 729$, so $x = 6$. 2) $2^{2x} = 2^6 \\\\implies 2x = 6 \\\\implies x = 3$. 3) $\\\\log_2(32) = 5$ because $2^5 = 32$.'
      }
    },
    {
      id: 'sat-ef6-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Logarithm Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\\\log_b(a) = c$ means …',
            options: ['$a^c = b$', '$b^c = a$', '$c^b = a$', '$a^b = c$']
          },
          {
            label: '$\\\\log_4(1) = ?$',
            options: ['$1$', '$0$', '$4$', 'undefined']
          },
          {
            label: 'To solve $5^x = 80$ without matching bases, you use …',
            options: ['Square both sides', 'Take the log of both sides', 'Take the square root', 'Subtract 5']
          }
        ],
        correctAnswers: ['$b^c = a$', '$0$', 'Take the log of both sides'],
        hint1: 'The base raised to the result equals the argument: $b^c = a$.',
        hint2: 'Any base raised to 0 gives 1.',
        hint3: '$\\\\log(5^x) = x \\\\log 5$, which isolates $x$.',
        explanation: '$\\\\log_b(a)=c$ means $b^c = a$. $\\\\log_4(1) = 0$ since $4^0 = 1$. For non-matching bases, take $\\\\log$ of both sides.'
      }
    },
    {
      id: 'sat-ef6-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $9^{(x+1)} = 27^x$, what is the value of $x$?',
            options: ['$1$', '$2$', '$3$', '$4$'],
            correctAnswer: 1,
            explanation: 'Rewrite: $(3^2)^{x+1} = (3^3)^x \\\\implies 3^{2x+2} = 3^{3x}$. So $2x + 2 = 3x \\\\implies x = 2$.'
          },
          {
            question: 'Which of the following is equivalent to $\\\\log_8(64)$?',
            options: ['$2$', '$3$', '$6$', '$8$'],
            correctAnswer: 0,
            explanation: '$8^2 = 64$, so $\\\\log_8(64) = 2$.'
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
export const satExponentialFnPart7Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-ef7-cheat',
      type: 'text' as const,
      content: `
# 📝 Review & Mixed Practice

**Part 7 of 7 — Cheat Sheet, Mixed SAT Problems, Key Formulas**

## Exponential Functions Cheat Sheet

| Topic | Key Formula / Fact |
|-------|-------------------|
| General form | $f(x) = a \\\\cdot b^x$ |
| Growth | $b > 1$ |
| Decay | $0 < b < 1$ |
| Growth model | $A = P(1+r)^t$ |
| Decay model | $A = P(1-r)^t$ |
| Half-life | $A = P(1/2)^{t/h}$ |
| Compound interest | $A = P(1 + r/n)^{nt}$ |
| Continuous compounding | $A = Pe^{rt}$ |
| Horizontal asymptote | $y = k$ for $f(x) = a \\\\cdot b^x + k$ |
| Log definition | $\\\\log_b(a) = c \\\\iff b^c = a$ |
| Change of base | $\\\\log_b(a) = \\\\frac{\\\\log a}{\\\\log b}$ |

**SAT Quick Checks:**
- Table → compute **ratios** to confirm exponential.
- Context → identify $P$ (initial), $r$ (rate), $t$ (time).
- Graph → look for asymptote, then match equation.
- Equation → rewrite with common bases or use logs.
      `
    },
    {
      id: 'sat-ef7-strategy',
      type: 'text' as const,
      content: `
## SAT Strategy Guide

**Step-by-step for exponential SAT questions:**

1. **Read carefully** — identify the initial value, rate, and time period.
2. **Choose the right formula:**
   - Simple growth/decay → $A = P(1 \\\\pm r)^t$
   - Compound interest → $A = P(1 + r/n)^{nt}$
   - Continuous → $A = Pe^{rt}$
3. **Plug in and compute** — watch your order of operations.
4. **Check your answer** — does the result make sense? (Growth should give a larger value, decay a smaller one.)

**Common traps:**
- Confusing rate with base: "increases by 5 %" → base is $1.05$, not $0.05$.
- Forgetting to divide the rate for compound interest: annual rate ÷ $n$.
- Mixing up half-life: after 2 half-lives, $1/4$ remains (not $1/2$).
- Reading tables: constant *difference* = linear, constant *ratio* = exponential.

**Time-saving tips:**
- If answer choices are "nice" numbers, try plugging them back in.
- For $2^x = 2^n$, just set $x = n$ — no calculation needed.
- Know your powers: $2^{10} = 1024$, $3^5 = 243$, $5^4 = 625$.
      `
    },
    {
      id: 'sat-ef7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A car purchased for \\$30,000 depreciates at 15 % per year. Which expression represents its value after $t$ years?',
            options: ['$30000(0.15)^t$', '$30000(0.85)^t$', '$30000(1.15)^t$', '$30000 - 0.15t$'],
            correctAnswer: 1,
            explanation: 'Depreciation of 15 % means the base is $1 - 0.15 = 0.85$. The value is $30000(0.85)^t$.'
          },
          {
            question: 'If $f(x) = 4 \\\\cdot 2^x + 3$, what is the horizontal asymptote?',
            options: ['$y = 4$', '$y = 2$', '$y = 3$', '$y = 0$'],
            correctAnswer: 2,
            explanation: 'The function has the form $a \\\\cdot b^x + k$ with $k = 3$. The horizontal asymptote is $y = 3$.'
          }
        ]
      }
    },
    {
      id: 'sat-ef7-mixed',
      type: 'text' as const,
      content: `
## More Worked Problems

**Problem 1:** A bank account earns 6 % interest compounded monthly. If \\$5,000 is deposited, how much is in the account after 3 years?

$$A = 5000\\\\left(1 + \\\\frac{0.06}{12}\\\\right)^{12 \\\\times 3} = 5000(1.005)^{36}$$

$$(1.005)^{36} \\\\approx 1.19668 \\\\implies A \\\\approx \\$5{,}983$$

**Problem 2:** Solve $25^x = 125$.

$$25 = 5^2, \\\\quad 125 = 5^3$$

$$(5^2)^x = 5^3 \\\\implies 5^{2x} = 5^3 \\\\implies 2x = 3 \\\\implies x = \\\\frac{3}{2}$$

**Problem 3:** A bacteria colony doubles every 4 hours. Starting from 300 bacteria, how many are there after 12 hours?

$$A = 300 \\\\cdot 2^{12/4} = 300 \\\\cdot 2^3 = 300 \\\\cdot 8 = 2{,}400$$

**Problem 4:** Is the data linear or exponential? $f(0)=10, f(1)=30, f(2)=90, f(3)=270$.

Ratios: $30/10 = 3$, $90/30 = 3$, $270/90 = 3$. Constant ratio → **exponential**: $f(x) = 10 \\\\cdot 3^x$.
      `
    },
    {
      id: 'sat-ef7-input1',
      type: 'input-boxes' as const,
      content: `
**Mixed Problem Solving** 🧮

1) Solve: $5^{(x-1)} = 125$. What is $x$?
2) A \\$10,000 investment grows at 8 % per year. What is its value after 3 years? (Round to nearest dollar, no $ sign.)
3) A substance with a half-life of 4 hours starts at 640 g. How many grams remain after 12 hours?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '12597', '80'],
        hint1: '$125 = 5^3$, so $x - 1 = 3$.',
        hint2: '$A = 10000(1.08)^3 = 10000 \\\\times 1.259712$.',
        hint3: '$12/4 = 3$ half-lives. $640 \\\\times (1/2)^3 = 640/8$.',
        explanation: '1) $x - 1 = 3 \\\\implies x = 4$. 2) $10000(1.08)^3 \\\\approx 12{,}597$. 3) $640/8 = 80$ g.'
      }
    },
    {
      id: 'sat-ef7-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Final Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If a value doubles every 5 years, the base of the exponential using time in years is …',
            options: ['$2$', '$2^{1/5}$', '$2^5$', '$5^2$']
          },
          {
            label: 'The graph of $f(x) = e^x$ has a $y$-intercept at …',
            options: ['$(0, e)$', '$(0, 1)$', '$(1, 0)$', '$(0, 0)$']
          },
          {
            label: '$\\\\log_b(b^5) = ?$',
            options: ['$b$', '$5$', '$b^5$', '$5b$']
          }
        ],
        correctAnswers: ['$2^{1/5}$', '$(0, 1)$', '$5$'],
        hint1: 'Doubling every 5 years: $f(t) = P \\\\cdot 2^{t/5} = P \\\\cdot (2^{1/5})^t$.',
        hint2: '$e^0 = 1$, so the $y$-intercept is $(0, 1)$.',
        hint3: '$\\\\log_b(b^5) = 5\\\\log_b(b) = 5 \\\\cdot 1 = 5$.',
        explanation: 'The annual base is $2^{1/5}$. The $y$-intercept of $e^x$ is $(0,1)$. By the power rule, $\\\\log_b(b^5) = 5$.'
      }
    },
    {
      id: 'sat-ef7-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Mixed Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The number of subscribers to a streaming service is modeled by $S(t) = 2000 \\\\cdot (1.15)^t$, where $t$ is in months. According to this model, by what percent does the number of subscribers increase each month?',
            options: ['$1.15\\\\%$', '$15\\\\%$', '$115\\\\%$', '$0.15\\\\%$'],
            correctAnswer: 1,
            explanation: 'The base is $1.15 = 1 + 0.15$, so the monthly increase is $0.15 = 15\\\\%$.'
          },
          {
            question: 'If $4^{(2x-1)} = 8^x$, what is the value of $x$?',
            options: ['$1$', '$2$', '$3$', '$4$'],
            correctAnswer: 1,
            explanation: 'Rewrite: $(2^2)^{2x-1} = (2^3)^x \\\\implies 2^{4x-2} = 2^{3x}$. Then $4x - 2 = 3x \\\\implies x = 2$.'
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
    print("Generating SAT Exponential Functions lessons…")
    part1()
    part2()
    part3()
    part4()
    part5()
    part6()
    part7()
    print("Done — 7 files written.")
