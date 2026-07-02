"use client";

import { useState } from "react";
import FeaturedPostCard from "./components/FeaturedPostCard";
import BlogCard from "./components/BlogCard";
import BlogDetailPage from "./components/BlogDetailPage";
import { BLOG_POSTS } from "../../lib/blogData";

export default function BlogPage() {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  // Navigate to article detail
  if (selectedPostId) {
    const post = BLOG_POSTS.find((p) => p.id === selectedPostId);
    if (post) {
      return (
        <BlogDetailPage
          post={post}
          onBack={() => setSelectedPostId(null)}
          onSelectPost={setSelectedPostId}
        />
      );
    }
  }

  const featured   = BLOG_POSTS.find((p) => p.featured);
  const gridPosts  = BLOG_POSTS.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-20">

        {/* ── Page heading ── */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-light text-gray-900 leading-tight">
            Insights That{" "}
            <span
              style={{
                fontFamily: "'Caveat', cursive",
                fontWeight: 700,
                color: "#f97316",
                fontSize: "1.08em",
              }}
            >
              Power
            </span>
            <br />
            Better Work
          </h1>
        </div>

        {/* ── Featured post ── */}
        {featured && (
          <div className="mb-10">
            <FeaturedPostCard
              post={featured}
              onClick={() => setSelectedPostId(featured.id)}
            />
          </div>
        )}

        {/* ── Grid posts ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridPosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              onClick={() => setSelectedPostId(post.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
