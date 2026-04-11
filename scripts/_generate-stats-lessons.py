#!/usr/bin/env python3
"""Generate AP Statistics interactive lesson files for 8 new topics."""
import os

BASE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                     'src', 'data', 'interactive-lessons')

TOPICS = [
    {
        'slug': 'collecting-data-apstats',
        'exportPrefix': 'apStatsCollectingData',
        'parts': [
            {
                'title': 'Types of Studies',
                'sections': [
                    ('intro', 'text', """# 📊 Collecting Data & Study Design

**Part 1 of 7 — Observational Studies vs. Experiments**

---

### Two Ways to Gather Data

| Study Type | Description | Can Establish Causation? |
|-----------|-------------|------------------------|
| **Observational Study** | Researcher observes without intervening | ❌ No — only association |
| **Experiment** | Researcher actively imposes treatments | ✅ Yes — with proper design |

> 🔑 **Key Principle:** Only a well-designed **experiment** can establish a cause-and-effect relationship.

---

### Observational Studies

In an observational study, researchers simply observe and record data without manipulating any variables.

**Types:**
- **Retrospective** — looks at past data (e.g., medical records)
- **Prospective** — follows subjects forward in time (e.g., tracking diet over 10 years)

**Example:** Studying whether coffee drinkers have lower rates of depression by surveying existing habits.

> ⚠️ **Confounding variables** lurk in observational studies. Maybe coffee drinkers also exercise more — that could be the real reason for lower depression.

---

### Experiments

In an experiment, the researcher **imposes treatments** on subjects and measures the response.

**Key Elements:**
| Element | Definition |
|---------|-----------|
| **Explanatory variable** | What the researcher manipulates (treatment) |
| **Response variable** | What is measured as the outcome |
| **Experimental units** | The individuals being studied |
| **Treatments** | Specific conditions applied to units |"""),
                    ('mcq1', 'multiple-choice', """**Concept Check** 🎯""",
                     [
                         {'q': 'A researcher surveys 500 adults about their exercise habits and cholesterol levels. This is:',
                          'opts': ['An experiment', 'An observational study', 'A census', 'A simulation'],
                          'ans': 1, 'exp': 'No treatment was imposed — the researcher only observed existing habits. This is an observational study.'},
                         {'q': 'Which study design can establish causation?',
                          'opts': ['Observational study', 'Survey', 'Randomized experiment', 'Case study'],
                          'ans': 2, 'exp': 'Only randomized experiments with proper controls can establish cause-and-effect relationships.'},
                         {'q': 'A confounding variable is one that:',
                          'opts': ['Is the response variable', 'Is related to both the explanatory and response variables', 'Is randomly assigned', 'Has no effect on the study'],
                          'ans': 1, 'exp': 'A confounding variable is associated with both the explanatory and response variables, making it impossible to determine which is the true cause.'},
                     ]),
                    ('input', 'input-boxes', """**Identifying Study Components** 🧮

A pharmaceutical company randomly assigns 200 patients to receive either a new drug or a placebo, then measures blood pressure after 8 weeks.

**1)** What is the explanatory variable? (drug/placebo or blood pressure)

**2)** How many treatment groups are there?

**3)** Can this study establish causation? (yes or no)""",
                     {'boxes': 3, 'answers': ['drug/placebo', '2', 'yes'],
                      'h1': 'The explanatory variable is what the researcher manipulates.',
                      'h2': 'Two groups: drug and placebo.',
                      'h3': 'Random assignment + imposed treatment = causation possible.',
                      'exp': '1) drug/placebo (what is manipulated). 2) 2 groups. 3) Yes — randomized experiment.'}),
                    ('dropdown', 'dropdown-select', """**Study Design Classification** 🔽""",
                     {'dropdowns': [
                         {'label': 'Surveying students about study habits and GPA', 'options': ['Experiment', 'Observational study']},
                         {'label': 'Randomly assigning fertilizer types to garden plots', 'options': ['Experiment', 'Observational study']},
                         {'label': 'Reviewing hospital records for surgery outcomes', 'options': ['Experiment', 'Observational study']},
                         {'label': 'Giving half a class tutoring sessions, half none', 'options': ['Experiment', 'Observational study']},
                     ],
                      'answers': ['Observational study', 'Experiment', 'Observational study', 'Experiment'],
                      'h1': 'No manipulation → observational.', 'h2': 'Random assignment of treatments → experiment.',
                      'h3': 'Past records, no intervention.', 'exp': 'Experiments impose treatments; observational studies do not.'}),
                ]
            },
            {
                'title': 'Sampling Methods',
                'sections': [
                    ('intro', 'text', """# 🎲 Sampling Methods

**Part 2 of 7 — How to Select a Representative Sample**

---

### Why Sampling Matters

We rarely have the resources to study an **entire population**. Instead, we take a **sample** and use it to make inferences about the population.

> 🔑 **Goal:** The sample should be **representative** of the population — every individual should have a known chance of being selected.

---

### Probability Sampling Methods

| Method | How It Works | Advantage |
|--------|-------------|-----------|
| **Simple Random Sample (SRS)** | Every individual has an equal chance of selection | Gold standard — no systematic bias |
| **Stratified Random Sample** | Divide into groups (strata), then SRS within each | Ensures representation of all subgroups |
| **Cluster Sample** | Randomly select entire groups (clusters), survey all within | Cost-effective for geographically spread populations |
| **Systematic Sample** | Select every $k$th individual from a list | Easy to implement |

---

### Simple Random Sample (SRS)

An SRS of size $n$ means every set of $n$ individuals has an **equal chance** of being the chosen sample.

**How to do it:**
1. Assign each individual a number
2. Use a random number generator (or table) to select $n$ numbers
3. The corresponding individuals form your sample

**Example:** To sample 50 students from a school of 800, number them 001–800 and use a random number table to pick 50 numbers.

---

### Stratified Random Sampling

1. Divide the population into **strata** (groups that are similar within)
2. Take an SRS from **each** stratum
3. Combine the SRS results

**When to use:** When the population has distinct subgroups (e.g., grade levels, gender, income brackets)

**Example:** A school with 400 freshmen and 300 seniors → sample 40 freshmen (SRS) and 30 seniors (SRS)."""),
                    ('mcq1', 'multiple-choice', """**Sampling Methods Check** 🎯""",
                     [
                         {'q': 'A researcher numbers all 2,000 employees and uses a random number generator to select 100. This is:',
                          'opts': ['Stratified sample', 'Simple random sample', 'Cluster sample', 'Convenience sample'],
                          'ans': 1, 'exp': 'Every employee has an equal chance of selection using random numbers — this is an SRS.'},
                         {'q': 'A pollster divides voters by age group, then randomly selects from each group. This is:',
                          'opts': ['Cluster sampling', 'Systematic sampling', 'Stratified sampling', 'Voluntary response'],
                          'ans': 2, 'exp': 'Dividing into groups (strata) then SRS within each = stratified sampling.'},
                         {'q': 'Which sampling method is most likely to suffer from undercoverage?',
                          'opts': ['SRS', 'Stratified', 'Convenience', 'Systematic'],
                          'ans': 2, 'exp': 'Convenience samples only include easily accessible individuals, systematically excluding parts of the population.'},
                     ]),
                    ('input', 'input-boxes', """**Sampling Calculations** 🧮

A school has 600 students: 200 freshmen, 150 sophomores, 150 juniors, and 100 seniors. A stratified sample of 60 students is taken proportionally.

**1)** How many freshmen should be sampled? (200/600 × 60)

**2)** How many seniors should be sampled? (100/600 × 60)

**3)** In a systematic sample of every 10th student from a list of 600, how many students are in the sample?""",
                     {'boxes': 3, 'answers': ['20', '10', '60'],
                      'h1': '200/600 × 60 = 20.',
                      'h2': '100/600 × 60 = 10.',
                      'h3': '600/10 = 60.',
                      'exp': '1) 20 freshmen. 2) 10 seniors. 3) 60 students (every 10th from 600).'}),
                    ('dropdown', 'dropdown-select', """**Identify the Sampling Method** 🔽""",
                     {'dropdowns': [
                         {'label': 'Selecting every 5th name from an alphabetized list', 'options': ['SRS', 'Stratified', 'Cluster', 'Systematic']},
                         {'label': 'Randomly choosing 3 classrooms and surveying all students in them', 'options': ['SRS', 'Stratified', 'Cluster', 'Systematic']},
                         {'label': 'Dividing by major, then randomly selecting from each major', 'options': ['SRS', 'Stratified', 'Cluster', 'Systematic']},
                     ],
                      'answers': ['Systematic', 'Cluster', 'Stratified'],
                      'h1': 'Every kth → systematic.', 'h2': 'Whole groups selected → cluster.',
                      'h3': 'Groups + SRS within each → stratified.',
                      'exp': 'Systematic: every kth. Cluster: select whole groups. Stratified: divide then sample within.'}),
                ]
            },
            {
                'title': 'Bias in Sampling',
                'sections': [
                    ('intro', 'text', """# ⚠️ Sources of Bias

**Part 3 of 7 — What Can Go Wrong**

---

### Types of Bias

| Bias Type | What Goes Wrong | Example |
|-----------|----------------|---------|
| **Selection bias** | Some members of the population are systematically excluded | Phone survey excludes people without phones |
| **Nonresponse bias** | Selected individuals don't participate | Mail survey — people who respond may differ from those who don't |
| **Response bias** | Respondents give inaccurate answers | Wording of questions influences answers |
| **Voluntary response bias** | Only people with strong opinions respond | Online polls attract extremists |
| **Undercoverage** | Part of the population has no chance of being selected | Using a phone book misses unlisted numbers |

> 🔑 **A biased sampling method will produce biased results no matter how large the sample.**

---

### Reducing Bias

- Use **random selection** to avoid selection bias
- Follow up with **nonrespondents** to reduce nonresponse bias
- Use **neutral wording** and **anonymous surveys** to reduce response bias
- Match sample demographics to population demographics"""),
                    ('mcq1', 'multiple-choice', """**Bias Identification** 🎯""",
                     [
                         {'q': 'A radio station asks listeners to call in and vote on an issue. This suffers from:',
                          'opts': ['Selection bias', 'Voluntary response bias', 'Nonresponse bias', 'Undercoverage'],
                          'ans': 1, 'exp': 'Only listeners who feel strongly will call — voluntary response bias.'},
                         {'q': 'Increasing sample size will fix:',
                          'opts': ['Voluntary response bias', 'Selection bias', 'Neither — bias is not reduced by larger samples', 'Both types of bias'],
                          'ans': 2, 'exp': 'Bias is a systematic error in the sampling method. Larger samples reduce variability but NOT bias.'},
                         {'q': 'A survey asks "Don\'t you agree that taxes are too high?" This introduces:',
                          'opts': ['Selection bias', 'Response bias', 'Nonresponse bias', 'Undercoverage'],
                          'ans': 1, 'exp': 'Leading question wording pushes respondents toward a particular answer — response bias.'},
                     ]),
                    ('input', 'input-boxes', """**Bias Analysis** 🧮

**1)** A survey is conducted at a shopping mall on a Wednesday afternoon. Name the type of bias this introduces. (selection, response, nonresponse, or voluntary response)

**2)** Only 15 of 100 mailed surveys are returned. This is an example of what type of bias?

**3)** True or false: Doubling the sample size from 500 to 1000 will eliminate bias. (true or false)""",
                     {'boxes': 3, 'answers': ['selection', 'nonresponse', 'false'],
                      'h1': 'Who shops at a mall on Wednesday afternoon? Not everyone.',
                      'h2': '85% did not respond — are they different from those who did?',
                      'h3': 'Bias is systematic error, not random error.',
                      'exp': '1) Selection bias — excludes working people. 2) Nonresponse bias. 3) False — bias persists regardless of sample size.'}),
                ]
            },
            {
                'title': 'Experimental Design',
                'sections': [
                    ('intro', 'text', """# 🔬 Principles of Experimental Design

**Part 4 of 7 — Control, Randomize, Replicate, Block**

---

### Four Principles of Good Experiments

| Principle | What It Means | Why It Matters |
|-----------|--------------|----------------|
| **Control** | Hold extraneous variables constant or use a control group | Isolates the effect of the treatment |
| **Randomization** | Randomly assign subjects to treatment groups | Equalizes confounding variables across groups |
| **Replication** | Use enough subjects to detect real effects | Reduces chance variation |
| **Blocking** | Group similar subjects together, then randomize within blocks | Controls for known sources of variation |

> 🔑 **Random assignment** → reduces confounding → supports causal claims

---

### Completely Randomized Design

The simplest experimental design:
1. Pool all experimental units
2. Randomly assign each to a treatment group
3. Compare responses

**Example:** 60 patients randomly assigned to Drug A (30) vs. Placebo (30)

---

### Randomized Block Design

When you know a variable (like age or gender) might affect results:
1. **Block** subjects by that variable
2. **Randomly assign** treatments within each block

**Example:** Block by gender (male/female), then randomly assign drug/placebo within each gender block

---

### Matched Pairs Design

A special case of blocking where each block has exactly 2 units (or the same person gets both treatments):
- **Two matched subjects:** one gets treatment, one gets control
- **Same subject:** each person serves as their own control (crossover design)"""),
                    ('mcq1', 'multiple-choice', """**Design Principles** 🎯""",
                     [
                         {'q': 'The purpose of random assignment in experiments is to:',
                          'opts': ['Ensure a large sample size', 'Reduce confounding variables', 'Eliminate the need for a control group', 'Make the study observational'],
                          'ans': 1, 'exp': 'Random assignment distributes confounding variables evenly across treatment groups.'},
                         {'q': 'A study blocks subjects by age before randomizing treatment. This is a:',
                          'opts': ['Completely randomized design', 'Randomized block design', 'Matched pairs design', 'Observational study'],
                          'ans': 1, 'exp': 'Blocking by age, then randomizing within blocks = randomized block design.'},
                         {'q': 'In a matched pairs experiment, subjects are:',
                          'opts': ['All given the same treatment', 'Paired by a similar characteristic', 'Randomly selected from different populations', 'Never given a placebo'],
                          'ans': 1, 'exp': 'Matched pairs uses subjects paired by characteristics, or the same person gets both treatments.'},
                     ]),
                    ('dropdown', 'dropdown-select', """**Identify the Design** 🔽""",
                     {'dropdowns': [
                         {'label': '100 mice randomly assigned to 4 diet groups', 'options': ['Completely randomized', 'Randomized block', 'Matched pairs']},
                         {'label': 'Runners paired by speed, one gets caffeine, one placebo', 'options': ['Completely randomized', 'Randomized block', 'Matched pairs']},
                         {'label': 'Students grouped by GPA, then randomly assigned tutoring methods', 'options': ['Completely randomized', 'Randomized block', 'Matched pairs']},
                         {'label': 'Each patient tries both Drug A and Drug B in random order', 'options': ['Completely randomized', 'Randomized block', 'Matched pairs']},
                     ],
                      'answers': ['Completely randomized', 'Matched pairs', 'Randomized block', 'Matched pairs'],
                      'h1': 'No blocking, just random assignment.', 'h2': 'Pairs of similar subjects.',
                      'h3': 'Blocks by GPA, then randomize within.', 'exp': 'CRD: all random. Block: group then randomize. Matched pairs: pairs or crossover.'}),
                ]
            },
            {
                'title': 'Random Variables',
                'sections': [
                    ('intro', 'text', """# 🎰 Random Variables & Expected Value

**Part 5 of 7 — Discrete Random Variables**

---

### What Is a Random Variable?

A **random variable** $X$ assigns a numerical value to each outcome of a random process.

| Type | Values | Example |
|------|--------|---------|
| **Discrete** | Countable (finite or countably infinite) | Number of heads in 10 flips |
| **Continuous** | Any value in an interval | Height, weight, time |

---

### Probability Distribution of a Discrete RV

A table showing all values and their probabilities:

| $x$ | 0 | 1 | 2 | 3 |
|-----|---|---|---|---|
| $P(X=x)$ | 0.1 | 0.3 | 0.4 | 0.2 |

**Requirements:** All probabilities are between 0 and 1, and they sum to 1:
$$\\sum P(X = x) = 1$$

---

### Expected Value (Mean)

$$E(X) = \\mu_X = \\sum x_i \\cdot P(X = x_i)$$

**Example:** $E(X) = 0(0.1) + 1(0.3) + 2(0.4) + 3(0.2) = 0 + 0.3 + 0.8 + 0.6 = 1.7$

> 🔑 The expected value is the **long-run average** — if you repeated the process many times, the average outcome would approach $E(X)$.

---

### Variance and Standard Deviation

$$\\text{Var}(X) = \\sigma_X^2 = \\sum (x_i - \\mu_X)^2 \\cdot P(X = x_i)$$

$$\\sigma_X = \\sqrt{\\text{Var}(X)}$$"""),
                    ('mcq1', 'multiple-choice', """**Random Variables Check** 🎯""",
                     [
                         {'q': 'A random variable $X$ has the distribution: $P(X=1)=0.3$, $P(X=2)=0.5$, $P(X=3)=0.2$. What is $E(X)$?',
                          'opts': ['$1.0$', '$1.9$', '$2.0$', '$2.5$'],
                          'ans': 1, 'exp': '$E(X) = 1(0.3) + 2(0.5) + 3(0.2) = 0.3 + 1.0 + 0.6 = 1.9$.'},
                         {'q': 'If $E(X) = 5$ and $E(Y) = 3$, and $X$ and $Y$ are independent, then $E(X + Y) =$',
                          'opts': ['$2$', '$5$', '$8$', '$15$'],
                          'ans': 2, 'exp': '$E(X+Y) = E(X) + E(Y) = 5 + 3 = 8$. This holds whether or not $X$ and $Y$ are independent.'},
                         {'q': 'The standard deviation of a random variable measures:',
                          'opts': ['The most likely outcome', 'The center of the distribution', 'The typical distance from the mean', 'The range of possible values'],
                          'ans': 2, 'exp': 'Standard deviation measures the typical distance of outcomes from the expected value.'},
                     ]),
                    ('input', 'input-boxes', """**Expected Value Calculations** 🧮

A game costs \\$5 to play. You roll a die: if you get a 6, you win \\$20; otherwise you win nothing.

**1)** What is $P(\\text{win})$? Express as a decimal (round to 2 places).

**2)** What is the expected payout (not profit)? Round to nearest cent.

**3)** What is the expected profit per game? (payout minus cost, round to nearest cent)""",
                     {'boxes': 3, 'answers': ['0.17', '3.33', '-1.67'],
                      'h1': '$P(6) = 1/6 \\approx 0.17$.',
                      'h2': '$E = (1/6)(20) + (5/6)(0) = 20/6 \\approx 3.33$.',
                      'h3': '$3.33 - 5 = -1.67$. The game has negative expected profit.',
                      'exp': '1) $1/6 \\approx 0.17$. 2) $\\$3.33$. 3) $-\\$1.67$ — unfavorable game.'}),
                ]
            },
            {
                'title': 'Problem-Solving Workshop',
                'sections': [
                    ('intro', 'text', """# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Applying Study Design Concepts**

---

### Strategy for AP Statistics Study Design Questions

1. **Identify the study type** — Is a treatment being imposed? If yes → experiment. If no → observational.
2. **Check for bias** — Look for selection bias, nonresponse, response bias, voluntary response.
3. **Identify confounding** — What other variables could explain the observed relationship?
4. **Evaluate design** — Does it use random assignment? Control group? Blinding? Blocking?

---

### Worked Example 1

**Scenario:** A school wants to test whether a new math curriculum improves test scores. They implement the new curriculum in School A and keep the old one in School B, then compare end-of-year scores.

**Analysis:**
- ❌ Not a randomized experiment — schools were not randomly assigned
- ⚠️ Confounding: Schools may differ in student demographics, teacher quality, funding
- 🔧 Better design: Randomly assign classrooms within the SAME school to old vs. new curriculum

---

### Worked Example 2

**Scenario:** Researchers want to know if a new drug lowers cholesterol. They recruit 200 volunteers, randomly assign 100 to the drug and 100 to a placebo, and measure cholesterol after 3 months. Neither patients nor doctors know who gets which pill.

**Analysis:**
- ✅ Randomized experiment — can establish causation
- ✅ Control group (placebo) — accounts for placebo effect
- ✅ Double-blind — reduces bias from expectations
- ✅ Replication — 100 per group is adequate"""),
                    ('mcq1', 'multiple-choice', """**Workshop Problems** 🎯""",
                     [
                         {'q': 'A study finds that students who eat breakfast score higher on tests. A headline reads "Breakfast causes better test scores." What is wrong?',
                          'opts': ['Nothing — the study proves it', 'The sample was too small', 'Observational study cannot establish causation', 'The test was biased'],
                          'ans': 2, 'exp': 'This is likely an observational study. Confounders (e.g., family income, sleep habits) may explain both breakfast eating and higher scores.'},
                         {'q': 'In a double-blind experiment, who does NOT know which treatment a subject receives?',
                          'opts': ['Only the subject', 'Only the researcher', 'Both the subject and the researcher', 'The statistician analyzing the data'],
                          'ans': 2, 'exp': 'Double-blind means neither the subjects nor the researchers interacting with them know the treatment assignment.'},
                         {'q': 'A placebo is used in experiments to:',
                          'opts': ['Increase sample size', 'Account for the psychological effect of receiving treatment', 'Make the study observational', 'Reduce the cost of the study'],
                          'ans': 1, 'exp': 'A placebo controls for the placebo effect — the tendency for people to improve simply because they believe they are being treated.'},
                     ]),
                ]
            },
            {
                'title': 'Review & Applications',
                'sections': [
                    ('intro', 'text', """# 📋 Review & Applications

**Part 7 of 7 — Comprehensive Review**

---

### Key Concepts Summary

| Concept | Key Point |
|---------|-----------|
| **Observational vs. Experiment** | Only experiments with random assignment → causation |
| **SRS** | Every individual has equal probability of selection |
| **Stratified** | Divide into strata, SRS within each |
| **Cluster** | Randomly select whole groups |
| **Bias** | Systematic error — not fixed by larger $n$ |
| **Confounding** | Third variable explains apparent relationship |
| **Random assignment** | Reduces confounding in experiments |
| **Blocking** | Control for known sources of variation |
| **Expected value** | $E(X) = \\sum x_i P(x_i)$ — long-run average |"""),
                    ('mcq1', 'multiple-choice', """**Comprehensive Review** 🎯""",
                     [
                         {'q': 'Which is NOT a principle of experimental design?',
                          'opts': ['Control', 'Randomization', 'Convenience', 'Replication'],
                          'ans': 2, 'exp': 'The four principles are Control, Randomization, Replication, and (optionally) Blocking. Convenience is a type of sampling bias.'},
                         {'q': 'A study randomly assigns 50 rats to a high-fat diet and 50 to a low-fat diet, measuring weight gain. This can establish causation because:',
                          'opts': ['The sample is large', 'Random assignment was used', 'Rats are similar to humans', 'Weight is easy to measure'],
                          'ans': 1, 'exp': 'Random assignment of treatments distributes confounders evenly, allowing causal conclusions.'},
                         {'q': 'An online poll asking "Should the government ban plastic bags?" receives 10,000 responses. This is:',
                          'opts': ['A reliable result due to large sample', 'Affected by voluntary response bias', 'A properly conducted SRS', 'Free of bias'],
                          'ans': 1, 'exp': 'Online polls suffer from voluntary response bias — people with extreme views are overrepresented, regardless of sample size.'},
                     ]),
                    ('dropdown', 'dropdown-select', """**Final Review** 🔽""",
                     {'dropdowns': [
                         {'label': 'Causation requires:', 'options': ['Large sample', 'Randomized experiment', 'Observational study', 'Correlation']},
                         {'label': 'Bias is reduced by:', 'options': ['Larger samples', 'Better sampling methods', 'More questions', 'Longer studies']},
                         {'label': '$E(X+Y) =$', 'options': ['$E(X) \\cdot E(Y)$', '$E(X) + E(Y)$', '$E(X) - E(Y)$', 'Cannot be determined']},
                     ],
                      'answers': ['Randomized experiment', 'Better sampling methods', '$E(X) + E(Y)$'],
                      'h1': 'Only experiments with random assignment.', 'h2': 'Bias is systematic, not random.',
                      'h3': 'Always true, regardless of independence.',
                      'exp': 'Causation: experiments. Bias: better methods. $E(X+Y) = E(X)+E(Y)$ always.'}),
                ]
            },
        ]
    },
    # Topic 2: Normal Distribution
    {
        'slug': 'normal-distribution-apstats',
        'exportPrefix': 'apStatsNormalDist',
        'parts': [
            {'title': 'The Normal Curve', 'sections': [
                ('intro', 'text', """# 📊 The Normal Distribution

**Part 1 of 7 — Bell Curves and the Empirical Rule**

---

### The Normal Distribution

The **normal distribution** is the most important distribution in statistics. It is:
- **Symmetric** and **bell-shaped**
- Described by two parameters: mean $\\mu$ and standard deviation $\\sigma$
- Notation: $X \\sim N(\\mu, \\sigma)$

---

### The Empirical Rule (68-95-99.7)

For any normal distribution:

| Range | Percentage |
|-------|-----------|
| $\\mu \\pm 1\\sigma$ | **68%** of data |
| $\\mu \\pm 2\\sigma$ | **95%** of data |
| $\\mu \\pm 3\\sigma$ | **99.7%** of data |

**Example:** IQ scores follow $N(100, 15)$
- 68% of scores between $100 \\pm 15 = [85, 115]$
- 95% between $100 \\pm 30 = [70, 130]$
- 99.7% between $100 \\pm 45 = [55, 145]$

> 🔑 The Empirical Rule gives a quick estimate for normal data. For exact probabilities, use z-scores."""),
                ('mcq1', 'multiple-choice', """**Normal Distribution Check** 🎯""",
                 [
                     {'q': 'SAT scores follow $N(1060, 195)$. Approximately what percent score between 865 and 1255?',
                      'opts': ['50%', '68%', '95%', '99.7%'],
                      'ans': 1, 'exp': '$865 = 1060 - 195$ and $1255 = 1060 + 195$. This is $\\mu \\pm 1\\sigma$, so about 68%.'},
                     {'q': 'In a normal distribution, the mean, median, and mode are:',
                      'opts': ['All different', 'Mean = median only', 'All equal', 'Depends on $\\sigma$'],
                      'ans': 2, 'exp': 'Normal distributions are perfectly symmetric, so the mean, median, and mode all coincide.'},
                     {'q': 'About what percentage of data in a normal distribution falls more than 2 standard deviations from the mean?',
                      'opts': ['2.5%', '5%', '10%', '32%'],
                      'ans': 1, 'exp': '95% falls within $\\mu \\pm 2\\sigma$, so $100\\% - 95\\% = 5\\%$ falls outside (both tails combined).'},
                 ]),
                ('input', 'input-boxes', """**Empirical Rule Calculations** 🧮

Adult male heights follow $N(70, 3)$ inches.

**1)** What percentage of men are between 67 and 73 inches tall?

**2)** What percentage are shorter than 64 inches? (Hint: 64 = 70 − 2(3))

**3)** Between what two heights do the middle 99.7% of men fall? Give the upper bound.""",
                 {'boxes': 3, 'answers': ['68', '2.5', '79'],
                  'h1': '$67 = 70-3$ and $73 = 70+3$, so $\\mu \\pm 1\\sigma$ → 68%.',
                  'h2': '64 is 2 SDs below mean. About 2.5% are below $\\mu - 2\\sigma$.',
                  'h3': '$70 + 3(3) = 79$ inches.',
                  'exp': '1) 68%. 2) 2.5% (half of the 5% outside $\\mu \\pm 2\\sigma$). 3) 79 inches ($\\mu + 3\\sigma$).'}),
            ]},
            {'title': 'Z-Scores', 'sections': [
                ('intro', 'text', """# 📏 Z-Scores and the Standard Normal

**Part 2 of 7 — Standardizing Values**

---

### The Z-Score Formula

A z-score tells you how many standard deviations a value is from the mean:

$$z = \\frac{x - \\mu}{\\sigma}$$

| Z-Score | Interpretation |
|---------|---------------|
| $z = 0$ | At the mean |
| $z = 1$ | One SD above the mean |
| $z = -2$ | Two SDs below the mean |

---

### The Standard Normal Distribution

When we standardize: $Z \\sim N(0, 1)$

This allows us to use **one table** (or calculator) for all normal distributions.

**Example:** Heights $\\sim N(70, 3)$. A person is 76 inches tall.
$$z = \\frac{76 - 70}{3} = 2$$
They are 2 standard deviations above the mean.

---

### Using the Z-Table

The z-table gives $P(Z \\leq z)$ — the area to the **left** of $z$.

| To Find | Method |
|---------|--------|
| $P(Z \\leq z)$ | Read directly from table |
| $P(Z \\geq z)$ | $1 - P(Z \\leq z)$ |
| $P(a \\leq Z \\leq b)$ | $P(Z \\leq b) - P(Z \\leq a)$ |

> 🔑 Always sketch the normal curve, shade the region, then calculate."""),
                ('mcq1', 'multiple-choice', """**Z-Score Practice** 🎯""",
                 [
                     {'q': 'A test has $\\mu = 80$ and $\\sigma = 5$. A student scores 90. Their z-score is:',
                      'opts': ['$z = 1$', '$z = 2$', '$z = -2$', '$z = 10$'],
                      'ans': 1, 'exp': '$z = (90 - 80)/5 = 10/5 = 2$.'},
                     {'q': '$P(Z \\leq 1.5) = 0.9332$. What is $P(Z \\geq 1.5)$?',
                      'opts': ['$0.9332$', '$0.0668$', '$0.5000$', '$1.9332$'],
                      'ans': 1, 'exp': '$P(Z \\geq 1.5) = 1 - P(Z \\leq 1.5) = 1 - 0.9332 = 0.0668$.'},
                     {'q': 'A negative z-score means the value is:',
                      'opts': ['Invalid', 'Below the mean', 'Above the mean', 'An outlier'],
                      'ans': 1, 'exp': 'Negative z-score = below the mean. The magnitude tells how far.'},
                 ]),
                ('input', 'input-boxes', """**Z-Score Calculations** 🧮

ACT scores follow $N(21, 5)$.

**1)** Find the z-score for a student who scored 31. (Give as a whole number)

**2)** Find the z-score for a student who scored 16.

**3)** A student has $z = -0.4$. What was their ACT score?""",
                 {'boxes': 3, 'answers': ['2', '-1', '19'],
                  'h1': '$z = (31-21)/5 = 10/5 = 2$.',
                  'h2': '$z = (16-21)/5 = -5/5 = -1$.',
                  'h3': '$x = \\mu + z\\sigma = 21 + (-0.4)(5) = 21 - 2 = 19$.',
                  'exp': '1) $z = 2$. 2) $z = -1$. 3) $x = 19$.'}),
            ]},
            {'title': 'Normal Calculations', 'sections': [
                ('intro', 'text', """# 🔢 Normal Probability Calculations

**Part 3 of 7 — Finding Areas and Percentiles**

---

### Forward Problems: X → Z → Probability

**Given a value $x$, find the probability:**
1. Compute $z = \\frac{x - \\mu}{\\sigma}$
2. Look up $P(Z \\leq z)$ in the z-table
3. Adjust for the direction (left tail, right tail, between)

**Example:** Scores $\\sim N(500, 100)$. Find $P(X > 650)$.
- $z = \\frac{650 - 500}{100} = 1.5$
- $P(Z \\leq 1.5) = 0.9332$
- $P(X > 650) = 1 - 0.9332 = 0.0668 = 6.68\\%$

---

### Backward Problems: Probability → Z → X

**Given a percentile, find the value:**
1. Find the z-score from the table that matches the given probability
2. Solve for $x = \\mu + z\\sigma$

**Example:** What score is at the 90th percentile if $\\mu = 500, \\sigma = 100$?
- 90th percentile → $z = 1.28$ (from table: $P(Z \\leq 1.28) = 0.8997 \\approx 0.90$)
- $x = 500 + 1.28(100) = 628$

> 🔑 "Top 10%" = 90th percentile. "Bottom 25%" = 25th percentile."""),
                ('mcq1', 'multiple-choice', """**Normal Calculations** 🎯""",
                 [
                     {'q': 'GPA follows $N(3.0, 0.5)$. The proportion of students with GPA above 4.0 involves $z =$',
                      'opts': ['$z = 0.5$', '$z = 1.0$', '$z = 2.0$', '$z = 4.0$'],
                      'ans': 2, 'exp': '$z = (4.0 - 3.0)/0.5 = 2.0$.'},
                     {'q': 'The 50th percentile of any normal distribution is:',
                      'opts': ['The mode', 'The standard deviation', 'The mean', 'Zero'],
                      'ans': 2, 'exp': 'For a normal distribution (symmetric), the 50th percentile = median = mean.'},
                 ]),
                ('input', 'input-boxes', """**Finding Percentiles** 🧮

Baby weights at birth follow $N(7.5, 1.2)$ lbs.

**1)** What z-score corresponds to a baby weighing 9.9 lbs?

**2)** Using $P(Z \\leq 2) = 0.9772$, what percent of babies weigh less than 9.9 lbs? (Express as a number, e.g., 97.72)

**3)** The 84th percentile has $z \\approx 1$. What is the 84th percentile weight? (in lbs, one decimal)""",
                 {'boxes': 3, 'answers': ['2', '97.72', '8.7'],
                  'h1': '$z = (9.9 - 7.5)/1.2 = 2.4/1.2 = 2$.',
                  'h2': '$P(Z \\leq 2) = 0.9772 = 97.72\\%$.',
                  'h3': '$x = 7.5 + 1(1.2) = 8.7$ lbs.',
                  'exp': '1) $z = 2$. 2) 97.72%. 3) 8.7 lbs.'}),
            ]},
            {'title': 'Assessing Normality', 'sections': [
                ('intro', 'text', """# 📈 Assessing Normality

**Part 4 of 7 — Is the Data Normal?**

---

### Why Check Normality?

Many statistical procedures assume the data comes from a normal distribution. Before applying them:
- Check with a **histogram** — should be roughly bell-shaped
- Use a **normal probability plot (Q-Q plot)** — points should follow a straight line
- Apply the **Empirical Rule** — about 68/95/99.7% should fall within 1/2/3 SDs

---

### Normal Probability Plot (Q-Q Plot)

| Pattern | Interpretation |
|---------|---------------|
| Points follow a straight line | Data is approximately normal |
| Points curve up at both ends | Data has heavier tails (leptokurtic) |
| S-shaped curve | Data is skewed |
| Points curve down at both ends | Data has lighter tails (platykurtic) |

> 🔑 **No real data is perfectly normal.** We look for "close enough" — roughly symmetric with no extreme outliers."""),
                ('mcq1', 'multiple-choice', """**Normality Assessment** 🎯""",
                 [
                     {'q': 'A Q-Q plot shows points curving upward away from the line at both ends. The distribution has:',
                      'opts': ['Lighter tails than normal', 'Heavier tails than normal', 'A perfect normal shape', 'Left skewness'],
                      'ans': 1, 'exp': 'Points above the line at both tails = more extreme values than expected = heavier tails.'},
                     {'q': 'Which is the best method to assess if data is normally distributed?',
                      'opts': ['Check if the mean equals the mode', 'Look at the sample size', 'Use a normal probability plot', 'Calculate the range'],
                      'ans': 2, 'exp': 'A normal probability plot (Q-Q plot) is the most reliable visual method for assessing normality.'},
                 ]),
            ]},
            {'title': 'Combining Normal RVs', 'sections': [
                ('intro', 'text', """# ➕ Combining Normal Random Variables

**Part 5 of 7 — Sums, Differences, and Linear Transformations**

---

### Linear Transformations

If $X \\sim N(\\mu, \\sigma)$ and $Y = a + bX$, then:

$$Y \\sim N(a + b\\mu, |b|\\sigma)$$

**Example:** Temperature in Celsius is $C \\sim N(20, 5)$. In Fahrenheit: $F = 32 + 1.8C$
$$F \\sim N(32 + 1.8(20),\\; 1.8(5)) = N(68, 9)$$

---

### Sum of Independent Normal RVs

If $X \\sim N(\\mu_X, \\sigma_X)$ and $Y \\sim N(\\mu_Y, \\sigma_Y)$ are **independent**:

$$X + Y \\sim N(\\mu_X + \\mu_Y, \\sqrt{\\sigma_X^2 + \\sigma_Y^2})$$

$$X - Y \\sim N(\\mu_X - \\mu_Y, \\sqrt{\\sigma_X^2 + \\sigma_Y^2})$$

> ⚠️ **Variances add** for both sums AND differences. Standard deviations do NOT add directly.

**Example:** Coffee fill $X \\sim N(12, 0.3)$ oz, cream $Y \\sim N(1, 0.1)$ oz.
$$X + Y \\sim N(13, \\sqrt{0.09 + 0.01}) = N(13, \\sqrt{0.10}) \\approx N(13, 0.316)$$"""),
                ('mcq1', 'multiple-choice', """**Combining RVs** 🎯""",
                 [
                     {'q': 'If $X \\sim N(100, 10)$ and $Y \\sim N(50, 8)$ are independent, $\\text{SD}(X-Y) =$',
                      'opts': ['$2$', '$\\sqrt{164}$', '$18$', '$\\sqrt{36}$'],
                      'ans': 1, 'exp': '$\\text{SD}(X-Y) = \\sqrt{10^2 + 8^2} = \\sqrt{100+64} = \\sqrt{164} \\approx 12.81$. Variances ADD even for differences.'},
                     {'q': 'Adding a constant $c$ to every value in a dataset changes:',
                      'opts': ['The mean only', 'The standard deviation only', 'Both mean and SD', 'Neither mean nor SD'],
                      'ans': 0, 'exp': 'Adding a constant shifts all values by $c$, changing the mean by $c$ but leaving spread (SD) unchanged.'},
                 ]),
                ('input', 'input-boxes', """**Combining Normal Variables** 🧮

Package weights: $X \\sim N(50, 4)$ lbs. Packing material: $Y \\sim N(2, 0.5)$ lbs (independent).

**1)** Mean total weight $E(X+Y) = $?

**2)** Variance of total weight $\\text{Var}(X+Y) = \\sigma_X^2 + \\sigma_Y^2 = $?

**3)** SD of total weight = $\\sqrt{\\text{Var}(X+Y)}$, rounded to 2 decimal places.""",
                 {'boxes': 3, 'answers': ['52', '16.25', '4.03'],
                  'h1': '$E(X+Y) = 50 + 2 = 52$.',
                  'h2': '$4^2 + 0.5^2 = 16 + 0.25 = 16.25$.',
                  'h3': '$\\sqrt{16.25} \\approx 4.03$.',
                  'exp': '1) 52 lbs. 2) 16.25 lbs². 3) 4.03 lbs.'}),
            ]},
            {'title': 'Problem-Solving Workshop', 'sections': [
                ('intro', 'text', """# 🛠️ Normal Distribution Workshop

**Part 6 of 7 — Comprehensive Practice**

---

### Strategy for Normal Distribution Problems

1. **Identify** $\\mu$ and $\\sigma$ from the problem
2. **Sketch** the curve and shade the desired region
3. **Standardize** using $z = (x - \\mu)/\\sigma$
4. **Use the table** or calculator to find probabilities
5. **For percentiles:** work backward from probability to z to x

---

### Worked Example

**Problem:** A machine fills cereal boxes with $\\mu = 368$ g and $\\sigma = 4$ g. What proportion of boxes have less than 360 g?

**Solution:**
1. $z = (360 - 368)/4 = -8/4 = -2$
2. $P(Z \\leq -2) = 0.0228$
3. About $2.28\\%$ of boxes are underfilled.

**Follow-up:** What weight is exceeded by 90% of boxes?
1. "Exceeded by 90%" means 10th percentile (10% are below)
2. $z = -1.28$ (from table)
3. $x = 368 + (-1.28)(4) = 368 - 5.12 = 362.88$ g"""),
                ('mcq1', 'multiple-choice', """**Workshop Problems** 🎯""",
                 [
                     {'q': 'Battery life $\\sim N(500, 40)$ hours. What proportion lasts between 460 and 540 hours?',
                      'opts': ['50%', '68%', '95%', '99.7%'],
                      'ans': 1, 'exp': '$460 = 500 - 40$ and $540 = 500 + 40$. This is $\\mu \\pm 1\\sigma \\approx 68\\%$.'},
                     {'q': 'The 95th percentile of $N(0,1)$ is approximately:',
                      'opts': ['$1.28$', '$1.645$', '$1.96$', '$2.33$'],
                      'ans': 1, 'exp': '$P(Z \\leq 1.645) \\approx 0.95$. This is a commonly used value in statistics.'},
                 ]),
            ]},
            {'title': 'Review & Applications', 'sections': [
                ('intro', 'text', """# 📋 Normal Distribution Review

**Part 7 of 7 — Summary and Applications**

---

### Key Formulas

| Formula | When to Use |
|---------|-------------|
| $z = \\frac{x - \\mu}{\\sigma}$ | Convert any value to standard normal |
| $x = \\mu + z\\sigma$ | Convert from z-score back to original units |
| $P(a \\leq Z \\leq b) = P(Z \\leq b) - P(Z \\leq a)$ | Find probability between two values |
| $Y = a + bX \\Rightarrow N(a+b\\mu, |b|\\sigma)$ | Linear transformation |
| $X + Y \\Rightarrow N(\\mu_X + \\mu_Y, \\sqrt{\\sigma_X^2+\\sigma_Y^2})$ | Sum of independent normals |

---

### Common z-Values to Know

| Confidence Level | z* |
|-----------------|-----|
| 90% | 1.645 |
| 95% | 1.960 |
| 99% | 2.576 |"""),
                ('mcq1', 'multiple-choice', """**Final Review** 🎯""",
                 [
                     {'q': 'If $\\sigma$ doubles but $\\mu$ stays the same, the normal curve becomes:',
                      'opts': ['Taller and narrower', 'Shorter and wider', 'Shifted right', 'Unchanged'],
                      'ans': 1, 'exp': 'Larger $\\sigma$ means more spread, so the curve is shorter (to maintain total area = 1) and wider.'},
                     {'q': 'To find the top 5% of a distribution, you need the z-score for:',
                      'opts': ['5th percentile', '95th percentile', '50th percentile', '97.5th percentile'],
                      'ans': 1, 'exp': 'Top 5% means 95% are below → 95th percentile → $z = 1.645$.'},
                 ]),
                ('dropdown', 'dropdown-select', """**Mastery Review** 🔽""",
                 {'dropdowns': [
                     {'label': 'The Empirical Rule applies to:', 'options': ['Any distribution', 'Normal distributions only', 'Skewed distributions', 'Uniform distributions']},
                     {'label': 'A z-score of −1.5 means:', 'options': ['1.5 SDs above mean', '1.5 SDs below mean', 'At the mean', '1.5 percentile']},
                     {'label': 'Variances of independent RVs:', 'options': ['Always add', 'Always subtract', 'Add for sums, subtract for differences', 'Cannot be combined']},
                 ],
                  'answers': ['Normal distributions only', '1.5 SDs below mean', 'Always add'],
                  'h1': 'The 68-95-99.7 rule is specific to normal distributions.', 'h2': 'Negative z = below mean.',
                  'h3': 'Variances always add, whether summing or subtracting.',
                  'exp': 'Empirical Rule: normal only. z = −1.5: below mean. Variances add for both sums and differences.'}),
            ]},
        ]
    },
]

