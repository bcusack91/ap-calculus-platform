export const hgIntroGeographyPart2Data = {
  topicSlug: 'hg-intro-geography',
  sections: [
    {
      id: 'hgintrog2-intro',
      type: 'text' as const,
      content: `
# 🗺️ Maps and Spatial Data

**Part 2 of 7 — Maps, Projections, and Geospatial Technology**

---

| Section |
|---------|
| 📖 Reference vs. Thematic Maps |
| Map Projections & Distortion |
| 📌 Six Thematic Map Types |
| GIS, GPS, Remote Sensing |

> 🔑 **Key Concept:** Every map lies. The question is **how** it lies — what it preserves, what it distorts, and whose story it tells. AP graders reward students who can name the map *type* and explain its *trade-offs*.
      `
    },
    {
      id: 'hgintrog2-types',
      type: 'text' as const,
      content: `
## 📖 Reference vs. Thematic Maps

| Family | Purpose | Examples |
|--------|---------|----------|
| **Reference maps** | Show *where* things are (locations) | Road atlas, political map, topographic (USGS quad), plat map |
| **Thematic maps** | Show *spatial patterns* of a variable | Choropleth, isoline, dot density, graduated symbol, cartogram |

### Map Projections — The Trade-Off Triangle

A flat sheet cannot perfectly represent a sphere. Every projection sacrifices at least one of: **shape (conformality)**, **area**, **distance**, or **direction**.

| Projection | Preserves | Distorts | Famous Use |
|------------|-----------|----------|------------|
| **Mercator** (1569) | Shape, direction (rhumb lines = straight) | Area (Greenland looks larger than Africa!) | Marine navigation, Google Maps web tiles |
| **Peters / Gall-Peters** | Area | Shape (continents look stretched) | Used by activists to highlight Global South size |
| **Robinson** | A compromise — no property exactly | All slightly | National Geographic 1988–98, AP textbooks |
| **Goode's Homolosine** | Area | Cuts oceans (interrupted) | Showing global crop, climate, biome data |
| **Polar / Azimuthal** | Direction from center | Areas at edges | Air-route maps, U.N. flag |

> ⚠️ **AP Alert:** Mercator is NOT "wrong" — it is *correct for what it preserves* (angles, for navigation). The AP exam tests whether you know which projection fits which **purpose**.
      `
    },
    {
      id: 'hgintrog2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "A teacher wants to show students that Africa (30.4 million km²) is roughly 14× larger than Greenland (2.2 million km²). The most appropriate projection is:",
            options: [
              "Mercator — it preserves shape",
              "Gall-Peters — it preserves area",
              "Robinson — it is a balanced compromise",
              "Polar azimuthal — it is centered on the equator"
            ],
            correctAnswer: 1,
            explanation: "Equal-area (Gall-Peters) projections faithfully represent the relative *areas* of landmasses, exposing Mercator's high-latitude inflation."
          },
          {
            question: "An airline planning a great-circle route from Anchorage to Stockholm should use a:",
            options: [
              "Mercator projection",
              "Robinson projection",
              "Polar (azimuthal) projection",
              "Gall-Peters projection"
            ],
            correctAnswer: 2,
            explanation: "Great-circle routes between high-latitude cities pass near the pole. A polar/azimuthal projection preserves true direction and distance from a central point — ideal for polar flight planning."
          }
        ]
      }
    },
    {
      id: 'hgintrog2-thematic',
      type: 'text' as const,
      content: `
## 📌 The Six Thematic Map Types You Must Recognize

| Type | Shows | Best For | Watch Out For |
|------|-------|----------|---------------|
| **Choropleth** | Colored or shaded regions, usually by enumeration unit (county, state) | Rates and ratios (% obese, GDP/capita) | "Modifiable Areal Unit Problem" — bigger units hide local variation |
| **Isoline / Isopleth** | Lines of equal value (contours) | Continuous data (elevation, temperature, rainfall) | Reading interpolation between lines |
| **Dot density** | One dot = N units of the variable | Raw counts and clustering (population, dairy farms) | Dot placement is symbolic, not exact |
| **Graduated / proportional symbol** | Symbol size scales with magnitude | Comparing totals across cities (oil exports, MLB attendance) | Bigger circles = bigger value, but humans underestimate area |
| **Cartogram** | Areas resized to reflect a variable | Dramatizing disparities (electoral votes, COVID deaths) | Distorts shape; can mislead casual viewers |
| **Flow-line** | Arrows of varying width | Movements (migration corridors, trade flows) | Cluttered if too many flows |

### Choropleth Pitfalls

- **Use rates, not raw counts.** A choropleth of "total people with diabetes" just looks like a population map. Use **prevalence (%)** instead.
- **Choose intervals carefully.** Equal interval, quantile, and natural breaks (Jenks) classifications can make the same data look very different.
- **Beware ecological fallacy** — a state with high average X does not mean every individual is high in X.
      `
    },
    {
      id: 'hgintrog2-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact-term answers)** ✍️

1) A USGS topographic quad shows elevation using continuous brown lines. What thematic map type uses lines connecting points of equal value?

2) A map shrinks Greenland to a sliver and balloons China to fill half the Northern Hemisphere because each country is sized by its 2024 population. What thematic map type is this?

3) A reporter shades U.S. counties by COVID-19 case rate per 100,000 residents. What thematic map type is this?

