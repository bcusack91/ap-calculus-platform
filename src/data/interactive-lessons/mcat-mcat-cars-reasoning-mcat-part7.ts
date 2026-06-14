export const mcatCarsReasonPart7Data = {
  topicSlug: 'mcat-cars-reasoning-mcat',
  sections: [
    {
      id: 'cr7-intro',
      type: 'text' as const,
      content: `# CARS Logical Reasoning

**Part 7 of 7 — Putting It All Together**

### The Complete CARS Reasoning Toolkit

1. ✅ **Identify reasoning type**: Deductive or inductive?
2. ✅ **Spot fallacies**: Ad hominem, straw man, false dichotomy, etc.
3. ✅ **Find assumptions**: What must be true for the argument to work?
4. ✅ **Strengthen/weaken**: What would make it more or less convincing?
5. ✅ **Evaluate analogies**: Does the logical structure match?
6. ✅ **Assess evidence**: How strong is the support?

### Integration: A Complete Analysis

For ANY CARS passage, you should be able to:

| Element | Question to ask |
|---------|----------------|
| Main conclusion | What is the author's bottom line? |
| Key evidence | What supports the conclusion? |
| Assumptions | What's unstated but required? |
| Weaknesses | Where might the argument fail? |
| Implications | What follows if the author is right? |
| Tone | What's the author's attitude? |

### The CARS Mindset

The strongest CARS performers think like this:
- "What is this author trying to convince me of?"
- "Why should I believe them?"
- "What could make this argument wrong?"
- "How does this apply beyond this specific case?"`
    },
    {
      id: 'cr7-worked',
      type: 'text' as const,
      content: `### Worked Example — Running the Full Toolkit on One Passage

Here is a compressed passage. Watch all six tools fire in sequence.

> "Proponents of standardized testing argue that exams ensure fairness by holding every applicant to one yardstick. But consider: in the two districts that abolished such tests, graduation rates rose. Tests, then, do not promote success; they obstruct it. Anyone who defends them is simply protecting an outdated industry."

**1. Reasoning type.** From two districts to a universal claim about tests everywhere — **inductive**, and a thin sample at that.

**2. Conclusion + evidence.** Conclusion: "tests obstruct success." Evidence: two districts' graduation rates rose after abolition.

**3. Assumption (negation test).** The argument assumes *nothing else changed* in those two districts. Negate: "those districts also lowered graduation requirements." The causal claim collapses → that no-confounder premise is **necessary**.

**4. Weaken.** The most damaging weakener supplies a rival cause (the requirements were eased) or notes the two districts are unrepresentative. The least useful weakener attacks a side detail.

**5. Fallacies.** Two appear. *Post hoc / confounding*: rates rose *after* abolition, so abolition is credited with the cause. *Ad hominem*: "anyone who defends them is protecting an outdated industry" dismisses opponents by motive rather than argument.

**6. Evidence quality & tone.** Two districts is anecdotal-to-thin empirical evidence — far from sufficient for a universal verdict. The tone is **polemical**, signaled by "simply protecting an outdated industry."

**Synthesis.** A single short passage can be inductive, rest on an unstated no-confounder assumption, commit two fallacies, lean on weak evidence, and adopt a charged tone — all at once. The expert reader runs this checklist almost automatically, which is exactly what makes the questions feel easy. Mastery is integration, not memorizing definitions in isolation.`
    },
    {
      id: 'cr7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Final Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `A well-prepared CARS reader approaches a passage by:`,
            options: [`Actively tracking the argument, tone, and evidence while reading — then using these to answer questions`, `Memorizing every detail for later recall`, `Reading as quickly as possible`, `Looking at the questions first and only reading relevant sections`],
            correctAnswer: 0,
            explanation: `Active reading — tracking argument structure, author tone, and evidence quality — is the foundation of CARS success. This creates a mental map that makes all question types easier to answer.`
          },
          {
            question: `Consider: "After the city banned plastic bags, ocean plastic near its coast declined; clearly the ban worked. Only someone funded by plastic makers would deny it." This passage commits which TWO flaws?`,
            options: [`Post hoc (sequence treated as cause) and ad hominem (dismissing critics by motive)`, `Straw man and circular reasoning`, `False dichotomy and appeal to authority`, `Hasty generalization and slippery slope`],
            correctAnswer: 0,
            explanation: `Crediting the ban because the decline followed it is post hoc (a confounder like ocean currents could explain it). Dismissing skeptics as plastic-industry shills attacks the person, not the argument — ad hominem. Recognizing multiple co-occurring flaws is a hallmark of integrated CARS reasoning.`
          },
          {
            question: `For the same plastic-bag argument, which finding would MOST weaken the causal conclusion?`,
            options: [`A neighboring city that did NOT ban bags saw the same decline in coastal plastic over the same period`, `Plastic bags are unpopular with shoppers`, `Ocean plastic is difficult to measure exactly`, `The ban received extensive news coverage`],
            correctAnswer: 0,
            explanation: `A comparable city without the ban showing the same decline demonstrates that an outside factor (e.g., ocean currents or a regional cleanup) likely caused the drop, severing the link between this ban and the result. The other options touch side issues and leave the causal claim intact.`
          },
          {
            question: `An author concludes a policy "must succeed here because it succeeded in Finland." To evaluate this, the FIRST analytic move is to:`,
            options: [`Surface the assumption that the relevant conditions in Finland also hold locally, since the analogy depends on it`, `Accept the conclusion because Finland is a real example`, `Reject it because no two countries are identical`, `Look up Finnish policy outcomes from memory`],
            correctAnswer: 0,
            explanation: `Cross-context transfer arguments rest on the assumption that the conditions producing the result elsewhere are present in the new setting. Making that assumption explicit is the key first step; outright acceptance or blanket rejection both skip the actual analysis the question targets.`
          },
          {
            question: `Across question types, the unifying habit that most improves CARS accuracy is:`,
            options: [`Pinning down the author's conclusion and main argument first, then evaluating every choice against it`, `Selecting the answer with the strongest, most absolute wording`, `Choosing whichever option repeats the most passage vocabulary`, `Relying on prior knowledge of the topic`],
            correctAnswer: 0,
            explanation: `Almost every CARS task — main idea, inference, strengthen, weaken, function, analogy — depends on first locating the author's central claim and reasoning. Anchoring to that claim lets you judge choices consistently, whereas keyword matching, extreme wording, and outside knowledge all mislead.`
          },
          {
            question: `A passage presents a strong claim, then writes "or so its critics would have us believe." A skilled reader concludes that the strong claim:`,
            options: [`Belongs to the critics and is likely about to be challenged by the author`, `Is the author's own firmly held thesis`, `Is an established empirical fact`, `Can be safely ignored`],
            correctAnswer: 0,
            explanation: `The attribution assigns the claim to critics and distances the author, typically foreshadowing a rebuttal. Tracking whose voice each sentence carries prevents the common error of mistaking an opponent's view for the author's — a skill that recurs throughout the section.`
          }
        ]
      }
    },
    {
      id: 'cr7-summary',
      type: 'text' as const,
      content: `### CARS Logical Reasoning — Complete! ✅

You now have the complete toolkit: identify arguments, spot assumptions, evaluate evidence, recognize fallacies, and analyze analogies. The expert move is to run all of these together on a single passage — classification, assumption, weakness, fallacy, evidence, and tone — almost automatically. Practice these skills with real passages until the checklist becomes second nature.`
    }
  ]
};
