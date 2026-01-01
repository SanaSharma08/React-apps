import React, { useState } from 'react';
import './PORGrid.css';

const POR_DATA = [
  {
    id: 1,
    role: "Jr Content Writer",
    organization: "Computer Society of India",
    date: "2021 - 2022",
    description: "I began my journey seeking to bridge my analytical engineering mindset with my passion for writing, landing my first role as a Junior Tech Content Writer for the Computer Society of India (CSI). This was far from typical documentation; I worked closely with the VP, translating highly technical material into accessible, professional narratives. My achievements included documenting comprehensive version control handbooks for new members and distilling complex research papers on robotics into impactful conference presentations. This role was foundational, rapidly evolving my writing from general prose to crisp, professional scripting required for accurate knowledge dissemination among actual researchers.",
    image: "https://i.pinimg.com/1200x/ff/04/9c/ff049cdc9d0f08e998462a6d209d2566.jpg",
    icons: ["logo1.png", "logo2.png"]
  },
  {
    id: 2,
    role: "President",
    organization: "Alan Turing Club (ATC)",
    date: "2022 - 2023",
    description: "Driven by the thought, What if I lead a technical club?, I made the transformative leap to become the President of the Alan Turing Club (ATC). This role was a catalyst for personal and collective growth, where I led a dedicated team of 30 students to significantly expand the culture of competitive coding. I successfully orchestrated domestic coding contests in partnership with Coding Ninjas, initiated Inter-college face-offs, and strategically brought in influential figures like Yash Garg & Ansh Mehra to educate students on emerging tech fields like AI integration. Under my leadership, ATC became a recognized institution, transforming me from a self-proclaimed introvert into a name frequently heard by aspiring students and Unacademy tutors alike.",
    image: "https://i.pinimg.com/1200x/ff/04/9c/ff049cdc9d0f08e998462a6d209d2566.jpg",
    icons: ["logo1.png", "logo2.png"]
  },
  {
    id: 3,
    role: "Secretary",
    organization: "Bennett University E-CELL",
    date: "2023 - 2024",
    description: "My story at ATC led to an exciting pivot: accepting the role of Secretary for the Bennett University Entrepreneurship Cell (BU E-CELL). This opportunity placed me directly in the ecosystem of innovation, working with startups, dealing with angel investors, and managing high-stakes events. My key accomplishments included orchestrating our flagship B-Plan competition, leading a major collaboration with Babson College to build an international innovation community, and coordinating nationwide E-Cell partnerships. The ultimate test of my strategy and communication was the privilege of pitching our cell's vision directly to industry titans such as Mr. Hitesh Oberoi (CEO of Info Edge) and Mr. Piyush Goyal (Minister of Commerce and Industry)",
    image: "https://i.pinimg.com/1200x/ff/04/9c/ff049cdc9d0f08e998462a6d209d2566.jpg",
    icons: ["logo1.png", "logo2.png"]
  }
];

const PORGrid = () => {
  const [expandedId, setExpandedId] = useState(null);

  // Find the data for the currently selected modal
  const activeRole = POR_DATA.find(item => item.id === expandedId);

  const toggleExpand = (id) => {
    setExpandedId(id);
    // Prevent background scrolling when modal is open
    if (id) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  };

  return (
    <section className="por-section-wrapper">
      <div className="por-header">
        <h2 className="por-main-title">Roles & Responsibilities</h2>
        <div className="por-title-underline"></div>
      </div>

      <div className="por-grid-layout">
        {POR_DATA.map((item, index) => (
          <div 
            key={item.id} 
            className={`por-card por-card-${index + 1}`}
            style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.9)), url(${item.image})` }}
          >
            <div className="por-step-number">{index + 1}</div>
            <div className="por-card-content-box">
              <span className="por-org-badge">{item.organization}</span>
              {/* RE-INSERTED ICON ROW HERE */}
              <div className="por-icon-row">
                {item.icons?.map((icon, i) => (
                  <img key={i} src={icon} alt="org-icon" className="por-mini-icon" />
                ))}
              </div>
              <h3 className="por-role-name">{item.role}</h3>
              <p className="por-description-preview">{item.description}</p>
              <button className="por-read-more" onClick={() => toggleExpand(item.id)}>
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FIXED MODAL: Now outside the grid to prevent shaking */}
      {expandedId && (
        <div className="por-modal-overlay" onClick={() => toggleExpand(null)}>
          <div className="por-modal-content" onClick={e => e.stopPropagation()}>
            <button className="por-close-btn" onClick={() => toggleExpand(null)}>×</button>
            
            <div className="por-modal-body">
              <div className="por-modal-header-row">
                 <span className="por-modal-badge">{activeRole.organization}</span>
                 {/* ICONS IN MODAL TOO */}
                 <div className="por-icon-row">
                    {activeRole.icons?.map((icon, i) => (
                      <img key={i} src={icon} alt="icon" className="por-mini-icon" />
                    ))}
                 </div>
              </div>

              <h2 className="por-modal-title">{activeRole.role}</h2>
              <div className="por-modal-scroll-area">
                <p className="por-modal-text">{activeRole.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PORGrid;