import React,{ Component} from "react";

export default class Class_Tranvanminh extends Component{
    constructor(props){
        super(props);
        this.state={
            fullName:"Tran van minh",
            class:"K22CNTT2"
        }
    }
    users = {
        name:"Tran Van Minh",
        age:20
    }
    //Hàm xử lí sự kiện
    handleChange = (event)=>{
        this.setState({
            fullName:"Tranvanmenh"
        })
    }
    render()  {
        return (
            <div>
                <h2>Class component Demo</h2>
                {users.name} - {this.users.age}

                <hr/>
                <h3>info:{this.props.info}</h3>
                <h3>Time:{this.props.time}</h3>
                <hr/>
                <h3>State:
                    FullName: {this.state.fullName}-
                    Class: {this.state.class}
                </h3>
                <button onClick={this.handleChange}>Chang Name</button>
            </div>
        );
    }
}