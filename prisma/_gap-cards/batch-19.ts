export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "csp-data-compression-analysis",
    cards: [
      {
        front: "What is data compression?",
        back: "The process of reducing the number of bits needed to represent data. The goal is to make files smaller for faster transmission and cheaper storage.",
        hint: "Fewer bits, same (or similar) information",
      },
      {
        front: "What is the difference between lossless and lossy compression?",
        back: "Lossless compression reduces size while allowing the original data to be perfectly reconstructed (no information lost). Lossy compression discards some data, so the original cannot be exactly recovered, but achieves greater size reduction.",
        hint: "Lossless = reversible; lossy = not",
      },
      {
        front: "Give an example of lossless and an example of lossy compression.",
        back: "Lossless: PNG images, ZIP files, GIF, FLAC audio. Lossy: JPEG images, MP3 audio, MP4 video. Lossy is used where small losses in quality are acceptable in exchange for much smaller files.",
        hint: "ZIP vs MP3",
      },
      {
        front: "When should you choose lossless over lossy compression?",
        back: "Choose lossless when every bit matters and the data must be reconstructed exactly, such as text documents, program source code, spreadsheets, or medical/legal records. Lossy is fine when minor quality loss is unnoticeable, like streaming music or photos.",
        hint: "Can you afford to lose any data?",
      },
      {
        front: "How does lossless compression often reduce size? (run-length encoding idea)",
        back: "By exploiting redundancy. Run-length encoding (RLE) replaces long runs of repeated values with a count and the value, e.g. 'AAAAA' becomes '5A'. Dictionary methods replace repeated patterns with shorter codes.",
        hint: "Repeated patterns get shorter codes",
      },
      {
        front: "Worked example: compress 'WWWWWWBBB' with run-length encoding.",
        back: "Count consecutive repeats: there are 6 W's then 3 B's, so it becomes '6W3B'. The original 9 characters are represented by 4 characters, and the original can be perfectly rebuilt (lossless).",
        hint: "Count + symbol",
      },
      {
        front: "Why can't every file be compressed to a smaller size?",
        back: "Compression relies on redundancy and patterns. Data that is already random or already compressed has little redundancy, so no algorithm can losslessly shrink all possible inputs; some files would even get slightly larger.",
        hint: "No free lunch with random data",
      },
      {
        front: "What trade-off does lossy compression involve?",
        back: "It trades quality (fidelity to the original) for smaller file size. Greater compression means more data discarded and lower quality, so you balance how small the file is against how good it must look or sound.",
        hint: "Size vs. quality",
      },
      {
        front: "On the AP CSP exam, how do you compare two compression techniques on the same data?",
        back: "Compare the resulting file sizes (smaller is more compressed) and whether each is lossless or lossy. The 'best' choice depends on the use case: if the original must be recovered exactly, only a lossless option qualifies even if a lossy one is smaller.",
        hint: "Size AND recoverability both matter",
      },
      {
        front: "How is compression ratio interpreted?",
        back: "It compares original size to compressed size; a higher ratio means more reduction. For example, going from 1000 bits to 250 bits is a strong reduction (about a 4:1 ratio). More reduction is generally better, as long as required quality is preserved.",
        hint: "Original size : compressed size",
      },
      {
        front: "Common trap: 'Lossy compression is always worse than lossless.' True or false?",
        back: "False. Lossy is not 'worse'; it is a different tool. For photos, music, and video, lossy compression gives much smaller files with quality loss that humans often cannot notice, making it the better practical choice there.",
        hint: "Right tool for the use case",
      },
      {
        front: "Why does compression matter for the Internet and big data?",
        back: "Smaller files transmit faster over networks, use less bandwidth, and require less storage. This makes streaming, downloads, and large-scale data analysis faster and cheaper.",
        hint: "Speed, bandwidth, storage cost",
      },
    ],
  },
  {
    slug: "apes-human-population",
    cards: [
      {
        front: "What is the difference between exponential and logistic population growth?",
        back: "Exponential growth produces a J-shaped curve with unlimited resources and a constant per-capita rate. Logistic growth produces an S-shaped curve that levels off as the population approaches carrying capacity (K).",
        hint: "J-curve vs. S-curve",
      },
      {
        front: "What is carrying capacity (K)?",
        back: "The maximum population size that an environment can support indefinitely given available resources (food, water, space). Populations may overshoot K and then crash or fluctuate around it.",
        hint: "Max sustainable population",
      },
      {
        front: "What is the rule of 70?",
        back: "A shortcut to estimate doubling time: doubling time (years) approximately equals $70 / r$, where $r$ is the percent growth rate per year. Example: at 2% growth, the population doubles in about 35 years.",
        hint: "70 divided by percent growth rate",
      },
      {
        front: "How do you calculate a population's growth rate from birth and death rates?",
        back: "Growth rate $r = (CBR - CDR) / 10$ as a percent, where CBR is crude birth rate and CDR is crude death rate (both per 1000 people). Add net migration for total change. Subtracting CDR from CBR gives natural increase.",
        hint: "(births - deaths) per 1000",
      },
      {
        front: "What is total fertility rate (TFR) and what is replacement-level fertility?",
        back: "TFR is the average number of children a woman has in her lifetime. Replacement-level fertility is about 2.1 in developed nations (slightly above 2 to account for child mortality). TFR below 2.1 leads to long-term population decline.",
        hint: "~2.1 children per woman",
      },
      {
        front: "What are the four stages of the demographic transition model?",
        back: "Stage 1: high birth and death rates, stable. Stage 2: death rates fall (better food/medicine), population booms. Stage 3: birth rates fall as societies industrialize. Stage 4: low birth and death rates, stable/slow growth.",
        hint: "Death rate drops first, then birth rate",
      },
      {
        front: "What does an age-structure diagram (population pyramid) show?",
        back: "The distribution of ages and sexes in a population. A wide base means many young people and rapid future growth; a narrow base or column shape indicates slow growth or a stable/declining population.",
        hint: "Wide base = young, fast-growing",
      },
      {
        front: "What is the difference between K-selected and r-selected species?",
        back: "r-selected species have many offspring, little parental care, short lifespans, and reproduce early (e.g. insects). K-selected species have few offspring, much parental care, long lifespans, and mature late (e.g. elephants, humans).",
        hint: "r = many cheap; K = few, cared-for",
      },
      {
        front: "What is the IPAT equation?",
        back: "Environmental Impact = Population × Affluence × Technology. It shows that total impact rises with more people, higher per-capita consumption, and resource-intensive technology (though efficient technology can lower impact).",
        hint: "I = P × A × T",
      },
      {
        front: "Why does population momentum cause growth to continue after fertility falls to replacement level?",
        back: "Because a young age structure means a large number of people are still entering reproductive age. Even at replacement-level fertility, the population keeps growing for decades until the age structure evens out.",
        hint: "Many future parents already born",
      },
      {
        front: "What factors typically lower total fertility rate as a country develops?",
        back: "Education and economic opportunities for women, access to family planning and contraception, urbanization, lower infant mortality, and the higher cost of raising children all tend to reduce TFR.",
        hint: "Women's education + family planning",
      },
      {
        front: "Common trap: a country can have a declining growth rate but a growing population. How?",
        back: "Growth rate is a percentage; population is the total count. A 2% rate on a large base still adds many people, and even a falling rate (e.g. from 2% to 1%) usually still means the population is increasing, just more slowly.",
        hint: "Rate down does not mean count down",
      },
      {
        front: "What is the difference between developed and developing nations' demographic patterns?",
        back: "Developed nations typically have low TFR, slow or negative growth, aging populations, and high resource consumption per person. Developing nations often have higher TFR, faster growth, younger populations, and lower per-capita consumption.",
        hint: "Slow/old/high-consumption vs. fast/young",
      },
    ],
  },
  {
    slug: "csa-2d-arrays",
    cards: [
      {
        front: "How do you declare and initialize a 2D array of ints with 3 rows and 4 columns in Java?",
        back: "Use `int[][] grid = new int[3][4];`. This creates 3 rows, each with 4 columns, all initialized to 0. Element access is `grid[row][col]`.",
        hint: "[rows][cols], row first",
      },
      {
        front: "In Java, a 2D array is really what kind of structure?",
        back: "It is an array of arrays: a 1D array whose elements are themselves 1D arrays (the rows). So `grid[0]` is the entire first row, and `grid[0][2]` is the element in row 0, column 2.",
        hint: "Array of rows",
      },
      {
        front: "How do you get the number of rows and the number of columns of a 2D array `arr`?",
        back: "Number of rows is `arr.length`. Number of columns (for a rectangular array) is `arr[0].length`. Each row's length can be accessed as `arr[r].length`.",
        hint: "arr.length = rows; arr[0].length = cols",
      },
      {
        front: "Write the standard nested for loop to traverse a 2D array in row-major order.",
        back: "```\nfor (int r = 0; r < arr.length; r++) {\n  for (int c = 0; c < arr[r].length; c++) {\n    // process arr[r][c]\n  }\n}\n```\nThe outer loop picks the row; the inner loop scans columns within that row.",
        hint: "Outer = rows, inner = columns",
      },
      {
        front: "How do you traverse a 2D array with an enhanced (for-each) loop?",
        back: "```\nfor (int[] row : arr) {\n  for (int val : row) {\n    // process val\n  }\n}\n```\nThe outer variable is each row (an int[]); the inner variable is each element. Use this when you only read values and do not need indices.",
        hint: "Outer is int[], inner is int",
      },
      {
        front: "What is column-major traversal and how do its loops differ?",
        back: "Column-major visits all rows of column 0, then column 1, etc. Swap the loops so the outer loop is over columns and the inner loop is over rows: outer `c`, inner `r`, accessing `arr[r][c]`.",
        hint: "Outer loop on columns instead of rows",
      },
      {
        front: "Common trap: what does `arr[col][row]` accidentally do?",
        back: "It swaps the indices, treating the column index as the row. This causes wrong access or an ArrayIndexOutOfBoundsException when the array is not square. Always use `arr[row][col]`.",
        hint: "Order matters: row first",
      },
      {
        front: "How do you sum all elements of a 2D int array?",
        back: "Initialize `int sum = 0;`, then nested-loop over every element adding `arr[r][c]` to sum. With a for-each: `for (int[] row : arr) for (int v : row) sum += v;`.",
        hint: "Visit every cell, accumulate",
      },
      {
        front: "How do you access the last element of a 2D array `arr`?",
        back: "`arr[arr.length - 1][arr[arr.length - 1].length - 1]`. The last row index is `arr.length - 1`; within it the last column index is that row's `length - 1`.",
        hint: "length - 1 for both dimensions",
      },
      {
        front: "Worked example: how would you count how many elements in a 2D array equal a target value?",
        back: "Set a counter to 0, traverse every cell with nested loops, and `if (arr[r][c] == target) count++;`. After visiting all cells, count holds the total number of matches.",
        hint: "Check each cell, increment on match",
      },
      {
        front: "What is a jagged (ragged) array, and are they on the AP CSA exam?",
        back: "A jagged array has rows of different lengths. The AP CSA exam only tests rectangular 2D arrays (all rows the same length), but you should still use `arr[r].length` rather than assuming a fixed column count.",
        hint: "Exam = rectangular only",
      },
      {
        front: "How do you initialize a 2D array with specific values using an array literal?",
        back: "`int[][] g = { {1, 2, 3}, {4, 5, 6} };` creates a 2-row, 3-column array. Each inner brace set is one row; `g[1][2]` would be 6.",
        hint: "Braces inside braces = rows of values",
      },
      {
        front: "How do you find the maximum value in a 2D array?",
        back: "Initialize `max` to `arr[0][0]`, then traverse every element and update `if (arr[r][c] > max) max = arr[r][c];`. After the full traversal, max holds the largest value.",
        hint: "Start at first cell, update on larger",
      },
    ],
  },
  {
    slug: "apes-ozone-indoor-air",
    cards: [
      {
        front: "What is the difference between stratospheric ozone and tropospheric (ground-level) ozone?",
        back: "Stratospheric ozone is 'good' ozone that shields Earth from harmful UV radiation. Tropospheric (ground-level) ozone is 'bad' ozone, a pollutant and component of photochemical smog that harms lungs and plants.",
        hint: "Good up high, bad nearby",
      },
      {
        front: "How is ground-level ozone formed?",
        back: "It forms when nitrogen oxides (NOx) and volatile organic compounds (VOCs) from vehicles and industry react in the presence of sunlight. This makes it a secondary pollutant, worst on hot, sunny, urban afternoons.",
        hint: "NOx + VOCs + sunlight",
      },
      {
        front: "What chemicals destroy stratospheric ozone, and how?",
        back: "Chlorofluorocarbons (CFCs) and halons. UV light frees chlorine (or bromine) atoms, which catalytically destroy ozone: one chlorine atom can break down many thousands of ozone molecules before being removed.",
        hint: "CFCs release ozone-destroying Cl atoms",
      },
      {
        front: "What was the Montreal Protocol?",
        back: "A 1987 international treaty that phased out the production of ozone-depleting substances like CFCs. It is considered one of the most successful environmental agreements; the ozone hole is slowly recovering.",
        hint: "1987 treaty banning CFCs",
      },
      {
        front: "Why is the ozone hole worst over Antarctica?",
        back: "Extremely cold polar stratospheric clouds in winter provide surfaces that activate chlorine. When sunlight returns in spring, the activated chlorine rapidly destroys ozone, creating a seasonal 'hole.'",
        hint: "Cold polar clouds + spring sunlight",
      },
      {
        front: "What are the human health effects of increased UV radiation from ozone depletion?",
        back: "More UV exposure increases skin cancer, cataracts, and immune suppression in humans, and it can damage plants and phytoplankton at the base of food webs.",
        hint: "Skin cancer, cataracts",
      },
      {
        front: "Name three common indoor air pollutants and their sources.",
        back: "Radon (from soil/rock under buildings), carbon monoxide (incomplete combustion in furnaces/stoves), and formaldehyde/VOCs (from furniture, carpets, paints). Asbestos and tobacco smoke are also major indoor pollutants.",
        hint: "Radon, CO, VOCs",
      },
      {
        front: "What is radon and why is it dangerous?",
        back: "Radon is a naturally occurring, colorless, odorless radioactive gas from uranium decay in soil and rock. It seeps into homes through foundations and is the second-leading cause of lung cancer after smoking.",
        hint: "Radioactive gas from the ground; lung cancer",
      },
      {
        front: "Why is carbon monoxide especially dangerous indoors?",
        back: "CO is colorless and odorless, so it is hard to detect. It binds to hemoglobin far more strongly than oxygen, reducing oxygen delivery to the body, which can cause headaches, unconsciousness, and death.",
        hint: "Silent, binds hemoglobin",
      },
      {
        front: "What is 'sick building syndrome'?",
        back: "A condition where occupants experience health effects (headaches, fatigue, irritation) linked to time spent in a building, often due to poor ventilation and accumulated indoor pollutants like VOCs and mold.",
        hint: "Poor ventilation + trapped pollutants",
      },
      {
        front: "Why is indoor air often more polluted than outdoor air, especially in developing nations?",
        back: "Buildings trap pollutants with limited ventilation. In developing nations, indoor cooking and heating with wood, charcoal, or dung releases large amounts of particulate matter and CO, causing serious respiratory illness.",
        hint: "Trapped pollutants + biomass cooking",
      },
      {
        front: "Common trap: distinguish ozone depletion from climate change.",
        back: "Ozone depletion (CFCs reducing the UV shield) and climate change (greenhouse gases warming the planet) are separate problems. They are sometimes confused, but CFCs are also greenhouse gases, which is a partial overlap.",
        hint: "UV shield vs. global warming",
      },
      {
        front: "What replaced CFCs and what new concern did some replacements raise?",
        back: "HCFCs and HFCs replaced CFCs because they are less damaging to ozone. However, HFCs are potent greenhouse gases, so they are now being phased down (Kigali Amendment) to limit climate impact.",
        hint: "HFCs help ozone but warm climate",
      },
    ],
  },
  {
    slug: "speciation",
    cards: [
      {
        front: "What is speciation?",
        back: "The evolutionary process by which one species splits into two or more distinct species. It occurs when populations become reproductively isolated and diverge genetically over time.",
        hint: "One species becomes two",
      },
      {
        front: "What is the biological species concept?",
        back: "A species is a group of organisms that can interbreed and produce fertile, viable offspring in nature. Two populations are different species if they cannot successfully interbreed (they are reproductively isolated).",
        hint: "Interbreed -> fertile offspring",
      },
      {
        front: "What is the difference between allopatric and sympatric speciation?",
        back: "Allopatric speciation requires a geographic barrier that physically separates populations. Sympatric speciation occurs without geographic isolation, often through polyploidy, sexual selection, or exploiting different niches in the same area.",
        hint: "Allo = different place; sym = same place",
      },
      {
        front: "What is reproductive isolation, and what are its two main categories?",
        back: "Reproductive isolation is the inability of populations to interbreed. Prezygotic barriers prevent mating or fertilization (before a zygote forms); postzygotic barriers act after fertilization, reducing hybrid viability or fertility.",
        hint: "Before vs. after the zygote",
      },
      {
        front: "Give two examples of prezygotic isolating mechanisms.",
        back: "Examples include temporal isolation (breeding at different times), habitat isolation (living in different places), behavioral isolation (different courtship rituals), mechanical isolation (incompatible anatomy), and gametic isolation (incompatible gametes).",
        hint: "Temporal, behavioral, mechanical, gametic, habitat",
      },
      {
        front: "Give two examples of postzygotic isolating mechanisms.",
        back: "Reduced hybrid viability (hybrids die young), reduced hybrid fertility (e.g. a sterile mule), and hybrid breakdown (later generations are weak or sterile). All occur after a hybrid zygote forms.",
        hint: "Hybrids die or are sterile (mule)",
      },
      {
        front: "What is adaptive radiation?",
        back: "The rapid diversification of one ancestral species into many species that occupy different ecological niches, often after reaching a new environment with open habitats (e.g. Darwin's finches, Hawaiian honeycreepers).",
        hint: "One ancestor -> many niche specialists",
      },
      {
        front: "What is the difference between gradualism and punctuated equilibrium?",
        back: "Gradualism proposes that species change slowly and steadily over long periods. Punctuated equilibrium proposes long periods of little change (stasis) interrupted by short bursts of rapid speciation.",
        hint: "Slow-steady vs. bursts between stasis",
      },
      {
        front: "How can polyploidy cause instant sympatric speciation in plants?",
        back: "Polyploidy is having extra chromosome sets. A polyploid individual often cannot breed with the parent population (chromosome numbers do not match in meiosis) but can self-fertilize or breed with other polyploids, forming a new species in one generation.",
        hint: "Extra chromosome sets isolate instantly",
      },
      {
        front: "What is the role of a geographic barrier in allopatric speciation?",
        back: "A barrier (mountain, river, canyon, ocean) physically separates a population, stopping gene flow. The isolated populations then accumulate different mutations and adapt to different conditions until they can no longer interbreed.",
        hint: "Stops gene flow, allows divergence",
      },
      {
        front: "What is reinforcement (in the context of speciation)?",
        back: "When two diverging populations meet again and hybrids are less fit, natural selection strengthens prezygotic barriers, making the populations even less likely to mate. This reinforces and completes speciation.",
        hint: "Selection strengthens mating barriers",
      },
      {
        front: "Common trap: does a hybrid like a mule disprove that horses and donkeys are different species?",
        back: "No. A mule shows postzygotic isolation: horses and donkeys can mate and produce offspring, but the mule is sterile. Because they cannot produce fertile offspring, they remain separate species.",
        hint: "Mule is sterile -> still separate species",
      },
      {
        front: "What is genetic drift's role in speciation, especially in small populations?",
        back: "Genetic drift is random change in allele frequencies. In small, isolated populations it can rapidly change gene frequencies (e.g. founder effect, bottleneck), accelerating divergence and contributing to speciation.",
        hint: "Random change, strong in small populations",
      },
    ],
  },
  {
    slug: "polynomial-long-division",
    cards: [
      {
        front: "What is polynomial long division used for?",
        back: "To divide one polynomial by another (the divisor), producing a quotient and a remainder. It works like numerical long division and is used to simplify rational expressions and factor polynomials.",
        hint: "Like long division, but with polynomials",
      },
      {
        front: "What is the Division Algorithm for polynomials?",
        back: "For a dividend $P(x)$ and divisor $D(x)$, $P(x) = D(x) \\\\cdot Q(x) + R(x)$, where $Q(x)$ is the quotient and $R(x)$ is the remainder, with the degree of $R(x)$ less than the degree of $D(x)$.",
        hint: "Dividend = divisor × quotient + remainder",
      },
      {
        front: "What is the first step of polynomial long division?",
        back: "Divide the leading term of the dividend by the leading term of the divisor to get the first term of the quotient. Then multiply that term by the whole divisor and subtract from the dividend.",
        hint: "Leading term ÷ leading term",
      },
      {
        front: "Why must you write polynomials in descending order with placeholders before dividing?",
        back: "Arranging terms by descending degree keeps like terms aligned. Insert a $0$ coefficient for any missing power (e.g. write $x^3 + 0x^2 + 0x - 8$) so terms line up correctly during subtraction.",
        hint: "Fill missing powers with 0",
      },
      {
        front: "Worked example: divide $x^2 + 5x + 6$ by $x + 2$.",
        back: "$x^2 \\\\div x = x$; multiply: $x(x+2) = x^2 + 2x$; subtract to get $3x + 6$. Then $3x \\\\div x = 3$; multiply: $3(x+2) = 3x + 6$; subtract to get $0$. Quotient is $x + 3$, remainder $0$.",
        hint: "Answer: x + 3",
      },
      {
        front: "How do you write the final answer when there is a nonzero remainder?",
        back: "Write quotient plus the remainder over the divisor: $Q(x) + \\\\frac{R(x)}{D(x)}$. For example, dividing gives $2x + 1 + \\\\frac{3}{x-2}$ if the remainder is 3 and the divisor is $x - 2$.",
        hint: "Quotient + remainder/divisor",
      },
      {
        front: "When can you use synthetic division instead of long division?",
        back: "Only when the divisor is linear of the form $x - c$ (a single root with leading coefficient 1). For non-linear divisors like $x^2 + 1$, you must use long division.",
        hint: "Synthetic works only for x - c",
      },
      {
        front: "What is the Remainder Theorem?",
        back: "When a polynomial $P(x)$ is divided by $x - c$, the remainder equals $P(c)$. So you can find the remainder by evaluating the polynomial at $c$ instead of dividing.",
        hint: "Remainder of ÷(x - c) is P(c)",
      },
      {
        front: "What is the Factor Theorem?",
        back: "$x - c$ is a factor of $P(x)$ if and only if $P(c) = 0$ (the remainder is 0). This connects roots, factors, and division: a zero remainder means an exact factor.",
        hint: "P(c) = 0 means (x - c) is a factor",
      },
      {
        front: "Common trap: forgetting to change signs when subtracting in long division.",
        back: "After multiplying the divisor, you subtract the result, which flips the sign of every term in that product. A reliable trick is to distribute the negative immediately (or add the opposite) to avoid sign errors.",
        hint: "Subtract = add the opposite",
      },
      {
        front: "Worked example: divide $2x^2 - 3x + 1$ by $x - 1$ and state the remainder.",
        back: "$2x^2 \\\\div x = 2x$; $2x(x-1) = 2x^2 - 2x$; subtract to get $-x + 1$. Then $-x \\\\div x = -1$; $-1(x-1) = -x + 1$; subtract to get $0$. Quotient $2x - 1$, remainder $0$, so $x - 1$ is a factor.",
        hint: "Remainder is 0; check with P(1)=0",
      },
      {
        front: "How do you know when polynomial long division is finished?",
        back: "Stop when the degree of the current remainder is less than the degree of the divisor. At that point no leading term of the divisor can divide into the remainder, so it is the final remainder.",
        hint: "Remainder degree < divisor degree",
      },
      {
        front: "What degree is the quotient when you divide a degree-4 polynomial by a degree-2 polynomial?",
        back: "Degree 2. In general the quotient's degree equals the dividend's degree minus the divisor's degree (here $4 - 2 = 2$), assuming the division proceeds normally.",
        hint: "Subtract the degrees",
      },
    ],
  },
  {
    slug: "aas-african-kingdoms",
    cards: [
      {
        front: "Where and when did the Kingdom of Ghana flourish, and what made it wealthy?",
        back: "Ghana flourished in West Africa (roughly 300-1200 CE), in the region between the Senegal and Niger Rivers. Its wealth came from controlling and taxing the trans-Saharan trade, especially gold and salt.",
        hint: "Gold-salt trade taxation",
      },
      {
        front: "What was the trans-Saharan trade and why was it important?",
        back: "A network of trade routes across the Sahara Desert connecting West Africa to North Africa and the Mediterranean. It exchanged West African gold and enslaved people for North African salt, textiles, and goods, and it spread Islam southward.",
        hint: "Gold and salt across the desert",
      },
      {
        front: "Who was Mansa Musa and why is he significant?",
        back: "The ruler of the Mali Empire in the early 1300s, often cited as one of the wealthiest people in history. His 1324 pilgrimage (hajj) to Mecca, distributing vast amounts of gold, displayed Mali's wealth and put it on European maps.",
        hint: "Mali king; famous hajj with gold",
      },
      {
        front: "What was Timbuktu known for during the Mali and Songhai empires?",
        back: "Timbuktu was a major center of trade, Islamic scholarship, and education, home to universities and libraries (such as Sankore) with thousands of manuscripts. It symbolized West Africa's intellectual and commercial sophistication.",
        hint: "Center of learning and manuscripts",
      },
      {
        front: "Which three great West African empires rose in succession, and in what order?",
        back: "Ghana, then Mali, then Songhai. Each built on and expanded the trans-Saharan trade networks, with Songhai becoming the largest of the three before falling in 1591.",
        hint: "Ghana -> Mali -> Songhai",
      },
      {
        front: "Why does AP African American Studies emphasize precolonial African kingdoms?",
        back: "To counter narratives that Africa lacked complex societies before European contact. Studying these kingdoms shows the rich political, economic, intellectual, and cultural heritage of the regions from which many enslaved Africans were taken.",
        hint: "Heritage before the slave trade",
      },
      {
        front: "What role did Islam play in West African empires?",
        back: "Islam spread through trans-Saharan trade and became influential among rulers and traders, shaping law, education, scholarship, and architecture, while many people also blended it with indigenous traditions.",
        hint: "Spread via trade; shaped scholarship and law",
      },
      {
        front: "What was the Kingdom of Kongo and how did it interact with Europeans?",
        back: "A powerful Central African kingdom (around present-day Angola/DRC). Its rulers adopted Christianity and traded with Portugal, but the expanding Atlantic slave trade ultimately destabilized and weakened the kingdom.",
        hint: "Central Africa; early ties to Portugal",
      },
      {
        front: "What was Great Zimbabwe?",
        back: "A large stone-built city and trading state in southern Africa (peaking around 1100-1450), famous for its massive dry-stone walls. It thrived on cattle, gold, and trade reaching the Indian Ocean coast.",
        hint: "Stone-walled southern African city",
      },
      {
        front: "What was the Asante (Ashanti) Empire known for?",
        back: "A powerful West African (modern Ghana) state from the late 1600s, known for its gold wealth, the unifying symbol of the Golden Stool, and strong military and political organization that long resisted European colonization.",
        hint: "Golden Stool; gold-rich West African power",
      },
      {
        front: "How did the kingdom of Benin demonstrate African artistic achievement?",
        back: "The Kingdom of Benin (in present-day Nigeria) produced renowned brass and bronze plaques and sculptures (the Benin Bronzes), showcasing advanced metalworking and a sophisticated court culture; many were later looted by the British.",
        hint: "Benin Bronzes; advanced metalwork",
      },
      {
        front: "How were many West African societies structured around kinship and oral tradition?",
        back: "Lineage and extended-family kinship organized social and political life, and griots (oral historians) preserved history, genealogy, and culture through storytelling, music, and poetry passed down across generations.",
        hint: "Kinship lineages and griots",
      },
      {
        front: "Common trap: precolonial Africa was 'isolated' from the wider world. True or false?",
        back: "False. West and East African kingdoms were deeply connected through trans-Saharan and Indian Ocean trade networks, exchanging goods, ideas, religion, and scholarship across continents long before European colonization.",
        hint: "Africa was networked, not isolated",
      },
    ],
  },
  {
    slug: "macro-monetary-policy",
    cards: [
      {
        front: "What is monetary policy and who conducts it?",
        back: "Monetary policy is the central bank's actions to influence the money supply and interest rates to achieve macroeconomic goals (stable prices, full employment). In the U.S., the Federal Reserve (the Fed) conducts it.",
        hint: "The Fed changes money supply / rates",
      },
      {
        front: "What are the three main tools of monetary policy?",
        back: "Open market operations (buying/selling government bonds), the discount rate (the rate the Fed charges banks for loans), and the reserve requirement (the fraction of deposits banks must hold). Open market operations are the most-used tool.",
        hint: "OMOs, discount rate, reserve requirement",
      },
      {
        front: "What is expansionary monetary policy and when is it used?",
        back: "Policy that increases the money supply to lower interest rates and stimulate the economy during a recession. The Fed buys bonds, lowers the discount rate, and/or lowers the reserve requirement.",
        hint: "Recession -> buy bonds, lower rates",
      },
      {
        front: "What is contractionary monetary policy and when is it used?",
        back: "Policy that decreases the money supply to raise interest rates and fight inflation. The Fed sells bonds, raises the discount rate, and/or raises the reserve requirement.",
        hint: "Inflation -> sell bonds, raise rates",
      },
      {
        front: "How does the Fed buying bonds affect the money supply and interest rates?",
        back: "Buying bonds injects money into the banking system, increasing the money supply, which lowers the nominal interest rate. Lower rates encourage borrowing and investment, expanding output (expansionary).",
        hint: "Buy bonds -> MS up -> rates down",
      },
      {
        front: "Describe the monetary policy transmission chain for expansionary policy.",
        back: "Money supply increases -> interest rates fall -> investment and consumption (interest-sensitive spending) rise -> aggregate demand increases -> real GDP and price level rise.",
        hint: "MS up -> r down -> I up -> AD up",
      },
      {
        front: "What is the money multiplier formula?",
        back: "Money multiplier $= 1 / RR$, where $RR$ is the required reserve ratio. The maximum change in the money supply equals the initial excess reserves times the multiplier. Example: with $RR = 0.20$, the multiplier is 5.",
        hint: "1 divided by the reserve ratio",
      },
      {
        front: "On the money market graph, what is fixed and what determines the equilibrium interest rate?",
        back: "The money supply curve is vertical (set by the Fed). The downward-sloping money demand curve crosses it; their intersection sets the nominal interest rate. Shifting money supply right lowers the rate.",
        hint: "Vertical MS, downward MD, intersection = r",
      },
      {
        front: "How does the discount rate differ from the federal funds rate?",
        back: "The discount rate is what the Fed charges banks to borrow directly from it. The federal funds rate is the market rate banks charge each other for overnight loans; the Fed targets it mainly through open market operations.",
        hint: "Discount = Fed to banks; fed funds = bank to bank",
      },
      {
        front: "Common trap: distinguish the bond market price effect from the loanable funds/money market effect.",
        back: "When the Fed buys bonds, bond demand rises, so bond prices rise and bond interest rates fall. This aligns with the money market: more money supply lowers interest rates. Bond prices and interest rates move inversely.",
        hint: "Bond price up = interest rate down",
      },
      {
        front: "Why might the reserve requirement rarely be changed as a policy tool?",
        back: "Changing the reserve requirement is a blunt, powerful tool that can disrupt banks' operations and the money multiplier sharply, so the Fed prefers the more precise, flexible open market operations.",
        hint: "Too blunt; OMOs preferred",
      },
      {
        front: "How does expansionary monetary policy affect a nation's currency and net exports?",
        back: "Lower interest rates reduce demand for the nation's financial assets, decreasing demand for its currency, so the currency depreciates. A weaker currency makes exports cheaper and imports pricier, raising net exports.",
        hint: "Lower rates -> weaker currency -> exports up",
      },
      {
        front: "What is the difference between monetary policy and fiscal policy?",
        back: "Monetary policy is conducted by the central bank using money supply and interest rates. Fiscal policy is conducted by the government (Congress/President) using taxes and government spending. Both shift aggregate demand.",
        hint: "Central bank/money vs. government/taxes-spending",
      },
      {
        front: "Worked example: with a 10% reserve requirement, the Fed buys \\$1,000 in bonds from a bank. What is the maximum increase in the money supply?",
        back: "The money multiplier is $1 / 0.10 = 10$. The \\$1,000 of new reserves can expand the money supply by up to $1{,}000 \\\\times 10 = \\$10{,}000$ through the lending process.",
        hint: "New reserves × (1 / RR)",
      },
    ],
  },
];
