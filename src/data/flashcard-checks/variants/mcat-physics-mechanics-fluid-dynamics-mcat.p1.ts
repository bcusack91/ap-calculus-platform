import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-physics-mechanics-fluid-dynamics-mcat`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`Doppler shows blood speeding from $30$ to $270$ cm/s through a stenosis at unchanged flow, so the lumen radius is about {{c1::one-third}} of normal.`]: {
    kind: 'calc',
    more: [
      {
        question: r`Doppler ultrasound shows blood speeding up from 20 cm/s to 320 cm/s as it passes through a narrowed valve, with the flow rate unchanged. The opening's radius is about what fraction of normal?`,
        options: [r`one-sixteenth`, r`one-half`, r`one-quarter`, r`one-eighth`],
        correctAnswer: 2,
        explanation: r`Speed rose 16-fold, so by $A_1v_1 = A_2v_2$ the area fell to one-sixteenth. Area goes as $r^2$, so the radius is $\sqrt{1/16}$ = one-quarter of normal. One-sixteenth is the area fraction, not the radius; one-half and one-eighth take the wrong root.`,
      },
      {
        question: r`Plaque narrows a short stretch of an artery to one-fifth of its normal radius. Blood moves at 10 cm/s in the normal part, and the flow rate is the same through both parts. How fast does the blood move in the narrowed stretch?`,
        options: [r`50 cm/s`, r`2 cm/s`, r`0.4 cm/s`, r`250 cm/s`],
        correctAnswer: 3,
        explanation: r`Area goes as $r^2$, so the narrowed area is 1/25 of normal and continuity makes the speed 25 times larger: 25 × 10 = 250 cm/s. 50 cm/s scales speed with the radius instead of the area, and 2 cm/s and 0.4 cm/s slow the blood down in the narrowing instead of speeding it up.`,
      },
      {
        question: r`Liquid moves at 2 mm/s along a syringe barrel of inner diameter 10 mm and leaves through the needle at 800 mm/s. Using continuity, what is the needle's inner diameter?`,
        options: [r`0.5 mm`, r`0.025 mm`, r`5 mm`, r`0.25 mm`],
        correctAnswer: 0,
        explanation: r`The speed rises 400-fold, so the area falls to 1/400 and the diameter to $\sqrt{1/400} = 1/20$ of 10 mm, which is 0.5 mm. 0.025 mm divides the diameter by 400 as if speed went as diameter, 5 mm only halves it, and 0.25 mm halves the right answer again.`,
      },
      {
        question: r`Blood shoots through a short arterial stenosis at 400 cm/s. A balloon then widens the stenosis to twice its radius, and the flow rate through it is unchanged. How fast does blood now move through that spot?`,
        options: [r`200 cm/s`, r`100 cm/s`, r`1600 cm/s`, r`25 cm/s`],
        correctAnswer: 1,
        explanation: r`Doubling the radius makes the area 4 times larger, so by $A_1v_1 = A_2v_2$ the speed falls to one-quarter: 400/4 = 100 cm/s. 200 cm/s divides by the radius factor only, 1600 cm/s multiplies instead of dividing, and 25 cm/s uses a fourth power, which belongs to Poiseuille resistance, not continuity.`,
      },
      {
        question: r`An artery's lumen normally has a radius of 3 mm. Through a short stenosis, blood speeds up from 25 cm/s to 225 cm/s while the flow rate is unchanged. What is the lumen's radius inside the stenosis?`,
        options: [r`0.33 mm`, r`9 mm`, r`1.5 mm`, r`1 mm`],
        correctAnswer: 3,
        explanation: r`The speed rose 9-fold, so the area fell to one-ninth and the radius to $\sqrt{1/9}$ = one-third of 3 mm, which is 1 mm. 0.33 mm divides the radius by 9 (that is the area factor), 9 mm widens the vessel, and 1.5 mm just halves the radius.`,
      },
      {
        question: r`Through a short stenosis, Doppler shows blood speeding up from 60 cm/s to 300 cm/s with the flow rate unchanged. What percentage of the lumen's cross-sectional AREA is blocked?`,
        options: [r`80%`, r`20%`, r`96%`, r`55%`],
        correctAnswer: 0,
        explanation: r`The speed rose 5-fold, so by continuity the open area is one-fifth (20%) of normal, and 80% is blocked. 20% is the area still open, 96% squares the factor of 5 as if area fell 25-fold, and 55% is the fractional loss of radius ($1 - 1/\sqrt{5}$), not of area.`,
      },
    ],
  },
  [r`Water flows at $1$ m/s through a horizontal pipe of area $10$ cm$^2$ into a throat of area $2$ cm$^2$. How much lower is the throat pressure, and what height difference do the Venturi tubes show?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Water (1000 kg/m³) flows at 1 m/s through a horizontal pipe of cross-sectional area 12 cm² into a throat of area 4 cm². How much lower is the pressure in the throat?`,
        options: [r`2000 Pa`, r`4500 Pa`, r`1000 Pa`, r`4000 Pa`],
        correctAnswer: 3,
        explanation: r`Continuity gives $v_2 = 3$ m/s. Bernoulli: $\Delta P = \tfrac{1}{2}(1000)(3^2 - 1^2) = 4000$ Pa. 2000 Pa squares the difference of the speeds, $(3-1)^2$; 4500 Pa leaves out the upstream speed; 1000 Pa uses the speeds without squaring them.`,
      },
      {
        question: r`In a horizontal Venturi meter, water moves at 2 m/s in the wide section and 4 m/s in the throat. Open vertical tubes stand above each section. With g = 10 m/s², how much lower does the water stand in the tube above the throat?`,
        options: [r`0.2 m`, r`0.6 m`, r`0.8 m`, r`1.2 m`],
        correctAnswer: 1,
        explanation: r`$\Delta P = \tfrac{1}{2}\rho(v_2^2 - v_1^2)$ and $\Delta h = \Delta P/(\rho g)$, so $\Delta h = (16 - 4)/(2 \times 10) = 0.6$ m; the density cancels. 0.2 m squares the difference of the speeds, 0.8 m ignores the speed in the wide section, and 1.2 m forgets the factor of one-half.`,
      },
      {
        question: r`Water flows through a horizontal Venturi meter. The water in the open tube above the throat stands 0.75 m lower than in the tube above the wide section, where the water moves at 1 m/s. With g = 10 m/s², how fast is the water in the throat?`,
        options: [r`16 m/s`, r`2.9 m/s`, r`4 m/s`, r`8.5 m/s`],
        correctAnswer: 2,
        explanation: r`$\Delta P/\rho = g\,\Delta h = 7.5$ m²/s², and Bernoulli gives $v_2^2 = v_1^2 + 2(7.5) = 1 + 15 = 16$, so $v_2 = 4$ m/s. 16 m/s forgets the square root, while 8.5 m/s and 2.9 m/s come from leaving out the factor of 2 (8.5 without the root, 2.9 with it).`,
      },
      {
        question: r`Oil of density 800 kg/m³ flows at 2 m/s along a horizontal pipe into a throat with one-third of the pipe's cross-sectional area. Treating the oil as ideal, how much lower is the pressure in the throat?`,
        options: [r`6400 Pa`, r`12,800 Pa`, r`16,000 Pa`, r`14,400 Pa`],
        correctAnswer: 1,
        explanation: r`Continuity gives $v_2 = 6$ m/s, and $\Delta P = \tfrac{1}{2}(800)(36 - 4) = 12{,}800$ Pa. 6400 Pa squares the difference of the speeds, 16,000 Pa uses water's density of 1000 kg/m³, and 14,400 Pa leaves out the upstream speed.`,
      },
      {
        question: r`Air (density 1.2 kg/m³) moves at 10 m/s along a horizontal duct and passes through a section with half the cross-sectional area. Treating the air as incompressible, how much lower is the pressure in the narrow section?`,
        options: [r`60 Pa`, r`240 Pa`, r`180 Pa`, r`360 Pa`],
        correctAnswer: 2,
        explanation: r`Continuity doubles the speed to 20 m/s, and $\Delta P = \tfrac{1}{2}(1.2)(400 - 100) = 180$ Pa. 60 Pa squares the difference of the speeds, 240 Pa ignores the speed in the wide duct, and 360 Pa forgets the factor of one-half.`,
      },
      {
        question: r`A horizontal Venturi meter carries water (1000 kg/m³). Its wide section has area 10 cm² and its throat 5 cm², and the pressure in the throat is 1500 Pa lower than in the wide section. How fast is the water in the WIDE section?`,
        options: [r`1 m/s`, r`1.7 m/s`, r`3 m/s`, r`0.5 m/s`],
        correctAnswer: 0,
        explanation: r`Continuity gives $v_2 = 2v_1$, so $1500 = \tfrac{1}{2}(1000)(4v_1^2 - v_1^2) = 1500\,v_1^2$ and $v_1 = 1$ m/s. 1.7 m/s sets $\tfrac{1}{2}\rho v^2 = 1500$ with no throat speed, 3 m/s reads the factor $4 - 1$ as a speed, and 0.5 m/s halves the answer for the area ratio.`,
      },
    ],
  },
  [r`A pitot tube reads a stagnation pressure $250$ Pa above the static pressure in an air stream ($\rho = 1.25$ kg/m$^3$). What is the air speed?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Air of density 1.2 kg/m³ flows past a pitot tube at 30 m/s in a wind tunnel. How far above the static pressure is the stagnation pressure at the tube's tip?`,
        options: [r`1080 Pa`, r`540 Pa`, r`18 Pa`, r`36 Pa`],
        correctAnswer: 1,
        explanation: r`The flow stops at the tip, so the kinetic term becomes pressure: $\tfrac{1}{2}\rho v^2 = \tfrac{1}{2}(1.2)(900) = 540$ Pa. 1080 Pa forgets the one-half, 18 Pa forgets to square the speed, and 36 Pa makes both mistakes.`,
      },
      {
        question: r`An aircraft cruises where the air density is 1.0 kg/m³. Its pitot tube records a stagnation pressure 5000 Pa above the static pressure. What is the aircraft's speed through the air?`,
        options: [r`71 m/s`, r`50 m/s`, r`100 m/s`, r`5000 m/s`],
        correctAnswer: 2,
        explanation: r`$\tfrac{1}{2}\rho v^2 = 5000$ gives $v^2 = 2(5000)/1.0 = 10{,}000$, so $v = 100$ m/s. 71 m/s leaves out the factor of 2, 50 m/s halves the speed instead of working with $v^2$, and 5000 m/s divides the pressure by the density without taking a root.`,
      },
      {
        question: r`A catheter tip facing upstream in an artery reads 80 Pa more than a side port that senses the static pressure at the same place. Taking blood's density as 1000 kg/m³, how fast is the blood moving?`,
        options: [r`0.16 m/s`, r`0.28 m/s`, r`0.08 m/s`, r`0.4 m/s`],
        correctAnswer: 3,
        explanation: r`$\tfrac{1}{2}\rho v^2 = 80$ gives $v^2 = 160/1000 = 0.16$, so $v = 0.4$ m/s. 0.16 m/s is $v^2$ with the root forgotten, 0.28 m/s leaves out the factor of 2 before taking the root, and 0.08 m/s is just the pressure divided by the density.`,
      },
      {
        question: r`A pitot tube is placed in an unknown liquid moving at 2 m/s. The stagnation pressure at its tip is 1600 Pa above the static pressure. What is the liquid's density?`,
        options: [r`400 kg/m³`, r`1600 kg/m³`, r`800 kg/m³`, r`3200 kg/m³`],
        correctAnswer: 2,
        explanation: r`$\tfrac{1}{2}\rho v^2 = 1600$ gives $\rho = 2(1600)/2^2 = 800$ kg/m³. 400 kg/m³ forgets the factor of 2, 1600 kg/m³ divides by the speed instead of its square, and 3200 kg/m³ multiplies by 2 without dividing by $v^2$.`,
      },
      {
        question: r`In a wind tunnel, a pitot tube shows a certain difference between stagnation and static pressure. The air speed is then tripled, with the air's density unchanged. The pressure difference becomes:`,
        options: [r`3 times as large`, r`6 times as large`, r`1.7 times as large`, r`9 times as large`],
        correctAnswer: 3,
        explanation: r`The difference is the kinetic term $\tfrac{1}{2}\rho v^2$, which goes as the square of the speed, so tripling the speed makes it $3^2 = 9$ times as large. 3 times treats it as proportional to speed, 6 times doubles the 3 instead of squaring it, and 1.7 times takes a square root.`,
      },
      {
        question: r`A pitot tube under a boat on a freshwater lake (1000 kg/m³) reads a stagnation pressure 12.5 kPa above the static pressure. How fast is the boat moving through the water?`,
        options: [r`5 m/s`, r`25 m/s`, r`3.5 m/s`, r`0.16 m/s`],
        correctAnswer: 0,
        explanation: r`12.5 kPa is 12,500 Pa, so $v^2 = 2(12{,}500)/1000 = 25$ and $v = 5$ m/s. 25 m/s forgets the square root, 3.5 m/s leaves out the factor of 2, and 0.16 m/s uses 12.5 without converting kPa to Pa.`,
      },
    ],
  },
  [r`Liquid leaks from a small hole a depth $h$ below the surface of a wide open tank at speed {{c1::$v = \sqrt{2gh}$}}.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A wide, open rain barrel has a small hole 1.25 m below the water surface. With g = 10 m/s², how fast does water leave the hole?`,
        options: [r`25 m/s`, r`5 m/s`, r`3.5 m/s`, r`12.5 m/s`],
        correctAnswer: 1,
        explanation: r`Torricelli: $v = \sqrt{2gh} = \sqrt{2(10)(1.25)} = \sqrt{25} = 5$ m/s. 25 m/s forgets the square root, 3.5 m/s leaves out the factor of 2, and 12.5 m/s is just $gh$.`,
      },
      {
        question: r`Water leaves a small hole in the side of a wide, open tank at 8 m/s. With g = 10 m/s², how far below the water surface is the hole?`,
        options: [r`3.2 m`, r`6.4 m`, r`0.4 m`, r`0.8 m`],
        correctAnswer: 0,
        explanation: r`From $v = \sqrt{2gh}$, $h = v^2/(2g) = 64/20 = 3.2$ m. 6.4 m forgets the factor of 2, 0.8 m divides the speed by $g$ without squaring it, and 0.4 m is $v/(2g)$, again without the square.`,
      },
      {
        question: r`On a moon where g = 1.6 m/s², a wide open tank of liquid has a small hole 5 m below the liquid surface. How fast does the liquid leave the hole?`,
        options: [r`16 m/s`, r`2.8 m/s`, r`4 m/s`, r`10 m/s`],
        correctAnswer: 2,
        explanation: r`$v = \sqrt{2gh} = \sqrt{2(1.6)(5)} = \sqrt{16} = 4$ m/s. 16 m/s forgets the square root, 2.8 m/s leaves out the factor of 2, and 10 m/s uses Earth's g of 10 m/s² instead of the value given.`,
      },
      {
        question: r`A wide, open drinks dispenser has a small tap opening 45 cm below the surface of the liquid. With g = 10 m/s² and ideal flow, how fast does the liquid leave the tap?`,
        options: [r`30 m/s`, r`3 m/s`, r`9 m/s`, r`2.1 m/s`],
        correctAnswer: 1,
        explanation: r`Convert first: 45 cm = 0.45 m, so $v = \sqrt{2(10)(0.45)} = \sqrt{9} = 3$ m/s. 30 m/s uses 45 as if it were metres, 9 m/s forgets the square root, and 2.1 m/s leaves out the factor of 2.`,
      },
      {
        question: r`A wide, open tank drains through a small hole in its side. As it drains, the depth of water above the hole falls from 3.6 m to 0.9 m. Compared with its starting value, the speed of the jet is now:`,
        options: [r`one-half as large`, r`one-quarter as large`, r`one-sixteenth as large`, r`twice as large`],
        correctAnswer: 0,
        explanation: r`$v = \sqrt{2gh}$ goes as the square root of the depth. The depth fell to one-quarter, so the speed falls to $\sqrt{1/4}$ = one-half. One-quarter treats speed as proportional to depth, one-sixteenth squares instead of taking a root, and a jet cannot speed up as the depth drops.`,
      },
      {
        question: r`A wide, open tank has a hole of area 2 cm² in its side, 0.8 m below the water surface. With g = 10 m/s² and ideal flow, what volume of water leaves each second?`,
        options: [r`8 L/s`, r`3.2 L/s`, r`1.6 L/s`, r`0.8 L/s`],
        correctAnswer: 3,
        explanation: r`$v = \sqrt{2(10)(0.8)} = 4$ m/s, and $Q = Av = (2 \times 10^{-4}\,\text{m}^2)(4\,\text{m/s}) = 8 \times 10^{-4}$ m³/s = 0.8 L/s. 8 L/s slips a power of ten, 3.2 L/s uses $v^2 = 16$ as the speed, and 1.6 L/s uses $gh = 8$ as the speed.`,
      },
    ],
  },
  [r`Water at $1$ m/s in a $6$ cm$^2$ pipe rises $2$ m into a $2$ cm$^2$ section. How much lower is the pressure in the upper section? ($g = 10$ m/s$^2$)`]: {
    kind: 'calc',
    more: [
      {
        question: r`Water (1000 kg/m³) moves at 2 m/s in a pipe of area 9 cm². The pipe rises 1 m and narrows to 3 cm². With g = 10 m/s², how much lower is the pressure in the upper section?`,
        options: [r`6 kPa`, r`18 kPa`, r`16 kPa`, r`26 kPa`],
        correctAnswer: 3,
        explanation: r`Continuity gives $v_2 = 6$ m/s. Bernoulli: $\tfrac{1}{2}(1000)(36 - 4) + (1000)(10)(1) = 16{,}000 + 10{,}000 = 26$ kPa. 6 kPa subtracts the two terms, 18 kPa squares the difference of the speeds, and 16 kPa leaves out the height term.`,
      },
      {
        question: r`Water (1000 kg/m³) moves at 3 m/s at the top of a pipe. The pipe descends 3 m and widens, so the water moves at 1 m/s at the bottom. With g = 10 m/s², how does the pressure at the bottom compare with the pressure at the top?`,
        options: [r`34 kPa higher`, r`26 kPa higher`, r`30 kPa higher`, r`4 kPa higher`],
        correctAnswer: 0,
        explanation: r`Both slowing down and dropping raise the pressure: $\tfrac{1}{2}(1000)(9 - 1) + (1000)(10)(3) = 4000 + 30{,}000 = 34$ kPa higher. 26 kPa subtracts the speed term, 30 kPa ignores it, and 4 kPa ignores the change in height.`,
      },
      {
        question: r`Water (1000 kg/m³) speeds up from 1 m/s to 3 m/s as it climbs a narrowing pipe, and its pressure falls by 14 kPa. With g = 10 m/s², how far does the pipe rise?`,
        options: [r`1.4 m`, r`1.0 m`, r`1.8 m`, r`0.6 m`],
        correctAnswer: 1,
        explanation: r`The speed change accounts for $\tfrac{1}{2}(1000)(9 - 1) = 4$ kPa, leaving 10 kPa for $\rho g h$, so $h = 10{,}000/(1000 \times 10) = 1.0$ m. 1.4 m gives the whole drop to height, 1.8 m adds the 4 kPa instead of subtracting it, and 0.6 m forgets the one-half in the speed term.`,
      },
      {
        question: r`Oil of density 800 kg/m³ speeds up from 2 m/s to 4 m/s as it rises 0.5 m through a narrowing pipe. Treating the oil as ideal, with g = 10 m/s², how much lower is the pressure at the top?`,
        options: [r`11 kPa`, r`0.8 kPa`, r`8.8 kPa`, r`5.6 kPa`],
        correctAnswer: 2,
        explanation: r`$\tfrac{1}{2}(800)(16 - 4) + (800)(10)(0.5) = 4800 + 4000 = 8800$ Pa = 8.8 kPa. 11 kPa uses water's density of 1000 kg/m³, 0.8 kPa subtracts the two terms, and 5.6 kPa squares the difference of the speeds.`,
      },
      {
        question: r`Water moves at 1 m/s in a pipe that slopes DOWNWARD and narrows, so that lower down it moves at 5 m/s. With g = 10 m/s², what drop in height makes the pressure the same at both points?`,
        options: [r`2.4 m`, r`0.8 m`, r`0.4 m`, r`1.2 m`],
        correctAnswer: 3,
        explanation: r`The pressure is unchanged when the gain in $\tfrac{1}{2}\rho v^2$ equals the loss in $\rho g h$: $\tfrac{1}{2}(25 - 1) = 10h$, so $h = 1.2$ m; the density cancels. 2.4 m forgets the one-half, 0.8 m squares the difference of the speeds, and 0.4 m uses the speeds without squaring.`,
      },
      {
        question: r`A pump at ground level sends water (1000 kg/m³) into a pipe at 2 m/s and 150 kPa. The pipe rises 4 m to a narrower section where the water moves at 4 m/s. With g = 10 m/s² and ideal flow, what is the pressure in that upper section?`,
        options: [r`110 kPa`, r`104 kPa`, r`144 kPa`, r`116 kPa`],
        correctAnswer: 1,
        explanation: r`The drop is $\tfrac{1}{2}(1000)(16 - 4) + (1000)(10)(4) = 6 + 40 = 46$ kPa, so the pressure is $150 - 46 = 104$ kPa. 110 kPa ignores the speed change, 144 kPa ignores the climb, and 116 kPa adds the speed term back instead of subtracting it.`,
      },
    ],
  },
  [r`An infusion pump delivers $120$ mL/min through tubing of cross-sectional area $0.10$ cm$^2$. What is the saline's average speed?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Saline moves at an average speed of 5 cm/s through tubing with a cross-sectional area of 0.20 cm². What flow rate is the pump delivering?`,
        options: [r`1 mL/min`, r`25 mL/min`, r`60 mL/min`, r`1500 mL/min`],
        correctAnswer: 2,
        explanation: r`$Q = Av = (0.20)(5) = 1$ cm³/s = 1 mL/s, which is 60 mL/min. 1 mL/min forgets to convert seconds to minutes, 25 mL/min divides the speed by the area, and 1500 mL/min is that wrong quotient times 60.`,
      },
      {
        question: r`A ventilator delivers air at 30 L/min through a tube in which the air's average speed is 250 cm/s. What is the tube's cross-sectional area?`,
        options: [r`2 cm²`, r`120 cm²`, r`0.5 cm²`, r`0.12 cm²`],
        correctAnswer: 0,
        explanation: r`30 L/min = 30,000 cm³ per 60 s = 500 cm³/s, and $A = Q/v = 500/250 = 2$ cm². 120 cm² skips the minutes-to-seconds step, 0.12 cm² also skips litres to cm³, and 0.5 cm² inverts the ratio.`,
      },
      {
        question: r`A syringe pump drives a drug solution at an average speed of 2 cm/s through tubing with a cross-sectional area of 0.05 cm². How long does it take to deliver 30 mL?`,
        options: [r`300 min`, r`5 min`, r`50 min`, r`0.5 min`],
        correctAnswer: 1,
        explanation: r`$Q = Av = (0.05)(2) = 0.1$ cm³/s, so 30 mL takes $30/0.1 = 300$ s = 5 min. 300 min reads the 300 seconds as minutes, and 50 min and 0.5 min slip a power of ten in the flow rate.`,
      },
      {
        question: r`A tap fills a 12 L bucket in exactly 1 minute. The tap's opening has a cross-sectional area of 2 cm². What is the average speed of the water leaving the tap?`,
        options: [r`60 m/s`, r`0.1 m/s`, r`4 m/s`, r`1 m/s`],
        correctAnswer: 3,
        explanation: r`$Q = 12{,}000$ cm³ per 60 s = 200 cm³/s, and $v = Q/A = 200/2 = 100$ cm/s = 1 m/s. 60 m/s skips the minutes-to-seconds step, 0.1 m/s slips a power of ten, and 4 m/s multiplies the flow rate by the area instead of dividing.`,
      },
      {
        question: r`Blood moves at an average speed of 20 cm/s through an artery with a cross-sectional area of 0.5 cm². What is the flow rate in litres per minute?`,
        options: [r`0.6 L/min`, r`10 L/min`, r`0.01 L/min`, r`6 L/min`],
        correctAnswer: 0,
        explanation: r`$Q = Av = (0.5)(20) = 10$ cm³/s = 600 mL/min = 0.6 L/min. 10 L/min takes the 10 cm³/s with no conversions, 0.01 L/min converts mL to L but not seconds to minutes, and 6 L/min slips a power of ten.`,
      },
      {
        question: r`A pump delivers 90 mL/min through a needle whose bore has a cross-sectional area of 0.5 mm². What is the average speed of the liquid in the needle?`,
        options: [r`0.03 m/s`, r`0.3 m/s`, r`3 m/s`, r`180 m/s`],
        correctAnswer: 2,
        explanation: r`$Q = 90/60 = 1.5$ cm³/s, and 0.5 mm² = 0.005 cm² (1 cm² = 100 mm²), so $v = 1.5/0.005 = 300$ cm/s = 3 m/s. 0.03 m/s treats mm² as cm², 0.3 m/s converts with a factor of 10 instead of 100, and 180 m/s skips the minutes-to-seconds step.`,
      },
    ],
  },
  [r`Give the continuity equation.`]: {
    kind: 'calc',
    more: [
      {
        question: r`Air moves at 2 m/s through a ventilation duct of cross-sectional area 600 cm² and then through a narrower section at 8 m/s. Treating the air as incompressible, what is the area of the narrower section?`,
        options: [r`150 cm²`, r`2400 cm²`, r`300 cm²`, r`37.5 cm²`],
        correctAnswer: 0,
        explanation: r`$A_1v_1 = A_2v_2$ gives $A_2 = (600)(2)/8 = 150$ cm². 2400 cm² inverts the speed ratio and makes the fast section wider, 300 cm² takes a square root of the ratio, and 37.5 cm² applies the factor of 4 twice.`,
      },
      {
        question: r`Blood moves at 30 cm/s through an artery of cross-sectional area 3 cm², which then widens to an area of 9 cm². With the same flow rate through both parts, how fast does the blood move in the wide part?`,
        options: [r`90 cm/s`, r`3.3 cm/s`, r`17 cm/s`, r`10 cm/s`],
        correctAnswer: 3,
        explanation: r`$A_1v_1 = A_2v_2$ gives $v_2 = (3)(30)/9 = 10$ cm/s: three times the area, one-third the speed. 90 cm/s speeds the blood up in the wider part, 3.3 cm/s applies the factor of 3 twice, and 17 cm/s divides by $\sqrt{3}$.`,
      },
      {
        question: r`Water moves at 1.8 m/s through a pipe of inner diameter 1 cm, which then widens to an inner diameter of 3 cm. How fast does the water move in the wide section?`,
        options: [r`0.6 m/s`, r`0.2 m/s`, r`16.2 m/s`, r`5.4 m/s`],
        correctAnswer: 1,
        explanation: r`Area goes as the diameter squared, so the wide section has 9 times the area and continuity gives $1.8/9 = 0.2$ m/s. 0.6 m/s divides by the diameter ratio instead of the area ratio, and 16.2 m/s and 5.4 m/s speed the water up where the pipe widens.`,
      },
      {
        question: r`A syringe plunger of area 2 cm² is pushed in at 0.5 cm/s, forcing liquid out through a needle whose bore has an area of 0.01 cm². How fast does the liquid move in the needle?`,
        options: [r`0.0025 cm/s`, r`200 cm/s`, r`100 cm/s`, r`4 cm/s`],
        correctAnswer: 2,
        explanation: r`$A_1v_1 = A_2v_2$ gives $v_2 = (2)(0.5)/0.01 = 100$ cm/s. 0.0025 cm/s inverts the area ratio, 200 cm/s is the area ratio alone without the plunger speed, and 4 cm/s divides the plunger's area by its speed.`,
      },
      {
        question: r`An incompressible liquid flows along a pipe whose cross-sectional area shrinks to 40% of its starting value. By what factor is the liquid's speed multiplied?`,
        options: [r`0.4`, r`6.25`, r`1.6`, r`2.5`],
        correctAnswer: 3,
        explanation: r`$A_1v_1 = A_2v_2$ gives $v_2/v_1 = A_1/A_2 = 1/0.4 = 2.5$. 0.4 slows the liquid in the narrower section, 6.25 squares the correct factor, and 1.6 takes its square root, as if speed went as the pipe's radius rather than its area.`,
      },
      {
        question: r`Water moves at 0.5 m/s along a canal of cross-sectional area 4 m² and all of it enters a pipe of area 2000 cm². How fast does the water move in the pipe?`,
        options: [r`0.001 m/s`, r`10 m/s`, r`0.025 m/s`, r`100 m/s`],
        correctAnswer: 1,
        explanation: r`2000 cm² = 0.2 m² (1 m² = 10,000 cm²), so $v_2 = (4)(0.5)/0.2 = 10$ m/s. 0.001 m/s uses 2000 as if it were m², 0.025 m/s inverts the area ratio, and 100 m/s converts 2000 cm² to 0.02 m².`,
      },
    ],
  },
  [r`State Bernoulli's principle.`]: {
    kind: 'concept',
    more: [
      {
        question: r`A fast train passes close to a person standing at the edge of a platform, and the person feels pushed toward the train. What explains this?`,
        options: [r`Air moving fast beside the train is at higher pressure than the still air`, r`Air moving fast beside the train is far denser than the still air nearby`, r`Air moving fast beside the train is at lower pressure than the still air`, r`Air moving fast beside the train is more viscous than the still air nearby`],
        correctAnswer: 2,
        explanation: r`Where air moves faster its pressure is lower, so the still air on the person's far side, at higher pressure, pushes them toward the train. Higher pressure beside the train would push the person away. The air's density and viscosity do not change just because it is moving, so they do not explain the push.`,
      },
      {
        question: r`Points 1 and 2 lie at the same height on one streamline of a steadily flowing ideal liquid. A gauge shows that the pressure at point 2 is higher than at point 1. What must be true?`,
        options: [r`The liquid moves more slowly at point 2 than at point 1`, r`The liquid moves more quickly at point 2 than at point 1`, r`The liquid moves at the same speed at point 2 as at point 1`, r`The liquid is less dense at point 2 than it is at point 1`],
        correctAnswer: 0,
        explanation: r`At constant height $P + \tfrac{1}{2}\rho v^2$ is constant along a streamline, so a higher pressure at point 2 means a smaller kinetic term there: the liquid is slower. A higher speed would go with a lower pressure, equal speeds would give equal pressures, and an ideal liquid is incompressible, so its density is the same at both points.`,
      },
    ],
  },
  [r`What four assumptions does Bernoulli's equation require?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Which of these flows comes closest to meeting all of the assumptions behind Bernoulli's equation?`,
        options: [r`Honey creeping steadily and smoothly through a long, thin tube`, r`Water moving steadily and smoothly through a short, wide nozzle`, r`Air being squeezed rapidly by the piston of a bicycle pump`, r`Water churning in swirling eddies behind a boat's propeller`],
        correctAnswer: 1,
        explanation: r`Water is nearly incompressible and has a low viscosity, and in a short, wide nozzle the flow is steady and smooth, so all the assumptions hold well. Honey in a long thin tube is dominated by viscosity, air being squeezed is compressible and unsteady, and churning eddies are turbulent rather than laminar.`,
      },
      {
        question: r`With each heartbeat, the blood speed at a fixed point in the aorta rises and falls from moment to moment. Which Bernoulli assumption does this change at a fixed point break?`,
        options: [r`Steady flow: conditions at a point do not change in time`, r`Incompressible flow: density does not change with pressure`, r`Nonviscous flow: no energy is lost to internal friction`, r`Laminar flow: the fluid moves in smooth, unmixed layers`],
        correctAnswer: 0,
        explanation: r`Steady flow means the speed and pressure at each fixed point stay constant in time, so pulsing flow is unsteady by definition. Incompressibility is about density, nonviscous flow is about friction, and laminar flow is about smooth layers; none of these describes a change over time at one point.`,
      },
    ],
  },
  [r`By Bernoulli's principle, where a fluid speeds up at constant height its pressure {{c1::decreases}}.`]: {
    kind: 'calc',
    more: [
      {
        question: r`Water (1000 kg/m³) flows through a level hose. At one point it moves at 1 m/s and its pressure is 110 kPa. Further along, the hose is narrower and the water moves at 3 m/s. Treating the water as ideal, what is the pressure there?`,
        options: [r`114 kPa`, r`106 kPa`, r`108 kPa`, r`102 kPa`],
        correctAnswer: 1,
        explanation: r`At constant height $P + \tfrac{1}{2}\rho v^2$ is constant, so the pressure falls by $\tfrac{1}{2}(1000)(9 - 1) = 4000$ Pa to 106 kPa. 114 kPa raises the pressure where the water speeds up, 108 kPa squares the difference of the speeds, and 102 kPa forgets the one-half.`,
      },
      {
        question: r`Blood (take its density as 1000 kg/m³) speeds up from 1 m/s to 5 m/s as it passes through a narrowed heart valve at constant height. Using Bernoulli's equation and 1 mmHg ≈ 133 Pa, about how far does its pressure fall?`,
        options: [r`about 90 mmHg`, r`about 60 mmHg`, r`about 180 mmHg`, r`about 12 mmHg`],
        correctAnswer: 0,
        explanation: r`$\Delta P = \tfrac{1}{2}(1000)(25 - 1) = 12{,}000$ Pa, and $12{,}000/133 \approx 90$ mmHg. About 60 mmHg squares the difference of the speeds (8000 Pa), about 180 mmHg forgets the one-half, and about 12 mmHg converts with 1000 Pa per mmHg.`,
      },
      {
        question: r`Still air in a large room (density 1.2 kg/m³) is drawn into a level duct, where its pressure is 240 Pa lower than in the room. Treating the air as an ideal, incompressible fluid, how fast does it move in the duct?`,
        options: [r`14 m/s`, r`400 m/s`, r`20 m/s`, r`200 m/s`],
        correctAnswer: 2,
        explanation: r`The air starts at rest, so $\tfrac{1}{2}\rho v^2 = 240$ and $v^2 = 2(240)/1.2 = 400$, giving $v = 20$ m/s. 14 m/s leaves out the factor of 2, 400 m/s forgets the square root, and 200 m/s divides the pressure by the density with no factor of 2 and no root.`,
      },
      {
        question: r`Water (1000 kg/m³) slows from 4 m/s to 2 m/s as a level pipe widens. Treating the water as ideal, how does the pressure in the wide section compare with the pressure in the narrow section?`,
        options: [r`6000 Pa lower`, r`6000 Pa higher`, r`2000 Pa higher`, r`12,000 Pa higher`],
        correctAnswer: 1,
        explanation: r`Where the water slows at constant height its pressure rises: $\tfrac{1}{2}(1000)(16 - 4) = 6000$ Pa higher. 6000 Pa lower gets the direction backwards, 2000 Pa squares the difference of the speeds, and 12,000 Pa forgets the one-half.`,
      },
      {
        question: r`Wind blows at 20 m/s across the outside of a closed window of area 2 m², while the air inside the room is still. Taking air's density as 1.25 kg/m³ and both sides at the same height, what net force does the air exert on the window?`,
        options: [r`500 N inward`, r`1000 N outward`, r`25 N outward`, r`500 N outward`],
        correctAnswer: 3,
        explanation: r`The moving air outside is at lower pressure by $\tfrac{1}{2}(1.25)(400) = 250$ Pa, so the still air inside pushes the window outward with $F = \Delta P \times A = 250 \times 2 = 500$ N. Inward has the pressures backwards, 1000 N forgets the one-half, and 25 N forgets to square the speed.`,
      },
      {
        question: r`A liquid speeds up from 2 m/s to 4 m/s as it passes along a level tube, and its pressure falls by 5400 Pa. Treating the liquid as ideal, what is its density?`,
        options: [r`450 kg/m³`, r`2700 kg/m³`, r`900 kg/m³`, r`1350 kg/m³`],
        correctAnswer: 2,
        explanation: r`$\Delta P = \tfrac{1}{2}\rho(v_2^2 - v_1^2)$, so $\rho = 2(5400)/(16 - 4) = 900$ kg/m³. 450 kg/m³ forgets the factor of 2, 2700 kg/m³ squares the difference of the speeds, and 1350 kg/m³ makes both of those mistakes.`,
      },
    ],
  },
  [r`Why is blood slowest in capillaries even though each capillary is tiny?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A student argues: \"Fluid speeds up in a narrow pipe, so blood should race through the tiny capillaries.\" What is the flaw in this argument?`,
        options: [r`Continuity applies only to the arteries, never to the capillaries`, r`Continuity uses the combined area of all the capillaries, not one`, r`Continuity fails because the capillaries carry less total flow`, r`Continuity fails because blood is viscous inside the capillaries`],
        correctAnswer: 1,
        explanation: r`The whole cardiac output passes through all the capillaries together, so the area in $Av$ = constant is their combined cross-section, which is far larger than the aorta's; speed is therefore lowest there. Continuity applies at every level, the capillaries carry the same total flow as the aorta, and viscosity does not stop volume from being conserved.`,
      },
      {
        question: r`In a resting muscle, half of the open capillaries close while the total blood flow through the muscle's capillary bed stays the same. What happens to the blood's speed in the capillaries that remain open?`,
        options: [r`It halves, since the combined open area is halved`, r`It is unchanged, since each capillary keeps its area`, r`It doubles, since the combined open area is halved`, r`It quadruples, since speed goes as the area squared`],
        correctAnswer: 2,
        explanation: r`The same volume per second must pass through half the combined cross-sectional area, so by continuity the speed doubles. Halving the speed would halve the flow twice over, the single capillary's own area is not what continuity uses, and speed goes inversely with area, not with its square.`,
      },
    ],
  },
}
