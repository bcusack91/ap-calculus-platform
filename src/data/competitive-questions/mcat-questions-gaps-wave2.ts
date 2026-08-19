/**
 * MCAT competitive bank — wave-2 gap fill: psychological disorders (AAMC 7A),
 * waves & sound (4D), atomic/nuclear phenomena (4E), and the fluids top-up
 * after the fluids-waves subtopic split. Gated by
 * scripts/import-question-seeds.ts (KaTeX, key balance, dup stems, no
 * letter-position references). Explanations reference options by CONTENT.
 */
import type { McatBankQuestion } from './mcat-question-types'

export const gapsWave2Questions: McatBankQuestion[] = [
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "A diagnosis of major depressive disorder requires depressed mood or anhedonia lasting at least:",
    "options": [
      "2 days",
      "2 weeks",
      "6 months",
      "1 year"
    ],
    "correctAnswer": 1,
    "explanation": "MDD requires a 2-week episode with five or more symptoms including depressed mood or anhedonia. The 6-month duration belongs to generalized anxiety disorder, and 2 years defines persistent depressive disorder (dysthymia).",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "The monoamine hypothesis attributes depression to:",
    "options": [
      "Excess dopamine in the mesolimbic pathway",
      "Overactive GABA transmission",
      "Deficient serotonin and norepinephrine signaling",
      "Elevated acetylcholine in the hippocampus"
    ],
    "correctAnswer": 2,
    "explanation": "The monoamine hypothesis holds that depression involves reduced serotonin and norepinephrine activity, which is why reuptake inhibitors help. Excess mesolimbic dopamine is the classic account of schizophrenia's positive symptoms, not depression.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "Epidemiologically, major depressive disorder is diagnosed:",
    "options": [
      "About twice as often in women as in men",
      "Equally in both sexes",
      "About twice as often in men",
      "Almost exclusively in older adults"
    ],
    "correctAnswer": 0,
    "explanation": "MDD shows a roughly 2:1 female-to-male prevalence ratio beginning in adolescence. Equal prevalence between the sexes better describes bipolar disorder, not major depression.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "SSRIs block serotonin reuptake within hours, yet mood improves only after weeks. This delay suggests their benefit depends on:",
    "options": [
      "Immediate serotonin depletion",
      "Placebo effects alone",
      "Direct dopamine blockade",
      "Slower downstream receptor and neuroplastic changes"
    ],
    "correctAnswer": 3,
    "explanation": "The therapeutic lag implies that adaptive changes such as receptor downregulation and increased neurogenesis, not the acute rise in synaptic serotonin, drive improvement. Serotonin is elevated, not depleted, so immediate depletion contradicts the drug's mechanism.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "A diagnosis of bipolar I disorder requires:",
    "options": [
      "At least one depressive episode",
      "At least one manic episode",
      "Both hypomania and depression",
      "Psychotic features"
    ],
    "correctAnswer": 1,
    "explanation": "A single manic episode is sufficient for bipolar I; a depressive episode is common but not required. Hypomania plus major depression is the definition of bipolar II, not bipolar I.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "A patient has had episodes of elevated mood and energy lasting several days that never required hospitalization, plus a past major depressive episode. The most likely diagnosis is:",
    "options": [
      "Bipolar I disorder",
      "Cyclothymic disorder",
      "Bipolar II disorder",
      "Major depressive disorder"
    ],
    "correctAnswer": 2,
    "explanation": "Hypomania (shorter, less impairing, no hospitalization or psychosis) plus at least one major depressive episode defines bipolar II. Bipolar I would require full mania with marked impairment, which this history lacks.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "Which sleep finding is most characteristic of a manic episode?",
    "options": [
      "Decreased need for sleep with sustained energy",
      "Insomnia with daytime fatigue",
      "Hypersomnia",
      "Normal sleep with vivid dreams"
    ],
    "correctAnswer": 0,
    "explanation": "Manic patients feel rested and energetic after little sleep, which distinguishes mania from insomnia, where the person wants sleep and feels exhausted without it.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "Which of the following is a positive symptom of schizophrenia?",
    "options": [
      "Flat affect",
      "Avolition",
      "Poverty of speech",
      "Auditory hallucinations"
    ],
    "correctAnswer": 3,
    "explanation": "Positive symptoms are additions to normal experience, such as hallucinations and delusions. Flat affect, avolition, and poverty of speech are negative symptoms, reflecting a loss of normal function.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "Negative symptoms of schizophrenia include:",
    "options": [
      "Delusions of grandeur",
      "Flat affect and lack of motivation",
      "Disorganized speech",
      "Hallucinations"
    ],
    "correctAnswer": 1,
    "explanation": "Negative symptoms represent diminished normal functions: blunted emotion, avolition, and social withdrawal. Delusions, hallucinations, and disorganized speech are positive symptoms because they add abnormal experiences.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "The dopamine hypothesis links the positive symptoms of schizophrenia to:",
    "options": [
      "Excess dopamine activity in the mesolimbic pathway",
      "Serotonin deficiency in the raphe nuclei",
      "GABA excess in the cortex",
      "Acetylcholine loss in the basal forebrain"
    ],
    "correctAnswer": 0,
    "explanation": "Overactive mesolimbic dopamine transmission is the classic explanation for hallucinations and delusions, supported by the efficacy of dopamine-blocking antipsychotics. Acetylcholine loss in the basal forebrain is associated with Alzheimer disease, not psychosis.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "Negative and cognitive symptoms of schizophrenia are best explained by:",
    "options": [
      "Excess dopamine throughout the brain",
      "Cerebellar degeneration",
      "Reduced dopamine activity in the mesocortical (prefrontal) pathway",
      "Overactive amygdala firing"
    ],
    "correctAnswer": 2,
    "explanation": "The refined dopamine hypothesis pairs mesolimbic hyperactivity (positive symptoms) with mesocortical hypoactivity (negative and cognitive symptoms). Globally excessive dopamine cannot explain why D2 blockers help positive symptoms but do little for negative ones.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "Typical (first-generation) antipsychotics act primarily by:",
    "options": [
      "Enhancing serotonin release",
      "Blocking dopamine D2 receptors",
      "Activating GABA receptors",
      "Inhibiting norepinephrine reuptake"
    ],
    "correctAnswer": 1,
    "explanation": "First-generation agents like haloperidol antagonize D2 receptors, which relieves positive symptoms but produces motor side effects via the nigrostriatal pathway. Serotonin action is a feature added by atypical antipsychotics, not the core mechanism of typicals.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "Generalized anxiety disorder is defined by excessive worry about many areas of life lasting at least:",
    "options": [
      "2 weeks",
      "1 month",
      "6 months",
      "2 years"
    ],
    "correctAnswer": 2,
    "explanation": "GAD requires uncontrollable, wide-ranging worry on most days for 6 months or more. The 1-month marker belongs to panic disorder's worry-about-attacks criterion, and 2 weeks defines a major depressive episode.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "A patient has recurrent unexpected panic attacks and a month of persistent worry about having more attacks. The diagnosis is:",
    "options": [
      "Panic disorder",
      "Generalized anxiety disorder",
      "Specific phobia",
      "Social anxiety disorder"
    ],
    "correctAnswer": 0,
    "explanation": "Recurrent unexpected attacks plus a month of anticipatory worry or behavior change defines panic disorder. GAD involves broad chronic worry, not discrete attacks arising out of the blue.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "A student avoids class presentations because he fears others will judge him harshly. This fear of scrutiny is most characteristic of:",
    "options": [
      "Specific phobia",
      "Panic disorder",
      "Agoraphobia",
      "Social anxiety disorder"
    ],
    "correctAnswer": 3,
    "explanation": "Social anxiety disorder centers on fear of negative evaluation in social or performance situations. A specific phobia targets a particular object or situation (heights, spiders), not judgment by other people.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "The racing heart, sweating, and shortness of breath of a panic attack reflect activation of the:",
    "options": [
      "Parasympathetic nervous system",
      "Sympathetic nervous system",
      "Enteric nervous system",
      "Somatic motor system"
    ],
    "correctAnswer": 1,
    "explanation": "Panic attacks are surges of sympathetic (fight-or-flight) arousal, often with fear of dying or losing control. Parasympathetic activity produces the opposite rest-and-digest profile, slowing the heart rather than racing it.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "In obsessive-compulsive disorder, compulsions are best described as:",
    "options": [
      "Repetitive behaviors performed to reduce anxiety from obsessions",
      "Intrusive unwanted thoughts",
      "Pleasant habits",
      "Delusional beliefs"
    ],
    "correctAnswer": 0,
    "explanation": "Compulsions are rituals (checking, washing, counting) that temporarily relieve the distress of obsessions, which are the intrusive thoughts themselves. The relief-driven, unwanted quality distinguishes compulsions from pleasant habits.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "A patient spends hours daily preoccupied with a facial flaw that others say is minimal or unobservable. The most likely diagnosis is:",
    "options": [
      "Anorexia nervosa",
      "Delusional disorder",
      "Body dysmorphic disorder",
      "Social anxiety disorder"
    ],
    "correctAnswer": 2,
    "explanation": "Body dysmorphic disorder involves preoccupation with a perceived appearance defect plus repetitive behaviors like mirror checking, and it is classified with the obsessive-compulsive disorders. Anorexia requires the concern to center on body weight and involve restricted intake.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "Neuroimaging in OCD most consistently shows hyperactivity in the:",
    "options": [
      "Occipital cortex",
      "Cerebellum",
      "Hippocampus",
      "Orbitofrontal cortex and caudate nucleus"
    ],
    "correctAnswer": 3,
    "explanation": "OCD is linked to an overactive cortico-striato-thalamo-cortical loop involving the orbitofrontal cortex and caudate. The hippocampus is a tempting distractor because it is central to memory disorders and depression findings, not the OCD circuit.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "Trauma-related symptoms lasting three weeks after a car accident, then resolving, would be diagnosed as:",
    "options": [
      "PTSD",
      "Acute stress disorder",
      "Adjustment disorder with anxiety",
      "Panic disorder"
    ],
    "correctAnswer": 1,
    "explanation": "Trauma symptoms lasting 3 days to 1 month define acute stress disorder; PTSD requires the symptoms to persist beyond one month. The duration, not the symptom content, separates the two diagnoses.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "Which symptom cluster is characteristic of PTSD?",
    "options": [
      "Intrusive re-experiencing, avoidance, and hyperarousal",
      "Compulsions and obsessions",
      "Mania alternating with depression",
      "Hallucinations with flat affect"
    ],
    "correctAnswer": 0,
    "explanation": "PTSD combines intrusions (flashbacks, nightmares), avoidance of reminders, negative mood changes, and hyperarousal such as exaggerated startle. Obsessions and compulsions belong to OCD, which is no longer grouped with trauma disorders.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "A patient with minimal physical symptoms is consumed by fear that she has a serious undiagnosed disease despite repeated normal workups. This best fits:",
    "options": [
      "Somatic symptom disorder",
      "Conversion disorder",
      "Illness anxiety disorder",
      "Factitious disorder"
    ],
    "correctAnswer": 2,
    "explanation": "Illness anxiety disorder is defined by preoccupation with having a disease when somatic symptoms are absent or mild. Somatic symptom disorder is the closer trap, but it requires distressing physical symptoms to be actually present and prominent.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "After witnessing a violent event, a patient develops sudden blindness, yet ophthalmologic exams and reflexes are normal. The most likely diagnosis is:",
    "options": [
      "Malingering",
      "Conversion disorder (functional neurological symptom disorder)",
      "Illness anxiety disorder",
      "Schizophrenia"
    ],
    "correctAnswer": 1,
    "explanation": "Conversion disorder features neurological symptoms such as blindness or paralysis that are incompatible with recognized pathology, often following a stressor and produced without conscious intent. Malingering requires deliberate faking for external gain, which is not indicated here.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "Dissociative identity disorder is most strongly associated with:",
    "options": [
      "Adult-onset head trauma",
      "High socioeconomic status",
      "Genetic dopamine mutations",
      "Severe, chronic childhood trauma"
    ],
    "correctAnswer": 3,
    "explanation": "The presence of two or more distinct personality states with memory gaps is understood as a dissociative response to overwhelming early trauma. Head trauma causes amnesia through tissue damage, not the distinct identity states seen in this disorder.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "A patient describes feeling detached from his own body, as if watching himself in a movie, while knowing the experience is not real. This describes:",
    "options": [
      "Depersonalization",
      "A delusion",
      "A hallucination",
      "Dissociative amnesia"
    ],
    "correctAnswer": 0,
    "explanation": "Depersonalization is a feeling of detachment from oneself with intact reality testing, which is exactly why it is not a delusion; a delusional patient would believe the distorted experience is literally true. Derealization is the parallel detachment from surroundings.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "The personality disorder cluster described as odd or eccentric includes:",
    "options": [
      "Borderline, antisocial, and histrionic",
      "Avoidant, dependent, and obsessive-compulsive",
      "Paranoid, schizoid, and schizotypal",
      "Narcissistic and borderline only"
    ],
    "correctAnswer": 2,
    "explanation": "The odd/eccentric cluster contains paranoid (distrust), schizoid (detachment), and schizotypal (odd beliefs) personality disorders. Borderline, antisocial, and histrionic belong to the dramatic/erratic cluster, defined by emotional and impulsive behavior.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "Antisocial, borderline, histrionic, and narcissistic personality disorders share which cluster theme?",
    "options": [
      "Anxious and fearful behavior",
      "Dramatic, emotional, and erratic behavior",
      "Odd and eccentric behavior",
      "Psychotic behavior"
    ],
    "correctAnswer": 1,
    "explanation": "These four form the dramatic/erratic cluster, marked by emotional volatility and impulsivity. Anxious/fearful describes the cluster containing avoidant, dependent, and obsessive-compulsive personality disorders, whose members are inhibited rather than erratic.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "Unstable relationships, intense fear of abandonment, and alternating idealization and devaluation of others characterize:",
    "options": [
      "Schizoid personality disorder",
      "Obsessive-compulsive personality disorder",
      "Paranoid personality disorder",
      "Borderline personality disorder"
    ],
    "correctAnswer": 3,
    "explanation": "Borderline personality disorder features abandonment fear, identity instability, and splitting between idealizing and devaluing others. Paranoid personality disorder also strains relationships, but through pervasive distrust rather than fear of being left.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "Both prefer solitude, but a person with avoidant personality disorder differs from one with schizoid personality disorder in that the avoidant person:",
    "options": [
      "Desires relationships but fears rejection",
      "Genuinely prefers to be alone",
      "Has odd magical beliefs",
      "Lacks empathy for others"
    ],
    "correctAnswer": 0,
    "explanation": "Avoidant individuals long for connection but withdraw out of fear of criticism, whereas schizoid individuals are indifferent to relationships and truly prefer solitude. Odd magical thinking points to schizotypal personality disorder, a different diagnosis in the odd/eccentric group.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "Which feature distinguishes anorexia nervosa from bulimia nervosa?",
    "options": [
      "Binge eating",
      "Fear of weight gain",
      "Significantly low body weight",
      "Purging behavior"
    ],
    "correctAnswer": 2,
    "explanation": "Only anorexia requires significantly low body weight; patients with bulimia are typically normal weight or above. Fear of weight gain, bingeing, and purging can appear in both disorders, so they do not separate the diagnoses.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "A normal-weight patient with recurrent binge eating and self-induced vomiting is most at risk for which lab finding?",
    "options": [
      "High blood glucose",
      "Low potassium (hypokalemia)",
      "High hemoglobin",
      "Low sodium only"
    ],
    "correctAnswer": 1,
    "explanation": "Repeated vomiting in bulimia nervosa causes potassium loss and metabolic alkalosis, and hypokalemia can trigger dangerous arrhythmias. Blood glucose elevation is not a feature of purging; it distracts toward diabetes.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "Recurrent episodes of eating unusually large amounts with a sense of loss of control, but WITHOUT vomiting, fasting, or excessive exercise, defines:",
    "options": [
      "Bulimia nervosa",
      "Anorexia nervosa, binge-purge type",
      "Pica",
      "Binge-eating disorder"
    ],
    "correctAnswer": 3,
    "explanation": "Binge-eating disorder involves binges without compensatory behaviors, which is exactly what separates it from bulimia nervosa, where compensation such as purging or fasting is required.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "A diagnosis of ADHD requires that symptoms of inattention or hyperactivity:",
    "options": [
      "Appear in two or more settings, such as home and school",
      "Occur only at school",
      "Begin after age 18",
      "Include hallucinations"
    ],
    "correctAnswer": 0,
    "explanation": "ADHD symptoms must be present in multiple settings and begin before age 12, ruling out problems confined to a single environment. Symptoms appearing only at school suggest a situational or academic issue rather than a pervasive disorder.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "The two core diagnostic domains of autism spectrum disorder are:",
    "options": [
      "Hallucinations and delusions",
      "Inattention and impulsivity",
      "Social communication deficits and restricted, repetitive behaviors",
      "Mood swings and sleep problems"
    ],
    "correctAnswer": 2,
    "explanation": "Autism spectrum disorder requires persistent deficits in social communication plus restricted, repetitive patterns of behavior or interests, with onset in early development. Inattention and impulsivity are the core of ADHD, a frequent comorbid but distinct diagnosis.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "Which finding reflects the HPA-axis abnormality commonly seen in major depression?",
    "options": [
      "Chronically low cortisol",
      "Elevated cortisol that fails to suppress with dexamethasone",
      "Absent ACTH",
      "Elevated insulin"
    ],
    "correctAnswer": 1,
    "explanation": "Many depressed patients show cortisol hypersecretion and non-suppression on the dexamethasone test, indicating impaired negative feedback in the HPA axis. Chronically low cortisol is the pattern more often reported in PTSD, making it the reversed trap.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "Reduced hippocampal volume has been reported in patients with chronic PTSD and depression. A proposed mechanism is:",
    "options": [
      "Excess dopamine release",
      "Demyelination",
      "Cerebellar compensation",
      "Prolonged stress hormone (glucocorticoid) exposure damaging hippocampal neurons"
    ],
    "correctAnswer": 3,
    "explanation": "Sustained glucocorticoid elevation is neurotoxic to the hippocampus, linking chronic stress to the volume loss seen on imaging. Demyelination is the mechanism of disorders like multiple sclerosis, not stress-related hippocampal atrophy.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "Benzodiazepines reduce anxiety by:",
    "options": [
      "Enhancing GABA's inhibitory effect at GABA-A receptors",
      "Blocking dopamine receptors",
      "Increasing serotonin synthesis",
      "Stimulating norepinephrine release"
    ],
    "correctAnswer": 0,
    "explanation": "Benzodiazepines potentiate GABA-A receptor chloride influx, increasing neural inhibition and calming arousal. Stimulating norepinephrine would do the opposite, amplifying the sympathetic symptoms of anxiety.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "Gradual, repeated confrontation with a feared stimulus until anxiety subsides is the core of which treatment, and for which disorder is it most clearly first-line?",
    "options": [
      "Free association; depression",
      "Token economy; schizophrenia",
      "Electroconvulsive therapy; panic disorder",
      "Exposure therapy; specific phobia"
    ],
    "correctAnswer": 3,
    "explanation": "Exposure therapy extinguishes the conditioned fear response and is the treatment of choice for specific phobias. Free association is a psychoanalytic technique aimed at unconscious conflict, not a first-line evidence-based phobia treatment.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "Cognitive behavioral therapy treats depression primarily by:",
    "options": [
      "Uncovering repressed childhood memories",
      "Identifying and restructuring maladaptive thought patterns",
      "Blocking serotonin reuptake",
      "Providing unconditional positive regard alone"
    ],
    "correctAnswer": 1,
    "explanation": "CBT targets distorted automatic thoughts and the behaviors that maintain them, combining cognitive restructuring with behavioral activation. Uncovering repressed memories is the psychodynamic approach, which works from a different theory of symptom origin.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-psych-disorders-mcat",
    "question": "At the synapse, SSRIs increase serotonin signaling by:",
    "options": [
      "Increasing serotonin synthesis in the raphe nuclei",
      "Blocking postsynaptic serotonin receptors",
      "Inhibiting the presynaptic serotonin reuptake transporter",
      "Inhibiting monoamine oxidase"
    ],
    "correctAnswer": 2,
    "explanation": "SSRIs block the presynaptic transporter (SERT), leaving more serotonin in the cleft to act on receptors. Inhibiting monoamine oxidase is the mechanism of MAOIs, which raise monoamines by preventing their breakdown rather than their reuptake.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-physics-mechanics-fluids-mcat",
    "question": "Taking $g = 10\\ \\text{m/s}^2$ and water density $1000\\ \\text{kg/m}^3$, the gauge pressure at the bottom of a 10 m deep freshwater pool is:",
    "options": [
      "1 kPa",
      "10 kPa",
      "50 kPa",
      "100 kPa"
    ],
    "correctAnswer": 3,
    "explanation": "Gauge pressure is $P = \\rho g h = 1000 \\times 10 \\times 10 = 100{,}000$ Pa = 100 kPa. Forgetting one factor of 10 gives 10 kPa; 1 kPa and 50 kPa come from unit slips.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-mechanics-fluids-mcat",
    "question": "A blood pressure reading of 120 mmHg is best interpreted as:",
    "options": [
      "An absolute pressure",
      "A gauge pressure above atmospheric",
      "A pressure below atmospheric",
      "Equivalent to 120 pascals"
    ],
    "correctAnswer": 1,
    "explanation": "Clinical pressures are gauge pressures — measured relative to atmospheric pressure, not absolute. 120 mmHg is about 16 kPa, far more than 120 Pa.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-mechanics-fluids-mcat",
    "question": "An object weighs 5 N in air and displaces water weighing 2 N when fully submerged. Its apparent weight in water is:",
    "options": [
      "1 N",
      "2 N",
      "3 N",
      "7 N"
    ],
    "correctAnswer": 2,
    "explanation": "Apparent weight = true weight − buoyant force = 5 − 2 = 3 N. The buoyant force equals the weight of displaced water (2 N); adding instead of subtracting gives the 7 N trap.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-mechanics-fluids-mcat",
    "question": "A block of density $600\\ \\text{kg/m}^3$ floats in water ($1000\\ \\text{kg/m}^3$). The fraction of its volume submerged is:",
    "options": [
      "30%",
      "40%",
      "50%",
      "60%"
    ],
    "correctAnswer": 3,
    "explanation": "For floating, submerged fraction = object density / fluid density = 600/1000 = 60%. The 40% trap is the fraction ABOVE water.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-mechanics-fluids-mcat",
    "question": "Water flows at 2 m/s through a tube of cross-section $4\\ \\text{cm}^2$ into a section of $2\\ \\text{cm}^2$. The speed in the narrow section is:",
    "options": [
      "1 m/s",
      "2 m/s",
      "4 m/s",
      "8 m/s"
    ],
    "correctAnswer": 2,
    "explanation": "Continuity: $A_1 v_1 = A_2 v_2$, so $v_2 = (4 \\times 2)/2 = 4$ m/s. Halving the area doubles the speed; 1 m/s inverts the ratio.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-mechanics-fluids-mcat",
    "question": "If a pipe's radius is halved while volumetric flow rate is maintained, the flow speed is multiplied by:",
    "options": [
      "0.25",
      "0.5",
      "2",
      "4"
    ],
    "correctAnswer": 3,
    "explanation": "Area scales as $r^2$, so half the radius means one-quarter the area, and continuity requires speed to rise 4-fold. The 0.25 trap is the area factor itself; 2 assumes area scales linearly with radius.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-physics-mechanics-fluids-mcat",
    "question": "In the narrow throat of a Venturi tube, compared with the wide section, the fluid has:",
    "options": [
      "Higher pressure and higher speed",
      "Higher speed and lower pressure",
      "Lower speed and higher pressure",
      "Lower speed and lower pressure"
    ],
    "correctAnswer": 1,
    "explanation": "Continuity forces the speed up in the throat, and Bernoulli's principle then requires the pressure to drop. Faster flow with higher pressure would violate energy conservation along the streamline.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-mechanics-fluids-mcat",
    "question": "Water drains from a hole 5 m below the surface of an open tank. Taking $g = 10\\ \\text{m/s}^2$, the efflux speed is about:",
    "options": [
      "5 m/s",
      "7 m/s",
      "10 m/s",
      "14 m/s"
    ],
    "correctAnswer": 2,
    "explanation": "Torricelli's theorem: $v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 5} = \\sqrt{100} = 10$ m/s. Using $gh$ without the 2 gives about 7 m/s; 14 m/s doubles the correct answer.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-mechanics-fluids-mcat",
    "question": "For laminar flow at a fixed pressure difference, doubling a tube's length changes the volumetric flow rate to:",
    "options": [
      "One quarter",
      "One half",
      "Unchanged",
      "Double"
    ],
    "correctAnswer": 1,
    "explanation": "Poiseuille's law has flow inversely proportional to length, so twice the length halves the flow. Only radius enters to the fourth power; length is a simple inverse.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-mechanics-fluids-mcat",
    "question": "An IV fluid is warmed so its viscosity falls to half its previous value. At the same pressure difference, the flow rate:",
    "options": [
      "Halves",
      "Is unchanged",
      "Doubles",
      "Quadruples"
    ],
    "correctAnswer": 2,
    "explanation": "Poiseuille flow is inversely proportional to viscosity, so half the viscosity doubles the flow. Quadrupling would require viscosity to fall to one quarter.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-mechanics-fluids-mcat",
    "question": "A hydraulic press has input piston area $1\\ \\text{cm}^2$ and output piston area $50\\ \\text{cm}^2$. A 20 N input force produces an output force of:",
    "options": [
      "20 N",
      "100 N",
      "500 N",
      "1000 N"
    ],
    "correctAnswer": 3,
    "explanation": "Pascal's principle: pressure is transmitted equally, so $F_{out} = F_{in} \\times (A_{out}/A_{in}) = 20 \\times 50 = 1000$ N. The 20 N trap ignores the area ratio; 500 N uses a ratio of 25.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-mechanics-fluids-mcat",
    "question": "In an ideal hydraulic lift, the work done by the large output piston compared with the work done on the small input piston is:",
    "options": [
      "Smaller",
      "Equal",
      "Larger",
      "Zero"
    ],
    "correctAnswer": 1,
    "explanation": "Energy is conserved: the output force is larger but the output piston moves proportionally less, so work in equals work out. A hydraulic lift multiplies force, never energy.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-mechanics-fluids-mcat",
    "question": "Mercury has a specific gravity of 13.6. Its density in $\\text{kg/m}^3$ is:",
    "options": [
      "136",
      "1360",
      "13600",
      "136000"
    ],
    "correctAnswer": 2,
    "explanation": "Specific gravity is density relative to water ($1000\\ \\text{kg/m}^3$), so $13.6 \\times 1000 = 13{,}600\\ \\text{kg/m}^3$. The other values are factor-of-ten slips.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-mechanics-fluids-mcat",
    "question": "Equal VOLUMES of two liquids with specific gravities 0.8 and 1.2 are mixed without reacting. The mixture's specific gravity is:",
    "options": [
      "0.80",
      "0.96",
      "1.00",
      "1.20"
    ],
    "correctAnswer": 2,
    "explanation": "With equal volumes, densities average directly: (0.8 + 1.2)/2 = 1.0. The 0.96 trap is the harmonic mean, which applies to equal MASSES, not equal volumes.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-physics-mechanics-fluids-mcat",
    "question": "A stenotic (narrowed) heart valve produces an audible murmur primarily because:",
    "options": [
      "Flow through the narrowing becomes fast and turbulent",
      "Blood viscosity increases in the narrowing",
      "Pressure rises inside the narrowing",
      "Flow momentarily stops at the valve"
    ],
    "correctAnswer": 0,
    "explanation": "The narrowing raises flow speed, pushing the Reynolds number past the turbulence threshold; turbulent flow is noisy. Bernoulli's principle says pressure FALLS in the fast segment, and viscosity is a fluid property that the geometry doesn't change.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-mechanics-fluids-mcat",
    "question": "Which combination most favors turbulent flow?",
    "options": [
      "Large vessel diameter and high flow speed",
      "High viscosity and low speed",
      "Small diameter and low speed",
      "Low fluid density and low speed"
    ],
    "correctAnswer": 0,
    "explanation": "Reynolds number scales with density, speed, and diameter and inversely with viscosity; turbulence appears when it is large. High viscosity and low speed both push the flow toward laminar.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-physics-mechanics-fluids-mcat",
    "question": "A sphere falling through a viscous fluid at terminal speed has an acceleration of:",
    "options": [
      "Zero",
      "g downward",
      "g upward",
      "A steadily increasing value"
    ],
    "correctAnswer": 0,
    "explanation": "At terminal speed the viscous drag plus buoyancy exactly balance gravity, so net force and acceleration are zero and the speed stays constant.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-mechanics-fluids-mcat",
    "question": "By Laplace's law, if two connected alveoli shared the same surface tension, the smaller alveolus would tend to:",
    "options": [
      "Empty into the larger one",
      "Expand at the larger one's expense",
      "Maintain exactly equal pressure with it",
      "Collapse the larger one"
    ],
    "correctAnswer": 0,
    "explanation": "Collapsing pressure scales as surface tension over radius, so the smaller alveolus has HIGHER internal pressure and would empty into the larger — the instability pulmonary surfactant prevents by lowering surface tension more in small alveoli.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-physics-mechanics-fluids-mcat",
    "question": "Standard atmospheric pressure supports a mercury column of about:",
    "options": [
      "7.6 mm",
      "76 mm",
      "380 mm",
      "760 mm"
    ],
    "correctAnswer": 3,
    "explanation": "One atmosphere is 760 mmHg — the height at which the mercury column's weight per area equals atmospheric pressure. 380 mm would be half an atmosphere.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-mechanics-fluids-mcat",
    "question": "A rock is fully submerged and then lowered twice as deep in a lake (water is essentially incompressible). The buoyant force on it:",
    "options": [
      "Doubles",
      "Is essentially unchanged",
      "Halves",
      "Falls to zero"
    ],
    "correctAnswer": 1,
    "explanation": "Buoyant force equals the weight of displaced water, which depends on the rock's volume and the water's density — neither changes with depth in an incompressible fluid. Pressure rises with depth, but the pressure DIFFERENCE across the rock is what lifts it.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-mechanics-fluids-mcat",
    "question": "A wide beaker and a narrow cylinder are filled with water to the same depth. The pressure at the bottom is:",
    "options": [
      "Equal in both",
      "Greater in the wide beaker",
      "Greater in the narrow cylinder",
      "Determined by the total water volume"
    ],
    "correctAnswer": 0,
    "explanation": "Hydrostatic pressure depends only on depth and fluid density ($\\rho g h$), not on container shape or the amount of fluid — the hydrostatic paradox.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-mechanics-fluids-mcat",
    "question": "An IV bag delivers 300 mL of saline in 60 seconds. The average volumetric flow rate is:",
    "options": [
      "0.5 mL/s",
      "5 mL/s",
      "50 mL/s",
      "300 mL/s"
    ],
    "correctAnswer": 1,
    "explanation": "Flow rate = volume/time = 300/60 = 5 mL/s. The other choices are factor-of-ten errors.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-mechanics-fluids-mcat",
    "question": "Water moves at constant speed up a vertical pipe of uniform diameter. Compared with the bottom, the pressure at the top is:",
    "options": [
      "Higher",
      "Lower",
      "The same",
      "Exactly zero"
    ],
    "correctAnswer": 1,
    "explanation": "With speed constant (uniform diameter), Bernoulli's equation reduces to the hydrostatic trade: pressure decreases by $\\rho g \\Delta h$ as height increases. Pushing fluid uphill costs pressure.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-mechanics-fluids-mcat",
    "question": "Water escapes from a small hole 1.8 m below the free surface of an open tank. Taking $g = 10\\ \\text{m/s}^2$, the exit speed is:",
    "options": [
      "6 m/s",
      "12 m/s",
      "18 m/s",
      "36 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "$v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 1.8} = \\sqrt{36} = 6$ m/s. The 36 trap is $2gh$ before taking the square root.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-mechanics-fluids-mcat",
    "question": "A crown weighs 60 N in air and 54 N fully submerged in water. Its specific gravity is:",
    "options": [
      "0.1",
      "1.1",
      "6",
      "10"
    ],
    "correctAnswer": 3,
    "explanation": "Buoyant force = 60 − 54 = 6 N = weight of displaced water. Specific gravity = weight in air / buoyant force = 60/6 = 10 (roughly silver, not gold's 19.3). Dividing the wrong way gives 0.1.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "After three half-lives, the fraction of a radioactive sample remaining is:",
    "options": [
      "1/16",
      "1/8",
      "1/4",
      "1/3"
    ],
    "correctAnswer": 1,
    "explanation": "Each half-life halves the amount: $(1/2)^3 = 1/8$. The 1/16 trap uses four half-lives; 1/3 confuses halving with dividing by the number of half-lives.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "Technetium-99m has a half-life of 6 hours. The fraction of an injected dose remaining after 24 hours is:",
    "options": [
      "1/16",
      "1/8",
      "1/4",
      "1/2"
    ],
    "correctAnswer": 0,
    "explanation": "24 hours is four half-lives, so $(1/2)^4 = 1/16$ remains. Counting only three half-lives gives the 1/8 trap.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "An isotope has a half-life of 2 hours. Starting from 80 mg, the amount left after 6 hours is:",
    "options": [
      "10 mg",
      "20 mg",
      "40 mg",
      "60 mg"
    ],
    "correctAnswer": 0,
    "explanation": "Six hours is three half-lives: 80 → 40 → 20 → 10 mg. The 60 mg trap subtracts linearly (80 minus a quarter per interval) instead of halving.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "A sample's activity has fallen to 1/32 of its initial value. If the half-life is 4 days, the elapsed time is:",
    "options": [
      "8 days",
      "16 days",
      "20 days",
      "32 days"
    ],
    "correctAnswer": 2,
    "explanation": "$1/32 = (1/2)^5$, so five half-lives have passed: $5 \\times 4 = 20$ days. The 32-day trap multiplies half-life by the denominator's value rather than the number of halvings.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "Alpha decay changes the parent nuclide by:",
    "options": [
      "Z down 2 and A down 4",
      "Z down 4 and A down 2",
      "Z up 2 with A unchanged",
      "Neither Z nor A changes"
    ],
    "correctAnswer": 0,
    "explanation": "An alpha particle is a helium-4 nucleus: two protons and two neutrons leave, so atomic number drops by 2 and mass number by 4. Swapping the two drops is the classic trap.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "In beta-minus decay, a neutron converts to a proton. The nuclide's numbers change by:",
    "options": [
      "Z decreases by 1",
      "Z increases by 1 with A unchanged",
      "A increases by 1",
      "A decreases by 1 with Z unchanged"
    ],
    "correctAnswer": 1,
    "explanation": "The emitted electron carries away charge, converting n → p: atomic number rises by one while mass number stays fixed (a neutron became a proton — total nucleons unchanged).",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "Positron emission converts a proton into a neutron. The daughter nuclide has:",
    "options": [
      "Z one higher",
      "A one lower",
      "Z one lower with A unchanged",
      "A one higher"
    ],
    "correctAnswer": 2,
    "explanation": "Losing a proton's charge (as a positron) lowers Z by one; the proton becomes a neutron so A is unchanged. Raising Z describes beta-minus decay instead.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "Electron capture changes a nuclide's Z and A the same way as:",
    "options": [
      "Alpha decay",
      "Beta-minus decay",
      "Positron emission",
      "Gamma emission"
    ],
    "correctAnswer": 2,
    "explanation": "Capturing an inner-shell electron converts a proton to a neutron — exactly the positron-emission result (Z down one, A unchanged), just without emitting antimatter.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "Gamma emission changes the parent's atomic and mass numbers how?",
    "options": [
      "Z decreases by 1",
      "A decreases by 4",
      "Z increases by 1",
      "Neither Z nor A changes"
    ],
    "correctAnswer": 3,
    "explanation": "A gamma ray is a high-energy photon released as an excited nucleus relaxes — no particles leave, so both Z and A are untouched.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "In the decay $^{238}\\text{U} \\rightarrow\\ ^{234}\\text{Th} + X$, particle X is:",
    "options": [
      "An alpha particle",
      "A beta-minus particle",
      "A positron",
      "A neutron"
    ],
    "correctAnswer": 0,
    "explanation": "Mass number drops by 4 (238 → 234) and atomic number by 2 (92 → 90) — the signature of an alpha particle. A beta particle would leave A unchanged.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "Carbon-14 decays to nitrogen-14. The emitted particle is:",
    "options": [
      "An alpha particle",
      "A beta-minus particle (electron)",
      "A positron",
      "A proton"
    ],
    "correctAnswer": 1,
    "explanation": "A stays at 14 while Z rises from 6 to 7 — a neutron became a proton, emitting an electron (beta-minus) and an antineutrino. Positron emission would lower Z.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "In PET imaging, the annihilation of an emitted positron with an electron produces:",
    "options": [
      "Two 511 keV photons traveling in opposite directions",
      "One 1022 keV photon",
      "A pair of neutrons",
      "Low-energy X-rays only"
    ],
    "correctAnswer": 0,
    "explanation": "The pair's rest mass converts entirely to two 511 keV gamma photons emitted back-to-back (conserving momentum); detecting them in coincidence localizes the tracer. A single photon could not conserve momentum.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "A key advantage of short-half-life isotopes like fluorine-18 for diagnostic imaging is that they:",
    "options": [
      "Emit only alpha particles",
      "Persist for months in tissue",
      "Are chemically inert",
      "Limit the patient's radiation dose by decaying away quickly"
    ],
    "correctAnswer": 3,
    "explanation": "Activity that decays within hours delivers its signal during the scan and then largely disappears, minimizing cumulative dose. Persistence would be a disadvantage, and F-18 is a positron emitter, not an alpha emitter.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "The binding energy of a nucleus corresponds to:",
    "options": [
      "The mass difference between the separated nucleons and the nucleus, via $E = mc^2$",
      "The kinetic energy of its orbiting electrons",
      "The Coulomb repulsion among its protons",
      "The energy of its most recent gamma emission"
    ],
    "correctAnswer": 0,
    "explanation": "A bound nucleus has LESS mass than its free nucleons; that mass defect times $c^2$ is the energy needed to pull it apart. Electron energies are chemistry-scale, orders of magnitude smaller.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "Energy is released by fusing nuclei LIGHTER than iron and by splitting nuclei HEAVIER than iron because:",
    "options": [
      "Iron is the most abundant element",
      "All nuclear reactions release energy",
      "Coulomb repulsion vanishes at iron",
      "Binding energy per nucleon peaks near iron"
    ],
    "correctAnswer": 3,
    "explanation": "Reactions that move nuclei toward the binding-energy-per-nucleon maximum (around iron-56) release the difference. Moving away from the peak in either direction costs energy instead.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "Nuclear fission is best described as:",
    "options": [
      "Two light nuclei merging into one",
      "A heavy nucleus splitting into smaller nuclei, releasing energy and neutrons",
      "A nucleus emitting a single photon",
      "Electron capture by a heavy nucleus"
    ],
    "correctAnswer": 1,
    "explanation": "Fission splits a heavy nucleus (like uranium-235) into fragments plus free neutrons — those neutrons can trigger further fissions, enabling a chain reaction. Merging light nuclei is fusion.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "The Sun's energy output comes primarily from:",
    "options": [
      "Fission of heavy elements",
      "Chemical combustion of hydrogen",
      "Gravitational collapse alone",
      "Fusion of hydrogen into helium"
    ],
    "correctAnswer": 3,
    "explanation": "Solar core conditions fuse hydrogen nuclei into helium; the mass difference is released as energy. Combustion is a chemical process millions of times too weak.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "Ranking radiation by penetrating power, from least to most penetrating:",
    "options": [
      "Alpha < beta < gamma",
      "Gamma < beta < alpha",
      "Beta < alpha < gamma",
      "Alpha < gamma < beta"
    ],
    "correctAnswer": 0,
    "explanation": "Massive, doubly charged alpha particles stop in paper or skin; beta electrons penetrate millimeters; uncharged gamma photons require dense shielding like lead. Ionizing power runs in the OPPOSITE order.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "Which barrier is sufficient to stop typical alpha particles?",
    "options": [
      "A meter of concrete",
      "Several centimeters of lead",
      "A few millimeters of aluminum",
      "A sheet of paper or the outer layer of skin"
    ],
    "correctAnswer": 3,
    "explanation": "Alpha particles are heavy and doubly charged, so they ionize densely and exhaust their energy within micrometers of solid material — paper suffices. Lead and concrete are for gamma shielding.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "Although easily shielded, alpha emitters are especially dangerous when inhaled or ingested because alpha particles:",
    "options": [
      "Travel far inside the body",
      "Convert tissue into radioactive material",
      "Deposit intense ionization over a very short range in living tissue",
      "Pass through tissue without interacting"
    ],
    "correctAnswer": 2,
    "explanation": "Internally there is no dead skin layer to absorb them: the alpha's large charge and mass produce dense local ionization, concentrating damage in a small volume of living cells. Their range is short, not long — that is exactly the problem.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "Isotopes of an element share the same:",
    "options": [
      "Mass number",
      "Number of neutrons",
      "Half-life",
      "Number of protons"
    ],
    "correctAnswer": 3,
    "explanation": "Isotopes have identical atomic number (protons) — hence identical chemistry — but different neutron counts and thus different mass numbers, and generally different nuclear stability.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "The mass number A of a nuclide equals:",
    "options": [
      "Protons plus neutrons",
      "Protons only",
      "Neutrons only",
      "Protons plus electrons"
    ],
    "correctAnswer": 0,
    "explanation": "A counts all nucleons. Protons alone define Z, the atomic number; electrons contribute negligibly to mass and are not counted.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "Carbon-14 ($Z = 6$) contains how many neutrons?",
    "options": [
      "6",
      "7",
      "8",
      "14"
    ],
    "correctAnswer": 2,
    "explanation": "Neutrons = A − Z = 14 − 6 = 8. The 6 trap is the proton count; 14 is the mass number itself.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "In the Bohr model, an atom emits a photon when an electron:",
    "options": [
      "Absorbs thermal energy",
      "Drops from a higher to a lower energy level, releasing exactly the level difference",
      "Escapes the atom entirely",
      "Moves to a larger orbit"
    ],
    "correctAnswer": 1,
    "explanation": "Emission accompanies a downward transition; the photon energy equals the gap between levels, which is why emission lines are discrete. Moving up or escaping requires ABSORBING energy.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "The dark lines in a star's absorption spectrum occur at the same wavelengths as the element's emission lines because:",
    "options": [
      "Both correspond to the same energy-level differences",
      "The star re-emits all absorbed light forward",
      "Absorption shifts wavelengths to the red",
      "The lines are instrumental artifacts"
    ],
    "correctAnswer": 0,
    "explanation": "A transition absorbs exactly the photon energy it would emit going the other way — the level spacing is the same in both directions, so the line positions coincide.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "If a photon's frequency doubles, its energy:",
    "options": [
      "Halves",
      "Is unchanged",
      "Doubles",
      "Quadruples"
    ],
    "correctAnswer": 2,
    "explanation": "$E = hf$ is linear in frequency, so double the frequency means double the energy. Quadrupling would require energy to scale with the square of frequency.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "Taking $h \\approx 6.6 \\times 10^{-34}\\ \\text{J·s}$, a photon of frequency $10^{15}$ Hz carries an energy of about:",
    "options": [
      "$6.6 \\times 10^{-20}$ J",
      "$6.6 \\times 10^{-19}$ J",
      "$6.6 \\times 10^{-18}$ J",
      "$6.6 \\times 10^{-15}$ J"
    ],
    "correctAnswer": 1,
    "explanation": "$E = hf = 6.6 \\times 10^{-34} \\times 10^{15} = 6.6 \\times 10^{-19}$ J (a few electron-volts — ultraviolet). The other options are exponent slips.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "Light below a metal's threshold frequency ejects no photoelectrons no matter how intense it is because:",
    "options": [
      "No single photon carries enough energy to overcome the work function",
      "The metal reflects all low-frequency light",
      "Electrons cannot absorb multiple photons simultaneously in this regime, and each photon is individually insufficient",
      "Intensity controls photon energy"
    ],
    "correctAnswer": 0,
    "explanation": "Ejection is a one-photon, one-electron event: each photon must individually supply at least the work function. Intensity sets the photon COUNT, not the energy per photon — the observation that forced the quantum picture of light.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "Photons of energy 5 eV strike a metal with work function 2 eV. The maximum kinetic energy of ejected electrons is:",
    "options": [
      "2 eV",
      "3 eV",
      "5 eV",
      "7 eV"
    ],
    "correctAnswer": 1,
    "explanation": "$KE_{max} = hf - \\phi = 5 - 2 = 3$ eV. The 7 eV trap adds the work function; 2 eV is the work function itself.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "For light already above the threshold frequency, increasing the INTENSITY causes:",
    "options": [
      "More electrons ejected per second, with the same maximum kinetic energy",
      "Faster electrons with the same current",
      "Both more and faster electrons",
      "No change at all"
    ],
    "correctAnswer": 0,
    "explanation": "More intensity means more photons, hence more one-photon ejection events — but each photon's energy (and so the electrons' maximum KE) is set by frequency alone.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "A metal's work function is:",
    "options": [
      "The kinetic energy of its conduction electrons",
      "The energy of its most intense emission line",
      "The minimum energy needed to eject an electron from its surface",
      "The total binding energy of the atom"
    ],
    "correctAnswer": 2,
    "explanation": "The work function is the escape cost for the least-bound surface electron; photon energy beyond it appears as the electron's kinetic energy.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "The ground-state energy of hydrogen is −13.6 eV. The energy required to ionize hydrogen from its ground state is:",
    "options": [
      "3.4 eV",
      "6.8 eV",
      "13.6 eV",
      "27.2 eV"
    ],
    "correctAnswer": 2,
    "explanation": "Ionization brings the electron from −13.6 eV up to 0 (free), costing exactly 13.6 eV. The 3.4 eV value is the magnitude of the n = 2 level, not the ionization energy.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "Bohr levels scale as $E_n = -13.6/n^2$ eV for hydrogen. The n = 2 level lies at:",
    "options": [
      "−13.6 eV",
      "−6.8 eV",
      "−3.4 eV",
      "−1.7 eV"
    ],
    "correctAnswer": 2,
    "explanation": "$E_2 = -13.6/4 = -3.4$ eV. The −6.8 trap divides by 2 instead of $2^2 = 4$.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "The existence of sharp line spectra (rather than a continuous rainbow) from excited gases is direct evidence that:",
    "options": [
      "Atoms are mostly empty space",
      "Electrons orbit the nucleus in circles",
      "Photons have momentum",
      "Atomic energy levels are quantized"
    ],
    "correctAnswer": 3,
    "explanation": "Discrete lines mean only specific photon energies are emitted — transitions between a discrete set of allowed levels. A continuous set of orbits would give a continuous spectrum.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "Heating a radioactive sample or binding it into a different chemical compound changes its half-life:",
    "options": [
      "Not at all",
      "Dramatically, in proportion to temperature",
      "Only for beta emitters",
      "Only at very high pressure"
    ],
    "correctAnswer": 0,
    "explanation": "Decay is a nuclear process; temperature, pressure, and chemical bonding perturb electrons, not the nucleus, so the half-life is essentially invariant (electron capture shows only minuscule chemical effects).",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "The activity of a radioactive sample, measured in becquerels, is:",
    "options": [
      "The energy released per decay",
      "The number of decays per second",
      "The number of radioactive atoms present",
      "The half-life expressed in seconds"
    ],
    "correctAnswer": 1,
    "explanation": "One becquerel is one decay per second. Activity equals the decay constant times the number of remaining atoms, so it falls with the same half-life as the atom count.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "For a SINGLE radioactive nucleus observed for one half-life, the probability that it has decayed is:",
    "options": [
      "25%",
      "50%",
      "75%",
      "100%"
    ],
    "correctAnswer": 1,
    "explanation": "The half-life is defined statistically: each nucleus independently has a 50% chance of decaying per half-life. Certainty is never reached — a quarter of nuclei survive two half-lives.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "A nuclide undergoes alpha decay followed by beta-minus decay. The net change from the original is:",
    "options": [
      "Z − 2, A − 4",
      "Z − 1, A − 4",
      "Z − 3, A − 4",
      "Z − 1, A − 2"
    ],
    "correctAnswer": 1,
    "explanation": "Alpha: Z − 2, A − 4; beta-minus then raises Z by 1 with A fixed. Net: Z − 1, A − 4. Forgetting the beta step leaves the alpha-only answer.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "Iodine-131 therapy destroys overactive thyroid tissue while largely sparing other organs because:",
    "options": [
      "Gamma rays target the thyroid specifically",
      "I-131 is chemically inert elsewhere",
      "Its alpha particles cannot leave the gland",
      "The thyroid concentrates iodine, and the short-range beta particles deposit their dose locally"
    ],
    "correctAnswer": 3,
    "explanation": "Physiological iodine uptake concentrates the isotope in the thyroid, and beta particles travel only millimeters in tissue, confining damage to the gland. Gamma rays are emitted too but carry a small fraction of the dose and are not targeted.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-physics-atomic-nuclear-mcat",
    "question": "A positron differs from an electron in that it has:",
    "options": [
      "Greater mass",
      "Lesser mass",
      "The same charge",
      "The same mass but opposite (positive) charge"
    ],
    "correctAnswer": 3,
    "explanation": "The positron is the electron's antiparticle: identical mass and spin, opposite charge — which is why the pair can annihilate into two 511 keV photons.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-waves-sound-mcat",
    "question": "A wave has frequency 50 Hz and wavelength 4 m. Its speed is:",
    "options": [
      "50 m/s",
      "100 m/s",
      "200 m/s",
      "400 m/s"
    ],
    "correctAnswer": 2,
    "explanation": "$v = f\\lambda = 50 \\times 4 = 200$ m/s.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-waves-sound-mcat",
    "question": "A tuning fork vibrates at 250 Hz. Its period is:",
    "options": [
      "0.004 s",
      "0.04 s",
      "0.25 s",
      "4 s"
    ],
    "correctAnswer": 0,
    "explanation": "Period is the reciprocal of frequency: $T = 1/f = 1/250 = 0.004$ s.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-waves-sound-mcat",
    "question": "Sound travels at 340 m/s in air. The wavelength of a 170 Hz tone is:",
    "options": [
      "0.5 m",
      "1 m",
      "2 m",
      "4 m"
    ],
    "correctAnswer": 2,
    "explanation": "$\\lambda = v/f = 340/170 = 2$ m.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-waves-sound-mcat",
    "question": "An open-closed pipe is 0.5 m long. The wavelength of its fundamental is:",
    "options": [
      "0.25 m",
      "0.5 m",
      "1 m",
      "2 m"
    ],
    "correctAnswer": 3,
    "explanation": "A closed pipe fits a quarter wavelength in its fundamental, so $\\lambda = 4L = 4 \\times 0.5 = 2$ m.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-waves-sound-mcat",
    "question": "A pipe closed at one end supports which harmonics?",
    "options": [
      "All integer harmonics",
      "Even harmonics only",
      "Odd harmonics only",
      "Only the fundamental"
    ],
    "correctAnswer": 2,
    "explanation": "The closed end must be a node and the open end an antinode, which is only possible for odd multiples of the fundamental ($f, 3f, 5f, \\ldots$).",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-waves-sound-mcat",
    "question": "A string fixed at both ends has fundamental frequency 100 Hz. Its second harmonic is:",
    "options": [
      "50 Hz",
      "100 Hz",
      "150 Hz",
      "200 Hz"
    ],
    "correctAnswer": 3,
    "explanation": "String harmonics are integer multiples of the fundamental: $f_2 = 2f_1 = 200$ Hz.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-waves-sound-mcat",
    "question": "A guitar string has fundamental 110 Hz. The frequency of its third harmonic is:",
    "options": [
      "55 Hz",
      "110 Hz",
      "220 Hz",
      "330 Hz"
    ],
    "correctAnswer": 3,
    "explanation": "$f_3 = 3f_1 = 3 \\times 110 = 330$ Hz for a string fixed at both ends.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-waves-sound-mcat",
    "question": "An observer moves away from a stationary siren. The observed frequency is:",
    "options": [
      "Higher than the source frequency",
      "Lower than the source frequency",
      "Equal to the source frequency",
      "Doubled"
    ],
    "correctAnswer": 1,
    "explanation": "A receding observer crosses wavefronts less often per second, so the observed frequency drops.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-waves-sound-mcat",
    "question": "A source recedes from a stationary observer at speed $u$; separately, an observer recedes from a stationary source at the same $u$. The two frequency shifts are:",
    "options": [
      "Both downward, but unequal in general",
      "Both downward and always exactly equal",
      "Downward for the source case, upward for the observer case",
      "Upward for the source case, downward for the observer case"
    ],
    "correctAnswer": 0,
    "explanation": "Both cases lower the observed frequency, but the Doppler formulas differ: a receding observer's frequency reaches zero at $u = v$, while a receding source's does not. The shifts agree only approximately when $u \\ll v$.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-physics-waves-sound-mcat",
    "question": "As air warms up, the speed of sound in it:",
    "options": [
      "Increases",
      "Decreases",
      "Stays the same",
      "Drops to zero"
    ],
    "correctAnswer": 0,
    "explanation": "Faster-moving molecules transmit pressure disturbances more quickly, so sound speed rises with temperature.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-waves-sound-mcat",
    "question": "The speed of sound in a fluid with bulk modulus $B$ and density $\\rho$ is:",
    "options": [
      "$\\sqrt{\\rho/B}$",
      "$\\sqrt{B/\\rho}$",
      "$B/\\rho$",
      "$B\\rho$"
    ],
    "correctAnswer": 1,
    "explanation": "$v = \\sqrt{B/\\rho}$ — stiffer media speed sound up, denser media slow it down.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-waves-sound-mcat",
    "question": "An increase of 30 dB corresponds to an intensity increase by a factor of:",
    "options": [
      "3",
      "30",
      "300",
      "1000"
    ],
    "correctAnswer": 3,
    "explanation": "Each 10 dB is a factor of 10 in intensity, so 30 dB is $10^{3} = 1000$.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-waves-sound-mcat",
    "question": "A 60 dB sound is how many times more intense than a 40 dB sound?",
    "options": [
      "2",
      "10",
      "20",
      "100"
    ],
    "correctAnswer": 3,
    "explanation": "The difference is 20 dB, and each 10 dB is a factor of 10 in intensity: $10^{2} = 100$.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-physics-waves-sound-mcat",
    "question": "Two identical machines each produce 70 dB alone. Running together, the level is closest to:",
    "options": [
      "70 dB",
      "73 dB",
      "76 dB",
      "140 dB"
    ],
    "correctAnswer": 1,
    "explanation": "Incoherent sources add intensities, so doubling intensity adds $10\\log_{10}2 \\approx 3$ dB. Decibels never add directly.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-physics-waves-sound-mcat",
    "question": "The pitch of a sound corresponds to which physical quantity?",
    "options": [
      "Amplitude",
      "Wave speed",
      "Frequency",
      "Waveform shape"
    ],
    "correctAnswer": 2,
    "explanation": "Pitch is the perception of frequency; loudness tracks intensity (amplitude), and timbre tracks waveform shape.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-waves-sound-mcat",
    "question": "A violin and a flute play the same note at the same loudness yet sound different because of:",
    "options": [
      "Different fundamental frequencies",
      "Different amplitudes",
      "Different harmonic content",
      "Different sound speeds"
    ],
    "correctAnswer": 2,
    "explanation": "Timbre comes from the mix of overtones each instrument adds to the shared fundamental.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-waves-sound-mcat",
    "question": "In a transverse wave, particles of the medium oscillate:",
    "options": [
      "Parallel to the direction of travel",
      "In closed circles",
      "Perpendicular to the direction of travel",
      "Not at all"
    ],
    "correctAnswer": 2,
    "explanation": "Transverse motion is perpendicular to propagation, as on a shaken string; longitudinal motion is parallel, as in sound.",
    "difficulty": "easy"
  },
  {
    "subtopicSlug": "mcat-physics-waves-sound-mcat",
    "question": "Which of the following can be polarized?",
    "options": [
      "Sound waves in air",
      "Light waves",
      "All longitudinal waves",
      "Any wave in a fluid"
    ],
    "correctAnswer": 1,
    "explanation": "Polarization selects one transverse oscillation direction, so only transverse waves like light qualify; sound in air is longitudinal.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-waves-sound-mcat",
    "question": "Two overlapping pulses have amplitudes 3 cm and 2 cm and are exactly out of phase. The resultant amplitude is:",
    "options": [
      "1 cm",
      "2.5 cm",
      "5 cm",
      "6 cm"
    ],
    "correctAnswer": 0,
    "explanation": "Superposition adds displacements: opposite-phase amplitudes subtract, giving $3 - 2 = 1$ cm.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-waves-sound-mcat",
    "question": "Two in-phase speakers emit the same tone. At a point where the path lengths differ by $1.5\\lambda$, the waves arrive:",
    "options": [
      "In phase — constructive interference",
      "Out of phase — destructive interference",
      "A quarter cycle apart",
      "With different frequencies"
    ],
    "correctAnswer": 1,
    "explanation": "A path difference of a half-integer number of wavelengths ($\\lambda/2, 3\\lambda/2, \\ldots$) puts the waves $180°$ out of phase, so they cancel.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-physics-waves-sound-mcat",
    "question": "Raising the frequency of an ultrasound probe used on tissue:",
    "options": [
      "Improves both resolution and penetration",
      "Improves resolution but reduces penetration depth",
      "Reduces resolution but penetrates deeper",
      "Changes neither resolution nor penetration"
    ],
    "correctAnswer": 1,
    "explanation": "Shorter wavelengths resolve finer detail, but attenuation in tissue grows with frequency, so high-frequency beams fade at shallower depths.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-waves-sound-mcat",
    "question": "A sonic boom is produced when a source:",
    "options": [
      "Travels faster than sound in the medium",
      "Accelerates rapidly",
      "Emits a very high frequency",
      "Passes directly overhead"
    ],
    "correctAnswer": 0,
    "explanation": "A supersonic source outruns its own wavefronts, which pile up into a cone-shaped shock wave heard as a boom.",
    "difficulty": "medium"
  },
  {
    "subtopicSlug": "mcat-physics-waves-sound-mcat",
    "question": "A pipe closed at one end has fundamental 100 Hz. Its next resonant frequency is:",
    "options": [
      "100 Hz",
      "150 Hz",
      "200 Hz",
      "300 Hz"
    ],
    "correctAnswer": 3,
    "explanation": "Closed pipes resonate only at odd harmonics, so the resonance after $f_1 = 100$ Hz is $3f_1 = 300$ Hz.",
    "difficulty": "hard"
  },
  {
    "subtopicSlug": "mcat-physics-waves-sound-mcat",
    "question": "Taking the speed of sound as 340 m/s, the wavelength at the 20 kHz upper limit of human hearing is about:",
    "options": [
      "1.7 cm",
      "17 cm",
      "1.7 m",
      "17 m"
    ],
    "correctAnswer": 0,
    "explanation": "$\\lambda = v/f = 340/20{,}000 = 0.017$ m, or 1.7 cm. The 20 Hz lower limit gives 17 m — a thousandfold wavelength range.",
    "difficulty": "hard"
  }
]
