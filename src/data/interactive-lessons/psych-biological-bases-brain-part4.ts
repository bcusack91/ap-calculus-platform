export const psychBrainPart4Data = {
  topicSlug: 'biological-bases-brain',
  sections: [
    {
      id: 'biological-bases-brain-p4-s1-intro',
      type: 'text' as const,
      content: `# 🧠 Biological Bases and Brain

**Part 4 of 7 — Brain Structures and Their Functions**

---

| Section |
|---------|
| The brain from the bottom up |
| Brain stem, reticular activating system, reward center and cerebellum |
| The limbic system |
| The four lobes of the cerebral cortex |
| Case files: reasoning from damage to function |

> 🔑 **Key Concept:** Brain structures are roughly layered from **basic survival** at the bottom (breathing, heartbeat) to **complex thought** at the top and front (planning, judgment). On the exam you will usually work backward: from a symptom or behavior to the structure most likely involved.

### Lower-level structures

| Structure | Location | Main functions (CED) | If damaged |
|---|---|---|---|
| **Brain stem** (including the **medulla**) | Where the spinal cord enters the skull | Basic life functions: **breathing** and **heart rate** | Can be fatal; the medulla keeps the heart and lungs working without conscious effort |
| **Reticular activating system (RAS)** | A network running through the brain stem | **Alertness** and arousal; filters incoming stimuli; helps control eye movement | Damage can cause coma; stimulating it wakes a sleeping animal |
| **Reward center** | Dopamine-rich pathways deep in the brain | **Pleasure, motivation**, some kinds of learning and emotion | Drugs that flood it with dopamine are strongly reinforcing |
| **Cerebellum** ("little brain") | Back of the brain, below the cortex | **Coordination** of movement, **balance**, and **procedural** learning (skills like riding a bike) | Clumsy, jerky movement and poor balance, though thinking stays intact |

Researchers James Olds and Peter Milner found in the 1950s that rats would press a lever again and again to receive mild electrical stimulation in certain deep brain areas, evidence for a reward system that motivates behavior.

> 🔑 **AP Connection:** Alcohol impairs the cerebellum early, which is why roadside sobriety tests check **balance** and **coordinated movement**.`
    },
    {
      id: 'biological-bases-brain-p4-s2-check',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Lower-Level Structures** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A gymnast with damage to one brain structure can still plan her routine in detail but now wobbles and mistimes her movements on the beam. The damaged structure is most likely the:',
            options: [
              'Cerebellum',
              'Amygdala',
              'Medulla',
              'Hippocampus'
            ],
            correctAnswer: 0,
            explanation: 'The cerebellum coordinates movement and balance, so damage leaves planning intact but movement clumsy. The medulla controls breathing and heart rate, and the amygdala and hippocampus serve emotion and memory.'
          },
          {
            question: 'A patient lies in a coma after a stroke. Doctors find damage to a network in the brain stem that normally keeps the brain alert. Which structure was damaged?',
            options: [
              'The somatosensory cortex',
              'The corpus callosum',
              'The motor cortex',
              'The reticular activating system'
            ],
            correctAnswer: 3,
            explanation: 'The reticular activating system runs through the brain stem and maintains alertness and arousal, so damage can cause coma. The cortical areas listed handle touch and movement, and the corpus callosum connects the hemispheres.'
          }
        ]
      }
    },
    {
      id: 'biological-bases-brain-p4-s3-limbic',
      type: 'text' as const,
      content: `## The limbic system

The CED groups five structures under the **limbic system**. They sit around the top of the brain stem, beneath the cortex, and are tied to emotion, memory, drives and hormones.

| Structure | Main functions | Example |
|---|---|---|
| **Thalamus** | **Sensory relay station**: routes incoming information from every sense **except smell** to the right area of the cortex | Visual signals pass through the thalamus on the way to the occipital lobe |
| **Hypothalamus** | Regulates **hunger, thirst, body temperature** and sexual behavior; controls the pituitary gland | Damage to some hypothalamic areas in rats causes overeating or refusal to eat |
| **Pituitary gland** | The endocrine "master gland"; releases hormones such as oxytocin | Connects brain activity to the hormone system |
| **Hippocampus** | Forms **new explicit memories** (facts and events) | Damage leaves old memories but blocks forming new ones |
| **Amygdala** | **Fear** and aggression; recognizing threat; emotional memories | People with amygdala damage may show little fear of real dangers |

Memory aids:
- **Hippocampus** = "**hippo** on **campus** learning new facts" (memory).
- **Amygdala** = "**A**fraid" (fear and threat).
- **Hypothalamus** = the body's **thermostat** for drives: it keeps hunger, thirst and temperature in balance ("hypo" = below the thalamus).

## The cerebral cortex and its four lobes

The **cerebral cortex** is the thin, wrinkled outer layer of the two cerebral hemispheres. Its folds pack more surface area, and so more neurons, into the skull.

| Lobe | Location | Main functions (CED) |
|---|---|---|
| **Frontal** | Just behind the forehead | Higher-order thinking, **executive functioning** (planning, judgment, impulse control), especially in the **prefrontal cortex**; linguistic processing; the **motor cortex** at its rear controls voluntary skeletal movement |
| **Parietal** | Top and back ("back crown") of the head | The **somatosensory cortex** at its front processes **touch**; association areas process and organize information |
| **Occipital** | Rear of the brain | **Visual** information processing |
| **Temporal** | Sides of the brain, above the ears | **Auditory** and **linguistic** processing |

**Association areas** are cortex regions not devoted to a single sense or movement. They integrate information for thinking, remembering and speaking, and they make up much of the frontal, parietal and temporal lobes.

### The motor and somatosensory strips

The **motor cortex** (rear of the frontal lobe) and the **somatosensory cortex** (front of the parietal lobe) sit side by side. In the 1930s–1950s, neurosurgeon Wilder Penfield stimulated these strips in awake patients during surgery. Stimulating the motor strip made body parts **move**; stimulating the somatosensory strip made patients report being **touched**. Body parts that need fine control or high sensitivity, such as the **hands, lips and tongue**, have the largest areas of cortex.`
    },
    {
      id: 'biological-bases-brain-p4-s4-match',
      type: 'dropdown-select' as const,
      content: `**Match the Case to the Structure** 🔎`,
      exercise: {
        dropdowns: [
          {
            label: 'After a stroke, a woman\'s eyes work normally, but she loses part of her visual field. The damage is most likely in the _____ lobe.',
            options: ['parietal', 'occipital', 'temporal', 'frontal']
          },
          {
            label: 'A patient with damage to this structure shows little fear and fails to recognize threat in others\' faces: the _____.',
            options: ['hippocampus', 'thalamus', 'amygdala', 'cerebellum']
          },
          {
            label: 'Damage here can be fatal because it controls breathing and heart rate: the _____.',
            options: ['medulla', 'cerebellum', 'hypothalamus', 'amygdala']
          }
        ],
        correctAnswers: ['occipital', 'amygdala', 'medulla'],
        hint1: 'Vision is processed at the very back of the brain.',
        hint2: 'Fear and threat detection point to the almond-shaped limbic structure.',
        hint3: 'Automatic survival functions sit in the brain stem.',
        explanation: 'Visual field loss with healthy eyes points to the occipital lobe; reduced fear points to the amygdala; breathing and heart rate are controlled by the medulla in the brain stem.'
      }
    },
    {
      id: 'biological-bases-brain-p4-s5-cases',
      type: 'text' as const,
      content: `## Case files: reasoning from damage to function

Much of what we know about brain structures came from **case studies** of people with brain damage. The logic: if a function disappears when an area is damaged, that area is likely **necessary** for the function.

### Case 1: Phineas Gage (1848)
A railroad construction foreman survived an iron rod that passed through his **frontal lobe**. Afterward, according to his doctor's reports, he became impulsive, profane and unable to stick to plans, though his memory and movement were largely intact.
- **Reasoning:** damage to the **prefrontal cortex** disrupted **executive functioning** and impulse control.
- **Limitation:** one person, with an injury no one could control or measure precisely, and later accounts exaggerated parts of his story. A case study suggests hypotheses but cannot establish general cause and effect on its own.

### Case 2: a practice patient with a stroke
A 70-year-old has a stroke on the **left side** of her **motor cortex**. Her **right** arm and leg are weak.
- **Reasoning:** the motor cortex controls skeletal movement, and each hemisphere controls the **opposite** side of the body (more on this in Part 5).

### Case 3: a practice patient with a tumor
A tumor presses on a patient's **somatosensory cortex** in the area that serves the face. He reports numbness and tingling in his cheek and lips, while his ability to move his face is normal.
- **Reasoning:** touch is processed in the somatosensory cortex; movement depends on the neighboring motor cortex, which is unaffected.

### Misconceptions to drop

| Misconception | Reality |
|---|---|
| Each function lives in exactly one spot | Structures work in **networks**; damage to one area can disrupt several abilities |
| We use only 10% of our brains | Imaging shows activity across the whole brain; no large region is unused |
| The thalamus processes every sense | **Smell** bypasses the thalamus on its main route |
| The cerebellum only controls movement | It also supports **procedural learning** and timing |`
    },
    {
      id: 'biological-bases-brain-p4-s6-applied',
      type: 'multiple-choice' as const,
      content: `**Applied Scenarios — Brain Structures** 🔬`,
      exercise: {
        questions: [
          {
            question: 'Electrical stimulation of a strip at the rear of the frontal lobe makes a patient\'s fingers twitch. Stimulation of the strip just behind it makes her report a tingle in the same fingers. The two strips are the:',
            options: [
              'Somatosensory cortex, then the motor cortex',
              'Motor cortex, then the somatosensory cortex',
              'Prefrontal cortex, then the visual cortex',
              'Auditory cortex, then the association areas'
            ],
            correctAnswer: 1,
            explanation: 'The motor cortex at the rear of the frontal lobe produces movement, and the somatosensory cortex at the front of the parietal lobe registers touch. The reversed order swaps their functions.'
          },
          {
            question: 'After a car accident damages her prefrontal cortex, a once-cautious accountant begins making reckless purchases and blurting out rude comments. Which function was most disrupted?',
            options: [
              'Planning and restraining impulses',
              'Coordinating balance and posture',
              'Processing touch from the body',
              'Forming new long-term memories'
            ],
            correctAnswer: 0,
            explanation: 'The prefrontal cortex handles executive functioning, including planning, judgment and impulse control. Balance belongs to the cerebellum, touch to the somatosensory cortex and new memories to the hippocampus.'
          },
          {
            question: 'Which structure acts as a relay station, routing information from every sense except smell to the cortex?',
            options: [
              'Hypothalamus',
              'Hippocampus',
              'Thalamus',
              'Pituitary gland'
            ],
            correctAnswer: 2,
            explanation: 'The thalamus relays sensory input to the right cortical areas, with smell as the exception. The hypothalamus regulates drives, the hippocampus forms memories and the pituitary releases hormones.'
          }
        ]
      }
    }
  ]
}
