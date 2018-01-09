import React from 'react';
import UserForm from './UserForm';
import ReviewForm from './ReviewForm';
import './ModalWindow.scss';

class ModalWindow extends React.Component{
    render(){
        const {showModalWindow, onCloseModalWindow, options} = this.props;
        let form = null;
        if (showModalWindow) {
            switch(options.formName){
                case 'UserForm':
                    form = <UserForm onUserFormSubmit={options.onUserFormSubmit}/>
                    break;
                case 'ReviewForm':
                    form = <ReviewForm userId={options.proceedUserId} onReviewCreated={options.onReviewCreated}/>
                    break;
                default: ;
            }
        }
        return(
            showModalWindow &&
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