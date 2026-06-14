export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "csp-safe-computing",
    cards: [
      {
        front: "What is Personally Identifiable Information (PII)?",
        back: "PII is information that can be used to identify, locate, or contact a specific individual, such as name, address, Social Security number, biometric data, or geolocation. Combining seemingly harmless pieces of data can also reveal identity.",
        hint: "Identity-revealing data",
      },
      {
        front: "Why is storing PII both useful and risky?",
        back: "Useful: it lets sites personalize experiences and provide convenient services. Risky: if exposed it enables identity theft, stalking, fraud, or discrimination, so it must be protected.",
        hint: "Convenience vs. exposure",
      },
      {
        front: "Define a 'computer virus' vs. 'malware' (general term).",
        back: "Malware is any software intended to damage, disrupt, or gain unauthorized access to a system. A virus is one type of malware that attaches to programs/files and spreads when those are run.",
        hint: "Virus is a subset",
      },
      {
        front: "What is phishing?",
        back: "Phishing is a social-engineering attack that uses fake but legitimate-looking emails, messages, or websites to trick users into revealing credentials or personal data, or into installing malware.",
        hint: "Trickery, not code",
      },
      {
        front: "What is a 'keylogger'?",
        back: "A keylogger is malware (or hardware) that records every keystroke a user types, capturing passwords, messages, and other sensitive input without the user's knowledge.",
        hint: "Records keystrokes",
      },
      {
        front: "Define symmetric encryption and its key requirement.",
        back: "Symmetric encryption uses a single shared key to both encrypt and decrypt data. Its main challenge is securely sharing that one key between sender and receiver.",
        hint: "One key, shared secret",
      },
      {
        front: "Define asymmetric (public key) encryption.",
        back: "Asymmetric encryption uses a key pair: a public key (shared openly) to encrypt and a private key (kept secret) to decrypt. It solves the key-sharing problem of symmetric encryption.",
        hint: "Public to lock, private to unlock",
      },
      {
        front: "What is a 'digital certificate' and who issues it?",
        back: "A digital certificate verifies that a public key belongs to a specific entity (e.g., a website). It is issued by a trusted Certificate Authority (CA) and underlies HTTPS trust.",
        hint: "Issued by a CA",
      },
      {
        front: "What makes a strong password, and what is multifactor authentication (MFA)?",
        back: "Strong passwords are long, mixed-character, and unique per site. MFA requires two or more independent factors (something you know, have, or are), so a stolen password alone is not enough.",
        hint: "Length + uniqueness + extra factor",
      },
      {
        front: "What is a 'rogue access point'?",
        back: "A rogue access point is a wireless access point set up by an attacker (or unknowingly) that intercepts data, often mimicking a legitimate network so users connect and expose their traffic.",
        hint: "Fake Wi-Fi trap",
      },
      {
        front: "Why are public Wi-Fi networks a security concern?",
        back: "On unsecured public Wi-Fi, attackers can intercept unencrypted traffic or run man-in-the-middle attacks. Using HTTPS sites, a VPN, and avoiding sensitive logins reduces the risk.",
        hint: "Eavesdropping risk",
      },
      {
        front: "Trap: Does deleting a file or post fully remove it?",
        back: "No. Deleted data may persist in backups, caches, archives, or others' copies/screenshots. Once information is shared online, you should assume it is permanent and uncontrollable.",
        hint: "The internet remembers",
      },
      {
        front: "What is the principle behind keeping software updated?",
        back: "Updates and patches fix known security vulnerabilities. Running outdated software leaves exploitable holes attackers can use, so prompt patching is a core safe-computing practice.",
        hint: "Patch the holes",
      },
    ],
  },
  {
    slug: "csa-recursive-methods",
    cards: [
      {
        front: "What is a recursive method?",
        back: "A recursive method is a method that calls itself to solve smaller instances of a problem. It must have at least one base case to stop and a recursive case that moves toward that base case.",
        hint: "A method calling itself",
      },
      {
        front: "What are the two required parts of any correct recursion?",
        back: "(1) A base case that returns a result without further recursion, and (2) a recursive case that calls the method with arguments progressing toward the base case.",
        hint: "Stop + shrink",
      },
      {
        front: "What happens if recursion lacks a reachable base case?",
        back: "It recurses infinitely, pushing call frames until the call stack overflows, producing a StackOverflowError at runtime.",
        hint: "StackOverflowError",
      },
      {
        front: "Trace: factorial via recursion. What does fact(4) return?",
        back: "24. With base case fact(0)=1 and fact(n)=n*fact(n-1): fact(4)=4*3*2*1*1 = 24.",
        hint: "n * fact(n-1)",
      },
      {
        front: "Write the recursive definition of factorial.",
        back: "public int fact(int n) { if (n == 0) return 1; return n * fact(n - 1); } The base case is n==0; each call reduces n by 1.",
        hint: "Base at 0",
      },
      {
        front: "What is the 'call stack' and how does recursion use it?",
        back: "The call stack stores activation records (frames) for active method calls. Each recursive call adds a frame holding its own parameters and local variables; returns pop frames in reverse order (LIFO).",
        hint: "LIFO frames",
      },
      {
        front: "How does recursion relate to a loop?",
        back: "Any recursion can be rewritten as iteration and vice versa. Recursion uses the call stack to track state; loops use explicit variables. Recursion is often cleaner for self-similar/tree-structured problems.",
        hint: "Equivalent expressiveness",
      },
      {
        front: "Common trap: returning vs. printing in recursion.",
        back: "If you need the recursive result for further computation, you must return it (and the caller must use the returned value). Printing inside the method does not pass a value back up.",
        hint: "Use the return value",
      },
      {
        front: "Trace mystery(4): if (n<=0) return; mystery(n-1); System.out.print(n);",
        back: "Prints '1234'. Recursion descends first (calls reach base before any printing), then prints n on the way back up: 1, 2, 3, 4.",
        hint: "Print after the call = ascending",
      },
      {
        front: "Trace mystery(4): if (n<=0) return; System.out.print(n); mystery(n-1);",
        back: "Prints '4321'. Because printing happens before the recursive call, values print on the way down: 4, 3, 2, 1.",
        hint: "Print before the call = descending",
      },
      {
        front: "What is the recursive structure of computing the sum 1+2+...+n?",
        back: "sum(n) returns 0 when n<=0 (base case), else returns n + sum(n-1). For example sum(3) = 3 + 2 + 1 + 0 = 6.",
        hint: "n + sum(n-1)",
      },
      {
        front: "Why are recursive binary search and merge sort efficient?",
        back: "They repeatedly split the problem in half. Binary search is $O(\\\\log n)$; merge sort is $O(n \\\\log n)$. Each recursion level handles a smaller subproblem, reducing total work versus linear scanning.",
        hint: "Divide and conquer",
      },
      {
        front: "On the AP exam, what must you do when 'tracing' a recursive method?",
        back: "Carefully follow each call, note parameter values, find where the base case stops the recursion, then resolve returns from the deepest call back up to the original. Track the order of any output.",
        hint: "Down then back up",
      },
    ],
  },
  {
    slug: "macro-aggregate-demand-supply",
    cards: [
      {
        front: "What is Aggregate Demand (AD)?",
        back: "AD is the total quantity of real output (real GDP) that all buyers in an economy demand at each price level. Its components are C + I + G + (X - M): consumption, investment, government spending, and net exports.",
        hint: "C + I + G + Xn",
      },
      {
        front: "Why does the AD curve slope downward?",
        back: "Three effects: the wealth (real-balances) effect, the interest-rate effect, and the net-exports effect. Higher price levels reduce real wealth, raise interest rates, and make exports costlier, lowering quantity of output demanded.",
        hint: "Wealth, interest rate, net exports",
      },
      {
        front: "List factors that shift AD to the right (increase).",
        back: "Increases in consumer/business confidence, lower taxes, more government spending, lower interest rates, a weaker domestic currency (boosting net exports), or expectations of higher future income.",
        hint: "Changes in C, I, G, or Xn",
      },
      {
        front: "What is Short-Run Aggregate Supply (SRAS)?",
        back: "SRAS shows total real output firms produce at each price level when at least one input price (often nominal wages) is sticky/fixed. It slopes upward because higher prices raise profits while costs lag.",
        hint: "Upward sloping; sticky wages",
      },
      {
        front: "List factors that shift SRAS.",
        back: "Changes in input/resource prices, nominal wages, productivity, business taxes/subsidies, and supply shocks (e.g., oil prices). Higher input costs shift SRAS left; lower costs shift it right.",
        hint: "Input costs, productivity, shocks",
      },
      {
        front: "What is Long-Run Aggregate Supply (LRAS)?",
        back: "LRAS is a vertical line at the full-employment (potential) output level, where all prices and wages are flexible. Output here depends only on resources, technology, and productivity, not the price level.",
        hint: "Vertical at potential GDP",
      },
      {
        front: "What shifts LRAS?",
        back: "Anything that changes potential output: changes in the quantity/quality of labor, capital stock, natural resources, or technology and productivity. Same factors that shift the PPF outward.",
        hint: "Determinants of long-run growth",
      },
      {
        front: "Define a recessionary gap.",
        back: "A recessionary (negative output) gap occurs when short-run equilibrium real GDP is below potential GDP (LRAS), associated with high unemployment.",
        hint: "Below potential GDP",
      },
      {
        front: "Define an inflationary gap.",
        back: "An inflationary (positive output) gap occurs when short-run equilibrium real GDP exceeds potential GDP, with unemployment below the natural rate and upward pressure on prices.",
        hint: "Above potential GDP",
      },
      {
        front: "How does the economy self-correct from a recessionary gap (long run)?",
        back: "With output below potential, high unemployment pushes nominal wages/input prices down, shifting SRAS right until output returns to LRAS at a lower price level.",
        hint: "Wages fall, SRAS shifts right",
      },
      {
        front: "How does the economy self-correct from an inflationary gap?",
        back: "With output above potential, tight labor markets push nominal wages/input prices up, shifting SRAS left until output returns to LRAS at a higher price level.",
        hint: "Wages rise, SRAS shifts left",
      },
      {
        front: "Worked example: AD rises in the short run with a recessionary gap. What happens?",
        back: "Short-run equilibrium moves up along SRAS: real GDP rises and the price level rises. This can close a recessionary gap, increasing output and reducing unemployment.",
        hint: "Higher GDP and higher price level",
      },
      {
        front: "Trap: What does a negative supply shock (e.g., oil price spike) do?",
        back: "It shifts SRAS left, causing stagflation: the price level rises while real GDP falls and unemployment rises simultaneously.",
        hint: "Stagflation: prices up, output down",
      },
    ],
  },
  {
    slug: "csp-fault-tolerance-security",
    cards: [
      {
        front: "What does 'fault tolerant' mean for a computing system?",
        back: "A fault-tolerant system continues operating correctly even when some components fail. The Internet is fault tolerant because data can be rerouted around failed connections.",
        hint: "Keeps working despite failures",
      },
      {
        front: "How does redundancy improve fault tolerance?",
        back: "Redundancy provides multiple, duplicate paths or copies (e.g., several routes between two devices). If one path fails, data can travel another way, preventing total failure.",
        hint: "Backup paths/copies",
      },
      {
        front: "Why is the Internet's design fault tolerant?",
        back: "It has redundant connections forming many possible paths between devices. Packets can be rerouted dynamically, so the loss of any single link or router does not break communication.",
        hint: "Redundant routing",
      },
      {
        front: "What is a DDoS (Distributed Denial of Service) attack?",
        back: "A DDoS attack floods a target server or network with so much traffic from many compromised devices that legitimate users cannot access it, overwhelming its resources.",
        hint: "Flood from many machines",
      },
      {
        front: "What is a computer virus or malware in the security context?",
        back: "Malware is software intended to harm or take control of a device. A virus is malware that attaches to files/programs and spreads when those are executed, often without user awareness.",
        hint: "Harmful software",
      },
      {
        front: "What is encryption and why does it matter for security?",
        back: "Encryption scrambles data into ciphertext readable only with the correct key, protecting confidentiality. Even if data is intercepted, attackers cannot read it without the decryption key.",
        hint: "Scramble for confidentiality",
      },
      {
        front: "Contrast symmetric vs. public key encryption.",
        back: "Symmetric uses one shared key for both encrypting and decrypting. Public key (asymmetric) uses a public key to encrypt and a separate private key to decrypt, removing the need to share a secret key.",
        hint: "One key vs. key pair",
      },
      {
        front: "How does HTTPS keep web browsing more secure?",
        back: "HTTPS encrypts data between browser and server using SSL/TLS and certificates, protecting against eavesdropping and tampering, so sensitive data like passwords stays confidential in transit.",
        hint: "Encrypted HTTP",
      },
      {
        front: "What is multifactor authentication (MFA)?",
        back: "MFA requires two or more verification factors (something you know, have, or are) before granting access, so a stolen password alone cannot compromise the account.",
        hint: "Two+ independent factors",
      },
      {
        front: "What is a 'man-in-the-middle' attack?",
        back: "An attacker secretly intercepts and possibly alters communication between two parties who believe they are talking directly. Encryption (HTTPS) helps prevent it.",
        hint: "Secret interceptor",
      },
      {
        front: "Why is a firewall useful?",
        back: "A firewall monitors and filters incoming and outgoing network traffic based on rules, blocking unauthorized access while allowing legitimate communication.",
        hint: "Traffic filter/gatekeeper",
      },
      {
        front: "Trap: Does redundancy guarantee security against attacks?",
        back: "No. Redundancy improves reliability and fault tolerance (availability), but it does not protect confidentiality or stop attacks like phishing or malware. Security needs encryption, authentication, and safe practices too.",
        hint: "Availability != confidentiality",
      },
      {
        front: "What is a 'rogue access point' threat?",
        back: "A rogue access point is an unauthorized wireless access point an attacker uses to intercept traffic, often mimicking a trusted network so victims connect and expose their data.",
        hint: "Fake trusted Wi-Fi",
      },
    ],
  },
  {
    slug: "csp-binary-data",
    cards: [
      {
        front: "What is a bit and a byte?",
        back: "A bit is the smallest unit of data, a single binary digit (0 or 1). A byte is a group of 8 bits and can represent $2^8 = 256$ distinct values.",
        hint: "1 bit; 8 bits = 1 byte",
      },
      {
        front: "Why do computers use binary (base 2)?",
        back: "Hardware represents data with two-state electronic signals (on/off, high/low voltage). Binary maps directly to these states, making it reliable and simple to build and process.",
        hint: "Two physical states",
      },
      {
        front: "How many values can n bits represent?",
        back: "$2^n$ values. For example, 4 bits give $2^4 = 16$ values (0 to 15) and 8 bits give 256 values.",
        hint: "2 to the n",
      },
      {
        front: "Convert binary 1011 to decimal.",
        back: "11. Place values from right: $1\\\\cdot8 + 0\\\\cdot4 + 1\\\\cdot2 + 1\\\\cdot1 = 8 + 0 + 2 + 1 = 11$.",
        hint: "8 4 2 1 place values",
      },
      {
        front: "Convert decimal 19 to binary.",
        back: "10011. Subtract largest powers of 2: 16 (16<=19, remainder 3), then 2 and 1: 16+2+1 = 10011.",
        hint: "16 + 2 + 1",
      },
      {
        front: "What does 'analog' vs. 'digital' mean?",
        back: "Analog data is continuous with infinitely many possible values (e.g., a sound wave). Digital data is discrete, represented with a finite set of values (bits). Real-world signals are sampled to become digital.",
        hint: "Continuous vs. discrete",
      },
      {
        front: "How is text (like 'A') stored as binary?",
        back: "Each character maps to a number via an encoding such as ASCII or Unicode; that number is stored in binary. For example, 'A' is 65 in ASCII = 01000001.",
        hint: "Character codes (ASCII/Unicode)",
      },
      {
        front: "What is the difference between lossless and lossy compression?",
        back: "Lossless compression reduces size with no data loss; the original can be perfectly restored (e.g., PNG, ZIP). Lossy compression discards some data for smaller files, losing detail permanently (e.g., JPEG, MP3).",
        hint: "Perfectly restorable vs. not",
      },
      {
        front: "Why is data compression useful?",
        back: "It reduces the number of bits needed to store or transmit data, saving storage space and bandwidth and speeding up transfers.",
        hint: "Fewer bits = faster/cheaper",
      },
      {
        front: "How are colors represented digitally (RGB)?",
        back: "A pixel's color is stored as red, green, and blue intensities, often 8 bits (0-255) each, for 24 bits total. Combining values produces about 16.7 million colors.",
        hint: "8 bits per R, G, B",
      },
      {
        front: "What does it mean that a fixed number of bits can cause overflow or rounding errors?",
        back: "With limited bits, numbers too large to store cause overflow, and real numbers with infinite/long expansions get rounded. This is why computations can be imprecise.",
        hint: "Limited bits = limits",
      },
      {
        front: "Trap: How many distinct values do 6 bits represent, and what is the largest?",
        back: "6 bits represent $2^6 = 64$ values, from 0 to 63 (the largest is 63, which is 111111). The count is 64 but the maximum value is one less.",
        hint: "Count vs. max value off by one",
      },
      {
        front: "Why might different programs read the same bits differently?",
        back: "Bits have no inherent meaning; their interpretation depends on context (the encoding/format used). The same sequence could be a number, character, color, or instruction depending on how software interprets it.",
        hint: "Meaning depends on interpretation",
      },
    ],
  },
  {
    slug: "apes-air-pollution",
    cards: [
      {
        front: "What is the difference between primary and secondary air pollutants?",
        back: "Primary pollutants are emitted directly from a source (e.g., CO, SO2, NOx, particulates). Secondary pollutants form in the atmosphere from chemical reactions of primary pollutants (e.g., ground-level ozone, smog).",
        hint: "Emitted directly vs. formed in air",
      },
      {
        front: "Name the six 'criteria' air pollutants regulated by the U.S. Clean Air Act.",
        back: "Particulate matter (PM), ground-level ozone (O3), carbon monoxide (CO), sulfur dioxide (SO2), nitrogen oxides (NOx), and lead (Pb).",
        hint: "PM, O3, CO, SO2, NOx, Pb",
      },
      {
        front: "How does photochemical smog form?",
        back: "Sunlight drives reactions among NOx and volatile organic compounds (VOCs) from vehicle exhaust, producing ground-level ozone and other oxidants. It worsens on hot, sunny days in car-heavy cities.",
        hint: "NOx + VOCs + sunlight",
      },
      {
        front: "What causes acid rain and what are its effects?",
        back: "SO2 and NOx (largely from burning fossil fuels) react with water vapor to form sulfuric and nitric acids, lowering precipitation pH. It acidifies lakes/soils, harms aquatic life and forests, and corrodes structures.",
        hint: "SO2 and NOx -> acids",
      },
      {
        front: "What is a thermal (temperature) inversion and why does it worsen pollution?",
        back: "A thermal inversion occurs when a warm air layer traps cooler air below it, preventing the normal rise and dispersion of pollutants. Pollutants accumulate near the ground, raising concentrations.",
        hint: "Warm air caps cool air, traps pollution",
      },
      {
        front: "Why is ground-level ozone harmful while stratospheric ozone is beneficial?",
        back: "Ground-level (tropospheric) ozone is a respiratory irritant and key smog component ('bad ozone'). Stratospheric ozone forms a layer that blocks harmful UV radiation ('good ozone').",
        hint: "Bad below, good above",
      },
      {
        front: "What is particulate matter (PM2.5 vs. PM10) and why is size important?",
        back: "PM is tiny solid/liquid particles suspended in air. PM10 is <=10 micrometers; PM2.5 is <=2.5 micrometers. Smaller particles (PM2.5) penetrate deep into lungs and bloodstream, causing more severe health effects.",
        hint: "Smaller penetrates deeper",
      },
      {
        front: "How does carbon monoxide (CO) harm humans?",
        back: "CO binds to hemoglobin much more strongly than oxygen, reducing the blood's oxygen-carrying capacity. This causes headaches, dizziness, and at high levels death. It comes from incomplete combustion.",
        hint: "Blocks oxygen on hemoglobin",
      },
      {
        front: "What is indoor air pollution and name common sources.",
        back: "Pollution within buildings, often more concentrated than outdoor. Sources include radon, asbestos, formaldehyde (VOCs from furnishings), tobacco smoke, mold, and CO from faulty heaters/stoves.",
        hint: "Radon, VOCs, smoke, CO",
      },
      {
        front: "What is a catalytic converter and what does it do?",
        back: "A catalytic converter in vehicle exhaust systems converts harmful gases (CO, NOx, unburned hydrocarbons) into less harmful CO2, N2, and water, reducing tailpipe emissions.",
        hint: "Reduces tailpipe emissions",
      },
      {
        front: "How do scrubbers and electrostatic precipitators reduce industrial emissions?",
        back: "Scrubbers spray a liquid (often limewater) into exhaust to remove SO2 and particulates. Electrostatic precipitators use charged plates to attract and capture particulate matter from smokestack gases.",
        hint: "Wet capture vs. charged plates",
      },
      {
        front: "Trap: Why does indoor radon pose a serious risk?",
        back: "Radon is a colorless, odorless radioactive gas from uranium decay in soil/rock that seeps into buildings. It is the second leading cause of lung cancer (after smoking) and is undetectable without testing.",
        hint: "Invisible radioactive gas, lung cancer",
      },
      {
        front: "What does the Clean Air Act do?",
        back: "The U.S. Clean Air Act authorizes the EPA to set National Ambient Air Quality Standards (NAAQS) for criteria pollutants and to regulate emissions, dramatically reducing many pollutants since 1970.",
        hint: "EPA sets NAAQS",
      },
    ],
  },
  {
    slug: "measures-of-spread",
    cards: [
      {
        front: "What does a 'measure of spread' (variability) describe?",
        back: "It describes how much the values in a data set differ from each other or from the center. Common measures are range, interquartile range (IQR), variance, and standard deviation.",
        hint: "How scattered the data is",
      },
      {
        front: "Define the range of a data set.",
        back: "Range = maximum value - minimum value. It is simple but sensitive to outliers since it depends only on the two extreme values.",
        hint: "Max minus min",
      },
      {
        front: "What is the interquartile range (IQR) and how is it found?",
        back: "$IQR = Q_3 - Q_1$, the spread of the middle 50% of the data. $Q_1$ is the median of the lower half and $Q_3$ the median of the upper half. IQR is resistant to outliers.",
        hint: "Q3 minus Q1; middle 50%",
      },
      {
        front: "Give the formula for sample standard deviation and define its variables.",
        back: "$s = \\\\sqrt{\\\\frac{\\\\sum (x_i - \\\\bar{x})^2}{n-1}}$, where $x_i$ are data values, $\\\\bar{x}$ is the sample mean, and $n$ is the sample size. It measures typical distance of values from the mean.",
        hint: "Root of mean squared deviation; divide by n-1",
      },
      {
        front: "What is variance and how does it relate to standard deviation?",
        back: "Variance is the average squared deviation from the mean ($s^2$ for a sample). Standard deviation is its square root, returning to the original units of the data.",
        hint: "Variance = (std dev) squared",
      },
      {
        front: "Why divide by n-1 instead of n for sample standard deviation?",
        back: "Dividing by n-1 (Bessel's correction) corrects bias so the sample variance is an unbiased estimate of the population variance. The n-1 is the 'degrees of freedom.'",
        hint: "Unbiased estimate; degrees of freedom",
      },
      {
        front: "How is an outlier identified using the 1.5 x IQR rule?",
        back: "A value is an outlier if it is below $Q_1 - 1.5 \\\\times IQR$ or above $Q_3 + 1.5 \\\\times IQR$. These bounds are called the fences.",
        hint: "1.5 IQR beyond the quartiles",
      },
      {
        front: "Which measures of spread are resistant to outliers, and which are not?",
        back: "Resistant: IQR (and the median for center). Not resistant: range, variance, and standard deviation, which are pulled by extreme values.",
        hint: "IQR resistant; range and SD not",
      },
      {
        front: "When should you report IQR vs. standard deviation?",
        back: "Use IQR (with the median) for skewed distributions or data with outliers; use standard deviation (with the mean) for roughly symmetric distributions without strong outliers.",
        hint: "Match center: median->IQR, mean->SD",
      },
      {
        front: "How does adding a constant c to every value affect spread?",
        back: "Adding a constant shifts all values but does NOT change spread: range, IQR, variance, and standard deviation stay the same.",
        hint: "Shifting leaves spread unchanged",
      },
      {
        front: "How does multiplying every value by a constant c affect standard deviation?",
        back: "It multiplies the standard deviation, range, and IQR by $|c|$, and multiplies the variance by $c^2$. Scaling stretches the spread proportionally.",
        hint: "Multiplies SD by |c|; variance by c squared",
      },
      {
        front: "Worked example: Find the standard deviation of 2, 4, 6 (sample).",
        back: "Mean $\\\\bar{x}=4$. Squared deviations: $(2-4)^2+(4-4)^2+(6-4)^2 = 4+0+4 = 8$. Divide by $n-1=2$: variance $=4$, so $s = 2$.",
        hint: "Mean 4, variance 4",
      },
      {
        front: "Trap: A data set has the same range as another. Do they have the same spread overall?",
        back: "Not necessarily. Range uses only the two extremes; two data sets can share a range but differ greatly in how values cluster, giving different IQR or standard deviation.",
        hint: "Range ignores the middle",
      },
    ],
  },
  {
    slug: "wh-challenges-21st-century",
    cards: [
      {
        front: "What is globalization?",
        back: "Globalization is the increasing interconnection of the world's economies, cultures, and populations through trade, technology, investment, and migration. It accelerated sharply after the late 20th century.",
        hint: "Worldwide interconnection",
      },
      {
        front: "How has the digital/information revolution changed the 21st-century world?",
        back: "The internet, smartphones, and social media transformed communication, commerce, and politics, enabling instant global information flow but also misinformation, surveillance, and a digital divide between connected and unconnected populations.",
        hint: "Internet and social media",
      },
      {
        front: "What is climate change and why is it a defining 21st-century challenge?",
        back: "Climate change is long-term shifts in temperature and weather, driven largely by greenhouse gas emissions from fossil fuels. It threatens ecosystems, food/water security, coastlines, and demands global cooperation (e.g., the Paris Agreement).",
        hint: "Greenhouse gases; global response",
      },
      {
        front: "What was the September 11, 2001 attack and a major consequence?",
        back: "Al-Qaeda terrorists hijacked planes, striking the World Trade Center and Pentagon. It launched the U.S.-led 'War on Terror,' including invasions of Afghanistan and Iraq, and reshaped global security policy.",
        hint: "9/11 and War on Terror",
      },
      {
        front: "What caused the 2008 global financial crisis?",
        back: "Risky mortgage lending (subprime) and complex financial products collapsed, triggering bank failures, a worldwide recession, mass unemployment, and government bailouts, exposing the risks of an interconnected financial system.",
        hint: "Subprime mortgages; global recession",
      },
      {
        front: "What was the Arab Spring (2010-2012)?",
        back: "A wave of pro-democracy protests and uprisings across the Arab world (beginning in Tunisia) against authoritarian rule. It toppled some leaders but led to civil wars (e.g., Syria, Libya) and mixed outcomes.",
        hint: "Pro-democracy uprisings",
      },
      {
        front: "Why is migration a major 21st-century issue?",
        back: "War, poverty, persecution, and climate change drive large-scale migration and refugee flows (e.g., from Syria). This strains host nations, sparks political debate over borders and integration, and raises humanitarian concerns.",
        hint: "Refugees and border debates",
      },
      {
        front: "What is the significance of China's rise as a global power?",
        back: "Rapid economic growth made China the world's second-largest economy and a manufacturing hub, increasing its global influence (e.g., Belt and Road Initiative) and creating geopolitical rivalry with the United States.",
        hint: "Economic and geopolitical power",
      },
      {
        front: "What was the COVID-19 pandemic's global impact (from 2020)?",
        back: "A worldwide pandemic that killed millions, overwhelmed health systems, triggered lockdowns and economic disruption, accelerated remote work and vaccine science, and exposed global inequalities and supply-chain fragility.",
        hint: "Pandemic; global disruption",
      },
      {
        front: "What is the threat of terrorism and asymmetric warfare in the 21st century?",
        back: "Non-state groups (e.g., al-Qaeda, ISIS) use terrorism and unconventional tactics against stronger states, making conflicts harder to resolve and prompting expanded security and surveillance measures worldwide.",
        hint: "Non-state actors vs. states",
      },
      {
        front: "How does economic inequality challenge 21st-century societies?",
        back: "Wealth has concentrated among the richest individuals and nations while gaps persist between and within countries, fueling social unrest, populist politics, and debates over fair globalization.",
        hint: "Wealth gaps fuel unrest",
      },
      {
        front: "What role do international organizations play in addressing global challenges?",
        back: "Bodies like the UN, WHO, IMF, and WTO coordinate responses to conflict, health crises, finance, and trade. Their effectiveness is often limited by national sovereignty and competing interests.",
        hint: "UN, WHO, IMF; limited by sovereignty",
      },
      {
        front: "Trap: Is globalization viewed only positively?",
        back: "No. Supporters cite economic growth, cultural exchange, and reduced poverty; critics point to job losses, exploitation, environmental harm, cultural homogenization, and widened inequality. It is a contested, double-edged process.",
        hint: "Benefits and backlash",
      },
    ],
  },
];
