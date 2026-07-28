import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CSR Exposure & Teamwork</h4>
                <h5>Aatmanirbhar NGO</h5>
              </div>
              <h3>JUN 2024</h3>
            </div>
            <p>
              Collaborated with local community groups to identify social
              challenges and support grassroots initiatives. Assisted in
              organizing outreach activities, improving stakeholder
              communication skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Event Coordination & Outreach</h4>
                <h5>Change For Change Foundation</h5>
              </div>
              <h3>JUL 2024</h3>
            </div>
            <p>
              Supported donation drives involving food, clothing, toys, and books
              for underprivileged communities. Coordinated with volunteers and
              donors to streamline collection and delivery processes.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Operations Support</h4>
                <h5>Vibgyora Innovision Pvt. Ltd.</h5>
              </div>
              <h3>JUN 2025</h3>
            </div>
            <p>
              Assisted in operational and organizational support tasks,
              contributing to smoother workflows. Supported team coordination
              activities and improved efficiency through structured execution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
