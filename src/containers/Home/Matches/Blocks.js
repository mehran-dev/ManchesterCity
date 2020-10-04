import React, { Component } from 'react'
import { dbMatches, dbMathces } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../../components/UI/Misc';
import MatchesBlock from '../../../components/UI/Matches_Block';




export default class Blocks extends Component {

    state = {
        matches: []
    }


    showMatches = (matches) => {
        return (
            matches &&
            matches.map(match => {
                return (
                    <div className="item" key={Math.random() + match + Math.random * Date.now()}>
                        <div className="wrapper">
                            <MatchesBlock
                                match={match}
                            />
                        </div>
                    </div>
                )
            })


        )
    }
    componentDidMount() {
        dbMathces.limitToLast(6).once('value')
            .then((snapShot) => {
                //   console.log(snapShot.val());
                const matches = firebaseLooper(snapShot);

                //   console.log(matches);

                this.setState({
                    matches: reverseArray(matches)
                })
            })
    }

    render() {
        console.log('Block state is : ', this.state);
        return (
            <div className="home_matches">

                {this.showMatches(this.state.matches)}
            </div>
        )
    }
}
