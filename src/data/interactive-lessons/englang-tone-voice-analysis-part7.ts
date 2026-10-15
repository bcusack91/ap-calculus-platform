export const englangToneVoiceAnalysisPart7Data = {
  topicSlug: 'englang-tone-voice-analysis',
  sections: [
    {
      id: 'englangt7-intro',
      type: 'text' as const,
      content: `
# 🎙️ Tone and Voice Analysis

**Part 7 of 7 — Review: A Complete Toolkit for Tone and Voice**

---

| Section |
|---------|
| The Toolkit at a Glance |
| A Tone-Word Bank with Fine Distinctions |
| Controlling Your Own Voice on Question 3 |
| Mixed Review Across the Passages |

> 🔑 **Key Concept:** This topic has built one skill in stages: describe an attitude precisely, prove it with choices, track how it changes, and explain what it does for a particular audience. This part ties the stages together and applies them to every passage you have studied.

## The Toolkit at a Glance

| Idea | Core question | Studied in |
|---|---|---|
| **Tone vs voice** | Attitude at a moment, or the personality across the whole text? | Part 1 |
| **Voice and persona** | Who does the writer present as, and why would that persona persuade this audience? | Part 2: Stevenson, "An Apology for Idlers" (1877) |
| **Two targets** | What is the attitude toward the subject, and toward the audience? | Part 3: Lincoln to Fanny McCullough (1862); Douglass to Wells (1892) |
| **Shifts** | Where does the tone turn, what signals it, and why does the writer need it? | Part 4: Douglass to Thomas Auld (1848) |
| **Double tones** | Is there a comic or ironic surface over a serious point? | Part 5: Chesterton, "On Running After One's Hat" (1908) |
| **Exam application** | Which choices prove the tone, and how do they serve the purpose? | Part 6: Dickens, *American Notes* (1842) |

### Tone Analysis in Five Steps

1. **Situation first.** Who is writing, to whom, and why now?
2. **Collect the evidence.** Mark charged diction, sentence shapes, punctuation, figures, and address.
3. **Name the tone precisely.** Use a modifier or a pair if one word is too blunt ("tender but firm").
4. **Track movement.** Find any pivot and the signals around it.
5. **Explain the function.** Say what this tone, or this shift, lets the writer accomplish with this audience.
`
    },
    {
      id: 'englangt7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student writes, "The mood of the passage is angry because the author is angry." What is the main problem with this sentence?',
            options: [
              'It blurs mood with tone and cites no choices',
              'It uses a tone word that is too precise for an AP essay',
              'It places the analysis of tone before any summary of content',
              'It treats tone as something that can change within a passage'
            ],
            correctAnswer: 0,
            explanation: 'Mood is the reader\'s feeling and tone is the writer\'s attitude; the sentence blurs them and cites no choices. "Angry" is imprecise rather than too precise, and analysis need not follow summary.'
          },
          {
            question: 'Which sentence best explains the function of a tone shift?',
            options: [
              'The tone shifts from calm to angry in the third paragraph of the essay.',
              'The writer is calm at first and then angry, which shows that he has strong feelings.',
              'Because the calm opening proves self-command, the later anger reads as justified.',
              'The passage contains several tones, including calm, angry, and sad, which make it interesting.'
            ],
            correctAnswer: 2,
            explanation: 'Only this sentence says what the shift accomplishes with the audience: the calm makes the anger credible. The others locate, restate, or list tones without explaining their function.'
          },
          {
            question: 'Which statement about voice is most accurate?',
            options: [
              'Voice is the stable personality projected by a writer\'s many repeated choices.',
              'Voice is the reader\'s emotional reaction to the final paragraph of a text.',
              'Voice is another name for the speaker\'s attitude in a single sentence.',
              'Voice is the volume and pitch used when a speech is delivered aloud.'
            ],
            correctAnswer: 0,
            explanation: 'Voice is the personality that emerges from a pattern of choices across a text. The reader\'s reaction is mood, the attitude in one sentence is tone, and delivery is not what the term means in written analysis.'
          }
        ]
      }
    },
    {
      id: 'englangt7-bank',
      type: 'text' as const,
      content: `
## A Tone-Word Bank with Fine Distinctions

| Word pair | The difference |
|---|---|
| **wry** vs **sardonic** | Wry is dryly amused; sardonic is mocking with a bitter, scornful edge |
| **sardonic** vs **sarcastic** | Sardonic is a general cast of scornful humor; sarcastic is irony aimed to wound a target |
| **indignant** vs **outraged** | Indignant is anger at injustice, often controlled; outraged is anger at its peak |
| **elegiac** vs **nostalgic** | Elegiac mourns a loss with dignity; nostalgic longs for a past it remembers fondly |
| **conciliatory** vs **deferential** | Conciliatory seeks to reduce conflict; deferential yields to the audience's authority |
| **earnest** vs **solemn** | Earnest is sincere and serious about a purpose; solemn is formal and grave, often ceremonial |
| **reverent** vs **admiring** | Reverent treats the subject as sacred; admiring values it highly without awe |
| **ambivalent** vs **neutral** | Ambivalent holds mixed feelings at once; neutral expresses no feeling |

### Tones Heard in This Topic

| Passage | Precise tone or voice |
|---|---|
| Stevenson (1877) | Witty, self-mocking voice; gently subversive toward the ideal of industry |
| Lincoln to Fanny McCullough (1862) | Grave toward death; tender but firm toward Fanny |
| Douglass to Wells (1892) | Humble and admiring toward Wells; indignant toward the nation |
| Douglass to Auld (1848) | Coolly ironic, then anguished, then dignified and defiant |
| Chesterton (1908) | Playfully mock-romantic surface, earnest point |
| Dickens (1842) | Courteous and fair-minded, then grave and solemn |
`
    },
    {
      id: 'englangt7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Choose the Exact Word** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A eulogy that mourns a statesman with dignity and restraint is best called ___',
            options: ['elegiac', 'nostalgic', 'sardonic', 'deferential']
          },
          {
            label: 'A letter that offers a compromise and stresses shared goals with an opponent is best called ___',
            options: ['conciliatory', 'deferential', 'solemn', 'reverent']
          },
          {
            label: 'An essay that both admires and distrusts new technology, without resolving the conflict, is best called ___',
            options: ['ambivalent', 'neutral', 'indignant', 'wry']
          }
        ],
        correctAnswers: ['elegiac', 'conciliatory', 'ambivalent'],
        hint1: 'Mourning with dignity, not fond longing for the past.',
        hint2: 'Reducing conflict, not yielding authority.',
        hint3: 'Mixed feelings held at once, not an absence of feeling.',
        explanation: 'Dignified mourning is elegiac, seeking compromise is conciliatory, and unresolved mixed feelings are ambivalent.'
      }
    },
    {
      id: 'englangt7-own-voice',
      type: 'text' as const,
      content: `
## Controlling Your Own Voice on Question 3

Skill 8.A asks you to use words, comparisons, and syntax strategically to convey a tone or style in your own argument. The readers of Question 3 are not grading personality, but a controlled voice makes your reasoning easier to trust.

| Voice problem | Example | Revision |
|---|---|---|
| **Overheated** | "Anyone who supports homework is completely clueless." | "Supporters of homework value practice, but they underestimate its cost to sleep." |
| **Flat and hedged** | "Homework is maybe sort of not always good in some ways." | "Homework helps when it is brief and targeted; beyond that, it crowds out rest." |
| **Borrowed formality** | "It is incontrovertibly manifest that homework is deleterious." | "Long homework assignments clearly do harm." |

### A Voice That Earns Trust

- **Measured confidence:** state claims plainly; qualify where the evidence really is limited.
- **Fairness:** describe opposing views in terms their holders would accept, as Dickens does with the "benevolent gentlemen."
- **Occasional wit:** one well-placed ironic phrase can show command, as Stevenson's "lèse-respectability" does, but sustained sarcasm makes readers resist.
- **Variety with purpose:** save a short sentence for the point you most want remembered, as Douglass does with "I am your fellow-man, but not your slave."

> 🔑 **AP Connection:** Row C (sophistication) on Question 3 can be earned by "employing a style that is consistently vivid and persuasive." A consistently controlled voice, not decorative vocabulary, is what that descriptor rewards.
`
    },
    {
      id: 'englangt7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review Across the Passages** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Stevenson\'s self-mockery and Dickens\'s praise of the prison officials have a similar rhetorical effect. Both',
            options: [
              'reveal that each writer secretly agrees with his opponents',
              'lower the resistance of skeptical readers to the argument',
              'shift the passage into a tone of open contempt for the reader',
              'show that each writer lacks confidence in his central claim'
            ],
            correctAnswer: 1,
            explanation: 'Each move makes the writer seem fair or unthreatening, so skeptical readers are more willing to hear the argument. Neither writer agrees with his opponents, shows contempt for readers, or doubts his claim.'
          },
          {
            question: 'Lincoln\'s "You are sure to be happy again" and Douglass\'s "I am your fellow-man, but not your slave" are alike chiefly in that each',
            options: [
              'uses a short, firm sentence to state the point that matters most',
              'uses irony to say the opposite of what it means',
              'addresses a reader the writer regards with contempt',
              'asks a rhetorical question to involve the reader'
            ],
            correctAnswer: 0,
            explanation: 'Both writers place their central point in a brief, plain declarative that sounds certain. Neither sentence is ironic, Lincoln addresses Fanny tenderly, and neither is a question.'
          },
          {
            question: 'Which pairing correctly matches a passage with the technique most responsible for its tone?',
            options: [
              'Chesterton: mock-romantic hyperbole that gives an ordinary flood a comic grandeur',
              'Lincoln: sarcasm that ridicules the reader\'s grief',
              'Dickens: understatement that makes solitary confinement seem minor',
              'Douglass to Wells: technical jargon that keeps emotion out'
            ],
            correctAnswer: 0,
            explanation: 'Chesterton turns floodwater into Venetian canals through hyperbole. Lincoln is tender rather than sarcastic, Dickens calls the system "cruel and wrong" rather than minor, and Douglass\'s letter is full of feeling.'
          },
          {
            question: 'A student claims that Douglass\'s letter to Auld "has a bitter tone throughout." Which response best evaluates this claim?',
            options: [
              'It is accurate, since every movement of the letter attacks Auld directly.',
              'It is too limited, since the letter moves from irony through anguish to calm.',
              'It is inaccurate, since the letter is warm and forgiving from beginning to end.',
              'It is accurate, since the letter is addressed to a man who enslaved its writer.'
            ],
            correctAnswer: 1,
            explanation: 'A single label misses the arc that gives the letter its force. The letter is not uniformly bitter or warm, and the identity of the addressee does not by itself determine the tone.'
          }
        ]
      }
    }
  ]
};
