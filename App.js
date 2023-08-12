import React from 'react';
import './App.css';
import Navbar from "./navbar";
import About from "./About";
import Menu from "./Menu";
import Reservations from "./Reservation"
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import logo from './logo.png';
import GS from './greeksalad.jpg';
import B from './bruchetta.svg';
import LD from './lemondessert.jpg';
import basket from './basketicon.svg';
import t1 from './1.jfif';
import t2 from './2.jfif';
import t3 from './3.jfif';
import RF from './restauranfood.jpg';
import star from './star.jpg';
import MAB from './marioadrianB.jpg';
import flogo from './footerlogo.png';

function App() {

  const logostyle = {
   width: '250px',
   height: 'auto',
  }
  const headerstyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
  }
  const ownerimage = {
    width: '60%',
    height: 'auto',
  }
  const smallImageStyle = {
    width: '30px',
    height: '30px',
  }
  const foodimage = {
    marginTop: '15px',
    width: '150px',
    height: 'auto',
  }
  const mainimage = {
    width: '150px',
    height: 'auto',
  }
  const testimonialimage = {
    width: '100px',
    height: '100px',
    marginTop: '15px',
  }
  const starStyle = {
    marginRight: '2px',
  };
  const topcontainerStyle = {
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginLeft: '30px',
   marginRight: '30px',
   marginTop: '30px',
   marginBottom: '30px',
  }
  const aboutrectangle = {
    marginBottom: '20px',
    width: '100%',
  }
  const containerStyle = {
    textAlign: 'center',
    marginRight: '30px',
    marginLeft: '30px',
  };
  const rectanglesContainer = {
    display: 'flex',
    justifyContent: 'space-between',
  };
  const rectangleStyle = {
    width: '30%',
    textAlign: 'center',
    backgroundColor: '#FBDABB',
    padding: '15px',
  };
  const leftContainer = {
    flex: 1,
    marginRight: '20px',
  };
  const centerContainer = {
    flex: 1,
    marginRight: '20px',
  };
  const rightContainer = {
    flex: 1,
  };
  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#49SE57',
  };

  const sectionStyle = {
    flex: '1',
    marginLeft: '20px',
  };

  const imageStyle = {
    width: '100px',
    height: 'auto',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    textcolor: 'white',
  };

  const headingStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textcolor: '#F4CE14',
  }

  return (
    <div>

        <meta charSet="utf-8" />
        <title>Little Lemon Chicago</title>
        <meta name="description" content="Little Lemon Chicago - A family owned Mediterranean restaurant." />
        <meta property="og:title" content="Little Lemon Chicago" />
        <meta property="og:description" content="A family owned Mediterranean restaurant." />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://littlelemon.com" />

      <div style={headerstyle}>
        <img src={logo} alt='header' style={logostyle} />
      </div>

      <Router>
      <div style={
          { display: 'flex', justifyContent: 'center', padding: '20px', color: '#333', margin: '0 10px', }
          }>
        <Navbar />
        </div>
        <Routes>
          <Route path='/' exact element={<About/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/reservations' element={<Reservations/>} />
        </Routes>
      </Router>

      <div>

        <div>
         <div style={topcontainerStyle}>
          <div style={leftContainer}>
            <h1>Little Lemon Chicago</h1>
          </div>
          <div style={centerContainer}>
           <p>We are a family owned Mediterranean restaurant, focused on traditional recipes with a modern twist.</p>
          </div>
          <div style={rightContainer}>
           <img src={RF} alt=" main" style={mainimage} />
          </div>
         </div>
        </div>

        <div>
          <div style={containerStyle}>
             <h2>This week's specials!</h2>
             <div style={rectanglesContainer}>
               <div style={rectangleStyle}>
                 <img src={GS} alt="greek salad" style={foodimage} />
                 <div>
                  <h4>Greek Salad</h4>
                  <p>$12.99</p>
                  <p>The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                  <h5>Order for Delivery!</h5>
                  <p><img src={basket} alt="basket icon"></img></p>
                 </div>
               </div>
               <div style={rectangleStyle}>
                <img src={B} alt = "bruchetta" style={foodimage} />
                <div>
                  <h4>Bruchetta</h4>
                  <p>$5.99</p>
                  <p>Our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                  <h5>Order for Delivery!</h5>
                  <p><img src={basket} alt="basket icon"></img></p>
                </div>
               </div>
               <div style={rectangleStyle}>
                <img src={LD} alt="lemon dessert" style={foodimage} />
                <div>
                 <h4>Lemon Dessert</h4>
                 <p>$4.50</p>
                 <p>This comes straight from grandmama’s recipe book, every last ingredient has been sourced and is as authentic as it can be imagined.</p>
                 <h5>Order for Delivery!</h5>
                 <p><img src={basket} alt="basket icon"></img></p>
                </div>
              </div>
           </div>
         </div>
        </div>

      <div>
        <div style={containerStyle}>
          <h2>Testimonials</h2>
          <div>
           <div style={rectanglesContainer}>
            <div style={rectangleStyle}>
             <img src={t1} alt="testimonial" style={testimonialimage} />
             <div>
              <p>
              <img src={star} alt="rating" style={{ ...smallImageStyle, ...starStyle }} />
              <img src={star} alt="rating" style={{ ...smallImageStyle, ...starStyle }} />
              <img src={star} alt="rating" style={{ ...smallImageStyle, ...starStyle }} />
              <img src={star} alt="rating" style={{ ...smallImageStyle, ...starStyle }} />
              </p>
              <p>Little Lemon is my favorite go-to restaurant, and has always satisfied my food cravings!</p>
             </div>
           </div>
           <div style={rectangleStyle}>
            <img src={t2} alt="testimonial" style={testimonialimage} />
            <div>
             <p>
              <img src={star} alt="rating" style={{ ...smallImageStyle, ...starStyle }} />
              <img src={star} alt="rating" style={{ ...smallImageStyle, ...starStyle }} />
              <img src={star} alt="rating" style={{ ...smallImageStyle, ...starStyle }} />
              <img src={star} alt="rating" style={{ ...smallImageStyle, ...starStyle }} />
              <img src={star} alt="rating" style={{ ...smallImageStyle, ...starStyle }} />
             </p>
             <p>A little love and pepper in the meals always makes me come back for more!</p>
           </div>
         </div>
         <div style={rectangleStyle}>
          <img src={t3} alt="testimonial" style={testimonialimage} />
          <div>
            <p>
              <img src={star} alt="rating" style={{ ...smallImageStyle, ...starStyle }} />
              <img src={star} alt="rating" style={{ ...smallImageStyle, ...starStyle }} />
              <img src={star} alt="rating" style={{ ...smallImageStyle, ...starStyle }} />
              <img src={star} alt="rating" style={{ ...smallImageStyle, ...starStyle }} />
              <img src={star} alt="rating" style={{ ...smallImageStyle, ...starStyle }} />
            </p>
            <p>From the very beginning, Little Lemon has not given up on its exemplary quality</p>
            </div>
           </div>
          </div>
        </div>
        </div>
       </div>

       <div>
        <div style={topcontainerStyle}>
          <div style={aboutrectangle}>
            <div style={aboutrectangle}>
             <h2>Little Lemon</h2>
             <h3>Chicago</h3>
             <p>Little Lemon opened its doors in 1997, with pure dedication to quality and an exquisite taste, by two Italian brothers - Mario and Adrian. The business has expanded ever since, along with more mouth-watering dishes and a dining experience that remains unmatchable.</p>
             </div>
            </div>
            <div style={aboutrectangle}>
              <img src={MAB} alt="owners of Little Lemon" style={ownerimage} />
            </div>
         </div>

      </div>

      <footer style={footerStyle}>
      <div style={sectionStyle}>
        <img src={flogo} alt="Logo" style={imageStyle} />
      </div>
      <div style={sectionStyle}>
        <ul style={listStyle}>
          <li><a href="#">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Reservations</a></li>
          <li><a href="#">Order Online</a></li>
          <li><a href="#">Log In</a></li>
        </ul>
      </div>
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Contact</h2>
        <ul style={listStyle}>
          <li><a href="#">Address</a></li>
          <li><a href="#">Phone Number</a></li>
          <li><a href="#">Emails</a></li>
        </ul>
      </div>
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Social Media Links</h2>
        <ul style={listStyle}>
          <li><a href="#">Address</a></li>
          <li><a href="#">Phone Number</a></li>
          <li><a href="#">Emails</a></li>
        </ul>
      </div>
    </footer>

   </div>

  </div>
  );
}

export default App;



