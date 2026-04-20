#!/usr/bin/env python3
"""Write AP World History content for remaining topics using efficient templates."""
import os

base = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 
                    'src', 'data', 'interactive-lessons')

def w(filename, content):
    with open(os.path.join(base, filename), 'w') as f:
        f.write(content)
    print(f"✓ {filename}")

def make_lesson(export_var, slug, part, total, title_emoji, title_text, subtitle,
                sections_content, id_pre):
    """Create a full 6-section lesson TypeScript file."""
    return f"""export const {export_var} = {{
  topicSlug: '{slug}',
  sections: [
{sections_content}
  ]
}}
"""

def mc_question(q, opts, correct, exp):
    opts_ts = '\n'.join([f"              '{o}'," for o in opts])
    return f"""          {{
            question: '{q}',
            options: [
{opts_ts}
            ],
            correctAnswer: {correct},
            explanation: '{exp}'
          }}"""

def dd_item(label, opts):
    opts_ts = ', '.join([f"'{o}'" for o in opts])
    return f"""          {{
            label: '{label}',
            options: [{opts_ts}]
          }}"""

# =====================================================================
# LAND-BASED EMPIRES (c. 1450-1750)
# =====================================================================
LAND = 'wh-land-based-empires'
LAND_TITLE = '# 🏰 Land-Based Empires (c. 1450–1750)'

w(f'{LAND}-part2.ts', f"""export const whLandBasedEmpiresPart2Data = {{
  topicSlug: '{LAND}',
  sections: [
    {{
      id: 'whlbe2-intro',
      type: 'text' as const,
      content: `
{LAND_TITLE}

**Part 2 of 7 — The Ottoman Empire**

---

| Section |
|---------|
| 📖 Ottoman Rise and Conquest of Constantinople |
| Ottoman Governance: Devshirme and Millet |
| Ottoman Economy and Culture |
| 📌 AP Comparison: Ottomans vs. Other Land-Based Empires |

> 🔑 **Key Concept:** The Ottoman Empire (c. 1299–1922) was the longest-lasting and most successful of the AP Unit 3 land-based empires. AP questions focus on how the Ottomans used gunpowder technology, religious tolerance (millet system), and administrative innovation (devshirme) to build and maintain power.
      \`
    }},
    {{
      id: 'whlbe2-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {{
        questions: [
          {{
            question: 'The Ottoman conquest of Constantinople (1453) was historically significant primarily because:',
            options: [
              'It ended the Byzantine Empire and gave the Ottomans control of the strategic Bosphorus strait, making Istanbul (Constantinople) the center of a vast empire controlling eastern Mediterranean trade routes',
              'It converted all Byzantine Christians to Islam within one year',
              'It was the Ottoman Empire\\'s first military victory of any kind',
              'It had no impact on European commercial patterns'
            ],
            correctAnswer: 0,
            explanation: 'Constantinople\\'s fall ended a 1,000-year empire and gave the Ottomans the most strategically located city in the world — bridging Europe and Asia, controlling the Black Sea entrance. The AP exam connects this to European sea-route exploration: Ottoman control of eastern trade routes motivated Portuguese and Spanish search for maritime alternatives.'
          }},
          {{
            question: 'The devshirme system (collecting Christian boys for Ottoman imperial service) was significant because it:',
            options: [
              'Created a loyal administrative and military class (janissaries and bureaucrats) whose careers depended entirely on the sultan, bypassing the traditional Muslim nobility and creating unprecedented imperial centralization',
              'Was a form of religious persecution with no administrative function',
              'Only produced military soldiers with no civilian administrative role',
              'Was identical to the Chinese civil service examination system'
            ],
            correctAnswer: 0,
            explanation: 'The devshirme\\'s genius was political: by recruiting from non-Muslim boys who had no family connections to Ottoman Muslim nobility, the sultan created officials whose loyalty was to him personally. They had no alternative power base, no family inheritance claims, no local noble allegiance — total imperial dependence was their defining characteristic.'
          }}
        ]
      }}
    }},
    {{
      id: 'whlbe2-content',
      type: 'text' as const,
      content: \`
## 📖 The Ottoman Empire

> **Rise and Gunpowder**

The Ottomans were a small Turkic principality in Anatolia c. 1299 that expanded using gunpowder technology:

| Date | Event | Significance |
|------|-------|-------------|
| **1299** | Ottoman state founded | Small Anatolian principality |
| **1389** | Battle of Kosovo | Defeated Serbian coalition; dominant in Balkans |
| **1453** | Conquest of Constantinople | Ended Byzantine Empire; gained Bosphorus control |
| **1517** | Conquered Egypt | Added Mamluk wealth; claimed Caliphate |
| **1529** | First Siege of Vienna | Maximum westward extent; repelled |
| **1571** | Battle of Lepanto | Naval defeat by Spain; Mediterranean limits established |

> **Governance: Devshirme and Millet**

Ottoman administrative innovations enabled governing a diverse empire:

- **Devshirme:** Christian boys collected as tax; educated as Muslims; served as janissaries (elite military) or bureaucrats; loyal to sultan personally
- **Janissaries:** Devshirme-trained infantry; used gunpowder weapons; more effective than traditional cavalry
- **Millet system:** Non-Muslim communities (Greek Orthodox, Armenian, Jewish) governed their internal affairs through their religious leaders; paid jizya; could not hold highest offices but maintained communal autonomy
- **Result:** Multi-religious, multi-ethnic empire functioned with relative stability for centuries

> **Culture and Economy**

- **Süleiman the Magnificent (r. 1520–1566):** Peak of Ottoman power; patron of Islamic architecture (Süleymaniye Mosque); legal reforms (*kanun* law); controlled most lucrative eastern trade routes
- **Istanbul (Constantinople):** Capital became cosmopolitan center; population 500,000+ by 1600 — largest city in Europe or the Middle East
- **Economic geography:** Controlled strategic straits (Bosphorus, Dardanelles), taxing trade between Mediterranean and Black Sea

> **AP Comparison Anchor**

- **Ottomans vs. Safavids:** Both Islamic empires; Ottoman Sunni, Safavid Shia — creating sustained religious conflict; both used gunpowder armies
- **Devshirme vs. Chinese exam system:** Both created loyal administrative classes; devshirme based on royal collection, exam system on meritocratic testing; both bypassed traditional aristocracy
      \`
    }},
    {{
      id: 'whlbe2-input',
      type: 'multiple-choice' as const,
      content: \`
**Applied Recall: 3-Question Sprint** 🎯
      \`,
      exercise: {{
        questions: [
          {{
            question: 'Janissaries (devshirme-trained infantry) gave the Ottomans a military advantage because they:',
            options: [
              'Were trained professionals using gunpowder weapons who were loyal to the sultan personally, unlike traditional cavalry nobility who had independent power bases and less discipline',
              'Were the first army in history to use any weapons at all',
              'Were entirely cavalry with no infantry component',
              'Were recruited from the Muslim nobility, ensuring religious loyalty'
            ],
            correctAnswer: 0,
            explanation: 'Janissaries combined professional training, gunpowder weaponry (early firearms and cannon), and personal loyalty to the sultan (their entire career and identity depended on imperial service). This made them more effective than the traditional Turkish cavalry (*sipahi*) whose loyalty was more conditional and whose tactics were less suited to siege warfare.'
          }},
          {{
            question: 'The Ottoman millet system\\'s most important function was:',
            options: [
              'Enabling the governance of a religiously diverse empire by giving non-Muslim communities (Greek Orthodox, Armenian, Jewish) autonomy over internal affairs, reducing the administrative burden of imposing uniform Islamic law on millions of Christians and Jews',
              'Forcibly converting all conquered peoples to Islam within one generation',
              'Eliminating all non-Muslim populations from Ottoman territory',
              'Creating a democratic system of representation for minority groups'
            ],
            correctAnswer: 0,
            explanation: 'The millet system was pragmatic imperial administration: the empire could not possibly govern millions of Christian and Jewish subjects using only Islamic legal institutions. By delegating internal governance to religious leaders (Greek Orthodox Patriarch, Armenian Patriarch, Chief Rabbi), the Ottomans maintained control through taxation and military service while reducing costly administrative complexity.'
          }},
          {{
            question: 'The Ottoman Empire\\'s control of Constantinople and eastern Mediterranean trade routes after 1453 most directly caused:',
            options: [
              'European maritime powers (Portugal, Spain) to intensify their search for alternative sea routes to Asia, eventually leading to Portuguese circumnavigation of Africa and Spanish exploration of the Americas',
              'An immediate end to all European trade with Asia',
              'The Ottoman Empire to become the world\\'s largest Christian kingdom',
              'Chinese traders to begin sailing directly to Europe'
            ],
            correctAnswer: 0,
            explanation: 'The AP causation chain: Ottoman control → higher tolls on eastern trade → European commercial disadvantage → motivation for sea routes → Portuguese Africa circumnavigation (1488, 1498) → Spanish Caribbean exploration (1492). This chain directly connects AP Unit 3 (land-based empires) to Unit 4 (exploration and Atlantic world).'
          }}
        ]
      }}
    }},
    {{
      id: 'whlbe2-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Idea: Evidence to Claim**

Match each Ottoman feature to its correct description.
      \`,
      exercise: {{
        dropdowns: [
          {{
            label: 'The Ottoman system of recruiting Christian boys for imperial service who became elite soldiers and administrators was the ___',
            options: ['Devshirme', 'Millet system', 'Janissary corps', 'Kanun law']
          }},
          {{
            label: 'The Ottoman policy allowing non-Muslim communities to govern their internal affairs through their own religious leaders was the ___',
            options: ['Millet system', 'Devshirme', 'Jizya', 'Waqf']
          }},
          {{
            label: 'The Ottoman sultan known as "the Magnificent" who represented the empire\\'s peak power and patronized the Süleymaniye Mosque was ___',
            options: ['Süleiman I', 'Mehmed II', 'Selim I', 'Bayezid II']
          }}
        ],
        correctAnswers: ['Devshirme', 'Millet system', 'Süleiman I'],
        hint1: 'Collection of Christian boys — military and administrative elite',
        hint2: 'Religious community autonomy — dhimmi system in Ottoman form',
        hint3: 'r. 1520-1566 — peak Ottoman power — law and architecture',
        explanation: 'The devshirme created a loyal administrative class with no alternative power base. The millet system enabled multi-religious governance by delegating internal affairs to religious communities. Süleiman\\'s reign represented the Ottoman peak — military expansion, legal consolidation, and architectural achievement simultaneously.'
      }}
    }},
    {{
      id: 'whlbe2-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {{
        questions: [
          {{
            question: 'An AP question asks how the Ottoman Empire used both coercive power and accommodation to maintain control. Which answer demonstrates the strongest reasoning?',
            options: [
              'The Ottomans used coercive military power (janissary army, gunpowder weapons) to conquer territories, then employed administrative accommodation (millet system for religious minorities, devshirme creating loyal bureaucracy) to govern diverse populations at lower ongoing cost than pure military domination would require',
              'The Ottomans only used military force with no administrative accommodation',
              'The Ottomans only used accommodation with no coercive force',
              'The Ottomans had no system for governing non-Muslim populations'
            ],
            correctAnswer: 0,
            explanation: 'This argument demonstrates AP sophistication by showing HOW conquest and governance work differently: conquest requires overwhelming force, but ongoing governance requires accommodation to be sustainable. The Ottoman combination — gunpowder conquest + millet accommodation — is a model of imperial governance analysis that AP rewards.'
          }},
          {{
            question: 'Comparing the Ottoman devshirme to the Chinese civil service exam system, which statement is most historically accurate?',
            options: [
              'Both created loyal administrative classes that reduced the power of traditional hereditary aristocracy, but through fundamentally different mechanisms: the devshirme through royal collection of non-Muslim outsiders, the exam system through competitive testing of educated insiders',
              'Both systems were identical in every functional respect',
              'The devshirme was only a military system with no administrative function',
              'The exam system recruited from non-Chinese populations, like the devshirme'
            ],
            correctAnswer: 0,
            explanation: 'This comparison earns AP points by identifying the shared function (reducing aristocratic power, creating loyal bureaucrats) while specifying the different mechanisms (outside collection vs. inside testing). Both outcomes were similar; the processes differed fundamentally — demonstrating that similar problems (how to govern a large empire) can be solved through very different institutional innovations.'
          }}
        ]
      }}
    }}
  ]
}}
""")

