import React from 'react';
import {
  ComponentParams,
  ComponentRendering,
  Placeholder,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface ComponentProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
}

export const Default = (props: ComponentProps): JSX.Element => {
  console.log('MyContainerProps', props);
  const phKey = `my-container-${props.params.DynamicPlaceholderId}`;

  return (
    <div className="bg-gray-500">
      Filling in something so I can see this before adding to it.
      <Placeholder name={phKey} rendering={props.rendering} />
    </div>
  );
};
