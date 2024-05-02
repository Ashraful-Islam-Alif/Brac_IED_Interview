import { useEffect, useState } from "react";
import EarlyChildhoodEducation from "./EarlyChildhoodEducation";


const EarlyChildhoodEducations = () => {
    const [earlyChildhoodEducations, setearlyChildhoodEducations] = useState([]);
  useEffect(() => {
    fetch("earlyEducation.json")
      .then((res) => res.json())
      .then((data) =>{
        setearlyChildhoodEducations(data.early_childhood_education_courses)
      } )
  }, []);
    return (
       <div>
      <h2 className="text-4xl font-extrabold text-center">Early Childhood Education</h2>
         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-8">
      {earlyChildhoodEducations.map((earlyChildhoodEducation) => (
        <EarlyChildhoodEducation
         key={earlyChildhoodEducation._id} 
         earlyChildhoodEducation={earlyChildhoodEducation}
         ></EarlyChildhoodEducation>
      ))}
    </div>
       </div>
    );
};

export default EarlyChildhoodEducations;