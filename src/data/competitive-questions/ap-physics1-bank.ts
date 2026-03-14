// AP Physics 1 question bank for competitive mode
// ~10 questions per topic across all AP Physics 1 topics

export interface ApPhysics1Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  topicSlug: string
}

const allQuestions: ApPhysics1Question[] = [
  // ============ ONE-DIMENSIONAL MOTION ============
  { id: 1, question: 'What is the SI unit of velocity?', options: ['m/s', 'km/h', 'm/s²', 'N'], correctAnswer: 0, explanation: 'Velocity is measured in meters per second.', difficulty: 'easy', topicSlug: 'one-dimensional-motion' },
  { id: 2, question: 'Average speed is defined as:', options: ['Total distance / total time', 'Displacement / time', 'Δv / Δt', 'v² / 2a'], correctAnswer: 0, explanation: 'Speed = distance/time.', difficulty: 'easy', topicSlug: 'one-dimensional-motion' },
  { id: 3, question: 'An object at rest has velocity:', options: ['0 m/s', '9.8 m/s', 'Undefined', 'Negative'], correctAnswer: 0, explanation: 'At rest means v = 0.', difficulty: 'easy', topicSlug: 'one-dimensional-motion' },
  { id: 4, question: 'Displacement differs from distance because it:', options: ['Has direction', 'Is always larger', 'Ignores path', 'Uses speed'], correctAnswer: 0, explanation: 'Displacement is a vector (magnitude + direction).', difficulty: 'easy', topicSlug: 'one-dimensional-motion' },
  { id: 5, question: 'A car goes 100 m in 10 s. Average speed?', options: ['10 m/s', '100 m/s', '1 m/s', '1000 m/s'], correctAnswer: 0, explanation: '100/10 = 10 m/s.', difficulty: 'easy', topicSlug: 'one-dimensional-motion' },
  { id: 6, question: '$v = v_0 + at$ finds:', options: ['Final velocity', 'Displacement', 'Acceleration', 'Time'], correctAnswer: 0, explanation: 'First kinematic equation for final velocity.', difficulty: 'medium', topicSlug: 'one-dimensional-motion' },
  { id: 7, question: 'Object accelerates from rest at 2 m/s² for 5 s. Final velocity?', options: ['10 m/s', '2.5 m/s', '7 m/s', '25 m/s'], correctAnswer: 0, explanation: '$v = 0 + 2(5) = 10$ m/s.', difficulty: 'medium', topicSlug: 'one-dimensional-motion' },
  { id: 8, question: 'A ball dropped from rest falls for 3 s. Distance fallen? ($g = 10$ m/s²)', options: ['45 m', '30 m', '15 m', '90 m'], correctAnswer: 0, explanation: '$d = ½gt² = ½(10)(9) = 45$ m.', difficulty: 'medium', topicSlug: 'one-dimensional-motion' },
  { id: 9, question: 'Negative acceleration always means:', options: ['Acceleration opposite to positive direction', 'Slowing down', 'Stopping', 'Going backward'], correctAnswer: 0, explanation: 'Negative means opposite to the chosen positive direction.', difficulty: 'hard', topicSlug: 'one-dimensional-motion' },
  { id: 10, question: 'An object thrown up at 20 m/s — time to highest point? ($g = 10$ m/s²)', options: ['2 s', '4 s', '1 s', '20 s'], correctAnswer: 0, explanation: '$0 = 20 - 10t → t = 2$ s.', difficulty: 'medium', topicSlug: 'one-dimensional-motion' },

  // ============ NEWTONS FIRST AND SECOND LAWS ============
  { id: 11, question: 'Newton\'s First Law is also called:', options: ['Law of Inertia', 'Law of Acceleration', 'Law of Action-Reaction', 'Law of Gravity'], correctAnswer: 0, explanation: 'Objects resist changes in motion (inertia).', difficulty: 'easy', topicSlug: 'newtons-first-second-laws' },
  { id: 12, question: '$F = ma$: if mass doubles and F stays same, acceleration:', options: ['Halves', 'Doubles', 'Stays same', 'Quadruples'], correctAnswer: 0, explanation: '$a = F/m$; double m → half a.', difficulty: 'easy', topicSlug: 'newtons-first-second-laws' },
  { id: 13, question: 'Net force on an object moving at constant velocity:', options: ['Zero', 'Equal to weight', 'Equal to friction', 'Positive'], correctAnswer: 0, explanation: 'Constant v → a = 0 → F_net = 0.', difficulty: 'easy', topicSlug: 'newtons-first-second-laws' },
  { id: 14, question: 'A 5 kg object accelerates at 3 m/s². Net force?', options: ['15 N', '1.67 N', '8 N', '0.6 N'], correctAnswer: 0, explanation: '$F = 5 × 3 = 15$ N.', difficulty: 'easy', topicSlug: 'newtons-first-second-laws' },
  { id: 15, question: 'Inertia depends on:', options: ['Mass', 'Velocity', 'Acceleration', 'Force'], correctAnswer: 0, explanation: 'More mass → more inertia.', difficulty: 'easy', topicSlug: 'newtons-first-second-laws' },
  { id: 16, question: 'A 10 N force and 6 N force act opposite on an object. Net force?', options: ['4 N', '16 N', '10 N', '6 N'], correctAnswer: 0, explanation: '10 − 6 = 4 N in direction of larger force.', difficulty: 'medium', topicSlug: 'newtons-first-second-laws' },
  { id: 17, question: 'An elevator accelerates up. Your apparent weight:', options: ['Increases', 'Decreases', 'Stays same', 'Becomes zero'], correctAnswer: 0, explanation: '$N = m(g + a) > mg$.', difficulty: 'medium', topicSlug: 'newtons-first-second-laws' },
  { id: 18, question: 'Weight vs mass: weight depends on:', options: ['Gravitational field strength', 'Volume', 'Density only', 'Shape'], correctAnswer: 0, explanation: '$W = mg$; g varies by location.', difficulty: 'medium', topicSlug: 'newtons-first-second-laws' },
  { id: 19, question: 'A 2000 kg car needs 4000 N to maintain speed. Friction force?', options: ['4000 N', '2000 N', '0 N', '8000 N'], correctAnswer: 0, explanation: 'Constant speed → friction equals applied force.', difficulty: 'hard', topicSlug: 'newtons-first-second-laws' },
  { id: 20, question: 'An object in free fall has acceleration equal to:', options: ['$g$ (≈ 9.8 m/s²)', '0', 'Its weight', 'Terminal velocity'], correctAnswer: 0, explanation: 'Only gravity → a = g.', difficulty: 'easy', topicSlug: 'newtons-first-second-laws' },

  // ============ NEWTON'S THIRD LAW ============
  { id: 21, question: 'Newton\'s Third Law:', options: ['Every action has an equal and opposite reaction', '$F = ma$', 'Objects at rest stay at rest', 'Force = weight'], correctAnswer: 0, explanation: 'Action-reaction pairs.', difficulty: 'easy', topicSlug: 'newtons-third-law' },
  { id: 22, question: 'Action-reaction forces act on:', options: ['Different objects', 'Same object', 'Only contact surfaces', 'Nothing'], correctAnswer: 0, explanation: 'They always act on two different objects.', difficulty: 'easy', topicSlug: 'newtons-third-law' },
  { id: 23, question: 'You push a wall with 50 N. The wall pushes you with:', options: ['50 N', '0 N', '100 N', '25 N'], correctAnswer: 0, explanation: 'Equal and opposite: 50 N back.', difficulty: 'easy', topicSlug: 'newtons-third-law' },
  { id: 24, question: 'A book rests on a table. The reaction to the book\'s weight is:', options: ['Earth pulled up by the book', 'Normal force from table', 'Friction', 'Air resistance'], correctAnswer: 0, explanation: 'Weight = Earth pulls book; reaction = book pulls Earth.', difficulty: 'hard', topicSlug: 'newtons-third-law' },
  { id: 25, question: 'Rocket propulsion relies on:', options: ['Newton\'s Third Law', 'Buoyancy', 'Bernoulli\'s principle', 'Gravity'], correctAnswer: 0, explanation: 'Exhaust pushed down → rocket pushed up.', difficulty: 'medium', topicSlug: 'newtons-third-law' },
  { id: 26, question: 'Why don\'t action-reaction pairs cancel?', options: ['They act on different objects', 'One is bigger', 'They act at different times', 'They are the same force'], correctAnswer: 0, explanation: 'Net force applies to one object; the pair acts on another.', difficulty: 'medium', topicSlug: 'newtons-third-law' },

  // ============ FRICTION ============
  { id: 27, question: 'Static friction is generally ___ kinetic friction.', options: ['Greater than', 'Less than', 'Equal to', 'Unrelated to'], correctAnswer: 0, explanation: '$\\mu_s > \\mu_k$ for most surfaces.', difficulty: 'easy', topicSlug: 'friction' },
  { id: 28, question: 'Friction force formula:', options: ['$f = \\mu N$', '$f = \\mu mg \\sin\\theta$', '$f = ma$', '$f = \\mu v$'], correctAnswer: 0, explanation: '$f = \\mu N$ where N is normal force.', difficulty: 'easy', topicSlug: 'friction' },
  { id: 29, question: 'A 10 kg box on a floor ($\\mu_k = 0.3$). Kinetic friction? ($g = 10$ m/s²)', options: ['30 N', '3 N', '100 N', '10 N'], correctAnswer: 0, explanation: '$f = 0.3 × 10 × 10 = 30$ N.', difficulty: 'medium', topicSlug: 'friction' },
  { id: 30, question: 'Friction always acts:', options: ['Opposite to motion/tendency of motion', 'Downward', 'To accelerate objects', 'Perpendicular to surface'], correctAnswer: 0, explanation: 'Friction opposes relative motion.', difficulty: 'easy', topicSlug: 'friction' },
  { id: 31, question: 'Increasing normal force ___ friction.', options: ['Increases', 'Decreases', 'Does not change', 'Eliminates'], correctAnswer: 0, explanation: '$f = \\mu N$; larger N → larger f.', difficulty: 'medium', topicSlug: 'friction' },
  { id: 32, question: 'On a flat surface, what provides the normal force?', options: ['The surface pushing up', 'Gravity', 'Friction', 'Applied force'], correctAnswer: 0, explanation: 'Normal force is the surface\'s reaction to weight.', difficulty: 'easy', topicSlug: 'friction' },

  // ============ INCLINED PLANES ============
  { id: 33, question: 'Component of gravity along an incline:', options: ['$mg\\sin\\theta$', '$mg\\cos\\theta$', '$mg\\tan\\theta$', '$mg$'], correctAnswer: 0, explanation: 'Parallel component = $mg\\sin\\theta$.', difficulty: 'medium', topicSlug: 'inclined-planes' },
  { id: 34, question: 'Normal force on an incline:', options: ['$mg\\cos\\theta$', '$mg\\sin\\theta$', '$mg$', '$mg\\tan\\theta$'], correctAnswer: 0, explanation: 'Perpendicular component = $mg\\cos\\theta$.', difficulty: 'medium', topicSlug: 'inclined-planes' },
  { id: 35, question: 'Frictionless incline at 30°, 2 kg block — acceleration?', options: ['4.9 m/s²', '9.8 m/s²', '8.5 m/s²', '2.45 m/s²'], correctAnswer: 0, explanation: '$a = g\\sin30° = 9.8(0.5) = 4.9$ m/s².', difficulty: 'medium', topicSlug: 'inclined-planes' },
  { id: 36, question: 'As incline angle increases, acceleration ___ (no friction).', options: ['Increases', 'Decreases', 'Stays same', 'First increases then decreases'], correctAnswer: 0, explanation: '$a = g\\sin\\theta$; sin increases to 90°.', difficulty: 'easy', topicSlug: 'inclined-planes' },
  { id: 37, question: 'At what angle does a block slide on incline ($\\mu_s = 0.577$)?', options: ['30°', '45°', '60°', '90°'], correctAnswer: 0, explanation: '$\\tan\\theta = \\mu_s → \\theta = \\arctan(0.577) ≈ 30°$.', difficulty: 'hard', topicSlug: 'inclined-planes' },

  // ============ UNIFORM CIRCULAR MOTION ============
  { id: 38, question: 'Centripetal acceleration direction:', options: ['Toward center', 'Away from center', 'Tangent to circle', 'Along velocity'], correctAnswer: 0, explanation: 'Always points inward.', difficulty: 'easy', topicSlug: 'uniform-circular-motion' },
  { id: 39, question: 'Centripetal acceleration formula:', options: ['$a_c = v²/r$', '$a_c = v/r$', '$a_c = vr$', '$a_c = mv²/r$'], correctAnswer: 0, explanation: '$a_c = v²/r$ or $\\omega²r$.', difficulty: 'easy', topicSlug: 'uniform-circular-motion' },
  { id: 40, question: 'Object in uniform circular motion has constant:', options: ['Speed', 'Velocity', 'Acceleration direction', 'Force direction'], correctAnswer: 0, explanation: 'Speed constant; velocity direction changes.', difficulty: 'medium', topicSlug: 'uniform-circular-motion' },
  { id: 41, question: 'Centripetal force formula:', options: ['$F_c = mv²/r$', '$F_c = mv/r$', '$F_c = mar$', '$F_c = mg$'], correctAnswer: 0, explanation: '$F_c = ma_c = mv²/r$.', difficulty: 'easy', topicSlug: 'uniform-circular-motion' },
  { id: 42, question: 'If radius doubles and speed stays same, centripetal force:', options: ['Halves', 'Doubles', 'Quadruples', 'Stays same'], correctAnswer: 0, explanation: '$F_c = mv²/r$; double r → half F.', difficulty: 'medium', topicSlug: 'uniform-circular-motion' },
  { id: 43, question: 'Period of circular motion:', options: ['$T = 2\\pi r/v$', '$T = v/r$', '$T = 2\\pi v/r$', '$T = r/v$'], correctAnswer: 0, explanation: 'Circumference / speed.', difficulty: 'medium', topicSlug: 'uniform-circular-motion' },
  { id: 44, question: 'At the top of a vertical loop, net centripetal force =', options: ['$mg + N$ (both point inward)', '$mg - N$', '$N - mg$', '$mg$ only'], correctAnswer: 0, explanation: 'At top, both weight and normal point toward center.', difficulty: 'hard', topicSlug: 'uniform-circular-motion' },

  // ============ UNIVERSAL GRAVITATION ============
  { id: 45, question: 'Newton\'s Law of Gravitation:', options: ['$F = GMm/r²$', '$F = Gm/r$', '$F = GMm/r$', '$F = GM/r²$'], correctAnswer: 0, explanation: 'Inverse square law.', difficulty: 'easy', topicSlug: 'universal-gravitation' },
  { id: 46, question: 'G is approximately:', options: ['$6.67 × 10^{-11}$ N·m²/kg²', '$9.8$ m/s²', '$6.02 × 10^{23}$', '$8.314$ J/mol·K'], correctAnswer: 0, explanation: 'Universal gravitational constant.', difficulty: 'easy', topicSlug: 'universal-gravitation' },
  { id: 47, question: 'If distance between two masses doubles, gravitational force:', options: ['Becomes 1/4', 'Halves', 'Doubles', 'Quadruples'], correctAnswer: 0, explanation: '$F ∝ 1/r²$; double r → 1/4 force.', difficulty: 'medium', topicSlug: 'universal-gravitation' },
  { id: 48, question: 'g at Earth\'s surface equals:', options: ['$GM/R²$', '$GM/R$', '$G/MR²$', '$GMR$'], correctAnswer: 0, explanation: '$mg = GMm/R² → g = GM/R²$.', difficulty: 'medium', topicSlug: 'universal-gravitation' },
  { id: 49, question: 'Satellite orbital speed:', options: ['$v = \\sqrt{GM/r}$', '$v = GM/r$', '$v = \\sqrt{GMr}$', '$v = 2\\pi r/G$'], correctAnswer: 0, explanation: '$mv²/r = GMm/r² → v = \\sqrt{GM/r}$.', difficulty: 'hard', topicSlug: 'universal-gravitation' },
  { id: 50, question: 'Kepler\'s Third Law:', options: ['$T² ∝ r³$', '$T ∝ r$', '$T² ∝ r²$', '$T³ ∝ r²$'], correctAnswer: 0, explanation: 'Period squared proportional to semi-major axis cubed.', difficulty: 'hard', topicSlug: 'universal-gravitation' },

  // ============ WORK & KINETIC ENERGY ============
  { id: 51, question: 'Work formula:', options: ['$W = Fd\\cos\\theta$', '$W = Fd\\sin\\theta$', '$W = Fv$', '$W = md$'], correctAnswer: 0, explanation: 'Work = force × displacement × cos(angle).', difficulty: 'easy', topicSlug: 'work-and-kinetic-energy' },
  { id: 52, question: 'Kinetic energy formula:', options: ['$KE = ½mv²$', '$KE = mv$', '$KE = mgh$', '$KE = ½mv$'], correctAnswer: 0, explanation: 'Energy of motion.', difficulty: 'easy', topicSlug: 'work-and-kinetic-energy' },
  { id: 53, question: 'Work-energy theorem:', options: ['$W_{net} = \\Delta KE$', '$W = \\Delta PE$', '$F = ma$', '$P = W/t$'], correctAnswer: 0, explanation: 'Net work equals change in kinetic energy.', difficulty: 'medium', topicSlug: 'work-and-kinetic-energy' },
  { id: 54, question: 'A 3 kg object at 4 m/s — kinetic energy?', options: ['24 J', '12 J', '6 J', '48 J'], correctAnswer: 0, explanation: '$½(3)(16) = 24$ J.', difficulty: 'easy', topicSlug: 'work-and-kinetic-energy' },
  { id: 55, question: 'Work done by a force perpendicular to motion:', options: ['Zero', 'Maximum', 'Negative', 'Fd'], correctAnswer: 0, explanation: '$\\cos90° = 0$.', difficulty: 'medium', topicSlug: 'work-and-kinetic-energy' },
  { id: 56, question: 'Power is:', options: ['Work / time', 'Force × distance', 'Energy × time', 'Force / time'], correctAnswer: 0, explanation: '$P = W/t$ (watts).', difficulty: 'easy', topicSlug: 'work-and-kinetic-energy' },
  { id: 57, question: 'If speed doubles, KE becomes:', options: ['4× original', '2× original', '½ original', '8× original'], correctAnswer: 0, explanation: '$KE ∝ v²$; double v → 4× KE.', difficulty: 'medium', topicSlug: 'work-and-kinetic-energy' },

  // ============ GRAVITATIONAL POTENTIAL ENERGY ============
  { id: 58, question: 'Gravitational PE near surface:', options: ['$PE = mgh$', '$PE = ½mv²$', '$PE = mg/h$', '$PE = mh²$'], correctAnswer: 0, explanation: 'Height above reference × weight.', difficulty: 'easy', topicSlug: 'gravitational-potential-energy' },
  { id: 59, question: 'A 2 kg ball at 5 m height. PE? ($g = 10$ m/s²)', options: ['100 J', '50 J', '10 J', '200 J'], correctAnswer: 0, explanation: '$2(10)(5) = 100$ J.', difficulty: 'easy', topicSlug: 'gravitational-potential-energy' },
  { id: 60, question: 'As object falls, PE ___ and KE ___.', options: ['Decreases; increases', 'Increases; decreases', 'Both increase', 'Both decrease'], correctAnswer: 0, explanation: 'PE converts to KE.', difficulty: 'easy', topicSlug: 'gravitational-potential-energy' },
  { id: 61, question: 'Universal gravitational PE:', options: ['$U = -GMm/r$', '$U = GMm/r$', '$U = -GMm/r²$', '$U = mgh$'], correctAnswer: 0, explanation: 'Negative because bound systems have negative energy.', difficulty: 'hard', topicSlug: 'gravitational-potential-energy' },

  // ============ CONSERVATION OF ENERGY ============
  { id: 62, question: 'Conservation of energy states:', options: ['Total energy in an isolated system is constant', 'Energy is always kinetic', 'Work creates energy', 'Heat destroys energy'], correctAnswer: 0, explanation: 'Energy transforms but total is conserved.', difficulty: 'easy', topicSlug: 'conservation-of-energy' },
  { id: 63, question: 'Ball dropped from 20 m — speed at bottom? ($g = 10$ m/s²)', options: ['20 m/s', '10 m/s', '14.1 m/s', '40 m/s'], correctAnswer: 0, explanation: '$mgh = ½mv² → v = \\sqrt{2gh} = \\sqrt{400} = 20$ m/s.', difficulty: 'medium', topicSlug: 'conservation-of-energy' },
  { id: 64, question: 'On a roller coaster, highest speed occurs at:', options: ['Lowest point', 'Highest point', 'Midpoint', 'Any point'], correctAnswer: 0, explanation: 'Maximum KE at minimum height.', difficulty: 'easy', topicSlug: 'conservation-of-energy' },
  { id: 65, question: 'When friction is present, mechanical energy:', options: ['Decreases (converts to thermal)', 'Increases', 'Stays constant', 'Becomes zero'], correctAnswer: 0, explanation: 'Friction converts mechanical to thermal.', difficulty: 'medium', topicSlug: 'conservation-of-energy' },
  { id: 66, question: 'A pendulum at max height has:', options: ['Max PE, zero KE', 'Max KE, zero PE', 'Equal KE and PE', 'Zero energy'], correctAnswer: 0, explanation: 'Momentarily stationary at peak.', difficulty: 'easy', topicSlug: 'conservation-of-energy' },

  // ============ ELASTIC POTENTIAL ENERGY ============
  { id: 67, question: 'Elastic PE formula:', options: ['$PE = ½kx²$', '$PE = kx$', '$PE = ½kx$', '$PE = kx²$'], correctAnswer: 0, explanation: 'Hooke\'s law energy: $½kx²$.', difficulty: 'easy', topicSlug: 'elastic-potential-energy' },
  { id: 68, question: 'Spring k = 200 N/m, compressed 0.1 m. PE?', options: ['1.0 J', '10 J', '20 J', '0.1 J'], correctAnswer: 0, explanation: '$½(200)(0.01) = 1.0$ J.', difficulty: 'medium', topicSlug: 'elastic-potential-energy' },
  { id: 69, question: 'Hooke\'s Law:', options: ['$F = -kx$', '$F = kx²$', '$F = k/x$', '$F = -k/x$'], correctAnswer: 0, explanation: 'Force proportional to displacement, opposite direction.', difficulty: 'easy', topicSlug: 'elastic-potential-energy' },
  { id: 70, question: 'Doubling compression of a spring ___ the PE.', options: ['Quadruples', 'Doubles', 'Triples', 'Halves'], correctAnswer: 0, explanation: '$PE ∝ x²$; double x → 4× PE.', difficulty: 'medium', topicSlug: 'elastic-potential-energy' },

  // ============ MOMENTUM & IMPULSE ============
  { id: 71, question: 'Momentum formula:', options: ['$p = mv$', '$p = ma$', '$p = ½mv²$', '$p = Ft$'], correctAnswer: 0, explanation: 'Momentum = mass × velocity.', difficulty: 'easy', topicSlug: 'momentum-and-impulse' },
  { id: 72, question: 'Impulse equals:', options: ['Change in momentum', 'Change in energy', 'Force × distance', 'Mass × acceleration'], correctAnswer: 0, explanation: '$J = F\\Delta t = \\Delta p$.', difficulty: 'easy', topicSlug: 'momentum-and-impulse' },
  { id: 73, question: 'A 2 kg ball at 5 m/s. Momentum?', options: ['10 kg·m/s', '5 kg·m/s', '2.5 kg·m/s', '25 kg·m/s'], correctAnswer: 0, explanation: '$p = 2(5) = 10$ kg·m/s.', difficulty: 'easy', topicSlug: 'momentum-and-impulse' },
  { id: 74, question: 'Why do airbags reduce injury?', options: ['Increase impact time → decrease force', 'Decrease momentum', 'Increase impulse', 'Remove friction'], correctAnswer: 0, explanation: 'Same Δp but longer Δt → smaller F.', difficulty: 'medium', topicSlug: 'momentum-and-impulse' },
  { id: 75, question: 'A 0.5 kg ball hits a wall at 10 m/s and rebounds at 10 m/s. Impulse?', options: ['10 kg·m/s', '5 kg·m/s', '0 kg·m/s', '20 kg·m/s'], correctAnswer: 0, explanation: '$\\Delta p = 0.5(10) - 0.5(-10) = 10$ kg·m/s.', difficulty: 'hard', topicSlug: 'momentum-and-impulse' },

  // ============ CONSERVATION OF MOMENTUM ============
  { id: 76, question: 'Total momentum before collision = total after when:', options: ['No external forces act', 'Collision is elastic', 'Objects stick together', 'Forces are internal only'], correctAnswer: 0, explanation: 'Conservation of momentum in isolated systems.', difficulty: 'easy', topicSlug: 'conservation-of-momentum' },
  { id: 77, question: 'Elastic collision conserves:', options: ['Both KE and momentum', 'Only momentum', 'Only KE', 'Neither'], correctAnswer: 0, explanation: 'Elastic = both conserved.', difficulty: 'easy', topicSlug: 'conservation-of-momentum' },
  { id: 78, question: 'Perfectly inelastic collision — objects:', options: ['Stick together', 'Bounce apart', 'Explode', 'Stop'], correctAnswer: 0, explanation: 'Maximum KE loss; they move as one.', difficulty: 'easy', topicSlug: 'conservation-of-momentum' },
  { id: 79, question: '2 kg at 5 m/s hits stationary 3 kg, they stick. Final v?', options: ['2 m/s', '5 m/s', '3.33 m/s', '1 m/s'], correctAnswer: 0, explanation: '$2(5) = 5v → v = 2$ m/s.', difficulty: 'medium', topicSlug: 'conservation-of-momentum' },
  { id: 80, question: 'In an explosion, total momentum is:', options: ['Zero (if initially at rest)', 'Positive', 'Negative', 'Maximum'], correctAnswer: 0, explanation: 'Internal forces cannot change total momentum.', difficulty: 'medium', topicSlug: 'conservation-of-momentum' },
  { id: 81, question: 'A cannon fires a ball. The cannon recoils because:', options: ['Conservation of momentum', 'Newton\'s First Law', 'Gravity', 'Energy conservation'], correctAnswer: 0, explanation: '$p_{ball} + p_{cannon} = 0$.', difficulty: 'medium', topicSlug: 'conservation-of-momentum' },

  // ============ TORQUE & ROTATIONAL MOTION ============
  { id: 82, question: 'Torque formula:', options: ['$\\tau = rF\\sin\\theta$', '$\\tau = rF\\cos\\theta$', '$\\tau = Fr²$', '$\\tau = F/r$'], correctAnswer: 0, explanation: 'Torque = lever arm × force × sin(angle).', difficulty: 'easy', topicSlug: 'torque-and-rotational-motion' },
  { id: 83, question: 'SI unit of torque:', options: ['N·m', 'J', 'N/m', 'kg·m/s²'], correctAnswer: 0, explanation: 'Newton-meters (not Joules, different context).', difficulty: 'easy', topicSlug: 'torque-and-rotational-motion' },
  { id: 84, question: 'Maximum torque occurs when force is applied at:', options: ['90° to lever arm', '0° to lever arm', '45°', '180°'], correctAnswer: 0, explanation: '$\\sin90° = 1$ → maximum.', difficulty: 'medium', topicSlug: 'torque-and-rotational-motion' },
  { id: 85, question: 'Moment of inertia depends on:', options: ['Mass and its distribution from axis', 'Mass only', 'Velocity', 'Torque'], correctAnswer: 0, explanation: '$I = \\sum mr²$; farther from axis → larger I.', difficulty: 'medium', topicSlug: 'torque-and-rotational-motion' },
  { id: 86, question: 'Rotational analog of $F = ma$:', options: ['$\\tau = I\\alpha$', '$\\tau = mr$', '$L = I\\omega$', '$W = \\tau\\theta$'], correctAnswer: 0, explanation: 'Torque = moment of inertia × angular acceleration.', difficulty: 'medium', topicSlug: 'torque-and-rotational-motion' },
  { id: 87, question: 'A wrench with longer handle requires ___ force.', options: ['Less', 'More', 'Same', 'Zero'], correctAnswer: 0, explanation: 'Larger r → same τ with less F.', difficulty: 'easy', topicSlug: 'torque-and-rotational-motion' },

  // ============ TORQUE & EQUILIBRIUM ============
  { id: 88, question: 'Condition for rotational equilibrium:', options: ['Net torque = 0', 'Net force = 0', 'Constant ω', 'No rotation'], correctAnswer: 0, explanation: '$\\sum\\tau = 0$ for rotational equilibrium.', difficulty: 'easy', topicSlug: 'torque-and-equilibrium' },
  { id: 89, question: 'A balanced seesaw requires:', options: ['Equal torques on both sides', 'Equal weights', 'Equal distances', 'Equal masses'], correctAnswer: 0, explanation: '$m_1 g d_1 = m_2 g d_2$.', difficulty: 'medium', topicSlug: 'torque-and-equilibrium' },
  { id: 90, question: 'Static equilibrium requires:', options: ['$\\sum F = 0$ AND $\\sum\\tau = 0$', '$\\sum F = 0$ only', '$\\sum\\tau = 0$ only', 'v = 0 only'], correctAnswer: 0, explanation: 'Both translational and rotational equilibrium.', difficulty: 'medium', topicSlug: 'torque-and-equilibrium' },
  { id: 91, question: 'Center of gravity for uniform object is at:', options: ['Geometric center', 'Edge', 'Top', 'Bottom'], correctAnswer: 0, explanation: 'Uniformly distributed mass → center.', difficulty: 'easy', topicSlug: 'torque-and-equilibrium' },

  // ============ ANGULAR MOMENTUM ============
  { id: 92, question: 'Angular momentum formula:', options: ['$L = I\\omega$', '$L = mv$', '$L = mr$', '$L = \\tau t$'], correctAnswer: 0, explanation: 'Rotational analog of $p = mv$.', difficulty: 'easy', topicSlug: 'angular-momentum' },
  { id: 93, question: 'Ice skater pulls arms in → spins faster because:', options: ['Angular momentum conserved; I decreases → ω increases', 'Energy increases', 'Torque applied', 'Friction reduced'], correctAnswer: 0, explanation: '$L = I\\omega = $ const; smaller I → bigger ω.', difficulty: 'medium', topicSlug: 'angular-momentum' },
  { id: 94, question: 'Angular momentum is conserved when:', options: ['No external torque acts', 'No external force acts', 'Speed is constant', 'Always'], correctAnswer: 0, explanation: '$\\sum\\tau_{ext} = 0 → \\Delta L = 0$.', difficulty: 'medium', topicSlug: 'angular-momentum' },
  { id: 95, question: 'A spinning top eventually stops because:', options: ['External torque from friction', 'Angular momentum is not conserved', 'Energy created', 'Gravity increases'], correctAnswer: 0, explanation: 'Friction provides external torque.', difficulty: 'medium', topicSlug: 'angular-momentum' },

  // ============ SIMPLE HARMONIC MOTION ============
  { id: 96, question: 'SHM restoring force is:', options: ['Proportional to displacement, opposite direction', 'Constant', 'Random', 'Proportional to velocity'], correctAnswer: 0, explanation: '$F = -kx$ for springs.', difficulty: 'easy', topicSlug: 'simple-harmonic-motion' },
  { id: 97, question: 'Period of a mass-spring system:', options: ['$T = 2\\pi\\sqrt{m/k}$', '$T = 2\\pi\\sqrt{k/m}$', '$T = 2\\pi\\sqrt{L/g}$', '$T = 1/f$'], correctAnswer: 0, explanation: 'Depends on mass and spring constant.', difficulty: 'medium', topicSlug: 'simple-harmonic-motion' },
  { id: 98, question: 'Period of a simple pendulum:', options: ['$T = 2\\pi\\sqrt{L/g}$', '$T = 2\\pi\\sqrt{m/k}$', '$T = 2\\pi\\sqrt{g/L}$', '$T = L/g$'], correctAnswer: 0, explanation: 'Depends on length and g, not mass.', difficulty: 'medium', topicSlug: 'simple-harmonic-motion' },
  { id: 99, question: 'In SHM, max speed occurs at:', options: ['Equilibrium position', 'Max displacement', 'Quarter period', 'Always same'], correctAnswer: 0, explanation: 'All PE → KE at equilibrium.', difficulty: 'medium', topicSlug: 'simple-harmonic-motion' },
  { id: 100, question: 'Doubling the mass on a spring ___ the period.', options: ['Multiplies by √2', 'Doubles', 'Halves', 'No change'], correctAnswer: 0, explanation: '$T ∝ \\sqrt{m}$; double m → $\\sqrt{2}$ × T.', difficulty: 'hard', topicSlug: 'simple-harmonic-motion' },
  { id: 101, question: 'In SHM, acceleration is maximum at:', options: ['Maximum displacement', 'Equilibrium', 'Half amplitude', 'Never'], correctAnswer: 0, explanation: '$a = -\\omega²x$; max at max x.', difficulty: 'medium', topicSlug: 'simple-harmonic-motion' },
  { id: 102, question: 'Energy in SHM is ___ at all positions.', options: ['Constant (KE + PE)', 'Only PE', 'Only KE', 'Increasing'], correctAnswer: 0, explanation: 'Total mechanical energy conserved.', difficulty: 'easy', topicSlug: 'simple-harmonic-motion' },

  // ============ PROJECTILE MOTION ============
  { id: 103, question: 'In projectile motion, horizontal acceleration is:', options: ['Zero (ignoring air resistance)', '9.8 m/s²', 'Equal to vertical', 'Depends on angle'], correctAnswer: 0, explanation: 'No horizontal forces → $a_x = 0$.', difficulty: 'easy', topicSlug: 'projectile-motion' },
  { id: 104, question: 'Range is maximum at what launch angle?', options: ['45°', '30°', '60°', '90°'], correctAnswer: 0, explanation: '$\\sin(2\\theta)$ maximized at $\\theta = 45°$.', difficulty: 'easy', topicSlug: 'projectile-motion' },
  { id: 105, question: 'Time of flight for projectile on level ground:', options: ['$t = 2v_0\\sin\\theta/g$', '$t = v_0/g$', '$t = v_0\\cos\\theta/g$', '$t = 2v_0/g$'], correctAnswer: 0, explanation: 'Time up + time down.', difficulty: 'medium', topicSlug: 'projectile-motion' },
  { id: 106, question: 'Horizontal and vertical motions are:', options: ['Independent of each other', 'Coupled', 'Equal', 'Opposite'], correctAnswer: 0, explanation: 'They don\'t affect each other.', difficulty: 'easy', topicSlug: 'projectile-motion' },
  { id: 107, question: 'A ball launched at 20 m/s at 30° — initial $v_y$?', options: ['10 m/s', '17.3 m/s', '20 m/s', '5 m/s'], correctAnswer: 0, explanation: '$v_y = 20\\sin30° = 10$ m/s.', difficulty: 'medium', topicSlug: 'projectile-motion' },
  { id: 108, question: 'At the peak of trajectory, vertical velocity is:', options: ['Zero', 'Maximum', 'Equal to horizontal', 'Negative'], correctAnswer: 0, explanation: 'Vertical component reverses at peak.', difficulty: 'easy', topicSlug: 'projectile-motion' },

  // ============ WAVES & SOUND (BONUS) ============
  { id: 109, question: 'Wave speed formula:', options: ['$v = f\\lambda$', '$v = f/\\lambda$', '$v = \\lambda/f$', '$v = 2f\\lambda$'], correctAnswer: 0, explanation: 'Speed = frequency × wavelength.', difficulty: 'easy', topicSlug: 'simple-harmonic-motion' },
  { id: 110, question: 'When a wave enters a new medium, ___ stays the same.', options: ['Frequency', 'Wavelength', 'Speed', 'All change'], correctAnswer: 0, explanation: 'Frequency set by the source.', difficulty: 'medium', topicSlug: 'simple-harmonic-motion' },
]

export function getApPhysics1Questions(count: number = 10, topicSlug?: string): ApPhysics1Question[] {
  let pool = allQuestions
  if (topicSlug) {
    const filtered = pool.filter(q => q.topicSlug === topicSlug)
    if (filtered.length > 0) pool = filtered
  }
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
