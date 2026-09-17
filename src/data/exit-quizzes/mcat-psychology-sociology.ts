/**
 * MCAT Psychology & Sociology Exit Quiz
 */

import { authoredFor } from './mcat-authored-pool'
import { mcatSubtopicPool } from './mcat-subtopic-pool'
import type { MCATQuizQuestion } from './mcat-general-chemistry'
import type { ExitQuizQuestion } from './sat-linear-equations-inequalities'
import { shuffleArray } from '@/lib/shuffle-options'

const questionPool: MCATQuizQuestion[] = [
  {
    question: 'According to Piaget, the stage during which children develop object permanence is:',
    options: ['Preoperational', 'Sensorimotor', 'Concrete operational', 'Formal operational'],
    correctAnswer: 1,
    explanation: 'Object permanence (understanding that objects exist even when not visible) develops during the sensorimotor stage (birth to ~2 years) in Piaget\'s theory.',
    difficulty: 'easy',
  },
  {
    question: 'The James-Lange theory of emotion proposes that:',
    options: ['Emotions and physiological responses occur simultaneously', 'We experience an emotion first, then a physiological response', 'Bodily arousal comes first, and its perception is the emotion', 'Emotions are entirely cognitive with no physiological component'],
    correctAnswer: 2,
    explanation: 'James-Lange theory: stimulus → physiological arousal → emotion. We feel afraid because we perceive our heart racing, not the other way around. Simultaneous arousal and emotion is the Cannon-Bard theory.',
    difficulty: 'medium',
  },
  {
    question: 'In operant conditioning, negative reinforcement:',
    options: ['Decreases a behavior by adding an aversive stimulus', 'Increases a behavior by removing an aversive stimulus', 'Decreases a behavior by removing a pleasant stimulus', 'Increases a behavior by adding a pleasant stimulus'],
    correctAnswer: 1,
    explanation: 'Negative reinforcement increases a behavior by removing something unpleasant. Example: taking aspirin (behavior) removes a headache (aversive stimulus), making you more likely to take aspirin again. Adding a pleasant stimulus is positive reinforcement, adding an aversive stimulus is positive punishment, and removing a pleasant stimulus is negative punishment.',
    difficulty: 'easy',
  },
  {
    question: 'The bystander effect is best explained by:',
    options: ['Social facilitation', 'Diffusion of responsibility', 'Deindividuation in crowds', 'Cognitive dissonance reduction'],
    correctAnswer: 1,
    explanation: 'The bystander effect occurs because individuals feel less personal responsibility to act when others are present (diffusion of responsibility). The more bystanders, the less likely any one person is to help. Social facilitation concerns performance in front of others, deindividuation is a loss of self-awareness in crowds, and dissonance reduction concerns conflicting beliefs.',
    difficulty: 'easy',
  },
  {
    question: 'Broca\'s area is primarily associated with:',
    options: ['Language comprehension', 'Speech production', 'Auditory processing', 'Memory consolidation'],
    correctAnswer: 1,
    explanation: 'Broca\'s area (left frontal lobe) controls speech production and language output. Damage leads to Broca\'s aphasia — understanding language but difficulty producing speech. Comprehension depends on Wernicke\'s area and auditory processing on the temporal lobe.',
    difficulty: 'easy',
  },
  {
    question: 'According to Erikson, the psychosocial crisis of adolescence is:',
    options: ['Ego Integrity vs. Despair', 'Industry vs. Inferiority', 'Identity vs. Role Confusion', 'Intimacy vs. Isolation'],
    correctAnswer: 2,
    explanation: 'Erikson\'s stage 5 (adolescence): Identity vs. Role Confusion. Teens explore and form their personal identity. Failure leads to confusion about who they are.',
    difficulty: 'easy',
  },
  {
    question: 'The sociological concept of "looking-glass self" (Cooley) states that:',
    options: ['Self-concept is largely set by genetic temperament', 'Self-concept reflects how we think others see us', 'Self-concept develops through private introspection', 'Social interactions have little effect on self-concept'],
    correctAnswer: 1,
    explanation: 'Cooley\'s looking-glass self: we imagine how we appear to others, imagine their judgment, and develop a self-feeling (pride/shame) based on that perceived judgment.',
    difficulty: 'medium',
  },
  {
    question: 'Which neurotransmitter is most directly associated with the reward pathway?',
    options: ['Serotonin', 'GABA', 'Dopamine', 'Acetylcholine'],
    correctAnswer: 2,
    explanation: 'Dopamine (especially in the mesolimbic pathway from the ventral tegmental area to the nucleus accumbens) is the key neurotransmitter in the brain\'s reward system.',
    difficulty: 'easy',
  },
  {
    question: 'Schizophrenia is most associated with which neurotransmitter abnormality?',
    options: ['Low serotonin', 'Excess dopamine', 'Low GABA levels', 'Excess norepinephrine'],
    correctAnswer: 1,
    explanation: 'The dopamine hypothesis of schizophrenia links positive symptoms (hallucinations, delusions) to excess dopaminergic activity. Antipsychotics work by blocking D2 dopamine receptors.',
    difficulty: 'medium',
  },
  {
    question: 'Symbolic interactionism focuses on:',
    options: ['How large-scale structures shape social life', 'How individuals create meaning through interaction', 'How institutions interact to keep society stable', 'How social classes compete for scarce resources'],
    correctAnswer: 1,
    explanation: 'Symbolic interactionism (Mead, Blumer) is a micro-level sociological perspective that examines how people create meaning through symbols, language, and interaction in everyday life. Large-scale structures are macro-level concerns, how institutions keep society stable is functionalism, and class conflict over resources is conflict theory.',
    difficulty: 'easy',
  },
  {
    question: 'The just-world hypothesis leads people to:',
    options: ['Help victims of injustice', 'Blame victims for their misfortune', 'Seek structural causes of poverty', 'Support social welfare programs'],
    correctAnswer: 1,
    explanation: 'The just-world hypothesis is the belief that people get what they deserve. This cognitive bias leads to victim-blaming — assuming bad things happen to those who deserve them.',
    difficulty: 'medium',
  },
  {
    question: 'In classical conditioning, the conditioned response (CR) is:',
    options: ['An automatic response to a natural stimulus', 'A learned response to a once-neutral stimulus', 'A response that cannot be extinguished', 'A voluntary behavior strengthened by its consequences'],
    correctAnswer: 1,
    explanation: 'The CR is a learned response that is elicited by the conditioned stimulus (CS), a previously neutral stimulus, after repeated pairing with the unconditioned stimulus (US). It is typically similar to the UCR, which is the automatic response to a natural stimulus. CRs can be extinguished, and voluntary behavior strengthened by consequences describes operant conditioning.',
    difficulty: 'easy',
  },
  {
    question: 'The fundamental attribution error refers to:',
    options: ['Overestimating situational factors in others\' behavior', 'Overestimating dispositional factors in others\' behavior', 'Overestimating dispositional factors in one\'s own behavior', 'Overestimating situational factors in one\'s own behavior'],
    correctAnswer: 1,
    explanation: 'The fundamental attribution error (correspondence bias) is the tendency to attribute others\' behavior to internal/dispositional factors while underestimating situational influences. It is specifically about explaining other people; for our own behavior we tend to lean on situational explanations instead.',
    difficulty: 'easy',
  },
  {
    question: 'Which part of the limbic system is most important for forming new explicit memories?',
    options: ['Amygdala', 'Hippocampus', 'Hypothalamus', 'Thalamus'],
    correctAnswer: 1,
    explanation: 'The hippocampus is critical for forming and consolidating new explicit (declarative) memories. The amygdala processes emotional memories. Damage to the hippocampus causes anterograde amnesia.',
    difficulty: 'easy',
  },
  {
    question: 'Social stratification based primarily on economic factors is most consistent with which sociological perspective?',
    options: ['Functionalism', 'Feminist theory', 'Conflict theory', 'Symbolic interactionism'],
    correctAnswer: 2,
    explanation: 'Marx\'s conflict theory views social stratification as arising from economic inequality between the bourgeoisie (owners) and proletariat (workers), with class conflict as the driver of social change.',
    difficulty: 'medium',
  },
]

