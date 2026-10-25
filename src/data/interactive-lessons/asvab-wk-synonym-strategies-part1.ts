export const asvabWkSynonymStrategiesPart1Data = {
  topicSlug: 'asvab-wk-synonym-strategies',
  sections: [
    {
      id: 'wkss-p1-intro',
      type: 'text' as const,
      content: `# 🔤 Synonyms, Connotation and Test Strategy

**Part 1 of 7 — The Word-Alone Question**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **The word-alone question** |
| 2 | Precise meaning and part of speech |
| 3 | Connotation: positive, negative or neutral |
| 4 | Look-alike words and opposite traps |
| 5 | Learning words in families |
| 6 | Pacing, elimination and guessing |
| 7 | Mixed mastery set |

### What You Will See

Word Knowledge on the CAT-ASVAB has **15 questions in 9 minutes**, about **36 seconds** each. Some questions put the word in a sentence. Others give you the word completely alone:

> **Grim** most nearly means
> - gloomy
> - wealthy
> - tiny
> - eager

No sentence, no clue, four choices. You need the **synonym**: the choice closest in meaning to the test word.

### Why This Topic Pays Off

The AFQT sum is **AR + MK + 2 × VE**, and VE is a weighted blend of Word Knowledge and Paragraph Comprehension, with WK counting more. So verbal skill is half of the AFQT sum, and Word Knowledge carries the larger share of that half. VE also feeds job line scores such as the Army's GT (AR + VE) and the Air Force's General (AR + VE) and Administrative (MK + VE) scores.

Vocabulary can feel like something you either have or you don't. It isn't. This lesson gives you methods for three situations:

| You… | Strategy |
|:---|:---|
| **know** the word | Answer in a few seconds and bank the time |
| **sort of know** the word | Recall a phrase you have heard it in, then use connotation and part of speech |
| **don't know** the word | Eliminate what you can, then make an educated guess and move on |`
    },
    {
      id: 'wkss-p1-example',
      type: 'text' as const,
      content: `## Worked Example: Sort-of-Knowing a Word

**Grim** most nearly means: *gloomy · wealthy · tiny · eager*

You may never have looked up *grim*, but you have heard it:

- "The news was **grim**." (bad, depressing)
- "He wore a **grim** expression." (serious, stern)
- "the **Grim** Reaper" (death)

Every one of those phrases is **dark and serious**. Now scan the choices: *wealthy*, *tiny* and *eager* have nothing dark about them. **Gloomy** is the match.

### The "Phrase Memory" Trick

Your brain stores words in phrases, not definitions. When a word seems familiar but you can't define it, ask:

1. **Where have I heard it?** A song, a news headline, a movie, a sign, a sergeant.
2. **Was it good or bad?** Even a vague sense of positive or negative eliminates choices.
3. **What part of speech was it?** A thing, an action or a description?

> **Key Fact:** "Most nearly means" asks for the **closest** choice, not a perfect definition. If none of the choices is exactly what you had in mind, choose the one that is nearest.`
    },
    {
      id: 'wkss-p1-warmup',
      type: 'multiple-choice' as const,
      content: '**Warm-up.** 🎯 Word-alone questions. Pick the choice closest in meaning to the bold word.',
      exercise: {
        questions: [
          {
            question: '**Amiable** most nearly means',
            options: ['clever', 'boastful', 'friendly', 'worried'],
            correctAnswer: 2,
            explanation: 'Amiable means friendly and pleasant: an amiable neighbor. It shares a root with amigo (friend). Clever and boastful describe other personality traits.'
          },
          {
            question: '**Timid** most nearly means',
            options: ['tired', 'helpful', 'rude', 'fearful'],
            correctAnswer: 3,
            explanation: 'Timid means shy and easily frightened: a timid puppy hides behind the couch. Helpful and rude describe how someone treats others, not fear.'
          },
          {
            question: '**Vast** most nearly means',
            options: ['ancient', 'huge', 'quiet', 'empty'],
            correctAnswer: 1,
            explanation: 'Vast means extremely large: the vast Pacific Ocean, a vast desert. Empty is tempting, since vast places often are, but vast describes size, not emptiness.'
          }
        ]
      }
    },
    {
      id: 'wkss-p1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Word-alone questions give you **no sentence**: "X most nearly means"
- WK: **15 questions, 9 minutes**, about 36 seconds each; VE counts **twice** in the AFQT
- Know it → answer fast. Sort of know it → **phrase memory**, good or bad, part of speech. Don't know it → **eliminate and guess**
- "Most nearly" means **closest**, not perfect

> **Up Next:** Part 2 — choosing the most precise synonym and matching the part of speech.`
    }
  ]
};
