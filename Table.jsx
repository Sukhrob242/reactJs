import React, { Component } from 'react';
import "./Table.scss"
class Table extends Component {
    state = {
        users: [
            {
                name:"Child1",
                lastName:"lastName1",
                age:"20",
                email:"mailmail@gmail.com"
            },
            {
                name:"Child2",
                lastName:"lastName2",
                age:"26",
                email:"mailmail@gmail.com"
            },
            {
                name:"Child3",
                lastName:"lastName3",
                age:"21",
                email:"mailmail@gmail.com"
            },
            {
                name:"Child4",
                lastName:"lastName4",
                age:"22",
                email:"mailmail@gmail.com"
            },
            {
                name:"Child5",
                lastName:"lastName5",
                age:"23",
                email:"mailmail@gmail.com"
            },
            {
                name:"Child6",
                lastName:"lastName6",
                age:"24",
                email:"mailmail@gmail.com"
            },
            {
                name:"Child7",
                lastName:"lastName7",
                age:"25",
                email:"mailmail@gmail.com"
            },
        ],
        addUserBool:false 
    }

    addUserOpen = () =>{
        this.setState({
            addUserBool: true  
        })
    }
    addUserClose = () =>{
        this.setState({
            addUserBool: false   
        })
    }

    deleteUser = (index) =>{
        //  console.log(index);
         const{users}= this.state

         users.splice(index, 1)
         this.setState({
             users
         })

    }

    saveUser = () => {
        this.setState({
            addUserBool: false   
        })
    }
    render() {
        const { addUserBool , users   } = this.state
        return (
            <div>
                <form action="" style={{margin:"25px"}}>
                    <label style={{fontSize:"20px"}} htmlFor="search">Search user </label> <br />
                    <input style={{width:"200px" , height:"25px" , fontSize:"20px"}}  type="text" placeholder=' search' />
                </form>
                <table width={"100%" } border="1">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(
                                (item,index)=>
                                    <tr key={index}>
                                        {console.log(item)}
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.age}</td>
                                    <td>{item.email}</td>
                                    <td align='center'><button>Edit</button></td>
                                    <td align='center'><button onClick={()=> this.deleteUser (index)}>Delate</button></td>
                                </tr>
                                )
                        }
                    </tbody>
                </table> 
               { addUserBool ? "": 
               <button onClick={this.addUserOpen} style={{margin:"30px 30px 10px 30px" ,width:"100px", height:"30px", backgroundColor:"grey", color:"white", fontWeight:"bold", border:"none" }}>
                    Add user
                </button>}
                { addUserBool? 
                    <button onClick={this.addUserClose} style={{margin:"30px 30px 10px 30px" ,width:"100px", height:"30px", backgroundColor:"brown", color:"white", fontWeight:"bold", border:"none" }}>
                    Close user
                </button> :""
                }
                {
                      addUserBool? <div style={{width:"80%", marginLeft:'10%', height:"350px", backgroundColor:"yellowgreen"}} className="form">
                    <form action="" onChange={()=>this.ChangeForm()}>
                        <h1 style={{ textAlign:"center" , padding:"20px 0  "}}>Add user</h1>
                    <div className="father" style={{display:"flex" , justifyContent:"space-around"}}> 

                    <div className="left">
                    <label htmlFor="name">Name</label> <br /> <br />
                        <input style={{width:"200px" , height:"25px" , fontSize:"20px"}} id='name' type="text" placeholder='name...' />
                        <br /> <br /> 
                        <label htmlFor="Last name">Last name </label> <br /> <br />
                        <input style={{width:"200px" , height:"25px" , fontSize:"20px"}}  id='Last name' type="text" placeholder='Last Name' />
                        <br /> 
                    </div>
                        <div className="right">
                        <label htmlFor="name">Age</label> <br /> <br />
                        <input style={{width:"200px" , height:"25px" , fontSize:"20px"}} id='age' type="number" placeholder='age...' />
                         <br /> <br />
                        <label htmlFor="name">Email</label> <br /> <br />
                        <input style={{width:"200px" , height:"25px" , fontSize:"20px"}} id='email' type="email" placeholder='email...' />
                        </div>
                    </div>
                   <div className="send" style={{display:"flex", justifyContent:"center", margin:"20px 0"}}>
                   <input type="button" onClick={this.saveUser} value={"Save User"} style={{width:"200px", backgroundColor:"grey", color:'white', border:"none"}} />
                   </div>
                    </form>

                    </div> :""
                }
            </div>
        );
    }
}

export default Table;
