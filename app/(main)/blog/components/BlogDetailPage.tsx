import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
// import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import Image from "next/image";
import {
  BLOG_PHOTOS,
  BLOG_TAGS,
  blogPlaceholderGradient,
  BLOG_POSTS,
} from "../../../lib/blogData";
import BlogCard from "../components/BlogCard";
import type { BlogPost } from "../../../lib/types";

interface BlogDetailPageProps {
  post: BlogPost;
  onBack: () => void;
  onSelectPost: (id: string) => void;
}

export default function BlogDetailPage({
  post,
  onBack,
  onSelectPost,
}: BlogDetailPageProps) {
  const photo = BLOG_PHOTOS[post.id] ?? null;
  const tagCfg = BLOG_TAGS[post.tag];

  // Related posts: different posts, same tag first, max 3
  const related = BLOG_POSTS.filter((p) => p.id !== post.id && !p.featured)
    .sort((a, b) => (b.tag === post.tag ? 1 : 0) - (a.tag === post.tag ? 1 : 0))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* ── Back button bar ── */}
      <div className="border-b border-gray-100 bg-white sticky top-16 z-10">
        <div className="max-w-3xl mx-auto px-6 py-3">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium"
          >
            <ArrowLeft size={15} />
            Back to Blog
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10">
        {/* ── Article header ── */}
        <header className="mb-8">
          {/* Tag */}
          {tagCfg && (
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
              style={{ background: tagCfg.bg, color: tagCfg.text }}
            >
              {tagCfg.label}
            </span>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-5">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <User size={13} />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {post.readTime}
            </span>
          </div>
        </header>

        {/* ── Hero image ── */}
        <div
          className="rounded-2xl overflow-hidden mb-10"
          style={{ height: 360 }}
        >
          {photo ? (
            <Image
              fill
              src={photo}
              alt={post.title}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div
              className="w-full h-full"
              style={{ background: blogPlaceholderGradient(post.id) }}
            />
          )}
        </div>

        {/* ── Article body ── */}
        <div className="flex flex-col gap-6 mb-14">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-gray-700 leading-8 text-base">
              {paragraph}
            </p>
          ))}
        </div>

        {/* ── Divider ── */}
        <hr className="border-gray-100 mb-12" />

        {/* ── Related posts ── */}
        {related.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((rp) => (
                <BlogCard
                  key={rp.id}
                  post={rp}
                  onClick={() => onSelectPost(rp.id)}
                />
              ))}
            </div>
          </section>
        )}

        {/* ── Bottom back link ── */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={15} />
            Back to all articles
          </button>
        </div>
      </div>
    </div>
  );
}
