#!/usr/bin/env python3
"""Generate the expanded AP Physics 1 diagnostic (10 forms, ~146 questions)."""

# Each tuple: (question, [options], correctAnswer, explanation, domain, topicSlug)
QUESTIONS = [
# ════════ KINEMATICS ════════
("An object is thrown vertically upward. At the highest point, its acceleration is:", ["Zero", "9.8 m/s² downward", "9.8 m/s² upward", "Dependent on the initial velocity"], 1, "Near Earth's surface, the acceleration due to gravity is always 9.8 m/s² downward, regardless of velocity.", "kinematics", "one-dimensional-motion"),
("A car accelerates uniformly from rest to 20 m/s in 5 seconds. How far does it travel?", ["50 m", "100 m", "25 m", "200 m"], 0, "d = ½at² = ½(4)(25) = 50 m. Or d = (v₀ + v)t/2 = (0 + 20)(5)/2 = 50 m.", "kinematics", "one-dimensional-motion"),
("A projectile is launched at 45° above the horizontal. At what angle is the velocity vector at the highest point?", ["45° above horizontal", "0° (horizontal)", "90° (vertical)", "45° below horizontal"], 1, "At the peak the vertical velocity is zero; only horizontal velocity remains, so the velocity is horizontal (0°).", "kinematics", "two-dimensional-motion"),
("Two balls are dropped from the same height. Ball A has twice the mass of Ball B. Ignoring air resistance, which hits the ground first?", ["Ball A", "Ball B", "They hit at the same time", "Cannot be determined"], 2, "In free fall (no air resistance), all objects experience the same gravitational acceleration regardless of mass.", "kinematics", "one-dimensional-motion"),
("A ball is launched horizontally from a cliff. What determines the time in the air?", ["The horizontal velocity", "The height of the cliff", "The mass of the ball", "Both horizontal velocity and height"], 1, "Time of flight depends only on the vertical fall: t = √(2h/g). Horizontal velocity is independent.", "kinematics", "two-dimensional-motion"),
("The slope of a position-time graph represents:", ["Acceleration", "Velocity", "Force", "Displacement"], 1, "The slope Δx/Δt of a position-time graph gives velocity (or instantaneous velocity for a curve).", "kinematics", "one-dimensional-motion"),
("A projectile has a range R when launched at angle θ. What other angle gives the same range?", ["θ/2", "90° − θ", "180° − θ", "2θ"], 1, "For the same launch speed, complementary angles (θ and 90° − θ) give the same range due to the sin(2θ) factor.", "kinematics", "two-dimensional-motion"),
("The area under an acceleration-time graph gives:", ["Displacement", "Change in velocity", "Force", "Kinetic energy"], 1, "Area under a-t graph = ∫a dt = Δv (change in velocity).", "kinematics", "one-dimensional-motion"),
("A car traveling at 30 m/s brakes uniformly and stops in 6 seconds. The braking distance is:", ["150 m", "90 m", "45 m", "180 m"], 1, "a = -30/6 = -5 m/s². d = v₀t + ½at² = 30(6) + ½(-5)(36) = 180 - 90 = 90 m.", "kinematics", "one-dimensional-motion"),
("A ball is thrown upward at 20 m/s. The time to reach maximum height is approximately:", ["1 s", "2 s", "4 s", "10 s"], 1, "t = v₀/g = 20/10 = 2 s (using g ≈ 10 m/s²).", "kinematics", "one-dimensional-motion"),
("During projectile motion (no air resistance), the horizontal component of velocity:", ["Increases", "Decreases", "Remains constant", "Equals the vertical component"], 2, "No horizontal force acts, so horizontal velocity stays constant throughout the flight.", "kinematics", "two-dimensional-motion"),
("An object moves 5 m east, then 5 m north. Its displacement magnitude is:", ["10 m", "5 m", "7.07 m", "0 m"], 2, "Displacement = √(5² + 5²) = 5√2 ≈ 7.07 m at 45° northeast.", "kinematics", "two-dimensional-motion"),
("The instantaneous velocity of an object can be found from a position-time graph by:", ["Finding the slope of the tangent line", "Calculating the area under the curve", "Finding the y-intercept", "Averaging two endpoints"], 0, "Instantaneous velocity is the derivative dx/dt, which equals the slope of the tangent line at that point.", "kinematics", "one-dimensional-motion"),
("A stone is dropped from a 45 m tower. The time to hit the ground is approximately:", ["2 s", "3 s", "4.5 s", "9 s"], 1, "t = √(2h/g) = √(2·45/10) = √9 = 3 s.", "kinematics", "one-dimensional-motion"),
("A projectile is fired with initial speed v₀ at angle θ. Its maximum height is:", ["v₀²sin²θ/(2g)", "v₀²sin(2θ)/g", "v₀²/(2g)", "v₀sinθ/g"], 0, "At the peak, v_y = 0. Using v² = v₀²sin²θ - 2gh → h = v₀²sin²θ/(2g).", "kinematics", "two-dimensional-motion"),
("An object in free fall has been falling for 3 seconds. Its speed is approximately:", ["10 m/s", "20 m/s", "30 m/s", "45 m/s"], 2, "v = gt = 10(3) = 30 m/s (using g ≈ 10 m/s²).", "kinematics", "one-dimensional-motion"),
("A car's velocity-time graph is a straight line with positive slope. The car is:", ["Moving at constant velocity", "Accelerating uniformly", "Decelerating", "At rest"], 1, "A straight line on a v-t graph means constant acceleration. Positive slope means speed is increasing.", "kinematics", "one-dimensional-motion"),
("A boat crosses a river at 4 m/s perpendicular to a 3 m/s current. The resultant speed is:", ["5 m/s", "7 m/s", "1 m/s", "12 m/s"], 0, "Resultant = √(4² + 3²) = √(16 + 9) = √25 = 5 m/s.", "kinematics", "two-dimensional-motion"),
("Which quantity is scalar (not a vector)?", ["Velocity", "Acceleration", "Displacement", "Speed"], 3, "Speed has magnitude only, while velocity, acceleration, and displacement all have both magnitude and direction.", "kinematics", "one-dimensional-motion"),
("Two projectiles are launched at the same speed but at 30° and 60°. Which reaches a greater maximum height?", ["The one at 30°", "The one at 60°", "Both reach the same height", "Cannot be determined"], 1, "h_max = v₀²sin²θ/(2g). sin²60° > sin²30°, so the 60° launch reaches higher.", "kinematics", "two-dimensional-motion"),

# ════════ DYNAMICS ════════
("A 5 kg object experiences a net force of 20 N. Its acceleration is:", ["4 m/s²", "100 m/s²", "0.25 m/s²", "25 m/s²"], 0, "Newton's second law: a = F/m = 20/5 = 4 m/s².", "dynamics", "newtons-first-second-laws"),
("A book sits on a table. The normal force on the book is an example of Newton's:", ["First law", "Second law", "Third law", "Law of gravitation"], 2, "The normal force is the table's reaction to the book pushing down — an action-reaction pair (Third law).", "dynamics", "newtons-first-second-laws"),
("A 10 kg box is pushed with 50 N across a floor with μk = 0.3. What is the acceleration?", ["5 m/s²", "2.06 m/s²", "3 m/s²", "2 m/s²"], 1, "f = μk·mg = 0.3(10)(9.8) = 29.4 N. Fnet = 50 − 29.4 = 20.6 N. a = 20.6/10 ≈ 2.06 m/s².", "dynamics", "friction"),
("An elevator accelerates upward. The apparent weight of a person inside is:", ["Less than their true weight", "Equal to their true weight", "Greater than their true weight", "Zero"], 2, "When accelerating up, the normal force (apparent weight) exceeds mg: N = m(g + a).", "dynamics", "newtons-first-second-laws"),
("Static friction is always:", ["Equal to μsN", "Less than or equal to μsN", "Greater than kinetic friction", "Proportional to velocity"], 1, "Static friction adjusts up to a maximum of μsN. It's only equal to μsN at the point of impending motion.", "dynamics", "friction"),
("Two objects are connected by a massless string over a frictionless pulley (Atwood machine). They accelerate because:", ["The total force is zero", "The net force on the system is the difference in their weights", "Tension is different on each side", "Gravity is different for each mass"], 1, "For an Atwood machine: a = (m₁ − m₂)g/(m₁ + m₂). The net force is the weight difference.", "dynamics", "newtons-first-second-laws"),
("Newton's first law (inertia) states:", ["F = ma", "Every action has an equal and opposite reaction", "An object maintains its state of motion unless a net force acts on it", "Force equals the rate of change of momentum"], 2, "The law of inertia: without a net external force, an object remains at rest or moves at constant velocity.", "dynamics", "newtons-first-second-laws"),
("A block slides down a frictionless incline at angle θ. Its acceleration is:", ["g", "g sin θ", "g cos θ", "g tan θ"], 1, "On a frictionless incline, the component of gravity along the surface is mg sin θ, so a = g sin θ.", "dynamics", "friction"),
("A 2000 kg car accelerates from 0 to 25 m/s in 10 s. The net force on the car is:", ["500 N", "2500 N", "5000 N", "50000 N"], 2, "F = ma = 2000(25/10) = 2000(2.5) = 5000 N.", "dynamics", "newtons-first-second-laws"),
("Two forces of 3 N and 4 N act perpendicular to each other on an object. The net force magnitude is:", ["1 N", "5 N", "7 N", "12 N"], 1, "F_net = √(3² + 4²) = √(9 + 16) = √25 = 5 N.", "dynamics", "newtons-first-second-laws"),
("A 50 kg person stands on a scale in an elevator moving at constant velocity. The scale reads:", ["0 N", "250 N", "490 N", "980 N"], 2, "At constant velocity, a = 0, so N = mg = 50(9.8) = 490 N.", "dynamics", "newtons-first-second-laws"),
("The coefficient of kinetic friction is typically:", ["Greater than the coefficient of static friction", "Equal to the coefficient of static friction", "Less than the coefficient of static friction", "Dependent on the area of contact"], 2, "Kinetic friction is generally less than maximum static friction for the same surfaces.", "dynamics", "friction"),
("An object in translational equilibrium must have:", ["Zero velocity", "Zero acceleration", "Maximum friction", "Zero mass"], 1, "ΣF = 0 means a = 0. The object can still move at constant velocity.", "dynamics", "newtons-first-second-laws"),
("A 3 kg block hangs from a string attached to the ceiling. The tension in the string is:", ["3 N", "9.8 N", "29.4 N", "0 N"], 2, "In equilibrium: T = mg = 3(9.8) = 29.4 N.", "dynamics", "newtons-first-second-laws"),
("A force is applied to push a heavy crate but it does not move. The static friction force equals:", ["Zero", "The applied force", "μsN", "mg"], 1, "Static friction matches the applied force up to its maximum (μsN). Since the crate doesn't move, fs = F_applied.", "dynamics", "friction"),
("When you push against a wall and nothing moves, the reaction force is:", ["Gravity", "The wall pushing back on you", "Friction with the floor", "Your weight"], 1, "Newton's third law: the wall exerts an equal and opposite force on you.", "dynamics", "newtons-first-second-laws"),
("The free-body diagram for an object sliding down a rough incline includes:", ["Only gravity", "Gravity and normal force only", "Gravity, normal force, and kinetic friction", "Gravity and friction only"], 2, "Three forces act: gravity (downward), normal force (perpendicular to surface), and kinetic friction (opposing motion up the incline).", "dynamics", "friction"),
("If the net force on a 10 kg object is zero, the object:", ["Must be at rest", "Must be moving at constant speed", "Could be at rest or moving at constant velocity", "Must be accelerating"], 2, "Newton's first law: zero net force means zero acceleration — the object can be at rest or moving at constant velocity.", "dynamics", "newtons-first-second-laws"),
("The weight of a 10 kg object on the Moon (g ≈ 1.6 m/s²) is:", ["10 N", "16 N", "98 N", "160 N"], 1, "W = mg = 10(1.6) = 16 N (compared to 98 N on Earth).", "dynamics", "newtons-first-second-laws"),
("A 5 kg object on a frictionless surface has a 10 N horizontal force applied. After 4 seconds, its velocity is:", ["2 m/s", "4 m/s", "8 m/s", "20 m/s"], 2, "a = F/m = 10/5 = 2 m/s². v = at = 2(4) = 8 m/s.", "dynamics", "newtons-first-second-laws"),

# ════════ CIRCULAR MOTION & GRAVITATION ════════
("An object in uniform circular motion has a constant:", ["Velocity", "Acceleration", "Speed", "Net force direction"], 2, "In uniform circular motion speed is constant but velocity changes direction continuously.", "circular-motion-gravity", "uniform-circular-motion"),
("The centripetal acceleration of an object moving in a circle of radius r at speed v is:", ["v/r", "v²/r", "vr", "v²r"], 1, "Centripetal acceleration ac = v²/r, directed toward the center of the circle.", "circular-motion-gravity", "uniform-circular-motion"),
("Newton's law of gravitation states that gravitational force is proportional to:", ["The sum of the masses", "The product of the masses divided by distance squared", "The difference of the masses", "Mass times distance"], 1, "F = Gm₁m₂/r². Force is proportional to the product of masses and inversely proportional to distance squared.", "circular-motion-gravity", "universal-gravitation"),
("A satellite in circular orbit has its centripetal force provided by:", ["Its engines", "Gravity", "Normal force", "Tension"], 1, "For a satellite, gravity provides the centripetal force: mg = mv²/r.", "circular-motion-gravity", "universal-gravitation"),
("If the radius of a circular orbit doubles (same speed), the centripetal acceleration:", ["Doubles", "Halves", "Quadruples", "Stays the same"], 1, "ac = v²/r. If r doubles and v stays the same, ac is halved.", "circular-motion-gravity", "uniform-circular-motion"),
("At the top of a vertical loop, the minimum speed for an object to maintain contact is found by setting:", ["N = mg", "mg = mv²/r (with N = 0)", "T = mg", "F = 0"], 1, "At the minimum speed, normal force is zero: gravity alone provides centripetal force, so mg = mv²/r → v = √(gr).", "circular-motion-gravity", "uniform-circular-motion"),
("The gravitational field strength g at distance r from Earth's center is:", ["GM/r", "GM/r²", "GMr", "GM/r³"], 1, "g = GM/r², which decreases as the square of the distance from the center.", "circular-motion-gravity", "universal-gravitation"),
("A car rounds a flat, unbanked curve. The force providing centripetal acceleration is:", ["Gravity", "Normal force", "Friction", "The engine force"], 2, "On a flat curve, static friction between the tires and road provides the centripetal force.", "circular-motion-gravity", "uniform-circular-motion"),
("If you double the speed of an object in circular motion (same radius), the centripetal force:", ["Doubles", "Quadruples", "Halves", "Stays the same"], 1, "F = mv²/r. Doubling v → F increases by factor of 4.", "circular-motion-gravity", "uniform-circular-motion"),
("The period of a satellite in circular orbit depends on:", ["Mass of the satellite", "Orbital radius and mass of the planet", "Only the satellite's speed", "Mass of satellite and speed only"], 1, "From Kepler's third law: T² = 4π²r³/(GM). Period depends on orbital radius and planet mass.", "circular-motion-gravity", "universal-gravitation"),
("An object moves in a circle at constant speed. The direction of its acceleration is:", ["Tangent to the circle", "Toward the center", "Away from the center", "In the direction of motion"], 1, "Centripetal acceleration always points toward the center of the circular path.", "circular-motion-gravity", "uniform-circular-motion"),
("If the distance between two objects doubles, the gravitational force between them:", ["Doubles", "Halves", "Becomes one-quarter", "Quadruples"], 2, "F ∝ 1/r². Doubling r reduces F to (1/2)² = 1/4 of the original.", "circular-motion-gravity", "universal-gravitation"),
("The centripetal force on an object in circular motion is:", ["A new type of fundamental force", "The net inward force (could be gravity, tension, friction, etc.)", "Always equal to mg", "Always provided by friction"], 1, "Centripetal force is not a new force — it is the net radial force provided by whichever forces act inward.", "circular-motion-gravity", "uniform-circular-motion"),
("A ball on a string swings in a vertical circle. The string tension is greatest at:", ["The top", "The bottom", "The sides", "Tension is constant"], 1, "At the bottom: T - mg = mv²/r → T = mv²/r + mg. Speed is also greatest at the bottom.", "circular-motion-gravity", "uniform-circular-motion"),
("Kepler's third law relates:", ["Period and eccentricity", "Period squared and orbital radius cubed", "Speed and mass", "Force and distance"], 1, "T² ∝ r³ — the square of the orbital period is proportional to the cube of the semi-major axis.", "circular-motion-gravity", "universal-gravitation"),
("Astronauts in the ISS appear weightless because:", ["There is no gravity in space", "Gravity is very weak at that altitude", "They are in continuous free fall along with the station", "The ISS shields them from gravity"], 2, "The ISS and astronauts are in free fall (orbiting), so they experience apparent weightlessness despite gravity being ~90% of surface value.", "circular-motion-gravity", "universal-gravitation"),
("A car rounds a banked curve with no friction. The centripetal force is provided by:", ["Gravity alone", "The normal force alone", "A component of the normal force", "Friction"], 2, "On a frictionless banked curve, the horizontal component of the normal force (N sin θ) provides the centripetal force.", "circular-motion-gravity", "uniform-circular-motion"),
("The escape velocity from a planet depends on:", ["Only the object's mass", "The planet's mass and radius", "Only the planet's radius", "The object's initial height"], 1, "v_esc = √(2GM/R). It depends on the planet's mass M and radius R, not the object's mass.", "circular-motion-gravity", "universal-gravitation"),
("A coin on a turntable flies off when the rotation speed increases because:", ["Gravity decreases", "The required centripetal force exceeds maximum static friction", "The normal force decreases", "The coin gains too much kinetic energy"], 1, "The required centripetal force (mω²r) increases with ω. When it exceeds μsN, friction can't hold the coin.", "circular-motion-gravity", "uniform-circular-motion"),
("For an object in uniform circular motion, the work done by the centripetal force is:", ["Positive", "Negative", "Zero", "Equal to ½mv²"], 2, "The centripetal force is always perpendicular to the velocity, so W = Fd cos 90° = 0.", "circular-motion-gravity", "uniform-circular-motion"),

# ════════ ENERGY ════════
("The work-energy theorem states:", ["Work equals force times distance always", "The net work on an object equals its change in kinetic energy", "Energy is always conserved", "Work done by friction is always positive"], 1, "W_net = ΔKE = ½mv² − ½mv₀². Net work equals the change in kinetic energy.", "energy", "work-and-kinetic-energy"),
("A spring compressed by x stores potential energy equal to:", ["kx", "½kx", "kx²", "½kx²"], 3, "Elastic potential energy PE = ½kx², where k is the spring constant.", "energy", "conservation-of-energy"),
("If a ball is dropped from height h, its speed just before hitting the ground is:", ["√(gh)", "√(2gh)", "2gh", "gh"], 1, "Conservation of energy: mgh = ½mv² → v = √(2gh).", "energy", "conservation-of-energy"),
("Work done by a constant force at 90° to the displacement is:", ["Maximum", "Positive", "Negative", "Zero"], 3, "W = Fd cos θ. When θ = 90°, cos 90° = 0, so no work is done.", "energy", "work-and-kinetic-energy"),
("Power is defined as:", ["Force × displacement", "Work / time", "Energy × time", "Force / acceleration"], 1, "Power = W/t = rate of doing work, measured in watts (J/s).", "energy", "work-and-kinetic-energy"),
("In a system where only conservative forces act, which quantity is conserved?", ["Kinetic energy only", "Potential energy only", "Total mechanical energy (KE + PE)", "Momentum only"], 2, "When only conservative forces (gravity, springs) do work, total mechanical energy KE + PE is conserved.", "energy", "conservation-of-energy"),
("Doubling the speed of an object multiplies its kinetic energy by:", ["2", "4", "8", "√2"], 1, "KE = ½mv². If v doubles, KE = ½m(2v)² = 4(½mv²), so KE quadruples.", "energy", "work-and-kinetic-energy"),
("A roller coaster car starts from rest at the top of a 20 m hill. Ignoring friction, its speed at the bottom is approximately:", ["10 m/s", "14 m/s", "20 m/s", "40 m/s"], 2, "v = √(2gh) = √(2 × 10 × 20) = √400 = 20 m/s (using g ≈ 10 m/s²).", "energy", "conservation-of-energy"),
("A 10 kg box is lifted 3 m vertically. The work done against gravity is:", ["30 J", "98 J", "294 J", "300 J"], 2, "W = mgh = 10(9.8)(3) = 294 J.", "energy", "work-and-kinetic-energy"),
("Friction does negative work on a sliding object because:", ["It always points upward", "The friction force is opposite to the displacement", "It reduces mass", "Friction has no direction"], 1, "W = Fd cos 180° = −Fd. The force of friction opposes the direction of motion.", "energy", "work-and-kinetic-energy"),
("A pendulum swings from its highest point to its lowest. The primary energy transformation is:", ["KE → PE", "PE → KE", "KE → thermal energy", "PE → thermal energy"], 1, "As the pendulum descends, gravitational PE converts to kinetic energy.", "energy", "conservation-of-energy"),
("An object slides down a rough incline. Compared to a frictionless incline of the same height, it reaches the bottom with:", ["The same speed", "Greater speed", "Less speed", "The same kinetic energy"], 2, "Friction converts some PE to thermal energy, so less KE (and lower speed) at the bottom.", "energy", "conservation-of-energy"),
("The SI unit of energy is:", ["Newton", "Watt", "Joule", "Pascal"], 2, "Energy is measured in joules (J). 1 J = 1 N·m = 1 kg·m²/s².", "energy", "work-and-kinetic-energy"),
("A spring with k = 200 N/m is stretched 0.1 m. The elastic PE stored is:", ["1 J", "2 J", "10 J", "20 J"], 0, "PE = ½kx² = ½(200)(0.1)² = ½(200)(0.01) = 1 J.", "energy", "conservation-of-energy"),
("Two identical cars travel at 20 m/s and 40 m/s. The ratio of their kinetic energies is:", ["1:2", "1:4", "1:8", "2:1"], 1, "KE ∝ v². (20)²:(40)² = 400:1600 = 1:4.", "energy", "work-and-kinetic-energy"),
("When a ball bounces and reaches a lower height each time, the 'lost' energy primarily becomes:", ["Nuclear energy", "Gravitational PE", "Thermal energy and sound", "The energy is destroyed"], 2, "Energy is conserved but converted to thermal energy (heat in the ball and floor) and sound waves.", "energy", "conservation-of-energy"),
("A 1500 W motor lifts a 50 kg load. The speed at which it lifts the load is approximately:", ["0.33 m/s", "3.06 m/s", "15 m/s", "30 m/s"], 1, "P = Fv → 1500 = (50 × 9.8)v → v = 1500/490 ≈ 3.06 m/s.", "energy", "work-and-kinetic-energy"),
("A force of 50 N pushes an object 10 m at 60° to the direction of motion. The work done is:", ["500 J", "250 J", "433 J", "0 J"], 1, "W = Fd cos θ = 50(10) cos 60° = 500(0.5) = 250 J.", "energy", "work-and-kinetic-energy"),
("Total mechanical energy is conserved only when:", ["Speed is constant", "No non-conservative forces do work", "The object moves in a circle", "Mass is constant"], 1, "Non-conservative forces (like friction) convert mechanical energy to other forms. Without them, KE + PE = constant.", "energy", "conservation-of-energy"),
("An engine does 6000 J of work in 3 seconds. Its power output is:", ["2000 W", "18000 W", "6000 W", "3000 W"], 0, "P = W/t = 6000/3 = 2000 W.", "energy", "work-and-kinetic-energy"),

# ════════ MOMENTUM ════════
("Impulse is equal to:", ["Force × time = change in momentum", "Force × distance", "Mass × acceleration", "Energy / time"], 0, "Impulse J = FΔt = Δp (change in momentum). This is the impulse-momentum theorem.", "momentum", "momentum-and-impulse"),
("In a perfectly inelastic collision, which is conserved?", ["Kinetic energy only", "Momentum only", "Both kinetic energy and momentum", "Neither"], 1, "In perfectly inelastic collisions, objects stick together. Momentum is conserved but kinetic energy is not.", "momentum", "collisions"),
("A 2 kg ball moving at 3 m/s collides head-on with a 1 kg ball at rest and they stick together. Their final speed is:", ["1 m/s", "2 m/s", "3 m/s", "6 m/s"], 1, "Conservation of momentum: 2(3) + 1(0) = (2+1)v → v = 6/3 = 2 m/s.", "momentum", "collisions"),
("A firecracker at rest explodes into two pieces. Their total momentum after the explosion is:", ["Greater than zero", "Zero", "Dependent on the masses", "Equal to the kinetic energy"], 1, "Initial momentum was zero. By conservation of momentum, total momentum remains zero after the explosion.", "momentum", "momentum-and-impulse"),
("In an elastic collision between two identical masses where one is initially at rest, the first mass:", ["Bounces backward", "Stops completely", "Continues at half its speed", "Speeds up"], 1, "In a 1D elastic collision between equal masses, the moving mass stops and the stationary mass takes on its full velocity.", "momentum", "collisions"),
("A longer collision time (like an airbag) reduces:", ["Impulse", "Change in momentum", "The average force experienced", "Total energy"], 2, "J = FΔt = Δp. If Δp is fixed but Δt increases, the average force F decreases — that is the purpose of airbags.", "momentum", "momentum-and-impulse"),
("The center of mass of a system with no external forces:", ["Accelerates toward the heavier object", "Moves at constant velocity", "Is always at rest", "Oscillates"], 1, "Without external forces, the center of mass maintains constant velocity (Newton's first law for systems).", "momentum", "momentum-and-impulse"),
("In which type of collision is kinetic energy conserved?", ["Perfectly inelastic", "Elastic", "Explosive", "All collisions"], 1, "By definition, elastic collisions conserve both momentum and kinetic energy.", "momentum", "collisions"),
("The momentum of a 4 kg object moving at 5 m/s is:", ["9 kg·m/s", "20 kg·m/s", "1.25 kg·m/s", "0.8 kg·m/s"], 1, "p = mv = 4(5) = 20 kg·m/s.", "momentum", "momentum-and-impulse"),
("A 0.5 kg ball moving at 6 m/s is stopped in 0.01 s. The average force on it is:", ["30 N", "300 N", "3 N", "3000 N"], 1, "F = Δp/Δt = (0.5 × 6)/0.01 = 3/0.01 = 300 N.", "momentum", "momentum-and-impulse"),
("Two objects with equal and opposite momenta collide and stick together. Their final velocity is:", ["Equal to the average speed", "Zero", "Equal to the faster object's velocity", "Indeterminate"], 1, "p_total = +p + (−p) = 0. Since (m₁ + m₂)v_f = 0, v_f = 0.", "momentum", "collisions"),
("In an explosion (internal forces only), the total momentum of the system:", ["Increases", "Decreases", "Remains constant", "Becomes zero"], 2, "Internal forces cannot change the total momentum of a system. Only external forces can.", "momentum", "momentum-and-impulse"),
("A 1000 kg car at 20 m/s hits a 2000 kg truck at rest and they lock bumpers. Their final speed is approximately:", ["20 m/s", "10 m/s", "6.67 m/s", "13.3 m/s"], 2, "1000(20) + 2000(0) = 3000v → v = 20000/3000 ≈ 6.67 m/s.", "momentum", "collisions"),
("The area under a force-time graph equals:", ["Work", "Power", "Impulse", "Momentum"], 2, "Impulse J = ∫F dt, which is the area under the F-t graph.", "momentum", "momentum-and-impulse"),
("In a 2D collision, momentum is conserved:", ["Only in the x-direction", "Only in the y-direction", "Independently in both x and y directions", "Only along the line of impact"], 2, "Momentum is a vector; conservation applies independently to each component.", "momentum", "collisions"),
("A golf club exerts a force on a ball. During contact, the force on the club from the ball is:", ["Less than the force on the ball", "Equal in magnitude and opposite in direction", "Greater than the force on the ball", "Unrelated to the force on the ball"], 1, "Newton's third law: action-reaction forces are always equal in magnitude and opposite in direction.", "momentum", "momentum-and-impulse"),
("After a perfectly inelastic collision, the kinetic energy of the system:", ["Increases", "Decreases", "Stays the same", "Doubles"], 1, "In inelastic collisions, some KE is converted to thermal energy, sound, and deformation.", "momentum", "collisions"),
("A rocket propels itself forward by:", ["Pushing against the atmosphere", "Expelling exhaust gas backward (conservation of momentum)", "Using gravity assists", "Magnetic repulsion"], 1, "Rockets work by conservation of momentum: expelling mass backward gives the rocket forward momentum.", "momentum", "momentum-and-impulse"),
("Two identical balls undergo a head-on elastic collision with equal and opposite velocities. After the collision, each ball:", ["Stops", "Reverses direction with the same speed", "Continues in the same direction", "Moves perpendicular to the original direction"], 1, "In an elastic head-on collision of equal masses with equal speeds, each ball reverses direction.", "momentum", "collisions"),
("The unit of impulse is equivalent to:", ["kg·m/s² (same as force)", "N·s (same as kg·m/s)", "J (same as energy)", "W (same as power)"], 1, "Impulse = FΔt has units of N·s, which equals kg·m/s (units of momentum).", "momentum", "momentum-and-impulse"),

# ════════ SIMPLE HARMONIC MOTION ════════
("In simple harmonic motion, the restoring force is proportional to:", ["Velocity", "Displacement from equilibrium", "Acceleration only", "Mass"], 1, "SHM requires F = −kx: the restoring force is proportional to displacement and directed toward equilibrium.", "simple-harmonic-motion", "introduction-to-shm"),
("The period of a simple pendulum depends on:", ["Mass and length", "Length and gravitational acceleration only", "Mass and amplitude", "Amplitude only"], 1, "T = 2π√(L/g). Period depends only on length and g, not on mass or (small) amplitude.", "simple-harmonic-motion", "introduction-to-shm"),
("A standing wave on a string fixed at both ends has nodes at the endpoints. The fundamental frequency has:", ["No nodes", "One antinode in the middle", "Two antinodes", "Three antinodes"], 1, "The fundamental mode (first harmonic) has nodes at both ends and one antinode at the center (half wavelength).", "simple-harmonic-motion", "energy-in-shm"),
("The period of a mass-spring system is:", ["T = 2π√(m/k)", "T = 2π√(k/m)", "T = 2π√(L/g)", "T = 1/f²"], 0, "For a mass on a spring: T = 2π√(m/k). Period increases with mass and decreases with stiffer springs.", "simple-harmonic-motion", "introduction-to-shm"),
("The speed of a wave on a string increases when:", ["Tension increases", "Mass per unit length increases", "Frequency decreases", "Amplitude increases"], 0, "v = √(T/μ). Greater tension increases wave speed; greater linear density decreases it.", "simple-harmonic-motion", "energy-in-shm"),
("At the equilibrium position of SHM, the object has:", ["Maximum displacement and zero velocity", "Maximum velocity and zero displacement", "Maximum acceleration", "Zero kinetic energy"], 1, "At equilibrium, displacement is zero (max velocity) and acceleration is zero (no restoring force).", "simple-harmonic-motion", "introduction-to-shm"),
("Resonance occurs when:", ["Friction is very high", "The driving frequency matches the natural frequency of the system", "The amplitude is zero", "The system is critically damped"], 1, "Resonance produces maximum amplitude when the external driving frequency equals the system's natural frequency.", "simple-harmonic-motion", "energy-in-shm"),
("Doubling the mass on a spring changes the period by a factor of:", ["2", "√2", "½", "4"], 1, "T = 2π√(m/k). Doubling m → T multiplied by √2.", "simple-harmonic-motion", "introduction-to-shm"),
("At maximum displacement in SHM, the magnitude of the acceleration is:", ["Zero", "Maximum", "Equal to the velocity", "Minimum but nonzero"], 1, "a = −ω²x. At maximum x (amplitude), |a| = ω²A is maximum.", "simple-harmonic-motion", "introduction-to-shm"),
("The total energy in SHM equals:", ["½kA² (where A is amplitude)", "mgh", "½mv_max²", "Both A and C are correct"], 3, "Total energy E = ½kA² = ½mv_max². It is constant and equals the maximum PE or maximum KE.", "simple-harmonic-motion", "energy-in-shm"),
("The frequency of a pendulum on the Moon (g = 1.6 m/s²) compared to Earth is:", ["Higher", "Lower", "The same", "Cannot be determined"], 1, "f = (1/2π)√(g/L). Smaller g on the Moon means lower frequency (longer period).", "simple-harmonic-motion", "introduction-to-shm"),
("Energy in SHM continuously converts between:", ["KE and gravitational PE only", "KE and elastic PE", "Thermal and KE", "PE and momentum"], 1, "In a mass-spring system, energy oscillates between kinetic energy and elastic potential energy.", "simple-harmonic-motion", "energy-in-shm"),
("If the amplitude of SHM is doubled, the maximum speed:", ["Doubles", "Quadruples", "Halves", "Stays the same"], 0, "v_max = Aω. Doubling A doubles v_max.", "simple-harmonic-motion", "introduction-to-shm"),
("A wave with frequency 5 Hz and wavelength 2 m has a speed of:", ["2.5 m/s", "10 m/s", "0.4 m/s", "7 m/s"], 1, "v = fλ = 5(2) = 10 m/s.", "simple-harmonic-motion", "energy-in-shm"),
("Two oscillators have the same amplitude but different frequencies (f₁ = 2f₂). The oscillator with higher frequency has:", ["Greater maximum speed", "Lesser maximum speed", "The same maximum speed", "Greater period"], 0, "v_max = A(2πf). Higher frequency → greater maximum speed (for the same amplitude).", "simple-harmonic-motion", "introduction-to-shm"),
("Superposition of waves means:", ["Waves cancel completely", "Waves add algebraically at each point in space", "Waves always form standing waves", "Wave energy is destroyed"], 1, "The principle of superposition: when waves overlap, the net displacement is the algebraic sum at each point.", "simple-harmonic-motion", "energy-in-shm"),
("The phase difference between displacement and acceleration in SHM is:", ["0° (in phase)", "90°", "180° (out of phase)", "270°"], 2, "a = −ω²x. Displacement and acceleration are 180° out of phase (when x is max positive, a is max negative).", "simple-harmonic-motion", "introduction-to-shm"),
("In SHM, the motion of a mass on a spring is periodic because:", ["It moves in a circle", "The restoring force is constant", "The restoring force is proportional to displacement from equilibrium", "Gravity pulls it back"], 2, "SHM arises when F = −kx: the proportional restoring force creates a sinusoidal oscillation.", "simple-harmonic-motion", "introduction-to-shm"),

# ════════ TORQUE & ROTATIONAL MOTION ════════
("Torque is calculated as:", ["Force × distance (parallel)", "Force × lever arm (perpendicular distance)", "Mass × angular acceleration", "Both B and C are correct"], 3, "τ = rF sin θ = r⊥F (lever arm method) and τ = Iα (Newton's second law for rotation). Both are valid.", "torque-rotation", "torque-and-equilibrium"),
("For an object in static equilibrium:", ["Net force is zero only", "Net torque is zero only", "Both net force and net torque are zero", "Velocity must be zero"], 2, "Static equilibrium requires both ΣF = 0 (translational) and Στ = 0 (rotational).", "torque-rotation", "torque-and-equilibrium"),
("The moment of inertia of an object depends on:", ["Mass only", "Shape only", "Mass distribution relative to the axis of rotation", "Angular velocity"], 2, "I = Σmr². Moment of inertia depends on both the mass and how it is distributed relative to the rotation axis.", "torque-rotation", "angular-momentum"),
("Angular momentum is conserved when:", ["No net external force acts", "No net external torque acts", "The object moves in a straight line", "Speed is constant"], 1, "Angular momentum L = Iω is conserved when the net external torque on the system is zero.", "torque-rotation", "angular-momentum"),
("A spinning figure skater pulls in their arms. Their angular velocity:", ["Decreases", "Increases", "Stays the same", "Goes to zero"], 1, "Pulling arms in reduces I. Since L = Iω is conserved, ω must increase.", "torque-rotation", "angular-momentum"),
("A wrench applies the most torque when the force is applied:", ["Parallel to the wrench", "At the pivot point", "Perpendicular to the wrench at the end", "At any angle near the pivot"], 2, "τ = rF sin θ is maximized when θ = 90° (perpendicular) and r is maximum (far from pivot).", "torque-rotation", "torque-and-equilibrium"),
("The rotational analog of F = ma is:", ["L = Iω", "τ = Iα", "KE = ½Iω²", "W = τθ"], 1, "τ = Iα is Newton's second law for rotation: net torque equals moment of inertia times angular acceleration.", "torque-rotation", "angular-momentum"),
("A seesaw is balanced when a 40 kg child sits 2 m from the pivot. Where must a 20 kg child sit?", ["1 m from the pivot", "2 m from the pivot", "4 m from the pivot", "3 m from the pivot"], 2, "Balance: 40(2) = 20(x) → x = 4 m. Torques must be equal and opposite.", "torque-rotation", "torque-and-equilibrium"),
("The angular velocity of any point on a rigid rotating disc is:", ["Greater at the edge", "Greater at the center", "The same everywhere on the disc", "Zero at the center"], 2, "All points on a rigid body share the same angular velocity ω, though their linear speeds differ.", "torque-rotation", "angular-momentum"),
("Rolling without slipping requires:", ["Zero friction", "Static friction at the contact point", "Kinetic friction at the contact point", "Air resistance"], 1, "Rolling without slipping involves static friction (no relative sliding) at the contact point with the surface.", "torque-rotation", "torque-and-equilibrium"),
("A solid sphere and a hollow sphere of the same mass and radius roll down an incline. Which reaches the bottom first?", ["The solid sphere", "The hollow sphere", "They arrive at the same time", "Cannot be determined without knowing the masses"], 0, "The solid sphere has a smaller moment of inertia ratio (I = 2/5 mr² vs 2/3 mr²), so more energy goes to translation.", "torque-rotation", "angular-momentum"),
("The SI unit of torque is:", ["Joule", "Newton-meter", "Watt", "Pascal"], 1, "Torque is measured in newton-meters (N·m). Though dimensionally the same as joules, the name N·m is used for torque.", "torque-rotation", "torque-and-equilibrium"),
("A door is easiest to open when you push:", ["Near the hinge", "At the center of the door", "At the edge farthest from the hinge", "Anywhere — location does not matter"], 2, "τ = rF. Pushing farthest from the hinge maximizes the lever arm r, producing the most torque for a given force.", "torque-rotation", "torque-and-equilibrium"),
("The rotational kinetic energy of a spinning object is:", ["½mv²", "Iω", "½Iω²", "Iα"], 2, "Rotational KE = ½Iω², analogous to translational KE = ½mv².", "torque-rotation", "angular-momentum"),
("When a spinning top slows down due to friction, angular momentum is:", ["Created from nothing", "Transferred to the Earth via frictional torque", "Destroyed", "Converted to linear momentum"], 1, "The frictional torque transfers angular momentum from the top to the Earth.", "torque-rotation", "angular-momentum"),
("A uniform rod pivoted at one end has a moment of inertia of mL²/3. Pivoted at the center, it is mL²/12. The ratio (end to center) is:", ["1:1", "2:1", "4:1", "3:1"], 2, "(mL²/3)/(mL²/12) = 12/3 = 4. Pivoting at the end gives 4× the moment of inertia.", "torque-rotation", "angular-momentum"),
("For a ladder leaning against a frictionless wall, the friction at the floor must be directed:", ["Upward", "Toward the wall", "Away from the wall", "There is no friction needed"], 1, "The wall pushes the ladder outward horizontally. Floor friction must point toward the wall to balance it.", "torque-rotation", "torque-and-equilibrium"),
("If the net torque on a system is zero, the angular velocity:", ["Must be zero", "Must be constant (could be zero or nonzero)", "Must be increasing", "Must be decreasing"], 1, "Στ = 0 → α = 0, so ω does not change. It remains at whatever value it has (including possibly zero).", "torque-rotation", "angular-momentum"),
]

