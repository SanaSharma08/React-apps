import React, { useState, useEffect } from 'react'; // Added useEffect here
import './AchievementCarousel.css';

const achievements = [
  { id: 1, title: "Dean's Honor List", date: "Dec 2024", image: "https://i.pinimg.com/1200x/0b/67/25/0b67255a1d95953bae8c4ffae4433b62.jpg", description: "Awarded for maintaining a GPA of 3.9/4.0 throughout the academic year.", tag: "Academic" },
  { id: 2, title: "The Starry Night Project", date: "June 2024", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg", description: "I look at the stars and with all my being feel that I am a part of one of these stars.", tag: "Creative" },
  { id: 3, title: "Hackathon Winner", date: "March 2024", image: "https://i.pinimg.com/736x/b8/23/fb/b823fb582349d3bbbfd189d6323e1b7b.jpg", description: "First place for developing an AI-driven accessibility tool for students.", tag: "Co-Curricular" },
  { id: 4, title: "Research Internship", date: "Jan 2024", image: "https://i.pinimg.com/736x/a8/34/0a/a8340abeae97026d7f611768329892f3.jpg", description: "Assisted in data analysis for machine learning models in healthcare.", tag: "Academic" },
  { id: 5, title: "Art Gallery Feature", date: "Nov 2023", image: "https://i.pinimg.com/736x/1d/f7/93/1df79363e9bda25a91d00abff1d425ef.jpg", description: "Selected artist for the annual university digital arts showcase.", tag: "Creative" },
  { id: 6, title: "Student Club Lead", date: "Sept 2023", image: "https://i.pinimg.com/736x/74/3f/a4/743fa43d1cc20977d8eedec193549ad0.jpg", description: "President of the Computer Science Society, managing 200+ members.", tag: "Co-Curricular" },
  { id: 7, title: "Scholarship Award", date: "Aug 2023", image: "https://i.pinimg.com/736x/d6/15/8f/d6158f1287b75404eff5b492ba0a953e.jpg", description: "Recipient of the Excellence in Technology merit-based scholarship.", tag: "Academic" },
  { id: 8, title: "UI/UX Design Win", date: "July 2023", image: "https://i.pinimg.com/1200x/65/4b/4b/654b4bcd897f6d320e91544f56b950f3.jpg", description: "Winner of the city-wide 'Design for Good' mobile app challenge.", tag: "Creative" },
  { id: 9, title: "Volunteering Project", date: "May 2023", image: "https://i.pinimg.com/736x/88/f4/fc/88f4fcae1a2653bc5ea1797e2f419b70.jpg", description: "Developed a local non-profit's website to increase donor engagement.", tag: "Co-Curricular" }
];

const AchievementCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = achievements.length;

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyboard = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyboard);
    return () => window.removeEventListener("keydown", handleKeyboard);
  }, [activeIndex]); 

  return (
    <div className="carousel-container">
      <div className="carousel-stage">
        {achievements.map((item, index) => {
          let offset = index - activeIndex;
          
          if (offset > Math.floor(total / 2)) offset -= total;
          if (offset < -Math.floor(total / 2)) offset += total;

          let position = "hidden";
          if (offset === 0) position = "active";
          else if (offset === -1) position = "left";
          else if (offset === 1) position = "right";
          else if (offset < -1) position = "far-left";
          else if (offset > 1) position = "far-right";

          return (
            <div 
              key={item.id} 
              className={`carousel-card ${position}`} 
              onClick={() => setActiveIndex(index)}
            >
              {/* RESTORED CONTENT STARTS HERE */}
              <div className="card-image" style={{ backgroundImage: `url(${item.image})` }}>
                {/* <div className="expand-badge">Expand</div> */}
              </div>
              
              <div className="card-content">
                <div className="card-header">
                  <h3>{item.title}</h3>
                  <span>{item.date}</span>
                </div>
                <p>"{item.description}"</p>
                <div className="card-footer">
                   <small className="tag-pill">{item.tag}</small>
                </div>
              </div>
              {/* RESTORED CONTENT ENDS HERE */}
            </div>
          );
        })}
      </div>

      <div className="carousel-controls">
        <button onClick={prevSlide} className="nav-btn">‹</button>
        
        <div className="pagination-indicators">
            {achievements.map((_, index) => (
              <div 
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
        </div>

        <button onClick={nextSlide} className="nav-btn">›</button>
      </div>
    </div>
  );
};

export default AchievementCarousel;