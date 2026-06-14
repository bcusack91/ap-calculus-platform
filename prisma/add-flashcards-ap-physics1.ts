import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Rich, exam-aligned AP Physics 1 flashcards: definitions, must-know formulas
 * (with variable meanings + when to use), conceptual traps, units, and worked
 * mini-examples.
 *
 * Idempotent + NON-destructive: each card is keyed by its `front`. We delete only
 * the fronts this script owns (per topic) before re-inserting, so re-running this
 * script replaces only its own cards and never clobbers cards created by sibling
 * scripts (e.g. add-flashcards-ap-physics1-formulas.ts) on the same topics.
 *
 * Slugs are interactive-lesson registry keys verified to exist (see
 * src/data/interactive-lessons/registry.ts).
 */

type Card = { front: string; back: string; hint?: string; lessonPart?: number };

const deck: Record<string, Card[]> = {
  // ---------------------------------------------------------------------------
  'one-dimensional-motion': [
    { front: 'Define displacement vs. distance.', back: '**Displacement** ($\\Delta x$) is a vector: the straight-line change in position, with direction. **Distance** is a scalar: the total path length traveled.\n\nA runner doing one full lap of a 400 m track has distance = 400 m but displacement = 0 m.', hint: 'One has direction (vector), one does not (scalar).' },
    { front: 'Average velocity formula (and what each symbol means)?', back: '$v_{avg} = \\dfrac{\\Delta x}{\\Delta t}$\n\n- $\\Delta x$ = displacement (m), a vector\n- $\\Delta t$ = elapsed time (s)\n\nUse when you only know start/end positions. It is NOT the average of $v_i$ and $v_f$ unless acceleration is constant.', hint: 'Displacement over time, keeps the sign/direction.' },
    { front: 'Average speed vs. average velocity?', back: '**Average speed** = total distance / total time (scalar, always $\\geq 0$).\n**Average velocity** = displacement / time (vector, can be negative or zero).\n\nTrap: they are equal only for motion in one direction with no reversal.', hint: 'Speed uses path length; velocity uses displacement.' },
    { front: 'The four kinematic equations for constant acceleration?', back: 'For constant $a$:\n1. $v = v_0 + at$\n2. $x = x_0 + v_0 t + \\frac{1}{2}at^2$\n3. $v^2 = v_0^2 + 2a\\,\\Delta x$\n4. $\\Delta x = \\frac{1}{2}(v_0 + v)t$\n\nSymbols: $v_0$ initial velocity, $v$ final velocity, $a$ acceleration, $t$ time, $\\Delta x$ displacement. Each omits one variable — pick the one missing your unknown.', hint: 'Only valid when acceleration is constant.' },
    { front: 'When is it WRONG to use the kinematic equations?', back: 'They require **constant (uniform) acceleration**. Do not use them if $a$ changes with time (e.g. a non-constant force, air resistance, or a curved $v$–$t$ graph). For varying $a$, use the area/slope of motion graphs or calculus.', hint: 'Constant a is the hidden assumption.' },
    { front: 'Sign convention for 1D motion?', back: 'Pick a positive direction first, then stay consistent. A negative velocity means moving in the negative direction; negative acceleration means the velocity is becoming more negative (NOT necessarily "slowing down").', hint: 'Negative a is not the same as decelerating.' },
    { front: 'Speeding up vs. slowing down — how to tell from signs?', back: 'Compare the signs of **velocity** and **acceleration**:\n- Same sign ($v$ and $a$) → speeding up\n- Opposite signs → slowing down\n\nA ball thrown up has $v>0$, $a<0$ on the way up (slowing) and $v<0$, $a<0$ on the way down (speeding up).', hint: 'It is the relationship between v and a, not the sign of a alone.' },
    { front: 'What is the acceleration due to gravity near Earth\'s surface?', back: '$g = 9.8\\ \\text{m/s}^2$ (often $10\\ \\text{m/s}^2$ for estimates), directed downward.\n\nIn free fall (no air resistance), every object has $a = g$ regardless of mass. A feather and a hammer fall identically in a vacuum.', hint: 'Same for all masses in free fall.' },
    { front: 'A car starts from rest and accelerates at $3\\ \\text{m/s}^2$ for 4 s. How far does it travel?', back: 'Use $x = v_0 t + \\frac{1}{2}at^2$ with $v_0 = 0$.\n\n$x = 0 + \\frac{1}{2}(3)(4)^2 = \\frac{1}{2}(3)(16) = 24\\ \\text{m}$.', hint: 'Pick the equation without the unknown final velocity.' },
    { front: 'A ball is dropped from rest. How fast is it moving after 2 s (ignore air resistance)?', back: 'Use $v = v_0 + at$ with $v_0 = 0$ and $a = g = 9.8\\ \\text{m/s}^2$.\n\n$v = 0 + (9.8)(2) = 19.6\\ \\text{m/s}$ downward.', hint: 'Free fall: a = g.' },
    { front: 'How do you find displacement when acceleration is NOT constant?', back: 'Displacement = **area under the velocity–time graph** (the integral of $v$ with respect to $t$). This works for any motion, constant acceleration or not.', hint: 'Area under v–t, always valid.' },
    { front: 'Units check: what are the SI units of velocity and acceleration?', back: 'Velocity: meters per second (m/s).\nAcceleration: meters per second squared ($\\text{m/s}^2$).\n\nA quick dimensional check catches most errors — e.g. $v^2 = v_0^2 + 2a\\Delta x$ has units $(\\text{m/s})^2 = \\text{m}^2/\\text{s}^2$ on both sides.', hint: 'Acceleration is velocity per time.' },
  ],

  // ---------------------------------------------------------------------------
  'newtons-first-second-laws': [
    { front: 'State Newton\'s First Law (law of inertia).', back: 'An object at rest stays at rest, and an object in motion stays in motion at constant velocity, **unless acted on by a net external force**.\n\nInertia is the tendency to resist changes in motion; mass is the measure of inertia.', hint: 'No net force → no change in velocity.' },
    { front: 'State Newton\'s Second Law (with symbols).', back: '$\\vec{F}_{net} = m\\vec{a}$\n\n- $\\vec{F}_{net}$ = vector sum of ALL forces (N)\n- $m$ = mass (kg)\n- $\\vec{a}$ = acceleration (m/s²), in the same direction as $\\vec{F}_{net}$\n\nApply it separately per axis: $\\sum F_x = ma_x$ and $\\sum F_y = ma_y$.', hint: 'Net force, not just one force.' },
    { front: 'What is the difference between mass and weight?', back: '**Mass** ($m$): amount of matter, scalar, in kg, the same everywhere.\n**Weight** ($F_g = mg$): the gravitational force on the mass, a vector in newtons, changes with $g$.\n\nOn the Moon your mass is unchanged but your weight is ~1/6 of Earth\'s.', hint: 'Mass is kg; weight is a force in newtons.' },
    { front: 'What is a free-body diagram (FBD) and why use it?', back: 'A diagram showing a single object as a dot with all **external forces** drawn as arrows from it (gravity, normal, tension, friction, applied). It is the essential first step: it lets you sum forces per axis correctly.', hint: 'One object, only the forces ON it.' },
    { front: 'What is the normal force, and is it always equal to $mg$?', back: 'The **normal force** ($F_N$ or $N$) is the support force perpendicular to a surface. It is NOT always $mg$.\n\nOn a flat surface with no vertical acceleration, $F_N = mg$. On an incline $F_N = mg\\cos\\theta$. In an accelerating elevator it differs from $mg$.', hint: 'Solve for it from the y-equation; do not assume mg.' },
    { front: 'What does "equilibrium" mean in dynamics?', back: 'Net force is zero ($\\sum \\vec{F} = 0$), so acceleration is zero. The object is either at rest (static equilibrium) or moving at constant velocity (dynamic equilibrium).', hint: 'Zero net force, not necessarily zero velocity.' },
    { front: 'Common trap: does constant velocity require a net force?', back: 'No. Constant velocity means $a = 0$, so $\\vec{F}_{net} = 0$. Forces may be present (e.g. drive force balancing friction) but they cancel. A force is needed to *change* velocity, not to maintain it.', hint: 'Motion does not need a force; changing motion does.' },
    { front: 'A 2 kg block is pushed across a frictionless floor with a horizontal force of 10 N. Find its acceleration.', back: 'Frictionless, so net horizontal force = applied force = 10 N.\n\n$a = \\dfrac{F_{net}}{m} = \\dfrac{10\\ \\text{N}}{2\\ \\text{kg}} = 5\\ \\text{m/s}^2$, in the direction of the push.', hint: 'a = F_net / m.' },
    { front: 'A 5 kg box hangs from a rope at rest. What is the rope tension?', back: 'At rest, $a = 0$, so the y-forces balance: $T - mg = 0$.\n\n$T = mg = (5)(9.8) = 49\\ \\text{N}$.', hint: 'Equilibrium: tension balances weight.' },
    { front: 'An elevator accelerates upward at $2\\ \\text{m/s}^2$ with a 60 kg rider. Find the normal force (apparent weight) on the rider.', back: 'Up is positive: $F_N - mg = ma$.\n\n$F_N = m(g + a) = 60(9.8 + 2) = 60(11.8) = 708\\ \\text{N}$.\n\nGreater than $mg = 588$ N, so the rider feels heavier.', hint: 'F_N = m(g + a) when accelerating up.' },
    { front: 'Why is the SI unit of force called the newton, in base units?', back: 'From $F = ma$: $1\\ \\text{N} = 1\\ \\text{kg}\\cdot\\text{m/s}^2$.\n\nThis is why force has those base units and why a kg·m/s² always equals a newton.', hint: 'Derive it straight from F = ma.' },
    { front: 'How does net force relate to the slope of a velocity–time graph?', back: 'Acceleration is the slope of the $v$–$t$ graph, and $F_{net} = ma$. So a steeper $v$–$t$ slope means a larger net force (for fixed mass). Zero slope (flat line) means zero net force.', hint: 'Slope of v–t is a, and F_net = ma.' },
  ],

  // ---------------------------------------------------------------------------
  'work-and-kinetic-energy': [
    { front: 'Definition of work done by a constant force?', back: '$W = Fd\\cos\\theta$\n\n- $F$ = magnitude of the force (N)\n- $d$ = magnitude of the displacement (m)\n- $\\theta$ = angle between the force and the displacement\n\nWork is a scalar measured in joules (J). Use the component of force along the displacement.', hint: 'Only the force component along the motion does work.' },
    { front: 'When does a force do ZERO work?', back: 'When it is perpendicular to the displacement ($\\theta = 90^\\circ$, so $\\cos 90^\\circ = 0$), or when there is no displacement.\n\nExamples: the normal force on a sliding block, and centripetal force on circular motion, both do zero work.', hint: 'Perpendicular force = no work.' },
    { front: 'Can work be negative? What does that mean?', back: 'Yes. When the force opposes the motion ($90^\\circ < \\theta \\le 180^\\circ$), $\\cos\\theta < 0$, so $W < 0$. Negative work removes kinetic energy.\n\nFriction and the braking force typically do negative work.', hint: 'Force opposing motion removes energy.' },
    { front: 'Kinetic energy formula and units?', back: '$KE = \\frac{1}{2}mv^2$\n\n- $m$ = mass (kg)\n- $v$ = speed (m/s)\n\nUnits: joules (J). KE is a scalar and is always $\\geq 0$. Note it depends on $v^2$: doubling speed quadruples KE.', hint: 'Depends on v squared — never negative.' },
    { front: 'State the Work–Energy Theorem.', back: '$W_{net} = \\Delta KE = \\frac{1}{2}mv_f^2 - \\frac{1}{2}mv_i^2$\n\nThe net work done by all forces equals the change in kinetic energy. Use it to connect forces/distance to a speed change without needing time.', hint: 'Net work changes the kinetic energy.' },
    { front: 'Definition of power, and its units?', back: '$P = \\dfrac{W}{t} = \\dfrac{\\Delta E}{t}$, and for constant velocity $P = Fv$.\n\n- $W$ = work (J), $t$ = time (s)\n- Units: watts (W); $1\\ \\text{W} = 1\\ \\text{J/s}$\n\nPower is the rate of doing work / transferring energy.', hint: 'Work per unit time.' },
    { front: 'What is the area under a force–displacement graph?', back: 'It equals the **work** done by that force, even when the force varies (e.g. a spring). For a linear spring force, the area is a triangle, giving $W = \\frac{1}{2}kx^2$.', hint: 'Area under F vs. x = work.' },
    { front: 'A 2 kg cart is pushed 3 m by a constant 4 N force parallel to the motion. How much work is done?', back: '$\\theta = 0^\\circ$ so $\\cos\\theta = 1$.\n\n$W = Fd\\cos\\theta = (4)(3)(1) = 12\\ \\text{J}$.', hint: 'Force parallel to displacement: W = Fd.' },
    { front: 'A 2 kg cart starts at rest and 12 J of net work is done on it. What is its final speed?', back: 'Work–energy theorem: $W_{net} = \\frac{1}{2}mv_f^2 - 0$.\n\n$12 = \\frac{1}{2}(2)v_f^2 \\Rightarrow v_f^2 = 12 \\Rightarrow v_f \\approx 3.46\\ \\text{m/s}$.', hint: 'Set net work equal to final KE.' },
    { front: 'A 50 N force drags a box 4 m at $60^\\circ$ above horizontal. Work done by that force?', back: '$W = Fd\\cos\\theta = (50)(4)\\cos 60^\\circ = (200)(0.5) = 100\\ \\text{J}$.\n\nOnly the horizontal component (along the displacement) contributes.', hint: 'Use the angle between force and displacement.' },
    { front: 'A 0.5 kW motor runs for 10 s. How much energy does it deliver?', back: '$P = \\dfrac{W}{t} \\Rightarrow W = Pt = (500\\ \\text{W})(10\\ \\text{s}) = 5000\\ \\text{J} = 5\\ \\text{kJ}$.', hint: 'Energy = power × time.' },
    { front: 'Trap: a waiter carries a tray horizontally at constant speed. How much work does he do on the tray?', back: 'Zero. The upward support force is perpendicular to the horizontal displacement ($\\theta = 90^\\circ$), so $W = Fd\\cos 90^\\circ = 0$. No work despite the effort felt.', hint: 'Force is vertical, motion is horizontal.' },
  ],

  // ---------------------------------------------------------------------------
  'conservation-of-energy': [
    { front: 'State the conservation of mechanical energy.', back: 'When only conservative forces (gravity, springs) do work, mechanical energy is conserved:\n\n$KE_i + PE_i = KE_f + PE_f$\n\nEnergy converts between kinetic and potential but the total stays constant.', hint: 'KE + PE stays constant with no friction.' },
    { front: 'Gravitational potential energy formula (near Earth)?', back: '$PE_g = mgh$\n\n- $m$ = mass (kg)\n- $g = 9.8\\ \\text{m/s}^2$\n- $h$ = height above a chosen reference level (m)\n\nOnly *changes* in $h$ matter, so you may pick the zero level wherever is convenient.', hint: 'Height is measured from a reference you choose.' },
    { front: 'Elastic (spring) potential energy formula?', back: '$PE_s = \\frac{1}{2}kx^2$\n\n- $k$ = spring constant (N/m), stiffness\n- $x$ = displacement from the spring\'s natural length (m)\n\nAlways $\\geq 0$, and depends on $x^2$ (compression and stretch by the same amount store equal energy).', hint: 'Depends on x², so direction of stretch does not matter.' },
    { front: 'What is a conservative vs. non-conservative force?', back: '**Conservative** (gravity, springs): work is path-independent and has an associated PE. **Non-conservative** (friction, drag, applied push): work depends on the path; friction converts mechanical energy to thermal energy.', hint: 'Conservative forces store energy as PE.' },
    { front: 'Energy equation when friction is present?', back: '$KE_i + PE_i = KE_f + PE_f + |W_{friction}|$\n\nFriction removes mechanical energy as heat, so the final mechanical energy is less. $|W_{friction}| = f\\,d$ (friction force times path length).', hint: 'Add the energy lost to friction on the final side.' },
    { front: 'Trap: does the SPEED at the bottom of a frictionless ramp depend on the ramp\'s shape or angle?', back: 'No. By energy conservation, $\\frac{1}{2}mv^2 = mgh$, so $v = \\sqrt{2gh}$ depends only on the height dropped, not the angle or curve of the path.', hint: 'Only the height drop matters for final speed.' },
    { front: 'A 2 kg cart is released from rest 1.5 m up a frictionless ramp. Find its speed at the bottom.', back: 'Energy conservation: $mgh = \\frac{1}{2}mv^2$ → $v = \\sqrt{2gh}$.\n\n$v = \\sqrt{2(9.8)(1.5)} = \\sqrt{29.4} \\approx 5.4\\ \\text{m/s}$.\n\n(Mass cancels.)', hint: 'mgh becomes ½mv²; mass cancels.' },
    { front: 'A spring with $k = 200\\ \\text{N/m}$ is compressed 0.1 m and launches a 0.5 kg cart on a frictionless surface. Find the launch speed.', back: 'Spring PE converts to KE: $\\frac{1}{2}kx^2 = \\frac{1}{2}mv^2$.\n\n$\\frac{1}{2}(200)(0.1)^2 = 1\\ \\text{J} = \\frac{1}{2}(0.5)v^2$\n\n$v^2 = 4 \\Rightarrow v = 2\\ \\text{m/s}$.', hint: 'Set spring PE equal to the cart KE.' },
    { front: 'A pendulum bob swings down from a height of 0.2 m. How fast is it moving at the lowest point?', back: '$\\frac{1}{2}mv^2 = mgh \\Rightarrow v = \\sqrt{2gh}$.\n\n$v = \\sqrt{2(9.8)(0.2)} = \\sqrt{3.92} \\approx 2.0\\ \\text{m/s}$.', hint: 'Same √(2gh) result as a ramp.' },
    { front: 'A 1 kg block slides down a 5 m-high frictionless hill but reaches the bottom at only 8 m/s instead of the ideal 9.9 m/s. Where did the energy go?', back: 'Ideal: $v=\\sqrt{2gh}=\\sqrt{2(9.8)(5)}\\approx 9.9$ m/s. Measured KE $=\\frac{1}{2}(1)(8)^2 = 32$ J vs. $PE = mgh = 49$ J. The missing $49-32 = 17$ J was converted to **thermal energy by friction/air resistance**.', hint: 'Missing mechanical energy became heat.' },
    { front: 'Units check: confirm joules from $mgh$ and $\\frac{1}{2}mv^2$.', back: '$mgh$: $\\text{kg}\\cdot(\\text{m/s}^2)\\cdot\\text{m} = \\text{kg}\\cdot\\text{m}^2/\\text{s}^2 = \\text{J}$.\n$\\frac{1}{2}mv^2$: $\\text{kg}\\cdot(\\text{m/s})^2 = \\text{kg}\\cdot\\text{m}^2/\\text{s}^2 = \\text{J}$.\n\nBoth reduce to the joule, so they can be added.', hint: 'Both equal kg·m²/s² = J.' },
  ],

  // ---------------------------------------------------------------------------
  'momentum-and-impulse': [
    { front: 'Definition of momentum (with symbols)?', back: '$\\vec{p} = m\\vec{v}$\n\n- $m$ = mass (kg)\n- $\\vec{v}$ = velocity (m/s)\n\nMomentum is a vector pointing in the direction of velocity. Units: $\\text{kg}\\cdot\\text{m/s}$.', hint: 'Mass times velocity — a vector.' },
    { front: 'Definition of impulse, and its two equivalent forms?', back: '$\\vec{J} = \\vec{F}\\,\\Delta t = \\Delta \\vec{p}$\n\n- $\\vec{F}$ = (average) net force (N)\n- $\\Delta t$ = time the force acts (s)\n\nImpulse equals the change in momentum. Units: $\\text{N}\\cdot\\text{s} = \\text{kg}\\cdot\\text{m/s}$ (same as momentum).', hint: 'Force × time = change in momentum.' },
    { front: 'State the Impulse–Momentum Theorem.', back: '$\\vec{F}_{net}\\,\\Delta t = \\Delta \\vec{p} = m\\vec{v}_f - m\\vec{v}_i$\n\nA net force applied over time changes momentum. This explains why airbags, crumple zones, and "giving with" a catch reduce force: increasing $\\Delta t$ lowers $F$ for the same $\\Delta p$.', hint: 'Longer impact time → smaller force.' },
    { front: 'What is the area under a force–time graph?', back: 'It equals the **impulse** delivered (change in momentum), even for a varying force. Useful for collision/force-spike problems where force is not constant.', hint: 'Area under F vs. t = impulse.' },
    { front: 'When is momentum conserved?', back: 'For a system, total momentum is conserved when the **net external force is zero** (e.g. during a brief collision, internal forces dominate and external forces like gravity/friction are negligible over the short time).', hint: 'No net external force → total p constant.' },
    { front: 'Trap: is momentum conserved in an inelastic collision even though KE is lost?', back: 'Yes. Momentum is ALWAYS conserved in a collision with no net external force, inelastic or not. Kinetic energy is the quantity that is lost (to heat/deformation) in an inelastic collision.', hint: 'Momentum conserved; KE is not.' },
    { front: 'Elastic vs. inelastic vs. perfectly inelastic collision?', back: '**Elastic**: both momentum AND kinetic energy conserved (objects bounce apart).\n**Inelastic**: momentum conserved, some KE lost.\n**Perfectly inelastic**: objects stick together and move with a common velocity; maximum KE lost (momentum still conserved).', hint: 'Only elastic conserves KE.' },
    { front: 'A 2 kg cart moving at 3 m/s is brought to rest. What impulse was applied?', back: '$J = \\Delta p = m v_f - m v_i = (2)(0) - (2)(3) = -6\\ \\text{kg}\\cdot\\text{m/s}$.\n\nThe negative sign means the impulse opposes the original motion.', hint: 'Impulse = change in momentum.' },
    { front: 'A 0.15 kg ball hits a wall at 20 m/s and rebounds at 20 m/s. Find the impulse on the ball.', back: 'Take initial direction as positive: $v_i = +20$, $v_f = -20$.\n\n$J = m(v_f - v_i) = 0.15(-20 - 20) = 0.15(-40) = -6\\ \\text{kg}\\cdot\\text{m/s}$.\n\nA rebound doubles $\\Delta v$ vs. just stopping.', hint: 'Rebound reverses the sign of v.' },
    { front: 'A 3 kg cart at 4 m/s hits and sticks to a stationary 1 kg cart. Find their common velocity.', back: 'Perfectly inelastic, momentum conserved:\n\n$m_1 v_1 = (m_1 + m_2)v_f$\n$(3)(4) = (4)v_f \\Rightarrow v_f = 3\\ \\text{m/s}$.', hint: 'Total p before = (combined mass) × v after.' },
    { front: 'A 600 N force acts on a cart for 0.5 s. What impulse is delivered?', back: '$J = F\\,\\Delta t = (600)(0.5) = 300\\ \\text{N}\\cdot\\text{s} = 300\\ \\text{kg}\\cdot\\text{m/s}$.', hint: 'Impulse = force × time.' },
    { front: 'Why do bent knees on landing reduce injury (in momentum terms)?', back: 'You must lose the same momentum ($\\Delta p$) either way. Bending the knees increases the stopping time $\\Delta t$, and since $F = \\Delta p / \\Delta t$, a larger $\\Delta t$ means a smaller peak force on the body.', hint: 'Same Δp, longer Δt, smaller F.' },
  ],

  // ---------------------------------------------------------------------------
  'uniform-circular-motion': [
    { front: 'What is uniform circular motion?', back: 'Motion in a circle at **constant speed**. The velocity is constant in magnitude but continuously changes direction, so there is a nonzero (centripetal) acceleration.', hint: 'Constant speed, changing direction = still accelerating.' },
    { front: 'Centripetal acceleration formula (and direction)?', back: '$a_c = \\dfrac{v^2}{r}$\n\n- $v$ = speed (m/s)\n- $r$ = radius of the circular path (m)\n\nIt always points **toward the center** of the circle. Units: $\\text{m/s}^2$.', hint: 'Points to the center; depends on v² over r.' },
    { front: 'Centripetal force — what is it, really?', back: '$F_c = \\dfrac{mv^2}{r} = m a_c$\n\nIt is the **net inward force**, not a new kind of force. A real force (tension, gravity, friction, normal) provides it. Always directed toward the center.', hint: 'A role played by a real force, not a separate force.' },
    { front: 'Trap: is there an outward "centrifugal force" on the object?', back: 'No real outward force acts on the object. The net force is inward (centripetal). The outward "push" you feel is your inertia (tendency to go straight) plus the seat/wall pushing you inward; "centrifugal force" is a fictitious force only in a rotating frame.', hint: 'The real net force points inward.' },
    { front: 'Relationship between speed, period, and radius?', back: '$v = \\dfrac{2\\pi r}{T}$\n\n- $T$ = period (time for one revolution, s)\n- $2\\pi r$ = circumference (distance per revolution)\n\nLarger radius or shorter period → larger speed.', hint: 'Speed = circumference / period.' },
    { front: 'Why does the centripetal force do NO work?', back: 'It is always perpendicular to the velocity (which is tangent to the circle). Since $W = Fd\\cos 90^\\circ = 0$, it does no work, so the speed (and KE) stays constant in uniform circular motion.', hint: 'Perpendicular to motion → zero work.' },
    { front: 'At the top of a vertical loop, what provides the centripetal force?', back: 'Gravity (and the normal/track force, both pointing down toward the center): $F_N + mg = \\dfrac{mv^2}{r}$.\n\nMinimum speed to maintain contact occurs when $F_N = 0$: $v_{min} = \\sqrt{gr}$.', hint: 'At the top, gravity points toward the center.' },
    { front: 'A 0.5 kg ball on a 1 m string moves in a circle at 4 m/s. Find the tension (horizontal circle).', back: 'Tension provides the centripetal force:\n\n$T = \\dfrac{mv^2}{r} = \\dfrac{(0.5)(4)^2}{1} = \\dfrac{8}{1} = 8\\ \\text{N}$.', hint: 'Tension = mv²/r.' },
    { front: 'A car rounds a flat curve of radius 50 m at 20 m/s. What centripetal acceleration does it need?', back: '$a_c = \\dfrac{v^2}{r} = \\dfrac{(20)^2}{50} = \\dfrac{400}{50} = 8\\ \\text{m/s}^2$, directed toward the center.', hint: 'a_c = v²/r.' },
    { front: 'For the same car (mass 1000 kg, $a_c = 8\\ \\text{m/s}^2$) on a flat curve, what minimum friction force is required?', back: 'Friction supplies the centripetal force:\n\n$f = m a_c = (1000)(8) = 8000\\ \\text{N}$ toward the center. If available static friction is less, the car skids outward.', hint: 'Friction = mv²/r here.' },
    { front: 'A record spins once every 2 s; a point sits at $r = 0.15$ m. Find its speed.', back: '$v = \\dfrac{2\\pi r}{T} = \\dfrac{2\\pi (0.15)}{2} \\approx \\dfrac{0.942}{2} \\approx 0.47\\ \\text{m/s}$.', hint: 'v = 2πr / T.' },
    { front: 'How does $a_c$ change if speed doubles at the same radius?', back: 'Since $a_c = v^2/r$ depends on $v^2$, doubling the speed makes the centripetal acceleration (and required force) **4× larger**.', hint: 'It scales with v squared.' },
  ],
};

async function main() {
  console.log('Adding rich AP Physics 1 flashcards...\n');

  let totalTopics = 0;
  let totalCards = 0;

  for (const [slug, cards] of Object.entries(deck)) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) {
      console.log(`⚠ Topic not found: ${slug}`);
      continue;
    }

    // Idempotent + non-destructive: only remove the fronts this script owns.
    const fronts = cards.map((c) => c.front);
    await prisma.flashcard.deleteMany({
      where: { topicId: topic.id, front: { in: fronts } },
    });

    await prisma.flashcard.createMany({
      data: cards.map((c) => ({
        topicId: topic.id,
        front: c.front,
        back: c.back,
        hint: c.hint,
        lessonPart: c.lessonPart,
      })),
    });

    totalTopics += 1;
    totalCards += cards.length;
    console.log(`✅ ${slug}: ${cards.length} cards`);
  }

  console.log(`\n✅ AP Physics 1 flashcards added! (${totalCards} cards across ${totalTopics} topics)`);
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