# ── Build TypeScript file ──────────────────────────────────────────
def escape_ts(s):
    return s.replace("\\", "\\\\").replace("'", "\\'")

lines = []
lines.append('/**')
lines.append(' * AP Physics 1 Diagnostic Test Generator')
lines.append(' *')
lines.append(' * 10 deterministic forms, ~33 questions each spanning all 7 AP')
lines.append(' * Physics 1 units. Each form uses a seeded shuffle to select a')
lines.append(' * unique subset of questions from the pool. Weak areas map to')
lines.append(' * topic slugs for interactive review.')
lines.append(' */')
lines.append('')
lines.append('export interface APPhysics1DiagnosticQuestion {')
lines.append('  question: string')
lines.append('  options: string[]')
lines.append('  correctAnswer: number')
lines.append('  explanation: string')
lines.append('  domain: string')
lines.append('  topicSlug: string')
lines.append('}')
lines.append('')
lines.append('export interface APPhysics1Domain {')
lines.append('  id: string')
lines.append('  name: string')
lines.append('  topicSlugs: string[]')
lines.append('  questionTarget: number')
lines.append('}')
lines.append('')
lines.append('export interface APPhysics1DiagnosticTestData {')
lines.append('  form: number')
lines.append('  questions: APPhysics1DiagnosticQuestion[]')
lines.append('  domains: APPhysics1Domain[]')
lines.append('  totalQuestions: number')
lines.append('  timeLimitMinutes: number')
lines.append('}')
lines.append('')
lines.append('export interface APPhysics1DomainResult {')
lines.append('  domainId: string')
lines.append('  domainName: string')
lines.append('  correct: number')
lines.append('  total: number')
lines.append('  percentage: number')
lines.append("  level: 'strong' | 'moderate' | 'weak'")
lines.append('}')
lines.append('')
lines.append('export interface APPhysics1RecommendedTopic {')
lines.append('  slug: string')
lines.append('  name: string')
lines.append('  domainId: string')
lines.append("  priority: 'high' | 'medium'")
lines.append('}')
lines.append('')
lines.append('export interface APPhysics1DiagnosticResults {')
lines.append('  form: number')
lines.append('  totalCorrect: number')
lines.append('  totalQuestions: number')
lines.append('  percentage: number')
lines.append('  estimatedAPScore: number')
lines.append('  domains: APPhysics1DomainResult[]')
lines.append('  weakAreas: string[]')
lines.append('  moderateAreas: string[]')
lines.append('  strengths: string[]')
lines.append('  recommendedTopics: APPhysics1RecommendedTopic[]')
lines.append('}')
lines.append('')

