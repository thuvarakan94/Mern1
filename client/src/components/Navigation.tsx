import { Link } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";



function Navigation() {
  const isAuth = useAuthStore((state) => state.isAuth);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  return (
    <header className="bg-yellow-600">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-4 lg:border-none">
          <div className="flex items-center">
            <Link to={isAuth ? "/dashboard" : "/login"}>
              <span className="sr-only">Your Company</span>
              <img
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=white"
                alt=""
              />
            </Link>
          </div>
          {isAuth ? (
            <div className="ml-10 space-x-4">
              <Link
                to="/notes/new"
                className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                New
              </Link>
              <Link
                to="/profile"
                className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
              >
                Profile
              </Link>
              <Link
                to="#"
                className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
              >
                Logout
              </Link>
            </div>
          ) : (
            <div className="ml-10 space-x-4">
              <Link
                to="/login"
                className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Register
              </Link>
            </div>
          )}
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
