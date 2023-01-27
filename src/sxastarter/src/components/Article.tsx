import {
  Text,
  RichText,
  Field,
  RichTextField,
  DateField,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type ArticleProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    Description: RichTextField;
    Date: Field<string>;
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const Article = ({ fields }: ArticleProps): JSX.Element => (
  <div className="contentBlock">
    Hardcoded text
    <Text tag="h1" className="contentTitle" field={fields.Title} />
    <DateField field={fields.Date} />
    <RichText className="contentDescription" field={fields.Description} />
  </div>
);

export default withDatasourceCheck()<ArticleProps>(Article);
