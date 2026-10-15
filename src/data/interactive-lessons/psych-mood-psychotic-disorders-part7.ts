export const psychMoodPsychPart7Data = {
  topicSlug: 'mood-psychotic-disorders',
  sections: [
    {
      id: 'mood-psychotic-disorders-p7-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Mood and Psychotic Disorders

**Part 7 of 7 — Synthesis: Telling Disorders Apart**

> 🔑 **Key Concept:** Most AP questions about disorders give a short case and ask you to name the disorder, a symptom, or a possible cause. Success comes from asking a few questions in a fixed order instead of matching on a single word.

### The whole map of Topic 5.4

| Category | Disorders in AP scope | Defining feature | Timing clue | Possible causes the framework names |
|---|---|---|---|---|
| Depressive | Major depressive disorder; persistent depressive disorder | Sad, empty, or irritable mood with physical and cognitive changes | 2 weeks (MDD); 2 years in adults (PDD) | Biological, genetic, social, cultural, behavioral, cognitive |
| Bipolar | Bipolar I; bipolar II | Periods of mania or hypomania and periods of depression | Mania 1 week; hypomania 4 days | Same six sources; strong genetic evidence |
| Schizophrenia spectrum | Schizophrenia | Delusions, hallucinations, disorganized speech, disorganized motor behavior, negative symptoms | 6 months of signs, 1 month active | Genetic or biological: prenatal virus exposure, dopamine hypothesis |
| Anxiety | Specific phobia, agoraphobia, panic, social anxiety, GAD | Excessive fear or anxiety with behavior changes | Usually 6 months or more | Learned associations, maladaptive thinking, biology and genes |
| Obsessive-compulsive and related | OCD; hoarding disorder | Obsessions and compulsions; difficulty discarding | Time-consuming or impairing | Learned associations, maladaptive thinking, biology and genes |
| Trauma- and stressor-related | PTSD | Distress after trauma: flashbacks, hypervigilance, insomnia, detachment, hostility | More than 1 month | Trauma or stress |
| Dissociative | Dissociative amnesia (with or without fugue); DID | Disruption of memory, identity, or consciousness | Often follows trauma | Trauma or stress |
| Feeding and eating | Anorexia nervosa; bulimia nervosa | Altered eating that harms health | Bulimia: weekly for 3 months | Biological, genetic, social, cultural, behavioral, cognitive |
| Personality | Clusters A, B, C (10 named disorders) | Enduring, pervasive, inflexible patterns that deviate from one's culture | Begins in adolescence or early adulthood; stable | Biological, genetic, social, cultural, behavioral, cognitive |
| Neurodevelopmental | ADHD; ASD | Behavior not typical for age or maturity | Onset in the developmental period (ADHD symptoms before 12) | Environmental, physiological, genetic |

### A decision sequence for any case

1. **Has the person lost contact with reality?** Delusions, hallucinations, or disorganized speech without a mood episode → schizophrenia spectrum.
2. **Are there mood episodes?** Find the highest "up" ever: mania → bipolar I; hypomania plus major depression → bipolar II; depression only → depressive disorder (2 weeks or 2 years?).
3. **Is fear or anxiety central?** Find its focus: one object, places where escape is hard, unexpected attacks, being judged, or everything.
4. **Are there intrusive thoughts with rituals, or trouble discarding?** → OCD or hoarding disorder.
5. **Did it follow a trauma?** Flashbacks and hypervigilance → PTSD; lost memory or identity → dissociative disorder.
6. **Is eating the problem?** Low weight → anorexia; binge-compensation cycles → bulimia.
7. **Is it a lifelong style rather than an episode?** → personality disorder; then find the cluster.
8. **Did it begin in childhood, judged against age norms?** → ADHD or ASD.

Disorders can **co-occur** (for example, depression with an anxiety disorder), so a case may fit more than one category. On multiple-choice items, choose the option that the **specific details** support best.
      `
    },
    {
      id: 'mood-psychotic-disorders-p7-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review — Name the Disorder** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For the past two months, Dana has felt worthless and hopeless and has lost interest in activities she used to love. Two years ago she spent ten days barely sleeping, talking nonstop, and spending thousands of dollars, which led to a hospital stay. Which diagnosis best fits her whole history?',
            options: [
              'Major depressive disorder',
              'Bipolar II disorder',
              'Persistent depressive disorder',
              'Bipolar I disorder'
            ],
            correctAnswer: 3,
            explanation: 'The earlier ten-day episode with hospitalization was a manic episode, and one manic episode is enough for bipolar I disorder regardless of later depression. Diagnosing from the current depressive episode alone would miss it.'
          },
          {
            question: 'Since a serious car crash six weeks ago, Omar has had vivid flashbacks of the impact, jumps at sudden noises, sleeps poorly, and feels cut off from his friends. Which diagnosis best fits?',
            options: [
              'Generalized anxiety disorder',
              'Dissociative amnesia',
              'Posttraumatic stress disorder',
              'Panic disorder'
            ],
            correctAnswer: 2,
            explanation: 'Flashbacks, hypervigilance, insomnia, and emotional detachment for more than a month after a traumatic event fit PTSD. Omar remembers the event, which argues against dissociative amnesia.'
          },
          {
            question: 'A man reports hearing a voice that comments on everything he does and believes that the government has placed a chip in his tooth. He has no history of mania or major depression. Which category fits best?',
            options: [
              'Schizophrenia spectrum disorders',
              'Dissociative disorders',
              'Obsessive-compulsive and related disorders',
              'Personality disorders'
            ],
            correctAnswer: 0,
            explanation: 'Hallucinations and delusions without mood episodes point to the schizophrenia spectrum. Dissociative disorders involve memory and identity disruption, and the intrusive thoughts of OCD are recognized as coming from one\'s own mind rather than heard as an outside voice.'
          }
        ]
      }
    },
    {
      id: 'mood-psychotic-disorders-p7-s3-pairs',
      type: 'text' as const,
      content: `
## The Look-Alike Pairs

These pairs account for many wrong answers. For each, one deciding question separates them.

| Pair | Deciding question | Answer |
|---|---|---|
| MDD vs PDD | How long, and how intense? | MDD: 2+ weeks, often severe episodes. PDD: 2+ years of chronic low mood |
| MDD vs bipolar II | Has there **ever** been hypomania? | If yes, bipolar II |
| Bipolar I vs bipolar II | Was the "up" ever **manic** (1 week, marked impairment, hospitalization, or psychosis)? | If yes, bipolar I |
| Schizophrenia vs DID | Psychosis or separate identities? | Psychosis = schizophrenia; identity states with memory gaps = DID |
| Panic disorder vs specific phobia | Expected or unexpected? | Unexpected attacks = panic; fear tied to one cue = phobia |
| Agoraphobia vs social anxiety | Fear of being **trapped** or of being **judged**? | Trapped = agoraphobia; judged = social anxiety |
| OCD vs OCPD | Unwanted obsessions with rituals, or a lasting style of perfectionism? | Obsessions and rituals = OCD; style = OCPD |
| PTSD vs dissociative amnesia | Is the trauma relived or forgotten? | Relived (flashbacks) = PTSD; forgotten = dissociative amnesia |
| Anorexia vs bulimia | Is body weight significantly low? | Yes = anorexia; binge-compensation with typical weight = bulimia |
| Avoidant personality vs social anxiety disorder | Lifelong pervasive pattern or a fear tied to social situations? | They overlap; the personality disorder is broader and stable since early adulthood |

## Cross-Category Misconceptions

| Misconception | Correction |
|---|---|
| "Psychotic" means violent or dangerous. | Psychosis means loss of contact with reality. Most people with psychotic symptoms are not violent. |
| Any strong mood change is "bipolar." | Bipolar disorders require manic or hypomanic **episodes** lasting days, not mood shifts within a day. |
| Being organized means having OCD. | OCD involves distressing obsessions and time-consuming compulsions. |
| Every person who survives trauma gets PTSD. | Most do not; vulnerability and support matter. |
| One cause explains each disorder. | The framework lists several possible sources for nearly every category. |

### Language that is accurate and respectful

- Say **"a person with schizophrenia," "a student living with bipolar disorder."**
- Avoid using disorder names as casual adjectives ("I'm so OCD," "the weather is bipolar"). It trivializes real conditions and spreads misconceptions.
- Avoid slurs such as "crazy" or "psycho." Describe the **behavior** precisely instead; precise description is also what earns credit on the AP exam.
      `
    },
    {
      id: 'mood-psychotic-disorders-p7-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Pick the Category** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A 20-year-old has, since early adolescence, had intense and unstable relationships, rapid mood shifts, impulsive behavior, and a strong fear of abandonment. The best-fitting category is _____.',
            options: ['bipolar disorders', 'personality disorders', 'depressive disorders', 'dissociative disorders']
          },
          {
            label: 'A woman cannot recall anything about the week of a flood that destroyed her home, though she remembers the rest of her life. The best-fitting category is _____.',
            options: ['trauma- and stressor-related disorders', 'dissociative disorders', 'neurodevelopmental disorders', 'anxiety disorders']
          },
          {
            label: 'A first grader has difficulty with back-and-forth conversation, lines up toys in the same order every day, and becomes very distressed by small changes in routine. The best-fitting category is _____.',
            options: ['neurodevelopmental disorders', 'obsessive-compulsive and related disorders', 'anxiety disorders', 'personality disorders']
          }
        ],
        correctAnswers: ['personality disorders', 'dissociative disorders', 'neurodevelopmental disorders'],
        hint1: 'The pattern is long-standing and pervasive rather than episodic, which suggests a Cluster B pattern.',
        hint2: 'The key symptom is lost memory for a stressful event, not reliving it.',
        hint3: 'Social communication differences plus repetitive behavior that began in early childhood.',
        explanation: 'Long-standing instability in relationships, emotions, and self-image with fear of abandonment is borderline personality disorder (Cluster B). Memory loss for a stressful period is dissociative amnesia. Social communication differences with restricted, repetitive behavior in early childhood fit autism spectrum disorder, a neurodevelopmental disorder.'
      }
    },
    {
      id: 'mood-psychotic-disorders-p7-s5-causes',
      type: 'text' as const,
      content: `
## Writing About Causes: One Template for Every Category

When a question asks for a possible cause, match the type of evidence to the type of cause, then connect it to the specific case.

| If the case mentions… | Name this kind of cause | Sample sentence |
|---|---|---|
| A parent, sibling, or twin with the disorder | **Genetic** | "Her identical twin's diagnosis suggests a genetic predisposition." |
| Neurotransmitters, brain structures, prenatal events | **Biological** | "Excess dopamine activity may contribute to his hallucinations, as the dopamine hypothesis proposes." |
| A frightening pairing or a relieving escape | **Behavioral** (learned associations) | "Avoiding elevators reduces her anxiety, which negatively reinforces the avoidance." |
| Interpretations, beliefs, self-talk | **Cognitive** | "Explaining failure as permanent and personal reflects a pessimistic explanatory style." |
| Relationships, losses, support | **Social** | "Losing his friends after the move removed an important source of support." |
| Norms, media, culture-bound patterns | **Cultural** | "Pressure toward a thin ideal may contribute to restrictive eating." |
| A traumatic or extremely stressful event | **Trauma or stress** | "The assault preceded her memory loss, consistent with dissociative amnesia." |

> 🔑 **AP Connection:** Treatments for each disorder (antidepressants, lithium, antipsychotics, exposure therapy, cognitive therapy, dialectical behavior therapy, and more) are the subject of **Treatment and Therapy**. A strong cause statement prepares you for that lesson, because many treatments target the same causes: exposure therapy targets learned fear, cognitive therapy targets maladaptive thoughts, and antipsychotics target dopamine activity.
      `
    },
    {
      id: 'mood-psychotic-disorders-p7-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Integrated Practice — Causes and Evidence** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A teenager developed a fear of swimming after nearly drowning, and she now refuses even to wade in shallow water. Which pair of concepts best explains how the fear began and then why it continues?',
            options: [
              'Observational learning, then positive punishment',
              'Classical conditioning, then negative reinforcement',
              'Operant conditioning, then continuous positive reinforcement',
              'Learned helplessness, then stimulus generalization'
            ],
            correctAnswer: 1,
            explanation: 'Pairing water with the terror of nearly drowning made water a conditioned stimulus for fear, and avoiding water relieves her anxiety, which negatively reinforces the avoidance. Positive reinforcement and punishment do not match the relief-from-anxiety pattern.'
          },
          {
            question: 'Which finding would provide the strongest support for a genetic contribution to bipolar I disorder?',
            options: [
              'People with bipolar I disorder often report major stressful life events',
              'Identical twins are concordant far more often than fraternal twins',
              'Lithium reduces manic episodes for many people with the disorder',
              'Sleep loss frequently comes just before manic episodes begin'
            ],
            correctAnswer: 1,
            explanation: 'A much higher concordance in identical twins, who share more genes, is direct evidence of a genetic contribution. Stressful events and sleep loss are environmental triggers, and a medication response says little about whether a disorder is inherited.'
          },
          {
            question: 'A person shows flat affect, reduced speech, and little motivation, but no hallucinations or delusions at present. A classmate argues that this cannot be schizophrenia because "schizophrenia means hearing voices." What is the best response?',
            options: [
              'Negative symptoms are part of schizophrenia, and hallucinations are not required',
              'The classmate is right, because hallucinations are needed for every diagnosis',
              'The symptoms describe a depressive disorder, so schizophrenia is ruled out',
              'Flat affect and low motivation are positive symptoms of schizophrenia'
            ],
            correctAnswer: 0,
            explanation: 'Negative symptoms such as flat affect and reduced motivation are one of the five symptom areas, and a diagnosis can rest on combinations other than hallucinations. These are negative, not positive, symptoms; overlap with depression would need to be evaluated, but it does not rule schizophrenia out.'
          }
        ]
      }
    }
  ]
}