w(f'{LAND}-part3.ts', f"""export const whLandBasedEmpiresPart3Data = {{
  topicSlug: '{LAND}',
  sections: [
    {{
      id: 'whlbe3-intro',
      type: 'text' as const,
      content: `
{LAND_TITLE}

**Part 3 of 7 — The Safavid and Mughal Empires**

---

| Section |
|---------|
| 📖 The Safavid Empire: Shia Islam and Persian Culture |
| The Mughal Empire: Islam in India |
| Akbar\\'s Religious Tolerance Policy |
| 📌 Comparing Three Islamic Empires |

> 🔑 **Key Concept:** The Safavid (Persia) and Mughal (India) empires are two of AP\\'s "gunpowder empires" alongside the Ottomans. Key AP questions compare how these Islamic empires governed diverse populations, used religion for political legitimacy, and adapted to local cultural contexts.
      \`
    }},
    {{
      id: 'whlbe3-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {{
        questions: [
          {{
            question: 'The Safavid Empire\\'s conversion of Persia to Shia Islam (c. 1501) had which most significant long-term consequence?',
            options: [
              'It created a permanent religious divide between Sunni Ottoman and Shia Safavid empires, generating sustained military conflict and establishing Iran as a distinctively Shia Muslim country that persists to the present',
              'It unified all Muslims under a single religious authority',
              'It led the Ottoman Empire to also convert to Shia Islam',
              'It had no political or military consequences'
            ],
            correctAnswer: 0,
            explanation: 'The Ottoman-Safavid conflict was one of the defining features of the 16th-17th century Islamic world. The Safavid forced conversion of Sunni Persians to Shia Islam — often violently — created a religious fault line that made Ottoman-Safavid warfare existential rather than merely territorial. This Sunni-Shia division persists in the modern Middle East.'
          }},
          {{
            question: 'Akbar\\'s (r. 1556–1605) religious tolerance policy (Din-i-Ilahi) was primarily motivated by:',
            options: [
              'The pragmatic need to govern a vast Hindu-majority empire as a Muslim minority ruler — religious tolerance reduced resistance, maintained Hindu administrative cooperation, and created ideological legitimacy across religious lines',
              'A personal conversion from Islam to Hinduism',
              'European missionary pressure to adopt universal tolerance',
              'A Quranic requirement that all Muslim rulers must adopt inter-religious dialogue'
            ],
            correctAnswer: 0,
            explanation: 'Akbar\\'s tolerant policies were pragmatic genius: the Mughal Empire was maybe 20-25% Muslim governing 75-80% Hindus (plus Sikhs, Buddhists, Jains). Forced conversion was impossible; religious persecution would generate constant rebellion. By marrying Hindu Rajput princesses, eliminating the jizya tax on non-Muslims, and creating Din-i-Ilahi (a syncretic personal religious practice), Akbar made himself acceptable to all communities.'
          }}
        ]
      }}
    }},
    {{
      id: 'whlbe3-content',
      type: 'text' as const,
      content: \`
## 📖 Safavid and Mughal Empires

> **The Safavid Empire (1501–1736)**

The Safavids transformed Persia into the Shia Islamic heartland:

| Feature | Details |
|---------|---------|
| **Founded** | Shah Ismail I, 1501; forced conversion of Sunni Persia to Shia Islam |
| **Capital** | Isfahan — "Half the world" (Persian saying about its beauty) |
| **Culture** | Persian literary and artistic flowering; carpets, miniature painting, architecture |
| **Conflict** | Constant warfare with Sunni Ottomans over Mesopotamia and religious supremacy |
| **Economy** | Silk trade with Europe; controlled Iranian plateau routes |
| **Peak** | Shah Abbas I (r. 1588–1629) — reformed military; built Isfahan as showcase capital |

> **The Mughal Empire (1526–1857)**

Founded by Babur (descended from both Timur and Genghis Khan) in 1526:

- **Governance challenge:** Muslim minority ruling Hindu majority India
- **Akbar\\'s solution (r. 1556–1605):** Religious tolerance; married Hindu Rajput women; abolished jizya; Din-i-Ilahi; Hindu officials at all levels
- **Mughal peak:** Jahangir and Shah Jahan — Taj Mahal built 1632–1653; extraordinary architectural patronage; Persian-Islamic art synthesized with Hindu traditions
- **Aurangzeb\\'s reversal (r. 1658–1707):** Reimposed jizya; destroyed Hindu temples; orthodox Islamic policies → Hindu and Sikh rebellions → imperial weakening

> **Comparing the Three Islamic Empires**

| Feature | Ottoman | Safavid | Mughal |
|---------|---------|---------|--------|
| **Religion** | Sunni | Shia | Sunni (but diverse subjects) |
| **Majority** | Muslim majority | Muslim majority | Hindu majority |
| **Key tool** | Devshirme, millet | Forced Shia conversion | Religious tolerance |
| **Architecture** | Süleymaniye Mosque | Isfahan mosques | Taj Mahal |
| **Decline** | Military stagnation | Afghan invasion (1722) | Aurangzeb\\'s policies + European pressure |

> **AP Comparison Anchor**

- **Akbar vs. Aurangzeb:** Classic AP comparison of tolerance vs. orthodoxy — Akbar\\'s tolerance built cohesion; Aurangzeb\\'s orthodoxy triggered rebellions
- **All three empires:** Shared gunpowder technology + centralized administration + Islamic legitimation + eventual decline due to inability to adapt to European commercial and military competition
      \`
    }},
    {{
      id: 'whlbe3-input',
      type: 'multiple-choice' as const,
      content: \`
**Applied Recall: 3-Question Sprint** 🎯
      \`,
      exercise: {{
        questions: [
          {{
            question: 'Shah Abbas I\\'s military reforms in the Safavid Empire were significant because they:',
            options: [
              'Replaced the traditional tribal cavalry (which owed loyalty to tribal leaders) with a slave-soldier army loyal to the shah personally — mirroring the Ottoman devshirme solution to the problem of unreliable noble military loyalty',
              'Eliminated all military forces and relied on diplomacy alone',
              'Were identical to the Chinese examination-based recruitment system',
              'Created the world\\'s first democratic military with elected officers'
            ],
            correctAnswer: 0,
            explanation: 'Abbas\\'s military reform solved the same problem as the Ottoman devshirme: how to create a military loyal to the ruler rather than to tribal or noble patrons. His solution — a slave-soldier army (ghulam) similar to the Mamluks and Janissaries — demonstrates a recurring pattern of Islamic rulers using enslaved soldiers to bypass unreliable traditional military aristocracies.'
          }},
          {{
            question: 'Aurangzeb\\'s reimposition of the jizya tax on non-Muslims weakened the Mughal Empire primarily by:',
            options: [
              'Alienating Hindu Rajput allies whose military cooperation had been essential to Mughal power, triggering Maratha Hindu resistance movements that fragmented imperial control of the Indian subcontinent',
              'Making the Mughal Empire more prosperous through increased tax revenue',
              'Converting all Hindus to Islam within a generation',
              'Strengthening the empire by eliminating internal religious diversity'
            ],
            correctAnswer: 0,
            explanation: 'Akbar had made the Mughal Empire work by incorporating Hindu Rajput princes as military allies and administrators. Aurangzeb\\'s orthodox Islamic policies (jizya, temple destruction) broke this alliance. The Maratha Hindu confederation under Shivaji successfully resisted Mughal authority, creating the regional power competition that weakened central authority and made the Mughal Empire vulnerable to British penetration.'
          }},
          {{
            question: 'The Taj Mahal (built by Shah Jahan, c. 1632–1653) represents which historical concept?',
            options: [
              'The synthesis of Persian-Islamic and South Asian architectural traditions, demonstrating how the Mughal Empire blended Islamic artistic forms with Indian materials and craftsmanship to create a distinctively Indo-Islamic cultural heritage',
              'Pure Islamic architecture with no South Asian elements',
              'A purely Hindu temple that was later claimed by Muslim rulers',
              'European Baroque architectural influence in Mughal India'
            ],
            correctAnswer: 0,
            explanation: 'The Taj Mahal is a model AP example of cultural synthesis: Persian-inspired minarets and dome, Quranic calligraphy, symmetrical gardens (all Islamic elements) combined with white Rajasthani marble, intricate jali (lattice) screens, and local craftsmen\\'s geometric patterns (South Asian elements). It embodies the Indo-Islamic synthesis that was the Mughal Empire\\'s cultural achievement.'
          }}
        ]
      }}
    }},
    {{
      id: 'whlbe3-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Idea: Evidence to Claim**

Match each Safavid/Mughal concept to its description.
      \`,
      exercise: {{
        dropdowns: [
          {{
            label: 'The Safavid ruler who rebuilt Isfahan into a showcase capital and reformed the military with slave-soldiers was ___',
            options: ['Shah Abbas I', 'Shah Ismail I', 'Akbar', 'Aurangzeb']
          }},
          {{
            label: 'The Mughal emperor who abolished the jizya tax, married Hindu wives, and adopted religious tolerance to govern India was ___',
            options: ['Akbar', 'Aurangzeb', 'Babur', 'Shah Jahan']
          }},
          {{
            label: 'The Mughal emperor whose strict Islamic orthodoxy and reimposition of jizya triggered Hindu resistance that began the empire\\'s decline was ___',
            options: ['Aurangzeb', 'Akbar', 'Jahangir', 'Babur']
          }}
        ],
        correctAnswers: ['Shah Abbas I', 'Akbar', 'Aurangzeb'],
        hint1: 'Safavid peak ruler — Isfahan "half the world" — slave-soldier reforms',
        hint2: 'Mughal tolerance — r. 1556-1605 — Din-i-Ilahi',
        hint3: 'Mughal orthodoxy — r. 1658-1707 — reimposed jizya → rebellions',
        explanation: 'Shah Abbas I made the Safavid Empire regionally dominant through military reform and commercial development. Akbar\\'s tolerance made the Mughal Empire function by bridging Muslim and Hindu communities. Aurangzeb\\'s reversal of Akbar\\'s approach is the AP example of how ideological rigidity can undermine the institutional accommodations that hold diverse empires together.'
      }}
    }},
    {{
      id: 'whlbe3-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {{
        questions: [
          {{
            question: 'An AP LEQ compares Akbar and Aurangzeb\\'s governance. What is the strongest argument?',
            options: [
              'Akbar\\'s religious tolerance built Mughal strength by incorporating Hindu military allies and reducing sectarian conflict, while Aurangzeb\\'s Islamic orthodoxy undermined this foundation — demonstrating that diverse empires require accommodation policies to remain politically coherent',
              'Both rulers had identical governance approaches',
              'Aurangzeb\\'s policies strengthened the empire by creating religious unity',
              'Akbar\\'s tolerance was forced upon him rather than a deliberate policy'
            ],
            correctAnswer: 0,
            explanation: 'This argument demonstrates AP complexity by using the contrast between the two rulers to derive a general principle about imperial governance: diversity requires accommodation. The AP exam rewards arguments that use specific comparison to generate broader insights, not just describe two different rulers\\'  policies.'
          }},
          {{
            question: 'What most distinguished the Safavid Empire from the Ottoman and Mughal empires?',
            options: [
              'The Safavid Empire\\'s Shia Islamic identity created a unique religious-political legitimacy claim that distinguished it from Sunni neighbors, made Ottoman-Safavid conflict ideologically existential rather than merely territorial, and established Iran as a distinctively Shia country with lasting consequences',
              'The Safavid Empire was the only one to use gunpowder weapons',
              'The Safavid Empire had a democratic government unlike the other two',
              'The Safavid Empire was the largest of the three in territory'
            ],
            correctAnswer: 0,
            explanation: 'Shia identity was the Safavid Empire\\'s defining feature — it distinguished Safavid from Ottoman legitimacy, made their rivalry religiously charged (not just political), and created the long-term reality of Iran as a Shia Muslim country. AP questions about the three Islamic empires frequently ask about this religious dimension as the key differentiating factor.'
          }}
        ]
      }}
    }}
  ]
}}
""")

