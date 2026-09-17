/**
 * BOONE CHRONICLES V2 - STORY BIBLE & SINGLE SOURCE OF TRUTH
 * 
 * CRITICAL ARCHITECTURAL REQUIREMENT:
 * 1. THE BOONE CHRONICLES: Fictional narrative/story-world of the character Ryker Boone.
 * 2. THE RYKER BOONE RECORDING PROJECT: Real-world history of the music project, releases,
 *    distributor records, and creative development beginning in 2024.
 * 
 * Never confuse fictional biography with verifiable real-world biography.
 */

export interface BooneCharacter {
  id: string;
  name: string;
  role: string;
  status: 'active' | 'in_loving_memory' | 'upcoming';
  born?: number;
  joinedFamily?: number;
  appearance: string;
  personalityOrTone?: string;
  narrativeRole: string;
  narrativeRule?: string;
  image?: string;
}

export interface StoryPhase {
  id: string;
  roman: string;
  title: string;
  period: string;
  summary: string;
  events: string[];
  visualAtmosphere: string;
  emotionalCentre?: string;
}

export type EventType = 'FICTIONAL_STORY_EVENT' | 'REAL_PROJECT_EVENT';
export type StoryEventStatus = 'FICTIONAL CANON' | 'CANON' | 'PROPOSED' | 'LEGACY';
export type RealProjectStatus = 'VERIFIED' | 'CURRENT' | 'PLANNED';

export interface ChronicleEvent {
  year: string;
  title: string;
  description: string;
  phaseId?: string;
  type: EventType;
  status?: StoryEventStatus | RealProjectStatus;
  source?: string;
  date?: string;
  location?: string;
  characters?: string[];
  badge?: string;
}

export interface VisualJourneyStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  era: string;
  tag: string;
}

export interface MusicStoryConnection {
  storyElement: string;
  storyContext: string;
  connectedMusic: string;
  album: string;
  releaseDate: string;
  connectionType: string;
  description: string;
  status?: 'APPROVED_CANON' | 'PROPOSED';
  source?: string;
}

// 1. CANONICAL CHARACTERS
export const BOONE_CHARACTERS: Record<string, BooneCharacter> = {
  ryker: {
    id: "ryker",
    name: "Ryker Boone",
    role: "Central character / Country recording artist",
    status: "active",
    born: 1989,
    appearance: "Dark curly hair, trimmed beard, modern rugged country appearance, black felt cowboy hat, worn denim, leather jackets, boots.",
    personalityOrTone: "Protective father, reflective, loyal, reserved, dry humour, emotionally resilient.",
    narrativeRole: "Central protagonist navigating roots, fatherhood, profound grief, and the discovery of second chances.",
    image: "/images/ryker_facing_right.png"
  },
  joyce: {
    id: "joyce",
    name: "Joyce Boone",
    role: "Ryker's first wife & Graham's mother",
    status: "in_loving_memory",
    appearance: "Warm, natural, understated rural Tennessee aesthetic, soft knit sweaters, gentle smile.",
    narrativeRole: "Ryker's foundational love, early muse, and Graham's mother. Her memory remains an honored, permanent anchor in their lives.",
    narrativeRule: "Never reduce Joyce simply to tragedy. Show family happiness before the loss.",
    image: "/images/ryker_joyce_bettie_porch.png"
  },
  bettie: {
    id: "bettie",
    name: "Bettie",
    role: "Original Boone family dog",
    status: "in_loving_memory",
    appearance: "Faithful hound companion.",
    narrativeRole: "Symbol of the original family home, front porch twilight, and early Boone years."
  },
  graham: {
    id: "graham",
    name: "Graham Boone",
    role: "Ryker and Joyce's son",
    status: "active",
    born: 2019,
    appearance: "Curious, bright boy with sandy curls, mini trucker hats, and boots.",
    personalityOrTone: "Warm, energetic, eager to learn, bonded deeply with his father.",
    narrativeRole: "The central emotional anchor of Ryker's story and single-fatherhood journey.",
    image: "/images/consistent/ryker_teaching_graham.png"
  },
  penny: {
    id: "penny",
    name: "Penny",
    role: "Family puppy (joined 2024)",
    status: "active",
    joinedFamily: 2024,
    appearance: "Cream English miniature Dachshund with big soulful dark eyes, velvety floppy ears, and sleek cream-honey coat.",
    narrativeRole: "Represents returning joy, laughter, and domestic light after the family's difficult years.",
    image: "/images/penny/penny_big_eyes_portrait.jpg"
  },
  kate: {
    id: "kate",
    name: "Kate",
    role: "Ryker's fiancée (Marrying January 2027)",
    status: "active",
    appearance: "Brunette, radiant warm smile, natural modern-country elegance.",
    narrativeRole: "A second chance at love and a new family chapter for Ryker and Graham. Never replaces Joyce; represents a new dawn.",
    narrativeRule: "The story must never suggest that Kate replaces Joyce. Joyce remains an important part of Ryker and Graham's history.",
    image: "/images/kate_character_montage.jpg"
  },
  poppy: {
    id: "poppy",
    name: "Poppy",
    role: "Chestnut ranch horse",
    status: "active",
    appearance: "Gentle, muscular chestnut ranch gelding.",
    narrativeRole: "Connected primarily with Ryker and Graham during ranch mornings and pasture rides.",
    image: "/images/consistent/ryker_riding_poppy.png"
  }
};

