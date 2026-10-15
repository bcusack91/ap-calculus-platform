export const psychThinkingPart5Data = {
  topicSlug: 'thinking-problem-solving',
  sections: [
    {
      id: 'think5-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Thinking & Problem Solving

**Part 5 of 7 — Creativity and Executive Functions**

> 🔑 **Key Concept:** Creativity is a way of thinking that generates **novel ideas** through **divergent** (versus convergent) thinking, and it is hindered by **functional fixedness** (CED 2.2.A.8). **Executive functions** are the cognitive processes that let people generate, organize, plan, and carry out goal-directed behavior and think critically (CED 2.2.A.7).

### Convergent vs. Divergent Thinking

| | Convergent Thinking | Divergent Thinking |
|--|--------------------|--------------------|
| **Direction** | Narrows DOWN to one answer | Expands OUT to many answers |
| **Type of question** | "What is 7 × 8?" | "How many uses can you think of for a brick?" |
| **Typical measure** | Multiple-choice and short-answer tests with one key | Alternate-uses tasks scored for number and originality of ideas |
| **What it produces** | The single best or correct solution | A wide range of possible solutions |
| **Example** | Solving a math equation | Brainstorming names for a new club |

Creative work usually uses BOTH: divergent thinking produces many options, then convergent thinking picks the one that actually works. A student designing a science-fair project might list fifteen possible questions (divergent) and then choose the one that can be tested with the equipment available (convergent).

### What Blocks Creative Thinking

| Obstacle | What it looks like | Why it blocks new ideas |
|----------|--------------------|-------------------------|
| **Functional fixedness** | Seeing a coin only as money, never as a screwdriver | The object's usual use hides its other possible uses |
| **Mental set** | Reusing the method that solved the last five problems | A strategy that worked before crowds out a better one |
| **Settling on the first answer** | Stopping after one idea on an open-ended task | Convergent closure arrives before divergent search has started |

> **AP Connection:** The CED names functional fixedness as the obstacle to creativity. In a scenario, ask: is the person stuck on an OBJECT's usual function (functional fixedness) or on a familiar STRATEGY (mental set)?
      `
    },
    {
      id: 'think5-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A test asks students to list as many possible uses for a paperclip as they can in 2 minutes. This test measures:',
            options: [
              'Convergent thinking — narrowing down to the one correct use for a paperclip',
              'Divergent thinking — generating many possible creative solutions',
              'Functional fixedness — seeing the paperclip only in its standard use',
              'The availability heuristic — recalling common uses for paperclips'
            ],
            correctAnswer: 1,
            explanation: 'An alternate-uses task is open-ended, with no single correct answer, so it measures divergent thinking: producing many different and unusual ideas. A student who lists only "hold papers" would show low divergent thinking and possibly functional fixedness.'
          },
          {
            question: 'Campers need to stir a pot but forgot a spoon. One camper says there is nothing to stir with, even though a clean tent stake and a pair of tongs are sitting nearby. The camper\'s difficulty BEST illustrates:',
            options: [
              'Mental set, because the camper keeps using a cooking routine that worked well at home',
              'Divergent thinking, because the camper is generating too many possible uses at once',
              'Functional fixedness, because the camper sees those objects only in their usual roles',
              'Convergent thinking, because the camper has narrowed the problem to the one right tool'
            ],
            correctAnswer: 2,
            explanation: 'The camper cannot see the tent stake or tongs as stirring tools because they are fixed on those objects\' usual functions, which is functional fixedness, the CED\'s named obstacle to creative thinking. Mental set would involve a strategy rather than an object, and the camper is producing too few ideas, not too many.'
          }
        ]
      }
    },
    {
      id: 'think5-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Executive Functions: The Brain's Project Manager

Executive functions are the cognitive processes that let people **generate, organize, plan, and carry out goal-directed behavior** and engage in **critical thinking** (CED 2.2.A.7). They are what turn a creative idea into a finished product.

| Executive function | What it does | Everyday example |
|--------------------|--------------|------------------|
| **Generating** | Produces goals and options | Listing possible topics for a research paper |
| **Organizing** | Puts information and steps in order | Sorting notes into sections before writing |
| **Planning** | Sequences steps toward a goal and anticipates obstacles | Scheduling drafts so the paper is done two days early |
| **Carrying out goal-directed behavior** | Starts the work, keeps it going, and shifts strategy when needed | Switching to a new source when the first one is unhelpful |
| **Critical thinking** | Evaluates ideas and evidence before accepting them | Checking whether a source's claim is supported by data |

### Where Executive Functions Live

The **prefrontal cortex** in the frontal lobe is the brain region most associated with executive functioning (CED 1.4). Damage there often leaves vocabulary and memory for facts intact while disrupting planning and self-control.

| Case pattern | What stays intact | What breaks down |
|--------------|-------------------|------------------|
| Prefrontal damage after an accident | Knowing how to cook each dish | Planning a meal so all dishes are ready at the same time |
| Prefrontal damage after a stroke | Knowing the rules of a game | Sticking to a strategy and adjusting when it fails |

### Creativity, Executive Functions, and Intelligence Are Not the Same

| Statement | Accurate? | Why |
|-----------|-----------|-----|
| "A high test score means a person is creative." | No | Tests with one correct answer mostly tap convergent thinking |
| "A creative person must be organized." | No | Generating novel ideas (divergent thinking) and carrying a plan through (executive functions) are different processes |
| "Executive functions help creative ideas become real products." | Yes | Planning and organizing turn ideas into completed work |
      `
    },
    {
      id: 'think5-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: '___ thinking generates many possible solutions; convergent thinking narrows to one answer', answer: 'Divergent' },
          { label: 'Functional ___ is the inability to see a new use for a familiar object, and it hinders creativity', answer: 'fixedness' },
          { label: 'The cognitive processes that generate, organize, plan, and carry out goal-directed behavior are called ___ functions', answer: 'executive' }
        ]
      }
    },
    {
      id: 'think5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Thinking Process** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: '"What is the capital of France?"', options: ['Convergent thinking', 'Divergent thinking', 'Executive functions', 'Functional fixedness'] },
          { label: '"Design a new product to solve a common household problem"', options: ['Divergent thinking', 'Convergent thinking', 'Functional fixedness', 'Mental set'] },
          { label: 'A student breaks a big project into weekly steps, tracks progress, and changes the plan when a step falls behind', options: ['Executive functions', 'Divergent thinking', 'Convergent thinking', 'Functional fixedness'] }
        ],
        correctAnswers: ['Convergent thinking', 'Divergent thinking', 'Executive functions'],
        hint1: 'One specific correct answer — narrowing down to the single right response.',
        hint2: 'Open-ended, many possible solutions, generating novel ideas.',
        hint3: 'Planning, organizing, monitoring, and adjusting goal-directed behavior.',
        explanation: 'Capital of France = convergent (one correct answer: Paris). Design a product = divergent (many possible solutions). Breaking a project into steps and adjusting the plan = executive functions (planning and carrying out goal-directed behavior).'
      }
    },
    {
      id: 'think5-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Strategy: Creativity and Executive-Function Questions

**Common Misconceptions:**

| Misconception | Correction |
|--------------|-----------|
| Creativity = divergent thinking only | Creativity GENERATES ideas divergently, but choosing a workable idea is convergent |
| Functional fixedness = mental set | Fixedness is stuck on an OBJECT's usual use; mental set is stuck on a familiar STRATEGY |
| Executive functions = intelligence | Executive functions are about planning and carrying out behavior; a person can know a lot and still plan poorly |
| Executive functions happen everywhere in the brain equally | The prefrontal cortex is the region most associated with them |

**Quick Decision Guide:**
- One correct answer → **Convergent thinking**
- Many possible answers → **Divergent thinking**
- Can't see a new use for an object → **Functional fixedness**
- Planning, organizing, and following through on a goal → **Executive functions**

> **AP Tip:** Convergent = CONverge = come together to ONE point. Divergent = DIverge = spread OUT in many directions. Executive functions = the "executive" who runs the project once the ideas exist.
      `
    },
    {
      id: 'think5-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'After a car accident injured her prefrontal cortex, a chef still knows every recipe but can no longer get a full dinner ready on time; she starts dishes in the wrong order and does not adjust when one runs late. Her difficulty is BEST described as a problem with:',
            options: [
              'Divergent thinking, since she can no longer invent new recipes',
              'Executive functions, since she can no longer plan the meal and carry the plan through',
              'Functional fixedness, since she sees her kitchen tools only in their usual roles',
              'Convergent thinking, since she cannot recall the one correct recipe for a dish'
            ],
            correctAnswer: 1,
            explanation: 'Her recipe knowledge is intact, but sequencing, timing, and adjusting the plan fail, which is a breakdown of executive functions linked to the prefrontal cortex. The scenario says nothing about inventing new recipes, using tools in new ways, or recalling a single answer.'
          },
          {
            question: 'A researcher surveys 200 high school students and finds a positive correlation (r = +.35) between their scores on an alternate-uses task and the number of hobbies they report. Which conclusion is BEST supported?',
            options: [
              'Taking up more hobbies causes students to become better divergent thinkers',
              'Students with more hobbies tend to do somewhat better on the divergent thinking measure',
              'Divergent thinking ability causes students to take up a larger number of hobbies',
              'The two measures are unrelated, because .35 is too small to count as a relationship'
            ],
            correctAnswer: 1,
            explanation: 'A positive correlation of +.35 shows a modest tendency for the two measures to rise together, so students with more hobbies tend to score somewhat higher. Because this is correlational research, neither causal direction can be concluded (directionality and third-variable problems), and +.35 is a real, if moderate, relationship.'
          }
        ]
      }
    }
  ]
}
