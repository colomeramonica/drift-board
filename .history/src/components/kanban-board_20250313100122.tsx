import { Col, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import styles from './components.module.css';

export default function KanbanBoard() {
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className={styles.board}>
      <Col className="gutter-row" span={4}>
        <Title className={styles.title} level={4}>
          To-do
        </Title>
        <div>col-6</div>
      </Col>
      <Col className="gutter-row" span={4}>
        <Title className={styles.title} level={4}>
          In Progress
        </Title>
        <div>col-6</div>
      </Col>
      <Col className="gutter-row" span={4}>
        <Title className={styles.title} level={4}>
          Testing
        </Title>
        <div>col-6</div>
      </Col>
      <Col className="gutter-row" span={4}>
        <Title className={styles.title} level={4}>
          Ready to Deploy
        </Title>
        <div>col-6</div>
      </Col>
      <Col className="gutter-row" span={4}>
        <Title className={styles.title} level={4}>
          Completed
        </Title>
        <div>col-6</div>
      </Col>
    </Row>
  );
}
