const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons');

function escapeStr(s) {
  if (!s) return '';
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ');
}

function generateMCSection(slug, partNum, id, questions) {
  const questionStrs = questions.map(q => `          {
            question: '${escapeStr(q.q)}',
            options: [
              '${escapeStr(q.opts[0])}',
              '${escapeStr(q.opts[1])}',
              '${escapeStr(q.opts[2])}',
              '${escapeStr(q.opts[3])}'
            ],
            correctAnswer: ${q.correct},
            explanation: '${escapeStr(q.explanation)}'
          }`);
  
  return `    {
      id: '${slug.substring(0, 5)}${partNum}-${id}',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
${questionStrs.join(',\n')}
        ]
      }
    }`;
}

function generateDropdownSection(slug, partNum, dd) {
  const dropdownStrs = dd.items.map(item => `          {
            label: '${escapeStr(item.label)}',
            options: [${item.options.map(o => `'${escapeStr(o)}'`).join(', ')}]
          }`);
  
  const correctStrs = dd.items.map(item => `'${escapeStr(item.correct)}'`);
  const hintStrs = dd.hints ? dd.hints.map((h, i) => `        hint${i + 1}: '${escapeStr(h)}'`).join(',\n') : '';
  
  return `    {
      id: '${slug.substring(0, 5)}${partNum}-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Fill in the Blanks** 🔍
      \`,
      exercise: {
        dropdowns: [
${dropdownStrs.join(',\n')}
        ],
        correctAnswers: [${correctStrs.join(', ')}],
${hintStrs}${hintStrs ? ',' : ''}
        explanation: '${escapeStr(dd.explanation)}'
      }
    }`;
}

function generateFile(topic, partIdx) {
  const part = topic.parts[partIdx];
  const partNum = partIdx + 1;
  const exportName = `${topic.exportBase}Part${partNum}Data`;
  
  let sections = [];
  
  for (let i = 0; i < part.textSections.length; i++) {
    const ts = part.textSections[i];
    sections.push(`    {
      id: '${topic.slug.substring(0, 5)}${partNum}-${ts.id}',
      type: 'text' as const,
      content: \`
# ${ts.title}

${ts.body}
      \`
    }`);
    
    if (i === 0 && part.mcQuestions.length > 0) {
      const halfQ = Math.ceil(part.mcQuestions.length / 2);
      sections.push(generateMCSection(topic.slug, partNum, 'quiz1', part.mcQuestions.slice(0, halfQ)));
    }
  }
  
  if (part.mcQuestions.length > 1) {
    const halfQ = Math.ceil(part.mcQuestions.length / 2);
    const rest = part.mcQuestions.slice(halfQ);
    if (rest.length > 0) {
      sections.push(generateMCSection(topic.slug, partNum, 'quiz2', rest));
    }
  }
  
  if (part.dropdowns) {
    sections.push(generateDropdownSection(topic.slug, partNum, part.dropdowns));
  }
  
  return `export const ${exportName} = {
  topicSlug: '${topic.slug}',
  sections: [
${sections.join(',\n')}
  ]
}
`;
}

