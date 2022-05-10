import { Col, Row } from "reactstrap";
import ContentRight from "./components/ContentRight";
import MediaMovie from "./components/MediaMovie";
import Recommendations from "./components/Recommendatios";
import SocialMovie from "./components/SocialMovie";
import TopCast from "./components/TopCast";
import ViewCollection from "./components/ViewCollection";
import "./style.scss";

const Content = () => {
  return (
    <div className="content">
      <div className="content_wrapper">
        <Row>
          <Col xs="10" className="col_content">
            <TopCast />
            <SocialMovie />
            <MediaMovie />
            <ViewCollection /> 
            <Recommendations />
          </Col>
          <Col xs="2" className="col_content">
            <ContentRight />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Content;