function Navbar() {
  return (
    <div id="navbar">
        <div className="title">
        <h2>WNC Hiking Hub</h2>
        </div>
        <ul className="links">
          <li>About</li>
          <li>Bio</li>
          <li>Post a Hike</li>
          <li>Join a Hike</li>
          <li>Settings</li>
          <li>Messages</li>
        </ul>
        <button>Log In</button>
    </div>
  );
}
export default Navbar;