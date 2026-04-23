#!/usr/bin/env python3
"""
Rewrite src/data/ap-psych-frq/questions.ts with substantive,
research-grounded AP Psychology FRQ prompts mirroring the AAS/HG gold standard.

Preserves the existing TypeScript interfaces and named exports
(apPsychFRQs, getApPsychFRQs, getConceptApplicationFRQs,
getResearchDesignFRQs, generateFullExamFRQs).

Produces 4 concept-application FRQs + 4 research-design FRQs, each 7 points,
4 parts (a)-(d), with rubrics anchored in named psychologists, dated studies,
and primary citations (Bandura, Loftus, Milgram, Asch, Festinger, Kahneman,
Seligman, Pavlov, Skinner, Rosenhan, Zimbardo, Ainsworth, Piaget, Erikson,
Maslow, Ekman, Schachter–Singer, etc.).
"""
from __future__ import annotations
import os, json

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT  = os.path.join(ROOT, "src", "data", "ap-psych-frq", "questions.ts")


def js(s): return json.dumps(s, ensure_ascii=False)


def part(label, prompt, max_pts, rubric_items, sample):
    rubric_lines = ",\n          ".join(
        f"{{ points: {pts}, description: {js(desc)}, keywords: {json.dumps(kw, ensure_ascii=False)} }}"
        for pts, desc, kw in rubric_items
    )
    return (
        f"      {{\n"
        f"        label: {js(label)},\n"
        f"        prompt: {js(prompt)},\n"
        f"        maxPoints: {max_pts},\n"
        f"        rubric: [\n          {rubric_lines}\n        ],\n"
        f"        sampleAnswer: {js(sample)},\n"
        f"      }}"
    )


def frq(id_, type_, title, prompt, parts, total, time, calc=False):
    parts_str = ",\n".join(parts)
    return (
        f"  {{\n"
        f"    id: {js(id_)},\n"
        f"    type: '{type_}',\n"
        f"    title: {js(title)},\n"
        f"    prompt: {js(prompt)},\n"
        f"    totalPoints: {total},\n"
        f"    timeRecommendation: {js(time)},\n"
        f"    calculatorAllowed: {str(calc).lower()},\n"
        f"    parts: [\n{parts_str}\n    ],\n"
        f"  }}"
    )


# ============================================================================
# CONCEPT-APPLICATION FRQs — apply named concepts/studies to a scenario
# ============================================================================

CA_1 = frq(
    "psych-ca-1", "concept-application",
    "College Transition: Biology, Cognition, Social",
    "Maya is a first-year college student adjusting to life away from home. She struggles to stay awake in her morning classes because she stays up past 2 a.m. studying. She constantly worries she will fail her exams, even though she has earned A's on her first three midterms. After joining the debate club, she notices she studies harder when other club members are present in the library. During her Spanish exam, she cannot recall vocabulary words she clearly studied the night before, but the words come to her easily later that evening when she is back in her dorm room.",
    [
        part("(a)",
             "Explain how the suprachiasmatic nucleus (SCN) and melatonin contribute to Maya's difficulty staying awake in morning classes.",
             1,
             [(1, "Explains the SCN's role as the brain's master clock and melatonin's role in promoting sleep, applied to Maya's late nights",
                  ["suprachiasmatic", "SCN", "hypothalamus", "circadian", "melatonin", "pineal", "24-hour", "sleep-wake"])],
             "The suprachiasmatic nucleus (SCN), located in the hypothalamus, functions as the body's master circadian pacemaker, regulating the release of melatonin from the pineal gland. Because Maya stays up past 2 a.m., her SCN-driven release of melatonin is shifted later, so melatonin remains elevated during her morning classes — biologically priming her for sleep when class begins."),
        part("(b)",
             "Explain how Albert Bandura's concept of self-efficacy (1977) accounts for Maya's persistent worry about failing despite her actual A's.",
             1,
             [(1, "Defines Bandura (1977) self-efficacy as belief in one's capacity to succeed, distinguishes it from objective performance, and applies it to Maya",
                  ["self-efficacy", "Bandura", "1977", "Self-Efficacy: Toward a Unifying Theory", "belief", "capability", "performance accomplishments"])],
             "Albert Bandura's *Self-Efficacy: Toward a Unifying Theory of Behavioral Change* (Psychological Review, 1977) defined self-efficacy as a person's belief in their capability to execute the behaviors needed to succeed. Self-efficacy is distinct from objective ability; Maya's three A's are 'performance accomplishments' that *should* raise self-efficacy, but if her self-appraisal remains low, she will continue to anticipate failure regardless of outcome data — a classic dissociation Bandura documented."),
        part("(c)",
             "Explain how Robert Zajonc's drive theory of social facilitation (1965) accounts for Maya's increased studying when debate club members are present.",
             1,
             [(1, "Names Zajonc 1965 drive theory; explains arousal enhancing dominant responses on well-learned tasks",
                  ["Zajonc", "1965", "social facilitation", "Science", "drive theory", "arousal", "dominant response", "well-learned", "Triplett", "1898"])],
             "Robert Zajonc's *Social Facilitation* (Science, 1965) reconciled prior conflicting findings (going back to Norman Triplett's 1898 cyclist study) by arguing that the mere presence of others raises physiological arousal, which strengthens the *dominant response* on a task. Studying is well-practiced for Maya, so her dominant response (focused effort) is enhanced rather than disrupted by the presence of debate club members."),
        part("(d)",
             "Explain how encoding-specificity (Tulving & Thomson, 1973) accounts for Maya forgetting Spanish vocabulary in the exam room but recalling it later in her dorm.",
             1,
             [(1, "Names Tulving & Thomson 1973 encoding-specificity; explains context-dependent retrieval and Maya recalling words in the original encoding context (dorm)",
                  ["encoding specificity", "Tulving", "Thomson", "1973", "context-dependent", "Godden", "Baddeley", "1975", "retrieval cues", "state-dependent"])],
             "Endel Tulving and Donald Thomson's encoding-specificity principle (Psychological Review, 1973) holds that retrieval is most successful when the cues at retrieval match those present at encoding. Godden and Baddeley's 1975 underwater/land study famously confirmed context-dependent memory. Maya encoded Spanish vocabulary in her dorm, so in the unfamiliar exam room she lacks matching contextual cues; back in her dorm, the original encoding context restores those cues and the words come to her easily."),
        part("(e)",
             "Explain how the Yerkes-Dodson law (1908) accounts for Maya's exam performance pattern — strong performance on her first three midterms but worry impairing her Spanish exam recall.",
             1,
             [(1, "Names Yerkes & Dodson 1908; describes inverted-U curve linking arousal to performance and applies to high-anxiety Spanish exam vs. moderate-arousal earlier midterms",
                  ["Yerkes", "Dodson", "1908", "inverted-U", "arousal", "performance", "moderate", "optimal arousal", "anxiety", "task difficulty"])],
             "Robert Yerkes and John Dodson's 1908 law describes an inverted-U relationship between arousal and performance: moderate arousal optimizes performance, while too little or too much impairs it, with the optimal level lower for difficult tasks. Maya's first three midterms produced moderate arousal (near her peak); the cumulative exam-failure worry plus Spanish-exam difficulty pushed her arousal past the peak, impairing the controlled retrieval processes she needed for vocabulary recall."),
        part("(f)",
             "Explain ONE way Carol Dweck's mindset theory (2006) could be applied to help Maya, distinguishing fixed and growth mindsets.",
             1,
             [(1, "Names Dweck 2006 *Mindset*; defines fixed vs. growth mindset; applies a growth-mindset intervention to Maya's worry",
                  ["Dweck", "2006", "Mindset", "fixed mindset", "growth mindset", "effort", "praise process", "intervention", "Blackwell", "2007"])],
             "Carol Dweck's *Mindset: The New Psychology of Success* (2006) distinguished a *fixed* mindset (intelligence is innate and stable) from a *growth* mindset (intelligence develops through effort). Maya's catastrophic anticipation despite three A's is consistent with a fixed mindset interpreting any future bad grade as evidence of permanent inability. A growth-mindset intervention — explicitly attributing her A's to study strategy and effort, as in Blackwell, Trzesniewski, and Dweck (2007) — would reframe future struggle as a learning signal rather than proof of fixed deficiency."),
        part("(g)",
             "Explain ONE limitation of applying laboratory-based concepts (such as social facilitation or encoding-specificity) to Maya's real-world college experience.",
             1,
             [(1, "Identifies an external-validity / ecological-validity issue (e.g., Bronfenbrenner 1977 ecological systems; Mook 1983 'In Defense of External Invalidity'; cultural generalizability and WEIRD samples — Henrich, Heine, Norenzayan 2010)",
                  ["external validity", "ecological validity", "Bronfenbrenner", "1977", "Mook", "1983", "WEIRD", "Henrich", "2010", "generalizability"])],
             "Most foundational concepts above were derived from controlled laboratory studies on narrow populations — Henrich, Heine, and Norenzayan's 2010 paper *The Weirdest People in the World?* documented that ~96% of psychological research samples are drawn from WEIRD (Western, Educated, Industrialized, Rich, Democratic) populations, raising external-validity concerns. Urie Bronfenbrenner's 1977 ecological-systems critique adds that lab findings may not capture how nested social contexts (dorm, family, professors, culture) interact in Maya's real life. So while the named principles offer useful first-pass explanations, fitting them to Maya requires caution about ecological generalization."),
    ],
    7, "~25 minutes",
)


