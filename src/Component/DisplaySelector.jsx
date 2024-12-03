import React from 'react';
import './DisplaySelector.css';

const DisplaySelector = ({ grouping, sorting, setGrouping, setSorting }) => (
  <div className="display-selector">
    <label>
      Group By:
      <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>
    </label>
    <label>
      Sort By:
      <select value={sorting} onChange={(e) => setSorting(e.target.value)}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </label>
  </div>
);

export default DisplaySelector;
