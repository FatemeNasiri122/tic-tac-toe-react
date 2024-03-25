const Toggle = ({theme,setTheme}) => {
  const handleChange = (e) => {
      setTheme(e.target.checked ? "dark" : "light");
      localStorage.setItem("theme", e.target.checked ? "dark" : "light");
  }
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className={`toggle ${theme === "dark" ? "toggle-dark" : ""}`}
        onChange={handleChange}
        checked={theme === "dark"}
      />
      <label htmlFor="check">تم تاریک</label>
    </div>
  );
};

export default Toggle;