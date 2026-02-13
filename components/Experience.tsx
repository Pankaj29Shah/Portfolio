'use client';

import { Card, Timeline, Tag } from 'antd';
import { EnvironmentOutlined, CalendarOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { experience } from '@/lib/data';
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <section id="experience" className={`${styles.experience} section-padding`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Work <span className="gradient-text">Experience</span></h2>
          <p className={styles.subtitle}>My professional journey and achievements</p>
        </div>

        <div className={styles.content}>
          {experience.map((exp, index) => (
            <Card key={index} className={styles.experienceCard}>
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.jobTitle}>{exp.title}</h3>
                  <div className={styles.companyInfo}>
                    <span className={styles.company}>{exp.company}</span>
                    <span className={styles.separator}>•</span>
                    <span className={styles.location}>
                      <EnvironmentOutlined /> {exp.location}
                    </span>
                  </div>
                  <div className={styles.duration}>
                    <CalendarOutlined /> {exp.duration}
                  </div>
                </div>
              </div>

              <div className={styles.responsibilities}>
                <h4 className={styles.responsibilitiesTitle}>Key Responsibilities & Achievements:</h4>
                <Timeline
                  items={exp.responsibilities.map((resp, idx) => ({
                    dot: <CheckCircleOutlined style={{ fontSize: '16px', color: '#667eea' }} />,
                    children: <p className={styles.responsibilityText}>{resp}</p>
                  }))}
                />
              </div>

              <div className={styles.technologies}>
                <h4 className={styles.techTitle}>Technologies:</h4>
                <div className={styles.techTags}>
                  {exp.technologies.map((tech, idx) => (
                    <Tag key={idx} className={styles.techTag}>
                      {tech}
                    </Tag>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
