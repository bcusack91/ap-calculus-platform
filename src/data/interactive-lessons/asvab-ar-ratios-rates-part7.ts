export const asvabArRatiosRatesPart7Data = {
  topicSlug: 'asvab-ar-ratios-rates',
  sections: [
    {
      id: 'arrr7-intro',
      type: 'text' as const,
      content: `# 🚚 Ratios, Proportions and Rates

**Part 7 of 7 — Mixed Mastery Set**

### Put it all together

This set mixes every skill from the topic, roughly the way a real AR subtest builds: a few quick ones, a solid middle, then a few that take more steps.

| Set | Difficulty | What's inside |
|:---|:---|:---|
| A | Warm-up | A ratio, $d = r \\times t$, a unit price |
| B | Test level | Part-to-whole, blueprint scale, minutes to hours, two workers, a three-part ratio |
| C | Stretch | Catching up, round-trip average speed, comparing fuel costs |

Work each one the way you would at MEPS: **last sentence first**, **find the rate for one**, **units on every line**, an **estimate**, and a **final check**. Aim for about 2 to 3 minutes per problem, faster on Set A.`
    },
    {
      id: 'arrr7-set-a',
      type: 'multiple-choice' as const,
      content: '**Set A — Warm-up.** 🟢',
      exercise: {
        questions: [
          {
            question: 'A recruiting office keeps 3 Army brochures for every 2 Navy brochures. It has 36 Army brochures. How many Navy brochures does it have?',
            options: ['54', '24', '35', '60'],
            correctAnswer: 1,
            explanation: '36 Army brochures is $36 \\div 3 = 12$ groups, and each group has 2 Navy brochures: $12 \\times 2 = 24$. The answer 54 flips the ratio, 35 treats the ratio as a difference of 1, and 60 is the total of both kinds ($12 \\times 5$).'
          },
          {
            question: 'A bus travels at a steady 55 miles per hour from 9:00 a.m. to 12:00 noon. How many miles does it travel?',
            options: ['58', '52', '220', '165'],
            correctAnswer: 3,
            explanation: 'From 9:00 to 12:00 is 3 hours, so $55 \\times 3 = 165$ miles. The answer 220 counts 4 hours (9, 10, 11, 12) instead of measuring the time between them, 58 adds the speed and the hours, and 52 subtracts them.'
          },
          {
            question: 'A 5-pound bag of rice costs \\$6.50. What is the price per pound?',
            options: ['\\$1.30', '\\$0.77', '\\$32.50', '\\$1.50'],
            correctAnswer: 0,
            explanation: 'Price per pound = price ÷ pounds: $6.50 \\div 5 = 1.30$, so \\$1.30. \\$0.77 divides the wrong way ($5 \\div 6.50$), \\$32.50 multiplies, and \\$1.50 subtracts 5 from 6.50.'
          }
        ]
      }
    },
    {
      id: 'arrr7-set-b',
      type: 'multiple-choice' as const,
      content: '**Set B — Test level.** 🟡',
      exercise: {
        questions: [
          {
            question: 'A fleet of 56 vehicles has trucks and vans in the ratio 3 to 4. How many vans are in the fleet?',
            options: ['24', '42', '32', '14'],
            correctAnswer: 2,
            explanation: 'Shares: $3 + 4 = 7$. One share: $56 \\div 7 = 8$. Vans: $4 \\times 8 = 32$. The answer 24 is the number of trucks, 42 uses the part-to-part fraction $\\frac{3}{4}$ of 56 as if it were part-to-whole, and 14 divides 56 by 4 instead of by 7.'
          },
          {
            question: 'On a blueprint, $\\frac{1}{4}$ inch represents 2 feet. A hallway is 30 feet long. How long is it on the blueprint?',
            options: ['15 inches', '7.5 inches', '60 inches', '3.75 inches'],
            correctAnswer: 3,
            explanation: 'Four quarter-inches make an inch, so 1 inch = $4 \\times 2 = 8$ feet. Real to drawing is divide: $30 \\div 8 = 3.75$ inches. 15 inches is the number of quarter-inch marks ($30 \\div 2$) without turning them into inches, 7.5 inches treats $\\frac{1}{4}$ inch as 1 foot, and 60 inches applies the scale backwards ($30 \\times 2$).'
          },
          {
            question: 'A train covers 140 miles in 2 hours 20 minutes. What is its average speed in miles per hour?',
            options: ['70 mph', '60 mph', '56 mph', '1 mph'],
            correctAnswer: 1,
            explanation: '2 hours 20 minutes is $2\\frac{1}{3} = \\frac{7}{3}$ hours, so $140 \\div \\frac{7}{3} = 140 \\times \\frac{3}{7} = 60$ mph. Or: 140 minutes for 140 miles is 1 mile per minute, which is 60 miles per hour. 70 mph ignores the 20 minutes, 56 mph rounds the time to 2.5 hours, and 1 mph is the miles-per-minute rate left un-converted.'
          },
          {
            question: 'One printer finishes a print job in 20 minutes. A second printer finishes the same job in 30 minutes. How long does the job take if both printers work together?',
            options: ['25 minutes', '12 minutes', '50 minutes', '10 minutes'],
            correctAnswer: 1,
            explanation: 'Rates: $\\frac{1}{20} + \\frac{1}{30} = \\frac{3}{60} + \\frac{2}{60} = \\frac{5}{60} = \\frac{1}{12}$ of the job per minute, so 12 minutes (shortcut: $\\frac{600}{50} = 12$). 25 minutes averages the times and 50 minutes adds them, both slower than the first printer alone. 10 minutes would be right only if both printers were as fast as the first one.'
          },
          {
            question: 'A 640-pound supply load is made up of water, food and equipment in the ratio 1 : 3 : 4 by weight. How many pounds of food are in the load?',
            options: ['240', '80', '480', '320'],
            correctAnswer: 0,
            explanation: 'Shares: $1 + 3 + 4 = 8$. One share: $640 \\div 8 = 80$ pounds. Food: $3 \\times 80 = 240$ pounds. The answer 80 is one share (the water), 320 is the equipment, and 480 takes $\\frac{3}{4}$ of 640 by comparing food to equipment instead of to the whole load.'
          }
        ]
      }
    },
    {
      id: 'arrr7-set-c',
      type: 'multiple-choice' as const,
      content: '**Set C — Stretch.** 🔴',
      exercise: {
        questions: [
          {
            question: 'A supply truck leaves a base at 8:00 a.m. traveling 40 mph. At 9:30 a.m. a jeep leaves the same base on the same road traveling 64 mph. At what time does the jeep catch up to the truck?',
            options: ['10:30 a.m.', '1:30 p.m.', '11:00 a.m.', '12:00 p.m.'],
            correctAnswer: 3,
            explanation: 'Head start: the truck drives 1.5 hours before the jeep leaves, so it is $40 \\times 1.5 = 60$ miles ahead. The jeep gains $64 - 40 = 24$ miles per hour, so it needs $60 \\div 24 = 2.5$ hours: $9{:}30 + 2.5$ hours is 12:00 noon. 10:30 a.m. adds the 2.5 hours to the truck\'s 8:00 start, 1:30 p.m. adds the 1.5-hour head start on top of the 2.5 hours, and 11:00 a.m. adds only the head start.'
          },
          {
            question: 'A recruit hikes 6 miles up a trail at 2 mph and then hikes the same 6 miles back down at 3 mph. What is her average speed for the whole hike?',
            options: ['2.5 mph', '5 mph', '2.4 mph', '1.2 mph'],
            correctAnswer: 2,
            explanation: 'Up: $6 \\div 2 = 3$ hours. Down: $6 \\div 3 = 2$ hours. Total: 12 miles in 5 hours, so $12 \\div 5 = 2.4$ mph. 2.5 mph averages the two speeds, 5 mph adds them, and 1.2 mph divides only the one-way 6 miles by the total time.'
          },
          {
            question: 'A truck gets 15 miles per gallon and a van gets 25 miles per gallon. Gas costs \\$3.00 per gallon. On a 300-mile trip, how much less does the van spend on gas than the truck?',
            options: ['\\$36.00', '\\$24.00', '\\$90.00', '\\$8.00'],
            correctAnswer: 1,
            explanation: 'Truck: $300 \\div 15 = 20$ gallons, or \\$60.00. Van: $300 \\div 25 = 12$ gallons, or \\$36.00. Difference: $60 - 36 = 24$, so \\$24.00. \\$36.00 is the van\'s cost (one step early), \\$8.00 is the difference in gallons with no price applied, and \\$90.00 subtracts the mpg first ($300 \\div 10 = 30$ gallons, times \\$3.00), which is not how fuel economy works.'
          }
        ]
      }
    },
    {
      id: 'arrr7-input',
      type: 'input-boxes' as const,
      content: `**One more, on scratch paper.** ✍️

One sanding machine can refinish a gym floor in 4 hours. A second machine can refinish the same floor in 6 hours.

**1)** Working together, how many hours do the two machines take? (number only, in hours, as a decimal)

**2)** How many minutes is that? (number only, in minutes)`,
      exercise: {
        boxes: 2,
        correctAnswers: ['2.4', '144'],
        hint1: 'Rates add: $\\frac{1}{4} + \\frac{1}{6}$ of the floor per hour.',
        hint2: '$\\frac{3}{12} + \\frac{2}{12} = \\frac{5}{12}$ of the floor per hour, or use $\\frac{\\text{product}}{\\text{sum}}$.',
        hint3: '$\\frac{4 \\times 6}{4 + 6} = \\frac{24}{10}$ hours. Multiply the hours by 60 for minutes.',
        explanation: '(1) $\\frac{4 \\times 6}{4 + 6} = \\frac{24}{10} = 2.4$ hours. (2) $2.4 \\times 60 = 120 + 24 = 144$ minutes, which is 2 hours 24 minutes. Check: 2.4 hours is less than 4 hours, the faster machine alone.'
      }
    },
    {
      id: 'arrr7-summary',
      type: 'text' as const,
      content: `### Topic Summary — Ratios, Proportions and Rates

| Skill | The move |
|:---|:---|
| Ratios | Same **order** as the words; simplify by dividing both numbers |
| Part-to-whole | Add the parts: in $a : b$ the first part is $\\frac{a}{a + b}$ of the total |
| Splitting a total | Total ÷ (sum of parts) = one share, then multiply |
| Proportions | **Same unit, same position**; cross-multiply or use the unit rate |
| Scale | Rewrite as "1 inch = ___": drawing to real multiply, real to drawing divide |
| Distance, rate, time | $d = r \\times t$ with **minutes turned into hours**; apart add speeds, catching up subtract |
| Average speed | **Total distance ÷ total time**, never the average of the speeds |
| Work rates | **Rates add**; together is faster than the fastest alone |
| Unit price and fuel | Price ÷ quantity; gallons = miles ÷ mpg, then times the price |

### What to do next

1. **Take the exit quiz** for this topic. If you score 80% or better, the topic is done.
2. **Review the flashcards** for this topic. They focus on the parts method, part-to-whole fractions, minutes-to-hours conversions, work rates and average speed.
3. **Move on to the next AR topic:** averages, counting and probability. You will use the same habits: last sentence first, units on every line, an estimate and a check.`
    }
  ]
};
