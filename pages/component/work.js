import Link from 'next/link'
import React from 'react'
import "../static/bootstrap/css/bootstrap.min.css?h=e1729d32bd788d29d221ff129051e58a"
import "../static/css/styles.min.css?h=2352637b27a8730bfe180c97baf4cf5c"
import "./work.css"
export default class Header extends React.Component {

  render() {
    return (
      <div id="Work" >
        <section>
          <div
            className="jumbotron text-center A1">
            <h1 >MY
              <span className="A2" >Work</span>
            </h1>
            <p
             className="A3" >Always hungry</p>
            <p></p>
          </div>
        </section>
        <div>
          <div className="row A4">
            <div
              className="col-md-4 A5"
              >
              <h1 className="text-center"><Link as="/Portfolio/Websites" title={'Websites Gallery'} href={{ pathname: 'about', query: { name: 'websites' }}}>
              <a className="A6" >WEBSITES</a>
              </Link>
                
              </h1>
            </div>
            <div
              className="col-md-4 A7"
              >
              <h1 className="text-center">
                <a className="A8" href="#" >MOBILE</a>
              </h1>
            </div>
            <div
              className="col-md-4 A9"
             >
              <h1 className="text-center A10">
                <a href="#" className="A20" >DESKTOP</a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
