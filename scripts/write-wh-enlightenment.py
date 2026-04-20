#!/usr/bin/env python3
"""Write wh-enlightenment-political-revolutions parts 2-7."""
import os

base = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                    'src', 'data', 'interactive-lessons')

def w(filename, content):
    with open(os.path.join(base, filename), 'w') as f:
        f.write(content)
    print(f"✓ {filename}")

SLUG = 'wh-enlightenment-political-revolutions'

def mc(qd):
    opts = [qd['correct']] + qd['others'][:3]
    lines = '\n'.join([f"              '{o}'," for o in opts])
    return f"""          {{
            question: '{qd['q']}',
            options: [
{lines}
            ],
            correctAnswer: 0,
            explanation: '{qd['exp']}'
          }}"""

def dd_block(label, opts):
    lines = '\n'.join([f"            '{o}'," for o in opts])
    return f"""          {{
            label: '{label}',
            options: [
{lines}
            ]
          }}"""

def make(pnum, id_pre, subtitle, key, body, qs, dl, do_, dc, hints, dexp):
    q_str = ',\n'.join([mc(q) for q in qs])
    dd_str = ',\n'.join([dd_block(dl[i], do_[i]) for i in range(3)])
    corr = '\n'.join([f"          '{c}'," for c in dc])
    return f"""export const whEnlightenmentPoliticalRevolutionsPart{pnum}Data = {{
  topicSlug: '{SLUG}',
  sections: [
    {{
      id: '{id_pre}-intro',
      type: 'text' as const,
      content: `
# 💡 Enlightenment and Political Revolutions

**Part {pnum} of 7 — {subtitle}**

---

> 🔑 **Key Concept:** {key}
      `
    }},
    {{
      id: '{id_pre}-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {{
        questions: [
{mc(qs[0])},
{mc(qs[1])}
        ]
      }}
    }},
    {{
      id: '{id_pre}-content',
      type: 'text' as const,
      content: `
{body}
      `
    }},
    {{
      id: '{id_pre}-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {{
        questions: [
{mc(qs[2])},
{mc(qs[3])},
{mc(qs[4])}
        ]
      }}
    }},
    {{
      id: '{id_pre}-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {{
        dropdowns: [
{dd_str}
        ],
        correctAnswers: [
{corr}
        ],
        hint1: '{hints[0]}',
        hint2: '{hints[1]}',
        hint3: '{hints[2]}',
        explanation: '{dexp}'
      }}
    }},
    {{
      id: '{id_pre}-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {{
        questions: [
{mc(qs[5])},
{mc(qs[6])}
        ]
      }}
    }}
  ]
}}
"""

