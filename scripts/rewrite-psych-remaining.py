#!/usr/bin/env python3
"""
Rewrite remaining flagged psychology interactive lesson files with substantive,
renderer-compatible 7-section content.

Output pattern:
  src/data/interactive-lessons/{filePrefix}-part{1..7}.ts

Total expected files:
  13 topics x 7 parts = 91 files
"""

from __future__ import annotations

import hashlib
import os
import random
import textwrap
from typing import Dict, List, Sequence, Tuple

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT_DIR, "src", "data", "interactive-lessons")

Term = Tuple[str, str]

TOPICS: List[Dict[str, object]] = [
    {
        "slug": "attitudes-persuasion",
        "exportPrefix": "psychAttitudes",
        "filePrefix": "psych-attitudes-persuasion",
        "title": "Attitudes and Persuasion",
        "partPlans": [
            "Attitude Components and Formation",
            "Routes to Persuasion",
            "Cognitive Dissonance and Self-Justification",
            "Social Judgment and Framing",
            "Resistance to Persuasion",
            "Case Analysis and Data Interpretation",
            "AP Exam Synthesis",
        ],
        "vocab": [
            ("attitude", "a learned evaluation of a person, object, or idea"),
            ("ABC model", "the affective, behavioral, and cognitive components of an attitude"),
            ("mere exposure effect", "increased liking after repeated exposure"),
            ("central route", "persuasion through careful analysis of message quality"),
            ("peripheral route", "persuasion through cues such as attractiveness or authority"),
            ("cognitive dissonance", "discomfort from inconsistent beliefs and behaviors"),
            ("foot-in-the-door", "gaining compliance with a small request before a larger one"),
            ("social judgment theory", "evaluation of messages relative to existing attitude anchors"),
            ("inoculation", "building resistance to persuasion by exposing weak counterarguments"),
            ("reactance", "motivation to reassert freedom when one feels pressured"),
        ],
        "scenarios": [
            "a school district campaign to increase student seatbelt use",
            "a skincare advertisement using expert endorsements",
            "students defending a difficult policy after voting for it",
            "public health messaging about vaccination wording",
            "a social media influencer sponsorship disclosure",
            "survey results before and after a persuasion intervention",
            "mixed-response AP free-response prompts on persuasion outcomes",
        ],
        "misconceptions": [
            "Strong emotions can persuade, but lasting change usually requires attitude-consistent reasoning.",
            "Peripheral cues can shift choices quickly, yet effects may fade without central processing.",
            "Dissonance reduction is not always conscious; people often rationalize automatically.",
            "Resistance does not mean no influence; it can mean delayed or context-dependent influence.",
        ],
    },
    {
        "slug": "biological-bases-brain",
        "exportPrefix": "psychBrain",
        "filePrefix": "psych-biological-bases-brain",
        "title": "Biological Bases and Brain",
        "partPlans": [
            "Neurons and Communication",
            "Neurotransmitters and Behavior",
            "Brain Structures and Functions",
            "Lateralization and Networks",
            "Methods in Biological Psychology",
            "Clinical Cases and Interpretation",
            "AP Exam Synthesis",
        ],
        "vocab": [
            ("action potential", "an all-or-none electrical impulse traveling down the axon"),
            ("synapse", "the junction where one neuron communicates with another cell"),
            ("dopamine", "a neurotransmitter linked to reward, movement, and motivation"),
            ("serotonin", "a neurotransmitter involved in mood, appetite, and sleep regulation"),
            ("hippocampus", "a medial temporal structure essential for new explicit memories"),
            ("amygdala", "a limbic structure involved in emotional processing, especially threat"),
            ("prefrontal cortex", "frontal region supporting planning, inhibition, and decision-making"),
            ("broca area", "left frontal language region associated with speech production"),
            ("EEG", "a method that records electrical brain activity with high temporal resolution"),
            ("fMRI", "an imaging method that infers neural activity via blood-oxygen changes"),
        ],
        "scenarios": [
            "a concussion protocol for a high school soccer team",
            "medication effects on mood and sleep patterns",
            "language deficits after a left frontal stroke",
            "decision-making under stress in emergency responders",
            "brain imaging during memory retrieval tasks",
            "interpreting lesion and behavior case reports",
            "integrating neural evidence in AP-style responses",
        ],
        "misconceptions": [
            "Single regions rarely act alone; cognition emerges from interacting networks.",
            "fMRI maps blood flow, not direct electrical firing.",
            "Neurotransmitters are context dependent; the same molecule can have different effects by pathway.",
            "Correlation in brain imaging does not by itself prove causation.",
        ],
    },
    {
        "slug": "genetics-behavior",
        "exportPrefix": "psychGenetics",
        "filePrefix": "psych-genetics-behavior",
        "title": "Genetics and Behavior",
        "partPlans": [
            "Genes, Environment, and Phenotype",
            "Twin and Adoption Designs",
            "Heritability and Population Statistics",
            "Gene-Environment Interaction",
            "Epigenetics and Development",
            "Applied Cases and Data Analysis",
            "AP Exam Synthesis",
        ],
        "vocab": [
            ("heritability", "the proportion of trait variation in a population attributable to genetic differences"),
            ("genotype", "an organism's genetic makeup"),
            ("phenotype", "observable characteristics produced by genes and environment"),
            ("polygenic", "influenced by many genes with small effects"),
            ("gene-environment interaction", "when environmental effects differ by genotype"),
            ("epigenetics", "changes in gene expression without altering DNA sequence"),
            ("concordance", "the degree to which related individuals share a trait"),
            ("reaction range", "genetically influenced limits within which environment shapes outcomes"),
            ("adoption study", "design comparing adoptees to biological and adoptive relatives"),
            ("nonshared environment", "experiences that make siblings different from one another"),
        ],
        "scenarios": [
            "interpreting twin data on anxiety symptoms",
            "adoption outcomes for language development",
            "population-level variation in reading achievement",
            "school enrichment effects across genetic risk profiles",
            "stress exposure and epigenetic markers across adolescence",
            "policy decisions using behavioral genetics evidence",
            "AP-style argumentation about nature and nurture",
        ],
        "misconceptions": [
            "High heritability does not mean a trait is fixed or unchangeable.",
            "Heritability applies to populations, not to an individual person.",
            "Genes set probabilities, not precise destinies, for complex behavior.",
            "Shared family context does not explain all sibling similarity.",
        ],
    },
    {
        "slug": "group-behavior-prejudice",
        "exportPrefix": "psychGroup",
        "filePrefix": "psych-group-behavior-prejudice",
        "title": "Group Behavior and Prejudice",
        "partPlans": [
            "Social Identity and Ingroup Processes",
            "Conformity and Obedience",
            "Stereotypes and Attribution",
            "Prejudice Reduction Mechanisms",
            "Aggression and Group Decision Errors",
            "Applied Interventions and Data",
            "AP Exam Synthesis",
        ],
        "vocab": [
            ("social identity", "part of self-concept derived from group membership"),
            ("ingroup bias", "favoring one's own group over outgroups"),
            ("conformity", "adjusting behavior or beliefs to align with a group"),
            ("obedience", "compliance with direct commands from authority"),
            ("fundamental attribution error", "overattributing others' behavior to disposition rather than situation"),
            ("stereotype", "a generalized belief about members of a group"),
            ("prejudice", "an unjustified negative attitude toward a group"),
            ("discrimination", "unequal behavior toward people based on group membership"),
            ("contact hypothesis", "structured intergroup contact can reduce prejudice"),
            ("groupthink", "poor group decisions from pressure to maintain consensus"),
        ],
        "scenarios": [
            "a hiring committee evaluating identical resumes with different names",
            "students conforming during a classroom demonstration",
            "jury deliberation with strong authority pressure",
            "a workplace DEI training using contact-based interventions",
            "team decision failures in a high-stakes project",
            "survey and behavioral data on bias reduction",
            "AP free-response synthesis on prejudice and conformity",
        ],
        "misconceptions": [
            "Stereotypes can be positive or negative, but both can distort judgment.",
            "Conformity can reflect informational needs, not only fear of rejection.",
            "Reducing prejudice requires sustained structural conditions, not one-time exposure alone.",
            "Group cohesion helps performance until dissent is suppressed.",
        ],
    },
    {
        "slug": "memory-encoding-storage",
        "exportPrefix": "psychMemoryEncode",
        "filePrefix": "psych-memory-encoding-storage",
        "title": "Memory Encoding and Storage",
        "partPlans": [
            "Memory Systems Overview",
            "Encoding Strategies",
            "Storage and Consolidation",
            "Working Memory and Capacity",
            "Biological Bases of Memory",
            "Applied Study Design and Data",
            "AP Exam Synthesis",
        ],
        "vocab": [
            ("sensory memory", "brief retention of sensory information"),
            ("working memory", "active short-term processing system with limited capacity"),
            ("long-term memory", "relatively enduring store of knowledge, skills, and experiences"),
            ("encoding", "transforming input into a storable memory representation"),
            ("elaborative rehearsal", "linking new information to meaning and prior knowledge"),
            ("chunking", "grouping information into manageable units"),
            ("consolidation", "stabilization of memories over time"),
            ("semantic network", "concepts connected by meaningful associations"),
            ("procedural memory", "memory for skills and actions"),
            ("spacing effect", "improved retention when practice is distributed over time"),
        ],
        "scenarios": [
            "designing a study schedule before AP exams",
            "language vocabulary retention in two practice conditions",
            "sleep effects on next-day recall",
            "dual-task limitations during note-taking",
            "neuroscience evidence on hippocampal consolidation",
            "interpreting classroom memory intervention data",
            "AP-style synthesis using memory models",
        ],
        "misconceptions": [
            "Rereading feels fluent but often produces weaker long-term retention than retrieval practice.",
            "Working memory capacity is limited and context dependent.",
            "Encoding strength matters more than time spent passively reviewing.",
            "Storage and retrieval failures can look similar unless tested carefully.",
        ],
    },
    {
        "slug": "mood-psychotic-disorders",
        "exportPrefix": "psychMoodPsych",
        "filePrefix": "psych-mood-psychotic-disorders",
        "title": "Mood and Psychotic Disorders",
        "partPlans": [
            "Diagnostic Features",
            "Depressive Disorders",
            "Bipolar Spectrum",
            "Schizophrenia Spectrum",
            "Biopsychosocial Risk Models",
            "Case Formulation and Data",
            "AP Exam Synthesis",
        ],
        "vocab": [
            ("major depressive disorder", "persistent low mood or loss of interest with functional impairment"),
            ("persistent depressive disorder", "chronic depressed mood lasting at least two years"),
            ("mania", "elevated or irritable mood with increased energy and reduced need for sleep"),
            ("bipolar disorder", "disorder involving episodes of depression and mania or hypomania"),
            ("delusion", "a fixed false belief resistant to contradictory evidence"),
            ("hallucination", "perception-like experience without an external stimulus"),
            ("negative symptoms", "reductions in normal emotional or motivational functioning"),
            ("diathesis-stress model", "vulnerability interacts with stress to increase disorder risk"),
            ("comorbidity", "co-occurrence of two or more disorders"),
            ("prodromal phase", "early period of subtle symptoms before full disorder onset"),
        ],
        "scenarios": [
            "triaging students at a university counseling center",
            "distinguishing grief from depressive episodes",
            "monitoring sleep and activity changes in bipolar risk",
            "community mental health support for first-episode psychosis",
            "family history and stress-load risk assessment",
            "analyzing symptom timeline case notes",
            "AP-style clinical reasoning prompts",
        ],
        "misconceptions": [
            "Mood changes alone are insufficient for diagnosis without duration and impairment criteria.",
            "Psychotic symptoms can occur in several disorders and must be interpreted in context.",
            "Bipolar disorder is not simply rapid mood swings; episodes have specific patterns.",
            "Treatment planning should address comorbidity and functioning, not only symptom labels.",
        ],
    },
    {
        "slug": "motivation-theories",
        "exportPrefix": "psychMotivation",
        "filePrefix": "psych-motivation-theories",
        "title": "Motivation Theories",
        "partPlans": [
            "Biological and Drive Accounts",
            "Incentive and Expectancy Models",
            "Self-Determination and Goal Orientation",
            "Arousal and Performance",
            "Emotion-Motivation Integration",
            "Applied Performance Cases",
            "AP Exam Synthesis",
        ],
        "vocab": [
            ("drive-reduction theory", "motivation to reduce physiological tension and restore homeostasis"),
            ("incentive theory", "motivation shaped by external rewards and consequences"),
            ("expectancy-value theory", "motivation depends on expected success and value of outcome"),
            ("self-determination theory", "autonomy, competence, and relatedness support intrinsic motivation"),
            ("intrinsic motivation", "engaging in an activity for inherent interest or enjoyment"),
            ("extrinsic motivation", "engaging in an activity for external outcomes"),
            ("approach goal", "aiming to attain a positive outcome"),
            ("avoidance goal", "aiming to prevent a negative outcome"),
            ("Yerkes-Dodson law", "moderate arousal often optimizes performance on many tasks"),
            ("achievement motivation", "persistent effort toward standards of excellence"),
        ],
        "scenarios": [
            "student persistence in a challenging AP course",
            "employee bonus systems and task engagement",
            "athlete expectations before a high-pressure event",
            "test anxiety and performance under time limits",
            "classroom climate effects on intrinsic interest",
            "interpreting intervention outcomes in motivation research",
            "AP synthesis using multiple motivational frameworks",
        ],
        "misconceptions": [
            "Extrinsic rewards can help or hurt motivation depending on how they are framed.",
            "High arousal is not always beneficial; task complexity changes the optimal level.",
            "Motivation is dynamic and can change with feedback, context, and goals.",
            "Value without expectancy, or expectancy without value, often yields weak persistence.",
        ],
    },
    {
        "slug": "personality-theories",
        "exportPrefix": "psychPersonality",
        "filePrefix": "psych-personality-theories",
        "title": "Personality Theories",
        "partPlans": [
            "Trait and Type Approaches",
            "Psychodynamic and Humanistic Views",
            "Social-Cognitive Perspectives",
            "Biological Contributions",
            "Assessment Methods",
            "Case Integration and Evidence",
            "AP Exam Synthesis",
        ],
        "vocab": [
            ("trait", "a relatively stable disposition influencing behavior across situations"),
            ("Big Five", "five broad trait dimensions: openness, conscientiousness, extraversion, agreeableness, neuroticism"),
            ("psychodynamic", "approach emphasizing unconscious processes and early relationships"),
            ("self-actualization", "humanistic concept of fulfilling one's potential"),
            ("reciprocal determinism", "behavior, cognition, and environment mutually influence each other"),
            ("self-efficacy", "belief in one's ability to execute actions for specific outcomes"),
            ("projective test", "ambiguous stimulus task intended to reveal underlying motives"),
            ("self-report inventory", "structured questionnaire for personality assessment"),
            ("person-situation debate", "question of trait consistency versus situational influence"),
            ("temperament", "early-appearing emotional reactivity and regulation tendencies"),
        ],
        "scenarios": [
            "predicting teamwork outcomes from trait profiles",
            "therapy planning with psychodynamic and humanistic perspectives",
            "student confidence shifts after mastery experiences",
            "gene-environment links in temperament trajectories",
            "comparing personality test validity in hiring",
            "integrating multi-method assessment reports",
            "AP-style synthesis about personality stability and change",
        ],
        "misconceptions": [
            "Traits summarize tendencies, not fixed behaviors in every context.",
            "Projective methods can be clinically useful but generally have weaker psychometrics than many inventories.",
            "Personality can show both stability and development across lifespan stages.",
            "No single theory fully explains personality; each emphasizes different mechanisms.",
        ],
    },
    {
        "slug": "prenatal-childhood-development",
        "exportPrefix": "psychPrenatal",
        "filePrefix": "psych-prenatal-childhood-development",
        "title": "Prenatal and Childhood Development",
        "partPlans": [
            "Prenatal Stages and Teratogens",
            "Brain and Motor Development",
            "Cognitive Development Models",
            "Attachment and Socioemotional Development",
            "Language and Learning in Childhood",
            "Applied Development Cases",
            "AP Exam Synthesis",
        ],
        "vocab": [
            ("zygote", "fertilized egg in the earliest stage of development"),
            ("embryo", "developing organism from implantation to about eight weeks"),
            ("fetus", "prenatal stage from roughly nine weeks to birth"),
            ("teratogen", "environmental agent that can harm prenatal development"),
            ("critical period", "time window when specific experiences strongly shape development"),
            ("object permanence", "understanding that objects continue to exist when out of sight"),
            ("secure attachment", "caregiver bond marked by trust and comfort in reunion"),
            ("authoritative parenting", "high warmth with firm, consistent expectations"),
            ("scaffolding", "supporting a child just beyond current independent ability"),
            ("theory of mind", "understanding that others have distinct beliefs and perspectives"),
        ],
        "scenarios": [
            "prenatal care counseling for risk reduction",
            "early intervention planning for delayed milestones",
            "Piaget-style conservation tasks in elementary school",
            "daycare transition and attachment behavior",
            "language growth in bilingual household contexts",
            "developmental case data interpretation",
            "AP synthesis on developmental mechanisms",
        ],
        "misconceptions": [
            "Development is not strictly linear; domains can progress at different rates.",
            "Attachment quality reflects patterns over time, not one isolated event.",
            "Cognitive stages describe trends, but individual variation is expected.",
            "Early adversity raises risk but does not guarantee poor outcomes.",
        ],
    },
    {
        "slug": "psychological-disorders-overview",
        "exportPrefix": "psychDisorders",
        "filePrefix": "psych-psychological-disorders-overview",
        "title": "Psychological Disorders Overview",
        "partPlans": [
            "Defining and Classifying Disorders",
            "Anxiety and Trauma-Related Disorders",
            "Obsessive-Compulsive and Related Disorders",
            "Somatic and Dissociative Disorders",
            "Risk, Resilience, and Cultural Context",
            "Case Conceptualization and Data",
            "AP Exam Synthesis",
        ],
        "vocab": [
            ("diagnostic criteria", "standardized symptom and duration requirements for diagnosis"),
            ("reliability", "consistency of diagnostic judgments across clinicians or time"),
            ("validity", "extent to which a diagnosis captures a distinct clinical condition"),
            ("anxiety disorder", "disorder characterized by excessive fear or anxiety and related behaviors"),
            ("PTSD", "trauma-related disorder involving intrusion, avoidance, and hyperarousal patterns"),
            ("obsession", "intrusive, unwanted thought that causes distress"),
            ("compulsion", "repetitive behavior performed to reduce distress or prevent feared outcomes"),
            ("dissociation", "disruption in integration of consciousness, memory, or identity"),
            ("biopsychosocial model", "framework integrating biological, psychological, and social influences"),
            ("stigma", "social devaluation linked to a condition or identity"),
        ],
        "scenarios": [
            "initial intake decisions in a community clinic",
            "differentiating panic symptoms from medical conditions",
            "treatment planning for OCD symptom cycles",
            "evaluating trauma exposure and functional impairment",
            "cultural factors influencing symptom expression",
            "interpreting prevalence and comorbidity data",
            "AP-style analysis of diagnostic dilemmas",
        ],
        "misconceptions": [
            "A diagnosis requires distress or impairment, not just occasional symptoms.",
            "Diagnostic categories guide treatment but do not capture every individual nuance.",
            "Cultural context shapes symptom interpretation and help-seeking behavior.",
            "Comorbidity is common and should influence case formulation.",
        ],
    },
    {
        "slug": "retrieval-forgetting",
        "exportPrefix": "psychRetrieval",
        "filePrefix": "psych-retrieval-forgetting",
        "title": "Retrieval and Forgetting",
        "partPlans": [
            "Retrieval Cues and Context",
            "Forgetting Curves and Interference",
            "Reconstruction and Memory Distortion",
            "Eyewitness and Applied Memory",
            "Improving Retention and Recall",
            "Data Interpretation Workshop",
            "AP Exam Synthesis",
        ],
        "vocab": [
            ("retrieval cue", "stimulus that helps access stored information"),
            ("encoding specificity", "retrieval is best when cues match encoding conditions"),
            ("state-dependent memory", "recall improves when internal state matches learning state"),
            ("proactive interference", "old learning disrupts new learning"),
            ("retroactive interference", "new learning disrupts old memories"),
            ("tip-of-the-tongue", "temporary inability to retrieve known information"),
            ("reconstructive memory", "remembering by rebuilding details from fragments and schemas"),
            ("misinformation effect", "post-event information alters memory reports"),
            ("retrieval practice", "active recall used to strengthen later remembering"),
            ("desirable difficulties", "challenging learning conditions that improve long-term retention"),
        ],
        "scenarios": [
            "students forgetting formulas between units",
            "language learning with overlapping vocabulary",
            "witness interviews after a traffic accident",
            "study condition matching for exam preparation",
            "classroom interventions using low-stakes quizzes",
            "interpreting forgetting curve datasets",
            "AP synthesis on memory reliability",
        ],
        "misconceptions": [
            "Forgetting is not always decay; retrieval competition and cue mismatch are common causes.",
            "Confidence in a memory report does not guarantee accuracy.",
            "Repeated testing can outperform repeated rereading for long-term recall.",
            "Distortion can emerge from normal reconstruction, not intentional lying.",
        ],
    },
    {
        "slug": "sensation-sensory-processing",
        "exportPrefix": "psychSensation",
        "filePrefix": "psych-sensation-sensory-processing",
        "title": "Sensation and Sensory Processing",
        "partPlans": [
            "Thresholds and Signal Detection",
            "Vision and Audition Foundations",
            "Somatosensory and Chemical Senses",
            "Top-Down and Bottom-Up Processing",
            "Attention and Perceptual Limits",
            "Applied Cases and Experimental Data",
            "AP Exam Synthesis",
        ],
        "vocab": [
            ("sensation", "detection of physical energy by sensory receptors"),
            ("transduction", "conversion of physical stimulus energy into neural signals"),
            ("absolute threshold", "minimum stimulus intensity detected 50% of the time"),
            ("difference threshold", "smallest detectable difference between two stimuli"),
            ("signal detection theory", "framework separating sensitivity from response bias under uncertainty"),
            ("selective attention", "focusing cognitive resources on relevant input"),
            ("bottom-up processing", "analysis that begins with sensory features"),
            ("top-down processing", "perception shaped by expectations and prior knowledge"),
            ("sensory adaptation", "reduced sensitivity to constant stimulation"),
            ("just noticeable difference", "minimum change needed to notice a difference"),
        ],
        "scenarios": [
            "auditory alerts in a noisy hospital setting",
            "screen brightness judgments across contexts",
            "taste and smell changes during illness",
            "driving while filtering irrelevant distractions",
            "attention lapses in long monitoring tasks",
            "interpreting psychophysics experiment outputs",
            "AP synthesis using sensation and perception concepts",
        ],
        "misconceptions": [
            "Sensation and perception are related but distinct processes.",
            "Missed signals can reflect response criterion shifts, not only poor sensory ability.",
            "Adaptation reduces awareness of constant stimuli while preserving sensitivity to change.",
            "Expectation can bias perception without conscious intent.",
        ],
    },
    {
        "slug": "treatment-therapy",
        "exportPrefix": "psychTreatment",
        "filePrefix": "psych-treatment-therapy",
        "title": "Treatment and Therapy",
        "partPlans": [
            "Treatment Foundations and Ethics",
            "Behavioral and Cognitive-Behavioral Approaches",
            "Humanistic and Psychodynamic Therapies",
            "Biological Treatments",
            "Effectiveness, Alliance, and Culture",
            "Case Planning and Outcome Data",
            "AP Exam Synthesis",
        ],
        "vocab": [
            ("psychotherapy", "structured psychological treatment delivered by a trained professional"),
            ("cognitive restructuring", "identifying and modifying maladaptive thought patterns"),
            ("exposure therapy", "gradual and systematic confrontation of feared stimuli"),
            ("behavior activation", "increasing engagement in rewarding and goal-directed activities"),
            ("therapeutic alliance", "collaborative bond and agreement on goals and tasks"),
            ("client-centered therapy", "humanistic approach emphasizing empathy and unconditional positive regard"),
            ("psychopharmacology", "use of medication to treat psychological symptoms"),
            ("SSRI", "selective serotonin reuptake inhibitor commonly used for mood and anxiety disorders"),
            ("relapse prevention", "strategies that reduce risk of symptom return"),
            ("evidence-based practice", "integration of best research, clinical expertise, and client values"),
        ],
        "scenarios": [
            "first-session planning in an outpatient clinic",
            "panic treatment using exposure hierarchies",
            "depression treatment with behavior activation scheduling",
            "medication management and side-effect monitoring",
            "culture-sensitive adaptations to treatment plans",
            "interpreting symptom scale changes across sessions",
            "AP synthesis on matching interventions to cases",
        ],
        "misconceptions": [
            "Medication and psychotherapy are often complementary rather than mutually exclusive.",
            "Short-term symptom change does not always predict long-term relapse risk.",
            "A strong alliance improves outcomes across many therapy modalities.",
            "Evidence-based practice includes client preferences and context, not only trial averages.",
        ],
    },
]


