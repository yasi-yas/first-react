const Button = ({ title = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded bg-purple-700 text-white w-full h-12"
    >
      {title}
    </button>
  );
};

export default Button;
