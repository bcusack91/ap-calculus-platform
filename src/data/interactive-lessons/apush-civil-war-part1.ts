export const apushCivilWarPart1Data = {
  topicSlug: 'apush-civil-war',
  sections: [
    {
      id: 'apushciv1-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 The Civil War

**Part 1 of 7 — Causes, Secession & Early War**

---

| Section |
|---------|
| 📖 Sectional Crisis of the 1850s |
| Secession & the Confederacy |
| Military Strategy & Key Battles |
| 📌 Emancipation & Its Impact |
| The Home Front |

> 🔑 **Key Concept:** The AP exam emphasizes that the Civil War was fundamentally about **slavery** — its expansion into new territories was the central issue that broke the political system and led to secession.
      `
    },
    {
      id: 'apushciv1-causes',
      type: 'text' as const,
      content: `
## 📖 The Sectional Crisis (1850–1861)

### The Road to Disunion

| Event | Date | Significance |
|-------|------|-------------|
| **Compromise of 1850** | 1850 | California admitted as free state; stronger Fugitive Slave Act; popular sovereignty in Utah/New Mexico territories |
| **Fugitive Slave Act** | 1850 | Required Northerners to help return escaped enslaved people; angered abolitionists; pushed moderates toward anti-slavery |
| **Uncle Tom's Cabin** | 1852 | Harriet Beecher Stowe's novel personalized slavery's horrors for Northern readers |
| **Kansas-Nebraska Act** | 1854 | Stephen Douglas's law allowed **popular sovereignty** in Kansas/Nebraska — effectively repealed the Missouri Compromise line |
| **"Bleeding Kansas"** | 1855–56 | Pro- and anti-slavery settlers fought violently; John Brown's Pottawatomie Massacre |
| **Dred Scott v. Sandford** | 1857 | Supreme Court ruled: enslaved people are not citizens; Congress **cannot** ban slavery in territories; Missouri Compromise unconstitutional |
| **Lincoln-Douglas Debates** | 1858 | Abraham Lincoln challenged Stephen Douglas for Illinois Senate; Lincoln argued slavery was morally wrong; Douglas defended popular sovereignty |
| **John Brown's Raid** | 1859 | Attempted to seize federal arsenal at Harpers Ferry to arm enslaved people; failed; Brown executed; became martyr in the North, terrorist in the South |
| **Election of 1860** | 1860 | Lincoln won with **zero Southern electoral votes**; purely sectional victory; South Carolina seceded within weeks |

> ⚠️ **AP Alert:** The Dred Scott decision and Kansas-Nebraska Act destroyed the political center. By ruling that Congress couldn't restrict slavery in territories, the Court invalidated 30+ years of compromise — making the Civil War increasingly inevitable.
      `
    },
    {
      id: 'apushciv1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Kansas-Nebraska Act (1854) was most controversial because it:',
            options: [
              'Effectively repealed the Missouri Compromise by allowing popular sovereignty on slavery in territories north of the 36°30\' line',
              'Banned slavery in all new territories acquired from Mexico',
              'Required all states to accept fugitive slave laws',
              'Granted citizenship to all free Black people in the United States'
            ],
            correctAnswer: 0,
            explanation: 'Stephen Douglas\'s Kansas-Nebraska Act allowed settlers in Kansas and Nebraska to vote on whether to allow slavery — even though both territories were north of the Missouri Compromise line (36°30\'), where slavery had been banned since 1820. This effectively destroyed the compromise and led to violent conflict in Kansas.'
          },
          {
            question: 'The Dred Scott decision (1857) intensified the sectional crisis MOST directly by:',
            options: [
              'Ruling that Congress had no power to ban slavery in any territory, eliminating the possibility of legislative compromise',
              'Granting citizenship to all African Americans in the United States',
              'Ordering the immediate emancipation of all enslaved people in border states',
              'Upholding the constitutionality of the Missouri Compromise'
            ],
            correctAnswer: 0,
            explanation: 'Chief Justice Taney\'s ruling declared that enslaved people were property protected by the Fifth Amendment, Congress could not restrict slavery in territories, and Black people (free or enslaved) could never be U.S. citizens. By removing Congress\'s ability to compromise on slavery\'s expansion, the decision pushed the nation closer to war.'
          }
        ]
      }
    },
    {
      id: 'apushciv1-war',
      type: 'text' as const,
      content: `
## The Civil War (1861–1865)

### Secession & Sides

- **11 Confederate states** seceded (SC first, Dec. 1860); President: **Jefferson Davis**
- **4 border states** (MO, KY, MD, DE) — slave states that stayed in the Union; Lincoln handled them carefully
- **Union advantages:** Larger population (22M vs. 9M, 3.5M enslaved); industrial capacity; railroad network; naval superiority
- **Confederate advantages:** Defensive war (fighting on home soil); skilled military officers (Robert E. Lee); motivation to protect their way of life

### Emancipation Proclamation (Jan. 1, 1863)

| Feature | Details |
|---------|---------|
| **What it did** | Declared enslaved people in **rebel states** free (did NOT free those in border states) |
| **Military purpose** | Allowed African Americans to enlist in Union army; ~180,000 Black soldiers served |
| **Diplomatic purpose** | Prevented Britain and France from recognizing the Confederacy (couldn\'t support a pro-slavery nation) |
| **Limitations** | Only applied to areas the Union didn\'t control; full abolition required the **13th Amendment** (1865) |

> 🔑 **AP Connection:** The Emancipation Proclamation transformed the war from a fight to preserve the Union into a fight to **end slavery**. This is a critical turning point on the AP exam.

### Key Battles

| Battle | Date | Significance |
|--------|------|-------------|
| **Fort Sumter** | Apr. 1861 | First shots of the war; Confederate attack on federal fort in Charleston harbor |
| **Antietam** | Sept. 1862 | Bloodiest single day (23,000 casualties); Union "victory" gave Lincoln political cover to issue Emancipation Proclamation |
| **Gettysburg** | July 1863 | Turning point; Lee's invasion of the North failed; ~50,000 total casualties over 3 days |
| **Vicksburg** | July 1863 | Union gained control of the Mississippi River; split the Confederacy |
| **Appomattox** | Apr. 1865 | Lee surrendered to Grant; effective end of the war |
      `
    },
    {
      id: 'apushciv1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What document, issued on January 1, 1863, declared enslaved people in rebel states to be free?

2) What July 1863 battle is considered the turning point of the Civil War after Lee's failed invasion of the North?

3) What constitutional amendment, ratified in 1865, permanently abolished slavery throughout the United States?

Use the exact historical term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Emancipation Proclamation', 'Battle of Gettysburg', '13th Amendment'],
        hint1: 'Two words — Lincoln\'s proclamation about emancipation',
        hint2: 'A battle in Pennsylvania — about 50,000 casualties over 3 days',
        hint3: 'The ___th Amendment',
        explanation: 'The Emancipation Proclamation (1863) transformed the war\'s purpose. The Battle of Gettysburg (July 1863) was Lee\'s last major offensive into the North. The 13th Amendment (1865) accomplished what the Proclamation could not — permanently ending slavery everywhere in the United States.'
      }
    },
    {
      id: 'apushciv1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Events** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The 1857 Supreme Court case that ruled enslaved people could never be citizens was ___',
            options: ['Dred Scott v. Sandford', 'Marbury v. Madison', 'McCulloch v. Maryland', 'Worcester v. Georgia']
          },
          {
            label: 'The September 1862 battle that was the bloodiest single day of the war was ___',
            options: ['Antietam', 'Gettysburg', 'Vicksburg', 'Fort Sumter']
          },
          {
            label: 'The concept allowing territorial settlers to vote on whether to permit slavery was called ___',
            options: ['Popular sovereignty', 'Manifest Destiny', 'Nullification', 'Judicial review']
          }
        ],
        correctAnswers: ['Dred Scott v. Sandford', 'Antietam', 'Popular sovereignty'],
        hint1: 'Chief Justice Taney wrote the majority opinion',
        hint2: 'About 23,000 casualties in Maryland; gave Lincoln cover for emancipation',
        hint3: 'Advocated by Stephen Douglas; applied in Kansas-Nebraska Act',
        explanation: 'Dred Scott (1857) was one of the worst Supreme Court decisions in history. Antietam (Sept. 1862) produced 23,000 casualties in a single day. Popular sovereignty — letting settlers decide on slavery — led to violent conflict in Kansas ("Bleeding Kansas").'
      }
    },
    {
      id: 'apushciv1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Lincoln delayed issuing the Emancipation Proclamation until after the Battle of Antietam primarily because:',
            options: [
              'He needed a Union military success so the Proclamation would appear as a position of strength rather than desperation',
              'The Constitution required congressional approval before any executive order could take effect',
              'He was waiting for the Confederate states to voluntarily abolish slavery',
              'The border states had already agreed to gradual emancipation'
            ],
            correctAnswer: 0,
            explanation: 'Lincoln had drafted the Proclamation in July 1862 but his advisors cautioned that issuing it after Union defeats would look desperate. Antietam — while not a clear victory — stopped Lee\'s invasion and gave Lincoln the political credibility to reframe the war as a fight against slavery.'
          },
          {
            question: 'Which statement BEST captures the historical significance of the Civil War?',
            options: [
              'It resolved the question of whether states could secede, destroyed slavery, and established the supremacy of the federal government over the states',
              'It had no lasting impact because Reconstruction quickly reversed all wartime gains',
              'It was primarily a conflict over tariff policy between industrial and agricultural regions',
              'It demonstrated that compromise was always possible between the North and South'
            ],
            correctAnswer: 0,
            explanation: 'The Civil War permanently settled three fundamental questions: (1) secession is unconstitutional, (2) slavery is abolished (13th Amendment), and (3) federal authority supersedes state authority. These outcomes reshaped American government and society, though the promises of equality remained unfulfilled for another century.'
          }
        ]
      }
    }
  ]
}