// Helper: Calculate Graham's dynamic age based on story year
export function getGrahamAge(storyYear: number): number {
  return Math.max(0, storyYear - 2019);
}

// 2. THE FOUR STORY-WORLD PHASES
export const STORY_PHASES: StoryPhase[] = [
  {
    id: "phase-1",
    roman: "PHASE I",
    title: "ROOTS & JOYCE",
    period: "2010–2020",
    summary: "Working-class roots in Columbia, Tennessee, early honky-tonk stages, falling in love with Joyce, welcoming Bettie, marriage in 2018, and the birth of son Graham in 2019.",
    events: [
      "Columbia, Tennessee roots and working-class upbringing",
      "Small bar acoustic performances across Middle Tennessee",
      "Nashville songwriting ambitions and songwriter rounds",
      "Meeting future wife Joyce at an intimate Nashville gig",
      "Bettie joins the family as their loyal porch dog",
      "Ryker and Joyce marry on the ranch in 2018",
      "Graham is born in 2019, bringing new purpose",
      "Foundational family life at the cabin and ranch"
    ],
    visualAtmosphere: "Warm Tennessee evenings, porch lights, vintage pickup trucks, acoustic guitar, Joyce, Bettie, baby/young Graham, golden-hour photography."
  },
  {
    id: "phase-2",
    roman: "PHASE II",
    title: "THE VALLEY",
    period: "2021–2023",
    summary: "The heartbreaking loss of Joyce and their faithful dog Bettie. Ryker becomes a single father, raising Graham through seasons of grief, hard ranch work, quiet responsibility, and a slow return to songwriting.",
    emotionalCentre: "Grief, fatherhood, responsibility, memory, perseverance.",
    events: [
      "Tragic passing of wife Joyce and family dog Bettie",
      "Ryker steps into single fatherhood with quiet determination",
      "Raising Graham on the ranch while processing profound loss",
      "Working the land and providing a solid foundation for his son",
      "Music becomes an essential, honest emotional outlet",
      "Quiet, late-night return to acoustic songwriting"
    ],
    visualAtmosphere: "Winter morning light, empty porch swing, quiet cabin interior, Ryker and Graham together, old photographs, acoustic guitar, muted Tennessee landscapes."
  },
  {
    id: "phase-3",
    roman: "PHASE III",
    title: "REBIRTH",
    period: "2024–2025",
    summary: "Healing takes root on the ranch. Music becomes central again as Graham grows alongside his father's songs. Cream English miniature Dachshund puppy Penny joins the family, bringing laughter and new light back into the cabin.",
    events: [
      "Ryker begins rebuilding life with renewed purpose",
      "Music and picking return to the center of daily life",
      "Graham grows and learns guitar alongside his father",
      "Penny, a cream English miniature Dachshund, joins the home",
      "Boundless puppy laughter and playful warmth return to the cabin",
      "The songs that will shape the Ryker Boone catalog take form"
    ],
    visualAtmosphere: "Gradually warming light, sunlit ranch mat, puppy antics with Penny, songwriting notebooks, vibrant pastures."
  },
  {
    id: "phase-4",
    roman: "PHASE IV",
    title: "A NEW DAWN",
    period: "2025–2027",
    summary: "Ryker meets Kate, discovering that the heart can love again. Their relationship blossoms into a deep family bond embracing both Ryker and Graham, leading to their engagement, January 2027 wedding, and the celebratory album Our Love Our Forever.",
    events: [
      "Ryker meets Kate; relationship develops naturally with warmth and grace",
      "Kate embraces both Ryker and Graham, building strong family bonds",
      "Engagement on the Tennessee ranch",
      "Family ranch days with Graham, Penny, and Poppy",
      "January 2027 wedding celebration on the ranch",
      "A joyful new family chapter anchored by honor, love, and hope"
    ],
    visualAtmosphere: "Open sunlit Tennessee meadows, warmth around the family stone campfire, blended family joy, wedding preparations under the ranch oak tree."
  }
];

