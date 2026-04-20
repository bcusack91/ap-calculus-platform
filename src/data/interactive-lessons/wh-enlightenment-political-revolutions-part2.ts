export const whEnlightenmentPoliticalRevolutionsPart2Data = {
  topicSlug: 'wh-enlightenment-political-revolutions',
  sections: [
    {
      id: 'whepr2-intro',
      type: 'text' as const,
      content: `
# 💡 Enlightenment and Political Revolutions

**Part 2 of 7 — Enlightenment Thinkers and Their Ideas**

---

> 🔑 **Key Concept:** Enlightenment thinkers (Locke, Rousseau, Voltaire, Montesquieu) developed ideas about natural rights, social contract, separation of powers, and individual reason that challenged the divine right of kings and provided the intellectual foundations for the American, French, and Haitian revolutions. AP questions focus on which thinkers influenced which revolutions and how.
      `
    },
    {
      id: 'whepr2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'John Locke\'s most significant contribution to revolutionary political thought was:',
            options: [
              'The argument that government derives its legitimacy solely from the consent of the governed and that people have the right to revolt when government violates their natural rights (life, liberty, property) — providing the philosophical justification for the American colonists\' rebellion against British authority',
              'The argument for absolute monarchy as the most rational form of government',
              'The concept that people have no natural rights outside of government',
              'The theory that religious authority should govern political institutions',
            ],
            correctAnswer: 0,
            explanation: 'Locke\'s consent theory is directly traceable in the Declaration of Independence: Jefferson\'s "life, liberty, and the pursuit of happiness" is Locke\'s "life, liberty, and property"; the Declaration\'s argument that George III had violated the social contract echoes Locke\'s right to revolution when government violates consent. The AP connection: specific Enlightenment ideas → specific revolutionary documents → specific political consequences.'
          },
          {
            question: 'Montesquieu\'s concept of separation of powers influenced which political institution most directly?',
            options: [
              'The United States Constitution\'s division of government into three branches (executive, legislative, judicial) with checks and balances was directly inspired by Montesquieu\'s Spirit of the Laws (1748), which argued that separating governmental powers prevented tyranny',
              'Montesquieu\'s ideas influenced the French absolute monarchy to reform itself',
              'Separation of powers was a pre-Enlightenment concept with no connection to Montesquieu',
              'Montesquieu\'s ideas only influenced French revolutionary institutions',
            ],
            correctAnswer: 0,
            explanation: 'The Montesquieu → US Constitution connection is one of AP\'s clearest Enlightenment-to-revolution causal links: the Framers read Montesquieu and specifically cited his work; the three-branch structure with checks and balances (Congress checks president; president vetoes Congress; courts review both) is Montesquieu\'s separation of powers theory implemented in institutional form. This is AP\'s model of how intellectual history connects to political history.'
          }
        ]
      }
    },
    {
      id: 'whepr2-content',
      type: 'text' as const,
      content: `
## 📖 Enlightenment Thinkers and Ideas

> **Core Enlightenment Principles**

The Enlightenment (17th-18th century Europe) applied scientific reasoning to human society:

- **Natural rights:** People are born with inherent rights (life, liberty, property) that governments cannot take away
- **Social contract:** Governments derive legitimate authority from the consent of the governed; if they violate this contract, people may revolt
- **Separation of powers:** Government power should be divided to prevent tyranny
- **Reason over tradition:** Religious authority and royal tradition should be subject to rational critique

> **Key Thinkers and Their Ideas**

| Thinker | Country | Key Ideas | Influenced |
|---------|---------|-----------|-----------|
| **John Locke** | England | Natural rights (life, liberty, property); government by consent; right to revolution | American Revolution (Declaration of Independence) |
| **Jean-Jacques Rousseau** | France | General will; popular sovereignty; "Man is born free but everywhere is in chains" | French Revolution |
| **Voltaire** | France | Religious tolerance; freedom of speech; critique of church and aristocracy | French revolutionary culture |
| **Montesquieu** | France | Separation of powers (executive, legislative, judicial); checks and balances | US Constitution |
| **Mary Wollstonecraft** | England | Women's rights; rational equality of women with men | Feminist movements |

> **Limits of Enlightenment**

AP questions often probe contradictions:

- **Slavery:** Enlightenment thinkers proclaimed universal rights but many (Jefferson, Locke) owned enslaved people or justified colonial exploitation
- **Women:** Most Enlightenment thinkers excluded women from political rights; Wollstonecraft's Vindication of the Rights of Woman (1792) challenged this
- **Colonized peoples:** Enlightenment "reason" was used to justify European superiority and colonial domination alongside arguments for human rights

> **AP Comparison Anchor**

- **Enlightenment vs. earlier political theory:** Medieval theory justified kingship through divine right and Christian hierarchy; Enlightenment theory justified government through natural rights and rational consent — a fundamental shift in the basis of political legitimacy
      `
    },
    {
      id: 'whepr2-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The Enlightenment\'s internal contradiction regarding slavery demonstrates:',
            options: [
              'Enlightenment claims of universal natural rights were selectively applied — the same thinkers who proclaimed all men were born free simultaneously justified or participated in slavery, revealing that Enlightenment universalism was limited by race, gender, and class even while articulating principles that enslaved and colonized peoples would later use to demand their own liberation',
              'Enlightenment thinkers unanimously opposed slavery as inconsistent with natural rights',
              'The contradiction between Enlightenment ideals and slavery had no historical significance',
              'Slavery was not discussed by Enlightenment thinkers and had no connection to their political theory',
            ],
            correctAnswer: 0,
            explanation: 'The selective universalism of Enlightenment thought is AP\'s complexity point: Locke\'s property rights theory was used to justify both individual liberty AND property in enslaved people; Jefferson wrote that "all men are created equal" while enslaving 600 people. But the very language of universal rights created a standard by which these contradictions could be challenged — Toussaint L\'Ouverture used Enlightenment language to justify the Haitian Revolution, and abolitionists used natural rights arguments against slavery. Enlightenment ideals were simultaneously limiting and liberating.'
          },
          {
            question: 'Mary Wollstonecraft\'s Vindication of the Rights of Woman (1792) was significant because:',
            options: [
              'It applied Enlightenment reason consistently to gender — arguing that if human beings have rational faculties that justify natural rights, women\'s rational capacities made them entitled to the same rights, directly challenging most Enlightenment thinkers\' exclusion of women from the political sphere on the grounds that the exclusion was irrational',
              'Wollstonecraft argued women were naturally suited only for domestic roles',
              'Her work had no connection to Enlightenment philosophical frameworks',
              'Wollstonecraft\'s ideas were immediately adopted into law in Britain',
            ],
            correctAnswer: 0,
            explanation: 'Wollstonecraft\'s significance is methodological: she used Enlightenment reasoning against Enlightenment practice. If reason is the basis for rights, and women have reason, then consistency requires extending rights to women — the argument is internally generated by Enlightenment logic. This demonstrates AP\'s theme that ideas can have consequences their originators didn\'t intend: Enlightenment natural rights theory created the intellectual tools that would be used by women, enslaved people, and colonized peoples to demand their own inclusion.'
          },
          {
            question: 'The Enlightenment\'s shift from divine right to social contract as the basis for political legitimacy was historically significant because:',
            options: [
              'It changed the question government had to answer to justify its authority — divine right required only that the king claim divine appointment; social contract required that the governed actually consent, creating a permanent standard against which any government could be judged and found wanting — making revolution potentially justifiable whenever government violated consent',
              'Divine right and social contract were essentially equivalent political theories',
              'Social contract theory made revolution impossible by requiring complete popular consent',
              'The shift to social contract eliminated religious influence from political thought entirely',
            ],
            correctAnswer: 0,
            explanation: 'The legitimacy-basis shift is AP\'s deepest Enlightenment contribution: when legitimacy required divine appointment, questioning the king was blasphemy; when legitimacy requires consent, questioning the king is rational political analysis. This intellectual shift made the American, French, and Haitian revolutions conceptually possible — not just politically angry revolts but principled arguments that governments violating consent had lost their legitimacy. Every revolution that followed invoked this framework.'
          }
        ]
      }
    },
    {
      id: 'whepr2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'The Enlightenment thinker who argued for natural rights to "life, liberty, and property" and government by consent was ___',
            options: [
            'John Locke',
            'Jean-Jacques Rousseau',
            'Voltaire',
            'Montesquieu',
            ]
          },
          {
            label: 'The concept that government authority derives from the consent of the governed and may be revoked if violated was ___',
            options: [
            'Social contract theory',
            'Divine right theory',
            'Feudal compact theory',
            'Mercantile theory',
            ]
          },
          {
            label: 'Montesquieu\'s proposal for preventing tyranny by dividing government into branches was ___',
            options: [
            'Separation of powers',
            'Natural rights',
            'Popular sovereignty',
            'Balance of power',
            ]
          }
        ],
        correctAnswers: [
          'John Locke',
          'Social contract theory',
          'Separation of powers',
        ],
        hint1: 'English philosopher — life liberty property — consent of governed — right to revolution',
        hint2: 'Legitimacy from consent — revocable — Jefferson Declaration of Independence',
        hint3: 'Three branches — executive legislative judicial — checks and balances — US Constitution',
        explanation: 'John Locke provided the natural rights framework; social contract theory provided the mechanism of legitimate vs. illegitimate government; and separation of powers provided the institutional design solution — together these three Enlightenment contributions directly produced the American and French revolutionary constitutions.'
      }
    },
    {
      id: 'whepr2-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Comparing Enlightenment political theory to earlier (medieval) political theory reveals which fundamental change?',
            options: [
              'Medieval political theory grounded legitimacy in divine will and hierarchical religious order (God → pope → king → nobles → commoners); Enlightenment theory grounded legitimacy in natural rights and rational consent (government = contract between free rational individuals) — relocating the source of political authority from the supernatural to the human rational capacity',
              'Medieval and Enlightenment political theories had identical views on political legitimacy',
              'Enlightenment thinkers returned to ancient Greek political theory with no medieval influence',
              'Medieval theory emphasized consent while Enlightenment theory emphasized divine right',
            ],
            correctAnswer: 0,
            explanation: 'The legitimacy-source change is AP\'s fundamental Enlightenment contribution: moving the foundation of political authority from God to human reason changed everything about how governments had to justify themselves. This is why the Enlightenment is the intellectual watershed for modern politics — from this point, political authority requires rational justification in human terms, not divine endorsement. Every modern state (democratic and authoritarian) now claims to represent the people\'s interests or rights, not God\'s will — even if dishonestly.'
          },
          {
            question: 'Which AP analysis of Enlightenment ideas demonstrates the most sophistication?',
            options: [
              'Enlightenment ideas were both universalizing (articulating rights applicable to all humans) and limiting (selectively applying those rights to specific groups while excluding enslaved people, women, and colonized peoples) — the tension between the universal claims and selective application created the intellectual ammunition for subsequent liberation movements that used Enlightenment language to demand the inclusion Enlightenment thinkers had denied them',
              'Enlightenment ideas were uniformly progressive with no internal contradictions',
              'Enlightenment ideas had no impact on social groups other than European elites',
              'The Enlightenment\'s contradictions invalidate its ideas and make them historically insignificant',
            ],
            correctAnswer: 0,
            explanation: 'AP sophistication: acknowledging both the universalizing dimension (natural rights language applicable to all humans) and the limiting dimension (selective application by gender, race, class) AND the productive tension between them (excluded groups using universal language to demand inclusion). This is more analytically complete than either "Enlightenment = progressive liberation" or "Enlightenment = hypocritical European ideology" — both are too simple to earn full AP credit.'
          }
        ]
      }
    }
  ]
}
