import { Link, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(-1);
    }
    return (
                <div id="error-page" className="text-center flex flex-col gap-10 justify-center items-center h-screen">
      <h1 className="text-5xl font-bold">Oops!</h1>
      <p className="text-3xl font-normal">Sorry, an unexpected error has occurred.</p>
      <p className="italic text-2xl font-light">
        <i>{error?.statusText || error?.message} <span>!!!</span></i>
        <br></br>
        <i>{error?.status}</i>
        </p>
      {
        <div>
            <Link  className="p-3 bg-slate-600 text-white font-semibold rounded" onClick={handleNavigate}>Go Back</Link>
        </div>
      }
    </div>
    );
};

export default ErrorPage;