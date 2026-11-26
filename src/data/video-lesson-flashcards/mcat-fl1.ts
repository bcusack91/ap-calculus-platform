import type { ReviewCard } from '@/lib/video-lesson-core'

/**
 * Review flashcards for the Fluids Part 1 video lesson (lesson key `mcat-fl1`,
 * Density & Pressure): one deck per source video, offered before that video's
 * "Remember" section. See mcat-circ1.ts for the format.
 *
 * Reuse: the cards on specific gravity (videos 1 and 2) and on blood pressure
 * (video 5) belong to MCAT-only sections of the videos. Each of them names
 * "specific gravity" or "blood" in its front, so a lesson that leaves those
 * sections out can filter them the way ap2-circ.ts filters the circuits decks.
 */
const r = String.raw

export const decks: Record<number, ReviewCard[]> = {
  // 1 · Density and Specific Gravity
  1: [
    { front: r`What symbol stands for density, and what is its SI unit?`, back: r`$\rho$ (the Greek letter rho). The SI unit is the kilogram per cubic meter, kg/m³. Labs often use g/cm³, which is the same as g/mL.` },
    { front: r`What symbol stands for volume, and what is its SI unit?`, back: r`$V$. The SI unit is the cubic meter, m³. Useful sizes: 1 mL $= 1$ cm³ and 1 L $= 1000$ cm³ $= 10^{-3}$ m³.` },
    { front: r`What symbol stands for weight, and what is its SI unit?`, back: r`$W$. Weight is a force, so its SI unit is the newton, N. Mass, $m$, is in kilograms and is not a weight.` },
    { front: r`What is a fluid?`, back: r`Any substance that flows: liquids and gases. A liquid takes the shape of its container; a gas spreads out to fill its whole container.` },
    { front: r`In which direction does a fluid at rest push on a surface it touches?`, back: r`Perpendicular to the surface, whatever the surface's tilt. A fluid at rest cannot hold a sideways (shear) force: pushed sideways, it simply flows.` },
    { front: r`Write density as an equation.`, back: r`$\rho = \dfrac{m}{V}$: mass per unit volume. Here $\rho$ is the density (kg/m³), $m$ is the mass (kg) and $V$ is the volume (m³).` },
    { front: r`A block of one material is cut in half. What happens to the density of each piece?`, back: r`Nothing: the mass and the volume both halve, so $\rho = m/V$ is unchanged. Here $m$ is the mass and $V$ the volume. Density belongs to the material, not to the sample.` },
    { front: r`What is the density of water, written four ways?`, back: r`1 g/cm³ $=$ 1 g/mL $=$ 1 kg/L $=$ 1000 kg/m³. One cubic centimeter of water has a mass of 1 g, one liter 1 kg and one cubic meter 1000 kg.` },
    { front: r`How do you convert a density from g/cm³ to kg/m³?`, back: r`Multiply by 1000: 2.7 g/cm³ is 2700 kg/m³. The number in kg/m³ is always the bigger one; dividing by 1000 is the common trap.` },
    { front: r`How do you find the mass of a sample from its density and its volume?`, back: r`$m = \rho V$, with matching units: kg/m³ with m³, or g/cm³ with cm³. Here $m$ is the mass, $\rho$ the density and $V$ the volume.` },
    { front: r`How do you find the weight of a sample from its density and its volume?`, back: r`$W = mg = \rho V g$, in newtons. Here $\rho$ is the density (kg/m³), $V$ the volume (m³) and $g$ the acceleration due to gravity, about 10 m/s².` },
    { front: r`Why are liquids treated as incompressible, and how do gases differ?`, back: r`A liquid barely changes volume when it is squeezed, so its density is taken as constant. A gas compresses easily: the same mass in a smaller volume means its density rises with pressure.` },
    { front: r`What is specific gravity?`, back: r`$SG = \dfrac{\rho}{\rho_{\text{water}}}$: a substance's density divided by the density of water. Here $\rho$ is the substance's density and $\rho_{\text{water}}$ is 1000 kg/m³. It is a ratio, so it has no units.` },
    { front: r`How do you turn a specific gravity into a density?`, back: r`The specific gravity is the density in g/cm³, and multiplying it by 1000 gives kg/m³. A specific gravity of 0.8 means 0.8 g/cm³, or 800 kg/m³.` },
    { front: r`What are the specific gravity values of ice, seawater, blood and mercury?`, back: r`Ice 0.92, seawater 1.03, blood 1.05 and mercury 13.6, with water exactly 1.00 between ice and seawater. Each one times 1000 is the density in kg/m³.` },
  ],
  // 2 · Density and Specific Gravity: Worked Examples
  2: [
    { front: r`A problem gives a sample's mass and volume, then asks about a larger piece of the same material. What do you find first?`, back: r`The density, $\rho = m/V$, in the units given. Here $m$ is the sample's mass and $V$ its volume. The density is the same for any piece of the material, so it carries over to the larger piece.` },
    { front: r`What is the common trap when computing a density from a mass and a volume?`, back: r`Flipping the ratio and computing $V/m$. Mass goes on top: $\rho = m/V$, where $m$ is the mass and $V$ the volume.` },
    { front: r`Which unit pairs match when you use $m = \rho V$?`, back: r`kg/m³ with m³ gives kilograms; g/cm³ with cm³ (or g/mL with mL) gives grams. Here $m$ is the mass, $\rho$ the density and $V$ the volume. Mixing g/cm³ with m³, or kg/m³ with liters, is the trap.` },
    { front: r`How many cubic centimeters, and how many cubic meters, are in one liter?`, back: r`1 L $= 1000$ cm³ $= 10^{-3}$ m³. So 2.0 L is 2000 cm³, or $2.0 \times 10^{-3}$ m³.` },
    { front: r`A question asks for a sample's weight, and you have found its mass. What is left to do?`, back: r`Multiply by $g$: $W = mg$, in newtons. Here $m$ is the mass (kg) and $g$ is about 10 m/s². Stopping at the mass in kilograms is a common trap.` },
    { front: r`A liquid's specific gravity and its volume are given. How do you find its mass?`, back: r`Read the specific gravity as a density in g/cm³, then use $m = \rho V$ with the volume in cm³. Here $\rho$ is the density and $V$ the volume. Multiply; dividing the volume by the specific gravity is the trap.` },
    { front: r`How do you find the volume of a liquid from its mass and its specific gravity?`, back: r`$V = \dfrac{m}{\rho}$, with $\rho$ in g/cm³ equal to the specific gravity and $m$ in grams, so $V$ comes out in cm³. A denser liquid needs less volume for the same mass.` },
  ],
  // 3 · Pressure and Depth
  3: [
    { front: r`What symbol stands for pressure, and what is its SI unit?`, back: r`$P$. The SI unit is the pascal, Pa, and $1\ \text{Pa} = 1\ \text{N/m}^2$: one newton on each square meter.` },
    { front: r`What symbol stands for depth in a liquid, and what is its SI unit?`, back: r`$h$. The SI unit is the meter, m. Depth is measured straight down from the liquid's surface.` },
    { front: r`Write pressure as an equation.`, back: r`$P = \dfrac{F}{A}$. Here $P$ is the pressure (Pa), $F$ is the force perpendicular to the surface (N) and $A$ is the area it acts on (m²).` },
    { front: r`The same force is applied to a smaller area. What happens to the pressure?`, back: r`It rises: one tenth of the area gives ten times the pressure, since $P = F/A$. Here $F$ is the force and $A$ the area. That is why a needle tip pierces skin.` },
    { front: r`At one point in a fluid at rest, in which directions does the pressure push?`, back: r`Equally in every direction. Pressure is a scalar: one number at each point. A direction only appears at a surface, where the force from the pressure acts perpendicular to that surface.` },
    { front: r`What is the total pressure at a depth $h$ below the surface of a liquid?`, back: r`$P = P_0 + \rho g h$. Here $P_0$ is the pressure on the liquid's surface, $\rho$ the liquid's density, $g$ the acceleration due to gravity and $h$ the depth below the surface.` },
    { front: r`Where does the $\rho g h$ term in the depth equation come from?`, back: r`The weight of the liquid above. A column of area $A$ and height $h$ weighs $\rho A h g$; divided by the area $A$ it rests on, that is $\rho g h$. Here $\rho$ is the liquid's density. The area cancels, so the column's width does not matter.` },
    { front: r`What does $P_0$ stand for in $P = P_0 + \rho g h$?`, back: r`The pressure pressing on the liquid's surface, usually the atmosphere: about $1.0 \times 10^5$ Pa. Here $\rho g h$ is what the liquid adds at depth $h$.` },
    { front: r`Two containers of different shapes hold the same liquid. How do the pressures compare at the same depth?`, back: r`They are equal. Only the density, $g$ and the depth appear in $P = P_0 + \rho g h$: no width, no shape, no amount of liquid.` },
    { front: r`What is true of the pressure at two points on the same level in one connected fluid at rest?`, back: r`It is the same at both points, whatever the shape of the container between them.` },
    { front: r`What does a graph of total pressure against depth look like for a liquid?`, back: r`A straight line of slope $\rho g$ that starts at $P_0$, not at zero. Here $\rho$ is the liquid's density and $P_0$ the pressure on its surface.` },
    { front: r`The depth of a point in an open lake doubles. What happens to the total pressure there?`, back: r`It less than doubles. The $\rho g h$ part doubles, but $P_0$, the atmosphere on the surface, stays fixed. From 10 m to 20 m of water the total goes from about 2 atm to about 3 atm.` },
    { front: r`About how much pressure does each 10 m of water add?`, back: r`About one atmosphere: $\rho g h = (1000)(10)(10) = 10^5$ Pa. For the total pressure, add the 1 atm already pressing on the surface.` },
  ],
  // 4 · Pressure and Depth: Worked Examples
  4: [
    { front: r`A question asks how much pressure the water adds at some depth. What do you report?`, back: r`$\rho g h$ alone, without the atmosphere. Here $\rho$ is the water's density, $g$ the acceleration due to gravity and $h$ the depth. Leaving out $g$ is a common slip.` },
    { front: r`How do you add $P_0$ and $\rho g h$ when both are in scientific notation?`, back: r`Write both with the same power of ten first: $1.0 \times 10^5 + 3.0 \times 10^4 = 1.0 \times 10^5 + 0.3 \times 10^5 = 1.3 \times 10^5$ Pa. Here $P_0$ is the surface pressure and $\rho g h$ what the liquid adds.` },
    { front: r`How do you turn a pressure into the force on a surface?`, back: r`$F = PA$, with the area in m². Here $F$ is the force (N), $P$ the pressure (Pa) and $A$ the area. Multiply; dividing the pressure by the area is the trap.` },
    { front: r`How deep must water be for the total pressure to be twice the pressure at the surface?`, back: r`The water must add one more $P_0$: $\rho g h = P_0$, so $h = \dfrac{P_0}{\rho g} = \dfrac{10^5}{(1000)(10)} = 10$ m. Here $P_0$ is the surface pressure, $\rho$ the water's density and $h$ the depth.` },
    { front: r`How do you find the pressure difference between two depths in the same liquid?`, back: r`$\Delta P = \rho g \Delta h$. Here $\rho$ is the liquid's density and $\Delta h$ the vertical distance between the two points. $P_0$ is in both totals, so it cancels.` },
    { front: r`A surface is moved deeper in a liquid. How do you find the extra force on it?`, back: r`$\Delta F = \Delta P \cdot A = \rho g \Delta h \cdot A$. Here $\Delta P$ is the pressure difference between the depths, $A$ the surface's area (m²), $\rho$ the liquid's density and $\Delta h$ the change in depth.` },
    { front: r`What quick check confirms a total pressure under water?`, back: r`Count about 1 atm for every 10 m of water, plus the 1 atm at the surface. At 15 m that is 1.5 + 1 = 2.5 atm, or $2.5 \times 10^5$ Pa.` },
  ],
  // 5 · Gauge vs. Absolute Pressure
  5: [
    { front: r`What symbol stands for atmospheric pressure, and what is its SI unit?`, back: r`$P_{\text{atm}}$ (written $P_0$ when it presses on a liquid's surface). The SI unit is the pascal, Pa; at sea level it is about $1.0 \times 10^5$ Pa, which is 1 atm.` },
    { front: r`Write gauge pressure as an equation.`, back: r`$P_{\text{gauge}} = P - P_{\text{atm}}$: the amount above atmospheric pressure. Here $P$ is the absolute (total) pressure and $P_{\text{atm}}$ is atmospheric pressure. So absolute = gauge + atmospheric.` },
    { front: r`A tire gauge reads zero. What is the absolute pressure of the air inside the tire?`, back: r`Atmospheric pressure, about 1 atm. A gauge reads the amount above atmospheric, so a reading of zero does not mean no pressure at all.` },
    { front: r`Can a gauge pressure be negative? Can an absolute pressure?`, back: r`A gauge pressure can: negative means below atmospheric, as inside a drinking straw while you sip. An absolute pressure is never below zero.` },
    { front: r`What is the gauge pressure at a depth $h$ in a liquid that is open to the air?`, back: r`$P_{\text{gauge}} = \rho g h$: the total, $P_{\text{atm}} + \rho g h$, with the atmosphere taken away. Here $\rho$ is the liquid's density and $h$ the depth.` },
    { front: r`What is one atmosphere in pascals, in millimeters of mercury and in meters of water?`, back: r`1 atm $\approx 1.0 \times 10^5$ Pa $=$ 760 mmHg $=$ 760 torr, and it is about 10 m of water.` },
    { front: r`What is a millimeter of mercury, and how many pascals is it?`, back: r`The pressure under a column of mercury 1 mm tall: $\rho g h = (13{,}600)(9.8)(0.001) \approx 133$ Pa. Here $\rho$ is mercury's density and $h$ the column's height.` },
    { front: r`How does a mercury barometer work, and what kind of pressure does it read?`, back: r`A mercury-filled tube is turned upside down in a dish of mercury. The column falls until $\rho g h$ at its base matches the atmosphere pressing on the dish: 760 mm at sea level. Here $\rho$ is mercury's density and $h$ the column's height. With a near vacuum on top, the reading is ABSOLUTE.` },
    { front: r`What changes the height of a barometer's mercury column: a wider tube, or a higher altitude?`, back: r`Only the altitude: less air above means a shorter column. There is no area in $\rho g h$, so the mercury stands just as high in any tube.` },
    { front: r`Why is mercury, not water, used in a barometer?`, back: r`Water is 13.6 times less dense, so one atmosphere would hold up a column 13.6 times taller: about 10.3 m instead of 0.76 m.` },
    { front: r`What does an open-tube manometer measure?`, back: r`A GAUGE pressure: $P - P_{\text{atm}} = \rho g \Delta h$. Here $P$ is the gas's pressure, $\rho$ the density of the liquid in the tube and $\Delta h$ the height difference between its two surfaces. The open arm already carries the atmosphere.` },
    { front: r`In an open-tube manometer, on which side does the liquid stand lower?`, back: r`On the higher-pressure side, which pushes the liquid down. If the liquid stands higher on the gas's side, the gas is below atmospheric pressure and its gauge pressure is negative.` },
    { front: r`What does a blood pressure reading of 120/80 mean?`, back: r`A peak (systolic) pressure of 120 mmHg and a minimum (diastolic) pressure of 80 mmHg, both GAUGE. Add 760 mmHg for the absolute pressures: 880/840 mmHg.` },
    { front: r`How does blood pressure change with height in a standing person?`, back: r`Below the heart add $\rho g h$; above the heart subtract it. Here $\rho$ is the blood's density and $h$ the vertical distance from the heart. The feet, about 1.2 m below, read about 90 mmHg higher, which is why a cuff is kept at heart level.` },
  ],
  // 6 · Gauge vs. Absolute: Worked Examples
  6: [
    { front: r`How do you tell from an open-tube manometer whether a gas is above or below atmospheric pressure?`, back: r`Compare the two arms. If the liquid stands higher in the open arm, the gas has pushed it there, so the gas is above atmospheric. If it stands higher on the gas's side, the gas is below atmospheric.` },
    { front: r`How do you get a gas's absolute pressure from an open-tube manometer?`, back: r`$P = P_{\text{atm}} + \rho g \Delta h$ when the open arm stands higher; subtract $\rho g \Delta h$ when it stands lower. Here $\rho$ is the density of the manometer's liquid and $\Delta h$ the height difference between the arms.` },
    { front: r`A manometer's liquid is replaced by a less dense one. How does the height difference change for the same gas?`, back: r`It grows by the ratio of the densities: $\rho_1 \Delta h_1 = \rho_2 \Delta h_2$. Here $\rho$ is each liquid's density and $\Delta h$ its height difference. Water in place of mercury gives 13.6 times the height; dividing by 13.6 is the trap.` },
    { front: r`A bag of fluid hangs above a needle, with the fluid at rest. What sets the gauge pressure at the needle?`, back: r`Only the height of the fluid's surface above the needle: $P_{\text{gauge}} = \rho g h$. Here $\rho$ is the fluid's density and $h$ that height. A wider or fuller bag at the same height changes nothing.` },
    { front: r`How do you convert a pressure from pascals to millimeters of mercury?`, back: r`Divide by 133, since 1 mmHg is about 133 Pa: $1.0 \times 10^4$ Pa is about 75 mmHg. To go the other way, multiply by 133.` },
    { front: r`Two connected regions of fluid are at different pressures. Which way does the fluid flow?`, back: r`From the higher pressure to the lower. Saline runs into a vein only while the gauge pressure at the needle is above the gauge pressure inside the vein.` },
    { front: r`How do you find the lowest height at which a hanging bag still pushes fluid into a vein?`, back: r`Set $\rho g h$ equal to the vein's gauge pressure: $h = \dfrac{P_{\text{vein}}}{\rho g}$. Here $\rho$ is the fluid's density and $h$ the height of its surface above the needle. Any lower, and blood backs up into the line.` },
  ],
  // 7 · Pascal's Principle
  7: [
    { front: r`What symbols stand for the two piston areas of a hydraulic lift, and what is the SI unit of area?`, back: r`$A_1$ for the input (small) piston and $A_2$ for the output (large) piston. The SI unit of area is the square meter, m².` },
    { front: r`What does Pascal's principle say about a pressure change in an enclosed fluid?`, back: r`It is transmitted undiminished to every part of the fluid and to the walls of its container. The size of the change is $\Delta P = F/A$, where $F$ is the push on a piston and $A$ that piston's area.` },
    { front: r`Why must the fluid in a hydraulic system be incompressible?`, back: r`A liquid cannot be squeezed into a smaller volume, so it passes the push on, and every bit of volume pushed in at one piston comes out at the other. A gas would compress and take up the travel instead.` },
    { front: r`In a hydraulic lift, what is the same at both pistons?`, back: r`The pressure, not the force: $\dfrac{F_1}{A_1} = \dfrac{F_2}{A_2}$. Here $F_1$ and $F_2$ are the forces on the input and output pistons, and $A_1$ and $A_2$ are their areas.` },
    { front: r`What is the output force of a hydraulic lift?`, back: r`$F_2 = F_1 \dfrac{A_2}{A_1}$: the input force times the area ratio. Here $F_1$ is the input force, and $A_1$ and $A_2$ are the areas of the input and output pistons.` },
    { front: r`How are the distances moved by a hydraulic lift's two pistons related?`, back: r`$A_1 d_1 = A_2 d_2$: the volume leaving one cylinder enters the other. Here $A$ is each piston's area and $d$ the distance it moves. The distance is divided by the same ratio that multiplies the force.` },
    { front: r`Does a hydraulic lift multiply work?`, back: r`No: $F_1 d_1 = F_2 d_2$. Here $F$ is the force on each piston and $d$ the distance it moves. Like a lever, a lift trades distance for force and never creates energy.` },
    { front: r`Two pistons are compared by diameter or radius. How do you get the ratio of their areas?`, back: r`Square the ratio: $A = \pi r^2 = \tfrac14 \pi d^2$, where $r$ is the radius and $d$ the diameter. Twice the diameter is 4 times the area; three times the diameter is 9 times the area.` },
    { front: r`A piston pushes on a tall sealed tank of liquid. How do the pressure readings at different depths change?`, back: r`Every reading steps up by the same amount, the push's $\Delta P$. The deeper points keep their extra $\rho g h$, so the gaps between the readings do not change. Here $\rho$ is the liquid's density and $h$ the depth.` },
    { front: r`A hydraulic lift is run in reverse, with the push on the large piston. What comes out at the small piston?`, back: r`A smaller force that moves a longer way. The pressure is the same on both pistons, so less area means less force, and the work on each side still matches.` },
    { front: r`Name three everyday devices that rely on Pascal's principle.`, back: r`Hydraulic brakes, a dentist's chair (or a car jack) and a syringe: in each, a push on an enclosed liquid reaches every part of it.` },
  ],
  // 8 · Pascal's Principle: Worked Examples
  8: [
    { front: r`What do you find first in a hydraulic lift problem?`, back: r`The pressure the input force creates: $P = F_1 / A_1$. The same pressure acts on the output piston, so $F_2 = P A_2$. Here $F_1$ and $A_1$ are the input force and area, and $F_2$ and $A_2$ the output force and area.` },
    { front: r`What is the common trap when finding the output force of a hydraulic lift?`, back: r`Carrying the input force across unchanged. The pressure is shared, not the force: the output force is the input force times the area ratio.` },
    { front: r`How far must a hydraulic lift's input piston move to raise the load a distance $d_2$?`, back: r`$d_1 = d_2 \dfrac{A_2}{A_1}$: the area ratio times as far. Here $A_1$ and $A_2$ are the input and output areas. The small-force side is the one that travels far; dividing by the ratio is the trap.` },
    { front: r`How do you check the answers to a hydraulic lift problem?`, back: r`With work: $F_1 d_1$ must equal $F_2 d_2$. Here $F$ is the force on each piston and $d$ the distance it moves. If the two sides differ, a force or a distance is wrong.` },
    { front: r`A hydraulic jack's load is given as a mass. What must you do before using the area ratio?`, back: r`Turn it into a weight: $W = mg$, in newtons. Here $m$ is the mass (kg) and $g$ is about 10 m/s². A mass in kilograms is not a force.` },
    { front: r`A lift's output piston has $n$ times the diameter of its input piston. What input force holds up a load $F_2$?`, back: r`$F_1 = \dfrac{F_2}{n^2}$, since the area ratio is $n^2$. Here $F_2$ is the load on the output piston. With 4 times the diameter, the input force is one sixteenth of the load.` },
    { front: r`Which piston of a hydraulic lift moves the shorter distance?`, back: r`The large one, the big-force side: $d_2 = d_1 \dfrac{A_1}{A_2}$. Here $d_1$ and $d_2$ are the input and output distances, and $A_1$ and $A_2$ the input and output areas.` },
  ],
}
