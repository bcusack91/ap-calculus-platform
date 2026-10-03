export const actScienceReasonPart3Data = {
  topicSlug: 'act-science-reasoning-act',
  sections: [
    {
      id: 'act-s3-intro',
      type: 'text' as const,
      content: `
# 📊 Drawing Conclusions

**Part 3 of 7 — Trends, Scope, Correlation vs. Causation, and Weighing Explanations**

A correct ACT conclusion says **exactly** what the data show: no more, no less, and in the right direction. Wrong answers usually fail in one of four ways, and this part covers each.

## 1. Describe the Trend Precisely

Read **every** data point, not just the first and last. The ACT uses a small set of trend descriptions:

| Pattern in the data | How the ACT describes it |
|---|---|
| 3, 5, 8, 12 | increases only |
| 12, 8, 5, 3 | decreases only |
| 3, 8, 12, 7 | increases, then decreases (a peak, or maximum) |
| 12, 6, 4, 9 | decreases, then increases (a minimum) |
| 3, 9, 12, 12 | increases, then levels off |
| 7, 3, 9, 5 | no consistent trend |

A data set that rises and then falls is **not** "increases"; checking only the endpoints (3 and 7 above) hides the peak. When you see a peak, note **where** it is: "Of the values tested, Y was greatest at X = 30."

## 2. Stay Within the Scope of the Study

A conclusion may only cover what was actually tested.

| The study tested... | A conclusion that stays in scope | A conclusion that overreaches |
|---|---|---|
| Temperatures from 20°C to 60°C | "Of the temperatures tested, activity peaked at 40°C." | "The enzyme stops working above 70°C." |
| One species of yeast | "This yeast's enzyme was most active at 40°C." | "Enzymes in all living things work best at 40°C." |
| Five tested temperatures | "The highest tested value occurred at 35°C." | "The true optimum is exactly 35°C." |

The last row matters: if the peak was measured at 35°C with neighbors at 30°C and 40°C, the real maximum could sit at 33°C or 37°C. You only know the best **tested** value.

## 3. Correlation Is Not Causation

| Kind of study | What the researcher does | What it can show |
|---|---|---|
| Observational (survey, field record) | Measures variables as they already are | An **association** (correlation) |
| Controlled experiment | Assigns the independent variable and holds other factors constant | A **cause-and-effect** relationship |

If a survey finds that on days when more umbrellas are sold, a city has more traffic accidents, the two counts are **associated**, but the survey does not show that one causes the other. A third factor, rain, could drive both. The cause could even run backward. To test a cause, researchers **randomly assign** subjects to conditions so the groups differ mainly in the factor being tested.

## 4. Watch for Confounding Variables

In a fair experiment, only the independent variable changes. If a second factor changes along with it, that factor is **confounded** with the treatment, and you cannot tell which one produced the result.

> Goldfish fed Food X lived in a tank with a filter; goldfish fed Food Y lived in a tank without a filter. The Food X fish grew more.

Food and filtering changed together, so cleaner water is an alternative explanation. The study cannot conclude that Food X caused the extra growth.

## 5. Weighing Competing Explanations

When a passage gives two explanations, decide which one a new finding favors by comparing the finding with what **each explanation predicts**:

| If the finding... | Then it... |
|---|---|
| matches a prediction only Explanation 1 makes | supports Explanation 1 more than Explanation 2 |
| contradicts a prediction Explanation 2 makes | weakens Explanation 2 |
| fits both predictions equally | does not help choose between them |
| concerns something neither explanation mentions | is irrelevant to both |

Part 6 builds this into a full strategy for Conflicting Viewpoints passages.

**ACT Tip:** Be suspicious of answer choices with **proves, always, all, every,** or **causes** when the study was a survey. Correct conclusions tend to sound measured: "is associated with," "of the values tested," "is consistent with."
      `
    },
    {
      id: 'act-s3-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: A trend with a peak</b></summary>

**Study:** Students counted the oxygen bubbles released per minute by a sprig of pondweed in water at different temperatures.

| Temperature (°C) | 10 | 20 | 30 | 40 | 50 |
|---|---|---|---|---|---|
| Bubbles per minute | 6 | 14 | 22 | 15 | 5 |

**Question:** Which statement best describes the relationship, and what can be said about the best temperature?

**Solution:**
1. **Trace every point:** 6 → 14 → 22 rises; 22 → 15 → 5 falls. The pattern is **increases, then decreases**.
2. **Endpoints trap:** 6 and 5 are nearly equal, so looking only at the ends would wrongly suggest "no change."
3. **Scope:** Of the temperatures tested, bubbling was fastest at **30°C**. The true peak could be anywhere between 20°C and 40°C, so "exactly 30°C" goes too far.

**Answer:** Bubbling increased up to 30°C, then decreased; 30°C was the best **tested** temperature. ✓
</details>

<details>
<summary><b>Example 2: Association versus cause</b></summary>

**Study:** A survey of 300 households found that homes with more houseplants reported fewer colds per person each winter.

**Question:** Which conclusion is best supported?

- A. Houseplants prevent colds by cleaning indoor air.
- B. Catching fewer colds makes people buy more houseplants.
- C. The number of houseplants is associated with the number of colds.
- D. Houseplants and colds are unrelated, because no cause was found.

**Solution:**
1. **Kind of study:** a survey, so it can show an association but not a cause.
2. A claims a cause and adds a mechanism (air cleaning) the survey never measured. B claims the reverse cause, also untested.
3. D contradicts the data: the two counts clearly vary together.
4. A third factor, such as time spent at home or household income, could explain both.

**Answer: C** ✓
</details>
      `
    },
    {
      id: 'act-s3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice: Describe the Trend and Stay in Scope** 🎯

> Researchers warmed or cooled individual lizards of one desert species to set body temperatures and measured each lizard's top sprint speed.

| Body temperature (°C) | 20 | 25 | 30 | 35 | 40 |
|---|---|---|---|---|---|
| Sprint speed (m/s) | 0.8 | 1.4 | 1.9 | 2.1 | 1.2 |
      `,
      exercise: {
        questions: [
          {
            question: `According to the table, as body temperature increased from 20°C to 40°C, sprint speed:`,
            options: [
              `increased only`,
              `decreased only`,
              `decreased, then increased`,
              `increased, then decreased`
            ],
            correctAnswer: 3,
            explanation: `Speed rose from 0.8 m/s to 2.1 m/s at 35°C and then fell to 1.2 m/s at 40°C, so it increased and then decreased. Calling it "increased only" ignores the drop at 40°C, and "decreased only" ignores the rise through 35°C. Decreasing first and then increasing reverses the actual order of the changes.`
          },
          {
            question: `Which conclusion stays within the scope of this study?`,
            options: [
              `All lizard species sprint fastest at a body temperature of 35°C`,
              `Of the temperatures tested, this species sprinted fastest at 35°C`,
              `This species cannot run at all when its body is warmer than 45°C`,
              `Sprint speed rose steadily over the full range of temperatures`
            ],
            correctAnswer: 1,
            explanation: `The fastest measured speed, 2.1 m/s, came at 35°C among the five temperatures tested, so that statement stays inside the data. Only one species was studied, so a claim about all lizards overreaches, and no temperature above 40°C was tested. Speed fell between 35°C and 40°C, so it did not rise steadily.`
          },
          {
            question: `Between which two consecutive tested temperatures did sprint speed change by the greatest amount?`,
            options: [
              `Between 20°C and 25°C`,
              `Between 25°C and 30°C`,
              `Between 30°C and 35°C`,
              `Between 35°C and 40°C`
            ],
            correctAnswer: 3,
            explanation: `From 35°C to 40°C the speed fell by 2.1 − 1.2 = 0.9 m/s, the largest change. From 20°C to 25°C it rose 0.6 m/s, from 25°C to 30°C it rose 0.5 m/s, and from 30°C to 35°C it rose only 0.2 m/s. A drop counts as a change just as a rise does, so the size of the change is what matters.`
          },
          {
            question: `A student concludes that 35°C is the exact body temperature at which this lizard runs fastest. Why is this conclusion NOT fully justified?`,
            options: [
              `The fastest speed could occur at an untested value such as 33°C`,
              `The lizards ran faster at 40°C than at any other temperature tested`,
              `Sprint speed does not depend on body temperature in these lizards`,
              `The study should have measured speed in kilometers per hour instead`
            ],
            correctAnswer: 0,
            explanation: `Only five temperatures were tested, so the true peak could lie between them, at 33°C or 37°C for example; 35°C is just the best tested value. The lizards were slower at 40°C than at 35°C, not faster. The table shows speed clearly changing with temperature, and the units of speed have no effect on where the peak falls.`
          }
        ]
      }
    },
    {
      id: 'act-s3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Conclusion** 🔍

> **Study:** Researchers measured how fast one strain of bacteria multiplied at 25°C, 30°C, and 37°C. Growth was fastest at 37°C.

Classify each claim.
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Of the temperatures tested, this strain grew fastest at 37°C."',
            options: ['Supported, in scope', 'Overreaches: other organisms', 'Overreaches: untested values', 'Contradicts the data']
          },
          {
            label: '"All bacteria grow fastest at 37°C."',
            options: ['Supported, in scope', 'Overreaches: other organisms', 'Overreaches: untested values', 'Contradicts the data']
          },
          {
            label: '"This strain stops growing at 45°C."',
            options: ['Supported, in scope', 'Overreaches: other organisms', 'Overreaches: untested values', 'Contradicts the data']
          },
          {
            label: '"This strain grew most slowly at 37°C."',
            options: ['Supported, in scope', 'Overreaches: other organisms', 'Overreaches: untested values', 'Contradicts the data']
          }
        ],
        correctAnswers: ['Supported, in scope', 'Overreaches: other organisms', 'Overreaches: untested values', 'Contradicts the data'],
        hint1: 'Which claim limits itself to the temperatures and the strain actually studied?',
        hint2: 'Only one strain was studied. What about claims for every kind of bacteria?',
        hint3: '45°C was never tested.',
        explanation: 'The first claim stays inside the tested strain and temperatures. "All bacteria" extends the result to organisms never studied. 45°C lies outside the tested range, so nothing is known there. Growing most slowly at 37°C reverses the result.'
      }
    },
    {
      id: 'act-s3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Practice: Correlation, Confounding, and Competing Explanations** 📋
      `,
      exercise: {
        questions: [
          {
            question: `A survey of 40 cities found that cities with more kilometers of bike lanes had lower rates of heart disease. Which conclusion is best supported by the survey?`,
            options: [
              `Bike lanes lower heart disease by getting people to exercise`,
              `Lower heart disease rates lead cities to build more bike lanes`,
              `Bike lanes and heart disease rates are associated, not shown causal`,
              `Bike lanes and heart disease are unrelated, since no cause was found`
            ],
            correctAnswer: 2,
            explanation: `A survey measures things as they already are, so it can show that the two rates vary together but not that one causes the other; wealthier or younger cities might have both more bike lanes and less heart disease. Claiming that bike lanes lower disease, or the reverse, asserts a cause the survey never tested. The two rates clearly do vary together, so calling them unrelated contradicts the data.`
          },
          {
            question: `A student grew one set of pepper plants with Fertilizer A inside a greenhouse and another set with Fertilizer B in an outdoor garden. The greenhouse plants produced more peppers. Why can't the student conclude that Fertilizer A caused the larger harvest?`,
            options: [
              `Location also differed, so it could explain the result`,
              `Two separate sets of pepper plants were compared`,
              `The plants were measured by their number of peppers`,
              `Both sets of plants were grown during the same season`
            ],
            correctAnswer: 0,
            explanation: `The fertilizer and the growing location changed together, so differences in temperature, light, or pests between the greenhouse and the garden could explain the result. Comparing two sets of plants is normal for testing two treatments, and growing both in the same season is good design. Counting peppers is a reasonable measure of harvest.`
          },
          {
            question: `A researcher found that students who drink more coffee report sleeping fewer hours. Which follow-up study would best test whether coffee causes students to sleep less?`,
            options: [
              `Give the same coffee survey to students at five more colleges`,
              `Compare coffee use and sleep for students living on and off campus`,
              `Have students estimate how much coffee affects their own sleep`,
              `Randomly assign students to coffee or decaf and compare their sleep`
            ],
            correctAnswer: 3,
            explanation: `Random assignment makes the two groups alike except for the caffeine, so a difference in sleep can be traced to coffee rather than to stress or late-night studying. Surveying more colleges, or comparing groups the students sorted themselves into, still only measures an association. Asking students for their own estimate relies on opinion and does not test the cause.`
          },
          {
            question: `Two explanations are given for why many frogs in a pond developed extra legs. Explanation 1: A parasite that burrows into tadpoles disrupts limb growth. Explanation 2: A farm chemical in the runoff disrupts limb growth. Researchers then raised tadpoles in pond water filtered to remove all parasites but not the chemical, and every frog developed normally. This finding:`,
            options: [
              `supports Explanation 2 more than Explanation 1`,
              `supports Explanation 1 more than Explanation 2`,
              `supports both explanations about equally well`,
              `is unrelated to either of the two explanations`
            ],
            correctAnswer: 1,
            explanation: `Removing the parasites while leaving the chemical in place prevented the extra legs, which is what Explanation 1 predicts. If the chemical were the cause, the tadpoles should still have developed extra legs, so the finding weakens Explanation 2. Because the result matches one explanation's prediction and contradicts the other's, it cannot support both equally or be unrelated.`
          }
        ]
      }
    },
    {
      id: 'act-s3-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

> Researchers measured the activity of an enzyme taken from a cave-dwelling fungus at five salt concentrations: 0% salt, 8 units; 2%, 21 units; 4%, 34 units; 6%, 26 units; 8%, 11 units.

**Question:** A student claims, "This enzyme works best at 4% salt in every living thing." Which part of the claim goes beyond the data, and what is the in-scope version?

<details>
<summary><b>Show answer</b></summary>

**"In every living thing" goes beyond the data,** because the enzyme came from one fungus. "Works best at 4%" is also slightly too strong, since salt levels between the tested ones were never measured. The in-scope version is: **"Of the salt concentrations tested, this enzyme's activity was greatest at 4%."** Note also that activity rose to 4% and then fell, so it did not increase steadily across the range, and nothing is known about salt levels above 8%.
</details>
      `
    },
    {
      id: 'act-s3-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- Trace **every** data point: increases only, decreases only, **increases then decreases**, decreases then increases, levels off, or no trend.
- A peak is the best **tested** value; the true maximum may lie between tested values.
- Keep conclusions inside the **tested range**, the **organism or material** studied, and the **conditions** used.
- Surveys and field records show **association**, not cause; random assignment in a controlled experiment can show cause.
- If a second factor changes along with the treatment, it is **confounded** and could explain the result.
- A finding favors the explanation whose **prediction it matches**.
      `
    }
  ]
}
