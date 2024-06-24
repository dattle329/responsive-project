import { useState } from 'react'
import './App.css'

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="container">
      <header>
        <a href="#"><img src="src\assets\img\Dmission.png" alt="" /></a>
        <ul>
          <li><a href="">Homiee1</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">Our Service</a></li>
          <li><a href="">Case Study</a></li>
          <li><a href="">Career</a></li>
        </ul>
        <div className='toggle'>
        <button onClick={toggleDropdown}><i className="bi bi-list"></i></button>
        <ul style={{ display: isDropdownOpen ? 'block' : 'none' }}>
        <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Our Service</a></li>
            <li><a href="">Case Study</a></li>
            <li><a href="">Career</a></li>
          </ul>
        </div>
      </header>
      <body>
        <h1>News & Blogs</h1>
        <div className="item">
          <div className="blog-item">
            <a href=""><img src="src\assets\img\billboad.png" alt="" /></a>
            <div className="blog-item-content">
              <span>27 May 2024</span><br />
              <span>Navigating the Future: Top 10 Block chain Trends in 2024</span>
            </div>
          </div>
          <div className="blog-item">
            <a href=""><img src="src\assets\img\billboad.png" alt="" /></a>
            <div className="blog-item-content">
              <span>27 May 2024</span><br />
              <span>Navigating the Future: Top 10 Block chain Trends in 2024</span>
            </div>
          </div>
          <div className="blog-item">
            <a href=""><img src="src\assets\img\billboad.png" alt="" /></a>
            <div className="blog-item-content">
              <span>27 May 2024</span><br />
              <span>Navigating the Future: Top 10 Block chain Trends in 2024</span>
            </div>
          </div>
        </div>
      </body>
    </div>
  )
}

export default App
