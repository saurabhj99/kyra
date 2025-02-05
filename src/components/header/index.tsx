import React, { useState } from "react";
import { SocialHandles } from "../socialHandles";

export const SocialIcon = ({ icon }: { icon: string }) => (
  <div dangerouslySetInnerHTML={{ __html: icon }} />
);

export const Header: React.FC<any> = ({ profileData }) => {
  const [saved, setSaved] = useState<boolean>(true);

  return (
    <div className="w-11/12 mx-auto flex flex-col items-center gap-5">
      {/* profile picture */}
      <img
        src={profileData?.tiktok?.profilePicture}
        className="rounded-full h-36 w-36"
      />

      {/* name  */}
      <div className="flex gap-3 items-center">
        <p className="text-3xl font-bold tracking-wide leading-3">
          {profileData?.tiktok?.nickname}
        </p>

        <div
          onClick={() => setSaved(!saved)}
          className="cursor-pointer select-none"
        >
          {saved ? (
            <svg
              className="text-neon-green"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path fill="currentColor" d="M13 15.563V1H3v14.563l5-2.308z" />
            </svg>
          ) : (
            <svg
              className="text-neon-green"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="m13 15.563l-5-2.308l-5 2.308V1h10zM11 3H5v9.437l3-1.384l3 1.384z"
              />
            </svg>
          )}
        </div>
        <div>
          <svg
            className="text-neon-green select-none"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3 3 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* region and language */}
      <div className="flex gap-4 items-center text-[0.6rem]">
        <div className="flex items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12.004 11.73q.667 0 1.14-.475t.472-1.143t-.476-1.14t-1.143-.472t-1.14.476t-.472 1.143t.475 1.14t1.144.472M12 21.019q-3.525-3.117-5.31-5.814q-1.786-2.697-1.786-4.909q0-3.173 2.066-5.234Q9.037 3 12 3t5.03 2.062q2.066 2.061 2.066 5.234q0 2.212-1.785 4.909q-1.786 2.697-5.311 5.814"
              />
            </svg>
          </div>
          <p className="text-gray-300 font-semibold">
            {profileData?.tiktok?.region}
          </p>
        </div>
        <div className="flex items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138A47.63 47.63 0 0 1 15 5.621m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
              />
            </svg>
          </div>
          <p className="text-gray-300 font-semibold">
            {profileData?.tiktok?.language}
          </p>
        </div>
      </div>

      {/* social handles */}
      <SocialHandles />
    </div>
  );
};