CA_2 = frq(
    "psych-ca-2", "concept-application",
    "Workplace Anxiety: Learning, Memory & Therapy",
    "Daniel, a 28-year-old paralegal, recently survived a minor car accident on his commute. Two months later, he experiences intense anxiety every morning when his alarm rings (the same one that woke him on the day of the crash). He has stopped driving on highways, avoids the intersection where the accident occurred, and reports flashbacks that intrude during meetings. His psychologist diagnoses post-traumatic stress disorder (PTSD) and begins treatment.",
    [
        part("(a)",
             "Explain how classical conditioning, as described by Ivan Pavlov (1927), accounts for Daniel's anxiety response to his alarm.",
             1,
             [(1, "Names Pavlov 1927 *Conditioned Reflexes*; identifies UCS, UCR, CS, CR for Daniel's case",
                  ["Pavlov", "1927", "Conditioned Reflexes", "UCS", "UCR", "CS", "CR", "neutral stimulus", "association"])],
             "Ivan Pavlov's *Conditioned Reflexes* (1927) demonstrated that a neutral stimulus paired with an unconditioned stimulus (UCS) eliciting an unconditioned response (UCR) becomes a conditioned stimulus (CS) producing a conditioned response (CR). For Daniel, the car accident is the UCS producing intense fear (UCR); the alarm — present at the time of the trauma — became the CS that now elicits anxiety (CR) on its own."),
        part("(b)",
             "Explain how negative reinforcement, as defined by B. F. Skinner (1953), maintains Daniel's avoidance of highways and the accident intersection.",
             1,
             [(1, "Names Skinner 1953 *Science and Human Behavior*; correctly defines negative reinforcement (removal of aversive stimulus) and contrasts it with punishment",
                  ["Skinner", "1953", "Science and Human Behavior", "negative reinforcement", "operant conditioning", "avoidance", "Mowrer", "two-factor", "1947"])],
             "B. F. Skinner's *Science and Human Behavior* (1953) defined negative reinforcement as the strengthening of a behavior by removing an aversive stimulus. Each time Daniel avoids the highway, his anxiety drops sharply — that drop negatively reinforces the avoidance, increasing its future probability. Hobart Mowrer's 1947 two-factor theory combines exactly this with Pavlovian acquisition to explain how PTSD avoidance is acquired *and* maintained."),
        part("(c)",
             "Explain how the LeDoux (1996) amygdala fear-circuit model accounts for the rapid, involuntary nature of Daniel's flashbacks.",
             1,
             [(1, "Names Joseph LeDoux 1996 *The Emotional Brain*; describes the amygdala-mediated 'low road' (thalamus → amygdala) bypassing cortex for rapid fear responses",
                  ["LeDoux", "1996", "Emotional Brain", "amygdala", "thalamus", "low road", "high road", "cortex", "fear conditioning"])],
             "Joseph LeDoux's *The Emotional Brain* (1996) mapped two parallel fear pathways: a fast 'low road' from the thalamus directly to the amygdala that triggers fear responses before cortical processing, and a slower 'high road' through the sensory cortex. Daniel's flashbacks, intruding involuntarily during meetings, reflect the low-road circuit firing in response to internal cues (sights, sounds, even thoughts that resemble the accident) before his prefrontal cortex can contextualize them as safe."),
        part("(d)",
             "Explain how systematic desensitization, developed by Joseph Wolpe (1958), would be used to treat Daniel's highway avoidance.",
             1,
             [(1, "Names Wolpe 1958 *Psychotherapy by Reciprocal Inhibition*; describes hierarchy + relaxation + graded exposure pairing",
                  ["Wolpe", "1958", "Psychotherapy by Reciprocal Inhibition", "systematic desensitization", "anxiety hierarchy", "progressive relaxation", "counterconditioning", "exposure"])],
             "Joseph Wolpe's *Psychotherapy by Reciprocal Inhibition* (1958) developed systematic desensitization, which pairs progressive relaxation with a graded anxiety hierarchy. Daniel and his therapist would build a hierarchy (e.g., looking at a map of the highway → driving to the on-ramp → driving one mile → driving past the accident intersection), then practice each step while in a relaxed state. Because relaxation and fear cannot coexist (reciprocal inhibition), the conditioned anxiety response is gradually counterconditioned."),
        part("(e)",
             "Explain how cognitive restructuring, as described in Aaron Beck's cognitive therapy (1976), would address Daniel's catastrophic interpretations of bodily anxiety.",
             1,
             [(1, "Names Beck 1976 *Cognitive Therapy and the Emotional Disorders*; identifies automatic thoughts/cognitive distortions and the restructuring intervention",
                  ["Beck", "1976", "Cognitive Therapy and the Emotional Disorders", "automatic thoughts", "cognitive distortion", "catastrophizing", "restructuring", "Ehlers", "Clark", "2000"])],
             "Aaron Beck's *Cognitive Therapy and the Emotional Disorders* (1976) framed psychopathology as driven by automatic thoughts and cognitive distortions (e.g., catastrophizing). Ehlers and Clark's 2000 cognitive model of PTSD applies this directly: Daniel likely interprets his pounding heart and intrusive images as evidence that he is 'going crazy' or 'unsafe.' Cognitive restructuring would identify those automatic thoughts, generate evidence-based alternatives (\"this is a normal stress response, not danger\"), and weaken the catastrophic appraisal cycle."),
        part("(f)",
             "Explain how Donald Hebb's principle (1949) — 'cells that fire together, wire together' — relates to extinction learning during exposure therapy.",
             1,
             [(1, "Names Hebb 1949 *Organization of Behavior*; relates to long-term potentiation and applies to extinction (new safety learning competing with original fear memory)",
                  ["Hebb", "1949", "Organization of Behavior", "fire together wire together", "long-term potentiation", "LTP", "extinction", "Bouch", "Bouton", "ventromedial prefrontal cortex"])],
             "Donald Hebb's *The Organization of Behavior* (1949) proposed that synapses repeatedly co-active become strengthened — the basis for long-term potentiation (LTP) discovered by Bliss and Lømo in 1973. Mark Bouton's research shows extinction is *new* learning rather than erasure: during graded exposure, Daniel forms new ventromedial-prefrontal-cortex-to-amygdala connections that signal 'this cue now predicts safety.' These new associations compete with — but do not erase — the original conditioned fear, which is why context shifts can produce relapse."),
        part("(g)",
             "Explain ONE ethical principle from the APA Ethics Code (2017) that Daniel's psychologist must apply during exposure therapy.",
             1,
             [(1, "Names a specific APA Ethics Code 2017 standard (informed consent 3.10, beneficence/nonmaleficence Principle A, competence Standard 2.01)",
                  ["APA Ethics Code", "2017", "informed consent", "3.10", "beneficence", "nonmaleficence", "competence", "2.01", "Belmont Report", "1979"])],
             "Under APA Ethics Code Standard 3.10 (Informed Consent, 2017), Daniel's psychologist must explain the nature of exposure therapy — that it deliberately evokes anxiety as part of treatment — and obtain voluntary, documented consent before beginning. Principle A (beneficence and nonmaleficence) further requires the therapist to weigh exposure's short-term distress against documented long-term benefit (Foa et al.'s 2007 prolonged-exposure trials). Standard 2.01 (Boundaries of Competence) requires the therapist to have specific training in evidence-based PTSD treatment before proceeding."),
    ],
    7, "~25 minutes",
)


