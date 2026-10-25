export const asvabArRatiosRatesPart4Data = {
  topicSlug: 'asvab-ar-ratios-rates',
  sections: [
    {
      id: 'arrr4-intro',
      type: 'text' as const,
      content: `# 🚚 Ratios, Proportions and Rates

**Part 4 of 7 — Distance, Rate and Time**

### One formula, three ways to use it

Rate × time is an official AR sample topic. Everything comes from one formula:

$$\\text{distance} = \\text{rate} \\times \\text{time} \\qquad d = r \\times t$$

| You want | Use | Example |
|:---|:---|:---|
| Distance | $d = r \\times t$ | 50 mph for 3 hours: $50 \\times 3 = 150$ miles |
| Time | $t = d \\div r$ | 195 miles at 65 mph: $195 \\div 65 = 3$ hours |
| Rate (speed) | $r = d \\div t$ | 240 miles in 4 hours: $240 \\div 4 = 60$ mph |

The units must match: miles per **hour** goes with time in **hours**.

**Worked Example.** A convoy drives at 52 miles per hour for 2 hours 30 minutes. How far does it go?

- 2 hours 30 minutes is $2\\frac{1}{2}$ hours, or 2.5 hours.
- $52 \\times 2.5 = 52 \\times 2 + 52 \\times 0.5 = 104 + 26 = 130$ miles.

**Estimate:** about 50 mph for 2.5 hours is about 125 miles. ✓`
    },
    {
      id: 'arrr4-minutes',
      type: 'text' as const,
      content: `## Turn minutes into hours first

A speed in miles per hour needs a time in hours. Divide the minutes by 60, and learn these by heart:

| Minutes | 15 | 20 | 30 | 40 | 45 | 90 |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| Hours | $\\frac{1}{4}$ | $\\frac{1}{3}$ | $\\frac{1}{2}$ | $\\frac{2}{3}$ | $\\frac{3}{4}$ | $1\\frac{1}{2}$ |

**Worked Example.** A truck drives 36 miles per hour for 40 minutes. How far does it go?

$$40 \\text{ min} = \\frac{2}{3} \\text{ h} \\qquad 36 \\times \\frac{2}{3} = 12 \\times 2 = 24 \\text{ miles}$$

**The trap:** $36 \\times 40 = 1{,}440$ "miles." That's what you get if you forget to convert, and it fails the reasonableness test: nobody drives 1,440 miles in under an hour.

**Worked Example: finding a speed.** A cyclist rides 10 miles in 50 minutes. What is her speed in miles per hour?

- In 10 minutes she rides $10 \\div 5 = 2$ miles.
- An hour has six 10-minute blocks: $6 \\times 2 = 12$ miles per hour.

> **Key Fact:** "Minutes left un-converted" is one of the most common AR traps. Before you multiply or divide by a speed, make sure the time is in the same unit as the speed.`
    },
    {
      id: 'arrr4-two',
      type: 'text' as const,
      content: `## Two vehicles at once

### Moving apart or toward each other: ADD the speeds

**Worked Example.** Two buses leave the same depot at the same time and drive in opposite directions, one at 50 mph and one at 60 mph. When will they be 330 miles apart?

- Every hour the gap grows by $50 + 60 = 110$ miles.
- $330 \\div 110 = 3$ hours.

The same idea works for two vehicles driving **toward** each other: the gap shrinks by the sum of the speeds.

### One catching up to the other: SUBTRACT the speeds

**Worked Example.** A truck leaves a depot at 7:00 a.m. traveling 45 mph. At 8:00 a.m. a car leaves the same depot on the same road at 60 mph. When does the car catch the truck?

- **Head start:** by 8:00 the truck is $45 \\times 1 = 45$ miles ahead.
- **Closing speed:** the car gains $60 - 45 = 15$ miles every hour.
- **Time to catch up:** $45 \\div 15 = 3$ hours after 8:00, so at **11:00 a.m.**

**Check:** at 11:00 the truck has driven 4 hours ($4 \\times 45 = 180$ miles) and the car 3 hours ($3 \\times 60 = 180$ miles). ✓`
    },
    {
      id: 'arrr4-average',
      type: 'text' as const,
      content: `## Average speed for a round trip

This is a hard-item favorite. **Average speed = total distance ÷ total time.** It is NOT the average of the two speeds.

**Worked Example.** A driver goes 60 miles to a training site at 30 mph and comes back the same 60 miles at 60 mph. What is the average speed for the whole trip?

| Leg | Distance | Speed | Time |
|:---|:---:|:---:|:---:|
| Going | 60 miles | 30 mph | $60 \\div 30 = 2$ hours |
| Returning | 60 miles | 60 mph | $60 \\div 60 = 1$ hour |
| **Total** | **120 miles** | | **3 hours** |

$$\\text{average speed} = 120 \\div 3 = 40 \\text{ mph}$$

The tempting answer is $\\frac{30 + 60}{2} = 45$ mph, and it will almost certainly be a choice. It's wrong because the driver spends **more time** at the slow speed (2 hours) than at the fast speed (1 hour), so the average is pulled toward the slower speed.

> **Key Fact:** For any trip with two legs, find the time for each leg, add the distances, add the times, then divide. Never average the two speeds.`
    },
    {
      id: 'arrr4-mc',
      type: 'multiple-choice' as const,
      content: '**Distance, rate and time.** Check your units before you multiply. 🎯',
      exercise: {
        questions: [
          {
            question: 'A recruit finishes a 6-mile run in 45 minutes. What is her average speed in miles per hour?',
            options: ['7.5 mph', '4.5 mph', '8 mph', '6 mph'],
            correctAnswer: 2,
            explanation: '45 minutes is $\\frac{3}{4}$ hour, so her speed is $6 \\div \\frac{3}{4} = 6 \\times \\frac{4}{3} = 8$ mph. Check: 8 mph for $\\frac{3}{4}$ hour is 6 miles. The answer 7.5 mph divides the 45 minutes by the 6 miles (time ÷ distance), 4.5 mph multiplies 6 by $\\frac{3}{4}$ instead of dividing, and 6 mph treats 45 minutes as a full hour.'
          },
          {
            question: 'Two trucks leave a warehouse at noon and drive in opposite directions, one at 55 mph and the other at 65 mph. How many miles apart are they at 2:30 p.m.?',
            options: ['25', '300', '240', '360'],
            correctAnswer: 1,
            explanation: 'Moving apart, the gap grows by $55 + 65 = 120$ miles every hour. From noon to 2:30 is 2.5 hours, so $120 \\times 2.5 = 300$ miles. The answer 25 subtracts the speeds, which is only right when one vehicle chases the other. 240 uses 2 hours and 360 uses 3 hours instead of 2.5.'
          },
          {
            question: 'A driver travels 90 miles to a base at 45 mph and returns along the same 90-mile road at 30 mph. What is her average speed for the whole round trip?',
            options: ['37.5 mph', '75 mph', '18 mph', '36 mph'],
            correctAnswer: 3,
            explanation: 'Going takes $90 \\div 45 = 2$ hours and returning takes $90 \\div 30 = 3$ hours. Total: 180 miles in 5 hours, so $180 \\div 5 = 36$ mph. The answer 37.5 mph averages the two speeds, 75 mph adds them, and 18 mph divides only the one-way distance of 90 miles by the total time.'
          }
        ]
      }
    },
    {
      id: 'arrr4-input',
      type: 'input-boxes' as const,
      content: `**Convert, then compute.** ✍️

A patrol boat cruises at a steady 24 miles per hour.

**1)** How far does it travel in 1 hour 15 minutes? (number only, in miles)

**2)** How long does it take to travel 18 miles? (number only, in minutes)`,
      exercise: {
        boxes: 2,
        correctAnswers: ['30', '45'],
        hint1: '1 hour 15 minutes is $1\\frac{1}{4}$ hours.',
        hint2: 'For part 2, time = distance ÷ rate gives hours: $18 \\div 24$.',
        hint3: '$\\frac{18}{24} = \\frac{3}{4}$ hour. How many minutes is that?',
        explanation: '(1) $24 \\times 1\\frac{1}{4} = 24 + 6 = 30$ miles. (2) $18 \\div 24 = \\frac{3}{4}$ hour, and $\\frac{3}{4}$ of 60 minutes is 45 minutes. Check: in 45 minutes the boat covers $\\frac{3}{4} \\times 24 = 18$ miles.'
      }
    },
    {
      id: 'arrr4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Quick checks.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'Before you use a speed in miles per hour, 40 minutes should be written as:',
            options: ['$\\frac{2}{5}$ hour', '$\\frac{3}{4}$ hour', '$\\frac{2}{3}$ hour', '$\\frac{1}{3}$ hour'],
            correctAnswer: 2
          },
          {
            label: 'When one vehicle chases another on the same road, the gap between them closes at:',
            options: ['the sum of the two speeds', 'the difference of the speeds', 'the speed of the faster one', 'the average of the two speeds'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['$\\frac{2}{3}$ hour', 'the difference of the speeds'],
        hint1: 'Divide the minutes by 60 and simplify: $\\frac{40}{60}$.',
        hint2: 'If both vehicles go the same direction, how much does the faster one gain each hour?',
        hint3: 'A car at 60 mph behind a truck at 45 mph gains 15 miles every hour.',
        explanation: '$\\frac{40}{60} = \\frac{2}{3}$ hour; $\\frac{2}{5}$ comes from reading 40 minutes as 0.4 hours. When one vehicle chases another in the same direction, the faster one gains only the difference of the speeds each hour. The sum is for vehicles moving apart or toward each other.'
      }
    },
    {
      id: 'arrr4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- $d = r \\times t$, $t = d \\div r$, $r = d \\div t$, with **time in the same unit as the speed**
- Convert minutes to hours by dividing by 60: 15 min = $\\frac{1}{4}$ h, 20 min = $\\frac{1}{3}$ h, 40 min = $\\frac{2}{3}$ h, 45 min = $\\frac{3}{4}$ h
- Moving apart or toward each other: **add** the speeds. One catching the other: **subtract** the speeds, and find the head start first
- Average speed = **total distance ÷ total time**, never the average of the two speeds

> **Up Next:** Part 5 — work rates (two workers on one job) and unit prices, fuel economy and rate conversions.`
    }
  ]
};
