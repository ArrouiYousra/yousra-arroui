import React, { useState, useEffect } from 'react';
import './Activities.css';

const Activities = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const activitiesSection = document.getElementById('activities');
    if (activitiesSection) {
      observer.observe(activitiesSection);
    }

    return () => observer.disconnect();
  }, []);

  const activities = [
    {
      name: 'Dermatologie',
      icon: '🔬'
    },
    {
      name: 'Science de la vie',
      icon: '🧬'
    },
    {
      name: 'Débat',
      icon: '💬'
    },
    {
      name: 'Yoga',
      icon: '🧘'
    },
    {
      name: 'Fitness',
      icon: '💪'
    },
    {
      name: 'Pilates',
      icon: '🤸'
    },
    {
      name: 'Cuisine',
      icon: '👨‍🍳'
    },
    {
      name: 'Cours en ligne',
      icon: '📚'
    }
  ];

  return (
    <section id="activities" className="activities">
      <div className="activities-container">
        <div className="activities-header">
          <h2 className="activities-title">Centres d'intérêt</h2>
        </div>

        <div className={`activities-content ${isVisible ? 'visible' : ''}`}>
          {activities.map((activity, index) => (
            <div
              key={activity.name}
              className={`activity-item ${isVisible ? 'visible' : ''}`}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <span className="activity-name">{activity.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;

