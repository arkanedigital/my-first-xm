import React from 'react';
import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type DemoComponentProps = ComponentProps & {
  fields: {
    phoneNumber: Field<string>;
    about: Field<string>;
    locations: Field<string>;
  };
};

const DemoComponent = (props: DemoComponentProps): JSX.Element => (
  <div className="hidden md:nav bg-gray-100">
    <div className="flex items-center">
      <Text field={props.fields.phoneNumber} tag="span" />
    </div>
    <div className="flex items-center">
      <Text field={props.fields.about} tag="span" />
      <Text field={props.fields.locations} tag="span" />
    </div>
  </div>
);

export default withDatasourceCheck()<DemoComponentProps>(DemoComponent);
