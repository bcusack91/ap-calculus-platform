import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to AP Statistics - Batch 3: Complete Probability (5/7) + CI Start (1/5)...\n');

  // Find topics
  const independence = await prisma.topic.findFirst({
    where: { slug: 'independence-stats' }
  });

  const discreteRV = await prisma.topic.findFirst({
    where: { slug: 'discrete-random-variables' }
  });

  const binomial = await prisma.topic.findFirst({
    where: { slug: 'binomial-distribution-stats' }
  });

  const geometric = await prisma.topic.findFirst({
    where: { slug: 'geometric-distribution' }
  });

  const continuousRV = await prisma.topic.findFirst({
    where: { slug: 'continuous-random-variables' }
  });

  const samplingDist = await prisma.topic.findFirst({
    where: { slug: 'sampling-distributions' }
  });

  if (!independence || !discreteRV || !binomial || !geometric || !continuousRV || !samplingDist) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Independence (Statistics)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: independence.id,
        question: 'Roll a fair die twice. Are the two rolls independent? Explain.',
        solution: `Step 1: Define independence
Two events A and B are independent if:
P(A|B) = P(A), or equivalently P(A and B) = P(A) × P(B)

The outcome of one event doesn't affect the probability of the other.

Step 2: Analyze the die rolls
First roll: Any outcome from {1, 2, 3, 4, 5, 6}
Second roll: Any outcome from {1, 2, 3, 4, 5, 6}

Does the first roll affect the second roll?
- NO! The die has no memory
- Second roll probabilities don't change based on first roll

Step 3: Test with specific example
Let A = "first roll is 6"
Let B = "second roll is 6"

P(A) = 1/6
P(B) = 1/6
P(A and B) = P(both rolls are 6) = 1/6 × 1/6 = 1/36

Check: P(A) × P(B) = 1/6 × 1/6 = 1/36 ✓
P(A and B) = P(A) × P(B), so independent!

Step 4: Check conditional probability
P(B|A) = P(second roll is 6 | first roll is 6) = 1/6
P(B) = 1/6

P(B|A) = P(B) ✓

Knowing the first roll doesn't change the probability of the second roll.

Answer: YES, the two rolls are independent. The outcome of the first roll doesn't affect the probability distribution of the second roll. Each roll is a separate, random event with its own probabilities that don't depend on previous rolls.`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: independence.id,
        question: 'Draw two cards from a standard deck WITHOUT replacement. Are the draws independent?',
        solution: `Step 1: Recall independence definition
Events are independent if P(A|B) = P(A)
Or equivalently: P(A and B) = P(A) × P(B)

Step 2: Set up specific example
Let A = "first card is a heart"
Let B = "second card is a heart"

Step 3: Calculate P(A)
P(A) = 13/52 = 1/4

Step 4: Calculate P(B|A)
Given first card is a heart (and removed):
- Remaining: 12 hearts out of 51 cards
P(B|A) = 12/51

Step 5: Compare P(B|A) with P(B)
P(B) without any information = 13/52 = 1/4

But P(B|A) = 12/51 ≈ 0.235

Is 12/51 = 13/52?
12/51 = 12/51
13/52 = 13/52

Cross multiply: 12 × 52 = 624
                13 × 51 = 663

624 ≠ 663, so P(B|A) ≠ P(B)

Step 6: Conclusion
Since P(B|A) ≠ P(B), the events are NOT independent.

The first draw affects the second draw because:
- If first card is a heart, fewer hearts remain (12/51)
- If first card is not a heart, more hearts remain (13/51)

Step 7: What if we replaced the card?
WITH replacement:
P(B|A) = 13/52 = P(B)
Then the draws WOULD be independent!

Answer: NO, the draws are NOT independent when sampling without replacement. The outcome of the first draw changes the composition of the deck, which affects the probabilities for the second draw. Without replacement creates dependence between draws.`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: independence.id,
        question: 'In a school, 40% of students are seniors (S) and 30% take AP Statistics (AP). Also, 15% are seniors taking AP Statistics. Are being a senior and taking AP Statistics independent?',
        solution: `Step 1: Identify given information
P(S) = 0.40 (seniors)
P(AP) = 0.30 (take AP Stats)
P(S and AP) = 0.15 (seniors taking AP Stats)

Step 2: Test independence condition
For independence: P(S and AP) should equal P(S) × P(AP)

Calculate P(S) × P(AP):
P(S) × P(AP) = 0.40 × 0.30 = 0.12

Step 3: Compare
P(S and AP) = 0.15 (given)
P(S) × P(AP) = 0.12 (calculated)

0.15 ≠ 0.12

Therefore, NOT independent!

Step 4: Verify using conditional probability
If independent, P(AP|S) should equal P(AP)

P(AP|S) = P(AP and S) / P(S)
        = 0.15 / 0.40
        = 0.375

P(AP) = 0.30

P(AP|S) = 0.375 ≠ 0.30 = P(AP)

Not independent! ✓

Step 5: Interpret
P(AP|S) = 0.375 = 37.5% (seniors taking AP Stats)
P(AP) = 0.30 = 30% (all students taking AP Stats)

Seniors are MORE likely to take AP Statistics (37.5% vs 30%)
Being a senior and taking AP Stats are positively associated

Step 6: Create table to visualize
                Take AP    Don't Take AP   Total
Seniors          0.15         0.25         0.40
Non-seniors      0.15         0.45         0.60
Total            0.30         0.70         1.00

If independent, senior/AP cell would be: 0.40 × 0.30 = 0.12
But actual value is 0.15 (more than expected)

Answer: NO, being a senior and taking AP Statistics are NOT independent. P(S and AP) = 0.15 ≠ P(S) × P(AP) = 0.12. Seniors are more likely to take AP Statistics (37.5%) than the overall student body (30%), showing positive association between the two events.`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: independence.id,
        question: 'Events A and B are independent with P(A) = 0.6 and P(B) = 0.4. Find:\na) P(A and B)\nb) P(A or B)\nc) P(A|B)',
        solution: `Step 1: Use independence to find P(A and B)
For independent events:
P(A and B) = P(A) × P(B)
           = 0.6 × 0.4
           = 0.24

Step 2: Find P(A or B) using addition rule
P(A or B) = P(A) + P(B) - P(A and B)
          = 0.6 + 0.4 - 0.24
          = 1.00 - 0.24
          = 0.76

Step 3: Find P(A|B)
For independent events:
P(A|B) = P(A)
       = 0.6

Or using formula:
P(A|B) = P(A and B) / P(B)
       = 0.24 / 0.4
       = 0.6 ✓

Step 4: Verify the independence
We can check that P(B|A) = P(B):

P(B|A) = P(A and B) / P(A)
       = 0.24 / 0.6
       = 0.4 = P(B) ✓

Independence confirmed!

Step 5: Create Venn diagram for visualization
        A (60%)        B (40%)
         ___          ___
        /   \\____  ____/   \\
       |        \\  /       |
       | 0.36   |0.24| 0.16 |
       |        /  \\       |
        \\___/        \\___/
        
    Neither: 0.24

Check: 0.36 + 0.24 + 0.16 + 0.24 = 1.00 ✓

Only A: 0.6 - 0.24 = 0.36
Both: 0.24
Only B: 0.4 - 0.24 = 0.16
Neither: 1 - 0.76 = 0.24

Answer:
a) P(A and B) = 0.24
b) P(A or B) = 0.76
c) P(A|B) = 0.6

Key insight: For independent events, knowing B occurred doesn't change the probability of A. P(A|B) = P(A) = 0.6.`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: independence.id,
        question: 'A factory has two machines. Machine 1 produces defective items 2% of the time. Machine 2 produces defective items 3% of the time. If the machines operate independently and you randomly select one item from each machine, what is the probability that:\na) Both are defective?\nb) At least one is defective?\nc) Exactly one is defective?',
        solution: `Step 1: Define events
D1 = item from Machine 1 is defective, P(D1) = 0.02
D2 = item from Machine 2 is defective, P(D2) = 0.03

Given: Machines operate independently

Step 2: Find P(both defective)
Since independent:
P(D1 and D2) = P(D1) × P(D2)
             = 0.02 × 0.03
             = 0.0006

Step 3: Find P(at least one defective)
Method 1 - Use complement:
P(at least one defective) = 1 - P(neither defective)

P(neither defective) = P(not D1 and not D2)
                     = P(not D1) × P(not D2)  [independence]
                     = (1 - 0.02) × (1 - 0.03)
                     = 0.98 × 0.97
                     = 0.9506

P(at least one defective) = 1 - 0.9506 = 0.0494

Method 2 - List all cases:
P(at least one) = P(D1 only) + P(D2 only) + P(both)
                = (0.02 × 0.97) + (0.98 × 0.03) + (0.02 × 0.03)
                = 0.0194 + 0.0294 + 0.0006
                = 0.0494 ✓

Step 4: Find P(exactly one defective)
P(exactly one) = P(D1 only) + P(D2 only)
               = P(D1 and not D2) + P(not D1 and D2)
               = [P(D1) × P(not D2)] + [P(not D1) × P(D2)]
               = (0.02 × 0.97) + (0.98 × 0.03)
               = 0.0194 + 0.0294
               = 0.0488

Step 5: Create probability tree
                     Machine 1          Machine 2       Probability
                         |
         Defect (0.02)---|--- Defect (0.03)    0.02 × 0.03 = 0.0006
                         |
                         |--- Not Defect (0.97) 0.02 × 0.97 = 0.0194
                         |
      Not Defect (0.98)--|--- Defect (0.03)    0.98 × 0.03 = 0.0294
                         |
                         |--- Not Defect (0.97) 0.98 × 0.97 = 0.9506

Sum: 0.0006 + 0.0194 + 0.0294 + 0.9506 = 1.0000 ✓

Step 6: Verify all answers sum correctly
P(both defective) + P(exactly one) + P(neither) = 1
0.0006 + 0.0488 + 0.9506 = 1.0000 ✓

Answer:
a) P(both defective) = 0.0006 or 0.06%
b) P(at least one defective) = 0.0494 or 4.94%
c) P(exactly one defective) = 0.0488 or 4.88%

Key insight: Independence allows us to multiply probabilities. The multiplication rule for independent events is essential for solving problems with multiple independent trials.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: independence.id,
        front: 'What does it mean for two events to be independent?',
        back: 'Event A and B are independent if the occurrence of one doesn\'t affect the probability of the other. Formally: P(A|B) = P(A) or equivalently P(A and B) = P(A) × P(B).',
        hint: 'One doesn\'t affect the other',
        isPremium: false
      },
      {
        topicId: independence.id,
        front: 'What is the multiplication rule for independent events?',
        back: 'If A and B are independent: P(A and B) = P(A) × P(B). Just multiply! Works only when events are independent. Extension: P(A and B and C) = P(A) × P(B) × P(C) if all independent.',
        hint: 'Just multiply probabilities',
        isPremium: false
      },
      {
        topicId: independence.id,
        front: 'How do you check if two events are independent?',
        back: 'Check if P(A and B) = P(A) × P(B). Or check if P(A|B) = P(A). If either is true, events are independent. If not equal, events are dependent.',
        hint: 'P(A and B) = P(A) × P(B)?',
        isPremium: false
      },
      {
        topicId: independence.id,
        front: 'Are mutually exclusive events independent?',
        back: 'NO! Mutually exclusive means P(A and B) = 0. But if independent, P(A and B) = P(A) × P(B) > 0. Mutually exclusive events are actually very dependent - if one happens, the other can\'t!',
        hint: 'NO - they\'re actually very dependent',
        isPremium: false
      },
      {
        topicId: independence.id,
        front: 'Does sampling with or without replacement affect independence?',
        back: 'WITH replacement: draws are independent (probabilities don\'t change). WITHOUT replacement: draws are dependent (probabilities change after each draw). Replacement is key to independence in sequential sampling.',
        hint: 'With = independent, Without = dependent',
        isPremium: false
      },
      {
        topicId: independence.id,
        front: 'If events A and B are independent, is P(A|B) = P(B|A)?',
        back: 'Not necessarily! If independent: P(A|B) = P(A) and P(B|A) = P(B). These are only equal if P(A) = P(B). Independence doesn\'t mean the conditional probabilities equal each other.',
        hint: 'Only if P(A) = P(B)',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: independence-stats (now has 5 problems, 6 flashcards)');

  // TOPIC 2: Discrete Random Variables
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: discreteRV.id,
        question: 'Let X be the number of heads when flipping a fair coin 3 times. Create the probability distribution table for X and verify it is a valid probability distribution.',
        solution: `Step 1: List all possible outcomes
