const Button = ({ onClick, title = "", color = "" }) => {
  const handleClick = () => {
    if (onClick) onClick(title);
  };

  return (
    <button
      onClick={handleClick}
      className="rounded bg-blue-300 text-white w-12 h-12 hover:scale-110"
      style={{ backgroundColor: color }}
    >
      {title}
    </button>
  );
};

export default Button;
