import User from "./User"
import UserClass from "./UserClass"
import React from 'react'

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        // console.log("Parent Constructor")
    }

    componentDidMount() {
        // console.log(" Parent Component Did Mount")
    }

    render() {
        // console.log("Parent Render")
        return (
            <div>
            <h1>
                About Us
            </h1>
            <br />
            <h3>
                This is a about us page
            </h3>
            <br />
            <UserClass name={"Manuj Harit"} />
        </div>
        )
    }
}


// const AboutUs = () => {
//     return (
//         <div>
//             <h1>
//                 About Us
//             </h1>
//             <br />
//             <h3>
//                 This is a about us page
//             </h3>
//             <br />
//             <User  name={"Manuj (function)"}/>
//             <br />
//             <br />
//             <UserClass name={"Manuj (class)"} />
//         </div>
//     )
// }

export default AboutUs