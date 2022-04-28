import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center align-items-center w-full ">
      <Button title="Create Election" link="/add-election" />
      <Button title="Start Election" link="/start-election" />
      <Button title="End Election" link="/end-election" />
      <Button title="Make Public" link="/make-public" />
      <Button title="Make Private" link="/make-private" />
      <Button title="Get Candidate" link="/get-candidate" />
    </div>
  );
};

export default Admin;

const Button = (prop) => {
  return (
    <div className=" px-4 py-2 border-l">
      <Link to={prop.link} className=" text-decoration-none ">
        {prop.title}
      </Link>
    </div>
  );
};
