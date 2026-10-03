export const actScienceExpPart2Data = {
  topicSlug: 'act-science-experiments-act',
  sections: [
    {
      id: 'act-s2-intro',
      type: 'text' as const,
      content: `
# 🧪 Variables & Controls

**Part 2 of 7 — Fair Tests, Confounding Variables, Sample Size, Replication & Bias**

Part 1 named the pieces of an experiment. This part is about whether those pieces were put together **fairly**. Research Summaries questions often ask "Which change would improve the experiment?" or "Why can't the student conclude…?" The answer is almost always one of the design principles below.

## Principle 1: Change one variable at a time

If two things change between trials, you cannot tell which one caused the difference. A variable that changes along with the IV is called a **confounding variable**.

| Trial | String length | Bob mass | Period |
|---|---|---|---|
| 1 | 0.5 m | 100 g | 1.4 s |
| 2 | 1.0 m | 200 g | 2.0 s |

The period was longer in Trial 2, but **both** the string length and the bob mass changed. The longer period could come from either one (or both). The fix: keep the mass at 100 g in both trials and change only the length.

**How confounds hide in passages:** look for differences in time of day, day of the week, location, equipment, or the people involved. "Rock music on Monday morning, classical music on Friday evening" changes the music *and* the time.

## Principle 2: Hold everything else constant

Constants are what make the comparison fair. When the ACT asks why a researcher kept something the same, the answer is nearly always: **so that any difference in the DV can be attributed to the IV**.

## Principle 3: Compare against a control

A control group (untreated, placebo, or standard condition) shows what happens without the treatment. Without it, a change might have happened anyway.

- **Blinding:** in a *single-blind* study the participants do not know whether they got the treatment or the placebo. In a *double-blind* study neither the participants nor the people measuring the results know. Blinding prevents expectations from shaping the results.
- **Random assignment:** placing subjects into groups by chance (for example, by drawing names) keeps the groups similar in every way except the treatment.

## Principle 4: Use enough subjects and repeat trials

| Idea | What it means | Why it helps |
|---|---|---|
| **Sample size** | How many subjects or samples are in each group | One or two unusual subjects cannot swing the average of a large group |
| **Repeated trials** | Running each condition several times and averaging | Random measurement error partly cancels out |
| **Replication** | Another lab (or the same lab later) repeats the whole experiment with the same procedure | Confirms the result was not a one-time fluke |

Two teams that get the same average difference are **not** equally trustworthy if one tested 8 people and the other tested 400. The larger sample deserves more confidence.

Replication means repeating the **same** test on the **same** kind of material. Testing a different material, changing the procedure, or measuring a different property is a new experiment, not a replication.

## Principle 5: Watch for bias

| Bias | Example | Fix |
|---|---|---|
| **Sampling (selection) bias** | Surveying only students at a 6 a.m. practice to estimate how much all students sleep | Choose subjects at random from the whole population |
| **Measurement bias** | Using a scale that reads 2 g too high, or a different scale for each sample | Calibrate the instrument and use the same one throughout |
| **Observer bias** | A researcher who knows which plants were treated judges "leaf health" by eye | Blind the observer or use an objective measurement |

## The ACT "improve the experiment" checklist

When a question asks which change would most improve a study, check in this order:

1. Did more than one thing change? → hold the extra variable constant.
2. Is there no baseline? → add a control (or placebo) group.
3. Only one trial or a tiny sample? → repeat trials or test more subjects.
4. Is the sample unrepresentative? → sample randomly from the whole population.
5. Could the measurement be inconsistent or biased? → use one calibrated instrument and blind the observer.

Wrong choices usually **add a new variable** ("also test a third music genre on Wednesday"), **change the DV** ("measure accuracy instead of speed"), or **make the conditions more different** ("play the rock music louder"). None of these fixes the original flaw.
      `
    },
    {
      id: 'act-s2-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Find the confound and fix it</b></summary>

**Study:** A student wants to know whether music genre affects typing speed. She types for 5 minutes with rock music on Monday morning and 5 minutes with classical music on Friday evening, one trial each.

**Solution:**
1. Variables that differ between the two sessions: genre (intended IV), day, and time of day → **confounds**.
2. Only one trial per genre → no way to tell a real difference from a lucky or unlucky session.
3. **Best fix:** test both genres at the same time of day, several times each, and compare the averages.

**ACT skill:** The best improvement removes the extra variable *and* adds repetition; a choice that does only one of these is weaker if the other option exists.
</details>

<details>
<summary><b>Example 2: Which result is more reliable?</b></summary>

**Study:** Lab A tests a new hand lotion on 6 volunteers and finds skin moisture rises by 12%. Lab B uses the same procedure on 300 volunteers and finds a 4% rise.

**Solution:** Lab B's result is more reliable. With only 6 people, one or two unusual volunteers can push the average far from the true effect. A large sample averages out individual differences, so 4% is the better estimate. A bigger effect in a smaller study does not make that study more convincing.
</details>
      `
    },
    {
      id: 'act-s2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice Set A — Spot the Flaw** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `To test whether string length affects a pendulum's period, a student timed a 0.5 m pendulum with a 100 g bob and a 1.0 m pendulum with a 200 g bob. The second period was longer. Why can't she conclude that the longer string caused it?`,
            options: [
              `She measured the period instead of the length`,
              `The bob mass was the same in both of her trials`,
              `The string length and the bob mass both changed`,
              `The string length was her dependent variable`
            ],
            correctAnswer: 2,
            explanation: `Changing the length and the mass together creates a confound, so either one could explain the longer period. Measuring the period is correct because it is the dependent variable. The bob mass doubled rather than staying the same, and the string length was the variable she chose, which makes it the independent variable.`
          },
          {
            question: `Students placed 10 g ice cubes on aluminum, glass, wood, and plastic plates in a room kept at 22 °C and timed how long each cube took to melt. Why did they use the same room and the same size of ice cube for every plate?`,
            options: [
              `So a difference in melting time could be traced to the plate`,
              `So the plate material could be measured as the dependent variable`,
              `So the melting time would come out identical for all four plates`,
              `So the room temperature could serve as the experiment's control group`
            ],
            correctAnswer: 0,
            explanation: `Holding the room temperature and ice mass constant means the only difference among the trials is the plate, so a difference in melting time points to the material. The plate material was chosen, which makes it the IV, not something measured. Constants do not force identical results; they make the comparison fair. Room temperature is a constant variable, not a group of trials.`
          },
          {
            question: `A laboratory reports that a new alloy melts at 1,420 °C. Which action by a second laboratory is a replication of this result?`,
            options: [
              `Testing a different alloy under the same conditions`,
              `Raising the furnace temperature in every new trial`,
              `Measuring the alloy's density instead`,
              `Repeating the melting test on another sample of the alloy`
            ],
            correctAnswer: 3,
            explanation: `Replication repeats the same procedure on the same material to see whether the result holds, so the second lab should melt another sample of this alloy. A different alloy answers a different question. Changing the furnace temperature from trial to trial alters the procedure, and measuring density checks another property entirely.`
          },
          {
            question: `Team 1 tested a cold remedy on 8 people and Team 2 tested it on 400 people, using the same procedure. Both found that colds were 1 day shorter on average. Which statement is best?`,
            options: [
              `Team 1's result is more reliable since small groups are easier to control`,
              `Team 2's result is more reliable as a large sample limits chance effects`,
              `The results are equally reliable because both found the same 1-day drop`,
              `Neither result is reliable because neither team measured cold symptoms`
            ],
            correctAnswer: 1,
            explanation: `With 400 people, a few unusual cases barely move the average, so Team 2's result deserves more confidence. In a group of 8, chance differences between people could easily produce a 1-day gap, so smallness is a weakness. Matching averages do not make the results equally trustworthy, and the length of a cold is a measurement of the symptoms.`
          }
        ]
      }
    },
    {
      id: 'act-s2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Flaw to the Fix** 🔧
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Two variables changed between trials → …',
            options: ['hold the extra variable constant', 'add a placebo group', 'test more subjects', 'blind the observer']
          },
          {
            label: 'Only 5 subjects per group → …',
            options: ['hold the extra variable constant', 'add a placebo group', 'test more subjects', 'blind the observer']
          },
          {
            label: 'Patients might improve because they expect to → …',
            options: ['hold the extra variable constant', 'add a placebo group', 'test more subjects', 'blind the observer']
          },
          {
            label: 'The researcher judges leaf health by eye and knows which plants were treated → …',
            options: ['hold the extra variable constant', 'add a placebo group', 'test more subjects', 'blind the observer']
          }
        ],
        correctAnswers: ['hold the extra variable constant', 'test more subjects', 'add a placebo group', 'blind the observer'],
        hint1: 'A confound is removed by keeping it the same.',
        hint2: 'Small samples are fixed by making them larger.',
        hint3: 'Expectation effects need a look-alike treatment; judging bias needs an observer who does not know the groups.',
        explanation: 'Confound → hold it constant. Small sample → more subjects. Expectation effects → placebo group. Observer bias → blind the person doing the judging.'
      }
    },
    {
      id: 'act-s2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Practice Set B — Improve the Experiment** 📋
      `,
      exercise: {
        questions: [
          {
            question: `A student typed for 5 minutes with rock music on a Monday morning and 5 minutes with classical music on a Friday evening, one trial each, to see whether music affects typing speed. Which change would most improve the experiment?`,
            options: [
              `Add a third genre, tested once on Wednesday afternoon`,
              `Measure typing accuracy instead of typing speed`,
              `Test both genres at one time of day, several times each`,
              `Play the rock music louder to make the gap clearer`
            ],
            correctAnswer: 2,
            explanation: `The design changed the time and day along with the music and ran each condition once, so holding the time constant and repeating the trials fixes both problems. A third genre on yet another day adds another uncontrolled difference. Switching to accuracy changes the DV without fixing the design, and louder rock music adds a second difference between the conditions.`
          },
          {
            question: `To estimate the average mass of eggs from a farm, a student weighs 3 eggs chosen at random. Which change would most increase the reliability of her estimate?`,
            options: [
              `Weighing only the 3 largest eggs`,
              `Weighing 100 randomly chosen eggs`,
              `Weighing the same 3 eggs on two days`,
              `Using a different scale for each egg`
            ],
            correctAnswer: 1,
            explanation: `A larger random sample makes the average more reliable because unusual eggs have less influence. Picking only the largest eggs biases the estimate upward. Reweighing the same 3 eggs checks the scale but leaves the sample just as small, and switching scales adds measurement inconsistency.`
          },
          {
            question: `In a study of a plant spray, the researcher who rated each plant's leaf health on a 1-to-10 scale knew which plants had been sprayed. Which kind of problem does this create?`,
            options: [
              `Sampling bias`,
              `A confounding variable`,
              `Observer bias`,
              `A missing control`
            ],
            correctAnswer: 2,
            explanation: `A rater who knows which plants were treated may, without meaning to, score them higher; that is observer bias, fixed by blinding the rater. Sampling bias concerns how subjects are chosen, not how they are judged. Nothing else changed along with the spray, so there is no confound, and the unsprayed plants already give a control.`
          },
          {
            question: `A nutrition study let volunteers choose whether to join the group taking a fiber supplement or the group taking nothing. Volunteers who chose the supplement were already more likely to exercise. What is the best fix?`,
            options: [
              `Assign volunteers to groups at random`,
              `Give the supplement group a larger dose`,
              `Let volunteers switch groups halfway`,
              `Measure exercise instead of digestion`
            ],
            correctAnswer: 0,
            explanation: `When people choose their own group, the groups can differ in ways like exercise habits, which confound the result; random assignment spreads those habits evenly across both groups. A larger dose does not make the groups comparable. Switching groups midway mixes the conditions, and measuring exercise changes the question instead of fixing it.`
          }
        ]
      }
    },
    {
      id: 'act-s2-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

**Mini-passage:** A student tested whether a new brand of battery lasts longer than an old brand. She ran the new battery in a flashlight with an LED bulb and the old battery in a flashlight with an incandescent bulb, once each. The new battery lasted 31 hours and the old one lasted 9 hours.

1. What confounds the comparison?
2. What two changes would make the test fair and reliable?

<details>
<summary><b>Answers</b></summary>

1. The bulb type changed along with the battery brand. LED bulbs use less power, so the bulb alone could explain the longer time.
2. Use identical flashlights and bulbs for both brands, and test several batteries of each brand, comparing the averages.
</details>

**ACT Tip:** If a "Why can't the student conclude…" question appears, list every difference between the conditions. The answer is the difference that is *not* the IV.
      `
    },
    {
      id: 'act-s2-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- Change only one variable at a time; anything that changes along with the IV is a **confounding variable**.
- Constants exist so that a change in the DV can be attributed to the IV.
- **Placebo groups**, **blinding**, and **random assignment** keep expectations and pre-existing differences out of the results.
- Larger samples and repeated trials make averages more reliable; **replication** repeats the same procedure on the same material.
- The best "improve the experiment" answer fixes the original flaw; it does not add a new variable or switch the DV.
      `
    }
  ]
}