# I'll define the remaining 6 topics inline for the generator to process.
# For brevity, I'll add them programmatically.

MORE_TOPICS = [
    # Topic 3: Sampling Distributions
    {
        'slug': 'sampling-distributions-apstats',
        'exportPrefix': 'apStatsSamplingDist',
        'parts': [
            'Central Limit Theorem',
            'Distribution of Sample Means',
            'Distribution of Sample Proportions',
            'Standard Error',
            'Conditions for Inference',
            'Problem-Solving Workshop',
            'Review & Applications',
        ]
    },
    # Topic 4: Confidence Intervals
    {
        'slug': 'confidence-intervals-apstats',
        'exportPrefix': 'apStatsConfInt',
        'parts': [
            'Introduction to Confidence Intervals',
            'One-Sample Z-Interval for Proportions',
            'One-Sample T-Interval for Means',
            'Choosing Sample Size',
            'Interpreting Confidence Intervals',
            'Problem-Solving Workshop',
            'Review & Applications',
        ]
    },
    # Topic 5: Chi-Square Tests
    {
        'slug': 'chi-square-tests-apstats',
        'exportPrefix': 'apStatsChiSquare',
        'parts': [
            'Chi-Square Goodness-of-Fit',
            'Chi-Square Test for Independence',
            'Chi-Square Test for Homogeneity',
            'Conditions and Degrees of Freedom',
            'Interpreting Results',
            'Problem-Solving Workshop',
            'Review & Applications',
        ]
    },
    # Topic 6: Linear Regression
    {
        'slug': 'linear-regression-apstats',
        'exportPrefix': 'apStatsLinReg',
        'parts': [
            'Scatterplots and Correlation',
            'Least-Squares Regression Line',
            'Residuals and Residual Plots',
            'Coefficient of Determination',
            'Influential Points and Outliers',
            'Problem-Solving Workshop',
            'Review & Applications',
        ]
    },
    # Topic 7: Inference for Regression
    {
        'slug': 'inference-regression-apstats',
        'exportPrefix': 'apStatsInfReg',
        'parts': [
            'Regression Model Assumptions',
            'T-Test for Slope',
            'Confidence Interval for Slope',
            'Computer Output Interpretation',
            'Prediction Intervals',
            'Problem-Solving Workshop',
            'Review & Applications',
        ]
    },
    # Topic 8: Comparing Two Populations
    {
        'slug': 'comparing-populations-apstats',
        'exportPrefix': 'apStatsComparing',
        'parts': [
            'Two-Sample Z-Test for Proportions',
            'Two-Sample T-Test for Means',
            'Paired T-Test',
            'Confidence Intervals for Differences',
            'Power and Sample Size',
            'Problem-Solving Workshop',
            'Review & Applications',
        ]
    },
]


