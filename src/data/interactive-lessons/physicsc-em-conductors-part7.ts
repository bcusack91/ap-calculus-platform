export const physCEMCondPart7Data = {
  topicSlug: "conductors-equilibrium-physics-c-em",
  sections: [
    {
      id: 'ce7-intro',
      type: 'text' as const,
      content: `# Review & Applications

**Part 7 of 7 — Comprehensive Assessment**

### Master Summary: Conductors in Equilibrium

| Property | Statement |
|:---:|:---:|
| Interior field | $\\vec{E} = 0$ |
| Interior charge | $\\rho = 0$ (all charge on surface) |
| Surface field | $E_n = \\sigma/\\epsilon_0$ |
| Potential | $V = \\text{const}$ throughout conductor |
| Cavity (no charge) | $\\vec{E} = 0$ in cavity |
| Cavity (charge $q$) | Inner wall: $-q$; Outer adjusts |
| Sharp points | High $\\sigma$, high $E$ |
| Connected spheres | Same $V$; $\\sigma \\propto 1/R$ |
| Grounded conductor | $V = 0$; charge flows from ground |
| Image (plane) | $q' = -q$ at mirror point |
| Image (sphere) | $q' = -qR/d$ at $R^2/d$ |`
    },
    {
      id: 'ce7-mcq1',
      type: 'mcq' as const,
      question: 'A solid conductor has a cavity containing charge $+Q$. The conductor has net charge $-3Q$. The charge on the outer surface is:',
      options: ['$-4Q$', '$-3Q$', '$-2Q$', '$+Q$'],
      correctAnswer: 0,
      explanation: 'Inner cavity wall: $-Q$ (induced by $+Q$ in cavity). Total conductor charge: $-3Q$. Outer surface: $-3Q - (-Q) = -4Q$. Alternatively: outer surface = total conductor charge + (minus interior induced charge).'
    },
    {
      id: 'ce7-worked1',
      type: 'text' as const,
      content: `## Application 1: Electrostatic Precipitator

In a cylindrical geometry: a thin wire at the center (radius $a$) at high voltage $V_0$, surrounded by a grounded outer cylinder (radius $b$).

### Field

Using Gauss's law for a cylinder of length $L$ at radius $r$ ($a < r < b$):

$$E(2\\pi r L) = \\frac{\\lambda L}{\\epsilon_0} \\implies E = \\frac{\\lambda}{2\\pi\\epsilon_0 r}$$

### Voltage

$$V_0 = -\\int_b^a E\\,dr = \\frac{\\lambda}{2\\pi\\epsilon_0}\\ln\\frac{b}{a}$$

$$\\lambda = \\frac{2\\pi\\epsilon_0 V_0}{\\ln(b/a)}$$

### Near the wire ($r \\to a$):

$$E_{\\max} = \\frac{V_0}{a\\ln(b/a)}$$

This field can be strong enough to ionize air ($E > 3\\times10^6\\;\\text{V/m}$), creating a **corona discharge** that charges particulates for collection.`
    },
    {
      id: 'ce7-mcq2',
      type: 'mcq' as const,
      question: 'In a coaxial cylindrical capacitor, the field between the conductors varies as:',
      options: ['$1/r$', '$1/r^2$', 'Constant', '$r$'],
      correctAnswer: 0,
      explanation: 'From Gauss\'s law: $E = \\lambda/(2\\pi\\epsilon_0 r) \\propto 1/r$ in the cylindrical geometry.'
    },
    {
      id: 'ce7-worked2',
      type: 'text' as const,
      content: `## Application 2: Charge Transfer by Contact

Two conducting spheres: Sphere A (radius $R$, charge $Q$) touches Sphere B (radius $2R$, uncharged). After contact, what are the charges?

### Solution

When touching, they form a single conductor at one potential. For two touching spheres (approximate as two isolated spheres at same $V$):

$$\\frac{kQ_A}{R} = \\frac{kQ_B}{2R} \\implies Q_B = 2Q_A$$

With $Q_A + Q_B = Q$:

$$Q_A + 2Q_A = Q \\implies Q_A = Q/3, \\quad Q_B = 2Q/3$$

### Surface Charge Densities

$$\\sigma_A = \\frac{Q/3}{4\\pi R^2} = \\frac{Q}{12\\pi R^2}$$

$$\\sigma_B = \\frac{2Q/3}{4\\pi(2R)^2} = \\frac{Q}{24\\pi R^2}$$

$$\\frac{\\sigma_A}{\\sigma_B} = 2 = \\frac{2R}{R}$$

Again, smaller sphere → larger $\\sigma$.`
    },
    {
      id: 'ce7-mcq3',
      type: 'mcq' as const,
      question: 'After a charged sphere (radius $R$, charge $Q$) touches an uncharged sphere of radius $3R$, the charge on the smaller sphere is:',
      options: ['$Q/4$', '$Q/3$', '$Q/2$', '$3Q/4$'],
      correctAnswer: 0,
      explanation: 'Same potential: $Q_1/R = Q_2/(3R) \\implies Q_2 = 3Q_1$. Conservation: $Q_1 + 3Q_1 = Q \\implies Q_1 = Q/4$.'
    },
    {
      id: 'ce7-worked3',
      type: 'text' as const,
      content: `## Application 3: Electrostatic Pressure

There is a force per unit area (electrostatic pressure) on the surface of a conductor:

$$P = \\frac{\\sigma^2}{2\\epsilon_0} = \\frac{\\epsilon_0 E^2}{2}$$

### Derivation

The surface charge $\\sigma$ sits in the field of all other charges (not including itself). The field just outside is $E = \\sigma/\\epsilon_0$, and just inside is $0$. The average field at the surface:

$$E_{\\text{avg}} = \\frac{\\sigma}{2\\epsilon_0}$$

Force per unit area:

$$P = \\sigma E_{\\text{avg}} = \\frac{\\sigma^2}{2\\epsilon_0}$$

### Example

A sphere of radius $R = 0.10\\;\\text{m}$ charged to $V = 10^5\\;\\text{V}$.

$\\sigma = \\epsilon_0 V/R = (8.85\\times10^{-12})(10^5)/(0.10) = 8.85\\times10^{-6}\\;\\text{C/m}^2$

$P = \\sigma^2/(2\\epsilon_0) = (8.85\\times10^{-6})^2/(2\\times8.85\\times10^{-12}) = 4.42\\;\\text{Pa}$

This is tiny — about $4 \\times 10^{-5}\\;\\text{atm}$.`
    },
    {
      id: 'ce7-mcq4',
      type: 'mcq' as const,
      question: 'The electrostatic pressure on a conductor surface is proportional to:',
      options: ['$\\sigma^2$', '$\\sigma$', '$\\sigma^3$', '$1/\\sigma$'],
      correctAnswer: 0,
      explanation: '$P = \\sigma^2/(2\\epsilon_0)$. The pressure goes as the square of the surface charge density.'
    },
    {
      id: 'ce7-completion',
      type: 'text' as const,
      content: `### Topic Complete!

You've mastered **Conductors in Electrostatic Equilibrium** for AP Physics C: E&M:

| Part | Topic | Status |
|:---:|:---:|:---:|
| 1 | Fundamental properties | ✅ |
| 2 | $E = 0$ inside conductor | ✅ |
| 3 | Surface charge distribution | ✅ |
| 4 | Faraday cage | ✅ |
| 5 | Induced & image charges | ✅ |
| 6 | Problem-solving workshop | ✅ |
| 7 | Review & applications | ✅ |

> **Key Takeaway:** The four properties of conductors in equilibrium ($\\vec{E}=0$ inside, charge on surface, $E_n = \\sigma/\\epsilon_0$, equipotential) follow directly from the existence of free charges. The method of images is a powerful technique that exploits uniqueness to solve difficult boundary-value problems.`
    }
  ]
};
