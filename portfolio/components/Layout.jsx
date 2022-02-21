import Navbar from './shared/Navbar';
import Contact from './Contact';
const Layout = ({ children, contactDetails }) => (
    <div>
        <Navbar />
        {children}
        <Contact contactDetails={contactDetails}/>
    </div>
  )
  export default Layout; 