def stable_rng(*keys: object) -> random.Random:
    seed_material = "::".join(str(k) for k in keys)
    seed = int(hashlib.sha256(seed_material.encode("utf-8")).hexdigest()[:16], 16)
    return random.Random(seed)


def js_string(value: str) -> str:
    escaped = value.replace("\\", "\\\\").replace("'", "\\'")
    return f"'{escaped}'"


def md_template(value: str) -> str:
    return textwrap.dedent(value).strip("\n").replace("`", "'")


def emit_text_section(section_id: str, content: str) -> str:
    return (
        "    {\n"
        f"      id: {js_string(section_id)},\n"
        "      type: 'text' as const,\n"
        "      content: `\n"
        f"{textwrap.indent(content, '      ')}\n"
        "      `\n"
        "    }"
    )


def emit_mc_section(section_id: str, heading: str, questions: List[Dict[str, object]]) -> str:
    q_blocks: List[str] = []
    for q in questions:
        options = ",\n".join(f"              {js_string(opt)}" for opt in q["options"])  # type: ignore[index]
        q_blocks.append(
            "          {\n"
            f"            question: {js_string(str(q['question']))},\n"
            "            options: [\n"
            f"{options}\n"
            "            ],\n"
            f"            correctAnswer: {int(q['correctAnswer'])},\n"
            f"            explanation: {js_string(str(q['explanation']))}\n"
            "          }"
        )

    questions_ts = ",\n".join(q_blocks)
    return (
        "    {\n"
        f"      id: {js_string(section_id)},\n"
        "      type: 'multiple-choice' as const,\n"
        "      content: `\n"
        f"      **{heading}** 🎯\n"
        "      `,\n"
        "      exercise: {\n"
        "        questions: [\n"
        f"{questions_ts}\n"
        "        ]\n"
        "      }\n"
        "    }"
    )


