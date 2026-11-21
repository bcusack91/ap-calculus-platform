import type { ShotList } from '../types'

/**
 * Shot list: MCAT Physics — Fluids Part 2: Buoyancy & Surface Tension
 * (topic mcat-physics-mechanics-fluids-mcat, "Fluids at Rest"; the second of four Fluids video parts).
 *
 * Source: lesson part 2 (src/data/interactive-lessons/mcat-mcat-physics-mechanics-fluids-mcat-part2.ts),
 * its deck figures (the Archimedes, specific-gravity/hydrometer and capillary figures in
 * src/data/deck-figures/mcat-cp-fluids-waves.ts and mcat-cp-fluids.ts) and its lesson-built exit pool.
 * Lesson part 1 (density, specific gravity, P = P₀ + ρgh, gauge pressure, Pascal) is Fluids Part 1
 * and is assumed, not re-taught. Eight Manim clips in four pairs (owner format, Nov 2026): a CONCEPT
 * clip that teaches the idea and ends on the "Remember" recap, then a WORKED-EXAMPLES clip with two
 * examples, each shown in full with a pause-and-try prompt before the solution.
 *   Clips 1–2: Archimedes' Principle (where buoyancy comes from; F_b = ρVg).
 *   Clips 3–4: Float, hover or sink?; Floating objects; One object, two fluids; Melting ice; Hydrometer;
 *              Worked Example — The Block That Floats 60% Submerged (Problem 1).
 *   Clips 5–6: Apparent weight; Weighing in air and in water; Worked Example Problem 2 (held under)
 *              and Worked Example — Weighing an Ore Sample (same method, new numbers).
 *   Clips 7–8: Surface Tension, Cohesion and Adhesion; Capillary action; Surface tension in the lungs.
 * The low-yield extras (the normal urine specific-gravity range, the law of Laplace, Jurin's law)
 * are left out.
 *
 * REUSE FOR AP PHYSICS 1 (topic "Fluids: Buoyancy"): each clip is cut into sections, one per key
 * point, and the AP lesson takes only the SHARED sections. Shared key points use the AP equation
 * sheet's symbols (ρ, F_b = ρVg, P = P₀ + ρgh), say "density ratio" rather than specific gravity,
 * and never lean on an MCAT-only point. MCAT-only material sits in key points of its own, listed
 * word for word in `mcatOnly`, each ending on its own one-line takeaway; the "Remember" recap of
 * clips 1–6 recaps shared ideas only. Clips 7–8 (surface tension) are MCAT-only as a whole. Every
 * checkpoint question in clips 1–6 is shared. All six worked examples in clips 2, 4 and 6 are
 * valid AP Physics 1 problems. The two examples in clip 8 are multi-part REASONING examples
 * (predict and explain), because the lesson teaches surface tension qualitatively and its only
 * formulas are low-yield extras.
 *
 * The checkpoint questions are what a YouTube viewer answers at studymondo.com/v/<code>
 * (src/data/video-short-links.ts). Proposed codes: buoy1/buoy2, float1/float2, sink1/sink2,
 * surface1/surface2 (none collides). They use new scenarios and numbers, so they never repeat an
 * exit-quiz item or a worked example. Working values match the lesson: g = 10 m/s²,
 * ρ_water = 1000 kg/m³.
 */
