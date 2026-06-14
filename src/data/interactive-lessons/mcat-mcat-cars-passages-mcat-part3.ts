export const mcatCarsPsgPart3Data = {
  topicSlug: 'mcat-cars-passages-mcat',
  sections: [
    {
      id: 'cp3-intro',
      type: 'text' as const,
      content: `# CARS Passage Types

**Part 3 of 7 — Argumentative Passages**

### Structure of an Argument

1. **Claim/Thesis**: The main point the author is making
2. **Evidence/Support**: Facts, examples, reasoning that back the claim
3. **Warrants**: Assumptions connecting evidence to the claim (often unstated!)
4. **Counterarguments**: Opposing views the author addresses
5. **Conclusion**: Where the argument lands

### Common Argument Patterns in CARS

| Pattern | Structure | Example Signal |
|---------|-----------|----------------|
| **Claim-Evidence** | Thesis → support | "Studies show..." |
| **Problem-Solution** | Problem → proposed fix | "To address this..." |
| **Compare-Contrast** | View A vs. View B | "While some argue... others contend..." |
| **Cause-Effect** | X led to Y | "As a result of..." |
| **Critique** | Examines and evaluates a position | "This argument fails because..." |

### Identifying the Argument

After reading, you should be able to articulate:
- **What is being argued?** (the claim)
- **Why should I believe it?** (the evidence)
- **What are the assumptions?** (often tested on CARS!)`
    },
    {
      id: 'cp3-worked-example',
      type: 'text' as const,
      content: `### Worked Example — Mapping an Argument

> *"Proponents of standardized testing make a tidy case: tests are objective, scalable, and immune to the favoritism that taints teacher judgment. The reasoning is appealing precisely because it sounds like fairness. But objectivity in scoring is not the same as fairness in measurement. A ruler applied identically to every student is still useless if it measures the wrong thing. The relevant question is not whether the test is administered uniformly — it surely is — but whether the trait it captures is the trait we claim to value. On that question the proponents are conspicuously quiet."*

**Mapping it, piece by piece:**

- **Claim (the author's):** Standardized testing's "objectivity" does not guarantee it is fair, because uniform scoring is not the same as measuring the right trait.
- **Opposing claim (the proponents'):** Tests are fair *because* they are objective and uniformly applied.
- **Author's key move:** Drawing a distinction — *objectivity of scoring* vs. *validity of what is measured*. The ruler analogy makes the distinction vivid.
- **Unstated warrant the author exposes:** The proponents assume "uniform = fair." The author denies that this follows.
- **Where the argument lands:** The proponents have not shown the test measures the trait "we claim to value," so their fairness claim is unsupported.

**Reading the structure as a CARS question would test it:**
- A *main idea* question wants the author's claim, not the proponents'.
- An *assumption* question targets the hidden "uniform = fair" link.
- A *strengthen/weaken* question will hinge on evidence about **what the test actually measures**, since that is the load-bearing point.

> **Takeaway:** When an author attacks an argument, find the exact link they sever. Here it is the leap from "objective" to "fair." Everything else in the passage exists to break that single link.`
    },
    {
      id: 'cp3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Argument Analysis** 🎯`,
      exercise: {
        questions: [
          {
            question: `A passage argues that public art funding improves community well-being, citing three city case studies. An unstated assumption is likely:`,
            options: [`That the improvements in those cities were caused by the art funding and not other factors`, `That all cities are identical`, `That public art is always popular`, `That community well-being cannot be measured`],
            correctAnswer: 0,
            explanation: `The argument assumes a causal link between art funding and improved well-being. But the case studies could be explained by other factors (confounding variables). CARS loves testing your ability to identify unstated assumptions.`
          },
          {
            question: `In the worked-example excerpt, the author's central claim is that:`,
            options: [`Standardized tests should be abolished immediately`, `The objectivity of standardized scoring does not by itself establish that the tests are fair measures`, `Teacher judgment is always superior to standardized testing`, `Standardized tests are administered inconsistently across schools`],
            correctAnswer: 1,
            explanation: `The author distinguishes "objectivity in scoring" from "fairness in measurement," arguing the former does not guarantee the latter. Option A goes beyond the text; C is the opposite of the author's careful stance; D contradicts the author's concession that the test "surely is" uniformly administered.`
          },
          {
            question: `The ruler analogy ("a ruler applied identically to every student is still useless if it measures the wrong thing") most directly serves to:`,
            options: [`Concede that standardized tests are fair`, `Illustrate that uniform application is worthless if the instrument measures the wrong trait`, `Prove that no measurement tool can ever be valid`, `Argue that teachers should grade with rulers`],
            correctAnswer: 1,
            explanation: `The analogy dramatizes the author's core distinction: consistency of application (the identical ruler) is separate from validity (whether it measures the right thing). It is the engine of the argument, not a concession or an absolute denial of measurement.`
          },
          {
            question: `Which assumption does the author attribute to the proponents of standardized testing?`,
            options: [`That uniform, objective administration of a test makes the test fair`, `That teacher judgment is never biased`, `That tests are too expensive to scale`, `That community well-being is unmeasurable`],
            correctAnswer: 0,
            explanation: `The author's whole critique targets the proponents' hidden warrant — that because tests are "objective" and uniformly applied, they are therefore fair. The author severs exactly this link ("objectivity in scoring is not the same as fairness in measurement").`
          }
        ]
      }
    },
    {
      id: 'cp3-quiz2',
      type: 'multiple-choice' as const,
      content: `### Exit Ticket — Strengthen, Weaken & Structure`,
      exercise: {
        questions: [
          {
            question: `Which of the following, if true, would most STRENGTHEN the author's argument?`,
            options: [`A study finds that scores on the standardized test correlate poorly with the real-world competencies schools say they value`, `The test is graded by a computer with no human involvement`, `Students take the test in identical conditions nationwide`, `Most teachers support standardized testing`],
            correctAnswer: 0,
            explanation: `The author argues the test may measure the wrong trait. Evidence that scores correlate poorly with the valued competencies directly supports that the instrument lacks validity — the author's load-bearing point. Options B and C reinforce uniformity, which the author already grants and considers beside the point.`
          },
          {
            question: `Which of the following, if true, would most WEAKEN the author's argument?`,
            options: [`Decades of research show the test's scores strongly predict the exact skills educators identify as most valuable`, `The test is administered in the same way to every student`, `Some critics dislike standardized testing on principle`, `The proponents have published several essays defending the test`],
            correctAnswer: 0,
            explanation: `The author claims proponents have not shown the test captures "the trait we claim to value." Strong evidence that scores predict precisely those valued skills undercuts that claim and rescues the proponents' fairness argument. Option B addresses uniformity, which is not the contested issue.`
          },
          {
            question: `Which choice best describes the overall structure of the worked-example passage?`,
            options: [`It presents a popular claim, then dismantles it by drawing a distinction the claim ignores`, `It lists several unrelated facts about testing without an argument`, `It defends standardized testing against unfair attacks`, `It compares two historical periods of education reform`],
            correctAnswer: 0,
            explanation: `The passage opens with the proponents' "tidy case" (a popular claim), then pivots ("But objectivity in scoring is not the same as fairness in measurement") to expose the overlooked distinction between scoring and measurement. Recognizing this claim-then-critique architecture is a structure/function skill.`
          }
        ]
      }
    },
    {
      id: 'cp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Every argument has: claim + evidence + assumptions + conclusion
- Unstated assumptions are frequently tested on CARS
- Know the common patterns: claim-evidence, problem-solution, compare-contrast
- "Why should I believe this?" is the critical reader's key question
- When an author critiques a view, find the **single link** they sever (here: "objective" → "fair")
- Strengthen/weaken answers should target the argument's load-bearing premise, not peripheral concessions`
    }
  ]
};
