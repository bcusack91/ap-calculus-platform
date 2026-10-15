export const psychRetrievalPart7Data = {
  topicSlug: 'retrieval-forgetting',
  sections: [
    {
      id: 'retrieval-forgetting-p7-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Retrieval and Forgetting

**Part 7 of 7 — Synthesis and EBQ Practice**

Every idea in this topic answers one of three questions: how do we get memories out, why do we sometimes fail to, and why are the memories we do get out sometimes wrong?

### 📚 Concept Map: Retrieval and Forgetting (CED 2.6 and 2.7)

| Big question | Concepts | Core idea | Part |
|-------------|----------|-----------|------|
| **How is memory retrieved?** | Recall, recognition, retrieval cues | Recall = without cues; recognition = relies on retrieval cues, so it is usually easier | 1 |
| **What makes retrieval easier?** | Context-dependent, state-dependent and mood-congruent memory | Retrieval improves when place, physical state or mood match encoding | 2 |
| **How can we strengthen retrieval?** | Testing effect, metacognition | Retrieving builds durable memories; accurate self-monitoring guides study | 3 |
| **How fast do we forget?** | Forgetting curve, savings | Rapid loss right after learning, then leveling off | 4 |
| **Why do memories fail?** | Encoding failure, proactive and retroactive interference, tip-of-the-tongue, repression | Never stored, blocked by similar memories, inadequate cues, or (psychodynamic view) pushed away to protect the ego | 5 |
| **Why are memories inaccurate?** | Misinformation effect, source amnesia, constructive memory (consolidation, imagination inflation) | Memories are rebuilt at retrieval and absorb new information | 6 |

### One Thread Through All Six Parts: Cues

- Recognition beats recall because the item itself is a **cue** (Part 1).
- Context, state and mood work because they were encoded with the memory and serve as **cues** (Part 2).
- Retrieval practice builds more and stronger routes, that is, better **cues** (Part 3).
- Savings show memories that were too weak to reach without the right **cues** (Part 4).
- Tip-of-the-tongue is inadequate retrieval: the right **cue** is missing (Part 5).
- Misinformation and source amnesia show that the **cues** available at retrieval can also reshape what is retrieved (Part 6).

### Look-Alike Terms: The Deciding Question

| Pair | Ask this | If yes | If no |
|------|----------|--------|-------|
| Recall vs recognition | Is the answer presented to the person? | Recognition | Recall |
| Context vs state vs mood | What matched: the place, the body or the feelings? | Context / state / mood | Not a matching effect |
| Proactive vs retroactive | Is the person trying to retrieve the **newer** memory? | Proactive (old blocks new) | Retroactive (new blocks old) |
| Encoding failure vs retrieval failure | Could a cue or relearning ever reveal it? | Retrieval failure (e.g., TOT) | Encoding failure |
| Misinformation vs source amnesia | Did misleading information come **after** the event and change the content? | Misinformation effect | Source amnesia if only the origin is confused |
| Testing effect vs spacing effect | Is the benefit from **retrieving**, or from **spreading sessions out** over time? | Testing effect | Spacing effect (encoding lessons) |
      `
    },
    {
      id: 'retrieval-forgetting-p7-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Integrated Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'During a practice exam in a quiet library, Lucia cannot remember a term she learned in class. The next day, sitting in that classroom, she remembers it before anyone gives her a hint. What does this pattern show?',
            options: [
              'The term was never encoded, and the classroom caused proactive interference',
              'The term was stored, and the classroom setting served as a retrieval cue',
              'The term was repressed, and the classroom released it from her unconscious',
              'The term had decayed, and the classroom let her relearn it from the start'
            ],
            correctAnswer: 1,
            explanation: 'Because returning to the classroom brought the term back, it was stored all along; the library failure was a retrieval failure. The setting where she learned the term acted as a retrieval cue, which is context-dependent memory.'
          },
          {
            question: 'A student switches from rereading to weekly self-quizzing and finds she retains far more of each unit a month later. Which pair of concepts BEST explains her results?',
            options: [
              'The testing effect, which slows the forgetting curve',
              'Source amnesia, which slows the forgetting curve',
              'Metacognition, which reverses proactive interference',
              'Recognition, which strengthens her recall over the month'
            ],
            correctAnswer: 0,
            explanation: 'Self-quizzing is retrieval practice, and the testing effect means retrieved material is forgotten more slowly, so less is lost over the month. Source amnesia is a memory error, and quizzing does not reverse interference.'
          }
        ]
      }
    },
    {
      id: 'retrieval-forgetting-p7-s3-ebq',
      type: 'text' as const,
      content: `
### 🎯 AP Strategy: Evidence-Based Question (EBQ) Practice

The EBQ gives three sources and asks you to: **(A)** propose a specific, defensible claim; **(B)(i)** support it with specific evidence from one source, cited, and **(B)(ii)** explain how that evidence supports the claim using a psychological concept, theory, perspective or research finding; **(C)(i)** and **(C)(ii)** do the same with a **different** source and a **different** concept.

**Prompt:** Develop and justify an argument about whether eyewitness memory is reliable.

**Source A** (summary of a classic experiment): College students watched films of car accidents and estimated the cars' speed. Students asked how fast the cars were going when they "smashed" gave higher estimates than students asked with milder verbs such as "contacted." In a follow-up, students given the "smashed" question were more likely to report a week later that they had seen broken glass, although none appeared in the film.

**Source B** (practice source, not a real citation): Volunteers watched a staged theft. Before viewing a lineup, half looked through photos that included an innocent bystander from the video's background. In the lineup (which did not contain the thief), the photo group picked the bystander about three times as often as the comparison group, and most who did so were confident.

**Source C** (practice source, not a real citation): Witnesses to a staged event were interviewed a week later. Those asked first to picture the room, the sounds and how they felt during the event recalled more correct details than witnesses asked standard questions, with no increase in incorrect details.

### Building the Response

**(A) Claim:** Eyewitness memory is often unreliable because memories are reconstructed at retrieval, although careful questioning can improve accuracy.

**(B)(i) Evidence (Source A):** Students asked with the verb "smashed" were more likely to report seeing broken glass a week later, even though there was none in the film.

**(B)(ii) Explanation:** This is the **misinformation effect**: the misleading verb, received after the event, was incorporated into the memory, so witnesses remembered a detail that never happened. A witness's report can therefore depend on how they were questioned rather than on what they saw.

**(C)(i) Evidence (Source C):** Witnesses who first pictured the room, sounds and their feelings recalled more correct details, with no increase in errors.

**(C)(ii) Explanation:** This reflects **context-dependent memory** (and mood-congruent memory): reinstating the external context and emotional state of encoding provides retrieval cues that match the original memory, so accuracy improves when interviews are designed around how retrieval works.

**Why this earns the points:** each explanation names a **different** concept, ties it to the specific evidence, and links back to the claim. Source B could support the claim instead through **source amnesia**: the bystander's face felt familiar, but witnesses misattributed the familiarity to the crime instead of the photos.

| Weak response | Why it loses the point |
|---------------|-----------------------|
| "Eyewitnesses are sometimes right and sometimes wrong." | Not a specific, defensible claim |
| "Source A shows memory is bad." | Evidence is not specific and is not cited accurately |
| "Source A proves the misinformation effect." (no further explanation) | Names a concept without explaining how the evidence supports the claim |
| Using the misinformation effect for both (B) and (C) | (C) requires a different concept than (B) |
      `
    },
    {
      id: 'retrieval-forgetting-p7-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match Each Source to Its Best Concept** 🔍

Use Sources A to C above.
      `,
      exercise: {
        dropdowns: [
          { label: 'Source A: "smashed" leads to reports of broken glass', options: ['Source amnesia', 'Misinformation effect', 'Context-dependent memory', 'Encoding failure'] },
          { label: 'Source B: picking the bystander seen in the photo set', options: ['Misinformation effect', 'Retroactive interference', 'Source amnesia', 'Testing effect'] },
          { label: 'Source C: picturing the room improves correct recall', options: ['Context-dependent memory', 'Imagination inflation', 'Misinformation effect', 'Source amnesia'] }
        ],
        correctAnswers: ['Misinformation effect', 'Source amnesia', 'Context-dependent memory'],
        hint1: 'The misleading information arrived after the event, inside a question.',
        hint2: 'The face really was familiar; the error is about where it was seen.',
        hint3: 'Reinstating the setting supplies cues that match encoding. Imagining false events is a different idea.',
        explanation: 'Source A shows post-event misinformation changing memory. Source B shows source amnesia: a familiar face is attributed to the wrong source. Source C shows context reinstatement improving retrieval, an application of context-dependent memory; it involved picturing a real event, not imagining a false one.'
      }
    },
    {
      id: 'retrieval-forgetting-p7-s5-review',
      type: 'text' as const,
      content: `
### 📚 Integrated Review: One Student's Semester

Follow one student through the topic and name the concept at each step.

| Event | Concept | Part |
|-------|---------|------|
| Maya can pick the right answer on multiple-choice quizzes but freezes on free-response questions | Recognition is easier than recall | 1 |
| She studies at the kitchen table and does worse on a test in an unfamiliar exam hall | Context-dependent memory | 2 |
| Rereading her notes makes her feel ready; her quiz score says otherwise | Metacognition failure (fluency illusion) | 3 |
| She switches to self-quizzing every few days and retains more by the unit test | Testing effect (plus spacing) | 3 |
| A week after a cram session she has lost most of the material, but what remains holds steady | Forgetting curve: rapid loss, then leveling off | 4 |
| Her new Spanish vocabulary keeps intruding when she tries to remember last year's French | Retroactive interference | 5 |
| She is sure a statistic came from her textbook; it came from a video | Source amnesia | 6 |

### Cross-Unit Connections

| Connection | Link |
|-----------|------|
| **Topic 1.5 (sleep)** | Consolidation during sleep stabilizes memories; sleeping after learning reduces retroactive interference |
| **Topic 2.3 to 2.5 (encoding and storage)** | Deeper, more meaningful encoding builds more retrieval cues; amnesia is a storage impairment, not everyday forgetting |
| **Unit 0 skills (research methods)** | Misinformation, testing-effect and context studies are model experiments: random assignment, operational definitions, controls |
| **Psychodynamic perspective (Unit 4 and Unit 5)** | Repression is the psychodynamic account of forgetting; it remains contested by cognitive research |
| **Social psychology (Unit 4)** | Leading questions and confirming feedback from authority figures shape what witnesses report |

### Final Checklist for the Exam

- Define recall and recognition with the CED wording: **without cues** versus **relies on retrieval cues**.
- Name what matched (place, physical state, mood) when explaining a retrieval advantage.
- Describe the forgetting curve with **both** halves: rapid early loss **and** leveling off.
- Identify which memory is being retrieved before labeling interference.
- Say "psychodynamic theorists believe" for repression, and know that it is contested.
- Treat confidence as separate from accuracy in eyewitness questions.
      `
    },
    {
      id: 'retrieval-forgetting-p7-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**EBQ and Synthesis Check** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Which claim would BEST satisfy part (A) of an EBQ asking whether eyewitness memory is reliable?',
            options: [
              'Eyewitness memory is a very interesting topic that psychologists study',
              'Eyewitness memory becomes unreliable when witnesses face leading questions',
              'Some eyewitnesses remember events well and others do not remember well',
              'Eyewitness memory is studied using both experiments and case studies'
            ],
            correctAnswer: 1,
            explanation: 'A defensible claim takes a position that evidence can support or challenge, and this one names a specific condition. The other statements describe the topic, state something no one would dispute, or describe methods instead of answering the question.'
          },
          {
            question: 'A student uses Source B for part (C)(i). Which explanation for (C)(ii) BEST connects the evidence to a claim that eyewitness memory is unreliable?',
            options: [
              'Viewing the bystander photos caused encoding failure, so the thief was never stored',
              'Seeing the bystander again worked as a retrieval cue that improved accuracy',
              'The bystander was familiar, but witnesses misattributed where they saw him',
              'Viewing the photos was retrieval practice, which strengthens memory for faces'
            ],
            correctAnswer: 2,
            explanation: 'Witnesses had seen the bystander, but in the photos, not committing the crime; misattributing the familiar face to the crime is source amnesia. That explains why confident witnesses chose an innocent person, supporting the claim of unreliability.'
          },
          {
            question: 'Which finding would MOST strongly challenge the claim that "forgetting is mostly retrieval failure rather than loss of stored information"?',
            options: [
              'Cues at test restore many words that participants left out of free recall',
              'Relearning the forgotten material shows no savings compared with new material',
              'People in a tip-of-the-tongue state can report the first letter of a word',
              'Recognition tests reveal far more stored items than recall tests reveal'
            ],
            correctAnswer: 1,
            explanation: 'If relearning forgotten material were no faster than learning new material, nothing would remain in storage, which points to loss rather than retrieval failure. Cued recovery, tip-of-the-tongue partial information and the recognition advantage all support the retrieval-failure claim.'
          }
        ]
      }
    }
  ]
}
