import Navbar from './shared/Navbar';
import Contact from './Contact';
const Layout = ({ children }) => (
    <div>
        <Navbar />
        {children}
        <Contact />
    </div>
  )
  export default Layout; 