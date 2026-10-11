/**
 * MCAT Full-Length Form 1 — Chemical & Physical Foundations, file A
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

export const FL1_CHEM_PHYS_A_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 1. BIOCHEMISTRY — Enzyme kinetics: competitive vs noncompetitive inhibition
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-cp-a-01',
    section: 'chem-phys',
    discipline: 'biochemistry',
    title: 'Two Inhibitors of Succinate Dehydrogenase',
    passageText:
      'Succinate dehydrogenase (SDH), also known as Complex II of the electron transport chain, catalyzes the oxidation of succinate to fumarate. The enzyme’s covalently bound FAD cofactor accepts two hydrogen atoms from succinate, and the resulting FADH$_2$ passes electrons through a series of iron–sulfur clusters to ubiquinone. Because SDH is anchored in the inner mitochondrial membrane, its activity is conveniently measured in isolated membrane fragments using an artificial electron acceptor, 2,6-dichlorophenolindophenol (DCPIP), which intercepts electrons from the enzyme. Oxidized DCPIP is blue and absorbs strongly at 600 nm; its reduced form is colorless. The rate at which absorbance at 600 nm decreases is therefore proportional to the rate of succinate oxidation.\n\nResearchers characterized two inhibitors of SDH with this assay. The first, malonate, is a dicarboxylic acid that differs from succinate only in having one fewer methylene group between its two carboxylates. The second, designated Compound N, was identified in a screen of synthetic molecules; it bears no structural resemblance to succinate, and its binding site on the enzyme was not known when the study began.\n\nMembrane fragments containing a fixed amount of SDH were incubated at 30 °C in buffer containing 50 μM DCPIP and succinate at concentrations from 0.5 mM to 4.0 mM. Three series were run: no inhibitor, 3.0 mM malonate, and 10 μM Compound N. Each reaction was started by adding succinate, and the initial rate was taken from the first 30 s, during which less than 5% of the DCPIP had been reduced. Absorbance changes were converted to reaction rates using the Beer–Lambert law with $\\varepsilon_{600} = 20{,}000\\ \\text{M}^{-1}\\text{cm}^{-1}$ for DCPIP and a 1.00 cm path length, and rates were then expressed per milligram of membrane protein. Fitting the uninhibited data to the Michaelis–Menten equation gave a maximal velocity of 100 nmol·min$^{-1}$·mg$^{-1}$. Initial rates for all three series are plotted in Figure 1.\n\nThe researchers analyzed the data using the standard descriptions of reversible inhibition. A competitive inhibitor binds only the free enzyme, so that the apparent Michaelis constant becomes $K_{m,\\text{app}} = K_m(1 + [\\text{I}]/K_i)$, where $K_i$ is the dissociation constant of the enzyme–inhibitor complex, while the maximal velocity is unchanged. A noncompetitive inhibitor binds the free enzyme and the enzyme–substrate complex with equal affinity, so that the apparent maximal velocity becomes $V_{\\max,\\text{app}} = V_{\\max}/(1 + [\\text{I}]/K_i)$ while $K_m$ is unchanged. An uncompetitive inhibitor binds only the enzyme–substrate complex and lowers both parameters by the same factor.\n\nThe researchers noted that malonate has long been used experimentally to interrupt the citric acid cycle, and that treating intact cells with malonate causes succinate to accumulate. They proposed that Compound N, if its inhibition proved reversible and specific, might be useful for studying the contribution of Complex II to the mitochondrial membrane potential.',
    chart: {
      title: 'Figure 1. Initial rate of succinate oxidation versus succinate concentration in the absence and presence of inhibitors',
      kind: 'line',
      xLabel: 'Succinate concentration',
      xUnit: 'mM',
      yLabel: 'Initial rate',
      yUnit: 'nmol/min per mg',
      xValues: [0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0],
      yValues: [50, 66.7, 75, 80, 83.3, 85.7, 87.5, 88.9],
      seriesLabel: 'No inhibitor',
      comparisonSeries: [
        { label: '3.0 mM malonate', yValues: [20, 33.3, 42.9, 50, 55.6, 60, 63.6, 66.7] },
        { label: '10 μM Compound N', yValues: [25, 33.3, 37.5, 40, 41.7, 42.9, 43.8, 44.4] },
      ],
      hidePointLabels: true,
    },
    questions: [
      {
        question: 'Based on Figure 1 and the fitted maximal velocity, the Michaelis constant of SDH for succinate in the absence of inhibitor is closest to:',
        options: ['0.10 mM', '0.25 mM', '0.50 mM', '1.0 mM'],
        correctAnswer: 2,
        explanation:
          'The Michaelis constant is the substrate concentration at which the initial rate equals half of the maximal velocity. With $V_{\\max}$ = 100 nmol·min$^{-1}$·mg$^{-1}$, half-maximal velocity is 50, and the uninhibited series in Figure 1 reaches 50 at a succinate concentration of 0.5 mM. A value of 1.0 mM is where the rate reaches two-thirds of maximum, not half. The values 0.25 mM and 0.10 mM lie below the lowest concentration tested and would give rates far above 50 at 0.5 mM.',
        optionExplanations: [
          'A concentration of 0.10 mM lies below the lowest point plotted; at 0.5 mM the uninhibited rate would already be far above half-maximal if $K_m$ were this small, which the figure does not show.',
          'A value of 0.25 mM would make 0.5 mM twice $K_m$, giving a rate of about 67 nmol·min$^{-1}$·mg$^{-1}$ there instead of the 50 that Figure 1 shows.',
          '$K_m$ is the substrate concentration at which the rate is half of $V_{\\max}$. With $V_{\\max}$ = 100, the uninhibited series reaches 50 at exactly 0.5 mM succinate.',
          'At 1.0 mM the uninhibited rate is about 67, two-thirds of maximum rather than half. This choice mistakes the second data point for the half-maximal point.',
        ],
        skill: '5E enzyme kinetics',
      },
      {
        question: 'The data in Figure 1 indicate that Compound N is best classified as which type of inhibitor?',
        options: ['Competitive', 'Uncompetitive', 'Mixed', 'Noncompetitive'],
        correctAnswer: 3,
        explanation:
          'In the Compound N series the rate approaches a plateau near 50, half the uninhibited maximum, yet the half-maximal rate (25) is reached at 0.5 mM, the same concentration as for the uninhibited enzyme. A lowered maximal velocity with an unchanged Michaelis constant is the signature of noncompetitive inhibition. A competitive inhibitor would leave the maximal velocity unchanged and raise the apparent $K_m$. An uncompetitive inhibitor would lower both $V_{\\max}$ and $K_m$, and a mixed inhibitor would lower $V_{\\max}$ while changing $K_m$; neither fits an unchanged $K_m$.',
        optionExplanations: [
          'A competitive inhibitor leaves $V_{\\max}$ unchanged while raising the apparent $K_m$. The Compound N series plateaus near 50, half the uninhibited maximum, so $V_{\\max}$ is clearly reduced, which rules out pure competitive inhibition.',
          'An uncompetitive inhibitor lowers both $V_{\\max}$ and $K_m$ by the same factor. The Compound N curve halves $V_{\\max}$ but still reaches half of its own plateau at 0.5 mM, so $K_m$ is unchanged.',
          'Mixed inhibition lowers $V_{\\max}$ and shifts $K_m$ in either direction. Since the half-maximal concentration for Compound N (0.5 mM) matches the uninhibited value exactly, there is no $K_m$ shift to justify this label.',
          'Compound N plateaus near 50 (half of 100) yet reaches its own half-maximal rate of 25 at 0.5 mM, the same $K_m$ as the uninhibited enzyme. Lowered $V_{\\max}$ with unchanged $K_m$ is the definition of noncompetitive inhibition.',
        ],
        skill: '5E enzyme inhibition',
      },
      {
        question: 'Using the data in Figure 1, the dissociation constant $K_i$ of the enzyme–malonate complex is closest to:',
        options: ['0.33 mM', '1.0 mM', '3.0 mM', '9.0 mM'],
        correctAnswer: 1,
        explanation:
          'Malonate, a close structural analog of succinate, leaves the plateau of the rate curve unchanged in Figure 1 (the malonate series continues to rise toward 100) and therefore behaves as a competitive inhibitor. The half-maximal rate of 50 is reached at 2.0 mM succinate in the presence of malonate, so $K_{m,\\text{app}}$ = 2.0 mM, four times the uninhibited value of 0.5 mM. From $K_{m,\\text{app}} = K_m(1 + [\\text{I}]/K_i)$, $1 + 3.0/K_i = 4$, giving $K_i$ = 1.0 mM. A value of 3.0 mM equates $K_i$ with the malonate concentration used, 9.0 mM multiplies rather than divides by the factor of 3, and 0.33 mM inverts the ratio.',
        optionExplanations: [
          'A value of 0.33 mM inverts the ratio: it computes $K_i$ as $[\\text{I}]$ divided by the factor of 3 (1.0 mM) and then takes the reciprocal, or divides 1 by 3 instead of 3 by 3.',
          'With malonate the half-maximal rate (50) is reached at 2.0 mM, so $K_{m,\\text{app}}$ is four times the uninhibited 0.5 mM. From $1 + [\\text{I}]/K_i = 4$ with $[\\text{I}]$ = 3.0 mM, $K_i$ = 3.0/3 = 1.0 mM.',
          'A value of 3.0 mM simply equates $K_i$ with the malonate concentration used in the assay; that would correspond to only a doubling of the apparent $K_m$, not the fourfold increase seen in Figure 1.',
          'A value of 9.0 mM multiplies the malonate concentration by the factor of 3 instead of dividing by it; such a weak inhibitor at 3.0 mM would raise $K_m$ only by about one-third.',
        ],
        skill: '5E enzyme inhibition',
      },
      {
        question: 'Which additional experiment would best determine whether the inhibition of SDH by Compound N is reversible?',
        options: [
          'Pre-incubate the enzyme with Compound N, dilute the mixture extensively into inhibitor-free buffer, and measure whether activity recovers',
          'Repeat the assay at succinate concentrations well above 4.0 mM and measure whether the rate approaches the uninhibited maximum',
          'Repeat the assay using a series of Compound N concentrations and determine whether the apparent $K_m$ changes',
          'Replace DCPIP with a different electron acceptor and measure whether the same degree of inhibition is observed',
        ],
        correctAnswer: 0,
        explanation:
          'A reversible inhibitor is bound by a dissociation equilibrium; lowering its free concentration by dilution (or dialysis) shifts the equilibrium toward free enzyme and restores activity, whereas a covalently bound irreversible inhibitor stays attached and activity does not return. Raising the substrate concentration tests whether inhibition is competitive, not whether it is reversible, and Figure 1 already shows that substrate does not overcome the effect of Compound N. Varying the inhibitor concentration and tracking $K_m$ characterizes the mode of reversible inhibition without distinguishing it from irreversible inactivation. Changing the electron acceptor tests whether the observed inhibition depends on the assay chemistry rather than on the enzyme.',
        optionExplanations: [
          'Reversible binding is governed by a dissociation equilibrium. Diluting the enzyme–inhibitor mixture lowers the free inhibitor concentration and drives the complex apart, restoring activity; a covalently attached irreversible inhibitor would stay bound and activity would not recover.',
          'Raising substrate concentration tests whether substrate can outcompete the inhibitor, which distinguishes competitive from noncompetitive inhibition. Figure 1 already shows substrate does not overcome Compound N, and the result says nothing about reversibility.',
          'Varying inhibitor concentration and tracking the apparent $K_m$ characterizes the mode of inhibition (competitive, noncompetitive, and so on). An irreversible inactivator would also lower activity in a concentration-dependent way, so this does not establish reversibility.',
          'Changing the electron acceptor tests whether the observed inhibition is an artifact of the DCPIP assay chemistry rather than an effect on SDH itself. It does not address whether Compound N can dissociate from the enzyme.',
        ],
        skill: '5E enzyme inhibition (research design)',
      },
      {
        question: 'In the presence of 3.0 mM malonate, what concentration of succinate would give the same initial rate that the uninhibited enzyme achieves at 1.0 mM succinate?',
        options: ['1.0 mM', '2.0 mM', '3.0 mM', '4.0 mM'],
        correctAnswer: 3,
        explanation:
          'The uninhibited series reaches about 67 nmol·min$^{-1}$·mg$^{-1}$ at 1.0 mM succinate; reading across to the malonate series, the same rate is reached at 4.0 mM. This follows from the kinetics: with $K_{m,\\text{app}}$ four times $K_m$ and $V_{\\max}$ unchanged, every rate obtained without inhibitor requires four times the substrate concentration with inhibitor. A value of 2.0 mM gives only the half-maximal rate with malonate, and 3.0 mM gives about 60; 1.0 mM assumes the inhibitor has no effect.',
        optionExplanations: [
          'A concentration of 1.0 mM assumes malonate has no effect; in Figure 1 the malonate series gives only about 33 nmol·min$^{-1}$·mg$^{-1}$ at 1.0 mM, far below the uninhibited 67.',
          'At 2.0 mM with malonate the rate is 50, the half-maximal value, not the roughly 67 the uninhibited enzyme achieves at 1.0 mM. This choice stops at the apparent $K_m$ instead of matching rates.',
          'At 3.0 mM the malonate series reads about 60 nmol·min$^{-1}$·mg$^{-1}$, still short of 67. Reading three data points along instead of four undershoots the required concentration.',
          'The uninhibited rate at 1.0 mM is about 67; the malonate series reaches 67 at 4.0 mM. Because the competitive inhibitor raises $K_m$ fourfold with $V_{\\max}$ unchanged, every rate requires four times the substrate.',
        ],
        skill: '5E enzyme kinetics',
      },
      {
        question: 'On a Lineweaver–Burk plot, the line for the Compound N series and the line for the uninhibited enzyme would share the same:',
        options: ['slope', 'y-intercept', 'x-intercept', 'x-intercept and y-intercept'],
        correctAnswer: 2,
        explanation:
          'On a double-reciprocal plot the y-intercept is $1/V_{\\max}$, the x-intercept is $-1/K_m$, and the slope is $K_m/V_{\\max}$. Compound N halves $V_{\\max}$ but leaves $K_m$ unchanged, so the two lines intersect on the x-axis at $-1/K_m$ while the inhibited line has a higher y-intercept and a steeper slope. A shared y-intercept is the pattern for the competitive inhibitor malonate. Sharing both intercepts would mean the inhibitor had no effect, and a shared slope with a different intercept describes uncompetitive inhibition.',
        optionExplanations: [
          'The slope of a Lineweaver–Burk line is $K_m/V_{\\max}$. Compound N halves $V_{\\max}$ while leaving $K_m$ unchanged, so the slope doubles. A shared slope with a different intercept is the uncompetitive pattern, not what the data show.',
          'The y-intercept is $1/V_{\\max}$, and Compound N halves $V_{\\max}$, so the inhibited line has a higher y-intercept. A shared y-intercept is the signature of a competitive inhibitor such as malonate.',
          'The x-intercept is $-1/K_m$. Compound N lowers $V_{\\max}$ but leaves $K_m$ at 0.5 mM, so both lines cross the x-axis at the same point, the classic noncompetitive pattern on a double-reciprocal plot.',
          'Sharing both intercepts would mean the two lines are identical, that is, the inhibitor has no effect. Compound N clearly halves the plateau rate in Figure 1, so the y-intercept must differ.',
        ],
        skill: '5E enzyme kinetics',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 2. PHYSICS — Fluids in circulation (information passage)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-cp-a-02',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Hemodynamics of an Arterial Stenosis',
    passageText:
      'Blood flow through the circulation can be analyzed with the principles that describe any fluid moving through a network of tubes, provided the idealizations involved are kept in mind. Blood is nearly incompressible, so the volume flow rate $Q$ through any cross section of a vessel that neither branches nor leaks must equal the flow rate through every other cross section. For a vessel of cross-sectional area $A$ carrying blood at average speed $v$, this continuity condition is $Q = Av$. The same condition applies to the circulation as a whole: the aorta, the arteries, the capillaries, and the veins each carry the entire cardiac output, so the average speed of blood at any level of the vascular tree depends only on the combined cross-sectional area of all the vessels at that level. Although a single capillary is only about 8 μm in diameter, the several billion capillaries together present a combined cross-sectional area hundreds of times greater than that of the aorta.\n\nWhere a vessel narrows, blood speeds up, and Bernoulli’s equation relates the change in speed to a change in pressure. For steady flow of an ideal fluid along a horizontal streamline, $P + \\frac{1}{2}\\rho v^2$ is constant, where $\\rho$ is the density of blood, approximately 1000 kg/m$^3$. A region of high speed is therefore a region of low pressure.\n\nBernoulli’s equation neglects viscosity, but viscosity determines how much pressure difference the heart must generate to drive a given flow. For steady laminar flow of a fluid of viscosity $\\eta$ through a rigid cylindrical vessel of radius $r$ and length $L$, Poiseuille’s law gives\n\n$Q = \\frac{\\pi r^4 \\Delta P}{8 \\eta L}$\n\nThe hydraulic resistance, $R = \\Delta P / Q$, therefore varies inversely with the fourth power of the radius. This is why the small muscular arterioles, rather than the large arteries, are the principal site of resistance in the systemic circulation, and why modest changes in arteriolar radius can regulate the blood flow to an organ.\n\nLaminar flow is silent, but flow becomes turbulent when the Reynolds number, $Re = \\rho v d / \\eta$, in which $d$ is the vessel diameter, exceeds a critical value of roughly 2000 to 3000. Turbulent flow dissipates more energy than laminar flow at the same flow rate, and the pressure fluctuations it produces are audible through a stethoscope as a bruit or murmur.\n\nThese principles are applied clinically to an atherosclerotic stenosis, a segment of artery narrowed by plaque. Within the narrowed segment the blood speeds up and its pressure falls; just beyond the narrowing, the fast jet decelerates as it rejoins slower-moving blood, and turbulence develops there. Doppler ultrasound measures the speed of the jet directly, and the degree of narrowing is estimated from the increase in speed relative to the unaffected segment upstream. It is the loss of pressure across the stenosis, rather than the increase in speed itself, that reduces perfusion of the tissue downstream, and the heart can compensate for a moderate stenosis only by raising the pressure upstream of it.',
    questions: [
      {
        question: 'Blood leaves the heart through the aorta at an average speed of 25 cm/s. If the combined cross-sectional area of the capillary bed is 500 times that of the aorta, the average speed of blood in a capillary is closest to:',
        options: ['0.05 mm/s', '0.5 mm/s', '5 mm/s', '50 mm/s'],
        correctAnswer: 1,
        explanation:
          'Because the aorta and the capillary bed each carry the entire cardiac output, continuity gives $A_{\\text{aorta}} v_{\\text{aorta}} = A_{\\text{cap}} v_{\\text{cap}}$, so $v_{\\text{cap}} = (25\\ \\text{cm/s})/500 = 0.05$ cm/s = 0.5 mm/s. A value of 5 mm/s slips a factor of ten in the unit conversion, 50 mm/s divides by 5 instead of 500, and 0.05 mm/s converts 0.05 cm/s to millimeters in the wrong direction.',
        optionExplanations: [
          'A value of 0.05 mm/s converts in the wrong direction: 25 cm/s divided by 500 is 0.05 cm/s, and converting centimeters to millimeters multiplies by ten rather than leaving the number unchanged.',
          'Continuity requires the aorta and the whole capillary bed to carry the same flow, so $A_{\\text{aorta}}v_{\\text{aorta}} = A_{\\text{cap}}v_{\\text{cap}}$. Then $v_{\\text{cap}}$ = 25 cm/s ÷ 500 = 0.05 cm/s = 0.5 mm/s.',
          'A value of 5 mm/s is ten times too large; it arises from a slipped decimal in converting 0.05 cm/s to millimeters per second (0.05 cm/s is 0.5 mm/s, not 5 mm/s).',
          'A value of 50 mm/s results from dividing 25 cm/s by 5 rather than by 500, treating the area ratio as 5 instead of 500, and then converting to millimeters.',
        ],
        skill: '4B fluid continuity',
      },
      {
        question: 'Blood moving at 0.30 m/s enters a stenosis in which the radius of the artery is reduced to half its upstream value. According to Bernoulli’s equation, the pressure within the narrowed segment is lower than the upstream pressure by approximately:',
        options: ['135 Pa', '450 Pa', '675 Pa', '1350 Pa'],
        correctAnswer: 2,
        explanation:
          'Halving the radius reduces the area by a factor of 4, so continuity raises the speed to 1.2 m/s. Bernoulli’s equation then gives $\\Delta P = \\frac{1}{2}\\rho (v_2^2 - v_1^2) = \\frac{1}{2}(1000)(1.44 - 0.09) = 675$ Pa. A value of 1350 Pa omits the factor of one-half, 450 Pa uses the speeds themselves rather than their squares, and 135 Pa assumes the speed only doubles, as it would if the area rather than the radius were halved.',
        optionExplanations: [
          'A drop of 135 Pa follows from assuming the speed merely doubles (0.30 to 0.60 m/s), which would be true if the area were halved. Halving the radius quarters the area, so speed quadruples.',
          'A drop of 450 Pa comes from using the speeds themselves rather than their squares, for example $\\frac{1}{2}\\rho(v_2 - v_1)$ scaled incorrectly. Bernoulli’s equation depends on $v^2$, not on $v$.',
          'Halving the radius quarters the area, so continuity raises the speed from 0.30 m/s to 1.2 m/s. Then $\\Delta P = \\frac{1}{2}(1000)(1.44 - 0.09)$ = 675 Pa, with the narrowed segment at lower pressure.',
          'A drop of 1350 Pa is exactly twice the correct value; it omits the factor of one-half in the kinetic-energy term, computing $\\rho(v_2^2 - v_1^2)$ instead of $\\frac{1}{2}\\rho(v_2^2 - v_1^2)$.',
        ],
        skill: '4B Bernoulli’s equation',
      },
      {
        question: 'Plaque reduces the radius of an arterial segment by 20%. If the pressure difference across the segment and the viscosity of the blood are unchanged, the flow rate through the segment becomes approximately what fraction of its original value?',
        options: ['20%', '41%', '64%', '80%'],
        correctAnswer: 1,
        explanation:
          'Poiseuille’s law makes flow proportional to $r^4$ at fixed pressure difference, viscosity, and length. A radius of $0.8r$ gives $(0.8)^4 = 0.41$, so flow falls to about 41% of its original value. A value of 80% treats flow as proportional to radius, 64% treats it as proportional to the cross-sectional area ($r^2$), and 20% is the fractional reduction in radius rather than the remaining flow.',
        optionExplanations: [
          'Twenty percent is the fractional reduction in radius, not the fraction of flow that remains. Even if flow scaled linearly with radius, the remaining flow would be 80%, not 20%.',
          'Poiseuille’s law makes flow proportional to $r^4$ when pressure difference, viscosity, and length are fixed. With the radius at 0.8 of its original value, flow becomes $(0.8)^4 \\approx 0.41$, about 41% of the original.',
          'Sixty-four percent is $(0.8)^2$, which treats flow as proportional to cross-sectional area. Poiseuille flow depends on the fourth power of the radius, so this understates the drop.',
          'Eighty percent treats flow as directly proportional to radius. The passage states that resistance varies inversely with the fourth power of the radius, so a 20% radius reduction cuts flow far more than 20%.',
        ],
        skill: '4B Poiseuille flow',
      },
      {
        question: 'An increase in which of the following would most decrease the Reynolds number for blood flowing through the narrowed segment of a stenosis?',
        options: ['Density of the blood', 'Flow speed in the segment', 'Diameter of the segment', 'Blood viscosity'],
        correctAnswer: 3,
        explanation:
          'The Reynolds number is $\\rho v d / \\eta$, so it decreases only when the viscosity in the denominator increases, as happens, for example, when the hematocrit rises. Density, speed, and diameter all appear in the numerator, so increasing any of them raises the Reynolds number and makes turbulence more, not less, likely.',
        optionExplanations: [
          'Density $\\rho$ appears in the numerator of $Re = \\rho v d/\\eta$, so increasing it raises the Reynolds number and makes turbulence more likely, the opposite of what is asked.',
          'Flow speed $v$ is in the numerator of the Reynolds number; a faster jet through the stenosis increases $Re$, which is exactly why turbulence develops just beyond a narrowing.',
          'Diameter $d$ is also in the numerator, so a wider segment raises $Re$ at a given speed. Only the denominator term can lower the Reynolds number when it increases.',
          'Viscosity $\\eta$ is the only quantity in the denominator of $Re = \\rho v d/\\eta$. Increasing it (for example with a higher hematocrit) lowers the Reynolds number and favors laminar flow.',
        ],
        skill: '4B turbulence and Reynolds number',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 3. GENERAL CHEMISTRY — Titration of a diprotic weak acid (chart)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-cp-a-03',
    section: 'chem-phys',
    discipline: 'general chemistry',
    title: 'Titration of a Diprotic Drug Candidate',
    passageText:
      'Many drugs are weak acids or weak bases, and their charge state at a given pH governs their solubility, their ability to cross membranes, and the way they are formulated as salts. A pharmaceutical laboratory characterized a new diprotic drug candidate, designated $\\text{H}_2\\text{A}$, that contains two ionizable groups: a carboxylic acid and a second, more weakly acidic group elsewhere in the molecule. Neither ionization constant was known in advance, so the compound was characterized by potentiometric titration.\n\nA 20.0 mL sample of 0.100 M $\\text{H}_2\\text{A}$ was placed in a thermostatted vessel at 25 °C, and a calibrated glass electrode was used to follow the pH as 0.100 M NaOH was delivered in small increments from a burette. The NaOH solution had been standardized the same day against potassium hydrogen phthalate, a primary standard. The resulting titration curve is shown in Figure 1.\n\nFor a weak acid HB with acid dissociation constant $K_a$, the pH of a solution containing both the acid and its conjugate base is given by the Henderson–Hasselbalch equation, $\\text{pH} = \\text{p}K_a + \\log\\left([\\text{B}^-]/[\\text{HB}]\\right)$. When exactly half of an acidic group has been neutralized, the concentrations of the acid and its conjugate base are equal and the pH equals the p$K_a$ of that group. A solution resists changes in pH most effectively within about one pH unit of a p$K_a$, where appreciable amounts of both members of the conjugate pair are present. For a diprotic acid whose two p$K_a$ values differ by several units, the two protons are removed in essentially separate stages. At the first equivalence point the solution consists almost entirely of the amphiprotic intermediate $\\text{HA}^-$, and its pH is approximately the average of the two p$K_a$ values.\n\nTo locate an equivalence point visually, chemists often add an acid–base indicator, itself a weak acid whose conjugate acid and base forms differ in color. An indicator changes color over a range of roughly two pH units centered near its own p$K_a$, and it signals an equivalence point accurately only when this transition range falls within the steep portion of the titration curve. Table 1 lists the indicators available in the laboratory.\n\n**Table 1. Indicator transition ranges**\n\n| Indicator | Transition range (pH) |\n|---|---|\n| Methyl orange | 3.1–4.4 |\n| Methyl red | 4.4–6.2 |\n| Bromothymol blue | 6.0–7.6 |\n| Phenolphthalein | 8.3–10.0 |\n| Alizarin yellow R | 10.1–12.0 |\n\nThe laboratory intends to formulate the drug as a sodium salt in an intravenous solution that must be buffered near physiological pH, 7.4. It also wishes to know which form of the drug predominates in the stomach, where the pH is approximately 2, and in the small intestine, where the pH is approximately 6, because only the uncharged form of a drug crosses the intestinal lining efficiently by passive diffusion.',
    chart: {
      title: 'Figure 1. Titration of 20.0 mL of 0.100 M H₂A with 0.100 M NaOH',
      kind: 'line',
      xLabel: 'Volume of NaOH added',
      xUnit: 'mL',
      yLabel: 'pH',
      xValues: [5, 10, 15, 20, 25, 30, 35, 40],
      yValues: [2.6, 3.0, 3.5, 5.5, 7.5, 8.0, 8.5, 10.3],
      seriesLabel: 'pH',
      hidePointLabels: true,
    },
    questions: [
      {
        question: 'Based on Figure 1, the two p$K_a$ values of $\\text{H}_2\\text{A}$ are closest to:',
        options: [
          'p$K_{a1}$ ≈ 3.0 and p$K_{a2}$ ≈ 8.0',
          'p$K_{a1}$ ≈ 2.6 and p$K_{a2}$ ≈ 7.5',
          'p$K_{a1}$ ≈ 5.5 and p$K_{a2}$ ≈ 10.3',
          'p$K_{a1}$ ≈ 3.5 and p$K_{a2}$ ≈ 8.5',
        ],
        correctAnswer: 0,
        explanation:
          'The 20.0 mL sample contains 2.00 mmol of $\\text{H}_2\\text{A}$, so each proton requires 20.0 mL of 0.100 M NaOH: the first equivalence point is at 20.0 mL and the second at 40.0 mL. Each p$K_a$ is read at the half-equivalence point of its stage, 10.0 mL (pH 3.0) and 30.0 mL (pH 8.0). The values 5.5 and 10.3 are the pH readings at the two equivalence points, not the p$K_a$ values. The pairs 2.6/7.5 and 3.5/8.5 are the readings at 5 and 25 mL and at 15 and 35 mL, where the acid-to-base ratio is 3:1 or 1:3 rather than 1:1.',
        optionExplanations: [
          'Each proton requires 20.0 mL of base (2.00 mmol of acid, 0.100 M NaOH), so the half-equivalence points are at 10.0 and 30.0 mL, where Figure 1 reads pH 3.0 and 8.0. The pH at half-equivalence equals the p$K_a$.',
          'The values 2.6 and 7.5 are the pH readings at 5 and 25 mL, where only one-quarter of each group has been neutralized and the acid-to-base ratio is 3:1, so pH is below the p$K_a$.',
          'The values 5.5 and 10.3 are the pH readings at the first (20 mL) and second (40 mL) equivalence points, not the half-equivalence points. Equivalence pH does not equal the p$K_a$.',
          'The values 3.5 and 8.5 are the readings at 15 and 35 mL, where three-quarters of each group has been neutralized (base-to-acid ratio 3:1), so pH lies about 0.5 above each p$K_a$.',
        ],
        skill: '5A titration curves',
      },
      {
        question: 'To prepare a solution buffered at pH 7.4, the laboratory should stop the titration after adding approximately how much NaOH?',
        options: ['15 mL', '20 mL', '25 mL', '35 mL'],
        correctAnswer: 2,
        explanation:
          'A pH of 7.4 lies within one unit of p$K_{a2}$ ≈ 8.0, so the buffer must be a mixture of $\\text{HA}^-$ and $\\text{A}^{2-}$, which exists only between 20 and 40 mL. From the Henderson–Hasselbalch equation, $\\log([\\text{A}^{2-}]/[\\text{HA}^-]) = 7.4 - 8.0 = -0.6$, a ratio of about 1:4, which corresponds to converting one-fifth of the 2.00 mmol of $\\text{HA}^-$, or about 4 mL beyond the first equivalence point; Figure 1 confirms a pH near 7.5 at 25 mL. At 20 mL the solution is essentially pure $\\text{HA}^-$ at pH 5.5 and has little buffer capacity, at 15 mL the mixture buffers near pH 3.5, and at 35 mL the pH is about 8.5.',
        optionExplanations: [
          'At 15 mL the solution is a mixture of $\\text{H}_2\\text{A}$ and $\\text{HA}^-$ buffering near pH 3.5, five units away from the target. It cannot hold pH 7.4.',
          'At 20 mL the solution is essentially pure $\\text{HA}^-$ at the first equivalence point (pH 5.5) and has minimal buffer capacity, because neither conjugate pair is present in appreciable amounts of both forms.',
          'A buffer at 7.4 needs the $\\text{HA}^-$/$\\text{A}^{2-}$ pair (p$K_{a2}$ ≈ 8.0). Henderson–Hasselbalch gives a base-to-acid ratio of about 1:4, roughly 4 mL past the first equivalence point; Figure 1 shows pH about 7.5 at 25 mL.',
          'At 35 mL three-quarters of $\\text{HA}^-$ has been converted to $\\text{A}^{2-}$ and the pH is about 8.5, a full unit above the target of 7.4.',
        ],
        skill: '5A buffers (Henderson–Hasselbalch)',
      },
      {
        question: 'In the small intestine, the ratio of $[\\text{HA}^-]$ to $[\\text{H}_2\\text{A}]$ is approximately:',
        options: ['1:1000', '1:1', '10:1', '1000:1'],
        correctAnswer: 3,
        explanation:
          'At pH 6, the carboxylic acid group (p$K_{a1}$ ≈ 3.0 from Figure 1) is three units above its p$K_a$, so $\\log([\\text{HA}^-]/[\\text{H}_2\\text{A}]) = 6 - 3 = 3$ and the ratio is about 1000:1. The ratio 1:1000 inverts the relationship, 1:1 would hold only at pH 3.0, and 10:1 corresponds to pH 4.0. The second ionization is irrelevant to this ratio, although at pH 6 only about 1% of the drug is present as $\\text{A}^{2-}$.',
        optionExplanations: [
          'A ratio of 1:1000 inverts the relationship. At pH 6, three units above p$K_{a1}$ ≈ 3.0, the deprotonated form $\\text{HA}^-$ dominates over $\\text{H}_2\\text{A}$, not the reverse.',
          'A 1:1 ratio of $\\text{HA}^-$ to $\\text{H}_2\\text{A}$ occurs only when pH equals p$K_{a1}$, that is, at pH 3.0, not at the intestinal pH of 6.',
          'A 10:1 ratio corresponds to a pH one unit above p$K_{a1}$, that is, pH 4.0. The intestine at pH 6 is three units above the carboxylic acid’s p$K_a$.',
          'Henderson–Hasselbalch for the first ionization gives $\\log([\\text{HA}^-]/[\\text{H}_2\\text{A}])$ = 6 − 3.0 = 3, so the ratio is about 1000:1 in favor of $\\text{HA}^-$ in the small intestine.',
        ],
        skill: '5A acid–base equilibria',
      },
      {
        question: 'Which indicator in Table 1 would most accurately signal the first equivalence point of this titration?',
        options: ['Methyl orange', 'Methyl red', 'Bromothymol blue', 'Phenolphthalein'],
        correctAnswer: 1,
        explanation:
          'Figure 1 shows the first equivalence point at pH 5.5, and the transition range of methyl red (4.4–6.2) is centered on it, so the color change would occur within a fraction of a milliliter of 20.0 mL. Methyl orange changes color between pH 3.1 and 4.4, which the solution passes through gradually near the end of the first buffer region, well before equivalence. Bromothymol blue would begin changing only after equivalence, at about pH 6, and phenolphthalein changes in the second buffer region, between 30 and 40 mL.',
        optionExplanations: [
          'Methyl orange changes between pH 3.1 and 4.4, a range the solution passes through gradually during the first buffer region (around 10 to 17 mL), well before the equivalence point at 20 mL.',
          'Figure 1 places the first equivalence point at pH 5.5, which sits within methyl red’s 4.4–6.2 transition range on the steep part of the curve, so its color change pinpoints 20.0 mL.',
          'Bromothymol blue begins changing only at pH 6.0, slightly after the first equivalence point (pH 5.5), and its range extends to 7.6, into the second buffer region, so it would signal late.',
          'Phenolphthalein changes between pH 8.3 and 10.0, which the solution reaches only in the second buffer region between 30 and 40 mL. It signals the second equivalence point, not the first.',
        ],
        skill: '5A indicators and titration',
      },
      {
        question: 'Suppose the titration were repeated after diluting the 20.0 mL sample to 100 mL with water. Compared with Figure 1, the new curve would show:',
        options: [
          'the same equivalence volumes, with buffer-region pH values nearly unchanged',
          'equivalence points at one-fifth the volumes, with buffer-region pH values nearly unchanged',
          'equivalence points at the same volumes, with buffer-region pH values about 0.7 unit higher',
          'equivalence points at five times the volumes, with buffer-region pH values unchanged',
        ],
        correctAnswer: 0,
        explanation:
          'Dilution does not change the amount of acid present (still 2.00 mmol), so the same volumes of 0.100 M NaOH are required to reach each equivalence point. In the buffer regions the pH depends on the ratio of conjugate base to acid, which dilution leaves unchanged, so the half-equivalence pH values stay at the p$K_a$ values; only the pH at the equivalence points and the steepness of the jumps are affected. Equivalence volumes scale with moles of acid, not with concentration, so neither one-fifth nor five times the volumes is correct, and a 0.7-unit shift would require a fivefold change in the base-to-acid ratio, not in total concentration.',
        optionExplanations: [
          'Equivalence volumes depend on moles of acid (still 2.00 mmol), not on concentration, so they stay at 20 and 40 mL. Buffer-region pH depends only on the base-to-acid ratio, which dilution does not change.',
          'Dilution does not reduce the amount of acid present, so the volume of NaOH needed for each equivalence point is unchanged. One-fifth the volumes would require one-fifth the moles of acid.',
          'A 0.7-unit rise would require a fivefold change in the conjugate base-to-acid ratio. Dilution changes both concentrations equally, leaving the ratio and therefore the buffer-region pH essentially unchanged.',
          'Five times the volumes would require five times the moles of acid. Diluting with water adds no acid, so the equivalence volumes are identical to those in Figure 1.',
        ],
        skill: '5A titration (research design)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 4. ORGANIC CHEMISTRY — Acid–base extraction and TLC (table)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-cp-a-04',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    title: 'Separation of a Four-Component Tablet',
    passageText:
      'A forensic laboratory received a crushed tablet suspected of containing several active ingredients. Preliminary analysis indicated four organic components, designated A through D, whose ionizable functional groups and acid dissociation constants are listed in Table 1. The analysts separated the mixture by acid–base extraction and then verified the identity and purity of each fraction by thin-layer chromatography (TLC) on silica gel.\n\nAcid–base extraction exploits the fact that an ionized molecule is far more soluble in water than in an organic solvent, whereas its neutral form partitions preferentially into the organic layer. A weak acid is predominantly ionized only when the pH of the aqueous phase exceeds its p$K_a$ by about two units or more, and a weak base is predominantly protonated only when the pH is about two units or more below the p$K_a$ of its conjugate acid. By choosing the pH of successive aqueous washes, the analysts could move each component into the aqueous phase selectively.\n\nThe tablet powder (200 mg) was dissolved in 20 mL of dichloromethane, and the solution was shaken in a separatory funnel first with 1.0 M aqueous HCl (pH ≈ 0), then with saturated aqueous sodium bicarbonate (pH ≈ 8.3), and finally with 1.0 M aqueous NaOH (pH ≈ 14). After each wash the aqueous layer was drawn off and retained. Each aqueous layer was later adjusted to a pH at which its solute would be neutral, back-extracted with fresh dichloromethane, and the organic extract was dried over anhydrous sodium sulfate and evaporated to give a recovered solid. The dichloromethane solution remaining after the three washes was dried and evaporated in the same way.\n\nEach recovered solid, together with an authentic standard of each of the four compounds, was spotted on silica TLC plates and developed in two solvent systems, 3:1 hexane–ethyl acetate and 1:1 hexane–ethyl acetate. Silica gel is a polar stationary phase whose surface silanol groups hydrogen-bond with polar functional groups, so the more strongly a compound interacts with the silica, the shorter the distance it travels relative to the solvent front. The retention factor, $R_f$, is the distance traveled by a spot divided by the distance traveled by the solvent front. Results are summarized in Table 1. Every recovered fraction gave a single spot matching one standard, except that the fraction recovered from the bicarbonate wash also showed a faint second spot at the position of Compound D.\n\nTo obtain larger quantities for confirmatory analysis, the analysts then separated a second sample of the tablet by flash column chromatography on silica gel, eluting with the 3:1 solvent mixture and collecting fractions in order of elution.',
    figure:
      '**Table 1. Properties of the tablet components, TLC results on silica gel, and recovery from the extraction**\n\n| Compound | Ionizable group | p$K_a$ | $R_f$ (3:1 hexane–EtOAc) | $R_f$ (1:1 hexane–EtOAc) | Wash in which recovered | Mass recovered (mg) |\n|---|---|---|---|---|---|---|\n| A | Tertiary amine | 9.8* | 0.15 | 0.40 | 1.0 M HCl | 46 |\n| B | Carboxylic acid | 4.4 | 0.05 | 0.20 | NaHCO$_3$ | 44 |\n| C | Ester (no ionizable group) | — | 0.60 | 0.85 | None (remained in organic layer) | 49 |\n| D | Phenol | 10.0 | 0.30 | 0.60 | 1.0 M NaOH | 41 |\n\n*p$K_a$ of the conjugate acid.',
    questions: [
      {
        question: 'The analysts washed with sodium bicarbonate before washing with NaOH rather than using a single NaOH wash. The purpose of this order was most likely to:',
        options: [
          'convert Compound A to its free base before the phenol was extracted',
          'prevent hydrolysis of the ester group of Compound C by strong base',
          'extract Compound B into water while leaving Compound D in the organic layer',
          'neutralize residual HCl so that Compound D could be deprotonated',
        ],
        correctAnswer: 2,
        explanation:
          'At pH 8.3 the carboxylic acid (p$K_a$ 4.4) is almost completely ionized, whereas the phenol (p$K_a$ 10.0) is more than one unit below its p$K_a$ and remains largely neutral, so bicarbonate removes B alone; NaOH at pH 14 would ionize both and carry them into the same aqueous layer. Compound A had already been removed by the HCl wash and is not affected by the order of the basic washes. Ester hydrolysis in a brief cold wash is minor, and in any case the NaOH wash was still performed afterward. Residual acid is removed by the first draining of the aqueous layer, not by a separate bicarbonate wash.',
        optionExplanations: [
          'Compound A, the tertiary amine, was already removed by the 1.0 M HCl wash as its ammonium salt. The order of the two subsequent basic washes has no bearing on its fate.',
          'Hydrolysis of an ester during a brief cold wash is minor, and the analysts performed the 1.0 M NaOH wash afterward anyway, so avoiding strong base cannot be the rationale for the bicarbonate step.',
          'At pH 8.3 the carboxylic acid (p$K_a$ 4.4) is almost fully ionized while the phenol (p$K_a$ 10.0) stays mostly neutral in the organic layer. Bicarbonate therefore isolates B; a single NaOH wash would pull both B and D into one aqueous layer.',
          'Residual HCl leaves with the drained aqueous layer after the first wash; it does not require a separate bicarbonate wash. Deprotonating the phenol in any case needs the stronger NaOH, not bicarbonate.',
        ],
        skill: '5C separations (research design)',
      },
      {
        question: 'In the column chromatography step, the order in which the four compounds elute from the column is:',
        options: ['C, D, A, B', 'B, A, D, C', 'A, B, C, D', 'C, A, D, B'],
        correctAnswer: 0,
        explanation:
          'On a silica column with the same mobile phase used in the TLC experiment, the compound that travels farthest on the plate (highest $R_f$) is the least strongly retained and elutes first. The 3:1 $R_f$ values in Table 1 fall in the order C (0.60), D (0.30), A (0.15), B (0.05), so this is the elution order. The reverse order would apply only if the stationary phase were nonpolar; alphabetical order ignores the data; and placing A before D reverses the $R_f$ values of the amine and the phenol.',
        optionExplanations: [
          'Silica retains polar compounds most strongly, so the compound with the highest $R_f$ in the 3:1 eluent elutes first. Table 1 gives C (0.60), then D (0.30), A (0.15), and B (0.05).',
          'The order B, A, D, C is the reverse of the $R_f$ ranking. It would apply on a nonpolar (reversed-phase) stationary phase, where the most polar compound elutes first, not on silica gel.',
          'Alphabetical order ignores the chromatographic data entirely. The carboxylic acid B has the lowest $R_f$ and is the most strongly retained, so it must elute last, not second.',
          'Placing A before D swaps the amine and the phenol. In the 3:1 system A has $R_f$ 0.15 and D has 0.30, so the phenol travels farther and leaves the column before the amine.',
        ],
        skill: '5C chromatography',
      },
      {
        question: 'To recover Compound A as a neutral solid from the retained HCl wash, the analysts should:',
        options: [
          'add sodium bicarbonate until the pH is about 8 and evaporate the water',
          'add more HCl and extract the aqueous layer with dichloromethane',
          'evaporate the aqueous layer to dryness and wash the residue with hexane',
          'add NaOH to a pH above 12 and extract with dichloromethane',
        ],
        correctAnswer: 3,
        explanation:
          'In the HCl wash the amine is present as its ammonium salt, which is water-soluble. To return it to the neutral, organic-soluble free base, the pH must be raised to at least two units above the conjugate acid’s p$K_a$ of 9.8, which requires strong base; the free amine can then be extracted into dichloromethane. At pH 8, more than 95% of the amine would still be protonated, and evaporating water would leave the salt rather than the neutral compound. Adding more HCl keeps the amine ionized in the aqueous layer, and evaporating the acidic layer to dryness leaves the hydrochloride salt, which hexane cannot convert to the free base.',
        optionExplanations: [
          'At pH 8 the amine (conjugate acid p$K_a$ 9.8) is still more than 95% protonated. Evaporating the water would leave the ammonium salt, not the neutral free base.',
          'Adding more HCl keeps the amine fully protonated and water-soluble, so extracting with dichloromethane would recover essentially nothing; it reinforces the ionized state rather than reversing it.',
          'Evaporating the HCl wash to dryness leaves the hydrochloride salt of the amine. Hexane, a nonpolar solvent, cannot deprotonate the salt, so no neutral amine is obtained.',
          'The amine is held in water as its ammonium salt. Raising the pH to about two units above the conjugate acid’s p$K_a$ of 9.8 regenerates the neutral free base, which then partitions into dichloromethane.',
        ],
        skill: '5C extraction and acid–base chemistry',
      },
      {
        question: 'Which of the following best explains why every compound in Table 1 has a higher $R_f$ in the 1:1 solvent system than in the 3:1 system?',
        options: [
          'The more polar mobile phase competes more effectively with silica for the polar groups of the analytes',
          'The less viscous mobile phase carries the analytes farther up the plate in the same development time',
          'Ethyl acetate partially dissolves the silica gel, reducing the number of available binding sites',
          'The more polar mobile phase increases the polarity of the analytes and their affinity for the silica',
        ],
        correctAnswer: 0,
        explanation:
          'Ethyl acetate is far more polar than hexane, so the 1:1 mixture is the more polar mobile phase. Analytes move up a silica plate only while dissolved in the mobile phase, and a more polar eluent solvates polar functional groups and occupies silanol sites more effectively, so each compound spends more of its time moving and travels farther. Viscosity affects how quickly the solvent front advances but not the ratio of spot distance to front distance. Silica gel is insoluble in ethyl acetate. A solvent cannot change the intrinsic polarity of an analyte, and greater affinity for the silica would lower, not raise, the $R_f$.',
        optionExplanations: [
          'Ethyl acetate is far more polar than hexane, so the 1:1 eluent solvates polar analytes and occupies silanol sites more effectively. Each compound spends more time in the mobile phase and travels farther, raising $R_f$.',
          'Viscosity affects how fast the solvent front advances, but $R_f$ is a ratio of spot distance to front distance, so a faster front alone does not change it.',
          'Silica gel is insoluble in ethyl acetate and other common organic solvents, so the number of binding sites is not reduced by the mobile phase.',
          'A solvent cannot change the intrinsic polarity of an analyte. Moreover, greater affinity for silica would make compounds move less, lowering $R_f$ rather than raising it.',
        ],
        skill: '5C chromatography (mobile-phase polarity)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 5. PHYSICS — Geometric optics of the eye (information passage)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-cp-a-05',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'The Eye as an Optical System',
    passageText:
      'The human eye forms an image on the retina using two refracting elements, the cornea and the crystalline lens. Light entering the eye first crosses the boundary between air ($n = 1.00$) and the cornea ($n \\approx 1.38$). Refraction at a surface depends on the difference in refractive index across it, and because the aqueous humor, the lens, and the vitreous humor all have indices between about 1.34 and 1.41, this first surface provides roughly two-thirds of the eye’s total refractive power. The lens provides the remainder, and it alone can change its shape.\n\nOptometrists describe a refracting element by its power, $P = 1/f$, expressed in diopters (D) when the focal length $f$ is in meters; a converging element has positive power and a diverging element negative power, and for thin lenses in contact the powers add. The relaxed adult eye has a total power of about 60 D, with the cornea contributing about 40 D and the lens about 20 D, and the distance from the cornea to the retina is about 1.7 cm. When the eye views a distant object, the arriving rays are nearly parallel and the relaxed eye brings them to a focus on the retina. To focus on a nearer object, the ciliary muscle contracts, releasing tension on the ligaments that suspend the lens, and the elastic lens becomes more sharply curved. This process, called accommodation, has a limit: the closest point on which an eye can focus is its near point, conventionally taken as 25 cm for a young adult. With age the lens stiffens, and the near point recedes, a condition called presbyopia.\n\nThe thin-lens equation, $\\frac{1}{o} + \\frac{1}{i} = \\frac{1}{f}$, where $o$ is the object distance and $i$ the image distance, describes each element and, to a good approximation, the eye as a whole. Refractive errors arise when the power of the eye is mismatched to its length. In myopia (nearsightedness) the eye is too powerful for its length, or equivalently too long, so parallel rays converge in front of the retina; such an eye can focus clearly only on objects closer than a certain distance, its far point. In hyperopia (farsightedness) the eye is too weak for its length, so parallel rays would converge behind the retina; the eye must accommodate even to view distant objects, and its near point lies farther away than normal.\n\nA corrective lens works by forming a virtual image of the object at a distance the unaided eye can handle. For a myopic eye, a diverging lens is chosen so that a distant object produces a virtual image at the far point. For a hyperopic eye, a converging lens is chosen so that an object at the desired reading distance produces a virtual image at, or beyond, the eye’s near point. Because eyeglasses sit only about 1.5 cm in front of the cornea, a correction can be calculated to a good approximation by treating the corrective lens as if it were located at the eye, measuring object and image distances from the lens and assigning negative values to virtual image distances.',
    questions: [
      {
        question: 'A myopic patient’s far point is 50 cm from the eye. Treating the corrective lens as located at the eye, the power of the lens required for clear distance vision is:',
        options: ['−2.0 D', '−0.50 D', '+0.50 D', '+2.0 D'],
        correctAnswer: 0,
        explanation:
          'The lens must take a distant object ($o \\to \\infty$, so $1/o = 0$) and form a virtual image at the far point, $i = -0.50$ m. Then $1/f = 0 + 1/(-0.50) = -2.0\\ \\text{m}^{-1}$, a power of −2.0 D; the negative sign indicates the diverging lens that myopia requires. A power of +2.0 D would be a converging lens and would make the mismatch worse. The values ±0.50 D confuse the focal length in meters with the power in diopters.',
        optionExplanations: [
          'A distant object ($1/o = 0$) must be imaged at the far point, $i$ = −0.50 m, so $1/f$ = −2.0 m$^{-1}$ and the power is −2.0 D. The negative sign indicates the diverging lens myopia requires.',
          'A power of −0.50 D confuses the focal length in meters (0.50 m) with its reciprocal in diopters. The required power is $1/(-0.50\\ \\text{m})$, which is −2.0 D.',
          'A power of +0.50 D is both the wrong sign and the wrong magnitude; a converging lens would bring parallel rays to a focus even farther in front of the retina, worsening myopia.',
          'A power of +2.0 D has the correct magnitude but the wrong sign. A converging lens adds to the eye’s already excessive power, moving the image farther in front of the retina.',
        ],
        skill: '4D geometric optics (thin lens)',
      },
      {
        question: 'A patient with hyperopia cannot focus on anything closer than 100 cm. To read comfortably at 25 cm, the patient needs a corrective lens of power closest to:',
        options: ['+1.0 D', '+3.0 D', '+4.0 D', '+5.0 D'],
        correctAnswer: 1,
        explanation:
          'The lens must form a virtual image of an object at $o = 0.25$ m at the near point, $i = -1.00$ m. Then $1/f = 1/0.25 + 1/(-1.00) = 4.0 - 1.0 = 3.0\\ \\text{m}^{-1}$, or +3.0 D. A value of +4.0 D ignores the fact that the eye can itself focus on an image 1.00 m away and would place the image at infinity; +5.0 D adds the two reciprocals instead of subtracting them; +1.0 D is the power corresponding to the near point alone.',
        optionExplanations: [
          'A power of +1.0 D corresponds to the near point alone ($1/1.00$ m). It ignores the object distance of 0.25 m and would not form the image where the eye can use it.',
          'The lens must take an object at $o$ = 0.25 m and form a virtual image at the near point, $i$ = −1.00 m: $1/f = 1/0.25 - 1/1.00 = 4.0 - 1.0$ = 3.0 D.',
          'A power of +4.0 D would place the image of a 25 cm object at infinity, ignoring that this eye can itself focus on an image 1.00 m away. The eye does part of the work.',
          'A power of +5.0 D adds the two reciprocals (4.0 + 1.0) instead of subtracting. The virtual image distance is negative in the thin-lens equation, so the terms must be subtracted.',
        ],
        skill: '4D geometric optics (lens power)',
      },
      {
        question: 'According to the thin-lens equation, when an object is brought closer to the eye, keeping the image on the retina requires the focal length of the eye to:',
        options: [
          'decrease, which the lens achieves by becoming more curved',
          'increase, which the lens achieves by becoming flatter and thinner',
          'decrease, which the cornea achieves by becoming more curved',
          'remain constant, because the image distance is fixed by the length of the eye',
        ],
        correctAnswer: 0,
        explanation:
          'The image distance $i$ is fixed by the length of the eye. As $o$ decreases, $1/o$ increases, so $1/f = 1/o + 1/i$ must increase, meaning the focal length must decrease and the power must rise. The lens is the only element that can change shape, and a more sharply curved surface refracts more strongly. Flattening the lens would lengthen the focal length and move the image behind the retina. The cornea provides most of the eye’s power but cannot change its curvature, and a fixed image distance requires the focal length to change, not to stay constant, when the object distance changes.',
        optionExplanations: [
          'With image distance fixed by eye length, decreasing $o$ increases $1/o$, so $1/f$ must increase and $f$ decrease. The lens, the only element that changes shape, becomes more sharply curved to do this.',
          'Increasing the focal length would move the image behind the retina when the object approaches. Flattening the lens is the relaxed state for distant viewing, the opposite of accommodation.',
          'The direction of change is right, but the cornea cannot change its curvature; only the crystalline lens, suspended by ligaments that the ciliary muscle relaxes, can reshape itself.',
          'The image distance is indeed fixed, but that is precisely why the focal length must change: $1/f = 1/o + 1/i$ with $i$ constant forces $f$ to vary as $o$ varies.',
        ],
        skill: '4D optics (accommodation)',
      },
    ],
  },
]

export const FL1_CHEM_PHYS_A_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl1-cp-a-d01',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'Which of the following correctly lists the isoelectronic species in order of increasing ionic radius?',
    options: [
      '$\\text{O}^{2-} < \\text{F}^- < \\text{Na}^+ < \\text{Mg}^{2+}$',
      '$\\text{Na}^+ < \\text{Mg}^{2+} < \\text{O}^{2-} < \\text{F}^-$',
      '$\\text{Mg}^{2+} < \\text{Na}^+ < \\text{F}^- < \\text{O}^{2-}$',
      '$\\text{F}^- < \\text{O}^{2-} < \\text{Mg}^{2+} < \\text{Na}^+$',
    ],
    correctAnswer: 2,
    explanation:
      'All four ions have the neon configuration of ten electrons, so their sizes are set by nuclear charge: the more protons, the more tightly the same electron cloud is pulled inward. Magnesium (12 protons) is smallest, followed by sodium (11), fluoride (9), and oxide (8), which is largest. The reverse ordering has the highest nuclear charge as the largest ion. The other two orderings pair the ions by sign of charge but mis-rank them within each pair.',
    optionExplanations: [
      'This ordering places the highest-nuclear-charge ion, $\\text{Mg}^{2+}$, as the largest. In an isoelectronic series more protons pull the identical electron cloud inward, so magnesium must be smallest.',
      'This ordering groups the cations before the anions but mis-ranks within each pair: $\\text{Mg}^{2+}$ (12 protons) is smaller than $\\text{Na}^+$ (11), and $\\text{O}^{2-}$ (8) is larger than $\\text{F}^-$ (9).',
      'All four ions share the ten-electron neon configuration, so size is set by nuclear charge: $\\text{Mg}^{2+}$ (12 protons) is smallest, then $\\text{Na}^+$ (11), $\\text{F}^-$ (9), and $\\text{O}^{2-}$ (8) is largest.',
      'This ordering puts the anions first but reverses the sizes within each pair: fluoride, with one more proton than oxide, is smaller, and sodium is larger than magnesium.',
    ],
    skill: '4E periodic trends',
  },
  {
    id: 'fl1-cp-a-d02',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'Glucose is oxidized according to C$_6$H$_{12}$O$_6$ + 6 O$_2$ → 6 CO$_2$ + 6 H$_2$O. If 18 g of glucose (molar mass 180 g/mol) is combined with 0.30 mol of O$_2$ and the reaction goes to completion, how many moles of CO$_2$ are produced?',
    options: ['0.050 mol', '0.10 mol', '0.30 mol', '0.60 mol'],
    correctAnswer: 2,
    explanation:
      'The sample contains 18/180 = 0.10 mol of glucose, which would require 0.60 mol of O$_2$; only 0.30 mol is available, so oxygen is the limiting reagent. The balanced equation produces CO$_2$ and consumes O$_2$ in a 1:1 ratio, so 0.30 mol of CO$_2$ forms. A value of 0.60 mol assumes glucose is limiting, 0.10 mol equates moles of product with moles of glucose, and 0.050 mol divides the oxygen supply by 6.',
    optionExplanations: [
      'A value of 0.050 mol divides the oxygen supply (0.30 mol) by the coefficient 6, misreading the mole ratio. CO$_2$ and O$_2$ have equal coefficients, so their moles are equal.',
      'A value of 0.10 mol equates moles of CO$_2$ with moles of glucose, ignoring both the 1:6 glucose-to-CO$_2$ ratio and the fact that oxygen, not glucose, limits the reaction.',
      'Glucose (18/180 = 0.10 mol) would need 0.60 mol O$_2$, but only 0.30 mol is present, so O$_2$ limits. Since O$_2$ and CO$_2$ both carry coefficient 6, 0.30 mol of CO$_2$ forms.',
      'A value of 0.60 mol assumes glucose is limiting (0.10 mol × 6). That would require 0.60 mol of O$_2$, twice what is actually available.',
    ],
    skill: '4E stoichiometry (limiting reagent)',
  },
  {
    id: 'fl1-cp-a-d03',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'Equal numbers of moles of helium (4 g/mol) and oxygen (32 g/mol) are held at the same temperature. Compared with the oxygen molecules, the helium atoms have:',
    options: [
      'a greater average kinetic energy and a greater rms speed',
      'the same average kinetic energy and a higher rms speed',
      'the same average kinetic energy and an identical rms speed',
      'a smaller average kinetic energy and a greater rms speed',
    ],
    correctAnswer: 1,
    explanation:
      'According to kinetic molecular theory, the average translational kinetic energy of gas particles depends only on temperature, so the two gases have the same average kinetic energy per particle. Because $\\frac{1}{2}mv^2$ is the same while the helium atom has one-eighth the mass, its root-mean-square speed is higher (by a factor of $\\sqrt{8} \\approx 2.8$). A higher or lower kinetic energy for helium would require a different temperature, and equal speeds would require equal masses.',
    optionExplanations: [
      'Average translational kinetic energy depends only on temperature, so helium cannot have greater kinetic energy than oxygen at the same temperature. Only the rms-speed part of this choice is right.',
      'At a given temperature all gases share the same average translational kinetic energy. Because $\\frac{1}{2}mv^2$ is equal and helium has one-eighth the mass, its rms speed is higher by $\\sqrt{8} \\approx 2.8$.',
      'Equal kinetic energy is right, but identical rms speeds would require identical masses. Helium atoms are eight times lighter than oxygen molecules, so they must move faster.',
      'A smaller average kinetic energy would require a lower temperature, which contradicts the stated equal temperature. Helium does move faster, but with the same, not smaller, kinetic energy.',
    ],
    skill: '4B kinetic molecular theory',
  },
  {
    id: 'fl1-cp-a-d04',
    section: 'chem-phys',
    discipline: 'physics',
    question: 'A 60 kg person climbs a flight of stairs 3.0 m high in 4.0 s. Taking $g = 10\\ \\text{m/s}^2$, the average power the person develops against gravity is:',
    options: ['45 W', '180 W', '450 W', '1800 W'],
    correctAnswer: 2,
    explanation:
      'The work done against gravity is $mgh = (60)(10)(3.0) = 1800$ J, and average power is work divided by time: 1800 J / 4.0 s = 450 W. A value of 1800 W is the work in joules mislabeled as power; 180 W omits $g$ from $mgh$ and skips the division by time (60 × 3.0); 45 W omits $g$ but does divide by the time.',
    optionExplanations: [
      'A value of 45 W omits $g$: it computes 60 × 3.0 = 180 J and divides by 4.0 s. Work against gravity is $mgh$, so the factor of 10 m/s$^2$ is required.',
      'A value of 180 W is the product 60 × 3.0, which both omits $g$ and skips the division by time. Power must be energy per unit time.',
      'Work against gravity is $mgh$ = (60)(10)(3.0) = 1800 J. Average power is work divided by time: 1800 J ÷ 4.0 s = 450 W.',
      'A value of 1800 W is the work done, in joules, mislabeled as a power. Dividing by the 4.0 s climb time is needed to obtain watts.',
    ],
    skill: '4A work and power',
  },
  {
    id: 'fl1-cp-a-d05',
    section: 'chem-phys',
    discipline: 'physics',
    question: 'A race car emitting sound at 600 Hz approaches a stationary spectator at 85 m/s. If the speed of sound is 340 m/s, the frequency the spectator hears is closest to:',
    options: ['480 Hz', '600 Hz', '750 Hz', '800 Hz'],
    correctAnswer: 3,
    explanation:
      'For a source moving toward a stationary observer, $f_{\\text{obs}} = f \\dfrac{v}{v - v_s} = 600 \\times \\dfrac{340}{340 - 85} = 600 \\times \\dfrac{340}{255} = 800$ Hz. A value of 750 Hz results from using the moving-observer form, $f(v + v_s)/v$, which applies when the listener rather than the source moves. A value of 480 Hz corresponds to the source moving away, and 600 Hz would be heard only with no relative motion.',
    optionExplanations: [
      'A frequency of 480 Hz is what the spectator would hear if the car were moving away: $600 \\times 340/(340 + 85)$. The car is approaching, so the frequency must rise above 600 Hz.',
      'Hearing 600 Hz would require no relative motion between source and observer. An approaching source compresses the wavefronts, so the observed frequency must be higher than the emitted frequency.',
      'A frequency of 750 Hz comes from the moving-observer formula, $f(v + v_s)/v$ = 600 × 425/340. Here the source moves and the listener is stationary, so the denominator form applies.',
      'For a source approaching a stationary observer, $f_{\\text{obs}} = f\\, v/(v - v_s)$ = 600 × 340/255 = 800 Hz. The approaching source shortens the wavelength, raising the pitch.',
    ],
    skill: '4D Doppler effect',
  },
  {
    id: 'fl1-cp-a-d06',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    question: 'How many stereoisomers exist for 2,3-dibromobutane?',
    options: ['2', '3', '4', '8'],
    correctAnswer: 1,
    explanation:
      'The molecule has two stereocenters, C2 and C3, each bearing the same set of substituents (H, Br, CH$_3$, and the other stereocenter). The (2R,3R) and (2S,3S) forms are a pair of enantiomers, but the (2R,3S) form has an internal mirror plane and is identical to (2S,3R); this meso compound is achiral. The total is therefore three stereoisomers. The value 4 is the $2^n$ maximum, which applies only when no meso form exists; 2 counts only the enantiomeric pair; 8 would require three stereocenters.',
    optionExplanations: [
      'Two counts only the enantiomeric pair (2R,3R) and (2S,3S). It overlooks the (2R,3S) diastereomer, which is a distinct, achiral meso compound.',
      'C2 and C3 are stereocenters bearing identical substituent sets. (2R,3R) and (2S,3S) are enantiomers, while (2R,3S) is identical to (2S,3R) because of an internal mirror plane, giving three stereoisomers.',
      'Four is the $2^n$ maximum for two stereocenters, which applies only when the stereocenters are different. Here they are identical, so the (2R,3S) and (2S,3R) forms are the same meso compound.',
      'Eight is $2^3$, which would require three stereocenters. 2,3-Dibromobutane has only two, and symmetry reduces the count below even the $2^2$ maximum.',
    ],
    skill: '5D stereochemistry (meso compounds)',
  },
  {
    id: 'fl1-cp-a-d07',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question: 'The side chain of which amino acid is predominantly uncharged at pH 7.4 but becomes predominantly positively charged if the pH is lowered to 5.5?',
    options: ['Lysine', 'Arginine', 'Aspartate', 'Histidine'],
    correctAnswer: 3,
    explanation:
      'The imidazole side chain of histidine has a p$K_a$ of about 6.0, so at pH 7.4 most of it is neutral, while at pH 5.5 (half a unit below the p$K_a$) most of it is protonated and positive. This is why histidine is the residue most often involved in physiological proton transfer. Lysine (side-chain p$K_a$ ≈ 10.5) and arginine (≈ 12.5) are already positively charged at pH 7.4, and aspartate (≈ 3.9) is negatively charged at both pH values.',
    optionExplanations: [
      'Lysine’s side-chain amino group has a p$K_a$ near 10.5, so it is already predominantly positively charged at pH 7.4; lowering the pH to 5.5 does not change its charge state.',
      'Arginine’s guanidinium group (p$K_a$ ≈ 12.5) is positively charged at essentially all physiological pH values, including 7.4, so it does not switch from neutral to charged between 7.4 and 5.5.',
      'Aspartate’s carboxylate (p$K_a$ ≈ 3.9) is negatively charged at both pH 7.4 and pH 5.5. It never becomes positively charged, and it is already ionized at both values.',
      'Histidine’s imidazole has a p$K_a$ of about 6.0. At pH 7.4 it is mostly neutral; at pH 5.5, half a unit below the p$K_a$, most of it is protonated and positive.',
    ],
    skill: '5D amino acid ionization',
  },
  {
    id: 'fl1-cp-a-d08',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question: 'A point mutation replaces a leucine residue buried in the hydrophobic core of a globular protein with lysine. The most likely effect on the folded protein, and its reason, is that the protein is:',
    options: [
      'destabilized, because burying a charged side chain in a nonpolar environment carries a large energetic cost',
      'stabilized, because the longer lysine side chain fills the core more completely than leucine',
      'destabilized, because the lysine side chain cannot participate in hydrogen bonding with the backbone',
      'stabilized, because the positive charge is attracted to nearby backbone carbonyl oxygens',
    ],
    correctAnswer: 0,
    explanation:
      'The hydrophobic effect drives nonpolar side chains into the protein core, where they exclude water; a charged lysine side chain must give up its favorable interactions with water to occupy that site, and the desolvation penalty typically outweighs any other gain, so the native fold is destabilized. Side-chain length is not the issue, and a longer, polar chain distorts rather than improves core packing. Lysine’s amino group can hydrogen-bond, so a lack of hydrogen-bonding ability is not the reason. Backbone carbonyls in a core are already paired in secondary-structure hydrogen bonds, and a buried, unpaired charge is destabilizing rather than stabilizing.',
    optionExplanations: [
      'The hydrophobic core excludes water, so a charged lysine side chain must forfeit its favorable hydration to be buried. This desolvation penalty is large and generally destabilizes the native fold.',
      'A longer, polar, charged side chain does not improve packing; it distorts the tightly packed nonpolar core and introduces a charge where there is no water to solvate it, which is destabilizing.',
      'The direction (destabilized) is right, but the reason is wrong: lysine’s amino group is fully capable of hydrogen bonding. The real cost is burying a charge in a nonpolar environment.',
      'Backbone carbonyls in a folded core are already paired in secondary-structure hydrogen bonds. An unpaired, desolvated positive charge in the core is destabilizing, not stabilizing.',
    ],
    skill: '5B protein folding forces',
  },
]
