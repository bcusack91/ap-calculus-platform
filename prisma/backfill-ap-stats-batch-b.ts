import { PrismaClient, Difficulty } from '@prisma/client';

const prisma = new PrismaClient();

type ProblemSpec = {
  question: string;
  solution: string;
  difficulty: Difficulty;
};

type FlashcardSpec = {
  front: string;
  back: string;
};

type TopicBackfill = {
  slug: string;
  examples?: ProblemSpec[];
  flashcards?: FlashcardSpec[];
};

const topics: TopicBackfill[] = [
  {
    slug: "conditional-probability",
    examples: [
      {
        question: "A two-way table shows 200 students: 120 took calculus, 80 took statistics. 50 took both. Find P(Calculus | Statistics).",
        solution: `P(Calculus | Statistics) = P(Calculus ∩ Statistics) / P(Statistics) = 50/80 = 5/8 = 0.625. 
Of the 80 students taking statistics, 50 also took calculus, so the conditional probability is 62.5%.`,
        difficulty: "EASY"
      },
      {
        question: "A medical test has sensitivity 0.95 (P(positive | disease)) and specificity 0.90 (P(negative | no disease)). If disease prevalence is 0.02, find P(disease | positive) using Bayes' theorem.",
        solution: `Let D = disease, + = positive test. P(D|+) = P(+|D)P(D) / [P(+|D)P(D) + P(+|¬D)P(¬D)].
P(+|¬D) = 1 - 0.90 = 0.10. 
P(D|+) = (0.95 × 0.02) / [(0.95 × 0.02) + (0.10 × 0.98)] = 0.019 / 0.117 ≈ 0.162.
Only about 16.2% of positive tests indicate disease; this shows the importance of base rates in medical testing.`,
        difficulty: "HARD"
      },
      {
        question: "In a deck of 52 cards, what is P(second card is an ace | first card was an ace, drawn without replacement)?",
        solution: `After removing one ace, 3 aces remain out of 51 cards total.
P(2nd ace | 1st ace) = 3/51 = 1/17 ≈ 0.0588.
Without replacement, the sample space shrinks, lowering the conditional probability of a second ace.`,
        difficulty: "MEDIUM"
      }
    ],
    flashcards: [
      { front: "What is the conditional probability formula?", back: "P(A|B) = P(A ∩ B) / P(B), where P(B) > 0. Read as \"probability of A given B.\"" },
      { front: "What is Bayes' Theorem?", back: "P(A|B) = P(B|A)P(A) / P(B). Reverses conditional probabilities; critical for medical testing, spam filters." },
      { front: "What does a two-way table show?", back: "Counts of outcomes across two categorical variables, organized in rows and columns. Marginal totals appear on edges." },
      { front: "How do you find P(A|B) from a two-way table?", back: "Count outcomes where both A and B occur; divide by the marginal total for B (the condition)." },
      { front: "What is the denominator in P(A|B) = P(A ∩ B) / P(B)?", back: "P(B), the probability of the condition. The conditional probability is always relative to B's universe." },
      { front: "What is a tree diagram used for?", back: "Visualizing conditional probabilities along branches; multiply probabilities along a path; sum across paths to find total probability." },
      { front: "Misconception: Is P(A|B) = P(B|A)?", back: "No. P(A|B) and P(B|A) are usually different. Example: P(disease|positive) ≠ P(positive|disease)." },
      { front: "What does independence mean in conditional probability terms?", back: "A and B are independent if P(A|B) = P(A). Knowing B occurred does not change the probability of A." },
      { front: "When using Bayes' Theorem, what is P(B)?", back: "The total probability of B, found by: P(B) = Σ P(B|Aᵢ)P(Aᵢ) over all disjoint cases Aᵢ." },
      { front: "How does conditioning change the sample space?", back: "The sample space shrinks to only outcomes where the condition holds. All probabilities are recalculated relative to this reduced space." }
    ]
  },
  {
    slug: "independence",
    examples: [
      {
        question: "Two events have P(A) = 0.4, P(B) = 0.5, and P(A ∩ B) = 0.2. Are A and B independent?",
        solution: `Check if P(A ∩ B) = P(A) × P(B). 
P(A) × P(B) = 0.4 × 0.5 = 0.2. 
P(A ∩ B) = 0.2 = 0.2. ✓ Yes, A and B are independent.
Since the intersection equals the product, knowing B occurred tells us nothing about A.`,
        difficulty: "EASY"
      },
      {
        question: "A two-way table: 300 students surveyed. 180 exercise regularly, 200 have healthy BMI. 120 both exercise and have healthy BMI. Are exercising regularly and having healthy BMI independent?",
        solution: `P(exercise) = 180/300 = 0.6. P(healthy BMI) = 200/300 = 0.667.
P(both) = 120/300 = 0.4.
P(exercise) × P(healthy BMI) = 0.6 × 0.667 = 0.4.
Since P(exercise ∩ healthy BMI) = 0.4 = 0.6 × 0.667, the events are independent.
Exercise and BMI health are unrelated in this sample.`,
        difficulty: "MEDIUM"
      },
      {
        question: "Consider rolling two fair dice. Let A = \"first die shows 6\" and B = \"sum of both dice is 7.\" Are A and B independent? Justify with probabilities.",
        solution: `P(A) = 1/6 (first die is 6). P(B) = 6/36 = 1/6 (sums: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1).
P(A ∩ B) = 1/36 (both: first is 6 AND sum is 7, only outcome 6+1).
P(A) × P(B) = (1/6) × (1/6) = 1/36.
Since P(A ∩ B) = P(A)P(B), A and B are independent. Rolling a 6 first doesn't change the odds of summing to 7.`,
        difficulty: "HARD"
      }
    ],
    flashcards: [
      { front: "What is the definition of independence?", back: "A and B are independent if P(A ∩ B) = P(A) × P(B). Equivalently: P(A|B) = P(A) and P(B|A) = P(B)." },
      { front: "How do you check independence from a two-way table?", back: "Calculate marginal probabilities; multiply them. If product equals P(A ∩ B), the variables are independent." },
      { front: "Are mutually exclusive events independent?", back: "No. If A and B are mutually exclusive, P(A ∩ B) = 0, so P(A|B) = 0 ≠ P(A) (unless P(A)=0). They are dependent." },
      { front: "Misconception: Does independent mean mutually exclusive?", back: "No. Independent: knowing one doesn't change odds of the other. Mutually exclusive: can't both happen. These are opposite ideas." },
      { front: "What does it mean if P(A|B) = P(A)?", back: "A and B are independent. The probability of A is the same whether B happens or not." },
      { front: "If A and B are independent, what is P(A ∩ B)?", back: "P(A ∩ B) = P(A) × P(B). Multiply individual probabilities." },
      { front: "Can three or more events be mutually independent?", back: "Yes. All pairwise products must equal intersections, and the three-way product must equal the three-way intersection." },
      { front: "What is the complement independence rule?", back: "If A and B are independent, then A and B^c are also independent, and so are A^c and B." },
      { front: "How does independence relate to conditional probability?", back: "Independence is equivalent to: P(A|B) = P(A). The condition B provides no information about A." },
      { front: "Are independent events always disjoint?", back: "No. Disjoint = cannot both occur. Independent = occurrence of one doesn't change odds of the other. Independent events can overlap." }
    ]
  },
  {
    slug: "discrete-random-variables",
    examples: [
      {
        question: "Let X = number of heads in 2 coin flips. List the probability distribution of X and verify it sums to 1.",
        solution: `Outcomes: TT (0 heads), TH/HT (1 head), HH (2 heads).
X       | 0   | 1   | 2
P(X)    | 0.25| 0.5 | 0.25
Sum = 0.25 + 0.5 + 0.25 = 1.0. ✓
This is a valid discrete distribution. The probabilities are non-negative and sum to 1.`,
        difficulty: "EASY"
      },
      {
        question: "A discrete random variable has distribution: P(X=1)=0.1, P(X=2)=0.3, P(X=3)=0.4, P(X=4)=0.2. Find P(X ≤ 2) and P(X > 2).",
        solution: `P(X ≤ 2) = P(X=1) + P(X=2) = 0.1 + 0.3 = 0.4.
P(X > 2) = P(X=3) + P(X=4) = 0.4 + 0.2 = 0.6.
Check: P(X ≤ 2) + P(X > 2) = 0.4 + 0.6 = 1.0. ✓
The cumulative probability P(X ≤ 2) represents 40% of the distribution.`,
        difficulty: "MEDIUM"
      },
      {
        question: "A test score X has distribution: P(X=60)=0.1, P(X=70)=0.25, P(X=80)=0.4, P(X=90)=0.2, P(X=100)=0.05. Find E(X) and Var(X).",
        solution: `E(X) = 60(0.1) + 70(0.25) + 80(0.4) + 90(0.2) + 100(0.05) = 6 + 17.5 + 32 + 18 + 5 = 78.5.
E(X²) = 3600(0.1) + 4900(0.25) + 6400(0.4) + 8100(0.2) + 10000(0.05) = 360 + 1225 + 2560 + 1620 + 500 = 6265.
Var(X) = E(X²) - [E(X)]² = 6265 - (78.5)² = 6265 - 6162.25 = 102.75.
The mean test score is 78.5, with variance measuring typical squared deviation from this mean.`,
        difficulty: "HARD"
      }
    ],
    flashcards: [
      { front: "What is a discrete random variable?", back: "A variable that takes on countable values (e.g., integers). Associated with each value is a probability." },
      { front: "What defines a valid probability distribution?", back: "All probabilities are non-negative (P(X=k) ≥ 0) and sum to 1: Σ P(X=k) = 1." },
      { front: "How do you find P(X ≤ k)?", back: "Sum all probabilities up to and including k: P(X ≤ k) = Σ P(X=i) for i ≤ k. This is the cumulative distribution." },
      { front: "What is P(X > k) in terms of cumulative probability?", back: "P(X > k) = 1 - P(X ≤ k). Complement of the cumulative probability up to k." },
      { front: "How do you calculate E(X) (expected value)?", back: "E(X) = Σ x · P(X=x). Multiply each value by its probability and sum." },
      { front: "What is Var(X)?", back: "Var(X) = E(X²) - [E(X)]². Or equivalently: Var(X) = Σ (x - μ)² · P(X=x) where μ = E(X)." },
      { front: "What does E(X) represent intuitively?", back: "The long-run average value of X if the experiment is repeated many times. The center of the distribution." },
      { front: "What does Var(X) measure?", back: "The spread or dispersion of the distribution around the mean. Larger variance = more variability." },
      { front: "How is standard deviation related to variance?", back: "SD(X) = √Var(X). Standard deviation is the square root of variance, measured in same units as X." },
      { front: "What is the difference between P(X=k) and P(X≤k)?", back: "P(X=k) is the probability of exactly k. P(X≤k) is cumulative: probability of k or less." }
    ]
  },
  {
    slug: "continuous-random-variables",
    examples: [
      {
        question: "A uniform distribution on [0, 4] has probability density f(x) = 0.25. Find P(X ≤ 1).",
        solution: `For a continuous distribution, probability is area under the density curve.
P(X ≤ 1) = ∫₀¹ 0.25 dx = 0.25 × 1 = 0.25.
This means 25% of the probability mass lies between 0 and 1 in a uniform distribution on [0, 4].`,
        difficulty: "EASY"
      },
      {
        question: "Heights of adult males follow approximately N(μ=70, σ=3). What is P(X = 70)?",
        solution: `For any continuous random variable, P(X = c) = 0 for any single point c.
P(X = 70) = 0, even though 70 is the mean. Probability is area, and a single point has no width.
Instead, we ask P(69.5 ≤ X ≤ 70.5) ≈ 0.1326, which is the probability of a small interval.`,
        difficulty: "MEDIUM"
      },
      {
        question: "Daily rainfall X is modeled by a continuous distribution with density f(x) = 0.4e^{-0.4x} for x ≥ 0. Find P(X ≤ 2).",
        solution: `P(X ≤ 2) = ∫₀² 0.4e^{-0.4x} dx. Let u = -0.4x, then du = -0.4dx.
∫ 0.4e^{-0.4x} dx = -e^{-0.4x} + C.
P(X ≤ 2) = [-e^{-0.4x}]₀² = -e^{-0.8} + e⁰ = 1 - e^{-0.8} ≈ 1 - 0.449 = 0.551.
About 55% probability that rainfall is at most 2 units.`,
        difficulty: "HARD"
      }
    ],
    flashcards: [
      { front: "What is a continuous random variable?", back: "A variable that can take any value in an interval (e.g., time, weight). Modeled by a probability density function f(x)." },
      { front: "What is the probability density function (PDF)?", back: "f(x) ≥ 0 with ∫_{-∞}^{∞} f(x)dx = 1. Area under f(x) over an interval gives probability." },
      { front: "How do you find P(a ≤ X ≤ b) for continuous X?", back: "P(a ≤ X ≤ b) = ∫ₐᵇ f(x)dx. Integrate the density function over [a, b]." },
      { front: "Why is P(X = c) = 0 for continuous X?", back: "A single point has no area under the curve. Probability requires an interval; points have zero width." },
      { front: "What is a cumulative distribution function (CDF)?", back: "F(x) = P(X ≤ x) = ∫_{-∞}^x f(t)dt. Increases from 0 to 1 as x increases." },
      { front: "What is the relationship between PDF and CDF?", back: "f(x) = dF(x)/dx. The PDF is the derivative of the CDF." },
      { front: "What is a uniform distribution U(a,b)?", back: "Constant density f(x) = 1/(b-a) for a ≤ x ≤ b, zero elsewhere. All intervals of equal width have equal probability." },
      { front: "What is the normal distribution N(μ,σ²)?", back: "Bell-curve density centered at mean μ with standard deviation σ. Symmetric; 68% within 1σ, 95% within 2σ." },
      { front: "How do you standardize a normal random variable?", back: "Z = (X - μ)/σ converts X ~ N(μ,σ²) to Z ~ N(0,1). Use z-tables to find probabilities." },
      { front: "What is the exponential distribution used for?", back: "Models waiting times or lifetimes. Density f(x) = λe^{-λx} for x ≥ 0, where λ is the rate parameter." }
    ]
  },
  {
    slug: "binomial-distribution",
    examples: [
      {
        question: "A quiz has 10 multiple choice questions, each with 4 choices. A student guesses randomly. What is the probability of exactly 3 correct answers?",
        solution: `This is binomial with n=10, p=0.25 (one correct out of 4), k=3.
P(X=3) = C(10,3) × (0.25)³ × (0.75)⁷ = 120 × 0.0156 × 0.1335 ≈ 0.250.
About 25% chance of exactly 3 correct by random guessing on a 10-question quiz.`,
        difficulty: "EASY"
      },
      {
        question: "A vaccine is 85% effective. In a sample of 20 vaccinated individuals, find the probability that at least 18 are protected (X ≥ 18).",
        solution: `Binomial with n=20, p=0.85. Find P(X≥18) = P(X=18) + P(X=19) + P(X=20).
P(X=18) = C(20,18) × (0.85)¹⁸ × (0.15)² ≈ 190 × 0.0394 × 0.0225 ≈ 0.169.
P(X=19) = C(20,19) × (0.85)¹⁹ × (0.15)¹ ≈ 20 × 0.0335 × 0.15 ≈ 0.100.
P(X=20) = (0.85)²⁰ ≈ 0.0388.
P(X≥18) ≈ 0.169 + 0.100 + 0.039 ≈ 0.308. About 31% chance that 18 or more are protected.`,
        difficulty: "MEDIUM"
      },
      {
        question: "Manufacturing produces items with defect rate p=0.02. In a batch of 50, find the probability of at most 2 defects. Also calculate E(X) and SD(X).",
        solution: `Binomial n=50, p=0.02. P(X≤2) = P(X=0) + P(X=1) + P(X=2).
P(X=0) = C(50,0)(0.02)⁰(0.98)⁵⁰ ≈ 0.364.
P(X=1) = C(50,1)(0.02)¹(0.98)⁴⁹ ≈ 50 × 0.02 × 0.371 ≈ 0.371.
P(X=2) = C(50,2)(0.02)²(0.98)⁴⁸ ≈ 1225 × 0.0004 × 0.379 ≈ 0.186.
P(X≤2) ≈ 0.921. E(X) = np = 50(0.02) = 1. SD(X) = √(np(1-p)) = √(50×0.02×0.98) ≈ 0.99.
Over 92% probability of 2 or fewer defects; mean defects is 1 with SD ≈ 1.`,
        difficulty: "HARD"
      }
    ],
    flashcards: [
      { front: "What are the BINS conditions for a binomial distribution?", back: "Binary (two outcomes), Independent trials, N fixed, Same probability p on each trial." },
      { front: "What is the binomial probability formula?", back: "P(X=k) = C(n,k) × p^k × (1-p)^{n-k}, where C(n,k) = n!/(k!(n-k)!)." },
      { front: "What is the mean of a binomial distribution?", back: "E(X) = μ = np. Expected number of successes in n trials with success rate p." },
      { front: "What is the standard deviation of a binomial?", back: "SD(X) = √(np(1-p)). Measures spread around the mean." },
      { front: "When is binomcdf used instead of binompdf?", back: "binompdf: P(X=k). binomcdf: P(X≤k) (cumulative). Use binomcdf for \"at most,\" \"at least,\" or ranges." },
      { front: "How do you find P(X ≥ k) using binomcdf?", back: "P(X≥k) = 1 - P(X≤k-1) = 1 - binomcdf(n,p,k-1)." },
      { front: "What is the difference between binomial and geometric?", back: "Binomial: fixed n, count successes. Geometric: fixed number of successes (1), count trials until first success." },
      { front: "Can you use binomial if n is very large?", back: "If n is large and p is small, use Poisson approximation. If n is large, p is not too extreme, use normal approximation." },
      { front: "What is the normal approximation rule for binomial?", back: "If np ≥ 10 and n(1-p) ≥ 10, use X ~ N(np, np(1-p)) with continuity correction." },
      { front: "What does the continuity correction do?", back: "For P(X≤k) with normal, use P(Z ≤ (k+0.5-μ)/σ). Adjusts for discrete-to-continuous approximation." }
    ]
  },
  {
    slug: "basic-probability-rules",
    examples: [
      {
        question: "At a concert, P(rain) = 0.3. What is P(no rain)?",
        solution: `P(no rain) = 1 - P(rain) = 1 - 0.3 = 0.7.
The complement rule states that an event and its complement partition the sample space with probability 1.`,
        difficulty: "EASY"
      },
      {
        question: "In a class of 100 students, 60 play soccer, 40 play basketball, and 15 play both. What is P(soccer OR basketball)?",
        solution: `Using the inclusion-exclusion principle: P(A ∪ B) = P(A) + P(B) - P(A ∩ B).
P(soccer ∪ basketball) = 60/100 + 40/100 - 15/100 = 85/100 = 0.85.
The union includes all who play at least one sport; subtract the overlap to avoid double-counting.`,
        difficulty: "MEDIUM"
      },
      {
        question: "A lottery ticket wins with probability 0.001. If you buy 5 independent tickets, what is the probability of winning at least one prize?",
        solution: `P(at least one win) = 1 - P(no wins) = 1 - P(all 5 lose).
P(lose one ticket) = 1 - 0.001 = 0.999.
P(all 5 lose) = (0.999)⁵ ≈ 0.9950.
P(at least one win) = 1 - 0.9950 ≈ 0.0050 = 0.50%.
Using complement is simpler than summing P(X=1) + P(X=2) + ... + P(X=5).`,
        difficulty: "HARD"
      }
    ]
  },
  {
    slug: "geometric-distribution",
    examples: [
      {
        question: "A player makes a free throw with probability 0.8. What is the probability their first miss occurs on the 3rd attempt?",
        solution: `Geometric: first two attempts succeed (make), third fails (miss).
P(X=3) = (0.8)² × (0.2) = 0.64 × 0.2 = 0.128.
There is a 12.8% chance the first miss happens on shot 3.`,
        difficulty: "EASY"
      },
      {
        question: "A quality-control inspector finds a defective item with probability 0.05 per item inspected. Find E(X) where X is the trial number of the first defect found.",
        solution: `For geometric with parameter p = 0.05, the expected number of trials until first success is E(X) = 1/p.
E(X) = 1/0.05 = 20.
On average, the inspector will inspect 20 items before finding the first defective one.`,
        difficulty: "MEDIUM"
      },
      {
        question: "A roulette wheel lands on red with probability 18/38. Let X = number of spins until first red. Find P(X ≤ 5) and interpret.",
        solution: `P(X ≤ 5) = P(X=1) + P(X=2) + P(X=3) + P(X=4) + P(X=5).
p = 18/38 ≈ 0.474, so 1-p ≈ 0.526.
P(X=k) = (0.526)^{k-1}(0.474).
P(X=1) ≈ 0.474, P(X=2) ≈ 0.249, P(X=3) ≈ 0.131, P(X=4) ≈ 0.069, P(X=5) ≈ 0.036.
P(X≤5) ≈ 0.959.
Nearly 96% chance of seeing red within the first 5 spins.`,
        difficulty: "HARD"
      }
    ]
  }
];

