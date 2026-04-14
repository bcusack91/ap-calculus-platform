export const satReadingEvidencePart6Data = {
  topicSlug: 'sat-reading-evidence-sat',
  sections: [
    {
      id: 're6-intro',
      type: 'text' as const,
      content: `# Data Interpretation in Reading

**Part 6 of 7 — Charts, Graphs, and Tables in R&W**

The Digital SAT includes informational graphics alongside some Reading & Writing passages. You must integrate data from both the text and the visual.

### Common Graphic Types

- **Bar charts:** Compare quantities across categories
- **Line graphs:** Show trends over time
- **Tables:** Present precise numerical data
- **Scatter plots:** Show relationships between two variables

### Strategy: Text + Graphic Integration

1. Read the passage first to understand the main argument
2. Examine the graphic: title, axes, labels, units
3. Ask: "How does this graphic support or complicate the passage's claims?"

### Example Question Pattern

**Passage says:** "Renewable energy adoption has accelerated dramatically in the past decade."

**Graph shows:** Solar installation growing from 2 GW in 2010 to 150 GW in 2023.

**Question:** "Which claim from the passage is best supported by the data in the figure?"

✅ Answer: The claim about dramatic acceleration—the graph shows 75x growth.

### SAT Trap ⚠️

- Don't confuse what the **text claims** with what the **data shows**. Sometimes the data actually **contradicts** or **qualifies** the text's claims.
- Always check the **scale and units** on graphs. A graph that looks dramatic might only show a change from 50.0% to 50.5%.`
    },
    {
      id: 're6-quiz',
      type: 'multiple-choice' as const,
      content: '**Data + Reading Integration** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage claims "Exercise significantly improves test scores." A table shows students who exercised 30 min/day scored an average of 82%, while non-exercisers scored 78%. Does the data support the claim?',
            options: ['Partially—the data shows improvement but "significantly" may overstate a 4-point difference', 'Yes—any improvement counts as significant', 'No—the data completely contradicts the claim', 'The data is irrelevant to the claim'],
            correctAnswer: 0,
            explanation: 'The data does show improvement (82 vs 78), so it partially supports the claim. But a 4-percentage-point difference might not qualify as "significant"—the word choice in the passage is stronger than the data warrants.'
          },
          {
            question: 'When a graph appears with a passage, you should read:',
            options: ['The passage first, then the graph title and labels, then integrate both', 'The graph first because visual data is more objective', 'Only the passage—the graph is supplementary', 'Only the graph—the passage is just context'],
            correctAnswer: 0,
            explanation: 'Start with the passage to understand the argument, then examine the graph with attention to title, axes, and units. Integration of both is always required for correct answers.'
          }
        ]
      }    },
    {
      id: 're6-text2',
      type: 'text' as const,
      content: `## Deep Dive: Text + Data Integration

### Worked Example 1: Does the Data Support or Complicate the Text?

**Text claim:** "Electric vehicle sales have surged, suggesting widespread consumer adoption."

**Graph data:** EV sales grew from 1% to 8% of total car sales (2018-2024).

| Analysis | Result |
|---|---|
| Did sales grow? | Yes — 1% to 8% is 8× growth |
| Does "surge" fit? | ✅ Yes — 8× growth qualifies as a surge |
| Does "widespread adoption" fit? | ⚠️ Questionable — 8% is still a small minority |
| Verdict | Data PARTIALLY supports: "surged" ✅ but "widespread" may overstate 8% share |

### Worked Example 2: Reading Graph Details Carefully

| Graph Element | What to Check | Common Mistake |
|---|---|---|
| **Y-axis** | Does it start at 0? | A graph starting at 50 exaggerates changes |
| **Scale** | Linear or logarithmic? | Log scale makes exponential growth look linear |
| **Units** | %, absolute numbers, per capita? | 50% increase FROM 2 = only 3 |
| **Time range** | What years are shown? | Trend in 2020-2024 may differ from 2000-2024 |
| **Title** | What does it actually measure? | "Revenue" ≠ "profit" ≠ "units sold" |

### Data-Text Relationship Types

| Relationship | Signal | Example |
|---|---|---|
| Data supports text | "As the graph shows…" | Text says "rising" + graph shows increase |
| Data qualifies text | "However, the data suggests…" | Text says "dramatic" but change is small |
| Data contradicts text | "Contrary to the claim…" | Text says "decline" but graph shows increase |
| Data extends text | "Furthermore, the data reveals…" | Text discusses cause, data shows magnitude |`
    },
    {
      id: 're6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Data Interpretation Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'A bar chart shows Country A spending 5% of GDP on education and Country B spending 4.9%. The text claims "a substantial gap in education investment." The data:',
            options: ['Undermines the claim — a 0.1% difference is not "substantial"', 'Fully supports the claim', 'Is irrelevant to the claim', 'Proves the claim definitively'],
            correctAnswer: 0,
            explanation: '5% vs. 4.9% = 0.1 percentage point difference. While technically A spends more, calling this "substantial" is an overstatement that the data doesn\'t support.'
          },
          {
            question: 'A graph shows temperatures rising from 14.0°C to 14.8°C over 100 years, but the y-axis starts at 13.5°C instead of 0. This means:',
            options: ['The visual exaggerates the temperature increase', 'The temperature change is larger than it appears', 'The data is incorrect', 'The graph is unreadable'],
            correctAnswer: 0,
            explanation: 'A truncated y-axis (not starting at 0) magnifies visual differences. The 0.8°C increase looks much larger on a 13.5-15.0 scale than it would on a 0-15 scale. Always check the axis range.'
          },
          {
            question: 'Text claims: "Exercise reduces heart disease risk." A table shows 50% lower risk for those exercising 150+ min/week vs. sedentary. The data:',
            options: ['Strongly supports the claim with quantitative evidence', 'Partially supports — 50% is not enough', 'Contradicts the claim', 'Is irrelevant'],
            correctAnswer: 0,
            explanation: 'A 50% risk reduction is substantial quantitative evidence directly supporting the claim that exercise reduces heart disease risk. The data and text align well.'
          }
        ]
      }
    },
    {
      id: 're6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Data + Reading Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'Always check the graph\'s [y-axis scale and units|color scheme|font size|legend position]',
          'Text says "dramatic increase," data shows 0.5% change → [data qualifies/undermines the text|data supports|data is wrong|text is always right]',
          'Read the [passage first, then the graph|graph first|passage only|graph only]',
          'A graph not starting at 0 can [exaggerate visual differences|hide the data|be ignored|simplify the analysis]'
        ],
        correctAnswers: ['y-axis scale and units', 'data qualifies/undermines the text', 'passage first, then the graph', 'exaggerate visual differences'],
        hint1: 'Scale and units determine how to interpret the data.',
        hint2: '"Dramatic" is strong language for 0.5%.',
        hint3: 'Understand the argument first, then check the data.',
        explanation: 'Always check scale/units. Small data changes don\'t support "dramatic" claims. Read the passage first. Truncated y-axes exaggerate visual differences.'
      }
    },
    {
      id: 're6-summary',
      type: 'text' as const,
      content: `## Part 6 Summary

| Concept | Key Rule |
|---|---|
| Integration | Read text first → examine graph → compare |
| Check graph | Y-axis, scale, units, title, time range |
| Data can | Support, qualify, contradict, or extend the text |
| Truncated y-axis | Exaggerates visual differences |
| Common trap | Text uses strong language but data shows small change |

*Next: Reading Comprehension Review →*`    }
  ]
};