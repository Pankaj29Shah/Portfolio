'use client';

import { Card, Tag, Button, Row, Col } from 'antd';
import { GithubOutlined, LinkOutlined, CalendarOutlined } from '@ant-design/icons';
import { projects } from '@/lib/data';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section id="projects" className={`${styles.projects} section-padding`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured <span className="gradient-text">Projects</span></h2>
          <p className={styles.subtitle}>Recent work and accomplishments</p>
        </div>

        <Row gutter={[30, 30]}>
          {projects.map((project, index) => (
            <Col xs={24} lg={12} key={index}>
              <Card className={styles.projectCard}>
                <div className={styles.cardContent}>
                  <div className={styles.projectHeader}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <div className={styles.projectDate}>
                      <CalendarOutlined /> {project.date}
                    </div>
                  </div>

                  <p className={styles.projectDescription}>{project.description}</p>

                  <div className={styles.achievements}>
                    <h4 className={styles.achievementsTitle}>Key Achievements:</h4>
                    <ul className={styles.achievementsList}>
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className={styles.achievementItem}>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.techStack}>
                    {project.technologies.map((tech, idx) => (
                      <Tag key={idx} className={styles.techTag}>
                        {tech}
                      </Tag>
                    ))}
                  </div>

                  <div className={styles.projectLinks}>
                    <Button
                      icon={<GithubOutlined />}
                      href={project.github}
                      target="_blank"
                      className={styles.linkButton}
                    >
                      Code
                    </Button>
                    <Button
                      type="primary"
                      icon={<LinkOutlined />}
                      href={project.demo}
                      target="_blank"
                      className={styles.linkButton}
                    >
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Projects;
