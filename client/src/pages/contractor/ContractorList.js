import React, { Component } from "react";
import ContractorItem from "./ContractorItem";

class ContractorList extends Component {
    render() {
        return (
            <div className="ContractorList">
                {this.props.businesses.map(b => (
                    <ContractorItem
                        key={b.id}
                        name={b.name}
                        phone={b.display_phone}
                        locationOne={b.location.display_address[0]}
                        locationTwo={b.location.display_address[1]}
                        rating={b.rating}
                        url={b.url}
                    />
                ))}
            </div>
        );
    }
}


export default ContractorList;