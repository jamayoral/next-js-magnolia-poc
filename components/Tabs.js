import styled from "@emotion/styled";
import { useState } from "react";

const TabHead = styled.header`
  display: flex;
  background: ${({ theme }) => theme.primary};

  button {
    text-transform: uppercase;
    font-size: 1rem;
    border: none;
    padding: 0;
    outline: none;
  }
`;

const Tab = styled.div`
  padding: 1em;
  cursor: pointer;
  color: white;
  background: ${({ selected, theme }) => (selected ? "grey" : theme.primary)};
`;

const TabBody = styled.section`
  padding: 1em;
`;

const Rooms = ({ rooms }) => {
  return (
    <ul>
      {rooms.map(room => (
        <li
          key={room.uid}
          dangerouslySetInnerHTML={{ __html: room.detailedDescription }}
        />
      ))}
    </ul>
  );
};

const Tabs = ({ content }) => {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <>
      <TabHead>
        <button onClick={() => setActiveTab(1)}>
          <Tab selected={activeTab === 1}>the hotel</Tab>
        </button>
        <button onClick={() => setActiveTab(2)}>
          <Tab selected={activeTab === 2}>rooms and suites</Tab>
        </button>
      </TabHead>
      <TabBody>
        {activeTab === 1 && <p>hotel content</p>}
        {activeTab === 2 && <Rooms rooms={content.roomsSection.rooms} />}
      </TabBody>
    </>
  );
};

export default Tabs;
