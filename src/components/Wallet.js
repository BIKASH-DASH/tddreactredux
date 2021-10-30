import React, { Component } from 'react'
import {connect} from 'react-redux'
 export class Wallet extends Component {
    render() {
        return (
            <div>
                Wallet balance : <span className='balance'>{this.props.balance}</span>
            </div>
        )
    }
}

const mapStateToProps= (state)=>{
    return {
        balance:state.Balance
    }
}

export default connect(mapStateToProps,null)(Wallet)