parts = [
    dict(pnum=2, id_pre='whepr2',
         subtitle='Enlightenment Thinkers and Their Ideas',
         key='Enlightenment thinkers (Locke, Rousseau, Voltaire, Montesquieu) developed ideas about natural rights, social contract, separation of powers, and individual reason that challenged the divine right of kings and provided the intellectual foundations for the American, French, and Haitian revolutions. AP questions focus on which thinkers influenced which revolutions and how.',
         body='''## 📖 Enlightenment Thinkers and Ideas

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
| **Mary Wollstonecraft** | England | Women\'s rights; rational equality of women with men | Feminist movements |

> **Limits of Enlightenment**

AP questions often probe contradictions:

- **Slavery:** Enlightenment thinkers proclaimed universal rights but many (Jefferson, Locke) owned enslaved people or justified colonial exploitation
- **Women:** Most Enlightenment thinkers excluded women from political rights; Wollstonecraft\'s Vindication of the Rights of Woman (1792) challenged this
- **Colonized peoples:** Enlightenment "reason" was used to justify European superiority and colonial domination alongside arguments for human rights

> **AP Comparison Anchor**

- **Enlightenment vs. earlier political theory:** Medieval theory justified kingship through divine right and Christian hierarchy; Enlightenment theory justified government through natural rights and rational consent — a fundamental shift in the basis of political legitimacy''',
         qs=[
             {'q': 'John Locke\'s most significant contribution to revolutionary political thought was:',
              'correct': 'The argument that government derives its legitimacy solely from the consent of the governed and that people have the right to revolt when government violates their natural rights (life, liberty, property) — providing the philosophical justification for the American colonists\' rebellion against British authority',
              'others': ['The argument for absolute monarchy as the most rational form of government', 'The concept that people have no natural rights outside of government', 'The theory that religious authority should govern political institutions'],
              'exp': 'Locke\'s consent theory is directly traceable in the Declaration of Independence: Jefferson\'s "life, liberty, and the pursuit of happiness" is Locke\'s "life, liberty, and property"; the Declaration\'s argument that George III had violated the social contract echoes Locke\'s right to revolution when government violates consent. The AP connection: specific Enlightenment ideas → specific revolutionary documents → specific political consequences.'},
             {'q': 'Montesquieu\'s concept of separation of powers influenced which political institution most directly?',
              'correct': 'The United States Constitution\'s division of government into three branches (executive, legislative, judicial) with checks and balances was directly inspired by Montesquieu\'s Spirit of the Laws (1748), which argued that separating governmental powers prevented tyranny',
              'others': ['Montesquieu\'s ideas influenced the French absolute monarchy to reform itself', 'Separation of powers was a pre-Enlightenment concept with no connection to Montesquieu', 'Montesquieu\'s ideas only influenced French revolutionary institutions'],
              'exp': 'The Montesquieu → US Constitution connection is one of AP\'s clearest Enlightenment-to-revolution causal links: the Framers read Montesquieu and specifically cited his work; the three-branch structure with checks and balances (Congress checks president; president vetoes Congress; courts review both) is Montesquieu\'s separation of powers theory implemented in institutional form. This is AP\'s model of how intellectual history connects to political history.'},
             {'q': 'The Enlightenment\'s internal contradiction regarding slavery demonstrates:',
              'correct': 'Enlightenment claims of universal natural rights were selectively applied — the same thinkers who proclaimed all men were born free simultaneously justified or participated in slavery, revealing that Enlightenment universalism was limited by race, gender, and class even while articulating principles that enslaved and colonized peoples would later use to demand their own liberation',
              'others': ['Enlightenment thinkers unanimously opposed slavery as inconsistent with natural rights', 'The contradiction between Enlightenment ideals and slavery had no historical significance', 'Slavery was not discussed by Enlightenment thinkers and had no connection to their political theory'],
              'exp': 'The selective universalism of Enlightenment thought is AP\'s complexity point: Locke\'s property rights theory was used to justify both individual liberty AND property in enslaved people; Jefferson wrote that "all men are created equal" while enslaving 600 people. But the very language of universal rights created a standard by which these contradictions could be challenged — Toussaint L\'Ouverture used Enlightenment language to justify the Haitian Revolution, and abolitionists used natural rights arguments against slavery. Enlightenment ideals were simultaneously limiting and liberating.'},
             {'q': 'Mary Wollstonecraft\'s Vindication of the Rights of Woman (1792) was significant because:',
              'correct': 'It applied Enlightenment reason consistently to gender — arguing that if human beings have rational faculties that justify natural rights, women\'s rational capacities made them entitled to the same rights, directly challenging most Enlightenment thinkers\' exclusion of women from the political sphere on the grounds that the exclusion was irrational',
              'others': ['Wollstonecraft argued women were naturally suited only for domestic roles', 'Her work had no connection to Enlightenment philosophical frameworks', 'Wollstonecraft\'s ideas were immediately adopted into law in Britain'],
              'exp': 'Wollstonecraft\'s significance is methodological: she used Enlightenment reasoning against Enlightenment practice. If reason is the basis for rights, and women have reason, then consistency requires extending rights to women — the argument is internally generated by Enlightenment logic. This demonstrates AP\'s theme that ideas can have consequences their originators didn\'t intend: Enlightenment natural rights theory created the intellectual tools that would be used by women, enslaved people, and colonized peoples to demand their own inclusion.'},
             {'q': 'The Enlightenment\'s shift from divine right to social contract as the basis for political legitimacy was historically significant because:',
              'correct': 'It changed the question government had to answer to justify its authority — divine right required only that the king claim divine appointment; social contract required that the governed actually consent, creating a permanent standard against which any government could be judged and found wanting — making revolution potentially justifiable whenever government violated consent',
              'others': ['Divine right and social contract were essentially equivalent political theories', 'Social contract theory made revolution impossible by requiring complete popular consent', 'The shift to social contract eliminated religious influence from political thought entirely'],
              'exp': 'The legitimacy-basis shift is AP\'s deepest Enlightenment contribution: when legitimacy required divine appointment, questioning the king was blasphemy; when legitimacy requires consent, questioning the king is rational political analysis. This intellectual shift made the American, French, and Haitian revolutions conceptually possible — not just politically angry revolts but principled arguments that governments violating consent had lost their legitimacy. Every revolution that followed invoked this framework.'},
             {'q': 'Comparing Enlightenment political theory to earlier (medieval) political theory reveals which fundamental change?',
              'correct': 'Medieval political theory grounded legitimacy in divine will and hierarchical religious order (God → pope → king → nobles → commoners); Enlightenment theory grounded legitimacy in natural rights and rational consent (government = contract between free rational individuals) — relocating the source of political authority from the supernatural to the human rational capacity',
              'others': ['Medieval and Enlightenment political theories had identical views on political legitimacy', 'Enlightenment thinkers returned to ancient Greek political theory with no medieval influence', 'Medieval theory emphasized consent while Enlightenment theory emphasized divine right'],
              'exp': 'The legitimacy-source change is AP\'s fundamental Enlightenment contribution: moving the foundation of political authority from God to human reason changed everything about how governments had to justify themselves. This is why the Enlightenment is the intellectual watershed for modern politics — from this point, political authority requires rational justification in human terms, not divine endorsement. Every modern state (democratic and authoritarian) now claims to represent the people\'s interests or rights, not God\'s will — even if dishonestly.'},
             {'q': 'Which AP analysis of Enlightenment ideas demonstrates the most sophistication?',
              'correct': 'Enlightenment ideas were both universalizing (articulating rights applicable to all humans) and limiting (selectively applying those rights to specific groups while excluding enslaved people, women, and colonized peoples) — the tension between the universal claims and selective application created the intellectual ammunition for subsequent liberation movements that used Enlightenment language to demand the inclusion Enlightenment thinkers had denied them',
              'others': ['Enlightenment ideas were uniformly progressive with no internal contradictions', 'Enlightenment ideas had no impact on social groups other than European elites', 'The Enlightenment\'s contradictions invalidate its ideas and make them historically insignificant'],
              'exp': 'AP sophistication: acknowledging both the universalizing dimension (natural rights language applicable to all humans) and the limiting dimension (selective application by gender, race, class) AND the productive tension between them (excluded groups using universal language to demand inclusion). This is more analytically complete than either "Enlightenment = progressive liberation" or "Enlightenment = hypocritical European ideology" — both are too simple to earn full AP credit.'}
         ],
         dl=['The Enlightenment thinker who argued for natural rights to "life, liberty, and property" and government by consent was ___',
             'The concept that government authority derives from the consent of the governed and may be revoked if violated was ___',
             'Montesquieu\'s proposal for preventing tyranny by dividing government into branches was ___'],
         do_=[['John Locke', 'Jean-Jacques Rousseau', 'Voltaire', 'Montesquieu'],
              ['Social contract theory', 'Divine right theory', 'Feudal compact theory', 'Mercantile theory'],
              ['Separation of powers', 'Natural rights', 'Popular sovereignty', 'Balance of power']],
         dc=['John Locke', 'Social contract theory', 'Separation of powers'],
         hints=['English philosopher — life liberty property — consent of governed — right to revolution', 'Legitimacy from consent — revocable — Jefferson Declaration of Independence', 'Three branches — executive legislative judicial — checks and balances — US Constitution'],
         dexp='John Locke provided the natural rights framework; social contract theory provided the mechanism of legitimate vs. illegitimate government; and separation of powers provided the institutional design solution — together these three Enlightenment contributions directly produced the American and French revolutionary constitutions.'
    ),
    dict(pnum=3, id_pre='whepr3',
         subtitle='The American Revolution (1775-1783)',
         key='The American Revolution (1775-1783) was the first successful political revolution applying Enlightenment principles to create a republic based on natural rights. AP questions focus on its Enlightenment foundations, its limitations (slavery, women\'s rights), and its influence on subsequent revolutions.',
         body='''## 📖 The American Revolution

> **Causes**

| Cause | Explanation |
|-------|------------|
| **Enlightenment ideas** | Locke, Montesquieu provided philosophical framework for resistance |
| **Salutary neglect ends** | Britain enforced mercantilist policies after Seven Years War (1763) |
| **Taxation without representation** | Stamp Act (1765), Townshend Acts (1767); colonists argued Parliamentary taxation without colonial representation violated rights |
| **Colonial identity** | Americans had developed distinct identity; "American" not "British colonial" |
| **Economic grievances** | Mercantilist restrictions on colonial manufacturing and trade |

> **Key Documents**

- **Declaration of Independence (1776):** Jefferson; invoked Locke\'s natural rights and social contract; all men created equal; right to revolution when government fails consent
- **Constitution (1787):** Montesquieu\'s separation of powers; federalism; Bill of Rights (1791); limited government

> **Limitations of the Revolution**

The Revolution did not extend its proclaimed rights universally:
- **Slavery:** Constitution protected slavery (3/5 compromise, slave trade); Jefferson enslaved 600 people
- **Women:** Abigail Adams\'s plea to "remember the ladies" was ignored; women excluded from political rights
- **Native Americans:** Not included in "all men are created equal"; conflicts continued
- **Property requirements:** Many states required property ownership for voting

> **Influence on Later Revolutions**

The American Revolution demonstrated that Enlightenment ideas could be translated into actual governance:
- **French Revolution:** American model showed republicanism was viable
- **Latin American independence:** Creole elites studied American precedent; Simón Bolívar admired American model
- **Haitian Revolution:** Enslaved Haitians applied American/French natural rights language to demand their own liberation''',
         qs=[
             {'q': 'The Declaration of Independence\'s argument that all men are created equal was primarily significant because:',
              'correct': 'It articulated a universal principle of natural rights that exceeded what its authors were willing to implement, creating a permanent standard of democratic aspiration that could be used by excluded groups (enslaved people, women, later colonial peoples) to demand inclusion — making the Declaration\'s significance continue beyond the immediate revolutionary context',
              'others': ['The Declaration immediately ended all forms of inequality in American society', 'The Declaration was primarily a commercial document with no philosophical significance', 'The Declaration\'s equality claims were limited to European-descended American men with no broader aspirational value'],
              'exp': 'The "standard beyond practice" is the Declaration\'s enduring AP significance: Lincoln invoked it for the Civil War; suffragettes used it for women\'s rights; civil rights activists used it for racial equality; anti-colonial movements globally used it for independence. The document\'s greatness is not that it implemented equality but that it articulated an equality standard so compelling that subsequent generations could use it to demand the implementation its authors refused.'},
             {'q': 'The American Revolution\'s protection of slavery in the Constitution demonstrates:',
              'correct': 'That the Revolution was a conservative revolution for propertied white men — it transferred political power from British to American elites while explicitly protecting the property interests (including enslaved people) of the slaveholder class, demonstrating that revolutions can simultaneously proclaim universal rights and limit those rights to specific social groups',
              'others': ['The Constitution abolished slavery immediately after ratification', 'Slavery protection had no connection to property rights arguments in the Constitution', 'The Constitution treated enslaved people as full citizens with all rights protected'],
              'exp': 'The conservative dimension of the American Revolution is AP\'s complexity point: property rights were central to Locke\'s natural rights theory; enslaved people were property under American law; therefore the same property rights framework that justified the Revolution against British "tyranny" justified protecting slavery. The 3/5 compromise (counting enslaved people as 3/5 of a person for congressional representation) and the 20-year protection of the slave trade were specific constitutional choices that privileged slaveholder property interests over universal rights.'},
             {'q': 'The American Revolution\'s influence on the French Revolution was primarily through:',
              'correct': 'Demonstrating that Enlightenment political theory could be successfully implemented in an actual republic — American independence showed that a government based on natural rights, popular sovereignty, and separation of powers could function, giving French reformers and revolutionaries evidence that their theoretical ideals were practically achievable',
              'others': ['France directly copied the American Constitution in creating its revolutionary government', 'The American Revolution had no influence on the French Revolution', 'American influence on France was primarily military rather than ideological'],
              'exp': 'The demonstration effect is AP\'s mechanism connecting the American to the French Revolution: theory (Enlightenment ideas) → practice (American republic) → inspiration (French revolutionaries saw that theory could work). Many French officers who served in the American Revolution (Lafayette most famously) returned to France with firsthand experience of republican government. The American experience didn\'t cause the French Revolution — French social and financial crises did — but it shaped the revolutionary alternative French revolutionaries envisioned.'},
             {'q': 'Comparing the American Revolution to later Latin American independence movements reveals:',
              'correct': 'Both were led by colonial elites seeking independence from European power while limiting the revolution\'s benefits primarily to the creole/propertied class — American colonists and Latin American creoles were similarly unwilling to extend the revolution\'s proclaimed principles of equality and natural rights to enslaved people, indigenous populations, and lower classes',
              'others': ['Latin American revolutions were more radical than the American Revolution in extending rights', 'American and Latin American revolutions had completely different social bases and goals', 'The American Revolution extended full rights to all social groups while Latin American did not'],
              'exp': 'The elite-led revolution pattern is AP\'s comparative framework connecting American and Latin American independence: both were led by prosperous colonial elites (American slaveholder-planters; Latin American creoles) who wanted political self-determination while maintaining their social and economic dominance. The "revolution" changed colonial governors to national governments without fundamentally redistributing social power — a conservative revolution transferring power between elite groups rather than a social revolution transforming the social order.'},
             {'q': 'The American Constitution\'s Bill of Rights (1791) represented which Enlightenment principle most directly?',
              'correct': 'The principle of limited government — that governments derive authority from specific grants of power and have no authority over rights retained by individuals, requiring explicit constitutional enumeration of rights (speech, religion, press, assembly) as protections against government overreach',
              'others': ['The Bill of Rights represented the principle of absolute government authority', 'Bills of Rights were unknown before 1791 with no Enlightenment intellectual precedent', 'The Bill of Rights was primarily a religious document protecting church authority'],
              'exp': 'Limited government is Locke\'s social contract theory institutionalized: if government is a contract created by rational individuals to protect their pre-existing natural rights, government has no authority over those rights — they were not surrendered in the contract. The Bill of Rights lists specific rights government cannot infringe, reflecting the Lockean principle that individuals enter the social contract retaining rights that precede and supersede government authority. This is the intellectual foundation of constitutional rights theory.'},
             {'q': 'The American Revolution\'s most significant contribution to world history was:',
              'correct': 'It demonstrated that Enlightenment political principles could be institutionalized in a functioning state — the Constitution showed that natural rights, separation of powers, and representative government were not just theoretical ideals but practical governing arrangements, inspiring subsequent revolutionaries globally by proving that alternatives to monarchy were not only philosophically justified but operationally workable',
              'others': ['The American Revolution was primarily significant for its military tactics', 'The Revolution had no significant influence outside North America', 'The Revolution\'s significance was purely economic — establishing American commercial independence'],
              'exp': 'The "proof of concept" role is the American Revolution\'s global historical significance: before 1776, natural rights republics were theoretical; after 1776, they were historical fact. This demonstration effect was enormously powerful — it gave reformers and revolutionaries everywhere a real example to point to when arguing that monarchy was not the only viable form of government. The French, Latin American, and Haitian revolutionary leaders all studied the American example explicitly.'},
             {'q': 'AP analysis of the American Revolution should emphasize which complexity?',
              'correct': 'The Revolution was simultaneously a genuine liberation struggle (against British political domination of colonists) and a deeply limited revolution (protecting slavery, excluding women and Native Americans from rights) — acknowledging both dimensions is necessary for accurate AP historical analysis that neither romanticizes the Revolution nor dismisses its real contributions to democratic political development',
              'others': ['The Revolution was purely progressive with no significant limitations', 'The Revolution\'s limitations are so significant that its contributions to democratic development should be dismissed', 'The Revolution was primarily economically motivated with no genuine ideological dimension'],
              'exp': 'Holding both dimensions simultaneously is AP\'s analytical standard: the Revolution was a genuine philosophical advance (articulating natural rights, establishing limited government, creating the institutional precedent for constitutional democracy) AND a deeply limited social revolution (protecting slavery, excluding women, marginalizing Native Americans). AP rewards analysis that can acknowledge both without collapsing into either pure celebration or pure condemnation.'}
         ],
         dl=['The document that invoked Locke\'s natural rights and declared independence from Britain (1776) was ___',
             'The constitutional provision that counted enslaved people as 3/5 of a person for congressional representation was ___',
             'The French officer who fought in the American Revolution and later led French revolutionary forces was ___'],
         do_=[['The Declaration of Independence', 'The Constitution', 'The Federalist Papers', 'The Articles of Confederation'],
              ['The 3/5 Compromise', 'The Bill of Rights', 'The First Amendment', 'The Commerce Clause'],
              ['Lafayette', 'Napoleon Bonaparte', 'Robespierre', 'Louis XVI']],
         dc=['The Declaration of Independence', 'The 3/5 Compromise', 'Lafayette'],
         hints=['1776 — Jefferson — natural rights — social contract — right to revolution when government fails', 'Constitutional convention 1787 — enslaved people counted as 3/5 — congressional representation — slaveholder political power', 'French aristocrat — Valley Forge — American Revolution — returned to France — led French National Guard'],
         dexp='The Declaration of Independence embodies Enlightenment natural rights theory in revolutionary practice; the 3/5 Compromise embodies the Revolution\'s core contradiction between universal rights and slavery protection; and Lafayette embodies the direct human connection between the American and French Revolutions.'
    ),
    dict(pnum=4, id_pre='whepr4',
         subtitle='The French Revolution (1789-1799)',
         key='The French Revolution transformed France from absolute monarchy to republic through radical social and political upheaval including the Declaration of Rights of Man, the execution of Louis XVI, the Reign of Terror, and ultimately Napoleon\'s consolidation of revolutionary gains. AP questions focus on the Revolution\'s phases, causes, and how it both advanced and distorted Enlightenment ideals.',
         body='''## 📖 The French Revolution

> **Causes: The Three Estates**

| Estate | Who | % Population | Tax Burden |
|--------|-----|-------------|-----------|
| **First Estate** | Clergy | 0.5% | Tax exempt |
| **Second Estate** | Nobility | 1.5% | Tax exempt |
| **Third Estate** | Everyone else (bourgeoisie + peasants) | 98% | Full tax burden |

Financial crisis (war debts from Seven Years War and American Revolution) forced Louis XVI to tax nobility → Estates-General convened 1789 → Third Estate declared itself National Assembly → Revolution began

> **Major Phases**

1. **Constitutional Monarchy (1789-1792):** Declaration of Rights of Man (1789); constitutional monarchy established; Enlightenment ideals implemented
2. **Radical Republic (1792-1794):** King Louis XVI executed (1793); Reign of Terror — Robespierre\'s Committee of Public Safety executed ~40,000 "enemies of the revolution"
3. **Thermidorian Reaction (1794-1799):** Robespierre executed; moderate reaction; Directory government
4. **Napoleon\'s Coup (1799):** Napoleon Bonaparte seized power; combined revolutionary and authoritarian elements

> **Key Documents and Events**

- **Declaration of Rights of Man (1789):** Inspired by American Declaration; "liberty, equality, fraternity"; natural rights for all men
- **Execution of Louis XVI (1793):** Symbolic end of divine right monarchy; shocked European monarchies
- **Reign of Terror (1793-1794):** Radical Committee of Public Safety; ~40,000 executed; demonstrated how revolution can consume itself
- **Napoleonic Code:** Codified revolutionary gains (legal equality, property rights) + authoritarian governance

> **AP Comparison Anchor**

- **American vs. French Revolution:** American was conservative (preserved propertied class dominance); French was more radical (executed king and nobility; addressed social inequality); French Revolution went further and became more violent
- **French Revolution and Napoleon:** Napoleon consolidated revolutionary gains (legal equality, religious tolerance) while ending political liberty — "revolution from above" that exported Enlightenment ideas through conquest''',
         qs=[
             {'q': 'The Declaration of Rights of Man and Citizen (1789) was significant for AP because:',
              'correct': 'It articulated universal rights ("liberty, equality, fraternity") that in principle applied to all people, creating the same productive tension as the American Declaration — aspirational universalism that excluded women, enslaved people, and colonial subjects, generating Olympe de Gouges\' Declaration of Rights of Woman and the Haitian Revolution\'s demand for inclusion',
              'others': ['The Declaration immediately extended all rights to all people in France and its colonies', 'The Declaration was significant only within France with no global influence', 'The Declaration was primarily a commercial document with limited political significance'],
              'exp': 'The Declaration of Rights of Man is AP\'s French Revolution equivalent of the American Declaration: universalist language (rights of "man") immediately challenged by excluded groups (Olympe de Gouges\' Declaration of Rights of Woman, 1791; Haitian enslaved people\'s demand that liberty apply to them). The productive tension between universal claims and selective application drives the next phase of revolutionary demand for inclusion.'},
             {'q': 'The Reign of Terror (1793-1794) demonstrates which AP principle?',
              'correct': 'Revolutions can consume their own principles — the same movement that began by proclaiming liberty and rights can evolve toward authoritarian violence when external threats (war with European monarchies) and internal conflict (rival revolutionary factions) create conditions where "the revolution is in danger" logic justifies suspension of the rights it proclaimed',
              'others': ['The Reign of Terror was caused purely by royalist counter-revolution with no internal revolutionary dynamics', 'Terror is a necessary and inevitable feature of all revolutions', 'The Reign of Terror successfully achieved its goals without negative consequences'],
              'exp': 'The Reign of Terror is AP\'s case study in how revolutions can betray their principles: Robespierre genuinely believed he was protecting the Revolution by eliminating its enemies — but in executing 40,000 people (including revolutionary heroes like Danton) he transformed revolutionary justice into arbitrary terror. The logic of "the revolution is in danger, therefore extraordinary measures are justified" is the mechanism. This pattern recurs in subsequent revolutions (Russian, Chinese, Cuban) — AP rewards recognizing the recurring pattern.'},
             {'q': 'Napoleon\'s relationship to the French Revolution was best characterized as:',
              'correct': 'Napoleon consolidated the Revolution\'s social achievements (legal equality before the law, abolition of feudal privilege, religious tolerance codified in the Napoleonic Code) while ending its political achievements (freedom of press, assembly, representative government) — representing the "revolution from above" that preserved Enlightenment social gains while eliminating democratic political institutions',
              'others': ['Napoleon completely reversed all French Revolutionary achievements', 'Napoleon faithfully implemented all aspects of the French Revolution including political liberty', 'Napoleon\'s relationship to the Revolution was purely personal with no ideological dimension'],
              'exp': 'The Napoleon-Revolution relationship is AP\'s complexity point: he is simultaneously revolutionary (abolishing feudalism, creating legal equality, establishing religious tolerance across his empire through conquest) and counter-revolutionary (ending press freedom, ruling as emperor, suppressing political opposition). The Napoleonic Code is the artifact that embodies this complexity — a revolutionary legal framework (equality before law, property rights, religious tolerance) imposed by authoritarian means. Understanding this complexity distinguishes AP-level from simple analysis.'},
             {'q': 'The execution of Louis XVI (1793) was historically significant beyond the individual death because:',
              'correct': 'It symbolically completed the Revolution\'s rejection of divine right monarchy — executing a king declared the principle that kings were not sacred divine representatives but rulers subject to the same laws and revolutionary justice as their subjects, shocking European monarchies and making it impossible to restore the Old Regime in France without acknowledging the new principle of popular sovereignty',
              'others': ['Louis XVI\'s execution was a minor event with no broader symbolic significance', 'His execution was motivated purely by personal crimes with no political symbolism', 'Executing kings was a common practice in European history with no special significance in 1793'],
              'exp': 'The symbolic significance of regicide (killing a king) in revolutionary politics is AP\'s framework: European monarchies responded to Louis XVI\'s execution by forming coalitions against France because they recognized that if a king could be executed by his subjects, the entire system of divine right monarchy was threatened. The execution didn\'t just end one man\'s life — it announced that monarchy rested on consent, not divine appointment. This is why it shocked Europe more than the American Revolution had.'},
             {'q': 'The three phases of the French Revolution (Constitutional Monarchy → Terror → Directory/Napoleon) demonstrate:',
              'correct': 'How revolutionary movements contain internal tensions between moderate and radical factions that produce successive phases: moderates establish a new order; radicals find it insufficient and push further; radical excess generates a conservative reaction; the cycle ends in a consolidating figure who preserves revolutionary gains while ending political instability — a pattern recurring in subsequent revolutions',
              'others': ['The French Revolution progressed in a straight line from moderation to radicalism with no reversal', 'Revolutionary phases are random with no recognizable pattern across different revolutions', 'The French Revolution had only one phase with no significant internal evolution'],
              'exp': 'The revolutionary cycle pattern is AP\'s meta-lesson from the French Revolution: the thermidorian reaction (conservative backlash against radical terror) → Napoleon (consolidating figure) pattern recurs in the Russian Revolution (1917 radical phase → Stalinist consolidation) and Chinese Revolution (revolutionary phase → Maoist consolidation). AP rewards recognizing these recurring patterns rather than treating each revolution as entirely unique.'},
             {'q': 'Comparing the American and French Revolutions demonstrates which key difference?',
              'correct': 'The American Revolution was more conservative — it transferred political power from British to American elites while preserving the existing social order (slavery, property requirements for voting); the French Revolution was more radical — it attacked the social hierarchy itself (noble privilege, clergy wealth, eventually executed the king) producing greater violence but also more fundamental social transformation',
              'others': ['The American Revolution was more radical than the French Revolution', 'Both revolutions were identical in their social radicalism and outcomes', 'The French Revolution was purely military with no social-revolutionary dimension'],
              'exp': 'The conservative vs. radical revolution comparison is AP\'s most productive American/French contrast: American colonial elites wanted to govern themselves; they didn\'t want to end the social order that privileged them (including slavery). French revolutionaries targeted the entire Old Regime social structure — noble privilege, church wealth, feudal obligations — making the Revolution fundamentally more disruptive to existing social hierarchy. This explains why the French Revolution produced the Terror (eliminating an entire social class) while the American Revolution did not.'},
             {'q': 'For AP, the French Revolution\'s most lasting contribution to world history was:',
              'correct': 'The articulation of nationalism — the idea that the French nation as a collective entity of citizens had rights and sovereignty, which inspired 19th-century nationalist movements across Europe and beyond, eventually contributing to German and Italian unification and anti-colonial nationalist movements globally',
              'others': ['The French Revolution had no lasting influence outside France', 'Its lasting contribution was exclusively the Napoleonic military system', 'The Reign of Terror is the Revolution\'s most significant contribution to world history'],
              'exp': 'Nationalism is the French Revolution\'s unexpected global legacy: the Revolution created the concept of "the French nation" as a community of citizens with collective identity and rights, which became the model for 19th-century nationalist movements demanding national self-determination. German nationalists, Italian nationalists, and eventually anti-colonial nationalists all invoked the French Revolutionary principle that a people with a common identity has the right to govern itself — making the Revolution the intellectual foundation of the modern nation-state system.'}
         ],
         dl=['The slogan of the French Revolution encapsulating its three core principles was ___',
             'The radical phase of the French Revolution (1793-1794) during which ~40,000 were executed was ___',
             'Napoleon\'s legal code that preserved revolutionary social gains (legal equality, property rights) was ___'],
         do_=[['Liberty, equality, fraternity', 'Life, liberty, property', 'God, king, country', 'Order, justice, peace'],
              ['The Reign of Terror', 'The Constitutional Monarchy', 'The Directory', 'The Thermidorian Reaction'],
              ['The Napoleonic Code', 'The Declaration of Rights of Man', 'The Code Justinian', 'The Civil Constitution of the Clergy']],
         dc=['Liberty, equality, fraternity', 'The Reign of Terror', 'The Napoleonic Code'],
         hints=['French Revolution slogan — three words — Liberté Égalité Fraternité', 'Robespierre — Committee of Public Safety — 40,000 executed — revolution consumes itself', 'Napoleon 1804 — legal equality — property rights — abolished feudalism — exported across Europe'],
         dexp='Liberty-equality-fraternity articulates the Revolution\'s ideals; the Reign of Terror demonstrates how revolutionary movements can betray those ideals through authoritarian violence; and the Napoleonic Code shows how revolutionary social gains can be preserved even as political liberty is curtailed — the full arc of revolutionary complexity.'
    ),
    dict(pnum=5, id_pre='whepr5',
         subtitle='The Haitian Revolution (1791-1804)',
         key='The Haitian Revolution (1791-1804) was the only successful enslaved people\'s revolution in world history, producing the first Black republic. Led by Toussaint L\'Ouverture and completed by Jean-Jacques Dessalines, it applied French Revolutionary principles of liberty to the enslaved population of Saint-Domingue. AP questions emphasize its uniqueness, its use of Enlightenment ideology, and European powers\' hostile response.',
         body='''## 📖 The Haitian Revolution

> **Context: Saint-Domingue**

Saint-Domingue (western Hispaniola, modern Haiti) was the most profitable colony in the world:
- **"Pearl of the Antilles":** Produced 40% of Europe\'s sugar and 60% of its coffee
- **Population:** ~500,000 enslaved people; ~30,000 free people of color; ~40,000 white colonists
- **Hierarchy:** White colonists > free people of color (some owned enslaved people) > enslaved people
- **Brutality:** Saint-Domingue\'s slavery was among the most brutal — average enslaved person\'s life expectancy was 7 years after arrival

> **Phases of the Revolution**

1. **Free people of color revolt (1790-1791):** Vincent Ogé demanded political rights for free people of color; executed
2. **Enslaved uprising (August 1791):** Bois Caïman ceremony; massive revolt by enslaved people; burned 1,200 coffee estates and 200 sugar plantations
3. **Toussaint L\'Ouverture\'s leadership (1791-1803):** Brilliant military commander; allied with and fought against French, British, Spanish successively; achieved formal emancipation (1794)
4. **French betrayal and war (1802-1803):** Napoleon tried to restore slavery; Toussaint captured and imprisoned (died 1803); Jean-Jacques Dessalines led final victory
5. **Independence (January 1, 1804):** First Black republic; renamed from Saint-Domingue to Haiti (indigenous Taino word)

> **Why It Was Unique**

| Feature | Significance |
|---------|-------------|
| **Only successful enslaved revolt** | Enslaved people organized, fought, and won against colonial powers |
| **Used Enlightenment language** | Demanded that French "liberty" apply to enslaved people |
| **Military genius** | Defeated French, British, and Spanish armies |
| **Consequences feared globally** | Slaveholding nations (US, Cuba, Brazil) suppressed news of Haitian Revolution |

> **AP Comparison Anchor**

- **Haiti vs. American Revolution:** Americans applied Enlightenment rights selectively (excluding enslaved people); Haitians demanded the same rights be applied universally — demonstrating the revolutionary logic of consistent application
- **European response:** US refused to recognize Haiti until 1862; France demanded 150 million francs indemnity (not paid off until 1947) to compensate slaveholders — demonstrating how deeply the revolution threatened global slaveholding systems''',
         qs=[
             {'q': 'The Haitian Revolution\'s most significant feature for AP was that it:',
              'correct': 'Applied French Revolutionary natural rights language with greater consistency than France itself — enslaved Haitians argued that if "liberty" and "equality" were universal natural rights, they applied to enslaved Black people no less than to white French citizens, exposing the hypocrisy of French Revolutionary claims and completing the logic the French Revolution had initiated but refused to follow through',
              'others': ['The Revolution rejected Enlightenment ideas in favor of African traditional political thought', 'The Revolution was primarily motivated by economic grievances rather than rights-based arguments', 'The Haitian Revolution had no ideological connection to the French Revolution'],
              'exp': 'Consistent application of Enlightenment principles is the Haitian Revolution\'s AP-essential contribution: French revolutionaries proclaimed universal rights while maintaining slavery in their colonies; Haitian revolutionaries said "you claimed these rights were universal — we\'re holding you to that claim." This is the logic of consistent universalism: if rights are truly universal, they must apply to everyone; if they don\'t apply to everyone, they are not universal rights but privileges. The Haitian Revolution is the most radical Enlightenment revolution precisely because it took the Enlightenment more seriously than its European authors did.'},
             {'q': 'Toussaint L\'Ouverture\'s military genius was significant because:',
              'correct': 'It demonstrated that enslaved people, denied education and deemed by slaveholders as incapable of civilization, could produce military leadership that defeated the armies of three major European powers (France, Britain, Spain), directly refuting the racial ideology used to justify slavery',
              'others': ['Toussaint\'s military success was due to foreign assistance rather than his own leadership', 'His military achievements were modest — Haiti\'s independence was primarily achieved by diplomatic means', 'European armies were already weakened before encountering Haitian forces'],
              'exp': 'The ideological dimensions of Toussaint\'s military success matter as much as the military success itself: slaveholder ideology claimed enslaved Africans were naturally inferior, incapable of self-organization, and dependent on white authority. Toussaint\'s defeat of French, British, and Spanish forces was a living refutation of these claims — enslaved people organizing, commanding armies, and defeating the world\'s most powerful military forces. This is why slaveholding nations (US, Cuba, Brazil) suppressed information about Haiti.'},
             {'q': 'The US refusal to recognize Haiti until 1862 and France\'s imposition of an indemnity (150 million francs) demonstrate:',
              'correct': 'That slaveholding nations responded to the Haitian Revolution with hostility, isolation, and economic punishment because recognition and acceptance would have legitimized the principle that enslaved people had the right to revolt — a principle that threatened slave-based economies in the US South, Cuba, and Brazil',
              'others': ['The US and France responded positively to Haiti\'s independence as consistent with their own revolutionary principles', 'Haiti\'s isolation was unrelated to slavery and had purely diplomatic causes', 'France\'s indemnity was a standard diplomatic procedure applied to all newly independent nations'],
              'exp': 'The international response to Haiti is AP\'s evidence that the Revolution was genuinely threatening to global slaveholding systems: Haiti was not isolated because it was strategically unimportant but because accepting it meant accepting that enslaved people could revolt, kill slaveholders, and form a free republic. US slaveholders understood this perfectly — they suppressed news of Haiti precisely because enslaved people in the American South might draw the same conclusion. The international isolation of Haiti demonstrates how much the Revolution threatened the global slave system.'},
             {'q': 'The Haitian Revolution\'s comparison to the American and French Revolutions reveals:',
              'correct': 'All three invoked Enlightenment principles of natural rights and liberty, but the Haitian Revolution extended those principles most consistently — while American and French revolutionaries excluded enslaved people and maintained racial hierarchy, Haitian revolutionaries demanded and achieved inclusion of the group most violently denied Enlightenment rights, making Haiti the most consistent application of Enlightenment universalism',
              'others': ['The three revolutions had entirely different ideological foundations with no overlap', 'The American Revolution extended rights more broadly than the Haitian Revolution', 'The Haitian Revolution rejected Enlightenment ideas and was purely a military conflict'],
              'exp': 'The comparative extension of rights is AP\'s framework for ordering these three revolutions: American Revolution extended rights to white propertied men; French Revolution extended rights more broadly (some legal equality for all men) while failing to extend to colonial enslaved people; Haitian Revolution extended rights to enslaved Black people — the group most violently excluded. The hierarchy is: American (most conservative) → French (more radical) → Haitian (most consistent with Enlightenment universalism).'},
             {'q': 'Napoleon\'s attempt to restore slavery in Saint-Domingue (1802) demonstrates:',
              'correct': 'The tension between Enlightenment universalism and colonial economic interests within the French Revolution itself — Napoleon restored slavery because colonial plantation profits (sugar, coffee) were economically essential to France, demonstrating that even revolutionary France subordinated universal rights principles to economic interests when they conflicted with colonial exploitation',
              'others': ['Napoleon supported Haitian independence and never attempted to restore slavery', 'The restoration attempt was successful and Haiti remained a French colony', 'Napoleon\'s colonial policies were consistent with his domestic revolutionary reforms'],
              'exp': 'Napoleon\'s slavery restoration attempt is AP\'s evidence for the French Revolution\'s incomplete universalism: the same Napoleon who abolished feudalism in Europe and codified legal equality in the Napoleonic Code restored slavery in Haiti when colonial economic interests demanded it. This demonstrates that Enlightenment principles were applied selectively by their own champions — European liberty for Europeans, slavery for colonial Africans. The Haitian resistance to Napoleon\'s restoration army (ultimately defeating it through yellow fever and military resistance) completed the Revolution that France had tried to reverse.'},
             {'q': 'The Haitian Revolution\'s name change from Saint-Domingue to Haiti demonstrates:',
              'correct': 'The revolutionary rejection of colonial identity — by choosing the indigenous Taino name for the island rather than the French colonial name, Haitian revolutionaries symbolically claimed connection to the original inhabitants Europeans had destroyed, asserting an identity independent of both French colonialism and African origins — creating a new revolutionary national identity',
              'others': ['Haiti was renamed for purely geographic reasons with no political significance', 'The name was chosen randomly with no symbolic intention', 'Haiti adopted a French name to maintain good relations with France'],
              'exp': 'The naming choice is AP\'s evidence for the Revolution\'s identity politics: Haitian revolutionaries could have kept the French name, chosen an African name, or created a new name — they chose the indigenous Taino name (Ayiti = land of high mountains) as a deliberate political act rejecting colonial identity. This demonstrates that the Haitian Revolution was not only against slavery but against the entire colonial framework that had renamed, reorganized, and exploited the island. The name is a declaration of indigenous (if not personal) identity against colonial erasure.'},
             {'q': 'For AP, the Haitian Revolution is significant primarily because:',
              'correct': 'It is the only successful revolution led by enslaved people in world history, demonstrating that enslaved people were capable of political organization, military strategy, and state-building while simultaneously applying Enlightenment principles more consistently than any European revolution — challenging both the racial ideology of slavery and the selective application of European revolutionary ideals',
              'others': ['The Haitian Revolution is significant mainly as a Caribbean regional event with no broader implications', 'Its significance is primarily military — introducing new tactics that influenced later wars', 'The Revolution is notable mainly for its economic consequences for French colonial trade'],
              'exp': 'AP synthesis: the Haitian Revolution\'s significance operates on multiple levels simultaneously — it is a military history, an intellectual history (most consistent Enlightenment application), a social history (the only successful enslaved people\'s revolution), and a global history (threatening slaveholding systems worldwide). AP rewards multi-dimensional analysis: the Revolution matters not just for what happened in Haiti but for what it meant for the global systems of slavery, for the logic of Enlightenment universalism, and for the suppressed possibility it represented for enslaved people everywhere.'}
         ],
         dl=['The Haitian Revolution\'s most significant leader, known for military brilliance and political skill, was ___',
             'The general who completed Haitian independence after Toussaint\'s capture and declared independence January 1, 1804 was ___',
             'France demanded this financial payment from Haiti as indemnity for slaveholders\' "losses" ___'],
         do_=[['Toussaint L\'Ouverture', 'Jean-Jacques Dessalines', 'Henri Christophe', 'Vincent Ogé'],
              ['Jean-Jacques Dessalines', 'Toussaint L\'Ouverture', 'Napoleon Bonaparte', 'Henri Christophe'],
              ['150 million francs', '50 million francs', '500 million dollars', '1 billion pesos']],
         dc=['Toussaint L\'Ouverture', 'Jean-Jacques Dessalines', '150 million francs'],
         hints=['Military genius — defeated French British Spanish — captured 1803 — died in French prison', 'Completed independence — January 1 1804 — renamed country Haiti — first Black republic', 'France demanded payment — compensate slaveholders — 1825 — Haiti paid until 1947'],
         dexp='Toussaint L\'Ouverture\'s military genius made the Revolution possible; Dessalines completed independence when France captured Toussaint; and the 150 million franc indemnity demonstrates the international hostility that punished Haiti for the Revolution\'s success — all three are essential for understanding why Haiti achieved independence but at enormous ongoing cost.'
    ),
    dict(pnum=6, id_pre='whepr6',
         subtitle='Latin American Independence Movements',
         key='Latin American independence movements (c. 1808-1825) were primarily led by creole elites (American-born Spaniards) who sought political self-determination while largely preserving the colonial social hierarchy. AP questions compare Latin American independence to the American, French, and Haitian revolutions and evaluate the role of Napoleon\'s invasion of Spain as catalyst.',
         body='''## 📖 Latin American Independence Movements

> **Why Now? The Catalyst: Napoleon\'s Invasion of Spain (1807-1808)**

- Napoleon occupied Spain and placed his brother Joseph Bonaparte on the Spanish throne
- Spanish colonies had sworn loyalty to the Spanish Crown — not to Napoleon
- **Opportunity:** With Spain occupied, creole elites could claim they were governing in the name of the legitimate king (Ferdinand VII)
- This created a window of political opportunity that accelerated independence movements

> **Who Led the Movements?**

| Group | Role | Goals |
|-------|------|-------|
| **Creoles** | Independence leaders | Political self-determination; preserve social hierarchy |
| **Mestizos/indigenous** | Soldiers and mass support | Social and economic reform (often disappointed) |
| **Enslaved people** | Participated in some movements | Freedom (not always achieved) |
| **Peninsulares** | Opposed independence | Preserve Spanish colonial rule |

> **Key Figures and Movements**

- **Simón Bolívar (Venezuela/Gran Colombia):** "El Libertador"; Enlightenment-educated; defeated Spanish in northern South America; complex racial politics
- **José de San Martín (Argentina/Chile/Peru):** Military strategist; liberated southern South America; voluntarily stepped aside for Bolívar
- **Miguel Hidalgo (Mexico):** Priest who led initially popular uprising (1810); executed; movement became conservative under Agustín de Iturbide
- **Toussaint L\'Ouverture/Dessalines (Haiti):** Only enslaved-led revolution; different from creole-led movements

> **AP Comparison to Other Revolutions**

| Feature | American | French | Haitian | Latin American |
|---------|---------|-------|---------|---------------|
| Led by | Propertied colonists | Urban bourgeoisie | Enslaved people | Creole elites |
| Social change | Minimal | Major | Revolutionary | Minimal |
| Extended rights to enslaved? | No | Yes/No | Yes | Generally No |
| Influenced by | Enlightenment/Locke | Enlightenment/Rousseau | French Rev. | All three |''',
         qs=[
             {'q': 'Napoleon\'s invasion of Spain (1807-1808) catalyzed Latin American independence because:',
              'correct': 'It severed the legitimacy connection between Spanish colonies and the Spanish Crown — creoles who had accepted colonial rule because they owed loyalty to the legitimate king could argue that Napoleon\'s usurper government had no claim to their loyalty, creating political space for independence claims that had been suppressed under legitimate Spanish rule',
              'others': ['Napoleon actively encouraged Latin American independence as a French strategic interest', 'The invasion had no impact on Latin American political stability', 'Latin American independence movements were already fully developed before Napoleon\'s invasion'],
              'exp': 'The legitimacy crisis created by Napoleon\'s invasion is AP\'s mechanism: Spanish colonial loyalty was personal (to the Crown) and dynastic (to the legitimate Bourbon king); Napoleon placing his brother on the Spanish throne broke the legitimacy chain. Creole leaders who established local governing juntas "in the name of Ferdinand VII" were initially claiming to preserve legitimate royal authority — but this claim of autonomous governance became the institutional foundation for independence. Napoleon inadvertently created the political opportunity by dissolving the legitimacy that held colonial loyalty.'},
             {'q': 'Latin American independence movements were primarily conservative rather than social revolutions because:',
              'correct': 'Creole leaders sought independence from Spanish imperial control while preserving the racial and class hierarchy of colonial society — they did not want to extend political rights or economic opportunity to indigenous peoples, mestizos, or enslaved people; independence transferred power from peninsulares to creoles without restructuring the social order below the elite level',
              'others': ['Latin American independence movements radically transformed the social order', 'Creole leaders actively sought to improve conditions for indigenous and enslaved people', 'The movements were led by indigenous and mestizo populations rather than the creole elite'],
              'exp': 'The conservative character of creole independence is AP\'s key comparative point: these were elite-led independence movements, not social revolutions. Bolívar and San Martín were educated creole elites who wanted to govern their own countries — they were not interested in redistributing land, extending political rights to indigenous people, or abolishing racial hierarchy. This explains why post-independence Latin America retained the hacienda system, indigenous labor exploitation, and racial hierarchy — independence changed who sat at the top without changing the structure beneath.'},
             {'q': 'Miguel Hidalgo\'s Grito de Dolores (1810) and Mexico\'s independence process demonstrate:',
              'correct': 'The class tensions within Latin American independence — Hidalgo\'s popular movement attracted indigenous and mestizo masses who wanted social and economic reform; creole elites were alarmed by this social radicalism and ultimately achieved independence through a conservative alliance (Iturbide) that explicitly preserved the colonial social order against social transformation',
              'others': ['Mexico\'s independence was a unified movement with no internal class conflicts', 'Hidalgo successfully achieved social revolution alongside independence', 'Creole elites supported Hidalgo\'s social reform agenda'],
              'exp': 'Mexican independence\'s two-phase structure is AP\'s clearest example of revolutionary class conflict: Hidalgo\'s mass movement (1810-1811) frightened creole elites because its indigenous and mestizo followers wanted land reform and social equality; creoles suppressed Hidalgo\'s movement while negotiating conservative independence (Iturbide, 1821) that changed the flag but preserved the class hierarchy. This demonstrates that "independence" and "social revolution" were separate demands in Latin America, often in direct conflict.'},
             {'q': 'Comparing Simón Bolívar to the Haitian revolutionary leaders reveals:',
              'correct': 'Both were influenced by Enlightenment ideas about liberty and natural rights, but Bolívar\'s liberation focused on creole self-governance while Haitian leaders focused on enslaved people\'s freedom — Bolívar was educated in Enlightenment ideals by his tutor Simón Rodríguez but sought independence for a creole elite class that maintained racial hierarchy, while Haitian leaders applied Enlightenment rights universally across racial lines',
              'others': ['Bolívar and Haitian leaders had identical social goals and methods', 'Bolívar actively worked to end slavery in all of South America', 'Haitian revolutionary leaders were not influenced by Enlightenment ideas unlike Bolívar'],
              'exp': 'The Bolívar-Haiti comparison is AP\'s most precise illustration of differential application of Enlightenment rights: Bolívar wrote eloquently about liberty, equality, and natural rights but designed his liberation movements to serve creole elite interests; Haitian leaders applied the same rights language to the people most denied those rights. Both used Enlightenment ideology — but for different social class projects. AP rewards recognizing that the same ideological language can serve different class interests depending on who applies it to whom.'},
             {'q': 'The role of Enlightenment ideas in Latin American independence demonstrates which AP principle?',
              'correct': 'Ideas are adopted and adapted by different social groups to serve their specific interests — creole elites used Enlightenment natural rights language to justify independence from Spain while simultaneously refusing to apply those rights to indigenous peoples, demonstrating that the same intellectual framework can be deployed selectively to advance particular class or group interests',
              'others': ['Enlightenment ideas were applied consistently and universally by all Latin American independence leaders', 'Latin American independence was motivated purely by economic grievances with no ideological dimension', 'Enlightenment ideas were irrelevant to Latin American independence — Spanish colonial policies were the only cause'],
              'exp': 'Selective ideological adoption is AP\'s meta-lesson about how ideas function in historical change: Bolívar, San Martín, and other creole leaders were genuinely influenced by Enlightenment ideas — but they applied natural rights to creoles vis-à-vis Spain while ignoring them regarding indigenous people and enslaved Africans. This demonstrates that ideas are tools used by historical actors with specific interests, not objective principles that automatically apply themselves consistently. AP rewards recognizing the social interests behind ideological claims.'},
             {'q': 'The comparison of all four Atlantic revolutions (American, French, Haitian, Latin American) reveals which pattern?',
              'correct': 'Each revolution extended Enlightenment rights to a progressively broader population: American to propertied white men; French to all male citizens (in theory); Haitian to enslaved Black people; Latin American to creole elites (but not others) — demonstrating that the history of Enlightenment-inspired revolution is a contested, uneven, and incomplete expansion of who qualifies as a right-bearing person',
              'others': ['All four revolutions extended identical rights to identical populations', 'Later revolutions were uniformly more progressive than earlier ones', 'The revolutions had no relationship to each other — each was entirely independent'],
              'exp': 'The comparative extension pattern is AP\'s synthesis of all four Atlantic revolutions: the history of these revolutions is the history of who gets included in "all men are created equal" — and the answer expanded, unevenly and incompletely, from propertied white men to all white men to (in principle) all male citizens to enslaved Black people. Latin America complicates the pattern (creole expansion, not social expansion). The full AP synthesis recognizes both the expansion trend and its unevenness and incompleteness.'},
             {'q': 'For AP, the Latin American independence movements\' most significant limitation was:',
              'correct': 'That independence from Spain did not produce social revolution — indigenous people continued laboring under hacienda systems, enslaved people were not universally freed, mestizo populations remained in subordinate positions, and political power remained concentrated in creole landowning elites — demonstrating that political independence does not automatically produce social equality',
              'others': ['Latin American nations immediately achieved social equality after independence', 'The absence of social change was a minor issue compared to the political achievement of independence', 'Social inequality in post-independence Latin America was entirely different from colonial-era inequality'],
              'exp': 'Political vs. social independence is AP\'s framework for evaluating independence movements: Latin American independence (1810-1825) transferred political sovereignty from Madrid to local creole governments but did not restructure the social and economic relationships that had characterized colonial society. The hacienda system (large estates with indigenous labor obligations), racial hierarchy (casta system), and concentrated land ownership persisted for generations after independence. This is the foundation for later 19th-20th century Latin American social conflicts that were attempts to complete the social revolution independence had postponed.'}
         ],
         dl=['The Venezuelan creole leader who liberated northern South America and was called "El Libertador" was ___',
             'The Argentine general who crossed the Andes and liberated Chile and Peru was ___',
             'Napoleon\'s installation of this person as King of Spain catalyzed Latin American independence ___'],
         do_=[['Simón Bolívar', 'José de San Martín', 'Miguel Hidalgo', 'Agustín de Iturbide'],
              ['José de San Martín', 'Simón Bolívar', 'Miguel Hidalgo', 'Bernardo O\'Higgins'],
              ['Joseph Bonaparte', 'Napoleon Bonaparte himself', 'Ferdinand VII', 'Charles IV']],
         dc=['Simón Bolívar', 'José de San Martín', 'Joseph Bonaparte'],
         hints=['Venezuelan — El Libertador — Gran Colombia — Enlightenment educated — northern South America', 'Argentine general — crossed Andes — Chile liberation — Peru — stepped aside for Bolívar', 'Napoleon\'s brother — placed on Spanish throne 1808 — broke colonial loyalty chain'],
         dexp='Bolívar and San Martín represent the two major military liberation campaigns (northern and southern South America respectively), while Joseph Bonaparte\'s installation represents the triggering event that created the political opportunity for independence — together they explain who led the movements and why they happened when they did.'
    ),
    dict(pnum=7, id_pre='whepr7',
         subtitle='AP Review and Exam Mastery',
         key='Enlightenment and political revolution content is central to AP World History, appearing in comparison, causation, CCOT, and complexity questions. Key skills include comparing revolution types, evaluating the consistency of rights application, and analyzing connections between Enlightenment ideas and specific revolutionary outcomes.',
         body='''## 📖 AP Review: Enlightenment and Political Revolutions

> **Must-Know Vocabulary**

- **Natural rights** — Rights inherent to humans that governments cannot take away (Locke: life, liberty, property)
- **Social contract** — Agreement between governed and government; government derives authority from consent
- **Separation of powers** — Division of government into branches to prevent tyranny (Montesquieu)
- **Popular sovereignty** — Political authority derived from the people, not from kings or God
- **Bourgeoisie** — Middle class; property owners; primary beneficiaries of American and French revolutions
- **Declaration of Rights of Man (1789)** — French revolutionary rights document; "liberty, equality, fraternity"
- **Reign of Terror** — Radical phase of French Revolution; 40,000 executed; Robespierre\'s Committee of Public Safety
- **Toussaint L\'Ouverture** — Haitian revolution leader; military genius; captured and imprisoned by Napoleon
- **Creole** — American-born Spanish colonist; primary leaders of Latin American independence
- **El Libertador** — Title for Simón Bolívar; liberated northern South America

> **AP Comparison Matrix**

| Revolution | Rights Extended To | Social Change? | Key Cause | Napoleon Connection? |
|-----------|-------------------|----------------|----------|---------------------|
| **American (1776)** | Propertied white men | Minimal | Enlightenment + taxation | Indirect (France inspired) |
| **French (1789)** | All male citizens (theory) | Major | Estate inequality + debt | Central figure after |
| **Haitian (1791)** | Enslaved Black people | Revolutionary | French Revolution proclamations | Napoleon tried to reverse it |
| **Latin American (1808-1825)** | Creole elites | Minimal | Napoleon\'s Spain invasion | Direct catalyst |

> **Common AP Prompt Patterns**

- **Comparison:** Compare any two of the four Atlantic revolutions
- **Causation:** How did Enlightenment ideas cause political revolutions?
- **Continuity:** Which features of pre-revolutionary society continued after revolution?
- **Complexity:** How were revolutions simultaneously liberating and limiting?''',
         qs=[
             {'q': 'An AP SAQ asks: "Briefly explain ONE similarity between the American and French Revolutions." Which response earns full credit?',
              'correct': 'Both the American and French Revolutions were shaped by Enlightenment ideas about natural rights and social contract: the American Declaration of Independence invoked Locke\'s natural rights theory to justify revolution against British authority; the French Declaration of Rights of Man proclaimed liberty, equality, and fraternity as natural rights — demonstrating that both revolutions legitimated themselves through the same Enlightenment intellectual framework',
              'others': ['Both revolutions were identical in their social radicalism and outcomes', 'Both extended full political rights to all people in their societies', 'Both were caused primarily by economic factors with no ideological dimension'],
              'exp': 'Full SAQ credit: specific similarity (Enlightenment natural rights framework) + evidence from both revolutions (American Declaration/Locke; French Declaration of Rights of Man) + reasoning (both legitimated themselves through the same intellectual framework). The response compares rather than describing each revolution separately, using specific documents as evidence and explaining why the similarity is historically significant.'},
             {'q': 'For an AP LEQ comparing the Haitian Revolution to the American Revolution, which thesis is most analytical?',
              'correct': 'While both the American and Haitian Revolutions invoked Enlightenment principles of natural rights and liberty, the Haitian Revolution was more consistent in applying those principles — Americans applied them only to white propertied men while enslaving hundreds of thousands; Haitians demanded and achieved inclusion of the population most violently denied natural rights, demonstrating that revolutions vary fundamentally in the breadth of liberation they achieve',
              'others': ['Both revolutions were equal in extending rights to all people in their societies', 'The American Revolution was more progressive than the Haitian Revolution', 'The two revolutions had completely different causes with no intellectual overlap'],
              'exp': 'This thesis earns full AP credit: acknowledges both similarity (Enlightenment principles) and meaningful difference (selective vs. consistent application), uses specific evidence (Americans enslaved people while claiming rights; Haitians included enslaved people), provides the analytical claim (revolutions vary in breadth of liberation), and avoids simplification. The sophistication is measuring both revolutions against the same standard (consistent application of universal rights).'},
             {'q': 'A DBQ document from a Latin American creole leader (c. 1810) argues for independence using Enlightenment language. What is the most sophisticated sourcing?',
              'correct': 'A creole leader writing to argue for independence was using Enlightenment language instrumentally — the natural rights rhetoric served his class interests (independence from Spain would give creoles political power) without necessarily committing him to extending those rights to indigenous peoples or enslaved people; the document reveals both genuine Enlightenment influence AND selective application serving creole class interests',
              'others': ['Creole independence leaders were sincere Enlightenment universalists with no class interests', 'The document is worthless evidence because all political arguments are self-interested', 'Sourcing analysis is unnecessary because the content speaks for itself'],
              'exp': 'Sophisticated sourcing identifies point of view + purpose: creole leaders were genuinely influenced by Enlightenment ideas (most were educated in Enlightenment philosophy) AND had specific class interests in independence (political power, economic autonomy from Spanish mercantilism). Both are true simultaneously — the rhetorical Enlightenment language and the class-interest motivation are not mutually exclusive. AP sourcing rewards recognizing this complexity rather than choosing between "sincere" and "hypocritical."'},
             {'q': 'The Reign of Terror\'s significance for AP analysis of revolutions is that it:',
              'correct': 'Demonstrates how revolutions can use their own principles against their own people — the same "liberty" and "rights" the Revolution proclaimed were suspended when Robespierre\'s Committee of Public Safety determined that revolutionary security required eliminating "enemies," demonstrating the recurring revolutionary logic that exceptional circumstances justify exceptional measures including the suspension of the rights being fought for',
              'others': ['The Terror was a minor aberration with no significance for understanding revolutionary dynamics', 'The Terror proves that all revolutions inevitably produce similar violence', 'The Terror was caused entirely by external forces with no internal revolutionary dynamics'],
              'exp': 'The revolutionary logic of the Terror is AP\'s reusable analytical framework: "the revolution is in danger; therefore extraordinary measures are justified; therefore the very rights we proclaimed can be suspended to protect them." This logic recurs in the Jacobin Terror, Stalinist purges, and Maoist Cultural Revolution — different times, same dynamic. AP rewards recognizing these recurring patterns and explaining the mechanism (threat perception → emergency powers → terror) rather than treating each case as unique.'},
             {'q': 'Napoleon\'s historical significance for the Enlightenment-to-revolution narrative is that he:',
              'correct': 'Simultaneously preserved and distorted the Revolution\'s legacy — the Napoleonic Code codified Enlightenment social principles (legal equality, religious tolerance, property rights) and spread them across Europe through conquest, while Napoleon\'s authoritarian rule ended the political democracy the Revolution had begun, demonstrating the tension between Enlightenment social goals and democratic political methods',
              'others': ['Napoleon completely reversed all Enlightenment and revolutionary achievements', 'Napoleon faithfully implemented all aspects of Enlightenment political thought', 'Napoleon\'s significance was purely military with no ideological dimension'],
              'exp': 'The Napoleon-Enlightenment complexity is AP\'s synthesis point: he is the greatest exporter of Enlightenment social principles (the Napoleonic Code was adopted or influenced law in much of Europe, Latin America, and beyond) AND the destroyer of the political democracy those principles implied. This is not a contradiction but a feature of "revolution from above" — using state power to implement social reforms without popular political participation. AP rewards the "both/and" analysis over the "either/or."'},
             {'q': 'Comparing all four Atlantic revolutions reveals which overarching AP principle?',
              'correct': 'The history of Enlightenment-inspired revolution is the history of an expanding, contested, and incomplete argument about who qualifies as a rights-bearing person — each revolution extended rights more broadly than existing practice while excluding significant populations, and each exclusion generated demands for inclusion that drove subsequent waves of struggle',
              'others': ['Enlightenment revolutions uniformly achieved complete equality for all people', 'The four revolutions were too different to reveal any common pattern', 'Revolutionary rights expansion moved in a straight line from least to most inclusive'],
              'exp': 'The meta-pattern of Atlantic revolutions is AP\'s synthesis lesson: rights expansion was real but contested and incomplete. American Revolution expanded rights for colonial elites but excluded enslaved people → Haitian Revolution applied rights to enslaved people → French Revolution applied rights to all male citizens → Latin American Revolution applied rights to creoles → each step both expanded and left gaps that generated further struggle. AP rewards identifying this contested expansion pattern rather than treating each revolution in isolation.'},
             {'q': 'For AP, the most important analytical skill when studying Enlightenment and political revolutions is:',
              'correct': 'Evaluating the gap between revolutionary ideals and revolutionary practice — every revolution proclaimed principles (natural rights, liberty, equality) that it failed to implement consistently, and analyzing who was included and excluded from those principles, and why, reveals the class, race, and gender interests that shaped revolutionary outcomes more than the proclaimed ideals did',
              'others': ['Memorizing dates and leaders is the primary skill for AP revolutionary content', 'Accepting revolutionary leaders\' own descriptions of their goals at face value', 'Treating revolutionary ideals and revolutionary practice as identical'],
              'exp': 'The ideals-practice gap is AP\'s fundamental analytical skill for revolutionary history: revolutionary documents (Declaration of Independence, Declaration of Rights of Man) proclaim ideals; revolutionary outcomes (Constitution protecting slavery, Terror\'s executions, creole social hierarchy preservation) reveal whose interests actually shaped events. The analysis asks: who benefited? who was excluded? why did the gap between ideals and practice exist? Answering these questions distinguishes AP-level analysis from surface-level description.'}
         ],
         dl=['The French document that proclaimed "liberty, equality, fraternity" as natural rights (1789) was ___',
             'The leader who connected the American and French Revolutions by fighting in both was ___',
             'Napoleon\'s legal code that preserved revolutionary social equality principles across Europe was ___'],
         do_=[['The Declaration of Rights of Man', 'The Declaration of Independence', 'The Napoleonic Code', 'The Social Contract'],
              ['Lafayette', 'Toussaint L\'Ouverture', 'Simón Bolívar', 'Thomas Jefferson'],
              ['The Napoleonic Code', 'The Declaration of Rights of Man', 'The Constitution of the Year III', 'The Civil Code']],
         dc=['The Declaration of Rights of Man', 'Lafayette', 'The Napoleonic Code'],
         hints=['French 1789 — natural rights — liberté égalité fraternité — influenced by American Declaration', 'French aristocrat — fought at Valley Forge — returned to France — led National Guard', 'Napoleon 1804 — legal equality — religious tolerance — exported across Europe through conquest'],
         dexp='The Declaration of Rights of Man articulates the French Revolution\'s ideals; Lafayette embodies the personal connection between American and French revolutions; and the Napoleonic Code represents the revolutionary legacy that persisted and spread even after Napoleon\'s defeat — three essential elements for AP synthesis of Enlightenment-to-revolution history.'
    ),
]

for p in parts:
    content = make(p['pnum'], p['id_pre'], p['subtitle'], p['key'],
                   p['body'], p['qs'], p['dl'], p['do_'], p['dc'],
                   p['hints'], p['dexp'])
    w(f"{SLUG}-part{p['pnum']}.ts", content)

print("All enlightenment/political revolutions parts done!")