# Domains
domains = [
    ("kinematics", "Kinematics", ["one-dimensional-motion", "two-dimensional-motion"], 5),
    ("dynamics", "Dynamics (Newton\\'s Laws)", ["newtons-first-second-laws", "friction"], 5),
    ("circular-motion-gravity", "Circular Motion & Gravitation", ["uniform-circular-motion", "universal-gravitation"], 5),
    ("energy", "Energy", ["work-and-kinetic-energy", "conservation-of-energy"], 5),
    ("momentum", "Momentum", ["momentum-and-impulse", "collisions"], 5),
    ("simple-harmonic-motion", "Simple Harmonic Motion", ["introduction-to-shm", "energy-in-shm"], 4),
    ("torque-rotation", "Torque & Rotational Motion", ["torque-and-equilibrium", "angular-momentum"], 4),
]

lines.append('const AP_PHYSICS1_DOMAINS: APPhysics1Domain[] = [')
for did, dname, slugs, target in domains:
    slug_str = ", ".join(f"'{s}'" for s in slugs)
    lines.append(f"  {{ id: '{did}', name: '{dname}', topicSlugs: [{slug_str}], questionTarget: {target} }},")
lines.append(']')
lines.append('')
lines.append('export { AP_PHYSICS1_DOMAINS }')
lines.append('')

