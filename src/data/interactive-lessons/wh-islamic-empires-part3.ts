export const whIslamicEmpiresPart3Data = {
  topicSlug: 'wh-islamic-empires',
  sections: [
    {
      id: 'whislami3-intro',
      type: 'text' as const,
      content: `
# 🕌 Islamic Empires (1450–1750)

**Part 3 of 7 — Ruling an Empire: Legitimacy and Administration**

---

| Section |
|---------|
| 📖 Four Tools of Imperial Rule |
| Ottoman Administration |
| Safavid and Mughal Administration |
| Monuments as Arguments |

> 🔑 **Key Concept:** Conquest wins territory; administration keeps it. CED Topic 3.2 asks you to explain how rulers **legitimized and consolidated** their power from 1450 to 1750. *Legitimize* means to convince subjects that the ruler has a right to rule. *Consolidate* means to make that rule secure and lasting.
`
    },
    {
      id: 'whislami3-tools',
      type: 'text' as const,
      content: `
## 📖 Four Tools of Imperial Rule

| Tool | Purpose | Ottoman | Safavid | Mughal |
|---|---|---|---|---|
| **Loyal elites and military professionals** | A ruling class that owes everything to the ruler | Devshirme recruits: Janissaries and officials | Ghulams under Abbas I | Mansabdars, ranked officers paid by the state |
| **Religious legitimacy** | A sacred reason to obey | Protector of Mecca and Medina; patron of Sunni law | Claimed descent from the Seventh Imam; Twelver Shi'a state | Akbar's *sulh-i kul* ("peace with all") |
| **Art and monumental architecture** | Visible proof of power and piety | Süleymaniye Mosque (1550–1557) | Naqsh-e Jahan Square in Isfahan | Taj Mahal (begun 1632) |
| **Revenue collection** | Money for armies and courts | Timar grants, later tax farming | Royal monopoly on silk exports | Land revenue collected through zamindars |

### Key Terms
- **Devshirme:** the levy of Christian boys, mostly from the Balkans, who were converted and trained for the army or the palace.
- **Mansabdar:** a Mughal officer holding a numbered rank (*mansab*) that set his pay and the cavalry he had to supply.
- **Jagir:** an assignment of land revenue used to pay a mansabdar. Jagirs were **rotated** so officers could not build local power bases.
- **Zamindar:** a hereditary local landholder who collected land revenue from peasants, passed it to the state and kept a share.
- **Tax farming:** the state sells the right to collect a tax to a private bidder, who pays in advance and keeps whatever extra he collects.
`
    },
    {
      id: 'whislami3-ottoman',
      type: 'text' as const,
      content: `
## Ottoman Administration

### A Slave Elite Built on Merit
Devshirme recruits were legally the sultan's slaves (*kul*), yet the most able rose to the top. **Sokollu Mehmed Pasha**, taken from Bosnia as a boy, served as grand vizier from 1565 to 1579. Because recruits had no noble family behind them, their loyalty ran to the sultan alone.

### Law: Sharia and Kanun
- **Sharia** (Islamic law) was administered by judges (*kadis*) trained in the Sunni Hanafi school.
- **Kanun** was the sultan's own administrative law on taxes, land and criminal penalties. Suleiman I's name in Turkish, *Kanuni*, means "the Lawgiver."

### From Timar to Tax Farm
In the 1500s, **sipahi** cavalry were paid with **timars**. As muskets made salaried infantry more important, the state needed **cash**, so in the 1600s it shifted toward **tax farming** (*iltizam*). Tax farming raised money quickly, but it also handed local wealth and power to tax farmers.

### A European Observer
> "In making appointments the Sultan pays no regard to any claims of wealth or rank... Those who hold the highest posts are very often the sons of shepherds or herdsmen. Among the Turks, honors and high positions are the rewards of ability and good service."
> — *Adapted from* Ogier Ghiselin de Busbecq, Habsburg ambassador to Suleiman I, *Turkish Letters* (written 1555–1562)

**Sourcing (HIPP):**
- **Historical situation:** the Habsburgs and Ottomans were rivals; Busbecq was negotiating a truce.
- **Intended audience:** educated Europeans at home.
- **Purpose:** in part, to criticize Europe's nobility, where office came by birth.
- **Point of view:** an outsider who admired Ottoman discipline while serving the enemy.

A historian would trust Busbecq's account of **how appointments worked** more than his praise, because the devshirme records support it.
`
    },
    {
      id: 'whislami3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Source Analysis: Busbecq** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Busbecq's observation that Ottoman officials were often \"the sons of shepherds\" is best explained by which practice?",
            options: [
              "The devshirme",
              "The millet courts",
              "Hereditary timars",
              "Tax farming"
            ],
            correctAnswer: 0,
            explanation: "The devshirme took boys from rural Christian families, so men of humble birth could rise to high office through palace training. Timars and tax farms rewarded people already in the system, and millet courts governed religious communities."
          },
          {
            question: "Which of the following most likely shaped Busbecq's purpose in praising Ottoman appointments?",
            options: [
              "His wish to criticize a European system that rewarded noble birth",
              "His duty to report Ottoman tax records to the Pope",
              "His conversion to Islam during his years at the Ottoman court",
              "His belief that the Habsburgs should copy the Safavid shahs"
            ],
            correctAnswer: 0,
            explanation: "Busbecq contrasted Ottoman merit with European birthright, so his praise doubles as a comment on his own society. He remained a Catholic Habsburg diplomat throughout."
          },
          {
            question: "Why did the Ottoman state shift from timars toward tax farming in the 1600s?",
            options: [
              "It needed cash to pay salaried musket infantry",
              "Islamic law banned grants of land to soldiers",
              "Sipahi cavalry demanded payment in silver coin",
              "European lenders required it as loan security"
            ],
            correctAnswer: 0,
            explanation: "Timars supported cavalry, but musket-armed infantry had to be paid in cash, and tax farming delivered cash up front. The change shows military technology reshaping how an empire collected revenue."
          }
        ]
      }
    },
    {
      id: 'whislami3-safavid-mughal',
      type: 'text' as const,
      content: `
## Safavid and Mughal Administration

### Safavid: A Shi'a State Built from Above
- **Sacred lineage:** the shahs claimed descent from **Musa al-Kazim**, the Seventh Imam. Ismail I also presented himself as a near-divine leader to his Qizilbash followers.
- **Building a clergy:** because Iran had few Twelver Shi'a scholars in 1501, the shahs **brought in scholars from Jabal Amil** in Lebanon and from Bahrain to staff courts and schools.
- **Abbas I's centralization:** he turned Qizilbash-held provinces into **crown lands**, used ghulams as governors, and controlled the export of **raw silk**.
- **New Julfa (1605):** Abbas resettled **Armenian merchants** beside Isfahan. Their trade networks stretched from Europe to India and earned the state silver.

### Mughal: Incorporating Hindu Elites
- **Mansabdari system:** under Akbar, every officer, whether Muslim or Hindu, held a numbered rank. Pay came in cash or as a rotating **jagir**.
- **Rajput alliances:** Akbar married Rajput princesses, beginning with the daughter of the ruler of Amber in 1562, and gave Rajput chiefs high ranks.
- **Revenue reform:** Akbar's finance minister **Todar Mal**, a Hindu, assessed land tax on measured fields and average yields over ten years.
- **Abolished the jizya (1564):** non-Muslims no longer paid the poll tax that Islamic law allowed states to levy on them.

### A Court Historian
In the *Akbarnama* (1590s), Akbar's court historian **Abu'l Fazl** presents the emperor as a ruler who stands above every sect. In his telling, *sulh-i kul* lets followers of all faiths live in peace under one just king. (This is a summary, not a quotation.)

Abu'l Fazl was Akbar's friend and official chronicler. His account shows **how Akbar wished to be seen**, which is itself evidence of how the emperor legitimized his rule.
`
    },
    {
      id: 'whislami3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Mughal jagirs were rotated among officers mainly in order to:",
            options: [
              "stop officers from building local power bases",
              "give peasants a vote on their local governor",
              "spread Islam evenly across the provinces",
              "let Hindu officers avoid paying the jizya"
            ],
            correctAnswer: 0,
            explanation: "An officer who held the same land revenue for life could turn it into a private power base. Rotating jagirs kept mansabdars dependent on the emperor, the same goal the devshirme served for the Ottomans."
          },
          {
            question: "Which Safavid policy best shows a ruler building religious legitimacy from above?",
            options: [
              "Bringing Shi'a scholars from Lebanon and Bahrain",
              "Resettling Armenian merchants near Isfahan",
              "Seizing Hormuz with English naval support",
              "Replacing Qizilbash chiefs with ghulam governors"
            ],
            correctAnswer: 0,
            explanation: "Importing Twelver scholars created the clergy needed to make Shi'a Islam the faith of the people, not just the dynasty. The other policies strengthened trade or military control rather than religious legitimacy."
          },
          {
            question: "Which statement best explains why Abu'l Fazl's account is useful evidence even though it flatters Akbar?",
            options: [
              "It shows the image of tolerance Akbar's court wanted to project",
              "It proves that every subject of Akbar accepted his religious views",
              "It records census figures on the empire's Hindu and Muslim population",
              "It was written by a Safavid envoy with no reason to praise Akbar"
            ],
            correctAnswer: 0,
            explanation: "A court chronicle reveals the ruler's chosen self-image, which is exactly what a question about legitimacy needs. It cannot prove that all subjects agreed, and Abu'l Fazl was Akbar's own historian, not a foreign envoy."
          }
        ]
      }
    },
    {
      id: 'whislami3-monuments',
      type: 'text' as const,
      content: `
## Monuments as Arguments

Each great building made a claim about the ruler who paid for it.

| Monument | Builder | The claim it made |
|---|---|---|
| **Süleymaniye Mosque**, Istanbul (1550–1557) | Suleiman I; architect **Mimar Sinan** | The sultan as the great patron of Sunni Islam, rivaling the Hagia Sophia |
| **Naqsh-e Jahan Square**, Isfahan (from 1598) | Abbas I | Mosque, palace and bazaar on one square: faith, throne and trade united under the shah |
| **Fatehpur Sikri** (1570s) | Akbar | A new capital blending Persian, Islamic and Indian styles, a picture of a mixed court |
| **Taj Mahal**, Agra (begun 1632) | Shah Jahan | A tomb for his wife Mumtaz Mahal that displayed Mughal wealth and refinement |

> 🔑 **AP Connection:** For an SAQ asking how a ruler legitimized power, a monument is strong evidence when you **name the claim it made**. "Shah Jahan built the Taj Mahal" earns little. "Shah Jahan's Taj Mahal displayed wealth and Islamic piety on a scale that advertised Mughal power" explains.
`
    },
    {
      id: 'whislami3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Method** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ottoman sultans fund the Süleymaniye Mosque. This is legitimacy through ___',
            options: ['Monumental architecture', 'Loyal military elites', 'Revenue collection', 'Religious toleration']
          },
          {
            label: 'Mughal zamindars collect land revenue and keep a share. This is a method of ___',
            options: ['Revenue collection', 'Monumental architecture', 'Loyal military elites', 'Religious toleration']
          },
          {
            label: 'Abbas I builds a corps of ghulams loyal only to him. This is a method of building ___',
            options: ['Loyal military elites', 'Revenue collection', 'Monumental architecture', 'Religious toleration']
          }
        ],
        correctAnswers: ['Monumental architecture', 'Revenue collection', 'Loyal military elites'],
        hint1: 'Think about what a giant mosque shows to people who see it.',
        hint2: 'Zamindars handled money from the land.',
        hint3: 'Ghulams were soldiers who depended on the shah alone.',
        explanation: 'A great mosque is monumental architecture that displays piety and power. Zamindars were part of the Mughal revenue system. Ghulams, like the Janissaries, were a military elite tied to the ruler.'
      }
    }
  ]
}