CA_3 = frq(
    "psych-ca-3", "concept-application",
    "Eyewitness Testimony: Memory & Cognition",
    "Sofia witnesses a robbery at her local convenience store. The police interview her later that evening, and she identifies a suspect from a six-person photo lineup. The defense attorney argues that Sofia's identification may be unreliable. The judge admits expert testimony from a memory researcher.",
    [
        part("(a)",
             "Explain how Elizabeth Loftus's misinformation effect (Loftus & Palmer, 1974) could affect Sofia's later memory of the robbery.",
             1,
             [(1, "Names Loftus & Palmer 1974 *Reconstruction of Automobile Destruction*; describes how post-event misleading information alters memory (e.g., 'smashed' vs. 'hit' verbs; broken-glass false memory rate)",
                  ["Loftus", "Palmer", "1974", "Reconstruction of Automobile Destruction", "misinformation effect", "smashed", "hit", "leading question", "broken glass"])],
             "Elizabeth Loftus and John Palmer's *Reconstruction of Automobile Destruction* (Journal of Verbal Learning and Verbal Behavior, 1974) showed that participants who heard the verb 'smashed' rather than 'hit' estimated higher speeds and were more likely to falsely recall broken glass a week later. If a police officer asks Sofia a leading question (e.g., 'Did you see the gun in the man's right hand?'), the post-event information can be incorporated into her memory, making her later report less accurate even though she will subjectively feel certain."),
        part("(b)",
             "Explain how the weapon-focus effect (Loftus, Loftus & Messo, 1987) could affect Sofia's ability to identify the suspect's face.",
             1,
             [(1, "Names Loftus, Loftus & Messo 1987 weapon-focus eye-tracking study; explains attentional capture by the weapon at the cost of peripheral details",
                  ["weapon focus", "Loftus", "Messo", "1987", "attention", "encoding", "fixation", "eye tracking", "peripheral", "face identification"])],
             "Loftus, Loftus, and Messo (1987) used eye-tracking to show that participants viewing a scene with a weapon spent significantly more fixation time on the weapon than on the perpetrator's face. If Sofia saw a weapon during the robbery, her attentional capture by it likely reduced encoding of the suspect's face — independently of her general attentiveness — undermining her later face identification."),
        part("(c)",
             "Explain how source-monitoring error, as described by Marcia Johnson (Johnson, Hashtroudi & Lindsay, 1993), could lead Sofia to mistakenly identify someone she has actually only seen elsewhere (e.g., a regular customer at the store).",
             1,
             [(1, "Names Johnson, Hashtroudi & Lindsay 1993; defines source-monitoring as judging the origin of a memory; applies unconscious-transference example",
                  ["source monitoring", "Johnson", "Hashtroudi", "Lindsay", "1993", "Source Monitoring", "Psychological Bulletin", "unconscious transference", "false familiarity"])],
             "Marcia Johnson, Shahin Hashtroudi, and D. Stephen Lindsay's *Source Monitoring* (Psychological Bulletin, 1993) framed memory as requiring judgments about the *origin* of a remembered detail. A familiar but innocent person — a regular customer — could feel familiar to Sofia from prior store visits; she may misattribute that familiarity to the robbery itself ('unconscious transference'), leading to a confident but false identification."),
        part("(d)",
             "Explain how the Innocence Project's documented data (1989–present) on eyewitness misidentification supports concerns about Sofia's identification.",
             1,
             [(1, "Cites Innocence Project statistic that ~70% of DNA exonerations involve eyewitness misidentification (figures from 1989-2024)",
                  ["Innocence Project", "1992", "DNA exoneration", "70 percent", "eyewitness misidentification", "Scheck", "Neufeld", "Wells", "Penrod", "1998"])],
             "The Innocence Project (founded 1992 by Barry Scheck and Peter Neufeld) reports that mistaken eyewitness identification was a contributing factor in roughly 70% of the more than 375 post-conviction DNA exonerations through 2024. Gary Wells and colleagues' systematic research (e.g., Wells et al., American Psychologist, 1998) translated lab effects like Loftus's into specific lineup-procedure recommendations. Sofia's confident identification, no matter how subjectively certain, is exactly the kind of evidence repeatedly shown to be unreliable in the field."),
        part("(e)",
             "Explain how a sequential, double-blind lineup (Wells et al., 1998) would reduce identification error compared to the standard simultaneous photo lineup the police used.",
             1,
             [(1, "Names Wells et al. 1998 American Psychologist guidelines; distinguishes simultaneous (relative judgment) vs. sequential (absolute judgment) and explains double-blind administration",
                  ["sequential lineup", "Wells", "1998", "American Psychologist", "double-blind", "absolute judgment", "relative judgment", "Steblay", "2011", "meta-analysis"])],
             "Gary Wells et al.'s 1998 American Psychologist eyewitness-evidence guidelines recommend a sequential, double-blind lineup: photos shown one at a time (forcing absolute rather than relative judgments — i.e., 'Is this the person?' instead of 'Which is closest?') and administered by an officer who does not know the suspect's identity (preventing inadvertent cueing). Steblay et al.'s 2011 meta-analysis confirmed sequential procedures reduce false identifications, though they also slightly reduce correct identifications — a trade-off the field generally accepts in favor of fewer false convictions."),
        part("(f)",
             "Explain how the Yerkes-Dodson law (1908) and acute-stress effects on the hippocampus could have reduced the accuracy of Sofia's memory encoding.",
             1,
             [(1, "Names Yerkes & Dodson 1908 inverted-U; cites cortisol/hippocampus effects (Sapolsky); explains over-arousal degrading memory encoding",
                  ["Yerkes", "Dodson", "1908", "inverted-U", "stress", "cortisol", "hippocampus", "Sapolsky", "Why Zebras", "1994", "Deffenbacher", "Loftus"])],
             "Yerkes and Dodson's 1908 inverted-U holds that very high arousal impairs performance on complex tasks. Acute stress floods the system with cortisol; Robert Sapolsky's *Why Zebras Don't Get Ulcers* (1994) summarized how prolonged elevation impairs hippocampal function. Deffenbacher et al.'s 2004 meta-analysis (Law and Human Behavior) confirmed that high stress reduces eyewitness identification accuracy. Sofia's robbery would push her well past optimal arousal, degrading the hippocampally-mediated detail encoding her later identification depends on."),
        part("(g)",
             "Explain ONE legal-policy implication of this research, citing a specific U.S. case or jurisdictional reform.",
             1,
             [(1, "Names New Jersey *State v. Henderson* (2011), Oregon *State v. Lawson* (2012), or DOJ/NIJ *Eyewitness Evidence: A Guide for Law Enforcement* (1999)",
                  ["State v. Henderson", "2011", "New Jersey", "State v. Lawson", "2012", "Oregon", "DOJ", "NIJ", "Eyewitness Evidence", "1999", "Manson v. Brathwaite", "1977"])],
             "New Jersey's Supreme Court ruling in *State v. Henderson* (2011) substantially revised eyewitness-identification law, requiring jury instructions on memory's malleability and recognizing system variables (lineup procedure) and estimator variables (lighting, weapon focus, stress). The decision drew explicitly on the meta-analytic eyewitness research summarized by Wells, Loftus, and others — and replaced the more permissive *Manson v. Brathwaite* (1977) reliability test in New Jersey. Federally, the National Institute of Justice's 1999 *Eyewitness Evidence: A Guide for Law Enforcement* incorporated Wells's sequential, double-blind recommendations into national best practice."),
    ],
    7, "~25 minutes",
)


