import type { ShotList } from '../types'

/**
 * Shot list: MCAT Physics — Fluids Part 1: Density & Pressure
 * (topic mcat-physics-mechanics-fluids-mcat, "Fluids at Rest"; the first of four Fluids video parts).
 *
 * Source: lesson Part 1 only (src/data/interactive-lessons/mcat-mcat-physics-mechanics-fluids-mcat-part1.ts),
 * its deck figures (hydrostatic pressure and Pascal's lift in src/data/deck-figures/mcat-cp-fluids-waves.ts;
 * specific gravity, barometer and manometer, and the IV bag in src/data/deck-figures/mcat-cp-fluids.ts)
 * and its lesson-built exit pool. Lesson Part 2 (buoyancy, surface tension) belongs to video Part 2.
 * Eight Manim clips in four pairs (owner format, Nov 2026): a CONCEPT clip that teaches the idea and
 * ends on the "Remember" recap, then a WORKED-EXAMPLES clip with two examples, each shown in full
 * with a pause-and-try prompt before the solution. Concept clips get conceptual checkpoint questions;
 * worked-example clips get questions that mirror their two examples with new numbers.
 * Clips 1–2 follow "Density and Specific Gravity". Clips 3–4 follow "Pressure" (P = F/A, pressure
 * versus depth). Clips 5–6 follow "Gauge vs. absolute pressure", "Barometers, Manometers and Blood
 * Pressure" and "Worked Example — Hanging an IV Bag". Clips 7–8 follow "Pascal's Principle" and
 * "Worked Example — Hydraulic Lift". All eight clips cover lesson part 1.
 *
 * REUSE FOR AP PHYSICS 1 (topic "Fluids: Density & Pressure"): each clip is cut into sections,
 * about one per key point, and the AP lesson takes only the SHARED sections. MCAT-only material
 * sits in key points of its own, listed word for word in `mcatOnly`, with any question that
 * depends on it listed in `mcatOnlyQuestions`:
 *   clip 1: specific gravity (1 key point, question 3)
 *   clip 2: the specific-gravity example (1 key point, question 3)
 *   clip 5: blood-pressure readings, and blood pressure with height (2 key points, question 3)
 * Clips 3, 4, 6, 7 and 8 are shared in full. Every "Remember" recap covers shared ideas only.
 * Symbols follow the AP equation sheet: ρ, P = P₀ + ρgh, P = F/A. Working values match the lesson:
 * g = 10 m/s², ρ_water = 1000 kg/m³, 1 atm ≈ 1.0 × 10⁵ Pa = 760 mmHg, 1 mmHg ≈ 133 Pa.
 *
 * The checkpoint questions are what a YouTube viewer answers at studymondo.com/v/<code>
 * (src/data/video-short-links.ts). Proposed codes: density1/density2, depth1/depth2,
 * gauge1/gauge2, pascal1/pascal2. They use new scenarios and numbers, so they never repeat
 * an exit-quiz item or a worked example.
 */
