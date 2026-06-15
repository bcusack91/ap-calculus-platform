import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Outliers in Data (Algebra 1).
 * Registry key: 'outliers-in-data' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'outliers-in-data',
    sections: [
      {
        id: 'out1-intro',
        type: 'text' as const,
        content: `# 🎯 Outliers in Data

**Part 1 of 5 — What Is an Outlier?**

---

### Topics in This Part

| Section |
|---------|
| The Idea of an Outlier |
| Spotting Outliers by Eye |
| Why a Single Value Can Mislead |

> 🔑 **Key Concept:** An **outlier** is a data value that lies unusually far from the rest of the data. One stray value can quietly distort an average, stretch a graph, and lead to wrong conclusions — so learning to *spot* and *handle* outliers is a core data skill.`,
      },
      {
        id: 'out1-idea',
        type: 'text' as const,
        content: `## The Idea of an Outlier

Imagine seven students report how many minutes it took them to get to school:

$$12,\\; 14,\\; 15,\\; 16,\\; 18,\\; 19,\\; 47$$

Six of the values huddle between $12$ and $19$ minutes. Then there's a $47$ — more than double the next-largest value. That lonely $47$ is an **outlier**: a value that doesn't fit the pattern of the rest.

Outliers can be:

- **Real and important** — maybe that student walked from across town, or a sensor caught a genuine spike.
- **Mistakes** — a typo ($47$ instead of $17$), a broken instrument, or the wrong units.

> 💡 An outlier is not automatically "bad data." It is simply a value worth a second look. The job of statistics is to *flag* it; the job of a thoughtful person is to *investigate why* it's there.`,
      },
      {
        id: 'out1-spot-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which value is the clearest outlier in $\\;21,\\; 23,\\; 24,\\; 25,\\; 26,\\; 90$?',
              options: ['$90$', '$21$', '$25$', '$26$'],
              correctAnswer: 0,
              explanation: 'Five values cluster between $21$ and $26$. The $90$ sits far above all of them, so it is the outlier.',
            },
            {
              question: 'An outlier is best described as a value that is…',
              options: ['always a mistake that must be deleted', 'unusually far from the rest of the data', 'simply the largest value in any data set', 'the value that appears most often'],
              correctAnswer: 1,
              explanation: 'An outlier is a value that lies unusually far from the bulk of the data. It is not necessarily an error, and it is not just whatever happens to be the maximum (the max is normal if it is close to the other values).',
            },
          ],
        },
      },
      {
        id: 'out1-mislead',
        type: 'text' as const,
        content: `## Why a Single Value Can Mislead

Return to the commute times. Their **mean** (average) is:

$$\\frac{12+14+15+16+18+19+47}{7} = \\frac{141}{7} \\approx 20.1 \\text{ minutes}$$

But look — **six of the seven students** got to school in under $20$ minutes! The "average" of $20.1$ is larger than almost every actual value, all because of one $47$.

If we set the outlier aside, the other six average:

$$\\frac{12+14+15+16+18+19}{6} = \\frac{94}{6} \\approx 15.7 \\text{ minutes}$$

That $15.7$ is a far more honest summary of a *typical* commute.

> ⚠️ The **mean is pulled toward outliers.** A single extreme value can drag the average up or down until it no longer represents the group. We will study this "tug-of-war" carefully in Part 4.`,
      },
      {
        id: 'out1-effect-drill',
        type: 'input-boxes' as const,
        content: `**See the Pull** 🧮

A small shop records the ages of $5$ customers:

$$19,\\; 21,\\; 22,\\; 24,\\; 64$$

**1)** Mean of all five ages $= \\,?$  *(it divides evenly)*
**2)** Mean of just the first four ages $\\;19, 21, 22, 24\\;$ (the outlier removed) $= \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['30', '21.5'],
          hint1: 'Add all five: $19+21+22+24+64 = 150$. Then divide by $5$.',
          hint2: 'The first four sum to $19+21+22+24 = 86$. Divide by $4$.',
          hint3: '$150 \\div 5 = 30$; $86 \\div 4 = 21.5$.',
          explanation: 'With the $64$-year-old, the mean is $150/5 = 30$ — older than four of the five customers! Drop that outlier and the mean falls to $86/4 = 21.5$, which matches the cluster of twenty-somethings. One value moved the average by almost $9$ years.',
        },
      },
      {
        id: 'out1-wrap',
        type: 'text' as const,
        content: `## Spotting by Eye Is Not Enough

In the examples above, the outliers were obvious. But what about a value that is *somewhat* large — is $32$ an outlier in a data set that runs $10$ to $28$? Eyeballing it is risky and subjective.

We need an **objective rule** that any two people would apply the same way. There are two standard ones:

| Rule | Idea |
|------|------|
| **$1.5 \\times \\text{IQR}$ rule** | flag values too far outside the middle half (Part 2) |
| **Standard-deviation rule** | flag values more than $2$ (or $3$) standard deviations from the mean (Part 3) |

> 🔑 Both rules turn the fuzzy phrase "unusually far" into a precise calculation. Part 2 tackles the most common one — the $1.5 \\times \\text{IQR}$ rule.`,
      },
      {
        id: 'out1-concept-dropdown',
        type: 'dropdown-select' as const,
        content: `**First Ideas** 🔽

Lock in the vocabulary from Part 1.`,
        exercise: {
          dropdowns: [
            { label: 'A value lying unusually far from the rest of the data is called a(n):', options: ['outlier', 'median', 'mean', 'quartile'] },
            { label: 'An outlier is automatically a mistake that must be deleted.', options: ['False — it might be real and important', 'True — always delete outliers'] },
            { label: 'Compared with the rest of the data, a single high outlier pulls the mean:', options: ['up', 'down', 'not at all'] },
          ],
          correctAnswers: ['outlier', 'False — it might be real and important', 'up'],
          hint1: 'Review the definition at the top of Part 1.',
          hint2: 'An outlier can be a genuine rare event, not just an error.',
          hint3: 'In the commute example, the lone $47$ raised the average above almost every actual value.',
          explanation: 'An **outlier** is a value far from the rest. It is not automatically an error — investigate first. A high outlier drags the mean **up** (a low one would drag it down).',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'outliers-in-data',
    sections: [
      {
        id: 'out2-intro',
        type: 'text' as const,
        content: `# 🎯 Outliers in Data

**Part 2 of 5 — The $1.5 \\times \\text{IQR}$ Rule**

---

> 🔑 **The Idea:** Measure the spread of the **middle half** of the data with the IQR, then build two **fences**. Any value beyond a fence is officially an outlier.`,
      },
      {
        id: 'out2-iqr',
        type: 'text' as const,
        content: `## Step 1 — Find the Quartiles and the IQR

The **interquartile range (IQR)** is the spread of the middle $50\\%$ of the data:

$$\\text{IQR} = Q_3 - Q_1$$

where $Q_1$ (the first quartile) is the median of the lower half of the sorted data and $Q_3$ (the third quartile) is the median of the upper half.

### Quick refresher

For sorted data $\\;3,\\, 7,\\, 8,\\, 12,\\, 13,\\, 14,\\, 15,\\, 16,\\, 17,\\, 38\\;$ ($n = 10$):

- The median is the average of the $5^{\\text{th}}$ and $6^{\\text{th}}$ values: $\\frac{13+14}{2} = 13.5$.
- Lower half $\\{3, 7, 8, 12, 13\\}$ → $Q_1 = 8$ (the middle one).
- Upper half $\\{14, 15, 16, 17, 38\\}$ → $Q_3 = 16$.

$$\\text{IQR} = Q_3 - Q_1 = 16 - 8 = 8$$

> 💡 The IQR ignores the extremes on purpose, so it is a **stable** measure of spread — exactly what we want when *hunting* the extremes.`,
      },
      {
        id: 'out2-fences',
        type: 'text' as const,
        content: `## Step 2 — Build the Fences

Multiply the IQR by $1.5$ and step that far outside each quartile:

$$\\text{Lower fence} = Q_1 - 1.5 \\cdot \\text{IQR}$$

$$\\text{Upper fence} = Q_3 + 1.5 \\cdot \\text{IQR}$$

> 🔑 **The rule:** A value **below the lower fence** or **above the upper fence** is an **outlier**. Everything between the fences is ordinary.

### Finishing our example

With $Q_1 = 8$, $Q_3 = 16$, and $\\text{IQR} = 8$:

$$\\text{Lower fence} = 8 - 1.5(8) = 8 - 12 = -4$$
$$\\text{Upper fence} = 16 + 1.5(8) = 16 + 12 = 28$$

Now scan the data $\\;3, 7, 8, 12, 13, 14, 15, 16, 17, 38$. Is anything below $-4$ or above $28$? Only the $38$ clears the upper fence — **$38$ is an outlier.** ✓

> ⚠️ A value exactly **on** a fence is **not** beyond it, so it is *not* flagged. Only values strictly past a fence count.`,
      },
      {
        id: 'out2-fence-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A data set has $Q_1 = 24$ and $Q_3 = 36$, so $\\text{IQR} = 12$. What is the upper fence?',
              options: ['$48$', '$54$', '$42$', '$36$'],
              correctAnswer: 1,
              explanation: 'Upper fence $= Q_3 + 1.5 \\cdot \\text{IQR} = 36 + 1.5(12) = 36 + 18 = 54$.',
            },
            {
              question: 'Using the same data ($Q_1 = 24$, $Q_3 = 36$, $\\text{IQR} = 12$), the fences are lower $= 24 - 18 = 6$ and upper $= 54$. Which value is an outlier?',
              options: ['a value of $5$', 'a value of $30$', 'a value of $50$', 'a value of $6$'],
              correctAnswer: 0,
              explanation: 'Outliers fall below the lower fence ($6$) or above the upper fence ($54$). Only $5 < 6$ clears a fence, so it is the outlier. The values $30$ and $50$ sit between the fences, and $6$ is exactly on the fence (not beyond it).',
            },
          ],
        },
      },
      {
        id: 'out2-fence-drill',
        type: 'input-boxes' as const,
        content: `**Build the Fences** 🧮

Monthly rainfall (cm), sorted, with the five-number summary
min $=2$, $Q_1 = 6$, median $=9$, $Q_3 = 14$, max $=31$.

**1)** $\\text{IQR} = Q_3 - Q_1 = \\,?$
**2)** Upper fence $= Q_3 + 1.5 \\cdot \\text{IQR} = \\,?$
**3)** Lower fence $= Q_1 - 1.5 \\cdot \\text{IQR} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '26', '-6'],
          hint1: '$\\text{IQR} = 14 - 6 = 8$.',
          hint2: 'Upper fence $= 14 + 1.5(8) = 14 + 12 = 26$.',
          hint3: 'Lower fence $= 6 - 1.5(8) = 6 - 12 = -6$.',
          explanation: 'IQR $= 14 - 6 = 8$. Upper fence $= 14 + 12 = 26$; lower fence $= 6 - 12 = -6$. The maximum of $31$ is above $26$, so that rainy month is an outlier.',
        },
      },
      {
        id: 'out2-apply',
        type: 'text' as const,
        content: `## Putting the Fences to Work

Once you have both fences, classifying every value is a simple scan: walk through the data and ask, for each one, *"Is it below the lower fence or above the upper fence?"*

Remember the boundary detail from the worked example:

> ⚠️ **Strictly beyond.** A value has to be *past* a fence to count. A value sitting **exactly on** a fence is inside the gate, so it is **not** an outlier.

The drill below gives you the fences directly — your only job is the verdict.`,
      },
      {
        id: 'out2-decide-dropdown',
        type: 'dropdown-select' as const,
        content: `**Outlier or Not?** 🔽

A data set has $Q_1 = 40$ and $Q_3 = 70$, so $\\text{IQR} = 30$. The fences are lower $= 40 - 1.5(30) = -5$ and upper $= 70 + 1.5(30) = 115$. For each value, decide.`,
        exercise: {
          dropdowns: [
            { label: 'A value of $120$:', options: ['outlier', 'not an outlier'] },
            { label: 'A value of $55$:', options: ['not an outlier', 'outlier'] },
            { label: 'A value of $115$ (exactly on the upper fence):', options: ['not an outlier', 'outlier'] },
            { label: 'A value of $-10$:', options: ['outlier', 'not an outlier'] },
          ],
          correctAnswers: ['outlier', 'not an outlier', 'not an outlier', 'outlier'],
          hint1: 'The fences are $-5$ (lower) and $115$ (upper). A value is an outlier only if it is strictly beyond a fence.',
          hint2: '$120 > 115$ → outlier. $-10 < -5$ → outlier. $55$ sits between the fences.',
          hint3: 'A value exactly equal to a fence is not beyond it, so $115$ is not an outlier.',
          explanation: '$120 > 115$ and $-10 < -5$ are outliers. $55$ lies between $-5$ and $115$. The value $115$ equals the fence — not beyond it — so it is not flagged.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'outliers-in-data',
    sections: [
      {
        id: 'out3-intro',
        type: 'text' as const,
        content: `# 🎯 Outliers in Data

**Part 3 of 5 — The Standard-Deviation Rule**

---

> 🔑 **A second test:** Instead of quartiles, measure how many **standard deviations** a value sits from the mean. If it is more than about $2$ away, it is unusually far out.`,
      },
      {
        id: 'out3-zscore',
        type: 'text' as const,
        content: `## Measuring Distance in Standard Deviations

The **standard deviation** $\\sigma$ measures the typical distance of values from the **mean** $\\bar{x}$. We can rewrite any value as a number of standard deviations away from the mean — called its **$z$-score**:

$$z = \\frac{x - \\bar{x}}{\\sigma}$$

- $z = 0$ means the value sits *exactly* at the mean.
- $z = 1$ means it is one standard deviation **above** the mean.
- $z = -2$ means it is two standard deviations **below** the mean.

> 🔑 **The rule:** A common cutoff flags a value as an outlier when its $z$-score satisfies $|z| > 2$ (some textbooks use the stricter $|z| > 3$). The farther $|z|$ is from $0$, the more unusual the value.`,
      },
      {
        id: 'out3-worked',
        type: 'text' as const,
        content: `## Worked Example: Test Scores

A class has a mean score of $\\bar{x} = 70$ with a standard deviation of $\\sigma = 5$. Using the $|z| > 2$ rule, check three scores.

**A score of $82$:**
$$z = \\frac{82 - 70}{5} = \\frac{12}{5} = 2.4$$
Since $|2.4| > 2$, the $82$ **is an outlier** (unusually high). ✓

**A score of $78$:**
$$z = \\frac{78 - 70}{5} = \\frac{8}{5} = 1.6$$
Since $|1.6| < 2$, the $78$ is **not** an outlier — just a good score.

**A score of $58$:**
$$z = \\frac{58 - 70}{5} = \\frac{-12}{5} = -2.4$$
Since $|-2.4| > 2$, the $58$ **is an outlier** (unusually low). ✓

> 💡 The $z$-score is a "universal ruler." A score of $82$ might be ordinary in one class and extraordinary in another — the $z$-score accounts for how spread out each class actually is.`,
      },
      {
        id: 'out3-z-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A data set has mean $\\bar{x} = 50$ and standard deviation $\\sigma = 4$. What is the $z$-score of the value $58$?',
              options: ['$2$', '$8$', '$0.5$', '$-2$'],
              correctAnswer: 0,
              explanation: '$z = \\frac{58 - 50}{4} = \\frac{8}{4} = 2$. The value sits exactly two standard deviations above the mean.',
            },
            {
              question: 'Under the $|z| > 2$ rule, which $z$-score belongs to an outlier?',
              options: ['$z = 1.8$', '$z = -0.4$', '$z = -2.5$', '$z = 2.0$'],
              correctAnswer: 2,
              explanation: 'An outlier needs $|z| > 2$ (strictly greater). $|-2.5| = 2.5 > 2$ qualifies. Note $z = 2.0$ is exactly $2$, not greater than $2$, so it is right on the boundary and not flagged by this rule.',
            },
          ],
        },
      },
      {
        id: 'out3-z-drill',
        type: 'input-boxes' as const,
        content: `**Compute the $z$-score** 🧮

A factory fills bottles with a mean of $\\bar{x} = 500$ mL and a standard deviation of $\\sigma = 8$ mL.

**1)** A bottle holds $516$ mL. Its $z$-score is $\\,?$
**2)** A bottle holds $480$ mL. Its $z$-score is $\\,?$
**3)** Using $|z| > 2$, how many of these two bottles are outliers? $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '-2.5', '1'],
          hint1: '$z = \\frac{516 - 500}{8} = \\frac{16}{8}$.',
          hint2: '$z = \\frac{480 - 500}{8} = \\frac{-20}{8} = -2.5$.',
          hint3: 'The $516$ bottle has $|z| = 2$ (not $> 2$); the $480$ bottle has $|z| = 2.5 > 2$. So exactly one is an outlier.',
          explanation: '$516$: $z = 16/8 = 2$ (exactly $2$, so not beyond the cutoff). $480$: $z = -20/8 = -2.5$, and $|-2.5| > 2$, so it is an outlier. That makes $1$ outlier.',
        },
      },
      {
        id: 'out3-two-rules',
        type: 'text' as const,
        content: `## Two Rules, Side by Side

You now own **two** outlier tests. They usually agree, but they are built from different ingredients:

| | $1.5 \\times \\text{IQR}$ rule | Standard-deviation rule |
|---|------------------------------|--------------------------|
| Center used | median | mean $\\bar{x}$ |
| Spread used | IQR ($Q_3 - Q_1$) | standard deviation $\\sigma$ |
| Outlier when | beyond a fence | $|z| > 2$ |
| Best when | data may be skewed | data is roughly symmetric |

> 💡 Because the IQR rule leans on the *median and quartiles*, it is itself resistant to outliers — which is why it's the go-to for messy, skewed data. The next check makes sure you can tell the two rules apart.`,
      },
      {
        id: 'out3-compare-dropdown',
        type: 'dropdown-select' as const,
        content: `**Two Rules, One Goal** 🔽

Match each phrase to the rule it describes.`,
        exercise: {
          dropdowns: [
            { label: 'Uses the median and quartiles:', options: ['$1.5 \\times \\text{IQR}$ rule', 'standard-deviation rule'] },
            { label: 'Uses the mean and standard deviation:', options: ['standard-deviation rule', '$1.5 \\times \\text{IQR}$ rule'] },
            { label: 'Flags a value when $|z| > 2$:', options: ['standard-deviation rule', '$1.5 \\times \\text{IQR}$ rule'] },
            { label: 'Flags a value beyond $Q_1 - 1.5\\,\\text{IQR}$ or $Q_3 + 1.5\\,\\text{IQR}$:', options: ['$1.5 \\times \\text{IQR}$ rule', 'standard-deviation rule'] },
          ],
          correctAnswers: ['$1.5 \\times \\text{IQR}$ rule', 'standard-deviation rule', 'standard-deviation rule', '$1.5 \\times \\text{IQR}$ rule'],
          hint1: 'The IQR rule is built from quartiles; the other rule is built from the mean.',
          hint2: 'A $z$-score compares a value to the mean using the standard deviation.',
          hint3: 'Fences ($Q_1 - 1.5\\,\\text{IQR}$, $Q_3 + 1.5\\,\\text{IQR}$) belong to the IQR rule.',
          explanation: 'The $1.5 \\times \\text{IQR}$ rule uses quartiles and fences. The standard-deviation rule uses the mean, $\\sigma$, and the $z$-score cutoff $|z| > 2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'outliers-in-data',
    sections: [
      {
        id: 'out4-intro',
        type: 'text' as const,
        content: `# 🎯 Outliers in Data

**Part 4 of 5 — How Outliers Affect Statistics**

---

> 🔑 **Big Idea:** Some statistics get yanked around by outliers and some shrug them off. Knowing which is which tells you the *right* numbers to report when an outlier is present.`,
      },
      {
        id: 'out4-resistant',
        type: 'text' as const,
        content: `## Resistant vs. Non-Resistant

A statistic is **resistant** (or *robust*) if a single outlier barely changes it. It is **non-resistant** if an outlier can move it a lot.

| Statistic | Measures | Resistant to outliers? |
|-----------|----------|------------------------|
| **Mean** | center | ❌ No — gets pulled toward the outlier |
| **Median** | center | ✅ Yes — only the middle position matters |
| **Range** | spread | ❌ No — uses the very extremes |
| **IQR** | spread | ✅ Yes — uses only the middle half |
| **Standard deviation** | spread | ❌ No — squares the distance to the mean |

> 🔑 **Rule of thumb:** When a data set contains an outlier, report the **median** for center and the **IQR** for spread. They describe the *typical* value honestly.`,
      },
      {
        id: 'out4-worked',
        type: 'text' as const,
        content: `## Worked Example: Adding One Outlier

Start with five values:

$$2,\\; 4,\\; 5,\\; 6,\\; 8$$

- **Mean** $= \\dfrac{2+4+5+6+8}{5} = \\dfrac{25}{5} = 5$
- **Median** $= 5$ (the middle value)

Now toss in a single outlier, $50$:

$$2,\\; 4,\\; 5,\\; 6,\\; 8,\\; 50$$

- **Mean** $= \\dfrac{2+4+5+6+8+50}{6} = \\dfrac{75}{6} = 12.5$
- **Median** $= \\dfrac{5+6}{2} = 5.5$ (average of the two middle values)

| | Before | After | Change |
|---|--------|-------|--------|
| Mean | $5$ | $12.5$ | **$+7.5$** 😱 |
| Median | $5$ | $5.5$ | $+0.5$ |

> ⚠️ The mean leaped by $7.5$, while the median barely budged. This is exactly why a report that hides an outlier behind "the average" can be so misleading.`,
      },
      {
        id: 'out4-effect-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which measure of center is most affected by an outlier?',
              options: ['the mean', 'the median', 'the mode', 'they are all affected equally'],
              correctAnswer: 0,
              explanation: 'The mean adds in every value, so a single extreme number pulls it toward itself. The median depends only on the middle position, so it is resistant.',
            },
            {
              question: 'A salary data set has a large outlier (one executive earns far more than everyone else). Which pair of statistics best describes a typical worker?',
              options: ['mean and range', 'median and IQR', 'mean and standard deviation', 'mode and range'],
              correctAnswer: 1,
              explanation: 'With an outlier present, use the resistant statistics: the **median** for center and the **IQR** for spread. The mean, range, and standard deviation are all distorted by the high salary.',
            },
          ],
        },
      },
      {
        id: 'out4-effect-drill',
        type: 'input-boxes' as const,
        content: `**Measure the Damage** 🧮

A study group's quiz scores:

$$70,\\; 72,\\; 74,\\; 76,\\; 78$$

**1)** Mean $= \\,?$
**2)** Median $= \\,?$

Now a sixth member scores an $8$, giving $\\;8,\\, 70,\\, 72,\\, 74,\\, 76,\\, 78$.

**3)** New mean $= \\,?$  *(it divides evenly)*
**4)** New median $= \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['74', '74', '63', '73'],
          hint1: 'Original mean: $(70+72+74+76+78)/5 = 370/5$. Original median is the middle of five sorted values.',
          hint2: 'New sum: $8+70+72+74+76+78 = 378$. Divide by $6$.',
          hint3: 'With six sorted values $8,70,72,74,76,78$, the median is the average of the $3^{\\text{rd}}$ and $4^{\\text{th}}$: $(72+74)/2$.',
          explanation: 'Original: mean $= 370/5 = 74$, median $= 74$. After the $8$: mean $= 378/6 = 63$ and median $= (72+74)/2 = 73$. The single low outlier dropped the mean by $11$ points but the median by only $1$ — vivid proof that the median resists outliers.',
        },
      },
      {
        id: 'out4-why-resist',
        type: 'text' as const,
        content: `## Why Some Statistics Resist and Others Don't

The pattern in that drill is no accident. It comes down to **what each statistic actually uses**:

- The **mean** sums *every* value, so an extreme number changes the total — and the average shifts.
- The **range** is built from the *very* smallest and largest values, so an outlier *is* one of its inputs.
- The **median** depends only on the *middle position*, so a far-off value just sits at the end without moving it.
- The **IQR** uses the quartiles — the edges of the middle half — and ignores the extremes entirely.

> 🔑 **Memory hook:** statistics built from *positions in the middle* (median, IQR) resist outliers; statistics built from *every value or the extremes* (mean, range, standard deviation) do not.

Use the next check to sort each statistic into the right bucket.`,
      },
      {
        id: 'out4-resist-dropdown',
        type: 'dropdown-select' as const,
        content: `**Resistant or Not?** 🔽

For each statistic, choose whether a single outlier changes it a lot or barely at all.`,
        exercise: {
          dropdowns: [
            { label: 'The mean is:', options: ['easily moved by an outlier', 'resistant to outliers'] },
            { label: 'The median is:', options: ['resistant to outliers', 'easily moved by an outlier'] },
            { label: 'The range (max $-$ min) is:', options: ['easily moved by an outlier', 'resistant to outliers'] },
            { label: 'The IQR is:', options: ['resistant to outliers', 'easily moved by an outlier'] },
          ],
          correctAnswers: ['easily moved by an outlier', 'resistant to outliers', 'easily moved by an outlier', 'resistant to outliers'],
          hint1: 'Resistant statistics use the middle of the data; non-resistant ones use every value or the extremes.',
          hint2: 'The median and IQR ignore the extremes, so they stay steady.',
          hint3: 'The mean uses every value, and the range uses the very smallest and largest — both feel an outlier strongly.',
          explanation: 'Mean and range are easily moved (they use every value / the extremes). Median and IQR are resistant (they depend on middle positions only).',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'outliers-in-data',
    sections: [
      {
        id: 'out5-intro',
        type: 'text' as const,
        content: `# 🎯 Outliers in Data

**Part 5 of 5 — Causes, Decisions & Mastery Check**

---

You can now (1) recognize an outlier, (2) flag one with the $1.5 \\times \\text{IQR}$ rule, (3) flag one with the $z$-score rule, and (4) describe how outliers warp the mean, range, and standard deviation. The last skill is judgment: **what to do** once you've found one.`,
      },
      {
        id: 'out5-causes',
        type: 'text' as const,
        content: `## Where Outliers Come From — and What to Do

| Cause | Example | Sensible action |
|-------|---------|-----------------|
| **Data-entry error** | $470$ typed for $47$ | Fix it if you can, or remove it |
| **Measurement error** | a broken scale reads $0$ | Discard the faulty reading |
| **Wrong units** | height in cm mixed with m | Convert to consistent units |
| **A genuine rare event** | a record-breaking flood | **Keep it** — it is real and meaningful |

> ⚠️ **Never delete an outlier just because it is inconvenient.** Removing real data to make a chart look tidy is a form of dishonesty. Investigate the *cause* first; only remove a value if you have good reason to believe it is an error.

> 💡 A good report often shows the analysis **both ways** — with and without the outlier — and explains the difference, so the reader can judge for themselves.`,
      },
      {
        id: 'out5-causes-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A spreadsheet lists human heights in meters, but one entry reads $172$ (clearly centimeters). The best response is to…',
              options: ['delete the row without comment', 'convert $172$ cm to $1.72$ m so the units match', 'leave it, since outliers should never be touched', 'change every other value to centimeters too'],
              correctAnswer: 1,
              explanation: 'This outlier is caused by a unit mix-up. The fix is to convert it to the correct units ($1.72$ m), not to delete real information or change everything else.',
            },
            {
              question: 'A hydrologist records river levels and finds one day far above the rest — caused by a genuine, well-documented flood. What should she do?',
              options: ['delete it so the average looks normal', 'keep it; it is a real and important data point', 'round it down to the next-highest value', 'ignore the whole data set'],
              correctAnswer: 1,
              explanation: 'A genuine rare event is real data. Deleting it would hide an important truth. Keep it, and report the analysis carefully (ideally both with and without it).',
            },
          ],
        },
      },
      {
        id: 'out5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Full Analysis** 🧮

Ages of people at a small workshop, sorted, with $n = 9$:

$$12,\\; 13,\\; 14,\\; 15,\\; 16,\\; 17,\\; 18,\\; 19,\\; 52$$

The five-number summary is min $=12$, $Q_1 = 13.5$, median $=16$, $Q_3 = 18.5$, max $=52$.

**1)** $\\text{IQR} = Q_3 - Q_1 = \\,?$
**2)** Upper fence $= Q_3 + 1.5 \\cdot \\text{IQR} = \\,?$  *(decimal is fine)*
**3)** How many values are outliers? $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '26', '1'],
          hint1: '$\\text{IQR} = 18.5 - 13.5 = 5$.',
          hint2: 'Upper fence $= 18.5 + 1.5(5) = 18.5 + 7.5 = 26$.',
          hint3: 'Lower fence $= 13.5 - 7.5 = 6$. Only $52$ is above $26$ (nothing is below $6$), so there is $1$ outlier.',
          explanation: 'IQR $= 18.5 - 13.5 = 5$. Upper fence $= 18.5 + 7.5 = 26$; lower fence $= 13.5 - 7.5 = 6$. The value $52 > 26$ is the only outlier, so the answer is $1$ — almost certainly a teacher among the students.',
        },
      },
      {
        id: 'out5-toolkit',
        type: 'text' as const,
        content: `## Your Outlier Toolkit

Before the final practice, here is everything in one place:

| Goal | Key move |
|------|----------|
| Spot by the IQR rule | flag values beyond $Q_1 - 1.5\\,\\text{IQR}$ or $Q_3 + 1.5\\,\\text{IQR}$ |
| Spot by the $z$-score rule | flag values with $|z| > 2$, where $z = \\dfrac{x - \\bar{x}}{\\sigma}$ |
| Report center with an outlier | use the **median** (resistant) |
| Report spread with an outlier | use the **IQR** (resistant) |
| Decide what to do | find the *cause* first; keep genuine data, fix or remove true errors |

> ⚠️ A value exactly **on** a fence (or with $|z|$ exactly $2$) is **not** an outlier — it has to be strictly beyond the cutoff.`,
      },
      {
        id: 'out5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A data set has $Q_1 = 18$, $Q_3 = 30$ (so $\\text{IQR} = 12$). What is the lower fence?',
              options: ['$0$', '$6$', '$12$', '$36$'],
              correctAnswer: 0,
              explanation: 'Lower fence $= Q_1 - 1.5 \\cdot \\text{IQR} = 18 - 1.5(12) = 18 - 18 = 0$.',
            },
            {
              question: 'A value has mean $\\bar{x} = 100$, standard deviation $\\sigma = 10$, and equals $134$. Is it an outlier under the $|z| > 2$ rule?',
              options: ['Yes — its $z$-score is $3.4$', 'No — its $z$-score is $1.4$', 'No — its $z$-score is $0.34$', 'Yes — its $z$-score is $34$'],
              correctAnswer: 0,
              explanation: '$z = \\frac{134 - 100}{10} = \\frac{34}{10} = 3.4$. Since $|3.4| > 2$, the value is an outlier.',
            },
          ],
        },
      },
      {
        id: 'out5-closing',
        type: 'text' as const,
        content: `## One Last Word

Finding an outlier is the beginning of the story, not the end. A flagged value is an invitation to ask **"why?"** — a typo, a broken sensor, or a genuinely remarkable event. The math points at the unusual value; *you* decide what it means.

Three questions ahead to lock it all in.`,
      },
      {
        id: 'out5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A data set has $Q_1 = 50$ and $Q_3 = 70$, so $\\text{IQR} = 20$. Which value is an outlier?',
              options: ['$105$', '$65$', '$45$', '$85$'],
              correctAnswer: 0,
              explanation: 'Fences: lower $= 50 - 1.5(20) = 20$ and upper $= 70 + 1.5(20) = 100$. Only $105 > 100$ clears a fence. The values $45$, $65$, and $85$ all lie between $20$ and $100$.',
            },
            {
              question: 'When a data set contains an outlier, which measure of center best represents a typical value?',
              options: ['the median', 'the mean', 'the range', 'the maximum'],
              correctAnswer: 0,
              explanation: 'The median is resistant to outliers, so it best reflects a typical value. The mean is pulled toward the outlier; the range and maximum are not measures of center at all.',
            },
            {
              question: 'A value has a $z$-score of $z = -2.6$ under the $|z| > 2$ rule. This value is…',
              options: ['an outlier, unusually far below the mean', 'an outlier, unusually far above the mean', 'not an outlier — its distance is too small', 'exactly equal to the mean'],
              correctAnswer: 0,
              explanation: '$|-2.6| = 2.6 > 2$, so it is an outlier. The negative sign means it sits about $2.6$ standard deviations **below** the mean.',
            },
          ],
        },
      },
    ],
  },
]
