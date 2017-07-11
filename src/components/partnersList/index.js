import style from './style';
import {Grid, Row} from 'react-bootstrap';
import PartnersListItem from '../partnersListItem'

const PartnersList = () => (
  // TODO: Map image URLs from contentful and create PartnersListItems to render inside the row
  <Grid>
    <Row>
      <PartnersListItem />
      <PartnersListItem />
      <PartnersListItem />
      <PartnersListItem />
    </Row>
  </Grid>
);

export default PartnersList
