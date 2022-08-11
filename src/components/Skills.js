import meter1 from "../assests/img/meter1.svg";
import meter2 from "../assests/img/meter2.svg";
import meter3 from "../assests/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assests/img/arrow1.svg";
import arrow2 from "../assests/img/arrow2.svg";
import colorSharp from "../assests/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>I'm very ambitious Devops Engineer looking for a role in
                established IT company with the opportunity to work with the latest
                technologies on challenging and diverse projects..<br></br> I'm quietly confident, naturally curious, and perpetually working on
                improving my chops one design problem at a time. If I need to define myself in one sentence that would be a family
                person, a sports fanatic,love writing poems and tech-obsessed!!!</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Devops Engineer</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Full Stack Developer</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Cloud Engineer</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}