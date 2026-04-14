/**
 * AP Psychology FRQ Practice Questions
 * Based on College Board AP Psychology FRQ format:
 * - 2 FRQs in 50 minutes (25 min each recommended)
 * - FRQ 1: Concept Application (apply concepts to a real-world scenario)
 * - FRQ 2: Research Design (design/evaluate a study)
 * - Worth 33% of the AP exam score
 * - No calculator allowed
 */

export interface FRQRubricItem {
  points: number
  description: string
  keywords: string[]
}

export interface FRQPart {
  label: string
  prompt: string
  maxPoints: number
  rubric: FRQRubricItem[]
  sampleAnswer: string
}

export interface PsychFRQ {
  id: string
  type: 'concept-application' | 'research-design'
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation: string
  calculatorAllowed: boolean
}

// ─── Concept Application FRQs ──────────────────────────────────────

const conceptApplicationFRQs: PsychFRQ[] = [
  {
    id: 'psych-ca-1',
    type: 'concept-application',
    title: 'College Transition & Psychological Concepts',
    prompt: `Maya is a first-year college student adjusting to life away from home. During her first semester, she experiences several challenges. She struggles to stay awake in her morning classes because she stays up late studying. She constantly worries that she will fail her exams, even though she performed well on her first few tests. After joining the debate club, she notices that she studies harder when other club members are around. She also finds herself unable to recall specific vocabulary words during her Spanish exam, despite knowing she studied them the night before.`,
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: 'Explain how the circadian rhythm relates to Maya\'s difficulty staying awake in her morning classes.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that the circadian rhythm is the body\'s ~24-hour internal clock regulating sleep-wake cycles, and that staying up late shifts her rhythm so she is biologically primed for sleep during morning classes', keywords: ['circadian', 'sleep-wake', '24-hour', 'internal clock', 'biological clock', 'shifted', 'melatonin'] },
        ],
        sampleAnswer: 'The circadian rhythm is the body\'s approximately 24-hour biological clock that regulates the sleep-wake cycle. By consistently staying up late, Maya has shifted her circadian rhythm so that her body is still in its "sleep phase" during morning classes. Melatonin, the hormone promoting sleepiness, may still be elevated during her early classes, making it difficult for her to stay alert.',
      },
      {
        label: '(b)',
        prompt: 'Explain how the concept of self-efficacy could account for Maya\'s worry about failing despite her strong performance.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that self-efficacy is a person\'s belief in their ability to succeed at a task, and that low self-efficacy could cause Maya to doubt her abilities despite evidence of success', keywords: ['self-efficacy', 'belief', 'ability', 'confidence', 'Bandura', 'doubt', 'capable'] },
        ],
        sampleAnswer: 'Self-efficacy, a concept developed by Albert Bandura, refers to a person\'s belief in their own ability to succeed at specific tasks. Despite performing well on her first exams, Maya may have low academic self-efficacy — she does not believe she is truly capable of maintaining her performance. This causes her to worry about failure even when objective evidence suggests she is doing well.',
      },
      {
        label: '(c)',
        prompt: 'Explain how social facilitation could explain Maya\'s increased studying when debate club members are present.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that social facilitation is the tendency for people to perform better on simple or well-learned tasks in the presence of others, and that studying (a well-practiced behavior) improves with others around', keywords: ['social facilitation', 'presence of others', 'perform better', 'well-learned', 'dominant response', 'audience', 'arousal'] },
        ],
        sampleAnswer: 'Social facilitation describes the tendency for people to perform better on simple or well-practiced tasks when in the presence of others. Studying is a familiar, dominant behavior for Maya, so the presence of her debate club members creates mild arousal that enhances her focus and effort. The others\' presence motivates her to study harder than she would alone.',
      },
      {
        label: '(d)',
        prompt: 'Explain how retrieval failure could account for Maya\'s inability to recall vocabulary words during her Spanish exam.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that retrieval failure is the inability to access stored memories, often due to lack of appropriate cues, and that Maya encoded the words but cannot retrieve them during the exam', keywords: ['retrieval failure', 'tip of the tongue', 'cue', 'stored', 'access', 'encoded', 'cannot retrieve'] },
        ],
        sampleAnswer: 'Retrieval failure occurs when information has been encoded and stored in long-term memory but cannot be accessed at the time it is needed, often because the right retrieval cues are absent. Maya studied the vocabulary words and they are stored in her memory, but during the exam she lacks the contextual cues (perhaps the environment or her mental state differs from when she studied) needed to trigger recall.',
      },
      {
        label: '(e)',
        prompt: 'Explain how context-dependent memory could suggest a strategy for Maya to improve her Spanish exam performance.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that context-dependent memory is the finding that recall improves when the physical environment at retrieval matches that during encoding, and suggests Maya study in an environment similar to the exam room', keywords: ['context-dependent', 'encoding specificity', 'same environment', 'study', 'match', 'location', 'physical context'] },
        ],
        sampleAnswer: 'Context-dependent memory is the principle that recall is enhanced when the physical environment during retrieval matches the environment during encoding. Maya could improve her exam performance by studying in a setting similar to the exam room — for example, studying at a desk in a quiet classroom rather than on her bed. This would create overlapping environmental cues that facilitate retrieval during the test.',
      },
      {
        label: '(f)',
        prompt: 'Explain how the Yerkes-Dodson law relates to Maya\'s exam anxiety and performance.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that the Yerkes-Dodson law states that moderate arousal leads to optimal performance but too much arousal (anxiety) impairs complex task performance', keywords: ['Yerkes-Dodson', 'optimal', 'arousal', 'moderate', 'too much', 'impair', 'performance', 'anxiety'] },
        ],
        sampleAnswer: 'The Yerkes-Dodson law states that performance is best at a moderate level of arousal. While some anxiety can motivate studying, Maya\'s excessive worry pushes her arousal level beyond the optimal range. For complex tasks like a Spanish exam, too much anxiety can impair cognitive functioning, making it harder to concentrate, organize thoughts, and retrieve learned information.',
      },
      {
        label: '(g)',
        prompt: 'Explain how the stress hormone cortisol could affect Maya\'s memory during exams.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that cortisol is released by the adrenal glands during stress and that elevated cortisol levels can impair hippocampal function, disrupting memory retrieval', keywords: ['cortisol', 'stress', 'adrenal', 'hippocampus', 'memory', 'impair', 'retrieval', 'HPA'] },
        ],
        sampleAnswer: 'When Maya is stressed about exams, her HPA axis is activated, causing the adrenal glands to release cortisol. While short-term cortisol release can enhance alertness, prolonged or excessive cortisol levels can impair hippocampal function — the hippocampus being critical for memory consolidation and retrieval. This means her exam anxiety could physiologically interfere with her ability to recall learned material.',
      },
    ],
  },
  {
    id: 'psych-ca-2',
    type: 'concept-application',
    title: 'Childhood Development & Learning',
    prompt: `Eight-year-old Jamal has recently started at a new school. His teacher notices several behaviors. Jamal quickly learns to raise his hand before speaking after seeing other students receive praise for doing so. He insists that a tall, narrow glass has more juice than a short, wide glass, even after watching the juice being poured from one to the other. When frustrated, Jamal sometimes hits his desk, a behavior his older brother frequently displays at home. Jamal is also very motivated by stickers his teacher gives for completed homework.`,
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: 'Explain how observational learning (modeling) accounts for Jamal learning to raise his hand.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that observational learning involves acquiring new behaviors by watching others, and Jamal modeled the hand-raising behavior after observing classmates being reinforced', keywords: ['observational learning', 'modeling', 'Bandura', 'vicarious', 'watching', 'imitate', 'observed'] },
        ],
        sampleAnswer: 'Observational learning, described by Albert Bandura, occurs when an individual acquires a new behavior by watching others perform it. Jamal observed other students raising their hands and receiving praise (vicarious reinforcement). He then modeled this behavior, raising his own hand, because he saw that it led to a positive outcome for others.',
      },
      {
        label: '(b)',
        prompt: 'Explain how Piaget\'s concept of conservation relates to Jamal\'s belief about the glasses of juice.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that conservation is the understanding that quantity remains the same despite changes in shape/appearance, and that Jamal\'s inability shows he may be in the preoperational stage', keywords: ['conservation', 'Piaget', 'preoperational', 'quantity', 'appearance', 'shape', 'same amount'] },
        ],
        sampleAnswer: 'Conservation is a concept from Piaget\'s theory of cognitive development referring to the understanding that the quantity of a substance remains the same even when its appearance changes. Jamal\'s belief that the tall glass has more juice indicates he has not yet mastered conservation. According to Piaget, this suggests Jamal is still showing characteristics of the preoperational stage, where children are deceived by perceptual appearances.',
      },
      {
        label: '(c)',
        prompt: 'Explain how Albert Bandura\'s Bobo doll experiment relates to Jamal hitting his desk after seeing his brother do it.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that Bandura\'s Bobo doll study demonstrated children imitate aggressive behavior modeled by adults, and Jamal similarly imitates his brother\'s aggressive desk-hitting', keywords: ['Bobo doll', 'Bandura', 'aggressive', 'imitate', 'model', 'children', 'learned aggression'] },
        ],
        sampleAnswer: 'Bandura\'s Bobo doll experiment showed that children who observed an adult acting aggressively toward a Bobo doll were more likely to imitate that aggressive behavior themselves. Similarly, Jamal has observed his older brother hitting the desk when frustrated. His brother serves as a model, and Jamal has learned through observation that hitting is a way to express frustration, even without being directly reinforced for it.',
      },
      {
        label: '(d)',
        prompt: 'Explain how operant conditioning, specifically positive reinforcement, accounts for Jamal\'s motivation to complete homework.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that positive reinforcement involves adding a desirable stimulus after a behavior to increase its frequency, and the stickers serve as positive reinforcers for homework completion', keywords: ['positive reinforcement', 'operant conditioning', 'sticker', 'reward', 'increase', 'add', 'desirable stimulus'] },
        ],
        sampleAnswer: 'Operant conditioning is learning through consequences. Positive reinforcement involves presenting a desirable stimulus (the sticker) after a behavior (completing homework) to strengthen that behavior. The stickers function as positive reinforcers — each time Jamal completes homework and receives a sticker, the association between homework completion and reward is strengthened, making him more likely to do homework in the future.',
      },
      {
        label: '(e)',
        prompt: 'Explain how the concept of a token economy relates to the teacher\'s sticker system.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that a token economy is a behavior modification system where tokens (stickers) are earned for desired behaviors and can be exchanged for rewards', keywords: ['token economy', 'token', 'exchange', 'behavior modification', 'earned', 'secondary reinforcer'] },
        ],
        sampleAnswer: 'A token economy is a behavior modification technique based on operant conditioning where individuals earn tokens (in this case, stickers) for performing desired behaviors. The stickers themselves are secondary reinforcers — they have no inherent value but acquire reinforcing properties because they can be collected or counted. If the teacher allows stickers to be exchanged for privileges or prizes, this is a classic token economy system.',
      },
      {
        label: '(f)',
        prompt: 'Explain how Vygotsky\'s zone of proximal development (ZPD) could help Jamal\'s teacher support his academic growth.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that the ZPD is the gap between what a child can do alone and what they can do with guidance, and that the teacher should provide scaffolding at the edge of Jamal\'s abilities', keywords: ['zone of proximal development', 'ZPD', 'Vygotsky', 'scaffolding', 'guidance', 'assisted', 'independent'] },
        ],
        sampleAnswer: 'Vygotsky\'s zone of proximal development (ZPD) is the range between what a child can accomplish independently and what the child can accomplish with the help of a more skilled guide. Jamal\'s teacher should identify tasks that are just beyond what Jamal can do alone and provide scaffolding — structured support like hints, demonstrations, or guided questions. As Jamal masters skills with help, the teacher gradually removes support, expanding his ZPD.',
      },
      {
        label: '(g)',
        prompt: 'Explain how intrinsic motivation might be affected if Jamal begins to expect stickers for all schoolwork.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains the overjustification effect: when external rewards are given for intrinsically enjoyable activities, intrinsic motivation can decrease because the person attributes their behavior to the external reward', keywords: ['overjustification', 'intrinsic motivation', 'extrinsic', 'decrease', 'undermine', 'external reward'] },
        ],
        sampleAnswer: 'The overjustification effect suggests that providing external rewards (stickers) for activities a child might already enjoy can undermine intrinsic motivation. If Jamal begins to expect stickers for all work, he may start attributing his motivation to the stickers rather than to genuine interest in learning. If the stickers are later removed, his motivation could drop below its original level because he has shifted from intrinsic to extrinsic motivation.',
      },
    ],
  },
  {
    id: 'psych-ca-3',
    type: 'concept-application',
    title: 'Workplace Stress & Mental Health',
    prompt: `Dr. Rivera is a hospital emergency room physician who has worked night shifts for 15 years. Recently, she has been experiencing difficulty concentrating, persistent sadness, and withdrawal from social activities she once enjoyed. She often feels a rapid heartbeat and sweating when her pager goes off, even when she is off duty. She has started dreaming about traumatic cases she has handled. A colleague suggests she talk to a therapist, but Dr. Rivera insists she can handle it on her own because she has always been a strong person.`,
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: 'Explain how the symptoms of persistent sadness and withdrawal from social activities relate to criteria for major depressive disorder.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Identifies persistent sadness (depressed mood) and social withdrawal (loss of interest/anhedonia) as core symptoms of major depressive disorder per DSM criteria', keywords: ['major depressive', 'depressed mood', 'anhedonia', 'loss of interest', 'DSM', 'persistent', 'two weeks'] },
        ],
        sampleAnswer: 'Major depressive disorder (MDD) is characterized by persistent depressed mood and/or loss of interest or pleasure in activities (anhedonia), lasting at least two weeks. Dr. Rivera\'s persistent sadness represents depressed mood, and her withdrawal from previously enjoyed social activities represents anhedonia. Together, these are two core diagnostic criteria for MDD as defined in the DSM-5.',
      },
      {
        label: '(b)',
        prompt: 'Explain how classical conditioning could account for Dr. Rivera\'s physical reaction to her pager going off while she is off duty.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that the pager (originally neutral stimulus) became a conditioned stimulus through repeated pairing with stressful emergencies (unconditioned stimulus), so it now triggers a conditioned response (anxiety/rapid heartbeat) even off duty', keywords: ['classical conditioning', 'conditioned stimulus', 'pager', 'unconditioned stimulus', 'emergency', 'conditioned response', 'paired'] },
        ],
        sampleAnswer: 'Through classical conditioning, the pager (originally a neutral stimulus) has been repeatedly paired with high-stress emergency situations (the unconditioned stimulus that naturally triggers a fight-or-flight response). Over time, the pager alone has become a conditioned stimulus that triggers a conditioned response — rapid heartbeat and sweating — even when Dr. Rivera is off duty and no actual emergency is occurring.',
      },
      {
        label: '(c)',
        prompt: 'Explain how the activation of the sympathetic nervous system relates to Dr. Rivera\'s rapid heartbeat and sweating.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that the sympathetic nervous system activates the fight-or-flight response, increasing heart rate and sweat production through norepinephrine and adrenaline release', keywords: ['sympathetic', 'fight-or-flight', 'heart rate', 'adrenaline', 'epinephrine', 'norepinephrine', 'arousal', 'autonomic'] },
        ],
        sampleAnswer: 'When Dr. Rivera hears her pager, her sympathetic nervous system is activated, triggering the fight-or-flight response. This branch of the autonomic nervous system stimulates the adrenal medulla to release epinephrine (adrenaline) and norepinephrine, which increase heart rate, redirect blood to muscles, and activate sweat glands. These physiological changes — rapid heartbeat and sweating — prepare the body for an emergency response.',
      },
      {
        label: '(d)',
        prompt: 'Explain how the concept of burnout applies to Dr. Rivera\'s situation.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that burnout is a state of emotional, physical, and mental exhaustion caused by prolonged stress, characterized by depersonalization, emotional exhaustion, and reduced accomplishment', keywords: ['burnout', 'exhaustion', 'emotional', 'depersonalization', 'prolonged stress', 'chronic', 'occupational'] },
        ],
        sampleAnswer: 'Burnout is a state of chronic emotional, physical, and mental exhaustion caused by prolonged occupational stress. After 15 years of night shifts in the ER, Dr. Rivera shows signs of burnout: emotional exhaustion (persistent sadness), depersonalization (withdrawal from social connections), and potentially a reduced sense of personal accomplishment. Her demanding work environment, with constant exposure to traumatic cases and irregular sleep, has depleted her psychological resources.',
      },
      {
        label: '(e)',
        prompt: 'Explain how REM sleep could relate to Dr. Rivera\'s distressing dreams about traumatic cases.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that REM sleep is the stage associated with vivid dreaming and emotional memory processing, and Dr. Rivera\'s traumatic experiences may be replayed during REM as the brain processes emotional memories', keywords: ['REM', 'rapid eye movement', 'dreaming', 'emotional', 'memory processing', 'consolidation', 'vivid'] },
        ],
        sampleAnswer: 'REM (rapid eye movement) sleep is the sleep stage where the most vivid and emotionally charged dreams occur. During REM, the brain actively processes and consolidates emotional memories. Dr. Rivera\'s traumatic experiences in the ER may be replayed during REM sleep as her brain attempts to process these emotionally significant events. Her night shift schedule may also disrupt normal REM patterns, further affecting how her brain handles these traumatic memories.',
      },
      {
        label: '(f)',
        prompt: 'Explain how a defense mechanism is evident in Dr. Rivera\'s insistence that she can handle her problems alone.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Identifies denial or rationalization as the defense mechanism — Dr. Rivera refuses to acknowledge the severity of her symptoms by insisting she is "strong" enough to manage alone', keywords: ['denial', 'defense mechanism', 'rationalization', 'Freud', 'unconscious', 'refuse', 'acknowledge'] },
        ],
        sampleAnswer: 'Dr. Rivera is displaying the defense mechanism of denial — an unconscious strategy identified by Freud to protect the ego from distressing reality. By insisting she is strong enough to handle her problems alone, she is refusing to acknowledge the severity of her psychological symptoms. This denial prevents her from seeking professional help that could address her conditions. Rationalization is also at play, as she justifies her avoidance of therapy by attributing it to personal strength.',
      },
      {
        label: '(g)',
        prompt: 'Explain how cognitive behavioral therapy (CBT) could help Dr. Rivera address her symptoms.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that CBT focuses on identifying and changing maladaptive thought patterns and behaviors, and could help Dr. Rivera challenge negative cognitions and develop coping strategies', keywords: ['CBT', 'cognitive behavioral', 'thought patterns', 'maladaptive', 'challenge', 'coping', 'restructuring'] },
        ],
        sampleAnswer: 'Cognitive behavioral therapy (CBT) is a therapeutic approach that targets maladaptive thought patterns and behaviors. A CBT therapist could help Dr. Rivera identify automatic negative thoughts (e.g., "if I seek help, I\'m weak") and challenge them through cognitive restructuring. CBT would also teach behavioral coping strategies such as relaxation techniques for her anxiety response to the pager, and behavioral activation to re-engage with social activities she has withdrawn from.',
      },
    ],
  },
]

