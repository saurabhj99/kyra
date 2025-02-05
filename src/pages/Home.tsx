import axios from "axios";
import { useEffect, useState } from "react";
import { GraphSection } from "../components/graphSection";
import { Header } from "../components/header";
import { HeaderCards } from "../components/headerCards";
import { ProfileBio } from "../components/profileBio";
import { StatsTable } from "../components/statsTable";
import { Spinner } from "../components/spinner";

import { TabSection } from "../components/tabSection";

type HomeProps = {};

const tabs = [
  "Account Info",
  "Media",
  "Past briefs",
  "Audience personas",
  "Lookalikes",
];

export const Home: React.FC<HomeProps> = () => {
  const [profileData, setProfileData] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("Account Info");

  useEffect(() => {
    const fetchProfileData = async () => {
      setLoading(true);

      const headers = {
        headers: { "x-kyra-swagger": "f583305f-9bc3-42dd-a520-8520483cff5a" },
        withCredentials: true,
      };

      try {
        const API_BASE_URL = "/api/discovery/creators/5831967";

        const [baseDataRes, statsHistoryRes] = await Promise.all([
          axios.get(`${API_BASE_URL}/base-data`, headers),
          axios.get(`${API_BASE_URL}/stats-history`, headers),
        ]);

        const baseData = baseDataRes.data.data;
        const statsHistory = statsHistoryRes.data.data;

        // Language & Region Mapping
        const languageMap: Record<string, string> = { en: "English" };
        const regionMap: Record<string, string> = { US: "United States" };

        if (baseData.tiktok) {
          baseData.tiktok.language =
            languageMap[baseData.tiktok.language] || baseData.tiktok.language;
          baseData.tiktok.region =
            regionMap[baseData.tiktok.region] || baseData.tiktok.region;
        }

        setProfileData({
          ...baseData,
          predictedFee: baseDataRes.data.predictedFee,
          predictedCpv: baseDataRes.data.predictedCpv,
          ...statsHistory,
        });
      } catch (error) {
        console.error("Error while fetching profile data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfileData();
  }, []);

  return (
    <div className="w-full h-full p-10 font-kanit">
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <h1 className="text-xl mr-2">Loading</h1>
          <Spinner />
        </div>
      ) : (
        <div className="w-full flex flex-col gap-10">
          <Header profileData={profileData} />
          <HeaderCards profileData={profileData} />
          <TabSection
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={(tab: string) => {
              setActiveTab(tab);
            }}
          />
          <ProfileBio profileData={profileData} />
          <StatsTable profileData={profileData} />
          <GraphSection dataPoints={profileData?.historyPoints} />
        </div>
      )}
    </div>
  );
};
