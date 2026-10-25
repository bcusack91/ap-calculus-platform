export const asvabWkSynonymStrategiesPart6Data = {
  topicSlug: 'asvab-wk-synonym-strategies',
  sections: [
    {
      id: 'wkss-p6-intro',
      type: 'text' as const,
      content: `# 🔤 Synonyms, Connotation and Test Strategy

**Part 6 of 7 — Pacing, Elimination and Guessing**

### The Clock

| | CAT-ASVAB (computer) | Paper ASVAB / CEP |
|:---|:---|:---|
| Questions | 15 | 35 |
| Time | 9 minutes | 11 minutes |
| Per question | about 36 seconds | about 19 seconds |

The computer test shows your remaining time and remaining questions in the lower-right corner of the screen. Glance at it every few questions: at 5 questions you want about 3 minutes used, at 10 questions about 6.

### Rules That Shape Your Strategy

- **You cannot skip and you cannot go back.** You must answer a question to see the next one, and an answered question is locked.
- **Finish the subtest.** If time runs out, unanswered questions are scored as if you had guessed at random, and a run of wrong answers at the end of a subtest carries a relatively large penalty. The fix is pacing: stay on schedule so that you are still reading and answering for real at the end.
- **The test adapts.** A correct answer usually brings a harder word. Hard words are a sign you are doing well, not a reason to panic.
- **Every question counts.** Some questions may be unscored tryout items, but you cannot tell which, so give each one your best effort.
- **On paper, answer everything.** There is no penalty for guessing on the paper test.

### Three Situations, Three Moves

| You… | Time to spend | Move |
|:---|:---|:---|
| know the word | a few seconds | Answer, move on, bank the time |
| sort of know it | 15 to 30 seconds | Phrase memory → connotation → part of speech → eliminate |
| don't know it | 20 to 30 seconds | Eliminate what you can, choose the best remaining answer, move on |

> **Key Fact:** The official advice for the ASVAB is to read carefully, watch the time, rule out wrong choices and then make an educated guess. That is exactly the routine below.`
    },
    {
      id: 'wkss-p6-examples',
      type: 'text' as const,
      content: `## Worked Examples

### Example 1: sort of knowing a word

**Weary** most nearly means: *tired · angry · wise · careful*

- Phrase memory: "a **weary** traveler," "**weary** of waiting." Both suggest someone worn out.
- **Answer:** tired. (Do not confuse it with *wary*, which means cautious. That makes *careful* a look-alike trap.)

### Example 2: eliminating with direction

**Lavish** most nearly means: *extravagant · cheap · tiny · plain*

- Phrase memory: "a **lavish** party," "**lavish** praise." Lavish things are **more**: rich, generous, abundant.
- *Cheap*, *tiny* and *plain* all point toward **less**. Three choices fall in one move.
- **Answer:** extravagant.

### The Elimination Checklist

When you are unsure, cross off any choice that:

1. is the **wrong part of speech** or form,
2. has the **wrong connotation** (positive vs. negative),
3. only **looks like** the test word or a word it's confused with,
4. is merely **related** to the word rather than meaning it,
5. points in the **opposite direction** of what you remember.

Then choose the best of what remains and move on. Two minutes spent on one word costs you time you need for three others.`
    },
    {
      id: 'wkss-p6-mc',
      type: 'multiple-choice' as const,
      content: '**Practice the routine.** 🎯 Aim for 36 seconds or less on each.',
      exercise: {
        questions: [
          {
            question: '**Solemn** most nearly means',
            options: ['joyful', 'sleepy', 'lonesome', 'serious'],
            correctAnswer: 3,
            explanation: 'Phrase memory: a solemn ceremony, a solemn promise. Both are serious and formal. Joyful points the opposite way.'
          },
          {
            question: '**Sullen** most nearly means',
            options: ['dirty', 'cheerful', 'sulky', 'sleepy'],
            correctAnswer: 2,
            explanation: 'Sullen means silent and bad-tempered: a sullen teenager. Negative connotation, so cheerful falls first. Sulky matches.'
          },
          {
            question: '**Rigid** most nearly means',
            options: ['hollow', 'bendable', 'stiff', 'smooth'],
            correctAnswer: 2,
            explanation: 'Rigid means stiff and unable to bend: a rigid steel beam. Bendable is the opposite, and smooth and hollow describe other properties.'
          },
          {
            question: '**Obscure** most nearly means',
            options: ['bright', 'simple', 'well-known', 'unclear'],
            correctAnswer: 3,
            explanation: 'Obscure means hard to see or understand, or little known. Each wrong choice is the opposite of one of those senses: well-known (little known), bright (hard to see), simple (hard to understand). Unclear is the match.'
          }
        ]
      }
    },
    {
      id: 'wkss-p6-dropdown',
      type: 'dropdown-select' as const,
      content: '**What is the right move?** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'You recognize the word and the answer immediately. You should:',
            options: ['recheck all four choices', 'wait for the timer to drop', 'answer and move on'],
            correctAnswer: 2
          },
          {
            label: 'You are down to 40 seconds with 3 questions left. You should:',
            options: ['click answers at random', 'answer each one for real, quickly', 'leave the last ones unanswered'],
            correctAnswer: 1
          },
          {
            label: 'You have eliminated two choices and cannot decide between the last two. You should:',
            options: ['choose one of the eliminated two', 'pick the better fit and move on', 'spend a full minute deciding'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['answer and move on', 'answer each one for real, quickly', 'pick the better fit and move on'],
        hint1: 'Time you save on easy words is time you can use on hard ones.',
        hint2: 'Unanswered items count as random guesses, and a string of wrong answers at the end is penalized.',
        hint3: 'A 50-50 guess beats a lost minute.',
        explanation: 'Answer known words fast and bank the time. With little time left, keep reading and answering genuinely, because random clicking and blank items both hurt your score. When you are down to two choices, take the better fit and keep moving: a minute spent on one question costs you on later ones.'
      }
    },
    {
      id: 'wkss-p6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- CAT: **15 questions, 9 minutes** (about 36 s each); paper: 35 in 11 (about 19 s each)
- No skipping, no going back; finish the subtest with real answers, because unanswered items count as random guesses and a run of late wrong answers is penalized
- Know it → answer fast. Sort of know it → phrase memory, connotation, part of speech. Don't know it → eliminate and choose
- Elimination checklist: **wrong part of speech, wrong connotation, look-alike, merely related, opposite direction**

> **Up Next:** Part 7 — a mixed mastery set at test speed.`
    }
  ]
};
