import { useEffect, useMemo, useState } from "react";

import PHome from "../components/People/PHome/PHome";
import PhDScholars from "../components/People/PhDScholars/PhDScholars";
import MTechStudents from "../components/People/MTechStudents/MTechStudents";
import Alumni from "../components/People/Alumni/Alumni";

import {
  getPeople,
  addPerson,
} from "../services/peopleAPi";

import "./People.css";

function People() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Fetch people from MongoDB
  useEffect(() => {
    const fetchPeople = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getPeople();
        setPeople(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch people:", err);
        setError("Unable to load team members. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchPeople();
  }, []);

  // Add a person through the existing API
  const handleAddPerson = async (person) => {
    try {
      const newPerson = await addPerson(person);

      setPeople((previousPeople) => [
        ...previousPeople,
        newPerson,
      ]);

      alert("Person added successfully!");
    } catch (err) {
      console.error("Failed to add person:", err);
      alert("Failed to add person.");
    }
  };

  // Category counts
  const phdCount = people.filter(
    (person) => person.category === "phd"
  ).length;

  const mtechCount = people.filter(
    (person) => person.category === "mtech"
  ).length;

  const alumniCount = people.filter(
    (person) => person.category === "alumni"
  ).length;

  // Search by name, role, category, or research area
  const filteredPeople = useMemo(() => {
    const query = search.trim().toLowerCase();

    return people.filter((person) => {
      const matchesCategory =
        activeCategory === "all" ||
        person.category === activeCategory;

      const searchableText = [
        person.name,
        person.role,
        person.designation,
        person.researchArea,
        person.research,
        person.category,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return (
        matchesCategory &&
        (!query || searchableText.includes(query))
      );
    });
  }, [people, search, activeCategory]);

  // Keep Rohan Chand Sahu first among PhD scholars
  const phdScholars = filteredPeople
    .filter((person) => person.category === "phd")
    .sort((a, b) => {
      if (a.name === "Rohan Chand Sahu") return -1;
      if (b.name === "Rohan Chand Sahu") return 1;
      return 0;
    });

  const mtechStudents = filteredPeople.filter(
    (person) => person.category === "mtech"
  );

  const alumni = filteredPeople.filter(
    (person) => person.category === "alumni"
  );

  if (loading) {
    return (
      <div className="people-loading">
        <div className="people-loading-spinner" />
        <h2>Loading our research community</h2>
        <p>Fetching team profiles...</p>
      </div>
    );
  }

  return (
    <div className="people-page">
      {/* Hero */}
      <section className="people-hero">
        <div className="people-hero-content">
          <span className="people-eyebrow">
            OUR RESEARCH COMMUNITY
          </span>

          <h1>
            The People Behind
            <span> Scientific Discovery</span>
          </h1>

          <p>
            Meet the scholars and researchers advancing
            pharmaceutical nanotechnology, drug delivery,
            and innovative therapeutic research at IIT (BHU).
          </p>

          <a href="#team-directory" className="people-hero-link">
            Explore our team <span>↓</span>
          </a>
        </div>

        <div className="people-hero-art" aria-hidden="true">
          <div className="people-orbit orbit-one" />
          <div className="people-orbit orbit-two" />
          <div className="people-orbit orbit-three" />

          <div className="people-art-center">
            <span>RESEARCH</span>
            <strong>TEAM</strong>
            <small>IIT (BHU)</small>
          </div>

          <span className="people-art-node node-one">N</span>
          <span className="people-art-node node-two">+</span>
          <span className="people-art-node node-three">R</span>
        </div>

        <div className="people-hero-bottom">
          <span>Pharmaceutical Engineering & Technology</span>
          <span>Varanasi, India</span>
        </div>
      </section>

      {/* Error */}
      {error && (
        <div className="people-error" role="alert">
          <p>{error}</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      )}

      {/* Statistics */}
      <section className="people-stats" aria-label="Team overview">
        <div className="people-stat">
          <span className="stat-icon">01</span>
          <div>
            <strong>{people.length}</strong>
            <span>Team Profiles</span>
          </div>
        </div>

        <div className="people-stat">
          <span className="stat-icon">02</span>
          <div>
            <strong>{phdCount}</strong>
            <span>PhD Scholars</span>
          </div>
        </div>

        <div className="people-stat">
          <span className="stat-icon">03</span>
          <div>
            <strong>{mtechCount}</strong>
            <span>M.Tech Students</span>
          </div>
        </div>

        <div className="people-stat">
          <span className="stat-icon">04</span>
          <div>
            <strong>{alumniCount}</strong>
            <span>Alumni</span>
          </div>
        </div>
      </section>

      {/* Existing member addition component */}
      <div className="people-add-section">
        <PHome onAddPerson={handleAddPerson} />
      </div>

      {/* Directory and filters */}
      <section className="people-directory" id="team-directory">
        <div className="people-section-heading">
          <div>
            <span className="people-eyebrow">
              MEET THE TEAM
            </span>
            <h2>Research Directory</h2>
            <p>
              Explore current members and alumni of our laboratory.
            </p>
          </div>

          <span className="directory-count">
            {filteredPeople.length}{" "}
            {filteredPeople.length === 1 ? "profile" : "profiles"}
          </span>
        </div>

        <div className="people-toolbar">
          <label className="people-search">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search name, role or research area..."
              aria-label="Search team members"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </label>

          <div className="people-filters" aria-label="Filter members">
            {[
              { label: "Everyone", value: "all" },
              { label: "PhD Scholars", value: "phd" },
              { label: "M.Tech", value: "mtech" },
              { label: "Alumni", value: "alumni" },
            ].map((filter) => (
              <button
                key={filter.value}
                type="button"
                className={
                  activeCategory === filter.value
                    ? "people-filter active"
                    : "people-filter"
                }
                onClick={() => setActiveCategory(filter.value)}
                aria-pressed={activeCategory === filter.value}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Existing components receive filtered MongoDB data */}
        {phdScholars.length > 0 && (
          <PhDScholars people={phdScholars} />
        )}

        {mtechStudents.length > 0 && (
          <MTechStudents people={mtechStudents} />
        )}

        {alumni.length > 0 && (
          <Alumni people={alumni} />
        )}

        {filteredPeople.length === 0 && (
          <div className="people-empty">
            <span>⌕</span>
            <h3>No matching profiles</h3>
            <p>
              Try another name, research area, or category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("all");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default People;