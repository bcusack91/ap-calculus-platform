export const mcatCarsPsgPart7Data = {
  topicSlug: 'mcat-cars-passages-mcat',
  sections: [
    {
      id: 'cp7-intro',
      type: 'text' as const,
      content: `# CARS Passage Types

**Part 7 of 7 — Passage Practice Principles**

### How to Practice CARS Effectively

**The Review Process is More Important Than the Practice Itself**

After completing each passage:

### Step 1: Categorize the Passage
- What type? (humanities, social science, ethics, etc.)
- What was the main argument?
- Was it easy, medium, or hard?

### Step 2: Review EVERY Question
- For questions you got RIGHT: Was it for the right reason?
- For questions you got WRONG: What type of error?
  - Misread the passage?
  - Fell for a trap answer?
  - Ran out of time?
  - Confused who said what?

### Step 3: Identify Patterns
After 10+ passages, look for:
- Which passage types are hardest for you?
- Which question types do you miss most?
- Are you making the same error repeatedly?

### Step 4: Targeted Practice
- If humanities passages are hard → read more philosophy and literary criticism
- If inference questions are hard → practice finding the "one step beyond" the text
- If timing is an issue → practice pacing with a stopwatch`
    },
    {
      id: 'cp7-worked-example',
      type: 'text' as const,
      content: `### Worked Example — Reviewing a Missed Question

The best CARS students do not review by re-reading the answer key. They reconstruct *why the trap worked on them*. Here is the process applied to a short passage and a question a student got wrong.

> *"The romanticization of the 'lone genius' persists despite a century of evidence against it. Major scientific breakthroughs, on close inspection, almost always emerge from dense networks of collaborators, rivals, and predecessors. To credit a single name is a convenience of memory, not a description of how discovery works. And yet the myth endures, perhaps because a story needs a protagonist."*

**The question the student missed:**
*"The author would most likely agree that the 'lone genius' narrative survives mainly because:"*
- (A) it accurately reflects how discovery happens
- (B) it satisfies a narrative or psychological need for a central figure
- (C) collaborators prefer to remain anonymous
- (D) scientific institutions reward individuals

**The student chose (D). Here is the review:**

1. **Locate the textual basis.** The passage's only stated reason the myth "endures" is the final clause: "perhaps because a story needs a protagonist." That points to **(B)**.
2. **Diagnose the trap.** (D) is *plausible in the real world* — institutions do reward individuals — but it is **not in the passage**. The student imported outside knowledge. This is the single most common CARS error: choosing a true-but-unsupported statement.
3. **Name the error type.** "Outside-knowledge intrusion / unsupported inference." Logged for pattern-tracking.
4. **Rule out the rest.** (A) contradicts the passage ("evidence against it"); (C) invents a motive never mentioned.
5. **Write the fix.** *On "author would agree" questions, the answer must be traceable to specific text. If I am reasoning from what I know about the world rather than from the passage, stop.*

> **Takeaway:** A useful review answers three questions: *Where in the text was the real answer? Why was my wrong choice tempting? What rule prevents this error next time?* Re-reading the explanation without doing this teaches you almost nothing.`
    },
    {
      id: 'cp7-quiz1',
      type: 'multiple-choice' as const,
      content: `**CARS Practice Strategy** 🎯`,
      exercise: {
        questions: [
          {
            question: `A student consistently misses "Reasoning Beyond the Text" questions but does well on comprehension questions. The most targeted improvement would be:`,
            options: [`Practice applying passage logic to new scenarios — the weak area is inference and application`, `Read passages more slowly`, `Focus on improving reading speed`, `Study more vocabulary`],
            correctAnswer: 0,
            explanation: `The student understands the passage (good comprehension) but struggles with extending ideas beyond the text. Targeted practice on inference and application questions will address this specific weakness.`
          },
          {
            question: `In the worked example, the student chose (D) "scientific institutions reward individuals." According to the passage, the best answer is (B). The student's error is best classified as:`,
            options: [`A timing error from rushing`, `Importing outside knowledge — selecting a real-world-plausible claim the passage never states`, `Misreading who held the view`, `A vocabulary gap`],
            correctAnswer: 1,
            explanation: `Option (D) may be true in reality, but the passage's only stated reason the myth endures is "a story needs a protagonist." Choosing a true-but-unsupported claim is the classic outside-knowledge intrusion error — distinct from timing, attribution, or vocabulary problems.`
          },
          {
            question: `Based on the worked-example passage, which statement best captures the author's main idea?`,
            options: [`Scientific breakthroughs are usually the work of a single brilliant individual`, `The "lone genius" narrative is largely a myth; discoveries emerge from networks, yet the myth persists for narrative reasons`, `Collaboration has only recently become important in science`, `Memory is a reliable guide to how discovery actually works`],
            correctAnswer: 1,
            explanation: `The author argues the lone-genius idea "persists despite a century of evidence against it," that breakthroughs "emerge from dense networks," and that the myth survives because "a story needs a protagonist." Option A is the view the author rejects; D is contradicted ("a convenience of memory, not a description").`
          },
          {
            question: `A student's review log shows that, across ten passages, most misses are on questions asking what the author "implies" or "suggests," while detail-retrieval questions are nearly all correct. The most efficient next step is to:`,
            options: [`Spend more time memorizing passage details`, `Drill inference questions specifically, practicing the discipline of staying one controlled step beyond the text`, `Switch to reading passages twice as fast`, `Abandon CARS review and focus only on the sciences`],
            correctAnswer: 1,
            explanation: `The pattern isolates inference as the weakness, since literal retrieval is already strong. Targeted inference drilling — practicing the "one step beyond" without overreaching — directly addresses the diagnosed gap. The other options ignore the pattern the log reveals.`
          }
        ]
      }
    },
    {
      id: 'cp7-quiz2',
      type: 'multiple-choice' as const,
      content: `### Exit Ticket — Review Discipline`,
      exercise: {
        questions: [
          {
            question: `Which review habit is most consistent with the passage's claim that "the review process is more important than the practice itself"?`,
            options: [`Completing as many passages as possible without analyzing mistakes`, `For each miss, identifying where the correct answer was supported, why the wrong choice was tempting, and a rule to prevent the error`, `Re-reading only the answer key explanations once`, `Tracking only the raw number of questions answered correctly`],
            correctAnswer: 1,
            explanation: `The worked example models exactly this three-part diagnosis (textual basis, trap mechanism, preventive rule). Volume without analysis (A), passive re-reading (C), and score-only tracking (D) fail to convert mistakes into transferable lessons.`
          },
          {
            question: `On the worked-example question, why is choice (A) — that the narrative "accurately reflects how discovery happens" — incorrect?`,
            options: [`It is correct and the student should have chosen it`, `It directly contradicts the passage, which says the evidence runs against the lone-genius view`, `It is supported but less precise than (B)`, `It restates the author's thesis word for word`],
            correctAnswer: 1,
            explanation: `The passage opens by noting the lone-genius idea "persists despite a century of evidence against it." Claiming the narrative is accurate flatly contradicts that, making (A) a reversal of the author's position rather than a partially-correct option.`
          },
          {
            question: `A student notices she selects the right answer on many questions but, during review, cannot explain why the other three options are wrong. The most valuable adjustment is to:`,
            options: [`Stop reviewing questions she answered correctly, since they are already right`, `For every question, actively articulate why each wrong option is wrong — not just why the credited answer is right`, `Increase the number of passages per session`, `Answer faster to leave more time for guessing`],
            correctAnswer: 1,
            explanation: `Getting an item right "for the wrong reason" is a known CARS risk, which is why the review process checks correct answers too. Forcing herself to eliminate each distractor builds the trap-recognition that transfers to harder questions. The other options skip the diagnostic work the passage emphasizes.`
          }
        ]
      }
    },
    {
      id: 'cp7-summary',
      type: 'text' as const,
      content: `### CARS Passage Types — Complete! ✅

The key to CARS improvement: consistent practice + thorough review. Know the passage types, identify your weaknesses, and target them specifically. Trust the process — CARS skills develop over months, not days.

**Review like an expert:** for every miss, answer three questions — *Where in the text was the correct answer supported? Why was my wrong choice tempting? What rule will prevent this error next time?* The most common trap is choosing a true-in-the-world but text-unsupported answer; on "the author would agree/imply" questions, the answer must be traceable to specific lines.`
    }
  ]
};
