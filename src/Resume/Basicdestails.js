function Basicdetails({ name, email, mobile, address, objective }) {
  console.log(name);
  console.log(email);
  return (
    <>
      <div className="Basicdetail">
        <h1>{name}</h1>
        <p>Email: {email}</p>
        <p>Mobile: {mobile}</p>
        <p>Address: {address}</p>
        <h4>Objective</h4>
        <p>{objective}</p>
      </div>
    </>
  );
}

export default Basicdetails;
