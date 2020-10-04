import React from 'react'
import { Link } from 'react-router-dom';










export const Tag = (props) => {

    const template = <div

        style={{
            background: props.bck || "transparent",
            fontSize: props.size,
            color: props.color,
            padding: "5px 10px",
            display: "inline-block",
            fontFamily: "righteous",
            ...props.add

        }}
    >

        {props.children}</div>

    if (props.link) {
        return (
            <Link to={props.linkTo || "/"}>
                {template}
            </Link >)
    } else {
        return template;
    }



}


export const firebaseLooper = (snapShot) => {
    const data = [];
    snapShot.forEach((childSnapShot) => {
        data.push({
            ...childSnapShot.val(),
            id: childSnapShot.key
        })
    })
    return data;
}



export const reverseArray = (actualArray) => {
    let reversedArray = [];
    for (let i = actualArray.length - 1; i >= 0; i--) {
        reversedArray.push(actualArray[i])
    }
    return reversedArray;
}