CA_4 = frq(
    "psych-ca-4", "concept-application",
    "Mood, Motivation & Therapy: A Case of Depression",
    "Marcus, a 35-year-old engineer, has experienced two months of low mood, loss of interest in activities he previously enjoyed, fatigue, and difficulty concentrating. His primary-care physician refers him to a psychologist, who diagnoses major depressive disorder (MDD) and recommends a combination of psychotherapy and pharmacotherapy.",
    [
        part("(a)",
             "Identify TWO DSM-5-TR (2022) symptom criteria for major depressive disorder beyond the two listed in Marcus's case (low mood, loss of interest), and connect them to specific reported symptoms.",
             1,
             [(1, "Names two specific DSM-5-TR 2022 MDD symptom criteria and links to Marcus's reported symptoms",
                  ["DSM-5-TR", "2022", "major depressive disorder", "anhedonia", "psychomotor", "fatigue", "concentration", "worthlessness", "sleep", "appetite", "5 of 9", "two-week"])],
             "DSM-5-TR (2022) requires five of nine symptoms over two weeks, including at least one of (1) depressed mood or (2) anhedonia. Marcus also reports (3) fatigue or loss of energy and (4) diminished ability to concentrate — both DSM-5-TR criteria. He likely additionally meets criteria such as (5) psychomotor agitation/retardation and (6) sleep or appetite disturbance, which the clinician would assess in interview."),
        part("(b)",
             "Explain Aaron Beck's cognitive triad (1967) and apply it to Marcus's depression.",
             1,
             [(1, "Names Beck 1967 *Depression: Clinical, Experimental, and Theoretical Aspects*; defines negative views of self/world/future",
                  ["Beck", "1967", "Depression: Clinical, Experimental, and Theoretical Aspects", "cognitive triad", "self", "world", "future", "schemas", "negative cognitive triad"])],
             "Aaron Beck's *Depression: Clinical, Experimental, and Theoretical Aspects* (1967) proposed a cognitive triad of negative views of (1) the self (\"I am inadequate\"), (2) the world (\"my work is meaningless\"), and (3) the future (\"things will never improve\"). Marcus's loss of interest and concentration likely reflect this triad: he interprets ordinary fatigue as evidence of personal failure, sees his projects as pointless, and cannot envision a recovered future — generating a self-reinforcing depressive cycle."),
        part("(c)",
             "Explain how Martin Seligman's learned helplessness model (Seligman & Maier, 1967) accounts for the chronic, passive component of Marcus's depression.",
             1,
             [(1, "Names Seligman & Maier 1967 dog-shock studies; explains learned helplessness; mentions Abramson reformulation 1978 (attributional)",
                  ["Seligman", "Maier", "1967", "learned helplessness", "dogs", "shock", "Abramson", "Seligman", "Teasdale", "1978", "attributional", "reformulated"])],
             "Martin Seligman and Steven Maier's 1967 dog-shock studies showed that animals exposed to inescapable shocks failed to escape later when escape was possible — *learned helplessness*. Abramson, Seligman, and Teasdale's 1978 reformulation argued humans become depressed when they attribute negative events to internal, stable, and global causes. Marcus's two-month course suggests he has begun making such attributions ('It's me; this is permanent; it pervades everything'), reinforcing passive withdrawal — even though Maier's 2016 reanalysis now shows the cortical mechanism actually involves *learning helpfulness rather than learning helplessness*."),
        part("(d)",
             "Explain the monoamine hypothesis of depression and how SSRIs (introduced clinically with fluoxetine in 1987) act on it.",
             1,
             [(1, "Explains monoamine (especially serotonin) hypothesis; names fluoxetine 1987 FDA approval; identifies SSRI mechanism (reuptake inhibition)",
                  ["monoamine hypothesis", "serotonin", "Schildkraut", "1965", "fluoxetine", "Prozac", "1987", "FDA", "SSRI", "selective serotonin reuptake inhibitor", "synapse"])],
             "Joseph Schildkraut's 1965 *American Journal of Psychiatry* paper proposed the monoamine hypothesis: depression involves deficient activity of monoamine neurotransmitters, especially norepinephrine and serotonin, at the synapse. Fluoxetine (Prozac), FDA-approved in December 1987, was the first widely-used selective serotonin reuptake inhibitor (SSRI); SSRIs block the serotonin transporter, increasing serotonin availability in the synaptic cleft. Modern reviews (e.g., Cipriani et al., Lancet, 2018) support modest efficacy, though the hypothesis is now considered an oversimplification — symptom relief lags neurotransmitter changes by weeks, suggesting downstream neuroplasticity."),
        part("(e)",
             "Explain how Cognitive Behavioral Therapy (CBT) developed by Beck (1979) would treat Marcus, naming TWO specific CBT techniques.",
             1,
             [(1, "Names Beck et al. 1979 *Cognitive Therapy of Depression*; identifies two techniques (e.g., behavioral activation, thought record / cognitive restructuring, Socratic questioning)",
                  ["Beck", "Rush", "Shaw", "Emery", "1979", "Cognitive Therapy of Depression", "CBT", "behavioral activation", "thought record", "Socratic questioning", "Hollon", "DeRubeis"])],
             "Beck, Rush, Shaw, and Emery's *Cognitive Therapy of Depression* (1979) is the foundational CBT manual. Two specific techniques: (1) *Behavioral activation* — the therapist and Marcus schedule small, mastery- or pleasure-generating activities, breaking the withdrawal cycle (Jacobson et al., 1996, showed BA alone matches full CBT in some trials); (2) *Thought records / cognitive restructuring* — Marcus logs automatic thoughts during low moods, identifies cognitive distortions, and generates evidence-based alternatives. Hollon, DeRubeis, and Seligman's 2005 trials show CBT and SSRIs each produce ~50% remission, with combined treatment incrementally better."),
        part("(f)",
             "Explain how Maslow's hierarchy of needs (1943) and Deci and Ryan's self-determination theory (1985) offer two distinct motivational frames for Marcus's loss of interest.",
             1,
             [(1, "Names Maslow 1943 *A Theory of Human Motivation*; names Deci & Ryan 1985 self-determination theory; contrasts deficiency-needs vs. autonomy-competence-relatedness frame",
                  ["Maslow", "1943", "Theory of Human Motivation", "hierarchy of needs", "Deci", "Ryan", "1985", "self-determination", "autonomy", "competence", "relatedness", "intrinsic motivation"])],
             "Abraham Maslow's *A Theory of Human Motivation* (Psychological Review, 1943) framed motivation as a hierarchy ascending from physiological needs through safety, belongingness, esteem, to self-actualization; Marcus's fatigue and social withdrawal disrupt the lower physiological and belonging tiers, undermining higher growth motivation. Edward Deci and Richard Ryan's *Intrinsic Motivation and Self-Determination in Human Behavior* (1985) instead identifies three universal psychological needs — autonomy, competence, and relatedness. From this view, Marcus's loss of interest signals frustrated competence and relatedness needs, suggesting interventions that restore mastery experiences and supportive relationships rather than rank-ordered deficits."),
        part("(g)",
             "Explain ONE social or cultural factor that may shape Marcus's experience of depression, citing relevant cross-cultural research.",
             1,
             [(1, "Cites a specific cross-cultural study or framing: Kleinman 1980 *Patients and Healers*, Hwang & Ting 2008 acculturative stress, Hofmann 2017 cross-cultural CBT, WHO 2017 estimate of 322 million globally with depression",
                  ["Kleinman", "1980", "Patients and Healers", "somatization", "WHO", "2017", "322 million", "stigma", "Hofmann", "cross-cultural", "Hwang"])],
             "Arthur Kleinman's *Patients and Healers in the Context of Culture* (1980) documented that depression is often expressed somatically — as bodily complaints — in non-Western contexts (Kleinman's Chinese fieldwork famously identified 'neurasthenia' as a culturally favored idiom). The WHO's 2017 *Depression and Other Common Mental Disorders* report estimated 322 million people globally with depression, with significant variation in help-seeking driven by stigma, gender, and cultural idioms of distress. For Marcus, even within the U.S., gender norms about emotional disclosure and engineering-workplace stigma may shape symptom presentation and willingness to seek treatment."),
    ],
    7, "~25 minutes",
)


