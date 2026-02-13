'use client';

import { Card, Tag, Row, Col } from 'antd';
import { CodeOutlined, DatabaseOutlined, CloudOutlined, ApiOutlined, ToolOutlined } from '@ant-design/icons';
import { skills } from '@/lib/data';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    { title: 'Programming Languages', icon: <CodeOutlined />, color: '#667eea', skills: skills['Programming Languages'] },
    { title: 'Frontend Frameworks & Libraries', icon: <ApiOutlined />, color: '#764ba2', skills: skills['Frontend Frameworks & Libraries'] },
    { title: 'Backend & Databases', icon: <DatabaseOutlined />, color: '#f093fb', skills: skills['Backend & Databases'] },
    { title: 'DevOps & Tools', icon: <CloudOutlined />, color: '#4facfe', skills: skills['DevOps & Tools'] },
    { title: 'Core Concepts', icon: <ToolOutlined />, color: '#43e97b', skills: skills['Core Concepts'] },
  ];

  return (
    <section id="skills" className={`${styles.skills} section-padding`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Technical <span className="gradient-text">Skills</span></h2>
          <p className={styles.subtitle}>Technologies and tools I work with</p>
        </div>

        <Row gutter={[30, 30]}>
          {skillCategories.map((category, index) => (
            <Col xs={24} md={12} lg={8} key={index}>
              <Card className={styles.skillCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper} style={{ background: `${category.color}15` }}>
                    <span style={{ color: category.color, fontSize: '28px' }}>
                      {category.icon}
                    </span>
                  </div>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                </div>
                <div className={styles.tagsWrapper}>
                  {category.skills.map((skill, idx) => (
                    <Tag
                      key={idx}
                      className={styles.skillTag}
                      color={category.color}
                    >
                      {skill}
                    </Tag>
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Skills;
