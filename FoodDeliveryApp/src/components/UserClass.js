import React, { Component } from "react";
import fetchWithProxy from "../utils/fetchProxy";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        }
        // console.log(this.props.name + " Child Constructor")


    }

    componentDidUpdate() {
        // console.log('CompnenetDid Update:' + JSON.stringify(this.state.userInfo,2,null))
    }


    async componentDidMount() {
        // console.log(this.props.name + " Child Component Did Mount")
        const data = await fetchWithProxy('https://api.github.com/users/ManujHarit')

        this.setState({
            userInfo: data
        })
        // console.log('ComponentDidMount')
    }

    componentWillUnmount() {
        // console.log('ComponentWillUnmount')
    }
    render() {
        // console.log(this.props.name + " Child Render")

        const { name, location, avatar_url } = this.state.userInfo
        return (
            <div className='user-card'>
                <img src={avatar_url} style={{height:'50px',width:'50px'}}/>
                <h3>Name: {name}</h3>
                <h4>Location: {location}</h4>
            </div>
        )
    }
}

export default UserClass;