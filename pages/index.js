import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import "./static/bootstrap/css/bootstrap.min.css?h=e1729d32bd788d29d221ff129051e58a"
import "./static/css/styles.min.css?h=2352637b27a8730bfe180c97baf4cf5c"
import Header from './component/header'
import Footer from './component/footer'
import Cover from './component/Cover'
import Aboutme from './component/aboutme'
import Work from './component/work'
import Features from './component/features'
import Testi from './component/testi'

export default class Index extends React.Component {
render(){
  return (
    <div>
      <Head>
    <title>SuperSami - Software Developer</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cabin:700"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.8.2/css/lightbox.min.css"/>
      </Head>

<Header/>
<Cover/>
<Aboutme/>
<Work/>
<Features/>
<Testi/>
<Footer/>
      
    </div>
  )
}
}
