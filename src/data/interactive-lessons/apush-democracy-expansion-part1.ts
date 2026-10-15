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
- **Cherokee Nation v. Georgia** (1831) — the Marshall Court **dismissed** the Cherokee suit for lack of jurisdiction, calling the Cherokee a "domestic dependent nation" rather than a foreign state
- **Worcester v. Georgia** (1832) — the Court **ruled for** the Cherokee position: Georgia's laws had no force in Cherokee territory
- Georgia ignored the Worcester ruling and Jackson declined to enforce it; the famous line "John Marshall has made his decision; now let him enforce it" was attributed to him years later and is probably apocryphal
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
            question: 'Jackson\'s veto of the bill to recharter the Second Bank of the United States (1832) is significant mainly because it',
            options: [
              'was overridden by Congress and kept the Bank open until the Civil War',
              'followed a Supreme Court ruling that the national bank was unconstitutional',
              'presented the president as a defender of ordinary voters against privilege',
              'created the Independent Treasury to hold federal funds after the Bank closed'
            ],
            correctAnswer: 2,
            explanation: 'Jackson\'s veto message attacked the Bank as a tool of "the rich and powerful" and made the veto a political weapon, not just a constitutional check. Congress did not override it, the Court had upheld the Bank in McCulloch v. Maryland (1819), and the Independent Treasury came under Van Buren in 1840.'
          },
          {
            question: 'Which statement best describes the significance of Worcester v. Georgia (1832)?',
            options: [
              'The Court dismissed the Cherokee suit, calling them a domestic dependent nation.',
              'The Court upheld the Indian Removal Act as a valid use of the treaty power.',
              'The Court voided the state\'s laws on Cherokee land, but removal went on.',
              'The Court ruled that Native Americans born in the United States were citizens.'
            ],
            correctAnswer: 2,
            explanation: 'Marshall held that Georgia\'s laws had no force in Cherokee territory, but Georgia ignored the ruling and Jackson declined to enforce it. The dismissal and the phrase "domestic dependent nation" come from the earlier case, Cherokee Nation v. Georgia (1831).'
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
| **Louisiana Purchase** | 1803 | Doubled U.S. territory; \\$15 million from France; raised constitutional questions (no explicit power to buy territory) |
| **Missouri Compromise** | 1820 | Admitted Missouri (slave) and Maine (free); banned slavery above 36°30' line in Louisiana Territory |
| **Texas Annexation** | 1845 | Republic of Texas (independent since 1836) annexed as slave state |
| **Oregon Treaty** | 1846 | U.S. and Britain split Oregon Territory at 49th parallel |
| **Mexican-American War** | 1846–48 | Polk sent troops into land claimed by both nations, and war followed; Treaty of Guadalupe Hidalgo → U.S. gained California, Nevada, Utah, most of Arizona and New Mexico, and parts of Colorado and Wyoming |
| **Gadsden Purchase** | 1853 | Bought strip of land from Mexico for a southern railroad route |

### The Market Revolution (1800s–1840s)

Alongside territorial expansion, the **Market Revolution** transformed the American economy:

- **Transportation:** Erie Canal (1825), steamboats, railroads connected interior to markets
- **Industry:** Textile mills in New England (Lowell system — employed young women); interchangeable parts (promoted by Eli Whitney, achieved mainly at the federal armories)
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
        hint1: 'Purchased from Napoleon\'s France for 15 million dollars',
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
            question: 'The Mexican-American War (1846–48) intensified the national debate over slavery mainly because',
            options: [
              'Mexico required the United States to end slavery as a condition of peace',
              'the new lands forced Congress to decide whether slavery could expand',
              'the war was fought to recover enslaved people who had escaped into Mexico',
              'the peace treaty divided the new lands along the Missouri Compromise line'
            ],
            correctAnswer: 1,
            explanation: 'The Mexican Cession reopened the question the Missouri Compromise had settled only for the Louisiana Purchase, starting with the Wilmot Proviso (1846) and leading to the Compromise of 1850. The treaty itself said nothing about slavery.'
          },
          {
            question: 'A critic of Jacksonian democracy writing in 1835 could most convincingly argue that',
            options: [
              'its tariff policy had ended all protection for northern manufacturing',
              'its Bank War had concentrated economic power in one national bank',
              'it had made the property requirements for voting stricter in most states',
              'its expansion of white male voting rested on the removal of others'
            ],
            correctAnswer: 3,
            explanation: 'By 1835 most states had opened voting to white men, while Indian removal was under way and several states were restricting free Black voters. The Bank War destroyed the national bank rather than strengthening it, and the 1833 tariff lowered protection only gradually.'
          }
        ]
      }
    }
  ]
}
