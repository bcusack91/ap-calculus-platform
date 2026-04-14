export const bioBiodiversityConservationPart2Data = {
  topicSlug: 'biodiversity-conservation',
  sections: [
    {
      id: 'bco2-intro',
      type: 'text' as const,
      content: `# Measuring Biodiversity

**Part 2 of 7 — Biodiversity & Conservation**

To protect biodiversity, scientists must first **quantify** it. Simple species counts (richness) give only part of the picture — two communities can have the same number of species but very different structures. Ecologists use **diversity indices** to capture both the number of species and how evenly individuals are distributed among them.

### Why Measurement Matters
- Provides baseline data before a disturbance or conservation intervention.
- Allows comparison of communities across space and time.
- Helps prioritize areas for protection.
- Required for environmental impact assessments.
`
    },
    {
      id: 'bco2-richness',
      type: 'text' as const,
      content: `## Species Richness & Relative Abundance

### Species Richness (S)
The simplest measure of biodiversity — just count the number of species present.

**Limitations of richness alone:**
- Does not account for how many individuals each species has.
- A community dominated by one species "feels" less diverse than an even community with the same S.

### Relative Abundance & Evenness
**Relative abundance** ($p_i$) = proportion of total individuals belonging to species $i$.

$$p_i = \\frac{n_i}{N}$$

where $n_i$ = number of individuals of species $i$ and $N$ = total number of individuals across all species.

**Example — Two forest plots, each with S = 4 species and N = 100 individuals:**

| Species | Plot A (even) | Plot B (uneven) |
|---|---|---|
| Oak | 25 | 85 |
| Maple | 25 | 5 |
| Birch | 25 | 5 |
| Pine | 25 | 5 |

Both plots have S = 4, but Plot A is clearly more diverse because no single species dominates.
`
    },
    {
      id: 'bco2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Richness vs. Evenness** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Two ponds each contain 5 fish species and 200 total fish. Pond X has roughly equal numbers of each species; Pond Y is 90% bluegill. Which statement is correct?',
            options: [
              'Pond X has greater species richness than Pond Y',
              'Pond Y has greater species diversity than Pond X',
              'Both ponds have the same species richness but Pond X has greater species diversity',
              'Both ponds have the same species diversity because they have the same richness'
            ],
            correctAnswer: 2,
            explanation: 'Both ponds have S = 5 (same species richness), but Pond X has higher evenness — individuals are more equitably distributed among species. Since species diversity incorporates both richness and evenness, Pond X has greater overall species diversity.'
          },
          {
            question: 'If a community has 3 species with relative abundances of 0.80, 0.15, and 0.05, the community is best described as having:',
            options: [
              'High richness and high evenness',
              'Low richness and high evenness',
              'Low richness and low evenness',
              'High richness and low evenness'
            ],
            correctAnswer: 2,
            explanation: 'With only 3 species, richness is low. Because one species dominates at 80%, the distribution is highly uneven. Therefore both richness and evenness are low.'
          }
        ]
      }
    },
    {
      id: 'bco2-indices',
      type: 'text' as const,
      content: `## Shannon Diversity Index & Simpson's Index

### Shannon Diversity Index ($H'$)

$$H' = -\\sum_{i=1}^{S} p_i \\ln p_i$$

- $S$ = total number of species (richness)
- $p_i$ = relative abundance of species $i$
- $\\ln$ = natural logarithm

**Interpretation:**
- $H' = 0$ when the community has only 1 species.
- Higher $H'$ → more diverse community.
- Maximum $H'$ for a given $S$ is $\\ln(S)$, achieved when all species are equally abundant.
- Typical values range from 1.5 to 3.5 for most ecological communities.

**Worked Example — Plot A (even) from above:**
Each $p_i = 0.25$ for 4 species.

$$H' = -4 \\times (0.25 \\times \\ln 0.25) = -4 \\times (0.25 \\times -1.386) = -4 \\times (-0.347) = 1.386$$

Maximum possible: $\\ln(4) = 1.386$ — Plot A achieves maximum diversity!

### Simpson's Diversity Index ($D$)

$$D = 1 - \\sum_{i=1}^{S} p_i^2$$

- Ranges from 0 (no diversity) to 1 (infinite diversity).
- Represents the probability that two randomly selected individuals belong to **different** species.
- Less sensitive to rare species than Shannon's index.

**Worked Example — Plot A (even):**

$$D = 1 - 4 \\times (0.25)^2 = 1 - 4 \\times 0.0625 = 1 - 0.25 = 0.75$$

### Comparing the Two Indices

| Feature | Shannon ($H'$) | Simpson ($D$) |
|---|---|---|
| Sensitive to rare species? | Yes — rare species contribute more to $H'$ | Less so — dominated by common species |
| Range | 0 to $\\ln(S)$ | 0 to 1 |
| Higher values mean… | More diverse | More diverse |
| Common use | Ecological research, environmental monitoring | Quick diversity comparison |
`
    },
    {
      id: 'bco2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Diversity Indices** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'The Shannon diversity index is calculated as $H\' = -\\sum p_i$ ___ $p_i$.',
            options: ['× ln', '× log₁₀', '÷', '+ ln']
          },
          {
            label: 'If a community has only one species, the Shannon index $H\'$ equals ___.',
            options: ['1', '0', 'ln(S)', '0.5']
          },
          {
            label: 'Simpson\'s index $D = 1 - \\sum p_i^2$ represents the probability that two random individuals belong to ___ species.',
            options: ['the same', 'different', 'rare', 'dominant']
          },
          {
            label: 'The Shannon index is more sensitive to ___ species than Simpson\'s index.',
            options: ['dominant', 'common', 'rare', 'invasive']
          }
        ],
        correctAnswers: ['× ln', '0', 'different', 'rare'],
        hint1: 'The Shannon formula involves the natural logarithm of each proportion.',
        hint2: 'With one species, p₁ = 1, and ln(1) = 0.',
        hint3: 'Simpson\'s index weights common species more heavily because p² is larger for abundant species.',
        explanation: 'The Shannon index formula is H\' = −Σ pᵢ ln pᵢ. When only one species exists, p = 1 and ln(1) = 0, so H\' = 0. Simpson\'s D gives the probability of drawing two individuals of different species. The Shannon index gives more weight to rare species because the ln function amplifies small proportions, while Simpson\'s squaring of proportions emphasizes common species.'
      }
    },
    {
      id: 'bco2-sampling',
      type: 'text' as const,
      content: `## Sampling Methods

Ecologists rarely count every individual in an ecosystem. Instead, they use structured sampling methods:

### Common Field Methods

| Method | Best For | How It Works |
|---|---|---|
| **Quadrat sampling** | Plants, sessile organisms | Place square frames at random locations; count all individuals within each frame |
| **Transect line** | Changes across a gradient | Stretch tape across habitat; record species at intervals along the line |
| **Mark-recapture** | Mobile animals | Capture, mark, release; recapture later. Use Lincoln-Petersen index: $N = \\frac{M \\times C}{R}$ |
| **Point counts** | Birds, calling amphibians | Observer stands at fixed points, records all individuals detected in a set time |
| **Pitfall traps** | Ground-dwelling invertebrates | Cups buried flush with soil surface collect walking organisms |

### Species Accumulation Curves
- Plot cumulative species observed vs. sampling effort.
- The curve **levels off** as most species have been detected.
- If the curve is still rising steeply, more sampling is needed before diversity estimates are reliable.

### Important Considerations
- **Sample size** must be large enough to capture rare species.
- **Random placement** of quadrats/transects avoids sampling bias.
- Different methods may be needed for different taxonomic groups in the same ecosystem.

## Part 2 Summary — Measuring Biodiversity

### Key Takeaways
1. **Species richness** (S) counts species; **evenness** measures equitability of abundances.
2. **Shannon index** ($H' = -\\sum p_i \\ln p_i$) incorporates both richness and evenness; more sensitive to rare species.
3. **Simpson's index** ($D = 1 - \\sum p_i^2$) gives probability two random individuals are different species; emphasizes common species.
4. Field methods (quadrats, transects, mark-recapture) must be appropriate for the organisms studied.
5. Species accumulation curves help determine whether sampling is adequate.

### AP Exam Connection
- You may be asked to **calculate** $H'$ or $D$ from abundance data.
- Understand how to interpret diversity index values and compare communities.
- Know when to use different sampling methods and their limitations.

**Next up:** Part 3 — Threats to Biodiversity
`
    }
  ]
};
