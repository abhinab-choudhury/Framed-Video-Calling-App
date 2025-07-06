import { Link } from "react-router-dom";
import { Mail } from "lucide-react"; // optional icon for support link

export default function PageNotFound() {
  return (
    <section className="grid min-h-[85vh] place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center max-w-xl">
        <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Sorry, we couldn’t find the page you’re looking for. It might have
          been removed or you might have mistyped the address.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-indigo-500 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
          >
            Go back home
          </Link>
        </div>
      </div>
    </section>
  );
}
