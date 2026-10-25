export const asvabSiToolsPart6Data = {
  topicSlug: 'asvab-si-tools',
  sections: [
    {
      id: 'sit6-intro',
      type: 'text' as const,
      content: `# 🔧 Hand and Power Tools

**Part 6 of 7 — Shop Information Test Strategy and Traps**

### Your clock: about 36 seconds a question

Shop Information on the CAT-ASVAB gives you **$10$ questions in $6$ minutes**. That is the tightest clock per question on the whole test, but most SI questions are **recognition**: you either know the tool or you can reason to it fast.

- Aim to answer a picture or "which tool" question in **10 to 20 seconds**. That banks time for the occasional reading-heavy question.
- The timer and the number of questions left show in the lower-right corner of the screen.
- You cannot skip ahead or go back. You must answer each question to move on, so decide and commit.
- Some questions may be unscored tryout items, and you cannot tell which. Treat every question as if it counts.
- If time is running out, keep reading and answering for real. The CAT penalizes a string of wrong answers at the end of a subtest heavily, so random clicking hurts more than it helps.

### A three-step routine for "which tool" questions

1. **Find the verb.** Is the job to drive, turn, cut, hold, bore, smooth or measure? That names the family.
2. **Find the material and shape.** Wood or metal? Straight cut or curve? Round pipe or a hex nut? With or across the grain?
3. **Pick the tool built for it.** Several tools *could* do the job badly. The answer is the one **designed** for it.

**Worked example.** "Which tool is best for cutting a curve in a piece of $\\frac{1}{4}$-inch plywood?" Verb: cut. Material and shape: thin wood, curve. Built for it: **coping saw** (or a jigsaw if power tools are listed). A hacksaw could scratch its way through, but it is designed for metal.`
    },
    {
      id: 'sit6-traps',
      type: 'text' as const,
      content: `## The traps test writers like

| Trap | The fact that beats it |
|:---|:---|
| Swapping **rip** and **crosscut** | rip = **with** the grain (like ripping paper the long way); crosscut = **across** |
| Using a **wood chisel** on metal | metal needs a **cold chisel** and a ball-peen hammer |
| Mixing up **claw** and **ball-peen** hammers | claw = nails; ball-peen = metal, rivets, punches |
| A **pipe wrench** or **pliers** on a nut | both chew up the corners; use a box-end, socket or open-end wrench |
| A **screwdriver** used as a pry bar or chisel | it bends and chips; the "correct practice" answer never abuses a tool |
| **Coping** versus **keyhole** saw | coping = curves from an edge; keyhole = start inside a drilled hole |
| **Hacksaw** direction | teeth point **away** from the handle; it cuts on the push |
| Reading a **level** | the bubble moves to the **high** end |
| **File** versus **rasp** | rasp = coarse, wood; file = fine teeth, metal or smoothing |
| "Which is **NOT**..." questions | read the stem twice; three answers will be true |

### Picture questions: look for the one feature that names the tool

- The other end of a hammer head (claw, ball, second face, soft head).
- The frame of a saw (deep U = coping, shallow frame with pistol grip = hacksaw, no frame and pointed = keyhole).
- The jaws of pliers (long and thin, locking screw, cutting edges only).
- The ends of a wrench (U-shaped open end, closed ring, movable jaw, toothed jaws).`
    },
    {
      id: 'sit6-trap-check',
      type: 'multiple-choice' as const,
      content: '**Spot the trap.** Each question hides one of the traps above. 🎯',
      exercise: {
        questions: [
          {
            question: 'A board is too wide for a shelf and must be cut down along its entire length. Which saw should be used?',
            options: ['Rip saw', 'Crosscut saw', 'Back saw', 'Hacksaw'],
            correctAnswer: 0,
            explanation: 'Cutting along the length follows the grain: a rip cut. The crosscut saw is the trap; it cuts across the grain. A back saw makes short precise cuts and a hacksaw is for metal.'
          },
          {
            question: 'Which of the following is NOT a correct use of the tool named?',
            options: ['Slip-joint pliers to tighten a hex nut', 'A cold chisel to cut off a rivet head', 'A nail set to sink a finishing nail', 'A mallet to tap a wooden joint closed'],
            correctAnswer: 0,
            explanation: 'Pliers squeeze a nut on its corners and round it off; nuts get a wrench. The other three are each the tool\'s intended job.'
          },
          {
            question: 'A worker must cut a rectangular opening in the middle of a sheet of drywall, away from every edge. Which choice is best?',
            options: ['Drill a starter hole, then use a keyhole saw', 'Cut the opening from the edge with a coping saw', 'Score the drywall with a hacksaw blade', 'Shave the opening out with a hand plane'],
            correctAnswer: 0,
            explanation: 'An opening in the middle of a panel is the job of a keyhole (compass or drywall) saw, started in a drilled hole. A coping saw would have to cut in from the edge, a hacksaw is for metal, and a plane shaves surfaces.'
          },
          {
            question: 'A mechanic\'s open-end wrench keeps slipping on a tight bolt head. Which change is the best shop practice?',
            options: ['Switch to a box-end wrench or six-point socket', 'Grip the bolt head with tongue-and-groove pliers', 'Slip a pipe over the wrench to get more leverage', 'Hit the end of the open-end wrench with a hammer'],
            correctAnswer: 0,
            explanation: 'A box end or six-point socket surrounds the head and grips all six flats, so it stops the slipping. Pliers round the corners, and a cheater pipe or hammer blows overload a wrench that is already slipping, which usually rounds the bolt or breaks the tool.'
          }
        ]
      }
    },
    {
      id: 'sit6-speed-dd',
      type: 'dropdown-select' as const,
      content: '**Speed drill.** Answer each in under 15 seconds. ⏱️',
      exercise: {
        dropdowns: [
          {
            label: 'Cuts metal tubing:',
            options: ['hacksaw', 'rip saw', 'coping saw', 'keyhole saw'],
            correctAnswer: 0
          },
          {
            label: 'Finds true vertical with gravity:',
            options: ['plumb bob', 'chalk line', 'try square', 'marking gauge'],
            correctAnswer: 0
          },
          {
            label: 'Turns screws with a cross-shaped recess:',
            options: ['Phillips screwdriver', 'slotted screwdriver', 'Torx driver', 'hex key'],
            correctAnswer: 0
          },
          {
            label: 'Shapes wood quickly with coarse, separate teeth:',
            options: ['rasp', 'mill file', 'cold chisel', 'sanding block'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['hacksaw', 'plumb bob', 'Phillips screwdriver', 'rasp'],
        hint1: 'Metal calls for a fine-tooth blade in a frame.',
        hint2: 'A pointed weight on a string.',
        hint3: 'Cross = Phillips; star = Torx.',
        explanation: 'Hacksaw for metal, plumb bob for vertical, Phillips for a cross-shaped recess, and a rasp for coarse wood shaping.'
      }
    },
    {
      id: 'sit6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- SI: **10 questions, 6 minutes, about 36 seconds each**. Recognition questions should take 10 to 20 seconds
- Routine: **verb** (family) → **material and shape** → the tool **designed** for it
- Watch the classic swaps: rip/crosscut, cold/wood chisel, claw/ball-peen, coping/keyhole, file/rasp
- "Correct practice" answers never abuse a tool: no pliers on nuts, no screwdriver prying, no pipe wrench on finished nuts
- No going back on the CAT: commit, and keep answering for real if time runs short

> **Up Next:** Part 7 — a mixed mastery set across every tool family.`
    }
  ]
};
