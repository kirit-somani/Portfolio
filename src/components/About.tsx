import { Suspense, lazy } from "react";
import "./styles/About.css";

const AboutScene = lazy(() => import("./AboutScene"));

const About = () => {
  return (
    <div className="about-section" id="about">
      <Suspense fallback={null}>
        <AboutScene />
      </Suspense>
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Data Science student at UPES specializing in machine learning and
          analytics. Experienced in building predictive models and applying
          data-driven techniques across healthcare, real estate, and marketing
          domains. Proficient in Python, SQL, and data visualization, with a strong
          foundation in problem-solving and model evaluation.
        </p>
      </div>


    </div>
  );
};

export default About;