# ============================================================================
# RESEARCH-DESIGN FRQs
# ============================================================================

RD_1 = frq(
    "psych-rd-1", "research-design",
    "Sleep Duration & Memory Consolidation",
    "A psychologist hypothesizes that college students who sleep 8 hours after learning a new list of vocabulary words will recall more words on a test 24 hours later than students who sleep only 4 hours. The psychologist recruits 80 undergraduate volunteers from a single university and offers each a $25 gift card for participation.",
    [
        part("(a)",
             "Identify the operational independent variable, dependent variable, and a directional hypothesis for this study.",
             1,
             [(1, "Identifies IV (sleep duration: 4 vs 8 hrs), DV (number of words recalled at 24 hrs), and a directional hypothesis",
                  ["independent variable", "dependent variable", "operational definition", "directional hypothesis", "8 hours", "4 hours", "recall"])],
             "The IV is sleep duration, operationalized as 4 hours vs. 8 hours of monitored sleep in the lab the night after learning. The DV is the number of vocabulary words correctly recalled on a free-recall test 24 hours after learning. A directional hypothesis: 'Students assigned to the 8-hour sleep condition will recall significantly more vocabulary words at 24 hours than students assigned to the 4-hour sleep condition.'"),
        part("(b)",
             "Explain how the psychologist should implement random assignment to maximize internal validity, and explain why this is critical for causal inference (Campbell & Stanley, 1963).",
             1,
             [(1, "Explains random-assignment procedure (e.g., random number table, coin flip per participant); cites Campbell & Stanley 1963 internal validity / control of confounds",
                  ["random assignment", "internal validity", "Campbell", "Stanley", "1963", "Experimental and Quasi-Experimental Designs", "confound", "causal inference", "between-subjects"])],
             "Each of the 80 participants would be randomly assigned to either the 4-hour or 8-hour sleep condition (e.g., using a random-number table or computer-generated sequence) so each participant has a 0.5 probability of being in either group. Donald Campbell and Julian Stanley's *Experimental and Quasi-Experimental Designs for Research* (1963) made internal validity — the degree to which observed effects can be attributed to the IV rather than confounds — the central criterion of true experiments. Random assignment distributes pre-existing differences (baseline memory, age, motivation, prior sleep habits) across groups in expectation, supporting a causal claim that any group difference in recall is due to sleep duration."),
        part("(c)",
             "Identify ONE specific confounding variable and explain how it could plausibly produce the predicted result even if sleep duration had no causal effect.",
             1,
             [(1, "Names a plausible confound (caffeine intake, baseline sleep deprivation, time of test, demand characteristics) and explains how it could produce a spurious effect",
                  ["confound", "extraneous variable", "caffeine", "demand characteristics", "expectancy", "alternative explanation", "spurious"])],
             "If the 4-hour group is allowed to consume caffeine in the morning while the 8-hour group is not (e.g., because the 8-hour group is still sleeping at test scheduling time), caffeine — not sleep duration — could account for differences. Caffeine's well-documented impairing effect on memory consolidation when taken at certain times (Mednick et al., 2008) means the predicted recall difference could appear *because of caffeine asymmetry* rather than sleep itself, providing an alternative explanation for the result."),
        part("(d)",
             "Explain how the psychologist should use a double-blind procedure here, or — if not feasible — explain a comparable bias control and which biases it reduces.",
             1,
             [(1, "Acknowledges that a sleep-duration manipulation cannot truly be double-blind; proposes blind scoring of the recall test by an independent rater unaware of condition; identifies experimenter bias and demand characteristics as the targets",
                  ["double-blind", "single-blind", "blind scoring", "demand characteristics", "experimenter bias", "Rosenthal", "1963", "Pygmalion", "1968"])],
             "A true double-blind is impossible here because participants obviously know how long they slept. A practical substitute: have an independent rater — blind to condition — score the recall protocols, and use standardized, computer-administered instructions to minimize experimenter contact at test. Robert Rosenthal's 1963 work on experimenter expectancy and the *Pygmalion in the Classroom* (Rosenthal & Jacobson, 1968) findings show how unwitting cues can shape outcomes; blind scoring controls that bias and limits demand characteristics."),
        part("(e)",
             "Explain ONE limitation of using a sample of 80 undergraduates from a single university for generalization, and propose ONE specific sampling improvement.",
             1,
             [(1, "Identifies external-validity / sampling limitation citing Henrich, Heine & Norenzayan 2010 WEIRD critique or Sears 1986 college sophomores; proposes stratified random sampling or recruitment of multiple-site community sample",
                  ["external validity", "convenience sample", "WEIRD", "Henrich", "Heine", "Norenzayan", "2010", "Sears", "1986", "college sophomores", "stratified", "generalization"])],
             "The sample is a convenience sample of college students from one university — a population that David Sears's 1986 *College Sophomores in the Laboratory* critique flagged as unrepresentative, and that Henrich, Heine, and Norenzayan's 2010 paper *The Weirdest People in the World?* identified as overrepresenting WEIRD samples. Findings may not generalize to older adults, shift workers, or non-Western populations. An improvement: stratified random sampling across age, occupation, and geographic location — or, as a compromise, replication across multiple university and community sites with an explicit comparison."),
        part("(f)",
             "Identify ONE specific ethical issue raised by this study and the corresponding APA Ethics Code (2017) standard or Institutional Review Board (IRB) safeguard required.",
             1,
             [(1, "Names a specific concern (sleep deprivation as harm, $25 gift card as undue inducement, debriefing) and the relevant APA Ethics Code 2017 standard (3.10 informed consent, 8.06 inducements, 8.08 debriefing) or the federal Common Rule (45 CFR 46)",
                  ["APA Ethics Code", "2017", "informed consent", "3.10", "inducement", "8.06", "debriefing", "8.08", "IRB", "45 CFR 46", "Common Rule", "Belmont Report", "1979"])],
             "Restricting healthy adults to only 4 hours of sleep raises a minimal-risk-but-not-zero concern, especially with respect to morning driving safety after the test. APA Ethics Code Standard 3.10 (2017) requires informed consent describing those risks; Standard 8.06 prohibits the $25 gift card from being offered in a way that constitutes undue inducement (so the amount must be calibrated to local norms for IRB approval); Standard 8.08 requires debriefing about study purposes. The federal Common Rule (45 CFR 46) requires IRB review confirming the harm-benefit ratio is acceptable, with arrangements (e.g., taxi vouchers post-study) to ensure participants do not drive while sleep-deprived."),
        part("(g)",
             "Explain ONE statistical analysis appropriate for evaluating the hypothesis and what 'statistically significant' would mean (using α = .05).",
             1,
             [(1, "Names independent-samples t-test (or Welch's t / Mann-Whitney U); explains α = .05 and rejection of the null",
                  ["independent samples t-test", "Welch", "Mann-Whitney", "alpha", ".05", "null hypothesis", "p value", "statistically significant", "effect size", "Cohen's d"])],
             "The appropriate analysis is an independent-samples t-test comparing mean recall between the 4-hour and 8-hour groups. With α set at .05, 'statistically significant' means the probability of obtaining the observed (or more extreme) group difference if the null hypothesis (no true difference) were correct is less than 5%. Best practice (consistent with the APA's 2010 Publication Manual revisions and Cumming's *New Statistics*, 2014) is to additionally report an effect size (e.g., Cohen's *d*) and a confidence interval — significance alone does not indicate practical importance."),
    ],
    7, "~25 minutes",
)


