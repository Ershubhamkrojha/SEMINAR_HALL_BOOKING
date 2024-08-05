import React from 'react'
import AboutImg from "../About/About_Image/3.jpg"
import './about.css'


const About = () => {
  return (
    
            
     <section id="about" className="about">
    {/* // <div className="about-section">
    //             <h2>About Us Page</h2>
    //             <p>Some text about who we are and what we do.</p>
    //             <p>Resize the browser window to see that this page is responsive by the way.</p>
    //         </div> */}
            
    
    <div className="container" data-aos="fade-up">
    
      <div className="row">
        <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
          <img src={AboutImg} className="img-fluid" alt=""/>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
          <h3>KEC.</h3>
          <p className="fst-italic">
          Kongu Engineering College, one of the foremost multi professional research-led Institutions is internationally a recognized leader in professional and career-oriented education. It provides an integral, inter-disciplinary education - a unique intersection between theory and practice, passion and reason. The College offers courses of study that are on the frontiers of knowledge and it connects the spiritual and practical dimensions of intellectual life, in a stimulating environment that fosters rigorous scholarship and supportive community. This Institute is a great possession of the committed Trust called 'The Kongu Vellalar Institute of Technology Trust' in Erode District, Tamilnadu. The noble Trust has taken the institute to greater heights since its inception in 1983 and has established the college as a forum for imparting value based education for men and women.
          </p>
         
            <i className="ri-check-double-line"></i> The noble Trust has taken the institute to greater heights since its inception in 1983 and has established the college as a forum for imparting value based education for men and women.
            <i className="ri-check-double-line"></i>Affiliated to Anna University Chennai,the college has completed more than three decades of dedicated service to the people of India and abroad in the field of Technical Education. The Institution has an area of 167 acres of land richly endowed with beautiful greeneries.
            <i className="ri-check-double-line"></i>The college with its state-of- the- art infrastructural facilities and excellent academic records has earned recognition as one of the reputed educational institutions for men and women in India.
        
          <p className='aboutpara'>
         
          </p>
        </div>         
      </div>
    </div>
  </section>
  )
}

export default About