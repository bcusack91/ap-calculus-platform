export const asvabSiMaterialsFastenersPart4Data = {
  topicSlug: 'asvab-si-materials-fasteners',
  sections: [
    {
      id: 'simf4-intro',
      type: 'text' as const,
      content: `# 🔩 Materials, Fasteners and Shop Processes

**Part 4 of 7 — Wood, Lumber and Building Materials**

### Hardwood and softwood

The names describe the **tree**, not how hard the wood feels.

| | Hardwood | Softwood |
|:---|:---|:---|
| Tree type | broad-leaf trees that usually drop their leaves | conifers (needles and cones) |
| Examples | oak, maple, walnut, cherry, ash, hickory | pine, fir, spruce, cedar, redwood |
| Typical use | furniture, flooring, cabinets, tool handles | **framing lumber**, sheathing, trim, decks |

- **Grain** is the direction of the wood fibers. Wood splits easily **along** the grain and is strongest along its length.
- Wood **shrinks and swells** with moisture. Lumber that dries unevenly **warps**: it can cup, bow or twist.
- **Pressure-treated** lumber is soaked with chemicals that resist rot and insects, for ground contact and outdoor framing. **Cedar** and **redwood** resist rot naturally.

### Engineered panels

| Panel | Made of | Notes |
|:---|:---|:---|
| **Plywood** | thin veneers (plies) glued with the grain of each layer at **right angles** to the next | strong in both directions, resists splitting and warping |
| **OSB** (oriented strand board) | large wood strands pressed with glue | wall and roof sheathing, subfloors |
| **Particleboard** | sawdust and chips with glue | cheap, weak when wet, holds screws poorly |
| **MDF** (medium-density fiberboard) | fine wood fibers | very smooth, paints well, heavy |

**Worked example.** Why does plywood resist splitting better than a solid board of the same thickness? Its plies cross at right angles, so no single grain direction runs all the way through. A crack that starts along one layer's grain is stopped by the next layer.`
    },
    {
      id: 'simf4-lumber',
      type: 'text' as const,
      content: `## Lumber sizes: nominal versus actual

Lumber is named by its rough-sawn size (**nominal**). Drying and planing make it smaller (**actual**).

| Nominal | Actual (inches) |
|:---|:---|
| $1 \\times 6$ | $\\frac{3}{4} \\times 5\\frac{1}{2}$ |
| $2 \\times 4$ | $1\\frac{1}{2} \\times 3\\frac{1}{2}$ |
| $2 \\times 6$ | $1\\frac{1}{2} \\times 5\\frac{1}{2}$ |
| $2 \\times 8$ | $1\\frac{1}{2} \\times 7\\frac{1}{4}$ |
| $4 \\times 4$ | $3\\frac{1}{2} \\times 3\\frac{1}{2}$ |

**Pattern:** a "2-by" is $1\\frac{1}{2}$ inches thick; widths up to 6 lose $\\frac{1}{2}$ inch.

### Board feet

A **board foot** is $1$ inch $\\times$ $12$ inches $\\times$ $12$ inches $= 144$ cubic inches of wood (using nominal sizes).

$$\\text{board feet} = \\frac{\\text{thickness (in.)} \\times \\text{width (in.)} \\times \\text{length (ft)}}{12}$$

**Worked example.** A $2 \\times 8$ that is $6$ feet long contains $\\frac{2 \\times 8 \\times 6}{12} = \\frac{96}{12} = 8$ board feet.

### Framing a wall

- **Studs** (usually $2 \\times 4$ or $2 \\times 6$) stand vertically, normally **16 inches on center** (measured center to center), sometimes 24.
- The **bottom (sole) plate** and **top plate** run along the floor and ceiling. A **header** spans the top of a door or window opening. **Joists** hold up floors and ceilings; **rafters** hold up the roof.
- **Drywall** (gypsum board) is screwed or nailed to the studs, and its seams are covered with tape and joint compound.

**Worked example.** A wall $12$ feet long gets studs 16 inches on center. $12$ ft $= 144$ in., and $144 \\div 16 = 9$ spaces. Nine spaces need **10 studs** (one more stud than spaces).`,
      figure: {
        svg: '<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect x="20" y="20" width="160" height="80" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><g class="fig-accent"><rect x="30" y="30" width="140" height="60" fill="none" stroke="currentColor" stroke-width="2.5"/></g><text x="100" y="64" font-size="12" fill="currentColor" text-anchor="middle">actual 1 1/2 × 3 1/2</text><text x="100" y="118" font-size="12" fill="currentColor" text-anchor="middle">nominal 2 × 4 (dashed)</text><text x="196" y="50" font-size="12" fill="currentColor">Drying and planing</text><text x="196" y="66" font-size="12" fill="currentColor">trim about 1/2 inch</text><text x="196" y="82" font-size="12" fill="currentColor">off each dimension.</text></svg>',
        alt: 'End view of a 2 by 4. A dashed rectangle 2 by 4 inches shows the nominal size; a smaller solid rectangle inside it, 1 1/2 by 3 1/2 inches, shows the actual size.',
        caption: 'Figure 1. A nominal 2 × 4 is actually $1\\frac{1}{2}$ in. by $3\\frac{1}{2}$ in.'
      }
    },
    {
      id: 'simf4-lumber-input',
      type: 'input-boxes' as const,
      content: `**Lumber math.** ✍️

**1)** The actual width, in inches, of a nominal $2 \\times 6$ (decimal or fraction):

**2)** The board feet in a $2 \\times 6$ that is $12$ feet long (number only):

**3)** A wall $16$ feet long is framed with studs $16$ inches on center. How many studs does it need, counting both ends? (number only)`,
      exercise: {
        boxes: 3,
        correctAnswers: ['5.5', '12', '13'],
        hint1: 'Widths up to 6 inches lose half an inch.',
        hint2: '(2 × 6 × 12) ÷ 12.',
        hint3: '16 ft = 192 in.; 192 ÷ 16 = 12 spaces, and spaces + 1 = studs.',
        explanation: '(1) $5\\frac{1}{2} = 5.5$ in. (2) $\\frac{2 \\times 6 \\times 12}{12} = 12$ board feet. (3) $192 \\div 16 = 12$ spaces, so $13$ studs.'
      }
    },
    {
      id: 'simf4-materials-check',
      type: 'multiple-choice' as const,
      content: '**Wood and panels.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which of these woods is a softwood commonly sold as framing lumber?',
            options: ['Douglas fir', 'Red oak', 'Hard maple', 'Black walnut'],
            correctAnswer: 0,
            explanation: 'Fir is a conifer, so it is a softwood, and it is one of the most common framing lumbers. Oak, maple and walnut are hardwoods used for furniture and flooring.'
          },
          {
            question: 'Why are the layers of plywood glued with their grain running at right angles to each other?',
            options: ['It makes the panel strong in both directions', 'It lets the panel bend easily into curves', 'It makes the panel much lighter than solid wood', 'It lets the panel soak up paint evenly'],
            correctAnswer: 0,
            explanation: 'Cross-graining gives plywood strength and stability in both directions and stops cracks from running along one grain line. It is not chosen for flexibility, weight or paint absorption.'
          }
        ]
      }
    },
    {
      id: 'simf4-concrete',
      type: 'text' as const,
      content: `## Concrete, mortar and wood joints

### Concrete and mortar

- **Concrete** = **cement** + **sand** (fine aggregate) + **gravel** (coarse aggregate) + **water**. The cement and water react chemically and harden around the aggregate.
- Concrete **cures**, it does not simply dry. Keeping it **moist** for the first several days makes it stronger, and it keeps gaining strength for weeks.
- Concrete is very strong in **compression** (being squeezed) and weak in **tension** (being pulled), so slabs and beams get steel **rebar** or wire mesh.
- **Mortar** (cement, sand, lime and water) bonds bricks and concrete blocks together.

### Wood joints

| Joint | What it is | Typical use |
|:---|:---|:---|
| **Butt** | one board's end against another's face or edge | simplest and weakest; needs nails, screws or glue blocks |
| **Miter** | two ends cut at $45^\\circ$ meeting at a corner | picture frames, door trim |
| **Dado** | a groove cut **across** the face of a board | shelves set into bookcase sides |
| **Rabbet** | an L-shaped notch along an **edge** | cabinet backs, drawer bottoms |
| **Lap** | two boards overlap, each cut to half thickness | frames |
| **Mortise and tenon** | a tongue (tenon) fits into a hole (mortise) | chairs, tables, doors: very strong |
| **Dovetail** | flared, interlocking "tails" and "pins" | drawer fronts: resists being pulled apart |
| **Tongue and groove** | a ridge on one edge fits a slot in the next | flooring, paneling |`
    },
    {
      id: 'simf4-joints-fig',
      type: 'multiple-choice' as const,
      content: '**Four joints.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-muted" stroke="currentColor" stroke-width="1"><line x1="160" y1="6" x2="160" y2="204"/><line x1="6" y1="105" x2="314" y2="105"/></g><g stroke="currentColor" stroke-width="2" fill="none"><path d="M24 20 L124 20 L124 40 L44 40 L44 92 L24 92 Z"/><line x1="24" y1="20" x2="44" y2="40"/><path d="M176 66 L222 66 L222 74 L238 74 L238 66 L298 66 L298 90 L176 90 Z"/><rect x="222" y="18" width="16" height="56"/><path d="M28 140 L108 140 L108 154 L132 154 L132 184 L28 184 Z"/><rect x="176" y="168" width="120" height="22"/><polygon points="188,168 200,168 206,132 182,132"/><polygon points="224,168 236,168 242,132 218,132"/><polygon points="260,168 272,168 278,132 254,132"/></g><g font-size="14" font-weight="bold" fill="currentColor"><text x="134" y="96">1</text><text x="290" y="24">2</text><text x="134" y="198">3</text><text x="168" y="124">4</text></g></svg>',
        alt: 'Four wood joints. Joint 1: two boards meet at a corner, and the line where they meet runs diagonally across the corner at 45 degrees. Joint 2: a side view of a board with a square groove cut across its top face, and the end of a second board standing upright in the groove. Joint 3: the end of a board with an L-shaped step cut out along its top edge. Joint 4: a board with three flared tails sticking up, each wider at its tip than at its base.',
        caption: 'Figure 2. Four wood joints, numbered 1 to 4.'
      },
      exercise: {
        questions: [
          {
            question: 'The figure shows (1) a corner whose seam runs diagonally at 45 degrees, (2) an upright board set into a groove cut across another board\'s face, (3) a board with an L-shaped step along one edge, and (4) a board with flared tails. Which is a dado joint?',
            options: ['Joint 2', 'Joint 3', 'Joint 1', 'Joint 4'],
            correctAnswer: 0,
            explanation: 'A dado is a groove cut across the face of a board, like joint 2, where a shelf end sits in the groove. Joint 3 is a rabbet (a notch along an edge), joint 1 is a miter and joint 4 is a dovetail.'
          },
          {
            question: 'Using the same figure, which joint is the classic choice for a drawer front because its interlocking shape resists being pulled apart?',
            options: ['Joint 4', 'Joint 1', 'Joint 2', 'Joint 3'],
            correctAnswer: 0,
            explanation: 'Joint 4 shows dovetail tails. Because each tail is wider at its end, it cannot slide out of its matching socket in the pulling direction, which is exactly the force on a drawer front.'
          }
        ]
      }
    },
    {
      id: 'simf4-concrete-check',
      type: 'multiple-choice' as const,
      content: '**Concrete and framing.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Why is steel rebar placed inside a concrete beam or slab?',
            options: ['Concrete is weak when pulled, and steel carries the tension', 'Rebar helps the concrete dry out faster after the pour', 'Rebar keeps the concrete from freezing in cold weather', 'Steel makes the concrete lighter and easier to handle'],
            correctAnswer: 0,
            explanation: 'Concrete handles compression well but cracks under tension. Steel bars carry the tension, so together they make a strong beam or slab. Rebar does not speed curing, prevent freezing or reduce weight.'
          },
          {
            question: 'A freshly poured sidewalk is covered and sprinkled with water for several days. Why?',
            options: ['Moist curing makes the concrete stronger', 'Water washes the extra cement off the top', 'Wet concrete can be reshaped for a week', 'Water keeps the gravel from sinking down'],
            correctAnswer: 0,
            explanation: 'Concrete hardens by a chemical reaction between cement and water. Keeping it moist lets the reaction continue, so it cures stronger and cracks less. It is not about washing, reshaping or gravel settling.'
          }
        ]
      }
    },
    {
      id: 'simf4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Hardwood** = broad-leaf trees (oak, maple); **softwood** = conifers (pine, fir), used for framing
- **Plywood** plies cross at right angles: strong both ways, resists splitting; OSB = sheathing; particleboard is weak when wet
- Nominal $2 \\times 4$ = actual $1\\frac{1}{2} \\times 3\\frac{1}{2}$; board feet $= \\frac{T \\times W \\times L_{\\text{ft}}}{12}$
- Studs **16 in. on center**; studs = spaces + 1
- **Concrete** = cement + sand + gravel + water; it **cures** (keep it moist); rebar carries **tension**
- Joints: **miter** $45^\\circ$, **dado** groove across the face, **rabbet** notch on the edge, **mortise and tenon** strong, **dovetail** resists pulling apart

> **Up Next:** Part 5 — metals, welding, soldering and finishing.`
    }
  ]
};
