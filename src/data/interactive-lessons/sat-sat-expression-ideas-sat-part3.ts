export const satExpressionPart3Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei3-intro',
      type: 'text' as const,
      content: `# Effective Introductions & Conclusions

**Part 3 of 7 — Opening and Closing Sentences**

The SAT may ask which sentence best introduces or concludes a paragraph or passage. Strong openings and closings share specific characteristics.

### Effective Topic Sentences (Paragraph Openers)

A good topic sentence:
- States the paragraph's main point
- Connects to the previous paragraph (if not the first)
- Is general enough to cover the paragraph's content
- Is specific enough to give direction

**Test:** Can you predict what the paragraph will discuss from the topic sentence alone?

✅ "While solar panels reduce electricity costs, their manufacturing process raises environmental concerns."  
→ You can predict: the paragraph will discuss environmental downsides of solar panel production.

❌ "Solar panels are interesting."  
→ Too vague — could go anywhere.

### Effective Conclusions

A conclusion should:
- NOT introduce new information
- Synthesize or summarize the main point
- Sometimes look forward (implications, significance)

### Bad Conclusion Signals

- Introduces a brand-new topic
- Asks a question that the paragraph hasn't addressed
- Contradicts the paragraph's argument
- Restates the introduction word-for-word (too mechanical)`
    },
    {
      id: 'ei3-quiz',
      type: 'multiple-choice' as const,
      content: '**Introduction & Conclusion Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'A paragraph discusses how composting reduces landfill waste and produces nutrient-rich soil. Which is the best concluding sentence?',
            options: ['By diverting organic waste from landfills and enriching soil, composting offers a practical solution to two environmental challenges simultaneously.', 'Recycling is another important environmental practice that people should consider.', 'The history of composting dates back thousands of years to ancient civilizations.', 'There are many types of composting bins available at hardware stores.'],
            correctAnswer: 0,
            explanation: 'A good conclusion synthesizes the paragraph\'s two main points (waste reduction + soil enrichment). Option B introduces a new topic, C goes backward to history, and D introduces commercial information not discussed.'
          },
          {
            question: 'Which would be the best topic sentence for a paragraph about the decline of honeybee populations?',
            options: ['Honeybee populations have declined by nearly 40% in the past decade, threatening both agriculture and ecosystem stability.', 'Honeybees are fascinating creatures that live in complex social colonies.', 'Many people are allergic to bee stings.', 'Scientists have studied insects for centuries.'],
            correctAnswer: 0,
            explanation: 'This topic sentence names the issue (decline), quantifies it (40%), situates it in time (past decade), and explains its significance (agriculture + ecosystems). The other options are either too general or off-topic.'
          }
        ]
      }    },
    {
      id: 'ei3-text2',
      type: 'text' as const,
      content: `## Deep Dive: Crafting Strong Openings & Closings

### Worked Example 1: Evaluating Topic Sentences

| Candidate Topic Sentence | Paragraph About | Verdict |
|---|---|---|
| "Dogs are great." | Benefits of therapy dogs in hospitals | ❌ Too vague, too informal |
| "Therapy dogs can improve patient outcomes." | Benefits of therapy dogs in hospitals | ✅ Specific, matches scope |
| "Golden retrievers make excellent therapy dogs." | Benefits of therapy dogs in hospitals | ❌ Too narrow (only one breed) |
| "Animals have been domesticated for millennia." | Benefits of therapy dogs in hospitals | ❌ Too broad |

### Worked Example 2: Evaluating Conclusions

**Paragraph topic:** "How vertical farms use less water than traditional farming."

| Candidate Conclusion | Verdict | Why |
|---|---|---|
| "Vertical farming's water efficiency may prove critical as freshwater scarcity intensifies." | ✅ Best | Synthesizes main point + looks forward |
| "Vertical farms also produce food closer to urban markets." | ❌ | New information (not about water) |
| "Water is important for all life on Earth." | ❌ | Too broad, doesn't connect to vertical farming |
| "Traditional farming uses a lot of water." | ❌ | Restates known info, doesn't conclude |

### Introduction vs. Conclusion Checklist

| Feature | Introduction | Conclusion |
|---|---|---|
| States main point | ✅ Previews | ✅ Summarizes |
| Introduces new data | ✅ Sets up | ❌ Never |
| Broad or specific? | Broad enough to cover paragraph | Synthesizes specifics into a takeaway |
| Connects to other paragraphs | Forward-looking | Backward-looking |
| Uses "In conclusion" | ❌ Not on SAT | ❌ Cliché — avoid |`
    },
    {
      id: 'ei3-quiz2',
      type: 'multiple-choice' as const,
      content: '**Introductions & Conclusions Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'A paragraph discusses three advantages of electric vehicles: lower emissions, cheaper fuel costs, and reduced noise pollution. Which conclusion is best?',
            options: ['By reducing emissions, costs, and noise, electric vehicles offer practical benefits that extend beyond environmental impact.', 'Electric vehicles were first invented in the 1830s by Robert Anderson.', 'There are many types of electric vehicles available today.', 'In conclusion, electric vehicles are good.'],
            correctAnswer: 0,
            explanation: 'A mentions all three benefits (synthesizes) and adds forward-looking significance. B introduces history (new info). C is vague. D is simplistic and uses the cliché "In conclusion."'
          },
          {
            question: 'A topic sentence for a paragraph about antibiotic resistance should:',
            options: ['Name the problem, hint at its significance, and set up the evidence that follows', 'List every statistic that will appear in the paragraph', 'Begin with "In this paragraph, I will discuss..."', 'Make a bold claim with no connection to the paragraph content'],
            correctAnswer: 0,
            explanation: 'A good topic sentence previews the paragraph\'s content without listing every detail. It names the subject, signals its importance, and creates expectations for the evidence to follow.'
          },
          {
            question: 'Which is a red flag that a conclusion is wrong?',
            options: ['It introduces brand-new information not discussed in the paragraph', 'It refers back to the topic sentence', 'It uses slightly different wording than the introduction', 'It is shorter than the topic sentence'],
            correctAnswer: 0,
            explanation: 'Conclusions synthesize — they do NOT introduce new facts, studies, or topics. If a "conclusion" brings up something never mentioned, it\'s a wrong answer on the SAT.'
          }
        ]
      }
    },
    {
      id: 'ei3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Openings & Closings Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'A topic sentence should be [specific enough to preview but broad enough to cover|as vague as possible|exactly one word|a question]',
          'Conclusions should [synthesize the main point|introduce new evidence|restate the intro word-for-word|ask a new question]',
          'A good conclusion for a paragraph about water conservation would mention [water conservation|space exploration|cooking tips|exercise]',
          '"In conclusion" on the SAT is [cliché — avoid|required|preferred|the best transition]'
        ],
        correctAnswers: ['specific enough to preview but broad enough to cover', 'synthesize the main point', 'water conservation', 'cliché — avoid'],
        hint1: 'Not too broad, not too narrow — just right.',
        hint2: 'Synthesize = summarize + add significance.',
        hint3: 'The conclusion must relate to the paragraph\'s topic.',
        explanation: 'Topic sentences preview without being too broad or narrow. Conclusions synthesize, never introduce new info. Conclusions connect to the paragraph\'s topic. "In conclusion" is formulaic — the SAT prefers more sophisticated transitions.'
      }
    },
    {
      id: 'ei3-summary',
      type: 'text' as const,
      content: `## Part 3 Summary

| Element | Must Do | Must NOT Do |
|---|---|---|
| Topic sentence | Preview the paragraph's scope | Be too broad or too narrow |
| Conclusion | Synthesize main point(s) | Introduce new information |
| Introduction | Connect to previous paragraph | Use "In this paragraph…" |
| Conclusion | Look forward (significance) | Restate intro word-for-word |

*Next: Synthesis & Integrating Information →*`    }
  ]
};