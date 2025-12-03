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
      name: 'Science de la vie',
      image: 'https://api.iconify.design/mdi/test-tube.svg?color=%23ffffff'
    },
    {
      name: 'Dermatologie',
      image: 'https://api.iconify.design/mdi/test-tube.svg?color=%23ffffff'
    },
    {
      name: 'Yoga',
      image: 'https://api.iconify.design/mdi/yoga.svg?color=%23ffffff'
    },
    {
      name: 'Pilates',
      image: 'https://api.iconify.design/mdi/yoga.svg?color=%23ffffff'
    },
    {
      name: 'Fitness',
      image: 'https://api.iconify.design/mdi/dumbbell.svg?color=%23ffffff'
    },
    {
      name: 'Débat',
      image: 'https://api.iconify.design/mdi/forum-outline.svg?color=%23ffffff'
    },
    {
      name: 'Cours en ligne',
      image: 'https://api.iconify.design/mdi/book-open-variant.svg?color=%23ffffff'
    },
    {
      name: 'Cuisine',
      image: 'https://api.iconify.design/mdi/chef-hat.svg?color=%23ffffff'
    },
    {
      name: 'Jeux vidéos',
      image: 'https://api.iconify.design/mdi/gamepad-variant.svg?color=%23ffffff'
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
              {activity.image && (
                <img 
                  src={activity.image} 
                  alt={activity.name}
                  className="activity-image"
                />
              )}
              <span className="activity-name">{activity.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
