#!/usr/bin/env python3
"""Upgrade 6 AP Stats skeleton topics to rich lessons (overwrite existing files)."""
import os

BASE = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'interactive-lessons')

TOPICS = [
    {
        'slug': 'experimental-design-apstats',
        'filePrefix': 'apstats-experimental-design',
        'exportPrefix': 'apStatsExpDesign',
        'idPrefix': 'experimentaldesign',
        'parts': [
            {
                'title': 'Principles of Experimental Design',
                'content': """# \U0001f52c Experimental Design

**Part 1 of 7 \u2014 Principles of Experimental Design**

---

### Three Principles of Experimental Design

| Principle | Description |
|-----------|------------|
| **Control** | Keep all variables the same except the one being tested |
| **Randomization** | Randomly assign subjects to treatment groups |
| **Replication** | Use enough subjects to detect a real effect |

---

### Vocabulary

- **Explanatory variable (factor):** The variable manipulated by the researcher
- **Response variable:** The outcome being measured
- **Treatments:** The specific conditions applied to subjects
- **Experimental units:** The individuals being studied (called **subjects** if human)

### Example

A pharmaceutical company tests a new drug. 200 patients are randomly assigned to receive the drug or a placebo. Blood pressure is measured after 8 weeks.

- **Factor:** Drug vs. placebo
- **Response:** Blood pressure change
- **Experimental units:** The 200 patients
- **Treatments:** Drug, placebo""",
                'mcqs': [
                    ('Which is NOT a principle of experimental design?',
                     ['Control', 'Randomization', 'Correlation', 'Replication'],
                     2, 'Correlation is a statistical concept, not a design principle. The three principles are Control, Randomization, and Replication.'),
                    ('Random assignment helps to:',
                     ['Increase sample size', 'Balance confounding variables across groups', 'Guarantee results', 'Eliminate all bias'],
                     1, 'Randomization distributes both known and unknown confounding variables roughly equally across groups.'),
                    ('In an experiment testing fertilizer on plant growth, the response variable is:',
                     ['Type of fertilizer', 'Amount of water', 'Plant growth', 'Number of plants'],
                     2, 'The response variable is what you measure as the outcome \u2014 plant growth.')
                ],
                'inputs': {
                    'prompt': """**Design Identification** \U0001f9ee

A researcher wants to test whether a new teaching method improves test scores. She randomly assigns 60 students to either the new method or traditional method, then compares their exam results.

**1)** What is the explanatory variable?

**2)** What is the response variable?

**3)** How many treatments are there?""",
                    'boxes': 3,
                    'answers': ['teaching method', 'test scores', '2'],
                    'hints': ['What is being manipulated?', 'What is being measured?', 'New method vs. traditional method'],
                    'explanation': '1) Teaching method (new vs. traditional). 2) Test scores. 3) Two treatments: new method and traditional method.'
                }
            },
            {
                'title': 'Randomization Techniques',
                'content': """# \U0001f3b2 Randomization Techniques

**Part 2 of 7 \u2014 Randomization Techniques**

---

### Why Randomize?

Randomization serves two purposes:
1. **Eliminates bias** in group assignment
2. **Balances confounding variables** (both known and unknown)

---

### Methods of Random Assignment

| Method | How It Works |
|--------|-------------|
| **Simple random assignment** | Each unit has equal chance of each treatment |
| **Random number table/generator** | Use digits to assign groups |
| **Coin flip / die roll** | Physical randomization device |

### Example: Using a Random Number Table

To assign 30 students to two groups:
1. Number students 01\u201330
2. Read two-digit numbers from the table
3. First 15 unique numbers \u2192 Group A
4. Remaining 15 \u2192 Group B

### Completely Randomized Design

All experimental units are randomly assigned to treatments with no grouping.

$$\\\\text{Random Assignment} \\\\to \\\\begin{cases} \\\\text{Treatment 1} \\\\\\\\ \\\\text{Treatment 2} \\\\end{cases} \\\\to \\\\text{Compare Results}$$""",
                'mcqs': [
                    ('In a completely randomized design:',
                     ['Subjects choose their own group', 'All subjects are assigned randomly to treatments', 'Subjects are first grouped, then randomized', 'No randomization is used'],
                     1, 'A completely randomized design assigns all subjects randomly to treatment groups without any prior grouping.'),
                    ('Using a random number table ensures:',
                     ['Perfect balance in every variable', 'Unbiased assignment to groups', 'Equal sample sizes', 'No confounding variables'],
                     1, 'Random number tables provide unbiased assignment. They don\u2019t guarantee perfect balance but eliminate systematic bias.'),
                    ('Why is flipping a coin an acceptable randomization method?',
                     ['It\u2019s fast', 'It gives each subject equal probability of each group', 'It always creates equal groups', 'It eliminates all confounders'],
                     1, 'A fair coin gives 50/50 probability for each group, which is the core requirement of randomization.')
                ],
                'inputs': {
                    'prompt': """**Random Assignment** \U0001f9ee

You have 40 volunteers for a study with 2 treatments.

**1)** In a completely randomized design, how many subjects per group?

**2)** If you use a random number table with numbers 01-40, what range goes to Treatment A? (e.g., 01-20)

**3)** What is the purpose of randomization? (bias/replication/control)""",
                    'boxes': 3,
                    'answers': ['20', '01-20', 'bias'],
                    'hints': ['40 total \u00f7 2 groups', 'First 20 unique numbers', 'Randomization eliminates what?'],
                    'explanation': '1) 20 per group. 2) Numbers 01-20 go to Treatment A (21-40 to B). 3) Purpose is to eliminate bias in assignment.'
                }
            },
            {
                'title': 'Blocking',
                'content': """# \U0001f9f1 Blocking

**Part 3 of 7 \u2014 Blocking**

---

### What Is Blocking?

**Blocking** groups experimental units by a characteristic expected to affect the response, then randomizes within each block.

> \U0001f511 Purpose: Reduce variability and increase the precision of the experiment.

---

### Randomized Block Design

1. **Identify** a blocking variable (e.g., age, gender, baseline fitness)
2. **Group** subjects into blocks of similar units
3. **Randomly assign** treatments within each block
4. **Analyze** results

### Example

Testing a new diet\u2019s effect on weight loss. Block by gender:

| Block | Treatment A (New Diet) | Treatment B (Control) |
|-------|----------------------|---------------------|
| Males | 15 randomly assigned | 15 randomly assigned |
| Females | 15 randomly assigned | 15 randomly assigned |

### Blocking vs. Confounding Variables

- **Blocking variable:** A variable you KNOW affects the response (you control for it)
- **Confounding variable:** A variable that is mixed up with the explanatory variable (uncontrolled)

### Matched Pairs Design

A special case of blocking where:
- Each block has exactly **2 units** (or same subject gets both treatments)
- Often: before/after measurements on the same person""",
                'mcqs': [
                    ('Blocking is used to:',
                     ['Increase sample size', 'Reduce variability within groups', 'Eliminate the need for randomization', 'Create bias'],
                     1, 'Blocking reduces variability by grouping similar units together, making it easier to detect treatment effects.'),
                    ('In a matched pairs design:',
                     ['Subjects are randomly selected from a population', 'Each block contains exactly 2 experimental units', 'No randomization is needed', 'The sample size must be even'],
                     1, 'Matched pairs = blocks of size 2, either paired subjects or same subject under both conditions.'),
                    ('A good blocking variable is one that:',
                     ['Is randomly assigned', 'Is known to affect the response variable', 'Has nothing to do with the response', 'Is the same as the explanatory variable'],
                     1, 'Block on variables you believe influence the response to reduce unexplained variability.')
                ],
                'inputs': {
                    'prompt': """**Blocking Design** \U0001f9ee

A researcher tests whether a new fertilizer increases crop yield. Fields vary in sun exposure (high/low).

**1)** What is the blocking variable?

**2)** How many blocks are there?

**3)** Within each block, how do you assign fertilizer vs. control? (randomly/alphabetically/by size)""",
                    'boxes': 3,
                    'answers': ['sun exposure', '2', 'randomly'],
                    'hints': ['What varies and affects yield?', 'High sun and low sun', 'Assignment within blocks should be...'],
                    'explanation': '1) Sun exposure. 2) Two blocks (high and low sun). 3) Randomly assign within each block.'
                }
            },
            {
                'title': 'Types of Studies',
                'content': """# \U0001f4cb Types of Studies

**Part 4 of 7 \u2014 Observational Studies vs. Experiments**

---

### Two Types of Studies

| Feature | Observational Study | Experiment |
|---------|-------------------|------------|
| **Treatment** | No treatment imposed | Researcher imposes treatments |
| **Causation** | Cannot establish cause and effect | CAN establish cause and effect |
| **Random assignment** | Not applicable | Essential |
| **Examples** | Surveys, medical records | Clinical trials, A/B tests |

---

### Key Rule

> \U0001f4a1 **Only experiments can establish causation.** Observational studies can only show association.

### Types of Observational Studies

| Type | Description |
|------|------------|
| **Sample survey** | Collects data at one point in time |
| **Prospective** | Follows subjects forward in time |
| **Retrospective** | Looks back at existing data |

### Example

\u201cPeople who exercise more have lower rates of heart disease.\u201d
- This is an **observational** finding (no one was assigned to exercise)
- We CANNOT say exercise **causes** lower heart disease from this alone
- Confounders: diet, genetics, socioeconomic status""",
                'mcqs': [
                    ('An observational study differs from an experiment because:',
                     ['It uses larger samples', 'No treatment is imposed on subjects', 'It uses randomization', 'It always uses surveys'],
                     1, 'In observational studies, researchers observe without imposing treatments.'),
                    ('Which study design CAN establish causation?',
                     ['Retrospective study', 'Sample survey', 'Randomized experiment', 'Prospective observational study'],
                     2, 'Only randomized experiments can establish cause-and-effect relationships.'),
                    ('A researcher finds that ice cream sales and drowning rates are correlated. This means:',
                     ['Ice cream causes drowning', 'Drowning causes ice cream sales', 'There is likely a confounding variable (heat/summer)', 'The study is invalid'],
                     2, 'Both increase in summer. Temperature is the confounding variable \u2014 correlation does not imply causation.')
                ],
                'inputs': {
                    'prompt': """**Study Classification** \U0001f9ee

Classify each as observational (O) or experimental (E):

**1)** Researchers survey 500 people about their diet and measure cholesterol levels.

**2)** 100 volunteers are randomly assigned to take vitamin D or a placebo for 6 months.

**3)** Hospital records are examined to compare outcomes of two surgical approaches.""",
                    'boxes': 3,
                    'answers': ['O', 'E', 'O'],
                    'hints': ['Is any treatment imposed?', 'Random assignment to treatments', 'Looking back at existing data'],
                    'explanation': '1) Observational \u2014 no treatment imposed. 2) Experiment \u2014 random assignment to treatments. 3) Observational (retrospective) \u2014 examining existing records.'
                }
            },
            {
                'title': 'Confounding and Bias',
                'content': """# \u26a0\ufe0f Confounding and Bias

**Part 5 of 7 \u2014 Sources of Error**

---

### Confounding Variables

A **confounding variable** is associated with both the explanatory and response variables, making it impossible to determine which causes the effect.

$$\\\\text{Explanatory} \\\\leftarrow \\\\text{Confounder} \\\\rightarrow \\\\text{Response}$$

---

### Types of Bias

| Bias | Description | Example |
|------|------------|---------|
| **Selection bias** | Sample is not representative | Surveying only gym members about exercise |
| **Response bias** | Subjects give inaccurate answers | Asking about illegal behavior |
| **Nonresponse bias** | Many selected subjects don\u2019t respond | Low survey return rate |
| **Measurement bias** | Instruments or questions are flawed | Leading questions |
| **Voluntary response bias** | Only motivated people respond | Online reviews |

### Placebo Effect and Blinding

- **Placebo:** An inactive treatment that looks identical to the real one
- **Single-blind:** Subjects don\u2019t know which treatment they receive
- **Double-blind:** Neither subjects NOR researchers know who gets what

> \U0001f511 Double-blinding prevents both placebo effect AND researcher bias.""",
                'mcqs': [
                    ('A confounding variable:',
                     ['Only appears in experiments', 'Is associated with both the explanatory and response variables', 'Can be eliminated by using a large sample', 'Is the same as a lurking variable'],
                     1, 'A confounder is linked to both variables, making it impossible to isolate the explanatory variable\u2019s effect.'),
                    ('Double-blinding means:',
                     ['Using two placebos', 'Neither subjects nor researchers know group assignments', 'Running the experiment twice', 'Using two control groups'],
                     1, 'Double-blind: both subjects and evaluators are unaware of treatment assignments.'),
                    ('Which scenario shows voluntary response bias?',
                     ['A random phone survey', 'An online poll asking viewers to call in', 'A census of all employees', 'A stratified random sample'],
                     1, 'Call-in polls attract people with strong opinions, creating voluntary response bias.')
                ],
                'inputs': {
                    'prompt': """**Bias Identification** \U0001f9ee

**1)** A study finds coffee drinkers live longer. Name a possible confounding variable.

**2)** In a drug trial, patients know whether they get the real drug. What kind of blinding is missing? (single/double)

**3)** A magazine asks readers to mail in a survey. What type of bias is this? (voluntary response/selection/nonresponse)""",
                    'boxes': 3,
                    'answers': ['socioeconomic status', 'single', 'voluntary response'],
                    'hints': ['What else differs between coffee drinkers and non-drinkers?', 'Patients should not know their treatment', 'Only motivated readers respond'],
                    'explanation': '1) Socioeconomic status (or income, lifestyle, etc.). 2) Single-blinding is missing. 3) Voluntary response bias \u2014 only interested readers participate.'
                }
            },
            {
                'title': 'Problem-Solving Workshop',
                'content': """# \U0001f3c6 Problem-Solving Workshop

**Part 6 of 7 \u2014 AP-Style Practice**

---

### AP Exam Framework

Experimental design questions often ask you to:
1. **Describe** a completely randomized design
2. **Explain** why blocking is used
3. **Identify** confounding variables
4. **Distinguish** between observational and experimental studies

---

### How to Describe a Design (AP FRQ)

1. State groups and sizes
2. Describe random assignment method
3. Identify treatments
4. State the response variable
5. Mention comparison between groups

### Template Answer

\u201cRandomly assign the 80 subjects to two groups of 40. Group 1 receives Treatment A and Group 2 receives Treatment B. After 6 weeks, compare the mean [response variable] between the two groups.\u201d""",
                'mcqs': [
                    ('When describing a completely randomized design on the AP exam, you must include:',
                     ['Only the treatments', 'Random assignment, treatments, and response variable', 'Only the sample size', 'Only the hypothesis'],
                     1, 'A complete description needs random assignment method, specific treatments, and the response variable being measured.'),
                    ('A researcher wants to test 3 brands of sunscreen. With 90 subjects, each group should have:',
                     ['90 subjects', '30 subjects', '45 subjects', 'It doesn\u2019t matter'],
                     1, '90 subjects \u00f7 3 treatments = 30 per group for a balanced design.'),
                    ('Why should you include a control group?',
                     ['To increase sample size', 'To provide a baseline for comparison', 'To make the experiment double-blind', 'To reduce blocking'],
                     1, 'A control group provides a baseline to compare against the treatment\u2019s effect.')
                ],
                'inputs': {
                    'prompt': """**Design an Experiment** \U0001f9ee

A teacher wants to test whether background music improves quiz scores. She has 40 students.

**1)** How many students per group in a completely randomized design with 2 treatments?

**2)** What is the explanatory variable?

**3)** Should students know whether music is being played for them? (yes/no) Why?""",
                    'boxes': 3,
                    'answers': ['20', 'background music', 'no'],
                    'hints': ['40 \u00f7 2', 'What is being varied?', 'Think about placebo effect'],
                    'explanation': '1) 20 per group. 2) Background music (present vs. absent). 3) No \u2014 to prevent the placebo effect from influencing results.'
                }
            },
            {
                'title': 'Mixed Review',
                'content': """# \U0001f4dd Mixed Review

**Part 7 of 7 \u2014 Comprehensive Review**

---

### Key Concepts Checklist

- [ ] Three principles: Control, Randomization, Replication
- [ ] Observational vs. Experimental studies
- [ ] Completely randomized design
- [ ] Randomized block design & matched pairs
- [ ] Sources of bias (selection, response, nonresponse, voluntary)
- [ ] Confounding variables
- [ ] Blinding (single and double)
- [ ] Placebo and placebo effect

### AP Exam Tips

- \u201cExplain why\u201d = give a reason connected to bias or variability
- Always mention **random assignment** when describing experiments
- Use the word **cause** only with experiments, never with observational studies""",
                'mcqs': [
                    ('Which can establish a cause-and-effect relationship?',
                     ['A large observational study', 'A sample survey with 10,000 responses', 'A properly designed randomized experiment', 'A retrospective study'],
                     2, 'Only randomized experiments can establish causation, regardless of sample size.'),
                    ('Replication in experimental design means:',
                     ['Repeating the entire experiment', 'Using enough subjects to detect a real effect', 'Using two identical treatments', 'Publishing the results'],
                     1, 'Replication = sufficient sample size to reduce chance variation and detect true effects.'),
                    ('A matched pairs design is best when:',
                     ['You have many treatment groups', 'Each subject can serve as their own control', 'The sample size is very large', 'You cannot use randomization'],
                     1, 'Matched pairs works best when subjects can be paired (or the same subject measured twice) to reduce variability.')
                ],
                'inputs': {
                    'prompt': """**Final Review** \U0001f9ee

**1)** In a randomized block design, you randomize WITHIN blocks. True or False?

**2)** Can an observational study prove causation? (yes/no)

**3)** What does a placebo control for? (confounding/placebo effect/sample size)""",
                    'boxes': 3,
                    'answers': ['true', 'no', 'placebo effect'],
                    'hints': ['Blocking groups similar units, then...', 'Only experiments can prove...', 'Why give a fake treatment?'],
                    'explanation': '1) True \u2014 randomize within each block. 2) No \u2014 only experiments establish causation. 3) The placebo effect \u2014 so improvements aren\u2019t just from believing they got treatment.'
                }
            }
        ]
    },
    {
        'slug': 'probability-distributions-apstats',
        'filePrefix': 'apstats-probability-distributions',
        'exportPrefix': 'apStatsProbDist',
        'idPrefix': 'probdistributions',
        'parts': [
            {
                'title': 'Introduction to Probability Distributions',
                'content': """# \U0001f4ca Introduction to Probability Distributions

**Part 1 of 7 \u2014 The Normal Model**

---

### The Normal Distribution

The most important continuous probability distribution in statistics.

**Key Properties:**
- Bell-shaped and symmetric
- Mean = median = mode (at center)
- Described completely by $\\\\mu$ (mean) and $\\\\sigma$ (standard deviation)
- Notation: $X \\\\sim N(\\\\mu, \\\\sigma)$

---

### The 68-95-99.7 Rule (Empirical Rule)

| Range | Percent of Data |
|-------|----------------|
| $\\\\mu \\\\pm 1\\\\sigma$ | \u224868% |
| $\\\\mu \\\\pm 2\\\\sigma$ | \u224895% |
| $\\\\mu \\\\pm 3\\\\sigma$ | \u224899.7% |

### Example

Heights of adult women: $N(64, 2.5)$ inches
- 68% are between 61.5 and 66.5 inches
- 95% are between 59 and 69 inches
- 99.7% are between 56.5 and 71.5 inches""",
                'mcqs': [
                    ('The Normal distribution is characterized by:',
                     ['Mean and range', 'Mean and standard deviation', 'Median and IQR', 'Mode and variance'],
                     1, 'A Normal distribution is completely described by its mean $\\\\mu$ and standard deviation $\\\\sigma$.'),
                    ('Using the 68-95-99.7 rule, about what percent of data falls within 2 standard deviations of the mean?',
                     ['68%', '95%', '99.7%', '50%'],
                     1, 'Approximately 95% of data falls within $\\\\mu \\\\pm 2\\\\sigma$.'),
                    ('If $X \\\\sim N(100, 15)$, about 68% of values fall between:',
                     ['70 and 130', '85 and 115', '55 and 145', '100 and 115'],
                     1, '$100 \\\\pm 15 = [85, 115]$. The 68% range is one standard deviation from the mean.')
                ],
                'inputs': {
                    'prompt': """**Empirical Rule Practice** \U0001f9ee

SAT scores follow $N(1060, 195)$.

**1)** 68% of scores fall between ___ and ___ (give the lower bound)

**2)** What\u2019s the upper bound?

**3)** What percent of scores fall below $1060$?""",
                    'boxes': 3,
                    'answers': ['865', '1255', '50'],
                    'hints': ['$1060 - 195 = ?$', '$1060 + 195 = ?$', 'Normal distribution is symmetric about the mean'],
                    'explanation': '1) $1060 - 195 = 865$. 2) $1060 + 195 = 1255$. 3) 50% \u2014 the Normal distribution is symmetric.'
                }
            },
            {
                'title': 'Z-Scores',
                'content': """# \U0001f4cf Z-Scores

**Part 2 of 7 \u2014 Standardizing Values**

---

### The Z-Score Formula

$$z = \\\\frac{x - \\\\mu}{\\\\sigma}$$

A z-score tells you **how many standard deviations** a value is from the mean.

| Z-Score | Interpretation |
|---------|---------------|
| $z = 0$ | At the mean |
| $z = 1$ | 1 SD above the mean |
| $z = -2$ | 2 SD below the mean |

---

### Standard Normal Distribution

When we standardize, we convert to $Z \\\\sim N(0, 1)$.

### Example

Test scores: $\\\\mu = 75$, $\\\\sigma = 8$. A student scores 91.

$$z = \\\\frac{91 - 75}{8} = \\\\frac{16}{8} = 2.0$$

The student scored **2 standard deviations above the mean**.""",
                'mcqs': [
                    ('A z-score of $-1.5$ means the value is:',
                     ['1.5 standard deviations above the mean', '1.5 standard deviations below the mean', '1.5 units below the mean', 'Below the median'],
                     1, 'A negative z-score means below the mean; the magnitude tells how many SDs.'),
                    ('If $\\\\mu = 50$ and $\\\\sigma = 10$, the z-score for $x = 65$ is:',
                     ['0.5', '1.0', '1.5', '6.5'],
                     2, '$z = (65-50)/10 = 15/10 = 1.5$.'),
                    ('The standard Normal distribution has:',
                     ['$\\\\mu = 1, \\\\sigma = 0$', '$\\\\mu = 0, \\\\sigma = 1$', '$\\\\mu = 0, \\\\sigma = 0$', '$\\\\mu = 100, \\\\sigma = 15$'],
                     1, 'The standard Normal is $N(0, 1)$ \u2014 mean 0, standard deviation 1.')
                ],
                'inputs': {
                    'prompt': """**Z-Score Calculations** \U0001f9ee

Heights: $\\\\mu = 170$ cm, $\\\\sigma = 6$ cm.

**1)** Z-score for a height of 182 cm?

**2)** Z-score for a height of 158 cm?

**3)** A z-score of 0 corresponds to what height? (in cm)""",
                    'boxes': 3,
                    'answers': ['2', '-2', '170'],
                    'hints': ['$(182-170)/6$', '$(158-170)/6$', '$z = 0$ means at the mean'],
                    'explanation': '1) $(182-170)/6 = 2.0$. 2) $(158-170)/6 = -2.0$. 3) $z = 0$ corresponds to $\\\\mu = 170$ cm.'
                }
            },
            {
                'title': 'Normal Probabilities with Tables',
                'content': """# \U0001f4d6 Normal Probabilities

**Part 3 of 7 \u2014 Using the Standard Normal Table**

---

### Finding Probabilities

The Standard Normal Table (Table A) gives $P(Z < z)$ \u2014 the area to the LEFT of $z$.

### Three Cases

| Want | Formula |
|------|---------|
| $P(Z < z)$ | Read directly from table |
| $P(Z > z)$ | $1 - P(Z < z)$ |
| $P(a < Z < b)$ | $P(Z < b) - P(Z < a)$ |

---

### Example

$P(Z < 1.25)$: Look up $z = 1.25$ in Table A \u2192 $0.8944$

$P(Z > 1.25) = 1 - 0.8944 = 0.1056$

$P(-1 < Z < 1.25) = P(Z < 1.25) - P(Z < -1) = 0.8944 - 0.1587 = 0.7357$

### Working Backwards (Inverse Normal)

To find the z-score for a given percentile:
- 90th percentile: $z = 1.28$
- 95th percentile: $z = 1.645$
- 97.5th percentile: $z = 1.96$""",
                'mcqs': [
                    ('$P(Z < -1.5)$ from Table A is approximately:',
                     ['0.0668', '0.9332', '0.1587', '0.5000'],
                     0, 'Looking up $z = -1.5$ in the standard Normal table gives approximately 0.0668.'),
                    ('$P(Z > 2.0)$ equals:',
                     ['$P(Z < 2.0)$', '$1 - P(Z < 2.0)$', '$P(Z < -2.0)$', 'Both B and C'],
                     3, '$P(Z > 2.0) = 1 - P(Z < 2.0)$, which by symmetry also equals $P(Z < -2.0)$.'),
                    ('The z-score for the 75th percentile is approximately:',
                     ['0.25', '0.67', '0.75', '1.28'],
                     1, 'The 75th percentile corresponds to $z \\\\approx 0.67$.')
                ],
                'inputs': {
                    'prompt': """**Normal Probability** \U0001f9ee

$P(Z < 1.0) = 0.8413$ and $P(Z < -0.5) = 0.3085$.

**1)** $P(Z > 1.0) = ?$

**2)** $P(-0.5 < Z < 1.0) = ?$

**3)** What percent of a Normal distribution falls between $z = -0.5$ and $z = 1.0$?""",
                    'boxes': 3,
                    'answers': ['0.1587', '0.5328', '53.28'],
                    'hints': ['$1 - 0.8413$', '$0.8413 - 0.3085$', 'Convert the probability to percent'],
                    'explanation': '1) $1 - 0.8413 = 0.1587$. 2) $0.8413 - 0.3085 = 0.5328$. 3) $53.28\\\\%$.'
                }
            },
            {
                'title': 'Assessing Normality',
                'content': """# \U0001f50d Assessing Normality

**Part 4 of 7 \u2014 Is the Data Normal?**

---

### Normal Probability Plot (Normal Quantile Plot)

A graph that plots each data value against its expected z-score if the data were perfectly Normal.

**Interpretation:**
- **Roughly linear pattern** \u2192 Data is approximately Normal
- **Curved pattern** \u2192 Data is NOT Normal
- **S-shape** \u2192 Data has outliers or is heavy-tailed

---

### Other Methods to Assess Normality

| Method | What to Look For |
|--------|-----------------|
| Histogram | Bell-shaped? |
| Boxplot | Symmetric? No extreme outliers? |
| 68-95-99.7 Rule | Do percentages roughly match? |
| Normal probability plot | Points approximately linear? |

### When Can We Assume Normality?

- **Large samples** ($n \\\\geq 30$): CLT applies regardless
- **Small samples**: Need to check Normal probability plot
- **Known Normal populations**: Always OK""",
                'mcqs': [
                    ('A Normal probability plot that is roughly linear suggests:',
                     ['The data is skewed', 'The data is approximately Normal', 'The sample is too small', 'Outliers are present'],
                     1, 'A roughly linear Normal probability plot indicates the data follows an approximately Normal distribution.'),
                    ('Which is the best way to assess Normality for a small sample?',
                     ['Look at the mean', 'Use a Normal probability plot', 'Check if the standard deviation is small', 'Assume it\u2019s Normal'],
                     1, 'For small samples, the Normal probability plot is the most reliable visual check.'),
                    ('The Central Limit Theorem says the sampling distribution is approximately Normal when:',
                     ['The population is Normal', '$n \\\\geq 30$', 'The data has no outliers', 'All of the above help'],
                     3, 'Normal population (always), large $n$ (CLT), and no outliers (for small $n$) all support using Normal methods.')
                ],
                'inputs': {
                    'prompt': """**Normality Assessment** \U0001f9ee

**1)** A Normal probability plot shows an S-shaped curve. Is the data Normal? (yes/no)

**2)** For $n = 50$ data points, can you use Normal methods even if the population isn\u2019t Normal? (yes/no)

**3)** What rule can you use to check if data roughly follows a Normal distribution? (state the name)""",
                    'boxes': 3,
                    'answers': ['no', 'yes', '68-95-99.7'],
                    'hints': ['S-shape = departure from Normality', 'Central Limit Theorem with large $n$', 'The Empirical Rule has three numbers'],
                    'explanation': '1) No \u2014 an S-shape indicates non-Normality. 2) Yes \u2014 CLT applies for $n \\\\geq 30$. 3) The 68-95-99.7 (Empirical) Rule.'
                }
            },
            {
                'title': 'Sampling Distributions',
                'content': """# \U0001f4ca Sampling Distributions

**Part 5 of 7 \u2014 Sampling Distributions of $\\\\bar{x}$ and $\\\\hat{p}$**

---

### Sampling Distribution of $\\\\bar{x}$

If we take many samples of size $n$ from a population with mean $\\\\mu$ and SD $\\\\sigma$:

$$\\\\bar{x} \\\\sim N\\\\left(\\\\mu, \\\\frac{\\\\sigma}{\\\\sqrt{n}}\\\\right)$$

| Property | Value |
|----------|-------|
| Mean | $\\\\mu_{\\\\bar{x}} = \\\\mu$ |
| Standard deviation | $\\\\sigma_{\\\\bar{x}} = \\\\frac{\\\\sigma}{\\\\sqrt{n}}$ |
| Shape | Normal (if population Normal OR $n \\\\geq 30$) |

---

### Sampling Distribution of $\\\\hat{p}$

For proportions from samples of size $n$ where population proportion is $p$:

$$\\\\hat{p} \\\\sim N\\\\left(p, \\\\sqrt{\\\\frac{p(1-p)}{n}}\\\\right)$$

**Conditions:** $np \\\\geq 10$ and $n(1-p) \\\\geq 10$

### Key Insight

As $n$ increases, the standard deviation **decreases** \u2014 larger samples give more precise estimates.""",
                'mcqs': [
                    ('The standard deviation of $\\\\bar{x}$ is:',
                     ['$\\\\sigma$', '$\\\\sigma/n$', '$\\\\sigma/\\\\sqrt{n}$', '$\\\\sqrt{\\\\sigma/n}$'],
                     2, 'The standard deviation of the sampling distribution of $\\\\bar{x}$ is $\\\\sigma/\\\\sqrt{n}$.'),
                    ('Quadrupling the sample size:',
                     ['Halves the standard deviation of $\\\\bar{x}$', 'Quarters the standard deviation of $\\\\bar{x}$', 'Doubles the standard deviation of $\\\\bar{x}$', 'Has no effect on the standard deviation'],
                     0, '$\\\\sigma/\\\\sqrt{4n} = \\\\sigma/(2\\\\sqrt{n})$ \u2014 the SD is halved when $n$ is quadrupled.'),
                    ('The sampling distribution of $\\\\hat{p}$ is approximately Normal when:',
                     ['$n \\\\geq 30$', '$np \\\\geq 10$ and $n(1-p) \\\\geq 10$', '$p = 0.5$', 'The population is Normal'],
                     1, 'The Normal approximation requires at least 10 expected successes AND 10 expected failures.')
                ],
                'inputs': {
                    'prompt': """**Sampling Distribution** \U0001f9ee

Population: $\\\\mu = 500$, $\\\\sigma = 100$. Sample size $n = 25$.

**1)** Mean of the sampling distribution of $\\\\bar{x}$?

**2)** Standard deviation of $\\\\bar{x}$?

**3)** $P(\\\\bar{x} > 520) = P(Z > ?)$ \u2014 what is the z-score?""",
                    'boxes': 3,
                    'answers': ['500', '20', '1'],
                    'hints': ['$\\\\mu_{\\\\bar{x}} = \\\\mu$', '$100/\\\\sqrt{25} = 100/5$', '$(520-500)/20$'],
                    'explanation': '1) $\\\\mu_{\\\\bar{x}} = 500$. 2) $\\\\sigma_{\\\\bar{x}} = 100/\\\\sqrt{25} = 20$. 3) $z = (520-500)/20 = 1.0$.'
                }
            },
            {
                'title': 'Problem-Solving Workshop',
                'content': """# \U0001f3c6 Problem-Solving Workshop

**Part 6 of 7 \u2014 AP-Style Practice**

---

### Common AP Problem Types

1. **Find a probability** using z-scores and Table A
2. **Find a percentile** (inverse Normal)
3. **Compare values** from different distributions using z-scores
4. **Sampling distribution** questions about $\\\\bar{x}$ or $\\\\hat{p}$

---

### Comparing Across Distributions

Who performed better?
- Student A: scored 680 on SAT $(\\\\mu = 500, \\\\sigma = 100)$
- Student B: scored 28 on ACT $(\\\\mu = 21, \\\\sigma = 5)$

$$z_A = \\\\frac{680-500}{100} = 1.80 \\\\qquad z_B = \\\\frac{28-21}{5} = 1.40$$

Student A has a higher z-score, so Student A did relatively better.""",
                'mcqs': [
                    ('To compare scores from different distributions, you should:',
                     ['Compare raw scores', 'Compare z-scores', 'Compare means', 'Compare standard deviations'],
                     1, 'Z-scores standardize values, putting them on the same scale for comparison.'),
                    ('The 90th percentile of $N(100, 15)$ is approximately:',
                     ['$100 + 1.28(15) \\\\approx 119.2$', '$100 + 1.645(15) \\\\approx 124.7$', '$100 + 1.96(15) \\\\approx 129.4$', '$100 + 0.90(15) \\\\approx 113.5$'],
                     0, '90th percentile: $z = 1.28$. $x = 100 + 1.28(15) = 119.2$.'),
                    ('If $P(Z < z) = 0.025$, then $z \\\\approx$:',
                     ['-1.96', '-1.645', '1.96', '1.645'],
                     0, '2.5% in the left tail corresponds to $z = -1.96$.')
                ],
                'inputs': {
                    'prompt': """**Comparing Distributions** \U0001f9ee

Math: $\\\\mu = 72, \\\\sigma = 10$. English: $\\\\mu = 80, \\\\sigma = 5$.
A student scores 87 in Math and 88 in English.

**1)** Z-score in Math?

**2)** Z-score in English?

**3)** In which class did the student do relatively better? (math/english)""",
                    'boxes': 3,
                    'answers': ['1.5', '1.6', 'english'],
                    'hints': ['$(87-72)/10$', '$(88-80)/5$', 'Compare z-scores'],
                    'explanation': '1) $z = (87-72)/10 = 1.5$. 2) $z = (88-80)/5 = 1.6$. 3) English (higher z-score).'
                }
            },
            {
                'title': 'Mixed Review',
                'content': """# \U0001f4dd Mixed Review

**Part 7 of 7 \u2014 Comprehensive Review**

---

### Key Formulas

| Formula | Purpose |
|---------|---------|
| $z = (x - \\\\mu)/\\\\sigma$ | Standardize a value |
| $x = \\\\mu + z\\\\sigma$ | Unstandardize (find value from z) |
| $\\\\sigma_{\\\\bar{x}} = \\\\sigma/\\\\sqrt{n}$ | Standard error of the mean |
| $\\\\sigma_{\\\\hat{p}} = \\\\sqrt{p(1-p)/n}$ | Standard error of a proportion |

### Checklist

- [ ] Normal distribution: bell-shaped, symmetric, $\\\\mu$ and $\\\\sigma$
- [ ] 68-95-99.7 Rule
- [ ] Z-scores and Table A
- [ ] Sampling distributions of $\\\\bar{x}$ and $\\\\hat{p}$
- [ ] Normal probability plots
- [ ] Central Limit Theorem""",
                'mcqs': [
                    ('Which statement about z-scores is FALSE?',
                     ['Z-scores have mean 0', 'Z-scores have SD 1', 'Z-scores can only be positive', 'Z-scores are unitless'],
                     2, 'Z-scores can be negative (below the mean), zero (at the mean), or positive (above).'),
                    ('As sample size increases, $\\\\sigma_{\\\\bar{x}}$:',
                     ['Increases', 'Decreases', 'Stays the same', 'Approaches $\\\\mu$'],
                     1, '$\\\\sigma_{\\\\bar{x}} = \\\\sigma/\\\\sqrt{n}$ \u2014 as $n$ increases, the denominator increases, so $\\\\sigma_{\\\\bar{x}}$ decreases.'),
                    ('If $X \\\\sim N(50, 8)$ and $n = 16$, then $\\\\bar{x} \\\\sim$:',
                     ['$N(50, 8)$', '$N(50, 2)$', '$N(50, 0.5)$', '$N(3.125, 2)$'],
                     1, '$\\\\bar{x} \\\\sim N(50, 8/\\\\sqrt{16}) = N(50, 2)$.')
                ],
                'inputs': {
                    'prompt': """**Final Challenge** \U0001f9ee

$X \\\\sim N(200, 25)$. A sample of $n = 100$ is taken.

**1)** $\\\\sigma_{\\\\bar{x}} = ?$

**2)** $P(\\\\bar{x} > 205)$: first find $z = ?$

**3)** Using Table A, $P(Z > 2) \\\\approx ?$""",
                    'boxes': 3,
                    'answers': ['2.5', '2', '0.0228'],
                    'hints': ['$25/\\\\sqrt{100}$', '$(205-200)/2.5$', '$1 - P(Z < 2) = 1 - 0.9772$'],
                    'explanation': '1) $25/\\\\sqrt{100} = 2.5$. 2) $z = (205-200)/2.5 = 2.0$. 3) $P(Z > 2) = 1 - 0.9772 = 0.0228$.'
                }
            }
        ]
    },
    {
        'slug': 'proportions-inference-apstats',
        'filePrefix': 'apstats-proportions-inference',
        'exportPrefix': 'apStatsPropInf',
        'idPrefix': 'propinference',
        'parts': [
            {
                'title': 'Inference for Proportions Basics',
                'content': """# \U0001f4ca Inference for Proportions

**Part 1 of 7 \u2014 Inference for Proportions Basics**

---

### The Setting

We have a sample proportion $\\\\hat{p}$ and want to make inferences about the population proportion $p$.

### Conditions for Inference

1. **Random:** Data from a random sample or experiment
2. **Normal:** $np \\\\geq 10$ and $n(1-p) \\\\geq 10$ (use $\\\\hat{p}$ for CIs)
3. **Independent:** Sample $< 10\\\\%$ of population (10% condition)

---

### Standard Error

$$SE(\\\\hat{p}) = \\\\sqrt{\\\\frac{\\\\hat{p}(1-\\\\hat{p})}{n}}$$

### Key Distinction

| Purpose | Formula for SD |
|---------|---------------|
| **Confidence interval** | $SE = \\\\sqrt{\\\\hat{p}(1-\\\\hat{p})/n}$ |
| **Hypothesis test** | $SE = \\\\sqrt{p_0(1-p_0)/n}$ (use $H_0$ value) |""",
                'mcqs': [
                    ('The $10\\\\%$ condition ensures:',
                     ['The sample is large enough', 'Observations are approximately independent', 'The distribution is Normal', '$p > 0.10$'],
                     1, 'Sampling without replacement from $< 10\\\\%$ of the population keeps observations approximately independent.'),
                    ('For a confidence interval, the standard error uses:',
                     ['The hypothesized $p_0$', 'The sample proportion $\\\\hat{p}$', 'The population proportion $p$', '$0.5$'],
                     1, 'CIs use $\\\\hat{p}$ because we don\u2019t know $p$ \u2014 that\u2019s what we\u2019re estimating.'),
                    ('The Normal condition for proportions requires:',
                     ['$n \\\\geq 30$', '$np \\\\geq 10$ and $n(1-p) \\\\geq 10$', '$\\\\hat{p} = 0.5$', '$\\\\sigma$ is known'],
                     1, 'We need at least 10 successes and 10 failures expected.')
                ],
                'inputs': {
                    'prompt': """**Conditions Check** \U0001f9ee

In a random sample of 200 voters, 120 support a candidate. $\\\\hat{p} = 0.60$.

**1)** $n\\\\hat{p} = ?$

**2)** $n(1-\\\\hat{p}) = ?$

**3)** Is the Normal condition met? (yes/no)""",
                    'boxes': 3,
                    'answers': ['120', '80', 'yes'],
                    'hints': ['$200 \\\\times 0.60$', '$200 \\\\times 0.40$', 'Both $\\\\geq 10$?'],
                    'explanation': '1) $200 \\\\times 0.60 = 120$. 2) $200 \\\\times 0.40 = 80$. 3) Yes \u2014 both $120 \\\\geq 10$ and $80 \\\\geq 10$.'
                }
            },
            {
                'title': 'Confidence Intervals for Proportions',
                'content': """# \U0001f4cf Confidence Intervals for Proportions

**Part 2 of 7 \u2014 One-Sample Z Interval**

---

### Formula

$$\\\\hat{p} \\\\pm z^* \\\\sqrt{\\\\frac{\\\\hat{p}(1-\\\\hat{p})}{n}}$$

### Common Critical Values

| Confidence Level | $z^*$ |
|------------------|-------|
| 90% | 1.645 |
| 95% | 1.960 |
| 99% | 2.576 |

---

### Interpretation

\u201cWe are [C]% confident that the true proportion of [context] is between [lower] and [upper].\u201d

### Example

$n = 400$, $\\\\hat{p} = 0.35$, 95% CI:

$$0.35 \\\\pm 1.96\\\\sqrt{\\\\frac{0.35 \\\\times 0.65}{400}} = 0.35 \\\\pm 0.0467$$

CI: $(0.303, 0.397)$""",
                'mcqs': [
                    ('A 95% confidence interval means:',
                     ['95% of the data falls in the interval', '95% of samples would produce intervals containing the true $p$', 'There is a 95% chance $p$ is in this interval', 'The sample proportion is correct 95% of the time'],
                     1, 'The confidence level refers to the method: 95% of similarly constructed intervals would capture $p$.'),
                    ('Increasing the confidence level:',
                     ['Narrows the interval', 'Widens the interval', 'Has no effect on width', 'Changes the sample proportion'],
                     1, 'Higher confidence requires a larger $z^*$, making the margin of error (and interval) wider.'),
                    ('The margin of error for a proportion is:',
                     ['$z^* \\\\cdot \\\\hat{p}$', '$z^* \\\\sqrt{\\\\hat{p}(1-\\\\hat{p})/n}$', '$\\\\hat{p} - p$', '$1.96/\\\\sqrt{n}$'],
                     1, 'The margin of error = $z^* \\\\times SE(\\\\hat{p})$.')
                ],
                'inputs': {
                    'prompt': """**Confidence Interval** \U0001f9ee

$n = 500$, $\\\\hat{p} = 0.40$, 95% CI.

**1)** $SE = \\\\sqrt{0.40 \\\\times 0.60 / 500}$ = ? (round to 4 decimal places)

**2)** Margin of error = $1.96 \\\\times SE$ = ? (round to 4 places)

**3)** Lower bound of CI? (round to 3 places)""",
                    'boxes': 3,
                    'answers': ['0.0219', '0.0429', '0.357'],
                    'hints': ['$\\\\sqrt{0.24/500} = \\\\sqrt{0.00048}$', '$1.96 \\\\times 0.0219$', '$0.40 - 0.0429$'],
                    'explanation': '1) $\\\\sqrt{0.00048} \\\\approx 0.0219$. 2) $1.96 \\\\times 0.0219 \\\\approx 0.0429$. 3) $0.40 - 0.043 \\\\approx 0.357$.'
                }
            },
            {
                'title': 'Hypothesis Tests for Proportions',
                'content': """# \u2696\ufe0f Hypothesis Tests for Proportions

**Part 3 of 7 \u2014 One-Sample Z Test**

---

### Steps

1. **State** hypotheses: $H_0: p = p_0$ vs. $H_a: p \\\\neq p_0$ (or $<$ or $>$)
2. **Check** conditions (Random, Normal, Independent)
3. **Calculate** the test statistic:

$$z = \\\\frac{\\\\hat{p} - p_0}{\\\\sqrt{p_0(1-p_0)/n}}$$

4. **Find** the p-value
5. **Conclude** in context

---

### P-Value Decision Rules

| If p-value | Decision |
|-----------|----------|
| $\\\\leq \\\\alpha$ | Reject $H_0$ |
| $> \\\\alpha$ | Fail to reject $H_0$ |

### Example

Claim: $p = 0.5$. Sample: $\\\\hat{p} = 0.56$, $n = 200$.

$$z = \\\\frac{0.56 - 0.50}{\\\\sqrt{0.50 \\\\times 0.50 / 200}} = \\\\frac{0.06}{0.0354} = 1.70$$""",
                'mcqs': [
                    ('In a hypothesis test for a proportion, the standard error uses:',
                     ['$\\\\hat{p}$', '$p_0$ from the null hypothesis', 'The sample size only', 'The confidence level'],
                     1, 'For hypothesis tests, use the null hypothesis value $p_0$ in the SE formula.'),
                    ('A p-value of 0.03 with $\\\\alpha = 0.05$ means:',
                     ['Fail to reject $H_0$', 'Reject $H_0$', 'Accept $H_0$', 'The test is inconclusive'],
                     1, '$0.03 < 0.05$, so we reject $H_0$ at the $\\\\alpha = 0.05$ significance level.'),
                    ('The alternative hypothesis $H_a: p > 0.5$ calls for a:',
                     ['Two-tailed test', 'Left-tailed test', 'Right-tailed test', 'No test needed'],
                     2, '$p > p_0$ is a right-tailed (upper-tail) test.')
                ],
                'inputs': {
                    'prompt': """**Hypothesis Test** \U0001f9ee

$H_0: p = 0.30$, $H_a: p > 0.30$. $n = 150$, $\\\\hat{p} = 0.36$.

**1)** $SE = \\\\sqrt{0.30 \\\\times 0.70 / 150}$ = ? (round to 4 places)

**2)** $z = (0.36 - 0.30) / SE$ = ? (round to 2 places)

**3)** Is this a one-tailed or two-tailed test?""",
                    'boxes': 3,
                    'answers': ['0.0374', '1.60', 'one-tailed'],
                    'hints': ['$\\\\sqrt{0.21/150}$', '$0.06/0.0374$', '$H_a$ uses $>$'],
                    'explanation': '1) $\\\\sqrt{0.0014} \\\\approx 0.0374$. 2) $0.06/0.0374 \\\\approx 1.60$. 3) One-tailed (right) because $H_a: p > 0.30$.'
                }
            },
            {
                'title': 'Two-Proportion Inference',
                'content': """# \U0001f4ca Two-Proportion Inference

**Part 4 of 7 \u2014 Comparing Two Proportions**

---

### Confidence Interval for $p_1 - p_2$

$$(\\\\hat{p}_1 - \\\\hat{p}_2) \\\\pm z^* \\\\sqrt{\\\\frac{\\\\hat{p}_1(1-\\\\hat{p}_1)}{n_1} + \\\\frac{\\\\hat{p}_2(1-\\\\hat{p}_2)}{n_2}}$$

### Hypothesis Test for $p_1 - p_2$

$H_0: p_1 = p_2$ (or $p_1 - p_2 = 0$)

Use the **pooled proportion:**
$$\\\\hat{p}_c = \\\\frac{x_1 + x_2}{n_1 + n_2}$$

$$z = \\\\frac{(\\\\hat{p}_1 - \\\\hat{p}_2) - 0}{\\\\sqrt{\\\\hat{p}_c(1-\\\\hat{p}_c)\\\\left(\\\\frac{1}{n_1} + \\\\frac{1}{n_2}\\\\right)}}$$

---

### Key Difference

- **CI:** Use individual $\\\\hat{p}_1$ and $\\\\hat{p}_2$ in the SE
- **Test:** Use the pooled $\\\\hat{p}_c$ (assuming $H_0: p_1 = p_2$ is true)""",
                'mcqs': [
                    ('When testing $H_0: p_1 = p_2$, you should use:',
                     ['Individual sample proportions', 'The pooled proportion', 'The population proportions', 'The difference $\\\\hat{p}_1 - \\\\hat{p}_2$'],
                     1, 'Under $H_0$, we assume $p_1 = p_2$, so we pool the data to get a single estimate $\\\\hat{p}_c$.'),
                    ('A 95% CI for $p_1 - p_2$ is $(-0.05, 0.12)$. Can we conclude the proportions differ?',
                     ['Yes, because the interval is wide', 'No, because 0 is in the interval', 'Yes, because both endpoints are close to 0', 'No, because we need a larger sample'],
                     1, 'Since 0 is included in the interval, we cannot conclude the proportions are significantly different.'),
                    ('The pooled proportion $\\\\hat{p}_c$ is calculated as:',
                     ['$(\\\\hat{p}_1 + \\\\hat{p}_2)/2$', '$(x_1 + x_2)/(n_1 + n_2)$', '$\\\\hat{p}_1 \\\\times \\\\hat{p}_2$', '$(n_1\\\\hat{p}_1 + n_2\\\\hat{p}_2)/(n_1n_2)$'],
                     1, 'Pool the raw counts: total successes over total sample size.')
                ],
                'inputs': {
                    'prompt': """**Two-Proportion Test** \U0001f9ee

Group 1: $x_1 = 45$, $n_1 = 100$. Group 2: $x_2 = 30$, $n_2 = 100$.

**1)** $\\\\hat{p}_1 = ?$

**2)** Pooled $\\\\hat{p}_c = (45 + 30)/(100 + 100) = ?$

**3)** $\\\\hat{p}_1 - \\\\hat{p}_2 = ?$""",
                    'boxes': 3,
                    'answers': ['0.45', '0.375', '0.15'],
                    'hints': ['$45/100$', '$75/200$', '$0.45 - 0.30$'],
                    'explanation': '1) $\\\\hat{p}_1 = 45/100 = 0.45$. 2) $\\\\hat{p}_c = 75/200 = 0.375$. 3) $0.45 - 0.30 = 0.15$.'
                }
            },
            {
                'title': 'Sample Size Determination',
                'content': """# \U0001f4d0 Sample Size Determination

**Part 5 of 7 \u2014 Planning a Study**

---

### Finding the Required Sample Size

For a desired margin of error $ME$ at confidence level $z^*$:

$$n = \\\\left(\\\\frac{z^*}{ME}\\\\right)^2 \\\\hat{p}(1-\\\\hat{p})$$

If no prior estimate of $p$ exists, use $\\\\hat{p} = 0.5$ (maximizes $n$, conservative).

$$n = \\\\left(\\\\frac{z^*}{ME}\\\\right)^2 (0.25)$$

---

### Example

Want a 95% CI with margin of error $\\\\leq 0.03$:

$$n = \\\\left(\\\\frac{1.96}{0.03}\\\\right)^2 (0.25) = (65.33)^2(0.25) = 4268.4(0.25) = 1067.1$$

**Round up:** $n = 1068$

> \U0001f511 Always round UP to the next whole number when computing sample size.""",
                'mcqs': [
                    ('Using $\\\\hat{p} = 0.5$ when computing sample size:',
                     ['Gives the smallest possible $n$', 'Gives the largest possible $n$ (most conservative)', 'Is never appropriate', 'Only works for 95% confidence'],
                     1, '$p(1-p)$ is maximized at $p = 0.5$, which gives the largest (most conservative) sample size.'),
                    ('To cut the margin of error in half, you need to:',
                     ['Double the sample size', 'Quadruple the sample size', 'Halve the sample size', 'Use a lower confidence level'],
                     1, 'ME is proportional to $1/\\\\sqrt{n}$. Halving ME requires $4\\\\times$ the sample size.'),
                    ('When computing sample size, always round:',
                     ['Down to the nearest integer', 'Up to the nearest integer', 'To the nearest even number', 'To the nearest ten'],
                     1, 'Round up to ensure the margin of error requirement is met.')
                ],
                'inputs': {
                    'prompt': """**Sample Size Calculation** \U0001f9ee

Desired: 95% CI, margin of error $\\\\leq 0.04$, no prior estimate of $p$.

**1)** What value of $\\\\hat{p}$ should you use?

**2)** $n = (1.96/0.04)^2 \\\\times 0.25 = ?$ (round to nearest integer)

**3)** What $n$ do you report? (remember rounding rule)""",
                    'boxes': 3,
                    'answers': ['0.5', '600', '601'],
                    'hints': ['Conservative estimate when $p$ is unknown', '$(49)^2 \\\\times 0.25 = 2401 \\\\times 0.25$', 'Always round UP'],
                    'explanation': '1) Use $\\\\hat{p} = 0.5$. 2) $(49)^2 \\\\times 0.25 = 600.25$. 3) Round up: $n = 601$.'
                }
            },
            {
                'title': 'Problem-Solving Workshop',
                'content': """# \U0001f3c6 Problem-Solving Workshop

**Part 6 of 7 \u2014 AP-Style Practice**

---

### AP FRQ Template for Inference

1. **State:** Name the procedure and define parameters
2. **Plan:** Check conditions (Random, Normal, Independent)
3. **Do:** Show calculations
4. **Conclude:** Interpret in context

---

### Common Mistakes to Avoid

- Using $\\\\hat{p}$ in the test statistic SE (should use $p_0$)
- Using $p_0$ in the CI SE (should use $\\\\hat{p}$)
- Saying \u201caccept $H_0$\u201d instead of \u201cfail to reject $H_0$\u201d
- Forgetting to check conditions
- Not interpreting in context""",
                'mcqs': [
                    ('In the AP \u201c4-step process,\u201d the correct order is:',
                     ['Do, State, Plan, Conclude', 'State, Plan, Do, Conclude', 'Plan, Do, Conclude, State', 'State, Do, Plan, Conclude'],
                     1, 'State \u2192 Plan \u2192 Do \u2192 Conclude. Remember this for every inference problem.'),
                    ('When checking the Normal condition for a CI, use:',
                     ['$p_0$', '$\\\\hat{p}$', '$0.5$', 'Either $p_0$ or $\\\\hat{p}$'],
                     1, 'For CIs, use $\\\\hat{p}$ to check $n\\\\hat{p} \\\\geq 10$ and $n(1-\\\\hat{p}) \\\\geq 10$.'),
                    ('You should NEVER say:',
                     ['\u201cReject $H_0$\u201d', '\u201cFail to reject $H_0$\u201d', '\u201cAccept $H_0$\u201d', '\u201cThere is evidence against $H_0$\u201d'],
                     2, 'We never \u201caccept\u201d $H_0$ \u2014 we can only fail to reject it (absence of evidence is not evidence of absence).')
                ],
                'inputs': {
                    'prompt': """**AP Practice** \U0001f9ee

A poll finds 52% of 1000 voters favor a candidate. Test $H_0: p = 0.50$ vs. $H_a: p > 0.50$ at $\\\\alpha = 0.05$.

**1)** $z = (0.52 - 0.50)/\\\\sqrt{0.25/1000}$ = ? (round to 2 places)

**2)** p-value $\\\\approx P(Z > z) \\\\approx ?$ (round to 3 places)

**3)** Decision at $\\\\alpha = 0.05$? (reject/fail to reject)""",
                    'boxes': 3,
                    'answers': ['1.26', '0.104', 'fail to reject'],
                    'hints': ['$0.02/\\\\sqrt{0.00025} = 0.02/0.01581$', '$P(Z > 1.26) \\\\approx 1 - 0.8962$', 'Is $0.104 \\\\leq 0.05$?'],
                    'explanation': '1) $z \\\\approx 1.26$. 2) $P(Z > 1.26) \\\\approx 0.104$. 3) Fail to reject $H_0$ ($0.104 > 0.05$).'
                }
            },
            {
                'title': 'Mixed Review',
                'content': """# \U0001f4dd Mixed Review

**Part 7 of 7 \u2014 Comprehensive Review**

---

### Quick Reference

| Procedure | SE Formula | When to Use |
|-----------|-----------|-------------|
| 1-prop CI | $\\\\sqrt{\\\\hat{p}(1-\\\\hat{p})/n}$ | Estimating $p$ |
| 1-prop test | $\\\\sqrt{p_0(1-p_0)/n}$ | Testing $H_0: p = p_0$ |
| 2-prop CI | $\\\\sqrt{\\\\frac{\\\\hat{p}_1(1-\\\\hat{p}_1)}{n_1} + \\\\frac{\\\\hat{p}_2(1-\\\\hat{p}_2)}{n_2}}$ | Estimating $p_1 - p_2$ |
| 2-prop test | $\\\\sqrt{\\\\hat{p}_c(1-\\\\hat{p}_c)(1/n_1 + 1/n_2)}$ | Testing $H_0: p_1 = p_2$ |

### AP Exam Tips

- Always state your hypotheses using the parameter $p$, not $\\\\hat{p}$
- Check all three conditions: Random, Normal, Independent
- Give a conclusion IN CONTEXT""",
                'mcqs': [
                    ('The parameter of interest in a proportion inference problem is:',
                     ['$\\\\hat{p}$ (sample proportion)', '$p$ (population proportion)', '$\\\\bar{x}$ (sample mean)', '$n$ (sample size)'],
                     1, 'Inference is about the population parameter $p$. The sample proportion $\\\\hat{p}$ is the statistic.'),
                    ('$\\\\hat{p} = 0.40$, $n = 250$, 99% CI. The critical value $z^*$ is:',
                     ['1.645', '1.960', '2.326', '2.576'],
                     3, '$99\\\\%$ confidence uses $z^* = 2.576$.'),
                    ('If a 95% CI for $p$ is $(0.42, 0.58)$, the margin of error is:',
                     ['0.08', '0.16', '0.50', '0.42'],
                     0, '$ME = (0.58 - 0.42)/2 = 0.16/2 = 0.08$.')
                ],
                'inputs': {
                    'prompt': """**Final Challenge** \U0001f9ee

$n = 800$, $\\\\hat{p} = 0.65$, 95% CI.

**1)** Margin of error $= 1.96 \\\\times \\\\sqrt{0.65 \\\\times 0.35/800} \\\\approx ?$ (round to 3 places)

**2)** Lower bound of CI?

**3)** Upper bound of CI?""",
                    'boxes': 3,
                    'answers': ['0.033', '0.617', '0.683'],
                    'hints': ['$\\\\sqrt{0.2275/800} \\\\approx 0.01686$, then $\\\\times 1.96$', '$0.65 - 0.033$', '$0.65 + 0.033$'],
                    'explanation': '1) $1.96 \\\\times 0.01686 \\\\approx 0.033$. 2) $0.65 - 0.033 = 0.617$. 3) $0.65 + 0.033 = 0.683$.'
                }
            }
        ]
    },
    {
        'slug': 'means-inference-apstats',
        'filePrefix': 'apstats-means-inference',
        'exportPrefix': 'apStatsMeansInf',
        'idPrefix': 'meansinference',
        'parts': [
            {
                'title': 'Inference for Means Basics',
                'content': """# \U0001f4ca Inference for Means

**Part 1 of 7 \u2014 The t-Distribution**

---

### Why Not Z?

For means, we rarely know the population standard deviation $\\\\sigma$. We estimate it with the sample standard deviation $s$, introducing extra uncertainty.

### The t-Distribution

$$t = \\\\frac{\\\\bar{x} - \\\\mu}{s/\\\\sqrt{n}}$$

**Properties:**
- Bell-shaped and symmetric around 0
- Wider tails than Normal (more spread)
- Depends on **degrees of freedom** $df = n - 1$
- As $df \\\\to \\\\infty$, $t \\\\to N(0,1)$

---

### Conditions for t-Procedures

1. **Random:** Data from random sample or experiment
2. **Normal/Large Sample:** Population is Normal OR $n \\\\geq 30$ (CLT)
3. **Independent:** $n < 10\\\\%$ of population""",
                'mcqs': [
                    ('We use the t-distribution instead of z when:',
                     ['$n$ is large', '$\\\\sigma$ is unknown', 'The data is Normal', 'We want a wider interval'],
                     1, 'When $\\\\sigma$ is unknown and estimated by $s$, we use the t-distribution.'),
                    ('Degrees of freedom for a one-sample t-test is:',
                     ['$n$', '$n - 1$', '$n + 1$', '$n - 2$'],
                     1, 'For one-sample t-procedures, $df = n - 1$.'),
                    ('As degrees of freedom increase, the t-distribution:',
                     ['Gets wider', 'Approaches the Normal distribution', 'Becomes skewed', 'Has thinner tails'],
                     1, 'With more degrees of freedom, the t-distribution becomes closer to $N(0,1)$.')
                ],
                'inputs': {
                    'prompt': """**t-Distribution Basics** \U0001f9ee

$n = 25$, $\\\\bar{x} = 82$, $s = 10$.

**1)** Degrees of freedom?

**2)** Standard error $= s/\\\\sqrt{n} = ?$

**3)** t-statistic for testing $\\\\mu = 80$: $t = (82 - 80)/SE = ?$""",
                    'boxes': 3,
                    'answers': ['24', '2', '1'],
                    'hints': ['$n - 1$', '$10/\\\\sqrt{25} = 10/5$', '$(82-80)/2$'],
                    'explanation': '1) $df = 25 - 1 = 24$. 2) $SE = 10/5 = 2$. 3) $t = 2/2 = 1.0$.'
                }
            },
            {
                'title': 'Confidence Intervals for Means',
                'content': """# \U0001f4cf Confidence Intervals for Means

**Part 2 of 7 \u2014 One-Sample t Interval**

---

### Formula

$$\\\\bar{x} \\\\pm t^* \\\\frac{s}{\\\\sqrt{n}}$$

where $t^*$ comes from the t-table with $df = n - 1$.

---

### Interpretation

\u201cWe are [C]% confident that the true mean [context] is between [lower] and [upper].\u201d

### Example

$n = 20$, $\\\\bar{x} = 45.2$, $s = 6.8$, 95% CI.

$df = 19$, $t^* = 2.093$ (from table)

$$45.2 \\\\pm 2.093 \\\\times \\\\frac{6.8}{\\\\sqrt{20}} = 45.2 \\\\pm 3.18$$

CI: $(42.02, 48.38)$""",
                'mcqs': [
                    ('A t-interval uses $t^*$ instead of $z^*$ because:',
                     ['$t^*$ is always larger', 'We estimate $\\\\sigma$ with $s$', 'The data must be Normal', 't-intervals are more accurate'],
                     1, 'Using $s$ instead of $\\\\sigma$ adds uncertainty, accounted for by the t-distribution.'),
                    ('Increasing sample size makes a CI:',
                     ['Wider', 'Narrower', 'Higher confidence', 'Lower confidence'],
                     1, 'Larger $n$ decreases SE = $s/\\\\sqrt{n}$, making the interval narrower.'),
                    ('For $df = 10$ and 95% confidence, $t^*$ is approximately:',
                     ['1.96', '2.228', '2.262', '1.812'],
                     1, 'With $df = 10$, $t^* \\\\approx 2.228$ for 95% confidence (wider than $z^* = 1.96$).')
                ],
                'inputs': {
                    'prompt': """**t-Interval** \U0001f9ee

$n = 36$, $\\\\bar{x} = 110$, $s = 12$, 95% CI ($t^* \\\\approx 2.030$ for $df = 35$).

**1)** $SE = s/\\\\sqrt{n} = ?$

**2)** Margin of error $= t^* \\\\times SE = ?$ (round to 1 place)

**3)** Lower bound of CI?""",
                    'boxes': 3,
                    'answers': ['2', '4.1', '105.9'],
                    'hints': ['$12/\\\\sqrt{36} = 12/6$', '$2.030 \\\\times 2$', '$110 - 4.1$'],
                    'explanation': '1) $SE = 12/6 = 2$. 2) $ME = 2.030 \\\\times 2 = 4.06 \\\\approx 4.1$. 3) $110 - 4.1 = 105.9$.'
                }
            },
            {
                'title': 'Hypothesis Tests for Means',
                'content': """# \u2696\ufe0f Hypothesis Tests for Means

**Part 3 of 7 \u2014 One-Sample t Test**

---

### Test Statistic

$$t = \\\\frac{\\\\bar{x} - \\\\mu_0}{s/\\\\sqrt{n}}$$

### Steps (4-Step Process)

1. **State:** $H_0: \\\\mu = \\\\mu_0$ vs. $H_a: \\\\mu \\\\neq \\\\mu_0$ (or $<$ or $>$)
2. **Plan:** Check Random, Normal, Independent conditions
3. **Do:** Calculate $t$ and find p-value using $t$-table with $df = n-1$
4. **Conclude:** Compare p-value to $\\\\alpha$, interpret in context

---

### Example

$H_0: \\\\mu = 100$, $H_a: \\\\mu > 100$. $n = 16$, $\\\\bar{x} = 106$, $s = 12$.

$$t = \\\\frac{106 - 100}{12/\\\\sqrt{16}} = \\\\frac{6}{3} = 2.0$$

$df = 15$. From the t-table, $P(t > 2.0) \\\\approx 0.032$.

Since $0.032 < 0.05$, reject $H_0$.""",
                'mcqs': [
                    ('In a one-sample t-test, the test statistic uses:',
                     ['$\\\\sigma$ (population SD)', '$s$ (sample SD)', '$\\\\mu$ (population mean)', '$\\\\bar{x}$ (sample mean) only'],
                     1, 'The t-test uses $s$ because $\\\\sigma$ is unknown.'),
                    ('$t = -2.5$ with $df = 20$ in a two-tailed test. The p-value is:',
                     ['Between 0.01 and 0.02', 'Between 0.02 and 0.04', 'Between 0.05 and 0.10', 'Less than 0.01'],
                     1, 'For $df = 20$, $|t| = 2.5$: one-tail p \u2248 0.011, two-tail p \u2248 0.022.'),
                    ('\u201cFail to reject $H_0$\u201d means:',
                     ['$H_0$ is true', 'There is insufficient evidence against $H_0$', '$H_a$ is false', 'The test failed'],
                     1, 'We don\u2019t prove $H_0$ true; we simply don\u2019t have enough evidence to reject it.')
                ],
                'inputs': {
                    'prompt': """**t-Test** \U0001f9ee

$H_0: \\\\mu = 50$, $H_a: \\\\mu \\\\neq 50$. $n = 25$, $\\\\bar{x} = 53$, $s = 5$.

**1)** $SE = ?$

**2)** $t = ?$

**3)** $df = ?$""",
                    'boxes': 3,
                    'answers': ['1', '3', '24'],
                    'hints': ['$5/\\\\sqrt{25}$', '$(53-50)/1$', '$n - 1$'],
                    'explanation': '1) $SE = 5/5 = 1$. 2) $t = 3/1 = 3.0$. 3) $df = 24$.'
                }
            },
            {
                'title': 'Two-Sample t-Procedures',
                'content': """# \U0001f4ca Two-Sample t-Procedures

**Part 4 of 7 \u2014 Comparing Two Means**

---

### Two-Sample t-Interval

$$(\\\\bar{x}_1 - \\\\bar{x}_2) \\\\pm t^* \\\\sqrt{\\\\frac{s_1^2}{n_1} + \\\\frac{s_2^2}{n_2}}$$

### Two-Sample t-Test

$$t = \\\\frac{(\\\\bar{x}_1 - \\\\bar{x}_2) - 0}{\\\\sqrt{\\\\frac{s_1^2}{n_1} + \\\\frac{s_2^2}{n_2}}}$$

---

### Degrees of Freedom

Use the calculator\u2019s Welch\u2019s approximation (complex formula), or the conservative approach:

$$df = \\\\min(n_1 - 1, n_2 - 1)$$

### Key Point

Do NOT pool variances unless told the populations have equal variance (which is rare on the AP exam).""",
                'mcqs': [
                    ('The two-sample t-test compares:',
                     ['Two proportions', 'Two means from independent groups', 'Before and after on the same subjects', 'A mean to a known value'],
                     1, 'Two-sample t-procedures compare means from two independent groups.'),
                    ('The conservative degrees of freedom for two-sample t is:',
                     ['$n_1 + n_2 - 2$', '$\\\\min(n_1 - 1, n_2 - 1)$', '$n_1 + n_2$', '$(n_1 - 1)(n_2 - 1)$'],
                     1, 'The conservative approach uses the smaller of $n_1 - 1$ and $n_2 - 1$.'),
                    ('You should NOT pool variances when:',
                     ['Sample sizes are equal', 'Population variances are unknown or unequal', 'The test is one-tailed', 'Using a CI instead of a test'],
                     1, 'Don\u2019t assume equal variances unless you have strong evidence and are told to do so.')
                ],
                'inputs': {
                    'prompt': """**Two-Sample Comparison** \U0001f9ee

Group A: $\\\\bar{x}_1 = 78, s_1 = 10, n_1 = 30$. Group B: $\\\\bar{x}_2 = 72, s_2 = 12, n_2 = 25$.

**1)** Point estimate for $\\\\mu_1 - \\\\mu_2$?

**2)** Conservative $df = ?$

**3)** $SE = \\\\sqrt{10^2/30 + 12^2/25}$ = ? (round to 2 places)""",
                    'boxes': 3,
                    'answers': ['6', '24', '3.10'],
                    'hints': ['$78 - 72$', '$\\\\min(29, 24)$', '$\\\\sqrt{100/30 + 144/25} = \\\\sqrt{3.33 + 5.76}$'],
                    'explanation': '1) $78 - 72 = 6$. 2) $\\\\min(29, 24) = 24$. 3) $\\\\sqrt{9.09} \\\\approx 3.10$.'
                }
            },
            {
                'title': 'Matched Pairs',
                'content': """# \U0001f91d Matched Pairs

**Part 5 of 7 \u2014 Paired t-Procedures**

---

### When to Use Paired t

- Same subjects measured twice (before/after)
- Subjects matched in pairs
- Two measurements on the same item

### Procedure

1. Compute **differences** $d = x_1 - x_2$ for each pair
2. Perform a **one-sample t-test** on the differences

$$t = \\\\frac{\\\\bar{d} - 0}{s_d/\\\\sqrt{n}}$$

where $n$ = number of pairs, $\\\\bar{d}$ = mean of differences, $s_d$ = SD of differences.

---

### Example

10 patients\u2019 blood pressure before and after a drug:
$\\\\bar{d} = -8.5$ (mean decrease), $s_d = 6.2$

$$t = \\\\frac{-8.5 - 0}{6.2/\\\\sqrt{10}} = \\\\frac{-8.5}{1.96} = -4.34$$

$df = 9$. Strong evidence that the drug reduces blood pressure.""",
                'mcqs': [
                    ('Matched pairs t-test is used when:',
                     ['Two independent groups are compared', 'The same subjects are measured twice', 'The sample size is small', 'We know $\\\\sigma$'],
                     1, 'Matched pairs involves paired measurements \u2014 usually before/after on the same subjects.'),
                    ('In a matched pairs test, you analyze:',
                     ['The original measurements', 'The differences within each pair', 'The means of the two groups', 'The pooled data'],
                     1, 'Compute differences within pairs, then use a one-sample t-test on those differences.'),
                    ('$df$ for a matched pairs test with 15 pairs is:',
                     ['15', '14', '28', '13'],
                     1, '$df = n - 1 = 15 - 1 = 14$ where $n$ is the number of pairs.')
                ],
                'inputs': {
                    'prompt': """**Matched Pairs** \U0001f9ee

12 students take a test before and after tutoring. Mean difference $\\\\bar{d} = 5.0$ (improvement), $s_d = 3.6$.

**1)** $SE = s_d/\\\\sqrt{n} = ?$ (round to 2 places)

**2)** $t = \\\\bar{d}/SE = ?$ (round to 2 places)

**3)** $df = ?$""",
                    'boxes': 3,
                    'answers': ['1.04', '4.81', '11'],
                    'hints': ['$3.6/\\\\sqrt{12}$', '$5.0/1.04$', '$n - 1 = 12 - 1$'],
                    'explanation': '1) $3.6/3.464 \\\\approx 1.04$. 2) $5.0/1.04 \\\\approx 4.81$. 3) $df = 11$.'
                }
            },
            {
                'title': 'Problem-Solving Workshop',
                'content': """# \U0001f3c6 Problem-Solving Workshop

**Part 6 of 7 \u2014 AP-Style Practice**

---

### Choosing the Right Procedure

| Scenario | Procedure |
|----------|-----------|
| One mean, $\\\\sigma$ unknown | One-sample t |
| Two independent means | Two-sample t |
| Paired data | Matched pairs t |
| One proportion | One-sample z |
| Two proportions | Two-sample z |

---

### AP Scoring Tips

- Name the procedure explicitly (\u201cone-sample t-test\u201d, not just \u201ct-test\u201d)
- Always identify the parameter in context
- State ALL conditions, not just assume them
- Use proper notation ($\\\\bar{x}$, $s$, $t$, etc.)""",
                'mcqs': [
                    ('A study measures the heights of men and women separately. What procedure compares the means?',
                     ['Matched pairs t-test', 'Two-sample t-test', 'One-sample t-test', 'Chi-square test'],
                     1, 'Two independent groups (men vs. women) \u2192 two-sample t-test.'),
                    ('A researcher measures reaction time before and after coffee. The correct procedure is:',
                     ['Two-sample t-test', 'Matched pairs t-test', 'One-sample z-test', 'Two-proportion z-test'],
                     1, 'Same subjects measured before and after \u2192 matched pairs.'),
                    ('For the AP exam, conditions should be checked:',
                     ['Only if asked explicitly', 'Always, for every inference procedure', 'Only for hypothesis tests', 'Only for confidence intervals'],
                     1, 'Always check and state conditions \u2014 they are part of the scoring rubric.')
                ],
                'inputs': {
                    'prompt': """**Procedure Selection** \U0001f9ee

Name the correct procedure for each:

**1)** Estimating the mean GPA of all students at a school based on a random sample of 50.

**2)** Comparing mean test scores between students who used a study app vs. those who didn\u2019t.

**3)** Testing whether a training program improved employees\u2019 productivity (measured before and after).""",
                    'boxes': 3,
                    'answers': ['one-sample t interval', 'two-sample t test', 'matched pairs t test'],
                    'hints': ['One group, estimating $\\\\mu$', 'Two independent groups', 'Same people, before and after'],
                    'explanation': '1) One-sample t interval. 2) Two-sample t test. 3) Matched pairs t test.'
                }
            },
            {
                'title': 'Mixed Review',
                'content': """# \U0001f4dd Mixed Review

**Part 7 of 7 \u2014 Comprehensive Review**

---

### Summary Table

| Procedure | Statistic | SE | df |
|-----------|-----------|----|----|
| One-sample t | $\\\\bar{x}$ | $s/\\\\sqrt{n}$ | $n-1$ |
| Two-sample t | $\\\\bar{x}_1 - \\\\bar{x}_2$ | $\\\\sqrt{s_1^2/n_1 + s_2^2/n_2}$ | $\\\\min(n_1-1, n_2-1)$ |
| Matched pairs | $\\\\bar{d}$ | $s_d/\\\\sqrt{n}$ | $n-1$ |

### Key Reminders

- t-procedures are **robust** against non-Normality for large $n$
- Check for outliers with small samples
- Use a Normal probability plot to assess Normality for small $n$
- Degrees of freedom determine the shape of the t-distribution""",
                'mcqs': [
                    ('The t-distribution is \u201crobust\u201d means:',
                     ['It gives exact results', 'It works well even with moderate departures from Normality', 'It has no assumptions', 'It is the same as the Normal'],
                     1, 'Robust: t-procedures give reliable results even when the population isn\u2019t perfectly Normal.'),
                    ('Which would MOST invalidate a t-procedure with $n = 10$?',
                     ['Slightly skewed data', 'A strong outlier', 'A large standard deviation', 'Small effect size'],
                     1, 'With small samples, outliers strongly influence $\\\\bar{x}$ and $s$, violating procedure assumptions.'),
                    ('$\\\\bar{x} = 50, s = 8, n = 64$. 95% CI for $\\\\mu$ is approximately:',
                     ['$(48, 52)$', '$(49, 51)$', '$(46, 54)$', '$(42, 58)$'],
                     0, '$SE = 8/8 = 1$. With large $df$, $t^* \\\\approx 2$. CI: $50 \\\\pm 2 = (48, 52)$.')
                ],
                'inputs': {
                    'prompt': """**Final Challenge** \U0001f9ee

$n = 50$, $\\\\bar{x} = 25.3$, $s = 4.0$. Test $H_0: \\\\mu = 24$ vs. $H_a: \\\\mu \\\\neq 24$ at $\\\\alpha = 0.05$.

**1)** $t = ?$ (round to 2 places)

**2)** $df = ?$

**3)** With $|t| = 2.30$ and $df = 49$, is the result significant at $\\\\alpha = 0.05$? (yes/no)""",
                    'boxes': 3,
                    'answers': ['2.30', '49', 'yes'],
                    'hints': ['$(25.3 - 24)/(4/\\\\sqrt{50})$', '$n - 1$', 'For $df = 49$, $t^* \\\\approx 2.01$ for 95%'],
                    'explanation': '1) $t = 1.3/0.566 \\\\approx 2.30$. 2) $df = 49$. 3) Yes \u2014 $|t| = 2.30 > t^*(49) \\\\approx 2.01$, so reject $H_0$.'
                }
            }
        ]
    },
    {
        'slug': 'type-errors-power-apstats',
        'filePrefix': 'apstats-type-errors-power',
        'exportPrefix': 'apStatsErrors',
        'idPrefix': 'typeerrorspower',
        'parts': [
            {
                'title': 'Type I and Type II Errors',
                'content': """# \u26a0\ufe0f Type I and Type II Errors

**Part 1 of 7 \u2014 Error Types**

---

### Two Kinds of Errors

|  | $H_0$ True | $H_0$ False |
|--|-----------|------------|
| **Reject $H_0$** | Type I Error ($\\\\alpha$) | Correct! (Power) |
| **Fail to reject** | Correct! | Type II Error ($\\\\beta$) |

---

### Definitions

- **Type I Error:** Rejecting $H_0$ when it\u2019s actually true (false positive)
  - Probability = $\\\\alpha$ (significance level)
- **Type II Error:** Failing to reject $H_0$ when it\u2019s actually false (false negative)
  - Probability = $\\\\beta$

### Analogy

| Error | Court Trial | Medical Test |
|-------|-------------|-------------|
| Type I | Convicting an innocent person | False positive (healthy diagnosed sick) |
| Type II | Acquitting a guilty person | False negative (sick diagnosed healthy) |

> \U0001f511 The significance level $\\\\alpha$ is the probability of a Type I error. YOU choose $\\\\alpha$ before the test.""",
                'mcqs': [
                    ('A Type I error occurs when:',
                     ['You reject a false $H_0$', 'You reject a true $H_0$', 'You fail to reject a false $H_0$', 'You fail to reject a true $H_0$'],
                     1, 'Type I = rejecting $H_0$ when it IS true. This is a false alarm.'),
                    ('The probability of a Type I error equals:',
                     ['$\\\\beta$', 'The p-value', '$\\\\alpha$', '$1 - \\\\alpha$'],
                     2, '$P(\\\\text{Type I}) = \\\\alpha$, the significance level chosen before the test.'),
                    ('In a medical test, a Type II error means:',
                     ['A healthy person is told they\u2019re sick', 'A sick person is told they\u2019re healthy', 'The test is invalid', 'The sample is too small'],
                     1, 'Type II = failing to detect a real condition (false negative).')
                ],
                'inputs': {
                    'prompt': """**Error Classification** \U0001f9ee

$H_0$: The defendant is innocent. $H_a$: The defendant is guilty.

**1)** A Type I error in this context means: convicting an _______ person. (innocent/guilty)

**2)** A Type II error means: acquitting a _______ person. (innocent/guilty)

**3)** If $\\\\alpha = 0.01$, the probability of wrongly convicting an innocent person is ___.""",
                    'boxes': 3,
                    'answers': ['innocent', 'guilty', '0.01'],
                    'hints': ['Rejecting $H_0$ when true', 'Failing to reject $H_0$ when false', '$\\\\alpha$ = P(Type I)'],
                    'explanation': '1) Innocent (Type I = rejecting truth). 2) Guilty (Type II = missing reality). 3) 0.01 = $\\\\alpha$.'
                }
            },
            {
                'title': 'Significance Level and Errors',
                'content': """# \U0001f4ca Significance Level and Errors

**Part 2 of 7 \u2014 The Tradeoff**

---

### The $\\\\alpha$/$\\\\beta$ Tradeoff

Decreasing $\\\\alpha$ (harder to reject $H_0$) \u2192 **increases** $\\\\beta$ (more likely to miss real effects).

$$\\\\alpha \\\\downarrow \\\\implies \\\\beta \\\\uparrow$$

You can\u2019t minimize both simultaneously with a fixed sample size.

---

### Choosing $\\\\alpha$

| Situation | Typical $\\\\alpha$ | Why |
|-----------|-----------------|-----|
| Standard | 0.05 | Balance of Type I and II errors |
| Medical safety | 0.01 or 0.001 | Type I error is costly (false approval) |
| Exploratory | 0.10 | Want to detect more effects |

### Consequences Matter

Choose $\\\\alpha$ by considering which error is worse:
- If Type I is more serious \u2192 use smaller $\\\\alpha$
- If Type II is more serious \u2192 use larger $\\\\alpha$""",
                'mcqs': [
                    ('Decreasing $\\\\alpha$ from 0.05 to 0.01:',
                     ['Decreases the chance of Type II error', 'Increases the chance of Type II error', 'Has no effect on Type II error', 'Eliminates all errors'],
                     1, 'Lower $\\\\alpha$ makes it harder to reject $H_0$, increasing the chance of missing a true effect (higher $\\\\beta$).'),
                    ('A drug company testing a new medication should use $\\\\alpha = 0.01$ because:',
                     ['They want to find more effects', 'A Type I error (approving a bad drug) is very serious', 'A Type II error is more costly', 'It reduces the sample size needed'],
                     1, 'Approving a harmful drug (Type I) is dangerous. A low $\\\\alpha$ provides stronger proof before approval.'),
                    ('The only way to lower BOTH $\\\\alpha$ and $\\\\beta$ is to:',
                     ['Change the significance level', 'Increase the sample size', 'Use a one-tailed test', 'Change the alternative hypothesis'],
                     1, 'Larger $n$ gives more power, allowing you to decrease both error probabilities.')
                ],
                'inputs': {
                    'prompt': """**Error Tradeoff** \U0001f9ee

**1)** If $\\\\alpha = 0.05$, what is the probability of a Type I error?

**2)** Lowering $\\\\alpha$ to 0.01 makes $\\\\beta$ go ___ (up/down).

**3)** What must increase to reduce BOTH types of errors simultaneously?""",
                    'boxes': 3,
                    'answers': ['0.05', 'up', 'sample size'],
                    'hints': ['$\\\\alpha$ IS the Type I probability', 'Harder to reject $H_0$ means missing more true effects', 'More data = more power'],
                    'explanation': '1) $\\\\alpha = 0.05 = P(\\\\text{Type I})$. 2) $\\\\beta$ goes up. 3) Sample size $n$ must increase.'
                }
            },
            {
                'title': 'Power of a Test',
                'content': """# \U0001f4aa Power of a Test

**Part 3 of 7 \u2014 Detecting Real Effects**

---

### What Is Power?

$$\\\\text{Power} = 1 - \\\\beta = P(\\\\text{reject } H_0 \\\\mid H_0 \\\\text{ is false})$$

Power is the probability of correctly detecting a real effect.

---

### Desirable Power

- Power of 0.80 (80%) or higher is considered adequate
- Power of 0.90 (90%) is preferred in many studies

### What Affects Power?

| Factor | Effect on Power |
|--------|----------------|
| Increase $n$ | Power increases |
| Increase $\\\\alpha$ | Power increases |
| Larger true effect | Power increases |
| Decrease $\\\\sigma$ | Power increases |
| One-tailed vs two-tailed | One-tailed has more power |

### Visual Interpretation

Power relates to the overlap between the null distribution and the true distribution. Less overlap \u2192 more power.""",
                'mcqs': [
                    ('Power equals:',
                     ['$\\\\alpha$', '$\\\\beta$', '$1 - \\\\beta$', '$1 - \\\\alpha$'],
                     2, 'Power = $1 - \\\\beta$ = probability of correctly rejecting a false $H_0$.'),
                    ('A test with power 0.85 has:',
                     ['85% chance of a Type I error', '15% chance of failing to detect a real effect', '85% chance of accepting $H_0$', '15% chance of rejecting $H_0$'],
                     1, 'Power = 0.85 means $\\\\beta = 0.15$ \u2014 15% chance of a Type II error.'),
                    ('Which does NOT increase power?',
                     ['Larger sample size', 'Larger significance level', 'Larger population standard deviation', 'Larger true effect size'],
                     2, 'Larger $\\\\sigma$ makes it harder to detect effects \u2014 power DECREASES.')
                ],
                'inputs': {
                    'prompt': """**Power Calculations** \U0001f9ee

A test has $\\\\beta = 0.25$.

**1)** What is the power of this test?

**2)** Is this power considered adequate by the 80% standard? (yes/no)

**3)** Name one way to increase power without changing $\\\\alpha$.""",
                    'boxes': 3,
                    'answers': ['0.75', 'no', 'increase sample size'],
                    'hints': ['Power = $1 - \\\\beta$', 'Is $0.75 \\\\geq 0.80$?', 'More data means...'],
                    'explanation': '1) Power = $1 - 0.25 = 0.75$. 2) No, $0.75 < 0.80$. 3) Increase sample size (or reduce $\\\\sigma$, or increase effect size).'
                }
            },
            {
                'title': 'Factors Affecting Power',
                'content': """# \U0001f527 Factors Affecting Power

**Part 4 of 7 \u2014 Detailed Analysis**

---

### Sample Size and Power

$$\\\\text{Power} \\\\propto \\\\sqrt{n}$$

Doubling the sample size increases power, but the relationship is not linear.

### Effect Size

The **effect size** measures the magnitude of the true difference:

$$d = \\\\frac{|\\\\mu_{\\\\text{true}} - \\\\mu_0|}{\\\\sigma}$$

| Effect Size | Cohen\u2019s $d$ |
|-------------|-------------|
| Small | 0.2 |
| Medium | 0.5 |
| Large | 0.8 |

Larger effects are easier to detect \u2192 higher power.

---

### One-Tailed vs. Two-Tailed

A one-tailed test has more power than a two-tailed test at the same $\\\\alpha$, because all $\\\\alpha$ is concentrated in one tail.

$$\\\\text{Power}_{\\\\text{one-tail}} > \\\\text{Power}_{\\\\text{two-tail}}$$""",
                'mcqs': [
                    ('Quadrupling the sample size roughly:',
                     ['Quadruples power', 'Doubles the ability to detect effects', 'Has no effect on power', 'Halves the Type I error rate'],
                     1, 'Power depends on $\\\\sqrt{n}$. Quadrupling $n$ doubles $\\\\sqrt{n}$, roughly doubling detection ability.'),
                    ('A Cohen\u2019s $d$ of 0.8 indicates:',
                     ['A small effect', 'A medium effect', 'A large effect', 'No effect'],
                     2, 'Cohen: $d = 0.2$ small, $d = 0.5$ medium, $d = 0.8$ large.'),
                    ('Switching from a two-tailed to one-tailed test:',
                     ['Decreases power', 'Increases power', 'Has no effect on power', 'Changes the sample size needed'],
                     1, 'One-tailed concentrates $\\\\alpha$ in one direction, increasing power for that direction.')
                ],
                'inputs': {
                    'prompt': """**Power Analysis** \U0001f9ee

$H_0: \\\\mu = 100$. True $\\\\mu = 106$, $\\\\sigma = 15$.

**1)** Effect size $d = |106 - 100|/15 = ?$ (simplified)

**2)** Is this a small, medium, or large effect?

**3)** To increase power, should you increase or decrease $n$?""",
                    'boxes': 3,
                    'answers': ['0.4', 'small', 'increase'],
                    'hints': ['$6/15$', 'Compare $d$ to Cohen\u2019s benchmarks', 'More data = more power'],
                    'explanation': '1) $d = 6/15 = 0.4$. 2) Between small (0.2) and medium (0.5) \u2014 small-to-medium. 3) Increase $n$.'
                }
            },
            {
                'title': 'Applications',
                'content': """# \U0001f4a1 Applications

**Part 5 of 7 \u2014 Real-World Power Analysis**

---

### Power Analysis in Study Design

Before collecting data, researchers should:
1. **Specify** the smallest effect worth detecting
2. **Choose** $\\\\alpha$ and desired power (often 0.80)
3. **Calculate** the required sample size

### Example

Want to detect a 5-point difference in test scores ($\\\\sigma = 20$).
With $\\\\alpha = 0.05$ and power = 0.80:

$$n \\\\approx \\\\left(\\\\frac{z_{\\\\alpha/2} + z_{\\\\beta}}{d}\\\\right)^2 = \\\\left(\\\\frac{1.96 + 0.84}{0.25}\\\\right)^2 \\\\approx 126 \\\\text{ per group}$$

---

### Consequences of Low Power

- Wasted resources on a study that likely won\u2019t find anything
- Failure to detect important effects
- Non-significant results that are inconclusive (not evidence of no effect!)

> \u201cAbsence of evidence is not evidence of absence.\u201d""",
                'mcqs': [
                    ('Power analysis should be done:',
                     ['After collecting data', 'Before designing the study', 'Only if the test is not significant', 'Never on the AP exam'],
                     1, 'Power analysis is part of study planning to ensure adequate sample size.'),
                    ('A study with power = 0.30 that fails to reject $H_0$:',
                     ['Proves $H_0$ is true', 'Provides weak evidence because the test had poor power', 'Means the effect definitely doesn\u2019t exist', 'Should use a smaller $\\\\alpha$'],
                     1, 'Low power means the study probably couldn\u2019t detect the effect even if it existed.'),
                    ('To detect a smaller effect size, you need:',
                     ['A smaller sample', 'A larger sample', 'A smaller $\\\\alpha$', 'Fewer measurements'],
                     1, 'Smaller effects require more data to distinguish from random variation.')
                ],
                'inputs': {
                    'prompt': """**Power Application** \U0001f9ee

A researcher has power = 0.60 and doesn\u2019t reject $H_0$.

**1)** How likely was the test to detect a real effect?

**2)** What is $\\\\beta$?

**3)** Should the researcher conclude the effect doesn\u2019t exist? (yes/no)""",
                    'boxes': 3,
                    'answers': ['60%', '0.40', 'no'],
                    'hints': ['Power = probability of detecting truth', '$\\\\beta = 1 - \\\\text{Power}$', 'Absence of evidence is not...'],
                    'explanation': '1) Only 60% likely. 2) $\\\\beta = 1 - 0.60 = 0.40$. 3) No \u2014 the test lacked adequate power to draw that conclusion.'
                }
            },
            {
                'title': 'Problem-Solving Workshop',
                'content': """# \U0001f3c6 Problem-Solving Workshop

**Part 6 of 7 \u2014 AP-Style Practice**

---

### Common AP Questions

1. **Describe** Type I and Type II errors in context
2. **Explain** the consequences of each error type
3. **State** which error is more serious and why
4. **Relationship** between $\\\\alpha$, $\\\\beta$, power, and sample size

---

### Template: Describing Errors in Context

**Type I:** \u201cWe conclude [Ha in context] when in reality [H0 in context].\u201d

**Type II:** \u201cWe fail to conclude [Ha in context] when in reality [Ha IS true].\u201d

### Example

$H_0$: The new drug is not effective. $H_a$: The new drug IS effective.

- Type I: We conclude the drug is effective when it actually ISN\u2019T (leads to approving an ineffective drug)
- Type II: We fail to detect that the drug IS effective (miss a good drug)""",
                'mcqs': [
                    ('$H_0$: The water is safe. $H_a$: The water is contaminated. A Type II error means:',
                     ['Declaring safe water contaminated', 'Declaring contaminated water safe', 'Testing the wrong water', 'Using too large a sample'],
                     1, 'Type II: failing to reject $H_0$ when $H_a$ is true = declaring contaminated water safe. Very dangerous!'),
                    ('In the water quality example, which error is more serious?',
                     ['Type I (false alarm about contamination)', 'Type II (missing real contamination)', 'Both are equally serious', 'Neither is serious'],
                     1, 'Missing real contamination (Type II) puts people at health risk \u2014 far more serious.'),
                    ('If Type II error is more serious, you should:',
                     ['Use a smaller $\\\\alpha$', 'Use a larger $\\\\alpha$ to increase power', 'Not do the test', 'Use a larger sample only'],
                     1, 'Larger $\\\\alpha$ increases power, reducing $\\\\beta$ (the chance of the more dangerous Type II error).')
                ],
                'inputs': {
                    'prompt': """**Error Context** \U0001f9ee

$H_0$: The parachute meets safety standards. $H_a$: The parachute does NOT meet safety standards.

**1)** Type I error: reject a parachute that actually _____ safety standards. (meets/fails)

**2)** Type II error: accept a parachute that actually _____ safety standards. (meets/fails)

**3)** Which error is more dangerous? (Type I/Type II)""",
                    'boxes': 3,
                    'answers': ['meets', 'fails', 'Type II'],
                    'hints': ['Type I = rejecting truth ($H_0$ true)', 'Type II = failing to detect problem ($H_a$ true)', 'Which puts lives at risk?'],
                    'explanation': '1) Meets (rejecting a good parachute = waste). 2) Fails (approving a bad parachute = dangerous!). 3) Type II \u2014 a faulty parachute could be fatal.'
                }
            },
            {
                'title': 'Mixed Review',
                'content': """# \U0001f4dd Mixed Review

**Part 7 of 7 \u2014 Comprehensive Review**

---

### Complete Summary

| Concept | Formula/Value |
|---------|--------------|
| P(Type I) | $\\\\alpha$ |
| P(Type II) | $\\\\beta$ |
| Power | $1 - \\\\beta$ |
| $\\\\alpha \\\\downarrow$ | $\\\\beta \\\\uparrow$, Power $\\\\downarrow$ |
| $n \\\\uparrow$ | $\\\\beta \\\\downarrow$, Power $\\\\uparrow$ |
| Effect $\\\\uparrow$ | $\\\\beta \\\\downarrow$, Power $\\\\uparrow$ |
| $\\\\sigma \\\\downarrow$ | $\\\\beta \\\\downarrow$, Power $\\\\uparrow$ |

### AP Exam Checklist

- [ ] Define both error types in context
- [ ] State consequences of each error
- [ ] Identify which error is more serious
- [ ] Know factors that affect power
- [ ] Understand the $\\\\alpha$/$\\\\beta$ tradeoff""",
                'mcqs': [
                    ('Power = 0.90 means $\\\\beta = $:',
                     ['0.90', '0.10', '0.05', '0.01'],
                     1, '$\\\\beta = 1 - \\\\text{Power} = 1 - 0.90 = 0.10$.'),
                    ('Which combination is IMPOSSIBLE (with fixed $n$)?',
                     ['$\\\\alpha = 0.05, \\\\beta = 0.20$', '$\\\\alpha = 0.01, \\\\beta = 0.40$', '$\\\\alpha = 0.01, \\\\beta = 0.01$ with $n = 10$ and small effect', '$\\\\alpha = 0.10, \\\\beta = 0.10$'],
                     2, 'With very small $n$ and small effect, you can\u2019t have both $\\\\alpha$ and $\\\\beta$ tiny.'),
                    ('Increasing sample size from 50 to 200 will:',
                     ['Only decrease $\\\\alpha$', 'Only decrease $\\\\beta$', 'Decrease both $\\\\alpha$ and $\\\\beta$', 'Decrease $\\\\beta$ but not change $\\\\alpha$'],
                     3, '$\\\\alpha$ is set by the researcher. Increasing $n$ decreases $\\\\beta$ (increases power) but $\\\\alpha$ stays fixed.')
                ],
                'inputs': {
                    'prompt': """**Final Challenge** \U0001f9ee

**1)** $\\\\alpha = 0.05$, Power = 0.80. What is $\\\\beta$?

**2)** True or False: Increasing $n$ always increases $\\\\alpha$.

**3)** A test with $\\\\alpha = 0.05$ incorrectly rejects $H_0$ about ___% of the time when $H_0$ is true.""",
                    'boxes': 3,
                    'answers': ['0.20', 'false', '5'],
                    'hints': ['$\\\\beta = 1 - \\\\text{Power}$', '$\\\\alpha$ is chosen by the researcher', '$\\\\alpha$ as a percentage'],
                    'explanation': '1) $\\\\beta = 1 - 0.80 = 0.20$. 2) False \u2014 $\\\\alpha$ is fixed by the researcher, not the sample size. 3) 5% of the time.'
                }
            }
        ]
    },
    {
        'slug': 'exploratory-data-apstats',
        'filePrefix': 'apstats-exploratory-data',
        'exportPrefix': 'apStatsEDA',
        'idPrefix': 'exploratorydata',
        'parts': [
            {
                'title': 'Exploratory Data Analysis Overview',
                'content': """# \U0001f50d Exploratory Data Analysis

**Part 1 of 7 \u2014 EDA Overview**

---

### What Is EDA?

Exploratory Data Analysis (EDA) is the process of using graphs and summary statistics to understand the key features of a dataset.

### The Four Features (SOCS)

When describing a distribution, always mention:

| Feature | What to Look For |
|---------|-----------------|
| **S**hape | Symmetric, skewed left, skewed right, bimodal, uniform |
| **O**utliers | Unusual values far from the pattern |
| **C**enter | Mean, median |
| **S**pread | Range, IQR, standard deviation |

---

### Types of Data

| Type | Examples |
|------|---------|
| **Categorical** | Gender, color, yes/no |
| **Quantitative** | Height, test scores, income |

### Graphs for Categorical vs. Quantitative

- Categorical: bar chart, pie chart
- Quantitative: histogram, stemplot, boxplot, dotplot""",
                'mcqs': [
                    ('When describing a distribution, SOCS stands for:',
                     ['Sum, Origin, Count, Slope', 'Shape, Outliers, Center, Spread', 'Standard deviation, Outliers, Correlation, Skewness', 'Sample, Observation, Category, Scale'],
                     1, 'SOCS: Shape, Outliers, Center, Spread \u2014 the four features to describe in any distribution.'),
                    ('Which graph is best for quantitative data?',
                     ['Bar chart', 'Pie chart', 'Histogram', 'None of these'],
                     2, 'Histograms display the distribution of quantitative data. Bar charts are for categorical data.'),
                    ('A distribution skewed right has:',
                     ['A long tail to the left', 'A long tail to the right', 'Equal tails', 'No tail'],
                     1, 'Right-skewed = long right tail. Mean > median. Examples: income, home prices.')
                ],
                'inputs': {
                    'prompt': """**Data Classification** \U0001f9ee

Classify each as categorical (C) or quantitative (Q):

**1)** Zip code

**2)** Temperature in degrees Fahrenheit

**3)** Number of siblings""",
                    'boxes': 3,
                    'answers': ['C', 'Q', 'Q'],
                    'hints': ['Although numeric, zip codes are labels', 'Measured on a continuous scale', 'Counted, but can be ordered/averaged'],
                    'explanation': '1) C \u2014 zip codes are labels, not measurable quantities. 2) Q \u2014 temperature is measured numerically. 3) Q \u2014 number of siblings is a count.'
                }
            },
            {
                'title': 'Graphical Displays',
                'content': """# \U0001f4ca Graphical Displays

**Part 2 of 7 \u2014 Graphs for Quantitative Data**

---

### Histograms

- Bars represent frequency (or relative frequency) for intervals
- No gaps between bars (unlike bar charts)
- Show shape, center, spread, and outliers

### Stemplots (Stem-and-Leaf Plots)

- Each value is split into a \u201cstem\u201d and \u201cleaf\u201d
- Good for small datasets (preserves individual values)
- **Back-to-back stemplots** compare two groups

---

### Dotplots

- Each value represented by a dot above a number line
- Best for small datasets
- Easy to see clusters, gaps, and outliers

### Comparative Displays

To compare distributions, use:
- Side-by-side boxplots
- Back-to-back stemplots
- Overlapping or stacked histograms

> \U0001f511 Always compare shape, outliers, center, AND spread when comparing distributions.""",
                'mcqs': [
                    ('Histograms differ from bar charts because:',
                     ['Histograms have gaps between bars', 'Histograms are for quantitative data with no gaps', 'Bar charts are always vertical', 'Histograms only show frequencies'],
                     1, 'Histograms: no gaps, quantitative data. Bar charts: gaps, categorical data.'),
                    ('A back-to-back stemplot is used to:',
                     ['Display one data set', 'Compare two distributions', 'Show time series data', 'Display categorical data'],
                     1, 'Back-to-back stemplots share stems and have leaves going in opposite directions for two groups.'),
                    ('Which display preserves individual data values?',
                     ['Histogram', 'Boxplot', 'Stemplot', 'Pie chart'],
                     2, 'Stemplots show each individual value; histograms and boxplots group data into intervals or quartiles.')
                ],
                'inputs': {
                    'prompt': """**Graph Selection** \U0001f9ee

Choose the best graph type for each:

**1)** Comparing test score distributions of two classes (histogram/boxplot/stemplot)

**2)** Showing individual values of 20 measurements (histogram/dotplot/boxplot)

**3)** Displaying the distribution of 500 exam scores (histogram/dotplot/stemplot)""",
                    'boxes': 3,
                    'answers': ['boxplot', 'dotplot', 'histogram'],
                    'hints': ['Side-by-side comparison', 'Small dataset, individual values', 'Large dataset needs binning'],
                    'explanation': '1) Side-by-side boxplots for easy comparison. 2) Dotplot preserves individual values for small data. 3) Histogram handles large datasets well.'
                }
            },
            {
                'title': 'Measures of Center',
                'content': """# \U0001f4cd Measures of Center

**Part 3 of 7 \u2014 Mean, Median, Mode**

---

### Mean ($\\\\bar{x}$)

$$\\\\bar{x} = \\\\frac{\\\\sum x_i}{n}$$

- Arithmetic average of ALL values
- **Sensitive** to outliers and skewness
- Best for symmetric distributions

### Median ($M$ or $\\\\tilde{x}$)

- Middle value when data is ordered
- **Resistant** to outliers
- Best for skewed distributions

### Relationship Between Mean and Median

| Shape | Relationship |
|-------|-------------|
| Symmetric | Mean $\\\\approx$ Median |
| Skewed right | Mean > Median |
| Skewed left | Mean < Median |

---

### Why Does Skewness Pull the Mean?

Outliers and long tails pull the mean toward the tail, while the median stays put.""",
                'mcqs': [
                    ('For a right-skewed distribution:',
                     ['Mean < Median', 'Mean = Median', 'Mean > Median', 'Mean and Median are unrelated'],
                     2, 'The right tail pulls the mean to the right, so Mean > Median.'),
                    ('Which measure of center is resistant to outliers?',
                     ['Mean', 'Median', 'Mode', 'Range'],
                     1, 'The median is not affected by extreme values because it depends only on the middle position.'),
                    ('Data: 2, 3, 5, 7, 100. The mean is:',
                     ['5', '7', '23.4', '100'],
                     2, '$\\\\bar{x} = (2+3+5+7+100)/5 = 117/5 = 23.4$. The outlier (100) pulls the mean way up.')
                ],
                'inputs': {
                    'prompt': """**Center Calculations** \U0001f9ee

Data: 10, 12, 14, 15, 19

**1)** Mean $\\\\bar{x} = ?$

**2)** Median = ?

**3)** If we add 100 to the dataset, which changes more \u2014 the mean or the median?""",
                    'boxes': 3,
                    'answers': ['14', '14', 'mean'],
                    'hints': ['$(10+12+14+15+19)/5$', 'Middle value of 5 ordered numbers', 'The outlier pulls which measure?'],
                    'explanation': '1) $(10+12+14+15+19)/5 = 70/5 = 14$. 2) Middle value = 14. 3) The mean changes much more \u2014 the median only shifts slightly.'
                }
            },
            {
                'title': 'Measures of Spread',
                'content': """# \U0001f4cf Measures of Spread

**Part 4 of 7 \u2014 Range, IQR, Standard Deviation**

---

### Range

$$\\\\text{Range} = \\\\max - \\\\min$$

Simple but not resistant to outliers.

### Interquartile Range (IQR)

$$IQR = Q_3 - Q_1$$

- Middle 50% of the data
- **Resistant** to outliers
- Best for skewed distributions

### Standard Deviation ($s$)

$$s = \\\\sqrt{\\\\frac{\\\\sum(x_i - \\\\bar{x})^2}{n-1}}$$

- Measures average distance from the mean
- NOT resistant to outliers
- Best for symmetric distributions
- $s = 0$ only when all values are identical

---

### Outlier Rule (1.5 \u00d7 IQR)

A value is an outlier if it falls:
- Below $Q_1 - 1.5 \\\\times IQR$
- Above $Q_3 + 1.5 \\\\times IQR$""",
                'mcqs': [
                    ('IQR measures:',
                     ['The range of all data', 'The spread of the middle 50%', 'The distance from mean to median', 'The number of outliers'],
                     1, '$IQR = Q_3 - Q_1$, capturing the spread of the middle half of the data.'),
                    ('As you add a constant to every value in a dataset, the standard deviation:',
                     ['Increases', 'Decreases', 'Stays the same', 'Doubles'],
                     2, 'Adding a constant shifts all values equally \u2014 spread doesn\u2019t change.'),
                    ('$Q_1 = 20, Q_3 = 40$. An outlier is any value above:',
                     ['60', '70', '80', '100'],
                     1, '$IQR = 20$. Upper fence = $40 + 1.5(20) = 40 + 30 = 70$.')
                ],
                'inputs': {
                    'prompt': """**Spread Calculations** \U0001f9ee

Five-number summary: Min = 5, $Q_1 = 12$, Median = 18, $Q_3 = 24$, Max = 50.

**1)** $IQR = ?$

**2)** Upper outlier fence = $Q_3 + 1.5 \\\\times IQR = ?$

**3)** Is the maximum value (50) an outlier? (yes/no)""",
                    'boxes': 3,
                    'answers': ['12', '42', 'yes'],
                    'hints': ['$Q_3 - Q_1$', '$24 + 1.5(12)$', 'Is $50 > 42$?'],
                    'explanation': '1) $IQR = 24 - 12 = 12$. 2) $24 + 18 = 42$. 3) Yes \u2014 $50 > 42$.'
                }
            },
            {
                'title': 'Shape and Outliers',
                'content': """# \U0001f4c8 Shape and Outliers

**Part 5 of 7 \u2014 Describing Distributions Completely**

---

### Shapes of Distributions

| Shape | Description | Example |
|-------|------------|---------|
| **Symmetric** | Mirror image, roughly equal tails | Test scores |
| **Skewed right** | Long right tail | Income, home prices |
| **Skewed left** | Long left tail | Age at retirement |
| **Bimodal** | Two peaks | Heights of men & women combined |
| **Uniform** | All values equally likely | Rolling a die |

---

### The Effect of Outliers

Outliers affect:
- **Mean** (pulled toward outlier) \u2014 NOT resistant
- **Standard deviation** (increases) \u2014 NOT resistant
- **Range** (increases) \u2014 NOT resistant

Outliers do NOT significantly affect:
- **Median** \u2014 resistant
- **IQR** \u2014 resistant

### Boxplots

The five-number summary is displayed visually:
$$\\\\text{Min}, Q_1, \\\\text{Median}, Q_3, \\\\text{Max}$$

Modified boxplots show outliers as individual dots beyond the fences.""",
                'mcqs': [
                    ('Income data is typically:',
                     ['Symmetric', 'Skewed right', 'Skewed left', 'Uniform'],
                     1, 'Most people earn moderate incomes, but a few high earners create a long right tail.'),
                    ('A modified boxplot differs from a regular boxplot by:',
                     ['Using a different median', 'Showing outliers as individual points', 'Not showing quartiles', 'Using the mean instead of median'],
                     1, 'Modified boxplots plot outliers individually beyond the whiskers (fences).'),
                    ('Which pair of statistics is BOTH resistant to outliers?',
                     ['Mean and SD', 'Median and IQR', 'Mean and IQR', 'Median and range'],
                     1, 'Both median and IQR are resistant measures (not affected by extreme values).')
                ],
                'inputs': {
                    'prompt': """**Distribution Description** \U0001f9ee

A histogram of household income in a city shows a peak around $50,000 with a long tail stretching to $500,000+.

**1)** What is the shape? (symmetric/skewed right/skewed left)

**2)** Is the mean likely above or below the median?

**3)** Which is a better measure of center for this data? (mean/median)""",
                    'boxes': 3,
                    'answers': ['skewed right', 'above', 'median'],
                    'hints': ['Long right tail', 'Skewed right pulls the mean which way?', 'Resistant to skewness'],
                    'explanation': '1) Skewed right (long tail toward high incomes). 2) Above (right tail pulls mean up). 3) Median (resistant to the right skew).'
                }
            },
            {
                'title': 'Problem-Solving Workshop',
                'content': """# \U0001f3c6 Problem-Solving Workshop

**Part 6 of 7 \u2014 AP-Style Practice**

---

### AP Exam Framework for EDA

When describing a distribution, ALWAYS address:
1. **Shape** (is it symmetric? skewed? bimodal?)
2. **Outliers** (are there any? use the 1.5\u00d7IQR rule)
3. **Center** (give an approximate value and name the statistic)
4. **Spread** (report the appropriate measure)

---

### Template Answer

\u201cThe distribution of [variable] is [shape] with [center measure] approximately [value] and [spread measure] approximately [value]. [There are / are no] outliers.\u201d

### Comparing Distributions

Always compare both distributions on ALL four features. Use comparative language: \u201chigher,\u201d \u201cwider,\u201d \u201cmore skewed.\u201d""",
                'mcqs': [
                    ('An AP free-response asks you to \u201cdescribe the distribution.\u201d You should include:',
                     ['Only center and spread', 'Shape, center, and spread only', 'Shape, outliers, center, and spread', 'A list of all data values'],
                     2, 'A complete description addresses all SOCS: Shape, Outliers, Center, Spread.'),
                    ('When comparing two distributions, you should:',
                     ['Describe each separately', 'Use comparative language (higher, wider, etc.)', 'Only mention differences', 'Focus on just the means'],
                     1, 'Compare directly: \u201cGroup A has a higher median,\u201d \u201cGroup B is more spread out.\u201d'),
                    ('Which measures should you report for a skewed distribution?',
                     ['Mean and standard deviation', 'Median and IQR', 'Mode and range', 'Mean and IQR'],
                     1, 'For skewed data, use resistant measures: median (center) and IQR (spread).')
                ],
                'inputs': {
                    'prompt': """**SOCS Description** \U0001f9ee

Test scores: Min=45, $Q_1=65$, Med=75, $Q_3=85$, Max=98. Roughly symmetric, no outliers.

**1)** Best measure of center? (mean/median) and its approximate value?

**2)** $IQR = ?$

**3)** Are there outliers by the 1.5\u00d7IQR rule? (yes/no) Lower fence = ?""",
                    'boxes': 3,
                    'answers': ['75', '20', '35'],
                    'hints': ['Symmetric \u2192 either works; median is given', '$Q_3 - Q_1$', '$Q_1 - 1.5 \\\\times IQR = 65 - 30$'],
                    'explanation': '1) Median = 75 (or mean \u2248 75 for symmetric data). 2) $IQR = 85 - 65 = 20$. 3) Lower fence = $65 - 30 = 35$. Min = 45 > 35, so no outliers.'
                }
            },
            {
                'title': 'Mixed Review',
                'content': """# \U0001f4dd Mixed Review

**Part 7 of 7 \u2014 Comprehensive Review**

---

### Quick Reference

| Measure | Resistant? | Best for |
|---------|-----------|----------|
| Mean | No | Symmetric data |
| Median | Yes | Skewed data |
| Std Dev | No | Symmetric data |
| IQR | Yes | Skewed data |
| Range | No | Quick summary |

### EDA Checklist

- [ ] Identify variable type (categorical vs. quantitative)
- [ ] Choose appropriate graph
- [ ] Describe shape (symmetric, skewed L/R, bimodal, uniform)
- [ ] Check for outliers (1.5 \u00d7 IQR rule)
- [ ] Report center (mean or median)
- [ ] Report spread (SD or IQR)
- [ ] Use context (variable names, units)""",
                'mcqs': [
                    ('Multiplying every value by 2:',
                     ['Doubles the mean and doubles the SD', 'Doubles the mean but SD stays the same', 'Mean stays the same, SD doubles', 'Both mean and SD stay the same'],
                     0, 'Multiplying by a constant multiplies BOTH the mean and the standard deviation by that constant.'),
                    ('The five-number summary includes:',
                     ['Mean, median, mode, range, IQR', 'Min, $Q_1$, median, $Q_3$, max', 'Mean, SD, min, max, $n$', '$Q_1$, $Q_2$, $Q_3$, $Q_4$, $Q_5$'],
                     1, 'Five-number summary: Min, $Q_1$, Median, $Q_3$, Max.'),
                    ('Data: 1, 2, 3, 4, 5. $s \\\\approx$:',
                     ['0', '1', '1.58', '2.5'],
                     2, '$\\\\bar{x} = 3$. $s = \\\\sqrt{\\\\frac{(1-3)^2+(2-3)^2+(3-3)^2+(4-3)^2+(5-3)^2}{4}} = \\\\sqrt{10/4} = \\\\sqrt{2.5} \\\\approx 1.58$.')
                ],
                'inputs': {
                    'prompt': """**Final Challenge** \U0001f9ee

Data: 3, 5, 7, 8, 9, 10, 12, 14, 50

**1)** $\\\\bar{x} = ?$ (round to 1 place)

**2)** Median = ?

**3)** Is 50 an outlier by the 1.5\u00d7IQR rule? ($Q_1 = 6$, $Q_3 = 13$, so $IQR = ?$ and upper fence = ?)""",
                    'boxes': 3,
                    'answers': ['13.1', '9', 'yes'],
                    'hints': ['Sum = 118, $n = 9$', 'Middle of 9 ordered values', '$IQR = 7$, fence = $13 + 10.5 = 23.5$, and $50 > 23.5$'],
                    'explanation': '1) $118/9 \\\\approx 13.1$. 2) Median = 9 (5th value). 3) Yes \u2014 $IQR = 7$, upper fence = $23.5$, and $50 > 23.5$.'
                }
            }
        ]
    }
]


