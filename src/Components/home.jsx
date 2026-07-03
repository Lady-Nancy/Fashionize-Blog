import React from 'react'
import "../Pages/home.css"
import { useScrollReveal } from '../hooks/useScrollReveal';

const Home = () => {
useScrollReveal('.about > *, .imageSection, .container');
  return (
     <div className="wrapper">
      <div className="all">
        {/* <div className="up">
          <div className="up1">
            <p>FASHIONIZE</p>
            <p>Platform</p>
            <p>Use cases</p>
            <p>Company</p>
            <p>Resources</p>
            <p>Contact</p>
          </div>
          <div className="up2">
            <h5>Wow Try SDK Now</h5>
            <h4>Request a Demo</h4>
          </div>
        </div> */}

        <div className="about">
          <h1>About Fashionize</h1>
          <div className="about1">
            <p>
              we're on a mission to transform the way how our society works. Lorem ipsum dolor sit, 
              amet consectetur adipisicing elit. Ratione non tempora ullam repudiandae reiciendis 
              voluptas placeat velit maiores sequi, officia qui consectetur officiis deleniti.
            </p>
          </div>
          <div className="about2">
            <h6>OUR STORY</h6>
            <h6>WHO WE ARE</h6>
            <h6>OUR AWARDS</h6>
            <h6>TRUSTED ADVISORS</h6>
          </div>
        </div>

        <div className="imageSection">
          <img src="img26-1.jpg" alt="Fashion 1" className="image1" />
          <img src="fashion-african-woman-silk-dress-600nw-2147305099.webp" alt="Fashion 2" className="image2" />
          <img src="pic.jpg" alt="Fashion 3" className="image3" />
          <img src="shotkit-dark-photography-0013.jpg" alt="Fashion 4" className="image4" />
          <img src="guy.jpg" alt="Fashion 5" className="image5" />
          <img src="img20-1.jpg" alt="Fashion 6" className="image6" />
        </div>
      </div>

      <div className="container">
        <div className="them">
          <div className="pics1">
            <img src="download (1).jpg" alt="Product" />
          </div>
          <div className='con'>
            <h1>OUR PRODUCTS</h1>
            <h3>Put It On And Change Your Aura</h3>
            <p>
              Fashionize delivers premium and on-trend clothes and dresses, styled at our headquarters 
              in Los Angeles. We're so confident you'll love what we do that we offer a two-guarantee 
              on what we make.
            </p>
          </div>
        </div>

        <div className="me">
          <div className="con mee">
            <h1>OUR MISSION</h1>
            <h3>Wear It And Wear Confidence</h3>
            <p>
              Fashionize was founded on the belief that style shouldn't break the bank. Our goal is to 
              change the way you think about fashion by delivering premium designs at radically fair prices.
            </p>
          </div>
          <div className="pics2">
            <img src="images (1)1111.jpg" alt="Mission" />
          </div>
        </div>

        <div className="us">
          <div>
            <img src="img2-1.jpg" alt="Socials" className="pics3" />
          </div>
          <div className="uss ">
            <h1>OUR SOCIALS</h1>
            <p>
              Fashionize is more than just quality clothes and dresses - we're an active community of 5 million 
              and counting. Follow us on Instagram for a glimpse of the FASHIONIZELifestyle.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
