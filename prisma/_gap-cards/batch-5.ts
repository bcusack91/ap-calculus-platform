export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "apush-reform-movements",
    cards: [
      {
        front: "What was the Second Great Awakening, and roughly when did it occur?",
        back: "A wave of Protestant religious revivalism (c. 1790s-1840s) emphasizing personal salvation, free will, and the ability of individuals to improve themselves and society. It inspired many antebellum reform movements.",
        hint: "Religious revival that fueled reform",
      },
      {
        front: "How did the Second Great Awakening connect to social reform?",
        back: "Its message that people could choose salvation and perfect society (perfectionism) motivated reformers to attack social evils like slavery, alcohol, and poor treatment of prisoners and the mentally ill.",
      },
      {
        front: "What was the temperance movement?",
        back: "A campaign to reduce or eliminate alcohol consumption, blamed for poverty, crime, and family breakdown. Groups like the American Temperance Society (1826) promoted abstinence; Maine passed the first state prohibition law in 1851.",
        hint: "Targeted alcohol",
      },
      {
        front: "Who was Dorothea Dix and what did she reform?",
        back: "A reformer who exposed the cruel treatment of the mentally ill, who were often jailed alongside criminals. Her advocacy led many states to build asylums providing more humane care.",
        hint: "Mental health / asylums",
      },
      {
        front: "What was the goal of the Seneca Falls Convention (1848)?",
        back: "The first women's rights convention in the U.S. It produced the Declaration of Sentiments, modeled on the Declaration of Independence, demanding equality and women's suffrage. Organized by Elizabeth Cady Stanton and Lucretia Mott.",
        hint: "1848 women's rights",
      },
      {
        front: "What was the Declaration of Sentiments?",
        back: "The document from Seneca Falls (1848) asserting that 'all men and women are created equal' and listing women's grievances, including the lack of voting rights, property rights, and educational/professional opportunities.",
      },
      {
        front: "Distinguish abolitionism from earlier antislavery 'gradualism.'",
        back: "Gradualists favored slow emancipation, often paired with colonization (sending Black Americans to Africa). Radical abolitionists like William Lloyd Garrison demanded immediate, uncompensated emancipation and full equality.",
        hint: "Immediate vs. slow",
      },
      {
        front: "Who was William Lloyd Garrison?",
        back: "A radical abolitionist who founded the antislavery newspaper The Liberator (1831) and the American Anti-Slavery Society (1833), demanding immediate emancipation without compensation to slaveholders.",
        hint: "The Liberator",
      },
      {
        front: "What role did Frederick Douglass play in abolitionism?",
        back: "A formerly enslaved man who became a leading abolitionist orator and writer. His autobiography and newspaper, the North Star, gave firsthand testimony against slavery and pushed for Black civil rights.",
      },
      {
        front: "What education reform is Horace Mann known for?",
        back: "Mann championed the common school movement, promoting free, tax-supported public schools, standardized curricula, and trained teachers to create informed citizens and reduce inequality.",
        hint: "Common (public) schools",
      },
      {
        front: "What were utopian communities, with one example?",
        back: "Experimental societies seeking to perfect human living through cooperation or new social arrangements. Examples include Brook Farm, New Harmony (Robert Owen), and the Oneida Community, which practiced communal living.",
        hint: "Brook Farm, Oneida",
      },
      {
        front: "What was Transcendentalism and who were its key figures?",
        back: "A philosophical/literary movement emphasizing intuition, individualism, nature, and self-reliance over established institutions. Key figures: Ralph Waldo Emerson and Henry David Thoreau (Civil Disobedience, Walden).",
        hint: "Emerson and Thoreau",
      },
      {
        front: "Common APUSH trap: Did all reformers support the same causes?",
        back: "No. Reform movements sometimes conflicted; many abolitionists were also women's rights advocates, but the movements split over priorities, and not all reformers (even Northern ones) supported racial or gender equality.",
      },
      {
        front: "How did antebellum reform reflect both democratic ideals and their limits?",
        back: "Reformers invoked Revolutionary ideals of equality to expand rights, yet many causes excluded Black Americans and women from full citizenship, revealing tension between America's stated ideals and its practices.",
      },
    ],
  },
  {
    slug: "csa-expressions-operators",
    cards: [
      {
        front: "List the arithmetic operators in Java and their precedence order.",
        back: "Operators are $+$, $-$, $*$, $/$, and $\\%$ (modulus). Multiplication, division, and modulus have higher precedence than addition and subtraction; among equal precedence, evaluation is left to right.",
        hint: "PEMDAS-like, left to right",
      },
      {
        front: "What does integer division produce in Java? Give an example.",
        back: "When both operands are int, $/$ truncates toward zero (drops the fractional part). For example, $7 / 2$ evaluates to 3, not 3.5.",
        hint: "Truncation, no rounding",
      },
      {
        front: "What does the modulus operator (%) return? Give an example.",
        back: "It returns the remainder of integer division. For example, $17 \\% 5$ is 2, and $20 \\% 4$ is 0. Useful for testing divisibility and extracting digits.",
        hint: "Remainder",
      },
      {
        front: "What is the result of 7 % 3 and -7 % 3 in Java?",
        back: "$7 \\% 3$ is 1. In Java, the result of $\\%$ takes the sign of the left operand, so $-7 \\% 3$ is $-1$.",
        hint: "Sign follows the dividend",
      },
      {
        front: "Explain integer overflow in Java.",
        back: "An int is 32 bits with a maximum of 2147483647. Exceeding it wraps around to negative values rather than throwing an error. AP exam: be alert when summing or multiplying large ints.",
        hint: "Wraps to negative",
      },
      {
        front: "What is the difference between 5.0 / 2 and 5 / 2?",
        back: "$5.0 / 2$ is 2.5 because one operand is a double, forcing double (floating-point) division. $5 / 2$ is 2 because both are ints, giving integer division.",
        hint: "One double promotes the whole expression",
      },
      {
        front: "How do you convert an int to a double and vice versa?",
        back: "int to double happens automatically (widening). double to int requires an explicit cast, e.g. (int) 3.9, which truncates to 3. Casting binds tightly, so (int) 3.9 + 0.5 casts first.",
        hint: "Casting and truncation",
      },
      {
        front: "What does the compound assignment x += 3 mean?",
        back: "It is shorthand for x = x + 3. Similar operators include $-=$, $*=$, $/=$, and $\\%=$. They modify the variable in place.",
        hint: "Shorthand update",
      },
      {
        front: "What is the difference between x++ and ++x?",
        back: "Both increment x by 1. As a standalone statement they are identical. In a larger expression, x++ (postfix) uses the old value first, then increments; ++x (prefix) increments first, then uses the new value.",
        hint: "Postfix vs. prefix",
      },
      {
        front: "How is string concatenation handled with the + operator?",
        back: "If either operand is a String, $+$ concatenates. Evaluation is left to right, so \"Sum: \" + 3 + 4 gives \"Sum: 34\", but \"Sum: \" + (3 + 4) gives \"Sum: 7\".",
        hint: "Parentheses change meaning",
      },
      {
        front: "Mini-example: What is the value of 10 + 3 * 2 - 8 / 4?",
        back: "Multiplication and division go first: $3 * 2 = 6$ and $8 / 4 = 2$. Then $10 + 6 - 2 = 14$.",
        hint: "Precedence then left to right",
      },
      {
        front: "Mini-example: Extract the tens digit of an int n.",
        back: "Use (n / 10) % 10. For n = 472, n / 10 = 47, then 47 % 10 = 7. Dividing strips lower digits; modulo isolates the rightmost remaining digit.",
        hint: "Divide then mod",
      },
      {
        front: "Common trap: Why might (double)(7 / 2) not equal 3.5?",
        back: "The cast applies after the int division finishes, so 7 / 2 = 3 first, then casts to 3.0. To get 3.5, cast an operand first: (double) 7 / 2.",
      },
      {
        front: "What happens with division by zero in Java?",
        back: "Integer division by zero (e.g., 5 / 0) throws an ArithmeticException at runtime. Floating-point division (e.g., 5.0 / 0) yields Infinity or NaN instead of an exception.",
        hint: "int vs. double behave differently",
      },
    ],
  },
  {
    slug: "apush-native-societies-exploration",
    cards: [
      {
        front: "How diverse were Native American societies before European contact?",
        back: "Highly diverse, with hundreds of distinct cultures adapted to local environments, ranging from large agricultural civilizations to nomadic hunter-gatherers, each with unique languages, governance, and economies.",
        hint: "Not one uniform culture",
      },
      {
        front: "How did the cultivation of maize shape Native societies?",
        back: "Maize (corn) cultivation, spreading north from Mexico, supported larger, more sedentary, and socially complex societies in the Southwest and along the Mississippi, enabling population growth and permanent settlements.",
        hint: "Agriculture enabled complexity",
      },
      {
        front: "Describe the Pueblo peoples of the Southwest.",
        back: "Sedentary societies (e.g., the Anasazi/Ancestral Puebloans) who built irrigation systems and multi-story adobe/stone dwellings, relying on maize agriculture in an arid environment.",
        hint: "Adobe, irrigation, Southwest",
      },
      {
        front: "What were the Mississippian peoples known for?",
        back: "A mound-building culture (c. 800-1600 CE) centered at cities like Cahokia, with large earthen mounds, extensive trade networks, and a hierarchical, agriculture-based society.",
        hint: "Cahokia, mounds",
      },
      {
        front: "What was the Columbian Exchange?",
        back: "The transfer of plants, animals, people, and diseases between the Eastern and Western Hemispheres after 1492. It reshaped diets, economies, and populations on both sides of the Atlantic.",
        hint: "Old World <-> New World swap",
      },
      {
        front: "Give examples of what each hemisphere contributed in the Columbian Exchange.",
        back: "From the Americas: maize, potatoes, tomatoes, tobacco, cacao. From Europe/Africa/Asia: horses, cattle, pigs, wheat, sugar, and devastating diseases like smallpox.",
        hint: "Crops one way, animals/disease the other",
      },
      {
        front: "What was the demographic impact of European contact on Native peoples?",
        back: "Old World diseases like smallpox, to which Natives had no immunity, killed an estimated 50-90% of Indigenous populations, causing societal collapse and easing European conquest.",
        hint: "Catastrophic disease deaths",
      },
      {
        front: "What motivated Spanish exploration and conquest (the 'Three Gs')?",
        back: "God, Gold, and Glory: spreading Christianity, acquiring wealth (especially silver and gold), and gaining national/personal prestige. Spain led early conquest of the Aztec and Inca empires.",
        hint: "God, Gold, Glory",
      },
      {
        front: "What was the encomienda system?",
        back: "A Spanish labor system granting colonists the right to demand tribute and forced labor from Native peoples in exchange for supposed protection and Christian instruction; in practice it was brutal and exploitative.",
        hint: "Forced Native labor for Spain",
      },
      {
        front: "What was the caste (casta) system in Spanish America?",
        back: "A social hierarchy based on ancestry: peninsulares (Spanish-born) at the top, then creoles (American-born Spaniards), then mestizos and mulattoes (mixed ancestry), with Natives and Africans at the bottom.",
        hint: "Race-based colonial hierarchy",
      },
      {
        front: "Who was Bartolome de las Casas, and what did he argue?",
        back: "A Spanish friar who condemned the abuse of Native peoples under the encomienda system and argued for their humane treatment, sparking debate (the Valladolid debate) over Indigenous rights.",
        hint: "Defended Native peoples",
      },
      {
        front: "How did the introduction of the horse change Native life?",
        back: "Horses (reintroduced by the Spanish) transformed Plains societies, enabling more efficient bison hunting, mobility, and trade, and reshaping warfare and culture for groups like the Comanche and Sioux.",
        hint: "Reshaped Plains cultures",
      },
      {
        front: "Common trap: Were Native societies 'primitive' or static before contact?",
        back: "No. This is a misconception. Many had complex political systems, large cities, extensive trade networks, and sophisticated agriculture; they actively adapted to and resisted European arrival.",
      },
      {
        front: "How did European and Native worldviews differ on land?",
        back: "Europeans generally viewed land as private property to be owned and exploited, while many Native cultures saw land as communal and tied to spiritual/seasonal use, leading to major conflicts.",
        hint: "Ownership vs. communal use",
      },
    ],
  },
  {
    slug: "surface-area-volume-solids-geo",
    cards: [
      {
        front: "What is the volume formula for a rectangular prism, and what does each variable mean?",
        back: "$V = l \\times w \\times h$, where $l$ is length, $w$ is width, and $h$ is height. Use it for any box-shaped solid. Volume is in cubic units.",
        hint: "Length times width times height",
      },
      {
        front: "What is the surface area of a rectangular prism?",
        back: "$SA = 2(lw + lh + wh)$, where $l$, $w$, $h$ are length, width, and height. It sums the areas of all six rectangular faces (three pairs of congruent faces).",
        hint: "Two of each face pair",
      },
      {
        front: "Give the volume and surface area formulas for a cube with edge s.",
        back: "Volume $V = s^3$ and surface area $SA = 6s^2$, where $s$ is the edge length. A cube has 6 congruent square faces.",
        hint: "All edges equal",
      },
      {
        front: "What is the volume of a cylinder, and define each variable?",
        back: "$V = \\pi r^2 h$, where $r$ is the base radius and $h$ is the height. It equals the base area ($\\pi r^2$) times the height.",
        hint: "Base area times height",
      },
      {
        front: "What is the surface area of a closed cylinder?",
        back: "$SA = 2\\pi r^2 + 2\\pi r h$, where $r$ is radius and $h$ is height. The term $2\\pi r^2$ is the two circular bases and $2\\pi r h$ is the lateral (side) area.",
        hint: "Two circles plus a rolled rectangle",
      },
      {
        front: "What is the volume formula for any prism or cylinder?",
        back: "$V = B \\times h$, where $B$ is the area of the base and $h$ is the height (perpendicular distance between bases). This unifies prisms and cylinders.",
        hint: "Base area times height",
      },
      {
        front: "What is the volume of a pyramid or cone?",
        back: "$V = \\frac{1}{3} B h$, where $B$ is the base area and $h$ is the perpendicular height. Cones and pyramids hold one-third the volume of a prism/cylinder with the same base and height.",
        hint: "One-third of base times height",
      },
      {
        front: "What is the surface area of a cone, and what is slant height?",
        back: "$SA = \\pi r^2 + \\pi r \\ell$, where $r$ is the base radius and $\\ell$ is the slant height (distance from base edge to apex along the surface). Note $\\ell = \\sqrt{r^2 + h^2}$.",
        hint: "Base circle plus lateral area",
      },
      {
        front: "What are the volume and surface area formulas for a sphere?",
        back: "$V = \\frac{4}{3} \\pi r^3$ and $SA = 4\\pi r^2$, where $r$ is the radius. The surface area equals four times the area of a great circle.",
        hint: "Four-thirds pi r cubed",
      },
      {
        front: "Worked example: Find the volume of a cylinder with r = 3 and h = 10.",
        back: "$V = \\pi r^2 h = \\pi (3)^2 (10) = 90\\pi \\approx 282.7$ cubic units. Square the radius first, then multiply by height and $\\pi$.",
        hint: "Plug into pi r squared h",
      },
      {
        front: "Worked example: Find the surface area of a sphere with radius 5.",
        back: "$SA = 4\\pi r^2 = 4\\pi (5)^2 = 100\\pi \\approx 314.2$ square units. Square the radius, then multiply by $4\\pi$.",
        hint: "Four pi r squared",
      },
      {
        front: "Common trap: What units do volume and surface area use?",
        back: "Volume uses cubic units (e.g., cm^3) because three dimensions are multiplied; surface area uses square units (e.g., cm^2) because it measures a 2D boundary. Mixing them is a frequent error.",
        hint: "Cubic vs. square",
      },
      {
        front: "What happens to volume when you double every dimension of a solid?",
        back: "Volume scales by the cube of the scale factor, so doubling all linear dimensions multiplies volume by $2^3 = 8$. Surface area scales by the square, multiplying by $2^2 = 4$.",
        hint: "Cube it for volume, square it for area",
      },
      {
        front: "How do you find the volume of a composite solid?",
        back: "Decompose it into basic solids (prisms, cylinders, cones, hemispheres), compute each volume separately, then add (or subtract for cut-out regions). Keep consistent units throughout.",
        hint: "Break apart and add or subtract",
      },
    ],
  },
  {
    slug: "ci-means",
    cards: [
      {
        front: "What is a confidence interval for a population mean?",
        back: "A range of plausible values for the unknown population mean $\\mu$, built from a sample. A 95% confidence level means the method captures $\\mu$ in 95% of repeated samples.",
        hint: "Plausible values for mu",
      },
      {
        front: "What is the general form of a confidence interval?",
        back: "estimate $\\pm$ (critical value)(standard error), i.e. point estimate plus or minus the margin of error. For a mean, the estimate is $\\bar{x}$.",
        hint: "Estimate plus or minus margin",
      },
      {
        front: "What is the one-sample t-interval formula for a mean?",
        back: "$\\bar{x} \\pm t^{*} \\dfrac{s}{\\sqrt{n}}$, where $\\bar{x}$ is the sample mean, $s$ is the sample standard deviation, $n$ is the sample size, and $t^{*}$ is the critical value from the t-distribution.",
        hint: "Use t when sigma is unknown",
      },
      {
        front: "When do you use a t-distribution instead of z for a mean?",
        back: "Use t whenever the population standard deviation $\\sigma$ is unknown (the usual case) and you estimate it with the sample $s$. The t-distribution has heavier tails to account for that extra uncertainty.",
        hint: "Sigma unknown means use t",
      },
      {
        front: "How many degrees of freedom does a one-sample t-interval use?",
        back: "$df = n - 1$, where $n$ is the sample size. Degrees of freedom determine which t-distribution (and thus which $t^{*}$) to use.",
        hint: "n minus 1",
      },
      {
        front: "What are the conditions for a one-sample t-interval for a mean?",
        back: "Random sample; independence (n less than 10% of the population when sampling without replacement); and Normal/Large sample (population roughly Normal, or n at least 30 by the CLT, or no strong skew/outliers).",
        hint: "Random, Independent, Normal",
      },
      {
        front: "What is the margin of error in a t-interval, and what affects it?",
        back: "Margin of error $= t^{*} \\dfrac{s}{\\sqrt{n}}$. It increases with higher confidence level and larger $s$, and decreases with larger sample size $n$.",
        hint: "t-star times standard error",
      },
      {
        front: "How does increasing the confidence level affect interval width?",
        back: "Higher confidence (e.g., 99% vs. 90%) requires a larger $t^{*}$, producing a wider interval. There is a tradeoff: more confidence means less precision.",
        hint: "More confidence, wider interval",
      },
      {
        front: "How does increasing sample size affect the interval?",
        back: "A larger $n$ shrinks the standard error $s/\\sqrt{n}$, narrowing the interval and improving precision. To halve the margin of error, you roughly quadruple n.",
        hint: "Bigger n, narrower interval",
      },
      {
        front: "What is the correct interpretation of a 95% confidence interval?",
        back: "We are 95% confident the interval from a to b captures the true population mean. NOT '95% of data fall in the interval' and NOT 'there's a 95% probability mu is in this specific interval.'",
        hint: "Confidence is in the method",
      },
      {
        front: "What is the correct interpretation of a 95% confidence level?",
        back: "If we took many random samples and built an interval from each using this method, about 95% of those intervals would capture the true mean $\\mu$.",
        hint: "Long-run capture rate",
      },
      {
        front: "Worked example: 95% CI with x-bar = 50, s = 8, n = 25, t* = 2.064.",
        back: "Standard error $= 8/\\sqrt{25} = 1.6$. Margin $= 2.064 \\times 1.6 \\approx 3.30$. Interval: $50 \\pm 3.30 = (46.7, 53.3)$.",
        hint: "SE then margin then interval",
      },
      {
        front: "Common trap: Can a confidence interval be used to make a claim about an individual?",
        back: "No. A CI estimates the population mean $\\mu$, not the value for any single individual. Confusing the interval for $\\mu$ with a prediction for one observation is a common error.",
      },
      {
        front: "How can a confidence interval be used to test a claim about a mean?",
        back: "If a claimed value (e.g., $\\mu = 60$) lies outside the interval, you have evidence against it at the corresponding significance level; if it lies inside, the value is plausible.",
        hint: "Inside = plausible, outside = reject",
      },
    ],
  },
  {
    slug: "wh-east-asian-empires",
    cards: [
      {
        front: "What administrative innovation did the Song Dynasty refine in China?",
        back: "The civil service examination system based on Confucian classics, which selected officials by merit rather than birth, creating a skilled scholar-bureaucrat (scholar-gentry) class.",
        hint: "Merit-based bureaucracy",
      },
      {
        front: "What was Neo-Confucianism and why did it matter?",
        back: "A revival of Confucian thought (notably under the Song) blending Confucian ethics with Buddhist and Daoist ideas. It reinforced social hierarchy, filial piety, and influenced East Asia for centuries.",
        hint: "Confucian revival, Song era",
      },
      {
        front: "Name key economic developments of Song China.",
        back: "Champa rice (fast-ripening, allowing two harvests), expanded canals and trade, paper money, gunpowder, and the magnetic compass, fueling commercialization and population growth.",
        hint: "Champa rice and inventions",
      },
      {
        front: "How did foot binding reflect Song social structure?",
        back: "Practiced mainly among elite Han Chinese, foot binding symbolized status and reinforced patriarchal control by restricting women's mobility, reflecting Neo-Confucian gender hierarchies.",
        hint: "Status and patriarchy",
      },
      {
        front: "How did the Mongols (Yuan Dynasty) rule China?",
        back: "Under Kublai Khan, the Mongols established the Yuan Dynasty, keeping many Chinese institutions but placing Mongols and foreigners in top posts. They promoted trade along the Silk Roads and Pax Mongolica.",
        hint: "Kublai Khan, Yuan",
      },
      {
        front: "What was the Pax Mongolica and its significance?",
        back: "The 'Mongol Peace,' a period of stability across the Mongol Empire that secured trade routes like the Silk Roads, increasing the exchange of goods, ideas, technology, and unfortunately disease (plague).",
        hint: "Mongol Peace, safe trade",
      },
      {
        front: "What characterized the Ming Dynasty's approach after the Mongols?",
        back: "The Ming restored Han Chinese rule, revived the civil service exams and Confucian order, rebuilt the Great Wall, and initially sponsored the Zheng He voyages before turning more inward.",
        hint: "Restored Han rule",
      },
      {
        front: "Who was Zheng He and what did his voyages show?",
        back: "A Ming admiral who led massive treasure fleet voyages (1405-1433) across the Indian Ocean to Africa, projecting Chinese power and wealth and collecting tribute, before the voyages were halted.",
        hint: "Ming treasure fleets",
      },
      {
        front: "What was the tribute system in East Asia?",
        back: "A diplomatic and trade framework in which neighboring states acknowledged Chinese superiority and sent tribute/gifts in exchange for trade rights and recognition, reinforcing China's central role.",
        hint: "China at the center",
      },
      {
        front: "How did Japan's feudal system (shogunate) work?",
        back: "Real power lay with the shogun (military leader) while the emperor was a figurehead. Daimyo (lords) commanded samurai warriors bound by bushido, a code of loyalty and honor.",
        hint: "Shogun, daimyo, samurai",
      },
      {
        front: "How did Korea relate to Chinese influence?",
        back: "Korea (e.g., the Goryeo and Joseon dynasties) adopted Confucianism, the civil service exam model, and Buddhism from China while maintaining tributary relations and its own distinct identity.",
        hint: "Sinicized but independent",
      },
      {
        front: "How did Buddhism spread and adapt in East Asia?",
        back: "Buddhism spread from India along the Silk Roads, blending with local beliefs (e.g., Chan/Zen Buddhism in China and Japan). It coexisted and sometimes competed with Confucianism and Daoism.",
        hint: "Silk Roads, syncretism",
      },
      {
        front: "Common trap: Was the civil service exam truly open to everyone?",
        back: "In theory it was merit-based, but in practice wealthy families could afford the years of study and tutoring required, so the scholar-gentry elite dominated, limiting real social mobility.",
      },
      {
        front: "How did East Asian empires demonstrate continuity and change over time?",
        back: "Confucian bureaucracy, the exam system, and patriarchal structures persisted across dynasties (continuity), while foreign rule (Yuan), new crops, technology, and shifting trade policies brought change.",
      },
    ],
  },
  {
    slug: "continuous-random-variables",
    cards: [
      {
        front: "What is a continuous random variable?",
        back: "A random variable that can take any value in an interval of real numbers (e.g., heights, times, weights), as opposed to a discrete variable with countable outcomes.",
        hint: "Any value in an interval",
      },
      {
        front: "How is probability represented for a continuous random variable?",
        back: "By a density curve (probability density function). Probability equals the AREA under the curve over an interval, and the total area under the curve equals 1.",
        hint: "Area under the curve",
      },
      {
        front: "Why is P(X = a) = 0 for a continuous random variable?",
        back: "Because area over a single point has zero width, so any exact value has probability 0. This is why $P(X < a)$ and $P(X \\le a)$ are equal for continuous variables.",
        hint: "Single point has no area",
      },
      {
        front: "What two properties must a probability density function (pdf) satisfy?",
        back: "It must be nonnegative everywhere ($f(x) \\ge 0$), and the total area under the curve must equal 1. Probabilities come from areas, so they stay between 0 and 1.",
        hint: "Nonnegative and area = 1",
      },
      {
        front: "What is a uniform distribution on [a, b]?",
        back: "A continuous distribution where outcomes are equally likely across the interval, giving a constant density $\\frac{1}{b-a}$ and a rectangular density curve.",
        hint: "Flat, rectangular density",
      },
      {
        front: "How do you find probability for a uniform distribution?",
        back: "Compute the area of a rectangle: $P(c \\le X \\le d) = \\dfrac{d - c}{b - a}$ for $a \\le c \\le d \\le b$. It is the fraction of the interval covered.",
        hint: "Width times height of rectangle",
      },
      {
        front: "What is the most important continuous distribution in AP Statistics?",
        back: "The Normal (Gaussian) distribution, a bell-shaped, symmetric density curve defined by its mean $\\mu$ (center) and standard deviation $\\sigma$ (spread).",
        hint: "Bell curve",
      },
      {
        front: "What is the empirical (68-95-99.7) rule?",
        back: "For a Normal distribution, about 68% of values fall within 1 standard deviation of the mean, 95% within 2, and 99.7% within 3. Use it for quick Normal probability estimates.",
        hint: "68, 95, 99.7 within 1, 2, 3 SD",
      },
      {
        front: "What is a z-score and its formula?",
        back: "$z = \\dfrac{x - \\mu}{\\sigma}$, where $x$ is the value, $\\mu$ is the mean, and $\\sigma$ is the standard deviation. It measures how many standard deviations $x$ is from the mean.",
        hint: "Standardize the value",
      },
      {
        front: "What is the standard Normal distribution?",
        back: "The Normal distribution with mean $\\mu = 0$ and standard deviation $\\sigma = 1$. Any Normal variable can be converted to it using z-scores to look up probabilities.",
        hint: "Mean 0, SD 1",
      },
      {
        front: "How do mean and median compare for a symmetric continuous distribution?",
        back: "They are equal and located at the center of symmetry. For right-skewed distributions the mean exceeds the median; for left-skewed, the mean is less than the median.",
        hint: "Equal when symmetric",
      },
      {
        front: "What does the mean (expected value) represent for a continuous distribution?",
        back: "The balance point of the density curve, the long-run average value of the variable. For a symmetric curve it sits at the axis of symmetry.",
        hint: "Balance point of the curve",
      },
      {
        front: "Worked example: X is uniform on [0, 10]. Find P(3 < X < 7).",
        back: "$P(3 < X < 7) = \\dfrac{7 - 3}{10 - 0} = \\dfrac{4}{10} = 0.4$. The covered width is 4 out of a total width of 10.",
        hint: "Length of subinterval over total",
      },
      {
        front: "Common trap: difference between a probability and a density value.",
        back: "The height of a density curve $f(x)$ is NOT a probability and can exceed 1. Only the AREA under the curve over an interval gives a probability, which must be between 0 and 1.",
      },
    ],
  },
  {
    slug: "box-plots",
    cards: [
      {
        front: "What is a box plot (box-and-whisker plot)?",
        back: "A graphical display of a data set's five-number summary that shows center, spread, and skew, and helps identify outliers.",
        hint: "Visualizes the five-number summary",
      },
      {
        front: "What are the five numbers in the five-number summary?",
        back: "Minimum, first quartile ($Q_1$), median ($Q_2$), third quartile ($Q_3$), and maximum. These values define the box plot.",
        hint: "Min, Q1, median, Q3, max",
      },
      {
        front: "What does the box in a box plot represent?",
        back: "The box spans from $Q_1$ to $Q_3$, covering the middle 50% of the data. A line inside the box marks the median ($Q_2$).",
        hint: "Middle 50% of data",
      },
      {
        front: "What is the interquartile range (IQR)?",
        back: "$IQR = Q_3 - Q_1$. It measures the spread of the middle 50% of the data and is resistant to outliers.",
        hint: "Q3 minus Q1",
      },
      {
        front: "What is the 1.5 x IQR rule for identifying outliers?",
        back: "A value is an outlier if it is below $Q_1 - 1.5 \\times IQR$ or above $Q_3 + 1.5 \\times IQR$. These thresholds are called the fences.",
        hint: "Below low fence or above high fence",
      },
      {
        front: "What do the whiskers represent in a box plot?",
        back: "The whiskers extend from the box to the smallest and largest data values that are NOT outliers (within the fences). Outliers are plotted as separate points beyond the whiskers.",
        hint: "Reach to the most extreme non-outliers",
      },
      {
        front: "How do you assess skew from a box plot?",
        back: "Compare the lengths of the two halves: a longer right whisker/right box segment suggests right skew; a longer left side suggests left skew; symmetry suggests a roughly symmetric distribution.",
        hint: "Longer side shows direction of skew",
      },
      {
        front: "Why is the median preferred over the mean for skewed data?",
        back: "The median is resistant (not pulled by extreme values), so it better represents the center of skewed distributions or data with outliers. The mean gets dragged toward the tail.",
        hint: "Median resists outliers",
      },
      {
        front: "What is one major limitation of box plots?",
        back: "They hide the shape of the distribution within quartiles. A box plot cannot reveal multiple peaks (modality) or gaps that a histogram or dotplot would show.",
        hint: "Cannot show modality",
      },
      {
        front: "When are parallel (side-by-side) box plots especially useful?",
        back: "When comparing the distributions of two or more groups, since they let you quickly compare centers, spreads, and outliers on the same scale.",
        hint: "Comparing groups",
      },
      {
        front: "Worked example: Data 4, 8, 10, 12, 15, 18, 22. Find the five-number summary.",
        back: "Sorted, median ($Q_2$) = 12. Lower half 4, 8, 10 gives $Q_1 = 8$; upper half 15, 18, 22 gives $Q_3 = 18$. Min = 4, Max = 22. Summary: 4, 8, 12, 18, 22.",
        hint: "Median splits halves for quartiles",
      },
      {
        front: "Worked example: With Q1 = 8 and Q3 = 18, find the outlier fences.",
        back: "$IQR = 18 - 8 = 10$. Lower fence $= 8 - 1.5(10) = -7$; upper fence $= 18 + 1.5(10) = 33$. Any value below $-7$ or above 33 is an outlier.",
        hint: "Use 1.5 x IQR from each quartile",
      },
      {
        front: "Common trap: Does each section of a box plot contain the same number of data points?",
        back: "Roughly yes, each of the four sections (two whiskers and two box halves) contains about 25% of the data, even though their lengths differ. Longer sections just mean more spread, not more data.",
      },
      {
        front: "Common trap: Can you read the exact mean or sample size from a box plot?",
        back: "No. A box plot shows quartiles and extremes, not the mean or the number of observations. You can only describe center (median), spread (IQR/range), and outliers.",
      },
    ],
  },
];