for part_num, (subtitle, id_pre, content) in enumerate([
    ("The Qing Dynasty and Manchu Rule", "whlbe4", f"""
## 📖 The Qing Dynasty (1644–1912)

> **Manchu Conquest of China**

The Manchu (from northeastern China) conquered the Ming Dynasty in 1644, founding the Qing:

- **How they conquered:** Ming dynasty weakened by famine, peasant rebellions, and bureaucratic corruption; Manchu military opportunism
- **Ethnic minority rule:** Manchu were about 2% of China's population governing 98% Han Chinese
- **Adaptation strategy:** Adopted Chinese governance wholesale — Confucian examination system, Chinese bureaucracy, Chinese cultural forms

> **Governance: Coercion and Accommodation**

| Coercive Measures | Accommodating Measures |
|------------------|----------------------|
| Required Han men to shave front of head and wear Manchu queue (braid) | Restored Confucian civil service exams |
| Manchus held dual appointments with Han in every major position | Accepted Chinese culture, language, literature |
| Banned intermarriage between Manchu and Han initially | Adopted Chinese imperial rituals and Confucian ideology |

> **Expansion**

The Qing dramatically expanded Chinese territory:

- Conquered Mongolia, Xinjiang (Central Asia), Tibet, Taiwan
- Created the largest Chinese empire in history — still roughly the borders of modern China
- Used Inner Asian alliances (Mongolian Buddhist networks) as legitimation strategy in non-Chinese regions

> **AP Comparison Anchor**

- **Manchu vs. Mongol conquest of China:** Both non-Chinese rulers; Manchu more thoroughly adapted to Chinese governance; Mongols maintained more ethnic separation in Yuan Dynasty
- **Qing governance model:** Classic example of conquerors adopting conquered culture while maintaining political dominance — the AP "reverse acculturation" pattern
"""),
    ("State Building: Methods and Comparisons", "whlbe5", f"""
## 📖 Land-Based Empire State Building: Comparisons

> **Common Features Across Land-Based Empires**

AP Unit 3 land-based empires share key governance features:

| Feature | How Used | Examples |
|---------|---------|---------|
| **Gunpowder weapons** | Conquest; centralizing power against nobles | All three Islamic empires; Qing |
| **Bureaucratic centralization** | Reduce noble/regional power | Devshirme (Ottoman), exam system (Qing), mansabdar (Mughal) |
| **Religious legitimation** | Justify rule; create loyalty | Ottoman Caliphate claim; Safavid Shia; Akbar's tolerance; Qing Buddhist patronage |
| **Diplomatic marriage** | Alliance building | Akbar and Rajput princesses; Qing and Mongolian nobles |

> **The Mansabdar System (Mughal)**

Akbar created the mansabdar system to govern the Mughal empire:

- Officials assigned numerical ranks (mansab) determining salary, troops owed, and status
- Positions were NOT hereditary — died with the official
- Combined military and civil functions
- Created loyal officials dependent on imperial favor (like devshirme without the slavery element)

> **AP Comparison Anchor**

- **All land-based empires:** Used some combination of gunpowder military + centralized administration + religious/cultural legitimation
- **Key variable:** How did each empire handle the diversity problem? (Ottomans → millet; Mughals → tolerance vs. orthodoxy; Qing → dual appointments)
- **Decline pattern:** All eventually declined as European commercial and military competition intensified
"""),
    ("Decline of Land-Based Empires", "whlbe6", f"""
## 📖 Decline of the Land-Based Empires

> **Common Patterns of Decline**

Despite their initial strength, all major land-based empires experienced decline by c. 1700–1800:

| Empire | Primary Decline Factors |
|--------|------------------------|
| **Ottoman** | Military stagnation (janissaries resisted reform); trade bypassed empire (sea routes); European military superiority after 1700 |
| **Safavid** | Afghan invasion 1722; Shia-Sunni conflict; succession crises |
| **Mughal** | Aurangzeb's policies → Hindu/Sikh rebellions; British East India Company penetration |
| **Qing** | Opium Wars (1839, 1856); European military pressure; internal rebellions (Taiping, 1850-1864) |

> **The Military Technology Problem**

Land-based empires faced a systematic military disadvantage:

- European states continuously innovated gunpowder military technology through constant warfare
- Land-based empires had centralized military institutions (janissaries, mansabdars) that resisted reform
- European-trained officers and European-manufactured artillery eventually outclassed all three Islamic empires' armies
- By 1800, the "military revolution" gap between European and non-European military capacity was decisive

> **AP Comparison Anchor**

- **Why they declined:** Institutional rigidity + European military and commercial competition + internal religious/ethnic conflicts
- **CCOT:** The same gunpowder technology that built these empires eventually became their vulnerability when they couldn't maintain parity with European military innovation
""")
], start=4):
    w(f'{LAND}-part{part_num}.ts', f"""export const whLandBasedEmpiresPart{part_num}Data = {{
  topicSlug: '{LAND}',
  sections: [
    {{
      id: '{id_pre}-intro',
      type: 'text' as const,
      content: `
{LAND_TITLE}

**Part {part_num} of 7 — {subtitle}**

---

> 🔑 **Key Concept:** See content section for main AP concepts for this part.
      \`
    }},
    {{
      id: '{id_pre}-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {{
        questions: [
          {{
            question: 'Which best describes the Manchu (Qing) approach to governing Han Chinese majority?',
            options: [
              'A dual strategy of cultural accommodation (restoring Confucian exams, adopting Chinese governance) combined with ethnic coercion (mandatory queues, dual appointments ensuring Manchu oversight) that maintained Manchu political dominance while reducing cultural resistance',
              'Complete elimination of all Chinese cultural practices',
              'Immediate full assimilation of Manchu into Han Chinese identity',
              'Governing China through the same nomadic tribal structures used on the steppe'
            ],
            correctAnswer: 0,
            explanation: 'The Qing governance model is a model AP example of conquerors adapting to the conquered: they adopted Chinese bureaucracy, language, and culture in public while maintaining ethnic privilege (dual appointments, marriage restrictions) in political structures. This combination of adaptation and dominance enabled a 2% ethnic minority to govern a massive empire for 268 years.'
          }},
          {{
            question: 'The "military revolution" in European states c. 1500-1700 gave European armies an advantage over Asian land-based empires because:',
            options: [
              'Constant inter-state warfare within Europe created continuous pressure for military innovation (improved firearms, artillery, tactics, fortifications) that land-based empires with centralized military institutions resisted changing',
              'European armies were always numerically superior',
              'Land-based empires had no gunpowder weapons',
              'Asian rulers were philosophically opposed to military development'
            ],
            correctAnswer: 0,
            explanation: 'This explanation is central to AP Unit 3-4 analysis: Europe\\'s fragmentation into competing states created evolutionary pressure for military innovation, while the Ottoman janissaries and Mughal mansabdars were institutional vested interests resistant to reform. The result was an accelerating gap in military effectiveness by the 18th century.'
          }}
        ]
      }}
    }},
    {{
      id: '{id_pre}-content',
      type: 'text' as const,
      content: \`
{content}
      \`
    }},
    {{
      id: '{id_pre}-input',
      type: 'multiple-choice' as const,
      content: \`
**Applied Recall: 3-Question Sprint** 🎯
      \`,
      exercise: {{
        questions: [
          {{
            question: 'The Qing Dynasty\\'s requirement that Han Chinese men wear the Manchu queue (shaved head, braid) was primarily:',
            options: [
              'A political submission symbol — forcing visible public compliance with Manchu authority, making any resistance immediately identifiable',
              'A hygienic regulation with no political significance',
              'A religious practice adopted from Buddhism',
              'A temporary measure abandoned within the first generation of Qing rule'
            ],
            correctAnswer: 0,
            explanation: 'The queue requirement was political theater: "shave or die" made visible submission to Manchu authority a daily act. It was deeply humiliating to Han Chinese (Confucian tradition held the body sacred). The thousands who died rather than comply, and the long-term Han resentment of the queue requirement, demonstrate how even symbolic acts of political submission carry enormous emotional weight.'
          }},
          {{
            question: 'The Mughal mansabdar system differed most importantly from European feudalism in that:',
            options: [
              'Mansabdar positions were not hereditary — they died with the official, preventing the development of an entrenched hereditary noble class and keeping officials dependent on continued imperial favor',
              'Mansabdars had no military responsibilities',
              'The system was based on religious qualification rather than imperial appointment',
              'Only non-Muslims could serve as mansabdars'
            ],
            correctAnswer: 0,
            explanation: 'The non-hereditary nature of mansabdar positions is the key AP distinction from European feudalism: European noble titles and land were inherited, creating permanent power centers independent of the king. Mansabdars had to earn their positions in each generation, keeping them dependent on the emperor. This was analogous to (though independent of) the Chinese civil service system\\'s meritocratic principle.'
          }},
          {{
            question: 'Ottoman decline after 1700 was most directly caused by:',
            options: [
              'The janissary corps\\' political power blocking military modernization, while European states developed superior military technology through constant inter-state warfare',
              'The complete collapse of Ottoman trade networks',
              'Mass conversion of Ottomans from Islam to Christianity',
              'The Ottoman Empire voluntarily surrendering its territories to European powers'
            ],
            correctAnswer: 0,
            explanation: 'The janissary paradox: created to be a loyal, professional force, by the 17th-18th century they had become a political institution resisting any reform that threatened their privileges. Ottoman sultans who tried to modernize the military faced janissary revolts. This institutional resistance to change, combined with European military superiority, created the "sick man of Europe" dynamic of the 19th century.'
          }}
        ]
      }}
    }},
    {{
      id: '{id_pre}-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Idea: Evidence to Claim**

Match each empire\\'s governance feature to its correct description.
      \`,
      exercise: {{
        dropdowns: [
          {{
            label: 'The Mughal system of non-hereditary official ranks determining salary and military service was the ___',
            options: ['Mansabdar system', 'Devshirme system', 'Millet system', 'Zamindar system']
          }},
          {{
            label: 'The Qing (Manchu) practice of placing both a Manchu and a Han official in each major administrative position was ___',
            options: ['Dual appointments', 'Civil service exams', 'Banner system only', 'Millet system']
          }},
          {{
            label: 'The Ottoman military corps that eventually blocked imperial military reform through political resistance was the ___',
            options: ['Janissary corps', 'Sipahi cavalry', 'Mansabdar system', 'Ghulam infantry']
          }}
        ],
        correctAnswers: ['Mansabdar system', 'Dual appointments', 'Janissary corps'],
        hint1: 'Mughal non-hereditary official ranks — Akbar\\'s innovation',
        hint2: 'Qing oversight system — Manchu + Han together in each post',
        hint3: 'Ottoman elite infantry — became political obstacle to reform',
        explanation: 'The mansabdar system kept Mughal officials dependent on imperial favor by making positions non-hereditary. Qing dual appointments maintained Manchu oversight without excluding essential Han administrative expertise. The janissary corps\\' evolution from loyal imperial force to conservative political institution blocking modernization illustrates how institutions created to serve rulers can become obstacles to change.'
      }}
    }},
    {{
      id: '{id_pre}-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {{
        questions: [
          {{
            question: 'An AP LEQ asks: "Evaluate the extent to which land-based empires used similar methods to consolidate power c. 1450-1750." Which thesis is strongest?',
            options: [
              'While the Ottoman, Mughal, Safavid, and Qing empires used different specific instruments, all shared three convergent strategies: gunpowder military force to conquer, centralized administrative systems that bypassed traditional aristocracy, and religious or ideological legitimation tailored to their specific populations — suggesting that empire-building at this scale had common structural requirements regardless of cultural context',
              'All land-based empires used completely different, incomparable methods',
              'Only European empires used systematic methods; Asian empires relied entirely on military force',
              'Religious legitimation was not used by any major land-based empire'
            ],
            correctAnswer: 0,
            explanation: 'This thesis demonstrates AP sophistication: acknowledging variation (different specific instruments) while arguing for convergence (three shared strategies), naming all four empires, and articulating a structural principle (empire-building at scale has common requirements). This sets up a cross-empire comparison essay that earns the highest AP rubric scores.'
          }},
          {{
            question: 'What is the most historically accurate AP comparison between the Qing Dynasty\\'s treatment of ethnic diversity and the Ottoman millet system?',
            options: [
              'Both empires used accommodation policies for non-dominant groups (Han Chinese in Qing; non-Muslims in Ottoman), but the Qing\\'s accommodation was based on ethnic-administrative integration while the Ottoman millet system was based on religious community autonomy — different mechanisms for the same imperial problem of governing diverse populations',
              'The two systems were identical in every respect',
              'The Qing had no accommodation policies for Han Chinese',
              'The Ottoman millet system excluded all non-Muslim groups from any autonomy'
            ],
            correctAnswer: 0,
            explanation: 'Comparing Qing and Ottoman approaches to diversity demonstrates AP analytical depth: both solved the same problem (diverse empire governance) through different institutional designs. The Qing integrated Han officials while maintaining ethnic oversight; the Ottomans segregated religious communities while allowing internal autonomy. Same problem, different solutions — exactly the kind of comparison AP LEQ rewards.'
          }}
        ]
      }}
    }}
  ]
}}
""")