// 3. FICTIONAL STORY TIMELINE EVENTS
export const BOONE_CHRONICLES_STORY_EVENTS: ChronicleEvent[] = [
  {
    year: "2010",
    title: "Acoustic Beginnings",
    description: "Ryker begins playing acoustic sets in local bars and honky-tonks around Columbia, Tennessee.",
    phaseId: "phase-1",
    type: "FICTIONAL_STORY_EVENT",
    status: "FICTIONAL CANON",
    source: "Boone Chronicles Story Bible",
    location: "Columbia, TN"
  },
  {
    year: "2012",
    title: "Nashville Ambitions",
    description: "Nashville stages become part of his musical ambitions as he hones his songwriting craft.",
    phaseId: "phase-1",
    type: "FICTIONAL_STORY_EVENT",
    status: "FICTIONAL CANON",
    source: "Boone Chronicles Story Bible",
    location: "Nashville, TN"
  },
  {
    year: "2013",
    title: "Working-Class Grit",
    description: "Working-class years in Middle Tennessee industries shape his blue-collar pride and musical voice.",
    phaseId: "phase-1",
    type: "FICTIONAL_STORY_EVENT",
    status: "FICTIONAL CANON",
    source: "Boone Chronicles Story Bible"
  },
  {
    year: "2014",
    title: "Return to the Pen",
    description: "Returns seriously to writing songs rooted in real small-town stories and personal perseverance.",
    phaseId: "phase-1",
    type: "FICTIONAL_STORY_EVENT",
    status: "FICTIONAL CANON",
    source: "Boone Chronicles Story Bible"
  },
  {
    year: "2016",
    title: "Meeting Joyce",
    description: "Early Nashville performances lead to meeting his future wife, Joyce, who becomes his greatest muse.",
    phaseId: "phase-1",
    type: "FICTIONAL_STORY_EVENT",
    status: "FICTIONAL CANON",
    source: "Boone Chronicles Story Bible",
    characters: ["Ryker", "Joyce"]
  },
  {
    year: "2018",
    title: "Ranch Wedding",
    description: "Ryker and Joyce marry on their rustic Middle Tennessee ranch, welcoming Bettie into their home.",
    phaseId: "phase-1",
    type: "FICTIONAL_STORY_EVENT",
    status: "FICTIONAL CANON",
    source: "Boone Chronicles Story Bible",
    characters: ["Ryker", "Joyce", "Bettie"]
  },
  {
    year: "2019",
    title: "Graham is Born",
    description: "Welcomes son Graham; family life on the ranch becomes Ryker's greatest pride and priority.",
    phaseId: "phase-1",
    type: "FICTIONAL_STORY_EVENT",
    status: "FICTIONAL CANON",
    source: "Boone Chronicles Story Bible",
    characters: ["Ryker", "Joyce", "Graham"]
  },
  {
    year: "2021",
    title: "The Valley of Grief",
    description: "The Boone family enters its most difficult chapter with the tragic loss of Joyce and faithful dog Bettie.",
    phaseId: "phase-2",
    type: "FICTIONAL_STORY_EVENT",
    status: "FICTIONAL CANON",
    source: "Boone Chronicles Story Bible",
    characters: ["Ryker", "Joyce", "Bettie", "Graham"]
  },
  {
    year: "2022",
    title: "Solo Fatherhood",
    description: "Ryker focuses wholeheartedly on raising young Graham alone, rebuilding life through hard work and quiet courage.",
    phaseId: "phase-2",
    type: "FICTIONAL_STORY_EVENT",
    status: "FICTIONAL CANON",
    source: "Boone Chronicles Story Bible",
    characters: ["Ryker", "Graham"]
  },
  {
    year: "2023",
    title: "Songs of the Soil",
    description: "Songwriting gradually returns as an emotional outlet, giving voice to survival, loss, and quiet hope.",
    phaseId: "phase-2",
    type: "FICTIONAL_STORY_EVENT",
    status: "FICTIONAL CANON",
    source: "Boone Chronicles Story Bible",
    characters: ["Ryker"]
  },
  {
    year: "2024",
    title: "Little Penny Arrives",
    description: "Penny, a cream English miniature Dachshund puppy, arrives and brings playful energy and laughter back to the household.",
    phaseId: "phase-3",
    type: "FICTIONAL_STORY_EVENT",
    status: "FICTIONAL CANON",
    source: "Boone Chronicles Story Bible",
    characters: ["Ryker", "Graham", "Penny"]
  },
  {
    year: "2024",
    title: "A New Musical Chapter",
    description: "A new musical chapter begins as Ryker channels years of lived experience into a rich catalog of songs.",
    phaseId: "phase-3",
    type: "FICTIONAL_STORY_EVENT",
    status: "FICTIONAL CANON",
    source: "Boone Chronicles Story Bible"
  },
  {
    year: "2025",
    title: "Meeting Kate",
    description: "Ryker meets Kate; an honest, warm relationship develops naturally with deep respect for his family history.",
    phaseId: "phase-4",
    type: "FICTIONAL_STORY_EVENT",
    status: "FICTIONAL CANON",
    source: "Boone Chronicles Story Bible",
    characters: ["Ryker", "Kate", "Graham"]
  },
  {
    year: "2026",
    title: "Engagement on the Ranch",
    description: "Ryker and Kate become engaged; family ranch life with Graham and Penny thrives with renewed joy.",
    phaseId: "phase-4",
    type: "FICTIONAL_STORY_EVENT",
    status: "FICTIONAL CANON",
    source: "Boone Chronicles Story Bible",
    characters: ["Ryker", "Kate", "Graham", "Penny"]
  },
  {
    year: "JAN 2027",
    title: "Wedding Day",
    description: "Ryker and Kate marry on the Tennessee ranch, opening a beautiful new family chapter together.",
    phaseId: "phase-4",
    type: "FICTIONAL_STORY_EVENT",
    status: "FICTIONAL CANON",
    source: "Boone Chronicles Story Bible",
    characters: ["Ryker", "Kate", "Graham", "Penny"]
  },
  {
    year: "FEB 2027",
    title: "Our Love Our Forever",
    description: "The wedding-era album 'Our Love Our Forever' accompanies the beginning of their married chapter.",
    phaseId: "phase-4",
    type: "FICTIONAL_STORY_EVENT",
    status: "FICTIONAL CANON",
    source: "Boone Chronicles Story Bible",
    badge: "WEDDING ALBUM"
  }
];

