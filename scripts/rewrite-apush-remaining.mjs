import { writeFileSync } from 'fs';
import { join } from 'path';

const DIR = 'src/data/interactive-lessons';

const topics = [
  {
    file: 'apush-reform-movements-part1.ts',
    content: () => `export const apushReformMovementsPart1Data = {
  topicSlug: 'apush-reform-movements',
  sections: [
    {
      id: 'apushref1-intro',
      type: 'text' as const,
      content: \`
# 🇺🇸 Reform Movements

**Part 1 of 7 — Antebellum Reform & Abolition**

---

| Section |
|---------|
| 📖 The Second Great Awakening |
| Abolitionism |
| Women's Rights Movement |
| 📌 Other Reform Movements |
| Connections to Sectionalism |

> 🔑 **Key Concept:** The AP exam connects the reform movements of the 1830s–1850s to the Second Great Awakening — religious revivalism inspired social activism, especially abolitionism and women's suffrage.
      \`
    },
    {
      id: 'apushref1-awakening',
      type: 'text' as const,
      content: \`
## 📖 The Second Great Awakening (1790s–1840s)

A massive Protestant revival movement that reshaped American religion and inspired social reform:

| Feature | Details |
|---------|---------|
| **Key preachers** | Charles Grandison Finney (upstate New York — the "Burned-Over District"); camp meetings in the South and West |
| **Core message** | Individuals can achieve salvation through personal faith and moral action; perfectionism — society can be improved |
| **Demographics** | Attracted women and African Americans in large numbers; democratized religion |
| **Impact on reform** | If individuals can be perfected, so can society → abolitionism, temperance, education, women's rights |

### The Abolitionist Movement

| Figure | Contribution |
|--------|-------------|
| **William Lloyd Garrison** | Published *The Liberator* (1831); founded American Anti-Slavery Society; demanded **immediate** emancipation; burned the Constitution as a "covenant with death" |
| **Frederick Douglass** | Escaped slavery; published *Narrative of the Life of Frederick Douglass* (1845); powerful orator; *The North Star* newspaper |
| **Harriet Tubman** | Escaped slavery; made ~13 trips on the **Underground Railroad**, rescuing ~70 people |
| **Harriet Beecher Stowe** | *Uncle Tom's Cabin* (1852) — novel that dramatized slavery's cruelties; massive Northern readership |
| **Nat Turner** | Led slave rebellion in Virginia (1831); killed ~60 white people; led to harsher slave codes across the South |
| **David Walker** | Free Black author; *Appeal to the Coloured Citizens of the World* (1829) — called for violent resistance to slavery |

> ⚠️ **AP Alert:** Know the distinction between **moral suasion** abolitionists (Garrison — persuade through argument) and those who accepted **political action** (Liberty Party, Free Soil Party) or even **violent resistance** (John Brown, David Walker).
      \`
    },
    {
      id: 'apushref1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The Second Great Awakening contributed to the abolitionist movement MOST directly by:',
            options: [
              'Teaching that individuals had a moral duty to perfect society, making slavery a sin that must be eliminated',
              'Establishing Catholic missions that opposed slavery throughout the South',
              'Convincing Southern slaveholders to voluntarily free enslaved people',
              'Creating a national political party dedicated to ending slavery immediately'
            ],
            correctAnswer: 0,
            explanation: 'The Second Great Awakening\\'s emphasis on individual moral responsibility and social perfectionism gave abolitionists a religious framework: if each person could achieve salvation, then society itself could be perfected — and slavery was an unforgivable moral evil that Christians were obligated to oppose.'
          },
          {
            question: 'Frederick Douglass and William Lloyd Garrison DIFFERED primarily in that:',
            options: [
              'Douglass eventually supported political engagement and working within the Constitution, while Garrison rejected the Constitution entirely',
              'Garrison supported immediate emancipation while Douglass favored gradual abolition',
              'Douglass was a Southern slaveholder while Garrison was a Northern industrialist',
              'Garrison used violent tactics while Douglass relied exclusively on moral persuasion'
            ],
            correctAnswer: 0,
            explanation: 'Though both were committed abolitionists, Douglass broke with Garrison over strategy. Douglass came to believe the Constitution could be interpreted as an anti-slavery document and that political engagement (voting, running candidates) was essential. Garrison famously burned the Constitution, calling it a "covenant with death and an agreement with hell."'
          }
        ]
      }
    },
    {
      id: 'apushref1-womens',
      type: 'text' as const,
      content: \`
## Women's Rights & Other Reforms

### The Women's Rights Movement

Many women entered public life through abolition work, then recognized their own lack of legal rights:

| Event / Figure | Significance |
|----------------|-------------|
| **Seneca Falls Convention** (1848) | First women's rights convention; organized by **Elizabeth Cady Stanton** and **Lucretia Mott** |
| **Declaration of Sentiments** | Modeled on the Declaration of Independence: "All men **and women** are created equal"; demanded suffrage, property rights, education |
| **Sojourner Truth** | "Ain't I a Woman?" speech (1851) — connected women's rights and racial equality |
| **Cult of Domesticity** | Prevailing ideology: women's "sphere" was the home; reformers challenged this |

### Other Major Reforms

| Movement | Key Details |
|----------|-------------|
| **Temperance** | Campaign against alcohol; led mainly by women; American Temperance Society (1826); linked alcohol to domestic violence and poverty |
| **Education** | **Horace Mann** — championed public education in Massachusetts; teacher training, longer school years, standardized curriculum |
| **Utopian Communities** | Brook Farm, Oneida, New Harmony — experimental communities seeking perfect societies; most failed |
| **Prison/Mental Health** | **Dorothea Dix** — exposed terrible conditions in mental asylums; lobbied for state-funded institutions |
| **Transcendentalism** | **Emerson** and **Thoreau** — emphasized individual intuition, self-reliance, connection to nature; Thoreau's *Civil Disobedience* (1849) influenced later movements |
      \`
    },
    {
      id: 'apushref1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) What 1848 convention launched the organized women's rights movement in the United States?

2) What document, modeled on the Declaration of Independence, demanded equality for women?

3) What abolitionist newspaper did William Lloyd Garrison publish beginning in 1831?

Use the exact historical term.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['Seneca Falls Convention', 'Declaration of Sentiments', 'The Liberator'],
        hint1: 'Named after a town in upstate New York',
        hint2: 'Declaration of ___',
        hint3: 'The ___',
        explanation: 'The Seneca Falls Convention (1848) was organized by Elizabeth Cady Stanton and Lucretia Mott. The Declaration of Sentiments declared that "all men and women are created equal." The Liberator (1831–1865) was Garrison\\'s uncompromising abolitionist newspaper.'
      }
    },
    {
      id: 'apushref1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Reformers** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'The reformer who exposed terrible conditions in mental asylums and lobbied for state institutions was ___',
            options: ['Dorothea Dix', 'Horace Mann', 'Elizabeth Cady Stanton', 'Sojourner Truth']
          },
          {
            label: 'The escaped enslaved person who made ~13 trips on the Underground Railroad was ___',
            options: ['Harriet Tubman', 'Frederick Douglass', 'Sojourner Truth', 'Nat Turner']
          },
          {
            label: 'The transcendentalist who wrote Civil Disobedience (1849), arguing for principled resistance to unjust laws, was ___',
            options: ['Henry David Thoreau', 'Ralph Waldo Emerson', 'Walt Whitman', 'Nathaniel Hawthorne']
          }
        ],
        correctAnswers: ['Dorothea Dix', 'Harriet Tubman', 'Henry David Thoreau'],
        hint1: 'Advocated for mental health reform in the 1840s',
        hint2: 'Called "Moses" for her role guiding people to freedom',
        hint3: 'Lived at Walden Pond; refused to pay taxes to protest the Mexican-American War',
        explanation: 'Dorothea Dix\\'s advocacy led to the creation of 32 state mental institutions. Harriet Tubman risked her life repeatedly to free enslaved people via the Underground Railroad. Thoreau\\'s Civil Disobedience influenced Martin Luther King Jr. and Mahatma Gandhi.'
      }
    },
    {
      id: 'apushref1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The Declaration of Sentiments (1848) was strategically modeled on the Declaration of Independence in order to:',
            options: [
              'Invoke America\\'s founding principles to argue that denying women\\'s rights was a betrayal of the nation\\'s own stated ideals',
              'Declare women\\'s independence from the United States government',
              'Call for the immediate abolition of slavery alongside women\\'s suffrage',
              'Propose a constitutional amendment granting women the right to vote'
            ],
            correctAnswer: 0,
            explanation: 'By deliberately echoing the Declaration of Independence\\'s language and structure, Stanton made a powerful rhetorical argument: if "all men are created equal" is America\\'s founding principle, then excluding women is hypocritical. This strategy of holding America to its own ideals is a recurring pattern in reform movements throughout U.S. history.'
          },
          {
            question: 'Which of the following BEST explains why many women initially became involved in public reform through the abolitionist movement?',
            options: [
              'Abolitionist organizations were among the few spaces where women could speak publicly and organize, and fighting for others\\' freedom led them to question their own lack of rights',
              'The federal government appointed women as official abolition commissioners',
              'Southern women led the abolitionist movement from plantation households',
              'Women were legally required to participate in anti-slavery societies by state law'
            ],
            correctAnswer: 0,
            explanation: 'The abolitionist movement provided women an entry point into public activism. When women like the Grimké sisters were criticized for speaking publicly, they realized their own rights were restricted. This experience radicalized many women and directly led to the organized women\\'s rights movement.'
          }
        ]
      }
    }
  ]
}
`
  },
  {
    file: 'apush-civil-war-part1.ts',
    content: () => `export const apushCivilWarPart1Data = {
  topicSlug: 'apush-civil-war',
  sections: [
    {
      id: 'apushciv1-intro',
      type: 'text' as const,
      content: \`
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
      \`
    },
    {
      id: 'apushciv1-causes',
      type: 'text' as const,
      content: \`
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
      \`
    },
    {
      id: 'apushciv1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The Kansas-Nebraska Act (1854) was most controversial because it:',
            options: [
              'Effectively repealed the Missouri Compromise by allowing popular sovereignty on slavery in territories north of the 36°30\\' line',
              'Banned slavery in all new territories acquired from Mexico',
              'Required all states to accept fugitive slave laws',
              'Granted citizenship to all free Black people in the United States'
            ],
            correctAnswer: 0,
            explanation: 'Stephen Douglas\\'s Kansas-Nebraska Act allowed settlers in Kansas and Nebraska to vote on whether to allow slavery — even though both territories were north of the Missouri Compromise line (36°30\\'), where slavery had been banned since 1820. This effectively destroyed the compromise and led to violent conflict in Kansas.'
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
            explanation: 'Chief Justice Taney\\'s ruling declared that enslaved people were property protected by the Fifth Amendment, Congress could not restrict slavery in territories, and Black people (free or enslaved) could never be U.S. citizens. By removing Congress\\'s ability to compromise on slavery\\'s expansion, the decision pushed the nation closer to war.'
          }
        ]
      }
    },
    {
      id: 'apushciv1-war',
      type: 'text' as const,
      content: \`
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
| **Diplomatic purpose** | Prevented Britain and France from recognizing the Confederacy (couldn\\'t support a pro-slavery nation) |
| **Limitations** | Only applied to areas the Union didn\\'t control; full abolition required the **13th Amendment** (1865) |

> 🔑 **AP Connection:** The Emancipation Proclamation transformed the war from a fight to preserve the Union into a fight to **end slavery**. This is a critical turning point on the AP exam.

### Key Battles

| Battle | Date | Significance |
|--------|------|-------------|
| **Fort Sumter** | Apr. 1861 | First shots of the war; Confederate attack on federal fort in Charleston harbor |
| **Antietam** | Sept. 1862 | Bloodiest single day (23,000 casualties); Union "victory" gave Lincoln political cover to issue Emancipation Proclamation |
| **Gettysburg** | July 1863 | Turning point; Lee's invasion of the North failed; ~50,000 total casualties over 3 days |
| **Vicksburg** | July 1863 | Union gained control of the Mississippi River; split the Confederacy |
| **Appomattox** | Apr. 1865 | Lee surrendered to Grant; effective end of the war |
      \`
    },
    {
      id: 'apushciv1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) What document, issued on January 1, 1863, declared enslaved people in rebel states to be free?

2) What July 1863 battle is considered the turning point of the Civil War after Lee's failed invasion of the North?

3) What constitutional amendment, ratified in 1865, permanently abolished slavery throughout the United States?

Use the exact historical term.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['Emancipation Proclamation', 'Battle of Gettysburg', '13th Amendment'],
        hint1: 'Two words — Lincoln\\'s proclamation about emancipation',
        hint2: 'A battle in Pennsylvania — about 50,000 casualties over 3 days',
        hint3: 'The ___th Amendment',
        explanation: 'The Emancipation Proclamation (1863) transformed the war\\'s purpose. The Battle of Gettysburg (July 1863) was Lee\\'s last major offensive into the North. The 13th Amendment (1865) accomplished what the Proclamation could not — permanently ending slavery everywhere in the United States.'
      }
    },
    {
      id: 'apushciv1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Events** 🔍
      \`,
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
      content: \`
**AP-Style Application** 🎯
      \`,
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
            explanation: 'Lincoln had drafted the Proclamation in July 1862 but his advisors cautioned that issuing it after Union defeats would look desperate. Antietam — while not a clear victory — stopped Lee\\'s invasion and gave Lincoln the political credibility to reframe the war as a fight against slavery.'
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
`
  },
  {
    file: 'apush-reconstruction-part1.ts',
    content: () => `export const apushReconstructionPart1Data = {
  topicSlug: 'apush-reconstruction',
  sections: [
    {
      id: 'apushrec1-intro',
      type: 'text' as const,
      content: \`
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
      \`
    },
    {
      id: 'apushrec1-plans',
      type: 'text' as const,
      content: \`
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
      \`
    },
    {
      id: 'apushrec1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Why did Radical Republicans reject President Johnson\\'s Reconstruction plan?',
            options: [
              'Johnson pardoned most Confederates and allowed Southern states to pass Black Codes that effectively re-enslaved freed people',
              'Johnson\\'s plan was too harsh on the South and prevented economic recovery',
              'Johnson demanded that the South ratify the 14th Amendment before rejoining the Union',
              'Johnson\\'s plan granted full citizenship and voting rights to all African Americans'
            ],
            correctAnswer: 0,
            explanation: 'Johnson\\'s lenient plan allowed former Confederate leaders to regain power. Southern states passed Black Codes — laws that restricted African Americans\\' freedom of movement, labor, and rights — essentially recreating slavery by another name. Radical Republicans saw this as a betrayal of the war\\'s purpose and took control of Reconstruction.'
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
            explanation: 'The 14th Amendment (1868) defined citizenship for the first time ("all persons born or naturalized in the United States"), overturning Dred Scott. Its equal protection and due process clauses have been used in virtually every major civil rights case since. The 13th Amendment abolished slavery; the 19th granted women\\'s suffrage.'
          }
        ]
      }
    },
    {
      id: 'apushrec1-achievements',
      type: 'text' as const,
      content: \`
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
      \`
    },
    {
      id: 'apushrec1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) What federal agency, established in 1865, provided food, education, and legal assistance to formerly enslaved people?

2) What agricultural labor system trapped freed people in cycles of debt by working land for a share of the crop?

3) What 1877 political deal effectively ended Reconstruction by withdrawing federal troops from the South?

Use the exact historical term.
      \`,
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
      content: \`
**Match the Concepts** 🔍
      \`,
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
      content: \`
**AP-Style Application** 🎯
      \`,
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
            explanation: 'Reconstruction produced transformative legal changes (13th, 14th, 15th Amendments) but lacked sustained political will for enforcement. The Compromise of 1877 effectively abandoned freed people to sharecropping, Jim Crow, and disenfranchisement. The "revolution" was real but incomplete — its promises wouldn\\'t be pursued again until the Civil Rights Movement.'
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
            explanation: 'While sharecroppers were legally free, the system\\'s structure — working someone else\\'s land, perpetual debt to the landowner\\'s store, inability to leave until debts were paid — created conditions of economic bondage that closely resembled slavery. This continuity of exploitation is a key AP concept about the limits of Reconstruction.'
          }
        ]
      }
    }
  ]
}
`
  },
  {
    file: 'apush-gilded-age-part1.ts',
    content: () => `export const apushGildedAgePart1Data = {
  topicSlug: 'apush-gilded-age',
  sections: [
    {
      id: 'apushgil1-intro',
      type: 'text' as const,
      content: \`
# 🇺🇸 The Gilded Age

**Part 1 of 7 — Industrialization, Immigration & Inequality (1870s–1900)**

---

| Section |
|---------|
| 📖 Big Business & Industrial Titans |
| Labor Movement |
| Immigration & Urbanization |
| 📌 Political Machines & Corruption |
| Farmers' Populist Movement |

> 🔑 **Key Concept:** Mark Twain coined "Gilded Age" — glittering on the surface but corrupt underneath. The AP exam focuses on the **tension between rapid economic growth and extreme inequality**, and how workers, farmers, and immigrants responded.
      \`
    },
    {
      id: 'apushgil1-business',
      type: 'text' as const,
      content: \`
## 📖 Big Business & Industrial Titans

### The Second Industrial Revolution

| Innovation | Impact |
|-----------|--------|
| **Steel** (Bessemer process) | Enabled skyscrapers, railroads, bridges |
| **Railroads** | Transcontinental Railroad completed 1869; created national markets; standardized time zones |
| **Oil** | John D. Rockefeller's Standard Oil; kerosene → gasoline |
| **Electricity** | Thomas Edison (light bulb, power stations); transformed urban life |
| **Telephone** | Alexander Graham Bell (1876); revolutionized communication |

### The "Captains of Industry" / "Robber Barons"

| Industrialist | Company / Industry | Key Strategy | Controversy |
|---|---|---|---|
| **Andrew Carnegie** | Carnegie Steel | **Vertical integration** — controlled every stage from iron mines to finished steel | Homestead Strike (1892); gave away \\$350M in philanthropy |
| **John D. Rockefeller** | Standard Oil | **Horizontal integration** — bought out competitors to create monopoly; trusts | Controlled 90% of U.S. oil refining by 1880 |
| **Cornelius Vanderbilt** | Railroads | Consolidated competing rail lines | Stock manipulation; cut-throat competition |
| **J.P. Morgan** | Banking / Finance | Financed mergers; bailed out U.S. government (1895) | Enormous concentration of financial power |

### Key Economic Concepts

- **Vertical integration:** One company controls all steps of production (Carnegie: mines → railroads → mills → sales)
- **Horizontal integration:** One company buys all competitors at the same level (Rockefeller: bought rival refineries)
- **Trusts:** Legal arrangement where multiple companies are managed by a single board — used to create monopolies
- **Social Darwinism:** Applied Darwin's "survival of the fittest" to economics — wealth = merit; poverty = personal failure
- **Gospel of Wealth:** Carnegie's essay arguing the rich had a duty to use their wealth for the public good (libraries, universities)
      \`
    },
    {
      id: 'apushgil1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The key difference between vertical and horizontal integration is:',
            options: [
              'Vertical integration controls all stages of production, while horizontal integration eliminates competitors at the same stage',
              'Vertical integration is legal while horizontal integration is always illegal',
              'Vertical integration applies only to agriculture while horizontal applies to manufacturing',
              'Vertical integration reduces costs while horizontal integration always increases them'
            ],
            correctAnswer: 0,
            explanation: 'Carnegie\\'s vertical integration meant owning everything from iron ore mines to steel mills to railroads that shipped the product. Rockefeller\\'s horizontal integration meant buying out all other oil refineries until Standard Oil had a near-monopoly. Both strategies concentrated economic power but in different ways.'
          },
          {
            question: 'Social Darwinism was used during the Gilded Age primarily to:',
            options: [
              'Justify extreme wealth inequality by arguing that economic success reflected natural superiority',
              'Promote government regulation of monopolies and trusts',
              'Support labor unions\\' demands for higher wages and shorter hours',
              'Advocate for immigration restrictions based on scientific evidence'
            ],
            correctAnswer: 0,
            explanation: 'Social Darwinists like Herbert Spencer and William Graham Sumner applied Darwin\\'s evolution theory to society, arguing that the wealthy were "naturally" superior and the poor were "unfit." This ideology was used to oppose government regulation, labor protections, and social welfare programs — claiming they interfered with natural selection.'
          }
        ]
      }
    },
    {
      id: 'apushgil1-labor',
      type: 'text' as const,
      content: \`
## Labor, Immigration & Political Machines

### The Labor Movement

| Organization / Event | Details |
|---------------------|---------|
| **Knights of Labor** | Open to all workers (including women, African Americans); sought 8-hour day; declined after Haymarket (1886) |
| **AFL (American Federation of Labor)** | Samuel Gompers; skilled workers only; craft unions; "bread and butter" goals (wages, hours, conditions) |
| **Haymarket Affair** (1886) | Chicago labor rally; bomb killed police; 8 anarchists convicted; public turned against labor |
| **Homestead Strike** (1892) | Carnegie Steel; Pinkerton guards vs. steelworkers; violent; union crushed |
| **Pullman Strike** (1894) | Railroad workers; Eugene V. Debs; federal troops broke the strike; court injunction used against unions |

### The "New Immigration" (1880s–1920s)

- **Old immigrants** (pre-1880): Northern/Western Europe (Britain, Germany, Ireland, Scandinavia)
- **New immigrants** (1880s+): Southern/Eastern Europe (Italy, Poland, Russia, Greece) + China, Japan
- Settled in **ethnic urban neighborhoods** (Little Italy, Chinatown)
- Faced **nativism**: Chinese Exclusion Act (1882) — first law banning immigration by nationality
- **Ellis Island** (New York, 1892) — processing center for European immigrants
- **Angel Island** (San Francisco) — harsh processing for Asian immigrants

### Political Machines

- **Tammany Hall** (New York City) — led by **Boss Tweed**
- Provided services to immigrants (jobs, housing, food) in exchange for **votes**
- Rampant corruption — graft, kickbacks, election fraud
- **Thomas Nast** — political cartoonist who exposed Tammany Hall corruption
      \`
    },
    {
      id: 'apushgil1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) What business strategy did John D. Rockefeller use to control 90% of oil refining by buying out all competitors?

2) What 1882 law was the first federal law to ban immigration based on nationality?

3) What labor organization led by Samuel Gompers focused on practical "bread and butter" gains for skilled workers?

Use the exact historical term.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['horizontal integration', 'Chinese Exclusion Act', 'American Federation of Labor'],
        hint1: 'Buying competitors at the same level of production — ___ integration',
        hint2: 'Banned immigration from a specific country',
        hint3: 'AFL — American ___ of ___',
        explanation: 'Horizontal integration eliminated competitors at the same stage of production (Rockefeller bought rival refineries). The Chinese Exclusion Act (1882) reflected growing nativism and remained in effect until 1943. The AFL (founded 1886) focused on achievable goals for skilled craft workers.'
      }
    },
    {
      id: 'apushgil1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Concepts** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Andrew Carnegie\\'s essay arguing the wealthy must use their fortunes for public good was called the ___',
            options: ['Gospel of Wealth', 'Social Darwinism', 'Communist Manifesto', 'Wealth of Nations']
          },
          {
            label: 'The 1894 railroad strike led by Eugene V. Debs was the ___',
            options: ['Pullman Strike', 'Homestead Strike', 'Haymarket Affair', 'Great Railroad Strike']
          },
          {
            label: 'The corrupt New York City political machine exposed by Thomas Nast was ___',
            options: ['Tammany Hall', 'Pendleton Hall', 'Carnegie Hall', 'Faneuil Hall']
          }
        ],
        correctAnswers: ['Gospel of Wealth', 'Pullman Strike', 'Tammany Hall'],
        hint1: 'Carnegie donated \\$350 million to libraries, universities, and parks',
        hint2: 'Federal troops and a court injunction were used to break this strike',
        hint3: 'Led by Boss Tweed; controlled NYC politics through patronage and graft',
        explanation: 'Carnegie\\'s Gospel of Wealth (1889) argued philanthropy was the rich\\'s duty — critics called it hypocritical given his brutal labor practices. The Pullman Strike (1894) showed the federal government would side with business against labor. Tammany Hall exemplified Gilded Age political corruption.'
      }
    },
    {
      id: 'apushgil1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which of the following BEST explains why the federal government generally sided with business over labor during the Gilded Age?',
            options: [
              'Courts used injunctions and the Sherman Antitrust Act against unions (not monopolies), and politicians depended on industrial donors for campaign funding',
              'Constitutional amendments explicitly prohibited labor unions',
              'Workers voluntarily chose not to organize because wages were rising rapidly',
              'The federal government had no legal authority to intervene in labor disputes'
            ],
            correctAnswer: 0,
            explanation: 'Ironically, the Sherman Antitrust Act (1890), intended to break up monopolies, was initially used more against labor unions (as "conspiracies in restraint of trade") than against corporations. Politicians depended on wealthy industrialists for campaign support, and the prevailing ideology of laissez-faire economics discouraged government intervention on workers\\' behalf.'
          },
          {
            question: 'A historian comparing the "old" immigration (pre-1880) with the "new" immigration (1880s–1920s) would note that the MOST significant difference was:',
            options: [
              'New immigrants came predominantly from Southern and Eastern Europe, faced greater nativist hostility, and were more likely to settle in urban ethnic enclaves',
              'Old immigrants settled exclusively in rural areas while new immigrants all became factory workers',
              'New immigrants were primarily Protestant while old immigrants were Catholic',
              'Old immigrants faced no discrimination while new immigrants were universally welcomed'
            ],
            correctAnswer: 0,
            explanation: 'The "new" immigrants from Italy, Poland, Russia, and other Southern/Eastern European nations faced intense prejudice due to their Catholic or Jewish faith, unfamiliar languages, and perceived cultural differences. They concentrated in cities, forming ethnic neighborhoods, and organizations like the American Protective Association campaigned against them — a nativism that culminated in the restrictive Immigration Acts of the 1920s.'
          }
        ]
      }
    }
  ]
}
`
  },
  {
    file: 'apush-progressivism-wwi-part1.ts',
    content: () => `export const apushProgressivismWwiPart1Data = {
  topicSlug: 'apush-progressivism-wwi',
  sections: [
    {
      id: 'apushpro1-intro',
      type: 'text' as const,
      content: \`
# 🇺🇸 Progressivism & World War I

**Part 1 of 7 — Reform Era & America's Entry into the Great War**

---

| Section |
|---------|
| 📖 Progressive Reforms |
| Muckrakers & Social Justice |
| Progressive Presidents |
| 📌 World War I: Causes & U.S. Entry |
| The Home Front & Aftermath |

> 🔑 **Key Concept:** Progressivism (1890s–1920s) was a broad reform movement responding to Gilded Age problems — corruption, monopolies, inequality, and unsafe conditions. The AP exam tests specific reforms and their connections to earlier and later movements.
      \`
    },
    {
      id: 'apushpro1-reforms',
      type: 'text' as const,
      content: \`
## 📖 The Progressive Movement (1890s–1920s)

### Core Progressive Beliefs
- Government should **actively** solve social problems (rejection of laissez-faire)
- Expert knowledge and science can improve society
- Democracy should be expanded to check corporate power
- Middle-class reformers leading change within the existing system

### Key Progressive Reforms

| Reform | What It Did |
|--------|------------|
| **Initiative** | Citizens can propose legislation directly |
| **Referendum** | Citizens vote directly on proposed laws |
| **Recall** | Citizens can remove elected officials before their term ends |
| **17th Amendment** (1913) | Direct election of U.S. Senators (previously chosen by state legislatures) |
| **Secret ballot** | Protected voter privacy, reducing machine control |
| **16th Amendment** (1913) | Federal income tax — gave government revenue for reform programs |
| **18th Amendment** (1919) | Prohibition — banned manufacture and sale of alcohol |
| **19th Amendment** (1920) | Women's suffrage — granted women the right to vote |

### Muckrakers — Journalists Exposing Problems

| Muckraker | Work | Issue Exposed |
|-----------|------|--------------|
| **Upton Sinclair** | *The Jungle* (1906) | Unsanitary conditions in meatpacking → Meat Inspection Act, Pure Food and Drug Act |
| **Ida Tarbell** | *The History of the Standard Oil Company* (1904) | Rockefeller's monopolistic practices → helped break up Standard Oil |
| **Jacob Riis** | *How the Other Half Lives* (1890) | Poverty and slum conditions among immigrants in NYC |
| **Lincoln Steffens** | *The Shame of the Cities* (1904) | Municipal corruption and political machines |
      \`
    },
    {
      id: 'apushpro1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Upton Sinclair wrote The Jungle (1906) primarily to expose:',
            options: [
              'The exploitation of immigrant workers in the meatpacking industry, though the public response focused on food safety',
              'The political corruption of Tammany Hall in New York City',
              'The environmental destruction caused by the railroad industry',
              'The unfair labor practices of Andrew Carnegie\\'s steel mills'
            ],
            correctAnswer: 0,
            explanation: 'Sinclair intended to expose the terrible working conditions and exploitation of immigrant laborers. However, the public was most shocked by his descriptions of unsanitary food processing — leading to the Meat Inspection Act and Pure Food and Drug Act (1906). Sinclair famously said: "I aimed at the public\\'s heart, and by accident I hit it in the stomach."'
          },
          {
            question: 'The 17th Amendment (1913) was a Progressive reform because it:',
            options: [
              'Took the power to choose Senators away from state legislatures and gave it directly to voters, making government more democratic',
              'Established a federal income tax to fund social welfare programs',
              'Prohibited the manufacture and sale of alcoholic beverages',
              'Extended voting rights to women for the first time'
            ],
            correctAnswer: 0,
            explanation: 'Before the 17th Amendment, U.S. Senators were chosen by state legislatures, which were often controlled by political machines and corporate interests. Direct election of senators was a key Progressive goal to make government more responsive to the people rather than to special interests.'
          }
        ]
      }
    },
    {
      id: 'apushpro1-wwi',
      type: 'text' as const,
      content: \`
## Progressive Presidents & World War I

### Progressive Presidents

| President | Key Actions |
|-----------|------------|
| **Theodore Roosevelt** (1901–09) | "Trust-buster" (Northern Securities case); Square Deal; conservation (national parks); Meat Inspection Act; "big stick" foreign policy |
| **William H. Taft** (1909–13) | More antitrust suits than TR; Payne-Aldrich Tariff angered progressives; split with Roosevelt |
| **Woodrow Wilson** (1913–21) | Federal Reserve Act (1913); Clayton Antitrust Act (1914); Federal Trade Commission; led U.S. into WWI |

### World War I: U.S. Entry (1917)

| Factor | Details |
|--------|---------|
| **Neutrality** | Wilson initially kept U.S. out: "He kept us out of war" (1916 campaign) |
| **Submarine warfare** | Germany's unrestricted U-boat attacks sank American merchant ships |
| **Lusitania** (1915) | British passenger liner torpedoed; 1,198 killed including 128 Americans |
| **Zimmermann Telegram** (1917) | German message proposing Mexican-German alliance against U.S.; intercepted by Britain |
| **U.S. enters** | April 1917; Wilson: "The world must be made safe for democracy" |

### The Home Front & Aftermath

- **Espionage Act** (1917) and **Sedition Act** (1918) — restricted free speech; jailed anti-war dissenters (Eugene Debs imprisoned)
- **Great Migration** — African Americans moved from rural South to industrial Northern cities for wartime factory jobs
- **Women** took factory and office jobs; contributed to suffrage momentum → 19th Amendment (1920)
- **Wilson's Fourteen Points** — vision for post-war peace; included self-determination, freedom of the seas, **League of Nations**
- **Treaty of Versailles** — imposed harsh terms on Germany; U.S. Senate **rejected** the treaty; never joined the League of Nations
      \`
    },
    {
      id: 'apushpro1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) What intercepted 1917 message revealed Germany's proposal for a military alliance with Mexico against the United States?

2) What term describes the mass movement of African Americans from the rural South to Northern cities in the early 20th century?

3) What international peacekeeping organization did Wilson propose as part of his Fourteen Points?

Use the exact historical term.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['Zimmermann Telegram', 'Great Migration', 'League of Nations'],
        hint1: 'Named after the German Foreign Minister who sent it',
        hint2: 'The ___ Migration — millions moved north for jobs',
        hint3: 'A "League" of ___',
        explanation: 'The Zimmermann Telegram (1917) was the final push for U.S. entry into WWI. The Great Migration (1910s–1970s) transformed American demographics and culture. The League of Nations was established but the U.S. never joined because the Senate (led by Henry Cabot Lodge) rejected the Treaty of Versailles.'
      }
    },
    {
      id: 'apushpro1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Reforms** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'The president known as a "trust-buster" who championed conservation and the Square Deal was ___',
            options: ['Theodore Roosevelt', 'Woodrow Wilson', 'William H. Taft', 'Andrew Jackson']
          },
          {
            label: 'The Progressive reform that allowed citizens to directly propose legislation was the ___',
            options: ['Initiative', 'Referendum', 'Recall', 'Filibuster']
          },
          {
            label: 'The 1913 act that created the U.S. central banking system was the ___',
            options: ['Federal Reserve Act', 'Sherman Antitrust Act', 'Interstate Commerce Act', 'Clayton Act']
          }
        ],
        correctAnswers: ['Theodore Roosevelt', 'Initiative', 'Federal Reserve Act'],
        hint1: 'Filed suit against Northern Securities; established national parks',
        hint2: 'Citizens "initiate" new laws rather than waiting for legislators',
        hint3: 'Created the "Fed" — still the central bank today',
        explanation: 'TR was the first Progressive president, using executive power aggressively to regulate business and protect the environment. The initiative gave citizens direct legislative power. The Federal Reserve Act (1913) created the central banking system that still manages U.S. monetary policy.'
      }
    },
    {
      id: 'apushpro1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which of the following BEST explains why the U.S. Senate rejected the Treaty of Versailles and membership in the League of Nations?',
            options: [
              'Senators feared that League membership would commit the U.S. to foreign wars without congressional approval, threatening national sovereignty',
              'The treaty was too lenient toward Germany and senators demanded harsher terms',
              'Wilson refused to submit the treaty to the Senate for ratification',
              'The American public overwhelmingly supported isolationism and opposed any involvement in European affairs'
            ],
            correctAnswer: 0,
            explanation: 'Senator Henry Cabot Lodge and the "Reservationists" objected primarily to Article X of the League Covenant, which they feared would obligate the U.S. to defend other nations militarily without congressional approval. Wilson refused to compromise, and the treaty failed to achieve the two-thirds Senate majority needed for ratification.'
          },
          {
            question: 'The Espionage Act (1917) and Sedition Act (1918) demonstrated that:',
            options: [
              'During wartime, the federal government was willing to restrict civil liberties in the name of national security — a recurring pattern in American history',
              'The U.S. Constitution\\'s First Amendment protections have always been absolute',
              'Progressive reformers consistently protected individual rights against government overreach',
              'World War I had no impact on domestic policy or civil liberties within the United States'
            ],
            correctAnswer: 0,
            explanation: 'These acts criminalized criticism of the government, military, or war effort — leading to ~2,000 prosecutions including socialist leader Eugene Debs. This tension between security and liberty is a recurring AP theme that appears in every era: the Alien and Sedition Acts (1798), Civil War suspensions of habeas corpus, McCarthyism, and the post-9/11 Patriot Act.'
          }
        ]
      }
    }
  ]
}
`
  },
  {
    file: 'apush-depression-wwii-part1.ts',
    content: () => `export const apushDepressionWwiiPart1Data = {
  topicSlug: 'apush-depression-wwii',
  sections: [
    {
      id: 'apushdep1-intro',
      type: 'text' as const,
      content: \`
# 🇺🇸 The Great Depression & World War II

**Part 1 of 7 — Economic Crisis, the New Deal & Global War**

---

| Section |
|---------|
| 📖 Causes of the Great Depression |
| FDR & the New Deal |
| New Deal Programs & Impact |
| 📌 World War II: Causes & U.S. Entry |
| The Home Front |

> 🔑 **Key Concept:** The AP exam tests the **New Deal's transformation of the federal government's role** — from limited intervention to active management of the economy and social welfare. This was the most significant expansion of federal power since the Civil War.
      \`
    },
    {
      id: 'apushdep1-depression',
      type: 'text' as const,
      content: \`
## 📖 The Great Depression (1929–1941)

### Causes

| Cause | Details |
|-------|---------|
| **Stock market speculation** | Buying on margin (borrowing to invest); stock prices inflated far beyond real value |
| **Overproduction** | Factories and farms produced more than consumers could buy |
| **Unequal wealth** | Top 1% held ~33% of wealth; workers couldn't afford goods they produced |
| **Bank failures** | No FDIC insurance; bank runs wiped out savings; ~9,000 banks failed by 1933 |
| **Tariffs** | Hawley-Smoot Tariff (1930) raised rates → trade wars → global depression deepened |
| **Federal Reserve** | Failed to expand money supply or rescue failing banks |

### The Human Cost

- **Unemployment:** 25% by 1933 (12–15 million workers)
- **Homelessness:** "Hoovervilles" — shantytowns named mockingly after President Hoover
- **Dust Bowl:** Severe drought + over-farming on Great Plains → massive soil erosion; Okies migrated to California
- **Hoover's response:** Believed in "rugged individualism" and voluntary cooperation; too slow to act; Bonus Army (1932) — WWI veterans demanded early payment of bonuses; Hoover ordered army to disperse them with tear gas

> ⚠️ **AP Alert:** The AP exam contrasts Hoover's philosophy (limited government; voluntary action) with FDR's approach (active federal intervention). This is a key ideological divide that still shapes American politics.
      \`
    },
    {
      id: 'apushdep1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which of the following was the MOST fundamental cause of the Great Depression?',
            options: [
              'Structural overproduction combined with extreme wealth inequality meant consumers couldn\\'t purchase what the economy produced',
              'The stock market crash of 1929 destroyed the entire American economy overnight',
              'European nations deliberately caused a global depression to weaken the United States',
              'Federal government spending was too high during the 1920s, creating unsustainable debt'
            ],
            correctAnswer: 0,
            explanation: 'While the stock market crash triggered the crisis, the underlying cause was systemic: factories and farms overproduced while wages remained stagnant and wealth concentrated at the top. Workers and farmers simply couldn\\'t buy enough goods to sustain the economy. The crash exposed this instability but didn\\'t cause it alone.'
          },
          {
            question: 'President Hoover\\'s response to the Depression was criticized primarily because:',
            options: [
              'His belief in limited government and voluntary action led to inadequate federal intervention as millions suffered',
              'He immediately raised taxes and cut government spending, worsening the crisis',
              'He nationalized all major industries and banks, alarming business leaders',
              'He refused to run for reelection, leaving the country without leadership'
            ],
            correctAnswer: 0,
            explanation: 'Hoover\\'s philosophy of "rugged individualism" led him to rely on voluntary cooperation from businesses and charities rather than direct federal relief. While he did create the Reconstruction Finance Corporation (1932), his actions were widely seen as too little, too late. The Bonus Army incident (1932) further damaged his image.'
          }
        ]
      }
    },
    {
      id: 'apushdep1-newdeal',
      type: 'text' as const,
      content: \`
## FDR & the New Deal

**Franklin D. Roosevelt** won the 1932 election in a landslide and launched the **New Deal** — the largest expansion of federal power in American history to that point.

### Key New Deal Programs (the "Alphabet Soup")

| Program | Acronym | Purpose | Category |
|---------|---------|---------|----------|
| **Civilian Conservation Corps** | CCC | Employed young men in conservation projects (planting trees, building trails) | Relief |
| **Agricultural Adjustment Act** | AAA | Paid farmers to reduce production to raise crop prices | Recovery |
| **Tennessee Valley Authority** | TVA | Built dams for flood control, electricity, and jobs in the rural South | Recovery |
| **National Recovery Admin.** | NRA | Set codes for fair competition, wages, and prices; struck down by Supreme Court (1935) | Recovery |
| **Works Progress Admin.** | WPA | Employed ~8.5 million people (roads, bridges, schools, arts projects) | Relief |
| **Social Security Act** | SSA (1935) | Retirement pensions, unemployment insurance, aid to disabled and dependent children | Reform |
| **Wagner Act** | NLRA (1935) | Guaranteed workers' right to organize unions and collective bargaining | Reform |
| **FDIC** | (1933) | Insured bank deposits up to \\$2,500 (now \\$250,000); restored confidence in banks | Reform |
| **SEC** | (1934) | Regulated stock market; prevented fraud and speculation abuses | Reform |

### The Three R's: **Relief** (immediate help), **Recovery** (economic restart), **Reform** (prevent future crises)

### Criticism of the New Deal

| From the **Right** | From the **Left** |
|---|---|
| Government overreach; socialism; too much spending | Didn't go far enough to redistribute wealth |
| Business leaders feared regulation and labor power | **Huey Long** — "Share Our Wealth" (cap fortunes, guaranteed income) |
| Supreme Court struck down key programs (NRA, AAA) | **Dr. Francis Townsend** — proposed generous pensions for elderly |

> 🔑 **AP Connection:** The New Deal did NOT end the Depression — **World War II** did (through massive military spending). But the New Deal permanently transformed the role of the federal government and created the modern social safety net.
      \`
    },
    {
      id: 'apushdep1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) What 1935 law created retirement pensions, unemployment insurance, and aid to dependent children?

2) What New Deal agency employed ~8.5 million people building roads, bridges, schools, and arts projects?

3) What agency, created in 1933, insured bank deposits to prevent future bank runs?

Use the exact historical term or abbreviation.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['Social Security Act', 'WPA', 'FDIC'],
        hint1: 'Still exists today — provides retirement benefits to Americans over 65',
        hint2: 'Works Progress ___',
        hint3: 'Federal Deposit Insurance ___',
        explanation: 'The Social Security Act (1935) is the New Deal\\'s most enduring legacy — still providing retirement income and social insurance today. The WPA (Works Progress Administration) was the largest New Deal employment program. The FDIC (Federal Deposit Insurance Corporation) ended bank panics by guaranteeing deposits.'
      }
    },
    {
      id: 'apushdep1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Concepts** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'The severe drought and soil erosion crisis on the Great Plains in the 1930s was called the ___',
            options: ['Dust Bowl', 'Great Migration', 'Bonus March', 'Gold Rush']
          },
          {
            label: 'FDR\\'s strategy of categorizing New Deal programs by their purpose is remembered as the ___',
            options: ['Three Rs (Relief, Recovery, Reform)', 'Fair Deal', 'Square Deal', 'New Frontier']
          },
          {
            label: 'The 1935 law that guaranteed workers the right to organize unions and collectively bargain was the ___',
            options: ['Wagner Act', 'Taft-Hartley Act', 'Sherman Act', 'Clayton Act']
          }
        ],
        correctAnswers: ['Dust Bowl', 'Three Rs (Relief, Recovery, Reform)', 'Wagner Act'],
        hint1: 'Drove "Okies" to California; chronicled by John Steinbeck in The Grapes of Wrath',
        hint2: 'Relief = immediate help; Recovery = economic restart; Reform = prevent future crises',
        hint3: 'Also called the National Labor Relations Act (NLRA)',
        explanation: 'The Dust Bowl (1930s) was an ecological disaster caused by drought and over-farming. The Three Rs organized New Deal programs by purpose. The Wagner Act (1935) was the most important labor law in American history, establishing the NLRB and collective bargaining rights.'
      }
    },
    {
      id: 'apushdep1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The New Deal is BEST understood as:',
            options: [
              'A fundamental expansion of the federal government\\'s role in the economy and social welfare that created lasting institutions while falling short of ending the Depression itself',
              'A socialist revolution that permanently eliminated capitalism in the United States',
              'A conservative program that reduced government involvement in the economy',
              'A temporary emergency program that was completely dismantled after World War II'
            ],
            correctAnswer: 0,
            explanation: 'The New Deal permanently transformed American governance — Social Security, FDIC, SEC, labor rights, and federal economic management all endure today. However, the Depression only fully ended with WWII military spending. The New Deal was neither revolutionary enough for the left (didn\\'t redistribute wealth) nor limited enough for the right (expanded federal power dramatically).'
          },
          {
            question: 'Which of the following MOST directly connects the New Deal to earlier Progressive Era reforms?',
            options: [
              'Both movements expanded federal regulation of the economy and social conditions in response to the failures of laissez-faire policies',
              'Both movements reduced the size of the federal government and promoted states\\' rights',
              'Both movements primarily benefited wealthy industrialists and corporations',
              'Both movements were led by Republican presidents who opposed business interests'
            ],
            correctAnswer: 0,
            explanation: 'The New Deal built on Progressive Era foundations — both rejected laissez-faire economics and argued the government must actively regulate the economy and protect citizens. The Pure Food and Drug Act (1906) parallels the SEC (1934); the income tax (16th Amendment, 1913) funded New Deal spending. FDR\\'s programs dramatically expanded what Progressives had started.'
          }
        ]
      }
    }
  ]
}
`
  }
];

for (const t of topics) {
  const filePath = join(DIR, t.file);
  writeFileSync(filePath, t.content(), 'utf-8');
  console.log(`✅ Wrote ${t.file}`);
}

console.log(`\nDone: ${topics.length} files written.`);
