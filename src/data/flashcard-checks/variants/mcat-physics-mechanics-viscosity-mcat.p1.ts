import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-physics-mechanics-viscosity-mcat`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`Each capillary is narrower than an arteriole, so why is the largest systemic pressure drop across the arterioles?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Mean arterial pressure and venous pressure stay the same while the arterioles feeding one muscle dilate. What happens to the pressure drop across those arterioles and to the pressure in the capillaries they feed?`,
        options: [r`The arteriolar drop rises, and capillary pressure falls`, r`The arteriolar drop falls, and capillary pressure falls`, r`The arteriolar drop rises, and capillary pressure rises`, r`The arteriolar drop falls, and capillary pressure rises`],
        correctAnswer: 3,
        explanation: r`Arterioles and capillaries are in series between fixed arterial and venous pressures, and the arterioles normally take the largest share of the drop. Dilating them lowers their resistance and so their share, which leaves more pressure at the capillaries. A larger arteriolar drop with lower capillary pressure describes constriction, and the other two choices move both pressures the same way, which a fixed total drop does not allow.`,
      },
      {
        question: r`A single capillary has a higher resistance than a single arteriole. Which statement correctly explains why the capillary level as a whole still has LESS resistance than the arteriolar level?`,
        options: [r`Capillaries are so numerous in series that their combined resistance is low`, r`Capillaries are so short that each one resists less than an arteriole`, r`Capillaries are so numerous in parallel that their combined resistance is low`, r`Capillaries are so narrow that blood viscosity hardly acts inside them`],
        correctAnswer: 2,
        explanation: r`Resistances in parallel combine to less than any one branch, and there are billions of capillaries in parallel, so the level's total is small even though each tube is narrow. Resistances in series would add, not shrink. The stem already says each capillary resists more than an arteriole, and narrowness raises resistance rather than removing it.`,
      },
    ],
  },
  [r`Cutting a vessel's radius by only about {{c1::16%}} halves its flow at a fixed pressure difference.`]: {
    kind: 'calc',
    more: [
      {
        question: r`An arteriole carries 60 mL/min. Its smooth muscle then tightens and cuts its radius by 16%, with the pressure difference across it unchanged and the flow laminar. Using 0.84⁴ ≈ 0.50, what is the new flow?`,
        options: [r`50 mL/min`, r`30 mL/min`, r`42 mL/min`, r`15 mL/min`],
        correctAnswer: 1,
        explanation: r`Poiseuille flow goes as $r^4$, and the radius is now 0.84 of its old value, so the flow is $0.84^4 \approx 0.50$ of 60 mL/min, which is 30 mL/min. 50 mL/min cuts the flow by 16% as if flow went as $r$, 42 mL/min uses $r^2$ ($0.84^2 \approx 0.71$), and 15 mL/min halves the flow twice.`,
      },
      {
        question: r`A drug must DOUBLE the flow through a vessel at a fixed pressure difference, with laminar flow. By about what percentage must the vessel's radius increase? (1.19⁴ ≈ 2.0 and 1.41² ≈ 2.0)`,
        options: [r`about 19%`, r`about 100%`, r`about 41%`, r`about 50%`],
        correctAnswer: 0,
        explanation: r`Flow goes as $r^4$, so the radius must grow by the factor whose fourth power is 2, which is 1.19: an increase of about 19%. About 100% assumes flow is proportional to radius, about 41% uses $r^2$, and about 50% has no basis in the fourth-power law.`,
      },
      {
        question: r`Plaque cuts a long artery's radius by 16%. With laminar flow, and using 0.84⁴ ≈ 0.50, how must the pressure difference across the artery change to keep the flow through it the same as before?`,
        options: [r`It must become 1.16 times as large`, r`It must become 1.4 times as large`, r`It must become 4 times as large`, r`It must become 2 times as large`],
        correctAnswer: 3,
        explanation: r`Resistance goes as $1/r^4$, so cutting the radius to 0.84 doubles the resistance ($1/0.50 = 2$), and $\Delta P = QR$ must double to keep $Q$ the same. 1.16 times treats resistance as proportional to the 16% change, 1.4 times uses $r^2$, and 4 times doubles twice.`,
      },
      {
        question: r`A vessel has a resistance of 3 units. Its radius is then reduced by 16% while its length and the blood's viscosity stay the same. Using 0.84⁴ ≈ 0.50, what is its new resistance?`,
        options: [r`3.5 units`, r`6 units`, r`1.5 units`, r`12 units`],
        correctAnswer: 1,
        explanation: r`Poiseuille resistance goes as $1/r^4$, so it is multiplied by $1/0.84^4 \approx 1/0.50 = 2$: from 3 to 6 units. 3.5 units raises the resistance by only 16%, 1.5 units halves it (a narrower vessel resists more, not less), and 12 units doubles it twice.`,
      },
      {
        question: r`The flow through a vessel falls to one-quarter of its original value while the pressure difference stays fixed and the flow stays laminar. The vessel's radius is now about what percentage of its original value? (0.84⁴ ≈ 0.50)`,
        options: [r`about 25%`, r`about 50%`, r`about 71%`, r`about 84%`],
        correctAnswer: 2,
        explanation: r`One-quarter is two halvings of flow, and each halving is a 16% cut in radius, so the radius is $0.84 \times 0.84 \approx 0.71$ of the original (equivalently, the fourth root of 1/4). About 25% assumes flow goes as $r$, about 50% uses $r^2$, and about 84% is only one halving.`,
      },
      {
        question: r`An IV bag empties in 4 hours through a cannula. It is replaced by a cannula of the same length whose inner radius is 16% smaller, with the same fluid and the same pressure difference. Using 0.84⁴ ≈ 0.50, how long does an identical bag now take to empty?`,
        options: [r`8 hours`, r`4.6 hours`, r`2 hours`, r`16 hours`],
        correctAnswer: 0,
        explanation: r`Flow goes as $r^4$, so the narrower cannula passes $0.84^4 \approx 0.50$ of the old flow and the same volume takes twice as long: 8 hours. 4.6 hours adds only 16%, 2 hours has the narrower cannula flowing faster, and 16 hours halves the flow twice.`,
      },
    ],
  },
  [r`Why can severe anemia produce a heart murmur even with normal valves?`]: {
    kind: 'concept',
    more: [
      {
        question: r`In polycythemia the hematocrit is far above normal. With the blood's speed, its density and the vessel's diameter all unchanged, how does this affect the chance of turbulent flow? (Re = ρvD/η)`,
        options: [r`Turbulence is more likely, because higher viscosity raises Re`, r`Turbulence is less likely, because higher viscosity raises Re`, r`Turbulence is more likely, because higher viscosity lowers Re`, r`Turbulence is less likely, because higher viscosity lowers Re`],
        correctAnswer: 3,
        explanation: r`More red cells make blood more viscous, and viscosity is in the denominator of $Re = \rho v D/\eta$, so Re falls and the flow moves further from turbulence. This is the reverse of anemia. The choices saying viscosity raises Re invert the formula, and the one pairing a lower Re with more turbulence has the threshold backwards.`,
      },
      {
        question: r`A patient with severe anemia has a heart murmur, although the valves are normal. After a transfusion restores the hematocrit, the murmur disappears. Which pair of changes explains this?`,
        options: [r`Viscosity rose and blood speed fell, so the Reynolds number fell`, r`Viscosity fell and blood speed rose, so the Reynolds number fell`, r`Viscosity rose and blood speed rose, so the Reynolds number rose`, r`Viscosity fell and blood speed fell, so the Reynolds number rose`],
        correctAnswer: 0,
        explanation: r`Restoring the red cells raises viscosity, and the heart no longer needs a high output, so blood slows; both changes lower $Re = \rho v D/\eta$ and the flow returns to quiet laminar flow. Lower viscosity with faster blood describes the anemia itself and would raise Re. The other two choices move viscosity and speed in ways a transfusion does not.`,
      },
    ],
  },
  [r`Name the three fluids regimes to identify first in a passage, with the tools for each.`]: {
    kind: 'concept',
    more: [
      {
        question: r`A passage describes a wooden block floating at rest in a beaker of oil and asks what fraction of the block lies below the surface. Which regime and tool fit?`,
        options: [r`Ideal flow: the continuity equation, for the oil's speed`, r`Viscous flow: Poiseuille's law, for the oil's resistance`, r`Static fluid: Archimedes' principle, for the buoyant force`, r`Ideal flow: Bernoulli's equation, for the oil's pressure`],
        correctAnswer: 2,
        explanation: r`Nothing is flowing, so this is the static regime, and a floating object is handled with Archimedes' principle: the buoyant force equals the block's weight. Continuity and Bernoulli need a moving ideal fluid, and Poiseuille's law needs viscous flow through a tube; none of them applies to a fluid at rest.`,
      },
      {
        question: r`A passage states that blood flow just past a narrowed valve is turbulent, with a Reynolds number of 10,000, far above the critical value of about 2000. It asks for the exact pressure change there. What should a student conclude?`,
        options: [r`Bernoulli's equation holds there, but Poiseuille's law does not`, r`Neither Bernoulli's equation nor Poiseuille's law holds there`, r`Poiseuille's law holds there, but Bernoulli's equation does not`, r`Both Bernoulli's equation and Poiseuille's law hold there`],
        correctAnswer: 1,
        explanation: r`Both equations assume smooth laminar flow: Bernoulli for an ideal fluid along a streamline and Poiseuille for orderly viscous layers. Turbulence breaks both assumptions, so neither gives a reliable pressure change. The choices that keep one or both equations ignore that each one requires laminar flow.`,
      },
    ],
  },
  [r`For a stenosis, when does Bernoulli apply and when does Poiseuille?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A question gives the blood's viscosity and the length (8 cm) of a narrowed artery segment, says the driving pressure across the segment is fixed, and asks how flow changes when the segment's radius halves. Which reasoning fits?`,
        options: [r`Bernoulli: speed rises 4-fold, so flow rises to 4 times`, r`Poiseuille: resistance rises 4-fold, so flow falls to 1/4`, r`Poiseuille: resistance rises 16-fold, so flow falls to 1/16`, r`Continuity: area falls 4-fold, so flow falls to 1/4`],
        correctAnswer: 2,
        explanation: r`A long narrowing under a fixed driving pressure is a resistance problem: Poiseuille resistance goes as $1/r^4$, so halving the radius raises it 16-fold and flow falls to one-sixteenth. Bernoulli describes the pressure dip in a short jet and does not set the flow rate, a 4-fold rise uses $r^2$ instead of $r^4$, and continuity says the flow rate is conserved along the vessel, not that it scales with area.`,
      },
      {
        question: r`Why is Bernoulli's equation a fair model for the pressure dip in a stenosis only a few millimetres long?`,
        options: [r`Speed stays constant there, and friction losses are large`, r`Speed changes quickly there, and friction losses are small`, r`Resistance rises as 1/r⁴ there, and the flow rate falls`, r`Flow is turbulent there, and energy is not conserved`],
        correctAnswer: 1,
        explanation: r`Over a very short narrowing the blood accelerates sharply, but there is little wall length for viscous friction to act on, so energy is nearly conserved and the pressure falls as the speed rises. Constant speed with large friction losses and resistance rising as $1/r^4$ describe a long narrowing, which is Poiseuille's case. Turbulence would make Bernoulli fail, not fit.`,
      },
    ],
  },
  [r`After a leg amputation removes one parallel vascular bed, with cardiac output unchanged, what happens to TPR and MAP?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Three identical vascular beds, each with a resistance of 3 units, lie in parallel and make up the whole systemic circulation. One bed is removed while cardiac output is unchanged. Using MAP ≈ CO × TPR, what happens?`,
        options: [r`TPR falls from 9 to 6 units, and MAP falls by 33%`, r`TPR rises from 1 to 1.5 units, and MAP falls by 33%`, r`TPR falls from 9 to 6 units, and MAP rises by 50%`, r`TPR rises from 1 to 1.5 units, and MAP rises by 50%`],
        correctAnswer: 3,
        explanation: r`In parallel, three 3-unit beds combine to $3/3 = 1$ unit and two combine to $3/2 = 1.5$ units, so TPR rises by 50%, and with cardiac output fixed MAP rises by 50% too. The 9-to-6 answers add the beds as if they were in series. A rise in TPR cannot lower MAP when cardiac output is unchanged.`,
      },
      {
        question: r`After a procedure, a patient's mean arterial pressure is higher although cardiac output is unchanged. Which procedure would produce this result?`,
        options: [r`Clamping an artery that feeds one of the parallel organ beds`, r`Opening a new vessel in parallel with the existing organ beds`, r`Dilating the arterioles in one of the parallel organ beds`, r`Lowering the viscosity of the blood in all of the organ beds`],
        correctAnswer: 0,
        explanation: r`With cardiac output fixed, MAP ≈ CO × TPR rises only if total peripheral resistance rises. Clamping an artery removes a parallel path, and fewer parallel paths means a higher total resistance. Opening a new parallel vessel, dilating arterioles and thinning the blood all lower the resistance, so each would lower MAP.`,
      },
    ],
  },
  [r`How does vessel radius affect flow (Poiseuille)?`]: {
    kind: 'calc',
    more: [
      {
        question: r`An arteriole carries 162 mL/min. It then constricts to one-third of its radius while the pressure difference across it stays the same and the flow stays laminar. What is the new flow?`,
        options: [r`54 mL/min`, r`18 mL/min`, r`2 mL/min`, r`6 mL/min`],
        correctAnswer: 2,
        explanation: r`Flow goes as $r^4$, so it falls by $3^4 = 81$: $162/81 = 2$ mL/min. 54 mL/min divides by 3 as if flow went as $r$, 18 mL/min divides by 9 ($r^2$), and 6 mL/min divides by 27 ($r^3$).`,
      },
      {
        question: r`A bronchodilator makes the airflow through a small airway 16 times as large, with the same pressure difference and laminar flow. By what factor did the airway's radius change?`,
        options: [r`It became 4 times as large`, r`It became 16 times as large`, r`It became 8 times as large`, r`It became 2 times as large`],
        correctAnswer: 3,
        explanation: r`Flow goes as $r^4$, so the radius grew by the fourth root of 16, which is 2 (since $2^4 = 16$). 4 times is the square root, which would fit $r^2$; 16 times treats flow as proportional to radius; 8 times simply halves 16.`,
      },
      {
        question: r`A cannula of inner radius 2 mm delivers 16 mL/s. It is swapped for one of the same length with an inner radius of 3 mm, with the same fluid and pressure difference and laminar flow. What does the new cannula deliver?`,
        options: [r`24 mL/s`, r`81 mL/s`, r`36 mL/s`, r`54 mL/s`],
        correctAnswer: 1,
        explanation: r`The radius is 3/2 as large, and flow goes as $r^4$: $(3/2)^4 = 81/16$, so the flow is $16 \times 81/16 = 81$ mL/s. 24 mL/s uses the first power of 3/2, 36 mL/s the second and 54 mL/s the third.`,
      },
      {
        question: r`The same liquid flows laminarly under the same pressure difference through two tubes of equal length. One has an inner radius of 100 μm and the other 1 mm. The flow in the wider tube is how many times the flow in the narrower one?`,
        options: [r`10⁴ times as large`, r`10 times as large`, r`10² times as large`, r`10³ times as large`],
        correctAnswer: 0,
        explanation: r`1 mm is 1000 μm, so the wider tube has 10 times the radius, and flow goes as $r^4$: $10^4$ times as large. 10 times treats flow as proportional to radius, $10^2$ uses the area, and $10^3$ uses the third power.`,
      },
      {
        question: r`A syringe takes 80 s to empty through a needle when pushed with a steady force. With a needle of the same length but twice the inner radius, the same liquid and the same pressure difference, how long does it take? Assume laminar flow and that the needle provides all the resistance.`,
        options: [r`40 s`, r`20 s`, r`5 s`, r`10 s`],
        correctAnswer: 2,
        explanation: r`Doubling the radius multiplies the flow by $2^4 = 16$, so the same volume leaves in $80/16 = 5$ s. 40 s divides by 2 as if flow went as $r$, 20 s divides by 4 ($r^2$), and 10 s divides by 8 ($r^3$).`,
      },
      {
        question: r`A vessel's radius falls by 10% while the pressure difference across it is unchanged and the flow stays laminar. By about what percentage does the flow through it fall? (0.9² = 0.81)`,
        options: [r`about 10%`, r`about 19%`, r`about 40%`, r`about 34%`],
        correctAnswer: 3,
        explanation: r`Flow goes as $r^4$: $0.9^4 = 0.81^2 \approx 0.66$, so the flow falls by about 34%. About 10% treats flow as proportional to radius, about 19% stops at $r^2$, and about 40% multiplies the 10% by 4 instead of raising 0.9 to the fourth power.`,
      },
    ],
  },
  [r`What distinguishes turbulent from laminar flow, and why does it matter clinically?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Turbulence appears when the Reynolds number Re = ρvD/η passes a critical value. For liquids of the same density, which combination most favors turbulent flow?`,
        options: [r`Slow flow of a low-viscosity liquid in a narrow tube`, r`Fast flow of a low-viscosity liquid in a wide tube`, r`Fast flow of a high-viscosity liquid in a narrow tube`, r`Slow flow of a high-viscosity liquid in a wide tube`],
        correctAnswer: 1,
        explanation: r`High speed, large diameter and low viscosity each raise $Re = \rho v D/\eta$, and the fast, thin liquid in the wide tube has all three. Each of the other combinations includes at least two factors that lower Re: slow flow, a narrow tube or a high viscosity.`,
      },
      {
        question: r`During a blood-pressure measurement, tapping sounds are heard while the cuff partly squeezes the artery. Once the cuff is fully deflated, the stethoscope picks up nothing. Why is the open artery silent?`,
        options: [r`Blood moves through the open artery in smooth layers, which is silent`, r`Blood stops moving through the open artery, so there is no sound`, r`Blood moves through the open artery turbulently, which is silent`, r`Blood moves through the open artery too fast for sound to form`],
        correctAnswer: 0,
        explanation: r`In the fully open artery the flow is laminar, with smooth layers that make no sound; sound comes from the turbulence set up when blood spurts through the partly squeezed artery. Blood does not stop when the cuff is released, turbulence is the noisy kind of flow rather than the silent one, and faster flow makes turbulence and sound more likely, not less.`,
      },
    ],
  },
  [r`What happens to pressure inside an arterial stenosis?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A level artery has a short stenosis and then returns to its normal width. Treating the blood as ideal, where along the artery is the pressure lowest?`,
        options: [r`Inside the narrowing, where the blood is fastest`, r`Inside the narrowing, where the blood is slowest`, r`Just upstream of it, where the blood is fastest`, r`Just upstream of it, where the blood is slowest`],
        correctAnswer: 0,
        explanation: r`Continuity makes the blood fastest inside the narrowing, and Bernoulli says the pressure is lowest where the speed is highest, so the minimum is inside the stenosis. The blood is not slowest there, and upstream of the narrowing the blood is slow and its pressure is higher.`,
      },
      {
        question: r`During exercise the flow rate through a short arterial stenosis doubles. Treating the blood as ideal, what happens to the pressure dip in the narrowing (the pressure just upstream minus the pressure inside the narrowing)?`,
        options: [r`It shrinks, because blood in the narrowing moves even faster`, r`It grows, because blood in the narrowing moves even faster`, r`It grows, because blood in the narrowing moves more slowly`, r`It stays the same, because the narrowing has not changed size`],
        correctAnswer: 1,
        explanation: r`A larger flow rate through the same areas means higher speeds everywhere, and the dip $\tfrac{1}{2}\rho(v_2^2 - v_1^2)$ grows with the square of the speed. Faster blood cannot shrink the dip, the blood in the narrowing does not slow when flow rises, and the dip depends on the speeds, not only on the vessel's size.`,
      },
    ],
  },
  [r`In Poiseuille's law, flow rate is proportional to {{c1::the fourth power of the radius}}.`]: {
    kind: 'calc',
    more: [
      {
        question: r`Two glass capillary tubes of equal length carry the same liquid in laminar flow under the same pressure difference. The flow rate in the first is 625 times the flow rate in the second. What is the ratio of the first tube's radius to the second's?`,
        options: [r`25`, r`125`, r`625`, r`5`],
        correctAnswer: 3,
        explanation: r`Flow is proportional to $r^4$, so the radius ratio is the fourth root of 625, which is 5 ($5^4 = 625$). 25 is the square root, as if flow went as $r^2$; 125 would fit a cube; and 625 treats flow as directly proportional to radius.`,
      },
      {
        question: r`A needle with an inner diameter of 0.2 mm passes 3 mL/min of a drug solution. A needle of the same length with an inner diameter of 0.4 mm is used instead, with the same pressure difference and laminar flow. What flow does it pass?`,
        options: [r`48 mL/min`, r`6 mL/min`, r`12 mL/min`, r`24 mL/min`],
        correctAnswer: 0,
        explanation: r`Doubling the diameter doubles the radius, and flow goes as $r^4$, so the flow is $2^4 = 16$ times larger: $3 \times 16 = 48$ mL/min. 6 mL/min uses the first power, 12 mL/min the second and 24 mL/min the third.`,
      },
      {
        question: r`A tube is replaced by one of the same length with twice the inner radius, and at the same time the pressure difference across it is cut to one-quarter. The fluid is the same and the flow is laminar. The new flow rate is:`,
        options: [r`16 times as large`, r`64 times as large`, r`4 times as large`, r`0.5 times as large`],
        correctAnswer: 2,
        explanation: r`Flow is proportional to $\Delta P \times r^4$, so it changes by $\tfrac{1}{4} \times 2^4 = 4$. 16 times ignores the lower pressure, 64 times multiplies by 4 instead of dividing, and 0.5 times uses the radius to the first power.`,
      },
      {
        question: r`One tube of inner radius 2r is to be replaced by several tubes of inner radius r in parallel, each with the same length and the same pressure difference across it. With laminar flow, how many narrow tubes carry the same total flow as the one wide tube?`,
        options: [r`2 tubes`, r`16 tubes`, r`4 tubes`, r`8 tubes`],
        correctAnswer: 1,
        explanation: r`Flow goes as $r^4$, so each narrow tube carries $1/2^4 = 1/16$ of the wide tube's flow and 16 of them are needed. 2 tubes assumes flow goes as radius, 4 tubes matches the cross-sectional area ($r^2$) rather than the flow, and 8 tubes uses a third power.`,
      },
      {
        question: r`A feeding tube of inner radius 1.0 mm passes 4.8 mL/s of formula. Deposits narrow it evenly to an inner radius of 0.5 mm. With the same pressure difference and laminar flow, what flow does it now pass?`,
        options: [r`2.4 mL/s`, r`1.2 mL/s`, r`0.6 mL/s`, r`0.3 mL/s`],
        correctAnswer: 3,
        explanation: r`The radius is halved, and flow goes as $r^4$, so the flow falls by $2^4 = 16$: $4.8/16 = 0.3$ mL/s. 2.4 mL/s divides by 2 as if flow went as $r$, 1.2 mL/s divides by 4 and 0.6 mL/s divides by 8.`,
      },
      {
        question: r`A wide-bore IV cannula has 4 times the inner radius of a fine one. Both have the same length and carry the same fluid in laminar flow under the same pressure difference. The flow in the wide-bore cannula is how many times the flow in the fine one?`,
        options: [r`4 times`, r`16 times`, r`256 times`, r`64 times`],
        correctAnswer: 2,
        explanation: r`Flow is proportional to $r^4$, and $4^4 = 256$. 4 times treats flow as proportional to radius, 16 times uses the cross-sectional area ($r^2$), and 64 times uses the third power.`,
      },
    ],
  },
  [r`How does raising hematocrit affect cardiac workload?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A pump pushes a test fluid of viscosity 1.0 mPa·s through a long tube and needs a pressure difference of 40 kPa. The fluid is replaced by one of viscosity 1.5 mPa·s. For the same flow rate through the same tube, with laminar flow, what pressure difference is needed?`,
        options: [r`27 kPa`, r`90 kPa`, r`60 kPa`, r`200 kPa`],
        correctAnswer: 2,
        explanation: r`Poiseuille resistance is proportional to viscosity, so the resistance and the pressure difference for the same flow both rise by 1.5: $40 \times 1.5 = 60$ kPa. 27 kPa divides by 1.5, 90 kPa uses $1.5^2$, and 200 kPa uses $1.5^4$, a power that belongs to the radius, not the viscosity.`,
      },
      {
        question: r`A rise in hematocrit takes a patient's blood viscosity from 3 mPa·s to 4 mPa·s. If the pressure difference across the circulation and the vessels' dimensions stay the same, with laminar flow, a blood flow of 5.0 L/min becomes about:`,
        options: [r`6.67 L/min`, r`2.8 L/min`, r`1.6 L/min`, r`3.75 L/min`],
        correctAnswer: 3,
        explanation: r`Resistance is proportional to viscosity, so it rises by 4/3, and at a fixed pressure difference the flow falls to 3/4: $5.0 \times 0.75 = 3.75$ L/min. 6.67 L/min inverts the ratio, 2.8 L/min squares it, and 1.6 L/min raises it to the fourth power.`,
      },
      {
        question: r`In severe anemia a patient's blood viscosity falls to 60% of normal. With the vessels' dimensions and the cardiac output unchanged, and laminar flow, a pressure difference that was 100 mmHg becomes about:`,
        options: [r`167 mmHg`, r`60 mmHg`, r`36 mmHg`, r`13 mmHg`],
        correctAnswer: 1,
        explanation: r`Resistance is proportional to viscosity, so it falls to 60% of normal, and $\Delta P = QR$ at the same flow falls to 60 mmHg. 167 mmHg inverts the ratio, 36 mmHg squares 0.6, and 13 mmHg raises it to the fourth power as if viscosity behaved like radius.`,
      },
      {
        question: r`Water (viscosity 1 mPa·s) flows through a long tube. To push a plasma substitute through the same tube at the same flow rate, the pump must supply 3 times the pressure difference. With laminar flow, what is the substitute's viscosity?`,
        options: [r`0.33 mPa·s`, r`9 mPa·s`, r`1.3 mPa·s`, r`3 mPa·s`],
        correctAnswer: 3,
        explanation: r`At the same flow through the same tube, the pressure difference is proportional to the resistance, and the resistance to the viscosity, so the viscosity is 3 times water's: 3 mPa·s. 0.33 mPa·s inverts the ratio, 9 mPa·s squares it, and 1.3 mPa·s takes a fourth root.`,
      },
      {
        question: r`A heart delivers a hydraulic power of 1.0 W, where power = pressure difference × flow rate. Blood viscosity then rises by 20% while the cardiac output and the vessels' dimensions stay the same, with laminar flow. What power must the heart now deliver?`,
        options: [r`0.83 W`, r`1.44 W`, r`1.2 W`, r`2.07 W`],
        correctAnswer: 2,
        explanation: r`Resistance rises by 20% with the viscosity, so the pressure difference for the same flow rises by 20%, and power = $\Delta P \times Q$ rises to 1.2 W. 0.83 W divides by 1.2, 1.44 W squares it, and 2.07 W uses $1.2^4$.`,
      },
      {
        question: r`A patient's blood viscosity rises by 50%, and the heart can raise the pressure difference across the circulation by only 20%. With the vessels' dimensions unchanged and laminar flow, the blood flow becomes:`,
        options: [r`0.80 times as large`, r`1.25 times as large`, r`1.80 times as large`, r`0.67 times as large`],
        correctAnswer: 0,
        explanation: r`$Q = \Delta P/R$ and $R$ is proportional to viscosity, so $Q$ changes by $1.2/1.5 = 0.80$. 1.25 times inverts this ratio, 1.80 times multiplies the two factors, and 0.67 times ignores the rise in pressure.`,
      },
    ],
  },
  [r`Why does an aneurysm tend to enlarge once it forms?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Which chain of reasoning correctly explains why the bulge of an aneurysm tends to keep growing? Treat the blood as ideal and the vessel as level.`,
        options: [r`Wider vessel → faster flow → higher pressure → wall pushed out`, r`Wider vessel → slower flow → lower pressure → wall pulled out`, r`Wider vessel → faster flow → lower pressure → wall pulled out`, r`Wider vessel → slower flow → higher pressure → wall pushed out`],
        correctAnswer: 3,
        explanation: r`Continuity slows the blood where the vessel is wider, and Bernoulli then gives a higher pressure where the blood is slower, which pushes the weak wall further out. The chains with faster flow get continuity backwards, and the chain with slower flow and lower pressure gets Bernoulli backwards.`,
      },
      {
        question: r`An artery has an aneurysm (a widened segment) at one place and a short stenosis (a narrowed segment) at another. Treating the blood as ideal and the artery as level, how do the two segments compare with the normal artery?`,
        options: [r`Aneurysm: slower, higher pressure. Stenosis: faster, lower pressure`, r`Aneurysm: faster, lower pressure. Stenosis: slower, higher pressure`, r`Aneurysm: slower, lower pressure. Stenosis: faster, higher pressure`, r`Aneurysm: faster, higher pressure. Stenosis: slower, lower pressure`],
        correctAnswer: 0,
        explanation: r`By continuity blood slows in the wide aneurysm and speeds up in the narrow stenosis, and by Bernoulli slower blood has higher pressure and faster blood lower pressure. The choice with the aneurysm faster swaps the two segments, and the other two pair slow flow with low pressure or fast flow with high pressure, which contradicts Bernoulli.`,
      },
    ],
  },
  [r`Continuity or Poiseuille: which explains slow capillary flow, and which explains high resistance in a stenosis?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Which question can be answered with the continuity equation alone, with no information about viscosity or pressure?`,
        options: [r`How fast blood moves where a vessel's area doubles`, r`How much pressure is lost along a long, thin vessel`, r`How much resistance a vessel adds when it narrows`, r`How much flow a fixed pressure drives through a vessel`],
        correctAnswer: 0,
        explanation: r`Continuity, $A_1v_1 = A_2v_2$, links speed to cross-sectional area for a conserved volume flow, so the speed after an area change follows directly. Pressure loss along a vessel, the resistance of a narrowed vessel and the flow driven by a given pressure are all Poiseuille questions about the pressure cost of flow.`,
      },
      {
        question: r`A student says: \"Each capillary has a very high resistance, and that high resistance is why blood moves so slowly through the capillaries.\" Is this reasoning sound?`,
        options: [r`Yes: speed follows from resistance by Poiseuille's law, not from area`, r`No: speed follows from pressure by Bernoulli's equation, not from area`, r`Yes: speed follows from viscosity by Poiseuille's law, not from area`, r`No: speed follows from total area by continuity, not from resistance`],
        correctAnswer: 3,
        explanation: r`The same volume flow passes every level, so the speed at each level is set by its combined cross-sectional area through $Av$ = constant; the capillaries' huge total area makes the blood slow. Poiseuille's law gives the pressure needed to drive a flow through a resistance, not the speed at a given flow. Bernoulli's equation does not explain it either, since capillary flow is strongly viscous.`,
      },
    ],
  },
  [r`A vessel narrows to half its radius at constant driving pressure. By what factor does flow drop?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A renal artery carries 800 mL/min. Disease narrows a long stretch of it to half its radius while the driving pressure across it stays constant and the flow stays laminar. What flow does it now carry?`,
        options: [r`50 mL/min`, r`400 mL/min`, r`200 mL/min`, r`100 mL/min`],
        correctAnswer: 0,
        explanation: r`Poiseuille flow goes as $r^4$, so halving the radius cuts the flow by $2^4 = 16$: $800/16 = 50$ mL/min. 400 mL/min divides by 2 as if flow went as $r$, 200 mL/min divides by 4 (the area), and 100 mL/min divides by 8.`,
      },
      {
        question: r`The flow through a long vessel falls to 1/81 of its original value while the driving pressure stays constant and the flow stays laminar. The vessel's radius is now what fraction of its original value?`,
        options: [r`one-ninth`, r`one-third`, r`one eighty-first`, r`one twenty-seventh`],
        correctAnswer: 1,
        explanation: r`Flow goes as $r^4$, and $(1/3)^4 = 1/81$, so the radius is one-third of its original value. One-ninth takes only a square root, as if flow went as $r^2$; one eighty-first treats flow as proportional to radius; one twenty-seventh fits a cube.`,
      },
      {
        question: r`A long vessel narrows to half its radius at constant driving pressure, with laminar flow. About what percentage of the ORIGINAL flow still passes through it?`,
        options: [r`about 6%`, r`about 50%`, r`about 25%`, r`about 12%`],
        correctAnswer: 0,
        explanation: r`The flow falls sixteenfold, and 1/16 = 0.0625, so about 6% of the original flow remains. About 50% assumes flow goes as radius, about 25% uses the area ($r^2$), and about 12% uses the third power.`,
      },
      {
        question: r`A long stretch of an artery has been narrowed to half its normal radius and carries 15 mL/min. A stent restores the full normal radius. With the same driving pressure and laminar flow, what flow does it carry afterward?`,
        options: [r`30 mL/min`, r`240 mL/min`, r`60 mL/min`, r`120 mL/min`],
        correctAnswer: 1,
        explanation: r`Going from half the radius back to the full radius doubles $r$, and flow goes as $r^4$, so the flow rises by 16: $15 \times 16 = 240$ mL/min. 30 mL/min uses the first power of 2, 60 mL/min the second and 120 mL/min the third.`,
      },
      {
        question: r`Two identical long vessels in parallel each carry 80 mL/min under the same constant driving pressure. One of them narrows to half its radius; the other is unchanged. With laminar flow, what is the total flow through the pair?`,
        options: [r`120 mL/min`, r`100 mL/min`, r`10 mL/min`, r`85 mL/min`],
        correctAnswer: 3,
        explanation: r`The narrowed vessel's flow falls sixteenfold to $80/16 = 5$ mL/min, and the other still carries 80 mL/min at the same driving pressure, giving 85 mL/min. 120 mL/min halves the narrowed vessel's flow, 100 mL/min quarters it, and 10 mL/min divides the whole 160 mL/min by 16.`,
      },
      {
        question: r`A long tube carries 5 L/min. It is replaced by a tube of the same length with one-tenth of the radius, under the same driving pressure and with laminar flow. What flow does the new tube carry?`,
        options: [r`500 mL/min`, r`50 mL/min`, r`0.5 mL/min`, r`5 mL/min`],
        correctAnswer: 2,
        explanation: r`Flow goes as $r^4$, so it falls by $10^4$: 5 L/min = 5000 mL/min, and $5000/10{,}000 = 0.5$ mL/min. 500 mL/min divides by 10 only, 50 mL/min by 100 (the area) and 5 mL/min by 1000.`,
      },
    ],
  },
  [r`Which raises resistance more: halving a vessel's radius, or doubling its length?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A surgeon replaces a vessel segment with a graft that has half the radius and half the length. The blood's viscosity is unchanged and flow is laminar. Compared with the original segment, the graft's resistance is:`,
        options: [r`32 times as large`, r`2 times as large`, r`8 times as large`, r`4 times as large`],
        correctAnswer: 2,
        explanation: r`Resistance is proportional to $L/r^4$: halving the radius multiplies it by 16 and halving the length multiplies it by 1/2, giving 8. 32 times multiplies by 2 for the length instead of dividing, 2 times uses $r^2$ for the radius, and 4 times uses $r^3$.`,
      },
      {
        question: r`A tube is replaced by one with 3 times the radius and 3 times the length, carrying the same fluid in laminar flow. Compared with the original, the new tube's resistance is:`,
        options: [r`1/3 as large`, r`3 times as large`, r`1/9 as large`, r`1/27 as large`],
        correctAnswer: 3,
        explanation: r`Resistance is proportional to $L/r^4$, so it changes by $3/3^4 = 3/81 = 1/27$. 1/3 gives the radius only a square ($3/9$), 3 times uses the length factor alone, and 1/9 gives the radius a cube ($3/27$).`,
      },
      {
        question: r`Halving a vessel's radius raises its resistance by a certain factor. To raise the resistance of a normal-radius vessel by that same factor through length alone, how much longer would it have to be?`,
        options: [r`16 times as long`, r`2 times as long`, r`4 times as long`, r`8 times as long`],
        correctAnswer: 0,
        explanation: r`Halving the radius multiplies resistance by $2^4 = 16$, and resistance is only directly proportional to length, so the vessel would need to be 16 times as long. 2 times assumes radius also enters linearly, 4 times uses $r^2$, and 8 times uses $r^3$.`,
      },
      {
        question: r`A catheter has a resistance of 40 units. It is replaced by a catheter with twice the radius and 4 times the length, with the same fluid and laminar flow. What is the new resistance?`,
        options: [r`160 units`, r`640 units`, r`2.5 units`, r`10 units`],
        correctAnswer: 3,
        explanation: r`Resistance is proportional to $L/r^4$, so it changes by $4/2^4 = 1/4$: $40/4 = 10$ units. 160 units uses the length factor alone, 640 units multiplies by 16 instead of dividing, and 2.5 units uses the radius factor alone.`,
      },
      {
        question: r`An IV line delivers 10 mL/min, and the tubing provides all of its resistance. A nurse can either halve the tubing's length or switch to tubing of twice the inner radius. With the same pressure difference and laminar flow, what flow does each change give?`,
        options: [r`160 mL/min if shorter, 20 mL/min if wider`, r`20 mL/min if shorter, 40 mL/min if wider`, r`20 mL/min if shorter, 160 mL/min if wider`, r`40 mL/min if shorter, 160 mL/min if wider`],
        correctAnswer: 2,
        explanation: r`Resistance is proportional to $L/r^4$. Halving the length halves the resistance and doubles the flow to 20 mL/min; doubling the radius cuts the resistance 16-fold and gives 160 mL/min. The swapped answer gives length the fourth power, 40 mL/min for the wider tubing uses only $r^2$, and 40 mL/min for the shorter tubing squares the length factor.`,
      },
      {
        question: r`A model vessel has a radius of 1 mm and a length of 10 cm. A second model vessel has a radius of 100 μm and a length of 1 mm, and carries the same fluid in laminar flow. Compared with the first, the second vessel's resistance is:`,
        options: [r`10 times as large`, r`100 times as large`, r`0.01 times as large`, r`10⁶ times as large`],
        correctAnswer: 1,
        explanation: r`The radius is 10 times smaller (100 μm = 0.1 mm), which multiplies resistance by $10^4$; the length is 100 times shorter (10 cm = 100 mm), which divides it by $10^2$. The net factor is $10^4/10^2 = 100$. 10 times miscounts a power of ten, 0.01 times uses only the length, and $10^6$ times multiplies by the length factor instead of dividing.`,
      },
    ],
  },
  [r`Why can a forced expiration collapse an airway (dynamic compression)?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Patients with COPD are taught to breathe out slowly and gently rather than forcefully. In terms of airway pressures, why does a gentler breath out help keep the small airways open?`,
        options: [r`Slower air makes the pressure inside the airway fall much further`, r`Faster air keeps the pressure inside the airway from falling as far`, r`Slower air keeps the pressure inside the airway from falling as far`, r`Slower air raises the pleural pressure that squeezes the airway`],
        correctAnswer: 2,
        explanation: r`By Bernoulli's principle the pressure inside the airway falls as the air speeds up, so slower air leaves the inside pressure higher, and a gentle effort also raises the pleural pressure outside less. Saying slower air lowers the inside pressure further reverses Bernoulli, a gentle breath does not make the air faster, and less effort lowers the pleural pressure rather than raising it.`,
      },
      {
        question: r`During a forced expiration a floppy airway begins to narrow while the airflow through it continues at the same rate. Why does the narrowing then tend to feed on itself?`,
        options: [r`Narrowing lowers the air speed, which lowers the inside pressure more`, r`Narrowing raises the air speed, which raises the inside pressure more`, r`Narrowing lowers the air speed, which raises the outside pressure more`, r`Narrowing raises the air speed, which lowers the inside pressure more`],
        correctAnswer: 3,
        explanation: r`By continuity the same airflow through a smaller area must move faster, and by Bernoulli faster air has lower pressure, so the inside pressure drops further below the outside pressure and the airway is squeezed more. The choices with lower air speed get continuity backwards, and faster air raising the pressure gets Bernoulli backwards.`,
      },
    ],
  },
  [r`Vascular resistance is {{c1::$8\eta L/(\pi r^4)$}}, so viscosity and length enter {{c1::linearly}}.`]: {
    kind: 'calc',
    more: [
      {
        question: r`The pressure difference across the systemic circulation is 90 mmHg and its total resistance is 18 mmHg·min/L. Using flow rate = pressure difference ÷ resistance, what is the blood flow?`,
        options: [r`1620 L/min`, r`0.2 L/min`, r`108 L/min`, r`5 L/min`],
        correctAnswer: 3,
        explanation: r`$Q = \Delta P/R = 90/18 = 5$ L/min. 1620 L/min multiplies the two numbers, 0.2 L/min divides the resistance by the pressure difference, and 108 L/min adds them.`,
      },
      {
        question: r`Blood flows through the pulmonary circulation at 6 L/min, driven by a pressure difference of 12 mmHg. What is the resistance of the pulmonary circulation?`,
        options: [r`72 mmHg·min/L`, r`2 mmHg·min/L`, r`0.5 mmHg·min/L`, r`18 mmHg·min/L`],
        correctAnswer: 1,
        explanation: r`Flow rate equals pressure difference divided by resistance, so $R = \Delta P/Q = 12/6 = 2$ mmHg·min/L. 72 multiplies the two numbers, 0.5 inverts the ratio, and 18 adds them.`,
      },
      {
        question: r`An IV line with 150 cm of tubing delivers 20 mL/min. The tubing is shortened to 50 cm, with the same inner radius, fluid and pressure difference, and laminar flow. Taking the tubing as the only resistance, what is the new flow?`,
        options: [r`60 mL/min`, r`6.7 mL/min`, r`180 mL/min`, r`1620 mL/min`],
        correctAnswer: 0,
        explanation: r`Resistance is directly proportional to length, so one-third of the length has one-third of the resistance and passes 3 times the flow: 60 mL/min. 6.7 mL/min lowers the flow for a shorter tube, 180 mL/min squares the factor of 3, and 1620 mL/min gives length the fourth power that belongs to radius.`,
      },
      {
        question: r`A fluid is replaced by one with twice the viscosity, and the tube carrying it is replaced by one with half the length and the same radius. With laminar flow, the tube's resistance is now:`,
        options: [r`4 times as large`, r`the same as before`, r`one-quarter as large`, r`twice as large`],
        correctAnswer: 1,
        explanation: r`Resistance $8\eta L/(\pi r^4)$ is proportional to both viscosity and length, so it changes by $2 \times \tfrac{1}{2} = 1$: no change. 4 times multiplies by 2 for the length instead of dividing, one-quarter divides for both, and twice as large ignores the shorter length.`,
      },
      {
        question: r`A length of tubing has a resistance of 2 × 10⁹ Pa·s/m³. What pressure difference drives a flow of 5 mL/s through it? (1 mL = 10⁻⁶ m³)`,
        options: [r`1 kPa`, r`100 kPa`, r`10 kPa`, r`1000 kPa`],
        correctAnswer: 2,
        explanation: r`$\Delta P = QR = (5 \times 10^{-6}\,\text{m}^3/\text{s})(2 \times 10^{9}\,\text{Pa·s/m}^3) = 10^4$ Pa = 10 kPa. The other values each slip one or two powers of ten in the conversion of mL to m³ or of Pa to kPa.`,
      },
      {
        question: r`A liquid flows through a tube at 12 mL/s. It is replaced by a liquid with 3 times the viscosity, and the tube by one with twice the length and the same radius. With the same pressure difference and laminar flow, what is the new flow?`,
        options: [r`2 mL/s`, r`72 mL/s`, r`2.4 mL/s`, r`8 mL/s`],
        correctAnswer: 0,
        explanation: r`Resistance is proportional to $\eta L$, so it rises by $3 \times 2 = 6$ and the flow falls to $12/6 = 2$ mL/s. 72 mL/s multiplies the flow by 6, 2.4 mL/s adds the factors (3 + 2 = 5) instead of multiplying, and 8 mL/s divides the two factors (3/2).`,
      },
    ],
  },
}
