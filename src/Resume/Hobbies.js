import resume from "./profileData";

function Hobbies() {
  return (
    <>
      <h3>Hobbies</h3>
      <ul>
        {resume.hobbies.map((hobbies) => (
          <li key={hobbies.indexOf}>{hobbies}</li>
        ))}
      </ul>
    </>
  );
}

export default Hobbies;
