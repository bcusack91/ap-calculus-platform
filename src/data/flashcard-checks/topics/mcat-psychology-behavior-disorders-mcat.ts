import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-psychology-behavior-disorders-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`What are the two core symptoms of major depressive disorder, at least one of which must be present?`]: {
    question: r`For three weeks a man has slept poorly, eaten little, felt exhausted, struggled to concentrate and felt excessive guilt nearly every day, and he can no longer manage his job. He denies feeling sad or low. Which additional finding is required before major depressive disorder can be diagnosed?`,
    options: [r`Recurrent thoughts that his life is not worth living`, r`Loss of interest in the activities he used to enjoy`, r`Visible slowing of his speech and body movements`, r`Significant unintended loss of his body weight`],
    correctAnswer: 1,
    explanation: r`At least one of the two core symptoms, depressed mood or anhedonia, must be present, and he denies depressed mood, so loss of interest or pleasure is the finding that is needed. Thoughts of death, psychomotor slowing and weight loss all count toward the symptom total, but none of them can stand in for a core symptom.`,
  },
  [r`What does the monoamine hypothesis of depression propose?`]: {
    question: r`A drug once used for high blood pressure empties presynaptic vesicles of serotonin, norepinephrine and dopamine, so less of each is released. Under the monoamine hypothesis, which side effect would be predicted in some patients?`,
    options: [r`Depressed mood, from less monoamine in synapses`, r`Manic episodes, from less monoamine in synapses`, r`Depressed mood, from more monoamine in synapses`, r`Hallucinations, from more monoamine in synapses`],
    correctAnswer: 0,
    explanation: r`The monoamine hypothesis ties depression to a shortage of serotonin, norepinephrine and dopamine in synapses, so a drug that depletes them should lower mood. Mania is the wrong direction of mood change for a shortage, and the two options that mention more monoamine misread what emptying the vesicles does.`,
  },
  [r`What distinguishes bipolar I disorder from bipolar II disorder?`]: {
    question: r`A woman has had three major depressive episodes. Last spring she also had five days of elevated mood, a reduced need for sleep and unusual talkativeness that friends noticed, but she kept working well and had no psychotic features. She has never had a more severe elevated episode. Which diagnosis fits best?`,
    options: [r`Bipolar I disorder`, r`Cyclothymic disorder`, r`Bipolar II disorder`, r`Major depressive disorder`],
    correctAnswer: 2,
    explanation: r`A hypomanic episode plus at least one major depressive episode, with no history of full mania, is bipolar II disorder. Bipolar I disorder needs a full manic episode, which she has never had. Cyclothymic disorder is ruled out because her episodes met full criteria, and major depressive disorder ignores the hypomanic episode.`,
  },
  [r`What are the positive symptoms of schizophrenia?`]: {
    question: r`A psychiatrist records four findings in a patient with schizophrenia. Which one is a positive symptom?`,
    options: [r`He speaks very little and gives brief, empty replies`, r`He shows almost no facial expression when talking`, r`He no longer starts or finishes his daily tasks`, r`He speaks in jumbled, loosely connected phrases`],
    correctAnswer: 3,
    explanation: r`Positive symptoms are experiences or behaviors added to normal functioning, and disorganized speech is one of them. Speaking very little, showing a flat facial expression and failing to start tasks are losses of normal function, so they are negative symptoms (alogia, flat affect and avolition).`,
  },
  [r`In OCD, what is the difference between obsessions and compulsions?`]: {
    question: r`Several times a day a woman is struck by an unwanted, frightening image of her house on fire. Each time, she silently counts backward from 100 by sevens until the anxiety eases. How should the image and the counting be classified?`,
    options: [r`The image is a compulsion; the counting is an obsession`, r`The image is an obsession; the counting is a compulsion`, r`The image is an obsession; the counting is an obsession`, r`The image is a delusion; the counting is a compulsion`],
    correctAnswer: 1,
    explanation: r`The intrusive, anxiety-producing image is an obsession, and the counting is a compulsion because it is a repetitive mental act done to reduce that anxiety. Compulsions do not have to be visible actions, so calling the counting an obsession is the common mistake. The image is unwanted and recognized as her own thought, so it is not a delusion.`,
  },
  [r`Name the major dissociative disorders and their defining features.`]: {
    question: r`A man is found in a city 300 miles from his home. He cannot recall his name or any of his past, although he can still read, drive and hold a conversation. He has no head injury, his drug screen is negative, and no alternate identity states are observed. Which diagnosis fits best?`,
    options: [r`Dissociative identity disorder with amnesia`, r`Depersonalization/derealization disorder`, r`Conversion disorder with sensory symptoms`, r`Dissociative amnesia with dissociative fugue`],
    correctAnswer: 3,
    explanation: r`Loss of important autobiographical memory together with sudden travel away from home is dissociative amnesia with fugue. Dissociative identity disorder needs two or more distinct personality states, which were not seen. Depersonalization/derealization disorder is a feeling of detachment without loss of identity, and conversion disorder affects motor or sensory function, not memory of one's own life.`,
  },
  [r`Which personality disorders make up Cluster A, and what is their shared theme?`]: {
    question: r`A man has lived alone for decades. He has no wish for friends or family contact, is indifferent to praise and criticism, and chooses solitary hobbies. He is not suspicious of others and has no odd beliefs or unusual perceptions. Which personality disorder and cluster fit best?`,
    options: [r`Avoidant personality disorder, in Cluster C`, r`Schizotypal personality disorder, in Cluster A`, r`Schizoid personality disorder, in Cluster A`, r`Antisocial personality disorder, in Cluster B`],
    correctAnswer: 2,
    explanation: r`Detachment from social relationships with no desire for them is schizoid personality disorder, one of the odd or eccentric Cluster A disorders. A person with avoidant personality disorder wants relationships but fears rejection. Schizotypal personality disorder needs eccentric beliefs or perceptual distortions, and antisocial personality disorder is about disregarding the rights of others.`,
  },
  [r`The dopamine hypothesis attributes the positive symptoms of schizophrenia to excess dopamine activity in the {{c1::mesolimbic}} pathway.`]: {
    question: r`An experimental drug lowers dopamine signaling in a single pathway. A patient's voices and persecutory beliefs fade, while his motivation, movement and hormone levels do not change. Under the dopamine hypothesis, which pathway did the drug most likely act on?`,
    options: [r`The mesolimbic pathway`, r`The mesocortical pathway`, r`The nigrostriatal pathway`, r`The tuberoinfundibular pathway`],
    correctAnswer: 0,
    explanation: r`Hallucinations and delusions are attributed to excess dopamine activity in the mesolimbic pathway, so reducing dopamine there relieves them. The mesocortical pathway is linked to negative and cognitive symptoms, the nigrostriatal pathway to movement, and the tuberoinfundibular pathway to prolactin control, none of which changed.`,
  },
  [r`SSRIs treat depression and anxiety by blocking presynaptic reuptake of {{c1::serotonin}}, increasing its availability in the synaptic cleft.`]: {
    question: r`A neuron that releases serotonin is studied before and after sertraline is added to the bath. Which change is the direct effect of the drug?`,
    options: [r`Serotonin stays in the cleft longer because its reuptake pump is blocked`, r`Serotonin is released in larger bursts because its vesicles are enlarged`, r`Serotonin is broken down more slowly because its enzyme is blocked`, r`Serotonin binds more tightly because its receptor is reshaped`],
    correctAnswer: 0,
    explanation: r`An SSRI blocks the presynaptic serotonin reuptake transporter, so serotonin that has been released remains in the synaptic cleft for longer. It does not change how much is packed into vesicles. Blocking the breakdown enzyme describes an MAO inhibitor, and the drug does not act directly on the postsynaptic receptor.`,
  },
  [r`Cluster {{c1::B}} personality disorders are described as dramatic, emotional, or erratic, and include antisocial, borderline, histrionic, and narcissistic personality disorders.`]: {
    question: r`A woman is uncomfortable whenever she is not the center of attention. She dresses and speaks theatrically, and her emotions shift quickly and seem shallow. Her sense of self is stable, and she has no fear of abandonment and no history of self-harm. How is her pattern classified?`,
    options: [r`Cluster B, as borderline personality disorder`, r`Cluster C, as dependent personality disorder`, r`Cluster B, as histrionic personality disorder`, r`Cluster A, as schizotypal personality disorder`],
    correctAnswer: 2,
    explanation: r`Attention-seeking with theatrical, shallow emotion is histrionic personality disorder, which belongs to the dramatic and erratic Cluster B. Borderline personality disorder is also in Cluster B but needs unstable self-image and fear of abandonment, which she lacks. Dependent and schizotypal personality disorders belong to other clusters and describe clinging and eccentric patterns.`,
  },
  [r`Negative and cognitive symptoms of schizophrenia are associated with reduced dopamine activity in the {{c1::mesocortical}} pathway to the prefrontal cortex.`]: {
    question: r`Imaging of a patient with schizophrenia shows reduced dopamine activity in the projections that run to the prefrontal cortex. Which findings does this abnormality best explain?`,
    options: [r`Voices and persecutory delusions`, r`Flat affect and poor working memory`, r`Resting tremor and muscle rigidity`, r`Raised prolactin and milk discharge`],
    correctAnswer: 1,
    explanation: r`Low dopamine activity in the mesocortical pathway to the prefrontal cortex is linked to negative and cognitive symptoms such as flat affect and poor working memory. Voices and delusions come from excess dopamine in the mesolimbic pathway. Tremor and raised prolactin reflect low dopamine signaling in the nigrostriatal and tuberoinfundibular pathways.`,
  },
  [r`A major depressive episode requires symptoms to be present nearly every day for at least {{c1::two weeks}}.`]: {
    question: r`A patient's depressed mood, loss of interest, insomnia, fatigue and poor concentration began on March 1 and have been present nearly every day since, with clear impairment. What is the earliest date on which the duration requirement for a major depressive episode is met?`,
    options: [r`March 8`, r`March 15`, r`April 1`, r`September 1`],
    correctAnswer: 1,
    explanation: r`A major depressive episode needs symptoms nearly every day for at least two weeks, which is reached on March 15. One week is too short. One month is the figure used for PTSD and for active-phase symptoms in schizophrenia, and six months is the figure for generalized anxiety disorder and for schizophrenia overall.`,
  },
  [r`Typical antipsychotic drugs reduce positive symptoms of schizophrenia primarily by blocking {{c1::D2 dopamine}} receptors.`]: {
    question: r`Four experimental compounds are tested for their ability to reduce hallucinations in schizophrenia. Based on how typical antipsychotics work, the strongest effect is expected from the compound that:`,
    options: [r`activates D2 dopamine receptors`, r`blocks serotonin reuptake pumps`, r`activates GABA-A chloride channels`, r`blocks D2 dopamine receptors`],
    correctAnswer: 3,
    explanation: r`Typical antipsychotics reduce positive symptoms by blocking D2 dopamine receptors, which lowers the excess dopamine signaling behind hallucinations. Activating D2 receptors would make psychosis worse, as amphetamine does. Blocking serotonin reuptake describes an SSRI, and activating GABA-A channels describes a benzodiazepine.`,
  },
  [r`Both PTSD and chronic major depression are associated with reduced volume of the {{c1::hippocampus}}.`]: {
    question: r`A veteran has had PTSD for fifteen years, with persistently elevated cortisol. Which MRI finding, and which consequence of it, would be expected?`,
    options: [r`A smaller hippocampus, with weaker shutoff of the stress axis`, r`A larger hippocampus, with stronger shutoff of the stress axis`, r`A smaller amygdala, with weaker fear responses to reminders`, r`A smaller cerebellum, with weaker balance and coordination`],
    correctAnswer: 0,
    explanation: r`Prolonged cortisol exposure is thought to damage hippocampal neurons, and both PTSD and chronic depression are linked to reduced hippocampal volume. Because the hippocampus normally helps inhibit the stress axis, the loss weakens that feedback. A larger hippocampus reverses the finding, and neither a small amygdala with weak fear responses nor cerebellar loss is the reported pattern.`,
  },
  [r`Systematic desensitization treats phobias by pairing relaxation with gradual exposure to feared stimuli, a counterconditioning technique grounded in {{c1::classical conditioning}}.`]: {
    question: r`A client who fears elevators first learns deep muscle relaxation. She then stays relaxed while imagining an elevator, later while standing near one, and finally while riding one. In learning terms, what is changing?`,
    options: [r`Riding the elevator is rewarded, so that behavior is reinforced`, r`Avoiding the elevator is punished, so that behavior is weakened`, r`The elevator, a conditioned stimulus, is paired with a new response`, r`A calm model rides the elevator, so that behavior is imitated`],
    correctAnswer: 2,
    explanation: r`Systematic desensitization is counterconditioning, a classical conditioning technique: the feared conditioned stimulus is paired with relaxation, a response incompatible with fear. Reward and punishment are operant conditioning, and neither is used here. No model is watched, so observational learning is not the mechanism either.`,
  },
  [r`What is persistent depressive disorder (dysthymia)?`]: {
    question: r`For fourteen months a woman has had low mood on most days, with low energy and poor self-esteem. She has never had enough symptoms for a major depressive episode and has never had an elevated mood. Why can persistent depressive disorder not yet be diagnosed?`,
    options: [r`Her low mood has never become severe enough`, r`Her history includes no hypomanic episode`, r`Her symptoms number fewer than five at once`, r`Her low mood has lasted less than two years`],
    correctAnswer: 3,
    explanation: r`Persistent depressive disorder requires depressed mood on more days than not for at least two years in adults, and she is at fourteen months. Severity and a count of five symptoms are requirements of a major depressive episode, not of this chronic, milder disorder. Hypomania belongs to the bipolar disorders and is not part of this diagnosis.`,
  },
  [r`What is cyclothymic disorder?`]: {
    question: r`A man was diagnosed with cyclothymic disorder three years ago. He now has a full week of euphoric mood, almost no sleep, racing speech and reckless spending that costs him his job. How should his diagnosis be revised?`,
    options: [r`Bipolar II disorder, because a hypomanic episode has occurred`, r`Bipolar I disorder, because a manic episode has occurred`, r`Cyclothymic disorder, because the pattern exceeds two years`, r`Major depressive disorder, because his mood is unstable`],
    correctAnswer: 1,
    explanation: r`Cyclothymic disorder applies only while the mood swings never meet full criteria for a mood episode. A week of elevated mood with marked impairment is a full manic episode, which makes the diagnosis bipolar I disorder. Hypomania does not cause marked impairment such as losing a job, and major depressive disorder involves no elevated episodes.`,
  },
  [r`How does a manic episode differ from a hypomanic episode?`]: {
    question: r`Two patients have elevated mood, little need for sleep and rapid speech. Patient X has had these symptoms for five days; coworkers notice the change, but he works normally. Patient Y has had them for three days, believes he is a prophet, and has been admitted to hospital. How are the episodes classified?`,
    options: [r`X is hypomanic; Y is manic`, r`X is manic; Y is hypomanic`, r`X is manic; Y is manic`, r`X is hypomanic; Y is hypomanic`],
    correctAnswer: 0,
    explanation: r`Severity and impairment separate the two. X has a noticeable change lasting at least four days without marked impairment, which is hypomania. Y has psychotic features and needed hospitalization, which makes the episode manic whatever its length. Ranking them by duration alone, so that the longer episode is called mania, is the common mistake.`,
  },
  [r`What defines panic disorder beyond simply having panic attacks?`]: {
    question: r`Six weeks ago a man had two sudden panic attacks that came with no warning and no trigger. Which additional finding is needed for a diagnosis of panic disorder?`,
    options: [r`Six months or more of worry about many areas of his life`, r`Attacks that occur only when he meets one feared object`, r`A month or more of worry about further attacks, or avoidance`, r`A normal heart tracing recorded during a third attack`],
    correctAnswer: 2,
    explanation: r`Panic disorder is recurrent unexpected attacks plus at least one month of persistent worry about more attacks or behavior change because of them. Six months of worry about many areas of life describes generalized anxiety disorder. Attacks tied to one feared object point to a specific phobia, and a normal heart tracing rules out cardiac disease but is not a diagnostic criterion.`,
  },
  [r`What is a specific phobia, and what is the most effective treatment approach?`]: {
    question: r`A man has refused to board any aircraft for ten years. He agrees that the danger is tiny, yet he becomes terrified at the thought of flying and has turned down promotions to avoid it. Which treatment approach is most effective for this problem?`,
    options: [r`Continued careful avoidance of all flying`, r`Free association about childhood memories`, r`Daily antipsychotic medication for the fear`, r`Graded, repeated safe contact with flying`],
    correctAnswer: 3,
    explanation: r`This is a specific phobia, and exposure-based therapy works best because repeated safe contact with the feared situation extinguishes the conditioned fear. Avoidance maintains the fear, since it is negatively reinforced by relief. Free association is a psychoanalytic technique, and antipsychotics treat psychosis, not phobias.`,
  },
  [r`What is the core fear in social anxiety disorder?`]: {
    question: r`A violinist plays flawlessly when alone but has cancelled every recital for two years. Which statement about her fear would support social anxiety disorder?`,
    options: [r`She fears that the audience will judge her harshly`, r`She fears that the stage lights will make her faint`, r`She fears that another sudden panic attack is coming`, r`She fears that the hall has no easy way to escape`],
    correctAnswer: 0,
    explanation: r`The core fear in social anxiety disorder is being scrutinized and negatively evaluated by other people. A fear of one particular object or situation, such as the lights, is a specific phobia. Fear of another unexpected attack is the anticipatory anxiety of panic disorder, and fear of being unable to escape describes agoraphobia.`,
  },
  [r`How does OCD differ from obsessive-compulsive personality disorder (OCPD)?`]: {
    question: r`An accountant insists that every report follow his own rigid format and redoes colleagues' work late into the night. He considers his standards simply correct and is irritated that others do not share them. He has no intrusive thoughts and no rituals. Which diagnosis and reason fit best?`,
    options: [r`OCD, because he sees the pattern as right and proper`, r`OCD, because he finds the pattern alien and upsetting`, r`OCPD, because he finds the pattern alien and upsetting`, r`OCPD, because he sees the pattern as right and proper`],
    correctAnswer: 3,
    explanation: r`Obsessive-compulsive personality disorder is a pervasive, ego-syntonic style of perfectionism and control that the person regards as correct, with no true obsessions or compulsions. OCD is ego-dystonic: the person is distressed by unwanted thoughts and rituals, which he does not have. The options that pair a diagnosis with the opposite attitude mix up the two terms.`,
  },
  [r`How is schizoaffective disorder distinguished from schizophrenia with mood symptoms?`]: {
    question: r`Over the past year a woman has heard voices and held fixed false beliefs. Major depressive episodes were present for most of that year, but during one three-week stretch her mood was normal and the voices and beliefs continued. Which diagnosis and reason fit best?`,
    options: [r`Psychotic depression, as psychosis appeared only during mood episodes`, r`Schizophrenia, as mood episodes were only a brief part of the illness`, r`Schizoaffective disorder, as psychosis persisted without a mood episode`, r`Brief psychotic disorder, as the psychosis lasted less than one month`],
    correctAnswer: 2,
    explanation: r`Schizoaffective disorder needs a major mood episode alongside psychotic symptoms plus at least two weeks of delusions or hallucinations with no mood episode, and both are present. Depression with psychotic features is ruled out because the psychosis continued while her mood was normal. Schizophrenia does not fit because mood episodes covered most of the illness, and the psychosis lasted far longer than a month.`,
  },
  [r`Why are panic attacks frequently mistaken for heart attacks?`]: {
    question: r`A man arrives at an emergency department with chest pain, a pounding heart, breathlessness and sweating that peaked within ten minutes, along with a sense of doom. His heart tracing and cardiac enzymes are normal. Which process best accounts for his symptoms?`,
    options: [r`A surge of parasympathetic activity from the vagus nerve`, r`A surge of sympathetic activity that releases epinephrine`, r`A sudden fall in sympathetic activity to the heart`, r`A blockage of coronary flow that injures heart muscle`],
    correctAnswer: 1,
    explanation: r`A panic attack is an intense fight-or-flight response: sympathetic activation raises heart rate, breathing and sweating, which is why it resembles a heart attack. Parasympathetic activity or a fall in sympathetic tone would slow the heart, not make it pound. A coronary blockage is ruled out by the normal tracing and enzymes.`,
  },
  [r`What are the two core symptom domains of ADHD, and when must symptoms appear?`]: {
    question: r`Since kindergarten, a 9-year-old has fidgeted, interrupted classmates and lost his homework at school. His parents and his soccer coach report no such behavior at home or at practice. Which requirement for ADHD is not met?`,
    options: [r`Symptoms must occur in two or more settings`, r`Symptoms must begin before the age of twelve`, r`Symptoms must include hyperactive behavior`, r`Symptoms must include inattentive behavior`],
    correctAnswer: 0,
    explanation: r`ADHD requires several symptoms in two or more settings, and his appear only at school, so another explanation tied to the classroom should be considered. The age requirement is met because the behavior began in kindergarten. Fidgeting and interrupting are hyperactive-impulsive symptoms and losing homework is an inattentive one, so both domains are represented.`,
  },
  [r`What are the two core diagnostic domains of autism spectrum disorder?`]: {
    question: r`A 4-year-old rarely makes eye contact, does not point to share things that interest him and does not respond to other children's feelings. Which additional finding would complete the second core domain of autism spectrum disorder?`,
    options: [r`Fidgeting in his seat and blurting out answers during story time`, r`Refusing to speak at preschool while speaking freely at home`, r`Lining up toys for hours, with distress at any change of routine`, r`Intense crying whenever he is separated from his parents`],
    correctAnswer: 2,
    explanation: r`The second domain is restricted, repetitive patterns of behavior or interests, such as repetitive play and insistence on sameness. Fidgeting and blurting out are the hyperactivity-impulsivity of ADHD. Not speaking at preschool and distress at separation are anxiety-related patterns, and neither is a restricted or repetitive behavior.`,
  },
  [r`Generalized anxiety disorder involves excessive, difficult-to-control worry about multiple areas of life occurring more days than not for at least {{c1::six months}}.`]: {
    question: r`Two patients have worry about work, health, money and family on most days that they cannot control, with muscle tension and poor sleep. The first has had this pattern for seven months and the second for seven weeks. Which duration rule applies to generalized anxiety disorder, and who meets it?`,
    options: [r`Six months; only the first patient meets it`, r`One month; both of the patients meet it`, r`Two weeks; both of the patients meet it`, r`Two years; neither of the patients meets it`],
    correctAnswer: 0,
    explanation: r`Generalized anxiety disorder requires excessive worry on more days than not for at least six months, so only the patient at seven months qualifies. One month is the worry period in panic disorder and the threshold for PTSD. Two weeks belongs to a major depressive episode and two years to persistent depressive disorder.`,
  },
  [r`A diagnosis of schizophrenia requires continuous signs of disturbance persisting for at least {{c1::six months}}, including at least one month of active-phase symptoms.`]: {
    question: r`A woman had hallucinations and disorganized speech for two months. Before and after that period she was withdrawn and held odd beliefs, so the continuous disturbance has lasted seven months in total. She has had no mood episodes. Which diagnosis and reason fit best?`,
    options: [r`Schizophreniform disorder, since active symptoms lasted two months`, r`Brief psychotic disorder, since active symptoms stopped by themselves`, r`Schizoaffective disorder, since odd beliefs outlasted the psychosis`, r`Schizophrenia, since the whole disturbance exceeds six months`],
    correctAnswer: 3,
    explanation: r`Schizophrenia needs continuous signs for at least six months, including at least one month of active-phase symptoms, and the six months may include milder periods before and after. Counting only the two active months leads to schizophreniform disorder, which is the common error. Brief psychotic disorder lasts under one month, and schizoaffective disorder requires major mood episodes.`,
  },
  [r`What are the four symptom clusters of PTSD?`]: {
    question: r`Six months after a serious car crash, a man jumps at the sound of a slammed door, scans every intersection for danger and wakes several times a night. To which PTSD symptom cluster do these three findings belong?`,
    options: [r`Intrusion or re-experiencing of the event`, r`Alterations in arousal and reactivity`, r`Avoidance of reminders of the trauma`, r`Negative changes in cognition and mood`],
    correctAnswer: 1,
    explanation: r`An exaggerated startle response, hypervigilance and disturbed sleep are all alterations in arousal and reactivity. Intrusion means flashbacks and nightmares of the event, avoidance means staying away from reminders, and the cognition and mood cluster covers things like self-blame, numbness and feeling detached from others.`,
  },
  [r`What is conversion disorder (functional neurological symptom disorder)?`]: {
    question: r`After witnessing a workplace accident, a man cannot move his right arm. His reflexes, nerve conduction studies and brain imaging are normal, and the arm moves normally while he sleeps. He is distressed, is not producing the symptom on purpose and seeks no compensation. Which diagnosis fits best?`,
    options: [r`Factitious disorder`, r`Illness anxiety disorder`, r`Malingering`, r`Conversion disorder`],
    correctAnswer: 3,
    explanation: r`A loss of voluntary motor function that is incompatible with neurological disease, follows stress and is not intentionally produced is conversion disorder. Factitious disorder and malingering both involve deliberately producing symptoms, for the sick role or for an external reward. Illness anxiety disorder is worry about having a disease with few or no symptoms.`,
  },
  [r`What is the core mechanism of cognitive behavioral therapy (CBT)?`]: {
    question: r`A client with social anxiety holds the belief that if she speaks in a meeting, everyone will think she is stupid. Which treatment plan reflects cognitive behavioral therapy?`,
    options: [r`Explore the early childhood conflicts that the belief unconsciously expresses`, r`Offer unconditional positive regard and let her direct every session herself`, r`Weigh the evidence for the belief, then practise speaking up in small steps`, r`Give a token for each comment she makes and leave the belief unexamined`],
    correctAnswer: 2,
    explanation: r`Cognitive behavioral therapy restructures maladaptive automatic thoughts and also changes the behaviors that maintain them, so it pairs examining the belief with graded practice. Exploring unconscious childhood conflict is psychodynamic, and unconditional positive regard is humanistic therapy. Tokens alone are a purely behavioral method that leaves out the cognitive part.`,
  },
  [r`PTSD is diagnosed only when symptoms persist for more than {{c1::one month}} after trauma; a similar shorter-lasting presentation is called acute stress disorder.`]: {
    question: r`Ten days after being robbed at gunpoint, a store clerk has nightmares about the robbery, avoids the store, feels numb and startles easily. Which diagnosis applies at this point?`,
    options: [r`Acute stress disorder`, r`Posttraumatic stress disorder`, r`Adjustment disorder`, r`Generalized anxiety disorder`],
    correctAnswer: 0,
    explanation: r`The symptom picture matches PTSD, but PTSD can be diagnosed only when symptoms have lasted more than one month, so at ten days the label is acute stress disorder. Adjustment disorder is used for stress reactions that do not meet criteria for a specific trauma disorder. Generalized anxiety disorder is free-floating worry, not symptoms tied to one trauma.`,
  },
  [r`Anorexia nervosa requires significantly {{c1::low body weight}}, whereas people with bulimia nervosa are typically of normal weight or overweight.`]: {
    question: r`Two students each binge eat and then vomit several times a week, and both are intensely afraid of gaining weight. The first is markedly underweight (BMI 16) and the second is of normal weight (BMI 23). How are they classified?`,
    options: [r`The first has bulimia nervosa; the second has anorexia nervosa`, r`The first has anorexia nervosa; the second has bulimia nervosa`, r`Both have bulimia nervosa, because both binge and then purge`, r`Both have anorexia nervosa, because both fear gaining weight`],
    correctAnswer: 1,
    explanation: r`Binge-purge behavior and fear of weight gain occur in both disorders, so body weight decides: significantly low weight means anorexia nervosa, while people with bulimia nervosa are typically of normal weight or above. Classifying both by the shared behavior or the shared fear ignores the one feature that separates them.`,
  },
}
