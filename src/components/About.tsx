import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
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

      <div className="about-skills">
        <h3 className="title">Technical Stack</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Languages & Libraries</h4>
            <p>Python, SQL, Java, R, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn</p>
          </div>
          <div className="skill-category">
            <h4>Tools & Visualization</h4>
            <p>Power BI, Tableau, Flask, MySQL, Git</p>
          </div>
          <div className="skill-category">
            <h4>Specializations</h4>
            <p>Machine Learning, Exploratory Data Analysis (EDA), Predictive Modeling</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
