import style from './style';
import {Col, Grid, Row} from 'react-bootstrap';
import DealsGridItem from '../dealsGridItem'

const DealsGrid = () => (
  <Grid>
    <Row className={style.dealsGrid}>
      <Col xs={12}>
        <DealsGridItem featured={true} />
      </Col>
      <Col xs={12}>
        <DealsGridItem />
        <DealsGridItem />
      </Col>
    </Row>
  </Grid>
);

export default DealsGrid