RD_2 = frq(
    "psych-rd-2", "research-design",
    "Social Media Use & Adolescent Anxiety: A Longitudinal Design",
    "A developmental psychologist hypothesizes that heavier daily smartphone-based social media use is associated with higher anxiety symptoms in adolescents over time. She recruits 1,000 students aged 13–17 from public schools across three U.S. states and follows them for two years.",
    [
        part("(a)",
             "Identify whether this is an experimental, correlational, or quasi-experimental design and justify the classification.",
             1,
             [(1, "Identifies it as a longitudinal correlational (or observational/quasi-experimental) design, justifies by absence of random assignment and inability to manipulate social-media use ethically",
                  ["correlational", "longitudinal", "observational", "quasi-experimental", "no random assignment", "cannot manipulate", "Twenge", "Haidt"])],
             "This is a longitudinal correlational (observational) design: the researcher does not — and cannot ethically — randomly assign adolescents to heavy vs. light social-media use, so causal claims are limited. Heavy vs. light use is *measured* rather than manipulated, the cardinal feature distinguishing correlational from experimental designs (and the design used in much of the Twenge and Haidt work on this question)."),
        part("(b)",
             "Explain how the researcher should operationalize the predictor (social-media use) and the outcome (anxiety) using two specific measurement instruments or approaches.",
             1,
             [(1, "Names a specific operationalization of social-media use (objective screen-time logs, e.g., iOS Screen Time API or Android Digital Wellbeing) and a validated anxiety measure (GAD-7 (Spitzer et al., 2006), SCARED (Birmaher et al., 1997))",
                  ["operationalization", "screen time", "iOS", "Digital Wellbeing", "GAD-7", "Spitzer", "2006", "SCARED", "Birmaher", "1997", "self-report", "objective"])],
             "Predictor: average daily minutes on social-media apps measured *objectively* via iOS Screen Time or Android Digital Wellbeing logs (rather than relying on self-report, which Sewall et al. 2020 showed correlates only modestly with objective use). Outcome: anxiety symptoms measured with a validated youth-appropriate scale such as the Screen for Child Anxiety Related Emotional Disorders (SCARED; Birmaher et al., 1997) or the GAD-7 (Spitzer et al., Archives of Internal Medicine, 2006), administered every six months."),
        part("(c)",
             "Identify TWO specific threats to internal validity in this longitudinal design and explain how each could distort the observed association.",
             1,
             [(1, "Names two of: maturation, history (e.g., COVID-19 2020-22), selection bias, attrition, regression to the mean (Campbell & Stanley 1963)",
                  ["maturation", "history", "Campbell", "Stanley", "1963", "selection", "attrition", "regression to the mean", "COVID-19", "internal validity"])],
             "Two specific Campbell-and-Stanley (1963) threats: (1) *History* — major events affecting all adolescents during the two-year window (the COVID-19 pandemic, school shootings, an election cycle) could increase anxiety regardless of social-media use, inflating the apparent association; (2) *Attrition* — if heavy social-media users are more likely to drop out (or the reverse), the remaining sample becomes biased and the observed correlation may be due to differential dropout rather than a true effect."),
        part("(d)",
             "Explain why a correlation between social-media use and anxiety does not establish that social-media use *causes* anxiety, and identify ONE plausible alternative causal pathway.",
             1,
             [(1, "Articulates correlation ≠ causation; identifies a specific reverse-causation or third-variable explanation (e.g., already-anxious teens use more social media; sleep deprivation; family conflict)",
                  ["correlation does not imply causation", "reverse causation", "third variable", "confound", "directionality", "Orben", "Przybylski", "2019", "Twenge"])],
             "A correlation between two variables, however strong, can reflect (1) X causing Y, (2) Y causing X, or (3) a third variable causing both. Reverse causation is plausible here: adolescents already experiencing anxiety may *seek out* social media for connection or avoidance, so anxiety drives use rather than the reverse — an interpretation Amy Orben and Andrew Przybylski's 2019 *Nature Human Behaviour* analyses of large datasets emphasized when reporting that the small association left ample room for reverse pathways. A third variable (family conflict, sleep deprivation) could likewise produce both."),
        part("(e)",
             "Explain how the researcher could use cross-lagged panel analysis or a within-person fixed-effects model to strengthen causal inference, citing one published example.",
             1,
             [(1, "Names cross-lagged panel design or fixed-effects model and cites a specific paper (Orben, Dienlin & Przybylski, 2019, PNAS; Coyne et al., 2020 Computers in Human Behavior; Vuorre, Orben & Przybylski 2021)",
                  ["cross-lagged panel", "fixed effects", "within-person", "Orben", "Dienlin", "Przybylski", "2019", "PNAS", "Coyne", "2020", "Vuorre", "2021", "between-person", "specification curve"])],
             "Cross-lagged panel designs estimate whether earlier social-media use predicts later anxiety while controlling for earlier anxiety (and vice versa), partially separating direction of effect; within-person fixed-effects models compare each adolescent to themselves over time, removing all stable confounds (genetics, family environment). Orben, Dienlin, and Przybylski's 2019 PNAS paper used such methods on three large UK and US panels and found very small bidirectional effects; Vuorre, Orben, and Przybylski (2021) extended the analysis with specification-curve methods showing the effect varies by analytic choice."),
        part("(f)",
             "Identify ONE specific ethical issue raised by collecting two years of objective screen-time and survey data from minors, and the corresponding safeguard.",
             1,
             [(1, "Names a specific issue (parental consent + child assent for minors; data privacy under FERPA/COPPA; mandated reporting on suicidal ideation) and a corresponding safeguard (45 CFR 46 Subpart D, Belmont 1979, APA 8.02)",
                  ["parental consent", "assent", "minors", "FERPA", "COPPA", "45 CFR 46", "Subpart D", "Belmont", "1979", "APA", "8.02", "mandated reporting", "data privacy"])],
             "Federal regulations (45 CFR 46 Subpart D) require both parental permission and developmentally appropriate child assent for research with minors; FERPA constrains use of school-record data and COPPA constrains digital data collection from those under 13. The researcher must also pre-establish a mandated-reporting protocol if anxiety screening reveals imminent suicide risk (per APA Ethics Code 8.02 and clinical mandated-reporting laws), with referrals arranged in advance with school counselors. Screen-time data must be stored in de-identified form on encrypted servers, with re-identification keys held separately."),
        part("(g)",
             "Explain ONE statistical effect-size or precision metric the researcher should report and why it matters more than a p-value alone.",
             1,
             [(1, "Names a specific effect-size metric (Pearson r, R², standardized regression β, Cohen's d) or 95% CI and explains why APA Publication Manual / Cumming 2014 / ASA 2016 recommend reporting it",
                  ["effect size", "Pearson r", "R-squared", "beta", "Cohen's d", "95% confidence interval", "Cumming", "2014", "New Statistics", "APA Publication Manual", "ASA", "2016"])],
             "Beyond a p-value, the researcher should report standardized effect sizes (Pearson r or standardized β from her panel models) and their 95% confidence intervals. Geoff Cumming's *New Statistics* program (2014, Psychological Science) and the American Statistical Association's 2016 statement on p-values both argue effect sizes and intervals communicate practical magnitude and uncertainty in a way p-values alone do not — relevant here because the published literature (Orben & Przybylski 2019) reports very small r ≈ 0.05 effects that are statistically significant but explain less than 1% of variance."),
    ],
    7, "~25 minutes",
)


