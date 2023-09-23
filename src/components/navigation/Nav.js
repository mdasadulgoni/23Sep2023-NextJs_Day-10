import React from 'react'

export default function Nav() {
  return (
    <div className='nav'>
      <div className='brand'>
        <h3>Md Asadul Goni</h3>
      </div>
      <div className='nav-list'>
        <ul>
            <li>
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Contact</a>
                <a href='#'>Skills</a>
                <a href='#'>Project</a>
            </li>
        </ul>
      </div>
    </div>
  )
}