Sample space for 3 flips:
HHH, HHT, HTH, HTT, THH, THT, TTH, TTT
Total: 8 outcomes

Step 2: Count heads in each outcome
HHH → 3 heads
HHT → 2 heads
HTH → 2 heads
HTT → 1 head
THH → 2 heads
THT → 1 head
TTH → 1 head
TTT → 0 heads

Step 3: Create frequency distribution
X = 0: 1 outcome (TTT)
X = 1: 3 outcomes (HTT, THT, TTH)
X = 2: 3 outcomes (HHT, HTH, THH)
X = 3: 1 outcome (HHH)

Step 4: Calculate probabilities
P(X = 0) = 1/8 = 0.125
P(X = 1) = 3/8 = 0.375
P(X = 2) = 3/8 = 0.375
P(X = 3) = 1/8 = 0.125

Step 5: Create probability distribution table
┌───────┬─────────┐
│   X   │  P(X)   │
├───────┼─────────┤
│   0   │  0.125  │
│   1   │  0.375  │
│   2   │  0.375  │
│   3   │  0.125  │
└───────┴─────────┘

Step 6: Verify conditions for valid distribution
Condition 1: All probabilities between 0 and 1?
0.125, 0.375, 0.375, 0.125 are all in [0,1] ✓

Condition 2: Sum of probabilities = 1?
0.125 + 0.375 + 0.375 + 0.125 = 1.000 ✓

This IS a valid probability distribution!

Answer: 
Probability Distribution:
X:    0     1     2     3
P(X): 1/8   3/8   3/8   1/8

This is valid because all probabilities are between 0 and 1, and they sum to 1.`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: discreteRV.id,
        question: 'Given the probability distribution:\nX: 1, 2, 3, 4\nP(X): 0.1, 0.3, 0.4, 0.2\n\nFind the expected value E(X) and interpret it.',
        solution: `Step 1: Recall expected value formula
E(X) = μ = Σ[x · P(x)]
Sum of each value times its probability

Step 2: Calculate E(X)
E(X) = (1)(0.1) + (2)(0.3) + (3)(0.4) + (4)(0.2)
     = 0.1 + 0.6 + 1.2 + 0.8
     = 2.7

Step 3: Interpret the expected value
E(X) = 2.7 is the long-run average value

This means:
- If we repeat this random process many times
- The average value of X will approach 2.7
- It's the "center" of the distribution

Step 4: Important notes
- E(X) = 2.7 is NOT a possible value of X
- X can only be 1, 2, 3, or 4
- But the average over many trials is 2.7
- It's like saying "average family has 2.3 children"

Step 5: Verify calculation
Check probabilities sum to 1:
0.1 + 0.3 + 0.4 + 0.2 = 1.0 ✓

Check E(X) is within range:
min(X) = 1, max(X) = 4
1 ≤ 2.7 ≤ 4 ✓

Step 6: Visual interpretation
The expected value is the "balance point"

P(X):
0.4│     █
0.3│   █ █
0.2│   █ █ █
0.1│ █ █ █ █
   └─────────
     1 2 3 4

Balance point at 2.7 (closer to 3 due to higher probability there)

Answer: E(X) = 2.7

