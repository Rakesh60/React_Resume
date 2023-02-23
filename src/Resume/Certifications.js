import resume from "./profileData";

function Certificate() {
  return (
    <>
      <h3>Certifications</h3>
      <ol>
        {resume.certificate.map((certificate) => (
          <li>{certificate}</li>
        ))}
      </ol>
    </>
  );
}

export default Certificate;
