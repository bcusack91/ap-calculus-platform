export const psychLanguagePart2Data = {
  topicSlug: 'language-intelligence',
  sections: [
    {
      id: 'langu2-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Language & Intelligence

**Part 2 of 7 — How Language Develops**

> 🔑 **Key Concept:** In every culture studied, children communicate with **gestures** such as pointing before they speak, then move through the same **stages**: cooing, babbling, the one-word stage, and telegraphic speech. Along the way they make predictable errors, such as **overgeneralization**, that show they are learning rules. Language develops most easily during a **sensitive period** in early childhood.

### The stages of spoken language

The ages below are approximate. Individual children vary by months, but the **order** of the stages is the same across languages.

| Stage | Typical start | What you hear | Example |
|-------|--------------|---------------|---------|
| **Cooing** | about 2 months | Vowel-like, pleasure sounds | "ooo," "aah" |
| **Babbling** | about 4 to 6 months | Repeated consonant-vowel syllables | "ba-ba-ba," "da-da-da" |
| **One-word stage** | about 12 months | Single words that stand for whole ideas | "Milk!" meaning "I want milk" |
| **Telegraphic speech** | about 18 to 24 months | Two or more words, mostly nouns and verbs, with small words left out | "Daddy go car," "Want juice" |
| **Fuller sentences** | 2 to 3 years and beyond | Longer sentences and rapid grammar growth, with overgeneralization errors | "I goed to the park" |

**Babbling narrows.** Early babbling includes sounds from many languages. By about 10 months, a baby's babbling uses mostly the sounds of the language spoken at home. Deaf infants who are exposed to sign language "babble" with their hands, repeating the building blocks of signs.

**Telegraphic speech** gets its name from old telegrams, where people paid by the word and left out every word that was not essential.
      `
    },
    {
      id: 'langu2-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Stages** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which sequence correctly orders language development from earliest to latest?',
            options: [
              'Cooing → one-word → babbling → telegraphic',
              'Babbling → cooing → one-word → telegraphic',
              'Cooing → babbling → one-word → telegraphic',
              'Cooing → telegraphic → babbling → one-word'
            ],
            correctAnswer: 2,
            explanation: 'Infants coo, then babble consonant-vowel syllables, then use single words around their first birthday, and then combine words in telegraphic speech. The order holds across languages even though exact ages vary.'
          },
          {
            question: 'A 20-month-old says "Mommy shoe" while pointing at her mother\'s shoe and "Doggie run" while watching a dog. These phrases are best described as',
            options: [
              'babbling',
              'cooing',
              'telegraphic speech',
              'overgeneralization'
            ],
            correctAnswer: 2,
            explanation: 'Two-word phrases made of key nouns and verbs, with small words such as "is" and "the" left out, are telegraphic speech. Babbling uses syllables with no word meaning, and overgeneralization is a grammar error.'
          }
        ]
      }
    },
    {
      id: 'langu2-s3-gestures-errors',
      type: 'text' as const,
      content: `
### 📚 Gestures Come First

Across all cultures, infants communicate with their hands before their words. Around 9 to 12 months, babies **point** to show an adult something interesting or to ask for an object, wave goodbye, and raise their arms to be picked up.

- Pointing shows that the child understands that another person can share attention with them, which is a foundation for words.
- Children often combine a word with a gesture, such as pointing at a cup while saying "drink," before they combine two words.
- Gestures do not disappear when speech begins. Adults in every culture gesture while they talk.

### 📚 Overgeneralization: Errors That Show Learning

**Overgeneralization** (also called overregularization) means applying a grammar rule to words that are exceptions to it.

| Rule the child learned | Error | Correct irregular form |
|------------------------|-------|------------------------|
| Add "-ed" for past tense | "goed," "runned," "eated" | went, ran, ate |
| Add "-s" for plural | "foots," "mouses," "sheeps" | feet, mice, sheep |

**Why these errors are evidence of rule learning:**
1. **No one models them.** Adults do not say "goed," so the child is not simply copying.
2. **They appear after correct forms.** Many children first say "went" correctly (a memorized word), then switch to "goed" once they learn the "-ed" rule, then return to "went" as they learn the exceptions. The temporary dip is a sign of progress.
3. **Children apply rules to new words.** Show a child a made-up creature called a "wug," then two of them, and the child says "wugs," a word they have never heard.

> 🔑 **AP Connection:** If a question describes a child applying a regular rule to an irregular word, the answer is overgeneralization, a normal step in development, not a language delay.
      `
    },
    {
      id: 'langu2-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Example to the Concept** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'A 5-month-old repeats "ga-ga-ga" while playing: _____', options: ['Cooing', 'Babbling', 'One-word stage', 'Telegraphic speech'] },
          { label: 'A 10-month-old points at a dog and looks back at her father: _____', options: ['Gesture', 'Babbling', 'Telegraphic speech', 'Overgeneralization'] },
          { label: 'A 3-year-old says "I catched two fishes": _____', options: ['Babbling', 'Telegraphic speech', 'Overgeneralization', 'One-word stage'] }
        ],
        correctAnswers: ['Babbling', 'Gesture', 'Overgeneralization'],
        hint1: 'Repeated consonant-vowel syllables with no meaning.',
        hint2: 'Communicating with the hands before words.',
        hint3: 'Regular rules ("-ed," "-s") applied to irregular words.',
        explanation: 'Repeated syllables are babbling. Pointing to share attention is a gesture, which appears before first words in all cultures. "Catched" and "fishes" apply the past-tense and plural rules too widely, which is overgeneralization.'
      }
    },
    {
      id: 'langu2-s5-sensitive-period',
      type: 'text' as const,
      content: `
### 📚 Sensitive Periods for Language

Research suggests that **critical or sensitive periods** in infancy and childhood have strong effects on development, especially for language (CED 3.2.B.4).

| Term | Meaning | Example |
|------|---------|---------|
| **Critical period** | A window that closes sharply; the skill may never develop normally if it is missed | Some birds imprint on the first moving object they see shortly after hatching |
| **Sensitive period** | A window when learning is easiest; later learning is possible but harder and less complete | Native-like grammar and accent are easiest to acquire in early childhood |

Language fits the sensitive-period pattern best. Three lines of evidence:

1. **Speech-sound tuning.** Young infants can tell apart speech sounds from many languages. By around their first birthday, they become much better at the sounds of their home language and worse at sounds their language does not use.
2. **Age of second-language learning.** People who move to a new country as young children usually reach native-like grammar and accent. People who arrive as teens or adults can become fluent, but they usually keep an accent and make more grammar errors.
3. **Late first-language exposure.** Deaf children who are not exposed to any language, signed or spoken, until later childhood tend to have lasting difficulty with grammar, even after years of practice. Children exposed to sign language from birth reach milestones on the usual schedule.

> 🔑 **AP Connection:** A sensitive period does NOT mean learning stops. Adults learn new languages every day. It means early childhood is when complete, native-like language comes most easily.
      `
    },
    {
      id: 'langu2-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'An 8-year-old girl and her 35-year-old father move to a new country. After four years, she speaks the new language like a native, while he is fluent but has a noticeable accent. This difference best illustrates',
            options: [
              'a sensitive period in development',
              'overgeneralization of grammar',
              'the arbitrary nature of symbols',
              'the telegraphic speech stage'
            ],
            correctAnswer: 0,
            explanation: 'Native-like grammar and accent come most easily when a language is learned in childhood, which fits a sensitive period. The father still learned the language, which is why sensitive is a better word than critical here.'
          },
          {
            question: 'A child correctly said "ran" at age 2 but says "runned" at age 3. Her parents worry she is regressing. Which response best reflects research on language development?',
            options: [
              'She is copying an error she heard from other children at preschool',
              'She has learned the past-tense rule and is applying it too widely',
              'She is past the sensitive period and is losing some vocabulary',
              'She is returning to babbling because she has learned too many words'
            ],
            correctAnswer: 1,
            explanation: 'Children often use a memorized irregular form first, then overgeneralize once they learn the "-ed" rule, then master the exceptions. The new error shows rule learning, not regression.'
          },
          {
            question: 'Researchers find that 6-month-old infants from English-speaking homes can tell apart two Hindi speech sounds, but most of the same infants cannot do so at 12 months. This finding best supports the idea that',
            options: [
              'infants lose the ability to hear any sounds outside their home language',
              'babbling begins only after infants stop noticing differences in sounds',
              'early experience tunes infants toward the sounds of their home language',
              'infants learn to tell sounds apart only through rewards from caregivers'
            ],
            correctAnswer: 2,
            explanation: 'Infants start out able to tell many sounds apart and become specialized for the sounds they hear every day, a pattern consistent with a sensitive period. They can still hear the Hindi sounds; they simply have more trouble telling them apart.'
          }
        ]
      }
    },
    {
      id: 'langu2-s7-misconceptions',
      type: 'text' as const,
      content: `
### 🎯 AP Exam Strategy: Language Development Traps

| Common Mistake | Why It's Wrong | Correct Understanding |
|----------------|---------------|----------------------|
| Memorizing exact ages | Ages vary from child to child | Know the ORDER: cooing, babbling, one word, telegraphic |
| Calling overgeneralization a delay | It shows the child has learned a rule | "Goed" means the "-ed" rule is in place |
| Thinking gestures are a substitute for "real" language | Gestures develop alongside and before words in every culture | Pointing is an early, universal step |
| Treating cooing and babbling as the same | Cooing is vowel-like; babbling adds consonants | "Ooo" is cooing; "ba-ba" is babbling |
| Saying adults cannot learn a new language | A sensitive period makes learning harder, not impossible | Late learners can become fluent but rarely native-like |

> **AP Tip:** On data questions, look for whether a skill improves or declines with age of exposure. A steady decline in grammar scores as age of arrival rises is the classic sensitive-period pattern.
      `
    }
  ]
}
