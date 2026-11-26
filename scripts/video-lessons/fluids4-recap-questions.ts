/**
 * Fluids Part 4: the extra conceptual questions for each CONCEPT video
 * (videos 1, 3, 5, 7). Together with the shot list's three checkpoints they
 * give every concept video at least three questions spread over its sections
 * and three on its "Remember" section; fluids4-lesson.ts says which goes
 * where. Each one uses a new situation, so none repeats a shot-list
 * checkpoint, a worked example or an exit-quiz item. See
 * circuits1-recap-questions.ts for the rules.
 */
import type { CheckpointQuestion } from '../../src/lib/video-lesson-core'

export const RECAP: Record<number, CheckpointQuestion[]> = {
  // 1 · Viscosity and Real Fluids
  1: [
    {
      // on 02-viscosity
      question: 'A cook warms a jar of cold syrup before pouring it. What does the warming do, and why does the syrup then pour faster?',
      options: [
        'It lowers the viscosity, so the layers slide more easily',
        'It lowers the density, so gravity pulls the syrup harder',
        'It raises the viscosity, so the layers grip and pull along',
        'It raises the pressure, so the syrup is pushed out faster',
      ],
      correctAnswer: 0,
      explanation: 'Viscosity is the friction between a fluid’s layers as they slide past one another, and warming a liquid lowers it, so warm syrup flows far more easily. A higher viscosity would slow the pour, not speed it. The small changes in density and pressure are not what makes cold syrup slow.',
    },
    {
      // on 07-murmurs-cuff
      question: 'A blood-pressure cuff is held at a pressure above the patient’s systolic pressure. What is heard through a stethoscope placed just below the cuff, and why?',
      options: [
        'Loud tapping, since the artery is squeezed to a narrow jet',
        'A steady whoosh, since blood is forced through turbulently',
        'Nothing, since smooth laminar flow in the artery is silent',
        'Nothing, since the artery is squeezed shut and no blood flows',
      ],
      correctAnswer: 3,
      explanation: 'Above systolic pressure the cuff holds the artery shut through the whole heartbeat: no flow, so no sound. Tapping starts only when the cuff falls to systolic and blood spurts through in a turbulent jet with each beat. Silent laminar flow is what returns once the cuff is below diastolic, and the artery stays open.',
    },
    {
      // Remember
      question: 'Two blood samples are spun down. In sample X the red cells fill 30% of the tube; in sample Y they fill 60%. Which statement is correct?',
      options: [
        'X is the more viscous, and it matches polycythemia',
        'Y is the more viscous, and it matches polycythemia',
        'Y is the more viscous, and it matches severe anemia',
        'X is the more viscous, and it matches severe anemia',
      ],
      correctAnswer: 1,
      explanation: 'The fraction of the volume taken up by red cells is the hematocrit, and blood’s viscosity rises with it: more cells, more internal friction. Sample Y, at 60%, is the thicker blood, and too many red cells is polycythemia. Sample X, at 30%, is the thin blood of anemia.',
    },
    {
      // Remember
      question: 'During heavy exercise a faint murmur is heard over a healthy athlete’s aorta, and it vanishes at rest. Which change best explains the murmur?',
      options: [
        'Blood viscosity rose, raising the Reynolds number',
        'Blood density fell, lowering the Reynolds number',
        'Blood speed rose, raising the Reynolds number',
        'Blood speed rose, lowering the Reynolds number',
      ],
      correctAnswer: 2,
      explanation: 'In exercise the heart pushes blood through the aorta faster. The Reynolds number, density times speed times diameter over viscosity, rises with speed, and a high enough value means turbulent, noisy flow: a murmur. A higher viscosity would lower the Reynolds number and damp turbulence, and a lower Reynolds number means smoother, quieter flow.',
    },
  ],
  // 3 · Poiseuille's Law
  3: [
    {
      // on 02-law
      question: 'A student writes Poiseuille’s law with the tube’s length on top: Q = πr⁴ΔP·L/(8η). Which quick check exposes the mistake?',
      options: [
        'It says a thicker fluid carries less, yet more friction means more flow',
        'It says a wider tube carries more, yet more area means less flow',
        'It says a longer tube carries more, yet more wall means more drag',
        'It says more pressure gives more flow, yet a harder push gives less',
      ],
      correctAnswer: 2,
      explanation: 'What drives the flow goes on top and what holds it back goes below. With the length on top, a longer tube would carry MORE fluid, but a longer tube has more wall to drag against, so it carries less: the length belongs on the bottom with the viscosity. The other three statements each attack a part of the student’s formula that is already right.',
    },
    {
      // Remember
      question: 'Tube B is twice as long as tube A and carries a fluid with half the viscosity. The radius and the pressure difference are the same, and both flows are laminar. How do the flow rates compare?',
      options: ['B carries the same flow as A', 'B carries twice the flow of A', 'B carries half the flow of A', 'B carries four times the flow of A'],
      correctAnswer: 0,
      explanation: 'Flow goes as 1 over the length and as 1 over the viscosity. Twice the length halves the flow, and half the viscosity doubles it, so the two changes cancel: ½ × 2 = 1. Half the flow counts only the length, twice the flow counts only the viscosity, and four times puts the length on top.',
    },
    {
      // Remember
      question: 'A tube is replaced by one with twice the radius, and the same flow rate must pass through it. Compared with before, the pressure difference needed is:',
      options: ['16 times as large', '4 times as large', '1/4 as large', '1/16 as large'],
      correctAnswer: 3,
      explanation: 'For a fixed flow, the pressure difference goes as 1 over the radius to the fourth power. Twice the radius needs (½)⁴ = 1/16 of the pressure difference. One quarter scales with the area, r², and the two larger answers have the tube getting harder to push through as it widens.',
    },
    {
      // Remember
      question: 'A garden hose narrows at its nozzle, and the same flow rate passes through both. The nozzle has one-third the radius of the hose. How does the water’s speed in the nozzle compare with its speed in the hose?',
      options: ['3 times as fast, by continuity', '9 times as fast, by continuity', '1/9 as fast, by Poiseuille’s law', '81 times as fast, by Poiseuille’s law'],
      correctAnswer: 1,
      explanation: 'This is one path with a fixed flow rate, so it is continuity: speed goes as 1 over the area, and one-third the radius is one-ninth the area, so the water moves 9 times as fast. Three times uses the radius instead of the area. The fourth power belongs to a different question: how much flow a given pressure difference drives through a tube.',
    },
  ],
  // 5 · Blood Flow as a Circuit
  5: [
    {
      // on 02-ohms-law-for-fluids
      question: 'Blood flows through a vessel at 2.0 mL/s, and the vessel’s resistance is 15 mmHg·s/mL. What pressure difference drives the flow, and which quantity plays the part of the electric current?',
      options: [
        '7.5 mmHg; the flow rate is the current',
        '30 mmHg; the flow rate is the current',
        '30 mmHg; the pressure is the current',
        '7.5 mmHg; the pressure is the current',
      ],
      correctAnswer: 1,
      explanation: 'Ohm’s law for fluids is ΔP = QR = (2.0 mL/s)(15 mmHg·s/mL) = 30 mmHg. The flow rate, volume per second, plays the part of current, charge per second; the pressure difference is the push, like voltage. 7.5 mmHg divides the resistance by the flow instead of multiplying.',
    },
    {
      // on 06-control-valves
      question: 'At the start of a sprint, the arterioles feeding the leg muscles relax and widen slightly, while the other beds do not change. What happens?',
      options: [
        'Leg resistance rises a lot, and flow shifts toward the legs',
        'Leg resistance falls a little, and flow shifts away from the legs',
        'Leg resistance falls a lot, and flow shifts toward the legs',
        'Leg resistance rises a little, and flow shifts away from the legs',
      ],
      correctAnswer: 2,
      explanation: 'Resistance goes as 1 over the radius to the fourth power, so a slightly wider arteriole has a much lower resistance. The leg beds are in parallel with the others under the same pressure difference, so the lower resistance draws more of the flow toward the legs. Widening never raises a vessel’s resistance.',
    },
    {
      // Remember
      question: 'Three vessel segments are joined in series. Their resistances are R, 2R and 3R. Which statement is correct?',
      options: [
        'All carry the same flow; the 3R segment has the largest pressure drop',
        'All have the same pressure drop; the R segment carries the most flow',
        'All carry the same flow; the R segment has the largest pressure drop',
        'All have the same pressure drop; the 3R segment carries the most flow',
      ],
      correctAnswer: 0,
      explanation: 'In series the same flow passes through every segment, so each pressure drop is that flow times the segment’s own resistance, and the largest resistance takes the largest drop. Sharing one pressure difference while the flows differ describes parallel beds, not a series chain.',
    },
    {
      // Remember
      question: 'A drug halves a patient’s total peripheral resistance, and the heart responds by raising the cardiac output by 50%. What happens to the mean arterial pressure?',
      options: ['It rises to 150% of its old value', 'It stays at 100% of its old value', 'It falls to 50% of its old value', 'It falls to 75% of its old value'],
      correctAnswer: 3,
      explanation: 'Mean arterial pressure is about cardiac output times total peripheral resistance: 1.5 × 0.5 = 0.75, so it falls to 75%. Fifty percent counts only the resistance, 150% counts only the cardiac output, and "no change" would need the output to double.',
    },
  ],
  // 7 · Stenosis: Which Law Applies
  7: [
    {
      // on 03-continuity
      question: 'A mild stenosis leaves an artery with one-fifth of its normal cross-sectional area, and the body keeps the flow rate the same. Inside the narrowing, how do the blood’s speed and the volume passing per second compare with normal?',
      options: [
        '5 times the speed; 5 times the volume per second',
        'The same speed; one-fifth the volume per second',
        '25 times the speed; the same volume per second',
        '5 times the speed; the same volume per second',
      ],
      correctAnswer: 3,
      explanation: 'The flow rate is maintained, so the same volume passes every cross-section each second, and continuity gives a speed that goes as 1 over the area: one-fifth the area, 5 times the speed. Faster blood does not mean more blood: speed is not flow rate. Twenty-five times squares a ratio that is already an area ratio.',
    },
    {
      // Remember
      question: 'A long section of an artery narrows to half its radius. Which law describes how well it carries flow at a fixed driving pressure, and how does that section’s resistance change?',
      options: [
        'Bernoulli’s equation; the resistance is 16 times as large',
        'Poiseuille’s law; the resistance is 16 times as large',
        'Poiseuille’s law; the resistance is 4 times as large',
        'The continuity equation; the resistance is 4 times as large',
      ],
      correctAnswer: 1,
      explanation: 'Along a long narrowing friction takes the pressure, so it is Poiseuille’s law: resistance goes as 1 over the radius to the fourth power, and half the radius gives 2⁴ = 16 times the resistance. Four times uses the area, r². Bernoulli’s equation ignores friction, and continuity gives speeds, not resistances.',
    },
    {
      // Remember
      question: 'A surgeon says that an aneurysm "feeds itself". Which chain of reasoning explains why the bulge tends to grow?',
      options: [
        'Wider, so faster; faster, so higher wall pressure; so wider still',
        'Wider, so slower; slower, so lower wall pressure; so wider still',
        'Wider, so slower; slower, so higher wall pressure; so wider still',
        'Wider, so faster; faster, so lower wall pressure; so wider still',
      ],
      correctAnswer: 2,
      explanation: 'An aneurysm is the reverse of a stenosis. A wider vessel means slower blood (continuity), and slower blood means a higher pressure on the wall (Bernoulli), which stretches the wall and widens the bulge further. Blood does not speed up where a vessel widens, and a lower wall pressure would not stretch the wall.',
    },
    {
      // Remember
      question: 'A question describes water at rest in a U-shaped tube and asks for the pressure 20 cm below the surface. Which regime is it, and which tool fits?',
      options: [
        'Static: P = P₀ + ρgh for the pressure',
        'Ideal flow: Bernoulli for the pressure',
        'Viscous flow: Poiseuille for the flow',
        'Ideal flow: continuity for the speed',
      ],
      correctAnswer: 0,
      explanation: 'Nothing is flowing and the question is about depth, so it is the static regime: P = P₀ + ρgh. Bernoulli’s equation and continuity are for an ideal fluid in motion, and Poiseuille’s law is for viscous flow along a tube. Picking the regime first rules all three out.',
    },
  ],
}
