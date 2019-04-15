import Link from 'next/link'
import React from 'react'
import "../static/bootstrap/css/bootstrap.min.css?h=e1729d32bd788d29d221ff129051e58a"
import "../static/css/styles.min.css?h=2352637b27a8730bfe180c97baf4cf5c"
import "./Portfolio.css"
export default class Porfolio extends React.Component {
  Data (){
    

      

  }
  render() {
    console.log(this.props)
    return (
      <div>
           <div className="projects-clean P1">
        <div className="container " >
      
          
            <div className="intro">
                <h2 className="text-center">{this.props.data.name}</h2>
                <p className="text-center">{this.props.data.desc}</p>
            </div>
            <div className="row projects">

         {Array.isArray(this.props.data.data) ? 
             this.props.data.data.map((row,index)=>(
               
              <div key={'a'+index} className="col-sm-6 col-lg-4 item">
               <a key={'b'+index} href={row.url}><img className="img-fluid" src={'/static/img/'+row.imge+'.png'} />
               </a><h3 key={'c'+index} className="name">{row.title}</h3>
               <p key={'d'+index} className="description">{row.des}</p>
            </div>
        
              ))
            
            :
            <h1>DEAD</h1>
        
        
        }

         </div>

       
        </div>
    </div>
      </div>
    )
  }
}
