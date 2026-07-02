import { ArrowRight } from "lucide-react";
// import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import Image from "next/image";
import {
  BLOG_PHOTOS,
  BLOG_TAGS,
  blogPlaceholderGradient,
} from "../../../lib/blogData";
import type { BlogPost } from "../../../lib/types";

interface FeaturedPostCardProps {
  post: BlogPost;
  onClick: () => void;
}

export default function FeaturedPostCard({
  post,
  onClick,
}: FeaturedPostCardProps) {
  const photo = BLOG_PHOTOS[post.id] ?? null;
  const tagCfg = BLOG_TAGS[post.tag];

  return (
    <article
      onClick={onClick}
      className="w-full flex flex-col sm:flex-row rounded-2xl overflow-hidden border border-gray-200 bg-white cursor-pointer hover:shadow-md transition-shadow duration-300 group"
      style={{ minHeight: 280 }}
    >
      {/* ── Left: image ── */}
      <div
        className="relative sm:w-[44%] w-full flex-shrink-0 overflow-hidden"
        style={{ minHeight: 240 }}
      >
        {photo ? (
          <Image
            src={photo}
            alt={post.title}
            fill
            className="w-full h-full object-cover object-left"
            style={{ minHeight: 240 }}
          />
        ) : (
          <div
            className="w-full h-full"
            style={{
              background: blogPlaceholderGradient(post.id),
              minHeight: 240,
            }}
          />
        )}
      </div>

      {/* ── Right: content ── */}
      <div className="flex flex-col justify-between flex-1 p-7 sm:p-8">
        <div className="flex flex-col gap-3">
          {/* Tag */}
          {tagCfg && (
            <span
              className="self-start text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: tagCfg.bg, color: tagCfg.text }}
            >
              {tagCfg.label}
            </span>
          )}

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        {/* Read more */}
        <div className="flex justify-end mt-5">
          <span className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
            Read More
            <ArrowRight
              size={15}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </span>
        </div>
      </div>
    </article>
  );
}
