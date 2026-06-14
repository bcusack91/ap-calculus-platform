export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "phylogeny-classification",
    cards: [
      {
        front: "What is phylogeny?",
        back: "The evolutionary history and relationships among species or groups of organisms, often inferred from shared characteristics and genetic data and depicted on a phylogenetic tree.",
        hint: "Evolutionary history",
      },
      {
        front: "What does a phylogenetic tree (cladogram) represent?",
        back: "A branching diagram showing inferred evolutionary relationships. Each node represents a common ancestor, and each branch tip represents a taxon (species or group).",
        hint: "Branching = common ancestry",
      },
      {
        front: "What is a clade (monophyletic group)?",
        back: "A group that includes a common ancestor and ALL of its descendants. Valid evolutionary classification aims to recognize only monophyletic groups.",
        hint: "Ancestor + all descendants",
      },
      {
        front: "Distinguish paraphyletic and polyphyletic groups.",
        back: "A paraphyletic group includes a common ancestor but NOT all its descendants (e.g., 'reptiles' excluding birds). A polyphyletic group is assembled from members lacking a recent common ancestor (e.g., grouping by 'has wings').",
        hint: "Para = some descendants left out; poly = no shared recent ancestor",
      },
      {
        front: "What is a shared derived character (synapomorphy)?",
        back: "A trait that is shared by members of a clade and evolved in their most recent common ancestor, used to define and identify that clade. It distinguishes the group from outgroups.",
        hint: "Derived = evolved in the group",
      },
      {
        front: "What is the difference between a shared ancestral and a shared derived character?",
        back: "A shared ancestral character (symplesiomorphy) was present in a distant ancestor and is found broadly; a shared derived character is a newer evolutionary novelty unique to a clade. Only derived characters reliably group taxa.",
        hint: "Ancestral = old/widespread",
      },
      {
        front: "What is an outgroup and why is it used?",
        back: "A taxon outside the group being studied (the ingroup) that diverged earlier. It is used to root the tree and to determine which character states are ancestral versus derived.",
        hint: "Used to root the tree",
      },
      {
        front: "What does it mean for two structures to be homologous vs. analogous?",
        back: "Homologous structures share common ancestry (e.g., bird wing and human arm); analogous structures have similar function from convergent evolution but no common ancestry (e.g., bird wing and insect wing). Only homologies indicate relatedness.",
        hint: "Analogy = convergent evolution",
      },
      {
        front: "What is the principle of parsimony (maximum parsimony) in tree-building?",
        back: "Choosing the phylogenetic tree that requires the fewest total evolutionary changes (character-state changes) to explain the observed data, on the assumption that the simplest explanation is most likely.",
        hint: "Fewest evolutionary changes",
      },
      {
        front: "List Linnaeus's taxonomic hierarchy from broadest to most specific.",
        back: "Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species. A common mnemonic is 'Dear King Philip Came Over For Good Soup.'",
        hint: "DKPCOFGS",
      },
      {
        front: "What are the three domains of life?",
        back: "Bacteria, Archaea, and Eukarya. Archaea and Eukarya are more closely related to each other than either is to Bacteria.",
        hint: "Two prokaryotic, one eukaryotic",
      },
      {
        front: "How does binomial nomenclature work?",
        back: "Each species gets a two-part Latin name: Genus (capitalized) plus specific epithet (lowercase), both italicized, e.g., Homo sapiens. The genus name can be abbreviated (H. sapiens) after first use.",
        hint: "Genus + species, italicized",
      },
      {
        front: "Why can molecular data (DNA/protein sequences) outperform morphology for phylogeny?",
        back: "Molecular data provide large numbers of independent characters and can reveal relationships hidden by convergent evolution or by morphological loss, especially among distantly related or simple organisms.",
        hint: "Many characters, less convergence bias",
      },
      {
        front: "What is a molecular clock?",
        back: "A technique that uses the relatively constant rate of accumulation of neutral mutations in a gene to estimate the time since two lineages diverged. It must be calibrated against the fossil record.",
        hint: "Mutations accumulate ~steadily over time",
      },
    ],
  },
  {
    slug: "wh-silk-roads-mongols",
    cards: [
      {
        front: "What were the Silk Roads?",
        back: "A network of overland and maritime trade routes connecting East Asia, Central Asia, the Middle East, and Europe, facilitating exchange of goods, religions, technologies, and disease from antiquity through the early modern era.",
        hint: "Eurasian trade network",
      },
      {
        front: "Name key goods that traveled west and east along the Silk Roads.",
        back: "Westward: Chinese silk, porcelain, tea, gunpowder, and paper. Eastward: horses, gold, silver, glassware, wool, and spices from South and Southeast Asia. Luxury, high-value goods dominated overland trade.",
        hint: "Silk and porcelain westward",
      },
      {
        front: "What commercial innovations expanded Silk Road trade?",
        back: "The use of caravanserais (roadside inns), camel saddles, paper money and credit (such as Chinese 'flying cash'), and forms of banking/bills of exchange lowered the cost and risk of long-distance trade.",
        hint: "Caravanserais, paper money, camels",
      },
      {
        front: "How did religions spread along the Silk Roads?",
        back: "Buddhism spread from India into Central Asia and China; Islam expanded along trade routes after the 7th century; Christianity (Nestorian) and Manichaeism also diffused. Merchants and missionaries carried beliefs along trade networks.",
        hint: "Buddhism into China; Islam outward",
      },
      {
        front: "What was the Pax Mongolica?",
        back: "The 'Mongol Peace' (roughly 1250s-1350s) when Mongol control of much of Eurasia made the Silk Roads safer and increased long-distance trade, travel, and cultural exchange across the empire.",
        hint: "Mongol-enforced safe trade",
      },
      {
        front: "Who was Genghis Khan (Chinggis Khan)?",
        back: "The leader who united the Mongol tribes around 1206 and began the conquests that created the largest contiguous land empire in history through superior cavalry, organization, and brutal warfare.",
        hint: "United the Mongol tribes, 1206",
      },
      {
        front: "What military and organizational strengths made the Mongols successful?",
        back: "Mounted horse archers with great mobility, the decimal organization of the army (units of 10/100/1,000/10,000), feigned retreats, psychological terror, meritocratic promotion, and adoption of enemies' siege technology.",
        hint: "Cavalry, decimal units, terror",
      },
      {
        front: "Into what khanates did the Mongol Empire divide?",
        back: "The Yuan Dynasty (China), the Ilkhanate (Persia/Middle East), the Chagatai Khanate (Central Asia), and the Golden Horde (Russia/Eastern Europe).",
        hint: "Yuan, Ilkhanate, Chagatai, Golden Horde",
      },
      {
        front: "What was the Yuan Dynasty?",
        back: "The Mongol dynasty established by Kublai Khan that ruled China (1271-1368). Mongols kept ethnic hierarchies favoring themselves and foreigners over Han Chinese for top posts.",
        hint: "Kublai Khan's China",
      },
      {
        front: "How did the Mongols treat conquered peoples and religions?",
        back: "They generally practiced religious tolerance, used local administrators, promoted trade, and protected merchants, while demanding submission, tribute, and harshly punishing resistance.",
        hint: "Tolerant but demanded submission",
      },
      {
        front: "Who was Marco Polo and why is he significant?",
        back: "A Venetian merchant whose account of travels to Kublai Khan's China (late 13th century) gave Europeans a famous, influential description of Asian wealth and the workings of the Mongol realm.",
        hint: "European traveler to Yuan China",
      },
      {
        front: "How did the Silk Roads spread the Black Death?",
        back: "The interconnected Eurasian trade routes, especially under the Pax Mongolica, allowed plague-carrying fleas and rodents to travel with caravans and ships, helping the Black Death reach the Middle East and Europe by the mid-14th century.",
        hint: "Trade routes carried plague",
      },
      {
        front: "What technologies diffused westward partly due to Mongol-era exchange?",
        back: "Gunpowder, the compass, printing, and paper money spread from China toward the Islamic world and Europe, contributing to later military and economic changes.",
        hint: "Gunpowder, compass, printing, paper",
      },
      {
        front: "What caused the decline of the Mongol Empire?",
        back: "Overextension, succession disputes among khanates, assimilation into local cultures, the spread of disease, and rebellions (such as the Ming overthrow of the Yuan in 1368) fragmented Mongol power.",
        hint: "Succession disputes, overextension, rebellion",
      },
    ],
  },
  {
    slug: "aas-civil-rights-movement",
    cards: [
      {
        front: "What was the significance of Brown v. Board of Education (1954)?",
        back: "The Supreme Court unanimously ruled that racial segregation in public schools was unconstitutional, overturning the 'separate but equal' doctrine of Plessy v. Ferguson (1896) and energizing the civil rights movement.",
        hint: "Ended legal school segregation",
      },
      {
        front: "What was the Montgomery Bus Boycott (1955-1956)?",
        back: "A yearlong protest sparked by Rosa Parks's arrest in which Montgomery's Black community boycotted segregated buses. It launched Martin Luther King Jr. to national prominence and ended in desegregation of the buses.",
        hint: "Rosa Parks; King's rise",
      },
      {
        front: "Who was Martin Luther King Jr. and what philosophy did he champion?",
        back: "A Baptist minister and leader of the SCLC who advocated nonviolent direct action and civil disobedience, influenced by Gandhi and the Black church, to challenge segregation and demand civil rights.",
        hint: "Nonviolent direct action",
      },
      {
        front: "What were the sit-ins and the founding of SNCC?",
        back: "The 1960 Greensboro lunch-counter sit-ins by Black college students sparked a wave of nonviolent protests. They led to the founding of the Student Nonviolent Coordinating Committee (SNCC), which organized youth-led activism.",
        hint: "Greensboro 1960; student activism",
      },
      {
        front: "What were the Freedom Rides (1961)?",
        back: "Interracial activists rode interstate buses into the segregated South to test enforcement of Supreme Court rulings banning segregation in interstate travel. They faced violent mob attacks, drawing national attention.",
        hint: "Testing interstate desegregation",
      },
      {
        front: "What happened at the March on Washington (1963)?",
        back: "About 250,000 people gathered for jobs and freedom, where Martin Luther King Jr. delivered his 'I Have a Dream' speech, helping build momentum for federal civil rights legislation.",
        hint: "'I Have a Dream'",
      },
      {
        front: "What did the Civil Rights Act of 1964 accomplish?",
        back: "It outlawed discrimination based on race, color, religion, sex, or national origin; banned segregation in public accommodations; and prohibited employment discrimination, with enforcement powers for the federal government.",
        hint: "Banned discrimination in public life and jobs",
      },
      {
        front: "What did the Voting Rights Act of 1965 accomplish?",
        back: "It outlawed discriminatory voting practices such as literacy tests and provided for federal oversight (preclearance) of voter registration in areas with histories of discrimination, dramatically increasing Black voter registration.",
        hint: "Protected the right to vote",
      },
      {
        front: "What was the significance of Selma and 'Bloody Sunday' (1965)?",
        back: "Marchers for voting rights in Selma, Alabama, were violently attacked by state troopers at the Edmund Pettus Bridge. The televised brutality built public support for the Voting Rights Act of 1965.",
        hint: "Voting rights march; led to VRA",
      },
      {
        front: "How did Malcolm X's views differ from those of Martin Luther King Jr.?",
        back: "Malcolm X, associated with the Nation of Islam, emphasized Black self-determination, self-defense, and Black nationalism rather than integration and nonviolence, though his views broadened after his 1964 pilgrimage to Mecca.",
        hint: "Black nationalism vs. integration",
      },
      {
        front: "What was the Black Power movement?",
        back: "A later phase (mid-1960s onward) emphasizing Black pride, self-determination, economic and political power, and cultural identity. The Black Panther Party combined community programs with armed self-defense.",
        hint: "Pride, self-determination, Panthers",
      },
      {
        front: "What was the role of women in the civil rights movement?",
        back: "Women like Ella Baker, Fannie Lou Hamer, Diane Nash, and Septima Clark were crucial organizers, strategists, and grassroots leaders, even though men often held the most visible public leadership roles.",
        hint: "Baker, Hamer, Nash, Clark",
      },
      {
        front: "What was the Letter from Birmingham Jail (1963)?",
        back: "King's written defense of nonviolent direct action and civil disobedience against unjust laws, addressed to white clergy who urged patience, articulating the moral urgency of the movement.",
        hint: "King's defense of civil disobedience",
      },
      {
        front: "What was the Fair Housing Act of 1968?",
        back: "Legislation passed shortly after King's assassination that prohibited discrimination in the sale, rental, and financing of housing based on race, religion, or national origin.",
        hint: "Banned housing discrimination",
      },
    ],
  },
  {
    slug: "fluid-dynamics",
    cards: [
      {
        front: "What is the definition of pressure in a fluid?",
        back: "Pressure is force per unit area: $P = \\\\frac{F}{A}$, where $F$ is the perpendicular force and $A$ is the area. SI unit is the pascal (Pa = N/m^2).",
        hint: "Force per area",
      },
      {
        front: "State the formula for hydrostatic (gauge) pressure at depth.",
        back: "$P = \\\\rho g h$, where $\\\\rho$ is fluid density, $g$ is gravitational acceleration, and $h$ is depth below the surface. Absolute pressure adds atmospheric pressure: $P_{abs} = P_0 + \\\\rho g h$.",
        hint: "Pressure increases with depth",
      },
      {
        front: "State Pascal's principle.",
        back: "A pressure change applied to an enclosed, incompressible fluid is transmitted undiminished to every part of the fluid and the container walls. This underlies hydraulic lifts: $\\\\frac{F_1}{A_1} = \\\\frac{F_2}{A_2}$.",
        hint: "Pressure transmitted equally; hydraulics",
      },
      {
        front: "State Archimedes' principle and the buoyant force formula.",
        back: "A body immersed in a fluid experiences an upward buoyant force equal to the weight of the displaced fluid: $F_b = \\\\rho_{fluid} g V_{disp}$, where $V_{disp}$ is the volume of fluid displaced.",
        hint: "Buoyant force = weight of displaced fluid",
      },
      {
        front: "What determines whether an object floats or sinks?",
        back: "Compare densities: if the object's average density is less than the fluid's, it floats; if greater, it sinks; if equal, it stays suspended (neutral buoyancy).",
        hint: "Compare object density to fluid density",
      },
      {
        front: "What is the continuity equation for incompressible flow?",
        back: "$A_1 v_1 = A_2 v_2$, where $A$ is cross-sectional area and $v$ is flow speed. It expresses conservation of mass: fluid speeds up where the pipe narrows.",
        hint: "Narrow pipe = faster flow",
      },
      {
        front: "What is the volume flow rate?",
        back: "$Q = A v$, the volume of fluid passing a cross-section per unit time, where $A$ is area and $v$ is speed. SI units are m^3/s; it is constant for incompressible steady flow.",
        hint: "Q = A times v",
      },
      {
        front: "State Bernoulli's equation.",
        back: "$P + \\\\frac{1}{2}\\\\rho v^2 + \\\\rho g y = \\\\text{constant}$ along a streamline, where $P$ is pressure, $\\\\rho$ density, $v$ speed, $g$ gravity, and $y$ height. It expresses energy conservation for ideal fluid flow.",
        hint: "Energy conservation for a flowing fluid",
      },
      {
        front: "What does Bernoulli's principle say about speed and pressure?",
        back: "For a fluid at constant height, where flow speed is high, pressure is low, and vice versa. This explains lift on airplane wings and the flow through constrictions (Venturi effect).",
        hint: "Fast flow = low pressure",
      },
      {
        front: "What assumptions underlie ideal-fluid (Bernoulli) flow?",
        back: "The fluid is incompressible, nonviscous (no internal friction), and the flow is steady (laminar) and irrotational. Real fluids deviate due to viscosity and turbulence.",
        hint: "Incompressible, nonviscous, steady",
      },
      {
        front: "What is viscosity?",
        back: "A fluid's internal resistance to flow, arising from friction between fluid layers. Higher viscosity (e.g., honey) means greater resistance; it causes pressure drops in real pipe flow.",
        hint: "Internal fluid friction",
      },
      {
        front: "What does the Reynolds number indicate?",
        back: "A dimensionless ratio of inertial to viscous forces that predicts flow regime: low values indicate smooth laminar flow, while high values indicate turbulent flow.",
        hint: "Laminar vs. turbulent flow",
      },
      {
        front: "Worked example: A rock weighs 50 N in air and 30 N submerged in water. What is the buoyant force?",
        back: "The buoyant force equals the apparent loss of weight: $F_b = 50 - 30 = 20$ N. This equals the weight of the water displaced by the rock.",
        hint: "Apparent weight loss = buoyant force",
      },
      {
        front: "Common trap: Does buoyant force depend on the object's depth (in an incompressible fluid)?",
        back: "No. As long as the object is fully submerged, buoyant force depends only on displaced volume and fluid density, not on depth. Pressure increases with depth, but net buoyant force stays the same.",
        hint: "Depends on displaced volume, not depth",
      },
    ],
  },
  {
    slug: "coordinate-plane-graphing-prealg",
    cards: [
      {
        front: "What is the coordinate plane?",
        back: "A flat surface formed by two perpendicular number lines: the horizontal x-axis and the vertical y-axis. They meet at the origin, point $(0, 0)$.",
        hint: "Two perpendicular number lines",
      },
      {
        front: "What is an ordered pair, and what does each number mean?",
        back: "An ordered pair $(x, y)$ names a point's location. The first number $x$ is the horizontal distance (right/left) from the origin; the second number $y$ is the vertical distance (up/down).",
        hint: "(x, y): across then up",
      },
      {
        front: "What are the four quadrants and their sign patterns?",
        back: "Quadrant I: $(+, +)$; Quadrant II: $(-, +)$; Quadrant III: $(-, -)$; Quadrant IV: $(+, -)$. They are numbered counterclockwise starting at the upper right.",
        hint: "Counterclockwise from top right",
      },
      {
        front: "How do you plot the point $(3, -2)$?",
        back: "Start at the origin, move 3 units right (positive x), then 2 units down (negative y). Mark that point. It lies in Quadrant IV.",
        hint: "Right 3, down 2",
      },
      {
        front: "What is the origin?",
        back: "The point $(0, 0)$ where the x-axis and y-axis intersect. It is the starting reference point for plotting all other points.",
        hint: "(0, 0), center of the plane",
      },
      {
        front: "Where do points with y-coordinate 0 lie?",
        back: "On the x-axis. Any point of the form $(x, 0)$ sits directly on the horizontal axis.",
        hint: "On the x-axis",
      },
      {
        front: "Where do points with x-coordinate 0 lie?",
        back: "On the y-axis. Any point of the form $(0, y)$ sits directly on the vertical axis.",
        hint: "On the y-axis",
      },
      {
        front: "Common trap: Is $(4, 1)$ the same point as $(1, 4)$?",
        back: "No. Order matters in an ordered pair. $(4, 1)$ means right 4 and up 1, while $(1, 4)$ means right 1 and up 4 -- two different points.",
        hint: "x always comes first",
      },
      {
        front: "How do you find the distance between two points on the same horizontal line?",
        back: "Subtract their x-coordinates and take the absolute value, since the y-values are equal. For $(2, 5)$ and $(9, 5)$: $|9 - 2| = 7$ units.",
        hint: "Subtract x-values, take absolute value",
      },
      {
        front: "How do you graph a line from a table of x and y values?",
        back: "Plot each ordered pair from the table as a point on the coordinate plane, then draw a straight line through the points (extending it with arrows on both ends).",
        hint: "Plot the points, connect them",
      },
      {
        front: "If you move a point 5 units to the left, how do its coordinates change?",
        back: "Subtract 5 from the x-coordinate; the y-coordinate stays the same. For example, $(3, 7)$ becomes $(-2, 7)$.",
        hint: "Left changes x; subtract",
      },
      {
        front: "How do you make a coordinate graph using a real-world table (e.g., time vs. distance)?",
        back: "Let the independent variable (like time) be x and the dependent variable (like distance) be y, plot the data points, and read or connect them to see the relationship.",
        hint: "Independent = x, dependent = y",
      },
      {
        front: "What is the y-coordinate sometimes called?",
        back: "The ordinate (the x-coordinate is the abscissa). On most graphs the y-coordinate shows vertical position, up or down.",
        hint: "Vertical position",
      },
    ],
  },
  {
    slug: "arithmetic-geometric-sequences-alg1",
    cards: [
      {
        front: "What is an arithmetic sequence?",
        back: "A sequence in which each term is found by adding a fixed number (the common difference) to the previous term, e.g., 3, 7, 11, 15, ... with common difference 4.",
        hint: "Add the same number each time",
      },
      {
        front: "What is the common difference, and how do you find it?",
        back: "The constant value $d$ added between consecutive terms of an arithmetic sequence. Find it by subtracting any term from the next: $d = a_n - a_{n-1}$.",
        hint: "Subtract consecutive terms",
      },
      {
        front: "State the explicit formula for the nth term of an arithmetic sequence.",
        back: "$a_n = a_1 + (n - 1)d$, where $a_1$ is the first term, $d$ is the common difference, and $n$ is the term number. Use it to jump directly to any term.",
        hint: "First term plus (n-1) jumps",
      },
      {
        front: "What is a geometric sequence?",
        back: "A sequence in which each term is found by multiplying the previous term by a fixed number (the common ratio), e.g., 2, 6, 18, 54, ... with common ratio 3.",
        hint: "Multiply by the same number each time",
      },
      {
        front: "What is the common ratio, and how do you find it?",
        back: "The constant factor $r$ multiplied between consecutive terms of a geometric sequence. Find it by dividing any term by the previous one: $r = \\\\frac{a_n}{a_{n-1}}$.",
        hint: "Divide consecutive terms",
      },
      {
        front: "State the explicit formula for the nth term of a geometric sequence.",
        back: "$a_n = a_1 \\\\cdot r^{(n-1)}$, where $a_1$ is the first term, $r$ is the common ratio, and $n$ is the term number.",
        hint: "First term times r to the (n-1)",
      },
      {
        front: "How do you tell whether a sequence is arithmetic or geometric?",
        back: "Check the difference between consecutive terms: if the difference is constant, it's arithmetic. Check the ratio: if the ratio is constant, it's geometric. If neither, it's neither.",
        hint: "Constant difference vs. constant ratio",
      },
      {
        front: "Worked example: Find the 10th term of the arithmetic sequence 5, 8, 11, ...",
        back: "Here $a_1 = 5$ and $d = 3$. Using $a_n = a_1 + (n-1)d$: $a_{10} = 5 + (10-1)(3) = 5 + 27 = 32$.",
        hint: "a1=5, d=3",
      },
      {
        front: "Worked example: Find the 5th term of the geometric sequence 4, 12, 36, ...",
        back: "Here $a_1 = 4$ and $r = 3$. Using $a_n = a_1 \\\\cdot r^{(n-1)}$: $a_5 = 4 \\\\cdot 3^{(5-1)} = 4 \\\\cdot 81 = 324$.",
        hint: "a1=4, r=3",
      },
      {
        front: "What does a recursive formula for a sequence give you?",
        back: "It defines each term using the previous term(s). Arithmetic: $a_n = a_{n-1} + d$. Geometric: $a_n = a_{n-1} \\\\cdot r$. You must also state the first term.",
        hint: "Defines a term from the one before it",
      },
      {
        front: "Common trap: What happens to a geometric sequence when $-1 < r < 1$?",
        back: "The terms shrink toward zero (the sequence decreases in absolute value), since multiplying by a fraction each time makes terms smaller, e.g., 16, 8, 4, 2, ... with $r = \\\\frac{1}{2}$.",
        hint: "Fractional ratio shrinks terms",
      },
      {
        front: "How are arithmetic and geometric sequences related to linear and exponential functions?",
        back: "Arithmetic sequences model linear growth (constant difference, like a constant slope); geometric sequences model exponential growth or decay (constant ratio, like a constant percentage change).",
        hint: "Arithmetic = linear, geometric = exponential",
      },
      {
        front: "Worked example: Find the common difference if $a_1 = 10$ and $a_4 = 25$.",
        back: "Use $a_n = a_1 + (n-1)d$: $25 = 10 + (4-1)d$, so $15 = 3d$ and $d = 5$.",
        hint: "Plug into the explicit formula and solve for d",
      },
    ],
  },
  {
    slug: "wh-world-wars",
    cards: [
      {
        front: "What were the long-term causes of World War I (MAIN)?",
        back: "Militarism (arms races), Alliances (rival blocs), Imperialism (colonial competition), and Nationalism. These tensions made Europe a 'powder keg' before 1914.",
        hint: "M-A-I-N",
      },
      {
        front: "What event triggered World War I?",
        back: "The assassination of Archduke Franz Ferdinand of Austria-Hungary in Sarajevo in June 1914 by a Bosnian Serb nationalist, which set off the alliance system and led to war.",
        hint: "Assassination in Sarajevo, 1914",
      },
      {
        front: "Who were the main powers on each side in World War I?",
        back: "The Allied (Entente) Powers included Britain, France, Russia, and later the United States. The Central Powers included Germany, Austria-Hungary, and the Ottoman Empire.",
        hint: "Allies vs. Central Powers",
      },
      {
        front: "What characterized warfare on the Western Front in WWI?",
        back: "Trench warfare and stalemate, with new technologies (machine guns, poison gas, artillery, tanks, airplanes) producing massive casualties for little territorial gain.",
        hint: "Trenches, machine guns, gas, stalemate",
      },
      {
        front: "What did the Treaty of Versailles (1919) impose on Germany?",
        back: "It assigned war guilt to Germany, demanded heavy reparations, drastically limited its military, and stripped it of territory and colonies. Resentment over these terms helped fuel later instability.",
        hint: "War guilt, reparations, lost territory",
      },
      {
        front: "What were major consequences of World War I?",
        back: "Collapse of the German, Austro-Hungarian, Russian, and Ottoman empires; the Russian Revolution (1917); creation of new nation-states; the League of Nations; and economic and social upheaval.",
        hint: "Empires fall; new states; League formed",
      },
      {
        front: "What conditions enabled the rise of fascism and Nazism between the wars?",
        back: "The harsh peace terms, the Great Depression, economic hardship, fear of communism, and weak democratic governments allowed authoritarian leaders like Hitler and Mussolini to gain power.",
        hint: "Depression, resentment, weak democracies",
      },
      {
        front: "What was the policy of appeasement?",
        back: "The British and French strategy of conceding to Hitler's demands (e.g., the 1938 Munich Agreement allowing annexation of the Sudetenland) to avoid war, which instead emboldened further aggression.",
        hint: "Conceding to Hitler to avoid war",
      },
      {
        front: "What event began World War II in Europe?",
        back: "Germany's invasion of Poland on September 1, 1939, which led Britain and France to declare war on Germany two days later.",
        hint: "Invasion of Poland, 1939",
      },
      {
        front: "Who were the Axis and Allied powers in World War II?",
        back: "The Axis Powers were Germany, Italy, and Japan. The major Allied Powers were Britain, France, the Soviet Union, the United States, and China.",
        hint: "Axis: Germany, Italy, Japan",
      },
      {
        front: "What brought the United States into World War II?",
        back: "Japan's surprise attack on Pearl Harbor on December 7, 1941, after which the U.S. declared war on Japan; Germany and Italy then declared war on the U.S.",
        hint: "Pearl Harbor, December 1941",
      },
      {
        front: "What was the Holocaust?",
        back: "The systematic, state-sponsored genocide by Nazi Germany of roughly six million Jews, along with millions of others (Roma, disabled people, political prisoners, and more), carried out in ghettos and death camps.",
        hint: "Nazi genocide of six million Jews",
      },
      {
        front: "What were the major turning points of World War II?",
        back: "Stalingrad (1942-43) halted Germany in the East; D-Day (June 1944) opened a Western front in France; Midway (1942) turned the Pacific war toward the Allies.",
        hint: "Stalingrad, D-Day, Midway",
      },
      {
        front: "How did World War II end and what were its consequences?",
        back: "Germany surrendered in May 1945; Japan surrendered after the U.S. dropped atomic bombs on Hiroshima and Nagasaki in August 1945. The war killed tens of millions, led to the United Nations, decolonization, and the Cold War between the U.S. and USSR.",
        hint: "Atomic bombs; UN; Cold War begins",
      },
    ],
  },
  {
    slug: "geometric-sequences-series",
    cards: [
      {
        front: "What is a geometric sequence?",
        back: "A sequence in which each term after the first is obtained by multiplying the previous term by a constant called the common ratio, $r$. Example: 3, 6, 12, 24, ... with $r = 2$.",
        hint: "Constant ratio between terms",
      },
      {
        front: "How do you find the common ratio $r$?",
        back: "Divide any term by the term before it: $r = \\\\frac{a_{n}}{a_{n-1}}$. If this ratio is constant for all consecutive pairs, the sequence is geometric.",
        hint: "Divide consecutive terms",
      },
      {
        front: "State the formula for the nth term of a geometric sequence.",
        back: "$a_n = a_1 r^{(n-1)}$, where $a_1$ is the first term, $r$ is the common ratio, and $n$ is the term number.",
        hint: "First term times r^(n-1)",
      },
      {
        front: "State the formula for the sum of the first n terms of a geometric series.",
        back: "$S_n = a_1 \\\\frac{1 - r^n}{1 - r}$ for $r \\\\neq 1$, where $a_1$ is the first term, $r$ is the common ratio, and $n$ is the number of terms.",
        hint: "Finite geometric sum",
      },
      {
        front: "When does an infinite geometric series converge, and to what sum?",
        back: "It converges only when $|r| < 1$, and then the sum is $S = \\\\frac{a_1}{1 - r}$. If $|r| \\\\geq 1$, the series diverges (has no finite sum).",
        hint: "Converges only if |r| < 1",
      },
      {
        front: "Worked example: Find the 8th term of 5, 10, 20, ...",
        back: "Here $a_1 = 5$ and $r = 2$. Using $a_n = a_1 r^{(n-1)}$: $a_8 = 5 \\\\cdot 2^{7} = 5 \\\\cdot 128 = 640$.",
        hint: "a1=5, r=2, n=8",
      },
      {
        front: "Worked example: Find the sum of the first 6 terms of 3, 6, 12, ...",
        back: "Here $a_1 = 3$, $r = 2$, $n = 6$. $S_6 = 3 \\\\cdot \\\\frac{1 - 2^6}{1 - 2} = 3 \\\\cdot \\\\frac{1 - 64}{-1} = 3 \\\\cdot 63 = 189$.",
        hint: "Use the finite sum formula",
      },
      {
        front: "Worked example: Find the sum of the infinite series $8 + 4 + 2 + 1 + \\\\dots$",
        back: "Here $a_1 = 8$ and $r = \\\\frac{1}{2}$, and $|r| < 1$, so it converges. $S = \\\\frac{8}{1 - \\\\frac{1}{2}} = \\\\frac{8}{\\\\frac{1}{2}} = 16$.",
        hint: "a1=8, r=1/2",
      },
      {
        front: "What is the difference between a geometric sequence and a geometric series?",
        back: "A sequence is the ordered list of terms ($a_1, a_2, a_3, \\\\dots$); a series is the sum of those terms ($a_1 + a_2 + a_3 + \\\\dots$).",
        hint: "List vs. sum",
      },
      {
        front: "How can you find $a_1$ and $r$ given two non-consecutive terms?",
        back: "Set up two equations with $a_n = a_1 r^{(n-1)}$ and divide them to eliminate $a_1$ and solve for $r$, then substitute back to find $a_1$. For example, given $a_2$ and $a_5$, $\\\\frac{a_5}{a_2} = r^3$.",
        hint: "Divide the equations to isolate r",
      },
      {
        front: "Common trap: Can you use the infinite-sum formula when $|r| > 1$?",
        back: "No. The formula $S = \\\\frac{a_1}{1-r}$ applies only when $|r| < 1$. When $|r| > 1$ the terms grow without bound and the series diverges.",
        hint: "Only for |r| < 1",
      },
      {
        front: "How do you write a geometric series in summation (sigma) notation?",
        back: "$\\\\sum_{k=1}^{n} a_1 r^{(k-1)}$, where $k$ is the index, $a_1$ is the first term, and $r$ is the common ratio. The lower and upper limits set the first and last terms.",
        hint: "Sigma with a1 r^(k-1)",
      },
      {
        front: "What is the geometric mean of two positive numbers, and how does it relate to geometric sequences?",
        back: "The geometric mean of $a$ and $b$ is $\\\\sqrt{ab}$. In a geometric sequence, each term is the geometric mean of its neighbors: $a_n = \\\\sqrt{a_{n-1} \\\\cdot a_{n+1}}$.",
        hint: "Square root of the product",
      },
      {
        front: "How are geometric series used in real-world applications?",
        back: "They model compound interest, population growth, radioactive decay, and repeated proportional change. For instance, repeated annual growth at rate $r$ forms a geometric pattern.",
        hint: "Compound interest, growth, decay",
      },
    ],
  },
];
