/**
 * Fluids Part 2: the extra conceptual questions for each CONCEPT video
 * (videos 1, 3, 5, 7). Together with the shot list's three checkpoints they
 * give every concept video at least three questions spread over its sections
 * and three on its "Remember" section; fluids2-lesson.ts says which goes
 * where. Each one uses a new situation, so none repeats a shot-list
 * checkpoint, a worked example or an exit-quiz item. See
 * circuits1-recap-questions.ts for the rules.
 */
import type { CheckpointQuestion } from '../../src/lib/video-lesson-core'

export const RECAP: Record<number, CheckpointQuestion[]> = {
  // 1 · Archimedes' Principle
  1: [
    {
      // on 02-pressure-difference
      question: 'A sealed box is held under water. The water pushes on its top, its bottom and all four of its sides. Which of these pushes combine to give the buoyant force?',
      options: [
        'The side pushes, which squeeze the box upward',
        'The top and bottom pushes, which are unequal',
        'The bottom push alone, since it points upward',
        'All six pushes, which add to a net inward one',
      ],
      correctAnswer: 1,
      explanation:
        'The side faces sit at matching depths, so their pushes are equal and opposite, and they cancel. The bottom face is deeper than the top face, so the push up on the bottom is larger than the push down on the top, and the difference is the buoyant force. The bottom push alone is too large: the push down on the top still has to be subtracted.',
    },
    {
      // on 04-archimedes
      question: 'A stone is lowered into a bucket that is full to the brim until the stone is completely under water, and 0.30 kg of water spills over the rim. What is the buoyant force on the stone? (g = 10 m/s²)',
      options: ['0.030 N', '0.30 N', '3.0 N', '30 N'],
      correctAnswer: 2,
      explanation:
        'The buoyant force equals the weight of the displaced water, and the water that spilled is exactly the water the stone pushed aside: (0.30 kg)(10 m/s²) = 3.0 N. 0.30 N reports the mass as if it were a force, 0.030 N divides by g instead of multiplying, and 30 N slips a power of ten. The stone’s own weight is not needed.',
    },
    {
      // Remember
      question: 'A solid rubber ball and a hollow steel ball have the same outer size. Both are held fully under water. Which ball feels the larger buoyant force?',
      options: [
        'The steel ball, since steel is the denser material',
        'The rubber ball, since the lighter ball is lifted more',
        'The steel ball, since the air inside adds extra lift',
        'Neither, since they push aside equal volumes of water',
      ],
      correctAnswer: 3,
      explanation:
        'F_b = ρVg uses the fluid’s density and the submerged volume. Both balls are the same size and fully under, so they displace the same volume of water and feel the same buoyant force. What each ball is made of, what it weighs and what is inside it decide whether it then rises or sinks, not how hard the water pushes up.',
    },
    {
      // Remember
      question: 'A solid block is held fully submerged in a tank of liquid. Which single change would double the buoyant force on it?',
      options: [
        'Holding it at twice the depth below the surface',
        'Using an equal-sized block that is twice as heavy',
        'Using a liquid of twice the density in the tank',
        'Turning it so that a larger face points upward',
      ],
      correctAnswer: 2,
      explanation:
        'F_b = ρVg, with the fluid’s density and the submerged volume, so doubling the liquid’s density doubles the force. Depth does not matter once the block is fully under, the block’s own weight never enters the formula, and turning the block changes neither its volume nor the liquid.',
    },
  ],
  // 3 · Floating
  3: [
    {
      // on 06-melting-ice
      question: 'A glass is filled to the very brim with water, with an ice cube floating in it and standing above the rim. What happens as the ice cube melts?',
      options: [
        'Water spills over, since the part above the rim is added',
        'The level drops, since ice takes up more room than water',
        'The level stays at the brim, and no water spills at all',
        'Water spills over, since meltwater is denser than the ice',
      ],
      correctAnswer: 2,
      explanation:
        'While it floats, the ice displaces its own weight of water. When it melts it becomes exactly that weight of water, which exactly fills the space the ice was displacing below the surface, so the level stays at the brim. The part above the rim is not extra water: it is there because ice takes up more room than the water it turns into.',
    },
    {
      // on 07-specific-gravity
      question: 'The same hydrometer is floated in two urine samples. In sample X it floats higher, with more of its stem above the surface, than in sample Y. What does this show about sample X?',
      options: [
        'X has the higher specific gravity and is more concentrated',
        'X has the lower specific gravity and is more concentrated',
        'X has the higher specific gravity and is more dilute',
        'X has the lower specific gravity and is more dilute',
      ],
      correctAnswer: 0,
      explanation:
        'A hydrometer has a fixed weight, so it always displaces the same weight of liquid. A denser liquid supplies that with less submerged volume, so the hydrometer rides higher: the higher it floats, the higher the specific gravity. A higher urine specific gravity means more dissolved solute, so sample X is the more concentrated one, as in dehydration.',
    },
    {
      // Remember
      question: 'A lump of modeling clay sinks in a pond. Pressed into the shape of a bowl, the same lump floats. Why does the bowl float?',
      options: [
        'The clay itself became less dense when it was reshaped',
        'The bowl plus the air in it has a lower average density',
        'The bowl shape spreads the clay’s weight over more water',
        'The bowl traps air, and the air pushes it up from inside',
      ],
      correctAnswer: 1,
      explanation:
        'Reshaping changes neither the clay’s mass nor its own density. The bowl encloses air, so the whole object, clay plus air space, takes up far more volume for the same mass: its average density drops below water’s and it floats, just as a steel hull does. Spreading the weight out does not help, since a flat sheet of clay still sinks.',
    },
    {
      // Remember
      question: 'A loaded cargo ship sails from the sea into a freshwater river, which is less dense. Its cargo does not change. What happens to the buoyant force on the ship and to how it sits in the water?',
      options: [
        'The buoyant force is smaller, and the ship rides lower',
        'The buoyant force is unchanged, and the ship rides higher',
        'The buoyant force is unchanged, and the ship rides lower',
        'The buoyant force is smaller, and the ship rides higher',
      ],
      correctAnswer: 2,
      explanation:
        'The ship still floats at rest, so the buoyant force still equals its weight, which has not changed. Fresh water is less dense, so the ship has to displace a larger volume to displace that same weight, and it settles lower. A common trap is tying how high a floater rides to the size of the buoyant force.',
    },
  ],
  // 5 · Sinking and Apparent Weight
  5: [
    {
      // on 02-sinks
      question: 'A solid glass marble is released under water and sinks. Compare the net downward force on it when it is 1 m below the surface with the net force when it is 3 m below the surface. (Ignore drag from the water.)',
      options: [
        'Larger at 3 m, since the water pressure is greater there',
        'Smaller at 3 m, since the buoyant force grows with depth',
        'The same at both, since neither force depends on depth',
        'Zero at both, since the marble sinks at a steady speed',
      ],
      correctAnswer: 2,
      explanation:
        'Fully submerged, the marble displaces its own volume at every depth, so the buoyant force, ρ_fluid·V·g, is the same at 1 m and at 3 m, and so is its weight. The net force, W − F_b, therefore does not change, and the buoyant force never catches up: the marble sinks all the way down. The pressure is greater at 3 m, but the buoyant force comes from the pressure DIFFERENCE across the marble.',
    },
    {
      // on 07-specific-gravity
      question: 'A ring reads 2.1 N on a spring scale in air and 1.9 N when it hangs fully submerged in water. What is the ring’s specific gravity?',
      options: ['9.5', '10.5', '1.1', '0.095'],
      correctAnswer: 1,
      explanation:
        'The weight lost in the water is the buoyant force: 2.1 − 1.9 = 0.2 N. Specific gravity is the weight in air over the weight lost in water: 2.1/0.2 = 10.5, the value for silver. 9.5 puts the apparent weight on top, 1.1 divides one reading by the other, and 0.095 turns the ratio upside down.',
    },
    {
      // Remember
      question: 'A sample weighs 30 N in air and 20 N fully submerged in a liquid. A student writes 20 N ÷ 10 N = 2 and says the sample is twice as dense as the liquid. What should the student have written?',
      options: ['30 N ÷ 20 N = 1.5', '30 N ÷ 10 N = 3', '10 N ÷ 30 N = 0.33', '20 N ÷ 30 N = 0.67'],
      correctAnswer: 1,
      explanation:
        'The density ratio is the TRUE weight over the buoyant force. The buoyant force is the drop in the reading, 30 − 20 = 10 N, so the ratio is 30/10 = 3: the sample is 3 times as dense as the liquid. The student put the apparent weight on top. Dividing one reading by the other, or turning a ratio upside down, are the other common slips.',
    },
    {
      // Remember
      question: 'A swimmer holds a beach ball completely under water, first just below the surface and then an arm’s length deeper. The ball keeps its size. How does the downward push the swimmer needs compare?',
      options: [
        'Larger when deeper, since the pressure is greater',
        'Smaller when deeper, since the ball weighs more',
        'The same, since the buoyant force is unchanged',
        'The same, since the push only balances the weight',
      ],
      correctAnswer: 2,
      explanation:
        'Held under, the ball is at rest with the buoyant force up and its weight and the push both down, so the push is F_b − W. The ball displaces its own volume at either depth, so F_b is the same, the weight is the same, and so is the push. The pressure is greater deeper down, but only the pressure difference across the ball makes the buoyant force. And the push does not balance the weight: the weight points down too.',
    },
  ],
  // 7 · Surface Tension
  7: [
    {
      // on 04-consequences
      question: 'A steel paper clip, laid down gently, rests on the surface of a glass of water. Pushed just below the surface, the same clip sinks to the bottom. What was holding it up?',
      options: [
        'Buoyancy, since the clip displaced its weight of water',
        'Surface tension, since the surface skin held under it',
        'Adhesion, since the water was clinging to the steel',
        'Air pressure, since the air pressed up from beneath',
      ],
      correctAnswer: 1,
      explanation:
        'Steel is far denser than water, so buoyancy can never hold the clip up, as its sinking once it is under shows. On the surface, the clip dents the water’s skin without breaking it, and surface tension supports it. Once the clip is pushed through the skin, only the small buoyant force is left, and it sinks.',
    },
    {
      // on 05-capillary-action
      question: 'The corner of a paper towel is dipped into water, and the water creeps upward through the narrow gaps between the fibers. What does this show about water and the fibers?',
      options: [
        'Cohesion beats adhesion, as for mercury in glass',
        'Adhesion beats cohesion, as for water in glass',
        'Cohesion beats adhesion, as for water in glass',
        'Adhesion beats cohesion, as for mercury in glass',
      ],
      correctAnswer: 1,
      explanation:
        'A liquid climbs a narrow space when it is attracted to the walls more strongly than to itself: adhesion wins, the same case as water rising in a glass tube with a concave meniscus. When cohesion wins, as for mercury in glass, the level is pushed down instead. Water in glass is the adhesion case and mercury in glass the cohesion case, so the two mixed pairings do not occur.',
    },
    {
      // Remember
      question: 'A table lists the surface tension, γ, of several liquids. Which unit could the values carry, and what does that unit measure?',
      options: [
        'N/m², a force on each unit of surface area',
        'N·m, a force times a length along the surface',
        'N/m, a force on each unit of length of surface',
        'kg/m³, a mass in each unit of liquid volume',
      ],
      correctAnswer: 2,
      explanation:
        'Surface tension is the pull of the surface skin per unit length along the surface, in newtons per meter. Equally, it is the energy needed to create a unit area of new surface. N/m² is a pressure, N·m is an energy or a torque, and kg/m³ is a density.',
    },
    {
      // Remember
      question: 'A small drop of oil drifting freely inside a spacecraft pulls itself into a sphere. Why a sphere?',
      options: [
        'A sphere has the most surface area for its volume',
        'A sphere has the least surface area for its volume',
        'A sphere has the least volume for its surface area',
        'A sphere has the same pressure inside and outside',
      ],
      correctAnswer: 1,
      explanation:
        'Surface tension makes a liquid surface behave like a stretched skin that always tries to shrink. With nothing else acting on the drop, it settles into the shape with the least surface area for its volume, which is a sphere. This is cohesion at work, and it happens in any liquid, not only in water.',
    },
  ],
}
