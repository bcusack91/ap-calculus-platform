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
| **William Lloyd Garrison** | Published *The Liberator* (1831); founded American Anti-Slavery Society; demanded **immediate** emancipation; burned the Constitution as a "covenant with death" |
| **Frederick Douglass** | Escaped slavery; published *Narrative of the Life of Frederick Douglass* (1845); powerful orator; *The North Star* newspaper |
| **Harriet Tubman** | Escaped slavery; made ~13 trips on the **Underground Railroad**, rescuing ~70 people |
| **Harriet Beecher Stowe** | *Uncle Tom's Cabin* (1852) — novel that dramatized slavery's cruelties; massive Northern readership |
| **Nat Turner** | Led slave rebellion in Virginia (1831); killed ~60 white people; led to harsher slave codes across the South |
| **David Walker** | Free Black author; *Appeal to the Coloured Citizens of the World* (1829) — called for violent resistance to slavery |

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
            question: 'The Second Great Awakening contributed to the abolitionist movement MOST directly by:',
            options: [
              'Teaching that individuals had a moral duty to perfect society, making slavery a sin that must be eliminated',
              'Establishing Catholic missions that opposed slavery throughout the South',
              'Convincing Southern slaveholders to voluntarily free enslaved people',
              'Creating a national political party dedicated to ending slavery immediately'
            ],
            correctAnswer: 0,
            explanation: 'The Second Great Awakening\'s emphasis on individual moral responsibility and social perfectionism gave abolitionists a religious framework: if each person could achieve salvation, then society itself could be perfected — and slavery was an unforgivable moral evil that Christians were obligated to oppose.'
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
      content: `
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
        explanation: 'Dorothea Dix\'s advocacy led to the creation of 32 state mental institutions. Harriet Tubman risked her life repeatedly to free enslaved people via the Underground Railroad. Thoreau\'s Civil Disobedience influenced Martin Luther King Jr. and Mahatma Gandhi.'
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
            question: 'The Declaration of Sentiments (1848) was strategically modeled on the Declaration of Independence in order to:',
            options: [
              'Invoke America\'s founding principles to argue that denying women\'s rights was a betrayal of the nation\'s own stated ideals',
              'Declare women\'s independence from the United States government',
              'Call for the immediate abolition of slavery alongside women\'s suffrage',
              'Propose a constitutional amendment granting women the right to vote'
            ],
            correctAnswer: 0,
            explanation: 'By deliberately echoing the Declaration of Independence\'s language and structure, Stanton made a powerful rhetorical argument: if "all men are created equal" is America\'s founding principle, then excluding women is hypocritical. This strategy of holding America to its own ideals is a recurring pattern in reform movements throughout U.S. history.'
          },
          {
            question: 'Which of the following BEST explains why many women initially became involved in public reform through the abolitionist movement?',
            options: [
              'Abolitionist organizations were among the few spaces where women could speak publicly and organize, and fighting for others\' freedom led them to question their own lack of rights',
              'The federal government appointed women as official abolition commissioners',
              'Southern women led the abolitionist movement from plantation households',
              'Women were legally required to participate in anti-slavery societies by state law'
            ],
            correctAnswer: 0,
            explanation: 'The abolitionist movement provided women an entry point into public activism. When women like the Grimké sisters were criticized for speaking publicly, they realized their own rights were restricted. This experience radicalized many women and directly led to the organized women\'s rights movement.'
          }
        ]
      }
    }
  ]
}
