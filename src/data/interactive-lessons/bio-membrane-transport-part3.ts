export const bioMembraneTransportPart3Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'mt3-intro',
      type: 'text' as const,
      content: `
## Osmosis — Water Follows the Solute

**Part 3 of 7**

Osmosis is the net movement of **water** across a selectively permeable membrane from a region of **lower solute concentration** (higher water concentration) to a region of **higher solute concentration** (lower water concentration).

Water moves through the membrane via:
- Slow diffusion directly through the lipid bilayer
- Rapid flow through **aquaporins** (water-specific channel proteins)

Osmosis is technically a special case of facilitated diffusion (when aquaporins are involved), but it is traditionally treated as a distinct transport category due to its biological importance.
      `
    },
    {
      id: 'mt3-tonicity',
      type: 'text' as const,
      content: `
### Tonicity: Predicting Water Movement

**Tonicity** describes the effect of a surrounding solution on cell volume.  It depends on the concentration of **non-penetrating solutes** (solutes that cannot cross the membrane):

| Solution Type | Relative Solute Concentration | Water Movement | Effect on Cell |
|--------------|------------------------------|----------------|----------------|
| **Hypertonic** | Higher solute outside cell | Water moves OUT | Cell shrinks (animal: crenation; plant: plasmolysis) |
| **Hypotonic** | Lower solute outside cell | Water moves IN | Cell swells (animal: may lyse; plant: becomes turgid) |
| **Isotonic** | Equal solute on both sides | No net water movement | Cell volume unchanged |

> **Critical Distinction:** Tonicity depends only on **non-penetrating** solutes.  A solution with high urea (which freely crosses membranes) is technically hyperosmotic but effectively isotonic — urea equilibrates and no lasting water movement occurs.

### Animal Cells vs. Plant Cells in Different Solutions

**In hypotonic solution:**
- **Animal cell:** Water enters, cell swells and may burst (**lysis**)
- **Plant cell:** Water enters, cell swells until the rigid **cell wall** exerts back-pressure (**turgor pressure**) that stops further water entry — the cell becomes **turgid** (this is the ideal state for plant cells)

**In hypertonic solution:**
- **Animal cell:** Water leaves, cell shrinks and wrinkles (**crenation**)
- **Plant cell:** Water leaves, the plasma membrane pulls away from the cell wall (**plasmolysis**) — this causes wilting

**In isotonic solution:**
- **Animal cell:** No net change — cells are maintained (this is why IV fluids are isotonic saline, 0.9% NaCl)
- **Plant cell:** Cell is flaccid (limp) — not ideal; plants need turgor pressure for structural support
      `
    },
    {
      id: 'mt3-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Osmosis and Tonicity
      `,
      exercise: {
        questions: [
          {
            question: 'A plant cell is placed in a hypertonic solution. What happens?',
            options: [
              'The cell becomes turgid as water rushes in',
              'The cell undergoes plasmolysis — water leaves, and the plasma membrane pulls away from the cell wall',
              'The cell wall dissolves',
              'Nothing — plant cells are not affected by tonicity'
            ],
            correctAnswer: 1,
            explanation: 'In a hypertonic solution, water moves out of the cell by osmosis. The cytoplasm shrinks, but the rigid cell wall maintains its shape. The plasma membrane pulls away from the cell wall in a process called plasmolysis, which is visible under a microscope.'
          },
          {
            question: 'Why does an animal cell placed in pure water burst (lyse), but a plant cell in the same solution does not?',
            options: [
              'Animal cells absorb more water than plant cells',
              'Plant cells have a rigid cell wall that exerts turgor pressure, preventing over-expansion; animal cells lack a cell wall and cannot resist the osmotic influx',
              'Plant cells actively pump water out',
              'Animal cells have more aquaporins'
            ],
            correctAnswer: 1,
            explanation: 'Both cells experience water influx in a hypotonic environment. The plant cell wall is strong enough to resist expansion, generating turgor pressure that opposes further water entry. Animal cells lack a cell wall and continue to swell until the membrane ruptures (lysis).'
          },
          {
            question: 'IV (intravenous) fluids given to patients are typically isotonic (0.9% NaCl). Why is this important?',
            options: [
              'Hypertonic fluids would cause white blood cells to swell and burst',
              'Isotonic fluids prevent net water movement across red blood cell membranes, avoiding both lysis (hypotonic) and crenation (hypertonic)',
              'Isotonic fluids contain more nutrients',
              'Hypertonic fluids would promote bacterial growth'
            ],
            correctAnswer: 1,
            explanation: 'If IV fluids were hypotonic, water would enter red blood cells, causing them to swell and lyse. If hypertonic, water would leave, causing crenation. Isotonic fluids (0.9% NaCl matches blood plasma osmolarity) prevent net water movement and maintain normal cell shape.'
          }
        ]
      }
    },
    {
      id: 'mt3-osmotic',
      type: 'text' as const,
      content: `
### Water Potential (for AP Biology)

The AP Biology curriculum uses the concept of **water potential** (\\(\\Psi\\), psi) to quantitatively predict the direction of water movement:

$$\\Psi = \\Psi_s + \\Psi_p$$

Where:
- \\(\\Psi_s\\) = **solute potential** (also called osmotic potential) — always \\(\\leq 0\\); more solute makes it more negative
- \\(\\Psi_p\\) = **pressure potential** — can be positive (turgor in plant cells), zero, or negative (tension in xylem)

**Water moves from HIGH water potential to LOW water potential.**

**Solute potential formula:**

$$\\Psi_s = -iCRT$$

Where:
- \\(i\\) = ionization constant (number of particles the solute dissociates into; NaCl = 2, glucose = 1)
- \\(C\\) = molar concentration (mol/L)
- \\(R\\) = ideal gas constant (0.0831 L bar/mol K)
- \\(T\\) = temperature in Kelvin

**Rules for water potential:**
1. Pure water in an open container: \\(\\Psi = 0\\) (maximum water potential)
2. Adding solute: \\(\\Psi_s\\) becomes more negative, \\(\\Psi\\) decreases
3. Adding pressure: \\(\\Psi_p\\) increases, \\(\\Psi\\) increases
4. Water always moves from higher \\(\\Psi\\) to lower \\(\\Psi\\)
      `
    },
    {
      id: 'mt3-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Water Potential
      `,
      exercise: {
        questions: [
          {
            question: 'A plant cell has a solute potential of -0.8 MPa and a pressure potential of 0.3 MPa. What is the water potential?',
            options: [
              '-1.1 MPa',
              '-0.5 MPa',
              '0.5 MPa',
              '1.1 MPa'
            ],
            correctAnswer: 1,
            explanation: 'Water potential = solute potential + pressure potential = (-0.8) + (0.3) = -0.5 MPa. Water would move toward this cell from any source with a water potential higher than -0.5 MPa.'
          },
          {
            question: 'If the same cell is placed in pure water (water potential = 0), which direction will water move?',
            options: [
              'Out of the cell (cell has higher water potential)',
              'Into the cell (pure water has higher water potential than the cell)',
              'No movement (they are equal)',
              'It depends on temperature only'
            ],
            correctAnswer: 1,
            explanation: 'The cell has a water potential of -0.5 MPa. Pure water has a water potential of 0. Water moves from high (0) to low (-0.5), so water enters the cell. This will continue until turgor pressure increases enough to equalize the water potentials.'
          }
        ]
      }
    },
    {
      id: 'mt3-input',
      type: 'input-boxes' as const,
      content: `
### Key Terms — Osmosis
      `,
      exercise: {
        questions: [
          {
            question: 'The term for a solution with a higher solute concentration than the cell:',
            answer: 'hypertonic',
            acceptableAnswers: ['hypertonic', 'Hypertonic'],
            placeholder: 'e.g. isotonic'
          },
          {
            question: 'The process where the plant cell membrane pulls away from the cell wall due to water loss:',
            answer: 'plasmolysis',
            acceptableAnswers: ['plasmolysis', 'Plasmolysis'],
            placeholder: 'e.g. lysis'
          },
          {
            question: 'The symbol used for water potential:',
            answer: 'psi',
            acceptableAnswers: ['psi', 'Psi', 'PSI', 'Ψ', 'ψ'],
            placeholder: 'e.g. delta G'
          }
        ]
      }
    },
    {
      id: 'mt3-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Osmosis
      `,
      exercise: {
        questions: [
          {
            question: 'A red blood cell is placed in a solution of 10% NaCl. What will happen?',
            options: [
              'The cell will swell and lyse',
              'The cell will crenate (shrink) because the solution is hypertonic, drawing water out by osmosis',
              'Nothing will happen',
              'The cell will become turgid'
            ],
            correctAnswer: 1,
            explanation: '10% NaCl is highly hypertonic compared to the ~0.9% NaCl of blood plasma. Water will leave the red blood cell by osmosis, causing it to shrivel and crenate.'
          },
          {
            question: 'For a turgid plant cell, the pressure potential is positive and opposes further water entry. At full turgor, what is the relationship between water potential of the cell and its surroundings?',
            options: [
              'Cell water potential is lower than surroundings',
              'Cell water potential equals the water potential of the surroundings — no net water movement',
              'Cell water potential is higher than surroundings',
              'Pressure potential equals zero'
            ],
            correctAnswer: 1,
            explanation: 'At full turgor, the positive pressure potential has increased the total water potential of the cell until it equals the water potential of the surrounding solution. At this point, no net water movement occurs — the system is at equilibrium.'
          }
        ]
      }
    }
  ]
};