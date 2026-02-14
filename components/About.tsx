'use client';

import { Card, Row, Col, Statistic } from 'antd';
import { RocketOutlined, TeamOutlined, CodeOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { personalInfo, stats } from '@/lib/data';
import styles from './About.module.css';

const About = () => {
  const highlights = [
    {
      icon: <RocketOutlined />,
      title: "Innovation",
      description: "Building cutting-edge solutions with modern technologies"
    },
    {
      icon: <TeamOutlined />,
      title: "Collaboration",
      description: "Working seamlessly with cross-functional teams"
    },
    {
      icon: <CodeOutlined />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code"
    },
    {
      icon: <ThunderboltOutlined />,
      title: "Performance",
      description: "Optimizing for speed and efficiency"
    }
  ];

  return (
    <section id="about" className={`${styles.about} section-padding`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>About <span className="gradient-text">Me</span></h2>
          <p className={styles.subtitle}>Get to know more about my journey and expertise</p>
        </div>

        <Row gutter={[40, 40]}>
          <Col xs={24} lg={12}>
            <Card className={styles.card}>
              <h3 className={styles.cardTitle}>Who I Am</h3>
              <p className={styles.cardText}>
                {personalInfo.description}
              </p>
              <p className={styles.cardText}>
                Based in {personalInfo.location}, I specialize in creating robust, scalable web applications
                that solve real-world problems. My experience spans from building microservices architecture
                to crafting intuitive user interfaces.
              </p>
              <p className={styles.cardText}>
                I&apos;m passionate about staying updated with the latest technologies and best practices,
                constantly learning and evolving to deliver exceptional results.
              </p>
            </Card>
          </Col>

          <Col xs={24} lg={12}>
            <Row gutter={[20, 20]}>
              {highlights.map((item, index) => (
                <Col xs={12} key={index}>
                  <Card className={styles.highlightCard}>
                    <div className={styles.highlightIcon}>{item.icon}</div>
                    <h4 className={styles.highlightTitle}>{item.title}</h4>
                    <p className={styles.highlightDesc}>{item.description}</p>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row gutter={[30, 30]} className={styles.statsRow}>
          {stats.map((stat, index) => (
            <Col xs={12} sm={6} key={index}>
              <Card className={styles.statCard}>
                <Statistic
                  title={stat.label}
                  value={stat.value}
                  styles={{
                    value: {
                      color: '#667eea',
                      fontWeight: 700,
                      fontSize: '32px'
                    }
                  }}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default About;