# Pool question type + pool
lines.append('interface PoolQuestion {')
lines.append('  question: string')
lines.append('  options: string[]')
lines.append('  correctAnswer: number')
lines.append('  explanation: string')
lines.append('  domain: string')
lines.append('  topicSlug: string')
lines.append('}')
lines.append('')
lines.append('const questionPool: PoolQuestion[] = [')

current_domain = None
for q_text, opts, correct, expl, domain, slug in QUESTIONS:
    if domain != current_domain:
        label = domain.replace('-', ' ').title()
        lines.append(f'  // ---- {label} ----')
        current_domain = domain
    opts_str = ", ".join(f"'{escape_ts(o)}'" for o in opts)
    lines.append(f"  {{ question: '{escape_ts(q_text)}', options: [{opts_str}], correctAnswer: {correct}, explanation: '{escape_ts(expl)}', domain: '{domain}', topicSlug: '{slug}' }},")

lines.append(']')
lines.append('')

# Seeded shuffle
lines.append('/* ------------------------------------------------------------------ */')
lines.append('/*  Seeded deterministic shuffle (Linear Congruential Generator)       */')
lines.append('/* ------------------------------------------------------------------ */')
lines.append('')
lines.append('function seededShuffle<T>(arr: T[], seed: number): T[] {')
lines.append('  const result = [...arr]')
lines.append('  let s = seed | 0')
lines.append('  const next = () => {')
lines.append('    s = (Math.imul(s, 1664525) + 1013904223) | 0')
lines.append('    return ((s >>> 0) / 0x100000000)')
lines.append('  }')
lines.append('  for (let i = result.length - 1; i > 0; i--) {')
lines.append('    const j = Math.floor(next() * (i + 1))')
lines.append('    ;[result[i], result[j]] = [result[j], result[i]]')
lines.append('  }')
lines.append('  return result')
lines.append('}')
lines.append('')

