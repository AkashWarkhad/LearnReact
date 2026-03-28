import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";


/**
 * Food app design :
 * HEADER :
 *  - Logo
 *  - Nav Items
 *
 * BODY :
 *  - Search Bar
 *  - Restaurant Container
 *      - Food Cards
 *          - Img, Name of restro, star rating, cusines, delivery time
 *
 * FOOTER :
 *  - Copyrights
 *  - Contact details
 *  - Links
 *  - Addess
 */

const AppLayout = () => 
{
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default AppLayout;