import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deposit,withDraw as withdraw} from '../actions/Balance'
 export class Wallet extends Component {
     constructor(){
         super();
         this.state={
             balance:0
         }
     }
     updateBalance(event){
        const amount = parseInt(event.target.value,10);
        this.setState({balance:amount});
     }
     deposit(){
        this.props.deposit(this.state.balance)
     }
     withdraw(){
         
         this.props.withdraw(this.state.balance)
     }
    render() {
        return (
            <div>
                Wallet balance : <span className='balance'>{this.props.balance}</span>
                <br/>
                <input onChange={(event)=>this.updateBalance(event)} className='input-wallet'/>
                <button className='button-deposit' onClick={()=>this.deposit()}>deposit</button>
                <button className='button-withdraw' onClick={()=>this.withdraw()}>withdraw</button>
            </div>
        )
    }
}

const mapStateToProps= (state)=>{
    return {
        balance:state.Balance
    }
}


export default connect(mapStateToProps,{deposit,withdraw})(Wallet)