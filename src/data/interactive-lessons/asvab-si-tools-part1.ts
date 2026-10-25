export const asvabSiToolsPart1Data = {
  topicSlug: 'asvab-si-tools',
  sections: [
    {
      id: 'sit1-intro',
      type: 'text' as const,
      content: `# 🔧 Hand and Power Tools

**Part 1 of 7 — Shop Information on the ASVAB**

### What the Shop Information subtest is

Shop Information (SI) checks whether you know **tools, shop terms and shop practices**: which tool does which job, how a tool is used safely and correctly, and what common shop materials and fasteners are for. You do not need to be a carpenter or a welder. Most questions reward knowing the **job each tool was built for**.

| | CAT-ASVAB (MEPS) |
|:---|:---:|
| Place in the test | 8th of 10 subtests (right after Auto Information) |
| Scored questions | $10$ |
| Time limit | $6$ minutes |
| Time per question | about $36$ seconds |

On the paper version of the test (a few MET sites) and on the high-school CEP paper test, Auto and Shop are combined into one **Auto & Shop (AS)** subtest of $25$ questions. Same content, one section.

### Why SI matters if it is not in the AFQT

Your AFQT (the enlistment score) uses only Arithmetic Reasoning, Math Knowledge, Word Knowledge and Paragraph Comprehension. SI matters for **job qualification**. Your Auto and Shop results are combined into the **AS** score, and AS shows up in many mechanical line scores:

- Air Force **M** (Mechanical) $= \\text{AR} + \\text{MC} + \\text{AS} + 2 \\cdot \\text{VE}$
- Marine Corps **MM** (Mechanical Maintenance) $= \\text{AR} + \\text{MC} + \\text{EI} + \\text{AS}$
- Navy **MEC** $= \\text{AR} + \\text{MC} + \\text{AS}$ and Navy **ENG** $= \\text{MK} + \\text{AS}$
- Army **MM** (Mechanical Maintenance) is a weighted blend driven mostly by **AS**, MC and EI

If you want a job turning wrenches, fixing aircraft, running engines or building things, SI points are worth chasing. Cutoffs vary by job and change often, so ask your recruiter about the jobs you want.`
    },
    {
      id: 'sit1-families',
      type: 'text' as const,
      content: `## Think in tool families

The fastest way to answer a tool question in $36$ seconds is to ask: **what job is being done?** Every hand tool belongs to a family named for its job.

| Job | Family | Examples |
|:---|:---|:---|
| Hit something | Striking | claw hammer, ball-peen hammer, sledge, mallet |
| Turn a fastener | Turning | screwdrivers, wrenches, sockets, hex keys |
| Remove material | Cutting and shaping | saws, chisels, files, planes, snips |
| Hold something | Gripping and clamping | pliers, C-clamps, bar clamps, vises |
| Make a hole | Boring (drilling) | drills and bits, brace and bit, punches |
| Smooth a surface | Finishing | sandpaper, sanding block, sanders, rasps |
| Mark and check | Measuring and layout | tape measure, squares, levels, calipers |

Power tools do the same jobs faster: a **circular saw** cuts like a handsaw, a **drill/driver** bores holes and turns screws, a **belt sander** finishes like sandpaper.

### What the questions look like

- **Picture items:** a drawing of a tool, and you name it or name its use.
- **Best tool for the job:** "Which saw cuts curves in thin wood?"
- **Correct use:** which way hacksaw teeth point, which hammer drives nails, how to read a tape.
- **Safety and practice:** why you unplug a saw before changing a blade.

### The plan for this lesson

| Part | Skill |
|:---:|:---|
| 2 | Striking and turning tools |
| 3 | Cutting tools: saws, chisels, files and planes |
| 4 | Gripping, clamping, drilling and finishing tools |
| 5 | Measuring, layout and shop safety |
| 6 | Test strategy and traps |
| 7 | Mastery set |

Materials, fasteners, wood, metal, welding and soldering get their own lesson, **Materials, Fasteners and Shop Processes**.`
    },
    {
      id: 'sit1-warmup-hammer',
      type: 'multiple-choice' as const,
      content: '**Warm-up 1.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="148" y="74" width="22" height="150" rx="7"/><line x1="152" y1="110" x2="166" y2="110"/><line x1="152" y1="190" x2="166" y2="190"/><rect x="100" y="44" width="78" height="32" rx="4"/><rect x="66" y="38" width="36" height="44" rx="6"/><path d="M178 46 Q240 44 262 100 L248 106 Q232 70 178 72"/><line x1="196" y1="58" x2="254" y2="102"/></g><text x="56" y="30" font-size="12" fill="currentColor">flat striking face</text><text x="222" y="40" font-size="12" fill="currentColor">curved, split end</text></svg>',
        alt: 'A tool with a long straight handle and a steel head. One end of the head is a flat, round striking face. The other end curves down and back and is split into two prongs with a V-shaped notch between them.',
        caption: 'Figure 1. A common shop tool.'
      },
      exercise: {
        questions: [
          {
            question: 'The tool in the figure has a flat face on one end of its head and a curved, split end on the other. What is it used for?',
            options: ['Driving and pulling nails', 'Shaping rivets and sheet metal', 'Splitting firewood and stone', 'Tapping wooden joints together'],
            correctAnswer: 0,
            explanation: 'This is a claw hammer. The flat face drives nails and the split, curved claw slips under a nail head to pull it out. Shaping rivets is the job of a ball-peen hammer, splitting stone or driving stakes is a sledge job, and a soft mallet taps wood joints without denting them.'
          }
        ]
      }
    },
    {
      id: 'sit1-warmup-more',
      type: 'multiple-choice' as const,
      content: '**Warm-up 2 and 3.** No pictures this time. 🎯',
      exercise: {
        questions: [
          {
            question: 'A mechanic needs to tighten a bolt to an exact tightness listed in a repair manual. Which tool is built for that job?',
            options: ['Torque wrench', 'Pipe wrench', 'Box-end wrench', 'Adjustable wrench'],
            correctAnswer: 0,
            explanation: 'A torque wrench measures how hard the fastener is being turned, so you can stop at the exact value in the manual. The other wrenches turn fasteners but give no reading.'
          },
          {
            question: 'Which family of tools does a C-clamp belong to?',
            options: ['Gripping and clamping', 'Measuring and layout', 'Boring and drilling', 'Finishing and smoothing'],
            correctAnswer: 0,
            explanation: 'A C-clamp holds work in place, for example two glued boards or a piece clamped to a bench. That is the gripping and clamping family.'
          }
        ]
      }
    },
    {
      id: 'sit1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- SI on the CAT-ASVAB: **10 questions in 6 minutes**, about **36 seconds** each
- On paper tests, Auto and Shop are one combined **AS** section
- SI is **not** in the AFQT, but the **AS** score feeds mechanical line scores (Air Force M, Marine MM, Navy MEC and ENG, Army MM)
- Sort every tool by its **job**: striking, turning, cutting, gripping, boring, finishing, measuring

> **Up Next:** Part 2 — striking and turning tools: hammers, screwdrivers and wrenches.`
    }
  ]
};
