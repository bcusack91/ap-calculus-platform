export const psychRetrievalPart2Data = {
  topicSlug: 'retrieval-forgetting',
  sections: [
    {
      id: 'retrieval-forgetting-p2-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Retrieval and Forgetting

**Part 2 of 7 — Context, State and Mood**

You walk into the kitchen, forget why you came, and remember the moment you walk back to your desk: the desk was part of the memory all along.

### 📚 The Matching Principle

When you encode something, you do not store it alone. Details of the situation get stored *with* it: the room around you, how your body felt, the mood you were in. Those details become part of the memory's web of associations, so they can later work as retrieval cues (Part 1). Psychologists call this idea **encoding specificity**: a cue helps most when it matches what was present at encoding.

The CED (2.6.A.2) names three kinds of match that can enhance retrieval:

| Effect | What matches between encoding and retrieval | Classic example |
|--------|--------------------------------------------|-----------------|
| **Context-dependent memory** | The **external environment**: the place, room, sights and sounds | Divers remember words better in the setting where they learned them |
| **State-dependent memory** | The **internal physical state**: the body's condition, often altered by a drug such as caffeine or alcohol | Information learned after caffeine is recalled better after caffeine |
| **Mood-congruent memory** | The **emotional state**: the mood you are in | Information learned while happy is recalled better while happy; a sad mood brings sad memories to mind |

A quick sorting rule: **context = outside you, state = your body, mood = your feelings.**

### The Divers Study

The best-known demonstration of context-dependent memory tested members of a university diving club.

- Divers learned lists of unrelated words either **on the shore** or **about 20 feet underwater**.
- They then recalled the words either in the **same** setting or in the **other** setting.
- Recall was clearly better when the learning and recall settings **matched** (land-land, water-water) than when they did not (land-water, water-land).

The design is a **2 × 2 factorial**: two independent variables (where words were learned and where they were recalled), each with two levels, which makes four conditions. The finding that matters is not "land is better" or "water is better" but the **interaction**: the effect of the recall setting depends on the learning setting.

A later study by the same researchers found that switching settings had little effect when memory was tested by **recognition** instead of recall. That fits Part 1: a recognition test supplies its own strong cue (the item itself), so the cues from the environment matter less.

> **AP Connection:** When an AP question describes someone remembering better "back in the same place," the answer is context-dependent memory. Do not choose state-dependent memory unless the scenario describes the person's internal physical condition.
      `
    },
    {
      id: 'retrieval-forgetting-p2-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Marco memorizes his lines for a play after drinking two cups of coffee each night. On opening night he forgets several lines, then remembers them easily at the cast party after a coffee. Which concept BEST explains this pattern?',
            options: [
              'State-dependent memory',
              'Context-dependent memory',
              'Mood-congruent memory',
              'Retroactive interference'
            ],
            correctAnswer: 0,
            explanation: 'Caffeine changes Marco\'s internal physical state, and retrieval improved when that state matched the state he was in during encoding. A change of place would point to context-dependent memory and a change of feelings to mood-congruent memory.'
          },
          {
            question: 'A researcher wants to test whether context-dependent memory occurs for high school students learning vocabulary. Which design would test it MOST directly?',
            options: [
              'Students learn words in either the gym or a classroom, then all are tested in the classroom',
              'Students learn words in the gym or a classroom, then are tested in the same or the other room',
              'Students learn words in a classroom and are tested in that classroom a day or a week later',
              'Students learn words while happy or sad, then are tested in the same or the opposite mood'
            ],
            correctAnswer: 1,
            explanation: 'Context-dependent memory is about the match between learning and testing environments, so the design must vary both and compare matched with mismatched rooms. Testing everyone in the classroom confounds the match with the room itself, varying the delay tests forgetting over time, and varying mood tests mood-congruent memory.'
          }
        ]
      }
    },
    {
      id: 'retrieval-forgetting-p2-s3-worked',
      type: 'text' as const,
      content: `
### 📚 Worked Example: Reading a State-Dependent Study

*Practice study (not a real citation):* Eighty college students were randomly assigned to one of four conditions. On Day 1 they drank either a caffeinated or a decaffeinated coffee (the cups looked and tasted the same, and neither participants nor the experimenters giving the test knew which was which) and studied 24 words. On Day 2 they drank either caffeinated or decaffeinated coffee and wrote down every word they could recall.

| Day 1 (encoding) | Day 2 (retrieval) | Mean words recalled (of 24) |
|------------------|-------------------|-----------------------------|
| Caffeine | Caffeine | 12.1 |
| Caffeine | Decaf | 9.0 |
| Decaf | Caffeine | 9.4 |
| Decaf | Decaf | 12.6 |

**Step 1: Name the variables.** There are two independent variables (state at encoding, state at retrieval). The dependent variable is the number of words correctly written down on Day 2, which is also its operational definition.

**Step 2: Compare matched with mismatched.** Matched conditions average (12.1 + 12.6) / 2 ≈ 12.4 words. Mismatched conditions average (9.0 + 9.4) / 2 = 9.2 words. Matching the physical state raised recall by about 3 words.

**Step 3: Rule out the simpler story.** If caffeine simply improved memory, both caffeine-at-retrieval rows would beat both decaf-at-retrieval rows. They do not: decaf-decaf is the highest cell. The pattern depends on the *match*, which is what state-dependent memory predicts.

**Step 4: Note the controls.** Random assignment spreads differences in sleep, caffeine habits and ability across conditions. The identical cups and the double-blind procedure stop participant expectations and experimenter bias from explaining the results.

### An Important Nuance

State-dependent memory does **not** mean that studying while impaired is a good idea. In studies with alcohol, information learned while intoxicated was recalled somewhat better when intoxicated again than when sober, but people who learned **and** recalled while sober remembered the most of all. Alcohol damages encoding itself. The matching benefit is real but small compared with the cost of poor encoding.

> **AP Connection:** For an AAQ part asking you to "describe what the difference in means indicates," a complete answer names the conditions and direction: "Participants whose physical state matched at encoding and retrieval recalled about 3 more words on average than participants whose states did not match."
      `
    },
    {
      id: 'retrieval-forgetting-p2-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Context, State or Mood?** 🔍

Choose the effect each scenario shows.
      `,
      exercise: {
        dropdowns: [
          { label: 'A nurse who learned a procedure on the night shift recalls the steps most easily when she is tired again late at night', options: ['Context-dependent memory', 'State-dependent memory', 'Mood-congruent memory', 'Retroactive interference'] },
          { label: 'Returning to his childhood street, a man suddenly remembers the names of neighbors he had not thought of in years', options: ['State-dependent memory', 'Mood-congruent memory', 'Retroactive interference', 'Context-dependent memory'] },
          { label: 'After a breakup, a student finds that memories of other disappointments keep coming to mind', options: ['Mood-congruent memory', 'Context-dependent memory', 'State-dependent memory', 'Retroactive interference'] },
          { label: 'A student takes her exam in the same lecture hall where the class met all semester and recalls more than classmates tested in a different building', options: ['Mood-congruent memory', 'Retroactive interference', 'Context-dependent memory', 'State-dependent memory'] }
        ],
        correctAnswers: ['State-dependent memory', 'Context-dependent memory', 'Mood-congruent memory', 'Context-dependent memory'],
        hint1: 'Fatigue is a condition of the body, not of the room.',
        hint2: 'The street is a feature of the external environment.',
        hint3: 'A sad mood makes sad memories easier to retrieve.',
        explanation: 'Being tired again matches an internal physical state (state-dependent). The childhood street and the familiar lecture hall match the external environment (context-dependent). Sadness bringing other sad memories to mind is mood-congruent memory.'
      }
    },
    {
      id: 'retrieval-forgetting-p2-s5-mood',
      type: 'text' as const,
      content: `
### 📚 Mood-Congruent Memory in Depth

The CED describes mood-congruent memory as better retrieval when your mood matches the mood you were in during encoding. Research shows it in two related ways, and on the AP exam both count as mood-congruent memory:

| Pattern | What happens | Example |
|---------|-------------|---------|
| **Mood match** | Material learned in one mood is retrieved better in the same mood | Words studied while cheerful are recalled better when cheerful again |
| **Mood bias** | Your current mood makes memories with the same emotional tone easier to retrieve | In a bad mood, you remember mainly the times your friend let you down |

**Why it matters clinically.** A person who is depressed tends to retrieve negative memories more easily. Those memories deepen the negative mood, which makes more negative memories accessible: a self-maintaining loop. This is one reason therapists help clients deliberately recall positive experiences and check whether a gloomy memory is the whole story.

### Methods Spotlight: Manipulating Mood

Researchers cannot hand out a mood the way they hand out a coffee, so they **induce** it: participants are randomly assigned to watch a sad or happy film clip, listen to music, or recall a past emotional event. Two design issues follow:

- **Manipulation check.** Researchers measure mood after the induction (for example, a 1 to 7 self-rating) to confirm the sad group actually felt sadder. Without it, a null result could simply mean the induction failed.
- **Ethics.** Inducing sadness is a mild risk of harm. Researchers obtain **informed consent**, keep the induction brief and mild, let participants withdraw, and end with a **debriefing** and often a positive-mood activity so no one leaves feeling worse.

### Telling the Three Apart

| Clue in the scenario | Answer |
|---------------------|--------|
| Same room, building, city, background music, smell of the place | Context-dependent memory |
| Caffeine, alcohol or another drug; exercise, fatigue, physical arousal | State-dependent memory |
| Happy, sad, anxious, angry; memories that match a current feeling | Mood-congruent memory |

**Practical use.** You usually cannot take your exam in your bedroom, so lean on the idea in a different way: study in more than one place, at different times, so the memory is tied to many cues instead of one. Mentally picturing the original study setting before a test can also restore some context cues.

> **AP Connection:** Because both external context and internal state can work as retrieval cues, a free-response explanation should name *what* matched (the room, the drug state, the mood) and say that it served as a retrieval cue, not simply that the person "was in the same situation."
      `
    },
    {
      id: 'retrieval-forgetting-p2-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬

*Practice study (not a real citation):* Sixty adults were randomly assigned to watch a happy or a sad film clip, then studied a list of 30 words. Two days later each participant watched a happy or a sad clip again and recalled the words. Participants whose two clips matched in mood recalled more words than participants whose clips did not match.
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept does the study above MOST directly test?',
            options: [
              'Mood-congruent memory',
              'Context-dependent memory',
              'State-dependent memory',
              'Proactive interference'
            ],
            correctAnswer: 0,
            explanation: 'The film clips manipulate emotional state at encoding and at retrieval, and recall was higher when the moods matched. That is mood-congruent memory; the room and the body\'s physical state were not varied.'
          },
          {
            question: 'Why should the researchers have participants rate their mood right after each film clip?',
            options: [
              'To keep participants from guessing the hypothesis of the experiment',
              'To check that the clips actually produced the intended moods',
              'To give each participant an operational definition of recall',
              'To make sure the two groups were equal in mood before the clips'
            ],
            correctAnswer: 1,
            explanation: 'A mood rating after the clip is a manipulation check: it confirms that the independent variable (induced mood) really differed between groups. Random assignment, not a rating, is what equalizes groups beforehand.'
          },
          {
            question: 'Which change to the study would raise the MOST serious ethical concern?',
            options: [
              'Showing a clip of real, graphic violence to make the sad moods as intense as possible',
              'Measuring recall with a free-recall test instead of with a recognition test of the words',
              'Debriefing participants at the end and showing everyone a short, upbeat clip before leaving',
              'Telling participants beforehand that they will see a film clip that may be mildly sad'
            ],
            correctAnswer: 0,
            explanation: 'Graphic real violence risks lasting distress, which violates the guideline to protect participants from harm. Debriefing, a closing upbeat clip and warning participants about mildly sad content are ways of following ethical guidelines, and the test format is not an ethical issue.'
          }
        ]
      }
    }
  ]
}
