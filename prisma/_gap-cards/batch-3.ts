export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "apes-climate-change",
    cards: [
      {
        front: "What is the greenhouse effect?",
        back: "The process by which greenhouse gases in the atmosphere absorb and re-emit outgoing infrared (longwave) radiation from Earth's surface, warming the lower atmosphere. The natural greenhouse effect keeps Earth habitable; the enhanced greenhouse effect from human emissions causes additional warming.",
        hint: "Absorbs outgoing infrared, not incoming sunlight."
      },
      {
        front: "Rank the major greenhouse gases and their main human sources.",
        back: "Water vapor (largest natural contributor), carbon dioxide ($CO_2$, from fossil fuel combustion and deforestation), methane ($CH_4$, from livestock, rice paddies, landfills, natural gas leaks), nitrous oxide ($N_2O$, from fertilizers and combustion), and CFCs/HFCs (refrigerants).",
        hint: "CO2 is most abundant anthropogenic gas; CH4 is more potent per molecule."
      },
      {
        front: "Why is methane considered a more potent greenhouse gas than CO2?",
        back: "Methane traps roughly 25-80 times more heat per molecule than $CO_2$ over comparable timeframes (about 80x over 20 years, ~28x over 100 years). However, it has a much shorter atmospheric lifetime (~12 years) versus $CO_2$'s lifetime of centuries.",
        hint: "Higher Global Warming Potential, shorter lifetime."
      },
      {
        front: "What does the Keeling Curve show?",
        back: "The Keeling Curve is the continuous record of atmospheric $CO_2$ concentration measured at Mauna Loa, Hawaii, since 1958. It shows a steady long-term rise (from ~315 ppm to over 420 ppm) with annual sawtooth oscillations caused by Northern Hemisphere plant uptake in summer and release in winter.",
        hint: "Mauna Loa; sawtooth pattern on an upward trend."
      },
      {
        front: "Define a positive feedback loop in the climate system and give an example.",
        back: "A positive feedback amplifies the initial change. Example: melting ice reduces Earth's albedo (reflectivity), so more solar energy is absorbed, causing more warming and more melting. Another is permafrost thaw releasing methane, which causes more warming.",
        hint: "Amplifies, does not stabilize."
      },
      {
        front: "Give an example of a negative feedback loop related to climate.",
        back: "A negative feedback counteracts the initial change. Example: warmer temperatures may increase evaporation and low cloud cover, which reflects more incoming sunlight and slightly cools the surface. Increased plant growth from higher $CO_2$ can also remove some carbon.",
        hint: "Dampens the change."
      },
      {
        front: "What is albedo and how does it relate to climate change?",
        back: "Albedo is the fraction of incoming solar radiation a surface reflects. Ice and snow have high albedo (reflect most light); oceans and forests have low albedo (absorb most). As ice melts, albedo drops, more heat is absorbed, accelerating warming (ice-albedo feedback).",
        hint: "Bright = high reflectivity."
      },
      {
        front: "How does ocean acidification occur and what does it harm?",
        back: "The ocean absorbs about a quarter of atmospheric $CO_2$; dissolved $CO_2$ forms carbonic acid, lowering ocean pH. This reduces available carbonate ions, harming shell- and coral-building organisms (corals, mollusks, plankton) that need calcium carbonate.",
        hint: "Not 'warming' — a chemistry change in seawater pH."
      },
      {
        front: "List four documented consequences of global climate change.",
        back: "Rising sea levels (thermal expansion plus melting land ice), more frequent and intense extreme weather, shifting species ranges and phenology, ocean acidification, coral bleaching, longer wildfire seasons, and spread of vector-borne diseases.",
        hint: "Sea level, weather extremes, ecosystems, acidification."
      },
      {
        front: "Distinguish climate change mitigation from adaptation.",
        back: "Mitigation reduces the causes of climate change (cutting emissions, renewable energy, reforestation, carbon capture). Adaptation adjusts to its effects (sea walls, drought-resistant crops, relocating communities). The AP exam often asks you to classify a strategy as one or the other.",
        hint: "Mitigation = fix the cause; adaptation = cope with effects."
      },
      {
        front: "What did the Kyoto Protocol and Paris Agreement each do?",
        back: "The Kyoto Protocol (1997) set binding emission-reduction targets for developed countries. The Paris Agreement (2015) had nearly all nations set voluntary nationally determined contributions to limit warming well below 2 degrees C, ideally 1.5 degrees C, above pre-industrial levels.",
        hint: "Kyoto = binding/developed; Paris = voluntary/global."
      },
      {
        front: "Common trap: Is the greenhouse effect the same as ozone depletion?",
        back: "No. The greenhouse effect involves greenhouse gases trapping infrared heat in the troposphere. Ozone depletion is the breakdown of stratospheric ozone by CFCs, which lets in more harmful UV radiation. They are different problems, though CFCs contribute to both.",
        hint: "Heat trapping vs. UV protection."
      },
      {
        front: "Worked example: A region's average sea level rises 3 mm per year. How much rise over 50 years, and name the two main causes.",
        back: "$3 \\\\times 50 = 150$ mm, or 15 cm. The two main causes are thermal expansion of warming seawater and the addition of meltwater from glaciers and ice sheets (land ice, not sea ice).",
        hint: "Multiply rate by time; land ice + expansion."
      }
    ]
  },
  {
    slug: "infinite-series",
    cards: [
      {
        front: "What is the difference between a sequence and a series?",
        back: "A sequence is an ordered list of terms $a_n$. A series is the sum of the terms of a sequence, written $\\\\sum_{n=1}^{\\\\infty} a_n$. A series converges if its sequence of partial sums $S_N = \\\\sum_{n=1}^{N} a_n$ approaches a finite limit.",
        hint: "Series = sum; convergence is about partial sums."
      },
      {
        front: "State the geometric series test and its sum formula.",
        back: "A geometric series $\\\\sum_{n=0}^{\\\\infty} a r^n$ converges if and only if $|r| < 1$, with sum $\\\\frac{a}{1-r}$, where $a$ is the first term and $r$ is the common ratio. It diverges if $|r| \\\\geq 1$.",
        hint: "Converges only when |r| < 1."
      },
      {
        front: "State the nth-term test (divergence test).",
        back: "If $\\\\lim_{n\\\\to\\\\infty} a_n \\\\neq 0$ (or does not exist), then $\\\\sum a_n$ diverges. Trap: if the limit IS 0, the test is inconclusive — the series may still diverge (e.g., the harmonic series).",
        hint: "Only proves divergence, never convergence."
      },
      {
        front: "What is the p-series test?",
        back: "The series $\\\\sum_{n=1}^{\\\\infty} \\\\frac{1}{n^p}$ converges if $p > 1$ and diverges if $p \\\\leq 1$. The case $p = 1$ is the harmonic series, which diverges.",
        hint: "p > 1 converges; harmonic (p=1) diverges."
      },
      {
        front: "State the Integral Test and its conditions.",
        back: "If $f(x)$ is positive, continuous, and decreasing for $x \\\\geq 1$ and $a_n = f(n)$, then $\\\\sum a_n$ and $\\\\int_1^{\\\\infty} f(x)\\\\,dx$ either both converge or both diverge. The integral's value is not the sum of the series.",
        hint: "Positive, continuous, decreasing; series and integral share fate."
      },
      {
        front: "How do the Direct Comparison and Limit Comparison tests work?",
        back: "Direct Comparison: for positive terms, if $a_n \\\\leq b_n$ and $\\\\sum b_n$ converges, then $\\\\sum a_n$ converges; if $a_n \\\\geq b_n$ and $\\\\sum b_n$ diverges, then $\\\\sum a_n$ diverges. Limit Comparison: if $\\\\lim_{n\\\\to\\\\infty} \\\\frac{a_n}{b_n} = L$ with $0 < L < \\\\infty$, both series share the same behavior.",
        hint: "Compare to a known p- or geometric series."
      },
      {
        front: "State the Ratio Test and when it is most useful.",
        back: "Let $L = \\\\lim_{n\\\\to\\\\infty} \\\\left| \\\\frac{a_{n+1}}{a_n} \\\\right|$. If $L < 1$ the series converges absolutely; if $L > 1$ (or infinite) it diverges; if $L = 1$ the test is inconclusive. Best for series with factorials or exponentials.",
        hint: "L = 1 tells you nothing; great for n! and r^n."
      },
      {
        front: "State the Alternating Series Test.",
        back: "An alternating series $\\\\sum (-1)^n b_n$ (with $b_n > 0$) converges if (1) $b_n$ is decreasing and (2) $\\\\lim_{n\\\\to\\\\infty} b_n = 0$. Both conditions are required.",
        hint: "Terms decrease to zero."
      },
      {
        front: "Distinguish absolute convergence from conditional convergence.",
        back: "A series converges absolutely if $\\\\sum |a_n|$ converges. It converges conditionally if $\\\\sum a_n$ converges but $\\\\sum |a_n|$ diverges. Example: $\\\\sum \\\\frac{(-1)^n}{n}$ converges conditionally (alternating harmonic).",
        hint: "Absolute = the absolute-value series also converges."
      },
      {
        front: "What is the Alternating Series Error (Remainder) Bound?",
        back: "For a convergent alternating series, the error from using $N$ terms satisfies $|S - S_N| \\\\leq b_{N+1}$, the absolute value of the first omitted term. Use it to bound how close a partial sum is to the true sum.",
        hint: "Error is at most the next term's size."
      },
      {
        front: "What are a Taylor series and a Maclaurin series?",
        back: "A Taylor series of $f$ centered at $a$ is $\\\\sum_{n=0}^{\\\\infty} \\\\frac{f^{(n)}(a)}{n!}(x-a)^n$. A Maclaurin series is the special case centered at $a = 0$. They represent a function as an infinite polynomial near the center.",
        hint: "Maclaurin = Taylor centered at 0."
      },
      {
        front: "Give the Maclaurin series for e^x, sin x, and cos x.",
        back: "$e^x = \\\\sum_{n=0}^{\\\\infty} \\\\frac{x^n}{n!}$; $\\\\sin x = \\\\sum_{n=0}^{\\\\infty} \\\\frac{(-1)^n x^{2n+1}}{(2n+1)!}$; $\\\\cos x = \\\\sum_{n=0}^{\\\\infty} \\\\frac{(-1)^n x^{2n}}{(2n)!}$. All three converge for all real $x$.",
        hint: "Memorize these three; they recur constantly."
      },
      {
        front: "What is the radius and interval of convergence of a power series?",
        back: "The radius of convergence $R$ is the value such that the power series $\\\\sum c_n (x-a)^n$ converges for $|x-a| < R$. Usually found with the Ratio Test. The interval of convergence is the full set of $x$ values, requiring you to test the endpoints separately.",
        hint: "Find R with Ratio Test, then check endpoints by hand."
      },
      {
        front: "Worked example: Does the harmonic series 1 + 1/2 + 1/3 + ... converge?",
        back: "No, it diverges. It is a p-series with $p = 1$. Even though the terms go to 0 (so the nth-term test is inconclusive), the Integral Test on $\\\\int_1^{\\\\infty} \\\\frac{1}{x}\\\\,dx = \\\\infty$ confirms divergence.",
        hint: "Classic trap: terms to 0 but still diverges."
      }
    ]
  },
  {
    slug: "csa-arrays",
    cards: [
      {
        front: "How do you declare and initialize a 1D array of 5 integers in Java?",
        back: "Two common ways: `int[] arr = new int[5];` (creates an array of 5 ints, all defaulting to 0), or `int[] arr = {3, 1, 4, 1, 5};` (initializer list). The brackets can go after the type or the name.",
        hint: "new type[size] or {initializer list}."
      },
      {
        front: "What is the default value of array elements for int, double, boolean, and object types?",
        back: "When created with `new`, numeric arrays default to 0 (int) or 0.0 (double), boolean arrays to `false`, and object/reference arrays (including String) to `null`.",
        hint: "0, 0.0, false, null."
      },
      {
        front: "How do you find the length of an array, and what is a common trap?",
        back: "Use `arr.length` (a field, no parentheses). Trap: it is `length` for arrays but `length()` for Strings, and `size()` for ArrayList. Valid indices run from 0 to `arr.length - 1`.",
        hint: "No parentheses for arrays."
      },
      {
        front: "What exception is thrown for an invalid array index, and what causes it?",
        back: "`ArrayIndexOutOfBoundsException` is thrown at runtime when you access an index less than 0 or greater than or equal to `arr.length`. A frequent cause is looping with `<=` instead of `<` against `length`.",
        hint: "Off-by-one with <= length."
      },
      {
        front: "Write a standard for loop to print every element of array arr.",
        back: "`for (int i = 0; i < arr.length; i++) { System.out.println(arr[i]); }`. Start at index 0, stop before `arr.length`, increment by 1.",
        hint: "i from 0 to length - 1."
      },
      {
        front: "What is an enhanced for loop (for-each), and what is its key limitation?",
        back: "`for (int x : arr) { ... }` iterates over each element, copying it into `x`. Limitation: you cannot modify the array elements through `x` (it is a copy), and you have no index. Use a standard for loop when you must change elements or need the index.",
        hint: "Read-only access, no index available."
      },
      {
        front: "How do you traverse a 2D array and find its dimensions?",
        back: "For `int[][] grid`, `grid.length` gives the number of rows and `grid[r].length` gives the number of columns in row `r`. Use nested loops: outer over rows, inner over columns, accessing `grid[r][c]`.",
        hint: "Outer = rows, inner = columns."
      },
      {
        front: "Worked example: Write code to sum all elements of a 2D int array grid.",
        back: "`int sum = 0; for (int r = 0; r < grid.length; r++) { for (int c = 0; c < grid[r].length; c++) { sum += grid[r][c]; } }`. The result is in `sum`.",
        hint: "Nested loops, accumulator outside both."
      },
      {
        front: "Describe the algorithm to find the maximum value in an array.",
        back: "Initialize `max` to `arr[0]` (not 0, which breaks with negatives). Loop from index 1 to end; if `arr[i] > max`, set `max = arr[i]`. Trap: initializing `max = 0` fails for all-negative arrays.",
        hint: "Seed max with the first element."
      },
      {
        front: "Why does passing an array to a method allow the method to change the original?",
        back: "Arrays are objects, so the parameter holds a reference (alias) to the same underlying array. Modifying elements inside the method changes the original array. Reassigning the parameter to a new array does not affect the caller.",
        hint: "Reference semantics; elements change, reassignment does not."
      },
      {
        front: "How do ArrayList add, get, set, remove, and size differ from array operations?",
        back: "ArrayList uses methods: `list.add(x)`, `list.get(i)`, `list.set(i, x)`, `list.remove(i)`, `list.size()`. It is resizable, holds objects (not primitives — use Integer), and `remove(int)` shifts subsequent elements left.",
        hint: "Methods, not brackets; resizable; objects only."
      },
      {
        front: "What is the classic trap when removing elements from an ArrayList in a loop?",
        back: "When you `remove(i)`, all later elements shift left, so the next element is skipped if you still increment `i`. Fix: do not increment after a removal, or iterate backward from `size() - 1` down to 0.",
        hint: "Shifting skips elements; loop backward."
      },
      {
        front: "How do you copy an array so changes to the copy do not affect the original?",
        back: "Create a new array and copy each element in a loop, or use `Arrays.copyOf(arr, arr.length)`. Trap: `int[] b = a;` only copies the reference, so both names point to the same array.",
        hint: "Assignment copies the reference, not the data."
      }
    ]
  },
  {
    slug: "wh-americas-africa-1200",
    cards: [
      {
        front: "What was the Mali Empire and who was its most famous ruler?",
        back: "Mali was a wealthy West African empire (c. 1235-1600) that controlled trans-Saharan trade in gold and salt. Its most famous ruler, Mansa Musa, made a lavish pilgrimage (hajj) to Mecca in 1324, displaying immense gold wealth and spreading Mali's fame.",
        hint: "West Africa; Mansa Musa's hajj."
      },
      {
        front: "Why was Timbuktu significant in the Mali Empire?",
        back: "Timbuktu was a center of trade and Islamic learning, home to the Sankore Mosque and university, where scholars studied religion, law, mathematics, and astronomy. It symbolized the wealth and intellectual culture fostered by trans-Saharan trade.",
        hint: "Center of Islamic scholarship and trade."
      },
      {
        front: "What goods drove trans-Saharan trade and how did it shape West Africa?",
        back: "West African gold was exchanged for North African and Saharan salt, plus textiles, horses, and books. This trade enriched empires like Ghana, Mali, and Songhai, spread Islam along trade routes, and connected sub-Saharan Africa to the wider Afro-Eurasian world.",
        hint: "Gold for salt; spread Islam."
      },
      {
        front: "What was the Songhai Empire?",
        back: "Songhai was a large West African empire that succeeded Mali in the 1400s-1500s, centered on Gao and the Niger River. Under rulers like Sunni Ali and Askia Muhammad it expanded control of trade, strengthened Islam, and built a centralized administration before falling to a Moroccan invasion in 1591.",
        hint: "Successor to Mali; Askia Muhammad."
      },
      {
        front: "Describe the Great Zimbabwe state.",
        back: "Great Zimbabwe (c. 1100-1450) was a powerful state in southeastern Africa known for massive dry-stone walls built without mortar. It prospered from cattle, agriculture, and gold trade linked to the Indian Ocean network through the Swahili coast.",
        hint: "Stone walls; Indian Ocean gold trade."
      },
      {
        front: "What were the Swahili city-states and what made them prosperous?",
        back: "The Swahili city-states (e.g., Kilwa, Mombasa, Mogadishu) were independent East African trading ports that thrived on Indian Ocean commerce. They blended Bantu and Arab/Islamic culture, producing the Swahili language, and exported gold, ivory, and enslaved people for Asian goods.",
        hint: "East African coast; Indian Ocean trade; Kilwa."
      },
      {
        front: "What was the Aztec (Mexica) Empire and how was it organized?",
        back: "The Aztec Empire dominated central Mexico (c. 1345-1521) from its capital Tenochtitlan, built on Lake Texcoco. It ran a tribute system over conquered peoples, practiced human sacrifice tied to religion, and used chinampas (floating gardens) for intensive agriculture.",
        hint: "Tenochtitlan; tribute system; chinampas."
      },
      {
        front: "What were chinampas and why were they important?",
        back: "Chinampas were artificial 'floating' islands of fertile mud and vegetation built in shallow lakes around Tenochtitlan. They allowed highly productive year-round farming, supporting the dense population of the Aztec capital.",
        hint: "Aztec raised-bed farming on the lake."
      },
      {
        front: "Describe the Inca (Inka) Empire and its administrative innovations.",
        back: "The Inca Empire (c. 1438-1533) stretched along the Andes from its capital Cuzco. It used an extensive road system, a mita labor tax (mandatory rotational labor), terrace farming, and quipus (knotted cords) for record-keeping in place of writing.",
        hint: "Andes; roads, mita, quipu."
      },
      {
        front: "Compare the labor systems of the Aztec and Inca empires.",
        back: "The Aztecs relied on a tribute system, demanding goods and sacrificial captives from conquered peoples. The Incas used the mita, a state-organized rotational labor draft for public works like roads, terraces, and temples. Both centralized resources for the state.",
        hint: "Aztec tribute (goods) vs. Inca mita (labor)."
      },
      {
        front: "How did the Cahokia/Mississippian culture organize society?",
        back: "The Mississippian culture (c. 800-1500) in North America built large earthen mounds, with Cahokia near modern St. Louis as a major urban center of tens of thousands. It was a hierarchical, maize-based agricultural society connected by regional trade.",
        hint: "Mound-builders; Cahokia near the Mississippi."
      },
      {
        front: "What common feature did many state-building societies of 1200-1450 share?",
        back: "They built centralized political structures supported by intensive agriculture and long-distance trade, often justified by religion. Trade networks (trans-Saharan, Indian Ocean, Andean roads) spread wealth, ideas, and religions and enabled tribute or labor systems to sustain elites.",
        hint: "Centralization + agriculture + trade + religion."
      },
      {
        front: "Common trap: Did sub-Saharan African empires have writing and complex states before European contact?",
        back: "Yes. Empires like Mali and Songhai had sophisticated administration, Islamic literacy and scholarship (Timbuktu manuscripts), and global trade links long before Europeans arrived. Avoid assuming these societies were isolated or 'primitive.'",
        hint: "Timbuktu's universities predate European contact."
      }
    ]
  },
  {
    slug: "compound-absolute-value-inequalities-alg1",
    cards: [
      {
        front: "What does a compound inequality joined by 'and' mean?",
        back: "An 'and' compound inequality requires both conditions to be true at the same time; the solution is the intersection (overlap) of the two solution sets. For example, $x > 2$ and $x < 5$ means $2 < x < 5$.",
        hint: "Both true; overlap region."
      },
      {
        front: "What does a compound inequality joined by 'or' mean?",
        back: "An 'or' compound inequality is satisfied if at least one condition is true; the solution is the union of the two sets. For example, $x < -1$ or $x > 3$ includes everything in either region.",
        hint: "At least one true; union of regions."
      },
      {
        front: "How do you solve the compound inequality -3 < 2x + 1 ≤ 7?",
        back: "Do the same operation to all three parts. Subtract 1: $-4 < 2x \\\\leq 6$. Divide by 2: $-2 < x \\\\leq 3$. The solution is all $x$ between $-2$ (exclusive) and $3$ (inclusive).",
        hint: "Operate on all three parts at once."
      },
      {
        front: "What is the definition of absolute value, and why does it create two cases?",
        back: "$|x|$ is the distance of $x$ from 0 on the number line, so it is always nonnegative. Because two different numbers can be the same distance from 0 (like $5$ and $-5$), absolute value equations and inequalities split into two cases.",
        hint: "Distance from zero; positive and negative both work."
      },
      {
        front: "How do you rewrite |ax + b| < c (c > 0) without absolute value?",
        back: "It becomes the 'and' compound inequality $-c < ax + b < c$. 'Less than' problems trap the expression between $-c$ and $c$ (an 'and' situation).",
        hint: "Less thAND: trapped between -c and c."
      },
      {
        front: "How do you rewrite |ax + b| > c (c > 0) without absolute value?",
        back: "It becomes the 'or' compound inequality $ax + b < -c$ or $ax + b > c$. 'Greater than' problems split outward into two separate regions (an 'or' situation).",
        hint: "GreatOR: splits into two outer regions."
      },
      {
        front: "Solve |x - 4| ≤ 6.",
        back: "Rewrite as $-6 \\\\leq x - 4 \\\\leq 6$. Add 4 to all parts: $-2 \\\\leq x \\\\leq 10$. The solution is all $x$ from $-2$ to $10$ inclusive.",
        hint: "Less than: write as a single 'and' chain."
      },
      {
        front: "Solve |2x + 1| > 5.",
        back: "Split: $2x + 1 > 5$ or $2x + 1 < -5$. Solving gives $x > 2$ or $x < -3$. The solution is the union of these two regions.",
        hint: "Greater than: two cases, flip sign for the negative one."
      },
      {
        front: "What is the special case when an absolute value is set less than a negative number?",
        back: "$|ax + b| < $ (a negative number) has NO solution, because absolute value can never be negative. Likewise $|ax+b| \\\\leq -2$ has no solution. Always check the sign of the constant first.",
        hint: "Absolute value can't be less than something negative."
      },
      {
        front: "What is the special case when an absolute value is set greater than a negative number?",
        back: "$|ax + b| > $ (a negative number) is true for ALL real numbers, since absolute value is always at least 0. The solution is all real numbers.",
        hint: "Always nonnegative, so it beats any negative."
      },
      {
        front: "Why must you isolate the absolute value before splitting into cases?",
        back: "The rules for converting $|expr| < c$ or $|expr| > c$ only apply when the absolute value is alone on one side. You must add, subtract, multiply, or divide to isolate it first, e.g., turn $2|x| - 3 < 7$ into $|x| < 5$.",
        hint: "Get |...| alone first, then split."
      },
      {
        front: "How do you graph the solution to a compound 'and' inequality like -2 < x ≤ 3 on a number line?",
        back: "Use an open circle at $-2$ (strict, not included) and a closed circle at $3$ (included), then shade the segment between them. Open circle = $<$ or $>$; closed circle = $\\\\leq$ or $\\\\geq$.",
        hint: "Open = strict, closed = inclusive; shade the overlap."
      },
      {
        front: "Common trap: students forget to flip the inequality sign when dividing by a negative. Demonstrate.",
        back: "Solving $-2x < 6$: divide both sides by $-2$ and FLIP the sign to get $x > -3$. Multiplying or dividing an inequality by a negative number reverses its direction.",
        hint: "Negative divide or multiply means flip the sign."
      }
    ]
  },
  {
    slug: "ratios-proportions-prealg",
    cards: [
      {
        front: "What is a ratio, and what are three ways to write one?",
        back: "A ratio compares two quantities by division. The ratio of 3 to 4 can be written as $3:4$, $3$ to $4$, or the fraction $\\\\frac{3}{4}$. Order matters: $3:4$ is different from $4:3$.",
        hint: "Three forms; order matters."
      },
      {
        front: "How do you simplify a ratio, and simplify 12:18?",
        back: "Divide both terms by their greatest common factor. For $12:18$, the GCF is 6, so $12 \\\\div 6 = 2$ and $18 \\\\div 6 = 3$, giving the simplified ratio $2:3$.",
        hint: "Divide both parts by the GCF."
      },
      {
        front: "What is a unit rate, and how do you find one?",
        back: "A unit rate is a rate with a denominator of 1 (a 'per one' amount). Divide the numerator by the denominator. Example: 150 miles in 3 hours is $150 \\\\div 3 = 50$ miles per hour.",
        hint: "Rate per single unit; divide to get '1' on bottom."
      },
      {
        front: "What is a proportion?",
        back: "A proportion is an equation stating that two ratios are equal, such as $\\\\frac{a}{b} = \\\\frac{c}{d}$. It expresses that the two ratios represent the same relationship.",
        hint: "Two equal ratios set equal."
      },
      {
        front: "What is cross-multiplication and when do you use it?",
        back: "To solve a proportion $\\\\frac{a}{b} = \\\\frac{c}{d}$, cross-multiply to get $a \\\\cdot d = b \\\\cdot c$, then solve for the unknown. It works because the cross products of a true proportion are always equal.",
        hint: "Multiply diagonally: ad = bc."
      },
      {
        front: "Worked example: Solve the proportion 4/6 = x/15.",
        back: "Cross-multiply: $4 \\\\cdot 15 = 6 \\\\cdot x$, so $60 = 6x$, giving $x = 10$. Check: $\\\\frac{4}{6} = \\\\frac{10}{15}$, both simplify to $\\\\frac{2}{3}$.",
        hint: "Cross-multiply, then divide."
      },
      {
        front: "How do you tell whether two ratios form a proportion?",
        back: "Cross-multiply and check whether the cross products are equal, or simplify both ratios and see if they match. Example: $\\\\frac{2}{3}$ and $\\\\frac{6}{9}$ form a proportion since $2 \\\\cdot 9 = 18 = 3 \\\\cdot 6$.",
        hint: "Equal cross products means it's a proportion."
      },
      {
        front: "How do ratios connect to percents?",
        back: "A percent is a ratio out of 100. To convert a ratio to a percent, write it as a fraction, then make the denominator 100 (or divide and multiply by 100). Example: $\\\\frac{3}{4} = \\\\frac{75}{100} = 75\\\\%$.",
        hint: "Percent = parts per 100."
      },
      {
        front: "Worked example: 3 apples cost \\$1.20. How much do 7 apples cost (constant rate)?",
        back: "Set up a proportion $\\\\frac{1.20}{3} = \\\\frac{x}{7}$. The unit rate is $\\\\$0.40$ per apple, so $7 \\\\times 0.40 = \\\\$2.80$.",
        hint: "Find the unit price, then multiply."
      },
      {
        front: "What is a scale factor in map and model problems?",
        back: "A scale factor is the ratio of a drawing/model measurement to the actual measurement, e.g., 1 inch = 50 miles. Set up a proportion using the scale to convert between drawing and real distances.",
        hint: "Drawing-to-real ratio; use a proportion."
      },
      {
        front: "How do you split a quantity in a given ratio? Split \\$60 in the ratio 2:3.",
        back: "Add the ratio parts: $2 + 3 = 5$. Each part is $60 \\\\div 5 = 12$. Then $2 \\\\times 12 = \\\\$24$ and $3 \\\\times 12 = \\\\$36$. Check: $24 + 36 = 60$.",
        hint: "Add parts, find one part, multiply."
      },
      {
        front: "Common trap: matching units in a proportion. Why does it matter?",
        back: "Both ratios must list the same units in the same positions (e.g., miles on top, hours on bottom on both sides). Mixing them up — like miles/hours equals hours/miles — gives a wrong answer. Keep corresponding units aligned.",
        hint: "Same units, same positions, both sides."
      },
      {
        front: "What does it mean for two quantities to be directly proportional?",
        back: "Two quantities are directly proportional if their ratio stays constant: as one increases, the other increases by the same factor, so $\\\\frac{y}{x} = k$ (a constant). Doubling $x$ doubles $y$.",
        hint: "Constant ratio; both grow together."
      }
    ]
  },
  {
    slug: "conjugated-systems-dienes",
    cards: [
      {
        front: "What distinguishes conjugated, isolated, and cumulated dienes?",
        back: "Conjugated dienes have alternating double and single bonds (C=C-C=C). Isolated dienes have the double bonds separated by two or more sp3 carbons. Cumulated dienes (allenes) have two double bonds sharing one carbon (C=C=C).",
        hint: "Conjugated = alternating; isolated = separated; cumulated = adjacent."
      },
      {
        front: "Why are conjugated dienes more stable than isolated dienes?",
        back: "Conjugation allows the p orbitals to overlap continuously, delocalizing the pi electrons across all four carbons. This delocalization lowers the energy of the system, which is reflected in lower heats of hydrogenation for conjugated dienes.",
        hint: "Delocalization of pi electrons lowers energy."
      },
      {
        front: "What orbital feature is required for conjugation?",
        back: "Conjugation requires a continuous chain of overlapping, parallel p orbitals on adjacent sp2 (or sp) atoms. Each contributing atom must be sp2 hybridized so its unhybridized p orbital can align and overlap with its neighbors.",
        hint: "Continuous chain of parallel p orbitals on sp2 atoms."
      },
      {
        front: "What is the s-cis vs. s-trans conformation of a diene?",
        back: "These describe rotation about the central single bond of a conjugated diene. The s-cis conformation has both double bonds on the same side; the s-trans has them on opposite sides. The s-cis conformation is required for the Diels-Alder reaction.",
        hint: "Rotation about the single bond; s-cis needed for Diels-Alder."
      },
      {
        front: "What is the allylic carbocation and why is it stabilized?",
        back: "An allylic carbocation has the positive charge on a carbon adjacent to a C=C double bond. It is stabilized by resonance: the positive charge is delocalized over two carbons, making it more stable than a comparable non-allylic cation.",
        hint: "Resonance spreads the + charge over two carbons."
      },
      {
        front: "What are 1,2- and 1,4-addition to a conjugated diene?",
        back: "When an electrophile adds to a conjugated diene, the 1,2-product has the new groups on adjacent carbons (across one original double bond), while the 1,4-product has them on the terminal carbons with the double bond shifted to the middle (2,3-position).",
        hint: "Two products from one allylic cation intermediate."
      },
      {
        front: "Explain kinetic vs. thermodynamic control in diene addition.",
        back: "At low temperature, the 1,2-product (kinetic) dominates because it forms faster. At high temperature, the reaction is reversible and the more stable 1,4-product (thermodynamic, more substituted double bond) dominates. Temperature selects the product.",
        hint: "Low T = 1,2 (kinetic); high T = 1,4 (thermodynamic)."
      },
      {
        front: "In HBr addition to 1,3-butadiene, why do two products form?",
        back: "Protonation gives a resonance-stabilized allylic carbocation with positive charge shared on C2 and C4. Bromide can attack either position, giving the 1,2-product (3-bromo-1-butene) or the 1,4-product (1-bromo-2-butene).",
        hint: "Allylic cation has two electrophilic carbons."
      },
      {
        front: "What is the Diels-Alder reaction?",
        back: "The Diels-Alder reaction is a [4+2] cycloaddition between a conjugated diene (4 pi electrons, in s-cis form) and a dienophile (2 pi electrons, the alkene/alkyne). It forms a six-membered ring with two new sigma bonds in a single concerted step.",
        hint: "[4+2] cycloaddition forming a cyclohexene ring."
      },
      {
        front: "What electronic features make a good diene and a good dienophile?",
        back: "A good diene is electron-rich and must adopt the s-cis conformation; electron-donating groups (EDGs) help. A good dienophile is electron-poor, bearing electron-withdrawing groups (EWGs) such as C=O, CN, or NO2, which lower its pi energy.",
        hint: "Electron-rich diene + electron-poor dienophile."
      },
      {
        front: "Why is the Diels-Alder reaction stereospecific, and what does 'endo rule' mean?",
        back: "Because it is concerted, substituents retain their relative geometry: cis stays cis and trans stays trans on the dienophile (stereospecific, suprafacial-suprafacial). The endo rule states that, kinetically, the endo product (EWG tucked under the diene) is usually favored.",
        hint: "Concerted means geometry is preserved; endo is kinetic favorite."
      },
      {
        front: "What does a UV-Vis spectrum tell you about conjugated systems?",
        back: "More conjugation lowers the energy gap between the HOMO and LUMO, so the molecule absorbs longer-wavelength (lower-energy) light. Extended conjugation shifts absorption toward and into the visible region (a bathochromic/red shift), which is why many conjugated compounds are colored.",
        hint: "More conjugation = smaller gap = longer wavelength absorbed."
      },
      {
        front: "Common trap: Are all dienes with two double bonds conjugated?",
        back: "No. Only when the double bonds alternate with a single bond (C=C-C=C) is the diene conjugated. If they are separated by sp3 carbons (isolated) or share a carbon (cumulated/allene), the system is not conjugated and lacks the extra resonance stabilization.",
        hint: "Conjugation needs the alternating single bond between them."
      }
    ]
  },
  {
    slug: "apush-gilded-age",
    cards: [
      {
        front: "What time period was the Gilded Age, and who coined the term?",
        back: "The Gilded Age spans roughly 1870-1900, an era of rapid industrialization. Mark Twain and Charles Dudley Warner coined the term, implying a thin gold layer of prosperity masking deep social problems and corruption beneath.",
        hint: "Twain's phrase: gilded, not golden."
      },
      {
        front: "Distinguish a vertical from a horizontal monopoly with examples.",
        back: "Vertical integration controls every stage of production, from raw materials to finished product (Andrew Carnegie in steel). Horizontal integration buys up competitors in the same industry to dominate a market (John D. Rockefeller's Standard Oil controlling oil refining).",
        hint: "Vertical = supply chain; horizontal = competitors."
      },
      {
        front: "Who were the major 'captains of industry' / 'robber barons'?",
        back: "Andrew Carnegie (steel), John D. Rockefeller (Standard Oil), Cornelius Vanderbilt (railroads), and J.P. Morgan (finance/banking). 'Captain of industry' praises their innovation; 'robber baron' criticizes their ruthless, exploitative methods.",
        hint: "Carnegie, Rockefeller, Vanderbilt, Morgan."
      },
      {
        front: "What was Social Darwinism and the Gospel of Wealth?",
        back: "Social Darwinism applied 'survival of the fittest' to society, justifying wealth gaps as natural. The Gospel of Wealth, by Andrew Carnegie, argued the rich had a duty to use their fortunes philanthropically for society's benefit.",
        hint: "Survival of the fittest; Carnegie's philanthropy essay."
      },
      {
        front: "What did the Sherman Antitrust Act (1890) do, and what was its early weakness?",
        back: "It outlawed 'combinations in restraint of trade,' the first federal law against monopolies. Early on it was weakly enforced and was even used against labor unions rather than corporations, due to vague wording and pro-business courts.",
        hint: "First antitrust law; ironically used against unions first."
      },
      {
        front: "Compare the Knights of Labor and the American Federation of Labor (AFL).",
        back: "The Knights of Labor welcomed all workers (skilled, unskilled, women, Black workers) and pursued broad reforms but declined after Haymarket. The AFL, led by Samuel Gompers, organized only skilled craft workers and focused on practical 'bread-and-butter' goals: wages, hours, and conditions.",
        hint: "Knights = broad/idealistic; AFL = skilled/practical."
      },
      {
        front: "Identify three major labor conflicts of the Gilded Age.",
        back: "The Great Railroad Strike of 1877, the Haymarket Affair (1886, Chicago bombing that hurt the labor movement), and the Homestead Strike (1892, Carnegie steel) and Pullman Strike (1894, broken by federal troops and an injunction).",
        hint: "1877 railroads, Haymarket, Homestead, Pullman."
      },
      {
        front: "What was 'New Immigration' in this era and how did nativists respond?",
        back: "New immigrants (1880s-1900s) came largely from southern and eastern Europe (Italians, Poles, Jews, etc.), unlike earlier northern/western European arrivals. Nativists responded with hostility, and Congress passed the Chinese Exclusion Act (1882) barring Chinese laborers.",
        hint: "Southern/eastern Europe; Chinese Exclusion Act."
      },
      {
        front: "What was the political machine system, exemplified by Tammany Hall?",
        back: "Political machines were urban organizations that traded services, jobs, and favors to immigrants and the poor in exchange for votes, while engaging in graft. Tammany Hall in New York, run by figures like Boss Tweed, is the classic example of machine corruption.",
        hint: "Boss Tweed and Tammany Hall; votes for favors."
      },
      {
        front: "What did the Pendleton Civil Service Act (1883) reform?",
        back: "The Pendleton Act created a merit-based system for federal jobs, requiring competitive exams instead of the spoils system (patronage). It was passed after President Garfield's assassination by a disappointed office-seeker.",
        hint: "Merit exams replace the spoils system."
      },
      {
        front: "What grievances drove the Populist (People's) Party, and what did it demand?",
        back: "Farmers facing falling crop prices, high railroad rates, and debt formed the Populist Party. The 1892 Omaha Platform demanded free coinage of silver, a graduated income tax, government ownership of railroads, direct election of senators, and the secret ballot.",
        hint: "Farmers' party; Omaha Platform; free silver."
      },
      {
        front: "What was the significance of the 1896 election (Bryan vs. McKinley)?",
        back: "Democrat/Populist William Jennings Bryan ran on 'free silver' (his 'Cross of Gold' speech) against Republican William McKinley, who backed the gold standard. McKinley's win marked the decline of Populism and the start of Republican dominance.",
        hint: "Cross of Gold; McKinley/gold wins, Populism fades."
      },
      {
        front: "Common trap: Were Gilded Age laissez-faire policies truly 'hands-off' government?",
        back: "Not entirely. While the government avoided regulating big business and labor, it actively subsidized industry, especially through massive railroad land grants and high protective tariffs, and used troops to break strikes. It was selective intervention, not pure neutrality.",
        hint: "Pro-business intervention, not true neutrality."
      }
    ]
  }
];
