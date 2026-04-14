export const satWordProblemsPart3Data = {
  topicSlug: 'sat-word-problems-sat',
  sections: [
    {
      id: 'wp3-intro',
      type: 'text' as const,
      content: `# Rate × Time = Distance

**Part 3 of 7 — Motion & Work Problems**

### The Core Formula
$$\\text{Distance} = \\text{Rate} \\times \\text{Time} \quad (d = rt)$$

Rearranged: $r = d/t$ and $t = d/r$

### Same Direction Problems
Two objects starting at the same point, going the same way:
- The faster one gets farther ahead over time
- Gap = (faster speed − slower speed) × time

### Opposite Direction Problems
Two objects starting at the same point, going opposite directions:
- **Combined rate** = speed₁ + speed₂
- Total distance apart = combined rate × time

### Meeting Problems
Two objects starting at different points, moving toward each other:
- They cover the distance between them at a **combined rate**
- Time to meet = total distance ÷ (speed₁ + speed₂)

**Example:** City A and B are 300 miles apart. Train 1 leaves A at 60 mph, Train 2 leaves B at 40 mph. When do they meet?
- Combined rate = 60 + 40 = 100 mph
- Time = 300/100 = **3 hours**

### Round Trip Problems
- Average speed for a round trip ≠ average of the two speeds
- Use: average speed = total distance / total time`
    },
    {
      id: 'wp3-q1',
      type: 'quiz' as const,
      question: 'A cyclist rides 20 miles at 10 mph, then rides back the same route at 20 mph. What is the average speed for the round trip?',
      options: [
        '15 mph',
        '13.3 mph',
        '12 mph',
        '14 mph'
      ],
      correctAnswer: 1,
      explanation: 'Total distance = 20 + 20 = 40 miles. Time out = 20/10 = 2 hours. Time back = 20/20 = 1 hour. Total time = 3 hours. Average speed = 40/3 ≈ 13.3 mph. Note: this is NOT (10+20)/2 = 15.'
    },
    {
      id: 'wp3-text2',
      type: 'text' as const,
      content: `## Deep Dive: Complex Rate Problems

### Worked Example 1: Catch-Up Problem

| Step | Work |
|---|---|
| **Problem** | "Car A leaves at 40 mph. Car B leaves from the same spot 1 hour later at 60 mph. When does B catch A?" |
| **At catch-up** | Both have traveled the same distance. |
| **A's distance** | $d = 40(t + 1)$ (traveled 1 extra hour) |
| **B's distance** | $d = 60t$ |
| **Set equal** | $40(t + 1) = 60t$ → $40t + 40 = 60t$ → $t = 2$ hours |
| **Answer** | B catches A **2 hours** after B leaves (3 hours after A leaves). Distance: $120$ miles. |

### Worked Example 2: Round Trip Average Speed

| Step | Work |
|---|---|
| **Problem** | "Drive to the store at 30 mph, drive back at 50 mph. Distance is 75 miles each way. What is the average speed?" |
| **Time going** | $75/30 = 2.5$ hours |
| **Time returning** | $75/50 = 1.5$ hours |
| **Total** | $150$ miles in $4$ hours |
| **Average speed** | $150/4 = 37.5$ mph |
| **NOT** | $(30 + 50)/2 = 40$ mph ← WRONG |

### Rate Problem Quick Guide

| Scenario | Key Relationship |
|---|---|
| Same direction | Gap changes at rate $= |v_1 - v_2|$ |
| Opposite directions | Gap closes at rate $= v_1 + v_2$ |
| Round trip avg speed | $\\frac{2d}{d/v_1 + d/v_2} = \\frac{2v_1 v_2}{v_1 + v_2}$ (harmonic mean) |
| Catch-up | Set distances equal: $v_1 t_1 = v_2 t_2$ |
| Work rate | Combined rate $= r_1 + r_2$; time $= \\frac{1}{r_1 + r_2}$ |

### Work Problems (Rate Variant)

"Pipe A fills a pool in 6 hours, Pipe B in 4 hours. Together?"
- Rate A $= \\frac{1}{6}$ pool/hr, Rate B $= \\frac{1}{4}$ pool/hr
- Combined: $\\frac{1}{6} + \\frac{1}{4} = \\frac{5}{12}$ pool/hr
- Time: $\\frac{12}{5} = 2.4$ hours`
    },
    {
      id: 'wp3-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Rate Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'Two trains 480 miles apart head toward each other at 70 mph and 50 mph. How long until they meet?',
            options: ['$4$ hours', '$6$ hours', '$8$ hours', '$3$ hours'],
            correctAnswer: 0,
            explanation: 'Combined rate $= 70 + 50 = 120$ mph. Time $= 480/120 = 4$ hours.'
          },
          {
            question: 'Machine A makes 20 widgets/hour, Machine B makes 30 widgets/hour. How long for both to make 200 widgets together?',
            options: ['$4$ hours', '$5$ hours', '$6$ hours', '$10$ hours'],
            correctAnswer: 0,
            explanation: 'Combined rate $= 20 + 30 = 50$ widgets/hour. Time $= 200/50 = 4$ hours.'
          },
          {
            question: 'A runner goes uphill at 4 mph and downhill at 6 mph on the same 12-mile trail. What is the average speed for the round trip?',
            options: ['$4.8$ mph', '$5$ mph', '$5.2$ mph', '$4.5$ mph'],
            correctAnswer: 0,
            explanation: 'Uphill time $= 12/4 = 3$ hrs. Downhill time $= 12/6 = 2$ hrs. Total: $24$ miles in $5$ hours. Average $= 24/5 = 4.8$ mph (NOT $5$ mph).'
          }
        ]
      }
    },
    {
      id: 'wp3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Rate Problem Setup** — Choose the correct equation.',
      exercise: {
        dropdowns: [
          'Two cars 300 mi apart, speeds 50 & 70 mph, toward each other. Meet in ___ hrs → [2.5|3|4|5]',
          'Pipe fills in 8 hrs, another in 12 hrs. Together fill rate (pool/hr) = [5/24|1/20|1/4|20/96]',
          'Round trip, 60 mph out, 40 mph back. Average speed = [48|50|45|55]',
          'Car leaves at 30 mph. 2 hrs later, another at 50 mph. Catch-up time for 2nd car = [3 hrs|2 hrs|4 hrs|5 hrs]'
        ],
        correctAnswers: ['2.5', '5/24', '48', '3 hrs'],
        hint1: 'Toward each other: combined rate = sum of speeds.',
        hint2: 'Work rates add: 1/8 + 1/12 = 3/24 + 2/24 = 5/24.',
        hint3: 'Round trip: 2(60)(40)/(60+40) = 4800/100 = 48.',
        explanation: 'Meet: 300/(50+70) = 300/120 = 2.5 hrs. Pipes: 1/8 + 1/12 = 5/24. Round trip: harmonic mean = 2(60)(40)/100 = 48. Catch-up: 30(t+2) = 50t → 30t + 60 = 50t → t = 3 hrs.'
      }
    },
    {
      id: 'wp3-summary',
      type: 'text' as const,
      content: `## Part 3 Summary: Rate × Time = Distance

| Problem Type | Formula | Key Insight |
|---|---|---|
| Basic motion | $d = rt$ | Rearranges to $r = d/t$ or $t = d/r$ |
| Toward each other | $t = \\frac{\\text{distance}}{v_1 + v_2}$ | Combined rate = sum |
| Same direction | Gap changes at $|v_1 - v_2|$ | Faster gains slowly |
| Round trip avg | $\\frac{2v_1 v_2}{v_1 + v_2}$ | NOT arithmetic average |
| Work problems | $\\frac{1}{t_1} + \\frac{1}{t_2} = \\frac{1}{t_{\\text{total}}}$ | Rates add, not times |

### SAT Strategy
- For round trips, always compute **total distance ÷ total time**.
- In catch-up problems, set distances equal and account for head starts.
- Work problems use the same logic as rate problems — rates add.

*Next: Mixture and cost problems →*`
    }
  ]
};
