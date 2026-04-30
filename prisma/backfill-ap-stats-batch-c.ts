import { PrismaClient, Difficulty } from "@prisma/client";

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
    slug: "sampling-distributions",
    examples: [
      {
        question: "What is the mean of the sampling distribution of the sample mean?",
        solution: "The mean of the sampling distribution of the sample mean equals the population mean $\\mu$. This is true regardless of sample size, making the sample mean an unbiased estimator of the population parameter. If the population mean is 50, then all sample means taken from this population will have an expected value of 50.",
        difficulty: "EASY",
      },
      {
        question: "A population has standard deviation $\\sigma = 12$. How does the standard error change when sample size increases from $n = 25$ to $n = 100$?",
        solution: `The standard error is $SE = \\sigma / \\sqrt{n}$. 
At $n = 25$: $SE = 12 / \\sqrt{25} = 12 / 5 = 2.4$.
At $n = 100$: $SE = 12 / \\sqrt{10} = 12 / 10 = 1.2$.
The standard error decreases by half when $n$ quadruples. Larger samples produce less variability in sample means, making the sampling distribution more concentrated around the population mean.`,
        difficulty: "MEDIUM",
      },
      {
        question: "Two researchers sample from the same population of test scores ($\\mu = 75$, $\\sigma = 8$). Researcher A uses $n = 36$ while Researcher B uses $n = 100$. Which sampling distribution has the smaller spread? Explain why this matters for inference.",
        solution: `Researcher B's sampling distribution has smaller spread because standard error $SE = \\sigma / \\sqrt{n}$ decreases as $n$ increases.
For A: $SE = 8 / 6 = 1.33$.
For B: $SE = 8 / 10 = 0.8$.
Smaller spread means Researcher B's sample means vary less around $\\mu = 75$, producing more precise estimates. This is why larger samples are preferred—they reduce sampling variability and make confidence intervals narrower.`,
        difficulty: "HARD",
      },
    ],
    flashcards: [
      {
        front: "What is a sampling distribution?",
        back: "The probability distribution of a sample statistic (like $\\bar{x}$) based on all possible samples of the same size from a population.",
      },
      {
        front: "What is an unbiased estimator?",
        back: "An estimator whose mean equals the population parameter. The sample mean $\\bar{x}$ is an unbiased estimator of $\\mu$.",
      },
      {
        front: "How does standard error relate to population standard deviation?",
        back: "$SE = \\sigma / \\sqrt{n}$. Standard error is the population SD divided by the square root of sample size.",
      },
      {
        front: "Why does larger sample size reduce standard error?",
        back: "Larger $n$ means the denominator $\\sqrt{n}$ increases, so $SE = \\sigma / \\sqrt{n}$ decreases. Bigger samples produce less variability.",
      },
      {
        front: "What is sampling variability?",
        back: "Natural fluctuation in sample statistics from sample to sample. Larger samples have less sampling variability.",
      },
      {
        front: "The Central Limit Theorem states what key fact?",
        back: "For large $n$, the sampling distribution of $\\bar{x}$ is approximately Normal, centered at $\\mu$ with SE = $\\sigma / \\sqrt{n}$.",
      },
      {
        front: "What is the relationship between confidence interval width and sample size?",
        back: "Larger sample size makes the confidence interval narrower (more precise) because standard error decreases.",
      },
      {
        front: "How many different sampling distributions are there for one population?",
        back: "One for each possible sample size. Each $n$ produces its own distribution centered at $\\mu$ with different spread.",
      },
      {
        front: "True or false: the standard error equals the population standard deviation.",
        back: "False. SE = $\\sigma / \\sqrt{n}$, which is always smaller than $\\sigma$ when $n > 1$.",
      },
      {
        front: "Why is the sample mean considered a good estimator of the population mean?",
        back: "Because it is unbiased (mean of sampling distribution = $\\mu$) and its variability decreases with larger samples.",
      },
    ],
  },
  {
    slug: "tests-proportions",
    examples: [
      {
        question: "A survey of 400 students finds 120 prefer online learning. State the null and alternative hypotheses for testing whether the proportion differs from 0.30.",
        solution: `Null hypothesis: $H_0: p = 0.30$ (the proportion is 0.30).
Alternative hypothesis: $H_a: p \\ne 0.30$ (the proportion differs from 0.30).
This is a two-tailed test. The sample proportion is $\\hat{p} = 120/400 = 0.30$, which equals the hypothesized value, but we'll test for statistical significance.`,
        difficulty: "EASY",
      },
      {
        question: "In a one-sample z-test for proportions with $\\hat{p} = 0.65$, $p_0 = 0.60$, $n = 200$, calculate the test statistic and verify conditions.",
        solution: `Conditions check:
• Random: assumed ✓
• 10% condition: $n = 200 < 10\\%(N)$ ✓
• Large Counts: $np_0 = 200(0.60) = 120 \\ge 10$ ✓ and $n(1-p_0) = 200(0.40) = 80 \\ge 10$ ✓
All conditions met. Test statistic: $z = \\frac{\\hat{p} - p_0}{\\sqrt{p_0(1-p_0)/n}} = \\frac{0.65 - 0.60}{\\sqrt{0.60(0.40)/200}} = \\frac{0.05}{\\sqrt{0.0012}} = \\frac{0.05}{0.0346} ≈ 1.44$.`,
        difficulty: "MEDIUM",
      },
      {
        question: "A city claims 75% of residents support a new park. A sample of 150 residents shows 105 support it ($\\hat{p} = 0.70$). Test at $\\alpha = 0.05$. Conclude in context.",
        solution: `State: $H_0: p = 0.75$ vs $H_a: p \\ne 0.75$, $\\alpha = 0.05$.
Plan/Check: Random sample, $150 < 10\\%(N)$, $np_0 = 150(0.75) = 112.5 \\ge 10$, $n(1-p_0) = 37.5 \\ge 10$. Conditions met.
Do: $z = \\frac{0.70 - 0.75}{\\sqrt{0.75(0.25)/150}} = \\frac{-0.05}{0.0354} ≈ -1.41$. Two-tailed p-value $≈ 0.158$.
Conclude: Since $p \\text{-value} = 0.158 > 0.05$, we fail to reject $H_0$. Sufficient evidence that 75% support the park.`,
        difficulty: "HARD",
      },
    ],
    flashcards: [
      {
        front: "What are the conditions for a one-sample z-test for proportions?",
        back: "Random sample, 10% condition ($n < 0.10N$), and Large Counts ($np_0 \\ge 10$ and $n(1-p_0) \\ge 10$).",
      },
      {
        front: "Write the formula for the z-test statistic for proportions.",
        back: "$z = \\frac{\\hat{p} - p_0}{\\sqrt{p_0(1-p_0)/n}}$ where $p_0$ is the hypothesized proportion.",
      },
      {
        front: "What does $\\hat{p}$ represent in a test for proportions?",
        back: "The sample proportion, calculated as $\\hat{p} = \\frac{\\text{count of success}}{n}$.",
      },
      {
        front: "Why must $np_0 \\ge 10$ and $n(1-p_0) \\ge 10$?",
        back: "These ensure the sampling distribution is approximately Normal, validating the use of the z-test.",
      },
      {
        front: "What is the 10% condition?",
        back: "Sample size must be less than 10% of the population: $n < 0.10N$. Ensures independence of trials.",
      },
      {
        front: "How do you find the p-value in a two-tailed z-test for proportions?",
        back: "Double the probability beyond $|z|$ using the standard Normal table: p-value = $2P(Z > |z|)$.",
      },
      {
        front: "True or false: use $\\hat{p}$ when calculating standard error for a z-test.",
        back: "False. Use $p_0$ (the hypothesized proportion): $SE = \\sqrt{p_0(1-p_0)/n}$.",
      },
      {
        front: "What conclusion do you write if p-value < $\\alpha$?",
        back: "Reject $H_0$. There is sufficient evidence to conclude that $p \\ne p_0$ (in the direction of the alternative hypothesis).",
      },
      {
        front: "What does a p-value of 0.03 mean in a test for proportions?",
        back: "If the null hypothesis is true, there's a 3% probability of observing a sample proportion as extreme as or more extreme than $\\hat{p}$.",
      },
      {
        front: "Name one common mistake when testing proportions.",
        back: "Using $\\hat{p}$ instead of $p_0$ in the standard error formula. Always use the hypothesized value under $H_0$.",
      },
    ],
  },
  {
    slug: "hypothesis-testing-framework",
    examples: [
      {
        question: "Explain the difference between the null hypothesis and the alternative hypothesis.",
        solution: `The null hypothesis $H_0$ assumes no effect or no difference—it is the claim being tested. The alternative hypothesis $H_a$ is what we hope to find evidence for; it proposes the effect or difference exists. In a test whether a drug is effective, $H_0: \\text{drug has no effect}$ and $H_a: \\text{drug has an effect}$. We collect data to evaluate whether $H_0$ is plausible.`,
        difficulty: "EASY",
      },
      {
        question: "Define a p-value and explain what it represents in a hypothesis test.",
        solution: `The p-value is the probability of observing a test statistic as extreme as or more extreme than the one computed from the sample, assuming $H_0$ is true. A small p-value (typically < 0.05) suggests the sample data is unlikely under $H_0$, providing evidence to reject it. A large p-value indicates the observed data is consistent with $H_0$. The p-value measures the strength of evidence against the null hypothesis.`,
        difficulty: "MEDIUM",
      },
      {
        question: "A biologist tests $H_0: \\mu = 10$ versus $H_a: \\mu \\ne 10$ at $\\alpha = 0.05$ and obtains p-value = 0.12. Interpret the result and state the conclusion.",
        solution: `Since the p-value = 0.12 is greater than $\\alpha = 0.05$, we fail to reject $H_0$. The p-value of 0.12 means that if the population mean is truly 10, there is a 12% probability of observing a sample mean as extreme as (or more extreme than) the one we obtained. This is not unusual under $H_0$. Conclusion: There is insufficient evidence to conclude that the population mean differs from 10. The data is consistent with $\\mu = 10$.`,
        difficulty: "HARD",
      },
    ],
    flashcards: [
      {
        front: "What is the null hypothesis?",
        back: "The hypothesis of no effect or no difference. It is what we assume to be true when we conduct the test.",
      },
      {
        front: "What is the alternative hypothesis?",
        back: "The hypothesis that proposes an effect or difference exists. It is what we test for evidence in favor of.",
      },
      {
        front: "What is the significance level $\\alpha$?",
        back: "The probability of making a Type I error (rejecting $H_0$ when it is true). Commonly set at 0.05.",
      },
      {
        front: "When do we reject the null hypothesis?",
        back: "When the p-value is less than (or equal to) the significance level $\\alpha$.",
      },
      {
        front: "What does it mean to 'fail to reject' $H_0$?",
        back: "The data does not provide sufficient evidence to conclude $H_a$ is true. This does NOT mean $H_0$ is proven true.",
      },
      {
        front: "Explain the difference between a one-tailed and two-tailed test.",
        back: "One-tailed: $H_a$ specifies direction (>, <). Two-tailed: $H_a$ specifies $\\ne$. Two-tailed p-value counts both tails; one-tailed counts one.",
      },
      {
        front: "How do you compute the p-value for a two-tailed test?",
        back: "Find the probability in one tail and double it: p-value = $2 \\times P(T \\text{ more extreme than observed } | H_0)$.",
      },
      {
        front: "What is a 'statistically significant' result?",
        back: "A result is statistically significant if the p-value < $\\alpha$, providing sufficient evidence to reject $H_0$.",
      },
      {
        front: "Does a small p-value prove the alternative hypothesis is true?",
        back: "No. A small p-value provides strong evidence against $H_0$, but does not 'prove' $H_a$. It indicates the data is unusual if $H_0$ were true.",
      },
      {
        front: "What is the decision rule for a hypothesis test?",
        back: "If p-value < $\\alpha$, reject $H_0$. If p-value $\\ge \\alpha$, fail to reject $H_0$.",
      },
    ],
  },
  {
    slug: "ci-means",
    examples: [
      {
        question: "What is a confidence interval and what does the confidence level represent?",
        solution: `A confidence interval is a range of plausible values for a population parameter, calculated from sample data. The confidence level (e.g., 95%) represents the long-run success rate: if we repeated our sampling procedure many times and computed a confidence interval each time, approximately 95% of those intervals would contain the true population mean $\\mu$. A 95% CI does NOT mean there is a 95% probability that $\\mu$ is in this specific interval; rather, the interval either contains $\\mu$ or it does not.`,
        difficulty: "EASY",
      },
      {
        question: "Given a sample of 25 students with mean $\\bar{x} = 72$, sample standard deviation $s = 8$, construct a 95% confidence interval for the population mean.",
        solution: `Conditions: Random sample, population approximately Normal or $n \\ge 30$ (assuming met).
Formula: $\\bar{x} \\pm t^* \\frac{s}{\\sqrt{n}}$ with $df = n - 1 = 24$.
From t-table: $t^*_{0.025, 24} ≈ 2.064$.
$SE = \\frac{8}{\\sqrt{25}} = \\frac{8}{5} = 1.6$.
CI: $72 \\pm 2.064(1.6) = 72 \\pm 3.30 = (68.70, 75.30)$.
We are 95% confident the population mean lies between 68.70 and 75.30.`,
        difficulty: "MEDIUM",
      },
      {
        question: "Two researchers compute 90% confidence intervals for the same population mean. Researcher A uses $n = 64$, Researcher B uses $n = 256$. Whose interval is narrower? Explain why.",
        solution: `Researcher B's interval is narrower. The margin of error is $ME = t^* \\frac{s}{\\sqrt{n}}$. Since $n$ appears in the denominator, larger $n$ produces smaller $SE$ and thus smaller $ME$.
For A: $SE = \\frac{s}{\\sqrt{64}} = \\frac{s}{8}$.
For B: $SE = \\frac{s}{\\sqrt{256}} = \\frac{s}{16}$.
Researcher B's standard error is half as large, so the margin of error is smaller, producing a narrower interval. This demonstrates why larger sample sizes provide more precise estimates—tighter confidence intervals.`,
        difficulty: "HARD",
      },
    ],
    flashcards: [
      {
        front: "Write the formula for a one-sample t-interval for the mean.",
        back: "$\\bar{x} \\pm t^* \\frac{s}{\\sqrt{n}}$ where $t^*$ is the critical value with $df = n-1$.",
      },
      {
        front: "What conditions must be met for a t-interval for the mean?",
        back: "Random sample and either (1) population is approximately Normal, or (2) $n \\ge 30$ (large sample).",
      },
      {
        front: "What is the degrees of freedom for a one-sample t-interval?",
        back: "$df = n - 1$, where $n$ is the sample size.",
      },
      {
        front: "How do you interpret a 95% confidence interval?",
        back: "If we repeated the sampling procedure many times, approximately 95% of the resulting intervals would contain the true population mean $\\mu$.",
      },
      {
        front: "Does a 95% CI mean there is a 95% probability $\\mu$ is in the interval?",
        back: "No. The parameter $\\mu$ is fixed; the interval either contains it or does not. The 95% refers to the long-run success rate of the procedure.",
      },
      {
        front: "How does confidence level affect the width of a confidence interval?",
        back: "Higher confidence level → larger $t^*$ → larger margin of error → wider interval.",
      },
      {
        front: "How does sample size affect the width of a confidence interval?",
        back: "Larger $n$ → smaller $SE = s/\\sqrt{n}$ → smaller margin of error → narrower interval.",
      },
      {
        front: "When should you use the t-distribution instead of the z-distribution?",
        back: "Use t when the population standard deviation $\\sigma$ is unknown and estimated by $s$. Use z when $\\sigma$ is known.",
      },
      {
        front: "What is the margin of error in a t-interval?",
        back: "The margin of error is $ME = t^* \\frac{s}{\\sqrt{n}}$, the 'plus or minus' part of the interval.",
      },
      {
        front: "As sample size increases, what happens to the t-critical value?",
        back: "As $df = n-1$ increases, $t^*$ decreases and approaches the corresponding z-value.",
      },
    ],
  },
  {
    slug: "type-errors",
    examples: [
      {
        question: "Define Type I and Type II errors. In the context of a legal trial, explain what each would mean.",
        solution: `Type I error: Rejecting $H_0$ when $H_0$ is true. Probability is $\\alpha$.
Type II error: Failing to reject $H_0$ when $H_a$ is true. Probability is $\\beta$.
In a trial: $H_0$ = defendant is innocent, $H_a$ = defendant is guilty.
Type I: Convicting an innocent person (rejecting innocent/true $H_0$).
Type II: Acquitting a guilty person (failing to reject innocent $H_0$ when guilt is true).
Society typically considers Type I more serious, setting strict conviction standards (low $\\alpha$).`,
        difficulty: "EASY",
      },
      {
        question: "A medical test for a disease has $\\alpha = 0.01$ and $\\beta = 0.10$. Interpret each in context and compute the power.",
        solution: `$\\alpha = 0.01$: If a person does NOT have the disease (true negative), there is a 1% chance the test incorrectly says they do (false positive).
$\\beta = 0.10$: If a person DOES have the disease (true positive condition), there is a 10% chance the test fails to detect it (false negative).
Power = $1 - \\beta = 1 - 0.10 = 0.90 = 90\\%$. This means the test correctly identifies disease presence 90% of the time when disease is present. A higher power is desirable for medical tests.`,
        difficulty: "MEDIUM",
      },
      {
        question: "Describe two practical factors that affect the power of a hypothesis test and explain how each influences power.",
        solution: `Factor 1 — Sample size ($n$): Larger $n$ increases power because it reduces standard error, making it easier to detect true differences. A large sample produces a narrower sampling distribution, so the test statistic is more extreme when $H_a$ is true.
Factor 2 — Significance level ($\\alpha$): Larger $\\alpha$ increases power. Setting $\\alpha = 0.10$ instead of $0.05$ makes it easier to reject $H_0$, but increases the Type I error rate. There is a trade-off between power and Type I error control.
Additional factor: Effect size (the true difference from hypothesized value). Larger true effect → higher power.`,
        difficulty: "HARD",
      },
    ],
  },
  {
    slug: "interpreting-ci",
    examples: [
      {
        question: "A 95% confidence interval for the mean is computed as (22, 28). Which interpretation is correct: (a) There is a 95% probability the true mean is between 22 and 28. (b) If we repeated the procedure many times, about 95% of intervals would contain the true mean. Explain why.",
        solution: `The correct interpretation is (b). In interpretation (a), the true population mean is a fixed (but unknown) value; it either is or is not between 22 and 28—there is no 'probability' once the interval is computed. Interpretation (b) is correct because it describes the long-run property: if we took many samples and computed a 95% CI for each, approximately 95% of those intervals would capture the true mean. Our single computed interval (22, 28) is one outcome of this procedure; we constructed it using a method that succeeds 95% of the time.`,
        difficulty: "EASY",
      },
      {
        question: "A researcher reports 'We are 90% confident the population proportion is between 0.45 and 0.55.' Is this statement correct? Rewrite it properly.",
        solution: `The statement is slightly imprecise. It suggests a probability statement about the unknown parameter, implying the parameter might be in a range of values (probability thinking).
Correct statement: 'In repeated sampling, approximately 90% of confidence intervals constructed this way would contain the true population proportion. Our interval is (0.45, 0.55).'
Or: 'We used a method that produces intervals containing the true proportion about 90% of the time. This interval is one such interval.'
The confidence level (90%) describes the procedure, not the specific interval.`,
        difficulty: "MEDIUM",
      },
      {
        question: "Two students construct 95% CIs: Student A gets (10, 14) with $n = 100$. Student B gets (9.5, 14.5) with $n = 25$. Student A claims their interval is 'more confident.' Explain the error and compare the true meanings.",
        solution: `Student A's error: Both intervals have 95% confidence level (from the method/procedure), not different 'confidence' values. The confidence level depends on the critical value and $\\alpha$, not on $n$. Both used the same 95% procedure.
The difference: Student A's interval is narrower (width = 4) because $n = 100$ produces smaller SE. Student B's interval is wider (width = 5) from $n = 25$ with larger SE. Both intervals have equal long-run success rates (95%), but Student A's is more precise (narrower) due to the larger sample. Student A should say 'My interval is more precise,' not 'more confident.'`,
        difficulty: "HARD",
      },
    ],
  },
  {
    slug: "tests-means",
    examples: [
      {
        question: "State the hypotheses for testing whether a population mean differs from 100, and identify whether this is one-tailed or two-tailed.",
        solution: `Null hypothesis: $H_0: \\mu = 100$ (the population mean is 100).
Alternative hypothesis: $H_a: \\mu \\ne 100$ (the population mean differs from 100).
This is a two-tailed test because the alternative specifies a difference in either direction ('not equal to'). Both tails of the t-distribution contribute to the p-value.`,
        difficulty: "EASY",
      },
      {
        question: "A sample of 36 high school athletes has $\\bar{x} = 68$ seconds and $s = 12$ seconds on a fitness test. Test whether the mean differs from 70 seconds at $\\alpha = 0.05$. Calculate the test statistic and provide the p-value range.",
        solution: `State: $H_0: \\mu = 70$ vs $H_a: \\mu \\ne 70$, $\\alpha = 0.05$.
Check: Random sample (assumed), population approximately Normal or $n = 36 \\ge 30$ ✓.
$t = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}} = \\frac{68 - 70}{12/\\sqrt{36}} = \\frac{-2}{2} = -1.0$ with $df = 35$.
From t-table with $df = 35$: For $|t| = 1.0$, the two-tailed p-value is between 0.30 and 0.40 (approximately 0.32).
Since p-value > 0.05, we fail to reject $H_0$.`,
        difficulty: "MEDIUM",
      },
      {
        question: "A farmer claims the mean weight of his apples is at least 200 grams. A sample of 25 apples yields $\\bar{x} = 195$ grams, $s = 15$ grams. Conduct a complete hypothesis test at $\\alpha = 0.05$ and conclude in context.",
        solution: `State: $H_0: \\mu = 200$ vs $H_a: \\mu < 200$ (one-tailed, claim is directional), $\\alpha = 0.05$.
Plan/Check: Random sample, population approximately Normal or $n = 25$ close to 30 (assume normality if reasonable).
Do: $t = \\frac{195 - 200}{15/\\sqrt{25}} = \\frac{-5}{3} ≈ -1.67$ with $df = 24$.
From t-table: $|t| = 1.67$ corresponds to one-tailed p-value between 0.05 and 0.10 (approximately 0.055).
Conclude: Since p-value ≈ 0.055 > 0.05, we fail to reject $H_0$. There is insufficient evidence to conclude the mean weight is less than 200 grams. The farmer's claim is supported by the data.`,
        difficulty: "HARD",
      },
    ],
  },
];

