import React from 'react'

export default function Func_JSX_Tranvanminh(props){
    const users = {
        name:"Tran Van Minh",
        age:20
    }
    return(
        <div>
            <h2>Function Component Demo</h2>
            <h3>
                welcome to , {users.name} . {users.age}
            </h3>
            <hr/>
            <h3>props:
                <br/> FullName: {props.fullName}
                <br/> Age: {props.age}
            </h3>
        </div>
    
    
    )
}

