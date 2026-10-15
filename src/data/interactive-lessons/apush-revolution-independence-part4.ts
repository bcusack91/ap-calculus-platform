export const apushRevolutionIndependencePart4Data = {
  topicSlug: 'apush-revolution-independence',
  sections: [
    {
      id: 'apushrev4-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 Revolution & Independence

**Part 4 of 7 — The War for Independence: Comparison and Causation**

---

| Section |
|---------|
| 📖 Comparing the Two Sides in 1775 |
| Four Phases of the War |
| Saratoga and the French Alliance |
| The Southern Campaign and Yorktown |
| The Treaty of Paris (1783) |
| Causation Skill: Why the Americans Won |

> 🔑 **Key Concept:** The CED (Key Concept 3.1.III) says that despite considerable Loyalist opposition and Britain's apparently overwhelming military and financial strength, the Patriots won through **the leadership of George Washington, the colonists' ideological commitment and resilience, and assistance sent by European allies**. This part tests that claim against the evidence.
      `
    },
    {
      id: 'apushrev4-compare',
      type: 'text' as const,
      content: `
## 📖 Comparing the Two Sides in 1775

| Factor | Great Britain | United Colonies |
|---|---|---|
| **Population** | About 8 million in Great Britain | About 2.5 million, including roughly 500,000 enslaved people |
| **Army** | Professional regulars plus about 30,000 hired German soldiers (often called Hessians) | A new Continental Army with short enlistments, plus state militias |
| **Navy** | The world's strongest | Almost none; privateers raided British shipping |
| **Money** | Bank of England, efficient taxation, good credit | No power to tax; Congress printed paper money that lost most of its value ("not worth a Continental") |
| **Allies at home** | Many Loyalists; most Native nations that took sides | Some Native allies, such as the Oneida and Tuscarora |
| **Geography** | Supplies and orders crossed 3,000 miles of ocean | Fighting on home ground across a vast territory |
| **What victory required** | Conquer and **hold** a huge territory and restore royal government | **Avoid losing**: keep an army in the field until Britain gave up |

### Reading the Table

On paper Britain had nearly every advantage. The last row explains why that was not enough. Britain could capture any city it chose (Boston, New York, Philadelphia, Charleston), but capturing cities did not end the rebellion, because the rebellion had no single capital whose fall would end it. Washington understood this: his strategy was to **preserve the Continental Army**, fight when the odds were good, and retreat when they were not.
      `
    },
    {
      id: 'apushrev4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best explains why Britain\'s capture of major cities such as New York and Philadelphia did not end the war?',
            options: [
              'The rebellion had no single center whose fall would end it',
              'British troops refused to occupy cities for more than a few weeks',
              'Congress had moved all American soldiers to Canada before the attacks',
              'France had already taken control of both cities by treaty arrangement'
            ],
            correctAnswer: 0,
            explanation: 'Resistance was organized through local committees, state governments and a mobile army, so losing a city did not destroy it. British forces held New York for the whole war, Congress did not move the army to Canada, and France controlled no American cities.'
          },
          {
            question: 'Which British advantage was most limited by the distance between Britain and North America?',
            options: [
              'Supplying troops and equipment',
              'The loyalty of the British public',
              'The skill of British naval officers',
              'The size of Britain\'s population'
            ],
            correctAnswer: 0,
            explanation: 'Every soldier, order and most supplies had to cross about 3,000 miles of ocean, which slowed reinforcement and resupply. Distance did not change Britain\'s population, its officers\' skill, or public loyalty at home.'
          }
        ]
      }
    },
    {
      id: 'apushrev4-phases',
      type: 'text' as const,
      content: `
## Four Phases of the War

| Phase | Years | Key Events | Outcome |
|---|---|---|---|
| **1. New England** | 1775–1776 | Lexington and Concord (April 19, 1775); Bunker Hill (June 1775); Washington takes command; failed American invasion of Quebec; British evacuate Boston (March 1776) | War begins; Britain decides to fight elsewhere |
| **2. Middle colonies** | 1776–1778 | British take New York (1776); Washington's victories at Trenton (December 26, 1776) and Princeton (January 1777); British take Philadelphia (1777); Saratoga (October 1777); Valley Forge winter (1777–1778) | Continental Army survives; Saratoga brings France in |
| **3. Southern campaign** | 1778–1781 | British take Savannah (1778) and Charleston (1780); American defeat at Camden (1780); Patriot victories at Kings Mountain (1780) and Cowpens (1781); Nathanael Greene's campaign wears down Cornwallis | Britain cannot hold the southern interior |
| **4. Yorktown and peace** | 1781–1783 | French fleet blocks Chesapeake Bay; Cornwallis surrenders (October 19, 1781); Treaty of Paris (September 1783) | Independence recognized |

## Saratoga and the French Alliance

In 1777 General John Burgoyne marched south from Canada along Lake Champlain and the Hudson River to cut New England off from the other colonies. Expected support from the south never arrived, his supply lines stretched thin, and militia poured in to reinforce the Continentals. On **October 17, 1777**, Burgoyne surrendered his army of about 5,800 men at Saratoga.

| Before Saratoga | After Saratoga |
|---|---|
| France sent secret money and weapons but avoided open war | **Treaty of Alliance (February 1778)**: France recognizes American independence and enters the war |
| A local rebellion in British eyes | A global war: Spain joins France against Britain (1779); Britain and the Dutch Republic go to war (1780) |
| Britain could concentrate on America | Britain must defend the Caribbean, India, Gibraltar and the English Channel |

> 🔑 **AP Connection:** Saratoga is the standard answer for a **turning point**, but the best explanation is about **diplomacy**, not just battle: the victory convinced France that the Americans could win, and French entry turned a colonial rebellion into a world war that stretched British resources.
      `
    },
    {
      id: 'apushrev4-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) In what year did Burgoyne surrender at Saratoga?

2) Which European nation signed a Treaty of Alliance with the United States in February 1778?

3) Name the Virginia town where Cornwallis surrendered in October 1781.

Enter a year or a single name.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1777', 'France', 'Yorktown'],
        hint1: 'The year after the Declaration of Independence.',
        hint2: 'Its foreign minister Vergennes wanted revenge for the Seven Years\' War.',
        hint3: 'On a peninsula between the York and James Rivers.',
        explanation: 'Burgoyne surrendered at Saratoga in October 1777. France signed the Treaty of Alliance in February 1778. Cornwallis surrendered at Yorktown, Virginia, on October 19, 1781.'
      }
    },
    {
      id: 'apushrev4-yorktown',
      type: 'text' as const,
      content: `
## The Southern Campaign and Yorktown

After failing to win in the North, Britain bet on the South, where it expected Loyalists to rise and enslaved people to flee to British lines. The British took Savannah (1778) and Charleston (1780), capturing about 5,000 American soldiers at Charleston, one of the worst American defeats of the war.

The strategy failed for three reasons:

1. **Loyalist support was weaker and less reliable than expected**, and British raids drove neutral settlers toward the Patriots.
2. **A brutal civil war** between Patriot and Loyalist militias made the backcountry impossible to hold. At Kings Mountain (October 1780), Patriot militia destroyed a Loyalist force.
3. **Nathanael Greene** avoided a decisive defeat, won at Cowpens through his subordinate Daniel Morgan (January 1781), and bled Cornwallis's army at Guilford Courthouse (March 1781).

Cornwallis moved to Yorktown, Virginia, to wait for the Royal Navy. Instead, a French fleet under Admiral de Grasse defeated a British fleet off the Chesapeake capes in September 1781 and sealed the bay. Washington and the French general Rochambeau marched south, and French soldiers made up nearly half of the besieging army. Cornwallis surrendered on **October 19, 1781**. Parliament voted in early 1782 to end offensive operations.

## The Treaty of Paris (1783)

Signed September 3, 1783, and negotiated for the United States by Benjamin Franklin, John Adams and John Jay:

| Term | Detail |
|---|---|
| **Independence** | Britain recognizes the United States as free and sovereign |
| **Boundaries** | West to the Mississippi River; north roughly along the Great Lakes; south at the 31st parallel |
| **Fishing** | Americans keep rights to fish off Newfoundland |
| **Debts and Loyalists** | Debts to British creditors remain valid; Congress will "recommend" that states restore Loyalist property |
| **Florida** | Britain returns Florida to Spain in a separate treaty |

The American negotiators made a separate preliminary peace with Britain in 1782 without fully consulting France, which won the United States more generous western boundaries. The treaty said nothing about the Native nations who lived in the territory Britain handed over.
      `
    },
    {
      id: 'apushrev4-causation',
      type: 'text' as const,
      content: `
## Causation Skill: Why the Americans Won

A single-cause answer ("the French won it for them") earns little. Build a **ranked, connected** explanation:

| Cause | Type | Evidence |
|---|---|---|
| **French alliance** | External, decisive by 1781 | Money, arms, troops, and the fleet that trapped Cornwallis |
| **Washington's strategy** | Leadership | Kept the Continental Army intact through defeats, Valley Forge and mutinies |
| **Commitment and resilience** | Ideological | Soldiers and militia kept fighting despite unpaid wages and harsh winters |
| **British difficulties** | Structural | Distance, the need to hold territory, a global war after 1778, and weak Loyalist support in key areas |

### Connecting the Causes

The causes depended on one another. Washington's survival as a commander made Saratoga possible; Saratoga brought in France; France's entry forced Britain to fight a world war; and French naval power produced Yorktown. A strong LEQ thesis shows these links:

> "Although Britain held clear military and financial advantages, the Patriots won because Washington preserved the Continental Army long enough for the victory at Saratoga to bring France into the war, and French naval and military support then turned British overextension into defeat at Yorktown."

> 🔑 **AP Connection:** This thesis mirrors the CED's own explanation and adds a **sequence**. Sequence plus ranking is what moves a causation argument from description to analysis.
      `
    },
    {
      id: 'apushrev4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Causation Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The American victory at Saratoga in 1777 is considered a turning point mainly because it',
            options: [
              'ended British operations in the northern colonies for the rest of the war',
              'persuaded France to recognize the United States and enter the war',
              'forced Parliament to repeal the Coercive Acts and offer peace terms',
              'gave the Continental Army control of the city of Philadelphia'
            ],
            correctAnswer: 1,
            explanation: 'Saratoga convinced France that the Americans could win, leading to the Treaty of Alliance in February 1778. British forces stayed in New York until 1783, Philadelphia was held by the British that winter, and Parliament did not end the war in 1777.'
          },
          {
            question: 'Which factor most directly made the British surrender at Yorktown possible?',
            options: [
              'A French fleet that blocked the British in Chesapeake Bay',
              'A Loyalist uprising that turned against Cornwallis in Virginia',
              'A Spanish army that marched north from Florida to join Washington',
              'A Native alliance that cut British supply lines through the Ohio Valley'
            ],
            correctAnswer: 0,
            explanation: 'De Grasse\'s fleet defeated the British navy off the Chesapeake and trapped Cornwallis, while French and American troops besieged him by land. Loyalists did not turn on Cornwallis, and no Spanish or Native force took part in the siege.'
          },
          {
            question: 'Which evidence would best support the CED claim that the colonists\' "ideological commitment and resilience" contributed to victory?',
            options: [
              'French loans paid for much of the Continental Army\'s equipment',
              'The Royal Navy struggled to supply troops across the Atlantic',
              'The Continental Army held together through the Valley Forge winter',
              'Spain declared war on Britain as an ally of France in 1779'
            ],
            correctAnswer: 2,
            explanation: 'Surviving a winter of hunger and disease at Valley Forge and emerging as a better-trained army shows commitment and resilience. French loans and Spanish entry are evidence of foreign aid, and supply problems are evidence of British difficulties.'
          }
        ]
      }
    }
  ]
}
