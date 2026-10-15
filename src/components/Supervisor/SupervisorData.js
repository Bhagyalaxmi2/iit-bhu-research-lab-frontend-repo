// ======================================================
// SUPERVISOR DATA
// All supervisor information is kept in one place.
// Later this can come from MongoDB/API.
// ======================================================

export const supervisorData = {
  // ----------------------------------------------------
  // BASIC INFORMATION
  // ----------------------------------------------------

  personal: {
    name: "Dr. Ashish Kumar Agrawal",

    designation: "Associate Professor",

    department:
      "Pharmaceutical Engineering and Technology, IIT-BHU, Varanasi",

    email: "ashish.phe@iitbhu.ac.in",

    

    scholar:
      "https://scholar.google.com/citations?user=ZOZwu6AAAAAJ&hl=en",
        
    Linkedln:"https://www.linkedin.com/in/ashish-agrawal-9b035229",
    
    Orcid:"https://orcid.org/0000-0002-7302-3647",

    ResearchGate:"https://www.researchgate.net/profile/Ashish-Agrawal ",
      


    image: "/LabMembers/Supervisor.png",
  },

  // ----------------------------------------------------
  // SHORT PROFILE
  // ----------------------------------------------------

  profile:
    "Dr. Ashish Kumar Agrawal is an Associate Professor in the Department of Pharmaceutical Engineering and Technology at IIT-BHU, Varanasi. His research focuses on pharmaceutical nanotechnology, advanced drug delivery, nanomedicine and the development of innovative therapeutic delivery systems.",

  // ----------------------------------------------------
  // RESEARCH AREAS
  // ----------------------------------------------------

  researchAreas: [
    "Pharmaceutical Nanotechnology",
    "Advanced Drug Delivery",
    "Nanomedicine",
    "Exosome-Based Drug Delivery",
    "Cancer Nanomedicine",
    "Antimicrobial Drug Delivery",
    "Bacteriophage Delivery",
    "Protein & Peptide Delivery",
    "Targeted Drug Delivery",
    "Novel Pharmaceutical Formulations",
  ],

  // ----------------------------------------------------
  // EDUCATION
  // ----------------------------------------------------

  education: [
    {
      id: 1,
      degree: "Post-Doctoral Fellow",
      institution:
        "James Graham Brown Cancer Center, University of Louisville, USA",
      year: "2015–2018",
      detail: "",
    },

    {
      id: 2,
      degree: "Ph.D.",
      institution:
        "National Institute of Pharmaceutical Education and Research (NIPER), SAS Nagar, Punjab",
      year: "2010–2014",
      detail: "",
    },

    {
      id: 3,
      degree: "M.Pharm (Pharmaceutics)",
      institution:
        "Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal, Madhya Pradesh",
      year: "2007–2009",
      detail: "Gold Medal",
    },

    {
      id: 4,
      degree: "B.Pharm",
      institution:
        "Rajasthan University of Health and Sciences, Jaipur",
      year: "2003–2007",
      detail: "",
    },
  ],

  // ----------------------------------------------------
  // AWARDS & ACHIEVEMENTS
  // ----------------------------------------------------

  awards: [
    {
      id: 1,
      title: "Pharmaceutics 2022 Outstanding Reviewer Award",
      organization: "Journal Pharmaceutics",
      year: "2022",
      description:
        "Recognized for the outstanding quality of reviews provided during 2022.",
    },

    {
      id: 2,
      title: "World's Top 2% Scientists",
      organization: "Stanford University, California, USA",
      year: "2021–2022",
      description:
        "Included in the World's Top 2% Scientists list published by Stanford University.",
    },

    {
      id: 3,
      title: "AAPS Post-Doctoral Fellow Award",
      organization:
        "American Association of Pharmaceutical Scientists",
      year: "2017",
      description:
        "Award received at the annual AAPS conference held at San Diego Convention Center, USA.",
    },

    {
      id: 4,
      title: "Best Poster Award",
      organization:
        "International Society for Extracellular Vesicles",
      year: "2017",
      description:
        "Received at the annual meeting held in Toronto, Canada.",
    },

    {
      id: 5,
      title: "Gandhian Young Technological Innovation Award",
      organization: "Festival of Innovations (FOIN)",
      year: "2017",
      description:
        "Award received at the Festival of Innovations hosted by the Office of the President of India, Rashtrapati Bhavan, New Delhi.",
    },

    {
      id: 6,
      title: "Punjab Young Scientist Award",
      organization: "Punjab Academy of Science",
      year: "2013",
      description:
        "Award received at the 17th Punjab Science Congress held at Punjab Technical University, Jalandhar.",
    },

    {
      id: 7,
      title: "BEST INDIA-2013",
      organization:
        "ABLE in association with DST",
      year: "2013",
      description:
        "Selected among the best 20 teams across India for the workshop held in Bangalore.",
    },

    {
      id: 8,
      title: "Rising Sun in Asia Award",
      organization: "Controlled Release Society",
      year: "2013",
      description:
        "Award received at the 40th Annual Meeting and Exposition of the Controlled Release Society, Hawaii Convention Centre, Honolulu, USA.",
    },

    {
      id: 9,
      title: "DBT International Travel Award",
      organization:
        "Department of Biotechnology",
      year: "2013",
      description:
        "Supported attendance and poster presentation at the 40th Annual Meeting and Exposition of the Controlled Release Society in Hawaii.",
    },

    {
      id: 10,
      title: "CSIR International Travel Grant",
      organization:
        "Council of Scientific and Industrial Research",
      year: "2013",
      description:
        "Supported attendance and poster presentation at the Controlled Release Society meeting in Hawaii.",
    },

    {
      id: 11,
      title: "Senior Research Fellowship",
      organization:
        "Council of Scientific and Industrial Research, New Delhi",
      year: "2013",
      description:
        "Senior Research Fellowship awarded by CSIR.",
    },
  ],

  // ----------------------------------------------------
  // FUNDED PROJECTS / GRANTS
  // ----------------------------------------------------

  grants: [
    {
      id: 1,
      agency: "ICMR",
      title:
        "Pharmacological exploration and repurposing of an anti-malarial drug for the treatment of triple-negative breast cancer using bovine milk exosomes as a delivery vehicle",
      duration: "2023–2026",
      amount: "39.87 Lakhs",
      role: "PI",
      status: "Ongoing",
    },

    {
      id: 2,
      agency: "ICMR",
      title:
        "Folic acid-functionalized drug cocktail loaded lipid Nano-constructs for ameliorating the triple-negative breast cancer therapy",
      duration: "2023–2026",
      amount: "21.87 Lakhs",
      role: "PI",
      status: "Ongoing",
    },

    {
      id: 3,
      agency: "SERB",
      title:
        "Milk-Derived Exosomes as Drug Delivery Vehicles for Cancer Therapies",
      duration: "2023–2024",
      amount: "24.20 Lakhs",
      role: "PI/Mentor",
      status: "Completed",
    },

    {
      id: 4,
      agency: "ICMR",
      title:
        "Development of exosome-based drug delivery system for naturally inspired novel multifunctional neuroprotective molecules and their biological evaluation in Alzheimer's disease models",
      duration: "2023–2026",
      amount: "55.59 Lakhs",
      role: "Co-PI",
      status: "Ongoing",
    },

    {
      id: 5,
      agency: "DST",
      title:
        "Microbial diversity and biotechnological potentials of antarctic deep biosphere",
      duration: "Mar 2022 – Feb 2025",
      amount: "31.66 Lakhs",
      role: "PI/Mentor",
      status: "Completed",
    },

    {
      id: 6,
      agency: "SERB",
      title:
        "Novel Milk Exosomes for the Combination Therapy by using Selected Natural Medicine (Paclitaxel & Colchicine) for the Efficient Management of Breast Cancer",
      duration: "Dec 2019 – Mar 2022",
      amount: "31.38 Lakhs",
      role: "PI",
      status: "Completed",
    },
  ],

  // ----------------------------------------------------
  // RESEARCH STATISTICS
  // ----------------------------------------------------

  statistics: [
    {
      id: 1,
      number: "74+",
      label: "Research Publications",
    },

    {
      id: 2,
      number: "10+",
      label: "Research Areas",
    },

    {
      id: 3,
      number: "6",
      label: "Recent Funded Projects",
    },

    {
      id: 4,
      number: "11+",
      label: "Awards & Recognitions",
    },
  ],
};