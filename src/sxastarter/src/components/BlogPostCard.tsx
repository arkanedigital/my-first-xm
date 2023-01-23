import React from 'react';

export const Default = (): JSX.Element => {
  const title = 'Blog Post Card';
  const views = 123456789;

  return (
    <div className="t-transform hover:t-scale-[1.01] t-transition-all t-rounded-xl t-w-full md:t-w-1/3 t-bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
      <div className="t-flex t-flex-col t-justify-between t-h-full t-bg-white dark:t-bg-gray-900 t-rounded-lg t-p-4">
        <div className="t-flex t-flex-col md:t-flex-row t-justify-between">
          <h4 className="t-text-lg md:t-text-lg t-font-medium t-mb-6 sm:t-mb-10 t-w-full t-text-gray-900 dark:t-text-gray-100 t-tracking-tight">
            {title}
          </h4>
        </div>
        <div className="t-flex t-items-center t-text-gray-800 dark:t-text-gray-200 t-capsize">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="t-h-6 t-w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <span className="t-ml-2 t-align-baseline t-capsize">
            {views ? new Number(views).toLocaleString() : '–––'}
          </span>
        </div>
      </div>
    </div>
  );
};
