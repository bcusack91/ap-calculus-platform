export const actPassageTypesPart7Data = {
  topicSlug: 'act-reading-passage-types-act',
  sections: [
    {
      id: 'act-r7-intro',
      type: 'text' as const,
      content: `
# 🧩 Reading Passage Types

**Part 7 of 7 — Integrated Practice Set: Two Passages, Two Types**

This part is a half-length rehearsal: **two complete passage sets of different types**, worked the way you will work them on test day. Passage I is a **literary narrative**. Passage II is a **paired set** of two short **natural science** passages. Together they draw on every skill from Parts 1–6.

## Your Plan

| Step | Passage I: Literary narrative | Passage II: Paired natural science |
|---|---|---|
| Time target | About 10 minutes | About 10 minutes |
| Read for | Who, wants, changes, told how | Each author's claim and evidence |
| Annotate | Names, the turning sentence, tone words | A five-word position summary under each passage |
| Question order | Details first, then inference, then the big picture | A questions, B questions, then "both" questions |

Set a timer for **20 minutes** before you start. Check the clock when you finish Passage I: if more than 11 minutes have passed, speed up on Passage II.

## Reminders by Type

**Literary narrative:** Gestures are evidence. A character who leaves something in place, keeps sweeping, or "did not say goodbye, because he never had" is telling you about the relationship. Inferences stay one step from the text, and nothing after the final sentence is fair game.

**Paired natural science:** Separate what each author **accepts** from what each author **argues**. A concession ("Light at night does harm insects") is often where the two passages agree. A "relationship" question asks whether B **challenges, qualifies, extends,** or **offers another explanation for** A.

---

## Passage I: Literary Narrative

*This passage is adapted from a short story about a teenager and the owner of a repair shop.*

> **¶1** The repair shop had been Hollis Petrie's for forty-one years, and for the last six of them it had also, unofficially, been Nadia's. She had wandered in at fourteen with a radio that would not hold a station, and Hollis, instead of fixing it, had slid a screwdriver across the counter and said, "Show me where it hurts." She came back every afternoon after that.
>
> **¶2** Now the shop was being sold. Hollis had told her in his usual way, which was to say nothing until the papers were signed. The buyer, a pleasant man who sold phone cases at the mall, planned to keep the sign and none of the rest.
>
> **¶3** On the last afternoon, Nadia arrived to find the workbench already bare. The jars of resistors had been boxed, the soldering iron coiled and taped, the wall of tools reduced to pale outlines on the pegboard where each one had hung. Hollis was sweeping. He did not look up.
>
> **¶4** "You could have told me in March," she said.
>
> **¶5** "You'd have spent April being sad about it." He kept sweeping. "This way you only get one afternoon."
>
> **¶6** She wanted to be angry, and for a moment she managed it. Then she noticed that one outline on the pegboard was not empty. The small screwdriver with the cracked yellow handle, the one he had slid across the counter six years ago, still hung in its place.
>
> **¶7** "Missed one," she said.
>
> **¶8** "Did I." Hollis leaned the broom against the wall and finally looked at her. "Well. It's no good to a man who sells phone cases."
>
> **¶9** She took it down. The crack in the handle fit her thumb exactly, as it always had. She did not say thank you, because he would have hated that, and he did not say goodbye, because he never had. She swept the back room while he swept the front, and when they were finished, the floor was cleaner than either of them had ever seen it.
      `
    },
    {
      id: 'act-r7-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Margin notes for Passage I</b></summary>

A strong reader's notes take under a minute and make every question findable:

| ¶ | Margin note | Why it matters |
|---|---|---|
| 1 | N + H: 6 yrs; "show me where it hurts" | Who, and how the bond began |
| 2 | shop sold; H tells late | The problem |
| 3 | bare shop; H won't look up | Mood: loss; H avoids the moment |
| 5 | H's reason: spare her | Motivation, in his own words |
| 6 | **turn**: anger, then screwdriver left | The shift |
| 8 | "Did I." | He left it on purpose |
| 9 | no thanks, no goodbye; sweep together | Closeness shown, not said |
</details>

<details>
<summary><b>Example 2: A model inference question</b></summary>

**Question:** Hollis's response to Nadia's broken radio in paragraph 1, sliding her a screwdriver and saying "Show me where it hurts," suggests that he:

- wanted Nadia to learn to diagnose the problem herself
- was too busy to repair the radio that afternoon
- did not know how to fix that kind of radio
- hoped Nadia would leave the shop quickly

**Solution:**
1. Gesture plus dialogue: he hands her the tool **instead of fixing it** and asks her to find the fault.
2. One short step: he is inviting her to work on it herself, the start of six years of afternoons together.
3. Nothing says he was busy or unable, and her returning "every afternoon" contradicts any wish for her to leave. The answer is **wanted Nadia to learn to diagnose the problem herself**.
</details>
      `
    },
    {
      id: 'act-r7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Passage I Questions** 🎯

Answer these using Passage I above. Work the detail questions first.
      `,
      exercise: {
        questions: [
          {
            question: `According to Hollis's own explanation in paragraph 5, he did not tell Nadia about the sale sooner because:`,
            options: [
              `he had not decided to sell until that morning`,
              `the buyer had asked him to keep the sale quiet`,
              `telling her later would shorten her sadness`,
              `he assumed she no longer cared about the shop`
            ],
            correctAnswer: 2,
            explanation: `Hollis says, "You'd have spent April being sad about it. . . . This way you only get one afternoon," so waiting was meant to shorten her sadness. The papers were already signed, so the decision was not made that morning. The buyer never asks for secrecy, and sparing her sadness shows Hollis knew she cared deeply.`
          },
          {
            question: `The description of the "pale outlines on the pegboard" in paragraph 3 mainly emphasizes:`,
            options: [
              `how completely the shop has been emptied`,
              `how carelessly Hollis packed his tools`,
              `that the buyer plans to repaint the walls`,
              `that some tools were stolen from the shop`
            ],
            correctAnswer: 0,
            explanation: `Outlines where tools "had hung," alongside boxed jars and a taped soldering iron, stress how bare the shop has become. The coiled and taped iron shows careful packing, not carelessness. The buyer's plans for the walls are never mentioned, and the tools were packed, not stolen.`
          },
          {
            question: `The screwdriver still hanging on the pegboard most strongly suggests that:`,
            options: [
              `Hollis forgot to pack it in his hurry`,
              `the buyer asked Hollis to leave one tool`,
              `the screwdriver was too damaged to sell`,
              `Hollis set it aside for Nadia on purpose`
            ],
            correctAnswer: 3,
            explanation: `It is the same screwdriver from their first meeting, and Hollis's dry "Did I." plus his remark that it is "no good to a man who sells phone cases" show he left it deliberately. Everything else was packed with care, which makes forgetting unlikely. The buyer wants "none of the rest," and the cracked handle is a sign of long use, not a reason the tool cannot be sold.`
          },
          {
            question: `Which choice best describes the relationship between Nadia and Hollis?`,
            options: [
              `formal, as between an employer and an employee`,
              `close, though neither of them says so out loud`,
              `tense, because Nadia resents the shop's new owner`,
              `distant, since they have only recently met`
            ],
            correctAnswer: 1,
            explanation: `They have shared six years of afternoons, and the final paragraph shows closeness through actions: no thank-you, no goodbye, sweeping side by side. Nadia was never formally hired; she was "unofficially" part of the shop. Her brief anger is at Hollis, not the buyer, and six years is not a recent acquaintance.`
          },
          {
            question: `The final sentence of the passage mainly suggests that Nadia and Hollis:`,
            options: [
              `share one last task as a quiet way of saying goodbye`,
              `want to impress the new owner with a spotless shop`,
              `have decided to keep running the shop together`,
              `are too upset with each other to talk`
            ],
            correctAnswer: 0,
            explanation: `Since neither will say goodbye aloud, sweeping together becomes their farewell, and the unusually clean floor marks the care they put into it. The buyer is keeping only the sign, so impressing him makes little sense. The shop has been sold, so they are not keeping it, and Nadia's anger faded once she found the screwdriver.`
          }
        ]
      }
    },
    {
      id: 'act-r7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Passage II: Paired Natural Science** 📋

*Passage A is adapted from an article on artificial light and insects. Passage B is adapted from an essay on insect conservation.*

> **Passage A:** Each summer night, a single streetlight can draw insects from a wide area and hold them circling until they are exhausted or eaten. Ecologists who studied roadside hedges found far fewer moth caterpillars beside lit stretches of road than beside dark ones, even where the hedges were otherwise alike. Because moths pollinate many night-blooming plants and feed birds and bats, the researchers argue that artificial light is a major and underrated driver of insect decline. Unlike many threats, they add, it is one that can be reversed with the flip of a switch.
>
> **Passage B:** Light at night does harm insects, and the hedge studies are convincing on their own terms. But insect declines have also been recorded in nature reserves far from any streetlight, where the likelier culprits are pesticides drifting in from farmland, the loss of wildflower meadows, and warmer, drier summers. Dimming streetlights is worth doing, since it is cheap and quick. The danger is that an easy fix becomes an excuse to avoid the harder work of protecting habitat.

Write your two five-word summaries first, then answer: A questions, B questions, then both.
      `,
      exercise: {
        questions: [
          {
            question: `(Passage A) Passage A presents the roadside hedge study mainly as evidence that:`,
            options: [
              `moths prefer hedges to open fields at night`,
              `streetlights are needed for safety on rural roads`,
              `birds and bats avoid lit stretches of road`,
              `artificial light reduces local moth numbers`
            ],
            correctAnswer: 3,
            explanation: `The study found far fewer caterpillars beside lit stretches than dark ones in otherwise similar hedges, which supports the claim that light cuts moth numbers. Hedges are compared with other hedges, not with open fields. Road safety is never discussed, and birds and bats appear only as animals that eat moths.`
          },
          {
            question: `(Passage B) The reference to declines in nature reserves "far from any streetlight" serves mainly to:`,
            options: [
              `prove that streetlights cause no harm to insects`,
              `suggest other factors also drive insect decline`,
              `explain why moths are drawn to artificial light`,
              `show that reserves have more insects than farms`
            ],
            correctAnswer: 1,
            explanation: `Declines where there are no streetlights point to other causes, which Passage B then lists: pesticides, lost meadows, and hotter summers. Passage B opens by agreeing that light does harm insects, so it is not proving the opposite. It never explains moths' attraction to light or compares insect counts in reserves and on farms.`
          },
          {
            question: `(Both) Both authors would most likely agree that:`,
            options: [
              `light pollution is the main cause of insect decline`,
              `pesticides do more harm to insects than light`,
              `reducing artificial light at night is worthwhile`,
              `habitat protection is too costly to pursue`
            ],
            correctAnswer: 2,
            explanation: `Passage A calls light a reversible threat worth switching off, and Passage B says dimming streetlights "is worth doing." Calling light the main cause is Passage A's view, which Passage B disputes. Passage A never ranks pesticides, and Passage B urges the hard work of habitat protection rather than dismissing it.`
          },
          {
            question: `(Both) Which choice best describes how Passage B relates to Passage A?`,
            options: [
              `B accepts A's evidence but doubts light is the main cause`,
              `B rejects A's evidence as poorly gathered`,
              `B offers a new study confirming A's conclusion`,
              `B argues that streetlights help some insects`
            ],
            correctAnswer: 0,
            explanation: `Passage B calls the hedge studies "convincing on their own terms" yet points to declines far from any light, so it qualifies how much light matters. Calling the studies convincing rules out rejecting them. Passage B cites no new study and disputes Passage A's ranking of light, and it never claims streetlights help insects.`
          },
          {
            question: `(Both) How would the author of Passage B most likely respond to Passage A's point that light pollution "can be reversed with the flip of a switch"?`,
            options: [
              `Switching lights off would make roads too dangerous`,
              `Light pollution cannot be reduced in any real way`,
              `Insects will return only if more streetlights are added`,
              `An easy fix must not replace protecting habitat`
            ],
            correctAnswer: 3,
            explanation: `Passage B agrees dimming is cheap and quick but warns that "an easy fix becomes an excuse to avoid the harder work of protecting habitat." Road danger is never raised. Passage B says dimming is worth doing, so it does not deny that light can be reduced, and adding streetlights contradicts both passages.`
          }
        ]
      }
    },
    {
      id: 'act-r7-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Debrief: Learn From Every Miss

Scoring the set is only half the work. For each question you missed or guessed, fill in one row of an error log:

| Question | Passage type | Question kind | Why I missed it | Fix for next time |
|---|---|---|---|---|
| e.g., I-3 | Literary narrative | Inference from a gesture | Chose "forgot it" | Ask what the dialogue around the gesture shows ("Did I.") |
| e.g., II-4 | Paired science | Relationship | Chose "rejects" | Check for a concession; conceding means qualifies, not rejects |

Then look for patterns:

- **Misses cluster in one passage type?** Move that type later in your reading order and reread the matching part of this lesson (Parts 1–5).
- **Misses cluster in one question kind?** Main-idea misses usually mean reading too fast; detail misses usually mean not returning to the line; paired misses usually mean swapped attribution.
- **Ran out of time?** Check your checkpoint times against Part 6 and tighten the triage.

**Time check:** Two sets in 20 minutes is test pace. If you needed 25, you are close; keep practicing the mark-and-move rule. If you needed 30 or more, shorten your reading time per passage and annotate more lightly.
      `
    },
    {
      id: 'act-r7-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Each passage type has its own target:** people in literary narrative, claims and evidence in social science, the author's insight in humanities, the investigation in natural science, and each author's position in paired sets.
- **Literary narrative:** gestures and dialogue carry the meaning; closeness can be shown entirely through actions.
- **Paired passages:** A, then B, then both. Concessions are where authors agree; "qualifies" is not "rejects."
- **Pace:** about ten minutes per set, with checkpoints, triage, and mark-and-move.
- **Debrief every set** with an error log sorted by passage type and question kind, and adjust your reading order to match.
      `
    }
  ]
}
