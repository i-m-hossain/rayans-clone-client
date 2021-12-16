import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import ProductMenu from "./ProductMenu/ProductMenu";

const Explore = () => {
    return (
        <>
            <Header></Header>
            <div>
                <Row>
                    <Col xs={2} >
                        <ProductMenu ></ProductMenu>
                    </Col>
                    <Col xs={10}>
                        <Outlet />
                    </Col>

                </Row>
            </div>
            <Footer></Footer>
        </>
    )
}
export default Explore;