export const psychAttitudesPart6Data = {
  topicSlug: 'attitudes-persuasion',
  sections: [
    {
      id: 'attitudes-persuasion-p6-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Attitudes and Persuasion

**Part 6 of 7 — AP Exam Practice: Analyzing Attitude Research**

> 🔑 **Key Concept:** The AP Psychology exam has two free-response questions. The **Article Analysis Question (AAQ)** is 7 points in 6 parts and asks you to analyze one study summary. The **Evidence-Based Question (EBQ)** is 7 points in 3 parts and asks you to build a claim from three short sources. This part practices both on attitude and persuasion research.

### The six AAQ tasks

| Task | What you must do |
|------|------------------|
| 1. Research method | Identify the method (experiment, correlational study, case study, and so on) and be ready to justify it |
| 2. Operational definition | State exactly how a variable was measured or manipulated in *this* study |
| 3. Statistic or result | Describe what a number in the summary shows |
| 4. Ethics | Identify an ethical guideline the researchers applied, using a detail from the summary |
| 5. Generalizability | Explain the extent to which the findings generalize, using evidence about the participants or setting |
| 6. Support or refute | Explain how a specific finding supports or refutes the hypothesis or claim |

---

### 📄 Practice study summary (hypothetical; not a real published study)

**Purpose:** Researchers tested whether personal relevance changes how much argument strength affects attitudes, as the elaboration likelihood model predicts.

**Participants:** 160 juniors from one public high school in a suburban district, recruited during homeroom. Parents gave written consent, and students gave their own assent. Students could stop at any time.

**Procedure:** Students were randomly assigned to one of four groups. Each read an editorial proposing a required senior capstone project.
- **Relevance:** Half were told the requirement would begin next year at their own school (high relevance). Half were told it would begin in ten years in a different district (low relevance).
- **Argument strength:** Half read strong arguments (results from pilot schools). Half read weak arguments (anecdotes and slogans).

Attitude was measured by averaging three items, each rated from 1 (strongly oppose) to 9 (strongly favor). Afterward, students were told that the editorial had been written by the researchers and that no such policy was planned.

**Results (mean attitude, with standard deviation in parentheses; 40 students per group):**

| | Strong arguments | Weak arguments |
|--|------------------|----------------|
| **High relevance** | 6.8 (1.2) | 3.1 (1.4) |
| **Low relevance** | 5.2 (1.5) | 4.9 (1.6) |

**Conclusion:** The researchers concluded that argument strength affected attitudes much more when the topic was personally relevant.
      `
    },
    {
      id: 'attitudes-persuasion-p6-s2-walkthrough',
      type: 'text' as const,
      content: `
### 📝 Walking through the six AAQ tasks

**1. Research method.** *Model answer:* "This is an experiment, because the researchers randomly assigned students to conditions and manipulated relevance and argument strength." Naming random assignment and manipulation is what separates an experiment from a correlational study.

**2. Operational definition.** *Model answer:* "Attitude was operationally defined as the average of three ratings from 1 (strongly oppose) to 9 (strongly favor) about the capstone requirement." You could also define personal relevance as being told the policy would start next year at the student's own school versus in ten years in another district.

**3. Statistic.** *Model answer:* "In the high-relevance condition, students who read strong arguments averaged 6.8, while those who read weak arguments averaged 3.1, a difference of 3.7 points. In the low-relevance condition the difference was only 0.3 points." When you describe a standard deviation, say what it shows about spread: the 1.2 in the high-relevance, strong-argument group is the smallest, so those scores clustered most tightly around their mean.

**4. Ethics.** *Model answer:* "The researchers used informed consent: parents gave written consent and students gave assent before taking part." Another acceptable answer: "They debriefed students by revealing that the editorial was written by the researchers," which is required because the study used deception.

**5. Generalizability.** *Model answer:* "The findings may not generalize widely, because all participants were juniors from a single suburban public high school. Students of other ages, regions, or school types might respond differently." Random **assignment** strengthens the causal conclusion, but it does not make a sample **representative**; only random sampling from a broader population does that.

**6. Support or refute.** *Model answer:* "The results support the hypothesis. Argument strength made a 3.7-point difference when the topic was personally relevant but only a 0.3-point difference when it was not, which fits the elaboration likelihood model's claim that argument quality matters mainly on the central route."

> 🔑 **AP Connection:** Every AAQ answer must use details from the summary. "The sample was small" earns nothing; "all 160 participants came from one suburban high school" shows you read the study.
      `
    },
    {
      id: 'attitudes-persuasion-p6-s3-aaq-check',
      type: 'multiple-choice' as const,
      content: `
**AAQ Practice — Use the practice study summary** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the practice study, which of the following is a dependent variable?',
            options: [
              'Whether the editorial used pilot results or slogans',
              'The average of each student\'s three attitude ratings',
              'Whether the policy would start at their school',
              'The suburban district where the students attended'
            ],
            correctAnswer: 1,
            explanation: 'The dependent variable is what the researchers measured to see the effect of their manipulations: the averaged attitude rating. Argument strength and relevance are the two independent variables, and the district was the same for everyone.'
          },
          {
            question: 'What does the standard deviation of 1.2 in the high-relevance, strong-argument group show?',
            options: [
              'That group\'s mean was 1.2 points above the weak-argument group\'s.',
              'Scores in that group were spread out the least around their mean.',
              'About 1.2 percent of that group opposed the capstone requirement.',
              'The group differences are too small to be statistically significant.'
            ],
            correctAnswer: 1,
            explanation: 'A standard deviation describes spread around the mean, and 1.2 is the smallest of the four, so those scores clustered most tightly. It is not a difference between means or a percentage, and a standard deviation alone does not tell you whether a difference is statistically significant.'
          },
          {
            question: 'Telling students at the end that the editorial was written by the researchers and that no policy was planned is an example of which ethical guideline?',
            options: [
              'Informed consent',
              'Confidentiality',
              'Protection from harm',
              'Debriefing'
            ],
            correctAnswer: 3,
            explanation: 'Revealing the deception and the true purpose after participation is debriefing. Informed consent happens before the study begins, and confidentiality concerns keeping participants\' data private.'
          }
        ]
      }
    },
    {
      id: 'attitudes-persuasion-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate from the Results Table** 🧮

Use the practice study's results table. Give each answer as a number.
      `,
      exercise: {
        questions: [
          {
            question: 'In the high-relevance condition, how many points higher was the mean attitude after strong arguments than after weak arguments?',
            answer: '3.7',
            acceptableAnswers: ['3.70', '+3.7'],
            explanation: '6.8 minus 3.1 equals 3.7 points.'
          },
          {
            question: 'In the low-relevance condition, how many points higher was the mean attitude after strong arguments than after weak arguments?',
            answer: '0.3',
            acceptableAnswers: ['.3', '0.30', '+0.3'],
            explanation: '5.2 minus 4.9 equals 0.3 points, a much smaller gap than under high relevance.'
          },
          {
            question: 'Across all four groups, what was the largest standard deviation reported?',
            answer: '1.6',
            acceptableAnswers: ['1.60'],
            explanation: 'The low-relevance, weak-argument group had the largest standard deviation, 1.6, so its scores were the most spread out.'
          }
        ]
      }
    },
    {
      id: 'attitudes-persuasion-p6-s5-ebq',
      type: 'text' as const,
      content: `
### 📚 EBQ Practice

**Prompt:** Using the sources, develop and justify a claim about whether repeated exposure to a stimulus makes people evaluate it more favorably.

**Source 1 (practice summary, hypothetical lab experiment):** 120 college students viewed a set of unfamiliar abstract paintings. Within one session, each painting was shown 0, 3, 6, or 12 times, and the number of showings was randomly assigned across paintings. Mean liking ratings on a 1 to 7 scale were 3.4 (0 showings), 4.1 (3 showings), 4.6 (6 showings), and 4.4 (12 showings).

**Source 2 (practice summary, hypothetical correlational survey):** 400 adults reported how many times they remembered seeing a public-service ad about seatbelt laws and rated their attitude toward those laws. The two measures were positively correlated, r = +0.32.

**Source 3 (practice summary, hypothetical field study):** Two similar towns ran the same 15-second recycling ad for eight weeks, Town A twice a day and Town B twelve times a day. The share of residents with favorable attitudes toward recycling rose from 58% to 66% in Town A and from 57% to 61% in Town B. In Town B, 44% of residents described the ad as annoying, compared with 12% in Town A.

---

### Building the response

**Part A — Claim.** *Model:* "Repeated exposure tends to make people evaluate a stimulus more favorably, but the benefit levels off or reverses when exposure becomes excessive."

**Part B — Evidence from one source, explained with a concept.** *Model:* "In Source 1, liking rose from 3.4 for paintings never shown to 4.6 for paintings shown six times. This supports the claim through the mere exposure effect: repeated encounters made the paintings more familiar and easier to process, which increased liking even with no reward. The dip to 4.4 at twelve showings fits the claim's limit."

**Part C — Evidence from a different source, explained with a concept.** *Model:* "In Source 3, favorable attitudes rose 8 points in the town that saw the ad twice a day but only 4 points in the town that saw it twelve times a day, where 44% found it annoying. This supports the claim's limit: mere exposure increases liking at moderate levels, but overexposure produces boredom and irritation that reduce the effect."

**Using Source 2 carefully.** Source 2 fits the claim, but it is correlational. People who already supported seatbelt laws might have paid more attention to the ad and remembered it more often, so it cannot show that exposure *caused* the favorable attitude. If you use it, say so.

> 🔑 **AP Connection:** In Parts B and C, each must cite a **different** source, name a specific number or detail, and connect it to a psychological concept. A claim that just repeats the prompt ("exposure affects attitudes") is too vague to defend.
      `
    },
    {
      id: 'attitudes-persuasion-p6-s6-ebq-check',
      type: 'multiple-choice' as const,
      content: `
**EBQ Practice — Reasoning with the sources** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Which claim is best supported by the three practice sources taken together?',
            options: [
              'Repetition can raise favorable attitudes, but its benefit levels off.',
              'Repetition raises favorable attitudes more with each added showing.',
              'Repetition has no measurable link to how people evaluate a stimulus.',
              'Repetition lowers favorable attitudes once people notice the pattern.'
            ],
            correctAnswer: 0,
            explanation: 'Sources 1 and 3 show liking rising with moderate repetition and then flattening or dipping with heavy repetition, and Source 2 shows a positive relationship. A steady rise ignores the dip at twelve showings and the smaller gain in Town B, and both remaining claims contradict the rises the sources report.'
          },
          {
            question: 'A student uses Source 2 to argue that seeing the seatbelt ad caused people to favor seatbelt laws. What is the strongest critique of that argument?',
            options: [
              'The sample of 400 adults is too small to show that any relationship exists.',
              'The correlation is negative, so the ad must have lowered favorable attitudes.',
              'The data are correlational, so prior supporters may have noticed the ad more frequently.',
              'The survey was an experiment, so it cannot show a cause-and-effect link.'
            ],
            correctAnswer: 2,
            explanation: 'A correlation cannot establish direction: people who already favored the laws may have paid more attention to the ad and remembered it more. A sample of 400 is reasonably large, r = +0.32 is positive, and the survey was not an experiment.'
          }
        ]
      }
    }
  ]
}
