//
// const url = "http://localhost:8888/posts"
//
// class Form extends  React.Component {
//     constructor(props){
//         super(props)
//
//         this.state = {
//             id:"",
//             name:""
//         }
//
//         this.handleIdChange = this.handleIdChange.bind(this)
//         this.handleNameChange = this.handleNameChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//
//     }
//
//     handleIdChange(event) {
//         this.setState({id:event.target.value})
//     }
//
//     handleNameChange(event) {
//         this.setState({name:event.target.value})
//     }
//
//     handleSubmit(event) {
//         //alert("senddddddd:" + this.state.id + "------" + this.state.name)
//         event.preventDefault()
//
//         this.props.addPost(this.state.id,this.state.name)
//     }
//
//     render() {
//         return(
//
//             <form onSubmit={this.handleSubmit}>
//                 <div>
//                     <label>
//                         id:
//                         <input type="text" value={this.state.id} onChange={this.handleIdChange} />
//                     </label>
//                 </div>
//                 <div>
//                     <label>
//                         name:
//                         <input type="text" value={this.state.name} onChange={this.handleNameChange} />
//                     </label>
//                 </div>
//                 <div>
//                     <input type="submit" value="追加" />
//                 </div>
//             </form>
//         )
//     }
// }
//
// class Posts extends React.Component {
//     constructor(props) {
//         super(props)
//
//         this.state = {
//
//             posts: this.props.posts
//
//         }
//
//         this.add = this.add.bind(this)
//     }
//
//     add(id, name) {
//
//         // console.log(id)
//         // console.log(name)
//
//         fetch(url, {
//             method: 'post',
//             headers: {
//                 'Content-Type':'application/x-www-form-urlencoded'
//             },
//             body: "id=" + id + '&name=' + name
//         }).then(function (response) {
//             return response.json()
//         }).then(function (json) {
//             console.log(json)
//
//             let count = this.state.posts.length + 1
//             this.state.posts.push({
//                 id:json.id,
//                 name:json.name
//
//             })
//
//             this.setState(this.state)
//
//         }.bind(this))
//     }
//
//     render() {
//
//         return(
//             <section>
//                 {this.state.posts.map(
//
//                     function (post,index) {
//                         return(
//                             <section key={post.id}>
//                                 <h1>{post.name}</h1>
//                             </section>
//                         )
//                     }.bind(this)
//
//                 )}
//                 <Form addPost={this.add} />
//             </section>
//         )
//
//     }
//
// }
//
// fetch(url).then(function (response) {
//     return response.json()
// }).then(function (json) {
//     console.log(json)
//
//     ReactDOM.render(
//         <Posts posts={json} />,
//         document.getElementById('root')
//     )
// })


// const someHtml = {__html: '<h2>これ出す</h2>'}
// const name = {
//     firstName: 'ishi',
//     lastName: 'kei'
// }
//
// let count = 0
// for (let i = 0; i < 11; i++) {
//     count++
// }
//
// class Hello2 extends React.Component {
//     render() {
//         return (
//             <section>
//                 <h1></h1>
//             </section>
//         )
//     }
// }
//
// function Hello(props) {
//
//     return(
//         <div>
//             <h1>{props.name}</h1>
//             <input type="text" onChange={props.updateName} />
//
//         </div>
//     )
//
// }
//
// Hello.propTypes = {name: PropTypes.string}
// Hello.defaultProps = {
//     name: "defo"
// }
//
// class Message extends React.Component{
//     // constructor() {
//     //     super()
//     //     this.state = {
//     //         name: ''
//     //     }
//     //     this.updateName = this.updateName.bind(this)
//     // }
//     // updateName(event) {
//     //     console.log("dddddddddd")
//     //     this.setState({
//     //         name:event.target.value
//     //     })
//     // }
//     render() {
//         return (
//             <div>
//                 <Hello name={this.state.name} updateName={this.updateName} />
//                 <Hello name={this.state.name} updateName={this.updateName}/>
//                 <p>message</p>
//             </div>
//         )
//     }
// }

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Server from './model/Server';
import PropTypes from 'prop-types'
import * as serviceWorker from './serviceWorker';

//require('jquery');

console.log("pass1")
const server = new Server();
const con = server.connect();
server.getUser(con)
console.log("pass2")

ReactDOM.render(
    <App />,
    //<Message />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
