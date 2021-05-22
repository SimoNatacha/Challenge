import React from 'react'
import PropTypes from 'prop-types'

const Event = ({date, title, desc, time, loc}) => {

    return (
        <div className="event">
            <div className="event-date">
                <h3>{date}</h3>
            </div>
            <div className="event-info">
                <div className="event-name">
                    <h3>{title}</h3>
                </div>
                <div className="event-desc">
                    <p>{desc}</p>
                </div>
            </div>
            <div className="event-venu">
                <div className="event-time">
                    <h3>{time}</h3>
                </div>
                <div className="event-loc">
                    <p>{loc}</p>
                </div>
            </div>
            <div className="event-details">
                <button >+ Event Details</button>
            </div>
        </div>

    )
}

Event.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    loc: PropTypes.string.isRequired 
}

export default Event;
