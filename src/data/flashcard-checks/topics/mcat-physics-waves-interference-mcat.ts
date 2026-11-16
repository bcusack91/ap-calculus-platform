import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-physics-waves-interference-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`The speed of sound in a medium is {{c1::$v = \sqrt{B/\rho}$}}, where $B$ is the bulk modulus (stiffness against compression) and $\rho$ the density.`]: {
    question: r`Fluid P is 8 times as stiff against compression (bulk modulus) as fluid Q and 2 times as dense. A sound pulse takes 4 ms to cross a 1 m sample of Q. How long does it take to cross a 1 m sample of P?`,
    options: [r`1 ms`, r`8 ms`, r`2 ms`, r`16 ms`],
    correctAnswer: 2,
    explanation: r`Speed goes as √(B/ρ), so P is faster by √(8/2) = 2 and the pulse needs half the time, 2 ms. An answer of 1 ms leaves out the square root and uses a factor of 4. The 8 ms and 16 ms answers turn the ratio upside down, making the stiffer fluid slower.`,
  },
  [r`A resting heart beats $90$ times per minute. What are the frequency and the period of one cardiac cycle?`]: {
    question: r`A ventilator delivers 12 breaths per minute at a steady rate. What are the frequency and the period of the breathing cycle?`,
    options: [r`f = 0.20 Hz and T = 5.0 s`, r`f = 12 Hz and T = 0.083 s`, r`f = 5.0 Hz and T = 0.20 s`, r`f = 720 Hz and T = 1.4 ms`],
    correctAnswer: 0,
    explanation: r`Convert the minute to seconds: f = 12/60 = 0.20 Hz, so T = 1/f = 5.0 s per breath. Using 12 Hz skips the conversion, 720 Hz multiplies by 60 instead of dividing, and 5.0 Hz with 0.20 s swaps the frequency and the period.`,
  },
  [r`Angular frequency is {{c1::$\omega = 2\pi f$}}, measured in rad/s.`]: {
    question: r`A lab shaker moves a tray back and forth 5 times each second, and its motion is written x = A cos ωt. What value of ω belongs in the equation?`,
    options: [r`5π rad/s, about 16 rad/s`, r`5 rad/s, the same as f`, r`5/(2π) rad/s, about 0.8 rad/s`, r`10π rad/s, about 31 rad/s`],
    correctAnswer: 3,
    explanation: r`Each cycle is 2π radians, so ω = 2πf = 2π × 5 = 10π rad/s. Using 5π counts only half a cycle per oscillation, using 5 treats ω as the same thing as f, and dividing by 2π converts in the wrong direction.`,
  },
  [r`Two identical pendulums swing side by side; whenever one is at its far-left turning point, the other is at its far-right. Their phase difference is {{c1::$180^\circ$ ($\pi$ rad)}}.`]: {
    question: r`Two identical metronome arms each have a period of 1.2 s. Whenever arm X is at its far-left turning point, arm Y is at its far-right turning point. What is the smallest time delay applied to one arm that would put the two in step?`,
    options: [r`0.30 s`, r`0.60 s`, r`1.2 s`, r`2.4 s`],
    correctAnswer: 1,
    explanation: r`Opposite turning points at the same instant means the arms are 180° apart, which is half a cycle, so a delay of half the period, 0.60 s, puts them in step. A delay of 0.30 s is a quarter cycle (90°). Delays of 1.2 s or 2.4 s are whole periods, which change nothing and leave the arms opposite.`,
  },
  [r`A mass oscillates on a spring. What happens to its period if the mass is quadrupled? If the spring is swapped for one four times stiffer?`]: {
    question: r`A toy bobs up and down on a spring once every 0.60 s. The toy is swapped for one of twice the mass, and the spring for one 8 times as stiff. How long does one full bob take now?`,
    options: [r`0.15 s`, r`0.30 s`, r`1.2 s`, r`2.4 s`],
    correctAnswer: 1,
    explanation: r`T = 2π√(m/k), so the period changes by √(2/8) = 1/2, giving 0.30 s. An answer of 0.15 s uses the ratio 1/4 without the square root. The 1.2 s and 2.4 s answers invert the ratio, as if a stiffer spring slowed the motion.`,
  },
  [r`Heavier damping makes a driven system's resonance {{c1::weaker and less sharp}}.`]: {
    question: r`A car's suspension is driven over a range of frequencies, and the amplitude of the bounce is plotted against driving frequency. With worn shock absorbers (light damping) the plot shows a tall, narrow peak. How does the plot look with new shock absorbers that damp heavily?`,
    options: [r`a lower and narrower peak`, r`a taller and broader peak`, r`a taller and narrower peak`, r`a lower and broader peak`],
    correctAnswer: 3,
    explanation: r`Heavier damping drains energy every cycle, so the resonance amplitude is smaller and the response is spread over a wider range of frequencies: a lower, broader peak. A narrower peak is a sign of lighter damping, and a taller peak would mean less energy is being lost, not more.`,
  },
  [r`A tube's two consecutive resonances are $150$ Hz and $250$ Hz. Is it open or closed at one end, and what is its fundamental?`]: {
    question: r`A tube that is either open at both ends or closed at one end has two consecutive resonances at 300 Hz and 400 Hz. Which kind of tube is it, and what is its fundamental?`,
    options: [r`open at both ends, with f₁ = 100 Hz`, r`closed at one end, with f₁ = 50 Hz`, r`closed at one end, with f₁ = 100 Hz`, r`open at both ends, with f₁ = 50 Hz`],
    correctAnswer: 0,
    explanation: r`The gap is 100 Hz. If the tube were closed the gap would be 2f₁, so f₁ = 50 Hz, but then 300 Hz would be the 6th harmonic, and a closed tube has only odd ones. An open tube has a gap of f₁ = 100 Hz, and 300 and 400 are its 3rd and 4th harmonics. An open tube with f₁ = 50 Hz would have a resonance at 350 Hz between the two.`,
  },
  [r`Described by pressure, an open end of a pipe is a pressure {{c1::node}} and a closed end is a pressure {{c2::antinode}}.`]: {
    question: r`A pipe closed at one end sounds its fundamental. A tiny pressure sensor is slid along the inside of the pipe. Where does it record the largest pressure swings, and where the smallest?`,
    options: [r`largest at the open end, smallest at the closed end`, r`largest at the midpoint, smallest at the two ends`, r`largest at the closed end, smallest at the open end`, r`largest at the two ends, smallest at the midpoint`],
    correctAnswer: 2,
    explanation: r`Pressure and displacement patterns are swapped. Air at the closed end cannot move, so its pressure swings most (a pressure antinode), while the open end stays at room pressure (a pressure node). Putting the largest swings at the open end mixes up pressure with displacement, and the midpoint answers describe a pipe open at both ends.`,
  },
  [r`The first overtone is which harmonic for a string or open pipe, and which for a pipe closed at one end?`]: {
    question: r`A clarinet-like tube, closed at one end, has 450 Hz as its first overtone. What is the lowest frequency at which this tube resonates?`,
    options: [r`225 Hz`, r`90 Hz`, r`900 Hz`, r`150 Hz`],
    correctAnswer: 3,
    explanation: r`A tube closed at one end has only odd harmonics, so its first overtone is the 3rd harmonic and f₁ = 450/3 = 150 Hz. An answer of 225 Hz treats the first overtone as the 2nd harmonic, which is true for strings and open pipes. 90 Hz takes it to be the 5th harmonic, and 900 Hz multiplies instead of dividing.`,
  },
  [r`In a standing wave, adjacent nodes are {{c1::$\lambda/2$}} apart, and a node and the next antinode are {{c2::$\lambda/4$}} apart.`]: {
    question: r`In a standing sound wave inside a tube, a node is found 15 cm from the nearest antinode. What are the wavelength and the distance between adjacent nodes?`,
    options: [r`λ = 60 cm, with nodes 30 cm apart`, r`λ = 30 cm, with nodes 15 cm apart`, r`λ = 30 cm, with nodes 30 cm apart`, r`λ = 60 cm, with nodes 60 cm apart`],
    correctAnswer: 0,
    explanation: r`A node and the next antinode are λ/4 apart, so λ = 4 × 15 = 60 cm, and adjacent nodes are λ/2 = 30 cm apart. Taking 15 cm as half a wavelength gives λ = 30 cm. Putting the nodes a full wavelength apart gives the 60 cm spacing.`,
  },
  [r`A tuner hears $4$ beats per second between a $440$ Hz tuning fork and a string. Tightening the string makes the beats slower. What was the string's frequency?`]: {
    question: r`An unknown tuning fork sounded with a 256 Hz reference fork gives 6 beats per second. A small lump of clay is stuck to the unknown fork, which lowers its frequency, and the beats become faster. What was the unknown fork's frequency before the clay was added?`,
    options: [r`262 Hz`, r`250 Hz`, r`253 Hz`, r`259 Hz`],
    correctAnswer: 1,
    explanation: r`Six beats per second puts the unknown fork at 250 or 262 Hz. Lowering its frequency made the beats faster, so it moved away from 256 Hz, which means it started below: 250 Hz. Had it started at 262 Hz the clay would have slowed the beats. 253 and 259 Hz take the beat frequency to be twice the difference.`,
  },
  [r`Two in-phase sources interfere constructively where the path difference is {{c1::a whole number of wavelengths}} and destructively where it is {{c2::an odd number of half-wavelengths}}.`]: {
    question: r`In a ripple tank, two dippers vibrate in phase and make waves with a wavelength of 4 cm. Point P is 18 cm from one dipper and 24 cm from the other. What is seen at P?`,
    options: [r`big ripples, as the path difference is 1.5 wavelengths`, r`big ripples, as the path difference is 6 wavelengths`, r`calm water, as the path difference is 1.5 wavelengths`, r`calm water, as the path difference is 6 wavelengths`],
    correctAnswer: 2,
    explanation: r`The path difference is 24 − 18 = 6 cm, which is 6/4 = 1.5 wavelengths, an odd number of half-wavelengths, so crest meets trough and the water is calm. Calling 1.5 wavelengths constructive ignores the half. The answers with 6 wavelengths forget to divide the 6 cm by the wavelength.`,
  },
  [r`Two pulses meet on a rope: an upright pulse $3$ cm high and an inverted pulse $1$ cm deep. What is the displacement when they exactly overlap, and what happens afterward?`]: {
    question: r`Two pulses travel toward each other on a rope: an upright pulse 2 cm high and an inverted pulse 5 cm deep. What is the rope's displacement at the instant they exactly overlap, and what is seen afterward?`,
    options: [r`−3 cm, then both pulses travel on unchanged`, r`+7 cm, then both pulses travel on unchanged`, r`−3 cm, then one 3 cm inverted pulse travels on`, r`−7 cm, then one 7 cm inverted pulse travels on`],
    correctAnswer: 0,
    explanation: r`Displacements add with their signs: +2 + (−5) = −3 cm. The overlap is temporary, so each pulse then continues with its original shape. The 7 cm answers add the sizes and ignore the signs, and a single merged pulse travelling on treats superposition as permanent.`,
  },
  [r`The ear canal acts as a pipe {{c1::closed at one end}} (sealed by the eardrum), so a $2.5$ cm canal resonates near $3400$ Hz.`]: {
    question: r`A large mammal's ear canal is 8.5 cm long, open to the air at the outside and sealed by the eardrum at the inside. Taking v = 340 m/s, what is its lowest resonant frequency?`,
    options: [r`2000 Hz`, r`4000 Hz`, r`500 Hz`, r`1000 Hz`],
    correctAnswer: 3,
    explanation: r`The canal is a pipe closed at one end, so f₁ = v/4L = 340/(4 × 0.085) = 340/0.34 = 1000 Hz. 2000 Hz uses v/2L, the formula for a pipe open at both ends. 4000 Hz uses v/L, and 500 Hz uses v/8L.`,
  },
  [r`Relate wave speed, frequency, and wavelength.`]: {
    question: r`From a dock, a student sees one wave crest pass a post every 4 s, and the crests are 10 m apart. How fast are the waves travelling?`,
    options: [r`40 m/s`, r`0.40 m/s`, r`2.5 m/s`, r`14 m/s`],
    correctAnswer: 2,
    explanation: r`One crest every 4 s means f = 1/4 = 0.25 Hz, so v = fλ = 0.25 × 10 = 2.5 m/s. An answer of 40 m/s multiplies the wavelength by the period instead of the frequency, 0.40 m/s divides the period by the wavelength, and 14 m/s simply adds the two numbers.`,
  },
  [r`Contrast longitudinal and transverse waves.`]: {
    question: r`Classify two waves: (i) a stadium wave, in which spectators stand up and sit down while the wave travels around the stands, and (ii) a jolt running down a line of coupled train cars as each car is bumped forward into the next.`,
    options: [r`(i) is longitudinal and (ii) is transverse`, r`(i) is transverse and (ii) is longitudinal`, r`(i) and (ii) are both transverse waves`, r`(i) and (ii) are both longitudinal waves`],
    correctAnswer: 1,
    explanation: r`Spectators move up and down while the wave runs sideways around the stands, so the motion is perpendicular to travel: transverse. Each train car is pushed along the same line the jolt travels, so that motion is parallel to travel: longitudinal. The other answers assign one or both directions of motion the wrong way.`,
  },
  [r`When a wave enters a new medium, what stays constant?`]: {
    question: r`Water waves with a wavelength of 12 m travel at 6 m/s in deep water, then pass into shallow water where their speed is 3 m/s. What are their frequency and wavelength in the shallow water?`,
    options: [r`f = 0.25 Hz and λ = 12 m`, r`f = 0.5 Hz and λ = 12 m`, r`f = 1.0 Hz and λ = 3 m`, r`f = 0.5 Hz and λ = 6 m`],
    correctAnswer: 3,
    explanation: r`In deep water f = v/λ = 6/12 = 0.5 Hz, and frequency is set by the source, so it is still 0.5 Hz in the shallows. The wavelength adjusts: λ = v/f = 3/0.5 = 6 m. Keeping the wavelength at 12 m and halving the frequency holds the wrong quantity fixed, keeping both breaks v = fλ, and doubling the frequency has no cause.`,
  },
  [r`Sound travels fastest in:`]: {
    question: r`A worker strikes one end of a long steel pipe that is full of water. A listener at the far end, with one ear against the pipe, hears three separate sounds. In what order do they arrive?`,
    options: [r`through the air, then the water, then the steel`, r`through the steel, then the water, then the air`, r`through the water, then the steel, then the air`, r`through the steel, then the air, then the water`],
    correctAnswer: 1,
    explanation: r`Sound travels fastest in solids, slower in liquids and slowest in gases, because stiffness outweighs density. So the steel-borne sound arrives first, then the water-borne, then the air-borne. Putting air first assumes that the least dense medium is the fastest, and the other orders misplace the liquid.`,
  },
  [r`A standing wave forms when:`]: {
    question: r`A speaker faces a hard wall and plays one steady tone. A microphone moved slowly between the speaker and the wall finds fixed quiet spots with loud spots midway between them. What produces this pattern?`,
    options: [r`the tone overlapping its own reflection travelling back`, r`the tone overlapping a second tone of slightly higher pitch`, r`the tone being absorbed by the air at regular distances`, r`the tone changing frequency as it approaches the wall`],
    correctAnswer: 0,
    explanation: r`The wall sends back a wave with the same frequency and amplitude travelling the opposite way, and two such waves superpose into a standing wave with fixed nodes and antinodes. A second tone of slightly different pitch would give beats in time, not fixed spots in space. Absorption only weakens a wave steadily, and a stationary speaker and wall cause no frequency change.`,
  },
  [r`Two tuning forks at 440 Hz and 444 Hz sound together; the beat frequency is {{c1::4 Hz}}.`]: {
    question: r`Two strings vibrate at 300 Hz and 306 Hz and are sounded together. How many times does the loudness swell in 5 s?`,
    options: [r`15 times`, r`6 times`, r`30 times`, r`1515 times`],
    correctAnswer: 2,
    explanation: r`The beat frequency is the difference, 306 − 300 = 6 Hz, so in 5 s there are 6 × 5 = 30 swells. 15 uses half the difference, 6 is the number in one second only, and 1515 uses the average frequency of 303 Hz, which is the pitch heard and not the beat rate.`,
  },
  [r`For a string fixed at both ends, the allowed wavelengths are {{c1::$\lambda_n = 2L/n$}}.`]: {
    question: r`A string 90 cm long is fixed at both ends. Which of these wavelengths can NOT form a standing wave on it?`,
    options: [r`180 cm`, r`60 cm`, r`120 cm`, r`45 cm`],
    correctAnswer: 2,
    explanation: r`The allowed wavelengths are 2L/n = 180/n cm: 180, 90, 60, 45 cm and so on. 120 cm would need n = 1.5, which leaves no node at one of the fixed ends. 180 cm is the fundamental, 60 cm the third harmonic and 45 cm the fourth.`,
  },
  [r`Wave speed on a string is $v = \sqrt{T/\mu}$, so tightening a string {{c1::raises}} its pitch.`]: {
    question: r`A string's fundamental is 150 Hz. Its tension is raised to 4 times the original value, with its length and mass unchanged. What is the new fundamental?`,
    options: [r`300 Hz`, r`600 Hz`, r`75 Hz`, r`38 Hz`],
    correctAnswer: 0,
    explanation: r`Wave speed is √(T/μ), so 4 times the tension doubles the speed, and with the length fixed f₁ = v/(2L) doubles to 300 Hz. 600 Hz leaves out the square root. 75 Hz and 38 Hz have the pitch falling when the string is tightened, which is the wrong direction.`,
  },
  [r`A sound wave passes from air into soft tissue. Which wave properties change?`]: {
    question: r`A 1.5 MHz ultrasound pulse travels through soft tissue at 1500 m/s, then enters bone, where sound travels at 3000 m/s. What are the pulse's frequency and wavelength inside the bone?`,
    options: [r`3.0 MHz and 1.0 mm`, r`1.5 MHz and 2.0 mm`, r`1.5 MHz and 1.0 mm`, r`0.75 MHz and 4.0 mm`],
    correctAnswer: 1,
    explanation: r`Frequency is fixed by the source and stays 1.5 MHz. The speed doubles, so the wavelength doubles from 1500/(1.5 × 10⁶) = 1.0 mm to 2.0 mm. Doubling the frequency holds the wavelength fixed instead, leaving both unchanged ignores the new speed, and halving the frequency has no cause.`,
  },
  [r`In simple harmonic motion, where are speed and acceleration each maximal?`]: {
    question: r`A mass on a vertical spring oscillates between the 10 cm and 30 cm marks on a ruler. At which positions is its speed greatest, and at which is the size of its acceleration greatest?`,
    options: [r`fastest at 10 cm and 30 cm; greatest acceleration at 20 cm`, r`fastest at 20 cm; greatest acceleration is also at 20 cm`, r`fastest at 10 cm and 30 cm; greatest acceleration there too`, r`fastest at 20 cm; greatest acceleration at 10 cm and 30 cm`],
    correctAnswer: 3,
    explanation: r`The equilibrium position is the midpoint, 20 cm, where the net force is zero and the speed peaks. At the turning points, 10 cm and 30 cm, the mass is momentarily at rest but the displacement and net restoring force are largest, so the acceleration is largest. The other answers swap the two or put both maxima in the same place.`,
  },
  [r`A simple pendulum has period $T = 2\pi\sqrt{L/g}$, so its period is independent of {{c1::the bob's mass}}.`]: {
    question: r`Two playground swings have equal length. A 20 kg child on one swings through small angles with a period of 3.0 s. What is the period of a 40 kg child on the other, also swinging through small angles?`,
    options: [r`3.0 s`, r`4.2 s`, r`6.0 s`, r`1.5 s`],
    correctAnswer: 0,
    explanation: r`A pendulum's period is 2π√(L/g), which contains no mass, so equal lengths give the same 3.0 s. An answer of 4.2 s puts the mass under a square root as for a spring, 6.0 s makes the period proportional to mass, and 1.5 s makes it inversely proportional.`,
  },
  [r`A mass on a spring has period $T = 2\pi\sqrt{m/k}$, so its period is independent of {{c1::amplitude and gravity}}.`]: {
    question: r`A mass on a spring oscillates on a frictionless horizontal table with a period of 0.50 s. The same mass is then hung vertically from the same spring and set oscillating with 3 times the amplitude. What is its period now?`,
    options: [r`1.5 s`, r`0.87 s`, r`0.50 s`, r`0.17 s`],
    correctAnswer: 2,
    explanation: r`T = 2π√(m/k) depends only on the mass and the spring constant, so neither gravity nor a larger amplitude changes it: 0.50 s. An answer of 1.5 s scales the period with amplitude, 0.87 s scales it with the square root of the amplitude, and 0.17 s divides by the amplitude factor.`,
  },
  [r`Sound passing through the interior of a liquid or gas travels only as a {{c1::longitudinal}} wave.`]: {
    question: r`A plate set in the wall of a water tank can vibrate in two ways: in and out, toward and away from the water, or sliding sideways in its own plane. Which motion sends sound across the tank to a detector deep in the water?`,
    options: [r`only the sliding motion, since water carries shear but not compression`, r`both motions equally, since water carries compression and shear alike`, r`neither motion, since water carries no mechanical waves below its surface`, r`only the in-and-out motion, since water carries compression but not shear`],
    correctAnswer: 3,
    explanation: r`A fluid cannot resist shear, so a sideways-sliding plate only drags a thin layer and no transverse wave crosses the tank. Pushing in and out compresses the water, and that longitudinal wave does travel. Saying shear is carried describes a solid, and water certainly carries sound below its surface.`,
  },
  [r`How do the harmonics of an open pipe differ from a pipe closed at one end?`]: {
    question: r`Four tubes each have a lowest resonance of 120 Hz. Which list of the three lowest resonances belongs to a tube closed at one end?`,
    options: [r`120, 240 and 360 Hz`, r`120, 360 and 600 Hz`, r`120, 240 and 480 Hz`, r`120, 180 and 240 Hz`],
    correctAnswer: 1,
    explanation: r`A tube closed at one end supports only odd harmonics: f₁, 3f₁, 5f₁, which is 120, 360 and 600 Hz. 120, 240 and 360 Hz is every harmonic, the pattern of an open pipe or a string. Doubling each time (120, 240, 480) and stepping by half the fundamental (120, 180, 240) are not harmonic series of either tube.`,
  },
  [r`What is resonance, and where does it matter physiologically?`]: {
    question: r`A model vocal fold has a natural period of 0.005 s. A shaker drives it with the same force amplitude at four different frequencies. Which driving frequency produces the largest vibration?`,
    options: [r`200 Hz`, r`500 Hz`, r`5 Hz`, r`2000 Hz`],
    correctAnswer: 0,
    explanation: r`Resonance occurs when the driving frequency matches the natural frequency, f = 1/T = 1/0.005 = 200 Hz, where energy is transferred most efficiently. 500 Hz and 5 Hz misread the period as a frequency, and 2000 Hz slips a factor of ten in the reciprocal.`,
  },
  [r`Leg swing during walking behaves like a pendulum, so a taller person's natural cadence is {{c1::slower}}.`]: {
    question: r`Model a swinging leg as a pendulum. An adult's leg is 1.00 m long and a child's is 0.64 m. How does the adult's natural swing period compare with the child's?`,
    options: [r`1.56 times the child's`, r`0.80 times the child's`, r`1.25 times the child's`, r`0.64 times the child's`],
    correctAnswer: 2,
    explanation: r`Period goes as √L, so the ratio is √(1.00/0.64) = 1/0.8 = 1.25: the longer leg swings more slowly. 1.56 leaves out the square root. 0.80 and 0.64 invert the ratio, making the longer leg swing faster.`,
  },
}
