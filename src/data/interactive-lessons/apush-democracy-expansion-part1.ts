export const apushDemocracyExpansionPart1Data = {
  topicSlug: 'apush-democracy-expansion',
  sections: [
    {
      id: 'apushdem1-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 Democracy & Expansion

**Part 1 of 7 — Jacksonian Democracy & Manifest Destiny**

---

| Section |
|---------|
| 📖 Jacksonian Democracy |
| Indian Removal & the Trail of Tears |
| Manifest Destiny |
| 📌 Westward Expansion & Its Consequences |
| The Market Revolution |

> 🔑 **Key Concept:** The AP exam tests how expanding democracy for white men coincided with the dispossession of Native Americans and the expansion of slavery — revealing deep contradictions in the era's ideals.
      `
    },
    {
      id: 'apushdem1-jackson',
      type: 'text' as const,
      content: `
## 📖 Jacksonian Democracy (1828–1840s)

**Andrew Jackson's** presidency (1829–37) represented a dramatic expansion of political participation — but only for **white men**.

### Key Features of Jacksonian Democracy

| Feature | Details |
|---------|---------|
| **Expanded suffrage** | Most states eliminated property requirements for white male voters by the 1830s |
| **Spoils system** | Jackson rewarded political supporters with government jobs ("to the victor belong the spoils") |
| **Opposition to the National Bank** | Jackson vetoed the recharter of the Second Bank of the United States (1832); saw it as a tool of the wealthy elite |
| **Nullification Crisis** | South Carolina (led by John C. Calhoun) declared federal tariffs null and void; Jackson threatened military force; resolved by compromise tariff (1833) |
| **Indian Removal** | Forced relocation of southeastern Native nations to Indian Territory (Oklahoma) |

> ⚠️ **AP Alert:** The AP exam often asks you to evaluate whether Jacksonian Democracy was truly "democratic." Key tension: it expanded democracy for white men while simultaneously dispossessing Native Americans and doing nothing to end slavery.

### Indian Removal Act (1830) & Trail of Tears

- Jackson signed the **Indian Removal Act** (1830) — authorized forced relocation of Native nations east of the Mississippi
- **Cherokee Nation v. Georgia** (1831) and **Worcester v. Georgia** (1832) — Supreme Court (Chief Justice Marshall) ruled in favor of Cherokee sovereignty
- Jackson allegedly responded: "John Marshall has made his decision; now let him enforce it"
- **Trail of Tears** (1838–39): ~16,000 Cherokee forced to march to Oklahoma; ~4,000 died from disease, exposure, and starvation
- Also affected: Choctaw, Creek, Chickasaw, and Seminole nations
      `
    },
    {
      id: 'apushdem1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Jackson\'s veto of the Second Bank of the United States was significant because it:',
            options: [
              'Demonstrated presidential power to challenge Congress and the economic elite on behalf of "common" voters',
              'Led to immediate economic prosperity and eliminated all national debt',
              'Was overridden by a two-thirds vote in both houses of Congress',
              'Established the Federal Reserve System that exists today'
            ],
            correctAnswer: 0,
            explanation: 'Jackson\'s Bank Veto (1832) was both an assertion of executive power and a populist statement against what he called a "monster" institution that benefited the wealthy. He argued the Bank was unconstitutional despite the Supreme Court ruling otherwise in McCulloch v. Maryland (1819).'
          },
          {
            question: 'The significance of Worcester v. Georgia (1832) lies in the fact that:',
            options: [
              'The Supreme Court recognized Cherokee sovereignty, but President Jackson defied the ruling and proceeded with removal',
              'It established the principle of judicial review for the first time',
              'It ruled that all Native American treaties were legally void',
              'It gave Congress the power to regulate Native American trade'
            ],
            correctAnswer: 0,
            explanation: 'In Worcester v. Georgia, Chief Justice Marshall ruled that Georgia had no authority over Cherokee lands. Jackson\'s refusal to enforce the decision exposed the limits of judicial power when the executive branch refuses to act — a key AP concept about checks and balances.'
          }
        ]
      }
    },
    {
      id: 'apushdem1-manifest',
      type: 'text' as const,
      content: `
## Manifest Destiny & Westward Expansion

**Manifest Destiny** — the belief that American expansion across the continent was inevitable, justified, and divinely ordained.

### Key Expansion Events

| Event | Date | Details |
|-------|------|---------|
| **Louisiana Purchase** | 1803 | Doubled U.S. territory; $15 million from France; raised constitutional questions (no explicit power to buy territory) |
| **Missouri Compromise** | 1820 | Admitted Missouri (slave) and Maine (free); banned slavery above 36°30' line in Louisiana Territory |
| **Texas Annexation** | 1845 | Republic of Texas (independent since 1836) annexed as slave state |
| **Oregon Treaty** | 1846 | U.S. and Britain split Oregon Territory at 49th parallel |
| **Mexican-American War** | 1846–48 | U.S. provoked war; Treaty of Guadalupe Hidalgo → U.S. gained California, Nevada, Utah, Arizona, New Mexico |
| **Gadsden Purchase** | 1853 | Bought strip of land from Mexico for a southern railroad route |

### The Market Revolution (1800s–1840s)

Alongside territorial expansion, the **Market Revolution** transformed the American economy:

- **Transportation:** Erie Canal (1825), steamboats, railroads connected interior to markets
- **Industry:** Textile mills in New England (Lowell system — employed young women); interchangeable parts (Eli Whitney)
- **Agriculture:** Cotton gin (1793) → cotton boom → increased demand for enslaved labor in the South
- **Result:** North industrialized; South deepened its dependence on slavery and cotton — setting the stage for sectional conflict
      `
    },
    {
      id: 'apushdem1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What term describes the belief that American westward expansion was inevitable and divinely ordained?

2) What 1820 agreement admitted Missouri as a slave state and Maine as a free state?

3) What was the forced march of ~16,000 Cherokee to Indian Territory in which ~4,000 died called?

Use the exact historical term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Manifest Destiny', 'Missouri Compromise', 'Trail of Tears'],
        hint1: 'Two words — America\'s "destiny" was "manifest" (obvious)',
        hint2: 'The ___ Compromise of 1820',
        hint3: 'Trail of ___',
        explanation: 'Manifest Destiny was coined by journalist John O\'Sullivan in 1845. The Missouri Compromise (1820) temporarily resolved the slavery-in-territories debate. The Trail of Tears (1838–39) forcibly relocated Cherokee and other nations to present-day Oklahoma.'
      }
    },
    {
      id: 'apushdem1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Events** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The 1803 land deal that doubled U.S. territory was the ___',
            options: ['Louisiana Purchase', 'Gadsden Purchase', 'Treaty of Guadalupe Hidalgo', 'Oregon Treaty']
          },
          {
            label: 'Andrew Jackson\'s practice of rewarding political allies with government jobs was called the ___',
            options: ['Spoils system', 'Merit system', 'Civil service', 'Patronage Act']
          },
          {
            label: 'The invention that dramatically increased cotton production and slavery\'s expansion was the ___',
            options: ['Cotton gin', 'Spinning jenny', 'Power loom', 'Steam engine']
          }
        ],
        correctAnswers: ['Louisiana Purchase', 'Spoils system', 'Cotton gin'],
        hint1: 'Purchased from Napoleon\'s France for $15 million',
        hint2: '"To the victor belong the ___"',
        hint3: 'Invented by Eli Whitney in 1793',
        explanation: 'The Louisiana Purchase (1803) was Thomas Jefferson\'s biggest achievement despite his strict-constructionist concerns. The spoils system rewarded loyalty over competence. The cotton gin (1793) made short-staple cotton profitable, causing cotton production — and slavery — to explode across the Deep South.'
      }
    },
    {
      id: 'apushdem1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following BEST explains why the Mexican-American War (1846–48) intensified the national debate over slavery?',
            options: [
              'The vast new territories acquired from Mexico forced Congress to decide whether slavery would expand westward, reopening the conflict the Missouri Compromise had temporarily resolved',
              'Mexico demanded that the U.S. abolish slavery as a condition of the peace treaty',
              'American soldiers refused to fight unless slavery was abolished in the new territories',
              'The war was fought primarily to free enslaved people in Mexican territory'
            ],
            correctAnswer: 0,
            explanation: 'The Treaty of Guadalupe Hidalgo added over 500,000 square miles to the U.S. The question of whether slavery would be allowed in these new territories (raised by the Wilmot Proviso in 1846) reignited sectional tensions that had been managed since the Missouri Compromise — ultimately leading to the Compromise of 1850, the Kansas-Nebraska Act, and the Civil War.'
          },
          {
            question: 'A critic of Jacksonian Democracy in 1835 might MOST convincingly argue that:',
            options: [
              'Expanding voting rights for white men while forcibly removing Native Americans revealed the era\'s democracy was built on racial exclusion',
              'Jackson\'s policies successfully achieved equality for all Americans regardless of race',
              'The Second Bank of the United States should have been given even more power',
              'Property requirements for voting should have been made stricter to prevent mob rule'
            ],
            correctAnswer: 0,
            explanation: 'The central contradiction of the Jacksonian era was the simultaneous expansion of democracy for white men and the violent exclusion of Native Americans, enslaved African Americans, and women. This paradox — democratic ideals applied selectively — is a core AP theme.'
          }
        ]
      }
    }
  ]
}
