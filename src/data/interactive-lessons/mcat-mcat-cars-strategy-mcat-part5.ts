export const mcatCarsStratPart5Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'cs5-intro',
      type: 'text' as const,
      content: `# CARS Strategy

**Part 5 of 7 — Question-Specific Strategies**

### Main Idea Questions

- "The central thesis of the passage is..."
- "The author's primary purpose is..."
- **Strategy**: Should match your AMI (Author's Main Idea). Eliminate options that are too narrow or only cover one paragraph.

### Detail / Retrieval Questions

- "According to the passage..."
- "The author states that..."
- **Strategy**: Go back to the passage! The answer is explicitly stated. Don't rely on memory.

### Inference Questions

- "It can be inferred that..."
- "The author would most likely agree that..."
- **Strategy**: Answer must be SUPPORTED by text but not directly stated. Stay close to the text — don't make big leaps.

### Strengthen / Weaken Questions

- "Which would most strengthen the author's argument?"
- "Which finding would most undermine the claim?"
- **Strategy**: Identify the core argument first, then find the option that reinforces or contradicts it.

### Application Questions

- "If [new scenario], the author would most likely..."
- **Strategy**: Apply the author's stated views/principles to a new context.`
    },
    {
      id: 'cs5-worked',
      type: 'text' as const,
      content: `### Worked Example — Reading the Question Stem First

Before you evaluate a single answer, *classify the stem*. The question type dictates the search strategy, and using the wrong strategy is how good readers miss easy points.

Take one passage and four stems:

**Stem A — "The author's primary purpose is to..."** → **Main idea.** Match it to your AMI (whole-passage claim + stance). *Discipline:* reject any choice that is true of only one paragraph — these "too narrow" traps are the signature error here.

**Stem B — "According to the passage, the 1918 reforms led to..."** → **Detail / retrieval.** The answer is *stated*. *Discipline:* go back to the text and read the actual sentence; do not answer from memory, and do not infer. The right answer is a close paraphrase of an explicit line.

**Stem C — "It can be inferred that the author would most likely agree that..."** → **Inference.** *Discipline:* stay *one small step* beyond the text. The correct answer is unstated but forced by the passage; the trap is the choice that requires a *big* leap or an outside assumption. Prefer the modest, well-supported inference over the bold one.

**Stem D — "If a new study found X, the author would most likely respond by..."** → **Application / strengthen-weaken.** *Discipline:* first pin the author's *principle*, then apply it to the new fact. Do not let the new scenario distract you from the author's established stance.

**Why classification pays.** Each type has a *different* failure mode: main-idea fails on "too narrow," detail fails on "answered from memory," inference fails on "leap too far," application fails on "ignored the author's principle." If you name the stem first, you load the right anti-trap before reading the options — turning four similar-looking choices into a guided elimination.

**Takeaway:** Read the *stem* before the choices, name the question type, and apply that type's specific discipline. Strategy is not one-size-fits-all; it is chosen per question.`
    },
    {
      id: 'cs5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Question Types** 🎯`,
      exercise: {
        questions: [
          {
            question: `A question asks: "Which of the following, if true, would most weaken the author's central argument?" To answer this, you should FIRST:`,
            options: [`Clearly identify the author's central argument before evaluating any choice`, `Pick the choice with the strongest wording`, `Eliminate the shortest answer first`, `Recall outside facts about the topic`],
            correctAnswer: 0,
            explanation: `You cannot weaken an argument you don't understand. First identify the core claim, then find the answer that most directly contradicts or undermines it.`
          },
          {
            question: `A stem reads, "According to the passage, the author defines justice as..." The best approach is to:`,
            options: [`Return to the passage and locate the explicitly stated definition`, `Infer a definition from your own background knowledge`, `Choose the most philosophically sophisticated option`, `Pick the answer that uses the word "justice" most often`],
            correctAnswer: 0,
            explanation: `"According to the passage" marks a detail/retrieval question: the answer is stated in the text. Go back and find the explicit definition rather than relying on memory or outside knowledge. The correct choice closely paraphrases a specific line.`
          },
          {
            question: `For an inference question ("It can be inferred that..."), the correct answer is best characterized as:`,
            options: [`Supported by the passage but not explicitly stated, requiring only a small logical step`, `A direct quotation from the passage`, `A bold conclusion that goes well beyond the text`, `Whatever matches your personal opinion`],
            correctAnswer: 0,
            explanation: `Inference answers are unstated yet forced by the text and stay close to it. The trap is the choice demanding a large leap or an outside assumption. Direct quotations belong to detail questions, not inference.`
          },
          {
            question: `Why does identifying the QUESTION TYPE before reading the choices improve accuracy?`,
            options: [`Each type has a distinct failure mode, so naming it lets you apply the right anti-trap discipline`, `It lets you skip reading the passage`, `It guarantees the first choice is correct`, `Question types are all handled the same way`],
            correctAnswer: 0,
            explanation: `Main-idea questions fail on "too narrow," detail on "answered from memory," inference on "leaping too far," and application on "ignoring the author's principle." Knowing the type loads the appropriate caution before you evaluate options, sharpening elimination.`
          },
          {
            question: `An application stem says, "If a new discovery showed X, the author would most likely..." The key first step is to:`,
            options: [`Identify the author's established principle, then apply it to the new scenario`, `Decide whether X is true in the real world`, `Choose the most surprising response`, `Ignore the author's prior views and judge X freshly`],
            correctAnswer: 0,
            explanation: `Application questions test whether you can extend the author's stated stance to a novel case. Pin down the author's principle first, then predict how it applies to X. The real-world truth of X and your own judgment are irrelevant to the author's likely response.`
          },
          {
            question: `For a main-idea question, an answer that is accurate but addresses only the third paragraph should be rejected because it is:`,
            options: [`Too narrow — a main-idea answer must capture the whole passage, not a single section`, `Out of scope — it is unrelated to the passage`, `Opposite — it reverses the author's stance`, `Too extreme — it overstates the claim`],
            correctAnswer: 0,
            explanation: `Main-idea answers must reflect the entire passage's thesis and the author's overall stance. A choice that is true of just one paragraph is "too narrow," even though it is factually supported — the classic trap for primary-purpose questions.`
          }
        ]
      }
    },
    {
      id: 'cs5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Classify the stem first — each type needs a different strategy
- Main idea → match your AMI; reject "too narrow" choices
- Detail → go back and find it (don't trust memory)
- Inference → close to text, one small logical step away
- Strengthen/weaken & application → pin the author's argument/principle first`
    }
  ]
};
