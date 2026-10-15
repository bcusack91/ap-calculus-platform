export const cspCreativeDevelopmentPart5Data = {
  topicSlug: "csp-creative-development",
  sections: [
    {
      id: "cspcd5-intro",
      type: 'text' as const,
      content: `
# 🎨 Creative Development

**Part 5 of 7 — Documentation and Acknowledging Code**

---

## Program Documentation

**Program documentation** is a written description of what a code segment, event, procedure, or program does and how it was developed. **Comments** are documentation written into the program itself: people read them, and they do not affect how the program runs.

\`\`\`
// Returns how many values in nums are greater than cutoff.
// Written with my partner, Sam R.
PROCEDURE countAbove(nums, cutoff)
{
    count ← 0
    FOR EACH n IN nums
    {
        IF (n > cutoff)
        {
            count ← count + 1
        }
    }
    RETURN(count)
}
\`\`\`

- Document **throughout** development, not only at the end.
- Documentation helps when developing and maintaining correct programs, whether you work alone or with a team.
- Not every programming environment supports comments, so documentation sometimes goes in a separate document.
      `
    },
    {
      id: "cspcd5-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Which statement about comments in a program is accurate?",
            options: [
              "The computer runs them to check the code for errors.",
              "They make the program run faster by explaining each step.",
              "People read them, and they do not change how the program runs.",
              "They are needed only after the program has been finished."
            ],
            correctAnswer: 2,
            explanation: "Comments are a form of documentation written for people. The computer ignores them, so they do not affect how the program runs."
          },
          {
            question: "When should a programmer write program documentation?",
            options: [
              "Only after the final version has been fully tested",
              "Only when another programmer asks for an explanation",
              "Throughout development, as the program changes",
              "Only in programming languages that support comments"
            ],
            correctAnswer: 2,
            explanation: "Programs should be documented throughout development. Waiting until the end loses details, and environments without comments can use separate documents."
          }
        ]
      }
    },
    {
      id: "cspcd5-content",
      type: 'text' as const,
      content: `
## Acknowledging Code From Other Sources

Acknowledge any code that was developed collaboratively or by another source. The acknowledgment can go in the program documentation and should include the code's origin or the original author's name. The Create performance task guidelines suggest comments like these:

| Source of the code | Example acknowledgment |
|--------------------|------------------------|
| Teacher's starter code | This code was provided as starter code by my teacher. |
| An API or open-source code | This code was made freely available by [source of code]. |
| A generative AI tool | This code was generated using [AI tool name]. |
| A collaborator | This procedure was written with [partner's name]. |

## Code Written With Generative AI

Generative AI tools can produce incomplete code, code with errors, inefficient code, code that introduces bias, or code too complicated to explain. You are responsible for reviewing and understanding any code co-written with an AI tool, testing that it works, and being able to explain it in detail.
      `
    },
    {
      id: "cspcd5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Notes written into a program for people to read, which do not affect how it runs, are called _______.

2) An acknowledgment of borrowed code should include its origin or the original author's _______.

3) Program documentation should be written _______ development, not only at the end.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["comments", "name", "throughout"],
        hint1: "They often start with // or #.",
        hint2: "Who wrote it?",
        hint3: "From start to finish.",
        explanation: "Comments are in-program documentation. Acknowledgments name the source or author. Documentation should happen throughout development."
      }
    },
    {
      id: "cspcd5-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Code produced with help from a generative AI tool should be ___",
            options: ["acknowledged, reviewed, and understood", "used as is, with no comment", "described as entirely your own", "deleted before the program is shared"]
          },
          {
            label: "In a programming environment that does not support comments, documentation can ___",
            options: ["be written in a separate document", "be left out entirely", "be stored in variable names only", "be given only out loud"]
          },
          {
            label: "A procedure that a teammate wrote and that you use in your program should be ___",
            options: ["acknowledged in the documentation", "renamed so it looks like yours", "copied with no note of its source", "removed before you share the program"]
          }
        ],
        correctAnswers: ["acknowledged, reviewed, and understood", "be written in a separate document", "acknowledged in the documentation"],
        hint1: "You are responsible for code you use.",
        hint2: "Documentation does not have to live inside the code.",
        hint3: "Credit collaborators.",
        explanation: "AI-assisted code must be acknowledged and understood. Documentation can live outside the program. Code from collaborators or other sources is acknowledged in the documentation."
      }
    },
    {
      id: "cspcd5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Documentation

- Comments are for people; they never change what a program does.
- "Why document?" → it helps you and others develop and maintain correct programs, alone or in a team.
- "Code from somewhere else?" → acknowledge it, naming its origin or author.
- "Code from an AI tool?" → acknowledge it, test it, and make sure you can explain it.
      `
    },
    {
      id: "cspcd5-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A student uses a procedure from an open-source library in a program. Which is the most appropriate way to handle it?",
            options: [
              "Rename the procedure so it matches the student's own style",
              "Leave it unmarked, since open-source code is free to use",
              "Add a comment that credits where the code came from",
              "Rewrite each line so that no acknowledgment is needed"
            ],
            correctAnswer: 2,
            explanation: "Code from another source is acknowledged in the documentation, naming its origin or author. Being free to use does not remove the need to credit it."
          },
          {
            question: "A generative AI tool writes a procedure for a student's program. It seems to work on two test inputs. What should the student do next?",
            options: [
              "Submit it, since AI tools produce correct and efficient code.",
              "Delete the two tests, since the tool has already checked it.",
              "Try it on boundary values and learn how it works before relying on it.",
              "Rename its variables so the code looks student-written."
            ],
            correctAnswer: 2,
            explanation: "AI tools can produce code with errors or hidden problems. The student is responsible for testing the code, understanding it, and acknowledging the tool."
          }
        ]
      }
    }
  ]
};
