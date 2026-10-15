export const englitNarrativePerspectivePart3Data = {
  topicSlug: 'englit-narrative-perspective',
  sections: [
    {
      id: 'englitna3-intro',
      type: 'text' as const,
      content: `
# 🔍 Narrative Perspective

**Part 3 of 7 — The Narrative Distance Scale**

---

| Section |
|---------|
| 📖 Six Ways to Present a Mind |
| Madame Bovary: One Passage, Four Distances |
| Free Indirect Discourse and the Dual Voice |
| Distance, Sympathy and Irony |
| Writing About Distance |

> 🔑 **Key Concept:** **Narrative distance** is how close the narration stands to a character's mind. The Unit 7 short-fiction lesson introduced free indirect discourse with "Miss Brill" and "The Dead." This part places that technique on a full scale and shows how a writer moves along it, sometimes within a sentence, to control sympathy and irony (skills **4.C**, details and diction that reveal a perspective, and **5.B**, the function of specific words and phrases).
`
    },
    {
      id: 'englitna3-scale',
      type: 'text' as const,
      content: `
## 📖 Six Ways to Present a Mind

The scale runs from the narrator's language (most distant) to the character's own unfiltered words (closest). The terms *psychonarration*, *quoted monologue* and *narrated monologue* come from the critic Dorrit Cohn's *Transparent Minds* (1978); *narrated monologue* is her name for free indirect discourse.

| Distance | Technique | How to spot it | Model sentence about a disappointed wife |
|---|---|---|---|
| Most distant | **Narrative report** | Actions only | She closed the book and looked out of the window. |
| ↓ | **Psychonarration** | The narrator summarizes feelings in the narrator's vocabulary | She resented her husband's contentment. |
| ↓ | **Indirect thought** | A tag plus "that" and a shift of tense and person | She thought that she must have been mistaken. |
| ↓ | **Free indirect discourse (FID)** | Third person and past tense, but the character's words, questions and exclamations; no tag | Was this, then, what marriage meant? |
| ↓ | **Direct (quoted) thought** | Quotation marks or a tag, first person, present tense | "I have made a mistake," she thought. |
| Closest | **Interior monologue** | First person, present, no tags or quotation marks, often unpunctuated | mistake that was the word mistake all of it |

The last rung belongs to Part 4. This part concentrates on the middle of the scale, where most AP passages live.
`
    },
    {
      id: 'englitna3-bovary',
      type: 'text' as const,
      content: `
## Madame Bovary: One Passage, Four Distances

Gustave Flaubert's *Madame Bovary* (1857) follows Emma, a doctor's wife in provincial France whose expectations of love come from romantic novels. Here she has just begun an affair. (English translation by Eleanor Marx-Aveling, 1886.)

> But when she saw herself in the glass she wondered at her face. Never had her eyes been so large, so black, of so profound a depth. Something subtle about her being transfigured her. She repeated, "I have a lover! a lover!" delighting at the idea as if a second puberty had come to her. So at last she was to know those joys of love, that fever of happiness of which she had despaired! She was entering upon marvels where all would be passion, ecstasy, delirium.
>
> Then she recalled the heroines of the books that she had read, and the lyric legion of these adulterous women began to sing in her memory with the voice of sisters that charmed her.
>
> — Gustave Flaubert, *Madame Bovary*, 1857, tr. Eleanor Marx-Aveling, 1886

### Mapping the Distances

| Sentence | Rung | Clue |
|---|---|---|
| "when she saw herself in the glass she wondered at her face" | Psychonarration | The narrator reports her state |
| "Never had her eyes been so large, so black, of so profound a depth." | FID, sliding toward her | Her own excited gaze at her reflection; the inverted "Never had" carries her wonder |
| "She repeated, 'I have a lover! a lover!'" | Direct speech | Quotation marks, first person, present tense |
| "delighting at the idea as if a second puberty had come to her" | Narrator's comment | A simile Emma would never use about herself |
| "So at last she was to know those joys of love... passion, ecstasy, delirium." | FID | Exclamation and romance-novel clichés in third person, past tense |
| "Then she recalled the heroines of the books that she had read" | Psychonarration | The narrator steps back and names the source of her clichés |
`
    },
    {
      id: 'englitna3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `The sentence "So at last she was to know those joys of love, that fever of happiness of which she had despaired!" is best classified as`,
            options: [
              `direct thought, because it is spoken aloud by Emma`,
              `free indirect discourse in Emma's idiom`,
              `narrative report of Emma's actions in the room`,
              `the narrator's general statement about love`
            ],
            correctAnswer: 1,
            explanation: `The sentence keeps the third person and past tense but uses Emma's exclamation and her romantic phrasing, which marks free indirect discourse. There are no quotation marks, it reports no action, and it voices her hopes rather than the narrator's views.`
          },
          {
            question: `In context, the phrase "as if a second puberty had come to her" primarily serves to`,
            options: [
              `let the narrator view Emma's rapture with ironic detachment`,
              `report the exact words Emma repeats to herself in the mirror`,
              `show Emma's own mature judgment of her childish excitement`,
              `introduce the heroines of the novels Emma has read as a girl`
            ],
            correctAnswer: 0,
            explanation: `The comparison is the narrator's, not Emma's, and it frames her joy as adolescent, opening a gap between her excitement and our view of it. Emma's own words are "I have a lover! a lover!", and she shows no self-critical judgment here.`
          }
        ]
      }
    },
    {
      id: 'englitna3-dual',
      type: 'text' as const,
      content: `
## Free Indirect Discourse and the Dual Voice

FID is sometimes called a **dual voice**: the words are the character's, but the grammar is the narrator's. Because of that blend, FID can carry sympathy and irony at the same time. Here is Emma judging her husband, Charles:

> Charles's conversation was commonplace as a street pavement, and everyone's ideas trooped through it in their everyday garb, without exciting emotion, laughter, or thought...
>
> A man, on the contrary, should he not know everything, excel in manifold activities, initiate you into the energies of passion, the refinements of life, all mysteries? But this one taught nothing, knew nothing, wished nothing. He thought her happy; and she resented this easy calm, this serene heaviness, the very happiness she gave him.
>
> — Gustave Flaubert, *Madame Bovary*, 1857, tr. Eleanor Marx-Aveling, 1886

### A Worked Reading

| Detail | Distance | What it does |
|---|---|---|
| "commonplace as a street pavement" | Ambiguous: narrator or Emma? | The simile could be the narrator's verdict or Emma's scorn; FID lets it be both |
| "should he not know everything...?" | FID | Her rhetorical question, full of romance ideals, in third person |
| "this one" | FID | Her contempt: Charles is not even named |
| "taught nothing, knew nothing, wished nothing" | FID | The rhythm of her exasperation |
| "He thought her happy; and she resented this easy calm" | Psychonarration | The narrator steps back and names her feeling, exposing its unfairness: she resents him for the happiness *she* gives him |

**The double effect.** We feel Emma's suffocation from inside, and we also see her clichés ("the energies of passion, the refinements of life, all mysteries") from outside. Flaubert never has to say "Emma was foolish." The distance does the judging.
`
    },
    {
      id: 'englitna3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Place It on the Scale** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: `"She repeated, 'I have a lover! a lover!'": ___`,
            options: ['direct speech or thought', 'free indirect discourse', 'psychonarration', 'narrative report']
          },
          {
            label: `"But this one taught nothing, knew nothing, wished nothing.": ___`,
            options: ['free indirect discourse', 'direct speech or thought', 'psychonarration', 'narrative report']
          },
          {
            label: `"Then she recalled the heroines of the books that she had read": ___`,
            options: ['psychonarration', 'free indirect discourse', 'direct speech or thought', 'interior monologue']
          }
        ],
        correctAnswers: ['direct speech or thought', 'free indirect discourse', 'psychonarration'],
        hint1: 'Look for quotation marks and the first person.',
        hint2: 'Her scornful phrasing, but in the third person and past tense, with no tag.',
        hint3: 'The narrator summarizes what happens in her mind.',
        explanation: 'Quoted first-person words are direct speech; "this one taught nothing" is Emma\'s scorn in the narrator\'s grammar (FID); and "she recalled the heroines" is the narrator reporting her mental activity (psychonarration).'
      }
    },
    {
      id: 'englitna3-effects',
      type: 'text' as const,
      content: `
## Distance, Sympathy and Irony

| Move | Typical effect |
|---|---|
| Moving **closer** (psychonarration → FID → direct thought) | Intensity, sympathy, immediacy; we feel what the character feels |
| Moving **away** (FID → psychonarration → report) | Perspective, judgment, often irony; we see the character from outside |
| **Sudden** retreat after a burst of FID | A deflating effect: the character's grand feeling is shown to be small or borrowed |
| Staying in FID for a long stretch | The character's assumptions start to feel like facts, until something exposes them |

### Common Misconceptions

- **"Any third-person sentence about thoughts is FID."** "She resented his calm" is psychonarration. FID needs the character's own idiom, questions or exclamations.
- **"FID means the narrator agrees with the character."** It often does the opposite: it lets the narrator quote a character's assumptions with silent irony.
- **"Distance stays fixed through a passage."** Skilled writers change distance from sentence to sentence. Track every shift.
`
    },
    {
      id: 'englitna3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Apply It** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `The final sentence, "He thought her happy; and she resented this easy calm, this serene heaviness, the very happiness she gave him," most directly`,
            options: [
              `continues Emma's rhetorical questions about what a good husband should be`,
              `shows that Charles has finally noticed his wife's unhappiness`,
              `steps back from Emma's mind to expose how unfair her feeling is`,
              `quotes the exact words Emma uses when she complains to Charles`
            ],
            correctAnswer: 2,
            explanation: `The narrator names her feeling from outside and points out that she resents the very happiness she creates, which reveals its unfairness. The sentence asks no questions, Charles "thought her happy," and nothing is quoted.`
          },
          {
            question: `Which revision best states the effect of Flaubert's free indirect discourse in these passages?`,
            options: [
              `Flaubert uses free indirect discourse in order to show what Emma thinks about her husband.`,
              `Flaubert writes in the third person, so Emma's views are reported objectively.`,
              `By using FID, Flaubert proves that Charles is as dull as Emma believes him.`,
              `Flaubert's FID lets readers share Emma's longing and also see that it is borrowed.`
            ],
            correctAnswer: 3,
            explanation: `This statement names the double effect: inside sympathy and outside irony. The others merely label the technique, mistake third person for objectivity, or treat Emma's opinion as fact.`
          }
        ]
      }
    },
    {
      id: 'englitna3-writing',
      type: 'text' as const,
      content: `
## Writing About Distance

| Weak | Strong |
|---|---|
| "Flaubert uses free indirect discourse." | "Flaubert lets Emma's romantic clichés ('passion, ecstasy, delirium') run unchecked in free indirect discourse, then steps back to name 'the heroines of the books that she had read,' so her rapture is revealed as a borrowed script." |
| "The narrator describes Emma's feelings." | "The shift from Emma's scornful 'this one' to the narrator's cool 'she resented this easy calm' turns her complaint against her." |

> 🔑 **AP Connection:** Section I often asks whose attitude a phrase conveys: the narrator's or the character's. Ask which rung of the scale the sentence sits on. If the words sound like the character but there is no tag or quotation mark, you are probably in FID, and the answer may be "both."
`
    }
  ]
}