// AP Psychology - 25 Topics
const topics = [
  {
    slug: 'history-approaches-psychology',
    title: 'History & Approaches to Psychology',
    prefix: 'psych',
    exportBase: 'psychHistoryApproaches',
    parts: [
      { title: 'Origins of Psychology', textSections: [{ id: 'intro', title: '🧠 History & Approaches to Psychology', body: '**Part 1 of 7 — Origins of Psychology**\n\nPsychology is the **scientific study of behavior and mental processes**. It emerged as a distinct discipline in the late 19th century.\n\n### Key Milestones\n\n| Year | Event | Pioneer |\n|------|-------|---------|\n| **1879** | First psychology lab | Wilhelm Wundt (Leipzig, Germany) |\n| **1890** | Principles of Psychology | William James |\n| **1900** | Interpretation of Dreams | Sigmund Freud |\n| **1913** | Behaviorist manifesto | John B. Watson |\n| **1954** | Humanistic psychology | Abraham Maslow |\n| **1967** | Cognitive revolution | Ulric Neisser |\n\nWundt is considered the **"father of psychology"** for establishing the first experimental laboratory.' }, { id: 'schools', title: '## Early Schools of Thought', body: '### Structuralism (Wundt, Titchener)\n- Goal: identify basic elements of consciousness\n- Method: **introspection** (trained self-observation)\n- Criticism: too subjective, not replicable\n\n### Functionalism (William James)\n- Goal: understand the **purpose** of consciousness\n- Influenced by Darwin\'s theory of evolution\n- Asked: "How does behavior help us adapt?"\n- Led to applied psychology and educational psychology\n\n### Gestalt Psychology (Wertheimer)\n- "The whole is greater than the sum of its parts"\n- Studied perception and how we organize sensory information\n- Principles: proximity, similarity, closure, continuity' }], mcQuestions: [{ q: 'Who established the first psychology laboratory?', opts: ['Sigmund Freud', 'William James', 'Wilhelm Wundt', 'John Watson'], correct: 2, explanation: 'Wilhelm Wundt established the first experimental psychology laboratory in 1879 in Leipzig, Germany.' }, { q: 'Structuralism used which method to study consciousness?', opts: ['Dream analysis', 'Behavioral observation', 'Introspection', 'Brain imaging'], correct: 2, explanation: 'Structuralists used introspection — trained subjects reported their conscious experiences of stimuli.' }, { q: 'Functionalism was most influenced by:', opts: ['Freudian theory', 'Darwin\'s theory of evolution', 'Gestalt principles', 'Classical conditioning'], correct: 1, explanation: 'William James and functionalism were heavily influenced by Darwin, asking how mental processes help organisms adapt and survive.' }], dropdowns: { items: [{ label: 'The first psychology lab was established in ___', options: ['1859', '1879', '1900', '1920'], correct: '1879' }, { label: 'Structuralism aimed to identify the basic ___ of consciousness', options: ['functions', 'elements', 'behaviors', 'dreams'], correct: 'elements' }, { label: '"The whole is greater than the sum of its parts" describes ___', options: ['structuralism', 'functionalism', 'Gestalt psychology', 'behaviorism'], correct: 'Gestalt psychology' }], hints: ['Wundt\'s lab date.', 'Structure = building blocks/elements.', 'This school emphasized perception and organization.'], explanation: 'The first lab was in 1879. Structuralism studied the elements of consciousness. Gestalt psychology emphasized holistic perception.' } },
      { title: 'Modern Perspectives', textSections: [{ id: 'perspectives', title: '## Modern Psychological Perspectives', body: '| Perspective | Focus | Key Figures |\n|------------|-------|-------------|\n| **Biological** | Brain, genetics, neurotransmitters | — |\n| **Behavioral** | Observable behavior, learning | Watson, Skinner |\n| **Cognitive** | Thinking, memory, perception | Piaget, Chomsky |\n| **Psychodynamic** | Unconscious, childhood | Freud, Jung |\n| **Humanistic** | Free will, self-actualization | Maslow, Rogers |\n| **Sociocultural** | Culture, social context | Vygotsky |\n| **Evolutionary** | Natural selection of behaviors | — |\n\n### Biopsychosocial Approach\n\nModern psychology recognizes that behavior results from the interaction of:\n- **Biological** factors (genetics, brain chemistry)\n- **Psychological** factors (thoughts, emotions, personality)\n- **Social** factors (culture, family, peers)' }, { id: 'subfields', title: '## Subfields of Psychology', body: '| Subfield | Focus |\n|----------|-------|\n| **Clinical** | Diagnosis and treatment of disorders |\n| **Counseling** | Help with adjustment and life challenges |\n| **Developmental** | Lifespan changes |\n| **Cognitive** | Mental processes |\n| **Social** | Group behavior and influence |\n| **Industrial/Organizational** | Workplace behavior |\n| **School** | Learning and education |\n| **Forensic** | Psychology and law |' }], mcQuestions: [{ q: 'The biopsychosocial approach emphasizes:', opts: ['Only biological factors', 'The interaction of biological, psychological, and social factors', 'Only unconscious processes', 'Only observable behavior'], correct: 1, explanation: 'The biopsychosocial approach recognizes that behavior results from the complex interaction of biological, psychological, and social factors.' }, { q: 'Which perspective focuses on unconscious motivations and childhood experiences?', opts: ['Behavioral', 'Cognitive', 'Psychodynamic', 'Humanistic'], correct: 2, explanation: 'The psychodynamic perspective, founded by Freud, emphasizes unconscious processes and the influence of early childhood experiences.' }], dropdowns: { items: [{ label: 'Behaviorists study only ___ behavior', options: ['unconscious', 'observable', 'cognitive', 'emotional'], correct: 'observable' }, { label: 'Maslow and Rogers are associated with the ___ perspective', options: ['behavioral', 'cognitive', 'humanistic', 'biological'], correct: 'humanistic' }, { label: 'The ___ perspective examines how natural selection shaped behaviors', options: ['cognitive', 'evolutionary', 'psychodynamic', 'sociocultural'], correct: 'evolutionary' }], hints: ['Behaviorists rejected introspection in favor of what can be measured.', 'Self-actualization and unconditional positive regard.', 'Darwin\'s ideas applied to behavior.'], explanation: 'Behaviorists study observable behavior. Maslow and Rogers founded humanistic psychology. The evolutionary perspective applies natural selection to behavior.' } },
      { title: 'Research Methods', textSections: [{ id: 'methods', title: '## Research Methods in Psychology', body: '### The Scientific Method\n\n1. **Observe** a phenomenon\n2. **Form a hypothesis** (testable prediction)\n3. **Design and conduct** an experiment\n4. **Analyze data** using statistics\n5. **Draw conclusions** and replicate\n\n### Types of Research\n\n| Method | Description | Strengths | Weaknesses |\n|--------|------------|-----------|------------|\n| **Experiment** | Manipulate IV, measure DV | Establishes causation | Artificial setting |\n| **Correlational** | Measure relationship between variables | Real-world data | Cannot prove causation |\n| **Survey** | Self-report questionnaires | Large samples | Social desirability bias |\n| **Case study** | In-depth study of one individual | Rich detail | Cannot generalize |\n| **Naturalistic observation** | Observe in natural setting | Ecological validity | No control |' }, { id: 'variables', title: '## Variables & Experimental Design', body: '### Key Terms\n\n- **Independent variable (IV):** what the researcher manipulates\n- **Dependent variable (DV):** what is measured\n- **Control group:** no treatment (comparison)\n- **Experimental group:** receives treatment\n- **Random assignment:** each participant has equal chance of being in any group\n- **Confounding variable:** uncontrolled variable that may affect results\n\n### Example\nResearch question: Does caffeine improve test performance?\n- IV: caffeine (yes/no)\n- DV: test scores\n- Control group: no caffeine\n- Experimental group: caffeine given' }], mcQuestions: [{ q: 'Which research method can establish a cause-and-effect relationship?', opts: ['Correlation', 'Survey', 'Experiment', 'Case study'], correct: 2, explanation: 'Only experiments (with random assignment, control groups, and manipulation of variables) can establish causation.' }, { q: 'In an experiment testing if music affects study performance, the independent variable is:', opts: ['Study performance', 'Music (present or absent)', 'The time of day', 'The participants\' age'], correct: 1, explanation: 'The independent variable is what the researcher manipulates — in this case, whether music is present or absent during studying.' }], dropdowns: { items: [{ label: 'Correlation does NOT prove ___', options: ['association', 'causation', 'relationship', 'correlation'], correct: 'causation' }, { label: '___ assignment ensures groups are equivalent', options: ['Self', 'Random', 'Alphabetical', 'Age-based'], correct: 'Random' }, { label: 'The variable that is measured in an experiment is the ___', options: ['independent variable', 'dependent variable', 'confound', 'control'], correct: 'dependent variable' }], hints: ['The mantra of psychology: correlation ≠ ?', 'This eliminates selection bias.', 'This variable "depends" on what the researcher does.'], explanation: 'Correlation cannot prove causation. Random assignment creates equivalent groups. The dependent variable is what is measured.' } },
      { title: 'Statistics & Data', textSections: [{ id: 'stats', title: '## Descriptive Statistics', body: '### Measures of Central Tendency\n\n| Measure | Definition | When to Use |\n|---------|-----------|-------------|\n| **Mean** | Average of all scores | Normal distribution |\n| **Median** | Middle score | Skewed distribution |\n| **Mode** | Most frequent score | Categorical data |\n\n### Measures of Variability\n\n| Measure | Definition |\n|---------|------------|\n| **Range** | Highest - lowest score |\n| **Standard deviation** | Average distance from the mean |\n| **Variance** | Standard deviation squared |\n\n### Normal Distribution\n\n- Bell-shaped curve\n- Mean = median = mode\n- ~68% of scores within 1 SD of mean\n- ~95% within 2 SD\n- ~99.7% within 3 SD' }, { id: 'inferential', title: '## Inferential Statistics', body: '### Statistical Significance\n\n- **p-value:** probability that results occurred by chance\n- **p < 0.05:** results are statistically significant\n- Means there\'s less than a 5% chance the results are due to chance\n\n### Key Concepts\n\n- **Reliability:** consistency of results\n- **Validity:** does it measure what it claims to?\n- **Replication:** repeating a study to verify results\n- **Operational definition:** precise description of how a variable is measured' }], mcQuestions: [{ q: 'In a normal distribution, approximately what percentage of scores fall within 1 standard deviation of the mean?', opts: ['50%', '68%', '95%', '99.7%'], correct: 1, explanation: 'In a normal distribution, approximately 68% of scores fall within 1 standard deviation of the mean (the 68-95-99.7 rule).' }, { q: 'A p-value of 0.03 means:', opts: ['The results are not significant', 'There is a 3% chance the results are due to chance', 'The experiment failed', '97% of participants responded'], correct: 1, explanation: 'A p-value of 0.03 means there is a 3% probability that the results occurred by chance. Since p < 0.05, the results are statistically significant.' }], dropdowns: { items: [{ label: 'The best measure of central tendency for skewed data is the ___', options: ['mean', 'median', 'mode', 'range'], correct: 'median' }, { label: 'Results are statistically significant when p < ___', options: ['0.01', '0.05', '0.50', '1.00'], correct: '0.05' }, { label: '___ refers to whether a test measures what it claims to measure', options: ['Reliability', 'Validity', 'Replication', 'Standardization'], correct: 'Validity' }], hints: ['The median is resistant to outliers.', 'The standard threshold in psychology.', 'Does the test measure the right thing?'], explanation: 'Median is best for skewed data. p < 0.05 is the standard significance threshold. Validity = measuring what you intend to measure.' } },
      { title: 'Ethics in Research', textSections: [{ id: 'ethics', title: '## Ethics in Psychological Research', body: '### APA Ethical Guidelines\n\n1. **Informed consent:** participants must know what the study involves\n2. **Deception:** allowed only when necessary, must debrief afterward\n3. **Confidentiality:** protect participants\' personal information\n4. **Right to withdraw:** participants can leave at any time\n5. **Debriefing:** explain the true purpose of the study afterward\n6. **Minimize harm:** avoid physical and psychological harm\n\n### Institutional Review Board (IRB)\n\n- Reviews all research proposals involving human subjects\n- Ensures ethical standards are met\n- Weighs potential benefits against risks\n\n### Famous Ethical Controversies\n\n| Study | Researcher | Ethical Issue |\n|-------|-----------|---------------|\n| **Milgram obedience** | Milgram | Psychological distress |\n| **Stanford prison** | Zimbardo | Harm to participants |\n| **Little Albert** | Watson | Conditioning fear in infant |' }, { id: 'animal', title: '## Animal Research Ethics', body: '- **IACUC** (Institutional Animal Care and Use Committee) oversees animal research\n- Animals must be treated humanely\n- Research must have scientific merit\n- Minimize pain and suffering\n- Use alternatives when possible\n\nAnimal research has contributed to understanding of:\n- Learning (conditioning)\n- Brain function\n- Drug effects\n- Genetics of behavior' }], mcQuestions: [{ q: 'Informed consent requires that participants:', opts: ['Sign a legal contract', 'Know what the study involves before participating', 'Are paid for their time', 'Have a psychology background'], correct: 1, explanation: 'Informed consent means participants must be told what the study involves and voluntarily agree to participate before the study begins.' }, { q: 'Debriefing occurs:', opts: ['Before the study begins', 'During data collection', 'After the study, to explain the true purpose', 'Only if deception was used'], correct: 2, explanation: 'Debriefing occurs after the study to explain the true purpose, address any deception, and ensure participant well-being.' }], dropdowns: { items: [{ label: 'The committee that reviews research ethics is the ___', options: ['APA', 'IRB', 'NIH', 'FDA'], correct: 'IRB' }, { label: 'Participants must always have the right to ___', options: ['be paid', 'withdraw', 'see results', 'choose their group'], correct: 'withdraw' }, { label: 'The Milgram study raised concerns about ___', options: ['animal welfare', 'participant distress', 'data fabrication', 'informed consent'], correct: 'participant distress' }], hints: ['This board reviews all human research proposals.', 'Participation must always be voluntary.', 'Participants showed extreme anxiety during this obedience study.'], explanation: 'The IRB reviews research ethics. Participants can always withdraw. The Milgram study caused significant psychological distress.' } },
      { title: 'Problem-Solving Workshop', textSections: [{ id: 'workshop', title: '## Research Methods Problem-Solving', body: '### Common AP Question Types\n\n1. **Identify variables** in an experiment (IV, DV, confounds)\n2. **Choose the appropriate research method** for a scenario\n3. **Interpret statistical results** (mean, SD, p-value)\n4. **Identify ethical violations** in research scenarios\n5. **Distinguish correlation from causation**\n\n### Practice Scenario\n\nA researcher wants to know if sleep deprivation affects memory. She randomly assigns 40 college students to either a sleep-deprived group (4 hours) or a control group (8 hours), then tests their memory the next day.\n\n- **IV:** Amount of sleep (4 hours vs 8 hours)\n- **DV:** Memory test scores\n- **Random assignment:** Yes → can establish causation\n- **Potential confound:** Prior sleep habits, caffeine use' }, { id: 'tips', title: '## Tips', body: '- Always identify IV and DV first\n- Check for random assignment before claiming causation\n- Look for confounding variables\n- Remember: correlation ≠ causation\n- Consider both reliability AND validity' }], mcQuestions: [{ q: 'A study finds that students who eat breakfast get higher grades. This is:', opts: ['Proof that breakfast causes better grades', 'A correlational finding', 'An experimental result', 'A case study'], correct: 1, explanation: 'This is correlational — it shows a relationship but doesn\'t prove causation. Maybe motivated students both eat breakfast AND study more.' }, { q: 'A researcher studies one patient with a rare brain injury in great detail. This is a:', opts: ['Correlational study', 'Naturalistic observation', 'Case study', 'Double-blind experiment'], correct: 2, explanation: 'A case study is an in-depth investigation of a single individual, useful for rare conditions but limited in generalizability.' }, { q: 'To reduce experimenter bias, a researcher should use:', opts: ['A larger sample size', 'A double-blind procedure', 'Naturalistic observation', 'Self-report surveys'], correct: 1, explanation: 'In a double-blind procedure, neither the participants nor the researchers who interact with them know which group is which, reducing bias.' }], dropdowns: { items: [{ label: 'Random ___ is needed to establish causation', options: ['sampling', 'assignment', 'selection', 'distribution'], correct: 'assignment' }, { label: 'A study that cannot be replicated lacks ___', options: ['validity', 'reliability', 'significance', 'power'], correct: 'reliability' }, { label: 'Surveying 10 people is problematic because of small ___', options: ['effect size', 'sample size', 'standard deviation', 'p-value'], correct: 'sample size' }], hints: ['This ensures equivalent groups in experiments.', 'Consistent results = reliable.', 'Larger samples better represent the population.'], explanation: 'Random assignment enables causal claims. Replicability requires reliability. Small sample sizes limit generalizability.' } },
      { title: 'Synthesis & AP Review', textSections: [{ id: 'synthesis', title: '## AP Psychology: History & Methods Review', body: '### Key Comparisons\n\n| Topic | Key Points |\n|-------|------------|\n| **Wundt** | First lab, structuralism, introspection |\n| **James** | Functionalism, adaptation |\n| **Freud** | Psychodynamic, unconscious |\n| **Watson/Skinner** | Behaviorism, observable behavior |\n| **Maslow/Rogers** | Humanistic, self-actualization |\n| **Experiments** | Causation, IV/DV, random assignment |\n| **Correlation** | Association only, no causation |\n| **Ethics** | Informed consent, debriefing, IRB |' }, { id: 'tips', title: '## AP Exam Tips', body: '- Know the **key figures** and their contributions\n- Be able to **design an experiment** from a research question\n- Understand the **difference between correlation and causation**\n- Know **ethical guidelines** and famous ethical controversies\n- Practice **interpreting statistics** (mean, SD, p-value)\n- Remember the **biopsychosocial approach**' }], mcQuestions: [{ q: 'Which pair correctly matches a researcher with their perspective?', opts: ['Freud — Behavioral', 'Skinner — Psychodynamic', 'Rogers — Humanistic', 'Watson — Cognitive'], correct: 2, explanation: 'Carl Rogers is associated with the humanistic perspective, emphasizing unconditional positive regard and client-centered therapy.' }, { q: 'A researcher finds r = -0.85 between stress and health. This means:', opts: ['Stress causes poor health', 'There is a strong negative correlation', 'The relationship is weak', 'The correlation is positive'], correct: 1, explanation: 'r = -0.85 is a strong negative correlation (close to -1.0). As stress increases, health tends to decrease. But correlation ≠ causation.' }], dropdowns: { items: [{ label: 'The father of psychology is ___', options: ['Freud', 'James', 'Wundt', 'Skinner'], correct: 'Wundt' }, { label: 'Behaviorism rejected the study of ___', options: ['behavior', 'mental processes', 'animals', 'statistics'], correct: 'mental processes' }, { label: 'p < 0.05 means results are statistically ___', options: ['insignificant', 'significant', 'invalid', 'unreliable'], correct: 'significant' }], hints: ['He established the first lab in 1879.', 'Watson said psychology should only study what is observable.', 'The standard threshold for significance.'], explanation: 'Wundt is the father of psychology. Behaviorists rejected studying unobservable mental processes. p < 0.05 = statistically significant.' } }
    ]
  },
];

