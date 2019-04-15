import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import "./static/bootstrap/css/bootstrap.min.css?h=e1729d32bd788d29d221ff129051e58a"
import "./static/css/styles.min.css?h=2352637b27a8730bfe180c97baf4cf5c"
import Header from './component/header'
import Footer from './component/footer'
import Porfolio from './component/Portfolio'
import firebase from 'firebase/app';
import 'firebase/database';
if (!firebase.apps.length) {
var app = firebase.initializeApp({ 
    apiKey: "AIzaSyAue0Vxzk4yVKMMNnPJkGBgBQ_aWd9GZ5w",
authDomain: "portfolio-ad3c8.firebaseapp.com",
databaseURL: "https://portfolio-ad3c8.firebaseio.com",
projectId: "portfolio-ad3c8",
storageBucket: "portfolio-ad3c8.appspot.com",
messagingSenderId: "630392712127"});
}
export default class About extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      Query : {},
      data : {}
    }
    if(this.props.name == 'websites'){
      this.Firebase('/Website')
    }
  
  }
  Firebase(name){
    firebase.database().ref(name).once('value').then((snapshot) => {
      this.setState({Query:snapshot.val()})
   });  
  }
  static async getInitialProps({ query }) {
   return await query

  }
  check(){
    if(this.props.name == "websites"){
    return {name:'Webiste',desc:"Webiste that i have created so far",data:this.state.Query}
  }
  }
render(){
  console.log(this.props)
  return (
    <div>
      <Head>
    <title>Portfolio</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cabin:700"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.8.2/css/lightbox.min.css"/>
      </Head>

<Header/>
<Porfolio data={this.check()}/>
<Footer/>
      
    </div>
  )
}
}
