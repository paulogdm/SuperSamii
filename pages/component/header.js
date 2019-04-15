import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import "../static/bootstrap/css/bootstrap.min.css?h=e1729d32bd788d29d221ff129051e58a"
import "../static/css/styles.min.css?h=2352637b27a8730bfe180c97baf4cf5c"
import "./header.css"
export default class Header extends React.Component {
  
    render(){
      return (
        <div>
          <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cabin:700"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.8.2/css/lightbox.min.css"/>
          </Head>

     <nav className=" navii navbar navbar-light navbar-expand-md navbar navbar-expand-lg fixed-top" id="mainNav" >
        <div className="container"><Link href={'/index'} as={'/Home'}><a className="navbar-brand js-scroll-trigger nav1a"  >SUPER<span className="nav1s" >SAMI</span></a></Link><button className="navbar-toggler navbar-toggler-right" data-toggle="collapse" data-target="#navbarResponsive"
                type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" value="Menu"><i className="fa fa-bars"></i></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item nav-link js-scroll-trigger" role="presentation"><Link  href={`/#About`} ><a className="nav-link  js-scroll-trigger" >About ME</a></Link></li>
                    <li className="nav-item nav-link js-scroll-trigger" role="presentation"><Link  href={`/#Skills`}><a className="nav-link js-scroll-trigger" href="">Skills</a></Link></li>
                    <li className="nav-item nav-link js-scroll-trigger" role="presentation"><Link  href={`/#Work`}><a className="nav-link js-scroll-trigger" href="">My Work</a></Link></li>
                </ul>
            </div>
        </div>
    </nav>    
          
          
        </div>
      )
    }
    }
    