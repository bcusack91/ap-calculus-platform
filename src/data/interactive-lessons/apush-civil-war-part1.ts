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
            question: 'The Kansas-Nebraska Act (1854) was most controversial because it',
            options: [
              'opened land north of the old Missouri Compromise line to slavery',
              'banned slavery in all of the land acquired from Mexico in 1848',
              'required every free state to pass its own fugitive slave law',
              'gave citizenship to free Black settlers in the new territories'
            ],
            correctAnswer: 0,
            explanation: 'Kansas and Nebraska lay north of 36°30\', where slavery had been barred since 1820, and popular sovereignty let settlers vote to allow it. The act concerned the Louisiana Purchase lands, not the Mexican Cession, and it said nothing about state fugitive laws or Black citizenship.'
          },
          {
            question: 'The Dred Scott decision (1857) intensified the sectional crisis most directly by',
            options: [
              'ruling that free Black Americans were citizens entitled to equal rights',
              'ruling that enslaved people in the border states were free at once',
              'ruling that Congress could not bar slavery from any federal territory',
              'ruling that the Missouri Compromise line bound all future new states'
            ],
            correctAnswer: 2,
            explanation: 'Chief Justice Taney held that Congress had no power to exclude slavery from the territories, which made the Republican platform look unconstitutional and ended hope of a legislative compromise. The Court denied Black citizenship, freed no one, and struck down the Missouri Compromise rather than upholding it.'
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
            question: 'Lincoln waited until after the Battle of Antietam to announce the Emancipation Proclamation mainly because he',
            options: [
              'needed Congress to vote its approval before any proclamation took effect',
              'hoped Confederate states would abolish slavery on their own during 1862',
              'wanted emancipation to look like a move from strength, not desperation',
              'expected the border states to adopt gradual emancipation plans that fall'
            ],
            correctAnswer: 2,
            explanation: 'Lincoln drafted the Proclamation in July 1862, but Seward warned that issuing it after Union defeats would look like a cry of desperation, and Antietam stopped Lee\'s invasion. The Proclamation rested on the president\'s war powers, and neither the Confederacy nor the border states were about to end slavery themselves.'
          },
          {
            question: 'Which statement best describes the long-term significance of the Civil War?',
            options: [
              'Tariff disputes between industry and agriculture were settled for good',
              'Reconstruction quickly reversed the war\'s results, leaving little change',
              'Sectional disputes were shown to be solvable by legislative compromise',
              'Slavery was abolished and secession was settled as not a lawful option'
            ],
            correctAnswer: 3,
            explanation: 'The Union victory and the 13th Amendment ended slavery and established that states could not leave the Union, greatly strengthening federal authority. Tariffs remained contested, the constitutional changes of the war era endured, and the war itself showed the failure of compromise.'
          }
        ]
      }
    }
  ]
}
