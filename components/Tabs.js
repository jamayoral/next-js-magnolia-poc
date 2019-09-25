import { useState } from "react";
import { TabHead, TabContainer, TabBody, Tab } from "../styles";

const ActionLink = props => {
  const { onCustomClick, onClick } = props;

  function handleClick(e) {
    e.preventDefault();
    return onClick ? onClick(e) : onCustomClick(e);
  }

  return <a {...props} onClick={handleClick} />;
};

const Tabs = ({ content }) => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <TabContainer>
      <TabHead>
        <ActionLink onCustomClick={() => setActiveTab("1")}>
          <Tab selected={activeTab === "1"}>
            <a>THE HOTEL</a>
          </Tab>
        </ActionLink>
        <ActionLink onCustomClick={() => setActiveTab("2")}>
          <Tab selected={activeTab === "2"}>
            <a>ROOMS AND SUITES</a>
          </Tab>
        </ActionLink>
      </TabHead>
      <TabBody>
        {activeTab === "1" && <>THE HOTEL content</>}
        {activeTab === "2" && <>ROOMS AND SUITES content</>}
      </TabBody>
    </TabContainer>
  );
};

export default Tabs;