// Generate remaining 24 psychology topics programmatically
const psychTopicDefs = [
  { slug: 'biological-bases-brain', title: 'The Brain & Nervous System', exportBase: 'psychBrain', partTopics: ['Neurons & Neural Communication', 'Neurotransmitters', 'The Nervous System', 'Brain Structure & Function', 'Brain Imaging Techniques', 'Problem-Solving Workshop', 'Synthesis & AP Review'],
    concepts: [
      ['Neurons: cell body (soma), dendrites, axon, myelin sheath', 'Action potential: all-or-none electrical signal', 'Synapse: gap between neurons', 'Resting potential: -70mV inside the neuron'],
      ['Acetylcholine: muscle movement, memory', 'Dopamine: pleasure, reward, movement (deficiency → Parkinson\'s)', 'Serotonin: mood, sleep, appetite (deficiency → depression)', 'GABA: inhibitory; Glutamate: excitatory'],
      ['Central NS: brain + spinal cord', 'Peripheral NS: somatic (voluntary) + autonomic (involuntary)', 'Sympathetic: fight-or-flight', 'Parasympathetic: rest-and-digest'],
      ['Brainstem: medulla (breathing), pons, reticular formation', 'Cerebellum: coordination and balance', 'Limbic system: amygdala (fear), hippocampus (memory), hypothalamus (homeostasis)', 'Cerebral cortex: frontal, parietal, temporal, occipital lobes'],
      ['fMRI: shows brain activity (blood flow)', 'EEG: measures electrical activity', 'CT/MRI: structural images', 'PET scan: metabolic activity using radioactive glucose'],
      ['Identifying brain regions from symptoms', 'Matching neurotransmitters to functions', 'Analyzing brain imaging results', 'Predicting effects of brain damage'],
      ['Brain plasticity and lateralization', 'Split-brain research (Sperry)', 'Phineas Gage case study', 'AP exam: brain structure identification']
    ] },
  { slug: 'genetics-behavior', title: 'Genetics & Behavior', exportBase: 'psychGenetics', partTopics: ['Nature vs Nurture', 'Behavioral Genetics', 'Twin & Adoption Studies', 'Evolutionary Psychology', 'Gene-Environment Interaction', 'Problem-Solving Workshop', 'Synthesis & AP Review'],
    concepts: [
      ['Nature: genetic/biological influences', 'Nurture: environmental influences', 'Interaction: genes AND environment shape behavior', 'Epigenetics: environment affects gene expression'],
      ['Heritability: proportion of variation due to genetics', 'Temperament: inborn behavioral style', 'Behavioral genetics methods: twin, adoption, family studies', 'Heritability of intelligence: ~50-80%'],
      ['Identical (MZ) twins: 100% shared genes', 'Fraternal (DZ) twins: ~50% shared genes', 'Higher concordance in MZ twins → genetic influence', 'Adoption studies separate genetic and environmental effects'],
      ['Natural selection shaped behavioral tendencies', 'Mate selection preferences (universal patterns)', 'Parental investment theory', 'Criticisms: just-so stories, difficult to test'],
      ['Diathesis-stress model: genetic predisposition + environmental trigger', 'Phenylketonuria (PKU): genetic but treatable by environment', 'Epigenetic changes can be inherited', 'Gene × environment interaction in mental health'],
      ['Interpreting heritability statistics', 'Analyzing twin study data', 'Evaluating nature vs nurture arguments', 'Designing behavioral genetics studies'],
      ['Genes set the range, environment determines position', 'Neither nature nor nurture alone', 'Evolutionary psychology on the AP exam', 'Critical evaluation of genetic determinism']
    ] },
  { slug: 'sensation-sensory-processing', title: 'Sensation & Sensory Processing', exportBase: 'psychSensation', partTopics: ['Introduction to Sensation', 'Vision', 'Hearing', 'Chemical & Body Senses', 'Sensory Thresholds', 'Problem-Solving Workshop', 'Synthesis & AP Review'],
    concepts: [
      ['Sensation: detecting stimuli', 'Perception: interpreting stimuli', 'Transduction: converting physical energy to neural signals', 'Bottom-up vs top-down processing'],
      ['Light enters eye: cornea → pupil → lens → retina', 'Rods: dim light, peripheral vision', 'Cones: color, detail, fovea (3 types: RGB)', 'Trichromatic theory (Young-Helmholtz) vs opponent-process theory'],
      ['Sound waves → outer ear → eardrum → ossicles → cochlea → hair cells', 'Frequency = pitch; amplitude = loudness', 'Place theory: high-pitched sounds', 'Frequency theory: low-pitched sounds'],
      ['Taste: sweet, sour, salty, bitter, umami', 'Smell: olfactory receptors → olfactory bulb → limbic system', 'Touch: pressure, temperature, pain (gate-control theory)', 'Kinesthesia: body position; Vestibular: balance'],
      ['Absolute threshold: minimum stimulus detected 50% of the time', 'Difference threshold (JND): smallest detectable difference', 'Weber\'s Law: JND is proportional to stimulus magnitude', 'Signal detection theory: detection depends on sensitivity AND decision criteria'],
      ['Applying Weber\'s Law to problems', 'Identifying sensory structures', 'Analyzing signal detection scenarios', 'Connecting sensation disorders to mechanisms'],
      ['Sensation vs perception distinction', 'Sensory adaptation: decreased sensitivity over time', 'Synesthesia and sensory processing', 'AP exam: sensory pathways and theories']
    ] },
  { slug: 'perception-attention', title: 'Perception & Attention', exportBase: 'psychPerception', partTopics: ['Perceptual Organization', 'Depth Perception', 'Perceptual Constancies & Illusions', 'Attention', 'Perceptual Set & Context', 'Problem-Solving Workshop', 'Synthesis & AP Review'],
    concepts: [
      ['Gestalt principles: proximity, similarity, closure, continuity, figure-ground', 'We organize sensory input into meaningful patterns', 'Top-down processing uses expectations', 'Bottom-up processing starts with raw sensory data'],
      ['Binocular cues: retinal disparity, convergence (need both eyes)', 'Monocular cues: relative size, overlap, linear perspective, texture gradient', 'Motion parallax: closer objects appear to move faster', 'Depth perception develops around 6 months (visual cliff)'],
      ['Size constancy: objects appear same size despite distance', 'Shape constancy: objects appear same shape despite viewing angle', 'Color constancy: colors appear same despite lighting changes', 'Visual illusions: Müller-Lyer, Ponzo, Ames room'],
      ['Selective attention: focusing on one stimulus while ignoring others', 'Cocktail party effect: hearing your name in a noisy room', 'Inattentional blindness: failing to notice obvious stimuli', 'Change blindness: failing to detect changes in scenes'],
      ['Perceptual set: expectations influence perception', 'Context effects: surrounding information affects interpretation', 'Schemas: mental frameworks that guide perception', 'Cultural influences on perception'],
      ['Identifying Gestalt principles in images', 'Analyzing depth cue scenarios', 'Explaining visual illusions', 'Demonstrating selective attention phenomena'],
      ['Perception is an active, constructive process', 'Experience shapes how we perceive', 'Attention is limited and selective', 'AP exam: perception applications']
    ] },
  { slug: 'classical-conditioning', title: 'Classical Conditioning', exportBase: 'psychClassical', partTopics: ['Pavlov\'s Discovery', 'Key Concepts', 'Acquisition & Extinction', 'Generalization & Discrimination', 'Applications', 'Problem-Solving Workshop', 'Synthesis & AP Review'],
    concepts: [
      ['Ivan Pavlov: Russian physiologist studying digestion', 'Dogs salivated to bell after pairing with food', 'Learning: relatively permanent change in behavior due to experience', 'Classical conditioning: learning by association'],
      ['UCS (unconditioned stimulus): naturally triggers response (food)', 'UCR (unconditioned response): natural response to UCS (salivation)', 'CS (conditioned stimulus): neutral stimulus paired with UCS (bell)', 'CR (conditioned response): learned response to CS (salivation to bell)'],
      ['Acquisition: CS-UCS pairing builds the association', 'Extinction: CS presented alone → CR weakens', 'Spontaneous recovery: CR reappears after rest period', 'Higher-order conditioning: CS1 paired with CS2'],
      ['Generalization: responding to similar stimuli', 'Discrimination: responding only to the specific CS', 'Little Albert experiment: Watson conditioned fear of white rat', 'Fear generalized to other furry objects'],
      ['Phobias: learned through classical conditioning', 'Taste aversion: one-trial learning (Garcia effect)', 'Systematic desensitization: treating phobias', 'Advertising: pairing products with pleasant stimuli'],
      ['Identifying UCS, UCR, CS, CR in scenarios', 'Designing classical conditioning experiments', 'Predicting generalization and discrimination', 'Analyzing real-world conditioning examples'],
      ['Classical conditioning = involuntary responses', 'Biological preparedness: some associations learned easier', 'Conditioning in everyday life', 'AP exam: scenario analysis']
    ] },
  { slug: 'operant-conditioning', title: 'Operant Conditioning', exportBase: 'psychOperant', partTopics: ['Thorndike & Skinner', 'Reinforcement Types', 'Punishment', 'Schedules of Reinforcement', 'Shaping & Chaining', 'Problem-Solving Workshop', 'Synthesis & AP Review'],
    concepts: [
      ['Thorndike\'s Law of Effect: rewarded behaviors are repeated', 'B.F. Skinner: operant conditioning chamber (Skinner box)', 'Operant conditioning: learning through consequences', 'Behavior followed by reinforcement increases; by punishment decreases'],
      ['Positive reinforcement: adding pleasant stimulus (+R)', 'Negative reinforcement: removing aversive stimulus (-R)', 'Both reinforcement types INCREASE behavior', 'Primary reinforcers (food) vs secondary reinforcers (money, grades)'],
      ['Positive punishment: adding aversive stimulus (+P)', 'Negative punishment: removing pleasant stimulus (-P)', 'Both punishment types DECREASE behavior', 'Punishment has limitations: suppresses but doesn\'t eliminate, can cause aggression'],
      ['Continuous reinforcement: reinforce every response', 'Fixed-ratio (FR): reinforce after set number of responses', 'Variable-ratio (VR): reinforce after unpredictable number (gambling, most resistant to extinction)', 'Fixed-interval (FI) and Variable-interval (VI) schedules'],
      ['Shaping: reinforcing successive approximations', 'Used to teach complex behaviors', 'Token economy: secondary reinforcers exchangeable for primary', 'Applied behavior analysis (ABA): treating autism'],
      ['Classifying reinforcement and punishment scenarios', 'Identifying schedules of reinforcement', 'Comparing classical and operant conditioning', 'Designing behavior modification plans'],
      ['Operant = voluntary behavior', 'Classical = involuntary responses', 'Cognitive maps (Tolman) and latent learning', 'AP exam: reinforcement scenarios']
    ] },
  { slug: 'observational-learning-cognition', title: 'Observational & Cognitive Learning', exportBase: 'psychObservational', partTopics: ['Bandura & Social Learning', 'Modeling Processes', 'Cognitive Factors in Learning', 'Insight & Latent Learning', 'Biological Constraints', 'Problem-Solving Workshop', 'Synthesis & AP Review'],
    concepts: [
      ['Albert Bandura: social learning theory', 'Bobo doll experiment: children imitated aggressive model', 'Observational learning: learning by watching others', 'No direct reinforcement needed'],
      ['Attention: must observe the model', 'Retention: must remember the behavior', 'Reproduction: must be able to perform the behavior', 'Motivation: must want to imitate (vicarious reinforcement)'],
      ['Cognitive maps: mental representations of space (Tolman)', 'Latent learning: learning occurs but isn\'t demonstrated until motivated', 'Learned helplessness: Seligman — giving up after uncontrollable events', 'Self-efficacy: belief in one\'s ability to succeed (Bandura)'],
      ['Insight learning: Köhler\'s apes — sudden "aha!" solutions', 'Not trial-and-error but sudden reorganization', 'Abstract learning: understanding rules and principles', 'Transfer of learning: applying knowledge to new situations'],
      ['Biological preparedness: some associations learned more easily', 'Instinctive drift: tendency to revert to innate behaviors', 'Taste aversion: one-trial learning (biological significance)', 'Critical periods for certain types of learning'],
      ['Applying learning theories to real scenarios', 'Comparing classical, operant, and observational learning', 'Analyzing Bandura\'s research', 'Predicting learning outcomes'],
      ['Three types of learning compared', 'Cognitive revolution in learning theory', 'Applications to education and therapy', 'AP exam: learning theory identification']
    ] },
  { slug: 'memory-encoding-storage', title: 'Memory: Encoding & Storage', exportBase: 'psychMemoryEncode', partTopics: ['Memory Models', 'Encoding Processes', 'Sensory & Short-Term Memory', 'Long-Term Memory Types', 'Memory Storage', 'Problem-Solving Workshop', 'Synthesis & AP Review'],
    concepts: [
      ['Atkinson-Shiffrin model: sensory → short-term → long-term', 'Working memory model (Baddeley): central executive + subsystems', 'Encoding → Storage → Retrieval', 'Memory is constructive, not like a video recording'],
      ['Automatic processing: unconscious encoding (time, space, frequency)', 'Effortful processing: requires attention and rehearsal', 'Levels of processing (Craik & Lockhart): deeper = better', 'Semantic encoding is most effective for long-term memory'],
      ['Sensory memory: brief (~0.5s visual, ~3-4s auditory)', 'Iconic memory (visual) and echoic memory (auditory)', 'Short-term memory: 7±2 items, ~20 seconds without rehearsal', 'Chunking: grouping items to expand capacity'],
      ['Explicit (declarative): conscious recall', 'Episodic: personal events (what you had for breakfast)', 'Semantic: general knowledge (the capital of France)', 'Implicit (nondeclarative): procedural memory, conditioning'],
      ['Hippocampus: converts short-term to long-term memory', 'Amygdala: emotional memories', 'Cerebellum: procedural/motor memory', 'Long-term potentiation (LTP): neural basis of memory'],
      ['Identifying memory types from scenarios', 'Applying encoding strategies', 'Analyzing amnesia cases', 'Designing memory improvement experiments'],
      ['Memory is constructive and fallible', 'Multiple memory systems in the brain', 'Encoding strategies for studying', 'AP exam: memory model applications']
    ] },
  { slug: 'retrieval-forgetting', title: 'Retrieval & Forgetting', exportBase: 'psychRetrieval', partTopics: ['Retrieval Processes', 'Forgetting Theories', 'Memory Distortion', 'Amnesia Types', 'Improving Memory', 'Problem-Solving Workshop', 'Synthesis & AP Review'],
    concepts: [
      ['Recall: retrieving information without cues (essay questions)', 'Recognition: identifying previously learned info (multiple choice)', 'Retrieval cues: stimuli that help access stored memories', 'Context-dependent memory: same environment aids recall'],
      ['Ebbinghaus forgetting curve: rapid initial forgetting', 'Encoding failure: information never encoded properly', 'Storage decay: memory traces fade over time', 'Retrieval failure: information is stored but inaccessible (tip-of-tongue)'],
      ['Misinformation effect (Loftus): post-event info alters memory', 'Source monitoring: forgetting where we learned something', 'False memories: confident but inaccurate recollections', 'Imagination inflation: imagining events makes them feel real'],
      ['Anterograde amnesia: can\'t form new memories (H.M.)', 'Retrograde amnesia: can\'t recall past memories', 'Infantile amnesia: few memories before age 3', 'Dissociative amnesia: memory loss due to psychological trauma'],
      ['Spacing effect: distributed practice > massed practice', 'Testing effect: retrieval practice improves retention', 'Elaborative rehearsal: connecting to existing knowledge', 'Mnemonic devices: method of loci, acronyms, visual imagery'],
      ['Identifying forgetting mechanisms', 'Analyzing misinformation scenarios', 'Evaluating eyewitness testimony reliability', 'Designing memory improvement strategies'],
      ['Forgetting is normal and adaptive', 'Memory is reconstructive, not reproductive', 'Eyewitness testimony is unreliable', 'AP exam: forgetting and distortion questions']
    ] },
  { slug: 'thinking-problem-solving', title: 'Thinking & Problem Solving', exportBase: 'psychThinking', partTopics: ['Concepts & Categories', 'Problem-Solving Strategies', 'Decision Making', 'Judgment & Heuristics', 'Creativity', 'Problem-Solving Workshop', 'Synthesis & AP Review'],
    concepts: [
      ['Concepts: mental categories for objects, events, ideas', 'Prototypes: best example of a concept (robin = bird)', 'Schemas: organized knowledge structures', 'Scripts: schemas for sequences of events (restaurant script)'],
      ['Algorithms: step-by-step procedures (guaranteed solution)', 'Heuristics: mental shortcuts (faster but error-prone)', 'Insight: sudden realization of a solution', 'Fixation: inability to see a problem from a new perspective'],
      ['Framing effect: how a question is presented affects decisions', 'Loss aversion: losses loom larger than equivalent gains', 'Sunk cost fallacy: continuing because of past investment', 'Overconfidence: overestimating accuracy of our judgments'],
      ['Availability heuristic: judging likelihood by ease of recall', 'Representativeness heuristic: judging by similarity to prototype', 'Anchoring: relying too heavily on first piece of information', 'Confirmation bias: seeking evidence that supports beliefs'],
      ['Convergent thinking: one correct answer', 'Divergent thinking: generating many possible solutions', 'Components of creativity: expertise, imaginative thinking, motivation', 'Brainstorming and creative problem-solving'],
      ['Identifying heuristics and biases in scenarios', 'Analyzing decision-making errors', 'Applying problem-solving strategies', 'Evaluating framing effects'],
      ['Heuristics are efficient but can lead to errors', 'Cognitive biases affect everyday decisions', 'Creativity involves both knowledge and flexibility', 'AP exam: identifying biases and heuristics']
    ] },
  { slug: 'language-intelligence', title: 'Language & Intelligence', exportBase: 'psychLanguage', partTopics: ['Language Structure & Development', 'Language Theories', 'Intelligence Theories', 'Intelligence Testing', 'Intelligence Controversies', 'Problem-Solving Workshop', 'Synthesis & AP Review'],
    concepts: [
      ['Phonemes: basic sound units (~40 in English)', 'Morphemes: smallest meaningful units (prefixes, suffixes, words)', 'Syntax: rules for combining words into sentences (grammar)', 'Language milestones: babbling (4mo), first words (12mo), two-word stage (24mo)'],
      ['Chomsky: language acquisition device (LAD), universal grammar', 'Skinner: language learned through operant conditioning', 'Critical period: language learned most easily before puberty', 'Whorf\'s linguistic relativity: language shapes thought'],
      ['Spearman\'s g: general intelligence factor', 'Gardner\'s multiple intelligences: 8 types (linguistic, musical, spatial, etc.)', 'Sternberg\'s triarchic: analytical, creative, practical', 'Emotional intelligence (Goleman): perceiving, using, managing emotions'],
      ['Stanford-Binet and Wechsler tests (IQ tests)', 'IQ = (mental age / chronological age) × 100 (original formula)', 'Normal distribution: mean = 100, SD = 15', 'Reliability and validity of intelligence tests'],
      ['Nature vs nurture in intelligence', 'Flynn effect: IQ scores rising over generations', 'Stereotype threat: awareness of stereotypes impairs performance', 'Cultural bias in testing: test items may favor certain groups'],
      ['Analyzing intelligence test data', 'Evaluating multiple intelligence theories', 'Identifying language development stages', 'Applying linguistic relativity'],
      ['Intelligence is complex and multifaceted', 'Language and thought are interconnected', 'Testing must be reliable, valid, and standardized', 'AP exam: theory comparison questions']
    ] },
  { slug: 'prenatal-childhood-development', title: 'Prenatal & Childhood Development', exportBase: 'psychPrenatal', partTopics: ['Prenatal Development', 'Infant Development', 'Cognitive Development (Piaget)', 'Social & Emotional Development', 'Parenting Styles', 'Problem-Solving Workshop', 'Synthesis & AP Review'],
    concepts: [
      ['Germinal stage (0-2 weeks): zygote implants', 'Embryonic stage (2-8 weeks): major organs form', 'Fetal stage (8 weeks-birth): growth and maturation', 'Teratogens: harmful agents (alcohol → FAS, drugs, infections)'],
      ['Reflexes: rooting, sucking, grasping, Moro', 'Motor development: head-to-toe (cephalocaudal), center-out (proximodistal)', 'Temperament: easy, difficult, slow-to-warm-up', 'Habituation: decreased response to repeated stimuli'],
      ['Sensorimotor (0-2): object permanence', 'Preoperational (2-7): egocentrism, symbolic thinking', 'Concrete operational (7-11): conservation, logical thought', 'Formal operational (11+): abstract thinking, hypothetical reasoning'],
      ['Attachment theory (Bowlby): innate need for attachment', 'Ainsworth\'s Strange Situation: secure, avoidant, anxious-ambivalent', 'Harlow\'s monkeys: contact comfort > food', 'Erikson\'s stages: trust vs mistrust, autonomy vs shame, initiative vs guilt'],
      ['Authoritative: high warmth, high control (best outcomes)', 'Authoritarian: low warmth, high control', 'Permissive: high warmth, low control', 'Uninvolved: low warmth, low control (worst outcomes)'],
      ['Identifying Piaget\'s stages from child behavior', 'Classifying attachment styles', 'Analyzing parenting scenarios', 'Evaluating developmental milestones'],
      ['Development is continuous AND stage-like', 'Nature and nurture both contribute', 'Early experiences shape development', 'AP exam: Piaget and Erikson questions']
    ] },
  { slug: 'adolescence-adulthood', title: 'Adolescence & Adulthood', exportBase: 'psychAdolescence', partTopics: ['Adolescent Development', 'Identity Formation', 'Moral Development', 'Adulthood & Aging', 'Death & Dying', 'Problem-Solving Workshop', 'Synthesis & AP Review'],
    concepts: [
      ['Puberty: biological changes, growth spurt', 'Adolescent egocentrism: imaginary audience, personal fable', 'Brain development: prefrontal cortex not fully mature until ~25', 'Risk-taking behavior linked to brain development'],
      ['Erikson: identity vs role confusion', 'Marcia: identity statuses (achievement, moratorium, foreclosure, diffusion)', 'Social identity: race, gender, culture, religion', 'Peer influence increases during adolescence'],
      ['Kohlberg\'s stages of moral development', 'Preconventional: self-interest (punishment/reward)', 'Conventional: social norms and rules', 'Postconventional: universal ethical principles'],
      ['Erikson\'s adult stages: intimacy, generativity, integrity', 'Physical changes: menopause, declining sensory abilities', 'Cognitive changes: crystallized intelligence maintained, fluid declines', 'Social changes: empty nest, retirement'],
      ['Kübler-Ross stages of grief: denial, anger, bargaining, depression, acceptance', 'Grief is individual — not everyone follows these stages', 'Cultural differences in death and mourning', 'Hospice and palliative care'],
      ['Applying Kohlberg\'s stages to moral dilemmas', 'Identifying Erikson\'s stages throughout lifespan', 'Analyzing adolescent behavior through developmental lens', 'Evaluating aging stereotypes'],
      ['Development continues throughout the lifespan', 'Multiple theories complement each other', 'Cultural context matters in development', 'AP exam: lifespan development questions']
    ] },
  { slug: 'motivation-theories', title: 'Motivation Theories', exportBase: 'psychMotivation', partTopics: ['Introduction to Motivation', 'Drive Theory & Homeostasis', 'Maslow\'s Hierarchy', 'Achievement & Intrinsic Motivation', 'Hunger & Eating', 'Problem-Solving Workshop', 'Synthesis & AP Review'],
    concepts: [
      ['Motivation: need or desire that energizes and directs behavior', 'Instinct theory: innate behavioral patterns (limited in humans)', 'Incentive theory: external stimuli pull behavior', 'Multiple theories explain different aspects of motivation'],
      ['Drive-reduction theory: physiological needs create drives', 'Homeostasis: body maintains internal balance', 'Primary drives: hunger, thirst, sleep (biological)', 'Secondary drives: learned (money, achievement)'],
      ['Hierarchy of needs: physiological → safety → belonging → esteem → self-actualization', 'Lower needs must be met before higher needs', 'Self-actualization: achieving full potential', 'Criticisms: order not rigid, cultural differences'],
      ['Intrinsic motivation: internal satisfaction', 'Extrinsic motivation: external rewards', 'Overjustification effect: extrinsic rewards can undermine intrinsic motivation', 'Self-determination theory: autonomy, competence, relatedness'],
      ['Hypothalamus: hunger regulation (lateral = hunger, ventromedial = satiety)', 'Ghrelin: hunger hormone; Leptin: satiety hormone', 'Set point theory: body weight thermostat', 'Eating disorders: anorexia, bulimia, binge-eating disorder'],
      ['Applying motivation theories to scenarios', 'Analyzing intrinsic vs extrinsic motivation', 'Evaluating hunger regulation mechanisms', 'Designing motivation interventions'],
      ['No single theory explains all motivation', 'Biology and psychology both contribute', 'Motivation connects to emotion and personality', 'AP exam: motivation theory applications']
    ] },
  { slug: 'emotion-stress', title: 'Emotion & Stress', exportBase: 'psychEmotion', partTopics: ['Theories of Emotion', 'Components of Emotion', 'Stress & Health', 'Stress Responses', 'Coping Strategies', 'Problem-Solving Workshop', 'Synthesis & AP Review'],
    concepts: [
      ['James-Lange: stimulus → physiological arousal → emotion', 'Cannon-Bard: stimulus → simultaneous arousal AND emotion', 'Schachter-Singer (two-factor): arousal + cognitive label = emotion', 'Lazarus: cognitive appraisal determines emotion'],
      ['Physiological: autonomic nervous system activation', 'Behavioral: facial expressions, body language', 'Cognitive: interpretation and appraisal', 'Universal emotions (Ekman): happiness, sadness, fear, anger, disgust, surprise'],
      ['Stress: perceived threat or challenge', 'Stressors: catastrophes, major life changes, daily hassles', 'Type A personality: competitive, hostile → higher heart disease risk', 'Type B personality: relaxed, easygoing → lower health risk'],
      ['General Adaptation Syndrome (Selye): alarm → resistance → exhaustion', 'Fight-or-flight response: sympathetic nervous system activation', 'Cortisol: stress hormone (chronic elevation harmful)', 'Psychoneuroimmunology: stress weakens immune system'],
      ['Problem-focused coping: addressing the problem directly', 'Emotion-focused coping: managing emotional response', 'Social support: buffer against stress', 'Perceived control: feeling in control reduces stress impact'],
      ['Comparing emotion theories using scenarios', 'Identifying stress responses', 'Evaluating coping strategies', 'Analyzing stress and health connections'],
      ['Emotion involves body, mind, and behavior', 'Chronic stress has serious health consequences', 'Coping strategies can be learned', 'AP exam: emotion theory comparison']
    ] },
  { slug: 'personality-theories', title: 'Personality Theories', exportBase: 'psychPersonality', partTopics: ['Psychodynamic Perspective', 'Humanistic Perspective', 'Trait Theories', 'Social-Cognitive Perspective', 'Personality Assessment', 'Problem-Solving Workshop', 'Synthesis & AP Review'],
    concepts: [
      ['Freud: id (pleasure), ego (reality), superego (morality)', 'Defense mechanisms: repression, projection, rationalization, displacement', 'Psychosexual stages: oral, anal, phallic, latency, genital', 'Unconscious mind influences behavior'],
      ['Rogers: self-concept, unconditional positive regard', 'Maslow: self-actualization', 'Emphasis on free will and personal growth', 'Criticism: too optimistic, hard to test scientifically'],
      ['Big Five (OCEAN): Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism', 'Traits are relatively stable across time and situations', 'Eysenck: extraversion-introversion, neuroticism-stability', 'Factor analysis: statistical method for identifying traits'],
      ['Bandura: reciprocal determinism (behavior ↔ person ↔ environment)', 'Self-efficacy: belief in one\'s ability to succeed', 'Locus of control (Rotter): internal vs external', 'Person-situation debate: behavior varies by situation'],
      ['Projective tests: Rorschach inkblot, TAT (reveal unconscious)', 'Self-report inventories: MMPI, Big Five questionnaire (objective)', 'Projective tests: low reliability and validity', 'Self-report: vulnerable to social desirability bias'],
      ['Comparing personality perspectives', 'Identifying defense mechanisms in scenarios', 'Evaluating personality assessments', 'Applying social-cognitive theory'],
      ['Multiple perspectives offer different insights', 'Personality is shaped by biology, cognition, and environment', 'Assessment methods have strengths and limitations', 'AP exam: personality theory comparisons']
    ] },
  { slug: 'psychological-disorders-overview', title: 'Psychological Disorders Overview', exportBase: 'psychDisorders', partTopics: ['Defining Disorders', 'Classification (DSM-5)', 'Perspectives on Disorders', 'Anxiety Disorders', 'OCD & PTSD', 'Problem-Solving Workshop', 'Synthesis & AP Review'],
    concepts: [
      ['Psychological disorder: dysfunctional, distressing, deviant, dangerous (4 D\'s)', 'Medical model: disorders are illnesses with biological causes', 'Biopsychosocial model: biological + psychological + social factors', 'Stigma: negative attitudes toward people with mental illness'],
      ['DSM-5: Diagnostic and Statistical Manual of Mental Disorders', 'Provides diagnostic criteria for each disorder', 'Categorical system: you either have the disorder or don\'t', 'Criticisms: labeling effects, cultural bias, comorbidity'],
      ['Biological: genetics, neurotransmitters, brain structure', 'Psychological: learning, cognition, personality', 'Sociocultural: culture, poverty, discrimination', 'Diathesis-stress model: vulnerability + stress → disorder'],
      ['Generalized anxiety disorder (GAD): chronic, excessive worry', 'Panic disorder: sudden, intense fear attacks', 'Phobias: intense, irrational fears of specific objects/situations', 'Social anxiety disorder: fear of social situations and judgment'],
      ['OCD: obsessions (unwanted thoughts) + compulsions (repetitive behaviors)', 'PTSD: flashbacks, nightmares, hypervigilance after trauma', 'Both involve anxiety but classified separately in DSM-5', 'Treatment: CBT, exposure therapy, SSRIs'],
      ['Identifying disorders from case descriptions', 'Distinguishing normal anxiety from disorders', 'Applying the biopsychosocial model', 'Evaluating diagnostic approaches'],
      ['Disorders exist on a continuum', 'Multiple factors contribute to disorders', 'Diagnosis requires clinical judgment', 'AP exam: disorder identification']
    ] },
  { slug: 'mood-psychotic-disorders', title: 'Mood & Psychotic Disorders', exportBase: 'psychMoodPsych', partTopics: ['Major Depressive Disorder', 'Bipolar Disorder', 'Suicide Prevention', 'Schizophrenia', 'Dissociative & Somatic Disorders', 'Problem-Solving Workshop', 'Synthesis & AP Review'],
    concepts: [
      ['MDD: persistent depressed mood, loss of interest, ≥2 weeks', 'Symptoms: sleep changes, appetite changes, fatigue, worthlessness', 'Biological: low serotonin/norepinephrine, genetics', 'Cognitive: negative thinking patterns (Beck\'s cognitive triad)'],
      ['Bipolar I: manic episodes (elevated mood, energy, risky behavior)', 'Bipolar II: hypomanic episodes + major depressive episodes', 'Mania: decreased need for sleep, grandiosity, pressured speech', 'Treatment: mood stabilizers (lithium), psychotherapy'],
      ['Warning signs: talking about death, giving away possessions, withdrawal', 'Risk factors: depression, substance abuse, previous attempts', 'Protective factors: social support, treatment, sense of purpose', 'Crisis resources: 988 Suicide & Crisis Lifeline'],
      ['Schizophrenia: split from reality (NOT split personality)', 'Positive symptoms: hallucinations, delusions, disorganized thinking', 'Negative symptoms: flat affect, social withdrawal, reduced motivation', 'Dopamine hypothesis: excess dopamine activity'],
      ['Dissociative identity disorder (DID): multiple distinct identities', 'Dissociative amnesia: memory gaps for personal information', 'Somatic symptom disorder: excessive focus on physical symptoms', 'Illness anxiety disorder (hypochondriasis): fear of having serious illness'],
      ['Differentiating mood disorders', 'Identifying schizophrenia symptoms', 'Analyzing neurotransmitter involvement', 'Evaluating diagnostic criteria'],
      ['Depression is the leading cause of disability worldwide', 'Schizophrenia affects ~1% of population', 'Biological and psychological treatments both effective', 'AP exam: disorder comparison questions']
    ] },
  { slug: 'treatment-therapy', title: 'Treatment & Therapy', exportBase: 'psychTreatment', partTopics: ['History of Treatment', 'Psychodynamic & Humanistic Therapy', 'Behavioral & Cognitive Therapy', 'Biomedical Treatments', 'Evaluating Treatments', 'Problem-Solving Workshop', 'Synthesis & AP Review'],
    concepts: [
      ['Historical: asylums, moral treatment, deinstitutionalization', 'Modern: outpatient therapy, community mental health', 'Eclectic approach: combining techniques from different perspectives', 'Therapy types: individual, group, couples, family'],
      ['Psychoanalysis (Freud): free association, dream analysis, transference', 'Psychodynamic: less intensive, focus on current relationships', 'Humanistic (Rogers): client-centered, active listening, empathy', 'Unconditional positive regard: accepting the client without judgment'],
      ['Systematic desensitization: gradually exposing to feared stimulus', 'Aversion therapy: pairing unwanted behavior with unpleasant stimulus', 'CBT: challenging and changing negative thought patterns', 'Cognitive restructuring: identifying and correcting distorted thinking'],
      ['Drug therapy: antidepressants (SSRIs), antipsychotics, anxiolytics, mood stabilizers', 'ECT (electroconvulsive therapy): for severe depression', 'TMS (transcranial magnetic stimulation): magnetic pulses to brain', 'Psychosurgery: last resort (lobotomy is historical)'],
      ['Meta-analysis: combining results of many studies', 'Common factors: therapeutic alliance most important predictor', 'Evidence-based practice: using research to guide treatment', 'Some therapies are more effective for specific disorders'],
      ['Matching therapy types to disorders', 'Identifying therapeutic techniques in scenarios', 'Evaluating treatment effectiveness', 'Comparing biomedical and psychological approaches'],
      ['No single therapy is best for all disorders', 'Therapeutic relationship is crucial', 'Combination treatment often most effective', 'AP exam: therapy identification and comparison']
    ] },
  { slug: 'social-influence-conformity', title: 'Social Influence & Conformity', exportBase: 'psychSocialInfluence', partTopics: ['Social Psychology Introduction', 'Conformity', 'Obedience', 'Group Behavior', 'Persuasion', 'Problem-Solving Workshop', 'Synthesis & AP Review'],
    concepts: [
      ['Social psychology: how people think about, influence, and relate to others', 'Attribution theory: explaining others\' behavior', 'Fundamental attribution error: overestimating personality, underestimating situation', 'Self-serving bias: attributing success to self, failure to situation'],
      ['Asch\'s conformity experiments: line judgment task', '~75% conformed at least once', 'Conformity increases with group size (up to 4-5), unanimity', 'Normative social influence (be liked) vs informational (be right)'],
      ['Milgram\'s obedience study: 65% delivered maximum shock', 'Factors increasing obedience: authority figure presence, proximity, legitimacy', 'Factors decreasing obedience: dissenting peers, personal responsibility', 'Zimbardo\'s Stanford Prison Experiment: power of roles'],
      ['Social facilitation: perform better on simple tasks with audience', 'Social loafing: less effort in groups', 'Groupthink: desire for harmony overrides critical thinking', 'Group polarization: groups become more extreme after discussion'],
      ['Central route: careful evaluation of arguments (high involvement)', 'Peripheral route: influenced by superficial cues (low involvement)', 'Foot-in-the-door: small request → large request', 'Door-in-the-face: large request → smaller request'],
      ['Identifying social influence in scenarios', 'Analyzing conformity and obedience situations', 'Evaluating group decision-making', 'Applying persuasion techniques'],
      ['Situations powerfully influence behavior', 'People conform more than they think they will', 'Obedience to authority can be dangerous', 'AP exam: social influence experiments']
    ] },
  { slug: 'attitudes-persuasion', title: 'Attitudes & Persuasion', exportBase: 'psychAttitudes', partTopics: ['Attitude Formation', 'Cognitive Dissonance', 'Prejudice & Discrimination', 'Aggression', 'Prosocial Behavior', 'Problem-Solving Workshop', 'Synthesis & AP Review'],
    concepts: [
      ['Attitudes: evaluations of people, objects, ideas', 'Components: affective (feelings), behavioral (actions), cognitive (beliefs)', 'Attitudes predict behavior when specific and strong', 'Attitudes formed through experience, conditioning, observation'],
      ['Cognitive dissonance (Festinger): discomfort from contradictory beliefs/actions', 'People change attitudes to reduce dissonance', 'Insufficient justification: less reward → more attitude change', 'Example: smoker who knows smoking is harmful'],
      ['Prejudice: unjustified negative attitude toward a group', 'Discrimination: unjustified negative behavior toward a group', 'Stereotype: generalized belief about a group', 'Sources: social learning, us vs them (ingroup bias), scapegoating'],
      ['Biological: testosterone, brain damage (amygdala)', 'Frustration-aggression hypothesis: frustration triggers aggression', 'Social learning: observing and imitating aggressive models', 'Deindividuation: anonymity reduces self-awareness → aggression'],
      ['Bystander effect: less likely to help when others are present', 'Diffusion of responsibility: each person assumes others will help', 'Altruism: selfless concern for others', 'Reciprocity norm: help those who help you'],
      ['Analyzing cognitive dissonance scenarios', 'Identifying prejudice, discrimination, and stereotypes', 'Evaluating aggression theories', 'Predicting prosocial behavior'],
      ['Attitudes and behavior influence each other', 'Prejudice can be reduced through contact', 'Situational factors affect helping behavior', 'AP exam: social psychology applications']
    ] },
  { slug: 'group-behavior-prejudice', title: 'Group Behavior & Social Identity', exportBase: 'psychGroup', partTopics: ['Social Identity Theory', 'Ingroup/Outgroup Dynamics', 'Reducing Prejudice', 'Interpersonal Attraction', 'Cultural Influences', 'Problem-Solving Workshop', 'Synthesis & AP Review'],
    concepts: [
      ['Social identity theory: we define ourselves by group memberships', 'Ingroup: groups we belong to', 'Outgroup: groups we don\'t belong to', 'Ingroup bias: favoring our own group members'],
      ['Outgroup homogeneity: "they\'re all alike"', 'Just-world hypothesis: people get what they deserve', 'Realistic conflict theory: competition between groups causes prejudice', 'Robbers Cave experiment (Sherif): competition → hostility, cooperation → harmony'],
      ['Contact hypothesis: positive intergroup contact reduces prejudice', 'Conditions: equal status, common goals, cooperation, institutional support', 'Jigsaw classroom: cooperative learning technique', 'Superordinate goals: shared goals that require cooperation'],
      ['Proximity effect: geographic closeness → attraction', 'Mere exposure effect: repeated exposure increases liking', 'Physical attractiveness: symmetry, averageness', 'Similarity: we\'re attracted to people similar to us'],
      ['Individualist cultures: emphasis on personal goals and independence', 'Collectivist cultures: emphasis on group goals and interdependence', 'Cultural differences in conformity, attribution, self-concept', 'Cross-cultural psychology: studying behavior across cultures'],
      ['Analyzing intergroup conflict scenarios', 'Evaluating prejudice reduction strategies', 'Identifying cultural influences on behavior', 'Applying social identity concepts'],
      ['Group membership shapes identity and behavior', 'Prejudice can be reduced through structured contact', 'Culture influences psychological processes', 'AP exam: social psychology research studies']
    ] }
];

