export const satCrossTextConnectionsPart6Data = {
  topicSlug: 'sat-cross-text-connections',
  sections: [
    {
      id: 'ctc6-intro',
      type: 'text' as const,
      content: `# Cross-Text Traps

**Part 6 of 7 — Why Wrong Choices Look Right**

Cross-text wrong answers come from a short list of patterns. Most of them use the right **topic** and get the **relationship** wrong.

| Trap | What it does | How to catch it |
|---|---|---|
| **Too strong** | Turns Text 2's doubt into total rejection, or its "some" into "all" | Did Text 2 really deny the claim, or only limit it? |
| **Full agreement** | Ignores where Text 2 parts ways | Find Text 2's "but," "however," "cautions" |
| **Wrong direction** | Applies Text 1's view when the stem asks for Text 2's (or the reverse) | Underline who is responding in the stem |
| **Swapped authors** | Gives one author's view to the other | Check each claim against its own text |
| **Wrong point of contact** | Responds to something Text 1 never said | Reread the exact target named in the stem |
| **True but not responsive** | States a fact from Text 2 that doesn't answer the question | Ask: is this a *response to the target*? |
| **Invented recommendation** | Has an author urge a policy no text proposes | Look for "should" in the texts themselves |

### The Most Dangerous Pair

The hardest questions usually come down to two choices:

> A) By arguing that the study's results are **false**
> B) By suggesting that the study's results **may not apply** to every case

If Text 2 says the results hold "only for" some people, or "may" have another explanation, B is right. Total rejection needs total rejection in the text, and SAT authors rarely go that far.

### Direction Drill

| Stem | Whose view do you apply? | To what? |
|---|---|---|
| "How would the author of Text 2 respond to Text 1's claim?" | Text 2's | Text 1's claim |
| "How would [the scholar in Text 1] respond to the finding in Text 2?" | Text 1's | Text 2's finding |
| "What would the author of Text 1 most likely say about [X in Text 2]?" | Text 1's | X |`,
    },
    {
      id: 'ctc6-quiz',
      type: 'multiple-choice' as const,
      content: '**Practice: Spot the Trap** 🎯',
      exercise: {
        questions: [
          {
            question: `Text 1: Because octopuses can solve puzzles and open jars, researcher Clara Mendes argues that they are among the most intelligent invertebrates.

Text 2: Biologist Ethan Rourke cautions that puzzle-solving in the laboratory may reflect the animals' curiosity and dexterity as much as their reasoning. He does not deny that octopuses are clever; he argues that tests designed for mammals may not measure what researchers think they measure.

Based on the texts, how would Rourke (Text 2) most likely respond to Mendes's argument in Text 1?`,
            options: [
              `By insisting that octopuses are not intelligent and cannot actually solve puzzles`,
              `By agreeing that puzzle-solving tests prove octopuses are smarter than mammals`,
              `By arguing that octopuses should no longer be studied in laboratory settings`,
              `By questioning whether the puzzle evidence she cites measures intelligence as she assumes`,
            ],
            correctAnswer: 3,
            explanation: `Rourke doubts that puzzle-solving measures reasoning rather than curiosity and dexterity, so he questions the evidence behind Mendes's argument. He explicitly does not deny that octopuses are clever (too strong), he doubts the tests rather than treating them as proof, and he never says laboratory research should stop.`,
          },
          {
            question: `Text 1: Economist Nora Feld argues that tariffs on imported steel protect domestic jobs. When imports become more expensive, she notes, buyers turn to steel made at home, and steel mills hire more workers.

Text 2: Studies of past steel tariffs found that while steel mills did add some jobs, companies that use steel, such as automakers and appliance makers, paid more for it and cut more jobs than the mills added.

Based on the texts, how would the author of Text 2 most likely respond to Feld's argument in Text 1?`,
            options: [
              `By granting that tariffs can add mill jobs but arguing that they cost more jobs elsewhere`,
              `By agreeing that tariffs increase total employment by encouraging buyers to choose domestic steel`,
              `By arguing that tariffs on imported steel cause steel mills to lay off their workers`,
              `By claiming that automakers stopped buying steel once tariffs made imports more expensive`,
            ],
            correctAnswer: 0,
            explanation: `Text 2 accepts that mills "did add some jobs" but finds that steel-using companies cut more jobs than the mills added. Agreeing that total employment rises contradicts that finding. The mills hired rather than laid off workers, and the automakers paid more for steel rather than stopping their purchases.`,
          },
          {
            question: `Text 1: The Great Wall of China is often said to be visible from space with the naked eye. The claim appears in many textbooks and travel guides.

Text 2: Astronauts who have orbited Earth report that the wall is very hard, if not impossible, to see without aid from low orbit. Though thousands of kilometers long, it is only a few meters wide and similar in color to the land around it. Highways and airports, by contrast, are often visible.

Based on the texts, how would the author of Text 2 most likely respond to the claim in Text 1?`,
            options: [
              `By agreeing that the wall is easy to see because it is thousands of kilometers long`,
              `By disputing it, since the wall is too narrow and drab to see easily from orbit`,
              `By arguing that textbooks should stop describing the wall's history and construction`,
              `By pointing out that highways and airports are larger than the Great Wall of China`,
            ],
            correctAnswer: 1,
            explanation: `Text 2 reports that the wall is very hard to see because it is narrow and blends in, which disputes the naked-eye claim. Its length is mentioned, but width is what matters, so the agreement choice fails. The wall's history is outside the text, and Text 2 says highways are often visible, not that they are larger than the wall (a true-but-not-responsive distraction).`,
          },
        ],
      },
    },
    {
      id: 'ctc6-text2',
      type: 'text' as const,
      content: `## Worked Example: A Trap Gallery

> **Text 1:** Many teachers believe that students learn best when lessons match their personal "learning style," such as visual or auditory.
>
> **Text 2:** In controlled studies, students taught in their preferred style did no better than students taught in other styles. Psychologist Harold Pashler and his colleagues concluded that there is little evidence to support matching instruction to learning styles, though students do have genuine preferences about how they learn.

**Question:** Based on the texts, how would Pashler most likely respond to the belief in Text 1?

| Choice | Label |
|---|---|
| By noting that although students have preferences, matching lessons to them has not been shown to improve learning | ✅ Correct: accepts preferences, rejects the benefit of matching |
| By claiming that students have no real preferences about how they learn | ❌ Too strong: Text 2 says preferences are "genuine" |
| By agreeing that visual learners learn best from visual lessons | ❌ Full agreement: contradicts the controlled studies |
| By arguing that teachers should stop using visual materials in class | ❌ Invented recommendation |
| By pointing out that the studies were controlled | ❌ True but not responsive: a fact about Text 2, not a response |

**Notice:** The correct choice keeps Text 2's careful balance (preferences are real; matching doesn't help). Wrong choices break the balance in one direction or the other.`,
    },
    {
      id: 'ctc6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Practice: Close Calls** 🎯',
      exercise: {
        questions: [
          {
            question: `Text 1: Historian Martin Weiss argues that the diet of ordinary people in medieval Europe was dull and meager, consisting mostly of bread and a thin vegetable stew.

Text 2: Records from the kitchens of several fourteenth-century English manors show that laborers who worked the harvest were fed meat, fish, cheese, and ale. Historian Jane Hardy cautions, however, that harvest workers were fed generously to keep them working and may not represent what peasants ate the rest of the year.

Based on the texts, how would Hardy (Text 2) most likely respond to Weiss's argument in Text 1?`,
            options: [
              `By arguing that the manor records disprove it, since the laborers there ate meat and fish`,
              `By suggesting that the manor records alone may not be enough to overturn it`,
              `By agreeing that ordinary people ate only bread and stew during the harvest season`,
              `By claiming that English peasants ate better than peasants elsewhere in Europe`,
            ],
            correctAnswer: 1,
            explanation: `Hardy warns that the generous harvest meals may not reflect everyday eating, so she would hesitate to use the records against Weiss's view. Saying the records disprove it is exactly the overreach she cautions against. The records show meat and fish at harvest, not only bread and stew, and no comparison with other countries is made.`,
          },
          {
            question: `Text 1: Many gardeners water their plants a little every day, believing that frequent watering keeps roots healthy.

Text 2: Horticulturist Leah Brooks recommends watering deeply but less often. Frequent shallow watering, she explains, keeps moisture near the surface, so roots stay shallow and plants wilt quickly in hot weather. Deep watering encourages roots to grow down toward cooler, moister soil.

Based on the texts, how would Brooks (Text 2) most likely respond to the gardeners' belief in Text 1?`,
            options: [
              `By noting that roots grow toward cooler soil that lies far below the surface`,
              `By agreeing that frequent watering is the best way to keep plants' roots healthy`,
              `By claiming that plants need less water in hot weather than in cool weather`,
              `By arguing that daily shallow watering can leave plants' roots shallow and vulnerable to heat`,
            ],
            correctAnswer: 3,
            explanation: `Brooks says frequent shallow watering keeps roots near the surface, where plants wilt quickly, which directly answers the belief that daily watering keeps roots healthy. The note about cooler soil is a detail from Text 2 that does not respond to the belief. Agreeing contradicts her advice, and she says plants wilt in heat, not that they need less water then.`,
          },
          {
            question: `Text 1: Philosopher Ruth Kaplan argues that zoos can no longer be justified. Even well-designed enclosures, she writes, cannot give animals the range and choices they would have in the wild.

Text 2: Conservation biologist Tariq Hale points out that several species, including the California condor, survived only because zoos bred them in captivity and released their offspring. For such species, he argues, the alternative to a zoo was not the wild but extinction.

Based on the texts, how would Hale (Text 2) most likely respond to Kaplan's argument in Text 1?`,
            options: [
              `By arguing that, for some species, comparing zoos with the wild overlooks the real alternative`,
              `By agreeing that enclosures cannot match life in the wild and that zoos should therefore close`,
              `By claiming that zoo enclosures now give animals more range and choice than the wild does`,
              `By suggesting that the California condor no longer needs to be bred in captivity by zoos`,
            ],
            correctAnswer: 0,
            explanation: `Kaplan compares zoo life with life in the wild; Hale says that for species like the condor the real choice was zoo or extinction. He does not endorse closing zoos, he never claims enclosures beat the wild, and nothing in Text 2 says captive breeding of condors is no longer needed.`,
          },
        ],
      },
    },
    {
      id: 'ctc6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Trap Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'If Text 2 only qualifies Text 1, a choice saying Text 2 "completely rejects" Text 1 is [too strong|correct|too weak|irrelevant]',
          'A choice that repeats a fact from Text 2 without answering the question is [true but not responsive|the best answer|always correct|a shared premise]',
          'When the stem asks how the author of Text 1 would respond, apply [Text 1\'s view to Text 2|Text 2\'s view to Text 1|both views to a new topic|neither view]',
          'A response to a claim Text 1 never makes has [the wrong point of contact|the right point of contact|the best evidence|a modest scope]',
        ],
        correctAnswers: ['too strong', 'true but not responsive', 'Text 1\'s view to Text 2', 'the wrong point of contact'],
        hint1: 'Qualify ≠ reject.',
        hint2: 'A true statement can still fail to answer the question.',
        hint3: 'Who is responding, and to what?',
        explanation: 'Total rejection overstates a qualification. True-but-not-responsive choices state facts without answering the question. Reverse stems apply Text 1\'s view. Responding to an unmade claim misses the point of contact.',
      },
    },
    {
      id: 'ctc6-summary',
      type: 'text' as const,
      content: `## Part 6 Summary

| Trap | Quick test |
|---|---|
| Too strong | Did Text 2 deny, or only limit? |
| Full agreement | Where is Text 2's "but"? |
| Wrong direction | Who is responding in the stem? |
| Swapped authors | Check each claim against its own text |
| Wrong point of contact | Is it the target the stem names? |
| True but not responsive | Is it an answer, or just a fact? |
| Invented recommendation | Did any author say "should"? |

*Next: Mixed Practice and Test Strategy →*`,
    },
  ],
}
