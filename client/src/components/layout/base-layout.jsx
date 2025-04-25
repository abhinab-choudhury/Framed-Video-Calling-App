import { Outlet } from "react-router";
import Footer from "../footer";
import Navbar from "../navbar";
import PropTypes from "prop-types";

export default function BaseLayout({ children }) {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        {children}
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
