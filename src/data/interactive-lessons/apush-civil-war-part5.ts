export const apushCivilWarPart5Data = {
  topicSlug: 'apush-civil-war',
  sections: [
    {
      id: 'apushciv5-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 The Civil War

**Part 5 of 7 — Emancipation as a Process, the War in the West, and Misconceptions**

---

| Section |
|---------|
| 📖 Emancipation Step by Step, 1861–1865 |
| Black Soldiers and the Fight for Equal Treatment |
| From Proclamation to Amendment |
| The War and Native Nations in the West |
| How Historians Have Explained the War |
| Common Misconceptions |

> 🔑 **Key Concept:** The CED says Lincoln's Emancipation Proclamation changed the purpose of the war, and that African Americans' service in the Union army helped bring about Union victory. Emancipation was not one act on one day. It was a **four-year process** driven by enslaved people who fled to Union lines, by Congress, by the army, and by the president, and it ended only with a constitutional amendment.
      `
    },
    {
      id: 'apushciv5-steps',
      type: 'text' as const,
      content: `
## 📖 Emancipation Step by Step, 1861–1865

| Date | Step | Who Acted | What It Did |
|---|---|---|---|
| May 1861 | **"Contraband" policy** | General Benjamin Butler at Fort Monroe, Virginia | Refused to return three men who escaped from Confederate labor, calling them "contraband of war" |
| Aug 1861 | **First Confiscation Act** | Congress | Allowed seizure of property, including enslaved people, used to support the rebellion |
| Apr 1862 | **Emancipation in Washington, D.C.** | Congress | Freed about 3,000 people, with payment to owners loyal to the Union |
| Jun 1862 | **Ban on slavery in the territories** | Congress | Enacted the free-soil position the Republicans had run on since 1854 |
| Jul 1862 | **Second Confiscation Act** and **Militia Act** | Congress | Freed enslaved people of rebel owners who reached Union lines; allowed Black men to be employed in military service |
| Sept 22, 1862 | **Preliminary Emancipation Proclamation** | Lincoln | Warned rebel states that their enslaved people would be freed on January 1 |
| Jan 1, 1863 | **Emancipation Proclamation** | Lincoln | Freed enslaved people in areas still in rebellion; authorized Black enlistment |
| 1864–1865 | **State abolition** | Maryland (1864), Missouri (1865) and new governments in occupied areas | Ended slavery in some places the Proclamation had not covered |
| Jan 31, 1865 | **13th Amendment passes the House** | Congress | Sent to the states for ratification |
| Dec 6, 1865 | **13th Amendment ratified** | The states | Abolished slavery everywhere, including Kentucky and Delaware |

### Reading the Timeline

- **Enslaved people moved first.** The contraband policy began because people fled to a Union fort. Every later step responded to a situation they had created.
- **Congress moved before Lincoln.** The Confiscation Acts and the D.C. and territorial bans all came before the Proclamation.
- **The Proclamation's limits were deliberate.** It exempted the loyal border states and Union-occupied areas such as Tennessee, because Lincoln justified it only as a **war measure** against states in rebellion.
- **Freedom spread with the army.** In practice the Proclamation freed people wherever Union troops advanced. In Texas, General Gordon Granger announced it in Galveston on **June 19, 1865**, the origin of **Juneteenth**.
      `
    },
    {
      id: 'apushciv5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The "contraband" policy of 1861 is best understood as evidence that',
            options: [
              'Lincoln had planned to end slavery from the first weeks of the war',
              'the actions of enslaved people forced the Union to change course',
              'Congress opposed any interference with slavery during the war',
              'border-state leaders asked the army to free enslaved people'
            ],
            correctAnswer: 1,
            explanation: 'Butler created the policy only because three men escaped to Fort Monroe, so the initiative came from enslaved people. Lincoln moved cautiously in 1861, Congress soon passed the First Confiscation Act, and border-state leaders opposed emancipation.'
          },
          {
            question: 'Why did the Emancipation Proclamation exempt the loyal border states?',
            options: [
              'Lincoln claimed authority only over areas in rebellion under his war powers',
              'Border-state voters had already ended slavery through state referendums',
              'The Supreme Court had ruled that the border states could keep slavery',
              'Britain had demanded the exemption as a condition of staying neutral'
            ],
            correctAnswer: 0,
            explanation: 'Lincoln grounded the Proclamation in his power as commander in chief to weaken the enemy, which did not reach states loyal to the Union, and he also feared pushing them toward the Confederacy. Kentucky and Delaware still had slavery in 1865, and neither the Court nor Britain required the exemption.'
          }
        ]
      }
    },
    {
      id: 'apushciv5-soldiers',
      type: 'text' as const,
      content: `
## Black Soldiers and the Fight for Equal Treatment

About **180,000** Black men served in the Union army, roughly one in ten Union soldiers, and about 19,000 more served in the navy. Most had been enslaved. The War Department created the **Bureau of Colored Troops** in May 1863 to organize the **United States Colored Troops (USCT)**.

| Event | Date | Significance |
|---|---|---|
| **Fort Wagner** | July 18, 1863 | The 54th Massachusetts led an assault on a fort guarding Charleston harbor; it failed with heavy losses, but Northern newspapers praised the men's courage |
| **Fort Pillow** | April 12, 1864 | Confederate troops under Nathan Bedford Forrest killed many Black soldiers trying to surrender in Tennessee |
| **Equal pay** | June 1864 | After months of protest, in which some regiments refused unequal pay altogether, Congress granted equal pay |

Black soldiers faced extra dangers: the Confederate government threatened to **enslave or execute** captured Black soldiers and their white officers, and the exchange of prisoners broke down in part because the Confederacy refused to treat Black soldiers as prisoners of war.

> 🔑 **AP Connection:** Black military service links the war to Reconstruction. Men who had fought for the Union pressed for **citizenship and the vote** after 1865, and many became Reconstruction-era officeholders.

## From Proclamation to Amendment

Lincoln worried that the courts or a future Congress might treat the Proclamation as a temporary war measure. The **13th Amendment** made abolition permanent.

- The **Senate** passed it in April 1864, but it fell short of two-thirds in the **House** in June 1864.
- After Lincoln's reelection, the administration lobbied lame-duck Democrats, and the House passed it on **January 31, 1865**, by 119 to 56.
- It was **ratified on December 6, 1865**, with votes from Southern states reorganized under President Andrew Johnson.

> "Neither slavery nor involuntary servitude, except as a punishment for crime whereof the party shall have been duly convicted, shall exist within the United States, or any place subject to their jurisdiction."
>
> — Thirteenth Amendment, Section 1, ratified December 6, 1865

The phrase "except as a punishment for crime" would matter after the war, when Southern states used vagrancy laws and convict leasing to force freed people into labor (see the Reconstruction lesson).
      `
    },
    {
      id: 'apushciv5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Put the Steps in Order** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The first of these steps, taken by a general at a Virginia fort in 1861, was the ___',
            options: ['Second Confiscation Act', 'contraband policy', 'Militia Act', 'Bureau of Colored Troops']
          },
          {
            label: 'The step that freed people in rebel areas and authorized Black enlistment (January 1863) was the ___',
            options: ['Emancipation Proclamation', 'Thirteenth Amendment', 'First Confiscation Act', 'Militia Act']
          },
          {
            label: 'The step that ended slavery in Kentucky and Delaware (December 1865) was the ___',
            options: ['Second Confiscation Act', 'Emancipation Proclamation', 'Thirteenth Amendment', 'contraband policy']
          }
        ],
        correctAnswers: ['contraband policy', 'Emancipation Proclamation', 'Thirteenth Amendment'],
        hint1: 'General Butler used a term for enemy property that could be seized.',
        hint2: 'Lincoln issued it on New Year\'s Day under his war powers.',
        hint3: 'Only a change to the Constitution could reach loyal states.',
        explanation: 'The contraband policy (1861) began the process, the Emancipation Proclamation (1863) turned the war against slavery in rebel areas, and the Thirteenth Amendment (1865) ended slavery everywhere, including the loyal border states.'
      }
    },
    {
      id: 'apushciv5-west',
      type: 'text' as const,
      content: `
## The War and Native Nations in the West

The war did not pause federal expansion. With regular troops pulled east, state volunteers and territorial governments took over Indian policy, often with brutal results.

| Event | Date | What Happened |
|---|---|---|
| **Dakota War** | Aug–Sept 1862 | Dakota people in Minnesota, starving after federal annuity payments were late, went to war. After their defeat, military commissions sentenced 303 men to death; Lincoln reduced the list, and **38 were hanged at Mankato on December 26, 1862** |
| **Navajo Long Walk** | 1864 | After Kit Carson's campaign destroyed Navajo crops and herds, thousands were forced to march to Bosque Redondo in New Mexico, where many died |
| **Sand Creek Massacre** | Nov 29, 1864 | Colorado volunteers under John Chivington attacked a Cheyenne and Arapaho camp that believed it was under army protection, killing well over 100 people, most of them women, children and elderly |

In Indian Territory (present-day Oklahoma), the Cherokee, Creek, Choctaw, Chickasaw and Seminole nations, many of whose leaders held enslaved people, signed treaties with the Confederacy, though some members fought for the Union. After the war the United States used those treaties to force the nations to give up land and, in most cases, to accept the people they had enslaved as citizens.

> 🔑 **AP Connection:** These events connect Period 5 to Period 6. The same federal power that ended slavery was turned on Western Native nations, and the Homestead and Pacific Railway Acts (Part 4) accelerated settlement on their lands.
      `
    },
    {
      id: 'apushciv5-historiography',
      type: 'text' as const,
      content: `
## How Historians Have Explained the War

| Interpretation | When | Main Claim | Weakness |
|---|---|---|---|
| **Lost Cause** | From 1866 (Edward Pollard, *The Lost Cause*) | The South fought for states' rights and honor; slavery was incidental; enslaved people were loyal | Contradicted by secession documents (Part 3) and by the mass flight of enslaved people |
| **Economic conflict** | 1920s (Charles and Mary Beard) | An industrial North and an agrarian South clashed over tariffs and economic power | Tariffs were low in 1860; secession documents barely mention them |
| **Needless war (revisionists)** | 1930s–1940s | A "blundering generation" of politicians and agitators caused an avoidable war | Treats slavery as a manageable issue rather than a moral and political crisis |
| **Current consensus** | From the 1950s–1960s on | Slavery and its expansion caused secession, and emancipation became the war's central result | Historians still debate how much credit goes to Lincoln, Congress, soldiers and enslaved people themselves |

## Common Misconceptions

| Misconception | Correction |
|---|---|
| "The war was about states' rights, not slavery." | Secessionists said the right at stake was the right to hold slaves, and they wanted federal power used to return fugitives |
| "The Emancipation Proclamation freed all enslaved people." | It applied only to areas in rebellion; the 13th Amendment ended slavery everywhere |
| "Lincoln was an abolitionist in 1861." | He opposed slavery's expansion, not its existence in the states, and moved to emancipation as a war measure |
| "Northerners fought to end slavery from the start." | Most Union soldiers enlisted to save the Union; many came to support emancipation as a way to win |
| "The Confederacy had no chance." | Contingency mattered: a different 1864 election or a decisive Confederate win in 1862–1863 could have changed the outcome |

## The 2027 Exam Connection

- From May 2027 every SAQ is **sourced**. SAQ 1 uses a secondary text (a historian's argument, like the interpretations above), SAQ 2 a primary text, and SAQ 3 a primary or secondary **non-text** source such as a map, chart or image. Each covers a different period.
- The **LEQ** is one required prompt. A causation prompt on the Civil War rewards the time-scale structure from Part 2 and the weighing of causes from Part 4.
      `
    },
    {
      id: 'apushciv5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice: Historical Interpretation** 🎯

> **Secondary source (summary):** A historian writing in the 1920s argued that the Civil War was at bottom a conflict between an industrial, capitalist North and an agricultural, planter South over control of the national government and its economic policies, such as tariffs, banking and land.
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following pieces of evidence would most directly challenge the historian\'s argument?',
            options: [
              'Republicans passed protective tariffs and banking laws during the war',
              'Northern factories produced most of the nation\'s manufactured goods',
              'Secession declarations focused on slavery and barely mentioned tariffs',
              'Planters controlled the politics of most Southern states before 1860'
            ],
            correctAnswer: 2,
            explanation: 'If the conflict were mainly about economic policy, the states that seceded would have said so, but their declarations centered on slavery. The other three pieces of evidence fit the economic interpretation rather than challenge it.'
          },
          {
            question: 'Which statement best describes the current consensus among historians about the cause of the war?',
            options: [
              'A blundering generation of politicians caused a war that was not needed',
              'Disputes over tariffs and banking divided the two regions more than slavery',
              'Slavery and its expansion into the West caused secession and the war',
              'Southern states left mainly to protect local self-rule in matters of education'
            ],
            correctAnswer: 2,
            explanation: 'Most historians since the 1960s, drawing on secession documents and the politics of the 1850s, agree that slavery and its expansion caused secession. The other choices restate the revisionist and economic interpretations or misstate the issues of 1860.'
          }
        ]
      }
    }
  ]
}
