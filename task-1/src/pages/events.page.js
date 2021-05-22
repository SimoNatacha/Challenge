import React from 'react';
import Event from '../components/Event-item/event-item.component';
import events from "../data/data.json"
import '../styles/event-page.scss'

const EventPage= ()=> {

    return (
        <div className="main-container">
            <div className="container">
                <div>
                    <div className="event-title">
                        <h2>EVENTS</h2>
                    </div>
                </div>
                <div className="event-container">
                {
                    events.map(({id, ...data}) => (
                        <Event key={id} {...data}/>
                    ))
                }
               </div>

               <div className="msg-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"/></svg>
               </div>
            </div>
            
        </div>
    )
}

export default EventPage;

