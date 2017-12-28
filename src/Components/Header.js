import React from 'react';

function redirectToMainPage(){
    window.location = "http://localhost:3000/";
}

class Header extends React.Component{
    render(){
        const {account} = this.props;
        return(
            <div>
                <span className="logo" onClick={redirectToMainPage}><img src="/devico_001.svg" alt="logo"/></span>
                <span className="accountBlock">
                    <span className="accountName">{account.firstName} {account.lastName}</span>
                    <span className="accountAvatar"><i className="material-icons">account_circle</i></span>
                </span>
            </div>
        )
    }
}

export default Header;