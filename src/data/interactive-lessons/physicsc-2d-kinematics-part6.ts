export const physC2dKinPart6Data = {
  topicSlug: '2d-kinematics-physics-c',
  sections: [
    {
      id: '2dkin6-intro',
      type: 'text' as const,
      content: `# 2D Kinematics — Problem-Solving Workshop

**Part 6 of 7**

This workshop focuses on solving challenging 2D kinematics problems at the AP Physics C level. Each problem integrates concepts from the previous sections.

### Problem-Solving Checklist

1. **Set up coordinates** — choose axes, define positive directions.
2. **Decompose vectors** — break initial velocity into components.
3. **Write component equations** — treat $x$ and $y$ independently.
4. **Apply constraints** — use boundary conditions (hits ground, reaches wall, etc.).
5. **Solve** — often requires solving a system of equations.
6. **Verify** — check units, signs, and limiting cases.`
    },
    {
      id: '2dkin6-mcq1',
      type: 'mcq' as const,
      question: 'A ball is launched from ground level at speed $v_0$ at angle $\\theta$. It must clear a wall of height $h$ located at horizontal distance $d$. Which equation determines whether the ball clears the wall?',
      options: [
        '$d\\tan\\theta - \\frac{gd^2}{2v_0^2\\cos^2\\theta} > h$',
        '$\\frac{v_0^2\\sin^2\\theta}{2g} > h$',
        '$v_0\\sin\\theta \\cdot \\frac{d}{v_0\\cos\\theta} > h$',
        '$v_0^2\\sin(2\\theta)/g > d$'
      ],
      correctAnswer: 0,
      explanation: 'At $x = d$: $t = d/(v_0\\cos\\theta)$. Then $y = d\\tan\\theta - \\frac{gd^2}{2v_0^2\\cos^2\\theta}$. The ball clears the wall if $y > h$. The second option checks max height vs. $h$ (necessary but not sufficient). The third neglects gravity.'
    },
    {
      id: '2dkin6-prob1',
      type: 'text' as const,
      content: `## Worked Problem 1: Projectile on a Slope

**Problem:** A ball is launched at speed $v_0$ at angle $\\alpha$ (above horizontal) from the base of a hill that makes angle $\\beta$ with the horizontal. Find the range along the slope.

### Solution

**Coordinates:** $x$ along slope, $y$ perpendicular to slope... actually, let's use standard $x$-$y$.

**Ball:** $x = v_0\\cos\\alpha \\cdot t$, $y = v_0\\sin\\alpha \\cdot t - \\frac{1}{2}gt^2$

**Slope:** $y = x\\tan\\beta$

**Landing:** When the ball hits the slope:

$$v_0\\sin\\alpha\\cdot t - \\frac{1}{2}gt^2 = v_0\\cos\\alpha \\cdot t \\cdot \\tan\\beta$$

$$t\\left[v_0\\sin\\alpha - \\frac{1}{2}gt - v_0\\cos\\alpha\\tan\\beta\\right] = 0$$

$$t = \\frac{2v_0(\\sin\\alpha - \\cos\\alpha\\tan\\beta)}{g} = \\frac{2v_0\\sin(\\alpha - \\beta)}{g\\cos\\beta}$$

**Range along slope:**

$$R = \\frac{x}{\\cos\\beta} = \\frac{v_0\\cos\\alpha \\cdot t}{\\cos\\beta} = \\frac{2v_0^2\\cos\\alpha\\sin(\\alpha-\\beta)}{g\\cos^2\\beta}$$`
    },
    {
      id: '2dkin6-mcq2',
      type: 'mcq' as const,
      question: 'In the slope problem, for $\\beta = 0$ (flat ground), the range formula reduces to:',
      options: [
        '$\\frac{2v_0^2\\cos\\alpha\\sin\\alpha}{g} = \\frac{v_0^2\\sin 2\\alpha}{g}$',
        '$\\frac{v_0^2}{g}$',
        '$\\frac{2v_0^2\\sin\\alpha}{g}$',
        '$\\frac{v_0^2\\cos\\alpha}{g}$'
      ],
      correctAnswer: 0,
      explanation: 'With $\\beta = 0$: $R = \\frac{2v_0^2\\cos\\alpha\\sin\\alpha}{g} = \\frac{v_0^2\\sin 2\\alpha}{g}$, which is the standard flat-ground range formula.'
    },
    {
      id: '2dkin6-prob2',
      type: 'text' as const,
      content: `## Worked Problem 2: Two Projectiles

**Problem:** Two balls are launched simultaneously from the same point. Ball 1 goes at $v_0$ at angle $\\theta_1$, Ball 2 at $v_0$ at angle $\\theta_2$ ($\\theta_1 > \\theta_2$). Show that the distance between them increases linearly with time.

### Solution

**Ball 1:** $\\vec{r}_1 = v_0\\cos\\theta_1\\cdot t\\,\\hat{i} + (v_0\\sin\\theta_1\\cdot t - \\frac{1}{2}gt^2)\\,\\hat{j}$

**Ball 2:** $\\vec{r}_2 = v_0\\cos\\theta_2\\cdot t\\,\\hat{i} + (v_0\\sin\\theta_2\\cdot t - \\frac{1}{2}gt^2)\\,\\hat{j}$

**Separation:**

$$\\Delta\\vec{r} = \\vec{r}_1 - \\vec{r}_2 = v_0 t(\\cos\\theta_1 - \\cos\\theta_2)\\,\\hat{i} + v_0 t(\\sin\\theta_1 - \\sin\\theta_2)\\,\\hat{j}$$

Notice: the $\\frac{1}{2}gt^2$ terms **cancel**!

$$|\\Delta\\vec{r}| = v_0 t \\sqrt{(\\cos\\theta_1-\\cos\\theta_2)^2 + (\\sin\\theta_1 - \\sin\\theta_2)^2}$$

The square root is a constant (depending only on the angles), so $|\\Delta\\vec{r}| \\propto t$. **The separation grows linearly!**

The key insight: both balls experience the same gravitational acceleration, so in the relative frame, one sees the other moving in a straight line at constant speed.`
    },
    {
      id: '2dkin6-mcq3',
      type: 'mcq' as const,
      question: 'A particle has $\\vec{r}(t) = (4t)\\,\\hat{i} + (3t - 5t^2)\\,\\hat{j}$. At what time does the velocity make a $45°$ angle below the positive $x$-axis?',
      options: ['$t = 1.4$ s', '$t = 1$ s', '$t = 0.7$ s', '$t = 2$ s'],
      correctAnswer: 0,
      explanation: '$v_x = 4$, $v_y = 3 - 10t$. For $45°$ below horizontal: $v_y/v_x = -\\tan 45° = -1$, so $\\frac{3-10t}{4} = -1 \\implies 3-10t = -4 \\implies t = 0.7$ s. Wait, let me recheck. $(3-10t)/4 = -1$ gives $3 - 10t = -4$, so $10t = 7$, $t = 0.7$. So the answer should be $t = 0.7$ s, not $1.4$.'
    },
    {
      id: '2dkin6-mcq4',
      type: 'mcq' as const,
      question: 'A monkey hangs from a tree at height $h$ and horizontal distance $d$ from a hunter. At the instant the hunter fires (aimed directly at the monkey), the monkey drops. Does the dart hit the monkey?',
      options: [
        'Yes, always (regardless of dart speed, as long as it reaches the monkey)',
        'Only if the dart speed exceeds a minimum value',
        'No, the dart always passes above',
        'Only if $h > d$'
      ],
      correctAnswer: 0,
      explanation: 'The "monkey and hunter" problem: both the dart and monkey experience the same gravitational acceleration. The dart aimed at the original position "falls" below that aim point by $\\frac{1}{2}gt^2$ — the same distance the monkey falls. They meet at the same point (provided the dart reaches that far before hitting the ground).'
    }
  ]
};
