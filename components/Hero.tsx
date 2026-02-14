'use client';

import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { DownloadOutlined, LinkedinOutlined, GithubOutlined, MailOutlined, DownOutlined } from '@ant-design/icons';
import { personalInfo } from '@/lib/data';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  const titles = [
    'Full Stack Engineer',
    'Full Stack Developer',
    'Software Engineer',
    'Software Developer',
    '.NET Core Specialist',
    'Node.js Specialist',
    'System Designer',
    'Freelancer',
    'Problem Solver'
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [downloadingResume, setDownloadingResume] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentTitle.substring(0, displayText.length - 1)
            : currentTitle.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex, titles]);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeDownload = () => {
    setDownloadingResume(true);
    window.open(personalInfo.resumeLink, '_blank');
    // Reset loading state after a short delay
    setTimeout(() => {
      setDownloadingResume(false);
    }, 1500);
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.greeting}>
              <span className={styles.wave}>👋</span> Hello, I&apos;m
            </div>
            <h1 className={styles.name}>
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            <h2 className={styles.title}>
              {displayText}
              <span className={styles.cursor}>|</span>
            </h2>
            <p className={styles.tagline}>{personalInfo.tagline}</p>
            <p className={styles.description}>{personalInfo.description}</p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statValue}>3.3+</span>
                <span className={styles.statLabel}>Years Exp</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>25K+</span>
                <span className={styles.statLabel}>Users Served</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>15+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
            </div>

            <div className={styles.buttons}>
              <Button
                type="primary"
                size="large"
                block
                icon={<MailOutlined />}
                onClick={() => scrollToSection('#contact')}
                className={styles.primaryButton}
              >
                Get In Touch
              </Button>
              <Button
                size="large"
                block
                icon={<DownloadOutlined />}
                onClick={handleResumeDownload}
                loading={downloadingResume}
              >
                Download Resume
              </Button>
            </div>

            <div className={styles.social}>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <LinkedinOutlined />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <GithubOutlined />
              </a>
              <a href={`mailto:${personalInfo.email}`} className={styles.socialIcon}>
                <MailOutlined />
              </a>
            </div>
          </div>

          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/profile-optimized.jpg"
                alt="Pankaj Shah - Full Stack Software Developer specializing in React, Node.js, and .NET Core"
                width={400}
                height={400}
                className={styles.profileImage}
                priority
              />
              <div className={styles.imageBg}></div>
            </div>
          </div>
        </div>

        <div className={styles.scrollDown} onClick={() => scrollToSection('#about')}>
          <span>Scroll Down</span>
          <DownOutlined className={styles.scrollIcon} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
