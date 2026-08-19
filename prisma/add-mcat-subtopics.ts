import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type SubtopicSeed = {
  slug: string
  title: string
  description: string
  /** Real study content; when absent, the generic template is used. */
  textContent?: string
}

type ParentSeed = {
  parentSlug: string
  subtopics: SubtopicSeed[]
}

const mcatSubtopics: ParentSeed[] = [
  {
    parentSlug: 'mcat-general-chemistry-mcat',
    subtopics: [
      { slug: 'mcat-general-chemistry-atomic-structure-mcat', title: 'Atomic Structure & Periodic Trends', description: 'Electron configuration, periodic trends, and atomic properties' },
      { slug: 'mcat-general-chemistry-stoichiometry-mcat', title: 'Stoichiometry & Chemical Reactions', description: 'Balancing equations, mole conversions, limiting reactants, and yields' },
      { slug: 'mcat-general-chemistry-thermodynamics-mcat', title: 'Thermodynamics', description: 'Enthalpy, entropy, Gibbs free energy, and spontaneity' },
      { slug: 'mcat-general-chemistry-kinetics-mcat', title: 'Chemical Kinetics', description: 'Rate laws, reaction mechanisms, activation energy, and catalysts' },
      { slug: 'mcat-general-chemistry-acid-base-equilibrium-mcat', title: 'Acid-Base & Equilibrium', description: 'pH, buffers, Ka/Kb, Le Chatelier, and solubility equilibria' }
    ]
  },
  {
    parentSlug: 'mcat-organic-chemistry-mcat',
    subtopics: [
      { slug: 'mcat-organic-chemistry-functional-groups-mcat', title: 'Functional Groups & Nomenclature', description: 'Naming compounds and identifying reactivity patterns' },
      { slug: 'mcat-organic-chemistry-stereochemistry-mcat', title: 'Stereochemistry', description: 'Chirality, enantiomers, diastereomers, and optical activity' },
      { slug: 'mcat-organic-chemistry-sn1-sn2-e1-e2-mcat', title: 'Substitution & Elimination', description: 'SN1/SN2/E1/E2 mechanisms and reaction conditions' },
      { slug: 'mcat-organic-chemistry-carbonyls-mcat', title: 'Carbonyl Chemistry', description: 'Aldehydes, ketones, carboxylic acids, and derivatives' },
      { slug: 'mcat-organic-chemistry-spectroscopy-mcat', title: 'Spectroscopy', description: 'IR, NMR, and mass spectrometry interpretation' }
    ]
  },
  {
    parentSlug: 'mcat-physics-mechanics-mcat',
    subtopics: [
      { slug: 'mcat-physics-mechanics-kinematics-mcat', title: 'Kinematics', description: 'Motion in one and two dimensions, vectors, and projectile motion' },
      { slug: 'mcat-physics-mechanics-forces-newton-laws-mcat', title: 'Forces & Newton\'s Laws', description: 'Free-body diagrams, friction, and dynamics' },
      { slug: 'mcat-physics-mechanics-work-energy-power-mcat', title: 'Work, Energy, and Power', description: 'Conservation of energy and mechanical work calculations' },
      { slug: 'mcat-physics-mechanics-momentum-collisions-mcat', title: 'Momentum & Collisions', description: 'Impulse, conservation of momentum, and collision analysis' },
      { slug: 'mcat-physics-mechanics-fluids-waves-mcat', title: 'Fluids & Waves', description: 'Hydrostatics, buoyancy, Bernoulli flow, and basic wave behavior' }
    ]
  },
  {
    parentSlug: 'mcat-physics-electricity-mcat',
    subtopics: [
      { slug: 'mcat-physics-electricity-electrostatics-mcat', title: 'Electrostatics', description: 'Electric force, fields, potential, and capacitance' },
      { slug: 'mcat-physics-electricity-circuits-mcat', title: 'Circuits', description: 'Current, resistance, Ohm\'s law, and series/parallel circuits' },
      { slug: 'mcat-physics-electricity-magnetism-mcat', title: 'Magnetism & Electromagnetic Induction', description: 'Magnetic fields, forces, and induced current concepts' },
      { slug: 'mcat-physics-electricity-optics-mcat', title: 'Optics', description: 'Reflection, refraction, mirrors, lenses, and image formation' },
      { slug: 'mcat-physics-electricity-electrochemistry-mcat', title: 'Electrochemistry', description: 'Galvanic/electrolytic cells, redox, and Nernst equation' }
    ]
  },
  {
    parentSlug: 'mcat-biochemistry-foundations-mcat',
    subtopics: [
      { slug: 'mcat-biochemistry-amino-acids-proteins-mcat', title: 'Amino Acids & Proteins', description: 'Structures, properties, and protein organization levels' },
      { slug: 'mcat-biochemistry-enzymes-kinetics-mcat', title: 'Enzymes & Kinetics', description: 'Michaelis-Menten behavior and inhibition models' },
      { slug: 'mcat-biochemistry-carbohydrate-metabolism-mcat', title: 'Carbohydrate Metabolism', description: 'Glycolysis, gluconeogenesis, and glycogen pathways' },
      { slug: 'mcat-biochemistry-lipid-metabolism-mcat', title: 'Lipid Metabolism', description: 'Fatty acid oxidation, synthesis, and ketone body basics' },
      { slug: 'mcat-biochemistry-bioenergetics-mcat', title: 'Bioenergetics & ETC', description: 'Krebs cycle, electron transport chain, and ATP accounting' }
    ]
  },
  {
    parentSlug: 'mcat-cars-strategy-mcat',
    subtopics: [
      { slug: 'mcat-cars-strategy-active-reading-mcat', title: 'Active Reading Framework', description: 'Paragraph mapping, tone tracking, and thesis identification' },
      { slug: 'mcat-cars-strategy-main-idea-inference-mcat', title: 'Main Idea & Inference Questions', description: 'Finding central claims and drawing valid inferences' },
      { slug: 'mcat-cars-strategy-elimination-mcat', title: 'Answer Elimination Tactics', description: 'Recognizing trap answers and narrowing choices efficiently' },
      { slug: 'mcat-cars-strategy-timing-mcat', title: 'Timing & Passage Pacing', description: 'Time allocation strategies for passages and question sets' }
    ]
  },
  {
    parentSlug: 'mcat-cars-passages-mcat',
    subtopics: [
      { slug: 'mcat-cars-passages-humanities-mcat', title: 'Humanities Passages', description: 'Approaches for philosophy, history, and literature passages' },
      { slug: 'mcat-cars-passages-social-science-mcat', title: 'Social Science Passages', description: 'Reasoning through behavioral and social argumentation' },
      { slug: 'mcat-cars-passages-ethics-mcat', title: 'Ethics & Philosophy Passages', description: 'Evaluating normative claims and competing frameworks' },
      { slug: 'mcat-cars-passages-comparative-mcat', title: 'Comparative Passages', description: 'Tracking agreement, disagreement, and author perspectives' }
    ]
  },
  {
    parentSlug: 'mcat-cars-reasoning-mcat',
    subtopics: [
      { slug: 'mcat-cars-reasoning-argument-structure-mcat', title: 'Argument Structure', description: 'Identifying premises, conclusions, and logical flow' },
      { slug: 'mcat-cars-reasoning-assumptions-mcat', title: 'Assumptions & Implications', description: 'Detecting unstated assumptions and evaluating implications' },
      { slug: 'mcat-cars-reasoning-strengthen-weaken-mcat', title: 'Strengthen & Weaken Questions', description: 'Testing evidence that supports or undermines arguments' },
      { slug: 'mcat-cars-reasoning-fallacies-mcat', title: 'Logical Fallacies', description: 'Recognizing common reasoning errors and distractors' }
    ]
  },
  {
    parentSlug: 'mcat-cell-biology-mcat',
    subtopics: [
      { slug: 'mcat-cell-biology-organelles-mcat', title: 'Cell Structure & Organelles', description: 'Functions of organelles and cell compartmentalization' },
      { slug: 'mcat-cell-biology-membrane-transport-mcat', title: 'Membrane Transport', description: 'Diffusion, active transport, and membrane dynamics' },
      { slug: 'mcat-cell-biology-signaling-mcat', title: 'Cell Signaling', description: 'Signal transduction pathways and receptor classes' },
      { slug: 'mcat-cell-biology-cell-cycle-mcat', title: 'Cell Cycle & Apoptosis', description: 'Regulation of growth, division, and programmed cell death' }
    ]
  },
  {
    parentSlug: 'mcat-molecular-biology-mcat',
    subtopics: [
      { slug: 'mcat-molecular-biology-dna-replication-mcat', title: 'DNA Replication & Repair', description: 'Replication enzymes and DNA repair mechanisms' },
      { slug: 'mcat-molecular-biology-transcription-mcat', title: 'Transcription & RNA Processing', description: 'RNA synthesis, splicing, and post-transcriptional regulation' },
      { slug: 'mcat-molecular-biology-translation-mcat', title: 'Translation & Protein Synthesis', description: 'Codons, ribosomes, and translational control' },
      { slug: 'mcat-molecular-biology-biotechnology-mcat', title: 'Biotechnology Methods', description: 'PCR, electrophoresis, blotting, and gene editing tools' }
    ]
  },
  {
    parentSlug: 'mcat-organ-systems-mcat',
    subtopics: [
      { slug: 'mcat-organ-systems-cardiovascular-mcat', title: 'Cardiovascular System', description: 'Blood flow, cardiac cycle, and oxygen transport' },
      { slug: 'mcat-organ-systems-respiratory-mcat', title: 'Respiratory System', description: 'Ventilation, gas exchange, and respiratory regulation' },
      { slug: 'mcat-organ-systems-renal-mcat', title: 'Renal System', description: 'Nephron physiology, filtration, and fluid balance' },
      { slug: 'mcat-organ-systems-endocrine-nervous-mcat', title: 'Endocrine & Nervous Systems', description: 'Hormonal control and neural communication' }
    ]
  },
  {
    parentSlug: 'mcat-genetics-evolution-mcat',
    subtopics: [
      { slug: 'mcat-genetics-evolution-mendelian-mcat', title: 'Mendelian & Non-Mendelian Genetics', description: 'Inheritance models, pedigrees, and trait expression' },
      { slug: 'mcat-genetics-evolution-population-genetics-mcat', title: 'Population Genetics', description: 'Hardy-Weinberg and allele frequency dynamics' },
      { slug: 'mcat-genetics-evolution-natural-selection-mcat', title: 'Natural Selection & Speciation', description: 'Evolutionary mechanisms and species divergence' },
      { slug: 'mcat-genetics-evolution-immunology-mcat', title: 'Immunology Basics', description: 'Innate/adaptive responses and immune cell functions' }
    ]
  },
  {
    parentSlug: 'mcat-anatomy-physiology-mcat',
    subtopics: [
      { slug: 'mcat-anatomy-physiology-musculoskeletal-mcat', title: 'Musculoskeletal System', description: 'Muscle contraction, bone physiology, and movement' },
      { slug: 'mcat-anatomy-physiology-reproductive-mcat', title: 'Reproductive System', description: 'Gamete development, hormonal cycles, and reproduction' },
      { slug: 'mcat-anatomy-physiology-sensory-mcat', title: 'Sensory Systems', description: 'Vision, hearing, balance, and sensory integration' },
      { slug: 'mcat-anatomy-physiology-embryology-mcat', title: 'Embryology & Development', description: 'Early development stages and tissue differentiation' }
    ]
  },
  {
    parentSlug: 'mcat-microbiology-mcat',
    subtopics: [
      { slug: 'mcat-microbiology-bacteria-mcat', title: 'Bacteria', description: 'Bacterial structure, growth, and classification' },
      { slug: 'mcat-microbiology-viruses-mcat', title: 'Viruses', description: 'Viral replication cycles and host interactions' },
      { slug: 'mcat-microbiology-genetics-mcat', title: 'Microbial Genetics', description: 'Horizontal gene transfer and resistance mechanisms' },
      { slug: 'mcat-microbiology-antimicrobials-mcat', title: 'Antimicrobials & Resistance', description: 'Drug targets, resistance pathways, and treatment principles' }
    ]
  },
  {
    parentSlug: 'mcat-psychology-behavior-mcat',
    subtopics: [
      { slug: 'mcat-psychology-behavior-sensation-perception-mcat', title: 'Sensation & Perception', description: 'Sensory thresholds, processing, and perception models' },
      { slug: 'mcat-psychology-behavior-learning-memory-mcat', title: 'Learning & Memory', description: 'Conditioning, memory systems, and retrieval effects' },
      { slug: 'mcat-psychology-behavior-cognition-language-mcat', title: 'Cognition & Language', description: 'Thinking, language processing, and cognitive biases' },
      { slug: 'mcat-psychology-behavior-development-mcat', title: 'Development & Personality', description: 'Developmental stages, personality theories, and behavior drivers' },
      {
        slug: 'mcat-psychology-behavior-disorders-mcat',
        title: 'Psychological Disorders',
        description: 'Mood, psychotic, anxiety, trauma, personality, eating, and neurodevelopmental disorders with their biological bases',
        textContent: `# Psychological Disorders\n\n## Why This Is Tested\n\nPsychological disorders sit squarely in MCAT content category 7A, which asks you to connect individual behavior and mental processes to their biological bases. Passages routinely present a symptom vignette and ask you to identify the disorder, its neurotransmitter correlate, or the treatment mechanism, so you need both the diagnostic distinctions and the underlying neurobiology.\n\n## Major Disorder Classes\n\n**Mood disorders.** Major depressive disorder requires at least two weeks of depressed mood or anhedonia plus associated symptoms (sleep, appetite, energy, concentration changes, guilt, suicidal ideation). Persistent depressive disorder (dysthymia) is milder but lasts at least two years. Bipolar I requires at least one manic episode; bipolar II requires hypomania plus a major depressive episode. Cyclothymia is a chronic pattern of subthreshold highs and lows.\n\n**Psychotic disorders.** Schizophrenia involves positive symptoms (hallucinations, delusions, disorganized speech and behavior) and negative symptoms (flat affect, avolition, alogia, social withdrawal), with disturbance lasting at least six months. Shorter courses are labeled brief psychotic disorder (under one month) or schizophreniform disorder (one to six months).\n\n**Anxiety disorders.** Generalized anxiety disorder is excessive, free-floating worry more days than not for at least six months. Panic disorder features recurrent unexpected panic attacks plus persistent worry about future attacks. Specific phobias are intense irrational fears of particular objects or situations; social anxiety disorder centers on fear of negative evaluation by others.\n\n**OCD and trauma-related disorders.** OCD pairs intrusive obsessions with anxiety-reducing compulsions, maintained by negative reinforcement. PTSD follows exposure to trauma and includes intrusion, avoidance, negative mood and cognition, and hyperarousal, lasting more than one month (shorter presentations are acute stress disorder).\n\n**Somatic and dissociative disorders.** Somatic symptom disorder involves real, distressing physical symptoms with excessive health anxiety; illness anxiety disorder is preoccupation with disease despite minimal symptoms; conversion disorder produces neurological symptoms incompatible with organic disease. Dissociative disorders include dissociative identity disorder, dissociative amnesia (sometimes with fugue), and depersonalization/derealization disorder.\n\n**Personality disorder clusters.** Cluster A (odd-eccentric): paranoid, schizoid, schizotypal. Cluster B (dramatic-erratic): antisocial, borderline, histrionic, narcissistic. Cluster C (anxious-fearful): avoidant, dependent, obsessive-compulsive.\n\n**Eating disorders.** Anorexia nervosa requires significantly low body weight with intense fear of gaining weight; bulimia nervosa involves binge-purge cycles at roughly normal weight; binge-eating disorder involves bingeing without compensatory behavior.\n\n**Neurodevelopmental disorders.** ADHD combines inattention and hyperactivity-impulsivity beginning before age 12 across multiple settings. Autism spectrum disorder involves deficits in social communication plus restricted, repetitive behaviors and interests, with early-developmental onset.\n\n## Biological Bases\n\n- **Monoamine hypothesis of depression:** deficient serotonin, norepinephrine, and dopamine signaling; supported by the efficacy of SSRIs and SNRIs, which block presynaptic reuptake to raise synaptic levels.\n- **Dopamine hypothesis of schizophrenia:** excess dopamine in the mesolimbic pathway drives positive symptoms (hence D2-blocking antipsychotics work), while reduced mesocortical dopamine contributes to negative and cognitive symptoms.\n- **Brain-region findings:** reduced hippocampal volume in PTSD and chronic depression, linked to prolonged cortisol exposure; amygdala hyperactivity in anxiety and PTSD; prefrontal hypoactivity in depression and schizophrenia; basal ganglia and orbitofrontal circuits implicated in OCD.\n- **Treatment mechanisms:** CBT restructures maladaptive thoughts and behaviors; exposure therapies (including systematic desensitization) extinguish conditioned fear via classical conditioning principles; stimulants for ADHD boost dopamine and norepinephrine transmission.\n\n## High-Yield Distinctions\n\n- **Bipolar I vs bipolar II:** I requires full mania; II requires hypomania plus a major depressive episode, never full mania.\n- **Panic disorder vs GAD:** panic disorder is discrete, intense attacks with anticipatory worry; GAD is chronic, diffuse worry lasting six months or more without necessarily any attacks.\n- **OCD vs OCPD:** OCD has ego-dystonic obsessions and compulsions the person finds distressing; OCPD is an ego-syntonic personality style of perfectionism and control with no true obsessions.\n- **Schizophrenia vs schizoaffective disorder:** schizoaffective requires a major mood episode plus at least two weeks of psychosis without mood symptoms; in schizophrenia, mood symptoms are brief or absent.\n- **Anorexia vs bulimia:** anorexia requires significantly low body weight; bulimia patients are typically normal weight or above, even though both may involve purging and fear of weight gain.\n\n## Quick Self-Check\n\n1. A patient has had hypomanic episodes and one major depressive episode but has never been hospitalized or psychotic. What is the diagnosis?\n2. Which dopamine pathway explains why antipsychotics relieve hallucinations but not flat affect, and what is the pathway's abnormality in each symptom class?\n3. What brain structure shows reduced volume in both PTSD and chronic depression, and what hormone is implicated in that change?`
      }
    ]
  },
  {
    parentSlug: 'mcat-sociology-mcat',
    subtopics: [
      { slug: 'mcat-sociology-structure-stratification-mcat', title: 'Social Structure & Stratification', description: 'Class, status, power, and mobility' },
      { slug: 'mcat-sociology-culture-socialization-mcat', title: 'Culture & Socialization', description: 'Norms, values, and agents of socialization' },
      { slug: 'mcat-sociology-groups-interaction-mcat', title: 'Groups & Social Interaction', description: 'Group behavior, identity, and social influence' },
      { slug: 'mcat-sociology-health-disparities-mcat', title: 'Health Disparities', description: 'Social determinants of health and population-level outcomes' }
    ]
  },
  {
    parentSlug: 'mcat-science-passage-strategy-mcat',
    subtopics: [
      { slug: 'mcat-science-passage-strategy-reading-mcat', title: 'Science Passage Reading', description: 'Extracting hypotheses, variables, and experiment goals' },
      { slug: 'mcat-science-passage-strategy-figures-mcat', title: 'Figure & Table Analysis', description: 'Interpreting plots, axes, units, and trends quickly' },
      { slug: 'mcat-science-passage-strategy-experimental-design-mcat', title: 'Experimental Design Logic', description: 'Controls, confounders, and validity checks' },
      { slug: 'mcat-science-passage-strategy-discrete-questions-mcat', title: 'Discrete Question Tactics', description: 'Fast standalone question solving and estimation methods' }
    ]
  },
  {
    parentSlug: 'mcat-test-day-strategy-mcat',
    subtopics: [
      { slug: 'mcat-test-day-strategy-format-scoring-mcat', title: 'MCAT Format & Scoring', description: 'Section structure, timing, and score interpretation' },
      { slug: 'mcat-test-day-strategy-study-planning-mcat', title: 'Study Plan & Scheduling', description: 'Building practical weekly plans and review cycles' },
      { slug: 'mcat-test-day-strategy-section-specific-mcat', title: 'Section-Specific Strategy', description: 'Targeted strategy for Chem/Phys, CARS, Bio/Biochem, and Psych/Soc' },
      { slug: 'mcat-test-day-strategy-test-day-logistics-mcat', title: 'Test-Day Logistics', description: 'Sleep, nutrition, pacing, and break management' }
    ]
  }
]

