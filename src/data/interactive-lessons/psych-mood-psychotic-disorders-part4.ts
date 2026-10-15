export const psychMoodPsychPart4Data = {
  topicSlug: 'mood-psychotic-disorders',
  sections: [
    {
      id: 'mood-psychotic-disorders-p4-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Mood and Psychotic Disorders

**Part 4 of 7 — Anxiety, Obsessive-Compulsive, and Trauma-Related Disorders**

> 🔑 **Key Concept:** Fear is the response to a present threat; anxiety is apprehension about a possible future threat. Both are normal and useful. **Anxiety disorders** involve fear or anxiety that is **excessive**, lasts, and disturbs behavior. Two related categories, **obsessive-compulsive** disorders and **trauma- and stressor-related** disorders, also center on anxiety but are classified separately.

### The five anxiety disorders in AP scope

| Disorder | Core feature | Example |
|---|---|---|
| **Specific phobia** | Intense fear or anxiety toward a **specific object or situation**, out of proportion to the real danger, usually avoided | **Acrophobia** (heights): refusing a job on an upper floor. **Arachnophobia** (spiders): leaving a room at the sight of a small spider |
| **Agoraphobia** | Intense fear of situations such as **public transportation, open spaces, enclosed spaces** (shops, theaters), **standing in line or being in a crowd**, or **being outside the home alone**, because escape or help might be hard to get if panic-like symptoms struck | A woman stops riding the subway and shopping, and eventually rarely leaves home |
| **Panic disorder** | Recurrent, **unexpected panic attacks**: sudden surges of overwhelming fear with physical, cognitive, and emotional symptoms, followed by persistent worry about more attacks or by changes in behavior | A student's heart pounds, he cannot breathe, and he is sure he is dying, with no trigger; afterward he avoids the gym in case exercise sets off another attack |
| **Social anxiety disorder** | Intense fear of being **watched or judged** by others in social or performance situations | A capable student never speaks in class and eats lunch alone to avoid being evaluated |
| **Generalized anxiety disorder (GAD)** | **Prolonged, nonspecific** anxiety and worry about many everyday things, hard to control | Constant worry about grades, family health, money, and the weather, with muscle tension and poor sleep |

DSM-5-TR duration details: worry in GAD occurs more days than not for **at least 6 months**; specific phobia, social anxiety disorder, and agoraphobia typically last **6 months or more**; in panic disorder, at least one attack is followed by **at least 1 month** of worry or behavior change.

### Distinguishing the look-alikes

| Clue in the case | Points to |
|---|---|
| Fear of **one thing** (dogs, flying, blood) | Specific phobia |
| Fear of **places where escape is hard** or help is unavailable | Agoraphobia |
| Attacks that come **out of the blue**, then fear of the attacks themselves | Panic disorder |
| Fear of **evaluation or embarrassment** in front of others | Social anxiety disorder |
| Worry about **everything**, with no single focus | GAD |

Agoraphobia and social anxiety disorder are distinct, though a person can have both: in agoraphobia the fear is about being **trapped or without help**, while in social anxiety disorder it is about being **judged**.

### Culture-bound expressions

The framework names two culture-bound conditions:
- **Ataque de nervios**, experienced mainly by people of Caribbean or Iberian descent, is linked in the framework to panic disorder. It often follows a stressful family event, such as a death or conflict, and can involve uncontrollable crying or shouting, trembling, a feeling of heat rising, verbal or physical aggression, and sometimes fainting.
- **Taijin kyofusho**, experienced mainly by Japanese people, is linked to social anxiety disorder. The person fears that their **body or appearance is offensive or unpleasing to others**. The focus is on offending others, while classic social anxiety focuses on embarrassing oneself.

> 🔑 **AP Connection:** The CED's own sample multiple-choice items include a culture-bound case. Remember the pairings: ataque de nervios ↔ panic; taijin kyofusho ↔ social anxiety.
      `
    },
    {
      id: 'mood-psychotic-disorders-p4-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Which Anxiety Disorder?** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Priya avoids buses, movie theaters, and crowded stores because she fears she would be trapped with no way to get help if she suddenly felt faint. She now leaves home only with her brother. Which diagnosis best fits?',
            options: [
              'Social anxiety disorder',
              'Agoraphobia',
              'Specific phobia',
              'Generalized anxiety disorder'
            ],
            correctAnswer: 1,
            explanation: 'Fear of several situations, such as public transportation, enclosed spaces, and crowds, because escape or help might be unavailable is agoraphobia. Her fear is not about being judged, which would point to social anxiety disorder.'
          },
          {
            question: 'For the past year, Ben has worried most days about his grades, his parents\' health, money, and whether he locked the door. He feels restless, tense, and tired, and he cannot stop the worry. Which feature most clearly distinguishes his condition from a specific phobia?',
            options: [
              'His anxiety produces physical tension',
              'His anxiety spreads across many topics',
              'His anxiety has lasted longer than six months',
              'His anxiety interferes with his daily life'
            ],
            correctAnswer: 1,
            explanation: 'Generalized anxiety disorder involves nonspecific worry about many everyday matters, while a specific phobia targets one object or situation. Physical tension, long duration, and interference can occur in both disorders.'
          },
          {
            question: 'Which description fits panic disorder rather than a specific phobia of elevators?',
            options: [
              'Sudden attacks that happen without a clear trigger',
              'Intense fear that appears whenever elevators are near',
              'Avoidance of tall buildings to stay out of elevators',
              'Fear that is out of proportion to the actual danger'
            ],
            correctAnswer: 0,
            explanation: 'Panic disorder is defined by recurrent unexpected panic attacks, followed by worry about further attacks. Fear triggered by one situation, avoidance of that situation, and disproportionate fear all describe a specific phobia.'
          }
        ]
      }
    },
    {
      id: 'mood-psychotic-disorders-p4-s3-ocd-ptsd',
      type: 'text' as const,
      content: `
## Obsessive-Compulsive and Related Disorders

These disorders involve **obsessions** (intrusive, unwanted thoughts, urges, or images that cause anxiety) and **compulsions** (repetitive behaviors or mental acts the person feels driven to perform to address the obsessions).

| Disorder | Core feature | Example |
|---|---|---|
| **Obsessive-compulsive disorder (OCD)** | Obsessions and/or compulsions that are time-consuming (more than an hour a day) or cause significant distress or impairment | Intrusive fear of contamination (obsession) leads to washing hands until they crack (compulsion) |
| **Hoarding disorder** | Persistent difficulty discarding possessions **regardless of their actual value**, because of a felt need to save them and distress at discarding; clutter fills living spaces | Rooms filled with old newspapers and broken appliances so that the kitchen cannot be used |

How an obsession and a compulsion connect:

**Intrusive thought** ("My hands are contaminated") → **anxiety rises** → **compulsion** (wash hands) → **anxiety drops for a while** → the relief makes the compulsion more likely next time.

The person usually recognizes that the thoughts are excessive, which is part of what makes OCD so distressing. Being neat or liking things organized is **not** OCD; the disorder involves anxiety-driven rituals that consume time and impair life.

## Trauma- and Stressor-Related Disorders: PTSD

**Posttraumatic stress disorder (PTSD)** follows exposure to a traumatic or extremely stressful event, such as combat, assault, a serious accident, or a disaster. The exposure can be direct, as a witness, by learning it happened to someone close, or through repeated exposure to disturbing details (as with first responders).

| Symptom named in the framework | What it looks like |
|---|---|
| **Flashbacks** | Reliving the event as if it were happening again |
| **Hypervigilance** | Constantly scanning for danger; startling at small noises |
| **Severe anxiety** | Intense distress at reminders of the event |
| **Insomnia** | Difficulty sleeping, often with nightmares |
| **Emotional detachment** | Feeling numb or cut off from others |
| **Hostility** | Irritability and angry outbursts |

DSM-5-TR requires that symptoms last **more than 1 month** and cause significant distress or impairment. People often avoid reminders of the trauma, which keeps the fear from fading.

Not everyone exposed to trauma develops PTSD. Severity of the trauma, earlier traumatic experiences, and low social support raise risk. Some people even report **posttraumatic growth** (from Topic 5.2) after recovery.
      `
    },
    {
      id: 'mood-psychotic-disorders-p4-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Condition** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A Japanese man avoids coworkers because he fears that his body odor and appearance offend them. This fits _____.',
            options: ['taijin kyofusho', 'ataque de nervios', 'agoraphobia', 'hoarding disorder']
          },
          {
            label: 'A woman cannot throw away decades of old mail and empty boxes, and her living room is now unusable. This fits _____.',
            options: ['obsessive-compulsive disorder', 'generalized anxiety disorder', 'hoarding disorder', 'specific phobia']
          },
          {
            label: 'A firefighter has nightmares, startles at loud sounds, and feels numb toward his family for three months after a fatal fire. This fits _____.',
            options: ['panic disorder', 'posttraumatic stress disorder', 'social anxiety disorder', 'generalized anxiety disorder']
          }
        ],
        correctAnswers: ['taijin kyofusho', 'hoarding disorder', 'posttraumatic stress disorder'],
        hint1: 'The fear is that his body offends other people.',
        hint2: 'The problem is difficulty discarding possessions regardless of value.',
        hint3: 'The symptoms followed a traumatic event and have lasted more than a month.',
        explanation: 'Fear that one\'s body is offensive to others is taijin kyofusho. Persistent difficulty discarding items until living spaces cannot be used is hoarding disorder. Nightmares, hypervigilance, and detachment lasting more than a month after a trauma fit posttraumatic stress disorder.'
      }
    },
    {
      id: 'mood-psychotic-disorders-p4-s5-causes',
      type: 'text' as const,
      content: `
## Possible Causes: Learning, Thinking, and Biology

The framework groups the possible causes of anxiety disorders and obsessive-compulsive disorders the same way: **learned associations** among stimuli, **maladaptive thinking or emotional responses**, and **biological or genetic** sources. For trauma-related and dissociative disorders, the cause it names is the experience of **trauma or stress**.

### Worked example: how a phobia is learned and kept

> **Practice case (hypothetical):** At age 7, Jonah was knocked down and bitten by a large dog. Now 16, he crosses the street whenever he sees any dog, even a small puppy on a leash.

**Step 1: Acquisition by classical conditioning.** The dog (neutral stimulus) was paired with the pain and shock of the bite (unconditioned stimulus, producing fear as an unconditioned response). The dog became a **conditioned stimulus** that now triggers fear (conditioned response).

**Step 2: Spread by generalization.** Jonah fears **all** dogs, not just the one that bit him. That is **stimulus generalization**.

**Step 3: Maintenance by negative reinforcement.** Each time he crosses the street, his anxiety drops. Removing an unpleasant feeling makes the avoidance more likely next time: **negative reinforcement** (operant conditioning).

**Step 4: Why it does not fade.** Because he always avoids dogs, he never experiences a dog **without** a bite, so **extinction** never gets a chance to happen. (This is why exposure-based treatments work; see Treatment and Therapy.)

The same negative-reinforcement loop explains why compulsions persist in OCD: the ritual briefly relieves anxiety, so it is strengthened.

### Thinking patterns

- **Catastrophic misinterpretation**: in panic disorder, a racing heart is read as "I'm having a heart attack," which raises fear and makes the heart race faster.
- **Overestimating threat and underestimating coping**: common in GAD and social anxiety disorder ("Everyone will notice my mistake, and I won't be able to handle it").
- **Observational learning**: a child who repeatedly watches a parent react with terror to storms can learn the fear without any direct bad experience.

### Biology and genetics

- Anxiety disorders run in families, and twin studies show a moderate genetic contribution, often expressed as an anxious, inhibited temperament.
- The **amygdala**, a limbic structure central to fear, tends to be more reactive in people with anxiety disorders.
- Low activity of **GABA**, the main inhibitory neurotransmitter, has been linked to anxiety, and drugs that enhance GABA reduce it. **Serotonin** has been linked to OCD and anxiety, because drugs that affect serotonin often help.
- An evolutionary angle: people acquire fears of heights, snakes, and spiders far more readily than fears of cars or electrical outlets, which suggests a **biological preparedness** to fear threats that endangered our ancestors.

> 🔑 **AP Connection:** For any anxiety-type case, be ready to give one explanation from **each** of the three sources the framework names. "Learned associations" alone is incomplete if the question asks you to account for why only some people exposed to a frightening event develop a disorder; that is where genetic and biological vulnerability come in.
      `
    },
    {
      id: 'mood-psychotic-disorders-p4-s6-input',
      type: 'input-boxes' as const,
      content: `
**Key Terms** ✍️
      `,
      exercise: {
        questions: [
          {
            question: 'In OCD, a repetitive behavior such as checking a lock 30 times, performed to reduce anxiety from an intrusive thought, is called a _____.',
            answer: 'compulsion',
            acceptableAnswers: ['compulsions'],
            explanation: 'Compulsions are repetitive behaviors or mental acts performed to address obsessions; the intrusive thoughts themselves are obsessions.'
          },
          {
            question: 'For a PTSD diagnosis, symptoms must last more than how many months?',
            answer: '1',
            acceptableAnswers: ['one', '1 month', 'one month'],
            explanation: 'The DSM-5-TR requires PTSD symptoms to persist for more than 1 month after the traumatic event.'
          },
          {
            question: 'Avoiding a feared situation removes anxiety, which strengthens the avoidance. What type of reinforcement is this?',
            answer: 'negative',
            acceptableAnswers: ['negative reinforcement'],
            explanation: 'Removing an unpleasant state (anxiety) increases the behavior that removed it, which is negative reinforcement.'
          }
        ]
      }
    },
    {
      id: 'mood-psychotic-disorders-p4-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Explaining Anxiety-Related Disorders** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'After a minor car accident, Ana felt panicky every time she sat in a car. She began taking the bus instead, and her fear of cars has grown stronger over two years. Which concept best explains why her fear has not faded?',
            options: [
              'Avoidance keeps extinction from occurring',
              'Stimulus discrimination narrowed her fear',
              'Spontaneous recovery reversed her progress',
              'Learned helplessness reduced her effort'
            ],
            correctAnswer: 0,
            explanation: 'By avoiding cars, Ana never experiences them without a frightening outcome, so the conditioned fear cannot extinguish, and the relief from avoidance negatively reinforces the avoidance. Discrimination, spontaneous recovery, and learned helplessness do not explain this maintenance pattern.'
          },
          {
            question: 'Two coworkers survive the same building fire. Months later, one has flashbacks and hypervigilance, while the other has returned to normal. Which explanation best accounts for the difference?',
            options: [
              'Only one of the two coworkers was actually exposed to trauma',
              'Vulnerabilities such as earlier trauma and social support vary',
              'The coworker with symptoms has a culture-bound syndrome',
              'The coworker with symptoms must have panic disorder instead'
            ],
            correctAnswer: 1,
            explanation: 'Trauma exposure is necessary for PTSD but not sufficient; factors such as earlier trauma, biological vulnerability, and social support affect who develops the disorder. Both coworkers were exposed to the same event.'
          }
        ]
      }
    }
  ]
}
