export const asvabArWholeNumberProblemsPart7Data = {
  topicSlug: 'asvab-ar-whole-number-problems',
  sections: [
    {
      id: 'arwn7-intro',
      type: 'text' as const,
      content: `# 🔢 Word Problems with Whole Numbers

**Part 7 of 7 — Mixed Mastery Set**

### Put it all together

This set mixes every skill from the topic, in roughly the order a real AR subtest would build: a few quick ones, a solid middle, then a few that take more steps.

| Set | Difficulty | What's inside |
|:---|:---|:---|
| A | Warm-up | One or two steps: operations, units, a starting amount |
| B | Test level | Expressions, overtime, square yards, elapsed time, remainders |
| C | Stretch | Areas with pieces cut out, remainders with a cost, working backwards |

Work each one the way you would at MEPS: **last sentence first**, a **number sentence**, **units on every line**, an **estimate**, and a **final check**. Aim for about 2 to 3 minutes per problem, faster on Set A.`
    },
    {
      id: 'arwn7-set-a',
      type: 'multiple-choice' as const,
      content: '**Set A — Warm-up.** 🟢',
      exercise: {
        questions: [
          {
            question: 'A ship\'s galley uses 36 eggs every morning. How many eggs does it use in 2 weeks of mornings?',
            options: ['252', '504', '72', '50'],
            correctAnswer: 1,
            explanation: '2 weeks is $2 \\times 7 = 14$ mornings, and $14 \\times 36 = 360 + 144 = 504$ eggs. The answer 252 counts only one week, 72 multiplies by 2 without converting weeks to days, and 50 adds 14 and 36.'
          },
          {
            question: 'A recruit\'s bank account had \\$615. After she bought a pair of boots, it had \\$448. How much did the boots cost?',
            options: ['\\$1,063', '\\$177', '\\$167', '\\$233'],
            correctAnswer: 2,
            explanation: 'The boots cost the difference: $615 - 448 = 167$, so \\$167 (check: $448 + 167 = 615$). \\$1,063 adds the two balances. \\$177 forgets to reduce the tens digit after borrowing, and \\$233 subtracts the smaller digit from the larger in each column.'
          },
          {
            question: 'Each of 8 tents needs 15 stakes. The supply crate holds 95 stakes. How many more stakes are needed?',
            options: ['25', '120', '215', '7'],
            correctAnswer: 0,
            explanation: 'Stakes needed: $8 \\times 15 = 120$. More needed: $120 - 95 = 25$. The answer 120 is the total needed, one step early; 215 adds the stakes on hand to the stakes needed; 7 subtracts 8 from 15.'
          }
        ]
      }
    },
    {
      id: 'arwn7-set-b',
      type: 'multiple-choice' as const,
      content: '**Set B — Test level.** 🟡',
      exercise: {
        questions: [
          {
            question: 'Ana buys 3 notebooks at \\$8 each and one backpack for \\$15. She pays with a \\$50 bill. Which expression gives her change in dollars?',
            options: ['$50 - 3 \\times 8 + 15$', '$(50 - 3) \\times 8 + 15$', '$50 - 3 \\times (8 + 15)$', '$50 - (3 \\times 8 + 15)$'],
            correctAnswer: 3,
            explanation: 'Her total is $3 \\times 8 + 15 = 39$, and the whole total comes off the \\$50: $50 - (3 \\times 8 + 15) = 50 - 39 = 11$. Without parentheses, $50 - 3 \\times 8 + 15$ subtracts the notebooks but adds the backpack back. $50 - 3 \\times (8 + 15)$ charges 3 backpacks, and $(50 - 3) \\times 8 + 15$ subtracts a count from a dollar amount.'
          },
          {
            question: 'A security guard earns \\$20 an hour for the first 40 hours of a week and \\$30 an hour for each hour over 40. Her pay last week was \\$980. How many overtime hours did she work?',
            options: ['46', '9', '49', '6'],
            correctAnswer: 3,
            explanation: 'Regular pay: $40 \\times 20 = 800$. Overtime pay: $980 - 800 = 180$. Overtime hours: $180 \\div 30 = 6$. The answer 46 is her total hours, not the overtime hours the question asks for; 9 divides the overtime pay by the regular rate; 49 divides all \\$980 by \\$20.'
          },
          {
            question: 'A garage floor is 24 ft by 18 ft. A coating costs \\$3 per square yard. What will it cost to coat the floor?',
            options: ['\\$1,296', '\\$144', '\\$432', '\\$252'],
            correctAnswer: 1,
            explanation: 'Area: $24 \\times 18 = 432$ sq ft. Convert: $432 \\div 9 = 48$ sq yd (or 8 yd by 6 yd). Cost: $48 \\times 3 = 144$, so \\$144. \\$1,296 never converts to square yards, \\$432 divides by 3 instead of 9, and \\$252 prices the perimeter (84 ft).'
          },
          {
            question: 'A road crew works from 10:50 a.m. to 7:20 p.m. with a 30-minute unpaid break. Crew members earn \\$16 an hour. How much does one crew member earn for the day?',
            options: ['\\$128', '\\$136', '\\$144', '\\$48'],
            correctAnswer: 0,
            explanation: 'Count up: 10:50 to 11:00 is 10 min, 11:00 a.m. to 7:00 p.m. is 8 h, and 7:00 to 7:20 is 20 min, so 8 h 30 min. Minus the break: 8 h. Pay: $8 \\times 16 = 128$, so \\$128. \\$136 forgets to take out the break (pays 8 h 30 min), \\$48 subtracts the clock times across noon (3 h 30 min, minus the break), and \\$144 adds the 30-minute difference to the 9 hours from 10 o\'clock to 7 o\'clock instead of subtracting it, then takes out the break.'
          },
          {
            question: 'A group of 230 trainees will ride to the range in trucks that carry 18 trainees each. What is the fewest number of trucks needed?',
            options: ['13', '12', '14', '212'],
            correctAnswer: 0,
            explanation: '$230 \\div 18 = 12$ remainder 14, because $18 \\times 12 = 216$. Twelve trucks would leave 14 trainees behind, so 13 trucks. The answer 12 rounds down, 14 is the remainder, and 212 subtracts one truckload instead of dividing.'
          }
        ]
      }
    },
    {
      id: 'arwn7-set-c',
      type: 'multiple-choice' as const,
      content: '**Set C — Stretch.** 🔴',
      exercise: {
        questions: [
          {
            question: 'A rectangular room is 20 ft by 15 ft, but a 6 ft by 5 ft closet takes up one corner and won\'t get new flooring. Flooring costs \\$4 per square foot. What will the flooring cost?',
            options: ['\\$1,200', '\\$1,320', '\\$280', '\\$1,080'],
            correctAnswer: 3,
            explanation: 'Room: $20 \\times 15 = 300$ sq ft. Closet: $6 \\times 5 = 30$ sq ft. Floored area: $300 - 30 = 270$ sq ft. Cost: $270 \\times 4 = 1{,}080$, so \\$1,080. \\$1,200 forgets to remove the closet, \\$1,320 adds the closet instead of removing it, and \\$280 prices the perimeter (70 ft).'
          },
          {
            question: 'A unit needs 500 sandbags. Sandbags come in bundles of 40, and each bundle costs \\$12. What is the least the unit can spend and still get 500 sandbags?',
            options: ['\\$156', '\\$144', '\\$6,000', '\\$150'],
            correctAnswer: 0,
            explanation: '$500 \\div 40 = 12$ remainder 20, because $40 \\times 12 = 480$. Twelve bundles are 20 sandbags short, so buy 13. Cost: $13 \\times 12 = 156$, so \\$156. \\$144 buys only 12 bundles, \\$150 pays for 12 and a half bundles (stores sell whole bundles), and \\$6,000 prices each sandbag at \\$12.'
          },
          {
            question: 'Chris bought 4 tires, all at the same price, and paid a \\$60 installation fee. He spent \\$540 in all. What was the price of one tire?',
            options: ['\\$135', '\\$150', '\\$120', '\\$480'],
            correctAnswer: 2,
            explanation: 'Work backwards: take off the fee, $540 - 60 = 480$, then split among 4 tires: $480 \\div 4 = 120$, so \\$120. Check: $4 \\times 120 + 60 = 540$. \\$135 divides \\$540 by 4 and forgets the fee, \\$150 adds the fee instead of subtracting it, and \\$480 is the cost of all 4 tires, one step early.'
          }
        ]
      }
    },
    {
      id: 'arwn7-input',
      type: 'input-boxes' as const,
      content: `**One more, with two answers.** ✍️

A food bank packs 1,000 cans into boxes that each hold 24 cans. Only full boxes are shipped.

**1)** How many full boxes are shipped? (number only, in boxes)

**2)** How many cans are left over? (number only, in cans)`,
      exercise: {
        boxes: 2,
        correctAnswers: ['41', '16'],
        hint1: 'Estimate: $24 \\times 40 = 960$. How many more cans are there after 40 boxes?',
        hint2: '$24 \\times 41 = 984$.',
        hint3: 'Subtract the cans in full boxes from 1,000.',
        explanation: '$1{,}000 \\div 24 = 41$ remainder 16, because $24 \\times 41 = 984$ and $1{,}000 - 984 = 16$. "Full boxes" means round down: 41 boxes, with 16 cans left over. Check: $41 \\times 24 + 16 = 1{,}000$.'
      }
    },
    {
      id: 'arwn7-summary',
      type: 'text' as const,
      content: `### Topic Summary — Word Problems with Whole Numbers

| Skill | The move |
|:---|:---|
| Choosing the operation | Combine, compare, repeat or split: the **action** decides, not one key word |
| "What number" problems | **Undo** the operation, then check that the start makes sense |
| Multi-step problems | **Label** each intermediate result; answer the last sentence, not a subtotal |
| Order of operations | Parentheses, exponents, multiply/divide, add/subtract, **left to right** |
| Measurement | Convert units; **1 sq yd = 9 sq ft**; count up across noon; split L-shapes |
| Remainders | Needed to hold all: **round up**; complete groups: **round down**; left over: **remainder** |
| Every problem | **Estimate**, then check the answer against the story |

### What to do next

1. **Take the exit quiz** for this topic. If you score 80% or better, the topic is done.
2. **Review the flashcards** for this topic. They focus on the conversions, the remainder rules and the order of operations.
3. **Move on to the next AR topic.** Fractions, percents, ratios and averages all use the same habits you practiced here: last sentence first, a number sentence, units, an estimate and a check.`
    }
  ]
};