def emit_input_section(
    section_id: str,
    content: str,
    answers: Sequence[str],
    hints: Sequence[str],
    explanation: str,
) -> str:
    answer_ts = ", ".join(js_string(a) for a in answers)
    return (
        "    {\n"
        f"      id: {js_string(section_id)},\n"
        "      type: 'input-boxes' as const,\n"
        "      content: `\n"
        f"{textwrap.indent(content, '      ')}\n"
        "      `,\n"
        "      exercise: {\n"
        "        boxes: 3,\n"
        f"        correctAnswers: [{answer_ts}],\n"
        f"        hint1: {js_string(hints[0])},\n"
        f"        hint2: {js_string(hints[1])},\n"
        f"        hint3: {js_string(hints[2])},\n"
        f"        explanation: {js_string(explanation)}\n"
        "      }\n"
        "    }"
    )


def emit_dropdown_section(
    section_id: str,
    prompts: Sequence[str],
    options: Sequence[Sequence[str]],
    correct_answers: Sequence[str],
    explanation: str,
) -> str:
    dd_blocks: List[str] = []
    for prompt, opts in zip(prompts, options):
        opts_ts = ", ".join(js_string(o) for o in opts)
        dd_blocks.append(
            "          {\n"
            f"            label: {js_string(prompt)},\n"
            f"            options: [{opts_ts}]\n"
            "          }"
        )
    dd_ts = ",\n".join(dd_blocks)
    answers_ts = ", ".join(js_string(a) for a in correct_answers)

    return (
        "    {\n"
        f"      id: {js_string(section_id)},\n"
        "      type: 'dropdown-select' as const,\n"
        "      content: `\n"
        "      **Model Matching** 🔎\n"
        "      `,\n"
        "      exercise: {\n"
        "        dropdowns: [\n"
        f"{dd_ts}\n"
        "        ],\n"
        f"        correctAnswers: [{answers_ts}],\n"
        "        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',\n"
        "        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',\n"
        "        hint3: 'Use the definition language from this part to avoid near-miss terms.',\n"
        f"        explanation: {js_string(explanation)}\n"
        "      }\n"
        "    }"
    )


