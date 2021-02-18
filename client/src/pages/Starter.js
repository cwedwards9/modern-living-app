import NavBar from "../components/NavigationBar";
import { Card } from "react-bootstrap";
import "./Starter.css";
import { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';

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
            <main className="starter-body">
                <section className="starter-header">
                    <h1>STARTER<span style = {{display: "block"}}>GUIDES</span></h1>
                </section>

                <section className="starter-cards-section">
                    {data.map((eachCategory, indexCategory) => (
                        <div className="starter-cards" key={indexCategory} style={{ backgroundColor: eachCategory.colors }} onClick={() => handleCategoryClick(indexCategory)} >
                            {eachCategory.icon}
                            <div className="starter-card-text" >{eachCategory.name}</div>
                        </div>
                    ))}
                </section>

                <section>
                    {data.map((eachCategory, indexCategory) => (
                        <div key={indexCategory}>
                            {eachCategory.showDropdowns &&
                                <div>
                                    {eachCategory.dropdowns.map((eachDropdown, indexDropdown) => (
                                        <div className="starter-box" key={indexDropdown}>
                                            <Accordion className="main-accord">
                                                <Card className="accord">
                                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                                        <div className="main-dropdown-title">{eachDropdown.name}<i className="fas fa-sort-down"></i></div>
                                                    </Accordion.Toggle>
                                                    <Accordion.Collapse eventKey="0">
                                                        <Card.Body>
                                                            {eachDropdown.options.map((eachOptions, indexOptions) => (    
                                                                <option value="" key={indexOptions}>{eachOptions}</option>
                                                            ))}
                                                        </Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>
                                            </Accordion>
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    ))}
                </section>
            </main>
        </>
    );
}


export default Starter;