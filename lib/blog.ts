/**
 * Blog posts as published on Aeroasia-Hydromex's existing blog index.
 *
 * Titles, dates, authors, excerpts, and thumbnails are taken verbatim from
 * the source listing at https://www.aeroasiahydromex.com/blog. Each card
 * links out to the original article URL on aeroasiahydromex.com — full
 * article text lives there.
 */

export type BlogPost = {
  title: string;
  /** SEO-friendly slug derived from the title. */
  slug: string;
  /** Original article URL on aeroasiahydromex.com. */
  sourceUrl: string;
  /** Categorical tags supported by the post title alone — no invented tags. */
  tags: string[];
  /** Date as shown on the source listing. */
  date?: string;
  /** Author byline as shown on the source. */
  author?: string;
  /** Reading time as shown on the source listing. */
  readingTime?: string;
  /** Excerpt taken verbatim from the source listing. */
  excerpt?: string;
  /** Thumbnail URL from the source listing (Wix CDN). */
  thumbnail?: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    title:
      "When Existing STPs Fall Behind: A Practical Approach to Wastewater Compliance Through AOP",
    slug: "when-existing-stps-fall-behind",
    sourceUrl:
      "https://www.aeroasiahydromex.com/post/treating-what-others-cant",
    tags: ["AOP", "Compliance", "STP"],
    date: "Apr 26",
    author: "Aeroasia-Hydromex Editorial Team",
    readingTime: "3 min read",
    excerpt:
      "Wastewater treatment systems are often designed based on projected conditions at a specific point in time. However, as facilities evolve, wastewater characteristics, load volumes, and regulatory requirements also change.",
    thumbnail:
      "https://static.wixstatic.com/media/2062c8_6be1315a445543bca59a64466b8d8895~mv2.png/v1/fill/w_908,h_682,fp_0.50_0.50,q_95,enc_avif,quality_auto/2062c8_6be1315a445543bca59a64466b8d8895~mv2.webp",
  },
  {
    title: "From Vision to Impact: The Growth of Aeroasia-Hydromex",
    slug: "from-vision-to-impact",
    sourceUrl:
      "https://www.aeroasiahydromex.com/post/the-growth-of-aeroasia-hydromex",
    tags: ["Company Growth"],
    date: "Apr 22",
    author: "Aeroasia-Hydromex Editorial Team",
    readingTime: "4 min read",
    excerpt:
      "Behind every company that stands the test of time is a clear vision—and the discipline to build it from the ground up.",
    thumbnail:
      "https://static.wixstatic.com/media/2062c8_df0d2069fdcf40a789cd76da2f66190b~mv2.png/v1/fill/w_908,h_682,fp_0.50_0.50,q_95,enc_avif,quality_auto/2062c8_df0d2069fdcf40a789cd76da2f66190b~mv2.webp",
  },
  {
    title: "Inside AeroAsia's Advanced Oxidation Process (AOP) Technology",
    slug: "inside-aeroasia-aop-technology",
    sourceUrl:
      "https://www.aeroasiahydromex.com/post/inside-aeroasia-s-advanced-oxidation-process-aop-technology",
    tags: ["AOP", "Technology"],
    date: "Feb 9, 2024",
    author: "Aeroasia-Hydromex Editorial Team",
    readingTime: "3 min read",
    thumbnail:
      "https://static.wixstatic.com/media/2062c8_fca9d281fd534126a060cc6705cc0013~mv2.png/v1/fill/w_908,h_682,fp_0.50_0.50,q_95,enc_avif,quality_auto/2062c8_fca9d281fd534126a060cc6705cc0013~mv2.webp",
  },
  {
    title: "Comprehensive Wastewater Treatment Solutions in the Philippines",
    slug: "comprehensive-wastewater-treatment",
    sourceUrl:
      "https://www.aeroasiahydromex.com/post/industries-we-serve-denr-compliant-wastewater-treatment",
    tags: ["Wastewater Treatment", "Philippines"],
    date: "Aug 18, 2022",
    author: "Aeroasia-Hydromex Editorial Team",
    readingTime: "3 min read",
    excerpt:
      "Not all wastewater is created equal. At Aeroasia-Hydromex Technologies Co. Ltd., we design treatment systems that understand these differences.",
    thumbnail:
      "https://static.wixstatic.com/media/2062c8_abbac9a26ab244f68f8686eff73924bd~mv2.png/v1/fill/w_908,h_682,fp_0.50_0.50,q_95,enc_avif,quality_auto/2062c8_abbac9a26ab244f68f8686eff73924bd~mv2.webp",
  },
];
