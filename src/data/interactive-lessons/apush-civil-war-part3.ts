export const apushCivilWarPart3Data = {
  topicSlug: 'apush-civil-war',
  sections: [
    {
      id: 'apushciv3-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 The Civil War

**Part 3 of 7 — Secession and War Aims in the Sources, 1860–1865**

---

| Section |
|---------|
| 📖 Why These Sources |
| Source 1: South Carolina Explains Secession (1860) |
| Source 2: The Cornerstone Speech (1861) |
| Source 3: Lincoln Answers Horace Greeley (1862) |
| Source 4: Frederick Douglass, Men of Color, To Arms! (1863) |
| Source 5: Lincoln's Second Inaugural (1865) |

> 🔑 **Key Concept:** What was the war about? Five sources written between 1860 and 1865 answer that question in their authors' own words. Read together, they show that **secessionists named slavery as their cause**, that **Union war aims changed** from restoring the Union to ending slavery, and that **Black Americans pushed that change**. Part 6 works with a different set of documents (Calhoun, House Divided, the First Inaugural, the Emancipation Proclamation and the Gettysburg Address).
      `
    },
    {
      id: 'apushciv3-why',
      type: 'text' as const,
      content: `
## 📖 Why These Sources

After the war many former Confederates argued that the South had fought for **states' rights** and constitutional principle, not slavery. The documents written **at the time** let you test that claim.

| Source | Date | Author's Position | Question It Answers |
|---|---|---|---|
| South Carolina Declaration of the Immediate Causes of Secession | Dec 24, 1860 | Secession convention | Why did the first state leave? |
| Cornerstone Speech | Mar 21, 1861 | Confederate vice president | What was the new nation built on? |
| Letter to Horace Greeley | Aug 22, 1862 | U.S. president | What was the Union fighting for in 1862? |
| Men of Color, To Arms! | Mar 1863 | Black abolitionist | Why should Black men fight? |
| Second Inaugural Address | Mar 4, 1865 | Reelected U.S. president | What had the war been about? |

## Source 1: South Carolina Explains Secession (December 24, 1860)

Four days after voting to secede, South Carolina's convention issued a declaration explaining its reasons. Its central complaint was that Northern states were **refusing to enforce** the Fugitive Slave Act.

> "But an increasing hostility on the part of the non-slaveholding States to the institution of slavery, has led to a disregard of their obligations, and the laws of the General Government have ceased to effect the objects of the Constitution."

It then turned to the 1860 election:

> "A geographical line has been drawn across the Union, and all the States north of that line have united in the election of a man to the high office of President of the United States, whose opinions and purposes are hostile to slavery."
>
> — Declaration of the Immediate Causes Which Induce and Justify the Secession of South Carolina, December 24, 1860

### Close Reading

| Feature | What It Shows |
|---|---|
| "hostility... to the institution of slavery" | The grievance is Northern **antislavery** sentiment, named directly |
| "disregard of their obligations" | South Carolina wanted the **federal** government to override Northern states' personal liberty laws, the opposite of a states' rights position |
| "A geographical line" | Lincoln's purely sectional victory (Part 2) is the trigger |
| The document lists Northern states by name | It accuses thirteen free states of nullifying the Fugitive Slave Act |

> 🔑 **AP Connection:** The irony is a strong **complexity** point. South Carolina complained that Northern **states** were using their own laws to resist a **federal** statute. On fugitive slaves, secessionists wanted more federal power, not less.
      `
    },
    {
      id: 'apushciv3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Source Practice: South Carolina, 1860** 🎯

> "But an increasing hostility on the part of the non-slaveholding States to the institution of slavery, has led to a disregard of their obligations, and the laws of the General Government have ceased to effect the objects of the Constitution."
>
> — Declaration of the Causes of Secession, South Carolina, December 24, 1860
      `,
      exercise: {
        questions: [
          {
            question: 'The "obligations" the excerpt accuses Northern states of disregarding most likely refers to',
            options: [
              'paying the federal tariff on manufactured imports',
              'returning people who had escaped from slavery',
              'admitting new slave states from the Mexican Cession',
              'sending militia to defend the South from Native raids'
            ],
            correctAnswer: 1,
            explanation: 'The declaration complains that thirteen Northern states had passed laws obstructing the Fugitive Slave Act. The tariff was not the grievance in this document, no slave states were being proposed from the Mexican Cession, and militia service is not mentioned.'
          },
          {
            question: 'The excerpt most directly challenges which later interpretation of secession?',
            options: [
              'Secession defended states\' rights against federal power',
              'Secession followed a Republican victory in the election of 1860',
              'Secession was led by states of the Lower South in late 1860',
              'Secession expressed fears about the future of slavery in the West'
            ],
            correctAnswer: 0,
            explanation: 'South Carolina demanded that federal law override Northern states, which undercuts the postwar claim that secession was about states\' rights in general. The excerpt supports, rather than challenges, the other three statements.'
          }
        ]
      }
    },
    {
      id: 'apushciv3-stephens',
      type: 'text' as const,
      content: `
## Source 2: The Cornerstone Speech (March 21, 1861)

**Alexander Stephens** of Georgia, vice president of the Confederacy, spoke in Savannah three weeks before Fort Sumter. He compared the new Confederate constitution with the ideas of the founders, who, he said, had believed slavery was wrong and would pass away.

> "Our new government is founded upon exactly the opposite idea; its foundations are laid, its corner-stone rests, upon the great truth that the negro is not equal to the white man; that slavery, subordination to the superior race, is his natural and normal condition."
>
> — Alexander H. Stephens, speech at Savannah, Georgia, March 21, 1861

### HIPP Walkthrough

| Element | Analysis |
|---|---|
| **Historical context** | Seven states had seceded and formed the Confederacy in February 1861; the Upper South had not yet decided |
| **Intended audience** | A Savannah crowd; through newspapers, white Southerners generally |
| **Purpose** | To celebrate the new constitution and explain how it improved on the old one |
| **Point of view** | Stephens had opposed immediate secession in 1860, so his embrace of the Confederacy's racial foundation shows how far the consensus reached |

**Sourcing caution:** The speech was spoken without a prepared text and printed from a reporter's notes. After the war Stephens claimed the reporter had not captured him exactly. Historians still treat it as reliable because it matches what other Confederate leaders wrote in 1860–1861. That is a good example of **corroboration**: a source becomes more convincing when other independent sources agree with it.
      `
    },
    {
      id: 'apushciv3-greeley',
      type: 'text' as const,
      content: `
## Source 3: Lincoln Answers Horace Greeley (August 22, 1862)

Horace Greeley's *New York Tribune* published an open letter, "The Prayer of Twenty Millions," demanding that Lincoln enforce the Confiscation Acts and move against slavery. Lincoln replied in a public letter:

> "My paramount object in this struggle is to save the Union, and is not either to save or to destroy slavery. If I could save the Union without freeing any slave I would do it, and if I could save it by freeing all the slaves I would do it; and if I could save it by freeing some and leaving others alone I would also do that."
>
> — Abraham Lincoln to Horace Greeley, August 22, 1862

He closed: "I intend no modification of my oft-expressed personal wish that all men every where could be free."

### Why Context Changes the Meaning

Read alone, the letter seems to show that Lincoln did not care about slavery. The context says otherwise:

- Lincoln had shown his cabinet a draft **emancipation proclamation on July 22, 1862**, a month earlier. Secretary of State Seward advised waiting for a military victory.
- The letter's third option, "freeing some and leaving others alone," describes exactly what the Emancipation Proclamation would do: free people in rebel areas and leave the border states alone.
- The **purpose** was to prepare Northern readers, many of them hostile to emancipation, to accept it as a **war measure** to save the Union.

> 🔑 **AP Connection:** This is the classic case of a source whose **purpose** changes its meaning. A response that quotes the first sentence as proof of Lincoln's indifference misses the point; a response that explains the timing earns the sourcing point.
      `
    },
    {
      id: 'apushciv3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match Each Sourcing Point to Its HIPP Element** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Lincoln had already drafted an emancipation proclamation when he wrote to Greeley. This most helps explain the letter\'s ___',
            options: ['intended audience', 'purpose', 'point of view', 'historical context']
          },
          {
            label: 'Stephens had opposed immediate secession before he became Confederate vice president. This bears most on the speech\'s ___',
            options: ['point of view', 'purpose', 'historical context', 'intended audience']
          },
          {
            label: 'The South Carolina declaration came four days after the state left the Union and before any other state had seceded. This is the document\'s ___',
            options: ['purpose', 'intended audience', 'historical context', 'point of view']
          }
        ],
        correctAnswers: ['purpose', 'point of view', 'historical context'],
        hint1: 'What was Lincoln trying to accomplish with Northern readers?',
        hint2: 'This is about who Stephens was and where he stood.',
        hint3: 'This places the document in a sequence of events.',
        explanation: 'Lincoln wrote to prepare the public for emancipation as a war measure, which is purpose. Stephens\'s earlier caution describes his position, which is point of view. The timing of the declaration is historical context.'
      }
    },
    {
      id: 'apushciv3-douglass',
      type: 'text' as const,
      content: `
## Source 4: Frederick Douglass, "Men of Color, To Arms!" (March 1863)

The Emancipation Proclamation (January 1, 1863) authorized Black enlistment. Massachusetts Governor John Andrew began raising the **54th Massachusetts Infantry**, and Douglass recruited for it; two of his sons joined. His appeal was printed as a broadside and in *Douglass' Monthly*:

> "A war undertaken and brazenly carried on for the perpetual enslavement of colored men, calls logically and loudly for colored men to help suppress it. Only a moderate share of sagacity was needed to see that the arm of the slave was the best defense against the arm of the slaveholder."
>
> — Frederick Douglass, "Men of Color, To Arms!", March 1863

Later in the appeal he quoted a line from Lord Byron that abolitionists often used: "Who would be free themselves must strike the blow."

### Close Reading

| Feature | What It Does |
|---|---|
| "for the perpetual enslavement of colored men" | Defines the Confederate cause as slavery, without hedging |
| "calls logically and loudly" | Argues that Black service is the logical answer to that cause |
| "the arm of the slave" | Treats enslaved and free Black men as a military resource the Union had foolishly ignored for two years |
| "Who would be free themselves must strike the blow" | Military service would earn **citizenship**: those who fought for the nation could not be denied its rights |

Douglass also knew the terms were unequal: Black soldiers served in segregated units under white officers and at first received **less pay** than white soldiers. He pressed Lincoln on this in person in August 1863.

## Source 5: Lincoln's Second Inaugural Address (March 4, 1865)

Five weeks before Lee's surrender, Lincoln looked back on the war's cause:

> "One-eighth of the whole population were colored slaves, not distributed generally over the Union, but localized in the southern part of it. These slaves constituted a peculiar and powerful interest. All knew that this interest was somehow the cause of the war."
>
> — Abraham Lincoln, Second Inaugural Address, March 4, 1865

The address ends with the passage most often quoted: "With malice toward none, with charity for all... let us strive on to finish the work we are in, to bind up the nation's wounds."

### Comparing Lincoln in 1862 and 1865

| Question | Greeley Letter (1862) | Second Inaugural (1865) |
|---|---|---|
| What is the war about? | Saving the Union; slavery policy is a means | Slavery was "somehow the cause of the war" |
| Tone toward the South | Practical and political | Shared guilt: "Both read the same Bible and pray to the same God" |
| What has changed? | Emancipation not yet announced | Emancipation in effect; the 13th Amendment had passed Congress in January 1865 |

> 🔑 **AP Connection:** The pair is ideal for a **change over time** argument about Union war aims, and it connects directly to Reconstruction: "malice toward none" suggests the lenient plan Lincoln favored, which Radical Republicans opposed.
      `
    },
    {
      id: 'apushciv3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice: Comparing Sources** 🎯

> "Our new government is founded upon exactly the opposite idea; its foundations are laid, its corner-stone rests, upon the great truth that the negro is not equal to the white man..."
>
> — Alexander H. Stephens, March 21, 1861

> "All knew that this interest was somehow the cause of the war."
>
> — Abraham Lincoln, March 4, 1865
      `,
      exercise: {
        questions: [
          {
            question: 'The two excerpts would be most useful as evidence for which historical argument?',
            options: [
              'Leaders on both sides saw slavery as central to the conflict',
              'The war began over federal tariffs on imported manufactures',
              'Disputes over western railroads made secession unavoidable',
              'Most white Southerners wanted slavery ended gradually'
            ],
            correctAnswer: 0,
            explanation: 'The Confederate vice president named racial slavery as his government\'s foundation, and Lincoln said slavery was the cause of the war. Neither excerpt mentions tariffs or railroads, and Stephens defends slavery rather than proposing to end it.'
          },
          {
            question: 'Douglass\'s "Men of Color, To Arms!" (1863) was most directly made possible by which development?',
            options: [
              'Passage of the 13th Amendment through both houses of Congress',
              'Lincoln\'s public letter to Horace Greeley on saving the Union',
              'The Emancipation Proclamation\'s authorization of Black enlistment',
              'The Confederate decision to recruit enslaved men as its soldiers'
            ],
            correctAnswer: 2,
            explanation: 'The final Emancipation Proclamation of January 1863 allowed Black men to enlist, and units such as the 54th Massachusetts began recruiting soon after. The 13th Amendment passed Congress in 1865, the Greeley letter authorized nothing, and the Confederacy approved Black enlistment only in March 1865.'
          },
          {
            question: 'Which of the following best explains why historians still rely on the Cornerstone Speech despite Stephens\'s later complaints about how it was reported?',
            options: [
              'Stephens wrote out the full text himself before he gave the speech',
              'Its claims match what other Confederate leaders wrote at the time',
              'The Confederate Congress formally adopted the speech as official policy',
              'It was the only Southern statement printed in Northern newspapers'
            ],
            correctAnswer: 1,
            explanation: 'The speech is corroborated by secession declarations and other Confederate statements from 1860–1861. It was reported from notes, not a prepared text, it was never adopted as official policy, and many Southern statements reached Northern papers.'
          }
        ]
      }
    }
  ]
}
