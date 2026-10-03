export const actPassageTypesPart2Data = {
  topicSlug: 'act-reading-passage-types-act',
  sections: [
    {
      id: 'act-r2-intro',
      type: 'text' as const,
      content: `
# 🏛️ Reading Passage Types

**Part 2 of 7 — Social Science**

Social science passages come from fields that study **people and societies**: psychology, sociology, economics, anthropology, education, history, political science, geography, and business. Where a literary passage asks you to read people, a social science passage asks you to **read an argument**: a claim, the evidence for it, and the views it pushes against.

## The Typical Shape

Most social science passages follow some version of this pattern:

1. **The old view or the common assumption.** "Economists once assumed..." or "For decades, planners believed..."
2. **The turn.** "Field studies tell a different story." "Yet..."
3. **The new claim**, often credited to a named researcher.
4. **Evidence**: a study, a statistic, a historical example, a survey.
5. **Qualification**: a concession, a limit, or an unexplained result ("though two corridors saw declines").

If you can label each paragraph with one of those jobs, most questions become look-ups.

## Signal Words Tell You Each Sentence's Job

| Job | Signal words | Example |
|---|---|---|
| Claim | argues, contends, maintains, concludes, suggests | *Whitfield argues that league decline weakened community ties.* |
| Evidence | for example, in one study, data show, between 1980 and 2010 | *Sales rose 18 percent within a month.* |
| Turn / contrast | however, yet, but, a different story, in fact | *Field studies tell a different story.* |
| Cause and effect | because, led to, as a result, drove, so | *Rising rents drove young families out.* |
| Concession | admittedly, to be sure, acknowledges, concedes, although | *She acknowledges the trends may share other causes.* |
| Opposing view | critics argue, skeptics warn, some claim | *Critics warned slower traffic would hurt shops.* |

A **concession** is the author granting a point to the other side before pressing on. ACT questions love concessions: "The phrase *such as longer commutes* serves mainly to..." The answer is usually that it **gives an example of a point the author concedes**, not that it is the author's main evidence.

## Keep the Voices Separate

Social science passages often contain several voices: the author, a featured researcher, earlier experts, and critics. Before you answer a viewpoint question, ask **whose view the stem names**.

- "The author argues..." is the passage's own position.
- "Economists once assumed..." is usually the view the passage overturns.
- "Critics warned..." is an opposing view the researcher answers.

A classic wrong answer states a real sentence from the passage, but it belongs to the wrong voice: for example, offering the old economists' assumption as the passage's main claim.

## Evidence and Function Questions

A **function question** asks *why* a detail is there, not *what* it says. Match the detail to its job:

| If the detail is... | Its function is usually... |
|---|---|
| a statistic right after a claim | evidence supporting that claim |
| a result that contradicts an old prediction | evidence undercutting the old view |
| a sentence beginning "admittedly" or "to be sure" | a concession or acknowledged limit |
| a named example after "such as" | an illustration of the point just made |
| an unexplained result near the end | an honest qualification of the findings |

## Cause and Effect, Carefully

When a passage says "**X led to Y**," a detail question may ask what caused Y. Answer with what the passage names, not with what seems likely. If the passage says prices **did not change**, a price cut cannot be the cause. Also notice when an author admits two trends might share other causes: that author is being careful about **correlation versus causation**, and a choice saying she claims a single cause will be too strong.

## Question Types You Will See

| Question | Where to look |
|---|---|
| Main claim / central idea | The turn and the researcher's conclusion, not the opening assumption |
| Function of a detail | The sentence before the detail: what point does it serve? |
| According to the passage | The exact sentence; watch numbers, direction (rose/fell), and which group |
| Viewpoint ("X would most likely agree") | Everything X says, including concessions |
| Cause / effect | The sentence with *because, led to, drove, as a result* |

## Common Traps

- **The overturned view.** The opening assumption is offered as the main claim.
- **Overreach.** "the only reason," "always," "every city" when the author was careful.
- **Wrong direction.** Sales rose but the choice says fell; crashes fell but the choice says rose.
- **Plausible but absent.** Advertising, a new recipe, or a price policy the passage never mentions.
      `
    },
    {
      id: 'act-r2-worked',
      type: 'text' as const,
      content: `
## Worked Examples

> Historians long told the story of the 1849 California gold rush as a story of prospectors: lone men with pans who struck it rich or went home broke. Merchant account books from the period suggest a different picture. A typical miner earned little more than he spent on food and tools, while the shopkeepers who sold flour, boots, and shovels at steep markups built some of the most lasting fortunes in the region. To be sure, a handful of prospectors did find spectacular deposits. But the steadiest money, the records show, flowed to those who supplied the search rather than those who joined it.

<details>
<summary><b>Example 1: The main claim</b></summary>

**Question:** The main claim of the passage is that:

- most prospectors became wealthy during the gold rush
- suppliers, more than miners, earned the steadiest gold rush wealth
- historians have always focused on gold rush merchants
- shovels and boots were scarce in California in 1849

**Solution:**
1. The first sentence gives the **old view** (a story of prospectors). "Suggest a different picture" is the **turn**.
2. The last sentence states the **new claim**: steady money flowed to suppliers.
3. The first choice contradicts the evidence that a typical miner barely broke even. The third reverses the history: historians focused on prospectors. Scarcity is never claimed. The answer is the claim about **suppliers**.
</details>

<details>
<summary><b>Example 2: The function of a concession</b></summary>

**Question:** The sentence "To be sure, a handful of prospectors did find spectacular deposits" serves mainly to:

- acknowledge an exception before restating the main claim
- provide the central evidence for the passage's argument
- show that the merchant account books are unreliable
- explain how prospectors located gold deposits

**Solution:**
1. "To be sure" is a **concession** signal. The next sentence begins "But," returning to the claim.
2. So the sentence grants an exception (some prospectors did strike it rich) without abandoning the argument.
3. The central evidence is the account books, not this exception. Nothing questions the books' reliability or explains how gold was found. The answer is **acknowledge an exception before restating the main claim**.
</details>
      `
    },
    {
      id: 'act-r2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice Passage A: Claim, Evidence, Concession** 🎯

> Standard economic models predicted that diners would tip less at restaurants they never expect to revisit, since there is no future service to protect. Yet researchers studying highway diners found tipping rates nearly identical to those at neighborhood restaurants. Economist Lena Park argues that tipping is better explained by social norms: diners tip because they feel they ought to, and because they want to avoid being seen as stingy. Park concedes that tipping norms vary widely from country to country, and in some places tipping is rare or even considered rude. But she contends that this variation actually supports her view, since a purely economic motive should not depend on local custom.
      `,
      exercise: {
        questions: [
          {
            question: `Park's main argument is that:`,
            options: [
              `diners tip mainly to secure better service on future visits`,
              `tipping customs are nearly identical in every country`,
              `social norms explain tipping better than self-interest`,
              `highway diners tip more than neighborhood diners`
            ],
            correctAnswer: 2,
            explanation: `Park argues that tipping "is better explained by social norms" than by protecting future service. Tipping to secure future service is the standard model's assumption, which the passage challenges. Park says norms vary widely across countries, the opposite of identical, and the highway finding was that rates were nearly the same, not higher.`
          },
          {
            question: `The finding about highway diners functions in the passage primarily as:`,
            options: [
              `evidence that undercuts the standard model's prediction`,
              `an example of norms that differ from country to country`,
              `a concession that Park makes to her critics`,
              `background on how restaurants set their prices`
            ],
            correctAnswer: 0,
            explanation: `The models predicted lower tips where diners never return, yet highway diners tipped about the same, so the finding contradicts that prediction. It concerns one country's diners, not variation across countries. Park's concession is about international norms, a separate point, and restaurant pricing is never discussed.`
          },
          {
            question: `How does Park treat the fact that tipping norms vary from country to country?`,
            options: [
              `She dismisses the variation as too small to matter`,
              `She admits that it disproves her account of tipping`,
              `She says it applies only to highway diners`,
              `She treats it as support for her view`
            ],
            correctAnswer: 3,
            explanation: `Park concedes the variation, then argues it supports her view because a purely economic motive should not depend on local custom. She calls the variation wide, not small. She turns it to her advantage rather than admitting defeat, and the highway diners are a different piece of evidence entirely.`
          },
          {
            question: `According to the passage, standard economic models predicted that diners would:`,
            options: [
              `tip more generously when traveling far from home`,
              `tip less where they never expect to return`,
              `tip the same amount in every kind of restaurant`,
              `stop tipping in countries where it is considered rude`
            ],
            correctAnswer: 1,
            explanation: `The first sentence states the prediction: less tipping at restaurants diners never expect to revisit. Tipping more while traveling reverses it. Equal tipping everywhere is what researchers actually found, not what the models predicted, and countries where tipping is rude come up only in Park's concession.`
          }
        ]
      }
    },
    {
      id: 'act-r2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Label the Sentence's Job** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Admittedly, the survey included only three cities." This sentence is a …',
            options: ['claim', 'concession', 'piece of evidence', 'cause']
          },
          {
            label: '"In one Ohio district, attendance rose 9 percent after the change." This sentence is a …',
            options: ['concession', 'claim', 'piece of evidence', 'counterargument']
          },
          {
            label: '"Rising rents, not changing tastes, drove young families out of the city center." This sentence states a …',
            options: ['concession', 'cause-and-effect claim', 'counterexample', 'background fact']
          }
        ],
        correctAnswers: ['concession', 'piece of evidence', 'cause-and-effect claim'],
        hint1: '"Admittedly" grants a weakness before the author moves on.',
        hint2: 'A specific number from a specific place supports a claim.',
        hint3: '"Drove" links a cause (rents) to an effect (families leaving).',
        explanation: '"Admittedly" signals a concession. A specific statistic from one district is evidence. "Drove" connects rising rents to families leaving, so the sentence makes a cause-and-effect claim.'
      }
    },
    {
      id: 'act-r2-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Practice: Passage B** 📋

Give yourself about four minutes.

> For much of the twentieth century, city planners judged a street by how many cars it could move. Traffic engineer Marcus Bell has spent a decade testing a different measure. In a "road diet," a four-lane street is narrowed to one lane in each direction, a center turning lane, and bike lanes. On the eleven corridors Bell studied, crashes fell after the change, while average travel times rose by less than a minute. Critics warned that slower traffic would hurt local shops. Bell's follow-up found that retail sales held steady or rose on nine of the eleven corridors, though he notes that two saw declines he cannot yet explain. Road diets, he cautions, suit streets with moderate traffic; on the busiest routes, a single lane each way can back up for blocks.
      `,
      exercise: {
        questions: [
          {
            question: `The main point of the passage is that:`,
            options: [
              `four-lane streets should be removed from every city`,
              `bike lanes are the main cause of falling crash rates`,
              `planners should judge streets only by retail sales`,
              `road diets can improve safety on moderate-traffic streets`
            ],
            correctAnswer: 3,
            explanation: `Bell's findings show fewer crashes with little delay, and he limits road diets to streets with moderate traffic. Removing four-lane streets everywhere ignores his warning about the busiest routes. The passage credits the whole redesign, not bike lanes alone, and retail sales are one result Bell checked, not his only measure.`
          },
          {
            question: `The statement that two corridors "saw declines he cannot yet explain" serves mainly to:`,
            options: [
              `acknowledge a result that does not fit the trend`,
              `prove that the critics were right about local shops`,
              `explain why travel times rose by under a minute`,
              `show that crashes rose on two of the corridors`
            ],
            correctAnswer: 0,
            explanation: `Nine corridors held steady or improved, so two declines are an exception Bell honestly reports. Two exceptions out of eleven do not prove the critics right. The declines are in retail sales, so they say nothing about travel times or crash rates, which fell.`
          },
          {
            question: `According to the passage, after road diets were installed on the corridors Bell studied:`,
            options: [
              `crashes rose and average travel times fell`,
              `crashes stayed the same but retail sales rose`,
              `crashes fell and travel times rose slightly`,
              `traffic backed up for blocks on every street`
            ],
            correctAnswer: 2,
            explanation: `The passage says crashes fell while travel times rose by less than a minute. The first choice reverses both directions, and the second ignores the drop in crashes. Backups of several blocks are Bell's warning about the busiest routes, not a result on his corridors.`
          },
          {
            question: `Bell would most likely agree with which statement?`,
            options: [
              `Road diets work well on even the busiest routes`,
              `Road diets are not the right fit for every street`,
              `Retail sales always rise after a road diet`,
              `Travel time is the only fair measure of a street`
            ],
            correctAnswer: 1,
            explanation: `Bell cautions that road diets suit moderate traffic and can back up the busiest routes, so they do not fit every street. That same caution contradicts the claim about the busiest routes. Sales did not always rise (two corridors declined), and Bell is testing a measure other than moving cars quickly.`
          }
        ]
      }
    },
    {
      id: 'act-r2-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Social science = read the argument.** Find the old view, the turn, the claim, the evidence, and the qualifications.
- **Signal words label sentences:** *argues* (claim), *for example* (evidence), *yet* (turn), *led to* (cause), *admittedly* (concession), *critics* (opposing view).
- **Function questions ask why a detail is there.** Statistics support claims; "such as" examples illustrate; "to be sure" sentences concede.
- **Keep voices separate.** The overturned assumption is never the passage's main claim.
- **Check direction and group on detail questions:** rose or fell, which group, which number.
- **Careful authors make careful claims.** Eliminate "only," "always," and "every" when the passage hedges.
      `
    }
  ]
}
