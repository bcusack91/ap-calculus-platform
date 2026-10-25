export const asvabMcSimpleMachinesPart7Data = {
  topicSlug: 'asvab-mc-simple-machines',
  sections: [
    {
      id: 'msm7-intro',
      type: 'text' as const,
      content: `# 🏗️ Levers, Pulleys, Inclined Planes and Screws

**Part 7 of 7 — Simple Machines Mastery Set**

Every simple machine appears in this set: levers of all three classes, pulleys, ramps, wedges, wheels and axles, and screws. Work each one with its formula, then sanity-check: with MA above $1$, the effort must come out **smaller** than the load. Allow about **$1\\frac{1}{2}$ minutes** per question.`
    },
    {
      id: 'msm7-board',
      type: 'multiple-choice' as const,
      content: '**Question 1.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><line x1="40" y1="92" x2="284" y2="92" stroke="currentColor" stroke-width="6"/><polygon points="40,96 28,120 52,120" fill="none" stroke="currentColor" stroke-width="2"/><rect x="104" y="58" width="32" height="30" fill="none" stroke="currentColor" stroke-width="2"/><text x="120" y="52" font-size="12" fill="currentColor" text-anchor="middle">90 lb</text><g class="fig-accent"><line x1="280" y1="128" x2="280" y2="106" stroke="currentColor" stroke-width="3"/><polygon points="280,96 274,108 286,108" fill="currentColor"/><text x="290" y="124" font-size="12" fill="currentColor">lift</text></g><g class="fig-muted" stroke="currentColor" stroke-width="1"><line x1="40" y1="140" x2="120" y2="140"/><line x1="40" y1="135" x2="40" y2="145"/><line x1="120" y1="135" x2="120" y2="145"/><line x1="40" y1="158" x2="280" y2="158"/><line x1="40" y1="153" x2="40" y2="163"/><line x1="280" y1="153" x2="280" y2="163"/></g><g font-size="11" fill="currentColor"><text x="126" y="144">2 ft</text><text x="200" y="154">6 ft</text><text x="16" y="138">hinge</text></g></svg>',
        alt: 'A board hinged at its left end, which is the fulcrum. A 90-pound load sits on the board 2 feet from the hinge. At the right end, 6 feet from the hinge, an arrow lifts upward.',
        caption: 'Figure 1. A board hinged at one end.'
      },
      exercise: {
        questions: [
          {
            question: 'A board is hinged at one end. A $90$-lb load sits $2$ ft from the hinge, and you lift the free end $6$ ft from the hinge. What lifting force balances the load?',
            options: ['30 lb', '270 lb', '45 lb', '22.5 lb'],
            correctAnswer: 0,
            explanation: 'This is a second-class lever (load in the middle). Lift × $6$ = $90 \\times 2 = 180$, so the lift is $30$ lb. $270$ lb comes from multiplying by $3$ instead of dividing.'
          }
        ]
      }
    },
    {
      id: 'msm7-pulley',
      type: 'multiple-choice' as const,
      content: '**Question 2.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><line x1="40" y1="12" x2="280" y2="12" stroke="currentColor" stroke-width="3"/><g stroke="currentColor" stroke-width="2" fill="none"><line x1="150" y1="12" x2="150" y2="26"/><rect x="110" y="26" width="80" height="14"/><rect x="110" y="112" width="80" height="14"/><line x1="120" y1="40" x2="120" y2="112"/><line x1="140" y1="40" x2="140" y2="112"/><line x1="160" y1="40" x2="160" y2="112"/><line x1="180" y1="40" x2="180" y2="112"/><path d="M190 33 L210 33 L210 150"/><line x1="150" y1="126" x2="150" y2="138"/><rect x="130" y="138" width="40" height="30"/></g><g class="fig-accent"><polygon points="210,160 204,148 216,148" fill="currentColor"/><text x="218" y="150" font-size="12" fill="currentColor">pull down</text></g><text x="150" y="184" font-size="12" fill="currentColor" text-anchor="middle">280 lb</text></svg>',
        alt: 'A block and tackle. The top block hangs from the ceiling; the bottom block holds a 280-pound load. Four rope segments run between the blocks. The free end leaves the top block and is pulled downward.',
        caption: 'Figure 2. A block and tackle lifting 280 lb.'
      },
      exercise: {
        questions: [
          {
            question: 'A block and tackle has four rope segments running between its fixed top block and its moving bottom block; the free end comes down from the top block. What effort lifts the $280$-lb load, ignoring friction?',
            options: ['70 lb', '56 lb', '93 lb', '140 lb'],
            correctAnswer: 0,
            explanation: 'Four segments support the moving block, so MA $= 4$ and effort $= 280 \\div 4 = 70$ lb. The free end comes off the fixed block, so counting it ($280 \\div 5 = 56$) is the trap.'
          }
        ]
      }
    },
    {
      id: 'msm7-ramp-input',
      type: 'input-boxes' as const,
      content: `**Questions 3 and 4.** ✍️

**3)** A $320$-lb crate is pushed up a frictionless ramp $16$ feet long to a dock $4$ feet high. What is the ideal effort, in pounds? (number only)

**4)** A real ramp of the same size has friction, and its efficiency is $80\\%$. What effort is actually needed, in pounds? (number only)`,
      exercise: {
        boxes: 2,
        correctAnswers: ['80', '100'],
        hint1: 'Effort = load × height ÷ length.',
        hint2: 'Actual effort = ideal effort ÷ efficiency.',
        hint3: '80 ÷ 0.8',
        explanation: '(3) $320 \\times 4 \\div 16 = 80$ lb. (4) Only $80\\%$ of the work you put in is useful, so the effort must be $80 \\div 0.8 = 100$ lb.'
      }
    },
    {
      id: 'msm7-wheel',
      type: 'multiple-choice' as const,
      content: '**Question 5.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><circle cx="120" cy="80" r="50" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="120" cy="80" r="10" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="120" cy="80" r="2" fill="currentColor"/><line x1="110" y1="80" x2="110" y2="150" stroke="currentColor" stroke-width="2"/><rect x="94" y="150" width="32" height="28" fill="none" stroke="currentColor" stroke-width="2"/><g class="fig-accent"><line x1="170" y1="80" x2="170" y2="140" stroke="currentColor" stroke-width="2.5"/><polygon points="170,150 164,138 176,138" fill="currentColor"/><text x="178" y="140" font-size="12" fill="currentColor">effort</text></g><g class="fig-muted" stroke="currentColor" stroke-width="1"><line x1="120" y1="80" x2="166" y2="58"/></g><g font-size="11" fill="currentColor"><text x="176" y="52">wheel radius 10 in.</text><text x="10" y="40">axle radius 2 in.</text><text x="110" y="194" text-anchor="middle">250 lb</text></g></svg>',
        alt: 'A wheel and axle seen end-on. The wheel has a radius of 10 inches and the axle a radius of 2 inches. A rope wound on the axle holds a 250-pound load. A second rope wound on the rim of the wheel is pulled down as the effort.',
        caption: 'Figure 3. A wheel and axle.'
      },
      exercise: {
        questions: [
          {
            question: 'A rope on the rim of a wheel of radius $10$ inches is pulled to lift a $250$-lb load hanging from a rope on its axle of radius $2$ inches. What effort is needed, ignoring friction?',
            options: ['50 lb', '1,250 lb', '25 lb', '125 lb'],
            correctAnswer: 0,
            explanation: 'MA $= 10 \\div 2 = 5$, so effort $= 250 \\div 5 = 50$ lb. Pulling on the big wheel to turn the small axle multiplies force; $1{,}250$ lb is the multiply-instead-of-divide slip.'
          }
        ]
      }
    },
    {
      id: 'msm7-mixed',
      type: 'multiple-choice' as const,
      content: '**Questions 6 to 10.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A bolt has $16$ threads per inch. How many full turns does a nut need to move $\\frac{1}{2}$ inch along it?',
            options: ['8 turns', '32 turns', '4 turns', '16 turns'],
            correctAnswer: 0,
            explanation: 'The pitch is $\\frac{1}{16}$ inch, so turns $= \\frac{1}{2} \\div \\frac{1}{16} = 8$.'
          },
          {
            question: 'Which of these is a third-class lever?',
            options: ['A fishing rod held at the butt and pulled up near the reel', 'A crowbar prying up a board over a small block', 'A wheelbarrow lifted at its handles', 'A pair of scissors cutting paper'],
            correctAnswer: 0,
            explanation: 'On a fishing rod the butt end is the fulcrum, your lifting hand (effort) is in the middle and the fish (load) is at the tip: third class. The crowbar and scissors are first class, and the wheelbarrow is second class.'
          },
          {
            question: 'A $90$-lb box sits $4$ ft to the left of a seesaw\'s pivot. How far to the right must a $120$-lb box sit to balance it?',
            options: ['3 ft', '5 1/3 ft', '4 ft', '2 ft'],
            correctAnswer: 0,
            explanation: '$120 \\times d = 90 \\times 4 = 360$, so $d = 3$ ft. The heavier box sits closer to the pivot.'
          },
          {
            question: 'A block and tackle with an MA of $5$ raises a load $2$ feet. How much rope does the operator pull?',
            options: ['10 feet', '2 feet', '2/5 foot', '7 feet'],
            correctAnswer: 0,
            explanation: 'Rope pulled = MA × rise = $5 \\times 2 = 10$ ft. Less force always costs more distance.'
          },
          {
            question: 'A log-splitting wedge is $12$ inches long and $3$ inches thick at the back. What is its ideal mechanical advantage?',
            options: ['4', '36', '9', '1/4'],
            correctAnswer: 0,
            explanation: 'Wedge MA ≈ length ÷ thickness $= 12 \\div 3 = 4$.'
          }
        ]
      }
    },
    {
      id: 'msm7-wrap',
      type: 'text' as const,
      content: `### Lesson Wrap-Up

| Machine | Formula | Watch out for |
|:---|:---|:---|
| Lever | effort × effort arm = load × load arm | arms from the **fulcrum**; F-L-E for the class |
| Pulley | MA = supporting segments on the moving block | the free end counts only off the moving block |
| Inclined plane | MA = slope length ÷ height | use the slope, not the run |
| Wedge | MA ≈ length ÷ thickness | thinner = more MA |
| Wheel and axle | MA = wheel radius ÷ axle radius | force on the axle side loses force |
| Screw | distance = turns × pitch; MA = handle travel ÷ pitch | finer thread = more turns |

**Next steps:** take the exit quiz for this topic, then finish Mechanical Comprehension with **Gears, Fluids and Structures**.`
    }
  ]
};
