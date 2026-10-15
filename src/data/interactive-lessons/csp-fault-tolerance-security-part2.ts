export const cspFaultToleranceSecurityPart2Data = {
  topicSlug: "csp-fault-tolerance-security",
  sections: [
    {
      id: "cspfts2-intro",
      type: 'text' as const,
      content: `
# 🛡️ Fault Tolerance & Security

**Part 2 of 7 — Key Processes**

---

## Fault Tolerance: Working Despite Failures

A **fault-tolerant** system continues operating correctly when a component fails. The key idea: **redundancy** plus a way to detect and recover from failures.

| Technique | How it tolerates faults |
|-----------|------------------------|
| **Redundancy** | Multiple copies of data or compute. |
| **Replication** | Same data in many locations. |
| **Failover** | Automatic switch to a backup. |
| **Retries** | Try again when a request fails. |
| **Graceful degradation** | Reduce functionality instead of crashing. |
      `
    },
    {
      id: "cspfts2-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A web service runs on 3 servers behind a load balancer. One server crashes; users keep working. This demonstrates ___",
            options: [
              "load balancing that makes each server faster, with no redundancy involved",
              "fault tolerance via redundancy and automatic failover to healthy servers",
              "data replication, which copies the crashed server's files onto a backup disk",
              "encryption, which keeps the crashed server's sessions hidden from attackers"
            ],
            correctAnswer: 1,
            explanation: "Redundancy + failover = classic fault tolerance."
          },
          {
            question: "When a sensor returns an obviously wrong value, the most defensive approach is ___",
            options: [
              "use the obviously wrong value anyway and propagate it into downstream calculations.",
              "detect the anomaly, then flag or skip that reading and keep using the valid data.",
              "crash the entire program so that no further sensor reading can ever be processed.",
              "shut off all sensors connected to the program until a human operator intervenes."
            ],
            correctAnswer: 1,
            explanation: "Defensive handling of bad inputs."
          }
        ]
      }
    },
    {
      id: "cspfts2-content",
      type: 'text' as const,
      content: `
## Why The Internet Survives Failures

The original Internet design (1960s ARPANET) assumed parts of the network would fail. Packet switching + dynamic routing means traffic can flow around broken links automatically.

| Failure | Mitigation |
|---------|-----------|
| Cable cut | Routers find alternate paths. |
| Server crash | Load balancer routes to a healthy peer. |
| Region outage | Multi-region deployment. |
| Disk failure | RAID + offsite backup. |

## Backups Are Different From Replication

| Concept | Purpose |
|---------|---------|
| **Replication** | Live copies for high availability. |
| **Backup** | Snapshot in time for recovery from corruption / mistake. |

If a bug DELETES data and replicates the deletion to all replicas, only a backup saves you.

## A Tiny Example: Retries With Backoff

    attempt ← 1
    REPEAT WHILE attempt ≤ 5:
      result ← TRY_REQUEST()
      IF result.success THEN STOP
      WAIT(2 ^ attempt seconds)   // exponential backoff
      attempt ← attempt + 1

Exponential backoff prevents retry storms from overwhelming a recovering service.
      `
    },
    {
      id: "cspfts2-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Tolerating component failure typically requires _______ — extra capacity / copies.

2) A system that reduces functionality instead of crashing during partial failure is showing _______ degradation.

3) A disk-failure-resistant arrangement of multiple disks is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["redundancy", "graceful", "RAID"],
        hint1: "Backup parts.",
        hint2: "Soft fail.",
        hint3: "Disk redundancy acronym.",
        explanation: "Redundancy / graceful degradation / RAID."
      }
    },
    {
      id: "cspfts2-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Replication alone does NOT protect against ___",
            options: ["a buggy delete that propagates to every replica", "a disk failure on one storage server", "the crash of one server while others stay up", "a hardware fault confined to a single machine in the cluster"]
          },
          {
            label: "Exponential backoff exists to ___",
            options: ["avoid hammering a recovering service with retry storms", "retry failed requests as fast as possible until they succeed", "guarantee every request succeeds on its very first attempt", "send each request to several servers at the same instant"]
          },
          {
            label: "A multi-region deployment protects against ___",
            options: ["region-level outages and natural disasters", "a bug shipped to every region at once", "a stolen admin password", "phishing emails sent to the company's employees"]
          }
        ],
        correctAnswers: ["a buggy delete that propagates to every replica", "avoid hammering a recovering service with retry storms", "region-level outages and natural disasters"],
        hint1: "Replication ≠ backup.",
        hint2: "Backoff = patience.",
        hint3: "Region resilience.",
        explanation: "Replication doesn't cover deletes; backoff prevents storms; multi-region survives outages."
      }
    },
    {
      id: "cspfts2-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Fault Tolerance

- Redundancy + failover = canonical fault-tolerance answer.
- Distinguish replication (live) from backups (point-in-time).
- The Internet itself is a giant fault-tolerant system.
      `
    },
    {
      id: "cspfts2-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A team replicates their database across 3 servers but takes no backups. A bug deletes a critical table. The most accurate framing is ___",
            options: [
              "replication is enough — three live copies work just as well as a backup would.",
              "the delete was copied to every replica, so only a backup could recover the table.",
              "replication with a short sync delay would have kept at least one replica free of the delete.",
              "the deleted table can be recovered by reading it back from whichever replica is the primary."
            ],
            correctAnswer: 1,
            explanation: "Replication ≠ backup."
          },
          {
            question: "A flaky network causes occasional request failures. The most CSP-aligned client behavior is ___",
            options: [
              "immediately retry forever, as fast as the client can produce new outbound requests.",
              "retry a small bounded number of times with exponential backoff, then surface a clear error.",
              "crash the application on the first failure so the user knows to restart it and try again later.",
              "silently ignore the failure and proceed as if the request had completed successfully."
            ],
            correctAnswer: 1,
            explanation: "Bounded retries with backoff is the standard pattern."
          }
        ]
      }
    }
  ]
};
