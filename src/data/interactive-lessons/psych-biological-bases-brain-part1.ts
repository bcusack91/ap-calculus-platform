export const psychBrainPart1Data = {
  topicSlug: 'biological-bases-brain',
  sections: [
    {
      id: 'biological-bases-brain-p1-s1-intro',
      type: 'text' as const,
      content: `# 🧠 Biological Bases and Brain

**Part 1 of 7 — Neurons and Neural Firing**

---

| Section |
|---------|
| The two kinds of cells in the nervous system |
| Parts of a neuron |
| Sensory neurons, motor neurons, interneurons and the reflex arc |
| How a neuron fires: resting potential to refractory period |
| When firing goes wrong: multiple sclerosis and myasthenia gravis |

> 🔑 **Key Concept:** Every thought, feeling and movement starts as electrical and chemical signaling between cells. A neuron either fires completely or not at all, so the brain codes "how strong" by **how often** neurons fire and **how many** fire, not by making each signal bigger.

### Two kinds of cells

The CED names two common cell types in the nervous system:

| Cell type | What it does | Why it matters for behavior |
|---|---|---|
| **Neuron** | Transmits information as electrical and chemical signals | The basic unit of every behavior and mental process |
| **Glial cell** (glia) | Provides structure, insulation, communication support and waste transport for neurons | Glia make the insulating myelin around many axons and keep the neural environment clean |

Glial cells far outnumber neurons. They are not just "glue": a nervous system without healthy glia cannot send signals quickly or reliably.

### Parts of a neuron

Follow a message in one direction, from the receiving end to the sending end:

| Part | Function | Analogy |
|---|---|---|
| **Dendrites** | Branching fibers that **receive** messages from other neurons | Antennas |
| **Cell body (soma)** | Contains the nucleus; **combines** incoming signals and keeps the cell alive | Control desk |
| **Axon** | Long fiber that **carries** the electrical impulse away from the cell body | Cable |
| **Myelin sheath** | Fatty insulation (made by glia) wrapped around many axons; **speeds** the impulse | Insulation on a wire |
| **Terminal buttons** (axon terminals) | Knobs at the end of the axon that **release neurotransmitters** | Mailboxes |
| **Synapse** | The junction between the sending neuron and the receiving cell, including a tiny gap | The space between two hands that almost touch |

Memory aid: **D**endrites → **C**ell body → **A**xon → **T**erminals ("Dogs Can Always Tell").`
    },
    {
      id: 'biological-bases-brain-p1-s2-check',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Parts of the Neuron** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A toxin damages only the parts of a neuron that receive chemical messages from neighboring neurons. Which structure is most directly affected?',
            options: [
              'The axon',
              'The dendrites',
              'The myelin sheath',
              'The terminal buttons'
            ],
            correctAnswer: 1,
            explanation: 'Dendrites are the receiving branches of a neuron. The axon carries the impulse away, myelin insulates it, and the terminal buttons release neurotransmitters to the next cell.'
          },
          {
            question: 'Researchers find that a patient\'s axons fire normally, but their signals travel unusually slowly over long distances. Damage to which of the following is the most likely cause?',
            options: [
              'Interneurons inside the spinal cord',
              'Sensory receptors in the skin',
              'Motor neurons that reach the muscles',
              'Glial cells that form insulation'
            ],
            correctAnswer: 3,
            explanation: 'Glial cells produce the myelin that insulates axons and speeds transmission, so losing it slows signals. The other cells carry or start signals but do not set how fast an axon conducts.'
          }
        ]
      }
    },
    {
      id: 'biological-bases-brain-p1-s3-reflex',
      type: 'text' as const,
      content: `## Three types of neurons and the reflex arc

| Neuron type | Carries information… | Example |
|---|---|---|
| **Sensory neurons** | **from** the body's receptors **to** the central nervous system | Heat receptors in a fingertip signal the spinal cord |
| **Interneurons** | **within** the brain and spinal cord, linking sensory input to motor output | Spinal cord cells that pass the "hot!" signal along |
| **Motor neurons** | **from** the central nervous system **to** muscles and glands | Signals that contract the arm muscles |

### Worked example: touching a hot pan

1. **Receptors** in the skin detect intense heat.
2. A **sensory neuron** carries the signal into the **spinal cord**.
3. An **interneuron** in the spinal cord passes the message straight to a motor neuron.
4. A **motor neuron** signals the arm muscles, and the hand jerks back.
5. Meanwhile, other neurons carry the message **up to the brain**, and only then do you **feel** pain.

That loop (sensory neuron → interneuron → motor neuron) is the **reflex arc**. Because the spinal cord handles the response before the brain processes it, the hand moves **before** you are aware of the pain. The reflex arc shows the **central nervous system** (spinal cord) and the **peripheral nervous system** (the sensory and motor nerves) working together.

> 🔑 **AP Connection:** If a question asks why someone reacts "before they realize what happened," think reflex arc. If it asks what lets the person **feel** the pain, the answer involves the brain.`
    },
    {
      id: 'biological-bases-brain-p1-s4-firing',
      type: 'text' as const,
      content: `## How a neuron fires

A neuron's message travels down its axon as an **action potential**, a brief electrical impulse. The CED terms you need, in order:

| Step | Term | What happens |
|---|---|---|
| 1 | **Resting potential** | The neuron is at rest. The inside of the axon is negatively charged relative to the outside (about −70 millivolts). The neuron is ready to fire. |
| 2 | Incoming signals | Excitatory messages from other neurons push the charge up; inhibitory messages push it down. The cell body adds them together. |
| 3 | **Threshold** | If the combined excitatory input raises the charge to a trigger level (about −55 millivolts), the neuron fires. Below threshold, nothing is sent. |
| 4 | **Depolarization** | Positively charged particles rush into the axon, so the inside briefly becomes positive. This change moves down the axon segment by segment like a row of falling dominoes. |
| 5 | **Refractory period** | Right after firing, the neuron resets and **cannot fire again** for a brief moment. |
| 6 | Back to resting potential | The neuron is ready for the next signal. |

### The all-or-none principle

A neuron **either fires at full strength or does not fire at all**. Pushing harder past threshold does not make a bigger action potential, the same way squeezing a trigger harder does not make a bullet go faster.

### Worked example: how the brain codes intensity

| Stimulus | Size of each action potential | Firing rate | Neurons recruited |
|---|---|---|---|
| Light tap on the arm | Same | Low (few impulses per second) | Few |
| Firm press on the arm | Same | High (many impulses per second) | Many |

Because every action potential is the same size, the nervous system signals intensity with **frequency** (how often a neuron fires) and **number** (how many neurons fire).`
    },
    {
      id: 'biological-bases-brain-p1-s5-recall',
      type: 'input-boxes' as const,
      content: `**Recall Practice — Neural Firing** ✍️`,
      exercise: {
        questions: [
          {
            question: 'The brief moment after firing when a neuron cannot fire again is the ___ period.',
            answer: 'refractory',
            acceptableAnswers: ['refractory period'],
            explanation: 'During the refractory period the neuron resets to its resting potential before it can fire again.'
          },
          {
            question: 'A neuron rests at −70 mV and its threshold is −55 mV. How many millivolts of depolarization are needed to make it fire?',
            answer: '15',
            acceptableAnswers: ['15 mV', '15mv', '+15'],
            explanation: 'The charge must rise from −70 to −55 mV, a change of 15 mV. Anything less stays below threshold and no action potential occurs.'
          },
          {
            question: 'The principle that a neuron fires at full strength or not at all is the all-or-___ principle.',
            answer: 'none',
            acceptableAnswers: ['nothing'],
            explanation: 'The all-or-none (all-or-nothing) principle means action potentials do not come in sizes. Intensity is coded by firing rate and the number of neurons firing.'
          }
        ]
      }
    },
    {
      id: 'biological-bases-brain-p1-s6-disorders',
      type: 'text' as const,
      content: `## When neural transmission is disrupted

The CED names two disorders that show what happens when this orderly process breaks down.

| Disorder | What goes wrong | Typical effects |
|---|---|---|
| **Multiple sclerosis (MS)** | The immune system attacks the **myelin** around axons in the brain and spinal cord | Signals slow or misfire: numbness, tingling, blurred vision, weakness, problems with balance and coordination |
| **Myasthenia gravis** | The immune system blocks or damages **acetylcholine receptors** where motor neurons meet muscle fibers | Muscle weakness that worsens with use: drooping eyelids, trouble chewing, swallowing or lifting the arms |

How to tell them apart: MS is a problem with the **cable** (insulation on the axon), while myasthenia gravis is a problem at the **connection** between nerve and muscle (the receiving side of the synapse).

### Misconceptions to drop

| Misconception | Reality |
|---|---|
| A stronger stimulus makes a bigger action potential | All-or-none: same size every time; intensity = firing rate and number of neurons |
| Neurons physically touch each other | A tiny gap at the synapse separates them; the message crosses chemically |
| Glial cells are just packing material | Glia insulate axons, support communication and remove waste |
| Every reflex is decided by the brain | Many reflexes are handled by the spinal cord before the brain is aware |

> 🔑 **AP Connection:** The AAQ asks you to state an **operational definition**. In a neuroscience study, "nerve conduction speed" might be operationalized as meters per second measured between two electrodes, and "muscle fatigue" as the number of grip squeezes before strength falls by half.`
    },
    {
      id: 'biological-bases-brain-p1-s7-applied',
      type: 'multiple-choice' as const,
      content: `**Applied Scenarios — Firing and Disorders** 🔬`,
      exercise: {
        questions: [
          {
            question: 'When Maya touches a hot pan, her hand jerks away before she feels any pain. Which pathway best explains the speed of the withdrawal?',
            options: [
              'A spinal reflex arc that bypasses the brain',
              'A cortical decision made by the frontal lobe',
              'A hormonal signal released into the bloodstream',
              'A motor command sent first from the cerebellum'
            ],
            correctAnswer: 0,
            explanation: 'Sensory neurons, spinal interneurons and motor neurons complete the withdrawal in the spinal cord before the message reaches the brain. Hormones are too slow, and cortical or cerebellar processing comes later.'
          },
          {
            question: 'A researcher stimulates a neuron with a current just strong enough to pass threshold, then with a current twice as strong. Compared with the first action potential, the second one will be:',
            options: [
              'Twice as large as the action potential from the first current',
              'Smaller, since the neuron has already used up its charge',
              'The same size as the action potential from the first current',
              'Absent, since the stronger current outlasts the refractory period'
            ],
            correctAnswer: 2,
            explanation: 'Under the all-or-none principle, every action potential that passes threshold is the same size. A stronger stimulus raises the firing rate and recruits more neurons rather than enlarging each impulse.'
          },
          {
            question: 'A 30-year-old reports episodes of blurred vision and tingling limbs. Scans show damage to the insulating layer around nerve fibers in her brain and spinal cord. Which change in neural communication best explains her symptoms?',
            options: [
              'Neurotransmitter is cleared too quickly from the synapse',
              'Too few acetylcholine receptors respond at the muscles',
              'Signals travel more slowly and less reliably along axons',
              'Dendrites stop accepting input from sensory receptors'
            ],
            correctAnswer: 2,
            explanation: 'Damaged myelin is the hallmark of multiple sclerosis, which slows and disrupts conduction along axons. Blocked acetylcholine receptors describe myasthenia gravis, a problem at the nerve–muscle synapse.'
          },
          {
            question: 'In a patient\'s immune system, antibodies block the acetylcholine receptors at the junctions between motor neurons and the tissues they control. Which symptom is most expected?',
            options: [
              'Muscle weakness that grows worse with repeated use',
              'Hallucinations and disorganized speech',
              'Loss of the ability to form new memories',
              'Uncontrollable episodes of daytime sleep'
            ],
            correctAnswer: 0,
            explanation: 'Blocked acetylcholine receptors at the neuromuscular junction cause myasthenia gravis, whose key sign is muscle weakness that worsens with use. The other symptoms point to psychosis, memory damage and narcolepsy.'
          }
        ]
      }
    }
  ]
}
