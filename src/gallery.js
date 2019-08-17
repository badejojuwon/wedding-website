import React from "react";
import GalleryTile from "./gallery-tile";

export default class Gallery extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="grid col-3">
            {this.createImageTiles()}
        </div>);
    }

    createImageTiles() {
        let images = [];
        this.props.images.forEach((image, index) => {
            images.push(<GalleryTile key={index} image={image} />)
        });
        return images;
    }
}