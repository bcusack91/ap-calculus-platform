export const lessonData = {
  topicSlug: 'sat-circles-advanced',
  sections: [
    {
      id: 'circ-adv-p3-intro',
      type: 'text' as const,
      content: `# Circles: Timed Drill

**Part 3 of 3 — Four Items at Test Pace**

About **90 seconds each**. These four cover the highest-frequency hard-tier skeletons: parallel chords, rolling-wheel arc length, the annulus cost chain, and the chord-plus-center triangle.

Run the checklist before every answer:

1. **Is my $r$ actually $r$, or is it still $r^{2}$?**
2. **Radians or degrees — and did the question mix them?**
3. **Which layer was requested?** Length, area, volume, or dollars.
4. **Same side or opposite sides?** Subtract or add.`
    },
    {
      id: 'circ-adv-p3-q1',
      type: 'quiz' as const,
      question: `A circle has radius $13$. Two parallel chords lie on the same side of the center; one has length $10$ and the other has length $24$. What is the distance between the two chords?`,
      options: ['$7$', '$12$', '$14$', '$17$'],
      correctAnswer: 0,
      explanation: `Each chord's distance from the center comes from the half-chord and the radius. For the chord of length $10$: $\\sqrt{13^{2} - 5^{2}} = \\sqrt{144} = 12$. For the chord of length $24$: $\\sqrt{13^{2} - 12^{2}} = \\sqrt{25} = 5$. Because both chords are on the SAME side, the distance between them is $12 - 5 = 7$. The traps: $17$ adds the two distances, which is the answer for chords on OPPOSITE sides — the one clause in the stem that decides the whole problem; $14$ subtracts the chord LENGTHS ($24 - 10$); $12$ is just one chord's distance from the center.`
    },
    {
      id: 'circ-adv-p3-q2',
      type: 'quiz' as const,
      question: `A bicycle wheel of radius $0.4$ m rotates through $\\dfrac{5\\pi}{3}$ radians each second as the bicycle rolls without slipping. To the nearest tenth of a meter, how far does the bicycle travel in $6$ seconds?`,
      options: ['$2.1$', '$12.6$', '$25.1$', '$31.4$'],
      correctAnswer: 1,
      explanation: `Rolling without slipping means the distance travelled equals the arc length. Per second: $r\\theta = 0.4\\left(\\frac{5\\pi}{3}\\right) = \\frac{2\\pi}{3} \\approx 2.09$ m. Over $6$ seconds: $6 \\times 2.09 \\approx 12.6$ m. The traps: $2.1$ is the distance for ONE second, ignoring the six; $25.1$ uses the DIAMETER $0.8$ in place of the radius, doubling the answer; $31.4$ multiplies the angle by the time ($\\frac{5\\pi}{3} \\times 6 = 10\\pi$) and reports radians as though they were meters, skipping the radius entirely.`
    },
    {
      id: 'circ-adv-p3-q3',
      type: 'quiz' as const,
      question: `A circular garden of radius $9$ m is surrounded by a path of uniform width $3$ m. The path is to be covered with gravel to a depth of $0.1$ m, and gravel costs $50$ dollars per cubic meter. To the nearest dollar, what is the total cost of the gravel for the path?`,
      options: ['$141$', '$990$', '$2262$', '$9896$'],
      correctAnswer: 1,
      explanation: `The path is an annulus with outer radius $9 + 3 = 12$, so its area is $\\pi(12^{2} - 9^{2}) = 63\\pi \\approx 197.92$ square meters. Volume $= 197.92 \\times 0.1 \\approx 19.79$ cubic meters, and the cost is $19.79 \\times 50 \\approx 990$ dollars. The traps: $2262$ gravels the ENTIRE outer circle, garden included, instead of just the ring; $141$ uses $\\pi w^{2} = 9\\pi$ for the path area, treating the width as a radius; $9896$ omits the depth, pricing square meters as though they were cubic meters.`
    },
    {
      id: 'circ-adv-p3-q4',
      type: 'quiz' as const,
      question: `In the $xy$-plane, the line $y = 4$ intersects the circle $(x - 3)^{2} + (y - 1)^{2} = 25$ at two points. Those two points and the center of the circle form a triangle. What is the perimeter of that triangle?`,
      options: ['$8$', '$10$', '$13$', '$18$'],
      correctAnswer: 3,
      explanation: `Substituting $y = 4$ gives $(x - 3)^{2} + 9 = 25$, so $(x - 3)^{2} = 16$ and $x = -1$ or $x = 7$. The chord runs from $(-1, 4)$ to $(7, 4)$, a length of $8$. The other two sides are radii, each $5$ — this is the step the whole item is built on. Perimeter $= 8 + 5 + 5 = 18$. The traps: $8$ is the chord alone; $13$ adds only one radius; $10$ is the diameter, which is what you get by assuming the chord passes through the center — it does not, since the center is at $y = 1$ and the line is at $y = 4$.`
    }
  ]
}
