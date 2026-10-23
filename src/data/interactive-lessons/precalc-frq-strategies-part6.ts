export const precalcFrqStrategiesPart6Data = {
  topicSlug: 'precalc-frq-strategies',
  sections: [
    {
      id: 'pfs6-intro',
      type: 'text' as const,
      content: `# 📝 Free-Response Strategies: the Four Question Types

**Part 6 of 7 — Common Point Losses and the 35 + 35 Minute Budget**

### Where Points Go

Most lost points on the free-response section are not lost to hard mathematics. They are lost to **conventions**: a short decimal, a missing word, a half period, an extra solution. Each row below is a point that students who knew the mathematics still lost.

| Loss | What it looked like | What earns the point |
|:---|:---|:---|
| Too few decimals (Part A) | "$2.5$" for a value of $2.4987$ | $2.499$ (three decimal places) |
| Rounded coefficients reused | predicting with $3.087(1.299)^9 = 32.510$ | the stored model: $32.493$ |
| Model value stated as exact | "$D(9) = 32.493$" | "**approximately** $32.493$" |
| No units or interval | "the rate is $2.4$" | "$2.4$ thousand downloads per week on $[2, 6]$" |
| Justification by appearance | "the points look exponential" | "ratios of consecutive outputs are roughly constant" |
| One solution of several | "$t = 1$" when $t = 1$ and $t = 5$ both work | sweep the **whole interval** |
| Extraneous solution kept | "$x = 4$ or $x = -2$" | "$x = 4$; $x = -2$ rejected, $\\log_2(-2)$ undefined" |
| Half a period | "period $3$" for a max at $t = 0$ and min at $t = 3$ | period $6$ (max to max) |
| The vague "it" | "it increases" | "the **height $h$** increases" |
| Unlabeled answer | correct value buried in scratch work | label the part, **box** the answer |
| Rate-of-change sentence missing half | "$h$ is increasing" | "$h$ is increasing **and its rate of change is increasing**" |

> **Key Fact:** Before leaving any part, ask three questions: **Did I name the quantity? Did I give units and the interval? Did I answer the whole question (all solutions, both statements)?**`
    },
    {
      id: 'pfs6-rubric',
      type: 'text' as const,
      content: `## A Student Response, Scored

Here is a student's response to the blade-tip question of Part 4 (maximum $120$ m at $t = 0$, minimum $40$ m at $t = 3$, repeating every $6$ seconds), with the reader's decisions.

| Part | Student wrote | Point? | Reader's note |
|:---:|:---|:---:|:---|
| (A)(i) | "midline $80$, amplitude $40$, period $3$" | 0 | $3$ seconds is max-to-min, **half** a period; the period is $6$ |
| (A)(ii) | "$h(t) = 40\\cos\\left(\\frac{\\pi}{3}t\\right) + 80$" | 1 | correct function (it even has period $6$, contradicting (A)(i)); the point is for the function |
| (B)(i) | "$h(1) = 40 \\cdot \\frac{1}{2} + 80 = 100$" | 1 | correct exact value |
| (B)(ii) | "$\\cos\\left(\\frac{\\pi}{3}t\\right) = \\frac{1}{2}$, so $\\frac{\\pi}{3}t = \\frac{\\pi}{3}$, $t = 1$" | 0 | "all times" requires $t = 5$ as well |
| (C) | "It is increasing because the graph goes up from the minimum. The rate of change is decreasing." | 1 of 2 | increasing with a reason: earned. Rate claim is wrong (concave up, so increasing) and has no reason |

**Score: 3 of 6.** The student understood sinusoids. Three points went to a half period, a missing second solution, and a concavity statement made without looking at the curve.

### The 35 + 35 Minute Budget

| Section | Questions | Suggested split | Why |
|:---:|:---|:---|:---|
| Part A (35 min) | Q1 Function Concepts, Q2 Non-Periodic Modeling | **Q1 about 15 min, Q2 about 20 min** | Q2 needs data entry and regression before any part can be answered |
| Part B (35 min) | Q3 Periodic Modeling, Q4 Symbolic | **Q3 about 17 min, Q4 about 18 min** | Q4's three tasks are independent; do the easiest first |

Pacing rules that hold up under pressure:

1. **Enter the Q2 data first**, run the regression, store it. Every later part depends on it.
2. **Every part is worth attempting.** Parts rarely depend on each other, and a wrong value from (A) does not stop (B) from being scored on its own merits.
3. **Spend at most 5 minutes stuck.** Write what you know, label it, move on, come back.
4. **Last two minutes of each section:** check decimals, units, "approximately", and that every equation's solutions are all listed.`
    },
    {
      id: 'pfs6-mc',
      type: 'multiple-choice' as const,
      content: '**Point-loss check.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A student solves $\\log_2 x + \\log_2(x - 2) = 3$ correctly to $(x - 4)(x + 2) = 0$ and answers "$x = 4$ or $x = -2$." What happens to the point?',
            options: ['It is lost, because an extraneous solution is reported', 'It is earned, because $x = 4$ appears in the answer', 'It is earned, because the algebra leading to it is correct', 'Half of it is earned for the factored equation'],
            correctAnswer: 0,
            explanation: 'The solution point requires the correct solution set. $x = -2$ makes $\\log_2 x$ undefined, so including it means the set is wrong. Points are whole; there are no half points, and correct algebra with a wrong final answer does not earn the solution point.'
          },
          {
            question: 'The student in the scored response wrote "period $3$." What was the error?',
            options: ['Maximum to minimum is half a cycle; the full period is $6$ seconds', 'The period should be measured from the midline, giving $1.5$ seconds', 'The period of a cosine model is always $2\\pi$', 'The period is the amplitude divided by $b$, giving $40 \\div \\frac{\\pi}{3}$'],
            correctAnswer: 0,
            explanation: 'A period is one complete cycle, from a maximum to the next maximum: $t = 0$ to $t = 6$. Half of that, $3$ seconds, is the time from the maximum to the following minimum. The other options describe no valid measurement of the period.'
          },
          {
            question: 'With $35$ minutes for Part A, a student has used $25$ minutes on Question 1 and has not started Question 2. What is the best move?',
            options: ['Start Question 2 now and run the regression first, since parts (B) and (C) need it', 'Finish Question 1 completely, since a finished question is worth more than two partial ones', 'Skip Question 2 and use the time to recheck every decimal in Question 1', 'Read Question 2 and answer only part (C), which needs no regression'],
            correctAnswer: 0,
            explanation: 'Points are earned part by part, so ten minutes on Question 2 can earn several points, and all of them depend on having the regression model stored. A finished question is worth no more than its points, rechecking earns nothing new, and part (C) of a modeling question uses the model.'
          },
          {
            question: 'Which response to "On $3 < t < 4.5$, is $h$ increasing or decreasing, and is its rate of change increasing or decreasing? Give a reason." earns both points?',
            options: ['$h$ is increasing because it rises from the minimum at $t = 3$ toward the midline; the rate of change is increasing because the graph is concave up there', '$h$ is increasing because it rises from the minimum at $t = 3$ toward the midline; the rate of change is decreasing because the graph flattens near the midline', '$h$ is increasing because the heights on the graph get bigger; the rate of change is increasing because the heights get bigger', '$h$ is decreasing because the tip has just passed its highest point; the rate of change is decreasing because the graph is concave down there'],
            correctAnswer: 0,
            explanation: 'Both statements must be correct and each needs its own reason. Between a minimum and the midline a sinusoid is increasing and concave up, so its rate of change is increasing. The second option gets the concavity wrong (the curve steepens toward the midline), the third gives the same non-reason twice, and the fourth describes the interval just after $t = 0$.'
          }
        ]
      }
    },
    {
      id: 'pfs6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Exam habits.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'In Part A, "approximately" (or $\\approx$) belongs in an answer whenever:',
            options: ['the value comes from a model or a rounded computation', 'the value is read directly from the given data table', 'the answer happens to come out as a whole number', 'the question appears in a no-calculator part of the exam'],
            correctAnswer: 0
          },
          {
            label: 'Entering the Question 2 data and running the regression before writing anything:',
            options: ['saves time, since every later part uses the stored model', 'wastes time, since regression is needed only in part (A)', 'is not allowed, since written work must be shown first', 'matters only in the no-calculator Part B of the section'],
            correctAnswer: 0
          },
          {
            label: 'Labeling each answer with its part letter and boxing it:',
            options: ['helps the reader find and credit the answer', 'is required, and unlabeled work loses a point', 'replaces the need for a written justification', 'tells the reader to ignore the scratch work'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['the value comes from a model or a rounded computation', 'saves time, since every later part uses the stored model', 'helps the reader find and credit the answer'],
        hint1: 'A model is a fit to data, so its outputs are estimates.',
        hint2: 'Parts (B) and (C) of Question 2 evaluate and solve with the model.',
        hint3: 'Readers score what they can find; labels and boxes make the answer unmistakable.',
        explanation: 'Model outputs and rounded decimals are approximations; table values are exact data. Storing the regression first means parts (B) and (C) are a few keystrokes each. Labels are not themselves scored, but a clearly marked answer is never missed.'
      }
    },
    {
      id: 'pfs6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- The common losses are conventions: **three decimals**, **approximately**, **units and interval**, **all solutions**, **domain check**, **full period**, **both halves** of a rate-of-change description
- Points are whole and independent; a mistake in one part does not spread
- Part A: **Q1 ≈ 15 min, Q2 ≈ 20 min** (data entry first); Part B: **Q3 ≈ 17 min, Q4 ≈ 18 min**
- Finish each section with a **two-minute convention check**`
    }
  ]
};
