import { RYKER_ALBUM_LINKS } from "@/data/streamingLinks";

export interface StreamingLinks {
  spotify?: string;
  appleMusic?: string;
  amazonMusic?: string;
  youtube?: string;
}

export interface FeaturedReleaseItem {
  id: string;
  type: "Single" | "Album";
  title: string;
  subtitle?: string;
  tagline: string;
  genre: string;
  label: string;
  releaseDate: string; // ISO local datetime string e.g. "2026-12-04T00:00:00"
  displayDate: string;
  artwork: string | null; // Set to "/images/..." once dedicated artwork is added
  summary: string;
  extendedCopy?: string[];
  featuredTracks?: string[];
  /**
   * Optional TuneCore LinkShare smart link URL (add once live after release day).
   */
  linkShareUrl?: string;
  /**
   * Verified public streaming URLs ONLY.
   * Leave empty ({}) for unreleased tracks until working public links are confirmed.
   * Streaming buttons will only appear once BOTH the release date has passed AND a verified LinkShare or streaming URL is set.
   */
  streamingLinks: StreamingLinks;
  albumPageLink?: string; // Optional internal /music/... route (only linked after release)
  accentTheme?: "gold" | "frequency";
}

export function hasVerifiedStreamingLinks(item: FeaturedReleaseItem): boolean {
  const hasLinkShare =
    typeof item.linkShareUrl === "string" &&
    item.linkShareUrl.trim().length > 0 &&
    item.linkShareUrl !== "#";

  const hasDirectLinks = Object.values(item.streamingLinks).some(
    (url) => typeof url === "string" && url.trim().length > 0 && url !== "#"
  );

  return hasLinkShare || hasDirectLinks;
}

/**
 * Primary hero spotlight at the top of the Featured Releases page (/support).
 * Rotate this object whenever you want to promote a new lead single or album.
 */
export const FEATURED_SPOTLIGHT: FeaturedReleaseItem = {
  id: "nothing-but-the-frequency",
  type: "Single",
  title: "Nothing But the Frequency",
  subtitle: "Featured Single • From PROJECT: RYKER",
  tagline: "Country Meets Deep House",
  genre: "Country • Deep House",
  label: "SINGITPOP RECORDS",
  releaseDate: "2026-12-04T00:00:00",
  displayDate: "4 December 2026",
  artwork: "/images/nothing-but-the-frequency-single.jpg",
  summary:
    "A bold country-meets-deep-house single from PROJECT: RYKER — where acoustic warmth and a hypnotic electronic pulse tell a story of two hearts drawn together beyond words.",
  extendedCopy: [
    "Introducing a new sonic chapter for Ryker Boone, \"Nothing But the Frequency\" pairs soulful, lived-in country vocals and expressive guitar textures with a driving deep-house groove.",
    "Rooted in honest storytelling yet unafraid to cross musical boundaries, it leads the way into the December 4 dual release alongside PROJECT: RYKER and New Year's Evening."
  ],
  // Paste your verified TuneCore LinkShare URL here once live after 4 December 2026:
  // linkShareUrl: "https://tunecore.link/...",
  linkShareUrl: undefined,
  // Optional verified individual platform URLs once live:
  streamingLinks: {
    // spotify: "https://open.spotify.com/track/...",
    // appleMusic: "https://music.apple.com/...",
    // amazonMusic: "https://music.amazon.com/...",
    // youtube: "https://www.youtube.com/watch?v=...",
  },
  accentTheme: "frequency",
};

/**
 * Secondary promotional cards displayed below the hero spotlight.
 * Add, reorder, or swap entries here to rotate featured albums and singles.
 */
export const PROMOTIONAL_RELEASES: FeaturedReleaseItem[] = [
  {
    id: "project-ryker",
    type: "Album",
    title: "PROJECT: RYKER",
    tagline: "Official Studio Album",
    genre: "Modern Country • Contemporary Crossover",
    label: "SINGITPOP RECORDS",
    releaseDate: "2026-12-04T00:00:00",
    displayDate: "4 December 2026",
    artwork: "/images/project-ryker-album.jpg",
    summary:
      "Modern country storytelling with a bold edge — soulful vocals, expressive guitars, and unexpected electronic influences anchored by \"Nothing But the Frequency.\"",
    featuredTracks: [
      "Nothing But the Frequency",
      "Slow Motion Trouble",
      "Beautifully Unsaid",
      "Closer Than Goodbye",
      "Two Step Remedy",
    ],
    streamingLinks: RYKER_ALBUM_LINKS.projectRyker,
    accentTheme: "gold",
  },
  {
    id: "new-years-evening",
    type: "Album",
    title: "New Year's Evening",
    tagline: "Country • Deep House • Country Dance",
    genre: "13-Track Celebration Album",
    label: "SINGITPOP RECORDS",
    releaseDate: "2026-12-04T00:00:00",
    displayDate: "4 December 2026",
    artwork: "/images/new-years-evening-album.jpg",
    summary:
      "An electrifying 13-track blend of Nashville country soul, fiery fiddles, and modern deep house beats built for unforgettable New Year's Eve celebrations.",
    featuredTracks: [
      "Golden Hour Goodbye",
      "Six Strings and a Wild Night",
      "Boots on the Dancefloor",
      "Last Dance of December",
      "Fireworks Over Tennessee",
      "Kiss Me at Midnight",
    ],
    streamingLinks: RYKER_ALBUM_LINKS.newYearsEvening,
    accentTheme: "gold",
  },
  {
    id: "christmas-all-year-long",
    type: "Album",
    title: "Christmas All Year Long",
    tagline: "Country Holiday Collection",
    genre: "12-Track Country Holiday Album",
    label: "SINGITPOP RECORDS",
    releaseDate: "2026-11-27T00:00:00",
    displayDate: "27 November 2026",
    artwork: "/images/christmas-all-year-long-album.jpg",
    summary:
      "A heartwarming collection of country holiday songs, blending festive steel strings, acoustic warmth, and cozy cabin stories.",
    featuredTracks: [
      "Where We Belong",
      "Beneath the Lights",
      "Midnight Church Bells",
      "Santa's Got a Pickup Truck",
      "Christmas All Year Long",
    ],
    streamingLinks: RYKER_ALBUM_LINKS.christmasAllYearLong,
    albumPageLink: "/music/christmas-all-year-long",
    accentTheme: "gold",
  },
];