def rotate_terms(vocab: Sequence[Term], part: int, count: int = 6) -> List[Term]:
    size = len(vocab)
    start = ((part - 1) * 2) % size
    return [vocab[(start + i) % size] for i in range(count)]


def build_intro(topic: Dict[str, object], part: int, terms: Sequence[Term]) -> str:
    title = str(topic["title"])
    part_title = str(topic["partPlans"][(part - 1) % 7])  # type: ignore[index]
    scenario = str(topic["scenarios"][(part - 1) % 7])  # type: ignore[index]

    t1, d1 = terms[0]
    t2, d2 = terms[1]
    t3, d3 = terms[2]

    return md_template(
        f"""
# 🧠 {title}

**Part {part} of 7 — {part_title}**

In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

### Core Definitions
- **{t1}**: {d1}
- **{t2}**: {d2}
- **{t3}**: {d3}

### Concrete Real-World Example
A team is studying {scenario}. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

### Why This Matters
Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
        """
    )


def build_deep_dive(topic: Dict[str, object], part: int, terms: Sequence[Term]) -> str:
    scenario = str(topic["scenarios"][(part - 1) % 7])  # type: ignore[index]
    rows = []
    for idx in range(4):
        term, definition = terms[idx]
        evidence = [
            "experimental manipulation with random assignment",
            "longitudinal trend with repeated measurement",
            "cross-sectional comparison with matched groups",
            "mixed-method evidence combining survey and behavioral indicators",
        ][idx]
        limitation = [
            "possible demand characteristics",
            "third-variable risk in natural settings",
            "limited generalizability across cultures",
            "measurement validity depends on construct quality",
        ][idx]
        rows.append((term, definition, evidence, limitation))

    table_lines = [
        "| Theory / Concept | Core claim | Typical evidence | Common limitation |",
        "|---|---|---|---|",
    ]
    for term, definition, evidence, limitation in rows:
        table_lines.append(f"| {term} | {definition} | {evidence} | {limitation} |")

    return md_template(
        f"""
## Deep Dive: Comparing Explanations with Evidence

When analyzing {scenario}, the best interpretation ties a clear psychological mechanism to measurable evidence.

{os.linesep.join(table_lines)}

### Interpretation Strategy
1. Name the mechanism before describing outcomes.
2. Match the claim to the strongest available evidence type.
3. Acknowledge one limitation and explain whether it changes the conclusion.

This structure helps you earn reasoning points on free-response and avoid vague claims.
        """
    )


