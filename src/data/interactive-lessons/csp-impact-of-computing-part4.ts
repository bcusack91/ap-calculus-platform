export const cspImpactOfComputingPart4Data = {
  topicSlug: "csp-impact-of-computing",
  sections: [
    {
      id: "cspic4-intro",
      type: 'text' as const,
      content: `
# 🌍 Impact of Computing

**Part 4 of 7 — Connections & Interactions**

---

## Cross-Course Connections

Impact of computing ties everything together.

| Cross-link | Why |
|-----------|-----|
| Impact ↔ Internet (BI 4) | Global reach amplifies both benefit and harm. |
| Impact ↔ Algorithms (BI 3) | Algorithms make consequential decisions about humans. |
| Impact ↔ Data (BI 2) | Massive data collection enables both useful and invasive systems. |
| Impact ↔ Security (BI 4) | Breaches turn collected data into harm. |
      `
    },
    {
      id: "cspic4-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Two services collect overlapping personal data. Combining them via a data-broker poses risks beyond either alone because ___",
            options: [
              "combining the two sets averages out individual records, which makes each person harder to find.",
              "linking shared details across the two sets can re-identify people who seem anonymous in each.",
              "each service already holds all the data the other has, so the merged set adds nothing new.",
              "the risk arises only if a breach occurs, since merging the data sets alone reveals nothing."
            ],
            correctAnswer: 1,
            explanation: "Disparate personal data can be aggregated to create knowledge about an individual, which defeats simple anonymization."
          },
          {
            question: "A government deploys an automated system that decides who is eligible for benefits. The most CSP-aligned concern is ___",
            options: [
              "the system will be more consistent than caseworkers, so fairness concerns no longer apply.",
              "its decisions shape people's lives, so they must be accurate, fair, and explainable.",
              "the code, data, and rules are government property, so applicants cannot question a denial.",
              "automated decisions are always more accurate than human ones, so appeals are unnecessary."
            ],
            correctAnswer: 1,
            explanation: "High-stakes algorithmic decisions demand fairness, accuracy, and transparency."
          }
        ]
      }
    },
    {
      id: "cspic4-content",
      type: 'text' as const,
      content: `
## When Algorithms Decide About People

Examples:

- **Loan approval** — denied a mortgage by a model.
- **Sentencing risk scores** — courts using algorithmic risk assessments.
- **Content moderation** — auto-removing posts.
- **Hiring screeners** — filtering resumes.

CSP-aligned concerns:

- **Accuracy**: how often is the model wrong?
- **Fairness**: are errors distributed evenly across groups?
- **Transparency**: can affected people understand why?
- **Recourse**: can decisions be appealed?

## Surveillance vs. Convenience

Many features blur the line:

| Feature | Convenience | Surveillance side |
|---------|-------------|------------------|
| Smart speaker | Voice control | Always listening |
| Location services | Useful maps / weather | Continuous location log |
| Loyalty cards | Discounts | Fine-grained purchase history |

The more we trade for convenience, the more we should ask **who else gets the data**.

## Misinformation At Scale

The Internet allows false information to spread as quickly as true information. Rapid sharing of a program, or running it with a huge number of users, can have significant impacts beyond its intended purpose or the programmer's control. Recommendation algorithms can amplify whatever generates engagement, which is not always what is true. Computing plays a role in social and political issues, which in turn raises legal and ethical concerns.
      `
    },
    {
      id: "cspic4-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Separate pieces of personal data, such as location and browsing history, can be _______ to create knowledge about a person.

2) When algorithms make high-stakes decisions about people, an important property is _______ — being able to explain why.

3) Computing innovations can reflect existing human biases through biases in their algorithms or in their _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["aggregated", "transparency", "data"],
        hint1: "Gathered together into one record.",
        hint2: "Open about how it decides.",
        hint3: "What the innovation learns from.",
        explanation: "Aggregated personal data reveal individuals; transparency helps accountability; bias comes from algorithms or the data they use."
      }
    },
    {
      id: "cspic4-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A feed that recommends posts based only on past clicks may lead to users ___",
            options: ["seeing mostly viewpoints similar to their own", "seeing a random mix of all available viewpoints", "having their network traffic filtered for malware", "having phishing emails blocked before they arrive"]
          },
          {
            label: "A bot army inflating likes affects ___",
            options: ["perceived popularity, distorting public discourse", "server uptime, causing a denial-of-service outage", "network bandwidth, slowing every user's connection", "data privacy, exposing users' personal information"]
          },
          {
            label: "High-stakes algorithmic decisions especially benefit from ___",
            options: ["human oversight and appeal mechanisms", "fully automated decisions with no appeal", "closed-source models kept secret from users", "larger training sets with no human review"]
          }
        ],
        correctAnswers: ["seeing mostly viewpoints similar to their own", "perceived popularity, distorting public discourse", "human oversight and appeal mechanisms"],
        hint1: "Algorithmic narrowing of feed.",
        hint2: "Fake amplification.",
        hint3: "Humans in the loop.",
        explanation: "Click-based recommendations narrow exposure. Fake accounts distort signals. Human oversight checks algorithmic harm."
      }
    },
    {
      id: "cspic4-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Cross-Topic Impact

- A scenario about combining datasets often points to a privacy answer: aggregated data can identify people.
- A scenario about a model deciding about people → fairness, transparency, recourse.
- A scenario about viral content → rapid sharing, misinformation, impacts beyond the intended purpose.
- Always tie the harm back to a CSP-relevant mechanism (data, algorithm, network reach).
      `
    },
    {
      id: "cspic4-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A health app sells \"anonymized\" exercise data. A researcher links the data to public running club rosters and identifies many users. Which CSP concept is illustrated?",
            options: [
              "A data breach, since attackers broke into the app's servers to steal the exercise records.",
              "Aggregation of data, since combining it with outside records revealed who the runners were.",
              "Crowdsourcing, since many runners contributed data that the researcher combined into one set.",
              "Encryption failure, since anonymized data must be encrypted before it can be sold to anyone."
            ],
            correctAnswer: 1,
            explanation: "Location, time, and route details, combined with other sources, can link \"anonymous\" records back to people."
          },
          {
            question: "A social platform's recommendation algorithm boosts engagement. Over time it shows users increasingly extreme content. What CSP-aligned framing best fits?",
            options: [
              "The algorithm has developed its own preferences and is choosing extreme content on purpose.",
              "Optimizing for engagement differs from optimizing for wellbeing, so harm emerged as a side effect.",
              "Users' engagement shows they asked for extreme content, so the system is doing what they chose.",
              "Extreme content spreads only because of a few bad actors, so the algorithm itself plays no role."
            ],
            correctAnswer: 1,
            explanation: "Optimization targets shape outcomes; engagement-maximization can produce harmful content as a side effect."
          }
        ]
      }
    }
  ]
};
