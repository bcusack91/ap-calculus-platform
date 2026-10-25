export const asvabSiToolsPart2Data = {
  topicSlug: 'asvab-si-tools',
  sections: [
    {
      id: 'sit2-intro',
      type: 'text' as const,
      content: `# 🔧 Hand and Power Tools

**Part 2 of 7 — Striking and Turning Tools**

### Hammers: match the hammer to what you are hitting

Every hammer has a **face** (the striking end) and something on the other end that tells you its job.

| Hammer | What the other end looks like | Main job |
|:---|:---|:---|
| **Claw hammer** | curved, split claw | drive and pull nails in wood |
| **Framing (rip-claw) hammer** | straighter claw, heavier head | rough framing, prying boards apart |
| **Ball-peen hammer** | rounded ball (the "peen") | metalwork: shaping rivets, striking punches and cold chisels |
| **Sledgehammer** | two flat faces, long handle | heavy blows with two hands: stakes, demolition, breaking concrete |
| **Mallet** | wide head of rubber, wood or plastic | tap wood joints, strike wood-handled chisels, no dents |
| **Dead-blow hammer** | head filled with loose shot | solid blow with almost no bounce |

**Worked example.** A soldier is assembling a wooden frame with snug joints and does not want to dent the wood. The best choice is a **mallet**: its soft head spreads the blow.

**Worked example.** A metal-shop student needs to round over the end of a rivet. The rounded end of a **ball-peen hammer** is made for that.

> **Safety:** Hammer faces are hardened steel. Never strike one hammer against another hammer or a hardened surface: chips of steel can fly off like shrapnel.`
    },
    {
      id: 'sit2-ballpeen',
      type: 'multiple-choice' as const,
      content: '**Name the hammer.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="148" y="76" width="22" height="148" rx="7"/><rect x="100" y="48" width="80" height="28" rx="3"/><rect x="66" y="42" width="36" height="40" rx="6"/><path d="M180 52 L196 52"/><path d="M180 72 L196 72"/><circle cx="212" cy="62" r="19"/></g><text x="48" y="32" font-size="12" fill="currentColor">flat face</text><text x="196" y="32" font-size="12" fill="currentColor">rounded end</text></svg>',
        alt: 'A hammer with a straight handle. One end of the steel head is a flat, round striking face; the other end is a smooth rounded ball instead of a claw.',
        caption: 'Figure 1. A hammer with a rounded end opposite the face.'
      },
      exercise: {
        questions: [
          {
            question: 'The hammer in the figure has a flat face and a rounded ball on the opposite end. In which kind of work is it mainly used?',
            options: ['Metalwork such as shaping rivets', 'Pulling bent nails out of boards', 'Driving fence stakes into hard soil', 'Setting wood joints without dents'],
            correctAnswer: 0,
            explanation: 'The rounded peen marks a ball-peen hammer, the metalworker\'s hammer: the peen rounds over rivets and the face strikes punches and cold chisels. Pulling nails needs a claw, stakes call for a sledge, and wood joints are tapped with a soft mallet.'
          }
        ]
      }
    },
    {
      id: 'sit2-screwdrivers',
      type: 'text' as const,
      content: `## Screwdrivers: match the tip to the recess

| Driver | Tip / recess shape | Notes |
|:---|:---|:---|
| **Slotted (flat-blade)** | one straight slot | oldest type; slips out easily |
| **Phillips** | cross (plus sign) | designed to slip out ("cam out") before over-tightening |
| **Torx** | six-pointed star | grips well, common on vehicles and electronics |
| **Square (Robertson)** | square hole | common in decks and cabinets |
| **Hex key (Allen wrench)** | six-sided hole | L-shaped bar, turns set screws and socket-head screws |
| **Offset screwdriver** | Z- or L-shaped body | reaches screws where a straight handle cannot fit |

**Two rules the test likes:**

1. Use the **right size** tip. A tip that is too small strips the screw head; too big and it will not seat.
2. A screwdriver is **not** a chisel or a pry bar. Hammering or prying on it bends the shank and chips the tip.`
    },
    {
      id: 'sit2-tips',
      type: 'multiple-choice' as const,
      content: '**Read the screw heads.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><circle cx="50" cy="60" r="26"/><circle cx="125" cy="60" r="26"/><circle cx="200" cy="60" r="26"/><circle cx="275" cy="60" r="26"/></g><g fill="currentColor"><rect x="28" y="56" width="44" height="8"/><rect x="107" y="56" width="36" height="8"/><rect x="121" y="42" width="8" height="36"/><polygon points="214,60 206.9,56 207,47.9 200,52 193,47.9 193.1,56 186,60 193.1,64 193,72.1 200,68 207,72.1 206.9,64"/><polygon points="287,60 281,70.4 269,70.4 263,60 269,49.6 281,49.6"/></g><g font-size="13" fill="currentColor" text-anchor="middle"><text x="50" y="108">1</text><text x="125" y="108">2</text><text x="200" y="108">3</text><text x="275" y="108">4</text></g></svg>',
        alt: 'Four round screw heads seen from above. Head 1 has one straight slot across it. Head 2 has a cross-shaped recess. Head 3 has a six-pointed star-shaped recess. Head 4 has a six-sided (hexagonal) recess.',
        caption: 'Figure 2. Four screw heads, numbered 1 to 4.'
      },
      exercise: {
        questions: [
          {
            question: 'Four screw heads are shown: 1 has a single slot, 2 a cross, 3 a six-pointed star and 4 a hexagonal hole. Which head is turned with a Torx driver?',
            options: ['Head 3', 'Head 2', 'Head 4', 'Head 1'],
            correctAnswer: 0,
            explanation: 'A Torx recess is a six-pointed star (head 3). The cross is Phillips (head 2), the hexagonal hole takes a hex key or Allen wrench (head 4), and the single slot takes a flat-blade screwdriver (head 1).'
          },
          {
            question: 'Using the same four heads, which one is designed so the driver tends to slip out (cam out) before the screw is over-tightened?',
            options: ['Head 2', 'Head 3', 'Head 1', 'Head 4'],
            correctAnswer: 0,
            explanation: 'The Phillips (cross) recess was designed to cam out under high torque, which helps prevent over-tightening on assembly lines. The star and hex recesses grip strongly, and a single slot slips sideways rather than by design.'
          }
        ]
      }
    },
    {
      id: 'sit2-wrenches',
      type: 'text' as const,
      content: `## Wrenches: grip the flats of a nut or bolt head

| Wrench | How it grips | When to use it |
|:---|:---|:---|
| **Open-end** | U-shaped jaws touch two flats | slides on from the side where a ring cannot reach; can slip and round a nut |
| **Box-end** | closed ring (6 or 12 points) surrounds the nut | grips all six sides, least likely to slip; good for breaking a tight nut loose |
| **Combination** | open end on one side, box end on the other, **same size** | the everyday wrench in a toolbox |
| **Adjustable (crescent)** | one fixed jaw, one movable jaw set by a thumbscrew | odd sizes; snug the jaws tight and keep the strain on the fixed jaw |
| **Socket and ratchet** | socket surrounds the nut; ratchet clicks back without lifting off | fast work, deep or recessed nuts, with extensions |
| **Torque wrench** | socket drive with a scale or click setting | tightening to an exact specification |
| **Pipe wrench** | toothed jaws that bite harder as you pull | round pipe and fittings, **not** finished nuts (the teeth chew them up) |
| **Nut driver** | a socket on a screwdriver handle | small nuts and hex-head screws |

**Worked example.** A nut on a truck is rusted tight and its corners are already slightly rounded. A **box-end wrench** (or a six-point socket) is the best first try: it touches all six sides, so it is least likely to slip and round the nut further.

**Worked example.** A plumber needs to turn a length of threaded steel pipe. That round surface gives a regular wrench nothing to grip, so the job calls for a **pipe wrench**.

> **Good practice:** **Pull** a wrench toward you instead of pushing it. If it slips, you lose balance less and keep your knuckles off the metal.`
    },
    {
      id: 'sit2-wrench-fig',
      type: 'multiple-choice' as const,
      content: '**Two wrench ends.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><path d="M64 205 L64 122 L42 100 L42 46 L62 46 L62 84 L102 84 L102 46 L122 46 L122 100 L100 122 L100 205 Z"/><rect x="216" y="112" width="28" height="93" rx="4"/><circle cx="230" cy="80" r="36"/><polygon points="250,80 240,97.3 220,97.3 210,80 220,62.7 240,62.7"/><polygon points="247.3,90 230,100 212.7,90 212.7,70 230,60 247.3,70"/></g><g font-size="13" fill="currentColor" text-anchor="middle"><text x="82" y="30">End X</text><text x="230" y="30">End Y</text></g></svg>',
        alt: 'Two wrench ends. End X has a U-shaped opening with two straight parallel jaws, open at the top. End Y is a closed ring whose inside has twelve small points that surround a nut completely.',
        caption: 'Figure 3. Two kinds of wrench end.'
      },
      exercise: {
        questions: [
          {
            question: 'End X is an open U with two parallel jaws; End Y is a closed ring with twelve points inside. Which statement is correct?',
            options: ['End Y grips every side of the nut and is less likely to slip', 'End X grips every side of the nut and is less likely to slip', 'End Y can slide onto a nut from the side of a fuel line', 'End X works only on round pipe and plumbing fittings'],
            correctAnswer: 0,
            explanation: 'End Y is a box end: the closed ring surrounds the nut, so the load is spread over all the flats and it rarely slips. End X is an open end, which touches only two flats; its advantage is that it can slide onto a nut from the side, as on a fuel or brake line. Round pipe calls for a pipe wrench.'
          }
        ]
      }
    },
    {
      id: 'sit2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Pick the tool for each job.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'Tightening cylinder-head bolts to the value in the repair manual:',
            options: ['torque wrench', 'pipe wrench', 'open-end wrench', 'adjustable wrench'],
            correctAnswer: 0
          },
          {
            label: 'Turning a set screw that has a six-sided hole in its head:',
            options: ['hex key', 'Phillips screwdriver', 'nut driver', 'slip-joint pliers'],
            correctAnswer: 0
          },
          {
            label: 'Driving a steel tent stake into rocky ground:',
            options: ['sledgehammer', 'rubber mallet', 'tack hammer', 'ball-peen hammer'],
            correctAnswer: 0
          },
          {
            label: 'Removing many nuts quickly without lifting the tool off each one:',
            options: ['socket and ratchet', 'pipe wrench', 'adjustable wrench', 'offset screwdriver'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['torque wrench', 'hex key', 'sledgehammer', 'socket and ratchet'],
        hint1: 'Which wrench gives you a reading of how tight the bolt is?',
        hint2: 'A six-sided hole takes an L-shaped six-sided bar.',
        hint3: 'Heavy blows into hard ground need weight and a long handle.',
        explanation: 'A torque wrench tightens to a specification; a hex (Allen) key fits a six-sided recess; a sledgehammer delivers the heavy blows a stake in rocky ground needs; and a ratchet clicks back on its own, so you never lift the socket off the nut.'
      }
    },
    {
      id: 'sit2-check',
      type: 'multiple-choice' as const,
      content: '**Correct use.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Why should you avoid using a pipe wrench on a chrome-plated hex nut?',
            options: ['Its teeth bite into and mar the nut', 'It cannot open wide enough for nuts', 'It only turns in a counterclockwise direction', 'It is meant only for plastic pipe fittings'],
            correctAnswer: 0,
            explanation: 'A pipe wrench grips with hardened teeth that dig in harder as you pull, which is great on round pipe and terrible on a finished nut. It opens wide, works in either direction, and is used mostly on metal pipe.'
          },
          {
            question: 'A screw is stuck. Which action is the correct shop practice?',
            options: ['Use a driver whose tip fully fills the recess', 'Tap the screwdriver handle with a steel hammer', 'Switch to a tip one size smaller for better reach', 'Pry under the screw head with the screwdriver'],
            correctAnswer: 0,
            explanation: 'A tip that fully fills the recess transfers the most turning force without stripping the head. Hammering or prying on a screwdriver damages it, and a smaller tip is the classic way to strip a screw.'
          }
        ]
      }
    },
    {
      id: 'sit2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Claw** = nails; **ball-peen** = metalwork and rivets; **sledge** = heavy blows; **mallet** = no dents
- Match the screwdriver to the recess: **slotted, Phillips (cross), Torx (star), square, hex key**
- **Box-end** grips all six sides; **open-end** slides on from the side; **combination** = one of each, same size
- **Torque wrench** = exact tightness; **pipe wrench** = round pipe, not nuts; **ratchet** = speed
- Never strike hardened steel on hardened steel; pull wrenches toward you

> **Up Next:** Part 3 — cutting tools: which saw, chisel, file or plane fits the job.`
    }
  ]
};