def make_mcq_concept(topic: Dict[str, object], part: int, terms: Sequence[Term]) -> List[Dict[str, object]]:
    rng = stable_rng(topic["slug"], part, "mcq-concept")
    t_main, d_main = terms[0]
    t_alt1, _ = terms[1]
    t_alt2, _ = terms[2]
    t_alt3, _ = terms[3]
    scenario = str(topic["scenarios"][(part - 1) % 7])  # type: ignore[index]

    options1 = [t_main, t_alt1, t_alt2, t_alt3]
    rng.shuffle(options1)
    correct1 = options1.index(t_main)

    q1 = {
        "question": f"In a study about {scenario}, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?",
        "options": options1,
        "correctAnswer": correct1,
        "explanation": f"{t_main} is correct because it directly matches this mechanism: {d_main}. The distractors describe related but different processes.",
    }

    t2, d2 = terms[4]
    distractors = [terms[5][0], terms[1][0], terms[2][0]]
    options2 = [t2, *distractors]
    rng.shuffle(options2)
    correct2 = options2.index(t2)
    q2 = {
        "question": "Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?",
        "options": options2,
        "correctAnswer": correct2,
        "explanation": f"{t2} is the strongest match here ({d2}). The other options do not explain both the cue-driven shift and the observed response pattern as directly.",
    }
    return [q1, q2]


