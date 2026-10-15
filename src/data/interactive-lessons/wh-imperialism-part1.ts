export const whImperialismPart1Data = {
  topicSlug: 'wh-imperialism',
  sections: [
    {
      id: 'whimperi1-intro',
      type: 'text' as const,
      content: `
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
      `
    },
    {
      id: 'whimperi1-causes',
      type: 'text' as const,
      content: `
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
- Applied evolutionary ideas to **human societies** (Herbert Spencer coined "survival of the fittest" in 1864, after Darwin's *Origin of Species*, 1859) — claimed European dominance proved racial superiority
- Used to **justify** exploitation, forced labor, and cultural destruction
- This was **pseudoscience** — no biological basis for racial hierarchy

### Methods of Imperial Control

| Type | Description | Example |
|---|---|---|
| **Colony** | Direct rule by the imperial power | French Algeria, British India |
| **Protectorate** | Local rulers remain but under imperial "guidance" | British Egypt (occupied 1882; formal protectorate 1914) |
| **Sphere of influence** | Exclusive economic access without formal rule | European spheres in China |
| **Economic imperialism** | Control through economic dominance without formal political rule | British-owned railroads in Argentina |

> 🔑 **AP Connection:** The AP exam wants you to distinguish between **justifications** for imperialism (what Europeans said) and **actual motives** (what they wanted). The "civilizing mission" rhetoric masked economic exploitation.
      `
    },
    {
      id: 'whimperi1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which of the following BEST explains why the "new imperialism" of the late 1800s differed from earlier European colonialism?',
            options: [
              'Earlier colonialism sought land for settlers, while new imperialism avoided territorial control and relied on informal trade concessions in Asian ports',
              'New imperialism meant conquering and governing vast inland regions of Africa and Asia, driven by industrial demand for raw materials and enabled by new technology',
              'New imperialism was driven mainly by Catholic missionary orders seeking converts, while earlier colonialism was run by profit-seeking chartered companies',
              'New imperialism was led by Spain and Portugal reviving their old empires, while Britain and France largely withdrew from overseas expansion after 1850'
            ],
            correctAnswer: 1,
            explanation: 'The "new imperialism" of the late 1800s was driven by industrial needs (raw materials, markets) and enabled by technology (Maxim gun, steamship, quinine). Unlike earlier mercantile colonialism, which in Africa and Asia mostly meant coastal trading posts, new imperialism involved conquering and directly administering entire territories, as in the Scramble for Africa. Britain and France were its leading powers, not Spain and Portugal, and missionaries accompanied it but did not drive it.'
          },
          {
            question: 'How was Social Darwinism used to justify European imperialism?',
            options: [
              'It held that all peoples would evolve toward European civilization on their own, so colonial rule was unnecessary and should be ended gradually by negotiation',
              'It misapplied evolutionary ideas to rank human societies, claiming European dominance proved natural superiority and was therefore inevitable and beneficial',
              'It was a Christian missionary doctrine claiming that conversion, not conquest, was the only legitimate way for Europeans to influence African and Asian societies',
              'It argued that tropical climates rather than race determined development, so Europeans should rule only temperate lands and leave the tropics to local rulers'
            ],
            correctAnswer: 1,
            explanation: 'Social Darwinism applied ideas of natural selection to human societies. Herbert Spencer, its best-known theorist, coined the phrase "survival of the fittest" in 1864, five years after Darwin\'s Origin of Species. Its advocates argued that European global dominance proved racial and cultural superiority. This pseudoscientific ideology was used to justify exploitation, forced labor, and cultural destruction as "natural" and even beneficial.'
          }
        ]
      }
    },
    {
      id: 'whimperi1-africa',
      type: 'text' as const,
      content: `
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

> 🔑 **AP Connection:** Leopold's Congo is the AP exam\'s primary example of imperial **exploitation and brutality**. The Berlin Conference illustrates how European powers imposed arbitrary boundaries with devastating long-term consequences.
      `
    },
    {
      id: 'whimperi1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'What was the most significant long-term consequence of the Berlin Conference (1884–85)?',
            options: [
              'It established lasting peace among the colonial powers, since dividing Africa on paper removed every source of European rivalry there until decolonization',
              'It drew borders across Africa that ignored ethnic and political boundaries, leaving later independent states with divided peoples and internal tensions',
              'It gave African rulers formal seats in negotiating their borders, which is why colonial boundaries were widely accepted by African states after independence',
              'It created a single customs union for all of Africa, tying the continent\'s trade to one tariff system that Europeans kept until 1914'
            ],
            correctAnswer: 1,
            explanation: 'The Berlin Conference\'s borders, drawn without any African participation, divided ethnic groups between multiple colonies and forced rival groups into single territories. When African nations gained independence in the 20th century, they inherited these artificial borders, contributing to ethnic conflicts, civil wars, and political instability. European rivalry in Africa continued after Berlin (the Fashoda crisis of 1898, the Moroccan crises), and the conference\'s free-trade rules covered only the Congo basin.'
          },
          {
            question: 'Why is King Leopold II\'s Congo Free State considered one of the most extreme examples of imperial exploitation?',
            options: [
              'Leopold governed the Congo through an elected colonial assembly, though Belgian settlers dominated it and kept Congolese representation extremely limited',
              'Leopold ran the Congo as his personal property, enforcing rubber quotas through terror that contributed to millions of deaths from violence and famine',
              'Leopold\'s agents focused on diamond mining rather than rubber, so most deaths came from mine accidents rather than from deliberate colonial violence',
              'Leopold\'s rule was brief and thinly staffed, so its effects on the Congo\'s people were small compared with the later Belgian state colony'
            ],
            correctAnswer: 1,
            explanation: 'Leopold\'s Congo Free State (1885–1908) was run as a private commercial enterprise for his personal profit. The forced rubber collection system was enforced through terror, including the infamous practice of cutting off hands as punishment for failing to meet quotas. Violence, famine, and disease caused a population collapse often estimated at around 10 million, making it one of the greatest atrocities of the imperial era. International outrage forced Belgium to take the colony from Leopold in 1908.'
          }
        ]
      }
    }
  ]
};
