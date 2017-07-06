import React, {h, Component} from 'preact';
import 'roboto-npm-webfont';
import style from './style';
import Header from '../../components/header';
import VideoBackground from '../../components/videoBackground';
import {Col, Grid, Row} from 'react-bootstrap';

export default class Home extends Component {

  render() {
    return (
      <div className={style.scroll}>
        <VideoBackground/>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <code>&lt;{'Col xs={12} md={8}'}
                /&gt;</code>
            </Col>
            <Col xs={6} md={4}>
              <code>&lt;{'Col xs={6} md={4}'}
                /&gt;</code>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
