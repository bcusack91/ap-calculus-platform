export const asvabSiMaterialsFastenersPart7Data = {
  topicSlug: 'asvab-si-materials-fasteners',
  sections: [
    {
      id: 'simf7-intro',
      type: 'text' as const,
      content: `# 🔩 Materials, Fasteners and Shop Processes

**Part 7 of 7 — Materials, Fasteners and Shop Processes Mastery Set**

This set mixes fasteners, wood and building materials, metals, joining and finishing the way the Shop Information subtest does. Keep a test-day pace: about **36 seconds** per question, with one line of scratch work for anything numerical.`
    },
    {
      id: 'simf7-washers-fig',
      type: 'multiple-choice' as const,
      content: '**Question 1.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><circle cx="55" cy="62" r="26"/><circle cx="55" cy="62" r="10"/><path d="M164 36 A26 26 0 1 1 152 38"/><path d="M164 50 A12 12 0 1 1 156 51"/><line x1="164" y1="36" x2="164" y2="50"/><line x1="152" y1="38" x2="156" y2="51"/><circle cx="262" cy="62" r="40"/><circle cx="262" cy="62" r="8"/></g><g font-size="13" fill="currentColor" text-anchor="middle"><text x="55" y="130">1</text><text x="160" y="130">2</text><text x="262" y="130">3</text></g></svg>',
        alt: 'Three washers seen from above. Washer 1: a plain flat ring of medium size. Washer 2: a ring of the same size that is cut through at one point, with the two cut ends slightly offset from each other. Washer 3: a very wide flat ring whose outer edge is much larger than its small center hole.',
        caption: 'Figure 1. Three washers, numbered 1 to 3.'
      },
      exercise: {
        questions: [
          {
            question: 'The figure shows (1) a plain flat ring, (2) a ring cut through at one point with its ends offset, and (3) a very wide ring with a small hole. Which washer is meant to bite in and keep a nut from loosening under vibration?',
            options: ['Washer 2', 'Washer 1', 'Washer 3', 'None of them'],
            correctAnswer: 0,
            explanation: 'Washer 2 is a split lock washer: its cut, offset ends dig into the nut and the surface and resist turning. Washer 1 is a flat washer that spreads the load, and washer 3 is a fender washer for thin or soft material.'
          }
        ]
      }
    },
    {
      id: 'simf7-threads-fig',
      type: 'multiple-choice' as const,
      content: '**Question 2.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="70" y="30" width="30" height="130"/><rect x="210" y="30" width="30" height="130"/></g><g stroke="currentColor" stroke-width="1.4"><line x1="70" y1="35" x2="100" y2="45"/><line x1="70" y1="50" x2="100" y2="60"/><line x1="70" y1="65" x2="100" y2="75"/><line x1="70" y1="80" x2="100" y2="90"/><line x1="70" y1="95" x2="100" y2="105"/><line x1="70" y1="110" x2="100" y2="120"/><line x1="70" y1="125" x2="100" y2="135"/><line x1="70" y1="140" x2="100" y2="150"/><line x1="210" y1="35" x2="240" y2="42"/><line x1="210" y1="45" x2="240" y2="52"/><line x1="210" y1="55" x2="240" y2="62"/><line x1="210" y1="65" x2="240" y2="72"/><line x1="210" y1="75" x2="240" y2="82"/><line x1="210" y1="85" x2="240" y2="92"/><line x1="210" y1="95" x2="240" y2="102"/><line x1="210" y1="105" x2="240" y2="112"/><line x1="210" y1="115" x2="240" y2="122"/><line x1="210" y1="125" x2="240" y2="132"/><line x1="210" y1="135" x2="240" y2="142"/><line x1="210" y1="145" x2="240" y2="152"/></g><g class="fig-muted" stroke="currentColor" stroke-width="1.2"><line x1="40" y1="35" x2="40" y2="155"/><line x1="34" y1="35" x2="46" y2="35"/><line x1="34" y1="155" x2="46" y2="155"/><line x1="270" y1="35" x2="270" y2="155"/><line x1="264" y1="35" x2="276" y2="35"/><line x1="264" y1="155" x2="276" y2="155"/></g><g font-size="12" fill="currentColor" text-anchor="middle"><text x="40" y="172">1 inch</text><text x="270" y="172">1 inch</text><text x="85" y="20">Bolt A: 8 threads</text><text x="225" y="20">Bolt B: 12 threads</text></g></svg>',
        alt: 'Two bolts of the same diameter. Over a marked length of 1 inch, bolt A has 8 evenly spaced threads and bolt B has 12 evenly spaced, closer threads.',
        caption: 'Figure 2. Two bolts with the same diameter and different threads.'
      },
      exercise: {
        questions: [
          {
            question: 'Two bolts have the same diameter. Bolt A has 8 threads per inch and bolt B has 12 threads per inch. Which statement is correct?',
            options: ['Bolt B has the finer thread and the smaller pitch', 'Bolt A has the finer thread and the smaller pitch', 'Bolt B moves its nut farther with each full turn', 'Both bolts have the same pitch, since the diameter matches'],
            correctAnswer: 0,
            explanation: 'More threads per inch means a finer thread with a smaller pitch: bolt B\'s pitch is $\\frac{1}{12}$ in. and bolt A\'s is $\\frac{1}{8}$ in. A nut advances one pitch per turn, so it moves farther per turn on bolt A. Diameter does not set the pitch.'
          }
        ]
      }
    },
    {
      id: 'simf7-mixed-a',
      type: 'multiple-choice' as const,
      content: '**Questions 3 to 6.** 🎯',
      exercise: {
        questions: [
          {
            question: 'How long is a 3d nail?',
            options: ['1 1/4 inches', '3/4 inch', '1 1/2 inches', '3 inches'],
            correctAnswer: 0,
            explanation: 'A 2d nail is $1$ inch and each penny adds $\\frac{1}{4}$ inch, so a 3d nail is $1\\frac{1}{4}$ inches. Three inches is a 10d nail.'
          },
          {
            question: 'Which fastener is set into wet concrete to hold a wooden sill plate to a foundation?',
            options: ['Anchor bolt', 'Toggle bolt', 'Pop rivet', 'Drywall screw'],
            correctAnswer: 0,
            explanation: 'An anchor bolt has a bent J or L end that locks into the concrete as it cures, and its threaded top passes up through the sill plate for a nut. Toggle bolts are for hollow walls.'
          },
          {
            question: 'Which panel product is made from sawdust and small wood chips bonded with glue, and swells and weakens badly when it gets wet?',
            options: ['Particleboard', 'Plywood', 'Cedar boards', 'Pressure-treated pine'],
            correctAnswer: 0,
            explanation: 'Particleboard is cheap and flat but weak when wet and poor at holding screws. Plywood is far stronger, and cedar and treated pine are chosen precisely for wet or outdoor use.'
          },
          {
            question: 'How many board feet are in a $1 \\times 12$ board that is $8$ feet long?',
            options: ['8 board feet', '96 board feet', '12 board feet', '4 board feet'],
            correctAnswer: 0,
            explanation: 'Board feet $= \\frac{1 \\times 12 \\times 8}{12} = 8$. Ninety-six is what you get if you forget to divide by $12$.'
          }
        ]
      }
    },
    {
      id: 'simf7-mixed-b',
      type: 'multiple-choice' as const,
      content: '**Questions 7 to 10.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which welding process uses a tungsten electrode to make the arc while the welder feeds a separate filler rod by hand?',
            options: ['TIG welding', 'MIG welding', 'Stick (arc) welding', 'Spot welding'],
            correctAnswer: 0,
            explanation: 'TIG (tungsten inert gas) welding keeps the tungsten electrode out of the puddle and adds filler by hand, which allows precise work on aluminum and stainless steel. MIG feeds a wire electrode through the gun, stick welding melts a coated rod, and spot welding fuses clamped sheets with current.'
          },
          {
            question: 'Steel guardrail is coated with zinc so it will not rust. What is this coating process called?',
            options: ['Galvanizing', 'Annealing', 'Tempering', 'Brazing'],
            correctAnswer: 0,
            explanation: 'A zinc coating on steel is galvanizing. Annealing and tempering are heat treatments, and brazing joins metals with a brass or bronze filler.'
          },
          {
            question: 'A table builder wants the strongest traditional joint for attaching the rails to the legs. Which joint is that?',
            options: ['Mortise and tenon', 'Butt joint', 'Miter joint', 'Rabbet joint'],
            correctAnswer: 0,
            explanation: 'A tenon on the end of the rail fits snugly into a mortise cut in the leg, giving lots of glue surface and mechanical strength. A butt joint is the weakest, a miter is mainly for corners such as frames, and a rabbet is an edge notch for panels.'
          },
          {
            question: 'Which sanding order is correct when preparing bare wood for stain?',
            options: ['80 grit, then 120, then 180', '180 grit, then 120, then 80', '220 grit, then 60, then 120', '60 grit only, applied across the grain'],
            correctAnswer: 0,
            explanation: 'Go from coarse to fine: each finer grit removes the scratches of the one before. Starting fine wastes time, jumping back to coarse undoes the work, and sanding across the grain leaves scratches that stain highlights.'
          }
        ]
      }
    },
    {
      id: 'simf7-wrap',
      type: 'text' as const,
      content: `### Lesson Wrap-Up

| Topic | Must-know facts |
|:---|:---|
| Nails | common, box, finishing, casing, brad, roofing, duplex; penny (**d**) = length: 2d = $1$ in., +$\\frac{1}{4}$ in. per penny to 10d = $3$ in. |
| Screws | wood, sheet-metal, machine (blunt, into a nut or tapped hole), lag (hex head, wrench); flat heads sit flush |
| Bolts and nuts | carriage (wood), toggle (hollow wall), anchor (concrete); wing, lock, castle, acorn nuts; flat, lock, fender washers |
| Threads and rivets | TPI and pitch, tap (inside) and die (outside), right-hand threads tighten clockwise; pop rivets from one side |
| Wood and building | hardwood vs softwood, plywood vs OSB vs particleboard, nominal vs actual, board feet, studs 16 in. on center, concrete cures |
| Metal and finishing | ferrous vs nonferrous, gauge (higher = thinner), solder/braze/weld, flux, welding helmet, grit (higher = finer), primer and stain |

**Next steps:** take the exit quiz for this topic. That completes Shop Information. Next comes **Mechanical Comprehension**.`
    }
  ]
};