RD_3 = frq(
    "psych-rd-3", "research-design",
    "A Replication of Asch (1951) Conformity",
    "A social psychologist designs a modern partial replication of Solomon Asch's classic conformity studies (Asch, 1951, 1956). She recruits 90 undergraduates and seats each, individually, with seven confederates. Across 18 trials, the confederates unanimously give an obviously wrong answer to a perceptual judgment task on 12 of the trials (critical trials).",
    [
        part("(a)",
             "Identify the independent variable, dependent variable, and one specific feature of Asch's original 1951 design that this replication preserves.",
             1,
             [(1, "Identifies IV (presence of unanimous-incorrect majority on critical trials), DV (proportion of conformity responses), and a preserved feature (e.g., line-judgment task, confederate confederates, individual session)",
                  ["independent variable", "dependent variable", "Asch", "1951", "1956", "line judgment", "confederates", "majority influence", "conformity"])],
             "IV: presence (critical trials) vs. absence (non-critical trials) of a unanimous, obviously-wrong confederate majority. DV: the proportion of trials on which the participant gives a conforming wrong answer. The replication preserves Asch's (1951; *Studies of Independence and Conformity*, Psychological Monographs, 1956) core line-judgment perceptual task with seven confederates and one naïve participant tested individually — central to enabling comparison with Asch's classic ~37% mean conformity rate on critical trials."),
        part("(b)",
             "Explain how the researcher could use a within-subjects design here and identify ONE specific threat (and a remedy).",
             1,
             [(1, "Notes that critical vs. non-critical trials within each participant constitute a within-subjects manipulation; identifies an order/carryover threat and counterbalancing remedy",
                  ["within-subjects", "repeated measures", "order effects", "carryover", "counterbalancing", "Latin square", "fatigue", "demand characteristics"])],
             "The 12 critical and 6 non-critical trials are presented to every participant, making this a within-subjects design with each person their own control. A specific threat is order effects — late critical trials may show inflated conformity from compliance fatigue or demand characteristics. The remedy: fully counterbalance the order of critical and non-critical trials across participants (or use Latin-square sequencing) so any systematic order influence cancels in the aggregate."),
        part("(c)",
             "Explain ONE major construct-validity concern in Asch-style conformity research raised by post-1956 reviewers.",
             1,
             [(1, "Cites construct-validity / interpretation concerns: Friend, Rafferty & Bramel 1990 critique of Asch as 'public compliance not real conformity'; Bond & Smith 1996 cross-cultural meta-analysis showing variability; debate about whether finding measures conformity, group cohesion, or compliance",
                  ["construct validity", "Friend", "Rafferty", "Bramel", "1990", "Bond", "Smith", "1996", "meta-analysis", "compliance", "informational", "normative", "Deutsch", "Gerard", "1955"])],
             "Roger Friend, Yvonne Rafferty, and Dana Bramel's 1990 critique argued that Asch's results have been overstated as 'conformity' when most participants resisted the majority on most critical trials; the published mean (~37%) reflects a large group of independents and a small group of frequent conformers. Bond and Smith's 1996 meta-analysis of 133 Asch-paradigm studies in 17 countries showed substantial cross-cultural variability — undermining the construct's interpretation as a universal phenomenon. The original interpretation also conflates Deutsch and Gerard's (1955) *normative* and *informational* social influence, which the replication should attempt to disentangle."),
        part("(d)",
             "Identify TWO specific ethical concerns about Asch-style deception research and the APA Ethics Code (2017) standards that govern them.",
             1,
             [(1, "Names APA Standard 8.07 (deception in research) and 8.08 (debriefing); identifies psychological discomfort/embarrassment as the deception concern",
                  ["deception", "APA Ethics Code", "2017", "8.07", "8.08", "debriefing", "informed consent", "psychological harm", "embarrassment", "IRB"])],
             "(1) The study uses deception (participants are told the others are also participants when they are confederates), which APA Standard 8.07 (2017) permits only when (a) the study has prospective scientific value, (b) no equally effective non-deceptive alternative exists, and (c) deception will not cause physical pain or significant emotional distress. (2) Standard 8.08 requires *debriefing* — the participant must be informed of the deception, the experimenter must address any psychological discomfort (e.g., embarrassment about conforming), and the participant must be offered the option to withdraw their data."),
        part("(e)",
             "Explain how the researcher could expand the design with a manipulated factor (e.g., majority size, anonymity) to clarify the underlying mechanism, naming a specific prior study.",
             1,
             [(1, "Names manipulating majority size (Asch 1956) or anonymity/private response (Deutsch & Gerard 1955) and predicts the pattern that distinguishes informational vs. normative influence",
                  ["majority size", "Asch", "1956", "Deutsch", "Gerard", "1955", "informational", "normative", "anonymity", "private", "factorial design"])],
             "Add a factorial manipulation of *response privacy* (public oral vs. private written) crossed with *majority size* (3 vs. 7 confederates). Asch (1956) found conformity rises sharply from 1 to 3 confederates and plateaus thereafter; Deutsch and Gerard's 1955 anonymity manipulation showed conformity drops substantially when responses are private. If privacy reduces conformity, the underlying mechanism is normative (concern about social approval); if it does not, informational influence (using others as a guide to reality) dominates."),
        part("(f)",
             "Explain ONE limitation of generalizing the replication's findings about U.S. undergraduates to other populations, citing a specific cross-cultural study.",
             1,
             [(1, "Cites Bond & Smith 1996 meta-analysis showing higher conformity in collectivist cultures; mentions WEIRD critique (Henrich, Heine, Norenzayan 2010)",
                  ["Bond", "Smith", "1996", "Psychological Bulletin", "collectivist", "individualist", "Hofstede", "WEIRD", "Henrich", "2010", "cross-cultural"])],
             "Bond and Smith's 1996 *Psychological Bulletin* meta-analysis of 133 Asch-paradigm studies found significantly higher conformity in collectivist cultures (Asia, Africa) than in individualist cultures (US, UK), with effect sizes correlated with Hofstede's individualism scores. So findings from US undergraduates — whom Henrich, Heine, and Norenzayan's 2010 WEIRD critique singles out as unusually individualist — likely *under-estimate* conformity rates in many global populations and *over-estimate* them in others. A more globally generalizable conclusion requires multi-site replication (e.g., the Many Labs 3 project, 2016)."),
        part("(g)",
             "Explain how preregistration and open data (Open Science Framework) would strengthen this replication study.",
             1,
             [(1, "Defines preregistration; cites Open Science Collaboration 2015 reproducibility project; explains how preregistration constrains analytic flexibility",
                  ["preregistration", "Open Science Framework", "OSF", "Nosek", "Open Science Collaboration", "2015", "reproducibility", "Science", "p-hacking", "garden of forking paths", "Gelman"])],
             "Preregistration is the practice of submitting hypotheses, design, sample size, and analysis plan to a public repository (Open Science Framework) before data collection — making confirmatory tests genuinely confirmatory rather than post-hoc. The Open Science Collaboration's 2015 *Estimating the Reproducibility of Psychological Science* (Science) found that only 36–47% of 100 sampled studies reproduced significant results, with social-psychology effects faring particularly poorly. Preregistration plus open data would limit the 'garden of forking paths' (Gelman & Loken, 2014) and let independent reviewers verify that the reported analyses match the planned ones — directly strengthening confidence in the replication's outcome."),
    ],
    7, "~25 minutes",
)