async function main() {
  console.log("Backfilling AP Statistics content (batch C: Units 5-7 Inference)...");
  for (const t of topics) {
    const topic = await prisma.topic.findUnique({
      where: { slug: t.slug },
    });
    if (!topic) {
      console.warn(`  ⚠ Topic not found: ${t.slug}`);
      continue;
    }

    if (t.flashcards && t.flashcards.length > 0) {
      const existing = await prisma.flashcard.findMany({
        where: { topicId: topic.id },
        select: { front: true },
      });
      const existingFronts = new Set(existing.map((f) => f.front.trim()));
      const toCreate = t.flashcards
        .filter((f) => !existingFronts.has(f.front.trim()))
        .map((f) => ({ topicId: topic.id, ...f }));
      if (toCreate.length)
        await prisma.flashcard.createMany({ data: toCreate });
    }

    if (t.examples && t.examples.length > 0) {
      const existing = await prisma.exampleProblem.findMany({
        where: { topicId: topic.id },
        select: { question: true, order: true },
      });
      const existingQs = new Set(existing.map((p) => p.question.trim()));
      const maxOrder = existing.reduce(
        (m, p) => Math.max(m, p.order ?? 0),
        0
      );
      const toCreate = t.examples
        .filter((e) => !existingQs.has(e.question.trim()))
        .map((e, i) => ({
          topicId: topic.id,
          order: maxOrder + i + 1,
          ...e,
        }));
      if (toCreate.length)
        await prisma.exampleProblem.createMany({ data: toCreate });
    }

    const fcCount = await prisma.flashcard.count({
      where: { topicId: topic.id },
    });
    const pCount = await prisma.exampleProblem.count({
      where: { topicId: topic.id },
    });
    console.log(
      `✓ ${t.slug}  flashcards=${fcCount}  problems=${pCount}`
    );
  }
  console.log("✓ Batch C complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