// ─── Research Design FRQs ──────────────────────────────────────────

const researchDesignFRQs: PsychFRQ[] = [
  {
    id: 'psych-rd-1',
    type: 'research-design',
    title: 'Sleep Deprivation & Cognitive Performance',
    prompt: `A psychologist hypothesizes that college students who sleep fewer than 6 hours per night will score lower on a standardized memory test than students who sleep 8 or more hours per night. The psychologist recruits 60 college students to participate in a study.`,
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: 'Identify the independent variable and the dependent variable in this study.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Correctly identifies IV as amount of sleep (fewer than 6 hours vs. 8+ hours) and DV as score on the standardized memory test', keywords: ['independent variable', 'sleep', 'hours', 'dependent variable', 'memory test', 'score'] },
        ],
        sampleAnswer: 'The independent variable is the amount of sleep — specifically, the two conditions of fewer than 6 hours vs. 8 or more hours per night. The dependent variable is the score on the standardized memory test.',
      },
      {
        label: '(b)',
        prompt: 'Explain how the psychologist should use random assignment in this study and why it is important.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that random assignment means each participant has an equal chance of being placed in either sleep condition, which controls for confounding variables and allows causal conclusions', keywords: ['random assignment', 'equal chance', 'confounding', 'causal', 'control', 'groups', 'pre-existing'] },
        ],
        sampleAnswer: 'The psychologist should randomly assign each of the 60 participants to one of the two sleep conditions (30 per group), ensuring each person has an equal probability of being in either group. Random assignment is important because it distributes pre-existing individual differences (such as natural sleep habits, baseline memory ability, and health) evenly across groups, minimizing confounding variables and allowing the researcher to draw causal conclusions about the effect of sleep on memory.',
      },
      {
        label: '(c)',
        prompt: 'Identify one potential confounding variable in this study and explain how it could affect the results.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Identifies a plausible confound (e.g., caffeine use, stress, prior sleep habits, academic ability, motivation) and explains how it could provide an alternative explanation for results', keywords: ['confounding', 'caffeine', 'stress', 'alternative explanation', 'vary', 'prior', 'extraneous'] },
        ],
        sampleAnswer: 'Caffeine consumption is a potential confounding variable. Students in the sleep-deprived group might consume more caffeine to stay awake, which could either artificially boost or impair their test performance depending on the amount. If caffeine use differs between groups, it becomes unclear whether the memory test results are due to sleep deprivation or caffeine effects, providing an alternative explanation for the findings.',
      },
      {
        label: '(d)',
        prompt: 'Explain how the psychologist could use a single-blind procedure in this study and why it would be beneficial.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that in a single-blind study, participants do not know which condition they are in (or the person administering the test does not know), which reduces demand characteristics or experimenter bias', keywords: ['single-blind', 'participants', 'do not know', 'demand characteristics', 'bias', 'experimenter', 'expectation'] },
        ],
        sampleAnswer: 'In a single-blind procedure, the person administering and scoring the memory test would not know which sleep condition each participant was assigned to. This prevents experimenter bias — the scorer might unconsciously grade sleep-deprived students differently if they knew their condition. It also reduces the possibility that the experimenter\'s behavior subtly influences participant performance.',
      },
      {
        label: '(e)',
        prompt: 'Explain what it would mean if the results of this study are statistically significant at p < 0.05.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that p < 0.05 means there is less than a 5% probability that the observed difference occurred by chance alone, allowing the researcher to reject the null hypothesis', keywords: ['p < 0.05', '5%', 'chance', 'probability', 'null hypothesis', 'reject', 'statistically significant'] },
        ],
        sampleAnswer: 'Statistical significance at p < 0.05 means that there is less than a 5% probability that the observed difference in memory test scores between the two groups occurred by chance alone. This allows the psychologist to reject the null hypothesis (that sleep has no effect on memory performance) with reasonable confidence. It does not mean the effect is large or practically important — only that it is unlikely to be due to random variation.',
      },
      {
        label: '(f)',
        prompt: 'Describe one ethical concern with this study and explain how the psychologist should address it.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Identifies a relevant ethical concern (e.g., informed consent, potential harm from sleep deprivation, right to withdraw, debriefing) and describes an appropriate safeguard', keywords: ['informed consent', 'harm', 'withdraw', 'debrief', 'IRB', 'ethical', 'APA', 'right to'] },
        ],
        sampleAnswer: 'A major ethical concern is potential harm from sleep deprivation. Restricting participants to fewer than 6 hours of sleep could impair their health, academic performance, and daily functioning. The psychologist should address this by obtaining informed consent (clearly explaining the risks of the sleep-deprivation condition), ensuring participants know they have the right to withdraw at any time without penalty, limiting the duration of the study, and monitoring participants for adverse effects. The study should be approved by an Institutional Review Board (IRB).',
      },
      {
        label: '(g)',
        prompt: 'Explain why the psychologist cannot generalize the results of this study to all adults based on this sample of 60 college students.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that college students are not representative of all adults due to age, lifestyle, and demographic factors, limiting external validity/generalizability', keywords: ['generalize', 'representative', 'external validity', 'sample', 'population', 'college students', 'not all adults'] },
        ],
        sampleAnswer: 'The sample of 60 college students is not representative of all adults. College students are typically younger (18-22), have unique lifestyle factors (irregular schedules, academic stress), and may not represent the broader population in terms of age, socioeconomic status, or health. This limits the study\'s external validity — the results may not generalize to older adults, working professionals, or people with different sleep patterns. A more diverse and larger sample would be needed to make broader generalizations.',
      },
    ],
  },
  {
    id: 'psych-rd-2',
    type: 'research-design',
    title: 'Music & Study Performance',
    prompt: `A school psychologist wants to investigate whether listening to background music while studying affects test performance in high school students. The psychologist plans to compare three conditions: studying in silence, studying with classical music, and studying with pop music with lyrics.`,
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: 'State an operational definition for the dependent variable in this study.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Provides a specific, measurable definition of test performance (e.g., score on a standardized reading comprehension test, number of correct answers on a 20-question quiz)', keywords: ['operational definition', 'score', 'test', 'measurable', 'specific', 'number correct', 'percentage'] },
        ],
        sampleAnswer: 'An operational definition for the dependent variable (test performance) could be: the number of correct answers (out of 30) on a standardized reading comprehension test administered to all participants immediately after a 30-minute study period. This provides a specific, quantifiable measure of academic performance.',
      },
      {
        label: '(b)',
        prompt: 'Explain why the psychologist should use random assignment rather than allowing students to choose their own study condition.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that self-selection would introduce confounds (students who prefer silence might be more studious), while random assignment ensures groups are equivalent on confounding variables', keywords: ['self-selection', 'confound', 'random assignment', 'choose', 'pre-existing', 'equivalent', 'bias'] },
        ],
        sampleAnswer: 'If students choose their own condition, self-selection bias would confound the results. For example, students who prefer silence might already be more disciplined studiers, while students choosing pop music might be less focused on academics. These pre-existing differences — not the music condition — could drive any performance differences. Random assignment ensures that individual differences in study habits, academic ability, and music preferences are distributed evenly across all three groups.',
      },
      {
        label: '(c)',
        prompt: 'Identify two variables the psychologist should control (hold constant) across all three conditions and explain why.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Identifies two controlled variables (e.g., study material, study duration, time of day, volume level, room environment) and explains that holding them constant isolates the effect of the IV', keywords: ['control', 'constant', 'study material', 'duration', 'time', 'volume', 'isolate', 'same'] },
        ],
        sampleAnswer: 'The psychologist should control: (1) Study material — all three groups should study the same content for the same amount of time, so differences in test scores reflect the music condition, not differences in study material difficulty. (2) Volume level — the classical and pop music should be played at the same decibel level, so any performance differences are due to the type of music (with or without lyrics) rather than loudness.',
      },
      {
        label: '(d)',
        prompt: 'Explain how the psychologist could ensure informed consent when working with high school students (minors).',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that minors require parental/guardian consent (permission) AND assent from the student themselves, and that both must be informed about the study procedures, risks, and right to withdraw', keywords: ['parental consent', 'guardian', 'minor', 'assent', 'informed', 'permission', 'right to withdraw'] },
        ],
        sampleAnswer: 'Since the participants are minors, the psychologist must obtain informed consent from parents or legal guardians, who must be told about the study\'s procedures, purpose, and any potential risks. Additionally, the students themselves must provide assent — they should understand what they are agreeing to participate in. Both parents and students should be informed that participation is voluntary and that the student may withdraw at any time without penalty.',
      },
      {
        label: '(e)',
        prompt: 'Explain how the results might differ if the study used a within-subjects design (each student experiences all three conditions) instead of a between-subjects design.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that a within-subjects design controls for individual differences but introduces order effects/practice effects, while between-subjects avoids these but requires more participants', keywords: ['within-subjects', 'between-subjects', 'order effects', 'practice', 'individual differences', 'counterbalancing', 'repeated measures'] },
        ],
        sampleAnswer: 'In a within-subjects design, each student would study under all three conditions and take comparable tests after each. This controls for individual differences (each person serves as their own control), increasing statistical power. However, it introduces order effects — students might improve due to practice or decline due to fatigue. Counterbalancing the order of conditions would help. A between-subjects design avoids order effects but requires more participants and is more vulnerable to individual difference confounds.',
      },
      {
        label: '(f)',
        prompt: 'Explain what a Type I error would mean in the context of this study.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that a Type I error would mean concluding that music condition affects test performance when in reality it does not (rejecting a true null hypothesis, a false positive)', keywords: ['Type I', 'false positive', 'reject', 'null hypothesis', 'true null', 'no effect', 'concluding'] },
        ],
        sampleAnswer: 'A Type I error (false positive) in this study would mean the psychologist concludes that background music significantly affects test performance when, in reality, it does not — the null hypothesis (no difference between conditions) is actually true. The psychologist would incorrectly reject the null hypothesis, perhaps reporting that classical music boosts performance when the observed differences were simply due to chance.',
      },
      {
        label: '(g)',
        prompt: 'If the pop music group scored lowest, explain how the concept of divided attention could account for this finding.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that divided attention is the attempt to focus on multiple stimuli simultaneously, and pop music with lyrics competes for the same verbal processing resources as studying text, reducing performance', keywords: ['divided attention', 'lyrics', 'verbal', 'processing', 'limited', 'resources', 'compete', 'cognitive'] },
        ],
        sampleAnswer: 'Divided attention occurs when cognitive resources must be split between multiple tasks or stimuli. Pop music with lyrics demands verbal processing — the brain attempts to process the words in the song while simultaneously processing the text being studied. Since both tasks compete for the same limited verbal/linguistic cognitive resources, studying becomes less efficient. Classical music (without lyrics) does not create this verbal interference, and silence eliminates auditory competition entirely, explaining why the pop music group scored lowest.',
      },
    ],
  },
  {
    id: 'psych-rd-3',
    type: 'research-design',
    title: 'Social Media & Self-Esteem',
    prompt: `A researcher wants to study whether reducing social media usage improves self-esteem in teenagers. The researcher plans to recruit 80 high school students who use social media for at least 3 hours per day.`,
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: 'Describe how the researcher could design a true experiment to test this hypothesis, including the independent variable, dependent variable, and at least two groups.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Identifies IV as social media usage level (e.g., reduced to 30 min/day vs. normal usage) and DV as self-esteem (measured by a standardized scale)', keywords: ['independent variable', 'social media', 'reduced', 'dependent variable', 'self-esteem', 'scale', 'measure'] },
          { points: 1, description: 'Describes at least two groups (experimental group with reduced usage and control group with normal usage) with random assignment', keywords: ['experimental group', 'control group', 'random assignment', 'reduced usage', 'normal usage', 'two groups'] },
        ],
        sampleAnswer: 'The researcher should randomly assign the 80 students into two groups of 40. The experimental group would reduce their social media usage to no more than 30 minutes per day for 4 weeks. The control group would continue their normal social media habits (3+ hours per day). The independent variable is social media usage level (reduced vs. normal). The dependent variable is self-esteem, measured by a validated instrument such as the Rosenberg Self-Esteem Scale, administered before and after the 4-week period.',
      },
      {
        label: '(b)',
        prompt: 'Explain how using a pretest-posttest design would strengthen this study.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that a pretest establishes each participant\'s baseline self-esteem before the intervention, allowing researchers to measure individual change rather than just group differences', keywords: ['pretest', 'posttest', 'baseline', 'before', 'after', 'change', 'individual', 'comparison'] },
        ],
        sampleAnswer: 'A pretest-posttest design would strengthen the study by establishing each participant\'s baseline self-esteem before the intervention begins. By measuring self-esteem both before and after the study period, the researcher can calculate individual change scores rather than relying solely on group averages. This controls for individual differences in initial self-esteem levels and provides a clearer picture of whether reducing social media actually caused changes in self-esteem.',
      },
      {
        label: '(c)',
        prompt: 'Explain how self-report bias might threaten the validity of this study and suggest one way to address it.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that participants may misreport their social media usage or self-esteem due to social desirability bias, and suggests objective measures like screen time tracking apps', keywords: ['self-report', 'social desirability', 'bias', 'misreport', 'screen time', 'tracking', 'objective', 'honest'] },
        ],
        sampleAnswer: 'Self-report bias threatens validity because participants might underreport their social media usage (social desirability bias — they want to appear compliant) or overestimate improvements in self-esteem to please the researcher. To address this, the researcher could use objective screen time tracking apps that automatically log social media usage, removing reliance on self-reported hours. For self-esteem, using multiple validated measures rather than a single questionnaire would provide more reliable data.',
      },
      {
        label: '(d)',
        prompt: 'Explain how the psychologist should debrief participants at the end of the study.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that debriefing involves informing participants about the true purpose of the study, sharing results, addressing concerns, and providing resources if needed', keywords: ['debrief', 'purpose', 'explain', 'results', 'questions', 'true nature', 'resources'] },
        ],
        sampleAnswer: 'After the study concludes, the researcher should debrief all participants by explaining the full purpose of the study — that it investigated whether reducing social media usage affects self-esteem. Participants should be given the opportunity to ask questions, receive a summary of the findings, and have any concerns addressed. If any participant experienced distress during the study, the researcher should provide referrals to school counselors or mental health resources.',
      },
      {
        label: '(e)',
        prompt: 'Explain how correlation does not equal causation and how this concept relates to observational studies on social media and self-esteem.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that correlational studies can show a relationship between social media and self-esteem but cannot establish causation because a third variable or reverse causation could explain the link', keywords: ['correlation', 'causation', 'third variable', 'reverse', 'direction', 'cannot establish', 'observational'] },
        ],
        sampleAnswer: 'Observational studies may find a correlation between high social media usage and low self-esteem, but this does not prove that social media causes low self-esteem. The correlation could reflect reverse causation — teens with already low self-esteem might use social media more to seek validation. Or a third variable, such as loneliness or depression, could drive both increased social media use and decreased self-esteem. Only a true experiment with random assignment and manipulation of the IV can establish causation.',
      },
      {
        label: '(f)',
        prompt: 'Explain how the concept of standardization should be applied to the measurement of self-esteem in this study.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that standardization means administering the self-esteem measure under the same conditions for all participants (same instructions, time limit, environment) and using norms for comparison', keywords: ['standardization', 'same conditions', 'norms', 'consistent', 'instructions', 'uniform', 'reliable'] },
        ],
        sampleAnswer: 'Standardization means that the self-esteem measure must be administered under identical conditions for all participants — same instructions, same time limit, same environment, and same scoring criteria. Using a validated, standardized instrument like the Rosenberg Self-Esteem Scale ensures that the measure has established norms, reliability, and validity. This allows the researcher to compare scores meaningfully between groups and to national averages.',
      },
    ],
  },
]

// ─── Combined export ───────────────────────────────────────────────

export const apPsychFRQs: PsychFRQ[] = [...conceptApplicationFRQs, ...researchDesignFRQs]

export function getApPsychFRQs(): PsychFRQ[] {
  return apPsychFRQs
}

export function getConceptApplicationFRQs(): PsychFRQ[] {
  return conceptApplicationFRQs
}

export function getResearchDesignFRQs(): PsychFRQ[] {
  return researchDesignFRQs
}

export function generateFullExamFRQs(): {
  conceptApplication: PsychFRQ
  researchDesign: PsychFRQ
  totalPoints: number
  totalTime: string
} {
  const shuffle = <T>(arr: T[]): T[] => {
    const copy = [...arr]
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy
  }

  const selectedCA = shuffle(conceptApplicationFRQs)[0]
  const selectedRD = shuffle(researchDesignFRQs)[0]

  const totalPoints = selectedCA.totalPoints + selectedRD.totalPoints

  return {
    conceptApplication: selectedCA,
    researchDesign: selectedRD,
    totalPoints,
    totalTime: '50 min',
  }
}
