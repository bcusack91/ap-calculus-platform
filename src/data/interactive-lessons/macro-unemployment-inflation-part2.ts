export const macroUnemploymentInflationPart2Data = {
  topicSlug: 'macro-unemployment-inflation',
  sections: [
    {
      id: 'macroune2-intro',
      type: 'text' as const,
      content: `
# 📊 Unemployment & Inflation

**Part 2 of 7 — Measuring the Labor Market**

---

| Section |
|---------|
| 📖 Who Counts: Employed, Unemployed, Not in the Labor Force |
| Classifying Real Cases |
| The Unemployment Rate and the Participation Rate |
| What the Unemployment Rate Misses |

> 🔑 **Key Concept:** The unemployment rate is built from survey answers that sort every working-age person into one of three groups: **employed**, **unemployed** or **not in the labor force**. The AP exam rewards students who can classify people correctly, compute the unemployment and labor force participation rates, and explain why the official rate can overstate or understate the true condition of the labor market.
`
    },
    {
      id: 'macroune2-groups',
      type: 'text' as const,
      content: `
## 📖 Who Counts: Employed, Unemployed, Not in the Labor Force

In the United States, the Bureau of Labor Statistics (BLS) estimates unemployment each month from the **Current Population Survey**, a survey of about 60,000 households. The survey covers the **civilian noninstitutional population age 16 and older**, which this lesson calls the **working-age population**. People in prisons, nursing homes and the armed forces are left out of that population entirely.

Each person in the working-age population lands in exactly one group, based on what they did during the survey week.

| Group | BLS test | Examples |
|---|---|---|
| **Employed** | Did **any** work for pay or profit during the survey week (even 1 hour), worked 15+ hours unpaid in a family business, or has a job but was temporarily absent (vacation, illness) | Full-time nurse; teen working 6 hours a week at a café; manager home sick this week |
| **Unemployed** | Has no job, is **available** to work, and **actively looked** for work in the past 4 weeks; or is on temporary layoff expecting to be recalled | Laid-off engineer sending out applications; graduate interviewing for first job |
| **Not in the labor force** | Neither employed nor unemployed: not working and not actively looking | Retiree; full-time student not seeking work; stay-at-home parent; discouraged worker |

The two building blocks:

**Labor force = Employed + Unemployed**

**Working-age population = Labor force + Not in the labor force**

> ⚠️ **"Actively looking" is the dividing line.** Contacting employers, sending résumés, or going to job interviews counts. Only reading job ads does **not** count. A person without a job who has not actively searched in the past 4 weeks is **not in the labor force**, no matter how much they want a job.

### Discouraged workers

A **discouraged worker** wants a job and is available to work but has stopped searching because they believe no suitable job is available. Because they are not actively looking, they are **not in the labor force** and are **not counted as unemployed**.

### Underemployed workers

A worker who has a job but wants more hours or a job that uses their skills is **underemployed**. Examples: a part-time cashier who wants full-time work, or a laid-off accountant driving for a rideshare app. Because they did some paid work, the BLS counts them as **employed**.
`
    },
    {
      id: 'macroune2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Dana lost her warehouse job last month. During the past two weeks she has applied for four openings and is ready to start work immediately. How does the BLS classify Dana?',
            options: [
              'Unemployed, in the labor force',
              'Employed, in the labor force',
              'Not in the labor force',
              'Discouraged, outside the labor force'
            ],
            correctAnswer: 0,
            explanation: 'Dana has no job, is available, and has actively searched in the past 4 weeks, so she is unemployed and part of the labor force. A discouraged worker has stopped searching, and Dana has not.'
          },
          {
            question: 'Marcus wants a full-time job, but the only work he can find is a 15-hour-a-week shift at a grocery store. In the official statistics, Marcus is counted as',
            options: [
              'unemployed',
              'employed',
              'not in the labor force',
              'a discouraged worker'
            ],
            correctAnswer: 1,
            explanation: 'Anyone who did paid work during the survey week is employed, even for a few hours, so Marcus is counted as employed. He is underemployed, which is why the official unemployment rate does not capture his situation.'
          },
          {
            question: 'Priya, age 22, is a full-time graduate student. She has no job and is not looking for one until she finishes her degree. Priya is',
            options: [
              'frictionally unemployed',
              'structurally unemployed',
              'not in the labor force',
              'counted as a discouraged worker'
            ],
            correctAnswer: 2,
            explanation: 'Priya is not working and not searching, so she is outside the labor force. Frictional and structural unemployment apply only to people who are actively looking, and a discouraged worker wants a job now but has given up searching.'
          }
        ]
      }
    },
    {
      id: 'macroune2-rates',
      type: 'text' as const,
      content: `
## The Unemployment Rate and the Participation Rate

Two rates summarize the labor market. They use **different denominators**, which is the most common source of mistakes.

| Measure | Formula | What it tells you |
|---|---|---|
| **Unemployment rate** | (Unemployed ÷ Labor force) × 100 | The share of people **in the labor force** who are jobless and searching |
| **Labor force participation rate (LFPR)** | (Labor force ÷ Working-age population) × 100 | The share of the working-age population that is **working or looking** |

### Worked Example: Country A

| Group | Number (millions) |
|---|---|
| Employed | 152 |
| Unemployed | 8 |
| Not in the labor force | 90 |

**Step 1: Labor force** = 152 + 8 = **160 million**

**Step 2: Working-age population** = 160 + 90 = **250 million**

**Step 3: Unemployment rate** = (8 ÷ 160) × 100 = **5.0%**

**Step 4: LFPR** = (160 ÷ 250) × 100 = **64.0%**

### Worked Example: Workers Give Up

Now suppose 2 million of the unemployed in Country A become discouraged and stop searching. Nobody finds a job.

| Group | Before | After |
|---|---|---|
| Employed | 152 | 152 |
| Unemployed | 8 | **6** |
| Not in the labor force | 90 | **92** |
| Labor force | 160 | **158** |

**New unemployment rate** = (6 ÷ 158) × 100 ≈ **3.8%**

**New LFPR** = (158 ÷ 250) × 100 = **63.2%**

The unemployment rate **fell** from 5.0% to about 3.8%, yet not one person got a job. The labor market got weaker, but the headline number looks better. This is why economists check the participation rate alongside the unemployment rate.

> 🔑 **AP Connection:** When a question says workers "stop looking" or "give up," move them from **unemployed** to **not in the labor force**. Both the numerator and the denominator of the unemployment rate shrink, and the rate falls. The participation rate falls too.
`
    },
    {
      id: 'macroune2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

Country B has a working-age population of 200 million. Of these, 114 million are employed and 6 million are unemployed. The rest are not in the labor force.

**1)** What is the labor force, in millions?

