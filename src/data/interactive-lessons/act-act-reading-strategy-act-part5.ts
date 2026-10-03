export const actReadingStratPart5Data = {
  topicSlug: 'act-reading-strategy-act',
  sections: [
    {
      id: 'act-rs5-intro',
      type: 'text' as const,
      content: `
# 🧩 Inference: The Least-Extreme Supported Answer

**Part 5 of 7 — One Step Beyond the Text, Characters' Actions, Survey Language & Correlation vs. Cause**

## What an ACT Inference Is

**Typical stems:** *"It can most reasonably be inferred that…," "The passage most strongly suggests that…," "Based on the passage, the narrator most likely…," "Which conclusion is best supported by the passage?"*

An inference is **not** a creative guess. It is a conclusion that is **one short step** from what the text says, so close that you could point to the lines that prove it. The test is simple:

> **Could I defend this answer by putting my finger on specific words in the passage?**

If the answer "could be true" but nothing in the passage requires it, it is wrong. ACT wrong answers are often perfectly reasonable things to believe; they just go further than the evidence.

## The Least-Extreme Principle

When several choices point in the right direction, the correct one is usually the **most modest** statement the passage **fully** supports.

| Strong (needs strong evidence) | Modest (easier to support) |
|---|---|
| all, every, none, never, always | many, some, few, often, rarely |
| proves, causes, cures, guarantees | suggests, is linked to, may help |
| must, certainly, only | likely, probably, can |
| the most, the best, entirely | one of, among, largely |

**Caution:** modest wording does not make a choice right by itself. It still has to be supported. And when the passage itself is strong ("No one in the village had ever seen snow"), a strong answer can be correct. The rule is **match the strength of the evidence**, which in practice usually means picking the more careful choice.

## Four Places Inferences Hide

**1. Characters' actions (literary narrative).** Narratives rarely say "she was nervous." They show it: hands that are "not quite steady," laughter "a beat too late," a plate left untouched. Infer the **feeling** the actions point to, and stop there. If a character reacts strongly after reading a letter, the safe inference is that something in the letter troubled him, not what the letter said.

**2. Quantity words (social and natural science).** Match the size of the claim to the size of the data.

| The passage says | Supported | Not supported |
|---|---|---|
| "more than half" | many / most | every, all |
| "a small share" | few, some | none, no effect |
| "rose in three of four years" | generally increased | increased every year |

**3. Correlation vs. cause.** If two things happened **together** in a study, the supported inference is that they were **associated** ("went along with," "was linked to"). Saying one **caused** the other needs an experiment that isolates the cause, and ACT passages often warn you directly: "The researchers cautioned that the study could not show which change caused the other."

**4. Unsettled situations.** When the passage says "no one yet knows," lists several competing proposals, or mentions a future study, the supported inference is that the question is **still open**. A choice that picks a winner goes beyond the text.

## The Elimination Checklist

For each choice, ask four questions. One "yes" eliminates it.

1. **Contradicted?** Does any line in the passage say otherwise?
2. **Too far?** Does it need an extra step or fact the passage does not give?
3. **Too strong?** Does it use all/never/proves/causes where the passage says some/often/suggests/was linked to?
4. **Outside knowledge?** Is it something you know from school or life rather than from this passage?

Whatever survives should be a choice you can defend with a quotation.

## Inference vs. Detail

A **detail** question ("According to the passage…") has its answer stated outright. An **inference** question has its answer stated *almost* outright. The supporting evidence is just as concrete; you are only allowed one step. If your reasoning for a choice needs the word "probably" twice, you have gone too far.
      `
    },
    {
      id: 'act-rs5-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Inferring a feeling from actions</b></summary>

**Passage:** Marisol read the email twice, closed her laptop, and stood at the window for a long time. When her roommate came home and asked about dinner, she said she wasn't hungry, then went for a run in the rain.

**Question:** It can most reasonably be inferred that Marisol:
- has been offered a job in another city (too far: the email's contents are never revealed) ✗
- is upset or unsettled by the email she read ✓ (rereading, staring, skipping dinner, a run in the rain all right after the email)
- is angry at her roommate for asking about dinner (no evidence; the roommate's question is ordinary) ✗
- never eats dinner on weekdays (too strong and unsupported) ✗

**Why it works:** the right answer names the feeling the actions show and stops there.
</details>

<details>
<summary><b>Example 2: Association, not cause</b></summary>

**Passage:** In a study of 1,200 adults, those who slept at least seven hours a night scored higher on a memory test than those who slept less. The researchers noted that people with demanding jobs, who often sleep less, may also be more stressed on test day.

**Question:** Which conclusion is best supported?
- Sleeping seven hours causes better memory (claims cause; the researchers name another possible explanation) ✗
- In the study, more sleep was associated with higher memory scores ✓
- Adults who sleep less than seven hours have poor memories (too strong; they only scored lower on average) ✗
- Stress has no effect on memory test scores (contradicts the researchers' note) ✗
</details>
      `
    },
    {
      id: 'act-rs5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**One Step, No Further** 🎯

**Passage A:** Priya checked the mailbox three times before noon, though the mail never came until two. When the truck finally turned onto her street, she was already standing at the curb.

**Passage B:** In a survey of 400 library users, about 70 percent said they visit mainly to borrow books, and roughly 20 percent come mainly to use the computers. Only a few mentioned the library's study rooms.

**Passage C:** In a study of 2,000 adults, dog owners walked, on average, about twenty minutes more each day than people without dogs. The researchers noted that people who already enjoy walking may be more likely to get a dog.

**Passage D:** The county has received three bids to rebuild the Mill Road bridge. The lowest comes from a company that has never built a bridge of this size; the highest comes from the firm that built the original span in 1958. Officials expect to make a choice by spring.
      `,
      exercise: {
        questions: [
          {
            question: `Based on Passage A, it can most reasonably be inferred that Priya:`,
            options: [
              `is waiting for a paycheck from her new employer`,
              `is eager for something she expects in the mail`,
              `dislikes the mail carrier who serves her street`,
              `has never received a letter before this week`,
            ],
            correctAnswer: 1,
            explanation: `Checking the box repeatedly hours early and waiting at the curb point to eagerness for something arriving by mail. A paycheck is one possible item, but the passage never says what she expects, so naming it goes too far. Nothing suggests she dislikes the carrier, and "never received a letter" has no support at all.`,
          },
          {
            question: `Passage B most strongly suggests that:`,
            options: [
              `no users visit the library to use its study rooms`,
              `the library should remove most of its computers`,
              `every user surveyed borrows a book on each visit`,
              `borrowing books is the main draw for most users`,
            ],
            correctAnswer: 3,
            explanation: `About 70 percent visiting mainly to borrow books supports the modest conclusion that books are the main draw for most of those surveyed. "Only a few" mentioned study rooms, which is not none. The survey gives no basis for removing computers, and "every user… each visit" stretches 70 percent into all.`,
          },
          {
            question: `Which conclusion is best supported by Passage C?`,
            options: [
              `In the study, owning a dog went along with more daily walking`,
              `Owning a dog causes people to walk twenty more minutes a day`,
              `Adults who do not own dogs rarely walk for exercise at all`,
              `People who dislike walking will never choose to own a dog`,
            ],
            correctAnswer: 0,
            explanation: `The study shows that dog ownership and extra walking occurred together, and the researchers point out that walkers may simply be more likely to get dogs, so association is all the passage supports. "Causes" claims exactly what the researchers question. The passage compares averages, so it cannot show that non-owners rarely walk, and "never" is far too strong.`,
          },
          {
            question: `Passage D most strongly suggests that:`,
            options: [
              `officials prefer the company with the lowest bid`,
              `the firm that built the 1958 span will be chosen`,
              `the county had not yet chosen a builder`,
              `the original bridge was poorly constructed`,
            ],
            correctAnswer: 2,
            explanation: `Three open bids and officials who "expect to make a choice by spring" show that no builder had been selected yet. The passage reports both bids neutrally, so a preference for either company goes beyond the text, and nothing is said about how well the original bridge was built.`,
          },
        ],
      },
    },
    {
      id: 'act-rs5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Supported or Too Far?** 🔍

Passage: *During a three-year trial, farms that planted strips of wildflowers beside their fields had more bees visiting their crops than farms without the strips. Yields of some crops were also higher on the wildflower farms, though the researchers said weather differences between farms may have played a role.*
      `,
      exercise: {
        dropdowns: [
          {
            label: '"In the trial, wildflower strips were linked to more bee visits."',
            options: ['supported', 'too strong', 'contradicted', 'needs outside knowledge'],
          },
          {
            label: '"Wildflower strips guarantee higher crop yields."',
            options: ['supported', 'too strong', 'contradicted', 'needs outside knowledge'],
          },
          {
            label: '"Weather could not have affected the results."',
            options: ['supported', 'too strong', 'contradicted', 'needs outside knowledge'],
          },
          {
            label: '"Bees are responsible for pollinating most of the world\'s food crops."',
            options: ['supported', 'too strong', 'contradicted', 'needs outside knowledge'],
          },
        ],
        correctAnswers: ['supported', 'too strong', 'contradicted', 'needs outside knowledge'],
        hint1: 'The passage directly compares bee visits on farms with and without strips.',
        hint2: '"Guarantee" goes beyond "some crops" and the researchers\' weather caution.',
        hint3: 'What did the researchers say about weather?',
        explanation: 'More bee visits on strip farms supports "linked to." "Guarantee higher yields" ignores "some crops" and the weather caution. The researchers say weather "may have played a role," which contradicts "could not have." And a claim about the world\'s food crops comes from outside knowledge, not this passage.',
      },
    },
    {
      id: 'act-rs5-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

**Passage:** The town council voted to keep the old fire station rather than tear it down, though no one yet knows what the building will become. A bakery, a youth center, and a bike shop have all been proposed. Whatever its future, the vote means that the station's brass bell, which has hung over the square since 1911, will stay where it is.

<details>
<summary><b>Try it: Which is better supported: "the council plans to open a youth center" or "the building's future use had not been decided"?</b></summary>

The second. "No one yet knows what the building will become," and the youth center is only one of three proposals. Choosing one proposal picks a winner the passage never names.
</details>

<details>
<summary><b>Try it: An answer says "most residents wanted to save the station." Why is it wrong?</b></summary>

It is too far. The passage reports the council's vote, not residents' opinions. A council can vote for many reasons; you would need a survey or a quote to support a claim about "most residents."
</details>

**ACT Tip:** Before choosing an inference answer, finish this sentence: "I know this because the passage says ___." If you cannot fill the blank with actual words from the passage, keep looking.
      `
    },
    {
      id: 'act-rs5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋

Literary narrative: this passage is adapted from a story about a graduation speech.

Elena had rehearsed the speech in the car, in the shower, and twice for the cat. Now, standing at the podium in the school gym, she unfolded her notes and found that her hands were not quite steady. She looked for her father in the bleachers. He was in the third row, exactly where he had said he would be, holding his phone up to record, though she had told him a dozen times not to. She smiled despite herself, took a breath, and began.

Afterward, the principal shook her hand and called the speech "very thoughtful." Elena thanked her. It was her father's review she was waiting for, and he gave it in the parking lot: he had not, he admitted, been able to hold the phone steady either.
      `,
      exercise: {
        questions: [
          {
            question: `It can reasonably be inferred that, as she began the speech, Elena felt:`,
            options: [
              `calm, because she had memorized every word`,
              `angry that her father had decided to come`,
              `unsure what her speech was supposed to be about`,
              `nervous despite all of her practice`,
            ],
            correctAnswer: 3,
            explanation: `Hands that were "not quite steady," despite rehearsing in the car, the shower, and for the cat, point to nerves in spite of preparation. Unsteady hands rule out calm, she smiles at her father rather than resenting his presence, and the rehearsals show she knew her speech well.`,
          },
          {
            question: `Elena most likely "smiled despite herself" because:`,
            options: [
              `the principal had just praised her speech`,
              `her father's habit comforted her even as it annoyed her`,
              `she realized she had brought the wrong notes to the podium`,
              `the audience in the bleachers had started laughing`,
            ],
            correctAnswer: 1,
            explanation: `She had told her father "a dozen times" not to record, yet seeing him there, exactly where he promised, makes her smile: the habit irritates her and reassures her at once, which is what "despite herself" signals. The principal speaks only afterward, nothing suggests wrong notes, and the audience never laughs in the passage.`,
          },
          {
            question: `The final sentence most strongly suggests that Elena's father:`,
            options: [
              `was emotional while watching her speak`,
              `forgot to record the speech on his phone`,
              `thought the speech had gone on too long`,
              `disagreed with the principal's opinion`,
            ],
            correctAnswer: 0,
            explanation: `His admission that he could not hold the phone steady "either" echoes her unsteady hands, a gentle way of saying he was moved or nervous too. He was recording, so he did not forget; nothing suggests he found the speech long; and he never responds to the principal's comment.`,
          },
          {
            question: `The passage suggests that Elena valued her father's opinion of the speech:`,
            options: [
              `less than her classmates' reactions`,
              `only when he agreed with her teachers`,
              `more than she valued the principal's praise`,
              `because he was a skilled public speaker himself`,
            ],
            correctAnswer: 2,
            explanation: `After politely thanking the principal, Elena is "waiting for" her father's review, which shows his opinion matters more to her. Classmates and teachers are never mentioned, and the passage gives no information about her father's own speaking skill.`,
          },
          {
            question: `Which statement about the speech is best supported by the passage?`,
            options: [
              `It earned a standing ovation from the audience`,
              `Elena delivered it after a moment of unsteadiness`,
              `Elena forgot a key part of it partway through`,
              `It won an award from the school that day`,
            ],
            correctAnswer: 1,
            explanation: `The passage shows her unsteady hands, her smile, and a breath before she "began," so she started after a shaky moment. No ovation, memory lapse, or award is mentioned; each of those would be an invented detail.`,
          },
        ],
      },
    },
    {
      id: 'act-rs5-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **An inference is one short step from the text.** You should be able to point to the words that prove it.
- **"Could be true" is not enough.** Wrong answers are often reasonable beliefs that the passage does not require.
- **Pick the least extreme choice the evidence fully supports.** Watch all/every/never/proves/causes; prefer the careful claim unless the passage itself is strong.
- **Characters:** infer the feeling their actions show, not the facts the story withholds.
- **Data:** match the quantity ("more than half" is not "every"; "a few" is not "none").
- **Together is not cause.** A study that finds two things together supports "associated with," especially when the researchers warn against claiming cause.
- **Open questions stay open.** Competing proposals or a planned study mean nothing has been decided.
- **Eliminate** anything contradicted, too far, too strong, or based on outside knowledge.
      `
    }
  ]
};
