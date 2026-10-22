export const calcbcPolarPart3Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'pol3-intro',
      type: 'text' as const,
      content: `# Polar Calculus

**Part 3 of 7 \u2014 Area in Polar Coordinates**

### The Polar Area Formula

The area enclosed by $r = f(\\theta)$ from $\\theta = \\alpha$ to $\\theta = \\beta$:

$$\\boxed{A = \\frac{1}{2}\\int_{\\alpha}^{\\beta} r^2\\,d\\theta = \\frac{1}{2}\\int_{\\alpha}^{\\beta} [f(\\theta)]^2\\,d\\theta}$$

**Why $\\frac{1}{2}r^2$?** Each thin sector has area $\\frac{1}{2}r^2\\,d\\theta$ (like a triangle with base $r\\,d\\theta$ and height $r$).

> **Critical:** Choose $\\alpha$ and $\\beta$ carefully. The curve must trace the region exactly once. Symmetry can reduce the integral.`
    },
    {
      id: 'pol3-examples',
      type: 'text' as const,
      content: `### Example 1: Area of a Cardioid

**Find the area enclosed by** $r = 1 + \\cos\\theta$.

Full curve: $0 \\le \\theta \\le 2\\pi$. By symmetry about the $x$-axis: $A = 2 \\cdot \\frac{1}{2}\\int_0^{\\pi}(1+\\cos\\theta)^2\\,d\\theta$.

$$= \\int_0^{\\pi}(1 + 2\\cos\\theta + \\cos^2\\theta)\\,d\\theta = \\int_0^{\\pi}\\left(\\frac{3}{2} + 2\\cos\\theta + \\frac{\\cos 2\\theta}{2}\\right)d\\theta$$

$$= \\left[\\frac{3\\theta}{2} + 2\\sin\\theta + \\frac{\\sin 2\\theta}{4}\\right]_0^{\\pi} = \\frac{3\\pi}{2}$$

### Example 2: Area of One Petal

**One petal of** $r = \\sin(2\\theta)$: the first petal spans $0 \\le \\theta \\le \\pi/2$.

$$A = \\frac{1}{2}\\int_0^{\\pi/2}\\sin^2(2\\theta)\\,d\\theta = \\frac{1}{2}\\int_0^{\\pi/2}\\frac{1-\\cos 4\\theta}{2}\\,d\\theta = \\frac{\\pi}{8}$$`
    },
    {
      id: 'pol3-between',
      type: 'text' as const,
      figure: {
        svg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-muted" stroke="currentColor" stroke-width="1"><line x1="20" y1="215" x2="285" y2="215"/><line x1="150" y1="245" x2="150" y2="20"/></g><g class="fig-accent"><path d="M 221.4 173.8 L 222.8 171.2 L 224.2 168.7 L 225.4 166.1 L 226.5 163.4 L 227.5 160.7 L 228.5 158.0 L 229.3 155.2 L 230.0 152.5 L 230.7 149.7 L 231.2 146.8 L 231.7 144.0 L 232.0 141.1 L 232.3 138.3 L 232.4 135.4 L 232.5 132.5 L 232.4 129.6 L 232.3 126.7 L 232.0 123.9 L 231.7 121.0 L 231.2 118.2 L 230.7 115.3 L 230.0 112.5 L 229.3 109.8 L 228.5 107.0 L 227.5 104.3 L 226.5 101.6 L 225.4 98.9 L 224.2 96.3 L 222.8 93.8 L 221.4 91.2 L 220.0 88.8 L 218.4 86.4 L 216.7 84.0 L 215.0 81.7 L 213.2 79.5 L 211.3 77.3 L 209.3 75.2 L 207.3 73.2 L 205.2 71.2 L 203.0 69.3 L 200.8 67.5 L 198.5 65.8 L 196.1 64.1 L 193.7 62.5 L 191.2 61.1 L 188.7 59.7 L 186.2 58.3 L 183.6 57.1 L 180.9 56.0 L 178.2 55.0 L 175.5 54.0 L 172.7 53.2 L 170.0 52.5 L 167.2 51.8 L 164.3 51.3 L 161.5 50.8 L 158.6 50.5 L 155.8 50.2 L 152.9 50.1 L 150.0 50.0 L 147.1 50.1 L 144.2 50.2 L 141.4 50.5 L 138.5 50.8 L 135.7 51.3 L 132.8 51.8 L 130.0 52.5 L 127.3 53.2 L 124.5 54.0 L 121.8 55.0 L 119.1 56.0 L 116.4 57.1 L 113.8 58.3 L 111.3 59.7 L 108.7 61.1 L 106.3 62.5 L 103.9 64.1 L 101.5 65.8 L 99.2 67.5 L 97.0 69.3 L 94.8 71.2 L 92.7 73.2 L 90.7 75.2 L 88.7 77.3 L 86.8 79.5 L 85.0 81.7 L 83.3 84.0 L 81.6 86.4 L 80.0 88.8 L 78.6 91.2 L 77.2 93.8 L 75.8 96.3 L 74.6 98.9 L 73.5 101.6 L 72.5 104.3 L 71.5 107.0 L 70.7 109.8 L 70.0 112.5 L 69.3 115.3 L 68.8 118.2 L 68.3 121.0 L 68.0 123.9 L 67.7 126.7 L 67.6 129.6 L 67.5 132.5 L 67.6 135.4 L 67.7 138.3 L 68.0 141.1 L 68.3 144.0 L 68.8 146.8 L 69.3 149.7 L 70.0 152.5 L 70.7 155.2 L 71.5 158.0 L 72.5 160.7 L 73.5 163.4 L 74.6 166.1 L 75.8 168.7 L 77.2 171.2 L 78.6 173.8 L 78.6 173.8 L 78.6 172.1 L 78.6 170.4 L 78.8 168.7 L 78.9 167.0 L 79.1 165.4 L 79.4 163.7 L 79.6 162.0 L 80.0 160.3 L 80.4 158.6 L 80.8 156.9 L 81.3 155.2 L 81.8 153.6 L 82.3 151.9 L 83.0 150.3 L 83.6 148.6 L 84.3 147.0 L 85.1 145.4 L 85.8 143.8 L 86.7 142.2 L 87.6 140.6 L 88.5 139.0 L 89.5 137.5 L 90.5 136.0 L 91.5 134.5 L 92.6 133.0 L 93.7 131.6 L 94.9 130.2 L 96.1 128.8 L 97.4 127.4 L 98.7 126.1 L 100.0 124.8 L 101.4 123.6 L 102.8 122.3 L 104.2 121.1 L 105.7 120.0 L 107.2 118.9 L 108.7 117.8 L 110.3 116.7 L 111.9 115.7 L 113.5 114.8 L 115.2 113.8 L 116.8 112.9 L 118.5 112.1 L 120.3 111.3 L 122.0 110.6 L 123.8 109.9 L 125.6 109.2 L 127.4 108.6 L 129.2 108.0 L 131.0 107.5 L 132.9 107.0 L 134.8 106.6 L 136.6 106.2 L 138.5 105.9 L 140.4 105.6 L 142.3 105.4 L 144.2 105.2 L 146.2 105.1 L 148.1 105.0 L 150.0 105.0 L 151.9 105.0 L 153.8 105.1 L 155.8 105.2 L 157.7 105.4 L 159.6 105.6 L 161.5 105.9 L 163.4 106.2 L 165.2 106.6 L 167.1 107.0 L 169.0 107.5 L 170.8 108.0 L 172.6 108.6 L 174.4 109.2 L 176.2 109.9 L 178.0 110.6 L 179.7 111.3 L 181.5 112.1 L 183.2 112.9 L 184.8 113.8 L 186.5 114.8 L 188.1 115.7 L 189.7 116.7 L 191.3 117.8 L 192.8 118.9 L 194.3 120.0 L 195.8 121.1 L 197.2 122.3 L 198.6 123.6 L 200.0 124.8 L 201.3 126.1 L 202.6 127.4 L 203.9 128.8 L 205.1 130.2 L 206.3 131.6 L 207.4 133.0 L 208.5 134.5 L 209.5 136.0 L 210.5 137.5 L 211.5 139.0 L 212.4 140.6 L 213.3 142.2 L 214.2 143.8 L 214.9 145.4 L 215.7 147.0 L 216.4 148.6 L 217.0 150.3 L 217.7 151.9 L 218.2 153.6 L 218.7 155.2 L 219.2 156.9 L 219.6 158.6 L 220.0 160.3 L 220.4 162.0 L 220.6 163.7 L 220.9 165.4 L 221.1 167.0 L 221.2 168.7 L 221.4 170.4 L 221.4 172.1 L 221.4 173.8 Z" fill="currentColor" fill-opacity="0.22" stroke="none"/><path d="M 150.0 215.0 L 154.3 214.9 L 158.6 214.5 L 162.9 214.0 L 167.2 213.2 L 171.4 212.2 L 175.5 211.0 L 179.6 209.5 L 183.6 207.9 L 187.5 206.0 L 191.2 203.9 L 194.9 201.7 L 198.5 199.2 L 201.9 196.6 L 205.2 193.8 L 208.3 190.8 L 211.3 187.7 L 214.1 184.4 L 216.7 181.0 L 219.2 177.4 L 221.4 173.8 L 223.5 170.0 L 225.4 166.1 L 227.0 162.1 L 228.5 158.0 L 229.7 153.9 L 230.7 149.7 L 231.5 145.4 L 232.0 141.1 L 232.4 136.8 L 232.5 132.5 L 232.4 128.2 L 232.0 123.9 L 231.5 119.6 L 230.7 115.3 L 229.7 111.1 L 228.5 107.0 L 227.0 102.9 L 225.4 98.9 L 223.5 95.0 L 221.4 91.2 L 219.2 87.6 L 216.7 84.0 L 214.1 80.6 L 211.3 77.3 L 208.3 74.2 L 205.2 71.2 L 201.9 68.4 L 198.5 65.8 L 194.9 63.3 L 191.2 61.1 L 187.5 59.0 L 183.6 57.1 L 179.6 55.5 L 175.5 54.0 L 171.4 52.8 L 167.2 51.8 L 162.9 51.0 L 158.6 50.5 L 154.3 50.1 L 150.0 50.0 L 145.7 50.1 L 141.4 50.5 L 137.1 51.0 L 132.8 51.8 L 128.6 52.8 L 124.5 54.0 L 120.4 55.5 L 116.4 57.1 L 112.5 59.0 L 108.8 61.1 L 105.1 63.3 L 101.5 65.8 L 98.1 68.4 L 94.8 71.2 L 91.7 74.2 L 88.7 77.3 L 85.9 80.6 L 83.3 84.0 L 80.8 87.6 L 78.6 91.2 L 76.5 95.0 L 74.6 98.9 L 73.0 102.9 L 71.5 107.0 L 70.3 111.1 L 69.3 115.3 L 68.5 119.6 L 68.0 123.9 L 67.6 128.2 L 67.5 132.5 L 67.6 136.8 L 68.0 141.1 L 68.5 145.4 L 69.3 149.7 L 70.3 153.9 L 71.5 158.0 L 73.0 162.1 L 74.6 166.1 L 76.5 170.0 L 78.6 173.8 L 80.8 177.4 L 83.3 181.0 L 85.9 184.4 L 88.7 187.7 L 91.7 190.8 L 94.8 193.8 L 98.1 196.6 L 101.5 199.2 L 105.1 201.7 L 108.8 203.9 L 112.5 206.0 L 116.4 207.9 L 120.4 209.5 L 124.5 211.0 L 128.6 212.2 L 132.8 213.2 L 137.1 214.0 L 141.4 214.5 L 145.7 214.9 L 150.0 215.0 Z" fill="none" stroke="currentColor" stroke-width="2.5"/></g><g class="fig-accent-2"><path d="M 205.0 215.0 L 206.7 213.2 L 208.3 211.3 L 209.9 209.3 L 211.4 207.2 L 212.8 205.1 L 214.1 202.8 L 215.4 200.4 L 216.5 197.9 L 217.6 195.4 L 218.5 192.8 L 219.3 190.1 L 220.0 187.3 L 220.5 184.5 L 221.0 181.6 L 221.3 178.7 L 221.4 175.7 L 221.4 172.8 L 221.3 169.7 L 221.1 166.7 L 220.6 163.7 L 220.1 160.6 L 219.4 157.6 L 218.5 154.6 L 217.5 151.6 L 216.4 148.6 L 215.1 145.7 L 213.7 142.8 L 212.1 140.0 L 210.3 137.2 L 208.5 134.5 L 206.5 131.9 L 204.4 129.4 L 202.1 126.9 L 199.7 124.6 L 197.2 122.3 L 194.6 120.2 L 191.9 118.2 L 189.1 116.3 L 186.2 114.6 L 183.2 112.9 L 180.1 111.5 L 176.9 110.1 L 173.7 108.9 L 170.4 107.9 L 167.1 107.0 L 163.7 106.3 L 160.3 105.7 L 156.9 105.3 L 153.5 105.1 L 150.0 105.0 L 146.5 105.1 L 143.1 105.3 L 139.7 105.7 L 136.3 106.3 L 132.9 107.0 L 129.6 107.9 L 126.3 108.9 L 123.1 110.1 L 119.9 111.5 L 116.8 112.9 L 113.8 114.6 L 110.9 116.3 L 108.1 118.2 L 105.4 120.2 L 102.8 122.3 L 100.3 124.6 L 97.9 126.9 L 95.6 129.4 L 93.5 131.9 L 91.5 134.5 L 89.7 137.2 L 87.9 140.0 L 86.3 142.8 L 84.9 145.7 L 83.6 148.6 L 82.5 151.6 L 81.5 154.6 L 80.6 157.6 L 79.9 160.6 L 79.4 163.7 L 78.9 166.7 L 78.7 169.7 L 78.6 172.8 L 78.6 175.7 L 78.7 178.7 L 79.0 181.6 L 79.5 184.5 L 80.0 187.3 L 80.7 190.1 L 81.5 192.8 L 82.4 195.4 L 83.5 197.9 L 84.6 200.4 L 85.9 202.8 L 87.2 205.1 L 88.6 207.2 L 90.1 209.3 L 91.7 211.3 L 93.3 213.2 L 95.0 215.0 L 96.8 216.7 L 98.6 218.2 L 100.4 219.7 L 102.3 221.0 L 104.2 222.3 L 106.1 223.4 L 108.0 224.4 L 110.0 225.3 L 111.9 226.1 L 113.9 226.7 L 115.8 227.3 L 117.7 227.8 L 119.6 228.2 L 121.4 228.4 L 123.2 228.6 L 125.0 228.7 L 126.8 228.7 L 128.4 228.7 L 130.1 228.5 L 131.7 228.3 L 133.2 228.0 L 134.6 227.7 L 136.0 227.3 L 137.4 226.9 L 138.6 226.4 L 139.8 225.9 L 140.9 225.3 L 142.0 224.7 L 142.9 224.1 L 143.8 223.5 L 144.7 222.9 L 145.4 222.2 L 146.1 221.6 L 146.7 221.0 L 147.3 220.3 L 147.8 219.7 L 148.2 219.2 L 148.6 218.6 L 148.9 218.1 L 149.2 217.6 L 149.4 217.1 L 149.6 216.7 L 149.7 216.3 L 149.8 216.0 L 149.9 215.7 L 149.9 215.4 L 150.0 215.2 L 150.0 215.1 L 150.0 215.0 L 150.0 215.0 L 150.0 215.0 L 150.0 215.1 L 150.0 215.2 L 150.1 215.4 L 150.1 215.7 L 150.2 216.0 L 150.3 216.3 L 150.4 216.7 L 150.6 217.1 L 150.8 217.6 L 151.1 218.1 L 151.4 218.6 L 151.8 219.2 L 152.2 219.7 L 152.7 220.3 L 153.3 221.0 L 153.9 221.6 L 154.6 222.2 L 155.3 222.9 L 156.2 223.5 L 157.1 224.1 L 158.0 224.7 L 159.1 225.3 L 160.2 225.9 L 161.4 226.4 L 162.6 226.9 L 164.0 227.3 L 165.4 227.7 L 166.8 228.0 L 168.3 228.3 L 169.9 228.5 L 171.6 228.7 L 173.2 228.7 L 175.0 228.7 L 176.8 228.6 L 178.6 228.4 L 180.4 228.2 L 182.3 227.8 L 184.2 227.3 L 186.1 226.7 L 188.1 226.1 L 190.0 225.3 L 192.0 224.4 L 193.9 223.4 L 195.8 222.3 L 197.7 221.0 L 199.6 219.7 L 201.4 218.2 L 203.2 216.7 L 205.0 215.0 Z" fill="none" stroke="currentColor" stroke-width="2.5"/></g><circle cx="221.4" cy="173.8" r="4" fill="currentColor"/><circle cx="78.6" cy="173.8" r="4" fill="currentColor"/><text x="229.4" y="187.8" font-size="12" fill="currentColor">θ = π/6</text><text x="70.6" y="187.8" font-size="12" fill="currentColor" text-anchor="end">θ = 5π/6</text><text x="240" y="40" font-size="12" fill="currentColor">r = 3 sin θ</text><text x="220" y="243" font-size="12" fill="currentColor">r = 1 + sin θ</text></svg>',
        alt: 'Polar graph of the circle r = 3 sin theta (a circle of radius 1.5 centered at (0, 1.5)) and the cardioid r = 1 + sin theta. The two curves cross at theta = pi/6 and theta = 5 pi/6, marked with dots. The shaded region lies inside the circle and outside the cardioid, between those two angles, above the cardioid.',
        caption: 'The region inside $r = 3\\sin\\theta$ and outside $r = 1 + \\sin\\theta$.',
      },
      content: `### Area Between Two Polar Curves

For a region between an **outer** curve $r = R(\\theta)$ and an **inner** curve $r = r(\\theta)$:

$$\\boxed{A = \\frac{1}{2}\\int_{\\alpha}^{\\beta}\\Big(R(\\theta)^2 - r(\\theta)^2\\Big)\\,d\\theta}$$

Square each radius separately: $R^2 - r^2$, not $(R - r)^2$.

**Step 1: Find the intersections.** Set the two equations equal and solve for $\\theta$. Check the pole separately: each curve can reach the origin at a different $\\theta$, so setting the equations equal can miss it. A quick sketch confirms the limits.

**Step 2: Decide which curve is outer.** Test one angle between the limits: the larger $r$ belongs to the outer curve.

**Step 3: Integrate.** Expand the squares and use $\\sin^2\\theta = \\frac{1 - \\cos 2\\theta}{2}$ or $\\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2}$.

### Worked Example: Inside $r = 3\\sin\\theta$ and Outside $r = 1 + \\sin\\theta$

**Intersections:** $3\\sin\\theta = 1 + \\sin\\theta \\Rightarrow \\sin\\theta = \\frac{1}{2} \\Rightarrow \\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$.

**Outer and inner:** at $\\theta = \\frac{\\pi}{2}$, the circle gives $r = 3$ and the cardioid gives $r = 2$, so the circle is the outer curve on $\\left[\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right]$.

**Setup:**

$$A = \\frac{1}{2}\\int_{\\pi/6}^{5\\pi/6}\\Big[(3\\sin\\theta)^2 - (1 + \\sin\\theta)^2\\Big]\\,d\\theta = \\frac{1}{2}\\int_{\\pi/6}^{5\\pi/6}\\left(8\\sin^2\\theta - 2\\sin\\theta - 1\\right)d\\theta$$

**Simplify:** $8\\sin^2\\theta = 4 - 4\\cos 2\\theta$, so the integrand is $3 - 4\\cos 2\\theta - 2\\sin\\theta$.

**Evaluate:**

$$A = \\frac{1}{2}\\Big[3\\theta - 2\\sin 2\\theta + 2\\cos\\theta\\Big]_{\\pi/6}^{5\\pi/6}$$

At $\\theta = \\frac{5\\pi}{6}$: $\\frac{5\\pi}{2} - 2\\left(-\\frac{\\sqrt{3}}{2}\\right) + 2\\left(-\\frac{\\sqrt{3}}{2}\\right) = \\frac{5\\pi}{2}$. At $\\theta = \\frac{\\pi}{6}$: $\\frac{\\pi}{2} - 2\\left(\\frac{\\sqrt{3}}{2}\\right) + 2\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{\\pi}{2}$.

$$A = \\frac{1}{2}\\left(\\frac{5\\pi}{2} - \\frac{\\pi}{2}\\right) = \\pi$$

> **AP Tip:** On a calculator-active question, write the integral with its limits and then evaluate it numerically. On a no-calculator question, the identity work above is expected.`
    },
    {
      id: 'pol3-between-mc',
      type: 'multiple-choice' as const,
      content: '**Area Between Two Polar Curves**\n\nThe region $\\mathcal{R}$ lies inside the circle $r = 2\\cos\\theta$ and outside the circle $r = 1$.',
      exercise: {
        questions: [
          {
            question: 'Which limits of integration bound $\\mathcal{R}$?',
            options: ['$-\\pi/3$ to $\\pi/3$', '$-\\pi/6$ to $\\pi/6$', '$0$ to $\\pi/3$', '$-\\pi/2$ to $\\pi/2$'],
            correctAnswer: 0,
            explanation: '$2\\cos\\theta = 1$ gives $\\cos\\theta = \\frac{1}{2}$, so $\\theta = \\pm\\frac{\\pi}{3}$, and between these angles $2\\cos\\theta \\ge 1$. The angles $\\pm\\frac{\\pi}{6}$ solve $\\sin\\theta = \\frac{1}{2}$ instead, $0$ to $\\frac{\\pi}{3}$ covers only the upper half, and $\\pm\\frac{\\pi}{2}$ are where $r = 2\\cos\\theta$ reaches the pole.'
          },
          {
            question: 'What is the area of $\\mathcal{R}$?',
            options: ['$\\frac{\\pi}{3} + \\frac{\\sqrt{3}}{2}$', '$\\frac{2\\pi}{3} + \\sqrt{3}$', '$\\frac{\\pi}{3} - \\frac{\\sqrt{3}}{2}$', '$\\frac{\\pi}{6} + \\frac{\\sqrt{3}}{4}$'],
            correctAnswer: 0,
            explanation: '$A = \\frac{1}{2}\\int_{-\\pi/3}^{\\pi/3}\\left(4\\cos^2\\theta - 1\\right)d\\theta = \\frac{1}{2}\\int_{-\\pi/3}^{\\pi/3}\\left(1 + 2\\cos 2\\theta\\right)d\\theta = \\frac{1}{2}\\Big[\\theta + \\sin 2\\theta\\Big]_{-\\pi/3}^{\\pi/3} = \\frac{1}{2}\\left(\\frac{2\\pi}{3} + \\sqrt{3}\\right) = \\frac{\\pi}{3} + \\frac{\\sqrt{3}}{2}$. Dropping the $\\frac{1}{2}$ doubles the answer, a sign slip on $\\sin 2\\theta$ gives the difference, and integrating only from $0$ to $\\frac{\\pi}{3}$ gives half the region.'
          }
        ]
      }
    },
    {
      id: 'pol3-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'The area enclosed by $r = 3$ (circle of radius $3$) is:',
            options: ['$9\\pi$', '$3\\pi$', '$6\\pi$', '$9\\pi/2$'],
            correctAnswer: 0,
            explanation: '$A = \\frac{1}{2}\\int_0^{2\\pi}9\\,d\\theta = \\frac{9}{2}(2\\pi) = 9\\pi$. Matches $\\pi r^2 = 9\\pi$.'
          },
          {
            question: 'The total area of all petals of $r = \\cos(3\\theta)$ is:',
            options: ['$\\pi/4$', '$3\\pi/4$', '$\\pi/2$', '$\\pi$'],
            correctAnswer: 0,
            explanation: '3 petals, each with area $\\frac{1}{2}\\int_0^{\\pi/3}\\cos^2(3\\theta)\\,d\\theta = \\pi/12$. Total: $3 \\cdot \\pi/12 = \\pi/4$.'
          },
          {
            question: 'When finding polar area, the $\\frac{1}{2}$ factor comes from:',
            options: ['The area of a thin circular sector', 'The chain rule applied to $r = f(\\theta)$', 'Converting $y\\,dx$ from Cartesian form', 'Integrating over only half the curve'],
            correctAnswer: 0,
            explanation: 'A sector with central angle $d\\theta$ and radius $r$ has area $\\frac{1}{2}r^2\\,d\\theta$, analogous to triangle area $\\frac{1}{2}bh$. Summing those sectors gives $A = \\frac{1}{2}\\int r^2\\,d\\theta$.'
          }
        ]
      }
    },
    {
      id: 'pol3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Setting Up Integrals**',
      exercise: {
        dropdowns: [
          {
            label: 'For the area of one petal of $r = \\sin(3\\theta)$, the correct limits are:',
            options: ['$0$ to $\\pi/3$', '$0$ to $\\pi$', '$0$ to $2\\pi/3$', '$0$ to $2\\pi$'],
            correctAnswers: ['$0$ to $\\pi/3$'],
            hints: ['$r = 0$ when $3\\theta = 0$ or $3\\theta = \\pi$.'],
            explanation: 'First petal: $\\sin(3\\theta) \\ge 0$ for $0 \\le 3\\theta \\le \\pi$, i.e., $0 \\le \\theta \\le \\pi/3$.'
          },
          {
            label: 'To find the area inside $r = 1 + \\cos\\theta$ but outside $r = 1$:',
            options: ['$\\frac{1}{2}\\int((1+\\cos\\theta)^2 - 1^2)\\,d\\theta$', '$\\frac{1}{2}\\int(1+\\cos\\theta)^2\\,d\\theta - \\pi$', '$\\frac{1}{2}\\int((1+\\cos\\theta) - 1)^2\\,d\\theta$', '$\\int((1+\\cos\\theta)^2 - 1^2)\\,d\\theta$'],
            correctAnswers: ['$\\frac{1}{2}\\int((1+\\cos\\theta)^2 - 1^2)\\,d\\theta$'],
            hints: ['Between two polar curves: $\\frac{1}{2}\\int(r_{\\text{outer}}^2 - r_{\\text{inner}}^2)\\,d\\theta$.'],
            explanation: 'Area between two polar curves: $\\frac{1}{2}\\int_{\\alpha}^{\\beta}(r_{\\text{outer}}^2 - r_{\\text{inner}}^2)\\,d\\theta$, with limits from the intersections (here $\\theta = -\\pi/2$ to $\\pi/2$). Square each radius before subtracting, keep the $\\frac{1}{2}$, and do not subtract the whole circle’s area $\\pi$, since only part of the circle bounds the region.'
          }
        ]
      }
    },
    {
      id: 'pol3-input',
      type: 'input-box' as const,
      content: '**Compute**',
      exercise: {
        question: 'Find the area of one petal of $r = 4\\cos(2\\theta)$. The first petal spans $-\\pi/4 \\le \\theta \\le \\pi/4$. The area is $\\frac{1}{2}\\int_{-\\pi/4}^{\\pi/4}16\\cos^2(2\\theta)\\,d\\theta$. Evaluate and enter as a multiple of $\\pi$ (e.g., enter "2" for $2\\pi$).',
        correctAnswer: '2',
        acceptableAnswers: ['2'],
        hints: ['$\\cos^2(2\\theta) = \\frac{1+\\cos 4\\theta}{2}$.', '$\\frac{1}{2}\\int_{-\\pi/4}^{\\pi/4}16 \\cdot \\frac{1+\\cos 4\\theta}{2}\\,d\\theta = 4\\int_{-\\pi/4}^{\\pi/4}(1+\\cos 4\\theta)\\,d\\theta$.'],
        explanation: '$= 4[\\theta + \\frac{\\sin 4\\theta}{4}]_{-\\pi/4}^{\\pi/4} = 4[(\\pi/4 + 0) - (-\\pi/4 + 0)] = 4 \\cdot \\pi/2 = 2\\pi$.'
      }
    },
    {
      id: 'pol3-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- Polar area: $A = \\frac{1}{2}\\int_{\\alpha}^{\\beta}r^2\\,d\\theta$
- Between curves: find the intersections (and check the pole), decide which curve is outer, then $\\frac{1}{2}\\int(r_{\\text{outer}}^2 - r_{\\text{inner}}^2)\\,d\\theta$
- Use half-angle identities: $\\cos^2\\theta = \\frac{1+\\cos 2\\theta}{2}$, $\\sin^2\\theta = \\frac{1-\\cos 2\\theta}{2}$
- Exploit symmetry to simplify calculations

> **Next:** Part 4 covers **slopes of polar curves** ($dy/dx$ in polar).`
    }
  ]
};
