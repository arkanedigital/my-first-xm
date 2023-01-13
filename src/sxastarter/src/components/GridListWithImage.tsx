import {
  Field,
  Image as JssImage,
  ImageField,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import React from 'react';
import HeroCard from './base/HeroCard';

type HeroProps = ComponentProps & {
  fields: {
    Heading1: Field<string>;
    Body1: Field<string>;
    Heading2: Field<string>;
    Body2: Field<string>;
    Heading3: Field<string>;
    Body3: Field<string>;
    Heading4: Field<string>;
    Body4: Field<string>;
    Image: ImageField;
  };
};

const GridListWithImage = (props: HeroProps): JSX.Element => {
  return (
    <section className="t-bg-slate-200 t-w-screen">
      <div className="t-container t-px-6 t-py-10 t-mx-auto">
        <h1 className="t-text-3xl t-font-semibold t-text-slate-700 t-capitalize t-lg:text-4xl ">
          Next.js / Vercel
          <br />
          Features and Benefits
        </h1>

        <div className="t-mt-2">
          <span className="t-inline-block t-w-40 t-h-1 t-bg-blue-500 t-rounded-full"></span>
          <span className="t-inline-block t-w-3 t-h-1 t-ml-1 t-bg-blue-500 t-rounded-full"></span>
          <span className="t-inline-block t-w-1 t-h-1 t-ml-1 t-bg-blue-500 t-rounded-full"></span>
        </div>

        <div className="t-mt-8 xl:t-mt-12 lg:t-flex lg:t-items-center">
          <div className="t-grid t-w-full t-grid-cols-1 t-gap-8 lg:t-w-1/2 xl:t-gap-16 md:t-grid-cols-2">
            <HeroCard heading={props.fields.Heading1} body={props.fields.Body1} />
            <HeroCard heading={props.fields.Heading2} body={props.fields.Body2} />
            <HeroCard heading={props.fields.Heading3} body={props.fields.Body3} />
            <HeroCard heading={props.fields.Heading4} body={props.fields.Body4} />
          </div>

          <div className="t-hidden lg:t-flex lg:t-w-1/2 lg:t-justify-center">
            {props.fields?.Image && (
              <JssImage
                field={props.fields.Image}
                className="t-w-[28rem] t-h-[28rem] t-flex-shrink-0 t-object-cover xl:t-w-[34rem] xl:t-h-[34rem] t-rounded-full"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default withDatasourceCheck()<HeroProps>(GridListWithImage);
