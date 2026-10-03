export const actPassageTypesPart6Data = {
  topicSlug: 'act-reading-passage-types-act',
  sections: [
    {
      id: 'act-r6-intro',
      type: 'text' as const,
      content: `
# ⏱️ Reading Passage Types

**Part 6 of 7 — Approaching Each Passage Type Under Time**

Parts 1–5 taught what to read for in each passage family. This part puts those skills on the clock.

## The Clock

| Fact | Enhanced ACT Reading |
|---|---|
| Questions | 36 |
| Time | 40 minutes |
| Passage sets | 4 (usually nine questions each; one may be a paired set) |
| Answer choices | 4 per question |
| Wrong-answer penalty | None, so never leave a question blank |

That works out to **about ten minutes per set**: roughly **3–4 minutes to read** and **5–6 minutes for the questions**, a little over half a minute per question. Use checkpoints instead of watching every second:

| Checkpoint | Sets finished |
|---|---|
| 10:00 | 1 |
| 20:00 | 2 |
| 30:00 | 3 |
| 39:00 | 4, with a minute to fill in any blanks |

If you reach a checkpoint two or more minutes late, speed up on the next set: read the passage a little faster, use the triage below, and do not let any single question take more than about a minute.

## Choose Your Reading Order

You may work the passage sets in **any order** within the section. Use that freedom:

1. **Start with your strongest type.** Quick, confident points early build a time cushion.
2. **Save your weakest type for last.** If time runs short, the crunch lands on the set you were most likely to miss anyway.
3. **Decide before test day.** Choosing in the moment costs time. Each passage opens with a short note naming its type and source, so a five-second glance tells you where you are.

## Read Each Type for Its Own Target

| Type | Read mainly for | Annotate | Time watch-out |
|---|---|---|---|
| Literary narrative | Characters, wants, changes, narrator | Names, the turning sentence, tone words | Don't reread for every feeling; mark where the shift happens |
| Social science | Claim, evidence, voices | The claim, each *however*, concessions, who says what | Don't memorize statistics; circle them to find later |
| Humanities | The author's attitude and insight | Evaluative words, quotes from the artist, critics' views | Keep voices apart in the margin (A = author, C = critics) |
| Natural science | Hypothesis, method, results, limits | A stage label per paragraph; box defined terms | Don't learn the science; you only need to find it again |
| Paired passages | Each author's position | A five-word summary under each passage | Answer A questions before reading B |

## Annotate Lightly

Annotation exists to help you **find things fast**, not to rewrite the passage.

- **Margin labels:** three to five words per paragraph ("critics mourn," "A: half right," "sound = neighbor").
- **Underline** claims and turns (*but, however, yet, half right*).
- **Box** names, dates, and numbers so detail questions take seconds.
- **Mark tone words** in literary and humanities passages.
- On the computer-based test, use the **highlighter tool** the same way, sparingly.

If more than a third of a paragraph is marked, you are over-annotating.

## Triage the Questions in Each Set

Questions within a set are not arranged from easy to hard. Sort them as you go:

| Pass | Question kind | Why |
|---|---|---|
| First pass | Line or paragraph references, specific details, word in context | One spot in the passage holds the answer |
| Second pass | Function, inference, viewpoint ("X would most likely agree") | Need a paragraph or a voice, not just a line |
| Last | Main idea, purpose of the whole passage, "both passages" questions | Easiest once you have worked the details |

**Mark-and-move rule:** if you are still stuck between two choices after about a minute, pick the better one, mark the question, and move on. Return only if time remains.

## Predict, Then Eliminate

For each question, form a short answer in your own words **before** reading the choices, then eliminate any choice with a single unsupported word. With four choices, eliminating two leaves you a coin flip at worst, and often one remaining choice clearly matches your prediction.

## Paired Sets on the Clock

A paired set still gets about ten minutes. Read A (about two minutes), answer the A questions; read B, answer the B questions; then write two five-word summaries and do the "both" questions. Reading both passages first and then answering everything usually costs time, because you end up rereading A.

## The Emergency Plan

With about four minutes left and an untouched set:

1. Read the intro note and the first sentence of each paragraph.
2. Answer line-reference and detail questions first; they need only the lines they point to.
3. Fill in an answer for every remaining question before time is called.
      `
    },
    {
      id: 'act-r6-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Triage a set</b></summary>

**Question:** A social science set has these stems. Sort them into first pass, second pass, and last.

1. According to paragraph 2, the survey was conducted in:
2. The main purpose of the passage is to:
3. As used in line 31, "check" most nearly means:
4. The author mentions the 1970 census primarily to:
5. Based on the passage, the researcher would most likely agree that:
6. The passage states that rents rose by:

**Solution:**
- **First pass:** 1, 3, and 6. Each points to a single line or fact.
- **Second pass:** 4 (function of a detail) and 5 (viewpoint). Each needs a paragraph or a voice.
- **Last:** 2 (main purpose). After the first five, you already know the passage well enough to answer it quickly.
</details>

<details>
<summary><b>Example 2: Read the clock</b></summary>

**Question:** A student finishes the second set at 23:00. Is the student on pace, and what should change?

**Solution:**
1. The 20:00 checkpoint calls for two sets done, so the student is **three minutes behind**.
2. Seventeen minutes remain for two sets, about 8.5 minutes each.
3. Adjustments: read the next passage in about three minutes, answer first-pass questions immediately, apply the mark-and-move rule strictly, and make sure every bubble is filled before 40:00. Slowing down to "be careful" would make the shortfall worse.
</details>
      `
    },
    {
      id: 'act-r6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Strategy Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `A student is strongest on natural science passages and weakest on literary narrative. Which plan for reading order best follows the strategy in this lesson?`,
            options: [
              `Always work the passages in the printed order`,
              `Start with natural science; leave literary for last`,
              `Start with literary narrative to get it out of the way`,
              `Skip literary narrative entirely and leave it blank`
            ],
            correctAnswer: 1,
            explanation: `Starting with the strongest type banks points and time early, and putting the weakest type last means any time crunch lands where points were least likely anyway. The printed order ignores the student's strengths, starting with the weakest risks burning time early, and blanks earn nothing when there is no penalty for guessing.`
          },
          {
            question: `A student finishes the second passage set at 21:00. Based on a pace of about ten minutes per set, the student should:`,
            options: [
              `slow down to make sure the last two sets are perfect`,
              `skip the third set and go straight to the fourth set`,
              `stop reading passages and answer only from memory`,
              `speed up slightly to finish two sets in 19 minutes`
            ],
            correctAnswer: 3,
            explanation: `The 20:00 checkpoint calls for two sets done, so the student is one minute behind and has 19 minutes for two sets, which calls for a slightly faster pace. Slowing down widens the gap. Skipping a whole set throws away about nine questions, and answering without the passage abandons the evidence every answer needs.`
          },
          {
            question: `Which annotation is most useful while reading a social science passage under time?`,
            options: [
              `Marking the researcher's claim and each "however"`,
              `Underlining every number in the whole passage`,
              `Copying the first sentence of each paragraph`,
              `Writing a summary after answering all questions`
            ],
            correctAnswer: 0,
            explanation: `Social science passages are arguments, so marking the claim and the turns lets you find the main idea, evidence, and opposing views quickly. Underlining every number over-annotates; boxing a few is enough. Copying sentences takes time without sorting anything, and a summary written after the questions cannot help answer them.`
          },
          {
            question: `Which question from a passage set is usually best saved until the end of that set?`,
            options: [
              `What does "grave" most nearly mean in line 14?`,
              `According to paragraph 3, when did the study begin?`,
              `The main purpose of the passage is to:`,
              `In line 22, the phrase "to be sure" signals that:`
            ],
            correctAnswer: 2,
            explanation: `A main-purpose question covers the whole passage and gets easier after you have worked its details. The word-in-context, paragraph-detail, and line-reference questions each point to one spot in the passage, so they belong in the first pass.`
          }
        ]
      }
    },
    {
      id: 'act-r6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Type to the Target** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Literary narrative: read mainly for …',
            options: ['the claim and its evidence', 'characters, wants, and changes', 'hypothesis, method, and results', 'each author\'s position']
          },
          {
            label: 'Natural science: read mainly for …',
            options: ['characters, wants, and changes', 'each author\'s position', 'hypothesis, method, and results', 'the claim and its evidence']
          },
          {
            label: 'Social science: read mainly for …',
            options: ['hypothesis, method, and results', 'the claim and its evidence', 'characters, wants, and changes', 'each author\'s position']
          }
        ],
        correctAnswers: ['characters, wants, and changes', 'hypothesis, method, and results', 'the claim and its evidence'],
        hint1: 'Literary narrative has no thesis; meaning lives in people.',
        hint2: 'Natural science passages usually tell the story of an investigation.',
        hint3: 'Social science passages are arguments about people and societies.',
        explanation: 'Literary narrative is read for characters, what they want, and how they change. Natural science is read for the investigation: hypothesis, method, and results. Social science is read for the claim and the evidence behind it. Each author\'s position is the target in a paired set.'
      }
    },
    {
      id: 'act-r6-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Practice: A Timed Humanities Mini-Set** 📋

Set a timer for **four minutes**. Read with light annotation, then work the questions in triage order: detail and word-in-context first, viewpoint second, main purpose last.

> **¶1** When the silent film era ended in the late 1920s, many critics mourned. Silent actors, they argued, had developed a language of gesture so precise that spoken dialogue could only cheapen it.
>
> **¶2** The film historian Ruth Abara thinks the mourners were half right. Early sound films were often stiff, she notes, because bulky microphones forced actors to stand still beside hidden equipment. But within a few years, quieter cameras and movable microphones freed performers again, and directors learned to let sound do what gesture could not: a whisper from offscreen, a door closing in another room.
>
> **¶3** "Sound did not kill the art of the image," Abara writes. "It gave the image a neighbor."

| Margin notes a strong reader might make | |
|---|---|
| ¶1 | critics mourn silent era |
| ¶2 | Abara: "half right"; early stiff, then freed (underline **But**) |
| ¶3 | sound = image's "neighbor" |
      `,
      exercise: {
        questions: [
          {
            question: `(First pass: detail) According to the passage, early sound films were often stiff because:`,
            options: [
              `audiences disliked hearing actors speak`,
              `microphones kept actors standing still`,
              `directors refused to record spoken dialogue`,
              `silent actors had trouble memorizing lines`
            ],
            correctAnswer: 1,
            explanation: `Paragraph 2 says bulky microphones "forced actors to stand still beside hidden equipment." Audience dislike and trouble with memorizing are never mentioned, and directors did record dialogue; the passage describes them learning to use sound well.`
          },
          {
            question: `(First pass: word in context) In paragraph 3, the word "neighbor" most nearly suggests that sound became:`,
            options: [
              `a rival that replaced the image`,
              `a nuisance that distracted viewers`,
              `a fixed rule imposed on directors`,
              `a companion that worked beside the image`
            ],
            correctAnswer: 3,
            explanation: `Abara says sound "did not kill the art of the image" but sat beside it, and paragraph 2 shows sound adding effects gesture could not. A rival that replaced the image is exactly what she denies. Nothing presents sound as a distraction or a rule forced on directors.`
          },
          {
            question: `(Second pass: viewpoint) Abara would most likely agree that the critics who mourned the silent era were:`,
            options: [
              `right about early sound films, wrong overall`,
              `entirely wrong about every early sound film`,
              `correct that dialogue permanently cheapened film`,
              `mistaken about how precise silent gesture was`
            ],
            correctAnswer: 0,
            explanation: `Abara calls the mourners "half right": early sound films were stiff, but sound soon enriched film. Agreeing that early films were stiff rules out "entirely wrong." Her "neighbor" line rejects permanent cheapening, and she never disputes how precise silent gesture was.`
          },
          {
            question: `(Last: main purpose) The main purpose of the passage is to:`,
            options: [
              `argue that silent films were superior to sound films`,
              `describe how bulky microphones were designed`,
              `present a view that sound enriched film over time`,
              `list the critics who opposed early sound films`
            ],
            correctAnswer: 2,
            explanation: `The passage moves from critics' mourning to Abara's view that sound, after a stiff start, added what gesture could not. It does not rank silent films above sound films. Microphones appear as one detail, not as the subject, and no critics are named or listed.`
          }
        ]
      }
    },
    {
      id: 'act-r6-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **36 questions, 40 minutes, four sets:** about ten minutes per set. Check pace at 10, 20, 30, and 39 minutes.
- **Choose your order:** strongest type first, weakest last, decided before test day.
- **Read each type for its own target** and annotate lightly: margin labels, claims and turns, boxed names and numbers.
- **Triage every set:** details and word-in-context first, function and viewpoint second, main idea and "both passages" last.
- **Mark and move** after about a minute of indecision.
- **No penalty for guessing:** every question gets an answer before time is called.
      `
    }
  ]
}
