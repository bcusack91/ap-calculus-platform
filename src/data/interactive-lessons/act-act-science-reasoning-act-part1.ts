export const actScienceReasonPart1Data = {
  topicSlug: 'act-science-reasoning-act',
  sections: [
    {
      id: 'act-s1-intro',
      type: 'text' as const,
      content: `
# 🔬 Science Reasoning

**Part 1 of 7 — The Scientific Method and the Language of Experiments**

## The ACT Science Section at a Glance

On the Enhanced ACT, Science is an **optional** section: **40 questions in 40 minutes**, each with **4 answer choices**. It is scored on its own and is **not** part of the composite score, which averages English, Math, and Reading. Some colleges and programs, especially in science and engineering, may ask for or consider it, so check the requirements of the schools you are applying to.

ACT Science is a **reasoning** test, not a memory test. Questions come in sets attached to short passages, and the passages appear in three formats:

| Passage format | What you see | What the questions stress |
|---|---|---|
| Data representation | One or more tables or graphs with a short introduction | Reading values, trends, interpolation |
| Research summaries | One or more experiments described step by step, with results | Variables, controls, design, conclusions |
| Conflicting viewpoints | Two or more scientists or students explaining the same thing differently | Comparing claims, predictions, and evidence |

Almost everything you need is printed in the passage. What the passage does **not** print is the vocabulary of experiments, and that is what this part teaches.

## The Scientific Method

| Step | What it is | Example (fizzing tablet) |
|---|---|---|
| Observation | Something noticed | A fizzing tablet seems to disappear faster in a warm glass of water. |
| Question | What you want to know | Does water temperature affect how long the tablet takes to dissolve? |
| Hypothesis | A testable prediction about how variables are related | If the water is warmer, the tablet will dissolve in less time. |
| Experiment | A test that changes one factor and measures another | Time identical tablets dissolving in 200 mL of water at 10°C, 25°C, and 40°C. |
| Analysis | Organizing and reading the data | 62 s at 10°C, 41 s at 25°C, 25 s at 40°C. |
| Conclusion | What the data say about the hypothesis | Dissolving time decreased as water temperature increased. |

The method is **iterative**: a conclusion usually raises a new question ("Does crushing the tablet matter too?"), which starts the cycle again. A study that ends by proposing a follow-up experiment is showing exactly this.

## What Makes a Good Hypothesis

A hypothesis must be **testable** (you can measure the variables) and **falsifiable** (some possible result would prove it wrong).

| Statement | Good hypothesis? | Why |
|---|---|---|
| Seeds soaked overnight will sprout sooner than dry seeds. | Yes | Sprouting time can be measured, and dry seeds sprouting first would disprove it. |
| Soaked seeds are happier. | No | "Happier" cannot be measured. |
| Soaking may or may not affect seeds somehow. | No | Every possible result fits, so nothing could disprove it. |
| Seeds sprout best in the nicest soil. | No | "Nicest" has no measurable meaning. |

## Hypothesis, Law, and Theory

| Term | Meaning | Example |
|---|---|---|
| Hypothesis | A testable prediction for one situation | Warmer water dissolves sugar faster. |
| Law | A description of a pattern that holds consistently, often as a rule or equation; it does not explain why | A gas's pressure doubles when its volume is halved at constant temperature. |
| Theory | A well-supported **explanation** of why things happen, backed by many lines of evidence | Gases are made of moving particles that strike container walls. |

A theory never "graduates" into a law; they do different jobs. A law **describes**, and a theory **explains**.

## The Variables in Every Experiment

| Term | Also called | Role |
|---|---|---|
| Independent variable | Manipulated variable | The factor the researcher deliberately changes |
| Dependent variable | Responding or measured variable | The result that is measured |
| Controlled variables | Constants | Factors kept the same in every trial so they cannot explain differences |
| Control group | Baseline | A trial with no treatment (or the standard condition) used for comparison |

**ACT shortcut:** In a table, the independent variable is usually the first column or the x-axis, and the dependent variable is the column or axis that shows the results.
      `
    },
    {
      id: 'act-s1-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Name every variable in a study</b></summary>

**Study:** A student released identical toy cars from heights of 10 cm, 20 cm, 30 cm, and 40 cm on the same ramp. Each car rolled off the ramp onto the same strip of carpet. She ran three trials at each height and recorded the average distance each car rolled across the carpet.

**Question:** Identify the independent variable, the dependent variable, and two controlled variables.

**Solution:**
1. **What did she change on purpose?** The release height. That is the **independent variable**.
2. **What did she measure?** The distance rolled across the carpet. That is the **dependent variable**.
3. **What stayed the same?** The type of car and the carpet surface (also the ramp). Those are **controlled variables**. Because every car rolled on the same carpet, the carpet cannot explain why some cars went farther.
4. **What is NOT a controlled variable?** Anything the passage never mentions, such as the humidity in the room. You cannot assume it was held constant.

**Answer:** Independent = release height; dependent = distance rolled; controlled = car type and carpet surface. ✓
</details>

<details>
<summary><b>Example 2: Classify the statements in a lab report</b></summary>

**Report excerpt:**
1. "Our bean plants on the windowsill leaned toward the glass."
2. "If a plant receives light from only one side, its stem will bend toward that side."
3. "Five of the six plants lit from the left bent left by 10° to 25°."
4. "Light from one direction caused the stems to bend toward it."

**Question:** Which statement is the hypothesis, and which is the conclusion?

**Solution:**
1. Statement 1 is something noticed before any test: an **observation**.
2. Statement 2 is an "if... then" prediction that a test could prove wrong: the **hypothesis**.
3. Statement 3 reports measured results: **data**.
4. Statement 4 interprets the data: the **conclusion**.

**Answer:** Hypothesis = statement 2; conclusion = statement 4. ✓

**Skill:** Data are numbers and measurements; a conclusion says what those numbers mean.
</details>
      `
    },
    {
      id: 'act-s1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice: Steps, Statements, and Hypotheses** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `A gardener notices that tomatoes planted beside a brick wall ripen earlier than tomatoes in the middle of the yard. She wonders whether heat stored in the bricks speeds ripening. According to the scientific method, what should she do next?`,
            options: [
              `Declare that warm bricks make all fruit ripen faster`,
              `Propose a testable hypothesis about bricks and ripening`,
              `Analyze the ripening data from her two garden plots`,
              `Report her single observation as a law of plant growth`
            ],
            correctAnswer: 1,
            explanation: `She has an observation and a question, so the next step is a hypothesis that an experiment can test. A conclusion about all fruit skips the experiment entirely, and she has collected no data yet, so there is nothing to analyze. One observation in one garden is not a law, which must describe a pattern confirmed many times.`
          },
          {
            question: `Which of the following is a testable and falsifiable hypothesis?`,
            options: [
              `Crickets chirp more often on warmer nights than on cooler nights`,
              `Crickets enjoy chirping more when the evening weather is pleasant`,
              `Crickets may or may not change their chirping in some situations`,
              `Crickets chirp in the most beautiful way when the moon is full`
            ],
            correctAnswer: 0,
            explanation: `Chirps per minute and temperature can both be measured, and finding fewer chirps on warmer nights would disprove the claim. Enjoyment and beauty cannot be measured, so no result could contradict those statements. A claim that crickets "may or may not" change fits every possible outcome, so it can never be shown false.`
          },
          {
            question: `A student's report on magnets includes the four statements below. Which statement is the conclusion?`,
            options: [
              `"My fridge magnet seemed weaker after it fell on the floor."`,
              `"If a magnet is dropped more times, it will lift fewer paper clips."`,
              `"Magnet strength dropped as the number of drops increased."`,
              `"After 0, 10, and 20 drops, the magnet lifted 24, 19, and 15 clips."`
            ],
            correctAnswer: 2,
            explanation: `The statement that strength dropped as the number of drops increased interprets the results, which is what a conclusion does. The remark about the fridge magnet is an observation made before the study. The "if... then" sentence is a prediction made before testing, so it is the hypothesis, and the clip counts are the raw data the conclusion is based on.`
          },
          {
            question: `Scientists have measured for centuries that the force between two charged objects becomes one-fourth as strong when the distance between them doubles. This rule describes what happens but does not explain why. The rule is best classified as a:`,
            options: [
              `theory, because it is an explanation of why charges interact`,
              `hypothesis, since it is a prediction made for a single test`,
              `law, because it describes a consistent measured pattern`,
              `theory that has been proven, since it holds in every trial`
            ],
            correctAnswer: 2,
            explanation: `A rule that describes a pattern confirmed over and over, without explaining its cause, is a law. A theory is an explanation, and the passage says the rule gives no explanation. It has been tested far beyond a single prediction, so it is not a hypothesis, and theories never become laws by being proven; the two terms do different jobs.`
          }
        ]
      }
    },
    {
      id: 'act-s1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Variables** 🔍

> A class tested whether the amount of baking soda affects how high a homemade foam rises. Each group used the same bottle, 100 mL of the same vinegar, and the same room. Groups added 0 g, 5 g, 10 g, or 15 g of baking soda and measured the foam height in centimeters. The 0 g bottle was included for comparison.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Mass of baking soda added',
            options: ['Independent variable', 'Dependent variable', 'Controlled variable', 'Control group']
          },
          {
            label: 'Foam height in centimeters',
            options: ['Independent variable', 'Dependent variable', 'Controlled variable', 'Control group']
          },
          {
            label: 'Volume of vinegar (100 mL)',
            options: ['Independent variable', 'Dependent variable', 'Controlled variable', 'Control group']
          },
          {
            label: 'The bottle with 0 g of baking soda',
            options: ['Independent variable', 'Dependent variable', 'Controlled variable', 'Control group']
          }
        ],
        correctAnswers: ['Independent variable', 'Dependent variable', 'Controlled variable', 'Control group'],
        hint1: 'Which factor did the groups change on purpose?',
        hint2: 'Which value was measured as the result?',
        hint3: 'One trial got none of the treatment and exists only for comparison.',
        explanation: 'The class changed the baking soda mass (independent) and measured foam height (dependent). The vinegar volume was kept the same in every bottle (controlled). The 0 g bottle received no treatment and serves as the baseline (control group).'
      }
    },
    {
      id: 'act-s1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Practice: Variables, Controls, and the Cycle of Science** 📋

> **Study 1:** A student grew radish seedlings in four trays. Every tray held the same potting soil, received 50 mL of water per day, and sat under the same lamp. Each tray was watered with a different salt concentration: 0 g/L, 2 g/L, 4 g/L, or 6 g/L. After 10 days she measured the average seedling height in each tray.
      `,
      exercise: {
        questions: [
          {
            question: `In Study 1, what is the dependent variable?`,
            options: [
              `The salt concentration of the water`,
              `The volume of water given each day`,
              `The average height of the seedlings in each tray`,
              `The type of potting soil in each tray`
            ],
            correctAnswer: 2,
            explanation: `Seedling height is what the student measured at the end, so it is the dependent variable. The salt concentration is the factor she changed on purpose, which makes it the independent variable. The daily water volume and the potting soil were the same in every tray, so they are controlled variables.`
          },
          {
            question: `Why did the student give every tray the same soil, the same water volume, and the same lamp?`,
            options: [
              `So those factors could not explain differences in height`,
              `So the seedlings would all grow to exactly the same height`,
              `So that salt could be ruled out as a cause of any change`,
              `So the trays would need less of her time to look after`
            ],
            correctAnswer: 0,
            explanation: `Holding soil, water, and light constant means that any difference in height can be traced to salt concentration, the one factor that changed. The goal is not identical heights; the study expects salt to change them. Keeping the other factors fixed makes salt easier to identify as the cause, not to rule out, and convenience is not the scientific reason.`
          },
          {
            question: `What is the purpose of the 0 g/L tray in Study 1?`,
            options: [
              `It adds a fifth salt concentration to the test`,
              `It provides a baseline to compare salted trays with`,
              `It replaces the need to measure seedling height`,
              `It shows how much water seedlings need daily`
            ],
            correctAnswer: 1,
            explanation: `The 0 g/L tray receives no salt, so it is the control group: it shows how seedlings grow without the treatment, and the other trays are compared with it. It is one of the four trays, not an additional fifth one. Its seedlings still had to be measured, and every tray got the same 50 mL, so it reveals nothing about water needs.`
          },
          {
            question: `After finishing Study 1, the student writes, "Next I will test whether the same salt levels affect bean seedlings." This plan best shows that the scientific method:`,
            options: [
              `has failed, since Study 1 did not answer every question`,
              `requires each new study to use a different species`,
              `is iterative: one study's results lead to new questions`,
              `is complete once a single result has been recorded`
            ],
            correctAnswer: 2,
            explanation: `Her result raised a new question about a different plant, and a new question leads to a new experiment, which is what makes the method iterative. Raising new questions is a normal outcome, not a sign that Study 1 failed, and science is never finished after one recorded result. Nothing requires changing species each time; she chose to because she wants to know whether the result applies more widely.`
          }
        ]
      }
    },
    {
      id: 'act-s1-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

On the real section you have about **one minute per question**, so naming the variables should take seconds.

> A student wanted to know whether the temperature of a rubber band affects how far it stretches. She cooled four identical rubber bands to 5°C, 15°C, 25°C, and 35°C, hung the same 200 g mass from each, and measured the stretched length.

**Question:** Which factor was held constant so that it could not explain differences in stretched length?

<details>
<summary><b>Show answer</b></summary>

**The mass hung from each rubber band (200 g).** Temperature is the independent variable (she changed it), and stretched length is the dependent variable (she measured it). The bands were also identical, which is a second controlled variable. The air pressure in the room is never mentioned, so you cannot claim it was controlled.
</details>
      `
    },
    {
      id: 'act-s1-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- ACT Science (Enhanced ACT) is **optional**, has **40 questions in 40 minutes** with **4 choices**, and is **not** in the composite.
- The method runs observation → question → hypothesis → experiment → analysis → conclusion, and it is **iterative**.
- A hypothesis must be **testable** and **falsifiable**; vague words ("happier," "may or may not") fail.
- A **law describes** a consistent pattern; a **theory explains** why. Neither turns into the other.
- **Independent** = changed on purpose; **dependent** = measured; **controlled** = kept the same; **control group** = baseline for comparison.
- Data are measurements; a conclusion says what the measurements mean.
      `
    }
  ]
}
