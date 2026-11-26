import type { ReviewCard } from '@/lib/video-lesson-core'

/**
 * Review flashcards for the Fluids Part 3 video lesson (lesson key
 * `mcat-fl3`, Continuity & Bernoulli): one deck per source video, offered
 * before that video's "Remember" section. See mcat-circ1.ts for the format.
 *
 * MCAT-only cards (their sections are left out of an AP Physics 1 lesson built
 * from these clips): video 1 "How do you convert a clinical flow rate …" and
 * video 3 "How do speed and wall pressure change in a narrowed artery …".
 */
const r = String.raw

export const decks: Record<number, ReviewCard[]> = {
  // 1 · Flow Rate and Continuity
  1: [
    { front: r`What symbol stands for volume flow rate, and what is its SI unit?`, back: r`$Q$: the volume of fluid that passes a cross-section each second. The SI unit is the cubic meter per second, m³/s.` },
    { front: r`Write the volume flow rate in terms of area and speed.`, back: r`$Q = Av$. Here $Q$ is the volume flow rate (m³/s), $A$ the cross-sectional area (m²) and $v$ the fluid's speed (m/s). In a time $t$ a slug of length $vt$ passes, a volume $A(vt)$; divide by $t$.` },
    { front: r`What is the difference between flow rate and flow speed?`, back: r`Flow rate $Q$ is a volume per time (m³/s); speed $v$ is a distance per time (m/s). A wide, slow river can carry far more water each second than a narrow, fast stream.` },
    { front: r`Which two volume conversions turn milliliters and liters into cubic centimeters and cubic meters?`, back: r`1 mL = 1 cm³, and 1 L = 1000 cm³ = $10^{-3}$ m³.` },
    { front: r`What does continuity say about a liquid flowing through a pipe that changes width?`, back: r`$A_1 v_1 = A_2 v_2$: the flow rate is the same at every cross-section, so narrower means faster. Here $A_1$ and $v_1$ are the area and speed at one cross-section, and $A_2$ and $v_2$ those at another.` },
    { front: r`Why must the flow rate be the same at every cross-section of a pipe?`, back: r`Fluid cannot pile up inside a rigid, leak-free pipe, so the mass entering each second equals the mass leaving. A liquid is incompressible (constant density), so equal volumes pass every cross-section each second.` },
    { front: r`How does the speed of the flow in a round pipe depend on the pipe's radius?`, back: r`The area is $A = \pi r^2$, so for the same flow $v \propto 1/r^2$. Here $r$ is the pipe's radius and $v$ the speed. Half the radius (or diameter) is a quarter of the area, so 4 times the speed, not twice.` },
    { front: r`One pipe splits into several branches. How do you find the speed in the branches?`, back: r`The branch flows add up to the parent flow: $A_0 v_0 = A_1 v_1 + A_2 v_2 + \dots$, so the speed is the flow rate divided by the TOTAL area of the branches. Here $A_0$ and $v_0$ are the parent pipe's area and speed, and $A_1$, $v_1$, $A_2$, $v_2$ those of the branches.` },
    { front: r`What is single-tube thinking, and why does it fail in a branching network?`, back: r`It is the trap "each branch is narrower, so the fluid must be faster". Continuity uses the total area of all the parallel branches. The capillaries together have about 1000 times the aorta's area, so blood moves about 1000 times slower in them.` },
    { front: r`How do you convert a clinical flow rate such as 5 L/min for use with areas in cm² and speeds in cm/s?`, back: r`Liters to cubic centimeters and minutes to seconds: 5 L/min is 5000 cm³ per 60 s, about 83 cm³/s. Then cm² times cm/s matches cm³/s.` },
    { front: r`What can the continuity equation tell you, and what can it not?`, back: r`It links area to speed, so it gives speeds. It says nothing about pressure: that takes Bernoulli's equation.` },
  ],
  // 2 · Flow Rate and Continuity: Worked Examples
  2: [
    { front: r`How do you find a flow rate from a volume delivered and the time it took?`, back: r`$Q = V/t$, in matching units. Here $V$ is the volume delivered and $t$ the time. Example: 12 L in 60 s is 12,000 cm³ / 60 s = 200 cm³/s.` },
    { front: r`Once you know the flow rate, how do you find the speed at any cross-section?`, back: r`$v = Q/A$. Here $Q$ is the flow rate and $A$ the area of that cross-section. Units must match: cm³/s over cm² gives cm/s.` },
    { front: r`How do you find the new speed where a pipe narrows?`, back: r`$v_2 = v_1 \dfrac{A_1}{A_2}$. Here $v_1$ and $A_1$ are the speed and area before the narrowing, and $v_2$ and $A_2$ those after it.` },
    { front: r`A nozzle has one-third of the hose's diameter. How do the areas and the speeds compare?`, back: r`The nozzle has one-ninth of the area, so the water leaves 9 times as fast. A diameter or radius ratio must be squared to get the area ratio.` },
    { front: r`How do you convert a flow rate from cm³/s to L/min?`, back: r`Multiply by 60 for per minute, then divide by 1000 for liters: 90 cm³/s is 5400 cm³/min, which is 5.4 L/min.` },
    { front: r`How do you find the speed of a fluid in a bed of many parallel vessels?`, back: r`$v = Q / A_{\text{total}}$. Here $Q$ is the one flow rate feeding the bed and $A_{\text{total}}$ the summed area of all the vessels. Example: 90 cm³/s over 3000 cm² is 0.03 cm/s.` },
    { front: r`What are three common traps in flow-rate and continuity problems?`, back: r`Mixing liters with cubic centimeters or minutes with seconds; using a diameter ratio as the speed ratio without squaring it; and dividing by one branch's area instead of the total area.` },
  ],
  // 3 · Bernoulli's Equation
  3: [
    { front: r`What symbols stand for pressure, density and height in Bernoulli's equation, and what are their SI units?`, back: r`$P$ is pressure, in pascals (Pa). $\rho$ is density, in kg/m³. $y$ is height above a chosen reference level, in meters.` },
    { front: r`What three assumptions define the ideal fluid that Bernoulli's equation is built on?`, back: r`It is incompressible (constant density), non-viscous (no internal friction), and its flow is steady and laminar (smooth layers that never cross).` },
    { front: r`What is a streamline?`, back: r`The path traced by one small parcel of fluid. Bernoulli's equation follows that parcel and compares two points along its streamline.` },
    { front: r`Write Bernoulli's equation for two points on a streamline.`, back: r`$P_1 + \rho g y_1 + \tfrac12 \rho v_1^2 = P_2 + \rho g y_2 + \tfrac12 \rho v_2^2$. Here $P$ is the pressure, $\rho$ the fluid's density, $g$ the gravitational field strength, $y$ the height and $v$ the speed, at points 1 and 2.` },
    { front: r`What does each of the three terms in Bernoulli's equation stand for?`, back: r`Each is an energy per unit volume: $P$ is the work the fluid can do by pushing, $\rho g y$ is gravitational potential energy and $\tfrac12 \rho v^2$ is kinetic energy. Here $\rho$ is density, $g$ gravitational field strength, $y$ height and $v$ speed. J/m³ is the same unit as Pa.` },
    { front: r`In Bernoulli's equation, is $y$ a height or a depth, and why does it matter?`, back: r`A height above a reference level. So pressure FALLS as the fluid rises. Reading $y$ as a depth is a common trap.` },
    { front: r`What does Bernoulli's equation reduce to for a fluid at rest?`, back: r`Both kinetic terms are zero, so $P + \rho g y$ is constant, which gives $P = P_0 + \rho g h$. Here $P_0$ is the pressure at the surface, $\rho$ the density, $g$ gravitational field strength and $h$ the depth below the surface.` },
    { front: r`What does Bernoulli's equation reduce to for flow at one height?`, back: r`The $\rho g y$ terms cancel, so $P + \tfrac12 \rho v^2$ is constant: where the fluid moves faster, its pressure is lower. Here $P$ is pressure, $\rho$ density and $v$ speed.` },
    { front: r`Why does a fluid speed up as it enters a narrowing?`, back: r`The pressure behind it is higher than the pressure ahead. That pressure difference is the net force that accelerates the fluid, which is why the fast, narrow section is the low-pressure one.` },
    { front: r`What is the standard chain of reasoning for a pipe that narrows?`, back: r`Area down, so speed up (continuity), so pressure down (Bernoulli). Continuity comes first, for the speed; then Bernoulli, for the pressure.` },
    { front: r`A pipe climbs as it narrows. How do the two changes affect the pressure?`, back: r`Speeding up lowers the pressure and rising lowers it too, so the two drops add.` },
    { front: r`Why does Bernoulli's equation need a non-viscous fluid?`, back: r`It is conservation of energy. Viscosity (internal friction) would turn some of the fluid's energy into heat, so the three terms would no longer add up to a constant.` },
    { front: r`How do speed and wall pressure change in a narrowed artery, and in a widened one?`, back: r`Through a short narrowing the blood moves faster and presses less on the wall. In a widened segment it moves slower and presses harder. Narrower, faster, lower pressure; wider, slower, higher pressure.` },
  ],
  // 4 · Bernoulli's Equation: Worked Examples
  4: [
    { front: r`What are the first steps in any Bernoulli problem?`, back: r`Label points 1 and 2 and list $P$, $v$ and $y$ at each (pressure, speed and height). Then continuity gives the unknown speed: $v_2 = v_1 (A_1/A_2)$, where $A_1$ and $A_2$ are the two cross-sectional areas.` },
    { front: r`How do you find the pressure change in a level pipe that narrows?`, back: r`$P_1 - P_2 = \tfrac12 \rho (v_2^2 - v_1^2)$. Here $P_1$ and $v_1$ are the pressure and speed in the wide section, $P_2$ and $v_2$ those in the narrow section, and $\rho$ the fluid's density.` },
    { front: r`What is the common trap when putting two speeds into Bernoulli's equation?`, back: r`Squaring the difference. Square each speed first, then subtract: for 6 m/s and 2 m/s, $36 - 4 = 32$, not $(6 - 2)^2 = 16$.` },
    { front: r`How do you find the pressure change in a pipe that narrows and climbs?`, back: r`$P_1 - P_2 = \tfrac12 \rho (v_2^2 - v_1^2) + \rho g (y_2 - y_1)$: the speed term plus the height term. Here $P$, $v$ and $y$ are the pressure, speed and height at points 1 and 2, $\rho$ the density and $g$ gravitational field strength.` },
    { front: r`You have a pressure drop in pascals and an upstream pressure in kilopascals. How do you finish?`, back: r`Convert first (1000 Pa = 1 kPa), then SUBTRACT the drop from the upstream pressure: 16,000 Pa is 16 kPa, and 150 − 16 = 134 kPa. Adding the change is a common trap.` },
    { front: r`What quick check works on any Bernoulli answer?`, back: r`Stop the flow. The speed terms vanish and only $\rho g (y_2 - y_1)$ is left, the hydrostatic result. Here $\rho$ is density, $g$ gravitational field strength and $y_2 - y_1$ the height gained.` },
  ],
  // 5 · Torricelli's Theorem
  5: [
    { front: r`In Torricelli's theorem and the jet's range, what do $h$ and $H$ stand for, and what is their SI unit?`, back: r`$h$ is the depth of the hole below the liquid surface (measured from the surface down, not up from the bottom of the tank). $H$ is the hole's height above the ground. Both are in meters.` },
    { front: r`Which two points does Torricelli's theorem compare?`, back: r`Point 1 on the liquid surface of a wide, open tank, and point 2 in the jet just outside a small hole a depth $h$ below the surface.` },
    { front: r`Which two simplifications turn Bernoulli's equation into Torricelli's theorem?`, back: r`Both points are open to the air, so $P_1 = P_2$ (atmospheric pressure) and the pressures cancel. The tank is far wider than the hole, so the surface barely moves: $v_1 \approx 0$.` },
    { front: r`State Torricelli's theorem.`, back: r`$v = \sqrt{2gh}$. Here $v$ is the speed of the jet leaving the hole, $g$ gravitational field strength and $h$ the depth of the hole below the liquid surface.` },
    { front: r`Why does a jet leave a tank at the speed of a stone dropped through the same height?`, back: r`Each parcel of liquid trades the potential energy of its drop for kinetic energy: $\rho g h = \tfrac12 \rho v^2$, just as $mgh = \tfrac12 m v^2$ for the stone. Here $\rho$ is density, $m$ the stone's mass, $g$ gravitational field strength, $h$ the height and $v$ the speed.` },
    { front: r`How does the density of the liquid affect the speed of the jet from a hole in a tank?`, back: r`Not at all. Density is on both sides of $\rho g h = \tfrac12 \rho v^2$ and cancels. Water, oil and mercury leave at the same speed from the same depth; only $g$ and the depth $h$ matter.` },
    { front: r`How does the speed of the jet depend on the depth of the hole?`, back: r`It goes as the square root of the depth. Twice the depth gives $\sqrt2 \approx 1.4$ times the speed; it takes 4 times the depth to double the speed.` },
    { front: r`What happens to the jet as an open tank drains?`, back: r`The depth $h$ above the hole shrinks, so the exit speed falls, and so does the flow rate $Q = A_{\text{hole}} v$. Here $A_{\text{hole}}$ is the hole's area and $v$ the exit speed. The tank empties more and more slowly.` },
    { front: r`How long does a jet that leaves horizontally take to reach the ground?`, back: r`$t = \sqrt{2H/g}$, from $H = \tfrac12 g t^2$. Here $H$ is the hole's height above the ground and $g$ gravitational field strength. Using the depth $h$ for the fall is a common trap.` },
    { front: r`How far from the tank does a horizontal jet land?`, back: r`$R = vt = 2\sqrt{hH}$. Here $v$ is the exit speed, $t$ the fall time, $h$ the depth of the hole below the surface and $H$ its height above the ground.` },
  ],
  // 6 · Torricelli's Theorem: Worked Examples
  6: [
    { front: r`How do you find the flow rate out of a hole in a tank?`, back: r`$Q = A_{\text{hole}} v$ with $v = \sqrt{2gh}$, and the area in square meters. Here $A_{\text{hole}}$ is the hole's area, $v$ the exit speed, $g$ gravitational field strength and $h$ the depth of the hole.` },
    { front: r`How do you convert an area from cm² to m², and a flow rate from m³/s to L/s?`, back: r`1 cm² = $10^{-4}$ m², and $10^{-3}$ m³/s = 1 L/s.` },
    { front: r`The depth of water above a hole falls to one-quarter. What happens to the exit speed and the flow rate?`, back: r`Both halve. The speed goes as the square root of the depth, and half the speed through the same hole is half the flow rate. Halving the speed when the depth halves is a common trap.` },
    { front: r`What are the steps for finding where a horizontal jet lands?`, back: r`Exit speed from the depth: $v = \sqrt{2gh}$. Fall time from the height: $H = \tfrac12 g t^2$. Then the range is $R = vt$. Here $h$ is the hole's depth below the surface, $H$ its height above the floor and $g$ gravitational field strength.` },
    { front: r`For a jet from a tank, which distance sets the exit speed and which sets the fall time?`, back: r`The depth of the hole below the surface sets the exit speed. The height of the hole above the floor sets the fall time. Swapping them is a common trap.` },
    { front: r`A tank's water is replaced by oil, filled to the same level. What changes about the jet?`, back: r`Nothing. $\sqrt{2gh}$ has no density in it, and the fall does not depend on density either: same exit speed, same fall time, same range. Here $g$ is gravitational field strength and $h$ the depth of the hole.` },
  ],
  // 7 · Venturi and Pitot Tubes
  7: [
    { front: r`In a Venturi meter, what do $\Delta P$ and $\Delta h$ stand for, and what are their SI units?`, back: r`$\Delta P$ is the pressure difference between the wide section and the throat, in pascals (Pa). $\Delta h$ is the difference between the liquid levels in the two open tubes, in meters.` },
    { front: r`What is the Venturi effect?`, back: r`Pressure drops in a constriction: the area goes down, so the speed goes up, so the pressure goes down. The pressure recovers when the pipe widens again.` },
    { front: r`What is a Venturi meter, and over which section does its liquid stand lower?`, back: r`A horizontal pipe with a narrow throat, and an open vertical tube above the wide section and above the throat. The liquid stands LOWER over the throat: the fluid there is faster, so its pressure is lower.` },
    { front: r`How does the height difference in a Venturi meter give the pressure difference?`, back: r`$\Delta P = \rho g \Delta h$. Here $\rho$ is the liquid's density, $g$ gravitational field strength and $\Delta h$ the difference between the two liquid levels.` },
    { front: r`Which two equations turn a Venturi meter's pressure difference into the two flow speeds?`, back: r`Continuity, $v_2 = v_1 (A_1/A_2)$, and Bernoulli for a level pipe, $\Delta P = \tfrac12 \rho (v_2^2 - v_1^2)$. Here $v_1$ and $A_1$ are the speed and area in the wide section, $v_2$ and $A_2$ those in the throat, and $\rho$ the density.` },
    { front: r`The flow rate through a Venturi meter doubles. What happens to the height difference?`, back: r`It becomes 4 times as large. Both speeds double, and the pressure difference goes as the speed squared.` },
    { front: r`What happens at the open tip of a pitot tube?`, back: r`The tip points straight into the stream. The fluid that meets it has nowhere to go and is brought to rest: that spot is the stagnation point. Its kinetic energy turns into pressure.` },
    { front: r`What is the stagnation pressure at the tip of a pitot tube?`, back: r`$P + \tfrac12 \rho v^2$. Here $P$ is the static pressure of the stream (read by a port on the side of the tube), $\rho$ the fluid's density and $v$ the stream's speed.` },
    { front: r`How does a pitot tube's reading give the speed of the stream?`, back: r`The gauge reads stagnation minus static pressure, $\Delta P = \tfrac12 \rho v^2$, so $v = \sqrt{2 \Delta P / \rho}$. Here $\rho$ is the density of the moving fluid and $v$ its speed.` },
    { front: r`Why can the pitot formula not be used for a Venturi meter?`, back: r`At a pitot tube's tip the fluid is at rest, so one speed appears. In a Venturi meter the fluid is moving at both points, so both speeds appear in the pressure difference.` },
    { front: r`How does an atomizer lift liquid up its tube?`, back: r`A fast stream of air across the top of the tube lowers the pressure there. The still air over the jar is at full atmospheric pressure, and that larger pressure PUSHES the liquid up the tube. Nothing sucks it up.` },
    { front: r`How does a wing produce lift?`, back: r`Air moves faster over its top than beneath it, so the pressure on top is lower. The net upward force is $F = \Delta P \cdot A$. Here $\Delta P$ is the pressure difference between the bottom and the top and $A$ the wing's area.` },
  ],
  // 8 · Venturi and Pitot Tubes: Worked Examples
  8: [
    { front: r`What are the steps from a Venturi meter's height difference to its flow rate?`, back: r`Turn the height difference into a pressure difference, $\rho g \Delta h$. Write $v_2$ in terms of $v_1$ with continuity, put it into Bernoulli's equation and solve for $v_1$. Then $Q = A_1 v_1$. Here $v_1$ and $A_1$ belong to the wide section and $v_2$ to the throat.` },
    { front: r`A Venturi meter's throat has one-third of the wide section's area. What does the pressure difference reduce to?`, back: r`$v_2 = 3 v_1$, so $\Delta P = \tfrac12 \rho (9 v_1^2 - v_1^2) = 4 \rho v_1^2$. Here $v_1$ is the speed in the wide section, $v_2$ the speed in the throat and $\rho$ the density.` },
    { front: r`What is the common trap when solving a Venturi meter for a speed?`, back: r`Setting the pressure difference equal to $\tfrac12 \rho v^2$ with a single speed. Both sections are moving, so both speeds appear. Another is leaving $g$ out of $\rho g \Delta h$.` },
    { front: r`Which density goes into the pitot-tube formula?`, back: r`The density of the fluid that is moving. For an aircraft that is air, about 1.2 kg/m³, not the density of water.` },
    { front: r`How do you find the pressure difference across a wing from the air speeds above and below it?`, back: r`$\Delta P = \tfrac12 \rho (v_{\text{top}}^2 - v_{\text{bottom}}^2)$: square each speed first, then subtract. Here $\rho$ is the density of air, $v_{\text{top}}$ the speed over the wing and $v_{\text{bottom}}$ the speed beneath it.` },
    { front: r`A question gives the pressure difference across a wing and asks for the lift. What is the last step?`, back: r`Multiply by the wing's area: $F = \Delta P \cdot A$, in newtons. Here $\Delta P$ is the pressure difference and $A$ the wing's area. Stopping at the pressure difference is a common trap.` },
  ],
}
