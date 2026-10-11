import type { SatOptionExplanationMap } from './types'

/** Per-option explanations for SAT full-length items (see ./index.ts). Generated from the authoring pipeline; edit there. */
const ENTRIES: SatOptionExplanationMap = {
  "q:a5bfed4d937584ae": {
    "options": [
      "Marie Curie, a pioneering physicist discovered radium.",
      "Marie Curie, a pioneering physicist, discovered radium.",
      "Marie Curie, a pioneering physicist, she discovered radium.",
      "Marie Curie a pioneering physicist, discovered radium."
    ],
    "explanations": [
      "This version opens the appositive 'a pioneering physicist' with a comma but never closes it. A nonessential appositive dropped into the middle of a sentence must be set off on both sides, so the comma before 'discovered' is missing.",
      "The phrase 'a pioneering physicist' is a nonessential appositive renaming Marie Curie, so it is set off by a comma on each side. The sentence keeps one subject, 'Marie Curie,' and one verb, 'discovered,' and reads smoothly.",
      "The appositive is punctuated correctly, but 'she' then restates the subject that 'Marie Curie' already supplied. The sentence ends up with a doubled subject ('Marie Curie ... she discovered'), a redundancy that Standard English does not allow.",
      "This version closes the appositive with a comma but never opens it, so 'Marie Curie a pioneering physicist' runs together with no boundary between the name and the phrase describing it. Both commas are required."
    ]
  },
  "q:152ab3fc9292125d": {
    "options": [
      "Analyzing 1,100 hours of recordings, Tomasz Wierzba found that coastal birds sing near constant surf noise.",
      "Tomasz Wierzba analyzed 1,100 hours of song recordings from two populations of the same species that interbreed where their ranges meet.",
      "The species has two populations about 200 kilometers apart, one along the coast and one inland, whose songs Wierzba analyzed.",
      "Wierzba found that coastal birds' songs average 7 syllable types, while inland birds' songs average 12."
    ],
    "explanations": [
      "This sentence presents the surf noise as what Wierzba 'found,' but the notes list it as a fact about the coastal birds' environment, not as a result of analyzing the recordings. It is a possible explanation for the finding, not the finding itself.",
      "This sentence describes the study's scope and method (1,100 hours, two interbreeding populations) but reports no result at all. The interbreeding detail is background an audience already familiar with the species does not need.",
      "This sentence supplies geography (about 200 kilometers apart, coast versus inland) and notes that Wierzba analyzed the songs, but it never states what he found. The location detail is background the familiar audience already has.",
      "The central finding is the measured difference between the populations: coastal songs average 7 syllable types while inland songs average 12. This sentence reports exactly that result, attributes it to Wierzba, and skips the background a familiar audience does not need."
    ]
  },
  "q:cc9b2c51cdae7a88": {
    "options": [
      "'The calculations submitted with the plans are correct in every particular; what no plan can supply is a rule requiring that the bearings be examined each spring.'",
      "'The designer's reputation has suffered greatly since the accident, and the newspapers have not always been careful to separate what they know from what they suppose.'",
      "'A bridge is a machine that is asked to work in weather, and weather is not a circumstance but a condition of service, as any engineer in the north can confirm.'",
      "'Three spans of similar proportion stand elsewhere on the line, built from the same drawings, and have given no trouble in twenty years.'"
    ],
    "explanations": [
      "This quotation covers both halves of the student's contention: the design is vindicated ('correct in every particular') and the fault is located in maintenance, the missing 'rule requiring that the bearings be examined each spring.'",
      "This quotation is about press coverage and the designer's reputation, observing that newspapers blur knowledge and supposition. It expresses no judgment of Solberg's own about whether the design was sound or the maintenance deficient.",
      "This quotation is a general observation that bridges must work in weather. It assigns responsibility to no one, says nothing about the design, and never mentions inspection or maintenance, so it cannot establish where Solberg locates the fault.",
      "Pointing to three similar spans 'built from the same drawings' that have stood for twenty years supports only the first half of the contention, that the design is sound. It says nothing about inspection or how this bridge was maintained."
    ]
  },
  "q:e8d9b75ce95eba7a": {
    "options": [
      "is",
      "have been",
      "were",
      "are"
    ],
    "explanations": [
      "The subject of the sentence is 'the number,' a singular noun; 'of Americans working remotely' is a modifying phrase. The phrase 'the number of' takes a singular verb, so 'is expected to increase' is correct.",
      "'Have been' is plural, agreeing with 'Americans' inside the prepositional phrase rather than with the true subject, 'the number.' Its perfect tense also clashes with a prediction about 'the next five years.'",
      "'Were' is plural and past tense. The subject 'the number' is singular, and the sentence makes a present prediction about a future increase ('is expected to increase ... over the next five years'), not a statement about the past.",
      "'Are' is plural, pulled toward the nearby noun 'Americans.' But that noun sits inside the phrase 'of Americans working remotely,' which modifies the singular subject 'the number,' so the verb must be singular."
    ]
  },
  "q:1b6e945845317b60": {
    "options": [
      "his or her",
      "he or she",
      "him or her",
      "his and her"
    ],
    "explanations": [
      "'Everybody' is grammatically singular, and the blank sits before 'own business,' so it needs a singular possessive. In formal usage that is 'his or her,' which agrees in number and supplies the required possessive form.",
      "'He or she' are subject pronouns, not possessives. The blank modifies 'own business,' so it must show ownership; 'everybody should mind he or she own business' has no grammatical reading.",
      "'Him or her' are object pronouns. The blank precedes the noun phrase 'own business' and must be possessive ('his or her'), not a form used for the object of a verb or preposition.",
      "'His and her' uses the right possessive forms but the wrong conjunction: 'and' implies that each person's business belongs to two owners at once. The singular 'everybody' calls for the alternative 'or.'"
    ]
  },
  "q:de22f4b65ca2fa1c": {
    "options": [
      "century, the",
      "century: the",
      "century the",
      "century; the"
    ],
    "explanations": [
      "'Radiocarbon dates ... cluster to within a single century' and 'the stratigraphy above it suggests ...' are both independent clauses. Joining them with only a comma creates a comma splice.",
      "A colon introduces something that explains, specifies, or lists what came before. The second clause does not elaborate on the radiocarbon dates; it offers a competing line of evidence (stratigraphy) that points to a much longer occupation.",
      "With no punctuation at all, two complete sentences are fused into one run-on: 'within a single century the stratigraphy above it suggests ...' gives the reader no boundary between the two independent clauses.",
      "Two independent clauses, one about the radiocarbon dates and one about the stratigraphy, stand on either side of the blank. A semicolon is the correct way to join two closely related independent clauses without a conjunction."
    ]
  },
  "q:ad5e714d3c36ed4a": {
    "options": [
      "$\\frac{20}{27}$",
      "$\\frac{7}{53}$",
      "$\\frac{7}{23}$",
      "$\\frac{7}{27}$"
    ],
    "explanations": [
      "$\\frac{20}{27}$ uses the right row (27 students who did not study) but the wrong cell: 20 is the number who failed. It is the probability that a non-studier failed, the complement of what was asked.",
      "$\\frac{7}{53}$ divides by the grand total of all 53 students. The condition 'from those who did NOT study' restricts the sample space to the 27 students in that row, so 53 is the wrong denominator.",
      "$\\frac{7}{23}$ divides by the Pass column total ($16 + 7 = 23$). That is the reversed conditional, the probability that a student who passed had not studied, not the probability that a non-studier passed.",
      "The condition restricts attention to the 'Did not study' row, which has $7 + 20 = 27$ students. Of those, 7 passed, so the probability is $\\frac{7}{27}$."
    ]
  },
  "q:40a30713d42de40b": {
    "options": [
      "$12 \\times 10^{3}$",
      "$3 \\times 10^{4}$",
      "$3 \\times 10^{3}$",
      "$3 \\times 10^{2}$"
    ],
    "explanations": [
      "$12 \\times 10^{3}$ handles the powers of ten correctly but adds the coefficients ($9 + 3 = 12$) instead of dividing them. The quotient of the coefficients is $9 \\div 3 = 3$.",
      "$3 \\times 10^{4}$ divides the coefficients correctly but gets the exponent wrong. Dividing powers of ten subtracts the exponents, $5 - 2 = 3$, not $4$; the extra power comes from subtracting only $1$.",
      "Divide the coefficients and subtract the exponents separately: $\\frac{9}{3} = 3$ and $\\frac{10^{5}}{10^{2}} = 10^{5-2} = 10^{3}$. The quotient is $3 \\times 10^{3}$, or $3{,}000$.",
      "$3 \\times 10^{2}$ divides the coefficients but simply keeps the divisor's power of ten. The exponents must be subtracted: $10^{5} \\div 10^{2} = 10^{3}$, not $10^{2}$."
    ]
  },
  "q:bf4c1d706c1ba3f0": {
    "options": [
      "$45$",
      "$2{,}165$",
      "$2{,}210$",
      "$10{,}210$"
    ],
    "explanations": [
      "Option 1 grows to $8000(1.05)^{5} \\approx 10{,}210.25$, earning about $\\$2{,}210$. Option 2 grows to $8000(1.004)^{60} \\approx 10{,}165.23$, earning about $\\$2{,}165$. Option 1 earns about $\\$45$ more.",
      "$2{,}165$ is the interest Option 2 earns by itself, $8000(1.004)^{60} - 8000 \\approx 2{,}165$. The question asks how much more Option 1 earns, so this intermediate still has to be subtracted from Option 1's interest.",
      "$2{,}210$ is the interest Option 1 earns by itself, $8000(1.05)^{5} - 8000 \\approx 2{,}210$. It answers 'how much does Option 1 earn,' not 'how much more than Option 2,' which requires subtracting Option 2's $\\$2{,}165$.",
      "$10{,}210$ is Option 1's ending balance, $8000(1.05)^{5}$. It includes the original $\\$8{,}000$ principal and makes no comparison with Option 2, so it answers neither the interest question nor the difference question."
    ]
  },
  "q:2b7d1cade43fa9b4": {
    "options": [
      "$(x - 2)^2 + (y - 1)^2 = 36$",
      "$(x - 1)^2 + (y - 2)^2 = 36$",
      "$(x - 2)^2 + (y - 1)^2 = 6$",
      "$(x + 2)^2 + (y + 1)^2 = 36$"
    ],
    "explanations": [
      "In standard form $(x - h)^2 + (y - k)^2 = r^2$, a center of $(2, 1)$ gives $(x - 2)^2 + (y - 1)^2$, and a radius of $6$ gives $r^2 = 36$ on the right side.",
      "$(x - 1)^2 + (y - 2)^2 = 36$ swaps the coordinates of the center: it describes a circle centered at $(1, 2)$, not $(2, 1)$. The $x$-coordinate pairs with $x$ and the $y$-coordinate with $y$.",
      "$(x - 2)^2 + (y - 1)^2 = 6$ has the correct center but puts the radius itself on the right side. Standard form uses $r^2$, so the right side must be $6^2 = 36$; this equation has radius $\\sqrt{6}$.",
      "$(x + 2)^2 + (y + 1)^2 = 36$ flips the signs inside the parentheses, which is the same as $(x - (-2))^2 + (y - (-1))^2$. That circle is centered at $(-2, -1)$, not $(2, 1)$."
    ]
  },
  "q:1c230c8067630f5f": {
    "options": [
      "-8",
      "-1",
      "-5",
      "-10"
    ],
    "explanations": [
      "$-8$ would require $3x - 2 = -8$, which happens at $x = -2$, not $x = -1$. Substituting the correct input into the first piece gives $3(-1) - 2 = -5$.",
      "$-1$ comes from a sign slip on the constant: $3(-1) + 2 = -1$. The first piece is $3x - 2$, so the $2$ is subtracted, giving $-3 - 2 = -5$.",
      "Because $-1 < 0$, the first piece applies: $f(-1) = 3(-1) - 2 = -3 - 2 = -5$. The second piece, $-4x + 1$, is only for $x \\geq 0$.",
      "Neither piece produces $-10$ at $x = -1$: the first gives $3(-1) - 2 = -5$ and the second (which does not apply anyway) gives $-4(-1) + 1 = 5$. $-10$ is double the correct value."
    ]
  },
  "q:12bb91751e731007": {
    "options": [
      "The residual is $-6$; the score is above the prediction",
      "The residual is $-6$; the score is below the prediction",
      "The residual is $6$; the score is above the prediction",
      "The residual is $6$; the score is below the prediction"
    ],
    "explanations": [
      "The direction is right but the sign is wrong. A residual is actual minus predicted, $92 - 86 = 6$; a negative residual would mean the actual score fell below the prediction, which contradicts 'above.'",
      "This computes predicted minus actual, $86 - 92 = -6$, and reads the sign consistently, but the residual is defined the other way around: actual minus predicted. The student scored 92, which is above the predicted 86, not below it.",
      "Residual $=$ actual $-$ predicted $= 92 - 86 = 6$. A positive residual means the actual value lies above the line of best fit, and indeed 92 is greater than the predicted 86.",
      "The residual $6$ is computed correctly, but a positive residual means the actual value exceeds the prediction. The student scored 92 against a predicted 86, so the score is above the prediction, not below it."
    ]
  },
  "q:cc72cd9450ceacec": {
    "options": [
      "$\\frac{9}{2}$",
      "$0$",
      "$\\frac{9}{4}$",
      "$\\frac{81}{16}$"
    ],
    "explanations": [
      "Factoring gives $(2x-3)(2x+3)(4x^{2}+9)$, and $4x^{2}+9$ has no real zeros, so the real zeros are $\\frac{3}{2}$ and $-\\frac{3}{2}$. Their squares are each $\\frac{9}{4}$, and $\\frac{9}{4}+\\frac{9}{4}=\\frac{9}{2}$.",
      "$0$ is the sum of the zeros themselves, $\\frac{3}{2} + \\left(-\\frac{3}{2}\\right) = 0$. The question asks for the sum of their squares, and squaring removes the cancellation: both squares are positive $\\frac{9}{4}$.",
      "$\\frac{9}{4}$ is the square of one real zero, $\\left(\\pm\\frac{3}{2}\\right)^{2}$. There are two real zeros, $\\frac{3}{2}$ and $-\\frac{3}{2}$, so their squares must be added: $\\frac{9}{4}+\\frac{9}{4}=\\frac{9}{2}$.",
      "$\\frac{81}{16}$ is $x^{4}$ when $16x^{4}=81$, not $x^{2}$. Treating $x^{4}=\\frac{81}{16}$ as if it were $x^{2}$ skips a square root; the real zeros satisfy $x^{2}=\\frac{9}{4}$, not $\\frac{81}{16}$."
    ]
  },
  "q:7484176c01e2bc62": {
    "options": [
      "About 144 pharmacies; the prediction requires extrapolating far outside the 5-to-60-thousand range of the data, so the linear pattern may not continue to hold.",
      "About 144 pharmacies; the prediction is reliable because the model was built from 40 towns.",
      "About 143 pharmacies; the prediction is unreliable because the slope is not a whole number.",
      "About 1.6 pharmacies; the prediction is unreliable because the intercept dominates for large populations."
    ],
    "explanations": [
      "The model gives $0.42(340) + 1.6 = 144.4$, about 144 pharmacies. But 340 thousand is more than five times the largest population studied (60 thousand), so the prediction extrapolates far outside the data, where the linear pattern may not hold.",
      "The value 144 is computed correctly, but 40 towns is the wrong reason for confidence. Sample size supports the fit within the observed 5-to-60-thousand range; it does not justify extending the line to a population of 340 thousand.",
      "About 143 comes from $0.42(340) = 142.8$ with the intercept $1.6$ dropped; the model actually gives $144.4$. The objection is also irrelevant: a slope need not be a whole number for a prediction to be reliable.",
      "About 1.6 is just the intercept, the model's prediction when the population is zero. For $p = 340$, the slope term $0.42(340) = 142.8$ dwarfs the intercept, the opposite of 'the intercept dominates.'"
    ]
  },
  "q:e2d322e21f7037c6": {
    "options": [
      "$-10$",
      "$-22$",
      "$-8$",
      "$-2$"
    ],
    "explanations": [
      "Squaring gives $x^2 + 8x + 12 = 0$, so $x = -2$ or $x = -6$. Only $x = -2$ checks ($\\sqrt{9} = 3 = -2 + 5$), since $x = -6$ makes the right side $-1$. Then $3(-2) - 4 = -10$.",
      "$-22$ is $3(-6) - 4$, computed from the extraneous root. At $x = -6$ the right side $x + 5$ equals $-1$, but a square root cannot be negative, so $-6$ must be rejected before evaluating $3x - 4$.",
      "$-8$ is the sum of the two roots of the squared equation, $-2 + (-6)$. That adds the valid root to the extraneous one and never evaluates $3x - 4$; the question asks for $3x - 4$ at the single valid solution.",
      "$-2$ is the valid solution $x$ itself, an intermediate value. The question asks for $3x - 4$, so one more step is needed: $3(-2) - 4 = -10$."
    ]
  },
  "q:5308d6a0fc0feeb2": {
    "options": [
      "$170$",
      "$70$",
      "$156$",
      "$195$"
    ],
    "explanations": [
      "The first $100$ tickets raised $100(15) = 1{,}500$ dollars, leaving $2{,}340 - 1{,}500 = 840$ dollars from tickets at $12$ dollars each, which is $840 \\div 12 = 70$ more tickets. Total sold: $100 + 70 = 170$.",
      "$70$ is only the number of tickets sold at the $12$-dollar price, after the first $100$. It is an intermediate value; the question asks for the total number of tickets, $100 + 70 = 170$.",
      "$156$ is $2{,}340 \\div 15$, which prices every ticket at $15$ dollars. Only the first $100$ tickets sold at that price; the rest sold for $12$ dollars, so the two-tier pricing must be used.",
      "$195$ is $2{,}340 \\div 12$, which prices every ticket at $12$ dollars. The first $100$ tickets actually sold for $15$ dollars each, so this overcounts the number of tickets needed to reach $2{,}340$."
    ]
  },
  "q:f8268c500f992a47": {
    "options": [
      "64",
      "23",
      "16",
      "17"
    ],
    "explanations": [
      "$64$ is simply $34 + 30$, adding the two given lengths. The Pythagorean theorem relates the squares of the sides, and a leg can never be longer than the hypotenuse $34$.",
      "$23$ does not satisfy the Pythagorean theorem: $23^2 + 30^2 = 529 + 900 = 1{,}429$, not $34^2 = 1{,}156$. The missing leg must make $a^2 + 900 = 1{,}156$, so $a^2 = 256$.",
      "The hypotenuse is $34$, so the missing leg satisfies $a^2 + 30^2 = 34^2$. Then $a^2 = 1{,}156 - 900 = 256$ and $a = \\sqrt{256} = 16$. (This is the $8$-$15$-$17$ triangle scaled by $2$.)",
      "$17$ is half the hypotenuse, not a leg length. Checking: $17^2 + 30^2 = 289 + 900 = 1{,}189$, which is not $34^2 = 1{,}156$. The correct leg is $\\sqrt{1{,}156 - 900} = 16$."
    ]
  },
  "q:eb8e4642cf376d3a": {
    "options": [
      "-10",
      "2",
      "0",
      "16"
    ],
    "explanations": [
      "$-10$ is impossible for this function at any real input: $4x^2 \\geq 0$, so $g(x) = 4x^2 - 2$ is never less than $-2$. At $x = 1$, $4(1)^2 - 2 = 2$.",
      "Substitute $x = 1$: $g(1) = 4(1)^2 - 2 = 4(1) - 2 = 4 - 2 = 2$. Square the input first, then multiply by $4$, then subtract $2$.",
      "$0$ would require $4x^2 = 2$, which happens at $x = \\pm\\sqrt{\\tfrac{1}{2}}$, not at $x = 1$. It typically comes from subtracting $2$ twice: $4 - 2 - 2$. Correctly, $4 - 2 = 2$.",
      "$16$ is $(4 \\cdot 1)^2$, squaring the coefficient $4$ along with $x$ and then dropping the $- 2$. Only $x$ is squared: $4x^2$ at $x = 1$ is $4(1) = 4$, and then $4 - 2 = 2$."
    ]
  },
  "q:cf5e5b47711105ae": {
    "options": [
      "18.7 percent and 46.4 percent",
      "46.4 percent and 18.7 percent",
      "18.7 percent and 45.8 percent",
      "45.8 percent and 18.7 percent"
    ],
    "explanations": [
      "The first value, $116/620 = 18.7$ percent, is right, but $46.4$ percent is $116/250$, dividing by the Delivery row total. That answers 'what percent of Delivery employees work afternoons,' the reversed condition, not the share of afternoon-shift employees who are in Delivery.",
      "$46.4$ percent is $116/250$, the share of Delivery employees who work the afternoon shift; neither question asks for that. And $18.7$ percent ($116/620$) is the all-employee figure, which belongs in the first slot, not the second.",
      "The missing cell is $253 - 82 - 55 = 116$. Of all $620$ employees, $116/620 = 18.7$ percent are afternoon-shift Delivery employees. Restricting to the $253$ afternoon-shift employees, $116/253 = 45.8$ percent are in Delivery.",
      "Both numbers are correct but swapped. $45.8$ percent is $116/253$, the restricted rate among afternoon-shift employees, so it answers the second question; $18.7$ percent is $116/620$, the share of all $620$ employees, which answers the first."
    ]
  },
  "q:ec0c2448aea598d5": {
    "options": [
      "$2x^{5}$",
      "$2x^{3}$",
      "$4x^{3}$",
      "$8x^{5}$"
    ],
    "explanations": [
      "$\\left(8x^{6}\\right)^{2/3} = 8^{2/3}x^{4} = 4x^{4}$ since $8^{2/3} = (\\sqrt[3]{8})^{2} = 4$, and $\\left(4x^{-2}\\right)^{1/2} = 2x^{-1}$. Dividing: $\\frac{4x^{4}}{2x^{-1}} = 2x^{4-(-1)} = 2x^{5}$.",
      "$2x^{3}$ has the right coefficient but subtracts the exponents as $4 - 1$. The denominator's exponent is $-1$, and $4 - (-1) = 5$; dividing by $x^{-1}$ is the same as multiplying by $x$.",
      "$4x^{3}$ makes two errors: it subtracts the exponents as $4 - 1$ instead of $4 - (-1) = 5$, and it never divides the coefficient $4$ by the denominator's coefficient $2$.",
      "$8x^{5}$ gets the exponent right but leaves $8^{2/3}$ as $8$, applying the $\\tfrac{2}{3}$ power only to $x^{6}$. Since $8^{2/3} = 4$, the numerator is $4x^{4}$ and the coefficient of the quotient is $4 \\div 2 = 2$."
    ]
  },
  "q:ec091c9af71fffb0": {
    "options": [
      "3.6",
      "7.2",
      "10.0",
      "36.0"
    ],
    "explanations": [
      "3.6 is the area $36$ divided by the base $10$ without accounting for the $\\tfrac{1}{2}$ in the area formula. From $36 = \\tfrac{1}{2}(10)h$, the altitude is $h = \\tfrac{72}{10} = 7.2$, twice this value.",
      "The triangle's area is $36$ (enclose it in the $12$-by-$8$ rectangle and subtract three right triangles of areas $24$, $12$, and $24$), and $AB = \\sqrt{6^2 + 8^2} = 10$. From $36 = \\tfrac{1}{2}(10)h$, $h = 7.2$.",
      "10.0 is the length of side $\\overline{AB}$, $\\sqrt{(2-(-4))^2 + (7-(-1))^2} = \\sqrt{36 + 64} = 10$. That is the base the altitude is drawn to, an intermediate value, not the altitude itself.",
      "36.0 is the area of the triangle, an intermediate value. The altitude comes from $\\text{Area} = \\tfrac{1}{2}(\\text{base})(\\text{height})$ with base $AB = 10$: $h = \\tfrac{2(36)}{10} = 7.2$."
    ]
  },
  "q:6c141684ca3e149d": {
    "options": [
      "Text 2 argues that the benefits of urban trees are overstated by researchers like those cited in Text 1.",
      "Text 2 questions Text 1's claims by showing that tree planting cooled streets less than expected.",
      "Text 1 focuses on temperature, while Text 2 addresses an unrelated question about city budgets and spending.",
      "Text 2 offers a specific case that supports the general claim about tree canopy made in Text 1."
    ],
    "explanations": [
      "Nothing in Text 2 criticizes researchers or calls any benefit overstated. Its Phoenix results (a 5-degree reduction and fewer heat-related ER visits) are presented as positive, measurable outcomes that align with Text 1's claim.",
      "Text 2 does not question Text 1. The 5-degree Fahrenheit reduction it reports falls squarely inside the 4-to-6-degree range Text 1 cites, so the cooling matched expectations rather than falling short of them.",
      "Text 2 mentions that the initiative was 'city-funded,' but its subject is not budgets or spending. It reports surface temperature reductions and a decrease in heat-related emergency room visits, which is directly related to Text 1's topic.",
      "Text 1 states a general, research-based claim that tree canopy cools city streets by 4 to 6 degrees. Text 2 gives a specific case, Phoenix's planting initiative, whose measured 5-degree reduction illustrates and supports that general claim."
    ]
  },
  "q:a30f9e528c178b00": {
    "options": [
      "than any other planet",
      "than that of any other planet",
      "compared to any other planet",
      "than any planet"
    ],
    "explanations": [
      "'Greater than any other planet' compares Jupiter's mass to a planet rather than to another planet's mass, an illogical comparison of unlike things. The comparison needs 'that of' to stand in for 'the mass of.'",
      "The sentence compares Jupiter's mass to the mass of other planets. 'Than that of any other planet' uses 'that' to stand for 'the mass,' so like is compared with like, and 'other' correctly excludes Jupiter from the group.",
      "'Greater' is a comparative that must be completed with 'than,' not 'compared to.' This version also still compares a mass to a planet rather than to another planet's mass.",
      "Dropping 'other' makes Jupiter one of the planets it is being compared with, which would have Jupiter's mass exceed itself. It also compares a mass to a planet instead of to a planet's mass."
    ]
  },
  "q:f33adc1b972e4c10": {
    "options": [
      "2,880",
      "2,160",
      "5,520",
      "3,130"
    ],
    "explanations": [
      "2,880 is $\\frac{180}{500}(8{,}000)$, scaling the whole Section 2 column. It ignores the condition 'scored 3 or higher,' which excludes the 45 Section 2 students who scored 1 or 2.",
      "Section 2 students scoring 3 or higher number $60 + 75 = 135$ of the 500 sampled, so the district estimate is $\\frac{135}{500}(8{,}000) = 2{,}160$. Equivalently, $\\frac{135}{345}$ of the $5{,}520$ district students scoring 3 or higher gives the same $2{,}160$.",
      "5,520 is $\\frac{180 + 165}{500}(8{,}000)$, the number of district students expected to score 3 or higher across all sections. It is the intermediate population; the question asks how many of them were in Section 2.",
      "3,130 applies the restricted rate $\\frac{135}{345} \\approx 0.391$ to all 8,000 district students instead of to the 5,520 who scored 3 or higher. Mixing a restricted denominator with the unrestricted population inflates the count."
    ]
  },
  "q:1ca5fbc36a332bcd": {
    "options": [
      "$-2$",
      "$2$",
      "$3$",
      "$6$"
    ],
    "explanations": [
      "$-2$ is the rejected root of $x^{2}-x-6=0$. A pump's fill time cannot be negative, so $x=-2$ is discarded; the physical solution is $x=3$, and pump B's time is $x+3=6$.",
      "$2$ is the combined fill time given in the problem, the time the two pumps take working together. The question asks for pump B's time working alone, which is $x+3=6$ hours.",
      "$3$ is pump A's time, the value of $x$ from $(x-3)(x+2)=0$. The question asks about pump B, whose time is $x+3=3+3=6$ hours, one step further.",
      "Rates add: $\\frac{1}{x}+\\frac{1}{x+3}=\\frac{1}{2}$ leads to $x^{2}-x-6=0$, so $x=3$ (rejecting $-2$). Pump B takes $x+3=6$ hours; check $\\frac{1}{3}+\\frac{1}{6}=\\frac{1}{2}$."
    ]
  },
  "q:47ae97b366498427": {
    "options": [
      "0.37",
      "0.93",
      "1.30",
      "1.40"
    ],
    "explanations": [
      "0.37 is $\\sin\\theta$ alone, $\\dfrac{2}{\\sqrt{29}} \\approx 0.371$. The question asks for the sum $\\sin\\theta + \\cos\\theta$, so $\\cos\\theta \\approx 0.928$ must be added.",
      "0.93 is $\\cos\\theta$ alone, $\\dfrac{5}{\\sqrt{29}} \\approx 0.928$. The question asks for the sum of sine and cosine, so $\\sin\\theta \\approx 0.371$ must be added to it.",
      "With opposite $2$ and adjacent $5$, the hypotenuse is $\\sqrt{4+25}=\\sqrt{29}\\approx 5.385$. Then $\\sin\\theta+\\cos\\theta=\\dfrac{2+5}{\\sqrt{29}}=\\dfrac{7}{\\sqrt{29}}\\approx 1.30$.",
      "1.40 is $\\dfrac{7}{5}$, adding the two legs but dividing by the adjacent side $5$ as if it were the hypotenuse. The hypotenuse is $\\sqrt{29}\\approx 5.385$, giving $\\dfrac{7}{5.385}\\approx 1.30$."
    ]
  },
  "q:eec32a872fbdec45": {
    "options": [
      "$3$",
      "$9$",
      "$21$",
      "$63$"
    ],
    "explanations": [
      "Adding the equations gives $7x + 7y = 63$, so $x + y = 9$. The question asks for $\\frac{x + y}{3} = \\frac{9}{3} = 3$. No need to solve for $x$ and $y$ separately.",
      "$9$ is $x + y$, found from $7(x + y) = 63$. It is one step short: the question asks for $\\frac{x + y}{3}$, which is $\\frac{9}{3} = 3$.",
      "$21$ is $\\frac{63}{3}$, dividing the combined right-hand side by $3$ while forgetting that the left side is $7(x + y)$, not $x + y$. Dividing by $7$ first gives $x + y = 9$, and then $\\frac{9}{3} = 3$.",
      "$63$ is the sum of the two right-hand sides, $34 + 29$, which equals $7x + 7y$. It must be divided by $7$ to get $x + y = 9$ and then by $3$ to answer the question."
    ]
  },
  "q:00d0b60f2fbb368d": {
    "options": [
      "$4\\times 10^{11}$",
      "$4\\times 10^{14}$",
      "$2.5\\times 10^{15}$",
      "$4\\times 10^{15}$"
    ],
    "explanations": [
      "$4\\times 10^{11}$ is $\\frac{1}{2.5\\times 10^{-12}}$, dividing $1$ gram by the cell mass. The question asks about $1$ kilogram, which is $10^{3}$ grams, so the result is $10^{3}$ times larger.",
      "Convert first: $1$ kilogram $= 10^{3}$ grams. Then $\\frac{1\\times 10^{3}}{2.5\\times 10^{-12}} = \\frac{1}{2.5}\\times 10^{3-(-12)} = 0.4\\times 10^{15} = 4\\times 10^{14}$ cells.",
      "$2.5\\times 10^{15}$ multiplies the mantissas ($1 \\times 2.5$) instead of dividing them. Dividing by a mass of $2.5\\times 10^{-12}$ requires $1 \\div 2.5 = 0.4$, giving $0.4\\times 10^{15} = 4\\times 10^{14}$.",
      "$4\\times 10^{15}$ comes from rewriting $0.4\\times 10^{15}$ by moving the decimal without adjusting the exponent. Making the mantissa $10$ times larger requires making the power $10$ times smaller: $0.4\\times 10^{15} = 4\\times 10^{14}$."
    ]
  },
  "q:65a682e2db57f9ce": {
    "options": [
      "$16$",
      "$17$",
      "$19$",
      "$20$"
    ],
    "explanations": [
      "The required $7$ bottles cost $7(12) = 84$ dollars, leaving $500 - 84 = 416$ for gift cards. Since $416 \\div 25 = 16.64$, the council can afford $16$ cards ($400 + 84 = 484 \\le 500$); a $17$th would push the total to $509$.",
      "$17$ rounds $16.64$ up instead of down. Seventeen cards cost $425$ dollars, and with the $84$ dollars of water bottles the total is $509$, which exceeds the $500$-dollar budget.",
      "$19$ comes from subtracting the cost of only one water bottle: $(500 - 12) \\div 25 = 19.52$. The council must buy at least $7$ bottles, so $7(12) = 84$ dollars must be set aside, not $12$.",
      "$20$ is $500 \\div 25$, which spends the entire budget on gift cards and ignores the required water bottles. After the $84$ dollars of bottles, only $416$ dollars remain for cards."
    ]
  },
  "q:03e0f6497ffb6e26": {
    "options": [
      "$3$",
      "$4$",
      "$6$",
      "$5$"
    ],
    "explanations": [
      "$3$ results from treating $40$ percent as the amount that REMAINS each hour, $500(0.4)^{3} = 32$ grams. The filter removes $40$ percent, so $60$ percent remains and the multiplier is $0.6$; after $3$ hours there are still $108$ grams.",
      "After $4$ hours the salt is $500(0.6)^{4} = 64.8$ grams, which is still above $50$. This is the last hour at which $50$ grams or more remains, one hour short of the first drop below $50$.",
      "After $6$ hours the salt is $500(0.6)^{6} \\approx 23.3$ grams, which is below $50$, but the amount already dropped below $50$ an hour earlier ($38.88$ grams at hour $5$). The question asks when it FIRST drops below $50$.",
      "Each hour multiplies the salt by $0.6$: $300$, $180$, $108$, $64.8$, then $38.88$ grams after $5$ hours. Since $64.8 \\ge 50$ but $38.88 < 50$, the amount first drops below $50$ grams after $5$ hours."
    ]
  },
  "q:ba49722c55485775": {
    "options": [
      "80.4",
      "186.5",
      "108.0",
      "282.7"
    ],
    "explanations": [
      "80.4 treats the $2.4$ as degrees rather than radians: $2.4$ degrees is only about $0.042$ radians, giving a first arc of about $1.9$ m, plus the $78.5$ m second arc. The $2.4$ is already in radians, so the first arc is $45(2.4) = 108$ m.",
      "First arc: $s = r\\theta = 45(2.4) = 108$ m. Second arc: $100$ degrees is $\\dfrac{100\\pi}{180} \\approx 1.745$ radians, so $s = 45(1.745) \\approx 78.5$ m. Total: $108 + 78.5 \\approx 186.5$ m.",
      "108.0 is the length of the first arc only, $45(2.4)$. The runner then continues along a second arc of about $78.5$ m, which must be added for the total distance.",
      "282.7 is the full circumference, $2\\pi(45)$, as if the runner went once around the track. The two arcs total $2.4 + 1.745 \\approx 4.15$ radians, less than the $2\\pi \\approx 6.28$ radians of a full lap."
    ]
  },
  "q:c1e55ddd761259fa": {
    "options": [
      "$\\$16$",
      "$\\$1{,}380$",
      "$\\$1{,}560$",
      "$\\$1{,}680$"
    ],
    "explanations": [
      "$\\$16$ is the number of months, found from $1200 + 30m = 2100 - 45m + 300$, so $75m = 1200$ and $m = 16$. It is an intermediate value, not a dollar balance; Account A then holds $1200 + 30(16) = 1680$.",
      "$\\$1{,}380$ is Account B's balance after $16$ months, $2100 - 45(16)$. The question asks for Account A's balance at that moment, which is $300$ dollars more: $\\$1{,}680$.",
      "$\\$1{,}560$ comes from setting the two balances equal, $1200 + 30m = 2100 - 45m$, which gives $m = 12$ and $1200 + 30(12) = 1560$. The question specifies that A holds $300$ dollars MORE than B, not the same amount.",
      "After $m$ months, A holds $1200 + 30m$ and B holds $2100 - 45m$. Setting $1200 + 30m = (2100 - 45m) + 300$ gives $75m = 1200$, so $m = 16$ and A holds $1200 + 30(16) = \\$1{,}680$ (B holds $1{,}380$, exactly $300$ less)."
    ]
  },
  "q:84f6e18eadbf0744": {
    "options": [
      "$2$",
      "$2.25$",
      "$4.25$",
      "$11$"
    ],
    "explanations": [
      "$2$ is the value of $c$ alone: exactly one solution requires $c - 2 = 0$, so $c = 2$. The question asks for $c + x$, and the solution $x = 2.25$ still has to be added.",
      "$2.25$ is the solution $x$ alone, from $|4x - 9| = 0$ giving $4x = 9$. The question asks for $c + x$, so the value $c = 2$ must also be added: $2 + 2.25 = 4.25$.",
      "$|A| = k$ has exactly one solution only when $k = 0$ (two solutions if $k > 0$, none if $k < 0$). So $c - 2 = 0$, $c = 2$, and $|4x - 9| = 0$ gives $x = \\tfrac{9}{4} = 2.25$. Then $c + x = 4.25$.",
      "$11$ adds $c = 2$ to the $9$ inside the absolute value rather than to the solution $x$. The equation $|4x - 9| = 0$ gives $x = \\tfrac{9}{4} = 2.25$, not $9$, so $c + x = 4.25$."
    ]
  },
  "q:e5ba0429d0d47872": {
    "options": [
      "$\\frac{5}{6}$",
      "$1$",
      "$\\frac{13}{12}$",
      "$\\frac{13}{6}$"
    ],
    "explanations": [
      "$\\frac{5}{6}$ is the SUM of the roots, $-\\frac{b}{a} = \\frac{5}{6}$ (indeed $\\frac{3}{2} + \\left(-\\frac{2}{3}\\right) = \\frac{5}{6}$). The question asks for the difference $p - q$, which is $\\frac{3}{2} - \\left(-\\frac{2}{3}\\right) = \\frac{13}{6}$.",
      "$1$ is the absolute value of the product of the roots, $\\left|\\frac{c}{a}\\right| = \\left|\\frac{-6}{6}\\right| = 1$. The roots are $\\frac{3}{2}$ and $-\\frac{2}{3}$, whose difference is $\\frac{13}{6}$, not their product.",
      "$\\frac{13}{12}$ is $\\frac{\\sqrt{b^2 - 4ac}}{2a} = \\frac{13}{12}$, the distance from either root to the axis of symmetry, which is exactly half the difference. The two roots are $\\frac{13}{12}$ on each side of $\\frac{5}{12}$, so $p - q = 2\\cdot\\frac{13}{12} = \\frac{13}{6}$.",
      "By the quadratic formula, $x = \\frac{5 \\pm \\sqrt{25 + 144}}{12} = \\frac{5 \\pm 13}{12}$, so $p = \\frac{18}{12} = \\frac{3}{2}$ and $q = -\\frac{8}{12} = -\\frac{2}{3}$. Then $p - q = \\frac{3}{2} + \\frac{2}{3} = \\frac{13}{6}$."
    ]
  },
  "q:93c2ab88bc652aa1": {
    "options": [
      "90",
      "104",
      "97",
      "95"
    ],
    "explanations": [
      "The area of a rectangle is length times width: $A = 9 \\times 10 = 90$ square units. The two dimensions are simply multiplied.",
      "104 is not the product of $9$ and $10$; it would be the area of a rectangle such as $8 \\times 13$. Multiplying the given dimensions gives $9 \\times 10 = 90$.",
      "97 is a prime number, so it cannot be the product of two whole-number dimensions at all, let alone $9$ and $10$. The area is $9 \\times 10 = 90$.",
      "95 is $5 \\times 19$, not $9 \\times 10$. It would come from an arithmetic slip, adding $5$ to the correct product. The area of a $9$ by $10$ rectangle is $90$."
    ]
  },
  "q:282bff4ff62e895f": {
    "options": [
      "Growth",
      "Neither",
      "Decay",
      "Linear"
    ],
    "explanations": [
      "Exponential growth requires a base greater than $1$, so that each increase in $t$ multiplies $y$ by more than $1$. Here the base is $0.85$, which shrinks $y$ by $15$ percent each step.",
      "The function is not neutral: its base $0.85$ is not equal to $1$, so $y$ changes with $t$. Because $0.85 < 1$, every unit increase in $t$ multiplies $y$ by $0.85$, a steady decrease, which is decay.",
      "In $y = a \\cdot b^{t}$ with $a > 0$, the base $b$ decides the behavior: $b > 1$ is growth and $0 < b < 1$ is decay. Here $b = 0.85 < 1$, so $y$ loses $15$ percent of its value each time period.",
      "A linear function changes by a constant AMOUNT each step and has $t$ as a base, not an exponent. Here $t$ is the exponent and $y$ changes by a constant FACTOR of $0.85$, which is exponential decay."
    ]
  },
  "q:8f613ab085b24a84": {
    "options": [
      "$(QR + PQ)^2 = PR^2$",
      "$QR^2 + PQ^2 = PR^2$",
      "$QR^2 + PR^2 = PQ^2$",
      "$PQ^2 + PR^2 = QR^2$"
    ],
    "explanations": [
      "$(QR + PQ)^2 = PR^2$ squares the sum of the legs instead of summing their squares. Expanding, $(QR + PQ)^2 = QR^2 + 2(QR)(PQ) + PQ^2$, which includes an extra cross term and is larger than $PR^2$.",
      "The right angle at $Q$ means the hypotenuse is the opposite side, $PR$, and the legs are $QR$ and $PQ$. The Pythagorean theorem gives $QR^2 + PQ^2 = PR^2$.",
      "$QR^2 + PR^2 = PQ^2$ treats $PQ$ as the hypotenuse, but $PQ$ touches the right angle at $Q$, so it is a leg. The hypotenuse is always the side opposite the right angle, which is $PR$.",
      "$PQ^2 + PR^2 = QR^2$ treats $QR$ as the hypotenuse, but $QR$ has $Q$ as an endpoint and is therefore a leg. The hypotenuse is $PR$, the side that does not touch the right angle."
    ]
  },
  "q:7e6684cc32268b7a": {
    "options": [
      "10",
      "11",
      "7",
      "5"
    ],
    "explanations": [
      "10 cm on the map would represent $10 \\times 23 = 230$ km, not $161$ km. The map distance is the real distance divided by the scale factor: $161 \\div 23 = 7$ cm.",
      "11 cm on the map would represent $11 \\times 23 = 253$ km, far more than the $161$ km between the towns. Dividing the actual distance by $23$ km per centimeter gives $7$ cm.",
      "Each centimeter on the map stands for $23$ km, so the map distance is $161 \\div 23 = 7$ cm. Check: $7 \\times 23 = 161$.",
      "5 cm on the map would represent only $5 \\times 23 = 115$ km, short of the $161$ km between the towns. The correct map distance is $161 \\div 23 = 7$ cm."
    ]
  },
  "q:5b0404ae7795a299": {
    "options": [
      "$(2, 1)$",
      "$(-2, -1)$",
      "$(2, -1)$",
      "$(0, -1)$"
    ],
    "explanations": [
      "$(2, 1)$ gets the horizontal shift right but flips the sign of the vertical shift. The $- 1$ outside the absolute value moves the graph DOWN $1$, so the vertex's $y$-coordinate is $-1$, not $1$.",
      "$(-2, -1)$ flips the sign of the horizontal shift. In $|x - h|$, the expression $x - 2$ means $h = 2$, a shift $2$ units to the RIGHT, so the vertex's $x$-coordinate is $2$, not $-2$.",
      "For $f(x) = |x - h| + k$ the vertex is $(h, k)$, where the absolute value is zero. Here $x - 2 = 0$ at $x = 2$, and the output there is $0 - 1 = -1$, so the vertex is $(2, -1)$.",
      "$(0, -1)$ ignores the horizontal shift; it is the vertex of $|x| - 1$. Because the expression inside is $x - 2$, the graph is shifted $2$ units right, putting the vertex at $x = 2$."
    ]
  },
  "q:f465d0a5c0f5b90e": {
    "options": [
      "-20",
      "4",
      "-40",
      "-25"
    ],
    "explanations": [
      "Residual $=$ actual $-$ predicted $= 44 - 64 = -20$. The negative sign shows the actual value fell $20$ below the prediction.",
      "4 is not the difference between $44$ and $64$ in either order; the two values differ by $20$. It would come from a digit slip, such as subtracting $60$ from $64$. The residual is $44 - 64 = -20$.",
      "$-40$ is twice the correct value. The actual $44$ and predicted $64$ differ by only $20$, so the residual is $44 - 64 = -20$; there is no doubling in the residual formula.",
      "$-25$ is not the difference between $44$ and $64$, which is $20$. It would come from a subtraction slip such as $44 - 69$. The residual is actual minus predicted, $44 - 64 = -20$."
    ]
  },
  "q:e0e65577479b2fd7": {
    "options": [
      "1",
      "4",
      "-2",
      "2"
    ],
    "explanations": [
      "A product is zero when a factor is zero: $x - 1 = 0$ gives $x = 1$ and $x = 0$ is the other solution (the constant $3$ is never zero). The sum of the solutions is $1 + 0 = 1$.",
      "4 comes from treating the coefficient $3$ as if it were a solution and adding it to $x = 1$. The factor $3$ is a nonzero constant and contributes no solution; the solutions are $0$ and $1$.",
      "$-2$ would require solutions such as $-1$ and $-1$, which is a sign error on the factor $x - 1$. Setting $x - 1 = 0$ gives $x = +1$, and the other factor gives $x = 0$, so the sum is $1$.",
      "2 would result from counting the solutions ($x = 0$ and $x = 1$ make two) or from treating $x = 1$ as a repeated root. The question asks for their sum, which is $0 + 1 = 1$."
    ]
  },
  "q:ce832efdcd65c875": {
    "options": [
      "center $(3, 4)$, radius $64$",
      "center $(-3, -4)$, radius $8$",
      "center $(-4, -3)$, radius $8$",
      "center $(-3, -4)$, radius $64$"
    ],
    "explanations": [
      "Center $(3, 4)$ flips both signs: $(x + 3)^2$ is $(x - (-3))^2$, so the center's $x$-coordinate is $-3$. And $64$ is $r^2$, not $r$; the radius is $\\sqrt{64} = 8$.",
      "Match to $(x - h)^2 + (y - k)^2 = r^2$: $x + 3 = x - (-3)$ and $y + 4 = y - (-4)$, so the center is $(-3, -4)$. The right side is $r^2 = 64$, so $r = 8$.",
      "Center $(-4, -3)$ swaps the coordinates. The $x$-term is $(x + 3)^2$, which fixes the $x$-coordinate at $-3$, and the $y$-term $(y + 4)^2$ fixes the $y$-coordinate at $-4$. The radius $8$ is correct.",
      "The center $(-3, -4)$ is correct, but $64$ is $r^2$, the right side of the standard form. The radius is the square root, $r = \\sqrt{64} = 8$."
    ]
  },
  "q:6ff0b1c44115c5c0": {
    "options": [
      "$(-4, -2)$, $r = 25$",
      "$(4, 2)$, $r = 25$",
      "$(-8, -4)$, $r = 5$",
      "$(4, 2)$, $r = 5$"
    ],
    "explanations": [
      "$(-4, -2)$ flips the signs of the center: completing the square gives $(x - 4)^2 + (y - 2)^2$, so the center is $(4, 2)$. And $25$ is $r^2$, not $r$; the radius is $5$.",
      "The center $(4, 2)$ is correct, but $25$ is $r^2$: completing the square gives $(x - 4)^2 + (y - 2)^2 = 5 + 16 + 4 = 25$. The radius is $\\sqrt{25} = 5$.",
      "$(-8, -4)$ uses the full coefficients $-8$ and $-4$ with their signs flipped. Completing the square halves each coefficient: $x^2 - 8x$ becomes $(x - 4)^2$ and $y^2 - 4y$ becomes $(y - 2)^2$, so the center is $(4, 2)$.",
      "Complete the square: $x^2 - 8x + 16 + y^2 - 4y + 4 = 5 + 16 + 4$, so $(x - 4)^2 + (y - 2)^2 = 25$. The center is $(4, 2)$ and the radius is $\\sqrt{25} = 5$."
    ]
  },
  "q:58104264c845385d": {
    "options": [
      "55",
      "60",
      "61",
      "64"
    ],
    "explanations": [
      "If $x = 55$, then $\\sqrt{55} \\approx 7.42$, not $8$. Undoing a square root means squaring both sides, and $8^2 = 64$.",
      "If $x = 60$, then $\\sqrt{60} \\approx 7.75$, not $8$. The equation requires $x = 8^2$, and $8 \\times 8 = 64$, not $60$.",
      "If $x = 61$, then $\\sqrt{61} \\approx 7.81$, not $8$. Squaring both sides of $\\sqrt{x} = 8$ gives $x = 64$, a perfect square.",
      "Square both sides to undo the square root: $(\\sqrt{x})^2 = 8^2$, so $x = 64$. Check: $\\sqrt{64} = 8$."
    ]
  },
  "q:c1084107f0bd0b48": {
    "options": [
      "$\\frac{x}{5}$",
      "$\\frac{1}{5}$",
      "$\\frac{x+2}{5}$",
      "$\\frac{x}{5+2}$"
    ],
    "explanations": [
      "Factor both parts: $\\frac{x^2 + 2x}{5x + 10} = \\frac{x(x + 2)}{5(x + 2)}$. The common factor $(x + 2)$ cancels, leaving $\\frac{x}{5}$ (for $x \\neq -2$).",
      "$\\frac{1}{5}$ cancels the $x$ along with the $(x + 2)$, but after factoring, $\\frac{x(x + 2)}{5(x + 2)}$, the numerator still has a factor of $x$ that nothing in the denominator matches. The result is $\\frac{x}{5}$.",
      "$\\frac{x+2}{5}$ keeps the wrong factor. After factoring to $\\frac{x(x + 2)}{5(x + 2)}$, it is $(x + 2)$ that appears in both numerator and denominator and cancels; the leftover factor is $x$, not $x + 2$.",
      "$\\frac{x}{5+2}$ cancels terms individually, striking the $x$ from $x^2$ and $5x$ and the $2$ from $2x$. Only common FACTORS of the whole numerator and denominator may be cancelled; the common factor here is $(x + 2)$."
    ]
  },
  "q:1582ddac14acc525": {
    "options": [
      "About 471",
      "About 391",
      "About 341",
      "About 196"
    ],
    "explanations": [
      "About 471 is the total number of moviegoers expected, as if every one of them buys popcorn. Only $83$ percent do, so the expected number of buyers is $0.83 \\times 471 \\approx 391$.",
      "The expected number is the proportion times the total: $0.83 \\times 471 = 390.93$, about 391 moviegoers.",
      "About 341 would mean roughly $72$ percent of the 471 moviegoers buy popcorn ($341 \\div 471 \\approx 0.72$), not the surveyed $83$ percent. The expected count is $0.83 \\times 471 \\approx 391$.",
      "About 196 is roughly half of the correct $391$, corresponding to about $42$ percent of moviegoers. The survey rate is $83$ percent, so the expected count is $0.83 \\times 471 \\approx 391$."
    ]
  },
  "q:1c3838dc453b621b": {
    "options": [
      "5.4",
      "10.8",
      "14.0",
      "21.5"
    ],
    "explanations": [
      "5.4 is half of $PQ$, the distance from the midpoint $M$ to either endpoint ($\\sqrt{5^2 + 2^2} = \\sqrt{29} \\approx 5.4$). The full segment is twice that, about $10.8$.",
      "With $P = (0, p)$ and $Q = (q, 0)$, the midpoint $\\left(\\tfrac{q}{2}, \\tfrac{p}{2}\\right) = (5, -2)$ gives $q = 10$ and $p = -4$. Then $PQ = \\sqrt{10^2 + (-4)^2} = \\sqrt{116} \\approx 10.8$.",
      "14.0 adds the horizontal and vertical changes, $10 + 4$, instead of combining them with the Pythagorean theorem. The straight-line distance is $\\sqrt{10^2 + 4^2} = \\sqrt{116} \\approx 10.8$.",
      "21.5 is twice the correct length, $2\\sqrt{116}$. The endpoints are $P = (0, -4)$ and $Q = (10, 0)$, already found by doubling the midpoint coordinates, so the distance $\\sqrt{116} \\approx 10.8$ should not be doubled again."
    ]
  },
  "q:ddda34d2a87f96a0": {
    "options": [
      "$16.7\\%$",
      "$20.6\\%$",
      "$50\\%$",
      "$79.4\\%$"
    ],
    "explanations": [
      "$16.7\\%$ is $50 \\div 3$, splitting the half-life's $50$ percent decrease evenly over $3$ hours as if the decay were linear. Exponential decay compounds, so the hourly factor is $(0.5)^{1/3} \\approx 0.794$, a $20.6$ percent drop.",
      "Rewrite with an hourly base: $A(t) = 60\\left[(0.5)^{1/3}\\right]^{t}$, and $(0.5)^{1/3} \\approx 0.7937$. Each hour the amount is multiplied by about $0.794$, a decrease of $1 - 0.7937 \\approx 0.206$, or $20.6$ percent.",
      "$50\\%$ is the decrease over one full half-life, which here is $3$ hours ($t/3$ in the exponent). The question asks about a single hour, over which the amount drops by only about $20.6$ percent.",
      "$79.4\\%$ is the percent REMAINING after each hour, $(0.5)^{1/3} \\approx 0.794$. The question asks for the percent DECREASE, which is the complement: $100 - 79.4 = 20.6$ percent."
    ]
  },
  "q:2222d4a3c36228cb": {
    "options": [
      "$y = 12x + 4$",
      "$y = -4x + 12$",
      "$y = 4x + 36$",
      "$y = 4x + 12$"
    ],
    "explanations": [
      "$y = 12x + 4$ swaps the slope and the intercept. The line crosses the $y$-axis at $(0, 12)$, so $12$ is the intercept, and the slope is $\\frac{36 - 12}{6 - 0} = 4$. Check: at $x = 6$ this gives $76$, not $36$.",
      "$y = -4x + 12$ has the right intercept but the wrong sign on the slope. From $(0, 12)$ to $(6, 36)$, $y$ increases as $x$ increases, so the slope is positive: $\\frac{24}{6} = 4$. This line gives $y = -12$ at $x = 6$.",
      "$y = 4x + 36$ has the right slope but uses the $y$-value of the second point as the intercept. The intercept is the $y$-value where $x = 0$, which is $12$; this line passes through $(0, 36)$, not $(0, 12)$.",
      "The slope is $\\frac{36 - 12}{6 - 0} = \\frac{24}{6} = 4$, and the point $(0, 12)$ is on the $y$-axis, so the intercept is $12$. The equation is $y = 4x + 12$; check: $4(6) + 12 = 36$."
    ]
  },
  "q:93b7ff0418d8024d": {
    "options": [
      "36",
      "65",
      "35",
      "121"
    ],
    "explanations": [
      "The volume of a rectangular prism is the product of its three dimensions: $V = 6 \\times 3 \\times 2 = 36$ cubic units.",
      "65 is not the product of $6$, $3$, and $2$; it is $5 \\times 13$ and cannot be built from these dimensions. Multiplying all three gives $6 \\times 3 \\times 2 = 36$.",
      "35 is one less than the correct product and factors as $5 \\times 7$, so it cannot come from dimensions $6$, $3$, and $2$. The volume is $6 \\times 3 \\times 2 = 36$.",
      "121 is $11^2$, the square of the sum $6 + 3 + 2$. Volume multiplies the dimensions rather than adding them: $6 \\times 3 \\times 2 = 36$."
    ]
  },
  "q:fd300a70c867ad86": {
    "options": [
      "5",
      "7",
      "0",
      "6"
    ],
    "explanations": [
      "Add $10$ to both sides: $\\frac{x}{5} = -9 + 10 = 1$. Then multiply by $5$: $x = 5$. Check: $\\frac{5}{5} - 10 = 1 - 10 = -9$.",
      "Substituting $x = 7$ gives $\\frac{7}{5} - 10 = 1.4 - 10 = -8.6$, not $-9$. After adding $10$ to both sides, $\\frac{x}{5} = 1$, so $x$ must be $5$.",
      "Substituting $x = 0$ gives $\\frac{0}{5} - 10 = -10$, not $-9$. This comes from adding $10$ to $-10$ instead of to $-9$; the correct step is $\\frac{x}{5} = -9 + 10 = 1$, so $x = 5$.",
      "Substituting $x = 6$ gives $\\frac{6}{5} - 10 = 1.2 - 10 = -8.8$, not $-9$. Isolating the fraction gives $\\frac{x}{5} = 1$, so $x = 5$."
    ]
  },
  "q:5b76ed83d12f3dab": {
    "options": [
      "$2$",
      "$4$",
      "$8$",
      "$10$"
    ],
    "explanations": [
      "$2$ is the left endpoint of the acceptable interval $2 \\le x \\le 10$, found from $x - 6 = -4$. The question asks for the LENGTH of the interval, which is $10 - 2 = 8$.",
      "$4$ is the half-width from $|x - 6| \\le 4$, the distance from the center setting $6$ to either end of the interval. The full interval runs from $2$ to $10$, so its length is $2(4) = 8$.",
      "Require $120 - 8|x - 6| \\ge 88$, so $8|x - 6| \\le 32$ and $|x - 6| \\le 4$ (dividing by a negative flips the inequality). That gives $2 \\le x \\le 10$, an interval of length $10 - 2 = 8$.",
      "$10$ is the right endpoint of the interval $2 \\le x \\le 10$, found from $x - 6 = 4$. It is one boundary, not the length; the interval spans $10 - 2 = 8$ units."
    ]
  },
  "q:7e56194d2ff09304": {
    "options": [
      "$24^{4}$",
      "$6^{3} + 4^{3}$",
      "$10^{3}$",
      "$216 \\cdot 64$"
    ],
    "explanations": [
      "$24^{4}$ multiplies the base correctly ($6 \\cdot 4 = 24$) but raises it to the fourth power. The exponent stays $3$: $(6 \\cdot 4)^{3} = 24^{3} = 13{,}824$, which equals $216 \\cdot 64$; $24^{4}$ is $331{,}776$.",
      "$6^{3} + 4^{3}$ distributes the exponent over a sum, but $6 \\cdot 4$ is a product. The power of a product is the PRODUCT of the powers, $6^{3} \\cdot 4^{3}$; here $216 + 64 = 280$, not $13{,}824$.",
      "$10^{3}$ adds the bases ($6 + 4 = 10$) instead of multiplying them. The base is $6 \\cdot 4 = 24$, and $(6 \\cdot 4)^{3} = 24^{3} = 13{,}824$, far from $1{,}000$.",
      "A power of a product is the product of the powers: $(6 \\cdot 4)^{3} = 6^{3} \\cdot 4^{3} = 216 \\cdot 64$. Check: $24^{3} = 13{,}824$ and $216 \\cdot 64 = 13{,}824$."
    ]
  },
  "q:d3efa7dba981cc44": {
    "options": [
      "$\\$136.00$",
      "$\\$147.20$",
      "$\\$153.90$",
      "$\\$160.00$"
    ],
    "explanations": [
      "$\\$136.00$ is the price after only the first markdown, $125.12 \\div 0.92$, reversing just the $8$ percent step. It is an intermediate value; the $15$ percent discount must also be undone: $136 \\div 0.85 = 160$.",
      "$\\$147.20$ is $125.12 \\div 0.85$, undoing only the $15$ percent markdown and ignoring the additional $8$ percent. Both discounts must be reversed: $125.12 \\div (0.85 \\times 0.92) = 160$.",
      "$\\$153.90$ comes from adding the discounts to $23$ percent and computing $125.12 \\times 1.23$. That both multiplies instead of dividing and ignores that the $8$ percent applies to the already-reduced price, not the original.",
      "Successive discounts multiply: the final price is $0.85 \\times 0.92 = 0.782$ of the original. So the original is $125.12 \\div 0.782 = \\$160.00$. Check: $160 \\times 0.85 = 136$, and $136 \\times 0.92 = 125.12$."
    ]
  },
  "q:ee3331dfcb1abb6d": {
    "options": [
      "156",
      "101",
      "142",
      "165"
    ],
    "explanations": [
      "156 does not match the face areas. The three distinct faces have areas $7 \\times 3 = 21$, $7 \\times 5 = 35$, and $3 \\times 5 = 15$, totaling $71$, and doubling gives $142$, not $156$.",
      "101 is not twice the sum of the face areas: $21 + 35 + 15 = 71$, and $2 \\times 71 = 142$. (It is also close to the volume $7 \\times 3 \\times 5 = 105$, a different quantity.)",
      "A rectangular prism has three pairs of congruent faces: $SA = 2(lw + lh + wh) = 2(7 \\cdot 3 + 7 \\cdot 5 + 3 \\cdot 5) = 2(21 + 35 + 15) = 2(71) = 142$.",
      "165 does not come from the face areas $21$, $35$, and $15$. Their sum is $71$, and each face has a matching opposite face, so the surface area is $2 \\times 71 = 142$."
    ]
  },
  "q:0b0542935ddca9ff": {
    "options": [
      "62",
      "81",
      "112",
      "336"
    ],
    "explanations": [
      "62 is the sum of the two legs, $14 + 48$, leaving out the hypotenuse. The perimeter includes all three sides: $14 + 48 + 50 = 112$.",
      "81 uses the ratio numbers $7$ and $24$ as the actual leg lengths, $7 + 24 + 50$. The ratio $\\tan A = \\tfrac{7}{24}$ only fixes the shape; with hypotenuse $50 = 25 \\cdot 2$, the legs are $7 \\cdot 2 = 14$ and $24 \\cdot 2 = 48$.",
      "$\\tan A = \\tfrac{7}{24}$ makes the legs $7k$ and $24k$ with hypotenuse $25k$ (a $7$-$24$-$25$ triangle). From $25k = 50$, $k = 2$, so the legs are $14$ and $48$ and the perimeter is $14 + 48 + 50 = 112$.",
      "336 is the area, $\\tfrac{1}{2}(14)(48)$, not the perimeter. The question asks for the sum of the side lengths, $14 + 48 + 50 = 112$."
    ]
  },
  "q:5fc56b95aa2c1709": {
    "options": [
      "$\\frac{x}{3+x}$",
      "$\\frac{x}{3x+1}$",
      "$\\frac{1}{3x+1}$",
      "$\\frac{3x+1}{x}$"
    ],
    "explanations": [
      "$\\frac{x}{3+x}$ comes from combining $3 + \\frac{1}{x}$ as $\\frac{3 + x}{x}$, adding $3$ to the numerator without first writing it over the common denominator $x$. Correctly, $3 = \\frac{3x}{x}$, so the sum is $\\frac{3x + 1}{x}$.",
      "Combine the denominator first: $3 + \\frac{1}{x} = \\frac{3x}{x} + \\frac{1}{x} = \\frac{3x+1}{x}$. Dividing $1$ by a fraction flips it: $\\frac{1}{\\frac{3x+1}{x}} = \\frac{x}{3x+1}$.",
      "$\\frac{1}{3x+1}$ combines the denominator correctly as $\\frac{3x+1}{x}$ but then loses the $x$ when taking the reciprocal. Dividing by $\\frac{3x+1}{x}$ means multiplying by $\\frac{x}{3x+1}$, so the $x$ moves to the numerator.",
      "$\\frac{3x+1}{x}$ is the combined denominator itself, $3 + \\frac{1}{x}$, not its reciprocal. The original expression is $1$ divided by this quantity, which flips it to $\\frac{x}{3x+1}$."
    ]
  },
  "q:09b51e8a7164fa5d": {
    "options": [
      "Exactly 61% of all students at the school support the change",
      "No estimate about the school can be made from a sample",
      "At least 61% of all students at the school support the change",
      "About 61% of all students at the school support the change"
    ],
    "explanations": [
      "'Exactly 61%' overstates what a sample can show. A different random sample would give a somewhat different percentage, so the sample proportion is an estimate of the school-wide figure, not its exact value.",
      "A random sample is exactly what makes an estimate about the whole school possible, because random selection keeps the sample representative. Saying no estimate can be made throws away the point of random sampling.",
      "'At least 61%' treats the sample result as a lower bound, but sampling variability runs in both directions. The true school-wide percentage could reasonably be a little below $61$ percent as well as a little above it.",
      "Because the sample is random, its result generalizes to the whole school as an estimate: about $61$ percent of all students support the change. 'About' correctly allows for the sampling variability around the sample value."
    ]
  },
  "q:eb1c3558bbcb4deb": {
    "options": [
      "$2$",
      "$12$",
      "$8$",
      "$14$"
    ],
    "explanations": [
      "$2$ is the extraneous power setting from $(p - 12)(p - 2) = 0$. At $p = 2$ the required mass would be $p - 4 = -2$ grams, impossible for a square root, so this candidate must be rejected.",
      "$12$ is the power SETTING that works, the value of $p$. The question asks how many grams are produced at that setting, which is $h = \\sqrt{6(12) - 8} = \\sqrt{64} = 8$, or equivalently $p - 4 = 8$.",
      "Set $\\sqrt{6p - 8} = p - 4$ and square: $p^2 - 14p + 24 = 0$, so $p = 12$ or $p = 2$. Only $p = 12$ checks ($\\sqrt{64} = 8 = 12 - 4$). The mass produced is $8$ grams.",
      "$14$ is the sum of the two roots of the squared equation, $12 + 2$, found from the quadratic without checking either value. Only $p = 12$ satisfies the original equation, and the mass there is $8$ grams."
    ]
  },
  "q:7350cf3a5df6235a": {
    "options": [
      "75",
      "79",
      "25",
      "65"
    ],
    "explanations": [
      "$25\\%$ of $100$ students is $25$, so the number who do NOT walk is $100 - 25 = 75$. Equivalently, $100\\% - 25\\% = 75\\%$ of $100$ is $75$.",
      "79 would leave only $21$ walkers, which is $21$ percent of the class, not $25$ percent. Since $25$ of the $100$ students walk, $100 - 25 = 75$ do not.",
      "25 is the number of students who DO walk to school ($25\\%$ of $100$). The question asks for those who do not walk, the complement: $100 - 25 = 75$.",
      "65 would leave $35$ walkers, which is $35$ percent of the class, not the stated $25$ percent. With $25$ walkers out of $100$, the non-walkers number $100 - 25 = 75$."
    ]
  },
  "q:8eab23344f4f9c02": {
    "options": [
      "$\\frac{8}{100} = 8\\%$",
      "$\\frac{8}{160} = 5\\%$",
      "$\\frac{8}{160} = 0.5\\%$",
      "$\\frac{152}{160} = 95\\%$"
    ],
    "explanations": [
      "$\\frac{8}{100}$ divides by $100$ instead of the actual number of respondents, $160$, treating the count as if it were already a percent. The relative frequency is the cell count over the grand total, $\\frac{8}{160}$.",
      "Relative frequency among ALL respondents is the cell count divided by the grand total: $\\frac{8}{160} = 0.05 = 5\\%$.",
      "$\\frac{8}{160}$ is the right fraction, but $0.5\\%$ misplaces the decimal. $\\frac{8}{160} = 0.05$, and $0.05$ as a percent is $5\\%$, not $0.5\\%$.",
      "$\\frac{152}{160} = 95\\%$ is the relative frequency of everyone who is NOT a senior biker, the complement. The question asks for the senior bikers themselves, $\\frac{8}{160} = 5\\%$."
    ]
  }
}

export default ENTRIES
