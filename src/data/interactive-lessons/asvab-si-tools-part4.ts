export const asvabSiToolsPart4Data = {
  topicSlug: 'asvab-si-tools',
  sections: [
    {
      id: 'sit4-intro',
      type: 'text' as const,
      content: `# 🔧 Hand and Power Tools

**Part 4 of 7 — Gripping, Clamping, Drilling and Finishing Tools**

### Pliers: grip, bend and cut

| Pliers | Look for | Job |
|:---|:---|:---|
| **Slip-joint** | pivot with two positions | everyday gripping of small objects |
| **Tongue-and-groove** (channel-type) | long handles, jaws that shift along grooves | big nuts, pipe, odd shapes |
| **Needle-nose** | long, thin, pointed jaws | small parts, bending wire loops, tight spaces |
| **Locking** | screw in one handle, release lever | clamp on and **stay locked**, like a portable clamp or vise |
| **Diagonal cutters** (side cutters) | angled cutting edges, no flat jaws | snipping wire close to a surface |
| **Lineman's** | heavy square jaws with a cutter | cutting and twisting heavy electrical wire |

> **Not a wrench:** pliers squeeze a nut on its corners and round them off. Use a wrench on nuts and bolts whenever one fits.

### Clamps and vises: hold the work so both hands are free

| Holder | Job |
|:---|:---|
| **C-clamp** | C-shaped frame; a screw presses a swivel pad toward the fixed end. Holds pieces together or to a bench |
| **Bar clamp / pipe clamp** | long reach for gluing up wide panels and frames |
| **Spring clamp** | quick, light hold, squeezed open by hand |
| **Bench vise** | bolted to the bench; holds work while you saw, file or drill. Soft jaw covers protect finished surfaces |

**Worked example.** Two boards have just been glued face to face. To hold them tight while the glue dries, use **C-clamps** (or bar clamps for wide panels), with scrap pads so the clamp does not dent the wood.`
    },
    {
      id: 'sit4-clamp-fig',
      type: 'multiple-choice' as const,
      content: '**Identify the tool.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="12" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M226 52 L112 52 L112 186 L214 186"/></g><g stroke="currentColor" stroke-width="2" fill="none"><rect x="204" y="58" width="34" height="12"/><line x1="221" y1="140" x2="221" y2="228"/><line x1="215" y1="150" x2="227" y2="156"/><line x1="215" y1="162" x2="227" y2="168"/><line x1="215" y1="174" x2="227" y2="180"/><line x1="215" y1="196" x2="227" y2="202"/><line x1="215" y1="208" x2="227" y2="214"/><rect x="205" y="128" width="32" height="12" rx="2"/><line x1="192" y1="230" x2="250" y2="230" stroke-width="5" stroke-linecap="round"/></g></svg>',
        alt: 'A heavy steel frame bent into the shape of the letter C, open on the right. A fixed flat pad is on the end of the upper arm. A threaded screw passes up through the end of the lower arm, with a flat swivel pad on its top facing the upper pad and a sliding T-bar handle on its bottom.',
        caption: 'Figure 1. A shop tool.'
      },
      exercise: {
        questions: [
          {
            question: 'The tool in the figure is a C-shaped steel frame with a threaded screw that moves a swivel pad toward a fixed pad. What is it used for?',
            options: ['Holding pieces tightly together or to a bench', 'Gripping and turning round pipe and fittings', 'Measuring the outside thickness of a part', 'Pressing a bearing on or off a shaft'],
            correctAnswer: 0,
            explanation: 'This is a C-clamp. Turning the T-handle drives the screw so the swivel pad squeezes the work against the fixed pad, holding glued pieces together or holding work to a bench. Turning pipe needs a pipe wrench, measuring thickness is a caliper or micrometer job, and pressing bearings uses a puller or press.'
          }
        ]
      }
    },
    {
      id: 'sit4-pliers-check',
      type: 'multiple-choice' as const,
      content: '**Pliers and clamps.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A technician must hold a small part steady while welding it, then let go with both hands. Which pliers are made to lock onto the work?',
            options: ['Locking pliers', 'Needle-nose pliers', 'Slip-joint pliers', 'Diagonal cutters'],
            correctAnswer: 0,
            explanation: 'Locking pliers clamp shut and stay locked until you press the release lever, so they act as a portable clamp. The others grip only while you squeeze, and diagonal cutters cut rather than grip.'
          },
          {
            question: 'Which tool is best for bending a small loop in a thin wire inside a crowded electrical box?',
            options: ['Needle-nose pliers', 'Tongue-and-groove pliers', 'Bench vise', 'Locking pliers'],
            correctAnswer: 0,
            explanation: 'Needle-nose pliers have long, thin jaws that reach into tight spaces and form small wire loops. Tongue-and-groove pliers are for big objects, a vise is fixed to a bench, and locking pliers are bulky.'
          }
        ]
      }
    },
    {
      id: 'sit4-drilling',
      type: 'text' as const,
      content: `## Drilling (boring) tools

| Tool or bit | Looks like | Job |
|:---|:---|:---|
| **Twist bit** | rod with spiral grooves, pointed tip | general holes in metal, wood and plastic |
| **Spade bit** | flat paddle with a center spur | fast, rough holes in wood |
| **Forstner bit** | short cylinder with a center point | clean, flat-bottomed holes in wood |
| **Hole saw** | cup with saw teeth around the rim, pilot bit in the center | large round holes, such as for a door lock |
| **Countersink** | short cone | cone-shaped recess so a **flat-head screw** sits **flush** |
| **Masonry bit** | carbide tip | concrete and brick (often with a hammer drill) |
| **Brace and bit** | crank-shaped hand tool with an auger bit | boring holes in wood by hand |

**Two small tools that come before or after a drill:**

- **Center punch:** struck with a hammer to make a small dimple in metal, so the drill bit starts exactly there and does not "walk."
- **Nail set:** a blunt punch that sinks the head of a **finishing nail** just below the wood surface so the hole can be filled.

**Good drilling practice:** clamp the work (never hold small parts by hand), use slower speeds for large bits and for metal, and drill a **pilot hole** before driving a big screw so the wood does not split.

**Worked example.** You will drill a hole in a steel bracket. First mark the spot with a **center punch**, clamp the bracket, then drill with a **twist bit** at a slow speed.`
    },
    {
      id: 'sit4-bits-fig',
      type: 'multiple-choice' as const,
      content: '**Four bits.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="34" y="16" width="12" height="64"/><rect x="32" y="80" width="16" height="88"/><polygon points="32,168 48,168 40,182"/><rect x="116" y="16" width="8" height="104"/><polygon points="104,120 136,120 136,164 125,170 120,190 115,170 104,164"/><rect x="196" y="16" width="8" height="94"/><rect x="174" y="110" width="52" height="48"/><polyline points="174,158 179,165 184,158 189,165 194,158 199,165 204,158 209,165 214,158 219,165 224,158 226,160" stroke-width="1.5"/><line x1="200" y1="158" x2="200" y2="188" stroke-width="3"/><rect x="276" y="16" width="8" height="104"/><polygon points="262,120 298,120 280,158"/></g><g stroke="currentColor" stroke-width="1.5"><line x1="32" y1="92" x2="48" y2="102"/><line x1="32" y1="108" x2="48" y2="118"/><line x1="32" y1="124" x2="48" y2="134"/><line x1="32" y1="140" x2="48" y2="150"/><line x1="32" y1="156" x2="48" y2="166"/><line x1="268" y1="128" x2="292" y2="128"/><line x1="272" y1="138" x2="288" y2="138"/></g><g font-size="13" fill="currentColor" text-anchor="middle"><text x="40" y="204">1</text><text x="120" y="204">2</text><text x="200" y="204">3</text><text x="280" y="204">4</text></g></svg>',
        alt: 'Four drill bits side by side. Bit 1: a straight rod with spiral grooves and a pointed tip. Bit 2: a flat paddle-shaped blade on a thin shaft, with a sharp spur in the middle of its end. Bit 3: a short cup with saw teeth around its open rim and a small drill bit sticking out of its center. Bit 4: a short cone-shaped cutter on a shaft.',
        caption: 'Figure 2. Four bits, numbered 1 to 4.'
      },
      exercise: {
        questions: [
          {
            question: 'Bits are shown: 1 a spiral-grooved rod, 2 a flat paddle with a center spur, 3 a toothed cup with a center pilot bit, 4 a short cone. Which bit would you use to cut a 2-inch round hole in a door for a lock set?',
            options: ['Bit 3', 'Bit 1', 'Bit 2', 'Bit 4'],
            correctAnswer: 0,
            explanation: 'Bit 3 is a hole saw: its toothed cup cuts a large clean circle while the pilot bit keeps it centered. A twist bit (1) and a spade bit (2) make smaller holes, and the cone (4) is a countersink.'
          },
          {
            question: 'Using the same four bits, which one makes a recess so the head of a flat-head screw sits flush with the surface?',
            options: ['Bit 4', 'Bit 3', 'Bit 1', 'Bit 2'],
            correctAnswer: 0,
            explanation: 'Bit 4 is a countersink. Its cone shape matches the angled underside of a flat-head screw, so the head ends up flush. The other bits make straight-sided holes.'
          }
        ]
      }
    },
    {
      id: 'sit4-punch-check',
      type: 'multiple-choice' as const,
      content: '**Punches and drilling practice.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Before drilling a hole in a steel plate, a machinist taps the spot with a center punch. Why?',
            options: ['The dimple keeps the bit from wandering', 'It hardens the steel around the hole', 'It marks how deep the hole should go', 'It cools the steel so the bit lasts'],
            correctAnswer: 0,
            explanation: 'A center punch leaves a small dimple that the tip of the bit settles into, so the hole starts exactly on the mark instead of skating across the smooth metal. It does not harden, cool or set depth.'
          },
          {
            question: 'Which tool sinks the head of a finishing nail slightly below the surface of a piece of trim?',
            options: ['Nail set', 'Center punch', 'Countersink', 'Cold chisel'],
            correctAnswer: 0,
            explanation: 'A nail set has a small cupped, blunt tip that drives a finishing-nail head just below the surface so it can be filled and painted over. A center punch marks metal, a countersink is a drill bit for screw heads, and a cold chisel cuts metal.'
          }
        ]
      }
    },
    {
      id: 'sit4-finishing',
      type: 'text' as const,
      content: `## Finishing tools: smooth, shape and clean

| Tool | Job |
|:---|:---|
| **Sanding block** | holds sandpaper flat so you sand an even surface instead of rounding it |
| **Belt sander** | fast removal of wood on large flat surfaces |
| **Orbital (finishing) sander** | fine smoothing before paint or varnish |
| **Router** | spinning bit that shapes edges (rounded, beveled) and cuts grooves such as dadoes |
| **Bench grinder** | spinning abrasive wheels to sharpen and shape metal tools; always use the tool rest and eye protection |
| **Wire brush** | scrubs off rust, scale and old paint |

Sandpaper grades (grit numbers) and finishes such as stain and varnish are covered in the **Materials, Fasteners and Shop Processes** lesson.

**Worked example.** You want the sharp edge of a tabletop rounded over in a smooth, even curve. A **router** with a round-over bit does that. A belt sander would remove wood fast but unevenly at an edge.`
    },
    {
      id: 'sit4-finish-dd',
      type: 'dropdown-select' as const,
      content: '**Choose the finishing tool.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'Keeping sandpaper flat so a surface stays level while you sand by hand:',
            options: ['sanding block', 'wire brush', 'wood rasp', 'bench grinder'],
            correctAnswer: 0
          },
          {
            label: 'Cutting a decorative rounded edge along a shelf:',
            options: ['router', 'belt sander', 'hand plane', 'wire brush'],
            correctAnswer: 0
          },
          {
            label: 'Sharpening a dull cold chisel:',
            options: ['bench grinder', 'orbital sander', 'router', 'sanding block'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['sanding block', 'router', 'bench grinder'],
        hint1: 'Paper wrapped around a flat backing.',
        hint2: 'A spinning bit that follows the edge.',
        hint3: 'Metal tools are sharpened on an abrasive wheel.',
        explanation: 'A sanding block keeps the paper flat; a router shapes edges with a profiled bit; and a bench grinder sharpens and dresses metal tools such as chisels.'
      }
    },
    {
      id: 'sit4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Needle-nose** = small parts and tight spaces; **locking** = clamps on and stays; **diagonal cutters** = snip wire; pliers are **not** wrenches
- **C-clamp** = screw-and-pad clamp; **bar clamp** = wide glue-ups; **vise** = holds work on the bench
- **Hole saw** = large round holes; **countersink** = flush flat-head screws; **spade bit** = fast rough wood holes; **twist bit** = general
- **Center punch** before drilling metal; **nail set** sinks finishing nails
- **Sanding block** keeps sanding flat; **router** shapes edges; **bench grinder** sharpens metal tools

> **Up Next:** Part 5 — measuring, layout and shop safety, including reading a tape to $\\frac{1}{16}$ inch.`
    }
  ]
};
