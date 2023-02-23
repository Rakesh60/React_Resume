import userData from "./userData";
let myData = userData.experience;
let user = { ...myData };
let user1 = user[0];

function Interest() {
  return (
    <>
      <p>Inetrest</p>
      <ul>
        <li>{user1.year}</li>

        <li>{user1.role}</li>
        <li>{user1.company}</li>
      </ul>
    </>
  );
}

export default Interest;
