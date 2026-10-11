/**
 * MCAT Full-Length Form 4 — Chem/Phys, file B (passages 6–10 + 7 discretes).
 * Authored 2026-09-30 against the AAMC-blueprint rebuild brief: 400–600 word
 * passages, information + experiment mix, keys that never restate a passage
 * sentence, parallel-length options, position-balanced keys. Keys await an
 * independent blind-solve (no needsReview flags set here by design).
 *
 * LaTeX renders through KaTeX; backslashes are double-escaped in these strings.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL4_CHEM_PHYS_B_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 6. GENERAL CHEMISTRY — Electrolytes in body fluids (information)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-cp-b-06',
    section: 'chem-phys',
    discipline: 'general chemistry',
    title: 'Water, Electrolytes, and the Conductivity of Body Fluids',
    passageText:
      'About 60 percent of an adult’s body mass is water, and nearly every physiological process depends on the ions dissolved in it. Blood plasma contains roughly 140 mM $\\text{Na}^+$, 4 mM $\\text{K}^+$, 2.5 mM $\\text{Ca}^{2+}$, 1 mM $\\text{Mg}^{2+}$, 100 mM $\\text{Cl}^-$, and 24 mM $\\text{HCO}_3^-$, together with smaller amounts of phosphate, sulfate, organic anions, and negatively charged proteins. Because these ions can carry charge through the fluid, body fluids conduct electricity. Clinical instruments exploit this property: bioelectrical impedance devices estimate total body water from the opposition of the body to a small alternating current, and a sweat-conductivity test screens for cystic fibrosis, in which a defective chloride channel leaves sweat abnormally salty.\n\nWater is an exceptional solvent for ions. The electrostatic force between two charges immersed in a medium is smaller than the force between the same charges in a vacuum by a factor called the dielectric constant of the medium. For water near body temperature this factor is about 75, whereas for the hydrocarbon core of a lipid bilayer it is only about 2, which is one reason that ions cross membranes almost exclusively through proteins. In addition, water molecules gather around each dissolved ion in an oriented hydration shell. The energy released as this shell forms, the hydration enthalpy, offsets much of the lattice energy that must be supplied to separate the ions of a crystalline salt.\n\nSolutes are classified by the extent to which they produce ions in water. Strong electrolytes, such as NaCl and KCl, are essentially completely dissociated in dilute solution. Weak electrolytes, such as lactic acid or ammonia dissolved in pure water, establish an equilibrium in which only a fraction of the dissolved molecules exist as ions. Nonelectrolytes, such as glucose and urea, dissolve as intact neutral molecules.\n\nThe conductivity of a solution is the sum of contributions from each kind of ion present. Each contribution is proportional to the ion’s concentration, to the magnitude of its charge, and to its mobility, the speed it reaches per unit strength of the applied electric field. An ion moving through water quickly reaches a speed at which the electrical force on it is balanced by frictional drag from the surrounding solvent, and anything that increases the effective size of the moving particle lowers its mobility. The ions $\\text{H}_3\\text{O}^+$ and $\\text{OH}^-$ are exceptions to the usual pattern: their mobilities are several times those of other small ions, because charge can be relayed along chains of hydrogen-bonded water molecules, with protons shifting from one molecule to the next rather than a single ion traveling the whole distance.\n\nMany effects of dissolved ions depend less on their total concentration than on the ionic strength, defined as $I = \\tfrac{1}{2}\\sum c_i z_i^2$, where $c_i$ is the molar concentration of ion $i$ and $z_i$ is its charge. Plasma has an ionic strength of roughly 0.15 M. Each charged group on a dissolved protein attracts a diffuse cloud of oppositely charged ions from the solution, and as the ionic strength rises this cloud becomes denser and more compact. The cloud screens the charged group, so attractions and repulsions between charged groups, whether on separate proteins or within a single protein, are weaker at high ionic strength than at low ionic strength.',
    questions: [
      {
        question: 'The large dielectric constant of water described in the passage arises mainly because each water molecule:',
        options: [
          'is bent, so that its two O–H bond dipoles combine to give a net molecular dipole',
          'is linear, so that its two O–H bond dipoles add along the axis of the molecule',
          'has nonpolar O–H bonds whose electron clouds are distorted by nearby ions',
          'donates a proton to each dissolved ion and is converted into a hydroxide ion',
        ],
        correctAnswer: 0,
        explanation:
          'Oxygen is much more electronegative than hydrogen, so each O–H bond is polar, and because the molecule is bent (about 104.5°) the two bond dipoles do not cancel; these permanent molecular dipoles orient around charges and weaken the field between them. A linear water molecule would have bond dipoles pointing in opposite directions that cancel, leaving no net dipole. The O–H bond is strongly polar, not nonpolar, and polarizability of electron clouds contributes only a small part of the dielectric constant. Water does not transfer protons to ions such as $\\text{Na}^+$ or $\\text{Cl}^-$; it surrounds them intact.',
        optionExplanations: [
          'Oxygen is far more electronegative than hydrogen, so each O–H bond is polar, and the bent geometry (about 104.5°) keeps the two bond dipoles from canceling. The resulting permanent molecular dipoles orient around dissolved charges and weaken the field between them, producing the large dielectric constant.',
          'A linear water molecule would have its two bond dipoles pointing in opposite directions, so they would cancel and leave no net dipole. Water’s dielectric behavior depends on it being bent, not linear.',
          'The O–H bond is strongly polar because of the large electronegativity difference between oxygen and hydrogen, not nonpolar. Distortion of electron clouds (polarizability) contributes only a small part of water’s dielectric constant compared with reorientation of permanent dipoles.',
          'Water does not transfer protons to ions such as $\\text{Na}^+$ or $\\text{Cl}^-$; it surrounds them intact in a hydration shell. The passage describes oriented water molecules gathering around ions, not a chemical conversion to hydroxide.',
        ],
        skill: '5B molecular polarity of water (Skill 1)',
      },
      {
        question: 'What is the ionic strength of a 0.10 M aqueous solution of $\\text{MgCl}_2$?',
        options: ['0.15 M', '0.20 M', '0.30 M', '0.60 M'],
        correctAnswer: 2,
        explanation:
          'The solution contains 0.10 M $\\text{Mg}^{2+}$ ($z = +2$) and 0.20 M $\\text{Cl}^-$ ($z = -1$), so $I = \\tfrac{1}{2}[(0.10)(2)^2 + (0.20)(1)^2] = \\tfrac{1}{2}(0.40 + 0.20) = 0.30$ M. The value 0.15 M ignores the charges and simply halves the total ion concentration; 0.20 M uses $z$ rather than $z^2$ for magnesium; 0.60 M omits the factor of one-half in the definition.',
        optionExplanations: [
          'This value simply halves the total ion concentration, $\\tfrac{1}{2}(0.10 + 0.20) = 0.15$ M, ignoring the charges entirely. Ionic strength weights each ion by the square of its charge, which quadruples magnesium’s contribution.',
          'This value uses $z$ rather than $z^2$ for magnesium: $\\tfrac{1}{2}[(0.10)(2) + (0.20)(1)] = 0.20$ M. The definition $I = \\tfrac{1}{2}\\sum c_i z_i^2$ squares the charge, so the divalent ion contributes 0.40, not 0.20.',
          'The solution contains 0.10 M $\\text{Mg}^{2+}$ and 0.20 M $\\text{Cl}^-$. Applying $I = \\tfrac{1}{2}\\sum c_i z_i^2$ gives $\\tfrac{1}{2}[(0.10)(4) + (0.20)(1)] = \\tfrac{1}{2}(0.60) = 0.30$ M.',
          'This value omits the factor of one-half in the definition: $(0.10)(4) + (0.20)(1) = 0.60$. The sum of $c_i z_i^2$ must be halved to give the ionic strength, which is 0.30 M.',
        ],
        skill: '5A ionic strength calculation (Skill 2)',
      },
      {
        question: 'A 0.10 M solution of lactic acid in pure water is diluted with pure water to 0.010 M. The conductivity of the solution is expected to:',
        options: [
          'fall about tenfold, because the concentration of lactic acid fell tenfold',
          'fall less than tenfold, because a larger fraction of the acid is now ionized',
          'fall more than tenfold, because the ions become less mobile when diluted',
          'stay about the same, because the acid dissociation constant is unchanged',
        ],
        correctAnswer: 1,
        explanation:
          'For a weak acid, dilution shifts the dissociation equilibrium toward the ions (the ion side has more dissolved particles), so the fraction ionized rises; the ion concentration, roughly $\\sqrt{K_a C}$, falls by only about $\\sqrt{10} \\approx 3$-fold rather than tenfold. A tenfold drop would apply to a strong electrolyte whose ionization is complete at both concentrations. Ionic mobility does not fall on dilution; if anything it rises slightly. An unchanged $K_a$ does not mean an unchanged ion concentration, because the total amount of acid per liter has fallen.',
        optionExplanations: [
          'A tenfold drop in conductivity would apply to a strong electrolyte like NaCl, which is fully dissociated at both concentrations. Lactic acid is a weak electrolyte whose degree of ionization changes with dilution, so its ion concentration does not fall in proportion.',
          'Dilution shifts the weak-acid equilibrium toward the ions because the ionized side has more dissolved particles, so the fraction ionized rises. The ion concentration scales roughly as $\\sqrt{K_a C}$, falling only about $\\sqrt{10} \\approx 3$-fold, so conductivity falls less than tenfold.',
          'Ionic mobility does not fall on dilution; if anything, fewer ion–ion interactions let ions move slightly more freely. A more-than-tenfold drop would require both complete dissociation and decreased mobility, neither of which applies here.',
          '$K_a$ is indeed constant at fixed temperature, but an unchanged equilibrium constant does not mean an unchanged ion concentration. The total acid per liter has fallen tenfold, so the absolute number of ions must decrease even though the ionized fraction increases.',
        ],
        skill: '5A weak electrolytes and dilution (Skill 2)',
      },
      {
        question: 'In water, a $\\text{Li}^+$ ion moves more slowly in an electric field than a $\\text{K}^+$ ion does, even though a bare $\\text{Li}^+$ ion is much smaller. Which explanation is most consistent with the passage?',
        options: [
          '$\\text{Li}^+$ is heavier than $\\text{K}^+$, so the same electric force gives it a smaller acceleration.',
          '$\\text{Li}^+$ carries a larger charge than $\\text{K}^+$, so it is held back by more of the anions nearby.',
          '$\\text{Li}^+$ pairs with anions more completely than $\\text{K}^+$ does, so fewer free ions carry current.',
          '$\\text{Li}^+$ has a higher charge density, so it binds and drags along a larger shell of water molecules.',
        ],
        correctAnswer: 3,
        explanation:
          'Because $\\text{Li}^+$ packs a +1 charge into a very small volume, it attracts water dipoles strongly and moves with a large, tightly held hydration shell; the passage notes that anything that increases the effective size of the moving particle increases drag and lowers mobility. $\\text{Li}^+$ (about 7 g/mol) is much lighter than $\\text{K}^+$ (about 39 g/mol), and mobility is set by the balance of electric force and drag, not by acceleration. Both ions carry a charge of +1. Ion pairing would reduce the number of charge carriers in a salt solution but would not explain why an individual $\\text{Li}^+$ ion moves more slowly.',
        optionExplanations: [
          '$\\text{Li}^+$ (about 7 g/mol) is much lighter than $\\text{K}^+$ (about 39 g/mol), so this reverses the masses. Moreover, the passage states that mobility is set by the balance between electric force and drag at steady speed, not by acceleration.',
          'Both ions carry a charge of +1, so $\\text{Li}^+$ does not have a larger charge. The difference lies in charge density (charge per unit volume), which affects hydration, not in the total charge or the number of nearby anions.',
          'Ion pairing would reduce the number of free charge carriers in a salt solution, but the question asks why an individual $\\text{Li}^+$ ion moves more slowly in a field. Pairing does not explain a lower mobility per ion.',
          'Packing a +1 charge into a very small volume gives $\\text{Li}^+$ a high charge density, so it binds water dipoles tightly and moves with a large hydration shell. The passage states that anything increasing the effective size of the moving particle raises drag and lowers mobility.',
        ],
        skill: '5A hydration and ionic mobility (Skill 1)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 7. PHYSICS — Sedimentation, Stokes' law, and centrifugation (experiment)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-cp-b-07',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Sedimentation of Cell-Sized Spheres in a Centrifugal Field',
    passageText:
      'Separating whole blood into cells and plasma, preparing platelet-rich plasma, and isolating organelles from a tissue homogenate all depend on sedimentation, the motion of suspended particles through a fluid under the influence of gravity or of a centrifuge. A particle of radius $r$ and density $\\rho_p$ suspended in a fluid of density $\\rho_f$ is acted on by three forces along the direction of sedimentation: the force of the field on the particle’s own mass; a buoyant force equal to the force of the field on the fluid that the particle displaces; and a drag force that opposes the particle’s motion. For a small sphere moving slowly, the drag force is given by Stokes’ law, $F_d = 6\\pi\\eta r v$, where $\\eta$ is the viscosity of the fluid and $v$ is the speed of the particle relative to the fluid. Because drag grows with speed, a particle released from rest accelerates for only a tiny fraction of a second before it reaches a constant sedimentation velocity:\n\n$v = \\dfrac{2r^2(\\rho_p - \\rho_f)\\,a}{9\\eta}$\n\nin which $a$ is the acceleration characteristic of the field. Under gravity, $a = g$. In a centrifuge rotor turning at angular speed $\\omega$, a particle at distance $R$ from the axis experiences $a = \\omega^2 R$, and the strength of the field is reported as the relative centrifugal force, RCF $= \\omega^2 R/g$, expressed as a multiple of $g$.\n\nThese relationships explain how centrifugation separates the components of blood. A red blood cell behaves approximately as a sphere of radius 3 μm and density 1.10 g/cm³, and a platelet as a sphere of radius 1.5 μm and density 1.04 g/cm³; plasma has a density of about 1.025 g/cm³. A brief, gentle spin can therefore bring most red cells to the bottom of a tube while most platelets remain suspended in the plasma above them.\n\nTo test how well the Stokes relationship describes particles of cellular size, investigators used polystyrene microspheres with a density of 1.05 g/cm³ and six different radii. The spheres were suspended at low concentration, so that they did not interact, in one of two media held at 20 °C: a saline buffer with a density of 1.00 g/cm³ and a viscosity of 1.0 mPa·s, or the same buffer containing a dissolved synthetic polymer. Each suspension was spun in an analytical centrifuge at an RCF of 100 while a camera synchronized with the rotor photographed the spheres through a quartz window. The sedimentation velocity for each radius was taken as the mean of values measured for 50 individual spheres, and the results are shown in Figure 1. In the buffer, the measured velocities agreed within 3% with the values calculated from the equation above. The investigators concluded that the polymer had altered only the viscosity of the medium.',
    chart: {
      title: 'Figure 1. Sedimentation velocity of polystyrene microspheres versus sphere radius at an RCF of 100 (20 °C)',
      kind: 'line',
      xLabel: 'Sphere radius',
      xUnit: 'μm',
      yLabel: 'Sedimentation velocity',
      yUnit: 'μm/s',
      xValues: [1, 2, 3, 4, 5, 6],
      yValues: [11, 44, 100, 178, 278, 400],
      seriesLabel: 'Saline buffer',
      comparisonSeries: [{ label: 'Buffer + polymer', yValues: [5.5, 22, 50, 89, 139, 200] }],
    },
    questions: [
      {
        question: 'Based on Figure 1, a 3-μm sphere in the polymer solution sediments at about the same velocity as a sphere of what radius in the saline buffer?',
        options: ['1.5 μm', '2.1 μm', '3.0 μm', '4.2 μm'],
        correctAnswer: 1,
        explanation:
          'A 3-μm sphere in the polymer solution moves at 50 μm/s. In buffer, velocity rises with the square of the radius (11, 44, 100 μm/s at 1, 2, 3 μm), so 50 μm/s corresponds to $r = 3/\\sqrt{2} \\approx 2.1$ μm, just above the 2-μm point (44 μm/s). A 1.5-μm radius would follow if velocity were proportional to radius rather than to its square. A 3.0-μm sphere in buffer moves twice as fast (100 μm/s), and a 4.2-μm sphere moves about four times as fast, applying the factor of √2 in the wrong direction.',
        optionExplanations: [
          'A 1.5-μm sphere would match 50 μm/s only if velocity were proportional to the radius itself (half the radius for half the speed). The buffer data (11, 44, 100 μm/s at 1, 2, 3 μm) show velocity scales with the square of the radius.',
          'In the polymer solution a 3-μm sphere moves at 50 μm/s. In buffer, velocity rises as $r^2$ (11, 44, 100 μm/s at 1, 2, 3 μm), so 50 μm/s corresponds to $r = 3/\\sqrt{2} \\approx 2.1$ μm, just above the 2-μm point at 44 μm/s.',
          'A 3.0-μm sphere in the saline buffer moves at 100 μm/s, twice as fast as the 50 μm/s observed in the polymer solution. Matching radii ignores the halving of velocity that the polymer produces.',
          'A 4.2-μm sphere in buffer would move at about 200 μm/s, four times the target. This applies the factor of $\\sqrt{2}$ in the wrong direction, enlarging the radius when the slower polymer velocity calls for a smaller buffer sphere.',
        ],
        skill: '4B reading sedimentation data (Skill 4)',
      },
      {
        question: 'While a sphere in the buffer moves at its constant sedimentation velocity, the drag force on the sphere is:',
        options: [
          'zero, because the sphere is no longer accelerating in the rotor',
          'equal in magnitude to the force of the field on the sphere alone',
          'equal in magnitude to the field force on the sphere minus the buoyant force',
          'equal in magnitude to the field force on the sphere plus the buoyant force',
        ],
        correctAnswer: 2,
        explanation:
          'At constant velocity the net force is zero (Newton’s first law). The field force points outward, while both the buoyant force and the drag force point inward, so drag = field force − buoyant force. Drag is not zero; it is the very force that stops the acceleration, and it is zero only for a particle at rest relative to the fluid. Setting drag equal to the field force alone ignores buoyancy, which is large here because polystyrene is only slightly denser than the buffer. Adding the buoyant force treats it as acting in the same direction as the field force, which it does not.',
        optionExplanations: [
          'Drag is not zero at constant velocity; it is exactly the force that stopped the acceleration. The drag force $6\\pi\\eta r v$ depends on speed, and the sphere is still moving relative to the fluid, so drag is substantial.',
          'Equating drag with the field force alone ignores buoyancy. Because polystyrene is only 0.05 g/cm³ denser than the buffer, the buoyant force is nearly as large as the field force, so omitting it overstates drag enormously.',
          'At constant velocity the net force is zero. The field force points outward while both the buoyant force and the drag force point inward, so the balance is drag = field force on the sphere − buoyant force.',
          'Adding the buoyant force treats it as acting in the same direction as the field force. Buoyancy acts opposite to the field (toward the axis in a centrifuge), so it reduces rather than augments the force that drag must balance.',
        ],
        skill: '4A Newton’s laws: terminal velocity (Skill 1)',
      },
      {
        question: 'A benchtop centrifuge holds its tubes 10 cm from the rotation axis and spins at 3000 revolutions per minute. The RCF at the tubes is closest to:',
        options: ['30', '1000', '10,000', '100,000'],
        correctAnswer: 1,
        explanation:
          'Here 3000 rev/min = 50 rev/s, so $\\omega = 2\\pi(50) \\approx 314$ rad/s and $\\omega^2 \\approx 1 \\times 10^5\\ \\text{s}^{-2}$. Then $\\omega^2 R \\approx (1 \\times 10^5)(0.10\\ \\text{m}) = 1 \\times 10^4\\ \\text{m/s}^2$, and dividing by $g \\approx 10\\ \\text{m/s}^2$ gives an RCF of about 1000. An RCF near 30 results from using 50 rev/s as $\\omega$ without the factor of $2\\pi$; about 10,000 results from forgetting to divide by $g$; about 100,000 results from using 3000 rev/min directly as $\\omega$.',
        optionExplanations: [
          'An RCF near 30 results from using 50 rev/s directly as $\\omega$ without converting to radians per second. Angular speed in rad/s requires multiplying revolutions per second by $2\\pi$, which squared adds a factor of about 40.',
          'Converting 3000 rev/min to 50 rev/s and multiplying by $2\\pi$ gives $\\omega \\approx 314$ rad/s, so $\\omega^2 \\approx 1 \\times 10^5\\ \\text{s}^{-2}$. Then $\\omega^2 R \\approx (1 \\times 10^5)(0.10) = 1 \\times 10^4\\ \\text{m/s}^2$, and dividing by $g \\approx 10$ gives RCF ≈ 1000.',
          'A value near 10,000 is the centripetal acceleration $\\omega^2 R$ in m/s² itself. RCF is defined as a multiple of $g$, so the acceleration must still be divided by about 10 m/s².',
          'A value near 100,000 results from plugging 3000 rev/min directly into the formula as $\\omega$ without converting to rev/s or to rad/s. The units must be rad/s for $\\omega^2 R$ to give an acceleration.',
        ],
        skill: '4A circular motion: centripetal acceleration (Skill 2)',
      },
      {
        question: 'According to the information in the passage, in the same centrifuge tube of plasma a red blood cell sediments about how many times faster than a platelet?',
        options: ['4', '5', '10', '20'],
        correctAnswer: 3,
        explanation:
          'Velocity is proportional to $r^2(\\rho_p - \\rho_f)$. The radius ratio of 3 μm to 1.5 μm gives a factor of $2^2 = 4$, and the density differences are 1.10 − 1.025 = 0.075 g/cm³ for red cells versus 1.04 − 1.025 = 0.015 g/cm³ for platelets, a factor of 5; together, 4 × 5 = 20. A factor of 4 considers only the radii and 5 considers only the densities. A factor of 10 treats velocity as proportional to the radius rather than to its square.',
        optionExplanations: [
          'A factor of 4 considers only the radii: $(3/1.5)^2 = 4$. It ignores that the red cell’s density excess over plasma (0.075 g/cm³) is five times the platelet’s (0.015 g/cm³), which multiplies the ratio further.',
          'A factor of 5 considers only the density differences, 0.075 versus 0.015 g/cm³, and ignores the radii. The red cell has twice the radius, which contributes an additional factor of $2^2 = 4$ because velocity scales as $r^2$.',
          'A factor of 10 treats velocity as proportional to the radius (factor 2) times the density-difference ratio (factor 5). Stokes sedimentation velocity depends on $r^2$, so the radius contributes a factor of 4, not 2.',
          'Velocity is proportional to $r^2(\\rho_p - \\rho_f)$. The radius ratio 3 μm : 1.5 μm gives $2^2 = 4$, and the density differences 1.10 − 1.025 = 0.075 versus 1.04 − 1.025 = 0.015 g/cm³ give 5. Together, 4 × 5 = 20.',
        ],
        skill: '4B Stokes’ law and differential centrifugation (Skill 2)',
      },
      {
        question: 'Which additional measurement is most needed to justify the investigators’ conclusion about the polymer?',
        options: [
          'The density of the polymer solution, since a denser medium would also slow the spheres',
          'The velocities at a higher RCF, since a stronger field would speed up spheres of all sizes',
          'The velocities of spheres larger than 6 μm, since larger spheres respond more to viscosity',
          'The mass of each sphere, since heavier spheres experience a larger force from the field',
        ],
        correctAnswer: 0,
        explanation:
          'Velocity depends on $(\\rho_p - \\rho_f)/\\eta$. Because the spheres are only 0.05 g/cm³ denser than buffer, a polymer that raised the medium’s density to 1.025 g/cm³ would halve the velocities even with no change in viscosity, so the density must be measured before the halving in Figure 1 is attributed to viscosity alone. A higher RCF would speed spheres in both media by the same factor and would not separate the two possibilities. Every size already shows the same twofold ratio, so larger spheres would add nothing. Sphere mass is fixed by the known radius and density and is identical in both media.',
        optionExplanations: [
          'Velocity depends on $(\\rho_p - \\rho_f)/\\eta$, and the spheres are only 0.05 g/cm³ denser than buffer. A polymer that raised the medium density to 1.025 g/cm³ would halve velocities without any viscosity change, so density must be measured before attributing the halving to viscosity alone.',
          'A higher RCF would increase velocities in both media by the same factor, since $a$ multiplies the whole expression. It would reproduce the same twofold ratio and could not distinguish a viscosity effect from a density effect.',
          'Every radius in Figure 1 already shows the same twofold ratio between media, so adding larger spheres would reveal nothing new. Viscosity and density effects both scale identically with radius through the $r^2$ term.',
          'Sphere mass is fixed by the known radius and polystyrene density and is identical in both media. Measuring it cannot address why the polymer medium halved the velocities, which hinges on properties of the medium, not the spheres.',
        ],
        skill: '4B confounding variables (Skill 3)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 8. BIOCHEMISTRY — Chemical and thermal unfolding; ΔG of folding
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-cp-b-08',
    section: 'chem-phys',
    discipline: 'biochemistry',
    title: 'Measuring the Stability of a Small Protein Domain',
    passageText:
      'Most small globular proteins unfold cooperatively. Under conditions that destabilize the folded, or native, state (N), the molecules convert directly to an unfolded state (U) without accumulating partly folded intermediates. For such a two-state protein, the equilibrium N ⇌ U has an equilibrium constant $K_U = [\\text{U}]/[\\text{N}]$, and the standard free energy of unfolding is $\\Delta G_U = -RT\\ln K_U$. A positive $\\Delta G_U$ therefore means that folded molecules predominate. For natural proteins, $\\Delta G_U$ in water is typically only 20 to 60 kJ/mol, a small difference between large, opposing enthalpic and entropic contributions, so a single amino acid substitution can change stability substantially.\n\nStability is commonly measured with urea, a denaturant that interacts favorably with the polypeptide backbone and with side chains that become exposed to solvent when a protein unfolds. Over the range of urea concentrations in which unfolding is observed, $\\Delta G_U$ decreases linearly with urea concentration:\n\n$\\Delta G_U = \\Delta G_U(\\text{H}_2\\text{O}) - m[\\text{urea}]$\n\nwhere $\\Delta G_U(\\text{H}_2\\text{O})$ is the stability in the absence of denaturant and the constant $m$ is proportional to the amount of surface newly exposed to solvent on unfolding. The urea concentration at which half of the molecules are unfolded is called the midpoint concentration, $C_m$. Stability can also be assessed by heating a protein in the absence of urea; the temperature at which half of the molecules are unfolded is the melting temperature, $T_m$.\n\nInvestigators studied a 70-residue domain from a bacterial protein and two variants, each differing from the wild type at a single position. In Variant A, a leucine whose side chain is completely buried in the hydrophobic core was replaced by alanine. In Variant B, a glycine at a solvent-exposed position in the middle of an α-helix was replaced by alanine. Crystal structures of both variants showed backbone conformations indistinguishable from that of the wild type.\n\nFor chemical denaturation, each protein (5 μM) was incubated overnight at 25 °C in buffer containing 0 to 8 M urea. Unfolding was monitored in two ways: by the fluorescence of the domain’s single tryptophan, which lies in the core and changes its emission when exposed to water, and by circular dichroism (CD) at 222 nm, which reports the amount of helical secondary structure. For each protein, the fraction unfolded calculated from fluorescence matched the fraction unfolded calculated from CD at every urea concentration. Samples that were first unfolded in 8 M urea and then diluted to lower urea concentrations gave the same signals as samples that had never been exposed to high urea. For thermal denaturation, each protein was heated in buffer without urea at 1 °C per minute while the CD signal was recorded. The results are summarized in Table 1. For calculations at 25 °C, the investigators used $RT\\ln 10 \\approx 5.7$ kJ/mol.',
    figure:
      '**Table 1.** Unfolding parameters for the wild-type domain and two variants\n\n| Protein | Substitution | Cm (M urea, 25 °C) | m (kJ·mol⁻¹·M⁻¹) | Tm (°C, no urea) |\n|---|---|---|---|---|\n| Wild type | none | 4.0 | 5.7 | 64 |\n| Variant A | Leu → Ala (buried) | 2.5 | 5.7 | 55 |\n| Variant B | Gly → Ala (helix surface) | 4.5 | 5.7 | 67 |',
    questions: [
      {
        question: 'Based on Table 1, the substitution in Variant B changes $\\Delta G_U(\\text{H}_2\\text{O})$ at 25 °C by approximately:',
        options: ['+0.5 kJ/mol', '+2.9 kJ/mol', '+5.7 kJ/mol', '+25.7 kJ/mol'],
        correctAnswer: 1,
        explanation:
          'At the midpoint, $K_U = 1$ and $\\Delta G_U = 0$, so $\\Delta G_U(\\text{H}_2\\text{O}) = m \\cdot C_m$: 5.7 × 4.0 ≈ 22.8 kJ/mol for the wild type and 5.7 × 4.5 ≈ 25.7 kJ/mol for Variant B, a stabilization of about 2.9 kJ/mol. The value +0.5 is the difference in $C_m$ in molar urea, not in energy. +5.7 kJ/mol is the $m$ value, the change per 1 M of urea, not the effect of the substitution. +25.7 kJ/mol is the total stability of Variant B rather than the change caused by the substitution.',
        optionExplanations: [
          'This value is the difference in $C_m$ in molar urea (4.5 − 4.0 = 0.5 M), not a free energy. Converting to energy requires multiplying by $m$, the change in $\\Delta G_U$ per molar urea, which is 5.7 kJ·mol⁻¹·M⁻¹.',
          'At the midpoint, $K_U = 1$ and $\\Delta G_U = 0$, so $\\Delta G_U(\\text{H}_2\\text{O}) = m \\cdot C_m$. For wild type this is 5.7 × 4.0 ≈ 22.8 kJ/mol; for Variant B, 5.7 × 4.5 ≈ 25.7 kJ/mol. The difference is about +2.9 kJ/mol of stabilization.',
          'This value is $m$, the change in $\\Delta G_U$ per 1 M of urea, which is identical for all three proteins. It describes how the stability responds to denaturant, not how much the substitution changed the stability in water.',
          'This value is the total stability of Variant B in water, $m \\cdot C_m = 5.7 \\times 4.5 \\approx 25.7$ kJ/mol. The question asks for the change relative to wild type, which requires subtracting the wild-type value of 22.8 kJ/mol.',
        ],
        skill: '5E ΔG of unfolding from denaturation data (Skill 4)',
      },
      {
        question: 'In 3.0 M urea at 25 °C, approximately what percentage of the wild-type molecules are unfolded?',
        options: ['91%', '50%', '9%', '1%'],
        correctAnswer: 2,
        explanation:
          'For the wild type, $\\Delta G_U = 22.8 - 5.7(3.0) = 5.7$ kJ/mol. Because $\\Delta G_U = -RT\\ln K_U$ and $RT\\ln 10 \\approx 5.7$ kJ/mol, $K_U = 10^{-1} = 0.1$, so U : N = 1 : 10 and the unfolded fraction is 1/11, about 9%. The value 91% inverts the ratio, giving the folded fraction. 50% applies only at the midpoint, 4.0 M urea. 1% would require $\\Delta G_U \\approx 11.4$ kJ/mol, the value at 2.0 M urea.',
        optionExplanations: [
          'This value inverts the ratio and gives the folded fraction. With $K_U = 0.1$, U : N is 1 : 10, so 10/11 ≈ 91% of molecules remain folded, while only 9% are unfolded at 3.0 M urea.',
          'Half of the molecules are unfolded only at the midpoint concentration $C_m$, which is 4.0 M urea for the wild type. At 3.0 M urea, $\\Delta G_U$ is still positive and the folded state predominates.',
          'For wild type, $\\Delta G_U = 22.8 - 5.7(3.0) = 5.7$ kJ/mol. Since $RT\\ln 10 \\approx 5.7$ kJ/mol, $K_U = 10^{-1} = 0.1$, so U : N = 1 : 10 and the unfolded fraction is 1/11, about 9%.',
          'An unfolded fraction of 1% would correspond to $K_U \\approx 0.01$ and $\\Delta G_U \\approx 11.4$ kJ/mol, which is the stability at 2.0 M urea, not 3.0 M. This underestimates how far the denaturant has already lowered $\\Delta G_U$.',
        ],
        skill: '5E free energy and equilibrium constant (Skill 2)',
      },
      {
        question: 'The lower stability of Variant A is best explained by the loss of:',
        options: [
          'van der Waals contacts between nonpolar side chains packed in the core',
          'a hydrogen bond that the leucine side chain donated to a backbone carbonyl',
          'an ionic interaction between the leucine side chain and a nearby lysine',
          'a covalent cross-link that the leucine side chain formed with a cysteine',
        ],
        correctAnswer: 0,
        explanation:
          'Replacing leucine’s isobutyl side chain with alanine’s methyl group removes three carbons from the tightly packed core, leaving a cavity; the lost van der Waals contacts and the smaller buried nonpolar surface (a weaker hydrophobic effect) destabilize the folded state. Leucine’s side chain is a hydrocarbon, so it has no hydrogen-bond donor, carries no charge for an ionic interaction, and cannot form a covalent cross-link; disulfide cross-links form between two cysteines.',
        optionExplanations: [
          'Replacing leucine’s isobutyl side chain with alanine’s methyl removes three carbons from the tightly packed core, leaving a cavity. The lost van der Waals contacts and the reduced buried nonpolar surface (weaker hydrophobic effect) destabilize the native state.',
          'Leucine’s side chain is a pure hydrocarbon with no N–H or O–H group, so it has no hydrogen-bond donor. It cannot donate a hydrogen bond to a backbone carbonyl, and losing one is not the explanation.',
          'Leucine’s side chain carries no charge, so it cannot form an ionic interaction with lysine or any other charged residue. Ionic interactions involve acidic or basic side chains, which leucine lacks.',
          'Leucine cannot form a covalent cross-link; the only common side-chain cross-link in proteins is the disulfide bond between two cysteines. Moreover, the crystal structures showed the variant backbone unchanged, consistent with a packing defect rather than a lost covalent bond.',
        ],
        skill: '5B hydrophobic effect and protein stability (Skill 1)',
      },
      {
        question: 'For the wild-type protein at 64 °C in the absence of urea, which statement about the unfolding reaction is correct?',
        options: [
          '$\\Delta G_U > 0$, so essentially all of the molecules are in the folded state',
          '$\\Delta G_U = 0$, so $\\Delta H_U$ and $\\Delta S_U$ must each equal zero as well',
          '$\\Delta G_U < 0$, so essentially all of the molecules are in the unfolded state',
          '$\\Delta G_U = 0$, so $\\Delta H_U$ equals the product of $T$ and $\\Delta S_U$',
        ],
        correctAnswer: 3,
        explanation:
          'At $T_m$, half of the molecules are unfolded, so $K_U = 1$ and $\\Delta G_U = -RT\\ln 1 = 0$; from $\\Delta G = \\Delta H - T\\Delta S$, it follows that $\\Delta H_U = T_m\\Delta S_U$. $\\Delta H_U$ and $\\Delta S_U$ are both large and positive for unfolding; they cancel at $T_m$ but are not zero. A positive or negative $\\Delta G_U$ would describe temperatures below or above $T_m$, and even then both states would be present in proportions set by $K_U$.',
        optionExplanations: [
          'A positive $\\Delta G_U$ describes temperatures below $T_m$, where folded molecules predominate. At $T_m$ itself, by definition half the molecules are unfolded, which requires $\\Delta G_U = 0$. Even below $T_m$, some unfolded molecules exist in proportion to $K_U$.',
          '$\\Delta G_U$ is zero at $T_m$, but $\\Delta H_U$ and $\\Delta S_U$ are both large and positive for unfolding. They cancel at $T_m$ because $\\Delta H_U = T\\Delta S_U$; neither term is itself zero.',
          'A negative $\\Delta G_U$ describes temperatures above $T_m$, where unfolded molecules predominate. At 64 °C, the wild-type $T_m$, the two states are equally populated, so $\\Delta G_U = 0$ and neither state dominates.',
          'At $T_m$, half of the molecules are unfolded, so $K_U = 1$ and $\\Delta G_U = -RT\\ln 1 = 0$. From $\\Delta G = \\Delta H - T\\Delta S$, setting $\\Delta G_U = 0$ gives $\\Delta H_U = T_m\\Delta S_U$.',
        ],
        skill: '5E ΔG = ΔH − TΔS at a transition midpoint (Skill 1)',
      },
      {
        question: 'Comparing the fraction unfolded obtained from fluorescence with that obtained from CD primarily tested whether:',
        options: [
          'unfolding was reversible, so that the curves described an equilibrium',
          'core packing and helical structure were lost together in one concerted step',
          'urea itself altered the fluorescence or CD signal of the native protein',
          'the substitutions had changed the backbone conformation of the domain',
        ],
        correctAnswer: 1,
        explanation:
          'Tryptophan fluorescence reports burial in the core (tertiary structure), and CD at 222 nm reports helical secondary structure. If an intermediate that kept its helices but lost core packing accumulated, the two probes would give different curves; coincident curves support the two-state model on which the calculation of $\\Delta G_U$ depends. Reversibility was tested separately, by diluting samples unfolded in 8 M urea. Comparing two probes of the same samples cannot reveal a baseline effect of urea common to both. Backbone conformation was established by the crystal structures, not by the denaturation curves.',
        optionExplanations: [
          'Reversibility was tested by a separate experiment: samples unfolded in 8 M urea and then diluted gave the same signals as never-denatured samples. Comparing two probes on the same samples addresses a different question about intermediates.',
          'Tryptophan fluorescence reports burial of the core (tertiary structure), while CD at 222 nm reports helical secondary structure. If an intermediate retained helices but lost core packing, the two curves would diverge; coincident curves support the two-state model underlying the $\\Delta G_U$ calculation.',
          'Comparing two different probes of the same samples cannot isolate a baseline effect of urea common to both signals. Such an artifact would require separate controls, not a comparison of fluorescence against CD.',
          'Backbone conformation of the variants was established by crystal structures, which showed them indistinguishable from wild type. The denaturation curves measure unfolding equilibria, not the structure of the native state.',
        ],
        skill: '5D two-state unfolding: experimental design (Skill 3)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 9. GENERAL CHEMISTRY — van 't Hoff analysis of salt solubility
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-cp-b-09',
    section: 'chem-phys',
    discipline: 'general chemistry',
    title: 'Temperature and the Solubility of Two Salt Forms of a Drug',
    passageText:
      'Many drugs are weak bases that are marketed as salts, in which the protonated drug cation is paired with an anion chosen by the manufacturer. Because the counterion changes the crystal lattice, different salts of the same drug can have very different solubilities, and their solubilities can respond differently to temperature. This behavior matters for products that are stored cold but given at body temperature, or that are prepared warm and then cooled.\n\nFor a 1:1 salt of a drug cation $\\text{DH}^+$ with an anion $\\text{X}^-$, the solid is in equilibrium with its saturated solution according to DHX(s) ⇌ $\\text{DH}^+$(aq) + $\\text{X}^-$(aq), for which $K_{sp} = [\\text{DH}^+][\\text{X}^-]$. The dependence of any equilibrium constant on temperature is described by the van ’t Hoff equation. If the standard enthalpy and entropy changes, $\\Delta H^\\circ$ and $\\Delta S^\\circ$, are approximately constant over the temperature range studied, then\n\n$\\log K = -\\dfrac{\\Delta H^\\circ}{2.303R}\\cdot\\dfrac{1}{T} + \\dfrac{\\Delta S^\\circ}{2.303R}$\n\nso a graph of $\\log K$ against $1/T$ is a straight line whose slope is $-\\Delta H^\\circ/(2.303R)$. For calculations, $2.303R \\approx 19$ J/(mol·K).\n\nDissolving an ionic solid can be pictured as two steps: separating the ions of the crystal lattice, which requires energy, and surrounding the separated ions with water, which releases energy. The sign of $\\Delta H^\\circ$ for dissolution depends on which of these steps is larger in magnitude, and $\\Delta S^\\circ$ reflects both the dispersal of ions that were fixed in the crystal and the ordering of the water molecules held in the hydration shells around them.\n\nA formulation group compared two crystalline salts of an investigational drug cation: Salt P, in which the anion is a small organic sulfonate, and Salt Q, in which the anion is a small inorganic ion. For each salt, an excess of the solid was added to pure water in sealed vials, which were shaken in water baths at six temperatures between about 17 °C and 39 °C for 48 hours. Undissolved solid remained in every vial at the end of this period. Each solution was then filtered at its bath temperature, and the dissolved drug was measured by liquid chromatography. Because neither ion was present from any other source, the molar solubility $s$ gave $K_{sp} = s^2$. The results are plotted in Figure 1.\n\nA second series of vials was prepared differently. Each salt was first dissolved to a higher concentration under conditions in which it is more soluble, and these solutions were then brought to the six test temperatures and shaken for 48 hours, during which solid crystallized from them. The values of $K_{sp}$ obtained from the two series agreed within 3% at every temperature.\n\nThe group intends to use the data to choose a salt for a concentrated injectable solution that will be prepared at room temperature, stored in a refrigerator, and warmed before use, and it plans to check its choice by holding filled vials at 4 °C for several weeks and inspecting them for crystals.',
    chart: {
      title: 'Figure 1. log Ksp of Salts P and Q versus reciprocal absolute temperature (about 17–39 °C)',
      kind: 'line',
      xLabel: '1/T',
      xUnit: '10⁻⁴ K⁻¹',
      yLabel: 'log Ksp',
      xValues: [32.0, 32.5, 33.0, 33.5, 34.0, 34.5],
      yValues: [-4.0, -4.1, -4.2, -4.3, -4.4, -4.5],
      seriesLabel: 'Salt P',
      comparisonSeries: [{ label: 'Salt Q', yValues: [-5.0, -4.95, -4.9, -4.85, -4.8, -4.75] }],
    },
    questions: [
      {
        question: 'According to Figure 1, as the temperature is raised from about 17 °C to 39 °C:',
        options: [
          'the $K_{sp}$ values of both salts increase',
          'the $K_{sp}$ values of both salts decrease',
          'the $K_{sp}$ of Salt P decreases and that of Salt Q increases',
          'the $K_{sp}$ of Salt P increases and that of Salt Q decreases',
        ],
        correctAnswer: 3,
        explanation:
          'Raising the temperature lowers $1/T$, so it corresponds to moving from right to left in Figure 1. In that direction, log $K_{sp}$ for Salt P rises from −4.5 to −4.0, while log $K_{sp}$ for Salt Q falls from −4.75 to −5.0. The option in which P decreases and Q increases reads the horizontal axis as if it were temperature itself. The two lines have slopes of opposite sign, so the two constants cannot change in the same direction.',
        optionExplanations: [
          'Raising temperature lowers $1/T$, which corresponds to moving leftward in Figure 1. In that direction Salt Q’s log $K_{sp}$ falls from −4.75 to −5.0, so Salt Q’s $K_{sp}$ decreases; the two salts do not change in the same direction.',
          'The two lines have slopes of opposite sign, so the two $K_{sp}$ values cannot both decrease. Moving leftward (higher T), Salt P’s log $K_{sp}$ rises from −4.5 to −4.0, meaning its $K_{sp}$ increases with temperature.',
          'This reads the horizontal axis as if it were temperature itself. Because the axis is $1/T$, higher temperature is to the left, where Salt P’s log $K_{sp}$ is higher (−4.0) and Salt Q’s is lower (−5.0). The actual directions are the reverse of this.',
          'Higher temperature means smaller $1/T$, so it corresponds to moving from right to left in Figure 1. Along that direction, log $K_{sp}$ for Salt P rises from −4.5 to −4.0 (increasing $K_{sp}$), while log $K_{sp}$ for Salt Q falls from −4.75 to −5.0 (decreasing $K_{sp}$).',
        ],
        skill: '5E reading a van ’t Hoff plot (Skill 4)',
      },
      {
        question: 'Based on Figure 1, the standard enthalpy of dissolution of Salt P is closest to:',
        options: ['−38 kJ/mol', '+17 kJ/mol', '+38 kJ/mol', '+88 kJ/mol'],
        correctAnswer: 2,
        explanation:
          'The slope for Salt P is $\\Delta(\\log K)/\\Delta(1/T) = (-4.0 - (-4.5))/[(32.0 - 34.5) \\times 10^{-4}\\ \\text{K}^{-1}] = 0.5/(-2.5 \\times 10^{-4}) = -2000$ K. Then $\\Delta H^\\circ = -2.303R \\times \\text{slope} = -(19)(-2000) \\approx +38{,}000$ J/mol, or +38 kJ/mol; the positive sign fits a solubility that rises with temperature. −38 kJ/mol drops the negative sign in the slope relation. +17 kJ/mol uses $R$ in place of $2.303R$, and +88 kJ/mol multiplies by 2.303 a second time.',
        optionExplanations: [
          'This value drops the negative sign in the slope relation. The slope is $-\\Delta H^\\circ/(2.303R)$, and Salt P’s slope is negative (−2000 K), so $\\Delta H^\\circ$ must be positive, consistent with a solubility that increases with temperature.',
          'This value uses $R$ (8.3 J/(mol·K)) instead of $2.303R$ (19 J/(mol·K)) when converting the slope. The passage gives the equation in terms of $\\log K$ (base 10), which carries the factor of 2.303.',
          'The slope for Salt P is $(-4.0 - (-4.5))/[(32.0 - 34.5) \\times 10^{-4}] = 0.5/(-2.5 \\times 10^{-4}) = -2000$ K. Then $\\Delta H^\\circ = -2.303R \\times \\text{slope} = -(19)(-2000) \\approx +38$ kJ/mol, positive as expected for a salt whose solubility rises with temperature.',
          'This value multiplies by 2.303 a second time. The passage already states that $2.303R \\approx 19$ J/(mol·K), so applying another factor of 2.303 to the 38 kJ/mol result overcounts the logarithm conversion.',
        ],
        skill: '5E ΔH from the van ’t Hoff slope (Skill 2)',
      },
      {
        question: 'At 25 °C, $\\Delta G^\\circ$ for dissolving Salt P is positive, yet solid Salt P added to pure water dissolves spontaneously until the solution is saturated. This occurs because:',
        options: [
          '$\\Delta G$ is negative as long as the ion product remains smaller than $K_{sp}$',
          '$\\Delta H^\\circ$ is positive, and heat absorbed makes dissolving favorable',
          'energy is released as the ions leave the lattice, which favors dissolving',
          '$K_{sp}$ grows as more solid dissolves, so the reaction keeps going forward',
        ],
        correctAnswer: 0,
        explanation:
          'Spontaneity under actual conditions depends on $\\Delta G = \\Delta G^\\circ + RT\\ln Q$. In pure water the ion product $Q$ starts at zero, so $RT\\ln Q$ is large and negative and $\\Delta G < 0$ until $Q$ reaches $K_{sp}$, where $\\Delta G = 0$. An endothermic $\\Delta H^\\circ$ opposes the process rather than driving it. Separating ions from a crystal lattice requires energy (the lattice energy) rather than releasing it; energy is released only as the ions are hydrated. $K_{sp}$ is a constant at a given temperature and does not change as the salt dissolves.',
        optionExplanations: [
          'Spontaneity under actual conditions depends on $\\Delta G = \\Delta G^\\circ + RT\\ln Q$. In pure water the ion product $Q$ begins at zero, so $RT\\ln Q$ is large and negative, making $\\Delta G < 0$ until $Q$ reaches $K_{sp}$, where $\\Delta G = 0$ and dissolution stops.',
          'A positive $\\Delta H^\\circ$ means dissolution is endothermic, which opposes rather than drives the process. Heat absorbed is a cost, not a driving force; dissolution proceeds despite the positive enthalpy because of the entropy and concentration terms.',
          'Separating ions from a crystal lattice requires energy (the lattice energy); it does not release it. Energy is released only in the second step, hydration of the separated ions. This reverses the sign of the lattice step.',
          '$K_{sp}$ is an equilibrium constant that depends only on temperature and does not change as more solid dissolves. What changes is the ion product $Q$, which rises toward $K_{sp}$ until equilibrium is reached.',
        ],
        skill: '5E ΔG versus ΔG° and the reaction quotient (Skill 1)',
      },
      {
        question: 'The main purpose of the second series of vials was to show that:',
        options: [
          'each salt had the same solubility as the other at every temperature tested',
          'the drug did not adsorb to the filters used to separate solid from solution',
          'the value of $\\Delta H^\\circ$ could be obtained without plotting the results',
          'shaking for 48 hours was long enough for each vial to reach equilibrium',
        ],
        correctAnswer: 3,
        explanation:
          'In the first series, the solutions approached saturation from below; in the second, they approached it from above as excess solute crystallized out. If either approach had been too slow, the first series would have given values that were too low and the second values that were too high, so agreement from both directions shows that true equilibrium was reached. Figure 1 shows that the two salts have quite different $K_{sp}$ values. Both series were filtered in the same way, so they could not reveal loss of drug to the filters. $\\Delta H^\\circ$ still requires $K_{sp}$ at more than one temperature.',
        optionExplanations: [
          'Figure 1 shows the two salts have quite different $K_{sp}$ values, with Salt P roughly an order of magnitude more soluble than Salt Q. The second series duplicated the first series within 3% for each salt; it did not compare salts to each other.',
          'Both series were filtered in exactly the same way at the bath temperature, so any adsorption of drug to the filters would affect both equally. Agreement between the series therefore cannot reveal or rule out filter losses.',
          '$\\Delta H^\\circ$ still requires $K_{sp}$ at more than one temperature, since it comes from the slope of log $K$ versus $1/T$. The second series provided no shortcut around plotting; it reproduced the same six temperatures.',
          'The first series approached saturation from below (dissolving excess solid), the second from above (crystallizing from a supersaturated solution). If 48 hours were too short, the first would read too low and the second too high; agreement from both directions shows true equilibrium was reached.',
        ],
        skill: '5E establishing equilibrium: research design (Skill 3)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 10. ORGANIC CHEMISTRY — Phosphorus and sulfur functional groups (information)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-cp-b-10',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    title: 'Phosphorus and Sulfur in Biological Functional Groups',
    passageText:
      'Phosphorus and sulfur, two elements of the third period, form functional groups that are central to the chemistry of living cells. Although they sit next to each other in the periodic table, their typical roles differ: in biomolecules phosphorus appears almost entirely as phosphate, whereas sulfur appears mostly in reduced forms such as thiols, sulfides, disulfides, and thioesters.\n\nPhosphoric acid, $\\text{H}_3\\text{PO}_4$, has three ionizable protons, with $\\text{p}K_a$ values of about 2.1, 7.2, and 12.3. Replacing the hydrogen of one OH group with a carbon group gives a phosphate monoester, such as glucose 6-phosphate or a phosphorylated serine side chain; a monoester retains two acidic OH groups, with $\\text{p}K_a$ values near 1 and 6.4. Replacing a second hydrogen gives a phosphodiester, the linkage that joins nucleotides in DNA and RNA, which retains a single acidic OH group with a $\\text{p}K_a$ near 1.5. When two phosphoryl groups are joined through a shared oxygen atom, the result is a phosphoanhydride, the P–O–P linkage found in pyrophosphate and between the phosphate groups of ATP.\n\nHydrolysis of phosphate esters and anhydrides releases free energy, yet in the absence of enzymes these groups react remarkably slowly in neutral water; the phosphodiester bonds of DNA, for example, would survive far longer than a human lifetime at 25 °C without catalysis. Much of this kinetic stability is attributed to the negative charge that the ionized oxygen atoms place around phosphorus, which both repels anionic nucleophiles such as hydroxide and lessens the partial positive charge on the phosphorus atom. Enzymes that transfer or hydrolyze phosphoryl groups commonly bind one or two $\\text{Mg}^{2+}$ ions next to the phosphate.\n\nSulfur lies directly below oxygen in group 16. Its valence electrons occupy the third shell, so a sulfur atom is larger than an oxygen atom, is less electronegative (about 2.6 versus 3.4 on the Pauling scale), and holds its electrons more loosely, which makes it more polarizable. A thiol, R–SH, is the sulfur analog of an alcohol. Thiols are considerably more acidic than alcohols, with $\\text{p}K_a$ values roughly 8 to 11 compared with about 16, and their conjugate bases, thiolate anions, are excellent nucleophiles. Mild oxidation joins two thiols into a disulfide, R–S–S–R.\n\nA thioester, R–CO–SR′, is the sulfur analog of an ester and is the form in which cells activate acyl groups; the best-known example is acetyl coenzyme A, in which an acetyl group is attached to the thiol of coenzyme A. In an ordinary oxygen ester, a lone pair on the ester oxygen is delocalized into the carbonyl π system; this resonance stabilizes the ester and lessens the partial positive charge on the carbonyl carbon. In a thioester, the corresponding delocalization requires overlap between a 3p orbital on sulfur and a 2p orbital on carbon, which differ in size and energy, so the resonance stabilization is much weaker. The carbonyl carbon of a thioester is therefore more electrophilic, and because thiolates are weaker bases than alkoxides, a thiolate is also the better leaving group. Thioesters thus transfer their acyl groups to nucleophiles far more readily than oxygen esters do, while remaining stable enough in water to accumulate in cells.',
    questions: [
      {
        question: 'Ethanethiol ($\\text{p}K_a \\approx 10.6$) is a much stronger acid than ethanol ($\\text{p}K_a \\approx 16$). The main reason is that, compared with an oxygen atom, a sulfur atom:',
        options: [
          'is more electronegative, so it pulls more electron density away from the hydrogen',
          'forms stronger hydrogen bonds with water, which stabilize the neutral thiol form',
          'is larger, so the negative charge of the conjugate base spreads over more volume',
          'is less polarizable, so its conjugate base holds the negative charge more tightly',
        ],
        correctAnswer: 2,
        explanation:
          'Going down a group, acidity of H–A increases because the larger atom spreads the negative charge of A⁻ over a greater volume and forms a longer, weaker bond to hydrogen; for oxygen and sulfur, this size effect outweighs electronegativity. As the passage notes, sulfur is less electronegative than oxygen (2.6 versus 3.4), so electronegativity cannot explain the difference. Thiols form weaker hydrogen bonds than alcohols, and stabilizing the neutral acid would make it weaker, not stronger. Sulfur is more polarizable than oxygen, not less.',
        optionExplanations: [
          'Sulfur is less electronegative than oxygen (about 2.6 versus 3.4), as the passage states, so it pulls less electron density toward itself. Electronegativity would predict alcohols to be the stronger acids, the opposite of what is observed.',
          'Thiols form weaker hydrogen bonds than alcohols because sulfur is less electronegative and larger. Moreover, stabilizing the neutral acid form would make the acid weaker, not stronger, so this reasoning runs backward.',
          'Going down a group, acidity of H–A increases because the larger atom spreads the negative charge of the conjugate base over a greater volume and forms a longer, weaker bond to hydrogen. For oxygen versus sulfur, this size effect outweighs the electronegativity difference.',
          'Sulfur is more polarizable than oxygen, not less, because its valence electrons occupy the third shell and are held more loosely. Greater polarizability helps disperse the thiolate’s negative charge, which stabilizes it and increases thiol acidity.',
        ],
        skill: '5D acidity of thiols vs alcohols (Skill 1)',
      },
      {
        question: 'Citrate synthase uses a basic side chain to remove a proton from the methyl group of acetyl-CoA, forming an enolate that then attacks a carbonyl carbon. Compared with the corresponding hydrogens of an oxygen ester such as ethyl acetate, the methyl hydrogens of acetyl-CoA are more acidic mainly because:',
        options: [
          'sulfur is more electronegative than oxygen, so it withdraws electrons from the methyl group',
          'a C–S bond is shorter than a C–O bond, so sulfur’s lone pairs overlap well with the carbonyl',
          'the sulfur atom carries a formal negative charge, which it transfers to the methyl carbon',
          'sulfur donates little electron density to the carbonyl, so the enolate charge is delocalized better',
        ],
        correctAnswer: 3,
        explanation:
          'Because a sulfur 3p orbital overlaps poorly with the carbonyl π system, the thioester carbonyl receives little lone-pair donation and behaves more like a ketone carbonyl; it can therefore accept and delocalize the negative charge of the enolate onto oxygen more effectively than an ester carbonyl, whose oxygen lone pair already competes for the π system. Sulfur is less electronegative than oxygen, not more. A C–S bond is longer than a C–O bond, and the poor overlap is exactly why resonance is weak. The sulfur in a thioester is neutral and bears no formal charge.',
        optionExplanations: [
          'Sulfur is less electronegative than oxygen (2.6 versus 3.4), so it does not withdraw electrons more strongly. The enhanced acidity of thioester α-hydrogens arises from weak resonance donation into the carbonyl, not from inductive withdrawal.',
          'A C–S bond is longer than a C–O bond, not shorter, because sulfur is a larger third-period atom. The 3p–2p mismatch causes poor overlap, which is precisely why resonance stabilization in thioesters is weak.',
          'The sulfur in a thioester is neutral and carries no formal charge. It is bonded to the acyl carbon and the R′ group with two lone pairs, like the oxygen in an ordinary ester, and does not transfer charge to the methyl carbon.',
          'Because the sulfur 3p orbital overlaps poorly with the carbonyl π system, the thioester carbonyl receives little lone-pair donation and behaves more like a ketone. It can therefore accept and delocalize the enolate’s negative charge onto oxygen more effectively than an ester carbonyl, whose oxygen lone pair competes for the π system.',
        ],
        skill: '5D thioester reactivity and α-hydrogen acidity (Skill 2)',
      },
      {
        question: 'In a phosphotriester, all three OH groups of phosphoric acid have been converted to esters. Compared with an otherwise similar phosphodiester in water at pH 7, a phosphotriester is expected to undergo hydrolysis by hydroxide:',
        options: [
          'faster, because the triester carries no negative charge to repel hydroxide',
          'faster, because the triester carries more negative charge to attract hydroxide',
          'more slowly, because the triester has no acidic proton for hydroxide to remove',
          'more slowly, because the triester’s third alkyl group blocks access to phosphorus',
        ],
        correctAnswer: 0,
        explanation:
          'A phosphodiester keeps one acidic OH ($\\text{p}K_a$ near 1.5), so at pH 7 it is an anion whose charge repels hydroxide and reduces the electrophilicity of phosphorus. A triester has no ionizable OH, so it is neutral and is attacked by hydroxide much more readily. Negative charge repels rather than attracts an anionic nucleophile, and the triester has less charge, not more. Hydrolysis requires nucleophilic attack at phosphorus, not removal of a proton. An additional small alkyl group adds some steric bulk, but losing the negative charge has the much larger effect.',
        optionExplanations: [
          'A phosphodiester retains one acidic OH ($\\text{p}K_a$ near 1.5), so at pH 7 it is an anion whose negative charge repels hydroxide and lowers phosphorus’s electrophilicity. A triester has no ionizable OH, is neutral, and is attacked by hydroxide far more readily.',
          'Negative charge repels an anionic nucleophile like hydroxide rather than attracting it, and the triester carries less charge than the diester, not more. Both the direction of the effect and the charge comparison are reversed here.',
          'Hydrolysis proceeds by nucleophilic attack of hydroxide at phosphorus, not by removal of a proton. The absence of an acidic proton is what keeps the triester neutral and makes it more, not less, reactive toward hydroxide.',
          'A third small alkyl group adds some steric bulk around phosphorus, but the passage attributes kinetic stability primarily to negative charge repelling anionic nucleophiles. Losing that charge has a much larger effect than modest steric hindrance, so the triester reacts faster, not slower.',
        ],
        skill: '5D phosphate ester reactivity (Skill 2)',
      },
      {
        question: 'At pH 7.4, the average charge on the phosphate group of glucose 6-phosphate is closest to:',
        options: ['−3.0', '−1.9', '−1.5', '−1.0'],
        correctAnswer: 1,
        explanation:
          'The monoester has two acidic OH groups. With a $\\text{p}K_a$ near 1, the first is fully ionized at pH 7.4 (charge −1). For the second, pH − p$K_a$ = 7.4 − 6.4 = 1, so the ratio of ionized to un-ionized forms is 10 : 1 and about 91% of molecules carry the second negative charge, for an average near −1.9. A charge of −3.0 assumes three ionizable protons, which only free phosphate has. −1.5 would apply only if pH equaled the second p$K_a$, and −1.0 ignores the second ionization.',
        optionExplanations: [
          'A charge of −3.0 assumes three ionizable protons, which only free phosphoric acid has. A monoester has used one OH for the ester linkage and retains just two acidic OH groups, so its maximum charge is −2.',
          'The first OH ($\\text{p}K_a$ near 1) is fully ionized at pH 7.4, giving −1. For the second, pH − p$K_a$ = 7.4 − 6.4 = 1, so ionized : un-ionized is 10 : 1 and about 91% carry the second charge, for an average near −1.9.',
          'A charge of −1.5 would apply only if the pH equaled the second $\\text{p}K_a$ of 6.4, where the second ionization is exactly half complete. At pH 7.4, one unit above that $\\text{p}K_a$, about 91% rather than 50% of the molecules are doubly charged.',
          'A charge of −1.0 counts only the first ionization and ignores the second OH group with $\\text{p}K_a$ 6.4. At pH 7.4, one unit above that value, the second group is about 91% ionized and contributes nearly a full additional negative charge.',
        ],
        skill: '5A Henderson–Hasselbalch and phosphate charge (Skill 2)',
      },
    ],
  },
]

export const FL4_CHEM_PHYS_B_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl4-cp-b-d01',
    section: 'chem-phys',
    discipline: 'physics',
    question: 'A 440-Hz tuning fork and a piano string sounded together produce 3 beats per second. After the tension in the string is increased slightly, the two produce 5 beats per second. What was the original frequency of the string?',
    options: ['435 Hz', '437 Hz', '443 Hz', '445 Hz'],
    correctAnswer: 2,
    explanation:
      'The beat frequency equals the difference between the two frequencies, so the string was at either 437 Hz or 443 Hz. Raising the tension raises the wave speed on the string and therefore its frequency; because the beat frequency then increased, the string must have moved farther from 440 Hz, so it started above 440 Hz, at 443 Hz (and ended near 445 Hz). A string at 437 Hz would have moved toward 440 Hz and produced fewer beats. 435 Hz and 445 Hz differ from 440 Hz by the final beat frequency, not the original one.',
    optionExplanations: [
      'A string at 435 Hz differs from 440 Hz by 5 Hz, the final beat frequency, not the original 3 Hz. It would also be below the fork, and raising its tension would move it toward 440 Hz, reducing beats rather than increasing them.',
      'A 437-Hz string would indeed produce 3 beats per second initially, but increasing its tension raises its frequency toward 440 Hz, which would reduce the beat frequency. The observed increase to 5 beats per second rules out starting below the fork.',
      'The beat frequency equals the frequency difference, so the string was at 437 Hz or 443 Hz. Raising tension raises the string’s frequency; because beats then increased, the string moved farther from 440 Hz, so it started above the fork at 443 Hz and ended near 445 Hz.',
      'A string at 445 Hz differs from 440 Hz by 5 Hz, which is the beat frequency after the tension was increased, not before. The original string was 3 Hz away from the fork, at 443 Hz, and reached about 445 Hz after tightening.',
    ],
    skill: '4D beats (Skill 2)',
  },
  {
    id: 'fl4-cp-b-d02',
    section: 'chem-phys',
    discipline: 'physics',
    question: 'Point charges +q and −q are fixed at two corners of an equilateral triangle. At the third corner, the electric potential (taken as zero far from the charges) is:',
    options: [
      'zero, and the electric field points parallel to the line from +q toward −q',
      'zero, and the electric field is also zero because the two contributions cancel',
      'nonzero, and the electric field points perpendicular to the line joining the charges',
      'nonzero, and the electric field points parallel to the line from −q toward +q',
    ],
    correctAnswer: 0,
    explanation:
      'Potential is a scalar: the third corner is equally distant from both charges, so $kq/r + k(-q)/r = 0$. The field is a vector: the field of +q points away from +q, and the field of −q points toward −q; their components perpendicular to the base cancel, and their components along the base add, giving a nonzero field directed from the +q side toward the −q side. Zero potential does not imply zero field. A perpendicular field would arise from two like charges, and a nonzero potential would require unequal distances or unequal magnitudes.',
    optionExplanations: [
      'Potential is a scalar: the third corner is equidistant from +q and −q, so $kq/r + k(-q)/r = 0$. The field is a vector: the field from +q points away from it and the field from −q points toward it; their perpendicular components cancel and their components along the base add, giving a field parallel to the line from +q toward −q.',
      'Zero potential does not imply zero field. The two field vectors have equal magnitude but do not point in opposite directions; their components along the line joining the charges add, so the net field is nonzero even though the scalar potentials cancel.',
      'A field perpendicular to the base would arise from two like charges, whose along-base components cancel. For opposite charges, the perpendicular components cancel and the along-base components add. Moreover, the potential is zero, not nonzero, because the distances and magnitudes are equal.',
      'The potential is zero, not nonzero, because the third corner is equidistant from charges of equal magnitude and opposite sign. The field direction is also reversed here: it points from the +q side toward the −q side, not the other way.',
    ],
    skill: '4C electric potential vs field of point charges (Skill 1)',
  },
  {
    id: 'fl4-cp-b-d03',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'Based on the electronegativities of the atoms involved, which of the following bonds is the most polar?',
    options: ['C–Cl', 'N–H', 'C–O', 'O–H'],
    correctAnswer: 3,
    explanation:
      'Bond polarity increases with the difference in electronegativity between the bonded atoms. Using Pauling values (H 2.1, C 2.5, N 3.0, Cl 3.0, O 3.5), the differences are 1.4 for O–H, 1.0 for C–O, 0.9 for N–H, and 0.5 for C–Cl. Although chlorine is highly electronegative, carbon is fairly electronegative too, so C–Cl has the smallest difference of the four. N–H and C–O are polar but have smaller differences than O–H.',
    optionExplanations: [
      'Although chlorine is highly electronegative (3.0), carbon is fairly electronegative too (2.5), so the C–Cl difference is only 0.5, the smallest of the four. High electronegativity of one atom alone does not make a bond polar; the difference matters.',
      'The N–H electronegativity difference is 3.0 − 2.1 = 0.9, which makes the bond polar but less so than O–H. Oxygen is more electronegative than nitrogen, so the O–H difference of 1.4 exceeds this value.',
      'The C–O difference is 3.5 − 2.5 = 1.0, which is polar but smaller than the 1.4 difference for O–H. Carbon is more electronegative than hydrogen, which narrows the gap relative to the O–H bond.',
      'Bond polarity increases with the electronegativity difference between the bonded atoms. Using Pauling values (H 2.1, C 2.5, N 3.0, Cl 3.0, O 3.5), the differences are 1.4 for O–H, 1.0 for C–O, 0.9 for N–H, and 0.5 for C–Cl, so O–H is most polar.',
    ],
    skill: '4E electronegativity and bond polarity (Skill 1)',
  },
  {
    id: 'fl4-cp-b-d04',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'For a reaction, $\\Delta H^\\circ = +40$ kJ/mol and $\\Delta S^\\circ = +125$ J/(mol·K). If these values do not change with temperature, the reaction is spontaneous under standard conditions:',
    options: ['at all temperatures', 'only above 320 K', 'only below 320 K', 'at no temperature'],
    correctAnswer: 1,
    explanation:
      'Spontaneity requires $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ < 0$, so $T > \\Delta H^\\circ/\\Delta S^\\circ = 40{,}000/125 = 320$ K. Because both terms are positive, the unfavorable enthalpy dominates at low temperature and the favorable entropy term dominates at high temperature. Spontaneity at all temperatures would require $\\Delta H^\\circ < 0$ and $\\Delta S^\\circ > 0$; spontaneity only below a threshold describes negative $\\Delta H^\\circ$ and negative $\\Delta S^\\circ$; no spontaneous temperature describes positive $\\Delta H^\\circ$ with negative $\\Delta S^\\circ$.',
    optionExplanations: [
      'Spontaneity at all temperatures requires $\\Delta H^\\circ < 0$ and $\\Delta S^\\circ > 0$, so that both terms favor the reaction. Here $\\Delta H^\\circ$ is positive, so at low temperature the unfavorable enthalpy dominates and $\\Delta G^\\circ$ is positive.',
      'Spontaneity requires $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ < 0$, so $T > \\Delta H^\\circ/\\Delta S^\\circ = 40{,}000/125 = 320$ K. With both terms positive, the favorable entropy term dominates only above this temperature.',
      'Spontaneity only below a threshold temperature describes a reaction with negative $\\Delta H^\\circ$ and negative $\\Delta S^\\circ$, where the favorable enthalpy is overcome by the unfavorable entropy at high T. Here the signs are both positive, so the reverse pattern applies.',
      'No spontaneous temperature describes a reaction with positive $\\Delta H^\\circ$ and negative $\\Delta S^\\circ$, where both terms oppose the reaction. Here $\\Delta S^\\circ$ is positive, so $-T\\Delta S^\\circ$ eventually outweighs the enthalpy at high enough temperature.',
    ],
    skill: '5E ΔG = ΔH − TΔS and temperature (Skill 2)',
  },
  {
    id: 'fl4-cp-b-d05',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    question: 'In the ¹H NMR spectrum of 2-chloropropane, $(\\text{CH}_3)_2\\text{CHCl}$, the signal of the proton on C-2 is a:',
    options: [
      'doublet, and the signal of the methyl protons is a septet',
      'triplet, and the signal of the methyl protons is a quartet',
      'septet, and the signal of the methyl protons is a doublet',
      'septet, and the signal of the methyl protons is a singlet',
    ],
    correctAnswer: 2,
    explanation:
      'By the n + 1 rule, a signal is split by the n equivalent protons on adjacent carbons. The C-2 proton has six neighboring methyl protons, giving 6 + 1 = 7 lines (a septet), and the six equivalent methyl protons have one neighboring proton, giving a doublet. Reversing the two patterns counts the protons on the carbon itself rather than on its neighbors. A triplet and quartet describe an ethyl group. A methyl singlet would require no protons on the adjacent carbon, but C-2 bears one.',
    optionExplanations: [
      'This reverses the two patterns by counting the protons on each carbon itself rather than on its neighbors. The C-2 proton is split by six methyl neighbors into a septet; the methyls are split by the single C-2 proton into a doublet.',
      'A triplet and quartet describe an ethyl group, $\\text{CH}_3\\text{CH}_2$–, where the CH₂ has three neighbors and the CH₃ has two. In 2-chloropropane the C-2 proton has six neighbors and each methyl has one.',
      'By the n + 1 rule, the C-2 proton has six equivalent neighboring methyl protons, giving 6 + 1 = 7 lines (a septet). The six equivalent methyl protons each see one neighboring proton on C-2, giving a doublet.',
      'The septet for the C-2 proton is right, but a methyl singlet would require no protons on the adjacent carbon. C-2 bears one proton, which splits each methyl signal into a doublet.',
    ],
    skill: '5D ¹H NMR spin–spin splitting (Skill 2)',
  },
  {
    id: 'fl4-cp-b-d06',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question: 'Which of the following lipids would NOT yield a carboxylate salt when heated with aqueous sodium hydroxide?',
    options: [
      'Tristearin, a triacylglycerol',
      'Phosphatidylcholine, a phospholipid',
      'Cetyl palmitate, a wax',
      'Cholesterol, a sterol',
    ],
    correctAnswer: 3,
    explanation:
      'Saponification hydrolyzes ester bonds to release fatty acids as carboxylate salts. Cholesterol is a steroid, an isoprenoid built of four fused hydrocarbon rings with a single hydroxyl group and no ester-linked fatty acid, so base does not release a carboxylate from it. Tristearin contains three fatty acid esters of glycerol, phosphatidylcholine contains two fatty acid esters on its glycerol backbone, and the wax cetyl palmitate is an ester of palmitic acid with a long-chain alcohol; all three release fatty acid salts.',
    optionExplanations: [
      'Tristearin contains three fatty acid ester linkages to glycerol. Heating with aqueous NaOH saponifies all three esters, releasing glycerol and three equivalents of sodium stearate, a carboxylate salt.',
      'Phosphatidylcholine has two fatty acids esterified to its glycerol backbone. Base hydrolysis cleaves these ester bonds and releases the fatty acids as carboxylate salts, so this lipid is saponifiable.',
      'Cetyl palmitate is an ester of palmitic acid with the long-chain alcohol cetyl alcohol. Saponification cleaves the ester, releasing sodium palmitate (a carboxylate salt) and cetyl alcohol.',
      'Cholesterol is a steroid built from four fused hydrocarbon rings with a single hydroxyl group and no ester-linked fatty acid. There is no ester bond to hydrolyze, so base cannot release a carboxylate from it.',
    ],
    skill: '5D steroid structure vs saponifiable lipids (Skill 1)',
  },
  {
    id: 'fl4-cp-b-d07',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'An aqueous NaCl solution is heated from 20 °C to 60 °C in a sealed container, so that no water evaporates. How do its molality and molarity change?',
    options: [
      'Molality is unchanged, and molarity decreases slightly as the solution expands',
      'Molarity is unchanged, and molality decreases slightly as the water expands',
      'Both are unchanged, because no solute or solvent leaves the container',
      'Both increase, because NaCl becomes more soluble at higher temperature',
    ],
    correctAnswer: 0,
    explanation:
      'Molality is moles of solute per kilogram of solvent; neither quantity changes with temperature, so molality is constant. Molarity is moles of solute per liter of solution, and the solution’s volume increases slightly on heating, so molarity decreases slightly. Molality depends on mass, not volume, so thermal expansion cannot change it. Keeping all solute and solvent in the container fixes the amounts but not the volume. A change in solubility affects how much salt could dissolve, not the concentration of salt already dissolved.',
    optionExplanations: [
      'Molality is moles of solute per kilogram of solvent, and neither quantity changes with temperature. Molarity is moles per liter of solution; the solution expands slightly on heating, so the same moles occupy a larger volume and molarity falls slightly.',
      'This reverses the two quantities. Molality depends on the mass of solvent, which is unchanged by heating, so it cannot decrease. Molarity depends on volume, which does expand, so molarity is the one that changes.',
      'Keeping all solute and solvent sealed in the container fixes the amounts of each, which keeps molality constant. It does not fix the volume of the solution, which expands on heating, so molarity does change.',
      'Increased solubility affects how much additional salt could dissolve if more were present, not the concentration of salt already dissolved. The amount of NaCl in solution is unchanged, so neither concentration increases.',
    ],
    skill: '5A molality vs molarity (Skill 1)',
  },
]
