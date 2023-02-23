import resume from "./profileData";
function Education() {
  return (
    <>
      <h3>Academic Qualification</h3>
      <ol type="1">
        {resume.education.map((education) => (
          <li>{education}</li>
        ))}
      </ol>
    </>
  );
}

export default Education;
