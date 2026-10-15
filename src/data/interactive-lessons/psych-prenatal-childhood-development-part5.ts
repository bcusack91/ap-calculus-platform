export const psychPrenatalPart5Data = {
  topicSlug: 'prenatal-childhood-development',
  sections: [
    {
      id: 'prenatal-childhood-development-p5-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Prenatal and Childhood Development

**Part 5 of 7 — Learning in Context: Vygotsky, Theory of Mind, Play, and Ecological Systems**

Piaget pictured the child as a lone scientist experimenting on the world. Lev Vygotsky, a Russian psychologist working in the 1920s and 1930s, pictured the child as an apprentice, learning through interaction with more skilled people inside a culture.

> 🔑 **Key Concept:** According to Vygotsky, children are **social learners** who learn through interaction with, and **scaffolding** by, other people within sociocultural contexts. Learning works best inside the child's **zone of proximal development (ZPD)**.

### The Zone of Proximal Development

Picture three zones for any skill:

| Zone | What the child can do | Example: tying shoes |
|---|---|---|
| Can do alone | Already mastered | Pulling shoes on |
| **ZPD** | Cannot yet do alone, **but can do with guidance** | Tying a bow while a parent talks her through the loops |
| Cannot do even with help | Too far beyond current ability | Tying a sailor's knot |

Teaching aimed at the middle zone produces the most growth. Teaching aimed at what the child already knows is wasted, and teaching far beyond the ZPD frustrates.

### Scaffolding

**Scaffolding** is temporary, adjustable support from a more knowledgeable person that lets a child succeed within the ZPD. Like scaffolding on a building, it is removed as the structure can stand alone.

**Worked example: a parent scaffolding a puzzle**
1. **Simplify the task:** "Let's find all the edge pieces first."
2. **Draw attention to key features:** "See how this piece has a straight side?"
3. **Model a step:** The parent places one corner piece while narrating.
4. **Fade support:** As the child succeeds, the parent says less and lets the child choose pieces.
5. **Independence:** Next week the child completes a similar puzzle alone, and the new ZPD shifts to harder puzzles.

### Language and Culture as Tools

For Vygotsky, words are tools for thinking. Young children often talk aloud to themselves while working ("Red piece goes here..."), and this **private speech** gradually becomes silent inner speech that guides problem solving. Culture supplies other tools as well, such as counting systems, writing and maps, which is why what children learn, and when they learn it, varies across cultures.
      `
    },
    {
      id: 'prenatal-childhood-development-p5-s2-compare',
      type: 'text' as const,
      content: `
## Piaget and Vygotsky Compared

| Question | Piaget | Vygotsky |
|---|---|---|
| What drives development? | The child's own exploration and maturation | Social interaction within a culture |
| Role of other people | Provide experiences that challenge schemas | Essential: they scaffold learning in the ZPD |
| Role of language | A sign of cognitive development | A tool that drives thinking |
| Stages? | Yes, four universal stages | No fixed stages; development depends on culture and guidance |
| Classroom implication | Discovery learning; match tasks to the child's stage | Guided teaching, peer tutoring, collaborative work |

Neither theory is simply right. Children clearly build understanding through their own actions, and they clearly learn faster with skilled guidance. AP items often ask you to identify which theorist a scenario illustrates. Look for the **social helper** (Vygotsky) or the **stage-limited reasoning error** (Piaget).
      `
    },
    {
      id: 'prenatal-childhood-development-p5-s3-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Vygotsky** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 6-year-old cannot read a new storybook alone, but she can read it when her older brother points to each word and helps her sound out hard ones. In Vygotsky\'s terms, the book is',
            options: [
              'within her zone of proximal development',
              'beyond anything she could learn yet',
              'a skill she has already fully mastered',
              'evidence that she lacks object permanence'
            ],
            correctAnswer: 0,
            explanation: 'A task she cannot do alone but can do with guidance falls in the zone of proximal development. Mastered skills need no help, and tasks far beyond her ability would not be possible even with support.'
          },
          {
            question: 'A math tutor gives detailed hints on the first few problems, fewer hints on the next ones, and none on the last ones. What is the tutor doing?',
            options: [
              'Assimilation',
              'Scaffolding',
              'Habituation',
              'Imprinting'
            ],
            correctAnswer: 1,
            explanation: 'Providing support and then gradually withdrawing it as the learner improves is scaffolding. Assimilation is a Piagetian schema process, and the other two do not involve guided teaching.'
          }
        ]
      }
    },
    {
      id: 'prenatal-childhood-development-p5-s4-tom',
      type: 'text' as const,
      content: `
## Theory of Mind

**Theory of mind** is the understanding that other people have their own thoughts, beliefs, desires and feelings, and that these can differ from your own and from reality. The CED places its beginnings in the preoperational stage.

### The False-Belief Task: A Worked Example

1. A child watches a puppet show. Sally puts her marble in a **basket** and leaves the room.
2. While Sally is gone, Anne moves the marble to a **box**.
3. Sally comes back. The researcher asks: "Where will Sally look for her marble?"
4. **Typical 3-year-old:** "In the box." The child answers from what *she* knows to be true.
5. **Typical 4- to 5-year-old:** "In the basket, because she didn't see Anne move it." The child understands that Sally holds a **false belief**.

Passing false-belief tasks around age 4 marks a major step away from egocentrism. Theory of mind lets children explain and predict others' behavior, keep secrets, play hide-and-seek well, tell white lies and understand deception in stories. Children with more siblings and more conversation about feelings tend to develop it a bit earlier, a reminder that social experience matters.

## Peer Play: Parallel and Pretend

The CED notes that children engage with peers through **parallel** and **pretend** play.

| Type of play | What it looks like | Typical emergence |
|---|---|---|
| **Parallel play** | Children play side by side with similar toys but do not truly interact, such as two toddlers each filling a bucket in the sandbox | Toddler years, around ages 2 to 3 |
| **Pretend play** | Using objects and actions symbolically and acting out roles, such as "playing house" or turning a stick into a sword | Preschool years, growing more social and elaborate with age |

Pretend play links to Piaget's preoperational stage (mental symbols) and to Vygotsky, who saw play as a setting where children act "a head taller than themselves", following the rules of a role they could not keep in real life. Cooperative pretend play also gives practice in perspective-taking and theory of mind.
      `
    },
    {
      id: 'prenatal-childhood-development-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Theory of Mind and Play** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A 3-year-old says Sally will look in the box, where the marble really is. He has not yet developed _____.',
            options: ['object permanence', 'theory of mind', 'conservation', 'parallel play']
          },
          {
            label: 'Two 2-year-olds sit next to each other, each building with blocks, without talking or sharing. This is _____ play.',
            options: ['pretend', 'cooperative', 'parallel', 'formal']
          },
          {
            label: 'Four preschoolers act out running a restaurant, using leaves as money. This is _____ play.',
            options: ['parallel', 'pretend', 'solitary', 'sensorimotor']
          }
        ],
        correctAnswers: ['theory of mind', 'parallel', 'pretend'],
        hint1: 'He cannot separate what Sally believes from what he knows.',
        hint2: 'Side by side, but not together.',
        hint3: 'Leaves standing in for money are symbols.',
        explanation: 'Failing the false-belief task shows that theory of mind has not developed yet. Side-by-side play without interaction is parallel play, and acting out roles with symbolic objects is pretend play.'
      }
    },
    {
      id: 'prenatal-childhood-development-p5-s6-eco',
      type: 'text' as const,
      content: `
## Bronfenbrenner's Ecological Systems Theory

Vygotsky stressed that learning happens within a culture. Urie Bronfenbrenner's **ecological systems theory** maps the whole social environment that influences development as five nested systems, from the closest to the broadest.

| System | CED description | Example for a 7-year-old named Maya |
|---|---|---|
| **Microsystem** | Groups that have direct contact with the individual | Her family, her classroom, her soccer team |
| **Mesosystem** | The relationships between groups in the microsystem | Her parents and teacher meet to plan reading help |
| **Exosystem** | Indirect factors in the individual's life | Her mother's employer changes her shifts to nights, so Maya sees her less |
| **Macrosystem** | Cultural events and values that affect the individual and those around her | Her culture's beliefs about education; a national economic recession |
| **Chronosystem** | The individual's current stage of life and changes over time | Starting school; her parents' divorce when she is 7 |

**How to tell the middle systems apart:** the **mesosystem** is a *connection between two settings the child is in*. The **exosystem** is a *setting the child is not in* that still affects her, such as a parent's workplace or the school board.

> 🔑 **AP Connection:** Ecological systems questions usually describe one influence and ask which system it belongs to. Ask: Is the child directly in this setting (micro)? Is it a link between the child's settings (meso)? Is it a setting the child never enters (exo)? Is it broad culture (macro)? Is it about timing or life stage (chrono)?
      `
    },
    {
      id: 'prenatal-childhood-development-p5-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Social Contexts of Development** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A city school board cuts funding for elementary art programs, and a first grader no longer has art class. In ecological systems theory, the school board is part of the child\'s',
            options: [
              'microsystem',
              'mesosystem',
              'exosystem',
              'chronosystem'
            ],
            correctAnswer: 2,
            explanation: 'The child never takes part in school board meetings, but its decisions still affect her, so the board belongs to the exosystem. Her classroom would be a microsystem, and a link between two of her settings would be a mesosystem.'
          },
          {
            question: 'A child\'s soccer coach and his parents work together to help him manage frustration after losses. Which system does their cooperation represent?',
            options: [
              'The macrosystem of shared cultural values',
              'The mesosystem linking two of his settings',
              'The exosystem of settings he never enters',
              'The chronosystem of his current life stage'
            ],
            correctAnswer: 1,
            explanation: 'The coach and the parents are each part of his microsystem, and the relationship between them is the mesosystem. Nothing in the scenario involves broad culture, an outside setting or a life transition.'
          },
          {
            question: 'Which teaching approach best reflects Vygotsky rather than Piaget?',
            options: [
              'Waiting until a child reaches a stage before teaching',
              'Pairing a student with a slightly more skilled peer',
              'Letting each child discover rules alone without help',
              'Testing whether a child can conserve liquid volume'
            ],
            correctAnswer: 1,
            explanation: 'Vygotsky emphasized learning through interaction with more skilled others within the zone of proximal development, which peer tutoring provides. Waiting for stage readiness, solo discovery and conservation tasks are associated with Piaget.'
          }
        ]
      }
    }
  ]
}
