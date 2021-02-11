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
        const { url, desc, className } = this.props;
        return (
            <div className={className}>
                <div className="inspiration-image-unsplash">
                    <img src={url} alt={desc} className="img-responsive inspo-image d-flex" />
                    {this.state.isSaved
                        ? <button onClick={() => { this.handleSave(desc, url) }}><i className="fas fa-heart fa-heart-inspiration"></i></button>
                        : <button onClick={() => { this.handleSave(desc, url) }}><i className="far fa-heart fa-heart-inspiration"></i></button>
                    }
                </div>
            </div>
        );
    }
}


export default InspirationItem;