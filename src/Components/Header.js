import React from 'react';

class Header extends React.Component{
    render(){
        const {account} = this.props;
        return(
            <div>
                <span className="logo">
                    <a href="/" title="Main Page">
                        <img src="/devico_001.svg" alt="logo"/>
                    </a>
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