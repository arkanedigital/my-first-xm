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
  return (
    <div className="t-py-12 t-bg-slate-300 t-w-screen">
      <div className="t-px-8 t-bg-slate-300 t-space-y-12 t-container t-flex t-flex-col t-mx-auto">
        <h1 className="t-text-9xl t-py-4">OneOfEverything Component</h1>
        <hr />
        <Text tag="h2" className="contentTitle" field={props.fields.MyText} />
        <RichText field={props.fields.MyRichText} />
        <p>
          The checkbox is{' '}
          {props.fields.MyCheckbox.value ? `${props.fields.MyCheckbox.value}` : 'not checked'}
          {`. Checkbox - received as Field<boolean>. Is it used by referencing the variable. This is not a checkbox inside Next.js. It's simply a boolean that can be used for a toggle that needs to be set by the author and not the developer/visitor.`}
        </p>
        <Image field={props.fields.MyImage} />
        Image - Received as ImageField. Displayed with <Image /> component, which wraps Next Image.
        The image you see here is actually editable as a Next.js image with optimizations from
        within the content editor. You can set the image size, alt text, and more for the Image.
        <Link field={props.fields.MyLink} />
        <p>{props.fields.MyMultiLine.value}</p>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<OneOfEverythingProps>(OneOfEverything);
