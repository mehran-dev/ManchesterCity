import React from 'react'
import { CityLogo } from '../../UI/Icons'
export default function Footer() {
    return (
        <footer className="bck_blue">
            <div className="footer_logo">
                <CityLogo
                    width="70px"
                    height="70px"
                    link={true}
                    linkto="/"
                />
            </div>
            <div className="footer_discl">
                Manchester  City Team 2018.All rights reserved
            </div>
        </footer>
    )
}
