export const psychTreatmentPart3Data = {
  topicSlug: 'treatment-therapy',
  sections: [
    {
      id: 'treatment-therapy-p3-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Treatment and Therapy

**Part 3 of 7 — Behavior Therapies: Applied Behavior Analysis**

> 🔑 **Key Concept:** Behavior therapists do not hunt for hidden causes. They assume that maladaptive behaviors, including fears, were **learned**, so they can be **unlearned** or replaced using the same principles of conditioning you studied in Unit 3.

### Applied behavior analysis

**Applied behavior analysis (ABA)** involves applying principles of conditioning to address mental disorders and developmental disabilities (CED 5.5.D.3). The CED lists four techniques that employ ABA principles:

| Technique | Conditioning principle | Core move | Typical target |
|---|---|---|---|
| **Exposure therapies**, such as systematic desensitization | Classical conditioning (extinction and counterconditioning) | Face the feared stimulus without escaping, often while relaxed | Phobias, panic, OCD, PTSD |
| **Aversion therapy** | Classical conditioning (counterconditioning) | Pair an unwanted behavior with an unpleasant stimulus | Unwanted habits, some substance use |
| **Token economy** | Operant conditioning (positive reinforcement) | Reward target behaviors with tokens exchanged for privileges | Inpatient units, classrooms, residential programs |
| **Biofeedback** | Operant conditioning (feedback as reinforcement) | Display a body signal so the client can learn to change it | Anxiety-related tension, stress symptoms |

### ABA and developmental disabilities

ABA is widely used to teach skills to people with developmental disabilities, including children with autism spectrum disorder. A therapist breaks a skill, such as requesting a snack with words or a picture card, into small steps and reinforces each successful step. This is **shaping**: reinforcing closer and closer approximations of the target behavior.

> 🔑 **AP Connection:** For each ABA technique, be ready to name **which** kind of conditioning it uses. Exposure and aversion therapies change what a stimulus has come to signal (classical). Token economies and biofeedback change behavior through its consequences (operant).
      `
    },
    {
      id: 'treatment-therapy-p3-s2-exposure',
      type: 'text' as const,
      content: `
## Exposure Therapies

### Why fears persist

A fear can begin through classical conditioning: a neutral stimulus (a dog) is paired with a frightening experience (a bite) and becomes a conditioned stimulus for fear. The fear then **persists** because of operant conditioning. Each time the person avoids dogs, anxiety drops. That relief is **negative reinforcement**: removing an unpleasant feeling strengthens the avoidance. Because the person never stays near a dog long enough to learn that nothing bad happens, the fear never extinguishes.

**Exposure therapies** break this cycle by having the person face the feared stimulus, without escaping, until anxiety falls. Repeated exposure without harm leads to **extinction** of the conditioned fear.

| Exposure type | How it works | Example |
|---|---|---|
| **In vivo exposure** | Face the real feared situation | Touching a real dog |
| **Imaginal exposure** | Vividly imagine the feared situation | Picturing a dog approaching |
| **Virtual reality exposure** | Face a computer-simulated situation | A headset simulating a plane takeoff |
| **Flooding** | Intense exposure to a highly feared stimulus at once, until anxiety subsides | Staying in a room with a calm dog for an extended session |
| **Exposure and response prevention** | Face a trigger and **refrain from the compulsion** | A person with OCD touches a doorknob and does not wash |

### Systematic desensitization

**Systematic desensitization**, developed by Joseph Wolpe, is a gradual exposure therapy that uses **counterconditioning**: replacing a fear response with a response that cannot occur at the same time, relaxation. You cannot be deeply relaxed and highly anxious at once.

It has three steps:

1. **Relaxation training.** The client learns progressive muscle relaxation or slow breathing.
2. **Build an anxiety hierarchy.** The client and therapist list feared situations and rank them from least to most anxiety-provoking.
3. **Climb the hierarchy while relaxed.** Starting at the bottom, the client faces each item (in imagination or in real life) while staying relaxed, moving up only when the current step no longer causes much anxiety.

### Worked Example: Building a hierarchy

**Case.** Ana, 22, has a specific phobia of dogs. She crosses the street to avoid them and turned down a job because the office allows pets. She rates her distress on a 0 to 100 scale.

**Step 1: List situations and rate them.**

| Rank | Situation | Ana's distress rating |
|---|---|---|
| 1 | Reading the word "dog" in a book | 10 |
| 2 | Looking at a photo of a small dog | 20 |
| 3 | Watching a video of a dog playing | 35 |
| 4 | Standing across the street from a leashed dog | 50 |
| 5 | Standing in the same room as a calm, leashed dog | 70 |
| 6 | Petting a calm dog while its owner holds the leash | 90 |

**Step 2: Start at the bottom.** In a relaxed state, Ana reads the word "dog." She repeats it until her rating falls to near zero.

**Step 3: Move up one rung at a time.** If her rating spikes on a step, she returns to relaxation and repeats the step, or drops back one rung. She does not skip steps.

**Step 4: Check the outcome.** By the end, Ana can pet a calm dog with low distress. Relaxation has replaced fear as the response to dogs, and avoidance is no longer being negatively reinforced.

> 🔑 **AP Connection:** Systematic desensitization is gradual and pairs each step with relaxation. Flooding is intense exposure all at once. Both are exposure therapies; the difference is the pace.
      `
    },
    {
      id: 'treatment-therapy-p3-s3-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Exposure Therapies** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "In systematic desensitization, what is the purpose of teaching the client deep muscle relaxation before she faces feared situations?",
            options: [
              "Relaxation lets unconscious memories of the fear surface",
              "Relaxation serves as a token she can trade for a reward",
              "Relaxation can replace fear as the response to each step",
              "Relaxation makes the feared object produce a sense of nausea"
            ],
            correctAnswer: 2,
            explanation: "Systematic desensitization uses counterconditioning: relaxation is incompatible with anxiety, so it can replace fear as the response to each item in the hierarchy. Uncovering unconscious memories is psychodynamic, tokens belong to a token economy, and nausea is part of aversion therapy."
          },
          {
            question: "Luis has a fear of flying and is building an anxiety hierarchy with his therapist. Which situation most likely belongs at the bottom of his hierarchy?",
            options: [
              "Sitting in a parked plane at the gate",
              "Taking a short flight with the therapist",
              "Looking at a photo of a plane on a phone",
              "Waiting in the boarding line at the airport"
            ],
            correctAnswer: 2,
            explanation: "A hierarchy starts with the least anxiety-provoking situation, and a photo is the most distant version of the feared stimulus. A short flight would belong near the top, and the gate and boarding line fall in between."
          },
          {
            question: "Each time Ana takes the stairs to avoid riding an elevator, her anxiety drops. In learning terms, that drop in anxiety acts as",
            options: [
              "positive punishment of avoidance",
              "negative reinforcement of avoidance",
              "extinction of the fear response",
              "a conditioned stimulus for fear"
            ],
            correctAnswer: 1,
            explanation: "Removing an unpleasant feeling strengthens the behavior that removed it, which is negative reinforcement, and it keeps the avoidance going. Extinction would require Ana to face elevators without harm, which avoidance prevents."
          }
        ]
      }
    },
    {
      id: 'treatment-therapy-p3-s4-aversion-tokens',
      type: 'text' as const,
      content: `
## Aversion Therapy and Token Economies

### Aversion therapy

Exposure therapies try to **remove** a negative response to something harmless. **Aversion therapy** does the opposite: it creates a negative response to something harmful that the person finds attractive. It pairs the unwanted behavior or stimulus with an **unpleasant** stimulus, so the behavior comes to trigger discomfort instead of pleasure.

| Unwanted behavior | Aversive pairing | Intended new association |
|---|---|---|
| Drinking alcohol | A medication that causes nausea if the person drinks | Alcohol signals sickness |
| Nail biting | Bitter-tasting nail coating | Biting signals a bad taste |
| Smoking | Rapid, unpleasant puffing in a clinic setting | Cigarettes signal discomfort |

**Limits.** Aversion therapy raises ethical concerns because it deliberately causes discomfort, and its effects may not **generalize** outside the clinic: a person may learn that drinking causes nausea only while taking the medication. Today it is used far less than other behavior therapies and only with informed consent.

### Token economies

A **token economy** applies **operant conditioning**. Clients earn **tokens** (points, chips, stickers) for target behaviors, then exchange them for **backup reinforcers** such as privileges, snacks, or outings.

| Element | Example on an inpatient unit |
|---|---|
| Target behaviors | Making one's bed, attending group sessions, taking medication on schedule |
| Tokens | Points recorded on a card |
| Backup reinforcers | Extra phone time, a trip to the store, choice of movie |
| Learning principle | Positive reinforcement; tokens are **secondary (conditioned) reinforcers** because they gain value from what they can buy |

**Strength.** Token economies can build daily-living and social behaviors in hospitals, classrooms, and residential programs.

**Limit.** Behaviors may drop when the tokens stop. Good programs gradually **fade** the tokens and shift to natural reinforcers, such as praise or the satisfaction of a tidy room.

### Worked Example: Classical or operant?

| Scenario | Technique | Classical or operant? | How you know |
|---|---|---|---|
| A child with autism spectrum disorder earns a sticker for each word spoken; five stickers buy playground time | Token economy | **Operant** | A consequence after the behavior makes it more likely |
| A man taking a nausea-producing medication feels sick when he drinks | Aversion therapy | **Classical** | A stimulus (alcohol) becomes paired with an unpleasant response (nausea) |
| A woman afraid of heights climbs a ladder one rung per session while breathing slowly | Systematic desensitization | **Classical** | Relaxation replaces fear as the response to height cues |

> 🔑 **AP Connection:** "Exchanged for," "earn," and "points" signal a token economy (operant). "Paired with something unpleasant" signals aversion therapy (classical). Distractors often swap these two.
      `
    },
    {
      id: 'treatment-therapy-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Which Principle?** 🧩

Choose the learning principle each technique relies on most directly.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Systematic desensitization replaces fear with relaxation through _____.',
            options: ['operant conditioning', 'classical conditioning', 'observational learning', 'cognitive restructuring']
          },
          {
            label: 'A token economy strengthens target behaviors through _____.',
            options: ['classical conditioning', 'observational learning', 'operant conditioning', 'cognitive restructuring']
          },
          {
            label: 'Aversion therapy links an unwanted behavior to discomfort through _____.',
            options: ['observational learning', 'operant conditioning', 'cognitive restructuring', 'classical conditioning']
          }
        ],
        correctAnswers: ['classical conditioning', 'operant conditioning', 'classical conditioning'],
        hint1: 'Ask whether the technique changes what a stimulus signals (classical) or the consequence after a behavior (operant).',
        hint2: 'Tokens arrive after the behavior, as a consequence.',
        hint3: 'Pairing alcohol with nausea is a stimulus-stimulus association.',
        explanation: 'Systematic desensitization and aversion therapy both change the response a stimulus triggers, which is classical counterconditioning. A token economy reinforces behavior with consequences, which is operant conditioning.'
      }
    },
    {
      id: 'treatment-therapy-p3-s6-biofeedback',
      type: 'text' as const,
      content: `
## Biofeedback

**Biofeedback** uses principles of conditioning to help clients regulate body systems, such as the **sympathetic** and **parasympathetic** nervous systems, that contribute to feelings of anxiety or depression (CED 5.5.D.3).

### How it works

1. **Measure.** Sensors record a body signal the person normally cannot sense well: heart rate, muscle tension, skin temperature, breathing rate, or sweat gland activity.
2. **Display.** The signal appears as a line on a screen, a tone, or a light, in real time.
3. **Practice.** The client tries strategies such as slow breathing or relaxing specific muscles.
4. **Reinforce.** When the signal moves in the desired direction, the display shows it at once. Seeing success **reinforces** the strategy, an operant principle.

### Connecting to Unit 1

| Division of the autonomic nervous system | State | Biofeedback goal for an anxious client |
|---|---|---|
| **Sympathetic** | Arousal: faster heart rate, muscle tension, sweating | Reduce this activity |
| **Parasympathetic** | Calming: slower heart rate, relaxed muscles, digestion resumes | Increase this activity |

### Worked Example

**Case.** Keisha, a college student, gets tension headaches and racing thoughts before exams. In biofeedback sessions, a sensor on her forehead measures muscle tension and plays a tone that rises in pitch as tension increases.

**Step 1: What is measured?** Forehead muscle tension, a sign of sympathetic arousal.

**Step 2: What does she learn?** Which breathing and relaxation strategies lower the tone.

**Step 3: What is the conditioning?** Each drop in pitch is immediate feedback that reinforces the strategy she just used, so she uses it more.

**Step 4: The goal.** Eventually Keisha can relax those muscles before an exam without the equipment, shifting her body toward parasympathetic activity.

### All four ABA techniques side by side

| | Exposure (systematic desensitization) | Aversion therapy | Token economy | Biofeedback |
|---|---|---|---|---|
| **Changes** | Fear response to a harmless stimulus | Attraction to a harmful behavior | Frequency of target behaviors | Body arousal |
| **Uses** | Relaxation plus a hierarchy | An unpleasant stimulus | Tokens exchanged for backup reinforcers | Real-time display of a body signal |
| **Learning type** | Classical | Classical | Operant | Operant |

> 🔑 **AP Connection:** A biofeedback question will usually describe sensors and a screen or tone. Expect to name the nervous system division involved: the client learns to **decrease sympathetic** and **increase parasympathetic** activity.
      `
    },
    {
      id: 'treatment-therapy-p3-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Applied Behavior Analysis** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "On a psychiatric inpatient unit, residents earn points for making their beds and attending group sessions, and they trade the points for extra phone time. Which technique is the unit using?",
            options: [
              "Aversion therapy",
              "Token economy",
              "Systematic desensitization",
              "Biofeedback"
            ],
            correctAnswer: 1,
            explanation: "Earning points for target behaviors and exchanging them for privileges is a token economy, an operant technique. Biofeedback displays body signals, and aversion therapy pairs a behavior with an unpleasant stimulus."
          },
          {
            question: "A client with an anxiety disorder watches a screen showing her heart rate and practices slow breathing until the line drops. She is learning to increase activity in which part of the nervous system?",
            options: [
              "The parasympathetic division",
              "The sympathetic division",
              "The somatic nervous system",
              "The central nervous system"
            ],
            correctAnswer: 0,
            explanation: "Slowing the heart and calming the body is parasympathetic activity, which biofeedback trains the client to increase. The sympathetic division produces arousal, the opposite of the goal."
          },
          {
            question: "A man who wants to stop drinking takes a medication that makes him nauseated whenever he drinks alcohol. This treatment works by",
            options: [
              "rewarding sober days with tokens he trades for privileges",
              "facing drinking cues step by step while he stays relaxed",
              "uncovering the unconscious roots of his urge to drink",
              "pairing drinking with an unpleasant bodily response"
            ],
            correctAnswer: 3,
            explanation: "Pairing alcohol with nausea is aversion therapy, which uses classical conditioning so drinking comes to signal sickness. Tokens describe a token economy, and gradual relaxed exposure describes systematic desensitization."
          }
        ]
      }
    },
    {
      id: 'treatment-therapy-p3-s8-wrap',
      type: 'text' as const,
      content: `
## Part 3 Summary

- **ABA** applies conditioning principles to mental disorders and developmental disabilities.
- **Exposure therapies** extinguish fear by facing the feared stimulus without escape; **systematic desensitization** does it gradually, pairing a hierarchy with relaxation.
- **Aversion therapy** pairs an unwanted behavior with an unpleasant stimulus.
- **Token economies** reinforce target behaviors with tokens exchanged for backup reinforcers.
- **Biofeedback** displays body signals so clients learn to lower sympathetic arousal.

> 🔑 **AP Connection:** Behavior therapies treat the **behavior** as the problem, so they do not need insight into its origin. That contrast with Part 2 is a favorite exam move: "A behavior therapist would most likely..." is answered with a conditioning technique, never with free association or reflection. Part 4 adds the cognitive layer: what if the problem is how a person **thinks** about the situation?
      `
    }
  ]
}
