import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

export const MainLayout = ({ children }) => (
  <div className="main-container">
    <Header />
    <Navigation />
    <div className="section">{children}</div>
    <Footer />
  </div>
)

export default MainLayout;