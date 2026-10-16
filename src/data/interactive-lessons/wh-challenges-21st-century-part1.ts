export const whChallenges21stCenturyPart1Data = {
  topicSlug: 'wh-challenges-21st-century',
  sections: [
    {
      id: 'whc1-intro',
      type: 'text' as const,
      content: `
# Challenges of the 21st Century

**Part 1 of 7 — Core Concepts**

---

| Section |
|---|
| The challenges a globalized world faced by 2001 |
| From Cold War threats to transnational threats |
| Climate change enters world politics (1988–1997) |
| When international cooperation worked |

> Key idea: The problems people now call "21st-century challenges" (epidemic disease, environmental damage, political violence by non-state groups, and backlash against globalization) all took shape in the 20th century. The AP exam tests them through developments up to 2001: the short-answer questions and the document-based question cover 1200 to 2001. This lesson traces where each challenge came from and how states, institutions and movements had responded by 2001.
      `
    },
    {
      id: 'whc1-content',
      type: 'text' as const,
      content: `
## The Challenge Set and Where the CED Puts It

| Challenge | What it means | CED home |
|---|---|---|
| **Disease** | Diseases of poverty persisted while new epidemics emerged, from the 1918 influenza to HIV/AIDS | Topic 9.2 |
| **Environmental change** | Deforestation, desertification, air pollution, competition for fresh water, and debate over climate change | Topic 9.3 |
| **Uneven economic integration** | Free-market policies and global trade produced winners and losers between and within regions | Topics 9.4, 9.7 |
| **Rights and reform** | Movements challenged inequality of race, class, gender and religion | Topic 9.5 |
| **Political violence by non-state groups** | Some movements used violence against civilians to pursue political aims (Shining Path, al-Qaeda) | Topic 8.7 |
| **Institutions** | The UN and its agencies, formed to keep peace and organize cooperation, were tested by all of the above | Topic 9.8 |

## From Cold War Threats to Transnational Threats

During the Cold War (1947–1991), the main danger was a **state-versus-state** nuclear standoff between two blocs. After 1991, many of the most serious threats were **transnational**: they crossed borders whatever any one government did.

| Cold War (1947–1991) | The 1990s to 2001 |
|---|---|
| Nuclear standoff between two superpower blocs | One superpower; threats from networks, disease and environmental change |
| Proxy wars fought by states and their clients | Ethnic wars and genocide inside states (Bosnia, Rwanda) |
| Pollution treated as a local or national problem | Ozone depletion and climate change recognized as planetary problems |
| Epidemics handled mainly by national health services | HIV/AIDS spreads worldwide and becomes a development crisis |

> **Al-Qaeda and 9/11:** Al-Qaeda, founded by Osama bin Laden in 1988, was a non-state network that attacked U.S. embassies in Kenya and Tanzania in 1998. On September 11, 2001, its hijackers crashed airliners into the World Trade Center and the Pentagon, killing nearly 3,000 people. In October 2001 the United States and its allies invaded Afghanistan, whose Taliban government had sheltered al-Qaeda, and toppled it by the end of the year. On the exam, 9/11 is the closing example of political violence by a non-state network, not the start of a separate unit.
      `
    },
    {
      id: 'whc1-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Transnational threats**`,
      exercise: {
        questions: [
          {
            question: 'Which statement best explains why historians call challenges such as epidemic disease and ozone depletion "transnational"?',
            options: [
              'They arose only inside single states and became global only when the UN sent peacekeepers to deal with them',
              'They crossed borders regardless of what any single government did, so no one state could solve them alone',
              'They affected only stateless areas such as the high seas, so they rarely touched life inside any country',
              'They were handled entirely by diplomats at the UN, with no role for scientists, activists or other networks'
            ],
            correctAnswer: 1,
            explanation: 'A transnational problem crosses borders independent of state control: viruses travel with people, and chemicals released in one country thin the ozone layer over all of them. The other options confine the problems to single states, empty spaces or formal diplomacy, which misses the point of the term.'
          },
          {
            question: 'Which comparison best describes the change in the main security threats between the Cold War and the 1990s?',
            options: [
              'Both periods centered on a nuclear standoff between two rival superpower blocs of roughly equal strength',
              'Cold War threats came from terrorist networks, while threats in the 1990s came from rival alliance systems',
              'A standoff between two state blocs gave way to threats from ethnic wars, disease and non-state networks',
              'Both periods centered on environmental dangers, with rivalry between states playing only a minor role'
            ],
            correctAnswer: 2,
            explanation: 'The bipolar nuclear standoff ended with the Soviet Union in 1991; the decade that followed was marked by wars and genocide inside states, the spread of HIV/AIDS, and attacks by networks such as al-Qaeda. The other options deny the change, reverse it, or ignore the military rivalry that dominated the Cold War.'
          }
        ]
      }
    },
    {
      id: 'whc1-climate',
      type: 'text' as const,
      content: `
## Climate Change Enters World Politics (1988–1997)

The CED's wording is precise: the release of greenhouse gases and pollutants "contributed to debates about the nature and causes of climate change" (KC-6.1.II.B). Between 1988 and 1997 those debates moved from scientific journals into international treaties.

| Year | Event | Significance |
|---|---|---|
| 1988 | NASA scientist James Hansen tells the U.S. Senate that global warming has begun and is linked to human activity | Brings the issue to public and political attention |
| 1988 | The UN creates the **Intergovernmental Panel on Climate Change (IPCC)** | A body of scientists that assesses climate research for governments |
| 1992 | The **Earth Summit** in Rio de Janeiro adopts the UN Framework Convention on Climate Change | The first global climate treaty, though without binding limits |
| 1997 | The **Kyoto Protocol** | The first binding emissions limits, for developed countries only; the United States signed but never ratified it |

> **Why Kyoto mattered and why it was weak:** Kyoto set legally binding targets, which no earlier agreement had done. But it exempted developing countries, including fast-growing China and India, and the largest emitter of the 1990s, the United States, never ratified it. Both facts show the central problem: every country's emissions warm the whole planet, but each government bears the cost of its own cuts.
      `
    },
    {
      id: 'whc1-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — Climate and cooperation**`,
      exercise: {
        questions: [
          {
            prompt: 'The 1997 treaty that set the first binding greenhouse-gas limits, for developed countries only.',
            answer: 'Kyoto Protocol',
            acceptableAnswers: ['Kyoto Protocol', 'Kyoto', 'the Kyoto Protocol'],
            hint: 'Named after the Japanese city where it was adopted.'
          },
          {
            prompt: 'The UN scientific body created in 1988 to assess climate research for governments (initials: IPCC).',
            answer: 'Intergovernmental Panel on Climate Change',
            acceptableAnswers: ['Intergovernmental Panel on Climate Change', 'IPCC'],
            hint: 'Its reports summarize what scientists know about climate change.'
          },
          {
            prompt: 'The 1987 agreement that phased out the chemicals destroying the ozone layer.',
            answer: 'Montreal Protocol',
            acceptableAnswers: ['Montreal Protocol', 'Montreal', 'the Montreal Protocol'],
            hint: 'Named after a Canadian city; it targeted CFCs.'
          }
        ]
      }
    },
    {
      id: 'whc1-cooperation',
      type: 'text' as const,
      content: `
## When International Cooperation Worked

The record before 2001 was mixed, and the AP exam rewards students who can explain why cooperation succeeded on some problems and lagged on others.

| Case | Outcome | Why it worked or lagged |
|---|---|---|
| **Smallpox eradication** | A WHO vaccination campaign ended the disease; the WHO declared it eradicated in 1980 | One clear target, an effective vaccine, and support from both Cold War blocs |
| **Montreal Protocol (1987)** | Ozone-depleting chemicals (CFCs) were phased out worldwide | Substitutes existed, a few firms made most CFCs, and rich countries helped poorer ones switch |
| **Climate change (1992–1997)** | Rio and Kyoto produced frameworks, but global emissions kept rising | Fossil fuels powered whole economies, the costs of cutting fell on each country, and the largest emitter stayed out |

- **Key takeaway:** Cooperation worked when the problem was narrow, a solution was cheap, and every major state took part. Climate change was the opposite on all three counts, which is why the CED frames it as a subject of "debates."
      `
    },
    {
      id: 'whc1-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Explaining cooperation**`,
      exercise: {
        questions: [
          {
            question: 'Which response best explains why limiting greenhouse gases proved harder than earlier efforts at international cooperation?',
            options: [
              'Climate change affected only the countries that burned the most coal, so other governments had no reason to join any agreement on emissions',
              'Every country\'s emissions warmed the whole planet, but each government bore the cost of its own cuts and was tempted to let others act first',
              'The largest emitter could have solved the problem alone, so other countries saw no need for a treaty with binding limits on their emissions',
              'Scientists had not yet linked greenhouse gases to warming by the 1990s, so governments had no evidence on which to base an agreement'
            ],
            correctAnswer: 1,
            explanation: 'Climate change is a collective action problem: the harm is shared by everyone while the cost of cutting emissions falls on each country, so each is tempted to free-ride. The other options misstate who is affected, overstate what one country could do, or ignore the 1988 Hansen testimony and the IPCC.'
          },
          {
            question: 'Why did the 1987 Montreal Protocol succeed while climate negotiations in the 1990s lagged?',
            options: [
              'Ozone damage harmed only the countries that made CFCs, so those countries acted alone without a treaty',
              'Substitutes for CFCs existed and a few firms made most CFCs, but fossil fuels powered entire economies',
              'Climate change had not yet been noticed by any scientist or government before the year 2000',
              'The Montreal Protocol was enforced by UN troops, while the climate talks had no UN involvement'
            ],
            correctAnswer: 1,
            explanation: 'Substitutes for CFCs existed and a handful of companies produced most CFCs, so phasing them out was manageable; cutting fossil fuels meant changing how whole economies ran. Ozone damage was global, the IPCC had studied climate since 1988, and no troops enforced either agreement.'
          }
        ]
      }
    }
  ]
}
