export const mcatSocioGroupsPart2Data = {
  topicSlug: 'mcat-sociology-groups-interaction-mcat',
  sections: [
    {
      id: 'grp2-intro',
      type: 'text' as const,
      content: `# Groups & Social Interaction — Deep Dive

**Part 2 of 4 — How Groups Bend Individuals: Conformity, Obedience & Group Decision Pathologies**

### Two Reasons People Conform

- **Normative social influence**: conforming to be LIKED/accepted — you know the group is wrong and comply anyway (public compliance, private disagreement).
- **Informational social influence**: conforming because you believe the group KNOWS better — in ambiguous situations others become your data (private acceptance, genuine belief change).

The classic line-judgment experiments (Asch) demonstrate the normative kind at full strength: with an UNAMBIGUOUS perceptual task, a substantial fraction of subjects publicly agreed with a unanimous wrong majority. The tested moderators: conformity rises with group size (up to a plateau around 4-5), unanimity is critical — a single dissenter, even an incorrect one, collapses conformity — and private (written) responding nearly eliminates it, proving the influence was normative.

### Obedience — Authority as the Variable

The shock-learner experiments (Milgram) shifted the question from peer pressure to hierarchy: a majority of ordinary subjects delivered what they believed were dangerous shocks when a legitimate-seeming experimenter accepted responsibility and insisted. Obedience FELL when the authority's legitimacy or proximity decreased (orders by phone, no lab coat, rundown office), when the victim's suffering became closer/more visible, and when defiant peers modeled refusal. The sociological reading: obedience is a property of the SITUATION'S authority structure far more than of individual character — subjects entered an "agentic state," treating themselves as instruments of another's will.

### Compliance Without Authority — the Foot in the Door

Between conformity and obedience sit compliance techniques: **foot-in-the-door** (small request first, large request later succeeds via self-perception consistency), **door-in-the-face** (large refused request makes the moderate follow-up look reasonable), and **lowballing** (commitment first, costs revealed after). Identify each by the SEQUENCE of requests.

### Presence Effects — The Audience in Your Nervous System

- **Social facilitation**: the mere presence of others improves performance on EASY/well-learned tasks and worsens it on HARD/novel tasks — arousal strengthens the dominant response, which is correct for practiced skills and wrong for unmastered ones. One principle, two directions: that asymmetry IS the exam question.
- **Social loafing**: individuals exert less effort when contributions are pooled and unidentifiable (rope-pulling teams). Antidotes follow from the mechanism: make individual output identifiable, raise task meaning, shrink the group.
- Facilitation vs. loafing discriminator: is the individual being EVALUATED (facilitation conditions) or SUBMERGED (loafing conditions)?

### Deindividuation — The Self Dissolved

In crowds, anonymity + arousal + diffused responsibility can suspend self-awareness and internal standards: **deindividuation**, the mechanism behind mob behavior and online pile-ons (anonymity without physical crowds). It removes the self-monitoring that normally checks norm violations — linking directly to riots (collective behavior) and to why uniforms/masks change behavior.

### Group Decision Pathologies — The Confusable Pair

- **Groupthink**: cohesive, insulated groups under directive leadership suppress dissent to protect unanimity — symptoms include illusions of invulnerability, self-censorship, "mindguards," and stereotyping outsiders. OUTPUT: a defective decision everyone doubts privately. Remedies: devil's advocates, outside opinions, leaders withholding preferences.
- **Group polarization**: discussion among like-minded people shifts the group AVERAGE toward a more EXTREME version of its initial lean (risky or cautious). Mechanisms: hearing new arguments for the shared side (informational) and one-upping the valued position (normative).
- Discriminator: groupthink is about suppressed dissent producing a bad consensus; polarization is about shared leanings AMPLIFYING. A jury that started slightly punitive and ends extremely punitive polarized; a cabinet that privately doubted but publicly approved a doomed plan groupthought.`
    },
    {
      id: 'grp2-worked',
      type: 'text' as const,
      content: `### Worked Example — One Hospital Committee, Five Mechanisms

**Passage-style problem.** Researchers observe a hospital's quality-improvement committee and its aftermath.

1. In early meetings, the chair announces her preferred policy first; two members later tell interviewers they had objections but stayed silent "to keep the peace"; one member actively reassures the chair that "everyone is on board." The policy fails badly.
2. A subcommittee of six members who all mildly favored stricter infection protocols meets separately; it returns demanding protocols far stricter than any individual member initially endorsed.
3. During a full-capacity crisis, staff report that an attending's verbal orders were followed even when two nurses privately judged one order unsafe; both said "he was the attending, and he said he'd take responsibility."
4. On group audit shifts where individual chart-review counts are not recorded, per-person review output drops 30 percent relative to solo shifts; publishing individual counts eliminates the drop.
5. A resident performing a well-practiced suturing technique performs faster and cleaner when observed by evaluators, but a resident attempting a newly learned technique performs markedly worse under the same observation.

**Finding 1 is groupthink**, with the full symptom cluster: directive leadership (chair states preference first), self-censorship ("stayed silent"), and a mindguard (the reassuring member). The remedy question writes itself: have the chair withhold her view and assign a devil's advocate.

**Finding 2 is group polarization** — a shared initial lean made MORE extreme by discussion among the like-minded. Nothing was suppressed; the shift is the pathology. If an answer choice says "groupthink," check: was there dissent to suppress? Here, no.

**Finding 3 is obedience** to legitimate authority, complete with responsibility transfer ("he'd take responsibility" = the agentic state's signature). It is not conformity — the nurses responded to hierarchy, not to peer consensus.

**Finding 4 is social loafing**, diagnosed by its cure: identifiability restores effort, confirming that pooled, anonymous output was the mechanism rather than fatigue or skill.

**Finding 5 is social facilitation's two-sided law**: observation improves the DOMINANT (practiced) response and impairs the non-dominant (novel) one. Any answer treating "audiences help" or "audiences hurt" as a one-directional rule is wrong by construction.

**Transfer note.** The MCAT rarely names these mechanisms in the passage; it gives you finding-shaped descriptions and asks for the label, the mechanism, or the intervention. Practice mapping intervention → mechanism: identifiability → loafing; dissenter → conformity collapse (Asch's unanimity result); leader silence → groupthink; separating like-minded deliberators → polarization.`
    },
    {
      id: 'grp2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Social Influence & Group Decisions** 🎯`,
      exercise: {
        questions: [
          {
            question: `In a line-judgment task with an obviously correct answer, a subject conforms to a unanimous wrong majority on public trials but answers correctly when responding in writing. Her public conformity reflected:`,
            options: [`Informational influence: she doubted her eyes`, `Deindividuation within the anonymous majority`, `Obedience to the experimenter's authority`, `Normative social influence, to avoid disapproval`],
            correctAnswer: 3,
            explanation: `The task was unambiguous and her private (written) answers stayed correct, so the group never changed her belief — she changed only her public behavior to avoid standing alone. That is normative influence's definition. Informational influence requires ambiguity and produces private acceptance; no authority figure issued orders, and her self-awareness was fully intact.`
          },
          {
            question: `In the obedience experiments, which modification produced the LARGEST drop in subjects' willingness to continue?`,
            options: [`Moving the experiment to a prestigious university`, `Seeing two peer participants defy the experimenter`, `Increasing the payment offered to subjects`, `Having the experimenter emphasize that he bore full responsibility`],
            correctAnswer: 1,
            explanation: `Defiant peers collapsed obedience more than almost any other variation — rebellion, like conformity, is socially licensed; models of refusal break the authority's monopoly on defining the situation. Prestige and explicit responsibility-taking INCREASE obedience (they strengthen legitimacy and the agentic state), and payment was never a meaningful lever.`
          },
          {
            question: `A charity first asks homeowners to display a small window sticker supporting a cause; two weeks later it asks the same homeowners to install a large lawn sign, and they agree at far higher rates than controls. The technique and its usual mechanism are:`,
            options: [`Foot-in-the-door, working through self-perception`, `Door-in-the-face, working through reciprocal concessions`, `Lowballing, working through prior commitment`, `Normative influence, working through group pressure`],
            correctAnswer: 0,
            explanation: `Small-request-first-then-large is foot-in-the-door; the standard mechanism is self-perception and consistency — the first compliance updates identity ("I'm someone who supports this"), and the larger request cashes in on that identity. Door-in-the-face runs in the opposite order (large refused, then moderate), and lowballing reveals hidden costs after commitment.`
          },
          {
            question: `A jury whose members individually favored moderately high damages awards, after deliberating together, unanimously awards damages far above ANY member's initial figure — with no evidence of suppressed disagreement. This outcome exemplifies:`,
            options: [`Groupthink, because the verdict was unanimous`, `Social loafing, as members deferred to the loudest juror`, `Group polarization, amplifying the shared initial lean`, `The bystander effect, as responsibility was diffused`],
            correctAnswer: 2,
            explanation: `Everyone leaned the same way beforehand, and deliberation amplified that lean via new same-side arguments and normative one-upping — polarization's exact signature. Groupthink requires suppressed private dissent producing a defective consensus, which the stem explicitly rules out; unanimity alone never diagnoses groupthink. No effort-pooling or helping situation is involved.`
          },
          {
            question: `A choir member sings noticeably quieter in a 60-person ensemble where microphones cannot isolate voices, but at full effort during solo auditions. The intervention MOST directly targeted at this mechanism would be:`,
            options: [`Adding more singers to diffuse the workload further`, `Recording and reviewing each singer's individual channel`, `Having an audience watch rehearsals to increase arousal`, `Encouraging the group to bond so members like each other more`],
            correctAnswer: 1,
            explanation: `Quieter effort when output is pooled and anonymous is social loafing, and its mechanism is unidentifiability of individual contribution — so the direct fix is making each contribution traceable. Adding singers worsens loafing; audiences engage facilitation (a different presence effect that would help only well-learned singing); cohesion helps somewhat but does not target the identifiability mechanism.`
          }
        ]
      }
    },
    {
      id: 'grp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Conformity splits by motive: normative (to belong; public-only, shown by Asch's unambiguous task and the written-response drop) vs. informational (to be right; ambiguity, private acceptance); one dissenter breaks unanimity's spell
- Obedience is situational: legitimacy, proximity, responsibility transfer (agentic state); defiant peers are the strongest antidote
- Compliance techniques classify by request sequence: foot-in-the-door (small → large, self-perception), door-in-the-face (large refused → moderate, reciprocity), lowball (commit → reveal costs)
- Presence effects: facilitation strengthens the dominant response (helps practiced, hurts novel tasks); loafing follows unidentifiable pooled effort — cure with identifiability; deindividuation = anonymity + arousal dissolving self-monitoring
- Groupthink (suppressed dissent, directive leader, mindguards → defective consensus) vs. polarization (shared lean amplified by discussion) — diagnose by asking whether dissent existed and was silenced`
    }
  ]
};
