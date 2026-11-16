import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-physics-electricity-induction-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`State Lenz's law.`]: {
    question: r`A student claims that pushing a bar magnet toward a closed coil induces a current whose field pulls the magnet in even faster. Why can this not happen?`,
    options: [
      r`The coil would then need a battery to carry any current`,
      r`The magnet would gain energy with no work being done on it`,
      r`The magnet would lose its field as soon as current flowed`,
      r`The coil would then have zero flux and so zero current`,
    ],
    correctAnswer: 1,
    explanation: r`Lenz's law is energy conservation: the induced current opposes the flux change, so the magnet is repelled and whoever pushes it does the work that becomes electrical energy. A current that aided the change would speed the magnet up and heat the coil with no energy source. Induction needs no battery, the magnet keeps its field, and the flux through the coil is not zero.`,
  },
  [r`How does MRI work in principle?`]: {
    question: r`A technician runs an MRI scan with the main magnet and the receiver on but forgets to switch on the radiofrequency transmitter. Why is no image produced?`,
    options: [
      r`The hydrogen spins never align, so no net magnetization forms`,
      r`The hydrogen spins are ionized, so they cannot emit any signal`,
      r`The aligned spins are never disturbed, so they emit no signal`,
      r`The aligned spins emit X-rays that the receiver cannot detect`,
    ],
    correctAnswer: 2,
    explanation: r`The static field aligns the spins, but a signal appears only when an RF pulse tips them and they relax back, emitting radio waves. Without the pulse the spins sit aligned and silent. Alignment comes from the main magnet rather than the transmitter, and MRI involves neither ionization nor X-rays.`,
  },
  [r`State Faraday's law.`]: {
    question: r`A single flexible loop lies with its plane perpendicular to a steady 2 T field. Its area is squeezed from 0.3 m² to 0.1 m² in 0.5 s. What is the average EMF induced in the loop?`,
    options: [r`0.8 V`, r`0.2 V`, r`1.2 V`, r`0.4 V`],
    correctAnswer: 0,
    explanation: r`The flux change is B times the change in area, 2 × 0.2 = 0.4 Wb, and dividing by 0.5 s gives 0.8 V. The 0.4 V answer is the flux change without dividing by the time, 0.2 V multiplies by the time instead of dividing, and 1.2 V uses the starting flux of 0.6 Wb in place of the change.`,
  },
  [r`Magnetic flux is given by:`]: {
    question: r`The flux through a flat coil is 0.06 Wb when a uniform field is perpendicular to the coil's surface. The coil is turned 90° so that the field lies in the plane of the coil. What is the flux now?`,
    options: [
      r`0.06 Wb, because B and the area have not changed`,
      r`0.03 Wb, because half of the field lines still cross`,
      r`0.12 Wb, because flux is largest for an edge-on coil`,
      r`0 Wb, because no field lines pass through the surface`,
    ],
    correctAnswer: 3,
    explanation: r`With the field lying in the coil's plane, the angle between the field and the normal is 90° and cos 90° = 0, so no field lines thread the coil. Keeping 0.06 Wb ignores the cosine factor, 0.03 Wb confuses cos 90° with one half, and 0.12 Wb has the rule backward: flux is largest when the field is perpendicular to the surface.`,
  },
  [r`MRI relies primarily on:`]: {
    question: r`A test sample is filled with a liquid whose nuclei all have zero spin. Placed in a working MRI scanner, the sample would:`,
    options: [
      r`give a normal signal, since electrons supply the signal`,
      r`give no signal, since there are no nuclear spins to align`,
      r`give a strong signal, since heavier nuclei absorb X-rays`,
      r`give a normal signal, since any nucleus emits radio waves`,
    ],
    correctAnswer: 1,
    explanation: r`MRI depends on nuclear spins lining up in the strong field and then emitting radio signals after being tipped. Nuclei with zero spin have no magnetic moment to align, so there is nothing to detect. The signal does not come from electrons, MRI does not use X-ray absorption, and a nucleus without spin gives no resonance signal.`,
  },
  [r`A current-carrying wire in a magnetic field experiences a force. The direction of this force is determined by:`]: {
    question: r`A straight section of power cable lies flat on the ground and carries current toward the north. A magnet below it produces a field at the cable that points straight down. Using F = IL × B, which way is the cable pushed?`,
    options: [r`East`, r`South`, r`West`, r`Upward`],
    correctAnswer: 2,
    explanation: r`Point the fingers of the right hand north along the current and curl them downward toward the field: the thumb points west. East comes from using the left hand or reversing the order of the cross product. South and upward lie along the line of the current or of the field, and the force must be perpendicular to both.`,
  },
  [r`Two isotopes of equal charge enter a mass spectrometer at the same speed. Which lands farther out?`]: {
    question: r`Singly charged carbon-12 and carbon-14 ions enter a spectrometer's uniform field at the same speed, and each travels a half circle before striking the detector. Carbon-12 strikes 48 cm from the entry slit. Where does carbon-14 strike?`,
    options: [r`48 cm from the slit`, r`41 cm from the slit`, r`52 cm from the slit`, r`56 cm from the slit`],
    correctAnswer: 3,
    explanation: r`The landing distance is the diameter 2r, and $r = mv/(qB)$ is proportional to mass at fixed speed and charge, so it scales by 14/12: 48 × 14/12 = 56 cm. The 41 cm answer inverts the ratio and puts the heavier ion closer in. The 52 cm answer uses the square root of the mass ratio, which applies to ions of equal kinetic energy, and 48 cm ignores mass altogether.`,
  },
  [r`Contrast a motor with a generator in energy terms.`]: {
    question: r`During regenerative braking, an electric car's turning wheels spin the coil of its drive machine in a magnetic field, and current flows back into the battery. In this mode the machine is acting as:`,
    options: [
      r`a generator, converting mechanical energy to electrical`,
      r`a motor, converting mechanical energy to electrical`,
      r`a generator, converting electrical energy to mechanical`,
      r`a motor, converting electrical energy to mechanical`,
    ],
    correctAnswer: 0,
    explanation: r`Mechanical rotation is changing the flux through the coil and producing electrical energy, which is what a generator does. A motor runs the other way, taking in electrical energy and producing torque. The two mixed answers attach a device name to the wrong direction of energy conversion.`,
  },
  [r`Transformers work only with {{c1::alternating}} current, because a constant flux induces no emf.`]: {
    question: r`A 12 V car battery is connected across the primary of an ideal transformer whose secondary has ten times as many turns. A few seconds after the connection is made, the voltage across the secondary is:`,
    options: [
      r`120 V, since voltage scales with the turns ratio`,
      r`0 V, since a steady current gives constant flux`,
      r`1.2 V, since voltage scales inversely with turns`,
      r`12 V, since the same flux links both of the coils`,
    ],
    correctAnswer: 1,
    explanation: r`A battery drives a steady current, so after a brief pulse at switch-on the flux in the core is constant and no emf is induced in the secondary. The 120 V answer applies the turns ratio, which holds only for alternating current. The 1.2 V answer inverts that ratio, and 12 V forgets that a shared flux must be changing to induce anything.`,
  },
  [r`Why does MRI image hydrogen nuclei rather than other nuclei?`]: {
    question: r`A research scanner is retuned to image sodium-23 nuclei instead of hydrogen. Its images of the same patient are far noisier, mainly because:`,
    options: [
      r`sodium nuclei are radioactive and decay before detection`,
      r`sodium nuclei are charged and get swept out of the bore`,
      r`sodium nuclei have no spin and cannot precess in a field`,
      r`sodium nuclei are far scarcer and give a weaker signal each`,
    ],
    correctAnswer: 3,
    explanation: r`Hydrogen is imaged because it is abundant in water and fat and has a large magnetic moment, so it returns a strong signal. Sodium is present at much lower concentration and each nucleus responds more weakly. Sodium-23 is stable, the field does not sweep ions out of tissue, and the nucleus must have spin or it could not be imaged at all.`,
  },
  [r`What do gradient coils contribute to MRI?`]: {
    question: r`During a scan, a gradient coil makes the field slightly stronger at the patient's head than at the feet. Compared with hydrogen nuclei at the feet, those at the head:`,
    options: [
      r`precess at a higher frequency, which marks their position`,
      r`precess at a lower frequency, which marks their position`,
      r`precess at the same frequency but give a louder signal`,
      r`stop precessing, so that only the feet appear in the image`,
    ],
    correctAnswer: 0,
    explanation: r`Precession frequency is proportional to field strength, so nuclei in the stronger field at the head precess faster, and the scanner reads frequency as position. A lower frequency has the proportionality backward. Without a frequency difference the signal would carry no location, and a gradient never stops precession.`,
  },
  [r`Compare the radiation risks of MRI and CT.`]: {
    question: r`A child needs a soft-tissue scan repeated every few months for several years, and the physician wants to avoid cumulative DNA damage. Which statement is correct?`,
    options: [
      r`Each MRI adds ionizing dose; each CT scan adds none`,
      r`Both CT and MRI add an ionizing dose with every scan`,
      r`Each CT scan adds ionizing dose; each MRI adds none`,
      r`Neither CT nor MRI uses radiation that can ionize DNA`,
    ],
    correctAnswer: 2,
    explanation: r`CT uses X-rays, which are ionizing and can damage DNA, so the dose adds up over repeated scans. MRI uses a static field and radio waves, whose photons are far too weak to ionize. The swapped answer assigns the X-rays to the wrong scanner, and the other two treat the two machines as if they used the same kind of radiation.`,
  },
  [r`Two parallel wires carrying current in the same direction {{c1::attract}} one another.`]: {
    question: r`A loosely wound coil of springy wire hangs vertically. When a steady current is switched on, neighboring turns carry current in the same direction. The coil:`,
    options: [
      r`lengthens, because neighboring turns repel one another`,
      r`keeps its length, because a steady current exerts no force`,
      r`twists sideways, because each turn feels a net torque`,
      r`shortens, because neighboring turns attract one another`,
    ],
    correctAnswer: 3,
    explanation: r`Adjacent turns are parallel currents in the same direction, and such currents attract, so the turns pull together and the coil shortens. Lengthening would need antiparallel currents, which repel. A steady current does exert magnetic force on a nearby current, and the pull between turns is along the coil's axis, not a twist.`,
  },
  [r`Name three ways to change the flux through a loop and induce an emf.`]: {
    question: r`A flexible circular loop lies in a steady uniform field with its plane perpendicular to the field. A student pulls two opposite points outward so that the loop collapses into a thin sliver. While it collapses, is an EMF induced?`,
    options: [
      r`No, because the field strength stays constant`,
      r`Yes, because the enclosed area is changing`,
      r`No, because the loop is not being rotated`,
      r`Yes, because the wire's resistance is rising`,
    ],
    correctAnswer: 1,
    explanation: r`Flux is field times area times the cosine of the tilt, and here the enclosed area shrinks, so the flux changes and an EMF is induced. A constant field and a fixed orientation rule out only two of the three ways to change flux. Resistance affects how much current flows, not whether an EMF appears.`,
  },
  [r`Faraday's law gives $\varepsilon = -N\Delta\Phi/\Delta t$, where the minus sign encodes {{c1::Lenz's law}}.`]: {
    question: r`The flux through each turn of a 50-turn coil rises steadily by 0.02 Wb over 0.1 s. Which statement describes the induced EMF?`,
    options: [
      r`0.2 V, driving a current whose field opposes the rise`,
      r`0.2 V, driving a current whose field adds to the rise`,
      r`10 V, driving a current whose field opposes the rise`,
      r`10 V, driving a current whose field adds to the rise`,
    ],
    correctAnswer: 2,
    explanation: r`The size is 50 × 0.02 / 0.1 = 10 V, and the minus sign in Faraday's law is Lenz's law: the induced current opposes the change in flux. The 0.2 V answers leave out the 50 turns. A current whose field added to the rise would feed its own growth and violate energy conservation.`,
  },
  [r`State Lenz's law in terms of what the induced current opposes.`]: {
    question: r`An electromagnet beneath a horizontal copper ring sends its field upward through the ring. The magnet's current is slowly turned down. At the ring's center, the field created by the ring's own induced current points:`,
    options: [
      r`upward, opposing the decrease in upward flux`,
      r`downward, opposing the upward applied field`,
      r`downward, reinforcing the decrease in flux`,
      r`nowhere, since only a growing field induces`,
    ],
    correctAnswer: 0,
    explanation: r`The induced current opposes the change in flux, not the field itself. The upward flux is shrinking, so the ring's field points upward to replace what is being lost. A downward field would oppose the applied field but speed up the change, which Lenz's law forbids, and a falling flux induces a current just as a rising one does.`,
  },
  [r`Why does a magnet dropped down a copper pipe fall unusually slowly?`]: {
    question: r`Identical strong magnets are dropped down two vertical pipes of the same size, one aluminum (a nonmagnetic metal) and one plastic. How do the two falls compare?`,
    options: [
      r`Equal in both, since neither pipe is ferromagnetic`,
      r`Slower in plastic, since charge builds up on its wall`,
      r`Slower in aluminum, since the metal attracts the magnet`,
      r`Slower in aluminum, since eddy currents oppose the fall`,
    ],
    correctAnswer: 3,
    explanation: r`The falling magnet changes the flux through each ring of the conducting pipe, inducing eddy currents whose fields oppose its motion. Plastic is an insulator, so no currents flow and the magnet falls freely. The braking needs a conductor rather than a ferromagnet, and aluminum does not attract a magnet at rest.`,
  },
  [r`A bar magnet's north pole approaches a wire loop. What does the induced current do?`]: {
    question: r`A bar magnet falls south pole first toward a closed copper ring lying flat on a table. While the magnet is still above the ring, the ring's upper face acts as a:`,
    options: [
      r`north pole, pulling down on the falling magnet`,
      r`south pole, pushing up on the falling magnet`,
      r`north pole, pushing up on the falling magnet`,
      r`south pole, pulling down on the falling magnet`,
    ],
    correctAnswer: 1,
    explanation: r`The induced current opposes the growing flux by making the face nearest the magnet the same kind of pole as the one approaching, here a south pole, so the magnet is repelled. A north pole on that face would attract the magnet and speed it up, giving energy from nothing. Like poles repel, so a south face cannot pull down and a north face cannot push up.`,
  },
  [r`After a velocity selector, why does a mass spectrometer separate ions by mass?`]: {
    question: r`A mass spectrometer is run with its velocity selector switched off, and two singly charged ions of different mass strike exactly the same spot. This is possible if the two ions have:`,
    options: [
      r`equal speeds on entering the analyzer field`,
      r`equal kinetic energies on entering the field`,
      r`equal momenta on entering the analyzer field`,
      r`equal accelerations inside the analyzer field`,
    ],
    correctAnswer: 2,
    explanation: r`Since $r = mv/(qB)$, ions of equal charge follow the same radius whenever their momenta mv are equal, so a light fast ion can mimic a heavy slow one. That is why the selector first fixes the speed, making radius depend on mass alone. Equal speeds, equal kinetic energies or equal accelerations with different masses all give different momenta and so different radii.`,
  },
  [r`A doubly charged ion follows a radius {{c1::half}} that of a singly charged ion of the same mass and speed.`]: {
    question: r`In a mass spectrometer, Mg⁺ ions follow a circular path of radius 30 cm. Mg²⁺ ions of the same mass enter the same field at the same speed. What is their path radius?`,
    options: [r`15 cm`, r`60 cm`, r`30 cm`, r`7.5 cm`],
    correctAnswer: 0,
    explanation: r`Radius is $mv/(qB)$, inversely proportional to charge, so doubling the charge halves the radius to 15 cm. The 60 cm answer makes radius proportional to charge, 30 cm ignores charge, and 7.5 cm divides by the charge squared.`,
  },
  [r`What is the role of the strong static field in an MRI scanner?`]: {
    question: r`An MRI scanner's main magnet is shut down, but its radiofrequency and gradient coils still work. Why can it no longer form an image?`,
    options: [
      r`Spins stay aligned, but nothing can localize their signal`,
      r`Spins are ionized by the pulses with no field to shield them`,
      r`Spins precess too quickly for the receiver coil to follow`,
      r`Spins point randomly, so there is no net magnetization to tip`,
    ],
    correctAnswer: 3,
    explanation: r`The static field is what lines the hydrogen spins up and gives the tissue a small net magnetization for the RF pulse to tip. Without it the spins point in random directions and their signals cancel. Localizing the signal is the gradient coils' job, radio pulses do not ionize, and with no field the spins do not precess at all.`,
  },
  [r`MRI excites protons with a radiofrequency pulse tuned to the {{c1::Larmor}} frequency, proportional to field strength.`]: {
    question: r`A 3 T scanner's transmitter is mistakenly set to the radiofrequency used on a 1.5 T scanner. How many of the patient's hydrogen spins does the pulse tip?`,
    options: [
      r`All, since any radio pulse carries enough energy`,
      r`Half, since the pulse carries half the needed energy`,
      r`Almost none, since the pulse is far off resonance`,
      r`All, though they then relax back in half the time`,
    ],
    correctAnswer: 2,
    explanation: r`Spins absorb only at the Larmor frequency, which is proportional to field strength, so at 3 T it is double the 1.5 T value and the mistuned pulse is not absorbed. Resonance is all or nothing in frequency, so a pulse at half the frequency does not flip half the spins. Excitation depends on matching the frequency, not on simply delivering radio energy.`,
  },
  [r`Magnetic flux through a loop is $\Phi =$ {{c1::$BA\cos\theta$}}, where $\theta$ is measured from the surface normal.`]: {
    question: r`A flat loop of area 0.1 m² sits in a uniform 2 T field whose field lines make a 30° angle with the PLANE of the loop. What is the flux through the loop? (cos 60° = 0.5, cos 30° ≈ 0.87)`,
    options: [r`0.17 Wb`, r`0.10 Wb`, r`0.20 Wb`, r`0.05 Wb`],
    correctAnswer: 1,
    explanation: r`The angle in the flux formula is measured from the normal, which is 90° − 30° = 60° from the field, so the flux is 2 × 0.1 × 0.5 = 0.10 Wb. The 0.17 Wb answer uses cos 30°, taking the angle from the plane. The 0.20 Wb answer leaves out the cosine, and 0.05 Wb applies the factor of one half twice.`,
  },
  [r`A rod of length $L$ moving at speed $v$ perpendicular to field $B$ generates motional emf $\varepsilon =$ {{c1::$BLv$}}.`]: {
    question: r`An aircraft with a 30 m wingspan flies horizontally at 200 m/s where the vertical component of Earth's field is 5 × 10⁻⁵ T. What EMF appears between its wingtips?`,
    options: [r`0.3 V`, r`3 V`, r`0.01 V`, r`0.0015 V`],
    correctAnswer: 0,
    explanation: r`The wing is a conductor cutting across the vertical field, so the EMF is BLv = 5 × 10⁻⁵ × 30 × 200 = 0.3 V. The 0.01 V answer leaves out the wingspan, 0.0015 V leaves out the speed, and 3 V is a power-of-ten slip.`,
  },
  [r`In a velocity selector, undeflected particles satisfy $qE = qvB$, so the selected speed is $v =$ {{c1::$E/B$}}.`]: {
    question: r`An ion filter built from crossed electric and magnetic fields must let through only ions traveling at 2 × 10⁵ m/s. Its magnet supplies 0.05 T. How strong must the electric field between its plates be?`,
    options: [r`4 × 10⁶ V/m`, r`2.5 × 10⁻⁷ V/m`, r`1 × 10⁵ V/m`, r`1 × 10⁴ V/m`],
    correctAnswer: 3,
    explanation: r`Balancing qE against qvB gives E = vB = 2 × 10⁵ × 0.05 = 1 × 10⁴ V/m. The 4 × 10⁶ answer divides the speed by the magnetic field, 2.5 × 10⁻⁷ divides the magnetic field by the speed, and 1 × 10⁵ is a power-of-ten slip in the multiplication.`,
  },
  [r`How does transcranial magnetic stimulation excite neurons without any electrode touching the brain?`]: {
    question: r`A transcranial magnetic stimulation coil is held against the scalp. Which change would most increase the electric field induced in the cortex beneath it?`,
    options: [
      r`Holding the same peak current for twice as long`,
      r`Running a steady current of twice the peak value`,
      r`Reaching the same peak current in half the time`,
      r`Moving the coil twice as far away from the scalp`,
    ],
    correctAnswer: 2,
    explanation: r`The induced electric field follows the rate of change of flux through the tissue, so reaching the same current in half the time doubles it. Holding a current, or running a larger steady one, gives constant flux and induces nothing while it is steady. Moving the coil away weakens the field reaching the cortex.`,
  },
  [r`Two parallel wires carry current in opposite directions. Do they attract or repel?`]: {
    question: r`A long wire is bent into a hairpin so that its outgoing and returning halves run side by side, close together. When a large current flows, the two halves:`,
    options: [
      r`pull together, since their currents are equal in size`,
      r`push apart, since their currents run in opposite directions`,
      r`pull together, since their currents run in opposite directions`,
      r`feel no force, since the net current of the pair is zero`,
    ],
    correctAnswer: 1,
    explanation: r`The two halves of a hairpin carry the same current in opposite directions, and antiparallel currents repel, so the halves push apart. Attraction belongs to currents in the same direction, whatever their size. Each half still sits in the other's field and feels a force, even though the currents add to zero.`,
  },
  [r`An electromagnetic blood flowmeter reads a transverse voltage $V = BLv$, so its signal is proportional to {{c1::flow velocity}}.`]: {
    question: r`An electromagnetic flowmeter applies a 0.1 T field across an artery 5 mm in diameter and reads 0.2 mV across the vessel. Using V = BLv, how fast is the blood moving?`,
    options: [r`0.4 m/s`, r`2.5 m/s`, r`4 m/s`, r`0.04 m/s`],
    correctAnswer: 0,
    explanation: r`Solving for speed, v = V/(BL) = (2 × 10⁻⁴ V) / (0.1 T × 5 × 10⁻³ m) = 0.4 m/s. The 2.5 m/s answer inverts the ratio. The 4 m/s and 0.04 m/s answers come from slips in converting millimeters or millivolts.`,
  },
  [r`Ions accelerated through the same potential difference then bent by the same field: heavier ions follow {{c1::larger}} radii.`]: {
    question: r`Ions X and Y have the same charge, but Y has four times the mass of X. Both are accelerated from rest through the same potential difference and then enter the same uniform magnetic field. The radius of Y's path is:`,
    options: [
      r`the same as X's, since both gain equal kinetic energy`,
      r`half of X's, since the heavier ion is moving half as fast`,
      r`four times X's, since radius is proportional to mass`,
      r`twice X's, since Y has half the speed but twice the momentum`,
    ],
    correctAnswer: 3,
    explanation: r`Equal charge and voltage give equal kinetic energy, so the ion with four times the mass has half the speed and a momentum of 4 × ½ = 2 times as large. Radius is momentum over qB, so it doubles. Equal energy does not mean equal radius, the half answer tracks speed alone, and the fourfold answer forgets that the heavier ion is slower.`,
  },
  [r`Induced emf depends on the {{c1::rate of change}} of flux, so a loop sitting motionless in a huge steady field has no induced emf at all.`]: {
    question: r`Loop P sits motionless in a steady 5 T field. An identical loop Q sits in a field that rises from 0 to 0.01 T in one millisecond. Which loop has the larger induced EMF?`,
    options: [
      r`Loop P, since EMF is proportional to the flux enclosed`,
      r`Neither, since both of the loops are sitting motionless`,
      r`Loop Q, since EMF follows the rate of change of the flux`,
      r`Both equally, since each loop encloses a magnetic field`,
    ],
    correctAnswer: 2,
    explanation: r`EMF depends on how fast the flux changes, not on how much flux there is. Loop P has a large but constant flux and so no EMF at all, while loop Q's small flux changes quickly. A motionless loop can still have a changing flux if the field itself changes.`,
  },
  [r`An ideal transformer with a $10{:}1$ turns ratio cuts voltage tenfold and multiplies current by {{c1::10}}, because power is conserved.`]: {
    question: r`An ideal step-down transformer has a 20:1 turns ratio. Its primary draws 0.5 A at 240 V. What are the secondary voltage and current?`,
    options: [r`12 V and 0.025 A`, r`12 V and 10 A`, r`4800 V and 10 A`, r`4800 V and 0.025 A`],
    correctAnswer: 1,
    explanation: r`Stepping down by 20 gives 240/20 = 12 V, and conserving power (120 W in, 120 W out) requires 20 times the current, 10 A. Dividing both voltage and current by 20 would lose power. The 4800 V answers step the voltage up instead of down.`,
  },
  [r`Power is transmitted at very high voltage because line losses scale as {{c1::$I^2R$}}.`]: {
    question: r`A power line delivers a fixed amount of power. Engineers raise the transmission voltage to five times its old value. The power wasted as heat in the line's resistance becomes:`,
    options: [
      r`1/25 of its old value, since the current falls to 1/5`,
      r`1/5 of its old value, since the current falls to 1/5`,
      r`5 times its old value, since loss rises with voltage`,
      r`25 times its old value, since loss goes as V² over R`,
    ],
    correctAnswer: 0,
    explanation: r`For fixed delivered power P = IV, five times the voltage means one fifth of the current, and line loss goes as I²R, so it falls to 1/25. The 1/5 answer forgets to square the current. The two answers that predict a larger loss apply V²/R with the transmission voltage, which is not the voltage dropped across the line's own resistance.`,
  },
  [r`MRI images hydrogen in water and fat, so {{c1::cortical bone}} and air-filled lung return little signal and appear dark.`]: {
    question: r`On an MRI image of the thigh, which of these structures returns the least signal and so appears darkest?`,
    options: [
      r`Fatty yellow marrow inside the femur`,
      r`Quadriceps muscle in front of the femur`,
      r`Subcutaneous fat lying under the skin`,
      r`Dense cortical bone of the femur's shaft`,
    ],
    correctAnswer: 3,
    explanation: r`MRI signal comes from mobile hydrogen in water and fat. Cortical bone is mostly mineral with very few mobile protons, so it returns almost nothing and looks dark. Marrow and subcutaneous fat are rich in fat hydrogen and muscle is rich in water, so all three give plenty of signal.`,
  },
  [r`Protons precess at about $42.6$ MHz per tesla, so a $1.5$ T MRI uses radiofrequency near {{c1::64 MHz}}.`]: {
    question: r`Protons precess at about 42.6 MHz per tesla. A research scanner operates at 2 T. Its radiofrequency pulses should be tuned to about:`,
    options: [r`21 MHz`, r`85 MHz`, r`43 MHz`, r`64 MHz`],
    correctAnswer: 1,
    explanation: r`Larmor frequency is proportional to field strength: 42.6 × 2 ≈ 85 MHz. The 21 MHz answer divides by the field instead of multiplying, 43 MHz is the value for 1 T, and 64 MHz is the value for a 1.5 T scanner.`,
  },
  [r`Why are pacemakers, ferromagnetic implants, and loose steel objects hazardous near an MRI magnet?`]: {
    question: r`An MRI scanner is idle between patients: no scan is running and no gradient or RF pulses are being produced. A nurse walks toward the bore with steel scissors in a pocket. Is there a hazard?`,
    options: [
      r`No, since only RF pulses during a scan act on steel`,
      r`No, since only switching gradients can move the steel`,
      r`Yes, since the static field is on and pulls on steel`,
      r`Yes, since an idle magnet emits ionizing radiation`,
    ],
    correctAnswer: 2,
    explanation: r`The strong static field is always on, and it pulls and twists ferromagnetic objects whether or not a scan is running, so the scissors can become a projectile. The gradient and RF fields matter for induced currents and heating, not for this attraction. MRI magnets emit no ionizing radiation at any time.`,
  },
  [r`Why must ECG lead wires never be looped inside an MRI bore?`]: {
    question: r`A monitoring cable on a patient's chest accidentally forms a closed loop inside an MRI bore. The technician rearranges it so that the loop encloses one quarter of its former area. The EMF induced in the loop by the switching gradients becomes:`,
    options: [
      r`one quarter as large, since it encloses less changing flux`,
      r`four times as large, since a smaller loop concentrates flux`,
      r`unchanged, since the EMF depends only on the gradient field`,
      r`one half as large, since EMF goes as the loop's diameter`,
    ],
    correctAnswer: 0,
    explanation: r`By Faraday's law the EMF is the rate of change of flux, and flux is field times enclosed area, so a quarter of the area gives a quarter of the EMF. This is why leads are kept straight and unlooped. A smaller loop does not concentrate flux, the EMF depends on area as well as on the field, and it scales with area rather than diameter.`,
  },
  [r`A motor does mechanical work, yet magnetic forces do no work on moving charges. Resolve the apparent contradiction.`]: {
    question: r`A battery-powered motor lifts a load. The magnetic force on each moving charge in its coil is perpendicular to that charge's velocity and so does no work. What supplies the energy that lifts the load?`,
    options: [
      r`The magnets, which slowly lose their stored field energy`,
      r`The magnetic field, which does work on the wire as a whole`,
      r`The back emf, which pushes extra current through the coil`,
      r`The battery, which drives current against the back emf`,
    ],
    correctAnswer: 3,
    explanation: r`The magnetic force only redirects the charges. The energy comes from the battery, which must push current against the back emf of the turning coil, and the field passes that energy on as rotation. The magnets are not drained, the field itself does no net work, and the back emf opposes the current instead of adding to it.`,
  },
  [r`A copper ring rests on the core of an electromagnet and the current is switched on. What happens to the ring?`]: {
    question: r`A copper ring sits on the iron core of an electromagnet that has carried a steady current for some time. The current is then switched off. At that moment the ring is:`,
    options: [
      r`pushed away from the coil, then feels no further force`,
      r`pushed away from the coil for as long as the current is off`,
      r`pulled toward the coil briefly, then feels no further force`,
      r`left unaffected, because copper is not a magnetic metal`,
    ],
    correctAnswer: 2,
    explanation: r`At switch-off the flux through the ring falls, so the induced current flows to maintain it, in the same sense as the coil's dying current, and parallel currents attract. Once the flux stops changing there is no current and no force. A push away happens at switch-on, when flux rises, and copper responds through induced current even though it is not ferromagnetic.`,
  },
  [r`A conducting loop is pulled out of a field region. Which way does the induced current flow, and does pulling require work?`]: {
    question: r`A wire loop is pulled out of a region of uniform magnetic field at a constant 2 m/s, which takes a steady pull of 0.5 N. At what rate is thermal energy produced in the loop?`,
    options: [
      r`0 W, since a magnetic force can never do any work`,
      r`1 W, since all the work done by the pull becomes heat`,
      r`0.25 W, since the rate is the force divided by speed`,
      r`4 W, since the rate is the speed divided by the force`,
    ],
    correctAnswer: 1,
    explanation: r`The induced current feels a magnetic force opposing the motion, so the puller does work at the rate Fv = 0.5 × 2 = 1 W. At constant speed none of it goes into kinetic energy, so all of it becomes resistive heating. The 0.25 W and 4 W answers divide instead of multiplying, and 0 W ignores the external work that the pull supplies.`,
  },
  [r`Why does an MRI scanner bang loudly during a scan?`]: {
    question: r`The same gradient pulse sequence, with identical coil currents, is run on a 3 T scanner instead of a 1.5 T scanner. The force on each segment of the gradient windings:`,
    options: [
      r`doubles, since F = ILB is proportional to the field`,
      r`quadruples, since the force goes as the field squared`,
      r`is unchanged, since it is set by the coil current alone`,
      r`halves, since a stronger field holds the coil more firmly`,
    ],
    correctAnswer: 0,
    explanation: r`Each winding carries pulsed current in the static field and feels F = ILB, so doubling the field doubles the force and the coils vibrate harder. The force is linear in the field, not squared, and it depends on the field as well as on the current. A stronger field pushes harder on a current instead of holding it still.`,
  },
}
