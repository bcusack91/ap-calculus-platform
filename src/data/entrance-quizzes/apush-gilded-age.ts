/**
 * Entrance Quiz — The Gilded Age (1865–1898)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'apushgil-ent-1a',
    question: 'Which best describes the major industrial-organizational innovations of the Gilded Age (1865–1898)?',
    options: [
      "Vertical integration (controlling all stages of production from raw materials through finished product, exemplified by Carnegie Steel using the Bessemer process); horizontal integration (controlling all firms in one stage of production, exemplified by Rockefeller's Standard Oil controlling ~90% of U.S. refining by the 1880s); the trust device (1882) for combining firms under unified control; and the holding-company device (after New Jersey's 1889 corporate law) that enabled J.P. Morgan to assemble U.S. Steel (1901) — together producing unprecedented industrial concentration",
      'There were no industrial-organizational innovations of any kind during the entire Gilded Age from 1865 through 1898 in any region of the United States with no vertical integration, no horizontal integration, no trust, no holding company, and no industrial concentration of any kind during the period',
      'Industrial-organizational innovations during the Gilded Age were limited to small-scale family firms with no Carnegie Steel, no Standard Oil, no trust, no holding company, and no industrial concentration of any kind during the entire period from 1865 through 1898 in any region',
      'The Gilded Age featured deconcentration of industry into smaller competitive units with no vertical or horizontal integration, no trust, no holding company, and no Carnegie or Rockefeller of any kind during the entire period from 1865 through 1898 in any region'
    ],
    correctIndex: 0,
    explanation: 'Gilded Age innovations: vertical integration (Carnegie Steel + Bessemer) + horizontal integration (Standard Oil ~90% refining) + trust (1882) + holding company (NJ 1889 → U.S. Steel 1901) → unprecedented concentration.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'apushgil-ent-1b',
    question: 'Which best describes the major Gilded Age labor organizations and their strategies?',
    options: [
      "The Knights of Labor (1869–c.1893) were inclusive (skilled, unskilled, Black, women, but excluded Asian workers) pursuing producer cooperatives, the 8-hour day, and political reform; they peaked at ~750,000 in 1886 but collapsed after Haymarket; the AFL (1886, Samuel Gompers) was a federation of skilled craft unions (mostly white male) pursuing a 'bread and butter' agenda (wages, hours, conditions) through collective bargaining and surviving as the dominant U.S. union; the American Railway Union (1893–94, Eugene V. Debs) was an industrial union of all railway workers, broken in the Pullman Strike (1894)",
      'There were no Gilded Age labor organizations of any kind during the entire period from 1865 through 1898 in any region of the United States with no Knights, no AFL, no ARU, and no labor strategies of any kind during the entire period in any region',
      'The Knights of Labor were a skilled craft federation pursuing collective bargaining while the AFL was an inclusive industrial union pursuing producer cooperatives during the entire period from 1869 through 1898 in any region of the United States',
      'Gilded Age labor organizations were limited to a single union with no Knights, no AFL, no ARU, no Gompers, and no Debs of any kind during the entire period from 1865 through 1898 in any region of the United States'
    ],
    correctIndex: 0,
    explanation: 'Knights (1869): inclusive + cooperatives/8-hr/reform → collapsed after Haymarket. AFL (1886, Gompers): skilled craft + "bread and butter" + survived. ARU (1893, Debs): industrial RR union → broken in Pullman 1894.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'apushgil-ent-2a',
    question: 'Which best describes the process by which the federal government responded to industrial concentration (1887–1895)?',
    options: [
      "Federal regulatory response began with the Interstate Commerce Act (1887), creating the Interstate Commerce Commission as the first federal regulatory commission to address railroad rate discrimination; continued with the Sherman Antitrust Act (1890), banning 'combinations in restraint of trade' but written in vague language; was severely limited by the Supreme Court in *United States v. E.C. Knight* (1895), which held that 'manufacturing' was not 'commerce' and therefore exempt from federal antitrust authority; and the Sherman Act was applied more often against labor unions (Pullman Strike injunction 1894) than against trusts during the 1890s",
      "There was no federal regulatory response to industrial concentration of any kind from 1887 through 1895 with no Interstate Commerce Act, no Sherman Antitrust Act, no E.C. Knight case, and no antitrust enforcement of any kind during the entire period in any region of the United States",
      "The Interstate Commerce Act (1887) and Sherman Antitrust Act (1890) immediately and completely broke up all trusts and ended industrial concentration with no E.C. Knight limitation and no anti-labor application of any kind during the entire period from 1887 through 1895 in any region",
      "There was no industrial concentration during the Gilded Age requiring any federal response of any kind during the entire period from 1865 through 1900 in any region of the United States with no trusts, no Interstate Commerce Act, and no Sherman Act of any kind during the period"
    ],
    correctIndex: 0,
    explanation: 'Federal regulatory process: ICA 1887 (ICC = first federal regulatory commission, RR rate discrimination) → Sherman Act 1890 (vague "restraint of trade") → E.C. Knight 1895 ("manufacturing" exempt) → Sherman applied vs labor (Pullman injunction 1894) more than vs trusts.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'apushgil-ent-2b',
    question: 'Which best describes the political process by which Populism rose and was absorbed (1867–1896)?',
    options: [
      "The Grange (founded 1867) organized farmers; Farmers' Alliances (Northern and Southern, 1880s) built mass organizations; the People's (Populist) Party formed in 1892, adopting the Omaha Platform (free silver, graduated income tax, government ownership of railroads, direct election of senators, secret ballot, eight-hour day); the Populists fused with the Democrats behind William Jennings Bryan in 1896 ('Cross of Gold' speech demanding free silver), but McKinley defeated Bryan; the Populist Party collapsed, but its specific demands were largely realized through later Progressive-era reforms (16th Amendment income tax 1913, 17th Amendment direct election senators 1913, etc.)",
      "There was no Populist movement of any kind from 1867 through 1896 with no Grange, no Farmers' Alliances, no People's Party, no Omaha Platform, no Bryan 'Cross of Gold,' and no Progressive-era realization of any kind during the entire period in any region",
      "The Populist Party won the 1896 election with William Jennings Bryan defeating McKinley with no fusion candidacy and no Progressive-era realization of demands of any kind during the entire period from 1892 through 1913 in any region of the United States",
      "The Populist Party emerged in 1820 with Andrew Jackson and had no relationship to farmers, the Grange, the Omaha Platform, free silver, or William Jennings Bryan of any kind during the entire period in any region of the United States"
    ],
    correctIndex: 0,
    explanation: 'Populist process: Grange 1867 → Farmers\' Alliances 1880s → People\'s Party 1892 + Omaha Platform → Bryan fusion 1896 ("Cross of Gold") → defeated by McKinley → Populist demands realized in Progressive Era (16th 1913 income tax, 17th 1913 direct election senators).',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'apushgil-ent-3a',
    question: 'Which best describes the major Gilded Age labor conflicts and their patterns?',
    options: [
      "The Great Railroad Strike (1877, broken by Hayes\'s federal troops, first nationwide strike); Haymarket Affair (1886, Chicago bombing during 8-hour-day protest, anarchism scare destroying Knights of Labor public legitimacy); Homestead Strike (1892, Carnegie Steel using Pinkerton private security against the union, defeating skilled craft union and ending unionization in steel for ~40 years); Pullman Strike (1894, Cleveland\'s federal troops + Sherman Antitrust injunction breaking the ARU, imprisoning Debs) — together establishing a pattern of state and capital alliance against labor that persisted until the New Deal\'s Wagner Act (1935)",
      "There were no Gilded Age labor conflicts of any kind from 1877 through 1894 with no Great Railroad Strike, no Haymarket, no Homestead, no Pullman, no federal troops, and no Pinkerton involvement of any kind during the entire period in any region",
      "Gilded Age labor conflicts were uniform victories for labor with no federal troops, no Pinkerton violence, no anarchism scare, no destruction of skilled steel unions, and no imprisonment of Debs of any kind during the entire period in any region",
      "There was no labor of any kind during the Gilded Age from 1865 through 1900 in any region of the United States with no railroads, no steel mills, and no labor conflicts of any kind during the entire period in any region of the country"
    ],
    correctIndex: 0,
    explanation: 'Labor conflict pattern: Great RR Strike 1877 (Hayes troops) → Haymarket 1886 (anarchism scare → Knights collapse) → Homestead 1892 (Carnegie + Pinkertons + steel unionization dies for ~40 yrs) → Pullman 1894 (Cleveland troops + Sherman injunction + Debs jail) → state/capital alliance vs labor until Wagner Act 1935.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'apushgil-ent-3b',
    question: 'Which best describes Gilded Age immigration patterns and the political response?',
    options: [
      "The 'New Immigration' (post-1880) brought large numbers from Southern and Eastern Europe (Italians, Poles, Russian Jews, Greeks, etc.) to American cities; immigrants concentrated in industrial wage labor and urban ethnic neighborhoods; political response included the Chinese Exclusion Act (1882, the first major federal restriction by nationality), nativist organizations (Immigration Restriction League 1894), and labor opposition to immigration as wage competition; settlement houses (Hull House, founded by Jane Addams in 1889) attempted to support immigrant communities; later restrictions (Quota Acts 1921 and 1924) would sharply curtail New Immigration",
      "There was no Gilded Age immigration of any kind from 1880 through 1900 in any region of the United States with no New Immigration, no Chinese Exclusion Act, no nativism, no settlement houses, and no later Quota Acts of any kind during the entire period in any region",
      "Gilded Age immigration came almost entirely from Northern and Western Europe with no New Immigration from Southern/Eastern Europe, no Chinese Exclusion Act, and no nativism of any kind during the entire period from 1880 through 1900 in any region",
      "Gilded Age immigration was met with universal welcome and unrestricted entry with no Chinese Exclusion Act, no Immigration Restriction League, no labor opposition, and no later Quota Acts of any kind during the entire period from 1880 through 1924 in any region"
    ],
    correctIndex: 0,
    explanation: 'New Immigration (post-1880): S/E Europe (Italians, Poles, Russian Jews, Greeks) → industrial wage labor + ethnic neighborhoods. Political response: Chinese Exclusion Act 1882 + Immigration Restriction League 1894 + labor opposition + Hull House 1889 (Addams) → Quota Acts 1921/1924.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'apushgil-ent-4a',
    question: 'Which best describes the connection between Gilded Age industrialization and the dispossession of Indigenous nations on the Plains?',
    options: [
      "Industrialization required vast quantities of land, raw materials, and rail rights-of-way, all of which the federal government supplied through Indigenous dispossession: the transcontinental railroad (1869) and its successors crossed Indigenous territory under federal land grants; the U.S. Army's Plains Wars (Sand Creek 1864, Little Bighorn 1876, Apache wars, Nez Percé 1877) cleared Indigenous nations from areas designated for white settlement and capitalist development; the Dawes Severalty Act (1887) broke up reservation land into individual allotments and sold 'surplus' land to whites, reducing Indigenous land base from ~138 million to ~48 million acres by 1934; the Wounded Knee Massacre (1890) ended major Plains military violence",
      "Industrialization had no connection to Indigenous dispossession of any kind with no railroads, no Plains Wars, no Dawes Act, and no Wounded Knee of any kind during the entire period from 1865 through 1900 in any region of the United States",
      "Indigenous nations on the Plains were untouched by industrialization with no railroads crossing their territory, no Plains Wars, no Dawes Act, and no Wounded Knee of any kind during the entire period from 1865 through 1900 in any region",
      "There was no industrialization, no Indigenous dispossession, and no Plains Wars of any kind during the entire period from 1865 through 1900 in any region of the United States with no transcontinental railroad and no Dawes Act of any kind during the period"
    ],
    correctIndex: 0,
    explanation: 'Industrialization → Indigenous dispossession: transcontinental RR 1869 + RR land grants + Plains Wars (Sand Creek 1864, Little Bighorn 1876, Apache, Nez Percé 1877) + Dawes Act 1887 (allotment + ~138M → ~48M acres by 1934) + Wounded Knee 1890.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'apushgil-ent-4b',
    question: 'Which best describes the connection between the Gilded Age and the Progressive Era?',
    options: [
      "The Gilded Age generated the conditions and the reform agenda that the Progressive Era (c.1900–1920) would address: industrial concentration provoked Theodore Roosevelt\'s trust-busting (Northern Securities 1904) and Wilson\'s Clayton Act (1914) and FTC (1914); urban poverty and immigration provoked settlement-house and tenement-reform movements; agrarian Populist demands were realized in the 16th Amendment (income tax, 1913) and 17th Amendment (direct election of senators, 1913); muckrakers (Ida Tarbell on Standard Oil, Upton Sinclair on the meatpacking industry, Lincoln Steffens on urban corruption) extended Gilded Age critiques into Progressive-era legislation (Pure Food and Drug Act 1906, Meat Inspection Act 1906)",
      "The Gilded Age had no connection to the Progressive Era of any kind with no trust-busting, no Clayton Act, no FTC, no 16th Amendment, no 17th Amendment, no muckrakers, and no Pure Food and Drug Act of any kind during the entire period in any region",
      "The Progressive Era reversed all Gilded Age developments with no continuity, no inherited reform agenda, and no realization of Populist demands of any kind during the entire period from 1900 through 1920 in any region of the United States",
      "There was no Gilded Age and no Progressive Era of any kind during the entire period from 1865 through 1920 in any region of the United States with no industrialization, no trusts, no Populism, and no Progressive reforms of any kind during the period"
    ],
    correctIndex: 0,
    explanation: 'Gilded Age → Progressive Era: industrial concentration → TR trust-busting (Northern Securities 1904) + Wilson Clayton Act 1914 + FTC 1914. Urban poverty/immigration → settlement houses + tenement reform. Populist demands → 16th 1913 (income tax) + 17th 1913 (direct election). Muckrakers (Tarbell, Sinclair, Steffens) → Pure Food/Drug + Meat Inspection 1906.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'apushgil-ent-5a',
    question: 'Which best describes the change in American economic structure between the antebellum (pre-1860) and end of the Gilded Age (1898)?',
    options: [
      "The American economy shifted from a predominantly agrarian, regional, and slave-labor-based economy (with Northern industrialization concentrated in textiles and shipping) to a predominantly industrial, national, and wage-labor-based economy organized through transcontinental railroads, vertically integrated steel and oil firms, and national finance (J.P. Morgan); the labor force shifted from agriculture and small-scale craft to factory wage work; the corporate form (especially the trust 1882 and holding company 1889) replaced partnerships and small firms; and the U.S. became the world's largest industrial economy by ~1890",
      "American economic structure underwent no change from antebellum to end of Gilded Age with no industrialization, no transcontinental railroads, no trust, no holding company, and no shift from agrarian to industrial economy of any kind during the entire period in any region",
      "American economic structure shifted from industrial to agrarian during the Gilded Age with no transcontinental railroads, no Carnegie Steel, no Standard Oil, no J.P. Morgan, and no industrial concentration of any kind during the entire period from 1860 through 1898 in any region",
      "There was no antebellum or Gilded Age American economy of any kind during the entire period from pre-1860 through 1898 in any region of the United States with no agriculture, no industry, and no labor force of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Economic change pre-1860 → 1898: agrarian/regional/slave-labor → industrial/national/wage-labor + transcontinental RR + vertical integration (steel/oil) + Morgan finance + corporate trust 1882 + holding 1889 → world\'s largest industrial economy by ~1890.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'apushgil-ent-5b',
    question: 'Which best describes a major continuity in American politics from Reconstruction through the Gilded Age regarding race?',
    options: [
      "Continuous retreat from federal protection of Black civil rights: Reconstruction\'s Civil Rights Act of 1875 was struck down in the *Civil Rights Cases* (1883); the 14th Amendment was narrowed in *Slaughterhouse* (1873) and *Plessy v. Ferguson* (1896); Black voters were systematically disfranchised under the Mississippi Plan (1890) and its successors; and the federal government largely abandoned enforcement after the Compromise of 1877 — establishing the Jim Crow regime that would last until the mid-20th-century Civil Rights Movement",
      "There was no continuity of any kind in American racial politics from Reconstruction through the Gilded Age with no Civil Rights Cases, no Slaughterhouse, no Plessy, no Mississippi Plan, and no Compromise of 1877 of any kind during the entire period in any region",
      "American racial politics from Reconstruction through the Gilded Age was characterized by continuous expansion of Black civil rights with no Civil Rights Cases, no Slaughterhouse, no Plessy, and no Mississippi Plan of any kind during the entire period in any region of the United States",
      "There was no race or racial politics of any kind in American history from Reconstruction through the Gilded Age in any region of the United States with no Reconstruction Amendments, no Civil Rights Acts, and no Plessy of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Continuity (race): retreat from federal civil-rights enforcement. CRA 1875 → struck down (Civil Rights Cases 1883). 14th narrowed (Slaughterhouse 1873 + Plessy 1896). Mississippi Plan 1890 disfranchisement. Compromise 1877 → federal abandonment → Jim Crow until 20th-c. CRM.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'apushgil-ent-6a',
    question: "Which historical context is most essential for sourcing the Populist Omaha Platform (July 1892)?",
    options: [
      "The platform was adopted at the People\'s Party convention in Omaha in July 1892, in the context of two decades of farm distress: deflation from the gold standard (raising the real value of farm debt), high railroad shipping rates (especially in the West and South where farmers had no alternative carriers), the Crime of 1873 (demonetization of silver, which Populists called the 'Crime of \\'73'), and the failure of major parties to address agrarian grievances; intended audience was small farmers (especially in the South and Plains), urban workers, and reform-minded voters; the platform led to Bryan\'s 1896 fusion candidacy",
      "The platform was adopted in 1820 with no relationship to gold-standard deflation, railroad rates, the Crime of 1873, or Bryan\'s 1896 fusion candidacy of any kind during the entire period in any region of the United States",
      "The platform was adopted in 1965 with no relationship to gold-standard deflation, railroad rates, the Crime of 1873, or Bryan\'s 1896 fusion candidacy of any kind during the entire period in any region of the United States",
      "There was no Populist Omaha Platform of any kind during the entire period from 1880 through 1900 in any region of the United States with no Crime of 1873, no Bryan 1896 fusion, and no agrarian distress of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Omaha Platform July 1892 context: 2 decades farm distress + gold-standard deflation (real debt rises) + high RR rates (no alternative carriers in W/S) + Crime of 1873 (silver demonetized) + major-party failure → fusion w/ Bryan 1896.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'apushgil-ent-6b',
    question: "Which best identifies the purpose of William Graham Sumner\'s \"What Social Classes Owe to Each Other\" (1883)?",
    options: [
      "To argue that government intervention to redistribute wealth or aid 'weak' individuals interferes with the natural process of social progress and harms the productive 'forgotten man'; the book applies Spencer\'s 'survival of the fittest' framework to American class structure during the rise of industrial capitalism and provides intellectual cover for opposing labor regulation, public assistance, and most reform measures — making Sumner the leading academic exponent of social Darwinism in the United States",
      "To argue that government intervention is essential for redistributing wealth and protecting workers with no application of Spencer\'s 'survival of the fittest' framework and no opposition to labor regulation of any kind during the entire period in any region",
      "To defend Reconstruction-era civil-rights legislation with no relationship to social Darwinism, Spencer, the 'forgotten man,' or industrial capitalism of any kind during the entire period in any region of the United States",
      "There was no William Graham Sumner book in 1883 of any kind during the entire period from 1865 through 1900 in any region of the United States with no social Darwinism, no Spencer framework, and no 'forgotten man' rhetoric of any kind during the period"
    ],
    correctIndex: 0,
    explanation: 'Sumner 1883 purpose: argue gov intervention interferes with natural progress + harms productive "forgotten man" + applies Spencer "survival of fittest" → cover for opposing labor regulation/assistance → leading US social Darwinism exponent.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'apushgil-ent-7a',
    question: 'In which year were the Sherman Antitrust Act, the McKinley Tariff, the Mississippi Plan, and the Wounded Knee Massacre all passed/occurred?',
    options: ['1877', '1886', '1890', '1896'],
    correctIndex: 2,
    explanation: '1890 (Sherman Antitrust + McKinley Tariff + Mississippi Plan + Wounded Knee). 1877 = Compromise + Great RR Strike; 1886 = Haymarket + AFL; 1896 = Plessy + Bryan loss.',
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'apushgil-ent-7b',
    question: 'Which best demonstrates AP comparison skill across Gilded Age industrial-organizational forms?',
    options: [
      "Vertical integration (Carnegie Steel) and horizontal integration (Standard Oil) both produced industrial concentration, but vertical integration controls all stages of production from raw materials through finished product within one industry (Carnegie controlled iron mines, ore ships, coke ovens, mills, and distribution), reducing dependence on suppliers and enabling cost control across the whole production chain; horizontal integration controls all firms in one stage of production across an industry (Standard Oil acquired or destroyed competing refiners until it controlled ~90% of U.S. refining capacity), reducing competition and enabling price control — both were addressed (with mixed results) by the Sherman Antitrust Act of 1890",
      "Vertical integration and horizontal integration were entirely identical in structure, scope, and competitive effect with no meaningful differences of any kind during the entire Gilded Age from 1865 through 1898 in any region of the United States",
      "Vertical integration and horizontal integration had no shared themes of any kind and cannot be compared in any meaningful way during the entire Gilded Age from 1865 through 1898 in any region of the United States during the period",
      "Neither vertical integration nor horizontal integration existed during the Gilded Age with no Carnegie Steel, no Standard Oil, and no Sherman Antitrust Act of any kind during the entire period from 1865 through 1898 in any region of the United States"
    ],
    correctIndex: 0,
    explanation: 'AP comparison: shared theme (industrial concentration) AND specific differences (vertical = all stages within industry, Carnegie iron→ore ships→coke→mills→distribution, supplier independence + cost control; horizontal = all firms in one stage across industry, Standard Oil ~90% refining, competition reduction + price control) AND shared regulatory response (Sherman 1890).',
    partNumber: 7,
    partTitle: 'AP Review'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'Patterns & Examples' },
    { partNumber: 4, partTitle: 'Connections & Interactions' },
    { partNumber: 5, partTitle: 'Change Over Time' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' }
  ]
}
