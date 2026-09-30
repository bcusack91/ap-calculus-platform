/**
 * MCAT Full-Length Form 2 — Chemical & Physical Foundations, file A
 * (passages 1–5, 22 questions, plus 8 discrete items).
 *
 * Built to the 2026-09 AAMC-representativeness brief: 400–600-word passages,
 * a mix of experiment and information passages, keys that require using the
 * passage rather than matching its wording, and position/length-balanced
 * options. Explanations reference options by CONTENT, never by letter.
 *
 * LaTeX renders through KaTeX; backslashes are double-escaped in these strings.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL2_CHEM_PHYS_A_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 1. PHYSICS (information) — Torque, levers, work and power in the arm
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-cp-a-01',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Levers and Loads in the Human Arm',
    passageText:
      'Movements of the body are produced by muscles pulling on bones. A skeletal muscle can only shorten; it cannot push. It attaches to bone through a tendon at an insertion point, and when it contracts it exerts a force along its own length. Because the bone is free to rotate about the joint, the effect of the muscle force is a torque, the product of the force and its perpendicular lever arm: $\\tau = rF\\sin\\theta$, where $r$ is the distance from the joint to the point at which the force acts and $\\theta$ is the angle between the position vector and the force. In most limbs the insertion lies close to the joint while the load is carried far from it, so the muscle must exert a force much larger than the weight it supports.\n\nThe forearm is the standard example. Consider the elbow flexed to 90° with the upper arm vertical and the forearm horizontal. The elbow acts as a pivot. The biceps inserts on the radius about 4.0 cm from the pivot and, in this position, pulls vertically upward. The forearm and hand have a mass of about 2.0 kg, with a center of mass about 16 cm from the elbow, and an object held in the hand is supported about 32 cm from the elbow. Such analyses treat the forearm as a rigid beam in static equilibrium, which requires that the net force on it be zero and that the net torque about any axis be zero. Taking the axis at the elbow is convenient because the force that the humerus exerts on the forearm at the joint then contributes no torque, so the muscle force can be found from the torque condition alone; the joint force follows from the force condition once the muscle force is known. Arrangements in which the applied force acts between the pivot and the load are third-class levers, and their mechanical advantage, the ratio of the load to the applied force, is less than one.\n\nThe geometry has a second consequence. When the forearm rotates through a small angle, every point on it moves along an arc whose length is proportional to its distance from the pivot. A muscle can shorten only a limited distance and at a limited speed, and where the muscle inserts determines how that shortening is converted into motion at the hand.\n\nWork and power depend on the same quantities. When a force $F$ acts on an object that moves a distance $d$, the work done by the force is $W = Fd\\cos\\phi$, where $\\phi$ is the angle between the force and the displacement. If an object of mass $m$ is raised at constant speed through a height $h$, the lifting force does work $mgh$ and the object gains that much gravitational potential energy, while gravity does an equal negative amount of work. Average power is the work done divided by the time taken. In the body, the muscle force is applied at the tendon, not at the load, so the muscle does its work over the short distance that the tendon moves; the same energy is delivered to the load over the longer distance the load travels.\n\nBecause the forces at joints are much larger than the loads that produce them, injuries to tendons and joint surfaces often occur during activities that seem undemanding. A load held at arm’s length places its full weight on a lever arm the length of the whole arm, and the shoulder muscles and the shoulder joint must supply forces that are many times larger than the load itself.',
    questions: [
      {
        question: 'A person holds a 10 kg object in the hand with the arm in the position described in the passage. Taking $g = 10\\ \\text{m/s}^2$, the force exerted by the biceps is closest to:',
        options: ['120 N', '800 N', '880 N', '960 N'],
        correctAnswer: 2,
        explanation:
          'Take torques about the elbow so the joint force drops out. The biceps torque must balance the torques of the object (100 N at 0.32 m, or 32 N·m) and of the forearm itself (20 N at 0.16 m, or 3.2 N·m): $F(0.040\\ \\text{m}) = 35.2\\ \\text{N·m}$, so $F = 880$ N. The 800 N value ignores the weight of the forearm and hand. The 960 N value places the forearm’s 20 N at the hand (0.32 m) rather than at its center of mass. The 120 N value is merely the sum of the two weights, which would be correct only if the muscle acted at the same distance as the loads.',
        skill: '4A torque and static equilibrium',
      },
      {
        question: 'When the hand is empty and the forearm is held horizontal as described, the force that the humerus exerts on the forearm at the elbow is closest to:',
        options: ['20 N, directed downward', '60 N, directed downward', '60 N, directed upward', '80 N, directed upward'],
        correctAnswer: 1,
        explanation:
          'With no object in the hand, the torque condition about the elbow gives $F_{biceps}(0.040) = (20\\ \\text{N})(0.16\\ \\text{m})$, so the biceps pulls upward with 80 N. The forearm is in equilibrium, so vertical forces must sum to zero: 80 N up from the biceps and 20 N down from the forearm’s weight leave 60 N that the joint must supply downward. A 60 N upward force would give a net upward force of 120 N. The 80 N upward value is the biceps force itself, not the joint force. A 20 N downward force is the forearm’s weight and neglects the muscle entirely.',
        skill: '4A free-body analysis',
      },
      {
        question: 'While the 10 kg object is held motionless in the position described, the work done by the biceps on the forearm is:',
        options: [
          'Zero, because the point where the biceps force acts does not move',
          'Positive, equal to the biceps force multiplied by the length of the forearm',
          'Positive, equal to the torque exerted by the biceps multiplied by the time the load is held',
          'Negative, because the biceps force acts opposite to the weight of the load',
        ],
        correctAnswer: 0,
        explanation:
          'Work requires a displacement of the point of application along the direction of the force ($W = Fd\\cos\\phi$); a muscle contracting isometrically exerts a large force but its insertion does not move, so it does no mechanical work, even though it continues to consume chemical energy and fatigues. Multiplying the force by the forearm length treats a distance that nothing moves through as a displacement. Torque multiplied by time has the units of angular impulse, not energy. Negative work would require the insertion point to move in the direction opposite to the muscle force, which does not happen while the arm is stationary.',
        skill: '4A work',
      },
      {
        question: 'Starting from the position described, the biceps shortens by 1.0 cm in 0.10 s while the 10 kg object is held in the hand, and the forearm rotates upward at nearly constant speed. The average power delivered by the biceps during this interval is closest to:',
        options: ['10 W', '80 W', '88 W', '880 W'],
        correctAnswer: 2,
        explanation:
          'Every point on the forearm moves along an arc proportional to its distance from the elbow, so a 1.0 cm rise at the insertion (4.0 cm from the pivot) raises the hand (32 cm) by 8.0 cm and the center of mass of the forearm (16 cm) by 4.0 cm. The energy delivered is the gain in gravitational potential energy, $(100\\ \\text{N})(0.080\\ \\text{m}) + (20\\ \\text{N})(0.040\\ \\text{m}) = 8.8$ J, which is also the biceps force required by the torque condition (880 N) multiplied by the 1.0 cm its insertion moves. Dividing by 0.10 s gives 88 W. The 80 W value ignores the weight of the forearm and hand. The 10 W value multiplies the weight of the object by the 1.0 cm the tendon moves rather than the 8.0 cm the object rises. The 880 W value treats the 1.0 cm shortening as 10 cm.',
        skill: '4A work and power',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 2. GENERAL CHEMISTRY (experiment, tables) — Ksp, common ion, pH-dependent solubility
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-cp-a-02',
    section: 'chem-phys',
    discipline: 'general chemistry',
    title: 'Solubility Chemistry of Kidney Stones',
    passageText:
      'Kidney stones form when a sparingly soluble solid precipitates from urine and its crystals grow and aggregate. About 80% of stones are composed of calcium oxalate, CaC₂O₄, and about 10% of uric acid. In both cases the principles that govern a saturated solution in a beaker also govern the stone, and treatments are designed to keep the relevant species dissolved.\n\nFor an ionic solid such as calcium oxalate, the dissolution equilibrium is CaC₂O₄(s) ⇌ Ca²⁺(aq) + C₂O₄²⁻(aq), and the solubility product $K_{sp} = [\\text{Ca}^{2+}][\\text{C}_2\\text{O}_4^{2-}]$ is constant at a given temperature. A solution whose ion product $Q = [\\text{Ca}^{2+}][\\text{C}_2\\text{O}_4^{2-}]$ exceeds $K_{sp}$ is supersaturated and can deposit solid, while a solution in which $Q$ is less than $K_{sp}$ can dissolve more. Adding either ion from another source shifts the equilibrium toward the solid. Typical urine contains calcium at 2 to 5 mM and oxalate at 0.2 to 0.5 mM. Stones nevertheless fail to form in most people, because citrate and several urinary proteins interfere with crystal nucleation and growth, and because citrate can bind calcium ions in a soluble complex.\n\nUric acid behaves differently. It is a weak acid, written here as HU, whose neutral form has a low intrinsic solubility, $S_0$, whereas its conjugate base, urate (U⁻), is far more soluble. When solid uric acid is present, the concentration of dissolved HU is held at $S_0$ regardless of pH, and the ratio of urate to uric acid is set by the Henderson–Hasselbalch relation, $[\\text{U}^-]/[\\text{HU}] = 10^{\\text{pH} - \\text{p}K_a}$. The total equilibrium solubility, uric acid plus urate, is therefore\n\n$S = S_0\\left(1 + 10^{\\text{pH} - \\text{p}K_a}\\right)$\n\nUric acid stones are characteristic of persistently acidic urine.\n\nResearchers studied both solids at 37 °C. In Study 1, an excess of solid calcium oxalate monohydrate was stirred with each of three solutions until equilibrium was reached, the suspension was filtered, and the dissolved oxalate concentration was measured by ion chromatography (Table 1). The solutions were pure water, 0.010 M calcium chloride, and 0.010 M calcium chloride containing 0.020 M sodium citrate. In Study 2, an excess of solid uric acid was equilibrated with a series of buffers at different pH values, and the total dissolved uric acid plus urate was measured by absorbance at 292 nm (Table 2). The buffers were chosen so that their components neither complex calcium nor absorb at the analytical wavelength, and their ionic strengths were matched.\n\nA colleague reviewing the results suggested that the effect of sodium citrate in Study 1 might arise not from complexation of calcium but from the change in pH that adding the salt of a weak acid produces, since the pH of the citrate-free solutions was not controlled.',
    figure:
      '**Table 1. Dissolved oxalate at equilibrium with solid calcium oxalate, 37 °C**\n\n| Solution | Dissolved oxalate (M) |\n|---|---|\n| Pure water | 4.5 × 10⁻⁵ |\n| 0.010 M CaCl₂ | 2.0 × 10⁻⁷ |\n| 0.010 M CaCl₂ + 0.020 M sodium citrate | 1.0 × 10⁻⁵ |\n\n**Table 2. Total dissolved uric acid plus urate at equilibrium with solid uric acid, 37 °C**\n\n| Buffer pH | Total dissolved (mM) |\n|---|---|\n| 4.5 | 0.44 |\n| 5.0 | 0.53 |\n| 5.5 | 0.80 |\n| 6.0 | 1.66 |\n| 6.5 | 4.4 |\n| 7.0 | 13.0 |',
    questions: [
      {
        question: 'Based on the data in Table 1, the solubility product of calcium oxalate at 37 °C is closest to:',
        options: ['3.6 × 10⁻¹³', '2.0 × 10⁻⁹', '8.0 × 10⁻⁹', '4.5 × 10⁻⁵'],
        correctAnswer: 1,
        explanation:
          'In pure water each formula unit that dissolves releases one Ca²⁺ and one C₂O₄²⁻, so both ions are present at the molar solubility $s = 4.5 \\times 10^{-5}$ M and $K_{sp} = s^2 = 2.0 \\times 10^{-9}$. The calcium chloride row confirms it: with calcium fixed near 0.010 M, $K_{sp} = (0.010)(2.0 \\times 10^{-7}) = 2.0 \\times 10^{-9}$. The $4.5 \\times 10^{-5}$ value is the molar solubility itself, not its square. The $8.0 \\times 10^{-9}$ value doubles one ion concentration as though the salt released two oxalate ions per formula unit. The $3.6 \\times 10^{-13}$ value applies the $4s^3$ expression that belongs to a 1:2 salt.',
        skill: '5A solubility product (data analysis)',
      },
      {
        question: 'A urine sample contains 4.0 mM Ca²⁺ and 0.40 mM oxalate. Using the solubility product determined in Study 1, by approximately what factor would the sample have to be diluted with water to make it just saturated with calcium oxalate?',
        options: ['28', '400', '800', '6.4 × 10⁵'],
        correctAnswer: 0,
        explanation:
          'The ion product is $Q = (4.0 \\times 10^{-3})(4.0 \\times 10^{-4}) = 1.6 \\times 10^{-6}$, which is 800 times the $K_{sp}$ of $2.0 \\times 10^{-9}$. Diluting by a factor $d$ lowers each concentration by $d$ and therefore lowers $Q$ by $d^2$, so saturation ($Q = K_{sp}$) requires $d^2 = 800$, or $d \\approx 28$. The factor 800 is the ratio $Q/K_{sp}$ itself, which would be the answer only if dilution lowered one ion concentration but not the other. The factor 400 halves that ratio without justification. The factor $6.4 \\times 10^5$ squares 800 instead of taking its square root.',
        skill: '5A ion product and dilution',
      },
      {
        question: 'Which additional experiment would best test the colleague’s alternative explanation for the citrate result in Study 1?',
        options: [
          'Repeat the measurement with 0.020 M sodium chloride in place of the sodium citrate',
          'Repeat the measurement with the citrate solution at 25 °C rather than 37 °C',
          'Repeat the measurement with sodium citrate added to a solution containing no calcium',
          'Repeat the measurement with the citrate solution adjusted to the pH of the citrate-free solution',
        ],
        correctAnswer: 3,
        explanation:
          'The colleague proposes that pH, not complexation, explains the 50-fold rise in dissolved oxalate. The direct test holds pH constant while citrate is present: if the rise persists when the citrate solution is brought to the same pH as the citrate-free calcium chloride solution, pH cannot be the cause. Substituting sodium chloride tests whether sodium ions or ionic strength matter, not whether pH does. Changing the temperature alters $K_{sp}$ itself and addresses neither explanation. Adding citrate to a calcium-free solution removes the very species citrate is proposed to bind, so it cannot separate complexation from a pH effect.',
        skill: '5A solubility (research design)',
      },
      {
        question: 'Based on the data in Table 2, the p$K_a$ of uric acid at 37 °C is closest to:',
        options: ['4.5', '5.0', '5.5', '6.5'],
        correctAnswer: 2,
        explanation:
          'At the lowest pH tested, almost all dissolved material is the neutral acid, so $S_0$ is close to 0.40 mM (at pH 4.5, $S = S_0(1 + 10^{\\text{pH}-\\text{p}K_a})$ gives 0.44 only if the exponential term is about 0.1). According to the passage’s equation, the total solubility equals exactly $2S_0$ when pH = p$K_a$, and the table reaches 0.80 mM at pH 5.5. A p$K_a$ of 5.0 would put the doubling at 0.53 mM, which is only about 1.3 times $S_0$. A p$K_a$ of 4.5 would make the solubility at pH 5.5 about 4.4 mM. A p$K_a$ of 6.5 would predict a solubility near $S_0$ at pH 5.5, far below the observed 0.80 mM.',
        skill: '5A weak-acid solubility (data analysis)',
      },
      {
        question: 'In the pH 7.0 buffer of Study 2, the concentration of the neutral form, HU, in the equilibrated solution is closest to:',
        options: ['0.013 mM', '0.40 mM', '6.5 mM', '13 mM'],
        correctAnswer: 1,
        explanation:
          'As long as solid uric acid remains, dissolved HU is in equilibrium with the solid and is pinned at its intrinsic solubility $S_0$, whatever the pH; the increase in total solubility with pH comes entirely from urate. From the table, $S_0 \\approx 0.40$ mM (the total at pH 7.0, 13.0 mM, divided by $1 + 10^{1.5} \\approx 32.6$, gives the same value). The 13 mM value is the total of both forms, nearly all of which is urate at pH 7.0. The 6.5 mM value assumes the two forms are present in equal amounts, which is true only at pH = p$K_a$. The 0.013 mM value divides the total by 1000 as though pH 7.0 were three units above the p$K_a$.',
        skill: '5A acid–base equilibrium and solubility',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 3. BIOCHEMISTRY (information) — Fatty acids, micelles, bilayer phase behavior, cholesterol
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-cp-a-03',
    section: 'chem-phys',
    discipline: 'biochemistry',
    title: 'Fatty Acids, Micelles, and the Physical State of Membranes',
    passageText:
      'Lipids are a chemically diverse group of biomolecules defined by their low solubility in water rather than by a shared structure. Fatty acids are carboxylic acids with unbranched hydrocarbon chains, usually containing an even number of carbon atoms between 12 and 24. A fatty acid is abbreviated by its number of carbons and its number of carbon–carbon double bonds; oleic acid, 18:1, has 18 carbons and one double bond, between C-9 and C-10. In naturally occurring unsaturated fatty acids the double bonds are almost always cis, and each cis double bond introduces a rigid bend of about 30° into the chain. A saturated chain, by contrast, can adopt a fully extended conformation in which neighboring chains pack closely and interact through many van der Waals contacts. In cells, most fatty acids are not free but esterified. Three fatty acids joined to glycerol form a triacylglycerol, the storage lipid of adipose tissue; two fatty acids joined to glycerol 3-phosphate, with a polar head group attached to the phosphate, form a glycerophospholipid.\n\nGlycerophospholipids are amphipathic. Their two hydrocarbon tails give each molecule a roughly cylindrical shape, and cylinders pack most easily side by side into a bilayer, in which the tails are sequestered from water and the head groups face the aqueous solution on both surfaces. Amphiphiles with a single tail and a relatively large polar head, including fatty acid salts, lysophospholipids and most detergents, are wedge-shaped and instead assemble into roughly spherical micelles. Micelles form only above a critical micelle concentration (CMC). Below the CMC the amphiphile is dispersed as monomers; above it, the concentration of free monomers stays essentially fixed at the CMC, and any additional amphiphile enters micelles, each of which typically contains 50 to 150 molecules. The CMC falls as the hydrophobic tail lengthens, and ionic detergents have higher CMCs than nonionic detergents with similar tails, because repulsion between charged head groups opposes aggregation. Representative values are 25 mM for octyl glucoside, 8 mM for sodium dodecyl sulfate (SDS) and 0.2 mM for Triton X-100. Above their CMCs, detergents extract integral membrane proteins by coating the hydrophobic surfaces of the proteins; SDS also unfolds most proteins, whereas the two nonionic detergents usually do not.\n\nA bilayer made of a single pure phospholipid undergoes a sharp, cooperative phase transition at a characteristic temperature, $T_m$. Below $T_m$ the tails are extended and tightly packed in an ordered gel phase; above it they are disordered, and the bilayer becomes a two-dimensional fluid in which each lipid diffuses laterally over about a micrometer every second. Movement of a lipid from one leaflet to the other is far slower, because it would require a polar head group to pass through the hydrocarbon core. For phosphatidylcholines carrying two identical chains, $T_m$ is 24 °C with 14:0 chains, 55 °C with 18:0 chains and −17 °C with 18:1 chains. The permeability of a bilayer to small ions and polar solutes rises steeply near $T_m$, where gel and fluid domains coexist and the boundaries between them are poorly packed.\n\nAnimal plasma membranes contain as much as one cholesterol molecule for every phospholipid. Cholesterol is a sterol whose four fused rings form a flat, rigid plate. Its single hydroxyl group sits near the ester carbonyl groups of neighboring phospholipids, and its ring system lies alongside the first several carbons of their acyl chains. The effect of cholesterol on a bilayer depends on the physical state of the phospholipids around it, and membranes rich in cholesterol show no sharp phase transition at all.',
    questions: [
      {
        question: 'Olive oil consists mainly of triacylglycerols. When a sample is heated with excess aqueous sodium hydroxide until reaction is complete, the lipid-derived products are:',
        options: [
          'glycerol 3-phosphate and three sodium carboxylate salts',
          'glycerol and three fatty acids in their neutral, protonated form',
          'a diacylglycerol and one sodium carboxylate salt',
          'glycerol and three sodium carboxylate salts',
        ],
        correctAnswer: 3,
        explanation:
          'Heating an ester with hydroxide (saponification) cleaves all three ester bonds of a triacylglycerol, releasing glycerol and three carboxylates; in excess base the fatty acids remain deprotonated as sodium salts, which are soaps. Neutral, protonated fatty acids are obtained only after the mixture is acidified, or from acid-catalyzed hydrolysis. Glycerol 3-phosphate is the backbone of glycerophospholipids, not of triacylglycerols, and no phosphate is present to form it. A diacylglycerol plus one carboxylate describes partial hydrolysis, which excess base carried to completion does not stop at.',
        skill: '5D triacylglycerols and saponification',
      },
      {
        question: 'A membrane protein solubilized in detergent is to be transferred into detergent-free buffer by dialysis. Only detergent monomers, not micelles, can cross the dialysis membrane. Which detergent would be removed most rapidly?',
        options: [
          'Octyl glucoside, because it has the highest CMC',
          'Sodium dodecyl sulfate, because it carries a charge',
          'Triton X-100, because it has the lowest CMC value',
          'Triton X-100, because it forms the largest micelles',
        ],
        correctAnswer: 0,
        explanation:
          'Because the free-monomer concentration is capped at the CMC, the driving force for loss of detergent across the dialysis membrane is at most the CMC; octyl glucoside, with a 25 mM CMC, maintains the highest concentration of diffusible monomer and is removed fastest. Triton X-100 is the hardest to dialyze, since its 0.2 mM CMC leaves almost all of it in micelles that cannot cross the membrane. Large micelles would slow removal, not speed it. Charge by itself does not govern passage through a dialysis membrane; SDS dialyzes faster than Triton X-100 only because its CMC is higher, and it is still slower than octyl glucoside.',
        skill: '5D micelles and critical micelle concentration',
      },
      {
        question: 'A bilayer of phosphatidylcholine with two 18:1 chains is examined at 37 °C. Compared with the same bilayer without cholesterol, a bilayer containing 30 mol% cholesterol would be expected to show:',
        options: [
          'less ordered acyl chains and greater permeability to small polar solutes',
          'more ordered acyl chains and lower permeability to small polar solutes',
          'a sharp gel-to-fluid transition shifted to a temperature above 37 °C',
          'faster movement of lipids from one leaflet of the bilayer to the other',
        ],
        correctAnswer: 1,
        explanation:
          'At 37 °C this bilayer is far above its $T_m$ of −17 °C and is fluid. In a fluid bilayer the rigid sterol rings restrict the motion of the neighboring acyl-chain segments, increasing their order and reducing permeability to small polar molecules; cholesterol acts as a fluidity buffer, which has the opposite effect only below $T_m$, where it disrupts tight packing. Less ordered chains describe the effect on a gel-phase bilayer. Cholesterol abolishes the sharp transition rather than shifting it. Transverse movement requires a polar head group to cross the hydrocarbon core, and ordering the core does not make that easier.',
        skill: '5D cholesterol and membrane fluidity',
      },
      {
        question: 'Liposomes are to be designed that retain an encapsulated drug at body temperature (37 °C) but release it rapidly when a tumor is heated to 42 °C. The liposomes should be made chiefly of phosphatidylcholine carrying:',
        options: ['two 14:0 chains', 'two 18:0 chains', 'two 18:1 chains', 'two 16:0 chains'],
        correctAnswer: 3,
        explanation:
          'Release requires a bilayer that is in the tightly packed gel phase at 37 °C but reaches its transition, where permeability peaks, near 42 °C. Since $T_m$ rises with chain length (24 °C for 14:0, 55 °C for 18:0), two 16:0 chains should give an intermediate $T_m$ of about 40 °C, just between the two temperatures. A 14:0 bilayer is already fluid at body temperature, so heating does not trigger release. An 18:0 bilayer stays in the gel phase at both temperatures. An 18:1 bilayer is fluid at both, because the cis double bonds lower its $T_m$ far below 0 °C.',
        skill: '5D fatty acid saturation and phase transitions',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 4. PHYSICS (experiment, chart) — Dalton, Henry, Boyle in hyperbaric oxygen therapy
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-cp-a-04',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Dissolved Oxygen Under Hyperbaric Conditions',
    passageText:
      'At sea level the atmosphere exerts a pressure of 1 atm (760 mmHg). Dry air is about 21% O₂ and 79% N₂ by mole fraction, and by Dalton’s law each gas in a mixture contributes a partial pressure equal to its mole fraction multiplied by the total pressure. Inspired gas becomes saturated with water vapor in the airways, and at body temperature water vapor exerts 47 mmHg regardless of the total pressure, so the partial pressure of an inspired gas is its dry mole fraction multiplied by the total pressure minus 47 mmHg. In the alveoli, O₂ is further diluted by CO₂ entering from the blood.\n\nOxygen is carried in blood in two forms. Most is bound to hemoglobin, which is already about 98% saturated at the arterial PO₂ of a healthy person breathing air at sea level, about 100 mmHg. Each gram of fully saturated hemoglobin carries 1.34 mL of O₂, so blood with 15 g of hemoglobin per deciliter carries about 20 mL of bound O₂ per deciliter. A much smaller amount of O₂ is physically dissolved in plasma. According to Henry’s law, the concentration of a gas dissolved in a liquid at equilibrium is proportional to the partial pressure of that gas in contact with the liquid; for O₂ in plasma at 37 °C the proportionality constant is about 0.003 mL O₂ per deciliter per mmHg. At rest, the tissues remove about 5 mL of O₂ from each deciliter of arterial blood that flows through them.\n\nIn hyperbaric oxygen therapy, a patient breathes oxygen inside a sealed chamber pressurized above 1 atm. The therapy is used for carbon monoxide poisoning, in which much of the hemoglobin is occupied by CO and cannot carry O₂, and for wounds with a poor blood supply. Gas-filled spaces, whether in the body or in medical devices, are compressed as chamber pressure rises and expand again as it falls. Patients must therefore equalize the pressure in their middle ears, and the inflatable cuffs of breathing tubes are filled with saline rather than air. At the end of each session the chamber pressure is lowered gradually to prevent decompression sickness, in which gas that came out of solution forms bubbles in the tissues and blood.\n\nInvestigators measured dissolved O₂ in the arterial blood of healthy volunteers at chamber pressures from 1.0 to 3.0 atm (absolute). At each pressure, after 20 minutes of breathing either room air or 100% O₂ through a sealed mask, a sample of arterial blood was drawn. Its PO₂ was measured with an oxygen electrode inside the chamber, and the concentration of dissolved O₂ was calculated from the PO₂. Subjects rested quietly throughout, and arterial PCO₂ remained near 40 mmHg in every condition. The results are shown in Figure 1. The investigators concluded that at the highest pressures tested, dissolved O₂ alone could sustain resting tissue metabolism even if hemoglobin carried no oxygen at all.',
    chart: {
      title: 'Figure 1. Dissolved O₂ in arterial plasma versus chamber pressure',
      kind: 'line',
      xLabel: 'Chamber pressure (absolute)',
      xUnit: 'atm',
      yLabel: 'Dissolved O₂',
      yUnit: 'mL O₂/dL',
      xValues: [1.0, 1.5, 2.0, 2.5, 3.0],
      yValues: [1.9, 3.04, 4.18, 5.32, 6.46],
      seriesLabel: 'Breathing 100% O₂',
      comparisonSeries: [{ label: 'Breathing room air', yValues: [0.3, 0.54, 0.78, 1.02, 1.26] }],
    },
    questions: [
      {
        question: 'Based on Figure 1, what is the lowest chamber pressure tested at which O₂ dissolved in plasma alone, with no contribution from hemoglobin, could meet the resting O₂ needs of the tissues?',
        options: ['1.0 atm', '1.5 atm', '2.0 atm', '2.5 atm'],
        correctAnswer: 3,
        explanation:
          'Resting tissues remove about 5 mL O₂ from each deciliter of arterial blood, so dissolved O₂ must reach at least 5 mL/dL. On 100% O₂, Figure 1 shows 4.18 mL/dL at 2.0 atm, which falls short, and 5.32 mL/dL at 2.5 atm, which is sufficient. At 1.0 atm (1.9 mL/dL) and 1.5 atm (3.04 mL/dL) dissolved O₂ covers well under two-thirds of the requirement, so choosing either confuses dissolved O₂ with total O₂ content, most of which is bound to hemoglobin. The room-air series never exceeds 1.3 mL/dL, so it could not meet the need at any pressure tested.',
        skill: '4B Henry’s law (data interpretation)',
      },
      {
        question: 'The arterial PO₂ of subjects breathing 100% O₂ at 3.0 atm was closest to:',
        options: ['220 mmHg', '630 mmHg', '2150 mmHg', '2280 mmHg'],
        correctAnswer: 2,
        explanation:
          'Dissolved O₂ was calculated from PO₂ with Henry’s law, so PO₂ = (dissolved O₂)/(0.003 mL/dL per mmHg) = 6.46/0.003 ≈ 2150 mmHg. The 2280 mmHg value is the total chamber pressure (3 × 760 mmHg), which ignores water vapor, alveolar CO₂ and the gradient between alveolar gas and arterial blood. The 630 mmHg value corresponds to the 1.0 atm point (1.9/0.003), not the 3.0 atm point. The 220 mmHg value results from dividing by 0.03 instead of 0.003.',
        skill: '4B Henry’s law',
      },
      {
        question: 'Suppose the cuff of a breathing tube were filled with 9.0 mL of air at 1.0 atm and sealed. If its temperature did not change and its walls exerted negligible elastic pressure, what would its volume be when the chamber reached 3.0 atm?',
        options: ['3.0 mL', '4.5 mL', '9.0 mL', '27 mL'],
        correctAnswer: 0,
        explanation:
          'For a fixed amount of gas at constant temperature, the ideal gas law reduces to Boyle’s law, $P_1V_1 = P_2V_2$, so $V_2 = (1.0\\ \\text{atm})(9.0\\ \\text{mL})/(3.0\\ \\text{atm}) = 3.0$ mL; a shrunken cuff no longer seals the airway, which is why saline, which is nearly incompressible, is used. The 27 mL value multiplies by the pressure ratio instead of dividing, which would describe expansion. The 9.0 mL value treats the gas as incompressible. The 4.5 mL value divides by the pressure increase of 2.0 atm rather than by the ratio of final to initial pressure.',
        skill: '4B ideal gas law (Boyle’s law)',
      },
      {
        question: 'A reviewer argues that dissolved O₂ depends only on the partial pressure of inspired O₂, not on total chamber pressure. Which additional condition would most directly test this claim?',
        options: [
          'Breathing 100% O₂ at 3.5 atm, extending the range of pressures tested',
          'Breathing 50% O₂ at 2.0 atm, compared with 100% O₂ at 1.0 atm',
          'Breathing room air at 1.0 atm for 40 minutes, compared with 20 minutes',
          'Breathing 100% O₂ at 2.0 atm during exercise instead of at rest',
        ],
        correctAnswer: 1,
        explanation:
          'Breathing 50% O₂ at 2.0 atm gives an inspired PO₂ of 0.5(1520 − 47) ≈ 740 mmHg, nearly equal to that of 100% O₂ at 1.0 atm (713 mmHg), while doubling total pressure; equal dissolved O₂ in the two conditions would show that total pressure itself has no effect. Extending the range to 3.5 atm raises O₂ partial pressure and total pressure together, so it cannot separate them. Lengthening the breathing period at 1.0 atm tests whether equilibrium was reached, not the role of total pressure. Adding exercise introduces changes in O₂ consumption and ventilation, confounding the comparison.',
        skill: '4B partial pressure (research design)',
      },
      {
        question: 'A diver breathes compressed air at a depth where the total pressure is 3 atm and then ascends to the surface too quickly. The gas bubbles that form in the diver’s tissues consist mainly of nitrogen because:',
        options: [
          'N₂ is more soluble in plasma than O₂ at equal partial pressures',
          'N₂ binds to hemoglobin at high pressure and is released on ascent',
          'N₂ has the highest partial pressure in air and is not used by tissues',
          'N₂ is converted to a less soluble form as the pressure falls',
        ],
        correctAnswer: 2,
        explanation:
          'By Henry’s law, the amount of a gas dissolved in the tissues is proportional to its partial pressure; N₂ makes up 79% of air, so at depth its partial pressure and dissolved load are the largest, and unlike O₂ it is not consumed by metabolism, so it comes out of solution when the pressure falls too quickly. N₂ is actually less soluble in water than O₂ at equal partial pressure. Hemoglobin binds O₂, CO and CO₂ but not N₂. N₂ is chemically inert in the body and is not converted to another form.',
        skill: '4B Henry’s law and decompression',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 5. ORGANIC CHEMISTRY (experiment, spectral table) — MS, IR, ¹H NMR of a natural product
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-cp-a-05',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    title: 'Identifying the Principal Volatile Compound of Wintergreen',
    passageText:
      'Determining the structure of a natural product usually requires several spectroscopic methods, each of which reports on a different feature of the molecule. In electron-ionization mass spectrometry (EI-MS), molecules in the vapor phase are struck by high-energy electrons, which remove one electron from each ionized molecule to give a radical cation, M•⁺. The ions are separated by their mass-to-charge ratio ($m/z$), and because nearly all of them carry a single charge, the peak at highest $m/z$ usually gives the molecular mass. The molecular ion is energetic enough that some of it breaks apart, and the masses lost in fragmentation identify groups that were attached to the molecule. Measuring $m/z$ to three or four decimal places distinguishes molecular formulas that share the same nominal mass.\n\nInfrared (IR) spectroscopy measures the absorption of radiation that excites bond vibrations. The frequency of a stretching vibration increases with bond strength and decreases with the masses of the bonded atoms, so each functional group absorbs in a characteristic range, reported in wavenumbers (cm⁻¹). Carbonyl groups give intense bands between about 1650 and 1750 cm⁻¹, aromatic C=C bonds give medium bands near 1600 cm⁻¹, and O–H groups absorb between about 3200 and 3600 cm⁻¹. Hydrogen bonding weakens the bonds involved, shifting their bands to lower wavenumbers, and it broadens the O–H band.\n\nIn ¹H nuclear magnetic resonance (NMR) spectroscopy, each set of chemically equivalent protons gives one signal. The chemical shift (δ, in ppm) increases as nearby electronegative atoms or π systems deshield the protons: protons on sp³ carbons bonded only to carbon appear near 1–2 ppm, those on sp³ carbons bonded to oxygen near 3.3–4.0 ppm, and those on aromatic rings near 6.5–8.0 ppm. The area of each signal is proportional to the number of protons it represents, and a signal is split into $n + 1$ lines by $n$ equivalent protons on neighboring atoms.\n\nOil of wintergreen, obtained by steam distillation of the leaves of the wintergreen plant, has long been used as a flavoring and in topical analgesic preparations. A chemist purified its major volatile component, compound X, a colorless liquid, and recorded the data in Table 1. High-resolution MS established the molecular formula C₈H₈O₃. A search of plant metabolite databases returned three candidate structures with this formula, each a benzene ring bearing two substituents: methyl 2-hydroxybenzoate, in which an –OH group and a –COOCH₃ group occupy adjacent ring carbons; methyl 4-hydroxybenzoate, in which the same two groups occupy opposite ring carbons; and 2-methoxybenzoic acid, in which an –OCH₃ group and a –COOH group occupy adjacent ring carbons.\n\nThe chemist noted that the O–H and C=O bands of X both appear at lower wavenumbers than those of simple phenols and esters, and that its O–H proton signal lies unusually far downfield. She attributed both observations to a hydrogen bond formed within each molecule of X.',
    figure:
      '**Table 1. Spectroscopic data for compound X**\n\n| Method | Observation |\n|---|---|\n| High-resolution MS | M•⁺ at m/z 152.047 (C₈H₈O₃) |\n| EI-MS fragments | m/z 121, 120 (most intense), 92 |\n| IR (cm⁻¹) | 3190 (broad), 3050 (weak), 2955 (weak), 1680 (strong), 1615, 1585, 1250 (strong) |\n| ¹H NMR (δ, ppm) | 10.8 (singlet, 1H); 7.8 (doublet, 1H); 7.4 (triplet, 1H); 7.0 (doublet, 1H); 6.9 (triplet, 1H); 3.9 (singlet, 3H) |',
    questions: [
      {
        question: 'How many degrees of unsaturation (rings plus π bonds) does compound X have, and which structural features account for them?',
        options: [
          'Four: the benzene ring and its three C=C bonds',
          'Five: the benzene ring and one C=O bond',
          'Five: the benzene ring and a second, oxygen-containing ring',
          'Six: the benzene ring and two C=O double bonds',
        ],
        correctAnswer: 1,
        explanation:
          'For C₈H₈O₃, degrees of unsaturation = (2C + 2 − H)/2 = (18 − 8)/2 = 5 (oxygen does not change the count). A benzene ring accounts for four (one ring and three C=C bonds), and the strong IR band at 1680 cm⁻¹ shows a carbonyl group, which accounts for the fifth. Four omits that carbonyl. A second, oxygen-containing ring would also give five but leaves the 1680 cm⁻¹ carbonyl band unexplained, and none of the candidates has one. Six would require two fewer hydrogens (C₈H₆O₃).',
        skill: '5D molecular formula and unsaturation',
      },
      {
        question: 'If the NMR sample of X were shaken with a few drops of D₂O and the ¹H NMR spectrum recorded again, which signal would be expected to disappear?',
        options: ['The 3H singlet at 3.9 ppm', 'The 1H triplet at 6.9 ppm', 'The 1H doublet at 7.8 ppm', 'The 1H singlet at 10.8 ppm'],
        correctAnswer: 3,
        explanation:
          'Protons on oxygen (and nitrogen) exchange rapidly with deuterium from D₂O, and deuterium does not appear in a ¹H spectrum, so the 1H singlet at 10.8 ppm, the O–H proton, disappears. The 3H singlet at 3.9 ppm belongs to the methyl group bonded to oxygen, whose C–H protons do not exchange. The triplet at 6.9 ppm and the doublet at 7.8 ppm are aromatic C–H protons, which are also non-exchangeable under these conditions.',
        skill: '5D ¹H NMR (exchangeable protons)',
      },
      {
        question: 'Which candidate structure is ruled out by the aromatic region of the ¹H NMR spectrum, and why?',
        options: [
          'Methyl 4-hydroxybenzoate, because its symmetry would give two aromatic signals of 2H each',
          'Methyl 2-hydroxybenzoate, because its ring would give only two aromatic signals of 2H each',
          '2-Methoxybenzoic acid, because its ring would give five aromatic signals of 1H each',
          'Methyl 4-hydroxybenzoate, because each of its ring protons would appear as a singlet',
        ],
        correctAnswer: 0,
        explanation:
          'X shows four aromatic signals of 1H each, so its four ring protons are all inequivalent. In methyl 4-hydroxybenzoate a mirror plane through the two substituents makes the ring protons equivalent in pairs, giving two 2H signals, each split into a doublet by its single neighbor; this isomer is therefore excluded. The two candidates with adjacent substituents lack that symmetry and should each give four 1H signals, so the claims that methyl 2-hydroxybenzoate would give two signals or that 2-methoxybenzoic acid would give five are both false (a disubstituted benzene has only four ring hydrogens). The para isomer’s ring protons each have a neighboring proton, so they would be doublets, not singlets.',
        skill: '5D ¹H NMR (symmetry and equivalence)',
      },
      {
        question: 'Which additional observation would show that X is methyl 2-hydroxybenzoate rather than 2-methoxybenzoic acid?',
        options: [
          'X dissolves when it is shaken with 1 M aqueous sodium hydroxide',
          'X gives a molecular ion at m/z 152 in its electron-ionization spectrum',
          'X stays in ether when it is shaken with aqueous sodium bicarbonate',
          'X gives a 3H singlet near 3.9 ppm in its ¹H NMR spectrum',
        ],
        correctAnswer: 2,
        explanation:
          'A carboxylic acid (p$K_a$ near 4) is deprotonated by bicarbonate, whose conjugate acid has a p$K_a$ near 6.4, and moves into the aqueous layer as its carboxylate salt; a phenol (p$K_a$ near 10) is not deprotonated by bicarbonate and stays in the ether. Retention in ether therefore excludes 2-methoxybenzoic acid. Sodium hydroxide deprotonates both a phenol and a carboxylic acid, so dissolution in it cannot tell them apart. Both candidates have the formula C₈H₈O₃ and a molecular ion at 152, and both contain an O–CH₃ group that gives a 3H singlet near 3.9 ppm.',
        skill: '5C extraction and acidity (research design)',
      },
    ],
  },
]

export const FL2_CHEM_PHYS_A_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl2-cp-a-d01',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'Which set of quantum numbers $(n, l, m_l, m_s)$ could describe an electron in a 3d orbital?',
    options: [
      '$(3, 3, 0, +\\tfrac{1}{2})$',
      '$(3, 1, 2, -\\tfrac{1}{2})$',
      '$(2, 2, 1, +\\tfrac{1}{2})$',
      '$(3, 2, -2, +\\tfrac{1}{2})$',
    ],
    correctAnswer: 3,
    explanation:
      'A 3d electron has $n = 3$ and $l = 2$ (d), and $m_l$ may take any integer value from $-l$ to $+l$, so $-2$ is allowed, as is either spin. The set with $l = 3$ is impossible because $l$ can be at most $n - 1$, and $l = 3$ would be an f orbital in any case. The set with $l = 1$ describes a p orbital, and $m_l = 2$ lies outside the range $-1$ to $+1$ allowed for it. The set with $n = 2$ and $l = 2$ is forbidden, since there is no 2d subshell.',
    skill: '4E quantum numbers',
  },
  {
    id: 'fl2-cp-a-d02',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'For the reaction 2 NO(g) + O₂(g) → 2 NO₂(g), doubling the initial concentration of NO while holding O₂ constant quadruples the initial rate, and doubling both concentrations together increases the initial rate eightfold. The rate law is:',
    options: ['rate = k[NO]²[O₂]', 'rate = k[NO][O₂]', 'rate = k[NO]²[O₂]²', 'rate = k[NO]²'],
    correctAnswer: 0,
    explanation:
      'Quadrupling on doubling NO makes the reaction second order in NO. Doubling both multiplies the rate by 8, of which a factor of 4 comes from NO, so doubling O₂ contributes a factor of 2, making the reaction first order in O₂: rate = k[NO]²[O₂]. First order in NO would give only a doubling when NO is doubled. Second order in O₂ would give a 16-fold increase when both are doubled. Omitting O₂ from the rate law would give only a 4-fold increase when both are doubled.',
    skill: '5E rate laws (method of initial rates)',
  },
  {
    id: 'fl2-cp-a-d03',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'Which of the following, when added to 1.0 L of 0.10 M acetic acid ($\\text{p}K_a = 4.76$), produces a solution with a pH closest to 4.76?',
    options: ['0.100 mol of NaOH', '0.050 mol of HCl', '0.050 mol of NaOH', '0.100 mol of NaCl'],
    correctAnswer: 2,
    explanation:
      'Adding 0.050 mol of NaOH converts half of the 0.10 mol of acetic acid to acetate, so the acid and its conjugate base are present in equal amounts and, by the Henderson–Hasselbalch equation, pH = p$K_a$ = 4.76. Adding 0.100 mol of NaOH converts all of the acid to acetate, giving a weakly basic solution near pH 9. Adding HCl leaves no acetate and makes the solution strongly acidic, near pH 1.3. Sodium chloride supplies neither a weak base nor a strong acid or base, so the solution remains 0.10 M acetic acid, near pH 2.9.',
    skill: '5A buffers',
  },
  {
    id: 'fl2-cp-a-d04',
    section: 'chem-phys',
    discipline: 'physics',
    question: 'A monitor alarm produces a sound level of 80 dB at a distance of 1.0 m. Treating the alarm as a point source that radiates equally in all directions, what is the sound level 10 m from the alarm?',
    options: ['0.80 dB', '8.0 dB', '70 dB', '60 dB'],
    correctAnswer: 3,
    explanation:
      'Intensity from a point source falls as $1/r^2$, so moving from 1.0 m to 10 m reduces intensity by a factor of 100. Because $\\beta = 10\\log(I/I_0)$, each factor of 10 in intensity changes the level by 10 dB, so the level falls by 20 dB, to 60 dB. The 70 dB value assumes intensity falls only as $1/r$. The 8.0 dB and 0.80 dB values divide the decibel level itself by the distance ratio or its square, treating a logarithmic scale as though it were proportional to intensity.',
    skill: '4D sound intensity and decibels',
  },
  {
    id: 'fl2-cp-a-d05',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question: 'Under cellular conditions, the reaction catalyzed by enzyme E in a metabolic pathway has ΔG ≈ 0, whereas the reaction catalyzed by enzyme F has ΔG = −30 kJ/mol. Which enzyme is the more likely site of regulation of flux through the pathway, and why?',
    options: [
      'F, because the rate of a reaction far from equilibrium is set largely by enzyme activity',
      'E, because a reaction near equilibrium responds most to changes in enzyme activity',
      'F, because a large negative ΔG means that the reaction has a small activation energy',
      'E, because a reaction with ΔG near zero cannot proceed unless it is regulated',
    ],
    correctAnswer: 0,
    explanation:
      'A reaction with a large negative ΔG is far from equilibrium and essentially irreversible, so its net rate depends on how much active enzyme is present; changing the activity of F changes pathway flux. A reaction near equilibrium runs rapidly in both directions, and its net direction follows the concentrations of substrates and products, so changing the activity of E has little effect on flux. ΔG is a thermodynamic quantity and says nothing about the activation energy. A reaction with ΔG near zero can proceed in either direction as concentrations change, without being regulated.',
    skill: '5E thermodynamics and enzyme regulation',
  },
  {
    id: 'fl2-cp-a-d06',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question: 'When crystalline α-D-glucopyranose is dissolved in water, the optical rotation of the solution changes over several hours until the solution contains about 36% of the α form and 64% of the β form. This change occurs because:',
    options: [
      'the α form is gradually converted into its enantiomer, L-glucose',
      'the ring opens to the aldehyde and recloses with either configuration at C-1',
      'the configuration at C-2 inverts through an enediol intermediate',
      'the six-membered ring contracts to a five-membered furanose ring',
    ],
    correctAnswer: 1,
    explanation:
      'The α and β forms are anomers, differing only at C-1, the anomeric carbon created when the C-5 hydroxyl adds to the aldehyde to form a cyclic hemiacetal. The hemiacetal opens reversibly to the open-chain aldehyde and can close from either face, so the two anomers interconvert until they reach equilibrium, a process called mutarotation. Conversion to L-glucose would require inverting every stereocenter. Inversion at C-2 would produce D-mannose, not β-D-glucose. Glucose forms only a small amount of furanose, which cannot account for a mixture that is almost entirely α- and β-pyranose.',
    skill: '5D carbohydrate structure (anomers)',
  },
  {
    id: 'fl2-cp-a-d07',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question: 'RNA is rapidly hydrolyzed in dilute aqueous base, whereas DNA is stable under the same conditions. The structural feature responsible for this difference is:',
    options: [
      'the uracil base of RNA, which lacks the methyl group of thymine',
      'the 5′-triphosphate group found at the start of every RNA chain',
      'the single-stranded structure of most of the RNA molecules in a cell',
      'the 2′-hydroxyl of ribose, which can attack a nearby phosphate',
    ],
    correctAnswer: 3,
    explanation:
      'In base, the deprotonated 2′-hydroxyl of ribose attacks the neighboring phosphorus of the 3′,5′-phosphodiester bond, forming a 2′,3′-cyclic phosphate and cleaving the chain; deoxyribose lacks this hydroxyl, so DNA resists base hydrolysis. The bases are not part of the sugar–phosphate backbone and do not affect its cleavage. A 5′-triphosphate lies at a single chain end and cannot explain cleavage throughout the molecule. Single-stranded DNA is also stable in dilute base, so strandedness is not the cause.',
    skill: '5D nucleotide structure',
  },
  {
    id: 'fl2-cp-a-d08',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    question: 'Which of the following lists the compounds in order of increasing acidity as Brønsted acids (proton donors)?',
    options: [
      'ethylamine < ethanol < phenol < acetic acid',
      'ethanol < ethylamine < phenol < acetic acid',
      'ethylamine < phenol < ethanol < acetic acid',
      'ethylamine < ethanol < acetic acid < phenol',
    ],
    correctAnswer: 0,
    explanation:
      'Acidity depends on the stability of the conjugate base. The amide anion from ethylamine places the charge on nitrogen, which is less electronegative than oxygen (p$K_a$ near 35), so ethylamine is the weakest acid. Ethoxide localizes its charge on one oxygen (p$K_a$ near 16). Phenoxide delocalizes its charge into the aromatic ring (p$K_a$ near 10), and acetate delocalizes it equally over two oxygens (p$K_a$ near 4.8), making acetic acid the strongest. Placing ethanol below ethylamine reverses the electronegativity effect, and ranking phenol below ethanol or above acetic acid misjudges the extent of resonance stabilization.',
    skill: '5D acidity of functional groups',
  },
]
