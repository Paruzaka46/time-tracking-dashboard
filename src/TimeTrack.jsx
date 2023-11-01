import "./TimeTrack.css"

const TimeTrack = ({title, current, previous}) => {
    return (
        <div className={`${title} mode`}>
            <div className="track-cont">
                <div className="upper-part">
                    <h5 style={{fontSize: "18px"}}>{title}</h5>
                    <input type="image" src="/images/icon-ellipsis.svg"/>
                </div>
                <h1>{current} hrs</h1>
                <p>last Week - <span>{previous}</span>hrs</p>
            </div> 
        </div>
    )
}

export default TimeTrack