// 4. REAL-WORLD PROJECT HISTORY (VERIFIED PROVENANCE & CLEAR EVENT STATUS)
// STATUS DEFINITIONS:
// - VERIFIED: The event has already occurred and is supported by project/distributor records.
// - CURRENT: Current active project information.
// - PLANNED: Future release/project information confirmed by creator, not completed achievements.
export const REAL_PROJECT_EVENTS: ChronicleEvent[] = [
  {
    year: "2024",
    title: "Project Genesis & Brand Creation",
    description: "Ryker Boone is established by SingIt Pop as a contemporary country recording-artist project, combining modern country songwriting, character worldbuilding, and master branding (EST. 2024).",
    type: "REAL_PROJECT_EVENT",
    status: "VERIFIED",
    source: "SingIt Pop Project Records (EST. 2024)",
    badge: "PROJECT ORIGIN"
  },
  {
    year: "2025",
    title: "Catalog Production & Visual Storytelling",
    description: "Production of the initial multi-album Ryker Boone catalogue, digital character visual archives, and high-fidelity audio masters combining original songwriting development with modern digital audio and AI-assisted production tools.",
    type: "REAL_PROJECT_EVENT",
    status: "VERIFIED",
    source: "Studio Master Production Archive",
    badge: "CATALOG PRODUCTION"
  },
  {
    year: "JUN 2026",
    date: "2026-06-03",
    title: "Debut Album: Boots in the Autumn Dust",
    description: "Official debut studio album 'Boots in the Autumn Dust' (12 tracks) released to global streaming platforms via independent label SINGITPOP RECORDS (Distributor Date: June 3, 2026).",
    type: "REAL_PROJECT_EVENT",
    status: "VERIFIED",
    source: "Distributor release record (June 3, 2026)",
    badge: "DEBUT RELEASE"
  },
  {
    year: "JUL 2026",
    date: "2026-07-28",
    title: "Studio Album: Golden Hour State of Mind",
    description: "Second studio album 'Golden Hour State of Mind' (12 tracks) released July 28, 2026, delivering radio-ready country-pop anthems.",
    type: "REAL_PROJECT_EVENT",
    status: "VERIFIED",
    source: "Distributor release record (July 28, 2026)",
    badge: "STUDIO RELEASE"
  },
  {
    year: "SEP 2026",
    date: "2026-09-04",
    title: "Studio Album: September Roads",
    description: "'September Roads' (13 tracks) released September 4, 2026, delivering Heartland country-pop storytelling.",
    type: "REAL_PROJECT_EVENT",
    status: "VERIFIED",
    source: "Distributor release record (September 4, 2026)",
    badge: "STUDIO RELEASE"
  },
  {
    year: "SEP 2026",
    date: "2026-09-18",
    title: "Studio Album: September Turns Gold",
    description: "'September Turns Gold' (13 tracks) released September 18, 2026, featuring acoustic warmth and rustic country picking.",
    type: "REAL_PROJECT_EVENT",
    status: "CURRENT",
    source: "Distributor release record (September 18, 2026)",
    badge: "CURRENT RELEASE"
  },
  {
    year: "OCT 2026",
    date: "2026-10-02",
    title: "Studio Album: When The Lights Go Gold",
    description: "Modern country-pop crossover album 'When The Lights Go Gold' (12 tracks) scheduled for release on October 2, 2026.",
    type: "REAL_PROJECT_EVENT",
    status: "PLANNED",
    source: "Distributor release schedule (October 2, 2026)",
    badge: "PLANNED RELEASE"
  },
  {
    year: "NOV 2026",
    date: "2026-11-27",
    title: "Holiday Album: Christmas All Year Long",
    description: "Festive 12-track Americana holiday collection scheduled for release on November 27, 2026, featuring acoustic warmth and traditional steel guitar.",
    type: "REAL_PROJECT_EVENT",
    status: "PLANNED",
    source: "Distributor release schedule (November 27, 2026)",
    badge: "PLANNED RELEASE"
  },
  {
    year: "JAN 2027",
    title: "Studio Album: The Way You Love Me",
    description: "Devotional country record planned for January 2027, anchored by the poignant acoustic tribute track 'Joyce'.",
    type: "REAL_PROJECT_EVENT",
    status: "PLANNED",
    source: "Confirmed project release plan (January 2027)",
    badge: "PLANNED RELEASE"
  },
  {
    year: "FEB 2027",
    title: "Wedding Edition: Our Love Our Forever",
    description: "Celebratory 17-track wedding album planned for February 2027, featuring 5 custom ceremony-ready Wedding Remixes.",
    type: "REAL_PROJECT_EVENT",
    status: "PLANNED",
    source: "Confirmed project release plan (February 2027)",
    badge: "PLANNED RELEASE"
  },
  {
    year: "SPRING 2027",
    title: "Distributor Release Pipeline",
    description: "'Backroads In Bloom' and 'Wide Open Roads' scheduled in the official distributor release pipeline for Spring 2027.",
    type: "REAL_PROJECT_EVENT",
    status: "PLANNED",
    source: "Distributor release pipeline",
    badge: "PLANNED PIPELINE"
  }
];

