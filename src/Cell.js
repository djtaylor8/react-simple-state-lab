import React, { component } from 'react';

class Cell extends React.Component {
    constructor(props) {
        super();
        this.state = {
            color: props.value
        }
    }

    updateColor = () => {
        this.setState({
            color: '#333'
        });
    }

    render() {
        return <div onClick={this.updateColor} className='cell' style={{backgroundColor: this.state.color}}></div>
    }
}

export default Cell;