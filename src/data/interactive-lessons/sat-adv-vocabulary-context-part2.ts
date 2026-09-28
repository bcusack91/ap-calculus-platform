export const lessonData = {
  topicSlug: 'sat-vocabulary-context-advanced',
  sections: [
    {
      id: 'advvc2-intro',
      type: 'text' as const,
      content: `# Vocabulary in Context: Traps & Speed

**Part 2 of 3 — Why Strong Students Miss These, and How to Stop**

You don't miss hard vocabulary items because you don't know the words. You miss them because the distractor was built for you specifically.

### The trap logic, per archetype

**Colon-defined blanks** — the trap is a word that is *one notch off* from the definition: harsher (*worthless* for *unremarkable*), or aimed at the wrong target (*imprecise* attacks the measurement when the definition attacks what the number reveals). Strong students paraphrase loosely ("basically means useless") and the loose paraphrase covers two choices. **Fix:** read the definition clause literally and demand the choice satisfy *every* clause, including concessive ones like "the number is accurate."

**"Rather than" scaffolds** — the trap is the extreme word that matches the passage's *direction* but overshoots its *distance*. If evidence shrank a claim, *discredit* feels emotionally right; the scaffold ("rather than overturn") forbids it. **Fix:** before looking at choices, ask "is this a kill, a cut, or a confirmation?" Hard items are almost always cuts.

**Collocation traps** — the trap is a word you've heard with that preposition a hundred times. Familiar-sounding is doing the tempting, not meaning. **Fix:** substitute the *relation*, not the word: "depends on"? "is a sign of"? "is compatible with"? Then match.

**Negated blanks** — the trap is the true description of the text. When you see "not ______," write mentally: *the answer is a word the author DENIES applies.* Anything the passage affirms is automatically wrong.

### Speed protocol (target: 60-75 seconds)
1. Find the structural signal first — colon, "rather than," negation, preposition. It's there in over 90% of hard items.
2. Predict a phrase, not a word: "reduce-but-keep," "depends-on."
3. Eliminate by contradiction with a quoted phrase, not by feel. If you can't point to the words that kill a choice, you haven't killed it.`
    },
    {
      id: 'advvc2-q1',
      type: 'quiz' as const,
      question: `An item reads: "The committee has not rejected the proposal; it has ______ it, returning it to the applicants with a list of conditions to be satisfied before a second review." A strong student hesitates between "deferred" and "dismissed." What feature of the sentence settles the choice?`,
      options: [
        'Both words fit after "has not rejected," so the item is flawed and either answer should be accepted',
        'The contrast with "has not rejected" rules out "dismissed," and "a second review" signals postponement',
        '"Dismissed" is correct, because a committee that sets conditions before a second review has said no',
        'The formal register of "committee" favors "dismissed," the more official-sounding of the two words'
      ],
      correctAnswer: 1,
      explanation: `This is the "rather than" scaffold in semicolon form: "has not rejected... it has ______" makes the blank the *alternative* to rejection, so any synonym of rejection ("dismissed") is structurally excluded no matter how cynical a reading of committees you hold. "Before a second review" independently confirms the action is a postponement. The choice calling "dismissed" correct is exactly the trap thinking the item is built to punish — importing real-world cynicism to override the sentence's explicit contrast. The flawed-item choice surrenders the structural evidence that decides it. The formal-register choice invents a register test; both words are equally official-sounding, and register almost never separates final contenders on hard items.`
    },
    {
      id: 'advvc2-q2',
      type: 'quiz' as const,
      question: `An item's sentence reads: "Only the newest interferometers can ______ displacements smaller than the width of a proton." A student crosses out "appreciate" in two seconds because "appreciate means to be grateful for something." What error has the student made?`,
      options: [
        'None, since an instrument cannot appreciate anything, so a second look at the word was unnecessary',
        'The student should have kept "appreciate," because test writers favor unusual words for correct answers',
        'The student misread the stem, which describes the scientists using the instruments rather than the instruments',
        'The student tested only the common meaning and never tried the secondary sense "to detect or register"'
      ],
      correctAnswer: 3,
      explanation: `Secondary-meaning trap. "Appreciate" has a technical sense — to perceive or register a difference ("the ear cannot appreciate frequencies above 20 kHz") — and hard items deliberately choose common words whose everyday meaning misfits so that fast eliminations remove the key. The two-second crossout is the exact behavior the item is engineered to exploit. The elimination-is-sound choice repeats the error being diagnosed. The unusual-words choice replaces one bad heuristic with another — unusualness is not evidence; fit is. The misread-the-stem choice invents a misreading: the stem's subject really is the instrument, and the secondary sense works for instruments precisely because "appreciate" in this sense means resolve/detect, not feel.`
    },
    {
      id: 'advvc2-q3',
      type: 'quiz' as const,
      question: `A passage spends three sentences on a restoration method's successes, then pivots: "The technique's limits, however, surfaced as soon as it left the workshop: field conditions proved ______ to the fine control the method requires." The most commonly chosen wrong answer is "favorable." Why is that distractor so effective against strong readers?`,
      options: [
        'It matches the upbeat tone of the opening sentences, catching readers who judge before the "however" clause',
        '"Favorable" is a more advanced vocabulary word than the correct answer, so strong readers expect it to be right',
        'It is grammatically the only choice that can precede "to," so readers who check the grammar are drawn to it',
        'The passage never discusses field conditions in any sentence, so readers must guess at what they were like'
      ],
      correctAnswer: 0,
      explanation: `The trap is a register-momentum trap: three sentences build a positive impression, and readers who answer from the passage's overall tone rather than from the blank's local clause carry that momentum straight through the pivot. The blank sits inside the "however" clause and describes *limits*, so it must be a word like "inhospitable" — the tone flipped one word before the blank. This is the vocabulary version of the concession-pivot structure that runs through all hard Reading & Writing items: the sentence containing the blank outranks the paragraph containing the sentence. The more-advanced-word choice is false and irrelevant — difficulty of the word is never the test. The grammar choice is false ("favorable to," "inhospitable to," and others all collocate with "to," which is why grammar can't decide). The never-discusses choice contradicts the quoted sentence itself.`
    }
  ]
}
