export const bioFeedbackPart3Data = {
  topicSlug: 'feedback-mechanisms',
  sections: [
    {
      id: 'bio-feedback-mechanisms-p3-s1-intro',
      type: 'text' as const,
      content: `
## Feedback Mechanisms: Positive Feedback in Depth

**Part 3 of 7 — Positive Feedback in Depth**

Negative feedback keeps things the same. **Positive feedback** does the opposite: it drives a process to completion. The AP framework describes it this way: positive feedback mechanisms **amplify** responses, and the variable that started the response is moved **farther away** from its initial value. Each round of the loop further activates the stimulus, which triggers more response.

Positive feedback is rare compared with negative feedback, and it is used only where the body or plant needs a fast, all-the-way change: deliver a baby, release milk, ripen a fruit, plug a leak in a blood vessel.

Every positive loop shares three features:

| Feature | What it means | Why it matters |
|---|---|---|
| **Amplification** | Each cycle makes the stimulus stronger | The process accelerates instead of leveling off |
| **A defined endpoint** | The loop serves a goal that, once reached, removes the stimulus | Prevents runaway change |
| **An outside "off switch"** | Something other than the loop itself ends it | The loop cannot shut itself off the way negative feedback does |

The AP framework names three examples you should know cold: the **onset of labor**, **lactation in mammals**, and **fruit ripening**. Blood clotting is a fourth that appears often in questions.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p3-s2-labor-lactation',
      type: 'text' as const,
      content: `
### Example 1: Labor and childbirth

Part 1 traced this loop step by step. The key points to remember:
- **Stimulus:** stretch of the cervix by the baby's head.
- **Signal:** nerve impulses to the hypothalamus, then **oxytocin** released from the posterior pituitary.
- **Effector:** uterine smooth muscle, which contracts harder and more often.
- **Amplification:** stronger contractions → more stretch → more oxytocin.
- **Off switch:** birth removes the stretch on the cervix.

Clinicians use this loop directly: a synthetic form of oxytocin can be given to start or strengthen labor contractions.

### Example 2: Lactation (the milk-ejection reflex)

1. An infant suckles, stimulating sensory nerve endings in the nipple.
2. Nerve signals reach the hypothalamus.
3. The posterior pituitary releases **oxytocin**, which makes muscle-like cells around the milk glands contract and **eject milk**. The anterior pituitary also releases **prolactin**, which stimulates milk **production**.
4. Milk flow rewards the infant, who keeps suckling, which keeps the hormones coming.
5. **Off switch:** the infant stops suckling. Over weeks, less suckling (weaning) means less prolactin, and milk production declines.

The more the infant feeds, the more milk is made. This is why milk supply tends to match demand.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p3-s3-mcq',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Labor and Lactation
      `,
      exercise: {
        questions: [
          {
            question: 'Which event ends the positive-feedback loop that drives labor contractions?',
            options: [
              'Delivery of the baby, which removes stretch on the cervix',
              'A rise in blood glucose that suppresses oxytocin release',
              'Exhaustion of uterine muscle, which stops responding to signals',
              'A drop in body temperature detected by the hypothalamus'
            ],
            correctAnswer: 0,
            explanation: 'The loop is driven by cervical stretch; once the baby is delivered, the stretch is gone, oxytocin release falls and the loop ends. Glucose and temperature are not part of this loop, and contractions do not stop because the muscle simply gives out.'
          },
          {
            question: 'A mother who nurses her infant more frequently produces more milk over the following days. Which explanation fits this observation?',
            options: [
              'Frequent suckling lowers oxytocin, so milk builds up in the glands',
              'More suckling raises prolactin and oxytocin, so output climbs',
              'Nursing raises the set point for blood glucose, so more milk is made',
              'Milk volume is fixed by genes and does not respond to infant demand'
            ],
            correctAnswer: 1,
            explanation: 'Suckling is the stimulus that triggers prolactin (production) and oxytocin (ejection); more frequent suckling amplifies the hormone signal and milk output, a positive-feedback pattern. Lower oxytocin would reduce milk ejection, and milk output clearly responds to demand.'
          }
        ]
      }
    },
    {
      id: 'bio-feedback-mechanisms-p3-s4-ripening-clotting',
      type: 'text' as const,
      content: `
### Example 3: Fruit ripening and ethylene

Plants use positive feedback too. **Ethylene** is a gaseous plant hormone that triggers ripening in fruits such as apples, bananas and tomatoes.

1. A fruit begins to ripen and produces ethylene.
2. Ethylene stimulates the fruit's cells to ripen further: starch converts to sugar, cell walls soften, color changes.
3. Ripening cells **produce even more ethylene** (the response increases its own trigger).
4. Because ethylene is a **gas**, it diffuses to neighboring fruits and starts the same loop in them.

That is the biology behind "one bad apple spoils the bunch," and why a banana placed in a paper bag with an unripe avocado speeds its ripening: the bag traps the ethylene. Shippers do the reverse, storing fruit in cool, ventilated rooms (sometimes with ethylene-absorbing filters) to slow the loop.

**Fitness logic:** a whole tree's fruit ripening at once makes the crop conspicuous and attractive to seed-dispersing animals at the same time.

### Example 4: Blood clotting

1. A blood vessel wall is damaged, exposing collagen fibers.
2. **Platelets** stick to the exposed collagen and become activated.
3. Activated platelets release chemicals that **attract and activate more platelets**, building a platelet plug.
4. At the same time, a cascade of clotting factors produces **thrombin**, which converts fibrinogen into **fibrin** threads that reinforce the plug. Thrombin also activates earlier clotting factors, speeding up its own production.
5. **Off switch:** once the break is sealed, no new collagen is exposed, and anticlotting mechanisms in healthy vessel walls confine the clot to the injury.

| Loop | Stimulus that is amplified | Signal | What ends it |
|---|---|---|---|
| Labor | Cervical stretch | Oxytocin | Birth |
| Lactation | Suckling | Oxytocin and prolactin | Suckling stops |
| Fruit ripening | Ethylene concentration | Ethylene | Fruit fully ripe; ethylene dissipates |
| Clotting | Platelet activation at injury | Platelet chemicals; thrombin | Wound sealed |
      `
    },
    {
      id: 'bio-feedback-mechanisms-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Match Each Loop to Its Amplified Signal
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A box of bananas ripens faster when sealed than when left open',
            options: ['ethylene', 'oxytocin', 'thrombin', 'prolactin']
          },
          {
            label: 'Contractions intensify as the cervix stretches',
            options: ['prolactin', 'thrombin', 'oxytocin', 'ethylene']
          },
          {
            label: 'Fibrin threads form ever faster at a cut',
            options: ['oxytocin', 'ethylene', 'prolactin', 'thrombin']
          },
          {
            label: 'Milk production rises as nursing becomes more frequent',
            options: ['thrombin', 'prolactin', 'ethylene', 'oxytocin']
          }
        ],
        correctAnswers: ['ethylene', 'oxytocin', 'thrombin', 'prolactin'],
        hint1: 'Only one of these signals is a gas that can build up inside a closed container.',
        hint2: 'Milk production (not ejection) is controlled by a hormone from the anterior pituitary.',
        hint3: 'The enzyme that converts fibrinogen to fibrin also speeds its own formation.',
        explanation: 'Ethylene drives ripening, oxytocin drives labor contractions, thrombin drives fibrin formation and its own production, and prolactin drives milk production.'
      }
    },
    {
      id: 'bio-feedback-mechanisms-p3-s6-why-rare',
      type: 'text' as const,
      content: `
### Why positive feedback is rare (and when it becomes dangerous)

Positive feedback is powerful because it is unstable. If a positive loop had no off switch, the variable would keep moving away from its starting value until something failed. That is why living systems use it only for **events with a natural endpoint**, and why most positive loops are **nested inside** negative-feedback control. Clotting is a good case: the platelet plug grows by positive feedback, but anticlotting proteins in healthy vessel walls stop the clot from spreading beyond the wound.

When control breaks down, positive feedback can become harmful:
- **Heat stroke:** at very high body temperature, cooling responses can fail; metabolic reactions then speed up and release more heat, which raises temperature further.
- **Uncontrolled clotting:** clots that form inside intact vessels can block blood flow to the heart or brain.

**Misconception check:** positive feedback is not "good" feedback. Labor and clotting are essential, but the same loop structure becomes dangerous when it is not contained. Judge a loop by **direction**, not by whether its outcome is healthy.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
### Exit Check — Positive Feedback
      `,
      exercise: {
        questions: [
          {
            question: 'Unripe green tomatoes ripen faster when stored in a closed bag with one ripe tomato than when stored alone. What best explains this result?',
            options: [
              'The ripe fruit absorbs ethylene, removing a ripening inhibitor',
              'Ethylene from the ripe fruit triggers ripening in the others',
              'Low oxygen in the bag stops respiration in the green fruit',
              'Darkness in the bag switches on ripening genes directly'
            ],
            correctAnswer: 1,
            explanation: 'Ripening fruit gives off ethylene gas, and the closed bag concentrates it, triggering ripening in the green tomatoes, which then make their own ethylene. Ethylene promotes rather than inhibits ripening, and the fruit keeps respiring in the bag.'
          },
          {
            question: 'Which statement correctly distinguishes positive feedback from negative feedback?',
            options: [
              'Positive feedback stabilizes variables; negative feedback destabilizes them',
              'Positive feedback amplifies change and must be ended by an outside event',
              'Positive feedback is healthy; negative feedback signals disease',
              'Positive feedback uses hormones; negative feedback uses only nerves'
            ],
            correctAnswer: 1,
            explanation: 'Positive feedback reinforces the change and stops only when an outside event, such as birth or a sealed wound, removes the stimulus. Negative feedback is the stabilizing kind, neither type is defined by health, and both can use hormones or nerves.'
          },
          {
            question: 'Platelets at a wound release chemicals that activate additional platelets. A drug blocks those chemicals. What is the most likely effect?',
            options: [
              'Plugs form more slowly, so bleeding lasts longer',
              'Clots spread through intact vessels throughout the body',
              'Fibrinogen levels in the blood climb to toxic amounts',
              'Body temperature drops as blood flow to the skin falls'
            ],
            correctAnswer: 0,
            explanation: 'Blocking the platelet signal breaks the amplification step, so fewer platelets are recruited and the plug forms slowly. Clotting would be reduced rather than spread, and the drug acts on platelets rather than on fibrinogen levels or temperature control.'
          }
        ]
      }
    },
    {
      id: 'bio-feedback-mechanisms-p3-s8-input',
      type: 'input-boxes' as const,
      content: `
### Recall Check

1) Gaseous plant hormone that drives fruit ripening:

2) Protein threads that reinforce a platelet plug:

3) Hormone from the anterior pituitary that stimulates milk production:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['ethylene', 'fibrin', 'prolactin'],
        hint1: 'This hormone can spread from one fruit to another through the air.',
        hint2: 'Thrombin converts fibrinogen into this.',
        hint3: 'Oxytocin ejects milk; this other hormone makes it.',
        explanation: 'Ethylene drives ripening, fibrin threads reinforce clots, and prolactin stimulates milk production.'
      }
    }
  ]
};
