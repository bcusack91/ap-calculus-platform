import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-circ2`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`How do you convert kilowatt-hours to joules?`]: {
    kind: 'calc',
    more: [
      {
        question: r`An electric car's battery pack stores 50 kWh of energy. How many joules is that?`,
        options: [r`1.8 × 10⁸ J`, r`1.8 × 10⁵ J`, r`1.4 × 10⁻⁵ J`, r`5.0 × 10⁴ J`],
        correctAnswer: 0,
        explanation: r`Multiply by 3.6 × 10⁶ J/kWh: 50 × 3.6 × 10⁶ = 1.8 × 10⁸ J. Using 3600 gives 1.8 × 10⁵ J, dividing by the factor gives 1.4 × 10⁻⁵ J, and multiplying by only 1000 gives 5.0 × 10⁴ J.`,
      },
      {
        question: r`A snack bar releases 1.8 × 10⁶ J of energy when it is metabolised. How many kilowatt-hours is that?`,
        options: [r`2.0 kWh`, r`500 kWh`, r`0.50 kWh`, r`6.5 × 10¹² kWh`],
        correctAnswer: 2,
        explanation: r`Going from joules to kilowatt-hours means dividing by 3.6 × 10⁶ J/kWh: 1.8 × 10⁶ ÷ 3.6 × 10⁶ = 0.50 kWh. Inverting the ratio gives 2.0 kWh, dividing by 3600 gives 500 kWh, and multiplying by the factor gives 6.5 × 10¹² kWh.`,
      },
      {
        question: r`A 2.0 kW oven element runs for 5.0 hours. How much electrical energy does it use, in joules?`,
        options: [r`3.6 × 10⁴ J`, r`1.0 × 10⁴ J`, r`2.8 × 10⁻⁶ J`, r`3.6 × 10⁷ J`],
        correctAnswer: 3,
        explanation: r`The energy is 2.0 kW × 5.0 h = 10 kWh, and 10 × 3.6 × 10⁶ = 3.6 × 10⁷ J. Using 3600 as the factor gives 3.6 × 10⁴ J, multiplying 2000 W by 5 h without converting hours gives 1.0 × 10⁴, and dividing 10 by the factor gives 2.8 × 10⁻⁶ J.`,
      },
      {
        question: r`A household's meter shows that it used 7.2 × 10⁹ J of electrical energy in one month. How many kilowatt-hours appear on the bill?`,
        options: [r`2.0 × 10⁶ kWh`, r`5.0 × 10⁻⁴ kWh`, r`2.6 × 10¹⁶ kWh`, r`2.0 × 10³ kWh`],
        correctAnswer: 3,
        explanation: r`Divide by 3.6 × 10⁶ J/kWh: 7.2 × 10⁹ ÷ 3.6 × 10⁶ = 2.0 × 10³ kWh. Dividing by 3600 gives 2.0 × 10⁶ kWh, inverting the ratio gives 5.0 × 10⁻⁴ kWh, and multiplying by the factor gives 2.6 × 10¹⁶ kWh.`,
      },
      {
        question: r`A phone battery stores 0.015 kWh of energy. How many joules is that?`,
        options: [r`5.4 × 10¹ J`, r`1.5 × 10¹ J`, r`5.4 × 10⁴ J`, r`4.2 × 10⁻⁹ J`],
        correctAnswer: 2,
        explanation: r`Multiply by 3.6 × 10⁶ J/kWh: 0.015 × 3.6 × 10⁶ = 5.4 × 10⁴ J. Using 3600 gives 54 J, multiplying by only 1000 gives 15, and dividing by the factor gives 4.2 × 10⁻⁹ J.`,
      },
      {
        question: r`A small solar panel delivers 7.2 × 10⁵ J on a cloudy day. If electricity is worth 25 cents per kilowatt-hour, what is that energy worth?`,
        options: [r`20 cents`, r`5 cents`, r`125 cents`, r`5000 cents`],
        correctAnswer: 1,
        explanation: r`Convert first: 7.2 × 10⁵ J ÷ 3.6 × 10⁶ J/kWh = 0.20 kWh, and 0.20 × 25 = 5 cents. Reading the 0.20 kWh as the price gives 20 cents, inverting the ratio to 5 kWh gives 125 cents, and dividing by 3600 to get 200 kWh gives 5000 cents.`,
      },
    ],
  },
  [r`How do you find the current and power through the body for a given skin resistance?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A hiker stands near a downed power line with a foot-to-foot resistance of 4.0 × 10⁴ Ω, and the ground under the two feet differs in potential by 200 V. What current passes through the hiker, and at what rate is energy delivered?`,
        options: [r`5.0 mA and 0.0050 W`, r`5.0 mA and 1000 W`, r`5.0 mA and 1.0 W`, r`200 mA and 1.0 W`],
        correctAnswer: 2,
        explanation: r`I = V/R = 200 ÷ 4.0 × 10⁴ = 5.0 × 10⁻³ A = 5.0 mA, and P = V²/R = 4.0 × 10⁴ ÷ 4.0 × 10⁴ = 1.0 W. The 0.0050 W value uses V/R for the power as well, 1000 W multiplies 200 V by 5.0 without converting milliamps, and 200 mA inverts the ratio to R/V.`,
      },
      {
        question: r`A person who touches a 120 V conductor carries a current of 3.0 mA through the body. What is the resistance of the body path?`,
        options: [r`4.0 × 10¹ Ω`, r`4.0 × 10⁴ Ω`, r`3.6 × 10⁻¹ Ω`, r`2.5 × 10⁻⁵ Ω`],
        correctAnswer: 1,
        explanation: r`Rearranging I = V/R gives R = V/I = 120 ÷ 3.0 × 10⁻³ = 4.0 × 10⁴ Ω. Leaving the current as 3.0 gives 40 Ω, multiplying V by I gives 0.36, and inverting to I/V gives 2.5 × 10⁻⁵.`,
      },
      {
        question: r`A safety rule limits the current through the body to 5.0 mA. For wet skin with a body resistance of 1.0 × 10³ Ω, what is the largest voltage that may be touched?`,
        options: [r`5.0 V`, r`200 V`, r`5000 V`, r`0.025 V`],
        correctAnswer: 0,
        explanation: r`Rearranging I = V/R gives V = IR = 5.0 × 10⁻³ × 1.0 × 10³ = 5.0 V. Leaving the current as 5.0 gives 5000 V, dividing 1000 by 5.0 gives 200, and 0.025 is I²R, which is the power in watts and not a voltage.`,
      },
      {
        question: r`During a skin-conductance test, 10 V is applied across an arm-to-arm path with a resistance of 5.0 × 10² Ω. What power is delivered to the body?`,
        options: [r`0.20 W`, r`0.020 W`, r`50 W`, r`5000 W`],
        correctAnswer: 0,
        explanation: r`P = V²/R = 100 ÷ 500 = 0.20 W. The 0.020 value is V/R, which is the current in amperes and forgets to square the voltage. The 50 value is R/V, and 5000 is V times R.`,
      },
      {
        question: r`A defibrillator applies 2.0 × 10³ V across a chest whose resistance is 50 Ω. What current flows, and what power is delivered during the pulse?`,
        options: [r`40 A and 1.0 × 10⁵ W`, r`40 A and 4.0 × 10¹ W`, r`0.025 A and 8.0 × 10⁴ W`, r`40 A and 8.0 × 10⁴ W`],
        correctAnswer: 3,
        explanation: r`I = V/R = 2000 ÷ 50 = 40 A, and P = V²/R = 4.0 × 10⁶ ÷ 50 = 8.0 × 10⁴ W. Multiplying V by R gives 1.0 × 10⁵, using V/R again for the power gives 40 W, and 0.025 A inverts the ratio to R/V.`,
      },
      {
        question: r`A body path dissipates 0.50 W while it is in contact with 50 V. What is the resistance of the path, and what current flows through it?`,
        options: [r`1.0 × 10² Ω and 0.50 A`, r`5.0 × 10³ Ω and 0.010 A`, r`2.5 × 10¹ Ω and 2.0 A`, r`5.0 × 10³ Ω and 0.10 A`],
        correctAnswer: 1,
        explanation: r`From P = V²/R, R = V²/P = 2500 ÷ 0.50 = 5.0 × 10³ Ω, and I = V/R = 50 ÷ 5000 = 0.010 A. Using R = V/P gives 100 Ω and 0.50 A, using R = V × P gives 25 Ω and 2.0 A, and 0.10 A is a slip of a power of ten in 50 ÷ 5000.`,
      },
    ],
  },
  [r`At a fixed voltage, the body's resistance falls by a factor of 100. What happens to the current and the power?`]: {
    kind: 'calc',
    more: [
      {
        question: r`With dry hands, a person touching a fixed voltage carries 0.50 mA and absorbs 0.060 W. Sweat then makes the body's resistance 20 times smaller. At the same voltage, what are the new current and power?`,
        options: [r`10 mA and 24 W`, r`10 mA and 0.060 W`, r`0.025 mA and 0.0030 W`, r`10 mA and 1.2 W`],
        correctAnswer: 3,
        explanation: r`At fixed voltage, I = V/R and P = V²/R both scale as 1/R, so both rise 20-fold: 0.50 × 20 = 10 mA and 0.060 × 20 = 1.2 W. The 24 W value squares the factor, 0.060 W leaves the power unchanged, and the last pair divides by 20 instead of multiplying.`,
      },
      {
        question: r`With wet hands, a person touching a fixed voltage carries 40 mA and absorbs 4.0 W. After drying, the body's resistance is 50 times larger. At the same voltage, what are the new current and power?`,
        options: [r`0.80 mA and 0.0016 W`, r`0.80 mA and 0.080 W`, r`0.80 mA and 4.0 W`, r`2000 mA and 200 W`],
        correctAnswer: 1,
        explanation: r`At fixed voltage both current and power scale as 1/R, so both fall 50-fold: 40 ÷ 50 = 0.80 mA and 4.0 ÷ 50 = 0.080 W. The 0.0016 W value divides the power by 50², 4.0 W leaves it unchanged, and 2000 mA and 200 W multiply by 50 instead of dividing.`,
      },
      {
        question: r`At a fixed voltage, the current through a volunteer's forearm rises from 0.30 mA to 15 mA after electrode gel is applied. How did the resistance and the power delivered change?`,
        options: [r`Resistance fell 50-fold; power rose 2500-fold`, r`Resistance rose 50-fold; power rose 50-fold`, r`Resistance fell 50-fold; power rose 50-fold`, r`Resistance fell 50-fold; power did not change`],
        correctAnswer: 2,
        explanation: r`The current rose by 15 ÷ 0.30 = 50, and at fixed voltage I = V/R, so the resistance fell 50-fold. Power is V²/R, so it rose by the same factor of 50. Squaring the factor to 2500 would be right only if the resistance were fixed and the current changed, and a larger resistance would lower the current.`,
      },
      {
        question: r`A lineworker's rubber gloves raise the resistance of the path through the body by a factor of 1000. Bare-handed, contact with a certain line would deliver 12 W to the body. At the same voltage, what power is delivered with the gloves on?`,
        options: [r`0.000012 W`, r`0.012 W`, r`12 W`, r`12,000 W`],
        correctAnswer: 1,
        explanation: r`At fixed voltage P = V²/R, so a resistance 1000 times larger gives a power 1000 times smaller: 12 ÷ 1000 = 0.012 W. Dividing by 1000² gives 0.000012 W, 12 W ignores the change, and 12,000 W multiplies instead of dividing.`,
      },
      {
        question: r`A fixed voltage is held across a tissue sample. As the sample is moistened, the power it absorbs rises from 0.050 W to 0.40 W. Its dry resistance was 16 kΩ. What is its resistance when moist?`,
        options: [r`5.7 kΩ`, r`128 kΩ`, r`0.25 kΩ`, r`2.0 kΩ`],
        correctAnswer: 3,
        explanation: r`The power rose by 0.40 ÷ 0.050 = 8, and at fixed voltage P = V²/R, so the resistance fell 8-fold: 16 ÷ 8 = 2.0 kΩ. Dividing by √8 gives 5.7 kΩ, multiplying by 8 gives 128 kΩ, and dividing by 8² gives 0.25 kΩ.`,
      },
      {
        question: r`A person touching a fixed voltage with dry, unbroken skin carries 1.5 mA. Moisture lowers the body's resistance by a factor of 4, and a cut in the skin lowers it by a further factor of 5. What current flows now?`,
        options: [r`30 mA`, r`13.5 mA`, r`600 mA`, r`0.075 mA`],
        correctAnswer: 0,
        explanation: r`The two factors multiply, so the resistance is 4 × 5 = 20 times smaller, and at fixed voltage the current is 20 times larger: 1.5 × 20 = 30 mA. Adding the factors to get 9 gives 13.5 mA, squaring 20 gives 600 mA, and dividing by 20 gives 0.075 mA.`,
      },
    ],
  },
  [r`A bulb is marked "60 W, 120 V". What do the two numbers mean, with their symbols and units?`]: {
    kind: 'concept',
    more: [
      {
        question: r`An electric kettle is marked "1000 W, 240 V". A traveller plugs it into a 120 V outlet. Treating its element as ohmic, which statement is correct?`,
        options: [r`It gives exactly 1000 W, since the rating is fixed by the element`, r`It gives more than 1000 W, since it draws extra current at 120 V`, r`It gives less than 1000 W, since the rating holds only at 240 V`, r`It gives exactly 1000 W, since the outlet supplies what it needs`],
        correctAnswer: 2,
        explanation: r`The marked power is dissipated only when the marked voltage is across the device. At 120 V the same element carries half the current, so P = V²/R drops to a quarter, 250 W. The power is not a fixed property of the element, and a lower voltage drives less current, not more.`,
      },
      {
        question: r`A hair dryer's label reads "1500 W, 120 V". Which line reads the label correctly?`,
        options: [r`P = 1500 W is the power it dissipates at any voltage up to V = 120 V`, r`P = 1500 W is the power it dissipates when V = 120 V is across it`, r`E = 1500 W is the energy it stores when V = 120 V is across it`, r`P = 1500 W is the power it dissipates and I = 120 V is its current`],
        correctAnswer: 1,
        explanation: r`The first number is the power P in watts, and it applies only at the rated voltage V in volts, which is the second number. The power is not the same at lower voltages, a watt is a unit of power and not of energy, and a volt measures voltage and not current.`,
      },
    ],
  },
  [r`What does a bulb's brightness measure? What is $P_0$?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A flashlight bulb with a resistance of 9.0 Ω sits alone on an ideal 3.0 V battery. What power sets its brightness?`,
        options: [r`0.33 W`, r`1.0 W`, r`3.0 W`, r`27 W`],
        correctAnswer: 1,
        explanation: r`Brightness is power, and for one bulb alone P₀ = V²/R = 9.0 ÷ 9.0 = 1.0 W. The 0.33 value is V/R, which is the current and leaves out the square. The 3.0 value is R/V, and 27 is V times R.`,
      },
      {
        question: r`A bulb sits alone on an ideal 6.0 V source and glows with a power of 12 W. What is the bulb's resistance?`,
        options: [r`0.50 Ω`, r`2.0 Ω`, r`3.0 Ω`, r`72 Ω`],
        correctAnswer: 2,
        explanation: r`Rearranging P₀ = V²/R gives R = V²/P₀ = 36 ÷ 12 = 3.0 Ω. Using V/P without the square gives 0.50, P/V gives 2.0, and V times P gives 72.`,
      },
      {
        question: r`A bulb with a resistance of 8.0 Ω sits alone on an ideal source and dissipates 2.0 W. What is the source voltage?`,
        options: [r`16 V`, r`2.0 V`, r`4.0 V`, r`0.50 V`],
        correctAnswer: 2,
        explanation: r`Rearranging P₀ = V²/R gives V² = P₀R = 2.0 × 8.0 = 16, so V = 4.0 V. Stopping at 16 forgets the square root, 2.0 is the square root of R/P, and 0.50 is the square root of P/R, which is the current.`,
      },
      {
        question: r`A bulb sits alone on an ideal source and dissipates 3.0 W. It is replaced by a bulb with twice the resistance, and the source voltage is raised to four times its old value. What power does the new bulb dissipate?`,
        options: [r`24 W`, r`6.0 W`, r`48 W`, r`96 W`],
        correctAnswer: 0,
        explanation: r`P₀ = V²/R, so four times the voltage gives 16 times the power and twice the resistance halves it: 3.0 × 16 ÷ 2 = 24 W. Forgetting to square the voltage gives 6.0 W, ignoring the resistance change gives 48 W, and multiplying by 2 instead of dividing gives 96 W.`,
      },
      {
        question: r`A small indicator lamp with a resistance of 2.0 kΩ sits alone on an ideal 10 V source. What power does it dissipate?`,
        options: [r`50 mW`, r`5.0 mW`, r`200 mW`, r`50 W`],
        correctAnswer: 0,
        explanation: r`P₀ = V²/R = 100 ÷ 2000 = 0.050 W = 50 mW. The 5.0 value is V/R, which is the current in milliamps. The 200 value is R/V, and 50 W leaves the resistance as 2.0 instead of 2000 Ω.`,
      },
      {
        question: r`Lamp 1 has a resistance of 2.0 Ω and sits alone on an ideal 4.0 V battery. Lamp 2 has a resistance of 16 Ω and sits alone on an ideal 12 V battery. Which lamp is brighter, and why?`,
        options: [r`Lamp 2, since it gives 9 W and lamp 1 gives 8 W`, r`Lamp 1, since it carries 2 A and lamp 2 0.75 A`, r`Lamp 1, since it gives 8 W and lamp 2 gives 0.75 W`, r`Lamp 2, since it gives 192 W and lamp 1 gives 8 W`],
        correctAnswer: 0,
        explanation: r`Brightness is power: lamp 1 gives 16 ÷ 2.0 = 8 W and lamp 2 gives 144 ÷ 16 = 9 W, so lamp 2 is slightly brighter. Comparing currents (2 A against 0.75 A) is not comparing brightness, 0.75 W uses V/R for lamp 2, and 192 W multiplies V by R.`,
      },
    ],
  },
  [r`$n$ identical bulbs are in series. What does each one get, and what is the total power?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A bulb gives 40 W when it is the only load on an ideal supply. Ten bulbs identical to it are then wired in series on that supply. Treating them as ohmic, how much does each bulb give, and how much do all ten give together?`,
        options: [r`4.0 W each; 40 W in total`, r`4.0 W each; 0.40 W in total`, r`40 W each; 400 W in total`, r`0.40 W each; 4.0 W in total`],
        correctAnswer: 3,
        explanation: r`In series each bulb gets V/10, so each gives P₀/n² = 40 ÷ 100 = 0.40 W, and the total is P₀/n = 40 ÷ 10 = 4.0 W. Dividing by n only once gives 4.0 W each, swapping the two results puts 0.40 W as the total, and 40 W each is the parallel result.`,
      },
      {
        question: r`Five identical lamps are wired in series across an ideal 120 V source. What is the voltage across each lamp?`,
        options: [r`120 V`, r`4.8 V`, r`24 V`, r`600 V`],
        correctAnswer: 2,
        explanation: r`Identical bulbs in series share the source voltage equally, so each gets V/n = 120 ÷ 5 = 24 V. A full 120 V across each is the parallel result, 4.8 V divides by n² (that rule is for power), and 600 V multiplies by n.`,
      },
      {
        question: r`A bulb gives 36 W when it is alone on an ideal supply. In a series chain of bulbs identical to it on the same supply, each bulb gives 4.0 W. Treating the bulbs as ohmic, how many bulbs are in the chain?`,
        options: [r`2 bulbs`, r`3 bulbs`, r`6 bulbs`, r`9 bulbs`],
        correctAnswer: 1,
        explanation: r`Each bulb in series gives P₀/n², so n² = 36 ÷ 4.0 = 9 and n = 3. Answering 9 forgets the square root, 6 is the square root of 36 alone, and 2 is the square root of 4.0 alone.`,
      },
      {
        question: r`Six identical ohmic bulbs wired in series draw 10 W in total from an ideal supply. What power would one of these bulbs give if it were alone on that supply?`,
        options: [r`60 W`, r`360 W`, r`1.7 W`, r`0.28 W`],
        correctAnswer: 0,
        explanation: r`The series total is P₀/n, so P₀ = 10 × 6 = 60 W. Multiplying by n² gives 360 W, which would be right if 10 W were the power of one bulb in the chain. Dividing by 6 gives 1.7 W and dividing by 36 gives 0.28 W.`,
      },
      {
        question: r`A decorative chain of 2 identical ohmic lamps runs in series from an ideal supply. The chain is then extended to 6 lamps. By what factor does the power of each lamp fall?`,
        options: [r`By a factor of 3`, r`By a factor of 6`, r`By a factor of 9`, r`By a factor of 36`],
        correctAnswer: 2,
        explanation: r`Each lamp gives P₀/n²: P₀/4 with two lamps and P₀/36 with six, so the power falls by 36 ÷ 4 = 9. A factor of 3 is how the total power and each lamp's voltage change, 6 is just the new number of lamps, and 36 compares with one lamp alone.`,
      },
      {
        question: r`A toy's 18 V ideal supply runs a chain of three matching 12 Ω lamps connected in series. How many watts does a single lamp give off?`,
        options: [r`9.0 W`, r`27 W`, r`3.0 W`, r`81 W`],
        correctAnswer: 2,
        explanation: r`Each lamp gets 18 ÷ 3 = 6.0 V, so each gives 36 ÷ 12 = 3.0 W. This matches P₀/n²: one lamp alone gives 324 ÷ 12 = 27 W, and 27 ÷ 9 = 3.0 W. Dividing by n once gives 9.0 W, 27 W is the solo power, and 81 W multiplies by n.`,
      },
    ],
  },
  [r`$n$ identical bulbs are in parallel across the source. What does each one get, and what is the total power?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A lamp draws 0.50 A when it is the only load on an ideal 12 V supply. Five lamps identical to it are then each connected directly across that supply. What total power do the five lamps draw?`,
        options: [r`6.0 W`, r`30 W`, r`1.2 W`, r`150 W`],
        correctAnswer: 1,
        explanation: r`One lamp alone gives P₀ = 12 × 0.50 = 6.0 W. In parallel each keeps the full voltage and its 6.0 W, so the total is nP₀ = 5 × 6.0 = 30 W. Stopping at 6.0 W forgets to add the lamps, 1.2 W divides by 5, and 150 W multiplies by 5².`,
      },
      {
        question: r`A bulb gives 25 W when it is alone on an ideal supply. A bank of bulbs identical to it, all in parallel across that supply, draws 225 W in total. How many bulbs are in the bank?`,
        options: [r`3 bulbs`, r`5 bulbs`, r`81 bulbs`, r`9 bulbs`],
        correctAnswer: 3,
        explanation: r`The parallel total is nP₀, so n = 225 ÷ 25 = 9. Taking the square root to get 3 applies an n² rule that belongs to series strings, 81 squares the 9, and 5 is the square root of 25 alone.`,
      },
      {
        question: r`Six identical lamps wired in parallel across an ideal supply draw 90 W in total. How much does each lamp give in the bank, and how much would one give alone on that supply?`,
        options: [r`15 W in the bank; 90 W alone`, r`15 W in the bank; 15 W alone`, r`15 W in the bank; 540 W alone`, r`2.5 W in the bank; 15 W alone`],
        correctAnswer: 1,
        explanation: r`The parallel total is nP₀, so each lamp gives 90 ÷ 6 = 15 W, and because each lamp keeps the full source voltage that is also what one gives alone. A lamp alone does not take the whole 90 W, 540 W multiplies 15 W by 6², and 2.5 W divides by 6 twice.`,
      },
      {
        question: r`Eight identical lamps are wired in parallel directly across an ideal 24 V source. What is the voltage across each lamp?`,
        options: [r`24 V`, r`3.0 V`, r`192 V`, r`0.38 V`],
        correctAnswer: 0,
        explanation: r`Every bulb connected directly across an ideal source keeps the full source voltage, so each has 24 V. Dividing by 8 gives 3.0 V, which is the series result. Multiplying by 8 gives 192 V and dividing by 8² gives 0.38 V.`,
      },
      {
        question: r`A bank of identical bulbs in parallel across an ideal source grows from 2 bulbs to 6 bulbs. What happens to the power of each bulb and to the total power?`,
        options: [r`Each is unchanged; the total rises 9-fold`, r`Each is unchanged; the total rises 3-fold`, r`Each falls 3-fold; the total is unchanged`, r`Each falls 9-fold; the total falls 3-fold`],
        correctAnswer: 1,
        explanation: r`Each bulb keeps the full voltage, so each still gives P₀. The total is nP₀, which goes from 2P₀ to 6P₀, a 3-fold rise. A 9-fold change squares the factor, and the options in which each bulb's power falls describe bulbs that have to share the voltage, as in series.`,
      },
      {
        question: r`An instrument panel has twelve identical indicator lamps in parallel across an ideal supply. One lamp alone on that supply gives 50 mW. What total power do the twelve draw?`,
        options: [r`0.60 W`, r`0.050 W`, r`0.0042 W`, r`7.2 W`],
        correctAnswer: 0,
        explanation: r`The parallel total is nP₀ = 12 × 50 mW = 600 mW = 0.60 W. Answering 0.050 W is the power of one lamp, 0.0042 W divides 50 mW by 12, and 7.2 W multiplies by 12².`,
      },
    ],
  },
  [r`How do you find a bulb's resistance from its rating?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A clothes dryer's heating element is rated 4800 W at 240 V. What is its resistance when it runs at its rated voltage?`,
        options: [r`20 Ω`, r`12 Ω`, r`0.050 Ω`, r`0.083 Ω`],
        correctAnswer: 1,
        explanation: r`R = V²/P = 240² ÷ 4800 = 57,600 ÷ 4800 = 12 Ω. Using P/V gives 20, which is the current in amperes. Using V/P without the square gives 0.050, and inverting the whole expression to P/V² gives 0.083.`,
      },
      {
        question: r`A 6.0 V lantern bulb has a filament resistance of 9.0 Ω at its rated voltage. What power rating is printed on it?`,
        options: [r`0.67 W`, r`1.5 W`, r`4.0 W`, r`54 W`],
        correctAnswer: 2,
        explanation: r`Rearranging R = V²/P gives P = V²/R = 36 ÷ 9.0 = 4.0 W. The 0.67 value is V/R, which is the current and leaves out the square. The 1.5 value is R/V, and 54 is V times R.`,
      },
      {
        question: r`A soldering iron is rated at 40 W, and its element has a resistance of 360 Ω at its rated voltage. What is the rated voltage?`,
        options: [r`3.0 V`, r`9.0 V`, r`14,400 V`, r`120 V`],
        correctAnswer: 3,
        explanation: r`Rearranging R = V²/P gives V² = PR = 40 × 360 = 14,400, so V = 120 V. Stopping at 14,400 forgets the square root, 9.0 is R/P, and 3.0 is the square root of R/P.`,
      },
      {
        question: r`Two bulbs both have a rated power of 60 W. One is made for a 120 V supply and the other for a 240 V supply. How does the resistance of the 240 V bulb compare with that of the 120 V bulb at their rated voltages?`,
        options: [r`It is 2 times as large`, r`It is 4 times as large`, r`It is 16 times as large`, r`It is one-quarter as large`],
        correctAnswer: 1,
        explanation: r`R = V²/P, and the power is the same, so doubling the rated voltage multiplies the resistance by 2² = 4. A factor of 2 forgets the square, 16 squares twice, and one-quarter inverts the ratio.`,
      },
      {
        question: r`A space heater is rated 2.0 kW at 200 V. What is its resistance when it runs at its rated voltage?`,
        options: [r`10 Ω`, r`0.10 Ω`, r`20,000 Ω`, r`20 Ω`],
        correctAnswer: 3,
        explanation: r`R = V²/P = 200² ÷ 2000 = 40,000 ÷ 2000 = 20 Ω. Leaving the power as 2.0 instead of 2000 W gives 20,000 Ω, P/V gives 10 (the current in amperes), and V/P without the square gives 0.10.`,
      },
      {
        question: r`A penlight bulb is rated 0.50 W at 3.0 V. What is its resistance when it runs at its rated voltage?`,
        options: [r`6.0 Ω`, r`4.5 Ω`, r`1.5 Ω`, r`18 Ω`],
        correctAnswer: 3,
        explanation: r`R = V²/P = 9.0 ÷ 0.50 = 18 Ω. Using V/P without the square gives 6.0, multiplying V² by P instead of dividing gives 4.5, and V times P gives 1.5.`,
      },
    ],
  },
  [r`A 60 W bulb and a 100 W bulb are wired in parallel, then in series. Which is brighter each time?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A 60 W bulb and a 100 W bulb made for the same voltage are wired in series, and the 60 W bulb glows brighter. Which reasoning explains this?`,
        options: [r`They share one voltage, and the 60 W bulb has the larger resistance`, r`They share one current, and the 60 W bulb has the larger resistance`, r`They share one current, and the 60 W bulb has the smaller resistance`, r`They share one voltage, and the 60 W bulb has the smaller resistance`],
        correctAnswer: 1,
        explanation: r`Series bulbs carry the same current, so P = I²R makes the larger resistance dissipate more, and R = V²/P gives the lower-wattage bulb the larger resistance. Sharing one voltage describes the parallel case, where the 100 W bulb wins, and the 60 W bulb does not have the smaller resistance.`,
      },
      {
        question: r`Two unlabelled bulbs, J and K, are made for the same voltage but have different wattage ratings. Wired in series across that voltage, J glows brighter. What follows?`,
        options: [r`J has the lower rating, and K is the brighter one in parallel`, r`J has the lower rating, and J is the brighter one in parallel`, r`J has the higher rating, and K is the brighter one in parallel`, r`J has the higher rating, and J is the brighter one in parallel`],
        correctAnswer: 0,
        explanation: r`In series the current is shared, so the brighter bulb J has the larger resistance, which means the lower wattage rating. In parallel each bulb gets its rated voltage and the order swaps, so the higher-rated bulb K is brighter. The other options either give J the higher rating or keep the series order in parallel.`,
      },
    ],
  },
  [r`How do you rank brightness without computing?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Three bulbs with different resistances form one series string across an ideal battery. Which method ranks their brightness correctly without computing any powers?`,
        options: [r`They share current, so use P = V²/R: the smallest R is brightest`, r`They share current, so use P = I²R: the largest R is brightest`, r`They share voltage, so use P = I²R: the largest R is brightest`, r`They share voltage, so use P = V²/R: the smallest R is brightest`],
        correctAnswer: 1,
        explanation: r`Bulbs in one series string carry the same current, so the form that holds the shared quantity constant is P = I²R, and power then rises with R. Using P = V²/R needs a shared voltage, which is the parallel case, and series bulbs with different resistances do not have equal voltages.`,
      },
      {
        question: r`Three bulbs with different resistances are either all in series or all in parallel across an ideal battery. The bulb with the smallest resistance glows brightest. What does that show?`,
        options: [r`They are in series: with a shared current, P = I²R favours small R`, r`They are in parallel: with a shared current, P = I²R favours small R`, r`They are in parallel: with a shared voltage, P = V²/R favours small R`, r`They are in series: with a shared voltage, P = V²/R favours small R`],
        correctAnswer: 2,
        explanation: r`With a shared voltage P = V²/R, so the smallest resistance is brightest, and a shared voltage means parallel. In series the current is shared and P = I²R makes the largest resistance brightest, not the smallest. Parallel bulbs do not share a current, and series bulbs do not share a voltage.`,
      },
    ],
  },
  [r`One of two identical bulbs carries twice the current of the other. How do their powers compare?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Two identical ohmic bulbs sit in different branches of a circuit. The first carries 2.0 A and dissipates 12 W. The second carries 1.0 A. What power does the second bulb dissipate?`,
        options: [r`3.0 W`, r`6.0 W`, r`24 W`, r`48 W`],
        correctAnswer: 0,
        explanation: r`For identical bulbs P = I²R, so half the current gives one quarter of the power: 12 ÷ 4 = 3.0 W. Halving the power gives 6.0 W, doubling it gives 24 W, and 48 W multiplies by 4 instead of dividing.`,
      },
      {
        question: r`Two identical ohmic bulbs sit in different parts of a circuit. One carries 0.20 A and dissipates 0.50 W. The other dissipates 8.0 W. What current does the other bulb carry?`,
        options: [r`3.2 A`, r`1.6 A`, r`0.050 A`, r`0.80 A`],
        correctAnswer: 3,
        explanation: r`The power ratio is 8.0 ÷ 0.50 = 16, and P = I²R means the current ratio is the square root, 4, so I = 4 × 0.20 = 0.80 A. Multiplying the current by 16 gives 3.2 A, using half of 16 gives 1.6 A, and dividing by 4 gives 0.050 A.`,
      },
      {
        question: r`Two identical ohmic bulbs in a circuit carry 0.50 A and 2.5 A. How does the power of the bulb with the larger current compare with the power of the other?`,
        options: [r`It is 5 times as large`, r`It is 10 times as large`, r`It is 25 times as large`, r`It is 2.2 times as large`],
        correctAnswer: 2,
        explanation: r`The current ratio is 2.5 ÷ 0.50 = 5, and P = I²R for the same R, so the power ratio is 5² = 25. A factor of 5 forgets the square, 10 doubles instead of squaring, and 2.2 takes the square root.`,
      },
      {
        question: r`Two identical ohmic heating coils are used in a lab. The coil that carries 3.0 A dissipates 18 W. The other coil carries 6.0 A. What power does the other coil dissipate?`,
        options: [r`72 W`, r`36 W`, r`9.0 W`, r`4.5 W`],
        correctAnswer: 0,
        explanation: r`Twice the current through the same resistance gives four times the power, because P = I²R: 18 × 4 = 72 W. Doubling gives 36 W, halving gives 9.0 W, and dividing by 4 gives 4.5 W.`,
      },
      {
        question: r`Two identical ohmic indicator lamps are on a circuit board. The one that carries 20 mA dissipates 40 mW. The other carries 5.0 mA. What power does the other lamp dissipate?`,
        options: [r`2.5 mW`, r`10 mW`, r`160 mW`, r`640 mW`],
        correctAnswer: 0,
        explanation: r`The current is 5.0 ÷ 20 = one quarter as large, and P = I²R, so the power is (1/4)² = 1/16 as large: 40 ÷ 16 = 2.5 mW. Dividing by 4 gives 10 mW, multiplying by 4 gives 160 mW, and multiplying by 16 gives 640 mW.`,
      },
      {
        question: r`Two identical ohmic bulbs are in different parts of a circuit. The bulb that carries 0.40 A dissipates 4.0 W. The other bulb carries 0.60 A. What power does the other bulb dissipate?`,
        options: [r`6.0 W`, r`9.0 W`, r`2.7 W`, r`1.8 W`],
        correctAnswer: 1,
        explanation: r`The current is 0.60 ÷ 0.40 = 1.5 times as large, and P = I²R, so the power is 1.5² = 2.25 times as large: 4.0 × 2.25 = 9.0 W. Multiplying by 1.5 gives 6.0 W, dividing by 1.5 gives 2.7 W, and dividing by 2.25 gives 1.8 W.`,
      },
    ],
  },
  [r`A bulb burns out. What happens in a series string, and in a parallel bank across an ideal source?`]: {
    kind: 'concept',
    more: [
      {
        question: r`On a holiday display, one bulb fails in the first strand and the whole strand goes dark. One bulb fails in the second strand and the rest stay exactly as bright as before. Both strands plug into an ideal supply. How are they wired?`,
        options: [r`First strand in parallel; second strand in series`, r`First strand in series; second strand in parallel`, r`First strand in series; second strand in series`, r`First strand in parallel; second strand in parallel`],
        correctAnswer: 1,
        explanation: r`A burned-out bulb is an open circuit. In a series string that break stops the one current every bulb depends on, so the whole first strand goes dark. In a parallel bank each bulb has its own path across the supply, so the others in the second strand carry on unchanged.`,
      },
      {
        question: r`The filament of one bulb in a series string breaks. What does the broken bulb act as, and what does that do to the string?`,
        options: [r`A short circuit, so the current everywhere in the string is zero`, r`A short circuit, so the current in the rest of the string rises`, r`An open circuit, so the current everywhere in the string is zero`, r`An open circuit, so the other bulbs share its voltage and brighten`],
        correctAnswer: 2,
        explanation: r`A broken filament leaves a gap, which is an open circuit, and a series string has only one path, so no current flows anywhere and every bulb goes dark. A short circuit is a bypass of negligible resistance, not a break. The other bulbs cannot brighten, because with zero current they dissipate no power.`,
      },
    ],
  },
  [r`In A + (B ∥ C), bulb C burns out. What happens to A and to B?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Bulb A is in series with a parallel pair of bulbs, B and C, across an ideal battery. When C burns out, A dims and B brightens. Which chain of reasoning explains both changes?`,
        options: [r`Total resistance falls, total current rises, and B now carries all of it`, r`Total resistance rises, total current falls, and B's share falls with it`, r`Total resistance stays the same, so A and B carry what they did before`, r`Total resistance rises, total current falls, and B now carries all of it`],
        correctAnswer: 3,
        explanation: r`Losing a parallel branch raises the equivalent resistance, so the battery current falls and A, which carries all of it, dims. Less voltage is dropped across A, so more is left across B, and B brightens while carrying the whole current. Removing a branch never lowers the resistance, and B's current rises even though the total falls.`,
      },
      {
        question: r`On an ideal source, lamp P is in series with lamps Q and R, which are connected in parallel with each other. The filament of R breaks. What happens to the rate at which the source supplies energy and to the voltage across Q?`,
        options: [r`The source's power falls, and the voltage across Q rises`, r`The source's power rises, and the voltage across Q rises`, r`The source's power falls, and the voltage across Q falls`, r`The source's power rises, and the voltage across Q falls`],
        correctAnswer: 0,
        explanation: r`With R open the equivalent resistance rises, so the source current falls and the source's power, V times I, falls with it. A smaller current means a smaller drop across P, which leaves more of the fixed source voltage across Q. That is why the series lamp dims while the surviving parallel lamp brightens.`,
      },
    ],
  },
  [r`A bulb is added in series, or directly across the source. What happens to the others?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Two lamps are wired in series across an ideal supply. A third lamp is then connected directly across the supply terminals. What happens to the two original lamps and to the total power the supply delivers?`,
        options: [r`The two are unchanged, and the total power falls`, r`The two both dim, and the total power is unchanged`, r`The two both dim, and the total power rises`, r`The two are unchanged, and the total power rises`],
        correctAnswer: 3,
        explanation: r`An ideal supply holds its terminal voltage, so the series pair still has the same voltage, current and brightness. The new lamp is an extra branch that draws its own current, so the total power rises. Lamps dim only when something is added in series in their own path.`,
      },
      {
        question: r`Two lamps are wired in series across an ideal source. A third lamp is added to the circuit. Afterwards the two original lamps are exactly as bright as before, yet the source supplies more current. Where was the third lamp added?`,
        options: [r`Directly across the source terminals, as a new branch`, r`In series with the two lamps, as a third one in line`, r`In parallel with just one of the two original lamps`, r`In series with the source, ahead of the two lamps`],
        correctAnswer: 0,
        explanation: r`A lamp connected directly across an ideal source leaves the voltage on the existing path untouched, so the original lamps are unchanged while the extra branch adds current. Adding it in series anywhere in their path would dim both and lower the current. Putting it across just one lamp would dim that lamp and brighten the other.`,
      },
    ],
  },
  [r`How is household wiring arranged, and where is the breaker?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A lamp and a space heater are running on the same household branch circuit. The heater is switched off. What happens to the lamp and to the current through the breaker?`,
        options: [r`The lamp is unchanged, and the breaker current falls`, r`The lamp brightens, and the breaker current falls`, r`The lamp is unchanged, and the breaker current is too`, r`The lamp goes out, and the breaker current is zero`],
        correctAnswer: 0,
        explanation: r`Appliances are in parallel, so the lamp keeps the full line voltage whatever the heater does, and its brightness does not change. The breaker is in series with the whole branch and carries the sum of the appliance currents, so its current falls by the heater's current. The lamp would go out only if the two were in series.`,
      },
      {
        question: r`Several appliances are running on one household branch circuit when its breaker trips. What happens to the appliances, and why?`,
        options: [r`All of them stay on, since the breaker is in parallel with the branch`, r`Only the last one goes off, since the breaker is in series with it alone`, r`Only the largest goes off, since the breaker is in parallel with it alone`, r`All of them go off, since the breaker is in series with the whole branch`],
        correctAnswer: 3,
        explanation: r`The breaker sits in series with the entire branch, so all the current for the parallel appliances passes through it, and when it opens every appliance on the branch loses its supply. A breaker in parallel with the load could not interrupt the current, and it is not wired to a single appliance.`,
      },
    ],
  },
  [r`How do you get each bulb's resistance from its rating?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 40 W lamp and a 10 W lamp are both made for a 20 V supply. What are the resistances of their filaments at that voltage, in that order?`,
        options: [r`40 Ω and 10 Ω`, r`2 Ω and 0.5 Ω`, r`10 Ω and 40 Ω`, r`0.5 Ω and 2 Ω`],
        correctAnswer: 2,
        explanation: r`R = V²/P gives 400 ÷ 40 = 10 Ω for the 40 W lamp and 400 ÷ 10 = 40 Ω for the 10 W lamp, so the lower wattage has the larger resistance. The reversed pair gives the higher wattage the larger resistance, 2 and 0.5 are P/V, and 0.5 and 2 are V/P without the square.`,
      },
      {
        question: r`A 20 W lamp and a 60 W lamp are made for the same supply voltage. At that voltage the 20 W lamp's filament has a resistance of 90 Ω. What is the resistance of the 60 W lamp's filament?`,
        options: [r`10 Ω`, r`270 Ω`, r`30 Ω`, r`810 Ω`],
        correctAnswer: 2,
        explanation: r`R = V²/P with the same V, so resistance is inversely proportional to rated power: three times the wattage means one third of the resistance, 90 ÷ 3 = 30 Ω. Multiplying by 3 gives 270 Ω, and 10 Ω and 810 Ω divide and multiply by 3².`,
      },
      {
        question: r`A 6 W bulb and a 12 W bulb are both rated at 12 V. They are connected in series. Using their resistances at the rated voltage, what is the total resistance of the pair?`,
        options: [r`8 Ω`, r`36 Ω`, r`3 Ω`, r`1.5 Ω`],
        correctAnswer: 1,
        explanation: r`R = V²/P gives 144 ÷ 6 = 24 Ω and 144 ÷ 12 = 12 Ω, and in series they add to 36 Ω. Treating the pair as a single 18 W bulb gives 8 Ω, adding V/P values (2 + 1) gives 3, and adding P/V values (0.5 + 1) gives 1.5.`,
      },
      {
        question: r`Two heating elements made for a 100 V supply have resistances of 50 Ω and 200 Ω at that voltage. What are their rated powers, in that order?`,
        options: [r`50 W and 200 W`, r`200 W and 50 W`, r`2 W and 0.5 W`, r`0.5 W and 2 W`],
        correctAnswer: 1,
        explanation: r`Rearranging R = V²/P gives P = V²/R: 10,000 ÷ 50 = 200 W and 10,000 ÷ 200 = 50 W, so the smaller resistance has the higher rating. The reversed pair assumes rating rises with resistance, 2 and 0.5 are V/R, and 0.5 and 2 are R/V.`,
      },
      {
        question: r`A 2.0 kW kettle and a 500 W toaster are both made for a 100 V supply. What are the resistances of their elements at that voltage, in that order?`,
        options: [r`20 Ω and 5.0 Ω`, r`5.0 Ω and 20 Ω`, r`5000 Ω and 20 Ω`, r`0.050 Ω and 0.20 Ω`],
        correctAnswer: 1,
        explanation: r`R = V²/P gives 10,000 ÷ 2000 = 5.0 Ω for the kettle and 10,000 ÷ 500 = 20 Ω for the toaster. The reversed pair gives the higher wattage the larger resistance, 5000 Ω leaves the kettle's power as 2.0 instead of 2000 W, and 0.050 and 0.20 are V/P without the square.`,
      },
      {
        question: r`A 5.0 W bulb and a 20 W bulb are made for the same rated voltage. At that voltage the 5.0 W bulb has a resistance of 20 Ω. What is the rated voltage, and what is the resistance of the 20 W bulb?`,
        options: [r`10 V and 80 Ω`, r`10 V and 5.0 Ω`, r`100 V and 500 Ω`, r`4.0 V and 0.80 Ω`],
        correctAnswer: 1,
        explanation: r`From R = V²/P, V² = PR = 5.0 × 20 = 100, so V = 10 V, and the 20 W bulb has R = 100 ÷ 20 = 5.0 Ω. An answer of 80 Ω gives the higher wattage the larger resistance, 100 V forgets the square root, and 4.0 V comes from R/P.`,
      },
    ],
  },
  [r`Which power form and which bulb wins in series, and in parallel?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 4 Ω coil and a 12 Ω coil are wired in series, and 0.50 A flows through both. Which coil dissipates more power, and how much?`,
        options: [r`The 12 Ω, at 3.0 W`, r`The 4 Ω, at 3.0 W`, r`The 4 Ω, at 1.0 W`, r`The 12 Ω, at 6.0 W`],
        correctAnswer: 0,
        explanation: r`In series the current is shared, so use P = I²R: the 12 Ω coil gives 0.25 × 12 = 3.0 W and the 4 Ω coil only 1.0 W, so the larger resistance wins. The options naming the 4 Ω coil pick the smaller resistance, and 6.0 W is I times R, which is the voltage across the coil.`,
      },
      {
        question: r`A 6 Ω heater and a 3 Ω heater are wired in parallel with 6.0 V across both. Which heater dissipates more power, and how much?`,
        options: [r`The 6 Ω, at 12 W`, r`The 3 Ω, at 12 W`, r`The 6 Ω, at 6.0 W`, r`The 3 Ω, at 2.0 W`],
        correctAnswer: 1,
        explanation: r`In parallel the voltage is shared, so use P = V²/R: the 3 Ω heater gives 36 ÷ 3 = 12 W and the 6 Ω heater only 6.0 W, so the smaller resistance wins. The options naming the 6 Ω heater pick the larger resistance, and 2.0 W is V/R, which is the current.`,
      },
      {
        question: r`A 2 Ω resistor and a 10 Ω resistor are wired in series across a battery. Which one dissipates more power, and by what factor?`,
        options: [r`The 2 Ω, with 5 times the power`, r`The 10 Ω, with 25 times the power`, r`The 2 Ω, with 25 times the power`, r`The 10 Ω, with 5 times the power`],
        correctAnswer: 3,
        explanation: r`Series resistors carry the same current, so P = I²R and power is proportional to R: the 10 Ω resistor has 10 ÷ 2 = 5 times the power. Choosing the 2 Ω resistor applies the parallel rule, and a factor of 25 squares the resistance ratio, but only the current is squared in I²R.`,
      },
      {
        question: r`An 8 Ω coil and a 2 Ω coil are wired in parallel across the same source. The 8 Ω coil dissipates 2.0 W. What power does the 2 Ω coil dissipate?`,
        options: [r`0.50 W`, r`2.0 W`, r`32 W`, r`8.0 W`],
        correctAnswer: 3,
        explanation: r`In parallel the voltage is shared, so P = V²/R and power is inversely proportional to R: one quarter of the resistance gives four times the power, 2.0 × 4 = 8.0 W. In numbers, V² = 2.0 × 8 = 16 and 16 ÷ 2 = 8.0 W. Dividing by 4 gives 0.50 W, and 32 W squares the ratio.`,
      },
      {
        question: r`A 3 Ω resistor and a 9 Ω resistor are wired in series in a heater. The 3 Ω resistor dissipates 12 W. What power does the 9 Ω resistor dissipate?`,
        options: [r`36 W`, r`4.0 W`, r`12 W`, r`108 W`],
        correctAnswer: 0,
        explanation: r`In series the current is shared, so P = I²R and power is proportional to R: three times the resistance gives three times the power, 12 × 3 = 36 W. In numbers, I² = 12 ÷ 3 = 4 and 4 × 9 = 36 W. Dividing by 3 gives 4.0 W, which is the parallel rule, and 108 W multiplies by 9.`,
      },
      {
        question: r`A 1.0 kΩ resistor and a 4.0 kΩ resistor are wired in series on a sensor board, and 10 mA flows through both. Which one dissipates more power, and how much?`,
        options: [r`The 1.0 kΩ, at 0.10 W`, r`The 4.0 kΩ, at 40 W`, r`The 4.0 kΩ, at 400 W`, r`The 4.0 kΩ, at 0.40 W`],
        correctAnswer: 3,
        explanation: r`In series use P = I²R, and the larger resistance wins: (0.010 A)² × 4000 Ω = 1.0 × 10⁻⁴ × 4000 = 0.40 W, against 0.10 W in the 1.0 kΩ resistor. The 40 value is I times R, which is the voltage, and 400 comes from 10² × 4.0 with no unit conversions.`,
      },
    ],
  },
  [r`Do rated bulbs wired in series run at their rated powers?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Lamp J is stamped 12 W, 12 V and lamp K is stamped 6 W, 12 V. They are connected in series across an ideal 18 V supply. Treating the lamps as ohmic, what power does each one give out?`,
        options: [r`J: 3 W, and K: 6 W`, r`J: 6 W, and K: 3 W`, r`J: 12 W, and K: 6 W`, r`J: 18 W, and K: 9 W`],
        correctAnswer: 0,
        explanation: r`R = V²/P gives 144 ÷ 12 = 12 Ω for J and 144 ÷ 6 = 24 Ω for K. The shared current is 18 ÷ 36 = 0.50 A, so P = I²R gives 0.25 × 12 = 3 W for J and 0.25 × 24 = 6 W for K. The stamped 12 W and 6 W hold only with 12 V across each lamp, and the reversed pair gives the larger power to the smaller resistance.`,
      },
      {
        question: r`Two identical bulbs are each rated 8 W at 4 V. They are wired in series across an ideal 4 V battery. Treating them as ohmic, what current flows through them?`,
        options: [r`2.0 A`, r`4.0 A`, r`0.50 A`, r`1.0 A`],
        correctAnswer: 3,
        explanation: r`Each bulb has R = V²/P = 16 ÷ 8 = 2 Ω, so the series pair is 4 Ω and the current is 4 ÷ 4 = 1.0 A. The rated current of one bulb is 8 ÷ 4 = 2.0 A, but that flows only with 4 V across each bulb. Adding two rated currents gives 4.0 A, and 0.50 A halves the current twice.`,
      },
      {
        question: r`A camper's two heating elements are stamped 20 W, 10 V and 5 W, 10 V. She connects them in series on an ideal 10 V supply. Assuming their resistances stay fixed, how many watts does the element stamped 5 W really give off?`,
        options: [r`0.80 W`, r`5.0 W`, r`3.2 W`, r`8.0 W`],
        correctAnswer: 2,
        explanation: r`R = V²/P gives 100 ÷ 20 = 5 Ω and 100 ÷ 5 = 20 Ω. The shared current is 10 ÷ 25 = 0.40 A, so the element stamped 5 W gives 0.16 × 20 = 3.2 W. The 0.80 W value belongs to the other element, 5.0 W is the stamped value, which needs the full 10 V, and 8.0 is I times R, the voltage across the element.`,
      },
      {
        question: r`Two terrarium heaters stamped 30 W, 30 V and 15 W, 30 V are connected in series on an ideal 30 V supply. Assuming their resistances stay fixed, how many watts do they give off altogether?`,
        options: [r`15 W`, r`30 W`, r`10 W`, r`45 W`],
        correctAnswer: 2,
        explanation: r`R = V²/P gives 900 ÷ 30 = 30 Ω and 900 ÷ 15 = 60 Ω, a total of 90 Ω. The total power is V²/R = 900 ÷ 90 = 10 W, with a shared current of 1/3 A. Adding the stamped values gives 45 W, which holds only when each heater has the full 30 V, and 15 W and 30 W are the single stamped values.`,
      },
      {
        question: r`A 2 W lamp and a 4 W lamp, both rated at 4 V, are wired in series across an ideal 6 V supply. Treating them as ohmic, what voltage is across each lamp?`,
        options: [r`2 W lamp: 2 V. 4 W lamp: 4 V`, r`2 W lamp: 3 V. 4 W lamp: 3 V`, r`2 W lamp: 4 V. 4 W lamp: 2 V`, r`2 W lamp: 4 V. 4 W lamp: 4 V`],
        correctAnswer: 2,
        explanation: r`R = V²/P gives 16 ÷ 2 = 8 Ω and 16 ÷ 4 = 4 Ω. The shared current is 6 ÷ 12 = 0.50 A, so the drops are 0.50 × 8 = 4 V and 0.50 × 4 = 2 V. The reversed pair gives the larger drop to the smaller resistance, 3 V each assumes equal resistances, and 4 V each would need an 8 V supply.`,
      },
      {
        question: r`Two indicator lamps stamped 0.50 W, 5.0 V and 0.25 W, 5.0 V are connected in series on an ideal 3.0 V source. Assuming their resistances stay fixed, how much does the one stamped 0.25 W really give off?`,
        options: [r`20 mW`, r`60 mW`, r`40 mW`, r`250 mW`],
        correctAnswer: 2,
        explanation: r`R = V²/P gives 25 ÷ 0.50 = 50 Ω and 25 ÷ 0.25 = 100 Ω. The shared current is 3.0 ÷ 150 = 0.020 A, so the lamp stamped 0.25 W gives (0.020)² × 100 = 0.040 W = 40 mW. The 20 mW value belongs to the other lamp, 60 mW is the total, and 250 mW is the stamped value.`,
      },
    ],
  },
  [r`How do you rank a mixed circuit?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 9.0 V ideal supply runs three matching 2.0 Ω lamps. Lamp P is in series with lamps Q and R, which are connected in parallel with each other. How many watts do P and Q give off?`,
        options: [r`P: 18 W, and Q: 4.5 W`, r`P: 18 W, and Q: 9.0 W`, r`P: 4.5 W, and Q: 18 W`, r`P: 9.0 W, and Q: 9.0 W`],
        correctAnswer: 0,
        explanation: r`Q carries half of the current in P, so it has one quarter of the power. Confirm: R_eq = 2.0 + 1.0 = 3.0 Ω, the total current is 9.0 ÷ 3.0 = 3.0 A, so P gives 3.0² × 2.0 = 18 W and Q gives 1.5² × 2.0 = 4.5 W. Half of 18 W forgets the square, and the other options swap the lamps or treat them as equal.`,
      },
      {
        question: r`Four identical bulbs run from an ideal battery. Bulb A is in series with a parallel group that has two branches: bulbs B and C in series in one branch, and bulb D alone in the other. Which statement ranks them?`,
        options: [r`A, then D, then B and C equal; A has 3 times B's power`, r`A, then D, then B and C equal; A has 9 times B's power`, r`D, then A, then B and C equal; D has 4 times B's power`, r`A, then B and C equal, then D; A has 9 times D's power`],
        correctAnswer: 1,
        explanation: r`The branch with two bulbs has twice the resistance of the branch with D, so it takes one third of the total current and D takes two thirds. With identical bulbs power goes as current squared, so the powers are in the ratio 9 to 4 to 1 for the series bulb, the lone branch bulb, and each of the two that share a branch. A factor of 3 forgets the square, and the bulb that carries the whole current must be brightest.`,
      },
      {
        question: r`Four identical 3.0 Ω bulbs run from an ideal 12 V battery. Bulb A is in series with a parallel bank of the other three. What power does one bulb in the bank dissipate?`,
        options: [r`9.0 W`, r`27 W`, r`48 W`, r`3.0 W`],
        correctAnswer: 3,
        explanation: r`R_eq = 3.0 + 1.0 = 4.0 Ω, so the total current is 12 ÷ 4.0 = 3.0 A and each bank bulb carries 1.0 A, giving 1.0² × 3.0 = 3.0 W. That is one ninth of A's 27 W, as one third of the current requires. Taking one third of 27 W gives 9.0 W, and 48 W puts the full 12 V across one bulb.`,
      },
      {
        question: r`Three matching 5.0 Ω heater pads run from an ideal 15 V supply. Pad X is in series with pads Y and Z, which are connected in parallel with each other. What are the voltages across X and across Y?`,
        options: [r`5.0 V across X; 10 V across Y`, r`7.5 V across X; 7.5 V across Y`, r`15 V across X; 7.5 V across Y`, r`10 V across X; 5.0 V across Y`],
        correctAnswer: 3,
        explanation: r`R_eq = 5.0 + 2.5 = 7.5 Ω, so the total current is 15 ÷ 7.5 = 2.0 A. The drop across X is 2.0 × 5.0 = 10 V, which leaves 5.0 V across the parallel pads. The reversed pair gives the larger drop to the smaller resistance, 7.5 V each treats the two pads as one more 5.0 Ω pad, and the drops must add up to 15 V.`,
      },
      {
        question: r`Four identical bulbs run from an ideal battery. Bulbs A and B are in series with each other and with a parallel pair, C and D. What fraction of the battery's total power is dissipated in bulb A?`,
        options: [r`40%`, r`25%`, r`33%`, r`50%`],
        correctAnswer: 0,
        explanation: r`C and D each carry half the current of A and B, so each has one quarter of the power. In units of C's power the bulbs give 4, 4, 1 and 1, a total of 10, so A takes 4 ÷ 10 = 40%. Equal sharing gives 25%, and 33% uses the current ratio 2 to 1 without squaring it.`,
      },
      {
        question: r`Three identical bulbs run from an ideal battery. Bulb A is in series with a parallel pair, B and C. Bulb B dissipates 2.0 W. What total power does the battery deliver?`,
        options: [r`6.0 W`, r`8.0 W`, r`10 W`, r`12 W`],
        correctAnswer: 3,
        explanation: r`A carries twice B's current, so with P = I²R it dissipates four times as much, 8.0 W. C matches B at 2.0 W, so the total is 8.0 + 2.0 + 2.0 = 12 W, which is what the battery must deliver. Treating all three as equal gives 6.0 W, doubling instead of squaring gives 4.0 + 2.0 + 2.0 = 8.0 W, and 10 W leaves out C.`,
      },
    ],
  },
  [r`A bulb in the parallel bank burns out. How do you find the new brightnesses?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 12 V ideal supply runs three matching 2.0 Ω lamps. Lamp P is in series with lamps Q and R, which are connected in parallel with each other. The filament of R breaks. How many watts does P give off afterwards?`,
        options: [r`18 W`, r`8.0 W`, r`32 W`, r`72 W`],
        correctAnswer: 0,
        explanation: r`Re-solve from R_eq: with R open the circuit is P and Q in series, 4.0 Ω, so the current is 12 ÷ 4.0 = 3.0 A and P gives 3.0² × 2.0 = 18 W. Before the break P gave 32 W (4.0 A), so it has dimmed. The 8.0 W value is what Q gave before, and 72 W puts the full 12 V across P.`,
      },
      {
        question: r`Four identical 6.0 Ω bulbs run from an ideal 18 V battery. Bulb A is in series with a parallel bank of the other three. One bank bulb burns out. How does the current in each surviving bank bulb change?`,
        options: [r`It rises from 0.75 A to 1.5 A`, r`It stays the same at 0.75 A`, r`It falls from 2.25 A to 2.0 A`, r`It rises from 0.75 A to 1.0 A`],
        correctAnswer: 3,
        explanation: r`Before: R_eq = 6.0 + 2.0 = 8.0 Ω, the total current is 2.25 A, and each of three bank bulbs carries 0.75 A. After: R_eq = 6.0 + 3.0 = 9.0 Ω, the total current is 2.0 A, and each of two bank bulbs carries 1.0 A. The fall from 2.25 A to 2.0 A is the change in bulb A, which is in series with the bank.`,
      },
      {
        question: r`On an ideal 24 V supply, a 4.0 Ω heater X is in series with a 12 Ω heater Y and a 6.0 Ω heater Z, which are connected in parallel with each other. Heater Z fails open. How many watts does Y give off afterwards?`,
        options: [r`9.0 W`, r`12 W`, r`27 W`, r`48 W`],
        correctAnswer: 2,
        explanation: r`Re-solve from R_eq: with Z open, R_eq = 4.0 + 12 = 16 Ω, so the current is 24 ÷ 16 = 1.5 A and Y gives 1.5² × 12 = 27 W. Before the failure Y gave 12 W (12 V across it), so it now gives more. The 9.0 W value is what X gives afterwards, and 48 W puts the full 24 V across Y.`,
      },
      {
        question: r`Three matching 8.0 Ω lamps run from a 24 V ideal source. Lamp P is in series with lamps Q and R, which are connected in parallel with each other. The filament of R breaks. What is the voltage across Q afterwards?`,
        options: [r`8.0 V`, r`16 V`, r`12 V`, r`24 V`],
        correctAnswer: 2,
        explanation: r`With R open, P and Q are two equal lamps in series, so each has 24 ÷ 2 = 12 V. Before the break R_eq was 12 Ω and the current 2.0 A, giving 16 V across P and 8.0 V across Q, so the voltage across Q has risen. A full 24 V across Q would ignore lamp P, which still carries the same current as Q.`,
      },
      {
        question: r`Three matching ohmic heater pads run from an ideal supply. Pad X is in series with pads Y and Z, which are connected in parallel with each other. Pad Z fails open. How does the rate of heating in pad Y change?`,
        options: [r`It becomes 9/4 of its old value`, r`It becomes 3/2 of its old value`, r`It becomes 4 times its old value`, r`It becomes 9/16 of its old value`],
        correctAnswer: 0,
        explanation: r`Before, the parallel pads together are R/2 in series with the R of pad X, so Y has one third of the supply voltage. After, Y and X split the voltage equally, so Y has one half. The voltage ratio is 3/2 and P = V²/R, so the power becomes 9/4 of its old value. A factor of 3/2 forgets the square, and 9/16 is the change in pad X.`,
      },
      {
        question: r`Three identical 1.0 kΩ indicator lamps run from an ideal 6.0 V source. Lamp A is in series with a parallel pair, B and C. Lamp C fails open. What current does the source supply now?`,
        options: [r`3.0 mA`, r`4.0 mA`, r`6.0 mA`, r`12 mA`],
        correctAnswer: 0,
        explanation: r`Re-solve from R_eq: with C open, R_eq = 1.0 + 1.0 = 2.0 kΩ, so I = 6.0 V ÷ 2000 Ω = 3.0 × 10⁻³ A = 3.0 mA. Before the failure R_eq was 1.5 kΩ and the current 4.0 mA. Using one lamp alone gives 6.0 mA, and using only the old 0.50 kΩ pair gives 12 mA.`,
      },
    ],
  },
  [r`What check finishes a bulb-power problem?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 12 V ideal battery supplies a total current of 1.5 A to two bulbs. A student's solution gives the bulb powers as 12 W and 9 W. What does the final check show?`,
        options: [r`The bulbs total 3 W less than the battery delivers`, r`The bulbs total 3 W more than the battery delivers`, r`The bulbs total 13 W more than the battery delivers`, r`The bulbs total exactly what the battery delivers`],
        correctAnswer: 1,
        explanation: r`The battery delivers V × I = 12 × 1.5 = 18 W, but the bulb powers add to 12 + 9 = 21 W, which is 3 W too many, so the solution has an error. A 13 W excess comes from dividing 12 by 1.5 to get 8 W for the battery, and the totals do not match.`,
      },
      {
        question: r`Three bulbs on one ideal battery dissipate 4.0 W, 5.0 W and 6.0 W, and the battery supplies a total current of 2.5 A. What must the battery voltage be?`,
        options: [r`2.0 V`, r`0.17 V`, r`6.0 V`, r`37.5 V`],
        correctAnswer: 2,
        explanation: r`The bulb powers add to 15 W, which must equal the battery's V × I, so V = 15 ÷ 2.5 = 6.0 V. Using only one bulb's 5.0 W gives 2.0 V, inverting the ratio gives 0.17, and multiplying 15 by 2.5 gives 37.5.`,
      },
      {
        question: r`A 9.0 V ideal battery supplies a total current of 2.0 A to three bulbs. Which set of bulb powers passes the final check?`,
        options: [r`6 W, 3 W and 2 W`, r`2 W, 1.5 W and 1 W`, r`18 W, 12 W and 6 W`, r`10 W, 5 W and 3 W`],
        correctAnswer: 3,
        explanation: r`The battery delivers V × I = 9.0 × 2.0 = 18 W, and only 10 + 5 + 3 adds to 18 W. The set that adds to 11 W matches V plus I, the set that adds to 4.5 W matches V divided by I, and the set that adds to 36 W matches V × I².`,
      },
      {
        question: r`Three indicator lamps on an ideal 5.0 V source dissipate 80 mW, 70 mW and 50 mW. What total current must the source supply for the power check to close?`,
        options: [r`25 mA`, r`1000 mA`, r`40 mA`, r`40 A`],
        correctAnswer: 2,
        explanation: r`The lamp powers add to 200 mW = 0.20 W, which must equal V × I, so I = 0.20 ÷ 5.0 = 0.040 A = 40 mA. Dividing 200 by 5.0 without converting milliwatts gives 40 A, inverting the ratio gives 0.025, and multiplying 200 by 5.0 gives 1000.`,
      },
      {
        question: r`A 15 V ideal battery supplies a total current of 2.0 A to three bulbs. Two of the bulb powers are known to be correct, 14 W and 10 W, but a student's value for the third is 9.0 W. What should the third bulb's power be?`,
        options: [r`3.0 W`, r`9.0 W`, r`30 W`, r`6.0 W`],
        correctAnswer: 3,
        explanation: r`The battery delivers V × I = 15 × 2.0 = 30 W, so the third bulb must dissipate 30 − 14 − 10 = 6.0 W. The student's 9.0 W makes the total 33 W, which is 3.0 W too many. The 30 W value is the whole battery output, not one bulb's share.`,
      },
      {
        question: r`Two identical bulbs wired in series across an ideal 9.0 V battery are each found to dissipate 4.5 W. What battery current makes the power check close?`,
        options: [r`0.50 A`, r`1.0 A`, r`2.0 A`, r`81 A`],
        correctAnswer: 1,
        explanation: r`The bulb powers add to 9.0 W, which must equal V × I, so I = 9.0 ÷ 9.0 = 1.0 A. Using only one bulb's 4.5 W gives 0.50 A, dividing 9.0 V by 4.5 W gives 2.0, and multiplying 9.0 by 9.0 gives 81.`,
      },
    ],
  },
}