def make_section_id(topic_slug, part_num, section_id):
    prefix = topic_slug.replace('-apstats', '').replace('-', '')
    return f'apstats-{prefix}-p{part_num}-{section_id}'


def format_mcq(questions):
    items = []
    for q in questions:
        opts_str = ', '.join(f"'{o}'" for o in q['opts'])
        items.append(f"""          {{
            question: '{q["q"].replace(chr(39), chr(92)+chr(39))}',
            options: [{opts_str}],
            correctAnswer: {q['ans']},
            explanation: '{q["exp"].replace(chr(39), chr(92)+chr(39))}'
          }}""")
    return ',\n'.join(items)


def format_input(data):
    answers = ', '.join(f"'{a}'" for a in data['answers'])
    return f"""        boxes: {data['boxes']},
        correctAnswers: [{answers}],
        hint1: '{data["h1"].replace(chr(39), chr(92)+chr(39))}',
        hint2: '{data["h2"].replace(chr(39), chr(92)+chr(39))}',
        hint3: '{data["h3"].replace(chr(39), chr(92)+chr(39))}',
        explanation: '{data["exp"].replace(chr(39), chr(92)+chr(39))}'"""


def format_dropdown(data):
    dd_items = []
    for d in data['dropdowns']:
        opts = ', '.join(f"'{o}'" for o in d['options'])
        dd_items.append(f"          {{ label: '{d['label'].replace(chr(39), chr(92)+chr(39))}', options: [{opts}] }}")
    dd_str = ',\n'.join(dd_items)
    answers = ', '.join(f"'{a}'" for a in data['answers'])
    return f"""        dropdowns: [
{dd_str}
        ],
        correctAnswers: [{answers}],
        hint1: '{data["h1"].replace(chr(39), chr(92)+chr(39))}',
        hint2: '{data.get("h2", "Think carefully.").replace(chr(39), chr(92)+chr(39))}',
        hint3: '{data.get("h3", "Review the concepts above.").replace(chr(39), chr(92)+chr(39))}',
        explanation: '{data["exp"].replace(chr(39), chr(92)+chr(39))}'"""


