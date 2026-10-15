export const cspDataPart5Data = {
  topicSlug: "csp-data",
  sections: [
    {
      id: "cspdata5-intro",
      type: 'text' as const,
      content: `
# 📊 Data

**Part 5 of 7 — Large Data Sets, Scalability, and Bias**

---

## Why the Size of a Data Set Matters

- The **size** of a data set affects how much information can be extracted from it.
- **Large data sets are difficult to process using a single computer** and may require **parallel systems**: many processors or computers working at the same time.
- **Scalability**, a system's capacity to change in size and scale to meet new demands, is an important consideration, because the computing capacity of a system affects how data sets can be processed and stored.
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
            question: "Which data set is most likely to require parallel systems to process in a reasonable time?",
            options: [
              "A list of the 30 students enrolled in one classroom",
              "Every trip on a large city's transit system for ten years",
              "A spreadsheet of one family's monthly expenses",
              "The metadata of a single photo taken with a phone"
            ],
            correctAnswer: 1,
            explanation: "Large data sets are difficult to process on a single computer and may require parallel systems."
          },
          {
            question: "Machine learning and data mining have enabled innovation in medicine, business, and science. Which harmful use does the AP framework also point out?",
            options: [
              "These methods can only run on one computer at a time.",
              "Information found this way has been used to discriminate.",
              "These methods always remove any bias from their data.",
              "These methods cannot find patterns in large data sets."
            ],
            correctAnswer: 1,
            explanation: "Information discovered through machine learning and data mining has also been used to discriminate against groups of individuals."
          }
        ]
      }
    },
    {
      id: "cspdata5-content",
      type: 'text' as const,
      content: `
## Keeping Everything Has a Cost

Cheap storage makes it tempting to "just keep everything." Large collections of personal data have research benefits, but they also raise privacy risks: separate pieces of data can be combined to learn about individuals, and once information is shared online it is difficult to delete.

## Bias in Large Data Sets

- Computing innovations can reflect existing human biases, because of **biases written into the algorithms** or **biases in the data** used by the innovation.
- Problems of bias are often created by the **type or source** of data being collected. Bias is **not** eliminated by simply collecting more data.
- Biases can be embedded at all levels of software development, so programmers should take action to reduce bias in the algorithms they write.

## Using Other People's Data

Data and text created by others are their intellectual property. Using material created by someone else without permission raises legal and ethical concerns, and the source should always be cited.
      `
    },
    {
      id: "cspdata5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Data sets too large for a single computer may require _______ systems.

2) A system's capacity to change in size and scale to meet new demands is called _______.

3) A model trained on biased data will likely produce _______ results.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["parallel", "scalability", "biased"],
        hint1: "Many processors working at the same time.",
        hint2: "Can the system scale?",
        hint3: "Bias in, bias out.",
        explanation: "Large data sets may need parallel systems. Scalability is the capacity to grow. Biased data lead to biased results."
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
            options: ["\"keep everything\" is feasible — and risky for privacy", "\"keep everything\" is feasible — and free of privacy risk", "\"keep everything\" is required — by data-retention law", "\"compress everything\" is pointless — since disks are cheap"]
          },
          {
            label: "Adding more computers to keep up with a growing data set is an example of ___",
            options: ["scaling the system", "cleaning the data", "filtering the data", "compressing the data"]
          },
          {
            label: "A model trained on a biased dataset will ___",
            options: ["likely produce biased outputs", "correct the bias as it trains on more data", "be fair if the code itself is neutral", "average out the bias across its outputs"]
          }
        ],
        correctAnswers: ["\"keep everything\" is feasible — and risky for privacy", "scaling the system", "likely produce biased outputs"],
        hint1: "Cheap storage = retention temptation.",
        hint2: "Meeting new demands.",
        hint3: "Garbage in = garbage out.",
        explanation: "Cheap storage tempts over-retention. Adding capacity to meet demand is scaling. Biased data → biased model."
      }
    },
    {
      id: "cspdata5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Large Data Sets

- Large data sets are hard to process on one computer → parallel systems; scalability matters.
- Bias comes from the algorithm or the data; more data from the same source does not remove it.
- Keeping data forever increases privacy risk.
- Using others' work without permission raises legal and ethical concerns; cite sources.
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
              "publicly reachable web pages can be used freely for any downstream purpose, including training.",
              "the writers never gave permission, and using their work uncredited raises ethical issues.",
              "the resulting model will simply turn out to be too small to perform usefully.",
              "copyright never applies to text that has been published openly on the web."
            ],
            correctAnswer: 1,
            explanation: "Material created by others is their intellectual property; using it without permission or credit raises legal and ethical concerns."
          },
          {
            question: "A retailer stores every transaction back to 2005. A breach exposes 20 years of purchase history. The most appropriate long-term mitigation is ___",
            options: [
              "ignore it, since old transactions can no longer cause harm.",
              "keep only the data still needed, and encrypt whatever is kept.",
              "keep everything forever and rely on stronger passwords.",
              "rely on a firewall, since breaches only come from outside."
            ],
            correctAnswer: 1,
            explanation: "Data that is no longer kept cannot be exposed, and encryption protects what remains from unauthorized access."
          }
        ]
      }
    }
  ]
};
