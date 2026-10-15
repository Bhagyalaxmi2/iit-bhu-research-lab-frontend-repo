import React from "react";

import FloatingGallery from "../components/Home/FloatingGallery";
import Footer from "../components/Footer/Footer";
 

import ResearchSec from "../components/Research/ResearchSec";
import About from "../Pages/About";
import PrincipalInvestigator from "../components/Home/PrincipalInvestigator";
import ResearchFocus from "../components/Home/ResearchFocus";
import LatestPub from "../components/Home/LatestPub";
import CollaborationCTA from "../components/Home/CollaborationCTA";
import OurLaboratory from "../components/Home/OurLaboratory";

function Home() {
  return (
    <>
      <FloatingGallery />
   
      
     
      <PrincipalInvestigator />
      <ResearchFocus />
       <OurLaboratory />

      <LatestPub />

      <CollaborationCTA />

  
    </>
  );
}

export default Home;