w(f'{LAND}-part7.ts', f"""export const whLandBasedEmpiresPart7Data = {{
  topicSlug: '{LAND}',
  sections: [
    {{
      id: 'whlbe7-intro',
      type: 'text' as const,
      content: `
{LAND_TITLE}

**Part 7 of 7 — AP Review & Exam Mastery**

---

| Section |
|---------|
| 📖 High-Yield Vocabulary |
| Common AP Prompt Patterns |
| Evidence Deployment |
| 📌 Pulling It All Together |

> 🔑 **Key Concept:** Land-Based Empires content is heavily tested through LEQ and DBQ questions asking you to compare governance methods, evaluate the role of religion in legitimation, and analyze decline patterns. Mastering the vocabulary and comparison frameworks is essential.
      \`
    }},
    {{
      id: 'whlbe7-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {{
        questions: [
          {{
            question: 'An AP SAQ asks: "Briefly explain ONE similarity in how two land-based empires maintained political power c. 1450-1750." Which response earns full credit?',
            options: [
              'Both the Ottoman and Mughal empires created centralized administrative systems that bypassed traditional aristocracy: the Ottomans through the devshirme (collecting Christian boys for imperial service) and the Mughals through the mansabdar system (non-hereditary rank appointments), both producing loyal officials dependent on imperial favor rather than hereditary land rights',
              'All land-based empires had identical governments',
              'Neither empire had any systematic administrative structure',
              'Only religious authority maintained political power in these empires'
            ],
            correctAnswer: 0,
            explanation: 'This response earns full SAQ credit: names two specific empires, identifies a specific similarity (centralized administration bypassing aristocracy), provides specific evidence for each (devshirme and mansabdar), and explains the shared mechanism (imperial dependency). Three-part structure: claim + evidence for both + reasoning.'
          }},
          {{
            question: 'For an AP DBQ about land-based empires, a document showing a religious scholar praising an emperor\\'s piety MOST directly supports which argument?',
            options: [
              'That land-based empires systematically cultivated religious legitimation — using religious scholars\\' public praise to construct ideological justifications for imperial authority that transcended mere military force',
              'That land-based empires had no military power',
              'That religious scholars controlled imperial policy',
              'That military conquest was the only source of imperial legitimacy'
            ],
            correctAnswer: 0,
            explanation: 'Religious legitimation documents require careful AP sourcing: who wrote it (a religious scholar with incentive to praise the emperor), for what purpose (likely commissioned or expected), and what it shows (that emperors actively sought religious endorsement). AP DBQ analysis should use this document to support an argument about legitimation strategies rather than just accepting it as evidence of the emperor\\'s actual piety.'
          }}
        ]
      }}
    }},
    {{
      id: 'whlbe7-content',
      type: 'text' as const,
      content: \`
## 📖 AP Review: High-Yield Terms and Exam Strategy

> **Must-Know Vocabulary**

- **Gunpowder empires** — Ottoman, Safavid, Mughal; built power through gunpowder military technology
- **Devshirme** — Ottoman system collecting Christian boys for imperial service
- **Janissaries** — Devshirme-trained Ottoman infantry; elite gunpowder soldiers
- **Millet system** — Ottoman policy giving non-Muslim communities internal autonomy
- **Mansabdar system** — Mughal non-hereditary official rank system
- **Din-i-Ilahi** — Akbar\\'s syncretic personal religious practice blending multiple faiths
- **Shia Islam** — Branch of Islam; Safavid Empire made it state religion in Persia
- **Queue** — Manchu hairstyle forced on Han Chinese; political submission symbol
- **Dual appointments** — Qing system pairing Manchu and Han officials in each post
- **Zamindar** — Mughal tax collectors (later became hereditary landowners under British rule)

> **Common AP Prompt Patterns**

- **Comparison LEQ:** Compare two land-based empires\\' governance methods c. 1450-1750
- **Evaluation LEQ:** Evaluate the extent to which religion was used to consolidate power
- **CCOT:** How did land-based empire power change between 1450 and 1750?
- **Causation:** Why did land-based empires decline c. 1700-1800?

> **AP Comparison Anchor**

**Quick comparison chart:**

| Empire | Key Admin System | Religious Policy | Primary Decline Factor |
|--------|-----------------|-----------------|----------------------|
| Ottoman | Devshirme/Millet | Sunni tolerance | Janissary conservatism |
| Mughal | Mansabdar | Tolerance→Orthodoxy | Aurangzeb\\'s policies |
| Safavid | Shah/Clergy alliance | Forced Shia | Afghan invasion 1722 |
| Qing | Dual appointments | Buddhist patronage | Opium Wars/rebellions |
      \`
    }},
    {{
      id: 'whlbe7-input',
      type: 'multiple-choice' as const,
      content: \`
**Applied Recall: 3-Question Sprint** 🎯
      \`,
      exercise: {{
        questions: [
          {{
            question: 'The best one-sentence definition of "gunpowder empires" for an AP essay is:',
            options: [
              'The Ottoman, Safavid, and Mughal empires, which all used gunpowder military technology to conquer territory and centralize political power c. 1450-1750, though scholars note that gunpowder alone does not explain their rise — administrative innovation and religious legitimation were equally important',
              'Any empire that ever used any gunpowder weapon',
              'Empires that manufactured gunpowder for export as their primary economic activity',
              'Exclusively European empires that used gunpowder to colonize non-European peoples'
            ],
            correctAnswer: 0,
            explanation: 'This definition is AP-complete because it: (1) names the three specific empires, (2) specifies the mechanism (gunpowder for conquest and centralization), (3) provides the time period (1450-1750), AND (4) adds the critical qualification (gunpowder alone is insufficient — the term is somewhat reductive). AP essays earn complexity points when they demonstrate awareness of the limitations of common analytical categories.'
          }},
          {{
            question: 'An AP LEQ compares how the Ottoman and Qing empires handled religious and ethnic diversity. What is the strongest thesis?',
            options: [
              'Both empires used accommodation-based governance for non-dominant groups — the Ottomans through the millet system (religious community autonomy for Christians and Jews) and the Qing through cultural accommodation of Han Chinese (restoring Confucian exams while using dual appointments) — demonstrating that managing diversity through formal institutional accommodation was a common feature of successful large empire governance',
              'Both empires practiced identical policies',
              'Neither empire had any systematic approach to diversity',
              'Religious persecution was the primary tool both empires used'
            ],
            correctAnswer: 0,
            explanation: 'This thesis uses comparison to generate a principle: successful large empires developed formal institutional accommodations for non-dominant groups. It names specific mechanisms (millet vs. dual appointments/exam restoration), acknowledges the different forms (religious community autonomy vs. ethnic-administrative integration), and articulates a structural principle applicable beyond these two cases.'
          }},
          {{
            question: 'For an AP LEQ asking about religion\\'s role in legitimating land-based empire authority, which complexity move earns the most credit?',
            options: [
              'Acknowledging that while all major empires used religion for legitimation, they did so in contradictory ways — Akbar\\'s multi-religious tolerance and Aurangzeb\\'s Islamic orthodoxy both claimed religious legitimation for opposite policies, demonstrating that religion\\'s role was politically flexible rather than doctrinally consistent',
              'Arguing that religion had no role in imperial legitimation',
              'Arguing that military force was the only legitimate source of imperial authority',
              'Treating all religions as producing identical political consequences'
            ],
            correctAnswer: 0,
            explanation: 'This complexity move is excellent: it uses internal contradiction (Akbar and Aurangzeb both claiming legitimacy through religion despite opposite policies) to show that religion\\'s role in legitimation was flexible and instrumentalized rather than fixed and principled. Showing that the same category (religion) could justify opposite behaviors demonstrates sophisticated historical thinking about how ideology functions in political power.'
          }}
        ]
      }}
    }},
    {{
      id: 'whlbe7-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Idea: Evidence to Claim**

Match each AP term to its correct definition.
      \`,
      exercise: {{
        dropdowns: [
          {{
            label: 'The Ottoman system of giving non-Muslim communities internal autonomy through their own religious leaders was the ___',
            options: ['Millet system', 'Devshirme', 'Mansabdar system', 'Jizya']
          }},
          {{
            label: 'The Mughal emperor whose religious tolerance policies included abolishing jizya and adopting Hindu wives was ___',
            options: ['Akbar', 'Aurangzeb', 'Babur', 'Shah Jahan']
          }},
          {{
            label: 'The three Islamic empires that all used gunpowder weapons to build power c. 1450-1750 are called ___',
            options: ['Gunpowder empires', 'Tributary empires', 'Maritime empires', 'Merchant empires']
          }}
        ],
        correctAnswers: ['Millet system', 'Akbar', 'Gunpowder empires'],
        hint1: 'Ottoman religious community autonomy system',
        hint2: 'Mughal emperor r. 1556-1605 — tolerance and Din-i-Ilahi',
        hint3: 'Ottoman + Safavid + Mughal — three Islamic land empires',
        explanation: 'The millet system is the Ottoman solution to religious diversity governance. Akbar is the AP\\'s model of pragmatic religious tolerance in imperial governance. "Gunpowder empires" is a historiographical term worth knowing but worth questioning: it captures the military technology dimension while potentially underselling the administrative and cultural dimensions of these empires\\' success.'
      }}
    }},
    {{
      id: 'whlbe7-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {{
        questions: [
          {{
            question: 'An AP question asks: "How did the development of gunpowder empires in Asia compare to the development of European overseas empires c. 1450-1750?" Which answer earns the most complexity credit?',
            options: [
              'While Asian land-based empires used gunpowder to conquer contiguous territory through overland expansion, European states used the same technology (plus maritime navigation) for overseas colonial expansion — both building powerful centralized states, but through different geographic strategies with different long-term consequences (land empire vs. maritime empire)',
              'Asian and European empires were identical in every respect',
              'European empires were superior because they used gunpowder and Asian empires did not',
              'Asian empires never expanded territory; only European empires did'
            ],
            correctAnswer: 0,
            explanation: 'This comparison earns complexity by: comparing similar technologies (gunpowder) applied through different strategies (land vs. maritime), identifying why the strategies differed (geographic context — Eurasia is conquerable by cavalry; oceans require ships), and noting different long-term consequences (overland vs. global reach). AP rewards comparisons that go beyond "they were different" to explain WHY they were different.'
          }},
          {{
            question: 'Which of the following AP arguments most effectively uses land-based empire evidence to support a broader historical principle?',
            options: [
              'The consistent pattern of all four major land-based empires using gunpowder military force for conquest but then requiring accommodation-based administration for governance suggests that the same tools cannot accomplish both objectives — force conquers, but sustained governance requires legitimation through institutional accommodation of diverse populations',
              'Military force was sufficient for both conquest and governance in all cases',
              'Administrative accommodation was only practiced in European empires',
              'Religion was irrelevant to imperial governance in all land-based empires'
            ],
            correctAnswer: 0,
            explanation: 'This argument earns maximum complexity because it derives a general principle from specific evidence: conquest ≠ governance, and the same tools (military force) cannot accomplish both. This principle applies beyond the specific empires to a broader theory of state-building. AP essays that use specific historical evidence to derive broader principles demonstrate the highest level of historical thinking.'
          }}
        ]
      }}
    }}
  ]
}}
""")

