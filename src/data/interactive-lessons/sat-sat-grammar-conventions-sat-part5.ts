export const satGrammarPart5Data = {
  topicSlug: 'sat-grammar-conventions-sat',
  sections: [
    {
      id: 'sat-gr5-intro',
      type: 'text' as const,
      content: `
# 🎯 Modifier Placement

**Part 5 of 7 — Dangling Modifiers, Misplaced Modifiers, Squinting Modifiers**

A **modifier** is a word or phrase that describes, clarifies, or gives more detail about another word. On the SAT, modifier errors are among the most frequently tested grammar concepts.

**Golden Rule:** A modifier must be placed **next to** the word it modifies.

### Misplaced Modifiers
A modifier is **misplaced** when it is too far from the word it describes, creating confusion or unintended meaning.

> ❌ *She almost drove **her kids** to school every day.*
> (This says she almost drove but didn't actually drive)

> ✅ *She drove her kids to school **almost** every day.*
> (She drove most days — "almost" modifies "every day")

> ❌ *The professor only teaches **on Tuesdays**.*
> (The only thing the professor does is teach? Probably not.)

> ✅ *The professor teaches **only on Tuesdays**.*
> ("Only" modifies "on Tuesdays")
      `
    },
    {
      id: 'sat-gr5-dangling',
      type: 'text' as const,
      content: `
## Dangling Modifiers

A modifier **dangles** when the word it's supposed to modify is missing from the sentence or is not the subject right after the modifier.

> ❌ ***Walking to school,** the rain started to fall.*
> (The rain isn't walking to school!)

> ✅ ***Walking to school,** **I** noticed the rain starting to fall.*
> (Now "I" is doing the walking)

**SAT Pattern:** An introductory participial phrase (…ing / …ed / …en) MUST be followed by the noun it modifies.

> ❌ ***Exhausted from the hike,** the tent looked inviting.*
> (The tent wasn't exhausted)

> ✅ ***Exhausted from the hike,** **the hikers** found the tent inviting.*

### Squinting Modifiers
A **squinting modifier** is ambiguously placed between two things it could modify:

> ❌ *Students who study frequently **earn** good grades.*
> (Do they study frequently, or frequently earn good grades?)

> ✅ *Students who **frequently study** earn good grades.* (clear)
> ✅ *Students who study earn good grades **frequently**.* (also clear)

**Fix:** Move the modifier so it clearly modifies only one element.
      `
    },
    {
      id: 'sat-gr5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Modifier Practice** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Hoping to improve her grades, _____ \nWhich choice completes the text so that it conforms to the conventions of Standard English?',
            options: ['a tutor was hired by Maria.', 'Maria hired a tutor.', 'the tutor was hired by Maria.', 'Maria\'s tutor was hired.'],
            correctAnswer: 1,
            explanation: 'The introductory phrase "Hoping to improve her grades" must be followed immediately by the person doing the hoping: Maria. In the other three choices the word right after the comma is "a tutor," "the tutor," or "Maria\'s tutor," so the sentence says the tutor was hoping to improve her grades.'
          },
          {
            question: '"The dog bit the mail carrier running across the yard." Which revision makes clear that the DOG was the one running across the yard?',
            options: ['The dog bit the mail carrier, running across the yard.', 'The dog bit the running mail carrier across the yard.', 'Running across the yard, the dog bit the mail carrier.', 'Running across the yard, the mail carrier was bitten by the dog.'],
            correctAnswer: 2,
            explanation: 'An introductory modifier describes the noun right after the comma, so "Running across the yard, the dog…" can only mean the dog was running. With the phrase at the end, it still sits next to "the mail carrier," "the running mail carrier" makes the carrier the runner, and "Running across the yard, the mail carrier…" says the carrier was running.'
          }
        ]
      }
    },
    {
      id: 'sat-gr5-input1',
      type: 'input-boxes' as const,
      content: `
**Identify the Modifier Error** 🧮

Type "dangling," "misplaced," "squinting," or "correct" for each sentence.

1) Covered in chocolate, the strawberries disappeared within minutes.

2) She only ate vegetables for dinner last night.

3) Driving to work, the accident blocked the highway.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['correct', 'misplaced', 'dangling'],
        hint1: 'What is covered in chocolate? The strawberries, and "the strawberries" is exactly the noun right after the comma.',
        hint2: '"Only" should modify "vegetables," not "ate." Move it: "She ate only vegetables."',
        hint3: '"Driving to work" has no proper subject — the accident was not driving.',
        explanation: '1) Correct — "Covered in chocolate" describes "the strawberries," which comes right after it. 2) Misplaced — "only" modifies the wrong word; it should be "ate only vegetables." 3) Dangling — "the accident" is not the one driving; the subject who was driving is missing.'
      }
    },
    {
      id: 'sat-gr5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Modifier Rules** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A dangling modifier occurs when the word it modifies …',
            options: ['is too far away', 'is missing from the sentence or is not the subject', 'is in the wrong tense', 'is plural instead of singular']
          },
          {
            label: '"After reviewing the evidence, the verdict was announced." This has a …',
            options: ['dangling modifier', 'misplaced modifier', 'squinting modifier', 'no error']
          },
          {
            label: 'To fix a squinting modifier, you should …',
            options: ['remove it', 'move it so it clearly modifies only one word', 'change it to a different part of speech', 'add a comma']
          }
        ],
        correctAnswers: ['is missing from the sentence or is not the subject', 'dangling modifier', 'move it so it clearly modifies only one word'],
        hint1: 'A dangling modifier has no logical subject to attach to.',
        hint2: 'Who reviewed the evidence? Not "the verdict."',
        hint3: 'Squinting modifiers sit between two possible words — repositioning solves the ambiguity.',
        explanation: 'A dangling modifier lacks its intended subject. "After reviewing the evidence" dangles because "the verdict" did not review anything. Squinting modifiers are fixed by repositioning them next to the word they are meant to modify.'
      }
    },
    {
      id: 'sat-gr5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Editing** 📋
      `,
      exercise: {
        questions: [
          {
            question: '<u>Having studied all night,</u> the exam seemed easy to Marcus. \nWhich revision best corrects the error?',
            options: ['Having studied all night, the exam was easy for Marcus.', 'Having studied all night, Marcus found the exam easy.', 'Having studied all night, it seemed easy to Marcus, the exam.', 'Having studied all night, Marcus\'s exam seemed easy.'],
            correctAnswer: 1,
            explanation: 'The introductory phrase "Having studied all night" must be followed by the person who studied: Marcus. "Marcus found the exam easy" makes Marcus the subject. The other versions put "the exam," "it," or "Marcus\'s exam" right after the comma, and an exam cannot study.'
          },
          {
            question: '"The gallery displayed paintings by local artists that were recently restored." Which revision makes clear that the PAINTINGS were restored?',
            options: ['The gallery displayed paintings by local artists that were recently restored.', 'Recently restored, the gallery displayed paintings by local artists.', 'The gallery, recently restored, displayed paintings by local artists.', 'The gallery displayed recently restored paintings made by artists from the area.'],
            correctAnswer: 3,
            explanation: 'Placing "recently restored" directly before "paintings" leaves only one thing it can describe. The original leaves "that were recently restored" next to "local artists," and the other two versions make the gallery the thing that was restored.'
          }
        ]
      }
    },
    {
      id: 'sat-gr5-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

1. **Misplaced modifiers** are too far from what they describe — move them closer.
2. **Dangling modifiers** lack a logical subject — add the correct subject right after the modifier.
3. **Squinting modifiers** sit ambiguously between two words — reposition for clarity.
4. **SAT pattern:** Introductory participial phrases (-ing, -ed) must be immediately followed by the noun they modify.
5. **Watch for "only," "almost," "nearly," "just"** — these adverbs are commonly misplaced.

**Up next:** Parallel Structure & Comparisons →
      `
    }
  ]
};
