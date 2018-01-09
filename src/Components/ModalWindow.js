import React from 'react';
import './ModalWindow.scss';

class ModalWindow extends React.Component{
    render(){
        const {form, onCloseModalWindow} = this.props;
        return(
            <div className="overlay">
                <div className="modalWindow">
                    <span className="closeModalWindowBtn" onClick={onCloseModalWindow}>
                        <i className="material-icons">close</i>
                    </span>
                    <div className="modalWindowBody">
                        {form}
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalWindow;