const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src/data/interactive-lessons');

const files = [
{
  file: 'wh-revolutions-part1.ts',
  content: `export const whRevolutionsPart1Data = {
  topicSlug: 'wh-revolutions',
  sections: [
    {
      id: 'whrevolu1-intro',
      type: 'text' as const,
      content: \`
# ⚔️ Revolutions & Independence Movements

**Part 1 of 7 — Latin American & Nationalist Revolutions**

---

| Section |
|---------|
| 📖 Causes of Revolutionary Movements |
| Latin American Independence |
| Simón Bolívar & José de San Martín |
| Nationalism in Europe |

> 🔑 **Key Concept:** The AP exam connects Latin American independence movements to both the **Enlightenment** and the **Haitian Revolution**. You must understand how colonial social hierarchies (peninsulares, creoles, mestizos) shaped who led revolts and why.
      \`
    },
    {
      id: 'whrevolu1-causes',
      type: 'text' as const,
      content: \`
## 📖 Causes of Revolutionary Movements

### Why Did Latin America Revolt?

Multiple factors converged in the early 1800s:

| Factor | Explanation |
|---|---|
| **Enlightenment ideas** | Locke's natural rights and Rousseau's popular sovereignty inspired colonial elites |
| **American & French Revolutions** | Provided successful models of overthrowing imperial rule |
| **Haitian Revolution (1804)** | Proved that even enslaved people could win independence |
| **Napoleon's invasion of Spain (1808)** | Removed the Spanish king, creating a power vacuum in the colonies |
| **Colonial social hierarchy** | Creoles (American-born Spaniards) resented peninsulares (European-born) who held all top positions |

### The Colonial Social Hierarchy

| Group | Description | Political Power |
|---|---|---|
| **Peninsulares** | Born in Spain/Portugal | Held all top government positions |
| **Creoles** | European descent, born in the Americas | Wealthy landowners but excluded from power |
| **Mestizos/Mulattoes** | Mixed European-indigenous or European-African | Limited rights |
| **Indigenous & Enslaved Africans** | Majority of the population | No political power |

> 🔑 **AP Connection:** The **creoles** led most independence movements — they were wealthy and educated enough to organize revolts, but resentful of being excluded from political power by peninsulares.
      \`
    },
    {
      id: 'whrevolu1-quiz1',
      type: 'multiple-choice' as const,
      content: \`**Concept Check** 🎯\`,
      exercise: {
        questions: [
          {
            question: 'Which social group led most Latin American independence movements in the early 1800s?',
            options: [
              'Peninsulares — European-born Spaniards who held all colonial government positions',
              'Creoles — American-born people of European descent who were wealthy but excluded from political power',
              'Indigenous peoples who sought to restore pre-Columbian empires and political systems',
              'Enslaved Africans following the model of the Haitian Revolution'
            ],
            correctAnswer: 1,
            explanation: 'Creoles led most independence movements because they had the wealth, education, and social connections to organize revolts, but resented being excluded from top government positions (reserved for peninsulares). Simón Bolívar and José de San Martín were both creoles.'
          },
          {
            question: 'How did Napoleon\\'s invasion of Spain in 1808 contribute to Latin American independence movements?',
            options: [
              'Napoleon sent French armies to Latin America to enforce colonial control more strictly',
              'It removed the Spanish king from power, creating a legitimacy crisis and power vacuum that colonial leaders exploited',
              'Napoleon freed all enslaved people in Spanish colonies, inspiring loyalty to France',
              'It had no effect — Latin American independence movements began centuries earlier'
            ],
            correctAnswer: 1,
            explanation: 'When Napoleon deposed the Spanish king Ferdinand VII and placed his brother on the throne, colonists questioned whether they owed loyalty to a French-imposed ruler. This legitimacy crisis provided the opening for creole leaders to declare independence while claiming to act in the name of the rightful king.'
          }
        ]
      }
    },
    {
      id: 'whrevolu1-leaders',
      type: 'text' as const,
      content: \`
## 📖 Key Independence Leaders

### Simón Bolívar (1783–1830) — "The Liberator"
- Creole from Venezuela, educated in Europe, deeply influenced by Enlightenment
- Led independence of **Venezuela, Colombia, Ecuador, Peru, and Bolivia**
- Dreamed of a united South American republic (Gran Colombia) — ultimately failed due to regional rivalries
- Famous "Jamaica Letter" (1815) analyzed why Latin American unity was difficult

### José de San Martín (1778–1850)
- Argentine general who liberated **Argentina, Chile, and Peru**
- Famous crossing of the Andes Mountains (1817) to liberate Chile
- Met Bolívar in Guayaquil (1822) — ceded leadership and retired

### Mexico: Hidalgo & Morelos
- **Father Miguel Hidalgo** (1810) — priest who launched Mexico's independence with the "Grito de Dolores"; led a peasant/indigenous uprising; executed 1811
- **José María Morelos** — continued Hidalgo's movement; also executed
- **Agustín de Iturbide** (1821) — conservative creole who actually achieved Mexican independence with a coalition (Plan de Iguala)

### Brazil: A Unique Path
- **Peaceful independence** (1822) — when Portugal's king returned to Europe, his son **Pedro I** declared Brazil independent and became emperor
- No major war; preserved the monarchy until 1889

> 🔑 **AP Connection:** Compare Mexico's **bottom-up** revolution (starting with indigenous/peasant uprising under Hidalgo) with the **top-down** approach in South America (creole elites like Bolívar) and Brazil's **peaceful** transition. The AP exam tests why outcomes differed.
      \`
    },
    {
      id: 'whrevolu1-quiz2',
      type: 'multiple-choice' as const,
      content: \`**Check Your Understanding** 🎯\`,
      exercise: {
        questions: [
          {
            question: 'How did Brazil\\'s path to independence differ from most other Latin American nations?',
            options: [
              'Brazil achieved independence through a prolonged guerrilla war lasting over 20 years',
              'Brazil\\'s independence was relatively peaceful — the Portuguese prince declared independence and became emperor without a major war',
              'Brazil was the only Latin American nation to remain a colony until the 20th century',
              'Brazil\\'s independence was led by indigenous peoples rather than creole elites'
            ],
            correctAnswer: 1,
            explanation: 'Unlike the violent revolutions elsewhere in Latin America, Brazil\\'s independence was largely peaceful. When King João VI returned to Portugal in 1821, his son Pedro stayed in Brazil and declared independence in 1822, becoming Emperor Pedro I. Brazil remained a monarchy until 1889.'
          },
          {
            question: 'What was the main reason Bolívar\\'s dream of a united South American republic (Gran Colombia) failed?',
            options: [
              'Spain reconquered the territory immediately after Bolívar\\'s death in 1830',
              'Regional rivalries, geographic barriers, and competing interests among local elites led to fragmentation',
              'The United States invaded Gran Colombia to prevent a rival power from emerging',
              'Bolívar voluntarily dissolved the union to create smaller, more democratic nations'
            ],
            correctAnswer: 1,
            explanation: 'Gran Colombia (Venezuela, Colombia, Ecuador) dissolved due to regional rivalries, geographic distances, and competing interests among local creole elites who preferred governing their own territories. The Andes and Amazon created natural divisions, and local caudillos (strongmen) carved out independent power bases.'
          }
        ]
      }
    }
  ]
};\n`
},
{
  file: 'wh-industrial-revolution-part1.ts',
  content: `export const whIndustrialRevolutionPart1Data = {
  topicSlug: 'wh-industrial-revolution',
  sections: [
    {
      id: 'whindust1-intro',
      type: 'text' as const,
      content: \`
# 🏭 The Industrial Revolution

**Part 1 of 7 — Origins, Technology & Social Transformation**

---

| Section |
|---------|
| 📖 Why Britain First? |
| Key Inventions & Industries |
| Social Effects of Industrialization |
| Spread Beyond Britain |

> 🔑 **Key Concept:** The AP exam wants you to explain **why** industrialization began in Britain specifically, and how it transformed **social structures, labor patterns, and the global economy**. Don't just list inventions — focus on causes and consequences.
      \`
    },
    {
      id: 'whindust1-britain',
      type: 'text' as const,
      content: \`
## 📖 Why Did the Industrial Revolution Begin in Britain?

Several unique factors converged in late 18th-century Britain:

| Factor | Explanation |
|---|---|
| **Natural resources** | Abundant coal and iron ore; navigable rivers for transport |
| **Agricultural revolution** | Enclosure movement and crop rotation increased food supply → population growth → surplus labor |
| **Capital** | Profits from colonial trade and the Atlantic slave trade provided investment funds |
| **Stable government** | Constitutional monarchy protected property rights and encouraged innovation |
| **Geographic advantages** | Island nation with extensive coastline for trade; no internal tariff barriers |
| **Culture of innovation** | Royal Society promoted science; patent laws rewarded inventors |

### The Agricultural Revolution (Precondition)
- **Enclosure Acts** — common lands were fenced off by wealthy landowners for commercial farming
- **Impact:** More efficient agriculture BUT displaced small farmers, who migrated to cities seeking factory work
- **New techniques:** Jethro Tull's seed drill, crop rotation (turnips/clover), selective animal breeding

> 🔑 **AP Connection:** The AP exam emphasizes **causation** — the agricultural revolution created the surplus labor AND surplus food needed to sustain an industrial workforce. Enclosure was both productive and disruptive.
      \`
    },
    {
      id: 'whindust1-quiz1',
      type: 'multiple-choice' as const,
      content: \`**Concept Check** 🎯\`,
      exercise: {
        questions: [
          {
            question: 'Which factor is MOST important in explaining why the Industrial Revolution began in Britain rather than in China or the Ottoman Empire?',
            options: [
              'Britain had a larger population than any other country in the world by 1750',
              'A combination of abundant coal/iron, capital from colonial trade, agricultural surplus, and a government that protected property rights and innovation',
              'Britain was the only country in the world with access to navigable rivers for transportation',
              'British workers were inherently more skilled and educated than workers elsewhere in the world'
            ],
            correctAnswer: 1,
            explanation: 'No single factor explains Britain\\'s lead — it was the convergence of natural resources (coal, iron), investment capital (from colonial and slave trade profits), surplus labor (from agricultural enclosure), and institutional support (patent laws, property rights, stable government) that made Britain uniquely positioned for industrialization.'
          },
          {
            question: 'How did the enclosure movement contribute to industrialization in Britain?',
            options: [
              'It provided factory owners with free land to build manufacturing facilities in rural areas',
              'It displaced small farmers from common lands, creating a migrant labor force for urban factories while increasing agricultural output',
              'It prevented urbanization by keeping the entire population tied to agricultural work on enclosed lands',
              'It had no significant connection to industrialization and was purely an agricultural policy'
            ],
            correctAnswer: 1,
            explanation: 'Enclosure consolidated common lands into privately owned, commercially farmed plots. This increased agricultural efficiency (more food to feed growing cities) but displaced small farmers and landless laborers, who migrated to cities where they became the factory labor force that powered industrialization.'
          }
        ]
      }
    },
    {
      id: 'whindust1-tech',
      type: 'text' as const,
      content: \`
## 📖 Key Inventions & Industries

### Textile Industry (First to Industrialize)

| Invention | Inventor | Year | Impact |
|---|---|---|---|
| **Spinning Jenny** | James Hargreaves | 1764 | Multi-spindle spinning frame; increased thread output |
| **Water Frame** | Richard Arkwright | 1769 | Water-powered spinning machine; moved production to factories |
| **Power Loom** | Edmund Cartwright | 1785 | Mechanized weaving; completed the factory transition |
| **Cotton Gin** | Eli Whitney | 1793 | Made cotton processing efficient; **increased demand for enslaved labor** in the American South |

### Steam Power
- **James Watt** improved the steam engine (1769) → freed factories from waterpower locations
- Applied to **mining** (pumping water), **manufacturing** (powering machines), and **transport** (steam locomotives, steamships)
- **George Stephenson's Rocket** (1829) — first practical steam locomotive; Liverpool-Manchester Railway (1830)

### Iron & Steel
- **Henry Bessemer** (1856) — Bessemer process for cheap mass-produced steel
- Steel transformed construction (bridges, buildings, railways) and warfare

### Social Effects
- **Urbanization** — Manchester grew from 25,000 (1770) to 300,000+ (1850)
- **Factory system** — workers performed repetitive tasks on fixed schedules for wages (replacing artisan production)
- **Child labor** — children as young as 5 worked 12–16 hour days in mines and factories
- **New social classes** — industrial capitalists (factory owners) and the urban working class (proletariat)

> 🔑 **AP Connection:** The cotton gin is a key example of how technology in one region affected another — it made cotton profitable, which **intensified slavery** in the American South while fueling British textile factories.
      \`
    },
    {
      id: 'whindust1-quiz2',
      type: 'multiple-choice' as const,
      content: \`**Check Your Understanding** 🎯\`,
      exercise: {
        questions: [
          {
            question: 'How did the invention of the cotton gin (1793) paradoxically affect slavery in the American South?',
            options: [
              'It eliminated the need for enslaved labor by fully automating cotton production from planting to shipping',
              'It made cotton processing more efficient, dramatically increasing cotton\\'s profitability and therefore increasing demand for enslaved labor to grow more cotton',
              'It had no effect on slavery because cotton was not a major crop in the American South',
              'It directly caused the abolition of slavery by making manual labor economically unnecessary'
            ],
            correctAnswer: 1,
            explanation: 'The cotton gin removed seeds from cotton 50x faster than by hand, making short-staple cotton enormously profitable. This drove massive expansion of cotton plantations across the Deep South and dramatically increased demand for enslaved labor — the enslaved population roughly doubled between 1790 and 1830.'
          },
          {
            question: 'What was the most significant social consequence of factory-based industrialization in 19th-century Britain?',
            options: [
              'The disappearance of the upper class as factory owners replaced the aristocracy entirely',
              'Rapid urbanization, the emergence of a new industrial working class, and harsh labor conditions including widespread child labor',
              'The complete elimination of agriculture as all workers moved to factories within a single generation',
              'Universal access to education and healthcare provided by factory owners to all workers'
            ],
            correctAnswer: 1,
            explanation: 'Industrialization triggered massive urbanization (Manchester grew 12x in 80 years), created a new working class living in overcrowded conditions, and relied heavily on child labor. These conditions eventually sparked reform movements, labor unions, and new political ideologies like socialism and Marxism.'
          }
        ]
      }
    }
  ]
};\n`
},
{
  file: 'wh-consequences-industrialization-part1.ts',
  content: `export const whConsequencesIndustrializationPart1Data = {
  topicSlug: 'wh-consequences-industrialization',
  sections: [
    {
      id: 'whconseq1-intro',
      type: 'text' as const,
      content: \`
# 📊 Consequences of Industrialization

**Part 1 of 7 — Social Change, Reform & New Ideologies**

---

| Section |
|---------|
| 📖 Working Conditions & Reform |
| New Political Ideologies |
| Women & Industrial Society |
| Environmental Consequences |

> 🔑 **Key Concept:** The AP exam heavily tests the **social and political responses** to industrialization — including labor movements, new ideologies (socialism, Marxism, liberalism), women's rights movements, and government reform efforts.
      \`
    },
    {
      id: 'whconseq1-conditions',
      type: 'text' as const,
      content: \`
## 📖 Working Conditions & Reform Movements

### Factory & Mine Conditions
- **12–16 hour workdays**, 6 days a week — no weekends or holidays
- **Child labor** — children as young as 5 worked in mines (pulling coal carts) and factories (operating machines)
- **Dangerous machines** — no safety equipment; workers frequently injured or killed
- **Low wages** — barely enough to survive; entire families had to work
- **Urban slums** — overcrowded housing near factories with poor sanitation; cholera and typhus epidemics

### Reform Responses

| Reform | Details |
|---|---|
| **Factory Acts (Britain)** | 1833: banned factory work for children under 9; limited hours for children 9–13; required 2 hours of schooling |
| **Mines Act (1842)** | Banned women and children under 10 from working underground |
| **Ten Hours Act (1847)** | Limited workday to 10 hours for women and children |
| **Labor unions** | Workers organized collectively to demand better wages, shorter hours, safer conditions |
| **Chartist Movement** | British working-class political movement demanding universal male suffrage, secret ballot |

### Luddites (1811–1816)
- Workers who destroyed factory machines in protest — feared technology was eliminating their skilled artisan jobs
- Not "anti-technology" in general; specifically opposed to machines that replaced their livelihoods
- Suppressed by the British military; participants executed or transported to penal colonies

> 🔑 **AP Connection:** The AP exam tests how **different groups responded differently** to industrialization. Workers organized unions; intellectuals developed new ideologies; governments passed reforms. Be ready to give specific examples of each response.
      \`
    },
    {
      id: 'whconseq1-quiz1',
      type: 'multiple-choice' as const,
      content: \`**Concept Check** 🎯\`,
      exercise: {
        questions: [
          {
            question: 'Which of the following BEST describes the Luddite movement in early 19th-century Britain?',
            options: [
              'A philosophical society promoting scientific research and technological advancement for social progress',
              'Workers who destroyed factory machines to protest the loss of skilled artisan jobs to mechanized production',
              'Factory owners who lobbied Parliament for fewer regulations on child labor and working hours',
              'A religious revival movement that rejected all forms of modern technology on moral grounds'
            ],
            correctAnswer: 1,
            explanation: 'Luddites were skilled workers (particularly in textiles) who smashed machines that they believed were destroying their livelihoods. They weren\\'t opposed to all technology — they specifically targeted machines that replaced skilled labor with cheaper, unskilled factory work. The British government crushed the movement militarily.'
          },
          {
            question: 'What was the significance of the British Factory Act of 1833?',
            options: [
              'It completely abolished child labor in all industries across the British Empire',
              'It marked the beginning of government regulation of working conditions by banning factory work for children under 9 and limiting hours for older children',
              'It nationalized all factories and placed them under direct government ownership and management',
              'It guaranteed all factory workers a minimum wage equal to the national average income'
            ],
            correctAnswer: 1,
            explanation: 'The 1833 Factory Act was the first effective government intervention in working conditions. While limited (only applying to textile factories, with weak enforcement initially), it established the precedent that the government could regulate private industry to protect workers — opening the door to further reforms.'
          }
        ]
      }
    },
    {
      id: 'whconseq1-ideologies',
      type: 'text' as const,
      content: \`
## 📖 New Political Ideologies

Industrialization generated new ways of thinking about society, economics, and government:

### Key Ideologies

| Ideology | Key Ideas | Key Thinkers |
|---|---|---|
| **Liberalism** | Individual rights, free markets, limited government, constitutional rule | Adam Smith, John Stuart Mill |
| **Conservatism** | Traditional institutions (monarchy, church, aristocracy); caution about rapid change | Edmund Burke |
| **Socialism** | Workers should own the means of production; reduce inequality through collective ownership | Robert Owen, Charles Fourier |
| **Marxism** | History is class struggle; capitalism will be overthrown by proletarian revolution; classless communist society | Karl Marx, Friedrich Engels |
| **Anarchism** | Abolish all government; voluntary cooperation | Mikhail Bakunin |

### Karl Marx & Friedrich Engels
- Published *The Communist Manifesto* (1848) — "Workers of the world, unite!"
- Key concepts:
  - **Bourgeoisie** — capitalist class (factory owners) who own the means of production
  - **Proletariat** — working class who sell their labor
  - **Class struggle** — all of history is conflict between those who own and those who work
  - **Inevitable revolution** — capitalism would destroy itself through crises; workers would seize power
  - **Communist society** — no private property, no classes, no state

### Utopian Socialism
- **Robert Owen** — Welsh factory owner who created a model community at New Lanark (Scotland) with shorter hours, education, fair wages
- **Charles Fourier** — proposed cooperative communities called "phalanxes"
- Marx dismissed these as "utopian" because they relied on goodwill rather than structural change

> 🔑 **AP Connection:** The AP exam frequently asks you to **compare ideological responses** to industrialization. Liberalism favored the factory owners; socialism and Marxism favored the workers; conservatism resisted rapid change entirely.
      \`
    },
    {
      id: 'whconseq1-quiz2',
      type: 'multiple-choice' as const,
      content: \`**Check Your Understanding** 🎯\`,
      exercise: {
        questions: [
          {
            question: 'According to Karl Marx, what was the fundamental driving force of historical change?',
            options: [
              'Technological innovation and the gradual accumulation of scientific knowledge across generations',
              'Class struggle — the ongoing conflict between those who own the means of production and those who labor',
              'The decisions of individual political leaders and monarchs who shaped events through personal will',
              'Religious and cultural evolution as societies moved from polytheism to monotheism to secularism'
            ],
            correctAnswer: 1,
            explanation: 'Marx argued in The Communist Manifesto (1848) that "the history of all hitherto existing society is the history of class struggles." He saw every era defined by conflict between an owning class and a working class — feudal lords vs. serfs, then bourgeoisie vs. proletariat — and predicted that capitalism would ultimately be overthrown by proletarian revolution.'
          },
          {
            question: 'How did Robert Owen\\'s approach to improving workers\\' lives differ from Marx\\'s approach?',
            options: [
              'Owen believed violent revolution was necessary, while Marx favored gradual peaceful reform through Parliament',
              'Owen created model factory communities with better conditions as an example, while Marx argued that only structural revolution could change the system',
              'Owen opposed all forms of industrialization, while Marx believed capitalism was a necessary stage of progress',
              'Both Owen and Marx agreed on identical strategies for achieving a classless society'
            ],
            correctAnswer: 1,
            explanation: 'Owen was a "utopian socialist" who tried to prove that humane working conditions could be profitable — his New Lanark factory offered shorter hours, education, and fair wages. Marx dismissed this as naive, arguing that individual model communities couldn\\'t change the structural exploitation built into capitalism — only a proletarian revolution could.'
          }
        ]
      }
    }
  ]
};\n`
},
{
  file: 'wh-imperialism-part1.ts',
  content: `export const whImperialismPart1Data = {
  topicSlug: 'wh-imperialism',
  sections: [
    {
      id: 'whimperi1-intro',
      type: 'text' as const,
      content: \`
# 🌐 Imperialism (1750–1900)

**Part 1 of 7 — Motives, Methods & Impact**

---

| Section |
|---------|
| 📖 Causes of New Imperialism |
| Africa — The Scramble & Berlin Conference |
| Asia — British India & the Opium Wars |
| Resistance to Imperialism |

> 🔑 **Key Concept:** The AP exam distinguishes **old imperialism** (1500s–1700s: mercantile trading posts) from **new imperialism** (1800s: direct territorial conquest and administration). You must explain both the **motives** for and **resistance** to imperial expansion.
      \`
    },
    {
      id: 'whimperi1-causes',
      type: 'text' as const,
      content: \`
## 📖 Causes of New Imperialism

### Why Did Europeans Industrialize Conquest in the 1800s?

| Motive | Explanation |
|---|---|
| **Economic** | Need for raw materials (rubber, cotton, palm oil, minerals) and new markets for industrial goods |
| **Strategic** | Control of trade routes, naval bases, and resources to maintain power over rivals |
| **Technological** | Steamships, quinine (anti-malaria), Maxim gun, telegraph gave Europeans decisive military advantages |
| **Ideological** | "White Man's Burden" (Kipling); Social Darwinism; "civilizing mission"; Christian missionary zeal |
| **Nationalism** | Colonial empires became symbols of national prestige — competition among European powers |

### Social Darwinism & Racial Ideology
- Applied Darwin's "survival of the fittest" to **human societies** — claimed European dominance proved racial superiority
- Used to **justify** exploitation, forced labor, and cultural destruction
- This was **pseudoscience** — no biological basis for racial hierarchy

### Methods of Imperial Control

| Type | Description | Example |
|---|---|---|
| **Colony** | Direct rule by the imperial power | French Algeria, British India |
| **Protectorate** | Local rulers remain but under imperial "guidance" | British Egypt (after 1882) |
| **Sphere of influence** | Exclusive economic access without formal rule | European spheres in China |
| **Economic imperialism** | Control through economic dominance without formal political rule | British-owned railroads in Argentina |

> 🔑 **AP Connection:** The AP exam wants you to distinguish between **justifications** for imperialism (what Europeans said) and **actual motives** (what they wanted). The "civilizing mission" rhetoric masked economic exploitation.
      \`
    },
    {
      id: 'whimperi1-quiz1',
      type: 'multiple-choice' as const,
      content: \`**Concept Check** 🎯\`,
      exercise: {
        questions: [
          {
            question: 'Which of the following BEST explains why the "new imperialism" of the late 1800s differed from earlier European colonialism?',
            options: [
              'Earlier colonialism focused on the Americas, while new imperialism focused on Europe itself',
              'New imperialism involved direct territorial conquest and administration of vast regions in Africa and Asia, driven by industrial demand for raw materials and enabled by superior military technology',
              'Earlier colonialism was more brutal, while new imperialism was characterized by peaceful trade partnerships',
              'New imperialism was led by Asian and African powers conquering European territories'
            ],
            correctAnswer: 1,
            explanation: 'The "new imperialism" of the 1800s was driven by industrial needs (raw materials, markets) and enabled by technology (Maxim gun, steamship, quinine). Unlike earlier mercantile colonialism (trading posts), new imperialism involved conquering and directly administering entire territories — exemplified by the Scramble for Africa.'
          },
          {
            question: 'How was Social Darwinism used to justify European imperialism?',
            options: [
              'It argued that all races were equal, making colonialism unjustifiable on moral grounds',
              'It misapplied evolutionary theory to claim European civilizations were naturally superior, making their domination of "lesser" peoples inevitable and beneficial',
              'It promoted democratic values and encouraged colonized peoples to develop self-governance immediately',
              'It was a religious doctrine that required Christian nations to avoid all contact with non-Christian peoples'
            ],
            correctAnswer: 1,
            explanation: 'Social Darwinism took Darwin\\'s biological theory of natural selection and misapplied it to human societies, arguing that European global dominance proved their racial and cultural superiority. This pseudoscientific ideology was used to justify exploitation, forced labor, and cultural destruction as "natural" and even beneficial.'
          }
        ]
      }
    },
    {
      id: 'whimperi1-africa',
      type: 'text' as const,
      content: \`
## 📖 The Scramble for Africa

### Before the Scramble
- Before 1870, European presence in Africa was limited to coastal trading posts
- By 1914, **over 90% of Africa** was under European control
- Only **Ethiopia** and **Liberia** remained independent

### Berlin Conference (1884–1885)
- European powers met to **divide Africa** among themselves — **no African leaders were invited**
- Established rules for claiming African territory: "effective occupation" (you had to control it, not just claim it)
- Drew borders with **no regard for ethnic, linguistic, or cultural boundaries** — creating conflicts that persist today

### Key Colonial Powers in Africa

| Power | Territory | Key Features |
|---|---|---|
| **Britain** | Egypt, Sudan, South Africa, Nigeria, Kenya, Gold Coast | Cape-to-Cairo dream; Suez Canal control |
| **France** | West Africa, North Africa, Madagascar | Largest African territory by area |
| **Belgium** | Congo Free State | King Leopold II's personal colony; extreme brutality (forced rubber collection, hand amputations) |
| **Germany** | East Africa, Southwest Africa | Lost colonies after WWI |

### Leopold's Congo — A Case Study in Exploitation
- King Leopold II of Belgium claimed the Congo as his **personal property** (not a Belgian colony)
- Forced labor for rubber collection; failure to meet quotas punished by **cutting off hands**
- An estimated **10 million Congolese** died from murder, starvation, and disease under Leopold's rule
- International outcry (led by E.D. Morel and Roger Casement) eventually forced Belgium to take control from Leopold in 1908

> 🔑 **AP Connection:** Leopold's Congo is the AP exam's primary example of imperial **exploitation and brutality**. The Berlin Conference illustrates how European powers imposed arbitrary boundaries with devastating long-term consequences.
      \`
    },
    {
      id: 'whimperi1-quiz2',
      type: 'multiple-choice' as const,
      content: \`**Check Your Understanding** 🎯\`,
      exercise: {
        questions: [
          {
            question: 'What was the most significant long-term consequence of the Berlin Conference (1884–85)?',
            options: [
              'It established lasting peace between European colonial powers by clearly dividing their spheres of influence',
              'It drew arbitrary borders across Africa that ignored ethnic and cultural boundaries, creating the basis for ethnic conflicts that continue today',
              'It gave African leaders a voice in determining their own borders and governance structures',
              'It ended the slave trade across the African continent within five years of the conference'
            ],
            correctAnswer: 1,
            explanation: 'The Berlin Conference\\'s arbitrary borders — drawn without any African participation — divided ethnic groups between multiple colonies and forced rival groups into single territories. When African nations gained independence in the 20th century, they inherited these artificial borders, contributing to ethnic conflicts, civil wars, and political instability that persist today.'
          },
          {
            question: 'Why is King Leopold II\\'s Congo Free State considered one of the most extreme examples of imperial exploitation?',
            options: [
              'Leopold established a model democratic government that other colonial powers later adopted throughout Africa',
              'Leopold treated the Congo as his personal property, imposing forced labor for rubber extraction that resulted in an estimated 10 million deaths from brutality, starvation, and disease',
              'Leopold peacefully negotiated with Congolese leaders and established fair trade agreements for mineral rights',
              'Leopold\\'s rule was brief and had minimal lasting impact on the Congo\\'s population or economy'
            ],
            correctAnswer: 1,
            explanation: 'Leopold\\'s Congo Free State (1885–1908) was run as a private commercial enterprise for his personal profit. The forced rubber collection system was enforced through terror — including the infamous practice of cutting off hands as punishment for failing to meet quotas. The resulting death toll of approximately 10 million made it one of the greatest atrocities of the imperial era.'
          }
        ]
      }
    }
  ]
};\n`
},
{
  file: 'wh-reform-migration-part1.ts',
  content: `export const whReformMigrationPart1Data = {
  topicSlug: 'wh-reform-migration',
  sections: [
    {
      id: 'whreform1-intro',
      type: 'text' as const,
      content: \`
# 🌍 Reform, Migration & Global Movements

**Part 1 of 7 — Abolition, Suffrage & Mass Migration**

---

| Section |
|---------|
| 📖 Abolition of Slavery |
| Women's Suffrage Movements |
| Global Migration Patterns |
| Nationalist Movements |

> 🔑 **Key Concept:** The AP exam tests how industrialization and Enlightenment ideals drove **reform movements** (abolition, suffrage, labor rights) and **mass migration** patterns that reshaped global demographics in the 19th century.
      \`
    },
    {
      id: 'whreform1-abolition',
      type: 'text' as const,
      content: \`
## 📖 Abolition of Slavery & Serfdom

### Timeline of Abolition

| Year | Event |
|---|---|
| **1794** | French Revolution abolishes slavery (restored by Napoleon in 1802) |
| **1804** | Haiti — first nation founded by formerly enslaved people |
| **1807** | Britain bans the **slave trade** (not slavery itself) |
| **1833** | British Emancipation Act — slavery abolished throughout the British Empire |
| **1861** | Russia emancipates the serfs (Tsar Alexander II) |
| **1863** | U.S. Emancipation Proclamation (full abolition via 13th Amendment, 1865) |
| **1888** | **Brazil** — last Western Hemisphere nation to abolish slavery |

### Causes of Abolition
- **Enlightenment ideas** — natural rights philosophy undermined moral justification for slavery
- **Religious movements** — Quakers and Evangelical Christians led abolition campaigns (William Wilberforce in Britain)
- **Economic shift** — industrial capitalism needed free wage laborers and consumer markets, not enslaved workers
- **Slave resistance** — the Haitian Revolution demonstrated that slavery could be overthrown by force
- **Political pressure** — abolition societies organized public campaigns, petitions, and consumer boycotts (e.g., boycotting slave-produced sugar)

### After Abolition — New Coercive Systems
Abolition did not end exploitation. New labor systems replaced slavery:
- **Sharecropping** (U.S. South) — formerly enslaved people worked land in exchange for a share of crops, often trapped in debt
- **Indentured labor** — millions of Indian, Chinese, and Japanese workers contracted to work on plantations in the Caribbean, South Africa, Southeast Asia, and Pacific islands
- **Convict leasing** (U.S.) — imprisoned people (disproportionately Black) leased to private companies for forced labor

> 🔑 **AP Connection:** The AP exam tests **continuity and change** — slavery was abolished, but coercive labor systems persisted in new forms. Be ready to compare old and new forms of labor exploitation.
      \`
    },
    {
      id: 'whreform1-quiz1',
      type: 'multiple-choice' as const,
      content: \`**Concept Check** 🎯\`,
      exercise: {
        questions: [
          {
            question: 'Which of the following BEST illustrates the concept of "continuity and change" in labor systems after the abolition of slavery?',
            options: [
              'Formerly enslaved people immediately gained full economic equality and political rights after abolition in every country',
              'New coercive labor systems like sharecropping, indentured servitude, and convict leasing replaced slavery but maintained many exploitative features',
              'All forms of forced labor completely disappeared worldwide within a decade of Britain\\'s 1833 Emancipation Act',
              'Abolition was universally opposed and slavery was quickly reinstated in every nation that attempted to end it'
            ],
            correctAnswer: 1,
            explanation: 'While the formal institution of slavery was abolished, exploitative labor systems persisted. Sharecropping in the U.S. South trapped former slaves in debt cycles; indentured servants from India and China replaced enslaved workers on Caribbean plantations; convict leasing (predominantly targeting Black Americans) was forced labor under another name.'
          },
          {
            question: 'Which factor was LEAST significant in the abolition of the Atlantic slave trade?',
            options: [
              'Enlightenment philosophy asserting natural rights and human equality undermined slavery\\'s moral legitimacy',
              'Economic arguments that free wage labor was more productive than enslaved labor for industrial capitalism',
              'Voluntary decisions by West African kingdoms to stop participating in the slave trade for moral reasons',
              'The success of the Haitian Revolution proving that enslaved people could overthrow their enslavers by force'
            ],
            correctAnswer: 2,
            explanation: 'While some African leaders opposed the slave trade, many West African kingdoms (Dahomey, Asante) continued participating because it provided them with European goods and weapons. The primary drivers of abolition were European/American movements combining Enlightenment ideas, religious activism (Quakers), economic arguments, and enslaved peoples\\' own resistance.'
          }
        ]
      }
    },
    {
      id: 'whreform1-migration',
      type: 'text' as const,
      content: \`
## 📖 Global Migration Patterns (1750–1900)

Industrialization drove the **largest mass migration in human history** up to that point:

### Major Migration Flows

| Flow | Numbers | Push/Pull Factors |
|---|---|---|
| **Europe → Americas** | ~50 million (1800–1914) | Pushed by poverty, famine (Irish Potato Famine, 1845), religious persecution; pulled by land, jobs, freedom |
| **China → Southeast Asia, Americas** | ~2.5 million+ | Pushed by Taiping Rebellion, poverty; pulled by gold rushes, railroad construction |
| **India → Caribbean, E. Africa, Pacific** | ~1.5 million+ | Indentured labor replacing enslaved workers on sugar plantations |
| **Rural → Urban (within countries)** | Hundreds of millions | Agricultural mechanization pushed; factory jobs pulled |

### Impact of Migration
- **Cultural exchange** — Chinatowns, Little Italys, and ethnic enclaves formed in cities worldwide
- **Nativism** — hostility toward immigrants; Chinese Exclusion Act (U.S., 1882)
- **Diaspora communities** — maintained cultural ties to homelands while adapting to new societies
- **Demographic transformation** — the Americas, Australia, and New Zealand were fundamentally reshaped by European immigration

> 🔑 **AP Connection:** The AP exam connects migration to both **push factors** (famine, war, poverty) and **pull factors** (economic opportunity, religious freedom). You must also address how receiving societies **responded** — often with xenophobia and exclusionary laws.
      \`
    },
    {
      id: 'whreform1-quiz2',
      type: 'multiple-choice' as const,
      content: \`**Check Your Understanding** 🎯\`,
      exercise: {
        questions: [
          {
            question: 'What was the most significant "push factor" driving Irish migration to the United States in the 1840s–1850s?',
            options: [
              'The Irish government offered financial incentives for citizens to emigrate to the United States',
              'The Great Famine (1845–1852), caused by a potato blight that destroyed the primary food source for the Irish poor',
              'British colonial authorities forcibly deported Irish citizens to the Americas as punishment for political activity',
              'The discovery of gold in California attracted Irish miners who sought rapid wealth'
            ],
            correctAnswer: 1,
            explanation: 'The Great Famine (An Gorta Mór) killed approximately 1 million Irish people and drove another 1 million+ to emigrate — primarily to the United States. The potato blight destroyed the crop that the Irish poor depended on, while British land policies and grain exports exacerbated the crisis.'
          },
          {
            question: 'How did the system of indentured labor that emerged after abolition connect to global migration patterns?',
            options: [
              'Indentured labor had no connection to migration — all workers stayed in their home countries',
              'Millions of Indian, Chinese, and Japanese workers were contracted to work on plantations in the Caribbean, Africa, and Pacific islands, replacing formerly enslaved laborers',
              'Indentured labor exclusively moved workers from Africa to Europe for factory employment',
              'Indentured labor was identical to chattel slavery in every legal and practical aspect'
            ],
            correctAnswer: 1,
            explanation: 'After abolition, plantation owners recruited indentured workers — primarily from India and China — on multi-year contracts. Over 1.5 million Indians alone were sent to British colonies in the Caribbean (Trinidad, Guyana), East Africa, and the Pacific. While technically voluntary and temporary, conditions were often exploitative and workers had limited freedom.'
          }
        ]
      }
    }
  ]
};\n`
}
];

for (const f of files) {
  fs.writeFileSync(path.join(dir, f.file), f.content);
  console.log(`✅ Wrote ${f.file}`);
}
console.log(`\nDone: ${files.length} files written`);
