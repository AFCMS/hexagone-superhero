import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../../auth/AuthContext";
import sha256 from "../../utils/sha256";
import { useEffect, useState } from "react";

export default function Header() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [avatarUrl, setAvatarUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (user?.email) {
      sha256(user.email).then((hash) => {
        setAvatarUrl(`https://seccdn.libravatar.org/avatar/${hash}?s=40`);
      });
    }
  }, [user]);

  return (
    <header className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost text-xl">
          Superheros
        </NavLink>
      </div>
      <div className="flex gap-2">
        {user?.email ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const searchQuery = formData.get("search") as string;
              navigate(`/superhero?search=${encodeURIComponent(searchQuery)}`);
            }}
          >
            <input
              name="search"
              title="Login first"
              type="text"
              defaultValue={
                new URLSearchParams(location.search).get("search") ?? ""
              }
              placeholder="Search Superheros"
              className="input input-bordered w-24 md:w-auto"
            />
          </form>
        ) : (
          <input
            name="search"
            type="text"
            disabled
            defaultValue={
              new URLSearchParams(location.search).get("search") ?? ""
            }
            placeholder="Search Superheros"
            className="input input-bordered w-24 md:w-auto"
          />
        )}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {user?.email && avatarUrl ? (
                <img src={avatarUrl} alt="avatar" />
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M406.5 399.6C387.4 352.9 341.5 320 288 320l-64 0c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3l64 0c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z" />
                </svg>
              )}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {user?.email ? (
              <>
                <li>
                  <NavLink to="/logout" className="">
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/login" className="">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/register" className="">
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