print("Land-based empires done.")

# =====================================================================
# ISLAMIC EMPIRES (simplified — same period as land-based)
# =====================================================================
IE = 'wh-islamic-empires'
IE_TITLE = '# 🕌 Islamic Gunpowder Empires (c. 1450–1800)'

parts_ie = [
    (2, "The Ottoman Empire at Its Height", "whie2"),
    (3, "The Safavid Empire: Shia Islam and Persian Art", "whie3"),
    (4, "The Mughal Empire: Islam and India", "whie4"),
    (5, "Economic Life in the Islamic Empires", "whie5"),
    (6, "Decline and European Pressure", "whie6"),
    (7, "AP Review & Exam Mastery", "whie7"),
]

ie_subtopics = {
    2: ("Ottoman height — Süleiman the Magnificent; devshirme janissaries; millet system; control of Mediterranean trade", 
        "Süleiman the Magnificent", "devshirme system", "millet system"),
    3: ("Safavid Empire — Shah Abbas I; forced Shia conversion; Isfahan as cultural capital; silk trade with Europe",
        "Shah Abbas I", "Shia Islam", "Persian miniature painting"),
    4: ("Mughal Empire — Akbar tolerance; mansabdar system; Taj Mahal; Aurangzeb reversal and decline",
        "Akbar's religious tolerance", "mansabdar system", "Taj Mahal"),
    5: ("Islamic empire economies — silk and spice trade; artisan production; taxation systems; urban commercial life",
        "Istanbul as commercial hub", "Silk Road revenue", "artisan guilds"),
    6: ("Decline — European military pressure; internal rebellions; Ottoman Tanzimat reforms; British colonialism",
        "Janissary conservatism", "Sepoy Mutiny (1857)", "Tanzimat Reforms"),
    7: ("AP Review — vocabulary, prompt patterns, comparison strategies",
        "Devshirme", "Mansabdar system", "Millet system"),
}

