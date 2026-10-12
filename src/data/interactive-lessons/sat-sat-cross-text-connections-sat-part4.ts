export const satCrossTextConnectionsPart4Data = {
  topicSlug: 'sat-cross-text-connections',
  sections: [
    {
      id: 'ctc4-intro',
      type: 'text' as const,
      content: `# Agreement Questions

**Part 4 of 7 — What Would Both Authors Accept?**

"Based on the texts, both authors would most likely agree with which statement?" Even authors who disagree sharply usually share **something**: a background fact, a finding, a goal, or part of a claim. Your job is to find that overlap.

### The Two-Signature Test

Treat each choice as a statement that needs **two signatures**:

| Ask | Must be |
|---|---|
| Would the author of Text 1 sign it? | Yes |
| Would the author of Text 2 sign it? | Yes |

If either author would refuse to sign, or if one text gives no basis for it at all, eliminate the choice.

### Where Agreement Hides

| Shared ground | Example |
|---|---|
| **A background fact** both mention | "The four-day school week has been adopted in some districts." |
| **A finding both accept** | "Early closures lowered peak death rates." |
| **Part of a claim** | Both agree pesticides harm bees, though they disagree about how much |
| **A problem both see** | Both think a policy has costs, though they disagree about the fix |

### The Three Agreement Traps

1. **One author only.** A statement Text 1 makes and Text 2 rejects (or never addresses).
2. **Neither author.** A plausible idea neither text supports.
3. **Too strong.** A sweeping version of something both say mildly: "always," "all," "proves."

**Agreement answers are usually modest.** If a choice sounds bold, it is probably one author's view, or neither's.`,
    },
    {
      id: 'ctc4-quiz',
      type: 'multiple-choice' as const,
      content: '**Practice: Two Signatures** 🎯',
      exercise: {
        questions: [
          {
            question: `Text 1: The four-day school week has spread across many rural districts, largely as a way to save money on transportation and heating. Supporters say students arrive more rested and that teachers appreciate the extra planning day.

Text 2: A study of rural districts that switched to four-day weeks found small declines in students' math scores over several years. The researchers caution that districts adopting the schedule should consider ways to make up the lost instructional time.

Based on the texts, both authors would most likely agree with which statement?`,
            options: [
              `The four-day school week improves students' math scores over several years.`,
              `Rural districts should end the four-day week to protect students' learning.`,
              `Teachers who work four-day weeks spend less time planning their lessons.`,
              `The four-day school week has been adopted in some rural school districts.`,
            ],
            correctAnswer: 3,
            explanation: `Both texts treat the four-day week as a real practice in rural districts, Text 1 by describing its spread and Text 2 by studying districts that switched. Text 2 found math declines, not improvements. Text 2 suggests making up lost time rather than ending the schedule, and Text 1 says teachers gain a planning day.`,
          },
          {
            question: `Text 1: Many museums are returning artifacts to the countries from which they were taken. Curator Jonas Bell supports such returns when an object was clearly stolen, but he argues that objects acquired legally under the laws of their time should remain where scholars worldwide can study them.

Text 2: Anthropologist Nia Mensah argues that the legality of a past acquisition is a poor guide, since many colonial-era laws were written by the powers doing the taking. Still, she agrees that clearly stolen objects should be returned without delay.

Based on the texts, both Bell and Mensah would most likely agree with which statement?`,
            options: [
              `Objects acquired legally in the past should remain in the museums that hold them.`,
              `Objects that were clearly stolen should be returned to their countries of origin.`,
              `Colonial-era laws are a reliable guide to which objects should be returned.`,
              `Museums should return every object in their collections that came from abroad.`,
            ],
            correctAnswer: 1,
            explanation: `Bell supports returning objects that were clearly stolen, and Mensah "agrees" that such objects should be returned, so both would sign this statement. Keeping legally acquired objects is Bell's view only. Mensah calls legality under colonial-era laws a poor guide, and neither author calls for returning every foreign object.`,
          },
          {
            question: `Text 1: Volcanologist Maria Santos argues that the 1815 eruption of Mount Tambora caused the cold, wet "year without a summer" in Europe in 1816, when crops failed across the continent.

Text 2: Climate historian Owen Price agrees that Tambora's ash and gases cooled the planet in 1816. He notes, though, that Europe was already in a cool period, and that the poor harvests were worsened by the economic disruption that followed the Napoleonic Wars.

Based on the texts, both Santos and Price would most likely agree with which statement?`,
            options: [
              `The Napoleonic Wars were the main cause of Europe's crop failures in 1816.`,
              `Europe's climate had been unusually warm in the years just before 1816.`,
              `The eruption of Mount Tambora contributed to cooler weather in 1816.`,
              `The eruption of Mount Tambora had no effect on Europe's harvests in 1816.`,
            ],
            correctAnswer: 2,
            explanation: `Santos credits the eruption with the cold year, and Price "agrees that Tambora's ash and gases cooled the planet," so both accept that the eruption contributed to cooler weather. Price says the wars worsened the harvests, not that they were the main cause. He says Europe was already in a cool period, and neither author denies the eruption's effect.`,
          },
        ],
      },
    },
    {
      id: 'ctc4-text2',
      type: 'text' as const,
      content: `## Worked Example: Signing Each Choice

> **Text 1:** Social media has made it easier than ever for scientists to share their work with the public. Biologist Hannah Cole argues that researchers who post about their findings help build public trust in science.
>
> **Text 2:** A survey of readers found that people trusted scientists more after reading their posts only when the posts acknowledged uncertainty; confident, unqualified posts had no effect. Communication researcher Leo Marsh concludes that how scientists post matters as much as whether they do.

| Choice | Cole signs? | Marsh signs? | Verdict |
|---|---|---|---|
| Scientists' public posts can affect how much people trust science. | ✅ Her whole claim | ✅ Some posts raised trust | ✅ **Correct** |
| Any post by a scientist increases public trust. | ✅ Probably | ❌ Unqualified posts had no effect | ❌ One author only |
| Scientists should stay off social media. | ❌ | ❌ | ❌ Neither |
| Posts that admit uncertainty make readers trust scientists less. | ❌ | ❌ Reverses his finding | ❌ Neither |

Notice that the correct answer is **mild**: "can affect." That is typical. Both authors accept a modest version of the idea, even though Marsh would add conditions that Cole doesn't mention.

### A Second Kind of Agreement Stem

Sometimes the stem asks what the author of one text would say about a detail in the other: "Based on the texts, how would Cole most likely view the survey's finding about confident posts?" Treat it like a response question (Part 3), but expect the answer to show partial agreement.`,
    },
    {
      id: 'ctc4-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Practice: Shared Ground** 🎯',
      exercise: {
        questions: [
          {
            question: `Text 1: Architect Teresa Lund argues that new buildings in historic neighborhoods should copy the style of the older buildings around them, so that each neighborhood keeps its character.

Text 2: Architect Daniel Osei agrees that new buildings should respect their surroundings by matching the height and materials of nearby structures. But copying old styles, he argues, produces fake history; new buildings should look like what they are.

Based on the texts, both Lund and Osei would most likely agree with which statement?`,
            options: [
              `New buildings in historic neighborhoods should closely imitate the style of older buildings.`,
              `Historic neighborhoods should not allow any new buildings to be constructed in them.`,
              `New buildings in historic neighborhoods should be designed with their surroundings in mind.`,
              `New buildings should look as different as possible from the buildings around them.`,
            ],
            correctAnswer: 2,
            explanation: `Lund wants new buildings to fit the neighborhood's style, and Osei wants them to match nearby height and materials, so both think new buildings should be designed with their surroundings in mind. Imitating older styles is Lund's view, which Osei rejects. Both assume new buildings will be built, and Osei wants them to respect their surroundings, not to contrast as much as possible.`,
          },
          {
            question: `Text 1: Economist Lars Berg argues that a four-day workweek can raise productivity, citing companies whose output stayed the same after employees began working one fewer day each week.

Text 2: Several companies that tried a four-day week reported that employees were less stressed and less likely to quit. Some managers, however, found that customer service suffered on the day the office was closed.

Based on the texts, both authors would most likely agree with which statement?`,
            options: [
              `Some companies have tried having employees work one fewer day each week.`,
              `Employees at companies with four-day workweeks are more likely to quit their jobs.`,
              `A four-day workweek always harms the customer service of the companies that adopt it.`,
              `Output fell at every company that adopted a four-day workweek.`,
            ],
            correctAnswer: 0,
            explanation: `Both texts describe companies that actually tried a four-day week, so both would accept this modest statement. Text 2 says only "some managers" saw customer service suffer, so "always" is too strong. Text 2 says employees were less likely to quit, and Text 1 says output stayed the same.`,
          },
          {
            question: `Text 1: Many nutrition experts have recommended eating breakfast every day. People who eat breakfast, studies show, tend to weigh less than those who skip it, and some experts have suggested that breakfast prevents overeating later in the day.

Text 2: In a controlled trial, researchers assigned some adults to eat breakfast and others to skip it. After sixteen weeks, the two groups had lost about the same amount of weight. The researchers note that earlier studies only observed people's habits, and breakfast eaters may differ from skippers in other ways, such as exercising more.

Based on the texts, both authors would most likely agree with which statement?`,
            options: [
              `Eating breakfast causes people to lose weight by preventing them from overeating later.`,
              `Breakfast eaters have been observed to weigh less, on average, than people who skip it.`,
              `Controlled trials are less reliable than studies that simply observe people's habits.`,
              `Adults who skip breakfast tend to exercise more than adults who eat breakfast.`,
            ],
            correctAnswer: 1,
            explanation: `Text 1 reports that breakfast eaters weigh less, and Text 2 accepts that observed pattern while questioning what causes it, so both would agree it has been observed. The causal claim is exactly what Text 2's trial undercuts. Text 2 relies on a controlled trial, so it would not call such trials less reliable, and it suggests that breakfast eaters, not skippers, may exercise more.`,
          },
        ],
      },
    },
    {
      id: 'ctc4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Agreement Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'For an agreement question, each choice must be acceptable to [both authors|at least one author|neither author|the author of Text 2 only]',
          'Authors who disagree about a conclusion often still share [a background fact or premise|every opinion|the same conclusion|no common ground]',
          'A statement that only Text 1 makes is [a trap on agreement questions|the best agreement answer|always correct|a shared premise]',
          'Agreement answers are usually [modest and carefully limited|bold and sweeping|about unrelated topics|direct quotations]',
        ],
        correctAnswers: ['both authors', 'a background fact or premise', 'a trap on agreement questions', 'modest and carefully limited'],
        hint1: 'Two signatures.',
        hint2: 'Disagreement about a conclusion can rest on shared facts.',
        hint3: 'Bold statements usually belong to one author.',
        explanation: 'Agreement answers need both authors\' signatures, often rest on a shared fact or premise, never belong to just one author, and are usually modest.',
      },
    },
    {
      id: 'ctc4-summary',
      type: 'text' as const,
      content: `## Part 4 Summary

| Rule | Detail |
|---|---|
| Two signatures | Each choice must be acceptable to both authors |
| Where agreement hides | Background facts, accepted findings, part of a claim, a shared problem |
| Traps | One author only, neither author, too strong |
| Tone of the answer | Modest: "can," "some," "has been observed" |

*Next: Difference and Disagreement Questions →*`,
    },
  ],
}
