const Loader = () => {
  return (
    <div className="w-12 animate-spin-slow">
      <svg
        viewBox="25 25 50 50"
        className="w-full h-full transform origin-center"
      >
        <circle
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke="hsl(214, 97%, 59%)"
          strokeWidth="2"
          strokeLinecap="round"
          className="animate-dash"
        />
      </svg>
    </div>
  );
};

export default Loader;
