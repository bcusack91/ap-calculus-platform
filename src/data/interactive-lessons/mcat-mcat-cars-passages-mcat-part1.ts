export const mcatCarsPsgPart1Data = {
  topicSlug: 'mcat-cars-passages-mcat',
  sections: [
    {
      id: 'cp1-intro',
      type: 'text' as const,
      content: `# CARS Passage Types

**Part 1 of 7 — Humanities Passages**

### Characteristics of Humanities Passages

CARS draws from these humanities fields:
- **Philosophy**: Ethics, epistemology, logic
- **Literature/Literary criticism**: Analysis of texts, narrative theory
- **Art/Music**: Aesthetic theory, art history, criticism
- **Religion/Theology**: Comparative religion, philosophical theology

### What Makes Humanities Passages Challenging

- **Abstract language**: Concepts like "being," "consciousness," "the sublime"
- **Dense arguments**: Multiple layers of reasoning
- **Unfamiliar vocabulary**: Technical philosophical terms
- **Implicit assumptions**: Author assumes you can follow complex chains of logic

### Strategy for Humanities Passages

1. **Look for the thesis statement** — often at the end of the first or second paragraph
2. **Track who says what** — passages often discuss multiple thinkers
3. **Don't get lost in examples** — they illustrate a point, focus on the point
4. **Paraphrase in simple language**: "The author is saying that..."
5. **Stay patient** — understanding often comes by the end of the passage`
    },
    {
      id: 'cp1-worked-example',
      type: 'text' as const,
      content: `### Worked Example — Reading a Humanities Passage

Below is a short excerpt in the style of a CARS humanities passage. Read it once, then watch how an expert reader processes it.

> *"It has become fashionable to praise the novel as a vehicle for moral education, a kind of laboratory in which readers rehearse empathy without consequence. The claim is seductive. Yet it rests on an assumption that deserves scrutiny: that the act of imagining another's suffering reliably softens the heart. The historical record is uncooperative. Some of the most cultivated readers of the eighteenth century were also its most efficient administrators of cruelty. If fiction trained their sympathy, it trained it narrowly — toward characters who resembled themselves. To say that the novel teaches empathy, then, is to say something both true and dangerously incomplete."*

**How to attack it:**

1. **Find the thesis.** It is *not* the opening sentence (which states the popular view). The author's real claim arrives at "Yet it rests on an assumption that deserves scrutiny." The thesis: the idea that novels reliably teach empathy is *incomplete*.
2. **Track whose voice is speaking.** Sentence 1 = the "fashionable" view the author will challenge. The word **"seductive"** is a tell — the author finds the view tempting but suspect.
3. **Locate the evidence.** The eighteenth-century example (cultivated readers who were also cruel) is the author's counter-evidence, not a concession.
4. **Pin down the tone.** Not hostile, not neutral — **skeptical and qualifying**. The closing phrase "both true and dangerously incomplete" tells you the author accepts a *limited* version of the claim.
5. **Predict the question.** A CARS item will likely ask what the author believes about the novel-as-empathy claim. The answer is the nuanced middle: partly true, but overstated — NOT "the author rejects it entirely."

> **Takeaway:** In humanities passages, the first sentence often states the view the author intends to *complicate*. Read for the pivot word ("Yet," "However," "But") that hands the passage back to the author.`
    },
    {
      id: 'cp1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Humanities Passages** 🎯`,
      exercise: {
        questions: [
          {
            question: `A philosophy passage discusses three philosophers' views on justice. To answer questions about the AUTHOR's view, you should:`,
            options: [`Distinguish the author's voice from the philosophers being discussed — look for evaluative language`, `Assume the author agrees with the last philosopher mentioned`, `Average the three philosophers' views`, `Look for the most modern perspective`],
            correctAnswer: 0,
            explanation: `Authors often present others' views before giving their own assessment. Look for evaluative language: "However," "More convincingly," "This argument fails because" — these signal the author's actual position.`
          },
          {
            question: `Based on the worked-example excerpt, which statement best captures the author's main idea?`,
            options: [`The novel has no effect on a reader's moral sensibilities`, `The popular claim that novels teach empathy is partly valid but seriously overstated`, `Eighteenth-century readers were uniquely cruel compared to modern readers`, `Empathy is best cultivated through formal philosophy rather than fiction`],
            correctAnswer: 1,
            explanation: `The closing line — "both true and dangerously incomplete" — signals a qualified position. The author concedes a kernel of truth while arguing the empathy claim is overstated. Options A and D push past what the text supports; C misreads a single example as the thesis.`
          },
          {
            question: `In the excerpt, the author calls the empathy claim "seductive." This word choice primarily functions to:`,
            options: [`Endorse the claim enthusiastically`, `Signal that the author finds the claim appealing yet ultimately suspect`, `Indicate that the claim is purely emotional and irrational`, `Establish that the claim is universally accepted by scholars`],
            correctAnswer: 1,
            explanation: `"Seductive" carries a connotation of tempting-but-deceptive. It previews the author's move from acknowledging the claim's appeal ("The claim is seductive") to undermining it ("Yet it rests on an assumption..."). This is tone analysis — a core CARS skill.`
          },
          {
            question: `The author introduces eighteenth-century readers who were both "cultivated" and cruel. The function of this example is to:`,
            options: [`Provide evidence that complicates the assumed link between reading fiction and increased empathy`, `Prove that reading fiction causes cruelty`, `Concede that the empathy claim is entirely correct`, `Shift the topic away from the novel toward history`],
            correctAnswer: 0,
            explanation: `The example is counter-evidence: if fiction reliably produced empathy, these well-read individuals should not have been "efficient administrators of cruelty." It complicates — but does not reverse — the claim. Option B overstates causation the author never asserts.`
          },
          {
            question: `A later paragraph (not shown) states: "Sympathy, like a muscle, may be trained toward some objects and left to atrophy toward others." This sentence most directly supports the passage's idea that:`,
            options: [`Fiction is incapable of shaping emotion`, `Empathy cultivated by novels can be selective rather than universal`, `Readers should avoid emotionally demanding novels`, `Eighteenth-century fiction was poorly written`],
            correctAnswer: 1,
            explanation: `The muscle analogy reinforces the earlier point that fiction "trained their sympathy... narrowly — toward characters who resembled themselves." Selective training of empathy is precisely the author's qualification of the popular claim. This is an integration question linking new text to the established thesis.`
          }
        ]
      }
    },
    {
      id: 'cp1-quiz2',
      type: 'multiple-choice' as const,
      content: `### Exit Ticket — Inference & Strengthen/Weaken`,
      exercise: {
        questions: [
          {
            question: `Which new piece of information, if true, would most WEAKEN the author's argument?`,
            options: [`Controlled studies show that readers of literary fiction demonstrate measurably broader empathy toward strangers of all backgrounds`, `Many eighteenth-century novels featured aristocratic protagonists`, `Some modern readers dislike morally complex fiction`, `Philosophers disagree about how to define empathy`],
            correctAnswer: 0,
            explanation: `The author's case depends on empathy gains being narrow and unreliable. Evidence that fiction broadens empathy "toward strangers of all backgrounds" directly contradicts the "narrow," "selective" claim and would weaken the argument. The other options are irrelevant or merely restate background detail.`
          },
          {
            question: `Which finding, if true, would most STRENGTHEN the author's argument?`,
            options: [`A survey finds that avid novel readers show no greater concern for people unlike themselves than non-readers do`, `Novels are read in nearly every country`, `Some eighteenth-century novelists were widely admired`, `Literary criticism is itself a humanistic discipline`],
            correctAnswer: 0,
            explanation: `The author claims the empathy novels cultivate is narrow and may not extend to dissimilar others. Evidence that heavy readers show "no greater concern for people unlike themselves" supports exactly that limitation, reinforcing the thesis. The other options are neutral background.`
          },
          {
            question: `The author's overall tone toward the claim that "the novel teaches empathy" is best described as:`,
            options: [`Dismissive and mocking`, `Qualified and skeptical — accepting a limited version while resisting the sweeping one`, `Enthusiastically supportive`, `Entirely neutral and uncommitted`],
            correctAnswer: 1,
            explanation: `The author grants the claim is "true" but "dangerously incomplete," and earlier calls it "seductive." That blend of partial acceptance and pointed doubt is qualified skepticism — neither outright dismissal nor neutrality nor endorsement.`
          }
        ]
      }
    },
    {
      id: 'cp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Humanities passages are abstract — focus on the core argument
- Track WHO is making each claim (author vs. people being discussed)
- Paraphrase complex ideas in simple terms
- Thesis is often at the end of the intro or beginning of the conclusion
- The opening sentence frequently states the view the author intends to **complicate**, not endorse
- Tone words ("seductive," "fashionable") and pivot words ("Yet," "However") reveal the author's true stance`
    }
  ]
};
