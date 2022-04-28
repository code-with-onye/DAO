import { Link } from "react-router-dom";

const style = {
  Electbtn: `px-3 py-2  rounded `,
};
const Admin = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center align-items-center w-full  mt-10">
      <Button
        title="Create Election"
        link="/add-election"
        style={`bg-green-500 ${style.Electbtn} bg-opacity-25`}
      />
      <Button
        title="Start Election"
        link="/start-election"
        style={`hover:bg-green-500 ${style.Electbtn} hover:bg-opacity-25`}
      />
      <Button
        title="End Election"
        link="/end-election"
        style={`hover:bg-red-500 ${style.Electbtn} hover:bg-opacity-25`}
      />
      <Button
        title="Make Public"
        link="/make-public"
        style={`hover:bg-blue-500 ${style.Electbtn} hover:bg-opacity-25`}
      />
      <Button
        title="Make Private"
        link="/make-private"
        style={`hover:bg-blue-500 ${style.Electbtn} hover:bg-opacity-25`}
      />
      <Button
        title="Get Candidate"
        link="/get-candidate"
        style={`hover:bg-gray-500 ${style.Electbtn} hover:bg-opacity-25`}
      />
    </div>
  );
};

export default Admin;

const Button = (prop) => {
  return (
    <div className={`px-4 py-2 ${prop.style}`}>
      <Link
        to={prop.link}
        className={`text-decoration-none text-gray-700 hover:text-gray-800 hover:font-semibold translate-x-2 duration-500`}
      >
        {prop.title}
      </Link>
    </div>
  );
};
