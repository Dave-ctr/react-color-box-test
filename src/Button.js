const Button = ({ isLightText, setIsLightText }) => {
  return (
    <button onClick={() => setIsLightText(!isLightText)}>
      Toggle Text Color
    </button>
  );
};
export default Button;
