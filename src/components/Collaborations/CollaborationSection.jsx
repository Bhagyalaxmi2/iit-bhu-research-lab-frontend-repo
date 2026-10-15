import "./Collaboration.css";
import CollaborationCard from "./CollaborationCard";

function CollaborationSection() {

  const collaborations = [

    {
      id: 1,
      title: "IIT Bombay",
      type: "Academic Partner",
      image: "https://images.unsplash.com/photo-1562774053-701939374585",
      description:
        "Joint research projects in Artificial Intelligence, Drug Discovery, and Data Science."
    },

    {
      id: 2,
      title: "IISc Bangalore",
      type: "Academic Partner",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
      description:
        "Collaboration on Biotechnology, Biomedical Engineering, and Nanotechnology."
    },

    {
      id: 3,
      title: "Microsoft Research",
      type: "Industry Partner",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      description:
        "Research collaboration in Artificial Intelligence and Cloud Computing."
    },

    {
      id: 4,
      title: "Google Research",
      type: "Industry Partner",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
      description:
        "Projects in Machine Learning, Healthcare Analytics, and Big Data."
    },

    {
      id: 5,
      title: "CSIR",
      type: "Government Organization",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b",
      description:
        "Sponsored research programs and advanced pharmaceutical innovations."
    },

    {
      id: 6,
      title: "DST India",
      type: "Funding Agency",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      description:
        "Funding interdisciplinary research projects and laboratory infrastructure."
    }

  ];

  return (

    <section className="collaboration">

      <h1>Collaborations</h1>

      <p className="collaboration-subtitle">
        Our laboratory collaborates with leading universities,
        research institutes, industries, and government organizations
        to advance scientific innovation.
      </p>

      <div className="collaboration-container">

        {collaborations.map((partner) => (

          <CollaborationCard
            key={partner.id}
            partner={partner}
          />

        ))}

      </div>

    </section>

  );
}

export default CollaborationSection;