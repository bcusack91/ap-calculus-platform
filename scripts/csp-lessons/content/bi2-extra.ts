// BI2 (additional) — csp-data and csp-data-compression-analysis. Bespoke AP-quality content.

import type { Topic } from '../types';

const cspData: Topic = {
  slug: 'csp-data',
  display: 'Data',
  emoji: '📊',
  exportPrefix: 'cspData',
  idPrefix: 'cspdata',
  parts: {
    2: {
      introMd: `## What "Data" Means In Computing

Data is **information represented in a form a computer can store and process**. The same real-world fact (a temperature, a heartbeat, a customer review) becomes data only after it\'s been encoded into bits.

| Step | Example |
|------|---------|
| **Collect** | Sensor reads air temperature 22.4°C. |
| **Store** | Save as a 16-bit integer (×10) → 224. |
| **Process** | Average across 60 readings. |
| **Visualize / report** | Plot a chart, send an alert. |`,
      quiz1: [
        { q: 'A spreadsheet of student grades stored on a school server is best described as ___', opts: ['a hardware design that physically wires up the storage devices.', 'a structured dataset of values that programs can process.', 'an algorithm that the spreadsheet program executes on the user\'s data.', 'a network protocol used for transferring rows between school servers.'], a: 1, exp: 'A spreadsheet IS data — values organized in rows and columns.' },
        { q: 'Which step usually comes FIRST in the data pipeline?', opts: ['Visualizing the results in a chart for the audience to interpret.', 'Collecting raw data from a source such as a sensor or survey.', 'Compressing the file so it fits within the available storage budget.', 'Encrypting the data at rest so unauthorized users cannot read it.'], a: 1, exp: 'You can\'t process data you haven\'t collected.' },
      ],
      contentMd: `## Data Has Structure

| Structure | Example |
|-----------|---------|
| **Scalar** | A single value: 7, "Alex". |
| **List / array** | Ordered values: [3, 1, 4, 1, 5]. |
| **Table** (rows × columns) | A spreadsheet. |
| **Tree** | A folder with subfolders. |
| **Graph** | A social network. |

Choosing the right structure makes algorithms simpler and faster.

## Metadata Is Data About Data

| Datum | Metadata |
|-------|----------|
| A photo | Date taken, GPS, camera model. |
| An email | Sender, recipient, subject, time. |
| A file | Size, owner, last-modified time. |

Metadata can be **as revealing** as the underlying data — sometimes more so.

## Cleaning And Validation

Real-world data is messy: typos, duplicates, missing values. Cleaning steps:

- **Remove duplicates**.
- **Handle missing values** (drop, fill with default, flag).
- **Validate ranges** (heart rate of 500 bpm is suspect).
- **Normalize formats** ("2026-05-06" vs "5/6/26").

A useful analysis depends on clean input. Garbage in → garbage out.`,
      inputs: {
        prompts: [
          'Information represented in a form a computer can store is called _______.',
          'Data ABOUT data (e.g., a photo\'s GPS coordinates) is called _______.',
          'Removing typos, duplicates, and bad values from a dataset is called _______.',
        ],
        answers: ['data', 'metadata', 'cleaning'],
        hints: ['The whole topic.', 'Meta + data.', 'Quality step.'],
        explanation: 'Data = computer-storable info. Metadata = data about data. Cleaning preps data for use.',
      },
      dropdowns: {
        items: [
          { label: 'A spreadsheet with rows = people and columns = attributes is a ___', options: ['table / structured dataset', 'graph', 'tree', 'binary file'] },
          { label: 'Heart rate of 500 bpm in a dataset is most likely ___', options: ['an outlier or data-quality issue', 'a real reading', 'a feature, not a bug', 'an algorithm'] },
          { label: 'Photo metadata that includes GPS coordinates ___', options: ['can identify where a person was, even if the photo is anonymized', 'has no privacy implications', 'cannot be removed', 'replaces the photo'] },
        ],
        correct: ['table / structured dataset', 'an outlier or data-quality issue', 'can identify where a person was, even if the photo is anonymized'],
        hints: ['Rows × columns.', 'Out-of-range value.', 'Metadata leaks location.'],
        explanation: 'Tables are structured datasets. 500 bpm = outlier. GPS metadata leaks location.',
      },
      strategyMd: `## AP Exam Strategy: Data Basics

- "What kind of data is this?" — answer in terms of structure: scalar, list, table, tree, graph.
- "Garbage in, garbage out" — emphasize cleaning before analysis.
- Metadata can be as revealing as the data itself — mention this for privacy questions.`,
      applied: [
        { q: 'A class collects screen-time data from 30 students. Five entries are blank. What\'s the most defensible analysis choice?', opts: ['Silently treat each blank entry as a value of zero hours.', 'Decide explicitly: drop those rows OR fill with the mean, and document the choice.', 'Ignore the issue and run the analysis on whatever the spreadsheet returns.', 'Discard the entire dataset and ask the class to fill out the survey again.'], a: 1, exp: 'Missing-value handling must be deliberate and documented.' },
        { q: 'A fitness app shares "anonymized" exercise data including GPS routes. The most accurate privacy framing is ___', opts: ['stripping names from a dataset is enough to make any later use safe.', 'GPS routes can re-identify users by linking patterns back to home or work.', 'no metadata is actually being collected by the fitness app in this scenario.', 'transport-layer encryption automatically protects metadata once it has shipped.'], a: 1, exp: 'GPS routes are powerful quasi-identifiers — anonymity is fragile.' },
      ],
    },
    3: {
      introMd: `## Patterns Of Data Use

| Pattern | Example |
|---------|---------|
| **Lookup** | Find a record by ID. |
| **Aggregation** | Sum, mean, count over a group. |
| **Filtering** | Keep only rows that match a condition. |
| **Sorting** | Order by a field. |
| **Joining** | Combine two related datasets. |
| **Visualization** | Bar charts, line graphs, maps. |`,
      quiz1: [
        { q: 'A school registrar wants the number of students per grade. This is most directly an example of ___', opts: ['encrypting student records before any other process can read them', 'aggregation — counting records grouped by a shared attribute', 'compressing the underlying student-record file to save disk space', 'routing each student record to the correct downstream system'], a: 1, exp: 'Counting by group = aggregation.' },
        { q: 'A scatter plot is most useful for ___', opts: ['showing two variables\' relationship across many records.', 'compressing data so a long file consumes less disk space.', 'routing packets between two endpoints across the network.', 'encrypting messages so only the intended recipient can read them.'], a: 0, exp: 'Scatter plots reveal correlations between two numeric variables.' },
      ],
      contentMd: `## Visualization Choices

| Question | Best chart |
|----------|-----------|
| How does X change over time? | Line chart. |
| How does each category compare? | Bar chart. |
| What\'s the distribution of values? | Histogram. |
| What\'s the relationship between X and Y? | Scatter plot. |
| What share does each part take? | Pie / donut chart (sparingly). |

Bad chart choice can mislead — exam answers reward picking the chart that matches the question.

## Joining Two Datasets

You have a list of student IDs and a list of (ID, grade). To produce a joined view (name, grade), you **join** on ID. The result has both pieces of information per student.

Joins enable powerful analysis (linking voter rolls + medical records + purchase history) — and powerful re-identification.

## Insights vs. Causation

A correlation in data ≠ causation. Ice-cream sales and drowning correlate (both peak in summer); ice cream doesn\'t cause drowning. AP-aligned answer: data shows patterns; explaining WHY requires more than the data.`,
      inputs: {
        prompts: [
          'A chart that best shows two variables\' relationship is a _______ plot.',
          'Combining two datasets on a shared key (e.g., student ID) is called a _______.',
          'A correlation in data does not necessarily mean _______.',
        ],
        answers: ['scatter', 'join', 'causation'],
        hints: ['Dots, two axes.', 'SQL term.', 'Cause vs correlation.'],
        explanation: 'Scatter plots show pair relationships. Joins combine datasets. Correlation ≠ causation.',
      },
      dropdowns: {
        items: [
          { label: 'A line chart is best for ___', options: ['change over time', 'comparing 3 categories', 'a single value', 'compressing data'] },
          { label: 'A bar chart is best for ___', options: ['comparing categories', 'change over time at high resolution', 'showing causation', 'encrypting data'] },
          { label: 'Linking medical records to voter rolls on (ZIP, birth date, gender) demonstrates ___', options: ['re-identification via quasi-identifiers', 'random matching', 'compression', 'TLS'] },
        ],
        correct: ['change over time', 'comparing categories', 're-identification via quasi-identifiers'],
        hints: ['Time series.', 'Bars compare.', 'Linkage attack.'],
        explanation: 'Lines = trends. Bars = categories. Linkage on quasi-IDs = re-identification.',
      },
      strategyMd: `## AP Exam Strategy: Patterns Of Data Use

- Match chart to question: line/time, bar/category, scatter/relationship, histogram/distribution.
- Joins are powerful — and the seed of many privacy concerns.
- Correlation ≠ causation. Always.`,
      applied: [
        { q: 'A school year-over-year enrollment dataset is best displayed as ___', opts: ['a pie chart showing the share each grade level took in the most recent year.', 'a line chart showing each year\'s total enrollment over time.', 'a histogram of grade levels grouped into uniform-width buckets.', 'a scatter plot whose x-axis is student name and y-axis is grade level.'], a: 1, exp: 'Time-series → line chart.' },
        { q: 'An analyst notices that students who attend tutoring score higher on the SAT and concludes "tutoring causes higher scores." The strongest critique is ___', opts: ['the analysis is sound and the causal claim is well supported by the data.', 'students who choose tutoring may differ in motivation or prior achievement — confounders.', 'the sample is too large for any conclusion to be drawn from it confidently.', 'the analysis ignored the network protocol used to transmit the SAT scores.'], a: 1, exp: 'Confounders threaten causal claims from observational data.' },
      ],
    },
    4: {
      introMd: `## Data Connects Across CSP

| Connection | Why |
|-----------|-----|
| Data ↔ Algorithms | Algorithms operate on data. |
| Data ↔ Internet | Data flows over networks. |
| Data ↔ Security | Data must be protected at rest and in transit. |
| Data ↔ Impact | Decisions about data collection affect privacy, fairness, and trust. |`,
      quiz1: [
        { q: 'Choosing between a list and a hash table for a lookup task is primarily an ___ decision.', opts: ['encryption decision driven by the data\'s sensitivity', 'algorithm and data-structure decision driven by performance', 'network decision driven by the link\'s bandwidth limits', 'compression decision driven by available storage budget'], a: 1, exp: 'Data structure choice impacts algorithm performance.' },
        { q: 'A medical study collects identifying data; a researcher loses a laptop with the dataset. The most accurate framing is ___', opts: ['no concern, since the laptop will probably never be powered on again.', 'a privacy/security incident; mitigated by encryption-at-rest and minimal collection.', 'a hardware concern only — the data on the device is irrelevant to the analysis.', 'a routing problem caused by the laptop disconnecting from the school network.'], a: 1, exp: 'Lost device with sensitive data is a privacy/security incident.' },
      ],
      contentMd: `## Data Structures Affect Algorithms

| Task | Bad choice | Better choice |
|------|-----------|---------------|
| Look up by ID | Linear scan of a list | Hash table (O(1) avg) |
| Sorted access | Unsorted list | Sorted array / balanced tree |
| "Top K" repeatedly | Resort each time | Heap |
| Network of relations | Pairs of IDs in a list | Graph |

## Encryption At Rest vs. In Transit

| Phase | Protection |
|-------|-----------|
| **At rest** (storage) | Disk-level or field-level encryption. |
| **In transit** (network) | TLS / HTTPS. |
| **In use** (memory) | Hardest; emerging tech (TEE, FHE). |

A complete data-protection plan addresses all three.

## Data Lifecycles

Real datasets have a lifecycle: collect → process → store → share → archive → **delete**. The "delete" stage is often skipped — and that\'s a security/privacy failure waiting to happen.

| Lifecycle stage | Question |
|----------------|----------|
| Collect | Do we really need this? |
| Store | Encrypted? Minimal access? |
| Share | With whom, under what terms? |
| Archive | How long? Why? |
| Delete | When does this go away? |`,
      inputs: {
        prompts: [
          'Encrypting files on a hard drive is "encryption at _______".',
          'TLS / HTTPS provides encryption "in _______".',
          'A complete data lifecycle ends with a _______ stage.',
        ],
        answers: ['rest', 'transit', 'delete'],
        hints: ['Static storage.', 'Moving over network.', 'Lifecycle endpoint.'],
        explanation: 'At rest = stored; in transit = on the wire; deletion ends the lifecycle.',
      },
      dropdowns: {
        items: [
          { label: 'A program that needs O(1) average lookup by ID should use ___', options: ['a hash table', 'a linear list', 'no data structure', 'a sorted array'] },
          { label: 'Encryption-in-transit is provided by ___', options: ['TLS / HTTPS', 'a USB cable', 'a printer', 'a hard drive'] },
          { label: 'A "data minimization" principle says ___', options: ['collect only the data actually needed', 'collect everything possible', 'never store metadata', 'always use lossy compression'] },
        ],
        correct: ['a hash table', 'TLS / HTTPS', 'collect only the data actually needed'],
        hints: ['Hash = constant time.', 'Network encryption.', 'Less = safer.'],
        explanation: 'Hash tables = O(1) avg lookups. TLS = transit encryption. Data minimization = collect less.',
      },
      strategyMd: `## AP Exam Strategy: Cross-Topic Data

- Match data structure to algorithm need.
- Cite both at-rest and in-transit encryption for full protection.
- "Data minimization" is the big-picture privacy principle.
- Always include "delete" in the lifecycle.`,
      applied: [
        { q: 'A streaming service stores 10 years of every user\'s every click. The most CSP-aligned critique is ___', opts: ['storage is cheap, so indefinite retention of click logs raises no real concern.', 'data minimization: long-retained behavioral data is a privacy and breach risk.', 'encryption-at-rest alone fully neutralizes the risk of long-retained click logs.', 'switching the streaming protocol to UDP would address the underlying concern.'], a: 1, exp: 'Indefinite retention multiplies risk; minimization + sunset is the answer.' },
        { q: 'A program needs to repeatedly find "the highest priority task" from a large set. The most appropriate data structure is ___', opts: ['a heap (priority queue) supporting efficient extract-max operations', 'a singly linked list scanned linearly on each priority request', 'a binary file written sequentially with no in-memory index built', 'a hash table keyed by task ID with no ordering by priority'], a: 0, exp: 'Heaps support efficient repeated extraction of max/min.' },
      ],
    },
    5: {
      introMd: `## How Data Practices Have Evolved

| Era | Defining shift |
|-----|----------------|
| 1980s | Relational databases (SQL); structured tables. |
| 2000s | "Big data" — terabytes routine. |
| 2010s | NoSQL, cloud data warehouses, real-time streams. |
| 2020s | ML-ready datasets, vector databases, AI training corpora. |`,
      quiz1: [
        { q: '"Big data" most commonly refers to datasets that ___', opts: ['fit easily on a single floppy disk and can be processed by one program.', 'are too large or too fast for traditional single-machine processing.', 'are encrypted with strong cryptography before they touch persistent storage.', 'are written in pure binary rather than human-readable structured text.'], a: 1, exp: 'Big data = scale exceeds single-machine capability.' },
        { q: 'A vector database is most associated with ___', opts: ['storing user passwords for the application\'s authentication system.', 'storing embeddings used by ML/AI for similarity search.', 'compressing video streams before they are sent over the network.', 'routing IPv6 packets between nearby autonomous systems on the internet.'], a: 1, exp: 'Vector DBs power similarity search for AI/ML.' },
      ],
      contentMd: `## Storage Cost Collapse

| Year | $ / GB |
|------|--------|
| 1990 | ~$10,000 |
| 2000 | ~$10 |
| 2010 | ~$0.10 |
| 2020 | ~$0.02 |

This collapse changed what\'s feasible. "Just keep everything" became cheap. That has both research benefits and surveillance risks.

## Real-Time Streams

Many systems no longer batch-process daily logs; they consume data continuously:

- Financial trading.
- Fraud detection.
- Live dashboards.
- IoT sensor pipelines.

Streaming systems (Kafka, Flink, Spark Streaming) became standard.

## ML-Era Datasets

Modern AI training requires massive curated datasets. New questions:

- **Provenance**: where did the data come from?
- **Consent**: did sources agree to this use?
- **Bias**: who is represented, and who isn\'t?
- **Quality**: is the labeling reliable?

The dataset is now part of the AI system\'s ethical surface.`,
      inputs: {
        prompts: [
          'Datasets too large for a single machine are commonly called _______ data.',
          'A database optimized for similarity search of AI embeddings is a _______ database.',
          'Documenting where data came from is called data _______.',
        ],
        answers: ['big', 'vector', 'provenance'],
        hints: ['Term of art.', 'Similarity search.', 'Origin story.'],
        explanation: 'Big data = beyond single-machine. Vector DB = embeddings. Provenance = origin.',
      },
      dropdowns: {
        items: [
          { label: 'Cheap storage means ___', options: ['"keep everything" is feasible — and risky for privacy', 'data must always be deleted', 'no concern about retention', 'compression is unnecessary'] },
          { label: 'A real-time streaming system processes events ___', options: ['as they arrive, with low latency', 'only once per year', 'only after compression', 'only on weekends'] },
          { label: 'A model trained on a biased dataset will ___', options: ['likely produce biased outputs', 'magically fix the bias', 'always be perfectly fair', 'have no measurable effect'] },
        ],
        correct: ['"keep everything" is feasible — and risky for privacy', 'as they arrive, with low latency', 'likely produce biased outputs'],
        hints: ['Cheap storage = retention temptation.', 'Low latency.', 'Garbage in = garbage out.'],
        explanation: 'Cheap storage tempts over-retention. Streaming = low-latency. Biased data → biased model.',
      },
      strategyMd: `## AP Exam Strategy: Data Evolution

- Know "big data" means scale beyond single machines.
- Cheap storage doesn\'t mean unlimited retention should be policy.
- Modern AI raises new dataset-ethics questions.`,
      applied: [
        { q: 'A research team scrapes millions of web pages for AI training without considering authors\' consent. The most CSP-aligned critique is ___', opts: ['publicly reachable web pages can be used freely for any downstream purpose.', 'data provenance and consent matter; using sources without acknowledgment raises ethical concerns.', 'the resulting model will simply turn out to be too small to perform usefully.', 'transport-layer protocols make the question of consent essentially irrelevant.'], a: 1, exp: 'Provenance + consent are core dataset-ethics issues.' },
        { q: 'A retailer stores every transaction back to 2005. A breach exposes 20 years of purchase history. The most appropriate long-term mitigation is ___', opts: ['ignore the breach, since transactions over five years old can no longer cause harm.', 'adopt data minimization, retention limits, and encryption-at-rest going forward.', 'continue keeping every transaction forever and rely on stronger access policies.', 'switch the retailer\'s transport protocol from TCP to UDP for transaction logging.'], a: 1, exp: 'Combine minimization + sunsets + encryption.' },
      ],
    },
    6: {
      introMd: `## Data Workshop

Apply data vocabulary to AP-style scenarios.`,
      quiz1: [
        { q: 'A spreadsheet has 1000 rows. 50 are duplicates. The right first step is ___', opts: ['merge duplicates by primary key, deciding how to combine fields.', 'delete the spreadsheet entirely and ask for a fresh export from the source.', 'compress the spreadsheet so duplicate rows take up less disk space overall.', 'encrypt the spreadsheet so the duplicate rows can no longer be read directly.'], a: 0, exp: 'Deduplication is part of data cleaning.' },
        { q: 'A team finds that two students share the exact same name in different rows. The right way to distinguish them is ___', opts: ['guess which row is which based on the order they appear in the file.', 'use a unique ID column (such as student ID), not the name field.', 'silently delete one of the two rows so the duplicate apparent name disappears.', 'encrypt the name field so the records appear different to downstream code.'], a: 1, exp: 'Unique IDs are the standard way to distinguish records.' },
      ],
      contentMd: `## Worked: Cleaning A Survey

100 responses, but:

- 5 entries are blank for "age".
- 2 entries say "fish" for "age".
- 8 emails appear twice.

Steps:

1. Dedupe on email.
2. Coerce age to integer; drop or flag invalid.
3. Decide how to handle missing ages (drop / impute / flag).
4. Document each choice in a notes file.

## Worked: Choosing A Chart

| Question | Chart |
|----------|-------|
| How did sales trend in 2025? | Line. |
| Which product sold most? | Bar. |
| What\'s the age distribution of customers? | Histogram. |
| Do age and spending correlate? | Scatter. |

## Worked: Aggregation

To find average grade per period:

1. Group by class period.
2. Sum grades within each group.
3. Count students within each group.
4. Divide.

This is the standard "group by + aggregate" pattern of data analysis.`,
      inputs: {
        prompts: [
          'Removing exact-duplicate rows from a dataset is called _______.',
          'Replacing missing values with a calculated estimate is called _______.',
          'A "group by + aggregate" pattern is the basis of most _______ analyses.',
        ],
        answers: ['deduplication', 'imputation', 'data'],
        hints: ['No duplicates.', 'Filling gaps.', 'Common analysis pattern.'],
        explanation: 'Deduplication, imputation, and group-by aggregation are core data techniques.',
      },
      dropdowns: {
        items: [
          { label: 'A histogram is best for ___', options: ['showing the distribution of one numeric variable', 'comparing categorical sales', 'time-series trends', 'pie share'] },
          { label: 'When you need to combine "students" and "grades" tables, you ___', options: ['join on student ID', 'concatenate file contents', 'compress both', 'encrypt both'] },
          { label: 'Documenting cleaning decisions matters because ___', options: ['it makes the analysis reproducible', 'it makes files smaller', 'it encrypts data', 'it routes packets faster'] },
        ],
        correct: ['showing the distribution of one numeric variable', 'join on student ID', 'it makes the analysis reproducible'],
        hints: ['One variable, distribution.', 'Join key.', 'Reproducibility.'],
        explanation: 'Histograms = distribution of one variable. Joins use shared keys. Documentation enables reproducibility.',
      },
      strategyMd: `## AP Exam Strategy: Workshop

- Match the chart to the question.
- Always document cleaning choices.
- "Group by then aggregate" is the most common analysis pattern.
- Use IDs, not names, to distinguish records.`,
      applied: [
        { q: 'A team analyzes survey data and discovers responses from one school count 10x compared to others. The most appropriate response is ___', opts: ['ignore the imbalance and report the raw aggregate as if sampling were uniform.', 'either weight the responses or note the imbalance — uneven sampling distorts conclusions.', 'silently delete the other schools\' data so the dataset matches the dominant school.', 'encrypt the survey responses so the imbalance cannot be measured downstream.'], a: 1, exp: 'Uneven samples distort conclusions; weighting or noting the imbalance is standard.' },
        { q: 'A health app combines step counts with sleep data and shares "anonymized" exports for research. A CSP-aligned concern is ___', opts: ['stripping account names removes essentially all re-identification risk from the dataset.', 'the combined behavioral pattern (steps + sleep) may uniquely identify individuals.', 'the app is now using too little memory because the export reduced what it stored.', 'the app should switch from TCP to UDP for transmitting the export to researchers.'], a: 1, exp: 'Combined behavioral patterns are powerful quasi-identifiers.' },
      ],
    },
    7: {
      introMd: `## AP Exam Recap — Data

Core data concepts the AP exam tests.`,
      quiz1: [
        { q: 'Data ABOUT data is called ___', opts: ['scalar data, meaning a single value held in one cell of a spreadsheet', 'metadata, meaning information that describes other information', 'compressed data, meaning a re-encoded version that fits in fewer bits', 'lossy data, meaning a copy from which some original detail is missing'], a: 1, exp: 'Metadata = data about data.' },
        { q: 'A correlation between two variables ___', opts: ['proves that the first variable directly causes changes in the second variable.', 'does NOT necessarily prove one variable causes the other to change.', 'is mathematically the same statistical concept as a causal relationship.', 'is impossible to interpret unless the dataset is encrypted before analysis.'], a: 1, exp: 'Correlation ≠ causation.' },
      ],
      contentMd: `## Final Vocab

| Term | Definition |
|------|-----------|
| Data | Computer-storable representation of information. |
| Metadata | Data about data. |
| Cleaning | Removing duplicates, fixing missing or invalid values. |
| Aggregation | Combining many values (sum, mean, count). |
| Filtering | Keeping rows that match a condition. |
| Join | Combining datasets on a shared key. |
| Quasi-identifier | A field (or combination) that can identify an individual. |
| Data minimization | Collect only what you need. |
| Encryption at rest / in transit | Protect data on disk / on the network. |

## Common Pitfalls

- Treating correlation as causation.
- Choosing the wrong chart type.
- Forgetting metadata is also data.
- Indefinite retention without sunset clauses.
- Publishing "anonymized" data without auditing for re-identification.`,
      inputs: {
        prompts: [
          'Combining many values into one summary (sum, mean, count) is called _______.',
          'A field (or combination) that can identify a person is called a _______-identifier.',
          'Collecting only the data actually needed is called data _______.',
        ],
        answers: ['aggregation', 'quasi', 'minimization'],
        hints: ['Roll-up.', 'Almost-identifier.', 'Less = safer.'],
        explanation: 'Aggregation = roll-up. Quasi-identifiers can re-identify. Data minimization = collect less.',
      },
      dropdowns: {
        items: [
          { label: '"Garbage in, garbage out" emphasizes ___', options: ['data quality before analysis', 'compression', 'TLS', 'IPv6'] },
          { label: 'A bar chart vs. line chart distinction matters because ___', options: ['the choice should match the question being asked', 'they look the same', 'one is encrypted', 'one is faster on the wire'] },
          { label: 'A "right to be forgotten" policy implements ___', options: ['data deletion at user request', 'data duplication', 'data encryption', 'data aggregation'] },
        ],
        correct: ['data quality before analysis', 'the choice should match the question being asked', 'data deletion at user request'],
        hints: ['Quality matters.', 'Question-driven.', 'User control.'],
        explanation: 'Garbage in = garbage out. Charts should match questions. Right-to-be-forgotten = deletion.',
      },
      strategyMd: `## Final Exam Tips

- Know the data lifecycle: collect → process → store → share → archive → DELETE.
- Match chart to question.
- Watch for correlation/causation traps.
- Privacy framing: minimization + sunset + at-rest/in-transit encryption.`,
      applied: [
        { q: 'A spreadsheet of student grades is shared via email attachment. The most CSP-aligned critique is ___', opts: ['email attachments are inherently safe for any kind of educational data.', 'sensitive data sent unencrypted with weak access controls risks unauthorized disclosure.', 'the spreadsheet should simply be saved in a different file format before sending.', 'the school should switch its mail transport from TCP to UDP for performance.'], a: 1, exp: 'Sensitive data needs access control + encryption-in-transit.' },
        { q: 'A research team plans to publish a dataset with ages and ZIP codes "for transparency". The most appropriate concern is ___', opts: ['publishing aggregate ages and ZIP codes raises no meaningful re-identification risk.', 'these quasi-identifiers can re-identify many people; aggregate or coarsen before publishing.', 'the resulting dataset file will be too small for collaborators to download easily.', 'the resulting dataset file will be too large for collaborators to host inexpensively.'], a: 1, exp: 'Quasi-identifiers + public release = re-identification risk.' },
      ],
    },
  },
};

