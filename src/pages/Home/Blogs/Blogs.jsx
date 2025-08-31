import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "Boost Your Productivity with These 5 Tips",
    description:
      "Discover simple yet powerful strategies to stay focused and get more done every day.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Jd0fyVhtsG-Z_F_EouYnvvll7AlzqB7USQ&s",
    date: "August 20, 2025",
    author: "John Doe",
  },
  {
    id: 2,
    title: "The Future of Web Development in 2025",
    description:
      "A deep dive into the latest technologies shaping the future of web apps and platforms.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Jd0fyVhtsG-Z_F_EouYnvvll7AlzqB7USQ&s",
    date: "August 15, 2025",
    author: "Sarah Khan",
  },
  {
    id: 3,
    title: "Mastering React for Modern Applications",
    description:
      "Learn advanced React concepts and patterns to build high-performing web apps.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Jd0fyVhtsG-Z_F_EouYnvvll7AlzqB7USQ&s",
    date: "August 10, 2025",
    author: "Michael Smith",
  },
];

const Blogs = () => {
  return (
    <section className="pb-[40] md:pb-[60px] lg:pb-[120px] pt-[30px] md:pt-[60px] dark:bg-neutral-900">
      <div className="px-4 mx-auto max-w-7xl">
        
        <div className="mb-6 md:mb-12 md:text-center">
          <h2 className="text-3xl  font-bold text-gray-900 md:text-4xl dark:text-white">
            Latest Insights
          </h2>
         
        </div>

        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="overflow-hidden transition-shadow duration-300 bg-white shadow-md dark:bg-neutral-800 rounded-2xl hover:shadow-lg"
            >
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date} • {post.author}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {post.description}
                </p>
                <button className="mt-4 font-medium text-blue-600 dark:text-blue-400 hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
