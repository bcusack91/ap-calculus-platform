import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Environmental Science — Section II Free-Response.
 * 3 long FRQs, 10 points each, 70 minutes total (~23 min each):
 *   Q1 — Design an Investigation
 *   Q2 — Analyze an Environmental Problem and Propose a Solution (with calculations)
 *   Q3 — Analyze an Environmental Problem and Propose a Solution (doing math)
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
        rubric: 'Independent variable: presence/absence (or width) of the buffer strip. Dependent variable: concentration of nitrate and/or phosphate in pond water (or runoff samples). Controlled variable: any reasonable choice — same crop, same fertilizer type/amount, same field slope, same precipitation, same soil type, same season.',
      },
      {
        prompt: '**(b) Describe** an experimental setup that would allow the scientists to test whether the 10-meter buffer strip reduces nutrient input. Include a control and a treatment.',
        rubric: 'Setup must include: (1) two comparable plots/fields draining into separate sample collection points (or paired sub-watersheds), (2) one with no buffer strip (control) and one with a 10-meter vegetated buffer strip (treatment), (3) collect water samples (runoff or pond water) at multiple times over a defined period after fertilizer application or rainfall events, (4) measure nitrate and phosphate concentrations in each sample. Replicates strengthen the design.',
      },
      {
        prompt: '**(c) Identify** ONE assumption the scientists are making that, if incorrect, could weaken the conclusions of this experiment.',
        rubric: 'Reasonable assumptions: (1) all observed nutrients in the pond come from the corn fields (could be from septic systems, atmospheric deposition, or wildlife); (2) the two plots are otherwise identical (slope, soil, drainage may differ); (3) precipitation patterns are the same for both plots; (4) the buffer strip is mature enough to effectively absorb nutrients.',
      },
      {
        prompt: '**(d) Describe** ONE specific environmental problem caused by excess nitrogen and phosphorus in surface water.',
        rubric: 'Cultural eutrophication: excess N and P fuel algal blooms → algae die → bacterial decomposition consumes dissolved oxygen → hypoxia/dead zones → fish kills. Other acceptable: harmful algal blooms (HABs) producing toxins (e.g., microcystin) that harm wildlife and human drinking water; loss of submerged aquatic vegetation; biodiversity decline.',
      },
      {
        prompt: '**(e) Explain** ONE specific way (other than buffer strips) that farmers could reduce nutrient runoff from their fields.',
        rubric: 'Acceptable practices with explanation: (1) cover crops — keep roots in soil during off-season to absorb residual nutrients; (2) precision agriculture / soil testing — apply only the amount of fertilizer needed; (3) no-till or reduced tillage — reduces erosion that carries nutrients; (4) split fertilizer applications — apply N in smaller doses timed to plant uptake; (5) terracing or contour plowing — slows runoff; (6) constructed wetlands — capture and process runoff before it reaches surface water.',
      },
      {
        prompt: '**(f) Describe** ONE specific environmental REGULATION or policy in the United States that addresses water pollution from agricultural sources.',
        rubric: 'Acceptable: Clean Water Act (1972) — regulates point-source discharges via NPDES permits; Total Maximum Daily Load (TMDL) provisions for impaired waters; CWA §319 nonpoint-source program; state-level nutrient management plans; Chesapeake Bay TMDL/nutrient reduction agreements; EPA Safe Drinking Water Act standards for nitrate. Must identify a specific policy/agency and how it relates to agricultural water pollution.',
      },
    ],
  },

  /* ====== Q2 — ANALYZE ENVIRONMENTAL PROBLEM + DESIGN SOLUTION + MATH (10 pts) ====== */
  {
    type: 'saq',
    topic: 'frq-analyze-and-propose-solution',
    stimulus: `**Energy Choices for a Mid-Sized City**

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
        rubric: 'Setup: $1.5 \\times 10^{9}$ kWh × 1.0 kg $CO_{2}/kWh$ = $1.5 \\times 10^{9}$ kg $CO_{2}/yr$ (1 point setup with units, 1 point correct answer).',
      },
      {
        prompt: '**(b) Calculate** the percent reduction in annual $CO_{2}$ emissions if Greenville switches entirely from coal to natural gas. Show your work.',
        rubric: 'Coal: $1.5 \\times 10^{9}$ kg. Natural gas: $1.5 \\times 10^{9}$ × 0.45 = $6.75 \\times 10^{8}$ kg. Reduction = $(1.5 \\times 10^{9} - 6.75 \\times 10^{8})$ / $1.5 \\times 10^{9}$ = 0.55 = 55% reduction. (Acceptable: any reasonable calculation showing 55% or equivalent fraction.)',
      },
      {
        prompt: '**(c) Identify** ONE specific environmental DRAWBACK of natural gas as an electricity source (other than $CO_{2}$ emissions).',
        rubric: 'Acceptable: methane leakage during extraction/transport ($CH_{4}$ has high GWP); hydraulic fracturing (fracking) causing groundwater contamination; induced seismicity from wastewater injection; large water consumption for fracking; habitat disruption from well pads and pipelines; air emissions of NOx and VOCs from drilling operations.',
      },
      {
        prompt: '**(d) Describe** ONE advantage and ONE disadvantage of Option B (solar PV + natural gas backup) compared to Option A (natural gas only).',
        rubric: 'Advantage: lower lifecycle $CO_{2}$ emissions; renewable solar reduces fossil fuel use; reduces local air pollutants when sun is generating; no fuel cost for solar portion; can be scaled with battery storage. Disadvantage: solar is intermittent (no power at night/cloudy days, requires backup); higher upfront capital cost; large land area required; some natural gas use continues; PV manufacturing has environmental footprint.',
      },
      {
        prompt: '**(e) Explain** how energy CONSERVATION measures (such as building insulation upgrades or LED lighting) could reduce the size of the power plant the city needs to build, and identify ONE specific conservation measure.',
        rubric: 'Conservation reduces electricity DEMAND, which reduces the generation capacity required. Specific measure with explanation: (1) LED lighting — uses ~75% less energy than incandescent; (2) energy-efficient appliances (ENERGY STAR); (3) building insulation/weatherization — reduces heating/cooling load; (4) smart thermostats; (5) demand response programs. Each kWh saved is one less kWh that must be generated, deferring need for new capacity.',
      },
      {
        prompt: '**(f) Describe** ONE specific federal incentive or policy in the United States that encourages adoption of renewable energy.',
        rubric: 'Acceptable: federal Production Tax Credit (PTC) for wind; Investment Tax Credit (ITC) for solar; Inflation Reduction Act (2022) clean-energy tax credits; Renewable Portfolio Standards (state level); accelerated depreciation (MACRS) for renewable projects; net metering policies; DOE loan guarantee programs. Must name a specific policy and connect it to renewables.',
      },
    ],
  },

  /* ====== Q3 — ANALYZE ENVIRONMENTAL PROBLEM + MATH (10 pts) ====== */
  {
    type: 'saq',
    topic: 'frq-analyze-environmental-problem',
    stimulus: `**Mercury Contamination in a Reservoir**

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
        rubric: 'Source: trace mercury in coal is volatilized during combustion and emitted from the smokestack as gaseous Hg. Pathway: atmospheric Hg deposits onto water/land via wet or dry deposition → enters reservoir → anaerobic bacteria in sediments methylate inorganic Hg into methylmercury $(CH_{3}Hg^{+})$ → methylmercury is taken up by phytoplankton → biomagnifies through the food web (described in part b).',
      },
      {
        prompt: '**(b) Calculate** by what factor the mercury concentration increases from phytoplankton to largemouth bass. Show your work.',
        rubric: 'Factor = 0.5 / 0.0001 = 5,000. Bass have 5,000 times more Hg than phytoplankton. (Setup with units 1 pt, correct answer 1 pt.)',
      },
      {
        prompt: '**(c) Explain** the biological process responsible for the pattern of increasing mercury concentration shown in the table.',
        rubric: 'BIOMAGNIFICATION: persistent toxins (Hg, DDT, PCBs) are not metabolized or excreted readily. As predators eat many prey items, they accumulate the combined Hg burden of all those prey. Concentrations therefore INCREASE at higher trophic levels. (Mention bioaccumulation = within an individual over time, biomagnification = across trophic levels.)',
      },
      {
        prompt: '**(d) Describe** ONE specific health effect of methylmercury exposure on humans.',
        rubric: 'Acceptable: neurological damage (especially to developing fetus and young children) → developmental delay, reduced IQ, motor and cognitive impairment; tremors; vision/hearing impairment; cardiovascular effects in adults; kidney damage. (Minamata disease is a famous example.)',
      },
      {
        prompt: '**(e) Identify and describe** ONE specific U.S. federal regulation that limits mercury emissions from power plants.',
        rubric: 'Acceptable: EPA\'s Mercury and Air Toxics Standards (MATS) under the Clean Air Act, regulating Hg and other toxic pollutants from coal-fired plants; the Clean Air Act broadly; Minamata Convention (international, ratified by U.S.) on global Hg reduction. Must identify the regulation and describe how it limits Hg emissions (e.g., requires scrubbers, activated-carbon injection, fuel switching).',
      },
      {
        prompt: '**(f) Propose and justify** one specific solution that the local community could implement to REDUCE human exposure to mercury from the reservoir while longer-term emission reductions take effect.',
        rubric: 'Acceptable solutions with justification: (1) Issue and enforce fish-consumption advisories — particularly limiting consumption of long-lived top-predator fish (bass, walleye, pike) by pregnant women and children; (2) public education campaigns; (3) provide alternative protein sources to subsistence fishers; (4) post warning signs at fishing access points; (5) sediment remediation (capping or removal) in highly contaminated zones; (6) substitute species — encourage fishing for shorter-lived, lower-trophic species (bluegill); (7) work with the plant to install activated-carbon injection systems on existing units.',
      },
    ],
  },
]
