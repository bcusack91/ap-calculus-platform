export const psychLanguagePart1Data = {
  topicSlug: 'language-intelligence',
  sections: [
    {
      id: 'langu1-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Language & Intelligence

**Part 1 of 7 — The Building Blocks of Language**

> 🔑 **Key Concept:** Language is a **shared** system of **arbitrary symbols** that is **rule-governed** and **generative**. Small units of sound combine into units of meaning, and rules for combining words let speakers produce an unlimited number of new sentences.

### What makes something a language?

| Feature | What it means | Example |
|---------|---------------|---------|
| **Shared** | Speakers of a language agree on what the symbols mean | Every English speaker treats "dog" as the animal |
| **Arbitrary symbols** | The sound or sign has no natural link to its meaning | The same animal is "dog" in English and "perro" in Spanish |
| **Rule-governed** | Grammar and syntax limit how symbols combine | "The dog barked" is English; "Barked dog the" is not |
| **Generative** | A small set of units and rules produces endless new sentences | You can say a sentence no one has ever said before |

### The units of language

| Term | Definition | Example |
|------|-----------|---------|
| **Phoneme** | Smallest unit of SOUND that can change meaning | /b/ and /p/ separate "bat" from "pat" |
| **Morpheme** | Smallest unit of MEANING | "unhappiness" = un- + happy + -ness (3 morphemes) |
| **Semantics** | The meaning of words and sentences | "Bark" means one thing for dogs and another for trees |
| **Grammar** | The full system of rules that lets people communicate | Rules for forming past tense, plurals, and questions |
| **Syntax** | The part of grammar that orders words into sentences | "The dog bit the man" vs. "The man bit the dog" |

Pragmatics, the social rules for using language in context, is excluded from the AP exam (CED 3.5.A); focus on the five units above.

> **Why This Matters for the AP Exam:** Questions often ask you to count or identify units. Phonemes are about SOUND; morphemes are about MEANING. English uses about 40 phonemes, and those few sounds build every English word.
      `
    },
    {
      id: 'langu1-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Units of Language** 🎯
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
            explanation: '"Restarted" has three units of meaning: "re-" (again), the root "start," and "-ed" (past tense). Single letters are not morphemes unless they carry meaning on their own, as plural "-s" does.'
          },
          {
            question: 'Changing the first sound of "cap" to make "map" changes the word\'s meaning. The sounds /k/ and /m/ are best described as different',
            options: [
              'phonemes',
              'morphemes',
              'syntactic rules',
              'semantic categories'
            ],
            correctAnswer: 0,
            explanation: 'A phoneme is the smallest unit of sound that can change meaning, and swapping /k/ for /m/ turns one word into another. Neither sound carries meaning by itself, so they are not morphemes.'
          },
          {
            question: 'English speakers say "tree," French speakers say "arbre," and Japanese speakers say "ki" for the same object. This pattern best shows that language symbols are',
            options: [
              'generative in nature',
              'arbitrary in form',
              'identical in grammar',
              'based on syntax alone'
            ],
            correctAnswer: 1,
            explanation: 'Nothing about the sound "tree" resembles a tree, so each language assigns its own arbitrary symbol. Generativity concerns producing new sentences, which this example does not involve.'
          }
        ]
      }
    },
    {
      id: 'langu1-s3-worked-examples',
      type: 'text' as const,
      content: `
### 📚 Worked Examples: Counting and Comparing Units

**Example 1 — Phonemes are sounds, not letters.**
- "ship" has 4 letters but 3 phonemes: /sh/ /i/ /p/.
- "cats" has 4 phonemes (/k/ /a/ /t/ /s/) and 2 morphemes ("cat" + plural "-s").
- "box" and "rocks" end with the same sounds, /ks/. But "box" is 1 morpheme, while "rocks" is 2 (rock + plural "-s"). The same sound can be a morpheme in one word and not in another.

**Example 2 — Morphemes can be words or word parts.**
| Word | Morphemes | Count |
|------|-----------|-------|
| dog | dog | 1 |
| dogs | dog + -s | 2 |
| unkind | un- + kind | 2 |
| replayed | re- + play + -ed | 3 |
| unbelievable | un- + believe + -able | 3 |

**Example 3 — Syntax and semantics are different.**
- "Colorless green ideas sleep furiously" follows English syntax (adjective, adjective, noun, verb, adverb) but makes no sense. It has correct **syntax** and broken **semantics**.
- "The dog bit the man" and "The man bit the dog" use the same words. Only the **syntax** (word order) differs, and that changes the meaning.

**Example 4 — Generativity.**
With about 40 phonemes, thousands of morphemes, and a limited set of rules, a speaker can build sentences that have never been spoken before, such as "The purple giraffe borrowed my calculator during lunch." Rules can also repeat inside one another ("the friend of the sister of the coach..."), so there is no longest possible sentence.

**Example 5 — Sign languages are full languages.**
Sign languages such as American Sign Language have all of the same features. Handshape, location, and movement combine like phonemes, signs carry meaning like morphemes, and a grammar orders signs into sentences. Language does not require sound.
      `
    },
    {
      id: 'langu1-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        questions: [
          {
            question: 'What is the smallest unit of sound that can change the meaning of a word?',
            answer: 'phoneme',
            acceptableAnswers: ['phonemes', 'a phoneme'],
            explanation: 'Phonemes are units of sound, such as the /b/ that separates "bat" from "pat."'
          },
          {
            question: 'How many morphemes are in the word "replayed"? (Enter a number.)',
            answer: '3',
            acceptableAnswers: ['three'],
            explanation: '"Replayed" = re- (again) + play + -ed (past tense), so it has 3 morphemes.'
          },
          {
            question: 'What one-word term describes the fact that a limited set of units and rules can produce an unlimited number of new sentences?',
            answer: 'generative',
            acceptableAnswers: ['generativity', 'generative language'],
            explanation: 'Language is generative: finite units and rules yield an infinite number of possible sentences.'
          }
        ]
      }
    },
    {
      id: 'langu1-s5-misconceptions',
      type: 'text' as const,
      content: `
### 🎯 AP Exam Strategy: Language Structure Traps

| Common Mistake | Why It's Wrong | Correct Understanding |
|----------------|---------------|----------------------|
| Counting letters as phonemes | Spelling and sound do not match one-to-one | "ship" has 4 letters but 3 phonemes |
| Calling every word part a morpheme | A part is a morpheme only if it carries meaning | The "s" in "bus" is not a morpheme; the "s" in "buses" is part of the plural |
| Treating syntax and semantics as the same | A sentence can be grammatical but meaningless | "Colorless green ideas sleep furiously" |
| Thinking words resemble their meanings | Symbols are arbitrary and shared by agreement | "Dog," "perro," and "chien" name the same animal |
| Thinking sign languages are just gestures | They have phoneme-like units, meaning units, and grammar | ASL is a complete language |

**Memory Trick:** **P**honeme = **P**ronunciation (sound). **M**orpheme = **M**eaning. **S**yntax = **S**equence (word order). Se**man**tics = **mean**ing.
      `
    },
    {
      id: 'langu1-s6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Unit or Feature** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: '"un-" + "happy" + "-ness" are three _____', options: ['phonemes', 'morphemes', 'syntax rules', 'semantic errors'] },
          { label: '"The cat chased the mouse" and "The mouse chased the cat" differ only in _____', options: ['phonemes', 'morphemes', 'syntax', 'arbitrariness'] },
          { label: 'A teen invents a sentence no one has ever said, and listeners understand it. This shows language is _____', options: ['arbitrary', 'generative', 'phonemic', 'semantic'] }
        ],
        correctAnswers: ['morphemes', 'syntax', 'generative'],
        hint1: 'Morphemes are the smallest units of MEANING, not sound.',
        hint2: 'The words are identical; only their ORDER changed.',
        hint3: 'Finite rules, infinite new sentences.',
        explanation: '"Unhappiness" has three morphemes. Swapping who chased whom changes only word order, which is syntax. Producing and understanding brand-new sentences shows that language is generative.'
      }
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
            question: 'A teacher writes "The silent pencil argued with a cloud" on the board. Students agree the sentence is correctly built but impossible to picture. The sentence follows the rules of',
            options: [
              'semantics but violates syntax',
              'syntax but violates semantics',
              'both syntax and semantics',
              'neither syntax nor semantics'
            ],
            correctAnswer: 1,
            explanation: 'The words are in a legal English order, so the syntax is fine. The meaning does not make sense, so the semantics is broken.'
          },
          {
            question: 'A researcher argues that American Sign Language is a true language rather than a set of gestures. Which observation would best support her claim?',
            options: [
              'Signers use their hands and faces rather than their voices to communicate ideas',
              'Signers produce new sentences by combining signs according to grammatical rules',
              'Signers often point at nearby objects in order to show other people what they want',
              'Signers in different countries use different signs to stand for the same objects'
            ],
            correctAnswer: 1,
            explanation: 'Combining units by rules to create new sentences shows that ASL is rule-governed and generative, the defining features of language. Pointing and using the hands could describe gestures that are not a language.'
          }
        ]
      }
    },
    {
      id: 'langu1-s8-connection',
      type: 'text' as const,
      content: `
> 🔑 **AP Connection:** These units also explain children's speech errors. A child who says "foots" has learned the plural morpheme "-s" and applied it too widely. Part 2 follows how children move from cooing to full sentences and why those errors are a sign of progress.
      `
    }
  ]
}
