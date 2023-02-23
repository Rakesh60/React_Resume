import "./Profile.css";
import resume from "./profileData";
import Basicdetails from "./Basicdestails";
import Skills from "./Skills";
import Education from "./Education";
import Certificate from "./Certifications";
import Hobbies from "./Hobbies";

function Profile() {
  return (
    <>
      <div className="App">
        <Basicdetails
          name={resume.basicdetail[0].name}
          email={resume.basicdetail[0].email}
          address={resume.basicdetail[0].address}
          mobile={resume.basicdetail[0].mobile}
          objective={resume.objective}
        ></Basicdetails>
        <Skills></Skills>
        <Certificate></Certificate>
        <Education></Education>
        <Hobbies></Hobbies>
      </div>
    </>
  );
}

export default Profile;