This means if we repeatedly observe this random variable, the long-run average value will be 2.7. It's the weighted average of all possible values, weighted by their probabilities.`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: discreteRV.id,
        question: 'A game costs $5 to play. You roll a die: if you roll a 6, you win $20; if you roll a 4 or 5, you win $10; otherwise you win nothing. What is the expected value of your net winnings? Should you play this game?',
        solution: `Step 1: Define the random variable
Let X = net winnings (winnings minus cost)

Step 2: Identify all outcomes and net winnings
Roll 6: Win $20, paid $5 → Net = $20 - $5 = $15
Roll 4 or 5: Win $10, paid $5 → Net = $10 - $5 = $5
Roll 1, 2, or 3: Win $0, paid $5 → Net = $0 - $5 = -$5

Step 3: Find probabilities
P(X = 15) = P(roll 6) = 1/6
P(X = 5) = P(roll 4 or 5) = 2/6 = 1/3
P(X = -5) = P(roll 1, 2, or 3) = 3/6 = 1/2

Step 4: Verify probability distribution
1/6 + 1/3 + 1/2 = 1/6 + 2/6 + 3/6 = 6/6 = 1 ✓

Step 5: Calculate expected value
E(X) = (15)(1/6) + (5)(1/3) + (-5)(1/2)
     = 15/6 + 5/3 - 5/2
     = 15/6 + 10/6 - 15/6
     = 10/6
     = 5/3
     ≈ $1.67

Step 6: Interpret the expected value
E(X) = $1.67 per game

This means:
- On average, you GAIN $1.67 per game
- In the long run, you expect to profit
- The game is in your favor!

Step 7: Should you play?
YES! Expected value is POSITIVE ($1.67)
- You expect to win money on average
- This is a favorable game

However, consider:
- Short-term: You could still lose (50% chance of losing $5)
- Need many plays for average to materialize
- Variance matters too (not just expected value)

Step 8: Calculate long-run expectation
If you play 100 times:
Expected total net winnings = 100 × $1.67 = $167

Answer: E(X) = $1.67 per game

You SHOULD play this game because the expected value is positive. On average, you expect to win $1.67 per game. However, individual games have high variance - you could win $15, win $5, or lose $5 on any single play.`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: discreteRV.id,
        question: 'Given probability distribution with E(X) = 4 and Var(X) = 3. Find:\na) E(2X + 5)\nb) Var(2X + 5)\nc) SD(2X + 5)',
        solution: `Step 1: Recall transformation rules for expected value
E(aX + b) = a·E(X) + b

Where:
- a is multiplied through
- b is added at the end

Step 2: Calculate E(2X + 5)
E(2X + 5) = 2·E(X) + 5
          = 2(4) + 5
          = 8 + 5
          = 13

Step 3: Recall transformation rules for variance
Var(aX + b) = a²·Var(X)

Important:
- Multiply by a² (not just a)
- Adding constant b doesn't affect variance!
- Variance measures spread - shifting doesn't change spread

Step 4: Calculate Var(2X + 5)
Var(2X + 5) = 2²·Var(X)
            = 4·Var(X)
            = 4(3)
            = 12

Step 5: Calculate SD(2X + 5)
SD(2X + 5) = √Var(2X + 5)
           = √12
           = 2√3
           ≈ 3.46

Alternative:
SD(aX + b) = |a|·SD(X)
SD(2X + 5) = 2·SD(X)
           = 2·√3
           = 2√3 ✓

Step 6: Summary of transformation rules
For Y = aX + b:

E(Y) = a·E(X) + b
Var(Y) = a²·Var(X)
SD(Y) = |a|·SD(X)

Key insights:
- Adding constant: shifts mean, doesn't affect variance
- Multiplying: scales mean by a, scales variance by a²
- Standard deviation scales by |a|

Step 7: Verify with original values
E(X) = 4, Var(X) = 3, SD(X) = √3

Transform by 2X + 5:
- Mean shifts from 4 to 13 (doubled then added 5)
- Variance scales from 3 to 12 (multiplied by 2² = 4)
- SD scales from √3 to 2√3 (multiplied by 2)

Answer:
a) E(2X + 5) = 13
b) Var(2X + 5) = 12
c) SD(2X + 5) = 2√3 ≈ 3.46

Key insight: Adding a constant affects the mean but not the variance or SD. Multiplying by a constant affects both, but variance is multiplied by a² while SD is multiplied by |a|.`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: discreteRV.id,
        question: 'You and a friend independently roll a fair die. Let X be the result of your roll and Y be the result of your friend\'s roll. Find E(X + Y), Var(X + Y), and E(XY). Are the answers different than for a single die?',
        solution: `Step 1: Find E(X) and E(Y) for single die
For fair die: X can be 1, 2, 3, 4, 5, 6
Each with probability 1/6

E(X) = (1 + 2 + 3 + 4 + 5 + 6)/6
     = 21/6
     = 3.5

Since Y is also a die roll: E(Y) = 3.5

Step 2: Find E(X + Y)
For independent random variables:
E(X + Y) = E(X) + E(Y)

E(X + Y) = 3.5 + 3.5 = 7

This is the expected sum of two dice!

Step 3: Find Var(X)
First calculate E(X²):
E(X²) = (1² + 2² + 3² + 4² + 5² + 6²)/6
      = (1 + 4 + 9 + 16 + 25 + 36)/6
      = 91/6

Var(X) = E(X²) - [E(X)]²
       = 91/6 - (3.5)²
       = 91/6 - 12.25
       = 91/6 - 49/4
       = 182/12 - 147/12
       = 35/12
       ≈ 2.917

Step 4: Find Var(X + Y)
For INDEPENDENT random variables:
Var(X + Y) = Var(X) + Var(Y)

Since X and Y are independent and identical:
Var(Y) = 35/12

Var(X + Y) = 35/12 + 35/12
           = 70/12
           = 35/6
           ≈ 5.833

Note: If NOT independent, would need Cov(X,Y) term

Step 5: Find E(XY)
For INDEPENDENT random variables:
E(XY) = E(X) · E(Y)

E(XY) = 3.5 × 3.5
      = 12.25

Step 6: Compare to single die
Single die:
- E(X) = 3.5
- Var(X) = 35/12 ≈ 2.917

Sum of two dice:
- E(X + Y) = 7 (double the mean!)
- Var(X + Y) = 35/6 ≈ 5.833 (double the variance!)
- SD(X + Y) = √(35/6) ≈ 2.415 (NOT double!)

Product of two dice:
- E(XY) = 12.25

Step 7: Key formulas used
For independent X and Y:
✓ E(X + Y) = E(X) + E(Y)
✓ Var(X + Y) = Var(X) + Var(Y)
✓ E(XY) = E(X) · E(Y)

Answer:
E(X + Y) = 7 (expected sum is 7)
Var(X + Y) = 35/6 ≈ 5.833
E(XY) = 12.25 (expected product is 12.25)

Yes, these are different! The sum has double the expected value and double the variance of a single die. The product's expected value is the product of the individual expected values (because independent).`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: discreteRV.id,
        front: 'What is a discrete random variable?',
        back: 'A variable that takes on countable values (often whole numbers) with specific probabilities. Examples: number of heads in coin flips, number of students in a class, number of cars passing by.',
        hint: 'Countable values with probabilities',
        isPremium: false
      },
      {
        topicId: discreteRV.id,
        front: 'What are the requirements for a valid discrete probability distribution?',
        back: '1) All probabilities between 0 and 1: 0 ≤ P(X) ≤ 1. 2) Sum of all probabilities equals 1: ΣP(X) = 1. Must satisfy both conditions.',
        hint: 'Between 0 and 1, sum to 1',
        isPremium: false
      },
      {
        topicId: discreteRV.id,
        front: 'What is the expected value formula for discrete random variables?',
        back: 'E(X) = μ = Σ[x · P(x)]. Sum of (each value × its probability). This is the long-run average or mean. Also called the expectation.',
        hint: 'Σ[x · P(x)]',
        isPremium: false
      },
      {
        topicId: discreteRV.id,
        front: 'What is the variance formula for discrete random variables?',
        back: 'Var(X) = σ² = Σ[(x - μ)² · P(x)] or Var(X) = E(X²) - [E(X)]². Second formula usually easier. Measures spread of distribution.',
        hint: 'E(X²) - [E(X)]²',
        isPremium: false
      },
      {
        topicId: discreteRV.id,
        front: 'How do linear transformations affect expected value and variance?',
        back: 'For Y = aX + b: E(Y) = aE(X) + b, Var(Y) = a²Var(X), SD(Y) = |a|SD(X). Adding constant shifts mean only. Multiplying scales variance by a².',
        hint: 'E: multiply and add; Var: multiply by a²',
        isPremium: false
      },
      {
        topicId: discreteRV.id,
        front: 'For independent random variables X and Y, what are E(X+Y), Var(X+Y), and E(XY)?',
        back: 'E(X + Y) = E(X) + E(Y) (always). Var(X + Y) = Var(X) + Var(Y) (only if independent!). E(XY) = E(X)·E(Y) (only if independent!).',
        hint: 'Expectations add; Variances add if independent',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: discrete-random-variables (now has 5 problems, 6 flashcards)');

  // TOPIC 3: Binomial Distribution
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: binomial.id,
        question: 'Does flipping a coin 10 times and counting heads follow a binomial distribution? Verify all four conditions.',
        solution: `Step 1: List the four binomial conditions (BINS)
B - Binary: Only two outcomes (success/failure)
I - Independent: Trials are independent
N - Number: Fixed number of trials
S - Same probability: Probability of success stays constant

Step 2: Check Binary condition
Each flip: Either Heads (success) or Tails (failure)
Only TWO possible outcomes per trial ✓

Step 3: Check Independent condition
Each coin flip is independent
- Coin has no memory
- Result of one flip doesn't affect others
- P(H on flip 5 | H on flip 1) = P(H on flip 5) ✓

Step 4: Check Number (fixed) condition
We flip exactly 10 times
- Not random number of flips
- Fixed at n = 10 ✓

Step 5: Check Same probability condition
P(Heads) = 0.5 on every flip
- Fair coin
- Probability doesn't change from trial to trial
- p = 0.5 for all flips ✓

Step 6: Conclusion
ALL FOUR CONDITIONS are met!

This IS a binomial distribution:
X ~ Binomial(n = 10, p = 0.5)

Where X = number of heads in 10 flips

Step 7: What would the distribution look like?
X can be: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, or 10
Mean: E(X) = np = 10(0.5) = 5
SD: SD(X) = √[np(1-p)] = √[10(0.5)(0.5)] = √2.5 ≈ 1.58

Answer: YES, this follows a binomial distribution with n = 10 and p = 0.5. All four BINS conditions are satisfied: Binary outcomes (H or T), Independent trials, fixed Number of trials (10), Same probability of success (p = 0.5) on each trial.`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: binomial.id,
        question: 'If 70% of adults own a smartphone, and you randomly select 5 adults, what is the probability that exactly 3 own a smartphone?',
        solution: `Step 1: Verify binomial conditions
- Binary: Own or don't own (success/failure) ✓
- Independent: Random selection, assume independent ✓
- Number: Fixed at n = 5 ✓
- Same probability: p = 0.7 for each ✓

This is binomial!

Step 2: Identify parameters
n = 5 (number of trials)
p = 0.7 (probability of success)
x = 3 (number of successes we want)

Find: P(X = 3)

Step 3: Use binomial probability formula
P(X = x) = C(n,x) · p^x · (1-p)^(n-x)

Where C(n,x) = n!/(x!(n-x)!)

Step 4: Calculate C(5,3)
C(5,3) = 5!/(3!·2!)
       = (5·4·3!)/(3!·2·1)
       = (5·4)/(2·1)
       = 20/2
       = 10

Step 5: Calculate P(X = 3)
P(X = 3) = C(5,3) · (0.7)³ · (0.3)²
         = 10 · (0.7)³ · (0.3)²
         = 10 · 0.343 · 0.09
         = 10 · 0.03087
         = 0.3087

Step 6: Interpret
P(X = 3) ≈ 0.309 or 30.9%

This means:
- About 31% chance exactly 3 out of 5 own smartphone
- Most likely outcome (can verify by checking others)

Step 7: Why the formula works
C(5,3) = 10: Number of ways to choose which 3 own it
(0.7)³: Probability those 3 own it
(0.3)²: Probability the other 2 don't own it

Example sequence: SSSFF (success, success, success, failure, failure)
P(SSSFF) = 0.7 · 0.7 · 0.7 · 0.3 · 0.3 = (0.7)³(0.3)²

But there are 10 different sequences with 3 S's and 2 F's!

Answer: P(X = 3) = 0.3087 or about 30.9%

The probability that exactly 3 out of 5 randomly selected adults own a smartphone is approximately 0.309.`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: binomial.id,
        question: 'A multiple choice quiz has 10 questions, each with 4 choices. If you guess randomly on all questions, what is the probability you pass (get at least 6 correct)?',
        solution: `Step 1: Set up as binomial
n = 10 questions
p = 1/4 = 0.25 (probability of guessing correctly)
X = number correct

Find: P(X ≥ 6) = P(X = 6) + P(X = 7) + P(X = 8) + P(X = 9) + P(X = 10)

Step 2: Calculate P(X = 6)
P(X = 6) = C(10,6) · (0.25)⁶ · (0.75)⁴

C(10,6) = 10!/(6!·4!) = 210

P(X = 6) = 210 · (0.25)⁶ · (0.75)⁴
         = 210 · 0.000244 · 0.316
         = 0.0162

Step 3: Calculate P(X = 7)
P(X = 7) = C(10,7) · (0.25)⁷ · (0.75)³

C(10,7) = 120

P(X = 7) = 120 · (0.25)⁷ · (0.75)³
         = 120 · 0.000061 · 0.422
         = 0.0031

Step 4: Calculate P(X = 8)
P(X = 8) = C(10,8) · (0.25)⁸ · (0.75)²

C(10,8) = 45

P(X = 8) = 45 · (0.25)⁸ · (0.75)²
         = 45 · 0.000015 · 0.5625
         = 0.00038

Step 5: Calculate P(X = 9)
P(X = 9) = C(10,9) · (0.25)⁹ · (0.75)¹

C(10,9) = 10

P(X = 9) = 10 · (0.25)⁹ · 0.75
         = 10 · 0.0000038 · 0.75
         = 0.000029

Step 6: Calculate P(X = 10)
P(X = 10) = C(10,10) · (0.25)¹⁰ · (0.75)⁰

C(10,10) = 1

P(X = 10) = 1 · (0.25)¹⁰ · 1
          = 0.00000095

Step 7: Sum all probabilities
P(X ≥ 6) = 0.0162 + 0.0031 + 0.00038 + 0.000029 + 0.00000095
         ≈ 0.0197

Step 8: Interpret
P(pass by guessing) ≈ 0.020 = 2.0%

Very unlikely! Only about 2% chance of passing by pure guessing.

Step 9: Compare to expected value
E(X) = np = 10(0.25) = 2.5
Expect to get about 2.5 questions right by guessing
Passing requires 6+ correct - well above average!

Answer: P(X ≥ 6) ≈ 0.020 or 2.0%

There's only about a 2% chance of passing by randomly guessing. The expected number correct is only 2.5, far below the 6 needed to pass.`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: binomial.id,
        question: 'For a binomial random variable with n = 20 and p = 0.4, find the mean, variance, and standard deviation.',
        solution: `Step 1: Identify given information
X ~ Binomial(n = 20, p = 0.4)

n = 20 trials
p = 0.4 probability of success
q = 1 - p = 0.6 probability of failure

Step 2: Calculate mean (expected value)
Formula: μ = E(X) = np

μ = 20 × 0.4
  = 8

Step 3: Calculate variance
Formula: σ² = Var(X) = np(1-p) = npq

σ² = 20 × 0.4 × 0.6
   = 20 × 0.24
   = 4.8

Step 4: Calculate standard deviation
Formula: σ = SD(X) = √[np(1-p)] = √(npq)

σ = √4.8
  = √(24/5)
  = (2√30)/5
  ≈ 2.19

Step 5: Interpret the results
Mean = 8:
- On average, expect 8 successes out of 20 trials
- Makes sense: 40% of 20 = 8

Variance = 4.8:
- Measures spread of distribution
- Typical squared distance from mean

Standard Deviation ≈ 2.19:
- Typical distance from mean is about 2.19
- Most values fall within μ ± 2σ = 8 ± 4.38
- So typically between 3.62 and 12.38 successes

Step 6: Why these formulas?
The binomial is sum of n independent Bernoulli trials:
X = X₁ + X₂ + ... + X₂₀

Each Xᵢ has:
- E(Xᵢ) = p
- Var(Xᵢ) = p(1-p)

By properties of sums:
- E(X) = E(X₁) + ... + E(X₂₀) = np
- Var(X) = Var(X₁) + ... + Var(X₂₀) = np(1-p)

Step 7: Verify reasonableness
If p = 0.5 (coin flip):
- Mean would be 10 (half of 20) ✓
- Maximum variance when p = 0.5

Our p = 0.4 is close to 0.5:
- Mean = 8 (slightly less than 10) ✓
- Variance = 4.8 (slightly less than maximum) ✓

Answer:
Mean: μ = 8
Variance: σ² = 4.8
Standard Deviation: σ ≈ 2.19

On average, we expect 8 successes out of 20 trials, with a typical deviation of about 2.19 from this mean.`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: binomial.id,
        question: 'A basketball player makes 75% of free throws. In a game, she attempts 12 free throws. What is the probability she makes at least 10? Also find the probability she makes exactly the expected number.',
        solution: `Step 1: Set up binomial distribution
X ~ Binomial(n = 12, p = 0.75)
X = number of successful free throws

Step 2: Find P(X ≥ 10)
P(X ≥ 10) = P(X = 10) + P(X = 11) + P(X = 12)

Step 3: Calculate P(X = 10)
P(X = 10) = C(12,10) · (0.75)¹⁰ · (0.25)²

C(12,10) = 12!/(10!·2!) = (12·11)/2 = 66

P(X = 10) = 66 · (0.75)¹⁰ · (0.25)²
          = 66 · 0.0563 · 0.0625
          = 0.2323

Step 4: Calculate P(X = 11)
P(X = 11) = C(12,11) · (0.75)¹¹ · (0.25)¹

C(12,11) = 12

P(X = 11) = 12 · (0.75)¹¹ · 0.25
          = 12 · 0.0422 · 0.25
          = 0.1267

Step 5: Calculate P(X = 12)
P(X = 12) = C(12,12) · (0.75)¹² · (0.25)⁰

C(12,12) = 1

P(X = 12) = 1 · (0.75)¹² · 1
          = 0.0317

Step 6: Sum for P(X ≥ 10)
P(X ≥ 10) = 0.2323 + 0.1267 + 0.0317
          = 0.3907

Step 7: Find expected value
E(X) = np = 12 × 0.75 = 9

The expected number of makes is 9.

Step 8: Find P(X = 9)
P(X = 9) = C(12,9) · (0.75)⁹ · (0.25)³

C(12,9) = 12!/(9!·3!) = (12·11·10)/(3·2·1) = 220

P(X = 9) = 220 · (0.75)⁹ · (0.25)³
         = 220 · 0.0751 · 0.0156
         = 0.2581

Step 9: Interpret results
P(X ≥ 10) ≈ 0.391 or 39.1%
- About 39% chance of making at least 10 out of 12
- Fairly likely for a 75% shooter

P(X = 9) ≈ 0.258 or 25.8%
- Most likely single outcome!
- But still only 26% chance of getting EXACTLY the expected value
- Other values around 9 are also likely

Step 10: Visualize distribution
The distribution is skewed left (p > 0.5)
Peak near x = 9
Spread: most values between 6 and 12

Answer:
P(X ≥ 10) ≈ 0.391 or 39.1%
E(X) = 9
P(X = 9) ≈ 0.258 or 25.8%

There's about a 39% chance she makes at least 10 free throws. While the expected number is 9, the probability of making exactly 9 is only about 26% - the distribution has considerable spread around the mean.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: binomial.id,
        front: 'What are the four conditions for a binomial distribution (BINS)?',
        back: 'B - Binary (two outcomes: success/failure). I - Independent trials. N - Number of trials is fixed. S - Same probability of success on each trial. All four must be met!',
        hint: 'BINS: Binary, Independent, Number, Same',
        isPremium: false
      },
      {
        topicId: binomial.id,
        front: 'What is the binomial probability formula?',
        back: 'P(X = k) = C(n,k) × p^k × (1-p)^(n-k), where C(n,k) = n!/(k!(n-k)!). Gives probability of exactly k successes in n trials with success probability p.',
        hint: 'C(n,k) × p^k × (1-p)^(n-k)',
        isPremium: false
      },
      {
        topicId: binomial.id,
        front: 'What are the mean and standard deviation formulas for binomial distribution?',
        back: 'Mean: μ = np. Variance: σ² = np(1-p). Standard Deviation: σ = √[np(1-p)]. Where n = number of trials, p = probability of success.',
        hint: 'μ = np, σ = √[np(1-p)]',
        isPremium: false
      },
      {
        topicId: binomial.id,
        front: 'How do you calculate P(X ≥ k) for binomial distribution?',
        back: 'P(X ≥ k) = P(X = k) + P(X = k+1) + ... + P(X = n). Sum from k to n. Often easier to use complement: P(X ≥ k) = 1 - P(X < k) = 1 - P(X ≤ k-1).',
        hint: 'Sum from k to n, or use complement',
        isPremium: false
      },
      {
        topicId: binomial.id,
        front: 'What is the difference between binomial and Bernoulli distributions?',
        back: 'Bernoulli: single trial (n=1), outcome is 0 or 1. Binomial: n trials, counts number of successes. Binomial is sum of n independent Bernoulli trials. X ~ Bin(n,p) = X₁ + ... + Xₙ.',
        hint: 'Bernoulli = 1 trial; Binomial = n trials',
        isPremium: false
      },
      {
        topicId: binomial.id,
        front: 'When is binomial distribution symmetric vs skewed?',
        back: 'Symmetric when p = 0.5. Right-skewed when p < 0.5. Left-skewed when p > 0.5. As n increases, distribution becomes more bell-shaped regardless of p (approaches normal).',
        hint: 'p = 0.5: symmetric; p ≠ 0.5: skewed',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: binomial-distribution-stats (now has 5 problems, 6 flashcards)');

  // TOPIC 4: Geometric Distribution
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: geometric.id,
        question: 'You roll a fair die until you get a 6. What is the probability it takes exactly 3 rolls? What is the probability it takes at most 3 rolls?',
        solution: `Step 1: Identify as geometric distribution
Geometric: Number of trials until first success
- Success = rolling a 6
- p = 1/6 (probability of success)
- X = number of rolls until first 6

Step 2: Find P(X = 3)
Formula: P(X = k) = (1-p)^(k-1) · p

This means:
- First k-1 trials are failures: (1-p)^(k-1)
- kth trial is success: p

P(X = 3) = (1 - 1/6)^(3-1) · (1/6)
         = (5/6)² · (1/6)
         = (25/36) · (1/6)
         = 25/216
         ≈ 0.116

Step 3: Interpret P(X = 3)
This means: Fail, Fail, Success (on roll 3)
P(not 6, not 6, 6) = (5/6) · (5/6) · (1/6) = 25/216 ✓

Step 4: Find P(X ≤ 3)
P(X ≤ 3) = P(X = 1) + P(X = 2) + P(X = 3)

P(X = 1) = (5/6)⁰ · (1/6) = 1/6

P(X = 2) = (5/6)¹ · (1/6) = 5/36

P(X = 3) = 25/216 (from above)

Step 5: Sum the probabilities
Convert to common denominator 216:
P(X = 1) = 1/6 = 36/216
P(X = 2) = 5/36 = 30/216
P(X = 3) = 25/216

P(X ≤ 3) = 36/216 + 30/216 + 25/216
         = 91/216
         ≈ 0.421

Step 6: Alternative formula for P(X ≤ k)
P(X ≤ k) = 1 - (1-p)^k
         = 1 - (5/6)³
         = 1 - 125/216
         = 91/216 ✓

Answer:
P(X = 3) = 25/216 ≈ 0.116 or 11.6%
P(X ≤ 3) = 91/216 ≈ 0.421 or 42.1%

There's about an 11.6% chance it takes exactly 3 rolls, and about a 42.1% chance it takes at most 3 rolls to get the first 6.`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: geometric.id,
        question: 'A basketball player makes 60% of free throws. What is the expected number of attempts until she makes her first basket?',
        solution: `Step 1: Identify as geometric distribution
X = number of attempts until first success
p = 0.60 (probability of success on each attempt)

Step 2: Use expected value formula
For geometric distribution:
E(X) = μ = 1/p

E(X) = 1/0.60
     = 1/(3/5)
     = 5/3
     ≈ 1.67

Step 3: Interpret the result
On average, it takes about 1.67 attempts until first made basket.

This makes sense:
- If she makes 60%, she succeeds more often than not
- Should take less than 2 attempts on average
- 1.67 is between 1 and 2 ✓

Step 4: Why this formula?
E(X) = Σ k · P(X = k)
     = 1·p + 2·(1-p)p + 3·(1-p)²p + ...
     
Through calculus/algebra, this series sums to 1/p

Intuitive: If p = 0.5, expect 2 attempts (1/0.5 = 2)
If p = 0.25, expect 4 attempts (1/0.25 = 4)

Step 5: Calculate standard deviation
For geometric distribution:
σ = √[(1-p)/p²]

σ = √[(0.40)/(0.60)²]
  = √[0.40/0.36]
  = √[10/9]
  ≈ 1.05

Step 6: Interpret standard deviation
Typical deviation from mean is about 1.05 attempts
High variability: could get it first try (X = 1)
Or might take many attempts (X could be large)

Answer: E(X) = 5/3 ≈ 1.67 attempts

On average, it takes about 1.67 attempts for her to make her first free throw. The formula is E(X) = 1/p = 1/0.60 ≈ 1.67.`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: geometric.id,
        question: 'A factory production line produces 5% defective items. What is the probability that the first defective item is found within the first 10 items inspected?',
        solution: `Step 1: Set up geometric distribution
X = number of items inspected until first defective
p = 0.05 (probability item is defective)

Find: P(X ≤ 10)

Step 2: Use CDF formula
P(X ≤ k) = 1 - (1-p)^k

P(X ≤ 10) = 1 - (1 - 0.05)¹⁰
          = 1 - (0.95)¹⁰

Step 3: Calculate (0.95)¹⁰
(0.95)¹⁰ ≈ 0.5987

Step 4: Complete calculation
P(X ≤ 10) = 1 - 0.5987
          = 0.4013

Step 5: Interpret
P(first defective within 10 items) ≈ 0.401 or 40.1%

About 40% chance the first defective shows up in first 10 items.

Equivalently:
About 60% chance all first 10 items are good!
P(all 10 good) = (0.95)¹⁰ ≈ 0.60

Step 6: Find expected waiting time
E(X) = 1/p = 1/0.05 = 20

On average, expect to inspect 20 items before finding first defective.

So inspecting only 10 is "less than average" - makes sense why probability is less than 50%.

Step 7: What if we wanted P(X > 10)?
P(X > 10) = 1 - P(X ≤ 10)
          = 1 - 0.4013
          = 0.5987

Or directly: P(X > 10) = (1-p)¹⁰ = (0.95)¹⁰

This is probability we DON'T find defective in first 10
= probability all first 10 are good!

Answer: P(X ≤ 10) ≈ 0.401 or 40.1%

There's about a 40% chance of finding the first defective item within the first 10 inspections. Since the expected position of the first defective is 20, finding it within the first 10 is better than average.`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: geometric.id,
        question: 'Compare: Geometric vs Binomial. You flip a coin. For geometric, find P(first H on flip 4). For binomial with 4 flips, find P(exactly 1 H). Are they the same?',
        solution: `Step 1: Set up geometric problem
Geometric: X = flip number of first heads
p = 0.5
Find: P(X = 4)

Step 2: Calculate geometric probability
P(X = 4) = (1-p)^(4-1) · p
         = (0.5)³ · (0.5)
         = (0.5)⁴
         = 1/16
         = 0.0625

Interpretation: Flip sequence is TTTH

Step 3: Set up binomial problem
Binomial: Y = number of heads in 4 flips
n = 4, p = 0.5
Find: P(Y = 1)

Step 4: Calculate binomial probability
P(Y = 1) = C(4,1) · (0.5)¹ · (0.5)³
         = 4 · (0.5)⁴
         = 4 · 1/16
         = 4/16
         = 1/4
         = 0.25

Interpretation: Exactly one H in any position (HTTT, THTT, TTHT, TTTH)

Step 5: Compare the results
Geometric: P(X = 4) = 1/16 = 0.0625
Binomial: P(Y = 1) = 4/16 = 0.25

They are NOT the same!
Binomial is 4 times larger.

Step 6: Why are they different?
Geometric counts specific sequence: TTTH (first H on flip 4)
Only 1 sequence

Binomial counts ANY sequence with exactly 1 H:
- HTTT (first H on flip 1)
- THTT (first H on flip 2)
- TTHT (first H on flip 3)
- TTTH (first H on flip 4)
Total: 4 sequences

Notice: Geometric probability is 1/4 of binomial!

Step 7: Key differences between distributions
GEOMETRIC:
- Question: "Which trial is the first success?"
- Counts trial NUMBER
- Variable number of trials (could go forever)
- P(X = k) = (1-p)^(k-1) · p

BINOMIAL:
- Question: "How many successes in n trials?"
- Counts NUMBER of successes
- Fixed number of trials (n)
- P(Y = k) = C(n,k) · p^k · (1-p)^(n-k)

Step 8: Relationship
If geometric X = 4 (first success on trial 4):
- Binomial with n=4 has Y ≥ 1 (at least one success)
- But Y could be 1, 2, 3, or 4

If binomial Y = 1 (exactly one success in 4 trials):
- Geometric X could be 1, 2, 3, or 4 (where that success occurred)

Answer:
Geometric: P(X = 4) = 0.0625 (first H on flip 4)
Binomial: P(Y = 1) = 0.25 (exactly 1 H in 4 flips)

NO, they are not the same. Geometric asks for a specific sequence (TTTH), while binomial asks for any sequence with exactly one success. Binomial is 4 times larger because there are 4 possible positions for the single head.`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: geometric.id,
        question: 'A student takes a 4-choice multiple choice test by guessing. What is the probability she doesn\'t get a correct answer until question 5 or later? If she keeps guessing, how many questions should we expect her to answer before getting one right?',
        solution: `Step 1: Set up geometric distribution
X = question number of first correct answer
p = 1/4 = 0.25 (probability of guessing correctly)

Step 2: Find P(X ≥ 5)
P(X ≥ 5) = P(first 4 are all wrong)
         = (1 - p)⁴
         = (3/4)⁴
         = 81/256
         ≈ 0.316

Alternative using complement:
P(X ≥ 5) = 1 - P(X ≤ 4)
         = 1 - [1 - (1-p)⁴]
         = (1-p)⁴
         = (3/4)⁴ ✓

Step 3: Interpret P(X ≥ 5)
About 31.6% chance she doesn't get any correct in first 4 questions.

This is fairly high! With only 25% success rate, often takes several tries.

Step 4: Calculate expected value
E(X) = 1/p = 1/(1/4) = 4

On average, expect to answer 4 questions before first correct answer.

Step 5: Calculate standard deviation
σ = √[(1-p)/p²]
  = √[(3/4)/(1/4)²]
  = √[(3/4)/(1/16)]
  = √[12]
  = 2√3
  ≈ 3.46

Step 6: Interpret mean and SD
Mean = 4: On average, 4th question is first correct
SD ≈ 3.46: High variability!

Could get lucky and answer correctly on question 1
Or might take 8, 10, or more questions

Rough rule: Most values within μ ± 2σ
= 4 ± 6.92
= roughly between 1 and 11 questions

Step 7: Memoryless property
Interesting geometric property:
If she's gotten 10 wrong in a row, probability next one is correct is STILL 1/4!

Past failures don't help future attempts.
P(X = 11 | X > 10) = P(X = 1) = p

Step 8: Verify with simulation thinking
Out of 100 students:
- ~25 get question 1 correct (X = 1)
- ~19 get question 2 correct (X = 2): 75 missed first, 25% of those get second
- ~14 get question 3 correct (X = 3)
- ~11 get question 4 correct (X = 4)
- ~31 don't get correct until 5+ (X ≥ 5) ✓

Answer:
P(X ≥ 5) = 81/256 ≈ 0.316 or 31.6%
E(X) = 4 questions

There's about a 31.6% chance she doesn't get a correct answer until question 5 or later. On average, we'd expect her to answer 4 questions before getting one correct.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: geometric.id,
        front: 'What is a geometric distribution?',
        back: 'Distribution of the trial number of the FIRST success in a sequence of independent Bernoulli trials. Asks "how many trials until first success?" Example: flips until first heads.',
        hint: 'Trial number of first success',
        isPremium: false
      },
      {
        topicId: geometric.id,
        front: 'What is the geometric probability formula?',
        back: 'P(X = k) = (1-p)^(k-1) × p. Means (k-1) failures then 1 success on trial k. Where p = probability of success on each trial.',
        hint: '(1-p)^(k-1) × p',
        isPremium: false
      },
      {
        topicId: geometric.id,
        front: 'What are the mean and standard deviation of geometric distribution?',
        back: 'Mean: μ = 1/p. Standard Deviation: σ = √[(1-p)/p²]. Where p = probability of success. Note: larger p means smaller mean (success comes sooner).',
        hint: 'μ = 1/p',
        isPremium: false
      },
      {
        topicId: geometric.id,
        front: 'How do you find P(X > k) for geometric distribution?',
        back: 'P(X > k) = (1-p)^k. This is the probability of k failures in a row (no success in first k trials). Also: P(X ≤ k) = 1 - (1-p)^k.',
        hint: '(1-p)^k = all failures',
        isPremium: false
      },
      {
        topicId: geometric.id,
        front: 'What is the memoryless property of geometric distribution?',
        back: 'P(X = n+k | X > n) = P(X = k). Given n failures, probability of k more trials until success is same as starting fresh. Past doesn\'t affect future!',
        hint: 'Past failures don\'t help',
        isPremium: false
      },
      {
        topicId: geometric.id,
        front: 'What is the key difference between geometric and binomial distributions?',
        back: 'Geometric: WHEN is first success? (trial number, variable n). Binomial: HOW MANY successes in n trials? (count, fixed n). Geometric has unlimited trials; binomial has fixed n trials.',
        hint: 'Geometric = when first; Binomial = how many in n',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: geometric-distribution (now has 5 problems, 6 flashcards)');

  // TOPIC 5: Continuous Random Variables
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: continuousRV.id,
        question: 'What is the key difference between discrete and continuous random variables? Give an example of each.',
        solution: `Step 1: Define discrete random variable
Takes on COUNTABLE values (finite or countably infinite)
Can list all possible values
Probability can be assigned to individual values

Examples:
- Number of heads in 10 coin flips: {0, 1, 2, ..., 10}
- Number of students in a class: {0, 1, 2, 3, ...}
- Number of cars in parking lot: {0, 1, 2, 3, ...}

Step 2: Define continuous random variable
Takes on UNCOUNTABLE values in an interval
Infinite possible values in any range
CANNOT assign probability to individual values
Probability assigned to RANGES/INTERVALS

Examples:
- Height of a person: any value in (0, 8) feet
- Time until light bulb fails: any value in (0, ∞) hours
- Temperature: any value in (-∞, ∞) degrees

Step 3: Key difference #1 - Possible values
Discrete: Countable, can list them
Continuous: Uncountable, cannot list all

Step 4: Key difference #2 - Probabilities
Discrete: P(X = x) can be nonzero
- P(X = 3) might equal 0.2

Continuous: P(X = x) = 0 for any specific value!
- P(X = 3.0) = 0
- P(X = exactly 3.000...) = 0

Why? Infinitely many values means each has infinitesimal probability

Step 5: How to find probabilities for continuous?
Use INTERVALS, not individual values:
- P(a < X < b) = area under probability density curve
- P(2.5 < X < 3.5) might equal 0.2

Step 6: Probability density function (PDF)
Discrete: Probability mass function (PMF)
- Bar graph
- Heights represent probabilities
- Sum of all bars = 1

Continuous: Probability density function (PDF)
- Smooth curve
- Area under curve represents probability
- Total area = 1

Step 7: Example comparison
Discrete: X = number shown on die roll
P(X = 3) = 1/6

Continuous: X = time (in seconds) until die stops rolling
X could be 1.23456... or 2.71828... seconds
P(X = exactly 2.0) = 0
P(2.0 < X < 2.5) = some positive probability

Answer:
DISCRETE: Countable values, can assign probability to individual values. Example: number of heads in coin flips.

CONTINUOUS: Uncountable values in an interval, P(X = specific value) = 0, must use intervals. Example: height, time, temperature.

Key: For continuous variables, probabilities are only meaningful for RANGES, not exact values.`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: continuousRV.id,
        question: 'For a continuous random variable, explain why P(X = 5) = 0, but we can still have a nonzero probability for P(4 < X < 6).',
        solution: `Step 1: Understand the continuous probability model
Continuous variable: Infinitely many possible values
Between any two numbers, there are infinitely more numbers!

Between 4 and 6: 4.1, 4.01, 4.001, 4.0001, ...
Also 4.5, 4.55, 4.555, 4.5555, ...
Literally uncountably infinite values

Step 2: Why P(X = 5) = 0
Probability is "spread out" over infinitely many values
Each individual value gets infinitesimal probability

Think of probability like mass:
- Total mass = 1 (total probability)
- Spread over infinite points
- Each point gets mass 0

Mathematically: P(X = 5) = 0

Step 3: But this doesn't mean impossible!
P(X = 5) = 0 doesn't mean "can't happen"
It means "so unlikely it has probability 0"

This is different from discrete case where P(X = x) > 0

Step 4: Why P(4 < X < 6) can be nonzero
This is an INTERVAL with infinitely many points
Sum of infinitely many infinitesimal probabilities = positive probability

Geometric interpretation:
- Probability = area under PDF curve
- P(X = 5) = area of vertical line at x = 5 = 0 (line has no width)
- P(4 < X < 6) = area under curve from 4 to 6 > 0 (region has width)

Step 5: Visual example with uniform distribution
Suppose X is uniformly distributed on [0, 10]

PDF: f(x) = 1/10 for 0 ≤ x ≤ 10
(constant height = 0.1, total area = 0.1 × 10 = 1)

P(X = 5) = area of line at x = 5
         = (no width) × 0.1
         = 0

P(4 < X < 6) = area of rectangle from 4 to 6
             = (width 2) × (height 0.1)
             = 0.2

Step 6: Important consequences
For continuous random variables:
P(X < 5) = P(X ≤ 5) [including/excluding boundary doesn't matter]
P(X = 5) = 0, so adding it doesn't change anything

P(4 < X < 6) = P(4 ≤ X < 6) = P(4 < X ≤ 6) = P(4 ≤ X ≤ 6)
All the same!

This is NOT true for discrete variables.

Step 7: Analogy
Imagine throwing a dart at a number line from 0 to 10:
- P(hit exactly 5.000000...) = 0 (would need perfect precision)
- P(hit between 4 and 6) > 0 (reasonable target range)

Answer:
P(X = 5) = 0 because probability is spread over infinitely many values, each getting infinitesimal (zero) probability. It's like asking for the area of a single point - a point has no width, so area = 0.

P(4 < X < 6) > 0 because it's an INTERVAL containing infinitely many points. The probability is the area under the probability density curve over this interval, which has width and therefore positive area.

For continuous variables: probabilities are only meaningful for INTERVALS, not individual values.`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: continuousRV.id,
        question: 'X is uniformly distributed on [2, 10]. Find P(X < 5), P(X > 7), and P(4 ≤ X ≤ 6). Also find the mean and standard deviation.',
        solution: `Step 1: Set up uniform distribution
X ~ Uniform(a = 2, b = 10)
Range: [2, 10]
Width: 10 - 2 = 8

Step 2: Understand uniform PDF
For uniform distribution on [a,b]:
f(x) = 1/(b-a) for a ≤ x ≤ b
f(x) = 0 otherwise

For our distribution:
f(x) = 1/8 for 2 ≤ x ≤ 10

Height = 1/8 = 0.125
Total area = (width 8)(height 1/8) = 1 ✓

Step 3: Find P(X < 5)
Probability = area under curve from 2 to 5

P(X < 5) = (width)(height)
         = (5 - 2)(1/8)
         = 3/8
         = 0.375

Step 4: Find P(X > 7)
Area from 7 to 10

P(X > 7) = (10 - 7)(1/8)
         = 3/8
         = 0.375

Step 5: Find P(4 ≤ X ≤ 6)
Area from 4 to 6

P(4 ≤ X ≤ 6) = (6 - 4)(1/8)
              = 2/8
              = 1/4
              = 0.25

Step 6: Calculate mean
For uniform distribution:
μ = (a + b)/2

μ = (2 + 10)/2
  = 12/2
  = 6

Middle of the interval!

Step 7: Calculate variance and standard deviation
For uniform distribution:
σ² = (b - a)²/12

σ² = (10 - 2)²/12
   = 64/12
   = 16/3
   ≈ 5.33

σ = √(16/3)
  = 4/√3
  = (4√3)/3
  ≈ 2.31

Step 8: Verify probabilities sum correctly
Should be able to partition interval:

P(X < 5) = 3/8
P(5 ≤ X ≤ 7) = (7-5)/8 = 2/8
P(X > 7) = 3/8

Total: 3/8 + 2/8 + 3/8 = 8/8 = 1 ✓

Answer:
P(X < 5) = 3/8 = 0.375
P(X > 7) = 3/8 = 0.375
P(4 ≤ X ≤ 6) = 1/4 = 0.25
Mean: μ = 6
Standard Deviation: σ = (4√3)/3 ≈ 2.31

For uniform distribution, probabilities are proportional to interval lengths, and the mean is the midpoint of the range.`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: continuousRV.id,
        question: 'The lifetime (in years) of a light bulb follows an exponential distribution with mean 5 years. What is the probability a bulb lasts more than 5 years? More than 10 years?',
        solution: `Step 1: Set up exponential distribution
For exponential distribution with mean μ:
λ = 1/μ (rate parameter)

Given: μ = 5 years
Therefore: λ = 1/5 = 0.2

Step 2: Recall exponential CDF
For exponential with rate λ:
P(X ≤ x) = 1 - e^(-λx) for x ≥ 0

Therefore:
P(X > x) = e^(-λx)

Step 3: Find P(X > 5)
P(X > 5) = e^(-λ·5)
         = e^(-0.2·5)
         = e^(-1)
         ≈ 0.368

Step 4: Interpret P(X > 5)
About 36.8% of bulbs last more than 5 years
Even though mean is 5 years!

This seems counterintuitive, but exponential is right-skewed:
- Many bulbs fail early
- Few bulbs last much longer
- Mean is pulled up by the long-lasting outliers

Step 5: Find P(X > 10)
P(X > 10) = e^(-λ·10)
          = e^(-0.2·10)
          = e^(-2)
          ≈ 0.135

About 13.5% of bulbs last more than 10 years

Step 6: Interesting property
Notice: P(X > 10) = e^(-2) = (e^(-1))² = [P(X > 5)]²

This is the MEMORYLESS property!
P(X > 10 | X > 5) = P(X > 5)

Given a bulb has lasted 5 years, probability it lasts another 5 years is the same as a new bulb lasting 5 years!

Step 7: Calculate median for comparison
Median: value where P(X ≤ m) = 0.5

1 - e^(-λm) = 0.5
e^(-λm) = 0.5
-λm = ln(0.5)
m = -ln(0.5)/λ
m = ln(2)/0.2
m = 0.693/0.2
m ≈ 3.47 years

Median (3.47) < Mean (5) confirms right-skewed distribution

Step 8: Probability within one SD
For exponential: σ = μ = 5 (SD equals mean!)

P(μ - σ < X < μ + σ) = P(0 < X < 10) [can't be negative]
                      = 1 - e^(-2)
                      ≈ 0.865

About 86.5% within one SD (different from normal's 68%!)

Answer:
P(X > 5) = e^(-1) ≈ 0.368 or 36.8%
P(X > 10) = e^(-2) ≈ 0.135 or 13.5%

Counterintuitively, less than half of bulbs last longer than the mean lifetime (5 years) because the exponential distribution is heavily right-skewed.`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: continuousRV.id,
        question: 'Height is normally distributed with μ = 68 inches and σ = 3 inches. Find P(65 < X < 71), P(X > 74), and the 90th percentile.',
        solution: `Step 1: Set up normal distribution
X ~ N(μ = 68, σ = 3)

Step 2: Find P(65 < X < 71)
Convert to z-scores:
z₁ = (65 - 68)/3 = -3/3 = -1
z₂ = (71 - 68)/3 = 3/3 = 1

P(65 < X < 71) = P(-1 < Z < 1)

From empirical rule (68-95-99.7):
About 68% of data within 1 SD of mean

P(-1 < Z < 1) ≈ 0.68

More precisely (from table): 0.6827

Step 3: Find P(X > 74)
Convert to z-score:
z = (74 - 68)/3 = 6/3 = 2

P(X > 74) = P(Z > 2)

From empirical rule:
About 95% within 2 SD
So about 5% outside 2 SD
Half of that (2.5%) is above

P(Z > 2) ≈ 0.025

More precisely (from table): 0.0228

Step 4: Find 90th percentile
Want value x where P(X < x) = 0.90

First, find z-score for 90th percentile:
P(Z < z) = 0.90
From table: z ≈ 1.28

Step 5: Convert z-score back to x
x = μ + zσ
x = 68 + 1.28(3)
x = 68 + 3.84
x = 71.84 inches

Step 6: Verify 90th percentile
90% of people shorter than 71.84 inches
10% of people taller than 71.84 inches

This is about 71.84 - 68 = 3.84 inches above mean
= 3.84/3 = 1.28 standard deviations above mean ✓

Step 7: Summary using empirical rule
Within 1 SD (65-71): ~68%
Within 2 SD (62-74): ~95%
Within 3 SD (59-77): ~99.7%

Above mean+2SD (>74): ~2.5%
90th percentile: mean + 1.28 SD ≈ 71.84

Step 8: Visualize
          2.5%      68%       25%     2.5%
       |------|-------------|-------|------|
      62     65    68    71    74    77
           -2σ  -1σ   μ   +1σ  +2σ

Answer:
P(65 < X < 71) ≈ 0.68 or 68%
P(X > 74) ≈ 0.025 or 2.5%
90th percentile ≈ 71.84 inches

The first interval captures about 68% because it's within one standard deviation of the mean. Heights above 74 inches (2 SD above mean) are rare at about 2.5%.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: continuousRV.id,
        front: 'What is a continuous random variable?',
        back: 'Variable that can take any value in an interval (uncountably infinite values). Examples: height, weight, time, temperature. P(X = specific value) = 0. Must use intervals for probabilities.',
        hint: 'Any value in interval, P(X = x) = 0',
        isPremium: false
      },
      {
        topicId: continuousRV.id,
        front: 'What is a probability density function (PDF)?',
        back: 'Function f(x) for continuous variable where probability = area under curve. Properties: f(x) ≥ 0 everywhere, total area = 1. P(a < X < b) = area from a to b.',
        hint: 'Probability = area under curve',
        isPremium: false
      },
      {
        topicId: continuousRV.id,
        front: 'For continuous variables, does P(X < a) = P(X ≤ a)?',
        back: 'YES! They are equal because P(X = a) = 0. Including/excluding endpoint doesn\'t matter. P(X < a) = P(X ≤ a) = P(X = a) + P(X < a) = 0 + P(X < a). NOT true for discrete!',
        hint: 'YES - endpoints don\'t matter',
        isPremium: false
      },
      {
        topicId: continuousRV.id,
        front: 'What are the properties of uniform distribution on [a,b]?',
        back: 'PDF: f(x) = 1/(b-a). Mean: μ = (a+b)/2. Variance: σ² = (b-a)²/12. All intervals of equal length have equal probability. Rectangular PDF.',
        hint: 'All intervals equally likely',
        isPremium: false
      },
      {
        topicId: continuousRV.id,
        front: 'What are key properties of exponential distribution?',
        back: 'Models waiting times. Mean = SD = 1/λ. Memoryless: P(X > s+t | X > s) = P(X > t). Right-skewed. P(X > x) = e^(-λx). Used for time until event.',
        hint: 'Waiting times, memoryless',
        isPremium: false
      },
      {
        topicId: continuousRV.id,
        front: 'How does normal distribution relate to continuous random variables?',
        back: 'Most important continuous distribution. Bell-shaped, symmetric. Determined by μ and σ. Use z-scores to find probabilities. Area under curve = probability. Empirical rule: 68-95-99.7.',
        hint: 'Bell curve, use z-scores',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: continuous-random-variables (now has 5 problems, 6 flashcards)');

  // TOPIC 6: Sampling Distributions
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: samplingDist.id,
        question: 'What is a sampling distribution? How does it differ from the population distribution and sample distribution?',
        solution: `Step 1: Define population distribution
Distribution of individual values in the ENTIRE population

Example: Heights of ALL adults in US
- Mean: μ = 68 inches
- SD: σ = 3 inches
- Shape: approximately normal

Step 2: Define sample distribution
Distribution of values in ONE specific sample

Example: Heights of 50 adults we measured
- Mean: x̄ = 67.5 inches (sample mean)
- SD: s = 2.8 inches (sample SD)
- Shape: approximately normal (like population)
- This is ONE sample

Step 3: Define sampling distribution
Distribution of a STATISTIC across ALL POSSIBLE samples

Example: Distribution of x̄ (sample mean) from all possible samples of size n = 50

- This is NOT about individual heights
- This is about SAMPLE MEANS
- Each possible sample of 50 gives one x̄
- Sampling distribution = distribution of all those x̄'s

Step 4: Key differences
POPULATION DISTRIBUTION:
- What: Individual values
- Size: N (entire population)
- Parameters: μ, σ
- Usually don't know exactly

SAMPLE DISTRIBUTION:
- What: Individual values in one sample
- Size: n (one sample)
- Statistics: x̄, s
- Estimates population

SAMPLING DISTRIBUTION:
- What: Sample statistics (like x̄) across all samples
- Size: All possible samples
- Parameters: μₓ̄, σₓ̄
- Theoretical distribution

Step 5: Example with dice
Population: All possible rolls of a die
- Values: {1, 2, 3, 4, 5, 6}
- μ = 3.5, σ = 1.71

Sample: One roll → got {4}
- Just one value

Sampling distribution of x̄ for n = 2:
- Take all possible pairs: (1,1), (1,2), ..., (6,6)
- Calculate mean of each pair
- Distribution of those means
- μₓ̄ = 3.5 (same as population)
- σₓ̄ = 1.71/√2 ≈ 1.21 (smaller than population)

Step 6: Why sampling distributions matter
We take ONE sample and calculate x̄
We want to know: How far is our x̄ from μ?

Sampling distribution tells us:
- Expected value of x̄
- Variability of x̄
- Shape of x̄ distribution
- Allows us to make inferences!

Step 7: Visual representation
Population: 
Individual heights: 62, 65, 68, 71, 74... (many values)
Distribution: μ = 68, σ = 3

Sample (n=50):
Individual heights in our sample: 66, 67, 69... (50 values)
x̄ = 67.5

Sampling Distribution:
All possible x̄'s from samples of size 50
Distribution: μₓ̄ = 68, σₓ̄ = 3/√50 ≈ 0.42
Shape: Normal (by CLT)

Answer:
POPULATION DISTRIBUTION: Distribution of individual values in entire population (μ, σ).

SAMPLE DISTRIBUTION: Distribution of individual values in ONE specific sample (x̄, s).

SAMPLING DISTRIBUTION: Distribution of a sample statistic (like x̄) across ALL POSSIBLE samples of size n. Tells us how the statistic varies from sample to sample.

Key: Sampling distribution lets us understand variability of our sample statistics and make inferences about population parameters.`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: samplingDist.id,
        question: 'A population has μ = 50 and σ = 12. If we take samples of size n = 36, what are the mean and standard deviation of the sampling distribution of x̄?',
        solution: `Step 1: Identify given information
Population parameters:
μ = 50
σ = 12

Sample size:
n = 36

Find: μₓ̄ and σₓ̄ (mean and SD of sampling distribution)

Step 2: Find mean of sampling distribution
Formula: μₓ̄ = μ

The mean of the sampling distribution equals the population mean!

μₓ̄ = 50

Step 3: Why μₓ̄ = μ?
Sample mean x̄ is an UNBIASED estimator of μ
On average, x̄ equals μ
Sometimes above, sometimes below
But average of all possible x̄'s = μ

This is true regardless of sample size!

Step 4: Find standard deviation of sampling distribution
Formula: σₓ̄ = σ/√n

Also called "standard error of the mean"

σₓ̄ = 12/√36
    = 12/6
    = 2

Step 5: Interpret σₓ̄
Standard deviation of sampling distribution = 2

This means:
- Individual values vary with SD = 12
- Sample means vary with SD = 2
- Sample means are LESS variable than individuals!

Makes sense: averaging reduces variability

Step 6: Compare individual and sampling distributions
INDIVIDUAL VALUES (population):
μ = 50
σ = 12
Values spread out

SAMPLE MEANS (sampling distribution):
μₓ̄ = 50 (same center)
σₓ̄ = 2 (much less spread)
Means cluster closer to μ

Step 7: Effect of sample size
If we increased to n = 100:
σₓ̄ = 12/√100 = 12/10 = 1.2
Even less variability!

If we decreased to n = 9:
σₓ̄ = 12/√9 = 12/3 = 4
More variability

Larger samples → more precise estimates → smaller SE

Step 8: Visual comparison
Population: σ = 12
    |--|--|--|--|--|--|--|
   26  32  38  44  50  56  62

Sampling distribution (n=36): σₓ̄ = 2  
          |------|
          48  50  52

Sample means cluster much tighter around μ!

Answer:
μₓ̄ = 50
σₓ̄ = 2

The sampling distribution of x̄ has the same mean as the population (50) but much smaller standard deviation (2 vs 12). Sample means are less variable than individual values - they cluster more tightly around the population mean.`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: samplingDist.id,
        question: 'What does the Central Limit Theorem (CLT) state? Why is it important?',
        solution: `Step 1: State the Central Limit Theorem
For a random sample of size n from ANY population with mean μ and standard deviation σ:

As n increases, the sampling distribution of x̄ approaches a normal distribution with:
- Mean: μₓ̄ = μ
- Standard deviation: σₓ̄ = σ/√n

Regardless of the population's shape!

Step 2: Key components
1) Works for ANY population distribution
   - Normal, skewed, uniform, bimodal, anything!
   
2) Larger n → more normal
   - Rule of thumb: n ≥ 30 usually sufficient
   - If population is normal, works for any n
   - If population is very skewed, need larger n

3) Gives us the parameters: μₓ̄ = μ, σₓ̄ = σ/√n

Step 3: Why it's remarkable
Population could be:
- Heavily skewed
- Bimodal
- Discrete
- Any weird shape

But sampling distribution of x̄ is approximately NORMAL!

This is counterintuitive but proven mathematically.

Step 4: Example with dice
Population: Uniform on {1, 2, 3, 4, 5, 6}
- Discrete, rectangular shape
- μ = 3.5, σ = 1.71

Sampling distribution of x̄:
- n = 1: looks uniform (rectangular)
- n = 5: starting to look bell-shaped
- n = 30: very close to normal!
- As n → ∞: perfectly normal

Step 5: Why CLT is important
Allows us to use normal probabilities!

Even if we don't know population shape:
- Can assume x̄ ~ Normal (if n large enough)
- Can calculate P(x̄ in some range)
- Can create confidence intervals
- Can perform hypothesis tests

All based on normal distribution properties!

Step 6: Practical application
Quality control: Measure sample mean weight
- Individual boxes might be any distribution
- But x̄ for n = 50 boxes is approximately normal
- Can calculate P(x̄ is too far from target)

Medical: Average blood pressure in sample
- Individual BP's vary unpredictably
- But x̄ for n = 100 patients is approximately normal
- Can make inferences about population mean

Step 7: Limitations
CLT applies to:
✓ Sample mean x̄
✓ Sample sum Σx (also becomes normal)
✓ Sample proportion p̂ (special case)

Does NOT apply to:
✗ Individual values (keep population shape)
✗ Sample median (different distribution)
✗ Sample maximum/minimum

Step 8: How large is "large enough"?
General rules:
- n ≥ 30: usually sufficient for CLT
- Population normal: CLT works for any n
- Population moderately skewed: n ≥ 15 okay
- Population heavily skewed: need n ≥ 40 or more
- Population has outliers: may need very large n

Answer:
The Central Limit Theorem states that the sampling distribution of x̄ approaches a normal distribution with mean μ and standard deviation σ/√n as sample size increases, REGARDLESS of the population's shape.

Importance:
1) Lets us use normal probabilities for x̄ even when population isn't normal
2) Foundation for confidence intervals and hypothesis tests
3) Explains why normal distribution appears so often in nature
4) Works for almost any population (very general theorem)

This is perhaps the most important theorem in statistics!`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: samplingDist.id,
        question: 'A population is right-skewed with μ = 80 and σ = 15. For samples of size n = 50, find the probability that x̄ is between 78 and 82.',
        solution: `Step 1: Check if we can use normal approximation
Population is right-skewed (not normal)
But n = 50 ≥ 30
By Central Limit Theorem: sampling distribution of x̄ is approximately normal!

Step 2: Find parameters of sampling distribution
μₓ̄ = μ = 80

σₓ̄ = σ/√n
    = 15/√50
    = 15/7.07
    ≈ 2.12

Step 3: Set up probability question
Find: P(78 < x̄ < 82)

x̄ ~ Normal(μ = 80, σ = 2.12) approximately

Step 4: Standardize to z-scores
z₁ = (78 - 80)/2.12
   = -2/2.12
   ≈ -0.94

z₂ = (82 - 80)/2.12
   = 2/2.12
   ≈ 0.94

Step 5: Find probability
P(78 < x̄ < 82) = P(-0.94 < Z < 0.94)

Using standard normal table or symmetry:
P(Z < 0.94) ≈ 0.8264
P(Z < -0.94) ≈ 0.1736

P(-0.94 < Z < 0.94) = 0.8264 - 0.1736
                     = 0.6528

Step 6: Interpret
About 65.3% of samples of size 50 will have a sample mean between 78 and 82.

Even though population is skewed:
- Individual values spread out (σ = 15)
- Sample means cluster near μ = 80 (σₓ̄ = 2.12)
- Distribution of x̄ is approximately normal

Step 7: Compare to individual values
If we asked: P(78 < X < 82) for individual value?

Can't answer! We'd need the population distribution shape.
Right-skewed means not symmetric, so normal approximation doesn't work for individuals.

But for x̄ with n = 50, CLT saves us - we CAN use normal!

Step 8: Verify reasonableness
Range 78-82 is μ ± 2
In terms of SE: 80 ± 2(2.12) = 80 ± 4.24
Our range 78-82 is within about 1 SE

For normal: P(μ - 1σ < X < μ + 1σ) ≈ 0.68
Our answer 0.6528 ≈ 0.65 is close ✓

Answer: P(78 < x̄ < 82) ≈ 0.653 or 65.3%

Despite the population being right-skewed, the Central Limit Theorem allows us to treat the sampling distribution of x̄ as approximately normal (since n = 50 ≥ 30). About 65% of samples will have means within 2 units of the population mean.`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: samplingDist.id,
        question: 'Two independent populations: Population A (μ = 100, σ = 20) and Population B (μ = 90, σ = 15). Take samples of n₁ = 40 from A and n₂ = 50 from B. Find the mean and standard deviation of the sampling distribution of x̄₁ - x̄₂. What is P(x̄₁ - x̄₂ > 15)?',
        solution: `Step 1: Set up the problem
Population A: μ₁ = 100, σ₁ = 20, n₁ = 40
Population B: μ₂ = 90, σ₂ = 15, n₂ = 50

Want distribution of: x̄₁ - x̄₂ (difference of sample means)

Step 2: Find mean of difference
For independent samples:
μₓ̄₁₋ₓ̄₂ = μ₁ - μ₂
        = 100 - 90
        = 10

Expected difference is 10.

Step 3: Find standard deviation of difference
For independent samples:
σₓ̄₁₋ₓ̄₂ = √(σ₁²/n₁ + σ₂²/n₂)

Calculate each term:
σ₁²/n₁ = 20²/40 = 400/40 = 10
σ₂²/n₂ = 15²/50 = 225/50 = 4.5

σₓ̄₁₋ₓ̄₂ = √(10 + 4.5)
        = √14.5
        ≈ 3.81

Step 4: Check CLT conditions
n₁ = 40 ≥ 30 ✓
n₂ = 50 ≥ 30 ✓

By CLT: x̄₁ and x̄₂ are each approximately normal
Therefore: x̄₁ - x̄₂ is approximately normal

x̄₁ - x̄₂ ~ Normal(μ = 10, σ = 3.81)

Step 5: Find P(x̄₁ - x̄₂ > 15)
Standardize:
z = (15 - 10)/3.81
  = 5/3.81
  ≈ 1.31

P(x̄₁ - x̄₂ > 15) = P(Z > 1.31)

Step 6: Look up probability
From standard normal table:
P(Z < 1.31) ≈ 0.9049

Therefore:
P(Z > 1.31) = 1 - 0.9049
            = 0.0951

Step 7: Interpret
About 9.5% chance that sample mean from A exceeds sample mean from B by more than 15.

This makes sense:
- Expected difference is only 10
- 15 is (15-10)/3.81 ≈ 1.31 SE above expected
- Fairly unlikely but not extremely rare

Step 8: Why variances add (not subtract)
Even though we're finding difference of means, we ADD variances.

Why? Variability adds when combining random variables.
- If x̄₁ varies: contributes to variation in difference
- If x̄₂ varies: also contributes to variation in difference
- Both sources of variation combine

Formula: Var(X - Y) = Var(X) + Var(Y) [for independent X, Y]

Step 9: Verify independence assumption
Populations must be independent:
✓ Sample from A doesn't affect sample from B
✓ Different populations
✓ Random samples

If not independent (e.g., paired data), would need different approach!

Step 10: Summary of formulas used
For independent samples:
- μₓ̄₁₋ₓ̄₂ = μ₁ - μ₂
- σₓ̄₁₋ₓ̄₂ = √(σ₁²/n₁ + σ₂²/n₂)
- Distribution: approximately normal (if CLT applies)

Answer:
μₓ̄₁₋ₓ̄₂ = 10
σₓ̄₁₋ₓ̄₂ ≈ 3.81
P(x̄₁ - x̄₂ > 15) ≈ 0.095 or 9.5%

The difference in sample means has a mean of 10 and standard deviation of about 3.81. There's about a 9.5% chance that the sample mean from Population A exceeds the sample mean from Population B by more than 15.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: samplingDist.id,
        front: 'What is a sampling distribution?',
        back: 'Distribution of a sample statistic (like x̄ or p̂) across ALL POSSIBLE samples of size n from a population. Shows how the statistic varies from sample to sample. Different from population and sample distributions.',
        hint: 'Distribution of statistic across all samples',
        isPremium: false
      },
      {
        topicId: samplingDist.id,
        front: 'What are the mean and standard deviation of the sampling distribution of x̄?',
        back: 'Mean: μₓ̄ = μ (equals population mean). Standard Deviation (Standard Error): σₓ̄ = σ/√n. Sample means cluster around μ with less variability than individuals.',
        hint: 'μₓ̄ = μ, σₓ̄ = σ/√n',
        isPremium: false
      },
      {
        topicId: samplingDist.id,
        front: 'What does the Central Limit Theorem (CLT) state?',
        back: 'For samples of size n from ANY population with μ and σ: As n increases, sampling distribution of x̄ approaches Normal(μ, σ/√n). Works regardless of population shape! Rule of thumb: n ≥ 30.',
        hint: 'x̄ becomes normal as n increases',
        isPremium: false
      },
      {
        topicId: samplingDist.id,
        front: 'How does sample size affect the sampling distribution of x̄?',
        back: 'Larger n: 1) Smaller σₓ̄ = σ/√n (less variability, more precision). 2) More normal shape (CLT). 3) Mean stays μₓ̄ = μ (unchanged). Quadruple n → halve σₓ̄.',
        hint: 'Larger n → smaller SE, more normal',
        isPremium: false
      },
      {
        topicId: samplingDist.id,
        front: 'For independent samples, what is the distribution of x̄₁ - x̄₂?',
        back: 'Mean: μₓ̄₁₋ₓ̄₂ = μ₁ - μ₂. SD: σₓ̄₁₋ₓ̄₂ = √(σ₁²/n₁ + σ₂²/n₂). Shape: approximately normal if both samples large enough. Note: variances ADD (not subtract)!',
        hint: 'Means subtract, variances add',
        isPremium: false
      },
      {
        topicId: samplingDist.id,
        front: 'What is the difference between standard deviation and standard error?',
        back: 'Standard Deviation (σ): variability of individual values in population. Standard Error (σₓ̄ = σ/√n): variability of sample means. SE is always smaller than σ. SE measures precision of x̄ as estimate of μ.',
        hint: 'SD = individuals; SE = sample means',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: sampling-distributions (now has 5 problems, 6 flashcards)');

  console.log('\n🎉 Batch 3 Complete! Probability (7/7 complete)');
  console.log('Progress: 18/34 AP Statistics topics complete (53%)');
  
  await prisma.$disconnect();
}

main();
