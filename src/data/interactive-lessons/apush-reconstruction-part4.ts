export const apushReconstructionPart4Data = {
  topicSlug: 'apush-reconstruction',
  sections: [
    {
      id: 'apushrec4-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 Reconstruction

**Part 4 of 7 — From Slavery to Sharecropping and the Reconstruction Governments**

---

| Section |
|---------|
| 📖 Why Sharecropping Emerged |
| Worked Example: A Sharecropper's Year |
| What Changed and What Continued |
| The Reconstruction State Governments |
| Reading the Data: Education and Officeholding |
| Redemption, State by State |

> 🔑 **Key Concept:** The CED says the 13th Amendment brought the war's most dramatic social and economic change, but that **the exploitative and soil-intensive sharecropping system endured for several generations**. This part uses the skill of **continuity and change over time (CCOT)**: what really changed for freedpeople between 1865 and 1877, and what stayed the same?
      `
    },
    {
      id: 'apushrec4-why',
      type: 'text' as const,
      content: `
## 📖 Why Sharecropping Emerged

Sharecropping was a **compromise between two groups who both lost something**.

| Group | What It Had | What It Lacked | What It Wanted |
|---|---|---|---|
| **Planters** | Land | Cash to pay wages (Confederate money and bonds were worthless; banks had failed) | A reliable labor force for cotton |
| **Freedpeople** | Labor | Land (redistribution had failed; see Part 3) and cash | Independence from gang labor and daily supervision |

Early postwar **wage contracts** failed on both sides: planters had no money and tried to run work gangs as before, while freedpeople refused gang labor and left. By the late 1860s a different arrangement spread across the cotton South.

### How the System Worked

- The landowner divided the plantation into small plots of about 20–50 acres and assigned each to a family.
- The family lived on the plot in its own cabin and worked it **without an overseer**.
- At harvest the crop was divided. A **sharecropper** who received land, tools, seed and a mule from the owner usually kept about **half**. A **share tenant** who brought his own mule and tools kept more, often two-thirds to three-quarters.

### The Crop-Lien System

Families needed food, clothing and supplies **before** the harvest. A local merchant, often the landowner himself, advanced them on credit and took a **lien** (a legal claim) on the coming crop. Merchants charged high prices and high interest, and they could require families to grow cotton, the crop that was easiest to sell, rather than food.
      `
    },
    {
      id: 'apushrec4-worked',
      type: 'text' as const,
      content: `
## Worked Example: A Sharecropper's Year

The numbers below are **hypothetical**, chosen to show how the system worked. Real terms varied by place and year.

| Step | Calculation | Result |
|---|---|---|
| 1. Family grows cotton on a 30-acre plot | 8 bales of 400 lb each at 10 cents per lb | Crop worth \\$320 |
| 2. Crop is divided with the landowner | Family's half of \\$320 | \\$160 for the family |
| 3. Store account during the year | \\$120 of food, cloth and supplies, at "credit prices" higher than cash prices | \\$120 owed |
| 4. Interest on the advance | 25 percent on \\$120 | \\$30 owed |
| 5. Settlement at harvest | \\$160 − \\$120 − \\$30 | **\\$10 left for the whole year** |

### What If Something Goes Wrong?

Suppose cotton prices fall to 8 cents per lb. The crop is now worth \\$256, the family's half is \\$128, and the family ends the year **\\$22 in debt**. Under the crop lien, that debt carries into next year, and the family cannot leave until it is paid.

### Why the Trap Deepened

| Pressure | Effect |
|---|---|
| Everyone grew cotton | Overproduction pushed prices down through the 1870s–1890s |
| Merchants kept the accounts | Many families could not read or check the figures; disputes were settled in courts run by white officials |
| Cotton exhausted the soil | Yields fell, so families needed more credit each year |
| Debt tied families to the land | Movement, the main bargaining power freedpeople had, was limited |

> 🔑 **AP Connection:** This is the mechanism behind the phrase "slavery by another name." But be precise: sharecroppers were **legally free**, families were together, and they controlled their daily work. The continuity was **economic dependence**, not legal bondage.
      `
    },
    {
      id: 'apushrec4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best explains why sharecropping spread across the cotton South after 1865?',
            options: [
              'Planters had land but no cash, and freedpeople had labor but no land',
              'Congress required former planters to rent land to Black farmers',
              'Freedpeople preferred work gangs with overseers to family plots',
              'Northern banks lent planters money on condition they hire tenants'
            ],
            correctAnswer: 0,
            explanation: 'Sharecropping let cash-poor planters get their land worked and let landless freedpeople farm as families without overseers. Congress passed no such requirement, freedpeople rejected gang labor, and Northern banks did not finance the arrangement.'
          },
          {
            question: 'In the crop-lien system, a merchant\'s lien was',
            options: [
              'a federal loan that helped freedpeople buy small plots of land',
              'a legal claim on a family\'s future crop in exchange for credit',
              'a tax on cotton that the state collected from the landowner',
              'a contract that set a fixed daily wage for field workers'
            ],
            correctAnswer: 1,
            explanation: 'A lien gave the merchant a legal claim on the harvest to secure the supplies he advanced. It was not a federal loan, a state tax or a wage contract.'
          },
          {
            question: 'In the worked example, what most directly turned a \\$10 surplus into a \\$22 debt?',
            options: [
              'A fall in the price of cotton',
              'A rise in the landowner\'s share',
              'A smaller plot assigned to the family',
              'A new state tax on cotton sold abroad'
            ],
            correctAnswer: 0,
            explanation: 'Only the price changed, from 10 to 8 cents per pound, which cut the family\'s half of the crop from \\$160 to \\$128 while the store debt stayed the same. The share, the plot and taxes did not change in the example.'
          }
        ]
      }
    },
    {
      id: 'apushrec4-ccot',
      type: 'text' as const,
      content: `
## What Changed and What Continued

| Area | Change (1865–1877) | Continuity |
|---|---|---|
| **Legal status** | Slavery abolished; citizenship (14th) and the vote for men (15th) | The 13th Amendment's exception for "punishment for crime" allowed **convict leasing**, in which states rented prisoners, most of them Black, to planters, mines and railroads |
| **Labor** | Family plots instead of gang labor; no overseers; women often left field work | Most freedpeople still grew cotton on land owned by whites |
| **Land** | Some families bought land, especially in the upper South | Most remained landless after Johnson restored planters' land |
| **Family** | Marriages legalized; families reunited | Apprenticeship laws in some states bound Black children to former owners until courts and the Freedmen's Bureau intervened |
| **Politics** | Black men voted and held office in large numbers | After Redemption, violence and later disfranchisement shut most Black men out |
| **Southern economy** | Railroads rebuilt; some growth of towns and industry | Dependence on one crop and on outside credit; the region stayed the nation's poorest |

### Building a CCOT Argument

**Claim:** "Between 1865 and 1877 freedpeople gained real freedom over their families, churches and daily work, but the failure of land reform preserved the **economic** subordination that slavery had imposed."

That claim names a change **and** a continuity and explains **why** the continuity survived (the land question), which is what earns the analysis point on an LEQ.
      `
    },
    {
      id: 'apushrec4-governments',
      type: 'text' as const,
      content: `
## The Reconstruction State Governments

From 1868 the new state governments were run by a Republican coalition of three groups. Their opponents gave two of them insulting names.

| Group | Who They Were |
|---|---|
| **Black voters and officeholders** | The great majority of Republican voters in the South; many leaders were ministers, teachers, Union veterans or free before the war |
| **"Carpetbaggers"** | Northern whites who moved South, many of them Union veterans, teachers, Freedmen's Bureau agents or investors; the name implied fortune hunters carrying everything in a cheap bag |
| **"Scalawags"** | Southern white Republicans, often upcountry farmers who had opposed secession or former Whigs who wanted economic development |

### What the Governments Did

- Established **public school systems** for Black and white children in most Southern states, usually for the first time on a statewide basis, though most schools were segregated.
- Wrote new constitutions that expanded voting rights, abolished imprisonment for debt, and in some states protected married women's property.
- Built or rebuilt hospitals, asylums, roads and railroads; railroad subsidies and some corruption raised state debts and taxes, which opponents used to attack the governments.

**Context for the corruption charge:** These years were also the era of the Tweed Ring in New York and scandals in the Grant administration. Corruption was national, but Southern Democrats used it to argue that Black voters could not govern.

## Reading the Data: Education and Officeholding

### Illiteracy Among Black Americans (U.S. Census)

| Year | Black Americans 10 and Older Who Could Not Read or Write |
|---|---|
| 1870 | about 80 percent |
| 1880 | about 70 percent |
| 1890 | about 57 percent |
| 1900 | about 45 percent |

**Reading the table:** Illiteracy fell by about 35 percentage points in 30 years, even after Reconstruction ended. The trend shows how hard freedpeople worked for education. It also shows a **continuity**: in 1900 almost half of Black Americans still could not read, the legacy of laws that had made it a crime to teach enslaved people.

### Black Officeholders

- Historians have identified more than **1,500** Black officeholders during Reconstruction, from local sheriffs and justices of the peace to members of Congress; some estimates reach 2,000.
- **Sixteen** Black men served in Congress: two senators from Mississippi, **Hiram Revels** (1870) and **Blanche K. Bruce** (1875–1881), and fourteen representatives.
- Black members held a **majority in the lower house** of South Carolina's legislature for most of the period, and P. B. S. Pinchback briefly served as acting governor of Louisiana (1872–1873).
- No Southern state elected a Black governor, and white Republicans held most top offices. Opponents' later claims of "Negro rule" were propaganda.
      `
    },
    {
      id: 'apushrec4-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What insulting name did white Southern Democrats give to Northern whites who moved South and joined the Republican Party?

2) Who in 1870 became the first Black member of the U.S. Senate, representing Mississippi?

3) What system let Southern states rent prisoners, most of them Black, to private companies and planters?

Use the exact historical term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['carpetbaggers', 'Hiram Revels', 'convict leasing'],
        hint1: 'The name refers to a cheap travel bag.',
        hint2: 'He took the Senate seat once held by Jefferson Davis.',
        hint3: 'Two words: prisoners were "leased" like property.',
        explanation: '"Carpetbaggers" was a Democratic insult for Northern Republicans in the South. Hiram Revels took his Senate seat in 1870. Convict leasing used the 13th Amendment\'s exception for punishment for crime to force prisoners into labor.'
      }
    },
    {
      id: 'apushrec4-redemption',
      type: 'text' as const,
      content: `
## Redemption, State by State

White Southern Democrats called their return to power **"Redemption."** It happened state by state, not all at once in 1877.

| Approximate Year Democrats Regained Control | States |
|---|---|
| 1869–1871 | Tennessee, Virginia, North Carolina, Georgia |
| 1873–1874 | Texas, Alabama, Arkansas |
| 1875 | Mississippi |
| 1876–1877 | South Carolina, Louisiana, Florida |

### Reading the Pattern

- States with **white majorities** (Tennessee, Virginia, North Carolina) were redeemed first, often through ordinary elections combined with intimidation.
- States with **Black majorities or near majorities** (Mississippi, South Carolina, Louisiana) held out longest and were redeemed through organized violence.
- By 1877 only three Republican governments remained, all propped up by federal troops. The Compromise of 1877 (Part 5) ended the last of them.

> 🔑 **AP Connection:** The table helps you avoid a common error: Reconstruction did not end in a single moment in 1877. It was dismantled over eight years, which is a good **CCOT** and **complexity** point.
      `
    },
    {
      id: 'apushrec4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice: Continuity and Change** 🎯

> **Data:** Illiteracy among Black Americans aged 10 and older, U.S. Census: about 80 percent in 1870; about 70 percent in 1880; about 57 percent in 1890; about 45 percent in 1900.
      `,
      exercise: {
        questions: [
          {
            question: 'The trend in the data most directly reflects which of the following?',
            options: [
              'Federal laws after 1877 that required states to fund Black schools',
              'The effort freedpeople and their allies put into building schools',
              'The movement of most Black Southerners to Northern cities by 1880',
              'Supreme Court rulings that ended segregation in Southern schools'
            ],
            correctAnswer: 1,
            explanation: 'Freedpeople, the Freedmen\'s Bureau, missionary societies and Reconstruction governments built schools that kept literacy rising after 1877. Congress passed no such school law, the Great Migration came later, and school segregation was not struck down until 1954.'
          },
          {
            question: 'Which of the following developments best represents a continuity from slavery into the 1870s?',
            options: [
              'The founding of independent Black churches across the South',
              'The legal recognition of marriages between formerly enslaved people',
              'Black men serving in state legislatures and in the U.S. Congress',
              'Black families farming cotton on land owned by white landowners'
            ],
            correctAnswer: 3,
            explanation: 'Most freedpeople still grew cotton on white-owned land, now under sharecropping and crop liens. Independent churches, legal marriages and Black officeholding were all changes that followed emancipation.'
          }
        ]
      }
    }
  ]
}
