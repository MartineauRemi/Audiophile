import React from 'react'
import Categories from './Categories'

export default function Menu({menuActive, setMenuActive}) {
    return (
        <div className={`menu ${menuActive? "menu--active" : ""}`}>
            <Categories menuActive={menuActive} setMenuActive={setMenuActive} accessFromMenu={true}/>
        </div>
    )
}
