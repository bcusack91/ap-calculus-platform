export const asvabSiToolsPart7Data = {
  topicSlug: 'asvab-si-tools',
  sections: [
    {
      id: 'sit7-intro',
      type: 'text' as const,
      content: `# 🔧 Hand and Power Tools

**Part 7 of 7 — Hand and Power Tools Mastery Set**

This set mixes every tool family the way the real subtest does: some picture questions, some "best tool for the job," some correct-practice and safety questions, and one measuring question.

**Pace yourself like test day:** about **36 seconds** per question. Use the routine from Part 6: **verb → material and shape → the tool designed for it**.`
    },
    {
      id: 'sit7-wrench-fig',
      type: 'multiple-choice' as const,
      content: '**Question 1.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="116" y="88" width="188" height="28" rx="13"/><circle cx="284" cy="102" r="7"/><rect x="62" y="50" width="62" height="104" rx="12"/><rect x="22" y="50" width="44" height="20" rx="3"/><rect x="22" y="118" width="44" height="20" rx="3"/><rect x="66" y="118" width="34" height="20" stroke-dasharray="4 3"/></g><g class="fig-accent" stroke="currentColor" stroke-width="2" fill="none"><rect x="72" y="140" width="28" height="12" rx="3"/><line x1="78" y1="140" x2="78" y2="152"/><line x1="84" y1="140" x2="84" y2="152"/><line x1="90" y1="140" x2="90" y2="152"/><line x1="96" y1="140" x2="96" y2="152"/></g><text x="104" y="180" font-size="12" fill="currentColor">knurled screw</text><line x1="100" y1="168" x2="88" y2="154" stroke="currentColor" stroke-width="1"/></svg>',
        alt: 'A wrench with a long handle. Its head has an upper jaw that is part of the head and a lower jaw that slides on a track. A small ribbed (knurled) screw below the lower jaw moves it to open or close the gap between the jaws.',
        caption: 'Figure 1. A wrench with one sliding jaw.'
      },
      exercise: {
        questions: [
          {
            question: 'The wrench in the figure has one fixed jaw and one jaw that a knurled screw slides open or closed. What is its main advantage?',
            options: ['One tool fits nuts and bolts of many sizes', 'It reads the torque applied to a fastener as you turn', 'Its toothed jaws bite into round pipe', 'It locks onto the work so you can let go'],
            correctAnswer: 0,
            explanation: 'This is an adjustable (crescent) wrench: the knurled screw sets the jaw opening, so one wrench fits many sizes. A torque wrench reads tightness, a pipe wrench has toothed jaws for pipe, and locking pliers lock on hands-free.'
          }
        ]
      }
    },
    {
      id: 'sit7-ruler-input',
      type: 'input-boxes' as const,
      content: `**Question 2.** Read the rule. ✍️

Arrow **P** points to a mark $14$ sixteenth-spaces past $0$. Arrow **Q** points to a mark $11$ sixteenth-spaces past the $1$-inch line.

**1)** The reading at **P**, in inches (fraction or decimal):

**2)** The reading at **Q**, in inches (a mixed number like 1 1/2, or a decimal):

**3)** The distance from **P** to **Q**, in inches (fraction or decimal):`,
      figure: {
        svg: '<svg viewBox="0 0 320 104" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect x="10" y="36" width="300" height="58" fill="none" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="1.2"><line x1="20" y1="36" x2="20" y2="76"/><line x1="28.75" y1="36" x2="28.75" y2="45"/><line x1="37.5" y1="36" x2="37.5" y2="51"/><line x1="46.25" y1="36" x2="46.25" y2="45"/><line x1="55" y1="36" x2="55" y2="58"/><line x1="63.75" y1="36" x2="63.75" y2="45"/><line x1="72.5" y1="36" x2="72.5" y2="51"/><line x1="81.25" y1="36" x2="81.25" y2="45"/><line x1="90" y1="36" x2="90" y2="66"/><line x1="98.75" y1="36" x2="98.75" y2="45"/><line x1="107.5" y1="36" x2="107.5" y2="51"/><line x1="116.25" y1="36" x2="116.25" y2="45"/><line x1="125" y1="36" x2="125" y2="58"/><line x1="133.75" y1="36" x2="133.75" y2="45"/><line x1="142.5" y1="36" x2="142.5" y2="51"/><line x1="151.25" y1="36" x2="151.25" y2="45"/><line x1="160" y1="36" x2="160" y2="76"/><line x1="168.75" y1="36" x2="168.75" y2="45"/><line x1="177.5" y1="36" x2="177.5" y2="51"/><line x1="186.25" y1="36" x2="186.25" y2="45"/><line x1="195" y1="36" x2="195" y2="58"/><line x1="203.75" y1="36" x2="203.75" y2="45"/><line x1="212.5" y1="36" x2="212.5" y2="51"/><line x1="221.25" y1="36" x2="221.25" y2="45"/><line x1="230" y1="36" x2="230" y2="66"/><line x1="238.75" y1="36" x2="238.75" y2="45"/><line x1="247.5" y1="36" x2="247.5" y2="51"/><line x1="256.25" y1="36" x2="256.25" y2="45"/><line x1="265" y1="36" x2="265" y2="58"/><line x1="273.75" y1="36" x2="273.75" y2="45"/><line x1="282.5" y1="36" x2="282.5" y2="51"/><line x1="291.25" y1="36" x2="291.25" y2="45"/><line x1="300" y1="36" x2="300" y2="76"/></g><g font-size="13" fill="currentColor" text-anchor="middle"><text x="20" y="89">0</text><text x="160" y="89">1</text><text x="300" y="89">2</text></g><g class="fig-accent"><polygon points="136.5,17 148.5,17 142.5,34" fill="currentColor"/><polygon points="250.25,17 262.25,17 256.25,34" fill="currentColor"/><text x="142.5" y="13" font-size="13" font-weight="bold" fill="currentColor" text-anchor="middle">P</text><text x="256.25" y="13" font-size="13" font-weight="bold" fill="currentColor" text-anchor="middle">Q</text></g></svg>',
        alt: 'The first 2 inches of a rule divided into sixteenths. Arrow P points to the short eighth-inch tick 14 sixteenth-spaces past 0, just before the 1-inch mark. Arrow Q points to the shortest tick 11 sixteenth-spaces past the 1-inch mark.',
        caption: 'Figure 2. A rule marked in sixteenths of an inch.'
      },
      exercise: {
        boxes: 3,
        correctAnswers: ['7/8', '27/16', '13/16'],
        hint1: '14 sixteenths reduces by dividing top and bottom by 2.',
        hint2: 'Q is 1 inch plus 11 sixteenths.',
        hint3: 'Write both in sixteenths: 14/16 and 27/16.',
        explanation: '(1) $\\frac{14}{16} = \\frac{7}{8}$ in. (2) $1\\frac{11}{16}$ in. $= \\frac{27}{16}$ in. ($1.6875$). (3) $\\frac{27}{16} - \\frac{14}{16} = \\frac{13}{16}$ in.'
      }
    },
    {
      id: 'sit7-square-fig',
      type: 'multiple-choice' as const,
      content: '**Question 3.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="40" y="88" width="268" height="22"/><polygon points="70,30 112,30 112,150 70,108"/><rect x="80" y="44" width="24" height="10" rx="5"/><circle cx="91" cy="126" r="5"/></g><g stroke="currentColor" stroke-width="1"><line x1="130" y1="88" x2="130" y2="98"/><line x1="150" y1="88" x2="150" y2="94"/><line x1="170" y1="88" x2="170" y2="98"/><line x1="190" y1="88" x2="190" y2="94"/><line x1="210" y1="88" x2="210" y2="98"/><line x1="230" y1="88" x2="230" y2="94"/><line x1="250" y1="88" x2="250" y2="98"/><line x1="270" y1="88" x2="270" y2="94"/><line x1="290" y1="88" x2="290" y2="98"/></g></svg>',
        alt: 'A long, flat steel blade marked with ruler graduations. A metal head slides along the blade and is held by a locking knob. One face of the head is at a right angle to the blade and another face is cut at a 45-degree angle. The head has a small bubble vial.',
        caption: 'Figure 3. A layout tool.'
      },
      exercise: {
        questions: [
          {
            question: 'The tool in the figure has a ruled steel blade and a head that slides and locks along it. The head has one face square to the blade, one face at 45 degrees, and a small bubble vial. What is the tool?',
            options: ['Combination square', 'Carpenter\'s framing square', 'Try square', 'Marking gauge'],
            correctAnswer: 0,
            explanation: 'A sliding, locking head with a $90^\\circ$ face, a $45^\\circ$ face and often a small level is the combination square. A framing square is a large one-piece L, a try square has a fixed handle that reads only $90^\\circ$, and a marking gauge scribes lines parallel to an edge.'
          }
        ]
      }
    },
    {
      id: 'sit7-mixed-a',
      type: 'multiple-choice' as const,
      content: '**Questions 4 to 7.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A metalworker needs to strike a center punch and a cold chisel. Which hammer is designed for that?',
            options: ['Ball-peen hammer', 'Framing claw hammer', 'Rubber mallet', 'Tack hammer'],
            correctAnswer: 0,
            explanation: 'The ball-peen hammer is the metalworking hammer, with a hardened face for striking punches and chisels. A claw hammer is for nails, a mallet is for wood and finished surfaces, and a tack hammer is too light.'
          },
          {
            question: 'A nut sits deep inside a narrow recess, where no wrench handle has room to swing. Which tool setup reaches it best?',
            options: ['A socket on an extension, turned by a ratchet', 'An open-end wrench slid onto the nut from one side', 'A pair of slip-joint pliers on the nut', 'A pipe wrench with its jaws opened wide'],
            correctAnswer: 0,
            explanation: 'An extension lets the socket reach down into the recess while the ratchet stays outside, where it has room to swing. A wrench needs swing room right at the nut, pliers round off nuts, and a pipe wrench is for pipe.'
          },
          {
            question: 'Which power tool is best for cutting tight curves in a block of hardwood $2$ inches thick, working at a bench?',
            options: ['Band saw', 'Table saw', 'Miter saw', 'Circular saw'],
            correctAnswer: 0,
            explanation: 'A band saw\'s narrow continuous blade turns curves and handles thick stock. Table, miter and circular saws have large round blades that cut only straight lines.'
          },
          {
            question: 'Before painting, a soldier must remove loose rust and flaking paint from a steel ammunition box. Which hand tool does this job?',
            options: ['Wire brush', 'Hand plane', 'Wood rasp', 'Nail set'],
            correctAnswer: 0,
            explanation: 'A wire brush scrubs off rust, scale and loose paint. A plane and a rasp shape wood, and a nail set sinks nail heads.'
          }
        ]
      }
    },
    {
      id: 'sit7-mixed-b',
      type: 'multiple-choice' as const,
      content: '**Questions 8 to 11.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A technician must measure the inside diameter of a short steel tube to the nearest thousandth of an inch. Which tool fits the job?',
            options: ['Dial caliper', 'Tape measure', 'Framing square', 'Chalk line'],
            correctAnswer: 0,
            explanation: 'A dial caliper has inside jaws that read diameters to thousandths of an inch. A tape measure reads only to sixteenths, and the square and chalk line are layout tools.'
          },
          {
            question: 'Which tool is designed for cutting thin sheet metal for heating ductwork?',
            options: ['Tin snips', 'Coping saw', 'Wood chisel', 'Spade bit'],
            correctAnswer: 0,
            explanation: 'Tin snips cut thin sheet metal like heavy scissors. A coping saw and wood chisel are woodworking tools, and a spade bit drills holes in wood.'
          },
          {
            question: 'A woodworker needs a line scribed exactly $\\frac{3}{4}$ inch in from the edge along the full length of a board. Which tool is made for this?',
            options: ['Marking gauge', 'Plumb bob and line', 'Bubble level', 'Micrometer'],
            correctAnswer: 0,
            explanation: 'A marking gauge has a fence that rides along the edge and a pin that scribes a line at a set distance from it. A plumb bob finds vertical, a level checks level and plumb, and a micrometer measures small parts.'
          },
          {
            question: 'You are about to raise the blade height on a table saw. What should you do first?',
            options: ['Unplug the saw', 'Put on gloves', 'Lower the blade guard', 'Turn the saw on to check'],
            correctAnswer: 0,
            explanation: 'Disconnect power before any blade change or adjustment so the saw cannot start while your hands are near the blade. Gloves are a hazard near blades, and you never adjust a running saw.'
          }
        ]
      }
    },
    {
      id: 'sit7-wrap',
      type: 'text' as const,
      content: `### Lesson Wrap-Up

You now have the whole tool map the Shop Information subtest draws from:

| Family | Must-know tools |
|:---|:---|
| Striking | claw, ball-peen, sledge, mallet |
| Turning | slotted, Phillips, Torx, hex key; open-end, box-end, combination, adjustable, socket and ratchet, torque, pipe wrench |
| Cutting | crosscut, rip, back, coping, keyhole, hacksaw; wood and cold chisels; files, rasps, snips, planes; circular, table, miter, jig, reciprocating and band saws |
| Gripping and boring | needle-nose, locking, diagonal cutters; C-clamp, bar clamp, vise; twist, spade, Forstner, hole saw, countersink; center punch, nail set |
| Finishing | sanding block, belt and orbital sanders, router, bench grinder, wire brush |
| Measuring | rule to $\\frac{1}{16}$, combination and try squares, framing square, level, plumb bob, chalk line, calipers, micrometer |

**Next steps:** take the exit quiz for this topic, then move on to **Materials, Fasteners and Shop Processes** to finish Shop Information.`
    }
  ]
};
