export const mcatCarsStratPart6Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'cs6-intro',
      type: 'text' as const,
      content: `# CARS Strategy

**Part 6 of 7 — Tone & Rhetoric**

### Identifying Author's Tone

The author's attitude toward the subject is CRUCIAL for CARS.

| Tone | Signals |
|------|---------|
| **Supportive** | "Importantly," "significantly," "a crucial development" |
| **Critical** | "However," "fails to," "overlooks," "problematic" |
| **Neutral/Objective** | "Studies suggest," "one perspective is," balanced presentation |
| **Dismissive** | "Merely," "so-called," "trivial" |
| **Ambivalent** | Presents both pros and cons without clear preference |

### Rhetorical Devices on CARS

- **Analogy**: Comparing to make a point clearer
- **Counterargument**: Presenting opposing view to refute it
- **Concession**: Acknowledging opponent's point before arguing against
- **Appeal to authority**: Citing experts to support a claim
- **Qualifying language**: "Sometimes," "may," "tends to" (shows nuance)

### Reading Tone Questions

"The author's attitude toward X is best described as..."
- Look for charged words and qualifying language in the passage
- Consider the WHOLE passage, not just one sentence`
    },
    {
      id: 'cs6-worked',
      type: 'text' as const,
      content: `### Worked Example — Calibrating Tone, Not Just Detecting It

The hard part of tone questions is *calibration*: not "is the author positive or negative?" but "*how strongly*, and toward *what exactly*?" The wrong answers usually over- or under-shoot the intensity.

> "Smith's study is undeniably ambitious, and its dataset is the largest yet assembled. **Still**, one wonders whether so much was inferred from so little, and the reader is left wishing for the caution that grand claims deserve."

**Step 1 — Find the charged words.** "Ambitious," "largest yet" (praise); "one wonders," "left wishing," "caution that grand claims deserve" (gentle doubt). The pivot is **"Still."**

**Step 2 — Identify the target.** The author is critical of Smith's *overreach* (inferring "so much from so little"), *not* of the dataset, which is praised. Tone questions often hinge on *what* the attitude is aimed at.

**Step 3 — Calibrate the intensity.** This is *measured reservation*, not hostility. The author concedes real merit first, then voices doubt with soft hedges ("one wonders," "wishing"). That is far from "scathing" or "dismissive."

**Step 4 — Match to a choice and reject the over/under-shoots.**
- "Enthusiastically supportive" — **undershoots the critique**; ignores "Still." Cut.
- "Harshly dismissive / contemptuous" — **overshoots**; the praise and the soft hedges rule out contempt. Cut.
- "Indifferent / neutral" — wrong; the author clearly has a view. Cut.
- "Admiring but skeptical" / "qualified reservation" — **fits**: genuine praise plus restrained doubt. Select.

**The rule.** CARS tone is *usually moderate*; extreme labels ("contemptuous," "ecstatic," "outraged") are correct only when the passage is genuinely extreme, which is rare. Mixed-signal passages (praise + "still" + hedge) almost always point to a *blended, moderate* tone word. Read the *whole* passage before committing — a single enthusiastic sentence can be a concession the author is about to qualify.

**Takeaway:** Detect the polarity, *locate the exact target*, then *calibrate the strength*. Eliminate choices that are too hot or too cold; the answer is typically the temperate, blended one.`
    },
    {
      id: 'cs6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Tone & Rhetoric** 🎯`,
      exercise: {
        questions: [
          {
            question: `An author writes: "While proponents celebrate the innovation, they conveniently overlook its devastating environmental consequences." The tone is:`,
            options: [`Critical — "conveniently overlook" and "devastating" show disapproval`, `Neutral — the author presents both sides`, `Supportive of the innovation`, `Ambivalent`],
            correctAnswer: 0,
            explanation: `"Conveniently overlook" implies deliberate ignorance, and "devastating" is strongly negative. The author is criticizing both the innovation and its supporters.`
          },
          {
            question: `An author writes: "Smith's study is undeniably ambitious, yet one wonders whether so much was inferred from so little." The tone is best described as:`,
            options: [`Admiring but skeptical — genuine praise tempered by measured doubt`, `Harshly contemptuous of Smith`, `Purely neutral and detached`, `Enthusiastically supportive without reservation`],
            correctAnswer: 0,
            explanation: `"Undeniably ambitious" is real praise; "one wonders whether so much was inferred from so little" is gentle doubt signaled by "yet." The blended, moderate tone is admiration with skepticism — not contempt, neutrality, or unqualified support.`
          },
          {
            question: `On CARS, why are extreme tone labels like "contemptuous" or "ecstatic" usually wrong?`,
            options: [`Most passages adopt a moderate tone, so extreme labels overshoot unless the text is genuinely extreme`, `Extreme labels are always grammatically incorrect`, `Tone is never tested directly`, `Longer tone words are more likely to be right`],
            correctAnswer: 0,
            explanation: `CARS authors typically write with restraint, so moderate, blended tone words fit best. Reserve strong labels for passages with genuinely strong language. Defaulting to extremes is a common trap; the temperate choice usually wins.`
          },
          {
            question: `A passage praises a dataset's size but criticizes the conclusions drawn from it. A tone question is best answered by first identifying:`,
            options: [`Exactly what the author's attitude is aimed at — the conclusions, not the dataset`, `The author's nationality`, `The number of sentences of praise versus criticism`, `Whether the topic is scientific`],
            correctAnswer: 0,
            explanation: `Tone has a target. Here the author admires the data but doubts the inferences, so the attitude toward "the study's conclusions" differs from the attitude toward "the dataset." Pinning the target prevents you from mislabeling the overall tone.`
          },
          {
            question: `An author writes, "This so-called breakthrough merely repackages decades-old ideas." The words "so-called" and "merely" signal a tone that is:`,
            options: [`Dismissive — minimizing the work's originality and importance`, `Admiring`, `Neutral and balanced`, `Ambivalent`],
            correctAnswer: 0,
            explanation: `"So-called" casts doubt on the label "breakthrough," and "merely" trivializes the contribution as mere repackaging. Together they convey a dismissive attitude that downplays the work's significance, rather than admiration or neutrality.`
          },
          {
            question: `Why should you read the WHOLE passage before settling on a tone, rather than judging from one sentence?`,
            options: [`A single positive or negative sentence may be a concession the author later qualifies or reverses`, `Tone is determined only by the final sentence`, `The first sentence always states the tone outright`, `Reading more never changes the tone`],
            correctAnswer: 0,
            explanation: `Authors often concede a point ("Granted, X is impressive...") before pivoting against it, so an isolated sentence can mislead. Judging tone requires the whole arc of praise, concession, and critique. The overall attitude emerges from how these parts combine.`
          }
        ]
      }
    },
    {
      id: 'cs6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Track emotional/charged words: "devastating," "merely," "groundbreaking"
- Tone is usually moderate on CARS — extreme labels are rarely correct
- Identify WHAT the attitude targets, then calibrate its strength
- Eliminate tone choices that are too hot or too cold
- Read the whole passage — an upbeat sentence may be a concession`
    }
  ]
};
