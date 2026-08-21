export const lessonData = {
  topicSlug: 'sat-command-evidence-core-skills',
  sections: [
    {
      id: 'evid-core-p1-intro',
      type: 'text' as const,
      content: `# Command of Evidence: The Basics

**Part 1 of 2 — One Skill, One Idea**

**Evidence** is proof. It is the fact, number, quote, or example that backs up a claim.

A **claim** is something someone says is true. Evidence is what makes you believe it.

> Claim: This bus route is unreliable.
> Evidence: The 4:15 bus arrived late on nineteen of the last twenty school days.

The SAT asks one question in many outfits: **which choice best supports the claim?** Your job is to pick the fact that most directly backs up the exact claim in front of you.

### Good evidence does two things

1. **It is about the same thing as the claim.** If the claim is about *cost*, evidence about *color* does nothing, no matter how interesting it is.
2. **It actually proves the point**, not just something nearby. "People like parks" does not prove "parks lower stress."

That first one has a name: **relevant**. Relevant means it connects directly to the claim being made.

### Worked example

> Claim: Teachers are spending their own money on classroom supplies.

Which fact supports it?

- *"Teacher salaries differ from state to state."* — About pay, not about spending on supplies. Not relevant.
- *"Many teachers say they wanted to make a difference."* — About motivation. Not relevant.
- *"Sixty percent of surveyed teachers reported buying classroom supplies with their own money at least once a month."* — This says the exact thing the claim says, with numbers behind it. **This is the answer.**

Notice the winner used the same words as the claim: teachers, own money, supplies. That overlap is the signal you are looking for.

### If there is a graph

Read the **title**, the **axis labels**, and the **units** before you look at the bars or the line. Most graph mistakes happen because someone read the shape without reading the labels.`
    },
    {
      id: 'evid-core-p1-q1',
      type: 'quiz' as const,
      question: `A student council claims that adding a covered bike rack increased the number of students who bike to school. Which finding, if true, would most directly support that claim?`,
      options: [
        `The bike rack cost less to install than the council expected.`,
        `Most students say they enjoy riding bicycles on weekends.`,
        `The school also repainted the parking lot that year.`,
        `Daily bike counts rose from 12 riders to 47 in the month after the rack was installed.`
      ],
      correctAnswer: 3,
      explanation: `The claim is that the rack increased the NUMBER of students biking to school, so the evidence has to show that number going up after the rack appeared. The count rising from 12 to 47 in the month after installation does exactly that. The cost of the rack is about money, not about how many students ride, so it does not touch the claim.`
    },
    {
      id: 'evid-core-p1-q2',
      type: 'quiz' as const,
      question: `On the SAT, a question that asks "Which choice best supports the claim?" is asking you to find:`,
      options: [
        `the longest and most detailed answer choice`,
        `the choice that most directly backs up the exact claim stated in the question`,
        `the choice that uses the most advanced vocabulary`,
        `any fact from the passage that seems interesting`
      ],
      correctAnswer: 1,
      explanation: `These questions ask which fact most directly backs up the specific claim in the question, so you match the choice to that claim and nothing else. Read the claim first, then look for the choice that speaks to the same subject and settles it. Length and vocabulary have nothing to do with whether a fact supports a claim.`
    },
    {
      id: 'evid-core-p1-q3',
      type: 'quiz' as const,
      question: `Before you use a graph or table as evidence, what should you do first?`,
      options: [
        `Read the title, the axis labels, and the units.`,
        `Find the tallest bar and use it.`,
        `Assume the graph agrees with the passage.`,
        `Skip the legend to save time.`
      ],
      correctAnswer: 0,
      explanation: `Start with the title, the axis labels, and the units, because those tell you what the numbers actually measure. Once you know what is being counted and in what units, reading the bars or the line is straightforward. Grabbing the tallest bar first is where most graph errors come from, since the tallest bar may not be the one the claim is about.`
    },
    {
      id: 'evid-core-p1-q4',
      type: 'quiz' as const,
      question: `A biology teacher claims that a new plant food makes tomato plants grow taller. Which of these is the strongest evidence for that claim?`,
      options: [
        `A neighbor says her tomatoes looked great last summer.`,
        `The plant food package features a photograph of large tomatoes.`,
        `A study in which treated plants averaged 30 cm taller than untreated plants grown side by side.`,
        `The plant food is sold in more stores than any competing brand.`
      ],
      correctAnswer: 2,
      explanation: `The claim is about height, so the strongest evidence measures height under fair conditions. The study comparing treated and untreated plants grown side by side does that, and the 30 cm difference is a measured result rather than an impression. The neighbor's comment is one person's story with no measurement and no comparison group, which makes it much weaker.`
    }
  ]
}
