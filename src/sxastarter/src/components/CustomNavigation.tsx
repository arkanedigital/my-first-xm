import React from 'react';
import {
  Link as JssLink,
  LinkField,
  ImageField,
  Text,
  Image as JssImage,
  TextField,
} from '@sitecore-jss/sitecore-jss-nextjs';

type NavLevel1 = {
  firstlink: {
    link: LinkField;
  };
  ctaimage: {
    image: ImageField;
  };
  ctadescription: {
    description: TextField;
  };
  ctalink: {
    ctalink: LinkField;
  };
  children: {
    results: NavLevel2[];
  };
};

type NavLevel2 = {
  field: {
    title: TextField;
  };
  children: {
    results: NavLevel3[];
  };
};

type NavLevel3 = {
  field: {
    link: LinkField;
  };
};

interface NavigationFields {
  data: {
    datasource: {
      field: {
        logo: ImageField;
      };
      children: {
        results: NavLevel1[];
      };
    };
  };
}

type NavigationItem = {
  params: { [key: string]: string };
  fields: NavigationFields;
  name: string;
};

type NavLevel1Props = {
  params: { [key: string]: string };
  fields: NavLevel1;
};

type NavLevel2Props = {
  params: { [key: string]: string };
  fields: NavLevel2;
};

type NavLevel3Props = {
  params: { [key: string]: string };
  fields: NavLevel3;
};

const ThirdLevelNav = (props: NavLevel3Props) => {
  return (
    <li>
      <div className="field-link">
        <JssLink field={props.fields.field.link} />
      </div>
    </li>
  );
};

const SecondLevelNav = (props: NavLevel2Props) => {
  const datasource = props.fields;
  const styles = `component link-list ${props.params.styles}`.trimEnd();
  const id = props.params.RenderingIdentifier;

  if (datasource) {
    const list = datasource.children.results
      .filter((element: NavLevel3) => element)
      .map((element: NavLevel3, key: number) => (
        <ThirdLevelNav params={props.params} fields={element} key={`lvl3${key}`} />
      ));

    return (
      <div className={styles} id={id ? id : undefined}>
        <div className="component-content">
          <Text field={datasource.field.title} />
          <div>{list}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles} id={id ? id : undefined}>
      <div className="component-content">
        <h3>Second level</h3>
      </div>
    </div>
  );
};

const FirstLevelNav = (props: NavLevel1Props): JSX.Element => {
  const datasource = props.fields;
  const styles = `component link-list ${props.params.styles}`.trimEnd();
  const id = props.params.RenderingIdentifier;

  if (datasource) {
    const list = datasource.children.results
      .filter((element: NavLevel2) => element)
      .map((element: NavLevel2, key: number) => (
        <SecondLevelNav params={props.params} fields={element} key={`lvl2${key}`} />
      ));

    return (
      <div className={styles} id={id ? id : undefined}>
        <div className="component-content">
          <JssLink field={datasource.firstlink.link} />
          <JssImage field={datasource.ctaimage.image} />
          <div>{list}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles} id={id ? id : undefined}>
      <div className="component-content">
        <h3>First Level</h3>
      </div>
    </div>
  );
};

export const Default = (props: NavigationItem): JSX.Element => {
  console.log('LinkListParent', props);
  const datasource = props.fields?.data?.datasource;
  const styles = `component link-list ${props.params.styles}`.trimEnd();
  const id = props.params.RenderingIdentifier;

  if (datasource) {
    const list = datasource.children.results
      .filter((element) => element)
      .map((element: NavLevel1, key: number) => (
        <FirstLevelNav params={props.params} fields={element} key={key} />
      ));

    return (
      <div className={styles} id={id ? id : undefined}>
        <div className="component-content">
          {props.name}
          <ul>{list}</ul>
        </div>
      </div>
    );
  }

  return (
    <div className={styles} id={id ? id : undefined}>
      <div className="component-content">
        <h3>Nav placeholder</h3>
      </div>
    </div>
  );
};

/* sample data
{
  "data": {
    "datasource": {
      "field": {
        "logo": {
          "value": {
            "src": "https://xmcloudcm.localhost/-/media/Default-Website/sc_logo.png?h=374&iar=0&w=1728&hash=2E60151C76E86E42B00D77352188A0C5",
            "alt": "",
            "width": "1728",
            "height": "374"
          }
        }
      },
      "children": {
        "results": [
          {
            "firstlink": {
              "jsonValue": {
                "value": {
                  "text": "The Company",
                  "anchor": "",
                  "linktype": "internal",
                  "class": "",
                  "title": "",
                  "target": "",
                  "querystring": "",
                  "id": "{5D8716B5-34D2-4E52-9066-DC14E3D8BF9C}",
                  "href": "/Secondary-Page"
                }
              }
            },
            "ctaimage": {
              "jsonValue": {
                "value": {
                  "src": "https://xmcloudcm.localhost/-/media/Project/Basic-Site/sxastarter/System/5/D/8/7/thumbnail_5D8716B534D24E529066DC14E3D8BF9C.png?h=600&iar=0&w=600&hash=F9ABF88B13643D1693F522BDE7B86E01",
                  "alt": "Thumbnail for Secondary Page",
                  "width": "600",
                  "height": "600"
                }
              }
            },
            "ctadescription": {
              "value": "cool description"
            },
            "ctalink": {
              "jsonValue": {
                "value": {
                  "href": ""
                }
              }
            },
            "children": {
              "results": [
                {
                  "field": {
                    "title": "The  Company"
                  },
                  "children": {
                    "results": [
                      {
                        "field": {
                          "link": {
                            "value": {
                              "text": "third level",
                              "anchor": "",
                              "linktype": "internal",
                              "class": "",
                              "title": "",
                              "target": "",
                              "querystring": "",
                              "id": "{80C59953-4697-4EA1-B2F5-4DFA2DF8045C}",
                              "href": "/Secondary-Page/Tertiary-Page"
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  }
}
*/
