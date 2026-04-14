export const actEnglishGrammarPart3Data = {
  topicSlug: 'act-english-grammar-act',
  sections: [
    {
      id: 'act-eg3-intro',
      type: 'text' as const,
      content: `
# ⏳ Verb Tense Consistency

**Part 3 of 7 — Tense Shifts, Perfect Tenses & Sequence of Events**

The ACT tests whether you can keep verb tenses **consistent** within a sentence and across a passage. Unnecessary tense shifts are one of the most common errors tested.

| Tense | Example | When to Use |
|-------|---------|-------------|
| Simple present | *She walks* | Habitual actions, general truths |
| Simple past | *She walked* | Completed past actions |
| Present perfect | *She has walked* | Past action with present relevance |
| Past perfect | *She had walked* | Action completed before another past action |
| Future | *She will walk* | Actions that haven't happened yet |

**The Golden Rule:** Don't shift tenses unless there's a reason (a time change, a shift from general truth to specific event, etc.).
      `
    },
    {
      id: 'act-eg3-shifts',
      type: 'text' as const,
      content: `
## Unnecessary Tense Shifts

A tense shift is an error when the time frame hasn't changed but the verb tense does.

**Example 1 — Unnecessary Shift:**
- ❌ *She opened the door and **sees** a package on the porch.*
- ✅ *She opened the door and **saw** a package on the porch.*
- Both actions happened in the past — keep both verbs in past tense.

**Example 2 — Shift in a Paragraph:**
- ❌ *The explorers traveled for weeks. They **cross** rivers and **climb** mountains.*
- ✅ *The explorers traveled for weeks. They **crossed** rivers and **climbed** mountains.*

**Example 3 — Acceptable Shift (general truth):**
- ✅ *Galileo proved that the Earth **revolves** around the Sun.*
- Present tense is correct for the second verb because it states a permanent truth.

**ACT Tip:** Read the surrounding sentences to determine the established tense. If the passage is in past tense, an underlined verb in present tense is almost certainly the error.
      `
    },
    {
      id: 'act-eg3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Tense Consistency — Spot the Shift** 🔍
      `,
      exercise: {
        questions: [
          {
            question: '"The author wrote the novel in 1954 and dedicates it to her mother." What is the error?',
            options: ['"wrote" should be "writes"', '"dedicates" should be "dedicated"', 'No error', '"her" should be "their"'],
            correctAnswer: 1,
            explanation: 'The sentence describes past events (1954), so both verbs should be past tense. "Dedicates" should be "dedicated."'
          },
          {
            question: '"Every morning, Marcus jogs through the park, ate breakfast, and reads the news." Identify the tense error.',
            options: ['"jogs" should be "jogged"', '"ate" should be "eats"', '"reads" should be "read"', 'No error'],
            correctAnswer: 1,
            explanation: 'The sentence describes a daily routine (present tense). "Ate" is past tense and should be "eats" to match "jogs" and "reads."'
          }
        ]
      }
    },
    {
      id: 'act-eg3-perfect',
      type: 'text' as const,
      content: `
## Perfect Tenses & Sequence of Events

**Present perfect** (*has/have + past participle*) connects a past action to the present:
- ✅ *I **have lived** here for ten years.* (started in the past, still true now)

**Past perfect** (*had + past participle*) shows that one past action happened **before** another:
- ✅ *By the time the ambulance arrived, the patient **had already recovered**.*
- The recovering happened **first**, then the ambulance arrived.

**Common ACT Pattern — "By the time" / "Before":**
- ❌ *Before the concert started, the band **already tuned** their instruments.*
- ✅ *Before the concert started, the band **had already tuned** their instruments.*
- The tuning happened before the starting → use past perfect for the earlier event.

**ACT Tip:** Whenever you see "before," "by the time," or "after" in a sentence with two past events, check whether the earlier event uses past perfect (*had + verb*).
      `
    },
    {
      id: 'act-eg3-input1',
      type: 'input-boxes' as const,
      content: `
**Choose the Correct Tense** ✏️

1) "By the time we arrived, the movie _____ (started / had started)." — Type the correct form.

2) "She _____ (has worked / worked) at the company since 2018." — Type the correct form.

3) "Yesterday, he _____ (walks / walked) to school." — Type the correct form.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['had started', 'has worked', 'walked'],
        hint1: 'The movie starting happened BEFORE "we arrived" — which tense shows an earlier past action?',
        hint2: '"Since 2018" means the action started in the past and continues — which tense connects past to present?',
        hint3: '"Yesterday" signals a completed past action.',
        explanation: '1) "Had started" — past perfect for the earlier of two past events. 2) "Has worked" — present perfect for an action that began in the past and continues. 3) "Walked" — simple past for a completed action.'
      }
    },
    {
      id: 'act-eg3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Tense ID — Quick Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The past perfect tense is formed with …',
            options: ['has + past participle', 'had + past participle', 'will + base verb', 'was + present participle']
          },
          {
            label: 'An unnecessary tense shift means the writer changed tense without …',
            options: ['using a comma', 'a change in time frame', 'adding a subject', 'starting a new paragraph']
          },
          {
            label: '"The scientist has discovered a new element." This is in the … tense.',
            options: ['simple past', 'present perfect', 'past perfect', 'simple present']
          }
        ],
        correctAnswers: ['had + past participle', 'a change in time frame', 'present perfect'],
        hint1: 'Past perfect = one step further back than simple past.',
        hint2: 'Tense shifts are only valid when time actually changes.',
        hint3: '"Has discovered" = has + past participle.',
        explanation: 'Past perfect uses "had." Tense shifts need a time-frame change to be valid. "Has discovered" is present perfect (has + past participle).'
      }
    },
    {
      id: 'act-eg3-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Practice** 📋
      `,
      exercise: {
        questions: [
          {
            question: '"After the team wins the championship, the fans rushed onto the field." Which revision fixes the tense error?',
            options: ['Change "wins" to "won"', 'Change "rushed" to "rush"', 'Change "rushed" to "had rushed"', 'No change needed'],
            correctAnswer: 0,
            explanation: '"Rushed" is past tense, so the other verb should also be past tense: "won." The sentence describes a completed event.'
          },
          {
            question: '"The students have completed the assignment before the bell rang." What is wrong?',
            options: ['Nothing — the sentence is correct', '"have completed" should be "had completed"', '"rang" should be "rings"', '"completed" should be "completing"'],
            correctAnswer: 1,
            explanation: 'Two past events: completing happened before the bell rang. The earlier event needs past perfect: "had completed."'
          }
        ]
      }
    }
  ]
};
