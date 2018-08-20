import React, { Componenet } from 'react';

class Nav extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="top-row">
          <h1 className="title-logo">SWAPIBox</h1>
          <button>FavoritesPlaceholder</button>
        </div>
        <div className="button-wrap">
          <button>ButtonPlaceholder</button>
          <button>ButtonPlaceholder</button>
          <button>ButtonPlacedholder</button>
        </div>
      </div>
    )
  }
}

export default Nav;