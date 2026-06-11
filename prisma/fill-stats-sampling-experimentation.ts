import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('📝 Filling AP Statistics: Sampling & Experimentation (4 topics)...\n');

  // Topic 1: Sampling Methods
  await prisma.topic.update({
    where: { slug: 'sampling-methods-stats' },
    data: {
      textContent: `# Sampling Methods

## Why Sample?

**Sampling** allows us to study a subset of a population to make inferences about the whole population. It's practical, economical, and often the only feasible approach.

**Population:** All individuals/items of interest  
**Sample:** Subset selected for study  
**Goal:** Use sample statistics to estimate population parameters

## Simple Random Sample (SRS)

**Definition:** Every individual has equal probability of selection; every group of size n has equal probability.

**How to obtain:**
1. Assign number to each population member
2. Use random number generator or table
3. Select corresponding individuals

**Example:** Select 50 students from 500 by randomly generating 50 numbers between 1-500.

**Advantages:** Unbiased, every member equally likely  
**Disadvantages:** Requires complete population list, may not represent subgroups well

## Stratified Random Sampling

**Method:**
1. Divide population into homogeneous groups (strata)
2. Take SRS from each stratum
3. Combine samples

**When to use:** Want guaranteed representation from each subgroup

**Example:** School has 40% freshmen, 30% sophomores, 20% juniors, 10% seniors. For sample of 100, randomly select 40 freshmen, 30 sophomores, 20 juniors, 10 seniors.

**Advantages:** Ensures all strata represented, more precise estimates, can compare groups  
**Disadvantages:** Requires knowledge of strata, more complex

## Cluster Sampling

**Method:**
1. Divide population into clusters (heterogeneous groups)
2. Randomly select some clusters
3. Survey ALL members in selected clusters

**When to use:** Population geographically spread, no complete list available

**Example:** Select 5 random schools, survey all students in those 5 schools.

**Key difference from stratified:** In stratified, sample from all groups; in cluster, select whole groups.

**Advantages:** Practical, economical, reduces travel costs  
**Disadvantages:** Less precise than SRS, clusters must be mini-populations

## Systematic Sampling

**Method:**
1. Calculate k = N/n (population size / sample size)
2. Randomly select starting point (1 to k)
3. Select every kth individual

**Example:** From 1000 students, want 100. k = 10. Start at random number 7, then select 7, 17, 27, 37, etc.

**Advantages:** Easy to implement, spreads sample across population  
**Disadvantages:** Problems if list has hidden patterns or cycles

## Comparing Methods

**Use SRS when:** Simplest approach, have complete list  
**Use Stratified when:** Subgroups matter, want comparisons  
**Use Cluster when:** Geographic spread, practical constraints  
**Use Systematic when:** Have ordered list, want efficiency

## Sampling Bias

**Selection Bias:** Some individuals more likely to be selected  
**Voluntary Response:** Individuals self-select (those with strong opinions respond)  
**Undercoverage:** Some groups excluded from sampling frame  
**Nonresponse:** Selected individuals don't participate

**Avoid bias:** Use random selection, ensure complete sampling frame, maximize response rate

## Key Principles

✓ **Randomization** reduces bias  
✓ **Larger samples** generally better (but quality > quantity)  
✓ **Representative samples** crucial for valid inference  
✓ **Response rate** matters (low response = nonresponse bias)

**Remember:** Good sampling is the foundation of statistical inference. A biased sample, no matter how large, leads to invalid conclusions!
`
    }
  });
  console.log('✅ Filled Sampling Methods\n');

  // Topic 2: Observational Studies vs Experiments
  await prisma.topic.update({
    where: { slug: 'observational-vs-experiments' },
    data: {
      textContent: `# Observational Studies vs Experiments

## The Fundamental Difference

**Observational Study:** Observe/measure without intervention  
**Experiment:** Actively impose treatment to observe effect

**Key distinction:** In experiments, researchers control the explanatory variable; in observational studies, they don't.

## Observational Studies

**Definition:** Researchers observe individuals and measure variables without assigning treatments.

**Characteristics:**
- No manipulation by researcher
- Observe "natural" conditions
- Can show association but NOT causation

**Examples:**
- Survey asking smokers about health
- Study comparing test scores by study method (students choose method)
- Medical records analysis of diet and disease

**Types:**

**Sample Survey:** Collect data from sample at one point in time  
**Retrospective Study:** Look back at historical data  
**Prospective Study:** Follow subjects forward in time

**Advantages:**
- Can study variables that can't be manipulated ethically
- Often cheaper and faster
- Observes real-world behavior

**Disadvantages:**
- **Cannot establish causation** (correlation ≠ causation!)
- Confounding variables
- Less control over conditions

## Experiments

**Definition:** Researchers deliberately impose treatments and observe responses.

**Characteristics:**
- Researcher assigns treatments
- Control over conditions
- Can establish cause-and-effect

**Examples:**
- Randomly assign students to study methods, compare test scores
- Give some patients medicine, others placebo
- Test fertilizer by applying different amounts to randomly selected plots

**Key Components:**

**Explanatory Variable (Factor):** What researcher manipulates  
**Treatments:** Different values/levels of explanatory variable  
**Response Variable:** Outcome measured  
**Experimental Units:** Individuals/items receiving treatments

**Advantages:**
- **Can establish causation** (if well-designed)
- Control over conditions
- Can isolate effect of treatment

**Disadvantages:**
- May be unethical (can't randomly assign smoking!)
- Artificial setting may not reflect real life
- Often expensive and time-consuming

## Why Experiments Can Show Causation

**Three criteria for causation:**
1. **Association:** Variables are related
2. **Time order:** Cause precedes effect
3. **No plausible alternative explanation**

**Experiments satisfy all three:**
- Random assignment controls for confounding
- Researcher imposes treatment before measuring response
- Controlled conditions eliminate alternatives

**Observational studies can show association but struggle with #3** (confounding variables provide alternative explanations)

## Confounding Variables

**Confounding Variable:** Variable related to both explanatory and response variables that distorts the relationship.

**Example:**
- **Observational study:** Coffee drinkers have higher heart disease rates
- **Confounding variable:** Smoking (coffee drinkers more likely to smoke; smoking causes heart disease)
- **Conclusion:** Can't tell if coffee causes heart disease or if it's the smoking!

**Experiments address confounding through randomization** (discussed in Experimental Design topic)

## Association vs Causation

**Association (Correlation):** Variables are related  
**Causation:** One variable causes changes in another

**All causation involves association, but NOT all association implies causation!**

**Famous example:** Ice cream sales and drowning deaths are associated (both higher in summer), but ice cream doesn't cause drowning. Confounding variable: weather/temperature.

## Choosing Between Observational and Experimental

**Use Observational Study when:**
- Can't manipulate variable ethically (smoking, genetics)
- Want to study relationships in natural setting
- Experiment not feasible

**Use Experiment when:**
- Want to establish causation
- Can ethically manipulate variable
- Need controlled conditions

## Ethical Considerations

**Cannot experiment on:**
- Harmful treatments (cigarette smoking)
- Variables you can't control (age, gender, genetics)
- Situations where withholding beneficial treatment would be harmful

**Must use observational studies for many important questions!**

## Scope of Inference

**Generalization (to population):** Requires random sampling  
**Causation (cause-effect):** Requires random assignment (experiment)

**Four scenarios:**

| Random Sample? | Random Assignment? | Can Infer Causation? | Can Generalize? |
|----------------|-------------------|---------------------|-----------------|
| Yes            | Yes               | Yes                 | Yes             |
| Yes            | No                | No                  | Yes             |
| No             | Yes               | Yes                 | No              |
| No             | No                | No                  | No              |

**Best case:** Random sample + random assignment (rare!)  
**Worst case:** Convenience sample + observational (common but weakest)

## Quick Reference

**Observational Study:**
- Observe without intervention
- Shows association
- Cannot establish causation
- Confounding variables problematic

**Experiment:**
- Impose treatments
- Can show causation
- Random assignment controls confounding
- May not reflect real-world conditions

**Remember:** The gold standard for establishing causation is a well-designed, randomized experiment. Observational studies can suggest relationships but cannot prove cause-and-effect!
`
    }
  });
  console.log('✅ Filled Observational Studies vs Experiments\n');

  // Topic 3: Experimental Design
  await prisma.topic.update({
    where: { slug: 'experimental-design' },
    data: {
      textContent: `# Experimental Design

## Principles of Experimental Design

Three fundamental principles ensure valid experiments:

### 1. Control

**Control confounding variables** by keeping conditions constant except for treatment.

**Methods:**
- Hold variables constant (same temperature, time of day, etc.)
- Block on variables you can't control
- Use control group (receives no treatment or standard treatment)

**Example:** Testing fertilizer, keep water, sunlight, soil type constant.

### 2. Randomization

**Randomly assign** experimental units to treatments.

**Why it matters:**
- Eliminates systematic bias
- Balances unknown confounding variables
- Allows cause-effect conclusions

**Random assignment ≠ random sampling!**
- Random sampling: selecting participants (for generalization)
- Random assignment: assigning treatments (for causation)

### 3. Replication

**Use adequate number of experimental units** in each treatment group.

**Why it matters:**
- Reduces effect of chance variation
- Increases reliability of results
- Allows assessment of treatment variation

**Don't confuse with repetition:**
- Replication: Multiple experimental units per treatment
- Repetition: Multiple measurements on same unit

## Types of Experimental Designs

### Completely Randomized Design (CRD)

**Method:**
1. Randomly assign all experimental units to treatments
2. Each unit has equal chance of any treatment

**When to use:** Experimental units are homogeneous

**Example:** 60 students randomly assigned to 3 study methods (20 per method)

**Advantages:** Simple, easy to analyze  
**Disadvantages:** Doesn't account for variation among units

### Randomized Block Design (RBD)

**Method:**
1. Group experimental units into blocks (similar units)
2. Randomly assign treatments within each block
3. Each treatment appears in each block

**When to use:** Experimental units vary on important characteristic

**Example:** Test teaching methods. Block by math ability (high/medium/low). Within each ability level, randomly assign to teaching methods.

**Purpose:** Reduce variability, increase precision

**Key:** Blocking variable known before experiment; accounts for variation you expect

### Matched Pairs Design

**Special case of RBD with:**
- Two treatments only
- Blocks of size 2 (matched pairs)

**Two types:**

**Type 1: Natural pairs**
- Twins, siblings, matched subjects
- Randomly assign one to treatment A, other to treatment B

**Type 2: Same subject**
- Each subject receives both treatments
- Random order (to avoid order effects)

**Example:** Test two medications on same patients (different times), random order

## Controlling Variability

### Blinding

**Single-blind:** Subjects don't know which treatment they receive  
**Double-blind:** Neither subjects nor evaluators know treatment assignment

**Why blind?**
- Prevents placebo effect (psychological response to treatment)
- Reduces bias in evaluation
- Increases objectivity

**Example:** Drug study - patients don't know if they get drug or placebo (single-blind), and doctors evaluating don't know either (double-blind)

### Placebo

**Placebo:** Fake treatment that appears identical to real treatment

**Purpose:** Control for placebo effect (improvement from belief in treatment)

**Control group receives placebo,** not just "no treatment"

### Blocking

**Block:** Group of similar experimental units

**Purpose:** Reduce variability within treatment groups

**Example:** Block by gender if you expect men and women to respond differently

**Within each block, randomly assign treatments**

## Sample Size and Statistical Significance

**Larger sample sizes:**
- Detect smaller treatment effects
- More likely to find statistical significance
- More reliable results

**But:** Practical and ethical limits exist

**Balance:** Large enough for reliable results, not wastefully large

## Experimental Terminology

**Experimental Unit:** Individual/item receiving treatment  
**Treatment:** Specific condition applied  
**Factor:** Explanatory variable (what you manipulate)  
**Level:** Specific value of factor  
**Response Variable:** Outcome measured

**Example:** Testing two fertilizers and two watering schedules
- Factors: Fertilizer (2 levels), Watering (2 levels)
- Treatments: 2 × 2 = 4 treatment combinations
- Experimental units: Plots of land
- Response: Plant growth

## Scope of Inference

**Random assignment → Causation**  
Can conclude treatment caused difference in response

**Random sampling → Generalization**  
Can generalize results to population

**Ideal:** Both random sampling and random assignment  
**Common:** Random assignment only (can show causation but only for these specific subjects)

## Common Design Flaws

❌ **No randomization:** Bias in treatment assignment  
❌ **No control group:** Nothing to compare to  
❌ **Too small sample:** Can't detect real effects  
❌ **Confounding:** Variables changing with treatment  
❌ **No blinding:** Placebo effect, evaluation bias  
❌ **No replication:** Can't assess variability

## Designing an Experiment: Checklist

1. **Identify** response variable and explanatory variable(s)
2. **Choose** treatments (levels of factors)
3. **Select** experimental units
4. **Randomly assign** units to treatments
5. **Apply** treatments
6. **Measure** response
7. **Compare** treatment groups
8. **Use** control, randomization, replication
9. **Consider** blocking, blinding, placebo as appropriate

## Quick Reference

**Three Principles:**
- **Control:** Keep other variables constant
- **Randomization:** Random treatment assignment
- **Replication:** Adequate sample size

**Designs:**
- **CRD:** Random assignment to all treatments
- **RBD:** Block then randomize within blocks
- **Matched Pairs:** Blocks of size 2

**Important Techniques:**
- **Blinding:** Prevent bias
- **Placebo:** Control for psychological effects
- **Blocking:** Reduce variability

**Remember:** A well-designed experiment can establish causation. Poor design leads to unreliable or invalid results, no matter how much data you collect!
`
    }
  });
  console.log('✅ Filled Experimental Design\n');

  // Topic 4: Bias in Sampling and Surveys
  await prisma.topic.update({
    where: { slug: 'bias-sampling-surveys' },
    data: {
      textContent: `# Bias in Sampling and Surveys

## What is Bias?

**Bias:** Systematic tendency to over- or under-estimate population parameter.

**Key point:** Bias ≠ random error. Bias is consistent, predictable deviation in one direction.

**Unbiased method:** On average, gives correct answer  
**Biased method:** Systematically off, doesn't improve with larger sample

## Types of Sampling Bias

### 1. Selection Bias

**Definition:** Some members of population systematically more/less likely to be selected.

**Causes:**
- Non-random sampling method
- Convenience sampling
- Judgment/purposive sampling

**Examples:**
- Survey only people at shopping mall (excludes non-shoppers)
- Online poll (excludes those without internet)
- Call only landlines (excludes cell-phone-only households)

**Result:** Sample not representative of population

**Solution:** Use random sampling methods

### 2. Undercoverage

**Definition:** Some groups in population left out of sampling frame.

**Sampling frame:** List from which sample is drawn

**Examples:**
- Phone directory excludes unlisted numbers
- Email list excludes those without email
- Voter registration list excludes unregistered voters

**Result:** Missing groups lead to biased estimates

**Solution:** Use complete, up-to-date sampling frame that covers entire population

### 3. Voluntary Response Bias

**Definition:** Individuals choose whether to participate.

**Characteristics:**
- Self-selection
- Those with strong opinions more likely to respond
- Usually overrepresents extreme views

**Examples:**
- Online polls where anyone can vote
- Call-in surveys
- Mail-back questionnaires (without follow-up)
- Social media polls

**Result:** Respondents not representative (tend to have stronger, more extreme opinions)

**Solution:** Use probability sampling where researcher selects participants

### 4. Nonresponse Bias

**Definition:** Selected individuals don't respond, and non-respondents differ from respondents.

**Types:**
- **Unit nonresponse:** Entire survey not completed
- **Item nonresponse:** Specific questions skipped

**Examples:**
- Mail survey with 20% response rate
- Phone survey where people don't answer
- Web survey where people start but don't finish

**Result:** If non-respondents differ systematically from respondents, estimates are biased

**Solutions:**
- Follow up with non-respondents
- Make survey convenient/appealing
- Keep it short
- Offer incentives (if appropriate)
- Compare respondent characteristics to population

## Response Bias

**Definition:** Responses are systematically incorrect due to how question is asked or answered.

### 1. Question Wording Bias

**Loaded/leading questions** suggest a particular answer:
- "Don't you agree that...?"
- "Like most Americans, do you support...?"

**Emotionally charged language:**
- "Should innocent babies be protected?" vs "Should abortion be legal?"

**Solution:** Use neutral, clear language

### 2. Question Order Bias

**Earlier questions influence later responses**

**Example:**
- Q1: "How satisfied are you with the president?"
- Q2: "How satisfied are you with the economy?"

Q1 may influence Q2 answers

**Solution:** Randomize question order or carefully consider order effects

### 3. Response Option Bias

**Limited or unbalanced options** can bias results

**Example:**
- Only offering "Yes" or "No" when "Unsure" is valid
- 4 positive options, 1 negative option

**Solution:** Offer balanced, complete response options including "no opinion" when appropriate

### 4. Social Desirability Bias

**Respondents give socially acceptable answers** rather than truthful ones

**Examples:**
- Overreporting voting, recycling, charitable donations
- Underreporting illegal behavior, prejudice, embarrassing habits

**Solutions:**
- Anonymous surveys
- Neutral wording
- Indirect questioning
- Validation against records when possible

### 5. Interviewer Bias

**Interviewer characteristics or behavior** influence responses

**Examples:**
- Gender, race, age of interviewer affects responses to sensitive topics
- Interviewer tone, body language suggests preferred answer
- Recording errors

**Solutions:**
- Standardize interviewer training
- Use self-administered surveys when possible
- Monitor interviewer performance

### 6. Recall Bias

**Inaccurate memory** of past events

**Examples:**
- "How many times did you exercise last month?" (people forget)
- "What did you eat for lunch 3 days ago?"

**Solution:** Ask about recent, specific time periods; verify with records when possible

## Other Survey Issues

### 1. Overcoverage

**Sampling frame includes units not in target population**

**Example:** List includes deceased people, duplicates, or out-of-scope units

**Solution:** Clean and update sampling frame regularly

### 2. Measurement Error

**Inaccurate measurements** of response variable

**Causes:**
- Poor question design
- Respondent misunderstanding
- Recording errors
- Equipment problems

**Solution:** Pilot test survey, train data collectors, use validated measures

### 3. Processing Error

**Errors in data entry, coding, or analysis**

**Solution:** Double-check data entry, use data validation, verify calculations

## Reducing Bias: Best Practices

**Sampling:**
✓ Use probability sampling (random selection)  
✓ Ensure complete, accurate sampling frame  
✓ Maximize response rate  
✓ Follow up with non-respondents  
✓ Compare respondent characteristics to population

**Survey Design:**
✓ Use clear, neutral question wording  
✓ Avoid leading or loaded questions  
✓ Offer balanced, complete response options  
✓ Consider question order effects  
✓ Pilot test before full implementation

**Data Collection:**
✓ Train interviewers/data collectors  
✓ Standardize procedures  
✓ Consider anonymity for sensitive topics  
✓ Verify data accuracy  
✓ Document procedures

## Impact of Bias

**Key insight:** **Large sample doesn't fix bias!**

- Unbiased small sample > Biased large sample
- Bias is systematic - doesn't average out
- Can't use statistics to "correct" for bias after the fact

**Example:** 1936 Literary Digest poll
- Mailed 10 million ballots (huge sample!)
- Predicted Landon would beat Roosevelt
- Roosevelt won in landslide
- **Problem:** Undercoverage and nonresponse bias (sampled from phone books and car registrations during Depression; only 24% responded)

## Identifying Bias in Studies

**When evaluating study, ask:**

1. How were participants selected? (Random? Convenient?)
2. What's the sampling frame? (Complete? Current?)
3. What's the response rate? (High? Low?)
4. How are questions worded? (Neutral? Leading?)
5. Who conducted the survey? (Potential conflicts of interest?)
6. How were data collected? (Method may introduce bias)

## Quick Reference

**Selection Bias:** Non-random sampling  
**Undercoverage:** Incomplete sampling frame  
**Voluntary Response:** Self-selection  
**Nonresponse:** Low response rate  

**Question Wording:** Leading/loaded questions  
**Social Desirability:** Giving "acceptable" answers  
**Interviewer Bias:** Interviewer influences responses  
**Recall Bias:** Inaccurate memory

**Key Principle:** Use random selection, neutral questions, high response rate, careful measurement

**Remember:** No amount of sophisticated analysis can fix a biased sample. Preventing bias through good design is essential. When evaluating studies, always look for potential sources of bias before trusting the conclusions!
`
    }
  });
  console.log('✅ Filled Bias in Sampling and Surveys\n');

  console.log('🎉🎉🎉 SAMPLING & EXPERIMENTATION COMPLETE! 🎉🎉🎉');
  console.log('✅ All 4 Sampling & Experimentation topics filled');
  console.log('📊 Progress: 10/34 AP Statistics topics complete (29%)');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
