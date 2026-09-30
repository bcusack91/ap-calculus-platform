/**
 * MCAT Full-Length Form 4 — Chemical & Physical Foundations, file A
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

export const FL4_CHEM_PHYS_A_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 1. PHYSICS (experiment, chart) — Tendon elasticity: stress, strain, modulus
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-cp-a-01',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Elastic Behavior of Tendon After Limb Immobilization',
    passageText:
      'Tendons transmit the force of muscle contraction to bone, and in the lower limb they also act as springs, storing elastic energy when they are stretched and returning much of it when they recoil. The mechanical behavior of a tendon is described by the relationship between stress and strain. Stress, $\\sigma$, is the force applied perpendicular to a cross-section divided by the area of that cross-section, $\\sigma = F/A$; it has units of pressure, and 1 MPa equals $10^6\\ \\text{N/m}^2$, or 1 N/mm². Strain, $\\varepsilon$, is the fractional change in length, $\\varepsilon = \\Delta L/L_0$, and is dimensionless; it is often expressed as a percentage. Where stress is proportional to strain, the material obeys Hooke’s law, and the constant of proportionality, $E = \\sigma/\\varepsilon$, is Young’s modulus. Because stress and strain are both normalized to the dimensions of the specimen, Young’s modulus characterizes the material rather than a particular sample.\n\nTendon is composed mainly of type I collagen fibrils aligned along its long axis. At rest the fibrils are slightly wavy, a pattern called crimp. When a tendon is first loaded, the crimp straightens, and relatively little stress is needed to produce additional strain; this nonlinear portion of the curve is called the toe region. Once the fibrils are straight they are stretched directly, and stress then rises linearly with strain. At still larger strains, individual fibrils begin to slide past one another and rupture, the slope of the curve decreases, and the tendon eventually fails. In normal activity, tendons are loaded only within the toe and linear regions.\n\nThe work done in stretching an elastic material is stored as elastic potential energy. For any specimen, the energy stored equals the area under its force–elongation curve, and the energy stored per unit volume equals the area under its stress–strain curve. Not all of the stored energy is recovered. When a loaded tendon is unloaded, the unloading curve lies slightly below the loading curve, and the energy represented by the area between the two curves, typically less than a tenth of the energy stored, is dissipated as heat.\n\nImmobilization of a limb, as in a cast, is known to alter the composition of tendon. To measure its mechanical effect, investigators immobilized one hindlimb of each of 12 adult sheep for 8 weeks while the opposite limb bore weight normally. The digital flexor tendons of both limbs were then harvested. From each tendon a specimen with a gauge length of 50 mm was cut, and its cross-sectional area was measured with a laser micrometer; areas ranged from 15 to 25 mm². Each specimen was clamped in a materials-testing machine, kept moist with saline at 37 °C, and stretched at a constant rate while force and elongation were recorded. Force was converted to stress using each specimen’s own cross-sectional area, and elongation was converted to strain. The mean stress–strain curves of the two groups are shown in Figure 1. Every specimen failed at a strain between 8% and 10%.',
    chart: {
      title: 'Figure 1. Mean stress–strain curves of flexor tendons from weight-bearing (control) and immobilized limbs',
      kind: 'line',
      xLabel: 'Strain',
      xUnit: '%',
      yLabel: 'Stress',
      yUnit: 'MPa',
      xValues: [0, 1, 2, 3, 4, 5, 6, 7],
      yValues: [0, 3, 10, 22, 34, 46, 55, 60],
      seriesLabel: 'Control (weight-bearing) limb',
      comparisonSeries: [{ label: 'Immobilized limb', yValues: [0, 2, 7, 15, 23, 31, 36, 39] }],
    },
    questions: [
      {
        question: 'Based on Figure 1, the Young’s modulus of the control tendons in their linear region is closest to:',
        options: ['0.92 GPa', '1.2 GPa', '9.2 GPa', '12 GPa'],
        correctAnswer: 1,
        explanation:
          'In the linear region (2% to 5% strain) the control stress rises 12 MPa for each 1% of strain, so $E = 12\\ \\text{MPa}/0.01 = 1200\\ \\text{MPa} = 1.2$ GPa. The 0.92 GPa value divides the stress at 5% strain by the total strain from the origin, which folds the compliant toe region into the calculation. The 9.2 GPa and 12 GPa values result from treating a percentage as a tenth rather than a hundredth, applied to the secant and to the true slope respectively.',
        skill: '4A Young’s modulus from a stress–strain curve (Skill 4)',
      },
      {
        question: 'During push-off in a jump, a human Achilles tendon with a cross-sectional area of 80 mm² transmits a peak force of 3.2 kN. If the tendon has the same material properties as the control tendons in Figure 1, its peak strain is closest to:',
        options: ['1.1%', '3.3%', '4.5%', '7.0%'],
        correctAnswer: 2,
        explanation:
          'The stress is $\\sigma = F/A = 3200\\ \\text{N}/80\\ \\text{mm}^2 = 40$ N/mm², or 40 MPa, and the control curve reaches 40 MPa midway between 34 MPa at 4% and 46 MPa at 5%, at about 4.5% strain. The 3.3% value divides 40 MPa by the linear-region modulus as if Hooke’s law held from zero strain, ignoring the toe region. The 7.0% value reads the immobilized curve, not the control curve. The 1.1% value comes from converting 80 mm² to $8.0 \\times 10^{-4}$ m², which gives a stress ten times too small.',
        skill: '4A stress and strain (Skill 2)',
      },
      {
        question: 'A control specimen twice as long as those tested, with the same cross-sectional area, is stretched by the same force as a standard specimen. Compared with the standard specimen, the longer specimen would experience:',
        options: [
          'the same stress, the same strain, and twice the elongation',
          'the same stress, half the strain, and the same elongation',
          'twice the stress, twice the strain, and twice the elongation',
          'half the stress, the same strain, and twice the elongation',
        ],
        correctAnswer: 0,
        explanation:
          'Stress depends only on force and cross-sectional area, which are unchanged, and the strain produced by a given stress is set by the material, so strain is also unchanged; because strain is elongation divided by original length, doubling the length doubles the elongation. Halving the strain would require a stiffer material, not a longer sample. Doubling the stress would require doubling the force or halving the area. Length does not enter the definition of stress, so the stress cannot be halved by lengthening the specimen.',
        skill: '4A Hooke’s law and elastic properties (Skill 1)',
      },
      {
        question: 'A reviewer notes that the immobilized tendons had smaller cross-sectional areas than the control tendons and argues that this difference, rather than any change in the tissue itself, explains the lower curve in Figure 1. This objection is:',
        options: [
          'valid, because a thinner specimen carries less force at any elongation',
          'valid, because a thinner specimen is stretched through a greater strain',
          'invalid, because every specimen was stretched at the same rate of strain',
          'invalid, because each stress value used that specimen’s own area',
        ],
        correctAnswer: 3,
        explanation:
          'Force was divided by each specimen’s own measured area, so a thinner tendon made of the same tissue would carry proportionally less force and produce the same stress at any strain; a lower stress–strain curve therefore reflects a change in the material. A thinner specimen does carry less force, but that difference is removed by the normalization, so it cannot account for Figure 1. Strain is set by the elongation imposed by the machine and the gauge length, not by the area. Stretching at the same rate is a sound procedural control, but it does not address the reviewer’s concern about area.',
        skill: '4A normalization in experimental design (Skill 3)',
      },
      {
        question: 'For a control specimen with a cross-sectional area of 20 mm², how much additional elastic energy is stored as its strain is increased from 2% to 4%?',
        options: ['0.24 J', '0.44 J', '0.68 J', '0.88 J'],
        correctAnswer: 1,
        explanation:
          'From Figure 1, the stress rises from 10 MPa to 34 MPa, so the force rises from 200 N to 680 N, while the specimen lengthens by 2% of 50 mm, or 1.0 mm. Because the curve is linear over this interval, the energy is the average force times the elongation: $(440\\ \\text{N})(1.0 \\times 10^{-3}\\ \\text{m}) = 0.44$ J. The 0.24 J value counts only the triangular area above 200 N and omits the force already present at 2% strain. The 0.68 J value multiplies the final force by the elongation, as if that force acted throughout. The 0.88 J value adds the initial and final forces without dividing by two.',
        skill: '4A elastic potential energy (Skill 2)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 2. GENERAL CHEMISTRY (experiment, table) — Bomb calorimetry of foods
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-cp-a-02',
    section: 'chem-phys',
    discipline: 'general chemistry',
    title: 'Bomb Calorimetry of Nutrients',
    passageText:
      'The energy values printed on food labels ultimately rest on combustion measurements. In a bomb calorimeter, a dried, weighed sample is sealed in a thick-walled steel vessel, the bomb, which is filled with pure O₂ at about 30 atm and ignited with an electrically heated wire. The sample burns completely: its carbon is converted to CO₂, its hydrogen to H₂O and its nitrogen, if any, mostly to N₂. The bomb is submerged in a fixed mass of water inside an insulated container, and the heat released raises the temperature of the water, the bomb, the stirrer and the thermometer together. Because the bomb is sealed and rigid, the combustion takes place at constant volume.\n\nThe heat released by a sample is $q = C_{cal}\\Delta T$, where $\\Delta T$ is the temperature rise and $C_{cal}$ is the heat capacity of the whole assembly. $C_{cal}$ is found by burning a standard whose energy of combustion is accurately known. Benzoic acid, which releases 26.4 kJ per gram, is the usual choice, and it is burned under the same conditions, with the same mass of water in the container, that are later used for the samples.\n\nEnthalpy is a state function, so the enthalpy change for converting a given set of reactants into a given set of products does not depend on the pathway taken (Hess’s law). For this reason, the energy released when the body oxidizes carbohydrate or fat to CO₂ and H₂O equals the energy released when the same mass burns in the calorimeter, even though metabolism proceeds through many enzyme-catalyzed steps. Protein is different. The body does not convert the nitrogen of amino acids to N₂; most of it is excreted in urine as urea, CO(NH₂)₂, a compound that can itself still be burned. The energy that a protein supplies to the body is therefore smaller than its heat of combustion. Food composition tables also correct for the fraction of each nutrient that escapes digestion.\n\nTo obtain values for the major nutrient classes, investigators calibrated a bomb calorimeter with benzoic acid and then burned samples of sucrose, olive oil, casein (a milk protein) and urea, each in duplicate. They also burned a dried commercial snack mix whose label listed carbohydrate and fat as its only energy-yielding ingredients. The mean temperature rises are listed in Table 1. The energy unit used on food labels, the kilocalorie (kcal, or dietary Calorie), equals 4.18 kJ.\n\nAccurate results require that combustion be complete. After each run the bomb was opened and inspected for soot, and runs in which unburned residue was found were discarded. The temperature of the water was recorded for several minutes before ignition and after the maximum was reached so that small heat exchanges with the room could be corrected for.',
    figure:
      '**Table 1. Mean temperature rise in the calorimeter for each sample**\n\n| Sample | Mass burned (g) | ΔT (°C) |\n|---|---|---|\n| Benzoic acid (standard) | 1.000 | 2.64 |\n| Sucrose | 1.000 | 1.65 |\n| Olive oil | 0.500 | 1.95 |\n| Casein | 0.800 | 1.88 |\n| Urea | 1.000 | 1.05 |\n| Snack mix | 1.000 | 2.10 |',
    questions: [
      {
        question: 'For each combustion described in the passage, the quantity $C_{cal}\\Delta T$ is equal in magnitude to:',
        options: [
          'the enthalpy change, because the surrounding water stays at constant pressure',
          'the enthalpy change, because all of the heat released is absorbed by the water',
          'the internal energy change, because the O₂ is present in a large excess',
          'the internal energy change, because the gases cannot do expansion work',
        ],
        correctAnswer: 3,
        explanation:
          'By the first law, $\\Delta U = q + w$; in a rigid, sealed bomb the volume cannot change, so no pressure–volume work is done and the heat exchanged equals $\\Delta U$ rather than $\\Delta H$. The water outside is at constant pressure, but the reacting system inside the bomb is not, so the enthalpy change is not measured directly. Heat being absorbed by the assembly (not the water alone) says where the energy goes, not which state function it equals. Excess O₂ ensures complete combustion but has nothing to do with whether work is done.',
        skill: '5E heat at constant volume (Skill 1)',
      },
      {
        question: 'Based on Table 1, the energy of combustion of casein is closest to:',
        options: ['5.6 kcal/g', '7.0 kcal/g', '18.8 kcal/g', '23.5 kcal/g'],
        correctAnswer: 0,
        explanation:
          'The benzoic acid run gives $C_{cal} = 26.4\\ \\text{kJ}/2.64\\ ^\\circ\\text{C} = 10.0$ kJ/°C, so the casein sample released $(10.0)(1.88) = 18.8$ kJ, or $18.8/0.800 = 23.5$ kJ/g, which is $23.5/4.18 \\approx 5.6$ kcal/g. The 23.5 kcal/g value omits the conversion from kilojoules. The 18.8 kcal/g value omits both the division by mass and the unit conversion. The 7.0 kcal/g value divides by the 0.800 g mass a second time.',
        skill: '5E calorimetry calculation (Skill 4)',
      },
      {
        question: 'Suppose that when 1.00 g of casein is oxidized in the body, all of its carbon and hydrogen end up as CO₂ and H₂O and all of its nitrogen ends up in 0.30 g of urea. Based on Table 1, the energy released by this gram of casein in the body is closest to:',
        options: ['3.2 kJ', '13.0 kJ', '20.4 kJ', '23.5 kJ'],
        correctAnswer: 2,
        explanation:
          'By Hess’s law, burning casein completely (23.5 kJ/g, from 18.8 kJ per 0.800 g) is equivalent to oxidizing it to CO₂, H₂O and urea and then burning the urea, so the body’s yield is the heat of combustion of casein minus that of 0.30 g of urea: urea releases $(10.0)(1.05) = 10.5$ kJ/g, and $23.5 - (0.30)(10.5) \\approx 20.4$ kJ. The 23.5 kJ value ignores the energy left in urea. The 13.0 kJ value subtracts the combustion energy of a full gram of urea instead of 0.30 g. The 3.2 kJ value is the energy retained in the urea, not the energy released.',
        skill: '5E Hess’s law (Skill 2)',
      },
      {
        question: 'If the carbohydrate in the snack mix has the same energy of combustion per gram as sucrose and its fat has the same value as olive oil, the percentage of fat by mass in the dried snack mix is closest to:',
        options: ['12%', '20%', '54%', '80%'],
        correctAnswer: 1,
        explanation:
          'From Table 1, sucrose releases 16.5 kJ/g, olive oil releases $19.5/0.500 = 39.0$ kJ/g and the snack mix releases 21.0 kJ/g. For a fat fraction $x$, $16.5(1 - x) + 39.0x = 21.0$, so $22.5x = 4.5$ and $x = 0.20$. The 80% value is the carbohydrate fraction. The 54% value attributes all of the snack’s energy to fat ($21.0/39.0$). The 12% value attributes only the energy in excess of sucrose to fat ($4.5/39.0$), ignoring that each gram of fat also displaces a gram of carbohydrate.',
        skill: '5E energy content of mixtures (Skill 2)',
      },
      {
        question: 'Suppose that after the benzoic acid run, but before the food samples were burned, additional water had been added to the container by mistake. The energies calculated for the food samples would be:',
        options: [
          'too high, because the added water would absorb more heat from the bomb',
          'unchanged, because the calibration already accounts for the water used',
          'too low, because the same heat would produce a smaller temperature rise',
          'unchanged, because the energy released depends only on each sample',
        ],
        correctAnswer: 2,
        explanation:
          'Adding water raises the true heat capacity of the assembly, so a given amount of heat produces a smaller $\\Delta T$; multiplying that smaller $\\Delta T$ by the old, too-small $C_{cal}$ underestimates the heat released. The calibration accounts only for the water present when benzoic acid was burned, which is why the passage requires the same mass of water in every run. The energy released does depend only on the sample, but the calculated value depends on the calibration being valid. More water absorbs the same total heat spread over more mass; it does not create additional heat, so the results cannot be too high.',
        skill: '5E calibration and systematic error (Skill 3)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 3. BIOCHEMISTRY (information) — Bioenergetics and coupled reactions
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-cp-a-03',
    section: 'chem-phys',
    discipline: 'biochemistry',
    title: 'Free Energy and Phosphoryl Transfer in the Cell',
    passageText:
      'Living cells carry out many processes that would not proceed on their own: they assemble proteins and nucleic acids from monomers, pump ions against concentration gradients and generate mechanical force. Each such process is made possible by linking it to a second process whose free energy change is sufficiently negative, most often the hydrolysis of ATP to ADP and inorganic phosphate (Pᵢ).\n\nWhether a reaction can proceed in the direction written is determined by its free energy change under the actual conditions,\n\n$\\Delta G = \\Delta G^{\\circ\\prime} + RT\\ln Q$\n\nwhere $Q$ is the reaction quotient formed from the molar concentrations of products and reactants. The standard free energy change, $\\Delta G^{\\circ\\prime}$, is the value of $\\Delta G$ when every reactant and product is at 1 M and the pH is 7. It is a constant for a given reaction at a given temperature and is related to the equilibrium constant by $\\Delta G^{\\circ\\prime} = -RT\\ln K\'_{eq}$. A reaction proceeds spontaneously in the forward direction only if $\\Delta G$ is negative, and it is at equilibrium when $\\Delta G = 0$, that is, when $Q = K\'_{eq}$. At 37 °C, $RT\\ln 10$ is about 5.9 kJ/mol, so every tenfold decrease in $Q$ makes $\\Delta G$ about 5.9 kJ/mol more negative.\n\nFor ATP hydrolysis, $\\Delta G^{\\circ\\prime}$ is about −30.5 kJ/mol. Cells never allow this reaction to approach equilibrium. Oxidative phosphorylation and the transfer reactions described below keep the concentration of ATP high relative to those of ADP and Pᵢ, so under cellular conditions the free energy available from hydrolyzing ATP differs substantially from the standard value and varies from one tissue to another.\n\nWhen two reactions share a common intermediate, their free energy changes add. Consider the first step of glycolysis. The direct reaction of glucose with Pᵢ to form glucose 6-phosphate has a positive $\\Delta G^{\\circ\\prime}$ and does not occur to a useful extent in the cell. The enzyme hexokinase instead transfers the terminal phosphoryl group of ATP to glucose, so the overall reaction is the sum of glucose phosphorylation and ATP hydrolysis, and its $\\Delta G^{\\circ\\prime}$ is negative. The coupling depends entirely on the enzyme mechanism: an enzyme that simply hydrolyzed ATP in the vicinity of glucose would release the same free energy as heat and phosphorylate nothing.\n\nThe tendency of a phosphorylated compound to donate its phosphoryl group is called its phosphoryl-transfer potential and is measured by its standard free energy of hydrolysis. Representative values of $\\Delta G^{\\circ\\prime}$ of hydrolysis, in kJ/mol, are −61.9 for phosphoenolpyruvate, −49.4 for 1,3-bisphosphoglycerate, −43.1 for creatine phosphate, −30.5 for ATP (to ADP and Pᵢ), −20.9 for glucose 1-phosphate, −13.8 for glucose 6-phosphate and −9.2 for glycerol 3-phosphate. Under standard conditions, a compound can transfer its phosphoryl group to the dephosphorylated form of any compound with a less negative value. ATP occupies an intermediate position in this series. It can therefore accept phosphoryl groups from compounds such as phosphoenolpyruvate and 1,3-bisphosphoglycerate, which are formed in glycolysis, and donate them to acceptors such as glucose and glycerol, acting as a carrier of phosphoryl groups rather than as a long-term energy store. Longer-term storage in muscle takes a different form: creatine phosphate accumulates in resting muscle and regenerates ATP within milliseconds at the onset of contraction, before glycolysis and oxidative phosphorylation have had time to accelerate.',
    questions: [
      {
        question: 'Based on the passage, what is $\\Delta G^{\\circ\\prime}$ for the reaction creatine phosphate + ADP → creatine + ATP?',
        options: ['−73.6 kJ/mol', '−43.1 kJ/mol', '−12.6 kJ/mol', '+12.6 kJ/mol'],
        correctAnswer: 2,
        explanation:
          'The reaction is the sum of creatine phosphate hydrolysis (−43.1 kJ/mol) and the reverse of ATP hydrolysis (+30.5 kJ/mol), so $\\Delta G^{\\circ\\prime} = -43.1 + 30.5 = -12.6$ kJ/mol. The −73.6 kJ/mol value adds the two hydrolysis values without reversing the ATP step. The −43.1 kJ/mol value is the hydrolysis of creatine phosphate alone and ignores the energy captured in ATP. The +12.6 kJ/mol value describes the reverse reaction, phosphorylation of creatine by ATP.',
        skill: '5E coupled reactions and additivity of ΔG (Skill 2)',
      },
      {
        question: 'In resting skeletal muscle at 37 °C, the concentrations of ATP, free ADP and Pᵢ are about 5 mM, 0.05 mM and 1 mM, respectively. Under these conditions, $\\Delta G$ for ATP hydrolysis is closest to:',
        options: ['−60 kJ/mol', '−42 kJ/mol', '−30.5 kJ/mol', '−1 kJ/mol'],
        correctAnswer: 0,
        explanation:
          'The reaction quotient is $Q = [\\text{ADP}][\\text{P}_i]/[\\text{ATP}] = (5 \\times 10^{-5})(1 \\times 10^{-3})/(5 \\times 10^{-3}) = 10^{-5}$, so $\\Delta G = -30.5 + (5.9)(-5) \\approx -60$ kJ/mol. The −42 kJ/mol value omits Pᵢ from the quotient, which makes $Q = 10^{-2}$. The −30.5 kJ/mol value is the standard value, which applies only when all species are at 1 M. The −1 kJ/mol value adds the concentration term with the wrong sign.',
        skill: '5E ΔG under cellular conditions (Skill 2)',
      },
      {
        question: 'A solution of pure ATP at pH 7 and 25 °C, with no enzymes present, hydrolyzes only very slowly over a period of days. This observation is best explained by the fact that:',
        options: [
          'the $\\Delta G$ of hydrolysis becomes positive once a small amount of ADP is present',
          'ATP hydrolysis is endergonic unless it is coupled to an unfavorable reaction',
          'the $\\Delta G^{\\circ\\prime}$ value applies only at 37 °C and is close to zero at 25 °C',
          'the uncatalyzed hydrolysis of ATP must pass through a high-energy transition state',
        ],
        correctAnswer: 3,
        explanation:
          'Thermodynamics determines whether a reaction can occur, not how fast; ATP is thermodynamically unstable in water but kinetically stable because the uncatalyzed reaction must pass through a high-energy transition state, which enzymes lower. A trace of ADP makes $Q$ tiny, so $\\Delta G$ remains strongly negative. ATP hydrolysis is exergonic on its own; coupling is needed to drive the other, unfavorable reaction, not the hydrolysis. Standard values are commonly tabulated at 25 °C, and a modest temperature change could not bring a −30.5 kJ/mol reaction near zero.',
        skill: '5E thermodynamics versus kinetics (Skill 1)',
      },
      {
        question: 'A reaction A → B has $\\Delta G^{\\circ\\prime}$ = +20 kJ/mol. Which of the following would allow net conversion of A to B in a cell without coupling the reaction directly to ATP?',
        options: [
          'raising the concentration of B relative to that of A in the cell',
          'adding an enzyme that lowers the activation energy for A → B',
          'continuously converting B into C by a reaction with a very negative $\\Delta G$',
          'supplying heat from ATP hydrolysis to the enzyme that converts A to B',
        ],
        correctAnswer: 2,
        explanation:
          'Removing B keeps the ratio [B]/[A] far below $K\'_{eq}$, so $RT\\ln Q$ becomes negative enough to outweigh the positive $\\Delta G^{\\circ\\prime}$; many unfavorable metabolic steps are pulled forward by a strongly exergonic step that follows. Raising [B] relative to [A] increases $Q$ and makes $\\Delta G$ more positive. A catalyst speeds approach to equilibrium in both directions but does not change $\\Delta G$. Heat cannot be converted into chemical work at constant temperature in a cell; free energy must be transferred through a shared intermediate.',
        skill: '5E mass action and reaction direction (Skill 1)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 4. PHYSICS (information) — Magnetic force, induction, and medical devices
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-cp-a-04',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Magnetic Fields in Flow Measurement and Imaging',
    passageText:
      'Magnetic fields are used throughout medicine, from the flow probes of vascular surgery to magnetic resonance imaging (MRI), and a few principles explain both how such devices work and why they can endanger patients who carry implants.\n\nA particle with charge $q$ moving with velocity $\\vec{v}$ through a magnetic field $\\vec{B}$ experiences the force $\\vec{F} = q\\vec{v} \\times \\vec{B}$. Its magnitude is $qvB\\sin\\theta$, where $\\theta$ is the angle between the velocity and the field, and its direction is perpendicular to both. A charge at rest experiences no magnetic force, and because the force is always perpendicular to the velocity, it changes the direction of a moving charge but not its speed.\n\nBlood is an electrolyte solution, and this force is the basis of the electromagnetic flowmeter. A probe clipped around an artery contains a small magnet that produces a uniform field across the vessel, perpendicular to its long axis, and two electrodes touch the outside of the vessel wall on opposite sides, along a line perpendicular to both the field and the flow. As blood moves, positive and negative ions are pushed toward opposite electrodes. The charge that accumulates creates an electric field $E$ across the vessel, and accumulation stops when the electric force on each ion balances the magnetic force, $qE = qvB$. The voltage between the electrodes, $\\Delta V = Ed$, where $d$ is the inner diameter of the vessel, is therefore proportional to the mean flow velocity, and multiplying the velocity by the cross-sectional area of the lumen gives the volume flow rate.\n\nMagnetic fields also generate voltages when they change. The magnetic flux through a flat loop of area $A$ is $\\Phi = BA\\cos\\phi$, where $\\phi$ is the angle between the field and the line perpendicular to the plane of the loop. By Faraday’s law, a change in flux induces an emf around the loop, $\\mathcal{E} = -N\\,\\Delta\\Phi/\\Delta t$ for a coil of $N$ turns, and if the loop is conducting, a current flows. By Lenz’s law, the induced current flows in the direction whose own magnetic field opposes the change in flux that produced it.\n\nA clinical MRI scanner has a static field of 1.5 to 3 T, tens of thousands of times stronger than Earth’s field. Three features of the scanner concern patients with implants. First, objects made of ferromagnetic materials, such as iron, nickel and some steels, become strongly magnetized. In a uniform field, a magnetized object experiences a torque that aligns it with the field but no net force; a net force requires a field that varies with position, as the scanner’s field does most steeply near the entrance to its bore, where loose ferromagnetic objects can become projectiles. Second, during imaging, gradient coils switch additional fields of a few tens of millitesla on and off within fractions of a millisecond, inducing emfs in any conducting loop, including the loop formed by a pacemaker lead and the tissue between its ends. Third, radio-frequency pulses induce currents that can heat tissue near long wires. Implants made of titanium, which is not ferromagnetic, are generally safe in the static field, but they remain electrical conductors.',
    questions: [
      {
        question: 'An electromagnetic flowmeter with a field of 0.020 T is placed on an artery with an inner diameter of 4.0 mm, and the voltage between its electrodes is 24 µV. The mean flow velocity of the blood is closest to:',
        options: ['0.030 m/s', '0.30 m/s', '0.60 m/s', '3.0 m/s'],
        correctAnswer: 1,
        explanation:
          'Setting $qE = qvB$ and $\\Delta V = Ed$ gives $v = \\Delta V/(Bd) = (24 \\times 10^{-6}\\ \\text{V})/[(0.020\\ \\text{T})(4.0 \\times 10^{-3}\\ \\text{m})] = 0.30$ m/s. The 0.60 m/s value uses the radius of the vessel rather than its diameter. The 0.030 m/s value results from reading the field as 0.20 T, and the 3.0 m/s value from reading the voltage as 240 µV; each is a power-of-ten error.',
        skill: '4C magnetic force and the flowmeter (Skill 2)',
      },
      {
        question: 'If the flowmeter probe were repositioned so that its magnetic field pointed along the direction of blood flow, the voltage between the electrodes would be:',
        options: [
          'zero, because a charge moving parallel to a magnetic field feels no magnetic force',
          'doubled, because the ions would then move directly along the field lines',
          'unchanged, because the ions move at the same speed through a field of the same strength',
          'reversed, because the positive ions would now be pushed toward the other electrode',
        ],
        correctAnswer: 0,
        explanation:
          'The magnetic force is proportional to $\\sin\\theta$, and when the velocity is parallel to the field, $\\theta = 0$, so no ions are pushed toward either wall and no voltage develops. Moving along field lines is precisely the orientation that eliminates the force, so it cannot double the signal. The speed and field strength alone do not determine the force; the angle between them matters. Reversing the voltage would require reversing the flow or the field, not aligning them.',
        skill: '4C force on a moving charge (Skill 1)',
      },
      {
        question: 'A patient with a titanium bone plate is moved headfirst into the bore of an MRI scanner, where the static field grows stronger with distance into the bore. Considering only the static field, the plate most likely experiences:',
        options: [
          'no force at any time, because titanium cannot be magnetized by the field',
          'a steady force toward the center, like that on a ferromagnetic object',
          'a force opposing its motion that vanishes when the patient stops',
          'a force pulling it deeper into the bore that grows as it moves faster',
        ],
        correctAnswer: 2,
        explanation:
          'As the conducting plate moves into a stronger field, the flux through it increases, inducing eddy currents whose magnetic fields, by Lenz’s law, oppose that change and therefore resist the motion; with no motion there is no change in flux and no induced current. Titanium is not magnetized, but it conducts, so it is not free of all magnetic force while moving. A steady attraction toward the strong field is characteristic of ferromagnetic materials. A force that aided the motion and grew with speed would violate Lenz’s law and energy conservation.',
        skill: '4C Lenz’s law (Skill 1)',
      },
      {
        question: 'A pacemaker lead and the tissue between its ends form a loop enclosing 200 cm², oriented perpendicular to a gradient field. If the gradient field through the loop increases by 20 mT in 0.50 ms, the average emf induced around the loop is closest to:',
        options: ['0.0080 V', '0.080 V', '0.40 V', '0.80 V'],
        correctAnswer: 3,
        explanation:
          'The loop area is 200 cm² = 0.020 m², so the flux changes by $(0.020\\ \\text{T})(0.020\\ \\text{m}^2) = 4.0 \\times 10^{-4}$ Wb, and $\\mathcal{E} = 4.0 \\times 10^{-4}/(5.0 \\times 10^{-4}\\ \\text{s}) = 0.80$ V. The 0.080 V value converts 200 cm² to 0.0020 m², and the 0.0080 V value converts it to $2.0 \\times 10^{-4}$ m², as if there were 10⁶ cm² in a square meter. The 0.40 V value halves the change in field, as if the average field during the interval, rather than its change, determined the emf.',
        skill: '4C Faraday’s law (Skill 2)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 5. ORGANIC CHEMISTRY (experiment, chart + table) — Fractional distillation
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-cp-a-05',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    title: 'Separating Two Isomeric Components of an Essential Oil',
    passageText:
      'Essential oils are the volatile, fragrant fractions of plants. They are usually recovered from plant material by steam distillation, and the crude oil, a mixture of dozens of compounds, is then separated further by fractional distillation.\n\nA pure liquid boils when its vapor pressure equals the external pressure; at 1 atm this temperature is its normal boiling point. Molecules that attract one another more strongly escape from the liquid less readily, so at any temperature such a liquid has a lower vapor pressure and must be heated further before it boils. For compounds of similar size, the boiling point therefore rises with the strength of the intermolecular forces: London dispersion forces, which all molecules experience and which increase with molecular surface area; dipole–dipole attractions between polar molecules; and hydrogen bonds, which require a hydrogen atom covalently bonded to N, O or F.\n\nWhen a mixture of two miscible liquids is heated, the vapor in equilibrium with the liquid is richer than the liquid in the more volatile component. In simple distillation, vapor travels from the flask directly to the condenser, so the distillate has undergone a single vaporization and is only partly enriched. In fractional distillation, vapor first rises through a column packed with glass beads or metal mesh, where it repeatedly condenses and re-vaporizes; each cycle enriches the rising vapor further in the more volatile component, so that nearly pure material can reach the top. The column works well only if vapor and liquid have time to approach equilibrium at each level. A thermometer placed at the top of the apparatus, just below the side arm to the condenser, measures the temperature of the vapor that is about to distill.\n\nInvestigators distilled a model of a eucalyptus-type oil: 60 mL of an equal-volume mixture of 1,8-cineole and linalool. The two compounds are constitutional isomers with the formula C₁₀H₁₈O (M = 154 g/mol). In cineole, the oxygen atom is an ether oxygen that bridges two carbons of a ring, whereas linalool is an open-chain alcohol with an O–H group on a tertiary carbon. The mixture was distilled once through a simple apparatus and once through a 30-cm packed column. In each run the temperature at the still head was recorded against the volume of distillate collected (Figure 1), and the run was stopped after 55 mL had been collected. The distillate was divided into fraction A (0–25 mL), fraction B (25–35 mL) and fraction C (35–55 mL), and each fraction was analyzed by gas chromatography (GC) on a nonpolar stationary phase, on which compounds are retained chiefly by dispersion forces and elute approximately in order of increasing boiling point. Peak areas gave the composition of each fraction (Table 1).',
    chart: {
      title: 'Figure 1. Still-head temperature versus volume of distillate collected',
      kind: 'line',
      xLabel: 'Volume of distillate collected',
      xUnit: 'mL',
      yLabel: 'Still-head temperature',
      yUnit: '°C',
      xValues: [5, 15, 25, 35, 45, 55],
      yValues: [176, 176, 177, 191, 198, 198],
      seriesLabel: 'Fractional distillation (packed column)',
      comparisonSeries: [{ label: 'Simple distillation', yValues: [180, 183, 186, 190, 193, 196] }],
    },
    figure:
      '**Table 1. Composition of each fraction by GC (percent of total peak area)**\n\n| Fraction | Simple: cineole | Simple: linalool | Fractional: cineole | Fractional: linalool |\n|---|---|---|---|---|\n| A (0–25 mL) | 72% | 28% | 96% | 4% |\n| B (25–35 mL) | 50% | 50% | 55% | 45% |\n| C (35–55 mL) | 33% | 67% | 3% | 97% |',
    questions: [
      {
        question: 'Based on Figure 1 and Table 1, which compound has the higher boiling point, and what best explains the difference?',
        options: [
          'Linalool, because it has the greater molar mass and stronger dispersion forces',
          'Linalool, because its molecules can donate hydrogen bonds to one another',
          'Cineole, because its compact ring gives it the larger molecular surface area',
          'Cineole, because its ether oxygen gives it the stronger dipole–dipole forces',
        ],
        correctAnswer: 1,
        explanation:
          'Fraction C, which is 97% linalool in the fractional run, distilled on the upper plateau near 198 °C, whereas the cineole-rich fraction A distilled near 176 °C, so linalool boils higher. Its O–H group lets linalool molecules both donate and accept hydrogen bonds, whereas pure cineole has an acceptor but no donor. The two compounds are isomers with the same molar mass, so a mass difference cannot explain it. Cineole is the lower-boiling compound, and a compact ring gives less, not more, surface area for dispersion forces; cineole’s dipole–dipole attractions are weaker than linalool’s hydrogen bonds.',
        skill: '5B intermolecular forces and boiling point (Skill 1)',
      },
      {
        question: 'In the fractional distillation, over which interval did the composition of the vapor reaching the still head change most rapidly, and what does Table 1 show about the distillate collected over that interval?',
        options: [
          'Between 25 and 35 mL; the distillate contained both compounds in similar amounts',
          'Between 25 and 35 mL; the distillate was almost pure linalool from the column',
          'Between 45 and 55 mL; the distillate contained both compounds in similar amounts',
          'Between 5 and 15 mL; the distillate was almost pure cineole from the column',
        ],
        correctAnswer: 0,
        explanation:
          'The head temperature is set by the composition of the vapor, and on the fractional curve it jumps from 177 °C to 191 °C between 25 and 35 mL, which is fraction B, a 55:45 mixture of cineole and linalool. Linalool made up less than half of fraction B, so it was not almost pure there. Between 45 and 55 mL the temperature is constant at the boiling point of linalool, and that part of the distillate is 97% linalool. Between 5 and 15 mL the distillate was indeed nearly pure cineole, but the temperature was constant, so the composition was not changing.',
        skill: '5C interpreting a distillation curve (Skill 4)',
      },
      {
        question: 'To attribute the difference between the two curves in Figure 1 to the packed column alone, which condition was it most important to keep the same in the two runs?',
        options: [
          'The temperature program used for the gas chromatograph',
          'The order in which the three fractions were analyzed',
          'The temperature of the water cooling the condenser',
          'The rate at which the distillate was being collected',
        ],
        correctAnswer: 3,
        explanation:
          'Separation in a column depends on vapor and liquid approaching equilibrium at each level, so distilling faster degrades separation; if the two runs were collected at different rates, the difference in the curves could reflect rate rather than the column. The GC temperature program and the order of analysis affect only the later GC measurements, not the head temperatures in Figure 1. The condenser water must be cold enough to condense the vapor, but the head thermometer sits before the condenser, so its temperature does not shape the curve.',
        skill: '5C controlled variables in distillation (Skill 3)',
      },
      {
        question: 'If the fractions had instead been analyzed on a GC column with a polar stationary phase bearing hydrogen-bond acceptor groups, the retention time of linalool relative to that of cineole would most likely:',
        options: [
          'decrease, because polar phases retain nonpolar compounds more strongly',
          'increase, because linalool can donate hydrogen bonds to the stationary phase',
          'stay the same, because retention time depends only on the boiling point',
          'decrease, because linalool has the higher boiling point of the two isomers',
        ],
        correctAnswer: 1,
        explanation:
          'A polar phase with acceptor groups interacts strongly with the O–H donor of linalool, which cineole lacks, so linalool is held back even longer relative to cineole than on the nonpolar phase. Polar phases retain polar, not nonpolar, compounds more strongly. Retention tracks boiling point only on a nonpolar phase, where dispersion forces dominate; a polar phase adds specific interactions. A higher boiling point lengthens rather than shortens retention on either phase.',
        skill: '5C gas chromatography and polarity (Skill 2)',
      },
    ],
  },
]

export const FL4_CHEM_PHYS_A_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl4-cp-a-d01',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'A 0.10 M aqueous solution of a weak base B has $K_b = 1.0 \\times 10^{-5}$ at 25 °C. The pH of the solution is closest to:',
    options: ['3.0', '5.0', '9.0', '11.0'],
    correctAnswer: 3,
    explanation:
      'For B + H₂O ⇌ BH⁺ + OH⁻, $x^2/0.10 = 1.0 \\times 10^{-5}$, so $x = [\\text{OH}^-] = 1.0 \\times 10^{-3}$ M, the pOH is 3.0 and the pH is 14.0 − 3.0 = 11.0. The value 3.0 is the pOH, reported as if it were the pH. The value 5.0 is the p$K_b$ of the base. The value 9.0 is the p$K_a$ of the conjugate acid BH⁺, which equals the pH only when B is half-neutralized.',
    skill: '5A pH of a weak base (Skill 2)',
  },
  {
    id: 'fl4-cp-a-d02',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'Which of the following ions has the greatest number of unpaired electrons in its ground state and is therefore the most strongly paramagnetic?',
    options: ['Fe³⁺', 'Co²⁺', 'Ni²⁺', 'Cu⁺'],
    correctAnswer: 0,
    explanation:
      'First-row transition metals lose their 4s electrons before their 3d electrons, so Fe³⁺ is [Ar]3d⁵, with one electron in each of the five d orbitals, for five unpaired electrons. Co²⁺ is [Ar]3d⁷, with three unpaired electrons, and Ni²⁺ is [Ar]3d⁸, with two. Cu⁺ is [Ar]3d¹⁰, with every electron paired, so it is diamagnetic.',
    skill: '4E electron configuration of ions and paramagnetism (Skill 2)',
  },
  {
    id: 'fl4-cp-a-d03',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'The plasma concentration of a drug falls from 0.80 mg/mL to 0.40 mg/mL in 4.0 h and from 0.40 mg/mL to 0.20 mg/mL during the next 2.0 h. The elimination of the drug is best described as:',
    options: [
      'first order, with a constant half-life of about 4.0 hours',
      'second order, since each half-life is shorter than the one before',
      'first order, with a rate constant that increases as time passes',
      'zero order, at a constant rate of 0.10 mg/mL per hour',
    ],
    correctAnswer: 3,
    explanation:
      'The concentration falls by 0.40 mg/mL in 4.0 h and by 0.20 mg/mL in 2.0 h, the same 0.10 mg/mL per hour, so the rate does not depend on concentration; a zero-order half-life, $[A]_0/2k$, shrinks in proportion to the starting concentration, as observed (as when an eliminating enzyme is saturated). A first-order process has a constant half-life, but the second half-life here is half the first. A second-order half-life, $1/(k[A]_0)$, grows longer as concentration falls. A rate constant is by definition constant at a fixed temperature, so describing the data by a changing constant is not a valid description of any order.',
    skill: '5E reaction order from half-life behavior (Skill 2)',
  },
  {
    id: 'fl4-cp-a-d04',
    section: 'chem-phys',
    discipline: 'physics',
    question: 'In hydrostatic weighing, a person who weighs 660 N in air has an apparent weight of 60 N when fully submerged in water (density 1.0 g/cm³) after exhaling. Neglecting air remaining in the lungs, the person’s average density is closest to:',
    options: ['0.091 g/cm³', '0.91 g/cm³', '1.1 g/cm³', '11 g/cm³'],
    correctAnswer: 2,
    explanation:
      'The buoyant force is the loss of apparent weight, 660 N − 60 N = 600 N, which by Archimedes’ principle equals the weight of water the body displaces; because the body and the displaced water have the same volume, the ratio of their densities equals the ratio of their weights, 660/600 = 1.1, giving 1.1 g/cm³. The 0.91 g/cm³ value inverts that ratio and would describe a body that floats. The 11 g/cm³ value divides the true weight by the apparent weight rather than by the buoyant force. The 0.091 g/cm³ value divides the apparent weight by the true weight.',
    skill: '4B buoyancy and Archimedes’ principle (Skill 2)',
  },
  {
    id: 'fl4-cp-a-d05',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question: 'When two cysteine side chains in a newly synthesized secretory protein form a disulfide bond, the sulfur atoms are:',
    options: [
      'reduced, a change favored by the reducing environment of the cytosol',
      'oxidized, a change favored by the oxidizing environment of the ER lumen',
      'hydrolyzed, a change favored by the aqueous environment of the ER',
      'phosphorylated, a change favored by the high ATP level of the cytosol',
    ],
    correctAnswer: 1,
    explanation:
      'Joining two thiols (R–SH) into a disulfide (R–S–S–R) removes two hydrogen atoms, and each sulfur’s oxidation state rises from −2 to −1, so the sulfurs are oxidized; this happens in the relatively oxidizing lumen of the endoplasmic reticulum, which is why disulfides are common in secreted and extracellular proteins. Reduction is the reverse process, breaking disulfides, and the reducing cytosol, rich in glutathione, disfavors disulfide formation. Hydrolysis adds water across a bond and cannot link two thiols. Phosphorylation adds a phosphate to serine, threonine or tyrosine and forms no sulfur–sulfur bond.',
    skill: '5D disulfide bonds and cysteine (Skill 1)',
  },
  {
    id: 'fl4-cp-a-d06',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question: 'Amylose and cellulose are both unbranched polymers of D-glucose joined by 1→4 glycosidic linkages. Which statement correctly accounts for a difference between them?',
    options: [
      'The β links of cellulose give straight chains packed into hydrogen-bonded fibers',
      'The α links of cellulose give helical chains that pack tightly into insoluble crystals',
      'The β links of amylose give coiled chains that human digestive enzymes readily cleave',
      'The α links of amylose give straight chains that resist cleavage by human amylase',
    ],
    correctAnswer: 0,
    explanation:
      'Cellulose is joined by β(1→4) links, in which each glucose is flipped relative to its neighbor, giving extended, straight chains that line up side by side and hydrogen-bond into strong, insoluble fibers that human enzymes cannot hydrolyze. Cellulose does not contain α links, and helical chains are the hallmark of amylose, not cellulose. Amylose is joined by α(1→4) links, not β links. Those α links produce a helical chain that amylase readily digests, not a straight, resistant one.',
    skill: '5D α- versus β-glycosidic bonds (Skill 1)',
  },
  {
    id: 'fl4-cp-a-d07',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question: 'Although a G–C base pair is held together by three hydrogen bonds, the hydrogen bonds between paired bases make only a modest net contribution to the stability of a DNA duplex in water. The best explanation is that:',
    options: [
      'hydrogen bonds between bases are covalent and form only in nonpolar solvents',
      'the negatively charged phosphates repel the bases and cancel their attraction',
      'hydrogen bonds form only between two purines, not a purine and a pyrimidine',
      'the unpaired bases of the single strands form similar hydrogen bonds with water',
    ],
    correctAnswer: 3,
    explanation:
      'When strands pair, each base gives up hydrogen bonds to surrounding water in exchange for hydrogen bonds to its partner, so the net gain is small; base-pair hydrogen bonds chiefly confer specificity, while base stacking and the hydrophobic effect supply much of the stability. Hydrogen bonds are noncovalent attractions and form readily in water. The phosphate charges repel each other across the two strands, not the neutral bases. Every Watson–Crick pair joins a purine to a pyrimidine.',
    skill: '5B hydrogen bonding in base pairs (Skill 1)',
  },
  {
    id: 'fl4-cp-a-d08',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    question: 'In which of the following conversions does the oxidation state of the carbon atom that undergoes reaction remain unchanged?',
    options: [
      'Ethanol is converted into acetaldehyde',
      'Acetone is converted into 2-propanol',
      'Acetone is converted into an imine',
      'Acetaldehyde is converted into acetic acid',
    ],
    correctAnswer: 2,
    explanation:
      'Counting +1 for each bond to a more electronegative atom and −1 for each bond to hydrogen, the carbonyl carbon of acetone (C=O, two C–C) is +2, and in the imine (C=N, two C–C) it is still +2, so imine formation is neither oxidation nor reduction. The carbinol carbon of ethanol (−1) becomes the aldehyde carbon (+1), an oxidation. The carbonyl carbon of acetone (+2) becomes the carbinol carbon of 2-propanol (0), a reduction. The aldehyde carbon (+1) becomes the carboxyl carbon of acetic acid (+3), an oxidation.',
    skill: '5D oxidation state of carbon (Skill 1)',
  },
]