async function main() {
  console.log('Backfilling AP Statistics content (batch B: Unit 4 Probability)...');
  for (const t of topics) {
    const topic = await prisma.topic.findUnique({ where: { slug: t.slug } });
    if (!topic) { console.warn(`  ⚠ Topic not found: ${t.slug}`); continue; }

    if (t.flashcards && t.flashcards.length > 0) {
      const existing = await prisma.flashcard.findMany({ where: { topicId: topic.id }, select: { front: true } });
      const existingFronts = new Set(existing.map(f => f.front.trim()));
      const toCreate = t.flashcards.filter(f => !existingFronts.has(f.front.trim())).map(f => ({ topicId: topic.id, ...f }));
      if (toCreate.length) await prisma.flashcard.createMany({ data: toCreate });
    }

    if (t.examples && t.examples.length > 0) {
      const existing = await prisma.exampleProblem.findMany({ where: { topicId: topic.id }, select: { question: true, order: true } });
      const existingQs = new Set(existing.map(p => p.question.trim()));
      const maxOrder = existing.reduce((m, p) => Math.max(m, p.order ?? 0), 0);
      const toCreate = t.examples.filter(e => !existingQs.has(e.question.trim())).map((e, i) => ({ topicId: topic.id, order: maxOrder + i + 1, ...e }));
      if (toCreate.length) await prisma.exampleProblem.createMany({ data: toCreate });
    }

    const fcCount = await prisma.flashcard.count({ where: { topicId: topic.id } });
    const pCount = await prisma.exampleProblem.count({ where: { topicId: topic.id } });
    console.log(`✓ ${t.slug}  flashcards=${fcCount}  problems=${pCount}`);
  }
  console.log('✓ Batch B complete.');
}

main().catch(e => { console.error(e); process.exit(1); }).finally(async () => { await prisma.$disconnect(); });
