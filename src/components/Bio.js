import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Samundra Khatri`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p style={{ maxWidth: 310 }}>
          Personal notes of{' '}
          <a href="https://twitter.com/kardnumas">Samundra Khatri</a>. <br />
          <i>
            Trying to write notes about what i learned so, in future i can take
            it as reference.
          </i>
        </p>
      </div>
    )
  }
}

export default Bio
