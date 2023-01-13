import { Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

type HeroCardProps = {
  heading: Field<string>;
  body: Field<string>;
};

const HeroCard = (props: HeroCardProps): JSX.Element => {
  return (
    <>
      <div className="t-space-y-3">
        {/* <span className="t-inline-block t-p-3 t-text-blue-500 t-bg-blue-100 t-rounded-xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="t-w-6 t-h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </span> */}

        <Text
          tag="h1"
          className="t-text-2xl t-font-semibold t-text-gray-700 t-capitalize"
          field={props.heading}
        />

        <Text tag="p" className="t-text-gray-700" field={props.body} />
      </div>
    </>
  );
};

export default HeroCard;
