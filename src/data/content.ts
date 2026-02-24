import pangolinThumb from "../assets/blog/pangolin-thumb.jpg"
import weedsThumb from "../assets/blog/weeds-thumb.jpg"
import classThumb from"../assets/blog/class-thumb.jpg"
import calvin from "../assets/profiles/calvin-tarts.png"
import inghamThumb from "../assets/blog/inghamm-thumb.jpg"
import pesticideThumb from "../assets/blog/pesticides-thumb.jpg"
import growThumb from "../assets/blog/tomatoes-thumb.jpg"
import type { ImageMetadata } from "astro";


export type ContentItem = {
  id: string;
  type: "post" | "newsletter";
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: {
    name: string;
    avatar: ImageMetadata; // path relative to /public, e.g. "/avatars/jane.jpg"
  };
  tags: string[];
  readingTime: string;
  /**
   * Astro ImageMetadata — imported via `import img from "@/assets/blog/..."`.
   * Using ImageMetadata lets Astro optimise, resize, and generate srcsets automatically.
   * See: https://docs.astro.build/en/guides/images/
   */
  featuredImage: ImageMetadata;
  slug?: string;
  draft?: boolean;
};

export const posts: ContentItem[] = [
  {
    id: "blog-001",
    type: "post",
    title: "Pesticides in Tropical Ag",
    description:
      "Here's some text about what pesticides are used in tropical agriculture. Checmical X is especially noteworthy because of it's properties.",
    publishedAt: "2025-11-04",
    author: {
      name: "Calvin Irwin",
      avatar: calvin,
    },
    tags: ["trad ag", "ecology", "pesticides"],
    readingTime: "7 min read",
    featuredImage: pesticideThumb,
    slug: "the-art-of-deep-work",
  },
  {
    id: "blog-002",
    type: "post",
    title: "Remembering Dr. Elaine Inghram",
    description:
      "You already think in types. You already fear undefined. Here's why learning Rust feels surprisingly familiar — and where it will break your brain in the best way.",
    publishedAt: "2025-12-18",
    updatedAt: "2026-01-09",
    author: {
      name: "Calvin Irwin",
      avatar: calvin,
    },
    tags: ["SoilFoodWeb", "Gratitude", "Spotlight"],
    readingTime: "12 min read",
    featuredImage: inghamThumb,
    slug: "rust-for-typescript-devs",
  },
  {
    id: "blog-04",
    type: "newsletter",
    title: "The Cost of Maximizing Crop Yields",
    description:
      "Token naming hell, component versioning nightmares, and the one decision that finally made our design system something engineers actually wanted to use.",
    publishedAt: "2026-02-01",
    author: {
      name: "Calvin Irwin",
      avatar: calvin,
    },
    tags: ["trad ag", "productivity", "food systems"],
    readingTime: "9 min read",
    featuredImage: growThumb,
    slug: "design-systems-at-scale",
    draft: false,
  },
  {
    id: "blog-5",
    type: "post",
    title: "Resisting the Urge to Dig",
    description: "Keeping a clean farm isn't necessarily the best for the soil",
    publishedAt: "2026-02-10",
    author: {
      name: "Calvin Irwin",
      avatar: calvin,
    },
    tags: ["soilfoodweb", "tarts", "microbiology"],
    readingTime: "8 min",
    featuredImage: weedsThumb,
    // slug: "/blog/grpc-replace-rest"
  },
  {
    id: "nl-1",
    type: "newsletter",
    title: "Newsletter #1 - Our Future Regenerativists",
    description: "Lessons on distributed systems, clean architecture, and avoiding premature abstraction.",
    publishedAt: "2026-02-05",
    author: {
      name: "Calvin Irwin",
      avatar: calvin,
    },
    tags: ["cameroon", "tarts", "youth"],
    readingTime: "4 min",
    featuredImage: classThumb,
    // slug: "/newsletter/12"
  },
  {
    id: "blog-6",
    type: "post",
    title: "How Pangolins Keep Forests in Balance",
    description: "Hardware, transcoding strategy, storage topology, and streaming optimization.",
    publishedAt: "2026-01-28",
    updatedAt: "2026-02-01",
    author: {
      name: "Calvin Irwin",
      avatar: calvin,
    },
    tags: ["ecology", "cameroon", "conservation"],
    readingTime: "12 min",
    featuredImage: pangolinThumb,
    // slug: "/blog/home-media-server"
  },

]