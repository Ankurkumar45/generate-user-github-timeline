import React from 'react';

const GroupHeader = ({ title, date }) => {
    return (
        <div className="group-header">
            <h3 className="group-title">{title}</h3>
            {date && <span className="group-date">{date}</span>}
        </div>
    );
};

export default GroupHeader;