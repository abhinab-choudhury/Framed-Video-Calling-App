export default function Footer() {
  return (
    <div className="flex justify-between w-fill bg-blue-50 p-5 poppins-regular">
      <span className="font-light text-sm">
        Developed by: Abhinab Choudhury
      </span>

      <div className="mx-3 text-sm font-light">
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Framed. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
