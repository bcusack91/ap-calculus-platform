import type { Slide } from '@/lib/slide-deck'

/**
 * MCAT Kinematics — hand-curated per owner review (Aug 2026):
 * - No boilerplate intro (Why This Matters / Study Checklist etc. removed).
 * - Core methodology: ALWAYS start by inventorying variables (explicit AND
 *   implicit) plus the asked-for variable; choose the Big 5 equation missing
 *   the one variable that is neither given nor asked.
 * - Worked examples reveal progressively: question slide first (students
 *   think), then inventory, then solve — teacher clicks Next between stages.
 * - 2D problems ALWAYS open with an x|y inventory table.
 * - Polls come from the topic's exit-quiz pool, placed right after the
 *   worked example they're adjacent to.
 * - Ends with cumulative review (forces preview) then the exit-quiz handoff.
 */

const TOPIC = 'mcat-physics-mechanics-kinematics-mcat'

export const mcatKinematicsDeck: { title: string; slides: Slide[] } = {
  title: 'Kinematics',
  slides: [
    { kind: 'title', title: 'Kinematics', subtitle: 'MCAT Prep · in-class lesson' },
    {
      kind: 'content',
      title: "What We'll Cover",
      blocks: [
        '- The Big 5 kinematic equations — and what each one leaves out',
        '- Choosing the right equation: the variable inventory method',
        '- Hidden (implicit) variables MCAT problems love to hide',
        '- Worked examples: 1D braking, 2D projectile — solved step by step',
        '- Cumulative review: forces preview',
      ],
    },
    {
      kind: 'content',
      title: 'The Big 5 Kinematic Equations',
      blocks: [
        'Each equation is missing exactly one of the five variables ($\\Delta x$, $v_0$, $v$, $a$, $t$) — that missing variable is how you choose between them.',
        '| Equation | Missing variable |\n|----------|------------------|\n| $v = v_0 + at$ | $\\Delta x$ |\n| $\\Delta x = v_0 t + \\tfrac{1}{2}at^2$ | $v$ |\n| $v^2 = v_0^2 + 2a\\Delta x$ | $t$ |\n| $\\Delta x = \\tfrac{1}{2}(v_0 + v)t$ | $a$ |\n| $\\Delta x = vt - \\tfrac{1}{2}at^2$ | $v_0$ |',
        'All five assume **constant acceleration**.',
      ],
    },
    {
      kind: 'content',
      title: 'Choosing the Right Equation',
      blocks: [
        '**Step 1 — Inventory.** Scan the problem and list every variable it gives you, both explicit and implicit.',
        '**Step 2 — Target.** Mark the variable the question asks for.',
        '**Step 3 — Eliminate.** Exactly one of the five variables is neither given nor asked.',
        '**Step 4 — Select.** Use the Big 5 equation that does not contain that variable.',
        '→ One equation, one unknown — no algebra gymnastics, no simultaneous equations.',
      ],
    },
    {
      kind: 'content',
      title: 'Hidden Variables: What the Words Tell You',
      blocks: [
        'MCAT problems rarely hand you every value — the wording IS the data. Add these to your inventory automatically:',
        '| Phrase | Implicit value |\n|--------|----------------|\n| "starts from rest" / "dropped" | $v_0 = 0$ |\n| "comes to rest" / "stops" | $v = 0$ |\n| "at the peak" / "maximum height" | $v_y = 0$ |\n| "constant velocity" | $a = 0$ |\n| "in free fall" | $a = -g \\approx -10\\;\\text{m/s}^2$ |',
      ],
    },
    {
      kind: 'content',
      title: 'Worked Example — Braking to a Stop',
      blocks: [
        'A car traveling at $30\\;\\text{m/s}$ brakes and comes to rest over a distance of $90\\;\\text{m}$. What is its acceleration?',
        '→ Before the next slide: build the inventory. What is given (explicitly and implicitly)? What is asked? Which variable is neither?',
      ],
    },
    {
      kind: 'content',
      title: 'Braking to a Stop — Step 1: Inventory',
      blocks: [
        '- Given explicitly: $v_0 = 30\\;\\text{m/s}$, $\\Delta x = 90\\;\\text{m}$',
        '- Given implicitly: "comes to rest" $\\Rightarrow v = 0$',
        '- Asked: $a$',
        '- Neither given nor asked: $t$',
        'Solution: time is the odd one out — use the equation with no $t$: $v^2 = v_0^2 + 2a\\Delta x$.',
      ],
    },
    {
      kind: 'content',
      title: 'Braking to a Stop — Step 2: Solve',
      blocks: [
        '$$0 = (30)^2 + 2a(90)$$',
        '$$a = -\\frac{900}{180} = -5\\;\\text{m/s}^2$$',
        'Solution: the magnitude is $5\\;\\text{m/s}^2$; the negative sign means the acceleration opposes the motion (deceleration). Inventory → eliminate → one equation, one unknown.',
      ],
    },
    {
      kind: 'poll',
      question: 'A ball is thrown straight up with an initial velocity of 20 m/s. How high does it go? (g = 10 $m/s^{2}$)',
      options: ['10 m', '20 m', '40 m', '200 m'],
      correctIndex: 1,
      explanation:
        'Inventory: $v_0 = 20$ m/s (explicit), $v = 0$ at the peak (implicit!), $a = -10\\;\\text{m/s}^2$. Asked: $\\Delta x$. Time is neither given nor asked, so use $v^2 = v_0^2 + 2a\\Delta x$: $0 = 400 - 20\\Delta x \\Rightarrow \\Delta x = 20$ m.',
    },
    {
      kind: 'content',
      title: 'Projectile Motion: Two Independent Problems',
      blocks: [
        '- Horizontal: $a_x = 0$, so $v_x = v_0\\cos\\theta$ never changes',
        '- Vertical: $a_y = -g$, ordinary free fall',
        '- The two directions share exactly ONE variable: time $t$',
        '- Range: $R = \\frac{v_0^2\\sin(2\\theta)}{g}$ — maximum at $45°$, complementary angles tie',
      ],
    },
    {
      kind: 'content',
      title: '2D Problems: Inventory BOTH Directions First',
      blocks: [
        'The first step in every kinematics problem is the inventory — in 2D, that means one inventory per axis:',
        '| | x-direction | y-direction |\n|---|-------------|-------------|\n| velocity | $v_x = v_0\\cos\\theta$ (constant) | $v_{0y} = v_0\\sin\\theta$, changes |\n| acceleration | $0$ | $-g$ |\n| displacement | $x$ (often asked) | $\\Delta y$ (often the height) |\n| time | shared $t$ | shared $t$ |',
        '→ Solve whichever axis has enough information for $t$, then carry $t$ across to the other axis.',
      ],
    },
    {
      kind: 'content',
      title: 'Worked Example — Ball off a Table',
      blocks: [
        'A ball rolls off a $20\\;\\text{m}$ high table with a horizontal speed of $5\\;\\text{m/s}$. Using $g = 10\\;\\text{m/s}^2$: how long is it in the air, and how far from the base does it land?',
        '→ Before the next slide: build the x and y inventories. Which axis can give you $t$?',
      ],
    },
    {
      kind: 'content',
      title: 'Ball off a Table — Step 1: Inventory (x | y)',
      blocks: [
        '| | x-direction | y-direction |\n|---|-------------|-------------|\n| velocity | $v_x = 5\\;\\text{m/s}$ | $v_{0y} = 0$ (implicit: rolls off horizontally) |\n| acceleration | $0$ | $-10\\;\\text{m/s}^2$ |\n| displacement | $x = ?$ (asked) | $\\Delta y = -20\\;\\text{m}$ |\n| time | $t = ?$ (asked, shared) | $t = ?$ (asked, shared) |',
        'Solution: the y-inventory is complete except for $t$ — start there.',
      ],
    },
    {
      kind: 'content',
      title: 'Ball off a Table — Step 2: Vertical Gives the Time',
      blocks: [
        'With $v_{0y} = 0$, the no-$v$ equation $\\Delta y = v_{0y}t + \\tfrac{1}{2}a_y t^2$ becomes:',
        '$$20 = \\tfrac{1}{2}(10)\\,t^2 = 5t^2 \\;\\Rightarrow\\; t^2 = 4 \\;\\Rightarrow\\; t = 2\\;\\text{s}$$',
        'Solution: the ball is in the air for $2\\;\\text{s}$ — and the horizontal speed had nothing to do with it.',
      ],
    },
    {
      kind: 'content',
      title: 'Ball off a Table — Step 3: Horizontal Gives the Distance',
      blocks: [
        'Constant horizontal velocity, shared $t$:',
        '$$x = v_x t = (5)(2) = 10\\;\\text{m}$$',
        'Solution: lands $10\\;\\text{m}$ from the base. Key MCAT insight: horizontal and vertical motions are independent — a faster roll changes WHERE it lands, never WHEN.',
      ],
    },
    {
      kind: 'poll',
      question: 'A projectile is launched at 30° above the horizontal at 20 m/s. What is the horizontal component of its initial velocity?',
      options: ['10 m/s', '17.3 m/s', '14.1 m/s', '20 m/s'],
      correctIndex: 1,
      explanation:
        'x-inventory first: $v_x = v_0\\cos\\theta = 20\\cos 30° = 20 \\times 0.866 \\approx 17.3$ m/s. (The $10$ m/s trap is $v_0\\sin 30°$ — the vertical component.)',
    },
    {
      kind: 'content',
      title: 'MCAT Shortcuts',
      blocks: [
        '- Use $g \\approx 10\\;\\text{m/s}^2$ — the MCAT rewards fast arithmetic, not precision',
        '- All objects fall at the same rate regardless of mass (no air resistance)',
        '- Chase/meeting problems: work in relative velocity, $v_{A/B} = v_A - v_B$ — one subtraction replaces two equations',
      ],
    },
    {
      kind: 'content',
      title: 'Key Takeaways',
      blocks: [
        '- **Inventory first, always**: list given variables (explicit + implicit) and the asked variable — in 2D, one inventory per axis',
        '- Pick the Big 5 equation missing the variable that is neither given nor asked',
        '- x and y motions are independent; they share only $t$',
        '- The wording carries data: "rest", "peak", "constant" are values in disguise',
      ],
    },
    {
      kind: 'content',
      title: "Cumulative Review — Newton's Three Laws",
      blocks: [
        '- **Inertia**: an object keeps its state of motion unless a net force acts on it',
        '- **$F = ma$**: net force equals mass times acceleration — the bridge from forces to the kinematics you just did',
        '- **Action–reaction**: every force has an equal and opposite partner (acting on the OTHER object)',
      ],
    },
    {
      kind: 'content',
      title: 'Cumulative Review — Common MCAT Forces',
      blocks: [
        '| Force | Formula | Direction |\n|-------|---------|-----------|\n| Weight | $W = mg$ | Downward |\n| Normal | $N$ (variable) | Perpendicular to surface |\n| Friction (static) | $f_s \\le \\mu_s N$ | Opposes potential motion |\n| Friction (kinetic) | $f_k = \\mu_k N$ | Opposes motion |\n| Tension | $T$ (variable) | Along the rope |',
      ],
    },
    {
      kind: 'content',
      title: 'Cumulative Review — Inclined Plane (MCAT Favorite)',
      blocks: [
        '- Component along the plane: $mg\\sin\\theta$',
        '- Component perpendicular: $mg\\cos\\theta$ (equals the normal force if nothing else pushes vertically)',
        '- Friction on an incline: $f = \\mu mg\\cos\\theta$',
        '→ Same inventory habit applies: list the forces per axis before touching an equation.',
      ],
    },
    { kind: 'quiz', topicSlug: TOPIC, title: 'Kinematics' },
  ],
}