// 5. CHRONOLOGICAL VISUAL JOURNEY (SECTION 10 SPECIFICATION)
export const VISUAL_JOURNEY_STEPS: VisualJourneyStep[] = [
  {
    step: "01",
    title: "ROOTS",
    subtitle: "Young Ryker / Tennessee / Acoustic Guitar",
    description: "Early days practicing on an acoustic guitar in Columbia, discovering the soul of country storytelling.",
    image: "/images/consistent/young-ryker-roots.jpg",
    era: "2010–2015",
    tag: "Origins"
  },
  {
    step: "02",
    title: "JOYCE",
    subtitle: "Ryker + Joyce + Bettie",
    description: "Quiet twilight moments on the cabin porch with his first wife Joyce and their faithful dog Bettie.",
    image: "/images/ryker_joyce_bettie_porch.png",
    era: "2016–2018",
    tag: "Early Love"
  },
  {
    step: "03",
    title: "FAMILY",
    subtitle: "Ryker + Joyce + Graham",
    description: "Cabin warmth and quiet evening laughter after welcoming their newborn son, Graham.",
    image: "/images/consistent/ryker_family_quiet_time.png",
    era: "2019–2020",
    tag: "Ranch Days"
  },
  {
    step: "04",
    title: "THE VALLEY",
    subtitle: "Ryker + Graham",
    description: "Stacking firewood in late autumn—facing profound loss with quiet resilience and fatherly devotion.",
    image: "/images/consistent/family_chopping_wood.png",
    era: "2021–2023",
    tag: "Resilience"
  },
  {
    step: "05",
    title: "PENNY",
    subtitle: "Graham + Penny / Family Warmth Returning",
    description: "Little Penny, a cream miniature Dachshund, brings playful energy and joyful laughter back into the cabin.",
    image: "/images/penny/penny_big_eyes_portrait.jpg",
    era: "2024",
    tag: "Rebirth"
  },
  {
    step: "06",
    title: "KATE",
    subtitle: "Ryker + Kate",
    description: "Ryker's fiancée Kate enters their world, bringing radiant warmth, kindness, and devotion into their lives.",
    image: "/images/kate_character_montage.jpg",
    era: "2025",
    tag: "New Dawn"
  },
  {
    step: "07",
    title: "NEW FAMILY",
    subtitle: "Ryker + Kate + Graham + Penny",
    description: "Gathered around the stone campfire at twilight, sharing songs, stories, and gratitude under the stars.",
    image: "/images/consistent/family_campfire_jam.png",
    era: "2026",
    tag: "Together"
  },
  {
    step: "08",
    title: "THE ROAD AHEAD",
    subtitle: "January 2027 Wedding",
    description: "Looking forward to their January 2027 wedding on the ranch and the celebratory release of Our Love Our Forever.",
    image: "/images/consistent/family_ranch_picnic.png",
    era: "JANUARY 2027",
    tag: "The Road Ahead"
  }
];

