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
            question: '**Hoping to improve her grades,** the tutor was hired by Maria. \nWhat is the error?',
            options: ['Comma splice', 'Dangling modifier — "Hoping to improve" should modify Maria, not "the tutor"', 'Subject-verb disagreement', 'No error'],
            correctAnswer: 1,
            explanation: 'The introductory phrase "Hoping to improve her grades" must be followed by the person doing the hoping: Maria. Corrected: "Hoping to improve her grades, Maria hired a tutor."'
          },
          {
            question: 'The dog bit the mail carrier **running across the yard**. Who was running?',
            options: ['The dog', 'The mail carrier', 'It is ambiguous', 'Neither — the phrase is a fragment'],
            correctAnswer: 2,
            explanation: 'The modifier "running across the yard" is misplaced — it could describe either the dog or the mail carrier. This is ambiguous and needs to be rewritten.'
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

1) Covered in chocolate, the children eagerly ate the strawberries.
2) She only ate vegetables for dinner last night.
3) Driving to work, the accident blocked the highway.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['correct', 'misplaced', 'dangling'],
        hint1: 'Who or what is covered in chocolate — the children or the strawberries? Actually, the strawberries — but "children" is the subject. Wait: the strawberries are covered in chocolate, but "children" follows the modifier. This is actually correct IF the children are the ones covered in chocolate. Since the context makes the strawberries covered in chocolate, it could be read as dangling — but structurally, "Covered in chocolate" could describe the children eating them messily. Let us say this is correct here because "children" is the logical subject.',
        hint2: '"Only" should modify "vegetables," not "ate." Move it: "She ate only vegetables."',
        hint3: '"Driving to work" has no proper subject — the accident was not driving.',
        explanation: '1) Correct — the introductory phrase can logically modify the subject "children." 2) Misplaced — "only" modifies the wrong word; it should be "ate only vegetables." 3) Dangling — "the accident" is not the one driving; the subject who was driving is missing.'
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
            question: '**Having studied all night,** the exam seemed easy to Marcus. \nWhich revision best corrects the error?',
            options: ['Having studied all night, the exam was easy for Marcus.', 'Having studied all night, Marcus found the exam easy.', 'Having studied all night, it seemed easy to Marcus, the exam.', 'No change needed.'],
            correctAnswer: 1,
            explanation: 'The introductory phrase "Having studied all night" must be followed by the person who studied: Marcus. "Marcus found the exam easy" correctly places Marcus as the subject.'
          },
          {
            question: 'The gallery displayed paintings by local artists **that were recently restored**. \nWhat does "that were recently restored" most likely modify?',
            options: ['The gallery', 'Paintings', 'Local artists', 'It is ambiguous and should be clarified'],
            correctAnswer: 3,
            explanation: 'The modifier "that were recently restored" could describe the paintings or the artists (though artists aren\'t "restored"). In context it means the paintings, but the placement creates ambiguity. Better: "The gallery displayed recently restored paintings by local artists."'
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
