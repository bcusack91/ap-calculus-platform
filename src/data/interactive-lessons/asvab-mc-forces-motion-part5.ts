export const asvabMcForcesMotionPart5Data = {
  topicSlug: 'asvab-mc-forces-motion',
  sections: [
    {
      id: 'mcf5-intro',
      type: 'text' as const,
      content: `# ⚙️ Forces, Work and Energy

**Part 5 of 7 — Pressure and Properties of Materials**

### Pressure is force spread over an area

$$\\text{Pressure} = \\frac{\\text{Force}}{\\text{Area}}$$

With force in pounds and area in square inches, pressure is in **pounds per square inch (psi)**.

- The **same force** on a **smaller area** makes **more pressure**: a sharp knife, a nail point, a narrow chisel edge.
- The **same force** on a **larger area** makes **less pressure**: snowshoes, wide tires on sand, a tank's long tracks, a board laid across thin ice.

**Worked example.** A $180$-lb soldier stands in boots with a total sole area of $60$ square inches. Pressure on the ground $= 180 \\div 60 = 3$ psi. On snowshoes with $360$ square inches of area, it drops to $180 \\div 360 = 0.5$ psi, so she does not sink.

### Gas pressure

- A gas fills its whole container and pushes on every wall.
- Squeeze a gas into a **smaller volume** and its pressure goes **up** (pumping up a tire).
- **Heat** a sealed gas and its pressure goes **up** (tire pressure rises after a long drive; that is why aerosol cans warn against heat).
- At sea level the air presses on everything with about $14.7$ psi.

### One-way valves

Pumps use **check valves** that let air or water through in only one direction. In a simple hand pump, pushing the piston **down** squeezes the air below it: the higher pressure pushes the **outlet** valve open (air goes to the tire) and holds the **inlet** valve shut. Pulling the piston **up** lowers the pressure inside: the outlet valve closes and outside air pushes the inlet valve open to refill the cylinder.`
    },
    {
      id: 'mcf5-brick',
      type: 'input-boxes' as const,
      content: `**Same brick, three ways.** ✍️ Use the figure.

An $8$-lb block measures $8$ in. $\\times$ $4$ in. $\\times$ $2$ in. It can rest on its $8 \\times 4$ face (position 1), its $8 \\times 2$ face (position 2) or its $4 \\times 2$ end (position 3).

**1)** The pressure under the block in position 1, in psi (decimal or fraction):

**2)** The pressure under the block in position 3, in psi (number only):

**3)** Which position (1, 2 or 3) puts the **most** pressure on the floor? (number only)`,
      figure: {
        svg: '<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><line x1="10" y1="140" x2="310" y2="140" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="2" fill="none"><rect x="20" y="124" width="80" height="16"/><rect x="130" y="108" width="80" height="32"/><rect x="250" y="60" width="32" height="80"/></g><g font-size="11" fill="currentColor" text-anchor="middle"><text x="60" y="118">8 in. × 4 in. face down</text><text x="170" y="102">8 in. × 2 in. face down</text><text x="262" y="52">4 × 2 in. end down</text></g><g font-size="13" font-weight="bold" fill="currentColor" text-anchor="middle"><text x="60" y="160">1</text><text x="170" y="160">2</text><text x="266" y="160">3</text></g></svg>',
        alt: 'The same 8-pound block shown resting three ways: position 1 lying flat on its 8-inch by 4-inch face, position 2 on its 8-inch by 2-inch side, and position 3 standing on its 4-inch by 2-inch end.',
        caption: 'Figure 1. An 8-lb block resting on three different faces.'
      },
      exercise: {
        boxes: 3,
        correctAnswers: ['0.25', '1', '3'],
        hint1: 'Area of the 8 × 4 face is 32 square inches.',
        hint2: 'Area of the 4 × 2 end is 8 square inches.',
        hint3: 'Same weight, smallest area, most pressure.',
        explanation: '(1) $8 \\div 32 = 0.25$ psi. (2) $8 \\div 8 = 1$ psi. (3) Position 3 has the smallest area under the same weight, so it presses hardest. (Position 2 is $8 \\div 16 = 0.5$ psi.)'
      }
    },
    {
      id: 'mcf5-pump',
      type: 'multiple-choice' as const,
      content: '**The hand pump.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><path d="M120 30 L120 170 L200 170 L200 30"/><rect x="122" y="86" width="76" height="12"/><line x1="160" y1="86" x2="160" y2="14"/><line x1="134" y1="14" x2="186" y2="14" stroke-width="4"/><path d="M120 150 L80 150"/><path d="M120 162 L80 162"/><path d="M200 150 L250 150"/><path d="M200 162 L250 162"/></g><g class="fig-accent" stroke="currentColor" stroke-width="3"><line x1="120" y1="150" x2="130" y2="160"/><line x1="200" y1="150" x2="210" y2="160"/></g><g class="fig-accent-2"><line x1="226" y1="40" x2="226" y2="74" stroke="currentColor" stroke-width="3"/><polygon points="226,84 219,72 233,72" fill="currentColor"/><text x="232" y="56" font-size="12" fill="currentColor">push down</text></g><g font-size="12" fill="currentColor"><text x="22" y="140">from outside</text><text x="20" y="190">Valve 1</text><text x="20" y="204">(flap swings inward)</text><text x="214" y="140">to tire</text><text x="200" y="190">Valve 2</text><text x="200" y="204">(flap swings outward)</text></g></svg>',
        alt: 'A hand pump: a vertical cylinder with a piston and handle, being pushed down. Near the bottom, valve 1 on the left wall connects to the outside air and its flap can only swing inward into the cylinder. Valve 2 on the right wall leads to a hose to the tire and its flap can only swing outward toward the tire.',
        caption: 'Figure 2. A hand pump with two one-way valves.'
      },
      exercise: {
        questions: [
          {
            question: 'In the pump shown, valve 1 (from outside air) can only open inward and valve 2 (to the tire) can only open outward. While the piston is pushed DOWN, which valve is open?',
            options: ['Valve 2 only', 'Valve 1 only', 'Both valves', 'Neither valve'],
            correctAnswer: 0,
            explanation: 'Pushing down squeezes the air below the piston, raising its pressure. That pressure pushes valve 2 outward (open, air goes to the tire) and presses valve 1 shut, because valve 1 can only swing inward. On the up stroke the opposite happens.'
          }
        ]
      }
    },
    {
      id: 'mcf5-materials',
      type: 'text' as const,
      content: `## Properties of materials

| Property | Meaning | Example |
|:---|:---|:---|
| **Strength** | resists breaking under load: **tensile** (pulling) or **compressive** (squeezing) | steel cable (tension), concrete column (compression) |
| **Hardness** | resists scratching and denting | diamond, hardened tool steel |
| **Elasticity** | returns to its shape after being stretched or bent | rubber, spring steel |
| **Brittleness** | breaks or shatters without bending first | glass, cast iron |
| **Ductility** | can be drawn out into wire | copper, aluminum |
| **Malleability** | can be hammered or rolled into sheets | gold, aluminum foil |
| **Toughness** | absorbs a blow without breaking | a sledgehammer head |

### Thermal expansion

Most materials **expand when heated** and **contract when cooled**. Different materials expand by different amounts.

- **Bridges** have expansion joints and **railroad rails** have small gaps so they can grow on hot days without buckling.
- Running **hot water** over a stuck metal jar lid loosens it: the metal lid expands more than the glass jar.
- A **bimetallic strip** (two metals bonded together) bends when heated, because one metal grows more than the other. The strip curves **toward the metal that expands less**. Thermostats use this to switch a furnace on and off.`
    },
    {
      id: 'mcf5-bimetal',
      type: 'multiple-choice' as const,
      content: '**The bimetallic strip.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect x="20" y="40" width="30" height="70" fill="none" stroke="currentColor" stroke-width="2"/><g class="fig-accent"><rect x="50" y="62" width="230" height="12" fill="none" stroke="currentColor" stroke-width="2"/></g><rect x="50" y="74" width="230" height="12" fill="none" stroke="currentColor" stroke-width="2"/><g font-size="12" fill="currentColor"><text x="160" y="56" text-anchor="middle">brass (top layer)</text><text x="160" y="102" text-anchor="middle">steel (bottom layer)</text><text x="160" y="136" text-anchor="middle">Clamped at the left end. Brass expands more than steel when heated.</text></g></svg>',
        alt: 'A straight strip made of two bonded layers, clamped at its left end. The top layer is brass and the bottom layer is steel. Brass expands more than steel when heated.',
        caption: 'Figure 3. A brass-and-steel strip at room temperature.'
      },
      exercise: {
        questions: [
          {
            question: 'A straight strip has a brass layer bonded on top of a steel layer and is clamped at one end. Brass expands more than steel when heated. When the strip is heated, what happens to its free end?',
            options: ['It bends down, toward the steel side', 'It bends up, toward the brass side', 'It stays straight and only gets longer', 'It twists sideways out of its plane'],
            correctAnswer: 0,
            explanation: 'The brass layer grows longer than the steel layer it is bonded to, so the strip must curve with the longer brass on the outside of the bend. That puts the steel on the inside, so the free end bends down toward the steel.'
          }
        ]
      }
    },
    {
      id: 'mcf5-dd',
      type: 'dropdown-select' as const,
      content: '**Name the property.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'A drinking glass shatters when dropped instead of bending:',
            options: ['brittleness', 'ductility', 'elasticity', 'malleability'],
            correctAnswer: 0
          },
          {
            label: 'Copper can be pulled into long, thin electrical wire:',
            options: ['ductility', 'hardness', 'brittleness', 'compressive strength'],
            correctAnswer: 0
          },
          {
            label: 'A truck spring returns to its original shape after a bump:',
            options: ['elasticity', 'brittleness', 'malleability', 'hardness'],
            correctAnswer: 0
          },
          {
            label: 'Rails are laid with small gaps between sections because of:',
            options: ['thermal expansion', 'friction', 'buoyancy', 'inertia'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['brittleness', 'ductility', 'elasticity', 'thermal expansion'],
        hint1: 'Breaks without bending first.',
        hint2: 'Drawn into wire.',
        hint3: 'Springs back to shape.',
        explanation: 'Glass is brittle; copper is ductile; a spring is elastic; and rails need gaps because steel expands on hot days.'
      }
    },
    {
      id: 'mcf5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- **Pressure = force ÷ area** (psi): small area = high pressure, large area = low pressure
- Same object, smallest face down = **most** pressure
- Squeezing or heating a sealed gas **raises** its pressure
- One-way valves: the push stroke opens the **outlet**, the pull stroke opens the **inlet**
- Brittle (glass), ductile (copper wire), elastic (springs), hard (diamond), malleable (foil)
- Heat makes things **expand**; a bimetallic strip bends **toward the metal that expands less**

> **Up Next:** Part 6 — test strategy and the classic traps in forces and energy questions.`
    }
  ]
};
