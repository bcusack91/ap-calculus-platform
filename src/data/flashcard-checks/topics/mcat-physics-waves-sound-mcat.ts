import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-physics-waves-sound-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`A vibrating surface pushing outward creates a {{c1::compression}} in the air; pulling back leaves a {{c2::rarefaction}}.`]: {
    question: r`A piston at one end of a long air-filled tube is pulled sharply back and then pushed sharply forward. What does a pressure sensor farther down the tube record as the disturbance passes?`,
    options: [r`a rise above normal pressure, then a dip below it`, r`a dip below normal pressure, then a rise above it`, r`a rise above normal pressure, then a second rise`, r`a dip below normal pressure, then a second dip`],
    correctAnswer: 1,
    explanation: r`Pulling the piston back leaves a region of lower pressure and density (a rarefaction), and pushing forward squeezes the air (a compression). They travel down the tube in the order they were made, so the sensor sees the dip first and then the rise. The reversed order swaps the two terms, and two rises or two dips ignore that the piston moved both ways.`,
  },
  [r`Human hearing spans about {{c1::20 Hz to 20 kHz}}; sound below that range is called {{c2::infrasound}}.`]: {
    question: r`A machine part vibrates with a period of 0.10 s and sends a wave of the same frequency into the air. What is the wave's frequency, and how is it classed?`,
    options: [r`10 Hz, which is audible`, r`100 Hz, which is audible`, r`0.10 Hz, which is infrasound`, r`10 Hz, which is infrasound`],
    correctAnswer: 3,
    explanation: r`f = 1/T = 1/0.10 = 10 Hz, which is below the 20 Hz lower limit of human hearing, so it is infrasound. Calling 10 Hz audible misplaces the lower limit, 100 Hz slips a factor of ten in the reciprocal, and 0.10 Hz confuses the period with the frequency.`,
  },
  [r`A violin and a flute play the same note. Why do they sound different?`]: {
    question: r`Two recorded tones have equal intensity, and in both the lowest component is at 262 Hz. Tone X also has strong components at 524 Hz and 786 Hz, while tone Y has almost none. How do the two tones compare to a listener?`,
    options: [r`the same pitch, but a different timbre`, r`a higher pitch for X, but the same timbre`, r`the same pitch, and the same timbre`, r`a lower pitch for Y, and a different timbre`],
    correctAnswer: 0,
    explanation: r`Pitch follows the fundamental, 262 Hz in both, so the pitch is the same. The blend of overtones sets the timbre, and that differs. Hearing X as higher mistakes its overtones for its pitch, and saying the timbre is the same ignores the different mix of harmonics.`,
  },
  [r`Why does distant thunder sound like a low rumble while nearby thunder is a sharp crack?`]: {
    question: r`A whale call contains a 20 Hz component and a 20 kHz component of equal strength. Hydrophones record it 100 m away and 50 km away. Compared with the near recording, what does the far recording contain?`,
    options: [r`mainly the 20 kHz part, as water absorbs low frequencies more`, r`mainly the 20 Hz part, as low frequencies travel much faster`, r`mainly the 20 Hz part, as water absorbs high frequencies more`, r`both parts in equal strength, as spreading weakens them alike`],
    correctAnswer: 2,
    explanation: r`A medium absorbs higher frequencies more strongly, so over 50 km the 20 kHz part is attenuated far more and mainly the 20 Hz part survives. Reversing which frequencies are absorbed gets the trend backward. All frequencies travel at the same speed in the medium, and spreading alone weakens them equally, so neither explains a change in the mix.`,
  },
  [r`A loudspeaker produces $90$ dB at $1$ m. Treating it as a point source and ignoring absorption, what is the level at $10$ m?`]: {
    question: r`A siren produces 120 dB at 1 m. Treating it as a point source and ignoring absorption, what is the sound level 100 m away?`,
    options: [r`100 dB`, r`40 dB`, r`80 dB`, r`1.2 dB`],
    correctAnswer: 2,
    explanation: r`At 100 times the distance the intensity is 1/100² = 10⁻⁴ of its value, four factors of ten, so the level drops 40 dB to 80 dB. 100 dB uses 1/r instead of 1/r². 40 dB subtracts 80, squaring twice, and 1.2 dB divides the decibel reading by 100 as if the scale were linear.`,
  },
  [r`A blender delivers $10^{-5}$ W/m$^2$ to your ear. What is the sound level?`]: {
    question: r`A hearing-aid tester delivers 1 μW/m² to the ear. Taking I₀ = 10⁻¹² W/m², what is the sound level?`,
    options: [r`60 dB`, r`90 dB`, r`120 dB`, r`6 dB`],
    correctAnswer: 0,
    explanation: r`1 μW/m² is 10⁻⁶ W/m², which is six powers of ten above 10⁻¹², so the level is 10 × 6 = 60 dB. 90 dB reads the micro prefix as 10⁻³, 120 dB ignores the prefix altogether, and 6 dB forgets the factor of 10 in front of the logarithm.`,
  },
  [r`A sound becomes $5$ times as intense. About how much does its level rise?`]: {
    question: r`The intensity of a sound becomes 8 times as great. About how much does its sound level rise?`,
    options: [r`8 dB`, r`18 dB`, r`80 dB`, r`9 dB`],
    correctAnswer: 3,
    explanation: r`8 = 2 × 2 × 2, and each doubling of intensity adds about 3 dB, so the level rises about 9 dB. 8 dB and 80 dB treat the decibel scale as linear in intensity, and 18 dB uses 20 log, which applies to amplitude ratios and not intensity ratios.`,
  },
  [r`Two identical $70$ dB alarms sound together. The combined level is about {{c1::$73$ dB}}.`]: {
    question: r`Two identical ventilators running together produce 85 dB at a bedside. One of them is switched off. What is the level at the bedside now?`,
    options: [r`42.5 dB`, r`82 dB`, r`75 dB`, r`80 dB`],
    correctAnswer: 1,
    explanation: r`Switching off one of two equal sources halves the intensity, and halving lowers the level by 10 log 2 ≈ 3 dB, to 82 dB. 42.5 dB halves the decibel number, which treats a logarithmic scale as linear. 75 dB is the drop for one-tenth of the intensity, and 80 dB has no basis in the factor of 2.`,
  },
  [r`Why does a wind instrument go sharp as it warms up during a concert?`]: {
    question: r`An organ pipe sounds its fundamental at 170 Hz when the air inside is warm and sound travels at 340 m/s. On a cold morning the speed of sound in the pipe is 330 m/s. What is the fundamental then?`,
    options: [r`165 Hz`, r`175 Hz`, r`170 Hz`, r`160 Hz`],
    correctAnswer: 0,
    explanation: r`The pipe's length fixes the resonant wavelength, so f = v/λ scales with the speed: 170 × 330/340 = 165 Hz. 175 Hz moves the pitch the wrong way, 170 Hz assumes the frequency is fixed instead of the wavelength, and 160 Hz subtracts the 10 m/s change directly.`,
  },
  [r`A Mach cone's half-angle satisfies {{c1::$\sin\theta = 1/M$}}, so a faster source makes a narrower cone.`]: {
    question: r`A high-speed photograph of a bullet shows a shock cone with a half-angle of 30° (sin 30° = 0.50). The speed of sound is 340 m/s. How fast is the bullet travelling?`,
    options: [r`170 m/s`, r`340 m/s`, r`680 m/s`, r`1020 m/s`],
    correctAnswer: 2,
    explanation: r`sin θ = 1/M, so M = 1/0.50 = 2 and the bullet moves at 2 × 340 = 680 m/s. 170 m/s multiplies by sin θ instead of dividing, which would make the bullet subsonic with no cone at all. 340 m/s is Mach 1, and 1020 m/s is Mach 3, whose cone is narrower than 30°.`,
  },
  [r`In $f' = f\,(v \pm v_o)/(v \mp v_s)$, how do you choose each sign?`]: {
    question: r`A bat flying at 10 m/s chases a moth that flies directly away from it at 5 m/s. The bat emits a call of frequency f, and sound travels at 340 m/s. Which expression gives the frequency the moth receives?`,
    options: [r`f (340 + 5)/(340 − 10)`, r`f (340 − 5)/(340 − 10)`, r`f (340 − 5)/(340 + 10)`, r`f (340 + 5)/(340 + 10)`],
    correctAnswer: 1,
    explanation: r`Choose each sign so that approach raises the frequency. The bat (source) moves toward the moth, so its speed is subtracted in the denominator: 340 − 10. The moth (observer) moves away from the bat, so its speed is subtracted in the numerator: 340 − 5. A plus sign on top treats the moth as approaching, and a plus sign below treats the bat as receding.`,
  },
  [r`A $600$ Hz siren approaching a still listener at $34$ m/s is heard at about $667$ Hz ($v = 340$ m/s). A listener running at $34$ m/s toward a parked siren hears {{c1::$660$ Hz}}.`]: {
    question: r`A racing car travels at 85 m/s straight toward a stationary beacon that emits 800 Hz. With v = 340 m/s, what frequency does the driver hear?`,
    options: [r`1067 Hz`, r`600 Hz`, r`640 Hz`, r`1000 Hz`],
    correctAnswer: 3,
    explanation: r`For a moving observer, f' = f(v + vₒ)/v = 800 × 425/340 = 800 × 1.25 = 1000 Hz. 1067 Hz uses the moving-source form, 800 × 340/255, which does not apply because the beacon is at rest. 600 Hz and 640 Hz are the results for moving away.`,
  },
  [r`Sound reflecting off a target moving at speed $u$ (much slower than sound) has its frequency shifted by about {{c1::$2fu/v$}}.`]: {
    question: r`A 2.0 MHz ultrasound beam reflects off a heart wall that is moving directly toward the probe at 0.77 m/s. Sound travels at 1540 m/s in tissue. How does the echo's frequency compare with the transmitted frequency?`,
    options: [r`about 1.0 kHz higher`, r`about 2.0 kHz lower`, r`about 1.0 kHz lower`, r`about 2.0 kHz higher`],
    correctAnswer: 3,
    explanation: r`A reflection is shifted twice, once on reception by the moving wall and once on re-emission, so Δf = 2fu/v = 2 × (2.0 × 10⁶) × 0.77/1540 = 2000 Hz. The wall approaches, so the shift is upward. 1.0 kHz counts only one of the two shifts, and a lower frequency belongs to a wall moving away.`,
  },
  [r`An ultrasound echo returns $130\;\mu\text{s}$ after the pulse leaves the probe ($v = 1540$ m/s in tissue). How deep is the reflecting boundary?`]: {
    question: r`A ship's sonar sends a pulse straight down and receives the echo from the seabed 0.40 s later. Sound travels at 1500 m/s in seawater. How deep is the water?`,
    options: [r`600 m`, r`300 m`, r`150 m`, r`3750 m`],
    correctAnswer: 1,
    explanation: r`The pulse goes down and back, so the depth is vt/2 = 1500 × 0.40/2 = 300 m. 600 m forgets to halve the round trip, 150 m halves twice, and 3750 m divides the speed by the time instead of multiplying.`,
  },
  [r`An ultrasound probe's crystal is {{c1::piezoelectric}}: it deforms when a voltage is applied and generates a voltage when squeezed.`]: {
    question: r`A gas lighter makes its spark by striking a crystal: mechanical stress on the crystal produces a voltage. Which stage of ultrasound imaging uses the probe's crystal in this same stress-to-voltage direction?`,
    options: [r`transmitting, when an applied voltage makes the crystal change its shape`, r`focusing, when the crystal bends the sound toward the target's depth`, r`receiving, when an echo's pressure makes the crystal produce a voltage`, r`coupling, when the crystal matches its impedance to that of the skin`],
    correctAnswer: 2,
    explanation: r`A piezoelectric crystal works both ways. In the lighter and when receiving an echo, squeezing the crystal generates a voltage. Transmitting is the reverse direction, voltage in and deformation out. Focusing and impedance matching are not piezoelectric effects of the crystal.`,
  },
  [r`With the same probe and beam angle, the Doppler shift inside a stenosis is $3$ times the upstream shift. The lumen's area there is {{c1::one-third}} of the upstream area.`]: {
    question: r`With the same probe and beam angle, a Doppler shift of 400 Hz is measured in a healthy part of an artery and 1600 Hz inside a narrowing. The healthy lumen's area is 2.0 cm². What is the lumen's area inside the narrowing?`,
    options: [r`0.50 cm²`, r`0.125 cm²`, r`1.0 cm²`, r`8.0 cm²`],
    correctAnswer: 0,
    explanation: r`The shift is proportional to blood speed, so the speed is 4 times greater in the narrowing, and continuity (A₁u₁ = A₂u₂) makes the area one-quarter: 0.50 cm². 0.125 cm² squares the factor of 4, 1.0 cm² takes its square root, and 8.0 cm² has the fast region wider instead of narrower.`,
  },
  [r`A jet flies level at Mach $1.5$. When does a listener on the ground hear its sonic boom?`]: {
    question: r`A jet flies level at a steady Mach 2 over two listeners who stand 10 km apart beneath its path. What does each listener hear?`,
    options: [r`each hears one boom, at the same time, as the jet hits Mach 1`, r`each hears one boom, at different times, as the cone passes`, r`only the first hears a boom, made when the jet hit Mach 1`, r`neither hears a boom, since the jet's speed is not changing`],
    correctAnswer: 1,
    explanation: r`The Mach cone trails the jet for as long as it flies faster than sound, and each listener hears a single boom when the cone sweeps over them, the second listener later than the first. The boom is not a one-time event made at the moment the jet reaches Mach 1, and it does not need the jet to be accelerating.`,
  },
  [r`Describe the Doppler effect.`]: {
    question: r`A car's horn emits 500 Hz. A listener standing beside a straight road records the horn at 530 Hz and, a few seconds later, at 472 Hz. Which motion of the car explains the recording?`,
    options: [r`it first approached her and then moved away from her`, r`it first moved away from her and then approached her`, r`it kept approaching her throughout while slowing down`, r`it kept moving away from her throughout while speeding up`],
    correctAnswer: 0,
    explanation: r`An approaching source crowds its wavefronts, so the observed frequency is above 500 Hz; a receding source stretches them, so it is below. 530 Hz then 472 Hz means approach followed by recession. The reversed order would give the low reading first, approach alone never gives a reading below 500 Hz, and recession alone never gives one above.`,
  },
  [r`Ultrasound imaging relies on:`]: {
    question: r`On an ultrasound image, a cyst filled with uniform fluid appears black inside, with a bright outline at its wall. Why?`,
    options: [r`the fluid absorbs all of the sound, but the wall emits sound of its own`, r`the fluid carries sound too fast to time, but the wall slows it down`, r`the fluid shifts the echo's frequency, but the wall shifts it back again`, r`the fluid has no internal boundaries, but the wall is an impedance change`],
    correctAnswer: 3,
    explanation: r`The image is built from echoes, and echoes arise only where acoustic impedance changes. Uniform fluid has no such boundaries, so nothing returns from inside, while the wall is a step in impedance and reflects. The fluid does not absorb all the sound (structures behind a cyst are still seen), tissue emits no sound of its own, and still fluid causes no frequency shift.`,
  },
  [r`How does sound intensity vary with distance from a point source?`]: {
    question: r`A buzzer that acts as a point source gives a reading of 1.8 × 10⁻⁴ W/m² on a meter held 4 m from it. With no absorption in the air, what does the meter read when it is held 12 m from the buzzer?`,
    options: [r`6.0 × 10⁻⁵ W/m²`, r`5.4 × 10⁻⁴ W/m²`, r`2.0 × 10⁻⁵ W/m²`, r`1.6 × 10⁻³ W/m²`],
    correctAnswer: 2,
    explanation: r`Intensity falls as 1/r², and the distance triples, so the intensity is 1/9 as great: 1.8 × 10⁻⁴/9 = 2.0 × 10⁻⁵ W/m². 6.0 × 10⁻⁵ divides by 3 only, using 1/r. The two larger values multiply by 3 or by 9, as if sound grew stronger with distance.`,
  },
  [r`Raising sound intensity by a factor of 1000 raises the level by {{c1::30 dB}}.`]: {
    question: r`The sound level at a concert seat rises from 55 dB to 95 dB when the band starts. By what factor does the sound intensity at the seat increase?`,
    options: [r`10 000 times`, r`4000 times`, r`400 times`, r`40 times`],
    correctAnswer: 0,
    explanation: r`The level rises by 40 dB, and every 10 dB is a factor of ten in intensity, so the intensity grows by 10⁴ = 10 000. 40 times reads the decibel difference as the ratio, 400 times multiplies 40 by 10, and 4000 times counts only three and a bit factors of ten instead of four.`,
  },
  [r`How do you reason out the direction of a Doppler shift without the formula?`]: {
    question: r`A police car travelling at 30 m/s sounds its siren while following a speeding car that travels at 40 m/s in the same direction along a straight road, in still air. Compared with the emitted frequency, what does the speeding driver hear?`,
    options: [r`higher, because the police car drives toward the speeder`, r`the same, because both cars travel in the same direction`, r`higher, because the speeder is the faster of the two cars`, r`lower, because the gap between the two cars is growing`],
    correctAnswer: 3,
    explanation: r`What matters is relative motion along the line joining them. The speeder pulls ahead at 10 m/s, so the two are separating, the wavefronts reaching the speeder are stretched, and the frequency heard is lower. The police car points toward the speeder but is not closing the gap. The same direction is not enough for no shift: the speeds would also have to be equal.`,
  },
  [r`A siren and a listener move at the same velocity in the same direction; the observed frequency is {{c1::unchanged}}.`]: {
    question: r`A flatbed truck drives at a steady 15 m/s in still air. A musician at the front of the truck plays a 440 Hz note, and a listener sits at the back of the same truck. With v = 340 m/s, what frequency does the listener hear?`,
    options: [r`460 Hz`, r`440 Hz`, r`421 Hz`, r`400 Hz`],
    correctAnswer: 1,
    explanation: r`The musician and the listener share the same velocity, so the distance between them is not changing and there is no shift: 440 Hz. In the formula the two effects cancel, f(340 + 15)/(340 + 15). 460 Hz applies only the observer's approach, 421 Hz applies only the source's recession, and 400 Hz applies a recession twice.`,
  },
  [r`Sound level in decibels is {{c1::$\beta = 10\log(I/I_0)$}}.`]: {
    question: r`A drill delivers a sound intensity of 10⁻³ W/m² to a worker's ear. Which line of working gives the sound level correctly?`,
    options: [r`log(10⁻³/10⁻¹²) = 9 dB`, r`20 log(10⁻³/10⁻¹²) = 180 dB`, r`10 log(10⁻³/10⁻¹²) = 90 dB`, r`10 log(10⁻³ × 10⁻¹²) = −150 dB`],
    correctAnswer: 2,
    explanation: r`β = 10 log(I/I₀) with I₀ = 10⁻¹² W/m², so β = 10 log(10⁹) = 90 dB. Leaving out the factor of 10 gives bels, not decibels. A factor of 20 belongs with amplitude ratios, not intensity ratios, and multiplying by I₀ instead of dividing gives a meaningless negative level.`,
  },
  [r`Why is coupling gel applied between an ultrasound transducer and the skin?`]: {
    question: r`A technician tests an ultrasound probe on a water tank holding a metal target. In test (i) the probe face is held 1 mm above the water, in air. In test (ii) the probe face is dipped into the water. In which test is a clear echo from the target received?`,
    options: [r`only in (i), since the air layer focuses the sound on the target`, r`in both tests, since a 1 mm layer is too thin to affect the sound`, r`in neither test, since the water absorbs nearly all of the sound`, r`only in (ii), since the air layer reflects nearly all the sound`],
    correctAnswer: 3,
    explanation: r`Air has an acoustic impedance thousands of times lower than water or the probe face, so even a thin air layer reflects almost all the sound before it enters the water. This is why gel is used to exclude air between a probe and skin. Air does not focus the beam, the thinness of the layer does not rescue transmission, and water transmits ultrasound well.`,
  },
  [r`Acoustic impedance is {{c1::$Z = \rho v$}}, and reflection at a boundary is strongest when {{c1::the mismatch is large}}.`]: {
    question: r`An ultrasound pulse travels in a medium with ρ = 1000 kg/m³ and v = 1500 m/s and meets a boundary with a second medium. Which second medium returns the strongest echo?`,
    options: [r`ρ = 1.2 kg/m³ and v = 340 m/s`, r`ρ = 500 kg/m³ and v = 3000 m/s`, r`ρ = 1500 kg/m³ and v = 1000 m/s`, r`ρ = 1100 kg/m³ and v = 1500 m/s`],
    correctAnswer: 0,
    explanation: r`Z = ρv, and the first medium has Z = 1.5 × 10⁶ kg/(m²·s). The medium with ρ = 1.2 and v = 340 has Z ≈ 400, an enormous mismatch, so it reflects almost everything. The media with 500 and 3000, and with 1500 and 1000, both have Z = 1.5 × 10⁶, a perfect match with no echo even though ρ and v differ. The medium with 1100 and 1500 is only 10% different, a weak echo.`,
  },
  [r`In Doppler ultrasound of blood flow, why does the angle between beam and vessel matter?`]: {
    question: r`A Doppler probe's beam meets a blood vessel at 60° to the direction of flow (cos 60° = 0.50). The shift it records corresponds to a speed of 0.30 m/s along the beam. What is the blood's actual speed along the vessel?`,
    options: [r`0.15 m/s`, r`0.30 m/s`, r`0.60 m/s`, r`0.35 m/s`],
    correctAnswer: 2,
    explanation: r`Only the velocity component along the beam produces a shift, so v cos θ = 0.30 m/s and v = 0.30/0.50 = 0.60 m/s. 0.15 m/s multiplies by the cosine instead of dividing, 0.30 m/s ignores the angle and so underestimates the flow, and 0.35 m/s divides by sin 60°.`,
  },
  [r`The threshold of hearing is {{c1::$10^{-12}$ W/m$^2$}}, defined as {{c1::0 dB}}.`]: {
    question: r`An audiogram lists a child's hearing threshold at one frequency as −10 dB. What sound intensity does that level correspond to?`,
    options: [r`10⁻¹¹ W/m²`, r`10⁻¹³ W/m²`, r`10⁻¹⁰ W/m²`, r`0 W/m²`],
    correctAnswer: 1,
    explanation: r`0 dB is defined as 10⁻¹² W/m², not as zero intensity, and each 10 dB step is a factor of ten, so −10 dB is one-tenth of the reference: 10⁻¹³ W/m². 10⁻¹¹ W/m² steps up instead of down, 10⁻¹⁰ W/m² is +20 dB, and zero intensity has no finite decibel value.`,
  },
  [r`A sound is 10 times more intense than another. How many decibels louder, and does it sound ten times as loud?`]: {
    question: r`A tone is raised from 60 dB to 80 dB. By what factor does its intensity rise, and about how much louder does it sound to a listener?`,
    options: [r`100 times the intensity, about 100 times as loud`, r`20 times the intensity, about 2 times as loud`, r`100 times the intensity, about 4 times as loud`, r`20 times the intensity, about 20 times as loud`],
    correctAnswer: 2,
    explanation: r`Each 10 dB is a tenfold intensity change, so 20 dB is 10 × 10 = 100 times the intensity. Each 10 dB is heard as roughly a doubling of loudness, so two steps sound about 4 times as loud. Perceived loudness does not track intensity one for one, and 20 times reads the decibel difference as the intensity ratio.`,
  },
  [r`A plot of sound level in dB against the logarithm of $I/I_0$ is a straight line with slope {{c1::10}}.`]: {
    question: r`Sound level in dB is plotted against log(I/I₀) for several sounds, giving a straight line. Two of the points lie at log(I/I₀) = 3.5 and log(I/I₀) = 6.0. By how much do their sound levels differ?`,
    options: [r`2.5 dB`, r`25 dB`, r`4 dB`, r`250 dB`],
    correctAnswer: 1,
    explanation: r`The line β = 10 log(I/I₀) has slope 10, so a horizontal step of 6.0 − 3.5 = 2.5 is a vertical step of 25 dB. 2.5 dB uses a slope of 1, 250 dB a slope of 100, and 4 dB takes 10 log of 2.5 as if 2.5 were an intensity ratio.`,
  },
  [r`Sound intensity is proportional to {{c1::amplitude squared}}, so doubling the amplitude multiplies intensity by {{c1::4}}.`]: {
    question: r`At a fixed point, a sound wave delivers 2.0 × 10⁻⁶ W/m². The source's amplitude is then tripled at the same frequency. What intensity does the point now receive?`,
    options: [r`1.8 × 10⁻⁵ W/m²`, r`6.0 × 10⁻⁶ W/m²`, r`3.5 × 10⁻⁶ W/m²`, r`5.4 × 10⁻⁵ W/m²`],
    correctAnswer: 0,
    explanation: r`Intensity is proportional to amplitude squared, so tripling the amplitude multiplies the intensity by 9: 9 × 2.0 × 10⁻⁶ = 1.8 × 10⁻⁵ W/m². 6.0 × 10⁻⁶ scales intensity directly with amplitude, 3.5 × 10⁻⁶ uses the square root of 3, and 5.4 × 10⁻⁵ cubes the factor.`,
  },
  [r`Why do higher-frequency ultrasound probes give better resolution but shallower penetration?`]: {
    question: r`A sonographer scanning an abdomen switches from a 3 MHz probe to a 12 MHz probe. How does the image change?`,
    options: [r`finer detail, and the deeper structures become clearer`, r`coarser detail, but the deeper structures become clearer`, r`coarser detail, and the deeper structures fade from view`, r`finer detail, but the deeper structures fade from view`],
    correctAnswer: 3,
    explanation: r`Raising the frequency shortens the wavelength (λ = v/f falls to one-quarter), which improves resolution. Tissue attenuates higher frequencies more strongly, so the beam dies out sooner and deep structures are lost. Coarser detail has the wavelength trend backward, and clearer deep structures has the attenuation trend backward.`,
  },
}