// 6. MUSIC & STORY CONNECTIONS (ONLY CURRENTLY APPROVED CANONICAL CONNECTIONS)
export const MUSIC_STORY_CONNECTIONS: MusicStoryConnection[] = [
  {
    storyElement: "Memory of Joyce",
    storyContext: "Honoring the memory of Graham's mother and Ryker's early love without reducing her simply to tragedy.",
    connectedMusic: '"Joyce" (Acoustic Tribute Track)',
    album: "The Way You Love Me",
    releaseDate: "January 2027",
    connectionType: "Acoustic tribute / story-world connection",
    description: "An intimate, acoustic guitar and fiddle ballad dedicated to the enduring memory and love of his late wife.",
    status: "APPROVED_CANON",
    source: "Boone Chronicles Specification"
  },
  {
    storyElement: "Ryker + Kate Wedding",
    storyContext: "Celebrating new beginnings, lifelong devotion, and the January 2027 wedding on the Tennessee ranch.",
    connectedMusic: "Our Love Our Forever (17 Tracks)",
    album: "Our Love Our Forever – Country Wedding Edition",
    releaseDate: "February 2027",
    connectionType: "Wedding-era album / celebration soundtrack",
    description: "A high-energy, 130 BPM country-pop wedding celebration record accompanied by 5 custom ceremony-ready Wedding Remixes.",
    status: "APPROVED_CANON",
    source: "Boone Chronicles Specification"
  }
];

