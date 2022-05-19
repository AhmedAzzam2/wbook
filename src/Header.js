import React from "react";

  // Dark mode toggle button 
  const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = React.useState(false);
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
    return (
      <div className="dark-mode-toggle">
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    );
  };
  
   

export default () => ( 
  
  <div className="header">
    <header className="header-header">
      <div className='logo'>
        Logo
      </div>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item">
            <a href="#" className="header-nav-link">
             <i class="fas fa-home"></i> <span>Home</span>
            </a>
          </li>
          <li className="header-nav-item">
            <a href="#" className="header-nav-link">
              About
            </a>
          </li>
          <li className="header-nav-item">
            <a href="#" className="header-nav-link">
              Contact
            </a>
          </li>
          <li className="header-nav-item">
            <a href="#" className="header-nav-link">
              <i class="fas fa-search"></i>
            </a>
          </li>
          <DarkModeToggle />
        </ul>
          {/* <nav className="header-author-nav">
          <span >Login</span>
            <ul className="header-author-nav-list">
              <li className="header-author-nav-item">
                <a href="#" className="header-author-nav-link">
                  <i class="fas fa-user"></i> <span>Profile</span>
                </a>
              </li>
              <li className="header-author-nav-item">
                <a href="#" className="header-author-nav-link">
                  <i class="fas fa-bell"></i> <span>Notification</span>
                </a>
              </li>
              <li className="header-author-nav-item">
                <a href="#" className="header-author-nav-link">
                  <i class="fas fa-sign-out-alt"></i> <span>Logout</span>
                </a>
              </li>
            </ul>
          </nav> */}
      </nav>
    </header>
  </div>
);
