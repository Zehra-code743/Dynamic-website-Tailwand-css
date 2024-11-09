import Image from "next/image";
import React from "react";

type Data = {
  id: number;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
};

const data: Data[] = [
  {
    id: 1,
    title: "The Art of Perfume",
    description: "Explore the intricate world of fragrance creation.",
    content:
      "Discover the fascinating history and craftsmanship behind perfume-making. Learn about the raw materials the artistry of blending scents and the influence of culture on fragrance.",
    imageUrl: "/perfume1.png",
  },
  {
    id: 2,
    title: "Top 10 Perfumes of 2023",
    description: "Discover the most popular scents of this year.",
    content:
      "Presenting the top 10 fragrances that have defined 2023. This list highlights a mix of iconic classics and innovative newcomers. Each entry features a description of its scent profile key notes and what makes it a favorite among fragrance enthusiasts.",
    imageUrl: "/perfume2.png",
  },
  {
    id: 3,
    title: "Choosing Your Signature Scent",
    description: "Learn how to select the perfect fragrance for you.",
    content:
      "Selecting a signature scent can be daunting. This guide walks you through understanding fragrance families—floral oriental woody and fresh. Tips include how to consider personal style occasion and even the seasons when choosing a fragrance that resonates with your identity.",
    imageUrl: "/perfume3.png",
  },
  {
    id: 4,
    title: "The History of Perfume",
    description: "Dive into the rich history of perfume-making.",
    content:
      "Trace the evolution of perfume from ancient Egypt where it was used in religious ceremonies to the modern-day luxury industry. Learn about pivotal moments in fragrance history including the introduction of synthetic materials and the rise of famous perfume houses. Discover how societal trends and artistic movements have influenced fragrance development.",
    imageUrl: "/perfume4.png",
  },
  {
    id: 5,
    title: "Perfume Tips and Tricks",
    description: "Essential tips to make your fragrance last longer.",
    content:
      "Maximize your fragrance's longevity and impact with expert tips. Learn about the best application techniques such as pulse points and layering. Understand the role of skin type and climate in scent performance. Get advice on how to store your fragrances to keep them fresh and potent.",
    imageUrl: "/perfume5.png",
  },
  {
    id: 6,
    title: "The Science of Smell",
    description: "Understanding how fragrance affects our emotions.",
    content:
      "Explore the fascinating connection between scent and emotions. Discover how the olfactory system processes fragrances and their power to evoke memories and influence mood. Learn about scent therapy and how different fragrances can promote relaxation, focus, or energy.",
    imageUrl: "/perfume6.png",
  },
];

const BlogPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const b = data.find((i) => i.id === Number(id));

  if (!b) {
    return <div>Blog post not fou</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 shadow-2xl rounded-lg">
      {/* Blog Image */}
      <img
        src={b?.imageUrl}
        alt={b?.title}
        className="w-full h-72 object-cover rounded-lg mb-6 shadow-xl transition-all duration-300 transform hover:scale-105"
      />
      {/* Blog Title */}
      <h2 className="text-4xl font-semibold text-gray-900 mb-4 text-center hover:text-pink-500 transition-all duration-300">
        {b?.title}
      </h2>
      {/* Blog Description */}
      <p className="text-lg text-gray-700 mb-6 italic text-center">{b?.description}</p>
      {/* Blog Content */}
      <div className="text-base text-gray-600 space-y-4 leading-relaxed">
        <p>{b?.content}</p>
      </div>
    </div>
  );
};

export default BlogPage;
