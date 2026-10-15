export const psychBrainPart6Data = {
  topicSlug: 'biological-bases-brain',
  sections: [
    {
      id: 'biological-bases-brain-p6-s1-intro',
      type: 'text' as const,
      content: `# 🧠 Biological Bases and Brain

**Part 6 of 7 — Sleep, Dreams and Sleep Disorders**

---

| Section |
|---------|
| Consciousness and the circadian rhythm |
| The stages of sleep and the nightly cycle |
| Why we sleep and why we dream |
| The five sleep disorders on the AP exam |

> 🔑 **Key Concept:** Sleep is not "the brain switching off." It is an active, organized state of consciousness that cycles through distinct stages, each with its own EEG pattern, and it does real work for memory and for restoring the body.

### Consciousness

**Consciousness** is our awareness of ourselves and our environment: thoughts, feelings, behavior and events inside and outside us. It comes in **varying levels**. **Wakefulness** and **sleep** are two states of consciousness, and even asleep we are partly aware: a parent may sleep through traffic noise but wake at a baby's cry.

### The circadian rhythm

The **sleep/wake cycle** is a **circadian rhythm**, a biological cycle of about **24 hours**. Light is its main timekeeper: morning light helps reset the clock each day, and darkness lets **melatonin** rise in the evening, bringing sleepiness. Body temperature and alertness also rise and fall on this daily cycle.

| Disruption | What happens | Effect on behavior |
|---|---|---|
| **Jet lag** | Travel across time zones leaves the body clock set to the old zone | Grogginess at the new daytime, alertness at the new night, slower thinking for several days |
| **Shift work** | Working nights forces sleep at times the clock signals "awake" | Shorter, poorer sleep; more errors and accidents, especially in the early-morning hours |

> 🔑 **AP Connection:** Teenagers' circadian rhythms shift later during puberty, so they naturally feel sleepy later at night. This is a common setting for EBQ prompts about schedules and performance.`
    },
    {
      id: 'biological-bases-brain-p6-s2-stages',
      type: 'text' as const,
      content: `## The stages of sleep

Researchers identify sleep stages by their **EEG patterns**. A night has two kinds of sleep: **NREM** (non-rapid eye movement), in Stages 1–3, and **REM** (rapid eye movement).

| Stage | EEG pattern | What the sleeper experiences |
|---|---|---|
| **NREM-1** | Slower than waking; irregular | Light sleep lasting a few minutes; easily awakened. **Hypnagogic sensations** occur as one drifts into Stage 1: a feeling of falling or floating, a sudden jerk, or hearing your name |
| **NREM-2** | Slower still, with brief bursts of activity | Deeper relaxation; harder to wake; makes up the largest share of a night's sleep |
| **NREM-3** | Slow, large waves | **Deep sleep**: very hard to wake; body restoration; sleepwalking happens here |
| **REM** | Fast and irregular, **similar to wakefulness** | Eyes dart under the lids; vivid **dreams**; heart rate and breathing become irregular; major muscles are relaxed to the point of near paralysis |

### Why REM is "paradoxical"

During REM sleep, the EEG looks almost like an awake brain, yet the body's muscles are at their **most relaxed**. Brain busy, body still: that contradiction is why REM is called **paradoxical sleep**.

### The nightly cycle

A full cycle (Stage 1 → 2 → 3 → 2 → REM) takes about **90 minutes**, and most adults pass through four to six cycles a night. The cycles change as the night goes on:

| Time of night | NREM-3 (deep sleep) | REM |
|---|---|---|
| First cycle (about 11 p.m.–12:30 a.m.) | Long stretch | Short, about 10 minutes |
| Middle cycles | Shorter | Longer |
| Last cycle (about 5:30–7 a.m.) | Little or none | Longest, can last 30+ minutes |

So **NREM-3 decreases** across the night while **REM increases**. Cutting sleep short in the morning mostly cuts **REM**.

### REM rebound

When people are deprived of REM sleep (for example, woken whenever REM begins), they enter REM **sooner and spend more time in it** on the next undisturbed night. This **REM rebound** suggests REM serves a need the brain works to make up.`
    },
    {
      id: 'biological-bases-brain-p6-s3-check',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Sleep Stages** 🎯`,
      exercise: {
        questions: [
          {
            question: 'An EEG shows a sleeper\'s brain producing slow, large waves. She is very hard to wake, and when she is woken, she is groggy and confused. She is most likely in:',
            options: [
              'NREM-1',
              'NREM-2',
              'NREM-3',
              'REM'
            ],
            correctAnswer: 2,
            explanation: 'Slow, large waves and difficulty waking mark NREM-3, deep sleep. REM shows fast, wake-like waves, and Stages 1 and 2 are lighter.'
          },
          {
            question: 'A sleep lab wakes a volunteer each time his eyes begin darting under his eyelids. On the next undisturbed night, the lab will most likely observe:',
            options: [
              'Reduced REM sleep compared with his usual night',
              'Extra NREM-1 sleep in place of REM',
              'Extra REM sleep compared with his usual night',
              'No REM sleep at all for several nights'
            ],
            correctAnswer: 2,
            explanation: 'Darting eyes signal REM, so the lab is depriving him of REM sleep. REM rebound then increases REM time on the next night.'
          },
          {
            question: 'Compared with the first sleep cycle of the night, the last cycle before waking usually contains:',
            options: [
              'More REM and less deep sleep',
              'More deep sleep and less REM',
              'Equal amounts of REM and deep sleep',
              'Only NREM-1 and NREM-2 sleep'
            ],
            correctAnswer: 0,
            explanation: 'Deep NREM-3 sleep dominates early cycles and shrinks across the night, while REM periods grow longer toward morning.'
          }
        ]
      }
    },
    {
      id: 'biological-bases-brain-p6-s4-why',
      type: 'text' as const,
      content: `## Why do we sleep?

The CED highlights two current theories:

| Theory | Claim | Supporting evidence |
|---|---|---|
| **Restoration** | Sleep restores resources the body and brain use up during the day | Deep sleep increases after hard physical effort; the sleeping brain clears waste products that build up while awake |
| **Memory consolidation** | Sleep organizes and **consolidates** the day's memories into lasting storage | People who sleep after learning recall more than people who stay awake for the same number of hours |

The two are not rivals; sleep likely does both. Losing sleep impairs attention, reaction time, mood, judgment and immune function, and drowsy driving causes many crashes.

## Why do we dream?

| Theory | Claim | Example |
|---|---|---|
| **Activation-synthesis** | During REM, the brain stem sends out **random neural activity**; the cortex **synthesizes** it into a story | A dream that jumps from a beach to a math class to flying, with no clear logic |
| **Consolidation theory** | Dreams reflect the brain **processing and storing** memories from the day | Dreaming about a new skill or the day's events after an intense day of learning |

## The five sleep disorders

The CED limits AP Psychology to these five:

| Disorder | Key features | Sleep stage involved |
|---|---|---|
| **Insomnia** | Persistent trouble **falling or staying asleep** | Any |
| **Narcolepsy** | Sudden, **uncontrollable attacks of sleep** during the day, sometimes going straight into REM | REM intrudes into waking |
| **REM sleep behavior disorder** | The normal muscle paralysis of REM **fails**, so people **act out dreams** (kicking, punching) | REM |
| **Sleep apnea** | Breathing **repeatedly stops** during sleep; the person briefly wakes to breathe, often with loud snoring, and is exhausted the next day | Any (repeated awakenings) |
| **Somnambulism** (sleepwalking) | Walking or doing routine actions while still asleep; little memory of it in the morning | NREM-3 |

Treating sleep disorders and keeping a **regular sleep schedule** improve daytime performance and overall well-being.`
    },
    {
      id: 'biological-bases-brain-p6-s5-disorders',
      type: 'dropdown-select' as const,
      content: `**Identify the Sleep Disorder** 🔎`,
      exercise: {
        dropdowns: [
          {
            label: 'Gary falls asleep without warning in the middle of meetings and while eating lunch, even after a full night of sleep: _____',
            options: ['insomnia', 'narcolepsy', 'sleep apnea', 'somnambulism']
          },
          {
            label: 'Rosa\'s partner hears loud snoring broken by long pauses in her breathing, and Rosa feels exhausted every morning: _____',
            options: ['narcolepsy', 'insomnia', 'sleep apnea', 'REM sleep behavior disorder']
          },
          {
            label: 'During a vivid dream about a fight, a man punches and kicks in bed and injures his wife: _____',
            options: ['somnambulism', 'insomnia', 'narcolepsy', 'REM sleep behavior disorder']
          }
        ],
        correctAnswers: ['narcolepsy', 'sleep apnea', 'REM sleep behavior disorder'],
        hint1: 'Sudden sleep attacks during the day point to one disorder; trouble getting to sleep points to a different one.',
        hint2: 'Pauses in breathing during sleep name the disorder directly.',
        hint3: 'Acting out a dream means the muscle paralysis of REM has failed.',
        explanation: 'Daytime sleep attacks are narcolepsy, breathing pauses with snoring are sleep apnea, and acting out dreams is REM sleep behavior disorder.'
      }
    },
    {
      id: 'biological-bases-brain-p6-s6-calc',
      type: 'input-boxes' as const,
      content: `**Sleep by the Numbers** ✍️`,
      exercise: {
        questions: [
          {
            question: 'If one sleep cycle lasts about 90 minutes, how many complete cycles fit into 7.5 hours of sleep?',
            answer: '5',
            acceptableAnswers: ['five'],
            explanation: '7.5 hours is 450 minutes, and 450 ÷ 90 = 5 complete cycles.'
          },
          {
            question: 'The roughly 24-hour biological cycle that governs sleep and wakefulness is called the ___ rhythm.',
            answer: 'circadian',
            acceptableAnswers: [],
            explanation: 'Circadian comes from Latin for "about a day." Jet lag and shift work disrupt it.'
          }
        ]
      }
    },
    {
      id: 'biological-bases-brain-p6-s7-applied',
      type: 'multiple-choice' as const,
      content: `**Applied Scenarios — Sleep and Dreams** 🔬`,
      exercise: {
        questions: [
          {
            question: 'A researcher argues that dreams are the cortex\'s attempt to build a story out of random neural signals sent up from the brain stem during REM. This view is the:',
            options: [
              'Consolidation theory',
              'Restoration theory',
              'Circadian theory',
              'Activation-synthesis theory'
            ],
            correctAnswer: 3,
            explanation: 'Activation-synthesis holds that the brain synthesizes random REM activity into a dream story. Consolidation theory ties dreams to processing memories, and restoration explains why we sleep, not dream content.'
          },
          {
            question: 'Students who sleep after studying recall more the next day than students who stay awake for the same number of hours. This result best supports which explanation of sleep?',
            options: [
              'Sleep restores energy to tired muscles',
              'Sleep helps consolidate new memories',
              'Sleep keeps animals safe from nighttime predators',
              'Sleep resets the circadian clock each night'
            ],
            correctAnswer: 1,
            explanation: 'Better recall after sleep than after equal time awake supports memory consolidation. Restoration concerns depleted resources, not what was learned.'
          },
          {
            question: 'Flying from New York to Paris, Ana lands at 7 a.m. local time, but her body feels as if it is 1 a.m. Her grogginess is best explained by:',
            options: [
              'A body clock still set to the time zone she left',
              'REM rebound from missing dreams on the flight',
              'Narcolepsy set off by cabin pressure',
              'Insomnia caused by an uncomfortable seat'
            ],
            correctAnswer: 0,
            explanation: 'Jet lag occurs when the circadian rhythm stays set to the old time zone. Narcolepsy and insomnia are ongoing disorders, not effects of one flight.'
          }
        ]
      }
    }
  ]
}
