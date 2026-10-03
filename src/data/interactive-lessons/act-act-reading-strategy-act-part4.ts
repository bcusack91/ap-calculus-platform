export const actReadingStratPart4Data = {
  topicSlug: 'act-reading-strategy-act',
  sections: [
    {
      id: 'act-rs4-intro',
      type: 'text' as const,
      content: `
# 🎭 Tone and Author's Purpose

**Part 4 of 7 — Reading Attitude from Word Choice, Mixed Tones & Why the Author Includes a Detail**

## Tone: Direction, Then Strength

**Tone** is the author's or narrator's attitude toward the subject. You find it in **word choice**, not in the topic: a passage about a flood can be hopeful, and a passage about a party can be bitter.

Answer every tone question in two moves:

1. **Direction:** Is the language positive, negative, mixed, or neutral? Underline two or three charged words ("triumph," "rarely pauses," "much to celebrate").
2. **Strength:** How strong are those words? A choice with the right direction but the wrong strength is still wrong.

| Strength | Negative | Neutral | Positive |
|---|---|---|---|
| Strong | scathing, contemptuous, outraged | — | enthusiastic, reverent, celebratory |
| Moderate | critical, disapproving, indignant | — | admiring, approving, appreciative |
| Mild | skeptical, wary, reserved, concerned | objective, informative, detached | respectful, hopeful, mildly approving |

**Strength is set by the evidence, not by a rule.** Many ACT authors take moderate positions, so extreme tone words are often wrong. But when a reviewer writes "by any measure, a triumph," the tone really is enthusiastic, and "mild approval" undersells it. Match the words on the page.

## Mixed and Complex Tones

ACT tone choices are often two words. **Both halves must fit.**

| Tone | What it sounds like |
|---|---|
| admiring, with reservations | praise followed by "but," "though," "rarely" |
| qualified approval | "it works, mostly," "modest progress, but progress" |
| affectionately amused | jokes about a flaw plus clear fondness ("I wouldn't trade it for anything") |
| wistful / nostalgic | tender memory of something past or lost |
| wry | dry, understated humor, often about the writer's own situation |
| bittersweet | happiness and sadness together |

**Humor is not mockery.** A narrator who exaggerates a parent's quirks and then says she keeps the old toaster is fond, not dismissive. To call a tone *mocking* or *contemptuous*, the passage needs real disrespect.

**Narrator vs. character:** a character may be angry while the narrator, looking back, is gentle or amused. Answer for the person the question names.

## Purpose of the Whole Passage

**Typical stems:** *"The main purpose of the passage is to…," "The author's primary purpose is most likely to…"*

Purpose answers begin with a verb. Choose the verb first; it eliminates half the choices.

| Verb | Use it when the passage… |
|---|---|
| explain / describe | informs without taking a side |
| argue / advocate | takes a position and supports it |
| call attention to / celebrate | brings an overlooked person, place, or idea into view |
| challenge / question | pushes back against a common belief |
| compare | weighs two things against each other |
| recount / reflect on | tells a story, often looking back on what it meant |

The opening and closing lines are the best clues. "Few people today remember…" usually signals a passage whose purpose is to call attention to someone overlooked.

## Purpose of a Detail

**Typical stems:** *"The author most likely mentions the 1978 price in order to…," "The reference to professional photographers mainly serves to…"*

Ask: **What would the argument lose if this detail were gone?** Common answers:

- **Contrast:** an old price, method, or belief makes the present stand out ("forty cents then, six dollars now, and the line is longer than ever").
- **Example:** a concrete case makes a general claim believable.
- **Emphasis:** a number or vivid image shows how big, small, or surprising something is.
- **Concession:** a point for the other side, which the author then answers.
- **Setup:** background the next paragraph builds on.

**Trap:** choices that describe what the detail *is* ("gives the price of bread in 1978") instead of what it *does* ("stresses the bakery's lasting appeal despite rising prices"), or that assign the author an attitude the passage never shows ("criticizes the bakery for raising prices").
      `
    },
    {
      id: 'act-rs4-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: A mixed tone in a review</b></summary>

**Passage:** The podcast's host is a gifted storyteller, and the first three episodes are as gripping as any thriller. By the fifth, though, the cliffhangers start to feel manufactured, and a listener begins to suspect there is less mystery here than the music suggests.

**Direction:** positive words ("gifted," "gripping") followed by negative ones ("manufactured," "less mystery"). → **mixed**

**Strength:** the praise is real and the criticism is measured ("begins to suspect"). → moderate on both sides

**Best answer:** "appreciative but increasingly doubtful." Reject "scathing" (too strong and ignores the praise), "wholly enthusiastic" (ignores "though"), and "neutral" (the reviewer clearly judges).
</details>

<details>
<summary><b>Example 2: Why the author includes a detail</b></summary>

**Passage:** In 1900, a message from London to New York traveled by undersea cable and arrived hours after it was sent, if the operators were not busy. Today a video call between the two cities connects in under a second. Yet many people say they feel no closer to distant relatives than their great-grandparents did.

**Question:** The author most likely mentions the 1900 cable message in order to:

**Deletion test:** without it, we lose the sense of how dramatically communication has sped up, and the "Yet" sentence loses its surprise.

**Answer:** to set up a contrast that makes the final point (faster communication has not made people feel closer) more striking. A choice such as "explain how undersea cables were built" describes the topic, not the purpose.
</details>
      `
    },
    {
      id: 'act-rs4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Read the Tone** 🎯

**Passage A**

The city's new transit app works, mostly. It finds the nearest bus, estimates arrival times that are right more often than not, and crashes only occasionally. For a city that once posted schedules on paper taped to poles, that counts as progress: modest progress, but progress.

**Passage B**

Every Sunday my grandmother called to report the weather in her town, three hundred miles away, as if we might be planning a visit that afternoon. "Sunny, sixty-two," she would announce, and then hang up. We teased her about it for years. Now, on Sundays, I sometimes check her town's forecast anyway.

**Passage C**

Tardigrades, animals less than a millimeter long, can survive almost complete drying out. As they dry, they curl into a shape called a tun, and their metabolism slows to a level that is difficult to detect. When water returns, many of them resume normal activity within hours.
      `,
      exercise: {
        questions: [
          {
            question: `The author's attitude toward the transit app in Passage A is best described as:`,
            options: [`unreserved enthusiasm`, `bitter disappointment`, `qualified approval`, `complete indifference`],
            correctAnswer: 2,
            explanation: `The author calls the app progress but limits every compliment: it works "mostly," is right "more often than not," and crashes "only occasionally." That is approval with qualifications. The limits rule out unreserved enthusiasm, the author does call it progress, which is not disappointment, and the author plainly cares enough to judge it.`,
          },
          {
            question: `Which word in Passage A most clearly limits the author's praise?`,
            options: [`"progress"`, `"finds"`, `"works"`, `"mostly"`],
            correctAnswer: 3,
            explanation: `"Mostly" takes the opening claim that the app works and immediately qualifies it. "Works," "finds," and "progress" are the positive words being limited, so none of them restrains the praise.`,
          },
          {
            question: `The narrator's tone in Passage B is best described as:`,
            options: [`mocking impatience`, `wistful affection`, `cold detachment`, `angry regret`],
            correctAnswer: 1,
            explanation: `The narrator remembers the grandmother's odd habit with gentle humor and now repeats it, which shows fondness and a sense of loss. The family "teased her," but the narrator's present-day habit shows the teasing was not impatient mockery. The memory is warm rather than cold, and nothing in it expresses anger.`,
          },
          {
            question: `The tone of Passage C is best described as:`,
            options: [`objective and informative`, `alarmed and urgent`, `skeptical and dismissive`, `playful and mocking`],
            correctAnswer: 0,
            explanation: `Passage C reports facts about the tun state without any charged words, so its tone is objective. Nothing in it signals danger, doubt, or humor, which rules out alarmed, skeptical, and playful tones.`,
          },
        ],
      },
    },
    {
      id: 'act-rs4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Direction and Strength** 🔍

Choose the tone each sentence expresses toward its subject.
      `,
      exercise: {
        dropdowns: [
          {
            label: '"The renovation is, without exaggeration, the finest thing to happen to this neighborhood in fifty years."',
            options: ['enthusiastic', 'mildly approving', 'neutral', 'mildly critical'],
          },
          {
            label: '"The renovation added twelve apartments and a ground-floor bakery."',
            options: ['enthusiastic', 'mildly approving', 'neutral', 'mildly critical'],
          },
          {
            label: '"The renovation is pleasant enough, though the new windows seem a little small for the rooms."',
            options: ['enthusiastic', 'mildly approving', 'neutral', 'mildly critical'],
          },
        ],
        correctAnswers: ['enthusiastic', 'neutral', 'mildly approving'],
        hint1: '"Without exaggeration, the finest… in fifty years" is as strong as praise gets.',
        hint2: 'Facts only, no charged words.',
        hint3: '"Pleasant enough" is positive but limited; the window complaint is small.',
        explanation: 'Strength comes from the words: "the finest thing… in fifty years" is enthusiastic, a list of facts is neutral, and "pleasant enough" with one small complaint is mild approval, positive on balance but restrained.',
      },
    },
    {
      id: 'act-rs4-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

**Passage:** When the bakery on Orchard Street opened in 1978, a loaf of its rye bread cost forty cents. Today the same loaf costs six dollars, and the line out the door on Saturday mornings is longer than ever. Regulars insist no supermarket bread tastes the same.

<details>
<summary><b>Try it: Why does the author most likely mention the 1978 price?</b></summary>

To stress the bakery's lasting appeal: prices have risen many times over, yet the line has only grown. The author never complains about the increase, so "to criticize the bakery's prices" assigns an attitude the passage does not show.
</details>

<details>
<summary><b>Try it: Is the author's tone toward the bakery critical, neutral, or appreciative?</b></summary>

Appreciative, though mildly. The details (a longer line than ever, loyal regulars) are chosen to show the bakery's appeal. There is no criticism, and the author is not purely neutral, because the facts are selected to make a point.
</details>

**ACT Tip:** For two-word tone answers, test each word separately. "Admiring but skeptical" is wrong if the author is admiring but never skeptical, and a half-right tone answer is a whole wrong answer.
      `
    },
    {
      id: 'act-rs4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋

Humanities: this passage is about an early-twentieth-century photographer.

¶1 Few visitors to the county museum notice the small case of photographs near the back stairs. They should. The pictures, taken between 1902 and 1915, are the work of Hattie Brandt, a farm wife who bought an inexpensive box camera from a mail-order catalog.

¶2 A generation earlier, making a photograph had required heavy equipment, fragile glass plates, and a subject willing to sit perfectly still. Brandt's camera fit in a coat pocket, and she carried it everywhere: to harvests, to church picnics, to the edge of the river during the flood of 1908.

¶3 Professional photographers of the era mostly made formal portraits in their studios. Brandt photographed what they ignored: children asleep in wagon beds, women hanging laundry in the wind.

¶4 Historians now treat her pictures as some of the best surviving records of ordinary farm life in the region. The museum, it seems, has not yet caught up with them.
      `,
      exercise: {
        questions: [
          {
            question: `The main purpose of the passage is to:`,
            options: [
              `explain how early box cameras were manufactured`,
              `call attention to an overlooked photographer's work`,
              `argue that studio portraits have no historical value`,
              `describe the flood of 1908 and the damage it caused`,
            ],
            correctAnswer: 1,
            explanation: `The passage opens with "Few visitors… notice" and "They should," praises Brandt's subjects, and closes by noting that historians value her work while the museum does not. That is a passage meant to bring overlooked work into view. Cameras and the flood are brief details, and the passage contrasts studio portraits with Brandt's work without calling them worthless.`,
          },
          {
            question: `The author most likely describes the photographic equipment of "a generation earlier" (paragraph 2) in order to:`,
            options: [
              `show how much easier Brandt's camera made photography`,
              `criticize earlier photographers for their slow methods`,
              `explain why glass plates were difficult to manufacture`,
              `suggest that Brandt preferred older kinds of equipment`,
            ],
            correctAnswer: 0,
            explanation: `The heavy equipment and still subjects set up a contrast with a camera that "fit in a coat pocket" and went everywhere, which explains how Brandt could take the pictures she did. The author does not fault earlier photographers, never explains how plates were made, and shows Brandt using the new camera rather than preferring old ones.`,
          },
          {
            question: `The description of professional photographers in paragraph 3 mainly serves to:`,
            options: [
              `explain why Brandt's photographs were rarely exhibited`,
              `show that Brandt learned her craft in a portrait studio`,
              `argue that portrait studios charged too much money`,
              `contrast their usual subjects with the ones Brandt chose`,
            ],
            correctAnswer: 3,
            explanation: `"Brandt photographed what they ignored" makes the professionals a point of contrast: formal studio portraits versus everyday farm scenes. The passage never connects the professionals to how often her work was shown, never says she trained in a studio, and says nothing about studio prices.`,
          },
          {
            question: `The author's tone toward the museum in the final sentence is best described as:`,
            options: [`openly hostile`, `warmly approving`, `gently critical`, `entirely neutral`],
            correctAnswer: 2,
            explanation: `"Has not yet caught up" faults the museum for undervaluing Brandt, but the phrasing is mild and a little wry, especially with "it seems." Hostility would require harsher language, the sentence is a criticism and so not approving, and it clearly takes a position, so it is not neutral.`,
          },
          {
            question: `The short sentence "They should" (paragraph 1) mainly serves to:`,
            options: [
              `criticize visitors for being careless with the exhibits`,
              `signal the author's view that the photographs deserve notice`,
              `suggest that the case of photographs should be moved upstairs`,
              `reveal that the author once worked at the county museum`,
            ],
            correctAnswer: 1,
            explanation: `Right after "Few visitors… notice," the two-word sentence states the author's own judgment that the pictures merit attention, which sets up the passage's purpose. Visitors are faulted only for not noticing, not for carelessness; the passage never proposes moving the case; and it says nothing about the author's job history.`,
          },
        ],
      },
    },
    {
      id: 'act-rs4-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Tone lives in word choice.** Underline two or three charged words before reading the choices.
- **Direction, then strength.** A choice with the right direction but the wrong intensity is wrong; let the passage's words, not a rule, set the strength.
- **Two-word tones: both words must fit.** Watch for praise followed by "but," "though," or "rarely."
- **Humor plus fondness is affection, not mockery.** "Mocking" and "contemptuous" need real disrespect in the text.
- **Passage purpose starts with a verb:** explain, argue, call attention to, challenge, compare, recount. Check the first and last lines.
- **Detail purpose = what the detail does:** contrast, example, emphasis, concession, or setup. Reject choices that merely restate the detail or invent an attitude.
      `
    }
  ]
};
