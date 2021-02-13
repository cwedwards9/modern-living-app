import NavBar from "../components/NavigationBar";
import { Row } from "reactstrap";
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Starter.css";
import { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Divider from '@material-ui/core/Divider';
import Contractor from "../images/Contractor.png";

import roomData from "../utils/StarterPageData";


function Starter() {
    const [data, setData] = useState(roomData);

    const handleCategoryClick = (index) => {
        let clone = data;
        for (let i = 0; i < clone.length; i++) {
            clone[i].showDropdowns = false;
        }
        clone[index].showDropdowns = true;
        
        setData([...clone]);
    };
    return (
        <>
            <NavBar />
            <div className="starter-body" style={{ backgroundColor: '#ede9e3' }}>
                <div>
                    <Row className="inspiration-title">
                        <span className="inspiration-header1">STARTER</span>
                    </Row>
                    <Row className="inspiration-title2">
                        <span className="inspiration-header2">GUIDES<Divider /></span>
                    </Row>
                </div>
                <div className="starter-flex-box">
                    {data.map((eachCategory, indexCategory) => {
                        return (
                            <div key={indexCategory}>
                                <div className="starter-cards-1" style={{ backgroundColor: eachCategory.colors }} onClick={() => handleCategoryClick(indexCategory)} >
                                    <div className="starter-card-icons" >{eachCategory.icon}</div>
                                        <div className="starter-card-text" >{eachCategory.name}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="accord-1">
                    {data.map((eachCategory, indexCategory) => {
                        return (
                            <div className="accord-2" key={indexCategory}>
                                {eachCategory.showDropdowns &&
                                    <div className="accord-3">
                                        {eachCategory.dropdowns.map((eachDropdown, indexDropdown) => {
                                            return (
                                                <div className="starter-box" key={indexDropdown}>
                                                    <Accordion className="main-accord">
                                                        <Card className="accord">
                                                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                                                <div className="main-dropdown-title">{eachDropdown.name}<i className="fas fa-sort-down"></i></div>
                                                            </Accordion.Toggle>
                                                            <Accordion.Collapse eventKey="0">
                                                                <Card.Body>
                                                                    {eachDropdown.options.map((eachOptions, indexOptions) => {
                                                                        return (
                                                                            <option value="" key={indexOptions}>{eachOptions}</option>
                                                                        )
                                                                    })}
                                                                </Card.Body>
                                                            </Accordion.Collapse>
                                                        </Card>
                                                    </Accordion>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}


export default Starter;