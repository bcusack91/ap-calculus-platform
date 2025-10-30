import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to AP Statistics - Batch 2: Sampling/Experimentation + Probability Start (6 topics)...');

  // Find the topics
  const samplingMethods = await prisma.topic.findFirst({
    where: { slug: 'sampling-methods-stats' }
  });

  const observationalVsExperiments = await prisma.topic.findFirst({
    where: { slug: 'observational-vs-experiments' }
  });

  const experimentalDesign = await prisma.topic.findFirst({
    where: { slug: 'experimental-design' }
  });

  const biasSampling = await prisma.topic.findFirst({
    where: { slug: 'bias-sampling-surveys' }
  });

  const basicProbability = await prisma.topic.findFirst({
    where: { slug: 'basic-probability-rules' }
  });

  const conditionalProbability = await prisma.topic.findFirst({
    where: { slug: 'conditional-probability-stats' }
  });

  if (!samplingMethods || !observationalVsExperiments || !experimentalDesign || 
      !biasSampling || !basicProbability || !conditionalProbability) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Sampling Methods
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: samplingMethods.id,
        question: 'A principal wants to survey 50 students from a high school of 500 students. Describe how to select a simple random sample (SRS).',
        solution: `Step 1: Understand Simple Random Sample (SRS)
Every student must have equal probability of being selected
Every group of 50 students must have equal probability

Step 2: Assign numbers to all students
Number all 500 students from 001 to 500
Use student ID numbers or assign sequentially

Step 3: Use random selection method
Option A: Random number generator
- Generate 50 random numbers between 1 and 500
- No repeats allowed
- Select students with those numbers

Option B: Random number table
- Pick starting point randomly
- Read 3-digit numbers
- Ignore repeats and numbers >500
- Continue until 50 students selected

Option C: Names in hat (physical)
- Not practical for 500, but conceptually valid
- Mix thoroughly, draw 50

Step 4: Verify randomness
Each student has probability 50/500 = 1/10 of being selected
No systematic pattern in selection
No human judgment involved

Answer: Number all 500 students from 001-500. Use a random number generator or table to select 50 unique numbers between 1 and 500. Survey the students corresponding to those numbers.`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: samplingMethods.id,
        question: 'Explain why this is NOT a simple random sample: "To survey students, the principal stands at the main entrance and surveys the first 50 students who arrive at school."',
        solution: `Step 1: Identify the sampling method used
This is a CONVENIENCE sample
Principal selects students who are easy to reach
Based on who arrives first

Step 2: Check SRS requirements
For SRS, every student must have equal probability
For SRS, selection must be random

Step 3: Identify problems with this method

Problem 1: Unequal probabilities
- Students who arrive early: HIGH probability of selection
- Students who arrive late: ZERO probability
- Not all students have equal chance

Problem 2: Systematic bias
- Early arrivers may be different from late arrivers
- Might be more studious, live closer, take bus, etc.
- Different characteristics than general population

Problem 3: Not random
- Order of arrival determines selection
- Predictable pattern
- Could manipulate by arriving early/late

Step 4: Potential biases introduced
Early arrivers might:
- Be more organized/responsible
- Have different transportation
- Live closer to school
- Have different family situations
- Be more/less involved in activities

Results won't represent all students

Answer: This is NOT a simple random sample because not all students have equal probability of selection - only early arrivers can be chosen. It's a convenience sample that likely introduces bias, as early-arriving students may differ systematically from the general student population.`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: samplingMethods.id,
        question: 'A university has 4,000 freshmen, 3,000 sophomores, 2,000 juniors, and 1,000 seniors. Design a stratified random sample of 200 students that maintains class proportions.',
        solution: `Step 1: Calculate total population
Total = 4,000 + 3,000 + 2,000 + 1,000 = 10,000 students

Step 2: Find proportion of each class
Freshmen: 4,000/10,000 = 0.40 = 40%
Sophomores: 3,000/10,000 = 0.30 = 30%
Juniors: 2,000/10,000 = 0.20 = 20%
Seniors: 1,000/10,000 = 0.10 = 10%

Step 3: Apply proportions to sample size
Sample size = 200 students

Freshmen: 200 × 0.40 = 80 students
Sophomores: 200 × 0.30 = 60 students
Juniors: 200 × 0.20 = 40 students
Seniors: 200 × 0.10 = 20 students

Step 4: Verify
80 + 60 + 40 + 20 = 200 ✓
80/200 = 40% ✓
60/200 = 30% ✓
40/200 = 20% ✓
20/200 = 10% ✓

Step 5: How to select within each stratum
From each class, take a simple random sample:
- Randomly select 80 from 4,000 freshmen
- Randomly select 60 from 3,000 sophomores
- Randomly select 40 from 2,000 juniors
- Randomly select 20 from 1,000 seniors

Answer: Select 80 freshmen, 60 sophomores, 40 juniors, and 20 seniors using simple random sampling within each class. This maintains the 40%-30%-20%-10% class distribution.`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: samplingMethods.id,
        question: 'A researcher wants to study student satisfaction across a large university with 30 dorms. She randomly selects 5 dorms and surveys ALL students in those 5 dorms. What sampling method is this? What are the advantages and potential problems?',
        solution: `Step 1: Identify the sampling method
This is CLUSTER SAMPLING
- Population divided into groups (clusters = dorms)
- Randomly select SOME clusters (5 dorms)
- Survey ALL individuals in selected clusters

Step 2: Advantages of cluster sampling

1. Cost-effective
   - Only need to visit 5 dorms, not 30
   - Reduced travel time and expense
   - Easier to administer

2. Practical
   - Complete list of students only needed for selected dorms
   - Don't need list of all students initially
   - Can focus resources on selected areas

3. Logistically simple
   - Survey whole dorms at once
   - Can hold dorm-wide meetings
   - Easier coordination

Step 3: Potential problems

1. Clusters may not be representative
   - Each dorm might have unique characteristics
   - Honors dorm, freshman dorm, quiet dorm, party dorm
   - Selected dorms might not represent all 30

2. Students within dorms are similar
   - Dorm culture affects all residents
   - Same facilities, RAs, rules
   - Reduces variability (not as much info as SRS)

3. Increased sampling error
   - Generally less precise than SRS of same size
   - Need larger sample for same precision
   - Between-cluster variability matters

4. Risk of unlucky selection
   - Could randomly select 5 unusual dorms
   - With only 5 clusters, high risk
   - Should select more clusters if possible

Step 4: When cluster sampling is best
Good when:
- Clusters are heterogeneous (mixed) internally
- Clusters are similar to each other
- Cost/logistics are major concerns

Bad when:
- Clusters are very different from each other
- Students within cluster are very similar
- High precision needed

Answer: Cluster sampling. Advantages: cost-effective, practical, easy logistics. Problems: dorms may differ systematically (honors vs. freshman dorm), students within dorms are similar (less variability), potentially higher sampling error than SRS. Best when cost matters more than precision.`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: samplingMethods.id,
        question: 'Compare stratified random sampling and cluster sampling. When should you use each? Give examples where each would be preferred.',
        solution: `STRATIFIED RANDOM SAMPLING:

How it works:
1. Divide population into homogeneous groups (strata)
2. Take a random sample from EACH stratum
3. Combine samples

Key: Sample from ALL groups, but not everyone in each group

Example strata: grade levels, income brackets, regions

CLUSTER SAMPLING:

How it works:
1. Divide population into groups (clusters)
2. Randomly select SOME clusters
3. Survey ALL (or sample) within selected clusters

Key: Use only SOME groups, but everyone in selected groups

Example clusters: schools, city blocks, dorms

COMPARISON TABLE:

Sample from all groups?
Stratified: YES (every stratum)
Cluster: NO (only selected clusters)

Survey everyone in selected group?
Stratified: NO (random sample)
Cluster: YES (all members)

Within-group similarity:
Stratified: HIGH (homogeneous strata)
Cluster: LOW (heterogeneous clusters)

Between-group differences:
Stratified: HIGH (different strata)
Cluster: LOW (similar clusters)

Precision:
Stratified: HIGHER (ensures representation)
Cluster: LOWER (risk of unrepresentative clusters)

Cost:
Stratified: HIGHER (must visit all strata)
Cluster: LOWER (visit only selected clusters)

WHEN TO USE STRATIFIED:

1. Subgroups are important
   Example: Testing drug on different age groups
   Want to ensure all ages represented

2. Groups differ substantially
   Example: Income study in city with rich and poor areas
   Want proportional representation

3. Precision is priority
   Example: Political polling
   Need accurate estimates for each demographic

4. Have good frame for all strata
   Example: Employee survey with department lists
   Can access each group easily

WHEN TO USE CLUSTER:

1. No natural strata
   Example: Households on city blocks
   Blocks are similar, households within block vary

2. Cost/logistics are major concern
   Example: Door-to-door health survey
   Cheaper to survey whole neighborhoods

3. Complete list unavailable
   Example: All residents in a city
   Can list neighborhoods, but not all people

4. Groups are internally diverse
   Example: Schools in a district (each has mix of students)
   Each school represents population well

REAL EXAMPLES:

Stratified:
- Poll likely voters by party affiliation (Dem, Rep, Ind)
- Medical study ensuring males and females both represented
- University survey with proportional freshmen, soph, junior, senior

Cluster:
- WHO selecting villages in developing country for vaccination study
- Census using city blocks
- Agricultural study selecting random farms, testing all plots on each

Answer: Use stratified when groups differ and you want precise estimates ensuring all groups represented (costs more). Use cluster when groups are similar and cost/logistics matter more (less precise). Stratified samples from all groups; cluster samples all from selected groups.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: samplingMethods.id,
        front: 'What makes a simple random sample (SRS)?',
        back: 'Every individual has an equal probability of selection, AND every group of n individuals has an equal probability. Use random selection (random number generator, table, etc.).',
        hint: 'Equal probability for all',
        isPremium: false
      },
      {
        topicId: samplingMethods.id,
        front: 'What is stratified random sampling?',
        back: 'Divide population into homogeneous groups (strata), then take a random sample from EACH stratum. Ensures all subgroups are represented proportionally.',
        hint: 'Sample from each group',
        isPremium: false
      },
      {
        topicId: samplingMethods.id,
        front: 'What is cluster sampling?',
        back: 'Divide population into groups (clusters), randomly select SOME clusters, then survey ALL (or sample) individuals in the selected clusters. Cost-effective but less precise.',
        hint: 'All from selected groups',
        isPremium: false
      },
      {
        topicId: samplingMethods.id,
        front: 'What is systematic sampling?',
        back: 'Select every kth individual from a list. Example: every 10th person. Simple but risk of bias if there\'s a pattern in the list.',
        hint: 'Every kth individual',
        isPremium: false
      },
      {
        topicId: samplingMethods.id,
        front: 'What is convenience sampling and why is it bad?',
        back: 'Selecting individuals who are easy to reach. BAD because it introduces bias - people who are convenient may differ systematically from the population. Not random.',
        hint: 'Easy to reach, but biased',
        isPremium: false
      },
      {
        topicId: samplingMethods.id,
        front: 'Key difference between stratified and cluster sampling?',
        back: 'Stratified: sample from ALL groups. Cluster: use only SOME groups. Stratified groups are homogeneous; cluster groups are heterogeneous. Stratified more precise; cluster cheaper.',
        hint: 'All groups vs. some groups',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: sampling-methods-stats (now has 5 problems, 6 flashcards)');

  // TOPIC 2: Observational Studies vs Experiments
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: observationalVsExperiments.id,
        question: 'Classify each study as observational or experimental:\na) Researchers randomly assign patients to receive either a new drug or placebo\nb) Scientists measure air pollution levels and asthma rates in different cities\nc) Psychologists observe children\'s behavior in a playground',
        solution: `Step 1: Understand the distinction
