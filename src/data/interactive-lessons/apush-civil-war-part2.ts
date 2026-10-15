export const apushCivilWarPart2Data = {
  topicSlug: 'apush-civil-war',
  sections: [
    {
      id: 'apushciv2-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 The Civil War

**Part 2 of 7 — The Collapse of Compromise, 1846–1861**

---

| Section |
|---------|
| 📖 The Question That Would Not Go Away |
| Two Ideologies: Free Labor and the Positive Good |
| The Compromise of 1850 and the Fugitive Slave Act |
| The Party System Breaks Apart |
| The Election of 1860 and Two Waves of Secession |
| Causation Skill: Long-Term, Short-Term and Trigger |

> 🔑 **Key Concept:** The CED (Key Concept 5.2) explains the war as the result of **ideological and economic differences over slavery** that turned the question of slavery in the western territories into a crisis. Part 1 listed the events. This part explains the **mechanism**: each attempt at compromise solved one problem and created a worse one, until the national parties that had held the Union together broke apart along sectional lines.
      `
    },
    {
      id: 'apushciv2-wilmot',
      type: 'text' as const,
      content: `
## 📖 The Question That Would Not Go Away

Before 1846 the Missouri Compromise line (36°30') seemed to settle where slavery could spread. The war with Mexico reopened the question, because it added land that the 1820 line had never covered.

- **Wilmot Proviso (August 1846):** Pennsylvania Democrat David Wilmot proposed that slavery be banned in any territory taken from Mexico. It passed the House more than once but always failed in the Senate, where the South had equal votes.
- **Why it mattered:** Votes on the Proviso split **by section, not by party**. Northern Democrats and Whigs voted for it; Southern Democrats and Whigs voted against it. That pattern was the first sign that slavery could break the national parties.
- **Free Soil Party (1848):** Antislavery Democrats, Whigs and Liberty Party men nominated Martin Van Buren on the slogan "Free Soil, Free Speech, Free Labor, and Free Men." They won about 10 percent of the popular vote and no states, but they showed that a Northern antislavery party could draw votes.

### Four Answers to the Territorial Question

| Position | Leading Voices | What It Said About Slavery in the Territories |
|---|---|---|
| **Free soil** | Wilmot; later the Republicans | Congress must keep slavery **out** of all territories |
| **Extend the 36°30' line** | Many moderates; later the Crittenden plan | Divide the West: slavery south of the line, free soil north of it |
| **Popular sovereignty** | Lewis Cass (1848), Stephen Douglas | Let the settlers of each territory decide |
| **Southern rights** | John C. Calhoun | Slaveholders may take enslaved people into **any** territory; Congress must protect that property |

> 🔑 **AP Connection:** Notice that the four positions run from "never" to "everywhere." Every compromise of the 1850s tried to occupy the middle, and the *Dred Scott* decision (1857) eventually endorsed the most extreme Southern position, which left no middle ground at all.
      `
    },
    {
      id: 'apushciv2-ideology',
      type: 'text' as const,
      content: `
## Two Ideologies: Free Labor and the Positive Good

The territorial fight was so bitter because each section saw the West as the place where its whole way of life would either grow or die.

### Free Labor (the North)

Northern Republicans argued that a free society let a wage earner save money, buy land and become independent. Slavery degraded all labor and blocked white farmers from the West, because no free family could compete with plantation agriculture. The **free-labor ideology** was antislavery, but it was usually not a demand for racial equality: many free-soilers wanted the West kept for **white** settlers.

### The Positive Good (the South)

Southern defenders moved from calling slavery a "necessary evil" to calling it a **positive good**.

| Defender | Argument |
|---|---|
| **John C. Calhoun** (Senate speech, 1837) | Slavery was "a positive good" that benefited both races |
| **George Fitzhugh**, *Cannibals All!* (1857) | Northern "wage slaves" were treated worse than enslaved people, whose owners cared for them in old age |
| **James Henry Hammond** ("Mudsill" speech, 1858) | Every society needs a laboring class at the bottom; the South had made that class enslaved Black people. He also declared "Cotton is king" |

### Why the West Mattered to Both

| North | South |
|---|---|
| Western land was the safety valve for free workers and immigrants | Cotton exhausted soil, so planters needed new land |
| More free states meant more antislavery votes in Congress | More slave states were needed to keep a veto in the Senate |
| Slavery's spread would make it permanent and national | Exclusion from common territory insulted Southern equality |

> 🔑 **AP Connection:** The CED asks you to explain how **economic and ideological** differences reinforced each other. A strong essay links the free-labor ideal and the positive-good argument to the specific fight over the territories, rather than describing "North industrial, South agricultural" in general terms.
      `
    },
    {
      id: 'apushciv2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The voting pattern on the Wilmot Proviso (1846) was significant mainly because it showed that',
            options: [
              'members of Congress divided over slavery by section rather than by party',
              'the Whig Party had become the main defender of slavery in the territories',
              'most Northern voters wanted slavery abolished in the states where it existed',
              'the Senate was more willing than the House to restrict slavery in new lands'
            ],
            correctAnswer: 0,
            explanation: 'Northerners of both parties backed the Proviso and Southerners of both parties opposed it, an early sign that slavery could split the national parties. The Senate, not the House, blocked it, and the Proviso concerned territories, not existing slave states.'
          },
          {
            question: 'Which of the following best describes the free-labor ideology of the 1850s?',
            options: [
              'A demand that freed people receive land and full voting rights at once',
              'A belief that slavery degraded work and closed the West to free farmers',
              'A plan to gradually free enslaved people and resettle them in Africa',
              'A union movement seeking higher wages and shorter hours in factories'
            ],
            correctAnswer: 1,
            explanation: 'Free-labor thinkers held that slavery cheapened all work and blocked white families from rising through land ownership in the West. It was not a call for racial equality, a colonization scheme, or a labor-union program.'
          },
          {
            question: 'George Fitzhugh\'s argument in Cannibals All! (1857) is best understood as an example of',
            options: [
              'the moral appeal to Northern readers made in slave narratives',
              'the free-soil case for keeping enslaved people out of the West',
              'the proslavery claim that slavery was kinder than wage labor',
              'the nativist case against Irish and German Catholic immigrants'
            ],
            correctAnswer: 2,
            explanation: 'Fitzhugh argued that Northern "wage slaves" were worse off than enslaved people, a core move in the positive-good defense of slavery. Slave narratives, free-soil arguments and nativism all opposed or ignored that claim.'
          }
        ]
      }
    },
    {
      id: 'apushciv2-1850',
      type: 'text' as const,
      content: `
## The Compromise of 1850 and the Fugitive Slave Act

California's gold rush population applied for admission as a **free state** in 1849. Admitting it would give the free states a 16–15 Senate majority, and Southern leaders threatened disunion.

### How the Compromise Passed

1. **Henry Clay** bundled the measures into a single "omnibus" bill in early 1850.
2. The omnibus **failed** in July 1850, because members who liked one part voted against the whole.
3. President Zachary Taylor, who had opposed concessions to the South, **died** in July 1850; Millard Fillmore supported compromise.
4. **Stephen Douglas** split the omnibus into separate bills. Each passed with a different coalition, and Fillmore signed them in September 1850.

### The Five Measures

| For the North | For the South | Split the Difference |
|---|---|---|
| California admitted as a free state | A much stronger **Fugitive Slave Act** | New Mexico and Utah territories organized with no ban on slavery (popular sovereignty) |
| The **slave trade** (not slavery) abolished in Washington, D.C. | | Texas gave up its claim to eastern New Mexico; the federal government took on Texas's debt |

### How the Fugitive Slave Act Worked

- Cases went to **federal commissioners**, not juries. A commissioner was paid **\\$10** for ruling that the person was a fugitive and **\\$5** for ruling that the person was free.
- The accused person **could not testify** in his or her own defense.
- Federal marshals could order bystanders to help capture fugitives; anyone who helped a fugitive faced fines up to **\\$1,000** and six months in jail.

### Northern Resistance

- Several Northern states passed **personal liberty laws** that barred state officials and jails from helping enforce the act.
- In **1854** a crowd in Boston tried to free **Anthony Burns**, who had escaped slavery in Virginia. The federal government sent troops and a revenue cutter to carry him back, at great cost. Many Bostonians who had ignored abolitionists now saw slavery's power reaching into their own streets.

> 🔑 **AP Connection:** The Fugitive Slave Act is a strong **unintended consequence** example. A law meant to calm the South made slavery visible in Northern cities and turned moderate Northerners against the "Slave Power."
      `
    },
    {
      id: 'apushciv2-parties',
      type: 'text' as const,
      content: `
## The Party System Breaks Apart

From the 1830s to the early 1850s the **Whigs and Democrats** were national parties with members in both sections. To win, each had to keep slavery out of national debate. The Kansas-Nebraska Act (1854) destroyed that arrangement.

| Party | What Happened, 1854–1860 |
|---|---|
| **Whigs** | Northern Whigs refused to work with Southern Whigs after Kansas-Nebraska; the party disappeared as a national force by 1856 |
| **American (Know-Nothing) Party** | A **nativist** party hostile to Irish and German Catholic immigrants, it won many Northern offices in 1854–1855 but then split over slavery |
| **Republicans** | Founded in 1854 by former Whigs, Free Soilers and antislavery Democrats; opposed slavery's **expansion** (not slavery in existing states); a purely Northern party |
| **Democrats** | The last national party; split in 1860 when Southern delegates demanded a federal slave code for the territories and Northern Democrats backed Douglas's popular sovereignty |

### The Election of 1856

| Candidate | Party | Electoral Votes |
|---|---|---|
| James Buchanan | Democrat | 174 |
| John C. Frémont | Republican | 114 |
| Millard Fillmore | American (Know-Nothing) | 8 |

Frémont carried 11 of the 16 free states only two years after his party was founded. Southern leaders warned that a Republican victory would mean secession.

### Lecompton and the Democratic Split (1857–1858)

Proslavery Kansans wrote the **Lecompton Constitution**, and President Buchanan asked Congress to admit Kansas under it. Douglas opposed it because most Kansans had not approved it, which broke his alliance with Southern Democrats. Kansas voters rejected Lecompton in August 1858, and Kansas entered the Union as a free state in January 1861.

In the 1858 debates with Lincoln, Douglas offered the **Freeport Doctrine**: settlers could keep slavery out simply by refusing to pass the local laws needed to protect it, even after *Dred Scott*. That answer kept his Illinois Senate seat but cost him Southern support for 1860.
      `
    },
    {
      id: 'apushciv2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Development to Its Party** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Opposed the spread of slavery into the territories and drew its votes only from the free states: ___',
            options: ['Democrats', 'Know-Nothings', 'Republicans', 'Constitutional Union']
          },
          {
            label: 'Won many Northern offices in 1854–1855 by campaigning against Catholic immigrants: ___',
            options: ['Know-Nothings', 'Free Soilers', 'Whigs', 'Republicans']
          },
          {
            label: 'Split into Northern and Southern wings in 1860 over a federal slave code for the territories: ___',
            options: ['Whigs', 'Republicans', 'Free Soilers', 'Democrats']
          }
        ],
        correctAnswers: ['Republicans', 'Know-Nothings', 'Democrats'],
        hint1: 'Founded in 1854; ran Frémont in 1856 and Lincoln in 1860.',
        hint2: 'The American Party, nicknamed for its members\' secrecy.',
        hint3: 'Douglas led one wing and Breckinridge the other.',
        explanation: 'The Republicans were the sectional antislavery-expansion party, the Know-Nothings were the nativist American Party, and the Democrats were the last national party until they split in 1860.'
      }
    },
    {
      id: 'apushciv2-1860',
      type: 'text' as const,
      content: `
## The Election of 1860 and Two Waves of Secession

| Candidate | Party | Base | Popular Vote | Electoral Votes |
|---|---|---|---|---|
| **Abraham Lincoln** | Republican | Free states | about 40% | 180 |
| **John C. Breckinridge** | Southern Democrat | Lower South | about 18% | 72 |
| **John Bell** | Constitutional Union | Upper South (VA, KY, TN) | about 13% | 39 |
| **Stephen Douglas** | Northern Democrat | National, but won only Missouri and part of New Jersey | about 30% | 12 |

### Reading the Table

- Lincoln won a clear **electoral majority** (152 was needed) with about 40 percent of the popular vote. He carried every free state except part of New Jersey.
- Lincoln was **not on the ballot** in ten Southern states. Southern leaders concluded that the North could now elect a president without a single Southern vote.
- Douglas, the only candidate who campaigned in both sections, came second in the popular vote but almost last in the Electoral College.

### Compromise Fails Once More

Senator John J. Crittenden of Kentucky proposed in December 1860 to extend the **36°30' line to the Pacific** through constitutional amendments that could never be repealed. Lincoln told Republicans to reject any extension of slavery into the territories, because that was the one principle on which his party had won. The plan died in committee.

### Two Waves of Secession

| Wave | States | Trigger |
|---|---|---|
| **First (Dec 1860–Feb 1861)** | South Carolina (Dec 20, 1860), Mississippi, Florida, Alabama, Georgia, Louisiana, Texas | Lincoln's **election**; in six of these seven states enslaved people made up more than 40 percent of the population |
| *Confederacy formed* | Montgomery, Alabama, February 1861; Jefferson Davis president | |
| **Second (Apr–Jun 1861)** | Virginia, Arkansas, North Carolina, Tennessee | The firing on **Fort Sumter** (Apr 12–13) and Lincoln's call for 75,000 volunteers (Apr 15) |
| **Stayed in the Union** | Delaware, Maryland, Kentucky, Missouri (slave states) | Unionist majorities plus federal pressure; western Virginia broke away and became West Virginia (1863) |

> 🔑 **AP Connection:** The Upper South seceded only when forced to choose between fighting the Lower South and fighting the Union. That distinction is a good **complexity** point: secession was a process, not a single event.
      `
    },
    {
      id: 'apushciv2-causation',
      type: 'text' as const,
      content: `
## Causation Skill: Long-Term, Short-Term and Trigger

AP causation questions reward students who sort causes by **time scale** and explain how they connect.

| Level | Causes | How It Connects to the Next Level |
|---|---|---|
| **Long-term (1820s–1840s)** | Expansion of cotton slavery; free-labor and positive-good ideologies; the 1820 line as a fragile settlement | Made every new territory a contest between two incompatible societies |
| **Short-term (1846–1858)** | Wilmot Proviso; Fugitive Slave Act; Kansas-Nebraska Act; collapse of the Whigs; *Dred Scott* | Destroyed the national parties and every legislative compromise |
| **Trigger (1860–1861)** | Lincoln's election; failure of Crittenden; Fort Sumter | Lower South seceded over the election; Upper South seceded over the call for troops |

### Worked Example: Turning a List into an Argument

**Weak:** "The Kansas-Nebraska Act, *Dred Scott* and John Brown's raid caused the Civil War."

**Strong:** "The Kansas-Nebraska Act (1854) repealed the 36°30' line, which shattered the Whig Party and produced a purely Northern Republican Party. Once *Dred Scott* (1857) declared that Congress could not ban slavery in the territories, the Republican platform itself seemed unconstitutional to Southerners, so the election of a Republican president in 1860 looked to them like a threat that only secession could answer."

The strong version explains **how** each event made the next one more dangerous, which is what earns the analysis point.
      `
    },
    {
      id: 'apushciv2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice: Causation** 🎯

> "It matters not what way the Supreme Court may hereafter decide as to the abstract question whether slavery may or may not go into a Territory under the Constitution, the people have the lawful means to introduce it or exclude it as they please, for the reason that slavery cannot exist a day or an hour anywhere, unless it is supported by local police regulations."
>
> — Stephen Douglas, debate with Abraham Lincoln at Freeport, Illinois, August 27, 1858
      `,
      exercise: {
        questions: [
          {
            question: 'The argument in the excerpt most directly weakened Douglas\'s standing with which group?',
            options: [
              'Southern Democrats who insisted that Congress protect slavery in every territory',
              'Illinois Republicans who wanted Congress to keep slavery out of the territories',
              'Northern abolitionists who wanted slavery ended immediately in the existing states',
              'Former Know-Nothings who wanted longer waiting periods before immigrants could vote'
            ],
            correctAnswer: 0,
            explanation: 'Southern Democrats read the Freeport Doctrine as a way to evade Dred Scott, and they abandoned Douglas in 1860. Republicans and abolitionists already opposed him, and the passage says nothing about immigration.'
          },
          {
            question: 'The split described above contributed most directly to which of the following?',
            options: [
              'The adoption of the Crittenden Compromise by Congress in early 1861',
              'The admission of Kansas to the Union as a slave state under Lecompton',
              'The division of the Democrats into two wings for the 1860 election',
              'The rise of the Free Soil Party as a third party in the election of 1848'
            ],
            correctAnswer: 2,
            explanation: 'In 1860 Northern Democrats nominated Douglas and Southern Democrats nominated Breckinridge, so the last national party ran two candidates and Lincoln won the Electoral College. Crittenden failed, Kansas entered as a free state, and the Free Soil Party came a decade earlier.'
          }
        ]
      }
    }
  ]
}
