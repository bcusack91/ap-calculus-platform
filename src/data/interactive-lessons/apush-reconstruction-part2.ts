export const apushReconstructionPart2Data = {
  topicSlug: 'apush-reconstruction',
  sections: [
    {
      id: 'apushrec2-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 Reconstruction

**Part 2 of 7 — The Fight Over Who Controls Reconstruction, 1863–1870**

---

| Section |
|---------|
| 📖 The Constitutional Question |
| Lincoln and Congress, 1863–1865 |
| Johnson's Restoration, 1865 |
| Congress Takes Control, 1866 |
| The Fourteenth Amendment, Section by Section |
| Military Reconstruction, Impeachment and the Fifteenth Amendment |

> 🔑 **Key Concept:** The CED (Key Concept 5.3.II) says that efforts by **radical and moderate Republicans** to change the balance of power between Congress and the presidency and to reshape Southern society produced the 14th and 15th Amendments. Part 1 compared the plans. This part follows the **sequence of decisions**, because each move by Andrew Johnson pushed moderate Republicans toward the Radicals.
      `
    },
    {
      id: 'apushrec2-question',
      type: 'text' as const,
      content: `
## 📖 The Constitutional Question

The Constitution said nothing about how seceded states should return. Each side built its plan on a different theory.

| Theory | Held By | Implication |
|---|---|---|
| The states **never left**; individuals rebelled | Lincoln, Johnson | The president can pardon rebels and restore loyal governments quickly |
| The states **committed suicide** as states | Senator Charles Sumner | Congress governs them as territories |
| The states are **conquered provinces** | Representative Thaddeus Stevens | Congress may impose any terms, including land redistribution |
| The states **forfeited their rights** and Congress decides when they return | Moderate Republicans | Congress sets conditions for readmission |

### Radicals and Moderates

| Group | Leaders | Goals |
|---|---|---|
| **Radical Republicans** | Stevens, Sumner, Benjamin Wade | Black male suffrage, long federal control, and for Stevens, land for freedpeople |
| **Moderate Republicans** | Lyman Trumbull, William Pitt Fessenden | Protect freedpeople's basic civil rights and secure the war's results, then restore the states |

The moderates were the majority. Reconstruction became "Radical" only because Johnson's actions convinced moderates that nothing less would protect the freedpeople or the Republican Party.
      `
    },
    {
      id: 'apushrec2-lincoln',
      type: 'text' as const,
      content: `
## Lincoln and Congress, 1863–1865

| Plan | Date | Terms |
|---|---|---|
| **Proclamation of Amnesty and Reconstruction** (the "Ten Percent Plan") | December 1863 | Pardon for most Confederates who swore future loyalty and accepted emancipation; a state could form a government once 10 percent of its 1860 voters took the oath |
| **Wade-Davis Bill** | July 1864 | A **majority** of white men had to swear loyalty, and only those who could swear they had **never** supported the Confederacy could vote for or serve in the new state convention |
| **Lincoln's response** | July 1864 | **Pocket veto**: he did not sign the bill before Congress adjourned |

Lincoln wanted to use lenient terms as a **war measure**, to pull wavering Southerners away from the Confederacy. Louisiana, Arkansas and Tennessee formed governments under his plan, but Congress refused to seat their representatives.

Congress also created the **Freedmen's Bureau** (March 1865), headed by General Oliver O. Howard, to supply food and medical care, supervise labor contracts, settle disputes and open schools.

In his last public speech (April 11, 1865), Lincoln regretted that Louisiana's new government had not given Black men the vote: "I would myself prefer that it were now conferred on the very intelligent, and on those who serve our cause as soldiers." Three days later John Wilkes Booth shot him at Ford's Theatre, and Andrew Johnson became president.
      `
    },
    {
      id: 'apushrec2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Wade-Davis Bill (1864) differed from Lincoln\'s Ten Percent Plan mainly in that it',
            options: [
              'required a majority of white men to swear loyalty before a state could return',
              'gave the vote to all Black men in a state before it could be readmitted',
              'divided the former Confederacy into military districts run by generals',
              'promised forty acres of confiscated land to every family of freedpeople'
            ],
            correctAnswer: 0,
            explanation: 'Wade-Davis raised the threshold from 10 percent to a majority and barred anyone who had supported the Confederacy from the new state conventions. Black male suffrage and military districts came with the 1867 Reconstruction Acts, and Congress never passed a land grant.'
          },
          {
            question: 'Which statement best describes the moderate Republicans in 1865?',
            options: [
              'They wanted to seize planters\' land and redistribute it to freedpeople',
              'They hoped to protect basic civil rights, then restore Southern states',
              'They agreed with Johnson that freedpeople needed no federal protection',
              'They believed former Confederate states should be governed as colonies'
            ],
            correctAnswer: 1,
            explanation: 'Moderates such as Lyman Trumbull wanted to guarantee freedpeople\'s civil rights and then readmit the states. Land redistribution and territorial rule were Radical ideas, and moderates broke with Johnson when he rejected even basic protections.'
          }
        ]
      }
    },
    {
      id: 'apushrec2-johnson',
      type: 'text' as const,
      content: `
## Johnson's Restoration, 1865

Andrew Johnson of Tennessee was a Democrat who had stayed loyal to the Union, and Lincoln chose him as his running mate in 1864 to attract War Democrats. He hated the planter elite, but he did not believe in Black equality.

### What Johnson Did (May–December 1865)

- **Amnesty proclamation (May 29, 1865):** Pardoned most Confederates who took a loyalty oath. High Confederate officials and men with taxable property worth more than **\\$20,000** had to apply to him personally, and he then pardoned thousands of them.
- **Terms for the states:** Each state had to abolish slavery, ratify the 13th Amendment, declare secession void and refuse to pay Confederate debts. He required nothing about Black rights.
- **Land:** He ordered land that had been confiscated or abandoned returned to pardoned owners, overturning the settlements made under Sherman's Special Field Order No. 15.

### What the Restored Governments Did

- Southern voters and legislatures chose former Confederate leaders for Congress, including Alexander Stephens, the Confederate vice president, whom Georgia's legislature elected to the Senate.
- Legislatures passed **Black Codes** that limited freedpeople's ability to own or rent land, move freely or leave labor contracts.

When Congress met in **December 1865**, the Republican majority refused to seat the Southern members and created a **Joint Committee on Reconstruction** to write its own terms.
      `
    },
    {
      id: 'apushrec2-congress',
      type: 'text' as const,
      content: `
## Congress Takes Control, 1866

| Date | Event | What It Showed |
|---|---|---|
| Feb 1866 | Johnson **vetoes** a bill extending the Freedmen's Bureau; the veto is sustained | Johnson opposed even moderate measures |
| Mar 27, 1866 | Johnson **vetoes** the Civil Rights Act of 1866 | The act made all persons born in the United States citizens (except Native Americans not taxed) with equal rights to make contracts, sue and own property |
| Apr 9, 1866 | Congress **overrides** the veto | Moderates and Radicals now united against the president |
| May–Jul 1866 | Race massacres in **Memphis** and **New Orleans** | Northern voters saw white Southern violence against freedpeople and Black and white Republicans |
| Jun 1866 | Congress sends the **14th Amendment** to the states | To place the Civil Rights Act beyond the reach of a future Congress or court |
| Jul 1866 | Tennessee ratifies and is readmitted | The only Confederate state spared military Reconstruction |
| Aug–Sept 1866 | Johnson's speaking tour, the **"Swing Around the Circle"** | His angry speeches hurt his cause |
| Nov 1866 | Republicans win more than **two-thirds** of both houses | Congress can override any veto |

The other ten former Confederate states, encouraged by Johnson, **rejected** the 14th Amendment. That refusal led directly to the Reconstruction Acts of 1867.
      `
    },
    {
      id: 'apushrec2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Put the Chain of Events in Order** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Restored Southern governments passed laws restricting freedpeople\'s labor and movement, known as the ___',
            options: ['Enforcement Acts', 'Black Codes', 'Reconstruction Acts', 'Confiscation Acts']
          },
          {
            label: 'Congress answered with a law defining citizenship and passed it over Johnson\'s veto in April 1866, the ___',
            options: ['Civil Rights Act of 1866', 'Wade-Davis Bill', 'Tenure of Office Act', 'Civil Rights Act of 1875']
          },
          {
            label: 'When ten Southern states rejected the 14th Amendment, Congress imposed military districts through the ___',
            options: ['Black Codes', 'Enforcement Acts', 'Confiscation Acts', 'Reconstruction Acts']
          }
        ],
        correctAnswers: ['Black Codes', 'Civil Rights Act of 1866', 'Reconstruction Acts'],
        hint1: 'These state laws were passed under Johnson\'s plan in late 1865.',
        hint2: 'It was the first of two civil rights acts passed during Reconstruction.',
        hint3: 'Passed in March 1867, they divided ten states into five districts.',
        explanation: 'The Black Codes provoked the Civil Rights Act of 1866, which Congress protected with the 14th Amendment; when the South rejected that amendment, Congress passed the Reconstruction Acts.'
      }
    },
    {
      id: 'apushrec2-fourteenth',
      type: 'text' as const,
      content: `
## The Fourteenth Amendment, Section by Section

| Section | What It Says | Why It Mattered |
|---|---|---|
| **1** | All persons born or naturalized in the United States are citizens; no state may abridge their **privileges or immunities**, deny **due process**, or deny **equal protection of the laws** | Overturned *Dred Scott*; became the basis of 20th-century civil rights law |
| **2** | A state that denies the vote to adult male citizens loses seats in the House in proportion | Pressured the South to allow Black male voting without requiring it; women's rights leaders objected to the word "male" |
| **3** | Former officials who had sworn to support the Constitution and then joined the rebellion may not hold office unless two-thirds of Congress votes to allow it | Kept much of the Confederate leadership out of office for several years |
| **4** | The Confederate debt is void, and no one may be paid for the loss of enslaved people | Guaranteed that emancipation was permanent and uncompensated |
| **5** | Congress may enforce the amendment with legislation | The basis of the Enforcement Acts (1870–1871) |

> 🔑 **AP Connection:** Section 1 is the part of the amendment you are most likely to see on the exam. Know its three clauses and connect them to later events: the Court narrowed them in the *Slaughterhouse Cases* (1873) and *Plessy v. Ferguson* (1896), then revived equal protection in *Brown v. Board of Education* (1954).

## Military Reconstruction, Impeachment and the Fifteenth Amendment

### The Reconstruction Acts (March 1867)

- Divided ten former Confederate states into **five military districts**, each under a general.
- To be readmitted, a state had to hold a convention elected by **all adult men, Black and white**, write a new constitution with Black male suffrage, and **ratify the 14th Amendment**.
- By 1868 most of these states had been readmitted; Virginia, Mississippi, Texas and Georgia returned in 1870, after also ratifying the 15th Amendment.

### Impeachment (1868)

- The **Tenure of Office Act** (1867) barred the president from removing Senate-confirmed officials without Senate approval.
- Johnson dismissed Secretary of War **Edwin Stanton**, who supported congressional Reconstruction, in February 1868. The House impeached him days later.
- The Senate voted **35 to 19** to convict, **one vote short** of the two-thirds required. Seven Republicans voted to acquit, partly because they did not want to weaken the presidency and partly because Johnson signaled through allies that he would stop obstructing Reconstruction.

### The Election of 1868 and the 15th Amendment

Ulysses S. Grant won with 214 electoral votes to 80 for Horatio Seymour. His popular-vote margin was only about 300,000, while hundreds of thousands of newly enfranchised Black Southerners voted for him. Republicans concluded that Black suffrage must be protected nationally.

> "The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of race, color, or previous condition of servitude."
>
> — Fifteenth Amendment, Section 1, ratified February 1870

Note what the amendment does **not** say: it does not forbid literacy tests, poll taxes or residence requirements, and it does not mention sex. Southern states would later use exactly those gaps.
      `
    },
    {
      id: 'apushrec2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice: Causation** 🎯

> "The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of race, color, or previous condition of servitude."
>
> — Fifteenth Amendment, Section 1, ratified February 1870
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following most directly led Republicans to propose the amendment in the excerpt?',
            options: [
              'Southern states had already granted women the right to vote',
              'Grant\'s narrow 1868 victory depended on Black Southern voters',
              'The Supreme Court had ruled that the Constitution banned literacy tests',
              'Northern states had all adopted Black male suffrage on their own'
            ],
            correctAnswer: 1,
            explanation: 'Grant won the popular vote by about 300,000 with heavy Black support in the South, so Republicans moved to protect Black suffrage everywhere. No Southern state had woman suffrage, the Court had not banned literacy tests, and many Northern states still denied Black men the vote.'
          },
          {
            question: 'The wording of the amendment in the excerpt most directly allowed which later development?',
            options: [
              'Federal laws that let women vote in national elections after 1870',
              'Military districts that governed Southern states until the 1890s',
              'State poll taxes and literacy tests that kept Black men from voting',
              'Court rulings that struck down the Black Codes of 1865 as illegal'
            ],
            correctAnswer: 2,
            explanation: 'The amendment barred denial of the vote by race but said nothing about taxes, tests or residence, so Southern states later used those devices to disfranchise Black men. Women did not win the national vote until 1920, military rule ended in the 1870s, and the Black Codes were replaced by congressional action, not court rulings.'
          }
        ]
      }
    }
  ]
}