// Research methods — exact-tagged so mcatSubtopicPool serves these for
// mcat-research-methods-mcat instead of keyword strays ("mnemonic" matched "method").
const researchMethodsPool: MCATQuizQuestion[] = [
  {
    question: 'Researchers test whether a sleep-hygiene app reduces insomnia. Participants are randomly assigned to use the app or not, and insomnia severity is scored after 8 weeks. The dependent variable is:',
    options: ['Insomnia severity score at 8 weeks', 'Assignment to app or no app', 'Use of the sleep-hygiene app', 'The 8-week study duration'],
    correctAnswer: 0,
    explanation: 'The dependent variable is the outcome measured to see whether the manipulation had an effect: the insomnia score. App use is the independent variable the researchers manipulate; random assignment is the method used to create the groups, and the duration is a fixed design parameter.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-research-methods-mcat',
  },
  {
    question: 'To survey attitudes toward vaccination in a city, a researcher divides residents by neighborhood and then randomly samples people from every neighborhood in proportion to its population. This sampling method is:',
    options: ['Stratified random sampling', 'Cluster sampling', 'Convenience sampling', 'Simple random sampling'],
    correctAnswer: 0,
    explanation: 'Dividing the population into subgroups (strata) and randomly sampling from every stratum is stratified sampling. Cluster sampling would randomly pick whole neighborhoods and survey everyone in the chosen ones; simple random sampling ignores neighborhoods entirely; convenience sampling takes whoever is easiest to reach.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-research-methods-mcat',
  },
  {
    question: 'A study recorded the coffee intake of 10,000 healthy adults and then followed them for 20 years, finding lower rates of Parkinson disease among heavier coffee drinkers. This design is best described as:',
    options: ['A prospective cohort study', 'A randomized controlled trial', 'A case-control study', 'A cross-sectional survey'],
    correctAnswer: 0,
    explanation: 'Exposure (coffee intake) was measured first in a disease-free group that was then followed forward in time for the outcome: a prospective cohort. A case-control study would start from people with and without Parkinson disease and look backward at coffee intake; a cross-sectional survey measures both at one time point; nobody was randomly assigned to drink coffee.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-research-methods-mcat',
  },
  {
    question: 'A company wants to know whether Drug X lowers blood pressure. Which design most directly supports a causal conclusion?',
    options: ['Randomly assign patients to Drug X or placebo and compare blood pressure', 'Compare blood pressure in patients who chose Drug X with those who did not', 'Survey Drug X users about their blood pressure history', 'Track blood pressure over time in patients already taking Drug X'],
    correctAnswer: 0,
    explanation: 'Random assignment distributes known and unknown confounders evenly between groups, so a difference in outcome can be attributed to the drug. Patients who choose a drug differ systematically from those who do not (confounding by indication), surveys are retrospective and self-reported, and following existing users has no comparison group.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-research-methods-mcat',
  },
  {
    question: 'An anxiety questionnaire gives nearly the same score when the same person completes it two weeks apart. This demonstrates the questionnaire\'s:',
    options: ['Test-retest reliability', 'Internal validity', 'Construct validity', 'External validity'],
    correctAnswer: 0,
    explanation: 'Reliability is consistency of measurement; agreement across repeated administrations is test-retest reliability. Validity asks whether the instrument measures what it claims (construct), whether a study\'s causal inference is sound (internal), or whether results generalize (external) — none of which is established by mere consistency.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-research-methods-mcat',
  },
  {
    question: 'Over a 12-month reading program, second-graders\' reading scores improve markedly. A critic notes that second-graders\' reading normally improves over a year regardless of any program. The critic is raising the threat of:',
    options: ['Maturation', 'Selection bias', 'Participant attrition', 'Regression to the mean'],
    correctAnswer: 0,
    explanation: 'Maturation is change that occurs simply because participants develop over time, independent of the intervention. Selection bias concerns how participants entered the groups, attrition concerns who dropped out, and regression to the mean requires selection on an extreme initial score, which is not described here.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-research-methods-mcat',
  },
  {
    question: 'Patients are enrolled in a pain trial only if they report severe pain on the screening day. At follow-up, even the placebo group reports substantially less pain. The placebo group\'s improvement is best attributed to:',
    options: ['Regression to the mean', 'The Hawthorne effect', 'Experimenter bias', 'Random assignment error'],
    correctAnswer: 0,
    explanation: 'Selecting people at an extreme value (severe pain on one day) guarantees that many were measured at a temporary high; on remeasurement their values drift back toward their typical level. The Hawthorne effect (behaving differently when observed) and experimenter bias would not be specific to a design that enrolls on extreme scores, and random assignment does not by itself lower scores.',
    difficulty: 'hard',
    subtopicSlug: 'mcat-research-methods-mcat',
  },
  {
    question: 'A stress-reduction intervention is tested only on undergraduate psychology students at one university. The most serious limitation of this study is to its:',
    options: ['External validity', 'Internal validity', 'Statistical power', 'Inter-rater reliability'],
    correctAnswer: 0,
    explanation: 'External validity is the extent to which results generalize to other people, settings, and times; a narrow, homogeneous sample limits it. Internal validity (whether the intervention caused the effect within the study) is untouched by who the participants are, and neither power nor inter-rater reliability is addressed by the sampling frame.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-research-methods-mcat',
  },
  {
    question: 'In an antidepressant trial, neither the participants nor the clinicians rating symptom severity know who received drug or placebo. This design primarily protects against:',
    options: ['Placebo effects and rater bias', 'Selection bias during recruitment', 'Attrition during follow-up', 'Confounding by unmeasured variables'],
    correctAnswer: 0,
    explanation: 'Double blinding keeps participants\' expectations equal across groups (controlling placebo effects) and prevents raters from scoring outcomes differently based on group knowledge (observer bias). Selection bias and confounding are handled by randomization, and attrition is a follow-up problem that blinding does not fix.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-research-methods-mcat',
  },
  {
    question: 'A trial comparing two migraine drugs finds no significant difference (p = 0.30) with 15 patients per group. The most appropriate conclusion is:',
    options: ['The study may be underpowered', 'The two drugs are equally effective', 'The null hypothesis has been proven true', 'A Type I error has most likely occurred'],
    correctAnswer: 0,
    explanation: 'A non-significant result in a tiny sample is uninformative: with 15 per group the study likely lacked the power to detect a real, moderate difference (a Type II error risk). Failing to reject the null never proves it, and a Type I error is a false positive, which cannot describe a null result.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-research-methods-mcat',
  },
  {
    question: 'A researcher wants to observe how shoppers react to a staged emergency in a mall without telling them a study is taking place. Which element of research ethics is most directly at issue?',
    options: ['Informed consent', 'Clinical equipoise', 'Justice in participant selection', 'Confidentiality of records'],
    correctAnswer: 0,
    explanation: 'Informed consent requires that participants know they are in a study and agree to it; covert field research with staged events bypasses this entirely and would need IRB justification and debriefing. Equipoise concerns genuine uncertainty between treatment arms, justice concerns fair distribution of research burdens, and confidentiality concerns data handling after collection.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-research-methods-mcat',
  },
  {
    question: 'Twelve small randomized trials of a probiotic for antibiotic-associated diarrhea report inconsistent results. Pooling their data in a meta-analysis is valuable primarily because it:',
    options: ['Increases the effective sample size and precision', 'Eliminates publication bias in the underlying trials', 'Converts the observational data into experimental evidence', 'Replaces the need for randomization in the trials'],
    correctAnswer: 0,
    explanation: 'A meta-analysis combines studies to yield a pooled effect estimate with a narrower confidence interval than any single small trial. It cannot remove publication bias (it can only try to detect it), the trials were already experimental, and randomization must have occurred within each trial for the pooled estimate to be causal.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-research-methods-mcat',
  },
  {
    question: 'An observational study reports that ice-cream sales and drowning deaths rise together each summer. Temperature, which drives both, is best described as:',
    options: ['A confounding variable', 'The dependent variable', 'A mediating variable', 'The independent variable'],
    correctAnswer: 0,
    explanation: 'A confounder is a third variable associated with both the exposure and the outcome that creates a spurious association between them. A mediator would lie on the causal path from ice cream to drowning, which temperature does not; and neither drowning nor ice-cream sales is being manipulated as an independent variable.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-research-methods-mcat',
  },
]

