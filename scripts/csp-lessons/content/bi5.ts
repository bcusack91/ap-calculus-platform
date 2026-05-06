// BI5 — csp-impact-of-computing. Bespoke AP-quality content.

import type { Topic } from '../types';
import { bi5ExtraTopics } from './bi5-extra';

const cspImpactOfComputing: Topic = {
  slug: 'csp-impact-of-computing',
  display: 'Impact of Computing',
  emoji: '🌍',
  exportPrefix: 'cspImpactOfComputing',
  idPrefix: 'cspic',
  parts: {
    2: {
      introMd: `## Computing Reshapes Society

Every powerful technology produces both **beneficial** and **harmful** effects, often in the same product. AP CSP wants you to identify both — not just one.

| Domain | Beneficial | Harmful |
|--------|-----------|---------|
| Communication | Global reach, free messaging | Misinformation spreads at the same speed |
| Health | Telemedicine, AI diagnostic tools | Sensitive data exposure |
| Education | Free open courses worldwide | Digital divide for those without access |
| Commerce | Convenient shopping, cheaper goods | Job displacement, market concentration |`,
      quiz1: [
        { q: 'A new app helps farmers in remote areas check crop prices on a basic phone. The most likely UNINTENDED consequence is ___', opts: ['farmers across the entire region will permanently abandon their basic phones in favor of in-person market visits.', 'farmers without phones may be at a disadvantage relative to those with phones who can check crop prices instantly.', 'the basic phones used to check crop prices will gradually become more weather-resistant in remote farming areas.', 'crop prices set at central markets will become entirely irrelevant for the farmers using the price-checking app.'], a: 1, exp: 'Even helpful technology can deepen the gap for those who don\'t have access (a digital-divide effect).' },
        { q: 'Computing technologies generally have ___', opts: ['only beneficial effects on the people and groups who choose to use them or are affected by their deployment.', 'only harmful effects on the people and groups who choose to use them or are affected by their deployment.', 'both beneficial and harmful effects on the people and groups affected, often in the same product simultaneously.', 'no significant effects on the people and groups affected that are worth analyzing under the AP CSP framework.'], a: 2, exp: 'AP CSP frames technologies as having dual effects — both must be considered.' },
      ],
      contentMd: `## Beneficial vs. Harmful Effects

When evaluating a technology, ask:

- Who **benefits** from it? In what way?
- Who is **harmed** or excluded? In what way?
- Was the harm **intended** or **unintended**?
- What are **secondary** effects (e.g., changes to industries, public discourse)?

These questions structure the AP exam\'s "impact of computing" prompts.

## Intended vs. Unintended Consequences

| Type | Example |
|------|---------|
| **Intended beneficial** | Email lets you send messages instantly. |
| **Unintended beneficial** | Email infrastructure also enabled mailing lists, calendars, threaded discussions. |
| **Intended harmful** | Spam, intentional malware. |
| **Unintended harmful** | Email phishing exploiting trust in messages; "always-on" worker burnout. |

Most exam scenarios focus on **unintended** consequences — second-order effects nobody planned but everyone now lives with.

## The Digital Divide

The **digital divide** is the gap between those who have meaningful access to digital technology (devices, bandwidth, skills) and those who don\'t. It maps onto:

- **Geography**: rural vs urban broadband.
- **Income**: cost of devices and service.
- **Age**: comfort with new technology.
- **Disability**: whether software is accessible.

A "best in class" web service is meaningless to users who can\'t afford service or use it.`,
      inputs: {
        prompts: [
          'The gap between those with and without meaningful access to digital tech is the digital _______.',
          'A consequence that designers did not plan for is called a(n) _______ consequence.',
          'Identifying both who benefits and who is _______ is part of evaluating computing\'s impact.',
        ],
        answers: ['divide', 'unintended', 'harmed'],
        hints: ['Gap, split.', 'Opposite of planned.', 'Negative side.'],
        explanation: 'Digital divide = access gap. Unintended consequences are unplanned. Always weigh harms alongside benefits.',
      },
      dropdowns: {
        items: [
          { label: 'Telemedicine that requires high-speed Internet may worsen ___', options: ['the digital divide for rural patients', 'doctor handwriting', 'paper consumption', 'patient height'] },
          { label: 'A platform that goes viral globally affects ___', options: ['far more people than its designers may have anticipated', 'only its designers', 'only one country', 'only Wi-Fi networks'] },
          { label: 'A "dual use" technology is one that ___', options: ['can be used for both beneficial and harmful purposes', 'requires two users', 'has two pricing tiers', 'doubles the bandwidth'] },
        ],
        correct: ['the digital divide for rural patients', 'far more people than its designers may have anticipated', 'can be used for both beneficial and harmful purposes'],
        hints: ['Connectivity gap matters.', 'Internet scale = global effects.', 'Same tool, different uses.'],
        explanation: 'Telemedicine relies on bandwidth. Internet-scale tech affects everyone. Dual-use describes most computing.',
      },
      strategyMd: `## AP Exam Strategy: Impact Analysis

- Always answer with **both** a benefit and a harm — the rubric usually demands both.
- Look for **second-order** effects (e.g., displaced jobs, behavioral changes).
- Mention specific affected populations (rural users, low-income users, users with disabilities, minors, etc.).
- Don\'t just say "good" or "bad" — explain WHO is affected and HOW.`,
      applied: [
        { q: 'A school replaces paper textbooks with tablets to save money. What is a likely UNINTENDED harmful effect?', opts: ['Books delivered to students at the start of the year will no longer be printed with paper pages bound together.', 'Students without home Wi-Fi may struggle to do homework that requires the new tablet to access digital textbook content.', 'The new tablets distributed to students will be noticeably heavier in their backpacks than the old paper textbooks were.', 'Teachers across the entire district will collectively refuse to teach any further classes if textbooks are replaced.'], a: 1, exp: 'A digital-divide effect — students without home connectivity may be disadvantaged.' },
        { q: 'A facial-recognition system is deployed in a city to find missing children (intended beneficial use). What is a plausible UNINTENDED harmful use?', opts: ['It will reliably help locate every missing child reported in the city without ever producing a false positive identification.', 'The same camera-and-recognition infrastructure can later be repurposed to track political protesters or other lawful demonstrators.', 'It runs on the standard TCP/IP networking protocols used elsewhere on the internet for routine application-layer traffic.', 'It will gradually increase broadband demand on the city\'s residential ISPs as more cameras are added to the facial system.'], a: 1, exp: 'Surveillance infrastructure built for one purpose is easily redeployed for others — a classic dual-use concern.' },
      ],
    },
    3: {
      introMd: `## Patterns Of Impact

Recurring categories of impact you\'ll be asked to recognize.

| Category | Examples |
|---------|---------|
| **Privacy** | Personal data collected, sold, leaked. |
| **Security** | Phishing, malware, breaches. |
| **Bias / Fairness** | ML systems trained on biased data. |
| **Intellectual property** | Copying, remixing, attribution. |
| **Crowdsourcing** | Wikipedia, citizen science, open-source. |
| **Automation / labor** | Job displacement, task augmentation. |`,
      quiz1: [
        { q: 'A face-recognition system is significantly less accurate on people of color than on white faces. The most accurate diagnosis is ___', opts: ['the underlying recognition algorithm itself is intrinsically unfair regardless of which training images were used to fit it.', 'the training image dataset was likely not representative of the target population, leading to biased recognition outcomes.', 'pixel data fundamentally encodes a bias against certain skin tones at the level of the file format the camera produced.', 'modern digital camera sensors have been shown to systematically dislike certain skin tones during the recognition process.'], a: 1, exp: 'Algorithmic bias most often stems from non-representative training data; the model learns the gaps in its input.' },
        { q: 'Wikipedia is most clearly an example of ___', opts: ['a strict client-server architecture in which one central authoritative server publishes all article content to passive readers.', 'crowdsourcing — many distributed contributors collectively producing and editing a shared body of encyclopedic knowledge.', 'a peer-to-peer file-sharing network in which each reader directly distributes article files to other readers nearby.', 'a machine-learning system that automatically generates new encyclopedia articles from raw web-scraped training data.'], a: 1, exp: 'Wikipedia is a textbook example of crowdsourcing.' },
      ],
      contentMd: `## Privacy: What Counts as PII?

**Personally Identifiable Information (PII)** = any data that can identify a specific person on its own or combined with other data.

| Direct PII | Indirect / quasi PII |
|-----------|---------------------|
| Name, SSN, email | ZIP + birth date + gender (often unique!) |
| Home address | Browsing history |
| Phone number | Geolocation traces |

A surprising number of "anonymous" datasets can be **re-identified** by linking quasi-identifiers across sources.

## Algorithmic Bias

A model that learns from biased data reproduces that bias. Common cases:

- Hiring tools trained on past hires perpetuate past hiring biases.
- Risk-assessment scores trained on biased policing data target the same neighborhoods.
- Speech recognition trained mostly on certain accents performs worse on others.

The fix is multi-layered: representative data, fairness audits, human oversight, transparency.

## Crowdsourcing

Crowdsourcing harnesses many people\'s small contributions:

- **Wikipedia**: knowledge.
- **OpenStreetMap**: maps.
- **Galaxy Zoo**: classifying galaxies.
- **Open-source software**: code.

Pros: scale, diversity, cost. Cons: quality control, vandalism, governance.

## Intellectual Property In A Digital World

A digital file is trivially copyable. This collides with traditional IP law (copyright, patents). Modern responses include:

- **Open licenses**: Creative Commons, MIT, GPL — explicit grants of permission.
- **DRM** (Digital Rights Management): technical restrictions on copying.
- **Attribution**: even open work usually requires credit.`,
      inputs: {
        prompts: [
          'Data that can identify a specific person is called _______.',
          'When an algorithm produces unfair outcomes due to its training data, this is called algorithmic _______.',
          'A project where many people contribute small pieces toward a shared product is called _______.',
        ],
        answers: ['PII', 'bias', 'crowdsourcing'],
        hints: ['Personally Identifiable Information.', 'A systematic skew.', 'Wikipedia is the canonical example.'],
        explanation: 'PII = identifying data. Algorithmic bias usually traces to data. Crowdsourcing = many small contributions.',
      },
      dropdowns: {
        items: [
          { label: 'A "Creative Commons BY-SA" license requires ___', options: ['attribution and that derivatives use the same license', 'paying a fee', 'no use whatsoever', 'destroying the original'] },
          { label: 'An "anonymized" dataset of medical records combined with public voter rolls might allow ___', options: ['re-identification of specific individuals', 'no privacy concerns', 'TLS encryption', 'longer battery life'] },
          { label: 'Open-source software is most clearly an example of ___', options: ['crowdsourcing applied to code', 'centralized corporate development', 'a P2P file system', 'compression'] },
        ],
        correct: ['attribution and that derivatives use the same license', 're-identification of specific individuals', 'crowdsourcing applied to code'],
        hints: ['BY=attribution, SA=share alike.', 'Cross-linked datasets defeat anonymization.', 'Many contributors, shared code.'],
        explanation: 'CC BY-SA = attribution + share alike. Linkage attacks defeat naive anonymization. Open source = crowdsourced code.',
      },
      strategyMd: `## AP Exam Strategy: Impact Categories

- For privacy questions, identify what data is collected and what could go wrong if it leaks or is combined.
- For bias questions, look at the training data, not just the model.
- For IP questions, think about copying, remixing, and attribution.
- For crowdsourcing, weigh scale benefits against quality / vandalism risks.`,
      applied: [
        { q: 'A hiring tool is trained on resumes from the past 10 years of a company that historically hired mostly men. The most likely outcome is ___', opts: ['the hiring tool will be perfectly fair across genders because algorithms automatically remove human bias from the hiring process.', 'the hiring tool will likely reproduce the historical hiring bias, systematically disadvantaging qualified women applying for the same roles.', 'the hiring tool will simply fail to read resume files because resumes contain too many free-form text fields for it to parse.', 'the hiring tool will overcorrect and end up hiring only women, even when the male candidates are clearly better qualified.'], a: 1, exp: 'ML systems learn historical patterns; biased input data → biased predictions.' },
        { q: 'A free photo-storage service offers unlimited storage in exchange for permission to scan photos for advertising data. Which is the most accurate framing?', opts: ['The user pays nothing of value for the storage service and faces no other costs in return for the unlimited storage offer.', 'The user pays with personal data; the economic value of that data may exceed the storage cost the company would otherwise charge.', 'There are no privacy implications because photos uploaded to the service are scanned only by automated software and not by humans.', 'Photos cannot reliably be stored in digital form on a remote service like this one without significantly degrading their quality.'], a: 1, exp: 'When the product is free, you are often the product — the data has economic value.' },
      ],
    },
    4: {
      introMd: `## Cross-Course Connections

Impact of computing ties everything together.

| Cross-link | Why |
|-----------|-----|
| Impact ↔ Internet (BI 4) | Global reach amplifies both benefit and harm. |
| Impact ↔ Algorithms (BI 3) | Algorithms make consequential decisions about humans. |
| Impact ↔ Data (BI 2) | Massive data collection enables both useful and invasive systems. |
| Impact ↔ Security (BI 4) | Breaches turn collected data into harm. |`,
      quiz1: [
        { q: 'Two services collect overlapping personal data. Combining them via a data-broker poses risks beyond either alone because ___', opts: ['data records about individuals visibly shrink in total size when two overlapping personal-data sources are combined.', 'cross-linking quasi-identifiers across the two sets can re-identify people who appear anonymous in either set alone.', 'the TCP transport protocol fundamentally cannot carry the combined output of two overlapping personal-data sources.', 'combining the records on disk routinely corrupts the underlying data files and renders the merged dataset unreadable.'], a: 1, exp: 'Linkage attacks defeat naive anonymization — a core privacy theme.' },
        { q: 'A government deploys an automated system that decides who is eligible for benefits. The most CSP-aligned concern is ___', opts: ['the deployed eligibility system will run too quickly to give human caseworkers enough processing time per applicant.', 'the system\'s decisions affect lives, so its accuracy, fairness, and explainability all matter to people denied benefits.', 'the deployed eligibility system will require an upgrade to IPv6 networking before it can process new benefit applicants.', 'the deployed eligibility system will only run reliably on government servers during normal weekday business hours.'], a: 1, exp: 'High-stakes algorithmic decisions demand fairness, accuracy, and transparency.' },
      ],
      contentMd: `## When Algorithms Decide About People

Examples:

- **Loan approval** — denied a mortgage by a model.
- **Sentencing risk scores** — courts using algorithmic risk assessments.
- **Content moderation** — auto-removing posts.
- **Hiring screeners** — filtering resumes.

CSP-aligned concerns:

- **Accuracy**: how often is the model wrong?
- **Fairness**: are errors distributed evenly across groups?
- **Transparency**: can affected people understand why?
- **Recourse**: can decisions be appealed?

## Surveillance vs. Convenience

Many features blur the line:

| Feature | Convenience | Surveillance side |
|---------|-------------|------------------|
| Smart speaker | Voice control | Always listening |
| Location services | Useful maps / weather | Continuous location log |
| Loyalty cards | Discounts | Fine-grained purchase history |

The more we trade for convenience, the more we should ask **who else gets the data**.

## Misinformation At Scale

The Internet allows false information to spread as quickly as true information. Recommendation algorithms can amplify what generates engagement, which is not always what is true. CSP-relevant ideas:

- **Filter bubbles**: algorithmically narrowed views.
- **Bots**: automated accounts inflating engagement.
- **Deepfakes**: synthetic media indistinguishable from real.

These are not "future" issues — they are present.`,
      inputs: {
        prompts: [
          'Combining datasets to identify "anonymous" individuals is called a _______ attack.',
          'When algorithms make high-stakes decisions about people, an important property is _______ — being able to explain why.',
          'Synthetic media generated by AI to imitate real people is called a _______.',
        ],
        answers: ['linkage', 'transparency', 'deepfake'],
        hints: ['Combining links → identification.', 'Open about how it decides.', 'Deep + fake.'],
        explanation: 'Linkage attacks re-identify; transparency helps accountability; deepfakes pose new misinformation risks.',
      },
      dropdowns: {
        items: [
          { label: 'A "filter bubble" describes ___', options: ['being shown only viewpoints similar to one\'s past clicks', 'a Wi-Fi router protector', 'an audio compression', 'an HTTPS layer'] },
          { label: 'A bot army inflating likes affects ___', options: ['perceived popularity, distorting public discourse', 'TCP retransmission', 'IPv6 adoption', 'pixel resolution'] },
          { label: 'High-stakes algorithmic decisions especially benefit from ___', options: ['human oversight and appeal mechanisms', 'no review at all', 'random outputs', 'closed-source designs'] },
        ],
        correct: ['being shown only viewpoints similar to one\'s past clicks', 'perceived popularity, distorting public discourse', 'human oversight and appeal mechanisms'],
        hints: ['Algorithmic narrowing of feed.', 'Fake amplification.', 'Humans in the loop.'],
        explanation: 'Filter bubbles narrow exposure. Bots distort signals. Human oversight checks algorithmic harm.',
      },
      strategyMd: `## AP Exam Strategy: Cross-Topic Impact

- A scenario about combining datasets often points to a privacy/linkage answer.
- A scenario about a model deciding about people → fairness, transparency, recourse.
- A scenario about viral content → misinformation, filter bubbles, bots.
- Always tie the harm back to a CSP-relevant mechanism (data, algorithm, network reach).`,
      applied: [
        { q: 'A health app sells "anonymized" exercise data. A researcher links the data to public running club rosters and identifies many users. Which CSP concept is illustrated?', opts: ['Lossless data compression of the exercise dataset before publication for sale to outside researchers and partners.', 'A linkage attack defeating naive anonymization by joining quasi-identifiers across the dataset and a public roster.', 'A best-effort packet-routing decision made by the internet routers between the app\'s server and the researcher.', 'A TCP transport-layer retransmission of dropped exercise-data packets between the app\'s server and the researcher.'], a: 1, exp: 'Quasi-identifiers (location, time, route) link "anonymous" records back to people.' },
        { q: 'A social platform\'s recommendation algorithm boosts engagement. Over time it shows users increasingly extreme content. What CSP-aligned framing best fits?', opts: ['The recommendation algorithm has developed something like a personality and is independently choosing the extreme content.', 'Optimizing for user engagement is not the same as optimizing for truth or wellbeing — an unintended harmful consequence.', 'The internet itself is fundamentally broken in a way that causes any deployed recommendation system to surface extreme content.', 'The internet routers carrying the recommendations have a built-in bias that pushes increasingly extreme content to viewers.'], a: 1, exp: 'Optimization targets shape outcomes; engagement-maximization can produce harmful content as a side effect.' },
      ],
    },
    5: {
      introMd: `## How Computing Impact Has Evolved

Themes to recognize across decades.

| Decade | Defining impact theme |
|--------|----------------------|
| 1990s | Web makes information widely accessible. |
| 2000s | Social media reshapes communication. |
| 2010s | Smartphones move computing into pockets; data collection becomes ambient. |
| 2020s | AI / ML produce decisions and content at scale; new IP and labor questions. |`,
      quiz1: [
        { q: 'Which trend most directly enabled "always-on" personal data collection?', opts: ['The original ARPANET research program in the 1960s that demonstrated long-distance packet-switched networking between universities.', 'Mass adoption of smartphones with GPS, microphones, cameras, and continuous network connectivity carried by users at all times.', 'The rise of removable floppy disks in the 1980s as the dominant low-cost medium for transferring personal files between computers.', 'The exhaustion of available IPv4 address blocks during the 2010s and the resulting need for ISPs to deploy network address translation.'], a: 1, exp: 'Smartphones turned every person into a continuous source of fine-grained data.' },
        { q: 'Generative AI most clearly raises new questions about ___', opts: ['the deployment of IPv6 addressing across consumer ISPs and the corresponding upgrades required in residential home networking equipment.', 'authorship, attribution, and the line between human and machine creation when training data may include copyrighted human work.', 'the behavior of the TCP transport-layer protocol when retransmitting dropped packets across high-latency wireless cellular links.', 'the typical refresh rates of computer monitors used to display generative AI output and the associated power-consumption concerns.'], a: 1, exp: 'Synthetic content blurs traditional IP and authorship norms.' },
      ],
      contentMd: `## Smartphones Changed Data Collection

A 2005 person used the Internet from a desktop, intermittently. A 2025 person carries a sensor-rich device 24/7 that continuously emits:

- Location.
- App usage.
- Social interactions.
- Biometrics (steps, heart rate, sleep).

Data is no longer a snapshot — it\'s a stream. Aggregated, it forms a near-complete behavioral record.

## AI / ML At Scale

Generative AI now produces text, images, audio, and video at near-human quality. New questions:

- Who **owns** the output of a model trained on others\' work?
- What **labor disruption** comes from automating creative tasks?
- How do we **detect** synthetic content?
- What are the **environmental** costs (training large models requires massive energy)?

## Labor Effects

Automation changes the job mix:

- **Routine tasks** (data entry, simple translation, basic image editing) — increasingly automated.
- **Complex judgment / interpersonal work** — augmented by computing, less easily automated.
- **New roles** — data engineers, ML practitioners, AI ethicists — created by computing itself.

The net effect is rarely "no jobs" but rather "different jobs, different distributions of pay and power."

## Open Questions Of The 2020s

- Should AI-generated content be labeled?
- Who is liable when an autonomous system makes a harmful decision?
- How should training data be licensed?
- How do we preserve democratic discourse against automated influence?

These are exactly the kinds of "evaluate the impact" prompts the AP exam loves.`,
      inputs: {
        prompts: [
          'Always-on devices like smartphones enabled _______ data collection.',
          'AI systems that produce text, images, or media are called _______ AI.',
          'Automation tends to displace _______ tasks faster than complex-judgment ones.',
        ],
        answers: ['continuous', 'generative', 'routine'],
        hints: ['Not occasional.', 'They generate new outputs.', 'Repetitive tasks.'],
        explanation: 'Continuous data, generative AI, and routine-task automation are the dominant 2020s themes.',
      },
      dropdowns: {
        items: [
          { label: 'Training a large generative model requires ___', options: ['significant energy and computation', 'no resources', 'one floppy disk', 'no data'] },
          { label: 'Automation usually changes ___', options: ['the mix and distribution of jobs, not their total elimination', 'nothing', 'only one industry', 'only Wi-Fi networks'] },
          { label: 'Synthetic media that imitates a real person\'s likeness or voice is called ___', options: ['a deepfake', 'a CDN', 'a packet', 'a router'] },
        ],
        correct: ['significant energy and computation', 'the mix and distribution of jobs, not their total elimination', 'a deepfake'],
        hints: ['Data centers, GPUs, electricity.', 'Net effects, not "no jobs".', 'Deep learning + fake.'],
        explanation: 'Large models = big energy. Automation = job-mix shifts. Deepfakes = synthetic likeness/voice.',
      },
      strategyMd: `## AP Exam Strategy: Modern Impact Questions

- "Always-on devices" → continuous data + privacy concerns.
- "AI-generated content" → IP, labor, misinformation framing.
- "Automation" → distribution of work, not pure replacement.
- Cite a SPECIFIC affected group when describing harm.`,
      applied: [
        { q: 'An AI image generator produces a poster style indistinguishable from a living human artist\'s work, without that artist\'s consent. What CSP-aligned concern is most accurate?', opts: ['No CSP-aligned concern arises here at all because at the lowest level digital images are simply patterns of bits on disk.', 'Training data plus IP rights plus attribution plus livelihood: the artist\'s prior work was used as training data without consent or compensation.', 'A TCP transport-layer retransmission concern arises when the AI-generated poster image is delivered to the requesting client over a slow link.', 'An IPv6 deployment concern arises when the AI-generated poster image is delivered through residential ISPs that have not yet adopted IPv6.'], a: 1, exp: 'AI-generated content raises consent, attribution, and livelihood questions for the source artists.' },
        { q: 'A delivery company replaces local dispatchers with an algorithm. Which framing best matches the AP rubric?', opts: ['Beneficial: the algorithm produces more efficient routing for the company. Harmful: dispatcher job loss plus a new dependence on the routing algorithm working correctly.', 'Purely beneficial for everyone affected, since the new algorithm will reliably produce better routing decisions than the local dispatchers it replaced ever could.', 'Purely harmful for everyone affected, since automated dispatch is fundamentally less reliable than the local human dispatchers it replaces in every measurable way.', 'No effect on anyone, since dispatcher work is essentially invisible to the customers who place the orders and the drivers who ultimately deliver them.'], a: 0, exp: 'AP impact answers should name BOTH benefits and harms with affected parties.' },
      ],
    },
    6: {
      introMd: `## Impact Of Computing Workshop

Apply the dual-effect framework to scenarios — exactly the format the AP exam uses.`,
      quiz1: [
        { q: 'A new app shows a personalized news feed. The most likely UNINTENDED harmful effect is ___', opts: ['users will receive their news significantly faster than they previously did from non-personalized news feed apps elsewhere.', 'users may be siloed into a filter bubble of viewpoints similar to those they have already engaged with in the past.', 'the TCP transport-layer protocol carrying the personalized news feed will gradually slow down on residential broadband connections.', 'the IPv6 deployment carrying the personalized news feed will stop working on residential broadband connections in many regions.'], a: 1, exp: 'Personalization can narrow exposure (filter bubble) — a classic unintended effect.' },
        { q: 'A school district installs cameras in every hallway "for safety". A reasonable balanced response is ___', opts: ['the newly installed hallway cameras have only beneficial effects on the school district\'s students, families, and staff alike.', 'the cameras may improve incident response (benefit) but raise privacy and chilling-effect concerns (harm) and need governance about who can view footage.', 'the newly installed hallway cameras have only harmful effects on the school district\'s students, families, and staff alike.', 'no impact analysis is needed for the newly installed hallway cameras because they only run during normal school district hours.'], a: 1, exp: 'A balanced AP-style answer names both effects and the governance question.' },
      ],
      contentMd: `## Workshop Template

For any scenario, write four bullet points:

1. **Beneficial intended:** what the system is designed to do well.
2. **Harmful intended (if any):** ways the design itself causes harm (e.g., addictive design).
3. **Unintended beneficial:** unexpected helpful uses.
4. **Unintended harmful:** unexpected harm — the most exam-relevant.

Always name **affected populations** and the **mechanism** of impact (data, algorithm, network reach).

## Worked Scenario: Smart Doorbell

| Lens | Note |
|------|------|
| Beneficial intended | Owner sees who\'s at the door; can deter porch theft. |
| Unintended beneficial | Footage helps police solve crimes. |
| Unintended harmful (privacy) | Continuous video of neighbors and passersby; many cameras feed into one company\'s database. |
| Unintended harmful (bias) | Recommended-watch features may flag certain demographics more often. |
| Governance question | Who can request footage? Police without a warrant? |

## Worked Scenario: Public-Health Tracker

| Lens | Note |
|------|------|
| Beneficial intended | Identify outbreak hotspots; allocate resources. |
| Unintended beneficial | Data informs urban planning beyond health. |
| Unintended harmful (privacy) | Location data could re-identify individuals. |
| Unintended harmful (equity) | People without smartphones are invisible. |
| Mitigations | Aggregate data, opt-in, sunset clauses, audits. |`,
      inputs: {
        prompts: [
          'A balanced AP-style impact answer should describe both _______ and harms.',
          'When a system\'s data collection identifies individuals despite "anonymization", this is a _______ concern.',
          'Naming the specific _______ population affected strengthens an impact answer.',
        ],
        answers: ['benefits', 'privacy', 'affected'],
        hints: ['Positive side.', 'Anonymity isn\'t guaranteed.', 'Be specific about WHO.'],
        explanation: 'Balanced answers, privacy as a key lens, and naming affected populations are AP rubric basics.',
      },
      dropdowns: {
        items: [
          { label: 'A "sunset clause" on collected data means ___', options: ['data is deleted after a defined period', 'data is duplicated', 'data is encrypted', 'data is published'] },
          { label: 'Aggregating data before publishing protects privacy by ___', options: ['removing individual-level identifiability', 'making data more identifiable', 'compressing it losslessly', 'changing the format'] },
          { label: 'A mitigation that gives users control over whether their data is used is ___', options: ['opt-in consent', 'mandatory inclusion', 'auto-publication', 'no notice at all'] },
        ],
        correct: ['data is deleted after a defined period', 'removing individual-level identifiability', 'opt-in consent'],
        hints: ['Sunset = end-of-life.', 'Aggregate ≠ individual.', 'Opt-in respects autonomy.'],
        explanation: 'Sunset = scheduled deletion. Aggregation hides individuals. Opt-in is the strongest consent.',
      },
      strategyMd: `## AP Exam Strategy: Impact Workshops

- Use the four-bullet template (intended/unintended × beneficial/harmful).
- Name a specific population (low-income, rural, students, elderly, etc.).
- Name a specific mechanism (data collection, algorithmic decision, network amplification).
- Suggest at least one mitigation (consent, aggregation, transparency, audit, sunset).
- Avoid extreme answers ("only good", "only bad") — the rubric rewards balance.`,
      applied: [
        { q: 'A school deploys an AI grading assistant for essays. The strongest AP-style impact analysis would ___', opts: ['praise the AI grading assistant as a substantial time-saver for classroom teachers and stop the impact analysis there.', 'note efficiency benefits AND risks of bias against non-standard writing styles AND propose human review of borderline grades.', 'criticize the AI grading assistant as fundamentally unfit for any classroom essay-grading purpose without offering any concrete benefits.', 'argue at length that computers in any form are intrinsically incapable of grading written student essays meaningfully or accurately.'], a: 1, exp: 'Balanced: benefits + biases + concrete mitigation (human review).' },
        { q: 'A city offers free public Wi-Fi in parks. A complete AP-style impact analysis would mention ___', opts: ['only the access benefit that the new free public Wi-Fi service provides for residents and park visitors in the city.', 'access benefits, plus that traffic on open Wi-Fi is exposed to eavesdropping unless users use HTTPS or a VPN, plus equity benefits for those without home internet.', 'only the security harm that traffic on the new free public Wi-Fi may be exposed to eavesdropping by other users on the same open wireless network.', 'only the equity harm that the new free public Wi-Fi service is unavailable to city residents who never visit any of the public parks.'], a: 1, exp: 'A complete answer names the equity benefit AND the security caveat.' },
      ],
    },
    7: {
      introMd: `## AP Exam Recap — Impact Of Computing

The framings most likely to appear on the AP exam.`,
      quiz1: [
        { q: 'AP impact-of-computing answers usually require ___', opts: ['identifying only one specific beneficial effect of the technology under analysis without naming any specific affected party or population.', 'identifying only one specific harmful effect of the technology under analysis without naming any specific affected party or population.', 'identifying BOTH a beneficial AND a harmful effect of the technology under analysis, with specific affected parties named for each.', 'identifying neither a beneficial nor a harmful effect of the technology under analysis and offering only abstract general statements.'], a: 2, exp: 'The rubric typically demands balanced analysis with affected parties.' },
        { q: 'The phrase "the digital divide" describes ___', opts: ['an ongoing technical dispute among ISPs and standards bodies about the relative merits of IPv4 versus IPv6 for the public internet.', 'gaps in meaningful access to digital technology across geography, income, age, or ability between groups of people in a society.', 'the process of splitting digital files into individual packets for transmission across a packet-switched network like the modern internet.', 'a lossy audio compression technique that splits a digital sound file into low-frequency and high-frequency bands for separate processing.'], a: 1, exp: 'Digital divide = unequal access.' },
      ],
      contentMd: `## Final Vocabulary

| Term | Definition |
|------|-----------|
| Digital divide | Gap in meaningful access to digital tech. |
| PII | Personally Identifiable Information. |
| Re-identification | Linking "anonymous" data back to specific people. |
| Algorithmic bias | Systematic skew in algorithmic outputs, often from biased data. |
| Crowdsourcing | Many small contributors → one shared product. |
| Open-source / Creative Commons | Licenses that grant permissions explicitly. |
| Filter bubble | Algorithmically narrowed information exposure. |
| Deepfake | AI-generated synthetic likeness or voice. |
| Sunset clause | Scheduled deletion of collected data. |

## Common Pitfalls

- "It\'s just a tool — neutral." Tools have consequences shaped by who builds and deploys them.
- "Anonymous data is safe." Linkage attacks frequently re-identify.
- "If it\'s legal, it\'s fine." Legality and ethics differ.
- "Automation just kills jobs." It changes job mix; some new jobs are created, others disappear, distribution shifts.
- "More data is always better." Collected data is also collected risk.

## How To Write A Strong Impact Answer

1. Identify the technology and its intended purpose.
2. Name **at least one** beneficial effect with WHO benefits.
3. Name **at least one** harmful effect (preferably unintended) with WHO is harmed.
4. Describe the **mechanism** (data, algorithm, network reach).
5. Suggest a **mitigation** if asked.`,
      inputs: {
        prompts: [
          'A strong AP impact answer names both a benefit and a _______.',
          'PII stands for Personally _______ Information.',
          'A scheduled deletion of stored data is enabled by a _______ clause.',
        ],
        answers: ['harm', 'Identifiable', 'sunset'],
        hints: ['Negative side.', 'Identifying.', 'Setting beyond which data ends.'],
        explanation: 'Balance harms with benefits, recognize PII, and know sunset clauses as a privacy mitigation.',
      },
      dropdowns: {
        items: [
          { label: 'When a model trained on biased data produces unfair outcomes, the root cause is most often ___', options: ['the training data and how the model was evaluated', 'pure randomness', 'TCP packet loss', 'Wi-Fi signal strength'] },
          { label: 'A platform that uses engagement-maximizing recommendations may unintentionally promote ___', options: ['extreme or polarizing content', 'always-truthful content', 'always-boring content', 'random unrelated content'] },
          { label: 'Asking "WHO benefits and WHO is harmed?" is the right starting point for ___', options: ['any AP impact-of-computing question', 'no AP impact question', 'only privacy questions', 'only IP questions'] },
        ],
        correct: ['the training data and how the model was evaluated', 'extreme or polarizing content', 'any AP impact-of-computing question'],
        hints: ['Garbage in → bias out.', 'Engagement ≠ truth.', 'It\'s the universal frame.'],
        explanation: 'Training data drives bias; engagement maximization can amplify polarization; "who benefits / who is harmed" is the universal lens.',
      },
      strategyMd: `## Final Exam Tips

- Lead with WHO benefits and WHO is harmed.
- Distinguish intended vs. unintended consequences.
- Recognize key vocabulary: PII, digital divide, algorithmic bias, crowdsourcing, filter bubble, deepfake.
- For privacy: think aggregation, opt-in, sunset, transparency.
- For algorithmic fairness: think representative data, oversight, auditability, recourse.
- Always end with a concrete mitigation if the prompt asks "how could this be addressed?"`,
      applied: [
        { q: 'An AP exam free-response asks: "Describe one beneficial and one harmful effect of using ML in college admissions." A model answer would ___', opts: ['praise the efficiency of automated college-admissions screening across thousands of applications and stop the response there.', 'name a specific benefit (consistency or scale) and a specific harm (encoded bias against under-represented groups), naming the affected population.', 'argue at length that no machine-learning system can ever meaningfully read or evaluate the free-form essays submitted with college applications.', 'discuss the ongoing IPv6 deployment in the residential ISPs that admitted college students will use to access their online learning platforms.'], a: 1, exp: 'Balanced answer with specific benefit + specific harm + named population.' },
        { q: 'An AP exam free-response asks: "What mitigation could reduce harm from using ML in admissions?" A strong response would mention ___', opts: ['nothing at all about possible mitigations because machine-learning admissions systems are fundamentally impossible to fix or to make any fairer.', 'auditing the model on demographic subgroups, requiring human review of borderline decisions, and being transparent with applicants about how decisions are made.', 'switching the underlying transport-layer protocol used by the admissions system from TCP to UDP for faster delivery of admissions decisions.', 'switching the underlying network-layer protocol used by the admissions system from IPv4 to IPv6 for more reliable delivery of decisions.'], a: 1, exp: 'Mitigations: subgroup audits, human-in-the-loop, transparency. Concrete and rubric-friendly.' },
      ],
    },
  },
};

export const bi5Topics: Topic[] = [cspImpactOfComputing, ...bi5ExtraTopics];
