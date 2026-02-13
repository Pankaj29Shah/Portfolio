'use client';

import { Card, Row, Col, Timeline } from 'antd';
import { BookOutlined, TrophyOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { education, certifications } from '@/lib/data';
import styles from './Education.module.css';

const Education = () => {
  return (
    <section id="education" className={`${styles.education} section-padding`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Education & <span className="gradient-text">Certifications</span></h2>
          <p className={styles.subtitle}>Academic background and professional certifications</p>
        </div>

        <Row gutter={[40, 40]}>
          <Col xs={24} lg={12}>
            <Card className={styles.card}>
              <div className={styles.sectionHeader}>
                <BookOutlined className={styles.sectionIcon} />
                <h3 className={styles.sectionTitle}>Education</h3>
              </div>
              <Timeline
                items={education.map((edu, index) => ({
                  children: (
                    <div className={styles.educationItem}>
                      <h4 className={styles.degree}>{edu.degree}</h4>
                      <p className={styles.institution}>{edu.institution}</p>
                      <p className={styles.location}>
                        <EnvironmentOutlined /> {edu.location}
                      </p>
                      <p className={styles.duration}>{edu.duration}</p>
                    </div>
                  ),
                  color: index === 0 ? '#667eea' : '#764ba2',
                }))}
              />
            </Card>
          </Col>

          <Col xs={24} lg={12}>
            <Card className={styles.card}>
              <div className={styles.sectionHeader}>
                <TrophyOutlined className={styles.sectionIcon} />
                <h3 className={styles.sectionTitle}>Certifications</h3>
              </div>
              <div className={styles.certificationsGrid}>
                {certifications.map((cert, index) => (
                  <div key={index} className={styles.certItem}>
                    <div className={styles.certIcon}>🏆</div>
                    <div className={styles.certContent}>
                      <h4 className={styles.certTitle}>{cert.title}</h4>
                      <p className={styles.certIssuer}>{cert.issuer}</p>
                      <p className={styles.certYear}>{cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Education;
