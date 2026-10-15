export const apushReformMovementsPart1Data = {
  topicSlug: 'apush-reform-movements',
  sections: [
    {
      id: 'apushref1-intro',
      type: 'text' as const,
      content: `
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
      `
    },
    {
      id: 'apushref1-awakening',
      type: 'text' as const,
      content: `
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
| **William Lloyd Garrison** | Published *The Liberator* (1831); helped found the American Anti-Slavery Society (1833); demanded **immediate** emancipation; burned the Constitution as a "covenant with death" |
| **Frederick Douglass** | Escaped slavery; published *Narrative of the Life of Frederick Douglass* (1845); powerful orator; *The North Star* newspaper |
| **Harriet Tubman** | Escaped slavery; made ~13 trips on the **Underground Railroad**, rescuing ~70 people |
| **Harriet Beecher Stowe** | *Uncle Tom's Cabin* (1852) — novel that dramatized slavery's cruelties; massive Northern readership |
| **Nat Turner** | Led slave rebellion in Virginia (1831); his followers killed about 55–60 white people; led to harsher slave codes across the South |
| **David Walker** | Free Black author; *Appeal to the Coloured Citizens of the World* (1829) — urged enslaved people to resist, by force if necessary, and rejected colonization |

> ⚠️ **AP Alert:** Know the distinction between **moral suasion** abolitionists (Garrison — persuade through argument) and those who accepted **political action** (Liberty Party, Free Soil Party) or even **violent resistance** (John Brown, David Walker).
      `
    },
    {
      id: 'apushref1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Second Great Awakening contributed to the abolitionist movement most directly by',
            options: [
              'preaching that slavery was a sin converts had a duty to end',
              'founding Catholic missions that opposed slavery in the Deep South',
              'persuading most Southern planters to free the people they held',
              'creating a national party pledged to end slavery in the territories'
            ],
            correctAnswer: 0,
            explanation: 'Revivalists taught that converts must root out sin in themselves and in society, and many came to see slaveholding as a sin to be ended at once. The revival was Protestant, Southern planters did not free their workers, and antislavery parties came later out of politics rather than the revival itself.'
          },
          {
            question: 'Frederick Douglass and William Lloyd Garrison differed by the early 1850s mainly in that',
            options: [
              'Garrison demanded immediate emancipation, which Douglass opposed',
              'Douglass supported colonization in Liberia, which Garrison opposed',
              'Douglass came to back antislavery parties, which Garrison rejected',
              'Garrison endorsed armed slave revolts, which Douglass condemned'
            ],
            correctAnswer: 2,
            explanation: 'Douglass came to read the Constitution as an antislavery document and supported voting and antislavery parties, while Garrison called the Constitution a "covenant with death" and shunned electoral politics. Both demanded immediate emancipation, both opposed colonization, and Garrison was a pacifist.'
          }
        ]
      }
    },
    {
      id: 'apushref1-womens',
      type: 'text' as const,
      content: `
## Women's Rights & Other Reforms

### The Women's Rights Movement

Many women entered public life through abolition work, then recognized their own lack of legal rights:

| Event / Figure | Significance |
|----------------|-------------|
| **Seneca Falls Convention** (1848) | First women's rights convention; organized by **Elizabeth Cady Stanton** and **Lucretia Mott** |
| **Declaration of Sentiments** | Modeled on the Declaration of Independence: "All men **and women** are created equal"; demanded suffrage, property rights, education |
| **Sojourner Truth** | Speech at the Akron women's rights convention (1851) — connected women's rights and racial equality (the famous "Ain't I a Woman?" wording comes from Frances Gage's 1863 version, not the 1851 newspaper report) |
| **Cult of Domesticity** | Prevailing ideology: women's "sphere" was the home; reformers challenged this |

### Other Major Reforms

| Movement | Key Details |
|----------|-------------|
| **Temperance** | Campaign against alcohol; led mainly by women; American Temperance Society (1826); linked alcohol to domestic violence and poverty |
| **Education** | **Horace Mann** — championed public education in Massachusetts; teacher training, longer school years, standardized curriculum |
| **Utopian Communities** | Brook Farm, Oneida, New Harmony — experimental communities seeking perfect societies; most failed |
| **Prison/Mental Health** | **Dorothea Dix** — exposed terrible conditions in mental asylums; lobbied for state-funded institutions |
| **Transcendentalism** | **Emerson** and **Thoreau** — emphasized individual intuition, self-reliance, connection to nature; Thoreau's *Civil Disobedience* (1849) influenced later movements |
      `
    },
    {
      id: 'apushref1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What 1848 convention launched the organized women's rights movement in the United States?

2) What document, modeled on the Declaration of Independence, demanded equality for women?

3) What abolitionist newspaper did William Lloyd Garrison publish beginning in 1831?

Use the exact historical term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Seneca Falls Convention', 'Declaration of Sentiments', 'The Liberator'],
        hint1: 'Named after a town in upstate New York',
        hint2: 'Declaration of ___',
        hint3: 'The ___',
        explanation: 'The Seneca Falls Convention (1848) was organized by Elizabeth Cady Stanton and Lucretia Mott. The Declaration of Sentiments declared that "all men and women are created equal." The Liberator (1831–1865) was Garrison\'s uncompromising abolitionist newspaper.'
      }
    },
    {
      id: 'apushref1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Reformers** 🔍
      `,
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
        explanation: 'Dorothea Dix\'s advocacy helped found or expand dozens of state mental hospitals. Harriet Tubman risked her life repeatedly to free enslaved people via the Underground Railroad. Thoreau\'s Civil Disobedience influenced Martin Luther King Jr. and Mahatma Gandhi.'
      }
    },
    {
      id: 'apushref1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The authors of the Declaration of Sentiments (1848) modeled it on the Declaration of Independence mainly in order to',
            options: [
              'announce that women would form a separate government of their own',
              'hold the nation to its own founding ideal of equal rights',
              'show that slavery had to end before women could seek any rights',
              'propose a specific constitutional amendment granting the vote'
            ],
            correctAnswer: 1,
            explanation: 'By rewriting "all men are created equal" as "all men and women are created equal," Stanton argued that denying women\'s rights betrayed the nation\'s own principles. The document did not propose a separate government, did not make women\'s rights wait on abolition, and did not draft a specific amendment.'
          },
          {
            question: 'Which of the following best explains why many women first entered public reform through the abolitionist movement?',
            options: [
              'The federal government appointed women to enforce the slave-trade ban',
              'Southern plantation mistresses had founded the major antislavery societies',
              'State laws required church members to join local antislavery societies',
              'Antislavery work gave them civic roles and showed them their own lack of rights'
            ],
            correctAnswer: 3,
            explanation: 'Antislavery societies let women petition, raise money and speak, and when critics attacked women such as the Grimké sisters for speaking in public, many concluded that their own rights were restricted too. No government appointed women as enforcers, Southern women did not lead the movement, and no law required membership.'
          }
        ]
      }
    }
  ]
}
