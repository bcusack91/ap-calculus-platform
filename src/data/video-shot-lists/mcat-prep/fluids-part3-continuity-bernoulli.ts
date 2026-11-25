import type { ShotList } from '../types'

/**
 * Shot list: MCAT Physics — Fluids Part 3: Continuity & Bernoulli
 * (topic mcat-physics-mechanics-fluid-dynamics-mcat, "Fluids Part 3: Continuity & Bernoulli"; the third of
 * four Fluids video parts).
 *
 * Source: lesson Part 1 only (src/data/interactive-lessons/mcat-mcat-physics-mechanics-fluid-dynamics-mcat-part1.ts),
 * its deck figures (FL_ALL at FLUID_DYNAMICS_AT in src/data/deck-figures/index.ts) and
 * its lesson-built exit pool. Lesson Part 2 (viscosity, Poiseuille, blood-flow
 * resistance, grading a stenosis) belongs to Fluids Part 4 and is not taught here.
 * Eight Manim clips in four pairs (owner format, Nov 2026): a CONCEPT clip that teaches
 * the idea and ends on the "Remember" recap, then a WORKED-EXAMPLES clip with two
 * examples, each shown in full with a pause-and-try prompt before the solution.
 * Clips 1–2: Flow Rate; Continuity: Mass In = Mass Out; Worked Example — Why Capillary
 * Blood Crawls. Clips 3–4: Bernoulli: Energy Conservation for Ideal Fluids (the
 * equation, its terms, fluid at rest, horizontal flow, the standard chain).
 * Clips 5–6: Torricelli's theorem; Worked Example — Torricelli's Tank. Clips 7–8:
 * Venturi effect and meter, pitot tube, atomizer, lift; Worked Example — A Venturi
 * Meter. The low-yield extras (airspeed indicators, Venturi oxygen masks) are left out.
 *
 * REUSE FOR AP PHYSICS 1 (topics "Fluids: Continuity" and "Fluids: Bernoulli's
 * Equation"): each clip is cut into sections, one per key point, and the AP lesson
 * takes the SHARED sections only. Key points listed in a clip's `mcatOnly` are
 * sections only the MCAT lesson keeps; every other key point, every "Remember" recap,
 * every worked example and every checkpoint question is shared and exam-neutral.
 * Symbols follow the AP equation sheet: A₁v₁ = A₂v₂ and
 * P₁ + ρgy₁ + ½ρv₁² = P₂ + ρgy₂ + ½ρv₂² (y is height). Working values: g = 10 m/s²,
 * ρ_water = 1000 kg/m³. The jet's range (clips 5–6) comes from the AP lesson
 * physics1-fluids-bernoulli-part4; the MCAT lesson stops at v = √(2gh).
 *
 * The checkpoint questions are what a YouTube viewer answers at studymondo.com/v/<code>
 * (src/data/video-short-links.ts). Proposed codes: flow1/flow2, bernoulli1/bernoulli2,
 * tank1/tank2, venturi1/venturi2. They use new scenarios and numbers, so they never
 * repeat an exit-quiz item, a lesson practice question or a worked example.
 */
