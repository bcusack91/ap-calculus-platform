export const calcabOptimizationPart7Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'opt7-intro',
      type: 'text' as const,
      content: `# Optimization

**Part 7 of 7 \u2014 Comprehensive Assessment**

### Optimization Strategy Reference

| Step | Action | Check |
|:---:|:---:|:---:|
| 1 | Draw and label diagram | Variables defined? |
| 2 | Write objective function | What are you optimizing? |
| 3 | Apply constraint | Down to one variable? |
| 4 | Find critical points | $f'(x) = 0$ solved? |
| 5 | Verify max/min | 2nd derivative or endpoints? |
| 6 | Answer the question | Units included? |

### Common AP Mistakes

| Mistake | Fix |
|:---:|:---:|
| Not stating the domain | Write $0 < x < \\text{bound}$ |
| Forgetting to verify max vs min | Always use 2nd derivative test |
| Wrong constraint | Re-read what's "fixed" or "given" |
| Ignoring endpoints on $[a,b]$ | Compare $f$ at all candidates |
| Not labeling units | Include m, cm$^2$, etc. |`
    },
    {
      id: 'opt7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Quiz Set 1 \u2014 Core Skills** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'A farmer with 400 m of fencing encloses a rectangle along a river (3 sides fenced). Maximum area is:',
            options: ['$20000$ m$^2$', '$10000$ m$^2$', '$40000$ m$^2$', '$16000$ m$^2$'],
            correctAnswer: 0,
            explanation: '$2x+y=400$, $y=400-2x$. $A=x(400-2x)$. $A\'=400-4x=0$ at $x=100$. $A=100 \\times 200 = 20000$.'
          },
          {
            question: 'An open-top box from a $10 \\times 10$ square has volume $V = x(10-2x)^2$. The domain is:',
            options: ['$0 < x < 5$', '$0 < x < 10$', '$0 < x < 2.5$', '$x > 0$'],
            correctAnswer: 0,
            explanation: '$10-2x > 0$ requires $x < 5$. Also $x > 0$. Domain: $(0, 5)$.'
          },
          {
            question: 'Max profit occurs where:',
            options: ['$R\'(x) = C\'(x)$', '$R(x) = C(x)$', '$R\'(x) = 0$', '$C\'(x) = 0$'],
            correctAnswer: 0,
            explanation: '$P\'(x) = R\'(x) - C\'(x) = 0$ when marginal revenue = marginal cost.'
          },
          {
            question: 'For a closed cylinder with fixed volume, the optimal height-to-radius ratio is:',
            options: ['$h = 2r$', '$h = r$', '$h = \\pi r$', '$h = r/2$'],
            correctAnswer: 0,
            explanation: 'The optimal closed cylinder has $h = 2r$ (height = diameter).'
          }
        ]
      }
    },
    {
      id: 'opt7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Quiz Set 2 \u2014 Advanced Problems** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Two positive numbers sum to 100. Maximum product is:',
            options: ['$2500$', '$2400$', '$5000$', '$10000$'],
            correctAnswer: 0,
            explanation: '$P = x(100-x)$. $P\'=100-2x=0$ at $x=50$. $P = 50 \\times 50 = 2500$.'
          },
          {
            question: '$f(x) = x^3 - 12x$ on $[-3, 3]$. The absolute max is:',
            options: ['$16$', '$12$', '$-16$', '$0$'],
            correctAnswer: 0,
            explanation: '$f\'=3x^2-12=0$ at $x=\\pm 2$. $f(-2)=16$, $f(2)=-16$, $f(-3)=9$, $f(3)=-9$. Max $= 16$.'
          },
          {
            question: 'To minimize the distance from a point to a curve, you should minimize:',
            options: ['$D^2$ (distance squared)', '$D$ (distance)', '$|D|$', '$1/D$'],
            correctAnswer: 0,
            explanation: 'Minimizing $D^2$ avoids square roots and yields the same critical points since $D \\geq 0$.'
          }
        ]
      }
    },
    {
      id: 'opt7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Final review.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'The Second Derivative Test says $f\'\'(c) > 0$ at a critical point means:',
            options: ['Local minimum', 'Local maximum', 'Inflection point', 'Inconclusive'],
            correctAnswers: ['Local minimum'],
            hints: ['$f\'\' > 0$ means concave up.'],
            explanation: 'Concave up at critical point = local minimum (holds water like a cup).'
          },
          {
            label: 'For "set up but do not solve," you earn full credit by showing:',
            options: ['Objective, constraint, derivative set to 0, domain', 'Only the answer', 'A graph', 'The constraint only'],
            correctAnswers: ['Objective, constraint, derivative set to 0, domain'],
            hints: ['Show all the calculus setup.'],
            explanation: 'Full credit requires the objective function, constraint applied, $f\'(x) = 0$ written, and domain stated.'
          },
          {
            label: 'An open-top cylinder with fixed volume has optimal ratio:',
            options: ['$h = r$', '$h = 2r$', '$h = 3r$', '$h = r/2$'],
            correctAnswers: ['$h = r$'],
            hints: ['Only one circular base.'],
            explanation: 'Open top: $S = \\pi r^2 + 2\\pi rh$. Optimization yields $h = r$.'
          }
        ]
      }
    },
    {
      id: 'opt7-input',
      type: 'input-box' as const,
      content: '**Final Challenge.** \u270d\ufe0f',
      exercise: {
        question: 'A farmer has 600 m of fencing to make 3 adjacent rectangular pens (sharing internal fences). The total area $A = x(600-4x)/2$ where $x$ is the width. Find the maximum total area in m$^2$.\n\n(Enter an integer.)',
        correctAnswer: '11250',
        acceptableAnswers: ['11250'],
        hints: [
          'Constraint: $2y + 4x = 600$ so $y = (600-4x)/2 = 300 - 2x$.',
          '$A = x(300-2x) = 300x - 2x^2$.',
          '$A\' = 300 - 4x = 0$ at $x = 75$. $A = 75 \\times 150 = 11250$.'
        ],
        explanation: '$A\'= 300 - 4x = 0$ gives $x = 75$. $y = 150$. $A = 75 \\times 150 = 11250$ m$^2$.'
      }
    },
    {
      id: 'opt7-completion',
      type: 'text' as const,
      content: `### \ud83c\udf89 Topic Complete!

You've mastered **Optimization**:

| Part | Topic | Status |
|:---:|:---:|:---:|
| 1 | Setting up optimization problems | \u2705 |
| 2 | Geometric optimization | \u2705 |
| 3 | Applied & business optimization | \u2705 |
| 4 | 3D optimization (cylinders & cones) | \u2705 |
| 5 | Distance & mixed problems | \u2705 |
| 6 | AP-style workshop | \u2705 |
| 7 | Comprehensive assessment | \u2705 |

> **Key Fact:** The 5-step optimization strategy (variables \u2192 objective \u2192 constraint \u2192 critical points \u2192 verify) works for every optimization problem. On the AP exam, always justify your answer using the Second Derivative Test or endpoint comparison.`
    }
  ]
};
