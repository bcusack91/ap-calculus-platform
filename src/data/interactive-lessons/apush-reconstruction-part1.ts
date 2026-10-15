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
            question: 'Why did Republicans in Congress reject President Johnson\'s Reconstruction plan in 1865–1866?',
            options: [
              'Johnson\'s plan punished the South so harshly that its recovery stalled',
              'Johnson\'s governments elected ex-Confederates and passed Black Codes',
              'Johnson\'s plan made the South ratify the 14th Amendment before readmission',
              'Johnson\'s plan gave full voting rights to all Black men in the South'
            ],
            correctAnswer: 1,
            explanation: 'Under Johnson\'s lenient terms, Southern states sent former Confederate leaders to Congress and passed Black Codes that restricted freedpeople\'s labor and movement. Johnson\'s plan was mild, not harsh, required only the 13th Amendment, and gave Black men no vote.'
          },
          {
            question: 'The 14th Amendment (1868) is historically significant mainly because it',
            options: [
              'abolished slavery and involuntary servitude throughout the nation',
              'barred the states from denying the vote on account of sex',
              'defined birthright citizenship and promised equal protection',
              'guaranteed Black men the right to vote in every federal election'
            ],
            correctAnswer: 2,
            explanation: 'The 14th Amendment made all persons born or naturalized in the United States citizens, overturning Dred Scott, and its equal protection and due process clauses became the basis of later civil rights law. The 13th abolished slavery, the 15th barred racial discrimination in voting, and the 19th addressed sex.'
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
            question: 'Which of the following best explains why historians often call Reconstruction an "unfinished revolution"?',
            options: [
              'Full racial equality was achieved and then kept in place for decades',
              'The new amendments were never ratified by enough states to take effect',
              'Constitutional equality was won, but federal enforcement was abandoned',
              'Reconstruction addressed economic rights but ignored political rights'
            ],
            correctAnswer: 2,
            explanation: 'The 13th, 14th and 15th Amendments established legal equality, but after federal enforcement ended in 1877 Southern states denied those rights for nearly a century. The amendments were ratified, equality was not achieved, and political rights were central to Reconstruction.'
          },
          {
            question: 'A historian argues that "sharecropping was slavery by another name." Which evidence best supports this interpretation?',
            options: [
              'Debts to landowners and merchants kept many families from leaving',
              'Sharecroppers earned wages equal to those of Northern factory workers',
              'The 13th Amendment named sharecropping as a lawful form of servitude',
              'Sharecropping was found mainly in Northern states after the war ended'
            ],
            correctAnswer: 0,
            explanation: 'Crop liens and store debts tied families to the land year after year, recreating the economic dependence of slavery even though sharecroppers were legally free. Sharecroppers were paid in shares, not wages, the amendment never mentions sharecropping, and the system was Southern.'
          }
        ]
      }
    }
  ]
}