def generate_rich_lesson(topic, part_idx):
    """Generate a full lesson file for topics with detailed sections."""
    part = topic['parts'][part_idx]
    part_num = part_idx + 1
    export_name = f"{topic['exportPrefix']}Part{part_num}Data"
    
    sections = []
    for sec in part['sections']:
        sec_id = make_section_id(topic['slug'], part_num, sec[0])
        sec_type = sec[1]
        content = sec[2]
        
        if sec_type == 'text':
            sections.append(f"""    {{
      id: '{sec_id}',
      type: 'text' as const,
      content: `{content}`
    }}""")
        elif sec_type == 'multiple-choice':
            mcq_data = sec[3]
            questions_str = format_mcq(mcq_data)
            sections.append(f"""    {{
      id: '{sec_id}',
      type: 'multiple-choice' as const,
      content: `
{content}
      `,
      exercise: {{
        questions: [
{questions_str}
        ]
      }}
    }}""")
        elif sec_type == 'input-boxes':
            input_data = sec[3]
            input_str = format_input(input_data)
            sections.append(f"""    {{
      id: '{sec_id}',
      type: 'input-boxes' as const,
      content: `
{content}
      `,
      exercise: {{
{input_str}
      }}
    }}""")
        elif sec_type == 'dropdown-select':
            dd_data = sec[3]
            dd_str = format_dropdown(dd_data)
            sections.append(f"""    {{
      id: '{sec_id}',
      type: 'dropdown-select' as const,
      content: `
{content}
      `,
      exercise: {{
{dd_str}
      }}
    }}""")
    
    sections_str = ',\n'.join(sections)
    
    return f"""export const {export_name} = {{
  topicSlug: '{topic["slug"]}',
  sections: [
{sections_str}
  ]
}};
"""