export const shotList: ShotList = {
  courseSlug: 'mcat-prep',
  topicSlug: 'mcat-physics-mechanics-fluid-dynamics-mcat',
  title: 'Fluids Part 3: Continuity & Bernoulli',
  overview:
    'Eight animated clips in four pairs that set the fluid moving: flow rate and the continuity equation, Bernoulli\'s equation as energy conservation, Torricelli\'s theorem for a draining tank, and the Venturi meter and pitot tube that turn a pressure difference into a flow speed. Each idea gets a concept clip followed by a worked-examples clip in which every problem is shown in full, with a moment to pause and try it before the solution. The fluid is ideal throughout (incompressible, non-viscous, in steady laminar flow); viscosity and real blood flow come in Part 4. Narration stays exam-neutral, so the clips also serve introductory physics. Each clip ends with three checkpoint questions.',
  clips: [
    // ── 1 · Flow rate and continuity (concepts) ──────────────────────────
    {
      title: 'Flow Rate and Continuity',
      minutes: 7.5,
      goal: 'Tell flow rate from flow speed, and use continuity to predict how the speed changes when a pipe narrows, widens or branches.',
      keyPoints: [
        'The volume flow rate Q is the volume of fluid passing a cross-section each second: Q = Av. In a time t a slug of length vt passes, a volume A(vt); divide by t. Units are m³/s, with 1 mL = 1 cm³ and 1 L = 10⁻³ m³.',
        'Flow rate is not speed. Q is volume per time and v is distance per time: a wide, slow river carries far more water each second than a narrow, fast stream.',
        'Continuity: fluid cannot pile up inside a rigid, leak-free pipe, so the mass entering each second equals the mass leaving. A liquid is incompressible (ρ is constant), so Q is the same at every cross-section: A₁v₁ = A₂v₂. Narrower means faster. Continuity links geometry to speed and says nothing about pressure.',
        'For a circular pipe A = πr², so v goes as 1/r². Halve the radius (or the diameter) and the area falls to one-quarter, so the speed rises fourfold, not twofold.',
        'Branching: the branch flows add up to the parent flow, A₀v₀ = A₁v₁ + A₂v₂ + …, so the speed in the branches is set by their TOTAL area. Each capillary is far narrower than the aorta, but together the capillaries have about 1000 times its area, so blood moves about 1000 times slower through them.',
        'Clinical flow rates are quoted in mL/min or L/min: a resting heart pumps about 5 L/min, which is 5000 cm³ per 60 s, about 83 cm³/s. Takeaway: convert a clinical flow rate to cm³/s before combining it with a speed in cm/s.',
      ],
      showOnScreen: [
        'A pipe with a shaded slug of fluid of length vt sliding past a marked cross-section while a clock runs; Q = Av builds from the slug\'s volume',
        'A wide slow river beside a narrow fast stream, each with its A, v and Q; the river\'s Q is larger',
        'A pipe that narrows: equal volumes (shaded) pass each cross-section per second, so the slug in the narrow part is longer and its speed arrow is longer; A₁v₁ = A₂v₂',
        'Two circular cross-sections, radius r and r/2, with areas πr² and πr²/4 and speeds v and 4v',
        'A pipe splitting into many small branches with the total branch area added up; then the aorta (3 cm², 30 cm/s) beside the capillary bed (3000 cm² in total, 0.03 cm/s)',
        'A cardiac-output card: 5 L/min → 5000 cm³ / 60 s ≈ 83 cm³/s',
        'The "Remember" recap: Q = Av is volume per time, not speed; A₁v₁ = A₂v₂; speed goes as 1/r²; branches share the flow by TOTAL area',
        'End card: "Up next: Flow Rate and Continuity: Worked Examples"',
      ],
      pitfalls: [
        'Treating flow rate and speed as the same thing.',
        'Forgetting to square the radius: half the radius gives four times the speed.',
        'Single-tube thinking in a branching network: "each branch is narrower, so the fluid must be faster".',
        'Expecting continuity to give a pressure.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-mechanics-fluid-dynamics-mcat'],
      mcatOnly: [
        'Clinical flow rates are quoted in mL/min or L/min: a resting heart pumps about 5 L/min, which is 5000 cm³ per 60 s, about 83 cm³/s. Takeaway: convert a clinical flow rate to cm³/s before combining it with a speed in cm/s.',
      ],
      checkpoint: [
        {
          question: 'A smooth stream of water falling from a faucet gets narrower the farther it falls. Why?',
          options: [
            'It slows as it falls, so the same flow needs less area',
            'It speeds up as it falls, so the same flow needs less area',
            'Its flow rate drops as it falls, so the stream gets thinner',
            'Its density rises as it falls, so the water takes less room',
          ],
          correctAnswer: 1,
          explanation:
            'Gravity speeds the water up as it falls. The same volume passes every level each second, so Q = Av is fixed, and a larger v needs a smaller A. Slower water would need MORE area, not less; the flow rate cannot drop, because no water is lost or stored along the stream; and water is incompressible, so its density does not change.',
        },
        {
          question: 'A river has a cross-section of 20 m² and moves at 0.5 m/s. A mountain stream has a cross-section of 1 m² and moves at 4 m/s. Which statement is correct?',
          options: [
            'The stream carries more water, because it moves faster',
            'They carry equal water, because flow rate is conserved',
            'The river carries more water, and it also moves faster',
            'The river carries more water, though the stream is faster',
          ],
          correctAnswer: 3,
          explanation:
            'Flow rate is Q = Av: the river carries (20)(0.5) = 10 m³/s and the stream (1)(4) = 4 m³/s, even though the stream\'s speed is eight times larger. Choosing the stream confuses speed with flow rate. Continuity makes Q the same along ONE channel, not in two separate ones. And the river is the slower of the two, at 0.5 m/s against 4 m/s.',
        },
        {
          question: 'A pipe splits into four identical branches, each with half the radius of the parent pipe. How does the water\'s speed in each branch compare with its speed in the parent pipe?',
          options: [
            'The same as the speed in the parent pipe',
            'Four times the speed in the parent pipe',
            'One-quarter of the speed in the parent pipe',
            'Twice the speed in the parent pipe',
          ],
          correctAnswer: 0,
          explanation:
            'Half the radius gives each branch one-quarter of the parent\'s area, so four branches together have exactly the parent\'s area, and the same flow through the same total area moves at the same speed. Four times looks at one branch alone, as if all the flow went through it. One-quarter divides the flow among four branches but forgets that each is narrower. Twice comes from one branch with the radius left unsquared.',
        },
      ],
    },
    // ── 2 · Flow rate and continuity (worked examples) ───────────────────
    {
      title: 'Flow Rate and Continuity: Worked Examples',
      minutes: 5.5,
      goal: 'Find a flow rate from a volume and a time, turn it into a speed, and carry that speed through a narrowing and through a branching network.',
      keyPoints: [
        'Start with the flow rate: Q = volume/time, in matching units (1 L = 1000 cm³, minutes to seconds). Then v = Q/A at any cross-section.',
        'Through a narrowing, v₂ = v₁(A₁/A₂). A diameter or radius ratio must be squared to get the area ratio.',
        'In a branching network, divide the one flow rate by the TOTAL area of all the parallel branches.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: a bucket filling from a hose with a stopwatch; the hose and nozzle cross-sections drawn to scale (diameter ratio 3, area ratio 9) while Q, then each speed, appears',
        'Example 2: the aorta feeding a fan of capillaries, with the summed area labeled; the two speeds side by side on one scale',
        'The "Remember" recap of the method: Q first, then v = Q/A; square a radius ratio; use total area for branches',
        'End card: "Up next: Bernoulli\'s Equation"',
      ],
      workedExample:
        'Example 1: A garden hose with a cross-sectional area of 4.0 cm² fills a 12 L bucket in 60 s. The water leaves through a nozzle whose diameter is one-third of the hose\'s. (a) What is the flow rate, in cm³/s? (b) How fast does the water move inside the hose? (c) How fast does it leave the nozzle? (a) Q = 12,000 cm³ / 60 s = 200 cm³/s. (b) v = Q/A = 200/4.0 = 50 cm/s. (c) One-third of the diameter is one-ninth of the area, so the speed is nine times larger: 9 × 50 = 450 cm/s = 4.5 m/s. Example 2: The aorta has a cross-sectional area of about 3 cm² and carries blood at about 30 cm/s. The capillaries it feeds have a TOTAL cross-sectional area of about 3000 cm². (a) What is the flow rate in the aorta, in cm³/s and in L/min? (b) How fast does blood move through the capillaries? (c) Each capillary is far narrower than the aorta. Why is the blood slower there, not faster? (a) Q = Av = (3)(30) = 90 cm³/s; 90 × 60 = 5400 cm³/min = 5.4 L/min. (b) v = Q/A_total = 90/3000 = 0.03 cm/s, 1000 times slower than in the aorta. (c) Continuity applies to the summed area of all the parallel paths, and that total is 1000 times the aorta\'s area; "narrow vessel, so fast blood" is single-tube thinking.',
      pitfalls: [
        'Mixing L with cm³ or minutes with seconds.',
        'Using the diameter ratio (3) as the speed ratio instead of its square (9).',
        'Dividing by one capillary\'s area instead of the total area.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-mechanics-fluid-dynamics-mcat'],
      checkpoint: [
        {
          question: 'A tap fills a 9.0 L jug in 30 s through a pipe with a cross-sectional area of 1.5 cm². How fast does the water move in the pipe?',
          options: ['300 cm/s', '450 cm/s', '200 cm/s', '6000 cm/s'],
          correctAnswer: 2,
          explanation:
            'Q = 9000 cm³ / 30 s = 300 cm³/s, and v = Q/A = 300/1.5 = 200 cm/s (2.0 m/s). 300 is the flow rate in cm³/s, reported as if it were a speed; 450 multiplies the flow rate by the area instead of dividing; and 6000 cm/s divides the 9000 cm³ by the area without dividing by the 30 s.',
        },
        {
          question: 'Water moves at 0.50 m/s through a pipe, then enters a section with one-quarter of the pipe\'s diameter. How fast does it move in the narrow section?',
          options: ['2.0 m/s', '0.125 m/s', '32 m/s', '8.0 m/s'],
          correctAnswer: 3,
          explanation:
            'One-quarter of the diameter is one-sixteenth of the area, so by A₁v₁ = A₂v₂ the speed is 16 times larger: 16 × 0.50 = 8.0 m/s. 2.0 m/s uses the diameter ratio without squaring it; 0.125 m/s has the relationship upside down, slowing the water in the narrow section; and 32 m/s cubes the ratio (64 × 0.50) instead of squaring it.',
        },
        {
          question: 'An artery with a cross-sectional area of 2.0 cm² carries blood at 24 cm/s. It feeds 40 identical smaller vessels in parallel, each with an area of 0.30 cm². How fast does blood move in each small vessel?',
          options: ['160 cm/s', '4.0 cm/s', '0.60 cm/s', '144 cm/s'],
          correctAnswer: 1,
          explanation:
            'Q = (2.0)(24) = 48 cm³/s. The 40 vessels have a total area of 40 × 0.30 = 12 cm², so v = 48/12 = 4.0 cm/s. 160 cm/s sends the whole flow through ONE vessel (48/0.30); 0.60 cm/s divides the speed by 40 and ignores the areas; and 144 cm/s inverts the area ratio (24 × 12/2.0).',
        },
      ],
    },
    // ── 3 · Bernoulli's equation (concepts) ──────────────────────────────
    {
      title: "Bernoulli's Equation",
      minutes: 8,
      goal: 'Read Bernoulli\'s equation as energy conservation per unit volume, and predict how pressure changes when a fluid speeds up, slows down, rises or falls.',
      keyPoints: [
        'The model is an ideal fluid: incompressible (constant ρ), non-viscous (no internal friction) and in steady, laminar flow. Bernoulli\'s equation follows one parcel of that fluid along its path, a streamline.',
        'P₁ + ρgy₁ + ½ρv₁² = P₂ + ρgy₂ + ½ρv₂². This is conservation of energy, written per unit volume: P is the work the fluid can do by pushing, ρgy is gravitational potential energy and ½ρv² is kinetic energy, each per m³ (J/m³ is the same unit as Pa). Here y is HEIGHT above a reference level, not depth. Viscosity would turn some of this energy into heat, which is why the fluid must be ideal.',
        'A fluid at rest is the special case v = 0: P + ρgy is constant, so going down a depth h raises the pressure by ρgh. That is P = P₀ + ρgh.',
        'In horizontal flow the ρgy terms cancel, leaving P + ½ρv² = constant: where the fluid moves faster, its pressure is lower. It feels backwards, but the fluid speeds up into a narrowing BECAUSE the pressure behind it is higher than the pressure ahead; that pressure difference is the net force that accelerates it.',
        'The standard chain: area down, so speed up (continuity), so pressure down (Bernoulli). Rising also lowers the pressure, so in a pipe that both narrows and climbs the two drops add.',
        'In blood vessels the same chain runs both ways: through a short narrowing of an artery the blood moves faster and presses less on the wall, and in a widened segment it moves slower and presses harder. Takeaway: narrower, faster, lower pressure; wider, slower, higher pressure.',
      ],
      showOnScreen: [
        'A streamline through a pipe with one parcel of fluid riding it; the three ideal-fluid assumptions listed beside it',
        'Bernoulli\'s equation with the three terms color-coded and labeled "pressure", "potential energy per volume", "kinetic energy per volume"; a pipe that rises and narrows with stacked energy bars at points 1 and 2 whose total height stays the same',
        'The equation with the v terms struck out, collapsing to P = P₀ + ρgh beside a still tank',
        'A horizontal pipe that narrows: speed arrows grow, a pressure bar shrinks; a parcel entering the narrowing with a large push behind and a small push ahead, and a net-force arrow forward',
        'The chain as three linked boxes: A down → v up → P down, with "continuity" and "Bernoulli" over the arrows; then the same pipe tilted upward with the ρgy drop added',
        'An artery with a short narrowing and, beside it, one with a bulge; speed arrows and wall-pressure arrows on each',
        'The "Remember" recap: Bernoulli is energy conservation per volume; at rest it gives P = P₀ + ρgh; at one height, faster means lower pressure; continuity first, then Bernoulli',
        'End card: "Up next: Bernoulli\'s Equation: Worked Examples"',
      ],
      pitfalls: [
        '"Fast means high pressure": at the same height, faster fluid has LOWER pressure on the walls beside it.',
        'Reading y as depth: in Bernoulli\'s equation y is height, so pressure falls as the fluid rises.',
        'Using Bernoulli before continuity, with the second speed still unknown.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-mechanics-fluid-dynamics-mcat'],
      mcatOnly: [
        'In blood vessels the same chain runs both ways: through a short narrowing of an artery the blood moves faster and presses less on the wall, and in a widened segment it moves slower and presses harder. Takeaway: narrower, faster, lower pressure; wider, slower, higher pressure.',
      ],
      checkpoint: [
        {
          question: 'Water speeds up as it enters the narrow part of a horizontal pipe. What supplies the net force that accelerates it?',
          options: [
            'The pipe walls, which squeeze it forward as they close in',
            'Gravity, because the narrow section holds less weight',
            'The pressure behind it, which is higher than that ahead',
            'The pressure ahead of it, which is higher than that behind',
          ],
          correctAnswer: 2,
          explanation:
            'A parcel of water accelerates forward only if the push from behind exceeds the push from ahead, so the wide section must be at higher pressure than the narrow one. That is exactly Bernoulli\'s result for horizontal flow. A non-viscous fluid feels no forward force from the walls; gravity acts downward and cannot accelerate water along a horizontal pipe; and a higher pressure ahead would slow the water down.',
        },
        {
          question: 'Pipe X is horizontal and narrows to half its area. Pipe Y narrows in the same way while also climbing 2 m. Both carry the same flow of water. In which pipe does the pressure drop more between the wide and the narrow section?',
          options: [
            'Pipe Y, since narrowing and climbing both lower pressure',
            'Pipe X, since climbing slows the water and raises pressure',
            'Neither, since the speeds change by the same amount',
            'Pipe X, since height adds a ρgy term to the pressure',
          ],
          correctAnswer: 0,
          explanation:
            'The speed change is the same in both pipes, so the ½ρv² term takes the same amount from the pressure in each. In pipe Y the ρgy term also grows, and that energy comes out of the pressure too, so the two drops add. Climbing does not slow the water (continuity fixes the speeds from the areas alone); "neither" ignores the height term; and gaining height takes from the pressure instead of adding to it.',
        },
        {
          question: 'Two sheets of paper hang side by side a few centimeters apart. When air is blown straight down the gap between them, the sheets swing toward each other. Why?',
          options: [
            'The moving air drags both sheets inward along with it',
            'The moving air in the gap has higher pressure than outside',
            'The still air outside speeds up and so pushes harder',
            'The moving air in the gap has lower pressure than outside',
          ],
          correctAnswer: 3,
          explanation:
            'The air in the gap moves fast, so its pressure is lower than that of the still air on the outer faces, and the larger outside pressure pushes the sheets together. The air moves along the sheets, not toward them, so drag cannot pull them inward; higher pressure in the gap would push the sheets apart; and the outside air stays still, pushing with ordinary atmospheric pressure.',
        },
      ],
    },
    // ── 4 · Bernoulli's equation (worked examples) ───────────────────────
    {
      title: "Bernoulli's Equation: Worked Examples",
      minutes: 6,
      goal: 'Run the chain from areas to speeds to pressures, in a horizontal pipe and in one that also changes height.',
      keyPoints: [
        'Label points 1 and 2 and list P, v and y at each. Continuity gives the unknown speed first: v₂ = v₁(A₁/A₂).',
        'Horizontal pipe: P₁ − P₂ = ½ρ(v₂² − v₁²). Square each speed, then subtract; never square the difference.',
        'With a height change: P₁ − P₂ = ½ρ(v₂² − v₁²) + ρg(y₂ − y₁). Speeding up and climbing both lower the pressure, so the two terms add.',
        'Check with the fluid at rest: the speed terms vanish and only ρg(y₂ − y₁) is left, the hydrostatic result.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: a horizontal pipe narrowing from 12 cm² to 4 cm², points 1 and 2 marked, speed arrows and pressure gauges filling in as each step is done',
        'Example 2: a pipe rising 5 m into a section of half the area; the kinetic drop (13.5 kPa) and the height drop (50 kPa) stacked as two bars taken off 250 kPa; then the same pipe with the water at rest',
        'A side note crossing out (v₂ − v₁)² and ticking v₂² − v₁²',
        'The "Remember" recap of the method: continuity first, then Bernoulli; difference of squares; add the height term',
        'End card: "Up next: Torricelli\'s Theorem"',
      ],
      workedExample:
        'Example 1: Water (ρ = 1000 kg/m³) flows at 2 m/s through a horizontal pipe with a cross-sectional area of 12 cm², where the pressure is 150 kPa. The pipe narrows to 4 cm². (a) How fast does the water move in the narrow section? (b) What is the pressure there? (a) Continuity: v₂ = v₁(A₁/A₂) = (2)(12/4) = 6 m/s. (b) Horizontal, so P₁ − P₂ = ½ρ(v₂² − v₁²) = ½(1000)(36 − 4) = 16,000 Pa = 16 kPa, and P₂ = 150 − 16 = 134 kPa. Example 2: Water (ρ = 1000 kg/m³) enters a building at ground level, moving at 3 m/s at a pressure of 250 kPa. The pipe rises 5 m to a section with half the cross-sectional area. Use g = 10 m/s². (a) How fast does the water move in the upper section? (b) What is the pressure there? (c) If the taps are closed so the water is at rest, with 250 kPa still at ground level, what is the pressure in the upper section? (a) Half the area, so twice the speed: v₂ = 6 m/s. (b) P₁ − P₂ = ½ρ(v₂² − v₁²) + ρg(y₂ − y₁) = ½(1000)(36 − 9) + (1000)(10)(5) = 13,500 + 50,000 = 63,500 Pa, so P₂ = 250 − 63.5 = 186.5 kPa. (c) With v = 0 only the height term is left: P₂ = 250 − 50 = 200 kPa, the hydrostatic result P = P₀ + ρgh read from the top down.',
      pitfalls: [
        'Squaring the difference: (6 − 2)² = 16 gives 8 kPa in Example 1 instead of 16 kPa.',
        'Adding the pressure change in the fast section instead of subtracting it.',
        'Leaving out the upstream speed, or the height term.',
        'Mixing kPa with Pa in the last step.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-mechanics-fluid-dynamics-mcat'],
      checkpoint: [
        {
          question: 'Water (ρ = 1000 kg/m³) flows at 2 m/s through a horizontal pipe with an area of 10 cm², where the pressure is 120 kPa. The pipe narrows to 5 cm². What is the pressure in the narrow section?',
          options: ['126 kPa', '114 kPa', '118 kPa', '112 kPa'],
          correctAnswer: 1,
          explanation:
            'Continuity gives v₂ = (2)(10/5) = 4 m/s. Then P₁ − P₂ = ½(1000)(16 − 4) = 6000 Pa, so P₂ = 120 − 6 = 114 kPa. 126 kPa adds the change, as if faster fluid had higher pressure; 118 kPa squares the difference in speeds, (4 − 2)² = 4, for a drop of only 2 kPa; and 112 kPa subtracts ½ρv₂² = 8 kPa and forgets the upstream speed.',
        },
        {
          question: 'Water (ρ = 1000 kg/m³) flows at 4 m/s through a pipe, then rises 4 m into a section with half the cross-sectional area. By how much is the pressure in the upper section lower than in the lower section? (g = 10 m/s²)',
          options: ['40 kPa', '24 kPa', '16 kPa', '64 kPa'],
          correctAnswer: 3,
          explanation:
            'Half the area doubles the speed to 8 m/s. P₁ − P₂ = ½ρ(v₂² − v₁²) + ρg(y₂ − y₁) = 500(64 − 16) + (1000)(10)(4) = 24,000 + 40,000 = 64,000 Pa. Speeding up and climbing both lower the pressure, so the terms add. 40 kPa counts only the climb, 24 kPa only the speed change, and 16 kPa subtracts the kinetic term as if speeding up raised the pressure.',
        },
        {
          question: 'Water (ρ = 1000 kg/m³) flows at 5 m/s through a horizontal pipe with an area of 2 cm², which then widens to 5 cm². Compared with the narrow section, the pressure in the wide section is:',
          options: ['Higher by 10.5 kPa', 'Lower by 10.5 kPa', 'Higher by 4.5 kPa', 'Higher by 12.5 kPa'],
          correctAnswer: 0,
          explanation:
            'Continuity gives v₂ = (5)(2/5) = 2 m/s. The water slows, so its pressure rises: P₂ − P₁ = ½ρ(v₁² − v₂²) = 500(25 − 4) = 10,500 Pa. "Lower" gets the direction backwards, since the wide section is the slow one; 4.5 kPa squares the difference in speeds, (5 − 2)² = 9; and 12.5 kPa is ½ρv₁² alone, as if the water stopped in the wide section.',
        },
      ],
    },
    // ── 5 · Torricelli's theorem (concepts) ──────────────────────────────
    {
      title: "Torricelli's Theorem",
      minutes: 7,
      goal: 'Derive the speed of a jet leaving a hole in an open tank, and predict how it depends on depth, on the liquid and on gravity.',
      keyPoints: [
        'The setup: a wide, open tank with a small hole a depth h below the liquid surface. Take point 1 at the surface and point 2 in the jet just outside the hole. Both are open to the air, so P₁ = P₂ = atmospheric pressure, and because the tank is far wider than the hole the surface barely moves: v₁ ≈ 0.',
        'Bernoulli then reduces to ρgh = ½ρv², so v = √(2gh). This is the speed of an object dropped from rest through a height h: each parcel trades the potential energy of its drop for kinetic energy.',
        'The density cancels, so water, oil and mercury all leave at the same speed from the same depth. Only g and the depth below the surface matter.',
        'The speed goes as the square root of the depth: twice the depth gives √2 times the speed, and it takes four times the depth to double it.',
        'As the tank drains, h shrinks, so the exit speed falls, and so does the flow rate Q = A_hole·v. The tank empties more and more slowly.',
        'The jet is a projectile. Leaving horizontally at v from a hole a height H above the ground, it falls for t = √(2H/g) and lands a distance R = vt = 2√(hH) from the tank.',
      ],
      showOnScreen: [
        'A wide open tank with a small hole in its side: points 1 (surface) and 2 (jet) marked, depth h labeled, "P₁ = P₂ = P_atm" and "v₁ ≈ 0" appearing beside them',
        'Bernoulli\'s equation written between the two points, with the pressure terms and the v₁ term struck out, leaving ρgh = ½ρv² and then v = √(2gh)',
        'A stone dropped beside the tank through the same height h, reaching the same speed as the jet',
        'Three tanks (water, oil, mercury) with holes at the same depth and identical jets; ρ crossed out on both sides of the equation',
        'A graph of v against h, a square-root curve, with the points h, 2h and 4h marked',
        'The tank draining in time-lapse: the level falls, the jet shortens, and a Q read-out drops',
        'The jet as a parabola from a hole at height H: horizontal speed v, fall time t, range R = 2√(hH)',
        'The "Remember" recap: v = √(2gh), the free-fall speed; no ρ in it; square-root dependence on depth; slower as the tank drains; range R = vt',
        'End card: "Up next: Torricelli\'s Theorem: Worked Examples"',
      ],
      pitfalls: [
        'Forgetting the square root: twice the depth does not give twice the speed.',
        'Measuring h from the bottom of the tank instead of from the surface down to the hole.',
        'Expecting a denser liquid to leave faster.',
        'Using the depth h, not the hole\'s height H above the ground, for the fall time.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-mechanics-fluid-dynamics-mcat'],
      checkpoint: [
        {
          question: 'A wide open tank leaks through a small hole. The same tank, filled to the same depth, is set up in a laboratory where g is one-quarter as large. How does the speed of the jet compare?',
          options: [
            'One-quarter as fast, since v goes as g',
            'Just as fast, since g cancels as ρ does',
            'Twice as fast, since less weight holds it back',
            'Half as fast, since v goes as the root of g',
          ],
          correctAnswer: 3,
          explanation:
            'From v = √(2gh), the speed goes as the square root of g, so one-quarter of g gives half the speed. One-quarter as fast forgets the square root. The density cancels out of ρgh = ½ρv², but g does not: gravity is what drives the flow. And weaker gravity gives each parcel less potential energy to turn into speed, so the jet is slower, not faster.',
        },
        {
          question: 'An open tank drains through a small hole near its base. As the water level falls, what happens to the volume of water leaving the hole each second?',
          options: [
            'It stays the same, because the hole\'s area is fixed',
            'It falls, because the exit speed falls with the depth',
            'It rises, because less water is left to hold it back',
            'It stays the same, because flow rate is conserved',
          ],
          correctAnswer: 1,
          explanation:
            'The flow out is Q = A_hole·v with v = √(2gh). As the depth h above the hole shrinks, v falls, and so does Q. A fixed area fixes Q only if the speed is fixed too. The water above the hole drives the jet instead of holding it back. And continuity makes Q the same along a pipe at one moment; it does not stop Q from changing as time goes on.',
        },
        {
          question: 'A tank standing on the ground holds water 1.0 m deep. One small hole is 0.20 m below the surface, and another is 0.80 m below the surface. Which jet lands farther from the tank?',
          options: [
            'The lower jet, because it leaves the tank faster',
            'The upper jet, because it spends longer in the air',
            'Neither: both land the same distance from the tank',
            'The lower jet, because it has less distance to fall',
          ],
          correctAnswer: 2,
          explanation:
            'The range is R = vt = 2√(hH), with h the depth of the hole and H its height above the ground. The upper hole has h = 0.20 m and H = 0.80 m; the lower has h = 0.80 m and H = 0.20 m. The product hH is the same, so both land 2√0.16 = 0.80 m away. The lower jet is faster but falls for a shorter time, and the upper jet is in the air longer but is slower; the two effects cancel exactly here. Less distance to fall shortens the range.',
        },
      ],
    },
    // ── 6 · Torricelli's theorem (worked examples) ───────────────────────
    {
      title: "Torricelli's Theorem: Worked Examples",
      minutes: 5.5,
      goal: 'Find the exit speed and flow rate from a hole in a tank, follow them as the tank drains, and find where the jet lands.',
      keyPoints: [
        'Exit speed: v = √(2gh), with h measured from the surface down to the hole.',
        'Flow out: Q = A_hole·v, with the hole\'s area in m² (1 cm² = 10⁻⁴ m²) and 10⁻³ m³/s = 1 L/s.',
        'As the level falls, redo v with the new depth: a quarter of the depth gives half the speed.',
        'Range: the jet leaves horizontally, so the fall time comes from the hole\'s height H above the ground, t = √(2H/g), and R = vt.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: a tank with a hole 3.2 m below the surface; the jet and a liters-per-second read-out; then the level lowered to 0.80 m above the hole with a shorter jet',
        'Example 2: a tank on a stand with the hole 0.45 m below the surface and 0.80 m above the floor; the jet\'s parabola with v, t and R filling in; then the water swapped for oil with the same jet',
        'The "Remember" recap of the method: v = √(2gh), Q = A·v, fall time from H, R = vt',
        'End card: "Up next: Venturi and Pitot Tubes"',
      ],
      workedExample:
        'Example 1: A wide, open tank of water has a small hole with an area of 2.0 cm², 3.2 m below the water surface. Use g = 10 m/s². (a) How fast does the water leave the hole? (b) How much water flows out each second? (c) Later, the depth of water above the hole has fallen to 0.80 m. What are the exit speed and the flow rate then? (a) v = √(2gh) = √(2 × 10 × 3.2) = √64 = 8 m/s. (b) Q = Av = (2.0 × 10⁻⁴ m²)(8 m/s) = 1.6 × 10⁻³ m³/s = 1.6 L/s. (c) v = √(2 × 10 × 0.80) = √16 = 4 m/s: a quarter of the depth gives half the speed, and Q = (2.0 × 10⁻⁴)(4) = 8.0 × 10⁻⁴ m³/s = 0.80 L/s. Example 2: An open tank of water stands on a platform. A small hole in its side is 0.45 m below the water surface and 0.80 m above the floor, and the water leaves horizontally. Use g = 10 m/s². (a) How fast does the water leave the hole? (b) How long does the water take to reach the floor? (c) How far from the tank does the jet land? (d) The water is replaced by oil of density 800 kg/m³, filled to the same level. How do the answers change? (a) v = √(2 × 10 × 0.45) = √9 = 3 m/s. (b) The jet starts with no vertical speed, so 0.80 = ½(10)t², t² = 0.16, t = 0.4 s. (c) R = vt = (3)(0.4) = 1.2 m. (d) They do not change: ρ cancels out of v = √(2gh), and the fall does not depend on density.',
      pitfalls: [
        'Leaving the hole\'s area in cm² when the speed is in m/s.',
        'Halving the speed when the depth halves; the speed goes as √h.',
        'Using the depth 0.45 m for the fall time instead of the height 0.80 m.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-mechanics-fluid-dynamics-mcat'],
      checkpoint: [
        {
          question: 'A wide open tank of water has a small hole with an area of 0.50 cm², 2.45 m below the water surface. How much water flows out each second? (g = 10 m/s²)',
          options: ['0.35 L/s', '3.5 L/s', '0.25 L/s', '2.45 L/s'],
          correctAnswer: 0,
          explanation:
            'v = √(2 × 10 × 2.45) = √49 = 7 m/s, and Q = Av = (0.50 × 10⁻⁴ m²)(7 m/s) = 3.5 × 10⁻⁴ m³/s = 0.35 L/s. 3.5 L/s converts 0.50 cm² to 0.50 × 10⁻³ m², a factor of 10 too large; 0.25 L/s leaves the 2 out of √(2gh), giving about 4.9 m/s; and 2.45 L/s forgets the square root and uses 49 m/s.',
        },
        {
          question: 'Water leaves a small hole in an open tank at 6.0 m/s. Later, the depth of water above the hole has fallen to one-ninth of its first value. How fast does the water leave now?',
          options: ['0.67 m/s', '18 m/s', '2.0 m/s', '6.0 m/s'],
          correctAnswer: 2,
          explanation:
            'The speed goes as √h, so one-ninth of the depth gives one-third of the speed: 6.0/3 = 2.0 m/s. 0.67 m/s divides by 9, as if the speed were proportional to the depth; 18 m/s multiplies by 3, as if a lower level sped the jet up; and 6.0 m/s assumes the exit speed depends only on the hole and not on the depth above it.',
        },
        {
          question: 'A small hole in the side of an open water tank is 0.80 m below the water surface and 1.25 m above the floor. The water leaves horizontally. How far from the tank does it land? (g = 10 m/s²)',
          options: ['1.0 m', '2.0 m', '1.6 m', '5.0 m'],
          correctAnswer: 1,
          explanation:
            'v = √(2 × 10 × 0.80) = √16 = 4 m/s. The fall: 1.25 = ½(10)t², so t = 0.5 s, and R = vt = (4)(0.5) = 2.0 m. 1.0 m takes the fall time as 2H/g = 0.25 s, with no square root; 1.6 m uses the depth 0.80 m for the fall, giving t = 0.4 s; and 5.0 m multiplies the speed by the height, 4 × 1.25.',
        },
      ],
    },
    // ── 7 · Venturi and pitot tubes (concepts) ───────────────────────────
    {
      title: 'Venturi and Pitot Tubes',
      minutes: 7.5,
      goal: 'Explain how a Venturi meter and a pitot tube turn a pressure difference into a flow speed, and apply the same idea to an atomizer and a wing.',
      keyPoints: [
        'The Venturi effect: pressure drops in a constriction. The area goes down, so the speed goes up, so the pressure goes down, and it recovers when the pipe widens again.',
        'A Venturi meter is a horizontal pipe with a narrow throat and an open vertical tube above the wide section and above the throat. The liquid stands lower over the throat, and the height difference reads the pressure difference: ΔP = ρgΔh.',
        'From ΔP and the two areas, the speed follows: continuity gives v₂ = v₁(A₁/A₂), and Bernoulli gives ΔP = ½ρ(v₂² − v₁²), two equations for the two speeds. Because ΔP goes as v², doubling the flow makes the height difference four times as large.',
        'A pitot tube points straight into the flow. Fluid meeting its open tip is brought to rest, so the pressure there, the stagnation pressure, is P + ½ρv², where P is the ordinary (static) pressure read by a port on the side. The difference is ΔP = ½ρv², so v = √(2ΔP/ρ).',
        'Atomizer: a fast stream of air across the top of a tube lowers the pressure there, and atmospheric pressure on the liquid below pushes it up the tube and into the stream.',
        'Lift: a wing is shaped and tilted so that air moves faster over its top than beneath it. Faster air on top means lower pressure on top, and the pressure difference times the wing\'s area is an upward force, F = ΔP·A.',
      ],
      showOnScreen: [
        'A horizontal pipe with a throat: speed arrows lengthen in the throat while a pressure trace dips there and recovers',
        'The same pipe as a Venturi meter, with two open vertical tubes; the column over the throat stands lower, and Δh is bracketed with ΔP = ρgΔh',
        'The two equations side by side, continuity and Bernoulli, with ΔP and the areas going in and v₁ coming out; then the flow doubled and Δh growing to four times its size',
        'A pitot tube facing the flow: streamlines parting around the tip, the one that hits the tip stopping ("stagnation point, v = 0"); a side port labeled "static P"; a gauge between the two reading ½ρv²',
        'An atomizer: air blown across the top of a dip tube, the liquid rising and breaking into spray',
        'A wing cross-section with closer streamlines above than below, pressure arrows larger underneath, and a net upward arrow F = ΔP·A',
        'The "Remember" recap: a constriction is fast and low in pressure; a Venturi meter reads ΔP = ρgΔh, then continuity plus Bernoulli give the speed; a pitot tube reads ΔP = ½ρv²; faster air above a wing means lift',
        'End card: "Up next: Venturi and Pitot Tubes: Worked Examples"',
      ],
      pitfalls: [
        'Expecting the liquid to stand HIGHER over the throat because the fluid there is fast.',
        'Using the pitot formula v = √(2ΔP/ρ) for a Venturi meter, where the fluid is moving at both points.',
        'Saying the air stream "sucks" liquid up an atomizer: the higher atmospheric pressure below pushes it up.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-mechanics-fluid-dynamics-mcat'],
      checkpoint: [
        {
          question: 'In a horizontal Venturi meter the liquid stands lower in the open tube over the throat. The flow is then reversed, at the same flow rate, so the fluid enters from the other end. What do the two tubes show now?',
          options: [
            'The opposite: the liquid now stands higher over the throat',
            'The same: the liquid still stands lower over the throat',
            'Equal levels, since the two pressure changes cancel out',
            'A lower level in whichever of the tubes is downstream',
          ],
          correctAnswer: 1,
          explanation:
            'Continuity sets the speeds from the areas, whichever way the fluid runs, so the throat is still the fast section, and by Bernoulli the fast section has the lower pressure. Bernoulli\'s equation contains v², which has no direction. A higher level over the throat would need the throat to be the slow section; equal levels would need equal speeds; and in an ideal fluid pressure does not simply fall in the direction of flow.',
        },
        {
          question: 'Why is the pressure at the open tip of a pitot tube higher than the static pressure of the fluid flowing past it?',
          options: [
            'The fluid stops there, so its kinetic energy becomes pressure',
            'The fluid speeds up there, and faster fluid has more pressure',
            'The tip sits deeper in the stream, so ρgy adds to the pressure',
            'The tube is narrow there, so the fluid is squeezed much harder',
          ],
          correctAnswer: 0,
          explanation:
            'At the tip the fluid is brought to rest. Along that streamline P + ½ρv² is constant, so when the ½ρv² term falls to zero the pressure rises by exactly that amount: the stagnation pressure is P + ½ρv². The fluid slows at the tip instead of speeding up, and faster fluid would have lower pressure anyway. The tip and the side port are at the same height, and a narrow tube does not by itself raise the pressure of the fluid in it.',
        },
        {
          question: 'A Venturi meter carries water. It is then used for an oil that is less dense than water, flowing at the same volume flow rate. How does the pressure difference between the wide section and the throat change?',
          options: [
            'It is larger, because a lighter fluid moves faster',
            'It is the same, because the two speeds are the same',
            'It is the same, because ρ cancels, as in Torricelli',
            'It is smaller, because ΔP is proportional to ρ',
          ],
          correctAnswer: 3,
          explanation:
            'The same flow rate through the same areas gives the same two speeds, and ΔP = ½ρ(v₂² − v₁²) is proportional to the density, so the less dense oil shows a smaller pressure difference. The oil does not move faster: Q and the areas fix the speeds. Equal speeds do not mean equal ΔP, because ρ multiplies the whole expression. And ρ cancels in Torricelli\'s theorem only because it appears on both sides there; here it appears once.',
        },
      ],
    },
    // ── 8 · Venturi and pitot tubes (worked examples) ────────────────────
    {
      title: 'Venturi and Pitot Tubes: Worked Examples',
      minutes: 6,
      goal: 'Work back from a measured pressure difference to a flow speed and flow rate with a Venturi meter, and to an airspeed and a lift force with a pitot tube.',
      keyPoints: [
        'Venturi meter: turn the height difference into a pressure difference, ΔP = ρgΔh. Write v₂ in terms of v₁ with continuity, put it into ΔP = ½ρ(v₂² − v₁²), and solve for v₁. Then Q = A₁v₁.',
        'Pitot tube: the reading is stagnation minus static pressure, ΔP = ½ρv², so v = √(2ΔP/ρ). Use the density of the fluid that is moving (air is about 1.2 kg/m³).',
        'Lift: ΔP = ½ρ(v_top² − v_bottom²), and the force is F = ΔP·A.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: a Venturi meter with areas 6.0 cm² and 2.0 cm² and water columns differing by 0.40 m; ΔP, then v₂ = 3v₁, then the algebra collapsing to 4ρv₁², then Q',
        'Example 2: a light aircraft with a pitot tube on its wing and a gauge reading 1500 Pa; then the wing cross-section with 60 m/s above and 50 m/s below, ΔP, and the lift arrow',
        'The "Remember" recap of the method: Δh → ΔP → speeds (continuity plus Bernoulli) → Q; pitot ΔP = ½ρv²; lift = ΔP·A',
        'End card: "Up next: Viscosity and Real Fluids"',
      ],
      workedExample:
        'Example 1: Water (ρ = 1000 kg/m³) flows through a horizontal Venturi meter whose wide section has an area of 6.0 cm² and whose throat has an area of 2.0 cm². The water levels in the two open tubes differ by 0.40 m. Use g = 10 m/s². (a) What is the pressure difference between the wide section and the throat? (b) How fast does the water move in the wide section and in the throat? (c) What is the volume flow rate? (a) ΔP = ρgΔh = (1000)(10)(0.40) = 4000 Pa, lower in the throat. (b) Continuity: v₂ = v₁(6.0/2.0) = 3v₁. Bernoulli: ΔP = ½ρ(v₂² − v₁²) = ½ρ(9v₁² − v₁²) = 4ρv₁², so 4000 = 4000v₁², v₁ = 1 m/s and v₂ = 3 m/s. (c) Q = A₁v₁ = (6.0 × 10⁻⁴ m²)(1 m/s) = 6.0 × 10⁻⁴ m³/s = 0.60 L/s. Example 2: A pitot tube on a light aircraft reads a stagnation pressure 1500 Pa above the static pressure. Take the density of air as 1.2 kg/m³. (a) What is the airspeed? (b) Air passes over the top of the wing at 60 m/s and beneath it at 50 m/s. How much lower is the pressure on top? (c) The wing\'s area is 15 m². What is the lift force? (a) ½ρv² = 1500, so v² = 2(1500)/1.2 = 2500 and v = 50 m/s. (b) ΔP = ½ρ(v_top² − v_bottom²) = ½(1.2)(3600 − 2500) = (0.6)(1100) = 660 Pa. (c) F = ΔP·A = (660)(15) = 9900 N, upward.',
      pitfalls: [
        'Treating the Venturi reading as ½ρv² of one speed; both sections are moving, so both speeds appear.',
        'Squaring the difference in speeds: (60 − 50)² = 100 gives 60 Pa instead of 660 Pa.',
        'Using the density of water for an air stream, or leaving g out of ΔP = ρgΔh.',
        'Stopping at the pressure difference when the question asks for a force.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-mechanics-fluid-dynamics-mcat'],
      checkpoint: [
        {
          question: 'Water (ρ = 1000 kg/m³) flows through a horizontal Venturi meter with a wide section of area 8.0 cm² and a throat of area 4.0 cm². The water levels in its two open tubes differ by 0.60 m. How fast does the water move in the WIDE section? (g = 10 m/s²)',
          options: ['4.0 m/s', '3.5 m/s', '2.0 m/s', '0.63 m/s'],
          correctAnswer: 2,
          explanation:
            'ΔP = ρgΔh = (1000)(10)(0.60) = 6000 Pa. Continuity gives v₂ = 2v₁, so ΔP = ½ρ(4v₁² − v₁²) = 1500v₁², and v₁² = 4, v₁ = 2.0 m/s. 4.0 m/s is the speed in the throat; 3.5 m/s uses the pitot formula √(2ΔP/ρ) = √12, as if the water were at rest in one section; and 0.63 m/s leaves g out of ΔP = ρgΔh.',
        },
        {
          question: 'A pitot tube faces into a stream of water. The water stands 0.45 m higher in the pitot tube than in an open tube that reads the static pressure. How fast is the stream moving? (g = 10 m/s²)',
          options: ['9.0 m/s', '2.1 m/s', '0.95 m/s', '3.0 m/s'],
          correctAnswer: 3,
          explanation:
            'The extra height reads the pressure difference: ρgΔh = ½ρv², so v = √(2gΔh) = √(2 × 10 × 0.45) = √9 = 3.0 m/s. 9.0 m/s stops at v² and never takes the square root; 2.1 m/s leaves out the factor of 2 (√4.5); and 0.95 m/s leaves out g (√0.9).',
        },
        {
          question: 'Air (ρ = 1.2 kg/m³) moves at 70 m/s over the top of a wing and at 60 m/s beneath it. The wing\'s area is 10 m². What is the lift force on the wing?',
          options: ['7,800 N', '600 N', '15,600 N', '780 N'],
          correctAnswer: 0,
          explanation:
            'ΔP = ½ρ(v_top² − v_bottom²) = ½(1.2)(4900 − 3600) = (0.6)(1300) = 780 Pa, and F = ΔP·A = (780)(10) = 7,800 N. 600 N squares the difference in speeds, (70 − 60)² = 100, for only 60 Pa; 15,600 N drops the ½; and 780 is the pressure difference in pascals, never multiplied by the area.',
        },
      ],
    },
  ],
}
