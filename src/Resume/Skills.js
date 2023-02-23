import resume from "./profileData";

function Skills() {
  return (
    <>
      <h3>Technical Skills</h3>
      <ul>
        {resume.skills.map((skills) => (
          <li>{skills}</li>
        ))}
      </ul>
    </>
  );
}

export default Skills;
