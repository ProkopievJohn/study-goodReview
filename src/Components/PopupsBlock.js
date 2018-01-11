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

    closePopup = (id) => {
        const {dispatch} = this.props;
        dispatch({type:"CLOSE_POPUP", id});
    }

    render() {
        const {popups} = this.props;
        const listOfPopups = popups && popups.map((pup) =>
            <Popup
                key={pup.id}
                msg={pup.message}
                id={pup.id}
                onPopupClose={() => this.closePopup(pup.id)}
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
        popups: state.ui.popups
    };
}

export default connect(mapStateToProps)(PopupsBlock);