import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('📝 Filling in final ACT content (Science, Reading, Test Strategy)...\n');

  // ACT Science: Evaluation of Models and Experiments
  await prisma.topic.update({
    where: { slug: 'evaluation-models-experiments' },
    data: {
      textContent: `# Evaluation of Models and Experiments (ACT Science)

## Understanding Scientific Models

**A model** is a simplified representation of a system or phenomenon used to:
- Explain observations
- Make predictions
- Test hypotheses
- Understand complex processes

**Types of models on ACT:**
- Physical models (diagrams, structures)
- Mathematical models (equations, graphs)
- Conceptual models (theories, frameworks)

## Evaluating Models

### Questions to Ask About Models

**1. Does the model match the data?**
- Compare model predictions to actual observations
- Look for agreement or discrepancies

**2. What are the model's assumptions?**
- What does it simplify or ignore?
- Are assumptions reasonable?

**3. What are the model's limitations?**
- Under what conditions does it work?
- Where does it break down?

**4. Can it make testable predictions?**
- Does it generate hypotheses?
- Can predictions be verified?

### ACT Question Types

**Type 1: "According to the model..."**

**Strategy:**
- Find the relevant model (graph, diagram, equation)
- Read what it predicts for given conditions
- Don't overthink — answer is in the model

**Type 2: "The model is supported by which observation?"**

**Strategy:**
- Check each observation against model predictions
- Choose observation that matches/confirms model

**Type 3: "Which result would contradict the model?"**

**Strategy:**
- Understand what model predicts
- Find result that goes against that prediction

## Understanding Experiments

### Components of an Experiment

**1. Hypothesis:** Testable prediction

**2. Variables:**
- **Independent variable:** What experimenter changes
- **Dependent variable:** What's measured/observed
- **Control variables:** What's kept constant

**3. Control group:** Baseline for comparison

**4. Experimental group:** Receives treatment/manipulation

**5. Procedure:** Steps taken

**6. Results:** Data collected

**7. Conclusion:** What data shows about hypothesis

### Experimental Design Principles

**Control:**
- Keep all variables constant except the one being tested
- Use control group for comparison

**Randomization:**
- Random assignment reduces bias
- Ensures groups are similar

**Replication:**
- Repeat trials for reliability
- Larger sample sizes are better

**Precision:**
- Use appropriate measuring tools
- Minimize measurement error

## Evaluating Experiments

### Quality of Experimental Design

**Good experiments:**
✓ Test one variable at a time  
✓ Include adequate controls  
✓ Have sufficient sample size  
✓ Use precise measurements  
✓ Can be replicated  
✓ Minimize confounding variables

**Poor experiments:**
❌ Change multiple variables  
❌ Lack proper controls  
❌ Have too small sample size  
❌ Use imprecise methods  
❌ Can't be repeated

### Interpreting Results

**Questions to consider:**

**1. Do results support the hypothesis?**
- Compare prediction to actual results
- Look for patterns in data

**2. Are results consistent?**
- Check for variability
- Look for outliers or anomalies

**3. What can be concluded?**
- State what data shows
- Avoid over-generalizing

**4. What are alternative explanations?**
- Could something else explain results?
- What other factors might be involved?

## ACT Science Strategies

### Strategy 1: Identify Variables

**Always identify:**
- What's being changed (independent)
- What's being measured (dependent)
- What's being controlled

**Example passage might say:**
"Students tested how temperature affects reaction rate. They performed reactions at 20°C, 30°C, 40°C, and 50°C and measured time to completion."

- Independent: Temperature
- Dependent: Time to completion
- Controls: Amount of reactants, pressure, etc.

### Strategy 2: Compare Experiments

**When passage has multiple experiments:**
- What's different between them?
- What's the same?
- What does each test?

**Common pattern:**
- Experiment 1: Tests variable A
- Experiment 2: Tests variable B  
- Experiment 3: Tests variables A + B together

### Strategy 3: Use Graphs and Tables

**For model/experiment questions:**
- Locate relevant graph or table
- Find the specific data point or trend
- Read directly from visual — no complex reasoning needed

### Strategy 4: Evaluate Claims

**"Which statement is supported by the data?"**

**Test each choice:**
- Does data show this?
- Is there evidence for this claim?
- Or is this assumption/extrapolation?

**Choose:** Statement directly supported by results

## Common Question Patterns

### Pattern 1: Design Improvement

**"How could the experiment be improved?"**

**Look for:**
- Increasing sample size
- Adding control group
- Controlling additional variables
- Using more precise measurements
- Repeating trials

### Pattern 2: New Hypothesis

**"Based on these results, which hypothesis could be tested next?"**

**Strategy:**
- Must relate to results
- Should extend/expand on findings
- Must be testable

### Pattern 3: Model Prediction

**"According to Model 1, what would happen if X increased?"**

**Strategy:**
- Find trend in model
- Extend that trend to new condition
- No outside knowledge needed

### Pattern 4: Comparing Models

**"Models 1 and 2 agree that..."  
"Models 1 and 2 differ in..."**

**Strategy:**
- Check what each model says about the topic
- Find similarities (for "agree")
- Find differences (for "differ")

## Common Mistakes

❌ **Using outside knowledge instead of passage**  
ACT Science tests reading comprehension, not content knowledge

❌ **Overthinking simple questions**  
Most answers are directly stated in graphs/tables

❌ **Not identifying variables**  
Misunderstanding what's being tested leads to wrong answers

❌ **Confusing correlation and causation**  
Data may show relationship without proving cause

❌ **Ignoring control groups**  
Control is essential for valid conclusions

❌ **Not reading axis labels**  
Graphs are useless if you don't know what they show!

## Quick Tips

✓ **Read the introduction** — sets context for experiments/models  
✓ **Identify variables first** — what changes, what's measured, what's constant  
✓ **Use process of elimination** — often 2-3 choices clearly wrong  
✓ **Stick to the data** — answer is in passage, not your head  
✓ **Check units** — make sure you're reading right scale  
✓ **Look for trends** — increasing, decreasing, or no relationship  
✓ **Compare controls** — what's different tells you what's being tested

## Practice Approach

1. **Skim passage** — identify type (experiment description, competing models, etc.)
2. **Note variables** — circle independent/dependent
3. **Go to questions** — read what they're asking
4. **Find relevant data** — locate graph, table, or description
5. **Answer based on passage** — not outside knowledge
6. **Check reasonableness** — does answer make sense?

**Remember:** ACT Science isn't a test of scientific knowledge — it's a test of your ability to read and interpret scientific information. Focus on understanding what's presented, not what you already know!
`
    }
  });

  console.log('✅ Filled Evaluation of Models and Experiments\n');

  // ACT Science: Scientific Investigation
  await prisma.topic.update({
    where: { slug: 'scientific-investigation' },
    data: {
      textContent: `# Scientific Investigation (ACT Science)

## The Scientific Method

The scientific method is a systematic approach to understanding the natural world:

**1. Observation** → Notice something interesting  
**2. Question** → Ask what causes it  
**3. Hypothesis** → Propose testable explanation  
**4. Prediction** → State what should happen if hypothesis is true  
**5. Experiment** → Test the prediction  
**6. Analysis** → Examine the data  
**7. Conclusion** → Support or reject hypothesis

## Types of Scientific Investigations

### 1. Controlled Experiments

**Purpose:** Test cause-and-effect relationships

**Key features:**
- **Independent variable:** What you change
- **Dependent variable:** What you measure
- **Control variables:** What you keep constant
- **Control group:** Baseline comparison

**Example:**
Testing if fertilizer increases plant growth
- Independent: Amount of fertilizer
- Dependent: Plant height
- Controls: Water, sunlight, soil type, plant species
- Control group: Plants with no fertilizer

### 2. Observational Studies

**Purpose:** Observe without manipulating

**Characteristics:**
- No variables are changed
- Natural conditions
- Look for patterns/correlations
- Cannot prove causation

**Example:**
Observing bird migration patterns
- Record when birds arrive/depart
- Note weather conditions
- Track population changes

### 3. Comparative Investigations

**Purpose:** Compare two or more groups

**Example:**
Comparing reaction rates at different temperatures
- Test at 20°C, 30°C, 40°C, 50°C
- Measure time for reaction completion
- Look for relationship between temperature and rate

## Variables in Investigations

### Types of Variables

**Independent Variable (IV):**
- What experimenter changes/controls
- Goes on x-axis of graph
- "Cause" in cause-effect

**Dependent Variable (DV):**
- What's measured/observed
- Responds to changes in IV
- Goes on y-axis of graph
- "Effect" in cause-effect

**Control Variables:**
- Kept constant
- Prevents confounding effects
- Ensures fair test

**Example Investigation:**

*"Students tested how light intensity affects photosynthesis rate. They placed plants under lights of different brightness and measured oxygen production."*

- **IV:** Light intensity (what they changed)
- **DV:** Oxygen production (what they measured)
- **Controls:** Plant type, temperature, CO₂ levels, water, time

### ACT Tip: Identifying Variables

**Question pattern:** "What was the independent variable in Experiment 2?"

**Strategy:**
1. Find Experiment 2 description
2. Look for "Students changed..." or "tested at different..."
3. That's your independent variable

## Experimental Design Elements

### Controls

**Why control?**
- Isolates effect of independent variable
- Eliminates alternative explanations
- Makes results valid

**Types:**
- **Control group:** Receives no treatment (baseline)
- **Control variables:** Factors kept constant

**Example:**
Testing new medicine:
- Control group: Gets placebo
- Experimental group: Gets medicine
- Control variables: Age, dosage timing, diet

### Sample Size

**Larger samples = Better reliability**

**Why?**
- Reduces impact of outliers
- Increases statistical significance
- Makes patterns clearer

**ACT questions might ask:**
"How could this experiment be improved?"

**Good answer:** "Test more subjects" or "Increase number of trials"

### Precision and Accuracy

**Precision:** How close measurements are to each other
- Consistent results
- Small variation

**Accuracy:** How close measurements are to true value
- Correct results
- Measures what you intend

**Improving precision:**
- Use better instruments
- Take multiple measurements
- Control environment

### Replication

**Why replicate?**
- Verify results aren't flukes
- Increase confidence in findings
- Identify errors

**Two types:**
1. **Repeated trials:** Same researcher, same conditions
2. **Independent replication:** Different researchers test same hypothesis

## Data Collection and Analysis

### Data Types

**Quantitative:** Numbers, measurements
- Example: Temperature = 25°C, Mass = 150g

**Qualitative:** Descriptions, observations
- Example: Color changed to blue, texture became rough

**ACT favors quantitative data** — easier to graph and analyze

### Organizing Data

**Tables:**
- Rows and columns
- IV typically in left column
- DV in right column(s)
- Include units!

**Graphs:**
- IV on x-axis
- DV on y-axis
- Title and axis labels essential
- Show trends clearly

### Identifying Patterns

**Look for:**

**Positive correlation:** Both variables increase together  
**Negative correlation:** One increases as other decreases  
**No correlation:** No clear relationship  
**Linear trend:** Straight line relationship  
**Non-linear trend:** Curved relationship

## Drawing Conclusions

### Valid Conclusions

**Must be:**
✓ Based on data  
✓ Specific to conditions tested  
✓ Acknowledge limitations  
✓ Distinguish correlation from causation

**Example of good conclusion:**
"In this experiment, increasing temperature from 20°C to 50°C decreased reaction time from 60 seconds to 15 seconds."

**Poor conclusion:**
"Temperature always makes reactions faster."
(Too general, ignores possible limits)

### Limitations

**Every investigation has limitations:**

**Sample size** — Might be too small  
**Duration** — Might be too short  
**Range** — Might not test all conditions  
**Controls** — Might miss confounding variables  
**Measurement error** — Instruments have limits

**ACT questions:** "What is a limitation of this study?"

**Strategy:** Look for what wasn't controlled, what wasn't tested, or what could affect results

## Common ACT Question Types

### Type 1: Identify Variables

**"In Experiment 1, the independent variable was:"**

**Strategy:**
- Find Experiment 1
- Look for what was changed
- That's the IV

### Type 2: Improve Design

**"Which change would improve this experiment?"**

**Common good answers:**
- Increase sample size
- Add more trials
- Include control group
- Control additional variable
- Use more precise measuring tool

### Type 3: Support/Contradict Hypothesis

**"Which result supports Hypothesis A?"**

**Strategy:**
- Understand what Hypothesis A predicts
- Find data that matches that prediction
- Check graphs/tables for confirming evidence

### Type 4: Additional Investigation

**"To further test this hypothesis, students should:"**

**Strategy:**
- Think about what wasn't tested yet
- Look for logical next step
- Must be testable and related

## Common Investigation Flaws (ACT Favorites!)

**Flaw 1: No control group**
- Can't tell if change was due to treatment

**Flaw 2: Multiple variables changed**
- Can't tell which variable caused effect

**Flaw 3: Too few trials**
- Results might not be reliable

**Flaw 4: Bias in sample selection**
- Results might not be representative

**Flaw 5: Improper measurement**
- Wrong tool or technique

**ACT loves asking:** "What is wrong with this experimental design?"

## Experimental Ethics (Sometimes Tested!)

**Key principles:**

**Informed consent:** Participants know what they're agreeing to  
**Minimize harm:** Don't cause unnecessary suffering  
**Confidentiality:** Protect participant privacy  
**Honesty:** Report results truthfully

**Animal research:** Minimize pain, use only when necessary

## Quick Tips for ACT Science

✓ **Read the introduction carefully** — tells you what's being investigated  
✓ **Circle variables** — mark IV, DV, and controls  
✓ **Check sample size** — larger is usually better  
✓ **Look for controls** — proper experiments need them  
✓ **Note units** — °C vs °F, cm vs m matters!  
✓ **Follow the data** — don't use outside knowledge  
✓ **Check axes** — make sure you know what graph shows  
✓ **Process of elimination** — often 2-3 choices are clearly wrong

## Practice Approach

**For investigation passages:**

1. **Skim for structure** — How many experiments? What's the overall question?
2. **Read intro** — What's the research question?
3. **Identify variables** — For each experiment, note IV, DV, controls
4. **Check graphs/tables** — What do they show?
5. **Go to questions** — Often easier than reading whole passage first
6. **Find relevant info** — Locate specific experiment or data
7. **Answer from passage** — Don't overthink!

**Remember:** ACT Science mostly tests whether you can read and understand scientific information, not whether you've memorized biology or chemistry facts. Focus on understanding the investigation design and what the data shows!
`
    }
  });

  console.log('✅ Filled Scientific Investigation\n');

  // ACT Science: Data Representation in Science
  await prisma.topic.update({
    where: { slug: 'data-representation-science' },
    data: {
      textContent: `# Data Representation in Science (ACT Science)

## Understanding Graphs and Charts

The ACT Science section is heavily focused on reading and interpreting visual representations of data. Success depends on quickly extracting information from graphs, tables, and diagrams.

## Types of Graphs

### 1. Line Graphs

**Shows:** Continuous change over time or across a range

**Key features:**
- X-axis: Independent variable
- Y-axis: Dependent variable
- Line shows trend/pattern
- Multiple lines can compare groups

**Example interpretation:**
*Graph shows temperature (y-axis) vs. time (x-axis)*

**Questions might ask:**
- "At 30 minutes, what was the temperature?" (Read directly from graph)
- "Between which times did temperature increase fastest?" (Look for steepest slope)
- "What was the overall trend?" (Increasing, decreasing, constant)

**Reading strategies:**
✓ Check axis labels and units  
✓ Note scale (linear vs. logarithmic)  
✓ Identify highest/lowest points  
✓ Spot trends (increasing, decreasing, leveling off)

### 2. Bar Graphs

**Shows:** Comparisons between categories

**Key features:**
- Categories on x-axis
- Values on y-axis
- Height of bar = value
- Easy to compare

**Example interpretation:**
*Bar graph shows average rainfall by month*

**Questions might ask:**
- "Which month had the most rainfall?" (Find tallest bar)
- "How much more rain fell in April than in June?" (Subtract bar heights)
- "What was the total rainfall for spring months?" (Add March + April + May)

**Reading strategies:**
✓ Read category labels carefully  
✓ Note y-axis scale  
✓ Compare bar heights  
✓ Look for patterns across categories

### 3. Scatter Plots

**Shows:** Relationship between two variables

**Key features:**
- Each point = one observation
- Both axes show numerical data
- Pattern reveals correlation
- May include trend line

**Correlation types:**
- **Positive:** Points go up-right (both variables increase together)
- **Negative:** Points go down-right (one increases as other decreases)
- **None:** No clear pattern

**Example interpretation:**
*Scatter plot: Study hours (x) vs. test scores (y)*

**Questions might ask:**
- "As study hours increased, test scores:" (Identify trend)
- "Which data point represents the student who studied 5 hours?" (Find x = 5)
- "Is there a relationship between study hours and test scores?" (Look for correlation)

**Reading strategies:**
✓ Look for overall pattern  
✓ Identify outliers (points far from pattern)  
✓ Note clusters of points  
✓ Check if trend line is included

### 4. Pie Charts

**Shows:** Parts of a whole (percentages)

**Key features:**
- Circle = 100%
- Each slice = category
- Size shows proportion

**Reading strategies:**
✓ Add up slices (should = 100%)  
✓ Compare relative sizes  
✓ Look for largest/smallest categories

## Tables and Data Sets

### Reading Tables Efficiently

**Table structure:**
- Row headers (left)
- Column headers (top)
- Data cells (intersection)

**ACT strategy:**
1. Read headers first — know what table shows
2. Note units (°C, grams, meters, etc.)
3. Look for patterns (increasing, decreasing)
4. Find specific values by tracing row + column

**Example table:**

| Temperature (°C) | Pressure (kPa) | Volume (L) |
|-----------------|----------------|------------|
| 20              | 101            | 5.0        |
| 40              | 115            | 5.5        |
| 60              | 128            | 6.0        |

**Question:** "What was the pressure at 40°C?"

**Strategy:** Find row where Temperature = 40, read Pressure column → **115 kPa**

### Identifying Trends in Tables

**Look for:**
- Values increasing consistently
- Values decreasing consistently
- Proportional relationships
- Inverse relationships

**Example:**
In table above:
- As temperature ↑, pressure ↑ (direct relationship)
- As temperature ↑, volume ↑ (direct relationship)

## Interpreting Complex Visuals

### Multi-Line Graphs

**Shows:** Multiple data series on same axes

**Reading strategy:**
1. Check legend (which line is which)
2. Compare lines (do they follow same trend?)
3. Find intersections (where lines cross)
4. Note differences between lines

**Common ACT question:**
"According to the graph, Plant A grew faster than Plant B during which time period?"

**Strategy:** Find where Plant A line is steeper than Plant B line

### Graphs with Multiple Y-Axes

**Sometimes:** Left y-axis measures one variable, right y-axis measures another

**Critical:** Check which line uses which axis!

**Example:**
- Left y-axis: Temperature (°C)
- Right y-axis: Pressure (kPa)
- Blue line uses left axis
- Red line uses right axis

**Don't:** Read blue line values from right axis — wrong units!

### Logarithmic Scales

**What:** Each tick mark represents 10× previous value (not equal intervals)

**Why used:** To show data spanning many orders of magnitude

**Reading strategy:**
- Each step up multiplies by 10
- Distance from 1 to 10 = same as 10 to 100

**ACT tip:** Usually clearly labeled "log scale"

## Common Data Representation Questions

### Type 1: Direct Reading

**"According to Figure 1, what was the pH at 30 minutes?"**

**Strategy:**
1. Find Figure 1
2. Locate x = 30 minutes
3. Read y-value at that point
4. Check units!

**No calculation needed** — just read accurately

### Type 2: Trend Identification

**"Based on the graph, as altitude increased, air pressure:"**

**Choices:**
A. increased only  
B. decreased only  
C. increased then decreased  
D. remained constant

**Strategy:**
1. Look at overall pattern of line/data
2. Left to right: going up, down, or flat?
3. Choose matching description

### Type 3: Comparison

**"Which trial had the highest concentration of Product X?"**

**Strategy:**
1. Find Product X data (could be in table, graph, or chart)
2. Compare all trial values
3. Identify maximum

**Tip:** Fastest approach is visual — find tallest bar, highest point, largest number

### Type 4: Calculation

**"What was the average temperature over the three trials?"**

**Strategy:**
1. Find all three temperature values
2. Add them up
3. Divide by 3

**Note:** These are less common than direct reading questions

### Type 5: Extrapolation

**"If the trend continued, what would the value be at X?"**

**Strategy:**
1. Identify the trend (linear, exponential, etc.)
2. Extend the pattern
3. Estimate value at new point

**Warning:** Only extend slightly beyond data — don't make wild leaps!

## Reading Diagrams

### Experimental Setup Diagrams

**Purpose:** Show how experiment was conducted

**What to identify:**
- Equipment used
- How parts are connected
- What's being measured
- Controls and variables

**ACT questions:**
- "Which equipment measured temperature?" (Find thermometer in diagram)
- "Where was the pressure sensor located?" (Look for sensor)

### Process Diagrams

**Purpose:** Show steps or cycles

**Example:** Water cycle, food web, energy flow

**Reading strategy:**
1. Follow arrows (show direction/flow)
2. Read labels on each step
3. Understand sequence

## Common Mistakes to Avoid

❌ **Misreading axis labels**  
Always check what each axis represents and units used!

❌ **Wrong scale**  
Note if scale is by 1s, 5s, 10s, 100s, etc.

❌ **Confusing lines in multi-line graphs**  
Check legend carefully

❌ **Reading wrong axis on double-axis graphs**  
Match line color/style to correct axis

❌ **Not noticing units**  
10 meters ≠ 10 centimeters!

❌ **Extrapolating too far**  
Don't assume trends continue indefinitely

❌ **Using outside knowledge**  
Answer based on the data shown, not what you think should happen

## Quick Tips for ACT Data Representation

✓ **Read axis labels first** — Know what you're looking at  
✓ **Check units** — Matters for correct answer  
✓ **Use a straight edge** — Helps read graphs accurately  
✓ **Start at the axes** — Trace to find intersection  
✓ **Compare visually** — Often faster than calculating  
✓ **Look for patterns** — Increasing, decreasing, constant  
✓ **Note outliers** — Points that don't fit pattern  
✓ **Read questions carefully** — Looking for max, min, average, range?  
✓ **Use process of elimination** — Rule out obviously wrong choices  
✓ **Don't overthink** — Most answers are direct reading

## Practice Approach

**For Data Representation passages:**

1. **Skim all figures first** (10-15 seconds)
   - How many graphs/tables?
   - What do they show?

2. **Read introduction** (if short)
   - Sets context for data

3. **Go straight to questions**
   - Most can be answered by looking at specific figure

4. **For each question:**
   - Identify which figure has the answer
   - Locate specific data point or trend
   - Read directly from visual
   - Double-check units

5. **Don't read entire passage deeply**
   - Wastes time
   - Questions tell you where to look

**Time-saving tip:** You usually don't need to understand WHY the data looks the way it does — just need to read it accurately!

**Remember:** Data Representation is typically the easiest passage type on ACT Science. These are straightforward reading questions — no complex reasoning required. Master the skill of quickly extracting information from visuals, and you'll breeze through these sections!
`
    }
  });

  console.log('✅ Filled Data Representation in Science\n');

  // ACT Reading: Key Ideas and Details - Natural Science
  await prisma.topic.update({
    where: { slug: 'key-ideas-natural-science' },
    data: {
      textContent: `# Key Ideas and Details - Natural Science (ACT Reading)

## Understanding Natural Science Passages

The ACT Reading section includes one **Natural Science passage** that discusses topics from:
- Biology
- Chemistry
- Physics
- Earth Science
- Astronomy
- Environmental Science
- Geology
- Ecology

**These are NOT science passages** in the traditional sense — they're **reading comprehension** passages about scientific topics.

**You don't need science knowledge!** You need strong reading skills.

## Key Reading Skills

### 1. Identifying Main Ideas

**Main idea** = The central point or purpose of the passage

**Where to find it:**
- Often in first or last paragraph
- Topic sentences of paragraphs
- Repeated concepts throughout

**Question formats:**
- "The main purpose of this passage is to:"
- "The passage as a whole is best described as:"
- "The primary focus of the passage is:"

**Strategy:**
1. Read first and last paragraphs carefully
2. Look for thesis statement or concluding point
3. Eliminate choices that are too narrow (one detail) or too broad (beyond passage scope)
4. Choose option that encompasses whole passage

**Example:**

*Passage discusses how octopuses camouflage, change color, problem-solve, and escape predators.*

**Wrong:** "to explain how octopuses change color" (too narrow — just one detail)  
**Wrong:** "to describe all marine animals" (too broad — passage is only about octopuses)  
**Right:** "to illustrate the remarkable adaptations and intelligence of octopuses"

### 2. Finding Supporting Details

**Supporting details** = Specific facts, examples, or evidence in passage

**Question formats:**
- "According to the passage, X occurs when:"
- "The passage states that Y is caused by:"
- "Which of the following is mentioned as an example of Z?"

**Strategy:**
1. Note key words in question
2. Scan passage for those words (or synonyms)
3. Read surrounding sentences carefully
4. Find exact answer stated in passage

**Don't:** Rely on memory — go back and verify!

**Example question:**
"According to the passage, photosynthesis occurs in which part of the plant cell?"

**Strategy:**
- Scan for "photosynthesis" and "plant cell"
- Read that section
- Find specific answer: "chloroplasts"

### 3. Understanding Sequence

**Sequence** = Order of events, steps in a process, chronological development

**Signal words:**
- First, second, third
- Next, then, finally
- Before, after, during
- Subsequently, previously
- Initially, eventually

**Question formats:**
- "According to the passage, which event occurred first?"
- "The passage indicates that X happens before:"
- "The process described follows which sequence?"

**Strategy:**
1. Create mental timeline or list
2. Note transition words
3. Pay attention to verb tenses
4. Check each step in order

**Example:**

*Passage describes star formation: gas cloud collapses → gravity pulls material together → pressure and temperature increase → nuclear fusion begins*

**Question:** "According to the passage, nuclear fusion begins after:"

**Answer:** "pressure and temperature increase"

### 4. Cause and Effect

**Cause** = Why something happens  
**Effect** = What happens as a result

**Signal words:**
- Because, since, due to → introduce cause
- Therefore, thus, as a result, consequently → introduce effect
- Leads to, causes, produces, results in

**Question formats:**
- "The passage suggests that X is caused by:"
- "According to the passage, Y resulted from:"
- "What was the effect of Z?"

**Strategy:**
1. Identify what's being asked (cause or effect?)
2. Find the relationship in passage
3. Don't confuse direction (A causes B vs. B causes A)

**Example:**

*Passage states: "Rising ocean temperatures cause coral bleaching. When water gets too warm, corals expel their symbiotic algae, turning white."*

**Question:** "According to the passage, coral bleaching is caused by:"

**Answer:** "Rising ocean temperatures" (or "warm water")

### 5. Making Comparisons

**Comparison** = How two or more things are similar or different

**Signal words:**
- **Similarity:** similarly, likewise, also, both, like
- **Difference:** however, unlike, whereas, in contrast, but

**Question formats:**
- "Unlike X, Y is described as:"
- "Both X and Y are characterized by:"
- "The passage indicates that X differs from Y in that:"

**Strategy:**
1. Find both items being compared
2. Read descriptions of each
3. Identify specific similarities or differences
4. Match to answer choices

**Example:**

*"Hurricanes form over warm ocean water, while tornadoes develop in thunderstorms over land."*

**Question:** "Unlike hurricanes, tornadoes:"

**Answer:** "form over land" or "develop in thunderstorms"

## Specific Question Types

### Type 1: Main Idea Questions

**"The main purpose of the passage is to:"**

**How to answer:**
- Read first paragraph (intro)
- Read last paragraph (conclusion)
- Identify overall topic and author's purpose
- Eliminate too-narrow and too-broad choices

**Common purposes:**
- Explain a scientific phenomenon
- Describe a discovery or theory
- Argue for/against a scientific practice
- Trace historical development
- Compare competing theories

### Type 2: Detail Questions

**"According to the passage, [specific fact]..."**

**How to answer:**
- Find key words from question
- Scan passage for those words
- Read 2-3 sentences around the word
- Find answer directly stated
- No inference needed!

**ACT Rule:** Answer must be explicitly stated in passage

### Type 3: Vocabulary in Context

**"As it is used in line 42, the word 'complex' most nearly means:"**

**How to answer:**
- Go to that line
- Read full sentence
- Try each answer choice in place of word
- Choose one that maintains meaning of sentence
- Consider context (scientific vs. everyday meaning)

**Example:**

*"The experiment required a complex apparatus with multiple sensors and controls."*

**Question:** "Complex most nearly means:"

A. Difficult to understand  
B. Complicated in structure  
C. Emotionally troubled  
D. Multi-building facility

**Answer:** B (matches "multiple sensors and controls")

### Type 4: Function Questions

**"The author mentions X in order to:"**

**How to answer:**
- Find where X is mentioned
- Read surrounding context
- Ask: Why did author include this?
- Common purposes: provide evidence, illustrate concept, introduce topic, transition

**Example:**

*"Scientists studied the migration patterns of monarch butterflies, which travel up to 3,000 miles. This remarkable journey..."*

**Question:** "The author mentions the 3,000-mile distance in order to:"

**Answer:** "emphasize the remarkable nature of the journey"

### Type 5: Inference Questions (Careful!)

**"The passage suggests that:" or "It can be reasonably inferred that:"**

**How to answer:**
- Must be supported by passage evidence
- Small logical step from stated facts
- Not wild speculation!
- Still very close to text

**Example:**

*Passage states: "The fossil was found in rock layers dating to 65 million years ago, the same time period when dinosaurs went extinct."*

**Question:** "It can be reasonably inferred that:"

**Reasonable inference:** "The fossil is approximately 65 million years old"

**Too much of a leap:** "The fossil proves dinosaurs went extinct from asteroid impact" (specific cause not mentioned)

## Reading Strategies for Natural Science

### Strategy 1: Active Reading

**Annotate as you read:**
- Underline topic sentences
- Circle key scientific terms
- Note cause-effect relationships
- Mark transitions (however, therefore, etc.)

### Strategy 2: Paragraph Purpose

**After each paragraph, quickly note:**
- What's the main point?
- How does it relate to previous paragraphs?

**Example mental map:**
- Paragraph 1: Introduces plate tectonics theory
- Paragraph 2: Explains how plates move
- Paragraph 3: Describes effects (earthquakes, mountains)
- Paragraph 4: Gives specific examples (Himalayas, San Andreas)

### Strategy 3: Don't Get Lost in Details

**Natural science passages have lots of facts!**

**Don't:** Try to memorize everything  
**Do:** Note where information is located

**You can always go back to find specific details when questions ask for them**

### Strategy 4: Focus on Relationships

**More important than isolated facts:**
- What causes what?
- How are concepts related?
- What's the sequence?
- What contrasts exist?

### Strategy 5: Watch for Author's Purpose

**Ask yourself:**
- Is author explaining something?
- Arguing for/against something?
- Describing a debate?
- Tracing historical development?

**Knowing the purpose helps answer main idea and function questions**

## Common Mistakes

❌ **Using outside science knowledge**  
Answer based only on passage, not what you know from biology class

❌ **Not going back to verify**  
Don't trust your memory — reread relevant section!

❌ **Choosing answers with familiar scientific terms**  
ACT loves to use scientific vocabulary to trick you — make sure it actually matches passage

❌ **Overthinking inference questions**  
If you're making a huge logical leap, probably wrong — stick close to text

❌ **Getting bogged down in technical details**  
Understand general concept, note location of details for later

❌ **Skipping the introduction**  
First paragraph often has main idea and sets context

## Quick Tips

✓ **Read actively** — underline, circle, annotate  
✓ **Note paragraph purposes** — helps with structure questions  
✓ **Go back to passage** — verify every answer  
✓ **Use line references** — they're there to help you!  
✓ **Eliminate wrong answers** — process of elimination works!  
✓ **Watch for extreme language** — "always," "never," "only" often signal wrong answers  
✓ **Trust the passage** — not outside knowledge  
✓ **Read all answer choices** — even if A looks good, D might be better

## Practice Approach

**For Natural Science passages:**

1. **Read the passage (3-4 minutes)**
   - Read actively with annotations
   - Note main idea and structure
   - Don't memorize details

2. **Go to questions (5-6 minutes total)**
   - Read question carefully
   - Identify question type
   - Go back to relevant section
   - Find answer in passage
   - Eliminate wrong choices
   - Choose best answer

3. **Time management:**
   - Aim for ~8-9 minutes total per passage
   - If stuck on question, skip and return
   - Don't let one hard question eat all your time

4. **Check your work:**
   - If time remains, verify answers
   - Make sure you didn't misread question
   - Confirm answer is actually stated

**Remember:** Natural Science passages test **reading comprehension**, not science knowledge. Focus on understanding what the passage says, finding supporting details, and sticking close to the text. Don't overthink — the answer is in the passage!
`
    }
  });

  console.log('✅ Filled Key Ideas and Details - Natural Science\n');

  console.log('🎉 ACT Prep Batch 4 Complete - All 10 remaining topics filled!\n');
  console.log('✅ ACT Prep course now 100% complete: 29/29 topics with comprehensive content');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
