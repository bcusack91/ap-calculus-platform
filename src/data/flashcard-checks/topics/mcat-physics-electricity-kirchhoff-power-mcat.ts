import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-physics-electricity-kirchhoff-power-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`For two resistors in series across a voltage $V$, the voltage across $R_1$ is the total $V$ multiplied by {{c1::$R_1/(R_1 + R_2)$}}.`]: {
    question: r`A stage dimmer is set to 40 Ω and wired in series with a 120 Ω lamp across a 120 V line. Treating the lamp's resistance as constant, what is the voltage across the lamp?`,
    options: [r`30 V`, r`40 V`, r`90 V`, r`60 V`],
    correctAnswer: 2,
    explanation: r`Series resistors share voltage in proportion to resistance, so the lamp takes 120/(120 + 40) = 3/4 of the line, which is 90 V. The value 30 V belongs to the dimmer, 40 V uses the ratio of one resistance to the other without the sum, and 60 V splits the line evenly.`,
  },
  [r`A $12$ V ideal battery feeds a $2\,\Omega$ resistor in series with a parallel pair of $6\,\Omega$ and $3\,\Omega$. Find the current in each parallel branch.`]: {
    question: r`A 20 V ideal supply is wired to a 6 Ω limiting resistor. After that resistor the path splits through a 20 Ω heating pad and a 5 Ω heating pad, then rejoins and returns to the supply. How much current passes through the 5 Ω pad?`,
    options: [r`1.6 A`, r`0.4 A`, r`4.0 A`, r`1.0 A`],
    correctAnswer: 0,
    explanation: r`The pads combine to (20)(5)/25 = 4 Ω, so the total is 10 Ω and 2 A flows. The limiting resistor drops 12 V, leaving 8 V across the pads, and 8/5 = 1.6 A. The value 0.4 A is the 20 Ω pad, 4.0 A puts the full 20 V across the 5 Ω pad, and 1.0 A splits the 2 A evenly.`,
  },
  [r`$5.0$ mA enters a $1\,\text{k}\Omega$ muscle path in parallel with a $4\,\text{k}\Omega$ fat path. How much current goes through the muscle path?`]: {
    question: r`A current of 6 mA reaches a junction and divides between a 2 kΩ path and a 10 kΩ path connected in parallel. How much current flows in the 10 kΩ path?`,
    options: [r`5 mA`, r`3 mA`, r`1.2 mA`, r`1 mA`],
    correctAnswer: 3,
    explanation: r`Current divides in inverse proportion to resistance, so the 10 kΩ path gets 6 × 2/(2 + 10) = 1 mA: the other resistor goes in the numerator. The value 5 mA puts the path's own resistance on top, 3 mA splits evenly, and 1.2 mA uses the ratio 2/10 without the sum.`,
  },
  [r`Solving Kirchhoff's equations gives a negative value for a current whose direction you guessed. What does that mean?`]: {
    question: r`A loop contains a 6 V battery, a 10 V battery and a 2 Ω resistor. A student guesses that the current is clockwise and, walking clockwise, correctly writes +6 − 10 − 2I = 0. What current flows in the loop?`,
    options: [r`2 A, flowing clockwise`, r`2 A, flowing counterclockwise`, r`8 A, flowing counterclockwise`, r`8 A, flowing clockwise`],
    correctAnswer: 1,
    explanation: r`Solving gives I = −2 A, and the negative sign means the current runs opposite to the guess: 2 A counterclockwise, with the magnitude still correct. Keeping the guessed direction ignores the sign, and the 8 A answers add the two battery voltages even though they oppose.`,
  },
  [r`A $9$ V and a $3$ V battery push in opposite directions in one loop with a $2\,\Omega$ resistor. What is the current?`]: {
    question: r`A 20 V ideal source and a second ideal source of unknown emf are wired against each other in a loop whose only resistance is 5 Ω. An ammeter reads 2 A, flowing the way the 20 V source pushes. What is the unknown emf?`,
    options: [r`10 V`, r`30 V`, r`18 V`, r`22 V`],
    correctAnswer: 0,
    explanation: r`Opposing sources subtract: 20 − ε − (2)(5) = 0, so ε = 10 V. The value 30 V adds the 10 V resistor drop to the 20 V as if the sources helped each other, while 18 V and 22 V subtract or add the 2 A reading directly without multiplying by the resistance.`,
  },
  [r`A $9$ V battery drives current through $1\,\text{k}\Omega$ (at its positive terminal) and then $2\,\text{k}\Omega$ in series. The node between them is grounded. What is the potential of the negative terminal?`]: {
    question: r`Three ideal 1.5 V cells are stacked in series to make a 4.5 V pack. A technician clips the ground lead to the connection between the first and second cells, counting from the negative end. What are the potentials of the pack's negative and positive ends?`,
    options: [r`0 V and +4.5 V`, r`−3.0 V and +1.5 V`, r`−1.5 V and +3.0 V`, r`+1.5 V and +3.0 V`],
    correctAnswer: 2,
    explanation: r`Ground only fixes where zero is: one cell lies below the grounded point and two lie above it, so the ends sit at −1.5 V and +3.0 V, still 4.5 V apart. The answer 0 V and +4.5 V assumes ground is always the negative end, −3.0 V and +1.5 V counts the cells from the wrong end, and +1.5 V and +3.0 V no longer differ by 4.5 V.`,
  },
  [r`A $2000$ W space heater runs for $5$ hours at 15 cents per kilowatt-hour. What does it cost?`]: {
    question: r`Running one clothes dryer for a total of 20 hours adds 6.00 dollars to a monthly bill. The utility charges 25 cents per kilowatt-hour. What is the power rating of the dryer?`,
    options: [r`120 W`, r`1200 W`, r`480 W`, r`7500 W`],
    correctAnswer: 1,
    explanation: r`600 cents at 25 cents per kWh is 24 kWh of energy, and P = E/t = 24 kWh / 20 h = 1.2 kW = 1200 W. The value 480 multiplies 24 by 20 instead of dividing, 120 W slips a decimal place in converting kilowatts, and 7500 comes from multiplying 600 by 25 and dividing by 2.`,
  },
  [r`Approximate body-current thresholds: about {{c1::1 mA}} is perceptible, and about {{c2::100 mA}} across the chest can trigger ventricular fibrillation.`]: {
    question: r`A leakage fault sends 1 mA through a patient's chest. A second, worse fault sends 100 mA along the same path. What is the best prediction for the two events?`,
    options: [r`The first is barely felt; the second can cause fibrillation`, r`Both are barely felt, since each is well below one ampere`, r`Both can cause fibrillation, since each exceeds a microampere`, r`The first can cause fibrillation; the second is barely felt`],
    correctAnswer: 0,
    explanation: r`About 1 mA is the threshold of perception, and about 100 mA across the chest can trigger ventricular fibrillation. Calling both harmless assumes danger starts near an ampere, calling both lethal places the fibrillation threshold far too low, and the last choice reverses the two thresholds.`,
  },
  [r`A $120$ V shock passes hand to hand. The body path is $10^5\,\Omega$ with dry skin and $10^3\,\Omega$ with wet skin. Compare the currents.`]: {
    question: r`A person touches a 60 V source. With dry skin the resistance of the body path is 60 kΩ, and sweating lowers it to 600 Ω. What current flows in each case?`,
    options: [r`100 mA dry and 1 mA wet`, r`1 mA dry and 10 mA wet`, r`1 mA dry and 1 mA wet`, r`1 mA dry and 100 mA wet`],
    correctAnswer: 3,
    explanation: r`I = V/R gives 60/60,000 = 1 mA with dry skin and 60/600 = 0.1 A = 100 mA with wet skin: the voltage is the same and only the resistance changed. The reversed answer gives the larger current to the larger resistance, 10 mA is a power-of-ten slip, and equal currents assume voltage alone sets the current.`,
  },
  [r`Bulb A is in series with identical bulbs B and C in parallel, all across an ideal battery. C burns out. What happens to A and B?`]: {
    question: r`Lamp P is wired in series with a parallel combination of lamps Q and R across a 6 V ideal supply. All three lamps are identical. Lamp R is then unscrewed from its socket. What is the voltage across lamp Q before and after?`,
    options: [r`3 V before and 2 V after`, r`2 V before and 2 V after`, r`2 V before and 3 V after`, r`2 V before and 6 V after`],
    correctAnswer: 2,
    explanation: r`Before, the pair is R/2 in series with R, so the pair gets one third of 6 V, which is 2 V. After, Q alone is in series with P and each gets half, 3 V, so Q brightens while P dims from 4 V to 3 V. The reversed answer swaps the two cases, an unchanged 2 V treats Q as independent of its neighbor, and 6 V forgets lamp P in series.`,
  },
  [r`Each of $n$ identical bulbs in series on an ideal source dissipates {{c1::$P_0/n^2$}}, where $P_0$ is one bulb's power when connected alone.`]: {
    question: r`A bulb connected alone to an ideal source dissipates 48 W. Four such bulbs are then connected in series across the same source. Treating each bulb's resistance as constant, what power does each one dissipate?`,
    options: [r`12 W`, r`48 W`, r`192 W`, r`3 W`],
    correctAnswer: 3,
    explanation: r`Each bulb gets one quarter of the voltage, and P = V²/R squares that factor, so each dissipates 48/16 = 3 W. The value 12 W divides by 4 without squaring, 48 W is what each would keep in parallel, and 192 W multiplies by the number of bulbs.`,
  },
  [r`A heater on a fixed-voltage outlet gets a new element with half the resistance. What happens to the power it draws?`]: {
    question: r`A 400 W immersion coil on a fixed-voltage outlet breaks at its midpoint. A technician reconnects only half of the coil's length to the same outlet. Treating resistivity as constant, what power does the half coil draw?`,
    options: [r`200 W`, r`800 W`, r`400 W`, r`1600 W`],
    correctAnswer: 1,
    explanation: r`Half the length means half the resistance, and at fixed voltage P = V²/R, so the power doubles to 800 W. The value 200 W comes from P = I²R with the current wrongly held fixed, 400 W assumes the outlet sets the power, and 1600 W squares the factor of two.`,
  },
  [r`A wire connected across one branch of a parallel bank shorts {{c1::every branch of the bank}}.`]: {
    question: r`Bulbs X, Y and Z are connected in parallel with one another, and this bank is in series with bulb W across an ideal battery. A wire of negligible resistance is connected directly across bulb Y. Which bulbs stay lit?`,
    options: [r`Only W stays lit`, r`W, X and Z stay lit`, r`Only X and Z stay lit`, r`All four stay lit`],
    correctAnswer: 0,
    explanation: r`X, Y and Z share the same two nodes, so a wire across Y puts 0 V across all three and they all go dark, while W now has the full battery voltage and stays lit. Keeping X and Z lit treats the short as affecting one branch only, and the other choices also overlook that the wire joins the bank's two shared nodes.`,
  },
  [r`A $24$ V ideal source drives a $2\,\Omega$ resistor in series with two $4\,\Omega$ resistors in parallel. One $4\,\Omega$ resistor fails open. What happens to the current in the other?`]: {
    question: r`A 30 V ideal source drives a 5 Ω resistor in series with two 10 Ω resistors connected in parallel. One of the 10 Ω resistors fails open. What happens to the current in the other 10 Ω resistor?`,
    options: [r`It falls from 3 A to 2 A`, r`It stays constant at 1.5 A`, r`It rises from 1.5 A to 3 A`, r`It rises from 1.5 A to 2 A`],
    correctAnswer: 3,
    explanation: r`Before, the total is 5 + 5 = 10 Ω, so 3 A splits into 1.5 A per branch. After, the total is 15 Ω and all 2 A passes through the survivor. A fall from 3 A to 2 A describes the total current, a constant 1.5 A assumes the branches are independent, and a rise to 3 A assumes the total current never changed.`,
  },
  [r`A resistor $R_s$ sits in series in front of a parallel bank. A new branch is added to the bank. What happens to the current in each original branch?`]: {
    question: r`Several lamps are plugged into a power strip, so they are in parallel, and the strip is fed through a long extension cord with noticeable resistance. A heater is then plugged into the same strip. What happens to the lamps?`,
    options: [r`They dim, because the cord now drops more voltage`, r`They brighten, because the total current has risen`, r`They are unchanged, because parallel branches are independent`, r`They dim, because the total current from the outlet falls`],
    correctAnswer: 0,
    explanation: r`The added branch lowers the equivalent resistance, so the total current rises, the cord's resistance drops more voltage, and less is left across the lamps. Branches are independent only when they sit directly across an ideal source, a larger total current does not mean more for each lamp, and the total current rises rather than falls.`,
  },
  [r`What are the equivalent expressions for power dissipated by a resistor?`]: {
    question: r`An electric kettle draws 10 A from a 120 V outlet. What are the power it dissipates and the resistance of its heating element?`,
    options: [r`12 W and 1200 Ω`, r`1200 W and 1200 Ω`, r`1200 W and 12 Ω`, r`12 W and 12 Ω`],
    correctAnswer: 2,
    explanation: r`P = IV = (10)(120) = 1200 W and R = V/I = 12 Ω; the other forms agree, since I²R = 100 × 12 and V²/R = 14,400/12 are both 1200 W. The answers with 12 W divide voltage by current to get a power, and 1200 Ω multiplies voltage by current to get a resistance.`,
  },
  [r`Kirchhoff's junction rule is based on conservation of:`]: {
    question: r`Four wires meet at a junction. Two of them carry 0.8 A and 0.5 A into the junction, and a third carries 0.3 A out of it. What current does the fourth wire carry?`,
    options: [r`1.0 A entering the junction`, r`1.0 A leaving the junction`, r`1.6 A leaving the junction`, r`0.6 A entering the junction`],
    correctAnswer: 1,
    explanation: r`Charge is conserved and cannot pile up at a junction, so current in equals current out: 1.3 A enters, 0.3 A leaves, and the fourth wire must carry 1.0 A out. Having 1.0 A enter would leave 2.3 A in against 0.3 A out, 1.6 A adds all three currents, and 0.6 A mixes up the signs.`,
  },
  [r`The power dissipated by a 100 Ω resistor carrying 0.5 A of current is:`]: {
    question: r`A 50 Ω resistor carries a current of 0.2 A. How much power does it dissipate?`,
    options: [r`10 W`, r`20 W`, r`500 W`, r`2 W`],
    correctAnswer: 3,
    explanation: r`P = I²R = (0.2)²(50) = 0.04 × 50 = 2 W. The value 10 W is IR, which is the voltage and not the power, 20 W doubles the current instead of squaring it, and 500 W squares the resistance instead of the current.`,
  },
  [r`A fuse protects a circuit by:`]: {
    question: r`A car's 12 V accessory socket is protected by a 10 A fuse. A 60 W cooler is plugged in through a splitter, and then a 96 W air pump is switched on from the same socket. What happens?`,
    options: [r`13 A flows, so the fuse melts and opens the circuit`, r`13 A flows, so the fuse limits the current to 10 A`, r`6.5 A flows, so the fuse stays intact and both run`, r`13 A flows, so the fuse shuts off only the air pump`],
    correctAnswer: 0,
    explanation: r`The devices draw 60/12 + 96/12 = 5 + 8 = 13 A, above the rating, so the fuse melts and breaks the whole circuit. A fuse does not regulate the current or pick one device to disconnect, and 6.5 A comes from halving the true current.`,
  },
  [r`Traversing a resistor in the same direction as the current, what is the sign of the potential change?`]: {
    question: r`On a loop walk, one step goes from point X to point Y through a 5 Ω resistor that carries 2 A. The current in that resistor flows from Y to X. What potential change is recorded for this step?`,
    options: [r`−10 V`, r`+2.5 V`, r`+10 V`, r`−2.5 V`],
    correctAnswer: 2,
    explanation: r`The step goes against the current, so the potential rises by IR = (2)(5) = +10 V. The value −10 V is what walking with the current gives, and the 2.5 V answers divide the resistance by the current instead of multiplying.`,
  },
  [r`One bulb is in series with a parallel pair of identical bulbs. Which bulb is brightest?`]: {
    question: r`Three identical 6 Ω lamps are wired so that all the current from the supply passes through lamp P and then divides equally between lamps Q and R. Lamp P dissipates 24 W. How much power does lamp Q dissipate?`,
    options: [r`12 W`, r`6 W`, r`24 W`, r`48 W`],
    correctAnswer: 1,
    explanation: r`Lamp Q carries half of lamp P's current, and with equal resistances P = I²R makes its power one quarter: 24/4 = 6 W, so the lamp carrying the full current is the brightest. The value 12 W forgets to square the current, 24 W ignores the split, and 48 W gives the parallel lamp the larger share.`,
  },
  [r`For elements in series, compare power with $P =$ {{c1::$I^2R$}}, so the larger resistor dissipates more.`]: {
    question: r`A toaster's nichrome heating element (20 Ω) is in series with its copper cord (0.1 Ω). Where is more power dissipated, and why?`,
    options: [r`The element: one shared current, and larger R means larger I²R`, r`The cord: one shared current, and smaller R means larger I²R`, r`The cord: one shared voltage, and smaller R means larger V²/R`, r`The element: one shared voltage, and larger R means larger V²/R`],
    correctAnswer: 0,
    explanation: r`Series elements carry the same current, so P = I²R makes power proportional to resistance and the 20 Ω element takes nearly all of it. The choices built on a shared voltage apply the parallel rule to a series circuit, and a smaller R gives a smaller I²R, not a larger one.`,
  },
  [r`Why is current, not voltage, the quantity that determines the severity of electrical injury?`]: {
    question: r`A classroom electrostatic generator at 100,000 V gives a harmless spark, while a 120 V wall outlet can kill. Which statement best explains the difference?`,
    options: [r`The generator's voltage is too high to enter the body at all`, r`The outlet's voltage becomes larger once converted to rms`, r`The outlet's charges each carry more energy into the tissue`, r`The generator can drive only a tiny current through the body`],
    correctAnswer: 3,
    explanation: r`Injury depends on the charge that actually flows through tissue, and the generator can supply only a very small current for an instant, while the outlet can sustain a large one. High voltage does not stop current entering, 120 V is already the rms value, and energy per charge is the voltage, which is larger for the generator.`,
  },
  [r`Distinguish the kilowatt-hour from the watt.`]: {
    question: r`A 100 W lamp is left on for 10 hours. How much energy does it use, in joules?`,
    options: [r`1.0 × 10³ J`, r`3.6 × 10⁶ J`, r`3.6 × 10³ J`, r`6.0 × 10⁴ J`],
    correctAnswer: 1,
    explanation: r`E = Pt = (0.100 kW)(10 h) = 1 kWh, and 1 kWh = (1000 W)(3600 s) = 3.6 × 10⁶ J. The value 1.0 × 10³ multiplies watts by hours, which is not joules, 6.0 × 10⁴ converts the time to minutes, and 3.6 × 10³ drops the factor of 1000 in the kilowatt.`,
  },
  [r`A $60$ W and a $100$ W bulb rated for the same line voltage are wired in series. Which is brighter?`]: {
    question: r`A 40 W bulb and a 120 W bulb, both rated for a 120 V line, are wired in series across 120 V. Treating their resistances as constant, which bulb dissipates more power, and by what factor?`,
    options: [r`The 120 W bulb, with three times the power of the other`, r`The 40 W bulb, with nine times the power of the other`, r`The 40 W bulb, with three times the power of the other`, r`Neither bulb, since the shared current equalizes power`],
    correctAnswer: 2,
    explanation: r`From R = V²/P the 40 W bulb has three times the resistance (360 Ω against 120 Ω), and with the same current P = I²R gives it three times the power. Picking the 120 W bulb trusts ratings that hold only at the rated voltage, nine times squares the ratio, and equal current does not mean equal power.`,
  },
  [r`Kirchhoff's loop rule says potential changes around a closed loop sum to zero, expressing {{c1::energy conservation}}.`]: {
    question: r`A student's solution for a single loop has each coulomb gaining 9 J in the battery and losing 4 J and 3 J in the loop's only two resistors. Which principle shows that the solution must be wrong?`,
    options: [r`Conservation of energy, through the loop rule`, r`Conservation of charge, through the loop rule`, r`Conservation of energy, through the junction rule`, r`Conservation of charge, through the junction rule`],
    correctAnswer: 0,
    explanation: r`A charge that returns to its starting point must have its starting potential energy, so the changes around a loop sum to zero: that is the loop rule, a statement of energy conservation, and 9 − 4 − 3 is not zero. Charge conservation underlies the junction rule, which deals with currents at a node and not with voltages around a loop.`,
  },
  [r`How is total power delivered by a battery related to power dissipated in the resistors?`]: {
    question: r`In one minute an ideal battery delivers 600 J to a circuit made of just two resistive heating elements. The first element turns 360 J into heat in that minute. How much power does the second element dissipate?`,
    options: [r`6 W`, r`10 W`, r`240 W`, r`4 W`],
    correctAnswer: 3,
    explanation: r`Everything the battery delivers is dissipated in the resistors, so the second element gets 600 − 360 = 240 J in 60 s, which is 4 W. The value 6 W is the first element's power, 10 W is the battery's whole output, and 240 is the energy in joules without dividing by the time.`,
  },
  [r`A new resistor is added in parallel with an existing element. What happens to total current from the battery?`]: {
    question: r`A 12 V ideal battery is connected to a single 6 Ω resistor. A 12 Ω resistor is then added in parallel with it. What are the battery current and the current in the 6 Ω resistor afterward?`,
    options: [r`Battery current stays at 2 A; the 6 Ω carries 1.3 A`, r`Battery current rises to 3 A; the 6 Ω carries 1.5 A`, r`Battery current rises to 3 A; the 6 Ω carries 2 A`, r`Battery current falls to 0.67 A; the 6 Ω carries 0.67 A`],
    correctAnswer: 2,
    explanation: r`The 6 Ω resistor still has 12 V across it, so it still carries 2 A, and the new branch adds 12/12 = 1 A for a total of 3 A. A fixed 2 A total treats the battery as a current source, 1.5 A in the 6 Ω splits the total evenly, and 0.67 A adds the resistors as if they were in series.`,
  },
  [r`What condition trips a GFCI outlet, and why does an ordinary fuse not protect against the same hazard?`]: {
    question: r`A hair dryer draws 10.00 A in the hot wire. Because of a fault, only 9.98 A returns in the neutral wire and 20 mA passes through the user to ground. The circuit has a GFCI and a 15 A fuse. What happens?`,
    options: [r`The fuse blows; the GFCI does not trip`, r`The GFCI trips; the fuse does not blow`, r`Both the fuse and the GFCI open the circuit`, r`Neither the fuse nor the GFCI responds`],
    correctAnswer: 1,
    explanation: r`A GFCI compares the hot and neutral currents and trips on a difference of a few milliamps, and 20 mA is leaking here. The fuse responds only to a total current above 15 A, and 10 A is well under that, so the fuse alone would never notice the leak.`,
  },
  [r`If one of two identical bulbs wired in series burns out, {{c1::both go dark}}, because the single current path is broken.`]: {
    question: r`A string of 20 identical lamps is wired in series across a 120 V supply. The filament of one lamp breaks. What is the voltage across each of the other 19 lamps?`,
    options: [r`0 V, and every lamp is dark`, r`6 V, the same as before`, r`About 6.3 V, shared by 19 lamps`, r`120 V, the full supply value`],
    correctAnswer: 0,
    explanation: r`A break in a series string stops the single current everywhere, so each intact lamp has V = IR = 0 and all go dark. The 6 V answer assumes nothing changed, 6.3 V treats the broken lamp as a wire instead of a gap, and the full 120 V appears only across the broken filament.`,
  },
  [r`Two identical bulbs are in parallel across a battery and one burns out. What happens to the other bulb and to the total current?`]: {
    question: r`A car's two identical headlights are wired in parallel across its 12 V battery, and each draws 5 A. One filament fails. What are the current in the remaining headlight and the total current the battery now supplies to the headlights?`,
    options: [r`10 A in the headlight; 10 A in total`, r`2.5 A in the headlight; 2.5 A in total`, r`5 A in the headlight; 5 A in total`, r`5 A in the headlight; 10 A in total`],
    correctAnswer: 2,
    explanation: r`The surviving headlight still has the full 12 V across it, so it keeps its 5 A and its brightness, while the total falls from 10 A to 5 A because the equivalent resistance doubled. Answers with 10 A treat the battery as supplying a fixed current, and 2.5 A assumes the survivor's current falls with the total.`,
  },
  [r`Why is household wiring parallel rather than series?`]: {
    question: r`On a 120 V kitchen circuit, a 1200 W kettle and a 60 W lamp are plugged into neighboring outlets. The kettle is switched off. What happens to the lamp?`,
    options: [r`It brightens, since it now gets the kettle's share`, r`It is unchanged, since it still has 120 V across it`, r`It goes out, since the single current path is broken`, r`It dims, since the total circuit current has fallen`],
    correctAnswer: 1,
    explanation: r`Household outlets are wired in parallel, so every device has the full line voltage and works independently of the others. A broken single path describes a series circuit, and neither the kettle's former share of the current nor the lower total current changes the 120 V across the lamp.`,
  },
  [r`For household AC, $V_{rms} =$ {{c1::$V_{peak}/\sqrt{2}$}}, so a $120$ V outlet actually peaks near $170$ V.`]: {
    question: r`An AC source with a peak voltage of 20 V is connected across a 10 Ω resistor. What average power does the resistor dissipate?`,
    options: [r`40 W`, r`28 W`, r`10 W`, r`20 W`],
    correctAnswer: 3,
    explanation: r`V_rms = 20/√2, so V_rms² = 200 V² and P = V_rms²/R = 200/10 = 20 W. The value 40 W uses the peak voltage in V²/R, 28 W multiplies by √2 instead of dividing, and 10 W halves the correct result a second time.`,
  },
  [r`A third identical bulb is added in series to two bulbs already in series. What happens to the original two?`]: {
    question: r`Two identical bulbs in series across an ideal battery each dissipate 9 W. A third identical bulb is added in series. Treating resistance as constant, what power does each bulb dissipate now?`,
    options: [r`6 W`, r`4 W`, r`9 W`, r`13.5 W`],
    correctAnswer: 1,
    explanation: r`Each bulb's voltage falls from one half to one third of the battery voltage, and power goes as V², so each now dissipates 9 × (1/3)²/(1/2)² = 9 × 4/9 = 4 W. The value 6 W scales by 2/3 without squaring, 9 W assumes nothing changes, and 13.5 W scales the wrong way.`,
  },
}
