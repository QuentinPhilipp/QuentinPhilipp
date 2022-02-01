import Navbar from './shared/Navbar';

const Layout = ({ children }) => (
    <div>
        <Navbar />
        <div className="main-container container-fluid">
            {children}
        </div>
    </div>
  )
  export default Layout; 