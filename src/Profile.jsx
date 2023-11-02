import { useState } from "react"
import "./profile.css"

const Profile = ({onPick}) => {
    const [select, setSelect] = useState("daily")

    return (
        <div className="profile-container">
            <div className="user">
                <img src="/images/image-jeremy.png"/>
                <div className="profile-content">
                    <p>Report for</p>
                    <h2>Jeremy Robson</h2>
                </div>
            </div>
            <ul>
                <li>
                    <a 
                    onClick={event => {
                        event.preventDefault()
                        onPick("daily")
                        setSelect("daily")
                    }} 
                    style={{color: select === "daily" && "white"}} 
                    href="#">Daily</a>
                </li>
                <li>
                    <a onClick={event => {
                        event.preventDefault()
                        onPick("weekly")
                        setSelect("weekly")
                    }}
                    style={{color: select === "weekly" && "white"}} 
                    href="#">Weekly</a>
                </li>
                <li>
                    <a onClick={event => {
                        event.preventDefault()
                        onPick("monthly")
                        setSelect("monthly")
                    }}
                    style={{color: select === "monthly" && "white"}} 
                    href="#">Monthly</a>
                </li>
            </ul>
        </div>
    )
}

export default Profile