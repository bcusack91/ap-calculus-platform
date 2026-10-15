export const psychPrenatalPart4Data = {
  topicSlug: 'prenatal-childhood-development',
  sections: [
    {
      id: 'prenatal-childhood-development-p4-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Prenatal and Childhood Development

**Part 4 of 7 — Piaget's Theory of Cognitive Development**

Jean Piaget noticed that children of the same age tended to make the *same wrong answers* on reasoning tasks. He concluded that children are not simply less informed than adults; they think in qualitatively different ways.

> 🔑 **Key Concept:** According to Piaget, children actively build **schemas** (mental frameworks) through **assimilation** and **accommodation**, and their thinking passes through four stages: sensorimotor, preoperational, concrete operational and formal operational.

### The Building Blocks

| Term | Meaning | Example |
|---|---|---|
| **Schema** | A mental framework that organizes knowledge about something | A toddler's schema for "dog": four legs, fur, barks |
| **Assimilation** | Fitting new experience into an existing schema | The toddler sees a cat and calls it "doggy" |
| **Accommodation** | Changing a schema, or creating a new one, when new experience does not fit | After being corrected, the toddler forms a separate "kitty" schema |

Assimilation and accommodation work together throughout life. Piaget saw them as **continuous** processes that, over time, produce **discontinuous** stages. That is why the CED says schemas develop through "continuous and discontinuous processes".
      `
    },
    {
      id: 'prenatal-childhood-development-p4-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Schemas** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 3-year-old who knows only round balls sees an American football and says, "That ball is broken." What process is the child using?',
            options: [
              'Accommodation, because the child revises the schema',
              'Assimilation, because the child fits it to a schema',
              'Conservation, because the child tracks the quantity',
              'Object permanence, because the child tracks the toy'
            ],
            correctAnswer: 1,
            explanation: 'The child forces the football into the existing round-ball schema and treats the difference as damage, which is assimilation. Accommodation would require changing the schema to include oval balls.'
          },
          {
            question: 'Which situation best shows accommodation?',
            options: [
              'A child calls every man with a beard "Grandpa"',
              'A child learns that whales are mammals and not a kind of fish',
              'A child calls a zebra a "stripy horse" on a trip',
              'A child shakes a new rattle the same way as the old one'
            ],
            correctAnswer: 1,
            explanation: 'Learning that whales are mammals requires changing the child\'s fish schema, which is accommodation. The other three fit new things into existing schemas without changing them.'
          }
        ]
      }
    },
    {
      id: 'prenatal-childhood-development-p4-s3-stages',
      type: 'text' as const,
      content: `
## The Four Stages

Ages are approximate; Piaget cared more about the **order** of stages than the exact ages.

| Stage | Approximate age | How the child thinks | Hallmarks |
|---|---|---|---|
| **Sensorimotor** | Birth to about 2 years | Knows the world through senses and actions | **Object permanence** develops: understanding that objects exist when out of sight |
| **Preoperational** | About 2 to 7 years | Uses mental symbols, words and images, but not logical operations | Pretend play; **egocentrism**; **animism**; cannot yet do **conservation** or **reversibility**; theory of mind begins |
| **Concrete operational** | About 7 to 11 years | Logical thinking about concrete, real events | Conservation and reversibility; simple math transformations; struggles to reason systematically about hypotheticals |
| **Formal operational** | About 12 years through adulthood | Abstract and hypothetical reasoning | Can reason about "what if" and test ideas systematically; Piaget proposed that **not everyone reaches** this stage |

### Sensorimotor Stage in Action

Hide a toy under a blanket while a 5-month-old watches. The baby looks away as if the toy has vanished: "out of sight, out of mind". By around 8 months, many infants lift the blanket to search. Searching for a hidden object is the classic behavioral sign of **object permanence**.

### Preoperational Stage in Action

| Concept | What it looks like |
|---|---|
| **Mental symbols and pretend play** | A banana becomes a telephone; a box becomes a car |
| **Egocentrism** | Difficulty taking another person's perspective. A 4-year-old holds up a drawing to show Grandma over the phone. In Piaget's three-mountains task, children described their own view when asked what a doll across the table would see |
| **Animism** | Giving lifelike feelings to objects: "The moon is following me." "The chair is sad because I kicked it." |
| **Lack of conservation** | Not understanding that quantity stays the same when appearance changes |
| **Lack of reversibility** | Not mentally reversing an action, such as pouring water back into the first glass |

### The Conservation Task: A Worked Example

1. A child sees two identical short, wide glasses with equal water and agrees they hold "the same".
2. The researcher pours one glass into a tall, thin glass while the child watches.
3. **Preoperational response (age 4):** "The tall one has more." The child focuses on one dimension, height, and cannot mentally reverse the pour.
4. **Concrete operational response (age 8):** "They're the same. You just poured it. If you pour it back, it will look the same." The child uses **reversibility** and coordinates height with width.

Conservation shows up for number (spreading out a row of coins), mass (rolling clay into a snake) and volume (the water glasses).

### Formal Operational Thinking

Ask, "If all snorks are blue and this is a snork, what color is it?" A formal operational thinker reasons from the hypothetical premise ("blue"). A concrete thinker may object that snorks are not real. Formal operations allow scientific reasoning: holding variables constant and testing one at a time.
      `
    },
    {
      id: 'prenatal-childhood-development-p4-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Stage** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A 9-month-old pulls a cloth off a toy that was hidden while she watched. This shows _____.',
            options: ['egocentrism', 'object permanence', 'conservation', 'abstract reasoning']
          },
          {
            label: 'A 4-year-old says the sun went to bed because it was tired. This is _____.',
            options: ['animism', 'reversibility', 'conservation', 'object permanence']
          },
          {
            label: 'An 8-year-old says a clay ball and the same clay rolled into a snake have equal clay. He is in the _____ stage.',
            options: ['sensorimotor', 'preoperational', 'concrete operational', 'formal operational']
          },
          {
            label: 'A 15-year-old debates what society would be like if no one could lie. This shows _____ thinking.',
            options: ['preoperational', 'concrete operational', 'sensorimotor', 'formal operational']
          }
        ],
        correctAnswers: ['object permanence', 'animism', 'concrete operational', 'formal operational'],
        hint1: 'Searching for a hidden object means she knows it still exists.',
        hint2: 'The sun is being given human feelings.',
        hint3: 'Recognizing that amount stays the same despite a change in shape is conservation.',
        explanation: 'Searching for a hidden toy shows object permanence; a tired sun is animism; conserving mass marks the concrete operational stage; reasoning about a hypothetical world marks formal operational thinking.'
      }
    },
    {
      id: 'prenatal-childhood-development-p4-s5-critique',
      type: 'text' as const,
      content: `
## Evaluating Piaget

Piaget's stage order has held up well across many cultures, and his core idea that children actively construct knowledge shaped modern education. Later research has refined his claims.

| Piaget's claim | What later research found |
|---|---|
| Object permanence appears around 8 months | Using **looking-time** methods, infants as young as 3 to 4 months look longer when an object seems to pass through a hidden barrier, which suggests earlier expectations about objects. Piaget's search tasks required motor skills young babies lack |
| Preoperational children are deeply egocentric | With simpler, familiar tasks, preschoolers often take others' perspectives. By about age 4 most pass theory-of-mind tasks (Part 5) |
| Development moves in broad, sudden stages | Many abilities develop more gradually and unevenly. A child may conserve number before volume |
| Stages are universal and driven mainly by the child's own exploration | Culture and schooling affect timing. Formal reasoning depends heavily on education, and Vygotsky emphasized social input (Part 5) |

### Misconceptions to Avoid

| Misconception | Reality |
|---|---|
| Egocentrism means selfishness | It is a **cognitive** limit in taking another perspective, not a moral flaw |
| Children in a stage cannot do anything from the next stage | Abilities appear gradually and depend on the task |
| Everyone reaches formal operations by adolescence | Piaget himself proposed that not everyone does |
| Assimilation is "wrong" and accommodation is "right" | Both are normal, ongoing ways of adapting schemas |

> 🔑 **AP Connection:** In multiple-choice items, name the stage from what the child **can't** do as well as what the child can do. The CED identifies the preoperational stage more by the tasks children cannot perform, such as conservation and reversibility, and by errors they show, such as animism and egocentrism.
      `
    },
    {
      id: 'prenatal-childhood-development-p4-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Piaget's Stages** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A father cuts his 4-year-old\'s sandwich into four pieces, and she cheers, "Now I have more sandwich!" Which limitation does her reaction show?',
            options: [
              'A lack of object permanence',
              'A failure to conserve quantity',
              'An inability to use pretend play',
              'A deficit in fine motor skills'
            ],
            correctAnswer: 1,
            explanation: 'She believes the amount changed because its appearance changed, which is a failure of conservation typical of the preoperational stage. She clearly knows the sandwich still exists, and pretend play and motor skills are not involved.'
          },
          {
            question: 'A 10-year-old solves arithmetic word problems easily but struggles when asked to list every possible way to test which of three factors makes a pendulum swing faster. Which stage best describes him?',
            options: [
              'Concrete operational, logical but not yet systematic',
              'Preoperational, unable to use mental symbols at all',
              'Formal operational, fully able to reason abstractly',
              'Sensorimotor, limited to senses and motor actions'
            ],
            correctAnswer: 0,
            explanation: 'Concrete operational children reason logically about concrete problems but struggle to think systematically about hypothetical combinations of variables. Systematic testing of variables is a formal operational skill.'
          },
          {
            question: 'Researchers using looking-time measures find that 4-month-olds seem surprised when a hidden toy appears to pass through a solid wall. How does this finding challenge Piaget?',
            options: [
              'It suggests that babies have no schemas until age 2',
              'It implies that object knowledge emerges earlier',
              'It proves that conservation develops in infancy',
              'It confirms that object permanence starts at 8 months'
            ],
            correctAnswer: 1,
            explanation: 'Longer looking at an impossible event suggests that young infants already expect hidden objects to keep existing, earlier than Piaget\'s search tasks indicated. It says nothing about conservation and contradicts an 8-month start.'
          }
        ]
      }
    }
  ]
}
