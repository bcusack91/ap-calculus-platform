export const whChallenges21stCenturyPart3Data = {
  topicSlug: 'wh-challenges-21st-century',
  sections: [
    {
      id: 'whc3-intro',
      type: 'text' as const,
      content: `
# Challenges of the 21st Century

**Part 3 of 7 — Patterns & Examples**

---

| Section |
|---|
| The 1918 influenza pandemic |
| HIV/AIDS from 1981 to 2001 |
| Medical victories: vaccines, antibiotics and smallpox |
| Old killers that persisted: malaria, tuberculosis, cholera |

> Key idea: AP prompts on disease reward concrete, well-dated cases tied to the CED's pattern: "Diseases associated with poverty persisted while other diseases emerged as new epidemics and threats to human populations, in some cases leading to social disruption. These outbreaks spurred technological and medical advances" (KC-6.1.III.A). Learn one case for each half of that sentence.
      `
    },
    {
      id: 'whc3-content',
      type: 'text' as const,
      content: `
## The 1918 Influenza Pandemic

| Feature | Detail |
|---|---|
| When | 1918–1919, in several waves, at the end of World War I |
| Spread | Troop movements, crowded camps and wartime shipping carried it to every inhabited continent |
| Toll | Estimates commonly run from about 20 to 50 million deaths, more than the war itself; some estimates are higher |
| Who died | Unusually, many healthy young adults as well as the very young and old |
| Disruption | Closed schools, theaters and churches; overwhelmed hospitals; labor shortages |
| Medical response | No vaccine or antiviral drugs existed; the shock pushed governments toward public-health agencies and virus research |

## HIV/AIDS, 1981–2001

| Year | Development |
|---|---|
| 1981 | Doctors in the United States describe the first cases of what became known as AIDS |
| 1983–84 | Scientists identify the virus later named HIV |
| 1980s–1990s | The epidemic spreads worldwide; sub-Saharan Africa is hit hardest, with millions of deaths and orphans |
| 1987 | AZT becomes the first approved drug against HIV |
| 1996 | Combination antiretroviral therapy sharply cuts deaths in wealthy countries; UNAIDS, set up by the UN in 1994, begins operating |
| 2001 | A UN General Assembly special session commits states to fight the epidemic; treatment remains out of reach for most patients in poor countries |

> **Social disruption:** In the hardest-hit African countries, AIDS killed adults in their working and parenting years, lowered life expectancy, and left millions of orphans. Activist groups such as ACT UP in the United States and the Treatment Action Campaign in South Africa (1998) pressed governments and drug companies for faster research and cheaper treatment.
      `
    },
    {
      id: 'whc3-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Two epidemics**`,
      exercise: {
        questions: [
          {
            question: 'A historian compares the 1918 influenza pandemic with the HIV/AIDS epidemic. Which similarity best supports an argument about continuity?',
            options: [
              'Both traveled along the routes that connected regions and caused major social disruption',
              'Both were stopped within months by vaccines that had already been developed and stockpiled',
              'Both stayed confined to wealthy industrial nations and spared poorer regions of the world',
              'Each moved mainly along overland caravan routes rather than by ship, rail or aircraft'
            ],
            correctAnswer: 0,
            explanation: 'Each epidemic traveled along the connections of its time, troop ships in 1918 and air travel and migration in the 1980s, and each disrupted societies. Neither had a vaccine, both struck poor regions hard, and neither depended on caravan routes.'
          },
          {
            question: 'Which development of 1996 most changed the course of the HIV/AIDS epidemic in wealthy countries?',
            options: [
              'A vaccine that prevented infection',
              'The eradication of the virus by the WHO',
              'Combination antiretroviral drug therapy',
              'A worldwide ban on international air travel'
            ],
            correctAnswer: 2,
            explanation: 'Combination antiretroviral therapy turned HIV infection from a near-certain death sentence into a manageable condition for patients who could afford it. No HIV vaccine existed, the virus was never eradicated, and air travel was never banned.'
          }
        ]
      }
    },
    {
      id: 'whc3-medicine',
      type: 'text' as const,
      content: `
## Medical Victories

KC-6.1.I.C: "Medical innovations, including vaccines and antibiotics, increased the ability of humans to survive and live longer lives."

| Advance | Date | Effect |
|---|---|---|
| Penicillin | Discovered 1928; mass-produced in the 1940s | The first widely used antibiotic; cut deaths from infected wounds and pneumonia |
| Polio vaccine | 1955 (Jonas Salk) | Polio cases fell sharply wherever children were vaccinated |
| Oral rehydration therapy | Widely adopted from the 1970s | A cheap salt-and-sugar solution that saved millions of children from cholera and diarrhea |
| Smallpox eradication | WHO campaign from 1967; eradication declared 1980 | The first human disease wiped out worldwide |

## Old Killers That Persisted

| Disease | Why it persisted |
|---|---|
| **Malaria** | Mosquitoes developed resistance to DDT and parasites to drugs; the disease stayed concentrated in poor tropical regions, especially sub-Saharan Africa |
| **Tuberculosis** | Curable with antibiotics, yet it returned in the 1980s–90s with poverty, drug resistance, and HIV, which weakens the immune system |
| **Cholera** | Spreads through unsafe water; a pandemic that began in Indonesia in 1961 reached Latin America in 1991 |
      `
    },
    {
      id: 'whc3-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — Disease and medicine**`,
      exercise: {
        questions: [
          {
            prompt: 'The UN agency that led the campaign declared to have eradicated smallpox in 1980 (initials: WHO).',
            answer: 'World Health Organization',
            acceptableAnswers: ['World Health Organization', 'WHO', 'the World Health Organization'],
            hint: 'A UN specialized agency founded in 1948 and based in Geneva.'
          },
          {
            prompt: 'The first widely used antibiotic, discovered in 1928 and mass-produced during World War II.',
            answer: 'penicillin',
            acceptableAnswers: ['penicillin', 'Penicillin'],
            hint: 'Alexander Fleming noticed it in a mold.'
          },
          {
            prompt: 'The water-borne disease whose pandemic, beginning in 1961, reached Latin America in 1991.',
            answer: 'cholera',
            acceptableAnswers: ['cholera', 'Cholera'],
            hint: 'One of the CED\'s diseases associated with poverty.'
          }
        ]
      }
    },
    {
      id: 'whc3-pattern',
      type: 'text' as const,
      content: `
## The Pattern in One Paragraph

Between 1900 and 2001, vaccines and antibiotics let far more people survive childhood and live longer, and one disease, smallpox, was eliminated. But medicine did not end the threat of disease. New epidemics such as the 1918 influenza and HIV/AIDS spread along the connections of a more integrated world, while malaria, tuberculosis and cholera persisted wherever poverty kept people from clean water and health care.

- **Key takeaway:** For a continuity-and-change prompt, pair a change (vaccines, antibiotics, smallpox eradication) with a continuity (new epidemics keep emerging; diseases of poverty persist). That pairing is exactly how the CED frames Topic 9.2.
      `
    },
    {
      id: 'whc3-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Using evidence**`,
      exercise: {
        questions: [
          {
            question: 'Which evidence would most weaken the claim that twentieth-century medicine had conquered epidemic disease?',
            options: [
              'The WHO declared smallpox eradicated in 1980 after a worldwide vaccination campaign',
              'Penicillin was mass-produced in the 1940s and cut deaths from infected wounds',
              'HIV/AIDS emerged in the 1980s and killed millions despite vaccines and antibiotics',
              'Polio cases fell sharply after Jonas Salk\'s vaccine was introduced in 1955'
            ],
            correctAnswer: 2,
            explanation: 'HIV/AIDS appeared after vaccines and antibiotics had transformed medicine, yet it spread worldwide and killed millions, so it undercuts the claim. Smallpox eradication, penicillin and the polio vaccine are evidence of medical success and would support the claim instead.'
          },
          {
            question: 'Tuberculosis was curable with antibiotics by the 1950s, yet it returned in many regions in the 1980s and 1990s. Which explanation is best supported by the evidence?',
            options: [
              'Antibiotics were banned worldwide after 1980',
              'Tuberculosis was a new disease first seen in 1981',
              'Only wealthy countries were affected by its return',
              'Poverty, drug resistance and HIV infection all helped it spread'
            ],
            correctAnswer: 3,
            explanation: 'Tuberculosis came back where poverty limited treatment, where incomplete treatment bred drug-resistant strains, and where HIV weakened immune systems. Antibiotics were never banned, tuberculosis is an ancient disease, and its return hit poor regions hardest.'
          }
        ]
      }
    }
  ]
}
