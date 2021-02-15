import React, { Component } from "react";

class InspirationItem extends Component {
    constructor(props) {
        super(props);
        this.state = { isSaved: false };
        this.handleSave = this.handleSave.bind(this);
    }
    handleSave(desc, url) {
        this.props.saveDesign(desc, url);
        this.setState({ isSaved: true });
    }
    render() {
        const { url, desc } = this.props;
        return (
            <div className="inspiration-result-item">
                <img src={url} alt={desc} />
                {this.state.isSaved
                    ? <button onClick={() => { this.handleSave(desc, url) }}><i style={{color: "red"}} className="fas fa-heart"></i></button>
                    : <button onClick={() => { this.handleSave(desc, url) }}><i className="far fa-heart"></i></button>
                }
            </div>
        );
    }
}


export default InspirationItem;