RD_4 = frq(
    "psych-rd-4", "research-design",
    "Mindfulness Meditation & Stress Biomarkers: A Randomized Controlled Trial",
    "A clinical psychologist proposes a randomized controlled trial of an 8-week Mindfulness-Based Stress Reduction (MBSR) program (Kabat-Zinn, 1990) in adults with elevated workplace stress. She plans to compare MBSR to a structurally matched stress-education active control, using both self-report measures and salivary cortisol as outcomes.",
    [
        part("(a)",
             "Identify the independent variable, primary dependent variables, and explain why an *active* control is preferable to a wait-list control.",
             1,
             [(1, "Names IV (MBSR vs active control), DVs (PSS-10 (Cohen et al. 1983) and salivary cortisol AUC); explains active control isolates specific from non-specific effects",
                  ["independent variable", "dependent variable", "MBSR", "Kabat-Zinn", "1990", "active control", "wait-list", "Perceived Stress Scale", "PSS-10", "Cohen", "1983", "cortisol", "AUC", "non-specific", "expectancy"])],
             "IV: condition (8-week MBSR vs. structurally matched 8-week stress-education active control). DVs: self-reported stress on the PSS-10 (Cohen, Kamarck & Mermelstein, 1983) and a biological measure of HPA-axis activity (e.g., the cortisol awakening response or diurnal AUC from salivary samples on three days). An active control is preferable to a wait-list because it equates time, attention, group support, expectancy, and therapist contact between conditions — isolating the *specific* effect of mindfulness practice from generic non-specific factors. Wait-list controls notoriously inflate apparent effect sizes (Furukawa et al., 2014)."),
        part("(b)",
             "Explain how the researcher should determine an appropriate sample size before recruitment, naming a specific tool or method.",
             1,
             [(1, "Names a priori power analysis (G*Power, Faul et al. 2007); identifies α, power, and expected effect size as inputs",
                  ["power analysis", "a priori", "G*Power", "Faul", "2007", "Behavior Research Methods", "alpha", "power", "0.80", "effect size", "Cohen", "1988", "Khoury", "2013"])],
             "An a priori power analysis (e.g., using G*Power; Faul et al., Behavior Research Methods, 2007) determines the sample needed to detect a specified effect size with adequate power (conventionally 1−β = 0.80) at α = .05. Inputs would include the smallest meaningful effect (Khoury et al.'s 2013 meta-analysis of MBSR reports a Cohen's d ≈ 0.50 for stress) and the planned analytic model (e.g., 2×3 mixed ANOVA with one between-subjects and two within-subjects factors). The result might be ~64–80 participants per arm."),
        part("(c)",
             "Identify TWO specific ethical issues that an IRB would consider for this RCT, citing the relevant Common Rule (45 CFR 46) or APA Ethics Code (2017) standards.",
             1,
             [(1, "Names two specific issues with their regulatory grounding (informed consent + risk disclosure 45 CFR 46.116 or APA 3.10; equipoise / treatment denial; data privacy with biological samples)",
                  ["Common Rule", "45 CFR 46", "Belmont Report", "1979", "informed consent", "APA Ethics Code", "2017", "3.10", "equipoise", "Freedman", "1987", "biological samples", "biospecimens", "HIPAA"])],
             "(1) Informed consent (45 CFR 46.116; APA Standard 3.10, 2017) requires the researcher to disclose that randomization will determine assignment, that one group will not receive MBSR for the duration of the trial, and that biological samples (saliva) will be collected. (2) Clinical *equipoise* (Freedman, NEJM, 1987) requires honest uncertainty about which arm is more beneficial — given prior MBSR evidence is positive but heterogeneous (Goyal et al. JAMA Internal Medicine, 2014), the trial meets equipoise only if the active control is genuinely thought potentially comparable. HIPAA-compliant storage of biospecimens and a separate consent for biospecimen banking are also required if samples will be stored."),
        part("(d)",
             "Explain how a single-blind procedure could be implemented and why a double-blind is impractical here.",
             1,
             [(1, "Recognizes participants and instructors cannot be blinded to condition; explains blinding outcome assessors (and salivary cortisol assayers) as the practical safeguard",
                  ["single-blind", "double-blind", "outcome assessor", "blinded rater", "salivary cortisol assay", "expectancy", "Kazdin", "Hróbjartsson"])],
             "Participants and instructors cannot be blinded — one program is meditation, the other is education. A practical single-blind: outcome assessors (those administering and scoring the PSS-10 follow-ups) and laboratory technicians processing salivary cortisol assays are kept blind to participants' condition. Hróbjartsson and colleagues' systematic reviews of trial blinding show non-blinded outcome assessors inflate effect estimates by ~25%, so blinding outcome assessors is the most consequential safeguard available."),
        part("(e)",
             "Explain ONE statistical analysis appropriate for evaluating the change in cortisol over time and what it would test.",
             1,
             [(1, "Names a mixed-design ANOVA or linear mixed-effects model with condition × time interaction; explains the interaction tests differential change",
                  ["mixed ANOVA", "linear mixed-effects model", "lme4", "Bates", "2015", "interaction", "condition by time", "differential change", "intent-to-treat"])],
             "A mixed-design ANOVA (or linear mixed-effects model — e.g., lme4 in R; Bates et al., Journal of Statistical Software, 2015) with one between-subjects factor (MBSR vs. control) and one within-subjects factor (baseline, mid-trial, post-trial cortisol AUC) tests for a condition-by-time *interaction*. A significant interaction would mean cortisol declined differentially between conditions — the central test of the hypothesis. Reporting an effect size (η²p) and 95% CI alongside the F statistic, and using intent-to-treat analysis with multiple imputation for missing data, are best practice."),
        part("(f)",
             "Explain ONE limitation of using salivary cortisol as an objective stress marker.",
             1,
             [(1, "Names a specific limitation: high diurnal/intra-individual variability, sensitivity to caffeine/exercise/sleep, single-day sampling unreliable; cites Pruessner et al. 1997 / Stalder et al. 2016 expert consensus",
                  ["salivary cortisol", "diurnal variation", "Pruessner", "1997", "Stalder", "2016", "expert consensus", "guidelines", "CAR", "cortisol awakening response", "intra-individual variability"])],
             "Salivary cortisol shows large diurnal and intra-individual variability and is sensitive to exercise, caffeine, eating, sleep timing, and pregnancy. Stalder et al.'s 2016 *Psychoneuroendocrinology* expert consensus on the cortisol awakening response (building on Pruessner et al., 1997) requires multiple sampling days, strict adherence to wake-time-anchored sampling, electronic adherence monitoring, and exclusion of confound variables. A single salivary cortisol sample is too noisy to interpret — meaning a null cortisol result might reflect measurement error rather than absence of an effect."),
        part("(g)",
             "Explain ONE plausible alternative explanation for a positive MBSR finding even in a well-conducted RCT.",
             1,
             [(1, "Names alternative explanations: instructor allegiance/effects, demand characteristics, differential dropout, expectancy; cites Goyal et al. 2014 JAMA Internal Medicine meta-analysis or Coronado-Montoya et al. 2016 reporting bias study",
                  ["allegiance effects", "demand characteristics", "differential attrition", "Goyal", "2014", "JAMA Internal Medicine", "Coronado-Montoya", "2016", "PLOS ONE", "publication bias", "instructor effect"])],
             "Even with active control + blind assessment, the result could be driven by *instructor allegiance* — MBSR instructors typically practice MBSR personally and may convey enthusiasm that the active-control instructors do not. *Differential dropout* (e.g., dissatisfied control participants disproportionately leaving) could also bias results. Goyal et al.'s 2014 *JAMA Internal Medicine* meta-analysis found mindfulness interventions yielded only small to moderate stress benefits when restricted to active-comparator trials, and Coronado-Montoya et al.'s 2016 *PLOS ONE* analysis documented systematic positive-finding bias in mindfulness research — meaning even a well-conducted positive result must be interpreted alongside the broader allegiance and reporting context."),
    ],
    7, "~25 minutes",
)


HEADER = '''/**
 * AP Psychology — FRQ Practice Question Pool
 * AUTO-GENERATED by scripts/write-psych-frqs.py
 *
 * Format mirrors College Board AP Psychology FRQ exam:
 * concept-application prompts (~25 min, 7 pts) and research-design prompts
 * (~25 min, 7 pts), each with multiple parts. Sample answers and rubrics
 * are anchored in named psychologists, dated studies, and primary citations.
 */

export interface FRQRubricItem {
  points: number
  description: string
  keywords: string[]
}

export interface FRQPart {
  label: string
  prompt: string
  maxPoints: number
  rubric: FRQRubricItem[]
  sampleAnswer: string
}

export interface PsychFRQ {
  id: string
  type: 'concept-application' | 'research-design'
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation: string
  calculatorAllowed: boolean
}

'''

FOOTER = '''

export const apPsychFRQs: PsychFRQ[] = [...conceptApplicationFRQs, ...researchDesignFRQs]

export function getApPsychFRQs(): PsychFRQ[] {
  return apPsychFRQs
}

export function getConceptApplicationFRQs(): PsychFRQ[] {
  return conceptApplicationFRQs
}

export function getResearchDesignFRQs(): PsychFRQ[] {
  return researchDesignFRQs
}

export function generateFullExamFRQs(): {
  conceptApplication: PsychFRQ
  researchDesign: PsychFRQ
  totalPoints: number
  totalTime: string
} {
  const ca = conceptApplicationFRQs[Math.floor(Math.random() * conceptApplicationFRQs.length)]
  const rd = researchDesignFRQs[Math.floor(Math.random() * researchDesignFRQs.length)]
  return {
    conceptApplication: ca,
    researchDesign: rd,
    totalPoints: ca.totalPoints + rd.totalPoints,
    totalTime: '50 min',
  }
}
'''


def main():
    ca_block = "const conceptApplicationFRQs: PsychFRQ[] = [\n" + ",\n".join([CA_1, CA_2, CA_3, CA_4]) + "\n]\n"
    rd_block = "const researchDesignFRQs: PsychFRQ[] = [\n" + ",\n".join([RD_1, RD_2, RD_3, RD_4]) + "\n]\n"
    with open(OUT, "w", encoding="utf-8") as f:
        f.write(HEADER + ca_block + "\n" + rd_block + FOOTER)
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
