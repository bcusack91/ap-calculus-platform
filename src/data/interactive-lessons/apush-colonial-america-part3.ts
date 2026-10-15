export const apushColonialAmericaPart3Data = {
  topicSlug: 'apush-colonial-america',
  sections: [
    {
      id: 'apushcol3-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 Colonial America

**Part 3 of 7 — Reading Colonial Voices: Leaders, Servants and Lawmakers**

---

| Section |
|---------|
| 📖 How to Read a Colonial Source |
| Source 1: John Smith Lays Down the Law (events of 1608) |
| Source 2: Richard Frethorne Writes Home (1623) |
| 📌 Source 3: Maryland's Act Concerning Religion (1649) |
| Source 4: Gottlieb Mittelberger on the Redemptioner Trade (1750s) |

> 🔑 **Key Concept:** The same colonial world looks very different from the top and from the bottom. This part pairs a colony's leader with a servant, and a lawmaking assembly with an immigrant witness, so you can practice the AP sourcing skill: explaining **how the author's situation, audience and purpose shape what a source says** and what it can and cannot prove. (Part 6 works through a different document set: the Mayflower Compact, Winthrop, Bacon, Penn and Wheatley.)
      `
    },
    {
      id: 'apushcol3-method',
      type: 'text' as const,
      content: `
## 📖 How to Read a Colonial Source

On the AP exam, sourcing earns credit only when it does work in your argument. Use three moves for every document.

| Move | Question to ask | Example sentence starter |
|---|---|---|
| **1. Situate** | What was happening, and where does the author stand in it? | "Writing as a ___ during ___, the author..." |
| **2. Explain the effect** | How do audience and purpose shape the content? | "Because the letter was meant to persuade ___, it stresses ___..." |
| **3. Judge the use** | What is this source good evidence **for**, and what can it not show? | "This document is strong evidence of ___ but cannot show ___." |

Two warnings about colonial sources:
- **Spelling and wording** in the 1600s were irregular. Classroom editions often modernize them. That does not change the meaning, but always say which version you are quoting.
- **Survival is uneven.** Colony leaders, ministers and assemblies left far more writing than servants, enslaved people or Native Americans. A rare servant's letter is valuable partly **because** it is rare.
      `
    },
    {
      id: 'apushcol3-smith-frethorne',
      type: 'text' as const,
      content: `
## Source 1: John Smith Lays Down the Law

> "You see now that power resteth wholly in myself: you must obey this now for a Law, that he that will not work shall not eat (except by sickness he be disabled). For the labors of thirty or forty honest and industrious men shall not be consumed to maintain an hundred and fifty idle loiterers."
>
> — John Smith, *The Generall Historie of Virginia, New-England, and the Summer Isles* (1624), recalling his order as president of the Jamestown council in 1608 (spelling modernized)

**Situate.** In 1608 Jamestown was a company outpost of a few hundred men, many of them gentlemen unused to manual labor, and many had already died of disease and hunger. Smith became council president in September 1608.

**Explain the effect.** Smith published this account in **1624**, sixteen years later, the same year the Crown took over the bankrupt Virginia Company. He was out of power and looking for new employment in colonization. The passage casts Smith as the one leader whose discipline kept the colony alive, so it is partly **self-promotion**.

**Judge the use.** Strong evidence that early Jamestown suffered from a **labor shortage and settlers unprepared for farm work**, and that the company relied on harsh military-style discipline. Weak evidence for exactly what Smith said or how well his rule worked, because he is the only witness and the hero of his own story.

---

## Source 2: Richard Frethorne Writes Home

> "This is to let you understand that I your child am in a most heavy case by reason of the nature of the country, [which] is such that it causes much sickness as the scurvy and the bloody flux and diverse other diseases, which makes the body very poor and weak... And I have nothing to comfort me, nor there is nothing to be gotten here but sickness and death except that one had money to lay out in some things for profit."
>
> — Richard Frethorne, indentured servant at Martin's Hundred, Virginia, letter to his parents in England, March–April 1623 (spelling modernized)

**Situate.** Frethorne wrote about a year after the **Powhatan attack of March 1622**, which killed roughly a quarter of the English in Virginia, including dozens at Martin's Hundred. Food was scarce and disease was rampant. This letter is almost the only surviving record of his life.

**Explain the effect.** The audience is his **parents**, and later in the letter he begs them to send food or pay to **buy out his indenture**. A servant asking for rescue has every reason to stress suffering, but the details he gives (water gruel, a stolen cloak, the deaths of his lieutenant and the lieutenant's father and brother) match other records of Virginia in 1622–23.

**Judge the use.** Strong evidence of the **conditions indentured servants faced** and of why so many died before finishing their terms. It cannot show what all servants experienced: Frethorne wrote in an especially bad year, and survivors who later gained land left different stories.

### Comparing Sources 1 and 2

| | Smith (1624) | Frethorne (1623) |
|---|---|---|
| Position | Former colony president, author | Young indentured servant |
| Audience | English readers and investors | His parents |
| Purpose | Defend his record; promote colonization | Ask for help |
| Shared evidence | Sickness, hunger and a desperate need for labor | Sickness, hunger and a desperate need for labor |
| Key difference | Blames idle settlers | Blames the land, disease and want of food |

> 🔑 **AP Connection:** When two sources from different positions agree on a fact (here, disease and labor shortage), that agreement is strong evidence. When they disagree about **why**, the disagreement itself tells you about each author's point of view.
      `
    },
    {
      id: 'apushcol3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Source Check: Smith and Frethorne** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Frethorne\'s letter is most useful to a historian as evidence of which of the following?',
            options: [
              'The living conditions and death rates that indentured servants faced',
              'The profits that Virginia Company investors earned from tobacco',
              'The reasons the Powhatan Confederacy chose to attack in 1622',
              'The official policies the Crown adopted when it took over Virginia'
            ],
            correctAnswer: 0,
            explanation: 'A servant writing about his own food, illness and fears is direct evidence of servants\' conditions. He gives no figures on profits, cannot speak for Powhatan motives, and wrote before the Crown took control in 1624.'
          },
          {
            question: 'Which aspect of Smith\'s situation most limits the reliability of his account of his 1608 order?',
            options: [
              'He wrote in Spanish for readers who had never seen Virginia',
              'He had never visited Virginia and relied on others\' letters',
              'He wrote as a Puritan minister opposed to the Virginia Company',
              'He wrote years later in a book that praised himself'
            ],
            correctAnswer: 3,
            explanation: 'Smith published in 1624, out of office and seeking new commissions, so he had reason to cast himself as the colony\'s savior. He did lead Jamestown in person, wrote in English, and was not a Puritan minister.'
          }
        ]
      }
    },
    {
      id: 'apushcol3-maryland',
      type: 'text' as const,
      content: `
## 📌 Source 3: Maryland's Act Concerning Religion (1649)

> "...no person or persons whatsoever within this province... professing to believe in Jesus Christ, shall from henceforth be any ways troubled, molested or discountenanced for or in respect of his or her religion nor in the free exercise thereof within this province... nor any way compelled to the belief or exercise of any other religion against his or her consent..."
>
> — Maryland General Assembly, "An Act Concerning Religion," April 1649 (spelling modernized)

**Situate.** Maryland was chartered in 1632 to **Cecilius Calvert, Lord Baltimore**, a Catholic, partly as a refuge for English Catholics. Protestants quickly became the majority. In England, the **English Civil War** had just ended with Puritan victory and the execution of King Charles I (January 1649), and Catholics feared what a Puritan-dominated government might do.

**Explain the effect.** The act protected **Catholics as a minority** by protecting all Christians. Its purpose was practical peace in a divided colony, not a general principle of liberty. The same act ordered **death** for anyone who denied the divinity of Jesus or the Trinity, and fines or whipping for insulting religious groups with names such as "heretic" or "papist."

**Judge the use.** Good evidence that proprietors used **toleration to keep order and attract settlers**, and of Catholic-Protestant tension. It is not evidence of modern religious freedom: non-Christians were excluded. It also did not last; Protestant rebels suspended it in 1654, and after 1689 Maryland made the Church of England its established church.

| Common misreading | Better reading |
|---|---|
| "Maryland granted freedom of religion." | Maryland granted **toleration among Christians**, with death for those who denied the Trinity. |
| "The act reflects Enlightenment ideas." | It came decades before the Enlightenment; its motive was protecting a Catholic proprietor's co-religionists. |
      `
    },
    {
      id: 'apushcol3-input',
      type: 'input-boxes' as const,
      content: `
**Source Recall** ✍️

1) In what year did Maryland's assembly pass the Act Concerning Religion?

2) The Calvert family founded Maryland partly as a refuge for members of which English religious minority? (one word, plural)

3) What name was given to German immigrants who sailed without paying and then sold their labor on arrival to cover the fare? (one word, plural)

Use the exact historical term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1649', 'Catholics', 'redemptioners'],
        hint1: 'The same year England executed King Charles I.',
        hint2: 'Lord Baltimore belonged to this faith, which England\'s laws penalized.',
        hint3: 'They "redeemed" their passage debt with years of service.',
        explanation: 'Maryland\'s Act Concerning Religion dates from 1649. The Calverts were Catholics seeking a haven for their faith. Redemptioners, often German families, paid their passage by selling their labor after landing in Philadelphia.'
      }
    },
    {
      id: 'apushcol3-mittelberger',
      type: 'text' as const,
      content: `
## Source 4: Gottlieb Mittelberger on the Redemptioner Trade

> "When the ships have landed at Philadelphia after their long voyage, no one is permitted to leave them except those who pay for their passage or can give good security; the others, who cannot pay, must remain on board the ships till they are purchased... When they have come to an agreement, it happens that adult persons bind themselves in writing to serve 3, 4, 5 or 6 years for the amount due by them, according to their age and strength. But very young people, from 10 to 15 years, must serve till they are 21 years old."
>
> — Gottlieb Mittelberger, *Journey to Pennsylvania in the Year 1750 and Return to Germany in the Year 1754* (published in German, 1756; English translation by Carl Theodor Eben, 1898)

**Situate.** Mittelberger was a German organist and schoolmaster who lived in Pennsylvania from 1750 to 1754. In the 1700s tens of thousands of German-speaking migrants from the Rhineland sailed to Philadelphia, many as **redemptioners**: they boarded without paying and sold their labor after arrival.

**Explain the effect.** He wrote **after returning to Germany**, and he says plainly that he meant to **warn Germans** against agents who painted America too brightly. That purpose explains why the book dwells on suffering at sea and the sale of servants.

**Judge the use.** Strong evidence of how the **redemptioner system** worked and of the human cost of the voyage. Less reliable about whether migration paid off in the long run: many redemptioners later became landowning farmers in Pennsylvania, which is why the migration continued despite warnings like his.

### Connecting the four sources
- **Change:** In the early 1600s, bound labor in English colonies meant mostly **English** servants in the Chesapeake (Frethorne). By the 1700s, servitude survived mainly among **European immigrants to the Middle Colonies** (Mittelberger), while the Chesapeake had turned to enslaved Africans.
- **Continuity:** Across 150 years, colonies needed labor more than anything, and they paid for it with **land, passage and promises**, from Smith's work rule to Maryland's toleration to Pennsylvania's redemptioner market.
      `
    },
    {
      id: 'apushcol3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯

> "...no person or persons whatsoever within this province... professing to believe in Jesus Christ, shall from henceforth be any ways troubled, molested or discountenanced for or in respect of his or her religion..."
>
> — Maryland, "An Act Concerning Religion," 1649
      `,
      exercise: {
        questions: [
          {
            question: 'The excerpt is best understood in the context of which of the following?',
            options: [
              'A Quaker assembly applying its belief in an inner light shared by every human being',
              'A royal governor enforcing the Church of England on every settler in the Chesapeake',
              'A Catholic proprietor governing a colony whose Protestant settlers outnumbered Catholics',
              'A Puritan legislature expelling dissenters who questioned the authority of ministers'
            ],
            correctAnswer: 2,
            explanation: 'Lord Baltimore was Catholic, but Protestants were the majority in Maryland, so protecting all Christians shielded the Catholic minority. Quaker Pennsylvania came later, and the act did the opposite of enforcing a single church or expelling dissenters.'
          },
          {
            question: 'Which of the following most directly limited the toleration described in the excerpt?',
            options: [
              'Its protection covered Catholics in Maryland but excluded Protestant settlers',
              'Its protection extended only to people who professed belief in Jesus Christ',
              'Its protection was vetoed by the king before the assembly could enforce it',
              'Its protection applied only in towns that had built an Anglican church'
            ],
            correctAnswer: 1,
            explanation: 'The act protected only Christians and even prescribed death for denying the Trinity, so its toleration had firm limits. It covered Protestants and Catholics alike, and it was later suspended by Protestant rebels, not vetoed by the king.'
          },
          {
            question: 'Mittelberger\'s account and Frethorne\'s letter together best support which conclusion?',
            options: [
              'Bound labor stayed central to colonial growth though its sources shifted over time',
              'Bound labor ended in the colonies once tobacco prices fell in the late seventeenth century',
              'Bound labor attracted mostly wealthy migrants hoping to buy plantations on arrival',
              'Bound labor was confined to the Chesapeake and never spread to the Middle Colonies'
            ],
            correctAnswer: 0,
            explanation: 'Frethorne served in 1620s Virginia and Mittelberger saw Germans sold into service in 1750s Pennsylvania, so bound labor persisted while its main source and region changed. The redemptioner trade disproves the claims that it ended or stayed in the Chesapeake, and servants were poor, not wealthy.'
          }
        ]
      }
    }
  ]
}
