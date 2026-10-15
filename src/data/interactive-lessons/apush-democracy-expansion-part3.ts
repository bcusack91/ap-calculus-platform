export const apushDemocracyExpansionPart3Data = {
  topicSlug: 'apush-democracy-expansion',
  sections: [
    {
      id: 'apushdem3-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 Democracy & Expansion

**Part 3 of 7 — Jackson and Federal Power: Removal and Nullification in Their Own Words**

---

| Section |
|---------|
| 📖 Two Tests of Federal Power |
| Indian Removal: Two Voices |
| 📌 The Cherokee Cases and the Road to the Trail of Tears |
| Nullification: Union Against State Sovereignty |

> 🔑 **Key Concept:** Andrew Jackson used federal power in opposite ways in two crises. Against the **Cherokee**, he backed Georgia's claim to state authority and pushed removal. Against **South Carolina's** nullification of the tariff, he defended federal supremacy and threatened force. Reading the documents closely shows how each side framed its case. (CED Topic 4.8; Key Concepts 4.1.I.C, 4.3.II.B)
      `
    },
    {
      id: 'apushdem3-tests',
      type: 'text' as const,
      content: `
## 📖 Two Tests of Federal Power

| | **Indian Removal** | **Nullification** |
|---|---|---|
| State involved | Georgia (also Alabama and Mississippi) | South Carolina |
| State's claim | State law applies on Cherokee land within its borders | A state may declare a federal tariff void inside its borders |
| Jackson's position | **Sided with the state** and pressed for removal | **Opposed the state**; threatened to enforce federal law with force |
| Federal government's role | Congress passed the Indian Removal Act (1830); the army carried out removal | Congress passed the Force Bill and a Compromise Tariff (1833) |
| Outcome | Forced removal of the southeastern nations, including the Trail of Tears (1838–39) | South Carolina repealed its ordinance; the tariff was lowered over ten years |

**Why the difference?** Jackson was a westerner and Indian fighter who wanted Native land opened to white settlement, so state power served his goal in Georgia. In South Carolina, a state's defiance threatened the Union itself and his authority as president. Consistency of principle mattered less to him than these goals, which is a useful point of **complexity** in essays on Jacksonian democracy.
      `
    },
    {
      id: 'apushdem3-removal',
      type: 'text' as const,
      content: `
## Indian Removal: Two Voices

> **Source A. Memorial of the Cherokee Nation to Congress, December 1829 (printed in the *Cherokee Phoenix*, January 20, 1830)**
>
> "We love, we dearly love our country, and it is due to your honorable bodies, as well as to us, to make known why we think the country is ours, and why we wish to remain in peace where we are. The land on which we stand, we have received as an inheritance from our fathers, who possessed it from time immemorial, as a gift from our common father in heaven."

**HIPP walkthrough:**
- **Historical situation:** Georgia had passed laws (1828–29) extending state authority over Cherokee land, and gold had been found there in 1829. Jackson's December 1829 message to Congress had urged removal.
- **Intended audience:** Congress, which was about to debate a removal bill, and sympathetic white Americans, especially northern evangelicals who read the petitions.
- **Purpose:** To prove the Cherokee had a legal and moral right to their land and to block the removal bill.
- **Point of view:** The leaders of the Cherokee Nation, which had a written constitution (1827), a bilingual newspaper and a syllabary. They wrote in the language of American law and Christianity to reach their audience.

> **Source B. President Andrew Jackson, Second Annual Message to Congress, December 6, 1830**
>
> "It gives me pleasure to announce to Congress that the benevolent policy of the Government, steadily pursued for nearly 30 years, in relation to the removal of the Indians beyond the white settlements is approaching to a happy consummation."
>
> "What good man would prefer a country covered with forests and ranged by a few thousand savages to our extensive Republic, studded with cities, towns, and prosperous farms, embellished with all the improvements which art can devise or industry execute, occupied by more than 12,000,000 happy people, and filled with all the blessings of liberty, civilization, and religion?"

*The word "savages" is Jackson's; quoting it accurately is part of reading the source's point of view.*

**HIPP walkthrough:**
- **Historical situation:** Six months after Congress passed the **Indian Removal Act** (May 1830) by a close vote in the House, 102–97. The Choctaw had just signed a removal treaty.
- **Intended audience:** Congress and the voting public, including the removal act's northern critics.
- **Purpose:** To present removal as kind ("benevolent") and complete ("happy consummation"), and to frame it as progress.
- **Point of view:** A Tennessee planter, land speculator and former general whose fame came from wars against the Creek and Seminole.

### Reading the Two Together
| Question | Cherokee Memorial | Jackson's Message |
|---|---|---|
| Who owns the land? | The Cherokee, by inheritance "from time immemorial" | The nation as a whole, which will make better use of it |
| Key value invoked | Rights, treaties, Christian duty | Progress, "civilization," national growth |
| How is removal described? | An injustice to a people at home | A "benevolent policy" that benefits everyone |
      `
    },
    {
      id: 'apushdem3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Source Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Jackson\'s description of removal as a "benevolent policy" in Source B is best explained by his',
            options: [
              'wish to win back Native allies for a coming war against Britain',
              'need to defend a contested measure to Congress and its critics',
              'belief that the Supreme Court had already approved removal',
              'hope of persuading the Cherokee to adopt a written constitution'
            ],
            correctAnswer: 1,
            explanation: 'The Removal Act had passed the House by only five votes, and northern critics called it unjust, so Jackson framed removal as kind and nearly complete. The Court had not approved removal, and the Cherokee already had a written constitution.'
          },
          {
            question: 'The Cherokee memorial in Source A most directly reflects which of the following strategies?',
            options: [
              'Armed resistance modeled on Tecumseh\'s earlier pan-Indian alliance',
              'Appeals to American law, treaties and Christian values to keep their homeland',
              'Moving west voluntarily in exchange for payment and new lands in Arkansas',
              'Alliance with Spain to block the expansion of Georgia\'s settlements'
            ],
            correctAnswer: 1,
            explanation: 'The Cherokee petitioned Congress, published in their own newspaper, and sued in federal court, using the language of rights and Christianity to win support. Armed resistance was the path of the Seminole, not the Cherokee leadership in 1829–30.'
          }
        ]
      }
    },
    {
      id: 'apushdem3-cases',
      type: 'text' as const,
      content: `
## 📌 The Cherokee Cases and the Road to the Trail of Tears

The Cherokee took their case to the Supreme Court twice. The two cases are often confused, so learn them as a pair.

| | ***Cherokee Nation v. Georgia*** (1831) | ***Worcester v. Georgia*** (1832) |
|---|---|---|
| Who sued | The Cherokee Nation, asking the Court to stop Georgia's laws | Samuel Worcester, a missionary jailed for living in Cherokee territory without a Georgia license |
| Ruling | **Dismissed for lack of jurisdiction.** The Cherokee were not a "foreign state" but a **"domestic dependent nation,"** so they could not sue in the Supreme Court as a foreign nation | **Ruled for Worcester and the Cherokee.** Georgia's laws "can have no force" in Cherokee territory; only the federal government could deal with the Cherokee Nation |
| Significance | Defined the Cherokee as a nation under federal protection but denied them a remedy | Upheld Cherokee sovereignty within their treaty lands |

### Why Worcester Did Not Stop Removal
- Georgia ignored the ruling, and Jackson declined to press Georgia to obey it. The famous line "John Marshall has made his decision; now let him enforce it" was attributed to Jackson later and is probably not his actual words, but it reflects his position.
- Jackson was busy with the Nullification Crisis and did not want Georgia to join South Carolina. Worcester was released in 1833 after a negotiated pardon.

### Timeline to the Trail of Tears
| Year | Event |
|---|---|
| 1830 | Indian Removal Act; Choctaw Treaty of Dancing Rabbit Creek, the first removal treaty under the act |
| 1835 | **Treaty of New Echota**: a small "Treaty Party" (Major Ridge, John Ridge, Elias Boudinot) agreed to removal; Principal Chief **John Ross** and most Cherokee rejected it, and about 15,000 signed a protest |
| 1836 | The Senate ratified the treaty by a single vote |
| 1838–39 | Federal troops under General Winfield Scott forced about 16,000 Cherokee west; roughly 4,000 died in the camps and on the march |
| 1835–42 | The Seminole resisted in the Second Seminole War, the costliest of the removal-era wars |

> 🔑 **AP Connection:** A strong essay on removal does not stop at "Jackson ignored the Court." Explain the structure: Congress authorized removal, the Court's ruling had no enforcement mechanism against a state backed by the president, and a minority treaty supplied legal cover.
      `
    },
    {
      id: 'apushdem3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Case** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The case that called the Cherokee a "domestic dependent nation" and dismissed their suit was ___',
            options: ['Cherokee Nation v. Georgia', 'Worcester v. Georgia', 'Fletcher v. Peck', 'Gibbons v. Ogden']
          },
          {
            label: 'The case holding that Georgia\'s laws had no force in Cherokee territory was ___',
            options: ['Cherokee Nation v. Georgia', 'Worcester v. Georgia', 'Fletcher v. Peck', 'Gibbons v. Ogden']
          },
          {
            label: 'The 1835 agreement signed by a minority Treaty Party that the Senate used to justify Cherokee removal was the ___',
            options: ['Treaty of New Echota', 'Treaty of Dancing Rabbit Creek', 'Treaty of Fort Jackson', 'Treaty of Greenville']
          }
        ],
        correctAnswers: ['Cherokee Nation v. Georgia', 'Worcester v. Georgia', 'Treaty of New Echota'],
        hint1: 'The first case, in 1831, turned on whether the Court could hear the suit at all.',
        hint2: 'The second case was brought by a jailed missionary in 1832.',
        hint3: 'Principal Chief John Ross and most Cherokee rejected this treaty.',
        explanation: 'Cherokee Nation v. Georgia (1831) dismissed the suit for lack of jurisdiction; Worcester v. Georgia (1832) ruled Georgia\'s laws void in Cherokee territory; the Treaty of New Echota (1835) supplied the legal basis for the Trail of Tears.'
      }
    },
    {
      id: 'apushdem3-nullification',
      type: 'text' as const,
      content: `
## Nullification: Union Against State Sovereignty

### Background
- The **Tariff of 1828** ("Tariff of Abominations") raised duties sharply. South Carolina planters, who sold cotton abroad and bought manufactured goods, said it enriched northern manufacturers at their expense.
- Vice President **John C. Calhoun** secretly wrote the *South Carolina Exposition and Protest* (1828), arguing, like the Kentucky Resolutions of 1798, that a state could nullify an unconstitutional federal law.
- In the Senate in January 1830, Robert Hayne of South Carolina defended state sovereignty. **Daniel Webster** of Massachusetts answered that the Constitution came from the people, not the states, closing with: "Liberty and Union, now and for ever, one and inseparable!"

### The Crisis (1832–33)
1. The Tariff of 1832 lowered some rates but kept protection. In November 1832 a South Carolina convention passed an **Ordinance of Nullification** declaring the 1828 and 1832 tariffs void in the state after February 1, 1833.
2. Jackson answered with a **Proclamation to the People of South Carolina** (December 10, 1832).
3. Calhoun resigned as vice president and entered the Senate to defend his state.
4. Congress passed the **Force Bill** (authorizing the president to use the military to collect duties) and Henry Clay's **Compromise Tariff** (lowering rates gradually over ten years) in March 1833.
5. South Carolina repealed its ordinance against the tariff, then "nullified" the Force Bill, so both sides claimed victory.

> **Source C. Andrew Jackson, Proclamation to the People of South Carolina, December 10, 1832**
>
> "I consider, then, the power to annul a law of the United States, assumed by one State, incompatible with the existence of the Union, contradicted expressly by the letter of the Constitution, unauthorized by its spirit, inconsistent with every principle on which it was founded, and destructive of the great object for which it was formed."

**HIPP walkthrough:**
- **Historical situation:** Weeks after South Carolina's ordinance and just after Jackson's re-election.
- **Intended audience:** The people of South Carolina, over the heads of their leaders, and the rest of the nation.
- **Purpose:** To isolate the nullifiers, warn of force, and rally Unionists.
- **Point of view:** A president who favored states' rights in many areas but saw nullification as treason against the Union. The text was drafted largely by Secretary of State Edward Livingston.
      `
    },
    {
      id: 'apushdem3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

Use Source C, Jackson's Proclamation to the People of South Carolina (1832), above.
      `,
      exercise: {
        questions: [
          {
            question: 'The argument in Source C most directly rejected ideas expressed in which earlier document?',
            options: [
              'The Monroe Doctrine\'s warning to European powers',
              'The Kentucky Resolutions\' view that states may judge federal law',
              'Washington\'s Farewell Address warning against political parties',
              'The Northwest Ordinance\'s ban on slavery north of the Ohio River'
            ],
            correctAnswer: 1,
            explanation: 'Calhoun and the nullifiers drew on the compact theory of the 1798 Kentucky and Virginia Resolutions, which Jackson\'s proclamation denied. The other documents did not concern a state\'s power to void federal law.'
          },
          {
            question: 'The crisis that produced Source C was resolved in 1833 mainly through',
            options: [
              'a Supreme Court ruling that struck down the Tariff of 1828',
              'a constitutional amendment banning protective tariffs',
              'a lower tariff paired with a law authorizing force',
              'a military occupation of Charleston by federal troops'
            ],
            correctAnswer: 2,
            explanation: 'Congress paired Clay\'s Compromise Tariff with the Force Bill, letting South Carolina back down while Jackson kept the principle of federal supremacy. No court ruling, amendment or occupation ended the crisis.'
          }
        ]
      }
    }
  ]
}
