export const whAmericasAfrica1200Part2Data = {
  topicSlug: 'wh-americas-africa-1200',
  sections: [
    {
      id: 'whaaf2-intro',
      type: 'text' as const,
      content: `
# 🌎 Americas & Africa (c. 1200–1450)

**Part 2 of 7 — The Aztec (Mexica) Empire**

---

> 🔑 **Key Concept:** The Aztec Empire (c. 1345-1521) was a tributary empire in Mesoamerica that controlled central Mexico through military conquest and tribute extraction. AP questions focus on how the Aztecs organized their empire, their religious practices, and the factors that enabled Spanish conquest.
      `
    },
    {
      id: 'whaaf2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The Aztec tributary system was distinct from direct colonial rule because:',
            options: [
              'Conquered peoples maintained their own rulers and paid tribute to Tenochtitlan rather than being directly administered by Aztec officials, reducing governance costs while extracting wealth',
              'The Aztec Empire directly administered all territory',
              'No tribute was extracted from conquered peoples',
              'Conquered peoples became full Aztec citizens with equal rights',
            ],
            correctAnswer: 0,
            explanation: 'The tributary model reduced administrative costs but had a key vulnerability: conquered peoples who resented tribute demands were potential allies for external enemies — a fact Hernán Cortés exploited by allying with the Tlaxcalans in 1519.'
          },
          {
            question: 'Tenochtitlan (the Aztec capital) was remarkable primarily because:',
            options: [
              'Built on an island in Lake Texcoco, it housed 200,000+ people and was connected to the mainland by causeways — larger than any contemporary European city, with sophisticated urban infrastructure',
              'It was the largest city in pre-Columbian North America with no urban infrastructure',
              'It was a nomadic camp that moved seasonally',
              'It had a larger population than all of Europe combined',
            ],
            correctAnswer: 0,
            explanation: 'Tenochtitlan\'s urban sophistication was comparable to contemporary European capitals: floating garden agriculture (chinampas), aqueducts, markets (tianguis), temples, palaces. Spanish conquistadors described it with awe. Its island location made it easily defended but also ultimately a trap during the 1521 siege.'
          }
        ]
      }
    },
    {
      id: 'whaaf2-content',
      type: 'text' as const,
      content: `
## 📖 The Aztec Empire

> **Political Organization**

| Feature | Details |
|---------|---------|
| **Capital** | Tenochtitlan (modern Mexico City); built on island in Lake Texcoco |
| **Founded** | c. 1345; Triple Alliance formed 1428 (Mexica + Texcoco + Tlacopan) |
| **Governance** | Tributary system — conquered peoples paid tribute; kept local rulers |
| **Agriculture** | Chinampas (floating gardens) in Lake Texcoco; intensive maize cultivation |
| **Trade** | Pochteca (long-distance merchant class); markets in Tlatelolco |

> **Religion and Human Sacrifice**

Aztec religion centered on maintaining cosmic order through blood sacrifice:

- Sun god Huitzilopochtli required human blood to rise each day
- Scale of sacrifice was extraordinary: Templo Mayor dedication (1487) may have involved thousands of sacrificial victims
- Victims primarily were prisoners of war — creating incentive for "Flower Wars" (ritual wars designed to capture rather than kill enemies)
- AP note: Human sacrifice was real and significant, but should be contextualized — Aztec religion was sophisticated, with complex cosmology and calendrical systems

> **Factors Enabling Spanish Conquest (1521)**

Why did ~500 Spaniards conquer an empire of millions?

1. **Indigenous allies:** Tlaxcalans and other tribute-resentful peoples allied with Cortés
2. **Disease:** Smallpox epidemic 1520 killed enormous numbers including Aztec emperor Cuitláhuac
3. **Technology:** Spanish horses, steel armor, and firearms gave significant tactical advantage
4. **Psychological disruption:** Cortés\'s capture of Moctezuma II paralyzed decision-making
5. **Siege warfare:** Final siege of Tenochtitlan 1521 cut off food and water supplies

> **AP Comparison Anchor**

- **Aztec vs. Inca:** Both tributary empires; Inca had more direct administrative control (mit\'a system, road network); Aztec relied more on tribute with local rulers intact
- **Both fell to Spanish:** Similar factors — disease, indigenous allies, European technology
      `
    },
    {
      id: 'whaaf2-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The Aztec "Flower Wars" (ritual wars to capture enemies for sacrifice) were significant because they:',
            options: [
              'Created a cycle where wars were fought to acquire sacrificial victims, which required more wars, while simultaneously training warriors — but at the political cost of keeping potential allies permanently hostile',
              'Were purely ceremonial with no actual violence',
              'Strengthened relationships between the Aztecs and their neighbors',
              'Were the primary method of territory expansion',
            ],
            correctAnswer: 0,
            explanation: 'The Flower War system was strategically counterproductive: it maintained permanent enmity with neighboring states (especially the Tlaxcalans, never conquered by the Aztecs despite centuries of warfare) who then became Cortés\'s most important allies. The religious system requiring ongoing sacrifice created the political conditions that enabled the empire\'s conquest.'
          },
          {
            question: 'Aztec chinampas (floating garden agriculture) demonstrated:',
            options: [
              'How pre-Columbian peoples adapted agricultural technology to challenging wetland environments, producing remarkable food yields that supported the large urban population of Tenochtitlan without depleting soil fertility',
              'That the Aztecs had no agricultural knowledge',
              'That floating gardens were only possible with European technology',
              'That Aztec agriculture was inferior to European farming in every respect',
            ],
            correctAnswer: 0,
            explanation: 'Chinampas were sophisticated agricultural engineering: raised beds in the lake, fertilized by lake sediment and human waste, continuously productive without the soil depletion that plagued European slash-and-burn agriculture. They represent indigenous technological achievement comparable to any contemporary civilization.'
          },
          {
            question: 'Smallpox\'s role in the Spanish conquest of the Aztec Empire demonstrates which AP concept?',
            options: [
              'That biological factors (disease) can decisively alter the outcomes of political and military conflicts — the 1520 epidemic killed more Aztec defenders than Spanish weapons and disrupted political leadership at the critical moment of the conquest',
              'That disease had no role in the Spanish conquest',
              'That the Spanish deliberately introduced smallpox as a weapon',
              'That epidemics only affect non-European populations',
            ],
            correctAnswer: 0,
            explanation: 'Smallpox arrived in 1520 during a Spanish retreat, killing Aztec emperor Cuitláhuac and devastating the population defending Tenochtitlan. The convergence of disease + indigenous allies + Spanish military technology + political disruption (Moctezuma\'s capture) created a perfect storm that overwhelmed an otherwise formidable empire. No single factor explains the conquest — AP rewards multi-causal analysis.'
          }
        ]
      }
    },
    {
      id: 'whaaf2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'The Aztec capital built on an island in Lake Texcoco, housing 200,000+ people, was ___',
            options: ['Tenochtitlan', 'Cuzco', 'Tlaxcala', 'Chichen Itza']
          },
          {
            label: 'The Aztec system of raised agricultural beds in lakes that produced high food yields was ___',
            options: ['Chinampas', 'Mit\'a', 'Slash-and-burn', 'Terrace farming']
          },
          {
            label: 'The Aztec ritual wars designed to capture enemies for sacrifice rather than kill them were called ___',
            options: ['Flower Wars', 'Holy Wars', 'Tributary Wars', 'Conquest Wars']
          }
        ],
        correctAnswers: ['Tenochtitlan', 'Chinampas', 'Flower Wars'],
        hint1: 'Aztec capital — island in Lake Texcoco — modern Mexico City',
        hint2: 'Floating gardens — intensive lake agriculture',
        hint3: 'Ritual warfare — capture for sacrifice — kept Tlaxcala hostile',
        explanation: 'Tenochtitlan\'s urban sophistication challenged European assumptions about non-European civilization. Chinampas demonstrate indigenous agricultural ingenuity. Flower Wars maintained the sacrificial system but at the political cost of permanent neighboring hostility — a strategic liability exploited by Cortés.'
      }
    },
    {
      id: 'whaaf2-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'An AP prompt asks: "What factors explain the Spanish conquest of the Aztec Empire?" Which answer best demonstrates historical complexity?',
            options: [
              'The conquest resulted from multiple intersecting factors — Spanish military technology, indigenous allies (Tlaxcalans resentful of Aztec tribute demands), disease (smallpox 1520), and Aztec political disruption — with no single factor sufficient alone: thousands of Tlaxcalan warriors were more decisive than the few hundred Spanish soldiers',
              'The conquest was inevitable because Aztec civilization was primitive',
              'Spanish weapons alone explain the conquest',
              'The Aztecs voluntarily surrendered without resistance',
            ],
            correctAnswer: 0,
            explanation: 'Multi-causal explanation with appropriate weighting is the AP standard. Noting that indigenous allies were numerically more important than Spanish soldiers directly challenges the "superior European technology" narrative while still acknowledging technology\'s role. This type of nuanced, multi-factor analysis with appropriate emphasis is what earns AP complexity points.'
          },
          {
            question: 'Comparing the Aztec and Inca empires, which statement is most historically accurate?',
            options: [
              'Both were large tributary empires that fell to Spanish conquest in the 1520s-1530s through similar combinations of indigenous allies, disease, and European technology, but the Inca had more direct administrative infrastructure (road network, mit\'a labor system, quipus for record-keeping) while the Aztec relied more heavily on tribute from semi-autonomous conquered states',
              'The two empires had identical governance systems',
              'The Inca were never conquered by Europeans',
              'The Aztec had more sophisticated administrative infrastructure than the Inca',
            ],
            correctAnswer: 0,
            explanation: 'This comparison earns AP points by identifying both similarity (tributary empires, similar conquest vulnerabilities) and meaningful difference (degree of administrative integration). The Inca road system and mit\'a labor draft represented more direct imperial control than the Aztec tributary model — a difference that affected both how each empire functioned and how Spanish conquest proceeded (Pizarro vs. Cortés used different strategies).'
          }
        ]
      }
    }
  ]
}