def esc(s):
    return s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')


def format_mcqs(mcqs):
    lines = []
    for q, opts, correct, expl in mcqs:
        opts_str = ', '.join(f"'{esc(o)}'" for o in opts)
        lines.append(f"""          {{
            question: '{esc(q)}',
            options: [{opts_str}],
            correctAnswer: {correct},
            explanation: '{esc(expl)}'
          }}""")
    return ',\n'.join(lines)


def generate_rich_lesson(topic, part_idx, part):
    slug = topic['slug']
    prefix = topic['exportPrefix']
    pn = part_idx + 1
    export_name = f"{prefix}Part{pn}Data"
    id_prefix = topic['idPrefix']

    sections = []
    sections.append(f"""    {{
      id: '{id_prefix}-p{pn}-intro',
      type: 'text' as const,
      content: `{esc(part['content'])}`
    }}""")

    if 'mcqs' in part:
        sections.append(f"""    {{
      id: '{id_prefix}-p{pn}-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \\U0001f3af
      `,
      exercise: {{
        questions: [
{format_mcqs(part['mcqs'])}
        ]
      }}
    }}""")

    if 'inputs' in part:
        inp = part['inputs']
        answers_str = ', '.join(f"'{esc(a)}'" for a in inp['answers'])
        hints = ''
        for i, h in enumerate(inp['hints']):
            hints += f"\n        hint{i+1}: '{esc(h)}',"
        sections.append(f"""    {{
      id: '{id_prefix}-p{pn}-input',
      type: 'input-boxes' as const,
      content: `
{esc(inp['prompt'])}
      `,
      exercise: {{
        boxes: {inp['boxes']},
        correctAnswers: [{answers_str}],{hints}
        explanation: '{esc(inp['explanation'])}'
      }}
    }}""")

    return f"""export const {export_name} = {{
  topicSlug: '{slug}',
  sections: [
{','.join(sections)}
  ]
}};
"""


def main():
    count = 0
    for topic in TOPICS:
        for i, part in enumerate(topic['parts']):
            filename = f"{topic['filePrefix']}-part{i+1}.ts"
            filepath = os.path.join(BASE, filename)
            content = generate_rich_lesson(topic, i, part)
            with open(filepath, 'w') as f:
                f.write(content)
            count += 1
            print(f"  Upgraded {filename}")
    print(f"\nTotal: {count} files upgraded")


if __name__ == '__main__':
    main()
