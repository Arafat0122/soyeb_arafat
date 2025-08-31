import React from "react";
import Marquee from "react-fast-marquee";
import { ShineBorder } from "@/components/magicui/shine-border";
import { cn } from "@/lib/utils";

const reviews = [
  // 🌐 Frontend
  { body: "HTML5", img: "https://simpleicons.org/icons/html5.svg" },
  { body: "CSS3", img: "https://simpleicons.org/icons/css3.svg" },
  { body: "Tailwind CSS", img: "https://simpleicons.org/icons/tailwindcss.svg" },
  { body: "Sass/SCSS", img: "https://simpleicons.org/icons/sass.svg" },
  { body: "JavaScript (ES6+)", img: "https://simpleicons.org/icons/javascript.svg" },
  { body: "TypeScript", img: "https://simpleicons.org/icons/typescript.svg" },
  { body: "React", img: "https://simpleicons.org/icons/react.svg" },
  { body: "Redux Toolkit", img: "https://simpleicons.org/icons/redux.svg" },
  { body: "Next.js", img: "https://simpleicons.org/icons/nextdotjs.svg" },
  { body: "Framer Motion", img: "https://tabler-icons.io/static/tabler-icons/icons/brand-framer-motion.svg" },  // official Tabler icon pack :contentReference[oaicite:0]{index=0}

  // ⚙️ Backend
  { body: "Node.js", img: "https://simpleicons.org/icons/node-dot-js.svg" },
  { body: "Express.js", img: "https://simpleicons.org/icons/express.svg" },
  { body: "MongoDB", img: "https://simpleicons.org/icons/mongodb.svg" },
  { body: "Mongoose", img: "https://res.cloudinary.com/dowpaz8fo/image/upload/v1746200730/mongoose_y18rc5.png" }, // custom image you already had
  { body: "REST API", img: "https://simpleicons.org/icons/swagger.svg" }, // using Swagger icon to represent APIs
  { body: "GraphQL", img: "https://simpleicons.org/icons/graphql.svg" },

  // 🗂️ CMS & Platforms
  { body: "WordPress", img: "https://simpleicons.org/icons/wordpress.svg" },
  { body: "Strapi", img: "https://simpleicons.org/icons/strapi.svg" },
  { body: "Sanity CMS", img: "https://simpleicons.org/icons/sanity.svg" },

  // 🚀 Tools & Optimization
  { body: "Git & GitHub", img: "https://simpleicons.org/icons/github.svg" },
  { body: "Docker", img: "https://simpleicons.org/icons/docker.svg" },
  { body: "Firebase", img: "https://simpleicons.org/icons/firebase.svg" },
  { body: "Vercel", img: "https://simpleicons.org/icons/vercel.svg" },
  { body: "AWS", img: "https://simpleicons.org/icons/amazonaws.svg" },
  { body: "Netlify", img: "https://simpleicons.org/icons/netlify.svg" },
  { body: "PurgeCSS", img: "https://icon-icons.com/icons/248750/purgecss-logo/256px.svg" }, // from Kiuicons / icon-icons :contentReference[oaicite:1]{index=1}

  // ✅ Testing
  { body: "Jest", img: "https://simpleicons.org/icons/jest.svg" },
  { body: "Cypress", img: "https://simpleicons.org/icons/cypress.svg" },

  // 🤖 AI & ML
  { body: "OpenAI", img: "https://simpleicons.org/icons/openai.svg" },
  { body: "ChatGPT", img: "https://res.cloudinary.com/dowpaz8fo/image/upload/v1746201720/chatgpt_x2uwvx.png" }, // your own custom
  { body: "LangChain", img: "https://res.cloudinary.com/dowpaz8fo/image/upload/v1746201740/langchain_wakxqf.png" },
  { body: "TensorFlow", img: "https://simpleicons.org/icons/tensorflow.svg" },
  { body: "PyTorch", img: "https://simpleicons.org/icons/pytorch.svg" },
  { body: "Hugging Face", img: "https://simpleicons.org/icons/huggingface.svg" },
];

const ReviewCard = ({ img, body }) => {
  return (
    <div
      className={cn(
        "relative z-50 cursor-pointer overflow-hidden rounded-xl border border-white/20 ",
      )}
      style={{
        width: "90px",
        height: "95px",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full gap-3 p-2">
        <img
          className="w-8 h-8 filter invert brightness-200 contrast-200"
          src={img}
          alt={body}
        />
        <h4 className="text-xs text-center text-white capitalize">{body}</h4>
      </div>
    </div>
  );
};

export function SkillCard() {
  return (
    <div className="relative w-full mt-10 overflow-hidden">
      <Marquee
        speed={50}
        gradient={true}
        pauseOnHover={true}
        gradientColor="#030712"
      >
        {reviews.map((review, idx) => (
          <div key={idx} className="mr-8">
            <ReviewCard {...review} />
          </div>
        ))}
      </Marquee>
    </div>
  );
}