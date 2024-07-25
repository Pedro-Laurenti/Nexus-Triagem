import React, { useState } from 'react';

interface TabProps {
    title: string;
    index: number;
    setSelectedTab: (index: number) => void;
    selectedTab: number;
}

const Tab: React.FC<TabProps> = ({ title, index, setSelectedTab, selectedTab }) => {
    return (
        <button
            className={`p-2 ${selectedTab === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`} onClick={() => setSelectedTab(index)}
        >
            {title}
        </button>
    );
};

interface TabsProps {
    tabs: string[];
    selectedTab: number;
    setSelectedTab: (index: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, selectedTab, setSelectedTab }) => {
    return (
        <div className="flex space-x-2 mb-4">
            {tabs.map((tab, index) => (
                <Tab key={index} title={tab} index={index} setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
            ))}
        </div>
    );
};

export default Tabs