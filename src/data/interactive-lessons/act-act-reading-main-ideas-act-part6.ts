export const actReadingMainPart6Data = {
  topicSlug: 'act-reading-main-ideas-act',
  sections: [
    {
      id: 'act-r6-intro',
      type: 'text' as const,
      content: `
# 🔗 Relationships Within a Passage

**Part 6 of 7 — Cause and Effect, Comparison, Sequence, Function, and Point of View**

Many ACT Reading questions ask how the parts of a passage **connect**: what caused what, how two things compare, what happened first, what job a paragraph does, and who is telling the story. These questions reward a reader who tracks structure, not just content.

## 1. Cause and Effect

| Signal | Direction |
|---|---|
| because, since, due to, as a result of | cause comes **after** the signal |
| so, therefore, as a result, consequently, led to, caused | effect comes **after** the signal |

**Traps to watch:**
- **Reversed direction:** the passage says the flood *followed* the dam's failure, and the choice says the flood *caused* the failure.
- **Possible vs. proven:** "researchers suspect" or "may contribute" is not "caused." Match the passage's level of certainty.
- **Wrong cause:** two events are mentioned near each other, but the passage links the effect to a *different* cause.
- **One of several causes:** "not cost alone" means cost was *a* cause, not *the* cause.

## 2. Comparison and Contrast

Signals of **difference**: *unlike, whereas, while, however, in contrast, on the other hand.* Signals of **similarity**: *like, similarly, both, also, likewise.*

When a question asks how two things (two scientists, two eras, two characters) compare, build a quick two-column note:

| | Thing A | Thing B |
|---|---|---|
| Similar | | |
| Different | | |

Wrong answers often switch the traits, giving A's trait to B.

## 3. Sequence

ACT fiction often moves out of order, with flashbacks, memories, and jumps forward. Build a **timeline** from these clues:
- **Past perfect** ("had walked," "had promised") marks an event *earlier* than the main story.
- Phrases like *years earlier, by then, the summer before, since, until, at last.*
- Ages and dates ("at nine," "in 1962").

**Sequence questions:** "Which event happens first chronologically?" The event told first in the passage is often *not* the earliest.

## 4. Function of a Paragraph or Sentence

"The third paragraph primarily serves to..." asks about a part's **job**, not its content. Ask: *How does this part relate to what comes before and after it?*

| Job | What it looks like |
|---|---|
| **Introduce** the topic or claim | Sets up what the rest develops |
| **Provide background** | History or context before the main point |
| **Illustrate** with an example | A specific case of a general claim |
| **Present a counterargument** | "Critics argue..." |
| **Concede** | "Admittedly..." the author grants a point, then continues |
| **Shift / transition** | Moves from one topic, time, or view to another |
| **Explain a cause or result** | Says why or what followed |
| **Conclude / reflect** | Sums up or considers meaning |

Function answers are often phrased abstractly: "to provide a specific example of the hardship described in the previous paragraph." Check **both** parts: is it really an example, and is it really of that hardship?

## 5. Point of View and Narrator

| Point of view | Signs | What to notice |
|---|---|---|
| **First person** | "I," "we" | Only the narrator's thoughts are known directly |
| **First person, looking back** | Adult narrator recalling childhood | Two perspectives: the child's feelings then and the adult's understanding now |
| **Third person limited** | "she," "he," one character's thoughts | We see through one character only |
| **Third person omniscient** | Thoughts of several characters | The narrator knows more than any character |

In nonfiction, point of view means the author's **position**: an expert explaining, an advocate arguing, an insider recalling, an outsider observing. A passage that says "When I joined the lab in 2010..." comes from an insider's perspective.

**ACT Tip:** When a question asks about a narrator looking back, check whether it wants the *younger* self's feeling at the time or the *older* narrator's view now. Phrases like "I didn't understand then" or "Only later did I realize" mark the difference.
      `
    },
    {
      id: 'act-r6-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Sequence and point of view in a flashback</b></summary>

**Passage:**

> I found the compass in a shoebox the week we sold my father's house. He had carried it across three continents before I was born, and when I was ten he had taught me to use it on a muddy trail behind our school, patiently, while I complained about my wet socks. I didn't understand then why he cared so much that I learn. Holding it now, with its needle still trembling north, I think he was giving me a way to find my way back.

**Question 1:** Which event happens first chronologically?

- A. The narrator finds the compass in a shoebox.
- B. The father teaches the narrator to use the compass.
- C. The father carries the compass across three continents.
- D. The family sells the father's house.

**Question 2:** The narrator's point of view is best described as that of:

- A. an adult reflecting on a childhood memory with new understanding.
- B. a ten-year-old describing a hike as it happens.
- C. an outside observer reporting a father's travels.
- D. the father explaining why he taught his child.

**Solution:**
1. **Timeline:** "before I was born" puts the travels earliest; the lesson at age ten comes next; finding the compass and selling the house happen in the present. **Q1: C** ✓
2. **Point of view:** "I didn't understand then" and "Holding it now" show an adult looking back and understanding more than the child did. **Q2: A** ✓
</details>

<details>
<summary><b>Example 2: The function of a paragraph</b></summary>

**Passage (summarized by paragraph):**
- **P1:** Many cities have repealed parking minimums, rules requiring new buildings to include a set number of parking spaces.
- **P2:** Supporters of the change say the rules raised the cost of housing because each space adds to construction costs.
- **P3:** Critics warn that without the rules, drivers will circle neighborhoods looking for street parking.
- **P4:** Early data from two cities show little change in street-parking demand since the rules ended.

**Question:** The third paragraph primarily serves to:

- A. provide the main evidence for the author's argument.
- B. present a concern that the fourth paragraph then addresses.
- C. explain why parking spaces add to construction costs.
- D. introduce the topic of the passage for the first time.

**Solution:**
1. **Relationship:** P3 raises a worry ("Critics warn"); P4 answers it with data.
2. **Eliminate:** A: P3 is an objection, not evidence. C is P2's job. D is P1's job.

**Answer: B** ✓
</details>
      `
    },
    {
      id: 'act-r6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice: Cause, Comparison, and Sequence** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `In the 1880s, the Holloway mill switched from water power to steam. Because the mill no longer needed to sit beside the fast-moving river, the owners built a larger factory near the new rail depot two miles away. Within five years, the shops and boarding houses that had clustered around the old riverside mill had moved too.

According to the passage, the shops and boarding houses moved because:`,
            options: [
              `the river near the old mill had begun to flood every spring.`,
              `the rail depot offered them cheaper land than the riverside.`,
              `the owners ordered every business in town to relocate.`,
              `the mill, which they had clustered around, relocated.`
            ],
            correctAnswer: 3,
            explanation: `The chain runs from steam power, to a new factory by the depot, to the shops that "had clustered around the old riverside mill" following it. Flooding and land prices are plausible causes, but the passage never mentions either one. The owners built a factory; nothing says they ordered other businesses to move.`
          },
          {
            question: `Both of the city's early mapmakers worked from the same land surveys. Ellis drew every street to an exact scale, so his maps were trusted by engineers and builders. Marsh, by contrast, enlarged the busy downtown and shrank the outlying farms, producing maps that were easier for visitors to read but useless for measuring distances.

Which statement best describes a difference between the two mapmakers?`,
            options: [
              `Ellis used land surveys, while Marsh made up his own measurements.`,
              `Ellis kept a consistent scale, while Marsh distorted it for readability.`,
              `Ellis designed his maps for visitors, while Marsh designed his for builders.`,
              `Ellis mapped only the downtown, while Marsh mapped only the outlying farms.`
            ],
            correctAnswer: 1,
            explanation: `"By contrast" marks the difference: Ellis drew everything to exact scale, while Marsh enlarged downtown and shrank the farms to make the maps easier to read. The passage says both worked from the same surveys, so Marsh did not invent measurements. The audiences are switched in the third choice, and both men mapped the city as a whole.`
          },
          {
            question: `By the time Gran's letter arrived, Theo had already accepted the job in Denver. He had spent the spring sending applications, and in May, after two interviews, the offer had come. The letter, postmarked in April, urged him to stay close to home.

Which event happened first?`,
            options: [
              `Theo sent out his job applications.`,
              `Theo received Gran's letter in the mail.`,
              `Theo accepted the Denver job.`,
              `Theo got the offer in May.`
            ],
            correctAnswer: 0,
            explanation: `The past perfect "had spent the spring sending applications" places the applications earliest, before the April letter was mailed and the May offer came. The letter arrived after he had "already accepted" the job, so receiving it came last. Accepting the job had to follow the May offer, which followed the interviews.`
          },
          {
            question: `Some researchers have linked heavy use of social media among teenagers to poorer sleep. In one survey, teens who reported more than four hours of daily use were more likely to report going to bed after midnight. The researchers cautioned that the survey could not show whether the social media use caused the late bedtimes.

Based on the passage, the relationship between social media use and late bedtimes is best described as:`,
            options: [
              `proven: heavy use has been shown to cause late bedtimes.`,
              `reversed: late bedtimes have been shown to cause heavy use.`,
              `associated, though the survey could not show that one caused the other.`,
              `unrelated, because the survey found no connection between them.`
            ],
            correctAnswer: 2,
            explanation: `The survey found that the two go together, but the researchers "cautioned that the survey could not show" causation, so the relationship is an association. Calling it proven ignores that caution, and the passage never shows the reverse causation either. The survey did find a connection, so "unrelated" contradicts it.`
          }
        ]
      }
    },
    {
      id: 'act-r6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**What Is This Paragraph's Job?** 🔍

A passage argues that a town should restore its historic train station. Choose the job of each paragraph.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'P1: "The Millbrook station has stood empty since 1971, its windows boarded and its clock stopped at 4:10."',
            options: ['Provide background', 'Present a counterargument', 'Concede a point', 'Conclude with a call to action']
          },
          {
            label: 'P3: "Opponents argue that the town cannot afford the repairs while its roads need paving."',
            options: ['Provide background', 'Present a counterargument', 'Concede a point', 'Conclude with a call to action']
          },
          {
            label: 'P4: "Admittedly, restoration will cost more than demolition. But a restored station could house a café, a visitor center, and a stop for the new regional line."',
            options: ['Provide background', 'Present a counterargument', 'Concede a point', 'Conclude with a call to action']
          },
          {
            label: 'P5: "The council votes in March. Residents who want the station saved should attend."',
            options: ['Provide background', 'Present a counterargument', 'Concede a point', 'Conclude with a call to action']
          }
        ],
        correctAnswers: ['Provide background', 'Present a counterargument', 'Concede a point', 'Conclude with a call to action'],
        hint1: 'Which paragraph describes the situation before any argument begins?',
        hint2: 'Which paragraph gives the other side\'s view?',
        hint3: '"Admittedly" signals that the author grants something before continuing.',
        explanation: 'P1 sets the scene with the station\'s history. P3 gives opponents\' objection. P4 grants that restoration costs more ("Admittedly") and then answers with benefits, which is a concession. P5 urges readers to act.'
      }
    },
    {
      id: 'act-r6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Practice: Function and Point of View** 📋
      `,
      exercise: {
        questions: [
          {
            question: `A passage about the invention of the bicycle has four paragraphs. The first describes a clumsy early model with no pedals. The second explains how pedals were added to the front wheel. The third begins, "Yet riders soon discovered the drawback of a giant front wheel: a single bump could throw them headfirst over the handlebars." The fourth describes the safer chain-driven design that followed.

The third paragraph mainly serves to:`,
            options: [
              `identify a problem that motivates the design in the fourth paragraph.`,
              `describe the clumsy early bicycle model that had no pedals of any kind.`,
              `argue that bicycles were too dangerous for most people to ride.`,
              `explain how pedals were first attached to a bicycle's front wheel.`
            ],
            correctAnswer: 0,
            explanation: `"Yet" turns from the pedal design to its danger, and the fourth paragraph describes the safer design that solved it, so the third paragraph sets up a problem. The pedal-less model is the first paragraph's subject, and attaching pedals is the second's. The paragraph names a drawback of one design; it does not argue that all bicycles were too dangerous.`
          },
          {
            question: `The summer I turned eight, my brother and I built a raft from scrap lumber and declared ourselves explorers of Baxter Pond. It sank within ten minutes. I remember feeling that the world had ended; I can see now that it was the best afternoon of that whole summer.

The narrator's point of view is best described as that of:`,
            options: [
              `an eight-year-old describing an event as it happens.`,
              `the narrator's brother remembering their shared summer.`,
              `an adult looking back with a different view than she had then.`,
              `an outside observer who watched the children build a raft.`
            ],
            correctAnswer: 2,
            explanation: `"I remember feeling" and "I can see now" contrast the child's despair with the adult's fond view, which marks an adult narrator looking back. The past tense and "I can see now" rule out a child narrating events as they happen. The narrator says "my brother and I," so she is neither the brother nor an outside observer.`
          },
          {
            question: `A passage on deep-sea exploration states that scientists have mapped the surface of the moon in more detail than the floor of Earth's oceans. The next sentence reads: "To put it plainly, we know the face of a world 240,000 miles away better than the ground beneath our own seas."

The second sentence mainly serves to:`,
            options: [
              `introduce a new topic unrelated to the ocean floor.`,
              `concede that moon maps are not very detailed after all.`,
              `provide new evidence from a recent ocean survey.`,
              `restate the previous claim in more vivid terms.`
            ],
            correctAnswer: 3,
            explanation: `"To put it plainly" signals a restatement, and the sentence repeats the comparison between moon maps and ocean maps in more striking language. It stays on the ocean floor, so it introduces no new topic. It praises the detail of moon maps rather than conceding a weakness, and it offers no new survey data.`
          },
          {
            question: `The narrator of a story describes a family dinner: "My mother passed the potatoes and said nothing about the empty chair. My father talked about the weather for twenty minutes. I counted the peas on my plate. Nobody mentioned Daniel."

The passage is told from the point of view of:`,
            options: [
              `a narrator who knows the private thoughts of every family member.`,
              `a family member who observes others but reports only actions.`,
              `Daniel, who is describing the dinner he chose not to attend.`,
              `an outside reporter writing about a family for a newspaper.`
            ],
            correctAnswer: 1,
            explanation: `The narrator says "my mother" and "my father," so the speaker is a family member, and only actions are reported: passing potatoes, talking about weather, counting peas. No one's private thoughts are revealed, which rules out an all-knowing narrator. Daniel is the absent person nobody mentions, and the family words "my mother" rule out an outside reporter.`
          }
        ]
      }
    },
    {
      id: 'act-r6-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

> Until the 1950s, most of the valley's apple growers sold their fruit to a single cannery in town. When the cannery closed in 1957, prices fell so far that several orchards were cut down for firewood. The growers who survived did so in different ways. The Pellers planted new varieties that kept well in cold storage and sold them to grocery chains in the city. The Ochoas, whose orchard sat beside the highway, built a roadside stand and, later, a cider barn that now draws tour buses every October.

**Question 1:** According to the passage, what caused apple prices in the valley to fall?

**Question 2:** Which statement best describes a difference between the Pellers and the Ochoas?

**Question 3:** The sentence "The growers who survived did so in different ways" mainly serves to:

<details>
<summary><b>Show answers</b></summary>

**1. The closing of the cannery** that had bought most of the fruit. The orchards being cut down was an *effect* of the price drop, not its cause.

**2. The Pellers sold to city grocery chains, while the Ochoas sold directly to visitors** at a stand and cider barn.

**3. Introduce the comparison of two families' strategies** that the rest of the paragraph develops.
</details>
      `
    },
    {
      id: 'act-r6-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Cause and effect:** follow the signal words, keep the direction straight, and match the passage's certainty (suspected vs. proven).
- **Comparison:** note similarities and differences in two columns; wrong answers swap traits.
- **Sequence:** build a timeline from past perfect verbs, dates, ages, and phrases like *by then* and *years earlier*.
- **Function:** name the part's **job** relative to what comes before and after: background, example, counterargument, concession, transition, conclusion.
- **Point of view:** identify first or third person, and for a narrator looking back, separate the **then** feeling from the **now** understanding.
      `
    }
  ]
}
