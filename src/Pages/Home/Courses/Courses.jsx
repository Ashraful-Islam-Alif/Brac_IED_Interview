import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div>
      <h2 className="text-4xl font-extrabold text-center">Courses</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-8">
        <div>
          <img
            style={{ width: "100%", height: "300px" }}
            src="https://i.ibb.co/7gDcs83/soft-skills.png"
            alt=""
          />
          <h2 className="text-2xl font-semibold py-2">Soft Skills</h2>
          <p className="pb-4">
            Learn essential soft skills such as communication, teamwork,
            leadership, and problem-solving to excel in your career and personal
            life.
          </p>
          <p className="text-xl font-bold">
            <span className="font-extrabold text-xl">৳:</span> $99.99
          </p>
          <Link to="course/softSkills">
            <button className="btn btn-success">Detail</button>
          </Link>
        </div>
        <div>
          <img
            style={{ width: "100%", height: "300px" }}
            src="https://i.ibb.co/bmHk559/technical-skill.jpg"
            alt=""
          />
          <h2 className="text-2xl font-semibold py-2">Technical Skills</h2>
          <p className="pb-4">
          Get hands-on training in technical skills like programming, data analysis, web development, and more, to enhance your job prospects and stay competitive in the digital age.
          </p>
          <p className="text-xl font-bold">
            <span className="font-extrabold text-xl">৳:</span> $149.99
          </p>
          <Link to={"course/technicalSkill"}>
            <button className="btn btn-success">Detail</button>
          </Link>
        </div>
        <div>
          <img
            style={{ width: "100%", height: "300px" }}
            src="https://i.ibb.co/7gDcs83/soft-skills.png"
            alt=""
          />
          <h2 className="text-2xl font-semibold py-2">Soft Skills</h2>
          <p className="pb-4">
            Learn essential soft skills such as communication, teamwork,
            leadership, and problem-solving to excel in your career and personal
            life.
          </p>
          <p className="text-xl font-bold">
            <span className="font-extrabold text-xl">৳:</span> $99.99
          </p>
          <Link to={`course/}`}>
            <button className="btn btn-success">Detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
