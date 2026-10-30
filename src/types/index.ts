export interface MediaItem {
  id: string;
  url: string;
  kind: 'image' | 'video';
  width: number;
  height: number;
  alt: string;
  caption?: string;
  focalX?: number;
  focalY?: number;
  color?: string;
  blurDataUrl?: string | null;
  durationS?: number | null;
  poster?: MediaItem | null;
}

export interface Puppy {
  id: string;
  slug: string;
  name: string;
  displayName: string;
  breed: string;
  gender: 'male' | 'female' | string;
  genderLabel: string;
  age: string;
  colour?: string;
  description?: string;
  records?: string[];
  status: 'available' | 'reserved' | 'gone';
  featured?: boolean;
  seoDescription?: string;
  cover: MediaItem;
  media: MediaItem[];
  origin: {
    slug: 'imported' | 'local' | string;
    name: string;
  };
  collections?: { slug: string; name: string }[];
  breeds?: { slug: string; name: string }[];
  published?: boolean;
}

export interface GoneHomePuppy {
  id: string;
  slug: string;
  name: string;
  breed: string;
  genderLabel: string;
  location: string;
  coverUrl: string;
}

export interface FamilyPolaroid {
  id: number;
  ariaLabel?: string;
  label?: string;
  tilt: string;
  tape: string;
  alt: string;
  src: string;
  width: string;
  height: string;
}

export interface FAQItem {
  "@type"?: string;
  name: string;
  acceptedAnswer: {
    "@type"?: string;
    text: string;
  };
}
