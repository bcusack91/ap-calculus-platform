export const whEnlightenmentPoliticalRevolutionsPart1Data = {
  topicSlug: 'wh-enlightenment-political-revolutions',
  sections: [
    {
      id: 'whenligh1-intro',
      type: 'text' as const,
      content: `
# 💡 The Enlightenment & Political Revolutions

**Part 1 of 7 — Ideas That Changed the World**

---

| Section |
|---------|
| 📖 Enlightenment Thinkers & Ideas |
| The American Revolution |
| The French Revolution |
| The Haitian Revolution |

> 🔑 **Key Concept:** The AP exam tests how **Enlightenment ideas** (natural rights, social contract, popular sovereignty) inspired political revolutions across the Atlantic world — and how those revolutions produced different outcomes depending on local circumstances.
      `
    },
    {
      id: 'whenligh1-ideas',
      type: 'text' as const,
      content: `
## 📖 Enlightenment Thinkers & Key Ideas

The Enlightenment (c. 1650–1800) was an intellectual movement that applied **reason and scientific thinking** to questions about government, society, and human rights.

### Key Thinkers

| Thinker | Key Ideas | Influence |
|---|---|---|
| **John Locke** | Natural rights (life, liberty, property); government by consent; right to revolution | U.S. Declaration of Independence |
| **Jean-Jacques Rousseau** | Social contract; popular sovereignty; "general will" of the people | French Revolution |
| **Montesquieu** | Separation of powers (executive, legislative, judicial) | U.S. Constitution |
| **Voltaire** | Freedom of speech and religion; criticism of the Catholic Church | Bill of Rights / French Declaration |
| **Mary Wollstonecraft** | Women's equality; education for women | Early feminist movement |
| **Adam Smith** | Free-market economics; *The Wealth of Nations* (1776); critique of mercantilism | Economic liberalism |

### Core Enlightenment Principles
1. **Reason** — human reason, not tradition or divine right, should guide government
2. **Natural rights** — all humans possess inherent rights that governments cannot take away
3. **Social contract** — government derives authority from the consent of the governed
4. **Popular sovereignty** — ultimate political authority belongs to the people
5. **Progress** — society can be improved through rational reform

> 🔑 **AP Connection:** You must connect **specific thinkers to specific revolutions**. Locke → American Revolution; Rousseau → French Revolution; Montesquieu → U.S. Constitution's separation of powers. The AP exam loves asking which thinker influenced which event.
      `
    },
    {
      id: 'whenligh1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which Enlightenment thinker\'s ideas about natural rights and the right to revolution most directly influenced Thomas Jefferson\'s Declaration of Independence?',
            options: [
              'Voltaire, who argued for religious tolerance and free speech',
              'John Locke, who argued that people have natural rights to life, liberty, and property, and may overthrow governments that violate those rights',
              'Adam Smith, who advocated for free-market economics and limited government intervention',
              'Montesquieu, who proposed the separation of governmental powers into three branches'
            ],
            correctAnswer: 1,
            explanation: 'Jefferson\'s Declaration of Independence closely mirrors Locke\'s Second Treatise of Government — Locke argued that humans have natural rights (life, liberty, property) and that government derives authority from consent of the governed. When government violates those rights, the people have a right to revolution. Jefferson changed "property" to "pursuit of happiness."'
          },
          {
            question: 'Which Enlightenment principle BEST describes the idea that government authority comes from the people rather than from God or hereditary monarchy?',
            options: [
              'Mercantilism — the belief that economic policy should maximize exports over imports',
              'Popular sovereignty — the principle that political power originates from and belongs to the people',
              'Divine right — the idea that monarchs rule by God\'s direct appointment and are accountable only to God',
              'Absolutism — the theory that a single ruler should hold unlimited and unchecked governmental power'
            ],
            correctAnswer: 1,
            explanation: 'Popular sovereignty, championed by Rousseau and Locke, holds that government\'s legitimacy comes from the consent of the governed — not from divine appointment or hereditary succession. This idea directly challenged the divine right of kings and became the philosophical foundation for democratic revolutions.'
          }
        ]
      }
    },
    {
      id: 'whenligh1-revolutions',
      type: 'text' as const,
      content: `
## 📖 The Atlantic Revolutions

Enlightenment ideas fueled a wave of revolutions across the Atlantic world, each with distinct causes and outcomes:

### American Revolution (1775–1783)
- **Cause:** British taxation without colonial representation; Enlightenment ideas of self-governance
- **Key document:** Declaration of Independence (1776) — "all men are created equal" (echoing Locke)
- **Outcome:** New republic with a Constitution featuring separation of powers (Montesquieu), but limited suffrage (white, property-owning men)

### French Revolution (1789–1799)
- **Cause:** Financial crisis, social inequality (Three Estates), Enlightenment ideals
- **Key document:** Declaration of the Rights of Man and Citizen (1789) — liberty, equality, fraternity
- **Stages:** Moderate reform → Radical phase (Reign of Terror under Robespierre, ~17,000 executed) → Napoleon's rise (1799)
- **Outcome:** Abolished feudalism and monarchy (temporarily), but led to dictatorship under Napoleon

### Haitian Revolution (1791–1804)
- **Cause:** Enslaved majority (500,000+) inspired by French revolutionary ideals; brutal sugar plantation conditions
- **Leader:** **Toussaint Louverture** (formerly enslaved) and later Jean-Jacques Dessalines
- **Outcome:** **Only successful large-scale slave revolution in history**; Haiti became the first Black republic and second independent nation in the Western Hemisphere
- **Significance:** Terrified slave-holding societies worldwide; Napoleon's failure in Haiti led him to sell Louisiana to the U.S.

> 🔑 **AP Connection:** The AP exam tests **comparisons across these revolutions**. Key question: Why did the American Revolution produce a relatively stable republic while the French Revolution produced the Reign of Terror? (Answer: the U.S. had existing self-governing institutions; France had deeper social inequality and no democratic tradition.)
      `
    },
    {
      id: 'whenligh1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Why is the Haitian Revolution (1791–1804) considered unique among Atlantic world revolutions?',
            options: [
              'It was the only revolution fought exclusively between two European colonial powers',
              'It was the only successful large-scale revolution led by enslaved people, resulting in the abolition of slavery and the creation of an independent Black republic',
              'It resulted in the establishment of a constitutional monarchy that lasted for over 200 years',
              'It was the only revolution that did not involve any influence from Enlightenment ideas or philosophy'
            ],
            correctAnswer: 1,
            explanation: 'The Haitian Revolution is unique because it was the only successful revolution where enslaved people overthrew their enslavers and established an independent nation. Led by Toussaint Louverture and completed by Dessalines, Haiti declared independence in 1804 — becoming the first Black republic and striking fear into slave-holding societies globally.'
          },
          {
            question: 'A key difference between the American and French Revolutions was that:',
            options: [
              'The American Revolution was influenced by Enlightenment ideas while the French Revolution was not',
              'The American Revolution built on existing colonial self-governance traditions, while the French Revolution attempted to completely restructure a society with deep class divisions and no democratic tradition',
              'The French Revolution succeeded in creating lasting democratic institutions immediately, while the American Revolution failed',
              'Only the French Revolution involved armed conflict; the American Revolution was entirely peaceful'
            ],
            correctAnswer: 1,
            explanation: 'American colonists had over 150 years of experience with self-governing assemblies, making the transition to a republic more manageable. France had an absolute monarchy, rigid social hierarchy (Three Estates), and massive inequality — making revolutionary change far more disruptive and violent (Reign of Terror). Both were influenced by Enlightenment ideas.'
          }
        ]
      }
    }
  ]
};
