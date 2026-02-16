import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('📚 Filling AP Chemistry empty categories...\n')
  const course = await prisma.course.findUnique({ where: { slug: 'ap-chemistry' } })
  if (course === null) { console.log('Course not found'); return }

  const cats = await prisma.category.findMany({ where: { courseId: course.id } })
  const eqCat = cats.find(c => c.slug === 'equilibrium')
  const thermAppCat = cats.find(c => c.slug === 'thermodynamics-applications')

  if (eqCat) {
    const topics = [
      { title: 'Equilibrium Constants and Expressions', slug: 'equilibrium-constants-expressions', order: 0,
        description: 'Write equilibrium expressions and calculate Kc and Kp for reversible reactions.',
        textContent: `# Equilibrium Constants and Expressions

## Chemical Equilibrium

A reversible reaction reaches **dynamic equilibrium** when the forward and reverse rates are equal, and concentrations stop changing.

## Equilibrium Expression

For the reaction: $aA + bB \\rightleftharpoons cC + dD$

$$K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}$$

## Rules for Writing $K$ Expressions

1. **Products over reactants**, each raised to their stoichiometric coefficient
2. **Omit pure solids** and **pure liquids** (activities = 1)
3. Use **molar concentrations** for $K_c$, **partial pressures** for $K_p$

## $K_c$ vs $K_p$

$$K_p = K_c(RT)^{\\Delta n}$$

where $\\Delta n = \\text{moles gas products} - \\text{moles gas reactants}$

## Magnitude of $K$

| $K$ Value | Meaning |
|-----------|---------|
| $K \\gg 1$ | Products favored at equilibrium |
| $K \\ll 1$ | Reactants favored at equilibrium |
| $K \\approx 1$ | Significant amounts of both |

## Manipulating $K$

| Operation | New $K$ |
|-----------|---------|
| Reverse reaction | $K' = \\frac{1}{K}$ |
| Multiply by $n$ | $K' = K^n$ |
| Add two reactions | $K' = K_1 \\times K_2$ |

## Reaction Quotient ($Q$)

Same form as $K$, but uses **current** concentrations:

$$Q = \\frac{[C]^c[D]^d}{[A]^a[B]^b} \\quad \\text{(at any moment)}$$

| Comparison | Direction |
|------------|-----------|
| $Q < K$ | Reaction proceeds **forward** |
| $Q > K$ | Reaction proceeds **reverse** |
| $Q = K$ | At **equilibrium** |

> **AP Chemistry Tip**: The equilibrium expression only includes species in the **aqueous** or **gaseous** phase.`
      },
      { title: 'Le Chatelier\'s Principle and Equilibrium Shifts', slug: 'le-chatelier-equilibrium-shifts', order: 1,
        description: 'Predict how changes in conditions affect equilibrium position.',
        textContent: `# Le Chatelier's Principle and Equilibrium Shifts

## Le Chatelier's Principle

When a system at equilibrium is **disturbed**, it will shift to partially **counteract** the disturbance and establish a new equilibrium.

## Concentration Changes

| Disturbance | Shift | Effect on K |
|-------------|-------|-------------|
| Add reactant | Forward → | No change |
| Remove reactant | ← Reverse | No change |
| Add product | ← Reverse | No change |
| Remove product | Forward → | No change |

**K does not change** when concentrations change (at constant T).

## Pressure/Volume Changes (gases only)

| Disturbance | Shift Direction |
|-------------|----------------|
| Decrease volume (increase P) | Toward **fewer moles** of gas |
| Increase volume (decrease P) | Toward **more moles** of gas |
| Add inert gas (constant V) | **No shift** |

If $\\Delta n_{gas} = 0$, pressure changes have no effect.

## Temperature Changes

Temperature is the **only factor that changes K**.

| Reaction Type | Increase T | Decrease T |
|--------------|------------|------------|
| Exothermic ($\\Delta H < 0$) | Shift left, K decreases | Shift right, K increases |
| Endothermic ($\\Delta H > 0$) | Shift right, K increases | Shift left, K decreases |

**Think of heat as a product (exothermic) or reactant (endothermic).**

## Catalyst Effects

A catalyst:
- Does **NOT** shift equilibrium
- Does **NOT** change K
- Reaches equilibrium **faster**
- Lowers activation energy equally for forward and reverse reactions

## Common Ion Effect

Adding an ion already present in solution shifts the equilibrium away from that ion.

$$\\text{AgCl}(s) \\rightleftharpoons \\text{Ag}^+(aq) + \\text{Cl}^-(aq)$$

Adding NaCl (source of Cl⁻) shifts left → less AgCl dissolves.

> **AP Chemistry Tip**: Always state both what happens (shift direction) AND why (Le Chatelier's principle counteracts the stress).`
      }
    ]
    for (const t of topics) {
      await prisma.topic.create({
        data: { title: t.title, slug: t.slug, description: t.description, textContent: t.textContent, order: t.order, categoryId: eqCat.id }
      })
      console.log('  ✅ ' + t.slug)
    }
    console.log('  📂 Filled: Equilibrium (2 topics)')
  }

  if (thermAppCat) {
    const topics = [
      { title: 'Spontaneity and Free Energy Applications', slug: 'spontaneity-free-energy-applications', order: 0,
        description: 'Apply Gibbs free energy to predict spontaneity and relate to equilibrium constants.',
        textContent: `# Spontaneity and Free Energy Applications

## Gibbs Free Energy Review

$$\\Delta G = \\Delta H - T\\Delta S$$

| $\\Delta H$ | $\\Delta S$ | $\\Delta G$ | Spontaneity |
|------------|------------|------------|-------------|
| $-$ | $+$ | Always $-$ | Always spontaneous |
| $+$ | $-$ | Always $+$ | Never spontaneous |
| $-$ | $-$ | Depends on T | Spontaneous at **low** T |
| $+$ | $+$ | Depends on T | Spontaneous at **high** T |

## Standard Free Energy

$$\\Delta G° = \\sum \\Delta G°_f(\\text{products}) - \\sum \\Delta G°_f(\\text{reactants})$$

## Relationship to Equilibrium

$$\\Delta G° = -RT\\ln K$$

| $\\Delta G°$ | $K$ | Meaning |
|-------------|-----|---------|
| $\\Delta G° < 0$ | $K > 1$ | Products favored |
| $\\Delta G° = 0$ | $K = 1$ | Neither favored |
| $\\Delta G° > 0$ | $K < 1$ | Reactants favored |

## Non-Standard Conditions

$$\\Delta G = \\Delta G° + RT\\ln Q$$

At equilibrium: $Q = K$, so $\\Delta G = 0$.

## Coupled Reactions

An unfavorable reaction ($\\Delta G > 0$) can be driven by coupling with a favorable one ($\\Delta G < 0$), as long as the total $\\Delta G < 0$.

**Example**: ATP hydrolysis ($\\Delta G° = -30.5$ kJ/mol) drives many biological processes.

## Electrochemistry Connection

$$\\Delta G° = -nFE°$$

- $n$ = moles of electrons transferred
- $F$ = Faraday's constant ($96,485$ C/mol)
- $E°$ = standard cell potential

A positive $E°$ means negative $\\Delta G°$ (spontaneous).

## Temperature Dependence

$$T_{\\text{crossover}} = \\frac{\\Delta H}{\\Delta S}$$

The temperature at which $\\Delta G = 0$ (equilibrium transition).

> **AP Chemistry Tip**: The connection between $\\Delta G°$, $K$, and $E°$ is a favorite exam topic. Know how to convert between them.`
      },
      { title: 'Galvanic Cells and Thermodynamic Applications', slug: 'galvanic-cells-thermo-applications', order: 1,
        description: 'Connect thermodynamics to electrochemistry and real-world applications.',
        textContent: `# Galvanic Cells and Thermodynamic Applications

## Cell Potential and Free Energy

$$\\Delta G° = -nFE°_{cell}$$

$$E°_{cell} = E°_{cathode} - E°_{anode}$$

A **positive** $E°_{cell}$ indicates a spontaneous reaction.

## Standard Reduction Potentials

More positive $E°$ → stronger oxidizing agent (more easily reduced)
More negative $E°$ → stronger reducing agent (more easily oxidized)

## Nernst Equation

$$E = E° - \\frac{RT}{nF}\\ln Q = E° - \\frac{0.0592}{n}\\log Q \\quad \\text{(at 25°C)}$$

At equilibrium: $E = 0$, $Q = K$:
$$E° = \\frac{0.0592}{n}\\log K$$

## Connecting the Big Three

$$\\Delta G° = -RT\\ln K = -nFE°$$

$$\\ln K = \\frac{nFE°}{RT}$$

## Practical Applications

### Batteries
- **Primary**: Non-rechargeable (alkaline, lithium)
- **Secondary**: Rechargeable (Li-ion, lead-acid)
- **Fuel cells**: Continuous fuel supply (hydrogen fuel cell)

### Corrosion
Iron rusting: electrochemical process where Fe is oxidized
$$\\text{Fe}(s) \\to \\text{Fe}^{2+}(aq) + 2e^-$$

Prevention: galvanizing (zinc coating), cathodic protection, painting

### Electrolysis
Using electrical energy to drive a non-spontaneous reaction
$$\\Delta G > 0 \\quad (\\text{requires external energy})$$

**Faraday's Laws**:
$$\\text{moles} = \\frac{It}{nF}$$

where $I$ = current (A), $t$ = time (s)

> **AP Chemistry Tip**: Be comfortable converting between $\\Delta G°$, $K$, and $E°$. These three quantities are all interconnected and describe the same thermodynamic reality.`
      }
    ]
    for (const t of topics) {
      await prisma.topic.create({
        data: { title: t.title, slug: t.slug, description: t.description, textContent: t.textContent, order: t.order, categoryId: thermAppCat.id }
      })
      console.log('  ✅ ' + t.slug)
    }
    console.log('  📂 Filled: Applications of Thermodynamics (2 topics)')
  }

  console.log('\n🎉 AP Chemistry empty categories filled with 4 new topics.')
}

main().catch(console.error).finally(() => prisma.$disconnect())
