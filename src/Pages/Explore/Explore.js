import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import AllProducts from "./AllProducts/AllProducts";
import ProductMenu from "./ProductMenu/ProductMenu";


const Explore = () => {
    return (
        <>
            <Header></Header>
            <div>
                <Row>
                    {/* <Col xs={12} md={2} >
                        <ProductMenu ></ProductMenu>
                    </Col> */}
                    <Col xs={12} md={12}>
                        <AllProducts></AllProducts>
                    </Col>

                </Row>
            </div>
            <Footer></Footer>
        </>
    )
}
export default Explore;