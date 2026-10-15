export const psychObservationalPart5Data = {
  topicSlug: 'observational-learning-cognition',
  sections: [
    {
      id: 'obser5-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Observational & Cognitive Learning

**Part 5 of 7 — Biological Constraints on Learning**

Behaviorists assumed that ANY stimulus could be associated with ANY response equally well. Biology proved them wrong. Evolution has prepared organisms to learn some associations easily and resist others — a principle that limits what classical and operant conditioning can achieve.

| Concept | Researcher | Definition | Challenge to Behaviorism |
|---------|-----------|------------|-------------------------|
| **Biological preparedness** | Seligman | Some associations are learned more easily due to evolutionary advantage | Organisms are NOT blank slates |
| **Taste aversion** | Garcia & Koelling (1966) | One-trial learning of food-illness associations, even with long delays | Violates contiguity principle |
| **Instinctive drift** | Breland & Breland (1961) | Trained behaviors revert to innate, species-typical patterns | Reinforcement can't override biology |

### 🗣️ Real-World Example

If you eat shrimp and get violently ill 6 hours later, you will likely develop a strong aversion to shrimp — even though the illness came HOURS after eating. This one-trial, long-delay learning violates two "laws" of classical conditioning: (1) learning usually requires multiple pairings, and (2) the CS and UCS must be close in time (contiguity). Garcia & Koelling showed this is NOT a failure of conditioning — it's an evolutionary adaptation. Animals that quickly learned to avoid toxic foods survived.

> **Why This Matters for the AP Exam:** Garcia's taste aversion research is one of the most commonly tested studies. You MUST know that it challenged the behaviorist assumption that any CS can be paired with any UCS equally well. Biology sets boundaries on learning.
      `
    },
    {
      id: 'obser5-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Garcia and Koelling found that rats easily learned to associate a flavored water (taste) with nausea, but NOT with electric shock. Conversely, rats easily associated a light-sound combo with shock, but NOT with nausea. This demonstrates:',
            options: [
              'Stimulus generalization — the rats generalized from one stimulus to another',
              'Biological preparedness — organisms are evolved to link certain stimuli more readily',
              'Classical extinction — the taste-shock association weakened over repeated trials',
              'Operant conditioning — the rats were reinforced for avoiding flavored water'
            ],
            correctAnswer: 1,
            explanation: 'This is Garcia and Koelling\'s famous "bright-noisy-tasty water" study. Rats are biologically prepared to associate TASTE with ILLNESS (because poisonous food makes you sick) and EXTERNAL cues (sight/sound) with EXTERNAL pain (shocks). These evolutionarily relevant pairings are learned easily; mismatched pairings are not.'
          },
          {
            question: 'The Brelands trained a raccoon to deposit coins in a piggy bank. Instead, the raccoon rubbed the coins together and refused to drop them in. This is an example of:',
            options: [
              'Extinction — the coin-dropping response faded because reinforcement stopped',
              'Latent learning — the raccoon had learned the task but lacked motivation to show it',
              'Instinctive drift — the raccoon reverted to innate food-washing behavior',
              'Insight learning — the raccoon suddenly found a better way to earn its reward'
            ],
            correctAnswer: 2,
            explanation: 'The Brelands (Keller and Marian) coined the term "instinctive drift" after observing that trained animals reverted to species-typical behaviors. Raccoons naturally "wash" food by rubbing it together — so the raccoon treated the coins like food objects despite operant conditioning. Biology overrode reinforcement.'
          }
        ]
      }
    },
    {
      id: 'obser5-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Deep Dive: Biology's Limits on Learning

**Garcia & Koelling's Taste Aversion Study (1966)**

| Combination | Result | Why? |
|-------------|--------|------|
| Taste + nausea | Strong aversion learned (one trial) | Evolutionarily, bad food → illness |
| Taste + shock | Weak/no aversion | Food doesn't usually cause external pain |
| Light-sound + shock | Strong avoidance | External cues → external danger |
| Light-sound + nausea | Weak/no avoidance | Lights don't usually cause illness |

**Why this matters:** Behaviorists (like Pavlov) assumed the CS-UCS pairing was arbitrary — any stimulus could become a CS for any response. Garcia proved this wrong. The NATURE of the CS and UCS matters — organisms are biologically prepared for certain pairings.

**The Brelands' Instinctive Drift**

Keller and Marian Breland were Skinner's own students. They trained animals for commercials and shows but discovered that over time:
- **Pigs** trained to deposit coins would root them with their snouts (foraging behavior)
- **Raccoons** rubbed coins together instead of dropping them (food-washing behavior)
- **Chickens** scratched at the ground near coins (foraging behavior)

In each case, the animals were food-reinforced, and their innate food-related behaviors REPLACED the trained behaviors. This directly challenged Skinner's claim that reinforcement could shape any behavior.

### Biological Preparedness in Everyday Life

Biological preparedness means animals, humans included, are predisposed to learn certain stimulus-response pairings **more quickly than others** (CED 3.7.A.4).

| Easily learned pairing | Why it is easy | Harder pairing for comparison |
|------------------------|----------------|-------------------------------|
| A food's taste + later nausea | Spoiled food really does cause illness | A sound + later nausea |
| The sight of a snake + a frightening event | Snakes were a real threat to our ancestors | The sight of a flower + a frightening event |
| A sudden loud noise + fear | Loud noises often signal danger | A soft color change + fear |

**Why we fear snakes but not cars:** phobias of snakes, spiders, and heights are common, while phobias of cars and electrical outlets (objectively more dangerous today) are rare. Ancestors who learned snake fear quickly were more likely to survive.

### Analyzing the Garcia & Koelling Study as a Researcher

| Research element | In this study |
|------------------|---------------|
| **Method** | Experiment: researchers manipulated the cue and the consequence |
| **Independent variables** | Type of cue (taste vs. light-and-sound) and type of consequence (nausea vs. shock) |
| **Dependent variable** | How much of the water the rats drank on later test trials |
| **Key finding** | Rats avoided the water only when the cue "fit" the consequence (taste with nausea, light-sound with shock) |
| **Ethics** | Research that makes animals ill or shocks them requires institutional review of the animal procedures before it begins |
      `
    },
    {
      id: 'obser5-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'Who demonstrated taste aversion learning in rats?', answer: 'Garcia' },
          { label: 'When trained behaviors revert to innate species-typical patterns, it\'s called instinctive ___', answer: 'drift' },
          { label: 'Who coined the term "instinctive drift" after training animals for shows?', answer: 'Breland and Breland' }
        ]
      }
    },
    {
      id: 'obser5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Biological Constraint** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'After one bad experience with sushi, a person avoids it for years', options: ['Instinctive drift', 'Taste aversion', 'Learned helplessness', 'Insight learning'] },
          { label: 'A pig trained to place coins in a bank roots them instead', options: ['Instinctive drift', 'Taste aversion', 'Extinction', 'Observational learning'] },
          { label: 'Humans develop snake phobias much more easily than car phobias', options: ['Instinctive drift', 'Latent learning', 'Biological preparedness', 'Spontaneous recovery'] }
        ],
        correctAnswers: ['Taste aversion', 'Instinctive drift', 'Biological preparedness'],
        hint1: 'One bad food experience → lasting food aversion = taste aversion (Garcia).',
        hint2: 'Trained behavior reverting to innate food behavior = instinctive drift (Brelands).',
        hint3: 'Evolution primes us to fear ancient threats more than modern ones = biological preparedness.',
        explanation: 'One-trial food aversion = Garcia\'s taste aversion. Pig rooting coins = Breland\'s instinctive drift. Snake phobias easier than car phobias = biological preparedness (evolutionary advantage).'
      }
    },
    {
      id: 'obser5-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Exam Strategy: Biological Constraint Traps

| Common Mistake | Why It's Wrong | Correct Understanding |
|----------------|---------------|----------------------|
| Taste aversion = regular classical conditioning | It violates contiguity AND requires only one trial | It's biologically SPECIAL — not standard conditioning |
| Instinctive drift = extinction | Extinction = response disappears; drift = replaced by innate behavior | The trained response is REPLACED, not just weakened |
| Biological preparedness = some pairings cannot be conditioned | Other pairings CAN be learned; they just take longer | Prepared pairings are learned more QUICKLY, not exclusively |
| Taste aversion only works with taste | The principle = biologically relevant pairings are learned easily | It's taste-nausea specifically (not taste-pain) |

**Memory Trick:** **G**arcia = **G**uts (taste-nausea). **B**relands = **B**iology wins (innate behavior overrides training).

### How Biological Constraints Connect to Other Topics

| Other Topic | Connection |
|-------------|-----------|
| Classical conditioning | Taste aversion IS classical conditioning — just biologically special |
| Operant conditioning | Instinctive drift shows limits of reinforcement |
| Phobias | Biological preparedness explains why some phobias are more common |
| Evolution | All biological constraints reflect natural selection |

> **AP Tip:** When a question asks about limitations of learning theory or challenges to behaviorism, biological constraints (taste aversion, instinctive drift, preparedness) are prime answers — alongside cognitive factors (latent learning, insight, cognitive maps).
      `
    },
    {
      id: 'obser5-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A cancer patient who receives chemotherapy develops nausea. Despite knowing that the nausea is caused by the drugs (not the hospital food), the patient develops a strong aversion to the food eaten before treatment. This illustrates:',
            options: [
              'Cognitive distortion — the patient is too distressed to reason about the true cause',
              'Taste aversion — a biologically prepared link forms even when the cause is understood',
              'Operant conditioning — the aversion was learned through positive punishment for eating',
              'Observational learning — the patient saw other patients avoiding the hospital food'
            ],
            correctAnswer: 1,
            explanation: 'Taste aversion is SO biologically prepared that it occurs even when the person KNOWS the food isn\'t the cause. This is a well-documented phenomenon in cancer treatment — patients develop aversions to foods eaten before chemotherapy despite understanding that the drugs cause the nausea. The biological mechanism overrides rational thought.'
          },
          {
            question: 'In Garcia and Koelling\'s study, rats drank water that was either flavored or paired with lights and clicks, and were then either made nauseous or given a mild shock. What was the dependent variable?',
            options: [
              'Whether the consequence that followed drinking was nausea or a mild shock',
              'How much of the water the rats consumed on the later test trials',
              'Whether the water was flavored or paired with lights and clicking sounds',
              'How many rats were placed in each of the cue and consequence groups'
            ],
            correctAnswer: 1,
            explanation: 'The researchers measured how much the rats drank afterward, so water consumption is the dependent variable. The type of cue and the type of consequence were both manipulated, which makes them independent variables, and the number of rats per group describes the sample, not an outcome.'
          }
        ]
      }
    }
  ]
}
