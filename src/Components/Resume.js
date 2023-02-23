import Interest from "./Interest";

function Resume({ user }) {
  return (
    <div>
      <h1>Resume</h1>
      <h3>{user}</h3>
      <hr></hr>
      <Interest></Interest>
    </div>
  );
}

export default Resume;
