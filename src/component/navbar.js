function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">
      <a className="navbar-brand" href="/#">
        Dashboard
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item border rounded text-white">
            <a className="nav-link" href="/#">
              <i class="bi bi-search"></i> Search
            </a>
          </li>
          <li className="nav-item border rounded ms-2 text-white">
            <a className="nav-link" href="/#">
              Account
            </a>
          </li>
          <li className="nav-item border rounded ms-2 text-white">
            <a className="nav-link" href="/#">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
