import React from 'react';
import { connect } from 'react-redux';
import './Header.scss';

class Header extends React.Component{
    render(){
        const {account} = this.props;
        return(
            <div className="header">
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

function mapStateToProps(state) {
    return {
        account: state.users.find(user => user.isAdmin === true)
    };
}

export default connect(mapStateToProps)(Header);