import React, { Component } from 'react';

class Officer extends Component {
 
    render() {
        return (
            <div>
                <div class="exec-avatar">
                    <img src={this.props.avatar} />
                </div>
                <h4> {this.props.name} </h4>
                <h5> {this.props.position} </h5>
                <p> {this.props.email} </p> 
            </div>
            
        );
    }
}

export default Officer;
