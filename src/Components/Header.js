import React from 'react';

class Header extends React.Component{
    redirectToMainPage = () => {
        window.location = MAIN_PAGE_URL;
    }

    render(){
        const {account} = this.props;
        return(
            <div>
                <span className="logo" onClick={this.redirectToMainPage}>
                    <img src="/devico_001.svg" alt="logo"/>
                </span>
                <span className="accountBlock">
                    <span className="accountName">
                        {account.firstName} {account.lastName}
                    </span>
                    <span className="accountAvatar">
                        <i className="material-icons">account_circle</i>
                    </span>
                </span>
            </div>
        )
    }
}

export default Header;