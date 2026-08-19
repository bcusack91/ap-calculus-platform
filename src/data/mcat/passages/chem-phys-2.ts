/**
 * MCAT chem-phys passage bank — expansion wave 2 (agent-authored, every
 * passage carries needsReview: true pending SME review; gated by
 * scripts/import-passage-seeds.ts: KaTeX compile, chart integrity, key
 * balance, no letter-position references, dup checks vs the live banks).
 *
 * KEY INVARIANT: the passage runner does NOT shuffle options — keys were
 * authored position-balanced and explanations reference options by CONTENT,
 * so options can be reordered only via scripts/rebalance-passage-keys.ts.
 */
import type { MCATPassage } from '../types'

export const CHEM_PHYS_PASSAGES_2: MCATPassage[] = [
  {
    "id": "cp2-01",
    "section": "chem-phys",
    "discipline": "general chemistry",
    "title": "Calcium Oxalate and Kidney Stones",
    "passageText": "Calcium oxalate ($\\text{CaC}_2\\text{O}_4$) is the principal component of most kidney stones. To model stone formation, researchers measured the equilibrium solubility of calcium oxalate at 37 °C, where $K_{sp} = [\\text{Ca}^{2+}][\\text{C}_2\\text{O}_4^{2-}] = 1.6 \\times 10^{-9}$.\n\nIn Experiment 1, excess solid $\\text{CaC}_2\\text{O}_4$ was stirred in pure water until equilibrium was reached, and the dissolved calcium concentration was determined by atomic absorption spectroscopy. In Experiment 2, the procedure was repeated in sodium oxalate ($\\text{Na}_2\\text{C}_2\\text{O}_4$) solutions ranging from 0.0010 M to 0.10 M; the measured equilibrium calcium concentrations are plotted in Figure 1. In Experiment 3, the researchers mixed equal volumes of $2.0 \\times 10^{-4}$ M $\\text{CaCl}_2$ and $2.0 \\times 10^{-4}$ M $\\text{Na}_2\\text{C}_2\\text{O}_4$ and monitored the mixture for turbidity over 30 minutes.\n\nBecause oxalate is the conjugate base of a weak acid (for $\\text{HC}_2\\text{O}_4^-$, $K_a = 6.1 \\times 10^{-5}$), the team also examined solubility as a function of pH. Lowering the pH from 7.0 to 4.0 markedly increased the amount of solid that dissolved. Finally, they tested potassium citrate, a chelator of $\\text{Ca}^{2+}$ prescribed clinically to prevent stone recurrence: adding citrate increased the total dissolved calcium in every trial. One investigator cautioned that citrate solutions can also shift the pH of an unbuffered mixture, which could confound the interpretation of the citrate result.",
    "chart": {
      "title": "Figure 1. Equilibrium calcium concentration vs. added sodium oxalate (37 °C)",
      "kind": "line",
      "xLabel": "Sodium oxalate concentration",
      "xUnit": "M",
      "yLabel": "Equilibrium [Ca²⁺]",
      "yUnit": "µmol/L",
      "seriesLabel": "Measured [Ca²⁺]",
      "xValues": [
        0,
        0.001,
        0.01,
        0.05,
        0.1
      ],
      "yValues": [
        40,
        1.6,
        0.16,
        0.032,
        0.016
      ],
      "annotations": [
        {
          "xIndex": 0,
          "label": "pure water: 40 µmol/L"
        },
        {
          "xIndex": 4,
          "label": "common-ion suppression"
        }
      ]
    },
    "questions": [
      {
        "question": "In Experiment 1, the molar solubility of calcium oxalate in pure water is closest to:",
        "options": [
          "1.6 × 10⁻⁹ M",
          "2.0 × 10⁻⁵ M",
          "4.0 × 10⁻⁵ M",
          "8.0 × 10⁻⁵ M"
        ],
        "correctAnswer": 2,
        "explanation": "For a 1:1 salt, dissolving s mol/L gives [Ca²⁺] = [C₂O₄²⁻] = s, so Ksp = s². Then s = √(1.6 × 10⁻⁹) = 4.0 × 10⁻⁵ M, since (4.0 × 10⁻⁵)² = 16 × 10⁻¹⁰ = 1.6 × 10⁻⁹. The value 1.6 × 10⁻⁹ M is the Ksp itself, not a concentration. The value 2.0 × 10⁻⁵ M halves the answer as if each ion contributed half the solubility, and 8.0 × 10⁻⁵ M doubles it as if the salt released two of each ion — neither is correct for a 1:1 stoichiometry.",
        "skill": "Ksp calculation"
      },
      {
        "question": "In Experiment 2, the molar solubility of calcium oxalate in 0.10 M sodium oxalate is closest to:",
        "options": [
          "1.6 × 10⁻⁸ M",
          "1.6 × 10⁻⁵ M",
          "4.0 × 10⁻⁵ M",
          "1.6 × 10⁻⁴ M"
        ],
        "correctAnswer": 0,
        "explanation": "With a large common-ion oxalate concentration, [C₂O₄²⁻] ≈ 0.10 M, so Ksp = s(0.10) and s = (1.6 × 10⁻⁹)/(0.10) = 1.6 × 10⁻⁸ M. This matches Figure 1 (0.016 µmol/L = 1.6 × 10⁻⁸ mol/L). The value 4.0 × 10⁻⁵ M ignores the common-ion effect entirely (it is the pure-water solubility). The values 1.6 × 10⁻⁵ M and 1.6 × 10⁻⁴ M are power-of-ten slips: dividing 1.6 × 10⁻⁹ by 0.10 must raise the exponent by exactly one, giving 10⁻⁸.",
        "skill": "Common-ion effect"
      },
      {
        "question": "In Experiment 3, after the two solutions are combined, what should the researchers observe?",
        "options": [
          "A precipitate forms, because Q = 1.0 × 10⁻⁸ exceeds Ksp",
          "A precipitate forms, because Q = 4.0 × 10⁻⁸ exceeds Ksp",
          "No precipitate forms, because Q = 1.0 × 10⁻⁸ is less than Ksp",
          "No precipitate forms, because the two salt solutions neutralize each other"
        ],
        "correctAnswer": 0,
        "explanation": "Mixing equal volumes halves each concentration: [Ca²⁺] = [C₂O₄²⁻] = 1.0 × 10⁻⁴ M. The ion product is Q = (1.0 × 10⁻⁴)(1.0 × 10⁻⁴) = 1.0 × 10⁻⁸, which is larger than Ksp = 1.6 × 10⁻⁹ (about 6 times larger), so precipitation occurs. The value Q = 4.0 × 10⁻⁸ comes from forgetting the twofold dilution and using (2.0 × 10⁻⁴)². The claim that 1.0 × 10⁻⁸ is less than 1.6 × 10⁻⁹ compares exponents incorrectly (10⁻⁸ > 10⁻⁹). No acid–base neutralization occurs between these two salts.",
        "skill": "Precipitation prediction"
      },
      {
        "question": "Based on the passage, what happens to the solubility of calcium oxalate when the pH is lowered from 7.0 to 4.0, and why?",
        "options": [
          "It decreases, because H⁺ acts as a common ion for the dissolution equilibrium",
          "It increases, because protonation of oxalate lowers [C₂O₄²⁻] and pulls the dissolution equilibrium toward dissolved ions",
          "It increases, because Ksp itself becomes larger at low pH",
          "It is unchanged, because Ksp is constant at constant temperature"
        ],
        "correctAnswer": 1,
        "explanation": "Added H⁺ converts C₂O₄²⁻ to HC₂O₄⁻, removing free oxalate from the Ksp expression. That makes Q < Ksp, so more solid dissolves (Le Châtelier). H⁺ is not a common ion — it does not appear in the CaC₂O₄ dissolution equilibrium — so the claim that solubility decreases is backwards. Ksp is a temperature-dependent constant and does not itself grow at low pH; it is the speciation of oxalate that changes. For the same reason, 'unchanged' is wrong: total dissolved calcium rises even though the ion product of the free ions still equals Ksp at equilibrium.",
        "skill": "Acid–base coupling"
      },
      {
        "question": "According to Figure 1, raising the sodium oxalate concentration from 0.010 M to 0.10 M changes the equilibrium calcium concentration in a way that is:",
        "options": [
          "A 10-fold decrease, consistent with s = Ksp/[C₂O₄²⁻]",
          "A 100-fold decrease, consistent with s = Ksp/[C₂O₄²⁻]²",
          "No change, because solubility depends only on Ksp",
          "A 10-fold increase, caused by ionic-strength effects"
        ],
        "correctAnswer": 0,
        "explanation": "The plotted values fall from 0.16 µmol/L at 0.010 M oxalate to 0.016 µmol/L at 0.10 M — exactly a factor of 10 for a factor-of-10 increase in oxalate. That inverse first-order dependence is what s = Ksp/[C₂O₄²⁻] predicts for a 1:1 salt. A 100-fold decrease would require solubility to vary with the square of the oxalate concentration, which the data rule out. The data are clearly not flat, so solubility does not depend only on Ksp when a common ion is present. Ionic-strength (salting-in) effects are secondary here, and the measured values fall rather than rise.",
        "skill": "Data interpretation"
      },
      {
        "question": "Which follow-up experiment best tests whether citrate increases dissolved calcium by complexing Ca²⁺ rather than by changing the solution pH?",
        "options": [
          "Add a larger excess of solid CaC₂O₄ so equilibrium is reached faster",
          "Repeat the citrate measurement at a higher temperature",
          "Replace atomic absorption spectroscopy with a turbidity measurement",
          "Repeat the citrate experiment in a pH-controlled buffer and verify the pH matches a citrate-free control"
        ],
        "correctAnswer": 3,
        "explanation": "The confound named in the passage is that citrate might raise solubility simply by shifting pH. Running the citrate and citrate-free trials in the same buffer, and confirming the measured pH is identical in both, removes the pH variable so any remaining increase must come from Ca²⁺ complexation. Adding more solid changes only the approach to equilibrium, not the equilibrium itself. Raising the temperature changes Ksp and introduces a new variable rather than removing one. Swapping the detection method (turbidity for atomic absorption) changes how dissolved calcium is measured, not which mechanism causes it to increase.",
        "skill": "Experimental design"
      }
    ],
    "needsReview": true
  },
  {
    "id": "cp2-02",
    "section": "chem-phys",
    "discipline": "general chemistry",
    "title": "Permanganate Titration of Iron",
    "passageText": "The iron content of an ore can be determined by redox titration with potassium permanganate. A student dissolved a 0.560-g sample of iron ore in hot, dilute sulfuric acid and treated the solution so that all of the iron was present as $\\text{Fe}^{2+}$. The solution was then titrated with standardized 0.0200 M $\\text{KMnO}_4$ according to the balanced equation:\n\n$\\text{MnO}_4^- + 5\\,\\text{Fe}^{2+} + 8\\,\\text{H}^+ \\rightarrow \\text{Mn}^{2+} + 5\\,\\text{Fe}^{3+} + 4\\,\\text{H}_2\\text{O}$\n\nDuring the titration, the purple permanganate decolorized on mixing as long as $\\text{Fe}^{2+}$ remained. The endpoint was taken as the first faint pink color that persisted for at least 30 seconds. Trial 1 was run quickly as a scout titration to locate the approximate endpoint; trials 2–4 were run dropwise near the endpoint. Buret readings are shown in Table 1.\n\nThe procedure specifies sulfuric acid as the titration medium. A footnote warns that if hydrochloric acid is used instead, permanganate can oxidize chloride ion to chlorine, and the analysis becomes unreliable. The molar mass of iron is 55.85 g/mol (use 56 g/mol), and the acid supplies the $\\text{H}^+$ consumed by the reaction.",
    "figure": "| Trial | Initial buret reading (mL) | Final buret reading (mL) | Volume delivered (mL) |\n|---|---|---|---|\n| 1 (scout) | 0.00 | 21.40 | 21.40 |\n| 2 | 0.55 | 20.60 | 20.05 |\n| 3 | 1.10 | 21.10 | 20.00 |\n| 4 | 0.40 | 20.35 | 19.95 |",
    "questions": [
      {
        "question": "In the balanced titration reaction, how many electrons does each permanganate ion accept?",
        "options": [
          "1",
          "3",
          "5",
          "8"
        ],
        "correctAnswer": 2,
        "explanation": "Manganese goes from +7 in MnO₄⁻ to +2 in Mn²⁺, a gain of 5 electrons. This is why 5 Fe²⁺ (each losing 1 electron) are consumed per permanganate. One electron is what each iron loses, not what permanganate gains. Three electrons would correspond to reduction of MnO₄⁻ only as far as MnO₂ (+4), which occurs in neutral or basic solution, not in the strongly acidic conditions here. Eight is the stoichiometric coefficient of H⁺, not an electron count.",
        "skill": "Redox balancing"
      },
      {
        "question": "Using the volume the student should adopt from Table 1, how many moles of Fe²⁺ were in the sample?",
        "options": [
          "4.0 × 10⁻⁴ mol",
          "2.0 × 10⁻³ mol",
          "4.0 × 10⁻³ mol",
          "1.0 × 10⁻² mol"
        ],
        "correctAnswer": 1,
        "explanation": "The concordant trials average to 20.00 mL. Moles of MnO₄⁻ = 0.0200 mol/L × 0.02000 L = 4.0 × 10⁻⁴ mol. The 1:5 stoichiometry gives moles of Fe²⁺ = 5 × 4.0 × 10⁻⁴ = 2.0 × 10⁻³ mol. The value 4.0 × 10⁻⁴ mol is the moles of titrant, forgetting the 5:1 ratio. The value 4.0 × 10⁻³ mol doubles the correct answer (as if 10 Fe²⁺ per MnO₄⁻), and 1.0 × 10⁻² mol applies the factor of 5 twice (5 × 2.0 × 10⁻³).",
        "skill": "Stoichiometry"
      },
      {
        "question": "The mass percent of iron in the ore sample is closest to:",
        "options": [
          "4.0%",
          "5.6%",
          "11.2%",
          "20.0%"
        ],
        "correctAnswer": 3,
        "explanation": "Mass of iron = 2.0 × 10⁻³ mol × 56 g/mol = 0.112 g. Percent = (0.112 g / 0.560 g) × 100% = 20.0%. The 4.0% value comes from omitting the 5:1 stoichiometry (4.0 × 10⁻⁴ mol × 56 g/mol = 0.0224 g; 0.0224/0.560 = 4.0%). The 11.2% value reports the iron mass (0.112 g) as though the sample weighed 1.00 g. The 5.6% value arises from mishandling the molar mass by a factor of ten rather than carrying the units through.",
        "skill": "Stoichiometry"
      },
      {
        "question": "Why does this titration require no external indicator?",
        "options": [
          "The first slight excess of MnO₄⁻ tints the solution pink, so the titrant is self-indicating",
          "The Fe³⁺ product develops an intense color exactly at the endpoint",
          "The Mn²⁺ product is deep purple and appears only at the endpoint",
          "The endpoint is detected by a sudden temperature rise in the flask"
        ],
        "correctAnswer": 0,
        "explanation": "Before the equivalence point, every drop of purple MnO₄⁻ is reduced to nearly colorless Mn²⁺, so the solution stays essentially colorless. Once the Fe²⁺ is exhausted, the very next drop of titrant has nothing to react with, and its pink-purple color persists — the titrant indicates its own excess. Fe³⁺ is only pale yellow and forms gradually throughout the titration, not abruptly at the endpoint. Mn²⁺ is nearly colorless; deep purple describes the MnO₄⁻ reactant, not the product. Thermometric detection is not part of this procedure, and the heat change per drop would be far too small to signal an endpoint.",
        "skill": "Endpoint detection"
      },
      {
        "question": "If the student had dissolved the ore in hydrochloric acid instead of sulfuric acid, the calculated iron content would most likely be:",
        "options": [
          "Lower than the true value, because Cl⁻ reduces the amount of Fe²⁺ available",
          "Higher than the true value, because permanganate is consumed oxidizing Cl⁻ in addition to Fe²⁺",
          "Identical, because chloride is a spectator ion toward permanganate",
          "Identical, because side reactions change the rate but not the endpoint volume"
        ],
        "correctAnswer": 1,
        "explanation": "Permanganate is a strong enough oxidant to convert Cl⁻ to Cl₂. Titrant consumed by that side reaction is wrongly attributed to Fe²⁺, so the endpoint volume — and therefore the calculated moles of iron — comes out too high. Chloride is not a spectator toward MnO₄⁻ (that is precisely the footnote's warning). Chloride does not consume or reduce Fe²⁺, so an erroneously low result has no mechanism. And a side reaction that consumes titrant necessarily increases the endpoint volume; it is not merely a kinetic effect.",
        "skill": "Error analysis"
      },
      {
        "question": "Which volume of titrant should be used in the calculation, and why?",
        "options": [
          "20.00 mL, the mean of trials 2–4, because the scout trial deliberately overshot the endpoint",
          "20.35 mL, the mean of all four trials, because more data always improve precision",
          "21.40 mL, the largest volume, because it guarantees the reaction went to completion",
          "19.95 mL, the smallest volume, because it minimizes overshoot error"
        ],
        "correctAnswer": 0,
        "explanation": "Trials 2–4 are concordant (20.05, 20.00, 19.95 mL; mean = 60.00/3 = 20.00 mL). Trial 1 was run quickly to locate the endpoint and overshot it (21.40 mL), so it is excluded by design. Averaging all four trials gives (21.40 + 20.05 + 20.00 + 19.95)/4 = 81.40/4 = 20.35 mL, which is biased high by the scout run — more data help only when they are unbiased. Choosing the single largest volume builds the overshoot error directly into the result, and choosing the single smallest discards the precision gained from replicate concordant trials.",
        "skill": "Data interpretation"
      }
    ],
    "needsReview": true
  },
  {
    "id": "cp2-03",
    "section": "chem-phys",
    "discipline": "physics",
    "title": "Flow Through Intravenous Catheters",
    "passageText": "Intravenous (IV) fluid delivery is driven by gravity: a fluid bag hangs a height $h$ above the catheter, providing a driving pressure $\\Delta P = \\rho g h$. Researchers measured the volumetric flow rate $Q$ of saline ($\\rho = 1000\\ \\text{kg/m}^3$, viscosity $\\eta = 1.0\\ \\text{mPa·s}$) through catheters of varying inner radius. For steady laminar flow through a tube of radius $r$ and length $L$, Poiseuille's law applies:\n\n$Q = \\frac{\\pi \\Delta P r^4}{8 \\eta L}$\n\nIn the baseline series, the bag hung 1.0 m above the catheter hub, the catheter length was fixed at 3.0 cm, and $Q$ was measured by timed collection for catheters with inner radii from 0.20 mm to 1.0 mm (Figure 1; take $g = 10\\ \\text{m/s}^2$). In a second series, the saline was replaced by a dextrose solution with twice the viscosity of saline, and the measurements were repeated.\n\nThe researchers also examined a catheter whose inner radius narrows from 0.60 mm along its body to 0.30 mm at the tip. With saline moving at 20 cm/s in the wide section, they used the continuity equation to predict the speed at the tip, and they noted that by Bernoulli's principle the faster-moving fluid at the tip is at lower pressure than fluid in the wide section at the same height. All measurements were made at room temperature, and flows were confirmed to be laminar.",
    "chart": {
      "title": "Figure 1. Saline flow rate vs. catheter inner radius (baseline series)",
      "kind": "line",
      "xLabel": "Inner radius",
      "xUnit": "mm",
      "yLabel": "Flow rate Q",
      "yUnit": "mL/min",
      "seriesLabel": "Saline, L = 3.0 cm, h = 1.0 m",
      "xValues": [
        0.2,
        0.4,
        0.6,
        0.8,
        1
      ],
      "yValues": [
        0.0128,
        0.205,
        1.04,
        3.28,
        8
      ],
      "annotations": [
        {
          "xIndex": 4,
          "label": "Q = 8.0 mL/min at r = 1.0 mm"
        }
      ]
    },
    "questions": [
      {
        "question": "If the inner radius of a catheter is doubled while all other variables are held constant, the flow rate is multiplied by:",
        "options": [
          "2",
          "4",
          "8",
          "16"
        ],
        "correctAnswer": 3,
        "explanation": "Poiseuille's law gives Q ∝ r⁴, so doubling the radius multiplies the flow by 2⁴ = 16. A factor of 2 assumes flow scales linearly with radius. A factor of 4 uses r² — the scaling of cross-sectional area, which sets velocity for a fixed Q but not the pressure-driven flow rate. A factor of 8 uses r³, a volume-like scaling that appears nowhere in the law.",
        "skill": "Poiseuille flow"
      },
      {
        "question": "The driving pressure provided by the saline bag hanging 1.0 m above the catheter is closest to:",
        "options": [
          "1 kPa",
          "10 kPa",
          "100 kPa",
          "1000 kPa"
        ],
        "correctAnswer": 1,
        "explanation": "ΔP = ρgh = (1000 kg/m³)(10 m/s²)(1.0 m) = 1.0 × 10⁴ Pa = 10 kPa. The 1 kPa value drops a factor of ten (for example by using g without the full density). The 100 kPa value is approximately 1 atm — the ambient pressure on both ends of the line, not the added driving pressure from the bag height. The 1000 kPa value is off by a further factor of ten.",
        "skill": "Hydrostatic pressure"
      },
      {
        "question": "For the dextrose comparison to isolate the effect of viscosity on flow rate, which variables must be held constant between the two series?",
        "options": [
          "Catheter radius, catheter length, and bag height",
          "Bag height only, because catheter geometry cancels out of the comparison",
          "Catheter radius only, because length does not appear in Poiseuille's law",
          "Collection time only, because the other variables cancel in the ratio"
        ],
        "correctAnswer": 0,
        "explanation": "Q depends on r, L, ΔP (set by bag height), and η. To attribute any change in Q to viscosity alone, every other determinant — radius, length, and bag height — must match between the saline and dextrose runs. Geometry does not cancel unless it is actually held fixed, so controlling bag height alone is insufficient. Length appears in the denominator of Poiseuille's law, so controlling radius alone is also insufficient. Collection time is part of how Q is measured, not a physical determinant of the flow, so fixing it controls nothing.",
        "skill": "Experimental design"
      },
      {
        "question": "Saline moves at 20 cm/s in the section of radius 0.60 mm. Its speed in the 0.30-mm tip is closest to:",
        "options": [
          "20 cm/s",
          "40 cm/s",
          "80 cm/s",
          "320 cm/s"
        ],
        "correctAnswer": 2,
        "explanation": "Continuity requires A₁v₁ = A₂v₂. Halving the radius cuts the area by (0.60/0.30)² = 4, so the speed rises fourfold: 4 × 20 = 80 cm/s. The 40 cm/s value uses the radius ratio (2) without squaring it. The 320 cm/s value applies a fourth-power scaling (16 × 20), confusing continuity with Poiseuille's r⁴ dependence. An unchanged 20 cm/s would violate conservation of volume flow through the narrowed tip.",
        "skill": "Continuity equation"
      },
      {
        "question": "The data in Figure 1 are consistent with Q ∝ rⁿ, where n equals:",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswer": 3,
        "explanation": "Compare radii that differ by a factor of 2: going from r = 0.2 mm to r = 0.4 mm, Q rises from 0.0128 to 0.205 mL/min, a ratio of 0.205/0.0128 = 16 = 2⁴, so n = 4. (The same check works from 0.4 to 0.8 mm: 3.28/0.205 = 16.) If n were 1, doubling the radius would double the flow; n = 2 would give a factor of 4; n = 3 would give a factor of 8 — none of which matches the sixteenfold jumps in the data.",
        "skill": "Data interpretation"
      }
    ],
    "needsReview": true
  },
  {
    "id": "cp2-04",
    "section": "chem-phys",
    "discipline": "physics",
    "title": "Doppler Ultrasound of Blood Flow",
    "passageText": "Doppler ultrasound measures blood velocity from the frequency shift of sound reflected off moving red blood cells. A transducer emits ultrasound at frequency $f = 3.0$ MHz into soft tissue, where the speed of sound is $c = 1500$ m/s. Because the moving cells first receive the wave and then re-emit it as moving sources, the measured shift is doubled:\n\n$\\Delta f = \\frac{2 f v \\cos\\theta}{c}$\n\nwhere $v$ is the blood speed and $\\theta$ is the angle between the ultrasound beam and the direction of flow.\n\nTo validate a new instrument, engineers pumped a blood-mimicking fluid through a vessel phantom at calibrated speeds from 0.10 to 0.50 m/s and recorded the Doppler shift with the beam aligned with the flow ($\\theta = 0°$) and again at $\\theta = 60°$ (Figure 1). They also measured attenuation: for a deep target, the echo returning to the transducer had an intensity 100 times smaller than a reference echo from a shallow target.\n\nFinally, the team compared the 3.0-MHz probe with a 7.5-MHz probe. Axial resolution — the ability to distinguish two reflectors along the beam — improves as the wavelength shortens, but tissue attenuation increases steeply with frequency, so probe choice trades image detail against imaging depth. Both probes were tested on the same phantom under identical gain settings.",
    "chart": {
      "title": "Figure 1. Measured Doppler shift vs. phantom flow speed (3.0-MHz probe)",
      "kind": "line",
      "xLabel": "Flow speed",
      "xUnit": "m/s",
      "yLabel": "Doppler shift Δf",
      "yUnit": "Hz",
      "seriesLabel": "θ = 0°",
      "xValues": [
        0.1,
        0.2,
        0.3,
        0.4,
        0.5
      ],
      "yValues": [
        400,
        800,
        1200,
        1600,
        2000
      ],
      "comparisonSeries": [
        {
          "label": "θ = 60°",
          "yValues": [
            200,
            400,
            600,
            800,
            1000
          ]
        }
      ],
      "annotations": [
        {
          "xIndex": 4,
          "label": "2.0 kHz at 0.50 m/s (θ = 0°)"
        }
      ]
    },
    "questions": [
      {
        "question": "The wavelength of the 3.0-MHz ultrasound in soft tissue is closest to:",
        "options": [
          "0.05 mm",
          "0.50 mm",
          "2.0 mm",
          "5.0 mm"
        ],
        "correctAnswer": 1,
        "explanation": "λ = c/f = (1500 m/s)/(3.0 × 10⁶ Hz) = 5.0 × 10⁻⁴ m = 0.50 mm. The 0.05 mm and 5.0 mm values are factor-of-ten slips in converting 5.0 × 10⁻⁴ m to millimeters. The 2.0 mm value comes from inverting the ratio — f/c = 2000 m⁻¹ is the reciprocal of the wavelength, not the wavelength itself.",
        "skill": "Wave properties"
      },
      {
        "question": "With the beam aligned with the flow (θ = 0°) and the fluid moving at 0.50 m/s, the Doppler shift is closest to:",
        "options": [
          "0.5 kHz",
          "1.0 kHz",
          "2.0 kHz",
          "4.0 kHz"
        ],
        "correctAnswer": 2,
        "explanation": "Δf = 2fv cos θ / c = 2(3.0 × 10⁶ Hz)(0.50 m/s)(1)/(1500 m/s) = (3.0 × 10⁶)/1500 = 2000 Hz = 2.0 kHz, matching Figure 1. The 1.0 kHz value omits the factor of 2 — it treats the red cells as only receivers, forgetting that they also re-emit as moving sources. The 4.0 kHz value applies that factor of 2 twice. The 0.5 kHz value both omits the 2 and halves the result again.",
        "skill": "Doppler effect"
      },
      {
        "question": "According to Figure 1, when the beam is tilted to θ = 60° with the fluid still moving at 0.50 m/s, the measured shift is closest to:",
        "options": [
          "0.5 kHz",
          "1.0 kHz",
          "1.7 kHz",
          "2.0 kHz"
        ],
        "correctAnswer": 1,
        "explanation": "cos 60° = 0.50, so the shift is half the aligned value: 0.50 × 2.0 kHz = 1.0 kHz — exactly where the 60° series in Figure 1 sits at 0.50 m/s (1000 Hz). The 1.7 kHz value uses cos 30° ≈ 0.87, confusing the beam-to-flow angle with its complement. The 2.0 kHz value ignores the angle entirely, and the 0.5 kHz value applies the cosine factor twice (0.25 × 2.0 kHz).",
        "skill": "Data interpretation"
      },
      {
        "question": "The echo from the deep target, at 1/100 the intensity of the reference echo, is attenuated by:",
        "options": [
          "2 dB",
          "10 dB",
          "20 dB",
          "100 dB"
        ],
        "correctAnswer": 2,
        "explanation": "The decibel change is 10 log(I/I₀) = 10 log(1/100) = 10 × (−2) = −20 dB, i.e., a 20-dB attenuation. A 10-dB change corresponds to only a factor of 10 in intensity. The 2 dB value mistakes the exponent of the ratio for the decibel value without the factor of 10. The 100 dB value mistakes the intensity ratio itself for the decibel figure.",
        "skill": "Decibel scale"
      },
      {
        "question": "Compared with the 3.0-MHz probe, the 7.5-MHz probe should provide:",
        "options": [
          "Better axial resolution but shallower useful imaging depth, because attenuation grows with frequency",
          "Better axial resolution and greater imaging depth, because higher-frequency waves carry more energy",
          "Worse axial resolution but greater imaging depth, because longer wavelengths penetrate farther",
          "Unchanged axial resolution, because resolution depends only on the transducer's physical size"
        ],
        "correctAnswer": 0,
        "explanation": "At 7.5 MHz the wavelength shrinks to λ = 1500/(7.5 × 10⁶) = 2.0 × 10⁻⁴ m = 0.20 mm (versus 0.50 mm at 3.0 MHz), so axial resolution improves; but the passage states attenuation increases steeply with frequency, so echoes from deep structures become too weak — depth is sacrificed. The claim of better resolution and greater depth ignores that attenuation, and frequency does not by itself mean more delivered energy. The claim of worse resolution has the wavelength trend backwards — the 7.5-MHz wave is shorter, not longer. And axial resolution is set by wavelength (and pulse length), not merely by transducer size.",
        "skill": "Imaging trade-offs"
      }
    ],
    "needsReview": true
  },
  {
    "id": "cp2-05",
    "section": "chem-phys",
    "discipline": "general chemistry",
    "title": "Nitrogen Loading in Hyperbaric Diving",
    "passageText": "Researchers at a hyperbaric medicine center studied inert-gas uptake in divers breathing compressed air (approximated as 80.0% $\\text{N}_2$ and 20.0% $\\text{O}_2$ by moles). In seawater, each 10 m of depth adds approximately 1 atm of hydrostatic pressure to the 1 atm already exerted by the atmosphere at the surface, and a diver's breathing gas is delivered at the total ambient pressure.\n\nDissolved nitrogen in body fluids follows Henry's law, $C = k_H P_{N_2}$, where the study used $k_H = 15\\ \\text{mg·L}^{-1}\\cdot\\text{atm}^{-1}$ for nitrogen in plasma at 37 °C. In one protocol, subjects were compressed in a dry chamber to the pressure equivalent to 30 m of seawater, held until their tissues equilibrated, and then decompressed. After a rapid decompression, precordial ultrasound detected abundant venous gas bubbles — the hallmark of decompression sickness — whereas a staged ascent with scheduled stops produced almost none. The investigators attributed the difference to supersaturation: when ambient pressure falls faster than dissolved nitrogen can be carried to the lungs and exhaled, the excess gas comes out of solution in blood and tissue.\n\nThe protocol also reviewed two safety rules. First, a diver breathing from a tank must never hold a breath during ascent, because gas trapped in the lungs expands as ambient pressure falls (Boyle's law). Second, deep commercial dives substitute helium for nitrogen; among other advantages, helium is markedly less soluble in tissue, so less inert gas dissolves at pressure. The team proposed a chamber study to quantify that benefit.",
    "questions": [
      {
        "question": "At a depth of 30 m of seawater, the total ambient pressure is closest to:",
        "options": [
          "1.0 atm",
          "3.0 atm",
          "4.0 atm",
          "5.0 atm"
        ],
        "correctAnswer": 2,
        "explanation": "Each 10 m adds about 1 atm, so 30 m contributes 3 atm of hydrostatic pressure; adding the 1 atm of atmosphere at the surface gives 3 + 1 = 4.0 atm. The 3.0 atm value counts only the water column and forgets the atmosphere above it. The 5.0 atm value adds the surface atmosphere twice. The 1.0 atm value ignores the depth entirely.",
        "skill": "Pressure at depth"
      },
      {
        "question": "For a diver breathing air at 30 m, the partial pressure of nitrogen is closest to:",
        "options": [
          "0.8 atm",
          "2.4 atm",
          "3.2 atm",
          "4.0 atm"
        ],
        "correctAnswer": 2,
        "explanation": "By Dalton's law, P(N₂) = (mole fraction) × (total pressure) = 0.80 × 4.0 atm = 3.2 atm. The 2.4 atm value applies the 0.80 fraction to only the 3 atm of hydrostatic pressure, dropping the surface atmosphere. The 4.0 atm value is the total ambient pressure, not nitrogen's share of it. The 0.8 atm value is the nitrogen partial pressure at the surface, not at depth.",
        "skill": "Partial pressure"
      },
      {
        "question": "Once a subject's plasma has equilibrated at the 30-m pressure, the dissolved nitrogen concentration is closest to:",
        "options": [
          "12 mg/L",
          "24 mg/L",
          "36 mg/L",
          "48 mg/L"
        ],
        "correctAnswer": 3,
        "explanation": "Henry's law gives C = k_H × P(N₂) = (15 mg·L⁻¹·atm⁻¹)(3.2 atm) = 48 mg/L. The 12 mg/L value is the surface loading (15 × 0.8 atm). The 24 mg/L value corresponds to equilibration at 10 m, where the total pressure is 2 atm and P(N₂) = 1.6 atm (15 × 1.6 = 24). The 36 mg/L value corresponds to 20 m, where P(N₂) = 0.80 × 3 atm = 2.4 atm (15 × 2.4 = 36).",
        "skill": "Henry's law"
      },
      {
        "question": "A diver at 30 m holds a breath containing 2.0 L of gas and ascends to the surface. Assuming constant temperature, the gas would tend to expand to a volume of:",
        "options": [
          "0.5 L",
          "2.0 L",
          "4.0 L",
          "8.0 L"
        ],
        "correctAnswer": 3,
        "explanation": "Boyle's law: P₁V₁ = P₂V₂, so V₂ = (4.0 atm × 2.0 L)/(1.0 atm) = 8.0 L — a fourfold expansion, which is why breath-holding on ascent risks lung overexpansion injury. The 0.5 L value divides by the pressure ratio instead of multiplying, describing descent rather than ascent. The 4.0 L value uses a pressure ratio of 2, as if the dive were at 10 m. The 2.0 L value assumes the volume is unchanged, which would require constant pressure.",
        "skill": "Boyle's law"
      },
      {
        "question": "Which chamber study would best quantify whether substituting helium for nitrogen reduces the dissolved inert-gas load?",
        "options": [
          "Compare subjects breathing heliox at 4.0 atm with subjects breathing air at 1.0 atm",
          "Compare heliox and air at the same total pressure and exposure time, then measure venous bubble counts after identical staged ascents",
          "Compare subjects of different body masses, all breathing air at 4.0 atm",
          "Compare rapid and staged ascents in subjects who all breathed air at 4.0 atm"
        ],
        "correctAnswer": 1,
        "explanation": "To isolate the breathing gas as the variable, everything else — total pressure, exposure time, and ascent profile — must match between the heliox and air groups; any difference in bubble counts then reflects the gas itself, consistent with helium's lower solubility. Comparing heliox at 4.0 atm against air at 1.0 atm confounds gas identity with pressure, and the low-pressure group would barely load any inert gas regardless of which gas it breathed. Varying body mass tests a subject characteristic, not the gas. Comparing rapid versus staged ascents on air alone tests the decompression schedule — the supersaturation result the study already demonstrated — and never introduces helium at all.",
        "skill": "Experimental design"
      }
    ],
    "needsReview": true
  },
  {
    "id": "cp2-06",
    "section": "chem-phys",
    "discipline": "physics",
    "title": "Fluorine-18 Decay in PET Imaging",
    "passageText": "Positron emission tomography (PET) relies on short-lived positron-emitting isotopes. The most widely used tracer, fluorine-18, is produced in a cyclotron by bombarding oxygen-18-enriched water with protons via the $^{18}\\text{O}(p, n)^{18}\\text{F}$ reaction and is then incorporated into fluorodeoxyglucose (FDG). Fluorine-18 ($Z = 9$) decays to a stable oxygen-18 nucleus ($Z = 8$) with a half-life of 110 minutes.\n\nA hospital radiopharmacy received a vial of $^{18}$F-FDG with a calibrated activity of 800 MBq (1 MBq = $10^6$ decays per second) at 8:00 a.m. Technologists reassayed the vial in a dose calibrator every 110 minutes and recorded the activities plotted in Figure 1. The decay obeyed first-order kinetics, $A = A_0 e^{-\\lambda t}$, where the decay constant satisfies $\\lambda = \\frac{\\ln 2}{t_{1/2}}$ with $\\ln 2 \\approx 0.693$.\n\nInside a patient, each emitted positron travels roughly a millimeter in tissue before it encounters an electron. The pair undergoes annihilation, converting its combined rest mass energy ($2 m_e c^2 = 1022$ keV) into photons that exit the body and are registered by a ring of detectors operating in coincidence mode: an event is counted only when two detectors on nearly opposite sides of the ring fire within nanoseconds of each other. Because the half-life is short, doses must be scheduled carefully; a scan begun too long after calibration may have too little activity remaining to produce an interpretable image.",
    "chart": {
      "title": "Figure 1. Measured activity of the ¹⁸F-FDG vial versus time",
      "kind": "line",
      "xLabel": "Time after calibration",
      "xUnit": "min",
      "yLabel": "Activity",
      "yUnit": "MBq",
      "seriesLabel": "Vial activity",
      "xValues": [
        0,
        110,
        220,
        330,
        440,
        550
      ],
      "yValues": [
        800,
        400,
        200,
        100,
        50,
        25
      ],
      "annotations": [
        {
          "xIndex": 1,
          "label": "one half-life (110 min)"
        }
      ]
    },
    "questions": [
      {
        "question": "The decay of fluorine-18 to oxygen-18 described in the passage proceeds by which mode?",
        "options": [
          "Alpha emission",
          "Beta-minus emission",
          "Gamma emission alone",
          "Positron emission"
        ],
        "correctAnswer": 3,
        "explanation": "The atomic number drops from 9 to 8 while the mass number stays 18, so a proton has been converted to a neutron — the signature of positron (beta-plus) emission, consistent with the annihilation photons PET detects. Alpha emission would lower the mass number by 4 and Z by 2. Beta-minus emission converts a neutron to a proton, which would raise Z from 9 to 10. Gamma emission alone changes neither Z nor the mass number, so it cannot turn fluorine into oxygen.",
        "skill": "Decay modes"
      },
      {
        "question": "What is the activity of the vial 330 minutes after calibration?",
        "options": [
          "50 MBq",
          "100 MBq",
          "200 MBq",
          "400 MBq"
        ],
        "correctAnswer": 1,
        "explanation": "330 min ÷ 110 min per half-life = 3 half-lives. Halving 800 MBq three times: 800 → 400 → 200 → 100 MBq. The 400 MBq value corresponds to only one half-life, 200 MBq to two, and 50 MBq to four — each reflects miscounting the number of 110-minute intervals in 330 minutes.",
        "skill": "Half-life arithmetic"
      },
      {
        "question": "Based on Figure 1, how much time must elapse after calibration for the vial's activity to fall to 25 MBq?",
        "options": [
          "330 min",
          "440 min",
          "550 min",
          "660 min"
        ],
        "correctAnswer": 2,
        "explanation": "800/25 = 32 = 2⁵, so five half-lives are required: 5 × 110 = 550 min, exactly where Figure 1 shows the curve reaching 25 MBq. The 330 min value (three half-lives) leaves 100 MBq and 440 min (four half-lives) leaves 50 MBq — both still too high. The 660 min value (six half-lives) would correspond to 12.5 MBq, an overshoot.",
        "skill": "Data interpretation"
      },
      {
        "question": "Which observation from a single annihilation event would the PET detector ring register as a valid coincidence?",
        "options": [
          "Two 511 keV photons striking detectors on nearly opposite sides of the ring at essentially the same time",
          "A single 1022 keV photon striking one detector",
          "Two 511 keV photons striking adjacent detectors on the same side of the ring",
          "An alpha particle and a photon detected in rapid succession"
        ],
        "correctAnswer": 0,
        "explanation": "Annihilation converts the electron–positron rest mass (1022 keV total) into two 511 keV photons; conserving the near-zero momentum of the pair forces the photons apart at nearly 180°, which is why the passage says coincidence events require opposite-side detectors. A single 1022 keV photon would violate momentum conservation for a pair essentially at rest. Two photons on the same side of the ring would carry large net momentum that the initial state did not have. No alpha particle is produced in beta-plus decay or annihilation.",
        "skill": "Positron annihilation"
      },
      {
        "question": "At calibration, the number of ¹⁸F nuclei in the vial was closest to:",
        "options": [
          "8 × 10¹⁰",
          "8 × 10¹¹",
          "8 × 10¹²",
          "8 × 10¹³"
        ],
        "correctAnswer": 2,
        "explanation": "Activity A = λN, so N = A/λ. First convert the half-life: 110 min × 60 s/min = 6600 s, so λ = 0.693/6600 ≈ 1.05 × 10⁻⁴ s⁻¹. Then N = (8.0 × 10⁸ decays/s)/(1.05 × 10⁻⁴ s⁻¹) ≈ 7.6 × 10¹², closest to 8 × 10¹². The values 8 × 10¹⁰ and 8 × 10¹¹ arise from unit slips such as leaving the half-life in minutes (λ ≈ 6.3 × 10⁻³ min⁻¹ mixed with a per-second activity gives ~10¹¹). The value 8 × 10¹³ overshoots by a factor of ten, as from a misplaced decimal in λ.",
        "skill": "Activity"
      }
    ],
    "needsReview": true
  },
  {
    "id": "cp2-07",
    "section": "chem-phys",
    "discipline": "physics",
    "title": "Photocell Threshold and Flame Emission",
    "passageText": "To characterize a metal cathode for use in a light sensor, students illuminated a vacuum photocell with a series of monochromatic sources of known photon energy $E = hf$ and measured the resulting photocurrent. For each source that produced a current, the students applied a retarding voltage and increased it until the current just vanished; this stopping potential $V_s$ satisfies $eV_s = KE_{max}$, the maximum kinetic energy of the ejected electrons. The photoelectric equation $KE_{max} = hf - \\phi$ relates these quantities to the metal's work function $\\phi$.\n\nFigure 1 plots $KE_{max}$ against photon energy. No photocurrent was detected for photon energies below 2.0 eV, even when the students used the most intense source available and doubled the exposure time. Above the threshold, doubling the intensity of any single source doubled the photocurrent but left the stopping potential unchanged.\n\nIn a second exercise, the students performed flame-emission spectroscopy. When a sodium salt was aspirated into the flame, the emitted light, dispersed by a grating, appeared not as a continuous band but as a set of narrow lines dominated by the yellow sodium doublet near 589 nm. A helpful conversion is $hc \\approx 1240 \\text{ eV·nm}$, so a photon's energy in electron-volts is $1240/\\lambda$ with $\\lambda$ in nanometers. The students noted that a sodium vapor cell placed in front of a white-light source produced dark absorption lines at the same wavelengths at which the flame had emitted.",
    "chart": {
      "title": "Figure 1. Maximum photoelectron kinetic energy versus photon energy",
      "kind": "line",
      "xLabel": "Photon energy",
      "xUnit": "eV",
      "yLabel": "KEmax",
      "yUnit": "eV",
      "seriesLabel": "Metal cathode",
      "xValues": [
        1,
        2,
        2.5,
        3,
        4,
        5
      ],
      "yValues": [
        0,
        0,
        0.5,
        1,
        2,
        3
      ],
      "annotations": [
        {
          "xIndex": 1,
          "label": "threshold: φ = 2.0 eV"
        }
      ]
    },
    "questions": [
      {
        "question": "Based on Figure 1, the work function of the cathode is:",
        "options": [
          "1.0 eV",
          "2.0 eV",
          "3.0 eV",
          "5.0 eV"
        ],
        "correctAnswer": 1,
        "explanation": "In KEmax = hf − φ, electrons are ejected with zero kinetic energy exactly when the photon energy equals φ. Figure 1 shows KEmax rising from zero at a photon energy of 2.0 eV, so φ = 2.0 eV. The 1.0 eV value misreads a sub-threshold point; 3.0 eV is the KEmax measured at 5.0 eV photons, not the threshold; 5.0 eV is the largest photon energy tested, not a property of the metal.",
        "skill": "Data interpretation"
      },
      {
        "question": "For a source above threshold, doubling the light intensity while keeping the photon energy fixed will:",
        "options": [
          "Double the photocurrent while leaving the maximum kinetic energy unchanged",
          "Double both the photocurrent and the maximum kinetic energy",
          "Increase the maximum kinetic energy while leaving the photocurrent unchanged",
          "Change neither the photocurrent nor the maximum kinetic energy"
        ],
        "correctAnswer": 0,
        "explanation": "Intensity sets the number of photons arriving per second, hence the number of electrons ejected per second (the current); the energy of each electron is fixed by the energy of a single photon, hf − φ. This matches the students' observation that doubling intensity doubled the current but left the stopping potential unchanged. Any answer in which KEmax rises with intensity describes the classical wave prediction that the photoelectric effect famously refuted, and a completely unchanged current would contradict the direct proportionality between photon flux and electron flux.",
        "skill": "Photoelectric effect"
      },
      {
        "question": "When the cathode is illuminated with 5.0 eV photons, the stopping potential is:",
        "options": [
          "1.5 V",
          "2.0 V",
          "3.0 V",
          "5.0 V"
        ],
        "correctAnswer": 2,
        "explanation": "KEmax = hf − φ = 5.0 − 2.0 = 3.0 eV, and since eVs = KEmax, the stopping potential is 3.0 V. The 2.0 V value confuses the stopping potential with the work function; 5.0 V uses the full photon energy without subtracting φ; 1.5 V halves the correct result with no physical basis.",
        "skill": "Stopping potential"
      },
      {
        "question": "The flame emitted narrow lines rather than a continuous spectrum because:",
        "options": [
          "The grating can transmit only a few discrete wavelengths",
          "The flame is too cool to produce all visible wavelengths",
          "Sodium atoms collide too rarely in the flame to exchange energy",
          "Electrons in sodium occupy quantized energy levels, so emitted photons carry only the discrete energy differences between levels"
        ],
        "correctAnswer": 3,
        "explanation": "Atomic emission lines arise because electronic energy is quantized: a photon is emitted only when an electron drops between two allowed levels, so only specific energies (and wavelengths) appear — and the matching dark absorption lines confirm the same level spacings. A grating disperses all wavelengths present; it does not select a few. Temperature affects which lines are excited and their intensity, not whether the spectrum is discrete. Collision frequency governs line broadening and intensity, not the existence of discrete lines.",
        "skill": "Atomic spectra"
      },
      {
        "question": "The energy of one photon of the 589 nm sodium line is closest to:",
        "options": [
          "1.05 eV",
          "2.1 eV",
          "3.1 eV",
          "4.2 eV"
        ],
        "correctAnswer": 1,
        "explanation": "E = 1240/λ = 1240/589 ≈ 2.1 eV (check: 2.1 × 589 ≈ 1237, consistent with 1240). The 1.05 eV and 4.2 eV values are factor-of-two slips (halving or doubling the correct answer); 3.1 eV would correspond to a 400 nm violet photon, not the yellow doublet.",
        "skill": "Photon energy"
      },
      {
        "question": "Suppose the students shine a 1.5 eV source of very high intensity on the cathode for one full hour. Based on the passage, the expected result is:",
        "options": [
          "A large photocurrent, because total absorbed energy accumulates over the hour",
          "A small photocurrent that grows slowly as electrons store energy",
          "A photocurrent only during the first few seconds of exposure",
          "No photocurrent at any time, because each photon carries less energy than the work function"
        ],
        "correctAnswer": 3,
        "explanation": "Photoemission is a one-photon, one-electron event: a 1.5 eV photon cannot supply the 2.0 eV needed to free an electron, no matter how many photons arrive or for how long — exactly what the students observed below threshold with their most intense source. Answers describing energy accumulating over time or electrons gradually storing energy invoke the classical wave picture that the experiment rules out. A brief initial current has no mechanism; sub-threshold light ejects no electrons at any time.",
        "skill": "Experimental design"
      }
    ],
    "needsReview": true
  },
  {
    "id": "cp2-08",
    "section": "chem-phys",
    "discipline": "physics",
    "title": "Prescribing Lenses for Refractive Error",
    "passageText": "An optometry clinic assessed three adult patients whose refractive errors are summarized in Figure 1. For each patient the clinicians measured the far point (the greatest distance at which an object is seen clearly with the eye relaxed) and the near point (the closest distance of clear focus with maximal accommodation). A normal eye has a far point at infinity and a near point of about 25 cm.\n\nCorrective lenses were modeled as thin lenses worn essentially at the eye, with power in diopters given by $P = \\frac{1}{f}$, where $f$ is the focal length in meters. To correct myopia, a lens must take light from a distant object and form a virtual image at the patient's uncorrected far point, so that the relaxed eye can focus it. To allow a hyperopic patient to read, a lens must take an object held at the desired reading distance and form a virtual image no closer than the patient's uncorrected near point. Image distances for virtual images are negative in the convention used, and powers of thin lenses in contact add.\n\nPatient A cannot resolve distant street signs but reads fine print held close without difficulty. Patient B sees distant objects clearly but must hold a menu at arm's length (about 100 cm) to read it, and wishes to read comfortably at 25 cm. Patient C, examined years earlier, wears a prescription of $-4.0$ D and reports clear distance vision through the lenses; the chart from that visit omits the uncorrected far point.",
    "figure": "| Patient | Uncorrected far point | Uncorrected near point | Prescription |\n|---------|----------------------|------------------------|--------------|\n| A | 50 cm | 12.5 cm | to be determined |\n| B | normal (infinity) | 100 cm | to be determined (reading) |\n| C | not recorded | 20 cm | −4.0 D |",
    "questions": [
      {
        "question": "The lens that corrects Patient A's distance vision is best described as:",
        "options": [
          "A diverging lens that forms a virtual image of distant objects at the patient's far point",
          "A converging lens that forms a real image of distant objects on the retina",
          "A diverging lens that forms a real image of distant objects at the patient's near point",
          "A converging lens that moves the patient's near point closer to the eye"
        ],
        "correctAnswer": 0,
        "explanation": "Patient A is myopic (far point at 50 cm rather than infinity): the eye focuses distant light in front of the retina, so the corrective lens must weaken convergence — a diverging lens — placing a virtual image of distant objects at the 50 cm far point where the relaxed eye can handle it. A converging lens would worsen myopia by adding convergence. A diverging lens cannot form a real image of a distant object, and the near point is irrelevant to the distance correction.",
        "skill": "Lens types"
      },
      {
        "question": "The power of the lens that corrects Patient A's distance vision is:",
        "options": [
          "−4.0 D",
          "−2.0 D",
          "−0.5 D",
          "+2.0 D"
        ],
        "correctAnswer": 1,
        "explanation": "For a distant object (object distance effectively infinite), the lens must form its image at the far point: image distance = −50 cm = −0.50 m (virtual). Then P = 1/f = 1/di = 1/(−0.50) = −2.0 D. The −4.0 D value mistakenly inverts 0.25 m, importing the standard 25 cm near point where the far point belongs. The −0.5 D value takes the far point in meters as the power directly instead of its reciprocal. The +2.0 D value has the right magnitude but the wrong sign — a converging lens would push the image beyond the far point, not onto it.",
        "skill": "Lens power"
      },
      {
        "question": "The reading lens that lets Patient B see print held at 25 cm has a power of:",
        "options": [
          "+1.0 D",
          "+2.0 D",
          "+3.0 D",
          "+4.0 D"
        ],
        "correctAnswer": 2,
        "explanation": "The lens must image an object at do = 0.25 m as a virtual image at the patient's near point, di = −1.00 m. Using 1/f = 1/do + 1/di = 1/0.25 + 1/(−1.00) = 4.0 − 1.0 = 3.0, so P = +3.0 D. The +4.0 D value keeps only the 1/0.25 term, forgetting that the eye itself can focus an image at 100 cm; +1.0 D keeps only the 1/1.00 term; +2.0 D is the average of those two partial answers and corresponds to no correct optical setup.",
        "skill": "Lens power"
      },
      {
        "question": "Based on Figure 1 and Patient C's prescription, Patient C's uncorrected far point is:",
        "options": [
          "25 cm",
          "40 cm",
          "50 cm",
          "100 cm"
        ],
        "correctAnswer": 0,
        "explanation": "A distance prescription of −4.0 D forms images of distant objects at di = 1/P = 1/(−4.0) = −0.25 m, so the uncorrected far point must be 25 cm — reversing the calculation used for Patient A. The 50 cm value belongs to Patient A (a −2.0 D correction), and 100 cm would correspond to −1.0 D. The 40 cm value comes from inverting 4.0 incorrectly (2.5 m confused with 0.25 m and then misconverted).",
        "skill": "Data interpretation"
      },
      {
        "question": "Before finalizing Patient A's prescription, the clinician wants to confirm that the blurred distance vision is refractive rather than caused by an opacity such as an early cataract. Which bedside check best makes this distinction?",
        "options": [
          "Having the patient view the chart under brighter room lighting",
          "Having the patient view the chart with both eyes open instead of one",
          "Repeating the measurement with the chart at half the distance",
          "Having the patient view the chart through a small pinhole and checking whether acuity improves"
        ],
        "correctAnswer": 3,
        "explanation": "A pinhole admits only rays near the optic axis, shrinking the blur circle produced by a focusing (refractive) error, so acuity improves markedly if the problem is refractive — but a pinhole cannot undo light scattered by an opacity, so acuity stays poor with a cataract. Brighter lighting mostly changes pupil size and contrast and does not cleanly separate the two causes. Binocular viewing tests eye coordination, not the optics of the blurred eye. Halving the chart distance changes the demand on focusing without distinguishing why distant objects blur.",
        "skill": "Experimental design"
      }
    ],
    "needsReview": true
  },
  {
    "id": "cp2-09",
    "section": "chem-phys",
    "discipline": "physics",
    "title": "Capacitive Discharge in a Defibrillator",
    "passageText": "A biomedical engineering team bench-tested a defibrillator, a device that stores electrical energy in a capacitor and delivers it rapidly across the chest to reset a fibrillating heart. The test unit used a capacitor of capacitance $C = 100\\ \\mu\\text{F}$ charged by an internal supply to $V_0 = 2000$ V. The stored energy is $E = \\frac{1}{2}CV^2$ and the stored charge is $Q = CV$.\n\nTo simulate a patient, the paddles were connected across a $50\\ \\Omega$ resistor representing transthoracic resistance, and the capacitor voltage was recorded during discharge with a high-impedance probe (Figure 1). The decay followed $V(t) = V_0 e^{-t/\\tau}$ with time constant $\\tau = RC$. Useful values: $e^{-1} \\approx 0.37$ and $e^{-2} \\approx 0.135$.\n\nBecause the energy delivered to the load scales with the square of the voltage, most of the stored energy leaves the capacitor early in the discharge. The team also examined the unit's safety systems: when the operator aborts a shock, the capacitor is not left charged but is instead drained through an internal high-resistance bleed resistor, which dissipates the energy slowly inside the chassis rather than across the paddles. The engineers noted that a patient with higher transthoracic resistance stretches the discharge over a longer time, which changes the waveform shape even though the initially stored energy is the same.",
    "chart": {
      "title": "Figure 1. Capacitor voltage during discharge through the 50 Ω test load",
      "kind": "line",
      "xLabel": "Time",
      "xUnit": "ms",
      "yLabel": "Capacitor voltage",
      "yUnit": "V",
      "seriesLabel": "V(t), 50 Ω load",
      "xValues": [
        0,
        5,
        10,
        15,
        20
      ],
      "yValues": [
        2000,
        736,
        271,
        100,
        37
      ],
      "annotations": [
        {
          "xIndex": 1,
          "label": "t = τ = RC = 5 ms"
        }
      ]
    },
    "questions": [
      {
        "question": "The energy stored in the fully charged capacitor is:",
        "options": [
          "100 J",
          "200 J",
          "400 J",
          "800 J"
        ],
        "correctAnswer": 1,
        "explanation": "E = ½CV² = ½ × (1.0 × 10⁻⁴ F) × (2000 V)² = ½ × 10⁻⁴ × 4 × 10⁶ = ½ × 400 = 200 J. The 400 J value omits the factor of ½ (computing CV² or QV instead); 800 J doubles instead of halving; 100 J introduces an extra factor of ½ beyond the formula.",
        "skill": "Capacitor energy"
      },
      {
        "question": "The time constant of the discharge through the 50 Ω test load is:",
        "options": [
          "5 ms",
          "10 ms",
          "20 ms",
          "50 ms"
        ],
        "correctAnswer": 0,
        "explanation": "τ = RC = 50 Ω × 1.0 × 10⁻⁴ F = 5.0 × 10⁻³ s = 5 ms, matching the annotation in Figure 1. The 10 ms and 20 ms values are 2τ and 4τ — the latter is roughly the time for near-complete discharge, not the time constant. The 50 ms value comes from a decimal slip in converting the capacitance.",
        "skill": "RC time constant"
      },
      {
        "question": "According to the passage and Figure 1, the capacitor voltage 5 ms into the discharge is closest to:",
        "options": [
          "270 V",
          "500 V",
          "740 V",
          "1000 V"
        ],
        "correctAnswer": 2,
        "explanation": "At t = τ, V = V₀e⁻¹ ≈ 2000 × 0.37 = 740 V, exactly the plotted value (736 V). The 1000 V value assumes the voltage halves each time constant, but one τ leaves 37%, not 50%. The 270 V value is the two-time-constant point (2000 × 0.135), reached at 10 ms. The 500 V value assumes a quarter remains, which matches no point on the exponential at 5 ms.",
        "skill": "RC discharge"
      },
      {
        "question": "If the same capacitor were instead charged to 4000 V, the stored energy would:",
        "options": [
          "Double",
          "Quadruple",
          "Increase eightfold",
          "Stay the same, because capacitance is unchanged"
        ],
        "correctAnswer": 1,
        "explanation": "E = ½CV² depends on the square of the voltage, so doubling V multiplies the energy by 2² = 4 (from 200 J to 800 J). A mere doubling would follow if energy were linear in V, as charge Q = CV is. An eightfold increase would require a cubic dependence. The energy certainly changes even at fixed capacitance, since V changed.",
        "skill": "Capacitor energy"
      },
      {
        "question": "The charge stored on the fully charged capacitor is:",
        "options": [
          "0.05 C",
          "0.1 C",
          "0.2 C",
          "0.4 C"
        ],
        "correctAnswer": 2,
        "explanation": "Q = CV = (1.0 × 10⁻⁴ F) × (2000 V) = 0.2 C. The 0.1 C value halves the result, importing the ½ that belongs only in the energy formula; 0.4 C doubles it; 0.05 C halves it twice.",
        "skill": "Capacitance"
      },
      {
        "question": "Using Figure 1, the fraction of the initially stored energy that has left the capacitor by t = 5 ms is closest to:",
        "options": [
          "14%",
          "37%",
          "63%",
          "86%"
        ],
        "correctAnswer": 3,
        "explanation": "Stored energy scales as V², so the fraction remaining at t = τ is (V/V₀)² = (e⁻¹)² = e⁻² ≈ 0.135, meaning about 1 − 0.135 ≈ 0.86, or 86%, has been delivered — confirming the passage's point that most energy leaves early. The 63% value treats energy like voltage or charge (1 − e⁻¹), forgetting the square. The 37% value is the fraction of voltage remaining, not energy delivered. The 14% value is the energy still stored, not the energy that has left.",
        "skill": "Data interpretation"
      }
    ],
    "needsReview": true
  },
  {
    "id": "cp2-10",
    "section": "chem-phys",
    "discipline": "physics",
    "title": "Torque Balance in the Forearm",
    "passageText": "A kinesiology laboratory modeled the human forearm as a rigid lever to study elbow loading during isometric holds. Each subject sat with the upper arm vertical and the forearm horizontal, palm up, holding a metal ball in the hand. In the model, the forearm pivots at the elbow joint; the biceps tendon inserts 4.0 cm from the pivot and, in the baseline condition, pulls vertically upward. The weight of the forearm plus hand, 20 N, acts at the center of mass 16 cm from the pivot, and the ball's weight acts 32 cm from the pivot at the center of the palm.\n\nBecause the hold is isometric, the forearm is in static equilibrium: the net torque about the elbow and the net force on the forearm are both zero. From surface electromyography calibrated against the model, the investigators estimated the biceps tension required to support ball weights from 0 to 40 N; the results, which fell on a straight line, are plotted in Figure 1.\n\nIn a second condition, subjects lowered the upper arm so that the biceps tendon pulled at $30°$ to the horizontal forearm rather than vertically. Only the component of the tension perpendicular to the forearm, $T\\sin\\theta$, contributes torque about the elbow. The investigators used the model to compare muscle tension and joint reaction force across conditions, noting that the muscle must generate forces many times larger than the weight of the objects held — the price the limb pays for a design in which a short muscle contraction produces a large, fast sweep of the hand.",
    "chart": {
      "title": "Figure 1. Estimated biceps tension versus weight of ball held in the hand",
      "kind": "line",
      "xLabel": "Ball weight",
      "xUnit": "N",
      "yLabel": "Biceps tension",
      "yUnit": "N",
      "seriesLabel": "Baseline (vertical pull)",
      "xValues": [
        0,
        10,
        20,
        30,
        40
      ],
      "yValues": [
        80,
        160,
        240,
        320,
        400
      ],
      "annotations": [
        {
          "xIndex": 0,
          "label": "80 N supports the forearm alone"
        }
      ]
    },
    "questions": [
      {
        "question": "In the baseline condition, the biceps tension required to hold the 40 N ball is:",
        "options": [
          "320 N",
          "400 N",
          "800 N",
          "1600 N"
        ],
        "correctAnswer": 1,
        "explanation": "Balancing torques about the elbow: T × 0.040 m = (20 N)(0.16 m) + (40 N)(0.32 m) = 3.2 + 12.8 = 16.0 N·m, so T = 16.0/0.040 = 400 N, matching Figure 1. The 320 N value omits the forearm's own weight (12.8/0.040). The 800 N value doubles the answer, as would happen by mistakenly applying the 30° condition's sin 30° = ½ here. The 1600 N value doubles it again.",
        "skill": "Torque"
      },
      {
        "question": "As a lever system, the forearm in this task is best classified as:",
        "options": [
          "A first-class lever, like a seesaw",
          "A second-class lever, like a wheelbarrow",
          "A third-class lever, with the effort applied between the fulcrum and the load",
          "Not a lever, because the biceps force is not applied at the end of the forearm"
        ],
        "correctAnswer": 2,
        "explanation": "The effort (biceps, 4 cm from the pivot) acts between the fulcrum (elbow) and the load (ball, 32 cm out) — the defining arrangement of a third-class lever, which trades force for speed and range of motion as the passage notes. A first-class lever puts the fulcrum between effort and load; a second-class lever puts the load between fulcrum and effort. A lever's effort need not act at its end, so the arrangement is still a lever.",
        "skill": "Lever classes"
      },
      {
        "question": "In the baseline condition with the 40 N ball, the magnitude of the reaction force at the elbow joint is:",
        "options": [
          "60 N",
          "340 N",
          "400 N",
          "460 N"
        ],
        "correctAnswer": 1,
        "explanation": "With all forces vertical, force balance gives: biceps up (400 N) must equal the downward forces — forearm weight (20 N) + ball (40 N) + joint reaction. So the joint force = 400 − 20 − 40 = 340 N, directed downward on the forearm at the elbow. The 400 N value is the biceps tension itself; 460 N adds all the forces (400 + 60) instead of balancing them; 60 N is just the sum of the weights, ignoring the muscle entirely.",
        "skill": "Static equilibrium"
      },
      {
        "question": "In the second condition, with the tendon pulling at 30° to the forearm and the same 40 N ball, the required biceps tension becomes:",
        "options": [
          "200 N",
          "400 N",
          "460 N",
          "800 N"
        ],
        "correctAnswer": 3,
        "explanation": "Only the perpendicular component T sin 30° produces torque: T sin 30° × 0.040 = 16.0 N·m. Since sin 30° = ½, T × 0.020 = 16.0, so T = 800 N — twice the baseline tension. The 400 N value ignores the angle. The 200 N value multiplies by sin 30° instead of dividing. The 460 N value comes from dividing by cos 30° ≈ 0.87 instead of sin 30°.",
        "skill": "Force decomposition"
      },
      {
        "question": "The slope of the line in Figure 1 is 8 N of biceps tension per newton of ball weight. This slope is best interpreted as:",
        "options": [
          "The ratio of the load's moment arm to the muscle's moment arm (32 cm / 4 cm), fixed by the geometry of the forearm",
          "The mechanical advantage of the forearm, showing that the muscle amplifies the force delivered to the hand eightfold",
          "The weight of the forearm expressed in dimensionless form",
          "A coincidence of the particular weights chosen, expected to change if different balls were used"
        ],
        "correctAnswer": 0,
        "explanation": "From the torque balance, T = (20 × 0.16)/0.04 + W × (0.32/0.04) = 80 + 8W: each added newton of ball weight requires 32/4 = 8 additional newtons of tension, a pure geometric ratio of moment arms — which is why the data are linear with slope 8 and intercept 80 N. Calling 8 the mechanical advantage inverts the situation: the muscle exerts more force than the hand supports, so the mechanical advantage is 1/8, and the muscle does not amplify force. The forearm's weight sets the 80 N intercept, not the slope. The slope is set by geometry, so different ball weights would fall on the same line.",
        "skill": "Data interpretation"
      }
    ],
    "needsReview": true
  },
  {
    "id": "cp2-11",
    "section": "chem-phys",
    "discipline": "organic chemistry",
    "title": "Purifying a Borohydride Reduction Mixture",
    "passageText": "A student reduced benzophenone with sodium borohydride ($\\text{NaBH}_4$) in methanol to prepare benzhydrol (diphenylmethanol). After aqueous workup, thin-layer chromatography (TLC) of the crude oil on silica plates revealed three UV-active spots: the desired benzhydrol, unreacted benzophenone, and biphenyl, a nonpolar impurity present in the commercial benzophenone starting material.\n\nTo choose a column solvent, the student ran the crude mixture in two mobile phases and measured the retention factor ($R_f$) of each component (Table 1). Silica gel is a polar stationary phase whose surface silanol groups interact with analytes chiefly through hydrogen bonding and dipole–dipole forces; in this normal-phase mode the mobile phase (a hexanes/ethyl acetate blend) is less polar than the stationary phase.\n\nThe student then loaded the crude material onto a silica flash column and eluted with 9:1 hexanes:ethyl acetate, collecting sequential fractions. Each fraction was spotted on TLC alongside the crude mixture, developed in the same 9:1 system, and visualized under UV light. Fractions containing a single spot were combined and concentrated by rotary evaporation. In a planned follow-up, the same crude mixture will be analyzed on a reverse-phase C18 column, in which the stationary phase is a nonpolar hydrocarbon layer and the mobile phase is a polar water/acetonitrile blend.",
    "figure": "**Table 1.** TLC retention factors on silica (UV visualization)\n\n| Compound | Rf (9:1 hexanes:EtOAc) | Rf (7:3 hexanes:EtOAc) |\n|---|---|---|\n| Biphenyl | 0.78 | 0.90 |\n| Benzophenone | 0.35 | 0.60 |\n| Benzhydrol | 0.10 | 0.32 |",
    "questions": [
      {
        "question": "Benzhydrol shows the lowest Rf of the three compounds on silica TLC primarily because:",
        "options": [
          "It has the lowest molecular weight of the three compounds",
          "Its hydroxyl group hydrogen-bonds strongly to the polar silica surface",
          "It is the most soluble compound in hexanes",
          "It absorbs UV light more strongly than the other two compounds"
        ],
        "correctAnswer": 1,
        "explanation": "Normal-phase silica retains analytes in proportion to their polarity, and benzhydrol's O–H group can both donate and accept hydrogen bonds with surface silanols, so it adsorbs most tightly and travels least (Rf = 0.10). Molecular weight does not set retention order in adsorption chromatography — biphenyl (154 g/mol) and benzhydrol (184 g/mol) are close in mass yet have very different Rf values. High hexanes solubility would increase, not decrease, movement with the mobile phase. UV absorptivity affects visualization only, not migration.",
        "skill": "Intermolecular forces"
      },
      {
        "question": "During elution of the flash column with 9:1 hexanes:ethyl acetate, the expected order in which the compounds emerge is:",
        "options": [
          "Benzhydrol, then benzophenone, then biphenyl",
          "Benzophenone, then benzhydrol, then biphenyl",
          "Biphenyl, then benzhydrol, then benzophenone",
          "Biphenyl, then benzophenone, then benzhydrol"
        ],
        "correctAnswer": 3,
        "explanation": "In normal-phase column chromatography the compound with the highest TLC Rf elutes first because it is held least by the silica. Table 1 gives Rf 0.78 (biphenyl) > 0.35 (benzophenone) > 0.10 (benzhydrol), so the elution order is biphenyl, benzophenone, benzhydrol. The sequence beginning with benzhydrol reverses the correct order (that would apply to reverse phase). The sequence beginning with benzophenone has no basis in the Rf data. The sequence placing benzhydrol before benzophenone inverts the relative polarity of the ketone and the alcohol.",
        "skill": "Chromatography"
      },
      {
        "question": "Comparing the two solvent systems in Table 1, which statement best explains the change in Rf values when the ethyl acetate fraction is increased from 9:1 to 7:3?",
        "options": [
          "All three Rf values increase because the more polar mobile phase competes more effectively with the analytes for the silica surface",
          "All three Rf values decrease because polar solvents anchor the analytes to the silica",
          "Only benzhydrol's Rf changes because it is the only compound bearing a hydroxyl group",
          "The Rf values exceed 1 for all three compounds in the more polar system"
        ],
        "correctAnswer": 0,
        "explanation": "Table 1 shows every Rf rising in the 7:3 system (0.78 to 0.90, 0.35 to 0.60, 0.10 to 0.32): a more polar mobile phase displaces analytes from silica binding sites, so all compounds travel farther. The claim that Rf values decrease contradicts the data in the table. The claim that only benzhydrol shifts is also contradicted — biphenyl and benzophenone move as well, since solvent strength affects every analyte's partitioning. An Rf greater than 1 is physically impossible; a spot cannot outrun the solvent front.",
        "skill": "Data interpretation"
      },
      {
        "question": "When the crude mixture is analyzed on the reverse-phase C18 column, which compound should elute first?",
        "options": [
          "Benzhydrol, because the most polar compound interacts least with the nonpolar stationary phase",
          "Biphenyl, because elution order is a fixed property of each compound",
          "Benzophenone, because intermediate polarity always elutes first",
          "All three compounds co-elute, because C18 columns cannot separate aromatic compounds"
        ],
        "correctAnswer": 0,
        "explanation": "Reverse phase inverts the retention logic: the stationary phase is nonpolar hydrocarbon, so nonpolar analytes are retained longest and the most polar analyte, benzhydrol, spends the most time in the polar mobile phase and elutes first. Elution order is not a fixed property of a compound — it depends on the phase system, so biphenyl (first off silica) elutes last here. Intermediate polarity gives intermediate retention in either mode, never automatic first elution. C18 columns separate aromatic compounds routinely, provided their polarities differ.",
        "skill": "Chromatography"
      },
      {
        "question": "A TLC plate developed in the 9:1 system shows a single spot 2.1 cm from the origin with the solvent front 6.0 cm from the origin. The fraction most likely contains:",
        "options": [
          "Biphenyl",
          "Benzophenone",
          "Benzhydrol",
          "A mixture of biphenyl and benzhydrol"
        ],
        "correctAnswer": 1,
        "explanation": "Rf = (distance traveled by spot)/(distance traveled by solvent front) = 2.1/6.0 = 0.35, matching benzophenone's Rf in the 9:1 system (Table 1). Biphenyl would appear at 0.78 x 6.0 = 4.7 cm, and benzhydrol at 0.10 x 6.0 = 0.6 cm, neither of which matches 2.1 cm. A biphenyl/benzhydrol mixture would give two distinct spots (near 4.7 cm and 0.6 cm), not a single spot at 2.1 cm.",
        "skill": "Rf calculation"
      }
    ],
    "needsReview": true
  },
  {
    "id": "cp2-12",
    "section": "chem-phys",
    "discipline": "organic chemistry",
    "title": "An Unknown Carbonyl Compound by IR and NMR",
    "passageText": "A colorless liquid isolated from a fermentation extract was submitted for structure determination. Combustion analysis and mass spectrometry established the molecular formula $\\text{C}_4\\text{H}_8\\text{O}_2$ (M = 88 g/mol). Four candidate structures were considered: butanoic acid, ethyl acetate, methyl propanoate, and 2-butanone.\n\nThe infrared spectrum showed a strong, sharp absorption at 1740 cm$^{-1}$ and sharp C–H stretches near 2980 cm$^{-1}$. Notably absent were any broad absorption between 2500 and 3300 cm$^{-1}$ and any absorption above 3300 cm$^{-1}$. For reference, simple dialkyl ketones absorb near 1715 cm$^{-1}$, esters near 1740 cm$^{-1}$, and carboxylic acids near 1710 cm$^{-1}$ accompanied by a very broad O–H stretch spanning 2500–3300 cm$^{-1}$.\n\nThe $^1$H-NMR spectrum (CDCl$_3$, 400 MHz) contained exactly three signals, summarized in Table 1: a quartet at 4.12 ppm integrating to 2H, a singlet at 2.05 ppm integrating to 3H, and a triplet at 1.26 ppm integrating to 3H. The analysts noted two useful chemical-shift benchmarks: a CH$_2$ or CH$_3$ group bonded directly to an ester oxygen typically resonates at 3.6–4.4 ppm, whereas a CH$_2$ or CH$_3$ group bonded to a carbonyl carbon typically resonates at 2.0–2.6 ppm. No signal was observed downfield of 5 ppm.",
    "figure": "**Table 1.** ¹H-NMR data for the unknown (CDCl₃, 400 MHz)\n\n| δ (ppm) | Multiplicity | Integration |\n|---|---|---|\n| 4.12 | quartet | 2H |\n| 2.05 | singlet | 3H |\n| 1.26 | triplet | 3H |",
    "questions": [
      {
        "question": "Taken alone, the IR data (strong 1740 cm⁻¹ band, no broad 2500–3300 cm⁻¹ absorption) are most consistent with which functional group class?",
        "options": [
          "A carboxylic acid",
          "A ketone",
          "An ester",
          "An alcohol"
        ],
        "correctAnswer": 2,
        "explanation": "The passage's benchmarks place ester carbonyls near 1740 cm⁻¹, exactly where the strong band appears, and esters have no O–H, consistent with the clean 2500–3300 cm⁻¹ region. A carboxylic acid would show the diagnostic very broad O–H envelope from 2500–3300 cm⁻¹, which is explicitly absent. A ketone would absorb near 1715 cm⁻¹, about 25 cm⁻¹ lower than observed. An alcohol would show a broad O–H stretch above 3200 cm⁻¹ and no strong 1740 cm⁻¹ carbonyl band at all.",
        "skill": "IR spectroscopy"
      },
      {
        "question": "Which candidate structure is consistent with all of the spectroscopic data?",
        "options": [
          "Butanoic acid",
          "Ethyl acetate",
          "Methyl propanoate",
          "2-Butanone"
        ],
        "correctAnswer": 1,
        "explanation": "Ethyl acetate (CH₃CO–OCH₂CH₃) predicts exactly the observed pattern: an acetyl CH₃ singlet near 2.05 ppm (bonded to the carbonyl carbon), an OCH₂ quartet near 4.12 ppm (bonded to the ester oxygen, split by the adjacent CH₃), and a CH₃ triplet at 1.26 ppm — plus the 1740 cm⁻¹ ester carbonyl. Butanoic acid is excluded by the missing broad O–H stretch and the absence of a downfield acid proton. Methyl propanoate would place its 3H singlet near 3.7 ppm (OCH₃) and its 2H quartet near 2.3 ppm, the reverse of what is observed. 2-Butanone has the formula C₄H₈O, not C₄H₈O₂, and its carbonyl would absorb near 1715 cm⁻¹.",
        "skill": "Structure elucidation"
      },
      {
        "question": "The signal at 4.12 ppm appears as a quartet because the protons producing it:",
        "options": [
          "Are coupled to two equivalent neighboring protons",
          "Are coupled to three equivalent neighboring protons",
          "Are coupled to four equivalent neighboring protons",
          "Exchange rapidly with trace water in the solvent"
        ],
        "correctAnswer": 1,
        "explanation": "By the n + 1 rule, a quartet (4 lines) requires n = 3 equivalent neighboring protons: the OCH₂ group sits next to the CH₃ of the ethyl group, and 3 + 1 = 4 lines. Coupling to two equivalent neighbors would give a triplet (2 + 1 = 3 lines), and coupling to four equivalent neighbors would give a quintet (4 + 1 = 5 lines). Rapid exchange with water broadens or collapses signals (as with O–H protons); it does not generate a clean quartet.",
        "skill": "NMR splitting"
      },
      {
        "question": "How many degrees of unsaturation does the molecular formula C₄H₈O₂ contain?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswer": 0,
        "explanation": "Degrees of unsaturation = (2C + 2 − H)/2 for a C,H,O compound (oxygen is ignored) = (2·4 + 2 − 8)/2 = (8 + 2 − 8)/2 = 2/2 = 1, accounted for by the single C=O π bond. A value of 2 would require an additional ring or π bond that the saturated ethyl and methyl signals rule out; 3 and 4 would demand multiple rings or multiple π bonds, impossible with 8 hydrogens on a C₄ skeleton bearing one carbonyl.",
        "skill": "Molecular formula"
      },
      {
        "question": "Which feature of the ¹H-NMR data most directly rules out methyl propanoate?",
        "options": [
          "The total integration corresponds to eight protons",
          "No 3H singlet appears near 3.7 ppm, where a methyl ester's OCH₃ group would resonate",
          "The triplet at 1.26 ppm integrates to three protons",
          "The spectrum contains exactly three signals"
        ],
        "correctAnswer": 1,
        "explanation": "Methyl propanoate (CH₃CH₂CO–OCH₃) must show its OCH₃ as a 3H singlet in the 3.6–4.4 ppm oxygen-bonded window (about 3.7 ppm); the observed singlet instead sits at 2.05 ppm, the carbonyl-bonded region, so the methyl ester is excluded. Eight total protons fit both esters equally, so integration totals discriminate nothing. A 3H triplet near 1.1–1.3 ppm is predicted for both candidates (each has an ethyl or ethyl-like CH₃). Exactly three signals is likewise expected for both isomers, so signal count alone cannot distinguish them.",
        "skill": "Data interpretation"
      },
      {
        "question": "If the unknown had instead been butanoic acid, which additional observation would be expected?",
        "options": [
          "A sharp 3H singlet near 2.0 ppm",
          "A 2H quartet near 4.1 ppm",
          "A 3H triplet near 1.0 ppm",
          "A broad IR absorption spanning 2500–3300 cm⁻¹ and a ¹H signal near 12 ppm"
        ],
        "correctAnswer": 3,
        "explanation": "Carboxylic acids show a hallmark very broad O–H stretch across 2500–3300 cm⁻¹ (stated in the passage) and a strongly deshielded, often broad COOH proton near 10–12 ppm — neither of which appears in the actual spectra. A 3H singlet near 2.0 ppm is not expected for butanoic acid, whose CH₃ terminates a propyl chain and is split into a triplet. A quartet near 4.1 ppm requires a CH₂ on an ester oxygen, which an acid lacks (its α-CH₂ would appear near 2.3 ppm). A 3H triplet near 1.0 ppm would indeed occur in butanoic acid, but it is also present in the actual data, so it would not be an additional distinguishing observation.",
        "skill": "Spectral prediction"
      }
    ],
    "needsReview": true
  },
  {
    "id": "cp2-13",
    "section": "chem-phys",
    "discipline": "biochemistry",
    "title": "Titration and Focusing of Glutamate",
    "passageText": "Amino acids are polyprotic: each ionizable group titrates near its own $\\text{p}K_a$, and the isoelectric point (pI) — the pH at which the molecule carries zero net charge — is the average of the two $\\text{p}K_a$ values flanking the neutral species. Researchers characterized glutamate, whose three ionizable groups have $\\text{p}K_a$ values of 2.1 ($\\alpha$-carboxyl), 4.1 (side-chain carboxyl), and 9.5 ($\\alpha$-amino), by titrating the fully protonated form with standardized NaOH and recording pH as a function of equivalents of base added (Figure 1). For comparison, glycine ($\\text{p}K_a$ values 2.3 and 9.6, pI 6.0) and lysine ($\\text{p}K_a$ values 2.2, 9.0, and 10.5, pI 9.75) were titrated in parallel.\n\nThe glutamate curve showed three buffering plateaus, centered at 0.5, 1.5, and 2.5 equivalents of base, separated by steep rises. Between the first two plateaus, at exactly 1.0 equivalent, the dominant species carried one negative and one positive charge in equal measure — zero net charge.\n\nThe three amino acids were then separated by two electrophoretic methods. In isoelectric focusing (IEF), a stable pH gradient is cast in the gel; each molecule migrates until it reaches the pH equal to its pI, where its net charge — and therefore its electrophoretic force — falls to zero. In conventional zone electrophoresis, the gel is held at a single uniform pH (here 6.0) and molecules move according to the sign and magnitude of their net charge at that pH: anions toward the anode, cations toward the cathode.",
    "chart": {
      "title": "Figure 1. Titration of fully protonated glutamate with NaOH",
      "kind": "line",
      "xLabel": "Equivalents of base added",
      "yLabel": "pH",
      "seriesLabel": "Glutamate titration",
      "xValues": [
        0,
        0.5,
        1,
        1.5,
        2,
        2.5,
        3
      ],
      "yValues": [
        1.2,
        2.1,
        3.1,
        4.1,
        6.8,
        9.5,
        11.4
      ],
      "annotations": [
        {
          "xIndex": 1,
          "label": "pKa1 = 2.1"
        },
        {
          "xIndex": 3,
          "label": "pKa2 = 4.1 (side chain)"
        },
        {
          "xIndex": 5,
          "label": "pKa3 = 9.5"
        }
      ]
    },
    "questions": [
      {
        "question": "The isoelectric point of glutamate is closest to:",
        "options": [
          "3.1",
          "5.8",
          "6.8",
          "9.5"
        ],
        "correctAnswer": 0,
        "explanation": "For an acidic amino acid the neutral (zwitterionic) species is flanked by the two carboxyl pKa values, so pI = (2.1 + 4.1)/2 = 6.2/2 = 3.1. The value 5.8 comes from wrongly averaging pKa1 and pKa3, (2.1 + 9.5)/2 = 5.8, which ignores the side chain. The value 6.8 averages pKa2 and pKa3, (4.1 + 9.5)/2 = 6.8, the pair flanking a species that already carries a net −1 charge. The value 9.5 is simply pKa3, a single group's pKa, not an isoelectric point.",
        "skill": "pI calculation"
      },
      {
        "question": "At pH 7.0, the net charge on glutamate is:",
        "options": [
          "−2",
          "−1",
          "0",
          "+1"
        ],
        "correctAnswer": 1,
        "explanation": "At pH 7.0, both carboxyl groups (pKa 2.1 and 4.1, each far below 7) are deprotonated, contributing −1 each, while the α-amino group (pKa 9.5, above 7) remains protonated at +1. Net charge = (−1) + (−1) + (+1) = −1. A charge of −2 would require the amino group to be deprotonated, which happens only above pH ~9.5. Zero net charge occurs only at the pI of 3.1. A charge of +1 describes the fully protonated form found below pH ~2.",
        "skill": "Net charge"
      },
      {
        "question": "A glutamate solution would buffer most effectively at which of the following pH values?",
        "options": [
          "5.5",
          "6.5",
          "7.4",
          "9.5"
        ],
        "correctAnswer": 3,
        "explanation": "Buffering capacity is maximal when pH = pKa of an ionizable group, where the conjugate acid and base forms are present in equal amounts; 9.5 matches the α-amino pKa exactly, placing it on the flat plateau at 2.5 equivalents in Figure 1. The values 5.5, 6.5, and 7.4 all fall in the steep region between pKa2 (4.1) and pKa3 (9.5) — more than a full pH unit from any pKa — where Figure 1 shows the pH climbing rapidly with tiny additions of base, the signature of poor buffering.",
        "skill": "Buffers"
      },
      {
        "question": "During zone electrophoresis at uniform pH 6.0, which amino acid migrates toward the anode?",
        "options": [
          "Glycine, because it is the smallest of the three",
          "Lysine, because its side chain is ionizable",
          "Glutamate, because pH 6.0 is above its pI so it carries net negative charge",
          "None of the three, because amino acids are zwitterions at all pH values"
        ],
        "correctAnswer": 2,
        "explanation": "A molecule is net negative at any pH above its pI. Glutamate (pI 3.1) is well above its pI at pH 6.0 (net charge −1), so it moves toward the positively charged anode. Glycine (pI 6.0) sits essentially at its pI, has zero net charge, and barely migrates — small size is irrelevant without net charge. Lysine (pI 9.75) is below its pI at pH 6.0, carries net positive charge, and moves toward the cathode; having an ionizable side chain does not by itself dictate direction. The claim that no amino acid migrates confuses being zwitterionic with being neutral: a zwitterion can still carry nonzero net charge.",
        "skill": "Electrophoresis"
      },
      {
        "question": "Based on Figure 1, the isoelectric point of glutamate is reached after the addition of how many equivalents of base?",
        "options": [
          "0.5 equivalents",
          "1.0 equivalents",
          "1.5 equivalents",
          "2.5 equivalents"
        ],
        "correctAnswer": 1,
        "explanation": "The passage states that at exactly 1.0 equivalent the dominant species has zero net charge, and Figure 1 shows pH = 3.1 at 1.0 equivalent — matching the calculated pI of (2.1 + 4.1)/2 = 3.1, midway between the first and second buffering plateaus. At 0.5 equivalents the pH equals pKa1 (2.1), where half the α-carboxyls are still protonated and the average charge is +0.5. At 1.5 equivalents the pH equals pKa2 (4.1), where the average net charge is −0.5. At 2.5 equivalents the pH equals pKa3 (9.5), where the species is approaching a net charge of −2.",
        "skill": "Data interpretation"
      }
    ],
    "needsReview": true
  },
  {
    "id": "cp2-14",
    "section": "chem-phys",
    "discipline": "organic chemistry",
    "title": "Nonenzymatic Glycation of Hemoglobin",
    "passageText": "In aqueous solution, D-glucose exists almost entirely (>99.9%) as cyclic pyranose forms; the reactive open-chain aldehyde accounts for less than 0.01% of the total. The cyclic form arises when the C5 hydroxyl oxygen attacks the C1 aldehyde carbon intramolecularly. Only the open-chain form can begin glycation, the nonenzymatic modification of proteins by reducing sugars.\n\nGlycation of hemoglobin proceeds in three stages. First, a nucleophilic amine on the protein — principally the N-terminal valine of the $\\beta$ chain — adds to the aldehyde carbon to give a tetrahedral carbinolamine. Second, loss of water generates a Schiff base (imine, C=N), a reversible adduct. Third, the Schiff base slowly isomerizes via the Amadori rearrangement to a ketoamine (1-amino-1-deoxyfructose adduct), which is far more stable and accumulates over the erythrocyte's 120-day lifespan; this product is measured clinically as HbA1c.\n\nTo model the process, researchers incubated purified nonglycated hemoglobin (HbA0, 1 mM in phosphate buffer, pH 7.4, 37 °C) with glucose at 5, 10, 20, or 30 mM for 14 days, then quantified the glycated fraction by boronate affinity chromatography (Figure 1). The glycated percentage rose in direct proportion to the glucose concentration. A parallel incubation at 30 mM glucose and 4 °C yielded less than one-fifth the glycation seen at 37 °C, and adding a large excess of free valine methyl ester to the 37 °C incubation reduced hemoglobin glycation substantially.",
    "chart": {
      "title": "Figure 1. Hemoglobin glycation after 14 days at 37 °C",
      "kind": "bar",
      "xLabel": "Glucose concentration",
      "xUnit": "mM",
      "yLabel": "Glycated hemoglobin",
      "yUnit": "%",
      "seriesLabel": "Glycated fraction at day 14",
      "xValues": [
        5,
        10,
        20,
        30
      ],
      "yValues": [
        4,
        8,
        16,
        24
      ]
    },
    "questions": [
      {
        "question": "The first covalent bond-forming step of glycation is best described as:",
        "options": [
          "Attack of the carbonyl oxygen on the amine nitrogen",
          "Deprotonation of the amine by the aldehyde carbonyl",
          "Attack of the amine nitrogen's lone pair on the electrophilic carbonyl carbon",
          "Homolytic cleavage of the aldehyde C–H bond"
        ],
        "correctAnswer": 2,
        "explanation": "The carbonyl carbon is electrophilic because the C=O π electrons are polarized toward oxygen; the amine nitrogen's lone pair attacks that carbon, forming the tetrahedral carbinolamine named in the passage. Attack of the carbonyl oxygen on nitrogen reverses the actual nucleophile/electrophile roles — oxygen is the electron-rich end, not an electrophile's target here. An aldehyde carbonyl is not acidic enough to protonate/deprotonate an amine as the key step, and no proton transfer creates the C–N bond. Homolytic (radical) C–H cleavage plays no role in this polar, two-electron mechanism.",
        "skill": "Reaction mechanism"
      },
      {
        "question": "Conversion of the carbinolamine to the Schiff base is classified as:",
        "options": [
          "An oxidation that consumes NAD+",
          "A hydrolysis that consumes one water molecule",
          "A substitution at a saturated carbon",
          "A condensation that releases one water molecule"
        ],
        "correctAnswer": 3,
        "explanation": "The carbinolamine (C bearing both OH and NHR) loses water to form the C=N imine — a condensation (dehydration), which is why the passage calls the Schiff base reversible: water can add back. No redox change occurs at carbon in this step, and no cofactor such as NAD+ participates in nonenzymatic chemistry. Hydrolysis is the exact reverse process (water consumed, adduct broken), not the forward step. The reaction forms a π bond at a carbon that becomes sp², not a substitution at a saturated sp³ center.",
        "skill": "Carbonyl chemistry"
      },
      {
        "question": "The cyclic pyranose form of glucose contains which functional group at C1?",
        "options": [
          "A hemiacetal",
          "An acetal",
          "An enol",
          "A carboxylic acid"
        ],
        "correctAnswer": 0,
        "explanation": "Intramolecular addition of the C5 hydroxyl to the C1 aldehyde gives a carbon bearing one OR group and one OH group — the definition of a hemiacetal, which is why ring opening to the free aldehyde remains possible. An acetal carries two OR groups and no OH; it forms only after a second alcohol adds (as in glycosides) and does not ring-open under physiological conditions, which would make glucose unreactive toward glycation. An enol is a C=C–OH tautomer, not the product of hydroxyl-carbonyl addition. No oxidation occurs on cyclization, so no carboxylic acid is formed.",
        "skill": "Carbohydrate structure"
      },
      {
        "question": "Which statement best explains why hemoglobin glycation proceeds slowly in vivo even though glucose is abundant?",
        "options": [
          "Glucose cannot enter the erythrocyte",
          "Hemoglobin's amino groups are permanently buried in the folded protein",
          "Only the open-chain fraction of glucose — less than 0.01% of the total — presents a reactive aldehyde",
          "The Amadori product hydrolyzes faster than it forms"
        ],
        "correctAnswer": 2,
        "explanation": "The rate of the initial addition depends on the concentration of the reactive aldehyde form, and the passage states the open chain is under 0.01% of total glucose; the effective electrophile concentration is therefore tiny, making the overall process slow. Glucose does enter erythrocytes (via GLUT1) — HbA1c exists precisely because intracellular hemoglobin is glycated. The N-terminal valine amine is solvent-accessible, not buried, which is why it is the principal glycation site. The Amadori ketoamine is described as far more stable than the Schiff base and accumulates for 120 days, the opposite of rapid hydrolysis.",
        "skill": "Reactivity"
      },
      {
        "question": "Based on Figure 1, if hemoglobin were incubated with 15 mM glucose under the same conditions, the expected glycated fraction at day 14 is closest to:",
        "options": [
          "6%",
          "10%",
          "12%",
          "16%"
        ],
        "correctAnswer": 2,
        "explanation": "Figure 1 is linear through the origin: 5 mM gives 4%, 10 mM gives 8%, 20 mM gives 16%, 30 mM gives 24% — a slope of 8%/10 mM = 0.8% per mM. At 15 mM: 15 x 0.8 = 12%. The value 6% would correspond to a slope of 0.4% per mM, half the observed proportionality. The value 10% would follow from averaging the 5 mM and 10 mM readings rather than interpolating between 10 and 20 mM. The value 16% is the reading for 20 mM glucose, not 15 mM.",
        "skill": "Data interpretation"
      }
    ],
    "needsReview": true
  },
  {
    "id": "cp2-15",
    "section": "chem-phys",
    "discipline": "thermodynamics",
    "title": "Calorimetry of Protein Unfolding",
    "passageText": "Differential scanning calorimetry (DSC) measures the excess heat capacity ($C_p$) of a dilute protein solution as temperature is raised at a constant scan rate. For a protein that unfolds reversibly between exactly two states (folded N and unfolded U), the thermogram shows a single peak: its maximum defines the melting temperature $T_m$, at which half the molecules are unfolded and $\\Delta G_{unfold} = 0$, and the area under the peak equals the calorimetric unfolding enthalpy $\\Delta H_{cal}$.\n\nResearchers scanned a 14-kDa ribonuclease variant from 300 K to 380 K (Figure 1). The peak maximum occurred at $T_m = 350\\text{ K}$, and integration of the peak gave $\\Delta H_{cal} = 420\\text{ kJ/mol}$. The pre-transition baseline ($20\\text{ kJ}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$) and post-transition baseline ($28\\text{ kJ}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$) did not superimpose, reflecting a change in heat capacity, $\\Delta C_p$, upon unfolding.\n\nThe shape of the transition also yields a model-dependent van 't Hoff enthalpy, $\\Delta H_{vH}$, computed by treating the data as a two-state equilibrium. For the wild-type protein, $\\Delta H_{vH}/\\Delta H_{cal} = 1.0$. A destabilized mutant, scanned under identical conditions, gave a broadened transition with $\\Delta H_{vH}/\\Delta H_{cal} = 0.5$. For questions below, treat $\\Delta H$ and $\\Delta S$ as temperature-independent near $T_m$ and use $\\Delta G = \\Delta H - T\\Delta S$.",
    "chart": {
      "title": "Figure 1. DSC thermogram of the ribonuclease variant",
      "kind": "line",
      "xLabel": "Temperature",
      "xUnit": "K",
      "yLabel": "Excess heat capacity",
      "yUnit": "kJ·mol⁻¹·K⁻¹",
      "seriesLabel": "Excess Cp",
      "xValues": [
        300,
        310,
        320,
        330,
        340,
        345,
        350,
        355,
        360,
        365,
        370,
        380
      ],
      "yValues": [
        20,
        20.5,
        21,
        22,
        30,
        70,
        150,
        75,
        32,
        29,
        28,
        28
      ],
      "annotations": [
        {
          "xIndex": 6,
          "label": "Tm = 350 K"
        },
        {
          "xIndex": 10,
          "label": "post-transition baseline (ΔCp = +8)"
        }
      ]
    },
    "questions": [
      {
        "question": "The entropy change for unfolding at Tm is closest to:",
        "options": [
          "1.2 J·mol⁻¹·K⁻¹",
          "120 J·mol⁻¹·K⁻¹",
          "1200 J·mol⁻¹·K⁻¹",
          "12,000 J·mol⁻¹·K⁻¹"
        ],
        "correctAnswer": 2,
        "explanation": "At Tm, ΔG = 0, so ΔH = TmΔS and ΔS = ΔH/Tm = 420,000 J/mol ÷ 350 K = 1200 J·mol⁻¹·K⁻¹ (check: 350 x 1200 = 420,000). The value 1.2 is the answer in kJ·mol⁻¹·K⁻¹ mislabeled with joule units — a factor-of-1000 slip. The value 120 misplaces the decimal by one power of ten (as if ΔH were 42 kJ/mol). The value 12,000 multiplies instead of tracking units correctly, an order of magnitude too high.",
        "skill": "Entropy"
      },
      {
        "question": "At temperatures below Tm, the sign of ΔG for unfolding is:",
        "options": [
          "Negative, because unfolding is always entropy-driven",
          "Zero, because the system is at equilibrium at every temperature",
          "Positive, because the folded state is thermodynamically favored below Tm",
          "Positive, because ΔH becomes negative below Tm"
        ],
        "correctAnswer": 2,
        "explanation": "Below Tm the term TΔS (favoring unfolding) is smaller than ΔH (opposing it), so ΔG = ΔH − TΔS > 0 and the folded state predominates — which is why the protein is folded at physiological temperature. A negative ΔG would mean the protein spontaneously unfolds below its melting temperature, contradicting the definition of Tm as the midpoint. ΔG is zero only at the single temperature Tm, not at every temperature. The passage instructs that ΔH is treated as temperature-independent near Tm, so ΔH does not switch sign below Tm; the positive ΔG arises from the balance of terms, not a sign change in ΔH.",
        "skill": "Gibbs energy"
      },
      {
        "question": "In this experiment, ΔH_cal was determined from which feature of the thermogram?",
        "options": [
          "The height of the Cp peak maximum",
          "The temperature at which the peak occurs",
          "The width of the peak at half its height",
          "The area under the excess heat-capacity peak"
        ],
        "correctAnswer": 3,
        "explanation": "Heat capacity is heat absorbed per unit temperature, so integrating excess Cp over the transition (the area under the peak) gives the total heat absorbed — the calorimetric enthalpy, exactly as the passage states. Peak height alone reflects transition sharpness, not total heat: a tall narrow peak and a short broad peak can enclose the same area. The peak temperature defines Tm, not ΔH. The half-height width relates to cooperativity and enters the van 't Hoff analysis, but it is not the calorimetric enthalpy.",
        "skill": "Data interpretation"
      },
      {
        "question": "From the baselines in Figure 1, the heat-capacity change upon unfolding is:",
        "options": [
          "−8 kJ·mol⁻¹·K⁻¹",
          "−4 kJ·mol⁻¹·K⁻¹",
          "0 kJ·mol⁻¹·K⁻¹",
          "+8 kJ·mol⁻¹·K⁻¹"
        ],
        "correctAnswer": 3,
        "explanation": "ΔCp = Cp(unfolded) − Cp(folded) = post-transition baseline minus pre-transition baseline = 28 − 20 = +8 kJ·mol⁻¹·K⁻¹. The sign is positive because unfolding exposes buried hydrophobic residues, and ordering water around them raises the system's heat capacity. The value −8 subtracts the baselines in the wrong order (folded minus unfolded). The value −4 has both the wrong sign and the wrong magnitude. Zero would require the two baselines to superimpose, which the passage explicitly says they do not.",
        "skill": "Heat capacity"
      },
      {
        "question": "The mutant's ratio ΔH_vH/ΔH_cal = 0.5 most strongly suggests:",
        "options": [
          "Unfolding through a populated intermediate or independently unfolding domains, violating the two-state model",
          "Irreversible aggregation of the unfolded protein during the scan",
          "That the mutant follows the two-state model more strictly than the wild type",
          "A calorimeter calibration error, since the ratio must always equal 1"
        ],
        "correctAnswer": 0,
        "explanation": "ΔH_vH is computed by assuming all molecules switch between exactly two states; when parts of the molecule unfold semi-independently or an intermediate is populated, each cooperative unit contributes less heat than the whole, the transition broadens (as observed), and ΔH_vH falls below ΔH_cal, giving a ratio under 1. Aggregation typically sharpens the apparent transition through intermolecular cooperativity and pushes the ratio above 1, not below. A two-state protein gives a ratio of 1.0 — the wild type's behavior — so 0.5 indicates a departure from, not stricter adherence to, that model. The ratio is a diagnostic that legitimately deviates from 1; a deviation is information about mechanism, not evidence of miscalibration.",
        "skill": "Experimental design"
      },
      {
        "question": "Using the measured ΔH_cal and the ΔS from the Tm condition, ΔG for unfolding at 340 K is closest to:",
        "options": [
          "−12 kJ/mol",
          "−6 kJ/mol",
          "0 kJ/mol",
          "+12 kJ/mol"
        ],
        "correctAnswer": 3,
        "explanation": "ΔG = ΔH − TΔS = 420 kJ/mol − (340 K)(1.2 kJ·mol⁻¹·K⁻¹). Compute the entropic term: 340 x 1.2 = 408 kJ/mol. Then ΔG = 420 − 408 = +12 kJ/mol, positive as required below Tm (the folded state is favored). The value −12 has the correct magnitude but the wrong sign, as if TΔS exceeded ΔH — that happens only above Tm. The value −6 corresponds to no correct combination of the given numbers. Zero is the value only at Tm = 350 K, not at 340 K.",
        "skill": "Gibbs energy"
      }
    ],
    "needsReview": true
  }
]
