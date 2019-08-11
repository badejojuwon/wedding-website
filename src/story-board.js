import React from 'react';

export default class StoryBoard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let data = this.props.story;
        return (<div className={"story-board inline-block margin-bottom-75px point-" + this.props.pointTo}>
            <div className="content grid">
                <div className="text-container">
                    <h2>{data.title}</h2>
                    <div className="capsule text-center margin-auto bg-yellow">{data.date}</div>
                </div>
                <div className="img-container">
                    <img src={data.image} className="img-fluid full-height" />
                </div>
                <p className="description">{data.description}</p>
            </div>
        </div>);
    }
}