def make_input_section(topic: Dict[str, object], part: int, terms: Sequence[Term]) -> Tuple[str, List[str], List[str], str]:
    t1, d1 = terms[0]
    t2, d2 = terms[1]
    t3, d3 = terms[2]
    content = md_template(
        f"""
**Applied Recall (exact term answers)** ✍️

1) Write the concept that matches: {d1}
2) Write the concept that matches: {d2}
3) Write the concept that matches: {d3}

Use the exact vocabulary term from this part.
        """
    )
    answers = [t1, t2, t3]
    hints = [
        f"Starts with: {t1[0].upper()}",
        f"Starts with: {t2[0].upper()}",
        f"Starts with: {t3[0].upper()}",
    ]
    explanation = f"Expected answers: {t1}, {t2}, and {t3}. Each response should use the precise term connected to the definition cue."
    return content, answers, hints, explanation


def make_dropdown_section(topic: Dict[str, object], part: int, terms: Sequence[Term]) -> Tuple[List[str], List[List[str]], List[str], str]:
    rng = stable_rng(topic["slug"], part, "dropdown")
    prompts = [
        f"Select the concept that best matches: {terms[0][1]}",
        f"Select the concept that best matches: {terms[1][1]}",
        f"Select the concept that best matches: {terms[2][1]}",
    ]

    all_terms = [t for t, _ in terms]
    option_sets: List[List[str]] = []
    correct = [terms[0][0], terms[1][0], terms[2][0]]

    for idx in range(3):
        correct_term = correct[idx]
        distractors = [t for t in all_terms if t != correct_term]
        rng.shuffle(distractors)
        opts = [correct_term, distractors[0], distractors[1], distractors[2]]
        rng.shuffle(opts)
        option_sets.append(opts)

    explanation = (
        f"Correct matches are {correct[0]}, {correct[1]}, and {correct[2]}. "
        "These choices align with the mechanism-language in each definition, not just broad topic similarity."
    )
    return prompts, option_sets, correct, explanation


