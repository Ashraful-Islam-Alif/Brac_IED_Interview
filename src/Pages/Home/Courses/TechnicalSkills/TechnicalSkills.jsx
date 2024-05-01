import { useEffect, useState } from "react";
import TechnicalSkill from "./TechnicalSkill";

const TechnicalSkills = () => {
    const [technicalSkills, settechnicalSkills] = useState([]);
  useEffect(() => {
    fetch("softSkills.json")
      .then((res) => res.json())
      .then((data) =>{
        settechnicalSkills(data.technical_skills_courses)
      } )
  }, []);
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-8">
      
      {technicalSkills.map((technicalSkill) => (
        <TechnicalSkill
         key={technicalSkill._id} 
         technicalSkill={technicalSkill}
         ></TechnicalSkill>
      ))}
    </div>
    );
};

export default TechnicalSkills;