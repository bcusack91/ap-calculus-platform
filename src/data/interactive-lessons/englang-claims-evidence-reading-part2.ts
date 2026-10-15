export const englangClaimsEvidenceReadingPart2Data = {
  topicSlug: 'englang-claims-evidence-reading',
  sections: [
    {
      id: 'englangc2-intro',
      type: 'text' as const,
      content: `
# 📖 Claims and Evidence in Reading

**Part 2 of 7 — Finding the Thesis: Stated, Delayed and Implied**

---

| Section |
|---------|
| 📖 Where a Thesis Can Live |
| Close Reading: Eisenhower's Farewell Address, 1961 |
| A Routine for Thesis Questions |

> 🔑 **Key Concept:** Skill 3.B asks you to identify and describe an argument's **overarching thesis** and any sign that it is **qualified**. The thesis is not always the first sentence, and it is not always one sentence. Writers often hold it back until they have earned the reader's trust, and some never state it outright at all. Your job is to find the position that **every part of the passage serves**.
`
    },
    {
      id: 'englangc2-placement',
      type: 'text' as const,
      content: `
## 📖 Where a Thesis Can Live

### Three Placements

| Placement | What it looks like | Why a writer chooses it |
|---|---|---|
| **Stated early** | The position appears in the opening paragraph, and the rest of the text defends it | The audience is receptive, or the writer wants clarity above all |
| **Delayed** | Context, narrative or a concession comes first; the position arrives after a turn word such as *yet*, *but* or *still* | The audience may resist, so the writer first shows fairness or builds shared ground |
| **Implied** | No single sentence states the whole position; the reader assembles it from the claims, examples and tone | The writer relies on irony, narrative or accumulation, or wants the reader to reach the conclusion personally |

### Four Things That Are Not the Thesis

A thesis question has four predictable wrong answers, because a passage contains four other kinds of statements.

| Statement type | Example (school start times) | Why it is not the thesis |
|---|---|---|
| **Topic** | "School schedules" | Names a subject but takes no position |
| **Subclaim** | "Teenagers' sleep cycles shift later in puberty." | Supports the thesis; it is one step in the reasoning |
| **Evidence** | "One district's attendance rose after the change." | A specific case offered as support |
| **Concession** | "Later schedules do complicate bus routes." | Grants a point to the other side before the turn |
| **Thesis** | "Districts should move high school start times later." | The position the whole text defends |

### The Claim Hierarchy

Think of an argument as a tree. The thesis sits at the top. Beneath it are **subclaims**, the major reasons or steps. Beneath those are **evidence** and **commentary**. A sentence's place in the tree is defined by what it supports, not by how forceful it sounds. A dramatic subclaim is still a subclaim.

> 🔑 **AP Connection:** Section I stems such as "The writer's central claim is that..." or "Which statement best captures the main argument of the passage?" are thesis questions. Wrong answers are usually a true subclaim, an accurate summary of one paragraph, or the concession the writer later turns against.
`
    },
    {
      id: 'englangc2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A writer opens with two paragraphs describing the benefits of standardized testing, then writes, "Still, a single score cannot carry the weight that admissions offices place on it," and spends the rest of the essay developing that point. The thesis is best described as',
            options: [
              'stated early, in the description of testing\'s benefits',
              'delayed, arriving after a concession and a turn word',
              'implied, since the writer never states a position',
              'divided evenly between the first and second halves'
            ],
            correctAnswer: 1,
            explanation: 'The opening paragraphs grant the other side its due, and "Still" marks the turn to the position the essay defends. The benefits are a concession, the position is stated outright, and the essay is not split evenly between two views.'
          },
          {
            question: 'A sentence in an argument reads, "Teenagers\' sleep cycles shift later during puberty." In an essay arguing that schools should start later, this sentence most likely functions as',
            options: [
              'the overarching thesis',
              'a concession to critics',
              'a subclaim in support',
              'a statement of topic'
            ],
            correctAnswer: 2,
            explanation: 'The sentence gives one reason for the policy the essay defends, so it sits beneath the thesis as a subclaim. It does not state the policy itself, it grants nothing to opponents, and it does more than name a subject.'
          }
        ]
      }
    },
    {
      id: 'englangc2-eisenhower',
      type: 'text' as const,
      content: `
## Close Reading: Eisenhower's Farewell Address, 1961

### The Situation

| Component | Details |
|---|---|
| **Writer** | Dwight D. Eisenhower, a former five-star general who had commanded Allied forces in Europe in World War II, at the end of his second term as president |
| **Occasion** | A televised farewell address to the nation on January 17, 1961, three days before John F. Kennedy's inauguration |
| **Context** | The Cold War; the United States now kept a large standing military and a permanent arms industry in peacetime |
| **Audience** | The American public, most of whom trusted Eisenhower's judgment on defense |

The writer's background matters to the thesis. A warning about military power means more coming from a general than from a critic of the military, and Eisenhower arranges the passage so that his respect for the military comes first.

### Passage 1: The Need

> A vital element in keeping the peace is our military establishment. Our arms must be mighty, ready for instant action, so that no potential aggressor may be tempted to risk his own destruction.

### Passage 2: The Turn

> This conjunction of an immense military establishment and a large arms industry is new in the American experience. The total influence -- economic, political, even spiritual -- is felt in every city, every State house, every office of the Federal government. We recognize the imperative need for this development. Yet we must not fail to comprehend its grave implications. Our toil, resources and livelihood are all involved; so is the very structure of our society.

### Passage 3: The Position

> In the councils of government, we must guard against the acquisition of unwarranted influence, whether sought or unsought, by the military-industrial complex. The potential for the disastrous rise of misplaced power exists and will persist.
>
> — Dwight D. Eisenhower, Farewell Address, January 17, 1961

### Mapping the Claims

| Sentence or phrase | Place in the hierarchy |
|---|---|
| "Our arms must be mighty" | Concession: the speaker grants, and believes, that strength keeps the peace |
| "new in the American experience" | Subclaim: the situation has no precedent, so old habits of trust may not fit |
| "every city, every State house, every office" | Evidence by enumeration: the influence reaches every level |
| "We recognize the imperative need" | Concession restated just before the turn |
| "Yet we must not fail to comprehend its grave implications" | The turn: the word *Yet* signals the writer's real concern |
| "we must guard against the acquisition of unwarranted influence" | **Thesis**, stated after the groundwork is laid |

### Reading the Qualification

Skill 3.B asks for "any indication" that the thesis is qualified. Eisenhower does not say the military-industrial complex is evil or should be dismantled. The adjective **unwarranted** limits the danger to influence that has not been earned, and the phrase **"whether sought or unsought"** widens it to include influence no one intended. The thesis is a call for vigilance, not an accusation. An answer choice that says Eisenhower "condemns the arms industry" overstates his position.
`
    },
    {
      id: 'englangc2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Place Each Sentence in the Hierarchy** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"We recognize the imperative need for this development." functions as ___',
            options: ['a concession', 'the thesis', 'a piece of evidence', 'a statement of topic']
          },
          {
            label: '"In the councils of government, we must guard against the acquisition of unwarranted influence..." functions as ___',
            options: ['the thesis', 'a concession', 'a piece of evidence', 'a statement of topic']
          },
          {
            label: 'The word "unwarranted" in that sentence works to ___ the claim',
            options: ['limit', 'reverse', 'illustrate', 'repeat']
          }
        ],
        correctAnswers: ['a concession', 'the thesis', 'limit'],
        hint1: 'This sentence grants something just before "Yet."',
        hint2: 'This is the position the rest of the passage has been building toward.',
        hint3: 'Influence that is earned is not the target; only influence that is not earned is.',
        explanation: 'Eisenhower concedes the need for a strong military, turns with "Yet," and then states his position. "Unwarranted" narrows the warning to influence that has not been earned.'
      }
    },
    {
      id: 'englangc2-routine',
      type: 'text' as const,
      content: `
## A Routine for Thesis Questions

### Four Steps

1. **Read the whole passage before deciding.** A thesis that is delayed or implied cannot be found in the first paragraph.
2. **Circle turn words**: *yet, but, still, however, nevertheless, and yet*. What comes after a turn usually carries more weight than what comes before it.
3. **Test each candidate.** Ask, "Does every paragraph support, prepare for or defend this statement?" A subclaim fails the test because some paragraphs serve other reasons. A concession fails because the passage argues past it.
4. **Check the strength.** Match the answer's force to the writer's. If the writer says "guard against," an answer that says "abolish" is too strong; if the writer says "must," an answer that says "might consider" is too weak.

### Assembling an Implied Thesis

When no sentence states the position, build it from three clues:

| Clue | Question to ask |
|---|---|
| **Pattern of examples** | What do all the examples have in common? |
| **Tone** | Is the writer admiring, alarmed, mocking, regretful? |
| **Ending** | Where does the passage leave the reader, and what is the reader meant to do or believe? |

A good implied-thesis answer is a full claim, with a subject and a position, at the same strength as the passage.

> 🔑 **AP Connection:** In your own rhetorical analysis essay (Question 2), you will often need to name the writer's purpose or argument before analyzing choices. If you misidentify a concession as the thesis, every paragraph of analysis will tilt in the wrong direction. Locating the turn is the fastest safeguard.
`
    },
    {
      id: 'englangc2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best expresses the central claim of the three Eisenhower passages taken together?',
            options: [
              'A strong peacetime military is needed, but citizens and government must guard against its gaining undue influence.',
              'The arms industry has corrupted the federal government and should be returned to its pre-war size.',
              'The United States must keep its arms ready for instant action so that no enemy is tempted to attack.',
              'The military establishment affects every city and State house in the country.'
            ],
            correctAnswer: 0,
            explanation: 'The passages concede the need for military strength and then argue for vigilance against unwarranted influence. Calling the government corrupted overstates the warning, the point about instant readiness is the concession, and the reach of the influence is supporting evidence.'
          },
          {
            question: 'The sentence "We recognize the imperative need for this development" contributes to the argument primarily by',
            options: [
              'reversing the warning that the speaker gave in the first passage',
              'introducing a new subject that the address develops later on',
              'establishing the speaker\'s fairness before he raises a concern',
              'offering statistical evidence of the arms industry\'s great size'
            ],
            correctAnswer: 2,
            explanation: 'By granting the need first, Eisenhower shows he is not hostile to the military, which makes the warning that follows "Yet" harder to dismiss. The first passage is not a warning, the sentence introduces no new subject, and it contains no statistics.'
          },
          {
            question: 'Eisenhower\'s background as a general most strengthens which feature of the passage?',
            options: [
              'the credibility of his warning',
              'the vividness of his imagery',
              'the precision of his statistics',
              'the humor of his understatement'
            ],
            correctAnswer: 0,
            explanation: 'A caution about military influence carries more authority from a career soldier who has just praised military strength, because he cannot easily be dismissed as hostile. The passage is not chiefly imagistic, statistical or humorous.'
          }
        ]
      }
    }
  ]
};
