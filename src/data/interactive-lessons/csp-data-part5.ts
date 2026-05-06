export const cspDataPart5Data = {
  topicSlug: "csp-data",
  sections: [
    {
      id: "cspdata5-intro",
      type: 'text' as const,
      content: `
# 📊 Data

**Part 5 of 7 — Change Over Time**

---

## How Data Practices Have Evolved

| Era | Defining shift |
|-----|----------------|
| 1980s | Relational databases (SQL); structured tables. |
| 2000s | "Big data" — terabytes routine. |
| 2010s | NoSQL, cloud data warehouses, real-time streams. |
| 2020s | ML-ready datasets, vector databases, AI training corpora. |
      `
    },
    {
      id: "cspdata5-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "\"Big data\" most commonly refers to datasets that ___",
            options: [
              "fit easily on a single floppy disk and can be processed by one program.",
              "are too large or too fast for traditional single-machine processing.",
              "are encrypted with strong cryptography before they touch persistent storage.",
              "are written in pure binary rather than human-readable structured text."
            ],
            correctAnswer: 1,
            explanation: "Big data = scale exceeds single-machine capability."
          },
          {
            question: "A vector database is most associated with ___",
            options: [
              "storing user passwords for the application's authentication system.",
              "storing embeddings used by ML/AI for similarity search.",
              "compressing video streams before they are sent over the network.",
              "routing IPv6 packets between nearby autonomous systems on the internet."
            ],
            correctAnswer: 1,
            explanation: "Vector DBs power similarity search for AI/ML."
          }
        ]
      }
    },
    {
      id: "cspdata5-content",
      type: 'text' as const,
      content: `
## Storage Cost Collapse

| Year | $ / GB |
|------|--------|
| 1990 | ~$10,000 |
| 2000 | ~$10 |
| 2010 | ~$0.10 |
| 2020 | ~$0.02 |

This collapse changed what's feasible. "Just keep everything" became cheap. That has both research benefits and surveillance risks.

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
- **Bias**: who is represented, and who isn't?
- **Quality**: is the labeling reliable?

The dataset is now part of the AI system's ethical surface.
      `
    },
    {
      id: "cspdata5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Datasets too large for a single machine are commonly called _______ data.

2) A database optimized for similarity search of AI embeddings is a _______ database.

3) Documenting where data came from is called data _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["big", "vector", "provenance"],
        hint1: "Term of art.",
        hint2: "Similarity search.",
        hint3: "Origin story.",
        explanation: "Big data = beyond single-machine. Vector DB = embeddings. Provenance = origin."
      }
    },
    {
      id: "cspdata5-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Cheap storage means ___",
            options: ["\"keep everything\" is feasible — and risky for privacy", "data must always be deleted", "no concern about retention", "compression is unnecessary"]
          },
          {
            label: "A real-time streaming system processes events ___",
            options: ["as they arrive, with low latency", "only once per year", "only after compression", "only on weekends"]
          },
          {
            label: "A model trained on a biased dataset will ___",
            options: ["likely produce biased outputs", "magically fix the bias", "always be perfectly fair", "have no measurable effect"]
          }
        ],
        correctAnswers: ["\"keep everything\" is feasible — and risky for privacy", "as they arrive, with low latency", "likely produce biased outputs"],
        hint1: "Cheap storage = retention temptation.",
        hint2: "Low latency.",
        hint3: "Garbage in = garbage out.",
        explanation: "Cheap storage tempts over-retention. Streaming = low-latency. Biased data → biased model."
      }
    },
    {
      id: "cspdata5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Data Evolution

- Know "big data" means scale beyond single machines.
- Cheap storage doesn't mean unlimited retention should be policy.
- Modern AI raises new dataset-ethics questions.
      `
    },
    {
      id: "cspdata5-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A research team scrapes millions of web pages for AI training without considering authors' consent. The most CSP-aligned critique is ___",
            options: [
              "publicly reachable web pages can be used freely for any downstream purpose.",
              "data provenance and consent matter; using sources without acknowledgment raises ethical concerns.",
              "the resulting model will simply turn out to be too small to perform usefully.",
              "transport-layer protocols make the question of consent essentially irrelevant."
            ],
            correctAnswer: 1,
            explanation: "Provenance + consent are core dataset-ethics issues."
          },
          {
            question: "A retailer stores every transaction back to 2005. A breach exposes 20 years of purchase history. The most appropriate long-term mitigation is ___",
            options: [
              "ignore the breach, since transactions over five years old can no longer cause harm.",
              "adopt data minimization, retention limits, and encryption-at-rest going forward.",
              "continue keeping every transaction forever and rely on stronger access policies.",
              "switch the retailer's transport protocol from TCP to UDP for transaction logging."
            ],
            correctAnswer: 1,
            explanation: "Combine minimization + sunsets + encryption."
          }
        ]
      }
    }
  ]
};
