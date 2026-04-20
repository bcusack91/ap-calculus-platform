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
            explanation: 'Social Darwinism took Darwin\'s biological theory of natural selection and misapplied it to human societies, arguing that European global dominance proved their racial and cultural superiority. This pseudoscientific ideology was used to justify exploitation, forced labor, and cultural destruction as "natural" and even beneficial.'
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
              'It established lasting peace between European colonial powers by clearly dividing their spheres of influence',
              'It drew arbitrary borders across Africa that ignored ethnic and cultural boundaries, creating the basis for ethnic conflicts that continue today',
              'It gave African leaders a voice in determining their own borders and governance structures',
              'It ended the slave trade across the African continent within five years of the conference'
            ],
            correctAnswer: 1,
            explanation: 'The Berlin Conference\'s arbitrary borders — drawn without any African participation — divided ethnic groups between multiple colonies and forced rival groups into single territories. When African nations gained independence in the 20th century, they inherited these artificial borders, contributing to ethnic conflicts, civil wars, and political instability that persist today.'
          },
          {
            question: 'Why is King Leopold II\'s Congo Free State considered one of the most extreme examples of imperial exploitation?',
            options: [
              'Leopold established a model democratic government that other colonial powers later adopted throughout Africa',
              'Leopold treated the Congo as his personal property, imposing forced labor for rubber extraction that resulted in an estimated 10 million deaths from brutality, starvation, and disease',
              'Leopold peacefully negotiated with Congolese leaders and established fair trade agreements for mineral rights',
              'Leopold\'s rule was brief and had minimal lasting impact on the Congo\'s population or economy'
            ],
            correctAnswer: 1,
            explanation: 'Leopold\'s Congo Free State (1885–1908) was run as a private commercial enterprise for his personal profit. The forced rubber collection system was enforced through terror — including the infamous practice of cutting off hands as punishment for failing to meet quotas. The resulting death toll of approximately 10 million made it one of the greatest atrocities of the imperial era.'
          }
        ]
      }
    }
  ]
};
