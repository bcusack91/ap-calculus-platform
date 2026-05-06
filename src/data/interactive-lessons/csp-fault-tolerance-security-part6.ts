export const cspFaultToleranceSecurityPart6Data = {
  topicSlug: "csp-fault-tolerance-security",
  sections: [
    {
      id: "cspfts6-intro",
      type: 'text' as const,
      content: `
# 🛡️ Fault Tolerance & Security

**Part 6 of 7 — Problem-Solving Workshop**

---

## Fault Tolerance & Security Workshop
      `
    },
    {
      id: "cspfts6-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A user notices their bank prompted for a one-time code via app push. This is most directly ___",
            options: [
              "encryption applied to the login request before it leaves the user's device",
              "multi-factor authentication via a second factor delivered through the app",
              "compression of the user's credentials before they are sent to the bank server",
              "a content-delivery-network optimization unrelated to the user's authentication"
            ],
            correctAnswer: 1,
            explanation: "A second factor = MFA."
          },
          {
            question: "A web service auto-restarts crashed worker processes. The general technique is ___",
            options: [
              "failover or self-healing — automated recovery from a worker process crash",
              "encryption of every restart event so workers cannot observe each other's state",
              "compression of the worker's in-memory state before its replacement starts up",
              "caching of the worker's most recent output so future requests can skip it entirely"
            ],
            correctAnswer: 0,
            explanation: "Auto-restart = a self-healing fault-tolerance pattern."
          }
        ]
      }
    },
    {
      id: "cspfts6-content",
      type: 'text' as const,
      content: `
## Worked: Designing An Outage-Resistant Service

| Layer | Plan |
|-------|------|
| Servers | Multiple instances behind a load balancer. |
| Region | Multi-region with automatic DNS failover. |
| Data | Replicated DB + nightly backups + retention plan. |
| Code | Blue/green or canary deploys to enable rollback. |
| Monitoring | Alerts on errors, latency, saturation. |
| People | On-call rotation + runbooks + post-incident review. |

## Worked: A Phishing Triage

1. **Don't click**.
2. Check sender domain (often misspelled).
3. Hover URLs to see the actual destination.
4. Verify out-of-band (call the company at a known number).
5. Report to IT / mark as phishing.

## Worked: Choosing Authentication

| Use case | Recommendation |
|---------|---------------|
| School portal | Username + password + MFA |
| API for partners | OAuth / API key + rate limits |
| Internal admin | SSO + hardware-key MFA + role-based access |
| Public read-only | No auth, rate-limit only |
      `
    },
    {
      id: "cspfts6-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A deployment style that gradually rolls out to a small fraction first is called a _______ release.

2) A document teammates follow during an outage is called a _______.

3) After an incident, the team usually runs a _______-mortem to learn from it.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["canary", "runbook", "post"],
        hint1: "Bird name.",
        hint2: "Step-by-step doc.",
        hint3: "After-action.",
        explanation: "Canary / runbook / postmortem."
      }
    },
    {
      id: "cspfts6-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Email from \"support@bnk-of-anytown.com\" warning your account is locked is most likely ___",
            options: ["phishing — typo-squatted domain", "a legitimate alert", "a CDN issue", "a TLS handshake"]
          },
          {
            label: "A canary release ___",
            options: ["routes a small fraction of traffic to the new version first to detect regressions", "replaces all traffic instantly", "eliminates testing", "turns off TLS"]
          },
          {
            label: "Tabletop exercises (drills) help teams ___",
            options: ["practice incident response BEFORE a real outage", "compress code", "replace monitoring", "shrink databases"]
          }
        ],
        correctAnswers: ["phishing — typo-squatted domain", "routes a small fraction of traffic to the new version first to detect regressions", "practice incident response BEFORE a real outage"],
        hint1: "Look-alike domain.",
        hint2: "Gradual rollout.",
        hint3: "Drills work.",
        explanation: "Phishing typo / canary / drills."
      }
    },
    {
      id: "cspfts6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Workshop

- Plan for failure: redundancy + monitoring + runbooks + drills.
- Layered authentication based on use case.
- Canary releases reduce blast radius of bad changes.
      `
    },
    {
      id: "cspfts6-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A team deploys a buggy change directly to all users. Errors spike. The most CSP-aligned post-mortem recommendation is ___",
            options: [
              "publicly punish the engineer responsible for writing the change that caused the spike.",
              "add canary or staged rollout, automated rollback on error spikes, and a blameless post-mortem.",
              "remove transport-layer security so future deploys can roll out faster than they currently do.",
              "compress the team's log files so the next bug investigation requires less disk space."
            ],
            correctAnswer: 1,
            explanation: "Process improvements + blameless post-mortems beat blame."
          },
          {
            question: "A user reports an email from \"amaz0n-security@example.com\". The most accurate response is ___",
            options: [
              "click the link in the email and explore the destination page to investigate further.",
              "don't click the link, verify the sender domain is legitimate, and report as phishing.",
              "reply to the email with the requested credentials so the sender can confirm the account.",
              "forward the email to all colleagues so they can each click and investigate independently."
            ],
            correctAnswer: 1,
            explanation: "Don't-click + verify + report is the standard."
          }
        ]
      }
    }
  ]
};
