import React from 'react';
import './ModalWindow.scss';

class ModalWindow extends React.Component{
    render(){
        const {onCloseModalWindow, children} = this.props;
        return(
            <div className="overlay">
                <div className="modalWindow">
                    <span className="closeModalWindowBtn" onClick={onCloseModalWindow}>
                        <i className="material-icons">close</i>
                    </span>
                    <div className="modalWindowBody">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalWindow;