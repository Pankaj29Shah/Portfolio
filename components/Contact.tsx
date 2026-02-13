'use client';

import { useState } from 'react';
import { Card, Form, Input, Button, message, Row, Col } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, LinkedinOutlined, GithubOutlined, SendOutlined } from '@ant-design/icons';
import { personalInfo } from '@/lib/data';
import styles from './Contact.module.css';

const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        message.success('Message sent successfully! I\'ll get back to you soon.');
        form.resetFields();
      } else {
        message.error(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      message.error('An error occurred. Please try emailing me directly.');
      console.error('Contact form error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={`${styles.contact} section-padding`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Get In <span className="gradient-text">Touch</span></h2>
          <p className={styles.subtitle}>Let&apos;s discuss your next project or opportunity</p>
        </div>

        <Row gutter={[40, 40]}>
          <Col xs={24} lg={10}>
            <div className={styles.contactInfo}>
              <h3 className={styles.infoTitle}>Contact Information</h3>
              <p className={styles.infoDescription}>
                Feel free to reach out to me for any inquiries, collaborations, or just to say hello!
              </p>

              <div className={styles.infoItems}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <MailOutlined />
                  </div>
                  <div>
                    <h4 className={styles.infoLabel}>Email</h4>
                    <a href={`mailto:${personalInfo.email}`} className={styles.infoValue}>
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <PhoneOutlined />
                  </div>
                  <div>
                    <h4 className={styles.infoLabel}>Phone</h4>
                    <a href={`tel:${personalInfo.phone}`} className={styles.infoValue}>
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <EnvironmentOutlined />
                  </div>
                  <div>
                    <h4 className={styles.infoLabel}>Location</h4>
                    <p className={styles.infoValue}>{personalInfo.location}</p>
                  </div>
                </div>
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
          </Col>

          <Col xs={24} lg={14}>
            <Card className={styles.formCard}>
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                requiredMark={false}
              >
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="name"
                      label="Your Name"
                      rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                      <Input size="large" placeholder="John Doe" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="email"
                      label="Your Email"
                      rules={[
                        { required: true, message: 'Please enter your email' },
                        { type: 'email', message: 'Please enter a valid email' }
                      ]}
                    >
                      <Input size="large" placeholder="john@example.com" />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  name="subject"
                  label="Subject"
                  rules={[{ required: true, message: 'Please enter a subject' }]}
                >
                  <Input size="large" placeholder="Project Inquiry" />
                </Form.Item>

                <Form.Item
                  name="message"
                  label="Message"
                  rules={[{ required: true, message: 'Please enter your message' }]}
                >
                  <Input.TextArea
                    rows={6}
                    placeholder="Tell me about your project or inquiry..."
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    icon={<SendOutlined />}
                    loading={loading}
                    className={styles.submitButton}
                    block
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;
