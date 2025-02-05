interface TabProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs: Array<string>;
}

export const TabSection: React.FC<TabProps> = ({
  activeTab,
  onTabChange,
  tabs,
}) => {
  return (
    <nav className=" w-full bg-black text-white px-6 border-b border-gray">
      <div className="w-full lg:w-6/12 flex lg:flex-row gap-5 justify-between mx-auto overflow-x-scroll [&::-webkit-scrollbar]:hidden px-5">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`relative min-w-fit text-sm font-base transition-all duration-300 bg-transparent border-none pb-2 cursor-pointer
            ${activeTab === tab ? "text-lime-400" : "text-white"}
          `}
            onClick={() => onTabChange(tab)}
          >
            {tab}

            {/* Bottom Border for Active Tab */}
            {activeTab === tab && (
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-lime-400 z-100"></span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};
