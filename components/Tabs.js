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

const List = styled.ul`
   {
    list-style-type: none;
  }
`;

const Room = styled.li`
   {
    margin: 3em;
  }
`;

const Row = styled.div`
   {
    margin: 0 -5px;

    &:after {
      content: "";
      display: table;
      clear: both;
    }
  }
`;

const Card = styled.div`
   {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 16px;
    text-align: left;
    background-color: #f1f1f1;
  }
`;

const Hotel = ({ hotel }) => {
  return <div dangerouslySetInnerHTML={{ __html: hotel.keySellingPoints }} />;
};

const Rooms = ({ rooms }) => {
  return (
    <List>
      {rooms.map(room => (
        <Room key={room.uid}>
          <Row>
            <Card
              dangerouslySetInnerHTML={{ __html: room.detailedDescription }}
            />
          </Row>
        </Room>
      ))}
    </List>
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
        {activeTab === 1 && <Hotel hotel={content.hotelSection} />}
        {activeTab === 2 && <Rooms rooms={content.roomsSection.rooms} />}
      </TabBody>
    </>
  );
};

export default Tabs;
