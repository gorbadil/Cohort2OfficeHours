import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        alt=""
        className="nav-logo"
      />
      <img
        src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
        alt=""
        className="nav-avatar"
      />
    </nav>
  );
}

export default Navbar;
