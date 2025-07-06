export default function Footer() {
  return (
    <footer className="flex justify-center w-fill align-middle p-5 poppins-regular">
      <span>
        Built with ❤️ by{" "}
        <a
          href="https://github.com/abhinab-choudhury"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abhinab Choudhury
        </a>
        .
      </span>

      <div className="mx-3 text-sm font-light">
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Framed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