def build_misconceptions_and_strategy(topic: Dict[str, object], part: int) -> str:
    misconceptions: Sequence[str] = topic["misconceptions"]  # type: ignore[assignment]
    scenario = str(topic["scenarios"][(part - 1) % 7])  # type: ignore[index]

    return md_template(
        f"""
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- {misconceptions[0]}
- {misconceptions[1]}
- {misconceptions[2]}
- {misconceptions[3]}

### AP Strategy Moves
- Define the target concept in one precise sentence before giving examples.
- In scenario questions about {scenario}, identify the manipulated variable and measured outcome.
- Use one competing explanation and explain why it is weaker.
- If data are provided, mention trend direction and at least one design limitation.

This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
        """
    )


def make_applied_mcq(topic: Dict[str, object], part: int, terms: Sequence[Term]) -> List[Dict[str, object]]:
    rng = stable_rng(topic["slug"], part, "applied")
    scenario = str(topic["scenarios"][(part - 1) % 7])  # type: ignore[index]

    correct_term_1, def1 = terms[3]
    candidates_1 = [correct_term_1, terms[0][0], terms[1][0], terms[2][0]]
    rng.shuffle(candidates_1)
    answer_1 = candidates_1.index(correct_term_1)

    q1 = {
        "question": f"A team investigating {scenario} finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?",
        "options": candidates_1,
        "correctAnswer": answer_1,
        "explanation": f"{correct_term_1} is best because it reflects this mechanism ({def1}). The other options describe different levels of explanation or related constructs.",
    }

    correct_term_2, def2 = terms[4]
    candidates_2 = [correct_term_2, terms[5][0], terms[1][0], terms[2][0]]
    rng.shuffle(candidates_2)
    answer_2 = candidates_2.index(correct_term_2)

    q2 = {
        "question": "After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?",
        "options": candidates_2,
        "correctAnswer": answer_2,
        "explanation": f"{correct_term_2} is the strongest interpretation because it maps to the measured pattern and proposed mechanism: {def2}. Good AP reasoning also notes alternative explanations and design limits.",
    }

    return [q1, q2]


