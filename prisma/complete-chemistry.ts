import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Adding AP Chemistry - Missing Topics (2 topics)\n');

  // Topic 1: Atomic Spectra
  const atomicSpectraTopic = await prisma.topic.findFirst({
    where: {
      slug: 'atomic-spectra',
      category: {
        course: {
          slug: 'ap-chemistry'
        }
      }
    }
  });

  if (atomicSpectraTopic) {
    // Example Problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: atomicSpectraTopic.id,
          question: 'What is the difference between an emission spectrum and an absorption spectrum?',
          solution: 'Emission Spectrum:\n• Produced when excited electrons fall to lower energy levels\n• Electrons emit photons of specific wavelengths\n• Appears as bright lines on a dark background\n• Example: Heated gas emitting light\n\nAbsorption Spectrum:\n• Produced when ground-state electrons absorb photons and jump to higher energy levels\n• Only photons of specific wavelengths are absorbed\n• Appears as dark lines on a bright continuous background\n• Example: White light passing through cool gas\n\nKey insight: The wavelengths in emission and absorption spectra for the same element are identical - they represent the same energy transitions, just in opposite directions.',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: atomicSpectraTopic.id,
          question: 'Calculate the energy (in joules) of a photon with wavelength 486 nm (blue light in hydrogen\'s emission spectrum). Use h = 6.626 × 10⁻³⁴ J·s and c = 3.00 × 10⁸ m/s.',
          solution: 'Use the equation: E = hc/λ\n\nStep 1: Convert wavelength to meters\nλ = 486 nm = 486 × 10⁻⁹ m = 4.86 × 10⁻⁷ m\n\nStep 2: Calculate energy\nE = (6.626 × 10⁻³⁴ J·s)(3.00 × 10⁸ m/s) / (4.86 × 10⁻⁷ m)\nE = (19.878 × 10⁻²⁶) / (4.86 × 10⁻⁷)\nE = 4.09 × 10⁻¹⁹ J\n\nThe photon has energy of 4.09 × 10⁻¹⁹ joules.\n\nThis corresponds to an electron transition in hydrogen (n=4 to n=2).',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: atomicSpectraTopic.id,
          question: 'Why do different elements produce different line spectra (unique "fingerprints")?',
          solution: 'Each element has a unique electron configuration and energy level structure:\n\n1. Different nuclear charge (Z)\n   • Affects the strength of attraction between nucleus and electrons\n   • Creates element-specific energy levels\n\n2. Different number of electrons\n   • Creates unique patterns of electron-electron repulsion\n   • Results in different available transitions\n\n3. Unique energy level spacing\n   • Each element has its own set of allowed energy states\n   • Transitions between levels produce specific photon energies: ΔE = E_final - E_initial = hc/λ\n\n4. Result: Element-specific wavelengths\n   • Each transition produces a photon of specific energy/wavelength\n   • The collection of all possible transitions creates a unique pattern\n\nThis is why spectroscopy can identify elements - each has a unique "barcode" of spectral lines!',
          difficulty: 'MEDIUM',
          order: 3,
          isPremium: false
        },
        {
          topicId: atomicSpectraTopic.id,
          question: 'An electron in a hydrogen atom drops from n=5 to n=2. Calculate the wavelength of the emitted photon using the Rydberg equation: 1/λ = R_H(1/n_f² - 1/n_i²), where R_H = 1.097 × 10⁷ m⁻¹.',
          solution: 'Given:\nn_i = 5 (initial)\nn_f = 2 (final)\nR_H = 1.097 × 10⁷ m⁻¹\n\nStep 1: Apply Rydberg equation\n1/λ = R_H(1/n_f² - 1/n_i²)\n1/λ = (1.097 × 10⁷)(1/4 - 1/25)\n1/λ = (1.097 × 10⁷)(0.25 - 0.04)\n1/λ = (1.097 × 10⁷)(0.21)\n1/λ = 2.304 × 10⁶ m⁻¹\n\nStep 2: Solve for λ\nλ = 1/(2.304 × 10⁶)\nλ = 4.34 × 10⁻⁷ m = 434 nm\n\nThis is in the visible range (violet-blue), part of the Balmer series (transitions to n=2).',
          difficulty: 'HARD',
          order: 4,
          isPremium: true
        },
        {
          topicId: atomicSpectraTopic.id,
          question: 'A sodium lamp emits yellow light at 589 nm. If a sodium atom absorbs this photon, what happens to the electron? How much energy does it gain (in kJ/mol)?',
          solution: 'Step 1: Calculate energy per photon\nE = hc/λ\nλ = 589 nm = 5.89 × 10⁻⁷ m\nE = (6.626 × 10⁻³⁴)(3.00 × 10⁸)/(5.89 × 10⁻⁷)\nE = 3.37 × 10⁻¹⁹ J per photon\n\nStep 2: What happens to the electron?\nThe electron absorbs the photon and jumps to a higher energy level (excited state). The energy difference between the levels equals the photon energy.\n\nStep 3: Convert to kJ/mol\nE = (3.37 × 10⁻¹⁹ J/photon)(6.022 × 10²³ photons/mol)\nE = 2.03 × 10⁵ J/mol = 203 kJ/mol\n\nThe electron gains 203 kJ/mol of energy and moves to an excited state. This is a reversible process - when the electron falls back, it emits the same yellow light.',
          difficulty: 'HARD',
          order: 5,
          isPremium: true
        }
      ]
    });

    // Flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: atomicSpectraTopic.id,
          front: 'What causes an emission spectrum?',
          back: 'Electrons in excited states fall to lower energy levels and emit photons. Each transition releases a photon with energy ΔE = h(c/λ), producing specific wavelengths of light that appear as bright lines.',
          hint: 'Electrons falling down emit light',
          isPremium: false
        },
        {
          topicId: atomicSpectraTopic.id,
          front: 'What causes an absorption spectrum?',
          back: 'Ground-state or low-energy electrons absorb photons of specific wavelengths and jump to higher energy levels. These missing wavelengths appear as dark lines in an otherwise continuous spectrum.',
          hint: 'Electrons jumping up absorb light',
          isPremium: false
        },
        {
          topicId: atomicSpectraTopic.id,
          front: 'What is the relationship between photon energy and wavelength?',
          back: 'E = hc/λ\n\nwhere:\nh = Planck\'s constant (6.626 × 10⁻³⁴ J·s)\nc = speed of light (3.00 × 10⁸ m/s)\nλ = wavelength\n\nShorter wavelength = higher energy',
          hint: 'Energy is inversely proportional to wavelength',
          isPremium: false
        },
        {
          topicId: atomicSpectraTopic.id,
          front: 'Why are atomic spectra called "atomic fingerprints"?',
          back: 'Each element has a unique electron configuration and energy level structure, producing a unique pattern of spectral lines. This allows elements to be identified by their emission or absorption spectrum.',
          hint: 'Each element has a unique pattern',
          isPremium: false
        },
        {
          topicId: atomicSpectraTopic.id,
          front: 'What are the main series in the hydrogen emission spectrum?',
          back: 'Lyman series: transitions to n=1 (UV)\nBalmer series: transitions to n=2 (visible)\nPaschen series: transitions to n=3 (IR)\n\nEach series represents electrons falling to a specific energy level.',
          hint: 'Named series based on final energy level',
          isPremium: true
        },
        {
          topicId: atomicSpectraTopic.id,
          front: 'How does the Bohr model explain line spectra?',
          back: 'Electrons exist only in specific energy levels (quantized). Transitions between these discrete levels produce photons of specific energies, creating line spectra rather than continuous spectra. ΔE = E_final - E_initial = hν',
          hint: 'Quantized energy levels produce discrete lines',
          isPremium: true
        }
      ]
    });

    console.log('✅ Added 5 problems and 6 flashcards for Atomic Spectra');
  }

  // Topic 2: Solubility Equilibrium
  const solubilityTopic = await prisma.topic.findFirst({
    where: {
      slug: 'solubility-equilibrium',
      category: {
        course: {
          slug: 'ap-chemistry'
        }
      }
    }
  });

  if (solubilityTopic) {
    // Example Problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: solubilityTopic.id,
          question: 'Write the K_sp expression for the dissolution of silver chloride, AgCl(s).',
          solution: 'Step 1: Write the dissolution equation\nAgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)\n\nStep 2: Write K_sp expression\nK_sp = [Ag⁺][Cl⁻]\n\nNote: The solid AgCl is not included in the equilibrium expression (only aqueous species).\n\nThe K_sp value for AgCl at 25°C is approximately 1.8 × 10⁻¹⁰.',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: solubilityTopic.id,
          question: 'The K_sp of PbCl₂ is 1.7 × 10⁻⁵. Calculate the molar solubility of PbCl₂ in pure water.',
          solution: 'Step 1: Write dissolution equation\nPbCl₂(s) ⇌ Pb²⁺(aq) + 2Cl⁻(aq)\n\nStep 2: Set up ICE table (let s = molar solubility)\n         Pb²⁺    2Cl⁻\nI:       0       0\nC:       +s      +2s\nE:       s       2s\n\nStep 3: Write K_sp expression\nK_sp = [Pb²⁺][Cl⁻]²\n1.7 × 10⁻⁵ = (s)(2s)²\n1.7 × 10⁻⁵ = 4s³\n\nStep 4: Solve for s\ns³ = 4.25 × 10⁻⁶\ns = 1.6 × 10⁻² M\n\nThe molar solubility of PbCl₂ is 0.016 M or 1.6 × 10⁻² M.',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: solubilityTopic.id,
          question: 'Explain the common ion effect. How does adding NaCl affect the solubility of AgCl?',
          solution: 'Common Ion Effect:\nThe solubility of a salt decreases when a common ion is added to the solution. This is an application of Le Chatelier\'s principle.\n\nFor AgCl:\nAgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)\n\nAdding NaCl increases [Cl⁻]:\n• NaCl fully dissociates: NaCl → Na⁺ + Cl⁻\n• Increased [Cl⁻] shifts equilibrium LEFT\n• More AgCl precipitates out of solution\n• Solubility of AgCl DECREASES\n\nQuantitative effect:\nK_sp = [Ag⁺][Cl⁻] remains constant\nIf [Cl⁻] increases, [Ag⁺] must decrease proportionally\n\nExample: If [Cl⁻] doubles, [Ag⁺] is cut in half to maintain K_sp.',
          difficulty: 'MEDIUM',
          order: 3,
          isPremium: false
        },
        {
          topicId: solubilityTopic.id,
          question: 'Will a precipitate form if 100 mL of 0.002 M AgNO₃ is mixed with 100 mL of 0.002 M NaCl? K_sp(AgCl) = 1.8 × 10⁻¹⁰.',
          solution: 'Step 1: Calculate ion concentrations after mixing\nTotal volume = 200 mL (dilution by factor of 2)\n[Ag⁺] = 0.002 M / 2 = 0.001 M = 1.0 × 10⁻³ M\n[Cl⁻] = 0.002 M / 2 = 0.001 M = 1.0 × 10⁻³ M\n\nStep 2: Calculate Q (reaction quotient)\nQ = [Ag⁺][Cl⁻]\nQ = (1.0 × 10⁻³)(1.0 × 10⁻³)\nQ = 1.0 × 10⁻⁶\n\nStep 3: Compare Q to K_sp\nQ = 1.0 × 10⁻⁶\nK_sp = 1.8 × 10⁻¹⁰\n\nQ >> K_sp (by factor of ~5,500)\n\nConclusion: YES, a precipitate WILL form.\n\nWhen Q > K_sp, the solution is supersaturated and precipitation occurs until Q = K_sp.',
          difficulty: 'HARD',
          order: 4,
          isPremium: true
        },
        {
          topicId: solubilityTopic.id,
          question: 'Calculate the molar solubility of Mg(OH)₂ in a solution buffered at pH 10. K_sp = 1.8 × 10⁻¹¹.',
          solution: 'Step 1: Find [OH⁻] from pH\npH = 10, so pOH = 14 - 10 = 4\n[OH⁻] = 10⁻⁴ M\n\nStep 2: Write dissolution equation\nMg(OH)₂(s) ⇌ Mg²⁺(aq) + 2OH⁻(aq)\n\nStep 3: Write K_sp expression\nK_sp = [Mg²⁺][OH⁻]²\n\nStep 4: Account for buffered [OH⁻]\nThe buffer maintains [OH⁻] = 10⁻⁴ M\nLet s = solubility of Mg(OH)₂\n[Mg²⁺] = s\n[OH⁻] = 10⁻⁴ M (from buffer, dominates over OH⁻ from Mg(OH)₂)\n\nStep 5: Solve for s\n1.8 × 10⁻¹¹ = s(10⁻⁴)²\n1.8 × 10⁻¹¹ = s(10⁻⁸)\ns = 1.8 × 10⁻³ M\n\nIn buffered solution: 1.8 × 10⁻³ M\n\nFor comparison in pure water: s would be much higher (~1.7 × 10⁻⁴ M)\nThe common ion effect from the high [OH⁻] reduces solubility significantly.',
          difficulty: 'HARD',
          order: 5,
          isPremium: true
        }
      ]
    });

    // Flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: solubilityTopic.id,
          front: 'What is the solubility product constant (K_sp)?',
          back: 'K_sp is the equilibrium constant for the dissolution of a sparingly soluble ionic compound. It equals the product of the ion concentrations, each raised to the power of its coefficient.\n\nFor AB₂: K_sp = [A][B]²',
          hint: 'Equilibrium constant for dissolution',
          isPremium: false
        },
        {
          topicId: solubilityTopic.id,
          front: 'What is a saturated solution?',
          back: 'A solution in equilibrium with undissolved solid. The dissolved ions are at maximum concentration for that temperature. Rate of dissolution = rate of precipitation.\n\nIn a saturated solution, Q = K_sp.',
          hint: 'Equilibrium between dissolved and solid',
          isPremium: false
        },
        {
          topicId: solubilityTopic.id,
          front: 'How do you use Q vs K_sp to predict precipitation?',
          back: 'Q < K_sp: Unsaturated, no precipitate forms\nQ = K_sp: Saturated, at equilibrium\nQ > K_sp: Supersaturated, precipitate forms\n\nQ is calculated the same way as K_sp but with current concentrations.',
          hint: 'Compare reaction quotient to equilibrium constant',
          isPremium: false
        },
        {
          topicId: solubilityTopic.id,
          front: 'What is the common ion effect?',
          back: 'The decrease in solubility of a salt when a common ion is added to the solution. The added ion shifts the dissolution equilibrium toward the solid (Le Chatelier\'s principle).',
          hint: 'Adding a common ion decreases solubility',
          isPremium: false
        },
        {
          topicId: solubilityTopic.id,
          front: 'How does pH affect the solubility of metal hydroxides?',
          back: 'Lower pH (more acidic) → Higher solubility\n• H⁺ reacts with OH⁻, removing it from solution\n• Shifts equilibrium toward dissolution\n\nHigher pH (more basic) → Lower solubility\n• Common ion effect from excess OH⁻',
          hint: 'Acids increase hydroxide solubility',
          isPremium: true
        },
        {
          topicId: solubilityTopic.id,
          front: 'Why can\'t you directly compare K_sp values to determine which salt is more soluble?',
          back: 'K_sp values can only be compared directly if the salts have the same stoichiometry.\n\nExample: Can compare AgCl and AgBr (both 1:1)\nCannot directly compare AgCl (1:1) and CaF₂ (1:2)\n\nMust calculate actual molar solubility to compare different stoichiometries.',
          hint: 'Stoichiometry matters!',
          isPremium: true
        }
      ]
    });

    console.log('✅ Added 5 problems and 6 flashcards for Solubility Equilibrium');
  }

  console.log('\n🎉 AP Chemistry is now 100% complete!\n');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
