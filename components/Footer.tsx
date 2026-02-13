'use client';

import { LinkedinOutlined, GithubOutlined, MailOutlined, HeartFilled } from '@ant-design/icons';
import { personalInfo } from '@/lib/data';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoSection}>
            <div className={styles.logo} onClick={scrollToTop}>
              <span className="gradient-text">PS</span>
            </div>
            <p className={styles.tagline}>{personalInfo.tagline}</p>
          </div>

          <div className={styles.quickLinks}>
            <h4 className={styles.linksTitle}>Quick Links</h4>
            <div className={styles.links}>
              <a href="#home" className={styles.link}>Home</a>
              <a href="#about" className={styles.link}>About</a>
              <a href="#skills" className={styles.link}>Skills</a>
              <a href="#experience" className={styles.link}>Experience</a>
              <a href="#projects" className={styles.link}>Projects</a>
              <a href="#contact" className={styles.link}>Contact</a>
            </div>
          </div>

          <div className={styles.contactSection}>
            <h4 className={styles.contactTitle}>Get In Touch</h4>
            <div className={styles.contactInfo}>
              <a href={`mailto:${personalInfo.email}`} className={styles.contactLink}>
                {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className={styles.contactLink}>
                {personalInfo.phone}
              </a>
            </div>
            <div className={styles.socialLinks}>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <LinkedinOutlined />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <GithubOutlined />
              </a>
              <a href={`mailto:${personalInfo.email}`} className={styles.socialLink}>
                <MailOutlined />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Made with <HeartFilled className={styles.heart} /> using Next.js & Ant Design
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
