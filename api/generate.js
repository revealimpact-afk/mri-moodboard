const THEME_PROMPTS = {
  "romantique": {
    table: "Elegant romantic wedding table setting, ivory and blush pink tablecloth, white roses and peony centerpiece, crystal candelabra with tall candles, gold cutlery, champagne glasses, soft candlelight, delicate lace details, satin ribbon accents, professional editorial wedding photography, high quality",
    arch: "Romantic wedding ceremony arch covered in white roses and pink peonies, draped ivory fabric and tulle, crystal garlands, soft natural light, garden setting, elegant and timeless, editorial wedding photography, high quality",
    floral: "Close-up romantic wedding floral arrangement with white roses, blush peonies, baby breath, eucalyptus, ivory satin ribbon, crystal vase, soft warm lighting, professional florist photography, high quality"
  },
  "vintage": {
    table: "Vintage retro wedding table setting, cream lace tablecloth, mismatched antique china, gold patina cutlery, old rose centerpiece in vintage urn, sepia toned candleholders, aged books decor, warm film grain, editorial wedding photography, high quality",
    arch: "Vintage wedding ceremony arch with aged wood frame, draped antique lace, old garden roses in blush and cream, antique mirrors and gold frames, nostalgic warm light, editorial wedding photography, high quality",
    floral: "Close-up vintage wedding bouquet with old garden roses, dried flowers, dusty miller, antique brooch detail, wrapped in lace ribbon, warm sepia toned light, professional florist photography, high quality"
  },
  "shabby": {
    table: "Shabby chic wedding table with distressed white wood, pale pink and mint green details, mismatched vintage teacups, lace doilies, pastel flower arrangement, bird cage decor, soft romantic light, editorial wedding photography, high quality",
    arch: "Shabby chic wedding arch with weathered white painted wood, climbing roses in pale pink, hanging vintage birdcages, lace curtain drapes, garden backdrop, soft pastel light, editorial wedding photography, high quality",
    floral: "Close-up shabby chic floral arrangement with pale pink roses, mint green hydrangea, white ranunculus, distressed painted pot, lace ribbon, soft natural light, professional florist photography, high quality"
  },
  "champetre": {
    table: "French countryside wedding table in a field, linen tablecloth, wildflower centerpiece with lavender and daisies, mason jar candles, straw bales nearby, wooden plates, warm golden hour light, editorial wedding photography, high quality",
    arch: "Countryside wedding ceremony arch of natural branches, decorated with wildflowers, wheat sheaves, lavender bundles, fabric bunting flags, green meadow backdrop, warm summer light, editorial wedding photography, high quality",
    floral: "Close-up countryside wedding bouquet with wildflowers, lavender, daisies, wheat ears, wrapped in burlap and twine, natural green field background, golden hour light, professional florist photography, high quality"
  },
  "rustique": {
    table: "Rustic woodland wedding table with heavy wood planks, dark green runner, burgundy roses and forest greenery centerpiece, antler decor, pillar candles, iron lanterns, copper accents, warm firelight, editorial wedding photography, high quality",
    arch: "Rustic wedding ceremony arch from thick natural logs, burgundy flowers, dark green foliage, moss, hanging lanterns, forest backdrop, warm moody light, editorial wedding photography, high quality",
    floral: "Close-up rustic wedding arrangement with deep burgundy roses, forest ferns, pinecones, bark wrapped vase, leather ribbon detail, dark moody lighting, professional florist photography, high quality"
  },
  "boheme": {
    table: "Bohemian wedding table on the ground with Persian rugs, terracotta plates, macrame placemats, pampas grass and dried flower centerpiece, brass candleholders, mustard and sage accents, warm sunset light, editorial wedding photography, high quality",
    arch: "Boho wedding ceremony arch with macrame backdrop, pampas grass arrangements, terracotta pots, dreamcatchers, flowing fabric in earthy tones, desert sunset backdrop, editorial wedding photography, high quality",
    floral: "Close-up bohemian wedding bouquet with pampas grass, dried palm leaves, terracotta roses, eucalyptus, wrapped in mustard fabric, warm golden light, professional florist photography, high quality"
  },
  "tropical": {
    table: "Tropical exotic wedding table with dark wood, monstera leaf placemats, fuchsia orchid and coral ginger flower centerpiece, gold pineapple decor, bamboo charger plates, lush green jungle backdrop, warm tropical light, editorial wedding photography, high quality",
    arch: "Tropical wedding ceremony arch with bamboo frame, monstera leaves, hot pink bougainvillea, bird of paradise flowers, ocean beach backdrop, vibrant tropical sunset, editorial wedding photography, high quality",
    floral: "Close-up tropical wedding floral arrangement with fuchsia orchids, coral ginger flowers, monstera leaves, palm fronds, gold vase, vibrant tropical light, professional florist photography, high quality"
  },
  "minimaliste": {
    table: "Minimalist modern wedding table with pure white tablecloth, single stem flower in glass vase, clear glass plates, simple white candles, clean geometric lines, sage green napkin accent, bright natural light, editorial wedding photography, high quality",
    arch: "Minimalist wedding ceremony arch, simple geometric metal frame in matte white, single branch of greenery, clean white backdrop, bright natural light, modern and elegant, editorial wedding photography, high quality",
    floral: "Close-up minimalist wedding arrangement, single white calla lily in clear glass vase, sage green eucalyptus branch, clean white background, bright even light, professional florist photography, high quality"
  },
  "industriel": {
    table: "Industrial urban wedding table in loft with exposed brick, concrete runner, copper geometric terrariums with succulents, Edison bulb string lights, dark metal chairs, amber candles, moody warm light, editorial wedding photography, high quality",
    arch: "Industrial wedding ceremony arch with black metal geometric frame, exposed copper pipes, Edison bulb garland, concrete floor, brick wall backdrop, warm moody lighting, editorial wedding photography, high quality",
    floral: "Close-up industrial wedding arrangement with dark flowers, succulents, copper geometric holder, concrete pot, brick texture background, warm Edison bulb light, professional florist photography, high quality"
  },
  "artdeco": {
    table: "Art Deco Gatsby wedding table, black tablecloth, gold geometric patterns, tall gold candelabra centerpiece, emerald green velvet napkins, crystal champagne coupes, sequin runner, dramatic spotlight, editorial wedding photography, high quality",
    arch: "Art Deco wedding ceremony arch with gold geometric frame, black draping, feather and crystal details, emerald green accents, dramatic spotlight, Great Gatsby atmosphere, editorial wedding photography, high quality",
    floral: "Close-up Art Deco wedding arrangement with white calla lilies, black feathers, gold geometric vase, crystal beading, emerald accents, dramatic dark background with gold light, professional florist photography, high quality"
  },
  "glamour": {
    table: "Glamorous luxury wedding table, champagne gold tablecloth, massive crystal chandelier above, tall crystal candelabra, abundant white roses and orchids, silver charger plates, mirror accents, sparkling elegant light, editorial wedding photography, high quality",
    arch: "Glamorous luxury wedding arch with cascading white orchids and roses, crystal curtain backdrop, gold and silver metallic accents, dramatic spotlighting, opulent ballroom, editorial wedding photography, high quality",
    floral: "Close-up glamorous wedding floral arrangement with white orchids, champagne roses, crystal and pearl accents, silver urn vase, sparkling chandelier light, professional florist photography, high quality"
  },
  "provencal": {
    table: "Provencal wedding table outdoors under olive trees, lavender bundles centerpiece, yellow and white wildflowers, terracotta pottery, gingham napkins, olive oil bottles as gifts, warm Mediterranean golden light, editorial wedding photography, high quality",
    arch: "Provencal wedding ceremony arch with rustic wood, lavender garlands, olive branches, sunflowers, terracotta pots, Provence countryside backdrop, warm golden hour light, editorial wedding photography, high quality",
    floral: "Close-up Provencal wedding arrangement with lavender, sunflowers, olive branches, rosemary sprigs, terracotta pot, warm Mediterranean light, professional florist photography, high quality"
  },
  "nautique": {
    table: "Nautical beach wedding table, white tablecloth, navy blue and sand striped runner, starfish and shell centerpiece, rope knot napkin rings, coral accent flowers, driftwood candle holder, ocean backdrop, bright coastal light, editorial wedding photography, high quality",
    arch: "Nautical beach wedding ceremony arch with white driftwood frame, draped white fabric, navy blue rope accents, starfish and coral details, sandy beach with ocean waves, bright sunny coastal light, editorial wedding photography, high quality",
    floral: "Close-up nautical beach wedding bouquet with white roses, blue thistle, coral ranunculus, seashells, navy ribbon with rope detail, ocean backdrop, bright coastal light, professional florist photography, high quality"
  },
  "jardin": {
    table: "English garden wedding table set in rose garden, ivory tablecloth, soft pink garden roses and mint hydrangeas centerpiece, fine porcelain teacups, silver cake stand, pastel peach napkins, dappled sunlight through trees, editorial wedding photography, high quality",
    arch: "English garden wedding arch covered in climbing pink roses, white jasmine, green ivy, wrought iron frame, manicured hedge backdrop, English country estate, soft natural light, editorial wedding photography, high quality",
    floral: "Close-up English garden wedding arrangement with pink garden roses, mint hydrangea, peach ranunculus, ivy, silver teapot vase, dappled garden light, professional florist photography, high quality"
  },
  "medieval": {
    table: "Medieval castle wedding banquet, long wooden trestle table, burgundy velvet runner, tall iron candelabra with dripping candles, gold chalices, dark red roses and ferns, stone wall backdrop, warm candlelight, editorial wedding photography, high quality",
    arch: "Medieval castle wedding ceremony arch in stone courtyard, iron frame with burgundy velvet draping, gold crown detail, dark red roses, green ivy on stone walls, torch light, dramatic atmosphere, editorial wedding photography, high quality",
    floral: "Close-up medieval wedding arrangement with deep burgundy roses, dark purple dahlias, gold crown accent, iron chalice vase, green ivy, warm candlelight on stone, professional florist photography, high quality"
  },
  "bridgerton": {
    table: "Bridgerton Regency wedding table in opulent ballroom, ivory damask tablecloth, Wedgwood blue china, lilac flower centerpiece with garden roses, fine porcelain teacups, crystal chandelier above, gold cutlery, pale pink napkins, soft romantic light, editorial wedding photography, high quality",
    arch: "Bridgerton Regency wedding ceremony arch with white columns, wisteria and lilac cascading flowers, ivory silk draping, ornate gold mirror, grand ballroom crystal chandeliers, soft romantic lighting, editorial wedding photography, high quality",
    floral: "Close-up Bridgerton Regency bouquet with soft lilac roses, Wedgwood blue hydrangea, pale pink peonies, wax seal on ivory ribbon, pearl pins, ornate gold background, soft warm light, professional florist photography, high quality"
  },
  "creole": {
    table: "Elegant Caribbean Creole wedding reception table, madras fabric tablecloth in red yellow green plaid, tropical flowers with anthurium heliconia bird of paradise and banana leaves, bamboo and raffia elements, golden accents, coconut palm backdrop, warm tropical sunset lighting, luxurious vibrant Caribbean celebration, editorial wedding photography, high quality",
    arch: "Caribbean Creole wedding ceremony arch of driftwood and bamboo, tropical flowers anthurium heliconia frangipani banana leaves, madras fabric draped ribbons in red yellow green, golden accents, ocean sunset backdrop, beach wedding Guadeloupe, editorial wedding photography, high quality",
    floral: "Close-up Caribbean Creole wedding floral arrangement with red anthurium, pink heliconia balisier, white frangipani, banana leaves, coconut palm fronds, golden vases, raffia bamboo details, madras plaid accents, warm tropical light, professional florist photography, high quality"
  }
};

