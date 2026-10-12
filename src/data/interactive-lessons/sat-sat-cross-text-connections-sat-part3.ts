export const satCrossTextConnectionsPart3Data = {
  topicSlug: 'sat-cross-text-connections',
  sections: [
    {
      id: 'ctc3-intro',
      type: 'text' as const,
      content: `# How Would Text 2 Respond to Text 1?

**Part 3 of 7 — The Most Common Cross-Text Question**

"Based on the texts, how would the author of Text 2 most likely respond to [something] in Text 1?" is the stem you will see most often.

### Four Steps

1. **Pin down the target.** The stem names something specific in Text 1: a claim, a finding, a recommendation, a line of reasoning. Reread just that part.
2. **Find what Text 2 says about it.** Text 2 may never mention Text 1 directly. Ask: *what in Text 2 bears on this target?*
3. **Predict with a formula:**

> **[Agree / Disagree / Qualify]** + **[with exactly what]** + **[because of what in Text 2]**
>
> *Qualify: accepts that practice helps memory, but doubts it must be nightly, because Reyes found spaced practice worked equally well.*

4. **Match.** The right choice says the same thing in different words.

### What Right Answers Look Like

Correct responses are usually **measured**:
- "By accepting X but questioning whether Y"
- "By noting that the evidence in Text 1 may have another explanation"
- "By suggesting that the conclusion is premature / holds only for..."

### What Wrong Answers Look Like

| Wrong choice | Why it's tempting | Why it fails |
|---|---|---|
| Total rejection ("X is false") | Text 2 does disagree | Text 2 usually disagrees with *part* of Text 1 |
| Full agreement | Text 2 shares some facts | Ignores where Text 2 parts ways |
| A response to something Text 1 never said | Uses the right topic words | Wrong target |
| A recommendation | Sounds like a sensible next step | Text 2 never proposes it |

### The Reverse Direction

Some stems flip it: "How would **[the person in Text 1]** most likely respond to [the finding in Text 2]?" Now you apply **Text 1's** view to Text 2. Same steps, opposite direction. Read the stem carefully.`,
    },
    {
      id: 'ctc3-quiz',
      type: 'multiple-choice' as const,
      content: '**Practice: Predict the Response** 🎯',
      exercise: {
        questions: [
          {
            question: `Text 1: Many people believe that reading on screens harms comprehension. A 2018 review of studies found that readers understood informational texts slightly better on paper than on screens, especially when they were under time pressure.

Text 2: Educational researcher Lucia Ferrante found that the screen disadvantage disappeared when students were taught to slow down and take notes while reading digitally. The problem, she argues, lies less in the screen itself than in the hurried way people tend to read on it.

Based on the texts, how would Ferrante (Text 2) most likely respond to the findings in Text 1?`,
            options: [
              `By rejecting the findings because the review did not include any informational texts`,
              `By arguing that screens improve comprehension for readers who are under time pressure`,
              `By accepting the gap but tracing it to how people tend to read on screens, not to the screens`,
              `By agreeing that screens themselves make it harder for people to understand what they read`,
            ],
            correctAnswer: 2,
            explanation: `Ferrante does not deny the gap; she shows it disappeared when students read more carefully, so she attributes it to reading habits rather than to the screen. The review did study informational texts. Screens are never said to improve comprehension under time pressure, and agreeing that screens themselves cause the problem contradicts her argument.`,
          },
          {
            question: `Text 1: Planting trees is often promoted as a simple way to slow climate change, since growing trees absorb carbon dioxide from the air. Some companies now promise to plant a tree for every product a customer buys.

Text 2: Ecologist Ravi Menon warns that planting projects often fail. In one survey of large campaigns, fewer than half of the seedlings were alive five years later, often because they were planted in unsuitable soil or never watered. A planted tree, he notes, absorbs carbon only if it survives.

Based on the texts, how would Menon (Text 2) most likely respond to the companies described in Text 1?`,
            options: [
              `By arguing that the companies' promises mean little unless the trees they plant survive`,
              `By claiming that trees absorb far less carbon dioxide from the air than people believe`,
              `By urging the companies to plant several trees for every product sold instead of just one`,
              `By praising the companies for helping to slow climate change through tree planting`,
            ],
            correctAnswer: 0,
            explanation: `Menon's point is that planting counts only if the tree survives, and many planted seedlings die, so a promise to plant is not the same as a promise of carbon removal. He never says trees absorb less carbon than believed, he proposes no larger planting quota, and his warning is the opposite of praise.`,
          },
          {
            question: `Text 1: Historian Elena Petrov argues that the Silk Road is better understood as a web of short local routes than as a single highway. Few merchants, she notes, traveled its full length; goods passed from trader to trader, each covering only a small stretch.

Text 2: Records of a ninth-century merchant named Rashid show that he traveled from Baghdad to the edge of China and back, a journey of several years. Such accounts are sometimes cited as proof that long-distance travel along the Silk Road was common.

Based on the texts, how would Petrov (Text 1) most likely respond to the claim in the last sentence of Text 2?`,
            options: [
              `By agreeing that Rashid's journey shows that most merchants traveled the full route`,
              `By arguing that Rashid's records must be forged because no merchant ever traveled that far`,
              `By claiming that the Silk Road was in fact a single highway used by most merchants`,
              `By noting that one merchant's long journey does not show such journeys were typical`,
            ],
            correctAnswer: 3,
            explanation: `Petrov says "few" merchants traveled the full length, which allows for some who did, so she would answer that one long journey does not make such journeys common. Agreeing that most merchants traveled the whole route contradicts her. She never says no one made the trip, and the single-highway view is the one she rejects.`,
          },
        ],
      },
    },
    {
      id: 'ctc3-text2',
      type: 'text' as const,
      content: `## Worked Example: The Response Formula

> **Text 1:** Studies of lottery winners are sometimes cited to show that money cannot buy happiness: a well-known 1978 study found that winners were no happier than other people a year or so after their win.
>
> **Text 2:** More recent studies, using much larger samples, have found that lottery winners report greater satisfaction with their lives than nonwinners do even years later, though their day-to-day moods are no better. Economist Erik Lindahl suggests that money may improve how people evaluate their lives without changing how they feel from moment to moment.

**Question:** How would Lindahl most likely respond to the conclusion drawn from the 1978 study?

| Formula part | Fill in |
|---|---|
| Agree / disagree / qualify? | **Qualify**: he agrees about daily mood but not about life satisfaction |
| With exactly what? | The claim that money "cannot buy happiness" |
| Because of what? | Larger studies show winners rate their lives higher, even though their moods don't change |

**Prediction:** *"That conclusion is too simple: money may not change how people feel day to day, but it can raise how satisfied they are with their lives."*

| Choice | Verdict |
|---|---|
| By arguing that the conclusion overlooks a kind of well-being that money may improve | ✅ |
| By agreeing that money has no effect on any measure of well-being | ❌ Full agreement; ignores life satisfaction |
| By claiming that lottery winners are in better moods every day than nonwinners | ❌ Reverses Text 2 on daily mood |
| By recommending that researchers stop studying lottery winners | ❌ A recommendation no one makes |`,
    },
    {
      id: 'ctc3-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Practice: Measured Responses** 🎯',
      exercise: {
        questions: [
          {
            question: `Text 1: Ornithologists have long assumed that songbirds learn their songs only during a brief period early in life. Once that period closes, the assumption holds, a bird's song stays fixed.

Text 2: Biologist Yuki Tanaka recorded male canaries over several years and found that they added new syllables each breeding season and dropped others. Tanaka notes, however, that canaries may be unusual, since most of the other species she studied sang the same song year after year.

Based on the texts, how would Tanaka (Text 2) most likely respond to the assumption described in Text 1?`,
            options: [
              `By arguing that it is false for most songbird species, since canaries keep changing their songs`,
              `By suggesting that it holds for many species but does not apply to all songbirds`,
              `By agreeing that it applies to canaries as well as to every other species she studied`,
              `By claiming that birds learn songs only from their parents during their first breeding season`,
            ],
            correctAnswer: 1,
            explanation: `Tanaka's canaries break the assumption, but she notes that most other species she studied kept the same song, so she would limit the assumption rather than reject it. Calling it false for most species overgeneralizes from canaries. Canaries are her counterexample, not a case that fits, and learning from parents is never discussed.`,
          },
          {
            question: `Text 1: Some city officials argue that free public transit would draw drivers out of their cars and reduce traffic.

Text 2: When Tallinn, Estonia, made its buses and trams free for residents in 2013, ridership rose. But many of the new riders had previously walked or cycled rather than driven, and car traffic in the city fell only slightly.

Based on the texts, how would the author of Text 2 most likely respond to the officials' argument in Text 1?`,
            options: [
              `By noting that free transit may draw riders who were not driving anyway`,
              `By arguing that free transit caused car traffic in Tallinn to rise after 2013`,
              `By agreeing that free transit is the most effective way to reduce city traffic`,
              `By claiming that ridership in Tallinn fell after the city made its buses free`,
            ],
            correctAnswer: 0,
            explanation: `Text 2 reports that many new riders came from walking and cycling, so traffic fell only slightly; the officials' argument assumes the riders would come from cars. Car traffic fell rather than rose, nothing ranks free transit as most effective, and ridership rose rather than fell.`,
          },
          {
            question: `Text 1: Because many students struggle with fractions, education researcher Paula Brandt recommends delaying fractions until fifth grade, when students' arithmetic skills are stronger.

Text 2: Studies that followed students for several years have found that understanding fractions in the early grades strongly predicts later success in algebra. Researchers in these studies argue that the difficulty of fractions is a reason to introduce the idea early and gradually, using visual models, rather than to postpone it.

Based on the texts, how would the researchers in Text 2 most likely respond to Brandt's recommendation?`,
            options: [
              `By agreeing that fractions should wait until students have mastered arithmetic`,
              `By claiming that most students find fractions easier than whole-number arithmetic`,
              `By arguing that the difficulty of fractions supports an earlier, gradual start`,
              `By suggesting that algebra should be taught before students ever study fractions`,
            ],
            correctAnswer: 2,
            explanation: `Brandt and the researchers agree that fractions are hard but draw opposite conclusions: Brandt would delay them, while the researchers say the difficulty is a reason to begin early and go slowly. Agreeing to delay contradicts Text 2. No one says fractions are easier than whole-number arithmetic, and teaching algebra first reverses the order the researchers describe.`,
          },
        ],
      },
    },
    {
      id: 'ctc3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Response Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'Correct response answers often take the shape [accepts one point but questions another|agrees with everything|rejects everything|changes the topic]',
          'If Text 2 says a finding holds only in some cases, Text 2 would [qualify Text 1\'s broader claim|fully endorse Text 1|ignore Text 1|repeat Text 1]',
          '"How would the person in Text 1 respond to Text 2" asks you to apply [Text 1\'s view|Text 2\'s view|the test writer\'s view|your own view]',
          'Before reading the choices, [predict the response in your own words|reread both texts twice|cross out the longest choice|pick the first choice]',
        ],
        correctAnswers: ['accepts one point but questions another', 'qualify Text 1\'s broader claim', 'Text 1\'s view', 'predict the response in your own words'],
        hint1: 'Measured, not total.',
        hint2: '"Only in some cases" limits a claim.',
        hint3: 'Check which text is doing the responding.',
        explanation: 'Right answers are usually measured: accept one point, question another. "Only in some cases" qualifies a broader claim. In a reverse-direction stem, apply Text 1\'s view. Predict before reading the choices.',
      },
    },
    {
      id: 'ctc3-summary',
      type: 'text' as const,
      content: `## Part 3 Summary

| Step | Rule |
|---|---|
| 1. Target | Reread exactly what the stem names in Text 1 |
| 2. Text 2's view | Find what Text 2 says that bears on it |
| 3. Predict | [Agree / disagree / qualify] + [with what] + [because of what] |
| 4. Match | Right answers are measured; wrong answers are total, off-target, or invented |
| Reverse stems | Apply Text 1's view to Text 2 |

*Next: Agreement Questions →*`,
    },
  ],
}
