import "./Header.css";

function Header() {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      Movie Hub
    </span>
  );
}

export default Header;
