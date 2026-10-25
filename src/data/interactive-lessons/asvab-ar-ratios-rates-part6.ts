export const asvabArRatiosRatesPart6Data = {
  topicSlug: 'asvab-ar-ratios-rates',
  sections: [
    {
      id: 'arrr6-intro',
      type: 'text' as const,
      content: `# 🚚 Ratios, Proportions and Rates

**Part 6 of 7 — Test Strategy and Common Traps**

### The seven traps behind the wrong choices

Ratio and rate questions have very predictable wrong answers. Learn them and you will recognize them on sight.

| Trap | What it looks like | How to dodge it |
|:---|:---|:---|
| **Inverted ratio** | Asked for "cars to trucks," you write trucks first | Write the ratio in the same order as the words, and label each number |
| **Part-to-part used as part-to-whole** | Ratio 2 : 3, so you call the first part $\\frac{2}{3}$ of the total | Add the parts first: the first part is $\\frac{2}{5}$ of the whole |
| **Mismatched units in a proportion** | Gallons on top on one side, minutes on top on the other | Write the units next to every number; same unit, same position |
| **Averaging two speeds** | 30 mph out, 60 mph back, so "45 mph" | Average speed = total distance ÷ total time |
| **Adding work times** | 4 hours and 12 hours together, so "16 hours" | Add the **rates**; together is faster than either alone |
| **Minutes left un-converted** | 36 mph for 40 minutes, so "1,440 miles" | Change minutes to hours before using a speed in mph |
| **Map scale applied backwards** | Real miles multiplied by the scale instead of divided | Real distances are big numbers; map distances are small |

> **Key Fact:** Each trap produces a number that really is one of the four choices. Matching a choice proves nothing; a quick check against the story does.`
    },
    {
      id: 'arrr6-timing',
      type: 'text' as const,
      content: `## Timing: spend your 3.5 minutes where they count

On the CAT-ASVAB you have 55 minutes for 15 scored AR questions, about **3.5 minutes each** on average.

- A **one-step rate** (price per item, $d = r \\times t$ with hours already given) should take about **1 minute**.
- The time you bank pays for the **multi-step** ones: a catch-up problem, a round-trip average speed, two workers on one job. Those can take 4 or 5 minutes, and that's fine.
- You **can't skip or go back**, so give each problem real effort the first time and check before you answer.
- If you are stuck, use estimation to eliminate choices and pick the most reasonable one that's left. Unfinished questions are scored as random guesses, and a run of wrong answers late in a subtest is penalized heavily, so keep genuinely working problems instead of clicking at random. The time limit is generous enough that this rarely comes up.

### Estimation eliminates choices

- **Work together:** the answer must be **less than the faster worker's time**. If one crew takes 8 hours, any choice of 8 or more is out.
- **Round-trip average speed:** the answer is **between** the two speeds and a bit **below** their simple average, because more time is spent at the slower speed.
- **Proportions:** decide first whether the answer should be bigger or smaller than the number you started with.`
    },
    {
      id: 'arrr6-backsolve',
      type: 'text' as const,
      content: `## Back-solving: let the choices do the work

When a problem is hard to set up, plug the choices into the story.

**Worked Example.** One pump fills a tank in 8 hours. With a second pump helping, the tank fills in 6 hours. How long would the second pump take alone?

Choices: 12 hours, 16 hours, 24 hours, 32 hours.

Try 24 with the product-over-sum shortcut: $\\frac{8 \\times 24}{8 + 24} = \\frac{192}{32} = 6$ hours. ✓ That's the answer.

(If you had tried 12: $\\frac{8 \\times 12}{20} = \\frac{96}{20} = 4.8$ hours, too fast, so the second pump must be slower than 12 hours.)

## The 20-second reasonableness checklist

1. **Did I answer the last sentence?** The number added, not the new total; the cost, not the gallons.
2. **Is it in the right unit?** Minutes or hours; inches on the map or miles on the ground.
3. **Is the direction right?** More time means more distance; a bigger recipe means more of every ingredient.
4. **Do the parts add back to the whole?** In a split, the shares must total the original amount.
5. **Is a combined time shorter than each worker alone?** Is an average speed between the two speeds?`
    },
    {
      id: 'arrr6-spot',
      type: 'multiple-choice' as const,
      content: '**Spot the trap.** A trap answer is waiting in each one. Find the real answer. 🕵️',
      exercise: {
        questions: [
          {
            question: 'A parking lot holds 12 trucks and 18 cars. Lee says trucks make up $\\frac{2}{3}$ of the vehicles. What fraction of the vehicles are actually trucks?',
            options: ['$\\frac{2}{3}$', '$\\frac{2}{5}$', '$\\frac{3}{5}$', '$\\frac{3}{2}$'],
            correctAnswer: 1,
            explanation: 'There are $12 + 18 = 30$ vehicles, and $\\frac{12}{30} = \\frac{2}{5}$. Lee\'s $\\frac{2}{3}$ is the part-to-part ratio of trucks to cars, not trucks to all vehicles. $\\frac{3}{5}$ is the fraction that are cars, and $\\frac{3}{2}$ is the ratio of cars to trucks.'
          },
          {
            question: 'A driver goes 120 miles at 40 mph and then returns the same 120 miles at 60 mph. What is the average speed for the round trip?',
            options: ['50 mph', '48 mph', '100 mph', '24 mph'],
            correctAnswer: 1,
            explanation: 'Times: $120 \\div 40 = 3$ hours and $120 \\div 60 = 2$ hours. Total: 240 miles in 5 hours, so $240 \\div 5 = 48$ mph. 50 mph is the trap of averaging the two speeds, 100 mph adds them, and 24 mph divides only the one-way 120 miles by the total time.'
          },
          {
            question: 'One crew can repave a parking lot in 6 days, and a second crew can do it in 12 days. Working together, how many days will the job take?',
            options: ['18 days', '9 days', '6 days', '4 days'],
            correctAnswer: 3,
            explanation: 'Rates add: $\\frac{1}{6} + \\frac{1}{12} = \\frac{2}{12} + \\frac{1}{12} = \\frac{3}{12} = \\frac{1}{4}$ of the lot per day, so 4 days (shortcut: $\\frac{72}{18} = 4$). 18 days adds the times and 9 days averages them. 6 days is just the faster crew alone, but with help the job must finish sooner than that.'
          }
        ]
      }
    },
    {
      id: 'arrr6-spot-2',
      type: 'multiple-choice' as const,
      content: '**Spot the trap, continued.** 🕵️',
      exercise: {
        questions: [
          {
            question: 'A cyclist rides at 14 miles per hour for 30 minutes. How far does she ride?',
            options: ['420 miles', '44 miles', '7 miles', '28 miles'],
            correctAnswer: 2,
            explanation: '30 minutes is $\\frac{1}{2}$ hour, so $14 \\times \\frac{1}{2} = 7$ miles. 420 miles multiplies by 30 without turning minutes into hours, 44 miles adds 14 and 30, and 28 miles divides by $\\frac{1}{2}$ instead of multiplying.'
          },
          {
            question: 'On a map, 1 inch represents 50 miles. Two cities are 175 miles apart. How far apart are they on the map?',
            options: ['8,750 inches', '0.35 inches', '3.5 inches', '125 inches'],
            correctAnswer: 2,
            explanation: 'Real to map is divide: $175 \\div 50 = 3.5$ inches. 8,750 inches applies the scale backwards by multiplying, 0.35 inches slips the decimal point one place (check: $3.5 \\times 50 = 175$), and 125 inches subtracts 50 from 175. A map distance should be a small number.'
          }
        ]
      }
    },
    {
      id: 'arrr6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- The seven traps: **inverted ratio**, **part-to-part as part-to-whole**, **mismatched units**, **averaging speeds**, **adding work times**, **un-converted minutes**, **backwards map scale**
- Bank time on one-step rates so you can spend 4 or 5 minutes on the multi-step ones
- Estimate to eliminate: combined time < fastest alone; average speed between the two speeds and below their simple average
- When setup is hard, **back-solve** with the choices
- Run the checklist: last sentence, unit, direction, parts add up, reasonableness

> **Up Next:** Part 7 — a mixed mastery set covering every skill in this topic.`
    }
  ]
};