// Quantitative skills — the percent-increase remediation target
// (diagnostic-generator.ts routes missed percent-increase figure items here).
const quantitativeSkillsPool: MCATQuizQuestion[] = [
  {
    question: 'Enzyme activity rises from 40 to 50 μmol/min after a cofactor is added. The percent increase in activity is:',
    options: ['25%', '20%', '10%', '125%'],
    correctAnswer: 0,
    explanation: 'Percent change = (new − old)/old × 100 = (50 − 40)/40 × 100 = 25%. Dividing by the new value (10/50) gives 20%, a common error; 125% is the new value expressed as a percent of the old, not the change.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-quantitative-skills-mcat',
  },
  {
    question: 'A beta-blocker lowers a patient\'s heart rate from 120 to 90 beats per minute. The percent decrease is:',
    options: ['25%', '33%', '30%', '75%'],
    correctAnswer: 0,
    explanation: 'Percent decrease = (120 − 90)/120 × 100 = 30/120 = 25%. Dividing the 30-bpm drop by the final value (30/90) gives 33%, and 75% is the final rate as a fraction of the starting rate.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-quantitative-skills-mcat',
  },
  {
    question: 'Expression of gene X rises from 200 to 1,400 mRNA copies per cell after treatment. Which statement correctly describes the change?',
    options: ['A 7-fold increase, equivalent to a 600% increase', 'A 7-fold increase, equivalent to a 700% increase', 'A 6-fold increase, equivalent to a 600% increase', 'A 6-fold increase, equivalent to a 500% increase'],
    correctAnswer: 0,
    explanation: 'Fold change = new/old = 1,400/200 = 7. Percent increase = (new − old)/old × 100 = 1,200/200 × 100 = 600%. An n-fold increase is always an (n − 1) × 100 percent increase, so 7-fold pairs with 600%, not 700%.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-quantitative-skills-mcat',
  },
  {
    question: 'In a treated culture, 300 cells are apoptotic and 1,200 are viable. The ratio of apoptotic cells to total cells is:',
    options: ['1:5', '1:4', '4:1', '1:3'],
    correctAnswer: 0,
    explanation: 'Total cells = 300 + 1,200 = 1,500, so apoptotic:total = 300:1,500 = 1:5 (20%). The tempting 1:4 is the ratio of apoptotic to viable cells, a part-to-part ratio rather than part-to-whole.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-quantitative-skills-mcat',
  },
  {
    question: 'A drug shrinks a tumor from 80 $cm^{3}$ to 60 $cm^{3}$; after therapy stops it regrows to 80 $cm^{3}$. The percent decrease and the subsequent percent increase are, respectively:',
    options: ['25% and 33%', '25% and 25%', '20% and 25%', '33% and 25%'],
    correctAnswer: 0,
    explanation: 'Decrease: (80 − 60)/80 = 25%. Regrowth: (80 − 60)/60 = 33%. The same 20 $cm^{3}$ change is a different percent in each direction because the denominator is always the STARTING value of that step. Percent changes are not symmetric.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-quantitative-skills-mcat',
  },
  {
    question: 'A 2.5-fold increase in serum creatinine corresponds to a percent increase of:',
    options: ['150%', '250%', '25%', '350%'],
    correctAnswer: 0,
    explanation: 'A 2.5-fold value is 250% OF the original, which is a 150% increase over it: (2.5 − 1) × 100 = 150%. Reading "2.5-fold" directly as "250% increase" double counts the original amount.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-quantitative-skills-mcat',
  },
  {
    question: 'A figure reports a reaction rate of 12 μmol/min at 25 °C and 36 μmol/min at 35 °C. Relative to 25 °C, the rate at 35 °C is:',
    options: ['Three times as high, a 200% increase', 'Three times as high, a 300% increase', 'Two times as high, a 200% increase', 'Twice as high, a 100% increase'],
    correctAnswer: 0,
    explanation: '36/12 = 3, so the rate tripled. A tripling is a 200% increase, because the increase is 36 − 12 = 24, and 24/12 = 200%. "Three times as high" and "300% increase" are not the same statement.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-quantitative-skills-mcat',
  },
  {
    question: 'Control mice have 40% body fat and treated mice have 30%. The treatment produced a:',
    options: ['Decrease of 10 percentage points, or a 25% relative decrease', 'Decrease of 10 percentage points, or a 10% relative decrease', 'Decrease of 25 percentage points, or a 25% relative decrease', 'Decrease of 10 percentage points, or a 33% relative decrease'],
    correctAnswer: 0,
    explanation: 'The absolute difference between two percentages is measured in percentage points: 40 − 30 = 10 points. The relative change uses the starting value as the denominator: 10/40 = 25%. Confusing points with percent (calling it a 10% decrease) understates the effect; 33% would use 30 as the denominator, which is the ending value.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-quantitative-skills-mcat',
  },
  {
    question: 'A stock solution is diluted from 0.80 M to 0.05 M. By what factor was it diluted?',
    options: ['16', '8', '0.0625', '15'],
    correctAnswer: 0,
    explanation: 'Dilution factor = initial/final concentration = 0.80/0.05 = 16. The value 0.0625 is the reciprocal (final/initial), and 15 comes from subtracting instead of dividing (0.75/0.05).',
    difficulty: 'easy',
    subtopicSlug: 'mcat-quantitative-skills-mcat',
  },
  {
    question: 'Drug A has a plasma half-life of 2 h and drug B a half-life of 6 h. Six hours after equal doses, the ratio of the fraction of drug A remaining to the fraction of drug B remaining is:',
    options: ['1/4', '1/3', '1/8', '3/4'],
    correctAnswer: 0,
    explanation: 'Six hours is three half-lives for A, leaving $(1/2)^{3}$ = 1/8, and one half-life for B, leaving 1/2. The ratio A:B = (1/8)/(1/2) = 1/4. Reporting 1/8 answers a different question (A\'s remaining fraction alone), and 1/3 comes from comparing the half-lives directly instead of the surviving fractions.',
    difficulty: 'hard',
    subtopicSlug: 'mcat-quantitative-skills-mcat',
  },
  {
    question: 'A patient\'s fasting blood glucose of 90 mg/dL rises to 126 mg/dL after a meal. The percent increase is:',
    options: ['40%', '36%', '29%', '140%'],
    correctAnswer: 0,
    explanation: '(126 − 90)/90 × 100 = 36/90 × 100 = 40%. The raw difference (36) is not a percent; 29% divides by the final value (36/126); and 140% is the final value expressed as a percent of the initial value.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-quantitative-skills-mcat',
  },
  {
    question: 'A drug is dosed at 2 mg per kg of body mass. A 50-kg patient receives what percent of the dose given to a 70-kg patient?',
    options: ['71%', '140%', '29%', '60%'],
    correctAnswer: 0,
    explanation: 'Because dose is proportional to mass, the ratio of doses equals the ratio of masses: 50/70 ≈ 0.714, or about 71%. The 140% figure inverts the ratio (70/50), and 29% is the percent DIFFERENCE between the doses, not the smaller dose as a percent of the larger.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-quantitative-skills-mcat',
  },
  {
    question: 'In a figure, absorbance rises from 0.25 to 0.42 in a control sample and from 0.20 to 0.35 in a treated sample. Which sample shows the larger percent increase?',
    options: ['The treated sample, with a 75% increase versus 68% for the control', 'The control sample, because its absolute change of 0.17 is larger', 'The control sample, with a 68% increase versus 60%', 'Both samples, since each rose by roughly 0.15 to 0.17 units'],
    correctAnswer: 0,
    explanation: 'Control: (0.42 − 0.25)/0.25 = 0.17/0.25 = 68%. Treated: (0.35 − 0.20)/0.20 = 0.15/0.20 = 75%. The treated sample starts lower, so its slightly smaller absolute rise is a larger relative rise. Absolute and percent change can rank samples differently; the question asks about percent.',
    difficulty: 'hard',
    subtopicSlug: 'mcat-quantitative-skills-mcat',
  },
]

