import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Here you would add your password reset logic
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex justify-center align-middle">
        <div className="border border-black rounded-md bg-white p-10 w-96">
          {!submitted ? (
            <>
              <h1 className="font-bold text-2xl text-center mb-2">Forgot Password</h1>
              <p className="text-gray-600 text-center mb-6">
                Enter your email address and we&apos;ll send you a link to reset your password
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    className="shadow-sm border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mt-6">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg w-full transition-colors duration-200"
                    type="submit"
                  >
                    Send Reset Link
                  </button>
                </div>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex justify-center space-x-2 text-sm">
                  <span className="text-gray-600">Remember your password?</span>
                  <Link to="/signin" className="text-blue-600 hover:text-blue-800 font-medium">
                    Sign In
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="mb-6 flex justify-center">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">Check Your Email</h2>
              <p className="text-gray-600 mb-6">
                We&apos;ve sent a password reset link to:
                <br />
                <span className="font-medium text-gray-800">{email}</span>
              </p>
              <p className="text-sm text-gray-500 mb-6">If you don&apos;t see it, check your spam folder</p>
              <button onClick={() => setSubmitted(false)} className="text-blue-600 hover:text-blue-800 font-medium">
                Return to forgot password
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
