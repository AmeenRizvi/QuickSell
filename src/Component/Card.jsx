import React from 'react';
import './Card.css';

// Import the icons
import noPriorityIcon from '../icons/No-priority.svg';
import lowPriorityIcon from '../icons/Img - Low Priority.svg';
import mediumPriorityIcon from '../icons/Img - Medium Priority.svg';
import highPriorityIcon from '../icons/Img - High Priority.svg';
import urgentPriorityIcon from '../icons/SVG - Urgent Priority colour.svg';

import toDoIcon from '../icons/To-do.svg';
import inProgressIcon from '../icons/in-progress.svg';
import doneIcon from '../icons/Done.svg';
import cancelledIcon from '../icons/Cancelled.svg';
import backlogIcon from '../icons/Backlog.svg';
import displayIcon from '../icons/Display.svg';
import threeDotMenuIcon from '../icons/3 dot menu.svg';
import addIcon from '../icons/add.svg';

const Card = ({ title, description, priority, status, user }) => {
  const priorityIcons = [
    noPriorityIcon,
    lowPriorityIcon,
    mediumPriorityIcon,
    highPriorityIcon,
    urgentPriorityIcon
  ];

  const statusIcons = {
    'To-do': toDoIcon,
    'In-progress': inProgressIcon,
    'Done': doneIcon,
    'Cancelled': cancelledIcon,
    'Backlog': backlogIcon,
    'Display': displayIcon
  };

  return (
    <div className="card">
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="card-footer">
        <div className="priority-container">
          <img src={priorityIcons[priority]} alt="Priority Icon" className="priority-icon" />
          <span className={`priority priority-${priority}`}>
            {['No priority', 'Low', 'Medium', 'High', 'Urgent'][priority]}
          </span>
        </div>
        <div className="status-container">
          <img src={statusIcons[status]} alt="Status Icon" className="status-icon" />
          <span>{status}</span>
        </div>
        <span>{user}</span>
        <img src={threeDotMenuIcon} alt="Menu Icon" className="menu-icon" />
      </div>
    </div>
  );
};

export default Card;

