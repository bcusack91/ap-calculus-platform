export const asvabSiMaterialsFastenersPart5Data = {
  topicSlug: 'asvab-si-materials-fasteners',
  sections: [
    {
      id: 'simf5-intro',
      type: 'text' as const,
      content: `# 🔩 Materials, Fasteners and Shop Processes

**Part 5 of 7 — Metals, Welding, Soldering and Finishing**

### Ferrous and nonferrous metals

**Ferrous** metals contain **iron**. Most are magnetic, and plain ones **rust**. **Nonferrous** metals contain little or no iron.

| Metal | Type | Key traits and uses |
|:---|:---|:---|
| **Cast iron** | ferrous | hard but **brittle**; engine blocks, vises, machine bases |
| **Mild (low-carbon) steel** | ferrous | tough, easy to bend and weld; frames, brackets, sheet metal |
| **High-carbon (tool) steel** | ferrous | can be hardened; chisels, drill bits, springs |
| **Stainless steel** | ferrous | chromium added so it **resists rust**; kitchens, medical tools |
| **Aluminum** | nonferrous | **light**, resists corrosion; aircraft, boats, truck parts |
| **Copper** | nonferrous | conducts electricity and heat very well; **wiring**, water pipe |
| **Brass** | nonferrous | copper + zinc; fittings, valves, hardware |
| **Bronze** | nonferrous | copper + tin; bearings, bushings, marine parts |

- **Galvanized steel** is coated with **zinc** to keep it from rusting.
- **Heat treating** (recognition level): **hardening** heats steel and cools it quickly; **tempering** reheats hardened steel to make it less brittle; **annealing** heats metal and cools it slowly to make it **softer** and easier to work.

### Sheet-metal gauge: bigger number, thinner metal

Sheet metal and wire are sized by **gauge**. The **higher** the gauge number, the **thinner** the metal. A $10$-gauge sheet is much thicker than a $22$-gauge sheet.

**Worked example.** A truck bed liner must resist dents; a heating duct just has to carry air. The liner gets a **low** gauge number (thick metal), and the duct gets a **high** gauge number (thin metal).`
    },
    {
      id: 'simf5-metals-check',
      type: 'multiple-choice' as const,
      content: '**Metals.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which of these metals is nonferrous?',
            options: ['Aluminum', 'Cast iron', 'Mild steel', 'Tool steel'],
            correctAnswer: 0,
            explanation: 'Aluminum contains no iron, so it is nonferrous. Cast iron and both steels are iron-based, so they are ferrous.'
          },
          {
            question: 'Which sheet of steel is the thickest?',
            options: ['12 gauge', '18 gauge', '22 gauge', '26 gauge'],
            correctAnswer: 0,
            explanation: 'With gauge numbers, smaller means thicker. Of these, 12 gauge is the thickest and 26 gauge is the thinnest.'
          },
          {
            question: 'A blacksmith heats a piece of hardened steel and lets it cool slowly so it becomes softer and easier to bend. What is this process called?',
            options: ['Annealing', 'Hardening', 'Galvanizing', 'Quenching'],
            correctAnswer: 0,
            explanation: 'Annealing means heating and cooling slowly to soften metal. Hardening and quenching cool it fast to make it harder, and galvanizing is a zinc coating.'
          }
        ]
      }
    },
    {
      id: 'simf5-joining',
      type: 'text' as const,
      content: `## Joining metal: solder, braze or weld

The key question is: **does the base metal melt?**

| Process | Heat | Does the base metal melt? | Filler | Typical use |
|:---|:---|:---:|:---|:---|
| **Soldering** | lowest | **no** | solder (a tin alloy) | electronics, copper water pipe, sheet-metal seams |
| **Brazing** | higher | **no** | brass or bronze rod | stronger joints, joining unlike metals |
| **Welding** | highest | **yes**, the pieces fuse | electrode or filler rod of the same kind of metal | structural steel, vehicle frames, heavy repair |

- **Flux** cleans the metal and keeps oxygen away so the filler flows and sticks. Electronics use **rosin-core** solder; the acid flux used for plumbing would corrode circuit boards.
- In soldering and brazing the filler is drawn into the joint like water into a sponge, so the parts must be **clean and tight-fitting**.

### Kinds of welding (recognition level)

| Welding type | How it works |
|:---|:---|
| **Arc (stick) welding** | an electric arc melts a flux-coated electrode rod into the joint |
| **MIG welding** | a wire electrode feeds continuously through a gun, shielded by gas; fast and common in shops |
| **TIG welding** | a tungsten electrode makes the arc and a separate filler rod is added by hand; precise, used on aluminum and stainless steel |
| **Oxyacetylene (gas)** | a torch burns oxygen and acetylene; can weld, braze, heat and **cut** steel |
| **Spot welding** | electric current through two clamped sheets makes small round welds, as on car bodies |

> **Welding safety:** an arc gives off intense ultraviolet light that burns your eyes and skin. Wear a **welding helmet** with the correct shade of lens (ordinary safety glasses are not enough), leather gloves and sleeves, and work with ventilation and a fire extinguisher nearby.`,
      figure: {
        svg: '<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="14" y="44" width="80" height="16"/><rect x="66" y="64" width="80" height="16"/><rect x="174" y="56" width="58" height="18"/><rect x="250" y="56" width="58" height="18"/></g><g class="fig-accent"><rect x="66" y="60" width="28" height="4" fill="currentColor"/><path d="M232 56 Q241 44 250 56 L250 74 Q241 84 232 74 Z" fill="currentColor"/></g><g font-size="12" fill="currentColor" text-anchor="middle"><text x="80" y="104">Soldered or brazed lap joint:</text><text x="80" y="120">thin filler, base metal unmelted</text><text x="241" y="104">Welded butt joint:</text><text x="241" y="120">edges melted and fused</text></g></svg>',
        alt: 'Two joints side by side. Left: two overlapping metal strips with a thin layer of filler metal between them; the strips themselves are unchanged. Right: two strips butted end to end with a rounded weld bead where their edges have melted together into one piece.',
        caption: 'Figure 1. Solder and braze joints use a filler between unmelted parts; a weld melts the parts together.'
      }
    },
    {
      id: 'simf5-joining-check',
      type: 'multiple-choice' as const,
      content: '**Joining processes.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which joining process melts the edges of the base metal so the two pieces fuse into one?',
            options: ['Welding', 'Brazing', 'Soldering', 'Riveting'],
            correctAnswer: 0,
            explanation: 'Welding melts the base metal itself. Soldering and brazing melt only a filler metal, and riveting is a mechanical fastener with no melting at all.'
          },
          {
            question: 'A technician repairing a circuit board should use which kind of solder?',
            options: ['Rosin-core solder', 'Acid-core solder', 'Brass brazing rod', 'Flux-coated arc rod'],
            correctAnswer: 0,
            explanation: 'Rosin flux cleans the joint without leaving corrosive residue on electronics. Acid flux is for plumbing and would eat at the circuit board, and a brazing rod or welding electrode needs far more heat than a board can survive.'
          },
          {
            question: 'Why are ordinary safety glasses not enough protection for arc welding?',
            options: ['Clear lenses lack the dark filter the arc\'s light requires', 'Safety glasses fog up from the heat and block the view', 'Sparks melt plastic safety glasses on contact', 'Clear lenses magnify the arc and make it brighter'],
            correctAnswer: 0,
            explanation: 'An arc gives off intense ultraviolet, visible and infrared light. Clear safety glasses stop flying bits but have no dark filter, so the glare can burn the eyes ("arc eye"). A welding helmet\'s shaded filter lens cuts all of it down and also shields the face.'
          }
        ]
      }
    },
    {
      id: 'simf5-finishing',
      type: 'text' as const,
      content: `## Sanding and finishing

### Sandpaper grit: bigger number, finer paper

The grit number counts the abrasive particles per area, so a **higher** number means **smaller** particles and a **finer**, smoother cut.

| Grit | Grade | Use |
|:---|:---|:---|
| $40$ to $60$ | coarse | fast removal, stripping old finish |
| $80$ to $120$ | medium | general smoothing |
| $150$ to $180$ | fine | before staining or painting |
| $220$ and up | very fine | between coats of finish |

- Work from **coarse to fine**, and don't skip too many grades.
- Sand **with the grain**. Sanding across the grain leaves scratches that stain makes even more obvious.
- Wipe off the dust with a **tack cloth** before applying any finish.

### Finishes

| Finish | What it does |
|:---|:---|
| **Stain** | soaks in and **colors** the wood; gives little protection by itself |
| **Varnish / polyurethane** | clear, hard protective film |
| **Shellac, lacquer** | clear finishes that dry fast |
| **Primer** | first coat under paint: seals the surface and helps paint **stick** |
| **Paint** | colored protective coating over primer |

**Worked example.** You're refinishing a table: strip the old finish, sand with **80**, then **120**, then **180** grit, wipe with a tack cloth, stain, and protect with **polyurethane**.`
    },
    {
      id: 'simf5-finish-dd',
      type: 'dropdown-select' as const,
      content: '**Sanding and finishing.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'Of these, the finest sandpaper is:',
            options: ['220 grit', '120 grit', '80 grit', '60 grit'],
            correctAnswer: 0
          },
          {
            label: 'To avoid visible scratches, sand wood:',
            options: ['with the grain', 'across the grain', 'in tight circles', 'diagonally only'],
            correctAnswer: 0
          },
          {
            label: 'Before painting bare wood or metal, apply a:',
            options: ['primer', 'stain', 'tack cloth', 'flux'],
            correctAnswer: 0
          },
          {
            label: 'To color wood while letting the grain show, use a:',
            options: ['stain', 'primer', 'paint', 'filler'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['220 grit', 'with the grain', 'primer', 'stain'],
        hint1: 'Higher grit number = smaller particles.',
        hint2: 'Scratches that run with the fibers hide in the grain.',
        hint3: 'The first coat that helps paint stick.',
        explanation: 'Higher grit is finer, so 220 is the finest here. Sanding with the grain hides scratches. Primer seals the surface and helps paint stick. Stain soaks in and colors wood while the grain still shows.'
      }
    },
    {
      id: 'simf5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- **Ferrous** = contains iron (cast iron, steel); **nonferrous** = aluminum, copper, brass, bronze
- **Cast iron** is brittle; **stainless** resists rust; **galvanized** = zinc coating; **annealing** softens
- Sheet-metal **gauge**: higher number = **thinner**
- **Soldering** (lowest heat) and **brazing** do not melt the base metal; **welding** does. **Flux** helps filler flow; **rosin-core** for electronics
- Arc welding needs a **welding helmet**, not safety glasses
- Sandpaper: higher grit = **finer**; go coarse to fine, **with the grain**; **primer** before paint, **stain** colors wood

> **Up Next:** Part 6 — test strategy and the traps in materials and fastener questions.`
    }
  ]
};
