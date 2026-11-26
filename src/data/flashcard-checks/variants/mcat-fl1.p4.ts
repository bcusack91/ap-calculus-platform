import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-fl1`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`What symbols stand for the two piston areas of a hydraulic lift, and what is the SI unit of area?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A hydraulic press squeezes plywood sheets with its large output piston, whose face measures 500 cm². With the usual labels for a lift's two pistons, how is this area written in SI units?`,
        options: [r`A₁ = 5.0 × 10⁻² m²`, r`A₂ = 5.0 m²`, r`A₂ = 5.0 × 10⁻² m²`, r`A₁ = 5.0 m²`],
        correctAnswer: 2,
        explanation: r`The output (large) piston's area is A₂, and 1 cm² = 10⁻⁴ m², so 500 cm² = 5.0 × 10⁻² m². The label A₁ belongs to the input (small) piston. The value 5.0 m² comes from dividing by 100, as if converting a length instead of an area.`,
      },
      {
        question: r`A worked solution for a hydraulic lift uses A₁ = 4.0 × 10⁻⁴ m² and A₂ = 1.2 × 10⁻² m². Which description of the lift matches these two values?`,
        options: [
          r`A 4 cm² input piston and a 120 cm² output piston`,
          r`A 4 cm² output piston and a 120 cm² input piston`,
          r`A 0.04 cm² input piston and a 1.2 cm² output piston`,
          r`A 0.04 cm² output piston and a 1.2 cm² input piston`,
        ],
        correctAnswer: 0,
        explanation: r`A₁ is the input (small) piston and A₂ the output (large) piston, and 1 m² = 10⁴ cm², so the areas are 4 cm² and 120 cm². The descriptions that swap input and output mix up the labels. The values 0.04 cm² and 1.2 cm² come from multiplying by 100 instead of 10⁴.`,
      },
    ],
  },
  [r`What does Pascal's principle say about a pressure change in an enclosed fluid?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A sealed steel drum is completely full of water. A piston of area 0.050 m² fitted in its lid is pushed with a force of 200 N. By how much does the water pressure rise at a point on the drum's wall 0.80 m away from the piston?`,
        options: [r`10 Pa`, r`4000 Pa`, r`3200 Pa`, r`250 Pa`],
        correctAnswer: 1,
        explanation: r`The change is ΔP = F/A = (200 N)/(0.050 m²) = 4000 Pa, and it reaches every point of the enclosed water undiminished, so the distance does not matter. The value 10 Pa multiplies force by area, 3200 Pa scales the change down with distance, and 250 Pa divides the force by the distance.`,
      },
      {
        question: r`A rigid sealed bottle is completely full of water and closed by a sliding piston of area 4 cm². What push on the piston raises the pressure everywhere in the water by 5.0 × 10⁴ Pa? (1 cm² = 10⁻⁴ m²)`,
        options: [r`2000 N`, r`200,000 N`, r`125 N`, r`20 N`],
        correctAnswer: 3,
        explanation: r`Rearranging ΔP = F/A gives F = ΔP × A = (5.0 × 10⁴ Pa)(4 × 10⁻⁴ m²) = 20 N. The value 200,000 N leaves the area in cm², 2000 N converts it as 4 × 10⁻² m², and 125 N comes from dividing the pressure by the area and slipping the powers of ten.`,
      },
      {
        question: r`In a hydraulic test rig, a 600 N force on a sealing piston must raise the pressure of the enclosed oil by 3.0 × 10⁵ Pa at every point. What area must the piston have? (1 m² = 10⁴ cm²)`,
        options: [r`20 cm²`, r`2 cm²`, r`500 cm²`, r`200 cm²`],
        correctAnswer: 0,
        explanation: r`From ΔP = F/A, A = F/ΔP = (600 N)/(3.0 × 10⁵ Pa) = 2.0 × 10⁻³ m², which is 20 cm². The values 2 cm² and 200 cm² come from a slip in the conversion from m² to cm². The value 500 comes from dividing the pressure by the force.`,
      },
      {
        question: r`A sealed tank full of oil has an inspection window of area 0.010 m² in its side. A piston of area 0.0020 m² in the lid is pushed with 80 N. By how much does the force of the oil on the window increase?`,
        options: [r`80 N`, r`16 N`, r`400 N`, r`40,000 N`],
        correctAnswer: 2,
        explanation: r`The push raises the pressure by ΔP = (80 N)/(0.0020 m²) = 4.0 × 10⁴ Pa everywhere, including at the walls. On the window this adds a force of (4.0 × 10⁴ Pa)(0.010 m²) = 400 N. Answering 80 N carries the force across unchanged, 16 N inverts the area ratio, and 40,000 is the pressure change, not a force.`,
      },
      {
        question: r`A nurse pushes with 12 N on the plunger, of area 3 cm², of a capped syringe full of saline. The same 12 N push is then used on a capped, saline-filled syringe whose plunger has an area of 1.5 cm². How does the pressure rise in the second syringe compare with that in the first?`,
        options: [r`It is 4 times as large`, r`It is 2 times as large`, r`It is half as large`, r`It is the same size`],
        correctAnswer: 1,
        explanation: r`Since ΔP = F/A, the same force on half the area gives twice the pressure change: 4.0 × 10⁴ Pa in the first syringe and 8.0 × 10⁴ Pa in the second. Half as large inverts the relationship, 4 times squares the factor, and the same size treats pressure as if it were the force.`,
      },
      {
        question: r`A horizontal sealed pipe full of water has a pressure gauge at each end, 3 m apart. A piston of area 5 cm² at the near end is pushed with an extra force of 100 N. By how much does each gauge reading rise? (1 cm² = 10⁻⁴ m²)`,
        options: [
          r`200 kPa at the near gauge and 0 kPa at the far gauge`,
          r`20 kPa at the near gauge and 20 kPa at the far gauge`,
          r`200 kPa at the near gauge and 100 kPa at the far gauge`,
          r`200 kPa at the near gauge and 200 kPa at the far gauge`,
        ],
        correctAnswer: 3,
        explanation: r`ΔP = F/A = (100 N)/(5 × 10⁻⁴ m²) = 2.0 × 10⁵ Pa = 200 kPa, and an enclosed fluid passes this change undiminished to every point, so both gauges rise by 200 kPa. A smaller or zero rise at the far gauge wrongly lets the change fade with distance. The 20 kPa values come from a slip in converting cm² to m².`,
      },
    ],
  },
  [r`Why must the fluid in a hydraulic system be incompressible?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A design team is choosing the working fluid for a hydraulic press that must pass each pump stroke straight on to the output piston. Which property must the fluid have?`,
        options: [
          r`Its volume shrinks easily when it is squeezed`,
          r`Its density is far lower than that of water`,
          r`Its volume barely changes when it is squeezed`,
          r`Its density is far higher than that of water`,
        ],
        correctAnswer: 2,
        explanation: r`A hydraulic fluid must be incompressible, so that every bit of volume pushed in at the input piston comes out at the output piston. A fluid whose volume shrinks easily, such as a gas, would take up the stroke by compressing. A high or low density does not decide whether the push is passed on.`,
      },
      {
        question: r`A sealed line joins two pistons of equal area. Filled with substance X, a 6 cm push on one piston moves the other 6 cm against a load. Filled with substance Y, the same 6 cm push moves the other piston only 1 cm, and nothing leaks. What does this show?`,
        options: [
          r`X is nearly incompressible, and Y was squeezed into a smaller volume`,
          r`Y is nearly incompressible, and X was squeezed into a smaller volume`,
          r`X is much denser than Y, so X carries a larger change of pressure`,
          r`Y is much denser than X, so Y soaks up more of the pressure change`,
        ],
        correctAnswer: 0,
        explanation: r`With X, all the volume pushed in came out at the other piston, which is what an incompressible liquid does. With Y, most of the stroke went into squeezing the substance into a smaller volume, as happens with a gas. Density is not what decides whether the travel is passed on.`,
      },
    ],
  },
  [r`In a hydraulic lift, what is the same at both pistons?`]: {
    kind: 'calc',
    more: [
      {
        question: r`In a barber's chair, a 45 N push on a pedal piston of area 3 cm² holds up a chair and customer weighing 900 N in total. Both pistons are at the same height. What is the area of the piston under the chair?`,
        options: [r`20 cm²`, r`60 cm²`, r`135 cm²`, r`0.15 cm²`],
        correctAnswer: 1,
        explanation: r`The pressure is the same at both pistons: (45 N)/(3 cm²) = 15 N/cm², so A₂ = (900 N)/(15 N/cm²) = 60 cm². The value 20 is only the force ratio, 0.15 cm² inverts the ratio, and 135 multiplies the input force by the input area.`,
      },
      {
        question: r`An ideal hydraulic lift holds a 2400 N motorcycle at rest on a piston of area 0.12 m². The input piston, at the same height, has an area of 0.0040 m². What force acts on the input piston?`,
        options: [r`80 N`, r`2400 N`, r`20,000 N`, r`72,000 N`],
        correctAnswer: 0,
        explanation: r`The shared pressure is (2400 N)/(0.12 m²) = 2.0 × 10⁴ Pa, so the input force is (2.0 × 10⁴ Pa)(0.0040 m²) = 80 N. Answering 2400 N treats the force as the shared quantity, 20,000 is the pressure in pascals, and 72,000 N inverts the area ratio.`,
      },
      {
        question: r`Two pistons at the same height seal a container of oil at rest. A 20 N force presses on the small piston, of area 5 cm². The large piston has an area of 50 cm². What force acts on the large piston, and what is the oil pressure under it? (1 cm² = 10⁻⁴ m²)`,
        options: [
          r`20 N of force and 4.0 × 10⁴ Pa of pressure`,
          r`200 N of force and 4.0 × 10⁵ Pa of pressure`,
          r`20 N of force and 4.0 × 10³ Pa of pressure`,
          r`200 N of force and 4.0 × 10⁴ Pa of pressure`,
        ],
        correctAnswer: 3,
        explanation: r`The pressure under the small piston is (20 N)/(5 × 10⁻⁴ m²) = 4.0 × 10⁴ Pa, and the pressure is the same under the large one. The force there is (4.0 × 10⁴ Pa)(50 × 10⁻⁴ m²) = 200 N. The options with 20 N make the force the shared quantity, and the options with 4.0 × 10⁵ Pa or 4.0 × 10³ Pa change the pressure between the pistons.`,
      },
      {
        question: r`Pistons X and Y of an ideal hydraulic press are at rest at the same height. The area of Y is 12 times the area of X. How do the forces on the pistons and the pressures under them compare?`,
        options: [
          r`The forces are equal, and the pressure at Y is 12 times larger`,
          r`The forces are equal, and the pressure at Y is 12 times smaller`,
          r`The force on Y is 12 times larger, and the pressures are equal`,
          r`The force on Y is 12 times larger, and so is the pressure at Y`,
        ],
        correctAnswer: 2,
        explanation: r`The pressure is the same at both pistons, so F/A is equal and the force scales with the area: Y, with 12 times the area, feels 12 times the force. The options with equal forces mistake force for the shared quantity. A pressure that is 12 times larger at Y would mean the liquid was not at rest.`,
      },
      {
        question: r`An engineer wants a 25 N thumb push to hold a 500 N load in an ideal hydraulic clamp. The output piston has an area of 40 cm² and sits at the same height as the input piston. What area must the input piston have?`,
        options: [r`20 cm²`, r`2 cm²`, r`800 cm²`, r`0.5 cm²`],
        correctAnswer: 1,
        explanation: r`Equal pressures give F₁/A₁ = F₂/A₂, so A₁ = A₂ × F₁/F₂ = (40 cm²)(25/500) = 2 cm². The value 800 cm² inverts the force ratio, 20 is just the force ratio itself, and 0.5 cm² divides the force ratio by the output area.`,
      },
      {
        question: r`The oil in a hydraulic press at rest is at a gauge pressure of 5.0 × 10⁵ Pa under the small piston, of area 2 cm². The large piston, at the same height, has an area of 300 cm². What force does the oil exert on each piston? (1 cm² = 10⁻⁴ m²)`,
        options: [
          r`100 N on the small one and 15,000 N on the large one`,
          r`100 N on the small one and 100 N on the large one`,
          r`15,000 N on the small one and 100 N on the large one`,
          r`10 N on the small one and 1500 N on the large one`,
        ],
        correctAnswer: 0,
        explanation: r`The same pressure acts on both pistons, so F = PA gives (5.0 × 10⁵ Pa)(2 × 10⁻⁴ m²) = 100 N and (5.0 × 10⁵ Pa)(300 × 10⁻⁴ m²) = 15,000 N. Equal forces of 100 N treat force as the shared quantity, and the swapped pair gives the larger force to the smaller area. The 10 N and 1500 N pair comes from a power-of-ten slip in the area conversion.`,
      },
    ],
  },
  [r`What is the output force of a hydraulic lift?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A hydraulic nail puller has an input piston of area 0.5 cm² and an output piston of area 20 cm². A carpenter squeezes the input piston with 30 N. With what force does the output piston pull on the nail?`,
        options: [r`0.75 N`, r`300 N`, r`30 N`, r`1200 N`],
        correctAnswer: 3,
        explanation: r`F₂ = F₁ × A₂/A₁ = (30 N)(20/0.5) = (30 N)(40) = 1200 N. The value 0.75 N divides by the area ratio, 30 N carries the input force across unchanged, and 300 N multiplies 30 N by 20 and by 0.5 instead of dividing by 0.5.`,
      },
      {
        question: r`The output piston of a veterinary treatment table has 25 times the area of the pedal piston that drives it. A foot presses the pedal piston with 60 N. What upward force does the output piston give?`,
        options: [r`85 N`, r`2.4 N`, r`1500 N`, r`37,500 N`],
        correctAnswer: 2,
        explanation: r`The output force is the input force times the area ratio: (60 N)(25) = 1500 N. The value 2.4 N divides by the ratio, 85 N adds the ratio to the force, and 37,500 N squares the ratio, which is only right when the 25 compares diameters, not areas.`,
      },
      {
        question: r`A workshop press has an input piston of area 4 cm² and an output piston of area 0.020 m². The operator pushes the input piston with 70 N. What is the output force? (1 m² = 10⁴ cm²)`,
        options: [r`3500 N`, r`350 N`, r`35 N`, r`0.35 N`],
        correctAnswer: 0,
        explanation: r`First match the units: 0.020 m² = 200 cm², so the area ratio is 200/4 = 50 and F₂ = (70 N)(50) = 3500 N. The value 0.35 N divides 0.020 by 4 without converting, and 350 N and 35 N come from converting 0.020 m² as 20 cm² or 2 cm².`,
      },
      {
        question: r`A hydraulic press delivers an output force of 800 N. Its input piston is then replaced by one with one quarter of the area, while the input force and the output piston stay the same. What output force does it deliver now?`,
        options: [r`200 N`, r`3200 N`, r`800 N`, r`12,800 N`],
        correctAnswer: 1,
        explanation: r`F₂ = F₁ × A₂/A₁, so cutting A₁ to one quarter makes the area ratio, and the output force, 4 times larger: 3200 N. The value 200 N scales the wrong way, 800 N ignores the change, and 12,800 N squares the factor, which applies only to a change in diameter.`,
      },
      {
        question: r`A hydraulic bike-repair stand has an input piston of area 1.5 cm² and an output piston of area 45 cm². The mechanic can push the input piston with at most 90 N. What is the heaviest load, by weight, that the stand can hold up?`,
        options: [r`6075 N`, r`3 N`, r`90 N`, r`2700 N`],
        correctAnswer: 3,
        explanation: r`The area ratio is 45/1.5 = 30, so the largest output force is (90 N)(30) = 2700 N. The value 3 N divides by the ratio, 90 N carries the input force across unchanged, and 6075 N multiplies 90 N by both areas.`,
      },
      {
        question: r`A brake pedal pushes with 40 N on a master piston of area 2 cm². The sealed brake fluid presses on a front brake piston of area 12 cm² and a rear brake piston of area 6 cm², all at the same height. What force acts on each brake piston?`,
        options: [
          r`40 N on the front one and 40 N on the rear one`,
          r`240 N on the front one and 120 N on the rear one`,
          r`120 N on the front one and 240 N on the rear one`,
          r`20 N on the front one and 20 N on the rear one`,
        ],
        correctAnswer: 1,
        explanation: r`Each output force is the input force times that piston's area ratio: (40 N)(12/2) = 240 N at the front and (40 N)(6/2) = 120 N at the rear. Giving 40 N to each carries the force across unchanged, and 20 N each shares the force out. The swapped pair gives the larger force to the smaller piston.`,
      },
    ],
  },
  [r`How are the distances moved by a hydraulic lift's two pistons related?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Pressing the input piston of a hydraulic jack, of area 2 cm², through 45 cm raises the output piston by 1.5 cm. What is the area of the output piston?`,
        options: [r`30 cm²`, r`135 cm²`, r`60 cm²`, r`15 cm²`],
        correctAnswer: 2,
        explanation: r`The volume leaving one cylinder enters the other: A₁d₁ = (2 cm²)(45 cm) = 90 cm³, so A₂ = (90 cm³)/(1.5 cm) = 60 cm². The value 30 is only the ratio of the distances, 135 multiplies all three numbers together, and 15 cm² halves the distance ratio instead of doubling it.`,
      },
      {
        question: r`During one pump of a tire-changing stand, a plunger with a 5 cm² face slides 12 cm into its oil-filled cylinder. The oil is pushed through a hose into a second cylinder whose ram has a 40 cm² face. How much oil enters the second cylinder, and how far does its ram rise?`,
        options: [
          r`60 cm³ of oil, raising it 1.5 cm`,
          r`60 cm³ of oil, raising it 12 cm`,
          r`480 cm³ of oil, raising it 12 cm`,
          r`480 cm³ of oil, raising it 96 cm`,
        ],
        correctAnswer: 0,
        explanation: r`The plunger sweeps out A₁d₁ = (5 cm²)(12 cm) = 60 cm³, and the same volume enters the second cylinder, so d₂ = (60 cm³)/(40 cm²) = 1.5 cm. The 480 cm³ options use the ram's area with the plunger's distance. A rise of 12 cm makes the distances equal instead of the volumes.`,
      },
      {
        question: r`A designer wants a 50 cm push on the handle piston of a hydraulic platform to raise the platform's piston, of area 150 cm², by exactly 1 cm. What area must the handle piston have?`,
        options: [r`7500 cm²`, r`0.33 cm²`, r`50 cm²`, r`3 cm²`],
        correctAnswer: 3,
        explanation: r`From A₁d₁ = A₂d₂, A₁ = (150 cm²)(1 cm)/(50 cm) = 3 cm². The value 7500 cm² multiplies the output area by the input distance, 0.33 cm² inverts the result, and 50 is only the ratio of the two distances.`,
      },
      {
        question: r`A lab jack is worked by a thumb plunger with a face of 2.0 cm², which drives water under a platform ram with a face of 0.010 m². The thumb plunger slides in 0.30 m. How far does the platform ram rise? (1 m² = 10⁴ cm²)`,
        options: [r`60 mm`, r`6 mm`, r`300 mm`, r`0.6 mm`],
        correctAnswer: 1,
        explanation: r`In matching units, A₂ = 100 cm² and d₁ = 30 cm, so d₂ = A₁d₁/A₂ = (2.0 cm²)(30 cm)/(100 cm²) = 0.6 cm = 6 mm. The values 60 mm and 0.6 mm come from converting 0.010 m² as 10 cm² or 1000 cm². A rise of 300 mm makes the two distances equal.`,
      },
      {
        question: r`The output piston of an ideal hydraulic hoist pushes with 60 times the force applied to the input piston. In one stroke the input piston moves 90 cm. How far does the output piston move in that stroke?`,
        options: [r`5400 cm`, r`90 cm`, r`1.5 cm`, r`0.67 cm`],
        correctAnswer: 2,
        explanation: r`The distance is divided by the same ratio that multiplies the force, so d₂ = (90 cm)/60 = 1.5 cm. The value 5400 cm multiplies by the ratio, 90 cm makes the two pistons move equally, and 0.67 cm divides 60 by 90.`,
      },
      {
        question: r`Two water-filled syringes are joined by a tube. The wide plunger, with a face of area 6 cm², is pushed in 0.5 cm. The narrow plunger has a face of area 0.2 cm². How far does the narrow plunger slide out?`,
        options: [r`15 cm`, r`0.5 cm`, r`0.6 cm`, r`0.017 cm`],
        correctAnswer: 0,
        explanation: r`The wide plunger pushes out (6 cm²)(0.5 cm) = 3 cm³ of water, which must fit behind the narrow plunger: d = (3 cm³)/(0.2 cm²) = 15 cm. The value 0.017 cm divides by the area ratio instead of multiplying, 0.5 cm makes the travels equal, and 0.6 cm multiplies all three numbers.`,
      },
    ],
  },
  [r`Does a hydraulic lift multiply work?`]: {
    kind: 'calc',
    more: [
      {
        question: r`With each stroke, an ideal hydraulic jack raises an 8000 N boat trailer by 0.030 m while its input piston travels 0.60 m. What force does the operator apply to the input piston?`,
        options: [r`8000 N`, r`144 N`, r`160,000 N`, r`400 N`],
        correctAnswer: 3,
        explanation: r`Work in equals work out: F₁(0.60 m) = (8000 N)(0.030 m) = 240 J, so F₁ = 400 N. Answering 8000 N ignores the trade of force for distance, 144 N multiplies all three numbers, and 160,000 N inverts the distance ratio.`,
      },
      {
        question: r`A mechanic pumps the handle piston of an ideal hydraulic jack 20 times, pushing with 50 N through 0.30 m on every stroke. The jack multiplies the force by 25. How much work is done on the car in total?`,
        options: [r`15 J`, r`300 J`, r`7500 J`, r`12 J`],
        correctAnswer: 1,
        explanation: r`Each stroke puts in (50 N)(0.30 m) = 15 J, so 20 strokes put in 300 J, and an ideal jack delivers exactly that much work to the car. The value 7500 J multiplies the work by 25 and 12 J divides it by 25, but the jack multiplies force, not work. The value 15 J is a single stroke.`,
      },
      {
        question: r`A stable hand does 450 J of work pumping the handle of an ideal hydraulic hay-bale lift. The lifting ram has 20 times the area of the handle's plunger, and the bales on it weigh 9000 N. How high do the bales rise?`,
        options: [r`5 cm`, r`20 cm`, r`100 cm`, r`0.25 cm`],
        correctAnswer: 0,
        explanation: r`The work on the bales equals the work put in: (9000 N)d₂ = 450 J, so d₂ = 0.050 m = 5 cm. The area ratio does not change the work, so multiplying by 20 (100 cm) or dividing by 20 (0.25 cm) is wrong. The value 20 comes from dividing the weight by the work.`,
      },
      {
        question: r`In an ideal hydraulic rivet press, the handle plunger travels 36 times as far as the ram that squeezes the rivet. A worker pushes the handle plunger with 25 N. With what force does the ram squeeze the rivet?`,
        options: [r`25 N`, r`150 N`, r`900 N`, r`32,400 N`],
        correctAnswer: 2,
        explanation: r`Since F₁d₁ = F₂d₂, the force is multiplied by the same factor that divides the distance: F₂ = (25 N)(36) = 900 N. The value 25 N carries the force across unchanged, 150 N uses the square root of 36, and 32,400 N squares it.`,
      },
      {
        question: r`An advertisement claims that a hand-operated hydraulic press delivers 5000 N through 0.10 m when its handle piston is pushed with 100 N through 2.0 m. Is this possible?`,
        options: [
          r`Yes: the 500 J of output is allowed, as the force is multiplied`,
          r`No: a liquid can never multiply a force by as much as fifty`,
          r`Yes: the output work, 200 J, would equal the 200 J of input`,
          r`No: the output work, 500 J, would exceed the 200 J of input`,
        ],
        correctAnswer: 3,
        explanation: r`The input work is (100 N)(2.0 m) = 200 J and the claimed output work is (5000 N)(0.10 m) = 500 J. A lift trades distance for force and never creates energy, so the output cannot exceed the input. A force multiplied by 50 is fine in itself, but then the output distance could be at most 0.040 m.`,
      },
      {
        question: r`To press a bearing into place, the ram of an ideal hydraulic press must push with 4500 N through 4 mm. The operator pushes the input piston with 90 N. How far must the input piston travel?`,
        options: [r`0.4 cm`, r`20 cm`, r`50 cm`, r`0.008 cm`],
        correctAnswer: 1,
        explanation: r`The work on the bearing is (4500 N)(0.004 m) = 18 J, and the input work must match it: d₁ = (18 J)/(90 N) = 0.20 m = 20 cm. The value 0.4 cm makes the two travels equal, 0.008 cm divides by the force ratio of 50 instead of multiplying, and 50 is the force ratio itself.`,
      },
    ],
  },
  [r`Two pistons are compared by diameter or radius. How do you get the ratio of their areas?`]: {
    kind: 'calc',
    more: [
      {
        question: r`The two circular plungers of a hydraulic hand tool have diameters of 8 mm and 40 mm. How many times larger is the area of the wide plunger than the area of the narrow one?`,
        options: [r`5 times`, r`10 times`, r`25 times`, r`125 times`],
        correctAnswer: 2,
        explanation: r`The diameter ratio is 40/8 = 5, and area goes as the diameter squared, so the area ratio is 5² = 25. Answering 5 forgets to square, 10 doubles the ratio instead of squaring it, and 125 cubes it.`,
      },
      {
        question: r`The large circular piston of a hydraulic lift must have 49 times the area of the small circular piston. The small piston has a radius of 0.5 cm. What radius must the large piston have?`,
        options: [r`3.5 cm`, r`24.5 cm`, r`7.0 cm`, r`12.3 cm`],
        correctAnswer: 0,
        explanation: r`An area ratio of 49 needs a radius ratio of √49 = 7, so the radius is 7 × 0.5 cm = 3.5 cm. The value 24.5 cm multiplies the radius by 49 without taking the square root, 12.3 cm halves that, and 7.0 cm is the large piston's diameter, not its radius.`,
      },
      {
        question: r`Circular piston X has an area of 3 cm². Circular piston Y has 4 times the diameter of X. What is the area of Y?`,
        options: [r`12 cm²`, r`24 cm²`, r`192 cm²`, r`48 cm²`],
        correctAnswer: 3,
        explanation: r`Four times the diameter means 4² = 16 times the area, so Y has an area of 16 × 3 cm² = 48 cm². The value 12 cm² multiplies by 4 without squaring, 24 cm² doubles the 4 instead of squaring it, and 192 cm² cubes it.`,
      },
      {
        question: r`The small circular piston of a press has a RADIUS of 2 cm, and the large circular piston has a DIAMETER of 16 cm. How many times larger is the area of the large piston?`,
        options: [r`64 times`, r`16 times`, r`8 times`, r`4 times`],
        correctAnswer: 1,
        explanation: r`Compare like with like: the large piston's radius is 8 cm, so the radius ratio is 8/2 = 4 and the area ratio is 4² = 16. The value 64 squares 16/2 = 8, which compares a diameter with a radius. Answering 4 forgets to square, and 8 is that mixed ratio left unsquared.`,
      },
      {
        question: r`A redesign cuts the diameter of a circular piston from 6 cm to 2 cm. How does the piston's new area compare with its old area?`,
        options: [
          r`It is one ninth as large`,
          r`It is one third as large`,
          r`It is one sixth as large`,
          r`It is one eighth as large`,
        ],
        correctAnswer: 0,
        explanation: r`The diameter falls to one third, and area goes as the diameter squared, so the area falls to (1/3)² = 1/9. One third forgets to square the ratio, one sixth doubles the 3 instead of squaring it, and one eighth has no basis in a factor of 3.`,
      },
      {
        question: r`The same force is applied to two circular plungers, each sealing its own syringe of water. Plunger Q has 3 times the radius of plunger P. The push raises the pressure under P by 9.0 × 10⁴ Pa. By how much does the pressure rise under Q?`,
        options: [r`3.0 × 10⁴ Pa`, r`2.7 × 10⁵ Pa`, r`8.1 × 10⁵ Pa`, r`1.0 × 10⁴ Pa`],
        correctAnswer: 3,
        explanation: r`Three times the radius means 3² = 9 times the area, and for the same force the pressure change F/A is 9 times smaller: (9.0 × 10⁴ Pa)/9 = 1.0 × 10⁴ Pa. The value 3.0 × 10⁴ Pa divides by 3 without squaring, and 2.7 × 10⁵ Pa and 8.1 × 10⁵ Pa multiply by 3 and by 9.`,
      },
    ],
  },
  [r`A piston pushes on a tall sealed tank of liquid. How do the pressure readings at different depths change?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A tall sealed column is completely full of water. Gauges at its top, middle and bottom read 120 kPa, 135 kPa and 150 kPa. A piston in the lid is pushed until the bottom gauge reads 190 kPa. What does the middle gauge read now?`,
        options: [r`135 kPa`, r`175 kPa`, r`171 kPa`, r`190 kPa`],
        correctAnswer: 1,
        explanation: r`The bottom reading rose by 190 − 150 = 40 kPa, and every reading steps up by the same amount, so the middle gauge reads 135 + 40 = 175 kPa. The value 171 kPa scales the readings in proportion, 135 kPa leaves the middle unchanged, and 190 kPa erases the gap between the gauges.`,
      },
      {
        question: r`A sealed tank is completely full of water, and a gauge on its floor reads 130 kPa. A piston of area 0.010 m² in the lid is then pushed with an extra force of 500 N. What does the floor gauge read now?`,
        options: [r`135 kPa`, r`630 kPa`, r`180 kPa`, r`130 kPa`],
        correctAnswer: 2,
        explanation: r`The push adds ΔP = (500 N)/(0.010 m²) = 5.0 × 10⁴ Pa = 50 kPa at every depth, so the floor gauge reads 130 + 50 = 180 kPa. The value 135 kPa slips a power of ten, 630 kPa adds the force in newtons to the reading, and 130 kPa assumes the change never reaches the floor.`,
      },
      {
        question: r`In a sealed tank full of liquid, a gauge at the top reads 110 kPa and a gauge 2.0 m lower reads 130 kPa. A piston then pushes on the liquid until the top gauge reads 160 kPa. What is the difference between the two gauge readings now?`,
        options: [r`20 kPa`, r`50 kPa`, r`70 kPa`, r`29 kPa`],
        correctAnswer: 0,
        explanation: r`Both readings step up by the same 50 kPa, to 160 kPa and 180 kPa, so the gap between them stays at the ρgh value of 20 kPa. The value 50 kPa is the push itself, 70 kPa adds the push to the gap, and 29 kPa comes from scaling both readings in proportion.`,
      },
      {
        question: r`A sealed tank is completely full of oil of density 800 kg/m³. After a piston in the lid is pushed, the pressure just under the piston is 250 kPa. What is the pressure 5.0 m below the piston? Use g = 10 m/s².`,
        options: [r`250 kPa`, r`254 kPa`, r`210 kPa`, r`290 kPa`],
        correctAnswer: 3,
        explanation: r`The deeper point keeps its extra ρgh = (800 kg/m³)(10 m/s²)(5.0 m) = 4.0 × 10⁴ Pa = 40 kPa on top of the pressure under the piston: 250 + 40 = 290 kPa. Answering 250 kPa drops the depth term, 210 kPa subtracts it, and 254 kPa slips a power of ten in ρgh.`,
      },
      {
        question: r`A gauge deep in a sealed, water-filled tank reads 140 kPa. After an extra push on a piston of area 0.0050 m² in the lid, the same gauge reads 200 kPa. How large was the extra push?`,
        options: [r`0.3 N`, r`1000 N`, r`300 N`, r`700 N`],
        correctAnswer: 2,
        explanation: r`The deep gauge rose by 60 kPa, and the same rise happened under the piston, so F = ΔP × A = (6.0 × 10⁴ Pa)(0.0050 m²) = 300 N. The value 0.3 N leaves the pressure in kPa, and 1000 N and 700 N use a whole reading (200 kPa or 140 kPa) instead of the change.`,
      },
      {
        question: r`A piston presses on a sealed tank full of liquid. A gauge at the top reads 300 kPa and a gauge at mid-height reads 320 kPa. The push is then eased until the top gauge reads 260 kPa. What does the mid-height gauge read now?`,
        options: [r`320 kPa`, r`280 kPa`, r`277 kPa`, r`360 kPa`],
        correctAnswer: 1,
        explanation: r`The top reading fell by 40 kPa, and every reading steps down by the same amount, so the mid-height gauge reads 320 − 40 = 280 kPa. The value 277 kPa scales the reading in proportion, 320 kPa leaves it unchanged, and 360 kPa moves it the wrong way.`,
      },
    ],
  },
  [r`A hydraulic lift is run in reverse, with the push on the large piston. What comes out at the small piston?`]: {
    kind: 'calc',
    more: [
      {
        question: r`In a test of an ideal hydraulic damper, a force of 1200 N pushes down on the large piston, of area 150 cm². With what force does the small piston, of area 5 cm² and at the same height, push outward?`,
        options: [r`40 N`, r`240 N`, r`1200 N`, r`36,000 N`],
        correctAnswer: 0,
        explanation: r`The pressure is the same on both pistons, so less area means less force: (1200 N)(5/150) = 40 N. The value 36,000 N multiplies by the area ratio as if the push were on the small piston, 1200 N carries the force across unchanged, and 240 N divides only by the small area.`,
      },
      {
        question: r`The large piston of an ideal hydraulic system, of area 90 cm², is pushed down 0.4 cm. How far does the small piston, of area 3 cm², move out?`,
        options: [r`0.4 cm`, r`0.013 cm`, r`108 cm`, r`12 cm`],
        correctAnswer: 3,
        explanation: r`Run in reverse, the small piston moves the longer way: d = (0.4 cm)(90/3) = 12 cm, so the same volume of liquid is moved on each side. The value 0.013 cm divides by the area ratio, 0.4 cm makes the travels equal, and 108 cm multiplies 0.4 cm by both areas.`,
      },
      {
        question: r`An ideal hydraulic system is run in reverse: its large piston, which has 15 times the area of its small piston, is pushed down at a steady 2 mm/s. How fast does the small piston move out?`,
        options: [r`2 mm/s`, r`30 mm/s`, r`0.13 mm/s`, r`450 mm/s`],
        correctAnswer: 1,
        explanation: r`In every second the small piston must sweep out the same volume as the large one, so it moves 15 times as far in that second: 15 × 2 mm/s = 30 mm/s. The value 0.13 mm/s divides by the ratio, 2 mm/s makes the travels equal, and 450 mm/s squares the ratio.`,
      },
      {
        question: r`An ideal hydraulic system has a large piston of area 160 cm² and a small piston of area 10 cm². The LARGE piston is pushed down 0.5 cm with a force of 800 N. What force comes out at the small piston, and how much work does it deliver?`,
        options: [
          r`50 N of force and 0.25 J of work`,
          r`12,800 N of force and 4 J of work`,
          r`50 N of force and 4 J of work`,
          r`12,800 N of force and 64 J of work`,
        ],
        correctAnswer: 2,
        explanation: r`The small piston has 1/16 of the area, so it pushes with (800 N)/16 = 50 N while moving 16 × 0.5 cm = 8 cm. The work matches on both sides: (800 N)(0.005 m) = 4 J and (50 N)(0.08 m) = 4 J. A force of 12,800 N multiplies instead of dividing, and 0.25 J or 64 J changes the work, which a lift never does.`,
      },
      {
        question: r`The large circular piston of an ideal hydraulic system has 5 times the diameter of the small circular piston. A 500 N force pushes on the LARGE piston. With what force does the small piston push out?`,
        options: [r`20 N`, r`100 N`, r`2500 N`, r`12,500 N`],
        correctAnswer: 0,
        explanation: r`Five times the diameter is 5² = 25 times the area, and in reverse the force is divided by that ratio: (500 N)/25 = 20 N. The value 100 N divides by 5 without squaring, and 2500 N and 12,500 N multiply the force as if the push were on the small piston.`,
      },
      {
        question: r`A stage prop uses an ideal hydraulic system in reverse so that its small piston, of area 2 cm², extends by 60 cm. The large piston has an area of 80 cm². How far must the large piston be pushed in?`,
        options: [r`2400 cm`, r`60 cm`, r`0.67 cm`, r`1.5 cm`],
        correctAnswer: 3,
        explanation: r`The volumes match: (80 cm²)d = (2 cm²)(60 cm) = 120 cm³, so d = 1.5 cm. The large piston moves the shorter way. The value 2400 cm multiplies by the area ratio of 40, 60 cm makes the travels equal, and 0.67 cm divides the ratio by the distance.`,
      },
    ],
  },
  [r`Name three everyday devices that rely on Pascal's principle.`]: {
    kind: 'concept',
    more: [
      {
        question: r`Three of these devices work because a push on an enclosed liquid reaches every part of that liquid. Which one does NOT work that way?`,
        options: [
          r`Hydraulic brakes, where a pedal's push on fluid squeezes the wheels`,
          r`A syringe, where a push on the plunger pressurizes all the liquid`,
          r`A car jack, where a pump stroke on oil raises the weight of a car`,
          r`A pair of pliers, where long handles turn a squeeze into a hard grip`,
        ],
        correctAnswer: 3,
        explanation: r`Pliers are levers: they multiply force with solid arms turning about a pivot, and no fluid is involved. Hydraulic brakes, a syringe and a car jack all rely on Pascal's principle, since a push on an enclosed liquid is passed to every part of it.`,
      },
      {
        question: r`A driver presses the brake pedal, which pushes a piston into sealed brake fluid joined by lines to all four wheels. Which statement describes how the push reaches the brakes?`,
        options: [
          r`The pedal force is split, so each wheel receives one quarter of it`,
          r`The pressure rise reaches every part of the fluid at full strength`,
          r`The pressure rise fades along the lines, so far wheels brake least`,
          r`The fluid is squeezed smaller, storing the push before passing it on`,
        ],
        correctAnswer: 1,
        explanation: r`Hydraulic brakes rely on Pascal's principle: a pressure change in an enclosed liquid is transmitted undiminished to every part of it, so each wheel's piston feels the same pressure rise. The pressure does not fade with distance, the liquid passes on pressure instead of dividing up the force, and a liquid is not squeezed into a smaller volume.`,
      },
    ],
  },
  [r`What do you find first in a hydraulic lift problem?`]: {
    kind: 'calc',
    more: [
      {
        question: r`The handle of a hydraulic cider press drives a piston of area 4.0 × 10⁻⁴ m² with a force of 60 N. The pressing plate sits on a piston of area 0.030 m². Which line gives the liquid's pressure P and the force F₂ on the plate's piston?`,
        options: [
          r`P = 0.024 Pa, so F₂ = 60 N`,
          r`P = 1.5 × 10⁵ Pa, so F₂ = 60 N`,
          r`P = 1.5 × 10⁵ Pa, so F₂ = 4500 N`,
          r`P = 0.024 Pa, so F₂ = 4500 N`,
        ],
        correctAnswer: 2,
        explanation: r`First find the pressure: P = F₁/A₁ = (60 N)/(4.0 × 10⁻⁴ m²) = 1.5 × 10⁵ Pa. The same pressure acts on the output piston, so F₂ = PA₂ = (1.5 × 10⁵ Pa)(0.030 m²) = 4500 N. A pressure of 0.024 Pa multiplies force by area, and F₂ = 60 N carries the force across unchanged.`,
      },
      {
        question: r`A thumb presses with 36 N on the input piston, of area 1.2 cm², of a small hydraulic crimping tool. As the first step of the problem, what pressure does this push create in the oil? (1 cm² = 10⁻⁴ m²)`,
        options: [r`3.0 × 10⁵ Pa`, r`3.0 × 10¹ Pa`, r`4.3 × 10⁻³ Pa`, r`3.0 × 10³ Pa`],
        correctAnswer: 0,
        explanation: r`P = F₁/A₁ = (36 N)/(1.2 × 10⁻⁴ m²) = 3.0 × 10⁵ Pa. The value 3.0 × 10¹ leaves the area in cm², 3.0 × 10³ Pa converts it as 1.2 × 10⁻² m², and 4.3 × 10⁻³ multiplies the force by the area instead of dividing.`,
      },
      {
        question: r`The output piston of a hydraulic lift, of area 0.050 m², holds a 6000 N load at rest. The input piston, at the same height, has an area of 2.0 × 10⁻⁴ m². Which line gives the oil's pressure P and the force F₁ on the input piston?`,
        options: [
          r`P = 1.2 × 10⁵ Pa, so F₁ = 6000 N`,
          r`P = 3.0 × 10⁷ Pa, so F₁ = 6000 N`,
          r`P = 3.0 × 10² Pa, so F₁ = 0.06 N`,
          r`P = 1.2 × 10⁵ Pa, so F₁ = 24 N`,
        ],
        correctAnswer: 3,
        explanation: r`Here the known force is the load, so find the pressure from it: P = (6000 N)/(0.050 m²) = 1.2 × 10⁵ Pa. The same pressure acts on the input piston, so F₁ = (1.2 × 10⁵ Pa)(2.0 × 10⁻⁴ m²) = 24 N. A pressure of 3.0 × 10⁷ Pa divides the load by the wrong area, 3.0 × 10² Pa multiplies force by area, and F₁ = 6000 N carries the force across.`,
      },
      {
        question: r`A foot pump presses with 45 N on a plunger of area 3 cm², and the oil it pressurizes lifts a ram of area 90 cm². Which is the correct first line of a solution for the force on the ram? (1 cm² = 10⁻⁴ m²)`,
        options: [
          r`P = (45 N)/(90 × 10⁻⁴ m²) = 5.0 × 10³ Pa`,
          r`P = (45 N)/(3 × 10⁻⁴ m²) = 1.5 × 10⁵ Pa`,
          r`P = (45 N)(3 × 10⁻⁴ m²) = 1.35 × 10⁻² Pa`,
          r`P = (45 N)/(3 × 10⁻² m²) = 1.5 × 10³ Pa`,
        ],
        correctAnswer: 1,
        explanation: r`The first step is the pressure made by the input force on the input area: P = F₁/A₁ = (45 N)/(3 × 10⁻⁴ m²) = 1.5 × 10⁵ Pa. Dividing by 90 × 10⁻⁴ m² pairs the input force with the ram's area. Multiplying force by area does not give a pressure, and 3 × 10⁻² m² is a wrong conversion of 3 cm².`,
      },
      {
        question: r`A 50 N push acts on the input piston, of area 2.5 × 10⁻⁴ m², of a hydraulic press that must deliver 8000 N. Which line gives the oil's pressure P and the output piston area A₂ that is needed?`,
        options: [
          r`P = 2.0 × 10⁵ Pa, so A₂ = 0.040 m²`,
          r`P = 2.0 × 10⁵ Pa, so A₂ = 25 m²`,
          r`P = 0.0125 Pa, so A₂ = 100 m²`,
          r`P = 0.0125 Pa, so A₂ = 0.040 m²`,
        ],
        correctAnswer: 0,
        explanation: r`First P = F₁/A₁ = (50 N)/(2.5 × 10⁻⁴ m²) = 2.0 × 10⁵ Pa, then the output area follows from F₂ = PA₂: A₂ = (8000 N)/(2.0 × 10⁵ Pa) = 0.040 m². A pressure of 0.0125 Pa multiplies force by area, and an area of 25 m² divides the pressure by the force.`,
      },
      {
        question: r`A hydraulic lift has an input piston of area 1.0 × 10⁻⁴ m² and an output piston of area 5.0 × 10⁻³ m². The push on the input piston is raised from 20 N to 60 N. Which line gives the new pressure P and the new output force F₂?`,
        options: [
          r`P = 2.0 × 10⁵ Pa, so F₂ = 3000 N`,
          r`P = 6.0 × 10⁵ Pa, so F₂ = 1000 N`,
          r`P = 6.0 × 10⁵ Pa, so F₂ = 3000 N`,
          r`P = 6.0 × 10⁵ Pa, so F₂ = 60 N`,
        ],
        correctAnswer: 2,
        explanation: r`With the new push, P = (60 N)/(1.0 × 10⁻⁴ m²) = 6.0 × 10⁵ Pa, and F₂ = PA₂ = (6.0 × 10⁵ Pa)(5.0 × 10⁻³ m²) = 3000 N. A pressure of 2.0 × 10⁵ Pa and a force of 1000 N are the values for the old 20 N push. A force of 60 N carries the input force across unchanged.`,
      },
    ],
  },
  [r`What is the common trap when finding the output force of a hydraulic lift?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A student writes four lines about an ideal hydraulic lift whose output piston has 10 times the area of its input piston, with both pistons at the same height. Which line contains an error?`,
        options: [
          r`The pressure under the output piston equals that under the input`,
          r`The force on the output piston equals the force on the input one`,
          r`The force on the output piston is 10 times the force on the input`,
          r`The output piston moves one tenth as far as the input piston does`,
        ],
        correctAnswer: 1,
        explanation: r`The liquid shares its pressure, not its force, so the force on the output piston is the input force times the area ratio of 10, not equal to it. Equal pressures, a force 10 times larger and a travel one tenth as long are all correct for this lift.`,
      },
      {
        question: r`A 30 N force pushes on the 5 cm² input piston of a hydraulic lift whose output piston has an area of 200 cm². A student answers that the output force is 30 N. Which mistake did the student make?`,
        options: [
          r`Squared the area ratio, as if the two areas were diameters`,
          r`Divided the force by the area ratio in place of multiplying`,
          r`Left both areas in cm² when they had to be converted to m²`,
          r`Carried the force across unchanged in place of the pressure`,
        ],
        correctAnswer: 3,
        explanation: r`An answer equal to the input force means the force was carried across unchanged. The pressure is what is shared, so the output force is (30 N)(200/5) = 1200 N. Dividing by the ratio would give 0.75 N and squaring it would give 48,000 N. Leaving both areas in cm² does no harm, because only their ratio matters.`,
      },
    ],
  },
  [r`How far must a hydraulic lift's input piston move to raise the load a distance $d_2$?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A hydraulic tailgate has an input piston of area 4 cm² and an output piston of area 240 cm². Through what total distance must the input piston be pumped to raise the tailgate's piston by 1.5 cm?`,
        options: [r`60 cm`, r`1.5 cm`, r`90 cm`, r`0.025 cm`],
        correctAnswer: 2,
        explanation: r`d₁ = d₂ × A₂/A₁ = (1.5 cm)(240/4) = (1.5 cm)(60) = 90 cm. The value 0.025 cm divides by the area ratio, which is the trap, 1.5 cm makes the travels equal, and 60 is only the area ratio.`,
      },
      {
        question: r`The output piston of a garage lift has 50 times the area of its input piston. Over many pump strokes, a car is raised by 0.30 m. What total distance does the input piston travel?`,
        options: [r`15 m`, r`0.006 m`, r`0.30 m`, r`750 m`],
        correctAnswer: 0,
        explanation: r`The input piston travels the area ratio times as far as the load: (0.30 m)(50) = 15 m in total. The value 0.006 m divides by the ratio, 0.30 m makes the two travels equal, and 750 m squares the ratio, which applies only to a ratio of diameters.`,
      },
      {
        question: r`To raise a pallet by 3 cm, the handle plunger of an ideal pallet jack must be pumped through 2.4 m in total. How does the area of the lifting ram compare with the area of the handle plunger?`,
        options: [
          r`It is 8 times the plunger's area`,
          r`It is 1/80 of the plunger's area`,
          r`It is 720 times the plunger's area`,
          r`It is 80 times the plunger's area`,
        ],
        correctAnswer: 3,
        explanation: r`Since d₁ = d₂ × A₂/A₁, the area ratio is d₁/d₂ = (240 cm)/(3 cm) = 80. An answer of 8 slips the conversion of 2.4 m to cm, 1/80 inverts the ratio, and 720 multiplies the two distances instead of dividing them.`,
      },
      {
        question: r`A hydraulic stump puller has two round rams joined by oil: the one the worker pumps has a radius of 1 cm, and the one that pulls on the stump has a radius of 5 cm. Through what total distance must the worker's ram be pumped to make the pulling ram advance 2 cm?`,
        options: [r`10 cm`, r`50 cm`, r`0.08 cm`, r`250 cm`],
        correctAnswer: 1,
        explanation: r`A radius ratio of 5 gives an area ratio of 5² = 25, so d₁ = (2 cm)(25) = 50 cm. The value 10 cm uses the radius ratio without squaring it, 0.08 cm divides by the area ratio, and 250 cm cubes the radius ratio.`,
      },
      {
        question: r`A microscope stage rests on a tiny water-filled ram of area 25 cm², driven by a thumb plunger of area 0.5 cm². How far must the thumb plunger be pressed in to raise the stage by 3 mm?`,
        options: [r`150 cm`, r`0.006 cm`, r`15 cm`, r`1.5 cm`],
        correctAnswer: 2,
        explanation: r`The area ratio is 25/0.5 = 50, so d₁ = (3 mm)(50) = 150 mm = 15 cm. The value 150 cm treats the millimeters as centimeters, 1.5 cm slips the conversion the other way, and 0.006 cm divides by the area ratio instead of multiplying.`,
      },
      {
        question: r`With its original output piston, a hydraulic lift needs 40 cm of input travel to raise its load by 1 cm. The output piston is replaced by one with twice the area, and the input piston is unchanged. How much input travel now raises the load by 1 cm?`,
        options: [r`80 cm`, r`20 cm`, r`40 cm`, r`160 cm`],
        correctAnswer: 0,
        explanation: r`d₁ = d₂ × A₂/A₁, so doubling A₂ doubles the area ratio from 40 to 80 and the input travel becomes 80 cm. The value 20 cm scales the wrong way, 40 cm ignores the change, and 160 cm squares the factor of 2, which applies only to a doubled diameter.`,
      },
    ],
  },
  [r`How do you check the answers to a hydraulic lift problem?`]: {
    kind: 'calc',
    more: [
      {
        question: r`For an ideal hydraulic lift, a student is given an input force of 80 N pushed through 0.50 m, and calculates an output force of 2000 N and an output distance of 0.020 m. What does a check of the work on each side show?`,
        options: [
          r`40 J in and 400 J out, so a force or a distance is wrong`,
          r`40 J in and 40 J out, so both of the answers pass the check`,
          r`40 J in and 4 J out, so a force or a distance must be wrong`,
          r`40 J in and 1000 J out, as a force multiplier ought to give`,
        ],
        correctAnswer: 1,
        explanation: r`The input work is (80 N)(0.50 m) = 40 J and the output work is (2000 N)(0.020 m) = 40 J. The two sides agree, so the answers pass. The 400 J and 4 J values slip a power of ten in the output work, and a lift never puts out more work than is put in.`,
      },
      {
        question: r`In an ideal hydraulic lift, a 60 N input force moves through 0.40 m, and the output force is 1200 N. Which output distance passes the work check?`,
        options: [r`8.0 m`, r`0.40 m`, r`0.20 m`, r`0.020 m`],
        correctAnswer: 3,
        explanation: r`The input work is (60 N)(0.40 m) = 24 J, so the output distance must be (24 J)/(1200 N) = 0.020 m. A distance of 8.0 m multiplies by the force ratio of 20 instead of dividing and would give 9600 J out. Distances of 0.40 m and 0.20 m would give 480 J and 240 J, both more than was put in.`,
      },
      {
        question: r`An ideal lift has pistons of area 5 cm² and 100 cm². A 30 N force pushes the small piston through 40 cm. A student finds an output force of 600 N and an output distance of 800 cm, so the work check gives 12 J in and 4800 J out. Which answer is wrong?`,
        options: [
          r`The distance: it should be 2 cm, giving 12 J out`,
          r`The distance: it should be 40 cm, giving 240 J out`,
          r`The force: it should be 30 N, giving 240 J out`,
          r`The force: it should be 1.5 N, giving 12 J out`,
        ],
        correctAnswer: 0,
        explanation: r`The area ratio is 20, so the force is multiplied to (30 N)(20) = 600 N, which is right, and the distance is divided to (40 cm)/20 = 2 cm. Then (600 N)(0.02 m) = 12 J matches the input. The student multiplied the distance by 20. A force of 1.5 N or 30 N does not follow from equal pressures on the two pistons.`,
      },
      {
        question: r`In a solution for an ideal hydraulic lift, the input piston is pushed with 25 N through 1.2 m and the output piston rises 0.010 m. What output force passes the work check?`,
        options: [r`25 N`, r`300 N`, r`3000 N`, r`0.30 N`],
        correctAnswer: 2,
        explanation: r`The input work is (25 N)(1.2 m) = 30 J, so F₂ = (30 J)/(0.010 m) = 3000 N. A force of 25 N would give only 0.25 J out, 300 N slips a power of ten, and 0.30 N multiplies the input work by the output distance.`,
      },
      {
        question: r`A student's answers for an ideal hydraulic lift are: input force 20 N through 90 cm, output force 600 N through 3 cm. What does the work check show, in joules?`,
        options: [
          r`18 J in and 1800 J out, so a force or a distance is wrong`,
          r`18 J in and 180 J out, so a force or a distance is wrong`,
          r`1800 J in and 18 J out, so a force or a distance is wrong`,
          r`18 J in and 18 J out, so the two answers pass the check`,
        ],
        correctAnswer: 3,
        explanation: r`In SI units, the input work is (20 N)(0.90 m) = 18 J and the output work is (600 N)(0.03 m) = 18 J, so the answers pass. The 1800 J values come from leaving one distance in centimeters, and 180 J slips a power of ten in converting 3 cm.`,
      },
      {
        question: r`The input piston of an ideal hydraulic lift is pushed with 100 N through 0.30 m. Four students report the output force and the output distance. Which pair passes the work check?`,
        options: [
          r`3000 N through 0.10 m`,
          r`3000 N through 0.010 m`,
          r`300 N through 0.010 m`,
          r`1500 N through 0.20 m`,
        ],
        correctAnswer: 1,
        explanation: r`The input work is (100 N)(0.30 m) = 30 J, and only (3000 N)(0.010 m) = 30 J matches it. The pair 3000 N through 0.10 m gives 300 J, 1500 N through 0.20 m also gives 300 J, and 300 N through 0.010 m gives just 3 J.`,
      },
    ],
  },
  [r`A hydraulic jack's load is given as a mass. What must you do before using the area ratio?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 1200 kg car is parked on the platform of a garage hoist. The oil under the platform's ram, of area 0.30 m², is pressurized by a pedal plunger of area 0.0030 m² at the same height, and g = 10 m/s². What push on the pedal plunger keeps the car from sinking?`,
        options: [r`12 N`, r`12,000 N`, r`120 N`, r`1,200,000 N`],
        correctAnswer: 2,
        explanation: r`First turn the mass into a weight: W = mg = (1200 kg)(10 m/s²) = 12,000 N. The area ratio is 0.30/0.0030 = 100, so F₁ = (12,000 N)/100 = 120 N. The value 12 N divides the mass in kilograms by the ratio, 12,000 N is the weight itself, and 1,200,000 N multiplies by the ratio.`,
      },
      {
        question: r`The output piston of an ideal hydraulic jack has 40 times the area of its input piston. A worker can push the input piston with 50 N. What is the largest mass the jack can hold up? Use g = 10 m/s².`,
        options: [r`200 kg`, r`2000 kg`, r`20,000 kg`, r`0.125 kg`],
        correctAnswer: 0,
        explanation: r`The output force is (50 N)(40) = 2000 N, and this is a weight, so the mass is m = W/g = (2000 N)/(10 m/s²) = 200 kg. Answering 2000 kg reads the newtons as kilograms, 20,000 kg multiplies by g instead of dividing, and 0.125 kg divides the push by the ratio.`,
      },
      {
        question: r`A 60 kg patient sits in a 40 kg dental chair that rests on a hydraulic piston of area 0.020 m². With g = 10 m/s², what pressure must the oil under the piston supply to hold them up?`,
        options: [r`5.0 × 10³ Pa`, r`5.0 × 10⁴ Pa`, r`3.0 × 10⁴ Pa`, r`2.0 × 10¹ Pa`],
        correctAnswer: 1,
        explanation: r`The total mass is 100 kg, so the weight is (100 kg)(10 m/s²) = 1000 N, and P = (1000 N)/(0.020 m²) = 5.0 × 10⁴ Pa. The value 5.0 × 10³ uses the mass in kilograms as if it were a force, 3.0 × 10⁴ Pa leaves out the chair, and 2.0 × 10¹ multiplies the weight by the area.`,
      },
      {
        question: r`In a classroom demonstration, a 500 g mass rests on the small piston, of area 2 cm², of an ideal hydraulic lift. The large piston, at the same height, has an area of 40 cm². What upward force does the oil exert on the large piston? Use g = 10 m/s².`,
        options: [r`10 N`, r`10,000 N`, r`0.25 N`, r`100 N`],
        correctAnswer: 3,
        explanation: r`The mass is 0.50 kg, so its weight is (0.50 kg)(10 m/s²) = 5 N, and the output force is (5 N)(40/2) = 100 N. The value 10 N multiplies the mass in kilograms by the ratio, 10,000 N does the same with the mass in grams, and 0.25 N divides the weight by the ratio.`,
      },
      {
        question: r`An ideal hydraulic jack raises a 300 kg motorcycle by 0.20 m. How much work is done on the motorcycle? Use g = 10 m/s².`,
        options: [r`60 J`, r`3000 J`, r`600 J`, r`15,000 J`],
        correctAnswer: 2,
        explanation: r`The force in the work equation must be the weight in newtons: W = mg = (300 kg)(10 m/s²) = 3000 N, so the work is (3000 N)(0.20 m) = 600 J. The value 60 J uses the mass in place of the weight, 3000 is the weight itself, and 15,000 J divides the weight by the distance.`,
      },
      {
        question: r`A 500 kg crate sits on a 100 kg platform carried by the output piston of an ideal hydraulic lift. The output piston has 75 times the area of the input piston, and g = 10 m/s². What force on the input piston holds the crate and platform steady?`,
        options: [r`80 N`, r`8 N`, r`67 N`, r`6000 N`],
        correctAnswer: 0,
        explanation: r`The output piston carries 600 kg in total, a weight of (600 kg)(10 m/s²) = 6000 N, so F₁ = (6000 N)/75 = 80 N. The value 8 N divides the mass in kilograms by the ratio, 67 N leaves out the platform, and 6000 N is the weight carried across unchanged.`,
      },
    ],
  },
  [r`A lift's output piston has $n$ times the diameter of its input piston. What input force holds up a load $F_2$?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A mechanic changes an aircraft wheel with a bottle jack whose round lifting ram has 5 times the diameter of the round plunger she pumps. The ram must support 7500 N. What steady push on the plunger does that take?`,
        options: [r`1500 N`, r`300 N`, r`750 N`, r`37,500 N`],
        correctAnswer: 1,
        explanation: r`Five times the diameter gives 5² = 25 times the area, so F₁ = (7500 N)/25 = 300 N. The value 1500 N divides by 5 without squaring, 750 N divides by twice 5, and 37,500 N multiplies by 5 instead of dividing by 25.`,
      },
      {
        question: r`A forester's log lifter uses oil between a round handle plunger and a round lifting ram with 6 times the plunger's diameter. The forester can hold the plunger with 40 N. What is the heaviest log, by weight, that the ram can support?`,
        options: [r`240 N`, r`480 N`, r`6.7 N`, r`1440 N`],
        correctAnswer: 3,
        explanation: r`Rearranging F₁ = F₂/n² gives F₂ = F₁n² = (40 N)(6²) = (40 N)(36) = 1440 N. The value 240 N multiplies by 6 without squaring, 480 N doubles the 6 instead of squaring it, and 6.7 N divides by 6.`,
      },
      {
        question: r`A jeweler's clamp is tightened by oil between two round plungers: a thumb plunger 8 mm across and a jaw plunger 4 cm across. The jaw plunger must grip with 500 N. What push on the thumb plunger does this need?`,
        options: [r`20 N`, r`100 N`, r`125 N`, r`2000 N`],
        correctAnswer: 0,
        explanation: r`In matching units the diameters are 8 mm and 40 mm, so n = 5, the area ratio is 25 and F₁ = (500 N)/25 = 20 N. The value 100 N divides by 5 without squaring. The values 125 N and 2000 N come from using 4/8 = 0.5 as the diameter ratio without converting units.`,
      },
      {
        question: r`A 30 N squeeze on a round hand plunger, 1 cm across, must support a 2430 N engine block resting on a round ram, with oil joining the two at the same height. How wide across must the ram be?`,
        options: [r`81 cm`, r`3 cm`, r`9 cm`, r`40.5 cm`],
        correctAnswer: 2,
        explanation: r`The force ratio is 2430/30 = 81, and this equals n², so the diameter ratio is n = √81 = 9 and the ram is 9 cm across. The value 81 cm uses the area ratio as the diameter ratio, 40.5 cm halves it, and 3 cm takes the square root twice.`,
      },
      {
        question: r`A bottle jack needs a 90 N push on its plunger to support a trailer. The jack's round lifting ram is swapped for one with 3 times the diameter, and the plunger is kept. What push on the plunger supports the same trailer now?`,
        options: [r`30 N`, r`270 N`, r`810 N`, r`10 N`],
        correctAnswer: 3,
        explanation: r`Tripling the ram's diameter multiplies its area, and so the area ratio, by 3² = 9. The push needed falls to (90 N)/9 = 10 N. The value 30 N divides by 3 without squaring, and 270 N and 810 N multiply by 3 and by 9.`,
      },
      {
        question: r`In a furniture-moving dolly, oil joins a round lifting ram with a RADIUS of 6 cm to a round foot plunger with a DIAMETER of 3 cm. A 2400 N cabinet rests on the ram. What push on the foot plunger supports it?`,
        options: [r`600 N`, r`150 N`, r`1200 N`, r`38,400 N`],
        correctAnswer: 1,
        explanation: r`Compare like with like: the ram's diameter is 12 cm, so n = 12/3 = 4 and F₁ = (2400 N)/4² = 150 N. The value 600 N uses 6/3 = 2 as the ratio, mixing a radius with a diameter. The value 1200 N divides by 2 without squaring, and 38,400 N multiplies by 16.`,
      },
    ],
  },
  [r`Which piston of a hydraulic lift moves the shorter distance?`]: {
    kind: 'calc',
    more: [
      {
        question: r`The large piston of a hydraulic engine hoist has 25 times the area of the small piston. In one stroke the small piston is pushed down 50 cm. How far does the large piston move in that stroke?`,
        options: [r`1250 cm`, r`50 cm`, r`2 cm`, r`0.5 cm`],
        correctAnswer: 2,
        explanation: r`The large piston moves the shorter distance: d₂ = d₁ × A₁/A₂ = (50 cm)/25 = 2 cm. The value 1250 cm multiplies by the area ratio, 50 cm makes the travels equal, and 0.5 cm divides the ratio by the distance.`,
      },
      {
        question: r`A hand-pumped hydraulic jack has a small piston of area 2 cm² and a large piston of area 120 cm². Each pump stroke pushes the small piston down 12 cm, and the pump refills between strokes. How far has the large piston risen after 15 strokes?`,
        options: [r`3 cm`, r`0.2 cm`, r`180 cm`, r`10,800 cm`],
        correctAnswer: 0,
        explanation: r`Each stroke raises the large piston by d₂ = (12 cm)(2/120) = 0.2 cm, so 15 strokes raise it 15 × 0.2 cm = 3 cm. The value 0.2 cm is a single stroke, 180 cm makes the large piston move as far as the small one, and 10,800 cm multiplies by the area ratio.`,
      },
      {
        question: r`The large circular piston of a hydraulic press has 2 times the diameter of the small circular piston. The small piston is pushed in 30 cm. How far does the large piston move?`,
        options: [r`15 cm`, r`7.5 cm`, r`60 cm`, r`120 cm`],
        correctAnswer: 1,
        explanation: r`Twice the diameter is 2² = 4 times the area, so the large piston moves d₂ = (30 cm)/4 = 7.5 cm. The value 15 cm divides by 2 without squaring, and 60 cm and 120 cm multiply instead of dividing, which would make the large piston travel farther.`,
      },
      {
        question: r`Piston P, of area 8 cm², and piston Q, of area 200 cm², close the two ends of an oil-filled hydraulic lift. When one piston is pushed in, which piston moves the shorter distance, and how do the two distances compare?`,
        options: [
          r`P, which moves 1/25 as far as Q`,
          r`P, which moves 1/5 as far as Q`,
          r`Q, which moves 1/5 as far as P`,
          r`Q, which moves 1/25 as far as P`,
        ],
        correctAnswer: 3,
        explanation: r`The same volume of oil moves at both ends, so the piston with the larger area, Q, moves the shorter distance, by the area ratio 200/8 = 25. The options naming P give the short travel to the small piston. A factor of 1/5 takes the square root of the ratio, which is not needed when areas are given.`,
      },
      {
        question: r`A hydraulic press has a small piston of area 1.5 cm² and a large piston of area 300 cm². The small piston is pushed in 0.60 m. How far does the large piston move?`,
        options: [r`3 mm`, r`30 mm`, r`0.3 mm`, r`600 mm`],
        correctAnswer: 0,
        explanation: r`The area ratio is 300/1.5 = 200, so d₂ = (0.60 m)/200 = 0.0030 m = 3 mm. The values 30 mm and 0.3 mm come from a power-of-ten slip in the ratio or in the conversion, and 600 mm makes the large piston move as far as the small one.`,
      },
      {
        question: r`Each stroke of a hydraulic jack's small piston raises the large piston by 4 mm. The small piston is replaced by one with half the area and is pushed just as far on each stroke. The large piston is unchanged. How far does the large piston rise per stroke now?`,
        options: [r`8 mm`, r`4 mm`, r`2 mm`, r`1 mm`],
        correctAnswer: 2,
        explanation: r`d₂ = d₁ × A₁/A₂, so halving A₁ halves the volume moved per stroke and the rise falls to 2 mm. The value 8 mm scales the wrong way, 4 mm ignores the change, and 1 mm squares the factor of 2, which applies only to a halved diameter.`,
      },
    ],
  },
}
