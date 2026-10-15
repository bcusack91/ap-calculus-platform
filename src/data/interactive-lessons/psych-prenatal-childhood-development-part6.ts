export const psychPrenatalPart6Data = {
  topicSlug: 'prenatal-childhood-development',
  sections: [
    {
      id: 'prenatal-childhood-development-p6-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Prenatal and Childhood Development

**Part 6 of 7 — Attachment, Temperament, Parenting, and Early Social-Emotional Growth**

The first relationships a child forms shape how the child explores, copes with stress and later relates to others. This part covers how attachment forms, how it is measured, and which forces, from temperament to parenting to adversity, influence it.

> 🔑 **Key Concept:** **Attachment** is the lasting emotional bond between a child and a caregiver. Researchers identify **secure** and **insecure** (avoidant, anxious and disorganized) attachment styles, which vary by culture and relate to the child's **temperament**.

### Harlow's Monkeys: Comfort Over Food

In the 1950s, Harry Harlow raised infant rhesus monkeys apart from their mothers with two artificial "mothers": one made of bare wire that held a feeding bottle, and one covered in soft terry cloth that gave no food.

| Observation | What it showed |
|---|---|
| The infants spent most of their time clinging to the cloth mother, going to the wire mother only to feed | **Contact comfort**, not food, was the basis of the bond |
| When frightened by a strange object, they ran to the cloth mother | The cloth mother served as a source of security |
| With the cloth mother in the room, they explored more boldly | A comforting figure acts as a secure base for exploration |

This challenged the then-popular view that infants love caregivers mainly because caregivers feed them. Raising monkeys in isolation caused lasting social and emotional harm, and today the studies are often cited in discussions of the ethics of animal research.

### Separation Anxiety

**Separation anxiety** occurs when children show heightened anxiety or fear when away from a caregiver or in the presence of a stranger. It typically emerges in the second half of the first year, as infants can now recognize who is familiar and remember that a caregiver exists when gone, and it is usually strongest early in the second year. It is a normal sign that an attachment has formed, not a problem in itself.
      `
    },
    {
      id: 'prenatal-childhood-development-p6-s2-strange',
      type: 'text' as const,
      content: `
## Measuring Attachment: The Strange Situation

Mary Ainsworth designed the **Strange Situation** to observe attachment in infants about 12 to 18 months old. In a series of short episodes, the caregiver and infant enter an unfamiliar playroom, a stranger joins them, the caregiver leaves, and the caregiver later returns. Researchers pay special attention to the **reunion**.

| Attachment style | Exploration with caregiver present | When caregiver leaves | At reunion |
|---|---|---|---|
| **Secure** | Explores freely, using caregiver as a secure base | Often upset | Seeks comfort, is soothed quickly, returns to play |
| **Insecure: avoidant** | Explores with little reference to caregiver | Little visible distress | Ignores or turns away from caregiver |
| **Insecure: anxious** (also called ambivalent or resistant) | Clingy, explores little | Very distressed | Seeks contact but resists it, angry or hard to soothe |
| **Insecure: disorganized** | Confused, inconsistent behavior | Unpredictable | Contradictory: may approach then freeze or back away |

Ainsworth linked secure attachment to **sensitive, responsive caregiving**: caregivers who noticed and responded promptly to the infant's signals. The disorganized pattern, added by later researchers, is most common when the caregiver is a source of fear, as in some cases of maltreatment.

### Culture Matters

The proportions of each style **vary by culture**. In many U.S. samples, about two-thirds of infants are classified as secure. Some German samples showed more avoidant classifications, which fits a cultural emphasis on early independence. Some Japanese samples showed more anxious classifications, which fits infants who are rarely separated from their mothers and find the separation episodes unusually stressful. The same behavior can mean different things in different cultures, so the Strange Situation must be interpreted with care.

### Temperament

**Temperament** is a child's characteristic emotional reactivity and intensity, visible from early infancy and partly heritable. A classic longitudinal study by Alexander Thomas and Stella Chess sorted many infants into three groups: **easy** (regular, positive, adaptable), **difficult** (irregular, intense, negative) and **slow-to-warm-up** (cautious and withdrawn at first, then adapting).

Temperament is **related to** attachment but does not determine it. A difficult infant is harder to soothe, which can strain caregiving, while a sensitive caregiver who fits her approach to the child's temperament can still build a secure attachment. Psychologists call this match "goodness of fit".
      `
    },
    {
      id: 'prenatal-childhood-development-p6-s3-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Attachment** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the Strange Situation, an infant plays happily, barely reacts when his mother leaves, and looks away and keeps playing when she returns. Which attachment style does this suggest?',
            options: [
              'Secure attachment',
              'Insecure-avoidant attachment',
              'Insecure-anxious attachment',
              'Disorganized attachment'
            ],
            correctAnswer: 1,
            explanation: 'Little distress at separation and active avoidance at reunion mark the avoidant pattern. A secure infant seeks comfort at reunion, and an anxious infant is very upset and hard to soothe.'
          },
          {
            question: 'What did Harlow\'s monkeys show by clinging to the cloth mother even though the wire mother provided milk?',
            options: [
              'Feeding is the main reason infants become attached',
              'Contact comfort matters more than food in attachment',
              'Attachment forms only during a brief critical period',
              'Monkeys imprint on whatever object they see first'
            ],
            correctAnswer: 1,
            explanation: 'The infants fed from the wire mother but spent their time with, and fled to, the cloth mother, so comfort rather than food drove the bond. The study did not test timing windows or imprinting.'
          },
          {
            question: 'A toddler cries hard when her mother leaves her with a new babysitter but is calm when she is with her mother. What does this behavior most likely indicate?',
            options: [
              'Normal separation anxiety showing an attachment',
              'A disorganized attachment caused by poor caregiving',
              'A temperament that will remain difficult for life',
              'Failure to develop object permanence on schedule'
            ],
            correctAnswer: 0,
            explanation: 'Distress at separation from a caregiver and wariness of strangers are typical in the first two years and show that a bond exists. Nothing here suggests disorganized behavior, and temperament is not fixed by one episode.'
          }
        ]
      }
    },
    {
      id: 'prenatal-childhood-development-p6-s4-parenting',
      type: 'text' as const,
      content: `
## Parenting Styles

Research identifies three parenting styles that differ in **demands** (rules, expectations, control) and **responsiveness** (warmth, support).

| Style | Demands | Warmth | Typical message | Outcomes most often found in Western, middle-class samples |
|---|---|---|---|---|
| **Authoritarian** | High | Low | "Because I said so." Strict rules, punishment, little explanation | More obedient but lower self-esteem and social skills on average |
| **Authoritative** | High | High | Clear rules with reasons; open discussion; adjusts as the child matures | Higher self-esteem, self-reliance and social competence on average |
| **Permissive** | Low | High | Few rules or demands; the child makes most decisions | More impulsive, less self-controlled on average |

### Three Cautions

1. **Correlation, not causation.** Parenting style is measured, not assigned. A third variable such as family income could affect both parenting and outcomes.
2. **Effects run both ways.** An easygoing child may make it easier for parents to be authoritative, and a defiant child may push parents toward strictness.
3. **Culture changes the picture.** The CED notes cultural differences in how parenting styles affect outcomes. In some collectivist communities, strict, highly demanding parenting is seen as an expression of care and is not linked to the same negative outcomes found in Western samples.

## Erikson's First Four Psychosocial Stages

Erik Erikson proposed that people must resolve a psychosocial conflict at each stage of life. The first four cover infancy and childhood. (The Adolescence and Adulthood topic covers the last four.)

| Stage (approximate age) | Conflict | Successful resolution looks like |
|---|---|---|
| Infancy (birth to 1) | **Trust vs. mistrust** | Reliable care leads the infant to see the world as safe and predictable |
| Toddlerhood (1 to 3) | **Autonomy vs. shame and doubt** | The child gains confidence doing things alone, such as feeding or dressing |
| Preschool (3 to 6) | **Initiative vs. guilt** | The child plans activities and takes on tasks without excessive guilt |
| Elementary school (6 to puberty) | **Industry vs. inferiority** | The child feels competent through effort at school and other work |

## Adverse Childhood Experiences (ACEs)

**Adverse childhood experiences** are potentially traumatic events in childhood, such as abuse, neglect, or household problems like violence, substance misuse or a parent's incarceration. Large studies of adults found a **dose-response pattern**: the more ACEs people reported, the higher their risk of later physical illness, mental health problems and difficulty forming stable relationships. ACEs raise risk but do not seal anyone's fate. Supportive relationships are a major protective factor. Sociocultural differences exist in what counts as an ACE and in how ACEs affect outcomes.
      `
    },
    {
      id: 'prenatal-childhood-development-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Style or Stage** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Parents set a firm 10 p.m. curfew, explain why, and listen when their teen asks to adjust it for special events. This style is _____.',
            options: ['authoritarian', 'permissive', 'authoritative', 'disorganized']
          },
          {
            label: 'A parent lets a 6-year-old choose his own bedtime and skip homework whenever he likes. This style is _____.',
            options: ['permissive', 'authoritarian', 'authoritative', 'avoidant']
          },
          {
            label: 'A 2-year-old insists, "Me do it!" when getting dressed. Erikson would place her in the conflict of autonomy vs. _____.',
            options: ['mistrust', 'guilt', 'inferiority', 'shame and doubt']
          }
        ],
        correctAnswers: ['authoritative', 'permissive', 'shame and doubt'],
        hint1: 'High demands plus warmth and explanation.',
        hint2: 'Warm, but almost no rules.',
        hint3: 'The toddler stage pairs autonomy with this conflict.',
        explanation: 'Firm rules with reasons and flexibility describe authoritative parenting. Few rules or demands describe permissive parenting. A toddler asserting independence is in Erikson\'s autonomy vs. shame and doubt stage.'
      }
    },
    {
      id: 'prenatal-childhood-development-p6-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Social-Emotional Development** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A study finds that children of authoritative parents have higher self-esteem than children of authoritarian parents. A classmate concludes that authoritative parenting causes higher self-esteem. What is the best critique?',
            options: [
              'Parenting was only measured, so a third variable could explain it',
              'Self-esteem cannot be measured in children with any reliable tool',
              'Authoritative and authoritarian parenting are actually the same style',
              'Parenting has been shown to have no effect on child outcomes at all'
            ],
            correctAnswer: 0,
            explanation: 'Parenting style was measured rather than assigned, so income, child temperament or other variables could produce the relationship. The other options are false claims rather than critiques of the reasoning.'
          },
          {
            question: 'A 9-year-old who repeatedly struggles in school begins to say, "I\'m just bad at everything." Which of Erikson\'s conflicts is she facing?',
            options: [
              'Trust vs. mistrust',
              'Initiative vs. guilt',
              'Industry vs. inferiority',
              'Identity vs. role confusion'
            ],
            correctAnswer: 2,
            explanation: 'In the school years, children judge their competence through effort and achievement, and repeated failure can lead to feelings of inferiority. Identity vs. role confusion belongs to adolescence, and the other two are earlier stages.'
          },
          {
            question: 'Which statement about temperament and attachment is best supported by research?',
            options: [
              'A difficult temperament guarantees an insecure attachment',
              'Temperament relates to attachment but does not fully set it',
              'Temperament is learned entirely from the parenting style',
              'Attachment style decides what temperament a baby is born with'
            ],
            correctAnswer: 1,
            explanation: 'Temperament influences how easily a child is soothed and so relates to attachment, but responsive caregiving that fits the child can still produce secure attachment. Temperament appears early and is partly heritable, so it is not purely learned.'
          }
        ]
      }
    }
  ]
}
