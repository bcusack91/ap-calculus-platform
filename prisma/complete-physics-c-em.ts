import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Adding AP Physics C: E&M - Missing Topics (2 topics)\n');

  // Topic 1: Gauss's Law Applications
  const gaussLawTopic = await prisma.topic.findFirst({
    where: {
      slug: 'gauss-law-applications',
      category: {
        course: {
          slug: 'ap-physics-c-em'
        }
      }
    }
  });

  if (gaussLawTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: gaussLawTopic.id,
          question: 'State Gauss\'s Law in both integral and differential form. What does each form tell us?',
          solution: 'Integral Form:\n∮ E⃗·dA⃗ = Q_enclosed/ε₀\n\nThe electric flux through a closed surface equals the enclosed charge divided by ε₀.\n\nDifferential Form:\n∇·E⃗ = ρ/ε₀\n\nThe divergence of the electric field at a point equals the charge density at that point divided by ε₀.\n\nWhat they tell us:\n• Integral form: Relates field over a surface to enclosed charge (useful for calculations)\n• Differential form: Local relationship between field and charge density\n• Both are equivalent formulations via the divergence theorem\n• Electric field lines originate from positive charges and terminate on negative charges',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: gaussLawTopic.id,
          question: 'Use Gauss\'s Law to find the electric field at distance r from an infinite line of charge with linear charge density λ.',
          solution: 'Step 1: Choose Gaussian surface\nUse a cylindrical surface of radius r and length L, coaxial with the line charge.\n\nStep 2: Apply symmetry\nBy symmetry, E is radial and constant at distance r.\nE⃗ ⊥ end caps (no flux through ends)\nE⃗ ∥ dA⃗ on curved surface\n\nStep 3: Calculate flux\nΦ = ∮ E⃗·dA⃗ = E(2πrL)\n(only curved surface contributes)\n\nStep 4: Find enclosed charge\nQ_enclosed = λL\n\nStep 5: Apply Gauss\'s Law\nE(2πrL) = λL/ε₀\nE = λ/(2πε₀r)\n\nDirection: Radially outward from line (if λ > 0)\n\nThe field decreases as 1/r for an infinite line charge.',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: gaussLawTopic.id,
          question: 'A solid non-conducting sphere of radius R has uniform charge density ρ. Find the electric field both inside (r < R) and outside (r > R) the sphere.',
          solution: 'Use spherical Gaussian surfaces of radius r.\n\nOUTSIDE (r > R):\nQ_enclosed = ρ(4πR³/3) = total charge\nΦ = E(4πr²)\n\nE(4πr²) = ρ(4πR³/3)/ε₀\nE = ρR³/(3ε₀r²) = Q/(4πε₀r²)\n\nSame as point charge! (r > R)\n\nINSIDE (r < R):\nQ_enclosed = ρ(4πr³/3)\nΦ = E(4πr²)\n\nE(4πr²) = ρ(4πr³/3)/ε₀\nE = ρr/(3ε₀)\n\nKey results:\n• Inside: E ∝ r (linear increase from center)\n• Outside: E ∝ 1/r² (like point charge)\n• At r = 0: E = 0 (by symmetry)\n• At r = R: Both formulas give same value (continuous)\n• Maximum field at surface r = R',
          difficulty: 'HARD',
          order: 3,
          isPremium: false
        },
        {
          topicId: gaussLawTopic.id,
          question: 'An infinite conducting plane has surface charge density σ. Use Gauss\'s Law to find the electric field just outside the surface. How does this differ from an infinite non-conducting sheet?',
          solution: 'CONDUCTING PLANE:\n\nStep 1: Choose Gaussian surface\nCylindrical "pillbox" with area A, one end inside conductor, one outside.\n\nStep 2: Apply conductor properties\n• E = 0 inside conductor\n• E ⊥ surface outside\n\nStep 3: Calculate flux\nΦ = EA (only outer end cap contributes)\n\nStep 4: Enclosed charge\nQ_enclosed = σA\n\nStep 5: Gauss\'s Law\nEA = σA/ε₀\nE = σ/ε₀\n\nNON-CONDUCTING SHEET:\nE = σ/(2ε₀) on each side\n\nKey difference:\n• Conductor: E = σ/ε₀ (factor of 2 larger!)\n• Non-conductor: E = σ/(2ε₀)\n\nWhy? For conductor, all charge is on one surface. For non-conducting sheet, charge distributed throughout, field on both sides.',
          difficulty: 'HARD',
          order: 4,
          isPremium: true
        },
        {
          topicId: gaussLawTopic.id,
          question: 'A spherical shell of radius R carries total charge Q uniformly distributed on its surface. Find E(r) everywhere and sketch the field as a function of r.',
          solution: 'Use spherical Gaussian surfaces:\n\nINSIDE (r < R):\nQ_enclosed = 0 (all charge on shell at r = R)\n∮ E⃗·dA⃗ = 0\nE = 0 for r < R\n\nOUTSIDE (r > R):\nQ_enclosed = Q\nE(4πr²) = Q/ε₀\nE = Q/(4πε₀r²) = kQ/r² for r > R\n\nAT SURFACE (r = R):\nE = kQ/R² (discontinuous jump)\n\nSketch of E(r):\n• E = 0 for r < R (flat line at zero)\n• Jump discontinuity at r = R\n• E = kQ/r² for r > R (1/r² decay)\n\nPhysical insight:\n• Inside a uniformly charged shell, field is exactly zero!\n• This is why Faraday cages work\n• Outside, shell acts like point charge at center\n• Surface discontinuity reflects surface charge density',
          difficulty: 'HARD',
          order: 5,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: gaussLawTopic.id,
          front: 'What is Gauss\'s Law?',
          back: '∮ E⃗·dA⃗ = Q_enclosed/ε₀\n\nThe total electric flux through any closed surface equals the enclosed charge divided by ε₀. One of Maxwell\'s equations.',
          hint: 'Flux through closed surface equals enclosed charge',
          isPremium: false
        },
        {
          topicId: gaussLawTopic.id,
          front: 'When is Gauss\'s Law useful for calculating E⃗?',
          back: 'When the charge distribution has high symmetry:\n• Spherical symmetry (point, sphere, shell)\n• Cylindrical symmetry (line, cylinder)\n• Planar symmetry (infinite plane)\n\nSymmetry allows E to be pulled out of the integral.',
          hint: 'Need symmetry to be useful',
          isPremium: false
        },
        {
          topicId: gaussLawTopic.id,
          front: 'For an infinite line charge, how does E depend on distance?',
          back: 'E = λ/(2πε₀r)\n\nE ∝ 1/r (not 1/r²!)\n\nThe field decreases linearly with distance from an infinite line charge.',
          hint: 'Use cylindrical Gaussian surface',
          isPremium: false
        },
        {
          topicId: gaussLawTopic.id,
          front: 'What is the electric field inside a uniformly charged spherical shell?',
          back: 'E = 0 everywhere inside the shell.\n\nNo charge is enclosed by a Gaussian surface inside the shell, so flux (and field) is zero. This is the principle behind Faraday cages.',
          hint: 'Zero! No enclosed charge.',
          isPremium: false
        },
        {
          topicId: gaussLawTopic.id,
          front: 'How does the field inside a uniformly charged sphere vary with r?',
          back: 'E = ρr/(3ε₀) = kQr/R³\n\nE ∝ r (linear increase from center)\nAt center: E = 0\nAt surface: E = maximum',
          hint: 'Linear with r inside, 1/r² outside',
          isPremium: true
        },
        {
          topicId: gaussLawTopic.id,
          front: 'What is the electric field from an infinite conducting plane with surface charge density σ?',
          back: 'E = σ/ε₀ (perpendicular to surface)\n\nThis is twice the field from a non-conducting sheet (σ/2ε₀) because all charge concentrates on the surface in a conductor.',
          hint: 'Conductor: σ/ε₀, Non-conductor: σ/2ε₀',
          isPremium: true
        }
      ]
    });

    console.log('✅ Added 5 problems and 6 flashcards for Gauss\'s Law Applications');
  }

  // Topic 2: RC Circuits
  const rcCircuitsTopic = await prisma.topic.findFirst({
    where: {
      slug: 'rc-circuits',
      category: {
        course: {
          slug: 'ap-physics-c-em'
        }
      }
    }
  });

  if (rcCircuitsTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: rcCircuitsTopic.id,
          question: 'A 10 μF capacitor is connected in series with a 100 kΩ resistor and a 12 V battery. What is the time constant τ? What does τ represent physically?',
          solution: 'Time constant:\nτ = RC\nτ = (100 × 10³ Ω)(10 × 10⁻⁶ F)\nτ = 1.0 s\n\nPhysical meaning of τ:\n• Time for capacitor to charge to 63.2% of final voltage (or discharge to 36.8%)\n• Characterizes how "fast" the circuit responds\n• After time t = 5τ, circuit is ~99% to equilibrium\n• Larger τ = slower charging/discharging\n\nFor this circuit:\n• τ = 1.0 second\n• After 1 second: V_C ≈ 7.6 V (63% of 12 V)\n• After 5 seconds: V_C ≈ 11.9 V (essentially fully charged)',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: rcCircuitsTopic.id,
          question: 'For the circuit above (R = 100 kΩ, C = 10 μF, ε = 12 V), write equations for the charge Q(t) and current I(t) during charging, starting from an uncharged capacitor.',
          solution: 'During CHARGING (from Q = 0):\n\nCharge:\nQ(t) = Q_max(1 - e^(-t/τ))\nQ(t) = Cε(1 - e^(-t/RC))\nQ(t) = (10 × 10⁻⁶)(12)(1 - e^(-t/1.0))\nQ(t) = 1.2 × 10⁻⁴(1 - e^(-t)) coulombs\n\nwhere Q_max = Cε = 120 μC\n\nCurrent:\nI(t) = I₀e^(-t/τ)\nI(t) = (ε/R)e^(-t/RC)\nI(t) = (12/100,000)e^(-t/1.0)\nI(t) = 1.2 × 10⁻⁴ e^(-t) amperes\n\nwhere I₀ = ε/R = 120 μA\n\nKey features:\n• Q starts at 0, approaches Q_max exponentially\n• I starts at maximum (ε/R), decays to 0\n• At t = 0: capacitor acts like wire (I max)\n• At t = ∞: capacitor acts like open circuit (I = 0)',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: rcCircuitsTopic.id,
          question: 'A capacitor in an RC circuit is charged to 12 V, then the battery is removed and replaced with a wire. If R = 50 kΩ and C = 20 μF, how long does it take for the voltage to drop to 3 V?',
          solution: 'For DISCHARGING:\nV(t) = V₀e^(-t/τ)\n\nGiven:\nV₀ = 12 V\nV(t) = 3 V\nτ = RC = (50 × 10³)(20 × 10⁻⁶) = 1.0 s\n\nStep 1: Substitute into equation\n3 = 12e^(-t/1.0)\n\nStep 2: Solve for t\n3/12 = e^(-t)\n0.25 = e^(-t)\nln(0.25) = -t\n-1.386 = -t\nt = 1.386 s\n\nAlternatively:\nt = -τ ln(V/V₀)\nt = -1.0 ln(3/12)\nt = -1.0 ln(0.25)\nt = 1.39 seconds\n\nThe voltage drops from 12 V to 3 V (to 1/4 of original) in about 1.4 seconds, which is about 1.4τ.\n\nNote: Voltage drops by half every 0.693τ (like radioactive half-life).',
          difficulty: 'MEDIUM',
          order: 3,
          isPremium: false
        },
        {
          topicId: rcCircuitsTopic.id,
          question: 'Derive the differential equation for an RC circuit during charging and solve it to find Q(t).',
          solution: 'Step 1: Apply Kirchhoff\'s voltage law\nε - V_R - V_C = 0\nε - IR - Q/C = 0\n\nStep 2: Express I in terms of Q\nI = dQ/dt\n\nε - R(dQ/dt) - Q/C = 0\n\nStep 3: Rearrange to standard form\nR(dQ/dt) = ε - Q/C\ndQ/dt = ε/R - Q/(RC)\ndQ/dt = (Cε - Q)/(RC)\n\nStep 4: Separate variables\ndQ/(Cε - Q) = dt/(RC)\n\nStep 5: Integrate both sides\n∫dQ/(Cε - Q) = ∫dt/(RC)\n-ln(Cε - Q) = t/(RC) + constant\n\nStep 6: Apply initial condition Q(0) = 0\n-ln(Cε) = constant\n\nStep 7: Solve for Q(t)\n-ln(Cε - Q) = t/(RC) - ln(Cε)\nln(Cε - Q) - ln(Cε) = -t/(RC)\nln[(Cε - Q)/Cε] = -t/τ\n(Cε - Q)/Cε = e^(-t/τ)\nCε - Q = Cε e^(-t/τ)\n\nQ(t) = Cε(1 - e^(-t/τ))\n\nThis is the charging equation!',
          difficulty: 'HARD',
          order: 4,
          isPremium: true
        },
        {
          topicId: rcCircuitsTopic.id,
          question: 'In an RC charging circuit with ε = 10 V, R = 1 MΩ, and C = 2 μF: (a) Find the power dissipated in the resistor at t = τ. (b) What total energy is stored in the capacitor when fully charged? (c) How much energy is dissipated as heat in the resistor during charging?',
          solution: '(a) Power at t = τ:\nI(t) = I₀e^(-t/τ)\nAt t = τ: I = I₀e^(-1) = I₀/e\nI₀ = ε/R = 10/(10⁶) = 10 μA\nI(τ) = 10/e ≈ 3.68 μA\n\nP = I²R = (3.68 × 10⁻⁶)²(10⁶) = 13.5 μW\n\n(b) Energy stored when fully charged:\nU_C = (1/2)CV²\nU_C = (1/2)(2 × 10⁻⁶)(10)²\nU_C = 100 μJ\n\n(c) Energy from battery:\nU_battery = Qε = Cε² = (2 × 10⁻⁶)(10)² = 200 μJ\n\nEnergy dissipated as heat:\nU_heat = U_battery - U_C = 200 - 100 = 100 μJ\n\nRemarkable result: Exactly HALF the energy from the battery is dissipated as heat in the resistor during charging, regardless of R! This is always true for RC circuits.',
          difficulty: 'HARD',
          order: 5,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: rcCircuitsTopic.id,
          front: 'What is the time constant τ for an RC circuit?',
          back: 'τ = RC\n\nTime for capacitor to charge to 63% of maximum (or discharge to 37%). Measured in seconds when R is in ohms and C is in farads.',
          hint: 'Product of resistance and capacitance',
          isPremium: false
        },
        {
          topicId: rcCircuitsTopic.id,
          front: 'What are the equations for charging a capacitor in an RC circuit?',
          back: 'Q(t) = Qmax(1 - e^(-t/τ)) = Cε(1 - e^(-t/RC))\n\nI(t) = I₀e^(-t/τ) = (ε/R)e^(-t/RC)\n\nV_C(t) = ε(1 - e^(-t/τ))\n\nAll approach final values exponentially.',
          hint: 'Exponential approach to maximum',
          isPremium: false
        },
        {
          topicId: rcCircuitsTopic.id,
          front: 'What are the equations for discharging a capacitor in an RC circuit?',
          back: 'Q(t) = Q₀e^(-t/τ)\n\nI(t) = I₀e^(-t/τ)\n\nV_C(t) = V₀e^(-t/τ)\n\nAll decay exponentially to zero.',
          hint: 'Exponential decay from initial values',
          isPremium: false
        },
        {
          topicId: rcCircuitsTopic.id,
          front: 'How does a capacitor behave at t = 0 and t = ∞ in an RC circuit?',
          back: 'At t = 0 (initially):\n• Uncharged capacitor acts like a wire (short circuit)\n• Maximum current flows\n\nAt t = ∞ (long time):\n• Fully charged capacitor acts like open circuit\n• No current flows\n• V_C = ε',
          hint: 'Wire when empty, open when full',
          isPremium: false
        },
        {
          topicId: rcCircuitsTopic.id,
          front: 'What percentage of final value is reached after 1τ, 2τ, 3τ, 4τ, 5τ?',
          back: 'Charging (reach % of max):\n1τ: 63%\n2τ: 86%\n3τ: 95%\n4τ: 98%\n5τ: 99%\n\nRule of thumb: After 5τ, essentially complete.',
          hint: '63%, 86%, 95%, 98%, 99%',
          isPremium: true
        },
        {
          topicId: rcCircuitsTopic.id,
          front: 'How much energy is dissipated as heat when charging a capacitor through a resistor?',
          back: 'Exactly half the energy from the battery is dissipated as heat:\n\nU_heat = (1/2)Cε²\n\nThis equals the energy stored in the capacitor! This is independent of R.',
          hint: 'Always 50% of battery energy',
          isPremium: true
        }
      ]
    });

    console.log('✅ Added 5 problems and 6 flashcards for RC Circuits');
  }

  console.log('\n🎉 AP Physics C: E&M is now 100% complete!\n');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
