import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Environmental Science — Section II Free-Response.
 * 3 long FRQs, 10 points each, 70 minutes total (~23 min each):
 *   Q1 — Design an Investigation
 *   Q2 — Analyze and Interpret Quantitative Data (data in a table, chart or graph; Practice 5)
 *   Q3 — Analyze an Environmental Problem Doing Calculations (Practice 6)
 * Titles follow the 2026–27 CED clarifications (first used on the May 2027 exam).
 * Q2 and Q3 also ask students to propose solutions, as the official descriptions say.
 * Each rubric line is one point, one per scorable request, as in the official scoring guidelines:
 *   Q1 a 3, b 3, c 1, d 1, e 1, f 1   Q2 a 2, b 2, c 2, d 1, e 1, f 2   Q3 a 2, b 2, c 2, d 2, e 1, f 1
 */

export const FRQS: SAQItem[] = [
  /* ============================ Q1 — DESIGN AN INVESTIGATION (10 pts) ============================ */
  {
    type: 'saq',
    topic: 'frq-design-an-investigation',
    stimulus: `**Investigation: Effects of Fertilizer Runoff on Pond Algae**

A team of scientists is studying a small farming community where corn fields border a freshwater pond. Local residents have observed that algal blooms in the pond appear to be increasing over the past five years. The community is considering whether to require farmers to use a buffer strip (a strip of unfertilized vegetation) along the edge of the pond.

The scientists hypothesize that **nitrogen and phosphorus runoff from the corn fields is responsible for the increase in algal blooms**, and that **planting a 10-meter buffer strip will significantly reduce nutrient input to the pond**.

You have been asked to design a controlled experiment to test the second part of the hypothesis: that buffer strips reduce nutrient runoff into the pond.`,
    parts: [
      {
        prompt: '**(a) Identify** the independent variable, dependent variable, and one variable that should be controlled in this experiment.',
        rubric: [
          { id: 'a1', label: '1 pt — Independent variable', description: 'Presence/absence (or width) of the buffer strip.' },
          { id: 'a2', label: '1 pt — Dependent variable', description: 'Concentration of nitrate and/or phosphate in pond water or in runoff samples.' },
          { id: 'a3', label: '1 pt — One controlled variable', description: 'Any reasonable choice: same crop, same fertilizer type/amount, same field slope, same precipitation, same soil type, same season.' },
        ],
      },
      {
        prompt: '**(b) Describe** an experimental setup that would allow the scientists to test whether the 10-meter buffer strip reduces nutrient input. Include a control and a treatment.',
        rubric: [
          { id: 'b1', label: '1 pt — Comparable plots with separate collection points', description: 'Two (or more) comparable plots/fields, or paired sub-watersheds, that drain to separate sample collection points, so runoff from each can be measured on its own.' },
          { id: 'b2', label: '1 pt — Control and treatment', description: 'One plot with no buffer strip (control) and one with a 10-meter vegetated buffer strip (treatment). Replicate plots of each strengthen the design.' },
          { id: 'b3', label: '1 pt — Data collection procedure', description: 'Collect runoff (or pond water) samples at multiple times over a defined period, such as after fertilizer application or rainfall events, and measure nitrate and phosphate concentrations in each sample.' },
        ],
      },
      {
        prompt: '**(c) Identify** ONE assumption the scientists are making that, if incorrect, could weaken the conclusions of this experiment.',
        rubric: [
          { id: 'c1', label: '1 pt — One reasonable assumption', description: 'Examples: (1) all nutrients in the pond come from the corn fields (they could come from septic systems, atmospheric deposition, or wildlife); (2) the plots are otherwise identical (slope, soil, drainage may differ); (3) precipitation is the same for both plots; (4) the buffer strip is mature enough to absorb nutrients effectively.' },
        ],
      },
      {
        prompt: '**(d) Describe** ONE specific environmental problem caused by excess nitrogen and phosphorus in surface water.',
        rubric: [
          { id: 'd1', label: '1 pt — One environmental problem described', description: 'Cultural eutrophication: excess N and P fuel algal blooms → algae die → bacterial decomposition consumes dissolved oxygen → hypoxia/dead zones → fish kills. Also acceptable: harmful algal blooms (HABs) producing toxins (e.g., microcystin) that harm wildlife and drinking water; loss of submerged aquatic vegetation; biodiversity decline.' },
        ],
      },
      {
        prompt: '**(e) Explain** ONE specific way (other than buffer strips) that farmers could reduce nutrient runoff from their fields.',
        rubric: [
          { id: 'e1', label: '1 pt — One practice, with how it reduces runoff', description: '(1) Cover crops keep roots in the soil during the off-season to absorb residual nutrients; (2) precision agriculture / soil testing applies only the fertilizer needed; (3) no-till or reduced tillage reduces erosion that carries nutrients; (4) split fertilizer applications time N to plant uptake; (5) terracing or contour plowing slows runoff; (6) constructed wetlands capture and process runoff before it reaches surface water.' },
        ],
      },
      {
        prompt: '**(f) Describe** ONE specific environmental REGULATION or policy in the United States that addresses water pollution from agricultural sources.',
        rubric: [
          { id: 'f1', label: '1 pt — A specific U.S. regulation or policy tied to agricultural water pollution', description: 'Clean Water Act (1972), including NPDES permits for point sources, Total Maximum Daily Load (TMDL) limits for impaired waters, and the §319 nonpoint-source program; state nutrient management plans; Chesapeake Bay TMDL / nutrient reduction agreements; Safe Drinking Water Act nitrate standard. Must name the policy and say how it relates to agricultural water pollution.' },
        ],
      },
    ],
  },

  /* ====== Q2 — ANALYZE AND INTERPRET QUANTITATIVE DATA (10 pts) ====== */
  {
    type: 'saq',
    topic: 'frq-analyze-interpret-quantitative-data',
    stimulus: `**Analyze and Interpret Quantitative Data — Mercury Contamination in a Reservoir**

A reservoir downstream from a coal-fired power plant has elevated mercury (Hg) concentrations in its water and sediments. State health officials have issued a fish-consumption advisory after sampling fish from the reservoir:

| Trophic Level | Organism            | Mean Hg concentration (ppm) |
|---------------|--------------------|-----------------------------|
| Producer      | Phytoplankton      | 0.0001 |
| Primary       | Zooplankton        | 0.001  |
| Secondary     | Bluegill (small fish) | 0.05  |
| Tertiary      | Largemouth bass    | 0.5    |

The U.S. EPA recommends that fish tissue not exceed **0.3 ppm methylmercury** for unrestricted consumption.`,
    parts: [
      {
        prompt: '**(a) Identify** the source of the mercury entering this reservoir from the coal-fired power plant, and describe how it ultimately ends up in the fish tissue.',
        rubric: [
          { id: 'a1', label: '1 pt — Source identified', description: 'Trace mercury in coal is volatilized during combustion and emitted from the smokestack as gaseous Hg.' },
          { id: 'a2', label: '1 pt — Pathway to fish tissue described', description: 'Atmospheric Hg deposits onto water/land by wet or dry deposition → enters the reservoir → anaerobic bacteria in sediments convert inorganic Hg to methylmercury $(CH_{3}Hg^{+})$ → taken up by phytoplankton → passed up the food web to fish.' },
        ],
      },
      {
        prompt: '**(b) Describe** the trend in mean mercury concentration shown in the table, and **identify** which organisms in the table have a mean concentration above the EPA recommendation for unrestricted consumption.',
        rubric: [
          { id: 'b1', label: '1 pt — Trend described', description: 'Mean Hg concentration increases at each step up the food chain, by a factor of about 10 to 50 per trophic level (0.0001 → 0.001 → 0.05 → 0.5 ppm), so the tertiary consumer has the highest concentration.' },
          { id: 'b2', label: '1 pt — Organism above the recommendation', description: 'Only the largemouth bass (0.5 ppm) exceeds the 0.3 ppm recommendation; bluegill (0.05 ppm) is below it.' },
        ],
      },
      {
        prompt: '**(c) Explain** the biological process responsible for the pattern in the data, and use the data to **explain** why the advisory targets bass rather than bluegill.',
        rubric: [
          { id: 'c1', label: '1 pt — Biomagnification explained', description: 'Persistent toxins such as methylmercury are not readily metabolized or excreted, so each predator accumulates the combined Hg burden of the many prey it eats, and concentrations increase at higher trophic levels. (Bioaccumulation is buildup within one organism over time; biomagnification is the increase across trophic levels.)' },
          { id: 'c2', label: '1 pt — Data used to explain why the advisory targets bass', description: 'The bass is a tertiary consumer that eats fish such as bluegill, so it carries about 10 times the bluegill concentration (0.5 vs. 0.05 ppm) and is the only species in the table above 0.3 ppm.' },
        ],
      },
      {
        prompt: '**(d) Describe** ONE specific health effect of methylmercury exposure on humans.',
        rubric: [
          { id: 'd1', label: '1 pt — One human health effect described', description: 'Neurological damage, especially to a developing fetus or young children (developmental delay, reduced IQ, motor and cognitive impairment); tremors; vision/hearing impairment; cardiovascular effects in adults; kidney damage. (Minamata disease is a well-known example.)' },
        ],
      },
      {
        prompt: '**(e) Identify and describe** ONE specific U.S. federal regulation that limits mercury emissions from power plants.',
        rubric: [
          { id: 'e1', label: '1 pt — A federal regulation identified, with how it limits Hg emissions', description: 'EPA Mercury and Air Toxics Standards (MATS) under the Clean Air Act, which set limits on Hg and other toxics from coal-fired plants, met with scrubbers, activated-carbon injection, or fuel switching; the Clean Air Act broadly. (The Minamata Convention is international rather than a U.S. federal regulation.)' },
        ],
      },
      {
        prompt: '**(f) Propose and justify** one specific solution that the local community could implement to REDUCE human exposure to mercury from the reservoir while longer-term emission reductions take effect.',
        rubric: [
          { id: 'f1', label: '1 pt — A realistic solution proposed', description: 'Examples: issue and enforce fish-consumption advisories that limit eating long-lived top predators (bass, walleye, pike), especially for pregnant women and children; public education; alternative protein sources for subsistence fishers; warning signs at fishing access points; sediment remediation (capping or removal) in the most contaminated zones; encouraging fishing for lower-trophic species such as bluegill.' },
          { id: 'f2', label: '1 pt — Justification of the solution', description: 'Explains how the solution lowers human exposure, e.g., advisories steer people away from the fish with the highest Hg (bass at 0.5 ppm, above the 0.3 ppm guideline), or capping sediment stops methylation and uptake at the base of the food web.' },
        ],
      },
    ],
  },

  /* ====== Q3 — ANALYZE AN ENVIRONMENTAL PROBLEM DOING CALCULATIONS (10 pts) ====== */
  {
    type: 'saq',
    topic: 'frq-analyze-problem-doing-calculations',
    stimulus: `**Analyze an Environmental Problem Doing Calculations — Energy Choices for a Mid-Sized City**

The city of Greenville is planning to replace its aging 200-megawatt (MW) coal-fired power plant. Officials are considering two options:

- **Option A:** Build a new 200-MW natural gas combined-cycle power plant.
- **Option B:** Build a 200-MW solar photovoltaic (PV) facility plus an equivalent amount of natural gas backup capacity to be used when the sun is not available.

Greenville currently uses approximately **$1.5 \\times 10^{9}$ kilowatt-hours (kWh)** of electricity per year.

Approximate $CO_{2}$ emissions per kilowatt-hour (kWh) of electricity generated:
- Coal: 1.0 kg $CO_{2}/kWh$
- Natural gas: 0.45 kg $CO_{2}/kWh$
- Solar PV: 0.05 kg $CO_{2}/kWh$ (lifecycle: manufacturing + transport)`,
    parts: [
      {
        prompt: '**(a) Calculate** the total annual $CO_{2}$ emissions (in kilograms) from Greenville\'s current coal plant, assuming it provides all $1.5 \\times 10^{9}$ kWh of the city\'s electricity. Show your work.',
        rubric: [
          { id: 'a1', label: '1 pt — Correct setup with units', description: '$1.5 \\times 10^{9}$ kWh × 1.0 kg $CO_{2}/kWh$.' },
          { id: 'a2', label: '1 pt — Correct answer', description: '$1.5 \\times 10^{9}$ kg $CO_{2}$ per year.' },
        ],
      },
      {
        prompt: '**(b) Calculate** the percent reduction in annual $CO_{2}$ emissions if Greenville switches entirely from coal to natural gas. Show your work.',
        rubric: [
          { id: 'b1', label: '1 pt — Correct setup', description: 'Natural gas: $1.5 \\times 10^{9}$ kWh × 0.45 kg/kWh = $6.75 \\times 10^{8}$ kg; percent reduction = $(1.5 \\times 10^{9} - 6.75 \\times 10^{8}) / (1.5 \\times 10^{9}) \\times 100$ (or $(1.0 - 0.45)/1.0 \\times 100$).' },
          { id: 'b2', label: '1 pt — Correct answer', description: '55% reduction.' },
        ],
      },
      {
        prompt: '**(c) Calculate** the annual $CO_{2}$ emissions (in kilograms) under Option B if the solar facility supplies 25% of the city\'s electricity and the natural gas backup supplies the remaining 75%. Then **calculate** how many kilograms of $CO_{2}$ per year Option B would avoid compared with Option A. Show your work.',
        rubric: [
          { id: 'c1', label: '1 pt — Option B annual emissions, with work', description: 'Solar: $0.25 \\times 1.5 \\times 10^{9}$ kWh × 0.05 kg/kWh = $1.875 \\times 10^{7}$ kg. Gas: $0.75 \\times 1.5 \\times 10^{9}$ kWh × 0.45 kg/kWh = $5.0625 \\times 10^{8}$ kg. Total ≈ $5.25 \\times 10^{8}$ kg $CO_{2}$/yr.' },
          { id: 'c2', label: '1 pt — Emissions avoided compared with Option A', description: 'Option A (all gas) = $6.75 \\times 10^{8}$ kg, so Option B avoids $6.75 \\times 10^{8} - 5.25 \\times 10^{8} ≈ 1.5 \\times 10^{8}$ kg $CO_{2}$ per year (consistent with the Option B total).' },
        ],
      },
      {
        prompt: '**(d) Describe** ONE advantage and ONE disadvantage of Option B (solar PV + natural gas backup) compared to Option A (natural gas only). Your advantage may use your result from part (c).',
        rubric: [
          { id: 'd1', label: '1 pt — One advantage of Option B', description: 'Lower lifecycle $CO_{2}$ emissions (about $1.5 \\times 10^{8}$ kg less per year, from part (c)); less natural gas extraction and its impacts (methane leakage, fracking); less fossil fuel use; fewer local air pollutants while the sun is generating; no fuel cost for the solar portion.' },
          { id: 'd2', label: '1 pt — One disadvantage of Option B', description: 'Solar is intermittent (no power at night or on cloudy days, so backup is still needed); higher upfront capital cost; large land area required; some natural gas use continues; PV manufacturing has an environmental footprint.' },
        ],
      },
      {
        prompt: '**(e) Explain** how energy CONSERVATION measures (such as building insulation upgrades or LED lighting) could reduce the size of the power plant the city needs to build, and identify ONE specific conservation measure.',
        rubric: [
          { id: 'e1', label: '1 pt — Explains how conservation shrinks the needed plant, with one specific measure', description: 'Conservation lowers electricity DEMAND, so less generating capacity must be built (each kWh saved is a kWh that does not have to be generated). Specific measures: LED lighting (about 75% less energy than incandescent); ENERGY STAR appliances; insulation/weatherization to cut heating and cooling loads; smart thermostats; demand-response programs.' },
        ],
      },
      {
        prompt: '**(f) Describe** ONE specific federal incentive or policy in the United States that encourages adoption of renewable energy.',
        rubric: [
          { id: 'f1', label: '1 pt — A specific federal incentive or policy, connected to renewables', description: 'Production Tax Credit (PTC); Investment Tax Credit (ITC) for solar; Inflation Reduction Act (2022) clean-energy tax credits; accelerated depreciation (MACRS) for renewable projects; DOE loan guarantee programs. (Renewable Portfolio Standards and most net-metering rules are state policies, so they do not answer a question asking for a federal policy.)' },
        ],
      },
    ],
  },
]