for part_num, subtitle, id_pre in parts_ie:
    topic1, topic2, topic3 = ie_subtopics[part_num]
    w(f'{IE}-part{part_num}.ts', f"""export const whIslamicEmpiresPart{part_num}Data = {{
  topicSlug: '{IE}',
  sections: [
    {{
      id: '{id_pre}-intro',
      type: 'text' as const,
      content: `
{IE_TITLE}

**Part {part_num} of 7 — {subtitle}**

---

> 🔑 **Key Topics:** {topic1}
      \`
    }},
    {{
      id: '{id_pre}-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {{
        questions: [
          {{
            question: 'What most distinguished the three "gunpowder empires" (Ottoman, Safavid, Mughal) from earlier Islamic states?',
            options: [
              'Their systematic use of gunpowder military technology (cannon, firearms) combined with centralized administrative bureaucracies that reduced the power of traditional tribal aristocracies',
              'They were the first Islamic states to use any form of taxation',
              'They rejected all aspects of earlier Islamic governance traditions',
              'They were geographically smaller than earlier Islamic states'
            ],
            correctAnswer: 0,
            explanation: 'The "gunpowder empire" concept in AP World History refers to this specific combination: new military technology (cannon and firearms) that could overcome traditional cavalry and castle defenses, combined with centralized administrative innovations that created loyal officials dependent on the ruler rather than on tribal or feudal loyalty.'
          }},
          {{
            question: 'How did the Safavid Empire\'s Shia Islamic identity affect its relationships with neighboring states?',
            options: [
              'It created sustained military conflict with the Sunni Ottoman Empire, which viewed Safavid Shia rule as heretical, making the Ottoman-Safavid border one of the most contested and violent frontiers in 16th-17th century Eurasia',
              'Shia identity had no impact on the Safavid Empire\\'s foreign relations',
              'It caused the Safavid Empire to ally with Christian European powers against all Muslims',
              'The Ottomans and Safavids cooperated closely despite their religious differences'
            ],
            correctAnswer: 0,
            explanation: 'The Sunni-Shia divide was not just theological — it was political: both empires claimed to be the legitimate center of the Islamic world. Their rivalry produced the Battle of Chaldiran (1514), a decisive Ottoman victory, and decades of warfare over Mesopotamia (modern Iraq), which contained the Shia holy cities of Najaf and Karbala.'
          }}
        ]
      }}
    }},
    {{
      id: '{id_pre}-content',
      type: 'text' as const,
      content: \`
## 📖 Islamic Empires — Part {part_num}: {subtitle}

> **{topic2}**

The {topic2} was a defining feature of Islamic empire governance in this period. AP questions about this topic focus on how Islamic rulers used administrative innovation, religious legitimation, and military technology to build and maintain power across diverse populations.

Key features:
- Gunpowder technology enabled conquest of traditional fortress-based defenses
- Centralized administration reduced noble/tribal independence
- Religious legitimation varied by empire: Ottoman Sunni caliphate claim; Safavid Shia conversion of Persia; Mughal tolerance (Akbar) then orthodoxy (Aurangzeb)

> **{topic3}**

The {topic3} represents one of the defining characteristics of this empire\\'s governance or culture. Understanding its function — whether administrative, cultural, or military — is essential for AP comparison questions.

| Aspect | Details |
|--------|---------|
| **Purpose** | Administrative efficiency and imperial loyalty |
| **Mechanism** | Created officials or institutions dependent on imperial favor |
| **Effect** | Reduced traditional aristocratic power; increased centralization |
| **Legacy** | Shaped governance patterns that persisted even as empires declined |

> **AP Comparison Anchor**

- All three Islamic gunpowder empires shared: gunpowder conquest, administrative centralization, religious legitimation
- Key differences: Sunni vs. Shia; majority Muslim vs. minority Muslim governing majority Hindu; degree of religious tolerance
- Decline factors: military stagnation, internal rebellions, European commercial and military pressure
      \`
    }},
    {{
      id: '{id_pre}-input',
      type: 'multiple-choice' as const,
      content: \`
**Applied Recall: 3-Question Sprint** 🎯
      \`,
      exercise: {{
        questions: [
          {{
            question: 'The Ottoman devshirme system was designed primarily to:',
            options: [
              'Create a loyal military and administrative class whose careers depended entirely on the sultan, bypassing the traditional Turkish nobility who had independent power bases',
              'Spread Christianity throughout the Ottoman Empire',
              'Provide education to all children regardless of social class',
              'Establish a democratic system of government representation'
            ],
            correctAnswer: 0,
            explanation: 'The devshirme\\'s political genius was in creating officials with no alternative loyalty: collected as non-Muslim boys, educated as Muslims, serving as janissaries or bureaucrats, their entire identity and career was imperial. They could not inherit land, hold titles, or appeal to tribal loyalty — complete dependence on the sultan was their defining feature.'
          }},
          {{
            question: 'Akbar\\'s Din-i-Ilahi (personal syncretic religious practice) represented:',
            options: [
              'A pragmatic religious policy acknowledging that governing a vast, religiously diverse empire required demonstrating respect for all major faiths — reducing religious conflict as a source of resistance to Mughal authority',
              'Akbar\\'s conversion away from Islam entirely',
              'A new religion intended to replace both Islam and Hinduism throughout India',
              'A policy forced upon Akbar by Hindu advisors against his own preferences'
            ],
            correctAnswer: 0,
            explanation: 'Din-i-Ilahi was more political philosophy than a mass religion — it had very few actual followers. Its significance was symbolic: it demonstrated Akbar\\'s willingness to draw on Hindu, Sufi, Zoroastrian, and other spiritual traditions, signaling to all his subjects that their traditions were respected. This is pragmatic religious instrumentalization, not genuine syncretism.'
          }},
          {{
            question: 'The Safavid Empire\\'s most lasting legacy for the modern world is:',
            options: [
              'Establishing Shia Islam as the dominant religion of Iran (Persia), creating the religious-cultural identity of modern Iran that persists to the present and shapes contemporary Middle Eastern geopolitics',
              'Creating the world\\'s first democratic constitution',
              'Inventing gunpowder weapons independently of China',
              'Establishing the Ottoman Empire as its successor state'
            ],
            correctAnswer: 0,
            explanation: 'The Safavid forced conversion of Persia to Shia Islam (c. 1501 onward) is arguably the most consequential long-term legacy of the gunpowder empires: it created the Sunni-Shia divide in the Middle East that shapes modern geopolitics (Saudi Arabia vs. Iran rivalry, conflicts in Iraq, Yemen, Syria, Lebanon all have sectarian dimensions traceable to this 16th-century Safavid project).'
          }}
        ]
      }}
    }},
    {{
      id: '{id_pre}-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Idea: Evidence to Claim**

Match each Islamic empire concept to its correct identification.
      \`,
      exercise: {{
        dropdowns: [
          {{
            label: 'The Islamic empire that ruled the Persian-speaking world and converted it to Shia Islam was the ___',
            options: ['Safavid Empire', 'Ottoman Empire', 'Mughal Empire', 'Abbasid Caliphate']
          }},
          {{
            label: 'The Mughal emperor whose religious tolerance and mansabdar system built imperial stability was ___',
            options: ['Akbar', 'Aurangzeb', 'Babur', 'Humayun']
          }},
          {{
            label: 'The Ottoman institution allowing non-Muslim communities to govern their internal affairs was the ___',
            options: ['Millet system', 'Devshirme', 'Janissary corps', 'Waqf']
          }}
        ],
        correctAnswers: ['Safavid Empire', 'Akbar', 'Millet system'],
        hint1: 'Shah Ismail I founded — Shia Islam — Isfahan capital',
        hint2: 'r. 1556-1605 — religious tolerance — abolished jizya',
        hint3: 'Ottoman religious community autonomy — Greek Orthodox, Armenian, Jewish',
        explanation: 'The Safavid Empire\\'s Shia conversion of Persia is its defining historical contribution. Akbar\\'s governance demonstrates how pragmatic accommodation can build empire-wide loyalty across religious lines. The millet system is the Ottoman Empire\\'s institutional solution to governing a multi-religious empire — allowing internal autonomy in exchange for tax payment and political submission.'
      }}
    }},
    {{
      id: '{id_pre}-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {{
        questions: [
          {{
            question: 'An AP LEQ asks: "Evaluate the role of religion in legitimating political authority in the Islamic gunpowder empires c. 1450-1750." Which thesis earns the highest score?',
            options: [
              'While all three gunpowder empires used religion to legitimate authority, they did so in strikingly different ways: the Ottomans claimed the Sunni Caliphate to assert universal Islamic leadership; the Safavids imposed Shia Islam to create a distinctive Persian-Islamic identity; and the Mughals oscillated between tolerance (Akbar) and orthodoxy (Aurangzeb) — demonstrating that religion was a flexible political tool rather than a fixed source of legitimacy',
              'Religion played no role in any of the Islamic empires\\' governance',
              'All three empires used identical religious legitimation strategies',
              'Only the Safavid Empire used religion for political legitimation'
            ],
            correctAnswer: 0,
            explanation: 'This thesis earns all AP rubric points: it acknowledges the shared pattern (religion as legitimation) while demonstrating meaningful variation (three different strategies), names specific empires and specific policies, and articulates a broader principle (religion as flexible political tool). The complexity move — "flexible political tool rather than fixed source" — goes beyond description to interpretation.'
          }},
          {{
            question: 'Which comparison between the Mughal and Ottoman empires demonstrates the most sophisticated AP historical reasoning?',
            options: [
              'Both empires governed multi-religious populations, but through different institutional designs reflecting different demographic realities: the Ottomans\\' millet system assumed Muslim majority governance of Christian/Jewish minorities, while the Mughals\\' tolerance policies (under Akbar) assumed Muslim minority governance of a Hindu majority — the same goal (managing religious diversity) required fundamentally different institutional solutions based on demographic context',
              'Both empires were identical because they were both Islamic',
              'The Ottoman Empire was always more religiously tolerant than the Mughal Empire',
              'Religious diversity was only a challenge for the Mughal Empire'
            ],
            correctAnswer: 0,
            explanation: 'This comparison demonstrates AP sophistication by explaining WHY the two empires used different approaches: the demographic context differed fundamentally (Muslim majority vs. Muslim minority), requiring different solutions. AP rewards explanations of MECHANISM — not just "they were different" but "they were different because of [specific factor]."'
          }}
        ]
      }}
    }}
  ]
}}
""")

print("Islamic empires done.")
print("\\nAll land-based and Islamic empire files written!")
