export const apushReconstructionPart1Data = {
  topicSlug: 'apush-reconstruction',
  sections: [
    {
      id: 'apushrec1-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 Reconstruction

**Part 1 of 7 — Rebuilding the South (1865–1877)**

---

| Section |
|---------|
| 📖 Competing Reconstruction Plans |
| The Reconstruction Amendments |
| African American Political Participation |
| 📌 Resistance & the End of Reconstruction |
| Legacy & Long-Term Impact |

> 🔑 **Key Concept:** The AP exam frames Reconstruction as a **contested revolution** — a brief period of remarkable progress for formerly enslaved people, followed by violent backlash and the reassertion of white supremacy. Know the amendments, the achievements, and why Reconstruction ultimately failed.
      `
    },
    {
      id: 'apushrec1-plans',
      type: 'text' as const,
      content: `
## 📖 Competing Visions for Reconstruction

| Plan | Author | Key Terms |
|------|--------|-----------|
| **Lincoln's 10% Plan** | Abraham Lincoln | Lenient: if 10% of voters took a loyalty oath, a state could rejoin; pardon most Confederates; no explicit plan for freed people's rights |
| **Wade-Davis Bill** (1864) | Radical Republicans | Stricter: majority of voters must swear loyalty; banned former Confederates from voting; Lincoln pocket-vetoed it |
| **Johnson's Plan** | Andrew Johnson | Similar to Lincoln's but excluded wealthy planters; pardoned most Confederates; allowed Black Codes; vetoed civil rights legislation |
| **Congressional (Radical) Reconstruction** | Radical Republicans | Divided South into 5 military districts; required states to ratify 14th Amendment; guaranteed Black male suffrage |

### The Reconstruction Amendments

| Amendment | Year | Provision | Significance |
|-----------|------|-----------|-------------|
| **13th** | 1865 | Abolished slavery | Made emancipation permanent and constitutional |
| **14th** | 1868 | Defined citizenship; equal protection under the law; due process | Overturned Dred Scott; became the basis for modern civil rights law |
| **15th** | 1870 | Prohibited denying the vote based on race | Enfranchised Black men (but not women) |

> ⚠️ **AP Alert:** The 14th Amendment is the most frequently tested amendment on the AP exam. Its **equal protection clause** and **due process clause** have been used in landmark cases from Brown v. Board to Obergefell v. Hodges.
      `
    },
    {
      id: 'apushrec1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why did Radical Republicans reject President Johnson\'s Reconstruction plan?',
            options: [
              'Johnson pardoned most Confederates and allowed Southern states to pass Black Codes that effectively re-enslaved freed people',
              'Johnson\'s plan was too harsh on the South and prevented economic recovery',
              'Johnson demanded that the South ratify the 14th Amendment before rejoining the Union',
              'Johnson\'s plan granted full citizenship and voting rights to all African Americans'
            ],
            correctAnswer: 0,
            explanation: 'Johnson\'s lenient plan allowed former Confederate leaders to regain power. Southern states passed Black Codes — laws that restricted African Americans\' freedom of movement, labor, and rights — essentially recreating slavery by another name. Radical Republicans saw this as a betrayal of the war\'s purpose and took control of Reconstruction.'
          },
          {
            question: 'The 14th Amendment is historically significant primarily because it:',
            options: [
              'Established birthright citizenship and guaranteed equal protection under the law, becoming the constitutional foundation for civil rights',
              'Abolished slavery throughout the United States',
              'Granted women the right to vote in federal elections',
              'Created the Electoral College system for presidential elections'
            ],
            correctAnswer: 0,
            explanation: 'The 14th Amendment (1868) defined citizenship for the first time ("all persons born or naturalized in the United States"), overturning Dred Scott. Its equal protection and due process clauses have been used in virtually every major civil rights case since. The 13th Amendment abolished slavery; the 19th granted women\'s suffrage.'
          }
        ]
      }
    },
    {
      id: 'apushrec1-achievements',
      type: 'text' as const,
      content: `
## Achievements & Backlash

### African American Achievements During Reconstruction

- **Political participation:** ~2,000 African Americans held public office; 16 served in Congress; Hiram Revels became the first Black U.S. Senator (1870, Mississippi)
- **Education:** Freedmen's Bureau established schools; historically Black colleges founded (Howard, Fisk, Morehouse)
- **Economic:** Formerly enslaved people sought land ownership, though "40 acres and a mule" was largely unfulfilled
- **Family:** Reunited families separated by slavery; legalized marriages

### White Supremacist Resistance

| Method | Details |
|--------|---------|
| **Ku Klux Klan** | Founded 1866 in Tennessee; used violence, intimidation, lynching to suppress Black voting and political participation |
| **Black Codes** | State laws restricting freed people's rights (vagrancy laws, apprenticeship codes, labor contracts) |
| **Sharecropping** | Economic system that trapped freed people in cycles of debt; worked land for a share of the crop; effectively economic bondage |
| **Violence** | Massacres at Memphis (1866) and New Orleans (1866) targeting African Americans and white Republicans |

### End of Reconstruction

- **Compromise of 1877:** Disputed election of 1876 (Hayes vs. Tilden); Hayes became president in exchange for **withdrawing federal troops** from the South
- Result: Without federal protection, Southern states systematically disenfranchised Black voters and imposed **Jim Crow** segregation laws
- The gains of Reconstruction were rolled back for nearly a century — until the Civil Rights Movement of the 1950s–60s
      `
    },
    {
      id: 'apushrec1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What federal agency, established in 1865, provided food, education, and legal assistance to formerly enslaved people?

2) What agricultural labor system trapped freed people in cycles of debt by working land for a share of the crop?

3) What 1877 political deal effectively ended Reconstruction by withdrawing federal troops from the South?

Use the exact historical term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["Freedmen's Bureau", 'sharecropping', 'Compromise of 1877'],
        hint1: "The Freedmen's ___",
        hint2: 'Working for a "share" of the "crop"',
        hint3: 'The Compromise of ___',
        explanation: "The Freedmen's Bureau (1865–1872) was a critical institution for the transition from slavery to freedom. Sharecropping replaced slavery with economic dependence. The Compromise of 1877 ended federal enforcement of civil rights in the South."
      }
    },
    {
      id: 'apushrec1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The white supremacist organization founded in 1866 that used violence to suppress Black political participation was the ___',
            options: ['Ku Klux Klan', "Freedmen's Bureau", 'Republican Party', 'Copperheads']
          },
          {
            label: 'The constitutional amendment that defined citizenship and guaranteed equal protection under the law was the ___',
            options: ['14th Amendment', '13th Amendment', '15th Amendment', '1st Amendment']
          },
          {
            label: 'The system of racial segregation laws imposed in the South after Reconstruction is known as ___',
            options: ['Jim Crow', 'Black Codes', 'Martial law', 'Reconstruction Acts']
          }
        ],
        correctAnswers: ['Ku Klux Klan', '14th Amendment', 'Jim Crow'],
        hint1: 'Founded in Tennessee; targeted Black voters and Republican officeholders',
        hint2: 'Ratified in 1868; overturned Dred Scott',
        hint3: 'Named after a minstrel show character; lasted until the 1960s',
        explanation: 'The KKK used terrorism to overthrow Reconstruction governments. The 14th Amendment is the constitutional bedrock of civil rights. Jim Crow laws enforced racial segregation in the South from the 1870s until the Civil Rights Act of 1964.'
      }
    },
    {
      id: 'apushrec1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following BEST explains why Reconstruction is often characterized as an "unfinished revolution"?',
            options: [
              'The Reconstruction Amendments established legal equality, but the withdrawal of federal enforcement allowed Southern states to systematically deny those rights for nearly a century',
              'Reconstruction successfully achieved full racial equality, which was then maintained continuously',
              'The Reconstruction Amendments were never ratified by enough states to take effect',
              'Reconstruction only addressed economic inequality and ignored political or social rights'
            ],
            correctAnswer: 0,
            explanation: 'Reconstruction produced transformative legal changes (13th, 14th, 15th Amendments) but lacked sustained political will for enforcement. The Compromise of 1877 effectively abandoned freed people to sharecropping, Jim Crow, and disenfranchisement. The "revolution" was real but incomplete — its promises wouldn\'t be pursued again until the Civil Rights Movement.'
          },
          {
            question: 'A historian argues: "Sharecropping was slavery by another name." Which evidence BEST supports this interpretation?',
            options: [
              'Sharecroppers remained economically dependent on white landowners, were trapped by debt, and had limited freedom to leave — echoing key features of slavery',
              'Sharecroppers received wages equal to those of factory workers in the North',
              'The 13th Amendment explicitly permitted sharecropping as equivalent to slavery',
              'Sharecropping only existed in Northern states where slavery had been abolished earlier'
            ],
            correctAnswer: 0,
            explanation: 'While sharecroppers were legally free, the system\'s structure — working someone else\'s land, perpetual debt to the landowner\'s store, inability to leave until debts were paid — created conditions of economic bondage that closely resembled slavery. This continuity of exploitation is a key AP concept about the limits of Reconstruction.'
          }
        ]
      }
    }
  ]
}
