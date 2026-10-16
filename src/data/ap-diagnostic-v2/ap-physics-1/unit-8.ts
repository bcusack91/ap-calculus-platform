/**
 * AP Physics 1 diagnostic v2 — Unit 8: Fluids (CED 2024 topics 8.1–8.4).
 * Every fluid is ideal: incompressible, no viscosity (8.1.A.4, 8.4 boundary);
 * no compressible flow, Magnus effect, surface tension or Poiseuille.
 * ρ_water = 1000 kg/m³, P_atm = 1.0 × 10⁵ Pa, g = 10 m/s².
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'phys1-s024',
    title: 'Water leaving a hole in a tank',
    kind: 'figure',
    content:
      'A large tank open to the air sits on level ground and is filled with water (density 1000 kg/m³). A small hole in the side of the tank is 1.25 m below the water surface and 0.80 m above the ground, as shown. Water streams horizontally out of the hole and lands on the ground. The tank is wide enough that the water level drops negligibly during the observation. Use g = 10 m/s².',
    svg:
      '<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Open water tank with a side hole 1.25 m below the surface and 0.80 m above the ground; a dashed stream arcs from the hole to the ground" fill="none" stroke="currentColor" stroke-width="2">' +
      '<line x1="10" y1="230" x2="395" y2="230"/>' +
      '<polyline points="80,30 80,230 220,230 220,30"/>' +
      '<line x1="80" y1="66" x2="220" y2="66" stroke-dasharray="6 4"/>' +
      '<text x="150" y="58" text-anchor="middle" font-size="11" fill="currentColor" stroke="none">water surface</text>' +
      '<circle cx="220" cy="166" r="3" fill="currentColor"/>' +
      '<path d="M222 166 Q 330 170 380 229" stroke-dasharray="5 4"/>' +
      '<line x1="55" y1="66" x2="55" y2="166" stroke-width="1"/>' +
      '<line x1="49" y1="66" x2="61" y2="66" stroke-width="1"/>' +
      '<line x1="49" y1="166" x2="61" y2="166" stroke-width="1"/>' +
      '<text x="48" y="120" text-anchor="end" font-size="12" fill="currentColor" stroke="none">1.25 m</text>' +
      '<line x1="240" y1="166" x2="240" y2="230" stroke-width="1"/>' +
      '<line x1="234" y1="166" x2="246" y2="166" stroke-width="1"/>' +
      '<text x="250" y="204" font-size="12" fill="currentColor" stroke="none">0.80 m</text>' +
      '</svg>',
  },
  {
    id: 'phys1-s025',
    title: 'Lowering a cylinder into water',
    kind: 'table',
    content:
      'A solid metal cylinder of height 0.10 m hangs from a spring scale. Students lower it, flat end first, into a large beaker of water (density 1000 kg/m³) and record the scale reading at several depths d of the cylinder’s bottom below the water surface. Use g = 10 m/s².\n\n| Depth d (m) | Scale reading (N) |\n|---|---|\n| 0 | 2.70 |\n| 0.02 | 2.50 |\n| 0.04 | 2.30 |\n| 0.06 | 2.10 |\n| 0.08 | 1.90 |\n| 0.10 | 1.70 |\n| 0.12 | 1.70 |\n| 0.14 | 1.70 |',
  },
  {
    id: 'phys1-s026',
    title: 'Water flowing through a narrowing pipe',
    kind: 'figure',
    content:
      'Water (density 1000 kg/m³) flows steadily from left to right through a horizontal pipe. Section 1 has cross-sectional area 4.0 × 10⁻³ m² and section 2 has area 1.0 × 10⁻³ m². The water moves at 0.50 m/s in section 1. A thin vertical tube, open at the top, rises from each section; the water levels inside the tubes are not shown. Treat the water as an ideal fluid.',
    svg:
      '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Horizontal pipe with a wide section 1 on the left narrowing to section 2 on the right; an open vertical tube rises from each section; flow is to the right" fill="none" stroke="currentColor" stroke-width="2">' +
      '<defs><marker id="phys1-s026-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="currentColor" stroke="none"/></marker></defs>' +
      '<polyline points="20,110 90,110 90,40 102,40 102,110 170,110 210,130 260,130 260,60 272,60 272,130 380,130"/>' +
      '<polyline points="20,180 170,180 210,160 380,160"/>' +
      '<line x1="30" y1="145" x2="70" y2="145" marker-end="url(#phys1-s026-arrow)"/>' +
      '<text x="130" y="150" text-anchor="middle" font-size="12" fill="currentColor" stroke="none">section 1</text>' +
      '<text x="320" y="150" text-anchor="middle" font-size="12" fill="currentColor" stroke="none">section 2</text>' +
      '<text x="96" y="32" text-anchor="middle" font-size="11" fill="currentColor" stroke="none">tube 1</text>' +
      '<text x="266" y="52" text-anchor="middle" font-size="11" fill="currentColor" stroke="none">tube 2</text>' +
      '</svg>',
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // --- Set: tank with a hole (phys1-s024) ---
  {
    id: 'phys1-s024-q1',
    stimulusId: 'phys1-s024',
    unit: 'unit-8',
    topicSlug: 'fluids-density-and-pressure',
    difficulty: 'easy',
    stem: 'Before the hole is opened, what is the gauge pressure in the water at the level of the hole?',
    options: ['1.25 × 10⁴ Pa', '8.0 × 10³ Pa', '1.1 × 10⁵ Pa', '2.05 × 10⁴ Pa'],
    correctIndex: 0,
    explanation:
      'Gauge pressure depends on the depth below the open surface: P_gauge = ρgh = (1000)(10)(1.25) = 1.25 × 10⁴ Pa. 8.0 × 10³ Pa uses the 0.80 m height above the ground, which is not a depth; 1.1 × 10⁵ Pa is the ABSOLUTE pressure (atmospheric plus gauge); 2.05 × 10⁴ Pa uses the full water depth to the bottom of the tank.',
  },
  {
    id: 'phys1-s024-q2',
    stimulusId: 'phys1-s024',
    unit: 'unit-8',
    topicSlug: 'fluids-bernoulli',
    difficulty: 'medium',
    stem: 'With the hole open, how fast does the water leave the hole?',
    options: ['5.0 m/s', '4.0 m/s', '6.4 m/s', '3.5 m/s'],
    correctIndex: 0,
    explanation:
      'Torricelli’s result (Bernoulli between the open surface and the open hole, both at atmospheric pressure, with the surface nearly at rest) gives v = √(2gh) with h the depth below the surface: √(2 × 10 × 1.25) = 5.0 m/s. 4.0 m/s uses the hole’s height above the ground; 6.4 m/s uses the full 2.05 m of water; 3.5 m/s drops the 2 (√(gh)).',
  },
  {
    id: 'phys1-s024-q3',
    stimulusId: 'phys1-s024',
    unit: 'unit-8',
    topicSlug: 'fluids-bernoulli',
    difficulty: 'hard',
    stem: 'How far from the side of the tank does the stream land on the ground?',
    options: ['2.0 m', '2.5 m', '1.4 m', '1.0 m'],
    correctIndex: 0,
    explanation:
      'The water leaves horizontally at 5.0 m/s and then moves as a projectile. It falls 0.80 m: 0.80 = ½(10)t², so t = 0.40 s, and it travels x = (5.0)(0.40) = 2.0 m. 2.5 m uses the 1.25 m depth as the fall height (t = 0.50 s); 1.4 m drops the ½ in the fall (t = √(h/g) ≈ 0.28 s); 1.0 m uses √(1.25 × 0.80), leaving out the factor of 2 in x = 2√(h_depth h_hole).',
  },
  // --- Set: cylinder lowered into water (phys1-s025) ---
  {
    id: 'phys1-s025-q1',
    stimulusId: 'phys1-s025',
    unit: 'unit-8',
    topicSlug: 'fluids-buoyancy',
    difficulty: 'easy',
    stem: 'What is the buoyant force on the cylinder when it is completely under water?',
    options: ['1.0 N', '1.7 N', '2.7 N', '4.4 N'],
    correctIndex: 0,
    explanation:
      'The buoyant force is the reduction in the scale reading: 2.70 − 1.70 = 1.0 N. 1.7 N is the scale reading itself (the apparent weight); 2.7 N is the cylinder’s weight; 4.4 N adds the weight and the apparent weight.',
  },
  {
    id: 'phys1-s025-q2',
    stimulusId: 'phys1-s025',
    unit: 'unit-8',
    topicSlug: 'fluids-buoyancy',
    difficulty: 'medium',
    stem: 'The students repeat the experiment in oil of density 800 kg/m³. What should the scale read when the cylinder is completely submerged in the oil?',
    options: ['1.9 N', '1.7 N', '2.2 N', '0.80 N'],
    correctIndex: 0,
    explanation:
      'The buoyant force equals the weight of fluid displaced. The cylinder’s volume is fixed, so in oil the buoyant force is (800/1000)(1.0 N) = 0.80 N, and the scale reads 2.70 − 0.80 = 1.9 N. 1.7 N assumes the buoyant force does not depend on the fluid; 2.2 N subtracts only half of the water’s buoyant force; 0.80 N is the buoyant force in oil, not the scale reading.',
  },
  {
    id: 'phys1-s025-q3',
    stimulusId: 'phys1-s025',
    unit: 'unit-8',
    topicSlug: 'fluids-buoyancy',
    difficulty: 'hard',
    stem: 'Which explanation best accounts for the scale reading staying at 1.70 N for depths beyond 0.10 m?',
    options: [
      'Once the cylinder is fully submerged, the volume of water it displaces no longer changes.',
      'The water pressure stops increasing with depth once the cylinder is below the surface.',
      'The cylinder’s weight decreases as it sinks deeper, canceling the extra buoyant force.',
      'The buoyant force has reached its maximum, which is equal to the cylinder’s full weight.',
    ],
    correctIndex: 0,
    explanation:
      'The cylinder is 0.10 m tall, so from d = 0.10 m on it is entirely under water. The buoyant force equals the weight of the displaced water, which depends on the submerged volume, and that stops growing. (The pressure on the top and bottom faces both increase with depth, so their difference stays the same.) Pressure keeps rising with depth; the cylinder’s weight does not change; and the buoyant force (1.0 N) is far less than the 2.7 N weight, which is why the cylinder still pulls on the scale.',
  },
  // --- Set: narrowing pipe (phys1-s026) ---
  {
    id: 'phys1-s026-q1',
    stimulusId: 'phys1-s026',
    unit: 'unit-8',
    topicSlug: 'fluids-continuity',
    difficulty: 'easy',
    stem: 'What is the speed of the water in section 2?',
    options: ['2.0 m/s', '0.13 m/s', '0.50 m/s', '8.0 m/s'],
    correctIndex: 0,
    explanation:
      'For an incompressible fluid the volume flow rate is the same everywhere: A₁v₁ = A₂v₂, so v₂ = (4.0 × 10⁻³)(0.50)/(1.0 × 10⁻³) = 2.0 m/s. 0.13 m/s inverts the area ratio; 0.50 m/s assumes the speed does not change; 8.0 m/s squares the area ratio (as if the areas were diameters).',
  },
  {
    id: 'phys1-s026-q2',
    stimulusId: 'phys1-s026',
    unit: 'unit-8',
    topicSlug: 'fluids-bernoulli',
    difficulty: 'medium',
    stem: 'What is the difference in pressure, P₁ − P₂, between section 1 and section 2?',
    options: ['1.9 × 10³ Pa', '2.0 × 10³ Pa', '1.1 × 10³ Pa', '3.8 × 10³ Pa'],
    correctIndex: 0,
    explanation:
      'The pipe is horizontal, so Bernoulli’s equation gives P₁ − P₂ = ½ρ(v₂² − v₁²) = ½(1000)(2.0² − 0.50²) = 500(3.75) ≈ 1.9 × 10³ Pa. 2.0 × 10³ Pa ignores the speed in section 1; 1.1 × 10³ Pa squares the difference of the speeds instead of taking the difference of the squares; 3.8 × 10³ Pa drops the ½.',
  },
  {
    id: 'phys1-s026-q3',
    stimulusId: 'phys1-s026',
    unit: 'unit-8',
    topicSlug: 'fluids-bernoulli',
    difficulty: 'hard',
    stem: 'How do the heights of the water columns in the two vertical tubes compare?',
    options: [
      'Tube 1 is higher, because the pressure is greater where the water moves more slowly.',
      'Tube 2 is higher, because the faster water in section 2 pushes harder on the pipe walls.',
      'They are equal, because the pipe is horizontal and all the water is at the same height.',
      'Tube 2 is higher, because water piles up where the pipe narrows and the flow is squeezed.',
    ],
    correctIndex: 0,
    explanation:
      'Each column rises until its weight balances the pressure in the pipe below it, so the taller column marks the greater pressure. With the pipe horizontal, Bernoulli’s equation says the pressure is greater where the speed is smaller, in the wide section 1 (by about 1.9 × 10³ Pa, enough to make tube 1 about 0.19 m higher). Faster flow means LOWER pressure, not more push on the walls; equal heights would require equal speeds; and an incompressible fluid does not pile up.',
  },
  // --- Standalone items ---
  {
    id: 'phys1-u8-001',
    unit: 'unit-8',
    topicSlug: 'fluids-density-and-pressure',
    difficulty: 'easy',
    stem: 'A 0.27 kg stone is lowered into a graduated cylinder of water, and the water level rises from 50 mL to 150 mL. (1 mL = 1.0 × 10⁻⁶ m³.) What is the density of the stone?',
    options: [
      '2700 kg/m³',
      '1800 kg/m³',
      '270 kg/m³',
      '2.7 kg/m³',
    ],
    correctIndex: 0,
    explanation:
      'The stone displaces 150 − 50 = 100 mL = 1.0 × 10⁻⁴ m³ of water, which is its volume. ρ = m/V = 0.27/1.0 × 10⁻⁴ = 2700 kg/m³. 1800 kg/m³ uses the final reading (150 mL) as the volume; 270 kg/m³ and 2.7 kg/m³ come from power-of-ten slips in converting milliliters to cubic meters.',
  },
  {
    id: 'phys1-u8-002',
    unit: 'unit-8',
    topicSlug: 'fluids-density-and-pressure',
    difficulty: 'easy',
    stem: 'A box with a weight of 50 N rests on a table on a face of area 0.25 m². It is turned so that it rests on a face of area 0.10 m². What pressure does the box now exert on the table?',
    options: ['500 Pa', '200 Pa', '5.0 Pa', '1250 Pa'],
    correctIndex: 0,
    explanation:
      'P = F/A = 50 N / 0.10 m² = 500 Pa: the same force on a smaller area gives a greater pressure. 200 Pa is the pressure on the original face (50/0.25); 5.0 Pa multiplies the force by the area; 1250 Pa scales 500 Pa by the area ratio a second time.',
  },
  {
    id: 'phys1-u8-004',
    unit: 'unit-8',
    topicSlug: 'fluids-density-and-pressure',
    difficulty: 'medium',
    stem: 'Three open containers are filled with water to the same depth. Container 1 has straight sides, container 2 widens toward the top, and container 3 narrows toward the top. How do the water pressures at the bottoms of the containers compare?',
    options: [
      'They are equal, because the pressure in a fluid depends only on the depth.',
      'Container 2 has the greatest pressure, because it holds the most water above its bottom.',
      'Container 3 has the greatest pressure, because its narrow top concentrates the weight of the water.',
      'Container 1 has the greatest pressure, because only straight walls let the water push straight down.',
    ],
    correctIndex: 0,
    explanation:
      'Gauge pressure at depth h is ρgh, which does not depend on the container’s shape or the total amount of water. The sloped walls of containers 2 and 3 exert forces on the water that make up the difference between the water’s weight and the force on the bottom. Neither the total weight nor the shape of the walls changes the pressure at a given depth.',
  },
  {
    id: 'phys1-u8-006',
    unit: 'unit-8',
    topicSlug: 'fluids-buoyancy',
    difficulty: 'medium',
    stem: 'A helium balloon has a volume of 0.010 m³, and the balloon plus its helium have a total mass of 0.0040 kg. It is held at rest by a string. The density of the surrounding air is 1.2 kg/m³. What is the tension in the string?',
    options: [
      '0.080 N',
      '0.12 N',
      '0.040 N',
      '0.16 N',
    ],
    correctIndex: 0,
    explanation:
      'The buoyant force is the weight of the displaced air: (1.2)(0.010)(10) = 0.12 N. The balloon’s weight is (0.0040)(10) = 0.040 N. At rest, F_b = W + T, so T = 0.12 − 0.040 = 0.080 N. 0.12 N is the buoyant force alone; 0.040 N is the balloon’s weight; 0.16 N adds the weight to the buoyant force, as if the string pushed up.',
  },
  {
    id: 'phys1-u8-007',
    unit: 'unit-8',
    topicSlug: 'fluids-continuity',
    difficulty: 'medium',
    stem: 'Water flows through a garden hose of inner radius 1.0 cm and out of a nozzle of inner radius 0.50 cm. Treat the water as an ideal fluid. How does the water’s speed in the nozzle compare with its speed in the hose?',
    options: ['It is 4 times as fast.', 'It is 2 times as fast.', 'It is 1/4 as fast.', 'It is 16 times as fast.'],
    correctIndex: 0,
    explanation:
      'Continuity: Av is constant, and area is proportional to the radius squared. Halving the radius divides the area by 4, so the speed is multiplied by 4. 2 times treats speed as inversely proportional to the radius; 1/4 has the ratio upside down; 16 times squares the area ratio.',
  },
  {
    id: 'phys1-u8-008',
    unit: 'unit-8',
    topicSlug: 'fluids-continuity',
    difficulty: 'medium',
    stem: 'Water flows at 3.0 m/s through a pipe of cross-sectional area 2.0 × 10⁻⁴ m² into an empty tank. How long does it take to deliver 0.060 m³ of water?',
    options: ['100 s', '0.020 s', '1000 s', '10 s'],
    correctIndex: 0,
    explanation:
      'The volume flow rate is Av = (2.0 × 10⁻⁴)(3.0) = 6.0 × 10⁻⁴ m³/s, so t = V/(Av) = 0.060/6.0 × 10⁻⁴ = 100 s. 0.020 s divides the volume by the speed and ignores the area; 1000 s and 10 s are power-of-ten slips in the area.',
  },
  {
    id: 'phys1-u8-009',
    unit: 'unit-8',
    topicSlug: 'fluids-buoyancy',
    difficulty: 'hard',
    stem: 'A plastic buoy floats in water (density 1000 kg/m³) with 30% of its volume above the surface. The buoy is moved to a tank of oil of density 800 kg/m³, where it also floats. What fraction of its volume is below the surface of the oil?',
    options: ['88%', '56%', '70%', '63%'],
    correctIndex: 0,
    explanation:
      'A floating buoy displaces its own weight of fluid. In water, 70% is submerged, so its average density is 0.70 × 1000 = 700 kg/m³. In oil, the submerged fraction is ρ_buoy/ρ_oil = 700/800 ≈ 0.88 (88%). 56% multiplies 70% by 0.80 instead of dividing; 70% assumes the fraction does not depend on the fluid; 63% scales the 30% ABOVE the surface (30%/0.80 ≈ 37% above) instead of the submerged fraction.',
  },
  {
    id: 'phys1-u8-010',
    unit: 'unit-8',
    topicSlug: 'fluids-bernoulli',
    difficulty: 'hard',
    stem: 'Water flows steadily up through a pipe of constant cross-sectional area from a point at ground level to a point 2.0 m higher. Treat the water as an ideal fluid. How does the water at the upper point compare with the water at ground level?',
    options: [
      'It moves at the same speed, and its pressure is 2.0 × 10⁴ Pa lower.',
      'It moves more slowly, because it has gained gravitational potential energy.',
      'It moves at the same speed, and its pressure is 2.0 × 10⁴ Pa higher.',
      'It moves more slowly, and its pressure is the same as at ground level.',
    ],
    correctIndex: 0,
    explanation:
      'Continuity with constant area forces the same speed at both points. Then Bernoulli’s equation, P + ρgy + ½ρv² = constant, says that rising 2.0 m must lower the pressure by ρgΔy = (1000)(10)(2.0) = 2.0 × 10⁴ Pa. An incompressible fluid cannot slow down in a pipe of constant area, and the energy for the rise comes from the pressure difference, not from the kinetic energy.',
  },
  {
    id: 'phys1-u8-011',
    unit: 'unit-8',
    topicSlug: 'fluids-buoyancy',
    difficulty: 'hard',
    stem: 'An aluminum block and a wooden block have identical volumes. Placed in water, the aluminum block sinks to the bottom and the wooden block floats with part of its volume above the surface. Which block has the greater buoyant force on it?',
    options: [
      'The aluminum block, because it displaces its whole volume of the water.',
      'The wooden block, because it floats and the aluminum block does not.',
      'They are equal, because the two blocks have the same volume.',
      'The wooden block, because the buoyant force holds up its full weight.',
    ],
    correctIndex: 0,
    explanation:
      'The buoyant force equals the weight of the water displaced. The sunken aluminum block displaces its entire volume; the floating wooden block displaces only the part below the surface. So the aluminum block feels the larger buoyant force; it sinks because its weight is larger still. Floating means the buoyant force equals the object’s weight, not that it is the larger buoyant force, and equal volumes give equal buoyant forces only when both are fully submerged.',
  },
  {
    id: 'phys1-u8-012',
    unit: 'unit-8',
    topicSlug: 'fluids-buoyancy',
    difficulty: 'hard',
    stem: 'A beaker of water sits on a scale. A metal block hanging from a spring scale is lowered until it is completely under water, without touching the beaker. The buoyant force on the block is 3.0 N. How does the reading of the scale under the beaker change?',
    options: [
      'It increases by 3.0 N, the size of the buoyant force.',
      'It does not change, because the block is held up by the spring scale.',
      'It decreases by 3.0 N, because the water pushes the block up.',
      'It increases by the full weight of the block now in the water.',
    ],
    correctIndex: 0,
    explanation:
      'The water pushes up on the block with 3.0 N, so by Newton’s third law the block pushes down on the water with 3.0 N; that force is passed to the beaker and the scale beneath it, which reads 3.0 N more. The spring scale supports only the rest of the block’s weight (its reading drops by 3.0 N), so the full weight does not reach the beaker. The water pushing up on the block is exactly why the beaker’s reading goes UP.',
  },
  {
    id: 'phys1-u8-013',
    unit: 'unit-8',
    topicSlug: 'fluids-density-and-pressure',
    difficulty: 'hard',
    stem: 'An open container holds a 0.20 m layer of oil (density 800 kg/m³) floating on top of a 0.30 m layer of water (density 1000 kg/m³). What is the gauge pressure at the bottom of the container?',
    options: ['4600 Pa', '5000 Pa', '3000 Pa', '4000 Pa'],
    correctIndex: 0,
    explanation:
      'Pressure adds layer by layer: ρ_oil g h_oil + ρ_water g h_water = (800)(10)(0.20) + (1000)(10)(0.30) = 1600 + 3000 = 4600 Pa. 5000 Pa treats the whole 0.50 m as water; 3000 Pa ignores the oil layer; 4000 Pa treats the whole 0.50 m as oil.',
  },
  {
    id: 'phys1-u8-014',
    unit: 'unit-8',
    topicSlug: 'fluids-buoyancy',
    difficulty: 'hard',
    stem: 'Equal-mass blocks of aluminum (density 2700 kg/m³) and lead (density 11 300 kg/m³) are each held completely under water by a string. Which statement about the buoyant forces on the blocks is correct?',
    options: [
      'The aluminum block feels the larger buoyant force, because it has the larger volume.',
      'The lead block feels the larger buoyant force, because it is the denser block.',
      'The buoyant forces are equal, because the two blocks have equal masses.',
      'The buoyant forces are equal, because both blocks are fully under water.',
    ],
    correctIndex: 0,
    explanation:
      'The buoyant force equals the weight of the water displaced, which depends on the submerged volume, not on the object’s mass or density directly. With equal masses, the less dense aluminum has about 11 300/2700 ≈ 4.2 times the volume of the lead, so it displaces 4.2 times as much water. A denser object displaces LESS water for a given mass; equal masses do not mean equal volumes; and "fully under water" gives equal buoyant forces only for equal volumes.',
  },
  {
    id: 'phys1-u8-015',
    unit: 'unit-8',
    topicSlug: 'fluids-density-and-pressure',
    difficulty: 'medium',
    stem: 'A student drinks juice through a straw. What pushes the juice up the straw into her mouth?',
    options: [
      'Atmospheric pressure on the juice’s surface in the glass',
      'The suction force that the student’s mouth exerts on the juice',
      'The lower pressure inside the straw pulling the juice upward',
      'The buoyant force of the surrounding air acting on the juice column',
    ],
    correctIndex: 0,
    explanation:
      'Sucking lowers the air pressure in the straw. The atmosphere still presses on the open juice surface in the glass, so there is a pressure difference, and the juice is pushed up until the column’s weight balances it. A fluid cannot be pulled: "suction" and "low pressure pulling" describe the effect of the reduced pressure, but the force on the juice is the push from the higher outside pressure. The air’s buoyant force on the juice is negligible.',
  },
]