# Generator
lines.append('/* ------------------------------------------------------------------ */')
lines.append('/*  Generator                                                          */')
lines.append('/* ------------------------------------------------------------------ */')
lines.append('')
lines.append('export function generateAPPhysics1DiagnosticTest(form: number): APPhysics1DiagnosticTestData {')
lines.append('  const questions: APPhysics1DiagnosticQuestion[] = []')
lines.append('')
lines.append('  for (const domain of AP_PHYSICS1_DOMAINS) {')
lines.append('    const pool = questionPool.filter(q => q.domain === domain.id)')
lines.append('    // Seed uniquely per form + domain so each form gets a different selection')
lines.append('    const shuffled = seededShuffle(pool, form * 7919 + domain.id.charCodeAt(0) * 31)')
lines.append('    const selected = shuffled.slice(0, domain.questionTarget)')
lines.append('    for (const q of selected) {')
lines.append('      questions.push({ question: q.question, options: q.options, correctAnswer: q.correctAnswer, explanation: q.explanation, domain: domain.id, topicSlug: q.topicSlug })')
lines.append('    }')
lines.append('  }')
lines.append('')
lines.append('  // Shuffle question order (seeded so it is stable for the same form)')
lines.append('  return { form, questions: seededShuffle(questions, form * 104729), domains: AP_PHYSICS1_DOMAINS, totalQuestions: questions.length, timeLimitMinutes: 45 }')
lines.append('}')
lines.append('')

