export const bioFeedbackPart2Data = {
  topicSlug: 'feedback-mechanisms',
  sections: [
    {
      id: 'bio-feedback-mechanisms-p2-s1-intro',
      type: 'text' as const,
      content: `
## Feedback Mechanisms: Negative Feedback in Depth

**Part 2 of 7 — Negative Feedback in Depth**

Part 1 gave you the anatomy of a loop. This part looks closely at the loop type that does most of the work of staying alive: **negative feedback**. The AP framework states the idea directly: organisms use negative feedback to maintain their internal environments by returning a changing condition back to its target set point.

Three features show up in nearly every negative-feedback system:

1. **Antagonistic effectors.** Many variables are controlled by two opposing responses, one for "too high" and one for "too low." Precise control comes from adjusting the balance between them, like using both a gas pedal and a brake.
2. **Oscillation within a range.** Because sensing and responding take time, the variable usually overshoots a little, gets corrected, and overshoots again in a smaller way. On a graph, it wobbles around the set point.
3. **Self-limitation.** As the variable returns to the set point, the stimulus shrinks, so the response winds down by itself.

We will trace these features through three systems the AP exam uses often: temperature in animals, blood glucose, and water loss in plants.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p2-s2-thermo',
      type: 'text' as const,
      content: `
### System 1: Thermoregulation in endotherms

Mammals and birds are **endotherms**: they generate most of their body heat through metabolism and regulate core temperature with physiological responses. The hypothalamus acts as the thermostat.

| Condition | Effectors and responses | How heat balance changes |
|---|---|---|
| **Too warm** | Sweat glands secrete sweat; arterioles in the skin **dilate** (vasodilation); panting in dogs | More heat is lost by evaporation and by blood flowing near the skin surface |
| **Too cold** | Skin arterioles **constrict** (vasoconstriction); skeletal muscles **shiver**; hair or feathers are raised; brown fat burns fuel to release heat | Less heat is lost from the skin and more heat is produced |

Notice the antagonistic pairs: vasodilation versus vasoconstriction, sweating versus shivering. Each response works only in the direction that opposes the change.

### Ectotherms use behavior as the effector

Reptiles, amphibians and most fish are **ectotherms**: their body temperature depends mainly on heat from the environment. They still use negative feedback, but the effector is often **behavior**. A lizard whose body cools moves into the sun; when it warms past its preferred range, it retreats into shade or a burrow. The regulated variable (body temperature) is still pushed back toward a preferred range, so the loop is negative feedback even though no sweating or shivering is involved.

> **AP Connection:** "Ectotherms cannot regulate temperature" is a common wrong answer. They regulate it behaviorally, and their metabolic rate rises and falls with body temperature.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p2-s3-mcq-thermo',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Temperature Control
      `,
      exercise: {
        questions: [
          {
            question: 'A desert lizard spends the early morning on a sunlit rock and the hottest hours of the afternoon under a shrub. Its body temperature stays between 34 °C and 38 °C throughout the day. Which statement best explains this pattern?',
            options: [
              'The lizard is an endotherm that produces heat by shivering on the rock',
              'The lizard\'s behavior acts as an effector in a negative-feedback loop',
              'The lizard\'s temperature matches the air, so it is not being regulated',
              'The lizard is using positive feedback to keep warming through the day'
            ],
            correctAnswer: 1,
            explanation: 'Moving between sun and shade opposes changes in body temperature, keeping it within a preferred range, so behavior is the effector of a negative-feedback loop. A lizard is an ectotherm, and its temperature clearly does not simply track air temperature in the hot afternoon.'
          },
          {
            question: 'A person steps from a warm house into freezing wind. Which pair of responses would the hypothalamus trigger first to reduce heat loss and increase heat production?',
            options: [
              'Vasodilation in the skin and sweating',
              'Vasoconstriction in the skin and shivering',
              'Vasodilation in the skin and shivering',
              'Vasoconstriction in the skin and sweating'
            ],
            correctAnswer: 1,
            explanation: 'Constricting skin arterioles keeps warm blood away from the surface, reducing heat loss, while shivering produces heat. Vasodilation and sweating both increase heat loss, which would push temperature further down.'
          }
        ]
      }
    },
    {
      id: 'bio-feedback-mechanisms-p2-s4-glucose',
      type: 'text' as const,
      content: `
### System 2: Blood glucose — two hormones, one set point

Blood glucose is regulated by an antagonistic pair of hormones from the islets of the pancreas. (The Endocrine System topic covers these hormones in detail; here the focus is the **loop logic**.)

| | Glucose too high (after a meal) | Glucose too low (between meals, overnight) |
|---|---|---|
| Sensor and control center | Beta cells of the pancreatic islets | Alpha cells of the pancreatic islets |
| Signal | **Insulin** | **Glucagon** |
| Main effectors | Liver, skeletal muscle and fat cells | Liver |
| Response | Cells take up glucose; the liver stores it as glycogen | The liver breaks glycogen down and releases glucose |
| Effect on blood glucose | Falls back toward set point | Rises back toward set point |

Two things make this a strong exam example:
- The pancreatic cells are **both sensor and control center**. Not every loop has separate structures for each role.
- When glucose returns to the normal range, the stimulus for insulin release disappears, so insulin secretion falls. That is the self-limiting feature of negative feedback.

### Worked example: tracing the overshoot

A student drinks a sugary drink. Blood glucose climbs from 90 to 135 mg/dL within 30 minutes. Insulin peaks shortly after glucose peaks. By 90 minutes, glucose has dropped to about 80 mg/dL, slightly **below** the starting value. Glucagon release then rises a little, and glucose drifts back up to about 90 mg/dL.

What this shows: the dip below 90 is an **overshoot** caused by the time lag between sensing and responding. The second, smaller correction by glucagon is why the graph wobbles and then settles. That damped wobble is the signature of negative feedback.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p2-s5-input',
      type: 'input-boxes' as const,
      content: `
### Quick Calculation and Recall

In the worked example, glucose rose from 90 mg/dL to 135 mg/dL.

1) By what percentage did blood glucose increase? (number only)

2) Which hormone is released when blood glucose falls below the set point?

3) In what form does the liver store excess glucose?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['50', 'glucagon', 'glycogen'],
        hint1: 'Percent change = (new − old) ÷ old × 100. Here that is (135 − 90) ÷ 90 × 100.',
        hint2: 'It comes from alpha cells and works opposite to insulin.',
        hint3: 'It is a branched polymer of glucose stored in liver and muscle.',
        explanation: '(135 − 90) ÷ 90 × 100 = 50%. Glucagon raises blood glucose when it falls too low, and the liver stores excess glucose as glycogen.'
      }
    },
    {
      id: 'bio-feedback-mechanisms-p2-s6-plants',
      type: 'text' as const,
      content: `
### System 3: Plants under water stress

Plants have no brain, yet they run negative-feedback loops too. The AP framework names **plant responses to water limitation** as an example.

**The loop:**
1. **Stimulus:** soil dries out and water potential in the roots and leaves falls.
2. **Sensing and signal:** cells sense the water deficit and produce the hormone **abscisic acid (ABA)**, which builds up in the leaves.
3. **Effector:** **guard cells**. ABA triggers guard cells to release potassium ions (K⁺); water follows by osmosis, the guard cells lose turgor, and the **stomata close**.
4. **Response:** transpiration slows, so less water is lost from the leaf.
5. **Feedback:** the plant's water balance stops worsening. When water becomes available again, ABA levels fall and the stomata reopen.

**The trade-off:** closed stomata also block carbon dioxide from entering the leaf, so photosynthesis slows. Negative feedback protects the plant from wilting at the cost of growth. This is a good example of why homeostasis is about **balancing** competing needs rather than maximizing any one of them.

| Plant variable | Change | Response | Direction |
|---|---|---|---|
| Leaf water content | Falls | ABA closes stomata, cutting water loss | Opposes the change: negative feedback |
| Leaf water content | Recovers | ABA falls, stomata reopen, gas exchange resumes | Loop winds down by itself |
      `
    },
    {
      id: 'bio-feedback-mechanisms-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
### Exit Check — Negative Feedback Across Systems
      `,
      exercise: {
        questions: [
          {
            question: 'During a drought, a bean plant\'s leaves accumulate abscisic acid (ABA). Which outcome would most directly result?',
            options: [
              'Stomata close as guard cells lose turgor, slowing transpiration',
              'Stomata open wider as guard cells gain water, raising CO₂ uptake',
              'Roots stop absorbing water entirely until the drought has ended',
              'Xylem vessels seal shut so that water can no longer reach leaves'
            ],
            correctAnswer: 0,
            explanation: 'ABA causes guard cells to lose potassium ions and water, so they go limp and the stomata close, slowing water loss. Opening stomata wider would worsen water loss, and ABA acts on guard cells rather than shutting down roots or xylem.'
          },
          {
            question: 'Which feature of the blood-glucose loop shows that it is self-limiting?',
            options: [
              'Insulin release drops once glucose is back to normal',
              'Glucagon secretion rises steadily after every meal',
              'The liver keeps storing glycogen after glucose drops',
              'Insulin and glucagon are released at the same time'
            ],
            correctAnswer: 0,
            explanation: 'When glucose returns to the normal range the stimulus disappears, so insulin release drops and the response winds down. Glucagon rises when glucose is low, not after meals, and storing glycogen after glucose has dropped would push the variable too low.'
          },
          {
            question: 'Why do closed stomata during water stress represent a trade-off for a plant?',
            options: [
              'They raise the rate of photosynthesis but also raise water loss',
              'They conserve water but also limit carbon dioxide entering the leaf',
              'They let oxygen in for respiration but block sunlight from chloroplasts',
              'They lower leaf temperature but also stop ABA from reaching the roots'
            ],
            correctAnswer: 1,
            explanation: 'Stomata are the route for both water vapor leaving and carbon dioxide entering. Closing them saves water but starves the Calvin cycle of CO₂, so growth slows.'
          }
        ]
      }
    }
  ]
};
