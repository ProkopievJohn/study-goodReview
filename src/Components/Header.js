import React from 'react';

class Header extends React.Component{
    render(){
        const {account} = this.props;
        return(
            <div>
                <div className="logoBlock">
                    <a href="/" title="Main Page">
                        <img src="/devico_001.svg" alt="logo"/>
                    </a>
                </div>
                <div className="accountBlock">
                    <span className="accountName">
                        {account.firstName} {account.lastName}
                    </span>
                    <span className="accountAvatar">
                        <i className="material-icons">account_circle</i>
                    </span>
                </div>
            </div>
        )
    }
}

export default Header;