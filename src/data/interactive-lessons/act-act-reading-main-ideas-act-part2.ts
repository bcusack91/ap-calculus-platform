export const actReadingMainPart2Data = {
  topicSlug: 'act-reading-main-ideas-act',
  sections: [
    {
      id: 'act-r2-intro',
      type: 'text' as const,
      content: `
# 🔎 Supporting Details

**Part 2 of 7 — Locating Details, Matching Evidence to Claims, and the Role of a Detail**

## Why Detail Questions Are Worth Mastering

Detail questions are the most *checkable* questions on ACT Reading: the answer is printed in the passage. You never need to guess. You need to **find the right sentence and read it exactly**. Students who miss detail questions usually answer from memory, or pick a choice that sounds like the passage but says something slightly different.

## The Four Detail Question Types

| Stem | What it wants | Your move |
|---|---|---|
| "According to the passage..." / "The passage states that..." | A fact stated in the text | Find it, then match the choice to the sentence |
| "The passage mentions all of the following EXCEPT:" | The one choice *not* stated | Check off each choice against the text |
| "Which detail best supports the claim that...?" | Evidence that directly shows the claim | Ask: does this detail *demonstrate* the claim? |
| "The quotation / example / statistic mainly serves to:" | The job a detail does | Ask: what claim is this detail backing up? |

## Locate, Then Verify

1. **Pick a search word** from the question: a name, a number, a date, a capitalized term, an unusual word. Numbers and names are the easiest to spot when you skim.
2. **Find it and read two or three sentences around it.** The answer is often in the sentence *after* the keyword: the reason a plan was dropped may sit one sentence past the sentence that names the plan.
3. **Match the meaning, not the words.** The correct answer usually *paraphrases* the passage. A choice that copies the passage's words but changes their relationship is a trap.

## Detail Traps

| Trap | What it looks like | Example |
|---|---|---|
| Right words, wrong meaning | Real words from the passage rearranged into a false claim | The passage says the museum *added* a wing after the flood; the choice says the flood *destroyed* the wing |
| True but not the answer | A real detail that doesn't answer *this* question | The question asks why a factory moved; the choice gives the year it opened |
| Plausible but unstated | Sounds like something that *would* be true | A harbor town "probably" had a fish market, but the passage never says so |
| Wrong time or wrong person | A detail attached to the wrong date, group, or speaker | The passage's 2004 restoration given as the reason for a 1962 move |
| Scope shift | "some" becomes "all," "often" becomes "always" | "Several studies" becomes "researchers agree" |

## Evidence vs. Explanation vs. Context

"Which detail best supports the claim?" questions reward precise thinking about what counts as **evidence**:

| Kind of statement | Example (claim: *a tutoring program improved students' reading*) | Supports the claim? |
|---|---|---|
| **Evidence**: a result that shows the claim is true | Participants' reading scores rose more than those of similar students outside the program | ✅ Yes, it measures the improvement |
| **Explanation**: why the claim might be true | Teachers believe daily one-on-one time builds confidence | ❌ Not evidence the improvement happened |
| **Context**: who, where, how big | The program ran in twelve schools | ❌ Describes the program, not its result |
| **Irrelevant**: unrelated fact | The schools recently repainted their libraries | ❌ No connection |

## The Role of a Detail

Authors choose details to do specific jobs. When a question asks what a detail "serves to" do, name the claim it supports and the kind of support it gives:

| Kind of detail | Typical job |
|---|---|
| **Example / anecdote** | Makes a general claim concrete through one case |
| **Statistic** | Measures how large or common something is |
| **Quotation from an ordinary person** | Gives a firsthand, personal illustration |
| **Quotation from an expert** | Lends authority or offers an explanation |
| **Contrast or comparison** | Sharpens a point by setting two things side by side |

**ACT Tip:** On EXCEPT questions, cross off each choice as you find it. The last choice standing is your answer, and it is never "probably true." It is simply not in the passage.
      `
    },
    {
      id: 'act-r2-worked',
      type: 'text' as const,
      content: `
## Worked Examples

**Passage for both examples:**

> The Kessler Observatory opened in 1911 on a hill just outside the city of Grantham. By the 1950s, the city had grown up around the hill, and the glow of its streetlights washed out all but the brightest stars. In 1962 the observatory's directors moved the main telescope to a mountain site ninety miles away, keeping the original building for public lectures. The old dome, restored in 2004, now hosts a weekly stargazing night with a small telescope aimed mostly at the moon and planets, which remain bright enough to see through the city's glow.

<details>
<summary><b>Example 1: "According to the passage..."</b></summary>

**Question:** According to the passage, the directors moved the main telescope because:

- A. the original building had grown too small to hold public lectures.
- B. the hill was needed as a site for the city's new streetlights.
- C. light from the growing city made most stars hard to see.
- D. the old dome had to be closed while it was being restored.

**Solution:**
1. **Search word:** "moved" leads to the third sentence, but the *reason* is in the sentence before it: the streetlights "washed out all but the brightest stars."
2. **Match the meaning:** C paraphrases that cause. ✓
3. **Eliminate:** A reverses the passage: the building was *kept* for lectures. B uses real words ("hill," "streetlights") in a false relationship. D is a *wrong-time* trap: the restoration came in 2004, decades after the 1962 move.

**Answer: C** ✓
</details>

<details>
<summary><b>Example 2: Evidence for a claim</b></summary>

**Question:** Which detail from the passage best supports the claim that the old dome still serves a purpose despite the city's glow?

- A. The observatory first opened in 1911.
- B. The new mountain site is ninety miles away.
- C. The city grew up around the hill by the 1950s.
- D. Its weekly stargazing night views the moon and planets, which stay visible.

**Solution:**
1. **What would prove the claim?** Something showing the dome is still *used* successfully under city light.
2. **D** shows exactly that: the stargazing night works because the moon and planets remain bright enough. ✓
3. A is context (a date). B is about the *new* site. C explains the problem, not how the dome still serves a purpose.

**Answer: D** ✓
</details>
      `
    },
    {
      id: 'act-r2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice: Find the Stated Detail** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `The Delmar Canal opened in 1846 to carry coal from inland mines to the coast. Within twenty years, a railroad line built alongside it could move the same coal in a third of the time, and shipping on the canal dwindled. The state sold the canal in 1881 to a water company, which used it to supply drinking water to three towns until 1952.

According to the passage, the water company used the canal to:`,
            options: [
              `move coal from inland mines to the coast more cheaply.`,
              `compete with the railroad that had been built beside it.`,
              `irrigate farmland in the three towns along its route.`,
              `provide drinking water to three towns for decades.`
            ],
            correctAnswer: 3,
            explanation: `The last sentence says the water company used the canal to supply drinking water to three towns until 1952, which is the stated detail. Carrying coal was the canal's original purpose before the sale, not the water company's use. The passage never says the company competed with the railroad, and irrigation of farmland is plausible but never mentioned.`
          },
          {
            question: `Sea otters often float on their backs while eating, using their chests as tables. An otter may dive to the seafloor, tuck a clam and a flat stone into a loose pouch of skin under its forearm, and return to the surface. It then places the stone on its chest and strikes the clam against it until the shell cracks.

According to the passage, a sea otter uses the stone to:`,
            options: [
              `break open the shells of the clams it collects.`,
              `weigh itself down while it dives to the seafloor.`,
              `dig clams loose from the mud on the seafloor.`,
              `keep its forearm pouch closed while it swims.`
            ],
            correctAnswer: 0,
            explanation: `The final sentence describes the otter striking the clam against the stone until the shell cracks, so the stone is used to break shells. The otter carries the stone up from the dive, but nothing says the stone weighs it down or helps it dig. The pouch holds the stone; the passage never says the stone keeps the pouch shut.`
          },
          {
            question: `The Lakeview Farmers' Market began in 1998 with six vendors in a church parking lot. It now fills two city blocks every Saturday from May through October. Shoppers can buy vegetables, honey, cheese, and cut flowers, and a local band plays near the entrance each week.

The passage mentions all of the following as things shoppers can buy EXCEPT:`,
            options: [
              `honey.`,
              `cut flowers.`,
              `fresh bread.`,
              `cheese.`
            ],
            correctAnswer: 2,
            explanation: `The third sentence lists vegetables, honey, cheese, and cut flowers, so each of those is stated. Bread is never mentioned. A farmers' market would plausibly sell bread, but an EXCEPT question rewards checking each choice against the text, not imagining what a market usually offers.`
          },
          {
            question: `Archaeologists once assumed that the stone towers on Kell Island were built as lookouts. A 2019 survey found that most of the towers stand in low valleys from which the sea cannot be seen, and that their interiors are lined with clay channels that collected rainwater.

According to the passage, the 2019 survey found that most of the towers:`,
            options: [
              `stood on high ground with a clear view of the sea.`,
              `are located in valleys without a view of the sea.`,
              `were used mainly by lookouts who watched for ships.`,
              `had interiors lined with stone benches for sleeping.`
            ],
            correctAnswer: 1,
            explanation: `The survey found that most towers sit in low valleys from which the sea cannot be seen, which matches this choice. High ground with a sea view is the opposite of what the survey found, and the lookout purpose is the old assumption the survey challenged. The interiors held clay rainwater channels, not stone benches.`
          }
        ]
      }
    },
    {
      id: 'act-r2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**What Job Does Each Detail Do?** 🔍

Claim: *A city's new bike lanes have made cycling safer.* Choose the role each detail plays.
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Reported bike crashes on Main Street fell by half in the lanes\' first year."',
            options: ['Statistic that measures the claim', 'Personal illustration', 'Expert explanation', 'Irrelevant to the claim']
          },
          {
            label: '"\'I finally let my daughter ride to school,\' said one parent."',
            options: ['Statistic that measures the claim', 'Personal illustration', 'Expert explanation', 'Irrelevant to the claim']
          },
          {
            label: '"A traffic engineer notes that a raised curb keeps drivers from drifting into the lanes."',
            options: ['Statistic that measures the claim', 'Personal illustration', 'Expert explanation', 'Irrelevant to the claim']
          },
          {
            label: '"The lanes are painted a bright green."',
            options: ['Statistic that measures the claim', 'Personal illustration', 'Expert explanation', 'Irrelevant to the claim']
          }
        ],
        correctAnswers: ['Statistic that measures the claim', 'Personal illustration', 'Expert explanation', 'Irrelevant to the claim'],
        hint1: 'Which detail puts a number on the change in safety?',
        hint2: 'Which detail comes from an ordinary person\'s own life?',
        hint3: 'Which detail explains WHY the lanes might be safer?',
        explanation: 'The crash figure measures the safety change, so it is the strongest direct evidence. The parent\'s quotation illustrates the change in one family. The engineer explains a reason the lanes work. The paint color says nothing about safety.'
      }
    },
    {
      id: 'act-r2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Practice: Evidence and the Role of a Detail** 📋
      `,
      exercise: {
        questions: [
          {
            question: `Urban rooftops can help struggling bee populations. On a single green roof in one city, researchers counted more than thirty bee species over two summers. The building's owners had installed the roof mainly to lower cooling costs. Some ecologists think the roofs work because they are free of the pesticides used in many parks.

Which detail provides the most direct evidence for the claim in the first sentence?`,
            options: [
              `The count of more than thirty bee species on one green roof`,
              `The owners' plan to lower cooling costs with the roof`,
              `The ecologists' theory that roofs lack pesticides`,
              `The two summers over which the researchers gathered data`
            ],
            correctAnswer: 0,
            explanation: `The claim is that rooftops help bees, and finding more than thirty species on one roof is an observed result showing that bees use it. The owners' reason for building the roof has nothing to do with bees. The ecologists' idea explains why roofs might help, which is not evidence that they do, and the length of the study is context rather than a finding.`
          },
          {
            question: `Small-town newspapers are disappearing. Since the early 2000s, hundreds of weekly papers have closed. In Harlan County, where the last local paper shut down in 2017, a resident said, "Now I find out about school board decisions after they've already happened."

The resident's quotation primarily serves to:`,
            options: [
              `prove that every county without a paper has a failing school board.`,
              `explain the financial reasons that weekly newspapers have been closing.`,
              `show through one person's experience what is lost when a paper closes.`,
              `suggest that school boards meet in secret to avoid reporters.`
            ],
            correctAnswer: 2,
            explanation: `After a general claim and a count of closures, the quotation gives one resident's firsthand account of losing timely local news, a personal illustration of the cost. One person's remark cannot prove anything about every county, and the resident never discusses money. Learning about decisions late is not the same as boards meeting in secret, so that choice reads too much into the quotation.`
          },
          {
            question: `The violinist Ruth Amsel practiced six hours a day as a teenager, but she credited her success to something else. "My teacher made me play every piece for my younger brother," she once said. "If I couldn't hold his attention, I didn't understand the music yet."

The author most likely includes the quotation in order to:`,
            options: [
              `show that Amsel's brother was also a skilled musician.`,
              `argue that six hours of daily practice is too much for teenagers.`,
              `criticize Amsel's teacher for using an unusual approach.`,
              `reveal what Amsel herself believed made her successful.`
            ],
            correctAnswer: 3,
            explanation: `The sentence before the quotation says she credited her success to "something else," and the quotation names it: playing for her brother to test her understanding. Her brother is the audience, not a musician in the passage. The author does not judge the amount of practice, and Amsel speaks of her teacher's method with approval, so criticism does not fit.`
          },
          {
            question: `Studies show that people remember more when they test themselves than when they simply reread their notes. In one experiment, students who took practice quizzes recalled far more of a science text a week later than students who reread it twice. Many students still prefer rereading, perhaps because it feels easier.

Which choice best describes the role of the experiment in the passage?`,
            options: [
              `It explains why many students still prefer rereading their notes.`,
              `It gives evidence for the claim made in the passage's first sentence.`,
              `It introduces a point that the passage goes on to reject.`,
              `It describes a method that the author recommends against using.`
            ],
            correctAnswer: 1,
            explanation: `The first sentence claims that self-testing beats rereading, and the experiment shows that result directly, so it serves as evidence. The preference for rereading is explained in the last sentence, by ease, not by the experiment. Nothing in the passage rejects the experiment, and the method it supports, practice quizzes, is the one the passage favors.`
          }
        ]
      }
    },
    {
      id: 'act-r2-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

> Each autumn, the Arctic tern leaves its breeding grounds in the far north and flies toward Antarctica, returning the following spring. Tracking devices small enough to fit on a bird weighing about as much as a deck of cards have shown that the trip is not a straight line. Terns zigzag across the Atlantic, following winds that save energy and stopping to feed where cold currents bring fish to the surface. One tracked bird, nicknamed "Wren" by the research team, covered so much ground that a lifetime of these trips would add up to several journeys to the moon and back.

**Question 1:** According to the passage, terns zigzag across the Atlantic in order to:

**Question 2:** The detail about Wren mainly serves to:

<details>
<summary><b>Show answers</b></summary>

**1. Use energy-saving winds and stop where fish are plentiful.** The third sentence gives both reasons. A choice like "avoid storms near the equator" would be plausible but unstated.

**2. Illustrate how enormous the terns' migrations are, using one tracked bird.** The comparison to trips to the moon makes the distance vivid; it is an example, not a statistic about the whole species.
</details>
      `
    },
    {
      id: 'act-r2-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- Detail answers are **in the passage**: find the sentence, then match its **meaning**, not its words.
- Use **names, numbers, dates, and unusual terms** as search words, and read the sentences around them.
- Avoid **right words / wrong meaning, true but not the answer, plausible but unstated, wrong time or person,** and **scope shifts**.
- **Evidence** shows a claim is true; an **explanation** says why it might be; **context** describes the setting or study.
- To find a detail's **role**, name the claim it supports and the kind of support (example, statistic, personal or expert quotation, contrast).
- On **EXCEPT** questions, cross off every choice you can find; the survivor is not in the passage.
      `
    }
  ]
}
