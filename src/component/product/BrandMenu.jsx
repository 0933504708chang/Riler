import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class BrandMenu extends Component {
  render() {
    return (
      <div className="brands_products">
        <h2>Brands</h2>
        <div className="brands-name">
          <ul className="nav nav-pills nav-stacked">
            <li>
              <Link to="/productbybrand">
                <span className="pull-right">(50)</span>Acne
              </Link>

            </li>
            <li>
              <Link to="/productbybrand">
                <span className="pull-right">(56)</span>Grüne Erde
              </Link>
            </li>
            <li>
              <Link to="/productbybrand">
                <span className="pull-right">(27)</span>Albiro
              </Link>
            </li>
            <li>
              <Link to="/productbybrand">
                <span className="pull-right">(32)</span>Ronhill
              </Link>
            </li>
            <li>
              <Link to="/productbybrand">
                <span className="pull-right">(5)</span>Oddmolly
              </Link>
            </li>
            <li>
              <Link to="/productbybrand">
                <span className="pull-right">(9)</span>Boudestijn
              </Link>
            </li>
            <li>
              <Link to="/productbybrand">
                <span className="pull-right">(4)</span>Rösch creative culture
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
