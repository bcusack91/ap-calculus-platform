export const apushRevolutionIndependencePart1Data = {
  topicSlug: 'apush-revolution-independence',
  sections: [
    {
      id: 'apushrev1-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 Revolution & Independence

**Part 1 of 7 — Road to Revolution & the Declaration**

---

### Topics in This Part

| Section |
|---------|
| 📖 Causes of the American Revolution |
| Key Acts & Colonial Responses |
| Enlightenment Ideas |
| 📌 The Declaration of Independence |
| Key Battles & Turning Points |

> 🔑 **Key Concept:** The AP exam emphasizes the **ideological origins** of the Revolution — particularly how Enlightenment ideas about natural rights combined with colonial grievances over taxation and representation.
      `
    },
    {
      id: 'apushrev1-causes',
      type: 'text' as const,
      content: `
## 📖 Road to Revolution (1763–1776)

After the **French and Indian War** (1754–63), Britain faced massive war debt and decided the colonies should help pay. This ended the era of **salutary neglect** and sparked colonial resistance.

### Key British Acts & Colonial Responses

| Act / Event | Year | What It Did | Colonial Response |
|---|---|---|---|
| **Proclamation of 1763** | 1763 | Banned settlement west of Appalachians | Anger — colonists wanted western land |
| **Sugar Act** | 1764 | Taxed imported sugar and molasses | Protests; "no taxation without representation" |
| **Stamp Act** | 1765 | First direct tax — on newspapers, legal docs, playing cards | **Stamp Act Congress**; boycotts; Sons of Liberty formed |
| **Townshend Acts** | 1767 | Taxes on glass, lead, paint, paper, tea | Boycotts; "Letters from a Farmer" (John Dickinson) |
| **Boston Massacre** | 1770 | British soldiers killed 5 colonists | Propaganda tool (Paul Revere's engraving); increased anti-British sentiment |
| **Tea Act / Boston Tea Party** | 1773 | Gave East India Co. tea monopoly; colonists dumped tea | 342 chests of tea destroyed; direct challenge to Parliament |
| **Intolerable (Coercive) Acts** | 1774 | Closed Boston harbor; quartered troops; revoked MA charter | **First Continental Congress** called; colonies unite |
| **Lexington & Concord** | 1775 | British troops sent to seize weapons | "Shot heard round the world" — war begins |

> ⚠️ **AP Alert:** Know the **escalation pattern**: each British action provoked a stronger colonial response, which triggered harsher British measures, creating a cycle that made compromise increasingly impossible.
      `
    },
    {
      id: 'apushrev1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why was the Stamp Act (1765) more controversial than earlier taxes like the Sugar Act?',
            options: [
              'It was the first direct tax imposed on the colonists by Parliament, affecting everyday items like newspapers and legal documents',
              'It only taxed wealthy merchants and plantation owners',
              'It was passed by colonial legislatures rather than Parliament',
              'It reduced taxes on imported goods, angering British merchants'
            ],
            correctAnswer: 0,
            explanation: 'The Stamp Act was unprecedented because it was a direct (internal) tax rather than an external trade duty. It affected nearly everyone — lawyers, printers, tavern owners — and was imposed by a Parliament in which colonists had no representation, crystallizing the "no taxation without representation" argument.'
          },
          {
            question: 'The Intolerable Acts (1774) had the unintended effect of:',
            options: [
              'Convincing most colonists to remain loyal to Britain',
              'Uniting the colonies in opposition through the First Continental Congress',
              'Ending the boycott movement and restoring trade with Britain',
              'Leading France to immediately declare war on Britain'
            ],
            correctAnswer: 1,
            explanation: 'Britain intended the Intolerable Acts to punish Massachusetts and isolate it from the other colonies. Instead, colonists across all 13 colonies rallied to Massachusetts\' defense, convening the First Continental Congress (1774) — the first unified colonial body to coordinate resistance against British policy.'
          }
        ]
      }
    },
    {
      id: 'apushrev1-declaration',
      type: 'text' as const,
      content: `
## The Declaration of Independence (July 4, 1776)

Written primarily by **Thomas Jefferson**, the Declaration drew on **Enlightenment** philosophy:

### Enlightenment Influences

| Thinker | Key Idea | How It Appears in the Declaration |
|---------|----------|----------------------------------|
| **John Locke** | Natural rights (life, liberty, property); social contract; right to revolution | "Life, Liberty, and the pursuit of Happiness"; government derives power from "consent of the governed" |
| **Montesquieu** | Separation of powers | Influenced the later Constitution more than the Declaration |
| **Rousseau** | Popular sovereignty; general will | "Governments are instituted among Men, deriving their just powers from the consent of the governed" |

### Structure of the Declaration

1. **Preamble** — Philosophy of government (natural rights, social contract)
2. **Grievances** — List of specific complaints against King George III
3. **Resolution** — Formal declaration of independence

### Key Contradictions
- Jefferson wrote "all men are created equal" while **owning over 600 enslaved people** during his lifetime
- Women, Native Americans, and enslaved people were excluded from the promise of equality
- These contradictions became central tensions throughout American history

> 🔑 **AP Connection:** The AP exam loves asking about the **tension** between the Declaration's ideals and the reality of slavery, inequality, and exclusion. Be ready to discuss how different groups later used the Declaration's language to argue for their own rights.
      `
    },
    {
      id: 'apushrev1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Which Enlightenment philosopher's ideas about natural rights and the social contract most directly influenced Thomas Jefferson's Declaration of Independence?

2) What phrase did colonial protesters use to object to British taxes imposed without colonial representation in Parliament?

3) What 1773 event saw colonists destroy 342 chests of tea in Boston Harbor as a protest against the Tea Act?

Use the exact historical term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['John Locke', 'no taxation without representation', 'Boston Tea Party'],
        hint1: 'English philosopher who wrote "Two Treatises of Government"',
        hint2: 'A famous slogan — "no ___ without ___"',
        hint3: 'A "party" in Boston Harbor involving tea',
        explanation: 'John Locke\'s theory of natural rights (life, liberty, property) directly shaped Jefferson\'s "life, liberty, and the pursuit of happiness." "No taxation without representation" became the rallying cry against Parliamentary taxes. The Boston Tea Party (1773) was organized by the Sons of Liberty.'
      }
    },
    {
      id: 'apushrev1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Events** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The first direct (internal) tax imposed by Parliament on the colonies was the ___',
            options: ['Stamp Act (1765)', 'Sugar Act (1764)', 'Tea Act (1773)', 'Townshend Acts (1767)']
          },
          {
            label: 'The 1770 event in which British soldiers killed five colonists, used as propaganda by Paul Revere, was the ___',
            options: ['Boston Massacre', 'Boston Tea Party', 'Battle of Lexington', 'Stamp Act Crisis']
          },
          {
            label: 'The colonial body convened in response to the Intolerable Acts was the ___',
            options: ['First Continental Congress', 'Second Continental Congress', 'Stamp Act Congress', 'Albany Congress']
          }
        ],
        correctAnswers: ['Stamp Act (1765)', 'Boston Massacre', 'First Continental Congress'],
        hint1: 'Affected newspapers, legal documents, and playing cards',
        hint2: 'Five colonists killed, including Crispus Attucks',
        hint3: 'Met in Philadelphia in 1774; representatives from 12 colonies',
        explanation: 'The Stamp Act (1765) was the first direct tax. The Boston Massacre (1770) killed five colonists and was exploited as propaganda. The First Continental Congress (1774) united 12 colonies in coordinated resistance to the Intolerable Acts.'
      }
    },
    {
      id: 'apushrev1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following BEST describes the historical significance of the Declaration of Independence?',
            options: [
              'It established the framework for American government that is still used today',
              'It articulated Enlightenment principles of natural rights and self-governance that later groups used to advocate for their own inclusion',
              'It immediately granted equal rights to all people living in the American colonies',
              'It was primarily a military document outlining strategy for the Revolutionary War'
            ],
            correctAnswer: 1,
            explanation: 'The Declaration\'s greatest long-term significance was its articulation of universal principles ("all men are created equal") that abolitionists, suffragists, civil rights leaders, and others later invoked to argue for extending equality to groups initially excluded. The Constitution (1787), not the Declaration, established the governmental framework.'
          },
          {
            question: 'A colonial pamphleteer in 1775 writes: "We have petitioned, we have remonstrated, we have boycotted, and still our liberties are trampled. What remains but to take up arms?" This argument MOST directly reflects:',
            options: [
              'John Locke\'s theory that people have the right to overthrow a government that fails to protect their natural rights',
              'Thomas Hobbes\' belief that a strong central authority is necessary to prevent chaos',
              'Adam Smith\'s argument for free market economics without government intervention',
              'Montesquieu\'s advocacy for separation of powers within government'
            ],
            correctAnswer: 0,
            explanation: 'The pamphleteer\'s argument — that peaceful remedies have been exhausted, justifying armed resistance — mirrors Locke\'s social contract theory: when a government violates the natural rights of the people, the people have the right to alter or abolish it. This logic is directly embedded in the Declaration of Independence.'
          }
        ]
      }
    }
  ]
}
