/**
 * MCAT psych-soc passage bank — expansion wave 2 (agent-authored, every
 * passage carries needsReview: true pending SME review; gated by
 * scripts/import-passage-seeds.ts: KaTeX compile, chart integrity, key
 * balance, no letter-position references, dup checks vs the live banks).
 *
 * KEY INVARIANT: the passage runner does NOT shuffle options — keys were
 * authored position-balanced and explanations reference options by CONTENT,
 * so options can be reordered only via scripts/rebalance-passage-keys.ts.
 */
import type { MCATPassage } from '../types'

export const PSYCH_SOC_PASSAGES_2: MCATPassage[] = [
  {
    "id": "ps2-01",
    "section": "psych-soc",
    "discipline": "psychological disorders",
    "title": "Comparing CBT, Medication, and Their Combination in Depression",
    "passageText": "Investigators conducted a 12-week randomized controlled trial of treatments for major depressive disorder (MDD). Eligible adults met DSM criteria for a major depressive episode—at least five of nine characteristic symptoms present most of the day, nearly every day, for at least two weeks, with at least one symptom being depressed mood or anhedonia—and scored 20 or higher on the Hamilton Depression Rating Scale (HAM-D). Patients with psychotic features or current substance use disorder were excluded. Participants (N = 320) were randomized in equal numbers to cognitive behavioral therapy (CBT) alone, a selective serotonin reuptake inhibitor (SSRI) alone, combined CBT plus SSRI, or pill placebo.\n\nMedication and placebo were dispensed in identical-appearing capsules, and prescribers followed a fixed titration script, so participants and prescribers in the pill arms were blind to pill contents. Because psychotherapy cannot be concealed from the person receiving it, the CBT arms were necessarily unblinded to treatment modality; to limit measurement bias, outcomes were assessed by independent raters who were kept unaware of arm assignment. The primary outcome was remission, defined as a final HAM-D score of 7 or below.\n\nAttrition differed across arms. Rather than analyzing only participants who completed all 12 weeks, the investigators pre-specified an intent-to-treat analysis in which every randomized participant was included in the arm to which they were assigned, with dropouts counted as non-remitters. Results are shown in Table 1. The authors noted that SSRIs increase synaptic serotonin within hours of the first dose, yet clinical improvement typically lags by several weeks—a discrepancy they cited when discussing candidate mechanisms of antidepressant response.",
    "figure": "Table 1. Twelve-week outcomes by arm (intent-to-treat)\n\n| Arm | Randomized | Dropped out | Remission (HAM-D ≤ 7) |\n|---|---|---|---|\n| CBT alone | 80 | 8 | 40% |\n| SSRI alone | 80 | 16 | 41% |\n| CBT + SSRI | 80 | 10 | 58% |\n| Pill placebo | 80 | 20 | 25% |",
    "questions": [
      {
        "question": "Based on the diagnostic framing described in the passage, which of the following presentations would meet the symptom criteria for a major depressive episode?",
        "options": [
          "Four symptoms including depressed mood, present for three weeks",
          "Five symptoms, none of which is depressed mood or anhedonia, present for two weeks",
          "Five symptoms including anhedonia, present for two weeks",
          "Two symptoms including depressed mood, present for six months"
        ],
        "correctAnswer": 2,
        "explanation": "The passage states the DSM threshold: at least five symptoms for at least two weeks, with at least one being depressed mood or anhedonia. Five symptoms including anhedonia over two weeks satisfies all three requirements. Four symptoms falls below the five-symptom count no matter how long they persist. Five symptoms lacking both depressed mood and anhedonia fails the requirement that one of those two cardinal symptoms be present. Two symptoms over six months is far below the symptom count; a chronic low-grade course like that is closer to persistent depressive disorder than to a major depressive episode.",
        "skill": "diagnostic-criteria"
      },
      {
        "question": "Which comparison most directly isolates the pharmacological effect of the SSRI from expectancy and the nonspecific effects of pill-taking and clinical contact?",
        "options": [
          "SSRI alone vs. pill placebo",
          "SSRI alone vs. CBT alone",
          "CBT + SSRI vs. CBT alone",
          "SSRI alone vs. an untreated waitlist group"
        ],
        "correctAnswer": 0,
        "explanation": "The pill placebo arm holds constant everything about taking a capsule—expectancy of improvement, ritual of pill-taking, prescriber contact—except the active drug, so the SSRI-versus-placebo contrast isolates the pharmacological effect. Comparing the SSRI with CBT contrasts two active treatments and cannot separate drug action from expectancy. Comparing combination treatment with CBT alone tests the incremental benefit of adding medication on top of psychotherapy, but the CBT-alone arm takes no pill, so pill-related expectancy is not controlled. A waitlist group controls for the passage of time but not for expectancy, which is exactly what a placebo arm exists to control.",
        "skill": "research-design"
      },
      {
        "question": "The trial could not be fully double-blind primarily because:",
        "options": [
          "remission was assessed only by participant self-report",
          "participants receiving CBT necessarily knew they were receiving psychotherapy",
          "the placebo capsules looked different from the SSRI capsules",
          "the outcome raters were informed of each participant's arm assignment"
        ],
        "correctAnswer": 1,
        "explanation": "Psychotherapy cannot be concealed from the person receiving it (or from the therapist delivering it), so any arm containing CBT is unblinded to modality—this is an inherent limit of psychotherapy trials, not a design error. The passage contradicts the other claims: capsules were identical in appearance, and outcomes were scored by independent raters kept unaware of assignment, using the clinician-rated HAM-D rather than self-report alone.",
        "skill": "blinding"
      },
      {
        "question": "The investigators analyzed remission among all randomized participants, counting dropouts as non-remitters, rather than analyzing completers only. The primary rationale for this intent-to-treat approach is that it:",
        "options": [
          "increases statistical power by enlarging the analyzed sample",
          "removes the placebo response from the remission estimates",
          "guarantees each arm ends the trial with equal numbers of completers",
          "preserves the benefits of randomization and prevents differential dropout from biasing the comparison"
        ],
        "correctAnswer": 3,
        "explanation": "Randomization equates the arms only at baseline; if analysis is restricted to completers, and different kinds of people drop out of different arms (attrition ranged from 8 to 20 participants per arm here), the compared groups are no longer the randomized groups and the estimate is biased. Intent-to-treat keeps every randomized participant in their assigned arm, preserving comparability. It does not meaningfully change power relative to the randomized sample, does nothing to subtract placebo response (that is the placebo arm's job), and cannot equalize completion—dropouts still drop out; they are simply retained in the analysis.",
        "skill": "attrition-bias"
      },
      {
        "question": "The SSRI used in this trial most directly produces its initial neurochemical effect by:",
        "options": [
          "blocking presynaptic reuptake of serotonin, increasing serotonin availability in the synapse",
          "blocking postsynaptic serotonin receptors",
          "irreversibly inhibiting monoamine oxidase in the presynaptic terminal",
          "directly stimulating vesicular release of serotonin"
        ],
        "correctAnswer": 0,
        "explanation": "Selective serotonin reuptake inhibitors act on the presynaptic serotonin transporter, blocking reabsorption of released serotonin and thereby raising its synaptic concentration—consistent with the passage's note that synaptic serotonin rises within hours. Blocking postsynaptic receptors would reduce, not enhance, serotonergic signaling. Monoamine oxidase inhibition describes MAOIs, a different antidepressant class that prevents enzymatic breakdown of monoamines. Directly triggering vesicular release describes stimulant-like releasing agents, not SSRIs. The weeks-long lag before clinical improvement, despite the rapid rise in serotonin, is why downstream adaptations (such as receptor and neuroplastic changes) are thought to mediate the therapeutic effect.",
        "skill": "neurotransmitters"
      },
      {
        "question": "Which conclusion is best supported by the data in Table 1?",
        "options": [
          "The SSRI was clearly superior to CBT as a monotherapy",
          "Neither monotherapy produced more remission than pill placebo",
          "Combination treatment produced more remission than either monotherapy alone",
          "Attrition was highest in the combination arm"
        ],
        "correctAnswer": 2,
        "explanation": "Combination treatment reached 58% remission, exceeding both CBT alone (40%) and SSRI alone (41%), so the combination outperformed each monotherapy. The one-point difference between the SSRI (41%) and CBT (40%) is far too small to support a claim of clear superiority for the drug. Both monotherapies exceeded placebo (25%), contradicting the claim that neither beat placebo. Attrition was highest in the placebo arm (20 dropouts), not the combination arm (10).",
        "skill": "interpret-data"
      }
    ],
    "needsReview": true
  },
  {
    "id": "ps2-02",
    "section": "psych-soc",
    "discipline": "psychological disorders",
    "title": "D2 Receptor Occupancy and the Dopamine Hypothesis",
    "passageText": "Schizophrenia is characterized by positive symptoms—experiences added to normal function, such as hallucinations, delusions, and disorganized speech—and negative symptoms, which reflect diminished normal function, such as avolition, flat affect, and alogia. The classical dopamine hypothesis attributes positive symptoms to dopaminergic hyperactivity in the mesolimbic pathway; a later refinement links negative and cognitive symptoms to dopaminergic hypoactivity in mesocortical projections to the prefrontal cortex. Two long-standing observations motivated the hypothesis: drugs that increase synaptic dopamine can induce psychosis, and clinically effective antipsychotics are dopamine D2 receptor antagonists.\n\nTo relate receptor blockade to clinical effects, researchers used positron emission tomography (PET) with [11C]raclopride, a radioligand that binds D2 receptors. Each patient was scanned drug-free to establish baseline binding and rescanned at steady state on an assigned dose of a first-generation antipsychotic; a comparison group received a second-generation agent at equivalent clinical dosing. Because the antipsychotic and the tracer compete for the same receptors, receptor occupancy by drug was inferred from the change in radioligand binding between the two scans.\n\nAcross doses, occupancy rose steeply at first and then flattened (Figure 1). Clinical response emerged reliably once striatal D2 occupancy exceeded roughly 65%, whereas extrapyramidal symptoms (EPS)—parkinsonian rigidity, tremor, and bradykinesia—became common above roughly 80% occupancy. The second-generation agent produced substantial clinical benefit at occupancies below the first-generation curve, and, consistent with the mesocortical refinement, neither drug meaningfully improved negative symptoms, which in some patients worsened with escalating doses of the first-generation agent.",
    "chart": {
      "title": "Figure 1. Striatal D2 receptor occupancy vs. antipsychotic dose",
      "kind": "line",
      "xLabel": "Daily dose (first-generation equivalents)",
      "yLabel": "D2 receptor occupancy",
      "xUnit": "mg/day",
      "yUnit": "%",
      "xValues": [
        1,
        2,
        4,
        8,
        16
      ],
      "yValues": [
        38,
        55,
        68,
        78,
        86
      ],
      "seriesLabel": "First-generation antipsychotic",
      "comparisonSeries": [
        {
          "label": "Second-generation agent (equivalent clinical dosing)",
          "yValues": [
            22,
            34,
            45,
            53,
            61
          ]
        }
      ],
      "annotations": [
        {
          "xIndex": 2,
          "label": "~65% clinical response threshold crossed"
        },
        {
          "xIndex": 4,
          "label": ">80% occupancy: EPS common"
        }
      ]
    },
    "questions": [
      {
        "question": "Which of the following is a negative symptom of schizophrenia?",
        "options": [
          "Auditory hallucinations",
          "Avolition",
          "Persecutory delusions",
          "Disorganized speech"
        ],
        "correctAnswer": 1,
        "explanation": "Negative symptoms are reductions or losses of normal function; avolition—a marked decrease in motivated, self-initiated activity—is a core example, alongside flat affect and alogia. Auditory hallucinations, persecutory delusions, and disorganized speech are all positive symptoms: experiences or behaviors added to normal function rather than diminished from it.",
        "skill": "symptom-classification"
      },
      {
        "question": "Which finding provides the strongest direct support for the claim that mesolimbic dopamine hyperactivity produces positive symptoms?",
        "options": [
          "Negative symptoms often persist despite effective D2 antagonist treatment",
          "The second-generation agent achieved clinical benefit at relatively low D2 occupancy",
          "Schizophrenia shows substantially higher concordance in monozygotic than dizygotic twins",
          "Amphetamine, which increases synaptic dopamine, can induce paranoid psychosis in people without schizophrenia"
        ],
        "correctAnswer": 3,
        "explanation": "The hypothesis predicts that raising dopamine signaling should produce psychosis, and amphetamine-induced paranoid psychosis in previously nonpsychotic users is exactly that prediction borne out—converging with the passage's other pillar, that D2 antagonists relieve positive symptoms. The persistence of negative symptoms under D2 blockade and the second-generation agent's efficacy at low occupancy are findings that complicate the classical hypothesis rather than support it. Twin concordance establishes heritability but says nothing about which neurotransmitter system is involved.",
        "skill": "evaluate-evidence"
      },
      {
        "question": "According to Figure 1, raising the first-generation dose from 8 mg/day to 16 mg/day would most likely:",
        "options": [
          "increase the risk of extrapyramidal symptoms while adding little antipsychotic benefit, since occupancy climbs from 78% past the 80% EPS threshold after the response threshold was already exceeded",
          "roughly double the antipsychotic effect, because the dose doubles",
          "improve negative symptoms by pushing occupancy higher",
          "decrease occupancy as D2 receptors upregulate"
        ],
        "correctAnswer": 0,
        "explanation": "At 8 mg/day occupancy is already 78%, well above the ~65% response threshold, so the therapeutic criterion is met; moving to 16 mg/day raises occupancy to 86%, crossing the ~80% level above which EPS become common. The result is more motor side-effect risk with minimal added benefit. Antipsychotic effect does not scale with dose once the response threshold is exceeded—the curve is flattening, and occupancy rises only 8 percentage points as dose doubles. The passage states negative symptoms did not improve and sometimes worsened at higher first-generation doses. The figure shows occupancy rising monotonically with dose, not falling.",
        "skill": "interpret-data"
      },
      {
        "question": "The parkinsonian rigidity and tremor observed at high occupancy most directly result from D2 blockade in which pathway?",
        "options": [
          "Mesocortical",
          "Mesolimbic",
          "Nigrostriatal",
          "Tuberoinfundibular"
        ],
        "correctAnswer": 2,
        "explanation": "The nigrostriatal pathway (substantia nigra to dorsal striatum) governs motor control; blocking its D2 receptors mimics the dopamine deficit of Parkinson disease, producing rigidity, tremor, and bradykinesia. Mesolimbic blockade is thought to mediate the antipsychotic benefit itself. Mesocortical hypoactivity is linked to negative and cognitive symptoms, not parkinsonism. Tuberoinfundibular blockade removes dopamine's inhibition of prolactin release, causing hyperprolactinemia rather than motor symptoms.",
        "skill": "neural-pathways"
      },
      {
        "question": "Based on the mesocortical refinement described in the passage, why would escalating doses of a D2 antagonist be expected to fail to improve—and possibly worsen—negative symptoms?",
        "options": [
          "The drugs increase dopamine release in the prefrontal cortex",
          "Negative symptoms arise from serotonergic excess, which D2 antagonists do not address",
          "At clinical doses the drugs occupy too few D2 receptors to affect any symptoms",
          "Negative symptoms are linked to dopamine hypoactivity in mesocortical projections, a deficit that additional D2 blockade cannot correct and may deepen"
        ],
        "correctAnswer": 3,
        "explanation": "If negative symptoms reflect too little dopaminergic signaling in prefrontal projections, then a drug whose action is to block dopamine receptors addresses the wrong direction of dysfunction—further antagonism can only leave the cortical deficit in place or aggravate it, matching the observation that negative symptoms sometimes worsened at higher doses. D2 antagonists do not raise prefrontal dopamine release. The refinement described in the passage is dopaminergic, not serotonergic. And the occupancy data contradict the idea that clinical doses barely engage receptors—occupancy exceeded 65% at moderate doses, which is precisely when positive symptoms respond.",
        "skill": "dopamine-hypothesis"
      },
      {
        "question": "In this PET paradigm, D2 receptor occupancy by the antipsychotic was inferred from:",
        "options": [
          "an increase in [11C]raclopride binding relative to the drug-free baseline scan",
          "a decrease in [11C]raclopride binding relative to the drug-free baseline scan, because receptors occupied by drug are unavailable to the tracer",
          "the plasma concentration of the antipsychotic alone",
          "participants' self-reported symptom change between scans"
        ],
        "correctAnswer": 1,
        "explanation": "The drug and the radioligand compete for the same D2 binding sites, so the more receptors the antipsychotic occupies, the fewer remain available for raclopride and the lower the tracer signal falls relative to the drug-free scan—the binding reduction is the occupancy measure. An increase in tracer binding would imply receptors had become more available, the opposite of drug occupancy. Plasma drug level correlates only loosely with brain receptor engagement, which is why the imaging was done at all. Symptom self-report is a clinical outcome, not a receptor measurement.",
        "skill": "research-methods"
      }
    ],
    "needsReview": true
  },
  {
    "id": "ps2-03",
    "section": "psych-soc",
    "discipline": "psychological disorders",
    "title": "Learning Accounts and Exposure Treatments for Specific Phobia",
    "passageText": "A clinic specializing in anxiety disorders studied adults with specific phobia of dogs. Intake interviews revealed a common history: most patients traced their fear to a childhood incident in which a dog bit or lunged at them. In learning-theory terms, the pain and shock of the bite served as an unconditioned stimulus eliciting unconditioned fear, while the dog—previously neutral—came to elicit fear on its own. In the years since, patients had organized daily life around avoiding dogs: crossing streets, declining visits to friends with pets, refusing certain jobs. According to two-factor theory, such avoidance is what preserves a phobia long after the original incident: each successful avoidance produces immediate relief from mounting anxiety, and the feared encounter that could disconfirm the danger never occurs.\n\nThe clinic randomized 45 patients to one of two exposure-based treatments. Systematic desensitization trained patients in progressive muscle relaxation, then walked them up an individualized fear hierarchy—from viewing photographs of dogs to standing near a leashed dog—while maintaining the relaxed state at each step before advancing. Flooding instead exposed patients immediately and at length to the most feared situation (a room with a large, friendly off-leash dog) while preventing escape, until anxiety subsided on its own.\n\nOutcome was measured with a behavioral approach test (BAT): a trained rater scored how many of 15 graded steps toward a real dog each patient could complete. Among treatment completers, both groups improved substantially and equivalently on the BAT at one-month follow-up. However, 30% of flooding patients discontinued treatment before completion, compared with 7% of desensitization patients.",
    "questions": [
      {
        "question": "In the acquisition account described in the passage, the dog before the biting incident functioned as:",
        "options": [
          "an unconditioned stimulus",
          "an unconditioned response",
          "a conditioned response",
          "a neutral stimulus that became a conditioned stimulus through pairing with the bite"
        ],
        "correctAnswer": 3,
        "explanation": "Before conditioning, the dog elicited no fear—it was a neutral stimulus. Pairing with the bite (the unconditioned stimulus, which elicits pain and fear without any learning) transformed the dog into a conditioned stimulus that elicits fear on its own. The unconditioned stimulus in this episode is the bite itself, not the animal. The unconditioned response is the reflexive fear and pain during the attack, and the conditioned response is the learned fear to dogs afterward—both are responses, and the question asks about a stimulus.",
        "skill": "classical-conditioning"
      },
      {
        "question": "Crossing the street to avoid a dog produces immediate relief from anxiety, which makes future avoidance more likely. In operant terms, avoidance is being maintained by:",
        "options": [
          "positive reinforcement",
          "negative reinforcement",
          "positive punishment",
          "negative punishment"
        ],
        "correctAnswer": 1,
        "explanation": "The avoidance behavior removes an aversive state (mounting anxiety), and behavior that removes something aversive and thereby increases in frequency is negatively reinforced. Positive reinforcement would require the behavior to add a desirable stimulus, not subtract an aversive one. Both forms of punishment decrease the frequency of a behavior, but avoidance is becoming more frequent, so no punishment process fits.",
        "skill": "operant-conditioning"
      },
      {
        "question": "According to two-factor theory as described in the passage, avoidance keeps the phobia from fading over time because it:",
        "options": [
          "prevents exposure to the conditioned stimulus without the unconditioned stimulus, so the conditioned fear response never undergoes extinction",
          "intensifies the original unconditioned stimulus with each avoided encounter",
          "causes the fear to generalize to unrelated animals",
          "produces spontaneous recovery of the fear response"
        ],
        "correctAnswer": 0,
        "explanation": "Extinction of a conditioned fear requires repeated encounters with the conditioned stimulus (dogs) in the absence of the unconditioned stimulus (being bitten), so the learned association can weaken. Avoidance guarantees those disconfirming encounters never happen, freezing the fear in place—this is the second factor (operant) protecting the first (classical). Avoidance cannot alter the original unconditioned stimulus, which lies in the past. Generalization may occur in phobias but is not the mechanism two-factor theory identifies for maintenance. Spontaneous recovery is the reappearance of an extinguished response after a rest period, which presupposes extinction has occurred—the very thing avoidance prevents.",
        "skill": "two-factor-theory"
      },
      {
        "question": "Systematic desensitization differs from flooding chiefly in that desensitization:",
        "options": [
          "exposes the patient immediately to the most feared situation",
          "relies on punishing fearful responses",
          "pairs a relaxation response incompatible with fear against a graded hierarchy of feared stimuli, advancing only when each step is tolerated",
          "avoids any contact with the feared stimulus"
        ],
        "correctAnswer": 2,
        "explanation": "Desensitization is counterconditioning: the patient learns progressive relaxation, then confronts feared stimuli in graded steps while staying relaxed, so an incompatible response gradually replaces fear at each level of the hierarchy. Immediate, prolonged exposure to the most feared situation describes flooding, the comparison treatment. Neither therapy uses punishment. And both are exposure therapies—desensitization delivers contact with the feared stimulus gradually, not never.",
        "skill": "therapy-mechanisms"
      },
      {
        "question": "The completers-only comparison showed equal improvement in the two arms, but 30% of flooding patients dropped out versus 7% of desensitization patients. Why does this attrition pattern threaten the conclusion that the treatments are equally effective?",
        "options": [
          "Differential dropout means the flooding completers may be a self-selected, more distress-tolerant subgroup, so the compared groups are no longer equivalent despite randomization",
          "The behavioral approach test is incapable of detecting improvement",
          "Random assignment guarantees that the completer groups remained comparable, so any difference must be real",
          "Higher dropout increases the statistical power of the flooding arm"
        ],
        "correctAnswer": 0,
        "explanation": "Randomization equated the groups at baseline, but nearly a third of the flooding arm left before completing treatment—plausibly those least able to tolerate intense exposure. The surviving flooding completers may therefore differ systematically from desensitization completers, biasing the completers-only comparison; flooding's apparent equivalence might not hold for the kinds of patients who dropped out. The BAT did detect substantial improvement in both arms, so measurement insensitivity is not the issue. Randomization protects only the originally assigned groups, not subsets defined by post-randomization behavior like completion. Losing participants reduces, rather than increases, power.",
        "skill": "research-methods"
      }
    ],
    "needsReview": true
  },
  {
    "id": "ps2-04",
    "section": "psych-soc",
    "discipline": "psychological disorders",
    "title": "Fear Memory and Reconsolidation in PTSD",
    "passageText": "Posttraumatic stress disorder (PTSD) is marked by intrusion symptoms (unwanted trauma memories, flashbacks, nightmares), avoidance of reminders, negative alterations in cognition and mood, and heightened arousal and reactivity. Researchers studied 60 assault survivors with PTSD and 60 assault survivors without PTSD (trauma-exposed controls). Structural MRI showed smaller hippocampal volume in the PTSD group. During script-driven imagery—listening to a recorded narrative of one's own trauma—the PTSD group showed exaggerated amygdala activation and larger heart-rate responses. Surprisingly, morning basal cortisol was lower in the PTSD group than in controls, and a low-dose dexamethasone challenge suppressed cortisol more strongly in PTSD, indicating heightened responsiveness of the axis to glucocorticoid feedback.\n\nThe investigators framed intrusion symptoms as a disorder of emotional memory. Consolidation—stabilization of a memory after encoding—is enhanced by stress hormones and noradrenergic signaling acting on the amygdala, which may 'overconsolidate' the emotional core of the trauma while hippocampus-dependent encoding of context (where and when) is comparatively weak. A consolidated memory is not permanent, however: when reactivated by reminders, it can return to a labile state and must be restabilized.\n\nIn a second experiment, patients briefly recounted their trauma (reactivation) and then received either propranolol, a beta-adrenergic antagonist, or placebo. A third group received propranolol without recounting the trauma. One week later, script-driven imagery was repeated. Only the reactivation-plus-propranolol group showed reduced physiological reactivity to their trauma script; propranolol without reactivation had no effect.",
    "questions": [
      {
        "question": "The finding of LOWER basal cortisol in PTSD, together with stronger suppression after low-dose dexamethasone, is best interpreted as evidence of:",
        "options": [
          "adrenal exhaustion that has abolished cortisol production",
          "no involvement of the hypothalamic-pituitary-adrenal axis in PTSD",
          "enhanced negative-feedback sensitivity of the hypothalamic-pituitary-adrenal axis",
          "chronically elevated cortisol of the kind produced by ongoing unremitting stress"
        ],
        "correctAnswer": 2,
        "explanation": "Exaggerated suppression by a low dexamethasone dose means glucocorticoid feedback receptors are hyperresponsive: the axis shuts itself down more readily than normal, which also explains the low basal cortisol. Cortisol production is reduced, not abolished—patients still show measurable morning levels, so adrenal failure does not fit. The axis is clearly involved, just in an unexpected direction. Chronically elevated cortisol is the classic profile of ongoing stress and of major depression, and it is precisely the expectation this PTSD finding contradicts—which is what made the result surprising.",
        "skill": "neuroendocrine"
      },
      {
        "question": "A patient experiences a full flashback triggered by an isolated cue—a stranger's cologne—far from any context resembling the assault. Given the memory framework in the passage, this is best explained by:",
        "options": [
          "hippocampal overactivity binding the trauma memory too tightly to its original context",
          "amygdala damage preventing normal fear expression",
          "cerebellar mediation of procedural trauma memories",
          "a strongly consolidated amygdala-dependent emotional memory paired with weak hippocampus-dependent contextual encoding, so cues evoke intense fear untethered from time and place"
        ],
        "correctAnswer": 3,
        "explanation": "The passage's account is an imbalance: stress hormones and noradrenergic signaling overconsolidate the amygdala-dependent emotional core, while contextual encoding by the (smaller-volume) hippocampus is comparatively weak. A sensory fragment can then ignite the full fear response without the contextual frame that would mark the memory as past and elsewhere—hence a flashback in a safe setting. Hippocampal overactivity binding memory tightly to context predicts the opposite: fear confined to assault-like settings. The PTSD group showed amygdala hyperactivation, not damage, and fear expression is intact to a fault. The cerebellum and procedural memory play no role in the framework described.",
        "skill": "brain-regions"
      },
      {
        "question": "The process by which a reactivated memory returns to a labile state and must be restabilized is called:",
        "options": [
          "long-term potentiation",
          "reconsolidation",
          "systems consolidation",
          "proactive interference"
        ],
        "correctAnswer": 1,
        "explanation": "Reconsolidation is the restabilization required after a consolidated memory is reactivated and rendered temporarily labile—the window the propranolol experiment exploits. Long-term potentiation is a synaptic strengthening mechanism underlying learning, not a memory-updating window opened by retrieval. Systems consolidation is the gradual reorganization of memory from hippocampal dependence toward cortical storage over long periods. Proactive interference is old learning impairing new learning, a retrieval phenomenon unrelated to lability.",
        "skill": "memory-consolidation"
      },
      {
        "question": "What was the primary purpose of including the group that received propranolol WITHOUT recounting the trauma?",
        "options": [
          "To test whether the drug weakens the fear memory only when the memory has been reactivated into a labile state",
          "To establish baseline heart rate in trauma-naive healthy participants",
          "To enlarge the sample size of the treatment arm",
          "To keep participants blind to their group assignment"
        ],
        "correctAnswer": 0,
        "explanation": "Reconsolidation theory makes a specific prediction: propranolol can blunt noradrenergic restabilization only while the memory is labile, so the drug should work after reactivation and do nothing without it. The no-reactivation group tests exactly this, and its null result—no change in reactivity—rules out the alternative that propranolol simply dampens physiology or weakens memories whenever it is taken. All participants in this experiment were assault survivors with PTSD, so no group provides trauma-naive baselines. The group is a separate control condition, not padding for the treatment arm, and blinding was handled by the placebo comparison, not by this condition.",
        "skill": "research-design"
      },
      {
        "question": "Which of the following is an intrusion symptom of PTSD?",
        "options": [
          "Refusing to drive past the location of the assault",
          "An exaggerated startle response to unexpected noises",
          "Recurrent distressing nightmares that replay the trauma",
          "Persistent negative beliefs about oneself, such as 'I am permanently damaged'"
        ],
        "correctAnswer": 2,
        "explanation": "Intrusion symptoms are unwanted, involuntary re-experiencing of the trauma—recurrent distressing nightmares, flashbacks, and unbidden memories. Refusing to go near reminders is an avoidance symptom. Exaggerated startle belongs to the arousal-and-reactivity cluster. Enduring negative self-beliefs fall under negative alterations in cognition and mood. The four clusters are distinct diagnostic criteria, and only re-experiencing phenomena count as intrusions.",
        "skill": "symptom-classification"
      }
    ],
    "needsReview": true
  },
  {
    "id": "ps2-05",
    "section": "psych-soc",
    "discipline": "psychological disorders",
    "title": "Reward Circuitry and Cue Reactivity in Substance Use Disorder",
    "passageText": "Drugs of abuse converge on the mesolimbic reward pathway: dopaminergic neurons projecting from the ventral tegmental area to the nucleus accumbens, with further projections to prefrontal cortex. Cocaine amplifies this signal by blocking dopamine reuptake. In a longitudinal study of inpatients with cocaine use disorder, clinical histories showed a characteristic trajectory. Early use was driven by euphoria—the drug added a powerfully rewarding state. With repeated use, patients required escalating doses to achieve the effect once produced by small amounts, and between uses they experienced withdrawal: dysphoria, fatigue, and irritability. By the time of admission, most patients reported using less to feel good than to escape feeling bad.\n\nThe study focused on cue reactivity. At 1, 5, 15, 30, and 60 days of monitored abstinence, patients viewed two matched sets of images—drug-related cues (paraphernalia, powder, settings associated with use) and neutral cues—and rated craving on a 0–10 scale while skin conductance was recorded. Craving in response to neutral images stayed near floor at every visit. Craving in response to drug cues, however, did not decay with time away from the drug: it rose across the first month of abstinence, peaking around day 30 before declining modestly by day 60 (Figure 1). Skin conductance responses tracked the same pattern. The investigators noted that this time course, sometimes called incubation of craving, has been observed in animal models as escalating cue-induced drug seeking across forced abstinence, and they discussed its implications for the timing and duration of treatment.",
    "chart": {
      "title": "Figure 1. Cue-induced craving across monitored abstinence",
      "kind": "line",
      "xLabel": "Days of abstinence",
      "yLabel": "Mean craving rating",
      "xUnit": "days",
      "yUnit": "0–10 scale",
      "xValues": [
        1,
        5,
        15,
        30,
        60
      ],
      "yValues": [
        3.2,
        4.5,
        5.9,
        6.4,
        5.1
      ],
      "seriesLabel": "Drug-related cues",
      "comparisonSeries": [
        {
          "label": "Neutral cues",
          "yValues": [
            1,
            1.1,
            0.9,
            1,
            1.1
          ]
        }
      ],
      "annotations": [
        {
          "xIndex": 3,
          "label": "peak craving (~day 30)"
        }
      ]
    },
    "questions": [
      {
        "question": "The dopaminergic projection most central to the rewarding effects of cocaine described in the passage runs from the:",
        "options": [
          "substantia nigra to the dorsal striatum",
          "ventral tegmental area to the nucleus accumbens",
          "raphe nuclei to the prefrontal cortex",
          "locus coeruleus to the amygdala"
        ],
        "correctAnswer": 1,
        "explanation": "The mesolimbic pathway—dopaminergic neurons of the ventral tegmental area projecting to the nucleus accumbens—is the circuit on which drugs of abuse converge, and it is the projection the passage names. The nigrostriatal projection from substantia nigra to dorsal striatum serves motor control (and habit formation), not the primary reward signal. The raphe nuclei are serotonergic and the locus coeruleus is noradrenergic; neither is the dopaminergic reward projection.",
        "skill": "neural-pathways"
      },
      {
        "question": "Patients' need for escalating doses to achieve the effect once produced by small amounts is best termed:",
        "options": [
          "cross-dependence",
          "sensitization",
          "withdrawal",
          "tolerance"
        ],
        "correctAnswer": 3,
        "explanation": "Tolerance is a diminished response to a fixed dose with repeated use, so achieving the original effect requires more drug—exactly the escalation described. Cross-dependence refers to one drug preventing withdrawal from another drug of the same class. Sensitization is the opposite trajectory: an amplified response to the same dose, as seen for some cue- and locomotor effects. Withdrawal is the aversive syndrome that emerges when use stops (the dysphoria, fatigue, and irritability in the passage), not a change in dose requirement.",
        "skill": "pharmacology-concepts"
      },
      {
        "question": "By admission, most patients used cocaine 'less to feel good than to escape feeling bad.' In operant terms, drug taking at this late stage is maintained primarily by:",
        "options": [
          "negative reinforcement, because taking the drug removes the aversive withdrawal state",
          "positive punishment, because withdrawal is aversive",
          "positive reinforcement, because taking the drug adds euphoria",
          "extinction, because the drug no longer produces any effect"
        ],
        "correctAnswer": 0,
        "explanation": "When drug taking increases in frequency because it terminates dysphoria and other withdrawal symptoms, the behavior is being negatively reinforced—strengthened by removal of an aversive state. Punishment would decrease drug taking, which is not what is happening. Positive reinforcement (behavior strengthened by an added rewarding state) describes the early, euphoria-driven phase the passage explicitly contrasts with late-stage use. Extinction would require the reinforcer to be withheld and the behavior to decline; instead the behavior persists under a different reinforcement contingency.",
        "skill": "operant-conditioning"
      },
      {
        "question": "Craving and skin conductance responses elicited by paraphernalia images, but not by neutral images, most directly reflect:",
        "options": [
          "habituation to the drug-taking context",
          "classical conditioning, in which drug-associated cues have become conditioned stimuli that elicit conditioned craving and physiological responses",
          "operant shaping of successive approximations to drug seeking",
          "observational learning from other patients on the unit"
        ],
        "correctAnswer": 1,
        "explanation": "Stimuli repeatedly paired with drug effects—paraphernalia, settings, sights of the drug—become conditioned stimuli, and the craving and arousal they evoke are conditioned responses; the flat response to matched neutral images shows the reaction is specific to learned drug associations. Habituation is a decrease in responding with repeated exposure, the opposite of the strong, persistent reactions observed. Shaping is a training procedure that reinforces successive approximations of a target behavior, not a cue-elicited response. Observational learning involves acquiring behavior by watching models, which cannot explain physiological reactivity to images of one's own drug cues.",
        "skill": "classical-conditioning"
      },
      {
        "question": "Which implication for treatment is best supported by the time course in Figure 1?",
        "options": [
          "Relapse vulnerability is highest in the first 24 hours of abstinence and declines steadily thereafter",
          "Neutral everyday stimuli come to elicit progressively greater craving over abstinence",
          "Cue-induced craving is fully extinguished by day 60",
          "Vulnerability to cue-triggered relapse can grow during early abstinence, so treatment and cue-management support should extend well beyond detoxification"
        ],
        "correctAnswer": 3,
        "explanation": "Cue-induced craving rose from 3.2 on day 1 to a peak of 6.4 around day 30—the incubation pattern—meaning a patient discharged after detoxification re-enters a cue-rich world at a moment when reactivity is climbing, not fading; sustained treatment through and beyond that window is the supported implication. The data directly contradict a steadily declining risk from day 1, since day-1 craving was the lowest measured. Neutral-cue craving stayed near floor at every visit, so generalized craving growth is not supported. And day-60 craving (5.1) remained well above the day-1 level, so extinction was far from complete.",
        "skill": "interpret-data"
      }
    ],
    "needsReview": true
  },
  {
    "id": "ps2-06",
    "section": "psych-soc",
    "discipline": "social-psychology",
    "title": "Conformity in Video-Conference Groups",
    "passageText": "Researchers adapted a classic line-judgment conformity paradigm to a video-conference setting. Participants (N = 240) joined a live call with what they believed were fellow participants but were actually confederates following a script. On each of 18 trials, the group viewed a standard line and three comparison lines and stated which comparison line matched the standard. The task was deliberately unambiguous: control participants responding alone erred on fewer than 1% of trials. On 12 critical trials, all confederates gave the same obviously wrong answer before the participant responded.\n\nTwo factors were manipulated between subjects. First, group size: participants faced 1, 2, 4, or 8 confederates. Second, response mode: in the public condition, participants announced their answer aloud on camera after the confederates; in the private condition, participants heard the confederates' answers but typed their own response into a form visible only to the experimenters. In a separate unanimity condition (4 confederates, public responding), one confederate broke with the majority on every critical trial by giving a different wrong answer; conformity to the majority fell to 6% of critical trials.\n\nThe researchers reasoned that because the correct answer was visually obvious, participants who echoed the majority in public but answered correctly in private were unlikely to have genuinely doubted their own eyes. In post-experiment interviews, most conforming participants reported knowing the majority was wrong but feeling reluctant to stand out; a minority reported wondering whether the display rendered differently on their screen.",
    "chart": {
      "title": "Figure 1. Percentage of critical trials on which participants conformed to the majority, by group size and response mode",
      "kind": "line",
      "xLabel": "Number of confederates",
      "yLabel": "Conforming responses (% of critical trials)",
      "yUnit": "%",
      "xValues": [
        1,
        2,
        4,
        8
      ],
      "yValues": [
        11,
        25,
        33,
        34
      ],
      "seriesLabel": "Public responding",
      "comparisonSeries": [
        {
          "label": "Private responding",
          "yValues": [
            4,
            7,
            9,
            9
          ]
        }
      ],
      "annotations": [
        {
          "xIndex": 2,
          "label": "conformity plateaus"
        }
      ]
    },
    "questions": [
      {
        "question": "Which statement best summarizes the relationship between group size and public conformity shown in Figure 1?",
        "options": [
          "Conformity increased by a constant amount with each additional confederate across the whole range",
          "Conformity was essentially unrelated to the number of confederates",
          "Conformity rose steeply up to about four confederates and then leveled off",
          "Conformity peaked with a single confederate and declined as the group grew"
        ],
        "correctAnswer": 2,
        "explanation": "Public conformity climbed from 11% with one confederate to 25% with two and 33% with four, but adding four more confederates raised it only to 34%—a plateau, which matches the classic finding that majorities beyond three or four add little pressure. A constant per-confederate increase is contradicted by the near-flat segment from four to eight. Claiming no relationship ignores the tripling between one and four confederates. A single-confederate peak reverses the actual pattern, since one confederate produced the lowest conformity.",
        "skill": "interpret-the-data"
      },
      {
        "question": "The sharp drop in conformity when participants typed answers privately (e.g., 33% to 9% with four confederates) most directly indicates that public conformity in this study was driven primarily by:",
        "options": [
          "Normative social influence",
          "Informational social influence",
          "Deindividuation",
          "Groupthink"
        ],
        "correctAnswer": 0,
        "explanation": "Normative influence is conformity to gain acceptance or avoid standing out; it depends on the group seeing one's response, so removing surveillance (private typing) should—and did—collapse conformity. Informational influence, going along because one believes the group is correct, would persist in private, yet private conformity was near the control error rate. Deindividuation involves loss of self-awareness in anonymous crowds and would, if anything, predict more norm violation when anonymous, not the observed accuracy. Groupthink describes flawed consensus-seeking in cohesive decision-making groups deliberating together, not individual perceptual judgments.",
        "skill": "which-concept"
      },
      {
        "question": "In the unanimity condition, a single confederate who gave a DIFFERENT wrong answer still cut conformity from 33% to 6%. This result is best explained by the idea that:",
        "options": [
          "The dissenter provided participants with the correct answer to copy",
          "Any break in unanimity relieves the normative pressure to match the majority, even if the dissenter is also wrong",
          "Smaller majorities always produce less conformity than larger ones",
          "The dissenter increased task ambiguity, strengthening informational influence"
        ],
        "correctAnswer": 1,
        "explanation": "The dissenter's answer was itself wrong, so participants could not simply copy a correct model; what changed is that disagreeing with the group no longer meant standing alone, which is the classic unanimity effect—social support, even inaccurate support, frees people to report what they see. The majority still contained four confederates, and the group-size curve shows a four-person majority normally yields high conformity, so majority size alone cannot explain the drop. Greater ambiguity would be expected to raise conformity through informational influence, the opposite of what occurred.",
        "skill": "social-influence"
      },
      {
        "question": "Why was it methodologically important that the line-judgment task was unambiguous, with control participants erring on fewer than 1% of trials alone?",
        "options": [
          "It guaranteed that all participants had equal visual acuity",
          "It made the study a true double-blind experiment",
          "It increased statistical power by reducing the total number of trials needed",
          "It allowed conforming responses to be attributed to social pressure rather than genuine uncertainty about the answer"
        ],
        "correctAnswer": 3,
        "explanation": "Because participants could plainly see the correct answer, agreement with an obviously wrong majority operationalizes yielding to social pressure; with an ambiguous task, matching the group could simply reflect reasonable reliance on others' judgments, confounding normative and informational processes. The design does not measure or equate visual acuity across individuals. The experimenters and confederates knew the hypothesis, so nothing about task clarity creates blinding. Task difficulty is unrelated to how many trials are needed for power.",
        "skill": "experimental-reasoning"
      },
      {
        "question": "Suppose the researchers reran the study using a genuinely ambiguous task, such as estimating how far a point of light appears to move in a dark room. Based on prior research, private-response conformity would most likely:",
        "options": [
          "Increase substantially, because participants would treat others' answers as useful information",
          "Decrease, because ambiguity makes people distrust the group",
          "Stay near zero, because private responding eliminates all social influence",
          "Match public conformity exactly at 34%"
        ],
        "correctAnswer": 0,
        "explanation": "With no objective anchor, people use others' estimates as evidence about reality—informational influence—and such convergence persists in private and even when later responding alone, as in classic autokinetic-norm studies. Ambiguity increases rather than decreases reliance on the group, so distrust is the wrong prediction. Private responding removes normative pressure but not informational influence, so conformity would not remain near zero. There is no basis for expecting private conformity to equal any specific public figure; the two modes reflect different mechanisms.",
        "skill": "apply-a-theory"
      },
      {
        "question": "A participant who repeatedly announced the majority's wrong answer aloud but reported in the interview that she never doubted her own perception was exhibiting:",
        "options": [
          "Internalization of the group norm",
          "Obedience to authority",
          "Compliance—public agreement without private acceptance",
          "Identification with the experimenter"
        ],
        "correctAnswer": 2,
        "explanation": "Publicly matching the group while privately maintaining one's own judgment is the definition of compliance, the shallowest form of conformity. Internalization would require actually coming to believe the group's answer, which she explicitly denied. Obedience involves following a direct order from an authority figure, and no one instructed her how to answer. Identification means conforming to sustain a valued relationship with a person or group one admires, and the relevant influence here came from peer confederates she had no ongoing relationship with, alongside her stated motive of not standing out.",
        "skill": "which-concept"
      }
    ],
    "needsReview": true
  },
  {
    "id": "ps2-07",
    "section": "psych-soc",
    "discipline": "social-psychology",
    "title": "Identity Salience and Test Performance",
    "passageText": "Investigators examined whether the framing of a difficult mathematics test alters performance among students targeted by a negative ability stereotype. Female and male undergraduates (N = 210), matched on prior SAT-Math scores, were randomly assigned to one of three conditions before taking the same 25-item test. In the threat condition, instructions described the test as diagnostic of mathematical ability and mentioned that gender differences on the test were being studied. In the threat-plus-affirmation condition, students received the same instructions but first spent ten minutes writing about a personally important value unrelated to academics. In the reduced-threat condition, instructions described the test as a problem-solving exercise on which gender differences had never been found.\n\nDuring a mid-test pause, all participants completed a brief operation-span task indexing working-memory capacity and rated their current anxiety. Statistical analyses showed that, among women, the effect of test framing on math performance was substantially accounted for by condition differences in operation-span scores; anxiety ratings showed a similar but weaker pattern. Men's scores did not differ reliably across conditions on any measure.\n\nThe researchers interpreted the results within a resource-depletion account: when a negative stereotype about one's group is made relevant to a task, monitoring for failure and suppressing self-doubt consume executive resources that the task itself requires. They noted that the affirmation writing exercise, though unrelated to mathematics, restored most of the performance gap, and proposed such exercises as scalable classroom interventions.",
    "chart": {
      "title": "Figure 1. Mean math test score (out of 25) by condition and gender",
      "kind": "bar",
      "xLabel": "Instruction condition",
      "yLabel": "Mean score (items correct)",
      "xValues": [
        "Threat",
        "Threat + affirmation",
        "Reduced threat"
      ],
      "yValues": [
        14.2,
        18.1,
        18.8
      ],
      "seriesLabel": "Women",
      "comparisonSeries": [
        {
          "label": "Men",
          "yValues": [
            18.6,
            18.4,
            18.7
          ]
        }
      ],
      "annotations": [
        {
          "xIndex": 0,
          "label": "gender gap appears only here"
        }
      ]
    },
    "questions": [
      {
        "question": "The performance decrement among women told that the test was diagnostic and that gender differences were being studied best illustrates:",
        "options": [
          "Self-serving bias",
          "Stereotype threat",
          "Out-group homogeneity",
          "A teacher-expectancy (Pygmalion) effect"
        ],
        "correctAnswer": 1,
        "explanation": "Stereotype threat is the situational risk of confirming a negative stereotype about one's group, which impairs performance precisely when the stereotype is made relevant—here, by framing the test as diagnostic and gender-relevant. Self-serving bias concerns attributing one's successes internally and failures externally, an attributional pattern, not a performance effect. Out-group homogeneity is the perception that members of other groups are all alike. A teacher-expectancy effect requires an evaluator whose expectations change how they treat students; here the instructions were standardized and no evaluator interacted differentially with participants.",
        "skill": "identify-the-concept"
      },
      {
        "question": "The finding that condition differences in women's math scores were substantially accounted for by operation-span scores most directly supports the claim that working memory acted as a:",
        "options": [
          "Confounding variable that invalidates the design",
          "Moderator that determines who is vulnerable to threat",
          "Manipulation check on the instructions",
          "Mediator carrying the effect of threat on performance"
        ],
        "correctAnswer": 3,
        "explanation": "A mediator is an intervening variable on the causal path: the manipulation reduced available working memory, which in turn lowered test scores, and statistically accounting for the mediator absorbs the condition effect—exactly the reported pattern. A confound is a third variable associated with condition assignment by accident, which randomization rules out here; working memory was measured as an outcome of the manipulation, not a preexisting difference. A moderator would be a variable, like strength of identification with math, that changes the size of the threat effect across people, not one that transmits it. A manipulation check would verify that participants noticed or believed the framing, which the span task does not assess.",
        "skill": "causal-inference"
      },
      {
        "question": "Within the researchers' resource-depletion account, the values-affirmation exercise most plausibly improved women's scores by:",
        "options": [
          "Buffering self-worth so that fewer executive resources were spent monitoring for failure and suppressing doubt",
          "Teaching mathematical content relevant to the test items",
          "Making participants unaware that gender differences were being studied",
          "Increasing men's scores, which narrowed the gender gap"
        ],
        "correctAnswer": 0,
        "explanation": "Affirming an unrelated personal value secures a sense of global self-integrity, so a poor test outcome poses less threat to the self; with less vigilance and suppression, working memory is freed for the math itself—consistent with the mediation evidence. The writing task contained no mathematics, so content tutoring cannot explain the gain. Affirmation participants heard the identical diagnostic, gender-relevant instructions, so the threat information was not concealed. The figure shows men's scores were essentially flat across conditions; the gap closed because women's scores rose.",
        "skill": "apply-a-theory"
      },
      {
        "question": "Matching the gender groups on prior SAT-Math scores before random assignment primarily strengthens which inference?",
        "options": [
          "That the test had high internal-consistency reliability",
          "That the sample was representative of all undergraduates",
          "That performance differences across conditions reflect the situational framing rather than preexisting ability differences",
          "That working memory causes mathematical ability"
        ],
        "correctAnswer": 2,
        "explanation": "Equating groups on prior achievement removes preexisting ability as an explanation for any observed gaps, so score differences can be attributed to the manipulated instructions—an internal-validity safeguard. Reliability concerns the consistency of the test's items with one another and is unaffected by how participants were selected. Matching on ability does nothing to make the convenience sample representative of a broader population; that is an external-validity issue. The design tests whether threat affects performance through working memory in the moment, not whether working memory causes stable mathematical ability.",
        "skill": "experimental-reasoning"
      },
      {
        "question": "Which feature of the data pattern in Figure 1 most strengthens the conclusion that the instructions specifically affected the group targeted by the stereotype, rather than making the test harder for everyone?",
        "options": [
          "Women's scores were highest in the reduced-threat condition",
          "Men's scores remained essentially unchanged across all three conditions while women's scores varied",
          "The affirmation condition included a writing exercise",
          "All participants completed the same 25 items"
        ],
        "correctAnswer": 1,
        "explanation": "If the diagnostic framing simply raised difficulty or evaluation pressure generally, men's scores should also have dropped in the threat condition; their flat profile alongside women's condition-sensitive scores localizes the effect to the stereotyped group, which is the signature interaction of stereotype threat. Women scoring highest under reduced threat shows the manipulation mattered but, by itself, cannot rule out an effect on everyone. The writing exercise and the constant item set are design features, not data patterns, and neither speaks to whether the effect was group-specific.",
        "skill": "interpret-the-data"
      }
    ],
    "needsReview": true
  },
  {
    "id": "ps2-08",
    "section": "psych-soc",
    "discipline": "sociology",
    "title": "Network Ties and Ten-Year Mortality",
    "passageText": "Sociologists distinguish bonding social capital—resources flowing through strong ties among similar, tightly connected people such as close family and friends—from bridging social capital, which flows through weaker ties that span otherwise disconnected groups, such as acquaintances made through civic organizations, congregations, or workplaces. To examine how each relates to health, researchers followed a community cohort of 4,800 adults aged 45–70 for ten years. At baseline, interviewers counted each participant's close confidants (bonding ties) and memberships in voluntary associations that connected them to people outside their immediate circle (bridging ties). The outcome was all-cause mortality.\n\nBecause people with more education and income tend to have both larger networks and better health, the researchers adjusted their models for baseline socioeconomic status (education, income, occupation). A second concern was that illness itself erodes networks: people who are already sick withdraw from organizations and lose contact with confidants, so poor health could cause social isolation rather than the reverse. To address this, the final model additionally adjusted for baseline self-rated health and chronic conditions and excluded all deaths occurring within the first two years of follow-up.\n\nTable 1 reports hazard ratios (HR) comparing the top tertile of each tie type with the bottom tertile. The researchers also reported an exploratory analysis: the association between ties and survival was noticeably stronger among participants who reported high levels of chronic life stress at baseline than among low-stress participants.",
    "figure": "| Model | Bonding ties, HR (95% CI) | Bridging ties, HR (95% CI) |\n| --- | --- | --- |\n| Model 1: age- and sex-adjusted | 0.72 (0.63–0.82) | 0.68 (0.59–0.78) |\n| Model 2: + socioeconomic status | 0.81 (0.70–0.93) | 0.74 (0.64–0.86) |\n| Model 3: + baseline health; deaths in first 2 years excluded | 0.88 (0.76–1.02) | 0.79 (0.68–0.92) |",
    "questions": [
      {
        "question": "A participant who learned about a job opening from a fellow member of a neighborhood civic association she sees only at monthly meetings obtained that resource primarily through:",
        "options": [
          "Bonding social capital, because the association meets in her neighborhood",
          "Cultural capital, because job information is a form of knowledge",
          "Social cohesion, because the association holds regular meetings",
          "Bridging social capital, because a weak tie connected her to information circulating outside her close network"
        ],
        "correctAnswer": 3,
        "explanation": "The tie is a casual acquaintance who links her to a different social circle, and novel information such as job leads characteristically travels through exactly these weak, group-spanning connections—the defining function of bridging capital. Bonding capital involves strong ties among close, similar others, and geographic proximity of the meetings does not make a monthly acquaintance a close confidant. Cultural capital refers to internalized knowledge, tastes, and credentials that signal status, not to resources obtained through a network contact. Social cohesion describes solidarity and trust at the level of a whole group, not an individual's access to a specific resource through a tie.",
        "skill": "apply-a-concept"
      },
      {
        "question": "Socioeconomic status was adjusted for in Model 2 because it is a potential confounder. For SES to confound the tie–mortality association, which condition must hold?",
        "options": [
          "SES must be affected by network ties and then affect mortality",
          "SES must be measured with perfect reliability",
          "SES must be associated with network ties and independently associated with mortality, without lying on the causal path between them",
          "SES must differ between the top and bottom tertiles of age"
        ],
        "correctAnswer": 2,
        "explanation": "A confounder is a common cause: it must be related to the exposure (better-off people have larger networks), related to the outcome (SES predicts mortality), and not be an intermediate step through which ties affect health. A variable that ties themselves influence and that then affects mortality would be a mediator, and adjusting for it would improperly remove part of the true effect. Perfect measurement is never required for a variable to confound—indeed, imperfectly measured confounders leave residual confounding. Associations with age tertiles are irrelevant to the definition; age was handled separately in Model 1.",
        "skill": "confounding"
      },
      {
        "question": "Excluding deaths that occurred within the first two years of follow-up primarily addresses which threat to causal inference?",
        "options": [
          "Reverse causation, in which preexisting serious illness both shrinks networks and causes early death",
          "Selection bias arising from recruiting a community cohort",
          "Recall bias in participants' reports of their confidants",
          "Confounding by education and income"
        ],
        "correctAnswer": 0,
        "explanation": "People who were already gravely ill at baseline would have both withdrawn from social life and died soon after enrollment, manufacturing an isolation–mortality association that runs from health to networks; removing early deaths trims exactly those participants, and adjusting for baseline health does the same work. How the cohort was recruited is unchanged by dropping early deaths, so recruitment-related selection is not the target. Counting current confidants at baseline is not a memory task over long intervals, and the exclusion would not fix misremembering anyway. Socioeconomic confounding was handled by direct adjustment in Model 2, not by the exclusion.",
        "skill": "causal-inference"
      },
      {
        "question": "Which conclusion is best supported by the pattern of hazard ratios across the three models in Table 1?",
        "options": [
          "Adjustment strengthened both associations, indicating suppression",
          "After full adjustment, bridging ties remained associated with lower mortality, while the remaining bonding-tie association was compatible with chance",
          "Bonding ties were more strongly protective than bridging ties in every model",
          "Fully adjusted, both tie types were associated with higher mortality"
        ],
        "correctAnswer": 1,
        "explanation": "In Model 3 the bridging estimate is 0.79 with an interval of 0.68–0.92, which excludes 1, indicating a persisting association with lower mortality; the bonding estimate of 0.88 has an interval of 0.76–1.02, which includes 1, so chance cannot be ruled out. Both hazard ratios moved toward 1 with adjustment, the signature of partial confounding, not away from 1 as suppression would produce. Bridging ties showed the numerically stronger (further from 1) association in each model, not bonding ties. All estimates remained below 1, so neither tie type was associated with higher mortality.",
        "skill": "interpret-the-data"
      },
      {
        "question": "The exploratory finding that ties predicted survival more strongly among high-stress participants than low-stress participants is most consistent with which account of how social networks affect health?",
        "options": [
          "Networks affect health only through material resources such as money",
          "Networks harm health by spreading infectious disease",
          "Stress and social ties are unrelated constructs",
          "A stress-buffering account, in which support from ties matters most when people face high demands"
        ],
        "correctAnswer": 3,
        "explanation": "If social ties protect health chiefly by cushioning the physiological and psychological impact of stressors, their benefit should be concentrated among people who have stressors to buffer—precisely the observed interaction, with stress moderating the tie–survival association. A purely material-resources pathway would predict roughly uniform benefit regardless of stress levels. Disease spread through contact would predict worse outcomes for well-connected people, the opposite of every hazard ratio in the table. The very existence of a stress-by-ties interaction demonstrates the two constructs are empirically related, not independent.",
        "skill": "moderation"
      }
    ],
    "needsReview": true
  },
  {
    "id": "ps2-09",
    "section": "psych-soc",
    "discipline": "sociology",
    "title": "Diagnosing Distraction: ADHD and the Sick Role",
    "passageText": "Between 2000 and 2020, the share of U.S. school-aged children ever diagnosed with attention-deficit/hyperactivity disorder rose from roughly 6% to over 10%, with stimulant prescriptions rising in parallel. Sociologists studying this trend note that behaviors once managed as discipline problems—restlessness, inattention, failure to follow classroom rules—are increasingly defined and treated as symptoms of a medical disorder, a shift they analyze as medicalization. Diagnosis typically begins not in a clinic but in a classroom: teachers initiate the majority of referrals, and diagnostic checklists ask raters to compare a child's behavior with that of classmates.\n\nA population-level study exploited the fact that school cohorts contain children who differ in age by nearly a year. Using enrollment-cutoff dates, researchers divided one state's students into relative-age thirds within each grade and computed the percentage ever diagnosed with ADHD and the percentage prescribed stimulant medication. Children in the youngest third of their grade were diagnosed and medicated at markedly higher rates than their oldest-third classmates, despite being drawn from the same birth cohorts and school systems.\n\nTheoretical interpretations diverge. In the functionalist tradition, illness is a form of sanctioned deviance managed through the sick role, which grants exemptions but imposes duties. Conflict theorists ask who profits when everyday behavior becomes a billable condition, pointing to pharmaceutical marketing to physicians, schools, and parents. Interactionists focus on the diagnostic label itself—how it reorganizes the way teachers, parents, and the child interpret subsequent behavior.",
    "chart": {
      "title": "Figure 1. ADHD diagnosis and stimulant medication rates by relative age within grade",
      "kind": "bar",
      "xLabel": "Relative age within grade",
      "yLabel": "Percent of students",
      "yUnit": "%",
      "xValues": [
        "Oldest third",
        "Middle third",
        "Youngest third"
      ],
      "yValues": [
        6.8,
        8.1,
        10.9
      ],
      "seriesLabel": "Ever diagnosed with ADHD",
      "comparisonSeries": [
        {
          "label": "Prescribed stimulant medication",
          "yValues": [
            4,
            4.9,
            6.9
          ]
        }
      ],
      "annotations": [
        {
          "xIndex": 2,
          "label": "youngest students most diagnosed"
        }
      ]
    },
    "questions": [
      {
        "question": "The redefinition of classroom restlessness and inattention—once treated as discipline problems—as symptoms of a disorder requiring physician diagnosis and pharmaceutical treatment is best described as:",
        "options": [
          "Medicalization",
          "Deinstitutionalization",
          "Secularization",
          "Stigmatization"
        ],
        "correctAnswer": 0,
        "explanation": "Medicalization is precisely the process by which nonmedical problems of everyday life come to be defined and managed as medical conditions, moving authority over them from parents and teachers to clinicians. Deinstitutionalization refers to moving patients out of long-term psychiatric hospitals into community care. Secularization is the declining social authority of religion, not of lay discipline. Stigmatization involves discrediting a person through a devalued mark; a medical label can sometimes reduce blame rather than impose it, and the passage describes redefinition of behavior, not discrediting per se.",
        "skill": "identify-the-concept"
      },
      {
        "question": "According to the functionalist conception of the sick role, a child diagnosed with ADHD is granted certain exemptions but, in exchange, is expected to:",
        "options": [
          "Be held fully responsible for having developed the condition",
          "Withdraw permanently from student obligations",
          "Cooperate with treatment and work toward managing the condition",
          "Conceal the diagnosis from teachers and classmates"
        ],
        "correctAnswer": 2,
        "explanation": "The sick role pairs two rights—exemption from some normal role obligations and freedom from blame for the condition—with two duties: regarding the sick state as undesirable and seeking and cooperating with competent help to get well. Holding the child responsible for causing the condition contradicts the blamelessness the role confers. Permanent withdrawal violates the expectation that the exemption is temporary and conditional on trying to recover. Concealment is no part of the role; legitimacy in the functionalist account comes from openly occupying the role under medical supervision.",
        "skill": "sick-role"
      },
      {
        "question": "Which observation would a conflict theorist cite as MOST supportive of their interpretation of rising ADHD diagnosis?",
        "options": [
          "Diagnosis rates are similar across all school districts regardless of funding",
          "The sick role helps schools maintain orderly classrooms",
          "Teachers refer children out of genuine concern for their learning",
          "Pharmaceutical firms spent heavily marketing stimulants to physicians and parent groups during the same period diagnoses rose"
        ],
        "correctAnswer": 3,
        "explanation": "Conflict theory locates the expansion of diagnostic categories in the interests of powerful actors who profit from defining behavior as illness, so industry marketing tracking the rise in diagnoses is its signature evidence. Uniform rates across rich and poor districts would, if anything, weaken claims that resources and power shape who gets labeled. Framing diagnosis as serving classroom order is a functionalist argument about social control and system stability. Attributing referrals to teachers' benevolent concern describes individual motives and supports neither exploitation nor profit-driven category expansion.",
        "skill": "theoretical-lens"
      },
      {
        "question": "After a student receives an ADHD diagnosis, his teacher begins attributing ordinary fidgeting to the disorder and seats him apart during tests; the student starts describing himself as \"a kid with ADHD\" who cannot sit still. An interactionist would analyze this sequence as an instance of:",
        "options": [
          "Anomie produced by weakened social norms",
          "Labeling, in which the diagnosis reorganizes others' interpretations and the child's self-concept",
          "Role strain within the student role",
          "Social facilitation of classroom behavior"
        ],
        "correctAnswer": 1,
        "explanation": "Labeling theory, the interactionist account of deviance and illness, holds that a label changes how audiences read subsequent behavior and can be internalized into identity—exactly the teacher's reinterpretation of ordinary fidgeting and the child's new self-description, a path toward secondary deviance and a master status. Anomie is normlessness arising when society's norms lose grip, not a labeling dynamic. Role strain involves competing demands within a single role, such as a student juggling homework and exams. Social facilitation concerns performance changes due to the mere presence of others, irrelevant to interpretation of a diagnosis.",
        "skill": "theoretical-lens"
      },
      {
        "question": "The relative-age gradient in Figure 1—youngest-third students diagnosed at 10.9% versus 6.8% for oldest-third classmates—most directly supports which conclusion?",
        "options": [
          "Some diagnoses reflect developmentally normal immaturity judged against older classmates, indicating that social context shapes who gets labeled",
          "Younger children in a grade have a higher underlying neurological prevalence of ADHD",
          "Stimulant medication causes children to be born later in the year",
          "Teachers are unable to observe classroom behavior accurately"
        ],
        "correctAnswer": 0,
        "explanation": "Relative age within a grade is set by an arbitrary enrollment cutoff, not by neurobiology, so a diagnosis gradient across relative-age thirds implies that being compared with older, more mature classmates raises a child's chance of being labeled—diagnosis depends partly on social comparison context. A true difference in underlying prevalence by birth-month position within a grade is biologically implausible because all thirds come from the same birth cohorts. The causal arrow from medication to birth timing is temporally impossible. The data show systematic, context-dependent judgment, not a general inability of teachers to observe behavior.",
        "skill": "interpret-the-data"
      },
      {
        "question": "A colleague argues that the 2000–2020 rise in diagnosed ADHD demonstrates that the true prevalence of the underlying condition increased. Which alternative explanation must be ruled out before accepting this claim?",
        "options": [
          "Regression toward the mean in test scores",
          "Random measurement error, which always inflates trends",
          "Increased detection due to broadened diagnostic criteria, greater screening, and more referral pathways",
          "A placebo effect of stimulant medication"
        ],
        "correctAnswer": 2,
        "explanation": "Diagnosed prevalence is a product of both the underlying condition and the surveillance system that finds it; expanded criteria, routine screening, and teacher-initiated referral can raise recorded rates with no change in the true rate, so this detection artifact must be excluded before inferring a real increase. Regression toward the mean describes extreme scores drifting toward the average on retest and cannot generate a two-decade population trend. Random error adds noise but does not systematically inflate a trend in one direction. Placebo effects concern symptom response to inert treatment and have no bearing on how many children receive a diagnosis.",
        "skill": "causal-inference"
      }
    ],
    "needsReview": true
  },
  {
    "id": "ps2-10",
    "section": "psych-soc",
    "discipline": "sociology",
    "title": "Segregation Indices and the Asthma Gap",
    "passageText": "Residential segregation is commonly quantified with the index of dissimilarity, which ranges from 0 (each neighborhood mirrors the metropolitan area's overall racial composition) to 1 (complete separation). Researchers computed Black–White dissimilarity indices for 32 U.S. metropolitan areas and linked them to rates of asthma-related emergency department (ED) visits among Black and White children in each area, standardized per 1,000 children per year.\n\nAcross metropolitan areas, higher dissimilarity was associated with sharply higher asthma ED rates among Black children, while rates among White children were comparatively flat (Figure 1). To probe mechanisms, the team merged neighborhood-level data on traffic-related air pollution, proximity to industrial emitters, and housing age (a proxy for mold, pests, and deteriorating conditions). In highly segregated areas, predominantly Black neighborhoods bore disproportionate levels of all three exposures. Statistically accounting for these exposures substantially reduced the segregation–asthma association among Black children.\n\nThe authors situated the exposure patterns historically: mid-twentieth-century federal lending maps graded predominantly Black neighborhoods as hazardous for mortgage investment, and highways and industrial zoning were subsequently concentrated in and around those same neighborhoods. Present-day banks and zoning boards need harbor no discriminatory intent for these siting patterns to keep producing unequal exposure; the disadvantage is built into the ordinary operation of housing and land-use institutions. The authors cautioned, however, that their unit of analysis was the metropolitan area, and they urged care in extending area-level conclusions to individual children.",
    "chart": {
      "title": "Figure 1. Asthma ED visits per 1,000 children vs. metropolitan Black-White dissimilarity index",
      "kind": "scatter",
      "xLabel": "Index of dissimilarity",
      "yLabel": "Asthma ED visits per 1,000 children per year",
      "xValues": [
        0.35,
        0.42,
        0.48,
        0.55,
        0.61,
        0.68,
        0.74,
        0.81
      ],
      "yValues": [
        18,
        21,
        25,
        28,
        33,
        37,
        41,
        46
      ],
      "seriesLabel": "Black children",
      "comparisonSeries": [
        {
          "label": "White children",
          "yValues": [
            12,
            12,
            13,
            13,
            14,
            13,
            14,
            15
          ]
        }
      ],
      "annotations": [
        {
          "xIndex": 7,
          "label": "most segregated metro"
        }
      ]
    },
    "questions": [
      {
        "question": "A metropolitan area in the study has a Black-White index of dissimilarity of 0.74. This value indicates that:",
        "options": [
          "74% of the area's residents are Black",
          "About 74% of one group would need to move to a different neighborhood for the two groups to be evenly distributed",
          "Black residents' incomes average 74% of White residents' incomes",
          "74% of neighborhoods contain no Black residents at all"
        ],
        "correctAnswer": 1,
        "explanation": "The index of dissimilarity measures evenness: its value is the share of either group that would have to relocate across neighborhoods to make every neighborhood match the metropolitan area's overall composition. It says nothing about the overall size of either group, so it is not a population percentage. It is computed purely from residential distributions, not from earnings, so income ratios are outside its scope. It also does not count all-White neighborhoods; an area could score 0.74 with every neighborhood containing some members of both groups, provided the proportions are uneven.",
        "skill": "interpret-the-measure"
      },
      {
        "question": "Highways and industrial zones were concentrated near historically redlined neighborhoods decades ago, and current lending and zoning practices perpetuate the resulting exposure differences without any individual decision-maker intending racial harm. This pattern best exemplifies:",
        "options": [
          "Individual discrimination by present-day loan officers",
          "Ethnocentrism among zoning officials",
          "Self-segregation reflecting residential preferences",
          "Institutional discrimination embedded in the routine operation of housing and land-use systems"
        ],
        "correctAnswer": 3,
        "explanation": "Institutional discrimination consists of unequal outcomes produced by the normal, ongoing functioning of organizations and policies—here, siting and lending structures that channel environmental burdens onto the same neighborhoods regardless of any actor's current intent. Individual discrimination requires biased acts by particular persons, which the passage explicitly sets aside. Ethnocentrism is judging other cultures by the standards of one's own, an attitude, not a siting mechanism. A preference-based self-segregation account cannot explain why hazardous land uses—not merely group clustering—were concentrated in specific neighborhoods by historical policy.",
        "skill": "identify-the-concept"
      },
      {
        "question": "Statistically accounting for air pollution, industrial proximity, and housing age substantially reduced the segregation-asthma association among Black children. Within the authors' causal model, these exposures are best interpreted as:",
        "options": [
          "Mediators lying on the pathway from segregation to asthma burden",
          "Confounders that cause metropolitan areas to become segregated",
          "Instrumental variables for estimating the effect of asthma on segregation",
          "Effect modifiers that only change the strength of an association without transmitting it"
        ],
        "correctAnswer": 0,
        "explanation": "The authors' model runs from segregation to differential neighborhood exposures to asthma; when adjusting for a variable absorbs much of an association, and that variable is a downstream consequence of the exposure of interest, it is functioning as a mediator transmitting the effect. A confounder must cause both segregation and asthma, but neighborhood pollution levels do not plausibly cause a metropolitan area's degree of residential separation. Instrumental variables are used to handle unmeasured confounding of a stated exposure-outcome relation, and no such design was used; moreover the outcome here is asthma, not segregation. Effect modification would appear as different slopes across strata, not as attenuation upon adjustment.",
        "skill": "causal-inference"
      },
      {
        "question": "A journalist reads the study and writes that any individual Black child living in a metro area with a dissimilarity index of 0.81 has an asthma ED visit rate of 46 per 1,000. The main problem with this claim is:",
        "options": [
          "Attrition bias, because children left the cohort over time",
          "Publication bias, because null results go unpublished",
          "The ecological fallacy: an area-level association is being applied to individuals, whose exposures within the metro area vary widely",
          "The Hawthorne effect, because families knew they were studied"
        ],
        "correctAnswer": 2,
        "explanation": "The unit of analysis was the metropolitan area, so the 46 per 1,000 figure is an area-wide average; within that area, individual children's neighborhood exposures and risks vary enormously, and inferring an individual's risk from a group-level statistic is the ecological fallacy—the exact caution the authors raised. Attrition bias concerns differential dropout from longitudinal follow-up, but the claim's flaw is present even with complete data. Publication bias distorts literatures across many studies, not the interpretation of one study's numbers. The Hawthorne effect involves people changing behavior because they are observed, and administrative ED and census data involve no such reactivity.",
        "skill": "research-methods"
      },
      {
        "question": "Which conclusion is best supported by the two series in Figure 1 considered together?",
        "options": [
          "Segregation is associated with equal increases in asthma burden for both groups",
          "White children's asthma rates decline steeply as segregation rises",
          "Asthma ED rates for Black children are unrelated to the dissimilarity index",
          "The Black-White gap in asthma ED rates widens as segregation increases, from about 6 per 1,000 in the least segregated metros to about 31 per 1,000 in the most segregated"
        ],
        "correctAnswer": 3,
        "explanation": "Black children's rates climb from 18 to 46 per 1,000 across the dissimilarity range while White children's rates stay near 12 to 15, so the between-group gap grows from roughly 6 to roughly 31 per 1,000—segregation tracks a widening disparity borne by the segregated group. An equal increase for both groups is contradicted by the nearly flat White series. That series is flat-to-slightly-rising, not steeply declining. And the strong upward gradient in the Black-children series across every metro directly contradicts any claim of no relationship with the index.",
        "skill": "interpret-the-data"
      }
    ],
    "needsReview": true
  },
  {
    "id": "ps2-11",
    "section": "psych-soc",
    "discipline": "cognition-and-perception",
    "title": "Leading Questions and Eyewitness Memory",
    "passageText": "Researchers examined whether information encountered after an event can alter eyewitness reports of that event. Participants (N = 210) watched a 45-second video of a two-car collision and were randomly assigned to one of three questioning conditions. In the neutral-control condition, participants answered filler questions only. In the two experimental conditions, participants estimated the cars' speed in response to a single critical question whose verb was varied: \"About how fast were the cars going when they hit each other?\" versus \"...when they smashed into each other?\" Participants who received the \"smashed\" wording gave higher mean speed estimates than those who received the \"hit\" wording.\n\nOne week later, all participants returned and answered a surprise memory questionnaire that included the item \"Did you see any broken glass?\" No broken glass appeared in the video. Participants also rated their confidence in each answer on a 0-100 scale. In a separate manipulation, half of the participants in each condition read a written account attributed to a co-witness before the final test; the account mentioned a stop sign that was not present in the video. A substantial minority of these participants later reported having seen the stop sign in the video itself, attributing the detail to their own visual experience rather than to the narrative they had read.\n\nThe investigators noted that participants who falsely reported broken glass were, on average, no less confident than participants who correctly denied seeing it. They concluded that post-event information can be incorporated into an eyewitness's memory of the original event, and that the subjective vividness and confidence accompanying a report are not reliable guides to its accuracy.",
    "chart": {
      "title": "Figure 1. False reports of broken glass at one week, with mean confidence, by question wording",
      "kind": "bar",
      "xLabel": "Question wording at initial interview",
      "yLabel": "Value (% or 0-100 rating)",
      "xValues": [
        "Neutral control",
        "\"Hit\" wording",
        "\"Smashed\" wording"
      ],
      "yValues": [
        12,
        16,
        34
      ],
      "seriesLabel": "Reported broken glass (%)",
      "comparisonSeries": [
        {
          "label": "Mean confidence in broken-glass answer (0-100)",
          "yValues": [
            61,
            63,
            65
          ]
        }
      ],
      "annotations": [
        {
          "xIndex": 2,
          "label": "misled group: 34% false reports, confidence unchanged"
        }
      ]
    },
    "questions": [
      {
        "question": "The elevated rate of broken-glass reports among participants who received the \"smashed\" wording, relative to controls, best illustrates:",
        "options": [
          "The misinformation effect",
          "Proactive interference",
          "The serial position effect",
          "State-dependent memory"
        ],
        "correctAnswer": 0,
        "explanation": "Post-event information (the verb \"smashed,\" implying a violent crash) altered participants' later memory of the event, leading them to report a detail consistent with the implication but absent from the video—the misinformation effect. Proactive interference is old learning impairing new learning, but here later information distorted an earlier memory. The serial position effect concerns better recall for items at the beginning and end of a list. State-dependent memory concerns retrieval advantages when internal state at test matches the state at encoding; no states were manipulated.",
        "skill": "identify-the-concept"
      },
      {
        "question": "Confidence ratings were essentially flat across conditions (61, 63, 65) even though false reports more than doubled in the \"smashed\" condition. The most defensible conclusion is that:",
        "options": [
          "The confidence scale lacked test-retest reliability",
          "Participants in the \"smashed\" condition deliberately misreported what they saw",
          "Confidence can remain high even when the reported memory is false",
          "Greater confidence causes greater memory distortion"
        ],
        "correctAnswer": 2,
        "explanation": "The dissociation—accuracy varying across conditions while confidence stays constant—shows that confidence does not track whether a misled report is true, so a false memory can be held with the same conviction as an accurate one. Nothing in the design assessed the scale's reliability across administrations, so a reliability failure is not established. Deliberate misreporting is contradicted by the passage's framing: participants attributed the details to their own visual experience, indicating genuine (if false) memory. A causal arrow from confidence to distortion is unsupported; confidence did not even differ across conditions, so it cannot explain the differing false-report rates.",
        "skill": "interpret-the-data"
      },
      {
        "question": "Participants who read the co-witness account and then reported having SEEN the stop sign in the video misattributed information from the narrative to their own perception. This is best described as a failure of:",
        "options": [
          "Iconic memory",
          "Source monitoring",
          "Procedural memory",
          "Sensory adaptation"
        ],
        "correctAnswer": 1,
        "explanation": "Source monitoring is the process of attributing a memory to its origin (seen versus read versus imagined). These participants retained the stop-sign content but assigned it to the wrong source—their own visual experience rather than the co-witness narrative—a classic source-monitoring error. Iconic memory is the fraction-of-a-second visual sensory store and cannot span a week. Procedural memory is memory for skills and habits, not event details. Sensory adaptation is diminished receptor response to constant stimulation, a perceptual process irrelevant to memory attribution.",
        "skill": "memory-processes"
      },
      {
        "question": "Which feature of the design most directly supports the claim that the verb wording CAUSED the difference in broken-glass reports?",
        "options": [
          "The large overall sample size",
          "The one-week retention interval",
          "The use of a 0-100 confidence scale",
          "Random assignment of participants to wording conditions"
        ],
        "correctAnswer": 3,
        "explanation": "Random assignment equates the groups, in expectation, on all pre-existing characteristics (memory ability, suggestibility, attention), so a difference in false reports can be attributed to the manipulated wording rather than to pre-existing group differences—the core requirement for causal inference. A large sample improves precision but cannot by itself rule out confounding. The one-week delay is a constant shared by all conditions and so cannot explain a between-group difference. The confidence scale measures a separate dependent variable and bears on calibration, not causation.",
        "skill": "experimental-reasoning"
      },
      {
        "question": "The distortion of the original memory of the video by information presented AFTER the event is most closely analogous to:",
        "options": [
          "Proactive interference",
          "Anterograde amnesia",
          "Retroactive interference",
          "Repression"
        ],
        "correctAnswer": 2,
        "explanation": "In retroactive interference, newer information disrupts memory for older information—the direction operating here, where the post-event verb and narrative degraded the original trace of the video. Proactive interference runs the opposite direction, with older learning impairing newer learning. Anterograde amnesia is an inability to form new long-term memories after brain injury; these participants formed new memories readily (that was the problem). Repression is a psychodynamic notion of motivated forgetting of threatening material, not distortion by neutral post-event details.",
        "skill": "identify-the-concept"
      },
      {
        "question": "Based on these findings, which interviewing practice would best protect the accuracy of eyewitness evidence?",
        "options": [
          "Asking open-ended, neutrally worded questions and interviewing witnesses separately",
          "Interviewing witnesses together so their accounts can be cross-checked in real time",
          "Giving greatest evidentiary weight to the most confident witnesses",
          "Waiting several weeks before the first interview so that memories can consolidate"
        ],
        "correctAnswer": 0,
        "explanation": "Neutral, open-ended questions avoid embedding suggestive details (the verb effect), and separating witnesses prevents co-witness contamination (the stop-sign effect)—directly countering both mechanisms of distortion demonstrated in the study. Joint interviews would maximize exposure to other witnesses' potentially erroneous details. Weighting confident witnesses is undermined by the study's central dissociation between confidence and accuracy. Delaying the first interview adds time during which post-event information can intrude and the original trace can weaken; it offers no protective benefit.",
        "skill": "real-world-application"
      }
    ],
    "needsReview": true
  },
  {
    "id": "ps2-12",
    "section": "psych-soc",
    "discipline": "developmental-psychology",
    "title": "Age of Exposure and ASL Grammar",
    "passageText": "Because more than 90% of deaf children are born to hearing parents, first exposure to a full natural language—American Sign Language (ASL)—can occur anywhere from birth to adolescence. Researchers exploited this natural variation to test whether the capacity for language acquisition declines with age. They recruited deaf adults (N = 72) who had all used ASL as their primary language for at least 20 years but who differed in age of first exposure: from birth (native signers), ages 4-6, ages 8-10, or age 12 and later. Participants completed a grammaticality-judgment task targeting ASL verb morphology and a separate vocabulary recognition test.\n\nGrammatical accuracy declined monotonically with age of first exposure, even though all groups had decades of daily ASL use. Vocabulary scores, in contrast, were high and nearly identical across groups. The researchers interpreted the dissociation as evidence for a sensitive period: the mechanisms supporting grammatical acquisition operate most fully in early childhood, whereas word learning remains robust across the lifespan.\n\nThe passage of children through early language milestones informed the interpretation. Deaf infants exposed to sign from birth produce repetitive, syllable-like hand movements (\"manual babbling\") on the same timetable as vocal babbling in hearing infants. Hearing preschoolers, likewise, produce forms such as \"goed\" and \"foots\"—errors that adults do not model. Nativist theorists cite such phenomena, along with sensitive-period effects, as evidence that children bring innate, maturationally constrained language mechanisms to acquisition; learning theorists counter that statistical regularities in the input, combined with general-purpose learning, can explain much of the same data. The present study cannot settle that debate, but it constrains any account: whatever acquires grammar works less well when it starts late.",
    "chart": {
      "title": "Figure 1. ASL grammar and vocabulary accuracy by age of first exposure (all participants: 20+ years of use)",
      "kind": "line",
      "xLabel": "Age of first exposure to ASL",
      "yLabel": "Accuracy",
      "yUnit": "%",
      "xValues": [
        "Birth",
        "4-6 yr",
        "8-10 yr",
        "12+ yr"
      ],
      "yValues": [
        92,
        84,
        76,
        63
      ],
      "seriesLabel": "Grammaticality judgment (%)",
      "comparisonSeries": [
        {
          "label": "Vocabulary recognition (%)",
          "yValues": [
            95,
            93,
            92,
            90
          ]
        }
      ],
      "annotations": [
        {
          "xIndex": 3,
          "label": "late learners: grammar falls, vocabulary spared"
        }
      ]
    },
    "questions": [
      {
        "question": "The decline in grammatical accuracy with later first exposure, despite all groups having 20+ years of daily ASL use, most directly supports which conclusion?",
        "options": [
          "Language is acquired entirely through operant reinforcement of correct forms",
          "There is a sensitive period during which grammatical systems are acquired most fully",
          "Vocabulary and grammar are acquired by identical mechanisms",
          "ASL is not a fully grammatical natural language"
        ],
        "correctAnswer": 1,
        "explanation": "Because total experience is matched (everyone had decades of use), the remaining systematic difference is when acquisition began—and starting later produced permanently lower grammatical attainment, the signature of a sensitive (critical) period. A pure reinforcement account predicts that 20 years of practice and feedback should erase early differences, which it did not. The claim that vocabulary and grammar share identical mechanisms is contradicted by the dissociation: vocabulary was spared while grammar declined. The full grammatical status of ASL is well established and is presupposed by the grammaticality task, not undermined by it.",
        "skill": "interpret-the-data"
      },
      {
        "question": "Deaf infants exposed to sign from birth produce manual babbling on the same timetable as vocal babbling in hearing infants. This finding best supports the claim that:",
        "options": [
          "Babbling requires auditory feedback from the infant's own voice",
          "Deaf infants skip the pre-linguistic stages of development",
          "Babbling is simple imitation of adult speech sounds",
          "Babbling reflects an amodal language capacity rather than merely vocal-motor practice"
        ],
        "correctAnswer": 3,
        "explanation": "If babbling emerges in the manual modality, on the normal schedule, in infants who cannot hear, then the stage is driven by a language capacity indifferent to modality rather than by practicing speech sounds. The auditory-feedback account is directly refuted: these infants babble without hearing themselves. Far from skipping pre-linguistic stages, the deaf infants pass through them in sign. The imitation account fails because manual babbling is not a copy of speech sounds at all, and babbling in hearing infants includes sounds absent from the ambient language.",
        "skill": "developmental-stages"
      },
      {
        "question": "A hearing three-year-old who says \"goed\" and \"foots\" is best understood as demonstrating that the child:",
        "options": [
          "Is overapplying a grammatical rule that no adult explicitly taught or modeled",
          "Is imitating errors commonly made by the adults around them",
          "Has a clinically significant language delay",
          "Lacks a sensitive period for language"
        ],
        "correctAnswer": 0,
        "explanation": "Overregularization errors show the child has extracted the productive past-tense and plural rules (add -ed, add -s) and is applying them even to irregular forms—rule use, since adults say \"went\" and \"feet\" and never model \"goed.\" The imitation account is untenable for exactly that reason: there is no adult model producing these forms. Overregularization is a normal, expected stage, not a delay; it typically appears after a period of correct irregular use. The errors say nothing against a sensitive period; they are evidence about the mechanism of acquisition, not its timing.",
        "skill": "identify-the-concept"
      },
      {
        "question": "The researchers deliberately recruited only adults with at least 20 years of ASL experience. The primary methodological purpose of this criterion was to:",
        "options": [
          "Increase the total sample size",
          "Permit random assignment to exposure ages",
          "Hold amount of language experience roughly constant, isolating age of first exposure as the variable of interest",
          "Eliminate the need for a native-signer comparison group"
        ],
        "correctAnswer": 2,
        "explanation": "Without this criterion, late learners might perform worse simply because they had used ASL for fewer years; requiring decades of use in every group removes practice amount as a confound, so group differences can be attributed to when acquisition began. The criterion restricts eligibility and, if anything, shrinks the sample rather than enlarging it. Random assignment is impossible here—age of first exposure is a naturally occurring variable, which is why the design is quasi-experimental. Native signers remain essential as the benchmark group; the criterion does not replace them.",
        "skill": "experimental-reasoning"
      },
      {
        "question": "Late learners' preserved vocabulary alongside impaired grammar is MOST consistent with which claim in the acquisition debate?",
        "options": [
          "All aspects of language are shaped equally by reinforcement history",
          "Grammatical acquisition depends on maturationally constrained mechanisms more than word learning does",
          "Scaffolding within the zone of proximal development eliminates age-of-acquisition effects",
          "Grammar is intrinsically easier to learn than vocabulary at any age"
        ],
        "correctAnswer": 1,
        "explanation": "The dissociation—grammar showing a steep age-of-exposure gradient while vocabulary stays near ceiling—fits the view that grammar relies on mechanisms with a maturational timetable, whereas word learning uses general abilities that persist lifelong. An account on which reinforcement shapes all components equally predicts parallel declines, not a selective one. The scaffolding claim is contradicted outright: age effects were not eliminated, they were the central finding. The relative-difficulty claim runs backward—grammar was the component late learners failed to master, so it cannot be the easier one at any age.",
        "skill": "which-theory"
      }
    ],
    "needsReview": true
  },
  {
    "id": "ps2-13",
    "section": "psych-soc",
    "discipline": "developmental-psychology",
    "title": "Tracking Identity Statuses Through Adolescence",
    "passageText": "Erikson characterized adolescence as the stage of identity versus role confusion: the task of integrating one's values, occupational aims, and social roles into a coherent sense of self. Building on this framework, Marcia proposed that an adolescent's position could be classified by crossing two dimensions—whether the person has actively explored alternatives, and whether the person has made commitments. The four resulting statuses are diffusion (no exploration, no commitment), foreclosure (commitment without exploration, often to values adopted wholesale from parents), moratorium (active exploration without settled commitment), and achievement (commitment following a period of exploration).\n\nResearchers followed a single cohort of 400 adolescents, conducting semi-structured identity interviews with the same participants at ages 14, 17, and 20. Two trained coders independently classified each interview into one of Marcia's statuses in the domains of occupation and ideology; disagreements were resolved by a third coder, and interrater agreement was high (kappa = 0.84). Attrition across the six years was 9%.\n\nAt 14, diffusion and foreclosure together accounted for most of the sample. Moratorium was most prevalent at the middle assessment, and by 20 identity achievement had become the most common single status, though a substantial minority remained foreclosed or diffuse. The researchers noted that movement was not uniformly \"forward\": a minority of participants classified as achieved at 17 were re-classified as moratorium or diffusion at 20, consistent with the view that identity work continues into adulthood rather than concluding on a fixed schedule.",
    "figure": "| Age | Diffusion (%) | Foreclosure (%) | Moratorium (%) | Achievement (%) |\n|-----|---------------|-----------------|----------------|------------------|\n| 14  | 38            | 34              | 20             | 8                |\n| 17  | 24            | 26              | 34             | 16               |\n| 20  | 14            | 18              | 26             | 42               |",
    "questions": [
      {
        "question": "A 17-year-old in the study reported that she will become a physician because her parents expect it, and that she has never seriously considered any alternative. The coders would classify her occupational identity status as:",
        "options": [
          "Identity diffusion",
          "Moratorium",
          "Identity foreclosure",
          "Identity achievement"
        ],
        "correctAnswer": 2,
        "explanation": "She holds a firm commitment (medicine) reached without any exploration of alternatives, and the commitment was adopted from her parents—the defining profile of foreclosure. Diffusion requires the absence of commitment, but she is clearly committed. Moratorium is the reverse of her profile: active exploration without commitment. Achievement requires that the commitment follow a genuine period of exploration, which she explicitly denies having undertaken.",
        "skill": "identify-the-concept"
      },
      {
        "question": "Marcia's four statuses are generated by crossing which two dimensions?",
        "options": [
          "Exploration and commitment",
          "Autonomy and shame",
          "Trust and mistrust",
          "Assimilation and accommodation"
        ],
        "correctAnswer": 0,
        "explanation": "Marcia classified identity by whether the adolescent has explored alternatives and whether the adolescent has committed, yielding a 2 x 2: diffusion (neither), foreclosure (commitment only), moratorium (exploration only), achievement (both). Autonomy versus shame and doubt is Erikson's toddlerhood crisis, and trust versus mistrust is his infancy crisis—single bipolar stages, not crossed dimensions. Assimilation and accommodation are Piaget's processes for fitting experience to schemas, belonging to cognitive rather than identity development.",
        "skill": "theory-structure"
      },
      {
        "question": "Which statement is best supported by the data in the table?",
        "options": [
          "Foreclosure increases steadily from 14 to 20",
          "Achievement is the most common status at every age",
          "Diffusion peaks at age 17",
          "Moratorium peaks in mid-adolescence, before achievement becomes the most common status at 20"
        ],
        "correctAnswer": 3,
        "explanation": "Moratorium rises from 20% at 14 to its maximum of 34% at 17, then falls to 26%, while achievement climbs from 8% to 42% and is the largest single category at 20—consistent with exploration preceding consolidated commitment. Foreclosure actually declines across the three waves (34% to 26% to 18%). Achievement is the least common status at 14 (8%), so it is not the modal status at every age. Diffusion is highest at 14 (38%) and declines monotonically, so it does not peak at 17.",
        "skill": "interpret-the-data"
      },
      {
        "question": "Within Erikson's psychosocial theory, the developmental crisis these adolescents are negotiating is:",
        "options": [
          "Intimacy versus isolation",
          "Identity versus role confusion",
          "Industry versus inferiority",
          "Generativity versus stagnation"
        ],
        "correctAnswer": 1,
        "explanation": "Erikson assigned adolescence the task of forging a coherent identity—integrating values, occupational direction, and social roles—against the risk of role confusion, and Marcia's statuses operationalize exactly this crisis. Intimacy versus isolation is the young-adulthood stage that, in Erikson's sequence, follows successful identity formation. Industry versus inferiority belongs to the school-age years and concerns competence at tasks. Generativity versus stagnation is the middle-adulthood concern with contributing to the next generation.",
        "skill": "which-theory"
      },
      {
        "question": "Compared with a cross-sectional design testing separate groups of 14-, 17-, and 20-year-olds in a single year, the longitudinal design used here has which principal advantage?",
        "options": [
          "It eliminates participant attrition",
          "It is faster and less expensive to conduct",
          "It removes the need to establish interrater reliability among coders",
          "It tracks change within the same individuals, so age trends cannot be artifacts of cohort differences"
        ],
        "correctAnswer": 3,
        "explanation": "Following one cohort lets the researchers observe genuine within-person transitions (including the backward movement from achievement to moratorium), and it rules out cohort effects—differences between generations that can masquerade as age effects in cross-sectional comparisons. Attrition is a distinctive weakness of longitudinal work, not something it eliminates; the study reported 9% loss. Longitudinal designs are slower and costlier than cross-sectional ones, since the same sample must be retained for years. Interrater reliability concerns the coding of interviews and is required in either design.",
        "skill": "experimental-reasoning"
      }
    ],
    "needsReview": true
  },
  {
    "id": "ps2-14",
    "section": "psych-soc",
    "discipline": "sensation-and-perception",
    "title": "Weber Fractions Across the Senses",
    "passageText": "A psychophysics laboratory measured discrimination thresholds in the same 40 participants across several sensory modalities. On each trial, a participant experienced a standard stimulus and a comparison stimulus and judged which was more intense (heavier, brighter, louder, or saltier). Comparison values were presented in random order across a wide range (the method of constant stimuli), and the just-noticeable difference (JND, or difference threshold) was defined as the change from the standard that participants detected on 50% of trials. In a separate session, absolute thresholds—the minimum stimulus intensity detected on 50% of trials against no background stimulus—were estimated for hearing and vision using an adaptive staircase.\n\nWeber's law states that the JND is a constant proportion of the standard: delta-I / I = k, where I is the standard intensity and k is the Weber fraction for that modality. To test the proportionality claim directly, the weight task was run at two standards. With a 200-g standard, the average JND was 4 g; with a 500-g standard, it was 10 g—both yielding k = 0.02. Table 1 reports the fractions obtained for each modality.\n\nThe fractions differed sharply across the senses: participants noticed a 2% change in heaviness, but salt concentration had to change by roughly 20% before a difference in saltiness was reliably detected. The researchers emphasized that these proportional constants describe midrange intensities; Weber's law is known to break down near absolute threshold, where the proportional rule overpredicts sensitivity.",
    "figure": "| Modality | Standard stimulus | Mean JND | Weber fraction (k) |\n|----------|-------------------|----------|--------------------|\n| Heaviness (lifted weight) | 200 g | 4 g | 0.02 |\n| Heaviness (lifted weight) | 500 g | 10 g | 0.02 |\n| Brightness (luminance) | 100 cd/m2 | 8 cd/m2 | 0.08 |\n| Loudness (tone intensity, arbitrary units) | 200 units | 10 units | 0.05 |\n| Saltiness (NaCl concentration) | 0.10 M | 0.02 M | 0.20 |",
    "questions": [
      {
        "question": "Using the Weber fraction for heaviness in Table 1, the predicted JND for an 800-g standard weight is:",
        "options": [
          "2 g",
          "4 g",
          "8 g",
          "16 g"
        ],
        "correctAnswer": 3,
        "explanation": "Weber's law gives JND = k x I = 0.02 x 800 g = 16 g. The 4-g value is the JND for the 200-g standard and would be correct only if the difference threshold were a fixed amount independent of the standard, which the two-standard weight data refute. The 8-g value would follow from mistakenly applying the brightness fraction (0.08) to a 100-unit standard or from halving the correct answer. The 2-g value corresponds to 0.02 x 100, an error in the standard used.",
        "skill": "calculation"
      },
      {
        "question": "As measured in the staircase session, the absolute threshold is best defined as the:",
        "options": [
          "Smallest difference between two stimuli that can be detected",
          "Minimum stimulus intensity detected on 50% of trials",
          "Intensity at which a stimulus first becomes painful",
          "Largest stimulus intensity that can be perceived without distortion"
        ],
        "correctAnswer": 1,
        "explanation": "The absolute threshold is conventionally the lowest intensity a person detects half the time when the stimulus is presented against no background—exactly the 50% criterion the passage specifies. The smallest detectable difference between two stimuli is the difference threshold (JND), the other threshold in the study; conflating the two is the classic trap. Pain onset defines the terminal threshold at the top of the intensity range, not the bottom. There is no standard threshold defined as the largest undistorted stimulus.",
        "skill": "identify-the-concept"
      },
      {
        "question": "The weight task produced a JND of 4 g at a 200-g standard and 10 g at a 500-g standard. This pattern demonstrates that:",
        "options": [
          "The JND grows in proportion to the standard, keeping delta-I / I constant",
          "The JND is a fixed number of grams regardless of the standard",
          "Discrimination is more acute, in proportional terms, at heavier standards",
          "Absolute thresholds increase with stimulus magnitude"
        ],
        "correctAnswer": 0,
        "explanation": "4/200 and 10/500 both equal 0.02: as the standard grew 2.5-fold, the JND grew 2.5-fold, holding the ratio constant—Weber's law in action. A fixed-gram JND is directly contradicted, since the threshold rose from 4 g to 10 g. Proportional acuity did not improve at the heavier standard; the fraction stayed the same (only the absolute JND changed). Absolute thresholds were measured in a separate session against no background and are not addressed by these two data points at all.",
        "skill": "apply-a-principle"
      },
      {
        "question": "Given the Weber fractions of 0.20 for saltiness and 0.02 for heaviness, which conclusion is justified?",
        "options": [
          "Salt detection has a lower absolute threshold than weight detection",
          "A 2% change in salt concentration would be reliably detected",
          "A far larger proportional change is needed to notice a difference in saltiness than in heaviness",
          "Weber's law fails to apply to the sense of taste"
        ],
        "correctAnswer": 2,
        "explanation": "A larger Weber fraction means coarser proportional discrimination: saltiness must change by about 20% of the standard to be noticed, versus about 2% for heaviness—a tenfold difference in proportional sensitivity. Absolute thresholds are a different quantity entirely; Weber fractions describe difference detection and license no comparison of absolute thresholds across modalities. A 2% concentration change is a tenth of the salt JND and would go unnoticed, not be reliably detected. Taste is not an exception to Weber's law here—the law held with a (large) constant fraction, which is exactly what the law predicts.",
        "skill": "interpret-the-data"
      },
      {
        "question": "In the method of constant stimuli, the comparison stimuli were presented in RANDOM order. The main purpose of randomization here is to:",
        "options": [
          "Prevent participants from anticipating the next intensity, which would bias threshold estimates",
          "Increase each participant's Weber fraction",
          "Allow reaction time to be measured on every trial",
          "Guarantee that every participant receives a different set of stimuli"
        ],
        "correctAnswer": 0,
        "explanation": "If comparisons ascended or descended predictably, participants could respond from expectation rather than sensation (habituation and anticipation errors), distorting the estimated 50% point; random order forces each judgment to rest on the current stimulus. Randomization is meant to remove bias from the estimate, not to change (let alone inflate) the participant's actual sensitivity. Reaction time can be recorded under any presentation order and was not a measure in this study. In the method of constant stimuli all participants typically receive the same fixed stimulus set—only its order varies.",
        "skill": "experimental-reasoning"
      },
      {
        "question": "A participant's JND for tone intensity was 10 units at a 200-unit standard. Assuming Weber's law holds, the predicted JND at a 600-unit standard is:",
        "options": [
          "10 units",
          "15 units",
          "20 units",
          "30 units"
        ],
        "correctAnswer": 3,
        "explanation": "The Weber fraction is 10/200 = 0.05, so at 600 units the JND is 0.05 x 600 = 30 units; tripling the standard triples the JND. An unchanged 10-unit JND assumes a fixed absolute threshold difference, contradicting the proportionality the weight data demonstrated. The 20-unit value would follow from only doubling the JND when the standard tripled. The 15-unit value corresponds to multiplying by 1.5 rather than 3, an arithmetic slip with no basis in the ratios.",
        "skill": "calculation"
      }
    ],
    "needsReview": true
  },
  {
    "id": "ps2-15",
    "section": "psych-soc",
    "discipline": "cognition-and-perception",
    "title": "False Beliefs and the Child's Theory of Mind",
    "passageText": "Theory of mind—the ability to attribute beliefs, desires, and intentions to others, including beliefs one knows to be false—is commonly assessed with false-belief tasks. In the classic change-of-location version, a child watches a character, Sally, place a marble in a basket and leave; a second character moves the marble to a box. The child is asked where Sally will look for her marble. Answering correctly requires representing Sally's now-false belief, which conflicts with the child's own knowledge of reality.\n\nResearchers administered the task to children aged 3, 4, and 5 in three culturally distinct communities (a North American city, a rural East African community, and an East Asian city). Despite differences in language, schooling, and child-rearing practices, the developmental pattern was similar across sites: most 3-year-olds answered incorrectly, pointing to the marble's actual location, whereas most 5-year-olds passed, with 4-year-olds intermediate.\n\nThe investigators probed two complications. First, the standard task demands more than belief understanding: the child must inhibit the prepotent answer (the real location) and track the narrative, so failure may partly reflect immature executive function. Consistent with this, when the task was modified to reduce inhibitory demands, a portion of 3-year-olds who had failed the standard version succeeded, though 3-year-olds still performed below older children. Second, the team reviewed findings from autism-spectrum samples: children on the spectrum, matched to comparison children on verbal mental age, failed false-belief tasks at substantially higher rates than both typically developing children and children with unrelated intellectual disability. Passing the task also coincided developmentally with a broader decline in egocentric responding across perspective-taking tasks.",
    "questions": [
      {
        "question": "A 3-year-old who answers that Sally will look in the BOX (the marble's actual location) is failing to demonstrate:",
        "options": [
          "Object permanence",
          "The ability to attribute a mental state that differs from reality",
          "Conservation of number",
          "Telegraphic speech"
        ],
        "correctAnswer": 1,
        "explanation": "The task requires representing Sally's belief as distinct from—and contradicted by—the true state of the world; answering with the marble's real location shows the child cannot yet attribute such a false belief, the core of theory of mind. Object permanence (knowing hidden objects still exist) is achieved in infancy and is presupposed by the child's own correct tracking of the marble. Conservation of number concerns the invariance of quantity under rearrangement, a separate preoperational limitation. Telegraphic speech is a two-word production stage of language, irrelevant to belief attribution.",
        "skill": "identify-the-concept"
      },
      {
        "question": "Some 3-year-olds who failed the standard task passed a version with reduced inhibitory demands. This result most strongly suggests that:",
        "options": [
          "Three-year-olds possess a fully adult-like theory of mind",
          "Inhibitory control is irrelevant to false-belief performance",
          "Standard false-belief tasks may underestimate younger children's belief understanding because of their executive demands",
          "Executive function and theory of mind are the same construct"
        ],
        "correctAnswer": 2,
        "explanation": "If lowering the need to suppress the prepotent \"real location\" answer converts some failures into passes, then part of what the standard task measures is executive function rather than belief understanding—so standard failures overstate 3-year-olds' conceptual deficit. Full adult-like competence is too strong: 3-year-olds still performed below older children even on the modified task. The result shows inhibitory control matters, the opposite of it being irrelevant. Nor does partial overlap in task demands make the two constructs identical; belief understanding still varied with age after demands were reduced.",
        "skill": "experimental-reasoning"
      },
      {
        "question": "The similar developmental timetable observed across three culturally distinct communities most strongly supports which interpretation?",
        "options": [
          "False-belief understanding is transmitted entirely by culture-specific instruction",
          "Differences among languages fully explain when children pass the task",
          "Formal schooling is the cause of theory-of-mind development",
          "The transition reflects a partly maturational, species-typical developmental process"
        ],
        "correctAnswer": 3,
        "explanation": "When communities differing in language, schooling, and child-rearing show the same 3-to-5 transition, culture-specific inputs cannot be carrying the whole explanation; a shared, maturationally constrained human developmental process best accounts for the convergence. Purely cultural transmission predicts timetables that vary with the practices that differ across sites, contrary to the data. A fully linguistic explanation likewise predicts cross-language variation in timing that was not observed. Schooling as the cause fails most directly: the rural community differed in schooling, and 3-to-5-year-olds at all sites were largely below school age.",
        "skill": "interpret-the-data"
      },
      {
        "question": "Children on the autism spectrum failed false-belief tasks at higher rates than comparison children matched on verbal mental age, including children with unrelated intellectual disability. These matches allow the researchers to conclude that the difficulty reflects:",
        "options": [
          "A relatively specific difficulty with mental-state attribution, not reducible to verbal ability or general intellectual delay",
          "A global intellectual impairment affecting all cognitive domains equally",
          "An absence of all social motivation in autistic children",
          "A flaw in the false-belief task that makes it invalid for clinical groups"
        ],
        "correctAnswer": 0,
        "explanation": "Matching on verbal mental age rules out language level as the explanation, and the intellectual-disability comparison group rules out general cognitive delay—yet the autism-spectrum group still failed at higher rates, isolating mental-state attribution as the specific locus of difficulty. A global impairment is excluded by the very logic of matching: the groups were equated on general verbal ability. The data concern belief reasoning, not motivation; no measure of social interest was reported. And selective failure by one clinical group is evidence the task discriminates a specific capacity, not that it is invalid.",
        "skill": "clinical-reasoning"
      },
      {
        "question": "The passage notes that passing the false-belief task coincides with a broader decline in egocentric responding. Within Piaget's framework, this transition corresponds to the waning of a hallmark limitation of which stage?",
        "options": [
          "Sensorimotor",
          "Formal operational",
          "Preoperational",
          "Concrete operational"
        ],
        "correctAnswer": 2,
        "explanation": "Egocentrism—difficulty representing viewpoints other than one's own, as in the three-mountains task—is a signature limitation of Piaget's preoperational stage (roughly 2-7 years), and its decline around ages 4-5 aligns with emerging false-belief success. The sensorimotor stage concerns infancy and the achievement of object permanence, which these children already possess. Formal operational thought (abstract, hypothetical reasoning) emerges in adolescence, long after this transition. The concrete operational stage is what children are moving toward as egocentrism wanes; it is characterized by conservation and logical operations, not defined by egocentrism.",
        "skill": "which-theory"
      }
    ],
    "needsReview": true
  }
]