def generate_skeleton_lesson(topic_info, part_idx):
    """Generate a comprehensive lesson for topics defined with just titles."""
    slug = topic_info['slug']  
    prefix = topic_info['exportPrefix']
    part_title = topic_info['parts'][part_idx]
    part_num = part_idx + 1
    export_name = f"{prefix}Part{part_num}Data"
    short = slug.replace('-apstats', '')
    
    # Generate rich content based on topic and part
    content = get_skeleton_content(slug, part_num, part_title, short)
    
    return f"""export const {export_name} = {{
  topicSlug: '{slug}',
  sections: [
{content}
  ]
}};
"""


def get_skeleton_content(slug, part_num, title, short):
    """Generate detailed content for skeleton topics."""
    sid = f'apstats-{short.replace("-", "")}-p{part_num}'
    
    # Content maps for each topic's parts
    content_map = {
        'sampling-distributions-apstats': {
            1: f"""    {{
      id: '{sid}-intro',
      type: 'text' as const,
      content: `# 🎯 The Central Limit Theorem

**Part 1 of 7 — The Most Important Theorem in Statistics**

---

### From Population to Sample

When we take a sample of size $n$ from a population, the sample mean $\\\\bar{{x}}$ varies from sample to sample. The **sampling distribution** of $\\\\bar{{x}}$ describes this variation.

---

### The Central Limit Theorem (CLT)

For a random sample of size $n$ from a population with mean $\\\\mu$ and standard deviation $\\\\sigma$:

$$\\\\bar{{X}} \\\\sim N\\\\left(\\\\mu, \\\\frac{{\\\\sigma}}{{\\\\sqrt{{n}}}}\\\\right) \\\\text{{ (approximately, for large }} n\\\\text{{)}}$$

| Property | Value |
|----------|-------|
| Mean of $\\\\bar{{X}}$ | $\\\\mu_{{\\\\bar{{X}}}} = \\\\mu$ |
| Standard deviation of $\\\\bar{{X}}$ | $\\\\sigma_{{\\\\bar{{X}}}} = \\\\frac{{\\\\sigma}}{{\\\\sqrt{{n}}}}$ |
| Shape | Approximately normal for large $n$ (usually $n \\\\geq 30$) |

> 🔑 **The CLT works regardless of the shape of the population distribution** — as long as $n$ is large enough.

---

### Why It Matters

Even if data is skewed, the distribution of sample means will be approximately normal for large $n$. This is why so many inference procedures use the normal distribution.`
    }},
    {{
      id: '{sid}-mcq1',
      type: 'multiple-choice' as const,
      content: `
**CLT Concept Check** 🎯
      `,
      exercise: {{
        questions: [
          {{
            question: 'The Central Limit Theorem says that for large $n$, the sampling distribution of $\\\\bar{{x}}$ is approximately:',
            options: ['Uniform', 'Normal', 'Skewed right', 'The same shape as the population'],
            correctAnswer: 1,
            explanation: 'The CLT guarantees approximate normality of the sampling distribution of $\\\\bar{{x}}$ for large $n$, regardless of the population shape.'
          }},
          {{
            question: 'As sample size $n$ increases, the standard deviation of $\\\\bar{{x}}$:',
            options: ['Increases', 'Decreases', 'Stays the same', 'Becomes zero'],
            correctAnswer: 1,
            explanation: '$\\\\sigma_{{\\\\bar{{x}}}} = \\\\sigma/\\\\sqrt{{n}}$. As $n$ increases, the denominator grows, so the SD decreases.'
          }},
          {{
            question: 'If the population SD is $\\\\sigma = 20$ and $n = 100$, the standard error is:',
            options: ['$20$', '$2$', '$0.2$', '$200$'],
            correctAnswer: 1,
            explanation: '$\\\\sigma_{{\\\\bar{{x}}}} = 20/\\\\sqrt{{100}} = 20/10 = 2$.'
          }}
        ]
      }}
    }},
    {{
      id: '{sid}-input',
      type: 'input-boxes' as const,
      content: `
**CLT Calculations** 🧮

A population has $\\\\mu = 50$ and $\\\\sigma = 12$. Samples of size $n = 36$ are drawn.

**1)** What is the mean of the sampling distribution of $\\\\bar{{x}}$?

**2)** What is the standard error of $\\\\bar{{x}}$?

**3)** For $n = 144$, what would the standard error be?
      `,
      exercise: {{
        boxes: 3,
        correctAnswers: ['50', '2', '1'],
        hint1: 'The mean of the sampling distribution equals the population mean.',
        hint2: '$\\\\sigma/\\\\sqrt{{n}} = 12/\\\\sqrt{{36}} = 12/6$.',
        hint3: '$12/\\\\sqrt{{144}} = 12/12 = 1$.',
        explanation: '1) $\\\\mu_{{\\\\bar{{x}}}} = 50$. 2) $12/6 = 2$. 3) $12/12 = 1$. Quadrupling $n$ halves the SE.'
      }}
    }}""",
            2: f"""    {{
      id: '{sid}-intro',
      type: 'text' as const,
      content: `# 📊 Distribution of Sample Means

**Part 2 of 7 — Applying the CLT**

---

### When Is the CLT Valid?

| Population Shape | Required Sample Size |
|-----------------|---------------------|
| Normal | Any $n$ (even $n = 1$) |
| Slightly skewed | $n \\\\geq 15$ |
| Heavily skewed | $n \\\\geq 30$ (or more) |
| With outliers | $n \\\\geq 40$ or remove outliers |

---

### Finding Probabilities About $\\\\bar{{x}}$

To find $P(\\\\bar{{x}} > k)$:

1. Calculate $z = \\\\frac{{\\\\bar{{x}} - \\\\mu}}{{\\\\sigma / \\\\sqrt{{n}}}}$
2. Use the z-table

**Example:** Population: $\\\\mu = 100$, $\\\\sigma = 15$. Sample $n = 25$. Find $P(\\\\bar{{x}} > 106)$.

$z = \\\\frac{{106 - 100}}{{15/\\\\sqrt{{25}}}} = \\\\frac{{6}}{{3}} = 2$

$P(\\\\bar{{x}} > 106) = P(Z > 2) = 1 - 0.9772 = 0.0228$`
    }},
    {{
      id: '{sid}-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Sample Means Practice** 🎯
      `,
      exercise: {{
        questions: [
          {{
            question: 'Heights of women: $\\\\mu = 64$, $\\\\sigma = 3$ inches. For a sample of 9, the SE of $\\\\bar{{x}}$ is:',
            options: ['$3$', '$1$', '$9$', '$0.33$'],
            correctAnswer: 1,
            explanation: '$SE = 3/\\\\sqrt{{9}} = 3/3 = 1$ inch.'
          }},
          {{
            question: 'If the population is normal, the sampling distribution of $\\\\bar{{x}}$ is normal for:',
            options: ['Only $n \\\\geq 30$', 'Only $n \\\\geq 100$', 'Any sample size', 'Only even $n$'],
            correctAnswer: 2,
            explanation: 'If the population is normal, the sampling distribution of $\\\\bar{{x}}$ is exactly normal for ANY sample size.'
          }}
        ]
      }}
    }},
    {{
      id: '{sid}-input',
      type: 'input-boxes' as const,
      content: `
**Sampling Distribution Calculations** 🧮

Exam scores: $\\\\mu = 75$, $\\\\sigma = 10$, $n = 25$.

**1)** Standard error of $\\\\bar{{x}}$ = ?

**2)** $z$-score for $\\\\bar{{x}} = 79$: $z = (79 - 75) / SE$ = ?

**3)** $P(\\\\bar{{x}} > 79) \\\\approx P(Z > 2)$. Using $P(Z \\\\leq 2) = 0.9772$, the probability is?
      `,
      exercise: {{
        boxes: 3,
        correctAnswers: ['2', '2', '0.0228'],
        hint1: '$10/\\\\sqrt{{25}} = 10/5 = 2$.',
        hint2: '$(79-75)/2 = 2$.',
        hint3: '$1 - 0.9772 = 0.0228$.',
        explanation: '1) SE = 2. 2) $z = 2$. 3) $P \\\\approx 0.0228$ or about 2.3%.'
      }}
    }}""",
        },
        'confidence-intervals-apstats': {
            1: f"""    {{
      id: '{sid}-intro',
      type: 'text' as const,
      content: `# 📐 Introduction to Confidence Intervals

**Part 1 of 7 — Estimating Population Parameters**

---

### Point Estimates vs. Interval Estimates

| Type | Example | Limitation |
|------|---------|-----------|
| **Point estimate** | $\\\\hat{{p}} = 0.52$ | No indication of precision |
| **Confidence interval** | $(0.48, 0.56)$ | Shows range of plausible values |

---

### Confidence Interval Structure

$$\\\\text{{estimate}} \\\\pm \\\\text{{margin of error}}$$

$$\\\\text{{estimate}} \\\\pm z^* \\\\cdot \\\\text{{standard error}}$$

---

### What Does "95% Confident" Mean?

If we repeated the sampling process many times and built a 95% CI each time, **about 95% of those intervals would contain the true parameter**.

> ⚠️ It does **NOT** mean there is a 95% probability that the parameter is in this particular interval. The parameter is fixed — it is either in the interval or it is not.

---

### Common Confidence Levels

| Confidence Level | $z^*$ | Margin of Error |
|-----------------|-------|----------------|
| 90% | 1.645 | Narrower |
| 95% | 1.960 | Standard |
| 99% | 2.576 | Wider |

> 🔑 Higher confidence → wider interval → less precise. There is always a tradeoff between confidence and precision.`
    }},
    {{
      id: '{sid}-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Confidence Interval Basics** 🎯
      `,
      exercise: {{
        questions: [
          {{
            question: 'A 95% confidence interval means:',
            options: ['95% of the data falls in this range', '95% probability the parameter is in this interval', '95% of samples produce intervals containing the parameter', 'The sample is 95% accurate'],
            correctAnswer: 2,
            explanation: 'A 95% CI means the method produces intervals that capture the true parameter 95% of the time over many repetitions.'
          }},
          {{
            question: 'Increasing the confidence level from 95% to 99% will:',
            options: ['Narrow the interval', 'Widen the interval', 'Not change the interval', 'Reduce the sample size needed'],
            correctAnswer: 1,
            explanation: 'Higher confidence requires a larger $z^*$ (2.576 vs 1.960), producing a wider interval.'
          }},
          {{
            question: 'The margin of error depends on all of these EXCEPT:',
            options: ['Sample size', 'Confidence level', 'Standard error', 'Population parameter'],
            correctAnswer: 3,
            explanation: 'The margin of error = $z^* \\\\times SE$. It depends on sample size (through SE), confidence level (through $z^*$), but not the unknown population parameter.'
          }}
        ]
      }}
    }},
    {{
      id: '{sid}-input',
      type: 'input-boxes' as const,
      content: `
**Confidence Interval Calculations** 🧮

A poll finds $\\\\hat{{p}} = 0.60$ with $n = 400$.

**1)** Standard error $= \\\\sqrt{{\\\\hat{{p}}(1-\\\\hat{{p}})/n}} = \\\\sqrt{{0.24/400}}$. Round to 3 decimal places.

**2)** For a 95% CI, the margin of error $= 1.96 \\\\times SE$. Round to 3 decimal places.

**3)** The 95% CI upper bound $= 0.60 + ME$. Round to 3 decimal places.
      `,
      exercise: {{
        boxes: 3,
        correctAnswers: ['0.024', '0.048', '0.648'],
        hint1: '$\\\\sqrt{{0.0006}} \\\\approx 0.0245 \\\\approx 0.024$.',
        hint2: '$1.96 \\\\times 0.0245 \\\\approx 0.048$.',
        hint3: '$0.60 + 0.048 = 0.648$.',
        explanation: '1) SE $\\\\approx 0.024$. 2) ME $\\\\approx 0.048$. 3) Upper bound $\\\\approx 0.648$. The 95% CI is approximately $(0.552, 0.648)$.'
      }}
    }}""",
        },
        'chi-square-tests-apstats': {
            1: f"""    {{
      id: '{sid}-intro',
      type: 'text' as const,
      content: `# 📊 Chi-Square Goodness-of-Fit Test

**Part 1 of 7 — Testing Categorical Distributions**

---

### When to Use Chi-Square Goodness-of-Fit

Use when you want to test whether **observed frequencies** match **expected frequencies** for a categorical variable.

**Example:** A die is rolled 60 times. Do the results suggest it is fair?

| Outcome | 1 | 2 | 3 | 4 | 5 | 6 |
|---------|---|---|---|---|---|---|
| Observed | 8 | 12 | 7 | 15 | 9 | 9 |
| Expected | 10 | 10 | 10 | 10 | 10 | 10 |

---

### The Chi-Square Statistic

$$\\\\chi^2 = \\\\sum \\\\frac{{(O_i - E_i)^2}}{{E_i}}$$

where $O_i$ = observed count and $E_i$ = expected count.

**For the die example:**
$$\\\\chi^2 = \\\\frac{{(8-10)^2}}{{10}} + \\\\frac{{(12-10)^2}}{{10}} + \\\\cdots = \\\\frac{{4+4+9+25+1+1}}{{10}} = 4.4$$

---

### Hypotheses

- $H_0$: The observed distribution matches the expected distribution
- $H_a$: The observed distribution does NOT match the expected

---

### Conditions

1. **Random** sample or random assignment
2. **Expected counts** ≥ 5 for all categories
3. **Independence** — observations are independent

> 🔑 Chi-square tests are always **right-tailed** — larger $\\\\chi^2$ values provide more evidence against $H_0$.`
    }},
    {{
      id: '{sid}-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Goodness-of-Fit Check** 🎯
      `,
      exercise: {{
        questions: [
          {{
            question: 'A chi-square goodness-of-fit test is used when comparing:',
            options: ['Two means', 'Observed vs. expected frequencies', 'Two proportions', 'Correlation coefficients'],
            correctAnswer: 1,
            explanation: 'Goodness-of-fit tests compare observed counts to expected counts for a single categorical variable.'
          }},
          {{
            question: 'Degrees of freedom for a goodness-of-fit test with $k$ categories:',
            options: ['$k$', '$k - 1$', '$k - 2$', '$n - 1$'],
            correctAnswer: 1,
            explanation: 'df = $k - 1$, where $k$ is the number of categories.'
          }},
          {{
            question: 'If all observed counts equal expected counts, $\\\\chi^2 =$',
            options: ['$0$', '$1$', '$k$', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'When $O_i = E_i$ for all $i$, each term $(O_i - E_i)^2/E_i = 0$, so $\\\\chi^2 = 0$.'
          }}
        ]
      }}
    }},
    {{
      id: '{sid}-input',
      type: 'input-boxes' as const,
      content: `
**Chi-Square Calculation** 🧮

A bag should contain equal numbers of 4 colors. From 80 candies: Red=24, Blue=18, Green=22, Yellow=16.

**1)** Expected count for each color = 80/4 = ?

**2)** Compute $\\\\chi^2 = \\\\frac{{(24-20)^2}}{{20}} + \\\\frac{{(18-20)^2}}{{20}} + \\\\frac{{(22-20)^2}}{{20}} + \\\\frac{{(16-20)^2}}{{20}}$

**3)** Degrees of freedom = $k - 1$ = ?
      `,
      exercise: {{
        boxes: 3,
        correctAnswers: ['20', '2', '3'],
        hint1: '$80/4 = 20$ per color.',
        hint2: '$(16+4+4+16)/20 = 40/20 = 2$.',
        hint3: '$4 - 1 = 3$ degrees of freedom.',
        explanation: '1) 20 each. 2) $\\\\chi^2 = 2$. 3) df = 3.'
      }}
    }}""",
        },
        'linear-regression-apstats': {
            1: f"""    {{
      id: '{sid}-intro',
      type: 'text' as const,
      content: `# 📈 Scatterplots and Correlation

**Part 1 of 7 — Exploring Bivariate Relationships**

---

### Describing Scatterplots

When examining a scatterplot, describe:

| Feature | Options |
|---------|---------|
| **Direction** | Positive, negative, or none |
| **Form** | Linear, curved, or no pattern |
| **Strength** | Strong, moderate, or weak |
| **Outliers** | Any points that don't fit the pattern |

---

### Correlation Coefficient $r$

The correlation $r$ measures the strength and direction of a **linear** relationship:

$$r = \\\\frac{{1}}{{n-1}} \\\\sum \\\\left(\\\\frac{{x_i - \\\\bar{{x}}}}{{s_x}}\\\\right)\\\\left(\\\\frac{{y_i - \\\\bar{{y}}}}{{s_y}}\\\\right)$$

| Value of $r$ | Interpretation |
|-------------|---------------|
| $r = 1$ | Perfect positive linear |
| $r = -1$ | Perfect negative linear |
| $r = 0$ | No linear relationship |
| $0.8 \\\\leq |r| \\\\leq 1$ | Strong linear |
| $0.5 \\\\leq |r| < 0.8$ | Moderate linear |

---

### Important Properties of $r$

- $-1 \\\\leq r \\\\leq 1$ always
- $r$ has no units
- $r$ is not affected by changes in units (e.g., inches to cm)
- $r$ measures only **linear** association — a strong curved relationship can have $r \\\\approx 0$
- $r$ is sensitive to outliers

> 🔑 **Correlation does NOT imply causation.** A strong correlation between two variables does not mean one causes the other.`
    }},
    {{
      id: '{sid}-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Correlation Check** 🎯
      `,
      exercise: {{
        questions: [
          {{
            question: 'If $r = -0.85$, the relationship is:',
            options: ['Strong positive', 'Weak negative', 'Strong negative', 'No relationship'],
            correctAnswer: 2,
            explanation: '$|r| = 0.85$ indicates strong, and the negative sign means the direction is negative (as $x$ increases, $y$ decreases).'
          }},
          {{
            question: 'Switching the roles of $x$ and $y$ in a scatterplot:',
            options: ['Changes $r$', 'Does not change $r$', 'Makes $r$ positive', 'Doubles $r$'],
            correctAnswer: 1,
            explanation: 'Correlation is symmetric — $r(x,y) = r(y,x)$.'
          }},
          {{
            question: 'A dataset shows a perfect U-shaped pattern. The correlation is likely:',
            options: ['$r = 1$', '$r = -1$', '$r \\\\approx 0$', '$r = 0.5$'],
            correctAnswer: 2,
            explanation: '$r$ measures linear association only. A perfect U-shape has no linear trend, so $r \\\\approx 0$ despite a clear pattern.'
          }}
        ]
      }}
    }},
    {{
      id: '{sid}-input',
      type: 'input-boxes' as const,
      content: `
**Correlation Practice** 🧮

**1)** If $r = 0.72$, what is $r^2$? (Round to 2 decimal places)

**2)** What percentage of variation in $y$ is explained by the linear relationship with $x$? (Use $r^2$ from #1, express as a whole number)

**3)** If every data point falls exactly on the line $y = 3x + 2$, then $r = $?
      `,
      exercise: {{
        boxes: 3,
        correctAnswers: ['0.52', '52', '1'],
        hint1: '$0.72^2 = 0.5184 \\\\approx 0.52$.',
        hint2: '$r^2 = 0.52 = 52\\\\%$.',
        hint3: 'Perfect linear with positive slope → $r = 1$.',
        explanation: '1) $r^2 = 0.52$. 2) 52% of variation explained. 3) $r = 1$ (perfect positive linear).'
      }}
    }}""",
        },
        'inference-regression-apstats': {
            1: f"""    {{
      id: '{sid}-intro',
      type: 'text' as const,
      content: `# 📐 Inference for Linear Regression

**Part 1 of 7 — Regression Model Assumptions**

---

### The Population Regression Model

$$y = \\\\beta_0 + \\\\beta_1 x + \\\\epsilon$$

where $\\\\epsilon \\\\sim N(0, \\\\sigma)$ — errors are normally distributed with constant spread.

| Symbol | Meaning |
|--------|---------|
| $\\\\beta_0$ | Population $y$-intercept |
| $\\\\beta_1$ | Population slope |
| $b_0$ | Sample $y$-intercept (estimate of $\\\\beta_0$) |
| $b_1$ | Sample slope (estimate of $\\\\beta_1$) |

---

### Conditions for Inference (LINE)

| Condition | Check |
|-----------|-------|
| **L**inear | Scatterplot and residual plot show no pattern |
| **I**ndependent | Observations are independent ($n < 10\\\\%$ of population) |
| **N**ormal | Residuals are approximately normal (histogram or Q-Q plot) |
| **E**qual variance | Residual plot shows constant spread (no fanning) |

> 🔑 **The residual plot is the most important diagnostic tool.** Look for random scatter around zero.`
    }},
    {{
      id: '{sid}-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Regression Assumptions** 🎯
      `,
      exercise: {{
        questions: [
          {{
            question: 'In the regression model $y = \\\\beta_0 + \\\\beta_1 x + \\\\epsilon$, the condition of equal variance means:',
            options: ['All $x$ values are equal', 'The spread of residuals is constant across all $x$', 'The mean of $y$ is constant', '$\\\\beta_1 = 0$'],
            correctAnswer: 1,
            explanation: 'Equal variance (homoscedasticity) means the residuals have the same spread regardless of the $x$ value.'
          }},
          {{
            question: 'A residual plot showing a curved pattern suggests:',
            options: ['The relationship is linear', 'The model needs a transformation', 'Equal variance is met', 'The data is normal'],
            correctAnswer: 1,
            explanation: 'A curved residual plot indicates the linear model is inappropriate — a transformation or polynomial model may be needed.'
          }},
          {{
            question: '$b_1$ is an estimate of:',
            options: ['The sample mean', 'The population slope $\\\\beta_1$', 'The correlation $r$', 'The residual'],
            correctAnswer: 1,
            explanation: '$b_1$ is the sample slope — our best estimate of the true population slope $\\\\beta_1$.'
          }}
        ]
      }}
    }}""",
        },
        'comparing-populations-apstats': {
            1: f"""    {{
      id: '{sid}-intro',
      type: 'text' as const,
      content: `# ⚖️ Comparing Two Populations

**Part 1 of 7 — Two-Sample Z-Test for Proportions**

---

### When to Compare Two Proportions

Use when you have two independent groups and want to test whether their population proportions differ.

**Example:** Is the proportion of smartphone users higher among teens than adults?

---

### Hypotheses

$$H_0: p_1 - p_2 = 0 \\\\quad (\\\\text{{no difference}})$$
$$H_a: p_1 - p_2 \\\\neq 0 \\\\quad (\\\\text{{or }} > 0 \\\\text{{ or }} < 0)$$

---

### Test Statistic

$$z = \\\\frac{{(\\\\hat{{p}}_1 - \\\\hat{{p}}_2) - 0}}{{\\\\sqrt{{\\\\hat{{p}}(1-\\\\hat{{p}})\\\\left(\\\\frac{{1}}{{n_1}} + \\\\frac{{1}}{{n_2}}\\\\right)}}}}$$

where $\\\\hat{{p}} = \\\\frac{{x_1 + x_2}}{{n_1 + n_2}}$ is the **pooled proportion**.

---

### Conditions

1. **Random** samples from both populations
2. **Independent** groups (and $n < 10\\\\%$ of population for each)
3. **Large counts**: $n_1\\\\hat{{p}}, n_1(1-\\\\hat{{p}}), n_2\\\\hat{{p}}, n_2(1-\\\\hat{{p}}) \\\\geq 10$

> 🔑 Under $H_0$, we assume $p_1 = p_2$, so we use the **pooled proportion** $\\\\hat{{p}}$ for the standard error.`
    }},
    {{
      id: '{sid}-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Two-Proportion Test** 🎯
      `,
      exercise: {{
        questions: [
          {{
            question: 'Why do we use a pooled proportion $\\\\hat{{p}}$ in a two-proportion z-test?',
            options: ['Because samples must be equal size', 'Because we assume $p_1 = p_2$ under $H_0$', 'Because it makes calculations easier', 'Because the populations are the same'],
            correctAnswer: 1,
            explanation: 'Under $H_0$, we assume the two population proportions are equal, so we pool the data to estimate the common proportion.'
          }},
          {{
            question: 'Group 1: 40/100 successes. Group 2: 60/200 successes. The pooled $\\\\hat{{p}} =$',
            options: ['$0.50$', '$0.33$', '$0.40$', '$0.30$'],
            correctAnswer: 1,
            explanation: '$\\\\hat{{p}} = (40 + 60)/(100 + 200) = 100/300 = 0.333$.'
          }}
        ]
      }}
    }},
    {{
      id: '{sid}-input',
      type: 'input-boxes' as const,
      content: `
**Two-Proportion Calculations** 🧮

Treatment group: 45 successes out of 150. Control group: 30 successes out of 150.

**1)** $\\\\hat{{p}}_1 = 45/150 = $? (Express as a decimal)

**2)** $\\\\hat{{p}}_2 = 30/150 = $?

**3)** Pooled $\\\\hat{{p}} = (45+30)/(150+150) = $?
      `,
      exercise: {{
        boxes: 3,
        correctAnswers: ['0.30', '0.20', '0.25'],
        hint1: '$45/150 = 0.30$.',
        hint2: '$30/150 = 0.20$.',
        hint3: '$75/300 = 0.25$.',
        explanation: '1) $\\\\hat{{p}}_1 = 0.30$. 2) $\\\\hat{{p}}_2 = 0.20$. 3) Pooled $\\\\hat{{p}} = 0.25$.'
      }}
    }}""",
        },
    }

    # Get specific content for this topic and part, or generate a generic one
    topic_content = content_map.get(slug, {})
    if part_num in topic_content:
        return topic_content[part_num]
    
    # Generate generic content for parts not specifically defined
    return f"""    {{
      id: '{sid}-intro',
      type: 'text' as const,
      content: `# 📊 {title}

**Part {part_num} of 7 — {title}**

---

### Key Concepts

This section covers essential concepts related to **{title.lower()}** in AP Statistics.

Understanding these ideas is crucial for:
- Interpreting statistical output correctly
- Making valid inferences from data
- Succeeding on the AP Statistics exam

---

### Important Formulas and Definitions

Review the key formulas and definitions covered in the previous sections. Practice applying them to new contexts.

> 🔑 **AP Tip:** Always state hypotheses, check conditions, calculate the test statistic, find the p-value, and state your conclusion in context.`
    }},
    {{
      id: '{sid}-mcq1',
      type: 'multiple-choice' as const,
      content: `
**{title} Check** 🎯
      `,
      exercise: {{
        questions: [
          {{
            question: 'Which of the following is essential when performing statistical inference?',
            options: ['Large population', 'Checking conditions before proceeding', 'Equal sample sizes', 'Knowing the population parameter'],
            correctAnswer: 1,
            explanation: 'Conditions (randomness, normality, independence) must be verified before any inference procedure.'
          }},
          {{
            question: 'In AP Statistics, conclusions should always be stated:',
            options: ['Using technical jargon only', 'In the context of the problem', 'Without reference to p-values', 'As certainties'],
            correctAnswer: 1,
            explanation: 'AP scoring rubrics require conclusions in context — referencing the specific variables and setting of the problem.'
          }}
        ]
      }}
    }}"""


def write_file(topic, part_idx, content):
    slug = topic['slug']
    part_num = part_idx + 1
    filename = f"apstats-{slug.replace('-apstats', '')}-part{part_num}.ts"
    filepath = os.path.join(BASE, filename)
    with open(filepath, 'w') as f:
        f.write(content)
    print(f'  Created: {filename}')


def main():
    print("=== Generating AP Statistics Lessons ===\n")
    
    # Generate Topic 1 & 2 (fully defined with rich content)
    for topic in TOPICS:
        print(f"Topic: {topic['slug']}")
        for i in range(len(topic['parts'])):
            content = generate_rich_lesson(topic, i)
            write_file(topic, i, content)
    
    # Generate Topics 3-8 (skeleton-based with detailed Part 1)
    for topic_info in MORE_TOPICS:
        print(f"Topic: {topic_info['slug']}")
        for i, part_title in enumerate(topic_info['parts']):
            content = generate_skeleton_lesson(topic_info, i)
            write_file(topic_info, i, content)
    
    total = sum(len(t['parts']) for t in TOPICS) + sum(len(t['parts']) for t in MORE_TOPICS)
    print(f"\n✅ Generated {total} lesson files")


if __name__ == '__main__':
    main()
