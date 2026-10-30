import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { puppiesData } from "@/data/puppies";
import PuppyDetailClient from "./PuppyDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return puppiesData.map((puppy) => ({
    slug: puppy.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const puppy = puppiesData.find((p) => p.slug === slug);

  if (!puppy) {
    return {
      title: "Puppy Not Found",
    };
  }

  const title = `${puppy.displayName}, ${puppy.breed} puppy`;
  const description = `Meet ${puppy.displayName}: ${puppy.breed}, ${puppy.genderLabel.toLowerCase()}, ${puppy.age} old, ${puppy.origin.name.toLowerCase()}. Real photos and details from TeddyPups U.A.E.`;
  const imageUrl = puppy.cover.url.startsWith("http")
    ? puppy.cover.url
    : `https://puppy.instabizweb.com${puppy.cover.url}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: imageUrl, alt: puppy.cover.alt || title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function PuppyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const puppy = puppiesData.find((p) => p.slug === slug);

  if (!puppy) {
    notFound();
  }

  return (
    <div className="gutter mx-auto max-w-[110rem] pb-24 pt-6 md:pt-10">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-[0.95rem] font-semibold text-cocoa-soft">
        <Link href="/puppies" className="hover:text-toffee hover:underline">
          Available puppies
        </Link>
        <span aria-hidden="true" className="mx-2 text-cocoa/30">/</span>
        <span aria-current="page" className="text-cocoa">{puppy.displayName}</span>
      </nav>

      {/* Main Content & Interactive Experience */}
      <PuppyDetailClient puppy={puppy} />
    </div>
  );
}

