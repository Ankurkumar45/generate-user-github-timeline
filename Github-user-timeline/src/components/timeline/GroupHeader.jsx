import React from 'react';
// import './GroupHeader.css';

const GroupHeader = ({ title, date }) => {
    return (
        <div className="group-header">
            <h3 className="group-title">{title}</h3>
            {date && <span className="group-date">{date}</span>}
        </div>
    );
};

export default GroupHeader;