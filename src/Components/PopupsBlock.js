import React from 'react';
import { connect } from 'react-redux';
import './PopupsBlock.scss';

class Popup extends React.Component {
    state = {
        show : true
    }

    componentDidMount(){
        const {onPopupClose} = this.props;
        setTimeout(() => this.setState({show: false}), 1000);
        setTimeout(onPopupClose, 1800);
    }

    render() {
        const classes = this.state.show ? "popup" : "popup close";
        const {msg} = this.props
        return (
            <div className={classes}>
                {msg}
            </div>
        );
    }
}

class PopupsBlock extends React.Component {
    render() {
        const {popups, dispatch} = this.props;
        const listOfPopups = popups.map((pup) =>
            <Popup
                key={pup.id}
                msg={pup.message}
                id={pup.id}
                onPopupClose={() => dispatch({type:"CLOSE_POPUP", id: pup.id})}
            />
        );

        return (
            <div className="popupsBlock">
                {listOfPopups}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        popups: state.popups
    };
}

export default connect(mapStateToProps)(PopupsBlock);