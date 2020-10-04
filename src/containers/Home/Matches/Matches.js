import React from 'react'
import { Tag } from '../../../components/UI/Misc';
import Blocks from './Blocks';
import { Button } from '@material-ui/core';




export default function Matches() {
    return (
        <div className="home_matches_wrapper">
            <div className="container">
                <Tag
                    bck="#0e1731"
                    size="50px"
                    color="#fff"
                    add={{
                        color: "red"
                    }}

                >Matches</Tag>
                <Blocks />
                <Tag
                    bck="#fff"
                    size="22px"
                    color="#555"
                    link={true}
                    linkTo="the_team"
                >See More Matches
                </Tag>
            </div>
        </div>
    )
}
