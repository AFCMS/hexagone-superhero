import { NavLink } from "react-router";

export default function Unknown404() {
  return (
    <div className="hero bg-base-200 sm:mt-24 p-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="">
          <h1 className="text-5xl font-bold">Uh? This page doesn't exist</h1>
          <p className="py-6">Go back to the homa page.</p>
          <NavLink to="/" className="btn btn-primary">
            Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}
