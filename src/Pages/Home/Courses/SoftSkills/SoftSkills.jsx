import { useEffect, useState } from "react";

const SoftSkills = () => {
  const [softSkills, setSoftSkills] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("softSkills.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setSoftSkills(data?.soft_skills_courses);
      })
      .catch((error) => {
        setError(error);
        console.error("Error fetching soft skills:", error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <h2 className="text-4xl font-extrabold text-center">Soft Skills</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-8">
        {softSkills.map((softSkill) => (
          <div key={softSkill?._id}>
            <img
              style={{ width: "100%", height: "300px" }}
              src={softSkill?.image}
              alt=""
            />
            <h2 className="text-2xl font-semibold pb-2">{softSkill?.title}</h2>
            <p className="pb-4">{softSkill?.description}</p>
            <p className="text-xl font-bold">
              <span className="font-extrabold text-xl">৳:</span>{" "}
              {softSkill?.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftSkills;
