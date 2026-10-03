export const actReadingMainPart1Data = {
  topicSlug: 'act-reading-main-ideas-act',
  sections: [
    {
      id: 'act-r1-intro',
      type: 'text' as const,
      content: `
# 📋 Finding the Main Idea

**Part 1 of 7 — The Central Point, Where It Hides, and How Wrong Answers Miss It**

## How ACT Reading Works

The Enhanced ACT Reading section gives you **36 questions in 40 minutes**, a little over a minute per question *including* the time you spend reading. Passages come from four areas: **literary narrative** (prose fiction or memoir), **social science**, **humanities**, and **natural science**, and one set is usually a **pair of shorter passages** on a related topic. Reading counts toward your composite score along with English and Math.

The ACT sorts Reading questions into three categories, and this lesson covers all of them:

| ACT category | What it asks you to do | Lesson parts |
|---|---|---|
| Key Ideas & Details | Find the central idea, locate details, draw inferences, follow relationships | 1, 2, 3, 6 |
| Craft & Structure | Judge word meaning, purpose, tone, the function of a part, point of view | 4, 5, 6 |
| Integration of Knowledge & Ideas | Weigh claims against evidence; connect two passages | 2, 7 |

## What a Main Idea Is

The main idea is the **one point the whole passage supports**. A correct main-idea answer passes the **whole-passage test**: every paragraph fits under it, and nothing in it goes beyond what the passage covers.

The main idea follows **emphasis, not the nominal topic**. A profile of a chemist that spends one paragraph on her childhood and five on a single discovery has a main idea about *that discovery*, not about her life.

## Where the Main Idea Hides

| Signal | What it looks like | What the main idea usually is |
|---|---|---|
| Opening + closing | A claim up front, restated or sharpened at the end | The point the two frame together |
| Pivot after a common belief | "Many people assume X. **Yet** ..." / "**However**, researchers now..." | The author's corrected view, not the belief |
| Question → answer | The passage opens with a question and spends the rest answering it | The answer, not the question |
| Repetition | One idea or phrase keeps coming back | That idea is central |
| Closing quotation or verdict | A final quote sums things up ("worth every hour") | The point the quote expresses |
| Qualification | "...though the evidence is still limited" | A main idea that keeps the qualification |

**Prose fiction works differently.** A story rarely states a thesis. Its "main focus" is the character's situation or feeling that the details keep circling back to. If a character checks the mailbox three times before noon, reorganizes a drawer she organized yesterday, and jumps when the phone rings, the focus is her anxious wait for news, even though the word "anxious" never appears.

## How Wrong Answers Miss

| Trap | Why it is wrong | Tell-tale sign |
|---|---|---|
| Too narrow | A true detail from one paragraph | A number, a name, a single example |
| Too broad | Goes beyond the passage's scope | "all cities," "people in general," "throughout history" |
| Reversal | Endorses the view the passage challenges | Matches the belief stated *before* the pivot |
| Background | Restates setup information, not the point | Comes only from the first sentence |
| Too extreme | Stronger than the author's commitment | "proves," "always," "every," "the only" |

## A Four-Step Routine

1. **Note each paragraph** in three to five words as you read ("trees: old view," "cooling + runoff: new view").
2. **Mark the pivot and reread the ending.** Circle *but, yet, however, instead,* and reread the last two sentences.
3. **Say the main idea yourself** in one sentence *before* looking at the choices.
4. **Run the whole-passage test** on the choice that matches yours: does every paragraph fit, and does it claim no more than the author does?
      `
    },
    {
      id: 'act-r1-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: An informational passage with a pivot</b></summary>

**Passage:**

> For most of the twentieth century, city planners treated street trees as decoration: pleasant to look at, but the first thing cut when budgets tightened. That view is changing. Studies in several cities have found that blocks with a mature tree canopy stay noticeably cooler on summer afternoons than treeless blocks nearby. Trees also slow storm runoff by catching rain in their leaves, which eases pressure on aging sewers. Some planners now list trees alongside pipes and pavement as part of a city's basic infrastructure.

**Question:** Which choice best states the main idea of the passage?

- A. Street trees catch rainwater in their leaves during storms.
- B. Cities around the world should plant more trees than they cut down.
- C. Street trees are increasingly valued as useful infrastructure, not mere decoration.
- D. Twentieth-century planners cut trees whenever their budgets tightened.

**Solution:**
1. **Pivot:** "That view is changing" tells you the main idea is the *new* view.
2. **Whole-passage test:** cooling, runoff, and the closing "basic infrastructure" all support the claim that trees are useful.
3. **Eliminate by trap type:** A is *too narrow* (one supporting detail). B is *too broad* ("around the world") and adds a recommendation the passage never makes. D is *background*, the old view the passage moves away from.

**Answer: C** ✓
</details>

<details>
<summary><b>Example 2: The main focus of a prose-fiction passage</b></summary>

**Passage:**

> Theo arrived at the music building forty minutes before his audition and found an empty practice room. He tuned his violin, then tuned it again. He played the opening of the sonata once, perfectly, and set the bow down rather than risk playing it a second time. When a door opened somewhere down the hall, he stood so quickly that the music stand tipped over.

**Question:** The passage mainly focuses on:

- A. Theo's nervous anticipation before an important performance.
- B. the layout of the practice rooms in the music building.
- C. Theo's skill at playing the opening of a difficult sonata.
- D. Theo's dislike of the piece he has been asked to perform.

**Solution:**
1. **Track what the details share:** arriving very early, tuning twice, refusing to play again, jumping at a sound. Every detail shows nerves.
2. **Eliminate:** B is *background* (the room is just the setting). C is *too narrow*: he plays one passage well, but the passage is about his state of mind, not his ability. D is unsupported; nothing suggests he dislikes the sonata.

**Answer: A** ✓

**Skill:** In fiction, name the feeling or situation that *every* detail points toward.
</details>
      `
    },
    {
      id: 'act-r1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice: State the Main Idea** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `For years, coaches told marathon runners to drink as much water as they could during a race. Sports physiologists now warn that this advice can backfire. Runners who drink far more than they sweat out can dilute the sodium in their blood, a condition that causes nausea and confusion and, in rare cases, death. Current guidelines tell runners to drink when they feel thirsty rather than on a fixed schedule.

Which choice best states the main idea of the passage?`,
            options: [
              `Drinking too much water can dilute the sodium in a runner's blood.`,
              `Coaches were right that runners need all the water they can drink.`,
              `The old advice to drink heavily has given way to a thirst-based approach.`,
              `Most sports advice from earlier decades has turned out to be badly mistaken.`
            ],
            correctAnswer: 2,
            explanation: `The second sentence pivots away from the coaches' advice, and the rest of the passage explains the danger and the newer guideline, so the main idea is the shift to drinking by thirst. The point about diluted sodium is one supporting detail, so it is too narrow. Saying coaches were right reverses the passage, and a claim about most earlier sports advice reaches far beyond a passage that discusses only hydration.`
          },
          {
            question: `Why do cats knead blankets with their front paws? Kittens press against their mother while nursing, which helps release milk. Animal behaviorists think adult cats keep the motion because it remains linked with comfort and safety. Cats often knead just before settling down to sleep, and some knead only on people they know well.

The passage is primarily concerned with:`,
            options: [
              `describing in detail how newborn kittens nurse.`,
              `explaining a likely reason that adult cats knead.`,
              `comparing the sleep habits of cats and other pets.`,
              `raising a question that no researcher can answer.`
            ],
            correctAnswer: 1,
            explanation: `The passage opens with a question and spends every later sentence answering it, so the main idea is the answer: kneading stays tied to comfort from kittenhood. Nursing is mentioned only to explain where the habit starts, so that choice is too narrow. Other pets never appear, and the passage does offer an answer from behaviorists, so it does not treat the question as unanswerable.`
          },
          {
            question: `The four-day school week, adopted by a number of rural districts, has saved some of them money on buses and heating. Teachers in these districts often report higher morale, and some districts say the schedule helps them hire. Results for students are less clear: several studies have found small drops in test scores, especially where the fifth day offers no supervised activities.

Which choice best states the main idea of the passage?`,
            options: [
              `The four-day week brings districts real benefits, but its effect on learning is uncertain.`,
              `Every school district should switch to a four-day week in order to save money on buses.`,
              `Rural districts on a four-day week spend less money on buses and on heating buildings.`,
              `The four-day week has harmed students so badly that most districts are now dropping it.`
            ],
            correctAnswer: 0,
            explanation: `The passage lists benefits for budgets and teachers, then qualifies them with "Results for students are less clear," so the main idea has to keep both halves. Recommending the schedule for every district is too broad and adds advice the author never gives. The savings on buses and heating are a single detail, and "harmed students so badly" overstates the small test-score drops the passage reports.`
          },
          {
            question: `A passage about the astronomer Lena Ostrova devotes its first paragraph to her childhood on a farm and its remaining five paragraphs to how her measurements of a distant star cluster changed scientists' estimates of the galaxy's size.

The main idea of this passage most likely concerns:`,
            options: [
              `how growing up on a farm shaped Ostrova's later scientific career.`,
              `the full life story of Ostrova from her childhood to her retirement.`,
              `what scientists in general have learned about distant star clusters.`,
              `how Ostrova's measurements reshaped ideas about the galaxy.`
            ],
            correctAnswer: 3,
            explanation: `Five of six paragraphs are about one set of measurements and their effect, and the main idea follows that emphasis rather than the fact that the passage is nominally about Ostrova. Her farm childhood fills only the opening paragraph, and the passage never connects it to her career. Her retirement is never covered, and star clusters in general would take the passage well beyond its scope.`
          }
        ]
      }
    },
    {
      id: 'act-r1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Trap** 🔍

> Many gardeners pull every dandelion they see. Yet dandelions bloom early in spring, when few other flowers offer pollen to bees, and their deep roots break up compacted soil. Some ecologists now suggest leaving a patch of lawn unmowed until late spring.

Classify each answer to the question "Which choice best states the main idea?"
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Dandelions have deep roots that break up compacted soil."',
            options: ['Correct main idea', 'Too narrow', 'Too broad', 'Reversal']
          },
          {
            label: '"Every weed in a lawn helps the environment more than it harms it."',
            options: ['Correct main idea', 'Too narrow', 'Too broad', 'Reversal']
          },
          {
            label: '"Gardeners are right to pull dandelions as soon as they appear."',
            options: ['Correct main idea', 'Too narrow', 'Too broad', 'Reversal']
          },
          {
            label: '"Dandelions, often treated as pests, offer real benefits to a garden."',
            options: ['Correct main idea', 'Too narrow', 'Too broad', 'Reversal']
          }
        ],
        correctAnswers: ['Too narrow', 'Too broad', 'Reversal', 'Correct main idea'],
        hint1: 'One choice repeats a single supporting detail.',
        hint2: 'One choice talks about every weed, but the passage discusses only dandelions.',
        hint3: 'The word "Yet" marks a turn away from what many gardeners believe.',
        explanation: 'The roots are one supporting detail (too narrow). "Every weed" goes beyond a passage about dandelions (too broad). Approving of pulling dandelions matches the belief before "Yet," which the passage challenges (reversal). The last choice covers the pivot and both benefits, so it passes the whole-passage test.'
      }
    },
    {
      id: 'act-r1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Practice: Paragraphs, Repetition, and Fiction** 📋
      `,
      exercise: {
        questions: [
          {
            question: `The second paragraph of a passage about a new bridge reads: "Not every early review was kind. One critic called the bridge's thin cables 'a gamble in steel,' and a newspaper cartoon showed the deck sagging into the river. Within a year, though, both had been forgotten, as daily traffic proved the design sound."

The main idea of this paragraph is that:`,
            options: [
              `a critic described the bridge's cables as "a gamble in steel."`,
              `early doubts about the bridge faded once it proved reliable.`,
              `newspapers of that era rarely praised new engineering projects.`,
              `the bridge's design was later changed to answer its critics.`
            ],
            correctAnswer: 1,
            explanation: `The paragraph moves from criticism to "though, both had been forgotten" as traffic proved the design, so its point is that the doubts faded. The "gamble in steel" quotation is one example of the criticism, which makes it too narrow. Nothing describes newspapers in general, and the paragraph says the design proved sound, not that it was changed.`
          },
          {
            question: `In an essay about restoring old furniture, the author keeps returning to the phrase "let the wood tell you what it needs": in the opening story, in a paragraph about stripping varnish, and in the closing advice to beginners.

The repeated phrase most likely signals that:`,
            options: [
              `the author is unsure of the right way to strip off old varnish.`,
              `the essay drifts away from its main subject three separate times.`,
              `beginners should avoid restoring valuable pieces of furniture.`,
              `paying attention to the material is central to the author's view.`
            ],
            correctAnswer: 3,
            explanation: `An idea that appears at the opening, in the middle, and in the closing advice is a structural cue that it is central, here, the habit of responding to the wood instead of forcing a plan. Repetition signals emphasis, not drifting off topic. The phrase gives a method rather than expressing doubt about varnish, and advice to beginners is not a warning to avoid valuable pieces.`
          },
          {
            question: `Priya's grandmother had taught her to make dumplings every New Year. This year, alone in her first apartment, Priya laid out the flour and the bowl of filling and pleated the first dumpling the way she had been shown, pressing the edge with her thumb. It came out lopsided. She made forty more, and by the last few, the folds looked almost right.

The passage mainly focuses on:`,
            options: [
              `Priya keeping a family tradition alive on her own.`,
              `Priya's frustration with cooking and her decision to quit.`,
              `the history of the foods people prepare for the New Year.`,
              `the grandmother's patience as a teacher in the kitchen.`
            ],
            correctAnswer: 0,
            explanation: `Every detail, from following her grandmother's method alone to making forty more after a lopsided first try, shows Priya carrying on the tradition by herself. She does not quit, so frustration leading to quitting contradicts the passage. The passage never discusses holiday foods in general, and the grandmother appears only in memory, so the focus stays on Priya.`
          },
          {
            question: `A passage describes a new program that teaches adults to read using text messages. After two paragraphs on how the program works and early participants' gains, the passage ends: "The results so far are encouraging, but they come from just two small trials."

Which choice best states the main idea of the passage?`,
            options: [
              `Text-message lessons have been proven to work for all adults.`,
              `The two trials of the program were poorly designed and run.`,
              `A text-message reading program shows promise, though evidence is limited.`,
              `Small trials are never useful for testing education programs.`
            ],
            correctAnswer: 2,
            explanation: `The closing sentence balances "encouraging" against "just two small trials," and a correct main idea has to match that measured level of confidence. "Proven to work for all adults" ignores the qualification and is far too extreme. The author never criticizes how the trials were run, and saying small trials are never useful turns a caution into a sweeping rule.`
          }
        ]
      }
    },
    {
      id: 'act-r1-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

Budget about **ten minutes per passage set**: roughly three to four minutes to read, then about a minute per question.

> When the town of Marlow placed a dozen donated pianos in its parks and train stations one summer, officials braced for vandalism. Instead, the pianos became gathering places. Commuters who had stood silently on the same platform for years stopped to listen to a stranger's ragtime; a retired teacher began giving free lessons beside the fountain on Saturday mornings. By August, the city had received hundreds of letters asking that the pianos stay. One of them, from a teenager who had learned three songs that summer, read simply, "Please don't take away the only place I've ever played for anyone."

**Question:** Which choice best states the main idea of the passage?

<details>
<summary><b>Show answer</b></summary>

**The public pianos unexpectedly turned shared spaces into places where people connected.** The pivot "Instead" moves from the feared vandalism to what actually happened, and the commuters, the lessons, the letters, and the closing quotation all show connection. A choice about the retired teacher's lessons would be too narrow; one claiming "public art always brings communities together" would be too broad.
</details>
      `
    },
    {
      id: 'act-r1-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- The **main idea** is the one point the whole passage supports; check it with the **whole-passage test**.
- Look at the **opening and closing**, any **pivot** after a common belief, a **question the passage answers**, **repeated ideas**, and **closing quotations**.
- Follow **emphasis**, not the nominal subject, and keep any **qualification** the author makes.
- In **prose fiction**, the main focus is the feeling or situation that every detail points toward.
- Eliminate **too narrow, too broad, reversal, background,** and **too extreme** answers.
- Say the main idea yourself **before** reading the choices.
      `
    }
  ]
}
