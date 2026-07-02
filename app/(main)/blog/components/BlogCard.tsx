import { ChevronRight } from "lucide-react";
// import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import Image from "next/image";
import {
  BLOG_PHOTOS,
  BLOG_TAGS,
  blogPlaceholderGradient,
} from "../../../lib/blogData";
import type { BlogPost } from "../../../lib/types";

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
}

export default function BlogCard({ post, onClick }: BlogCardProps) {
  const photo = BLOG_PHOTOS[post.id] ?? null;
  const tagCfg = BLOG_TAGS[post.tag];

  return (
    <article
      onClick={onClick}
      className="flex flex-col rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group"
    >
      {/* ── Photo ── */}
      <div
        className="relative overflow-hidden flex-shrink-0"
        style={{ height: 200 }}
      >
        {photo ? (
          <Image
            fill
            src={photo}
            alt={post.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div
            className="w-full h-full group-hover:scale-105 transition-transform duration-500"
            style={{ background: blogPlaceholderGradient(post.id) }}
          />
        )}

        {/* Tag pill — top-right of image */}
        {tagCfg && (
          <span
            className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
            style={{ background: "rgba(255,255,255,0.92)", color: tagCfg.text }}
          >
            {tagCfg.label}
          </span>
        )}
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col gap-2.5 p-5 flex-1">
        <h3 className="font-bold text-gray-900 text-base leading-snug line-clamp-3">
          {post.title}
        </h3>

        <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* Arrow — bottom right */}
        <div className="flex justify-end mt-1">
          <span className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 group-hover:border-gray-400 group-hover:text-gray-700 transition-all">
            <ChevronRight size={15} strokeWidth={2.5} />
          </span>
        </div>
      </div>
    </article>
  );
}
