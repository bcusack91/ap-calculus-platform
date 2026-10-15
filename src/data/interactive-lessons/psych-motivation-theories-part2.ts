export const psychMotivationPart2Data = {
  topicSlug: 'motivation-theories',
  sections: [
    {
      id: 'motivation-theories-p2-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Motivation Theories

**Part 2 of 7 — Arousal Theory and the Yerkes-Dodson Law**

Why would a well-fed, well-rested person get bored, pick up a puzzle, or turn on loud music to study? Drive-reduction theory says we act to lower tension, but sometimes we act to raise it.

### What Is Arousal?

**Arousal** is a person's overall level of physiological and psychological activation: how alert, energized and physically "revved up" they are. It runs on a continuum:

| Arousal level | What it looks like |
|------|-----------|
| **Very low** | Drowsy, bored, slow reactions, mind wandering |
| **Moderate** | Alert, focused, engaged, ready to act |
| **Very high** | Jittery, pounding heart, racing thoughts, trouble concentrating |

Two biological pieces from Unit 1 connect here. The **reticular activating system** in the brain stem helps regulate alertness and wakefulness, and the hormone **adrenaline** raises heart rate and energy when the body faces a challenge.

### 📚 Arousal Theory

**Arousal theory** proposes that people are motivated to maintain an **optimal level of arousal**, not the lowest possible level.

- When arousal is **too low**, people seek stimulation: they turn on music, call a friend, explore something new.
- When arousal is **too high**, people seek calm: they take a break, breathe slowly, step away from noise.

This is the key difference from drive-reduction theory. Drive reduction only predicts behavior that **lowers** tension. Arousal theory predicts behavior in **both directions**, depending on where a person is relative to their optimum.

| | Drive-reduction theory | Arousal theory |
|------|-----------|-----------|
| **Goal of behavior** | Remove tension created by a physical need | Reach a comfortable middle level of activation |
| **Direction** | Always toward less tension | Toward more **or** less stimulation |
| **Explains well** | Eating when hungry, drinking when thirsty | Curiosity, exploration, avoiding boredom, calming down when overwhelmed |

### Evidence That People Seek Stimulation

- **Curiosity in monkeys.** In classic research by Harry Harlow and colleagues, monkeys repeatedly worked mechanical latch puzzles with no food or other reward. The activity itself seemed to be motivating, which drive-reduction theory cannot explain.
- **Monotony is aversive.** In mid-century studies of stimulus monotony, paid volunteers lay in a quiet cubicle with goggles, gloves and cardboard cuffs that limited sight and touch. Even with good pay for each day, most quit within a few days, and many reported trouble thinking clearly. Too little stimulation is not restful; it is unpleasant.
      `
    },
    {
      id: 'motivation-theories-p2-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'On a quiet Sunday afternoon with no homework, Jordan feels restless and bored, so he texts friends to start a pickup basketball game. Which explanation fits arousal theory best?',
            options: [
              'He is restoring homeostasis after a physical need for food went unmet',
              'He is reacting to a fixed, unlearned pattern that sports cues set off',
              'He is raising his activation toward a comfortable, optimal middle level',
              'He is resolving a choice between two activities that he equally dislikes'
            ],
            correctAnswer: 2,
            explanation: 'Arousal theory says people seek stimulation when arousal falls below their optimal level, which is what bored, restless Jordan does. No physical need is being reduced, humans do not seem to show instincts, and he is not stuck between two unpleasant options.'
          },
          {
            question: 'Which finding is the strongest challenge to drive-reduction theory and the strongest support for arousal theory?',
            options: [
              'Rats deprived of food longer press a food lever more often',
              'People drink more water after eating a salty snack',
              'Monkeys keep solving latch puzzles that give no reward',
              'People shiver and seek warm clothing in a cold room'
            ],
            correctAnswer: 2,
            explanation: 'Monkeys working puzzles with no reward are seeking stimulation itself, which arousal theory predicts and drive-reduction theory cannot explain. The other three findings all show behavior that restores homeostasis after a physical need, which fits drive-reduction theory.'
          }
        ]
      }
    },
    {
      id: 'motivation-theories-p2-s3-yerkes',
      type: 'text' as const,
      content: `
### 📚 The Yerkes-Dodson Law

The CED names the **Yerkes-Dodson law** as the demonstration of arousal theory. It describes the relationship between arousal and **performance**:

> **Performance improves as arousal rises, but only up to a point. Past that point, more arousal makes performance worse.**

Described as a graph: put arousal on the x-axis (low to high) and performance on the y-axis. The curve rises, peaks at a moderate level, then falls. Because it looks like an upside-down U, it is called an **inverted-U** relationship.

### Task Difficulty Moves the Peak

The second half of the law is the part students forget: **the best level of arousal depends on the task.**

| Task type | Where performance peaks | Why | Examples |
|------|-----------|-----------|-----------|
| **Simple or well-practiced** | At **relatively high** arousal | Extra energy speeds up responses that are already automatic | Sprinting, lifting, typing a memorized phrase, a simple clerical task |
| **Complex or new** | At **relatively low** arousal | High arousal crowds attention and disrupts careful thinking | A multi-step math proof, a first attempt at a new skill, a delicate surgery |

So on a graph with two curves, the curve for the **difficult** task peaks **to the left** (lower arousal) of the curve for the **easy** task.

### Where the Law Came From

Robert Yerkes and John Dodson published the original study in 1908 with mice learning to choose the correct one of two boxes, with mild electric shocks for errors serving as the arousal manipulation. When the discrimination was easy, stronger shocks produced faster learning; when the discrimination was hard, learning was best at weaker shock levels. Modern researchers apply the same pattern to human arousal and performance.

### Worked Example: Two Students, One Exam Day

*Scenario: Priya and Theo both take a difficult AP Calculus exam. Priya, normally calm, is mildly nervous and alert. Theo slept badly, drank three energy drinks and is shaking. Later that day both run a timed mile in gym class.*

1. **The exam is a complex task**, so its peak is at a moderate-to-low arousal level. Priya's mild alertness is close to that peak; Theo's very high arousal is on the falling side of the curve, so his exam performance is likely to suffer.
2. **The mile is a simple, well-practiced task**, so its peak is at a higher arousal level. Theo's extra activation may help less on the exam but could help more on the run.
3. **Conclusion:** the same arousal level can help one task and hurt another. Always ask how difficult or practiced the task is before deciding whether arousal helps.
      `
    },
    {
      id: 'motivation-theories-p2-s4-data',
      type: 'input-boxes' as const,
      content: `
**Reading the Data** 📊

*Practice study (not a real citation).* A researcher randomly assigns 200 students to one of five arousal conditions, created with increasing time pressure and a loud countdown clock (level 1 = no time pressure, level 5 = extreme time pressure). Half the students in each condition do an **easy** task (copying rows of letters), and half do a **hard** task (multi-step logic puzzles). Mean percentage correct:

| Arousal level | 1 | 2 | 3 | 4 | 5 |
|------|------|------|------|------|------|
| **Easy task** | 60 | 72 | 84 | 88 | 80 |
| **Hard task** | 55 | 70 | 64 | 48 | 35 |
      `,
      exercise: {
        questions: [
          {
            question: 'At which arousal level (1–5) was mean performance on the hard task highest?',
            answer: '2',
            acceptableAnswers: ['2', 'level 2', 'two'],
            explanation: 'The hard-task mean peaks at 70 at level 2, a relatively low arousal level, just as the Yerkes-Dodson law predicts for complex tasks.'
          },
          {
            question: 'At which arousal level (1–5) was mean performance on the easy task highest?',
            answer: '4',
            acceptableAnswers: ['4', 'level 4', 'four'],
            explanation: 'The easy-task mean peaks at 88 at level 4, a higher arousal level than the hard-task peak. Simple tasks benefit from more arousal.'
          },
          {
            question: 'By how many percentage points did the hard-task mean fall from its peak to arousal level 5?',
            answer: '35',
            acceptableAnswers: ['35', '35 points', '35%'],
            explanation: 'The hard-task mean falls from 70 at level 2 to 35 at level 5, a drop of 70 - 35 = 35 percentage points.'
          }
        ]
      }
    },
    {
      id: 'motivation-theories-p2-s5-reading',
      type: 'text' as const,
      content: `
### 📚 Interpreting Arousal Data Like an AP Student

The practice data show the full Yerkes-Dodson pattern:

| What to look for | What the table shows |
|------|-----------|
| **Inverted U for each task** | Both rows rise and then fall: neither keeps improving as arousal climbs |
| **Peak shifts with difficulty** | Easy task peaks at level 4; hard task peaks at level 2 |
| **Cost of too much arousal is larger for hard tasks** | From peak to level 5, the easy task drops 8 points (88 to 80) but the hard task drops 35 (70 to 35) |

### Research-Methods Checklist for This Study

| Element | In the practice study |
|------|-----------|
| **Independent variables** | Arousal level (five conditions) and task difficulty (easy vs. hard) |
| **Operational definition of arousal** | The amount of time pressure and the loud countdown clock assigned to each condition |
| **Dependent variable** | Percentage of items answered correctly |
| **Why random assignment matters** | It spreads differences such as test anxiety or ability evenly across conditions, so differences in means can be attributed to the manipulation |
| **A limit on generalizing** | All participants were students solving short lab tasks; the results may not transfer to athletes, workers or real high-stakes exams |
| **Ethics** | Stressful manipulations require informed consent, the right to withdraw at any time and a debriefing afterward |

A good researcher would also check that the manipulation worked, for example by measuring heart rate or asking participants to rate how tense they felt in each condition. That is a **manipulation check**: evidence that the IV actually changed arousal.

### Individual Differences in the Optimum

Arousal theory also predicts that the optimal level is **not the same for everyone**. Some people feel best in a quiet library; others need background music, people and noise to stay alert. That idea, that people differ in how much stimulation they need, is the foundation for **sensation-seeking theory** in Part 3.

> **AP Connection:** The Yerkes-Dodson law links to **social facilitation** in Unit 4: the presence of others raises arousal, which tends to improve performance on simple or well-learned tasks and impair performance on complex or new ones.
      `
    },
    {
      id: 'motivation-theories-p2-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A violinist plays scales she has practiced for years and a piece she learned this week, each once in an empty room and once in front of a large, noisy audience. According to the Yerkes-Dodson law, what is the most likely result?',
            options: [
              'The audience helps the scales and the new piece equally, since arousal improves any rehearsed playing',
              'The audience tends to help the scales but tends to hurt the new piece',
              'The audience hurts the scales and the new piece equally, since high arousal harms any playing',
              'The audience helps the new piece more than the scales, since unfamiliar music needs extra energy'
            ],
            correctAnswer: 1,
            explanation: 'Simple, well-practiced tasks peak at higher arousal, while new, complex tasks peak at lower arousal. The noisy audience raises arousal, which tends to help the familiar scales and hurt the newly learned piece.'
          },
          {
            question: 'A graph shows two inverted-U curves of performance plotted against arousal. Curve X peaks at a lower arousal level than Curve Y. Which interpretation is most consistent with the Yerkes-Dodson law?',
            options: [
              'Curve X shows a task that is more difficult',
              'Curve X shows a task that is much simpler',
              'Curve X shows a group that tried harder',
              'Curve X shows a group with more practice'
            ],
            correctAnswer: 0,
            explanation: 'Difficult or unfamiliar tasks reach their best performance at lower arousal, so the curve that peaks further left belongs to the harder task. Simpler or better-practiced tasks would peak at higher arousal, and effort alone does not shift the peak.'
          },
          {
            question: 'In the practice study, a critic notes that the researcher never measured whether time pressure actually made students feel more aroused. Which addition would best address this criticism?',
            options: [
              'Record each student\'s heart rate during every condition',
              'Add a sixth condition with even more time pressure',
              'Recruit athletes in addition to students for a new sample',
              'Give the hard task to more of the students than the easy task'
            ],
            correctAnswer: 0,
            explanation: 'Measuring heart rate is a manipulation check: it shows whether the time-pressure conditions really produced different arousal levels. Adding a sixth condition, recruiting athletes or changing how many students get each task does not show whether arousal changed.'
          }
        ]
      }
    },
    {
      id: 'motivation-theories-p2-s7-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Strategy: Arousal Questions

**Quick decision guide**

- Someone is bored and seeks stimulation, or overwhelmed and seeks calm → **arousal theory** (optimal level)
- A question links arousal to **performance** → **Yerkes-Dodson law**
- The question mentions task difficulty → simple tasks peak at **higher** arousal; complex tasks peak at **lower** arousal

**Traps to avoid**

| Trap | Fix |
|------|-----------|
| "More arousal always helps performance" | Performance peaks at a moderate level, then declines |
| "Low arousal is always best for hard tasks" | Too little arousal also hurts; the hard-task peak is low-to-moderate, not zero |
| "Arousal theory and drive-reduction theory make the same prediction" | Only arousal theory predicts that people will seek **more** stimulation |
| Naming emotion theories to explain arousal | The CED excludes specific emotion-theory names; describe arousal and performance instead |

> **AP Connection:** For an EBQ about test anxiety or sports performance, the Yerkes-Dodson law is often the strongest psychological concept to explain the evidence: name the inverted U and say where on the curve the person in the source falls.
      `
    }
  ]
}
