import React from 'react'

export default function Matches_Block(props) {
    //we can recieve {match } instead of all props !!
    // console.log(match);
    return (
        <div className="match_block">
            <div className="match_date">
                {props.match.final ? props.match.data : `match not played yet${props.match.data}`}
            </div>
            <div className="match_wrapper">
                <div className="match_top">

                    <div className="left">
                        <div className="icon" style={{
                            backgroundImage: `url(/images/team_icons/${props.match.localThmb}.png)`
                        }}></div>
                        <div className="team-name">
                            {props.match.local}
                        </div>

                    </div>
                    <div className="right">
                        {props.match.final ? props.match.resultLocal : "-"}
                    </div>
                    <div className="match_bottom">

                    </div>


                </div>
            </div>

        </div>
    )
}
