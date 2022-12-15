import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type DemoComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const DemoComponent = (props: DemoComponentProps): JSX.Element => (
  <div>
    <p>DemoComponent Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default withDatasourceCheck()<DemoComponentProps>(DemoComponent);
