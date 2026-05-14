function Header({ onLogout }) {
  return (
    <header className="sma-header">
      <div className="sma-header-brand">
        <span className="sma-header-logo">◆</span>
        <span className="sma-header-title">Student Management System</span>
      </div>
      <div>
      <nav className="sma-header-nav">
        <span className="sma-header-nav-item sma-nav-active">Students</span>
        {onLogout && (
          <button className="sma-btn-logout" onClick={onLogout} style={{position:"absolute",marginLeft:"30em"}}>
            Sign Out
          </button>
        )}
      </nav>
      </div>
    </header>
  );
}
export default Header;