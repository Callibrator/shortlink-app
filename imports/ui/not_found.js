import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
      return (
        <div className="boxed-view">
          <div className="boxed-view__box">
            <div className="boxed-view__form">
              <h1>Not Found</h1>
              <p>The page you are looking for does not exist, or is destroyed</p>
              <Link className="button button__link" to="/">Go Back</Link>
            </div>
          </div>
        </div>
      )

  }
