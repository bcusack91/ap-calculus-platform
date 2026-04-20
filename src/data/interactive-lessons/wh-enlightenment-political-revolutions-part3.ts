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
              'It articulated a universal principle of natural rights that exceeded what its authors were willing to implement, creating a permanent standard of democratic aspiration that could be used by excluded groups (enslaved people, women, later colonial peoples) to demand inclusion — making the Declaration\'s significance continue beyond the immediate revolutionary context',
              'The Declaration immediately ended all forms of inequality in American society',
              'The Declaration was primarily a commercial document with no philosophical significance',
              'The Declaration\'s equality claims were limited to European-descended American men with no broader aspirational value',
            ],
            correctAnswer: 0,
            explanation: 'The "standard beyond practice" is the Declaration\'s enduring AP significance: Lincoln invoked it for the Civil War; suffragettes used it for women\'s rights; civil rights activists used it for racial equality; anti-colonial movements globally used it for independence. The document\'s greatness is not that it implemented equality but that it articulated an equality standard so compelling that subsequent generations could use it to demand the implementation its authors refused.'
          },
          {
            question: 'The American Revolution\'s protection of slavery in the Constitution demonstrates:',
            options: [
              'That the Revolution was a conservative revolution for propertied white men — it transferred political power from British to American elites while explicitly protecting the property interests (including enslaved people) of the slaveholder class, demonstrating that revolutions can simultaneously proclaim universal rights and limit those rights to specific social groups',
              'The Constitution abolished slavery immediately after ratification',
              'Slavery protection had no connection to property rights arguments in the Constitution',
              'The Constitution treated enslaved people as full citizens with all rights protected',
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
              'Demonstrating that Enlightenment political theory could be successfully implemented in an actual republic — American independence showed that a government based on natural rights, popular sovereignty, and separation of powers could function, giving French reformers and revolutionaries evidence that their theoretical ideals were practically achievable',
              'France directly copied the American Constitution in creating its revolutionary government',
              'The American Revolution had no influence on the French Revolution',
              'American influence on France was primarily military rather than ideological',
            ],
            correctAnswer: 0,
            explanation: 'The demonstration effect is AP\'s mechanism connecting the American to the French Revolution: theory (Enlightenment ideas) → practice (American republic) → inspiration (French revolutionaries saw that theory could work). Many French officers who served in the American Revolution (Lafayette most famously) returned to France with firsthand experience of republican government. The American experience didn\'t cause the French Revolution — French social and financial crises did — but it shaped the revolutionary alternative French revolutionaries envisioned.'
          },
          {
            question: 'Comparing the American Revolution to later Latin American independence movements reveals:',
            options: [
              'Both were led by colonial elites seeking independence from European power while limiting the revolution\'s benefits primarily to the creole/propertied class — American colonists and Latin American creoles were similarly unwilling to extend the revolution\'s proclaimed principles of equality and natural rights to enslaved people, indigenous populations, and lower classes',
              'Latin American revolutions were more radical than the American Revolution in extending rights',
              'American and Latin American revolutions had completely different social bases and goals',
              'The American Revolution extended full rights to all social groups while Latin American did not',
            ],
            correctAnswer: 0,
            explanation: 'The elite-led revolution pattern is AP\'s comparative framework connecting American and Latin American independence: both were led by prosperous colonial elites (American slaveholder-planters; Latin American creoles) who wanted political self-determination while maintaining their social and economic dominance. The "revolution" changed colonial governors to national governments without fundamentally redistributing social power — a conservative revolution transferring power between elite groups rather than a social revolution transforming the social order.'
          },
          {
            question: 'The American Constitution\'s Bill of Rights (1791) represented which Enlightenment principle most directly?',
            options: [
              'The principle of limited government — that governments derive authority from specific grants of power and have no authority over rights retained by individuals, requiring explicit constitutional enumeration of rights (speech, religion, press, assembly) as protections against government overreach',
              'The Bill of Rights represented the principle of absolute government authority',
              'Bills of Rights were unknown before 1791 with no Enlightenment intellectual precedent',
              'The Bill of Rights was primarily a religious document protecting church authority',
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
              'It demonstrated that Enlightenment political principles could be institutionalized in a functioning state — the Constitution showed that natural rights, separation of powers, and representative government were not just theoretical ideals but practical governing arrangements, inspiring subsequent revolutionaries globally by proving that alternatives to monarchy were not only philosophically justified but operationally workable',
              'The American Revolution was primarily significant for its military tactics',
              'The Revolution had no significant influence outside North America',
              'The Revolution\'s significance was purely economic — establishing American commercial independence',
            ],
            correctAnswer: 0,
            explanation: 'The "proof of concept" role is the American Revolution\'s global historical significance: before 1776, natural rights republics were theoretical; after 1776, they were historical fact. This demonstration effect was enormously powerful — it gave reformers and revolutionaries everywhere a real example to point to when arguing that monarchy was not the only viable form of government. The French, Latin American, and Haitian revolutionary leaders all studied the American example explicitly.'
          },
          {
            question: 'AP analysis of the American Revolution should emphasize which complexity?',
            options: [
              'The Revolution was simultaneously a genuine liberation struggle (against British political domination of colonists) and a deeply limited revolution (protecting slavery, excluding women and Native Americans from rights) — acknowledging both dimensions is necessary for accurate AP historical analysis that neither romanticizes the Revolution nor dismisses its real contributions to democratic political development',
              'The Revolution was purely progressive with no significant limitations',
              'The Revolution\'s limitations are so significant that its contributions to democratic development should be dismissed',
              'The Revolution was primarily economically motivated with no genuine ideological dimension',
            ],
            correctAnswer: 0,
            explanation: 'Holding both dimensions simultaneously is AP\'s analytical standard: the Revolution was a genuine philosophical advance (articulating natural rights, establishing limited government, creating the institutional precedent for constitutional democracy) AND a deeply limited social revolution (protecting slavery, excluding women, marginalizing Native Americans). AP rewards analysis that can acknowledge both without collapsing into either pure celebration or pure condemnation.'
          }
        ]
      }
    }
  ]
}