async function main() {
  console.log('Adding MCAT subtopics...')

  const parents = await prisma.topic.findMany({
    where: {
      slug: { in: mcatSubtopics.map((entry) => entry.parentSlug) }
    },
    select: {
      id: true,
      slug: true,
      title: true,
      categoryId: true
    }
  })

  const parentBySlug = new Map(parents.map((topic) => [topic.slug, topic]))

  let createdOrUpdated = 0

  for (const entry of mcatSubtopics) {
    const parent = parentBySlug.get(entry.parentSlug)

    if (!parent) {
      console.warn(`Skipping missing parent topic: ${entry.parentSlug}`)
      continue
    }

    console.log(`- ${parent.title}`)

    for (const [index, subtopic] of entry.subtopics.entries()) {
      await prisma.topic.upsert({
        where: { slug: subtopic.slug },
        update: {
          title: subtopic.title,
          description: subtopic.description,
          order: index + 1,
          categoryId: parent.categoryId,
          parentTopicId: parent.id,
          isPremium: false
        },
        create: {
          slug: subtopic.slug,
          title: subtopic.title,
          description: subtopic.description,
          order: index + 1,
          categoryId: parent.categoryId,
          parentTopicId: parent.id,
          isPremium: false,
          textContent: subtopic.textContent ?? `# ${subtopic.title}\n\n## Why This Matters\nThis subtopic breaks down one high-yield part of ${parent.title} for targeted MCAT review.\n\n## Core Concepts\n- Focus on definitions and relationships that show up in passage-based questions\n- Practice translating equations, graphs, and experiments into plain language\n- Track common traps and eliminate unsupported answer choices\n\n## Study Checklist\n- Learn the key formulas and assumptions\n- Do mixed passage and discrete practice\n- Review missed questions by error type (content vs reasoning vs timing)\n\n## Next Step\nAfter mastering this subtopic, move to the next part of ${parent.title} and continue cumulative review.`
        }
      })

      createdOrUpdated += 1
    }
  }

  console.log(`Created or updated ${createdOrUpdated} MCAT subtopics.`)
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
