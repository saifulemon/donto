import { Col, Container, Row } from 'react-bootstrap';
import feature1 from '../../../Images/feature1.svg';
import feature2 from '../../../Images/feature2.svg';
import feature3 from '../../../Images/feature3.svg';
import './Features.css';

const Features = () => {
    // const [feature, setFeature] = useState([]);
    // const { img, title, description } = props.feature;

    // const CardInfo = [
    //     {
    //         title: "Easy Appointment",
    //         description: "Lorem Ipsum is simply is very dummy text of the printings and type setting",
    //         img: feature1
    //     },
    //     {
    //         title: "Emergency Service",
    //         description: "Get our text demo is simply dummy text of the printings and type for content",
    //         img: feature2
    //     },
    //     {
    //         title: "24/7 Service",
    //         description: "Lorem Ipsum is simply is very dummy text of the printings and type setting",
    //         img: feature3
    //     }
    // ];

    // useEffect(() => {
    //     fetch(CardInfo)
    //         .then(res => res.json())
    //         .then(data => setFeature(data))
    // })

    return (
        <section className="feature-wrapper">
            <Container>
                <Row>
                    <Col md={6} lg={6} xl={4} xs={12}>
                        <div className="single-feature-box">
                            <div className="icon-box">
                                <img src={feature1} alt="" />
                            </div>
                            <h3>Easy Appointment</h3>
                            <p>Lorem Ipsum is simply is very dummy text of the printings and type setting</p>
                        </div>
                    </Col>
                    <Col md={6} lg={6} xl={4} xs={12}>
                        <div className="single-feature-box">
                            <div className="icon-box">
                                <img src={feature2} alt="" />
                            </div>
                            <h3>Emergency Service</h3>
                            <p>Get our text demo is simply dummy text of the printings and type for content</p>
                        </div>
                    </Col>
                    <Col md={6} lg={6} xl={4} xs={12}>
                        <div className="single-feature-box">
                            <div className="icon-box">
                                <img src={feature3} alt="" />
                            </div>
                            <h3>24/7 Service</h3>
                            <p>Lorem Ipsum is simply is very dummy text of the printings and type setting</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Features;
