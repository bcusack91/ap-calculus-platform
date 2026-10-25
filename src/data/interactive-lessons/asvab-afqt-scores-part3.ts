export const asvabAfqtScoresPart3Data = {
  topicSlug: 'asvab-afqt-scores',
  sections: [
    {
      id: 'afqt3-intro',
      type: 'text' as const,
      content: `# 🎖️ Your AFQT, Line Scores and Job Eligibility

**Part 3 of 7 — The AFQT Formula and Percentile**

### Step 1: add the standard scores

The AFQT starts as a sum of four standard scores, with VE counted **twice**:

$$\\text{AFQT sum} = \\text{AR} + \\text{MK} + 2 \\times \\text{VE}$$

Because VE is doubled, your verbal skills carry **as much weight as AR and MK combined**. One extra point of VE adds **2** points to the sum; one extra point of AR or MK adds **1**.

### Step 2: turn the sum into a percentile

The sum is converted to a percentile from **1 to 99** with an official conversion table published by the Defense Manpower Data Center in 2004 (the 1997-scale table). Your percentile is the share of the 1997 reference group that scored **at or below** you.

Here is an excerpt of that table. Near the middle, each extra point of sum is worth about one percentile point.

| AFQT sum | AFQT percentile |
|:---:|:---:|
| 180 | 28 |
| 183 | 31 |
| 186 | 34 |
| 190 | 38 |
| 195 | 43 |
| 200 | 48 |
| 202 | 50 |
| 205 | 53 |
| 210 | 59 |
| 215 | 64 |
| 220 | 70 |
| 225 | 74 |
| 230 | 79 |
| 235 | 83 |
| 240 | 87 |
| 245 | 90 |
| 249 | 93 |

Three anchors worth remembering: a sum of **183** is the **31st** percentile, a perfectly average applicant (every standard score 50, sum **200**) is the **48th** percentile, and a sum of **202** is the **50th**.`
    },
    {
      id: 'afqt3-worked',
      type: 'text' as const,
      content: `## Worked examples

**Example 1 — an average applicant.** AR 50, MK 50, VE 50.

$$50 + 50 + 2(50) = 200 \\quad\\Rightarrow\\quad \\text{AFQT } 48$$

**Example 2 — a strong verbal score.** AR 57, MK 53, VE 60.

$$57 + 53 + 2(60) = 57 + 53 + 120 = 230 \\quad\\Rightarrow\\quad \\text{AFQT } 79$$

**Example 3 — working backward.** An applicant has AR 52 and MK 48. What VE gives a sum of 210 (the 59th percentile)?

$$52 + 48 + 2\\,\\text{VE} = 210 \\quad\\Rightarrow\\quad 2\\,\\text{VE} = 110 \\quad\\Rightarrow\\quad \\text{VE} = 55$$

### Why it is NOT percent correct

You never see a "number right" in this process. Each subtest becomes a standard score, the standard scores are added, and the sum becomes a percentile. An AFQT of 50 means you landed in the middle of the reference group.

> **Key Fact:** AFQT sum = **AR + MK + 2 × VE** (standard scores), then the official table converts the sum to a **percentile from 1 to 99**.`
    },
    {
      id: 'afqt3-input',
      type: 'input-boxes' as const,
      content: `**Compute an AFQT.** ✍️

A recruit's standard scores are AR 48, MK 45 and VE 51. Use the table excerpt in this part.

**1)** The AFQT sum:

**2)** The AFQT percentile:

**3)** Another recruit has AR 50 and MK 50. What VE score gives a sum of exactly 202?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['195', '43', '51'],
        hint1: 'Double VE before adding: $48 + 45 + 2(51)$.',
        hint2: 'Find the sum in the left column of the table excerpt.',
        hint3: '$100 + 2\\,\\text{VE} = 202$.',
        explanation: '(1) $48 + 45 + 102 = 195$. (2) A sum of 195 is the 43rd percentile. (3) $50 + 50 + 2\\,\\text{VE} = 202$ gives $2\\,\\text{VE} = 102$, so VE = 51, which is the 50th percentile.'
      }
    },
    {
      id: 'afqt3-mc',
      type: 'multiple-choice' as const,
      content: '**Use the formula.** 🎯',
      exercise: {
        questions: [
          {
            question: "An applicant raises VE by 4 points and leaves AR and MK unchanged. How much does the AFQT sum go up?",
            options: ['4 points', '8 points', '2 points', '16 points'],
            correctAnswer: 1,
            explanation: 'VE is counted twice in AR + MK + 2 × VE, so 4 more VE points add 8 to the sum.'
          },
          {
            question: "Which statement about the AFQT is correct?",
            options: ['It is the percent of AFQT questions you answered correctly', 'It is the average of your four AFQT standard scores', 'It is a percentile found from the sum AR + MK + 2 × VE', 'It is the total of all ten subtest standard scores'],
            correctAnswer: 2,
            explanation: 'The AFQT is a 1 to 99 percentile looked up from the standard-score sum AR + MK + 2 × VE. It is not a percent correct, not an average, and the other six subtests are not in it.'
          },
          {
            question: "Every one of a recruit's standard scores is exactly 50. What is the recruit's AFQT, using the table excerpt?",
            options: ['48', '50', '100', '200'],
            correctAnswer: 0,
            explanation: 'The sum is 50 + 50 + 2(50) = 200, and the official table converts 200 to the 48th percentile. The 50th percentile needs a sum of 202, and 200 is the sum itself, not the percentile.'
          },
          {
            question: "Two recruits have the same AFQT sum of 220. Recruit 1 has VE 55; Recruit 2 has VE 50. What must be true?",
            options: ['Recruit 2 has the higher AFQT percentile', 'Recruit 1 has the higher AFQT percentile', 'Recruit 2 has 10 more points of AR plus MK combined', 'Recruit 1 has 10 more points of AR plus MK combined'],
            correctAnswer: 2,
            explanation: 'Equal sums give equal percentiles. Recruit 1 gets 110 from VE and Recruit 2 gets 100, so Recruit 2 must make up 10 points in AR + MK (110 versus 100).'
          }
        ]
      }
    },
    {
      id: 'afqt3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **AFQT sum = AR + MK + 2 × VE**, all standard scores. VE counts double.
- The official 1997-scale table turns the sum into a **percentile, 1 to 99**.
- Anchors: sum 183 → 31st, sum 200 → 48th, sum 202 → 50th, sum 249 → 93rd.
- One VE point = 2 sum points; near the middle, one sum point ≈ one percentile point.

> **Up Next:** Part 4 — what the percentile means for enlistment: AFQT categories and branch minimums.`
    }
  ]
};
