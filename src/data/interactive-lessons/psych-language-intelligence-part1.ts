export const psychLanguagePart1Data = {
  topicSlug: 'language-intelligence',
  sections: [
    {
      id: 'langu1-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Language & Intelligence

**Part 1 of 7 — Language Structure & Development**

Language is the crown jewel of human cognition — no other species combines sounds into an infinite number of meaningful sentences. Understanding how language is built from its smallest units to full sentences is essential for AP Psychology.

| Term | Definition | Example |
|------|-----------|---------|
| **Phoneme** | Smallest unit of sound in a language | /b/ and /p/ are different phonemes ("bat" vs. "pat") |
| **Morpheme** | Smallest unit of meaning | "unhappiness" has 3 morphemes: un- + happy + -ness |
| **Syntax** | Rules for arranging words into grammatical sentences | "The dog bit the man" ≠ "The man bit the dog" |
| **Semantics** | The meaning of words and sentences | "bark" means different things for dogs vs. trees |
| **Pragmatics** | Social rules of language use (context, tone) | Saying "Nice job!" sarcastically vs. sincerely |

### 🗣️ Real-World Example

When you say "cats," you use 4 phonemes (/k/ /æ/ /t/ /s/) and 2 morphemes ("cat" + "s" for plural). Syntax tells you "The cats are sleeping" is grammatical, while "Cats the sleeping are" is not. Semantics gives it meaning, and pragmatics tells you when it's appropriate to say it.

> **Why This Matters for the AP Exam:** The phoneme-morpheme distinction is one of the most commonly tested concepts. Remember: phonemes are about SOUND, morphemes are about MEANING. English has ~40 phonemes but hundreds of thousands of morphemes.
      `
    },
    {
      id: 'langu1-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The word "restarted" contains how many morphemes?',
            options: [
              'One (restarted is a single unit)',
              'Two (re- and started)',
              'Three (re- + start + -ed)',
              'Four (r + e + start + ed)'
            ],
            correctAnswer: 2,
            explanation: 'Correct! "Restarted" has 3 morphemes: the prefix "re-" (meaning again), the root "start," and the suffix "-ed" (past tense). Morphemes are the smallest meaningful units — individual letters are not morphemes unless they carry meaning (like "s" for plural).'
          },
          {
            question: 'A child says "I goed to the store." This error demonstrates understanding of which language component?',
            options: [
              'Phonemics — the child is mispronouncing "went"',
              'Syntax — the child has applied a grammatical rule too broadly',
              'Semantics — the child does not understand the meaning of "go"',
              'Pragmatics — the child is using language in the wrong context'
            ],
            correctAnswer: 1,
            explanation: 'This is an example of overgeneralization (also called overregularization) — the child has learned the syntactic rule of adding "-ed" for past tense and applied it to an irregular verb. This error actually shows the child IS learning grammar rules, not that they are failing.'
          }
        ]
      }
    },
    {
      id: 'langu1-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Deep Dive: Language Development Milestones

Babies are born with remarkable linguistic abilities. They can distinguish phonemes from ALL languages — a skill they lose by about 10 months as their brains "tune in" to their native language.

| Age | Stage | Description | Example |
|-----|-------|-------------|---------|
| 0–4 months | **Cooing** | Vowel-like sounds | "oooh," "aaah" |
| 4–6 months | **Babbling** | Consonant-vowel combos; all languages sound the same | "bababa," "mamama" |
| 10 months | **Babbling narrows** | Sounds match native language | English babbling vs. Mandarin babbling differ |
| 12 months | **One-word (holophrastic)** | Single words convey whole ideas | "Milk!" = "I want milk" |
| 18–24 months | **Two-word (telegraphic)** | Noun-verb combos, no grammar words | "Daddy go," "Want cookie" |
| 24–36 months | **Sentences** | Rapid grammar acquisition, overgeneralization | "I goed to store" |

### Key Concepts in Language Development

**Overregularization (overgeneralization):** Children apply grammatical rules too broadly — saying "foots" instead of "feet" or "goed" instead of "went." Ironically, this proves they ARE learning rules, not just imitating.

**Parentese (child-directed speech):** The exaggerated, high-pitched speech adults use with babies. It is NOT "baby talk" — parentese uses real words with simplified grammar and exaggerated intonation, helping infants identify word boundaries.

**Receptive vs. Expressive language:** Babies understand (receive) far more words than they can produce (express). A 12-month-old may say 2–3 words but understand 50+.
      `
    },
    {
      id: 'langu1-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'What are the smallest units of SOUND in a language called?', answer: 'phonemes' },
          { label: 'What is it called when a child says "goed" instead of "went"?', answer: 'overregularization' },
          { label: 'At what age does babbling typically begin?', answer: '4 months' }
        ]
      }
    },
    {
      id: 'langu1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Language Stage** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: '4–6 months old, produces "bababa"', options: ['Cooing', 'Babbling', 'Holophrastic stage', 'Telegraphic speech'] },
          { label: '"Want cookie" — two-word combo, no grammar words', options: ['Babbling', 'Holophrastic stage', 'Telegraphic speech', 'Full sentences'] },
          { label: '"un-" + "happy" + "-ness" = 3 units of meaning', options: ['3 phonemes', '3 morphemes', '3 syntax rules', '3 pragmatic rules'] }
        ],
        correctAnswers: ['Babbling', 'Telegraphic speech', '3 morphemes'],
        hint1: 'Babbling involves consonant-vowel combinations like "bababa."',
        hint2: 'Telegraphic speech uses only essential content words, like a telegram.',
        hint3: 'Morphemes are the smallest units of MEANING, not sound.',
        explanation: 'Babbling (4–6 months) features consonant-vowel combos. Telegraphic speech (18–24 months) uses noun-verb pairs without grammar words. Morphemes are meaningful units — "unhappiness" has three: un- + happy + -ness.'
      }
    },
    {
      id: 'langu1-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Exam Strategy: Language Traps

| Common Mistake | Why It's Wrong | Correct Understanding |
|----------------|---------------|----------------------|
| Confusing phoneme and morpheme | They sound similar but measure different things | Phoneme = SOUND; morpheme = MEANING |
| Thinking babbling is random | It narrows to native language by 10 months | Even deaf babies babble (with hands if exposed to sign) |
| Overgeneralization = language failure | It actually shows rule learning | "Goed" proves the child learned the past-tense rule |
| Parentese = baby talk | Baby talk uses made-up words | Parentese uses real words with exaggerated intonation |

**Memory Trick:** **P**honeme = **P**ronunciation (sound). **M**orpheme = **M**eaning.

> **AP Tip:** If a question describes a child making grammatical errors with regular rules applied to irregular forms (like "mouses" for "mice"), the answer is overgeneralization — not a language delay or disorder.
      `
    },
    {
      id: 'langu1-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher studies infants from different countries and finds that by 10 months, babies can no longer distinguish phonemes that are not used in their native language. This finding best supports which conclusion?',
            options: [
              'Language is entirely learned through reinforcement',
              'The brain prunes unused neural connections for non-native sounds',
              'Babies cannot hear foreign language sounds after 10 months',
              'Morpheme recognition develops before phoneme recognition'
            ],
            correctAnswer: 1,
            explanation: 'This illustrates neural pruning — the "use it or lose it" principle. Babies are born able to distinguish all human phonemes (~800), but the brain prunes connections for sounds not heard regularly in the environment. They can still HEAR the sounds, but can no longer easily distinguish between them.'
          },
          {
            question: 'Which sequence correctly orders language development from earliest to latest?',
            options: [
              'Babbling → cooing → one-word → telegraphic',
              'Cooing → babbling → telegraphic → one-word',
              'Cooing → babbling → one-word → telegraphic',
              'One-word → babbling → cooing → telegraphic'
            ],
            correctAnswer: 2,
            explanation: 'The correct sequence is: cooing (0–4 months, vowel sounds) → babbling (4–6 months, consonant-vowel combos) → one-word/holophrastic stage (12 months) → telegraphic/two-word stage (18–24 months). This sequence is universal across languages and cultures.'
          }
        ]
      }
    }
  ]
}
