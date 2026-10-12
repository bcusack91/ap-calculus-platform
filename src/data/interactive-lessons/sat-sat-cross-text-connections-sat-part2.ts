export const satCrossTextConnectionsPart2Data = {
  topicSlug: 'sat-cross-text-connections',
  sections: [
    {
      id: 'ctc2-intro',
      type: 'text' as const,
      content: `# Mapping Each Author's Position

**Part 2 of 7 — Claim, Evidence, Scope, and the Hinge**

To answer a cross-text question you need a precise picture of each author's position. "Text 2 disagrees with Text 1" is never precise enough: you need to know **what exactly** Text 2 disagrees with.

### Four Questions for Each Text

| Ask | Example answer |
|---|---|
| **Topic:** what is it about? | Why the Maya cities were abandoned |
| **Claim:** what does the author (or the person described) say? | Drought caused it |
| **Evidence:** what is the claim based on? | Lake sediments recording dry years |
| **Scope:** how far does the claim reach? | "Many" cities? "All"? "In this region"? "For most people"? |

### Find the Hinge

The **hinge** is the specific part of Text 1 that Text 2 addresses. It is almost always one of these:

| Text 2 targets Text 1's... | What Text 2 typically says |
|---|---|
| **Data** | "The numbers are wrong / incomplete" (rare on the SAT) |
| **Interpretation** | "The data are fine, but they don't show what Text 1 thinks" |
| **Scope** | "That's true for X, but not for Y" |
| **Cause** | "Something else explains the pattern" |
| **Recommendation** | "That plan won't work / has a cost Text 1 ignores" |

Once you know the hinge, the right answer usually names it. Wrong answers often respond to a part of Text 1 that Text 2 never touches.

### Watch for Named People

Texts often report the views of named researchers ("Archaeologist Ruth Alvarez argues..."). A question may ask about the **person**, not the author. Keep straight whose claim is whose.`,
    },
    {
      id: 'ctc2-quiz',
      type: 'multiple-choice' as const,
      content: '**Practice: Find the Hinge** 🎯',
      exercise: {
        questions: [
          {
            question: `Text 1: Honeybee colonies in many regions have declined sharply. Entomologist Grace Obi argues that a class of pesticides called neonicotinoids is the main cause, citing studies in which exposed bees had trouble finding their way back to the hive.

Text 2: Pesticides harm bees, researcher Tomas Weller notes, but they are only one of several pressures. Parasitic mites, viral infections spread by those mites, and a shortage of wildflowers have all been linked to colony losses, and these factors often act together.

Based on the texts, how would Weller (Text 2) most likely respond to Obi's argument in Text 1?`,
            options: [
              `He would reject the claim that pesticides have any harmful effect on bees at all.`,
              `He would argue that parasitic mites are the single main cause of the decline in colonies.`,
              `He would agree that neonicotinoids explain nearly all of the colony losses in recent years.`,
              `He would grant that pesticides harm bees but doubt that they are the main cause of the decline.`,
            ],
            correctAnswer: 3,
            explanation: `The hinge is Obi's word "main": Weller accepts that pesticides harm bees but treats them as one of several pressures acting together. He says outright that pesticides harm bees, so total rejection is wrong. He does not name mites as the single cause, and agreeing that neonicotinoids explain nearly everything contradicts his view.`,
          },
          {
            question: `Text 1: Linguist Amara Ndiaye argues that children learn grammar mainly by hearing it used, not by being corrected. Parents, she notes, rarely correct their children's grammar outright, yet nearly all children master it by age five.

Text 2: In a recent study, toddlers whose parents often repeated their sentences back in correct form, without pointing out any mistake ("Yes, the dog ran away"), learned certain grammatical forms faster than toddlers whose parents rarely did so.

Based on the texts, how would Ndiaye (Text 1) most likely respond to the study in Text 2?`,
            options: [
              `She would say the study proves that children cannot learn grammar at all unless they are corrected.`,
              `She would say the repeated sentences let children hear correct grammar, consistent with her view.`,
              `She would reject the finding because the toddlers in the study were all younger than five years old.`,
              `She would say that parents should correct their children's grammar more often and more directly.`,
            ],
            correctAnswer: 1,
            explanation: `The parents in Text 2 did not stop to correct their children; they repeated the children's sentences in correct form, which gives the children more correct grammar to hear. Ndiaye could therefore treat the finding as support for learning by hearing. "Cannot learn grammar at all" is far too strong. The children's age is not a reason to reject the study, and urging more direct correction contradicts her view.`,
          },
          {
            question: `Text 1: A survey of 2,000 office workers found that those who worked from home reported higher job satisfaction than those who worked in an office. The survey's authors conclude that remote work makes employees happier.

Text 2: Workers who work from home may differ from those who don't. Many remote workers in such surveys had requested the arrangement, and people who seek out remote work may simply be the ones most likely to enjoy it.

Based on the texts, how would the author of Text 2 most likely respond to the conclusion in Text 1?`,
            options: [
              `By suggesting that the satisfaction gap may reflect who chose remote work, not the work itself`,
              `By arguing that the office workers in the study were actually more satisfied than the remote workers`,
              `By agreeing that remote work makes employees happier than working in an office does`,
              `By claiming that the survey included too few office workers to support any conclusion`,
            ],
            correctAnswer: 0,
            explanation: `Text 2 accepts the satisfaction gap but offers another explanation: the people who chose remote work may be those most likely to enjoy it. That targets Text 1's interpretation (cause), not its data. Text 2 never disputes which group was more satisfied, it does not agree with the causal conclusion, and sample size is never raised.`,
          },
        ],
      },
    },
    {
      id: 'ctc2-text2',
      type: 'text' as const,
      content: `## Worked Example: A Full Position Map

> **Text 1:** Dinosaur fossils with feathers have convinced most paleontologists that birds descended from dinosaurs. Paleontologist Ines Moreau goes further: because feathers appear in so many dinosaur groups, she argues, the common ancestor of all dinosaurs was probably feathered.
>
> **Text 2:** Feathers and featherlike filaments have been found in several dinosaur groups, but scales are preserved in others, including some close relatives of feathered species. Paleontologist Kofi Asante cautions that feathers may have evolved more than once, or been lost repeatedly, so their wide distribution does not settle what the first dinosaurs looked like.

| | Text 1 (Moreau) | Text 2 (Asante) |
|---|---|---|
| Topic | Feathers and the first dinosaurs | Same |
| Claim | The common ancestor was probably feathered | Feather distribution doesn't settle the question |
| Evidence | Feathers appear in many groups | Scales in other groups; feathers could have evolved or been lost more than once |
| Scope | All dinosaurs' common ancestor | Same question |

**Hinge:** Moreau's step from *"feathers are widespread"* to *"the ancestor had feathers."* Asante accepts the first part (feathers really are found in several groups) and challenges the step.

**Prediction for "How would Asante respond to Moreau?":** *He'd say widespread feathers don't prove the ancestor was feathered, since feathers might have evolved more than once.*

**Trap to expect:** a choice saying Asante denies that dinosaurs had feathers, or denies that birds descended from dinosaurs. He does neither. The hinge is narrow, so the right answer is narrow too.`,
    },
    {
      id: 'ctc2-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Practice: Precise Positions** 🎯',
      exercise: {
        questions: [
          {
            question: `Text 1: In the eighteenth century, the river town of Aldmoor suffered repeated floods. Historian Neil Barrow credits the town's stone embankment, completed in 1795, with ending them, noting that no major flood is recorded in Aldmoor in the forty years after it was built.

Text 2: Rainfall records kept by a local minister show that the decades after 1795 were unusually dry across the region. Towns upstream from Aldmoor that built no embankments also escaped serious flooding during those years.

Based on the texts, how would the author of Text 2 most likely respond to Barrow's claim in Text 1?`,
            options: [
              `By agreeing that the embankment ended the floods because it was built from stone`,
              `By arguing that the embankment caused flooding in the towns upstream from Aldmoor`,
              `By noting that drier weather, not the embankment, may explain the lack of floods`,
              `By claiming that no floods were recorded in Aldmoor during the eighteenth century`,
            ],
            correctAnswer: 2,
            explanation: `Text 2 offers a rival explanation for the forty flood-free years: the period was unusually dry, and towns without embankments also avoided floods. It does not credit the embankment, and it says the upstream towns escaped flooding rather than suffering it. Text 1 says Aldmoor had repeated floods in the eighteenth century, which Text 2 never disputes.`,
          },
          {
            question: `Text 1: Libraries were once places to borrow books and little else. Today many lend laptops, host coding classes, and help patrons apply for jobs, and librarian Rosa Kemp argues that these services are now as central to a library's mission as its shelves.

Text 2: As libraries add services, some patrons worry that books are being pushed aside. Library director Sam Ito disagrees: at his branch, visits rose by a third after the new programs began, and book loans rose along with them.

Based on the texts, both Kemp and Ito would most likely agree with which statement?`,
            options: [
              `Libraries should stop lending printed books so they can focus on technology.`,
              `New library services need not come at the expense of a library's books.`,
              `Most library patrons worry that books are being pushed aside by new services.`,
              `Coding classes are the most popular of the services that libraries now offer.`,
            ],
            correctAnswer: 1,
            explanation: `Kemp treats the new services as central alongside the shelves, and Ito's branch saw book loans rise with the new programs, so both would accept that the services need not displace books. Neither wants to stop lending books, Text 2 says only that "some" patrons worry, and no service is ranked as most popular.`,
          },
          {
            question: `Text 1: Many historians describe the printing press as the spark of the Scientific Revolution. By making identical copies of texts, they argue, it let scholars across Europe check and build on one another's work.

Text 2: Printing certainly spread ideas, but early printed books were full of errors, and copies of the same edition often differed. Historian Adrian Johns argues that trust in printed knowledge had to be built slowly, through networks of scholars who vouched for particular printers and editions.

Which choice best describes a difference in how the authors of Text 1 and Text 2 view early printed books?`,
            options: [
              `Text 1 says they spread ideas slowly, while Text 2 says they spread ideas faster than any earlier technology did.`,
              `Text 1 says they were full of errors, while Text 2 says scholars trusted them from the moment they appeared.`,
              `Text 1 says printing had little to do with science, while Text 2 says printing caused the Scientific Revolution.`,
              `Text 1 treats them as reliably identical copies, while Text 2 says their reliability had to be established over time.`,
            ],
            correctAnswer: 3,
            explanation: `Text 1 credits printing with producing "identical copies," while Text 2 says copies often differed and trust had to be "built slowly." The speed-of-spread choice misstates both texts. The errors-and-trust choice swaps the authors and contradicts Text 2's "built slowly." Text 1 links printing to science rather than dismissing the connection, and Text 2 never says printing caused the revolution.`,
          },
        ],
      },
    },
    {
      id: 'ctc2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Mapping Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'Text 2 usually responds to [one specific part of Text 1|every sentence of Text 1|the title of Text 1|nothing in Text 1]',
          'A Text 2 author who accepts Text 1\'s data but explains it differently is offering [an alternative explanation|full agreement|a summary|a definition]',
          'When mapping a text, separate the author\'s claim from [the evidence offered for it|the font|the length of the text|the number of sentences]',
          'The "hinge" between two texts is [the specific point both texts address|the longest sentence|the first word of Text 2|the last sentence of Text 1]',
        ],
        correctAnswers: ['one specific part of Text 1', 'an alternative explanation', 'the evidence offered for it', 'the specific point both texts address'],
        hint1: 'Text 2 aims at a target.',
        hint2: 'Same facts, different cause.',
        hint3: 'Claim and evidence are different things.',
        explanation: 'Text 2 targets one part of Text 1. Accepting the data but explaining it differently is an alternative explanation. Separate claims from evidence. The hinge is the specific point both texts address.',
      },
    },
    {
      id: 'ctc2-summary',
      type: 'text' as const,
      content: `## Part 2 Summary

| Step | Rule |
|---|---|
| Map each text | Topic, claim, evidence, scope |
| Find the hinge | Data, interpretation, scope, cause, or recommendation |
| Narrow hinge → narrow answer | The right choice names the exact point in dispute |
| Named people | Track whose claim is whose |

*Next: How Would Text 2 Respond to Text 1? →*`,
    },
  ],
}
