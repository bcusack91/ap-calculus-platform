export const asvabMcForcesMotionPart7Data = {
  topicSlug: 'asvab-mc-forces-motion',
  sections: [
    {
      id: 'mcf7-intro',
      type: 'text' as const,
      content: `# ⚙️ Forces, Work and Energy

**Part 7 of 7 — Forces, Work and Energy Mastery Set**

This set mixes net force, center of gravity, friction, motion, work, energy, power, pressure and materials, the way the Mechanical Comprehension subtest does. Give yourself about **$1\\frac{1}{2}$ minutes** per question and use scratch paper for the arithmetic.`
    },
    {
      id: 'mcf7-net',
      type: 'multiple-choice' as const,
      content: '**Question 1.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><line x1="10" y1="120" x2="310" y2="120" stroke="currentColor" stroke-width="2"/><rect x="125" y="60" width="70" height="60" fill="none" stroke="currentColor" stroke-width="2"/><g class="fig-accent"><line x1="195" y1="75" x2="268" y2="75" stroke="currentColor" stroke-width="3"/><polygon points="280,75 268,68 268,82" fill="currentColor"/><text x="234" y="66" font-size="12" fill="currentColor" text-anchor="middle">25 lb</text><line x1="195" y1="105" x2="268" y2="105" stroke="currentColor" stroke-width="3"/><polygon points="280,105 268,98 268,112" fill="currentColor"/><text x="234" y="98" font-size="12" fill="currentColor" text-anchor="middle">10 lb</text></g><g class="fig-accent-2"><line x1="125" y1="90" x2="52" y2="90" stroke="currentColor" stroke-width="3"/><polygon points="40,90 52,83 52,97" fill="currentColor"/><text x="86" y="80" font-size="12" fill="currentColor" text-anchor="middle">50 lb</text></g></svg>',
        alt: 'A crate on the floor. Two ropes pull it to the right with 25 pounds and 10 pounds. One rope pulls it to the left with 50 pounds.',
        caption: 'Figure 1. Three ropes pull on a crate.'
      },
      exercise: {
        questions: [
          {
            question: 'A crate is pulled right by ropes of $25$ lb and $10$ lb and left by a rope of $50$ lb. What is the net force on the crate?',
            options: ['15 lb to the left', '15 lb to the right', '85 lb to the left', '35 lb to the right'],
            correctAnswer: 0,
            explanation: 'Right: $25 + 10 = 35$ lb. Left: $50$ lb. Net: $50 - 35 = 15$ lb toward the larger side, the left. $85$ lb wrongly adds forces that oppose each other.'
          }
        ]
      }
    },
    {
      id: 'mcf7-stacks',
      type: 'multiple-choice' as const,
      content: '**Question 2.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><line x1="10" y1="170" x2="310" y2="170" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="2" fill="none"><rect x="40" y="140" width="60" height="30"/><rect x="55" y="110" width="60" height="30"/><rect x="70" y="80" width="60" height="30"/><rect x="180" y="140" width="60" height="30"/><rect x="215" y="110" width="60" height="30"/><rect x="250" y="80" width="60" height="30"/></g><g font-size="14" font-weight="bold" fill="currentColor" text-anchor="middle"><text x="85" y="66">P</text><text x="245" y="66">Q</text></g></svg>',
        alt: 'Two stacks of three identical blocks, each block 60 units wide. In stack P, each block is shifted 15 units to the right of the one below it. In stack Q, each block is shifted 35 units to the right of the one below it, so the top block hangs well past the bottom block.',
        caption: 'Figure 2. Two stacks of three identical blocks.'
      },
      exercise: {
        questions: [
          {
            question: 'Two stacks use three identical blocks, each $60$ units wide. In stack P each block sits $15$ units to the right of the block below; in stack Q each sits $35$ units to the right. Which stack falls over?',
            options: ['Stack Q only', 'Stack P only', 'Both stacks', 'Neither stack'],
            correctAnswer: 0,
            explanation: 'A stack falls when the center of gravity of the blocks above any block passes that block\'s edge. In Q, the top block\'s center is $35 + 30 = 65$ units right of the middle block\'s left edge, past its $60$-unit width, so it slides off (and the top two together are centered past the bottom block\'s edge too). In P, every center of gravity stays over the block beneath it.'
          }
        ]
      }
    },
    {
      id: 'mcf7-ramps',
      type: 'multiple-choice' as const,
      content: '**Question 3.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><polygon points="20,160 100,160 100,50"/><polygon points="130,160 300,160 300,50"/></g><g class="fig-accent"><circle cx="92" cy="50" r="8" fill="currentColor"/><circle cx="292" cy="50" r="8" fill="currentColor"/></g><g class="fig-muted" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"><line x1="100" y1="50" x2="300" y2="50"/></g><g font-size="13" font-weight="bold" fill="currentColor" text-anchor="middle"><text x="60" y="178">A (steep)</text><text x="215" y="178">B (gentle)</text></g><text x="200" y="42" font-size="11" fill="currentColor" text-anchor="middle">same height</text></svg>',
        alt: 'Two frictionless ramps of the same height. Ramp A is short and steep; ramp B is long and gentle. An identical ball sits at rest at the top of each.',
        caption: 'Figure 3. Two ramps of equal height.'
      },
      exercise: {
        questions: [
          {
            question: 'Identical balls start from rest at the tops of two frictionless ramps of the same height: A is short and steep, B is long and gentle. How do their speeds compare at the bottom?',
            options: ['Both reach the same speed', 'The ball on A is faster', 'The ball on B is faster', 'It depends on ramp length'],
            correctAnswer: 0,
            explanation: 'Each ball turns the same potential energy (same weight, same height) into kinetic energy, so they reach the same speed. The ball on the steep ramp gets there sooner, but not faster.'
          }
        ]
      }
    },
    {
      id: 'mcf7-input',
      type: 'input-boxes' as const,
      content: `**Questions 4 and 5.** ✍️

**4)** A team drags a sled with a steady $60$-lb pull along the ground for $50$ feet. How much work does the pull do, in foot-pounds? (number only)

**5)** A hoist does $27{,}500$ ft·lb of work in $10$ seconds. What is its power in horsepower? ($1$ hp $= 550$ ft·lb/s; number only)`,
      exercise: {
        boxes: 2,
        correctAnswers: ['3000', '5'],
        hint1: 'Work = force × distance.',
        hint2: 'First find ft·lb per second, then divide by 550.',
        hint3: '27,500 ÷ 10 = 2,750.',
        explanation: '(4) $60 \\times 50 = 3{,}000$ ft·lb. (5) $27{,}500 \\div 10 = 2{,}750$ ft·lb/s, and $2{,}750 \\div 550 = 5$ hp.'
      }
    },
    {
      id: 'mcf7-mixed',
      type: 'multiple-choice' as const,
      content: '**Questions 6 to 10.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Two soldiers of equal weight climb the same flight of stairs. One takes $10$ seconds and the other takes $20$ seconds. Which is true?',
            options: ['Both do the same work, but the faster one uses more power', 'The faster soldier does twice as much work', 'The slower soldier uses more power because he works longer', 'Both use the same power because the stairs are the same'],
            correctAnswer: 0,
            explanation: 'Work is weight × height, which is the same for both. Power is work ÷ time, so finishing in half the time takes twice the power.'
          },
          {
            question: 'Why are ball bearings used in the wheel hubs of a trailer?',
            options: ['They replace sliding friction with much smaller rolling friction', 'They add friction so the wheels do not spin too freely', 'They make the hub heavier and more stable on the road', 'They keep the grease from touching the moving parts'],
            correctAnswer: 0,
            explanation: 'Bearings let parts roll instead of slide, and rolling friction is far smaller, so there is less heat and wear. They work together with grease, not instead of it.'
          },
          {
            question: 'After a long drive on a hot highway, a truck\'s tire pressure reads higher than it did that morning. Why?',
            options: ['The air in the tire got hotter, which raises its pressure', 'The tire stretched, which squeezes the air into less space', 'Air leaked into the tire through the valve while driving', 'Friction with the road added more air to the tire'],
            correctAnswer: 0,
            explanation: 'Heating a sealed gas raises its pressure. Rolling and the hot road warm the air in the tire, so the gauge reads higher until it cools.'
          },
          {
            question: 'A $120$-lb person stands on one heel with a contact area of $2$ square inches. What pressure does the heel put on the floor?',
            options: ['60 psi', '240 psi', '122 psi', '30 psi'],
            correctAnswer: 0,
            explanation: 'Pressure $= 120 \\div 2 = 60$ psi. Multiplying ($240$) is the classic slip: pressure is force **divided** by area.'
          },
          {
            question: 'An empty pickup and a fully loaded dump truck are both rolling at $25$ mph. Which needs more braking force to stop in the same distance, and why?',
            options: ['The dump truck: more mass, more momentum and energy', 'The pickup, because lighter vehicles slide more easily', 'Both need the same, because their speeds are equal', 'The pickup, because it has less friction on its tires'],
            correctAnswer: 0,
            explanation: 'Momentum is mass × velocity. At the same speed, the much heavier dump truck has far more momentum (and kinetic energy), so it takes more braking force to stop it in the same distance (the brakes must remove all that kinetic energy over the stopping distance).'
          }
        ]
      }
    },
    {
      id: 'mcf7-wrap',
      type: 'text' as const,
      content: `### Lesson Wrap-Up

| Idea | What to remember |
|:---|:---|
| Net force | same direction adds, opposite subtracts; balanced = no change in motion |
| Center of gravity | tips when the CG passes the edge of the base; low and wide is stable |
| Tension and compression | ropes pull (tension), posts push (compression); shallow ropes carry more tension |
| Friction | along the surface, against sliding; static > kinetic; rolling is smallest |
| Motion | speed = distance ÷ time; acceleration = change in speed ÷ time; released objects go straight |
| Work and energy | $W = Fd$; no movement, no work; KE grows with speed squared; energy is conserved |
| Power | $P = W \\div t$; $1$ hp $= 550$ ft·lb/s; efficiency never over $100\\%$ |
| Pressure and materials | $P = F \\div A$; heat raises gas pressure; brittle, ductile, elastic; things expand when heated |

**Next steps:** take the exit quiz for this topic, then go on to **Levers, Pulleys, Inclined Planes and Screws**.`
    }
  ]
};