# Scoring
lines.append('/* ------------------------------------------------------------------ */')
lines.append('/*  Scoring                                                            */')
lines.append('/* ------------------------------------------------------------------ */')
lines.append('')
lines.append('export function scoreAPPhysics1Diagnostic(')
lines.append('  form: number,')
lines.append('  questions: APPhysics1DiagnosticQuestion[],')
lines.append('  answers: Record<number, number>,')
lines.append('): APPhysics1DiagnosticResults {')
lines.append("  const domainResults: APPhysics1DomainResult[] = AP_PHYSICS1_DOMAINS.map(domain => {")
lines.append("    const domainQs = questions.map((q, i) => ({ q, i })).filter(({ q }) => q.domain === domain.id)")
lines.append("    const correct = domainQs.filter(({ i }) => answers[i] !== undefined && answers[i] === questions[i].correctAnswer).length")
lines.append("    const total = domainQs.length")
lines.append("    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0")
lines.append("    const level: 'strong' | 'moderate' | 'weak' = percentage >= 75 ? 'strong' : percentage >= 50 ? 'moderate' : 'weak'")
lines.append("    return { domainId: domain.id, domainName: domain.name, correct, total, percentage, level }")
lines.append('  })')
lines.append('')
lines.append("  const totalCorrect = domainResults.reduce((s, d) => s + d.correct, 0)")
lines.append("  const totalQuestions = domainResults.reduce((s, d) => s + d.total, 0)")
lines.append("  const percentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0")
lines.append('')
lines.append('  let estimatedAPScore: number')
lines.append('  if (percentage >= 80) estimatedAPScore = 5')
lines.append('  else if (percentage >= 65) estimatedAPScore = 4')
lines.append('  else if (percentage >= 50) estimatedAPScore = 3')
lines.append('  else if (percentage >= 35) estimatedAPScore = 2')
lines.append('  else estimatedAPScore = 1')
lines.append('')
lines.append("  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)")
lines.append("  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)")
lines.append("  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)")
lines.append('')
lines.append('  const recommendedTopics: APPhysics1RecommendedTopic[] = []')
lines.append("  for (const wd of domainResults.filter(d => d.level === 'weak')) {")
lines.append("    const domainDef = AP_PHYSICS1_DOMAINS.find(d => d.id === wd.domainId)")
lines.append('    if (!domainDef) continue')
lines.append('    const missedSlugs = new Set<string>()')
lines.append("    questions.forEach((q, i) => { if (q.domain === wd.domainId && (answers[i] === undefined || answers[i] !== q.correctAnswer)) missedSlugs.add(q.topicSlug) })")
lines.append("    const slugs = missedSlugs.size > 0 ? [...missedSlugs].slice(0, 2) : domainDef.topicSlugs.slice(0, 2)")
lines.append("    for (const slug of slugs) { if (recommendedTopics.length < 5) recommendedTopics.push({ slug, name: slugToReadableName(slug), domainId: wd.domainId, priority: 'high' }) }")
lines.append('  }')
lines.append("  for (const md of domainResults.filter(d => d.level === 'moderate')) {")
lines.append('    if (recommendedTopics.length >= 5) break')
lines.append("    const domainDef = AP_PHYSICS1_DOMAINS.find(d => d.id === md.domainId)")
lines.append('    if (!domainDef) continue')
lines.append('    const missedSlugs = new Set<string>()')
lines.append("    questions.forEach((q, i) => { if (q.domain === md.domainId && (answers[i] === undefined || answers[i] !== q.correctAnswer)) missedSlugs.add(q.topicSlug) })")
lines.append("    const slug = missedSlugs.size > 0 ? [...missedSlugs].values().next().value : domainDef.topicSlugs[0]")
lines.append("    if (slug) recommendedTopics.push({ slug, name: slugToReadableName(slug), domainId: md.domainId, priority: 'medium' })")
lines.append('  }')
lines.append('')
lines.append("  return { form, totalCorrect, totalQuestions, percentage, estimatedAPScore, domains: domainResults, weakAreas, moderateAreas, strengths, recommendedTopics: recommendedTopics.slice(0, 5) }")
lines.append('}')
lines.append('')

