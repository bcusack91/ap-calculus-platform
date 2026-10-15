export const psychMoodPsychPart5Data = {
  topicSlug: 'mood-psychotic-disorders',
  sections: [
    {
      id: 'mood-psychotic-disorders-p5-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Mood and Psychotic Disorders

**Part 5 of 7 — Dissociative, Eating, Personality, and Neurodevelopmental Disorders**

> 🔑 **Key Concept:** The last four categories in Topic 5.4 differ in **when** they begin and **what** they disrupt. Dissociative disorders split off parts of memory or identity, often after trauma. Eating disorders disrupt eating in ways that harm health. Personality disorders are lasting, inflexible patterns that begin by early adulthood. Neurodevelopmental disorders begin in childhood and are judged against what is typical for a person's age.

## Dissociative Disorders

**Dissociation** is a disconnection among things that are normally integrated: consciousness, memory, identity, emotion, perception, body representation, motor control, and behavior. The framework names two dissociative disorders.

| Disorder | Core feature | Example |
|---|---|---|
| **Dissociative amnesia** | Inability to recall important personal information, usually about a traumatic or stressful event, far beyond ordinary forgetting and not caused by a brain injury or substance | After a violent assault, a woman cannot remember the attack or the days around it |
| **Dissociative amnesia with fugue** | Amnesia for one's identity or personal history along with **travel or wandering** away from home | A man under severe stress disappears and is found weeks later in another city, unable to say who he is |
| **Dissociative identity disorder (DID)** | Two or more **distinct personality states** (identities), with recurring gaps in memory for everyday events, personal information, or trauma | A person finds clothes she does not remember buying, and friends describe her acting like a different person |

**Possible causes:** the framework links dissociative disorders to the experience of **trauma or stress**. Many people diagnosed with DID report severe, repeated trauma in childhood, and one interpretation is that dissociation began as a way to escape an inescapable experience. Some researchers argue that cultural expectations and suggestive therapy practices also shape how DID symptoms appear, which is one reason diagnosis rates vary across countries and decades.

> **DID is not schizophrenia.** DID involves separate identities and memory gaps. Schizophrenia involves psychosis (delusions, hallucinations, disorganized speech) and negative symptoms, with one identity.

## Feeding and Eating Disorders

Feeding and eating disorders involve altered eating that impairs **health or psychological functioning**. Two are in AP scope.

| | **Anorexia nervosa** | **Bulimia nervosa** |
|---|---|---|
| Eating pattern | Restricting food intake | Recurrent **binge eating** (a large amount in a short time with a sense of lost control) |
| Compensation | Restriction itself; sometimes excessive exercise | Recurrent compensatory behavior: vomiting, laxatives, fasting, or excessive exercise |
| Body weight | **Significantly low** for age and health | Usually in or above the typical range |
| Thinking | Intense fear of gaining weight; distorted experience of body shape or failure to recognize the danger of low weight | Self-evaluation unduly driven by body shape and weight |
| DSM-5-TR timing | No set duration | Binge eating and compensation each at least once a week for 3 months |

**Possible causes** draw on all the sources the framework lists: **genetic** (eating disorders run in families and show twin-study heritability), **biological** (changes in appetite and reward systems), **social and cultural** (pressure toward a thin ideal, appearance-focused sports and media; rates have risen as Western beauty standards spread), **cognitive** (perfectionism, all-or-nothing thinking, a distorted body image), and **behavioral** (in bulimia, purging relieves the guilt and anxiety after a binge, which negatively reinforces the cycle). Eating disorders are diagnosed most often in adolescent girls and young women, but they occur across genders, body sizes, and backgrounds.
      `
    },
    {
      id: 'mood-psychotic-disorders-p5-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Dissociative and Eating Disorders** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Coworkers describe Elena as sometimes speaking in a child\'s voice and calling herself by another name. Elena reports long gaps in her memory for ordinary days. She does not have hallucinations or delusions. Which diagnosis best fits?',
            options: [
              'Schizophrenia',
              'Dissociative identity disorder',
              'Bipolar I disorder',
              'Borderline personality disorder'
            ],
            correctAnswer: 1,
            explanation: 'Distinct identity states with recurring memory gaps define dissociative identity disorder. Schizophrenia would involve psychotic symptoms such as hallucinations or delusions rather than separate identities.'
          },
          {
            question: 'Kayla, 19, regularly eats a very large amount of food in one sitting while feeling unable to stop, and afterward she makes herself vomit. Her weight is in the typical range for her height. Which diagnosis is most consistent with this pattern?',
            options: [
              'Anorexia nervosa',
              'Bulimia nervosa',
              'Hoarding disorder',
              'Generalized anxiety disorder'
            ],
            correctAnswer: 1,
            explanation: 'Recurrent binge eating followed by compensatory behavior such as vomiting, with weight in the typical range, fits bulimia nervosa. Anorexia nervosa requires a significantly low body weight.'
          },
          {
            question: 'After his business collapses, a man vanishes from his hometown. Police find him a month later working under a new name in another state, with no memory of his earlier life. Which diagnosis best fits?',
            options: [
              'Dissociative amnesia with fugue',
              'Dissociative identity disorder',
              'Posttraumatic stress disorder',
              'Major depressive disorder'
            ],
            correctAnswer: 0,
            explanation: 'Travel away from home combined with amnesia for one\'s identity, following severe stress, is dissociative amnesia with fugue. There is no evidence of multiple identity states, which DID would require.'
          }
        ]
      }
    },
    {
      id: 'mood-psychotic-disorders-p5-s3-personality',
      type: 'text' as const,
      content: `
## Personality Disorders

Everyone has personality traits. A **personality disorder** is an enduring pattern of inner experience and behavior that:
1. **deviates** markedly from the expectations of the person's culture,
2. is **pervasive and inflexible** across many situations,
3. **begins in adolescence or early adulthood**,
4. is **stable over time**, and
5. leads to **distress or impairment**.

This is what separates a personality disorder from an episode-based disorder such as major depression: the pattern is part of how the person usually relates to the world, not a period that comes and goes.

### The three clusters

| Cluster | Description | Disorders | Key features |
|---|---|---|---|
| **A** | **Odd or eccentric** | **Paranoid** | Pervasive distrust; assumes others intend harm |
| | | **Schizoid** | Detached from relationships; narrow emotional expression |
| | | **Schizotypal** | Discomfort with close relationships, odd beliefs and perceptions, eccentric behavior |
| **B** | **Dramatic, emotional, or erratic** | **Antisocial** | Disregard for and violation of others' rights; deceit and lack of remorse |
| | | **Histrionic** | Excessive emotionality and attention-seeking |
| | | **Narcissistic** | Grandiosity, need for admiration, lack of empathy |
| | | **Borderline** | Unstable relationships, self-image, and emotions; impulsivity; intense fear of abandonment |
| **C** | **Anxious or fearful** | **Avoidant** | Social inhibition, feelings of inadequacy, hypersensitivity to criticism |
| | | **Dependent** | Excessive need to be cared for; clinging and fear of separation |
| | | **Obsessive-compulsive** | Preoccupation with order, perfectionism, and control |

Antisocial personality disorder is diagnosed only in adults (18 or older), with evidence of conduct problems that began before age 15.

**Obsessive-compulsive personality disorder (OCPD) is not OCD.** OCD involves intrusive obsessions and anxiety-reducing compulsions that the person usually wants to stop. OCPD is a lasting **style** of rigid perfectionism and control, with no true obsessions or compulsions, which the person often sees as simply "the right way" to do things.

**Possible causes** (biological, genetic, social, cultural, behavioral, cognitive): personality disorders run in families; antisocial personality disorder has been linked to **low physiological arousal** (little fear or anxiety response to threats or punishment), reduced frontal lobe activity, and childhood abuse or neglect; borderline personality disorder is often explained as an inborn emotional sensitivity combined with a childhood environment that dismissed or punished emotions. Cultural norms matter by definition, because a pattern counts only if it deviates from the person's own culture.

## Neurodevelopmental Disorders

**Neurodevelopmental disorders** begin during the **developmental period**, and symptoms are judged by whether a behavior is **appropriate for the person's age or maturity**.

| | **Attention-deficit/hyperactivity disorder (ADHD)** | **Autism spectrum disorder (ASD)** |
|---|---|---|
| Core features | Persistent **inattention** and/or **hyperactivity-impulsivity** that interferes with functioning | Persistent differences in **social communication and interaction**, plus **restricted, repetitive** behaviors, interests, or activities, sometimes with sensory over- or under-reactivity |
| Onset and settings | Several symptoms present **before age 12**, in **two or more settings** (home, school, work) | Present in early childhood, though it may be recognized later |
| Range | Mainly inattentive, mainly hyperactive-impulsive, or combined | A **spectrum**: support needs range from low to very high |

**Possible causes:** the framework lists **environmental, physiological, or genetic** sources. Both disorders are highly heritable in twin studies. Environmental factors include prenatal exposure to alcohol or tobacco and very premature birth. Physiological factors include differences in brain development. Vaccines do **not** cause autism; the study that claimed a link was retracted, and large studies have found no connection.

**Language note:** person-first language ("a person with ADHD") is the general standard. Many autistic adults prefer identity-first language ("an autistic person"); respectful practice is to follow the individual's preference.
      `
    },
    {
      id: 'mood-psychotic-disorders-p5-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Sort by Personality Cluster** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A man has believed for years that his coworkers secretly plot against him and reads hidden insults into friendly emails. His pattern belongs to Cluster _____.',
            options: ['A', 'B', 'C', 'none of the clusters']
          },
          {
            label: 'A woman longs for friendships but avoids them because she is convinced she will be criticized and rejected. Her pattern belongs to Cluster _____.',
            options: ['A', 'B', 'C', 'none of the clusters']
          },
          {
            label: 'A man repeatedly lies to and cheats others for profit and feels no remorse when they are hurt. The best-fitting diagnosis is _____ personality disorder.',
            options: ['narcissistic', 'antisocial', 'paranoid', 'histrionic']
          }
        ],
        correctAnswers: ['A', 'C', 'antisocial'],
        hint1: 'Pervasive distrust is an odd or eccentric pattern.',
        hint2: 'Avoidance driven by fear of criticism is in the anxious or fearful cluster.',
        hint3: 'Violating others\' rights without remorse is the defining feature.',
        explanation: 'Pervasive suspicion is paranoid personality disorder in Cluster A (odd or eccentric). Avoiding relationships out of fear of rejection is avoidant personality disorder in Cluster C (anxious or fearful). Deceit and lack of remorse define antisocial personality disorder in Cluster B.'
      }
    },
    {
      id: 'mood-psychotic-disorders-p5-s5-input',
      type: 'input-boxes' as const,
      content: `
**Quick Recall** ✍️
      `,
      exercise: {
        questions: [
          {
            question: 'Narcissistic, histrionic, borderline, and antisocial personality disorders make up which cluster? (one letter)',
            answer: 'B',
            acceptableAnswers: ['cluster B'],
            explanation: 'Cluster B is the dramatic, emotional, or erratic cluster.'
          },
          {
            question: 'For an ADHD diagnosis, several symptoms must be present before what age?',
            answer: '12',
            acceptableAnswers: ['twelve', 'age 12'],
            explanation: 'The DSM-5-TR requires several inattentive or hyperactive-impulsive symptoms before age 12, in two or more settings.'
          }
        ]
      }
    },
    {
      id: 'mood-psychotic-disorders-p5-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Telling Patterns Apart** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Since high school, Grant has insisted on strict rules and detailed lists at work, redoes coworkers\' tasks to make them perfect, and misses deadlines because nothing feels good enough. He sees nothing wrong with his approach and reports no intrusive thoughts. Which diagnosis best fits?',
            options: [
              'Obsessive-compulsive disorder',
              'Obsessive-compulsive disorder with poor insight',
              'Obsessive-compulsive personality disorder',
              'Avoidant personality disorder'
            ],
            correctAnswer: 2,
            explanation: 'A lasting style of perfectionism and control that began by early adulthood, with no intrusive obsessions or anxiety-relieving rituals, fits obsessive-compulsive personality disorder. OCD, with or without good insight, would require intrusive obsessions and compulsions, which he does not report.'
          },
          {
            question: 'Which feature most clearly distinguishes a personality disorder from a major depressive episode?',
            options: [
              'A pattern that causes the person significant distress',
              'A rigid pattern lasting from early adulthood onward',
              'Changes in mood that affect relationships',
              'Behavior that others notice and comment on'
            ],
            correctAnswer: 1,
            explanation: 'Personality disorders are enduring, pervasive, inflexible patterns that begin in adolescence or early adulthood and stay stable, while depressive episodes come and go. Distress, mood effects on relationships, and noticeable behavior can occur in both.'
          },
          {
            question: 'A 7-year-old has trouble staying seated, interrupts constantly, and loses his belongings, both at home and at school, far more than his classmates do. Why does the comparison with classmates matter for a diagnosis of ADHD?',
            options: [
              'Diagnosis requires that the child be older than his classmates',
              'Symptoms are judged against what is typical for that age',
              'Comparison shows the behavior is caused by the school environment',
              'Comparison shows that the behavior was learned from his classmates'
            ],
            correctAnswer: 1,
            explanation: 'Neurodevelopmental disorders are identified by whether behavior is appropriate for a person\'s age or maturity, so a 7-year-old\'s behavior must be compared with that of other 7-year-olds. Comparison alone does not show that the school or classmates caused the behavior.'
          }
        ]
      }
    }
  ]
}
