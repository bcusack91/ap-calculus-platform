export const asvabSiToolsPart3Data = {
  topicSlug: 'asvab-si-tools',
  sections: [
    {
      id: 'sit3-intro',
      type: 'text' as const,
      content: `# 🔧 Hand and Power Tools

**Part 3 of 7 — Cutting Tools: Saws, Chisels, Files and Planes**

### Handsaws: which way is the grain, and what shape is the cut?

Wood has a **grain**: the long fibers that run the length of a board. Cutting **across** the grain and cutting **along** it are different jobs, so they get different saws.

| Saw | Teeth / build | Job |
|:---|:---|:---|
| **Crosscut saw** | many small teeth sharpened like little **knives** | cuts **across** the grain (shortening a board) |
| **Rip saw** | fewer, larger teeth shaped like little **chisels** | cuts **with** (along) the grain (making a board narrower) |
| **Back saw** | stiff metal spine along the top, fine teeth | straight, accurate cuts; used with a **miter box** for angles and joints |
| **Coping saw** | very thin blade in a deep **U-shaped frame** | **curves** and scrollwork in thin wood and trim |
| **Keyhole (compass) saw** | narrow, pointed blade, no frame | starts in a **drilled hole** to cut an opening in the middle of a panel |
| **Hacksaw** | fine-tooth blade in a frame | cuts **metal**: bolts, pipe, rod |

**Memory hook:** you **rip** a sheet of paper the long way. The rip saw cuts the long way, with the grain.

### Using a hacksaw

- The blade's teeth point **away from the handle**, so the saw **cuts on the push stroke**. Ease up on the return.
- Use a **finer** blade (more teeth per inch) for **thin** metal and tubing, so at least two or three teeth touch the metal at once and the teeth do not snag.

**Worked example.** You must shorten a $2 \\times 4$ by cutting it across its width. The cut runs **across** the grain, so a **crosscut saw** is correct. If you were cutting a $1 \\times 8$ board lengthwise into two narrower strips, you would **rip** it.`
    },
    {
      id: 'sit3-saws-fig',
      type: 'multiple-choice' as const,
      content: '**Four saws.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-muted" stroke="currentColor" stroke-width="1"><line x1="160" y1="8" x2="160" y2="232"/><line x1="8" y1="120" x2="312" y2="120"/></g><g stroke="currentColor" stroke-width="2" fill="none"><polygon points="12,60 108,44 108,88 12,74"/><polyline points="12,74 18,78 24,75 30,79 36,76 42,80 48,77 54,81 60,78 66,82 72,79 78,83 84,80 90,84 96,81 102,85 108,88" stroke-width="1.2"/><path d="M108 38 L144 38 Q152 38 152 46 L152 94 Q152 102 144 102 L108 94 Z"/><ellipse cx="132" cy="68" rx="8" ry="15"/><path d="M175 92 L175 26 L275 26 L275 92"/><rect x="275" y="86" width="36" height="12" rx="5"/><path d="M20 196 L20 156 L118 156 L118 196"/><path d="M118 156 L134 156 L148 200 L132 204 L120 176"/><path d="M176 186 L266 174 L266 196 Z"/><rect x="266" y="168" width="40" height="34" rx="9"/></g><g stroke="currentColor" fill="none"><line x1="175" y1="92" x2="275" y2="92" stroke-width="1"/><line x1="20" y1="196" x2="118" y2="196" stroke-width="1.5"/></g><g font-size="14" font-weight="bold" fill="currentColor"><text x="14" y="26">A</text><text x="174" y="112">B</text><text x="14" y="140">C</text><text x="174" y="140">D</text></g></svg>',
        alt: 'Four saws. Saw A: a wide flat blade that tapers toward the tip, with teeth along the bottom edge and a closed handle with a hand hole. Saw B: a very thin blade stretched across the open side of a deep U-shaped steel frame, with a straight handle at one end. Saw C: a straight blade held in a shallow rectangular frame with a pistol-grip handle. Saw D: a narrow, pointed blade that tapers to a sharp tip and sticks straight out of a handle, with no frame.',
        caption: 'Figure 1. Four handsaws, labeled A to D.'
      },
      exercise: {
        questions: [
          {
            question: 'An electrician has drilled a starter hole in the middle of a wall panel and must cut out a rectangle for an outlet box. Which saw in the figure (A: wide tapered blade; B: thin blade in a deep U frame; C: blade in a shallow frame with pistol grip; D: narrow pointed blade, no frame) is made for this?',
            options: ['Saw D', 'Saw B', 'Saw C', 'Saw A'],
            correctAnswer: 0,
            explanation: 'Saw D is a keyhole (compass) saw. Its narrow pointed blade fits into a drilled hole, and with no frame in the way it can cut an opening in the middle of a panel. The coping saw (B) needs its frame to reach around an edge, the hacksaw (C) is for metal, and the wide handsaw (A) cannot start inside a small hole.'
          },
          {
            question: 'Using the same figure, which saw would you choose to cut a curved, decorative edge on a thin piece of trim?',
            options: ['Saw B', 'Saw D', 'Saw A', 'Saw C'],
            correctAnswer: 0,
            explanation: 'Saw B is a coping saw. Its thin blade can turn tight curves, and the deep frame lets it reach in from the edge of thin wood. The keyhole saw (D) cuts rough openings, the wide handsaw (A) makes straight cuts, and the hacksaw (C) cuts metal.'
          }
        ]
      }
    },
    {
      id: 'sit3-rip-check',
      type: 'multiple-choice' as const,
      content: '**Grain and teeth.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A carpenter needs to cut a long board lengthwise into two narrower boards. Which saw is designed for this cut?',
            options: ['Rip saw', 'Crosscut saw', 'Coping saw', 'Back saw'],
            correctAnswer: 0,
            explanation: 'Cutting lengthwise follows the grain, and the rip saw\'s chisel-shaped teeth are made for cutting with the grain. The crosscut saw cuts across the grain, the coping saw cuts curves, and the back saw makes short, precise cuts.'
          },
          {
            question: 'Which way should the teeth of a hacksaw blade point when the blade is installed?',
            options: ['Away from the handle, so it cuts on the push', 'Toward the handle, so it cuts on the pull', 'Up toward the top bar of the frame', 'Either way, because the blade cuts both ways'],
            correctAnswer: 0,
            explanation: 'Hacksaw teeth point away from the handle and cut on the forward (push) stroke. Pull saws exist for wood, but a standard hacksaw blade is installed pointing forward, and the teeth always face the work, not the frame.'
          }
        ]
      }
    },
    {
      id: 'sit3-chisels',
      type: 'text' as const,
      content: `## Chisels, files, rasps, snips and planes

| Tool | What it cuts | Key facts |
|:---|:---|:---|
| **Wood chisel** | wood: cleaning out joints, mortises, hinge recesses | beveled edge; struck with a **mallet**; cut **with** the grain; push away from your body |
| **Cold chisel** | **metal**: cutting off rivet heads, rusted bolts, sheet stock | hardened steel; struck with a **ball-peen hammer**; grind off a mushroomed head |
| **File** | metal (and smoothing wood) | rows of fine teeth; cuts on the **push** stroke; always fit a **handle** over the pointed tang; clean with a **file card** |
| **Rasp** | **wood** (shaping) | separate, raised, pointed teeth; much coarser than a file |
| **Tin snips** | thin **sheet metal** | look like heavy scissors |
| **Utility knife** | drywall, cardboard, scoring | replaceable blade; cut away from your body |
| **Hand plane** | shaves thin strips off wood | trims a board to size or smooths it; plane **with** the grain |

**Worked example.** A rusted rivet head must be cut off a steel trailer. A wood chisel would chip and dull. The right tools are a **cold chisel** driven by a **ball-peen hammer**.

**Worked example.** A door sticks because it is a little too wide along one long edge. You would shave that edge with a **hand plane**, working with the grain.

> **Why a handle on a file matters:** the tang is pointed. Without a handle, a slip can drive it into your palm.`
    },
    {
      id: 'sit3-chisel-check',
      type: 'multiple-choice' as const,
      content: '**Chisels, files and planes.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which tool would you use to cut through the head of a rusted steel bolt?',
            options: ['Cold chisel', 'Wood chisel', 'Wood rasp', 'Block plane'],
            correctAnswer: 0,
            explanation: 'A cold chisel is hardened to cut metal. A wood chisel, a rasp and a plane are woodworking tools and would be damaged by steel.'
          },
          {
            question: 'What is the main difference between a rasp and a file?',
            options: ['A rasp has separate coarse teeth for shaping wood', 'A rasp has finer teeth meant for polishing steel', 'A file cuts only on the pull stroke toward you', 'A file is always used without any handle'],
            correctAnswer: 0,
            explanation: 'A rasp has individual raised teeth that remove wood quickly. A file has rows of fine teeth, cuts on the push stroke, and should always be fitted with a handle.'
          }
        ]
      }
    },
    {
      id: 'sit3-power',
      type: 'text' as const,
      content: `## Power saws: same jobs, faster

| Power saw | Blade | Best for |
|:---|:---|:---|
| **Circular saw** | round blade, handheld | straight cuts in lumber and plywood on the job site |
| **Table saw** | round blade sticking up through a table, with a **rip fence** | accurate **rip** cuts along long boards and sheets |
| **Miter saw (chop saw)** | round blade that swings down, pivots for angles | crosscuts and **angle** cuts on trim and framing |
| **Jigsaw (saber saw)** | short blade that moves up and down | **curves** and **cutouts** (a sink hole in a countertop) |
| **Reciprocating saw** | long blade that pushes and pulls | demolition and rough cuts, even through nails and pipe |
| **Band saw** | continuous loop blade | curves in **thick** stock on a bench |

**Matching tip:** a power saw usually copies a hand saw. Circular, table and miter saws make **straight** cuts like a crosscut or rip saw. A jigsaw and a band saw cut **curves** like a coping saw.

> **Kickback:** a spinning blade can grab the wood and throw it back at you. Keep the blade guard working, use the rip fence and a push stick on a table saw, and never stand directly behind the blade.`
    },
    {
      id: 'sit3-power-dd',
      type: 'dropdown-select' as const,
      content: '**Choose the power saw.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'Cutting a round opening for a sink in a countertop:',
            options: ['jigsaw', 'miter saw', 'table saw', 'circular saw'],
            correctAnswer: 0
          },
          {
            label: 'Ripping a long sheet of plywood into accurate, equal strips:',
            options: ['table saw', 'jigsaw', 'reciprocating saw', 'coping saw'],
            correctAnswer: 0
          },
          {
            label: 'Cutting a 45-degree angle on the end of a piece of trim:',
            options: ['miter saw', 'band saw', 'reciprocating saw', 'keyhole saw'],
            correctAnswer: 0
          },
          {
            label: 'Cutting through a wall, nails and all, during demolition:',
            options: ['reciprocating saw', 'table saw', 'back saw', 'miter saw'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['jigsaw', 'table saw', 'miter saw', 'reciprocating saw'],
        hint1: 'Which power saw has a short up-and-down blade that can turn?',
        hint2: 'Accurate rips use a fence that guides the board.',
        hint3: 'Demolition saws push and pull a long, tough blade.',
        explanation: 'The jigsaw cuts curves and cutouts; the table saw with its rip fence makes accurate long rips; the miter saw pivots to cut angles on trim; and the reciprocating saw handles rough demolition cuts through nails and pipe.'
      }
    },
    {
      id: 'sit3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Crosscut** = across the grain (knife teeth); **rip** = with the grain (chisel teeth)
- **Coping saw** = curves in thin wood; **keyhole saw** = start in a drilled hole; **back saw + miter box** = accurate angles; **hacksaw** = metal
- Hacksaw teeth point **away from the handle** and cut on the **push**
- **Cold chisel** = metal (with a ball-peen hammer); **wood chisel** = wood (with a mallet)
- **Rasp** = coarse wood shaping; **file** = fine teeth, push stroke, always with a handle
- Power saws copy hand saws: **table saw** rips, **miter saw** angles, **jigsaw** curves, **reciprocating saw** demolition

> **Up Next:** Part 4 — gripping, clamping, drilling and finishing tools.`
    }
  ]
};
