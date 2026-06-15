import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Research Summaries (ACT Science).
 * Registry key: 'act-research-summaries' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked passages → interactive practice
 * (multiple-choice + dropdown + input-boxes) → exit quiz.
 * Non-math topic: favors multiple-choice + dropdown concept checks; input-boxes
 * used only for reading exact values off described tables/figures.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'act-research-summaries',
    sections: [
      {
        id: 'rs1-intro',
        type: 'text' as const,
        content: `# 🔬 ACT Science: Research Summaries

**Part 1 of 5 — Anatomy of an Experiment Passage**

---

### Topics in This Part

| Section |
|---------|
| What a Research Summaries Passage Looks Like |
| The Five Building Blocks of an Experiment |
| Independent vs. Dependent Variables |

> 🔑 **Key Concept:** *Research Summaries* is the experiment-heavy passage type on the ACT Science section. Each passage describes one or more student- or scientist-designed experiments, then asks you to interpret the design, read the results, and reason about the methods. You don't need outside science knowledge — every fact you need is in the passage.`,
      },
      {
        id: 'rs1-anatomy',
        type: 'text' as const,
        content: `## What a Research Summaries Passage Looks Like

Of the passages on the ACT Science section, the **Research Summaries** type is the one built around **experiments**. You can recognize it instantly because it is organized into labeled experiments:

> **Experiment 1.** A student filled five identical beakers with 100 mL of water at different starting temperatures (10, 20, 30, 40, and 50 °C). Each beaker received one antacid tablet. The student recorded the time, in seconds, for the tablet to fully dissolve...
>
> **Experiment 2.** The student repeated the procedure, but this time held temperature constant at 30 °C and varied the *surface area* of the tablet (whole, halved, quartered, powdered)...

Compare that to the other two science passage types:

| Passage type | Built around | Tell-tale sign |
|--------------|--------------|----------------|
| Data Representation | graphs & tables | no "Experiment 1/2" headings |
| **Research Summaries** | **experiments** | **"Experiment 1," "Study 2," "Trial 3"** |
| Conflicting Viewpoints | competing hypotheses | "Scientist 1" vs. "Scientist 2" |

> 💡 **Spot it fast:** If you see the words *Experiment*, *Study*, *Trial*, or *Procedure* heading sections of the passage, you're in Research Summaries — the experiment-design questions are coming.`,
      },
      {
        id: 'rs1-identify',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You glance at a Science passage and see it is split into "Experiment 1" and "Experiment 2," each describing a procedure and a results table. Which passage type is this?',
              options: ['Research Summaries', 'Data Representation', 'Conflicting Viewpoints', 'Reading Comprehension'],
              correctAnswer: 0,
              explanation: 'Labeled experiments with procedures and results are the signature of a Research Summaries passage. Data Representation has no experiments; Conflicting Viewpoints pits scientists against each other; Reading Comprehension is a different ACT section entirely.',
            },
            {
              question: 'Which statement about Research Summaries passages is TRUE?',
              options: [
                'You must memorize chemistry and biology facts to answer the questions.',
                'Almost every answer can be found or inferred from the passage itself.',
                'There are never any tables or graphs.',
                'They only appear on the ACT Reading section.',
              ],
              correctAnswer: 1,
              explanation: 'The ACT Science section tests reasoning, not recall. The passage supplies the data and design; your job is to interpret it. Outside knowledge is rarely required, and tables/graphs are common.',
            },
          ],
        },
      },
      {
        id: 'rs1-blocks',
        type: 'text' as const,
        content: `## The Five Building Blocks of an Experiment

Every experiment described in a Research Summaries passage has the same skeleton. Learn to find each piece quickly:

| Block | Question it answers | Example |
|-------|--------------------|---------|
| **Hypothesis / Purpose** | What are they testing? | "to see how temperature affects dissolving time" |
| **Independent variable** | What did they *change*? | starting water temperature |
| **Dependent variable** | What did they *measure*? | dissolving time (seconds) |
| **Controls / Constants** | What stayed the *same*? | beaker size, water volume, one tablet each |
| **Results** | What happened? | warmer water → faster dissolving |

> 🔑 **Key Idea:** The single most important skill in this passage type is telling apart the variable that was **changed** (independent) from the variable that was **measured** (dependent). Almost every "experimental design" question hinges on this distinction.`,
      },
      {
        id: 'rs1-vars-dropdown',
        type: 'dropdown-select' as const,
        content: `**Identify the Variables** 🔽

In **Experiment 1**, a student varies the **starting water temperature** (10–50 °C) and measures the **time for an antacid tablet to dissolve**. Beaker size, water volume, and tablet type are kept identical.`,
        exercise: {
          dropdowns: [
            { label: 'The independent variable (what was changed) is:', options: ['starting water temperature', 'dissolving time', 'beaker size', 'water volume'] },
            { label: 'The dependent variable (what was measured) is:', options: ['dissolving time', 'starting water temperature', 'tablet type', 'beaker size'] },
            { label: 'A controlled constant in this experiment is:', options: ['water volume', 'starting water temperature', 'dissolving time', 'the number of trials'] },
          ],
          correctAnswers: ['starting water temperature', 'dissolving time', 'water volume'],
          hint1: 'The independent variable is the one the experimenter deliberately changes from trial to trial.',
          hint2: 'The dependent variable is the outcome they record — here, how long dissolving takes.',
          hint3: 'A control is anything kept the same so it can\'t muddy the results — water volume (100 mL) was held constant.',
          explanation: 'Temperature is changed (independent), dissolving time is measured (dependent), and water volume is held constant (control). Recognizing these three roles unlocks most design questions.',
        },
      },
      {
        id: 'rs1-why-controls',
        type: 'text' as const,
        content: `## Why Controls Matter

A **control** (or constant) is a variable deliberately held the same across all trials. Controls exist so that the experimenter can be confident the *independent variable* — and nothing else — caused the change in the *dependent variable*.

**Example:** If a student let the water volume change *and* the temperature change at the same time, then a faster dissolving time could be due to either factor. They'd have **confounded** the two variables, and the experiment would prove nothing.

> ⚠️ **Watch for this trap:** A question may ask, "Why did the student use the same beaker size in every trial?" The answer is almost always some version of *"so that beaker size would not affect the results"* — i.e., to isolate the variable being tested.`,
      },
      {
        id: 'rs1-controls-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A student lets BOTH the water temperature and the water volume change from trial to trial. Why is this a flawed design?',
              options: [
                'A change in dissolving time could not be blamed on either factor with confidence — the variables are confounded.',
                'It would make every trial dissolve at exactly the same speed.',
                'It guarantees the tablet will never dissolve.',
                'It turns dissolving time into the independent variable.',
              ],
              correctAnswer: 0,
              explanation: 'When two variables change at once, you cannot tell which one caused the result. The variables are confounded, so the experiment proves nothing about either.',
            },
            {
              question: 'In the antacid study, using one identical tablet in every beaker is an example of:',
              options: ['a control (a held-constant variable)', 'the dependent variable', 'the independent variable', 'extrapolation'],
              correctAnswer: 0,
              explanation: 'The tablet is kept the same in every trial, so it is a control. The variable being changed (temperature) is independent; the measured time is dependent.',
            },
          ],
        },
      },
      {
        id: 'rs1-outro',
        type: 'text' as const,
        content: `You now know the skeleton of every experiment. In Part 2 we'll practice reading the *results* — the tables and graphs that hold the answers.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'act-research-summaries',
    sections: [
      {
        id: 'rs2-intro',
        type: 'text' as const,
        content: `# 🔬 ACT Science: Research Summaries

**Part 2 of 5 — Reading the Data: Tables, Trends & Trials**

---

> 🔑 **The Idea:** Most Research Summaries questions are really *table-reading* questions in disguise. If you can find a row, read a column, and describe a trend, you can answer the majority of them — often without fully understanding the science.`,
      },
      {
        id: 'rs2-table',
        type: 'text' as const,
        content: `## A Worked Results Table

Here are the results a student recorded for **Experiment 1** (antacid tablet, 100 mL water, one tablet per beaker):

| Beaker | Starting temp (°C) | Dissolving time (s) |
|--------|--------------------|--------------------|
| A | 10 | 95 |
| B | 20 | 72 |
| C | 30 | 54 |
| D | 40 | 41 |
| E | 50 | 30 |

**Reading it carefully:**
- Each **row** is one trial (one beaker).
- The **left column** is the independent variable (temperature).
- The **right column** is the dependent variable (time).

**The trend:** as starting temperature **increases**, dissolving time **decreases**. The two variables move in *opposite* directions — that is an **inverse** (negative) relationship.

> 💡 **Trend vocabulary you must own:** *direct/positive* = both go up together; *inverse/negative* = one goes up while the other goes down. Naming the trend is half the battle on the ACT.`,
      },
      {
        id: 'rs2-read-table',
        type: 'input-boxes' as const,
        content: `**Read the Table** 🧮

Use the Experiment 1 results table above (Beakers A–E).

**1)** What was the dissolving time, in seconds, for Beaker C (30 °C)?
**2)** What was the dissolving time, in seconds, for Beaker E (50 °C)?
**3)** How many seconds *faster* did the tablet dissolve at 50 °C than at 10 °C? (Beaker E vs. Beaker A.)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['54', '30', '65'],
          hint1: 'Find the row labeled C / 30 °C and read across to the time column.',
          hint2: 'Find the row labeled E / 50 °C and read across.',
          hint3: 'Beaker A took 95 s and Beaker E took 30 s. The difference is $95 - 30$.',
          explanation: '1) Beaker C = 54 s. 2) Beaker E = 30 s. 3) $95 - 30 = 65$ s faster at the higher temperature.',
        },
      },
      {
        id: 'rs2-trend-bridge',
        type: 'text' as const,
        content: `## Naming the Trend

Reading individual values is step one. Step two is **describing the whole pattern in one sentence** — that's what most ACT questions actually reward. Scan the time column top to bottom: 95 → 72 → 54 → 41 → 30. The values shrink steadily as temperature climbs. Hold that pattern in mind for the next check.`,
      },
      {
        id: 'rs2-trend',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Based on the Experiment 1 table, the relationship between starting temperature and dissolving time is best described as:',
              options: [
                'As temperature increases, dissolving time decreases (inverse).',
                'As temperature increases, dissolving time increases (direct).',
                'Temperature has no effect on dissolving time.',
                'Dissolving time first rises, then falls.',
              ],
              correctAnswer: 0,
              explanation: 'From 10 °C to 50 °C the times fall steadily (95 → 72 → 54 → 41 → 30). One variable rises while the other falls — an inverse relationship.',
            },
            {
              question: 'A 25 °C trial was not run. Based on the data, the dissolving time at 25 °C would most likely be:',
              options: [
                'between 54 s and 72 s',
                'less than 30 s',
                'greater than 95 s',
                'exactly 41 s',
              ],
              correctAnswer: 0,
              explanation: '25 °C lies between Beaker B (20 °C, 72 s) and Beaker C (30 °C, 54 s). Interpolating, the time should fall between those two values: 54–72 s.',
            },
          ],
        },
      },
      {
        id: 'rs2-interp-extrap',
        type: 'text' as const,
        content: `## Interpolation vs. Extrapolation

The ACT loves to ask you to predict values that *weren't tested*:

- **Interpolation** = estimating a value *between* data points you have. (A 25 °C trial, given 20 °C and 30 °C results.) Usually safe and reliable.
- **Extrapolation** = estimating a value *beyond* your data. (A 60 °C trial, when your highest was 50 °C.) Riskier — assume the trend continues *only if the question lets you*.

**Example:** Times fell by roughly 11–23 s for each 10 °C rise (95 → 72 → 54 → 41 → 30). A 60 °C trial would plausibly land **below 30 s** (continuing the downward trend).

> ⚠️ **Trap alert:** When extrapolating, follow the *direction* of the trend. If times are *decreasing*, the next value should be *smaller*, not larger. Students often grab the answer that breaks the pattern.`,
      },
      {
        id: 'rs2-extrap-dropdown',
        type: 'dropdown-select' as const,
        content: `**Predict Beyond the Data** 🔽

The Experiment 1 trend: times were 95, 72, 54, 41, 30 s at 10, 20, 30, 40, 50 °C.`,
        exercise: {
          dropdowns: [
            { label: 'A 60 °C trial would most likely give a time:', options: ['less than 30 s', 'between 41 and 54 s', 'greater than 95 s', 'exactly 30 s'] },
            { label: 'A 5 °C trial would most likely give a time:', options: ['greater than 95 s', 'less than 30 s', 'about 54 s', 'exactly 72 s'] },
            { label: 'Estimating the time at 35 °C (between 30 °C and 40 °C) is an example of:', options: ['interpolation', 'extrapolation', 'a control', 'confounding'] },
          ],
          correctAnswers: ['less than 30 s', 'greater than 95 s', 'interpolation'],
          hint1: 'At 60 °C you are hotter than every trial, so the time should continue falling below the lowest recorded value (30 s).',
          hint2: 'At 5 °C you are colder than every trial, so the time should continue rising above the highest value (95 s).',
          hint3: '35 °C sits between two tested temperatures (30 and 40 °C), so estimating it is interpolation.',
          explanation: 'Follow the trend\'s direction: hotter → faster (under 30 s), colder → slower (over 95 s). Predicting within the tested range is interpolation; predicting outside it is extrapolation.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'act-research-summaries',
    sections: [
      {
        id: 'rs3-intro',
        type: 'text' as const,
        content: `# 🔬 ACT Science: Research Summaries

**Part 3 of 5 — Comparing Experiments & Experimental Design**

---

> 🔑 **Why it matters:** Research Summaries passages almost always contain *two or more* experiments. The hardest, highest-value questions ask you to compare them: *What changed between Experiment 1 and Experiment 2? Why was a second experiment run at all?*`,
      },
      {
        id: 'rs3-compare',
        type: 'text' as const,
        content: `## What Changed Between Experiments?

Recall the antacid study. Here are both experiments side by side:

| | **Experiment 1** | **Experiment 2** |
|---|---|---|
| Independent variable | starting **temperature** (10–50 °C) | tablet **surface area** (whole → powdered) |
| Dependent variable | dissolving time (s) | dissolving time (s) |
| Held constant | tablet form (whole), water (100 mL) | **temperature (30 °C)**, water (100 mL) |

**The logic:** Experiment 1 tested how *temperature* affects dissolving. Experiment 2 changed the question — now testing *surface area* — and to do that fairly, it had to **hold temperature constant** (at 30 °C) so surface area was the only thing varying.

> 💡 **The pattern to memorize:** When the ACT runs a second experiment, it usually (a) changes which variable is the independent one, and (b) converts the *old* independent variable into a *control*. Spotting that swap answers the question instantly.`,
      },
      {
        id: 'rs3-design-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The main difference between Experiment 1 and Experiment 2 is that:',
              options: [
                'Experiment 2 varied surface area instead of temperature.',
                'Experiment 2 measured a completely different outcome.',
                'Experiment 2 used a different liquid than water.',
                'Experiment 2 did not have any controls.',
              ],
              correctAnswer: 0,
              explanation: 'Both experiments measured dissolving time in 100 mL of water. The change was the independent variable: Experiment 1 varied temperature; Experiment 2 varied surface area while holding temperature constant at 30 °C.',
            },
            {
              question: 'Why did the student hold the water temperature constant at 30 °C throughout Experiment 2?',
              options: [
                'So that any change in dissolving time could be attributed to surface area, not temperature.',
                'Because 30 °C is the only temperature antacid tablets dissolve at.',
                'To make Experiment 2 take longer than Experiment 1.',
                'Temperature is the dependent variable in Experiment 2.',
              ],
              correctAnswer: 0,
              explanation: 'Holding temperature constant removes it as a confounding factor, so surface area is the only variable that changes — letting the student isolate its effect on dissolving time.',
            },
          ],
        },
      },
      {
        id: 'rs3-purpose-bridge',
        type: 'text' as const,
        content: `## Every Design Choice Has a Job

Once you can identify the variables, the next skill is explaining *why* each design choice exists. In a well-built experiment, every constant is there to **rule out an alternative explanation**. The next passage introduces a brand-new experiment — try matching each design choice to the job it does.`,
      },
      {
        id: 'rs3-purpose-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Design Choice to Its Purpose** 🔽

A new passage describes **Experiment 3**: a student tests how the **concentration of salt** in water affects how fast sugar dissolves. They prepare beakers at 0%, 5%, 10%, and 15% salt, all at 25 °C, each stirred for exactly 20 seconds.`,
        exercise: {
          dropdowns: [
            { label: 'Stirring each beaker for exactly 20 seconds is meant to:', options: ['keep stirring from affecting the results', 'change the dependent variable', 'make the salt dissolve faster', 'measure the temperature'] },
            { label: 'The independent variable in Experiment 3 is:', options: ['salt concentration', 'water temperature', 'stirring time', 'beaker color'] },
            { label: 'Holding the temperature at 25 °C for every beaker makes temperature a:', options: ['control', 'dependent variable', 'hypothesis', 'result'] },
          ],
          correctAnswers: ['keep stirring from affecting the results', 'salt concentration', 'control'],
          hint1: 'Anything kept identical across trials is there to prevent it from influencing the outcome.',
          hint2: 'The independent variable is the one being deliberately varied — here, the salt percentage.',
          hint3: 'A variable held the same in every trial is a control (constant), not the variable under test.',
          explanation: 'Salt concentration is varied (independent); stirring time and temperature are held constant (controls) so the only thing that can affect dissolving is the salt concentration.',
        },
      },
      {
        id: 'rs3-improve',
        type: 'text' as const,
        content: `## "How Could the Experiment Be Improved?" Questions

Another common question type asks how to make an experiment *more reliable* or *more general*. The strongest answers usually involve:

| Improvement | Why it helps |
|-------------|--------------|
| **More trials / repeats** | reduces the effect of random error; reveals consistency |
| **More values of the independent variable** | fills gaps so trends are clearer |
| **Adding a control group** | gives a baseline to compare against |
| **Testing a wider range** | shows whether the trend holds at extremes |

> ⚠️ **Beware "improvements" that change the question.** "Use a different tablet brand" doesn't make the *temperature* experiment better — it just tests something else. The right answer strengthens the *existing* design, it doesn't replace it.`,
      },
      {
        id: 'rs3-improve-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A student worries that the dissolving times in Experiment 1 might be flukes. Which change would BEST address this concern?',
              options: [
                'Run each temperature three times and average the results.',
                'Switch to a larger beaker for all trials.',
                'Test the tablets in juice instead of water.',
                'Record the time in minutes instead of seconds.',
              ],
              correctAnswer: 0,
              explanation: 'Repeating each trial and averaging reduces the impact of random error and shows whether results are consistent — directly addressing the "fluke" worry. The other options change the experiment or just relabel units.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'act-research-summaries',
    sections: [
      {
        id: 'rs4-intro',
        type: 'text' as const,
        content: `# 🔬 ACT Science: Research Summaries

**Part 4 of 5 — From Hypothesis to Conclusion**

---

> 🔑 **Big Payoff:** The final layer of skill is *reasoning about results*: deciding whether the data support a hypothesis, what conclusion is justified, and what would happen under new conditions. This is where careful test-takers pull ahead.`,
      },
      {
        id: 'rs4-hypothesis',
        type: 'text' as const,
        content: `## Does the Data Support the Hypothesis?

A **hypothesis** is a testable prediction. After an experiment, you compare the *prediction* to the *results*:

- If results match the prediction → the data **support** the hypothesis.
- If results contradict it → the data **do not support** (or "refute") it.

**Example.** A student hypothesizes: *"Tablets dissolve faster in warmer water."*
The Experiment 1 results (95 s at 10 °C down to 30 s at 50 °C) show dissolving time *falling* as temperature *rises* — faster dissolving in warmer water.

> ✅ **Conclusion:** The data **support** the hypothesis. Warmer water did produce faster dissolving across every trial.

> 💡 **The ACT move:** Restate the hypothesis as a trend ("warmer → faster"), then check whether the table shows that exact trend. If it does, the data support it.`,
      },
      {
        id: 'rs4-hyp-dropdown',
        type: 'dropdown-select' as const,
        content: `**Test the Hypotheses** 🔽

Recall Experiment 2: as tablet **surface area increased** (whole → halved → quartered → powdered), dissolving time **decreased** (the powder dissolved fastest).`,
        exercise: {
          dropdowns: [
            { label: 'Hypothesis A: "Greater surface area speeds up dissolving." The Experiment 2 data:', options: ['support this hypothesis', 'refute this hypothesis', 'are unrelated to it', 'cannot be evaluated'] },
            { label: 'Hypothesis B: "Surface area has no effect on dissolving time." The data:', options: ['refute this hypothesis', 'support this hypothesis', 'prove it is partly true', 'are unrelated to it'] },
            { label: 'The relationship between surface area and dissolving time is:', options: ['inverse', 'direct', 'no relationship', 'random'] },
          ],
          correctAnswers: ['support this hypothesis', 'refute this hypothesis', 'inverse'],
          hint1: 'Hypothesis A predicts "more surface area → faster." The data show exactly that, so they back it up.',
          hint2: 'Hypothesis B predicts no effect, but dissolving time clearly changed, so the data contradict it.',
          hint3: 'Surface area went up while dissolving time went down — opposite directions = inverse.',
          explanation: 'More surface area gave faster dissolving, supporting Hypothesis A and refuting the "no effect" Hypothesis B. Because the variables move in opposite directions, the relationship is inverse.',
        },
      },
      {
        id: 'rs4-combine',
        type: 'text' as const,
        content: `## Combining Results From Two Experiments

Some questions force you to use **both** experiments at once. The trick is to pin down each variable's value from the right experiment.

**Setup.** From Experiment 1: at **30 °C**, a *whole* tablet dissolved in **54 s**. From Experiment 2 (run at 30 °C): a *powdered* tablet dissolved in **18 s**.

**Question:** *Which conditions would dissolve a tablet fastest — warm water, large surface area, or both?*

**Reasoning:** Experiment 1 shows warmth helps; Experiment 2 shows surface area helps. Each independently *lowers* dissolving time, so combining a **high temperature** with a **powdered** tablet should be fastest of all — below even the 18 s seen with powder at 30 °C.

> 💡 **Rule of thumb:** If two separate factors each *decrease* an outcome, applying both together usually decreases it even more. The ACT rewards this kind of trend-stacking — just make sure each factor genuinely points the same direction.`,
      },
      {
        id: 'rs4-combine-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Using both experiments, which setup should dissolve a tablet in the SHORTEST time?',
              options: [
                'A powdered tablet in 50 °C water.',
                'A whole tablet in 10 °C water.',
                'A whole tablet in 30 °C water.',
                'A halved tablet in 20 °C water.',
              ],
              correctAnswer: 0,
              explanation: 'High temperature (Experiment 1) and large surface area (Experiment 2) each shorten dissolving time. Combining the hottest water with the most powdered form stacks both effects, giving the fastest dissolve.',
            },
            {
              question: 'A whole tablet at 30 °C took 54 s; a powdered tablet at 30 °C took 18 s. A reasonable conclusion is that, at a fixed temperature, increasing surface area:',
              options: [
                'substantially decreases dissolving time',
                'has no measurable effect',
                'slightly increases dissolving time',
                'only matters above 50 °C',
              ],
              correctAnswer: 0,
              explanation: 'At the same 30 °C, going from whole (54 s) to powdered (18 s) cut the time by two-thirds. Greater surface area substantially decreases dissolving time.',
            },
          ],
        },
      },
      {
        id: 'rs4-cannot',
        type: 'text' as const,
        content: `## "Cannot Be Determined" — A Real Answer

Sometimes the most defensible answer is that the experiment **doesn't tell you**. If a question asks about a variable that was never tested, the correct choice is often *"cannot be determined from the given information."*

**Example:** Neither experiment changed the *type of liquid* — both used plain water. So a question asking how the tablet behaves *in vinegar* **cannot be answered** from this data.

> ⚠️ **Don't over-reach.** A common wrong answer assumes a trend continues into a region or a variable that was never studied. If the passage never tested it, you usually can't conclude it. Trust the data's boundaries.`,
      },
      {
        id: 'rs4-cannot-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Both experiments used 100 mL of plain water. A question asks how a tablet would dissolve in 100 mL of orange juice. The best-supported answer is:',
              options: [
                'It cannot be determined from the given experiments.',
                'It would dissolve in exactly 54 seconds.',
                'It would dissolve twice as fast as in water.',
                'It would never dissolve in juice.',
              ],
              correctAnswer: 0,
              explanation: 'Neither experiment varied the type of liquid — both used water. With no data on juice, the only defensible answer is that it cannot be determined from the given information.',
            },
            {
              question: 'Which conclusion does go BEYOND what the experiments support?',
              options: [
                '"Tablets will dissolve even faster at 70 °C than at 50 °C." (70 °C was never tested.)',
                '"Warmer water dissolved tablets faster in every tested trial."',
                '"A powdered tablet dissolved faster than a whole one at 30 °C."',
                '"Dissolving time was measured in seconds."',
              ],
              correctAnswer: 0,
              explanation: 'The highest temperature tested was 50 °C, so any claim about 70 °C extrapolates beyond the data. The other statements just restate what the trials actually showed.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'act-research-summaries',
    sections: [
      {
        id: 'rs5-intro',
        type: 'text' as const,
        content: `# 🔬 ACT Science: Research Summaries

**Part 5 of 5 — Strategy, Mixed Practice & Mastery Check**

---

You can now (1) spot a Research Summaries passage, (2) read its tables and trends, (3) compare experimental designs, and (4) judge whether data support a conclusion. Let's tie it together with timing strategy and a mastery check.`,
      },
      {
        id: 'rs5-strategy',
        type: 'text' as const,
        content: `## Timing & Attack Strategy

The Science section gives you roughly **5 minutes per passage**, so efficiency matters.

| Step | What to do |
|------|------------|
| 1. **Skim the setup** | Read the intro and experiment headings — find the variables, *not* every detail. |
| 2. **Map the variables** | Jot "IV = ___, DV = ___" for each experiment. |
| 3. **Go to the questions** | Most point you to a specific table, row, or figure — return for details *as needed*. |
| 4. **Name the trend** | Direct or inverse? That answers a surprising number of questions. |
| 5. **Mind the boundaries** | Interpolate confidently; extrapolate carefully; "cannot be determined" is real. |

> 🔑 **Master rule:** Don't fully *understand* the science — *navigate* it. Find the variable, read the trend, respect the data's limits. That's the whole game.`,
      },
      {
        id: 'rs5-quick-ref',
        type: 'text' as const,
        content: `## Quick Reference

| Term | Meaning |
|------|---------|
| Independent variable | what the experimenter **changes** |
| Dependent variable | what the experimenter **measures** |
| Control / constant | what is held the **same** to isolate the effect |
| Direct relationship | both variables move the **same** way |
| Inverse relationship | variables move **opposite** ways |
| Interpolation | estimating **between** data points |
| Extrapolation | estimating **beyond** data points |

> ⚠️ Remember: a second experiment usually swaps the independent variable and turns the old one into a control; and "cannot be determined" is the right answer whenever a variable was never tested.`,
      },
      {
        id: 'rs5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯

A new passage: In **Study 1**, a researcher grows bean plants under four light intensities (low, medium, high, very high), all watered with 50 mL/day, and records growth in cm after 14 days. Results: low = 4 cm, medium = 9 cm, high = 13 cm, very high = 12 cm.`,
        exercise: {
          questions: [
            {
              question: 'The independent variable in Study 1 is:',
              options: ['light intensity', 'plant height after 14 days', 'water amount', 'number of days'],
              correctAnswer: 0,
              explanation: 'Light intensity is the variable deliberately changed across the four groups; plant height is the measured outcome (dependent), and water (50 mL/day) is held constant.',
            },
            {
              question: 'Based on the results, growth increases with light intensity up to a point and then:',
              options: [
                'slightly decreases at very high intensity',
                'keeps rising steadily',
                'drops to zero',
                'stays exactly the same',
              ],
              correctAnswer: 0,
              explanation: 'Growth rises 4 → 9 → 13 cm, then dips to 12 cm at very high intensity — a slight decrease at the highest level, not a continued rise.',
            },
            {
              question: 'Why did the researcher give every plant 50 mL of water per day?',
              options: [
                'To keep water from being a confounding variable',
                'Because beans need exactly 50 mL to survive',
                'To measure the effect of water on growth',
                'Because water is the dependent variable',
              ],
              correctAnswer: 0,
              explanation: 'Holding water constant ensures any difference in growth is due to light intensity (the variable under test), not to differences in watering. Water here is a control, not the dependent variable.',
            },
          ],
        },
      },
      {
        id: 'rs5-read-bridge',
        type: 'text' as const,
        content: `## Back to the Table

You've named the variables and the trend for the bean-plant study. Now pull two exact values straight off the results — the bread-and-butter table-reading that the Science section asks for again and again.`,
      },
      {
        id: 'rs5-read-study',
        type: 'input-boxes' as const,
        content: `**Read the Study** 🧮

Use the Study 1 results: low = 4 cm, medium = 9 cm, high = 13 cm, very high = 12 cm.

**1)** What was the growth, in cm, of the plants under **high** light?
**2)** How many cm *more* did the **high**-light plants grow than the **low**-light plants?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['13', '9'],
          hint1: 'Read the value listed for the "high" light group.',
          hint2: 'High = 13 cm and low = 4 cm. Subtract: $13 - 4$.',
          hint3: 'The difference is high minus low.',
          explanation: '1) High light gave 13 cm. 2) $13 - 4 = 9$ cm more growth than the low-light group.',
        },
      },
      {
        id: 'rs5-final-bridge',
        type: 'text' as const,
        content: `## You're Ready

Spot the passage type, map the variables, name the trend, respect the data's limits. Those four moves answer the overwhelming majority of Research Summaries questions. One last check — three questions covering the whole lesson — and you're done.`,
      },
      {
        id: 'rs5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'How can you quickly recognize a Research Summaries passage?',
              options: [
                'It is organized into labeled experiments (e.g., "Experiment 1," "Study 2").',
                'It always pits "Scientist 1" against "Scientist 2."',
                'It contains no data tables or graphs.',
                'It requires advanced chemistry knowledge to read.',
              ],
              correctAnswer: 0,
              explanation: 'Labeled experiments with procedures and results define the Research Summaries type. Competing scientists signal Conflicting Viewpoints; tables/graphs are common here, and outside knowledge is rarely needed.',
            },
            {
              question: 'In an experiment, the variable the researcher MEASURES (the outcome) is called the:',
              options: ['dependent variable', 'independent variable', 'control', 'hypothesis'],
              correctAnswer: 0,
              explanation: 'The dependent variable is the measured outcome; the independent variable is what is changed; a control is held constant; a hypothesis is the prediction being tested.',
            },
            {
              question: 'A question asks how a tablet would dissolve in vinegar, but both experiments used only water. The best answer is:',
              options: [
                'It cannot be determined from the given information.',
                'It would dissolve faster, because vinegar is acidic.',
                'It would dissolve at exactly the same rate as in water.',
                'It would not dissolve at all.',
              ],
              correctAnswer: 0,
              explanation: 'Neither experiment tested vinegar, so the data give no basis for a conclusion about it. When a variable was never studied, "cannot be determined" is the correct, non-overreaching answer.',
            },
          ],
        },
      },
    ],
  },
]
