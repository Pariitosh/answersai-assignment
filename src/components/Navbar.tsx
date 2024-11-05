import '../styles/navbar.css'
interface NavbarProps {
    onNavItemClick: (component: 'home' | 'course') => void;
    selectedComponent: 'home' | 'course';
  }
export const Navbar: React.FC<NavbarProps> = ({ onNavItemClick,selectedComponent }) => {    
    const handleHomeClick = () => {
        onNavItemClick('home');
      };
    
      const handleCoursesClick = () => {
        onNavItemClick('course');
      };
    
    return (
        
        
        <nav>
            <div className='nav-wrapper'>
                <div className="nav-left">
                    <img className='logo' src="logo.svg" alt="" />
                    <div  className={`nav-option ${selectedComponent === 'home' ? 'selected' : ''}`} onClick={handleHomeClick}>
                        <img src='home.svg' alt="" />
                        <p>Home</p>
                    </div>
                    <div className={`nav-option ${selectedComponent === 'course' ? 'selected' : ''}`} onClick={handleCoursesClick}>
                        <img src="courses.svg" alt="" />
                        <p>Courses</p>
                    </div>
                </div>
                <div className="nav-right">
                    <div className='nav-search'>
                        <div className='nav-icon'>
                            <svg viewBox="0 0 16 16" focusable="false" ><path fill-rule="evenodd" clip-rule="evenodd" d="M6.85294 0C5.03543 0 3.29235 0.722004 2.00718 2.00718C0.722003 3.29235 0 5.03543 0 6.85294V7.14706C0 8.96457 0.722004 10.7076 2.00718 11.9928C3.29235 13.278 5.03543 14 6.85294 14H7.14706C8.62785 14 10.0592 13.5207 11.2338 12.6481L14.2928 15.7071L15.707 14.2929L12.648 11.2339C13.5207 10.0593 14 8.6279 14 7.14706V6.85294C14 5.03543 13.278 3.29235 11.9928 2.00718C10.7076 0.722003 8.96457 0 7.14706 0H6.85294ZM3.42139 3.42139C4.33149 2.51129 5.56586 2 6.85294 2H7.14706C8.43414 2 9.66851 2.51129 10.5786 3.42139C11.4887 4.33149 12 5.56586 12 6.85294V7.14706C12 8.43414 11.4887 9.66851 10.5786 10.5786C9.66851 11.4887 8.43414 12 7.14706 12H6.85294C5.56586 12 4.33149 11.4887 3.42139 10.5786C2.51129 9.66851 2 8.43414 2 7.14706V6.85294C2 5.56586 2.51129 4.33149 3.42139 3.42139Z" fill="currentColor"></path></svg>
                        </div>
                        <input />
                    </div>

                    <button className='trial-btn'>Start trial</button>
                    <div className='burger'>
                        <img src='burger.svg' alt=''/>
                    </div>
                </div>
            </div>
        </nav>
    )
}