# pickNextForm
lines.append('export function pickNextForm(previousForms: number[]): number {')
lines.append('  if (previousForms.length === 0) return 1')
lines.append('  const last = previousForms[previousForms.length - 1]')
lines.append('  return last >= 10 ? 1 : last + 1')
lines.append('}')
lines.append('')

# SLUG_LABELS
slug_labels = [
    ("one-dimensional-motion", "1D Motion & Free Fall"),
    ("two-dimensional-motion", "2D Motion & Projectiles"),
    ("newtons-first-second-laws", "Newton\\'s First and Second Laws"),
    ("newtons-third-law", "Newton\\'s Third Law and Applications"),
    ("friction", "Friction"),
    ("uniform-circular-motion", "Uniform Circular Motion"),
    ("centripetal-force", "Centripetal Force"),
    ("universal-gravitation", "Universal Gravitation"),
    ("work-and-kinetic-energy", "Work and Kinetic Energy"),
    ("conservation-of-energy", "Conservation of Energy"),
    ("momentum-and-impulse", "Momentum and Impulse"),
    ("collisions", "Collisions"),
    ("introduction-to-shm", "Introduction to Simple Harmonic Motion"),
    ("energy-in-shm", "Energy in Simple Harmonic Motion"),
    ("torque-and-equilibrium", "Torque and Rotational Equilibrium"),
    ("angular-momentum", "Rotational Dynamics and Angular Momentum"),
]

lines.append('const SLUG_LABELS: Record<string, string> = {')
for slug, label in slug_labels:
    lines.append(f"  '{slug}': '{label}',")
lines.append('}')
lines.append('')
lines.append('function slugToReadableName(slug: string): string {')
lines.append("  return SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\\b\\w/g, c => c.toUpperCase())")
lines.append('}')
lines.append('')

# Write file
out_path = "src/data/ap-physics-1-diagnostic.ts"
with open(out_path, "w") as f:
    f.write("\n".join(lines))

from collections import Counter
dcounts = Counter(q[4] for q in QUESTIONS)
print("Questions per domain:", dict(dcounts))
print(f"Total questions: {len(QUESTIONS)}")
print(f"Wrote {len(lines)} lines to {out_path}")