def build_sections(topic: Dict[str, object], part: int) -> List[str]:
    vocab: Sequence[Term] = topic["vocab"]  # type: ignore[assignment]
    terms = rotate_terms(vocab, part, count=6)
    slug = str(topic["slug"])
    section_base = f"{slug}-p{part}"

    intro = build_intro(topic, part, terms)
    concept_mcq = make_mcq_concept(topic, part, terms)
    deep = build_deep_dive(topic, part, terms)
    input_content, answers, hints, input_expl = make_input_section(topic, part, terms)
    dd_prompts, dd_options, dd_correct, dd_expl = make_dropdown_section(topic, part, terms)
    strategy = build_misconceptions_and_strategy(topic, part)
    applied_mcq = make_applied_mcq(topic, part, terms)

    sections = [
        emit_text_section(f"{section_base}-s1-intro", intro),
        emit_mc_section(f"{section_base}-s2-check", "Concept Check", concept_mcq),
        emit_text_section(f"{section_base}-s3-deep", deep),
        emit_input_section(f"{section_base}-s4-input", input_content, answers, hints, input_expl),
        emit_dropdown_section(f"{section_base}-s5-dropdown", dd_prompts, dd_options, dd_correct, dd_expl),
        emit_text_section(f"{section_base}-s6-strategy", strategy),
        emit_mc_section(f"{section_base}-s7-applied", "Applied Scenarios", applied_mcq),
    ]
    return sections


def render_topic_part(topic: Dict[str, object], part: int) -> str:
    export_prefix = str(topic["exportPrefix"])
    slug = str(topic["slug"])
    sections = build_sections(topic, part)
    sections_ts = ",\n".join(sections)

    body = (
        f"export const {export_prefix}Part{part}Data = {{\n"
        f"  topicSlug: {js_string(slug)},\n"
        "  sections: [\n"
        f"{sections_ts}\n"
        "  ]\n"
        "}\n"
    )
    return body


def write_topic(topic: Dict[str, object]) -> Tuple[int, int]:
    file_prefix = str(topic["filePrefix"])
    files_written = 0
    total_lines = 0

    for part in range(1, 8):
        file_name = f"{file_prefix}-part{part}.ts"
        out_path = os.path.join(OUT_DIR, file_name)
        content = render_topic_part(topic, part)

        with open(out_path, "w", encoding="utf-8") as handle:
            handle.write(content)

        line_count = len(content.splitlines())
        total_lines += line_count
        files_written += 1
        print(f"  ✓ wrote {file_name} ({line_count} lines)")

    return files_written, total_lines


def main() -> None:
    os.makedirs(OUT_DIR, exist_ok=True)

    print("Rewriting psychology interactive lessons...")
    print(f"Output directory: {OUT_DIR}")

    topics_count = 0
    file_count = 0
    line_count = 0

    for topic in TOPICS:
        topics_count += 1
        print(f"\nTopic: {topic['slug']}")
        written, lines = write_topic(topic)
        file_count += written
        line_count += lines

    expected = len(TOPICS) * 7
    print("\nSummary")
    print(f"- Topics processed: {topics_count}")
    print(f"- Files written: {file_count}")
    print(f"- Expected files: {expected}")
    print(f"- Total lines written: {line_count}")

    if file_count == expected:
        print("- Status: OK (all files generated)")
    else:
        print("- Status: WARNING (file count mismatch)")


if __name__ == "__main__":
    main()
