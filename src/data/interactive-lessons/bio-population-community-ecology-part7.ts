export const bioPopulationPart7Data = {
  topicSlug: 'population-community-ecology',
  sections: [
    {
      id: 'pcp7-intro',
      type: 'text' as const,
      content: `
## AP Review

**Part 7 of 7 — Population & Community Ecology**

This final part synthesizes the unit and drills the specific **traps** that cost students points on the AP exam. Use the master summary, then the trap table, then the application questions to confirm you can apply each idea under exam conditions.

### Master equation summary

| Concept | Equation | Key fact |
|---|---|---|
| Per-capita growth rate | $r = b - d$ | A per-individual property; multiply by N for population rate |
| Exponential growth | $\\frac{dN}{dt} = r_{max}N$ | J-curve; needs unlimited resources; rarely sustained |
| Logistic growth | $\\frac{dN}{dt} = r_{max}N\\frac{(K-N)}{K}$ | S-curve; growth peaks at $N = K/2$; reaches 0 at $N = K$ |
| Mark-recapture | $N = \\frac{MC}{R}$ | Estimates population size; R (recaptures) in denominator |
| Simpson's diversity | $D = 1 - \\sum (p_i)^2$ | Rewards richness AND evenness; higher D = more diverse |
      `
    },
    {
      id: 'pcp7-traps',
      type: 'text' as const,
      content: `
### The AP Trap Table

Each row is a place students reliably lose points. Memorize the correction.

| Trap | Wrong intuition | Correct statement |
|---|---|---|
| **Growth-rate peak** | "$\\frac{dN}{dt}$ is greatest when N is largest (at K)." | In logistic growth $\\frac{dN}{dt}$ is greatest at **$N = K/2$**, and equals **0** at $N = K$. |
| **Exponential vs. logistic** | "Logistic growth never looks exponential." | When $N \\ll K$, $\\frac{(K-N)}{K} \\approx 1$, so logistic growth **starts** looking nearly exponential. |
| **Per-capita vs. population rate** | "$r$ and $\\frac{dN}{dt}$ are the same thing." | $r$ is per-individual; $\\frac{dN}{dt} = rN$ is the whole-population rate. Equal $r$ does not mean equal $\\frac{dN}{dt}$. |
| **Density-dependent vs. independent** | "Anything that lowers population size is density-dependent." | Density-DEPENDENT means the *per-capita effect intensifies with crowding* (disease, competition). Weather/fire are density-INDEPENDENT. |
| **Survivorship axis** | "A straight line means a constant number die per interval." | The y-axis is **logarithmic**; a straight line (Type II) means a constant **proportion** dies per interval. |
| **r vs. K categories** | "Every species is strictly r-selected OR K-selected." | They are **endpoints of a continuum**; most species mix traits. |
| **Interaction signs** | "+/− always means predation." | Predation, herbivory, and parasitism are **all +/−**; commensalism is +/0; mutualism is +/+. |
| **Carrying capacity** | "K is a fixed constant for a species." | K shifts with climate, resources, and species interactions. |
| **Diversity = richness** | "More species automatically means higher diversity." | Diversity needs richness **and** evenness; one dominant species lowers D even at equal richness. |
| **Biodiversity & disturbance** | "High diversity makes a community immune to disturbance." | High diversity tends to increase resistance and resilience — it does **not** guarantee immunity. |
      `
    },
    {
      id: 'pcp7-synthesis',
      type: 'text' as const,
      content: `
### Putting It Together — A Synthesis Walkthrough

Consider a single invasive beetle introduced to a new forest, and trace the unit end to end.

1. **Colonization (Part 1).** Resources are unlimited and N is tiny, so the population grows nearly exponentially: $\\frac{dN}{dt} \\approx r_{max}N$, a J-curve. As an early colonizer of a disturbed niche, the beetle's life history is **r-selected** (Part 3): small body, many offspring, little parental care, a Type III survivorship curve.

2. **Approaching limits (Part 2).** As N rises, **density-dependent** factors kick in — competition for host trees, predators and parasites that find the now-abundant beetle, disease spreading through the dense population. Growth bends from a J toward an S: logistic, $\\frac{dN}{dt} = r_{max}N\\frac{(K-N)}{K}$, fastest at $N = K/2$, leveling at K.

3. **Community effects (Part 4).** The beetle is an herbivore (**+/−**) on native trees. If it suppresses a previously dominant tree, it may act almost like a keystone agent, shifting which species coexist and triggering a small **trophic cascade**. Native insects competing for the same trees may be driven out by **competitive exclusion**, or persist via **resource partitioning**.

4. **Biodiversity outcome (Part 5).** If the beetle homogenizes the forest by favoring one tree species, **evenness** drops and Simpson's $D$ falls. A wildfire later might trigger **secondary succession** (soil intact), with pioneer plants recolonizing.

5. **Quantifying it (Part 6).** A manager estimates beetle numbers by **mark-recapture** ($N = \\frac{MC}{R}$) and uses the logistic model to predict whether the population is below, at, or past $K/2$ — which determines whether control efforts should expect the fastest growth (near K/2) ahead.

This single scenario touches every concept in the unit, which is exactly how AP free-response questions are built: one ecological story, many linked principles.
      `
    },
    {
      id: 'pcp7-quiz1',
      type: 'multiple-choice' as const,
      content: `
### AP-Style Application Questions
      `,
      exercise: {
        questions: [
          {
            question: 'A protected elephant population follows logistic growth with r_max = 0.2 per year and K = 1,200. Wildlife managers want to know the population size at which the herd adds individuals fastest. What is that N, and what is dN/dt there?',
            options: [
              'N = 1,200, dN/dt = 240 per year',
              'N = 600, dN/dt = 60 per year',
              'N = 600, dN/dt = 120 per year',
              'N = 1,200, dN/dt = 0 per year, because the herd is largest'
            ],
            correctAnswer: 1,
            explanation: 'Maximum growth is at N = K/2 = 600. There dN/dt = (0.2)(600)(1200-600)/1200 = (0.2)(600)(0.5) = 60/yr. The trap "N = 600, dN/dt = 120" drops the (K-N)/K = 0.5 factor, computing only r_max × N = 0.2 × 600 = 120 (the exponential value, double the truth). The "N = 1,200" options fall for the peak-at-K trap; at K the growth rate is 0, the slowest, not the fastest.'
          },
          {
            question: 'Researchers tag 80 frogs in a marsh, release them, and later capture 100 frogs, of which 20 are tagged. Using N = MC/R, what is the estimated population? If the marsh is then drained by drought killing a fixed 50% regardless of frog density, how is that mortality classified?',
            options: [
              'N = 400 frogs; the drought mortality is density-dependent',
              'N = 400 frogs; the drought mortality is density-independent',
              'N = 160 frogs; the drought mortality is density-independent',
              'N = 500 frogs; the drought mortality is density-dependent'
            ],
            correctAnswer: 1,
            explanation: 'N = MC/R = (80 × 100)/20 = 8000/20 = 400 frogs. A drought killing a fixed 50% regardless of density is density-INDEPENDENT (its proportional effect does not depend on crowding). The trap pairing "density-dependent" is wrong because no part of the drought intensifies with population density — that label is reserved for factors like disease or competition whose per-capita impact grows as the population becomes crowded.'
          },
          {
            question: 'Two prairie plots each contain 4 plant species. Plot 1: proportions 0.85, 0.05, 0.05, 0.05. Plot 2: proportions 0.25, 0.25, 0.25, 0.25. Which plot has higher Simpson\'s diversity (D = 1 - $\\Sigma pi^{2}$), and what general principle does the comparison illustrate?',
            options: [
              'Plot 1, because richness is equal and it has a clear dominant species',
              'Plot 2, illustrating that greater evenness raises diversity even when richness is equal',
              'They are equal, because both plots contain exactly 4 species',
              'Plot 1, because Simpson\'s index measures only the number of species'
            ],
            correctAnswer: 1,
            explanation: 'Plot 1: $\\Sigma pi^{2}$ = 0.7225 + 0.0025×3 = 0.73, so D ≈ 0.27. Plot 2: $\\Sigma pi^{2}$ = 4(0.0625) = 0.25, so D = 0.75. Plot 2 wins because of higher evenness. The trap "they are equal because both have 4 species" is the richness-equals-diversity fallacy — Simpson\'s index responds to evenness too, so the dominated Plot 1 scores far lower despite identical richness.'
          }
        ]
      }
    },
    {
      id: 'pcp7-frq-strategy',
      type: 'text' as const,
      content: `
### Free-Response Strategy for Ecology Prompts

AP ecology free-response questions usually combine a **graph or data table** with several short tasks: describe a trend, calculate a value, justify a claim, and predict an outcome. A reliable approach:

1. **Identify the model first.** Is the curve J-shaped (exponential) or S-shaped (logistic)? Naming the model tells the reader which equation governs your reasoning and frames every later part.
2. **Show the formula, then the numbers.** For any calculation, write the equation ($\\frac{dN}{dt} = r_{max}N\\frac{(K-N)}{K}$, $N = \\frac{MC}{R}$, or $D = 1 - \\sum (p_i)^2$), substitute, and report units. Graders award points for the setup even if arithmetic slips.
3. **Justify with a mechanism, not a restatement.** "Growth slows near K **because** density-dependent factors such as competition and disease intensify as crowding increases" earns the point; "growth slows because N is high" does not.
4. **Match the scale of your claim to the data.** Do not invoke ecosystem-level conclusions from a single-population graph, and keep per-capita rate ($r$) distinct from population rate ($\\frac{dN}{dt}$).

#### Reading a logistic graph at a glance

| Region of the S-curve | What is happening | Tell-tale on the graph |
|---|---|---|
| Lower bend (N small) | Near-exponential; $\\frac{(K-N)}{K} \\approx 1$ | Curve sweeping upward, steepening |
| Inflection ($N = K/2$) | Maximum $\\frac{dN}{dt}$ | Steepest tangent slope on the whole curve |
| Upper plateau (N near K) | Growth $\\rightarrow 0$ | Curve flattening toward a horizontal asymptote at K |

> **One-line reminders for the exam:** maximum growth at $N = K/2$ (not at K); survivorship y-axis is log scale; +/− covers predation, herbivory, AND parasitism; diversity needs richness AND evenness; K is not a fixed constant.
      `
    },
    {
      id: 'pcp7-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Final Synthesis Checkpoint
      `,
      exercise: {
        questions: [
          {
            question: 'A graph shows a population rising steeply, then leveling into a flat plateau over time. A second graph shows the population GROWTH RATE (dN/dt) versus population size N as a symmetric hump that peaks in the middle and returns to zero at the right edge. Together these graphs are diagnostic of:',
            options: [
              'Exponential growth, because the first graph rises steeply',
              'Logistic growth, with the growth-rate hump peaking at N = K/2 and reaching 0 at N = K',
              'A density-independent crash followed by recovery',
              'r-selected boom-and-bust dynamics with no carrying capacity'
            ],
            correctAnswer: 1,
            explanation: 'A plateauing S-curve plus a humped dN/dt-vs-N plot that peaks mid-range and hits 0 at the right edge is the unmistakable signature of logistic growth (peak at K/2, zero at K). The "exponential" trap fixates on the steep early rise but ignores the plateau and the RETURN of dN/dt to zero — exponential growth never levels off and its dN/dt only ever increases.'
          },
          {
            question: 'An ecologist removes a single predatory sea star from a tide pool. Over the next year, one mussel species spreads and the number of other species drops from 15 to 8. Which two concepts BEST explain this result?',
            options: [
              'Density-independent regulation and primary succession',
              'Keystone species removal and a trophic cascade reducing diversity',
              'Mutualism breakdown and competitive exclusion of the sea star',
              'r/K continuum shift and resource partitioning'
            ],
            correctAnswer: 1,
            explanation: 'The sea star is a keystone predator; removing it lets a dominant competitor (mussels) monopolize space, and the indirect ripple that lowers other species is a trophic cascade — together collapsing diversity. The trap "mutualism breakdown" misreads the interaction: the sea star and mussels are predator-prey (+/−), not mutualists (+/+), so no mutualism was lost. Loss of a keystone PREDATOR, not a mutualist, drives this classic Paine result.'
          }
        ]
      }
    }
  ]
};