const THEME_MAP = {
  "Romantique classique": "romantique",
  "Vintage / Rétro": "vintage",
  "Shabby Chic": "shabby",
  "Champêtre": "champetre",
  "Rustique": "rustique",
  "Bohème / Boho": "boheme",
  "Tropical / Exotique": "tropical",
  "Minimaliste": "minimaliste",
  "Industriel / Urbain": "industriel",
  "Art Déco / Gatsby": "artdeco",
  "Glamour / Luxe": "glamour",
  "Provençal": "provencal",
  "Bord de mer / Nautique": "nautique",
  "Jardin anglais": "jardin",
  "Médiéval / Château": "medieval",
  "Bridgerton / Régence": "bridgerton",
  "Créole / Antillais": "creole"
};

async function generateWithDallE(prompt, size, apiKey) {
  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: size,
      quality: "standard",
      response_format: "url"
    })
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `DALL-E API error ${response.status}`);
  }

  const data = await response.json();
  return data.data[0].url;
}

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST uniquement" });

  const { theme, bride, groom, date, mood, season } = req.body;
  if (!theme) return res.status(400).json({ error: "Thème requis" });

  const themeKey = THEME_MAP[theme];
  if (!themeKey || !THEME_PROMPTS[themeKey]) {
    return res.status(400).json({ error: "Thème inconnu: " + theme });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "OPENAI_API_KEY non configuré sur Vercel" });
  }

  const prompts = THEME_PROMPTS[themeKey];

  const coupleContext = [];
  if (bride && groom) coupleContext.push(`wedding of ${bride} and ${groom}`);
  if (season) coupleContext.push(`${season} season atmosphere`);
  if (mood) coupleContext.push(`${mood} mood`);
  const extra = coupleContext.length ? ", " + coupleContext.join(", ") : "";

  const views = [
    { key: "table", label: "Table & Réception", prompt: prompts.table + extra, size: "1792x1024" },
    { key: "arch", label: "Cérémonie & Arche", prompt: prompts.arch + extra, size: "1024x1024" },
    { key: "floral", label: "Art Floral", prompt: prompts.floral + extra, size: "1024x1792" }
  ];

  try {
    const results = await Promise.all(
      views.map(async (v) => {
        try {
          const url = await generateWithDallE(v.prompt, v.size, apiKey);
          return { key: v.key, label: v.label, url, size: v.size };
        } catch (err) {
          return { key: v.key, label: v.label, url: null, error: err.message };
        }
      })
    );

    return res.status(200).json({
      theme,
      bride: bride || null,
      groom: groom || null,
      date: date || null,
      images: results
    });
  } catch (err) {
    console.error("Generation error:", err);
    return res.status(500).json({ error: "Erreur de génération: " + err.message });
  }
};