export const shotList: ShotList = {
  courseSlug: 'mcat-prep',
  topicSlug: 'mcat-physics-mechanics-fluids-mcat',
  title: 'Fluids Part 1: Density & Pressure',
  overview:
    'Eight animated clips in four pairs that build fluids at rest from the ground up: what density is, how pressure grows with depth, the difference between gauge and absolute pressure and the instruments that measure each, and how Pascal\'s principle lets a hydraulic lift multiply force. Each idea gets a concept clip followed by a worked-examples clip in which every problem is shown in full, with a moment to pause and try it before the solution. Narration stays exam-neutral, and each clip is cut into sections so that introductory physics lessons can reuse the shared ones; specific gravity and blood pressure sit in sections of their own. Each clip ends with three checkpoint questions. Part 2 continues with buoyancy.',
  clips: [
    // ── 1 · Density and specific gravity (concepts) ──────────────────────
    {
      title: 'Density and Specific Gravity',
      minutes: 6.5,
      goal: 'Define density, convert between g/cm³ and kg/m³ using water as the anchor, explain why liquids are treated as incompressible, and read a specific gravity as a density.',
      keyPoints: [
        'A fluid is any substance that flows: liquids and gases. A fluid at rest cannot hold a sideways (shear) force, so it can only push perpendicular to any surface it touches.',
        'Density is mass per unit volume, ρ = m/V, in kg/m³. It belongs to the material, not the sample: cut a block in half and both m and V halve, so ρ is unchanged.',
        'Water is the anchor: 1 g/cm³ = 1 g/mL = 1000 kg/m³ = 1 kg/L. To convert a density from g/cm³ to kg/m³, multiply by 1000.',
        'Rearranged, m = ρV, and weight follows from density: W = mg = ρVg.',
        'Liquids barely compress, so they are treated as incompressible, with constant density. Gases compress, and their density rises with pressure.',
        'Specific gravity is a substance\'s density divided by the density of water, SG = ρ/ρ_water. It is a ratio, so it has no units, and it equals the density written in g/cm³: SG 0.8 means 800 kg/m³. Ice 0.92, water 1.00, seawater 1.03, blood 1.05, mercury 13.6. Takeaway: multiply SG by 1000 to get kg/m³.',
      ],
      showOnScreen: [
        'Water in a tilted glass and a gas filling a jar: arrows on the walls, always perpendicular to the surface',
        'A block with m and V readouts being cut in half: both readouts halve while the ρ readout holds steady',
        'A 1 cm cube of water (1 g) beside a 1 m cube of water (1000 kg) and a 1 L carton (1 kg), with the ×1000 conversion arrow',
        'ρ = m/V rearranging to m = ρV, then W = ρVg',
        'A piston pressing on a liquid (volume holds, ρ constant) and on a gas (volume shrinks, ρ climbing)',
        'The specific-gravity ladder: ice 0.92, water 1.00, seawater 1.03, blood 1.05, mercury 13.6, each with its density in kg/m³',
        'The "Remember" recap (shared ideas only): ρ = m/V; density belongs to the material; water is 1000 kg/m³ = 1 g/cm³; g/cm³ × 1000 = kg/m³; m = ρV and W = ρVg; liquids incompressible, gases not',
        'End card: "Up next: Density and Specific Gravity: Worked Examples"',
      ],
      pitfalls: [
        'Thinking a smaller piece of a material is less dense because it has less mass.',
        'Dividing by 1000 instead of multiplying when going from g/cm³ to kg/m³.',
        'Giving specific gravity units, or reporting 800 for a specific gravity of 0.8.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-mechanics-fluids-mcat'],
      mcatOnly: [
        'Specific gravity is a substance\'s density divided by the density of water, SG = ρ/ρ_water. It is a ratio, so it has no units, and it equals the density written in g/cm³: SG 0.8 means 800 kg/m³. Ice 0.92, water 1.00, seawater 1.03, blood 1.05, mercury 13.6. Takeaway: multiply SG by 1000 to get kg/m³.',
      ],
      mcatOnlyQuestions: [2],
      checkpoint: [
        {
          question: 'A solid block of aluminum is sawed so that one piece has one-quarter of the original volume. Compared with the original block, the small piece has:',
          options: [
            'The same mass and four times the density',
            'One-quarter the mass and one-quarter the density',
            'One-quarter the mass and the same density',
            'One-quarter the mass and four times the density',
          ],
          correctAnswer: 2,
          explanation:
            'Density belongs to the material. The small piece has one-quarter of the volume and one-quarter of the mass, so ρ = m/V is unchanged. "The same mass" forgets that the mass is shared between the pieces; "one-quarter the density" treats density as if it shrank with the sample, like mass; and "four times the density" shrinks the volume in ρ = m/V correctly but then lets the density rise, as if the mass in that formula had not shrunk with it.',
        },
        {
          question: 'The outlet of a bicycle pump is sealed, and the handle is pushed in until the trapped air fills one-third of its original volume. What happens to the density of the trapped air?',
          options: [
            'It triples: same mass, a third of the volume',
            'It is unchanged, since no air has escaped',
            'It falls to a third, along with the volume',
            'It is unchanged, as fluids do not compress',
          ],
          correctAnswer: 0,
          explanation:
            'No air escapes, so the mass is fixed while the volume drops to one-third, and ρ = m/V triples. "Unchanged, since no air has escaped" confuses constant mass with constant density; "falls to a third" makes density follow the volume instead of dividing by it; and "fluids do not compress" applies the rule for liquids to a gas, which compresses easily.',
        },
        {
          question: 'A bottle label lists a liquid\'s specific gravity as 0.79. Which statement about the liquid is correct?',
          options: [
            'Its density is 0.79 kg/m³, or 790 g/cm³',
            'Its density is 790 kg/m³, or 0.79 g/cm³',
            'Its density is 79 kg/m³, or 0.79 g/cm³',
            'Its density is 790 kg/m³, or 7.9 g/cm³',
          ],
          correctAnswer: 1,
          explanation:
            'Specific gravity equals the density in g/cm³, so ρ = 0.79 g/cm³, and multiplying by 1000 gives 790 kg/m³. "0.79 kg/m³, or 790 g/cm³" swaps the two units; 79 kg/m³ multiplies by 100 instead of 1000; and 7.9 g/cm³ slips a power of ten going back from kg/m³ to g/cm³.',
        },
      ],
    },
    // ── 2 · Density and specific gravity (worked examples) ───────────────
    {
      title: 'Density and Specific Gravity: Worked Examples',
      minutes: 5,
      goal: 'Find a density from mass and volume in both unit systems, use it to get the mass and weight of a larger sample, and turn a specific gravity into a density and a mass.',
      keyPoints: [
        'Find the density first, ρ = m/V, in the units given; grams with cm³ gives g/cm³, and × 1000 turns that into kg/m³.',
        'To find how much mass fills a volume, use m = ρV with matching units: kg/m³ with m³, or g/cm³ with cm³ (1 L = 1000 cm³ = 10⁻³ m³).',
        'Weight is mass times g: W = ρVg, in newtons.',
        'When a specific gravity is given, the density in g/cm³ is the same number, and × 1000 gives kg/m³; then m = ρV as before. Takeaway: a specific gravity is a density in disguise.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the metal cylinder on a balance (540 g) and in a graduated cylinder (200 cm³), the density in both units, then a 0.050 m³ block of the same metal with its mass and weight',
        'Example 2: the 2.0 L bottle of oil with SG 0.90, its density in both units and its mass, then the much smaller volume of mercury with the same mass beside it',
        'The "Remember" recap of the method (shared ideas only): ρ = m/V; × 1000 for kg/m³; m = ρV with matching units; W = mg',
        'End card: "Up next: Pressure and Depth"',
      ],
      workedExample:
        'Example 1: A metal cylinder has a mass of 540 g and a volume of 200 cm³. Use g = 10 m/s². (a) What is its density in g/cm³ and in kg/m³? (b) What is the mass of a 0.050 m³ block of the same metal? (c) What is the weight of that block? (a) ρ = 540 g / 200 cm³ = 2.7 g/cm³, and × 1000 gives 2700 kg/m³; (b) m = ρV = (2700 kg/m³)(0.050 m³) = 135 kg; (c) W = mg = (135 kg)(10 m/s²) = 1350 N. Example 2: A bottle holds 2.0 L of an oil with a specific gravity of 0.90. (a) What is the oil\'s density in g/cm³ and in kg/m³? (b) What is the mass of the oil? (c) What volume of mercury (specific gravity 13.6) has that same mass? (a) The density in g/cm³ equals the specific gravity, 0.90 g/cm³, and × 1000 gives 900 kg/m³; (b) 2.0 L = 2000 cm³, so m = (0.90 g/cm³)(2000 cm³) = 1800 g = 1.8 kg; (c) V = m/ρ = 1800 g / 13.6 g/cm³ ≈ 130 cm³, about one-fifteenth of the oil\'s volume.',
      pitfalls: [
        'Inverting the ratio and computing V/m.',
        'Mixing unit systems, such as kg/m³ with liters or cm³.',
        'Stopping at the mass when the weight is asked.',
        'Dividing by the specific gravity when the mass is wanted.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-mechanics-fluids-mcat'],
      mcatOnly: [
        'When a specific gravity is given, the density in g/cm³ is the same number, and × 1000 gives kg/m³; then m = ρV as before. Takeaway: a specific gravity is a density in disguise.',
      ],
      mcatOnlyQuestions: [2],
      checkpoint: [
        {
          question: 'A stone has a mass of 150 g and a volume of 60 cm³. What is its density in SI units?',
          options: ['400 kg/m³', '2.5 kg/m³', '9000 kg/m³', '2500 kg/m³'],
          correctAnswer: 3,
          explanation:
            'ρ = m/V = 150 g / 60 cm³ = 2.5 g/cm³, and multiplying by 1000 gives 2500 kg/m³. 400 kg/m³ inverts the ratio (60/150 = 0.40) before converting; 2.5 kg/m³ leaves out the × 1000 conversion; and 9000 kg/m³ multiplies mass by volume instead of dividing.',
        },
        {
          question: 'Concrete has a density of 2400 kg/m³. What is the weight of a 0.50 m³ concrete slab? (g = 10 m/s²)',
          options: ['12,000 N', '1200 N', '48,000 N', '4800 N'],
          correctAnswer: 0,
          explanation:
            'm = ρV = (2400)(0.50) = 1200 kg, and W = mg = (1200)(10) = 12,000 N. 1200 N is the mass in kilograms reported as a weight; 48,000 N divides the density by the volume (2400/0.50 = 4800) and then multiplies by g; and 4800 N makes the same division and also leaves out g.',
        },
        {
          question: 'A liquid medication has a specific gravity of 1.2. What is the mass of a 250 mL bag of it?',
          options: ['208 g', '300 g', '250 g', '3000 g'],
          correctAnswer: 1,
          explanation:
            'A specific gravity of 1.2 means 1.2 g/cm³, which is 1.2 g/mL, so m = ρV = (1.2)(250) = 300 g. 208 g divides the volume by the specific gravity instead of multiplying; 250 g treats the liquid as water; and 3000 g reads 250 mL as 2.5 L when converting.',
        },
      ],
    },
    // ── 3 · Pressure and depth (concepts) ────────────────────────────────
    {
      title: 'Pressure and Depth',
      minutes: 7.5,
      goal: 'Define pressure, explain why it grows with depth as P = P₀ + ρgh, and predict how pressure compares at different depths and in containers of different shapes.',
      keyPoints: [
        'Pressure is force per unit area, P = F/A, with the force taken perpendicular to the surface; 1 Pa = 1 N/m². The same force on a smaller area gives a larger pressure, which is why a needle tip pierces skin.',
        'Pressure is a scalar: at any point in a fluid at rest it pushes equally in all directions, and the force it produces on a surface always acts perpendicular to that surface.',
        'Why depth matters: a column of liquid of area A and height h weighs ρ(Ah)g, spread over area A, so it adds ρgh. Add whatever presses on the surface, P₀ (usually the atmosphere): P = P₀ + ρgh, where h is the depth below the surface.',
        'Depth, not shape: only ρ, g and h appear, so a narrow tube and a wide lake have the same pressure at the same depth. In one connected fluid at rest, every point at the same level has the same pressure.',
        'Linear in depth: a graph of P against h is a straight line of slope ρg that starts at P₀, not at zero. Doubling the depth doubles ρgh but not the total P.',
        'Rule of thumb: in water, ρgh = (1000)(10)(10) = 10⁵ Pa for every 10 m, about one extra atmosphere (1 atm ≈ 1.0 × 10⁵ Pa) per 10 m of depth.',
      ],
      showOnScreen: [
        'The same force arrow on a wide block and on a needle tip, with the pressure readout jumping as the area shrinks',
        'A small probe turning at one point under water: the pressure arrows stay the same length in every direction, always perpendicular to its face',
        'A column of water of area A and height h lifted out of a tank: its weight ρAhg divided by A, leaving ρgh, then the atmosphere pressing on top as P₀',
        'Connected vessels of different shapes (narrow tube, wide basin, flared vase, slanted arm) filled to one level, with equal pressure readouts along one horizontal line',
        'The graph of P against depth: a straight line starting at P₀, with the depth doubled and the total pressure shown to be less than doubled',
        'A diver descending in water with a readout: 1 atm at the surface, 2 atm at 10 m, 3 atm at 20 m',
        'The "Remember" recap: P = F/A; pressure acts equally in all directions; P = P₀ + ρgh; depth, not shape; same level, same pressure; a straight line that starts at P₀; about +1 atm per 10 m of water',
        'End card: "Up next: Pressure and Depth: Worked Examples"',
      ],
      pitfalls: [
        'Expecting a wider or fuller container to give more pressure at the same depth.',
        'Doubling the total pressure when the depth doubles, forgetting that P₀ stays fixed.',
        'Leaving P₀ out when the total pressure is asked.',
        'Confusing force with pressure: a large force on a large area can be a small pressure.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-mechanics-fluids-mcat'],
      checkpoint: [
        {
          question: 'The same push is applied to a sharp knife and to a dull knife. Why does the sharp knife cut more easily?',
          options: [
            'More force on the same area, so more pressure',
            'The same pressure on less area, so more force',
            'Less force on less area, so the same pressure',
            'The same force on less area, so more pressure',
          ],
          correctAnswer: 3,
          explanation:
            'The push (the force) is the same, but the sharp edge touches a much smaller area, so P = F/A is much larger. "More force" is wrong because sharpening does not change how hard you push; "the same pressure, so more force" swaps which quantity is fixed; and "less force on less area" changes the force that the question holds constant.',
        },
        {
          question: 'Dam A holds back a lake 50 km long, and dam B holds back a pond 50 m long. The water is 20 m deep at the face of each dam. How do the water pressures at the base of the two dams compare?',
          options: [
            'Greater at A, which holds back more water',
            'Equal, because the two depths are the same',
            'Greater at B, where the water is confined',
            'Equal only if the two dams are equally wide',
          ],
          correctAnswer: 1,
          explanation:
            'P = P₀ + ρgh contains only the density, g and the depth, so 20 m of water gives the same pressure at the base of each dam. "Greater at A" assumes the total amount of water matters; "greater at B" imagines that confinement squeezes the water; and "only if equally wide" brings in the dam\'s width, which changes the total FORCE on the dam but not the pressure at a given depth.',
        },
        {
          question: 'A sensor is lowered steadily from the surface of an open lake. Which description fits a graph of the total pressure on it against its depth?',
          options: [
            'A straight line that starts from zero',
            'A curve that grows steeper with depth',
            'A straight line that starts from P₀',
            'A flat line that stays at the value P₀',
          ],
          correctAnswer: 2,
          explanation:
            'P = P₀ + ρgh is linear in h with slope ρg, and at h = 0 the total pressure is already P₀, the pressure of the atmosphere on the surface. A line from zero graphs only the ρgh part and leaves out the atmosphere; a steepening curve would need the water to get denser with depth, but a liquid is treated as incompressible; and a flat line says depth adds nothing, although every extra meter adds the weight of another meter of water.',
        },
      ],
    },
    // ── 4 · Pressure and depth (worked examples) ─────────────────────────
    {
      title: 'Pressure and Depth: Worked Examples',
      minutes: 5.5,
      goal: 'Compute the pressure added by a depth of water and the total pressure, turn a pressure into a force on an area, and compare the pressures at two depths.',
      keyPoints: [
        'The liquid adds ρgh; the total is P = P₀ + ρgh. Decide which one the question asks for.',
        'A pressure becomes a force through F = PA, with the area in m².',
        'Between two depths in the same liquid the pressure difference is ρgΔh; P₀ cancels.',
        'Doubling the depth doubles ρgh, not the total. In water, count about 1 atm for every 10 m and add the 1 atm at the surface.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: a pool in cross-section, 3.0 m deep, with a pressure bar split into the P₀ part and the ρgh part, then the drain cover with its area and the force arrow on it',
        'Example 2: a diver at 15 m and then 30 m, the two pressure bars side by side (2.5 and 4.0 × 10⁵ Pa), the ratio 1.6 beside the depth ratio 2, then the faceplate with the extra force',
        'The "Remember" recap of the method: ρgh from the liquid; add P₀ for the total; F = PA; differences use ρgΔh',
        'End card: "Up next: Gauge vs. Absolute Pressure"',
      ],
      workedExample:
        'Example 1: An outdoor swimming pool is 3.0 m deep. Use ρ = 1000 kg/m³ for water, g = 10 m/s² and P₀ = 1.0 × 10⁵ Pa for the atmosphere. (a) How much pressure does the water add at the bottom? (b) What is the total pressure at the bottom? (c) A drain cover on the floor has an area of 0.020 m². What total force pushes down on its top face? (d) How deep would a lake have to be for the total pressure at its bottom to be double the pressure at its surface? (a) ρgh = (1000)(10)(3.0) = 3.0 × 10⁴ Pa; (b) P = P₀ + ρgh = 1.0 × 10⁵ + 0.3 × 10⁵ = 1.3 × 10⁵ Pa; (c) F = PA = (1.3 × 10⁵)(0.020) = 2600 N; (d) the water must add another 1.0 × 10⁵ Pa, so h = (1.0 × 10⁵)/((1000)(10)) = 10 m. Example 2: A diver in a freshwater lake swims from a depth of 15 m down to 30 m. Use ρ = 1000 kg/m³, g = 10 m/s² and P₀ = 1.0 × 10⁵ Pa. (a) What is the total pressure at 15 m? (b) What is the total pressure at 30 m? (c) The depth doubled; by what factor did the total pressure grow? (d) The faceplate of her mask has an area of 0.010 m². How much more force does the water put on it at 30 m than at 15 m? (a) P = 1.0 × 10⁵ + (1000)(10)(15) = 2.5 × 10⁵ Pa; (b) P = 1.0 × 10⁵ + (1000)(10)(30) = 4.0 × 10⁵ Pa; (c) 4.0/2.5 = 1.6, not 2, because P₀ did not double; (d) ΔP = ρgΔh = (1000)(10)(15) = 1.5 × 10⁵ Pa, so ΔF = ΔP·A = (1.5 × 10⁵)(0.010) = 1500 N.',
      pitfalls: [
        'Reporting ρgh alone when the total pressure is asked, or the total when only the added pressure is asked.',
        'Leaving out g in ρgh.',
        'Scaling the total pressure in proportion to the depth.',
        'Dividing the pressure by the area to get a force instead of multiplying.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-mechanics-fluids-mcat'],
      checkpoint: [
        {
          question: 'The open tank of a water tower holds water 8.0 m deep. What is the total pressure at the floor of the tank? (ρ = 1000 kg/m³, g = 10 m/s², P₀ = 1.0 × 10⁵ Pa)',
          options: ['8.0 × 10⁴ Pa', '1.08 × 10⁵ Pa', '1.8 × 10⁵ Pa', '8.0 × 10⁵ Pa'],
          correctAnswer: 2,
          explanation:
            'ρgh = (1000)(10)(8.0) = 8.0 × 10⁴ Pa, and adding P₀ gives 1.0 × 10⁵ + 0.8 × 10⁵ = 1.8 × 10⁵ Pa. 8.0 × 10⁴ Pa is the water\'s part alone, without the atmosphere; 1.08 × 10⁵ Pa leaves g out of ρgh; and 8.0 × 10⁵ Pa multiplies atmospheric pressure by the depth, as if each meter of water added a whole atmosphere.',
        },
        {
          question: 'A flat viewing window with an area of 0.050 m² is set into the wall of a research vessel, 20 m below the surface of a lake. What total force does the water exert on the window\'s outer face? (ρ = 1000 kg/m³, g = 10 m/s², P₀ = 1.0 × 10⁵ Pa)',
          options: ['1.5 × 10⁴ N', '1.0 × 10⁴ N', '5.0 × 10³ N', '6.0 × 10⁶ N'],
          correctAnswer: 0,
          explanation:
            'The total pressure at 20 m is P = 1.0 × 10⁵ + (1000)(10)(20) = 3.0 × 10⁵ Pa, so F = PA = (3.0 × 10⁵)(0.050) = 1.5 × 10⁴ N. 1.0 × 10⁴ N uses only ρgh and leaves out the atmosphere pressing on the lake; 5.0 × 10³ N uses only P₀ and leaves out the water; and 6.0 × 10⁶ N divides the pressure by the area instead of multiplying.',
        },
        {
          question: 'A diver in a freshwater lake descends from a depth of 5 m to a depth of 20 m. By what factor does the total pressure on her increase? (About 1 atm is added for every 10 m of water.)',
          options: ['4.0 times', '3.0 times', '1.5 times', '2.0 times'],
          correctAnswer: 3,
          explanation:
            'At 5 m the total is 1 + 0.5 = 1.5 atm, and at 20 m it is 1 + 2 = 3.0 atm, so the pressure doubles. "4.0 times" is the ratio of the depths, which applies only to the ρgh part; "3.0 times" is the pressure at 20 m in atmospheres, not the factor of increase; and "1.5 times" is the 1.5 atm that was added, reported as a ratio.',
        },
      ],
    },
    // ── 5 · Gauge vs. absolute pressure (concepts) ───────────────────────
    {
      title: 'Gauge vs. Absolute Pressure',
      minutes: 8,
      goal: 'Tell gauge pressure from absolute pressure, convert between pascals, atmospheres and mmHg, and explain what a barometer, an open-tube manometer and a blood-pressure cuff each measure.',
      keyPoints: [
        'Absolute pressure is the total P. Gauge pressure is the amount above atmospheric, P_gauge = P − P_atm, which for an open liquid is just ρgh. A tire gauge reads gauge pressure, and gauge pressure can be negative: below atmospheric, as in a drinking straw. Absolute pressure is never below zero.',
        'Units: 1 atm ≈ 1.0 × 10⁵ Pa = 760 mmHg = 760 torr, about 10 m of water. A millimeter of mercury is the pressure under a 1 mm column of mercury: ρgh = (13,600)(9.8)(0.001) ≈ 133 Pa.',
        'Barometer: a mercury-filled tube turned upside down in a dish of mercury. The column falls until ρgh at its base matches the atmosphere pushing on the dish. The space above the mercury is nearly a vacuum, so the reading is ABSOLUTE: 760 mm at sea level, shorter at high altitude. Water would need a column 13.6 times taller, about 10.3 m.',
        'Open-tube manometer: a U-tube of liquid with one arm connected to the gas and the other open to the air. The liquid is pushed DOWN on the higher-pressure side, and the height difference gives P − P_atm = ρgΔh, a GAUGE pressure, because the open arm already carries the atmosphere.',
        'Blood pressure: a reading of 120/80 is a peak (systolic) pressure of 120 mmHg and a minimum (diastolic) pressure of 80 mmHg, both GAUGE. Gauge pressure in the body can be negative: the thin fluid layer between the lungs and the chest wall sits at about −4 mmHg. Takeaway: clinical pressures are gauge readings in mmHg; add 760 mmHg for the absolute pressure.',
        'Blood obeys ρgh too, which is why the cuff is kept at heart level. In a standing adult, arteries in the feet are about 1.2 m below the heart, so their pressure is higher by about (1000)(10)(1.2) = 1.2 × 10⁴ Pa ≈ 90 mmHg; arteries in the head, above the heart, have lower pressure. Takeaway: below the heart add ρgh, above the heart subtract it.',
      ],
      showOnScreen: [
        'Two dials on one tank, one labeled absolute and one labeled gauge, always P_atm apart; a flat tire reading 0 gauge and 1 atm absolute; a drinking straw with a negative gauge reading',
        'The unit table filling row by row: 1 atm ≈ 1.0 × 10⁵ Pa; 760 mmHg = 760 torr; 1 mmHg ≈ 133 Pa; about 10 m of water',
        'A mercury barometer being inverted: the column settling at 760 mm with "vacuum" labeled above it, then shrinking as it is carried up a mountain; a 10.3 m water column beside it for scale',
        'An open-tube manometer attached to a gas tank: the liquid pushed down on the tank side, Δh marked, P − P_atm = ρgΔh; then the reverse case with the tank below atmospheric',
        'A blood-pressure cuff at heart level with the 120/80 trace, labeled gauge, and 880/840 mmHg shown as the absolute values',
        'A standing figure with pressure readouts at the head, heart and feet: lower above the heart, about 90 mmHg higher at the feet',
        'The "Remember" recap (shared ideas only): absolute = gauge + atmospheric; gauge can be negative, absolute cannot; 1 atm ≈ 1.0 × 10⁵ Pa = 760 mmHg; a barometer reads absolute; an open manometer reads gauge, ρgΔh',
        'End card: "Up next: Gauge vs. Absolute: Worked Examples"',
      ],
      pitfalls: [
        'Reporting a gauge reading when the absolute pressure is asked, or subtracting atmospheric pressure when it should be added.',
        'Thinking a gauge reading of zero means no pressure at all.',
        'Reading a manometer backwards: the liquid stands LOWER on the higher-pressure side.',
        'Expecting a wider barometer tube to give a different column height.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-mechanics-fluids-mcat'],
      mcatOnly: [
        'Blood pressure: a reading of 120/80 is a peak (systolic) pressure of 120 mmHg and a minimum (diastolic) pressure of 80 mmHg, both GAUGE. Gauge pressure in the body can be negative: the thin fluid layer between the lungs and the chest wall sits at about −4 mmHg. Takeaway: clinical pressures are gauge readings in mmHg; add 760 mmHg for the absolute pressure.',
        'Blood obeys ρgh too, which is why the cuff is kept at heart level. In a standing adult, arteries in the feet are about 1.2 m below the heart, so their pressure is higher by about (1000)(10)(1.2) = 1.2 × 10⁴ Pa ≈ 90 mmHg; arteries in the head, above the heart, have lower pressure. Takeaway: below the heart add ρgh, above the heart subtract it.',
      ],
      mcatOnlyQuestions: [2],
      checkpoint: [
        {
          question: 'A car tire has gone completely flat, and a tire gauge pressed onto its valve reads zero. What is the absolute pressure of the air inside the tire?',
          options: [
            'Zero, since the tire holds no air at all',
            'About 1 atm, the same as the air outside',
            'About 2 atm, the gauge value plus outside',
            'Below zero, since it is a partial vacuum',
          ],
          correctAnswer: 1,
          explanation:
            'A gauge reads the amount ABOVE atmospheric pressure, so a reading of zero means the air inside is at atmospheric pressure: about 1 atm absolute. "Zero" treats the gauge reading as absolute; a flat tire still holds air at the pressure of its surroundings. "About 2 atm" adds an atmosphere that the gauge reading does not contain, and an absolute pressure can never be below zero.',
        },
        {
          question: 'A little air leaks into the space above the mercury in a barometer. How does the height of the mercury column change?',
          options: [
            'It drops, as the trapped air pushes down',
            'It rises, as the trapped air lifts it up',
            'It stays put, as the dish alone sets it',
            'It drops, as the mercury becomes denser',
          ],
          correctAnswer: 0,
          explanation:
            'The atmosphere on the dish must balance everything above the base of the column. With a vacuum on top that is only the mercury, ρgh. Trapped air adds its own pressure on top, so a shorter column is enough and the mercury drops; the barometer now reads low. Air cannot pull the column up, since a gas only pushes; "stays put" ignores the new pressure on top of the column; and a little air above the mercury does not change the mercury\'s density.',
        },
        {
          question: 'A patient\'s blood pressure is taken with the cuffed arm held straight up, well above the heart. Compared with a reading taken at heart level, this reading is:',
          options: [
            'Higher, as blood must be pumped uphill',
            'The same, as cuffs read gauge pressure',
            'Lower, as the cuff is above the heart',
            'The same, as blood is one joined fluid',
          ],
          correctAnswer: 2,
          explanation:
            'Blood obeys ρgh: a point above the heart has LESS pressure than at heart level, by ρgh for its height, so the raised arm reads low. "Higher" reverses the direction; pressure falls as you go up in a fluid, whatever is pumping it. Reading gauge pressure does not cancel a height difference, since atmospheric pressure is the same at both heights but the column of blood is not. And a connected fluid has equal pressure only at the SAME level.',
        },
      ],
    },
    // ── 6 · Gauge vs. absolute pressure (worked examples) ────────────────
    {
      title: 'Gauge vs. Absolute: Worked Examples',
      minutes: 5.5,
      goal: 'Read an open-tube manometer for gauge and absolute pressure, and find the gauge pressure a hanging IV bag creates at the needle, in pascals and in mmHg.',
      keyPoints: [
        'Open-tube manometer: the liquid stands higher in the arm with the LOWER pressure. Gauge pressure is ρgΔh; absolute pressure adds P_atm.',
        'The same pressure difference holds up a taller column of a less dense liquid: ρ₁Δh₁ = ρ₂Δh₂.',
        'A column of liquid at rest creates a gauge pressure ρgh at its base, where h is the HEIGHT of the liquid surface above that point. The width of the container and the amount of liquid do not matter.',
        'Convert at the end: divide pascals by 133 to get mmHg. Fluid flows from higher pressure to lower pressure.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: a gas tank on a mercury manometer, the open arm 0.20 m higher, the gauge and absolute pressures building up, then the same tank on a water manometer with the column stretching to 2.72 m',
        'Example 2: an IV bag with its fluid surface 1.0 m above the needle, the ρgh bar at the needle (1.0 × 10⁴ Pa ≈ 75 mmHg) beside the much shorter bar for the vein, a flow arrow into the arm, then the bag lowered to 0.13 m where the bars match',
        'The "Remember" recap of the method: gauge = ρgΔh; absolute = gauge + P_atm; only the height counts; pascals ÷ 133 = mmHg',
        'End card: "Up next: Pascal\'s Principle"',
      ],
      workedExample:
        'Example 1: A gas tank is connected to one arm of an open-tube manometer filled with mercury (ρ = 13,600 kg/m³). The mercury in the open arm stands 0.20 m higher than the mercury in the arm connected to the tank. Use g = 10 m/s² and P_atm = 1.0 × 10⁵ Pa. (a) Is the gas above or below atmospheric pressure? (b) What is the gauge pressure of the gas? (c) What is its absolute pressure? (d) If the manometer were filled with water (ρ = 1000 kg/m³) instead, what would the height difference be? (a) Above: the gas has pushed the mercury down on its own side and up the open arm; (b) P_gauge = ρgΔh = (13,600)(10)(0.20) = 2.72 × 10⁴ Pa; (c) P = P_atm + P_gauge = 1.0 × 10⁵ + 0.272 × 10⁵ ≈ 1.27 × 10⁵ Pa; (d) Δh = P_gauge/(ρg) = (2.72 × 10⁴)/((1000)(10)) = 2.72 m, 13.6 times the mercury difference. Example 2: A bag of saline (ρ = 1000 kg/m³) hangs so that the fluid surface in the bag is 1.0 m above the needle in a patient\'s arm. Use g = 10 m/s² and 1 mmHg ≈ 133 Pa. (a) With the line clamped and the fluid at rest, what is the gauge pressure at the needle? (b) What is that pressure in mmHg? (c) The gauge pressure inside the vein is about 1300 Pa. Which way does fluid flow when the clamp opens? (d) Does a wider or fuller bag at the same height change the pressure at the needle, and what is the lowest height of the fluid surface that still pushes saline into the vein? (a) ρgh = (1000)(10)(1.0) = 1.0 × 10⁴ Pa; (b) (1.0 × 10⁴)/133 ≈ 75 mmHg; (c) 1.0 × 10⁴ Pa at the needle is far above 1300 Pa in the vein, so saline flows into the vein; (d) no, only the height enters ρgh; the lowest height is h = 1300/((1000)(10)) = 0.13 m, and below that, blood backs up into the line.',
      pitfalls: [
        'Reading the manometer backwards and subtracting ρgΔh from atmospheric pressure when the open arm is higher.',
        'Reporting the gauge pressure when the absolute pressure is asked.',
        'Dividing by 13.6 when changing from mercury to water: the less dense liquid needs the TALLER column.',
        'Thinking a larger or fuller bag raises the pressure at the needle.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-mechanics-fluids-mcat'],
      checkpoint: [
        {
          question: 'A gas line is connected to an open-tube manometer filled with water (ρ = 1000 kg/m³). The water in the open arm stands 0.50 m higher than the water in the arm connected to the gas. What is the absolute pressure of the gas? (g = 10 m/s², P_atm = 1.0 × 10⁵ Pa)',
          options: ['5.0 × 10³ Pa', '9.5 × 10⁴ Pa', '1.5 × 10⁵ Pa', '1.05 × 10⁵ Pa'],
          correctAnswer: 3,
          explanation:
            'The open arm is higher, so the gas is above atmospheric pressure by ρgΔh = (1000)(10)(0.50) = 5.0 × 10³ Pa, and its absolute pressure is 1.0 × 10⁵ + 0.05 × 10⁵ = 1.05 × 10⁵ Pa. 5.0 × 10³ Pa is the gauge pressure alone; 9.5 × 10⁴ Pa subtracts the column, which would be right only if the water were higher on the gas side; and 1.5 × 10⁵ Pa slips a power of ten in ρgΔh.',
        },
        {
          question: 'A bag of liquid feed (ρ = 1000 kg/m³) hangs with its fluid surface 0.60 m above the open end of its tube, and the liquid is at rest. What is the gauge pressure at the end of the tube? (g = 10 m/s², 1 mmHg ≈ 133 Pa)',
          options: ['4.5 mmHg', '45 mmHg', '805 mmHg', '6000 mmHg'],
          correctAnswer: 1,
          explanation:
            'ρgh = (1000)(10)(0.60) = 6000 Pa, and 6000/133 ≈ 45 mmHg. 4.5 mmHg leaves g out of ρgh; 805 mmHg adds 760 mmHg of atmosphere, which gives the absolute pressure rather than the gauge pressure; and 6000 mmHg is the answer in pascals with the wrong unit attached.',
        },
        {
          question: 'The gauge pressure inside a vein is 2000 Pa. What is the lowest height above the needle at which the fluid surface in a saline bag (ρ = 1000 kg/m³) can hang and still push saline into the vein? (g = 10 m/s²)',
          options: ['0.20 m', '0.020 m', '2.0 m', '10.2 m'],
          correctAnswer: 0,
          explanation:
            'Saline flows in when ρgh at the needle exceeds the vein\'s gauge pressure, so the lowest height is h = 2000/((1000)(10)) = 0.20 m. 0.020 m slips a power of ten; 2.0 m leaves g out of ρgh; and 10.2 m adds atmospheric pressure to the vein\'s reading, although the atmosphere presses on the bag as well and cancels.',
        },
      ],
    },
    // ── 7 · Pascal's principle (concepts) ────────────────────────────────
    {
      title: 'Pascal\'s Principle',
      minutes: 7,
      goal: 'State Pascal\'s principle and use it to explain how a hydraulic lift multiplies force, why the distance moved shrinks by the same factor, and why no work is gained.',
      keyPoints: [
        'Pascal\'s principle: a pressure change applied to an enclosed, incompressible fluid is transmitted undiminished to every part of the fluid and to the walls of its container.',
        'The hydraulic lift: two pistons of areas A₁ (small) and A₂ (large) sit on the same enclosed fluid at the same height. Pressing the small piston raises the pressure everywhere by the same amount, so F₁/A₁ = F₂/A₂ and F₂ = F₁(A₂/A₁). The PRESSURE is transmitted, not the force; the force is multiplied by the area ratio.',
        'Distance is divided by the same ratio. The volume of fluid pushed out of the small cylinder equals the volume entering the large one: A₁d₁ = A₂d₂.',
        'Work is conserved: F₁d₁ = F₂d₂. A hydraulic lift, like a lever, trades distance for force and never creates energy.',
        'If the pistons are compared by DIAMETER or radius, square the ratio: double the diameter means four times the area.',
        'Pascal\'s principle and ρgh work together: pushing on a piston raises the pressure everywhere by the same amount, and deeper points still carry their extra ρgh. Hydraulic brakes, dentists\' chairs and syringes all rely on the same idea.',
      ],
      showOnScreen: [
        'A sealed, liquid-filled flask with pressure gauges all around it: push on a piston and every gauge rises by the same amount',
        'The hydraulic lift in cross-section: a small force arrow on the narrow piston, equal pressure shading through the fluid, a large force arrow on the wide piston, with F₁/A₁ = F₂/A₂',
        'The same lift in motion: the narrow piston travels a long way while the wide one rises a little, the two displaced volumes highlighted as equal, A₁d₁ = A₂d₂',
        'A work tally: F₁ × d₁ on the input side and F₂ × d₂ on the output side, the same number, beside a lever doing the same trade',
        'Two circular pistons seen from above, one with twice the diameter and four times the area',
        'A tall sealed tank: the push on the piston adds the same step to every gauge, on top of readings that already grow with depth',
        'The "Remember" recap: pressure, not force, is transmitted; F₁/A₁ = F₂/A₂; A₁d₁ = A₂d₂; F₁d₁ = F₂d₂; square a diameter ratio',
        'End card: "Up next: Pascal\'s Principle: Worked Examples"',
      ],
      pitfalls: [
        'Saying the force is transmitted undiminished: it is the pressure that is the same at both pistons.',
        'Using a diameter or radius ratio as the area ratio without squaring it.',
        'Believing a hydraulic lift multiplies work or energy along with force.',
        'Multiplying the distance by the area ratio in the same direction as the force.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-mechanics-fluids-mcat'],
      checkpoint: [
        {
          question: 'A hydraulic lift is run in reverse: a force F pushes down on the LARGE piston. Compared with F and with the distance the large piston moves, the small piston pushes out with:',
          options: [
            'A larger force, and it moves a shorter way',
            'A smaller force, and it moves a shorter way',
            'A smaller force, and it moves a longer way',
            'The same force, and it moves a longer way',
          ],
          correctAnswer: 2,
          explanation:
            'The pressure F/A is the same at both pistons, so the small piston, with less area, gets a smaller force. The same volume of fluid must fit into a narrower cylinder, so it moves farther, and the work F·d matches on both sides. "A larger force" keeps the usual direction of the lift without noticing the roles are swapped; "smaller force, shorter way" would lose work; and "the same force" assumes force, not pressure, is transmitted.',
        },
        {
          question: 'An engineer wants a hydraulic press to deliver twice the output force for the same input force. Which single change does this?',
          options: [
            'Double the output piston\'s diameter',
            'Double the input piston\'s travel',
            'Double the input piston\'s area',
            'Double the output piston\'s area',
          ],
          correctAnswer: 3,
          explanation:
            'F₂ = F₁(A₂/A₁), so doubling the output area doubles the output force. Doubling the output DIAMETER quadruples its area and the force; a longer input stroke lifts the load farther but with the same force; and doubling the input area halves the pressure that the same input force creates, which halves the output force.',
        },
        {
          question: 'Air bubbles get into the liquid of a car\'s hydraulic brake line. Why must the brake pedal now be pushed farther before the brakes grip?',
          options: [
            'The air compresses, using up pedal travel',
            'The air is light, which lowers the ρgh term',
            'The air stops pressure from passing along',
            'The air raises the pressure inside the line',
          ],
          correctAnswer: 0,
          explanation:
            'Pascal\'s principle needs an incompressible fluid: every bit of volume pushed in at the pedal must come out at the brake. A gas compresses, so the first part of the pedal stroke only squeezes the bubbles instead of moving the brake piston. The ρgh term in a brake line is tiny and is not what carries the push; a bubble still transmits pressure once it has been squeezed; and bubbles do not raise the pressure, they delay its rise.',
        },
      ],
    },
    // ── 8 · Pascal's principle (worked examples) ─────────────────────────
    {
      title: 'Pascal\'s Principle: Worked Examples',
      minutes: 5.5,
      goal: 'Solve a hydraulic lift completely: the pressure created, the output force, the distance each piston moves and the work in and out, including when the pistons are given by diameter.',
      keyPoints: [
        'Find the pressure first, P = F₁/A₁; the same pressure acts on the output piston, so F₂ = PA₂.',
        'The force is multiplied by the area ratio A₂/A₁, and the distance is divided by it: A₁d₁ = A₂d₂.',
        'Given diameters or radii, square the ratio to get the area ratio before anything else.',
        'Check with work: F₁d₁ must equal F₂d₂.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the lift with its two areas labeled, the pressure filling the fluid (2.0 × 10⁴ Pa), the output force (10,000 N), then both pistons moving (2.5 m and 0.10 m) with the work tally at 1000 J on each side',
        'Example 2: two circular pistons seen from above with diameters in the ratio 4 to 1, the area ratio 16 appearing, the 8000 N engine on the wide piston and the 500 N input force, then the 0.80 m of pumping lifting the engine 0.050 m',
        'The "Remember" recap of the method: pressure first; force × the area ratio; distance ÷ the area ratio; square a diameter ratio; check the work',
        'End card: "Up next: Archimedes\' Principle"',
      ],
      workedExample:
        'Example 1: A hydraulic lift has an input piston of area 0.020 m² and an output piston of area 0.50 m². A worker pushes down on the input piston with 400 N. (a) What pressure does the worker create in the fluid? (b) What force does the fluid exert on the output piston? (c) How far must the input piston move to raise the load 0.10 m? (d) How much work goes in, and how much comes out? (a) P = F₁/A₁ = 400/0.020 = 2.0 × 10⁴ Pa; (b) F₂ = PA₂ = (2.0 × 10⁴)(0.50) = 10,000 N, 25 times the input force because the area ratio is 25; (c) A₁d₁ = A₂d₂, so d₁ = d₂(A₂/A₁) = (0.10)(25) = 2.5 m, covered in many short pump strokes; (d) in, (400)(2.5) = 1000 J; out, (10,000)(0.10) = 1000 J. Example 2: The output piston of a hydraulic jack has 4 times the DIAMETER of its input piston. The jack holds up an 800 kg engine. Use g = 10 m/s². (a) What is the ratio of the piston areas? (b) What input force holds the engine up? (c) The input piston is pumped through a total of 0.80 m. How far does the engine rise? (d) Check the work. (a) Area goes as diameter squared, so A₂/A₁ = 4² = 16; (b) the engine weighs (800)(10) = 8000 N, so F₁ = 8000/16 = 500 N; (c) d₂ = d₁/16 = 0.80/16 = 0.050 m; (d) in, (500)(0.80) = 400 J; out, (8000)(0.050) = 400 J.',
      pitfalls: [
        'Carrying the input FORCE across to the output piston instead of the pressure.',
        'Using the diameter ratio 4 as the area ratio instead of 16.',
        'Multiplying the distance by the area ratio on the output side, as if the lift gained both force and distance.',
        'Using a mass in kilograms where a force in newtons is needed.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-mechanics-fluids-mcat'],
      checkpoint: [
        {
          question: 'A hydraulic press has an input piston of area 0.0020 m² and an output piston of area 0.060 m². A force of 150 N is applied to the input piston. What pressure is created in the fluid, and what force acts on the output piston?',
          options: [
            '7.5 × 10⁴ Pa and 150 N',
            '7.5 × 10⁴ Pa and 4500 N',
            '0.30 Pa and 4500 N',
            '7.5 × 10⁴ Pa and 5.0 N',
          ],
          correctAnswer: 1,
          explanation:
            'P = F₁/A₁ = 150/0.0020 = 7.5 × 10⁴ Pa, and F₂ = PA₂ = (7.5 × 10⁴)(0.060) = 4500 N, 30 times the input force. 150 N carries the force across unchanged, when it is the pressure that is transmitted; 0.30 Pa multiplies the force by the area instead of dividing; and 5.0 N divides the input force by the area ratio instead of multiplying.',
        },
        {
          question: 'The output piston of a hydraulic lift has 20 times the area of the input piston. The lift raises a 6000 N load by 0.050 m. How far does the input piston move, and how much work does the input force do?',
          options: [
            '1.0 m and 6000 J',
            '0.0025 m and 300 J',
            '0.050 m and 15 J',
            '1.0 m and 300 J',
          ],
          correctAnswer: 3,
          explanation:
            'The distance is multiplied by the area ratio on the input side: d₁ = (0.050)(20) = 1.0 m. The input force is 6000/20 = 300 N, so the work in is (300)(1.0) = 300 J, equal to the work out, (6000)(0.050) = 300 J. 6000 J multiplies the OUTPUT force by the input distance; 0.0025 m divides the distance by 20 instead of multiplying; and 0.050 m with 15 J assumes both pistons move the same distance.',
        },
        {
          question: 'The output piston of a hydraulic lift has 10 times the DIAMETER of the input piston. What input force holds up a 20,000 N load on the output piston?',
          options: ['200 N', '2000 N', '20,000 N', '2,000,000 N'],
          correctAnswer: 0,
          explanation:
            'Area goes as diameter squared, so the area ratio is 10² = 100, and F₁ = 20,000/100 = 200 N. 2000 N uses the diameter ratio without squaring it; 20,000 N assumes the force, not the pressure, is the same at both pistons; and 2,000,000 N multiplies by the area ratio instead of dividing.',
        },
      ],
    },
  ],
}
