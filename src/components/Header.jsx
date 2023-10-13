import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header-containder'>
            <div className='header-wrap'>
                <div className='header-left-wrap'>
                    
                    <Link style={{display:'flex', alignItems:'center'}} to='/'>
                        <img 
                            style = {{ width: "40px", height : "40px"}}
                            src = "https://cdn.crowdpic.net/detail-thumb/thumb_d_64255408DE781022562CB5C92D50F1BD.jpg"
                            alt="로고" />
                    </Link>
                    <ul>
                        <li>
                            <Link className='header-nav-item' to='/movie'>
                                영화   
                            </Link>                            
                        </li>
                        <li>
                            <Link className='header-nav-item' to='/tv'>
                                TV 프로그램
                            </Link>                            
                        </li>                        
                        <li>
                            <Link className='header-nav-item' to='/persion'>
                                인물
                            </Link>                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