**2)** What is the unemployment rate, in percent?

**3)** What is the labor force participation rate, in percent?

Enter numbers only (no % sign or units). Round to one decimal place if needed.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['120', '5', '60'],
        hint1: 'The labor force is everyone who is employed or unemployed: 114 + 6.',
        hint2: 'The unemployment rate divides the unemployed by the labor force, not by the population.',
        hint3: 'The participation rate divides the labor force by the working-age population of 200 million.',
        explanation: '1) Labor force = 114 + 6 = 120 million. 2) Unemployment rate = (6 ÷ 120) × 100 = 5%. 3) LFPR = (120 ÷ 200) × 100 = 60%.'
      }
    },
    {
      id: 'macroune2-limits',
      type: 'text' as const,
      content: `
## What the Unemployment Rate Misses

The unemployment rate is the most watched labor statistic, but it is an imperfect measure of how many people lack the work they want. Some problems make it **too low**; others make it **too high**.

| Problem | Effect on the official rate | Why |
|---|---|---|
| **Discouraged workers** | Understates joblessness | People who gave up searching are dropped from the labor force instead of counted as unemployed |
| **Underemployment** | Understates joblessness | Part-time workers who want full-time work, and workers in jobs below their skill level, count as fully employed |
| **False searchers** | Overstates joblessness | Some people report searching (for example, to keep receiving unemployment benefits) without really wanting a job |
| **Underground economy** | Overstates joblessness | People working "off the books" may report themselves as unemployed |

The BLS publishes broader measures to fill some of these gaps. The widest, called **U-6**, adds discouraged and other marginally attached workers and people working part time for economic reasons. U-6 is always higher than the official rate (called U-3).

### Two more limits

- **The rate says nothing about duration.** A 5% rate where most people find work within a month is very different from a 5% rate where many have searched for over a year.
- **Participation changes can move the rate.** As the worked example showed, the rate can fall because people leave the labor force, not because they find jobs.

> 🔑 **AP Connection:** A common free-response prompt asks how a change affects the unemployment rate. Track the change one step at a time. Ask: (1) Does the number of unemployed change? (2) Does the labor force change? Then recompute the ratio rather than guessing the direction.
`
    },
    {
      id: 'macroune2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a country with 5 million unemployed and a labor force of 100 million, 1 million of the unemployed stop searching because they believe no jobs are available. No one gains or loses a job. What happens?',
            options: [
              'The unemployment rate rises, and participation falls',
              'The unemployment rate falls, and participation is unchanged',
              'The unemployment rate is unchanged, and participation falls',
              'The unemployment rate falls, and participation falls'
            ],
            correctAnswer: 3,
            explanation: 'The unemployed fall to 4 million and the labor force to 99 million, so the rate drops from 5.0% to about 4.0%. Because the labor force shrinks while the working-age population does not, the participation rate also falls.'
          },
          {
            question: 'Which situation causes the official unemployment rate to understate how many people lack the jobs they want?',
            options: [
              'Workers who give up searching are no longer counted in the labor force',
              'Workers who search only to keep benefits are counted as unemployed',
              'Workers who earn cash off the books report themselves as unemployed',
              'Workers who are between jobs for a few weeks count as unemployed'
            ],
            correctAnswer: 0,
            explanation: 'Discouraged workers want jobs but are left out of the unemployed count, so the official rate is too low. People who search only to keep benefits or who work off the books push the rate too high, and people between jobs are measured correctly as frictionally unemployed.'
          }
        ]
      }
    }
  ]
}
