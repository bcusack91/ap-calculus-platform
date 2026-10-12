export const satCrossTextConnectionsPart1Data = {
  topicSlug: 'sat-cross-text-connections',
  sections: [
    {
      id: 'ctc1-intro',
      type: 'text' as const,
      content: `# Cross-Text Connections

**Part 1 of 7 — Meet the Paired Texts**

Cross-Text Connections is the third Craft and Structure skill on the digital SAT. Each question gives you **two short texts on the same topic**, labeled **Text 1** and **Text 2**, and asks how they relate. Usually one author makes a claim and the other responds to the same subject from a different angle.

### The Question Stems

| Stem | What it asks |
|---|---|
| "Based on the texts, how would the author of Text 2 most likely respond to [the claim / finding / argument] in Text 1?" | Apply Text 2's view to something specific in Text 1 |
| "Based on the texts, how would [the person in Text 1] most likely respond to [something in Text 2]?" | The reverse direction: apply Text 1's view to Text 2 |
| "Based on the texts, both authors would most likely agree with which statement?" | Find what both would accept |
| "Which choice best describes a difference in how the authors of Text 1 and Text 2 view [X]?" | Name each author's view of the same issue |

### Read Each Text for Its Claim

After **each** text, stop and say one line to yourself:

> **Who** claims **what**, based on **what evidence**?

Then, after Text 2, add one more line: *How does Text 2 treat Text 1's claim?*

### The Relationship Vocabulary

| Text 2... | Means... |
|---|---|
| **agrees / extends** | accepts Text 1's claim and adds to it |
| **rejects** | says Text 1's claim is wrong |
| **qualifies** | accepts part of it, but limits where or when it holds |
| **offers an alternative explanation** | accepts Text 1's facts but explains them differently |
| **questions the evidence or method** | doubts that Text 1's evidence supports its claim |
| **applies it to a new case** | uses Text 1's idea somewhere Text 1 didn't |

Most real SAT pairs are **not** total agreement or total rejection. The most common relationship is a *qualification* or an *alternative explanation*.`,
    },
    {
      id: 'ctc1-quiz',
      type: 'multiple-choice' as const,
      content: '**Warm-Up: Two Texts, One Question** 🎯',
      exercise: {
        questions: [
          {
            question: `Text 1: Many teachers assign homework every night on the theory that daily practice helps students remember what they learned in class. Without regular review, the reasoning goes, lessons fade within days.

Text 2: Psychologist Dana Reyes compared classes that received nightly homework with classes that received the same total amount of practice spread over fewer, longer assignments. Both groups remembered the material equally well a month later, suggesting that the total amount of practice matters more than whether it happens every day.

Based on the texts, how would Reyes (Text 2) most likely respond to the reasoning described in Text 1?`,
            options: [
              `By arguing that homework does nothing to help students remember what they learned in class`,
              `By claiming that longer assignments help students remember far more than nightly ones do`,
              `By agreeing that practice aids memory but doubting that it needs to happen every single night`,
              `By agreeing that nightly homework is the best way to keep lessons from fading within days`,
            ],
            correctAnswer: 2,
            explanation: `Reyes's study found that both groups remembered the material equally well, so she accepts that practice matters while questioning the "every night" part of Text 1's reasoning. Saying homework "does nothing" contradicts her finding that practice works. Longer assignments did not do better, only equally well. Full agreement with nightly homework ignores her conclusion.`,
          },
          {
            question: `Text 1: Urban gardens are often praised for supplying fresh vegetables to neighborhoods that lack grocery stores. But a single garden plot yields only a small fraction of what a family eats, so the gardens' value as a food source is easily overstated.

Text 2: When researchers surveyed people who tended community gardens in three cities, most said the main benefit was not the food but the time spent with neighbors. Many reported knowing far more people on their block than they had before joining.

Based on the texts, both authors would most likely agree with which statement?`,
            options: [
              `The main value of urban gardens may lie in something other than the food they produce.`,
              `Community gardens should be replaced by new grocery stores in most of the neighborhoods that lack them.`,
              `Urban gardens produce enough vegetables to feed the families who tend them.`,
              `People who join community gardens usually already know most of their neighbors.`,
            ],
            correctAnswer: 0,
            explanation: `Text 1 says the gardens' value as a food source is overstated, and Text 2 reports that gardeners see the social benefit as the main one, so both would accept that the gardens' main value may lie elsewhere. Neither text proposes replacing gardens with stores. Text 1 says a plot supplies only a small fraction of a family's food, and Text 2 says members got to know more neighbors after joining.`,
          },
          {
            question: `Text 1: The ancient Maya abandoned many of their great southern cities in the ninth century. Archaeologist Ruth Alvarez argues that a series of severe droughts, recorded in lake sediments from the period, left the cities unable to feed their populations.

Text 2: Drought alone cannot explain the collapse, historian Marco Lin contends. Some cities survived the dry years while nearby ones were abandoned. Lin points instead to warfare between rival kingdoms, which disrupted trade and farming, as the factor that determined which cities endured.

Which choice best describes a difference in how Alvarez and Lin view the abandonment of the Maya cities?`,
            options: [
              `Alvarez doubts that droughts occurred at all, while Lin uses lake sediments to show that they did.`,
              `Alvarez sees drought as the main cause, while Lin says it fails to explain which cities fell.`,
              `Alvarez blames warfare between kingdoms, while Lin blames a series of severe droughts.`,
              `Alvarez argues the cities were never fully abandoned, while Lin argues every city was abandoned.`,
            ],
            correctAnswer: 1,
            explanation: `Alvarez attributes the abandonment to drought, while Lin says drought "alone cannot explain" it because some cities survived the same dry years, and he points to warfare instead. Alvarez is the one who cites the lake sediments. The warfare-versus-drought choice swaps the two scholars. Neither scholar claims the cities were never abandoned or that every city was.`,
          },
        ],
      },
    },
    {
      id: 'ctc1-text2',
      type: 'text' as const,
      content: `## Worked Example: From Two Summaries to an Answer

> **Text 1:** For decades, nutrition guidelines warned that eggs raise blood cholesterol and should be eaten sparingly. The warning rested on a simple chain of reasoning: eggs are rich in cholesterol, so eating them must raise the cholesterol in a person's blood.
>
> **Text 2:** Later studies found that for most people, cholesterol in food has only a modest effect on blood cholesterol, because the liver makes less of its own when more arrives from the diet. Saturated fat, these studies suggest, has a larger effect.

**Question:** Based on the texts, how would the author of Text 2 most likely respond to the reasoning in Text 1?

| Step | Result |
|---|---|
| Summarize Text 1 | Old guidelines: eggs have cholesterol → eggs raise blood cholesterol |
| Summarize Text 2 | For most people, dietary cholesterol matters only modestly (the liver adjusts) |
| Relationship | Text 2 attacks the **link in the chain**, not the fact that eggs contain cholesterol |
| Prediction | *"Eggs do contain cholesterol, but that doesn't mean they raise blood cholesterol much."* |

| Choice | Verdict |
|---|---|
| By pointing out that the reasoning overlooks how the body adjusts its own cholesterol production | ✅ Matches the prediction |
| By denying that eggs contain much cholesterol | ❌ Text 2 never disputes that eggs are rich in cholesterol |
| By agreeing that people should eat eggs sparingly | ❌ Text 2 undercuts the reason for the warning |
| By arguing that saturated fat has no effect on blood cholesterol | ❌ Reverses Text 2, which says saturated fat has a **larger** effect |

**Pattern to remember:** Text 2 usually accepts Text 1's facts and challenges the **step from facts to conclusion**.`,
    },
    {
      id: 'ctc1-quiz2',
      type: 'multiple-choice' as const,
      content: '**Practice: Name the Relationship** 🎯',
      exercise: {
        questions: [
          {
            question: `Text 1: Some economists argue that raising the minimum wage costs jobs. If workers become more expensive, they reason, employers will hire fewer of them.

Text 2: When economists David Card and Alan Krueger compared fast-food restaurants in New Jersey, which raised its minimum wage in 1992, with restaurants in neighboring Pennsylvania, which did not, they found no drop in employment in New Jersey. Their study suggests that the link between higher wages and fewer jobs is not as automatic as often assumed.

Based on the texts, how would Card and Krueger (Text 2) most likely respond to the argument in Text 1?`,
            options: [
              `By agreeing that higher wages always lead employers to hire fewer workers than before`,
              `By arguing that restaurants in Pennsylvania should have raised their wages in 1992`,
              `By claiming that a higher minimum wage always increases the number of jobs available`,
              `By citing evidence that a higher minimum wage need not reduce the number of people employed`,
            ],
            correctAnswer: 3,
            explanation: `Card and Krueger found no drop in employment after New Jersey's increase, so they would point to that evidence to show that higher wages do not automatically cost jobs. They challenge the argument rather than agreeing with it. They make no recommendation for Pennsylvania, and "always increases" overstates a finding of no drop.`,
          },
          {
            question: `Text 1: Many art critics of the nineteenth century dismissed photography as a mechanical process. A camera, they argued, simply records whatever is in front of it and leaves no room for an artist's judgment.

Text 2: Photographer Julia Margaret Cameron deliberately softened the focus of her portraits, chose dim light, and staged scenes with costumes and careful poses. Her images show that a photograph can reflect decisions as personal as any painter's brushwork.

Based on the texts, how would the author of Text 2 most likely respond to the critics discussed in Text 1?`,
            options: [
              `By agreeing that photography leaves little room for an artist's own judgment`,
              `By arguing that Cameron's work shows photography can involve artistic choice`,
              `By claiming that painters in the nineteenth century relied heavily on photographs`,
              `By insisting that a camera records scenes more accurately than any painting can`,
            ],
            correctAnswer: 1,
            explanation: `The critics claim photography leaves no room for judgment, and Text 2 uses Cameron's deliberate choices (focus, light, staging) to show the opposite. Agreeing with the critics contradicts Text 2. Painters' use of photographs is never discussed, and accuracy is the critics' point about recording, not something Text 2 argues.`,
          },
          {
            question: `Text 1: Bilingual signs in national parks are sometimes criticized as clutter. Yet surveys of park visitors show that signs in a visitor's first language are read longer and remembered better than signs in a second language.

Text 2: Park rangers report that visitors who can read posted warnings in their own language are less likely to leave marked trails or approach wildlife. Clear communication, the rangers argue, is a safety measure, not a decoration.

Based on the texts, both authors would most likely agree with which statement?`,
            options: [
              `Most park visitors ignore posted warnings no matter what language they use.`,
              `National parks should remove all signs from trails to protect the scenery.`,
              `Signs in visitors' first languages can do more than add clutter to parks.`,
              `Visitors remember signs in a second language better than signs in their first.`,
            ],
            correctAnswer: 2,
            explanation: `Text 1 defends bilingual signs against the clutter charge with evidence that they are read and remembered, and Text 2 says such signs improve safety, so both see them as doing more than adding clutter. Text 2 says visitors heed warnings in their own language, neither text calls for removing signs, and Text 1 says first-language signs are remembered better, not worse.`,
          },
        ],
      },
    },
    {
      id: 'ctc1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Concept Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'Cross-Text Connections questions present [two short texts on a related topic|one long passage|a poem and a graph|three short texts]',
          'After reading each text, summarize [the author\'s main claim|every detail|the first sentence only|the hardest vocabulary]',
          '"How would the author of Text 2 most likely respond..." asks you to apply [Text 2\'s view to Text 1\'s claim|Text 1\'s view to Text 2\'s claim|your own opinion|the title of each text]',
          'When Text 2 accepts Text 1\'s point but limits where it applies, Text 2 [qualifies Text 1|rejects Text 1|repeats Text 1|ignores Text 1]',
        ],
        correctAnswers: ['two short texts on a related topic', 'the author\'s main claim', 'Text 2\'s view to Text 1\'s claim', 'qualifies Text 1'],
        hint1: 'Two texts, one topic.',
        hint2: 'Who claims what, based on what?',
        hint3: 'Accept + limit = qualify.',
        explanation: 'Each question pairs two short texts on one topic. Summarize each author\'s claim. A Text 2 response question applies Text 2\'s view to Text 1. Accepting a claim while limiting it is a qualification.',
      },
    },
    {
      id: 'ctc1-summary',
      type: 'text' as const,
      content: `## Part 1 Summary

| Idea | Key Rule |
|---|---|
| Format | Text 1 + Text 2 on one topic, one question |
| Four stems | Text 2 responds to Text 1; Text 1 responds to Text 2; both agree; difference |
| Summarize | After each text: who claims what, based on what |
| Relationships | Agree/extend, reject, qualify, alternative explanation, question the evidence, apply to a new case |
| Most common | Text 2 accepts the facts and challenges the conclusion drawn from them |

*Next: Mapping Each Author's Position →*`,
    },
  ],
}