// Generate parts for each remaining topic
for (const topicDef of psychTopicDefs) {
  const parts = topicDef.partTopics.map((partTitle, idx) => {
    const concepts = topicDef.concepts[idx];
    return {
      title: partTitle,
      textSections: [
        { id: 'intro', title: idx === 0 ? `🧠 ${topicDef.title}` : `## ${partTitle}`, body: `**Part ${idx + 1} of 7 — ${partTitle}**\n\n${concepts.map((c, i) => `### ${i + 1}. ${c.split(':')[0]}\n\n${c.includes(':') ? c.split(':').slice(1).join(':').trim() : c}`).join('\n\n')}` },
        { id: 'detail', title: '### Key Points', body: concepts.map(c => `- **${c.split(':')[0].trim()}**${c.includes(':') ? ': ' + c.split(':').slice(1).join(':').trim() : ''}`).join('\n') }
      ],
      mcQuestions: [
        { q: `Which best describes a key concept of ${partTitle.toLowerCase()}?`, opts: [concepts[0].split(':')[0].trim(), 'An unrelated concept', 'Something not covered in AP Psychology', 'A physics principle'], correct: 0, explanation: concepts[0] },
        ...(concepts.length >= 3 ? [{ q: `In the context of ${partTitle.toLowerCase()}, which is accurate?`, opts: [concepts[2].includes(':') ? concepts[2].split(':').slice(1).join(':').trim() : concepts[2], 'The opposite is true', 'This concept is obsolete', 'None of these are correct'], correct: 0, explanation: concepts[2] }] : []),
        ...(concepts.length >= 4 ? [{ q: `Which concept relates directly to ${partTitle.toLowerCase()}?`, opts: [concepts[3].includes(':') ? concepts[3].split(':').slice(1).join(':').trim().substring(0, 80) : concepts[3].substring(0, 80), 'Only biological factors', 'Exclusively cognitive processes', 'Mathematical formulas only'], correct: 0, explanation: concepts[3] }] : [])
      ],
      dropdowns: {
        items: concepts.slice(0, 3).map(c => {
          const parts = c.split(':');
          return { label: parts[0].trim(), options: [parts.length > 1 ? parts.slice(1).join(':').trim().substring(0, 50) : c.substring(0, 50), 'Not applicable', 'Unrelated to psychology', 'Only in animals'], correct: parts.length > 1 ? parts.slice(1).join(':').trim().substring(0, 50) : c.substring(0, 50) };
        }),
        hints: concepts.slice(0, 3).map((_, i) => `Review key concept ${i + 1}.`),
        explanation: `These concepts are fundamental to understanding ${partTitle}.`
      }
    };
  });
  
  topics.push({
    slug: topicDef.slug,
    title: topicDef.title,
    prefix: 'psych',
    exportBase: topicDef.exportBase,
    parts
  });
}

// Main
function main() {
  let totalFiles = 0;
  for (const topic of topics) {
    for (let i = 0; i < topic.parts.length; i++) {
      const partNum = i + 1;
      const fileName = `psych-${topic.slug}-part${partNum}.ts`;
      const filePath = path.join(OUT_DIR, fileName);
      const content = generateFile(topic, i);
      fs.writeFileSync(filePath, content, 'utf-8');
      totalFiles++;
    }
  }
  console.log(`✅ Generated ${totalFiles} AP Psychology lesson files`);
}

main();
