export const whEnlightenmentPoliticalRevolutionsPart3Data = {
  topicSlug: 'wh-enlightenment-political-revolutions',
  sections: [
    {
      id: 'whepr3-intro',
      type: 'text' as const,
      content: `
# 💡 Enlightenment and Political Revolutions

**Part 3 of 7 — The American Revolution (1775-1783)**

---

> 🔑 **Key Concept:** The American Revolution (1775-1783) was the first successful political revolution applying Enlightenment principles to create a republic based on natural rights. AP questions focus on its Enlightenment foundations, its limitations (slavery, women's rights), and its influence on subsequent revolutions.
      `
    },
    {
      id: 'whepr3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The Declaration of Independence\'s argument that all men are created equal was primarily significant because:',
            options: [
              'It set a standard of equality beyond its authors\' own practice, and excluded groups later invoked it to demand inclusion',
              'It immediately ended legal inequality in the new nation, including slavery and property limits on voting',
              'It was chiefly a commercial document, written to reopen trade, with little philosophical significance',
              'Its equality claims applied only to European-descended men and offered no aspiration that later reform movements could use',
            ],
            correctAnswer: 0,
            explanation: 'The "standard beyond practice" is the Declaration\'s enduring AP significance: Lincoln invoked it for the Civil War; suffragettes used it for women\'s rights; civil rights activists used it for racial equality; anti-colonial movements globally used it for independence. The document\'s greatness is not that it implemented equality but that it articulated an equality standard so compelling that subsequent generations could use it to demand the implementation its authors refused.'
          },
          {
            question: 'The American Revolution\'s protection of slavery in the Constitution demonstrates:',
            options: [
              'A movement can proclaim universal rights yet shield elite property in enslaved people from those very rights',
              'The Constitution set slavery on a path to immediate abolition through the three-fifths compromise',
              'Slavery\'s protection had no link to the property rights arguments that framers used against Britain',
              'The Constitution recognized enslaved people as citizens whose rights the new government would protect',
            ],
            correctAnswer: 0,
            explanation: 'The conservative dimension of the American Revolution is AP\'s complexity point: property rights were central to Locke\'s natural rights theory; enslaved people were property under American law; therefore the same property rights framework that justified the Revolution against British "tyranny" justified protecting slavery. The 3/5 compromise (counting enslaved people as 3/5 of a person for congressional representation) and the 20-year protection of the slave trade were specific constitutional choices that privileged slaveholder property interests over universal rights.'
          }
        ]
      }
    },
    {
      id: 'whepr3-content',
      type: 'text' as const,
      content: `
## 📖 The American Revolution

> **Causes**

| Cause | Explanation |
|-------|------------|
| **Enlightenment ideas** | Locke, Montesquieu provided philosophical framework for resistance |
| **Salutary neglect ends** | Britain enforced mercantilist policies after Seven Years War (1763) |
| **Taxation without representation** | Stamp Act (1765), Townshend Acts (1767); colonists argued Parliamentary taxation without colonial representation violated rights |
| **Colonial identity** | Americans had developed distinct identity; "American" not "British colonial" |
| **Economic grievances** | Mercantilist restrictions on colonial manufacturing and trade |

> **Key Documents**

- **Declaration of Independence (1776):** Jefferson; invoked Locke's natural rights and social contract; all men created equal; right to revolution when government fails consent
- **Constitution (1787):** Montesquieu's separation of powers; federalism; Bill of Rights (1791); limited government

> **Limitations of the Revolution**

The Revolution did not extend its proclaimed rights universally:
- **Slavery:** Constitution protected slavery (3/5 compromise, slave trade); Jefferson enslaved 600 people
- **Women:** Abigail Adams's plea to "remember the ladies" was ignored; women excluded from political rights
- **Native Americans:** Not included in "all men are created equal"; conflicts continued
- **Property requirements:** Many states required property ownership for voting

> **Influence on Later Revolutions**

The American Revolution demonstrated that Enlightenment ideas could be translated into actual governance:
- **French Revolution:** American model showed republicanism was viable
- **Latin American independence:** Creole elites studied American precedent; Simón Bolívar admired American model
- **Haitian Revolution:** Enslaved Haitians applied American/French natural rights language to demand their own liberation
      `
    },
    {
      id: 'whepr3-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The American Revolution\'s influence on the French Revolution was primarily through:',
            options: [
              'Showing that a republic built on natural rights and popular sovereignty could actually work in practice',
              'France copying the US Constitution nearly word for word when it drafted its own constitution of 1791',
              'Supplying French radicals with American money and troops to overthrow Louis XVI',
              'Its military example alone, as returning French officers copied American battlefield tactics rather than ideas',
            ],
            correctAnswer: 0,
            explanation: 'The demonstration effect is AP\'s mechanism connecting the American to the French Revolution: theory (Enlightenment ideas) → practice (American republic) → inspiration (French revolutionaries saw that theory could work). Many French officers who served in the American Revolution (Lafayette most famously) returned to France with firsthand experience of republican government. The American experience didn\'t cause the French Revolution — French social and financial crises did — but it shaped the revolutionary alternative French revolutionaries envisioned.'
          },
          {
            question: 'Comparing the American Revolution to later Latin American independence movements reveals:',
            options: [
              'Both were led by colonial elites who won independence but denied equality to enslaved and indigenous people',
              'Both were mass social revolutions that redistributed land from colonial elites to indigenous and enslaved people',
              'Both were led by poor farmers and artisans, who pushed aside colonial elites to take control of the new states',
              'Latin American revolutions extended rights far more broadly, freeing enslaved people everywhere at independence',
            ],
            correctAnswer: 0,
            explanation: 'The elite-led revolution pattern is AP\'s comparative framework connecting American and Latin American independence: both were led by prosperous colonial elites (American slaveholder-planters; Latin American creoles) who wanted political self-determination while maintaining their social and economic dominance. The "revolution" changed colonial governors to national governments without fundamentally redistributing social power — a conservative revolution transferring power between elite groups rather than a social revolution transforming the social order.'
          },
          {
            question: 'The American Constitution\'s Bill of Rights (1791) represented which Enlightenment principle most directly?',
            options: [
              'Limited government: individuals keep rights that no grant of power allows the state to infringe',
              'Absolute sovereignty: the state may suspend any right when the public good requires it',
              'Established religion: the federal government protects the authority of one official national church',
              'Enlightened despotism: a strong executive grants liberties as favors that it may later revoke',
            ],
            correctAnswer: 0,
            explanation: 'Limited government is Locke\'s social contract theory institutionalized: if government is a contract created by rational individuals to protect their pre-existing natural rights, government has no authority over those rights — they were not surrendered in the contract. The Bill of Rights lists specific rights government cannot infringe, reflecting the Lockean principle that individuals enter the social contract retaining rights that precede and supersede government authority. This is the intellectual foundation of constitutional rights theory.'
          }
        ]
      }
    },
    {
      id: 'whepr3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'The document that invoked Locke\'s natural rights and declared independence from Britain (1776) was ___',
            options: [
            'The Declaration of Independence',
            'The Constitution',
            'The Federalist Papers',
            'The Articles of Confederation',
            ]
          },
          {
            label: 'The constitutional provision that counted enslaved people as 3/5 of a person for congressional representation was ___',
            options: [
            'The 3/5 Compromise',
            'The Bill of Rights',
            'The First Amendment',
            'The Commerce Clause',
            ]
          },
          {
            label: 'The French officer who fought in the American Revolution and later led French revolutionary forces was ___',
            options: [
            'Lafayette',
            'Napoleon Bonaparte',
            'Robespierre',
            'Louis XVI',
            ]
          }
        ],
        correctAnswers: [
          'The Declaration of Independence',
          'The 3/5 Compromise',
          'Lafayette',
        ],
        hint1: '1776 — Jefferson — natural rights — social contract — right to revolution when government fails',
        hint2: 'Constitutional convention 1787 — enslaved people counted as 3/5 — congressional representation — slaveholder political power',
        hint3: 'French aristocrat — Valley Forge — American Revolution — returned to France — led French National Guard',
        explanation: 'The Declaration of Independence embodies Enlightenment natural rights theory in revolutionary practice; the 3/5 Compromise embodies the Revolution\'s core contradiction between universal rights and slavery protection; and Lafayette embodies the direct human connection between the American and French Revolutions.'
      }
    },
    {
      id: 'whepr3-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The American Revolution\'s most significant contribution to world history was:',
            options: [
              'Proving that Enlightenment principles could govern a working state, giving later revolutionaries a model to cite',
              'Its military tactics, which European armies and later revolutionaries copied over the next half century',
              'Its effect on North American borders, with little influence on politics elsewhere in the world',
              'Its economic legacy, chiefly winning American commercial independence from British mercantile rules',
            ],
            correctAnswer: 0,
            explanation: 'The "proof of concept" role is the American Revolution\'s global historical significance: before 1776, natural rights republics were theoretical; after 1776, they were historical fact. This demonstration effect was enormously powerful — it gave reformers and revolutionaries everywhere a real example to point to when arguing that monarchy was not the only viable form of government. The French, Latin American, and Haitian revolutionary leaders all studied the American example explicitly.'
          },
          {
            question: 'AP analysis of the American Revolution should emphasize which complexity?',
            options: [
              'It was a genuine liberation struggle and also a limited one that protected slavery and excluded women',
              'It was purely progressive, extending liberty to all Americans without significant limitations',
              'Its limits were so severe that its contributions to later democratic government should be dismissed outright',
              'It was motivated by economic grievance alone, with no genuine ideological commitment behind it',
            ],
            correctAnswer: 0,
            explanation: 'Holding both dimensions simultaneously is AP\'s analytical standard: the Revolution was a genuine philosophical advance (articulating natural rights, establishing limited government, creating the institutional precedent for constitutional democracy) AND a deeply limited social revolution (protecting slavery, excluding women, marginalizing Native Americans). AP rewards analysis that can acknowledge both without collapsing into either pure celebration or pure condemnation.'
          }
        ]
      }
    }
  ]
}
