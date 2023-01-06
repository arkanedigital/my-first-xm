import {
  Text,
  Field,
  withDatasourceCheck,
  RichTextField,
  ImageField,
  LinkField,
  RichText,
  Image,
  Link,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type OneOfEverythingProps = ComponentProps & {
  fields: {
    MyText: Field<string>;
    MyRichText: RichTextField;
    MyCheckbox: Field<boolean>;
    MyImage: ImageField;
    MyLink: LinkField;
    MyMultiLine: Field<string>;
  };
};

const OneOfEverything = (props: OneOfEverythingProps): JSX.Element => {
  // console.log('OneOfEverything props', JSON.stringify(props.fields.MyLink));
  return (
    <div>
      <h1 className="text-7xl">OneOfEverything Component</h1>
      <Text tag="h2" className="contentTitle" field={props.fields.MyText} />
      <RichText field={props.fields.MyRichText} />
      The checkbox is{' '}
      {props.fields.MyCheckbox.value ? `${props.fields.MyCheckbox.value}` : 'not checked'}
      <Image field={props.fields.MyImage} />
      <Link field={props.fields.MyLink} />
      <p>Multi-line text:</p>
      <pre>{props.fields.MyMultiLine.value}</pre>
    </div>
  );
};

export default withDatasourceCheck()<OneOfEverythingProps>(OneOfEverything);
