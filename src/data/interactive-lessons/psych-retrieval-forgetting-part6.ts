export const psychRetrievalPart6Data = {
  topicSlug: 'retrieval-forgetting',
  sections: [
    {
      id: 'retrieval-forgetting-p6-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Retrieval and Forgetting

**Part 6 of 7 — Constructed Memories and Eyewitness Accuracy**

The most troubling memory errors are not blanks; they are memories that feel vivid and certain and are still wrong.

### 📚 Memory Is Reconstructed, Not Replayed (CED 2.7.A.4)

Retrieval does not play back a recording. Each time you remember, you rebuild the event from stored fragments, general knowledge and whatever information is available now. Usually the rebuild is close enough. The CED names three ways accuracy can suffer:

| Concept | Definition | Example |
|---------|-----------|---------|
| **Misinformation effect** | Misleading information received **after** an event is incorporated into the memory of the event | After a news report says the getaway car was blue, a witness "remembers" a blue car that was actually green |
| **Source amnesia** | Remembering information but forgetting or mistaking **where it came from** | You are sure your friend told you a fact that you actually read online |
| **Constructive memory** | Memories are built and rebuilt, so they can change; the CED highlights **memory consolidation** and **imagination inflation** | Imagining a childhood event several times makes you more confident it happened |

(The role of schemas in reconstructing stories, such as Bartlett's "War of the Ghosts," is covered in the Thinking and Problem Solving lessons.)

### Constructive Memory: Consolidation

New memories are not stored in finished form. **Memory consolidation** is the process by which a new memory is stabilized in long-term storage over hours to days, much of it during sleep (Topic 1.5). Two consequences matter here:

- While a memory is consolidating, information encountered afterward can be **blended into it**.
- Retrieving a memory makes it changeable again; it is then stored once more, *including* any new details or interpretations that were active while it was being retrieved. Each retelling is a chance for the memory to drift.

### Constructive Memory: Imagination Inflation

**Imagination inflation** is the finding that vividly imagining an event that did not happen increases a person's confidence that it did. In typical studies, participants first rate how sure they are that various childhood events happened to them ("broke a window with your hand"). Later they imagine some of those events in detail. When they rate the events again, the imagined events receive a bigger increase in confidence than events that were not imagined.

Why it happens: an imagined event produces images, sounds and feelings much like a real memory. Later, the person may misjudge the vividness of the imagined version as evidence that it was experienced, which is closely related to source amnesia.

### False Memories in the Lab

| Paradigm | What happens | What it shows |
|----------|-------------|---------------|
| **Related-word lists** | People hear *bed, rest, awake, tired, dream, snooze, blanket, nap...* and later confidently "recall" the word *sleep*, which was never presented | Memory stores the gist and fills in what "should" be there |
| **Implanted childhood event** | Relatives supply true stories plus one false one (being lost in a shopping mall as a child); after repeated interviews, about a quarter of participants came to remember the false event at least partly | Suggestion plus repetition can create memories of entire events |

> **AP Connection:** If a question asks why a confident eyewitness can still be wrong, the reasoning chain is: memory is constructive, details are rebuilt at each retrieval, and post-event information (misinformation) or imagined details can be built in without the person noticing.
      `
    },
    {
      id: 'retrieval-forgetting-p6-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Kai is certain he saw a famous comedian\'s live show as a kid. His parents point out that he only watched a recording of it on TV with his cousins. Which memory error BEST explains Kai\'s belief?',
            options: [
              'Misinformation effect',
              'Proactive interference',
              'Source amnesia',
              'Encoding failure'
            ],
            correctAnswer: 2,
            explanation: 'Kai remembers the show itself but has mistaken where the memory came from: a TV recording, not a live performance. Forgetting or confusing the source of a memory is source amnesia; no misleading information was supplied after the event.'
          },
          {
            question: 'Participants rated how likely it was that they had broken a window with their hand as children. After vividly picturing doing so, many rated it as more likely. This finding is BEST described as:',
            options: [
              'Imagination inflation, a form of constructive memory',
              'Retroactive interference, a form of retrieval failure',
              'Mood-congruent memory, a form of retrieval enhancement',
              'The testing effect, a form of retrieval practice'
            ],
            correctAnswer: 0,
            explanation: 'Imagining an event increased confidence that it really happened, which is imagination inflation. The CED lists it, along with consolidation, as a way that constructive memory affects accuracy.'
          }
        ]
      }
    },
    {
      id: 'retrieval-forgetting-p6-s3-misinfo',
      type: 'text' as const,
      content: `
### 📚 The Misinformation Effect: A Classic Experiment

**Experiment 1.** College students watched short films of traffic accidents and then answered questions. The key question was: "About how fast were the cars going when they ___ each other?" Different participants got different verbs: *smashed, collided, bumped, hit* or *contacted*.

| Verb in the question | Pattern of speed estimates |
|---------------------|---------------------------|
| smashed | Highest (about 41 mph on average) |
| collided, bumped, hit | In between |
| contacted | Lowest (about 32 mph on average) |

One word in a question changed the speed people reported for the same film. But did the verb change the **memory**, or did it only change the **answer** (people unsure of the speed may simply lean toward the word they were given)?

**Experiment 2** separated the two. Students watched a film of a crash and were asked about speed using *smashed* or *hit*; a control group got no speed question. **One week later**, without seeing the film again, everyone was asked: "Did you see any broken glass?" There was no broken glass in the film.

| Group | Said "yes," they saw broken glass |
|-------|-----------------------------------|
| *smashed* question | About one-third |
| *hit* question | About one in seven |
| No speed question (control) | About one in eight |

The *smashed* group "remembered" a detail consistent with a violent crash. The misleading word had been built into the memory itself, which is the misinformation effect.

### Source Amnesia in Everyday Life and in Court

**Source amnesia** (also called source misattribution) is a failure to remember *where* a memory came from, even when the content is remembered.

- **Dreams and reality:** remembering a dream event as something that really happened.
- **Unintentional plagiarism:** an idea from a book feels like your own original idea because its source was forgotten.
- **Eyewitness error:** a witness who saw a stranger in the mugshot book later identifies that person in a lineup, because the face is familiar but the source of the familiarity (the photo, not the crime) is lost.

### What Psychology Suggests for Eyewitness Procedures

| Problem | Research-based safeguard |
|---------|-------------------------|
| Leading questions introduce misinformation | Use open-ended questions ("Describe the car") before specific ones |
| Officers can unintentionally signal the suspect | **Double-blind lineups**: the person running the lineup does not know who the suspect is |
| Confidence grows after feedback ("Good, you picked our suspect") | Record the witness's confidence immediately, before any feedback |
| Repeated retellings let details drift | Interview witnesses early and document the first account |

> **AP Connection:** Confidence is not proof of accuracy. Because constructed and misinformed memories can feel just as vivid as accurate ones, a confident witness can be sincerely wrong.
      `
    },
    {
      id: 'retrieval-forgetting-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
**Name the Error** ✍️
      `,
      exercise: {
        questions: [
          {
            question: 'Misleading information received after an event becomes part of the memory of that event. This is the _____ effect.',
            answer: 'misinformation',
            acceptableAnswers: ['misinformation effect', 'mis-information'],
            explanation: 'The misinformation effect is the incorporation of post-event misleading information into memory.'
          },
          {
            question: 'Remembering a fact but attributing it to the wrong source is called source _____.',
            answer: 'amnesia',
            acceptableAnswers: ['source amnesia', 'misattribution', 'source misattribution'],
            explanation: 'Source amnesia is forgetting or confusing where information came from.'
          },
          {
            question: 'Vividly picturing an event that never happened can increase confidence that it did. This is imagination _____.',
            answer: 'inflation',
            acceptableAnswers: ['imagination inflation'],
            explanation: 'Imagination inflation is one of the two constructive-memory processes the CED names, along with consolidation.'
          }
        ],
        hint1: 'The information after the event was misleading.',
        hint2: 'The CED term uses a word that also names a memory-loss condition.',
        hint3: 'Confidence that the event happened goes up, the way prices rise.'
      }
    },
    {
      id: 'retrieval-forgetting-p6-s5-aaq',
      type: 'text' as const,
      content: `
### 🎯 AP Strategy: Article Analysis Question (AAQ) Practice

The AAQ gives you a summary of one study and asks six parts: **(A)** identify the research method, **(B)** state the operational definition of a variable, **(C)** describe what a statistic indicates, **(D)** identify an ethical guideline and how the researchers applied it, **(E)** explain the extent to which the findings are generalizable, and **(F)** explain how a finding supports or refutes the hypothesis.

**Practice study (not a real citation): "Leading Details and Eyewitness Memory"**

*Hypothesis:* Witnesses who receive misleading information after an event will report the false detail more often than witnesses who do not.

*Participants:* 120 undergraduate volunteers at one university, each receiving course credit.

*Method:* All participants watched the same 2-minute video of a shoplifting. They were then randomly assigned to read one of two written summaries. The **misleading** summary said the thief wore a baseball cap (she did not); the **accurate** summary did not mention headwear. Two days later, participants answered 20 questions about the video, including "Was the thief wearing a hat?" and rated their confidence from 1 (guessing) to 7 (certain).

*Ethics:* Participants signed informed consent forms. Because they were not told the study's true purpose at the start, all were debriefed and told about the misleading summary at the end.

*Results:*

| Condition | Answered "yes, a hat" | Mean confidence among "yes" answers |
|-----------|----------------------|------------------------------------|
| Misleading summary | 38% | 5.4 of 7 |
| Accurate summary | 9% | 3.1 of 7 |

The difference in "yes" answers was statistically significant (p < .05).

**Model answers:**
- **(A) Method:** An experiment. The researchers manipulated the summary type and randomly assigned participants to conditions.
- **(B) Operational definition:** The dependent variable, false memory, was measured as answering "yes" to "Was the thief wearing a hat?"
- **(C) Statistic:** Participants given misleading information reported the false hat far more often (38% vs. 9%), and because the difference is statistically significant, it is unlikely to be due to chance alone.
- **(D) Ethics:** Debriefing: because participants were deceived about the summary, researchers explained the true purpose and the false detail at the end.
- **(E) Generalizability:** Limited. All participants were undergraduates at one university watching a short video with nothing at stake, unlike real witnesses to a stressful crime, so the results may not generalize to real eyewitnesses.
- **(F) Support:** Participants who read the misleading summary reported the hat about four times as often, which supports the hypothesis.
      `
    },
    {
      id: 'retrieval-forgetting-p6-s6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**AAQ Parts: Pick the Best Response** 🔍

Use the practice study above.
      `,
      exercise: {
        dropdowns: [
          { label: 'Independent variable', options: ['Confidence rating', 'Type of summary read', 'Length of the video', 'Answer to the hat question'] },
          { label: 'Why random assignment matters here', options: ['It lets results generalize to all adults', 'It removes the need for a debriefing', 'It spreads prior differences evenly across groups', 'It makes the dependent variable measurable'] },
          { label: 'Strongest limit on generalizability', options: ['The study used random assignment', 'The video showed a low-stakes event to undergraduates', 'Participants rated their confidence', 'The results were statistically significant'] },
          { label: 'What the confidence data add', options: ['False memories can feel quite certain', 'The misleading group had better memory', 'Confidence caused the false reports', 'The video was too short to remember'] }
        ],
        correctAnswers: ['Type of summary read', 'It spreads prior differences evenly across groups', 'The video showed a low-stakes event to undergraduates', 'False memories can feel quite certain'],
        hint1: 'The IV is what the researchers manipulated between groups.',
        hint2: 'Random assignment is about making the groups equivalent at the start, not about who the sample represents.',
        hint3: 'Generalizability depends on who was studied and under what conditions.',
        explanation: 'The researchers manipulated the summary type, so it is the IV. Random assignment equalizes groups on prior differences such as attention or memory ability. The sample (undergraduates) and the low-stakes video limit generalizability to real eyewitnesses. Higher confidence among the misled "yes" answers shows false memories can feel certain; the study did not test whether confidence caused anything.'
      }
    },
    {
      id: 'retrieval-forgetting-p6-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'In the classic car-crash experiment, why did asking about broken glass a week later strengthen the case that the verb changed memory itself?',
            options: [
              'Broken glass was shown in the film, so it tested whether witnesses noticed details',
              'The glass question used no leading verb, yet the smashed group still reported more glass',
              'Asking about glass measured speed more accurately than the original estimates did',
              'A week was long enough for every group to forget the film, so answers were guesses'
            ],
            correctAnswer: 1,
            explanation: 'The glass question was identical for every group and did not contain the verb, so a pure answer bias could not explain the difference. The smashed group reporting nonexistent glass more often shows the verb altered what they remembered.'
          },
          {
            question: 'A witness first picks a suspect with low confidence. The officer says, "Good, that\'s who we thought." At trial months later, the witness says she is completely certain. Which recommendation would BEST prevent this problem?',
            options: [
              'Have a person who does not know the suspect run the lineup and record confidence at once',
              'Show the witness the suspect\'s photo several times before trial to build up her confidence',
              'Ask the witness to imagine the crime in detail every week until the trial begins',
              'Tell the witness which person is the suspect so the lineup can be completed faster'
            ],
            correctAnswer: 0,
            explanation: 'A double-blind administrator cannot give confirming feedback, and recording confidence immediately preserves the witness\'s original certainty. Repeated photos, repeated imagining and revealing the suspect would all add misinformation or imagination inflation.'
          },
          {
            question: 'Which outcome would MOST weaken the conclusion of the practice hat study described earlier?',
            options: [
              'The two groups reported the hat at similar rates when tested two days later',
              'The misled group answered most of the other 19 questions accurately',
              'Several participants guessed the purpose of the study before debriefing',
              'The researchers reused the same video for every participant in the study'
            ],
            correctAnswer: 0,
            explanation: 'The hypothesis predicts more false hat reports after misleading information; similar rates would fail to support it. Accuracy on unrelated questions and using one video for all participants are consistent with the design, and a few participants guessing the purpose is a minor concern by comparison.'
          }
        ]
      }
    }
  ]
}
