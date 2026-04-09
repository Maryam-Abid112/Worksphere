import { useState, useMemo } from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import FreelancerGrid from "../components/FreelancerGrid";
import Footer from "../components/Footer";


// Raw data
export const FREELANCERS = [
  { id: 1, name: "Ayla Sharma", title: "UI/UX Designer", avatar: "AS", rating: 4.9, reviews: 212, rate: "$45/hr", tags: ["Figma", "Branding", "Prototyping"], available: true, projects: 87 },
  { id: 2, name: "James Okafor", title: "Full-Stack Developer", avatar: "JO", rating: 4.8, reviews: 178, rate: "$65/hr", tags: ["React", "Node.js", "MongoDB"], available: true, projects: 134 },
  { id: 3, name: "Mei Lin", title: "Content Strategist", avatar: "ML", rating: 5.0, reviews: 95, rate: "$35/hr", tags: ["SEO", "Copywriting", "Strategy"], available: false, projects: 62 },
  { id: 4, name: "Tariq Hassan", title: "Mobile Developer", avatar: "TH", rating: 4.7, reviews: 143, rate: "$55/hr", tags: ["React Native", "iOS", "Flutter"], available: true, projects: 99 },
  { id: 5, name: "Sofia Reyes", title: "Brand Designer", avatar: "SR", rating: 4.9, reviews: 201, rate: "$50/hr", tags: ["Branding", "Illustration", "Motion"], available: true, projects: 115 },
  { id: 6, name: "Lior Ben-David", title: "Data Scientist", avatar: "LB", rating: 4.8, reviews: 67, rate: "$80/hr", tags: ["Python", "ML", "Analytics"], available: false, projects: 43 },
  { id: 7, name: "Priya Nair", title: "DevOps Engineer", avatar: "PN", rating: 4.6, reviews: 89, rate: "$70/hr", tags: ["AWS", "Docker", "CI/CD"], available: true, projects: 58 },
  { id: 8, name: "Ethan Clarke", title: "Video Editor", avatar: "EC", rating: 4.9, reviews: 310, rate: "$40/hr", tags: ["Premiere", "After Effects", "Color"], available: true, projects: 182 },
  { id: 9, name: "Zara Ahmed", title: "3D Artist", avatar: "ZA", rating: 4.7, reviews: 54, rate: "$60/hr", tags: ["Blender", "Cinema 4D", "AR"], available: false, projects: 39 },
];

export const CATEGORIES = ["All", "Design", "Development", "Content", "Data", "Video"];
export const FOOTER_LINKS = {
  "For Clients": ["How it Works", "Browse Talent", "Post a Job", "Enterprise", "Success Stories"],
  "For Freelancers": ["Find Work", "Create Profile", "Community", "Forum", "Resources"],
  "Company": ["About Us", "Careers", "Press", "Partnerships", "Privacy Policy"],
  "Support": ["Help Center", "Safety", "Community Standards", "Terms of Service", "Cookie Policy"],
};
export const SOCIAL_ICONS = ["𝕏", "in", "f", "▶"];
export const LEGAL_LINKS = ["Privacy", "Terms", "Cookies", "Accessibility"];

export default function FreelancerHome() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return FREELANCERS.filter((f) => {
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        f.name.toLowerCase().includes(q) ||
        f.title.toLowerCase().includes(q) ||
        f.tags.some((t) => t.toLowerCase().includes(q));
      const matchCat =
        category === "All" ||
        (category === "Design" && (f.title.toLowerCase().includes("design") || f.title.toLowerCase().includes("artist"))) ||
        (category === "Development" && (f.title.toLowerCase().includes("developer") || f.title.toLowerCase().includes("engineer"))) ||
        (category === "Content" && (f.title.toLowerCase().includes("content") || f.title.toLowerCase().includes("writer"))) ||
        (category === "Data" && f.title.toLowerCase().includes("data")) ||
        (category === "Video" && f.title.toLowerCase().includes("video"));
      return matchSearch && matchCat;
    });
  }, [search, category]);

  return (
    <>
      {/* NAVBAR */}
      <div className="navbar">
        <div className="logo">Worksphere.<span> </span></div>
        <div className="nav-links">
          {["Find Talent"].map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
        <div className="nav-actions">
          <button>Post a job</button>
        </div>
      </div>

      {/* HERO */}
      <div className="mainpart">
        <SearchBar search={search} setSearch={setSearch} />
        <CategoryFilter
          categories={CATEGORIES}
          category={category}
          setCategory={setCategory}
          filteredCount={filtered.length}
        />
        <FreelancerGrid freelancers={filtered} />
      </div>

      <Footer FOOTER_LINKS={FOOTER_LINKS} SOCIAL_ICONS={SOCIAL_ICONS} LEGAL_LINKS={LEGAL_LINKS} />
    </>
  );
}