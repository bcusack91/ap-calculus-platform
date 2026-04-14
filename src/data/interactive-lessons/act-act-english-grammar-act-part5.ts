export const actEnglishGrammarPart5Data = {
  topicSlug: 'act-english-grammar-act',
  sections: [
    {
      id: 'act-eg5-intro',
      type: 'text' as const,
      content: `
# ✨ Modifiers & Parallelism

**Part 5 of 7 — Dangling Modifiers, Misplaced Modifiers & Parallel Structure**

The ACT tests your ability to place modifiers correctly and keep sentence elements parallel. These errors can be subtle, so learning the patterns is essential.

**Key Concepts:**

| Error | What Happens | Example |
|-------|-------------|---------|
| Dangling modifier | The modifier has no logical subject | *Walking to class, the bell rang.* |
| Misplaced modifier | The modifier is next to the wrong word | *She almost drove her kids to every game.* |
| Faulty parallelism | List items don't have the same form | *She likes running, swimming, and to hike.* |
      `
    },
    {
      id: 'act-eg5-dangling',
      type: 'text' as const,
      content: `
## Dangling Modifiers

A **dangling modifier** is an introductory phrase that doesn't logically modify the subject that follows it.

**The Rule:** The subject right after the comma must be the one doing the action in the introductory phrase.

**Example 1 — Dangling:**
- ❌ *Hoping to win the scholarship, the application was submitted early.*
- Who was hoping? Not "the application"!
- ✅ *Hoping to win the scholarship, **Maria** submitted the application early.*

**Example 2 — Dangling:**
- ❌ *After reviewing the data, the experiment was redesigned.*
- ✅ *After reviewing the data, **the researchers** redesigned the experiment.*

**Example 3 — Correct:**
- ✅ *Exhausted from the hike, **the campers** collapsed into their tents.*
- The campers were exhausted — the modifier matches the subject.

**ACT Tip:** When a sentence starts with an -ing phrase, a past-participle phrase, or an infinitive phrase, check that the subject right after the comma is the one performing that action.
      `
    },
    {
      id: 'act-eg5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Modifier Placement — Spot the Error** 🔍
      `,
      exercise: {
        questions: [
          {
            question: '"Covered in mud, the owner bathed the dog in the backyard." What is the problem?',
            options: ['No error', 'The sentence says the owner is covered in mud — misplaced modifier', 'The verb tense is wrong', '"backyard" should be "back yard"'],
            correctAnswer: 1,
            explanation: 'The modifier "Covered in mud" describes the subject right after the comma — "the owner." But it should describe "the dog." A correct version: "Covered in mud, the dog was bathed by the owner in the backyard" or "The owner bathed the mud-covered dog in the backyard."'
          },
          {
            question: '"She only eats vegetables on weekdays." What does "only" actually modify here?',
            options: ['It modifies "She" — she is the only one who eats vegetables', 'It modifies "eats" — she only eats (doesn\'t cook) them', 'It modifies "vegetables" — she eats nothing but vegetables', 'It modifies "weekdays" — she does this on weekdays only'],
            correctAnswer: 1,
            explanation: 'As written, "only" modifies "eats." If the intended meaning is "She eats vegetables on weekdays only," then "only" should be moved to the end: "She eats vegetables only on weekdays." If she eats nothing but vegetables, write: "She eats only vegetables on weekdays."'
          }
        ]
      }
    },
    {
      id: 'act-eg5-parallel',
      type: 'text' as const,
      content: `
## Parallel Structure

**Parallelism** means that items in a list or comparison must have the **same grammatical form**.

**Example 4 — Faulty Parallelism in a List:**
- ❌ *The camp offers hiking, swimming, and to canoe.*
- ✅ *The camp offers hiking, swimming, and canoeing.*
- All items should be gerunds (-ing forms).

**Example 5 — Parallelism with Correlative Conjunctions:**
- Use parallel forms after: *both … and, either … or, neither … nor, not only … but also*
- ❌ *She is not only a talented singer but also dances well.*
- ✅ *She is not only a talented singer but also a skilled dancer.*

**Example 6 — Parallelism in Comparisons:**
- ❌ *Reading a book is more relaxing than to watch TV.*
- ✅ *Reading a book is more relaxing than watching TV.*

**ACT Tip:** When you see a list or a comparison underlined, check that every element has the same grammatical structure (all nouns, all gerunds, all infinitives, etc.).
      `
    },
    {
      id: 'act-eg5-input1',
      type: 'input-boxes' as const,
      content: `
**Fix the Parallelism** ✏️

Rewrite the underlined portion to make it parallel. Type only the corrected word or phrase.

1) "The job requires patience, creativity, and being organized." → Change "being organized" to: _____

2) "He likes to swim, to hike, and running." → Change "running" to: _____

3) "The recipe calls for chopping the onions, dicing the tomatoes, and the peppers should be sliced." → Change the last item to: _____
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['organization', 'to run', 'slicing the peppers'],
        hint1: 'The list uses nouns: patience, creativity, and …',
        hint2: 'The pattern is "to swim, to hike, and …"',
        hint3: 'Match the pattern: "chopping …, dicing …, and …"',
        explanation: '1) "Organization" — matches the nouns "patience" and "creativity." 2) "To run" — matches the infinitive pattern "to swim, to hike." 3) "Slicing the peppers" — matches the gerund phrases "chopping the onions" and "dicing the tomatoes."'
      }
    },
    {
      id: 'act-eg5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Modifiers & Parallelism — Quick Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A dangling modifier lacks a logical …',
            options: ['verb', 'subject', 'object', 'conjunction']
          },
          {
            label: '"Both … and" requires … structure after each part.',
            options: ['parallel', 'opposite', 'complex', 'simple']
          },
          {
            label: 'Placing "only" directly before the word it modifies is an example of …',
            options: ['parallelism', 'correct modifier placement', 'subordination', 'coordination']
          }
        ],
        correctAnswers: ['subject', 'parallel', 'correct modifier placement'],
        hint1: 'The modifier describes someone, but that someone is missing from the sentence.',
        hint2: 'Correlative conjunctions demand matching grammatical forms.',
        hint3: '"Only" should sit right next to what it limits.',
        explanation: 'A dangling modifier has no logical subject to attach to. "Both … and" requires parallel forms. Placing "only" before the word it modifies ensures clarity.'
      }
    },
    {
      id: 'act-eg5-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Practice** 📋
      `,
      exercise: {
        questions: [
          {
            question: '"Jogging through the park, a squirrel crossed the path in front of me." What is the best revision?',
            options: ['No change needed', '"Jogging through the park, I saw a squirrel cross the path in front of me."', '"A squirrel, jogging through the park, crossed the path."', '"The path was crossed by a squirrel, jogging through the park."'],
            correctAnswer: 1,
            explanation: 'The dangling modifier "Jogging through the park" should describe "I" (the person jogging), not "a squirrel." Revision B correctly places the true subject right after the comma.'
          },
          {
            question: '"The professor told the students to study the chapter, review their notes, and that they should complete the worksheet." What is the best revision of the underlined portion?',
            options: ['No change', 'complete the worksheet', 'completing the worksheet', 'the worksheet should be completed'],
            correctAnswer: 1,
            explanation: 'The parallel structure is "to study …, review …, and ___." Since "to" is shared from the beginning, the items should all be base verbs: "study, review, and complete."'
          }
        ]
      }
    }
  ]
};
