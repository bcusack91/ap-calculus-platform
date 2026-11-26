import type { ReviewCard } from '@/lib/video-lesson-core'

/**
 * Review flashcards for the Fluids Part 2 video lesson (lesson key
 * `mcat-fl2`, Buoyancy & Surface Tension): one deck per source video, offered
 * before that video's "Remember" section. See mcat-circ1.ts for the format.
 * The symbols follow the videos: $F_b$ for the buoyant force, $\rho$ for a
 * density, $V$ for a volume, $W$ for a weight.
 */
const r = String.raw

export const decks: Record<number, ReviewCard[]> = {
  // 1 · Archimedes' Principle
  1: [
    { front: r`What symbol stands for the buoyant force, and what is its SI unit?`, back: r`$F_b$: the net upward force a fluid exerts on an object in it. The SI unit is the newton, N.` },
    { front: r`What symbol stands for the submerged volume, and what is its SI unit?`, back: r`$V$ (written $V_{\text{sub}}$ when only part of the object is under): the volume of the object below the surface, which is the volume of fluid it pushes aside. The SI unit is the cubic meter, m³.` },
    { front: r`Where does the buoyant force come from?`, back: r`Pressure grows with depth, so a fluid pushes up on the bottom of an object harder than it pushes down on the top. The sideways pushes cancel. The buoyant force is what is left: a top-to-bottom pressure difference.` },
    { front: r`What is the pressure difference between the top and bottom faces of a block held under a fluid?`, back: r`$\Delta P = \rho g h$. Here $\rho$ is the fluid's density, $g$ the gravitational field strength and $h$ the block's own height. The air pressure $P_0$ pushes on both faces, so it cancels.` },
    { front: r`How does the pressure difference across a block give the buoyant force on it?`, back: r`$F_b = \Delta P \cdot A = \rho (Ah) g = \rho V g$. Here $\Delta P$ is the pressure difference between the bottom and top faces, $A$ the area of each face, $h$ the block's height, $V = Ah$ its volume, $\rho$ the fluid's density and $g$ the gravitational field strength.` },
    { front: r`Write the buoyant force as an equation.`, back: r`$F_b = \rho V g$. Here $\rho$ is the density of the FLUID, $V$ the submerged volume of the object and $g$ the gravitational field strength.` },
    { front: r`An object pushes aside some fluid. How does the weight of that fluid compare with the buoyant force on the object?`, back: r`They are equal. The displaced fluid has mass $\rho V$ and weight $\rho V g$, which is the buoyant force. Here $\rho$ is the fluid's density, $V$ the volume pushed aside and $g$ the gravitational field strength. It holds for an object of any shape.` },
    { front: r`Whose density goes into $F_b = \rho V g$: the fluid's or the object's?`, back: r`The fluid's, never the object's. Equal submerged volumes in the same fluid feel equal buoyant forces, whether the object is lead or cork. The object's own density sets its weight, and so what happens next.` },
    { front: r`How does the buoyant force change while an object is lowered through the surface of a fluid?`, back: r`It grows while more of the object goes under, because the submerged volume grows. Once the object is fully under, the submerged volume cannot grow any more, so the force stays constant.` },
    { front: r`Why is the buoyant force on a fully submerged object the same at any depth?`, back: r`As the object goes deeper, the pressures on its top and its bottom both rise together, so the difference between them stays the same. That difference is what makes the buoyant force.` },
    { front: r`Which three things about an object leave the buoyant force on it unchanged?`, back: r`The object's density, its weight, and how deep it is once it is fully under. Only the fluid's density and the submerged volume matter.` },
  ],
  // 2 · Archimedes' Principle: Worked Examples
  2: [
    { front: r`How do you find the buoyant force on a block from the pressures on its faces?`, back: r`Find the gauge pressure $\rho g h$ at the depth of each face, turn each into a force with $F = PA$, then subtract: the push up on the bottom minus the push down on the top. Here $\rho$ is the fluid's density, $h$ the depth of that face, $P$ the pressure on it and $A$ its area.` },
    { front: r`Why is gauge pressure enough when you find a buoyant force from the face pressures?`, back: r`The air pressure $P_0$ pushes on the top face and on the bottom face alike, so it cancels when the two forces are subtracted.` },
    { front: r`What is the common trap when a buoyant force is found from the forces on a block's faces?`, back: r`Stopping at the force on the bottom face. That is the push on one face alone. The buoyant force is that push minus the push down on the top face.` },
    { front: r`What unit must the volume have in $F_b = \rho V g$, and how do liters and cubic centimeters convert?`, back: r`Cubic meters. $1\ \text{L} = 10^{-3}\ \text{m}^3$ and $1\ \text{cm}^3 = 10^{-6}\ \text{m}^3$, so 4 L goes in as $4 \times 10^{-3}$, never as 4.` },
    { front: r`How do you find the weight of a solid object from its density?`, back: r`$W = \rho_{\text{object}} V g$. Here $\rho_{\text{object}}$ is the OBJECT's own density, $V$ its whole volume and $g$ the gravitational field strength. The buoyant force uses the fluid's density instead.` },
    { front: r`How do you find the net force on a fully submerged object at the moment it is released?`, back: r`Compare the buoyant force, up, with the weight, down. The net force is their difference and points the way of the larger one: it sinks if the weight is larger and rises if the buoyant force is larger.` },
    { front: r`An object stays fully submerged while the fluid around it is swapped for a denser one. What happens to the buoyant force?`, back: r`It grows in proportion to the fluid's density, because the submerged volume is the same. Seawater at 1030 kg/m³ pushes up 3% harder than fresh water at 1000 kg/m³.` },
  ],
  // 3 · Floating
  3: [
    { front: r`What symbol stands for the average density of an object, and what is its SI unit?`, back: r`$\rho_{\text{object}}$: the object's total mass divided by its total volume, including any air inside it. The SI unit is the kilogram per cubic meter, kg/m³.` },
    { front: r`What symbol stands for specific gravity, and what is its SI unit?`, back: r`SG: a density divided by the density of water. It is a ratio of two densities, so it has no unit.` },
    { front: r`How do you predict whether an object will float, hover or sink in a fluid?`, back: r`Compare the object's average density with the fluid's density. Less dense: it rises and floats, partly submerged. Equal: it hovers wherever it is put. Denser: it sinks.` },
    { front: r`Why does a steel ship float when a solid block of steel sinks?`, back: r`The hull encloses air, so the ship's average density (total mass over total volume, air included) is below water's. The trap is using the density of the steel instead of the average density of the whole ship.` },
    { front: r`How do a fish and a swimmer change whether they rise, hover or sink?`, back: r`By changing their average density. A fish adjusts the gas in its swim bladder: more gas, it rises; less, it sinks. A person floats with full lungs and sinks after breathing out.` },
    { front: r`What force balance holds for any object floating at rest?`, back: r`$F_b = mg$, which written out is $\rho_{\text{fluid}} V_{\text{sub}}\, g = \rho_{\text{object}} V g$. Here $F_b$ is the buoyant force, $m$ the object's mass, $g$ the gravitational field strength, $\rho_{\text{fluid}}$ and $\rho_{\text{object}}$ the two densities, $V_{\text{sub}}$ the volume below the surface and $V$ the object's whole volume.` },
    { front: r`An object is set down on a fluid and settles into it. Why does it stop where it does?`, back: r`As it sinks in it displaces more fluid, so the buoyant force grows. It stops when the buoyant force has grown to match its weight: when it has displaced its own WEIGHT of fluid.` },
    { front: r`Write the submerged fraction of a floating object as an equation.`, back: r`$\dfrac{V_{\text{sub}}}{V} = \dfrac{\rho_{\text{object}}}{\rho_{\text{fluid}}}$. Here $V_{\text{sub}}$ is the volume below the surface, $V$ the object's whole volume, and $\rho_{\text{object}}$ and $\rho_{\text{fluid}}$ the densities of the object and the fluid.` },
    { front: r`Does the density ratio of a floating object give the part below the surface or the part above it?`, back: r`The part BELOW. The part above is the rest. Ice (920 kg/m³) in water (1000 kg/m³) floats with 92% of its volume below the surface and 8% above.` },
    { front: r`One object floats first in a fluid and then in a denser fluid. How do the buoyant force and the way it sits compare?`, back: r`The buoyant force is the same in both, because it still equals the object's weight. The denser fluid supplies that force with less submerged volume, so the object rides higher.` },
    { front: r`Why does a floating ice cube leave the water level unchanged as it melts?`, back: r`While it floats, the ice displaces its own weight of water. When it melts it becomes exactly that weight of water, so the meltwater exactly fills the space the ice was displacing.` },
    { front: r`For an object floating in water, how is the submerged fraction related to its specific gravity?`, back: r`They are equal. An object with a specific gravity of 0.6 floats in water with 60% of its volume submerged.` },
    { front: r`How does a hydrometer show the specific gravity of a liquid?`, back: r`It is a weighted float with a scale on its narrow stem. It rides higher in a denser liquid, and the specific gravity is read where the surface crosses the stem. The higher it floats, the higher the specific gravity.` },
    { front: r`What does a high urine specific gravity point to?`, back: r`More concentrated urine, as in dehydration. More dissolved solute makes the urine denser, so a hydrometer floats higher in it.` },
  ],
  // 4 · Floating: Worked Examples
  4: [
    { front: r`What equation starts every floating problem?`, back: r`$\rho_{\text{fluid}} V_{\text{sub}} = m$. It is the buoyant force equals the weight, $\rho_{\text{fluid}} V_{\text{sub}}\, g = mg$, with the $g$ canceled. Here $\rho_{\text{fluid}}$ is the fluid's density, $V_{\text{sub}}$ the submerged volume and $m$ the floating object's mass.` },
    { front: r`How do you find the density of a floating object from its submerged fraction?`, back: r`$\rho_{\text{object}} = (\text{fraction submerged}) \times \rho_{\text{fluid}}$. Here $\rho_{\text{object}}$ and $\rho_{\text{fluid}}$ are the densities of the object and the fluid. Use the fraction BELOW the surface, not the fraction above it.` },
    { front: r`An object floats in one fluid with a known submerged fraction. How do you find its submerged fraction in a second fluid?`, back: r`First get the object's density from the first fluid: the submerged fraction times that fluid's density. Then divide by the second fluid's density, with the object's density on top.` },
    { front: r`A calculation gives a "submerged fraction" larger than 1. What does that mean?`, back: r`Either the ratio is upside down (the object's density goes on top), or the object really is denser than the fluid, and then it sinks instead of floating.` },
    { front: r`How do you find how deep a flat-bottomed hull sits in the water?`, back: r`$d = \dfrac{V_{\text{sub}}}{A}$, because a flat bottom gives $V_{\text{sub}} = Ad$. Here $d$ is the depth of the hull below the waterline, $V_{\text{sub}}$ the submerged volume (the hull's mass over the fluid's density) and $A$ the base area.` },
    { front: r`How do you find the greatest load a floating hull can carry?`, back: r`$m_{\text{load}} = \rho_{\text{fluid}} V_{\text{hull}} - m_{\text{hull}}$. Here $\rho_{\text{fluid}}$ is the fluid's density, $V_{\text{hull}}$ the hull's whole volume and $m_{\text{hull}}$ its own mass. Fully under, the hull displaces its whole volume; that mass of fluid is the TOTAL it can carry, so subtract the hull's own mass.` },
  ],
  // 5 · Sinking and Apparent Weight
  5: [
    { front: r`What symbol stands for apparent weight, and what is its SI unit?`, back: r`$W_{\text{apparent}}$: what a scale reads when the object hangs from it in a fluid. The SI unit is the newton, N.` },
    { front: r`Why do the weight of a fully submerged object and the buoyant force on it differ only by a density?`, back: r`Fully under, the object displaces its own volume, so both share the same $V$: the weight is $\rho_{\text{object}} V g$ and the buoyant force is $\rho_{\text{fluid}} V g$. Here $\rho_{\text{object}}$ and $\rho_{\text{fluid}}$ are the two densities and $g$ the gravitational field strength.` },
    { front: r`Why does an object denser than the fluid sink all the way to the bottom?`, back: r`Its weight is larger than the buoyant force even with all of it under, and neither force changes with depth. The buoyant force never catches up.` },
    { front: r`In what order do you draw the forces on an object that is under a fluid?`, back: r`First the weight, straight down. Second the buoyant force, straight up. Third, whatever else touches the object: a string, a hand or the floor. At rest, the upward forces add up to the downward forces.` },
    { front: r`Does an object weigh less when it is under water?`, back: r`No. Its weight is unchanged. The fluid carries part of it, so a scale or a string has less to support. That is why moving in a pool is easier on the legs.` },
    { front: r`Write the apparent weight of an object hanging in a fluid as an equation.`, back: r`$W_{\text{apparent}} = W - F_b$, from the balance $T + F_b = W$. Here $W$ is the true weight, $F_b$ the buoyant force and $T$ the string's pull, which is what the scale reads.` },
    { front: r`What normal force acts on a sunken object resting on the bottom?`, back: r`$N = W - F_b$, from the balance $N + F_b = W$. Here $N$ is the normal force from the floor, $W$ the object's weight and $F_b$ the buoyant force. Sinking means $F_b$ is smaller than the weight, never zero.` },
    { front: r`What is the tension in a rope that holds a floater under the surface?`, back: r`$T = F_b - W$, from the balance $F_b = W + T$. Here $T$ is the rope's pull, which points DOWN, $F_b$ the buoyant force and $W$ the object's weight. It is the same at any depth.` },
    { front: r`How do a weighing in air and a weighing under a fluid give an object's volume?`, back: r`$V = \dfrac{F_b}{\rho_{\text{fluid}}\, g}$, with $F_b = W - W_{\text{apparent}}$. Here $F_b$ is the buoyant force (the drop in the reading), $W$ the weight in air, $W_{\text{apparent}}$ the reading in the fluid, $\rho_{\text{fluid}}$ the fluid's density and $g$ the gravitational field strength. A submerged object displaces its own volume.` },
    { front: r`Once two weighings have given an object's volume, how do you find its density?`, back: r`$\rho_{\text{object}} = \dfrac{m}{V}$, with $m = W/g$. Here $m$ is the object's mass, $W$ its weight in air, $g$ the gravitational field strength and $V$ its volume.` },
    { front: r`What is the one-line density ratio from two weighings?`, back: r`$\dfrac{\rho_{\text{object}}}{\rho_{\text{fluid}}} = \dfrac{W}{F_b}$. Here $W$ is the TRUE weight (in air) and $F_b = W - W_{\text{apparent}}$ the buoyant force. The trap is putting the apparent weight on top.` },
    { front: r`How do a weight in air and a weight in water give a specific gravity?`, back: r`$SG = \dfrac{W}{W - W_{\text{apparent}}}$. Here $W$ is the weight in air and $W_{\text{apparent}}$ the reading fully under water: the weight in air divided by the weight lost in water. This is how Archimedes could test a crown for gold (specific gravity about 19) without melting it down.` },
  ],
  // 6 · Sinking and Apparent Weight: Worked Examples
  6: [
    { front: r`How do you check a density found from a weighing in air and a weighing in water?`, back: r`Divide the true weight by the buoyant force. That ratio is the object's density over water's, so 9.0 N over 2.0 N means 4.5 times water's density: 4500 kg/m³.` },
    { front: r`A hanging submerged object is cut loose and settles on the bottom. How does the normal force compare with the tension the string had?`, back: r`They are equal. Either support supplies the weight minus the buoyant force, and the buoyant force is still there on the bottom.` },
    { front: r`How do you tell which way a rope pulls on an object held at rest under a fluid?`, back: r`Compare the buoyant force with the weight. If the buoyant force is larger, the object would rise, so the rope pulls down with $F_b - W$. If the weight is larger, the rope pulls up with $W - F_b$. Here $F_b$ is the buoyant force and $W$ the weight.` },
    { front: r`How do you find the acceleration of a tied-down float at the moment its rope is cut?`, back: r`$a = \dfrac{F_b - W}{m}$, upward. Here $F_b$ is the buoyant force, $W$ the float's weight and $m$ the float's OWN mass. The tension is gone, so the other two forces no longer balance.` },
    { front: r`Which mass goes into $F_{\text{net}} = ma$ for an object released under a fluid?`, back: r`The object's own mass. The trap is dividing by the mass of the displaced fluid, which belongs to the buoyant force, not to the object.` },
    { front: r`A released float rises and comes to rest at the surface. What has happened to the buoyant force on it?`, back: r`It has dropped until it equals the float's weight again. Less of the float is under: the submerged fraction is the float's density over the fluid's.` },
  ],
  // 7 · Surface Tension
  7: [
    { front: r`What symbol stands for surface tension, and what is its SI unit?`, back: r`$\gamma$ (the Greek letter gamma): the strength of a liquid's surface "skin". The SI unit is the newton per meter, N/m.` },
    { front: r`What is the difference between cohesion and adhesion?`, back: r`Cohesion is the attraction between molecules of the same substance, such as water to water through hydrogen bonds. Adhesion is the attraction between a liquid and a different material, such as water to glass.` },
    { front: r`Why does a drop of water bead up on wax but spread out on clean glass?`, back: r`On wax, cohesion wins: the water holds to itself more strongly than to the wax, so the drop beads up. On clean glass, adhesion wins, so the drop spreads out.` },
    { front: r`Why does the surface of a liquid behave like a stretched skin?`, back: r`A molecule deep inside is pulled equally in every direction, so the pulls cancel. A molecule at the surface has neighbors only beside and below it, so it feels a net inward pull, and the surface draws tight.` },
    { front: r`What two equivalent things does surface tension measure?`, back: r`The force per unit length along the surface, and equally the energy needed to create a unit area of new surface.` },
    { front: r`Why is the surface tension of water unusually high?`, back: r`Hydrogen bonding gives water strong cohesion, and stronger cohesion means a stronger surface skin.` },
    { front: r`Why do small droplets pull themselves into spheres?`, back: r`A surface always tries to shrink, and a sphere is the shape with the least surface area for its volume.` },
    { front: r`What holds up a water strider, or a steel needle laid gently on water?`, back: r`Surface tension, not buoyancy. The surface dents but its skin holds. Steel is far denser than water, so buoyancy could never support the needle.` },
    { front: r`What does a surfactant do to a liquid?`, back: r`It lowers the surface tension. Soaps are surfactants (surface-active agents): add a little, the skin weakens, and a needle resting on the water drops through.` },
    { front: r`What does a liquid do in a narrow tube when adhesion beats cohesion?`, back: r`It climbs the walls: the meniscus is concave and the level rises above the level outside, as for water in glass.` },
    { front: r`What does a liquid do in a narrow tube when cohesion beats adhesion?`, back: r`Its surface domes up: the meniscus is convex and the level is pushed down below the level outside, as for mercury in glass.` },
    { front: r`How does the width of a tube change the capillary rise or fall?`, back: r`The narrower the tube, the larger the rise or the fall. Capillary action is what draws blood into a thin glass tube and water into a paper towel.` },
    { front: r`What does the surface tension of the lining fluid do to an alveolus, and which alveoli are most at risk?`, back: r`It pulls inward and tends to collapse the alveolus. The collapsing effect is stronger the smaller the alveolus, so the smallest ones are most at risk.` },
    { front: r`What does pulmonary surfactant do, and which cells secrete it?`, back: r`It spreads over the lining of the alveoli and lowers the surface tension, so the small alveoli stay open. Type II alveolar cells secrete it.` },
    { front: r`Why do premature infants develop respiratory distress syndrome?`, back: r`They cannot yet make enough surfactant. The surface tension in the alveoli stays high, and the small alveoli collapse.` },
  ],
  // 8 · Surface Tension: Worked Examples
  8: [
    { front: r`What do you ask first in any problem about a liquid in a narrow tube?`, back: r`Which attraction is stronger: adhesion to the wall, or cohesion within the liquid. Adhesion stronger means concave and up; cohesion stronger means convex and down.` },
    { front: r`What does the shape of a meniscus tell you about a liquid in a tube?`, back: r`Which attraction is winning, and so which way the level has moved. Concave: adhesion is winning and the level has risen. Convex: cohesion is winning and the level has been pushed down.` },
    { front: r`What is the common trap when a liquid's surface in a tube is domed?`, back: r`Reading the dome as a liquid that has risen. A domed surface is a convex meniscus, and convex goes with a level pushed down.` },
    { front: r`How do you rank tubes of different widths by how far the liquid level moves?`, back: r`The narrowest tube shows the largest change, whether the liquid rises or is pushed down. The trap is expecting the wide tube to show the larger change.` },
    { front: r`Water rises in a clean glass tube. What does it do in the same tube lined with wax, and why?`, back: r`Water adheres to wax only weakly, so cohesion now wins: a convex meniscus and a level pushed down, the way mercury behaves in glass. Same water, new wall, opposite result.` },
    { front: r`What are the three steps of reasoning about surface tension in the lungs?`, back: r`Surface tension in the lining fluid pulls inward. The effect is strongest in the smallest alveoli. Surfactant lowers the surface tension, so less surfactant means more collapse.` },
    { front: r`What must every predict-and-explain answer about a liquid surface include?`, back: r`Its "because": the reason, stated in terms of cohesion, adhesion or surface tension.` },
  ],
}
