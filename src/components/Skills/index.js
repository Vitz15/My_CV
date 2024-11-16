import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skills = [
  { name: "C#", percentage: 85 },
  { name: "C++", percentage: 90 },
  { name: "Python", percentage: 90 },
  { name: "JavaScript", percentage: 75 },
];

const Skill = () => {
  const [inView, setInView] = useState(false);
  const [progress, setProgress] = useState(
    skills.reduce((acc, skill) => {
      acc[skill.name] = 0;
      return acc;
    }, {})
  );

  const animateProgress = (skillName, targetPercentage) => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < targetPercentage) {
        current += 1;
        setProgress((prevProgress) => ({
          ...prevProgress,
          [skillName]: current,
        }));
      } else {
        clearInterval(interval);
      }
    }, 20);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !inView) {
          setInView(true);
          skills.forEach((skill) => {
            animateProgress(skill.name, skill.percentage);
          });
        } else if (!entry.isIntersecting) {
          setInView(false);
          setProgress(
            skills.reduce((acc, skill) => {
              acc[skill.name] = 0;
              return acc;
            }, {})
          );
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("my-skill");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [inView]);

  return (
    <section className="section" id="my-skill">
      <div className="container text-center">
        <p className="section-subtitle">What I Am Good At?</p>
        <h6 className="section-title mb-6">My Skills</h6>
        {/* row */}
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className={`skill-circle ${inView ? "rotate" : ""}`}>
                <CircularProgressbar
                  value={progress[skill.name]} 
                  text={`${progress[skill.name]}%`} 
                  styles={buildStyles({
                    textColor: "#333",
                    pathColor: "#007bff",
                    trailColor: "#ddd",
                  })}
                />
              </div>
              <h6 className="mt-3">{skill.name}</h6>
            </div>
          ))}
        </div>
        {/* end of row */}
      </div>
      {/* end of container */}
    </section>
  );
};

export default Skill;
