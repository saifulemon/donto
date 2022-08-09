import { Col } from 'react-bootstrap';
import './Features.css';

const Features = (props) => {

    const { title, description, img } = props.feature;

    return (
        <Col md={6} xl={4} lg={6} sm={12}>
            <div className="single-feature-box">
                <div className="icon-box">
                    <img src={img} alt="" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </Col>
    );
};

export default Features;