Use the exact term from the lesson.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["Isoline", "Cartogram", "Choropleth"],
        hint1: "Also called isopleth. Think contour lines.",
        hint2: "Distorts area, not value. Common in election coverage.",
        hint3: "Color-shaded enumeration units. The most common thematic map.",
        explanation: "Isoline — equal-value lines (contours). Cartogram — units resized by data value. Choropleth — shaded enumeration units showing rates/ratios."
      }
    },
    {
      id: 'hgintrog2-tech',
      type: 'text' as const,
      content: `
## 🛰️ GIS, GPS & Remote Sensing — Modern Geospatial Tech

| Technology | What It Does | AP-Worthy Examples |
|------------|--------------|--------------------|
| **GIS (Geographic Information System)** | Layers spatial data (vector + raster) for analysis and mapping | Detroit overlays foreclosure, school district, and crime layers to plan blight removal |
| **GPS (Global Positioning System)** | 24+ satellites give absolute position (lat/long/elev) | Uber/Lyft routing, precision agriculture (auto-steer tractors) |
| **Remote sensing** | Imagery from satellites, aircraft, drones | Landsat tracks Amazon deforestation; MODIS tracks crop yields |
| **GNSS (broader GPS)** | GPS + Russian GLONASS + EU Galileo + China BeiDou | Smartphone navigation in urban canyons |
| **Geotagging / VGI** | User-supplied location data on photos, tweets, OpenStreetMap | Crisis Mappers used VGI after the 2010 Haiti earthquake |
| **Spatial big data** | Aggregated cell-phone, credit-card, social-media flows | Tracking pandemic mobility (Apple/Google reports during COVID-19) |

> 🔑 **Why This Matters:** The 2020 CED added an entire topic (1.3) on **the power of geographic data**. Expect MCQs on which technology produced what kind of dataset, and FRQs asking the **ethical** trade-offs (privacy, surveillance, data divides).
      `
    },
    {
      id: 'hgintrog2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Tool** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "John Deere tractors auto-steer rows 2 cm apart by combining satellite signals with on-board sensors. Core technology: ___",
            options: ["GPS", "Choropleth", "Cartogram", "Mercator projection"]
          },
          {
            label: "After Hurricane Maria, NASA's MODIS satellite measured pre/post nighttime light to estimate Puerto Rico's blackout extent. Core technology: ___",
            options: ["Remote sensing", "GIS overlay analysis", "Volunteered Geographic Information (VGI)", "GPS"]
          },
          {
            label: "Detroit's Land Bank stacks foreclosure, vacancy, school-quality, and crime layers in ArcGIS to prioritize demolitions. Core technology: ___",
            options: ["GIS", "GPS", "Cartogram", "Polar projection"]
          }
        ],
        correctAnswers: ["GPS", "Remote sensing", "GIS"],
        hint1: "Satellite-based positioning.",
        hint2: "Imagery captured from above without physical contact.",
        hint3: "Layered spatial analysis software.",
        explanation: "GPS = position. Remote sensing = sensor imagery from satellites/drones. GIS = layered spatial data analysis. The trio underpins all modern AP-relevant geospatial work."
      }
    },
    {
      id: 'hgintrog2-strategy',
      type: 'text' as const,
      content: `
## ⚡ Common Misconceptions & AP Strategy

### Misconceptions to Avoid
- **"Mercator is wrong"** — it is *appropriate for navigation*. The exam wants the **purpose-projection match**, not a verdict.
- **GPS ≠ GIS**. GPS is a positioning service; GIS is layered analysis software. Confusing them is a frequent FRQ point loss.
- **Choropleth ≠ raw counts**. Always use rates, percentages, or per-capita values; otherwise the map is just a population map.
- **Remote sensing is not "Google Maps."** It is the satellite/aerial *imagery* underneath — Landsat, Sentinel, MODIS, NOAA — separate from the routing service.

### AP Strategy Moves
- For map-stimulus MCQs: **identify the type first** (choropleth? isoline? cartogram?), then ask "what variable, what unit, what classification."
- For projection MCQs: ask **"what is preserved? what is distorted?"** — match to the purpose described.
- For tech FRQs: name the **technology + the data it produces + one ethical concern** (e.g., "GPS pings → individual mobility data → privacy / surveillance").
- For "appropriate map type" FRQs: 4-mark answers usually require *naming the type AND defending the choice with a specific data property* (continuous vs. discrete, rate vs. count).
      `
    },
    {
      id: 'hgintrog2-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "A public-health team wants to map daily PM2.5 air-pollution readings across Los Angeles County. The pollution varies smoothly across space. The most appropriate thematic map type is:",
            options: [
              "Choropleth shaded by ZIP code",
              "Isoline (isopleth) map of equal pollution values",
              "Cartogram with ZIP codes resized by population",
              "Dot density map with one dot per resident"
            ],
            correctAnswer: 1,
            explanation: "PM2.5 is a continuous field (it doesn't 'jump' at ZIP boundaries). Isolines best represent continuous phenomena; choropleth would impose artificial breaks at administrative units."
          },
          {
            question: "An MCQ stimulus shows a map with U.S. states resized so larger states represent more 2020 electoral votes. Texas and Florida balloon while Wyoming and Vermont shrink. This is a:",
            options: [
              "Choropleth map",
              "Cartogram",
              "Isoline map",
              "Mercator projection"
            ],
            correctAnswer: 1,
            explanation: "Resizing units to reflect a variable while distorting their shape is the defining feature of a cartogram — useful for dramatizing political weight or other counts."
          }
        ]
      }
    }
  ]
}
