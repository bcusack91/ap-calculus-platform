export const englitShortFiction3Part4Data = {
  topicSlug: 'englit-short-fiction-3',
  sections: [
    {
      id: 'englitsh4-intro',
      type: 'text' as const,
      content: `
# 🧭 Short Fiction III

**Part 4 of 7 — Narrative Distance and Free Indirect Discourse**

---

| Section |
|---------|
| 🎙️ Three Ways to Report a Mind |
| Close Reading 1: Inside and Outside Miss Brill |
| Close Reading 2: The Last Paragraph of "The Dead" |
| Writing About a Blended Voice |

> 🔑 **Key Concept:** **Narrative distance** is how close the narration stands to a character's mind. In **free indirect discourse**, a third-person narrator takes on a character's own words, rhythms and feelings without saying "she thought." Skill 4.C asks you to find the details, diction and syntax that reveal whose perspective a sentence carries. In much modern short fiction, the answer is "both the narrator's and the character's at once."
`
    },
    {
      id: 'englitsh4-modes',
      type: 'text' as const,
      content: `
## 🎙️ Three Ways to Report a Mind

Here is one moment from "Miss Brill" written three ways. Only the third is Mansfield's sentence; the first two are rewritten for comparison.

| Mode | Example | Who is "speaking"? |
|---|---|---|
| **Direct discourse** | She thought, "How I love sitting here!" | The character, in her own words, inside quotation marks |
| **Indirect discourse** | She thought that she loved sitting there. | The narrator, summarizing the character's thought |
| **Free indirect discourse** | How she loved sitting here, watching it all! | The narrator's grammar (third person, past tense) carrying the character's voice |

### Signals of free indirect discourse

| Signal | Example from "Miss Brill" |
|---|---|
| Exclamations a narrator would not make | "Dear little thing! It was nice to feel it again." |
| Questions the character is asking herself | "Wasn't the conductor wearing a new coat, too? She was sure it was new." |
| The character's own pet words and idiom | "Little rogue!" (of her fur) |
| "Here," "now" or "to-day" from the character's point in time | "How she loved sitting here, watching it all!" |
| Self-correction and hesitation | "something light and sad—no, not sad, exactly—something gentle" |

Why it matters: in free indirect discourse the narrator neither endorses nor corrects the character openly. The reader has to decide how far to trust what the sentence claims. That gap is where **irony** and **sympathy** live together.
`
    },
    {
      id: 'englitsh4-brill',
      type: 'text' as const,
      content: `
## Close Reading 1: Inside and Outside Miss Brill

Almost all of "Miss Brill" is told this way. Watch what happens when she decides the whole park is a play:

> Even she had a part and came every Sunday. No doubt somebody would have noticed if she hadn't been there; she was part of the performance after all.
>
> — Katherine Mansfield, "Miss Brill," 1920

"No doubt" is her certainty, not the narrator's. The reader, who has watched nobody in the park notice her, hears the hope behind the confidence.

### Denials that give her away

Twice the narration catches her pushing a word away:

| Passage | What she will not let herself feel |
|---|---|
| "something light and sad—no, not sad, exactly—something gentle seemed to move in her bosom" | Sadness, as she sits alone with her fur |
| "a faint chill—a something, what was it?—not sadness—no, not sadness—a something that made you want to sing" | Sadness again, inside the music she loves |

A narrator standing far off would simply tell us she was sad. Mansfield stays close enough that we hear the denial, and readers recognize the feeling she refuses.

### The one place the narrator steps back

> Yes, we understand, we understand, she thought—though what they understood she didn't know.

The first half is pure Brill: rapt and repetitive. The clause after the dash is the narrator's, quietly observing that her sense of union with the crowd has no content. For a moment the distance opens, just before the young couple's cruelty opens it for good.
`
    },
    {
      id: 'englitsh4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In context, the phrase "something light and sad—no, not sad, exactly—something gentle" primarily serves to',
            options: [
              'show the narrator fixing an earlier error in the description',
              'reveal Miss Brill pushing away a feeling she will not yet admit',
              'foreshadow the cold weather that later spoils her afternoon',
              'contrast Miss Brill\'s mood with the band\'s cheerful music'
            ],
            correctAnswer: 1,
            explanation: 'The self-correction belongs to Miss Brill, voiced through free indirect discourse, and it shows her refusing the word "sad." The narrator is not fixing a mistake, the weather never spoils the day, and the band has not yet been described.'
          },
          {
            question: 'The sentence "Yes, we understand, we understand, she thought—though what they understood she didn\'t know" differs from most of the story\'s narration in that it',
            options: [
              'shifts into first-person narration for the only time',
              'briefly opens a distance between narrator and character',
              'reports a real conversation between Miss Brill and the crowd',
              'presents the young couple\'s view of Miss Brill early'
            ],
            correctAnswer: 1,
            explanation: 'After the dash, the narrator comments on something Miss Brill does not grasp, which the close narration elsewhere rarely does. The "we" is inside her thought, not a change of narrator; no one speaks, and the couple has not yet arrived.'
          }
        ]
      }
    },
    {
      id: 'englitsh4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Mode** 🔍

Each sentence reports the same thought. Which mode does each use?
      `,
      exercise: {
        dropdowns: [
          {
            label: 'She thought, "How I love sitting here!" uses ___',
            options: ['direct discourse', 'indirect discourse', 'free indirect discourse', 'objective narration']
          },
          {
            label: 'She thought that she loved sitting there. uses ___',
            options: ['direct discourse', 'indirect discourse', 'free indirect discourse', 'objective narration']
          },
          {
            label: 'How she loved sitting here, watching it all! uses ___',
            options: ['direct discourse', 'indirect discourse', 'free indirect discourse', 'objective narration']
          }
        ],
        correctAnswers: ['direct discourse', 'indirect discourse', 'free indirect discourse'],
        hint1: 'Quotation marks plus "I" means the character speaks for herself.',
        hint2: 'A "that" clause after "thought" is the narrator summarizing.',
        hint3: 'Third person and past tense, yet an exclamation and "here" from her point of view.',
        explanation: 'Quoted first-person thought is direct discourse, a "that" summary is indirect discourse, and the exclamation in third-person past tense, with no "she thought," is free indirect discourse.'
      }
    },
    {
      id: 'englitsh4-dead',
      type: 'text' as const,
      content: `
## Close Reading 2: The Last Paragraph of "The Dead"

Joyce's narrator borrows characters' voices from the first sentence:

> Lily, the caretaker's daughter, was literally run off her feet.
>
> — James Joyce, "The Dead," *Dubliners*, 1914

She was not *literally* run off her feet. "Literally" is the kind of word Lily herself would use, and the narration has picked it up. The story will keep sliding between voices like this.

By the last page Gabriel lies beside his sleeping wife, having learned that she once loved a boy, Michael Furey, who died for her. The narration moves through his mind without tags: "Poor Aunt Julia!" and "One by one they were all becoming shades." Then:

> The time had come for him to set out on his journey westward. Yes, the newspapers were right: snow was general all over Ireland. It was falling on every part of the dark central plain, on the treeless hills, falling softly upon the Bog of Allen and, farther westward, softly falling into the dark mutinous Shannon waves. It was falling, too, upon every part of the lonely churchyard on the hill where Michael Furey lay buried. It lay thickly drifted on the crooked crosses and headstones, on the spears of the little gate, on the barren thorns. His soul swooned slowly as he heard the snow falling faintly through the universe and faintly falling, like the descent of their last end, upon all the living and the dead.

| Feature | Whose voice? | Effect |
|---|---|---|
| "Yes, the newspapers were right" | Gabriel's drowsy assent | We are inside his mind as it drifts |
| The survey from the central plain westward to the Shannon | A widening view no single person could see | The perspective expands beyond Gabriel's room |
| "falling softly... softly falling"; "falling faintly... faintly falling" | Neither and both: a rhythm of chiasmus (reversed repetition) | A hushed, circling music as his "identity was fading out" |
| "upon all the living and the dead" | The story's final judgment, shared by Gabriel and narrator | Unites the party guests, the aunts and Michael Furey under one image |

"Westward" carries the story's earlier quarrels. Miss Ivors urged Gabriel to visit the west instead of the Continent; Gretta lived as a girl in Galway, and Michael Furey lies buried in the west, in Oughterard. Because the voice belongs to Gabriel and to the narrator at once, readers disagree about whether the ending is a reconciliation, a surrender or an approach to death. Part 5 shows how to argue inside that kind of ambiguity.
`
    },
    {
      id: 'englitsh4-writing',
      type: 'text' as const,
      content: `
## Writing About a Blended Voice

| Weak move | Stronger move |
|---|---|
| "The narrator says Miss Brill is happy." | "The narration voices Miss Brill's delight in her own exclamations, so her happiness reaches us unfiltered and unquestioned." |
| "Joyce uses third person." | "Joyce's third-person narration absorbs Gabriel's drowsy 'Yes,' so the vast closing view of Ireland reads as both his vision and the story's verdict." |
| Treating every sentence as the author's opinion | Asking, sentence by sentence, whose words these are |

> 🔑 **AP Connection:** Multiple-choice questions often ask what a phrase "suggests about" a character or whose perspective a detail reflects. When the narration is free indirect, the right answer usually describes the character's view, and the wrong answers treat it as objective fact. In essays, saying "the narration adopts her voice here" is precise analysis of point of view.
`
    },
    {
      id: 'englitsh4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The word "literally" in the sentence "Lily, the caretaker\'s daughter, was literally run off her feet" is best explained as',
            options: [
              'Lily\'s own idiom, picked up by the narration',
              'the narrator\'s claim that Lily has been injured on the stairs',
              'Gabriel\'s ironic judgment of how the household is managed',
              'evidence that the narrator is unreliable throughout the story'
            ],
            correctAnswer: 0,
            explanation: 'The narration picks up the idiom of the character it describes, a small instance of free indirect style. No one is injured, Gabriel has not yet arrived, and one borrowed word does not make the narrator unreliable.'
          },
          {
            question: 'In the final paragraph, the phrase "Yes, the newspapers were right" suggests that the narration',
            options: [
              'is quoting a newspaper article about the snowstorm word for word',
              'is following Gabriel\'s thoughts as he drifts toward sleep',
              'records words Gabriel speaks aloud to Gretta as she sleeps',
              'has moved into an epilogue set many years after the party'
            ],
            correctAnswer: 1,
            explanation: '"Yes" is Gabriel\'s inward assent, rendered without quotation marks or a "he thought" tag. He speaks nothing aloud, the newspapers are only recalled, and the scene is the same night.'
          },
          {
            question: 'The reversed repetition in "falling faintly through the universe and faintly falling" contributes to the ending chiefly by',
            options: [
              'stressing the danger the snow poses to Gabriel\'s journey',
              'creating a hushed, circling rhythm as his mind dissolves',
              'suggesting the narrator is unsure what is happening outside',
              'signaling that the snow is about to stop for the night'
            ],
            correctAnswer: 1,
            explanation: 'The chiasmus slows and softens the sentence, matching Gabriel\'s fading sense of identity as his soul "swooned slowly." It is not about travel danger, narrative uncertainty or the snow ending.'
          }
        ]
      }
    }
  ]
}