export const shotList: ShotList = {
  courseSlug: 'mcat-prep',
  topicSlug: 'mcat-physics-mechanics-fluids-mcat',
  title: 'Fluids Part 2: Buoyancy & Surface Tension',
  overview:
    'Eight animated clips in four pairs that take a fluid at rest from "pressure grows with depth" to everything that floats, sinks or sits on a surface: where the buoyant force comes from and why it equals the weight of the displaced fluid, how much of a floating object lies below the surface, what a scale reads when an object hangs under water, and how cohesion and adhesion produce surface tension, capillary action and the need for surfactant in the lungs. Each idea gets a concept clip followed by a worked-examples clip in which every problem is shown in full, with a moment to pause and try it before the solution. The buoyancy clips are cut into sections so that an introductory physics course can reuse them; the surface-tension pair carries the biology. Each clip ends with three checkpoint questions; the topic exit quiz follows the last clip.',
  clips: [
    // ── 1 · Archimedes' principle (concepts) ─────────────────────────────
    {
      title: "Archimedes' Principle",
      minutes: 7,
      goal: 'Explain where the buoyant force comes from, state it as F_b = ρVg with the fluid\'s density and the submerged volume, and predict what does and does not change it.',
      keyPoints: [
        'Pressure grows with depth, P = P₀ + ρgh, so a fluid pushes up on the bottom face of a submerged block harder than it pushes down on the top face. The sideways pushes on the vertical faces cancel, and what is left is a net upward force from the fluid: the buoyant force, F_b.',
        'For a block of height h with top and bottom faces of area A, the pressure difference between the faces is ΔP = ρgh, so the net upward force is ΔP·A = ρ(Ah)g = ρVg, where ρ is the density of the FLUID.',
        'Archimedes\' principle: the buoyant force equals the weight of the fluid the object displaces, F_b = ρVg, where ρ is the fluid\'s density and V is the submerged volume of the object, which is the volume of fluid pushed aside. It holds for any shape.',
        'The buoyant force uses the FLUID\'s density, not the object\'s: equal submerged volumes in the same fluid feel equal buoyant forces, whether the object is lead or cork. The object\'s own density and weight decide what happens next, not how hard the fluid pushes up.',
        'Only the submerged volume counts, so F_b grows as more of an object goes under and stops growing once it is fully under. After that it does not depend on depth: both face pressures rise together as the object goes deeper, and their difference stays ρgh.',
      ],
      showOnScreen: [
        'A block under water with pressure arrows on every face: short arrows on the top face, longer ones on the bottom face, equal and opposite pairs on the sides fading out as they cancel',
        'The derivation building in three lines beside the block: ΔP = ρgh, then F_b = ΔP·A = ρ(Ah)g, then F_b = ρVg',
        'The displaced water lifted out as a "ghost" block of the same shape and set on a scale: its weight equals F_b',
        'A lead block and a cork block of equal volume side by side under water, each with the same upward arrow labeled F_b, and different weight arrows',
        'A ball lowered through the surface with a live F_b readout: climbing while the ball goes under, then flat as it goes deeper; the top and bottom pressures both tick up while their difference stays fixed',
        'The "Remember" recap: buoyancy is the top-to-bottom pressure difference; F_b = ρVg; the FLUID\'s density and the SUBMERGED volume; not the object\'s density, not its weight, not the depth',
        'End card: "Up next: Archimedes\' Principle: Worked Examples"',
      ],
      pitfalls: [
        'Putting the object\'s density into F_b = ρVg.',
        'Expecting a deeper object to feel a larger buoyant force because the pressure is larger there.',
        'Thinking a heavier object of the same size is pushed up harder, or less hard.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-mechanics-fluids-mcat'],
      checkpoint: [
        {
          question: 'A diver holds a solid block fully under water and lowers it from a depth of 2 m to a depth of 6 m. What happens to the water pressure on the block\'s top and bottom faces, and to the buoyant force on it?',
          options: [
            'Both face pressures rise, and the buoyant force triples',
            'Only the bottom pressure rises, so the buoyant force grows',
            'Both face pressures rise, and the buoyant force is unchanged',
            'Neither face pressure changes, nor does the buoyant force',
          ],
          correctAnswer: 2,
          explanation:
            'Pressure grows with depth, so the pressure on BOTH faces rises as the block goes deeper. The buoyant force comes from the difference between them, ρgh across the block\'s own height, and that difference is the same at any depth, so F_b = ρVg is unchanged. "Triples" scales the buoyant force with depth as if it were the pressure itself; "only the bottom pressure rises" forgets that the top face is deeper too; and "neither changes" ignores P = P₀ + ρgh.',
        },
        {
          question: 'The same solid steel ball is held fully submerged first in water and then in a cooking oil that is less dense than water. How does the buoyant force on the ball in the oil compare with the buoyant force in the water?',
          options: [
            'Smaller in the oil, since the oil is the less dense fluid',
            'The same in both, since the ball\'s volume has not changed',
            'The same in both, since the ball\'s weight has not changed',
            'Larger in the oil, since oil is a thicker liquid than water',
          ],
          correctAnswer: 0,
          explanation:
            'F_b = ρVg uses the FLUID\'s density. The submerged volume is the same in both liquids, so the less dense oil gives the smaller buoyant force: the displaced oil weighs less than the same volume of water. An unchanged volume is only half of the formula, the ball\'s weight does not appear in the formula at all, and how thick (viscous) a liquid feels has nothing to do with buoyancy, which depends only on the fluid\'s density and the displaced volume.',
        },
        {
          question: 'A sealed, rigid plastic ball is pushed slowly down into a pool: first until it is just fully under water, and then a further meter deeper. How does the upward force that the water exerts on the ball change along the way?',
          options: [
            'It grows steadily all the way down as the pressure rises',
            'It grows until the ball is fully under, then stays constant',
            'It stays constant throughout, since the ball\'s weight is fixed',
            'It grows until the ball is fully under, then weakens with depth',
          ],
          correctAnswer: 1,
          explanation:
            'Only the submerged volume counts in F_b = ρVg. While the ball is going under, more and more of it displaces water, so the force grows; once it is fully under, the submerged volume cannot grow any more, and the force stays the same at every depth. Growing all the way down confuses the buoyant force with the pressure, a constant force throughout ties buoyancy to the ball\'s weight instead of to the displaced water, and nothing makes the force weaken with depth in an incompressible liquid.',
        },
      ],
    },
    // ── 2 · Archimedes' principle (worked examples) ──────────────────────
    {
      title: "Archimedes' Principle: Worked Examples",
      minutes: 5.5,
      goal: 'Find a buoyant force two ways, from the pressures on the top and bottom faces and from F_b = ρVg, and compare it with the weight to find the net force on a submerged object.',
      keyPoints: [
        'From pressures: the gauge pressure on a face is ρgh at that face\'s depth, the force on the face is PA, and the buoyant force is the bottom force minus the top force. The atmosphere\'s P₀ pushes on both faces and cancels.',
        'From Archimedes: F_b = ρVg in one line, with the fluid\'s density and the submerged volume in m³ (1 L = 10⁻³ m³). Both routes give the same number.',
        'The net force on a released object is F_b up and its weight down. The weight uses the OBJECT\'s density, ρ_object·V·g; the buoyant force uses the FLUID\'s.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the cube under water with its two depths marked, the face pressures and forces appearing as arrows, the subtraction, then ρVg landing on the same 80 N; the cube slides a meter deeper and both forces grow by the same amount',
        'Example 2: the aluminum block and the pine block side by side with equal F_b arrows and unequal weight arrows, then each one\'s net-force arrow and the direction it moves',
        'The "Remember" recap of the method: fluid\'s density, submerged volume, then compare with the weight',
        'End card: "Up next: Floating"',
      ],
      workedExample:
        'Example 1: A solid cube 0.20 m on each side is held fully under water with its top face level and 0.30 m below the surface. Use ρ_water = 1000 kg/m³ and g = 10 m/s². (a) What is the gauge pressure of the water on the top face and on the bottom face? (b) What force does that pressure put on each of the two faces, and what is the net upward force? (c) What does F_b = ρVg give? (d) The cube is lowered until its top face is 1.30 m deep. What is the net upward force now? (a) Top: ρgh = (1000)(10)(0.30) = 3000 Pa. The bottom face is 0.50 m deep: (1000)(10)(0.50) = 5000 Pa. (b) Each face has area (0.20)² = 0.040 m², so the water pushes down on the top with (3000)(0.040) = 120 N and up on the bottom with (5000)(0.040) = 200 N: a net 200 − 120 = 80 N upward. (c) V = (0.20)³ = 8.0 × 10⁻³ m³, so F_b = (1000)(8.0 × 10⁻³)(10) = 80 N, the same answer in one line. (d) Top 13,000 Pa gives 520 N down, bottom (1.50 m) 15,000 Pa gives 600 N up: still 80 N. Both forces grew by 400 N, and their difference did not change. Example 2: A solid aluminum block (density 2700 kg/m³) and a solid pine block (density 500 kg/m³) each have a volume of 4.0 × 10⁻³ m³ (4.0 L). Each is held fully under water (1000 kg/m³) and then released. Use g = 10 m/s². (a) What buoyant force acts on each block? (b) What does each block weigh? (c) What is the net force on each block at the moment of release, and which way does it move? (d) What buoyant force would act on the aluminum block fully submerged in seawater (1030 kg/m³)? (a) Same fluid, same submerged volume: F_b = (1000)(4.0 × 10⁻³)(10) = 40 N on each. (b) Aluminum: (2700)(4.0 × 10⁻³)(10) = 108 N. Pine: (500)(4.0 × 10⁻³)(10) = 20 N. (c) Aluminum: 108 − 40 = 68 N downward, so it sinks. Pine: 40 − 20 = 20 N upward, so it rises. (d) F_b = (1030)(4.0 × 10⁻³)(10) = 41.2 N: a denser fluid pushes up harder on the same volume.',
      pitfalls: [
        'Using the depth of the bottom face alone and calling the force on that one face the buoyant force.',
        'Putting the block\'s density into the buoyant force, or the water\'s density into the weight.',
        'Leaving a volume in liters or cm³ instead of m³.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-mechanics-fluids-mcat'],
      checkpoint: [
        {
          question: 'A solid cylinder stands upright, fully submerged in oil of density 800 kg/m³. Its flat end faces each have an area of 0.050 m², its height is 0.40 m, and its top face is 0.60 m below the oil\'s surface. What is the buoyant force on it? (g = 10 m/s²)',
          options: ['400 N', '200 N', '3,200 N', '160 N'],
          correctAnswer: 3,
          explanation:
            'The pressure difference between the faces is ρgh over the cylinder\'s own height: (800)(10)(0.40) = 3200 Pa, and F_b = ΔP·A = (3200)(0.050) = 160 N. Archimedes agrees: V = (0.050)(0.40) = 0.020 m³ and (800)(0.020)(10) = 160 N. 400 N is the force on the bottom face alone (1.0 m deep), with the push on the top face never subtracted; 200 N uses water\'s density instead of the oil\'s; and 3,200 is the pressure difference in pascals, not a force.',
        },
        {
          question: 'A 6.0 kg brick with a volume of 2.5 × 10⁻³ m³ is held fully submerged in water. What is the buoyant force on the brick? (ρ_water = 1000 kg/m³, g = 10 m/s²)',
          options: ['25 N', '60 N', '35 N', '2.5 N'],
          correctAnswer: 0,
          explanation:
            'F_b = ρVg with the WATER\'s density and the brick\'s submerged volume: (1000)(2.5 × 10⁻³)(10) = 25 N. 60 N is the brick\'s own weight, mg, which is not what the water pushes with; 35 N is the weight minus the buoyant force, the net downward force rather than the buoyant force itself; and 2.5 is the mass of the displaced water in kilograms, never multiplied by g.',
        },
        {
          question: 'A 0.50 kg cork float with a volume of 2.0 × 10⁻³ m³ is held fully under water and then released. What is the net force on the float at the moment it is released? (ρ_water = 1000 kg/m³, g = 10 m/s²)',
          options: ['20 N upward', '15 N upward', '5.0 N downward', '25 N upward'],
          correctAnswer: 1,
          explanation:
            'The buoyant force is (1000)(2.0 × 10⁻³)(10) = 20 N upward, and the weight is (0.50)(10) = 5.0 N downward, so the net force is 20 − 5.0 = 15 N upward and the float accelerates toward the surface. 20 N upward is the buoyant force with the weight left out, 5.0 N downward is the weight with the buoyant force left out, and 25 N adds two forces that point in opposite directions.',
        },
      ],
    },
    // ── 3 · Floating (concepts) ──────────────────────────────────────────
    {
      title: 'Floating',
      minutes: 7.5,
      goal: 'Predict whether an object floats, hovers or sinks from its average density, and reason about how much of a floating object lies below the surface in any fluid.',
      keyPoints: [
        'Float, hover or sink? Compare the object\'s AVERAGE density (its total mass divided by its total volume, including any air inside) with the fluid\'s density. Less dense: it rises and floats, partly submerged. Equal: it hovers at any depth. Denser: it sinks. A steel ship floats because its hull encloses air; a fish hovers by adjusting the gas in its swim bladder; most people float with full lungs and sink after breathing out.',
        'A floating object is in equilibrium, so the buoyant force equals its weight. It settles into the fluid until it has displaced its own WEIGHT of fluid, then stops: ρ_fluid·V_sub·g = ρ_object·V·g.',
        'Cancel g and rearrange: the fraction submerged is the density ratio, V_sub/V = ρ_object/ρ_fluid. Ice (920 kg/m³) floats in water with 92% of its volume below the surface. The ratio gives the fraction BELOW; the part above is the rest.',
        'The same object in a denser fluid feels the SAME buoyant force, still equal to its weight, but needs less submerged volume to get it, so it rides higher: a swimmer floats higher in the sea than in a pool. An object whose density lies between two liquids that do not mix, such as oil on water, rests at the boundary, partly in each.',
        'Melting ice: an ice cube floating in a glass of water displaces exactly its own weight of water. When it melts it becomes exactly that weight of water, so it fills the space it was displacing and the water level does not change.',
        'In water, the fraction submerged equals the object\'s specific gravity: an object of specific gravity 0.6 floats 60% submerged. A hydrometer uses this in reverse. It is a weighted float with a scale on its narrow stem; it rides higher in a denser liquid, and the liquid\'s specific gravity is read where the surface crosses the stem. A higher urine specific gravity means more concentrated urine, as in dehydration. Takeaway: the higher the hydrometer floats, the higher the specific gravity.',
      ],
      showOnScreen: [
        'Three identical tanks: an object rising to float, one hovering mid-depth, one sinking, each labeled with its average density against the fluid\'s; then a steel hull cut away to show the air it encloses, a fish with its swim bladder, a swimmer with full and empty lungs',
        'A block lowered onto water: it sinks in while the F_b arrow grows, and stops when F_b matches the weight arrow; the displaced water is poured onto a balance against the block and the two sides level',
        'The algebra from F_b = weight to V_sub/V = ρ_object/ρ_fluid, then an iceberg with 92% shaded below the waterline and 8% above',
        'One float moved between a pool and the sea: the same weight and F_b arrows, a higher waterline in the sea; then a bead settling at the boundary between oil and water',
        'A glass with a floating ice cube: the displaced volume outlined, the cube melting into exactly that outline, the level line unmoved',
        'MCAT-only section: a hydrometer in two liquids, riding higher in the denser one, with the specific-gravity scale on its stem and its one-line takeaway',
        'The "Remember" recap (shared ideas only): average density decides; floating means F_b = weight; fraction below = ρ_object/ρ_fluid; denser fluid, rides higher; a floater displaces its own WEIGHT of fluid',
        'End card: "Up next: Floating: Worked Examples"',
      ],
      pitfalls: [
        'Using the density of the material (steel) instead of the average density of the whole object (hull plus air).',
        'Reading ρ_object/ρ_fluid as the fraction above the surface.',
        'Thinking an object that rides higher in a denser fluid feels a larger buoyant force: the force still equals its weight.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-mechanics-fluids-mcat'],
      mcatOnly: [
        'In water, the fraction submerged equals the object\'s specific gravity: an object of specific gravity 0.6 floats 60% submerged. A hydrometer uses this in reverse. It is a weighted float with a scale on its narrow stem; it rides higher in a denser liquid, and the liquid\'s specific gravity is read where the surface crosses the stem. A higher urine specific gravity means more concentrated urine, as in dehydration. Takeaway: the higher the hydrometer floats, the higher the specific gravity.',
      ],
      checkpoint: [
        {
          question: 'A loaded barge floats at rest in a canal. Workers add more cargo, and the barge still floats at rest. Compared with before, what has happened to the buoyant force on the barge and to how it sits in the water?',
          options: [
            'The buoyant force is larger, and the barge rides lower',
            'The buoyant force is unchanged, and the barge rides lower',
            'The buoyant force is larger, and the barge rides higher',
            'The buoyant force is unchanged, and so is its waterline',
          ],
          correctAnswer: 0,
          explanation:
            'Floating at rest means the buoyant force equals the total weight, so more cargo means a larger buoyant force. The water can supply it only if the barge displaces more water, so the barge settles lower. An unchanged buoyant force could not hold up the heavier barge, riding higher would displace less water and give a smaller force, and an unchanged waterline would leave the added weight unsupported.',
        },
        {
          question: 'Two solid blocks of equal volume float at rest in the same tank of water. Block A floats with 30% of its volume below the surface, and block B floats with 60% of its volume below the surface. How does block B compare with block A?',
          options: [
            'B has twice A\'s density and feels the same buoyant force',
            'B has half of A\'s density and feels half the buoyant force',
            'B has half of A\'s density and feels the same buoyant force',
            'B has twice A\'s density and feels twice the buoyant force',
          ],
          correctAnswer: 3,
          explanation:
            'The fraction submerged equals ρ_object/ρ_fluid, so B (0.60) is twice as dense as A (0.30). B also has twice the submerged volume in the same fluid, so F_b = ρVg is twice as large, which fits: with equal volumes and twice the density, B weighs twice as much, and a floater\'s buoyant force equals its weight. "The same buoyant force" forgets that the two blocks have different weights, and "half the density" reads the deeper-floating block as the lighter one.',
        },
        {
          question: 'A sealed bottle hovers motionless at mid-depth in a tank of fresh water. Salt is then stirred into the tank until it dissolves, which raises the density of the water. Nothing about the bottle changes. What does the bottle do?',
          options: [
            'It sinks and comes to rest on the tank floor',
            'It keeps hovering at exactly the same depth',
            'It rises and floats, partly above the surface',
            'It rises a little, then hovers at a new depth',
          ],
          correctAnswer: 2,
          explanation:
            'Hovering means the bottle\'s average density equalled the water\'s. Once the water is denser than the bottle, the buoyant force on the fully submerged bottle exceeds its weight, so it rises all the way to the surface and floats with just enough volume submerged to displace its own weight. Sinking has the comparison backwards, staying put ignores the change in the fluid\'s density, and it cannot hover at a new depth because the buoyant force on a fully submerged object does not depend on depth.',
        },
      ],
    },
    // ── 4 · Floating (worked examples) ───────────────────────────────────
    {
      title: 'Floating: Worked Examples',
      minutes: 6,
      goal: 'Use F_b = weight to find a floating object\'s density, its submerged fraction in a second fluid, how deep a raft sits, and the load it can carry.',
      keyPoints: [
        'Start every floating problem with F_b = weight: ρ_fluid·V_sub·g = m·g, so ρ_fluid·V_sub = m. The g always cancels.',
        'A submerged fraction in a known fluid gives the object\'s density, ρ_object = (fraction)(ρ_fluid); that density then gives the fraction in any other fluid, ρ_object/ρ_fluid. If the ratio would exceed 1, the object sinks.',
        'For a flat-bottomed hull of base area A sitting a depth d into the water, V_sub = A·d. The greatest load is reached when the whole volume is under: total mass = ρ_fluid·V, and the load is that minus the hull\'s own mass.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the block in water with 60% shaded below the waterline, the same block moved to oil and settling deeper to 75%, then a number line of fluid densities with the "sinks" region below 600 kg/m³',
        'Example 2: the raft in side view with its depth d marked, the displaced-water volume outlined, then cargo stacking on while the waterline climbs to the raft\'s top edge',
        'The "Remember" recap of the method: F_b = weight, then solve for the one unknown',
        'End card: "Up next: Sinking and Apparent Weight"',
      ],
      workedExample:
        'Example 1: A block of wood floats in water (1000 kg/m³) with 60% of its volume submerged. (a) What is the block\'s density? (b) What fraction of the block is submerged when it floats in oil of density 800 kg/m³? (c) In what fluids does the block sink instead of floating? (a) Floating means F_b = weight: ρ_water(0.60V)g = ρ_wood·V·g, so ρ_wood = (0.60)(1000) = 600 kg/m³. (b) It must still displace its own weight, now of a less dense fluid, so it sits deeper: 600/800 = 0.75, or 75% submerged. (c) In any fluid less dense than 600 kg/m³, even full submersion cannot displace the block\'s weight, and it sinks. Example 2: A flat rectangular raft has a base area of 6.0 m², a thickness of 0.30 m and a mass of 540 kg. It floats level in fresh water (1000 kg/m³). (a) What volume of water does the raft displace, and how deep does it sit in the water? (b) What is the raft\'s average density, and does it agree with the fraction submerged? (c) What is the greatest load the raft can carry before its top surface reaches the waterline? (a) ρ_water·V_sub = m, so V_sub = 540/1000 = 0.54 m³, and d = V_sub/A = 0.54/6.0 = 0.090 m (9.0 cm). (b) The raft\'s volume is (6.0)(0.30) = 1.8 m³, so its average density is 540/1.8 = 300 kg/m³ and the fraction submerged should be 300/1000 = 0.30; the depths agree, 0.090/0.30 = 0.30. (c) Fully under, the raft displaces 1.8 m³, which is (1000)(1.8) = 1800 kg of water, so the total mass can be 1800 kg and the load is 1800 − 540 = 1260 kg.',
      pitfalls: [
        'Reporting the fraction submerged when the question asks for the fraction above the surface.',
        'Dividing the densities the wrong way round and getting a "fraction" larger than 1.',
        'Forgetting to subtract the raft\'s own mass from the mass of water it can displace.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-mechanics-fluids-mcat'],
      checkpoint: [
        {
          question: 'A plastic float sits in fresh water (1000 kg/m³) with 75% of its volume below the surface. It is moved to a salt solution of density 1250 kg/m³. What percentage of the float\'s volume is ABOVE the surface in the salt solution?',
          options: ['60%', '25%', '40%', '94%'],
          correctAnswer: 2,
          explanation:
            'In fresh water the submerged fraction gives the float\'s density: (0.75)(1000) = 750 kg/m³. In the salt solution the submerged fraction is 750/1250 = 0.60, so 40% is above the surface. 60% is the fraction BELOW the surface, 25% is the fraction above in fresh water with the denser fluid ignored, and 94% multiplies 0.75 by the density ratio 1.25 instead of dividing, which would make the float sit deeper in the denser liquid.',
        },
        {
          question: 'A solid block floats at rest in a liquid of density 1200 kg/m³ with one-quarter of its volume above the surface. What is the density of the block?',
          options: ['300 kg/m³', '900 kg/m³', '1600 kg/m³', '750 kg/m³'],
          correctAnswer: 1,
          explanation:
            'One-quarter above means three-quarters below, and the fraction BELOW is ρ_object/ρ_fluid, so ρ_object = (0.75)(1200) = 900 kg/m³. 300 kg/m³ uses the fraction above the surface, 1600 kg/m³ divides by 0.75 instead of multiplying and gives a block denser than the liquid, which would sink, and 750 kg/m³ uses water\'s density instead of this liquid\'s.',
        },
        {
          question: 'A floating dock is a flat slab with a base area of 4.0 m², a thickness of 0.50 m and a mass of 600 kg. It floats level in fresh water (1000 kg/m³). What is the greatest load it can carry before its top surface reaches the waterline?',
          options: ['2,000 kg', '2,600 kg', '14,000 kg', '1,400 kg'],
          correctAnswer: 3,
          explanation:
            'Fully under, the dock displaces (4.0)(0.50) = 2.0 m³ of water, which has a mass of 2000 kg. Floating means the displaced water\'s mass equals the total mass, so the load is 2000 − 600 = 1400 kg. 2,000 kg forgets that the dock\'s own 600 kg is part of the total, 2,600 kg adds the dock\'s mass instead of subtracting it, and 14,000 is the load\'s weight in newtons reported as a mass.',
        },
      ],
    },
    // ── 5 · Sinking and apparent weight (concepts) ───────────────────────
    {
      title: 'Sinking and Apparent Weight',
      minutes: 7.5,
      goal: 'Draw the free-body diagram of a fully submerged object, explain why a scale reads less under water, and reason about objects that hang, rest on the bottom or are held under.',
      keyPoints: [
        'A fully submerged object displaces its own VOLUME of fluid, so its weight, ρ_object·V·g, and the buoyant force on it, ρ_fluid·V·g, share the same V. If the object is denser than the fluid, its weight is larger than F_b even with all of it under, at every depth, so it sinks all the way to the bottom.',
        'Free-body diagram of a submerged object: its weight W down, the buoyant force F_b up, and whatever else touches it (a string, a hand, the floor). At rest, the upward forces add up to the downward forces. Being under water never changes the weight itself.',
        'Hung from a scale: T + F_b = W, so the scale reads the apparent weight, W_apparent = W − F_b. The object has not become lighter; the fluid is carrying part of its weight, which is why moving in a pool is easier on the legs.',
        'Resting on the bottom: N + F_b = W, so the floor supplies N = W − F_b, the same as the scale would read. An object that would float, held under by a string or a push: F_b = W + T, so the downward pull is T = F_b − W, the same at any depth.',
        'Weighing in air and then in water finds a volume and a density. The drop in the reading is the buoyant force, F_b = W − W_apparent; then V = F_b/(ρ_fluid·g), because a submerged object displaces its own volume; then ρ_object = m/V with m = W/g. In one line, the density ratio is ρ_object/ρ_fluid = W/F_b.',
        'In water, the ratio W/F_b is the object\'s specific gravity: SG = W/(W − W_apparent), with the TRUE weight on top, never the apparent weight. This is how Archimedes could test a crown for gold (specific gravity about 19) without melting it down. Takeaway: weight in air divided by the weight lost in water is the specific gravity.',
      ],
      showOnScreen: [
        'A dense block released under water with its W and F_b arrows drawn to scale: W longer, the pair unchanged as the block falls through three depths to the floor',
        'Free-body diagrams built one force at a time for three cases side by side: hanging from a spring scale (T, F_b up; W down), resting on the floor (N, F_b up; W down), a float tied down (F_b up; W, T down)',
        'A spring scale holding a block in air, then lowered into a beaker: the reading drops by exactly the length of the F_b arrow, and W_apparent = W − F_b appears',
        'The air-then-water method as a three-step chain: reading drops by F_b, F_b gives V, m over V gives ρ; then the one-line density ratio W/F_b',
        'MCAT-only section: a crown on a scale in air and in water, SG = W/(W − W_apparent) compared with gold\'s value, and its one-line takeaway',
        'The "Remember" recap (shared ideas only): submerged means its own VOLUME displaced; draw W down and F_b up, then the third force; W_apparent = W − F_b = N on the bottom; T = F_b − W when held under; air and water readings give V and ρ',
        'End card: "Up next: Sinking and Apparent Weight: Worked Examples"',
      ],
      pitfalls: [
        'Saying the object weighs less under water: its weight is unchanged, and the scale simply supports less of it.',
        'Leaving the buoyant force off the diagram of an object that rests on the bottom.',
        'Dividing the apparent weight, instead of the true weight, by the buoyant force.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-mechanics-fluids-mcat'],
      mcatOnly: [
        'In water, the ratio W/F_b is the object\'s specific gravity: SG = W/(W − W_apparent), with the TRUE weight on top, never the apparent weight. This is how Archimedes could test a crown for gold (specific gravity about 19) without melting it down. Takeaway: weight in air divided by the weight lost in water is the specific gravity.',
      ],
      checkpoint: [
        {
          question: 'A stone hangs from a spring scale, fully submerged in a beaker of fresh water and touching nothing. The fresh water is replaced with denser salt water, and the stone is again fully submerged. What happens to the reading on the scale?',
          options: [
            'It rises, since the denser liquid presses down harder',
            'It falls, since the buoyant force on the stone is larger',
            'It stays the same, since the stone\'s weight is unchanged',
            'It stays the same, since the stone\'s volume is unchanged',
          ],
          correctAnswer: 1,
          explanation:
            'The scale reads W − F_b. The stone\'s weight and volume are unchanged, but F_b = ρVg uses the fluid\'s density, so the denser salt water pushes up harder and the scale has less left to support: the reading falls. A fluid at rest gives a net push upward, never downward. The unchanged weight and the unchanged volume are both true, but each is only one piece of W − ρVg; the fluid\'s density is the piece that changed.',
        },
        {
          question: 'A solid iron anchor rests at the bottom of a lake, with its rope slack. Which list describes all of the forces acting on the anchor?',
          options: [
            'Weight down; normal force up; no buoyant force at all',
            'Weight and buoyant force both down; normal force up',
            'Weight and normal force both down; buoyant force up',
            'Weight down; buoyant force and normal force both up',
          ],
          correctAnswer: 3,
          explanation:
            'The anchor is still surrounded by water, so the water still pushes up on it with F_b = ρVg; the lake bed supplies the rest of the support, N = W − F_b, so both of those forces point up against the weight. Leaving the buoyant force out is the common error for a sunken object: sinking means F_b is smaller than the weight, not zero. The buoyant force never points down, and the lake bed pushes up on the anchor, not down.',
        },
        {
          question: 'A solid aluminum sphere and a solid lead sphere weigh exactly the same in air. Each hangs from its own spring scale, fully submerged in water. Lead is much denser than aluminum. Which scale shows the smaller reading?',
          options: [
            'The aluminum one, since its larger volume displaces more water',
            'The lead one, since a denser object feels more buoyant force',
            'Neither one, since equal weights mean equal buoyant forces',
            'Neither one, since both spheres hang at the same depth',
          ],
          correctAnswer: 0,
          explanation:
            'With equal weights, the less dense aluminum sphere must be the larger one. A submerged object displaces its own volume, so the aluminum sphere displaces more water, feels the larger buoyant force, and its scale reads W − F_b, the smaller value. The buoyant force depends on the fluid\'s density and the displaced volume, not on the object\'s density; equal weights give equal buoyant forces only for FLOATING objects; and depth does not affect the buoyant force at all.',
        },
      ],
    },
    // ── 6 · Sinking and apparent weight (worked examples) ────────────────
    {
      title: 'Sinking and Apparent Weight: Worked Examples',
      minutes: 6,
      goal: 'Turn a weight in air and a weight in water into a volume and a density, and find the tension, normal force and acceleration for submerged objects from a free-body diagram.',
      keyPoints: [
        'Air-then-water recipe: F_b = W − W_apparent, then V = F_b/(ρ_fluid·g), then m = W/g and ρ = m/V. Check with the density ratio ρ_object/ρ_fluid = W/F_b.',
        'Every other submerged problem is a free-body diagram: W down, F_b = ρVg up, then the third force. Hanging or resting on the bottom, the support is W − F_b; tied down, the string pulls with F_b − W.',
        'Remove the third force and the first two no longer balance: the net force F_b − W gives the acceleration through F_net = ma, with the OBJECT\'s mass.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the implant on a spring scale in air (9.0 N) and in a beaker of water (7.0 N), the three-step chain filling in, then the string cut and the implant on the beaker floor with its three-force diagram',
        'Example 2: the buoy tied to the lake bed with its three-force diagram, the rope cut and the net-force arrow, then the buoy at the surface with 40% below the waterline',
        'The "Remember" recap of the method: weight down, buoyant force up, then the third force',
        'End card: "Up next: Surface Tension"',
      ],
      workedExample:
        'Example 1: A titanium hip implant weighs 9.0 N in air and 7.0 N when it hangs from a string fully submerged in water. Use ρ_water = 1000 kg/m³ and g = 10 m/s². (a) What buoyant force acts on the submerged implant? (b) What is the implant\'s volume? (c) What is its density? (d) The string is cut and the implant comes to rest on the bottom of the beaker. What normal force does the bottom exert on it? (a) F_b = W − W_apparent = 9.0 − 7.0 = 2.0 N. (b) V = F_b/(ρ_water·g) = 2.0/[(1000)(10)] = 2.0 × 10⁻⁴ m³ (200 cm³). (c) m = W/g = 9.0/10 = 0.90 kg, so ρ = 0.90/(2.0 × 10⁻⁴) = 4500 kg/m³. Check with the density ratio: W/F_b = 9.0/2.0 = 4.5 times water\'s density. (d) N + F_b = W, so N = 9.0 − 2.0 = 7.0 N, the same as the string supplied. Example 2: A foam buoy of mass 4.0 kg and volume 0.010 m³ is tied to the bed of a lake by a rope, so that it sits at rest fully under water. Use ρ_water = 1000 kg/m³ and g = 10 m/s². (a) What buoyant force acts on the buoy? (b) What is the tension in the rope? (c) The rope is cut. What is the buoy\'s acceleration at that moment? (d) Once the buoy floats at rest on the surface, what fraction of its volume is submerged? (a) F_b = (1000)(0.010)(10) = 100 N. (b) W = (4.0)(10) = 40 N. The rope pulls down, so F_b = W + T and T = 100 − 40 = 60 N. (c) The net force is now 60 N upward, so a = F_net/m = 60/4.0 = 15 m/s² upward. (d) The buoy\'s density is 4.0/0.010 = 400 kg/m³, so 400/1000 = 0.40 of it is submerged; check: (1000)(0.0040)(10) = 40 N, its weight.',
      pitfalls: [
        'Dividing the apparent weight (or one scale reading by the other) to get the density ratio: it is the TRUE weight over the buoyant force.',
        'Drawing the rope on a tied-down float pulling up: it pulls down, so T = F_b − W.',
        'Dividing the net force by the mass of the displaced water instead of the object\'s mass.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-mechanics-fluids-mcat'],
      checkpoint: [
        {
          question: 'A metal pendant weighs 4.0 N in air and 3.5 N when it hangs fully submerged in water. What is the density of the pendant? (ρ_water = 1000 kg/m³, g = 10 m/s²)',
          options: ['7,000 kg/m³', '1,140 kg/m³', '8,000 kg/m³', '125 kg/m³'],
          correctAnswer: 2,
          explanation:
            'F_b = 4.0 − 3.5 = 0.50 N, so V = 0.50/[(1000)(10)] = 5.0 × 10⁻⁵ m³. The mass is 4.0/10 = 0.40 kg, and ρ = 0.40/(5.0 × 10⁻⁵) = 8000 kg/m³; the density ratio W/F_b = 4.0/0.50 = 8 agrees. 7,000 kg/m³ divides the apparent weight, not the true weight, by the buoyant force; 1,140 kg/m³ divides one scale reading by the other; and 125 kg/m³ inverts the ratio, which would describe an object that floats.',
        },
        {
          question: 'A 3.0 kg float with a volume of 8.0 × 10⁻³ m³ is tied to the floor of a pool by a string and sits at rest, fully under water. What is the tension in the string? (ρ_water = 1000 kg/m³, g = 10 m/s²)',
          options: ['50 N', '80 N', '30 N', '110 N'],
          correctAnswer: 0,
          explanation:
            'The buoyant force is (1000)(8.0 × 10⁻³)(10) = 80 N upward, and the weight is (3.0)(10) = 30 N downward. The string also pulls downward, so F_b = W + T and T = 80 − 30 = 50 N. 80 N is the buoyant force with the weight left out, 30 N is the float\'s weight, and 110 N adds the weight to the buoyant force as if the string had to hold up both.',
        },
        {
          question: 'A 12 kg stone statue with a volume of 4.0 × 10⁻³ m³ rests on the flat bottom of a pond, fully under water. What normal force does the bottom of the pond exert on the statue? (ρ_water = 1000 kg/m³, g = 10 m/s²)',
          options: ['120 N', '80 N', '40 N', '160 N'],
          correctAnswer: 1,
          explanation:
            'The weight is (12)(10) = 120 N downward and the buoyant force is (1000)(4.0 × 10⁻³)(10) = 40 N upward. At rest, N + F_b = W, so N = 120 − 40 = 80 N. 120 N leaves the buoyant force off the diagram, as if a sunken object felt none; 40 N is the buoyant force itself; and 160 N adds the buoyant force to the weight as if the water pushed down.',
        },
      ],
    },
    // ── 7 · Surface tension (concepts, MCAT-only) ────────────────────────
    {
      title: 'Surface Tension',
      minutes: 7,
      goal: 'Explain surface tension from cohesion, predict a meniscus and a capillary rise or fall from the balance of adhesion and cohesion, and explain why the lungs need surfactant.',
      keyPoints: [
        'Cohesion is the attraction between molecules of the same substance (water to water, through hydrogen bonds). Adhesion is the attraction between a liquid and a different material (water to glass).',
        'A molecule inside a liquid is pulled equally in every direction; a molecule at the surface has neighbors only below and beside it, so it feels a net inward pull, and the surface behaves like a stretched elastic skin. Surface tension γ measures that skin\'s strength as a force per unit length along the surface (N/m), or equally the energy needed to create a unit area of new surface. Water\'s is high because of hydrogen bonding.',
        'Consequences: droplets pull into spheres, the shape with the least surface area; a water strider or a carefully placed steel needle rests ON the surface, held up by surface tension rather than buoyancy; soaps and other surfactants (surface-active agents) lower γ.',
        'Capillary action: in a narrow tube the balance of adhesion and cohesion decides. Adhesion stronger (water in glass): the liquid climbs the walls, the meniscus is concave, and the level RISES. Cohesion stronger (mercury in glass): the surface domes up, the meniscus is convex, and the level is pushed DOWN. The narrower the tube, the larger the rise or fall. Capillary action draws blood into a thin glass tube and water into a paper towel.',
        'In the lungs, the alveoli (tiny air sacs) are lined with a thin layer of fluid. Its surface tension pulls inward and tends to collapse each alveolus, and the effect is stronger the smaller the alveolus. Pulmonary surfactant, secreted by type II alveolar cells, lowers that surface tension and keeps small alveoli open; premature infants who cannot yet make enough develop respiratory distress syndrome.',
      ],
      showOnScreen: [
        'A beaker of water at the molecular scale: an interior molecule with pull arrows in every direction that cancel, a surface molecule with arrows only sideways and down, leaving a net inward arrow; then the surface drawn as a taut skin',
        'A wire frame with a sliding side holding a soap film: the film pulls the slider with a force along its length, labeled γ = force per length (N/m)',
        'Three consequences in a row: a droplet rounding into a sphere, a water strider dimpling the surface without breaking it, a needle resting on the surface and dropping through when soap is added',
        'Two sets of tubes, wide to narrow, in water and in mercury: water climbing with concave menisci, mercury pushed down with convex ones, the narrowest tube showing the largest change; the two-row table of adhesion against cohesion filling in beside them',
        'A cluster of alveoli lined with fluid: inward surface-tension arrows, the smallest sac starting to collapse, then surfactant molecules from a type II cell spreading over the lining and the sac reopening',
        'The "Remember" recap: cohesion makes a surface skin (γ in N/m); adhesion wins, concave and up; cohesion wins, convex and down; narrower tube, bigger effect; surfactant lowers γ and keeps small alveoli open',
        'End card: "Up next: Surface Tension: Worked Examples"',
      ],
      pitfalls: [
        'Crediting buoyancy for a needle or an insect resting on the surface: steel is far denser than water.',
        'Swapping the pairings: water in glass is concave and rises; mercury in glass is convex and is pushed down.',
        'Saying surfactant raises surface tension: it lowers it.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-mechanics-fluids-mcat'],
      mcatOnly: 'all',
      mcatOnlyQuestions: [0, 1, 2],
      checkpoint: [
        {
          question: 'Why do the molecules at the surface of a glass of water pull the surface tight, like a stretched skin, while the molecules deep inside the water do not?',
          options: [
            'They carry the weight of the air above, which presses them flat',
            'They attract the air above more strongly than the water below',
            'They pack more tightly than the rest, forming a thin solid layer',
            'They have no water neighbors above, so the net pull is inward',
          ],
          correctAnswer: 3,
          explanation:
            'A molecule deep in the water is attracted equally in every direction, so the pulls cancel. A surface molecule has water neighbors only beside and below it, so cohesion leaves a net inward pull, and the surface contracts like a stretched skin. Air pressure acts on the whole liquid and is not what makes the skin; a stronger attraction to the air would pull the surface outward, not tighten it; and the surface is still liquid, not a solid layer.',
        },
        {
          question: 'The attractions between ethanol molecules are weaker than the hydrogen-bond network between water molecules. How does the surface tension of ethanol compare with that of water, and why?',
          options: [
            'It is higher, because ethanol\'s cohesion is weaker',
            'It is lower, because ethanol\'s cohesion is weaker',
            'It is lower, because ethanol\'s adhesion is weaker',
            'It is the same, because both of them are liquids',
          ],
          correctAnswer: 1,
          explanation:
            'Surface tension comes from cohesion: the attraction of the liquid\'s molecules for one another, which gives surface molecules their net inward pull. Weaker cohesion means a weaker pull and a lower surface tension, which is why water\'s strong hydrogen bonding gives it an unusually high value. "Higher" reverses the link, adhesion is the attraction to a DIFFERENT material and does not set a liquid\'s own surface tension, and liquids differ widely in how strongly their molecules attract.',
        },
        {
          question: 'Two alveoli are lined with the same watery fluid and contain no surfactant. One alveolus is small and the other is large. Which one is at greater risk of collapsing, and why?',
          options: [
            'The small one, where surface tension\'s inward effect is stronger',
            'The large one, since it has more surface area pulling inward',
            'Neither, since the same fluid gives both the same tendency',
            'The large one, since its wall is stretched thinner and weaker',
          ],
          correctAnswer: 0,
          explanation:
            'The surface tension of the lining fluid pulls each alveolus inward, and the collapsing effect is stronger the smaller the alveolus, so the small one is at greater risk. That is why surfactant matters most for the smallest air sacs. More surface area does not mean a stronger collapsing effect, the same fluid does not give the same effect at different sizes, and the argument concerns the fluid lining, not the strength of the wall.',
        },
      ],
    },
    // ── 8 · Surface tension (worked examples, MCAT-only) ─────────────────
    {
      title: 'Surface Tension: Worked Examples',
      minutes: 5,
      goal: 'Predict and explain what a liquid does in a narrow tube from adhesion and cohesion, and reason through surface tension and surfactant in the alveoli.',
      keyPoints: [
        'Capillary method: ask which attraction is stronger. Adhesion stronger means the liquid wets the wall, a concave meniscus and a rise; cohesion stronger means a convex meniscus and a level pushed down. Then rank by width: the narrowest tube shows the largest change.',
        'The same reasoning runs backwards: a meniscus shape tells you which attraction is winning, and so which way the level has moved.',
        'Lung method: surface tension in the lining fluid pulls inward; the effect is strongest in the smallest alveoli; surfactant lowers the surface tension, so less surfactant means more collapse.',
        'These are predict-and-explain problems: every answer needs its "because", in terms of cohesion, adhesion or surface tension.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the three glass tubes in the dish of water and the three in the dish of mercury, the levels and menisci drawn in one tube at a time as each prediction is made, then the 1 mm tube swapped for the waxed one',
        'Example 2: the small and the large alveolus side by side with inward arrows on the lining fluid, surfactant spreading over both, then a type II cell labeled as its source',
        'The "Remember" recap of both methods',
        'End card: "Up next: Flow Rate and Continuity"',
      ],
      workedExample:
        'Example 1: Three clean glass tubes with inner diameters of 4 mm, 2 mm and 1 mm stand upright in a dish of water. Three more tubes of the same sizes stand in a dish of mercury. (a) In each dish, does the liquid inside the tubes stand above or below the level in the dish, and what shape is its meniscus? (b) In each dish, rank the three tubes by how far the liquid level has moved from the level in the dish. (c) The 1 mm glass tube in the water is replaced by a 1 mm tube whose inner wall is coated with wax, which water adheres to only weakly. Predict the meniscus and the level in this tube. (a) Water adheres to glass more strongly than it coheres, so it climbs the walls: a concave meniscus, and the level stands ABOVE the dish. Mercury coheres more strongly than it adheres to glass, so its surface domes up: a convex meniscus, and the level is pushed BELOW the dish. (b) The narrower the tube, the larger the change, in both dishes: 1 mm moves most, then 2 mm, then 4 mm. The water is highest in the 1 mm tube, and the mercury is lowest in the 1 mm tube. (c) With weak adhesion, cohesion now wins, so the water behaves as mercury does in glass: a convex meniscus, and a level pushed below the dish. Example 2: Two alveoli, one small and one large, are lined with the same thin layer of watery fluid. (a) Which way does the surface tension of the lining fluid pull on each alveolus, and what does that tend to do to it? (b) With no surfactant present, which alveolus is more likely to collapse? (c) Surfactant spreads over the lining of both. What does it do to the surface tension, and what does that change? (d) Which cells secrete surfactant, and what is expected in a premature infant whose lungs cannot yet make enough of it? (a) The surface acts like a stretched skin trying to shrink, so it pulls inward on each alveolus and tends to collapse it. (b) The small one: the collapsing effect is stronger the smaller the alveolus. (c) Surfactant lowers the surface tension, so the inward pull weakens and the small alveoli stay open. (d) Type II alveolar cells. Without enough surfactant the surface tension stays high, small alveoli collapse, and the infant develops respiratory distress syndrome.',
      pitfalls: [
        'Reading a domed (convex) surface as a liquid that has risen: convex goes with a level pushed down.',
        'Expecting the wide tube to show the larger rise or fall.',
        'Having surfactant raise surface tension, or blaming collapse on something other than the lining fluid\'s surface tension.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-mechanics-fluids-mcat'],
      mcatOnly: 'all',
      mcatOnlyQuestions: [0, 1, 2],
      checkpoint: [
        {
          question: 'An unknown liquid stands in a narrow glass tube that dips into a dish of the same liquid. Inside the tube, the liquid\'s surface is highest at the center and curves downward where it meets the glass. What does this show?',
          options: [
            'Adhesion beats cohesion, so the level sits above the dish level',
            'Cohesion beats adhesion, so the level sits above the dish level',
            'Cohesion beats adhesion, so the level sits below the dish level',
            'Adhesion beats cohesion, so the level sits below the dish level',
          ],
          correctAnswer: 2,
          explanation:
            'A surface that domes up in the middle is a convex meniscus: the liquid\'s molecules attract one another more strongly than they attract the glass, as mercury\'s do, and such a liquid is pushed down in the tube, below the level outside. Adhesion winning would give a concave meniscus that climbs the walls, with a rise, as for water in glass. The two mixed answers pair a meniscus with the wrong direction of level change.',
        },
        {
          question: 'A drop of pure water sits as a tall, rounded bead on a leaf. A little soap is mixed into the drop, and it flattens and spreads out across the leaf. Why does the drop change shape?',
          options: [
            'Soap lowers the surface tension that was pulling the drop inward',
            'Soap raises the surface tension, which stretches the drop out flat',
            'Soap raises the water\'s density, so the drop\'s weight flattens it',
            'Soap strengthens the water\'s cohesion, so the drop spreads wider',
          ],
          correctAnswer: 0,
          explanation:
            'Surface tension pulls a drop toward the shape with the least surface area, which is why pure water beads up. Soap is a surfactant: it lowers the surface tension, so the inward pull weakens and the drop spreads. Raising the surface tension would round the drop up more, not flatten it; a trace of soap barely changes the density; and stronger cohesion would also pull the drop tighter, the opposite of spreading.',
        },
        {
          question: 'A premature infant with respiratory distress syndrome is given a dose of surfactant directly into the airways. How does the treatment help the infant\'s lungs?',
          options: [
            'It raises surface tension, so the small alveoli stay open',
            'It lowers the fluid\'s viscosity, so air flows in more easily',
            'It raises adhesion to the wall, so fluid drains from the airway',
            'It lowers surface tension, so the small alveoli stay open',
          ],
          correctAnswer: 3,
          explanation:
            'The fluid lining the alveoli has a surface tension that pulls inward and collapses the smallest air sacs. Surfactant lowers that surface tension, so the alveoli stay open and can fill with air. Raising the surface tension would make the collapse worse; surfactant acts on surface tension, not on viscosity; and the problem is collapsing air sacs, not fluid that needs to drain along the airway walls.',
        },
      ],
    },
  ],
}