Experiment: Researchers IMPOSE treatments on subjects
Observational: Researchers OBSERVE without intervention

Step 2: Analyze each study

a) Patients assigned to drug or placebo
- Researchers IMPOSE treatment (drug vs placebo)
- Random assignment by researchers
- Manipulation of explanatory variable
Classification: EXPERIMENT

b) Measure pollution and asthma rates
- Researchers OBSERVE existing conditions
- No manipulation of pollution levels
- Just measuring what naturally occurs
Classification: OBSERVATIONAL STUDY

c) Observe children's behavior
- Researchers WATCH without interference
- No manipulation of children or environment
- Passive observation
Classification: OBSERVATIONAL STUDY

Answer:
a) Experiment (random assignment to treatments)
b) Observational study (measuring existing conditions)
c) Observational study (passive observation)`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: observationalVsExperiments.id,
        question: 'Can you conclude cause-and-effect from an observational study? Why or why not? Give an example.',
        solution: `Step 1: Direct answer
NO - observational studies generally CANNOT establish causation
Can only show association/correlation

Step 2: Explain why not
The problem: CONFOUNDING VARIABLES
- Other variables might cause both the explanatory and response variable
- Can't distinguish between correlation and causation
- No control over lurking variables

Step 3: Classic example - Ice cream and drowning

Observation: Cities with high ice cream sales have high drowning rates

Possible (wrong) conclusion: Ice cream causes drowning

Reality: CONFOUNDING VARIABLE = Temperature/Summer
- Hot weather → people buy ice cream (association)
- Hot weather → people go swimming → more drownings (causation)
- Ice cream and drowning are correlated but not causal

Step 4: Another example - Coffee and heart disease

Observational finding: Coffee drinkers have higher heart disease rates

Cannot conclude: Coffee causes heart disease

Why? Possible confounders:
- Smoking (coffee drinkers may smoke more)
- Stress (stressed people drink more coffee AND have heart issues)
- Sleep deprivation
- Diet differences

Step 5: When can observational studies suggest causation?

Rarely, with very strong evidence:
- Smoking and lung cancer (overwhelming evidence from many studies)
- Dose-response relationship
- Temporal sequence (cause before effect)
- Biological plausibility
- Consistency across many studies

But still can't PROVE causation without experiment

Answer: NO. Observational studies cannot establish cause-and-effect because of confounding variables. Can only show association. Example: ice cream sales and drowning are associated, but both are caused by hot weather (confounder), not each other. Only randomized experiments can establish causation.`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: observationalVsExperiments.id,
        question: 'Why can randomized experiments establish cause-and-effect while observational studies cannot? Explain the role of random assignment.',
        solution: `Step 1: The key difference
EXPERIMENTS use random assignment
OBSERVATIONAL STUDIES do not

Step 2: What random assignment does

Random assignment means:
- Subjects randomly placed into treatment groups
- Done by researcher, not by choice or natural circumstances
- Creates groups that are similar EXCEPT for the treatment