const cspDataCompressionAnalysis: Topic = {
  slug: 'csp-data-compression-analysis',
  display: 'Data Compression & Analysis',
  emoji: '🗜️',
  exportPrefix: 'cspDataCompressionAnalysis',
  idPrefix: 'cspdca',
  parts: {
    2: {
      introMd: `## Compression: Same Information, Fewer Bits

Compression takes a sequence of bits and produces a shorter sequence that decodes back to the original (lossless) or to an approximation of it (lossy).

| Type | Round-trip property | Examples |
|------|---------------------|----------|
| **Lossless** | Decoded = original, bit-for-bit | ZIP, PNG, FLAC |
| **Lossy** | Decoded ≈ original | JPEG, MP3, MP4 |`,
      quiz1: [
        { q: 'A medical X-ray must be compressed for storage AND must remain diagnostically accurate. Which type fits?', opts: ['Lossless compression that preserves every original pixel exactly.', 'Lossy compression at a high ratio that discards fine detail.', 'No compression of any kind, leaving the file at full original size.', 'Encryption of the original file without changing its underlying size.'], a: 0, exp: 'Lossless preserves every detail.' },
        { q: 'A vacation photo for casual social media is most often stored as ___', opts: ['Lossless TIFF that preserves every original pixel of the photo.', 'Lossy JPEG that is much smaller but visually almost identical.', 'Plain text that lists the RGB value of every pixel one per line.', 'Encrypted ZIP archive of the raw camera capture for sharing.'], a: 1, exp: 'JPEG\'s lossy compression trades trivial fidelity for big size savings.' },
      ],
      contentMd: `## Why Lossless Has A Limit

There\'s an information-theoretic minimum (entropy) for lossless compression. A truly random file cannot be losslessly compressed below its original size.

A simple example: a 100-character string of alternating "AB" patterns can be encoded as "AB × 50" — far smaller. A 100-character string of random characters has no pattern to exploit.

## Why Lossy Can Go Further

Lossy compression exploits **human perception**:

- **Audio**: humans don\'t hear above ~20 kHz; some bands can be discarded.
- **Image**: small color shifts in textures are imperceptible.
- **Video**: most pixels barely change between frames; encode the difference.

## A Tiny Lossless Example: Run-Length Encoding

| Original | Encoded |
|----------|---------|
| AAAABBBCCD | 4A3B2C1D |
| AAAAAAAAAA | 10A |
| ABCDEF | 1A1B1C1D1E1F (worse!) |

RLE wins on data with long runs and loses on data without them. Compression is **data-dependent**.`,
      inputs: {
        prompts: [
          'Compression that perfectly preserves the original data is called _______.',
          'Compression that drops some information to save space is called _______.',
          'The information-theoretic minimum size for lossless compression is set by _______.',
        ],
        answers: ['lossless', 'lossy', 'entropy'],
        hints: ['No information lost.', 'Some information lost.', 'Information theory.'],
        explanation: 'Lossless = perfect; lossy = approximate; entropy = lower bound.',
      },
      dropdowns: {
        items: [
          { label: 'Run-length encoding compresses well when data has ___', options: ['many long runs of repeated values', 'random values', 'encrypted values', 'short text'] },
          { label: 'JPEG compression discards ___', options: ['color and frequency detail humans rarely notice', 'all blue pixels', 'every other pixel', 'nothing'] },
          { label: 'A file that has been losslessly compressed and then losslessly decompressed ___', options: ['is bit-for-bit identical to the original', 'is approximately the original', 'is encrypted', 'cannot be opened'] },
        ],
        correct: ['many long runs of repeated values', 'color and frequency detail humans rarely notice', 'is bit-for-bit identical to the original'],
        hints: ['RLE pattern.', 'Perceptual coding.', 'Round-trip = identity.'],
        explanation: 'RLE wins on runs. JPEG drops imperceptible detail. Lossless round-trip = identity.',
      },
      strategyMd: `## AP Exam Strategy: Compression Basics

- "Must be perfect" → lossless.
- "Need much smaller, perceptual loss OK" → lossy.
- Lossless can\'t shrink random data below its entropy.
- Compression effectiveness is data-dependent.`,
      applied: [
        { q: 'A 100 MB log file made of repetitive event lines compresses with ZIP to 5 MB. A 100 MB encrypted random file barely compresses. The most accurate explanation is ___', opts: ['ZIP only works on text files and refuses to operate on binary data.', 'lossless compression exploits patterns; encrypted data has none to exploit.', 'the encryption algorithm is broken and is producing fully predictable output.', 'the random file is corrupted and the compressor refused to process it.'], a: 1, exp: 'Encryption ≈ random; no exploitable patterns.' },
        { q: 'A web service stores user-uploaded photos. Storage costs are large. The most reasonable design choice is ___', opts: ['store the originals with no compression so quality is always at its maximum.', 'store the upload AND a JPEG-compressed thumbnail; deliver per use case.', 'silently delete all photos after a fixed number of days to free up disk space.', 'switch the upload protocol from TCP to UDP to reduce server storage cost.'], a: 1, exp: 'Multiple resolutions / qualities — common modern design.' },
      ],
    },
    3: {
      introMd: `## Common Compression Patterns

| Pattern | Where used |
|---------|-----------|
| **Run-length encoding** | Simple lossless; runs of repeats. |
| **Dictionary coding** (LZ77, LZW) | ZIP, GIF, PNG — replace repeated substrings with references. |
| **Huffman coding** | Common values get short codes; rare values get long codes. |
| **Frequency-domain transforms** (DCT) | JPEG, MP3 — keep big frequency components, discard small. |
| **Differential encoding** | Video — encode changes between frames. |`,
      quiz1: [
        { q: 'Why does Huffman coding give shorter codes to common values?', opts: ['Short codes look fancier in a table, so they are reserved for top symbols.', 'Total bits = sum of (frequency × code length); minimizing puts short codes on common values.', 'Rare values are unimportant and can therefore be dropped without affecting the result.', 'It encrypts the data so that common symbols become unreadable to outside observers.'], a: 1, exp: 'Information-theoretic optimum: short codes for common, long for rare.' },
        { q: 'Why does video compression rely on differential encoding between frames?', opts: ['Adjacent video frames are bit-for-bit identical and only the first one needs to be stored.', 'Adjacent frames are usually similar; encoding the small delta is far smaller than re-encoding each frame.', 'It encrypts the video stream so that intermediate frames cannot be intercepted.', 'It is simply easier to write a decoder for differential encoding than for any other scheme.'], a: 1, exp: 'Inter-frame redundancy is the key win.' },
      ],
      contentMd: `## Dictionary Coding: A Mini-Walkthrough

Imagine encoding "the cat sat on the mat":

- Build a dictionary as you go.
- Replace repeated phrases with references.

After processing once, "the " might be code 0; "at" might be code 1. The compressed stream uses these short codes for repeated phrases.

This is the core idea behind ZIP, GZIP, PNG, and most modern lossless coders.

## Huffman Coding In One Picture

If a text uses A 50%, B 25%, C 12.5%, D 12.5%:

| Symbol | Code |
|--------|------|
| A | 0 |
| B | 10 |
| C | 110 |
| D | 111 |

Average bits per symbol: 0.5(1) + 0.25(2) + 0.125(3) + 0.125(3) = 1.75. Far less than 2 bits per symbol used by naive encoding.

## Lossy Frequency-Domain Coding

JPEG and MP3 use a math transform (DCT) that turns blocks of pixels (or audio samples) into **frequency components**. Big components matter to perception; small ones can be quantized away. Decompression rebuilds an approximation.

## Compression Vs. Encryption

| | Compression | Encryption |
|---|------------|-----------|
| Goal | Smaller | Confidential |
| Reverses with | Decompressor | Key |
| Output size | Smaller (or equal) | Roughly the same |
| Order | Compress THEN encrypt | (Don\'t reverse — encrypted data won\'t compress) |`,
      inputs: {
        prompts: [
          'Replacing repeated substrings with references to a built-up dictionary is called _______ coding.',
          'Giving short bit-codes to common symbols and long codes to rare ones is _______ coding.',
          'Encoding only the difference between adjacent frames in a video is _______ encoding.',
        ],
        answers: ['dictionary', 'Huffman', 'differential'],
        hints: ['ZIP-style.', 'Optimal symbol coding.', 'Frame deltas.'],
        explanation: 'Dictionary coding (LZ-family), Huffman coding, differential encoding.',
      },
      dropdowns: {
        items: [
          { label: 'PNG primarily relies on ___', options: ['lossless dictionary coding (deflate)', 'lossy DCT', 'no compression', 'audio sampling'] },
          { label: 'JPEG primarily relies on ___', options: ['lossy frequency-domain (DCT) coding', 'lossless RLE only', 'audio sampling', 'no compression'] },
          { label: 'For best results, you should ___', options: ['compress, then encrypt', 'encrypt, then compress', 'never combine them', 'do them in random order'] },
        ],
        correct: ['lossless dictionary coding (deflate)', 'lossy frequency-domain (DCT) coding', 'compress, then encrypt'],
        hints: ['PNG = lossless.', 'JPEG = lossy + DCT.', 'Compress first.'],
        explanation: 'PNG uses deflate (lossless). JPEG uses DCT (lossy). Compress before encrypting.',
      },
      strategyMd: `## AP Exam Strategy: Compression Patterns

- "PNG / ZIP / GIF / FLAC" → lossless.
- "JPEG / MP3 / MP4 / streaming video" → lossy.
- Differential encoding is the secret of video compression.
- Don\'t encrypt before compressing — it ruins the compression.`,
      applied: [
        { q: 'A team encrypts files THEN tries to ZIP them. The compressed size is barely smaller than the encrypted size. The most accurate explanation is ___', opts: ['ZIP is broken and the team should switch to a different lossless compressor.', 'encryption produces nearly random output that has no patterns for ZIP to exploit.', 'the underlying files are simply too large for the ZIP algorithm to handle well.', 'the underlying files are simply too small for any compression to be worthwhile.'], a: 1, exp: 'Compress-before-encrypt is the standard order.' },
        { q: 'A streaming service serves the same movie to viewers worldwide. The largest single saving in storage / bandwidth comes from ___', opts: ['serving the original raw uncompressed video file directly to every viewer.', 'lossy video codecs (H.264 / H.265 / AV1) using inter-frame coding plus DCT.', 'serving a lossless ZIP of the raw video file to every viewer instead of streaming.', 'no compression at all; relying entirely on faster modern viewer-side CPUs.'], a: 1, exp: 'Modern lossy video codecs deliver dramatic savings vs. raw or lossless.' },
      ],
    },
    4: {
      introMd: `## Compression Connects To Other Topics

| Connection | Why |
|-----------|-----|
| Compression ↔ Internet | Smaller files = faster downloads. |
| Compression ↔ Algorithms | Each codec is an algorithm. |
| Compression ↔ Data | Compression decisions affect what analysis is possible. |
| Compression ↔ Impact | Compression enables global media — and surveillance archives. |`,
      quiz1: [
        { q: 'Why does loading an image-heavy webpage feel faster on modern sites than 10 years ago?', opts: ['Modern client CPUs are slower, which somehow speeds up the perceived load time.', 'Better lossy codecs (WebP, AVIF) deliver smaller files at the same visual quality, often via CDNs.', 'Modern image files are stored as plain-text RGB tables that browsers render directly.', 'Browsers stopped using TCP for images and now fetch them over a faster ad-hoc protocol.'], a: 1, exp: 'Better codecs + CDN delivery = faster perceived loads.' },
        { q: 'A program needs to compute the average over a 10 GB JSON log. The most appropriate algorithmic approach is ___', opts: ['load the entire 10 GB file into memory and then iterate over it twice in place.', 'stream and compute the average in a single pass — O(n) time, O(1) extra space.', 'sort the file in place first and then compute the average from the sorted output.', 'encrypt the file first so the streaming average pass becomes safer to execute.'], a: 1, exp: 'Streaming aggregation handles large data in constant memory.' },
      ],
      contentMd: `## Big Files Demand Streaming Algorithms

When a file doesn\'t fit in memory, you need algorithms that process data in **a single pass** with constant or sub-linear memory:

| Task | Streaming approach |
|------|-------------------|
| Sum / mean | Running total; divide at the end. |
| Min / max | Compare each value to running extreme. |
| Count distinct (approximate) | HyperLogLog. |
| Top-K | Heap of size K. |

This connects compression-era data sizes to algorithm design.

## Compression And The Internet

| Layer | Compression role |
|-------|-----------------|
| Image | JPEG / WebP / AVIF. |
| Video | H.264 / H.265 / AV1. |
| Web responses | gzip / Brotli on text (HTML, JS, CSS, JSON). |
| Streaming | Adaptive bitrate (multiple quality levels). |

A modern webpage may be 10× larger uncompressed.

## Compression-Aware Privacy

Two warnings:

1. Compression timing/size attacks (CRIME / BREACH) leaked info from HTTPS responses; mitigation involves disabling certain compressions over TLS.
2. "Anonymized" datasets that are then compressed don\'t become more anonymous — compression doesn\'t help privacy.`,
      inputs: {
        prompts: [
          'An algorithm that processes data in a single pass without loading it all is called a _______ algorithm.',
          'Modern web responses commonly compress text with _______ or Brotli.',
          'Modern still-image formats designed to beat JPEG include WebP and _______.',
        ],
        answers: ['streaming', 'gzip', 'AVIF'],
        hints: ['One-pass.', 'Common HTTP compression.', 'AV1 image format.'],
        explanation: 'Streaming algorithms handle huge data. gzip / Brotli compress web text. WebP / AVIF outperform JPEG.',
      },
      dropdowns: {
        items: [
          { label: 'A 10 GB log requires ___', options: ['a streaming algorithm with O(1) extra memory', 'loading the whole file in memory', 'no algorithm', 'a different network protocol only'] },
          { label: 'Web servers commonly compress responses with ___', options: ['gzip / Brotli', 'JPEG', 'TLS only', 'IPv6'] },
          { label: 'Compression and encryption ___', options: ['serve different goals; both can be applied (compress THEN encrypt)', 'are the same thing', 'cannot be combined', 'are interchangeable'] },
        ],
        correct: ['a streaming algorithm with O(1) extra memory', 'gzip / Brotli', 'serve different goals; both can be applied (compress THEN encrypt)'],
        hints: ['Memory budget matters.', 'HTTP-layer compression.', 'Different concerns.'],
        explanation: 'Streaming = constant memory. gzip / Brotli on web. Compress then encrypt.',
      },
      strategyMd: `## AP Exam Strategy: Cross-Topic Compression

- "File too big for memory" → streaming algorithm.
- "Why is web fast now?" → better codecs + CDNs.
- "Order of compress / encrypt" → compress, then encrypt.`,
      applied: [
        { q: 'A streaming service uses adaptive bitrate so users with slow connections get a lower-quality version of the same video. The technique that makes this practical is ___', opts: ['lossless compression of every video, served at the same quality to every viewer.', 'precomputing multiple lossy-encoded renditions at different bitrates and serving the best fit.', 'serving the original raw uncompressed video stream to every viewer regardless of bandwidth.', 'switching the network layer from IPv4 to IPv6 so packets can self-prioritize the right quality.'], a: 1, exp: 'Adaptive bitrate streaming serves multiple lossy renditions.' },
        { q: 'A team plans to encrypt every log line BEFORE shipping it to a server, then ZIP the resulting archive nightly. The compressed nightly archive is barely smaller than the raw daily lines. The most direct fix is ___', opts: ['ignore the issue and accept the larger archive size as an unavoidable cost.', 'reverse the order: compress the logs first, then encrypt the compressed output.', 'switch the log shipping protocol from TCP to UDP for faster nightly transfers.', 'switch the archival format from ZIP to a lossy video codec like H.265 instead.'], a: 1, exp: 'Compress before encrypt; encrypted output has no patterns.' },
      ],
    },
    5: {
      introMd: `## How Compression Has Evolved

| Era | Defining codec |
|-----|---------------|
| 1980s | RLE, LZW (used in GIF). |
| 1990s | JPEG for images, MP3 for audio, MPEG-2 for video. |
| 2000s | H.264 (ubiquitous video), AAC (audio). |
| 2010s | WebP, HEVC (H.265). |
| 2020s | AV1, AVIF — open, royalty-free, even better quality-per-bit. |`,
      quiz1: [
        { q: 'AV1 / AVIF are notable for being ___', opts: ['proprietary closed standards licensed only to large corporate vendors.', 'open and royalty-free, with high compression efficiency per bit.', 'lossless-only formats, always preserving every original input pixel.', 'audio-only codecs designed primarily to compete with MP3 in music apps.'], a: 1, exp: 'AV1/AVIF emphasize openness and efficiency.' },
        { q: 'Modern video calls use codecs that perform best when ___', opts: ['the camera moves rapidly and the frame content changes constantly between frames.', 'the camera is mostly still — most pixels barely change, so differential encoding wins.', 'all incoming frames consist of pure random noise rather than recognizable scene content.', 'the network connection is encrypted by TLS rather than running in plaintext.'], a: 1, exp: 'Static scenes maximize inter-frame compression efficiency.' },
      ],
      contentMd: `## Codec Generations Roughly Halve File Sizes

| Codec | Era | Relative size for same quality |
|-------|-----|-------------------------------|
| MPEG-2 | 1990s | 1× |
| H.264 | 2000s | ~0.5× |
| H.265 | 2010s | ~0.3× |
| AV1 | 2020s | ~0.2× |

This is why streaming 4K to a phone became feasible.

## Open vs. Proprietary Codecs

Many great codecs (H.264, H.265) are encumbered by patents — companies pay licensing fees. AV1 / Opus / AVIF emerged as open alternatives, accepted by major browsers and platforms.

## ML-Era Compression

Modern research uses neural networks to learn compression strategies for specific domains (medical imaging, faces, speech). These can sometimes outperform hand-designed codecs but raise new questions about model bias and reproducibility.

## Compression And Storage Cost

Even as storage gets cheaper, compression remains crucial because **bandwidth** scales differently. A user\'s phone might have 1 TB of storage but only a few hundred MB of monthly mobile data.`,
      inputs: {
        prompts: [
          'An open, royalty-free modern video codec is _______.',
          'A modern still-image format derived from AV1 is _______.',
          'Compression matters most when _______ is constrained, even if storage is cheap.',
        ],
        answers: ['AV1', 'AVIF', 'bandwidth'],
        hints: ['Three letters.', 'AV1 + image.', 'Network capacity.'],
        explanation: 'AV1 = video codec. AVIF = AV1-derived image format. Bandwidth, not storage, often constrains.',
      },
      dropdowns: {
        items: [
          { label: 'Each generation of video codec has roughly ___ size for the same visual quality', options: ['halved', 'doubled', 'tripled', 'kept identical'] },
          { label: 'Open-codec adoption matters because ___', options: ['it avoids licensing fees and locks-in', 'it makes compression worse', 'it requires payment', 'it removes encryption'] },
          { label: 'A neural-net learned codec for medical images may ___', options: ['outperform general-purpose codecs but raises bias / reproducibility questions', 'always work for every domain', 'replace lossless completely', 'be the same as MP3'] },
        ],
        correct: ['halved', 'it avoids licensing fees and locks-in', 'outperform general-purpose codecs but raises bias / reproducibility questions'],
        hints: ['~2× efficiency per generation.', 'Open = no fees.', 'Domain-specific gains.'],
        explanation: 'Codecs roughly halve sizes per generation. Open codecs avoid lock-in. ML codecs can win — with caveats.',
      },
      strategyMd: `## AP Exam Strategy: Compression Evolution

- "Why is streaming HD over a phone feasible?" → modern lossy codecs + CDNs + adaptive bitrate.
- "Open vs. proprietary codec" → openness avoids licensing and lock-in.
- ML compression is real but raises bias / reproducibility concerns.`,
      applied: [
        { q: 'A video platform must serve the same movie to a 4G phone and a 4K TV. The most appropriate strategy is ___', opts: ['serve only one fixed quality level to every viewer regardless of device or network.', 'precompute multiple bitrates and resolutions and use adaptive streaming for the best fit.', 'serve a lossless original to every viewer and let each device discard what it cannot use.', 'switch the streaming pipeline to use no compression at all and rely on raw bandwidth.'], a: 1, exp: 'Adaptive bitrate is the modern delivery standard.' },
        { q: 'A research team uses an ML model to compress chest X-rays. The most appropriate validation is ___', opts: ['ship the model with no validation since the compression ratio is the only metric.', 'compare diagnostic accuracy on decompressed images vs. originals across diverse demographics.', 'check only the resulting file size and treat any reduction as an acceptable result.', 'check only that the encrypted output of the model is roughly the same length each time.'], a: 1, exp: 'Domain-specific compression must be validated for the domain\'s outcomes — and across demographics.' },
      ],
    },
    6: {
      introMd: `## Compression Workshop

Apply compression vocabulary to estimation and design problems.`,
      quiz1: [
        { q: 'A 1024×1024 24-bit raw image is ~3 MB. After JPEG it\'s about ___', opts: ['3 KB', '300 KB', '3 MB', '30 MB'], a: 1, exp: 'JPEG typically yields ~10× compression with imperceptible loss.' },
        { q: 'A 60-second 16-bit stereo CD-quality audio file is ~10 MB raw. After MP3 (192 kbps) it\'s about ___', opts: ['1.4 MB', '14 MB', '140 MB', '1.4 KB'], a: 0, exp: '192 kbps × 60 s / 8 = 1,440,000 bytes ≈ 1.4 MB.' },
      ],
      contentMd: `## Worked: Image Sizing

| Format | 1024×1024 24-bit |
|--------|-----------------|
| Raw RGB | 3 MB |
| PNG (lossless) | 1–2 MB (depends on content) |
| JPEG (high quality) | ~300 KB |
| WebP / AVIF | ~150–200 KB |

## Worked: Audio Sizing

| Format | 60 s stereo |
|--------|-------------|
| Raw 16-bit 44.1 kHz | ~10 MB |
| FLAC (lossless) | ~5–7 MB |
| MP3 192 kbps | ~1.4 MB |
| Opus 64 kbps | ~480 KB |

## Worked: Choosing A Format

| Use case | Best format |
|---------|-------------|
| Legal contract scan | PDF/A or PNG (lossless) |
| Casual photo | JPEG (or WebP) |
| Music distribution | AAC / Opus / MP3 |
| Streaming video | H.264 / AV1 |
| Medical image | DICOM (often with lossless option) |
| ZIP backup | gzip / 7z (lossless) |`,
      inputs: {
        prompts: [
          'A 1024×1024 24-bit image as raw RGB is about _______ MB.',
          'JPEG vs raw typically achieves ~_______ × compression for typical photos.',
          'For uncompressed CD-quality stereo audio, 1 second is roughly _______ KB.',
        ],
        answers: ['3', '10', '176'],
        hints: ['1024 × 1024 × 3.', 'Order of magnitude.', '44,100 × 2 × 2 / 1000.'],
        explanation: 'Raw image = 3 MB. JPEG ≈ 10× smaller. CD audio ≈ 176 KB/s stereo.',
      },
      dropdowns: {
        items: [
          { label: 'For a music streaming service prioritizing low data cost, the right choice is ___', options: ['Opus or AAC at moderate bitrate', 'lossless FLAC for everyone', 'no compression', 'JPEG audio'] },
          { label: 'For an archival scan that must remain identical decades from now, the right choice is ___', options: ['lossless format (PDF/A, TIFF lossless, PNG)', 'lossy JPEG at low quality', 'no encoding', 'MP3'] },
          { label: 'For a streaming video service, the right choice is ___', options: ['lossy codec (H.264 / H.265 / AV1) with adaptive bitrate', 'lossless only', 'plain text', 'no compression'] },
        ],
        correct: ['Opus or AAC at moderate bitrate', 'lossless format (PDF/A, TIFF lossless, PNG)', 'lossy codec (H.264 / H.265 / AV1) with adaptive bitrate'],
        hints: ['Efficient lossy audio.', 'Archive = lossless.', 'Streaming = lossy + adaptive.'],
        explanation: 'Opus/AAC for streaming audio. Lossless for archives. Lossy + adaptive for video.',
      },
      strategyMd: `## AP Exam Strategy: Workshop

- Memorize raw sizes: 24-bit image = W × H × 3 bytes. CD stereo = ~176 KB/s.
- Match format to use case: archive → lossless; consumer media → lossy.
- "Adaptive bitrate" is the right answer for variable-bandwidth video delivery.`,
      applied: [
        { q: 'A startup serves user photos. Storage is fine but mobile users complain about data usage. The single highest-leverage change is ___', opts: ['stop serving photos.', 'serve responsive, modern (WebP / AVIF) compressed versions appropriate to each device.', 'serve only lossless.', 'switch to UDP.'], a: 1, exp: 'Serving smaller modern image formats reduces bandwidth dramatically.' },
        { q: 'A school board wants to archive 50 years of student records. The most appropriate combination is ___', opts: ['lossy JPEG for everything.', 'lossless format + standardized container + checksums + planned migration to new formats over time.', 'plain text only, no metadata.', 'one big encrypted blob with no documentation.'], a: 1, exp: 'Long-term archival = lossless + standards + checksums + migration plan.' },
      ],
    },
    7: {
      introMd: `## AP Exam Recap — Compression & Analysis

Final review.`,
      quiz1: [
        { q: 'A photograph stored as a JPEG, then decoded back ___', opts: ['equals the original bit-for-bit because JPEG is a lossless format like PNG.', 'is approximately the original — JPEG is a lossy format that discards perceptual detail.', 'becomes plain text consisting of the RGB value of every pixel in the image.', 'is encrypted with a symmetric cipher whose key is embedded in the file header.'], a: 1, exp: 'JPEG is lossy.' },
        { q: 'A 100 KB plaintext file losslessly compressed to a 30 KB ZIP and decompressed ___', opts: ['equals the original 100 KB plaintext bit-for-bit because ZIP is a lossless format.', 'is approximately the original because ZIP discards detail to save space.', 'is encrypted with a symmetric cipher whose key is embedded in the ZIP header.', 'is corrupted because losslessly compressing plaintext can never round-trip cleanly.'], a: 0, exp: 'Lossless round-trip = identity.' },
      ],
      contentMd: `## Final Vocab

| Term | Definition |
|------|-----------|
| Lossless | Decoded data = original. |
| Lossy | Decoded ≈ original. |
| Entropy | Information-theoretic minimum size for lossless coding. |
| RLE | Run-length encoding. |
| Dictionary coding | LZ-family; replace repeated substrings with references. |
| Huffman coding | Common symbols → short codes. |
| DCT | Discrete cosine transform; basis of JPEG / MP3. |
| Differential encoding | Encode deltas (used in video). |
| Adaptive bitrate | Multiple quality levels for streaming. |

## Common Pitfalls

- Saying "compression makes data smaller" without distinguishing lossless vs lossy.
- Encrypting before compressing.
- Treating storage as the only constraint (bandwidth often matters more).
- Using lossy formats for archival or medical records.
- Ignoring openness / licensing of codecs.`,
      inputs: {
        prompts: [
          'JPEG is _______ compression.',
          'PNG is _______ compression.',
          'Encrypting before compressing usually makes the result _______.',
        ],
        answers: ['lossy', 'lossless', 'larger'],
        hints: ['Photos.', 'Web graphics.', 'No patterns to exploit.'],
        explanation: 'JPEG = lossy, PNG = lossless. Encrypted data has no compressible patterns.',
      },
      dropdowns: {
        items: [
          { label: 'A 10× size reduction with imperceptible quality loss describes ___', options: ['typical JPEG vs raw RGB', 'lossless ZIP on random data', 'TLS encryption', 'IPv6 routing'] },
          { label: 'Adaptive bitrate streaming relies on ___', options: ['precomputing multiple lossy renditions and serving the best fit per viewer', 'lossless only', 'no compression', 'one fixed quality'] },
          { label: 'A truly random file ___', options: ['cannot be losslessly compressed below its entropy bound', 'always compresses 10×', 'compresses to zero bytes', 'cannot be encrypted'] },
        ],
        correct: ['typical JPEG vs raw RGB', 'precomputing multiple lossy renditions and serving the best fit per viewer', 'cannot be losslessly compressed below its entropy bound'],
        hints: ['Photo savings.', 'Multiple bitrates.', 'Entropy bound.'],
        explanation: 'JPEG ≈ 10× over raw. Adaptive streaming = many bitrates. Random data resists lossless compression.',
      },
      strategyMd: `## Final Exam Tips

- Lossless vs lossy is the #1 distinction.
- Compress THEN encrypt.
- Different uses → different formats. Memorize: PNG/ZIP/FLAC = lossless; JPEG/MP3/MP4 = lossy.
- Adaptive bitrate is the answer to "how does streaming work for everyone".`,
      applied: [
        { q: 'A user worries that JPEG-saving a photo, opening it, and re-saving it causes "generation loss". The most accurate explanation is ___', opts: ['no — JPEG is a lossless format and round-tripping always preserves the original.', 'yes — each lossy re-encode discards more detail; edit lossless and export to JPEG once.', 'yes — JPEG actually adds random visual noise on purpose every time the file is saved.', 'no — file extensions are immutable so the data inside the JPEG never changes either.'], a: 1, exp: 'Repeated lossy re-encoding accumulates artifacts; edit lossless, export lossy.' },
        { q: 'A team needs to send 10 TB of mostly-text logs from a remote site to a data center. The most reasonable plan is ___', opts: ['ship the logs as-is over the network and accept the multi-day transfer time required.', 'compress with gzip / zstd before transfer; ship over a reliable channel; verify checksums.', 'encrypt the logs first and then compress, accepting that the compressed output is barely smaller.', 'switch the transport from TCP to UDP without compression to use less server-side memory.'], a: 1, exp: 'Compress text first, ship reliably, verify integrity.' },,
      ],
    },
  },
};

export const bi2ExtraTopics: Topic[] = [cspData, cspDataCompressionAnalysis];