// Science passage strategy — the feedback-loop remediation target
// (diagnostic-generator.ts sends every missed feedback-loop item here). Each
// stem carries a short passage and says "passage" so the four sub-slugs
// (reading / figures / experimental-design / discrete-questions), which have
// no tags of their own, pick these up through the slug-term match.
const passageStrategyPool: MCATQuizQuestion[] = [
  {
    question: 'A passage reports that mice were fed either a standard diet or a high-fructose diet for 12 weeks, after which hepatic triglyceride content was measured; high-fructose mice had 2.4-fold more hepatic triglyceride than controls. In this experiment the independent variable is:',
    options: ['Diet type (standard versus high-fructose)', 'Hepatic triglyceride content', 'The 12-week feeding period', 'The 2.4-fold difference between groups'],
    correctAnswer: 0,
    explanation: 'The independent variable is what the researchers deliberately varied between groups: the diet. Triglyceride content is the dependent variable (the measured outcome), the feeding period is a held-constant parameter, and the 2.4-fold difference is a result, not a variable.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-science-passage-strategy-mcat',
  },
  {
    question: 'A passage reports that among 2,000 adults surveyed at a single time point, higher serum vitamin D was associated with fewer depressive symptoms (r = −0.31, p < 0.01). Which conclusion is best supported by the passage?',
    options: ['Vitamin D and depressive symptoms are inversely associated', 'Low vitamin D causes depressive symptoms', 'Vitamin D supplementation would reduce depressive symptoms', 'Depression lowers serum vitamin D by reducing sun exposure'],
    correctAnswer: 0,
    explanation: 'A cross-sectional correlation establishes an association only. It cannot say which variable came first or rule out confounders such as outdoor activity, so causal claims in either direction, and predictions about supplementation, go beyond the data.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-science-passage-strategy-mcat',
  },
  {
    question: 'A passage explains that thyroid hormone (T3) suppresses TSH release from the anterior pituitary, while TSH stimulates the thyroid to release T3. A patient\'s thyroid tissue is destroyed by autoimmune attack. Based on the passage, this patient\'s serum TSH is most likely:',
    options: ['Elevated, because loss of T3 removes the negative feedback on the pituitary', 'Decreased, because the pituitary is no longer stimulated by the thyroid', 'Unchanged, because TSH release is independent of T3 levels', 'Elevated, because T3 stimulates TSH release in a positive feedback loop'],
    correctAnswer: 0,
    explanation: 'The passage describes a negative feedback loop: T3 inhibits TSH. Remove the thyroid and T3 falls, so the brake on TSH is released and TSH rises. The thyroid does not stimulate the pituitary, TSH is clearly not independent of T3 per the passage, and the loop is negative, not positive.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-science-passage-strategy-mcat',
  },
  {
    question: 'A passage plots hormone output against stimulus dose for doses of 1, 2, 3, and 4 units, giving outputs of 5, 8, 14, and 26 ng/mL. The authors propose a negative feedback mechanism. Which evaluation of their model is best supported by the figure?',
    options: ['The data challenge negative feedback, because the increments grow larger', 'The data support the negative feedback model, because output rises with each dose', 'The data support the negative feedback model, because output never falls below baseline', 'The data cannot address feedback, because only four doses were tested'],
    correctAnswer: 0,
    explanation: 'To evaluate a feedback claim, look at how the successive increments change, not at the overall direction. Here the increments are 3, 6, and 12: each is larger than the last, an accelerating response that matches positive feedback. Negative feedback would blunt the response at higher doses, giving shrinking increments. A rising curve alone, or one that stays above baseline, is compatible with either model.',
    difficulty: 'hard',
    subtopicSlug: 'mcat-science-passage-strategy-mcat',
  },
  {
    question: 'In a passage, plasma insulin is measured at plasma glucose concentrations of 5, 10, 15, and 20 mM, giving 10, 18, 22, and 24 μU/mL. Which statement about the response is best supported by the data?',
    options: ['Increments shrink at higher glucose, consistent with negative feedback', 'Insulin rises linearly with glucose, indicating no feedback regulation', 'Increments grow at higher glucose, consistent with positive feedback', 'Insulin secretion is suppressed once glucose exceeds 10 mM'],
    correctAnswer: 0,
    explanation: 'The successive increments are 8, 4, and 2 μU/mL: each step adds less than the one before. A response that flattens at higher stimulus is the signature of negative feedback (or saturation), not positive feedback. The curve is not linear, and insulin keeps rising above 10 mM, so it is not suppressed.',
    difficulty: 'hard',
    subtopicSlug: 'mcat-science-passage-strategy-mcat',
  },
  {
    question: 'A passage shows cortisol output rising with ACTH dose and proposes that cortisol feeds back to limit its own further release. Which follow-up experiment most directly tests the proposed feedback mechanism?',
    options: ['Block cortisol receptors at a fixed ACTH dose and remeasure output', 'Repeat the same four ACTH doses in triplicate to confirm the rank order', 'Test only the lowest and highest ACTH doses for statistical clarity', 'Increase the sample size and lower the significance threshold'],
    correctAnswer: 0,
    explanation: 'A feedback model implies a mediator that closes the loop. The direct test is to disable that mediator (block cortisol signaling) while holding the stimulus constant: if output then rises further, cortisol was indeed restraining it. Replicating, trimming doses, or adding subjects only re-describes the same dose-response curve and cannot distinguish feedback from a simple dose-dependent effect.',
    difficulty: 'hard',
    subtopicSlug: 'mcat-science-passage-strategy-mcat',
  },
  {
    question: 'A passage describes a trial in which patients with hypertension took a new drug and their blood pressure fell an average of 12 mmHg over 8 weeks; no comparison group was included. The most important limitation of the passage\'s design is:',
    options: ['No control group to separate drug effect from placebo and time', 'The use of a within-subjects measurement', 'The 8-week duration, which is too short to detect any change', 'Measuring blood pressure rather than a molecular marker of drug action'],
    correctAnswer: 0,
    explanation: 'Without a placebo or untreated group, a 12 mmHg drop cannot be attributed to the drug: placebo response, regression to the mean, and lifestyle changes during the trial could all lower blood pressure. Before-and-after measurement within subjects is fine when paired with a control arm, 8 weeks is ample for a blood-pressure effect, and blood pressure is the clinically relevant outcome.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-science-passage-strategy-mcat',
  },
  {
    question: 'A passage\'s table lists kinetic parameters for an enzyme with and without compound Z: without Z, $K_{m}$ = 2 mM and $V_{max}$ = 100 units; with Z, $K_{m}$ = 8 mM and $V_{max}$ = 100 units. Compound Z is most likely:',
    options: ['A competitive inhibitor', 'A noncompetitive inhibitor', 'An uncompetitive inhibitor', 'An allosteric activator of the enzyme'],
    correctAnswer: 0,
    explanation: 'A raised apparent $K_{m}$ with an unchanged $V_{max}$ is the fingerprint of competitive inhibition: the inhibitor competes for the active site, so more substrate is needed to reach half-maximal rate, but enough substrate can still outcompete it. Noncompetitive inhibitors lower $V_{max}$ and leave $K_{m}$ alone; uncompetitive inhibitors lower both; an activator would lower $K_{m}$ or raise $V_{max}$.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-science-passage-strategy-mcat',
  },
  {
    question: 'A passage states that a sealed gas sample was compressed to half its volume at constant temperature, and that the measured pressure rose from 1.0 atm to 1.8 atm rather than the 2.0 atm predicted by PV = nRT. Which explanation is most consistent with the passage?',
    options: ['Attractive forces between molecules lower the pressure below the ideal value', 'The temperature must have increased during compression', 'Finite molecular volume raises the pressure above the ideal prediction', 'Some gas escaped from the container, so n decreased'],
    correctAnswer: 0,
    explanation: 'A real gas at higher density experiences intermolecular attractions that pull molecules together and reduce the force of collisions with the walls, so the pressure falls short of the ideal value. A temperature rise or excluded molecular volume would push the pressure ABOVE the ideal prediction, and the passage specifies a sealed container at constant temperature.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-science-passage-strategy-mcat',
  },
  {
    question: 'A question following a passage about hemoglobin asks which amino acid side chain is positively charged at physiological pH, and nothing in the passage discusses side-chain charge. The best approach to this question is to:',
    options: ['Answer it from prior knowledge', 'Reread the passage carefully for the answer', 'Skip it, because it cannot be answered from the passage', 'Use the passage\'s figure to deduce the answer'],
    correctAnswer: 0,
    explanation: 'This is a pseudo-discrete question: it sits after a passage but tests outside content knowledge (lysine and arginine; histidine only partially at pH 7.4). Recognizing the type saves time; rereading or scanning figures for something that is not there wastes minutes, and skipping a question you can answer forfeits a point.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-science-passage-strategy-mcat',
  },
  {
    question: 'While reading a dense biochemistry passage, a student reaches a paragraph describing a five-step signaling mechanism that no figure references. According to sound passage strategy, the student should:',
    options: ['Mark its location and move on, returning only if a question needs it', 'Reread it until the full mechanism is memorized before continuing on', 'Skip the rest of the passage and go straight to the questions', 'Draw the entire pathway in the margin before reading further'],
    correctAnswer: 0,
    explanation: 'On a first pass the goal is a map of where information lives, not mastery of every detail; the questions will tell you which details matter. Memorizing or diagramming a mechanism that may never be asked about burns time, and abandoning the passage loses the map for the questions that follow.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-science-passage-strategy-mcat',
  },
  {
    question: 'A passage\'s figure shows mean anxiety scores for a treatment group and a control group at baseline and at 6 weeks, with 95% confidence intervals that overlap substantially at both time points. The most defensible reading of the figure is:',
    options: ['The figure does not show a significant difference between groups', 'The treatment reduced anxiety, since its mean was lower', 'The treatment had no biological effect on anxiety', 'The confidence intervals show that the sample size was adequate'],
    correctAnswer: 0,
    explanation: 'Widely overlapping confidence intervals mean the data cannot distinguish the group means; a lower point estimate in one group is within the noise. Concluding that the treatment "works" over-reads the figure, but so does concluding it has no effect: absence of evidence is not evidence of absence. Wide intervals suggest a small sample, not an adequate one.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-science-passage-strategy-mcat',
  },
  {
    question: 'A passage tests whether an antibody blocks viral entry: cells were incubated with virus plus the antibody, virus plus an unrelated isotype-matched antibody, or virus alone, and infection was quantified. The isotype-matched antibody condition serves to:',
    options: ['Control for nonspecific antibody effects', 'Establish the maximal infection rate in the assay', 'Confirm that the virus can infect the cells', 'Test whether antibodies in general promote infection'],
    correctAnswer: 0,
    explanation: 'An isotype control is an antibody of the same class that does not recognize the virus. If it also reduced infection, the effect would be due to having any protein of that type present, not to specific binding. The virus-alone condition establishes baseline infection and confirms the cells are susceptible.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-science-passage-strategy-mcat',
  },
  {
    question: 'A passage\'s dose-response figure plots percent inhibition against drug concentration on a logarithmic x-axis; the curve rises steeply between 1 μM and 10 μM and plateaus above 30 μM. Which conclusion about the drug is best supported?',
    options: ['Its $IC_{50}$ lies roughly between 1 and 10 μM', 'Inhibition increases linearly with concentration', 'The drug is ineffective below 1 μM', 'A tenfold increase in dose always doubles inhibition'],
    correctAnswer: 0,
    explanation: 'On a log-dose axis a sigmoidal inhibition curve is steepest around its midpoint, so the half-maximal concentration falls in the steep region between 1 and 10 μM. The log axis means the relationship is not linear, some inhibition can occur below 1 μM even if small, and the plateau shows that further tenfold increases add little.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-science-passage-strategy-mcat',
  },
  {
    question: 'In a passage, a Western blot for protein P shows bands of equal intensity in control and treated lanes, while qPCR shows a 4-fold increase in P mRNA after treatment. The most consistent interpretation is that:',
    options: ['P mRNA rises with treatment, but P protein does not', 'Treatment increases both transcription and translation of P', 'The Western blot must have failed to detect protein P', 'Treatment degrades P mRNA while stabilizing the protein'],
    correctAnswer: 0,
    explanation: 'The two techniques measure different molecules. More mRNA with unchanged protein points to regulation after transcription, such as reduced translation or faster protein turnover. Equal bands are a valid result, not a failed blot, and mRNA went up, not down.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-science-passage-strategy-mcat',
  },
  {
    question: 'A passage reports that a social-support intervention reduced loneliness scores by 3 points (p = 0.04, n = 400) and notes that a clinically meaningful change on the scale is 10 points. The best interpretation of the passage is:',
    options: ['The effect is statistically significant but small in practical terms', 'The effect is both statistically and clinically significant', 'The result is not significant because the effect is below 10 points', 'The large sample makes the finding clinically important'],
    correctAnswer: 0,
    explanation: 'Statistical significance (p < 0.05) says the difference is unlikely to be chance; clinical significance asks whether it is large enough to matter. A 3-point change is well under the 10-point threshold, so the finding is real but small. A large sample makes small effects easier to detect; it does not make them more important.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-science-passage-strategy-mcat',
  },
  {
    question: 'A passage concludes that because knockout mice lacking gene G gained less weight on a high-fat diet, gene G promotes fat storage. This conclusion assumes that:',
    options: ['The knockout did not reduce food intake or activity', 'Gene G is expressed exclusively in adipose tissue', 'Wild-type mice always gain weight on a high-fat diet', 'Humans carry an exact homolog of gene G'],
    correctAnswer: 0,
    explanation: 'Weight gain depends on energy balance. If the knockout mice ate less or moved more, they would gain less weight even if gene G had nothing to do with fat storage, so the causal conclusion depends on those alternatives being excluded. The gene need not be adipose-specific, wild-type mice need only gain MORE than knockouts, and the human homolog is irrelevant to the mouse conclusion.',
    difficulty: 'hard',
    subtopicSlug: 'mcat-science-passage-strategy-mcat',
  },
]

// Deep pool: local questions + the authored competitive bank for this area
// (audit F1). Authored items carry subtopic tags the selector prefers.
const fullPool = [
  ...questionPool,
  ...researchMethodsPool,
  ...quantitativeSkillsPool,
  ...passageStrategyPool,
  ...authoredFor(['mcat-psych-', 'mcat-research-methods-']),
]

export function generateExitQuiz(count: number = 10, topicSlug?: string): ExitQuizQuestion[] {
  const source = topicSlug ? mcatSubtopicPool(fullPool, 'psych-soc', topicSlug) : fullPool
  const shuffled = shuffleArray(source)
  return shuffled.slice(0, Math.min(count, shuffled.length)).map((q, i) => ({
    id: `psychology-sociology-${i}`,
    question: q.question,
    options: q.options,
    correctIndex: q.correctAnswer,
    explanation: q.explanation,
    category: q.subtopicSlug ?? 'mcat-psychology-sociology',
  }))
}
