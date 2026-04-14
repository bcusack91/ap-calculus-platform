export const physCEMPotEnergyPart3Data = {
  topicSlug: "potential-energy-physics-c-em",
  sections: [
    {
      id: 'pe3-intro',
      type: 'text' as const,
      content: `# Potential Energy of Charge Configurations

**Part 3 of 7 — Multi-Charge Systems**

The total potential energy of a system of point charges is the sum over all unique pairs:

$$U = \\sum_{i < j} \\frac{kq_i q_j}{r_{ij}}$$

### Building Up a Configuration

1. Bring $q_1$ from $\\infty$: $W_1 = 0$ (no field yet).
2. Bring $q_2$ from $\\infty$: $W_2 = kq_1 q_2/r_{12}$.
3. Bring $q_3$ from $\\infty$: $W_3 = kq_1 q_3/r_{13} + kq_2 q_3/r_{23}$.

$$U = W_1 + W_2 + W_3 = k\\left(\\frac{q_1 q_2}{r_{12}} + \\frac{q_1 q_3}{r_{13}} + \\frac{q_2 q_3}{r_{23}}\\right)$$

This works for any number of charges — each pair contributes once.`
    },
    {
      id: 'pe3-mcq1',
      type: 'mcq' as const,
      question: 'Four point charges require how many pair terms in the potential energy sum?',
      options: ['$6$', '$4$', '$8$', '$12$'],
      correctAnswer: 0,
      explanation: 'The number of unique pairs from $N$ charges is $\\binom{N}{2} = N(N-1)/2$. For $N=4$: $4(3)/2 = 6$ pairs.'
    },
    {
      id: 'pe3-triangle',
      type: 'text' as const,
      content: `## Worked Example: Equilateral Triangle

Three charges $+Q$ at vertices of an equilateral triangle with side $a$.

$$U = k\\left(\\frac{Q^2}{a} + \\frac{Q^2}{a} + \\frac{Q^2}{a}\\right) = \\frac{3kQ^2}{a}$$

### Energy to Disassemble

The energy required to move all three charges to infinity is:

$$W_{\\text{disassemble}} = -U = -\\frac{3kQ^2}{a}$$

Wait — this is negative! That can't be right for positive charges that repel.

Actually, $U > 0$ means the system has positive stored energy. To disassemble (move to infinity), you release energy: the charges fly apart on their own. The work done by an external agent against the electric force would be negative (the agent holds back while the charges repel).

The energy **released** when the charges fly to infinity is $U = 3kQ^2/a > 0$.`
    },
    {
      id: 'pe3-mcq2',
      type: 'mcq' as const,
      question: 'Charges $+Q$, $+Q$, $-Q$ at vertices of an equilateral triangle (side $a$). The PE is:',
      options: [
        '$-kQ^2/a$',
        '$+kQ^2/a$',
        '$+3kQ^2/a$',
        '$0$'
      ],
      correctAnswer: 0,
      explanation: '$U = k[(Q)(Q)/a + (Q)(-Q)/a + (Q)(-Q)/a] = kQ^2/a(1 - 1 - 1) = -kQ^2/a$.'
    },
    {
      id: 'pe3-square',
      type: 'text' as const,
      content: `## Worked Example: Square Configuration

Four charges at corners of a square of side $a$: $+Q$ at top-left and bottom-right, $-Q$ at top-right and bottom-left (alternating signs).

The diagonal length is $a\\sqrt{2}$.

### Pairs

| Pair | Charges | Distance | Contribution |
|:---:|:---:|:---:|:---:|
| TL–TR | $(+Q)(-Q)$ | $a$ | $-kQ^2/a$ |
| TL–BL | $(+Q)(-Q)$ | $a$ | $-kQ^2/a$ |
| TL–BR | $(+Q)(+Q)$ | $a\\sqrt{2}$ | $+kQ^2/(a\\sqrt{2})$ |
| TR–BL | $(-Q)(-Q)$ | $a\\sqrt{2}$ | $+kQ^2/(a\\sqrt{2})$ |
| TR–BR | $(-Q)(+Q)$ | $a$ | $-kQ^2/a$ |
| BL–BR | $(-Q)(+Q)$ | $a$ | $-kQ^2/a$ |

$$U = \\frac{kQ^2}{a}\\left(-4 + \\frac{2}{\\sqrt{2}}\\right) = \\frac{kQ^2}{a}(-4 + \\sqrt{2})$$

$$U = \\frac{kQ^2}{a}(\\sqrt{2} - 4) \\approx -\\frac{2.59\\,kQ^2}{a}$$

The configuration is bound ($U < 0$).`
    },
    {
      id: 'pe3-mcq3',
      type: 'mcq' as const,
      question: 'Four identical charges $+Q$ at corners of a square of side $a$. The total PE is:',
      options: [
        '$kQ^2(4 + \\sqrt{2})/a$',
        '$4kQ^2/a$',
        '$6kQ^2/a$',
        '$kQ^2(4 - \\sqrt{2})/a$'
      ],
      correctAnswer: 0,
      explanation: 'Four side pairs: $4 \\times kQ^2/a$. Two diagonal pairs: $2 \\times kQ^2/(a\\sqrt{2}) = \\sqrt{2}kQ^2/a$. Total: $kQ^2(4 + \\sqrt{2})/a$.'
    },
    {
      id: 'pe3-continuous',
      type: 'text' as const,
      content: `## Transition to Continuous Distributions

For continuous charge distributions, the sum becomes an integral. The self-energy of a configuration:

$$U = \\frac{1}{2}\\int \\rho(\\vec{r})V(\\vec{r})\\,dV$$

The factor of $1/2$ avoids double-counting pairs (each pair $ij$ appears twice in the unrestricted sum).

### Worked Example: Uniformly Charged Sphere

A sphere of radius $R$ with total charge $Q$ and uniform charge density $\\rho = 3Q/(4\\pi R^3)$.

Build the sphere shell by shell. When the sphere has radius $r$, its charge is $q(r) = Q(r/R)^3$ and its surface potential is $V = kq(r)/r$.

Bringing an additional shell of charge $dq = \\rho \\cdot 4\\pi r^2\\,dr = (3Q/R^3)r^2\\,dr$:

$$dU = V\\,dq = \\frac{kQ(r/R)^3}{r}\\cdot\\frac{3Q}{R^3}r^2\\,dr = \\frac{3kQ^2}{R^6}r^4\\,dr$$

$$U = \\frac{3kQ^2}{R^6}\\int_0^R r^4\\,dr = \\frac{3kQ^2}{R^6}\\cdot\\frac{R^5}{5} = \\frac{3kQ^2}{5R}$$

$$\\boxed{U = \\frac{3Q^2}{20\\pi\\epsilon_0 R}}$$`
    },
    {
      id: 'pe3-mcq4',
      type: 'mcq' as const,
      question: 'The self-energy of a uniformly charged sphere scales as:',
      options: ['$Q^2/R$', '$Q/R$', '$Q^2 R$', '$Q^2/R^2$'],
      correctAnswer: 0,
      explanation: '$U = 3kQ^2/(5R) \\propto Q^2/R$. More charge or smaller radius means more energy — consistent with compressing like charges.'
    }
  ]
};
