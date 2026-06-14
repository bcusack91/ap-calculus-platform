import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Rich, exam-aligned AP Physics 2 flashcards: definitions, must-know formulas
 * (with variable meanings + when to use), conceptual traps, units, and worked
 * mini-examples.
 *
 * Idempotent + NON-destructive: each card is keyed by its `front`. We delete only
 * the fronts this script owns (per topic) before re-inserting, so re-running this
 * script replaces only its own cards and never clobbers cards from sibling scripts
 * (e.g. add-flashcards-ap-physics2-formulas.ts) on the same topics.
 *
 * Slugs are interactive-lesson registry keys verified to exist (see
 * src/data/interactive-lessons/registry.ts).
 */

type Card = { front: string; back: string; hint?: string; lessonPart?: number };

const deck: Record<string, Card[]> = {
  // ---------------------------------------------------------------------------
  'electric-charge-coulombs-law': [
    { front: 'What is the elementary charge, and what are charge units?', back: 'The elementary charge is $e = 1.6\\times10^{-19}\\ \\text{C}$. Charge is measured in **coulombs (C)** and is quantized: any charge is an integer multiple of $e$. A proton is $+e$, an electron is $-e$.', hint: 'Charge comes in whole multiples of e.' },
    { front: 'State Coulomb\'s Law (with symbols).', back: '$F = k\\dfrac{|q_1 q_2|}{r^2}$\n\n- $k = 8.99\\times10^9\\ \\text{N}\\cdot\\text{m}^2/\\text{C}^2$ (Coulomb constant)\n- $q_1, q_2$ = the two charges (C)\n- $r$ = distance between their centers (m)\n\nGives the magnitude; the force is along the line joining the charges.', hint: 'Inverse-square in r, like gravity.' },
    { front: 'Direction of the Coulomb force?', back: 'Like charges (both + or both −) **repel**; opposite charges **attract**. The force on each charge is equal and opposite (Newton\'s third law), regardless of the charges\' relative sizes.', hint: 'Opposites attract; likes repel; forces are equal and opposite.' },
    { front: 'Trap: a +2 μC and a −6 μC charge — which feels the larger force?', back: 'Neither — the forces are **equal in magnitude** and opposite in direction by Newton\'s third law. The 6 μC charge is larger, but it pushes/pulls the 2 μC charge with the same force it feels back.', hint: 'Third-law pair: same magnitude on both.' },
    { front: 'Conductor vs. insulator?', back: '**Conductor** (metals): electrons move freely, so charge redistributes and resides on the surface. **Insulator** (rubber, glass): charges are bound and stay where placed. This distinction governs charging by conduction vs. induction.', hint: 'Conductors let charge flow; insulators hold it in place.' },
    { front: 'Conservation of charge?', back: 'Net charge in an isolated system is constant — charge is neither created nor destroyed, only transferred. When two identical conductors touch, they share the total charge equally.', hint: 'Total charge before = total charge after.' },
    { front: 'How does the Coulomb force change if the distance is doubled?', back: 'Because $F \\propto 1/r^2$, doubling $r$ makes the force **1/4** as strong. Halving $r$ makes it 4× stronger. This inverse-square behavior mirrors gravity.', hint: 'Inverse-square: 2× distance → 1/4 force.' },
    { front: 'Two $+3\\ \\mu\\text{C}$ charges sit 0.2 m apart. Find the force between them.', back: '$F = k\\dfrac{|q_1 q_2|}{r^2} = (8.99\\times10^9)\\dfrac{(3\\times10^{-6})^2}{(0.2)^2}$\n\n$= (8.99\\times10^9)\\dfrac{9\\times10^{-12}}{0.04} \\approx 2.0\\ \\text{N}$, repulsive.', hint: 'Plug into Coulomb\'s law; same sign → repulsion.' },
    { front: 'A $+4\\ \\mu\\text{C}$ and a $-4\\ \\mu\\text{C}$ charge are 0.3 m apart. Find the force magnitude.', back: '$F = (8.99\\times10^9)\\dfrac{(4\\times10^{-6})(4\\times10^{-6})}{(0.3)^2}$\n\n$= (8.99\\times10^9)\\dfrac{1.6\\times10^{-11}}{0.09} \\approx 1.6\\ \\text{N}$, attractive.', hint: 'Use absolute values for magnitude; opposite signs → attraction.' },
    { front: 'Two charges repel with force F. If both charges are doubled, what is the new force?', back: 'Since $F \\propto q_1 q_2$, doubling each gives a factor of $2\\times2 = 4$. The new force is $4F$ (at the same distance).', hint: 'Force scales with the product of the charges.' },
    { front: 'How is charging by induction different from charging by conduction?', back: '**Conduction**: direct contact transfers charge; the object ends with the same sign as the charger. **Induction**: a charged object polarizes a neutral conductor (no contact); grounding then removes some charge, leaving the **opposite** sign — no touching of the charged rod required.', hint: 'Conduction = contact (same sign); induction = no contact (opposite sign).' },
    { front: 'Units check: confirm Coulomb\'s law gives newtons.', back: '$k$ has units $\\text{N}\\cdot\\text{m}^2/\\text{C}^2$. Multiplying by $\\dfrac{\\text{C}\\cdot\\text{C}}{\\text{m}^2}$ gives $\\dfrac{\\text{N}\\cdot\\text{m}^2/\\text{C}^2 \\cdot \\text{C}^2}{\\text{m}^2} = \\text{N}$. The units cancel to a force in newtons.', hint: 'The k constant carries the units that make it work out to N.' },
  ],

  // ---------------------------------------------------------------------------
  'electric-fields-potential': [
    { front: 'Definition of electric field (with symbols)?', back: '$\\vec{E} = \\dfrac{\\vec{F}}{q}$\n\n- $\\vec{F}$ = force on a small test charge (N)\n- $q$ = the test charge (C)\n\n$E$ is force per unit charge, a vector. Units: N/C (equivalently V/m).', hint: 'Force per unit positive charge.' },
    { front: 'Field of a point charge?', back: '$E = k\\dfrac{|Q|}{r^2}$\n\n- $Q$ = source charge (C)\n- $r$ = distance from the charge (m)\n\nPoints away from a positive $Q$ and toward a negative $Q$.', hint: 'Same 1/r² form as Coulomb, but per unit charge.' },
    { front: 'Which way do electric field lines point?', back: 'Away from positive charges and toward negative charges. They never cross, and a denser line spacing means a stronger field. A positive charge feels a force along the field; a negative charge feels a force opposite to it.', hint: 'Out of +, into −.' },
    { front: 'Definition of electric potential (voltage)?', back: '$V = \\dfrac{U}{q}$, and for a point charge $V = k\\dfrac{Q}{r}$.\n\n- $U$ = electric potential energy (J)\n- $q$ = charge (C)\n\n$V$ is potential energy per unit charge, a **scalar**. Units: volts (V) $= \\text{J/C}$.', hint: 'Potential energy per unit charge — scalar, includes sign of Q.' },
    { front: 'Trap: electric field vs. electric potential — vector or scalar?', back: 'Electric **field** $E$ is a vector (has direction). Electric **potential** $V$ is a scalar (just a number with sign). You add fields with vector components but add potentials as plain signed numbers.', hint: 'E is a vector; V is a scalar.' },
    { front: 'Relationship between field and potential for a uniform field?', back: '$E = \\dfrac{V}{d}$ (magnitude), or more precisely $E = -\\dfrac{\\Delta V}{\\Delta d}$.\n\n- $V$ = potential difference (V)\n- $d$ = separation along the field (m)\n\nField points from high to low potential. Units: V/m = N/C.', hint: 'Field points "downhill" in potential.' },
    { front: 'Work done moving a charge through a potential difference?', back: '$W = q\\,\\Delta V$ (work by an external agent equals $q\\Delta V$ in magnitude for the energy change).\n\nEquivalently $\\Delta U = q\\,\\Delta V$. Moving a + charge to higher potential raises its potential energy.', hint: 'Energy change = charge × voltage change.' },
    { front: 'What is an equipotential surface?', back: 'A surface where the potential $V$ is constant everywhere. No work is done moving a charge along it ($\\Delta V = 0$). Equipotentials are always **perpendicular** to field lines, and a conductor\'s surface is an equipotential.', hint: 'Constant V; perpendicular to field lines; no work along it.' },
    { front: 'A 5 μC charge sits in a uniform field of 2000 N/C. What force does it feel?', back: '$F = qE = (5\\times10^{-6})(2000) = 0.01\\ \\text{N} = 10\\ \\text{mN}$, in the direction of $E$ (since the charge is positive).', hint: 'F = qE.' },
    { front: 'Two parallel plates are 0.02 m apart with a 60 V difference. Find the field between them.', back: '$E = \\dfrac{V}{d} = \\dfrac{60}{0.02} = 3000\\ \\text{V/m}$ (= 3000 N/C), pointing from the + plate to the − plate.', hint: 'Uniform field: E = V/d.' },
    { front: 'How much work is needed to move a +2 μC charge through a +12 V rise in potential?', back: '$W = q\\,\\Delta V = (2\\times10^{-6})(12) = 2.4\\times10^{-5}\\ \\text{J} = 24\\ \\mu\\text{J}$.\n\nPositive, because raising a + charge\'s potential increases its energy.', hint: 'W = qΔV.' },
    { front: 'Find the potential 0.1 m from a $+3\\ \\mu\\text{C}$ point charge.', back: '$V = k\\dfrac{Q}{r} = (8.99\\times10^9)\\dfrac{3\\times10^{-6}}{0.1} \\approx 2.7\\times10^{5}\\ \\text{V}$.\n\nUse $1/r$ (not $1/r^2$) for potential, and keep the sign of $Q$.', hint: 'V uses 1/r and the sign of Q.' },
  ],

  // ---------------------------------------------------------------------------
  'current-resistance-ohms-law': [
    { front: 'Definition of electric current (with symbols)?', back: '$I = \\dfrac{Q}{t}$\n\n- $Q$ = charge that flows past a point (C)\n- $t$ = time (s)\n\nCurrent is the rate of charge flow. Units: amperes (A) $= \\text{C/s}$. Conventional current is the direction positive charge would move.', hint: 'Charge per unit time.' },
    { front: 'State Ohm\'s Law (with symbols).', back: '$V = IR$\n\n- $V$ = voltage across the element (V)\n- $I$ = current through it (A)\n- $R$ = resistance ($\\Omega$)\n\nUse for ohmic devices where $R$ is constant. Rearranges to $I = V/R$ or $R = V/I$.', hint: 'Voltage = current × resistance.' },
    { front: 'What is resistivity and how does it set resistance?', back: '$R = \\dfrac{\\rho L}{A}$\n\n- $\\rho$ = resistivity (material property, $\\Omega\\cdot\\text{m}$)\n- $L$ = length of the conductor (m)\n- $A$ = cross-sectional area (m²)\n\nLonger wire → more resistance; thicker wire → less resistance.', hint: 'R grows with length, shrinks with area.' },
    { front: 'Electric power formulas (three forms)?', back: '$P = IV = I^2 R = \\dfrac{V^2}{R}$\n\nAll give power in watts (W). Use $I^2R$ when you know current and resistance, $V^2/R$ when you know voltage and resistance.', hint: 'Pick the form matching your known quantities.' },
    { front: 'Trap: does more resistance always mean more power dissipated?', back: 'No — it depends on what is held fixed. At fixed **current**, $P = I^2R$ rises with $R$. At fixed **voltage**, $P = V^2/R$ FALLS as $R$ rises. Always check which quantity is constant.', hint: 'It depends whether V or I is fixed.' },
    { front: 'What is EMF and how does internal resistance affect terminal voltage?', back: 'EMF ($\\varepsilon$) is the source\'s ideal voltage. With internal resistance $r$, the terminal voltage is $V = \\varepsilon - Ir$. Under load, terminal voltage drops below the EMF; at higher current the drop is larger.', hint: 'Terminal voltage = EMF − (current × internal resistance).' },
    { front: 'A device draws 2 A when connected across 12 V. What is its resistance?', back: '$R = \\dfrac{V}{I} = \\dfrac{12}{2} = 6\\ \\Omega$.', hint: 'R = V / I.' },
    { front: 'How much power does that 6 Ω device (2 A, 12 V) dissipate?', back: '$P = IV = (2)(12) = 24\\ \\text{W}$.\n\nCheck: $I^2R = (2)^2(6) = 24$ W, and $V^2/R = 144/6 = 24$ W. All three agree.', hint: 'Any of the three power forms works.' },
    { front: 'How much charge flows when a 3 A current runs for 10 s?', back: '$Q = It = (3)(10) = 30\\ \\text{C}$.', hint: 'Q = I × t.' },
    { front: 'A wire\'s length is doubled and its cross-sectional area is halved. What happens to its resistance?', back: '$R = \\rho L / A$. Doubling $L$ doubles $R$; halving $A$ doubles $R$ again. Net: resistance becomes **4× larger**.', hint: 'Both changes increase R, multiplying.' },
    { front: 'A battery has EMF 9 V and internal resistance 0.5 Ω; it supplies 2 A. Find the terminal voltage.', back: '$V = \\varepsilon - Ir = 9 - (2)(0.5) = 9 - 1 = 8\\ \\text{V}$.', hint: 'Subtract the internal Ir drop from the EMF.' },
    { front: 'Units check: show that $I^2R$ gives watts.', back: '$I^2R$: $\\text{A}^2\\cdot\\Omega$. Since $\\Omega = \\text{V/A}$, this is $\\text{A}^2\\cdot\\text{V/A} = \\text{A}\\cdot\\text{V} = \\text{W}$ (because $1\\ \\text{W} = 1\\ \\text{A}\\cdot\\text{V}$).', hint: 'Use Ω = V/A to reduce to A·V = W.' },
  ],

  // ---------------------------------------------------------------------------
  'series-parallel-circuits': [
    { front: 'How do resistors add in series?', back: '$R_{series} = R_1 + R_2 + R_3 + \\dots$\n\nThe same **current** flows through each; voltages add up to the source voltage. Series resistance is always larger than the largest individual resistor.', hint: 'Series resistances simply add.' },
    { front: 'How do resistors combine in parallel?', back: '$\\dfrac{1}{R_{parallel}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\dots$\n\nEach branch has the same **voltage**; branch currents add. The parallel total is always *smaller* than the smallest branch resistor.', hint: 'Add reciprocals; total is less than the smallest.' },
    { front: 'In a SERIES circuit, what is the same and what adds?', back: '**Same** through every element: current $I$.\n**Adds up** to the source: the voltage drops ($V_{total} = V_1 + V_2 + \\dots$).\n\nIf one bulb in a series string burns out, the circuit breaks and all go dark.', hint: 'Series: shared current, split voltage.' },
    { front: 'In a PARALLEL circuit, what is the same and what adds?', back: '**Same** across every branch: voltage $V$.\n**Adds up**: the branch currents ($I_{total} = I_1 + I_2 + \\dots$).\n\nEach branch is independent — removing one leaves the others working.', hint: 'Parallel: shared voltage, split current.' },
    { front: 'Trap: do two identical resistors in parallel give double or half the resistance?', back: 'Half. Two equal resistors $R$ in parallel give $R/2$. Adding parallel paths gives current more routes, so total resistance **decreases**.', hint: 'Parallel paths lower the resistance.' },
    { front: 'Two resistors $4\\ \\Omega$ and $6\\ \\Omega$ are in series across 20 V. Find the current.', back: '$R_{eq} = 4 + 6 = 10\\ \\Omega$.\n\n$I = \\dfrac{V}{R_{eq}} = \\dfrac{20}{10} = 2\\ \\text{A}$ (the same through both).', hint: 'Add series resistances, then use Ohm\'s law.' },
    { front: 'For that series circuit (2 A through 4 Ω and 6 Ω), find the voltage across each resistor.', back: '$V_1 = IR_1 = (2)(4) = 8\\ \\text{V}$; $V_2 = IR_2 = (2)(6) = 12\\ \\text{V}$.\n\nCheck: $8 + 12 = 20\\ \\text{V}$ = source voltage. ✓', hint: 'V = IR per resistor; drops sum to the source.' },
    { front: 'Two resistors $4\\ \\Omega$ and $6\\ \\Omega$ are in parallel. Find their equivalent resistance.', back: '$\\dfrac{1}{R_{eq}} = \\dfrac{1}{4} + \\dfrac{1}{6} = \\dfrac{3}{12} + \\dfrac{2}{12} = \\dfrac{5}{12}$.\n\n$R_{eq} = \\dfrac{12}{5} = 2.4\\ \\Omega$ (less than 4 Ω, as expected).', hint: 'Sum reciprocals, then invert.' },
    { front: 'Two $12\\ \\Omega$ bulbs are in parallel across 12 V. Find the total current from the source.', back: 'Each branch: $I = V/R = 12/12 = 1\\ \\text{A}$.\n\nTotal: $I_{total} = 1 + 1 = 2\\ \\text{A}$ (branch currents add).', hint: 'Same voltage on each branch; add currents.' },
    { front: 'Why are household outlets wired in parallel, not series?', back: 'Parallel gives every device the **same full voltage** (120 V) and lets each operate independently — unplugging one does not cut power to the others. In series, devices would share the voltage and one failure would break the whole circuit.', hint: 'Parallel = same voltage + independent devices.' },
    { front: 'Brightness trap: you add a second identical bulb in parallel to an ideal battery. What happens to the first bulb?', back: 'Its brightness is **unchanged** — it still sees the full battery voltage, so the same current flows through it. The battery just supplies more total current. (In series, adding a bulb would dim both.)', hint: 'Parallel keeps each branch\'s voltage the same.' },
    { front: 'Capacitors: how do they combine in series and parallel (opposite of resistors)?', back: '**Parallel**: $C_{eq} = C_1 + C_2 + \\dots$ (add directly).\n**Series**: $\\dfrac{1}{C_{eq}} = \\dfrac{1}{C_1} + \\dfrac{1}{C_2} + \\dots$ (add reciprocals).\n\nThis is the reverse of the resistor rules — a classic trap.', hint: 'Capacitors are the mirror image of resistors.' },
  ],

  // ---------------------------------------------------------------------------
  'density-and-pressure': [
    { front: 'Definition of density (with symbols)?', back: '$\\rho = \\dfrac{m}{V}$\n\n- $m$ = mass (kg)\n- $V$ = volume (m³)\n\nUnits: $\\text{kg/m}^3$. Water is $1000\\ \\text{kg/m}^3$ ($= 1\\ \\text{g/cm}^3$).', hint: 'Mass per unit volume.' },
    { front: 'Definition of pressure (with symbols)?', back: '$P = \\dfrac{F}{A}$\n\n- $F$ = force perpendicular to the surface (N)\n- $A$ = area (m²)\n\nUnits: pascals (Pa) $= \\text{N/m}^2$. Pressure is a scalar; the same force on a smaller area gives more pressure.', hint: 'Force per unit area, perpendicular component.' },
    { front: 'Pressure with depth in a fluid (hydrostatic pressure)?', back: '$P = P_0 + \\rho g h$\n\n- $P_0$ = pressure at the surface (often atmospheric)\n- $\\rho$ = fluid density (kg/m³)\n- $g$ = 9.8 m/s²\n- $h$ = depth below the surface (m)\n\nPressure increases linearly with depth.', hint: 'Gauge pressure ρgh adds to surface pressure.' },
    { front: 'Trap: does the SHAPE or amount of fluid affect pressure at a given depth?', back: 'No. Hydrostatic pressure depends only on depth $h$, density $\\rho$, and $g$ — not on the container\'s shape or the total volume. A thin tube and a wide tank have the same pressure at equal depth (hydrostatic paradox).', hint: 'Only depth matters, not container shape.' },
    { front: 'State Pascal\'s Principle.', back: 'A pressure change applied to an enclosed fluid is transmitted **undiminished** to every part of the fluid and the container walls. This is the basis of hydraulic lifts.', hint: 'Applied pressure spreads equally throughout a confined fluid.' },
    { front: 'Hydraulic lift relationship?', back: '$\\dfrac{F_1}{A_1} = \\dfrac{F_2}{A_2}$ (equal pressure on both pistons).\n\nA small force on a small piston ($A_1$) produces a large force on a large piston ($A_2$): $F_2 = F_1\\,\\dfrac{A_2}{A_1}$. Force is multiplied by the area ratio.', hint: 'Same pressure, bigger area → bigger force.' },
    { front: 'What is gauge pressure vs. absolute pressure?', back: '**Absolute pressure** is the total ($P_0 + \\rho g h$). **Gauge pressure** is the amount above atmospheric ($\\rho g h$). A tire gauge reads gauge pressure; the absolute pressure is that plus ~101 kPa.', hint: 'Gauge = absolute − atmospheric.' },
    { front: 'A 1 m³ block has a mass of 800 kg. Find its density and state whether it floats in water.', back: '$\\rho = m/V = 800/1 = 800\\ \\text{kg/m}^3$.\n\nSince $800 < 1000\\ \\text{kg/m}^3$ (water), the block **floats**.', hint: 'Less dense than water → floats.' },
    { front: 'A 200 N force presses on a $0.05\\ \\text{m}^2$ area. Find the pressure.', back: '$P = \\dfrac{F}{A} = \\dfrac{200}{0.05} = 4000\\ \\text{Pa} = 4\\ \\text{kPa}$.', hint: 'P = F / A.' },
    { front: 'Find the gauge pressure 10 m underwater (ρ = 1000 kg/m³).', back: '$P_{gauge} = \\rho g h = (1000)(9.8)(10) = 98{,}000\\ \\text{Pa} \\approx 98\\ \\text{kPa}$.\n\nThis is about 1 atmosphere — pressure roughly doubles 10 m down.', hint: 'Use ρgh for the pressure above atmospheric.' },
    { front: 'A hydraulic lift has piston areas $0.01\\ \\text{m}^2$ and $0.5\\ \\text{m}^2$. A 100 N force on the small piston lifts what weight?', back: '$F_2 = F_1\\dfrac{A_2}{A_1} = 100\\cdot\\dfrac{0.5}{0.01} = 100\\times50 = 5000\\ \\text{N}$.\n\nThe area ratio (50:1) multiplies the force.', hint: 'Multiply by the area ratio A₂/A₁.' },
    { front: 'Units check: confirm $\\rho g h$ gives pascals.', back: '$\\rho g h$: $(\\text{kg/m}^3)(\\text{m/s}^2)(\\text{m}) = \\text{kg}/(\\text{m}\\cdot\\text{s}^2)$. Since $\\text{N} = \\text{kg}\\cdot\\text{m/s}^2$, this is $\\text{N/m}^2 = \\text{Pa}$. ✓', hint: 'It reduces to N/m² = Pa.' },
  ],

  // ---------------------------------------------------------------------------
  'heat-specific-heat': [
    { front: 'Difference between heat and temperature?', back: '**Temperature** is the average kinetic energy of particles (in K or °C). **Heat** ($Q$) is energy transferred between objects due to a temperature difference (in J). A bathtub of warm water has more heat energy than a spark, despite a lower temperature.', hint: 'Temperature is intensive; heat is energy in transit.' },
    { front: 'Specific heat equation (with symbols)?', back: '$Q = mc\\,\\Delta T$\n\n- $Q$ = heat added/removed (J)\n- $m$ = mass (kg)\n- $c$ = specific heat capacity (J/kg·°C), a material property\n- $\\Delta T$ = temperature change (°C or K)\n\nUse it when an object changes temperature (no phase change).', hint: 'Heat to change temperature: Q = mcΔT.' },
    { front: 'What does a high specific heat mean physically?', back: 'It takes a lot of energy to change that substance\'s temperature. Water has a very high specific heat ($c \\approx 4186\\ \\text{J/kg}\\cdot°\\text{C}$), so it heats and cools slowly — which moderates coastal climates.', hint: 'High c → resists temperature change.' },
    { front: 'Trap: when does $Q = mc\\Delta T$ NOT apply?', back: 'During a **phase change** (melting/boiling), where temperature stays constant while heat is absorbed. There you use latent heat $Q = mL$ instead. $mc\\Delta T$ only covers temperature changes within a single phase.', hint: 'Phase changes use Q = mL, not mcΔT.' },
    { front: 'Principle behind calorimetry?', back: 'Energy conservation: in an insulated system, $Q_{lost}$ by the hot object equals $Q_{gained}$ by the cold object. So $\\sum Q = 0$ (or $-m_h c_h \\Delta T_h = m_c c_c \\Delta T_c$). Objects reach a common final temperature.', hint: 'Heat lost = heat gained.' },
    { front: 'Three mechanisms of heat transfer?', back: '**Conduction**: through direct contact (collisions in solids).\n**Convection**: bulk movement of a fluid (warm fluid rises).\n**Radiation**: electromagnetic waves, needs no medium (the Sun warming Earth).', hint: 'Contact, fluid flow, and EM waves.' },
    { front: 'How much heat raises 2 kg of water by 10 °C? ($c = 4186\\ \\text{J/kg·°C}$)', back: '$Q = mc\\Delta T = (2)(4186)(10) = 83{,}720\\ \\text{J} \\approx 83.7\\ \\text{kJ}$.', hint: 'Plug straight into Q = mcΔT.' },
    { front: 'A 0.5 kg metal block gains 9000 J and warms by 40 °C. Find its specific heat.', back: '$c = \\dfrac{Q}{m\\,\\Delta T} = \\dfrac{9000}{(0.5)(40)} = \\dfrac{9000}{20} = 450\\ \\text{J/kg·°C}$.', hint: 'Solve Q = mcΔT for c.' },
    { front: '0.1 kg of hot metal ($c = 900$) cools from 100 °C to 30 °C. How much heat is released?', back: '$Q = mc\\Delta T = (0.1)(900)(30 - 100) = (0.1)(900)(-70) = -6300\\ \\text{J}$.\n\nThe negative sign means 6300 J is **released**.', hint: 'ΔT is negative when cooling.' },
    { front: 'Why does the same heat raise a metal\'s temperature far more than water\'s?', back: 'Metals have a much smaller specific heat $c$ than water. From $\\Delta T = Q/(mc)$, a smaller $c$ gives a larger $\\Delta T$ for the same $Q$ and $m$. Water\'s high $c$ buffers temperature changes.', hint: 'Smaller c → bigger ΔT for the same heat.' },
    { front: 'Hot 0.2 kg copper (c = 385) at 90 °C is dropped into cool water. Write the calorimetry energy balance.', back: 'Heat lost by copper = heat gained by water:\n\n$m_{Cu} c_{Cu}(T_f - 90) = -\\,m_w c_w (T_f - T_{w,i})$, equivalently $\\sum Q = 0$.\n\nSolve for the common final temperature $T_f$.', hint: 'Set total Q to zero and solve for T_f.' },
    { front: 'Units check: confirm $mc\\Delta T$ gives joules.', back: '$mc\\Delta T$: $(\\text{kg})\\left(\\dfrac{\\text{J}}{\\text{kg}\\cdot°\\text{C}}\\right)(°\\text{C}) = \\text{J}$. The kg and °C cancel, leaving joules. ✓', hint: 'kg and °C cancel, leaving J.' },
  ],
};

async function main() {
  console.log('Adding rich AP Physics 2 flashcards...\n');

  let totalTopics = 0;
  let totalCards = 0;

  for (const [slug, cards] of Object.entries(deck)) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) {
      console.log(`⚠ Topic not found: ${slug}`);
      continue;
    }

    // Idempotent + non-destructive: only remove the fronts this script owns.
    const fronts = cards.map((c) => c.front);
    await prisma.flashcard.deleteMany({
      where: { topicId: topic.id, front: { in: fronts } },
    });

    await prisma.flashcard.createMany({
      data: cards.map((c) => ({
        topicId: topic.id,
        front: c.front,
        back: c.back,
        hint: c.hint,
        lessonPart: c.lessonPart,
      })),
    });

    totalTopics += 1;
    totalCards += cards.length;
    console.log(`✅ ${slug}: ${cards.length} cards`);
  }

  console.log(`\n✅ AP Physics 2 flashcards added! (${totalCards} cards across ${totalTopics} topics)`);
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
