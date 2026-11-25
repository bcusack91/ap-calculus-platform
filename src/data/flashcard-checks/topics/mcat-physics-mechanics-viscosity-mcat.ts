import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-physics-mechanics-viscosity-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`Each capillary is narrower than an arteriole, so why is the largest systemic pressure drop across the arterioles?`]: {
    question: r`One arteriole with a resistance of 4 units feeds 100 identical capillaries in parallel, each with a resistance of 100 units. The same total flow passes through both levels. Where is the pressure drop larger?`,
    options: [r`Across the capillaries: 25 times the arteriole drop`, r`Across the capillaries: 2500 times the arteriole drop`, r`Across the arteriole: 400 times the capillary drop`, r`Across the arteriole: 4 times the capillary drop`],
    correctAnswer: 3,
    explanation: r`One hundred equal resistances in parallel combine to 100/100 = 1 unit, so the capillary bed has a quarter of the arteriole's resistance and, at the same flow, a quarter of its pressure drop. The 25 times answer compares a single capillary with the arteriole. The 2500 times answer adds the capillaries as if they were in series, and 400 times divides the bed's resistance by 100 twice.`,
  },
  [r`Cutting a vessel's radius by only about {{c1::16%}} halves its flow at a fixed pressure difference.`]: {
    question: r`A vessel's radius is cut by about 16%, and later it is cut by a further 16% of its new radius. With the pressure difference fixed and the flow laminar, the flow falls to about what fraction of its original value?`,
    options: [r`one-half`, r`one-quarter`, r`two-thirds`, r`one-sixteenth`],
    correctAnswer: 1,
    explanation: r`Each 16% cut in radius halves the flow, because 0.84 to the fourth power is about 0.5, so two cuts in a row leave about one-quarter. One-half counts only one of the cuts. Two-thirds treats flow as proportional to the radius, and one-sixteenth is the result of halving the radius, which needs a 50% cut.`,
  },
  [r`Why can severe anemia produce a heart murmur even with normal valves?`]: {
    question: r`In severe anemia, a patient's blood viscosity falls to half its normal value and the blood speed through the aortic valve rises to 1.5 times normal. Density and valve diameter are unchanged. Using Re = ρvD/η, the Reynolds number becomes:`,
    options: [r`3 times as large`, r`0.75 times as large`, r`1.5 times as large`, r`0.33 times as large`],
    correctAnswer: 0,
    explanation: r`Re is proportional to speed and inversely proportional to viscosity, so it changes by 1.5/0.5 = 3, which pushes the flow toward turbulence and an audible murmur. The 0.75 answer multiplies by the viscosity factor instead of dividing. The 1.5 answer ignores viscosity, and 0.33 inverts the whole ratio.`,
  },
  [r`Name the three fluids regimes to identify first in a passage, with the tools for each.`]: {
    question: r`A passage describes water spraying from a small hole near the base of a large open tank and asks for the speed of the jet. Viscosity is said to be negligible. Which regime and tool fit?`,
    options: [r`Viscous flow: Poiseuille's law, with the hole's resistance`, r`Static fluid: Pascal's principle, for an enclosed liquid`, r`Ideal flow: Bernoulli's equation, as Torricelli's result`, r`Static fluid: Archimedes' principle, for displaced liquid`],
    correctAnswer: 2,
    explanation: r`The water is moving and viscosity is negligible, so this is ideal flow, and Bernoulli's equation between the surface and the hole gives Torricelli's v = √(2gh). Poiseuille's law is for viscous flow through long tubes. Pascal's and Archimedes' principles belong to fluids at rest and cannot give a jet's speed.`,
  },
  [r`For a stenosis, when does Bernoulli apply and when does Poiseuille?`]: {
    question: r`Patient X has a narrowing only 2 mm long at a heart valve, and the question asks for the pressure dip in the fast jet. Patient Y has a 10 cm stretch of narrowed artery under a fixed driving pressure, and the question asks how much the flow falls. Which equations fit?`,
    options: [r`Poiseuille for X and Bernoulli for Y`, r`Bernoulli for X and Poiseuille for Y`, r`Bernoulli for both X and Y`, r`Poiseuille for both X and Y`],
    correctAnswer: 1,
    explanation: r`A short narrowing changes the speed quickly with little friction, so Bernoulli gives the pressure dip in X's jet. A long narrowing at fixed driving pressure is a resistance problem, so Poiseuille's dependence on the fourth power of the radius gives Y's reduced flow. Swapping them, or using one equation for both, ignores what the length of the narrowing decides.`,
  },
  [r`After a leg amputation removes one parallel vascular bed, with cardiac output unchanged, what happens to TPR and MAP?`]: {
    question: r`A surgeon joins an artery directly to a vein, opening a new low-resistance path in parallel with the body's existing vascular beds. If cardiac output is momentarily unchanged, what happens to total peripheral resistance (TPR) and mean arterial pressure (MAP)?`,
    options: [r`TPR rises and MAP rises`, r`TPR falls and MAP rises`, r`TPR rises and MAP falls`, r`TPR falls and MAP falls`],
    correctAnswer: 3,
    explanation: r`Adding a parallel path always lowers the total resistance, and with MAP ≈ CO × TPR at fixed cardiac output, MAP falls with it. Saying TPR rises treats the new path as if it were added in series. The mixed answers break the direct proportionality between MAP and TPR at constant cardiac output.`,
  },
  [r`How does vessel radius affect flow (Poiseuille)?`]: {
    question: r`A drug doubles the radius of an arteriole while the pressure difference across it stays the same. Flow through the arteriole was 2 mL/min before the drug. With laminar flow, what is it afterward?`,
    options: [r`4 mL/min`, r`8 mL/min`, r`32 mL/min`, r`16 mL/min`],
    correctAnswer: 2,
    explanation: r`Poiseuille flow is proportional to the fourth power of the radius, so doubling the radius multiplies the flow by 2⁴ = 16, giving 32 mL/min. The 4 mL/min answer treats flow as proportional to the radius, and 8 mL/min uses the radius squared, as for area. The 16 mL/min answer is the factor itself, or the radius cubed.`,
  },
  [r`What distinguishes turbulent from laminar flow, and why does it matter clinically?`]: {
    question: r`Over a narrowed stretch of a carotid artery a physician hears a whooshing bruit through the stethoscope, but over a normal stretch she hears nothing. What best explains the difference?`,
    options: [r`Flow at the narrowing is turbulent, and turbulence makes sound`, r`Flow at the narrowing is laminar, and laminar flow makes sound`, r`Flow at the narrowing is slower, and slow blood flow makes sound`, r`Flow at the narrowing is viscous, and viscous drag makes sound`],
    correctAnswer: 0,
    explanation: r`Blood speeds up through the narrowing, which raises the Reynolds number past its critical value, and the resulting turbulence is audible. Smooth laminar flow is silent, which is why the normal stretch gives no sound. Blood is faster, not slower, at a narrowing, and viscosity favors quiet laminar flow.`,
  },
  [r`What happens to pressure inside an arterial stenosis?`]: {
    question: r`Water flows through a soft, thin-walled rubber tube lying on a bench. One short section of the tube is narrower than the rest. Treating the water as ideal, what does the tube wall tend to do at the narrow section?`,
    options: [r`Bulge outward, because faster flow there raises the pressure`, r`Bulge outward, because slower flow there raises the pressure`, r`Pull inward, because faster flow there lowers the pressure`, r`Pull inward, because slower flow there lowers the pressure`],
    correctAnswer: 2,
    explanation: r`Continuity makes the water faster in the narrow section, and Bernoulli makes its pressure lower there, so the soft wall is drawn inward, as in a stenosis. Faster flow raising the pressure reverses Bernoulli. The answers with slower flow reverse continuity, since the water speeds up where the tube narrows.`,
  },
  [r`In Poiseuille's law, flow rate is proportional to {{c1::the fourth power of the radius}}.`]: {
    question: r`Catheter A has 3 times the inner radius of catheter B. Both have the same length and carry the same fluid in laminar flow under the same pressure difference. What is the ratio of the flow rate in A to the flow rate in B?`,
    options: [r`81`, r`3`, r`9`, r`27`],
    correctAnswer: 0,
    explanation: r`Flow rate is proportional to the fourth power of the radius, so the ratio is 3⁴ = 81. A ratio of 3 treats flow as proportional to radius, and 9 uses the radius squared, which is the area ratio only. A ratio of 27 uses the third power.`,
  },
  [r`How does raising hematocrit affect cardiac workload?`]: {
    question: r`Blood doping raises an athlete's blood viscosity by 25%. If the vessels' dimensions and the cardiac output are unchanged and flow stays laminar, the pressure difference the heart must supply becomes:`,
    options: [r`0.80 times as large`, r`1.25 times as large`, r`2.44 times as large`, r`1.56 times as large`],
    correctAnswer: 1,
    explanation: r`Poiseuille resistance is directly proportional to viscosity, so the same flow needs a pressure difference 1.25 times as large. The 0.80 answer inverts the relationship. The 2.44 and 1.56 answers raise 1.25 to the fourth and second powers, but the fourth power belongs to the radius, not to viscosity.`,
  },
  [r`Why does an aneurysm tend to enlarge once it forms?`]: {
    question: r`A weak spot in a level rubber hose carrying water bulges to twice the hose's normal radius. Treating the water as ideal and using wall tension T = P × r, how do the water pressure and the wall tension in the bulge compare with the normal hose?`,
    options: [r`Pressure slightly higher and wall tension higher`, r`Pressure slightly lower and wall tension higher`, r`Pressure slightly higher and wall tension lower`, r`Pressure slightly lower and wall tension lower`],
    correctAnswer: 0,
    explanation: r`The water slows in the wide bulge, so by Bernoulli its pressure rises, and the larger radius raises the wall tension further, which is why a bulge such as an aneurysm tends to grow. Lower pressure would need the water to speed up in the wider section, against continuity. Lower wall tension ignores that tension grows with both pressure and radius.`,
  },
  [r`Continuity or Poiseuille: which explains slow capillary flow, and which explains high resistance in a stenosis?`]: {
    question: r`A report notes two findings. First, blood slows sharply on entering a wide venous sinus. Second, a much larger pressure difference is needed to push the same flow through a long, narrowed graft. Which principle explains each?`,
    options: [r`Poiseuille explains the first; continuity the second`, r`Continuity explains the first; Poiseuille the second`, r`Continuity explains both the first and the second`, r`Poiseuille explains both the first and the second`],
    correctAnswer: 1,
    explanation: r`Slowing in a wider channel follows from continuity, since Av is constant for a conserved volume flow. The pressure cost of pushing flow through a long, narrow tube is resistance, which Poiseuille's law describes. Continuity says nothing about pressure cost, and Poiseuille's law is not what links speed to cross-sectional area.`,
  },
  [r`A vessel narrows to half its radius at constant driving pressure. By what factor does flow drop?`]: {
    question: r`Plaque reduces a long artery's radius to half its normal value. To keep the flow through it unchanged, with laminar flow, the pressure difference across the artery must rise by what factor?`,
    options: [r`2`, r`16`, r`4`, r`8`],
    correctAnswer: 1,
    explanation: r`At a fixed pressure difference, halving the radius would cut the flow 16-fold, because flow goes as the fourth power of the radius, so restoring the flow needs 16 times the pressure difference. A factor of 2 treats the dependence as linear, and 4 uses the radius squared, as for area. A factor of 8 uses the third power.`,
  },
  [r`Which raises resistance more: halving a vessel's radius, or doubling its length?`]: {
    question: r`In vessel X the radius is halved. In vessel Y the length is quadrupled and the fluid's viscosity is doubled, with the radius unchanged. Which vessel's resistance rises more?`,
    options: [r`Y, with 8-fold against 4-fold for X`, r`Y, with 8-fold against 2-fold for X`, r`X, with 16-fold against 8-fold for Y`, r`Y, with 6-fold against 4-fold for X`],
    correctAnswer: 2,
    explanation: r`Resistance goes as the inverse fourth power of the radius, so halving it gives a 16-fold rise in X. Length and viscosity enter only linearly, so Y rises 4 × 2 = 8-fold. The 4-fold and 2-fold figures for X use the second or first power of the radius, and 6-fold for Y adds the two factors instead of multiplying them.`,
  },
  [r`Why can a forced expiration collapse an airway (dynamic compression)?`]: {
    question: r`A patient with emphysema blows out as hard as possible, and a floppy small airway narrows shut partway through the breath. Which combination explains the collapse?`,
    options: [r`Pressure inside falls as air speeds up, while pressure outside rises`, r`Pressure inside rises as air speeds up, while pressure outside falls`, r`Pressure inside falls as air slows down, while pressure outside rises`, r`Pressure inside rises as air slows down, while pressure outside falls`],
    correctAnswer: 0,
    explanation: r`Fast expiratory flow lowers the pressure inside the airway by Bernoulli's principle, while the forced effort raises the pleural pressure outside, so the compliant wall is squeezed shut. Pressure rising with speed reverses Bernoulli. The air is speeding up, not slowing, and a forced breath out raises the outside pressure.`,
  },
  [r`Vascular resistance is {{c1::$8\eta L/(\pi r^4)$}}, so viscosity and length enter {{c1::linearly}}.`]: {
    question: r`A length of IV tubing is replaced by tubing three times as long with the same inner radius. The fluid and the pressure difference across the tubing are unchanged, and flow is laminar. The flow rate becomes:`,
    options: [r`one-ninth as large`, r`one eighty-first as large`, r`three times as large`, r`one-third as large`],
    correctAnswer: 3,
    explanation: r`Resistance is 8ηL/(πr⁴), so it is directly proportional to length: tripling the length triples the resistance and cuts the flow to one-third. One-ninth and one eighty-first apply the second and fourth powers, but only the radius carries the fourth power. Three times as large inverts the relationship.`,
  },
}
