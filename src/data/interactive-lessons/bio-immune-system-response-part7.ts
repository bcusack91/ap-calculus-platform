export const bioImmuneSystemResponsePart7Data = {
  topicSlug: 'immune-system-response',
  sections: [
    {
      id: 'imm7-intro',
      type: 'text' as const,
      content: `
# 📊 AP Exam Practice: Immune System Problems

The AP Biology exam frequently tests your ability to **interpret graphs, analyze experimental data**, and **design experiments** related to the immune system. This section focuses on the types of questions you'll see on the exam.

### What You'll Practice
- Reading antibody concentration graphs
- Comparing primary and secondary immune responses
- Analyzing vaccine efficacy data
- Experimental design questions
      `
    },
    {
      id: 'imm7-graphs',
      type: 'text' as const,
      content: `
## Interpreting Antibody Concentration Graphs

A classic AP Biology figure shows antibody levels over time after antigen exposure:

### Typical Graph Features

| Time Period | What You See | Explanation |
|-------------|-------------|-------------|
| **Day 0** | First antigen exposure | Primary response begins |
| **Days 0–5** | Lag phase — low/no antibodies | B cells being activated, proliferating |
| **Days 5–14** | Rising IgM, then IgG | Plasma cells secreting antibodies; class switching occurs |
| **Days 14–21** | Peak, then decline | Short-lived plasma cells die; antibodies are degraded |
| **Day 28** | Second exposure to same antigen | Secondary response triggered |
| **Days 28–35** | Rapid, high IgG spike | Memory B cells rapidly become plasma cells |

### Key Graph Interpretations for the AP Exam
- **Higher peak** in secondary response → more memory cells available
- **Faster rise** in secondary response → memory cells need less activation time
- **IgG dominance** in secondary response → class switching already occurred
- **Different antigen (Antigen B) introduced at Day 28** → shows a NEW primary response (no cross-reactivity)

> 🔑 If the exam shows two antigens, the response to a new antigen always looks like a primary response — memory is antigen-specific.
      `
    },
    {
      id: 'imm7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A graph shows that after a second exposure to Antigen A, antibody levels rise faster and reach a higher peak than after the first exposure. This is best explained by:',
            options: [
              'The innate immune system responds more strongly the second time',
              'More memory B cells are available, enabling faster clonal expansion',
              'The pathogen becomes weaker upon re-exposure',
              'The complement system is more active during the second infection'
            ],
            correctAnswer: 1,
            explanation: 'The secondary immune response is faster and stronger because memory B cells generated during the primary response persist long-term. Upon re-exposure, they rapidly differentiate into plasma cells without the lengthy activation period required for naive B cells.'
          },
          {
            question: 'On the same graph, a new Antigen B is introduced at the same time as the second exposure to Antigen A. The response to Antigen B would show:',
            options: [
              'The same fast, strong response as the secondary response to Antigen A',
              'No response because the immune system is busy fighting Antigen A',
              'A typical slow primary response with a long lag phase',
              'An immediate allergic response'
            ],
            correctAnswer: 2,
            explanation: 'Memory is antigen-specific. Since the body has never encountered Antigen B before, it will mount a primary immune response — slow, with a long lag phase and lower antibody peak — even while simultaneously mounting a secondary response to Antigen A.'
          }
        ]
      }
    },
    {
      id: 'imm7-vaccine-data',
      type: 'text' as const,
      content: `
## Analyzing Vaccine Data

AP Biology often asks you to interpret tables or graphs related to vaccine studies.

### Example Experimental Data

| Group | Treatment | Infection Rate | Antibody Titer (Day 30) |
|-------|-----------|---------------|------------------------|
| A (n=500) | Vaccine + adjuvant | 3% | 1:2560 |
| B (n=500) | Vaccine only | 8% | 1:640 |
| C (n=500) | Adjuvant only | 42% | 1:20 |
| D (n=500) | Saline (placebo) | 45% | 1:10 |

### How to Analyze This Data
- **Group D** is the negative control (no treatment)
- **Group C** shows that adjuvant alone does not provide protection
- **Group B** shows vaccine protection without adjuvant
- **Group A** shows that **adjuvant enhances vaccine effectiveness** (higher titer, lower infection rate)
- The difference between Groups C and D is not statistically significant → adjuvant alone has no protective effect

### Key Vocabulary for AP Exam
| Term | Definition |
|------|-----------|
| **Adjuvant** | Substance added to a vaccine to enhance the immune response |
| **Titer** | Measure of antibody concentration (highest dilution that still shows activity) |
| **Efficacy** | Percentage reduction in disease in vaccinated vs unvaccinated groups |
| **Seroconversion** | Development of detectable antibodies after exposure or vaccination |

> 🔑 Always identify the **independent variable** (treatment), **dependent variable** (infection rate/titer), **control groups**, and **sample size** in vaccine studies.
      `
    },
    {
      id: 'imm7-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'In the vaccine experiment above, the negative control group is ___',
            options: ['Group A', 'Group B', 'Group C', 'Group D']
          },
          {
            label: 'A higher antibody titer indicates a ___ immune response',
            options: ['weaker', 'stronger', 'faster', 'slower']
          },
          {
            label: 'The secondary immune response is characterized by ___ antibody production compared to the primary response',
            options: ['slower and lower', 'faster and higher', 'identical', 'slower but higher']
          }
        ],
        correctAnswers: ['Group D', 'stronger', 'faster and higher'],
        hint1: 'The negative control receives no active treatment — only a placebo (saline).',
        hint2: 'Titer measures concentration — higher titer means more antibodies in the blood.',
        hint3: 'Memory cells enable both faster activation AND greater magnitude of response.',
        explanation: 'Group D (saline placebo) serves as the negative control, showing the natural infection rate without any intervention. Higher antibody titer reflects a stronger immune response with more circulating antibodies. The secondary response is both faster (shorter lag) and higher (more antibodies) due to the expanded population of memory cells.'
      }
    },
    {
      id: 'imm7-design',
      type: 'text' as const,
      content: `
## Experimental Design: Immune System Questions

The AP exam may ask you to **design an experiment** or **identify flaws** in an experimental setup.

### Common Experimental Design Elements

| Element | What the AP Exam Expects |
|---------|------------------------|
| **Hypothesis** | Testable prediction about immune response (e.g., "Vaccination will increase antibody titer compared to placebo") |
| **Independent variable** | What you manipulate (e.g., type of vaccine, dose, adjuvant) |
| **Dependent variable** | What you measure (antibody titer, infection rate, T cell count, survival rate) |
| **Negative control** | Group receiving no treatment or placebo |
| **Positive control** | Group receiving known effective treatment |
| **Sample size** | Large enough to detect significant differences |
| **Randomization** | Subjects randomly assigned to groups |
| **Standardized variables** | Age, health status, dosing schedule kept constant |

### Practice Question Setup
*"Design an experiment to test whether a new vaccine produces immunological memory."*

**Strong answer includes:**
1. Vaccinate experimental group; give placebo to control group
2. After sufficient time for primary response (4–6 weeks), expose both groups to the pathogen
3. Measure antibody titers at multiple time points
4. Compare lag time, peak antibody levels, and dominant antibody class
5. Look for faster response, higher peak, and IgG dominance in vaccinated group

> 🔑 On the AP exam, always mention **controls, sample size, and what you're measuring**. State how results would support or refute your hypothesis.
      `
    },
    {
      id: 'imm7-quiz2',
      type: 'multiple-choice' as const,
      content: `**Quick Review** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Researchers vaccinated mice and measured antibody titers over 60 days. They then injected the same antigen at Day 60. Which result would provide the strongest evidence that immunological memory was established?',
            options: [
              'Antibody levels remained constant from Day 0 to Day 60',
              'No antibodies were detected until the second injection',
              'After the Day 60 injection, antibody levels rose faster and higher than after the initial vaccination',
              'The mice showed signs of an allergic reaction after the second injection'
            ],
            correctAnswer: 2,
            explanation: 'A faster, stronger secondary response after re-exposure is the hallmark of immunological memory. Memory B cells generated during the primary response enable rapid clonal expansion and high-affinity IgG production upon re-encounter with the antigen.'
          },
          {
            question: 'In a vaccine trial, researchers find no statistically significant difference in infection rates between the vaccinated and placebo groups. Which conclusion is most appropriate?',
            options: [
              'The vaccine is dangerous and should be banned',
              'The immune system of the participants was nonfunctional',
              'The data do not support the hypothesis that the vaccine provides protection against infection',
              'The placebo contained active ingredients that provided protection'
            ],
            correctAnswer: 2,
            explanation: 'When there is no significant difference between experimental and control groups, the null hypothesis cannot be rejected. The appropriate conclusion is that the data do not support the vaccine\'s efficacy — not that it is harmful or that the immune system is defective.'
          },
          {
            question: 'A student claims they can determine if a patient was previously exposed to a pathogen by measuring their current antibody levels. What is the best immunological basis for this claim?',
            options: [
              'Innate immune cells retain memory of prior infections',
              'Complement proteins persist in the blood after infection',
              'Memory B cells and long-lived plasma cells maintain detectable antibody levels after exposure',
              'Macrophages store pathogen fragments indefinitely'
            ],
            correctAnswer: 2,
            explanation: 'After an infection or vaccination, memory B cells persist for years and long-lived plasma cells continue secreting low levels of antibodies. Serological testing (measuring antibody titers) can detect these antibodies as evidence of prior exposure — this is the basis for antibody/serology tests.'
          }
        ]
      }
    }
  ]
}
