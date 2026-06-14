export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "apush-reagan-to-present",
    cards: [
      {
        front: "What was Reaganomics (supply-side economics)?",
        back: "An economic policy under Reagan based on tax cuts (especially for upper brackets), deregulation, reduced domestic spending, and increased military spending, on the theory that benefits would 'trickle down' to stimulate growth.",
        hint: "Tax cuts + deregulation",
      },
      {
        front: "What major tax legislation did Reagan sign in 1981?",
        back: "The Economic Recovery Tax Act of 1981, which cut federal income taxes by about 25% across brackets and was the centerpiece of supply-side policy.",
      },
      {
        front: "What was the Iran-Contra Affair?",
        back: "A 1980s scandal in which Reagan administration officials secretly sold arms to Iran and illegally diverted the proceeds to fund the Contra rebels in Nicaragua, despite a congressional ban (the Boland Amendment).",
        hint: "Arms for hostages, money to Nicaragua",
      },
      {
        front: "What did Reagan mean by the 'Evil Empire'?",
        back: "His 1983 description of the Soviet Union, reflecting a renewed hardline Cold War stance and a major military buildup early in his presidency.",
      },
      {
        front: "What was the Strategic Defense Initiative (SDI)?",
        back: "Reagan's 1983 proposal, nicknamed 'Star Wars,' for a space-based missile defense system to shoot down incoming Soviet nuclear missiles. It was never fully built but pressured Soviet spending.",
      },
      {
        front: "Who was Mikhail Gorbachev and what were glasnost and perestroika?",
        back: "The Soviet leader from 1985 whose reforms of openness (glasnost) and economic restructuring (perestroika) helped ease Cold War tensions and contributed to the USSR's collapse in 1991.",
      },
      {
        front: "What ended the Cold War around 1989-1991?",
        back: "The fall of the Berlin Wall (1989), collapse of communist governments in Eastern Europe, and the dissolution of the Soviet Union in 1991, leaving the U.S. as the sole superpower.",
        hint: "Berlin Wall falls 1989",
      },
      {
        front: "What was the Persian Gulf War (1991)?",
        back: "A U.S.-led coalition under George H.W. Bush that drove Iraqi forces out of Kuwait after Saddam Hussein's 1990 invasion. Operation Desert Storm succeeded quickly with limited U.S. casualties.",
      },
      {
        front: "What was NAFTA?",
        back: "The North American Free Trade Agreement (1994), which created a free-trade zone among the U.S., Canada, and Mexico. Negotiated under Bush, signed under Clinton; controversial over jobs and trade.",
      },
      {
        front: "Why was President Bill Clinton impeached in 1998?",
        back: "The House impeached him on charges of perjury and obstruction of justice related to the Monica Lewinsky scandal. The Senate acquitted him, and he remained in office.",
        hint: "Second president impeached; acquitted",
      },
      {
        front: "What happened on September 11, 2001?",
        back: "Al-Qaeda terrorists hijacked four planes, destroying the World Trade Center towers and damaging the Pentagon, killing nearly 3,000 people and launching the U.S. War on Terror.",
      },
      {
        front: "What was the USA PATRIOT Act?",
        back: "A 2001 law expanding government surveillance and law-enforcement powers to combat terrorism after 9/11; criticized by civil libertarians for threatening privacy and civil liberties.",
      },
      {
        front: "What was the Great Recession of 2008?",
        back: "A severe financial crisis triggered by the collapse of the housing/subprime-mortgage bubble, leading to bank failures, the TARP bailout, and high unemployment; the worst downturn since the Great Depression.",
      },
      {
        front: "What was a major legislative achievement of President Obama in 2010?",
        back: "The Affordable Care Act ('Obamacare'), which expanded health-insurance coverage through mandates, subsidies, and Medicaid expansion, and barred denial for pre-existing conditions.",
      },
    ],
  },
  {
    slug: "csp-procedures-lists",
    cards: [
      {
        front: "What is a procedure in AP CSP?",
        back: "A named group of programming instructions (also called a function, method, or subroutine) that can be called to run that code, often taking parameters and optionally returning a value.",
        hint: "A reusable named block of code",
      },
      {
        front: "What is the difference between a parameter and an argument?",
        back: "A parameter is the variable named in the procedure's definition; an argument is the actual value passed into the procedure when it is called.",
      },
      {
        front: "What is a return value?",
        back: "The output value a procedure passes back to the part of the program that called it, allowing the result to be stored or used in further computation.",
      },
      {
        front: "Why are procedures useful? (abstraction)",
        back: "They enable procedural abstraction: hiding implementation details so a programmer can use a procedure by name without knowing how it works, which reduces complexity and avoids repeated code.",
        hint: "Manage complexity, reuse code",
      },
      {
        front: "What is a list in AP CSP?",
        back: "An ordered collection (data structure) of elements stored under a single variable name, where each element can be accessed by its index position.",
      },
      {
        front: "In AP CSP pseudocode, what does $LENGTH(aList)$ return?",
        back: "The number of elements currently in the list. It is used to know how many items exist, often as the upper bound of a loop.",
      },
      {
        front: "What indexing does the AP CSP exam reference language use for lists?",
        back: "1-based indexing: the first element is at index 1 and the last element is at index $LENGTH(aList)$. (Note: many real languages like Python use 0-based indexing.)",
        hint: "Starts at 1, not 0",
      },
      {
        front: "What does $INSERT(aList, i, value)$ do in AP CSP pseudocode?",
        back: "Inserts a new element with the given value into the list at index $i$, shifting existing elements at and after that position one place toward the end.",
      },
      {
        front: "What does $APPEND(aList, value)$ do?",
        back: "Adds the given value as a new element at the end of the list, increasing its length by 1.",
      },
      {
        front: "What does $REMOVE(aList, i)$ do?",
        back: "Removes the element at index $i$, shifting the remaining elements after it toward the start so there are no gaps; the list length decreases by 1.",
      },
      {
        front: "What is a common off-by-one error with lists?",
        back: "Looping from index 0 or going to index $LENGTH(aList)+1$ in a 1-based language, which accesses positions that don't exist. Always loop from 1 to $LENGTH$ inclusive on the AP exam.",
        hint: "Watch loop bounds",
      },
      {
        front: "Worked example: Given list $\\\\text{scores} = [80, 90, 70]$, what is the result of $APPEND(\\\\text{scores}, 100)$ then $LENGTH(\\\\text{scores})$?",
        back: "After APPEND the list is $[80, 90, 70, 100]$, so $LENGTH$ returns 4.",
      },
      {
        front: "How do you traverse a list to process every element?",
        back: "Use a FOR EACH loop or an index-based loop from 1 to $LENGTH(aList)$, accessing each element by its index to read or modify it.",
      },
      {
        front: "What is the benefit of using a list instead of many separate variables?",
        back: "A list lets you store and process many related values with a single name and a loop, instead of writing separate variables and repeated code for each value.",
      },
    ],
  },
  {
    slug: "inscribed-angles",
    cards: [
      {
        front: "What is an inscribed angle?",
        back: "An angle whose vertex lies on a circle and whose two sides are chords of that circle.",
        hint: "Vertex on the circle",
      },
      {
        front: "State the Inscribed Angle Theorem.",
        back: "An inscribed angle equals half the measure of its intercepted arc. If the intercepted arc measures $a^\\\\circ$, the inscribed angle measures $\\\\frac{a}{2}^\\\\circ$.",
        hint: "Inscribed = half the arc",
      },
      {
        front: "How does a central angle compare to an inscribed angle on the same arc?",
        back: "A central angle equals its intercepted arc, so a central angle is twice any inscribed angle that intercepts the same arc.",
      },
      {
        front: "What is the measure of an inscribed angle that intercepts a semicircle?",
        back: "$90^\\\\circ$ (a right angle), because the intercepted arc is $180^\\\\circ$ and the inscribed angle is half of that. This is Thales' Theorem.",
        hint: "Angle in a semicircle is a right angle",
      },
      {
        front: "If two inscribed angles intercept the same arc, how are they related?",
        back: "They are congruent (equal in measure), because each equals half of the same intercepted arc.",
      },
      {
        front: "Worked example: An inscribed angle intercepts an arc of $130^\\\\circ$. Find the angle.",
        back: "The inscribed angle measures $\\\\frac{130}{2} = 65^\\\\circ$.",
      },
      {
        front: "Worked example: An inscribed angle measures $40^\\\\circ$. What is its intercepted arc?",
        back: "The intercepted arc is twice the angle: $2 \\\\times 40 = 80^\\\\circ$.",
      },
      {
        front: "What is the property of opposite angles in an inscribed (cyclic) quadrilateral?",
        back: "Opposite angles of a quadrilateral inscribed in a circle are supplementary; each pair sums to $180^\\\\circ$.",
        hint: "Opposite angles add to 180",
      },
      {
        front: "What is the measure of the angle formed by a tangent and a chord at the point of tangency?",
        back: "It equals half the intercepted arc cut off by the chord, the same half-arc rule as an inscribed angle.",
      },
      {
        front: "Common trap: Does an inscribed angle equal its intercepted arc?",
        back: "No. The inscribed angle is HALF the arc. Confusing inscribed (half-arc) with central (full-arc) angles is the most common mistake.",
        hint: "Half, not equal",
      },
      {
        front: "In a triangle inscribed in a circle with one side as a diameter, what is true?",
        back: "The triangle is a right triangle, with the right angle at the vertex opposite the diameter (Thales' Theorem).",
      },
      {
        front: "Worked example: A cyclic quadrilateral has one angle of $85^\\\\circ$. What is its opposite angle?",
        back: "$180 - 85 = 95^\\\\circ$, since opposite angles of a cyclic quadrilateral are supplementary.",
      },
      {
        front: "Two chords intersect INSIDE a circle. How do you find the angle formed?",
        back: "The angle equals half the SUM of the two intercepted arcs: $\\\\frac{1}{2}(arc_1 + arc_2)$. This differs from the simple inscribed-angle (vertex on circle) rule.",
        hint: "Half the sum of arcs",
      },
    ],
  },
  {
    slug: "geometric-distribution",
    cards: [
      {
        front: "What does a geometric random variable count?",
        back: "The number of independent Bernoulli trials needed to get the FIRST success, where each trial has the same success probability $p$.",
        hint: "Trials until first success",
      },
      {
        front: "What are the four conditions (BITS) for a geometric setting?",
        back: "Binary outcomes (success/failure), Independent trials, a Trials count until first success, and a Same probability $p$ on every trial.",
      },
      {
        front: "What is the geometric probability formula $P(X=k)$?",
        back: "$P(X=k) = (1-p)^{k-1} p$, where $p$ is the success probability, $k$ is the trial number of the first success, and $(1-p)$ is the failure probability on each preceding trial.",
        hint: "Fail (k-1) times, then succeed",
      },
      {
        front: "What is the mean (expected value) of a geometric distribution?",
        back: "$\\\\mu_X = \\\\frac{1}{p}$, the expected number of trials until the first success, where $p$ is the success probability.",
        hint: "1 over p",
      },
      {
        front: "What is the standard deviation of a geometric distribution?",
        back: "$\\\\sigma_X = \\\\frac{\\\\sqrt{1-p}}{p}$, where $p$ is the success probability on each trial.",
      },
      {
        front: "How do binomial and geometric distributions differ?",
        back: "Binomial counts the number of successes in a FIXED number $n$ of trials; geometric counts the number of trials until the FIRST success (number of trials is not fixed).",
        hint: "Fixed n vs. until first success",
      },
      {
        front: "Worked example: A free-throw shooter makes 70% of shots. Find the probability the first make is on the 3rd shot.",
        back: "$P(X=3) = (0.3)^{2}(0.7) = 0.09 \\\\times 0.7 = 0.063$.",
      },
      {
        front: "What is the formula for $P(X > n)$ (more than $n$ trials needed)?",
        back: "$P(X > n) = (1-p)^{n}$, the probability the first $n$ trials are all failures, where $p$ is the success probability.",
        hint: "All n trials fail",
      },
      {
        front: "What is the formula for $P(X \\\\le n)$ (success within the first $n$ trials)?",
        back: "$P(X \\\\le n) = 1 - (1-p)^{n}$, the complement of all $n$ trials failing.",
      },
      {
        front: "Why is the geometric distribution always right-skewed?",
        back: "The most likely outcome is success on trial 1 (highest probability), and probabilities decrease geometrically for larger values of $k$, producing a long right tail.",
        hint: "Tallest bar at k = 1",
      },
      {
        front: "Worked example: A die is rolled until a 6 appears. What is the expected number of rolls?",
        back: "Here $p = \\\\frac{1}{6}$, so $\\\\mu_X = \\\\frac{1}{p} = 6$ rolls.",
      },
      {
        front: "Common trap: forgetting the exponent is $k-1$, not $k$.",
        back: "There are $k-1$ failures BEFORE the success on trial $k$, so the failure probability is raised to the $(k-1)$ power, then multiplied by $p$ once.",
        hint: "k minus 1 failures",
      },
      {
        front: "On the TI calculator, which command gives $P(X=k)$ for a geometric distribution?",
        back: "geometpdf(p, k) gives the probability the first success is exactly on trial $k$; geometcdf(p, k) gives $P(X \\\\le k)$.",
      },
      {
        front: "What is the value range of a geometric random variable?",
        back: "All positive integers $1, 2, 3, \\\\ldots$ with no fixed upper limit, since in principle it could take any number of trials to get the first success.",
      },
    ],
  },
  {
    slug: "csa-arraylist-usage",
    cards: [
      {
        front: "What is an ArrayList in Java?",
        back: "A resizable list class in the java.util package that stores a sequence of object references and can grow or shrink dynamically, unlike a fixed-size array.",
        hint: "Dynamic, resizable list",
      },
      {
        front: "How do you declare and create an ArrayList of Strings?",
        back: "ArrayList<String> list = new ArrayList<String>(); The type in angle brackets is the generic type parameter; it must be a class type, not a primitive.",
      },
      {
        front: "Why can't an ArrayList store primitives like int directly?",
        back: "ArrayList requires object types, so you use wrapper classes such as Integer or Double. Autoboxing automatically converts an int to an Integer when added.",
        hint: "Use Integer, not int",
      },
      {
        front: "What does list.add(obj) do versus list.add(i, obj)?",
        back: "list.add(obj) appends obj to the end and returns true; list.add(i, obj) inserts obj at index $i$, shifting elements at and after $i$ one position to the right.",
      },
      {
        front: "What does list.get(i) return, and what error can it throw?",
        back: "It returns the element at index $i$. If $i$ is out of bounds (negative or >= size), it throws an IndexOutOfBoundsException.",
      },
      {
        front: "What does list.set(i, obj) do?",
        back: "Replaces the element at index $i$ with obj and returns the element that was previously there. It does NOT change the size of the list.",
        hint: "Replace, not insert",
      },
      {
        front: "What does list.remove(i) do?",
        back: "Removes and returns the element at index $i$, shifting all later elements one position to the left and decreasing size by 1.",
      },
      {
        front: "What does list.size() return?",
        back: "The number of elements currently in the list (not its capacity). Valid indices range from 0 to size() - 1.",
      },
      {
        front: "Why is removing during a forward index loop dangerous?",
        back: "When you remove element $i$, later elements shift left, so the next element moves into index $i$ and gets skipped. Fix by not incrementing after a removal, or loop backward.",
        hint: "Elements shift; you skip one",
      },
      {
        front: "Worked example: Remove all even Integers from an ArrayList<Integer> safely with an index loop.",
        back: "Loop with index $i$ from 0; if list.get(i) % 2 == 0 call list.remove(i) and do NOT increment, else increment $i$. This avoids skipping shifted elements.",
      },
      {
        front: "How do you traverse an ArrayList with an enhanced for loop, and what is the catch?",
        back: "for (String s : list) { ... } reads each element in order, but you CANNOT call list.add or list.remove inside it, or you get a ConcurrentModificationException.",
        hint: "No structural changes inside for-each",
      },
      {
        front: "What is the default value returned by an empty ArrayList's get, and what about an empty list size?",
        back: "An empty list has size() == 0 and calling get(0) throws IndexOutOfBoundsException because there is no element at any index.",
      },
      {
        front: "Worked example: How do you find the largest Integer in ArrayList<Integer> nums?",
        back: "Set int max = nums.get(0); loop $i$ from 1 to nums.size()-1, and if nums.get(i) > max set max = nums.get(i). Return max.",
      },
      {
        front: "How is an ArrayList passed to a method, and why does that matter?",
        back: "An ArrayList is passed by reference (the reference is copied), so a method that calls add, remove, or set on it changes the original list seen by the caller.",
        hint: "Object reference, so changes persist",
      },
    ],
  },
  {
    slug: "apes-ecosystem-structure",
    cards: [
      {
        front: "What is an ecosystem?",
        back: "A community of interacting organisms (biotic factors) together with their physical and chemical environment (abiotic factors), functioning as a unit through energy flow and nutrient cycling.",
        hint: "Biotic + abiotic working together",
      },
      {
        front: "Distinguish biotic from abiotic factors.",
        back: "Biotic factors are living components (plants, animals, fungi, microbes); abiotic factors are nonliving components (sunlight, temperature, water, soil, pH, nutrients).",
      },
      {
        front: "What is a trophic level?",
        back: "A feeding position in a food chain: producers (1st), primary consumers (2nd), secondary consumers (3rd), and so on, describing how energy moves through an ecosystem.",
      },
      {
        front: "What is the difference between a producer (autotroph) and a consumer (heterotroph)?",
        back: "Producers make their own food via photosynthesis or chemosynthesis; consumers obtain energy by eating other organisms. Producers form the base of the food chain.",
      },
      {
        front: "State the 10% rule of energy transfer.",
        back: "Only about 10% of the energy at one trophic level is passed to the next; roughly 90% is lost as heat through respiration and metabolic processes. This limits the number of trophic levels.",
        hint: "90% lost as heat each step",
      },
      {
        front: "What is the role of decomposers in an ecosystem?",
        back: "Decomposers (bacteria, fungi) break down dead organisms and waste, recycling nutrients back into the soil and atmosphere so producers can reuse them.",
      },
      {
        front: "What is the difference between a food chain and a food web?",
        back: "A food chain is a single linear pathway of energy transfer; a food web is the interconnected network of many overlapping food chains, more realistically showing feeding relationships.",
      },
      {
        front: "What is the difference between a species' habitat and its niche?",
        back: "A habitat is the physical place an organism lives; a niche is its full role in the ecosystem, including how it obtains food, interacts with others, and uses resources.",
        hint: "Address vs. profession",
      },
      {
        front: "What is gross primary productivity (GPP) versus net primary productivity (NPP)?",
        back: "GPP is the total energy producers capture through photosynthesis; NPP is the energy remaining after producers use some for respiration: $NPP = GPP - \\\\text{respiration}$. NPP is energy available to consumers.",
        hint: "NPP = GPP - respiration",
      },
      {
        front: "What is a keystone species?",
        back: "A species whose presence has a disproportionately large effect on its ecosystem relative to its abundance; its removal would dramatically alter the community (e.g., sea otters, wolves).",
      },
      {
        front: "What is an indicator species?",
        back: "A species whose health or population reflects the condition of its environment; their decline signals ecosystem stress (e.g., amphibians, lichen for air quality).",
      },
      {
        front: "What is the difference between ecosystem resilience and resistance?",
        back: "Resistance is an ecosystem's ability to withstand disturbance without changing; resilience is its ability to recover and return to its original state after a disturbance.",
      },
      {
        front: "Why are pyramids of energy always upright (never inverted)?",
        back: "Because energy is lost at each trophic transfer (10% rule), each higher level always contains less available energy than the one below it, so the pyramid narrows toward the top.",
      },
      {
        front: "What two factors most strongly determine an ecosystem's structure and species diversity?",
        back: "Generally temperature and precipitation (water availability), which is why biomes are classified largely by these climate factors. Higher, stable values often support greater biodiversity.",
        hint: "Climate: temp and rainfall",
      },
    ],
  },
  {
    slug: "apush-cold-war-civil-rights",
    cards: [
      {
        front: "What was the Truman Doctrine (1947)?",
        back: "A U.S. policy pledging to support free peoples resisting communist subjugation, beginning with aid to Greece and Turkey. It established containment as the guiding Cold War strategy.",
        hint: "Containment begins",
      },
      {
        front: "What was the Marshall Plan?",
        back: "A 1948 U.S. program providing billions in economic aid to rebuild Western Europe after WWII, intended to promote recovery and resist the spread of communism.",
      },
      {
        front: "What was McCarthyism?",
        back: "The early-1950s campaign led by Senator Joseph McCarthy of aggressive, often baseless accusations that government officials and others were communists, fueling a 'Red Scare' and fear-based persecution.",
        hint: "Red Scare; accusations of communism",
      },
      {
        front: "What did Brown v. Board of Education (1954) decide?",
        back: "The Supreme Court ruled that racial segregation in public schools is unconstitutional, overturning the 'separate but equal' doctrine of Plessy v. Ferguson (1896).",
        hint: "Ended 'separate but equal' in schools",
      },
      {
        front: "What was the Montgomery Bus Boycott (1955-56)?",
        back: "A year-long African American boycott of city buses sparked by Rosa Parks's arrest, led to prominence by Martin Luther King Jr., that ended bus segregation in Montgomery, Alabama.",
      },
      {
        front: "What was the significance of the 1963 March on Washington?",
        back: "A massive demonstration for jobs and freedom where Martin Luther King Jr. delivered his 'I Have a Dream' speech, building momentum for major civil rights legislation.",
      },
      {
        front: "What did the Civil Rights Act of 1964 do?",
        back: "It outlawed discrimination based on race, color, religion, sex, or national origin, banning segregation in public accommodations and discrimination in employment.",
        hint: "Banned discrimination, ended segregation in public places",
      },
      {
        front: "What did the Voting Rights Act of 1965 accomplish?",
        back: "It banned literacy tests and other discriminatory voting practices and authorized federal oversight of voter registration, dramatically increasing Black voter participation in the South.",
      },
      {
        front: "What was the Cuban Missile Crisis (1962)?",
        back: "A 13-day standoff after the U.S. discovered Soviet nuclear missiles in Cuba. Kennedy imposed a naval blockade; the USSR removed the missiles, bringing the world close to nuclear war.",
        hint: "Closest to nuclear war; JFK vs. Khrushchev",
      },
      {
        front: "How did the philosophies of MLK and Malcolm X differ?",
        back: "King advocated nonviolent civil disobedience and integration; Malcolm X (early on) emphasized Black nationalism, self-defense, and separatism, though his views moderated before his death.",
      },
      {
        front: "What was the Domino Theory?",
        back: "The Cold War belief that if one nation fell to communism, neighboring countries would follow like falling dominoes; it was used to justify U.S. intervention in Vietnam and Southeast Asia.",
      },
      {
        front: "What was NATO?",
        back: "The North Atlantic Treaty Organization (1949), a U.S.-led military alliance of Western nations pledging mutual defense against Soviet aggression; the USSR countered with the Warsaw Pact (1955).",
      },
      {
        front: "What was the significance of the 24th Amendment (1964)?",
        back: "It abolished the poll tax in federal elections, removing one barrier that had been used to disenfranchise poor and Black voters.",
      },
      {
        front: "What was the Korean War (1950-53) and its Cold War significance?",
        back: "A war after communist North Korea invaded the South; a U.S.-led UN force fought to a stalemate near the original border. It showed containment applied in Asia and ended in an armistice, not victory.",
      },
    ],
  },
  {
    slug: "macro-money-banking",
    cards: [
      {
        front: "What are the three functions of money?",
        back: "Medium of exchange (used to buy goods), unit of account (a common measure of value), and store of value (holds purchasing power over time).",
        hint: "Exchange, account, value",
      },
      {
        front: "What is the difference between M1 and M2 money supply?",
        back: "M1 is the most liquid money: currency, checkable deposits, and traveler's checks. M2 includes all of M1 plus near-money like savings deposits, small time deposits, and money market funds.",
        hint: "M2 = M1 + less-liquid assets",
      },
      {
        front: "What is fractional reserve banking?",
        back: "A system in which banks keep only a fraction of deposits as reserves and lend out the rest, which expands the money supply as loans become new deposits.",
      },
      {
        front: "What is the required reserve ratio (RRR)?",
        back: "The fraction of deposits a bank must hold as reserves rather than lend out, set by the central bank. A lower RRR allows more lending and money creation.",
      },
      {
        front: "What is the money (deposit) multiplier formula?",
        back: "$\\\\text{Money multiplier} = \\\\frac{1}{RRR}$, where $RRR$ is the required reserve ratio. It gives the maximum new money created from an initial excess reserve, assuming no leakages.",
        hint: "1 divided by the reserve ratio",
      },
      {
        front: "Worked example: With a 20% reserve ratio, a $1,000 deposit can expand the money supply by how much maximum?",
        back: "Multiplier $= \\\\frac{1}{0.20} = 5$. Excess reserves of $800 (the $1,000 minus $200 required) can create up to $800 \\\\times 5 = \\\\$4{,}000$ in new money.",
      },
      {
        front: "What are the three main tools of monetary policy?",
        back: "Open market operations (buying/selling government bonds), the discount rate (rate the Fed charges banks), and the reserve requirement. Open market operations are the most used.",
      },
      {
        front: "How does the Fed conduct expansionary (easy) monetary policy?",
        back: "It buys government bonds, lowers the discount rate, or lowers reserve requirements, increasing the money supply, lowering interest rates, and stimulating borrowing and spending.",
        hint: "Buy bonds, lower rates",
      },
      {
        front: "How does the Fed conduct contractionary (tight) monetary policy?",
        back: "It sells government bonds, raises the discount rate, or raises reserve requirements, decreasing the money supply, raising interest rates, and slowing inflation.",
      },
      {
        front: "What does the money demand curve look like and why?",
        back: "It is downward-sloping with the nominal interest rate on the vertical axis. Higher interest rates raise the opportunity cost of holding money, so people hold less, demanding more bonds instead.",
        hint: "Interest rate = opportunity cost of holding cash",
      },
      {
        front: "How is the nominal interest rate determined in the money market?",
        back: "At the intersection of money supply (vertical, set by the Fed) and money demand (downward-sloping). An increase in money supply shifts MS right, lowering the equilibrium interest rate.",
      },
      {
        front: "What is the Quantity Theory of Money equation?",
        back: "$M \\\\times V = P \\\\times Q$, where $M$ is money supply, $V$ is velocity of money, $P$ is the price level, and $Q$ is real output. If $V$ and $Q$ are stable, increasing $M$ raises $P$ (inflation).",
        hint: "MV = PQ",
      },
      {
        front: "What is the difference between the nominal and real interest rate?",
        back: "By the Fisher equation, $\\\\text{real rate} = \\\\text{nominal rate} - \\\\text{inflation rate}$. The real rate reflects the true purchasing-power return after accounting for inflation.",
        hint: "Real = nominal - inflation",
      },
      {
        front: "Common trap: How do bond prices relate to interest rates?",
        back: "Bond prices and interest rates move INVERSELY. When the Fed buys bonds, bond prices rise and interest rates fall; when it sells bonds, prices fall and rates rise.",
        hint: "Inverse relationship",
      },
    ],
  },
];
