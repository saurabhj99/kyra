import React from "react";
import { TiktokIcon } from "../../assets";
import { Card } from "../card";
import { Growth } from "../growth";

export const StatsTable: React.FC<any> = ({ profileData }) => {
  return (
    <div className="w-11/12 mx-auto p-8 rounded-3xl flex flex-row xl:flex-col justify-evenly gap-5 border-[1px] border-gray">
      <div className="flex flex-col xl:flex-row gap-5 items-center font-light lg:justify-between mx-auto lg:m-0">
        <div>
          <TiktokIcon height={40} width={40} />
        </div>
        <div className="flex flex-col xl:flex-row  items-center xl:items-start w-full">
          <Card
            title="Followers"
            description={profileData?.tiktok?.followersCount}
            growth={
              <Growth
                data={`${Math.ceil(
                  profileData?.delta?.followersCount?.percentage * 100
                )}`}
              />
            }
          />
          <Card
            title="Average views"
            description={profileData?.tiktok?.followersCount}
          />
          <Card
            title="Potential sponsored views"
            description={profileData?.tiktok?.sponsoredMedianViews}
          />
          <Card
            title="Total Likes"
            description={profileData?.delta?.likesCount?.absolute}
            growth={
              <Growth
                data={`${Math.ceil(
                  profileData?.delta?.likesCount?.percentage * 100
                )}`}
              />
            }
          />
          <Card
            title="Engagement rate"
            description={Number(
              (profileData?.tiktok?.engagementRate / 100).toFixed(3)
            )}
            descriptionSuffix="%"
          />
          <Card
            title="Total Posts"
            description={profileData?.delta?.postsCount?.absolute}
            cardClass=""
            growth={
              <Growth
                data={`${Math.ceil(
                  profileData?.delta?.postsCount?.percentage * 100
                )}`}
              />
            }
          />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-5 items-center lg:justify-between mx-auto lg:m-0">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M12.7 10c0-1.5-1.2-2.7-2.7-2.7S7.3 8.5 7.3 10s1.2 2.7 2.7 2.7s2.7-1.2 2.7-2.7m1.4 0c0 2.3-1.8 4.1-4.1 4.1S5.9 12.3 5.9 10S7.7 5.9 10 5.9s4.1 1.8 4.1 4.1m1.1-4.3c0 .6-.4 1-1 1s-1-.4-1-1s.4-1 1-1s1 .5 1 1M10 3.4c-1.2 0-3.7-.1-4.7.3c-.7.3-1.3.9-1.5 1.6c-.4 1-.3 3.5-.3 4.7s-.1 3.7.3 4.7c.2.7.8 1.3 1.5 1.5c1 .4 3.6.3 4.7.3s3.7.1 4.7-.3q1.05-.45 1.5-1.5c.4-1.1.3-3.6.3-4.7s.1-3.7-.3-4.7c-.2-.7-.8-1.3-1.5-1.5c-1-.5-3.5-.4-4.7-.4m8 6.6v3.3c0 1.2-.4 2.4-1.3 3.4c-.9.9-2.1 1.3-3.4 1.3H6.7c-1.2 0-2.4-.4-3.4-1.3c-.8-.9-1.3-2.1-1.3-3.4V6.7c0-1.3.5-2.5 1.3-3.4C4.3 2.5 5.5 2 6.7 2h6.6c1.2 0 2.4.4 3.4 1.3c.8.9 1.3 2.1 1.3 3.4z"
            />
          </svg>
        </div>
        <div className="flex flex-col xl:flex-row gap-0 items-center xl:items-start justify-between w-full">
          <Card
            title="Followers"
            description={profileData?.tiktok?.followersCount}
            growth={
              <Growth
                data={`${Math.ceil(
                  profileData?.delta?.followersCount?.percentage * 100
                )}`}
              />
            }
          />
          <Card title="Average views" description={null} cardClass="gap-5" />
          <Card
            title="Potential sponsored views"
            description={profileData?.tiktok?.sponsoredMedianViews}
          />
          <Card
            title="Total Likes"
            description={profileData?.delta?.likesCount?.absolute}
            growth={
              <Growth
                data={`${Math.ceil(
                  profileData?.delta?.likesCount?.percentage * 100
                )}`}
              />
            }
          />
          <Card
            title="Engagement rate"
            description={Number(
              (profileData?.tiktok?.engagementRate / 100).toFixed(3)
            )}
            descriptionSuffix="%"
          />
          <Card
            title="Total Posts"
            description={profileData?.delta?.postsCount?.absolute}
            growth={
              <Growth
                data={`${Math.ceil(
                  profileData?.delta?.postsCount?.percentage * 100
                )}`}
              />
            }
          />
        </div>
      </div>
    </div>
  );
};
