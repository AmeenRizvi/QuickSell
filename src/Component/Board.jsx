import React, { useEffect, useState } from 'react';
import { fetchTickets } from '../API/fetchTickets';
import Card from './Card';
import DisplaySelector from './DisplaySelector';
import './Board.css';

const Board = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(() => localStorage.getItem('grouping') || 'status');
  const [sorting, setSorting] = useState(() => localStorage.getItem('sorting') || 'priority');

  // Fetch tickets and users
  useEffect(() => {
    const loadTickets = async () => {
      const data = await fetchTickets();
      setTickets(data.tickets || []);
      setUsers(data.users || []);
    };
    loadTickets();
  }, []);

  // Save preferences to localStorage
  useEffect(() => {
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('sorting', sorting);
  }, [grouping, sorting]);

  // Helper function to get user name by userId
  const getUserName = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : 'Unassigned';
  };

  // Group tickets
  const groupedTickets = tickets.reduce((acc, ticket) => {
    const key = grouping === 'userId' 
      ? getUserName(ticket.userId || 'unassigned') 
      : ticket[grouping];
    acc[key] = acc[key] || [];
    acc[key].push(ticket);
    return acc;
  }, {});

  // Sort tickets within each group
  const sortTickets = (a, b) => {
    if (sorting === 'priority') return b.priority - a.priority;
    if (sorting === 'title') return a.title.localeCompare(b.title);
    return 0;
  };

  Object.keys(groupedTickets).forEach((key) => {
    groupedTickets[key].sort(sortTickets);
  });

  return (
    <div className="board">
      {/* DisplaySelector for grouping and sorting */}
      <div className="controls">
        <DisplaySelector
          grouping={grouping}
          setGrouping={setGrouping}
          sorting={sorting}
          setSorting={setSorting}
        />
      </div>

      {/* Render grouped and sorted tickets */}
      <div className="ticket-groups">
        {Object.keys(groupedTickets).map((group) => (
          <div key={group} className="group">
            <h3>{group}</h3>
            {groupedTickets[group].map((ticket) => (
              <Card key={ticket.id} {...ticket} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
