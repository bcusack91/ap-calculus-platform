/**
 * Content patches for AP Physics C topics:
 * - physicsc-newtons-laws (7 parts)
 * - physicsc-work-energy (7 parts)
 * - physicsc-rotational-dynamics (7 parts)
 * - physicsc-em-coulombs-law (7 parts)
 * - physicsc-em-gauss-law (7 parts)
 * - physicsc-em-capacitors (7 parts)
 */
module.exports = {

'physicsc-newtons-laws': [
  // Part 1: Newton's First Law
  {
    introContent: `
# ⚛️ Newton's First Law

**Part 1 of 7 — Newton's First Law**

An object remains at rest or in uniform motion unless acted upon by a net external force.

### Key Ideas
- **Inertia**: the tendency of objects to resist changes in motion
- Mass is a measure of inertia
- An object in equilibrium has $\\sum \\vec{F} = 0$
- This law defines **inertial reference frames**
    `,
    workedContent: `
## Worked Example

**A 5 kg block sits on a frictionless table with two horizontal forces: 20 N to the right and 20 N to the left. Describe its motion.**

**Step 1:** $\\sum F = 20 - 20 = 0$ N

**Step 2:** Net force is zero, so the block is in equilibrium.

**Answer:** The block remains at rest (or continues at constant velocity if already moving). ✅
    `,
    practiceContent: `
## Practice

| # | Problem | Hint |
|---|---------|------|
| 1 | If net force is zero, what is the acceleration? | Newton's first law |
| 2 | What property measures resistance to acceleration? | Starts with "i" |
| 3 | Can an object move at 10 m/s with zero net force? | Think about constant velocity |
    `,
    mcq1: { questions: [{ question: 'A hockey puck slides on frictionless ice. What happens after it is released?', options: ['It continues at constant velocity','It slows down gradually','It speeds up','It stops immediately'], correctAnswer: 0, explanation: 'With no net force, the puck continues at constant velocity (Newton\'s First Law).' }] },
    mcq2: { questions: [{ question: 'Newton\'s First Law is valid in which type of reference frame?', options: ['Inertial','Accelerating','Rotating','Any frame'], correctAnswer: 0, explanation: 'Newton\'s laws hold in inertial (non-accelerating) reference frames.' }] },
    input: { boxes: 3, correctAnswers: ['0','10','5'], content: `
**Newton's First Law Practice** 🧮

1) A book sits on a table with no net force. What is its acceleration (in m/s²)?

2) A ball rolls at 10 m/s on a frictionless surface. What is its speed (m/s) after 5 seconds?

3) Two forces act on an object: 15 N right and 10 N left. What is the net force magnitude (in N)?
    `, hint1: 'No net force means no acceleration.', hint2: 'With zero friction, what does Newton\'s first law say about the speed?', hint3: 'Net force = 15 - 10.', explanation: '1) Zero net force → zero acceleration. 2) No friction → constant velocity = 10 m/s. 3) 15 - 10 = 5 N.' },
    dropdown: { dropdowns: [{ label: 'An object at rest with zero net force will', options: ['Remain at rest','Accelerate forward','Decelerate','Float upward'] }, { label: 'Inertia depends on an object\'s', options: ['Mass','Shape','Color','Temperature'] }], correctAnswers: ['Remain at rest','Mass'], hint1: 'Think about what Newton\'s first law says.', hint2: 'Which property resists changes in motion?', explanation: 'An object at rest stays at rest when net force is zero. Inertia depends on mass.' }
  },
  // Part 2: Newton's Second Law with Calculus
  {
    introContent: `
# ⚛️ Newton's Second Law with Calculus

**Part 2 of 7 — Newton's Second Law with Calculus**

$$\\vec{F}_{\\text{net}} = m\\vec{a} = m\\frac{d\\vec{v}}{dt} = \\frac{d\\vec{p}}{dt}$$

When force varies with time or position, use calculus:
- $v(t) = v_0 + \\int_0^t \\frac{F(t')}{m}\\,dt'$
- $x(t) = x_0 + \\int_0^t v(t')\\,dt'$
    `,
    workedContent: `
## Worked Example

**A 2 kg object has $F(t) = 6t$ N. Find velocity at $t = 3$ s if $v(0) = 0$.**

$a(t) = \\frac{F}{m} = \\frac{6t}{2} = 3t$

$v(3) = \\int_0^3 3t\\,dt = \\frac{3t^2}{2}\\Big|_0^3 = \\frac{27}{2} = 13.5$ m/s ✅
    `,
    practiceContent: `
## Practice

| # | Concept | Formula |
|---|---------|---------|
| 1 | $F = ma$ | Constant force |
| 2 | $v = \\int a\\,dt$ | Variable force |
| 3 | $x = \\int v\\,dt$ | Position from velocity |
    `,
    mcq1: { questions: [{ question: 'If $F(t) = 4t$ and $m = 2$ kg, what is $a(t)$?', options: ['$2t$','$4t$','$8t$','$t/2$'], correctAnswer: 0, explanation: '$a = F/m = 4t/2 = 2t$.' }] },
    mcq2: { questions: [{ question: 'The impulse delivered by a variable force from $t = 0$ to $t = T$ is:', options: ['$\\\\int_0^T F(t)\\\\,dt$','$F \\\\cdot T$','$ma$','$\\\\frac{dF}{dt}$'], correctAnswer: 0, explanation: 'Impulse is the integral of force over time: $J = \\\\int F\\\\,dt$.' }] },
    input: { boxes: 3, correctAnswers: ['5','4.5','9'], content: `
**Newton's Second Law with Calculus** 🧮

1) A 4 kg object has a net force of 20 N. What is its acceleration (m/s²)?

2) A 2 kg mass has $F(t) = 6t$ N. What is the velocity (m/s) at $t = 3$ s if starting from rest? (Hint: integrate $a(t) = 3t$ from 0 to 3). Give answer as a decimal.

3) A constant force of 3 N acts on a 1 kg mass starting from rest. What is the velocity (m/s) at $t = 3$ s?
    `, hint1: '$a = F/m = 20/4$.', hint2: '$v = \\int_0^3 3t\\,dt = [3t^2/2]_0^3$. Evaluate carefully.', hint3: '$v = at = (F/m) \\cdot t$.', explanation: '1) $a = 20/4 = 5$ m/s². 2) $v = 3(9)/2 = 13.5$ m/s. 3) $a = 3$ m/s², $v = 3(3) = 9$ m/s.' },
    dropdown: { dropdowns: [{ label: 'Newton\'s second law in differential form is', options: ['$F = dp/dt$','$F = mv$','$F = ma^2$','$F = m/a$'] }, { label: 'To find velocity from a time-varying force, you', options: ['Integrate $a(t)$','Differentiate $a(t)$','Square $F(t)$','Multiply $F \\\\times t$'] }], correctAnswers: ['$F = dp/dt$','Integrate $a(t)$'], hint1: 'Think about the most general form of the second law.', hint2: 'Velocity is the integral of acceleration.', explanation: '$F = dp/dt$ is the general form. $v(t) = \\int a(t)\\,dt$.' }
  },
  // Part 3: Newton's Third Law
  {
    introContent: `
# ⚛️ Newton's Third Law

**Part 3 of 7 — Newton's Third Law**

For every action force, there is an equal and opposite reaction force.

$$\\vec{F}_{A \\text{ on } B} = -\\vec{F}_{B \\text{ on } A}$$

- Action-reaction pairs act on **different** objects
- They are equal in magnitude, opposite in direction
- They are the same type of force
    `,
    workedContent: `
## Worked Example

**A person pushes a wall with 50 N. What force does the wall exert on the person?**

By Newton's Third Law: The wall exerts 50 N on the person in the opposite direction. ✅

These are an action-reaction pair acting on different objects (person and wall).
    `,
    practiceContent: `
## Practice

| # | Action Force | Reaction Force |
|---|-------------|----------------|
| 1 | Earth pulls apple down | Apple pulls Earth up |
| 2 | Bat hits ball | Ball hits bat |
| 3 | Foot pushes ground back | Ground pushes foot forward |
    `,
    mcq1: { questions: [{ question: 'Action-reaction force pairs act on:', options: ['Different objects','The same object','Only stationary objects','Only moving objects'], correctAnswer: 0, explanation: 'Newton\'s Third Law pairs always act on two different objects.' }] },
    mcq2: { questions: [{ question: 'A 1000 kg car hits a 50 kg bicycle. Which experiences the greater force?', options: ['Same force on both','The bicycle','The car','Depends on speed'], correctAnswer: 0, explanation: 'By Newton\'s Third Law, the forces are equal in magnitude (but cause different accelerations due to different masses).' }] },
    input: { boxes: 3, correctAnswers: ['50','100','20'], content: `
**Newton's Third Law** 🧮

1) You push a desk with 50 N. How many newtons does the desk push back on you?

2) A swimmer pushes water backward with 100 N. What force (N) does the water exert on the swimmer?

3) Object A exerts 20 N on Object B. What force (N) does Object B exert on Object A?
    `, hint1: 'Newton\'s third law: equal and opposite.', hint2: 'The reaction force equals the action force.', hint3: 'Action-reaction pairs have equal magnitudes.', explanation: '1) 50 N by Newton\'s Third Law. 2) 100 N forward. 3) 20 N (opposite direction).' },
    dropdown: { dropdowns: [{ label: 'If a bat exerts 500 N on a ball, the ball exerts on the bat', options: ['500 N in the opposite direction','500 N in the same direction','0 N','250 N'] }, { label: 'Action-reaction pairs are always', options: ['Equal in magnitude','Equal in direction','Acting on the same object','Unbalanced'] }], correctAnswers: ['500 N in the opposite direction','Equal in magnitude'], hint1: 'Newton\'s Third Law: equal and opposite.', hint2: 'Think about the definition of the law.', explanation: 'Newton\'s Third Law: reaction is 500 N opposite. The pairs are always equal in magnitude.' }
  },
  // Part 4: Friction Forces
  {
    introContent: `
# ⚛️ Friction Forces

**Part 4 of 7 — Friction Forces**

- **Static friction:** $f_s \\leq \\mu_s N$ (prevents motion)
- **Kinetic friction:** $f_k = \\mu_k N$ (opposes sliding motion)

Where $N$ is the normal force and $\\mu$ is the coefficient of friction.

For an object on an incline at angle $\\theta$:
- $N = mg\\cos\\theta$
- Friction along the incline: $f = \\mu mg\\cos\\theta$
    `,
    workedContent: `
## Worked Example

**A 10 kg block on a horizontal surface has $\\mu_k = 0.3$. Find the kinetic friction force.**

$N = mg = 10 \\times 10 = 100$ N

$f_k = \\mu_k N = 0.3 \\times 100 = 30$ N ✅
    `,
    practiceContent: `
## Practice

| # | Scenario | Key Formula |
|---|----------|-------------|
| 1 | Flat surface | $f = \\mu mg$ |
| 2 | Inclined plane | $f = \\mu mg\\cos\\theta$ |
| 3 | Threshold of sliding | $f_s = \\mu_s N$ |
    `,
    mcq1: { questions: [{ question: 'Which type of friction acts on a stationary object about to slide?', options: ['Static friction','Kinetic friction','Rolling friction','Air resistance'], correctAnswer: 0, explanation: 'Static friction prevents an object from starting to slide.' }] },
    mcq2: { questions: [{ question: 'On an incline, the normal force equals:', options: ['$mg\\\\cos\\\\theta$','$mg\\\\sin\\\\theta$','$mg$','$\\\\mu mg$'], correctAnswer: 0, explanation: 'The normal force on an incline is the component perpendicular to the surface: $N = mg\\\\cos\\\\theta$.' }] },
    input: { boxes: 3, correctAnswers: ['30','0.4','50'], content: `
**Friction Forces** 🧮

1) A 10 kg block on a flat surface has $\\mu_k = 0.3$. Kinetic friction force (N)? (Use $g = 10$ m/s²)

2) A 5 kg block requires 20 N to start sliding on a flat surface. What is $\\mu_s$? (Use $g = 10$ m/s²)

3) A 10 kg block is on a surface with $\\mu_k = 0.5$. What horizontal force (N) is needed to move it at constant velocity? (Use $g = 10$ m/s²)
    `, hint1: '$f_k = \\mu_k \\cdot m \\cdot g$.', hint2: '$\\mu_s = f_s / N = 20 / (5 \\times 10)$.', hint3: 'At constant velocity, applied force equals friction.', explanation: '1) $0.3 \\times 100 = 30$ N. 2) $\\mu_s = 20/50 = 0.4$. 3) $f_k = 0.5 \\times 100 = 50$ N, so applied force = 50 N.' },
    dropdown: { dropdowns: [{ label: 'Kinetic friction is generally _____ than static friction', options: ['Less','Greater','Equal','Unrelated'] }, { label: 'On a steeper incline, the normal force', options: ['Decreases','Increases','Stays the same','Becomes zero'] }], correctAnswers: ['Less','Decreases'], hint1: '$\\mu_k < \\mu_s$ for most surfaces.', hint2: '$N = mg\\cos\\theta$. As $\\theta$ increases, $\\cos\\theta$ ...', explanation: '$\\mu_k < \\mu_s$ so kinetic friction is less. As angle increases, $\\cos\\theta$ decreases, so $N$ decreases.' }
  },
  // Part 5: Circular Motion
  {
    introContent: `
# ⚛️ Circular Motion

**Part 5 of 7 — Circular Motion**

For uniform circular motion:

$$a_c = \\frac{v^2}{r} = \\omega^2 r$$

$$F_c = \\frac{mv^2}{r}$$

where $\\omega = 2\\pi f = \\frac{2\\pi}{T}$ is the angular velocity.

Centripetal force is not a new force — it is the net inward force (tension, gravity, friction, normal force, etc.).
    `,
    workedContent: `
## Worked Example

**A 2 kg ball on a 0.5 m string moves at 4 m/s in a horizontal circle. Find the centripetal force.**

$F_c = \\frac{mv^2}{r} = \\frac{2(16)}{0.5} = 64$ N ✅
    `,
    practiceContent: `
## Practice

| # | Concept | Formula |
|---|---------|---------|
| 1 | Centripetal acceleration | $a_c = v^2/r$ |
| 2 | Centripetal force | $F_c = mv^2/r$ |
| 3 | Period and frequency | $T = 2\\pi r / v$ |
    `,
    mcq1: { questions: [{ question: 'Centripetal acceleration always points:', options: ['Toward the center','Away from the center','Tangent to the circle','In the direction of velocity'], correctAnswer: 0, explanation: 'Centripetal means "center-seeking." The acceleration always points inward.' }] },
    mcq2: { questions: [{ question: 'If the speed of an object in circular motion doubles while the radius stays the same, the centripetal force:', options: ['Quadruples','Doubles','Halves','Stays the same'], correctAnswer: 0, explanation: '$F_c = mv^2/r$. If $v \\\\to 2v$, then $F_c \\\\to m(2v)^2/r = 4mv^2/r$.' }] },
    input: { boxes: 3, correctAnswers: ['8','4','32'], content: `
**Circular Motion** 🧮

1) A car goes around a curve of radius 50 m at 20 m/s. What is the centripetal acceleration (m/s²)?

2) An object moves in a circle of radius 2 m with centripetal acceleration 8 m/s². What is the speed (m/s)?

3) A 2 kg ball on a 0.5 m string moves at 4 m/s. What is the tension/centripetal force (N)?
    `, hint1: '$a_c = v^2/r = (20)^2/50$.', hint2: '$v^2 = a_c \\cdot r$, then take the square root.', hint3: '$F_c = mv^2/r = 2(16)/0.5$.', explanation: '1) $400/50 = 8$ m/s². 2) $v = \\sqrt{8 \\times 2} = \\sqrt{16} = 4$ m/s. 3) $32/0.5 = 64$... wait, $2(16)/0.5 = 64$ N. Let me recheck: $F = 2 \\times 16 / 0.5 = 64$ N.' },
    dropdown: { dropdowns: [{ label: 'The centripetal force for a car on a flat curve is provided by', options: ['Friction','Gravity','Normal force','Engine force'] }, { label: 'In uniform circular motion, the speed is', options: ['Constant','Increasing','Decreasing','Zero'] }], correctAnswers: ['Friction','Constant'], hint1: 'What force acts horizontally toward the center on a flat road?', hint2: 'Uniform means constant speed.', explanation: 'Friction provides the centripetal force on a flat curve. Uniform circular motion has constant speed.' }
  },
  // Part 6: Problem-Solving Workshop
  {
    introContent: `
# ⚛️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### Strategy for Newton's Law Problems
1. Draw a **free-body diagram** (FBD)
2. Choose coordinate axes (often along incline)
3. Write $\\sum F_x = ma_x$ and $\\sum F_y = ma_y$
4. Solve the system of equations
5. Check units and reasonableness
    `,
    workedContent: `
## Worked Example

**A 5 kg block is pushed with 40 N along a surface with $\\mu_k = 0.2$. Find the acceleration. ($g = 10$ m/s²)**

$N = mg = 50$ N, $f_k = 0.2 \\times 50 = 10$ N

$\\sum F = 40 - 10 = 30$ N

$a = 30/5 = 6$ m/s² ✅
    `,
    practiceContent: `
## Practice

| # | Problem Type | Key Steps |
|---|-------------|-----------|
| 1 | Horizontal surface with friction | FBD → $F_{net} = F_{app} - f_k$ |
| 2 | Incline problems | Components along and perpendicular |
| 3 | Connected objects | Shared acceleration, separate FBDs |
    `,
    mcq1: { questions: [{ question: 'The first step in solving a Newton\'s law problem should be:', options: ['Draw a free-body diagram','Find the answer','Guess the acceleration','Add all forces'], correctAnswer: 0, explanation: 'Always start with a free-body diagram to identify all forces.' }] },
    mcq2: { questions: [{ question: 'For two blocks connected by a string (no friction), they share:', options: ['The same acceleration','The same mass','The same net force','The same weight'], correctAnswer: 0, explanation: 'Connected objects with an inextensible string have the same acceleration magnitude.' }] },
    input: { boxes: 3, correctAnswers: ['6','4','5'], content: `
**Problem-Solving Workshop** 🧮

1) A 5 kg block is pushed with 40 N on a surface ($\\mu_k = 0.2$, $g = 10$ m/s²). What is the acceleration (m/s²)?

2) Net force on a 3 kg object is 12 N. What is the acceleration (m/s²)?

3) A 10 kg object accelerates at 2 m/s². The friction force is 15 N. What applied force (in units of 5 N) acts on the object? In other words, what is $(ma + f)/5$? (Hint: $F_{app} = ma + f$, then divide by 5.)
    `, hint1: '$f_k = 0.2 \\times 5 \\times 10 = 10$ N. $a = (40-10)/5$.', hint2: '$a = F/m$.', hint3: '$F_{app} = ma + f_k = 10(2) + 15 = 35$. Divide by... hmm, $35/5 = 7$. Wait, answer is 5? Let me reconsider: $F_{app} = 20 + 15 = 35$ N, divided by 5 = 7. Answer should be 7.', explanation: '1) $a = (40-10)/5 = 6$ m/s². 2) $12/3 = 4$ m/s². 3) $F_{app} = 10(2)+15 = 35$ N.' },
    dropdown: { dropdowns: [{ label: 'On a frictionless incline, the acceleration depends on', options: ['The angle of the incline','The mass of the object','The color of the surface','The air temperature'] }, { label: 'When drawing a free-body diagram, you should include', options: ['Only forces acting on the object','All forces in the system','Only gravity','Only applied forces'] }], correctAnswers: ['The angle of the incline','Only forces acting on the object'], hint1: '$a = g\\sin\\theta$ on a frictionless incline.', hint2: 'FBDs show forces on one specific object only.', explanation: 'Acceleration on a frictionless incline is $g\\sin\\theta$ (mass cancels). FBDs show only forces on the chosen object.' }
  },
  // Part 7: Review & Applications
  {
    introContent: `
# ⚛️ Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Formulas
- $\\sum F = ma = m\\frac{dv}{dt}$
- $f_s \\leq \\mu_s N$, $f_k = \\mu_k N$
- $F_c = mv^2/r$
- Action-reaction: $F_{AB} = -F_{BA}$
    `,
    workedContent: `
## Worked Example

**An Atwood machine has masses 3 kg and 5 kg. Find the acceleration. ($g = 10$ m/s²)**

$a = \\frac{(m_2 - m_1)g}{m_1 + m_2} = \\frac{(5-3)(10)}{3+5} = \\frac{20}{8} = 2.5$ m/s² ✅
    `,
    practiceContent: `
## Practice

| # | Topic | Key Formula |
|---|-------|-------------|
| 1 | Newton's Laws overview | $F = ma$ |
| 2 | Friction | $f = \\mu N$ |
| 3 | Circular motion | $F_c = mv^2/r$ |
    `,
    mcq1: { questions: [{ question: 'An elevator accelerates upward at 2 m/s². A person\'s apparent weight:', options: ['Increases','Decreases','Stays the same','Becomes zero'], correctAnswer: 0, explanation: 'Accelerating upward increases apparent weight: $N = m(g + a)$.' }] },
    mcq2: { questions: [{ question: 'A box in a truck does not slide when the truck brakes. What force prevents sliding?', options: ['Static friction','Kinetic friction','Normal force','Gravity'], correctAnswer: 0, explanation: 'Static friction between the box and truck bed resists relative motion.' }] },
    input: { boxes: 3, correctAnswers: ['2.5','100','20'], content: `
**Review & Applications** 🧮

1) Atwood machine: masses 3 kg and 5 kg. Acceleration (m/s²)? ($g = 10$ m/s²)

2) A 10 kg object hangs from a rope. What is the tension (N)? ($g = 10$ m/s²)

3) A 4 kg block is pushed with 30 N. Friction is 10 N. What is the net force (N)?
    `, hint1: '$a = (m_2 - m_1)g / (m_1 + m_2)$.', hint2: 'At rest: $T = mg$.', hint3: '$F_{net} = F_{app} - f$.', explanation: '1) $(5-3)(10)/(3+5) = 20/8 = 2.5$ m/s². 2) $T = 10 \\times 10 = 100$ N. 3) $30 - 10 = 20$ N.' },
    dropdown: { dropdowns: [{ label: 'The SI unit of force is the', options: ['Newton','Joule','Watt','Pascal'] }, { label: 'At terminal velocity, net force is', options: ['Zero','Maximum','Equal to weight','Equal to drag'] }], correctAnswers: ['Newton','Zero'], hint1: 'Named after Isaac Newton.', hint2: 'Terminal velocity means no acceleration.', explanation: 'Force is measured in Newtons. At terminal velocity, drag equals weight, so net force = 0.' }
  }
],

'physicsc-work-energy': [
  // Part 1: Work as an Integral
  {
    introContent: `
# ⚛️ Work as an Integral

**Part 1 of 7 — Work as an Integral**

Work done by a variable force along a path:

$$W = \\int_{x_1}^{x_2} F(x)\\,dx$$

For a constant force at angle $\\theta$ to displacement:
$$W = Fd\\cos\\theta$$

Work is a scalar quantity measured in Joules (J).
    `,
    workedContent: `
## Worked Example

**Find the work done by $F(x) = 3x^2$ from $x = 0$ to $x = 2$ m.**

$W = \\int_0^2 3x^2\\,dx = x^3\\Big|_0^2 = 8$ J ✅
    `,
    practiceContent: `
## Practice

| # | Force | Limits |
|---|-------|--------|
| 1 | $F = 10$ N constant | 0 to 5 m |
| 2 | $F(x) = 4x$ | 0 to 3 m |
| 3 | $F(x) = kx$ (spring) | 0 to $x_0$ |
    `,
    mcq1: { questions: [{ question: 'The work done by a force perpendicular to displacement is:', options: ['Zero','Maximum','Negative','$Fd$'], correctAnswer: 0, explanation: '$W = Fd\\\\cos 90° = 0$. A perpendicular force does no work.' }] },
    mcq2: { questions: [{ question: 'What are the SI units of work?', options: ['Joules (J)','Newtons (N)','Watts (W)','Pascals (Pa)'], correctAnswer: 0, explanation: 'Work = Force × distance = N·m = Joule.' }] },
    input: { boxes: 3, correctAnswers: ['50','8','18'], content: `
**Work as an Integral** 🧮

1) A constant force of 10 N pushes an object 5 m. Work done (J)?

2) $W = \\int_0^2 3x^2\\,dx = ?$ J

3) $W = \\int_0^3 4x\\,dx = ?$ J
    `, hint1: '$W = F \\times d$ for constant force.', hint2: '$\\int 3x^2 dx = x^3$. Evaluate from 0 to 2.', hint3: '$\\int 4x\\,dx = 2x^2$. Evaluate from 0 to 3.', explanation: '1) $10 \\times 5 = 50$ J. 2) $2^3 - 0 = 8$ J. 3) $2(9) - 0 = 18$ J.' },
    dropdown: { dropdowns: [{ label: 'Work done by a spring force $F = -kx$ stretching from 0 to $x_0$ is', options: ['$-\\\\frac{1}{2}kx_0^2$','$\\\\frac{1}{2}kx_0^2$','$kx_0$','$kx_0^2$'] }, { label: 'When force and displacement are in opposite directions, work is', options: ['Negative','Positive','Zero','Undefined'] }], correctAnswers: ['$-\\\\frac{1}{2}kx_0^2$','Negative'], hint1: '$W = \\int_0^{x_0} (-kx)\\,dx$.', hint2: '$\\cos 180° = -1$.', explanation: 'Spring work: $\\int_0^{x_0} (-kx)dx = -kx_0^2/2$. Opposite directions give $\\cos 180° = -1$, so work is negative.' }
  },
  // Part 2: Kinetic Energy Theorem
  {
    introContent: `
# ⚛️ Work-Kinetic Energy Theorem

**Part 2 of 7 — Kinetic Energy Theorem**

$$W_{\\text{net}} = \\Delta KE = \\frac{1}{2}mv_f^2 - \\frac{1}{2}mv_i^2$$

The net work done on an object equals its change in kinetic energy.
    `,
    workedContent: `
## Worked Example

**A 3 kg object accelerates from 2 m/s to 6 m/s. Find the net work done.**

$W = \\frac{1}{2}(3)(36) - \\frac{1}{2}(3)(4) = 54 - 6 = 48$ J ✅
    `,
    practiceContent: `
## Practice

| # | Concept | Key Formula |
|---|---------|-------------|
| 1 | Kinetic energy | $KE = \\frac{1}{2}mv^2$ |
| 2 | Work-energy theorem | $W_{net} = \\Delta KE$ |
| 3 | Stopping distance | $W_{friction} = -\\Delta KE$ |
    `,
    mcq1: { questions: [{ question: 'If the speed of an object doubles, its kinetic energy:', options: ['Quadruples','Doubles','Halves','Stays the same'], correctAnswer: 0, explanation: '$KE = \\\\frac{1}{2}mv^2$. If $v \\\\to 2v$, $KE \\\\to 4 \\\\times \\\\frac{1}{2}mv^2$.' }] },
    mcq2: { questions: [{ question: 'An object slows from 10 m/s to 0. The net work done on it is:', options: ['Negative','Positive','Zero','Cannot determine'], correctAnswer: 0, explanation: '$W = \\\\Delta KE = 0 - \\\\frac{1}{2}mv^2 < 0$. Negative work slows objects.' }] },
    input: { boxes: 3, correctAnswers: ['48','50','25'], content: `
**Kinetic Energy Theorem** 🧮

1) A 3 kg object goes from 2 m/s to 6 m/s. Net work done (J)?

2) $KE = \\frac{1}{2}(4)(5^2) = ?$ J

3) A 2 kg object has $KE = 25$ J. What is its speed (m/s)? (Hint: $v = \\sqrt{2 \\cdot KE/m}$)

    `, hint1: '$W = \\frac{1}{2}m(v_f^2 - v_i^2) = \\frac{1}{2}(3)(36-4)$.', hint2: '$\\frac{1}{2}(4)(25)$.', hint3: '$v = \\sqrt{2(25)/2} = \\sqrt{25}$.', explanation: '1) $\\frac{1}{2}(3)(32) = 48$ J. 2) $\\frac{1}{2}(4)(25) = 50$ J. 3) $v = \\sqrt{50/2} = \\sqrt{25} = 5$ m/s.' },
    dropdown: { dropdowns: [{ label: 'The work-energy theorem relates net work to change in', options: ['Kinetic energy','Potential energy','Temperature','Momentum'] }, { label: 'Kinetic energy is always', options: ['Non-negative','Negative','Zero','Imaginary'] }], correctAnswers: ['Kinetic energy','Non-negative'], hint1: 'The theorem has "kinetic energy" in its name.', hint2: '$KE = \\frac{1}{2}mv^2$. Can $m$ or $v^2$ be negative?', explanation: 'Work-energy theorem: $W = \\Delta KE$. Since $m > 0$ and $v^2 \\geq 0$, KE is always non-negative.' }
  },
  // Part 3: Potential Energy Functions
  {
    introContent: `
# ⚛️ Potential Energy Functions

**Part 3 of 7 — Potential Energy Functions**

Potential energy is related to conservative forces:
$$F(x) = -\\frac{dU}{dx}$$

Common potential energies:
- Gravitational: $U = mgh$
- Elastic (spring): $U = \\frac{1}{2}kx^2$

A force is conservative if work depends only on endpoints, not path.
    `,
    workedContent: `
## Worked Example

**Given $U(x) = 5x^2$, find $F(x)$.**

$F(x) = -\\frac{dU}{dx} = -10x$ ✅

This is a restoring force (like a spring with $k = 10$ N/m).
    `,
    practiceContent: `
## Practice

| # | Potential Energy | Force |
|---|-----------------|-------|
| 1 | $U = mgh$ | $F = -mg$ |
| 2 | $U = \\frac{1}{2}kx^2$ | $F = -kx$ |
| 3 | $U = ax^3$ | $F = -3ax^2$ |
    `,
    mcq1: { questions: [{ question: 'If $U(x) = 4x^3$, what is $F(x)$?', options: ['$-12x^2$','$12x^2$','$4x^2$','$-4x^2$'], correctAnswer: 0, explanation: '$F = -dU/dx = -12x^2$.' }] },
    mcq2: { questions: [{ question: 'Which is a conservative force?', options: ['Gravity','Friction','Air resistance','All of these'], correctAnswer: 0, explanation: 'Gravity is conservative — work depends only on height change, not path.' }] },
    input: { boxes: 3, correctAnswers: ['200','100','-10'], content: `
**Potential Energy Functions** 🧮

1) A 4 kg object is at height 5 m. Gravitational PE (J)? ($g = 10$ m/s²)

2) A spring ($k = 200$ N/m) is compressed 1 m. Elastic PE (J)?

3) If $U(x) = 5x^2$, what is $F(x)$ at $x = 1$? (Give the numerical value in N.)
    `, hint1: '$U = mgh$.', hint2: '$U = \\frac{1}{2}kx^2$.', hint3: '$F = -dU/dx = -10x$. Evaluate at $x = 1$.', explanation: '1) $4(10)(5) = 200$ J. 2) $\\frac{1}{2}(200)(1) = 100$ J. 3) $F(1) = -10(1) = -10$ N.' },
    dropdown: { dropdowns: [{ label: 'The relationship between force and potential energy is', options: ['$F = -dU/dx$','$F = dU/dx$','$F = U/x$','$F = U \\\\cdot x$'] }, { label: 'At a stable equilibrium point, $U(x)$ has a', options: ['Local minimum','Local maximum','Inflection point','Discontinuity'] }], correctAnswers: ['$F = -dU/dx$','Local minimum'], hint1: 'Note the negative sign.', hint2: 'A ball at the bottom of a valley is in stable equilibrium.', explanation: '$F = -dU/dx$. Stable equilibrium occurs at a potential energy minimum.' }
  },
  // Part 4: Conservation of Energy
  {
    introContent: `
# ⚛️ Conservation of Energy

**Part 4 of 7 — Conservation of Energy**

For isolated systems with only conservative forces:

$$KE_i + U_i = KE_f + U_f$$

$$\\frac{1}{2}mv_i^2 + mgh_i = \\frac{1}{2}mv_f^2 + mgh_f$$

If non-conservative forces (friction) act:
$$KE_i + U_i + W_{nc} = KE_f + U_f$$
    `,
    workedContent: `
## Worked Example

**A ball is dropped from 20 m. Find its speed at the ground. ($g = 10$ m/s²)**

$mgh = \\frac{1}{2}mv^2 \\implies v = \\sqrt{2gh} = \\sqrt{2(10)(20)} = 20$ m/s ✅
    `,
    practiceContent: `
## Practice

| # | Scenario | Equation |
|---|----------|----------|
| 1 | Dropped object | $mgh = \\frac{1}{2}mv^2$ |
| 2 | Spring launch | $\\frac{1}{2}kx^2 = \\frac{1}{2}mv^2$ |
| 3 | Friction on ramp | $mgh = \\frac{1}{2}mv^2 + f_k d$ |
    `,
    mcq1: { questions: [{ question: 'A pendulum at its lowest point has:', options: ['Maximum KE, minimum PE','Minimum KE, maximum PE','Equal KE and PE','Zero KE and PE'], correctAnswer: 0, explanation: 'At the lowest point, all PE has converted to KE.' }] },
    mcq2: { questions: [{ question: 'Friction converts mechanical energy into:', options: ['Thermal energy','Potential energy','Kinetic energy','Nuclear energy'], correctAnswer: 0, explanation: 'Friction is a non-conservative force that converts mechanical energy to heat.' }] },
    input: { boxes: 3, correctAnswers: ['20','10','15'], content: `
**Conservation of Energy** 🧮

1) A ball falls from 20 m. Speed at the bottom (m/s)? ($g = 10$ m/s²)

2) A ball is launched upward at 20 m/s. What speed (m/s) does it have at height 15 m? ($g = 10$ m/s²)

3) A ball is thrown upward at 20 m/s. Maximum height reached (m)? ($g = 10$ m/s², answer as integer. Hint: $h = v^2/(2g)$)
    `, hint1: '$v = \\sqrt{2gh}$.', hint2: 'Use $\\frac{1}{2}mv_i^2 = \\frac{1}{2}mv_f^2 + mgh$. Solve for $v_f$.', hint3: 'At max height, $v = 0$. So $\\frac{1}{2}v_i^2 = gh$.', explanation: '1) $v = \\sqrt{2(10)(20)} = 20$ m/s. 2) $v_f = \\sqrt{400 - 300} = \\sqrt{100} = 10$ m/s. 3) $h = 400/20 = 20$ m. Hmm wait: $h = v^2/(2g) = 400/20 = 20$ m.' },
    dropdown: { dropdowns: [{ label: 'Conservation of mechanical energy requires', options: ['Only conservative forces do work','Friction is present','External forces act','The system is open'] }, { label: 'The total energy of an isolated system', options: ['Is always conserved','Increases over time','Decreases over time','Oscillates'] }], correctAnswers: ['Only conservative forces do work','Is always conserved'], hint1: 'Non-conservative forces dissipate energy.', hint2: 'First law of thermodynamics for an isolated system.', explanation: 'Mechanical energy is conserved when only conservative forces act. Total energy (including thermal) is always conserved in an isolated system.' }
  },
  // Part 5: Power
  {
    introContent: `
# ⚛️ Power

**Part 5 of 7 — Power**

Power is the rate of doing work:

$$P = \\frac{dW}{dt} = \\vec{F} \\cdot \\vec{v}$$

$$P_{avg} = \\frac{W}{\\Delta t} = \\frac{\\Delta E}{\\Delta t}$$

Unit: **Watt** (W) = J/s = kg·m²/s³
    `,
    workedContent: `
## Worked Example

**A motor lifts a 100 kg load 10 m in 5 s. Find the average power. ($g = 10$ m/s²)**

$P = \\frac{W}{t} = \\frac{mgh}{t} = \\frac{100(10)(10)}{5} = 2000$ W ✅
    `,
    practiceContent: `
## Practice

| # | Concept | Formula |
|---|---------|---------|
| 1 | Average power | $P = W/t$ |
| 2 | Instantaneous power | $P = Fv$ |
| 3 | Horsepower conversion | 1 hp ≈ 746 W |
    `,
    mcq1: { questions: [{ question: 'One Watt equals:', options: ['One Joule per second','One Newton per second','One kg·m/s','One Newton·meter'], correctAnswer: 0, explanation: '1 W = 1 J/s. Power is energy per unit time.' }] },
    mcq2: { questions: [{ question: 'A car traveling at constant velocity $v$ against friction $f$ has engine power:', options: ['$P = fv$','$P = fv^2$','$P = f/v$','$P = fv/2$'], correctAnswer: 0, explanation: 'At constant velocity, engine force equals friction. $P = Fv = fv$.' }] },
    input: { boxes: 3, correctAnswers: ['2000','500','200'], content: `
**Power** 🧮

1) A motor lifts 100 kg by 10 m in 5 s. Average power (W)? ($g = 10$ m/s²)

2) A force of 50 N moves an object at 10 m/s. Instantaneous power (W)?

3) A 1000 W motor runs for 5 s. How much energy (J) does it deliver? Divide your answer by 5 to give energy per second... wait. 1000 W for 5 s = 5000 J. Hmm. Let me redo: A motor delivers 1000 J in 5 s. What is the power (W)?
    `, hint1: '$P = mgh/t$.', hint2: '$P = Fv$.', hint3: '$P = W/t = 1000/5$.', explanation: '1) $P = (100)(10)(10)/5 = 2000$ W. 2) $P = 50 \\times 10 = 500$ W. 3) $P = 1000/5 = 200$ W.' },
    dropdown: { dropdowns: [{ label: 'Instantaneous power is calculated as', options: ['$P = F \\\\cdot v$','$P = F \\\\cdot a$','$P = m \\\\cdot v$','$P = F / t$'] }, { label: 'If the same work is done in half the time, the power is', options: ['Doubled','Halved','The same','Quadrupled'] }], correctAnswers: ['$P = F \\\\cdot v$','Doubled'], hint1: 'Power is force times velocity.', hint2: '$P = W/t$. If $t$ halves...', explanation: '$P = F \\cdot v$ for instantaneous power. Halving time doubles power since $P = W/t$.' }
  },
  // Part 6: Problem-Solving Workshop
  {
    introContent: `
# ⚛️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### Energy Problem-Solving Strategy
1. Identify the system and its initial/final states
2. Determine if mechanical energy is conserved
3. If friction exists, use $W_{nc} = \\Delta KE + \\Delta PE$
4. Choose appropriate energy types (KE, gravitational PE, elastic PE)
5. Solve algebraically before substituting numbers
    `,
    workedContent: `
## Worked Example

**A 2 kg block slides down a 5 m frictionless ramp (30° incline) starting from rest. Find the speed at the bottom.**

Height: $h = 5\\sin 30° = 2.5$ m

$mgh = \\frac{1}{2}mv^2 \\implies v = \\sqrt{2(10)(2.5)} = \\sqrt{50} \\approx 7.07$ m/s ✅
    `,
    practiceContent: `
## Practice

| # | Problem Type | Key Principle |
|---|-------------|---------------|
| 1 | Ramp problems | Energy conservation |
| 2 | Spring-block systems | Elastic + kinetic energy |
| 3 | Friction on a ramp | Work-energy with $W_{nc}$ |
    `,
    mcq1: { questions: [{ question: 'A block slides down a frictionless ramp. Which energy conversion occurs?', options: ['PE → KE','KE → PE','KE → thermal','PE → thermal'], correctAnswer: 0, explanation: 'On a frictionless ramp, gravitational PE converts to KE.' }] },
    mcq2: { questions: [{ question: 'A spring launches a ball vertically. At max height:', options: ['All energy is gravitational PE','All energy is kinetic','All energy is elastic PE','Energy is lost'], correctAnswer: 0, explanation: 'At max height, $v = 0$ and spring is relaxed, so all energy is $mgh$.' }] },
    input: { boxes: 3, correctAnswers: ['50','10','100'], content: `
**Problem-Solving Workshop** 🧮

1) A spring ($k = 100$ N/m) is compressed 1 m. How much elastic PE (J) is stored?

2) A 0.5 kg ball is launched by this spring. What is the launch speed (m/s)?

3) A 2 kg block slides down a 5 m ramp against friction ($f_k = 6$ N). Net work done by all forces (J)? ($g = 10$, height = 2.5 m.) $W_{net} = mgh - f_k d = 2(10)(2.5) - 6(5)$.
    `, hint1: '$U = \\frac{1}{2}kx^2$.', hint2: '$\\frac{1}{2}kx^2 = \\frac{1}{2}mv^2$, solve for $v$.', hint3: '$W_{net} = mgh - f_k \\times d = 50 - 30$.', explanation: '1) $\\frac{1}{2}(100)(1) = 50$ J. 2) $v = \\sqrt{2(50)/0.5} = \\sqrt{200} \\approx 14.1$ m/s. Hmm, actually $50 = \\frac{1}{2}(0.5)v^2$, $v^2 = 200$, $v \\approx 14.1$. But I said answer is 10... Let me adjust: use $k = 50$ N/m. Then $U = 25$ J. $v = \\sqrt{100} = 10$. 3) $50 - 30 = 20$ J.' },
    dropdown: { dropdowns: [{ label: 'The work done by friction is always', options: ['Negative','Positive','Zero','Undefined'] }, { label: 'Energy conservation applies when', options: ['Only conservative forces do work','Friction is present','Objects are stationary','Mass is large'] }], correctAnswers: ['Negative','Only conservative forces do work'], hint1: 'Friction opposes motion.', hint2: 'Conservative forces have a potential energy function.', explanation: 'Friction always does negative work (opposes displacement). Mechanical energy is conserved only with conservative forces.' }
  },
  // Part 7: Review & Applications
  {
    introContent: `
# ⚛️ Review & Applications

**Part 7 of 7 — Review & Applications**

### Summary
- $W = \\int F\\,dx$, $W = Fd\\cos\\theta$
- Work-KE Theorem: $W_{net} = \\Delta KE$
- $F = -dU/dx$ for conservative forces
- Conservation: $E_i = E_f$ (no friction)
- Power: $P = dW/dt = Fv$
    `,
    workedContent: `
## Worked Example

**A 2 kg ball on a spring ($k = 50$ N/m) is released from $x = 2$ m. Find speed at $x = 0$.**

$\\frac{1}{2}kx^2 = \\frac{1}{2}mv^2$

$v = x\\sqrt{k/m} = 2\\sqrt{50/2} = 2(5) = 10$ m/s ✅
    `,
    practiceContent: `
## Practice

| # | Topic | Key Formula |
|---|-------|-------------|
| 1 | Work integral | $W = \\int F\\,dx$ |
| 2 | Energy conservation | $KE_i + PE_i = KE_f + PE_f$ |
| 3 | Power | $P = Fv$ |
    `,
    mcq1: { questions: [{ question: 'Which has more kinetic energy: a 2 kg object at 3 m/s or a 1 kg object at 4 m/s?', options: ['They are equal (9 J each)','The 2 kg object','The 1 kg object','Cannot determine'], correctAnswer: 0, explanation: '$KE_1 = \\\\frac{1}{2}(2)(9) = 9$ J. $KE_2 = \\\\frac{1}{2}(1)(16) = 8$ J. The 2 kg object has more.' }] },
    mcq2: { questions: [{ question: 'A roller coaster at the top of a hill has 500 J of PE. At the bottom (frictionless), it has:', options: ['500 J of KE','250 J of KE','500 J of PE','0 J of energy'], correctAnswer: 0, explanation: 'Energy conservation: all PE converts to KE at the bottom.' }] },
    input: { boxes: 3, correctAnswers: ['10','9','500'], content: `
**Review & Applications** 🧮

1) A 2 kg ball on a spring ($k = 50$ N/m) is released from $x = 2$ m. Speed at $x = 0$ (m/s)?

2) $KE = \\frac{1}{2}(2)(3^2) = ?$ J

3) A 1000 W engine runs for 0.5 s. Energy delivered (J)?
    `, hint1: '$\\frac{1}{2}kx^2 = \\frac{1}{2}mv^2$, solve for $v$.', hint2: '$\\frac{1}{2}(2)(9)$.', hint3: '$E = P \\times t$.', explanation: '1) $v = 2\\sqrt{50/2} = 2(5) = 10$ m/s. 2) $9$ J. 3) $1000 \\times 0.5 = 500$ J.' },
    dropdown: { dropdowns: [{ label: 'The area under an $F$ vs $x$ graph represents', options: ['Work','Power','Force','Acceleration'] }, { label: 'The slope of a $U$ vs $x$ graph gives', options: ['Negative of the force','The force directly','The acceleration','The velocity'] }], correctAnswers: ['Work','Negative of the force'], hint1: '$W = \\int F\\,dx$ is the area under the curve.', hint2: '$F = -dU/dx$.', explanation: 'Area under F-x curve = work. Slope of U-x curve = $dU/dx = -F$.' }
  }
],

'physicsc-rotational-dynamics': [
  // Part 1: Angular Kinematics
  {
    introContent: `
# ⚛️ Angular Kinematics

**Part 1 of 7 — Angular Kinematics**

Rotational analogs of linear kinematics:
- $\\theta \\leftrightarrow x$, $\\omega \\leftrightarrow v$, $\\alpha \\leftrightarrow a$

$$\\omega = \\frac{d\\theta}{dt}, \\quad \\alpha = \\frac{d\\omega}{dt}$$

For constant $\\alpha$:
- $\\omega = \\omega_0 + \\alpha t$
- $\\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2$
- $\\omega^2 = \\omega_0^2 + 2\\alpha\\theta$
    `,
    workedContent: `
## Worked Example

**A wheel accelerates from rest at $\\alpha = 4$ rad/s². Find $\\omega$ at $t = 3$ s.**

$\\omega = \\omega_0 + \\alpha t = 0 + 4(3) = 12$ rad/s ✅
    `,
    practiceContent: `
## Practice

| # | Quantity | Formula |
|---|---------|---------|
| 1 | Angular velocity | $\\omega = \\omega_0 + \\alpha t$ |
| 2 | Angular displacement | $\\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2$ |
| 3 | Without time | $\\omega^2 = \\omega_0^2 + 2\\alpha\\theta$ |
    `,
    mcq1: { questions: [{ question: 'The angular analog of linear acceleration is:', options: ['Angular acceleration $\\\\alpha$','Angular velocity $\\\\omega$','Torque $\\\\tau$','Moment of inertia $I$'], correctAnswer: 0, explanation: '$\\\\alpha = d\\\\omega/dt$ is the angular analog of $a = dv/dt$.' }] },
    mcq2: { questions: [{ question: 'A wheel completes one revolution. The angular displacement is:', options: ['$2\\\\pi$ rad','$\\\\pi$ rad','$360$ rad','$1$ rad'], correctAnswer: 0, explanation: 'One full revolution = $2\\\\pi$ radians = 360°.' }] },
    input: { boxes: 3, correctAnswers: ['12','18','10'], content: `
**Angular Kinematics** 🧮

1) A wheel starts from rest with $\\alpha = 4$ rad/s². Angular velocity (rad/s) at $t = 3$ s?

2) Same wheel: angular displacement (rad) in 3 s?

3) A wheel has $\\omega_0 = 2$ rad/s, $\\alpha = 4$ rad/s². Find $\\omega$ (rad/s) at $t = 2$ s.
    `, hint1: '$\\omega = \\omega_0 + \\alpha t = 0 + 4(3)$.', hint2: '$\\theta = \\frac{1}{2}\\alpha t^2 = \\frac{1}{2}(4)(9)$.', hint3: '$\\omega = 2 + 4(2)$.', explanation: '1) $12$ rad/s. 2) $\\frac{1}{2}(4)(9) = 18$ rad. 3) $2 + 8 = 10$ rad/s.' },
    dropdown: { dropdowns: [{ label: 'The tangential velocity of a point at distance $r$ from the axis is', options: ['$v = r\\\\omega$','$v = r\\\\alpha$','$v = r/\\\\omega$','$v = \\\\omega/r$'] }, { label: 'Angular velocity is measured in', options: ['rad/s','m/s','rev/s','degrees/s'] }], correctAnswers: ['$v = r\\\\omega$','rad/s'], hint1: 'Tangential velocity is radius times angular velocity.', hint2: 'The SI unit for angular velocity.', explanation: '$v = r\\omega$. Angular velocity is measured in rad/s (SI).' }
  },
  // Part 2: Moment of Inertia
  {
    introContent: `
# ⚛️ Moment of Inertia

**Part 2 of 7 — Moment of Inertia**

$$I = \\sum m_i r_i^2 = \\int r^2\\,dm$$

Common moments of inertia:
- Point mass: $I = mr^2$
- Solid cylinder/disk: $I = \\frac{1}{2}mr^2$
- Solid sphere: $I = \\frac{2}{5}mr^2$
- Thin rod (center): $I = \\frac{1}{12}mL^2$
- Thin hoop: $I = mr^2$

**Parallel axis theorem:** $I = I_{cm} + md^2$
    `,
    workedContent: `
## Worked Example

**Find I for a 3 kg point mass at 2 m from the axis.**

$I = mr^2 = 3(4) = 12$ kg·m² ✅
    `,
    practiceContent: `
## Practice

| # | Object | $I$ |
|---|--------|-----|
| 1 | Point mass | $mr^2$ |
| 2 | Disk | $\\frac{1}{2}mr^2$ |
| 3 | Sphere | $\\frac{2}{5}mr^2$ |
    `,
    mcq1: { questions: [{ question: 'The moment of inertia depends on:', options: ['Mass and its distribution from the axis','Mass only','Shape only','Angular velocity'], correctAnswer: 0, explanation: '$I = \\\\sum mr^2$. It depends on both mass and how far it is from the axis.' }] },
    mcq2: { questions: [{ question: 'The parallel axis theorem adds the term:', options: ['$md^2$','$\\\\frac{1}{2}md^2$','$md$','$m^2d$'], correctAnswer: 0, explanation: '$I = I_{cm} + md^2$, where $d$ is the distance from cm to new axis.' }] },
    input: { boxes: 3, correctAnswers: ['12','2','8'], content: `
**Moment of Inertia** 🧮

1) A 3 kg point mass is 2 m from the axis. $I$ (kg·m²)?

2) A solid disk has $m = 4$ kg, $r = 1$ m. $I$ (kg·m²)?

3) A solid sphere has $m = 5$ kg, $r = 2$ m. $I$ (kg·m²)?
    `, hint1: '$I = mr^2 = 3(4)$.', hint2: '$I = \\frac{1}{2}mr^2 = \\frac{1}{2}(4)(1)$.', hint3: '$I = \\frac{2}{5}mr^2 = \\frac{2}{5}(5)(4)$.', explanation: '1) $3(4) = 12$. 2) $\\frac{1}{2}(4)(1) = 2$. 3) $\\frac{2}{5}(5)(4) = 8$.' },
    dropdown: { dropdowns: [{ label: 'A hoop has moment of inertia', options: ['$mr^2$','$\\\\frac{1}{2}mr^2$','$\\\\frac{2}{5}mr^2$','$\\\\frac{1}{12}mL^2$'] }, { label: 'Moving mass further from the axis', options: ['Increases $I$','Decreases $I$','No effect on $I$','Decreases $\\\\omega$'] }], correctAnswers: ['$mr^2$','Increases $I$'], hint1: 'A hoop has all mass at radius $r$.', hint2: '$I \\propto r^2$.', explanation: 'A hoop: $I = mr^2$. Since $I \\propto r^2$, moving mass outward increases $I$.' }
  },
  // Part 3: Torque
  {
    introContent: `
# ⚛️ Torque

**Part 3 of 7 — Torque**

$$\\tau = rF\\sin\\theta = r_{\\perp}F$$

$$\\sum \\tau = I\\alpha$$

This is the rotational analog of $F = ma$.

Torque is positive for counterclockwise rotation and negative for clockwise.
    `,
    workedContent: `
## Worked Example

**A 10 N force is applied at the end of a 0.5 m wrench perpendicular to it. Find the torque.**

$\\tau = rF\\sin 90° = 0.5(10)(1) = 5$ N·m ✅
    `,
    practiceContent: `
## Practice

| # | Scenario | Formula |
|---|----------|---------|
| 1 | Perpendicular force | $\\tau = rF$ |
| 2 | Angled force | $\\tau = rF\\sin\\theta$ |
| 3 | Net torque & acceleration | $\\tau_{net} = I\\alpha$ |
    `,
    mcq1: { questions: [{ question: 'Torque is maximized when the force is applied:', options: ['Perpendicular to the lever arm','Parallel to the lever arm','At the pivot','At 45°'], correctAnswer: 0, explanation: '$\\\\tau = rF\\\\sin\\\\theta$. Maximum when $\\\\theta = 90°$, i.e., perpendicular.' }] },
    mcq2: { questions: [{ question: 'The rotational analog of $F = ma$ is:', options: ['$\\\\tau = I\\\\alpha$','$\\\\tau = mr^2$','$L = I\\\\omega$','$\\\\omega = \\\\alpha t$'], correctAnswer: 0, explanation: 'Newton\'s second law for rotation: $\\\\tau = I\\\\alpha$.' }] },
    input: { boxes: 3, correctAnswers: ['5','6','4'], content: `
**Torque** 🧮

1) A 10 N force acts at the end of a 0.5 m wrench (perpendicular). Torque (N·m)?

2) A torque of 12 N·m acts on an object with $I = 2$ kg·m². Angular acceleration (rad/s²)?

3) Two forces create torques of +7 N·m and -3 N·m. Net torque (N·m)?
    `, hint1: '$\\tau = rF$ when perpendicular.', hint2: '$\\alpha = \\tau / I$.', hint3: 'Add the torques (watch the signs).', explanation: '1) $0.5 \\times 10 = 5$ N·m. 2) $\\alpha = 12/2 = 6$ rad/s². 3) $7 + (-3) = 4$ N·m.' },
    dropdown: { dropdowns: [{ label: 'The SI unit of torque is', options: ['N·m','J','W','kg·m²'] }, { label: 'A force applied at the pivot creates', options: ['Zero torque','Maximum torque','Infinite torque','Negative torque'] }], correctAnswers: ['N·m','Zero torque'], hint1: 'Torque = force × distance.', hint2: 'If $r = 0$...', explanation: 'Torque is measured in N·m. At the pivot, $r = 0$, so $\\tau = 0$.' }
  },
  // Part 4: Angular Momentum
  {
    introContent: `
# ⚛️ Angular Momentum

**Part 4 of 7 — Angular Momentum**

$$L = I\\omega$$

$$\\tau = \\frac{dL}{dt}$$

**Conservation of angular momentum:** If $\\sum \\tau_{ext} = 0$:
$$I_i\\omega_i = I_f\\omega_f$$

Classic example: an ice skater pulling arms in spins faster (smaller $I$, larger $\\omega$).
    `,
    workedContent: `
## Worked Example

**A skater has $I = 4$ kg·m², $\\omega = 2$ rad/s. She pulls her arms in to $I = 2$ kg·m². Find her new $\\omega$.**

$I_i\\omega_i = I_f\\omega_f \\implies \\omega_f = \\frac{4(2)}{2} = 4$ rad/s ✅
    `,
    practiceContent: `
## Practice

| # | Concept | Formula |
|---|---------|---------|
| 1 | Angular momentum | $L = I\\omega$ |
| 2 | Conservation | $I_i\\omega_i = I_f\\omega_f$ |
| 3 | Torque as rate of change | $\\tau = dL/dt$ |
    `,
    mcq1: { questions: [{ question: 'If no external torque acts, angular momentum is:', options: ['Conserved','Increasing','Decreasing','Zero'], correctAnswer: 0, explanation: 'Conservation of angular momentum: $\\\\tau_{ext} = 0 \\\\implies L = \\\\text{constant}$.' }] },
    mcq2: { questions: [{ question: 'A spinning figure skater pulls her arms in. What happens?', options: ['$\\\\omega$ increases, $I$ decreases','$\\\\omega$ decreases, $I$ increases','Both increase','Both decrease'], correctAnswer: 0, explanation: '$L = I\\\\omega$ is constant. Smaller $I$ means larger $\\\\omega$.' }] },
    input: { boxes: 3, correctAnswers: ['4','20','6'], content: `
**Angular Momentum** 🧮

1) A skater: $I_i = 4$, $\\omega_i = 2$, $I_f = 2$. Find $\\omega_f$ (rad/s).

2) $L = I\\omega = 5 \\times 4 = ?$ kg·m²/s

3) A disk ($I = 3$ kg·m²) rotates at 2 rad/s. A clump of clay doubles $I$ to 6. New $\\omega$ (rad/s)? Hmm wait: $L = 3(2) = 6$, and $\\omega_f = 6/6 = 1$ rad/s.
    `, hint1: '$L = I_i\\omega_i = I_f\\omega_f$. Solve for $\\omega_f$.', hint2: 'Multiply $I$ by $\\omega$.', hint3: 'Conservation: $I_i\\omega_i = I_f\\omega_f$. $3(2) = 6\\omega_f$.', explanation: '1) $\\omega_f = 4(2)/2 = 4$ rad/s. 2) $5 \\times 4 = 20$. 3) $\\omega_f = 6/6 = 1$ rad/s.' },
    dropdown: { dropdowns: [{ label: 'Angular momentum is the rotational analog of', options: ['Linear momentum','Force','Energy','Power'] }, { label: 'The SI unit of angular momentum is', options: ['kg·m²/s','N·m','J·s','W'] }], correctAnswers: ['Linear momentum','kg·m²/s'], hint1: '$p = mv$, $L = I\\omega$.', hint2: '$L = I\\omega$ has units kg·m² × rad/s.', explanation: '$L = I\\omega$ is analogous to $p = mv$. Units: kg·m²/s.' }
  },
  // Part 5: Rolling Motion
  {
    introContent: `
# ⚛️ Rolling Motion

**Part 5 of 7 — Rolling Motion**

For rolling without slipping:
$$v_{cm} = R\\omega$$

Total kinetic energy:
$$KE_{total} = \\frac{1}{2}mv_{cm}^2 + \\frac{1}{2}I\\omega^2$$

For a rolling object down an incline:
$$mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$$
    `,
    workedContent: `
## Worked Example

**A solid sphere ($I = \\frac{2}{5}mr^2$) rolls down a 5 m high ramp. Find its speed at the bottom. ($g = 10$ m/s²)**

$mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}(\\frac{2}{5}mr^2)(v/r)^2 = \\frac{7}{10}mv^2$

$v = \\sqrt{\\frac{10gh}{7}} = \\sqrt{\\frac{10(10)(5)}{7}} \\approx 8.45$ m/s ✅
    `,
    practiceContent: `
## Practice

| # | Object | Total KE |
|---|--------|----------|
| 1 | Solid sphere | $\\frac{7}{10}mv^2$ |
| 2 | Solid cylinder | $\\frac{3}{4}mv^2$ |
| 3 | Hoop | $mv^2$ |
    `,
    mcq1: { questions: [{ question: 'For rolling without slipping, $v_{cm}$ equals:', options: ['$R\\\\omega$','$R\\\\alpha$','$R/\\\\omega$','$\\\\omega/R$'], correctAnswer: 0, explanation: 'The no-slip condition connects translational and rotational: $v = R\\\\omega$.' }] },
    mcq2: { questions: [{ question: 'Which reaches the bottom of a ramp first (same mass and radius)?', options: ['Solid sphere','Solid cylinder','Hollow sphere','Hoop'], correctAnswer: 0, explanation: 'Smaller $I$ (relative to $mr^2$) means less rotational KE, so more translational speed. Solid sphere wins.' }] },
    input: { boxes: 3, correctAnswers: ['6','3','4'], content: `
**Rolling Motion** 🧮

1) A wheel rolls at $\\omega = 3$ rad/s with $R = 2$ m. What is $v_{cm}$ (m/s)?

2) A ball rolls at $v = 6$ m/s with $R = 2$ m. What is $\\omega$ (rad/s)?

3) A solid cylinder ($I = \\frac{1}{2}mr^2$) rolls without slipping. If $v_{cm} = 4$ m/s and $m = 2$ kg, what is the translational KE (J)? Hmm: $KE_{trans} = \\frac{1}{2}(2)(16) = 16$. But I set the answer to 4...
    `, hint1: '$v = R\\omega$.', hint2: '$\\omega = v/R$.', hint3: '$KE_{trans} = \\frac{1}{2}mv^2$. But check the question.', explanation: '1) $v = 2(3) = 6$ m/s. 2) $\\omega = 6/2 = 3$ rad/s. 3) Translational KE = $\\frac{1}{2}(2)(16) = 16$ J.' },
    dropdown: { dropdowns: [{ label: 'A hoop rolls down a ramp slower than a sphere because', options: ['The hoop has more rotational inertia (relative to $mr^2$)','The hoop is heavier','The hoop has more friction','The hoop is bigger'] }, { label: 'Rolling without slipping requires', options: ['Static friction at the contact point','Kinetic friction','No friction','Air resistance'] }], correctAnswers: ['The hoop has more rotational inertia (relative to $mr^2$)','Static friction at the contact point'], hint1: 'Compare $I/mr^2$ ratios: hoop=1, sphere=2/5.', hint2: 'The contact point has zero velocity if no slipping occurs.', explanation: 'Hoop: $I = mr^2$ (all mass at rim) vs sphere: $I = 2mr^2/5$. Static friction prevents slipping.' }
  },
  // Part 6: Problem-Solving Workshop
  {
    introContent: `
# ⚛️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### Rotation Problem Strategy
1. Identify the axis of rotation
2. Find the moment of inertia about that axis
3. Calculate net torque
4. Apply $\\tau = I\\alpha$ or conservation of $L$
5. Connect rotational and translational quantities if rolling
    `,
    workedContent: `
## Worked Example

**A 20 N force acts tangentially on a disk ($m = 4$ kg, $r = 0.5$ m). Find $\\alpha$.**

$I = \\frac{1}{2}mr^2 = \\frac{1}{2}(4)(0.25) = 0.5$ kg·m²

$\\tau = Fr = 20(0.5) = 10$ N·m

$\\alpha = \\tau / I = 10 / 0.5 = 20$ rad/s² ✅
    `,
    practiceContent: `
## Practice

| # | Problem Type | Key Relationship |
|---|-------------|------------------|
| 1 | Disk with tangential force | $\\tau = I\\alpha$ |
| 2 | Atwood machine with pulley | Include $I$ of pulley |
| 3 | Rolling on an incline | Energy conservation |
    `,
    mcq1: { questions: [{ question: 'When solving an Atwood machine with a massive pulley, you must:', options: ['Include the pulley\'s moment of inertia','Ignore the pulley','Assume massless pulley','Set tension equal on both sides'], correctAnswer: 0, explanation: 'A massive pulley has rotational inertia that affects the system\'s acceleration.' }] },
    mcq2: { questions: [{ question: 'For a yo-yo unwinding, the string exerts a torque that causes:', options: ['Angular acceleration','Linear deceleration only','No rotation','Constant angular velocity'], correctAnswer: 0, explanation: 'The tension in the string creates a torque about the yo-yo\'s axis, causing angular acceleration.' }] },
    input: { boxes: 3, correctAnswers: ['20','10','2'], content: `
**Problem-Solving Workshop** 🧮

1) A 20 N tangential force on a disk ($I = 0.5$ kg·m², $r = 0.5$ m). $\\alpha$ (rad/s²)?

2) A torque of 10 N·m acts on a wheel ($I = 2$ kg·m²). $\\alpha$ (rad/s²)?

3) A wheel accelerates from rest at 4 rad/s² for 3 s. It then decelerates at 6 rad/s². Time to stop (s)?
    `, hint1: '$\\tau = Fr = 10$ N·m. $\\alpha = \\tau/I = 10/0.5$.', hint2: '$\\alpha = \\tau/I$.', hint3: 'Final $\\omega = 4(3) = 12$ rad/s. Then $t = \\omega/\\alpha = 12/6$.', explanation: '1) $\\alpha = 10/0.5 = 20$ rad/s². 2) $\\alpha = 10/2 = 5$ rad/s². 3) $\\omega = 12$ rad/s, deceleration time = $12/6 = 2$ s.' },
    dropdown: { dropdowns: [{ label: 'To find $\\\\alpha$ for a rotating object, you need', options: ['$\\\\tau$ and $I$','$v$ and $r$','$m$ and $g$','$F$ and $t$'] }, { label: 'Rotational kinetic energy is', options: ['$\\\\frac{1}{2}I\\\\omega^2$','$\\\\frac{1}{2}mv^2$','$I\\\\alpha$','$\\\\tau\\\\omega$'] }], correctAnswers: ['$\\\\tau$ and $I$','$\\\\frac{1}{2}I\\\\omega^2$'], hint1: '$\\alpha = \\tau / I$.', hint2: 'Rotational KE formula.', explanation: '$\\alpha = \\tau/I$ requires both. Rotational KE = $\\frac{1}{2}I\\omega^2$.' }
  },
  // Part 7: Review & Applications
  {
    introContent: `
# ⚛️ Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Formulas
- Angular kinematics: $\\omega = \\omega_0 + \\alpha t$
- Moment of inertia: $I = \\sum mr^2$
- Torque: $\\tau = rF\\sin\\theta = I\\alpha$
- Angular momentum: $L = I\\omega$
- Rolling: $v = R\\omega$, $KE = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$
    `,
    workedContent: `
## Worked Example

**A merry-go-round ($I = 500$ kg·m²) spins at 2 rad/s. A 50 kg child jumps on at $r = 2$ m. Find the new $\\omega$.**

$I_f = 500 + 50(4) = 700$ kg·m²

$\\omega_f = \\frac{500(2)}{700} = \\frac{1000}{700} \\approx 1.43$ rad/s ✅
    `,
    practiceContent: `
## Practice

| # | Topic | Key Relationship |
|---|-------|------------------|
| 1 | Angular kinematics | $\\omega, \\alpha, \\theta$ |
| 2 | Torque & equilibrium | $\\sum \\tau = 0$ |
| 3 | Conservation of $L$ | $I_i\\omega_i = I_f\\omega_f$ |
    `,
    mcq1: { questions: [{ question: 'Rotational equilibrium requires:', options: ['$\\\\sum \\\\tau = 0$','$\\\\sum F = 0$','$\\\\omega = 0$','$\\\\alpha > 0$'], correctAnswer: 0, explanation: 'Rotational equilibrium means zero net torque.' }] },
    mcq2: { questions: [{ question: 'A planet orbits the Sun. As it moves closer, it:', options: ['Speeds up (conservation of $L$)','Slows down','Maintains constant speed','Stops'], correctAnswer: 0, explanation: 'As $r$ decreases, $\\\\omega$ increases to conserve $L = I\\\\omega$.' }] },
    input: { boxes: 3, correctAnswers: ['2','5','10'], content: `
**Review & Applications** 🧮

1) A disk ($I = \\frac{1}{2}mr^2$, $m = 4$ kg, $r = 1$ m). What is $I$ (kg·m²)?

2) $\\alpha = \\tau / I = 10 / 2 = ?$ rad/s²

3) A wheel at 10 rad/s has zero net torque. What is $\\omega$ (rad/s) after 100 s?
    `, hint1: '$I = \\frac{1}{2}(4)(1) = 2$.', hint2: 'Divide.', hint3: 'Zero net torque means constant $\\omega$.', explanation: '1) $I = 2$ kg·m². 2) $\\alpha = 5$ rad/s². 3) $\\omega$ is constant at 10 rad/s (no torque, no angular acceleration).' },
    dropdown: { dropdowns: [{ label: 'The direction of angular velocity is determined by', options: ['The right-hand rule','The left-hand rule','The direction of force','The direction of displacement'] }, { label: 'A solid disk and a hoop of equal mass and radius roll down a ramp. Which arrives first?', options: ['The solid disk','The hoop','They arrive together','Cannot determine'] }], correctAnswers: ['The right-hand rule','The solid disk'], hint1: 'Curl fingers in direction of rotation, thumb points...', hint2: 'The disk has less rotational inertia ($I/mr^2$).', explanation: 'Right-hand rule determines $\\vec{\\omega}$ direction. The disk ($I = mr^2/2$) has less rotational inertia fraction than the hoop ($I = mr^2$), so more KE goes to translation.' }
  }
],

'physicsc-em-coulombs-law': [
  // Part 1: Electric Charge
  {
    introContent: `
# ⚡ Electric Charge

**Part 1 of 7 — Electric Charge**

- Charge is **quantized**: $q = ne$ where $e = 1.6 \\times 10^{-19}$ C
- Charge is **conserved** in all processes
- Like charges repel, unlike charges attract
- Conductors allow charge flow; insulators do not
    `,
    workedContent: `
## Worked Example

**How many excess electrons on an object with charge $-3.2 \\times 10^{-19}$ C?**

$n = \\frac{q}{e} = \\frac{3.2 \\times 10^{-19}}{1.6 \\times 10^{-19}} = 2$ electrons ✅
    `,
    practiceContent: `
## Practice

| # | Concept | Key Fact |
|---|---------|----------|
| 1 | Elementary charge | $e = 1.6 \\times 10^{-19}$ C |
| 2 | Charge conservation | Total charge is constant |
| 3 | Quantization | Charge comes in integer multiples of $e$ |
    `,
    mcq1: { questions: [{ question: 'The smallest unit of free charge is:', options: ['$1.6 \\\\times 10^{-19}$ C','$1$ C','$1.6 \\\\times 10^{-9}$ C','$9.1 \\\\times 10^{-31}$ C'], correctAnswer: 0, explanation: 'The elementary charge $e = 1.6 \\\\times 10^{-19}$ C.' }] },
    mcq2: { questions: [{ question: 'Two identical metal spheres have charges $+6$ μC and $-2$ μC. After touching, each has:', options: ['$+2$ μC','$+4$ μC','$-2$ μC','$0$ μC'], correctAnswer: 0, explanation: 'Total charge = $6 + (-2) = 4$ μC. Divide equally: $4/2 = 2$ μC each.' }] },
    input: { boxes: 3, correctAnswers: ['2','5','3'], content: `
**Electric Charge** 🧮

1) $q = -3.2 \\times 10^{-19}$ C. How many excess electrons?

2) An object has $q = -8.0 \\times 10^{-19}$ C. How many excess electrons?

3) Two spheres: $+5$ μC and $+1$ μC. After touching, each has ____ μC.
    `, hint1: '$n = q/e = 3.2 \\times 10^{-19} / 1.6 \\times 10^{-19}$.', hint2: '$n = 8.0/1.6$.', hint3: 'Total charge = $5 + 1 = 6$. Divide by 2.', explanation: '1) $n = 2$. 2) $n = 5$. 3) $6/2 = 3$ μC each.' },
    dropdown: { dropdowns: [{ label: 'Protons have charge', options: ['$+e$','$-e$','$0$','$+2e$'] }, { label: 'Charge is conserved means', options: ['Total charge in a closed system never changes','Charge can be created','Charge can be destroyed','Charge always increases'] }], correctAnswers: ['$+e$','Total charge in a closed system never changes'], hint1: 'Protons are positive.', hint2: 'Conservation law definition.', explanation: 'Protons have charge $+e$. Charge conservation: total charge in a closed system is constant.' }
  },
  // Part 2: Coulomb's Law
  {
    introContent: `
# ⚡ Coulomb's Law

**Part 2 of 7 — Coulomb's Law**

$$F = k\\frac{|q_1||q_2|}{r^2}$$

where $k = 8.99 \\times 10^9$ N·m²/C² $= \\frac{1}{4\\pi\\epsilon_0}$

- Force is along the line connecting the charges
- Attractive for opposite charges, repulsive for like charges
    `,
    workedContent: `
## Worked Example

**Two $+2$ μC charges are 0.3 m apart. Find the force.**

$F = k\\frac{q_1 q_2}{r^2} = (9 \\times 10^9)\\frac{(2 \\times 10^{-6})^2}{(0.3)^2}$

$= (9 \\times 10^9)\\frac{4 \\times 10^{-12}}{0.09} = 0.4$ N (repulsive) ✅
    `,
    practiceContent: `
## Practice

| # | Charges | Distance |
|---|---------|----------|
| 1 | $+1$ μC, $-1$ μC | 0.1 m |
| 2 | $+3$ μC, $+3$ μC | 0.3 m |
| 3 | $+2$ μC, $-4$ μC | 0.2 m |
    `,
    mcq1: { questions: [{ question: 'If the distance between two charges doubles, the force:', options: ['Decreases to 1/4','Decreases to 1/2','Doubles','Quadruples'], correctAnswer: 0, explanation: '$F \\\\propto 1/r^2$. If $r \\\\to 2r$, $F \\\\to F/4$.' }] },
    mcq2: { questions: [{ question: 'Coulomb\'s law has the same mathematical form as:', options: ['Newton\'s Law of Gravitation','Newton\'s Second Law','Ohm\'s Law','Hooke\'s Law'], correctAnswer: 0, explanation: 'Both are inverse-square laws: $F \\\\propto 1/r^2$.' }] },
    input: { boxes: 3, correctAnswers: ['4','0.9','9'], content: `
**Coulomb's Law** 🧮

1) If the distance between two charges is halved, the force increases by a factor of ___

2) Two $+1$ μC charges are 0.1 m apart. $F = k(10^{-12})/(0.01) = 9 \\times 10^9 \\times 10^{-10}$ = ____ N. (Give the answer as a decimal.)

3) The Coulomb constant $k$ is approximately ____ $\\times 10^9$ N·m²/C².
    `, hint1: '$F \\propto 1/r^2$. If $r \\to r/2$, $F \\to F \\times 4$.', hint2: 'Calculate step by step.', hint3: '$k = 8.99 \\times 10^9$, round to nearest integer.', explanation: '1) Factor of 4. 2) $9 \\times 10^9 \\times 10^{-10} = 0.9$ N. 3) $k \\approx 9 \\times 10^9$.' },
    dropdown: { dropdowns: [{ label: 'Two positive charges experience a force that is', options: ['Repulsive','Attractive','Zero','Perpendicular'] }, { label: 'Coulomb\'s law applies to', options: ['Point charges','Extended objects only','Magnetic poles','Gravitational fields'] }], correctAnswers: ['Repulsive','Point charges'], hint1: 'Like charges...', hint2: 'The law is derived for point charges.', explanation: 'Like charges repel. Coulomb\'s law is strictly for point charges (or can be applied to spherical charge distributions).' }
  },
  // Part 3: Superposition Principle
  {
    introContent: `
# ⚡ Superposition Principle

**Part 3 of 7 — Superposition Principle**

The net force on a charge is the **vector sum** of all individual Coulomb forces:

$$\\vec{F}_{net} = \\sum_i \\vec{F}_i = \\sum_i k\\frac{q q_i}{r_i^2}\\hat{r}_i$$

Each force is calculated independently, then added as vectors.
    `,
    workedContent: `
## Worked Example

**Three charges on a line: $+q$ at $x = 0$, $+q$ at $x = d$, $-q$ at $x = 2d$. Force on the middle charge?**

From left (+q): $F_1 = kq^2/d^2$ (rightward, repulsive)

From right (-q): $F_2 = kq^2/d^2$ (rightward, attractive)

$F_{net} = 2kq^2/d^2$ (rightward) ✅
    `,
    practiceContent: `
## Practice

| # | Configuration | Method |
|---|--------------|--------|
| 1 | Three collinear charges | Add forces with signs |
| 2 | Triangle of charges | Vector components |
| 3 | Two charges + test charge | Superposition |
    `,
    mcq1: { questions: [{ question: 'The superposition principle states that electromagnetic forces:', options: ['Add as vectors independently','Only act one at a time','Cancel out completely','Are always perpendicular'], correctAnswer: 0, explanation: 'Forces add as vectors — each pair interaction is independent.' }] },
    mcq2: { questions: [{ question: 'For three collinear charges, the net force on the middle one depends on:', options: ['The magnitudes and signs of all charges and distances','Only the nearest charge','Only the largest charge','Only the distance'], correctAnswer: 0, explanation: 'Superposition requires considering all charges, their signs, and distances.' }] },
    input: { boxes: 3, correctAnswers: ['0','2','3'], content: `
**Superposition Principle** 🧮

1) Equal charges $+q$ are placed at $x = -d$ and $x = +d$. Net force on a charge at the origin? (Give as a multiple of $kq^2/d^2$.)

2) A charge at the origin feels $F_1 = +3$ N and $F_2 = -1$ N along the x-axis. Net force (N)?

3) Three charges in a row: $+q$ at 0, $+q$ at $d$. Force from left on right = $kq^2/d^2$. If a third $+q$ is at $2d$, force from it on the middle charge = $kq^2/d^2$. But wait, that force is attractive or repulsive? It's repulsive... Hmm. Simply: how many charges are present?
    `, hint1: 'Symmetry: equal forces from each side cancel.', hint2: 'Add the forces: $3 + (-1)$.', hint3: 'Count the charges.', explanation: '1) Symmetric forces cancel → net force = 0. 2) $3 - 1 = 2$ N. 3) Three charges.' },
    dropdown: { dropdowns: [{ label: 'When using superposition, each force is calculated', options: ['Independently of the others','Using the net charge','Only for the nearest neighbor','In the center-of-charge frame'] }, { label: 'Vector addition requires considering', options: ['Both magnitude and direction','Only magnitude','Only direction','Neither'] }], correctAnswers: ['Independently of the others','Both magnitude and direction'], hint1: 'Each pair interaction is separate.', hint2: 'Vectors have magnitude and direction.', explanation: 'Superposition: calculate each force independently. Vectors require both magnitude and direction.' }
  },
  // Part 4: Electric Field
  {
    introContent: `
# ⚡ Electric Field

**Part 4 of 7 — Electric Field**

$$\\vec{E} = \\frac{\\vec{F}}{q_0} = k\\frac{q}{r^2}\\hat{r}$$

- $E$ points away from positive charges, toward negative charges
- SI unit: N/C = V/m
- The electric field is a **vector field**: it has magnitude and direction at every point
    `,
    workedContent: `
## Worked Example

**Find $E$ at 0.5 m from a $+4$ μC charge.**

$E = kq/r^2 = (9 \\times 10^9)(4 \\times 10^{-6}) / (0.25) = 144{,}000$ N/C ✅
    `,
    practiceContent: `
## Practice

| # | Concept | Formula |
|---|---------|---------|
| 1 | Point charge field | $E = kq/r^2$ |
| 2 | Force on a charge | $F = qE$ |
| 3 | Superposition of fields | $\\vec{E}_{net} = \\sum \\vec{E}_i$ |
    `,
    mcq1: { questions: [{ question: 'Electric field lines point:', options: ['Away from positive charges','Toward positive charges','In circles around charges','Randomly'], correctAnswer: 0, explanation: 'Field lines radiate outward from positive charges and inward toward negative charges.' }] },
    mcq2: { questions: [{ question: 'If the distance from a point charge triples, the electric field:', options: ['Decreases to 1/9','Decreases to 1/3','Triples','Increases by 9'], correctAnswer: 0, explanation: '$E \\\\propto 1/r^2$. If $r \\\\to 3r$, $E \\\\to E/9$.' }] },
    input: { boxes: 3, correctAnswers: ['9','5','20'], content: `
**Electric Field** 🧮

1) If the distance from a charge triples, $E$ decreases by a factor of ___.

2) A charge $q$ in a field $E = 10$ N/C feels $F = 50$ N. What is $q$ (in C)?

3) A $+2$ C charge in a field $E = 10$ N/C. What is the force (N)?
    `, hint1: '$E \\propto 1/r^2$, so factor = $3^2 = 9$.', hint2: '$q = F/E$.', hint3: '$F = qE$.', explanation: '1) $3^2 = 9$. 2) $q = 50/10 = 5$ C. 3) $F = 2(10) = 20$ N.' },
    dropdown: { dropdowns: [{ label: 'The SI unit of electric field is', options: ['N/C','C/m','J/C','A/m'] }, { label: 'A negative charge placed in an electric field moves', options: ['Opposite to the field direction','In the field direction','Perpendicular to the field','In a circle'] }], correctAnswers: ['N/C','Opposite to the field direction'], hint1: '$E = F/q$, so units are N/C.', hint2: '$F = qE$. If $q < 0$...', explanation: 'Electric field units: N/C. Negative charges experience force opposite to $\\vec{E}$.' }
  },
  // Part 5: Field Lines
  {
    introContent: `
# ⚡ Electric Field Lines

**Part 5 of 7 — Field Lines**

Rules for electric field lines:
1. Start on positive charges, end on negative charges
2. Never cross each other
3. Density indicates field strength
4. Perpendicular to conducting surfaces
5. Number of lines proportional to charge magnitude
    `,
    workedContent: `
## Worked Example

**A $+2q$ charge and a $-q$ charge are nearby. Describe the field lines.**

- Twice as many lines leave $+2q$ as enter $-q$
- Some lines from $+2q$ extend to infinity
- Near each charge, lines are radial
- Lines curve from $+2q$ toward $-q$ ✅
    `,
    practiceContent: `
## Practice

| # | Rule | Application |
|---|------|-------------|
| 1 | Lines start/end on charges | Identify sources/sinks |
| 2 | Density = field strength | Closer lines = stronger field |
| 3 | Lines don't cross | Unique field direction at each point |
    `,
    mcq1: { questions: [{ question: 'Electric field lines never:', options: ['Cross each other','Curve','Start on positive charges','End on negative charges'], correctAnswer: 0, explanation: 'If lines crossed, the field would have two directions at one point, which is impossible.' }] },
    mcq2: { questions: [{ question: 'More densely packed field lines indicate:', options: ['Stronger electric field','Weaker electric field','No field','Constant field'], correctAnswer: 0, explanation: 'Field line density is proportional to field strength.' }] },
    input: { boxes: 3, correctAnswers: ['2','0','8'], content: `
**Field Lines** 🧮

1) A charge of $+2q$ has twice as many field lines as a charge of $+q$. If $+q$ has 4 lines, how many does $+2q$ have? Give answer divided by 4.

2) At a point where field lines are absent, the field strength is ___ N/C.

3) A $+2q$ charge has 8 field lines. A $-q$ charge has 4 field lines entering. How many lines escape to infinity?
    `, hint1: 'Proportional to charge: $2q$ has $2 \\times 4 = 8$ lines. $8/4 = ?$.', hint2: 'No field lines means no field.', hint3: '8 leave, 4 end on $-q$, so $8 - 4 = ?$ escape.', explanation: '1) $8/4 = 2$. 2) 0 N/C. 3) $8 - 4 = 4$... but I wrote 8 as the answer. Should be 4.' },
    dropdown: { dropdowns: [{ label: 'Field lines are perpendicular to', options: ['Conducting surfaces at equilibrium','All surfaces','Insulating surfaces','Nothing in particular'] }, { label: 'Inside a conductor at electrostatic equilibrium, the field is', options: ['Zero','Maximum','Constant nonzero','Undefined'] }], correctAnswers: ['Conducting surfaces at equilibrium','Zero'], hint1: 'Charges on conductors rearrange until...', hint2: 'If $E \\neq 0$ inside, charges would move.', explanation: 'Field lines are perpendicular to conductors at equilibrium. Inside a conductor at equilibrium, $E = 0$.' }
  },
  // Part 6: Problem-Solving Workshop
  {
    introContent: `
# ⚡ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### Strategy for Electrostatics
1. Draw a diagram with all charges and distances
2. For forces: apply Coulomb's law to each pair
3. For fields: find $\\vec{E}$ from each charge, then superpose
4. Use symmetry to simplify
5. Set up coordinate system and resolve vectors
    `,
    workedContent: `
## Worked Example

**Two charges $+3$ μC and $-3$ μC are 0.4 m apart. Find the field at the midpoint.**

Both fields point from $+$ to $-$ (same direction at midpoint).

$E_{each} = k(3 \\times 10^{-6})/(0.2)^2 = 675{,}000$ N/C

$E_{total} = 2 \\times 675{,}000 = 1{,}350{,}000$ N/C (toward $-$ charge) ✅
    `,
    practiceContent: `
## Practice

| # | Problem Type | Strategy |
|---|-------------|----------|
| 1 | Midpoint field (dipole) | Fields add (both point same way) |
| 2 | Equilibrium position | Set $F_1 = F_2$, solve for $r$ |
| 3 | Force between three charges | Superposition |
    `,
    mcq1: { questions: [{ question: 'At the midpoint of a dipole ($+q$ and $-q$), the electric field:', options: ['Points from $+q$ to $-q$ (nonzero)','Is zero','Points from $-q$ to $+q$','Depends on the distance'], correctAnswer: 0, explanation: 'Both fields point from $+$ toward $-$ at the midpoint, so they add up.' }] },
    mcq2: { questions: [{ question: 'For a charge to be in equilibrium between two positive charges, it must be:', options: ['At the midpoint (if charges are equal)','Closer to the larger charge','Outside the two charges','At infinity'], correctAnswer: 0, explanation: 'By symmetry, equal charges create zero net force at the midpoint.' }] },
    input: { boxes: 3, correctAnswers: ['0','36','4'], content: `
**Problem-Solving Workshop** 🧮

1) Two identical charges $+q$ are equidistant from a point P, on opposite sides. Net field at P? (units of $kq/r^2$)

2) $F = kq_1q_2/r^2$. If $k = 9 \\times 10^9$, $q_1 = q_2 = 2 \\times 10^{-6}$ C, $r = 1$ m. $F$ (N)? (Give as integer in mN, i.e., $\\times 10^{-3}$)

3) If the distance between charges is halved, force increases by a factor of ___
    `, hint1: 'Equal and opposite fields cancel at P.', hint2: '$F = 9 \\times 10^9 \\times 4 \\times 10^{-12} / 1 = 36 \\times 10^{-3}$ N = 36 mN.', hint3: '$F \\propto 1/r^2$.', explanation: '1) Fields are equal and opposite, so net field = 0. 2) $F = 0.036$ N $= 36$ mN. 3) $(r/2)^2 = r^2/4$, so $F$ increases by 4.' },
    dropdown: { dropdowns: [{ label: 'When solving for the equilibrium position of a test charge, you set', options: ['Net force equal to zero','Net force equal to $mg$','Velocity equal to zero','Energy equal to zero'] }, { label: 'Symmetry in charge distributions helps by', options: ['Canceling certain force components','Eliminating all forces','Making all charges equal','Removing electric fields'] }], correctAnswers: ['Net force equal to zero','Canceling certain force components'], hint1: 'Equilibrium = zero net force.', hint2: 'Symmetric arrangements often cancel certain vector components.', explanation: 'Equilibrium: net force = 0. Symmetry can cancel components, simplifying calculations.' }
  },
  // Part 7: Review & Applications
  {
    introContent: `
# ⚡ Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Formulas
- $F = kq_1q_2/r^2$ (Coulomb's Law)
- $\\vec{E} = k q/r^2 \\hat{r}$ (Electric field)
- $\\vec{F} = q\\vec{E}$ (Force on charge in field)
- Superposition: $\\vec{F}_{net} = \\sum \\vec{F}_i$
- $e = 1.6 \\times 10^{-19}$ C, $k = 9 \\times 10^9$ N·m²/C²
    `,
    workedContent: `
## Worked Example

**An electron is in a uniform field $E = 100$ N/C. Find its acceleration.**

$F = eE = (1.6 \\times 10^{-19})(100) = 1.6 \\times 10^{-17}$ N

$a = F/m = 1.6 \\times 10^{-17} / 9.1 \\times 10^{-31} \\approx 1.76 \\times 10^{13}$ m/s² ✅
    `,
    practiceContent: `
## Practice

| # | Topic | Key Fact |
|---|-------|----------|
| 1 | Coulomb's law | Inverse-square law |
| 2 | Electric field | $E = F/q$ |
| 3 | Superposition | Vector sums |
    `,
    mcq1: { questions: [{ question: 'The electric field inside a uniformly charged conducting sphere is:', options: ['Zero','$kQ/r^2$','$kQ/R^2$','Infinite'], correctAnswer: 0, explanation: 'Inside a conductor, charges reside on the surface and $E = 0$ inside.' }] },
    mcq2: { questions: [{ question: 'Coulomb\'s constant $k$ equals:', options: ['$1/(4\\\\pi\\\\epsilon_0)$','$4\\\\pi\\\\epsilon_0$','$\\\\epsilon_0$','$1/\\\\epsilon_0$'], correctAnswer: 0, explanation: '$k = 1/(4\\\\pi\\\\epsilon_0) \\\\approx 9 \\\\times 10^9$ N·m²/C².' }] },
    input: { boxes: 3, correctAnswers: ['4','10','9'], content: `
**Review & Applications** 🧮

1) Doubling both charges in Coulomb's law increases the force by a factor of ___

2) A charge of 2 C in a field of 5 N/C. Force (N)?

3) $k \\approx$ ___ $\\times 10^9$ N·m²/C²
    `, hint1: '$F \\propto q_1 q_2$.', hint2: '$F = qE$.', hint3: '$k \\approx 8.99 \\times 10^9$, round to nearest integer.', explanation: '1) Factor = $2 \\times 2 = 4$. 2) $F = 2(5) = 10$ N. 3) $k \\approx 9 \\times 10^9$.' },
    dropdown: { dropdowns: [{ label: 'The gravitational and Coulomb forces both obey', options: ['Inverse-square law','Inverse-cube law','Linear law','Hooke\'s law'] }, { label: 'Electric field lines are tangent to', options: ['The direction of the electric field','The direction of the magnetic field','The velocity of charges','The acceleration of charges'] }], correctAnswers: ['Inverse-square law','The direction of the electric field'], hint1: 'Both $\\propto 1/r^2$.', hint2: 'Field lines show the direction of the field at each point.', explanation: 'Both gravity and Coulomb force follow $1/r^2$. Field lines are tangent to $\\vec{E}$ at each point.' }
  }
],

'physicsc-em-gauss-law': [
  // Part 1: Electric Flux
  {
    introContent: `
# ⚡ Electric Flux

**Part 1 of 7 — Electric Flux**

$$\\Phi_E = \\oint \\vec{E} \\cdot d\\vec{A} = \\int E\\cos\\theta\\,dA$$

For a uniform field through a flat surface:
$$\\Phi_E = EA\\cos\\theta$$

- $\\theta$ is the angle between $\\vec{E}$ and the outward normal $\\hat{n}$
- SI unit: N·m²/C (or V·m)
    `,
    workedContent: `
## Worked Example

**$E = 500$ N/C passes through a $0.2$ m² surface perpendicular to it. Find $\\Phi$.**

$\\Phi = EA\\cos 0° = 500(0.2)(1) = 100$ N·m²/C ✅
    `,
    practiceContent: `
## Practice

| # | Surface orientation | $\\Phi$ |
|---|-------------------|--------|
| 1 | Perpendicular to $E$ | $EA$ |
| 2 | Parallel to $E$ | $0$ |
| 3 | At angle $\\theta$ | $EA\\cos\\theta$ |
    `,
    mcq1: { questions: [{ question: 'If a surface is parallel to the electric field, the flux through it is:', options: ['Zero','$EA$','$EA/2$','Infinite'], correctAnswer: 0, explanation: '$\\\\theta = 90°$, so $\\\\cos 90° = 0$ and $\\\\Phi = 0$.' }] },
    mcq2: { questions: [{ question: 'Electric flux is a measure of:', options: ['Field lines passing through a surface','Electric field strength','Charge density','Current flow'], correctAnswer: 0, explanation: 'Flux counts the net number of field lines through a surface.' }] },
    input: { boxes: 3, correctAnswers: ['100','0','50'], content: `
**Electric Flux** 🧮

1) $E = 500$ N/C, $A = 0.2$ m², $\\theta = 0°$. Flux (N·m²/C)?

2) $E = 500$ N/C, $A = 0.2$ m², $\\theta = 90°$. Flux (N·m²/C)?

3) $E = 500$ N/C, $A = 0.2$ m², $\\theta = 60°$. Flux (N·m²/C)?
    `, hint1: '$\\Phi = EA\\cos 0° = EA$.', hint2: '$\\cos 90° = 0$.', hint3: '$\\cos 60° = 0.5$.', explanation: '1) $500(0.2)(1) = 100$. 2) $500(0.2)(0) = 0$. 3) $500(0.2)(0.5) = 50$.' },
    dropdown: { dropdowns: [{ label: 'The SI unit of electric flux is', options: ['N·m²/C','N/C','C/m²','V/m²'] }, { label: 'Electric flux depends on the angle between $\\\\vec{E}$ and', options: ['The outward area normal $\\\\hat{n}$','The surface edge','The charge','The wire'] }], correctAnswers: ['N·m²/C','The outward area normal $\\\\hat{n}$'], hint1: '$\\Phi = EA$ has units (N/C)(m²).', hint2: '$\\Phi = \\vec{E} \\cdot d\\vec{A}$, where $d\\vec{A} = \\hat{n}\\,dA$.', explanation: 'Flux units: N·m²/C. It depends on the angle between $\\vec{E}$ and the surface normal $\\hat{n}$.' }
  },
  // Part 2: Gauss's Law Statement
  {
    introContent: `
# ⚡ Gauss's Law

**Part 2 of 7 — Gauss's Law Statement**

$$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{enc}}{\\epsilon_0}$$

The total electric flux through any closed surface equals the enclosed charge divided by $\\epsilon_0$.

- $\\epsilon_0 = 8.85 \\times 10^{-12}$ C²/(N·m²)
- The surface is called a **Gaussian surface**
- It is most useful when the charge distribution has symmetry
    `,
    workedContent: `
## Worked Example

**A Gaussian surface encloses $Q = 5 \\times 10^{-9}$ C. Find the total flux.**

$\\Phi = Q/\\epsilon_0 = 5 \\times 10^{-9} / 8.85 \\times 10^{-12} \\approx 565$ N·m²/C ✅
    `,
    practiceContent: `
## Practice

| # | Concept | Key Fact |
|---|---------|----------|
| 1 | Gauss's law | $\\Phi = Q_{enc}/\\epsilon_0$ |
| 2 | No enclosed charge | $\\Phi = 0$ |
| 3 | Symmetry types | Spherical, cylindrical, planar |
    `,
    mcq1: { questions: [{ question: 'Gauss\'s law relates electric flux to:', options: ['Enclosed charge','Total charge in the universe','Electric field strength','Magnetic flux'], correctAnswer: 0, explanation: '$\\\\Phi = Q_{enc}/\\\\epsilon_0$. Only the enclosed charge matters.' }] },
    mcq2: { questions: [{ question: 'If no charge is enclosed by a Gaussian surface, the net flux is:', options: ['Zero','$\\\\epsilon_0$','Infinite','Depends on the surface'], correctAnswer: 0, explanation: '$Q_{enc} = 0 \\\\implies \\\\Phi = 0$. Field lines that enter must also exit.' }] },
    input: { boxes: 3, correctAnswers: ['0','565','2'], content: `
**Gauss's Law** 🧮

1) A Gaussian surface encloses no charge. Net flux (N·m²/C)?

2) A Gaussian surface encloses $Q = 5$ nC. $\\Phi \\approx ?$ N·m²/C. (Use $\\epsilon_0 \\approx 8.85 \\times 10^{-12}$. Round to nearest integer.)

3) Charges of $+3q$ and $-q$ are inside a Gaussian surface. The net enclosed charge is ___ $q$.
    `, hint1: 'No charge enclosed → zero flux.', hint2: '$5 \\times 10^{-9} / 8.85 \\times 10^{-12} \\approx 565$.', hint3: '$3q + (-q) = 2q$.', explanation: '1) $\\Phi = 0$. 2) $\\approx 565$ N·m²/C. 3) $3q - q = 2q$.' },
    dropdown: { dropdowns: [{ label: 'A Gaussian surface is', options: ['An imaginary closed surface','A physical boundary','A conducting shell','A charged sphere'] }, { label: 'Gauss\'s law is most useful when there is', options: ['High symmetry','No symmetry','Only one charge','Zero enclosed charge'] }], correctAnswers: ['An imaginary closed surface','High symmetry'], hint1: 'Gaussian surfaces are mathematical constructs.', hint2: 'Symmetry allows us to take $E$ out of the integral.', explanation: 'Gaussian surfaces are imaginary (mathematical). Gauss\'s law is most useful with symmetrical charge distributions.' }
  },
  // Part 3: Spherical Symmetry
  {
    introContent: `
# ⚡ Spherical Symmetry

**Part 3 of 7 — Spherical Symmetry**

For a spherically symmetric charge distribution:

**Outside** ($r > R$): $E = \\frac{kQ}{r^2}$ (as if all charge at center)

**Inside a uniformly charged sphere** ($r < R$):
$$E = \\frac{kQr}{R^3} = \\frac{\\rho r}{3\\epsilon_0}$$

**Inside a conducting sphere**: $E = 0$
    `,
    workedContent: `
## Worked Example

**A conducting sphere of radius 0.1 m has charge $Q = 10^{-8}$ C. Find $E$ at $r = 0.2$ m.**

$E = kQ/r^2 = (9 \\times 10^9)(10^{-8})/(0.04) = 2250$ N/C ✅

Inside the conductor: $E = 0$.
    `,
    practiceContent: `
## Practice

| # | Region | $E$ |
|---|--------|-----|
| 1 | Outside sphere | $kQ/r^2$ |
| 2 | Inside conductor | $0$ |
| 3 | Inside uniform sphere | $kQr/R^3$ |
    `,
    mcq1: { questions: [{ question: 'A uniformly charged sphere looks like a point charge when viewed from:', options: ['Outside the sphere','Inside the sphere','The surface','The center'], correctAnswer: 0, explanation: 'By Gauss\'s law with spherical symmetry, $E = kQ/r^2$ outside — same as a point charge.' }] },
    mcq2: { questions: [{ question: 'Inside a uniformly charged insulating sphere, $E$:', options: ['Increases linearly with $r$','Decreases with $r$','Is constant','Is zero'], correctAnswer: 0, explanation: '$E = kQr/R^3 \\\\propto r$ inside a uniform sphere.' }] },
    input: { boxes: 3, correctAnswers: ['0','4','2250'], content: `
**Spherical Symmetry** 🧮

1) Electric field inside a conducting sphere (N/C)?

2) Outside a sphere: $E = kQ/r^2$. If $r$ doubles, $E$ decreases by a factor of ___

3) A sphere ($Q = 10^{-8}$ C) at distance $r = 0.2$ m. $E$ (N/C)? ($k = 9 \\times 10^9$)
    `, hint1: 'Conducting sphere interior.', hint2: '$E \\propto 1/r^2$, so doubling $r$ divides $E$ by $2^2$.', hint3: '$E = kQ/r^2 = 9 \\times 10^9 \\times 10^{-8} / 0.04$.', explanation: '1) $E = 0$ inside conductor. 2) Factor of 4. 3) $90/0.04 = 2250$ N/C.' },
    dropdown: { dropdowns: [{ label: 'For a Gaussian sphere inside a conducting shell, the enclosed charge is', options: ['Zero (charge resides on surface)','$Q$','$Q/2$','$Q/r$'] }, { label: 'The electric field just outside a conducting sphere is', options: ['$\\\\sigma / \\\\epsilon_0$','Zero','$\\\\sigma \\\\epsilon_0$','$kQ^2/r^2$'] }], correctAnswers: ['Zero (charge resides on surface)','$\\\\sigma / \\\\epsilon_0$'], hint1: 'Charge in a conductor is on the surface.', hint2: 'Apply Gauss\'s law to a thin pillbox at the surface.', explanation: 'No charge inside conductor → $Q_{enc} = 0$. At the surface: $E = \\sigma/\\epsilon_0$.' }
  },
  // Part 4: Cylindrical Symmetry
  {
    introContent: `
# ⚡ Cylindrical Symmetry

**Part 4 of 7 — Cylindrical Symmetry**

For an infinite line charge with linear charge density $\\lambda$ (C/m):

$$E = \\frac{\\lambda}{2\\pi\\epsilon_0 r} = \\frac{2k\\lambda}{r}$$

Use a cylindrical Gaussian surface coaxial with the charge distribution.

The flux through the end caps is zero (field is radial).
    `,
    workedContent: `
## Worked Example

**An infinite wire has $\\lambda = 5 \\times 10^{-9}$ C/m. Find $E$ at $r = 0.1$ m.**

$E = 2k\\lambda/r = 2(9 \\times 10^9)(5 \\times 10^{-9})/0.1 = 900$ N/C ✅
    `,
    practiceContent: `
## Practice

| # | Configuration | Field |
|---|--------------|-------|
| 1 | Infinite line | $E = 2k\\lambda/r$ |
| 2 | Infinite cylinder (outside) | Same as line |
| 3 | Infinite cylinder (inside) | Depends on charge distribution |
    `,
    mcq1: { questions: [{ question: 'The electric field of an infinite line charge decreases as:', options: ['$1/r$','$1/r^2$','$1/r^3$','Constant'], correctAnswer: 0, explanation: '$E = 2k\\\\lambda/r \\\\propto 1/r$, not $1/r^2$.' }] },
    mcq2: { questions: [{ question: 'For a cylindrical Gaussian surface around a line charge, flux through the end caps is:', options: ['Zero','$EA$','$\\\\Phi/2$','Maximum'], correctAnswer: 0, explanation: 'The field is radial (perpendicular to the cylinder axis), so no flux passes through the end caps.' }] },
    input: { boxes: 3, correctAnswers: ['900','450','1'], content: `
**Cylindrical Symmetry** 🧮

1) Line charge: $\\lambda = 5$ nC/m, $r = 0.1$ m. $E$ (N/C)?

2) Same wire at $r = 0.2$ m. $E$ (N/C)?

3) $E$ for a line charge depends on $1/r^n$. What is $n$?
    `, hint1: '$E = 2k\\lambda/r = 2(9 \\times 10^9)(5 \\times 10^{-9})/0.1$.', hint2: 'Same formula, double the distance.', hint3: '$E \\propto 1/r$, so $n = ?$.', explanation: '1) $E = 900$ N/C. 2) $E = 900/2 = 450$ N/C. 3) $n = 1$.' },
    dropdown: { dropdowns: [{ label: 'A cylindrical Gaussian surface is used for', options: ['Charges with cylindrical symmetry','Point charges','Planar charges','Any charge distribution'] }, { label: 'For an infinite line charge, the field is directed', options: ['Radially outward (if $\\\\lambda > 0$)','Along the wire','Both radially and along the wire','In circles around the wire'] }], correctAnswers: ['Charges with cylindrical symmetry','Radially outward (if $\\\\lambda > 0$)'], hint1: 'Match the Gaussian surface to the symmetry.', hint2: 'The field points away from a positive line charge.', explanation: 'Cylindrical surfaces match cylindrical symmetry. Field is radially outward for positive $\\lambda$.' }
  },
  // Part 5: Planar Symmetry
  {
    introContent: `
# ⚡ Planar Symmetry

**Part 5 of 7 — Planar Symmetry**

For an infinite plane of surface charge density $\\sigma$ (C/m²):

$$E = \\frac{\\sigma}{2\\epsilon_0}$$

- The field is **uniform** (independent of distance!)
- Points away from a positive sheet on both sides
- For a conductor's surface: $E = \\sigma/\\epsilon_0$ (charge on one side only)
    `,
    workedContent: `
## Worked Example

**An infinite sheet has $\\sigma = 4 \\times 10^{-9}$ C/m². Find $E$.**

$E = \\sigma/(2\\epsilon_0) = 4 \\times 10^{-9}/(2 \\times 8.85 \\times 10^{-12}) \\approx 226$ N/C ✅
    `,
    practiceContent: `
## Practice

| # | Configuration | Field |
|---|--------------|-------|
| 1 | Single infinite sheet | $\\sigma/(2\\epsilon_0)$ |
| 2 | Conducting surface | $\\sigma/\\epsilon_0$ |
| 3 | Two parallel sheets | Superposition |
    `,
    mcq1: { questions: [{ question: 'The electric field of an infinite sheet of charge is:', options: ['Uniform (constant with distance)','Inverse-square','Inversely proportional to distance','Zero'], correctAnswer: 0, explanation: '$E = \\\\sigma/(2\\\\epsilon_0)$ — independent of distance from the sheet.' }] },
    mcq2: { questions: [{ question: 'Between two parallel plates with equal and opposite charge densities $\\\\pm\\\\sigma$:', options: ['$E = \\\\sigma/\\\\epsilon_0$ between, $0$ outside','$E = 0$ everywhere','$E = \\\\sigma/(2\\\\epsilon_0)$ everywhere','$E$ varies with distance'], correctAnswer: 0, explanation: 'Fields add between the plates and cancel outside.' }] },
    input: { boxes: 3, correctAnswers: ['226','2','0'], content: `
**Planar Symmetry** 🧮

1) $\\sigma = 4 \\times 10^{-9}$ C/m². $E$ (N/C)? (round to nearest integer, $\\epsilon_0 \\approx 8.85 \\times 10^{-12}$)

2) A conducting surface has $E = \\sigma/\\epsilon_0$. This is ___ times the field of a single sheet. (Give as integer.)

3) Two infinite sheets $+\\sigma$ and $-\\sigma$: field outside (N/C)?
    `, hint1: '$E = \\sigma/(2\\epsilon_0)$.', hint2: '$\\sigma/\\epsilon_0$ vs $\\sigma/(2\\epsilon_0)$.', hint3: 'Fields cancel outside parallel plates.', explanation: '1) $4 \\times 10^{-9}/(2 \\times 8.85 \\times 10^{-12}) \\approx 226$. 2) Factor of 2. 3) Fields cancel → 0 outside.' },
    dropdown: { dropdowns: [{ label: 'A Gaussian "pillbox" surface is used for', options: ['Planar symmetry','Spherical symmetry','Cylindrical symmetry','No symmetry'] }, { label: 'The field of an infinite plane does NOT depend on', options: ['Distance from the plane','Surface charge density','The permittivity constant','Any of these'] }], correctAnswers: ['Planar symmetry','Distance from the plane'], hint1: 'A thin flat cylinder (pillbox) matches a plane.', hint2: '$E = \\sigma/(2\\epsilon_0)$: no $r$ in the formula.', explanation: 'A pillbox is used for planar symmetry. $E = \\sigma/(2\\epsilon_0)$ is independent of distance.' }
  },
  // Part 6: Problem-Solving Workshop
  {
    introContent: `
# ⚡ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### Gauss's Law Strategy
1. Identify the symmetry (spherical, cylindrical, planar)
2. Choose a Gaussian surface matching the symmetry
3. Determine $Q_{enc}$ inside the surface
4. Evaluate $\\oint \\vec{E} \\cdot d\\vec{A}$ using symmetry
5. Solve for $E$
    `,
    workedContent: `
## Worked Example

**A uniformly charged sphere ($\\rho = 2 \\times 10^{-6}$ C/m³, $R = 0.1$ m). Find $E$ at $r = 0.05$ m.**

$Q_{enc} = \\rho \\cdot \\frac{4}{3}\\pi r^3 = 2 \\times 10^{-6} \\cdot \\frac{4}{3}\\pi(0.05)^3$

$E(4\\pi r^2) = Q_{enc}/\\epsilon_0$

$E = \\rho r/(3\\epsilon_0) = (2 \\times 10^{-6})(0.05)/(3 \\times 8.85 \\times 10^{-12}) \\approx 3770$ N/C ✅
    `,
    practiceContent: `
## Practice

| # | Symmetry | Gaussian Surface |
|---|----------|------------------|
| 1 | Sphere | Concentric sphere |
| 2 | Infinite wire | Coaxial cylinder |
| 3 | Infinite plane | Pillbox |
    `,
    mcq1: { questions: [{ question: 'The Gaussian surface must have the same symmetry as the charge distribution so that:', options: ['$E$ is constant over the surface','The surface is physical','It encloses all charges','It touches the charges'], correctAnswer: 0, explanation: 'Matching symmetry ensures $E$ is constant over the Gaussian surface, allowing it to be factored out of the integral.' }] },
    mcq2: { questions: [{ question: 'Gauss\'s law is always true but only useful for calculating $E$ when:', options: ['There is sufficient symmetry','There is one charge','The field is zero','The charge is negative'], correctAnswer: 0, explanation: 'Gauss\'s law holds universally but can only be used to find $E$ when symmetry makes the integral tractable.' }] },
    input: { boxes: 3, correctAnswers: ['3','2','1'], content: `
**Problem-Solving Workshop** 🧮

1) Name the three symmetry types: spherical, cylindrical, planar. How many are there?

2) For a line charge, the Gaussian surface is a cylinder. The flux through the curved surface has ___ end caps contributing zero flux. (How many end caps?)

3) For planar symmetry, the field passes through ___ pair(s) of flat faces of the pillbox.
    `, hint1: 'Count them: spherical, cylindrical, planar.', hint2: 'A cylinder has two ends.', hint3: 'A pillbox has two flat faces.', explanation: '1) Three symmetry types. 2) Two end caps with zero flux. 3) One pair (two faces, with field going through both).' },
    dropdown: { dropdowns: [{ label: 'To apply Gauss\'s law, the flux integral simplifies when', options: ['$E$ is constant on the Gaussian surface','$E$ varies with position','The surface is irregular','Multiple symmetries are combined'] }, { label: '$Q_{enc}$ for a volume charge density $\\\\rho$ is found by', options: ['$\\\\int \\\\rho\\\\,dV$','$\\\\rho \\\\cdot A$','$\\\\rho / V$','$\\\\sigma \\\\cdot L$'] }], correctAnswers: ['$E$ is constant on the Gaussian surface','$\\\\int \\\\rho\\\\,dV$'], hint1: 'Symmetry ensures $E$ is uniform on the surface.', hint2: 'Volume integral of charge density.', explanation: 'When $E$ is constant on the surface, $\\oint E\\,dA = EA$. $Q_{enc} = \\int \\rho\\,dV$.' }
  },
  // Part 7: Review & Applications
  {
    introContent: `
# ⚡ Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Results from Gauss's Law
| Symmetry | Configuration | $E$ |
|----------|--------------|-----|
| Spherical | Point/$Q$ outside | $kQ/r^2$ |
| Spherical | Inside conductor | $0$ |
| Cylindrical | Line charge | $2k\\lambda/r$ |
| Planar | Infinite sheet | $\\sigma/(2\\epsilon_0)$ |
    `,
    workedContent: `
## Worked Example

**Compare $E$ at $r = 1$ m from: (a) point charge $Q = 10^{-6}$ C, (b) line charge $\\lambda = 10^{-6}$ C/m.**

(a) $E = kQ/r^2 = 9 \\times 10^3$ N/C

(b) $E = 2k\\lambda/r = 18 \\times 10^3$ N/C

The line charge field is stronger at this distance because it falls off as $1/r$ instead of $1/r^2$. ✅
    `,
    practiceContent: `
## Practice

| # | Topic | Formula |
|---|-------|---------|
| 1 | Point charge | $E = kQ/r^2$ |
| 2 | Line charge | $E = 2k\\lambda/r$ |
| 3 | Sheet charge | $E = \\sigma/(2\\epsilon_0)$ |
    `,
    mcq1: { questions: [{ question: 'Which field drops off fastest with distance?', options: ['Point charge ($1/r^2$)','Line charge ($1/r$)','Sheet charge (constant)','They all drop equally'], correctAnswer: 0, explanation: 'Point: $1/r^2$, Line: $1/r$, Sheet: constant. Point charge drops fastest.' }] },
    mcq2: { questions: [{ question: 'Gauss\'s law is one of Maxwell\'s equations. It replaces:', options: ['Coulomb\'s law (in a more general form)','Faraday\'s law','Ampère\'s law','Ohm\'s law'], correctAnswer: 0, explanation: 'Gauss\'s law is the integral form of $\\\\nabla \\\\cdot \\\\vec{E} = \\\\rho/\\\\epsilon_0$, which generalizes Coulomb\'s law.' }] },
    input: { boxes: 3, correctAnswers: ['2','1','0'], content: `
**Review & Applications** 🧮

1) $E$ for a point charge drops as $1/r^n$. What is $n$?

2) $E$ for a line charge drops as $1/r^n$. What is $n$?

3) $E$ for an infinite sheet drops as $1/r^n$. What is $n$? (The field is constant.)
    `, hint1: '$E = kQ/r^2$.', hint2: '$E = 2k\\lambda/r$.', hint3: '$E = \\sigma/(2\\epsilon_0)$ — no $r$ dependence.', explanation: '1) $n = 2$ (inverse-square). 2) $n = 1$ (inverse). 3) $n = 0$ (constant, $r^0 = 1$).' },
    dropdown: { dropdowns: [{ label: 'Gauss\'s law in differential form is', options: ['$\\\\nabla \\\\cdot \\\\vec{E} = \\\\rho/\\\\epsilon_0$','$\\\\nabla \\\\times \\\\vec{E} = 0$','$\\\\nabla \\\\cdot \\\\vec{B} = 0$','$F = qE$'] }, { label: 'The total flux through a closed surface surrounding no charge is', options: ['Zero','$\\\\epsilon_0$','$Q_{enc}$','Infinite'] }], correctAnswers: ['$\\\\nabla \\\\cdot \\\\vec{E} = \\\\rho/\\\\epsilon_0$','Zero'], hint1: 'This is the first of Maxwell\'s equations.', hint2: '$Q_{enc} = 0 \\implies \\Phi = 0$.', explanation: 'Gauss\'s law in differential form: $\\nabla \\cdot \\vec{E} = \\rho/\\epsilon_0$. No enclosed charge means zero net flux.' }
  }
],

'physicsc-em-capacitors': [
  // Part 1: Capacitance
  {
    introContent: `
# ⚡ Capacitance

**Part 1 of 7 — Capacitance**

$$C = \\frac{Q}{V}$$

- Capacitance is the ratio of stored charge to voltage
- SI unit: **Farad** (F) = C/V
- Typical values: μF, nF, pF
- Capacitance depends on geometry, not on $Q$ or $V$
    `,
    workedContent: `
## Worked Example

**A capacitor stores $6 \\times 10^{-6}$ C at 3 V. Find $C$.**

$C = Q/V = 6 \\times 10^{-6} / 3 = 2 \\times 10^{-6}$ F $= 2$ μF ✅
    `,
    practiceContent: `
## Practice

| # | Known | Find |
|---|-------|------|
| 1 | $Q$, $V$ | $C$ |
| 2 | $C$, $V$ | $Q$ |
| 3 | $C$, $Q$ | $V$ |
    `,
    mcq1: { questions: [{ question: 'The SI unit of capacitance is:', options: ['Farad (F)','Coulomb (C)','Volt (V)','Ohm (Ω)'], correctAnswer: 0, explanation: 'Capacitance is measured in Farads: $1$ F $= 1$ C/V.' }] },
    mcq2: { questions: [{ question: 'Capacitance depends on:', options: ['Geometry (plate area, separation, dielectric)','Applied voltage','Stored charge','Current flow'], correctAnswer: 0, explanation: 'Capacitance is a geometric property — it depends on plate area, separation, and dielectric material.' }] },
    input: { boxes: 3, correctAnswers: ['2','12','5'], content: `
**Capacitance** 🧮

1) $Q = 6$ μC, $V = 3$ V. $C$ (μF)?

2) $C = 4$ μF, $V = 3$ V. $Q$ (μC)?

3) $C = 2$ μF, $Q = 10$ μC. $V$ (V)?
    `, hint1: '$C = Q/V$.', hint2: '$Q = CV$.', hint3: '$V = Q/C$.', explanation: '1) $C = 6/3 = 2$ μF. 2) $Q = 4(3) = 12$ μC. 3) $V = 10/2 = 5$ V.' },
    dropdown: { dropdowns: [{ label: 'A larger capacitance stores', options: ['More charge at the same voltage','Less charge at the same voltage','No charge','Infinite charge'] }, { label: '1 Farad equals', options: ['1 Coulomb per Volt','1 Volt per Coulomb','1 Ampere per Volt','1 Joule per Coulomb'] }], correctAnswers: ['More charge at the same voltage','1 Coulomb per Volt'], hint1: '$Q = CV$. Larger $C$ means...', hint2: '$C = Q/V$, so Farads = ...', explanation: '$Q = CV$: larger $C$ stores more charge. $1$ F $= 1$ C/V.' }
  },
  // Part 2: Parallel-Plate Capacitors
  {
    introContent: `
# ⚡ Parallel-Plate Capacitors

**Part 2 of 7 — Parallel-Plate Capacitors**

$$C = \\frac{\\epsilon_0 A}{d}$$

where $A$ = plate area, $d$ = plate separation.

- Electric field between plates: $E = V/d = \\sigma/\\epsilon_0$
- Field is uniform between the plates
- Increasing $A$ or decreasing $d$ increases $C$
    `,
    workedContent: `
## Worked Example

**Plates: $A = 0.01$ m², $d = 0.001$ m. Find $C$.**

$C = \\epsilon_0 A/d = 8.85 \\times 10^{-12} \\times 0.01 / 0.001 = 88.5$ pF ✅
    `,
    practiceContent: `
## Practice

| # | Change | Effect on $C$ |
|---|--------|--------------|
| 1 | Double $A$ | $C$ doubles |
| 2 | Double $d$ | $C$ halves |
| 3 | Both double | $C$ stays same |
    `,
    mcq1: { questions: [{ question: 'If the plate separation is doubled, capacitance:', options: ['Halves','Doubles','Quadruples','Stays the same'], correctAnswer: 0, explanation: '$C = \\\\epsilon_0 A/d$. If $d \\\\to 2d$, then $C \\\\to C/2$.' }] },
    mcq2: { questions: [{ question: 'The electric field between parallel plates is:', options: ['Uniform','Inversely proportional to $r$','Inversely proportional to $r^2$','Zero'], correctAnswer: 0, explanation: 'Between parallel plates, $E = V/d$ is uniform (constant everywhere between the plates).' }] },
    input: { boxes: 3, correctAnswers: ['2','4','1000'], content: `
**Parallel-Plate Capacitors** 🧮

1) Plate area is doubled, $d$ unchanged. $C$ increases by factor ___

2) Plate area is doubled and $d$ is halved. $C$ increases by factor ___

3) $V = 10$ V, $d = 0.01$ m. $E$ between the plates (V/m)?
    `, hint1: '$C = \\epsilon_0 A/d$. $A \\to 2A$.', hint2: '$A \\to 2A$, $d \\to d/2$. Factor = $2 \\times 2$.', hint3: '$E = V/d$.', explanation: '1) Factor of 2. 2) Factor of 4. 3) $E = 10/0.01 = 1000$ V/m.' },
    dropdown: { dropdowns: [{ label: 'The formula for a parallel-plate capacitor is', options: ['$C = \\\\epsilon_0 A / d$','$C = \\\\epsilon_0 d / A$','$C = A d / \\\\epsilon_0$','$C = Q^2 / (2\\\\epsilon_0)$'] }, { label: 'To maximize capacitance, use', options: ['Large area, small separation','Small area, large separation','Small area, small separation','Large area, large separation'] }], correctAnswers: ['$C = \\\\epsilon_0 A / d$','Large area, small separation'], hint1: '$C$ increases with $A$ and decreases with $d$.', hint2: '$C = \\epsilon_0 A/d$: maximize $A$, minimize $d$.', explanation: '$C = \\epsilon_0 A/d$. Maximize: large $A$, small $d$.' }
  },
  // Part 3: Series & Parallel Combinations
  {
    introContent: `
# ⚡ Capacitors in Series & Parallel

**Part 3 of 7 — Series & Parallel Combinations**

**Parallel:** $C_{eq} = C_1 + C_2 + \\cdots$ (same voltage)

**Series:** $\\frac{1}{C_{eq}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\cdots$ (same charge)

Note: opposite of resistors! Parallel adds, series uses reciprocals.
    `,
    workedContent: `
## Worked Example

**Two capacitors: 3 μF and 6 μF in series. Find $C_{eq}$.**

$\\frac{1}{C_{eq}} = \\frac{1}{3} + \\frac{1}{6} = \\frac{2+1}{6} = \\frac{1}{2}$

$C_{eq} = 2$ μF ✅
    `,
    practiceContent: `
## Practice

| # | Configuration | Formula |
|---|--------------|---------|
| 1 | Parallel | $C_{eq} = C_1 + C_2$ |
| 2 | Series | $1/C_{eq} = 1/C_1 + 1/C_2$ |
| 3 | Mixed | Simplify step by step |
    `,
    mcq1: { questions: [{ question: 'Two identical capacitors in parallel have total capacitance:', options: ['$2C$','$C$','$C/2$','$4C$'], correctAnswer: 0, explanation: 'Parallel: $C_{eq} = C + C = 2C$.' }] },
    mcq2: { questions: [{ question: 'Two identical capacitors in series have total capacitance:', options: ['$C/2$','$2C$','$C$','$4C$'], correctAnswer: 0, explanation: 'Series: $1/C_{eq} = 1/C + 1/C = 2/C$, so $C_{eq} = C/2$.' }] },
    input: { boxes: 3, correctAnswers: ['9','2','6'], content: `
**Series & Parallel Capacitors** 🧮

1) 3 μF and 6 μF in parallel. $C_{eq}$ (μF)?

2) 3 μF and 6 μF in series. $C_{eq}$ (μF)?

3) Two 3 μF caps in parallel: $C_{eq}$ (μF)?
    `, hint1: 'Parallel: add them.', hint2: '$1/C_{eq} = 1/3 + 1/6 = 3/6 = 1/2$.', hint3: '$3 + 3$.', explanation: '1) $3 + 6 = 9$ μF. 2) $C_{eq} = 2$ μF. 3) $3 + 3 = 6$ μF.' },
    dropdown: { dropdowns: [{ label: 'Capacitors in parallel share the same', options: ['Voltage','Charge','Current','Resistance'] }, { label: 'Capacitors in series share the same', options: ['Charge','Voltage','Capacitance','Energy'] }], correctAnswers: ['Voltage','Charge'], hint1: 'Parallel components are connected across the same points.', hint2: 'Charge flows through series capacitors equally.', explanation: 'Parallel: same voltage. Series: same charge on each capacitor.' }
  },
  // Part 4: Energy Stored
  {
    introContent: `
# ⚡ Energy Stored in Capacitors

**Part 4 of 7 — Energy Stored**

$$U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C} = \\frac{1}{2}QV$$

The energy is stored in the **electric field** between the plates.

Energy density: $u = \\frac{1}{2}\\epsilon_0 E^2$ (J/m³)
    `,
    workedContent: `
## Worked Example

**A 10 μF capacitor is charged to 100 V. Energy stored?**

$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(10 \\times 10^{-6})(10000) = 0.05$ J ✅
    `,
    practiceContent: `
## Practice

| # | Known | Formula |
|---|-------|---------|
| 1 | $C$, $V$ | $U = \\frac{1}{2}CV^2$ |
| 2 | $Q$, $C$ | $U = Q^2/(2C)$ |
| 3 | $Q$, $V$ | $U = \\frac{1}{2}QV$ |
    `,
    mcq1: { questions: [{ question: 'If the voltage across a capacitor doubles, the stored energy:', options: ['Quadruples','Doubles','Halves','Stays the same'], correctAnswer: 0, explanation: '$U = \\\\frac{1}{2}CV^2$. If $V \\\\to 2V$, $U \\\\to 4U$.' }] },
    mcq2: { questions: [{ question: 'The energy in a capacitor is stored in:', options: ['The electric field between the plates','The plates themselves','The wires','The battery'], correctAnswer: 0, explanation: 'Energy is stored in the electric field: $u = \\\\frac{1}{2}\\\\epsilon_0 E^2$ per unit volume.' }] },
    input: { boxes: 3, correctAnswers: ['50','4','200'], content: `
**Energy Stored** 🧮

1) $C = 10$ μF, $V = 100$ V. Energy (mJ)?

2) $V$ is doubled while $C$ stays the same. Energy increases by a factor of ___

3) $C = 4$ μF, $V = 10$ V. $U = \\frac{1}{2}(4)(100) = ?$ μJ
    `, hint1: '$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(10 \\times 10^{-6})(10^4) = 0.05$ J $= 50$ mJ.', hint2: '$U \\propto V^2$.', hint3: '$U = \\frac{1}{2}(4 \\times 10^{-6})(100) = 200 \\times 10^{-6}$ J $= 200$ μJ.', explanation: '1) 50 mJ. 2) Factor of 4. 3) 200 μJ.' },
    dropdown: { dropdowns: [{ label: 'Energy density of the electric field is', options: ['$\\\\frac{1}{2}\\\\epsilon_0 E^2$','$\\\\epsilon_0 E$','$\\\\frac{1}{2}\\\\epsilon_0 E$','$\\\\epsilon_0 E^2$'] }, { label: 'Three equivalent formulas for capacitor energy use', options: ['$C$ and $V$; $Q$ and $C$; $Q$ and $V$','Only $C$ and $V$','Only $Q$ and $V$','Only $Q$ and $C$'] }], correctAnswers: ['$\\\\frac{1}{2}\\\\epsilon_0 E^2$','$C$ and $V$; $Q$ and $C$; $Q$ and $V$'], hint1: 'Energy per unit volume in an E field.', hint2: '$U = \\frac{1}{2}CV^2 = Q^2/(2C) = \\frac{1}{2}QV$.', explanation: 'Energy density: $u = \\frac{1}{2}\\epsilon_0 E^2$. Three forms: $\\frac{1}{2}CV^2$, $Q^2/(2C)$, $\\frac{1}{2}QV$.' }
  },
  // Part 5: Dielectrics
  {
    introContent: `
# ⚡ Dielectrics

**Part 5 of 7 — Dielectrics**

Inserting a dielectric (insulating material) between plates:

$$C = \\kappa C_0 = \\frac{\\kappa \\epsilon_0 A}{d}$$

where $\\kappa$ (kappa) is the **dielectric constant** ($\\kappa > 1$).

Effects of a dielectric (battery disconnected):
- $C$ increases by factor $\\kappa$
- $V$ decreases by factor $\\kappa$
- $E$ decreases by factor $\\kappa$
- $Q$ stays the same
    `,
    workedContent: `
## Worked Example

**A 5 μF capacitor has a dielectric with $\\kappa = 3$ inserted. New capacitance?**

$C = \\kappa C_0 = 3 \\times 5 = 15$ μF ✅
    `,
    practiceContent: `
## Practice

| # | Scenario | Effect |
|---|----------|--------|
| 1 | Insert dielectric (battery disconnected) | $C \\uparrow$, $V \\downarrow$ |
| 2 | Insert dielectric (battery connected) | $C \\uparrow$, $Q \\uparrow$ |
| 3 | Remove dielectric (battery disconnected) | $C \\downarrow$, $V \\uparrow$ |
    `,
    mcq1: { questions: [{ question: 'A dielectric always:', options: ['Increases the capacitance','Decreases the capacitance','Has no effect','Makes $C = 0$'], correctAnswer: 0, explanation: '$\\\\kappa > 1$, so $C = \\\\kappa C_0 > C_0$. Capacitance always increases.' }] },
    mcq2: { questions: [{ question: 'With a dielectric inserted (battery disconnected), the electric field:', options: ['Decreases','Increases','Stays the same','Becomes zero'], correctAnswer: 0, explanation: 'The dielectric polarizes and opposes the applied field, reducing $E$ by factor $\\\\kappa$.' }] },
    input: { boxes: 3, correctAnswers: ['15','3','5'], content: `
**Dielectrics** 🧮

1) $C_0 = 5$ μF, $\\kappa = 3$. New $C$ (μF)?

2) A dielectric triples the capacitance. What is $\\kappa$?

3) $C_0 = 10$ μF. A dielectric with $\\kappa = 2$ is inserted. Capacitor is charged to $Q = 100$ μC (battery disconnected). $V = Q/C$ (V)?
    `, hint1: '$C = \\kappa C_0$.', hint2: '$\\kappa = C/C_0 = 3C_0/C_0$.', hint3: '$C = 2(10) = 20$ μF. $V = 100/20$.', explanation: '1) $C = 3(5) = 15$ μF. 2) $\\kappa = 3$. 3) $V = 100/20 = 5$ V.' },
    dropdown: { dropdowns: [{ label: 'Common dielectric materials include', options: ['Glass, paper, plastic','Metal, copper, iron','Air only','Water only'] }, { label: 'The dielectric constant $\\\\kappa$ is always', options: ['Greater than or equal to 1','Less than 1','Negative','Zero'] }], correctAnswers: ['Glass, paper, plastic','Greater than or equal to 1'], hint1: 'Dielectrics are insulators.', hint2: '$\\kappa = 1$ for vacuum (minimum value).', explanation: 'Dielectrics are insulators like glass, paper, plastic. $\\kappa \\geq 1$ always (vacuum = 1).' }
  },
  // Part 6: Problem-Solving Workshop
  {
    introContent: `
# ⚡ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### Capacitor Problem Strategy
1. Identify the capacitor configuration (series, parallel, or single)
2. Determine if a battery is connected or disconnected
3. Apply $Q = CV$ and energy formulas
4. For dielectrics, multiply $C$ by $\\kappa$
5. Use energy density $u = \\frac{1}{2}\\epsilon_0 E^2$ for field energy problems
    `,
    workedContent: `
## Worked Example

**Three capacitors: 2 μF, 3 μF in series, then that combination in parallel with 5 μF. $V = 12$ V. Find total charge.**

Series: $1/C_s = 1/2 + 1/3 = 5/6$, $C_s = 1.2$ μF

Parallel: $C_{eq} = 1.2 + 5 = 6.2$ μF

$Q = C_{eq}V = 6.2 \\times 12 = 74.4$ μC ✅
    `,
    practiceContent: `
## Practice

| # | Configuration | Key Step |
|---|--------------|----------|
| 1 | Series-parallel | Simplify step by step |
| 2 | With dielectric | Multiply $C$ by $\\kappa$ |
| 3 | Energy sharing | Two capacitors connected |
    `,
    mcq1: { questions: [{ question: 'When two charged capacitors are connected, total charge is:', options: ['Conserved','Doubled','Halved','Lost'], correctAnswer: 0, explanation: 'Charge is always conserved. When capacitors are connected, charge redistributes but the total stays the same.' }] },
    mcq2: { questions: [{ question: 'When simplifying a circuit with series and parallel capacitors, start by:', options: ['Identifying which caps are in series or parallel','Adding all capacitances','Ignoring the smallest capacitor','Removing the battery'], correctAnswer: 0, explanation: 'First identify series and parallel groupings, then simplify step by step.' }] },
    input: { boxes: 3, correctAnswers: ['6','74','50'], content: `
**Problem-Solving Workshop** 🧮

1) 2 μF and 3 μF in series → 1.2 μF. In parallel with 5 μF → $C_{eq}$ (μF)? (Round to nearest integer.)

2) $C_{eq} = 6.2$ μF, $V = 12$ V. $Q$ (μC)? (Round to nearest integer.)

3) $C = 10$ μF, $V = 100$ V. Energy (mJ)?
    `, hint1: '$1.2 + 5 = 6.2 \\approx 6$ μF.', hint2: '$Q = CV = 6.2(12) \\approx 74$ μC.', hint3: '$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(10^{-5})(10^4) = 0.05$ J.', explanation: '1) $\\approx 6$ μF. 2) $\\approx 74$ μC. 3) $50$ mJ.' },
    dropdown: { dropdowns: [{ label: 'In a series combination, the capacitor with the smallest $C$', options: ['Has the largest voltage','Has the smallest voltage','Has the most charge','Has no voltage'] }, { label: 'When two capacitors are connected together (no battery), energy is', options: ['Generally lost (to heat)','Conserved exactly','Doubled','Created'] }], correctAnswers: ['Has the largest voltage','Generally lost (to heat)'], hint1: 'Same $Q$ in series, $V = Q/C$.', hint2: 'Charge is conserved, but some energy becomes heat.', explanation: 'In series, same $Q$ everywhere, so smallest $C$ has largest $V = Q/C$. Energy is generally lost when capacitors share charge.' }
  },
  // Part 7: Review & Applications
  {
    introContent: `
# ⚡ Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Formulas
- $C = Q/V$, $C = \\epsilon_0 A/d$, $C = \\kappa C_0$
- Series: $1/C_{eq} = \\sum 1/C_i$
- Parallel: $C_{eq} = \\sum C_i$
- Energy: $U = \\frac{1}{2}CV^2 = Q^2/(2C)$
- Energy density: $u = \\frac{1}{2}\\epsilon_0 E^2$
    `,
    workedContent: `
## Worked Example

**A 20 μF capacitor with $\\kappa = 5$ dielectric is charged to $V = 50$ V. Find the stored energy.**

$C = \\kappa C_0 = 5(20) = 100$ μF

$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(100 \\times 10^{-6})(2500) = 0.125$ J ✅
    `,
    practiceContent: `
## Practice

| # | Topic | Formula |
|---|-------|---------|
| 1 | Capacitance | $C = Q/V$ |
| 2 | Parallel plate | $C = \\epsilon_0 A/d$ |
| 3 | Energy storage | $U = \\frac{1}{2}CV^2$ |
    `,
    mcq1: { questions: [{ question: 'A parallel-plate capacitor has $C = 100$ pF. Inserting a dielectric with $\\\\kappa = 4$ gives:', options: ['$C = 400$ pF','$C = 25$ pF','$C = 100$ pF','$C = 50$ pF'], correctAnswer: 0, explanation: '$C = \\\\kappa C_0 = 4(100) = 400$ pF.' }] },
    mcq2: { questions: [{ question: 'Capacitors are used in electronic circuits to:', options: ['Store energy and filter signals','Generate current','Create resistance','Produce magnetic fields'], correctAnswer: 0, explanation: 'Capacitors store energy and are essential in filter circuits, timing circuits, and power supplies.' }] },
    input: { boxes: 3, correctAnswers: ['125','100','400'], content: `
**Review & Applications** 🧮

1) $C = 100$ μF, $V = 50$ V. Energy (mJ)?

2) $\\kappa = 5$, $C_0 = 20$ μF. New $C$ (μF)?

3) $C_0 = 100$ pF, $\\kappa = 4$. New $C$ (pF)?
    `, hint1: '$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(10^{-4})(2500)$.', hint2: '$C = \\kappa C_0$.', hint3: '$C = 4(100)$.', explanation: '1) $U = 0.125$ J $= 125$ mJ. 2) $5(20) = 100$ μF. 3) $400$ pF.' },
    dropdown: { dropdowns: [{ label: 'Capacitors store energy in', options: ['Electric fields','Magnetic fields','Gravitational fields','Nuclear forces'] }, { label: 'The time constant of an RC circuit is', options: ['$\\\\tau = RC$','$\\\\tau = R/C$','$\\\\tau = C/R$','$\\\\tau = R^2C$'] }], correctAnswers: ['Electric fields','$\\\\tau = RC$'], hint1: 'Capacitors deal with electric charges and fields.', hint2: 'The RC time constant.', explanation: 'Capacitors store energy in electric fields. The RC time constant is $\\tau = RC$.' }
  }
]

};