Magic of randomization:
- Balances known confounders (age, gender, health, etc.)
- Balances UNKNOWN confounders (genetic factors we don't know about)
- Makes groups comparable at the start

Step 3: How this enables causal inference

Before treatment: Groups are essentially equivalent
After treatment: Groups differ
Only difference: The treatment itself
Conclusion: Treatment CAUSED the difference

Step 4: Example - Testing a new drug

EXPERIMENT (can show causation):
1. Take 200 patients with headaches
2. RANDOMLY assign 100 to new drug, 100 to placebo
3. Random assignment balances:
   - Age, gender, severity, stress, diet, genetics, etc.
4. Measure headache improvement
5. If drug group improves more → drug CAUSED improvement

OBSERVATIONAL STUDY (cannot show causation):
1. Let patients CHOOSE whether to take new drug
2. Those who choose drug might differ:
   - More severe headaches (more desperate)
   - More health-conscious
   - Better insurance
   - Different expectations
3. Measure improvement
4. If drug group improves more → could be:
   - The drug works
   - They had different headaches to begin with
   - Placebo effect from expectation
   - Better overall health habits
   Cannot separate these!

Step 5: Mathematical perspective

Observational: Treatment group ≠ Control group (systematically different)
Experimental: Treatment group ≈ Control group (random differences only)

With random assignment: E(confounders | treatment) = E(confounders | control)
Without: E(confounders | treatment) ≠ E(confounders | control)

Answer: Random assignment in experiments creates equivalent groups that differ ONLY in treatment, allowing causal conclusions. Observational studies lack random assignment, so groups may differ in many ways (confounders), making it impossible to determine if the explanatory variable caused the outcome or if confounding variables did.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      },
      {
        topicId: observationalVsExperiments.id,
        question: 'A researcher wants to study whether homework improves test scores. Compare an observational approach vs. an experimental approach. Which would be better for establishing causation?',
        solution: `OBSERVATIONAL APPROACH:

Design:
- Observe students naturally
- Record how much homework they do (voluntary)
- Measure test scores
- Compare scores of high-homework vs low-homework students

Problems:
1. Selection bias
   - Studious students do more homework naturally
   - They might score better anyway (motivated, better study habits)

2. Confounding variables
   - Parental involvement
   - Prior knowledge
   - Intelligence/ability
   - Study skills
   - Time available
   - Teacher quality

3. Reverse causation possible
   - Maybe students who understand material better choose to do more homework
   - Causation could go either way

Cannot conclude: Homework causes better scores (only association)

EXPERIMENTAL APPROACH:

Design:
- Take a class of students
- RANDOMLY assign half to required homework, half to no homework
- Keep everything else the same (same teacher, material, class time)
- Compare test scores

Advantages:
1. Random assignment balances confounders
   - Both groups have similar motivation, ability, backgrounds
   - Differences wash out on average

2. Control over treatment
   - Researcher dictates homework amount
   - Not student choice

3. Can isolate homework effect
   - Only systematic difference between groups is homework
   - If scores differ → homework caused it

CAN conclude: Homework causes score differences

PRACTICAL/ETHICAL CONSIDERATIONS:

Observational:
+ Easier to conduct
+ No ethical issues
+ More realistic (natural behavior)
- Cannot establish causation

Experimental:
+ Can establish causation
- Harder to implement (need cooperation)
- Ethical concern: denying homework to some students
- May not generalize (artificial setting)

BEST APPROACH:

For causation: EXPERIMENTAL is better
Must use random assignment to establish cause-effect

However: Might need to use observational if:
- Experiment is unethical
- Experiment is impractical
- Want to study natural behavior

Could do BOTH:
- Observational to explore relationships
- Experimental to test causation

Answer: EXPERIMENTAL approach is better for establishing causation. Random assignment of students to homework vs. no-homework groups controls for confounding variables, allowing causal conclusions. Observational approach only shows association because studious students might naturally do more homework AND score better for other reasons (confounders).`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: observationalVsExperiments.id,
        question: 'True or False: "If an observational study finds a strong association between two variables, you can conclude one causes the other." Explain your answer.',
        solution: `Step 1: Answer
FALSE - absolutely FALSE

Step 2: Why this is false
Association ≠ Causation
Correlation ≠ Causation
Strong association does NOT imply cause-and-effect

Step 3: The three possible explanations for association

When X and Y are associated, three possibilities:

1. X causes Y (what we might want to conclude)
2. Y causes X (reverse causation)
3. Z causes both X and Y (confounding)

Without an experiment, cannot distinguish between these!

Step 4: Famous examples

Example 1: Shoe size and reading ability in children
- Strong positive association
- Larger shoes → better reading
- Does shoe size CAUSE reading ability? NO!
- Confounder: AGE (older kids have bigger feet AND read better)

Example 2: Number of firefighters and fire damage
- Strong positive association  
- More firefighters → more damage
- Do firefighters CAUSE damage? NO!
- Confounder: FIRE SIZE (bigger fires draw more firefighters AND cause more damage)

Example 3: Chocolate consumption and Nobel Prizes (real published finding!)
- Countries that eat more chocolate have more Nobel laureates per capita
- Does chocolate make you smarter? Probably not!
- Confounders: Wealth, education systems, culture

Step 5: What you CAN conclude from observational studies

Can conclude:
✓ Variables are associated/correlated
✓ Variables move together
✓ Knowing one helps predict the other
✓ There's a relationship worth investigating

Cannot conclude:
✗ One causes the other
✗ Changing one will change the other
✗ The relationship is causal

Step 6: How to establish causation

ONLY through:
- Randomized controlled experiments
- Or very strong evidence from multiple observational studies with:
  * Temporal sequence (cause before effect)
  * Dose-response relationship
  * Biological plausibility
  * Consistency across studies
  * No plausible confounders

Answer: FALSE. Strong association from observational studies does NOT prove causation. Confounding variables could cause both variables, or reverse causation could occur. Example: shoe size and reading ability are strongly associated, but age is the confounder - older children have bigger feet AND read better. Only randomized experiments can establish cause-and-effect.`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: observationalVsExperiments.id,
        front: 'What is an observational study?',
        back: 'A study where researchers observe and measure variables without imposing treatments. Can show association but NOT causation due to confounding variables.',
        hint: 'Observe, don\'t impose',
        isPremium: false
      },
      {
        topicId: observationalVsExperiments.id,
        front: 'What is an experiment?',
        back: 'A study where researchers impose treatments on subjects and observe responses. Random assignment allows cause-and-effect conclusions.',
        hint: 'Impose treatments, can show causation',
        isPremium: false
      },
      {
        topicId: observationalVsExperiments.id,
        front: 'What is a confounding variable?',
        back: 'A variable that influences both the explanatory and response variables, making it hard to determine causation. Confounders create spurious associations.',
        hint: 'Affects both variables, creates false association',
        isPremium: false
      },
      {
        topicId: observationalVsExperiments.id,
        front: 'Why does random assignment allow causal conclusions?',
        back: 'Random assignment creates groups that are equivalent except for treatment, balancing both known and unknown confounders. Any difference in outcomes must be due to the treatment.',
        hint: 'Makes groups equivalent, isolates treatment effect',
        isPremium: false
      },
      {
        topicId: observationalVsExperiments.id,
        front: 'What does "correlation does not imply causation" mean?',
        back: 'Just because two variables are associated doesn\'t mean one causes the other. Could be confounding variables or reverse causation. Need experiments for causation.',
        hint: 'Association ≠ causation',
        isPremium: false
      },
      {
        topicId: observationalVsExperiments.id,
        front: 'When would you use an observational study instead of an experiment?',
        back: 'When experiment is unethical (can\'t force smoking), impractical (can\'t control long-term behavior), or you want to study natural behavior without intervention.',
        hint: 'Ethics, practicality, natural behavior',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: observational-vs-experiments (now has 5 problems, 6 flashcards)');

  // TOPIC 3: Experimental Design
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: experimentalDesign.id,
        question: 'Define these key terms in experimental design:\na) Treatment\nb) Control group\nc) Placebo\nd) Blinding',
        solution: `a) TREATMENT:
The specific condition imposed on experimental units
What the researcher manipulates
Example: Drug dose, teaching method, fertilizer amount

b) CONTROL GROUP:
Group that receives no treatment or standard treatment
Used as a baseline for comparison
Example: Patients receiving placebo instead of new drug

Purpose: Isolate the treatment effect
Without control, can't tell if improvement is from treatment or other factors

c) PLACEBO:
An inactive or fake treatment that appears identical to real treatment
Example: Sugar pill that looks like medicine
Purpose: Control for placebo effect (psychological response to receiving treatment)

d) BLINDING:
Single-blind: Subjects don't know which treatment they receive
Double-blind: Neither subjects nor evaluators know who gets which treatment

Purpose: Prevent bias
- Subjects' expectations can affect results (placebo effect)
- Evaluators' knowledge can influence measurements (unconscious bias)

Answer: Treatment = imposed condition. Control = comparison group with no/standard treatment. Placebo = fake treatment to control psychological effects. Blinding = hiding treatment assignments to prevent bias.`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: experimentalDesign.id,
        question: 'Why is it important to use a double-blind design in medical experiments?',
        solution: `Step 1: Understand double-blind
Neither patients NOR doctors/evaluators know who gets which treatment
Only researchers keeping records know

Step 2: Problem if patients know (not blind to patients)

Placebo Effect:
- Patients who know they're getting real drug may feel better due to expectations
- Patients who know they're getting placebo may not improve psychologically
- Beliefs affect symptoms, especially pain, mood, fatigue

Example:
- Patient knows they got "new wonder drug" → feels better even if drug doesn't work
- Patient knows they got placebo → doesn't improve even if they would have

Step 3: Problem if doctors know (not blind to evaluators)

Evaluation Bias:
- Doctors may unconsciously rate patients differently based on expectations
- May be more thorough examining drug group
- Subjective measures (pain levels, wellness) especially vulnerable

Example:
- Doctor knows patient got real drug → sees "improvement" that isn't there
- Doctor asks leading questions: "Feeling better now?"
- More likely to attribute positive changes to the drug

Step 4: Why DOUBLE-blind is necessary

Prevents bias from BOTH sources:
- Patients can't have placebo effect based on knowledge
- Doctors can't have evaluation bias
- Results reflect actual drug efficacy

Step 5: Real-world example

Testing depression medication:

NOT double-blind problems:
- Patients on real drug expect improvement → feel better (placebo)
- Doctors know who got drug → see improvement where there isn't any
- Results: Drug appears effective even if it's not

Double-blind benefits:
- Patients don't know → placebo effect equal in both groups
- Doctors don't know → evaluate objectively
- Results: True drug effect isolated

Answer: Double-blind prevents BOTH placebo effects (patients' expectations affecting outcomes) AND evaluation bias (doctors' unconsciously biased assessments). Essential for objective measurement of actual treatment effects, especially for subjective outcomes like pain or mood.`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: experimentalDesign.id,
        question: 'Design a completely randomized experiment to test whether a new fertilizer increases tomato yield. Include all key components.',
        solution: `Step 1: State the research question
Does new fertilizer increase tomato yield compared to standard fertilizer?

Step 2: Identify variables
Explanatory variable: Type of fertilizer (new vs. standard)
Response variable: Tomato yield (measured in kg per plant)

Step 3: Select experimental units
60 tomato plants (similar age, variety, size)
All in similar conditions initially

Step 4: Design treatments
Treatment 1: New fertilizer (at recommended dose)
Treatment 2: Standard fertilizer (control group)

Could also add Treatment 3: No fertilizer (pure control)

Step 5: Random assignment (CRUCIAL)
- Number plants 1-60
- Use random number generator to assign:
  * 30 plants to new fertilizer
  * 30 plants to standard fertilizer
- Random assignment balances confounders:
  * Soil quality, sunlight, initial plant health, etc.

Step 6: Apply treatments
- Give each plant assigned fertilizer
- Apply at same time, same frequency
- Keep all other factors constant:
  * Same watering schedule
  * Same amount of sunlight
  * Same temperature
  * Same soil type

Step 7: Control for confounding
Hold constant:
- Water amount and frequency
- Sunlight exposure
- Temperature
- Plant variety
- Pot size
- Growing period length

Step 8: Blinding (if possible)
- Person measuring yield shouldn't know which plant got which fertilizer
- Prevents measurement bias
- Code plants by number, not fertilizer type

Step 9: Collect data
- Grow plants for fixed period (e.g., 90 days)
- Harvest all tomatoes
- Weigh yield for each plant
- Record systematically

Step 10: Analyze results
- Compare average yield: new fertilizer vs. standard
- Use statistical test (t-test) to determine if difference is significant
- Check if difference is practically meaningful

Complete Experimental Design:

Subjects: 60 tomato plants
Treatments: New fertilizer (30 plants) vs. Standard fertilizer (30 plants)
Random Assignment: Use random number generator
Control: Keep water, sunlight, temperature, variety constant
Blinding: Yield measurer doesn't know treatment groups
Response: Tomato yield in kg per plant
Analysis: Compare mean yields using t-test

Answer: Randomly assign 60 similar tomato plants to new fertilizer (n=30) or standard fertilizer (n=30). Keep all other conditions constant (water, sunlight, etc.). Measure yield after growing period. Blind the measurer. Compare average yields statistically. Random assignment is key to establishing causation.`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: experimentalDesign.id,
        question: 'What is blocking in experimental design? When should you use it? Design a blocked experiment to test two teaching methods on student test scores.',
        solution: `Step 1: What is blocking?

Blocking: Grouping experimental units by a characteristic BEFORE randomly assigning treatments
- Create homogeneous groups (blocks)
- Random assignment WITHIN each block
- Reduces variability

Step 2: When to use blocking

Use blocking when:
- Known source of variability exists
- Want to control for a confounding variable
- Units naturally fall into groups
- Variable affects response but isn't of primary interest

Common blocking variables:
- Gender, age, ability level, location, time

Step 3: Design a blocked experiment for teaching methods

Research Question: Does Method A or Method B produce better test scores?

Problem: Students have different ability levels
- High-ability students will score well regardless of method
- Low-ability students will score poorly regardless
- Ability is a confounding variable

Blocked Design:

Block 1: High-ability students (based on GPA or pretest)
- 20 students identified as high-ability
- RANDOMLY assign 10 to Method A, 10 to Method B

Block 2: Medium-ability students
- 30 students identified as medium-ability
- RANDOMLY assign 15 to Method A, 15 to Method B

Block 3: Low-ability students
- 20 students identified as low-ability
- RANDOMLY assign 10 to Method A, 10 to Method B

Key points:
✓ Random assignment WITHIN each block
✓ Ensures each method gets similar mix of abilities
✓ Controls for ability level
✓ More precise comparison

Step 4: Why this is better than completely randomized

Completely Randomized Design:
- Might randomly put more high-ability students in one group
- Ability confounds with teaching method
- Less precise results

Blocked Design:
- Ensures balanced ability levels in both methods
- Removes variability due to ability
- More precise estimate of method effect
- Can also analyze if method works differently for different abilities

Step 5: Analysis

Compare:
- Method A vs Method B within each block
- Overall: combine results across blocks
- Can also check if one method works better for certain ability levels

Step 6: Complete Design Summary

Blocks: 3 ability levels (high, medium, low)
Treatments: Teaching Method A vs. Method B
Random Assignment: Within each block
Response: Test score after instruction
Control: Same material, time, test

Benefits:
- Controls for ability
- More precise comparison
- Smaller residual variability
- Can detect smaller effects

Answer: Blocking groups experimental units by a characteristic (e.g., ability) before randomly assigning treatments within each block. Use when a known source of variability exists. Example: Block students by ability level (high/medium/low), then randomly assign half in each block to Method A and half to Method B. This controls for ability and gives more precise comparisons than completely randomized design.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      },
      {
        topicId: experimentalDesign.id,
        question: 'What is replication in experimental design? Why is it important? How is it different from just having a large sample size?',
        solution: `Step 1: Define replication

Replication: Applying each treatment to multiple experimental units
- Not just measuring once
- Multiple subjects get each treatment
- Allows assessment of variability

Example: Testing drug on 100 patients (not just 1)

Step 2: Why replication is important

1. Assess Variability
   - People respond differently to same treatment
   - Need multiple subjects to see typical response
   - One person could be unusual

2. Enable Statistical Inference
   - Can calculate standard errors
   - Can do hypothesis tests
   - Can determine if differences are "real" or random

3. Increase Reliability
   - Reduce impact of unusual individuals
   - Average response is more stable
   - Results more trustworthy

4. Generalizability
   - Shows treatment works on multiple people
   - Not just one lucky/unlucky case

Step 3: Example: Why you need replication

BAD Design (no replication):
- Give Drug A to 1 patient
- Give Drug B to 1 patient
- Compare outcomes

Problem: Can't tell if difference is due to:
- The drugs actually differing
- Individual variability
- Luck

GOOD Design (with replication):
- Give Drug A to 50 patients
- Give Drug B to 50 patients
- Compare average outcomes

Benefit: Can determine if difference is real or random variation

Step 4: Replication vs. Large Sample Size

Related but DIFFERENT concepts:

Large Sample Size:
- Many subjects total
- Improves precision of estimates
- Reduces sampling error

Replication:
- Multiple subjects PER TREATMENT
- Allows comparison between treatments
- Enables statistical testing

Can have large sample without good replication:
- 100 subjects, but 99 get Treatment A and 1 gets Treatment B
- Large sample, but poor replication in Treatment B
- Can't make good comparison

Need: Large sample AND good replication
- Many subjects per treatment group
- Balanced design

Step 5: Types of replication

True Replication:
- Different subjects get same treatment
- Most common in statistics

Repeated Measurements (pseudoreplication):
- Same subject measured multiple times
- Less valuable (measurements correlated)
- Example: Measuring same patient 10 times vs. 10 patients once

Step 6: Practical example

Testing if coffee improves test scores:

Poor design (n=2, no real replication):
- Person A: drinks coffee, takes test once
- Person B: no coffee, takes test once
- Can't conclude anything!

Better design (replication):
- 50 people: coffee
- 50 people: no coffee
- Each takes test once
- Can compare averages, run t-test

Even Better (blocking + replication):
- Block by study habits
- Random assignment within blocks
- Multiple people per treatment per block

Answer: Replication means multiple experimental units receive each treatment. Important because it: (1) allows assessment of variability, (2) enables statistical inference, (3) increases reliability. Different from large sample size - you can have many subjects but poor replication if treatments aren't balanced. Need multiple subjects PER treatment to make valid comparisons.`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: experimentalDesign.id,
        front: 'What are the three principles of experimental design?',
        back: '1) Random Assignment (creates comparable groups), 2) Control (hold other variables constant), 3) Replication (multiple subjects per treatment). These enable causal conclusions.',
        hint: 'Random assignment, control, replication',
        isPremium: false
      },
      {
        topicId: experimentalDesign.id,
        front: 'What is a completely randomized design?',
        back: 'All experimental units are randomly assigned to treatments with no restrictions. Simplest design. Good when units are homogeneous.',
        hint: 'Random assignment to all treatments',
        isPremium: false
      },
      {
        topicId: experimentalDesign.id,
        front: 'What is blocking in experimental design?',
        back: 'Grouping experimental units by a characteristic before random assignment. Random assignment happens WITHIN each block. Reduces variability and increases precision.',
        hint: 'Group then randomize within groups',
        isPremium: false
      },
      {
        topicId: experimentalDesign.id,
        front: 'What is the difference between single-blind and double-blind?',
        back: 'Single-blind: subjects don\'t know their treatment. Double-blind: neither subjects nor evaluators know. Double-blind prevents both placebo effects and evaluation bias.',
        hint: 'Who doesn\'t know: subjects vs. subjects and evaluators',
        isPremium: false
      },
      {
        topicId: experimentalDesign.id,
        front: 'What is a placebo and why use it?',
        back: 'An inactive treatment that appears identical to the real treatment. Controls for placebo effect - the psychological response to receiving treatment. Ensures differences are due to treatment, not expectations.',
        hint: 'Fake treatment, controls expectations',
        isPremium: false
      },
      {
        topicId: experimentalDesign.id,
        front: 'What is replication and why is it essential?',
        back: 'Applying each treatment to multiple experimental units. Essential for: assessing variability, enabling statistical tests, increasing reliability, and allowing generalization beyond single cases.',
        hint: 'Multiple units per treatment',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: experimental-design (now has 5 problems, 6 flashcards)');

  // TOPIC 4: Bias in Sampling and Surveys
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: biasSampling.id,
        question: 'Identify the type of bias in each scenario:\na) A phone survey calls only landlines during business hours\nb) A survey asks: "Don\'t you agree that the mayor is doing a terrible job?"\nc) People with strong opinions are more likely to respond to an online poll',
        solution: `Step 1: Identify bias types
- Undercoverage bias
- Response bias (includes question wording, social desirability)
- Nonresponse bias
- Voluntary response bias

Step 2: Analyze scenario (a)

Phone survey: landlines during business hours

Problem: Systematically excludes certain groups
- Young people (mostly use cell phones)
- Working people (not home during business hours)
- Lower income (may not have landlines)

Type: UNDERCOVERAGE BIAS
- Some groups in population have no chance of selection
- Sample not representative

Step 3: Analyze scenario (b)

Question: "Don't you agree the mayor is doing a terrible job?"

Problems:
- Leading/loaded question
- Suggests a "correct" answer
- Uses negative language ("terrible")
- Pressures respondent

Type: RESPONSE BIAS (Question Wording Bias)
- Question influences how people answer
- Doesn't measure true opinions

Step 4: Analyze scenario (c)

Online poll: strong opinions more likely to respond

Problem:
- People with extreme views participate more
- Moderate people skip it
- Not representative of population opinions

Type: VOLUNTARY RESPONSE BIAS (also called self-selection bias)
- Respondents choose to participate
- Those who respond differ from those who don't
- Overrepresents extreme views

Answer:
a) Undercoverage bias (excludes cell phone users and working people)
b) Response bias - question wording (leading question)
c) Voluntary response bias (self-selection of strong opinions)`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: biasSampling.id,
        question: 'A college sends an email survey to all 5,000 students about campus dining. Only 200 students respond, and 80% are dissatisfied. Can the college conclude that 80% of all students are dissatisfied? Why or why not?',
        solution: `Step 1: Identify the issue
Response rate: 200/5,000 = 4% (very low!)
Result: 80% dissatisfied

Step 2: The problem - Nonresponse Bias

Who responds to surveys?
- People with strong opinions
- People who are dissatisfied (more motivated)
- People who care deeply about the issue

Who doesn't respond?
- People who are satisfied (no complaints)
- People who are indifferent
- Busy people
- People who don't check email

Step 3: Why 80% is likely biased upward

Those who responded (200 students):
- Probably have complaints about dining
- Motivated by dissatisfaction
- Not representative of all 5,000

Those who didn't respond (4,800 students):
- Might be satisfied (no reason to complain)
- Might be neutral
- Don't care enough to respond

Result: Sample overrepresents dissatisfied students

Step 4: Cannot conclude 80% of all students dissatisfied

The 80% reflects:
- 80% of the 200 who chose to respond
- NOT 80% of all 5,000 students

True dissatisfaction rate unknown:
- Could be much lower
- Satisfied students less likely to respond
- Voluntary response bias

Step 5: Better survey design

To get accurate result:
1. Use random sample of students
2. Follow up with non-respondents
3. Offer incentives for participation
4. Make survey easy and quick
5. Use multiple contact methods
6. Aim for high response rate (>60-70%)

Step 6: Calculate scenario

Possible reality:
- 200 respondents: 160 dissatisfied (80%)
- 4,800 non-respondents: 960 dissatisfied (20%)
- Total: 1,120 / 5,000 = 22.4% actually dissatisfied

The 80% would be very misleading!

Answer: NO, cannot conclude 80% of all students are dissatisfied. Only 4% responded (200/5,000), creating severe nonresponse bias. Dissatisfied students are more motivated to respond, so the 80% likely overestimates true dissatisfaction. The 80% applies only to those who chose to respond, not to all students.`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: biasSampling.id,
        question: 'Compare these two survey questions about tax policy:\nQuestion A: "Should taxes be increased to fund essential public services like schools and hospitals?"\nQuestion B: "Should the government take more of your hard-earned money in taxes?"\nHow might each question bias responses? What would be a more neutral wording?',
        solution: `Step 1: Analyze Question A

"Should taxes be increased to fund essential public services like schools and hospitals?"

Bias: Toward YES (supporting tax increase)

Why it's biased:
- Uses positive framing: "essential public services"
- Mentions sympathetic examples: "schools and hospitals"
- Implies taxes are necessary for good things
- No mention of downsides

How it influences:
- People don't want to oppose schools and hospitals
- Feels wrong to say no to "essential" services
- Guilt/social pressure to agree

Expected result: Overestimates support for tax increase

Step 2: Analyze Question B

"Should the government take more of your hard-earned money in taxes?"

Bias: Toward NO (opposing tax increase)

Why it's biased:
- Uses negative framing: "take" (implies theft)
- Emotional language: "your hard-earned money"
- Suggests government is taking what's yours
- No mention of benefits

How it influences:
- People resist having money "taken"
- "Hard-earned" makes it personal
- Government sounds greedy/unfair

Expected result: Overestimates opposition to tax increase

Step 3: Compare the two

Same policy question, opposite biases:
- Question A: Likely 60-70% support
- Question B: Likely 30-40% support
- Same people, different wording!

This shows power of question wording

Step 4: Neutral wording options

Option 1 (Simple):
"Do you support or oppose increasing taxes?"

Pro: Very neutral
Con: Might not give enough context

Option 2 (Balanced):
"Do you support or oppose increasing taxes? Revenue would fund public services, but your take-home pay would decrease."

Pro: Mentions both sides
Con: Which to mention first?

Option 3 (Best):
"Do you support increasing taxes, oppose increasing taxes, or are you unsure?"

Pro: Neutral language, includes middle option
Allows "no opinion" response

Option 4 (Even better - two questions):
Q1: "What is your opinion on the current tax level: too high, about right, or too low?"
Q2: "If taxes changed, which public services would you prioritize/cut?"

Separates questions, avoids loaded language

Step 5: General principles for neutral questions

DO:
✓ Use neutral language
✓ Avoid emotional words
✓ Present both sides if context needed
✓ Allow "unsure" option
✓ Keep it simple and clear

DON'T:
✗ Use loaded words ("take," "hard-earned," "essential")
✗ Suggest a correct answer
✗ Use only positive or negative framing
✗ Make assumptions
✗ Use double-barreled questions

Answer: Question A biases toward YES (positive framing: "essential services," "schools and hospitals"). Question B biases toward NO (negative framing: "take your hard-earned money"). Both are leading questions that will produce different results. Neutral wording: "Do you support or oppose increasing taxes?" - simple, balanced, no emotional language.`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: biasSampling.id,
        question: 'What is undercoverage bias? Give three examples and explain how it affects survey results.',
        solution: `Step 1: Define undercoverage bias

Undercoverage: When some groups in the population have NO CHANCE or LOWER CHANCE of being in the sample

Result: Sample systematically unrepresentative
Missing perspectives from excluded groups

Step 2: Example 1 - Literary Digest Poll 1936

Historical disaster:
- Magazine surveyed people from phone books and car registration lists
- Predicted Landon would beat Roosevelt for president
- Roosevelt won in landslide!

What went wrong:
- 1936: Only wealthy people had phones and cars
- Survey undercovered poor and middle-class voters
- These groups voted differently than wealthy
- Sample was systematically biased

Impact: Completely wrong prediction

Step 3: Example 2 - Online surveys about internet usage

Survey: "Complete this online survey about your internet habits"

Problem:
- Must have internet access to take survey
- Undercoverage: People without internet excluded
- These people have different internet habits (none!)

Impact on results:
- Overestimates internet usage
- Misses perspectives of disconnected populations
- Can't generalize to whole population

Who's excluded:
- Elderly without computers
- Poor without internet access
- Rural areas with limited connectivity

Step 4: Example 3 - Workplace satisfaction survey (business hours only)

Survey: Call employees during 9am-5pm

Problem:
- Misses night shift workers
- Misses part-time workers
- Misses field workers who aren't at desk

Impact:
- Night shift may have different satisfaction
- Part-timers may have different concerns
- Office-only perspective

Result: Biased view of employee satisfaction

Step 5: How undercoverage affects results

Systematically excludes groups → Biased estimates

Example effects:
- Missing young people → overestimate conservative views
- Missing poor people → underestimate financial struggles
- Missing minorities → miss diverse perspectives
- Missing rural people → urban-biased results

The direction of bias depends on how excluded groups differ

Step 6: Preventing undercoverage

Strategies:
1. Use comprehensive sampling frame
   - Lists that include whole population
   - Multiple lists if needed

2. Use multiple contact methods
   - Phone, email, mail, in-person
   - Reach different groups different ways

3. Stratified sampling
   - Ensure all subgroups included
   - Sample from each stratum

4. Adjust for known undercoverage
   - Weight responses to match population
   - Statistical correction (imperfect)

5. Know your sampling frame limitations
   - Be aware who's excluded
   - State limitations in conclusions

Answer: Undercoverage occurs when some population groups have no/low chance of selection. Examples: (1) 1936 Literary Digest used phone books, excluding poor voters who voted differently; (2) Online surveys exclude those without internet; (3) Daytime-only calls miss night shift workers. Effect: Sample systematically unrepresentative, leading to biased estimates that don't reflect the full population.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      },
      {
        topicId: biasSampling.id,
        question: 'A survey finds that 90% of people believe they are better than average drivers. What type of bias might explain this result?',
        solution: `Step 1: Identify the paradox
90% think they're better than average
Mathematically impossible: Only 50% can be above average
So what's going on?

Step 2: Type of bias - Social Desirability Bias

Definition: People answer in ways that make them look good
- Want to present themselves positively
- Don't want to admit flaws
- Especially for socially valued traits

Step 3: Why driving ability triggers this bias

Good driving is socially valued:
- Nobody wants to admit being bad driver
- Being good driver = responsible, skilled, careful
- Admitting you're below average = admitting you're dangerous

Psychological factors:
- Self-serving bias (we view ourselves positively)
- Selective memory (remember our good driving, forget mistakes)
- Different standards (we judge ourselves by intentions, others by actions)

Step 4: How this manifests in surveys

What people think: "I'm a careful, skilled driver"
What they say: "Better than average"

Even bad drivers think:
- "I'm careful" (even if slow)
- "Others are reckless" (go too fast)
- "I've never had accident" (been lucky)

Step 5: Other examples of social desirability bias

People overreport:
- Voting ("Did you vote?") - people say yes even if they didn't
- Charity donations - claim to donate more
- Exercise - claim to exercise more
- Healthy eating - claim better diet
- Reading - claim to read more books

People underreport:
- Illegal behavior
- Embarrassing habits
- Socially undesirable opinions
- Income (if seen as bragging)

Step 6: How to reduce social desirability bias

Strategies:
1. Anonymous surveys
   - No judgment possible
   - More honest responses

2. Indirect questioning
   - "How many of your friends..."
   - Less personal threat

3. Randomized response technique
   - Statistical method ensuring privacy
   - Can't identify individual responses

4. Behavioral measures instead of self-report
   - Observe actual behavior
   - Don't rely on what people say

5. Validate against objective data
   - Check survey responses against records
   - Driving: check actual accident rates

Step 7: The driving example specifically

Better measures than self-report:
- Actual accident rates
- Traffic violations
- Driving test scores
- Insurance company data

These would give more accurate picture than survey

Answer: Social desirability bias - people answer in ways that make them look good. Nobody wants to admit being a below-average driver, so people systematically overestimate their abilities. This psychological bias leads to impossible result (90% can't be above average). Common for socially valued traits like driving skill, voting, charity, healthy behavior.`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: biasSampling.id,
        front: 'What is undercoverage bias?',
        back: 'When some groups in the population have no chance or reduced chance of being selected. Sample systematically excludes certain groups, making it unrepresentative.',
        hint: 'Some groups excluded from sampling frame',
        isPremium: false
      },
      {
        topicId: biasSampling.id,
        front: 'What is nonresponse bias?',
        back: 'When people selected for sample don\'t respond, and non-respondents differ from respondents. Low response rates amplify this bias. Those who respond may have stronger opinions.',
        hint: 'Selected but don\'t respond',
        isPremium: false
      },
      {
        topicId: biasSampling.id,
        front: 'What is response bias?',
        back: 'When the method of asking questions influences answers. Includes: leading questions, question wording, question order, interviewer effects, and social desirability bias.',
        hint: 'How questions are asked affects answers',
        isPremium: false
      },
      {
        topicId: biasSampling.id,
        front: 'What is voluntary response bias?',
        back: 'When people choose whether to participate (self-selection). Those with strong opinions more likely to respond. Overrepresents extreme views. Common in online polls and call-in surveys.',
        hint: 'Self-selection, extreme views overrepresented',
        isPremium: false
      },
      {
        topicId: biasSampling.id,
        front: 'What is social desirability bias?',
        back: 'When people answer in ways that make them look good rather than truthfully. Overreport good behaviors (voting, exercise), underreport bad behaviors (illegal activities).',
        hint: 'Want to look good, not truthful',
        isPremium: false
      },
      {
        topicId: biasSampling.id,
        front: 'Can you fix bias after data collection?',
        back: 'NO! Cannot use statistics to fix bias after the fact. Biased data → biased results. Must prevent bias through proper design: random sampling, good questions, high response rates.',
        hint: 'Must prevent, can\'t fix later',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: bias-sampling-surveys (now has 5 problems, 6 flashcards)');

  // TOPIC 5: Basic Probability Rules
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: basicProbability.id,
        question: 'A bag contains 5 red marbles, 3 blue marbles, and 2 green marbles. What is the probability of drawing:\na) A red marble?\nb) A blue or green marble?\nc) Not a red marble?',
        solution: `Step 1: Count total outcomes
Total marbles = 5 + 3 + 2 = 10

Step 2: Calculate P(red marble)
Favorable outcomes = 5 red marbles
P(Red) = 5/10 = 1/2 = 0.5 or 50%

Step 3: Calculate P(blue or green)
Method 1 - Addition Rule:
P(Blue or Green) = P(Blue) + P(Green)
                 = 3/10 + 2/10
                 = 5/10 = 1/2 = 0.5

Method 2 - Count directly:
Blue or green marbles = 3 + 2 = 5
P(Blue or Green) = 5/10 = 1/2

Step 4: Calculate P(not red)
Method 1 - Complement Rule:
P(Not Red) = 1 - P(Red)
           = 1 - 5/10
           = 5/10 = 1/2

Method 2 - Count directly:
Not red = blue + green = 3 + 2 = 5
P(Not Red) = 5/10 = 1/2

Answer:
a) P(Red) = 1/2 or 0.5
b) P(Blue or Green) = 1/2 or 0.5
c) P(Not Red) = 1/2 or 0.5`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: basicProbability.id,
        question: 'In a class of 30 students, 18 play sports and 12 play an instrument. If 5 students do both, what is the probability that a randomly selected student:\na) Plays sports OR an instrument?\nb) Plays neither?',
        solution: `Step 1: Organize the information using Venn diagram
Total students = 30
Play sports (S) = 18
Play instrument (I) = 12
Both (S AND I) = 5

Step 2: Find students in each region
Only sports = 18 - 5 = 13
Only instrument = 12 - 5 = 8
Both = 5
Neither = 30 - (13 + 5 + 8) = 30 - 26 = 4

Step 3: Calculate P(Sports OR Instrument)
Using Addition Rule for overlapping events:
P(S OR I) = P(S) + P(I) - P(S AND I)
          = 18/30 + 12/30 - 5/30
          = (18 + 12 - 5)/30
          = 25/30
          = 5/6 ≈ 0.833

Or count directly: 13 + 5 + 8 = 26
P(S OR I) = 26/30 = 13/15 ≈ 0.867

Wait, let me recalculate:
Only sports = 13
Both = 5  
Only instrument = 8
Total in S OR I = 13 + 5 + 8 = 26

P(S OR I) = 26/30 = 13/15

Step 4: Calculate P(Neither)
Method 1 - Complement:
P(Neither) = 1 - P(S OR I)
           = 1 - 26/30
           = 4/30 = 2/15 ≈ 0.133

Method 2 - Count directly:
Neither = 4 students
P(Neither) = 4/30 = 2/15

Answer:
a) P(Sports OR Instrument) = 26/30 = 13/15 ≈ 0.867 or 86.7%
b) P(Neither) = 4/30 = 2/15 ≈ 0.133 or 13.3%`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: basicProbability.id,
        question: 'Roll two fair dice. What is the probability that the sum is 7 or 11?',
        solution: `Step 1: Find total possible outcomes
Each die: 6 outcomes
Two dice: 6 × 6 = 36 total outcomes

Step 2: Find outcomes where sum = 7
List all combinations:
(1,6): 1 + 6 = 7
(2,5): 2 + 5 = 7
(3,4): 3 + 4 = 7
(4,3): 4 + 3 = 7
(5,2): 5 + 2 = 7
(6,1): 6 + 1 = 7

Count: 6 ways to get sum of 7

Step 3: Find outcomes where sum = 11
(5,6): 5 + 6 = 11
(6,5): 6 + 5 = 11

Count: 2 ways to get sum of 11

Step 4: Find P(sum is 7 OR 11)
Events are mutually exclusive (can't get both 7 AND 11)
Use Addition Rule:
P(7 OR 11) = P(7) + P(11)
           = 6/36 + 2/36
           = 8/36
           = 2/9 ≈ 0.222

Answer: P(sum is 7 or 11) = 8/36 = 2/9 ≈ 0.222 or 22.2%`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: basicProbability.id,
        question: 'At a school, 60% of students are in band, 50% are in chorus, and 30% are in both. If a student is selected at random, what is the probability they are in band or chorus? Draw a Venn diagram.',
        solution: `Step 1: Set up the information
P(Band) = 0.60
P(Chorus) = 0.50
P(Band AND Chorus) = 0.30

Step 2: Use Addition Rule for overlapping events
P(B OR C) = P(B) + P(C) - P(B AND C)
          = 0.60 + 0.50 - 0.30
          = 0.80

Step 3: Verify with Venn diagram regions
Only Band = P(B) - P(B AND C) = 0.60 - 0.30 = 0.30
Only Chorus = P(C) - P(B AND C) = 0.50 - 0.30 = 0.20
Both = 0.30
Neither = 1 - (0.30 + 0.20 + 0.30) = 0.20

Venn Diagram:
        Band (60%)      Chorus (50%)
         ___             ___
        /   \___     ___/   \
       |       \   /        |
       | 0.30  | 0.30 | 0.20|
       |       /   \        |
        \___/         \___/
        
    Neither: 0.20

Step 4: Calculate P(Band OR Chorus)
P(B OR C) = 0.30 + 0.30 + 0.20 = 0.80

Check: 0.30 + 0.20 + 0.30 + 0.20 = 1.00 ✓

Answer: P(Band OR Chorus) = 0.80 or 80%

Key insight: We must subtract the overlap (0.30) because students in both were counted twice when we added P(Band) + P(Chorus).`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: basicProbability.id,
        question: 'Prove that for any event A, 0 ≤ P(A) ≤ 1, and explain what P(A) = 0 and P(A) = 1 mean.',
        solution: `Step 1: Prove 0 ≤ P(A) ≤ 1

Definition of probability:
P(A) = (number of favorable outcomes) / (total number of outcomes)

Step 2: Prove P(A) ≥ 0 (lower bound)
Number of favorable outcomes ≥ 0
- Cannot have negative outcomes
- Minimum is 0 (impossible event)

Total number of outcomes > 0
- Sample space must have at least one outcome

Therefore: P(A) = (≥0) / (>0) ≥ 0

Step 3: Prove P(A) ≤ 1 (upper bound)
Number of favorable outcomes ≤ Total outcomes
- Cannot have more favorable than total
- Maximum: all outcomes are favorable

Therefore: P(A) = (≤total) / (total) ≤ 1

Conclusion: 0 ≤ P(A) ≤ 1

Step 4: Interpret P(A) = 0

Meaning: Event A is IMPOSSIBLE
- No favorable outcomes
- Can never occur
- 0% chance

Examples:
- P(sum = 13 with two dice) = 0
- P(randomly selecting a negative number from {1,2,3,4,5}) = 0
- P(flipping a coin and getting both heads and tails) = 0

Step 5: Interpret P(A) = 1

Meaning: Event A is CERTAIN
- All outcomes are favorable
- Must occur
- 100% chance

Examples:
- P(sum ≤ 12 with two dice) = 1
- P(selecting a positive number from {1,2,3,4,5}) = 1
- P(flipping a coin and getting heads or tails) = 1

Step 6: Interpret intermediate probabilities

P(A) = 0.5: Event occurs half the time (equally likely)
P(A) = 0.25: Event occurs 1/4 of the time (unlikely)
P(A) = 0.75: Event occurs 3/4 of the time (likely)

The closer to 1, the more likely
The closer to 0, the less likely

Step 7: Related rules

Complement rule: P(A) + P(not A) = 1
- If P(A) = 0.3, then P(not A) = 0.7
- Together they cover all possibilities

Sum of all probabilities = 1:
- If sample space is {A, B, C}
- Then P(A) + P(B) + P(C) = 1

Answer: Probability must be between 0 and 1 because it's a ratio of favorable outcomes to total outcomes. P(A) = 0 means A is impossible (never occurs). P(A) = 1 means A is certain (always occurs). Values in between represent varying degrees of likelihood.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: basicProbability.id,
        front: 'What is the basic probability formula?',
        back: 'P(A) = (number of favorable outcomes) / (total number of outcomes). Assumes all outcomes are equally likely. Probability always between 0 and 1.',
        hint: 'Favorable / Total',
        isPremium: false
      },
      {
        topicId: basicProbability.id,
        front: 'What is the Complement Rule?',
        back: 'P(not A) = 1 - P(A). The probability that an event doesn\'t occur is 1 minus the probability it does occur. P(A) + P(not A) = 1.',
        hint: 'P(not A) = 1 - P(A)',
        isPremium: false
      },
      {
        topicId: basicProbability.id,
        front: 'What is the Addition Rule for mutually exclusive events?',
        back: 'If A and B cannot both occur, P(A or B) = P(A) + P(B). Just add the probabilities. Example: P(rolling 2 or 3) = 1/6 + 1/6.',
        hint: 'Mutually exclusive: just add',
        isPremium: false
      },
      {
        topicId: basicProbability.id,
        front: 'What is the Addition Rule for overlapping events?',
        back: 'P(A or B) = P(A) + P(B) - P(A and B). Subtract the overlap to avoid double counting. Use when events can occur together.',
        hint: 'Overlapping: add then subtract overlap',
        isPremium: false
      },
      {
        topicId: basicProbability.id,
        front: 'What does it mean if two events are mutually exclusive?',
        back: 'The events cannot both occur at the same time. P(A and B) = 0. Example: getting heads and tails on one flip. Also called "disjoint" events.',
        hint: 'Cannot both happen, P(A and B) = 0',
        isPremium: false
      },
      {
        topicId: basicProbability.id,
        front: 'What is the sample space?',
        back: 'The set of ALL possible outcomes. Probabilities of all outcomes in sample space sum to 1. Example: flipping coin has sample space {H, T}.',
        hint: 'All possible outcomes',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: basic-probability-rules (now has 5 problems, 6 flashcards)');

  // TOPIC 6: Conditional Probability
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: conditionalProbability.id,
        question: 'A standard deck has 52 cards (26 red, 26 black). If you draw one card and it\'s red, what is the probability it\'s a heart?',
        solution: `Step 1: Understand conditional probability
Given: Card is red
Find: P(Heart | Red)

This is "probability of Heart GIVEN that it's Red"

Step 2: Identify the reduced sample space
Original sample space: 52 cards
Given it's red: Only 26 red cards possible
New sample space: 26 red cards

Step 3: Count favorable outcomes in reduced space
Red cards: 13 hearts + 13 diamonds = 26
Hearts: 13

Step 4: Calculate conditional probability
P(Heart | Red) = (Hearts among red cards) / (Total red cards)
               = 13/26
               = 1/2

Step 5: Verify using conditional probability formula
P(Heart | Red) = P(Heart AND Red) / P(Red)

P(Heart AND Red) = P(Heart) = 13/52 (hearts are red)
P(Red) = 26/52

P(Heart | Red) = (13/52) / (26/52)
               = 13/52 × 52/26
               = 13/26
               = 1/2

Answer: P(Heart | Red) = 1/2 or 0.5

This makes sense: Given the card is red, it's equally likely to be a heart or diamond.`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: conditionalProbability.id,
        question: 'In a school, 30% of students play basketball (B) and 20% play basketball and volleyball (B and V). If a student plays basketball, what is the probability they also play volleyball?',
        solution: `Step 1: Identify given information
P(B) = 0.30
P(B AND V) = 0.20
Find: P(V | B) = ?

Step 2: Use conditional probability formula
P(V | B) = P(V AND B) / P(B)

Note: P(V AND B) = P(B AND V) = 0.20

Step 3: Calculate
P(V | B) = 0.20 / 0.30
         = 2/3
         ≈ 0.667

Step 4: Interpret
Among students who play basketball:
- 2/3 (about 67%) also play volleyball
- This is different from overall volleyball rate in school

Step 5: Create a table for clarity
              Play V    Don't Play V    Total
Play B         0.20        0.10         0.30
Don't Play B    ?           ?           0.70
Total           ?           ?           1.00

Among the 30% who play basketball:
- 20% play both (so 20%/30% = 2/3 play volleyball)
- 10% play only basketball

Answer: P(V | B) = 2/3 ≈ 0.667 or about 66.7%`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: conditionalProbability.id,
        question: 'A medical test is 95% accurate for detecting a disease when present, and 90% accurate when the disease is absent. If 2% of the population has the disease, what is the probability a person with a positive test actually has the disease? Use a tree diagram.',
        solution: `Step 1: Organize the information
P(Disease) = 0.02
P(No Disease) = 0.98

P(Positive | Disease) = 0.95 (true positive rate)
P(Negative | Disease) = 0.05 (false negative rate)

P(Positive | No Disease) = 0.10 (false positive rate)
P(Negative | No Disease) = 0.90 (true negative rate)

Find: P(Disease | Positive) = ?

Step 2: Create tree diagram and calculate joint probabilities

First Branch: Disease Status
├─ Disease (0.02)
│  ├─ Positive (0.95): 0.02 × 0.95 = 0.0190
│  └─ Negative (0.05): 0.02 × 0.05 = 0.0010
│
└─ No Disease (0.98)
   ├─ Positive (0.10): 0.98 × 0.10 = 0.0980
   └─ Negative (0.90): 0.98 × 0.90 = 0.8820

Step 3: Find P(Positive) using Law of Total Probability
P(Positive) = P(Positive AND Disease) + P(Positive AND No Disease)
            = 0.0190 + 0.0980
            = 0.1170

Step 4: Use Bayes' Theorem
P(Disease | Positive) = P(Positive | Disease) × P(Disease) / P(Positive)
                      = P(Disease AND Positive) / P(Positive)
                      = 0.0190 / 0.1170
                      ≈ 0.162

Step 5: Interpret the result
Only about 16.2% of people who test positive actually have the disease!

Why so low?
- Disease is rare (2%)
- Many false positives from the 98% without disease
- Even with 90% specificity, 10% of 98% = 9.8% false positives
- False positives (9.8%) greatly outnumber true positives (1.9%)

Step 6: Create a table per 10,000 people
                  Test Positive  Test Negative  Total
Has Disease           190             10        200
No Disease            980           8,820      9,800
Total               1,170          8,830     10,000

P(Disease | Positive) = 190/1,170 ≈ 0.162

Answer: P(Disease | Positive) ≈ 0.162 or 16.2%

This counterintuitive result shows why positive tests often require confirmation - most positive results are false positives when the condition is rare!`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      },
      {
        topicId: conditionalProbability.id,
        question: 'Roll a fair die. Event A: roll is even. Event B: roll is greater than 3. Find P(A|B) and P(B|A). Are they equal?',
        solution: `Step 1: Identify sample space and events
Sample space S = {1, 2, 3, 4, 5, 6}

Event A (even): {2, 4, 6}
P(A) = 3/6 = 1/2

Event B (greater than 3): {4, 5, 6}
P(B) = 3/6 = 1/2

Event (A AND B): {4, 6}
P(A AND B) = 2/6 = 1/3

Step 2: Calculate P(A | B)
P(A | B) = P(A AND B) / P(B)
         = (2/6) / (3/6)
         = 2/6 × 6/3
         = 2/3

Interpretation:
Given roll is greater than 3, what's probability it's even?
Options given B: {4, 5, 6}
Even among these: {4, 6} = 2 out of 3
P(A | B) = 2/3

Step 3: Calculate P(B | A)
P(B | A) = P(A AND B) / P(A)
         = (2/6) / (3/6)
         = 2/6 × 6/3
         = 2/3

Interpretation:
Given roll is even, what's probability it's greater than 3?
Options given A: {2, 4, 6}
Greater than 3 among these: {4, 6} = 2 out of 3
P(B | A) = 2/3

Step 4: Compare
P(A | B) = 2/3
P(B | A) = 2/3
They ARE equal in this case!

Step 5: Why are they equal here?
This happens when P(A) = P(B)

General rule:
P(A | B) = P(B | A) if and only if P(A) = P(B)

Proof:
If P(A) = P(B), then:
P(A | B) = P(A AND B) / P(B) = P(A AND B) / P(A) = P(B | A)

Step 6: But this is NOT generally true!
Example where they differ:
- P(Rain | Cloudy) ≈ 0.3 (30% of cloudy days have rain)
- P(Cloudy | Rain) ≈ 0.9 (90% of rainy days are cloudy)

Very different! Don't confuse P(A|B) with P(B|A)!

Answer: P(A|B) = 2/3 and P(B|A) = 2/3. They are equal in this specific case because P(A) = P(B) = 1/2. However, conditional probabilities are generally NOT equal: P(A|B) ≠ P(B|A) in most cases.`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: conditionalProbability.id,
        question: 'A bag contains 3 red marbles and 2 blue marbles. Draw two marbles WITHOUT replacement. What is the probability both are red?',
        solution: `Step 1: Understand "without replacement"
After drawing first marble, don't put it back
Second draw from reduced sample

Step 2: Use conditional probability
P(Both Red) = P(1st Red AND 2nd Red)
            = P(1st Red) × P(2nd Red | 1st Red)

Step 3: Calculate P(1st Red)
Initially: 3 red, 2 blue, total 5
P(1st Red) = 3/5

Step 4: Calculate P(2nd Red | 1st Red)
Given 1st was red:
- Remaining: 2 red, 2 blue, total 4
- Sample space reduced!

P(2nd Red | 1st Red) = 2/4 = 1/2

Step 5: Calculate P(Both Red)
P(Both Red) = P(1st Red) × P(2nd Red | 1st Red)
            = 3/5 × 1/2
            = 3/10
            = 0.3

Step 6: Verify using counting
Total ways to draw 2 marbles from 5:
C(5,2) = 5!/(2!×3!) = 10 ways

Ways to draw 2 red from 3 red:
C(3,2) = 3!/(2!×1!) = 3 ways

P(Both Red) = 3/10 ✓

Step 7: Compare with replacement
If we replaced the first marble:
P(1st Red) = 3/5
P(2nd Red | 1st Red) = 3/5 (same as first)
P(Both Red) = 3/5 × 3/5 = 9/25 = 0.36

WITHOUT replacement: 3/10 = 0.30 (lower)
WITH replacement: 9/25 = 0.36 (higher)

Makes sense: removing a red marble makes it harder to get another red

Answer: P(Both Red) = 3/10 = 0.3

Key insight: Without replacement, outcomes are dependent. The first draw affects probabilities for the second draw (conditional probability).`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: conditionalProbability.id,
        front: 'What is conditional probability?',
        back: 'The probability of event A occurring given that event B has occurred. Notation: P(A|B). Formula: P(A|B) = P(A and B) / P(B).',
        hint: 'Probability given something happened',
        isPremium: false
      },
      {
        topicId: conditionalProbability.id,
        front: 'What is the conditional probability formula?',
        back: 'P(A|B) = P(A and B) / P(B), where P(B) > 0. Read as "probability of A given B." Reduces sample space to only outcomes where B occurred.',
        hint: 'P(A and B) / P(B)',
        isPremium: false
      },
      {
        topicId: conditionalProbability.id,
        front: 'What is the general multiplication rule?',
        back: 'P(A and B) = P(A) × P(B|A) = P(B) × P(A|B). Used to find probability of two events both occurring. Rearrangement of conditional probability formula.',
        hint: 'P(A) × P(B|A)',
        isPremium: false
      },
      {
        topicId: conditionalProbability.id,
        front: 'What is the Law of Total Probability?',
        back: 'P(A) = P(A|B)×P(B) + P(A|not B)×P(not B). Or more generally: sum over all partitions. Useful for tree diagrams and finding total probability.',
        hint: 'Sum over all ways A can happen',
        isPremium: false
      },
      {
        topicId: conditionalProbability.id,
        front: 'Is P(A|B) the same as P(B|A)?',
        back: 'NO! Generally they are VERY different. Example: P(rain|cloudy) ≠ P(cloudy|rain). Only equal when P(A) = P(B). Don\'t confuse them!',
        hint: 'Usually very different!',
        isPremium: false
      },
      {
        topicId: conditionalProbability.id,
        front: 'What is Bayes\' Theorem?',
        back: 'P(A|B) = P(B|A) × P(A) / P(B). Used to "reverse" conditional probabilities. Common in medical testing: find P(disease|positive test) from P(positive|disease).',
        hint: 'Reverses conditional probability',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: conditional-probability-stats (now has 5 problems, 6 flashcards)');

  console.log('\n🎉 Batch 2 Complete! Sampling & Experimentation (4/4) + Probability start (2/7)');
  console.log('Progress: 12/34 AP Statistics topics complete (35%)');
  
  await prisma.$disconnect();
}

main();
