export const bioFeedbackPart7Data = {
  topicSlug: 'feedback-mechanisms',
  sections: [
    {
      id: 'bio-feedback-mechanisms-p7-s1-intro',
      type: 'text' as const,
      content: `
## Feedback Mechanisms: Synthesis Review

**Part 7 of 7 — Synthesis Review**

This part pulls the whole topic together. Use the master table as a one-page review sheet: every row is a loop you have traced in Parts 1–6.

### Master table of feedback loops

| Loop | Regulated variable | Sensor / control center | Signal | Effector | Type | How it ends or fails |
|---|---|---|---|---|---|---|
| Thermoregulation (endotherm) | Core temperature | Thermoreceptors / hypothalamus | Nerve impulses | Sweat glands, skin arterioles, skeletal muscle | Negative | Fever moves the set point; heat stroke overwhelms it |
| Thermoregulation (ectotherm) | Body temperature | Thermoreceptors / brain | Nerve impulses | Behavior (basking, seeking shade) | Negative | Limited when no warm or cool refuge exists |
| Blood glucose | Glucose concentration | Pancreatic islet cells | Insulin, glucagon | Liver, muscle, fat cells | Negative | Type 1: signal missing; type 2: effectors unresponsive |
| Water balance | Blood concentration | Osmoreceptors / hypothalamus | ADH | Kidney collecting ducts | Negative | Low ADH → dehydration |
| Plant water loss | Leaf water status | Leaf and root cells | ABA | Guard cells | Negative | ABA-deficient or ABA-insensitive mutants wilt |
| Labor | Cervical stretch | Stretch receptors / hypothalamus | Oxytocin | Uterine muscle | Positive | Ends at birth |
| Lactation | Suckling | Nipple nerve endings / hypothalamus | Oxytocin, prolactin | Milk glands | Positive | Ends when suckling stops |
| Fruit ripening | Ethylene level | Fruit cells | Ethylene | Fruit cells | Positive | Ends when fruit is ripe |
| Clotting | Platelet activation | Platelets at the injury | Platelet chemicals | Platelets, clotting proteins | Positive | Ends when sealed; a missing clotting protein stalls it |
| Population regulation | Population size | (Built into individuals) | Resource shortage, disease | Birth and death rates | Negative | Holds N near K |
| Eutrophication | Dissolved oxygen | (None) | Decomposition | Bacteria, dying animals | Positive | Spirals into a dead zone |
      `
    },
    {
      id: 'bio-feedback-mechanisms-p7-s2-method',
      type: 'text' as const,
      content: `
### The four-question method for any feedback item

1. **What is the regulated variable?** Name the quantity, not the hormone.
2. **Does the response oppose or reinforce the change?** Oppose = negative; reinforce = positive.
3. **What ends the loop?** Negative loops shut themselves off as the variable is corrected. Positive loops need an outside event.
4. **If something is altered, where is the break?** Sensor, signal, receptor/effector, an uncontrolled signal, or a moved set point. Then trace the consequence around the loop.

### Sentence frames that earn FRQ points

- **Describe:** "When [variable] rises above the set point, [effector] [action], which lowers [variable]."
- **Explain negative feedback:** "The response opposes the stimulus, returning [variable] toward its set point and maintaining homeostasis."
- **Explain positive feedback:** "The response increases the stimulus, which triggers a larger response, amplifying the process until [endpoint]."
- **Predict an alteration:** "Because [component] cannot [function], [variable] will remain [high/low], so the organism will [observable outcome]."

### Mixed practice
      `
    },
    {
      id: 'bio-feedback-mechanisms-p7-s3-mcq-mixed',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review — Set 1**
      `,
      exercise: {
        questions: [
          {
            question: 'Which pair contains one negative-feedback process and one positive-feedback process?',
            options: [
              'Sweating during exercise and shivering in the cold',
              'Glucagon release overnight and stomatal closure in drought',
              'ADH release when dehydrated and oxytocin release in labor',
              'Platelet recruitment at a cut and ethylene release in ripening fruit'
            ],
            correctAnswer: 2,
            explanation: 'ADH release restores water balance (negative), while oxytocin release during labor amplifies contractions (positive). Sweating, shivering, glucagon release and stomatal closure are all negative; platelet recruitment and ethylene release are both positive.'
          },
          {
            question: 'A mouse is engineered so that its pancreatic alpha cells cannot release glucagon. Which outcome is most likely after the mouse fasts overnight?',
            options: [
              'Glucose falls lower than in normal mice',
              'Glucose climbs above the level in normal mice',
              'Insulin release increases to raise blood glucose',
              'The liver stores more glycogen than in normal mice'
            ],
            correctAnswer: 0,
            explanation: 'Glucagon is the signal that makes the liver break down glycogen and release glucose when levels are low; without it, glucose falls further during a fast. Insulin lowers glucose rather than raising it.'
          },
          {
            question: 'Why is positive feedback well suited to childbirth but poorly suited to regulating body temperature?',
            options: [
              'Childbirth needs a rapid push to completion, while temperature must stay stable',
              'Childbirth uses nerves, while temperature control uses only hormones',
              'Childbirth happens in the uterus, which lacks any sensory receptors',
              'Temperature changes too slowly for any feedback loop to detect'
            ],
            correctAnswer: 0,
            explanation: 'Positive feedback drives a process to an endpoint quickly, which suits birth; applied to temperature, it would push the body farther from 37 °C. Both processes involve nerves and hormones, and the cervix has stretch receptors.'
          }
        ]
      }
    },
    {
      id: 'bio-feedback-mechanisms-p7-s4-scales',
      type: 'text' as const,
      content: `
### The same logic at every scale

Feedback is a theme that connects units across the course, not just a Unit 4 fact.

| Scale | Negative-feedback example | Positive-feedback example |
|---|---|---|
| **Molecule** | **Feedback inhibition:** the end product of a metabolic pathway binds an allosteric site on an early enzyme and slows its own production (for example, isoleucine inhibits the first enzyme of its synthesis pathway) | A clotting protein activating other clotting proteins that make still more of it |
| **Gene** | In *E. coli*, tryptophan binds the trp repressor, which then shuts off transcription of the genes for making more tryptophan | (Rare at this level in the AP course) |
| **Organism** | Thermoregulation, glucose, water balance, ABA and stomata | Labor, lactation, fruit ripening |
| **Population** | Density-dependent regulation toward K | (Seen mainly when control breaks down) |
| **Ecosystem** | Predator–prey regulation | Eutrophication, ice-albedo, permafrost thaw |

**Big idea:** most biological systems are held stable by negative feedback, and positive feedback is used for short, decisive events or appears when a system is pushed past its normal limits.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Final Classification Round
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An end product binds the first enzyme of its pathway and slows it',
            options: ['negative feedback', 'positive feedback', 'set point moved', 'no feedback']
          },
          {
            label: 'Activated platelets release chemicals that activate more platelets',
            options: ['no feedback', 'negative feedback', 'positive feedback', 'set point moved']
          },
          {
            label: 'Pyrogens make the hypothalamus defend 39 °C instead of 37 °C',
            options: ['positive feedback', 'set point moved', 'no feedback', 'negative feedback']
          },
          {
            label: 'Crowded yeast accumulate ethanol, and their growth slows',
            options: ['set point moved', 'no feedback', 'negative feedback', 'positive feedback']
          }
        ],
        correctAnswers: ['negative feedback', 'positive feedback', 'set point moved', 'negative feedback'],
        hint1: 'An end product that slows its own production is opposing the change.',
        hint2: 'Platelet activation that recruits more platelets reinforces itself.',
        hint3: 'In fever, the loop still works but its target is different.',
        explanation: 'Feedback inhibition and density-dependent waste buildup oppose the change (negative feedback), platelet recruitment amplifies itself (positive feedback), and fever is a moved set point defended by negative feedback.'
      }
    },
    {
      id: 'bio-feedback-mechanisms-p7-s6-frq',
      type: 'text' as const,
      content: `
### Worked short FRQ: conceptual analysis

**Prompt.** In mammals, the hormone calcitonin lowers blood calcium, and parathyroid hormone (PTH) raises it.
(a) **Describe** what happens to PTH release when blood calcium falls.
(b) **Explain** how the two hormones together maintain homeostasis.
(c) A tumor causes the parathyroid glands to release PTH continuously. **Predict** the effect on blood calcium.
(d) **Justify** your prediction.

**Model answers.**
(a) PTH release increases when blood calcium falls.
(b) The hormones are antagonistic: when calcium is high, calcitonin lowers it; when calcium is low, PTH raises it. Each response opposes the change, so calcium is held within a narrow range by negative feedback.
(c) Blood calcium will stay abnormally high.
(d) The tumor releases PTH regardless of calcium level, so the signal is uncontrolled: the negative feedback that would normally reduce PTH when calcium rises no longer works, and PTH keeps raising calcium.

**Scoring notes:** (a) needs a direction; (b) needs the word "oppose" or an equivalent plus both hormones; (c) needs a direction; (d) needs the reason the loop cannot correct itself. A response that only restates the prediction in (d) earns no point.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review — Set 2**
      `,
      exercise: {
        questions: [
          {
            question: 'A graph shows a variable that rises sharply, then falls back past its starting value, then settles near that value after two smaller swings. Which process does the graph most likely show?',
            options: [
              'A positive-feedback loop that continued until an outside event ended it',
              'A negative-feedback loop correcting a disturbance with a short time lag',
              'A density-independent factor acting on a population at random',
              'A broken feedback loop that can no longer correct the variable'
            ],
            correctAnswer: 1,
            explanation: 'Overshooting and then settling in smaller and smaller swings is the signature of negative feedback with a delay between sensing and responding. Positive feedback would keep moving away from the start, and a broken loop would not return to baseline.'
          },
          {
            question: 'Isoleucine binds an allosteric site on the first enzyme in the pathway that makes isoleucine. As isoleucine accumulates, what happens?',
            options: [
              'Its synthesis slows, an example of negative feedback',
              'Production speeds up, an example of positive feedback',
              'The enzyme is digested, and the pathway is permanently lost',
              'The active site of the enzyme is filled by isoleucine'
            ],
            correctAnswer: 0,
            explanation: 'Isoleucine acts as an allosteric inhibitor of the first enzyme, so its own production slows as it builds up: feedback inhibition, a molecular form of negative feedback. The binding is reversible and occurs at an allosteric site, not the active site.'
          }
        ]
      }
    },
    {
      id: 'bio-feedback-mechanisms-p7-s8-input',
      type: 'input-boxes' as const,
      content: `
### Final Recall

1) Type of feedback that returns a variable toward its set point (one word):

2) Type of feedback that amplifies the original change (one word):

3) The word for two hormones with opposite effects on the same variable, such as insulin and glucagon (one word):
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['negative', 'positive', 'antagonistic'],
        hint1: 'This type is responsible for most homeostasis.',
        hint2: 'Labor and fruit ripening use this type.',
        hint3: 'It is the same word used for opposing muscles or opposing effectors.',
        explanation: 'Negative feedback stabilizes, positive feedback amplifies, and antagonistic hormones such as insulin and glucagon (or calcitonin and PTH) push the same variable in opposite directions.'
      }
    }
  ]
};
