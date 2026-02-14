'use client';

import { useState, useEffect } from 'react';
import { Button, Drawer } from 'antd';
import { MenuOutlined, HomeOutlined, UserOutlined, CodeOutlined, ProjectOutlined, MailOutlined, TrophyOutlined, BulbOutlined, BulbFilled } from '@ant-design/icons';
import { useTheme } from '@/contexts/ThemeContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { key: 'home', icon: <HomeOutlined />, label: 'Home', href: '#home' },
    { key: 'about', icon: <UserOutlined />, label: 'About', href: '#about' },
    { key: 'skills', icon: <CodeOutlined />, label: 'Skills', href: '#skills' },
    { key: 'experience', icon: <TrophyOutlined />, label: 'Experience', href: '#experience' },
    { key: 'projects', icon: <ProjectOutlined />, label: 'Projects', href: '#projects' },
    { key: 'contact', icon: <MailOutlined />, label: 'Contact', href: '#contact' },
  ];

  const handleMenuClick = (href: string) => {
    setVisible(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className="gradient-text">PS</span>
        </div>

        <div className={styles.desktopMenu}>
          {menuItems.map(item => (
            <a
              key={item.key}
              onClick={() => handleMenuClick(item.href)}
              className={styles.menuItem}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
          <Button
            type="text"
            icon={theme === 'dark' ? <BulbFilled /> : <BulbOutlined />}
            onClick={toggleTheme}
            className={styles.themeToggle}
          />
        </div>

        <Button
          className={styles.mobileMenuButton}
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setVisible(true)}
        />

        <Drawer
          title="Menu"
          placement="right"
          onClose={() => setVisible(false)}
          open={visible}
        >
          <div className={styles.drawerMenu}>
            {menuItems.map(item => (
              <a
                key={item.key}
                onClick={() => handleMenuClick(item.href)}
                className={styles.drawerMenuItem}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
            <div className={styles.drawerDivider} />
            <Button
              type="text"
              icon={theme === 'dark' ? <BulbFilled /> : <BulbOutlined />}
              onClick={toggleTheme}
              className={styles.drawerThemeToggle}
              block
            >
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
