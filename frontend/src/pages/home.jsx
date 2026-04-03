import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import  Stats from "../components/Stats";
import Footer from "../components/Footer";
import Freelancers from "../components/Freelancers";


/* ── Data ───────────────────────────────────────── */

const CATEGORIES = [
  { icon: "💻", label: "Programming & Tech" },
  { icon: "🎨", label: "Graphics & Design" },
  { icon: "📣", label: "Digital Marketing" },
  { icon: "✍️", label: "Writing & Translation" },
  { icon: "🎬", label: "Video & Animation" },
  { icon: "🤖", label: "AI Services" },
  { icon: "🎵", label: "Music & Audio" },
  { icon: "💼", label: "Business" },
  { icon: "📊", label: "Consulting" },
];

const POPULAR_SERVICES = [
  { label: "Vibe Coding",                    bg: "#1a1a2e", accent: "#7c3aed", emoji: "⚡" },
  { label: "Website Development",            bg: "#0f2027", accent: "#06b6d4", emoji: "🌐" },
  { label: "Video Editing",                  bg: "#1a0a2e", accent: "#ec4899", emoji: "🎬" },
  { label: "Software Development",           bg: "#0a1f0f", accent: "#10b981", emoji: "🛠️" },
  { label: "Book Publishing",                bg: "#1f1200", accent: "#f59e0b", emoji: "📚" },
  { label: "Architecture & Interior Design", bg: "#1a0a0a", accent: "#ef4444", emoji: "🏛️" },
];

const FREELANCERS = [
  { name: "Ayesha K.", role: "UI/UX Designer",  rate: "$45/hr", rating: 4.9, reviews: 312, avatar: "AK", color: "#7c3aed" },
  { name: "Raza M.",   role: "Full Stack Dev",   rate: "$65/hr", rating: 5.0, reviews: 218, avatar: "RM", color: "#06b6d4" },
  { name: "Sara L.",   role: "Content Writer",   rate: "$30/hr", rating: 4.8, reviews: 451, avatar: "SL", color: "#ec4899" },
  { name: "Ahmad T.",  role: "Video Editor",     rate: "$40/hr", rating: 4.9, reviews: 187, avatar: "AT", color: "#10b981" },
];

const STATS = [
  { value: "4M+",  label: "Freelancers"  },
  { value: "180+", label: "Countries"    },
  { value: "99%",  label: "Satisfaction" },
  { value: "50K+", label: "Skills"       },
];

const FOOTER_LINKS = {
  "For Clients":     ["How it Works", "Browse Talent", "Post a Job", "Enterprise", "Success Stories"],
  "For Freelancers": ["Find Work", "Create Profile", "Community", "Forum", "Resources"],
  "Company":         ["About Us", "Careers", "Press", "Partnerships", "Privacy Policy"],
  "Support":         ["Help Center", "Safety", "Community Standards", "Terms of Service", "Cookie Policy"],
};

const TESTIMONIALS = [
  { text: "Found an amazing developer within hours. The quality exceeded our expectations!", name: "Maria G.", company: "TechStartup", avatar: "MG", color: "#7c3aed" },
  { text: "Consistent, professional, and fast. This platform transformed how we hire talent.", name: "James P.", company: "DesignCo",   avatar: "JP", color: "#06b6d4" },
  { text: "From logo to full brand kit in 48 hours. Absolutely phenomenal experience.",       name: "Priya S.", company: "BrandHouse", avatar: "PS", color: "#ec4899" },
];

const TRUSTED_BRANDS = ["Meta", "Google", "Netflix", "Shopify", "Stripe", "Airbnb"];
const POPULAR_TAGS   = ["Logo Design", "WordPress", "React Dev", "Copywriting", "Video Ads"];
const SOCIAL_ICONS   = ["𝕏", "in", "f", "▶"];
const LEGAL_LINKS    = ["Privacy", "Terms", "Cookies", "Accessibility"];

/* ── Component ───────────────────────────────────── */

export default function FreelancerHome() {
     const [search, setSearch] = useState("");

  return (
    <div>
      <Navbar />

      <Hero
        search={search}
        setSearch={setSearch}
        POPULAR_TAGS={POPULAR_TAGS}
        FREELANCERS={FREELANCERS}
      />

      <Categories CATEGORIES={CATEGORIES} />


      <Stats STATS={STATS} />

      <Freelancers FREELANCERS={FREELANCERS}></Freelancers>

      <Footer
        FOOTER_LINKS={FOOTER_LINKS}
        SOCIAL_ICONS={SOCIAL_ICONS}
        LEGAL_LINKS={LEGAL_LINKS}
      />
    </div>
  );
}