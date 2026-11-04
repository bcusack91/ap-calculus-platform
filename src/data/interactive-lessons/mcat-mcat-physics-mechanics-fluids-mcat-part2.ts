import type { LessonData } from './registry'

export const fluidsAtRestMcatPart2: LessonData = {
  topicSlug: 'mcat-physics-mechanics-fluids-mcat',
  sections: [
    {
      id: 'fl2-intro',
      type: 'text' as const,
      content: `# Fluids at Rest

**Part 2 of 2 — Buoyancy, Archimedes & Surface Tension**

Earlier in this lesson we saw that pressure grows with depth: $P = P_0 + \\rho g h$. That single fact explains why things float.

### Archimedes' Principle

**Where buoyancy comes from.** Hold a block of height $h$, with top and bottom faces of area $A$, under water. Its bottom face is deeper than its top face by $h$, so the water pushes up on the bottom harder than it pushes down on the top. The pressure difference is $\\Delta P = \\rho_{\\text{fluid}} g h$, and the net upward force is

$$\\Delta P \\cdot A = \\rho_{\\text{fluid}}(Ah)g = \\rho_{\\text{fluid}} V g$$

The sideways pushes on the vertical faces cancel. This net upward force from the fluid is the **buoyant force**, $F_B$.

**Archimedes' principle:** the buoyant force on an object equals the weight of the fluid it displaces:

$$F_B = \\rho_{\\text{fluid}} \\, V_{\\text{sub}} \\, g$$

where $V_{\\text{sub}}$ is the submerged volume of the object, which is the volume of fluid pushed aside.

- It uses the FLUID's density, not the object's: equal submerged volumes in the same fluid feel equal buoyant forces, whether the object is lead or cork.
- Only the submerged volume counts.
- For a fully submerged object it does **not depend on depth**: a liquid is incompressible, so the top-to-bottom pressure difference is the same at any depth.

**Float, hover or sink?** Compare the object's **average density** (its total mass divided by its total volume, including any air inside) with the fluid's density.

| Comparison | Result |
|---|---|
| $\\rho_{\\text{object}} < \\rho_{\\text{fluid}}$ | rises and floats at the surface, partly submerged |
| $\\rho_{\\text{object}} = \\rho_{\\text{fluid}}$ | neutrally buoyant: hovers at any depth |
| $\\rho_{\\text{object}} > \\rho_{\\text{fluid}}$ | sinks, because $F_B$ is less than its weight even when fully submerged |

- A steel ship floats although steel is about 8 times denser than water: its hull encloses air, so its average density is below water's.
- A fish adjusts the gas volume in its swim bladder to change its average density and hover.
- With full lungs most people's average density is slightly below water's, so they float; after a full exhalation many sink.

**Floating objects.** A floating object is in equilibrium, so the buoyant force equals its weight: $\\rho_{\\text{fluid}} V_{\\text{sub}} g = \\rho_{\\text{object}} V g$. Rearranging,

$$\\frac{V_{\\text{sub}}}{V} = \\frac{\\rho_{\\text{object}}}{\\rho_{\\text{fluid}}}$$

In water, the fraction submerged equals the object's specific gravity. Keep the two cases apart: a FLOATING object displaces its own WEIGHT of fluid; a fully SUBMERGED object displaces its own VOLUME of fluid.

**Apparent weight.** An object hung from a scale while fully submerged reads lighter by the buoyant force: $W_{\\text{apparent}} = W - F_B$. This is why patients recovering muscle strength often exercise in a pool: the water supports part of their weight.`
    },
    {
      id: 'fl2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Practice: Archimedes' Principle** 🎯`,
      exercise: {
        questions: [
          {
            question: `A plastic buoy has an average density of $800\\;\\text{kg/m}^3$. What fraction of its volume lies below the surface when it floats in fresh water?`,
            options: [`$20\\%$`, `$100\\%$`, `$50\\%$`, `$80\\%$`],
            correctAnswer: 3,
            yield: 'ULTRA_HIGH',
            explanation: `For a floater, $V_{\\text{sub}}/V = \\rho_{\\text{object}}/\\rho_{\\text{fluid}} = 800/1000 = 0.80$, so 80% is submerged. 20% is the fraction ABOVE the surface. 100% confuses floating with full submersion, and 50% is a "half in, half out" picture that only holds when the object is half as dense as the fluid.`
          },
          {
            question: `Three balls of equal volume, made of lead, aluminum and wood, are each held completely under water: the lead ball 1 m deep, the wood ball 2 m deep and the aluminum ball 3 m deep. How do the buoyant forces on them compare?`,
            options: [`The same on all three balls`, `Largest on the lead ball, the densest`, `Largest on the wood ball, the least dense`, `Largest on the aluminum ball, the deepest`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `$F_B = \\rho_{\\text{fluid}} V_{\\text{sub}} g$: same fluid, same submerged volume, same buoyant force. The object's own density decides whether it sinks or floats once released, not how hard the water pushes up on it. Depth does not matter either, because the pressure difference between the top and bottom of each ball is the same at every depth.`
          },
          {
            question: `A $5.0\\;\\text{kg}$ rock with a volume of $2.0 \\times 10^{-3}\\;\\text{m}^3$ hangs from a spring scale while fully submerged in water. What does the scale read? ($g = 10\\;\\text{m/s}^2$)`,
            options: [`$50\\;\\text{N}$`, `$20\\;\\text{N}$`, `$30\\;\\text{N}$`, `$70\\;\\text{N}$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Weight $= (5.0)(10) = 50\\;\\text{N}$; buoyant force $= (1000)(2.0 \\times 10^{-3})(10) = 20\\;\\text{N}$; the scale reads $50 - 20 = 30\\;\\text{N}$. 50 N ignores buoyancy, 20 N is the buoyant force itself rather than what the scale supports, and 70 N adds the buoyant force as if it pushed down.`
          },
          {
            question: `A sealed, empty steel can floats in a tank of water. The same can, crushed flat without losing any steel, sinks. Which statement explains the change?`,
            options: [`The steel itself became denser when the can was crushed`, `Its volume shrank, so its average density exceeded water's`, `The flat shape spread its weight over more water`, `Crushing pushed out air, which had made the can lighter`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The mass is unchanged, but crushing removes the enclosed volume, so the can's average density (mass over total volume) rises above water's and it can no longer displace its own weight of water. The steel's density never changed; it was always greater than water's. A flat plate of steel still sinks, and air has weight, so it never made the can lighter; it only made the can bigger.`
          }
        ]
      }
    },
    {
      id: 'fl2-more',
      type: 'text' as const,
      content: `### Specific Gravity Reasoning

**Weighing in air and in water.** The buoyant force on a fully submerged object equals the weight of an equal volume of water. The ratio of an object's weight to the weight of an equal volume of water is exactly its specific gravity, so

$$SG = \\frac{W}{F_B} = \\frac{W}{W - W_{\\text{apparent}}}$$

This is how Archimedes could test a crown for gold without melting it down.

**Hydrometer.** A **hydrometer** is a weighted float with a scale on its narrow stem. Its weight is fixed, so it always displaces the same WEIGHT of liquid. In a denser liquid that weight is a smaller volume, so the hydrometer rides HIGHER; the liquid's SG is read where the surface meets the stem. Clinically, a higher urine specific gravity means more concentrated urine, as in dehydration.

<!-- yield:low -->
- Normal urine specific gravity runs from roughly 1.005 to 1.030.
<!-- /yield -->

**One object, two fluids.** The submerged fraction is $\\rho_{\\text{object}}/\\rho_{\\text{fluid}}$, so the same object rides higher in a denser fluid: a swimmer floats more easily in seawater (SG about 1.03) than in a pool. An object whose density lies between two liquids that do not mix, such as oil floating on water, comes to rest at the boundary, partly in each layer.

**Melting ice.** An ice cube floating in a glass of water displaces exactly its own weight of water. When it melts it becomes exactly that weight of water, so the water level does not change.

### Surface Tension, Cohesion and Adhesion

- **Cohesion** is the attraction between molecules of the same substance (water to water, through hydrogen bonds). **Adhesion** is the attraction between a liquid and a different material (water to glass).
- A molecule inside a liquid is pulled equally in every direction; a molecule at the surface has neighbours only below and beside it, so it feels a net inward pull. The surface behaves like a stretched elastic skin.
- **Surface tension** $\\gamma$ (Greek "gamma") measures that skin's strength as a force per unit length along the surface (N/m), or equivalently the energy needed to create a unit area of new surface. Water's is high because of hydrogen bonding.
- Consequences: droplets pull into spheres (the shape with the least surface area); a water strider or a carefully placed steel needle rests ON the surface, held up by surface tension rather than buoyancy; soaps and other **surfactants** (surface-active agents) lower $\\gamma$.

**Capillary action.** In a narrow tube, the balance of adhesion and cohesion decides what the liquid does.

| Stronger attraction | Meniscus (surface shape) | Liquid level in the tube |
|---|---|---|
| adhesion > cohesion (water in glass) | concave: curves up at the walls | rises |
| cohesion > adhesion (mercury in glass) | convex: domes up in the middle | is pushed down |

The narrower the tube, the larger the rise (or fall). Capillary action draws a drop of blood into a thin glass tube and water into paper towels.

**Surface tension in the lungs.** The **alveoli** (tiny air sacs of the lung) are lined with a thin layer of fluid. Its surface tension pulls inward and tends to collapse each alveolus, and the effect is stronger the smaller the alveolus. **Pulmonary surfactant**, secreted by type II alveolar cells, lowers that surface tension and keeps small alveoli open. Premature infants who cannot yet make enough surfactant develop respiratory distress syndrome.

<!-- yield:low -->
- The pressure needed to keep a spherical bubble inflated against surface tension is $\\Delta P = 2\\gamma/r$ (the law of Laplace), so smaller bubbles need more pressure.
- The capillary rise in a tube of radius $r$ is $h = 2\\gamma\\cos\\theta/(\\rho g r)$ (Jurin's law), where $\\theta$ is the contact angle.
<!-- /yield -->`
    },
    {
      id: 'fl2-worked',
      type: 'text' as const,
      content: `### Worked Example — The Block That Floats 60% Submerged

**Problem 1.** A block of wood floats in water with 60% of its volume submerged.

- **(a)** What are the block's density and specific gravity?
- **(b)** What fraction of the block is submerged when it floats in oil ($SG = 0.8$)?
- **(c)** In what fluids does the block sink instead of floating?

**(a) Density from floating.** Floating means $F_B = W$:

$$\\rho_{\\text{water}}(0.6V)g = \\rho_{\\text{wood}}Vg \\;\\Rightarrow\\; \\rho_{\\text{wood}} = 0.6\\,\\rho_{\\text{water}} = 600\\;\\text{kg/m}^3$$

The submerged fraction IS the specific gravity: 0.6.

**(b) Move it to oil.** It must still displace its own weight, now of a less dense fluid, so it sinks deeper. With SG 0.6 from (a), the fraction is $0.6/0.8 = 0.75$, or 75% submerged.

**(c) The sinking limit.** In any fluid with SG below 0.6, even full submersion cannot displace enough weight, and the block sinks.

**Problem 2.** The same block ($600\\;\\text{kg/m}^3$) has a volume of $0.01\\;\\text{m}^3$ (10 L) and is held completely under water. Use $g = 10\\;\\text{m/s}^2$.

- **(a)** What buoyant force acts on the block?
- **(b)** What does the block weigh?
- **(c)** What downward push holds it under, and does that push change with depth?

**(a) Buoyant force.** Fully submerged in water, $F_B = (1000)(0.01)(10) = 100\\;\\text{N}$.

**(b) Weight.** $W = (600)(0.01)(10) = 60\\;\\text{N}$.

**(c) Pushing it under.** With $F_B = 100\\;\\text{N}$ from (a) and $W = 60\\;\\text{N}$ from (b), holding it under takes a downward push of $100 - 60 = 40\\;\\text{N}$. That push is the same at any depth, because the buoyant force on a fully submerged object does not change with depth.

### Worked Example — Weighing an Ore Sample

**Problem.** A geologist's rock sample weighs $50\\;\\text{N}$ in air and $40\\;\\text{N}$ when hung fully submerged in water. Use $g = 10\\;\\text{m/s}^2$.

- **(a)** What buoyant force acts on the submerged sample?
- **(b)** What is the sample's volume?
- **(c)** What is its density?
- **(d)** Does the shortcut $SG = W/F_B$ agree, and could the sample be gold (SG about 19)?

**(a) Buoyant force.** $F_B = W - W_{\\text{apparent}} = 50 - 40 = 10\\;\\text{N}$.

**(b) Volume.** With $F_B = 10\\;\\text{N}$ from (a), $V = \\dfrac{F_B}{\\rho_{\\text{water}} g} = \\dfrac{10}{(1000)(10)} = 1.0 \\times 10^{-3}\\;\\text{m}^3$ (1 L).

**(c) Density.** Mass $= 50/10 = 5.0\\;\\text{kg}$. With $V = 1.0 \\times 10^{-3}\\;\\text{m}^3$ from (b), $\\rho = 5.0/(1.0 \\times 10^{-3}) = 5000\\;\\text{kg/m}^3$.

**(d) Shortcut check.** $SG = W/F_B = 50/10 = 5$, the same answer in one line. Gold's SG is about 19, so this is not gold.`
    },
    {
      id: 'fl2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Practice: Specific Gravity & Surface Effects** 🎯`,
      exercise: {
        questions: [
          {
            question: `Ice has SG $0.92$ and seawater has SG $1.03$. About what fraction of a floating iceberg's volume is ABOVE the surface of the sea?`,
            options: [`About $8\\%$`, `About $11\\%$`, `About $89\\%$`, `About $92\\%$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Submerged fraction $= 0.92/1.03 \\approx 0.89$, so about 11% shows above the surface. 8% is the answer for fresh water, where the submerged fraction would be 0.92. 89% and 92% are submerged fractions (in seawater and fresh water), not the part above.`
          },
          {
            question: `A bracelet weighs $2.0\\;\\text{N}$ in air and $1.8\\;\\text{N}$ when hung fully submerged in water. What is its specific gravity?`,
            options: [`$0.1$`, `$1.1$`, `$9.0$`, `$10.0$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `$F_B = 2.0 - 1.8 = 0.2\\;\\text{N}$, the weight of an equal volume of water, so $SG = W/F_B = 2.0/0.2 = 10.0$. 0.1 inverts the ratio, 1.1 divides the two scale readings ($2.0/1.8$), and 9.0 divides the apparent weight, not the true weight, by the buoyant force.`
          },
          {
            question: `One narrow glass tube is dipped into water and an identical tube into mercury. Which result is observed?`,
            options: [`Water rises with a concave meniscus; mercury drops with a convex one`, `Water rises with a convex meniscus; mercury drops with a concave one`, `Water drops with a concave meniscus; mercury rises with a convex one`, `Water drops with a convex meniscus; mercury rises with a concave one`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Water adheres to glass more strongly than it coheres, so it climbs the walls (a concave meniscus) and rises in the tube. Mercury coheres more strongly than it adheres to glass, so it domes up (a convex meniscus) and is pushed below the outside level. The other three pairings swap the meniscus shape, the direction of the level change, or both.`
          },
          {
            question: `Some premature infants cannot yet produce pulmonary surfactant. What problem does this cause in their lungs?`,
            options: [`Surface tension in the alveoli falls, so the alveoli overinflate`, `The alveolar fluid grows more viscous, so airflow turns turbulent`, `High surface tension pulls the smallest alveoli toward collapse`, `Adhesion to the alveolar wall rises, drawing fluid up the airway`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Surfactant LOWERS the surface tension of the fluid lining the alveoli; without it the surface tension stays high and pulls inward, collapsing small alveoli (respiratory distress syndrome). Saying surface tension falls has surfactant's role backwards. Surfactant acts on surface tension, not on viscosity or turbulence, and the problem is collapse of the air sacs, not fluid climbing the airways.`
          }
        ]
      }
    },
    {
      id: 'fl2-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- **Archimedes' principle.** $F_B = \\rho_{\\text{fluid}} V_{\\text{sub}} g$, the displaced fluid's weight, whatever the depth or material.
- **Average density decides.** Less dense than the fluid floats, with submerged fraction $\\rho_{\\text{object}}/\\rho_{\\text{fluid}}$; equal hovers; denser sinks.
- **Weighing under water.** Apparent weight $= W - F_B$, and $SG = W/F_B$, which is how a crown or an ore sample is tested.
- **Surface tension.** Cohesion makes a surface skin; water rises in glass by adhesion; lung surfactant lowers tension so alveoli stay open.

**Common traps**

- **Wrong density for buoyancy.** $F_B$ uses the FLUID's density; the object's density only decides whether it sinks or floats.
- **Deeper means more buoyancy.** A fully submerged object's buoyant force does not grow with depth or with a denser object.
- **Submerged versus above.** $\\rho_{\\text{object}}/\\rho_{\\text{fluid}}$ is the fraction BELOW the surface; the part above is the rest.
- **Apparent weight in SG.** Divide the TRUE weight by $F_B$ to get the specific gravity, not the apparent weight.

<!-- yield:low -->
**Low-yield extras**

- the normal urine specific-gravity range; the law of Laplace formula $\\Delta P = 2\\gamma/r$; Jurin's law for capillary rise
<!-- /yield -->`
    }
  ]
}
