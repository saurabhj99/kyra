import React from "react";
import { socialHandlesData } from "../socialHandles/socialHandlesData";
import { SocialIcon } from "../header";

export const ProfileBio: React.FC<any> = ({ profileData }) => {
  return (
    <div className="w-11/12 mx-auto p-8 rounded-3xl flex flex-col gap-8 border-[1px] border-gray">
      <h1 className="text-2xl font-semibold">Profile Bio</h1>
      <div className="flex gap-8">
        <div className="flex gap-1 items-center px-2 rounded-lg bg-[#212529] text-xs lg:text-sm cursor-pointer">
          <div>
            <SocialIcon icon={socialHandlesData[0].icon} />
          </div>
          <p className="text-xs">@{socialHandlesData[0].handle}</p>
        </div>
        <p>{profileData?.tiktok?.bio}</p>
      </div>
    </div>
  );
};
