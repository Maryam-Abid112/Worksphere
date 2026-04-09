import FreelancerCard from "./FreelancerCard";

export default function FreelancerGrid({ freelancers }) {
  return (
    <div className="freelancer-grid">
      {freelancers.length > 0 ? (
        freelancers.map((f, i) => <FreelancerCard key={f.id} f={f} delay={i * 0.07} />)
      ) : (
        <div className="no-results">😕 No freelancers match your search</div>
      )}
    </div>
  );
}