// 7. PRESS KIT SPECIFICATION DATA (SECTION 14)
export const PRESS_KIT_DATA = {
  artistProject: {
    title: "Ryker Boone Recording Project",
    nature: "Independent Country Recording Artist & Creative Character",
    established: "2024",
    label: "SINGITPOP RECORDS",
    genre: "Country / Americana / Heartland Pop",
    officialWebsite: "https://www.rykerboone.com",
    shortDescription: "Ryker Boone is a fictional country recording artist and creative character project established in 2024, created and managed by SingIt Pop. The project combines modern country songwriting, visual worldbuilding, and the immersive story-world of The Boone Chronicles.",
    longDescription: "Established in 2024 by SingIt Pop, the Ryker Boone recording project represents a contemporary synthesis of country music storytelling and cinematic digital worldbuilding. Released via independent label SINGITPOP RECORDS, the catalogue spans heartland country, modern crossover pop, festive Americana, and acoustic wedding collections. Modern country production combining original creative direction, songwriting development and AI-assisted production tools.",
    discography: [
      { title: "Boots in the Autumn Dust", releaseDate: "June 3, 2026", tracks: 12, label: "SINGITPOP RECORDS", status: "VERIFIED" },
      { title: "Golden Hour State of Mind", releaseDate: "July 28, 2026", tracks: 12, label: "SINGITPOP RECORDS", status: "VERIFIED" },
      { title: "September Roads", releaseDate: "September 4, 2026", tracks: 13, label: "SINGITPOP RECORDS", status: "VERIFIED" },
      { title: "September Turns Gold", releaseDate: "September 18, 2026", tracks: 13, label: "SINGITPOP RECORDS", status: "CURRENT" },
      { title: "When The Lights Go Gold", releaseDate: "October 2, 2026", tracks: 12, label: "SINGITPOP RECORDS", status: "PLANNED" },
      { title: "Christmas All Year Long", releaseDate: "November 27, 2026", tracks: 12, label: "SINGITPOP RECORDS", status: "PLANNED" },
      { title: "The Way You Love Me", releaseDate: "January 2027", tracks: 13, label: "SINGITPOP RECORDS", status: "PLANNED" },
      { title: "Our Love Our Forever", releaseDate: "February 2027", tracks: 17, label: "SINGITPOP RECORDS", status: "PLANNED" }
    ]
  },
  booneChronicles: {
    title: "The Boone Chronicles Synopsis",
    nature: "Canonical Fictional Story-World & Character Universe",
    synopsis: "The Boone Chronicles is the evolving narrative universe behind Ryker Boone's music. Following Ryker from his working-class beginnings in Columbia, Tennessee through marriage with Joyce, the birth of his son Graham, tragic loss, single fatherhood, and ultimately finding love again with Kate, the Chronicles provide an emotionally resonant backdrop for the music.",
    coreThemes: ["Family & Fatherhood", "Blue-Collar Resilience", "Love, Loss & Memory", "Second Chances", "Open Roads & Small-Town America"]
  }
};

