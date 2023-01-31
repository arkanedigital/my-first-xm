import React from 'react';
import { Link as JssLink, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

type ResultsFieldLink = {
  field: {
    link: LinkField;
  };
};

interface FolderFields {
  data: {
    datasource: {
      children: {
        results: LinkListItems[];
      };
    };
  };
}
type LinkListItems = {
  name: string;
  children: {
    results: ResultsFieldLink[];
  };
};

type LinkListFolderProps = {
  params: { [key: string]: string };
  fields: FolderFields;
  name: string;
};

type LinkListProps = {
  params: { [key: string]: string };
  fields: LinkListItems;
};

type LinkListItemProps = {
  key: string;
  index: number;
  total: number;
  field: LinkField;
};

const LinkListItem = (props: LinkListItemProps) => {
  let className = `item${props.index}`;
  className += (props.index + 1) % 2 == 0 ? ' even' : ' odd';
  if (props.index == 0) {
    className += ' first';
  }
  if (props.index + 1 == props.total) {
    className += ' last';
  }
  return (
    <li className={className}>
      <div className="field-link">
        <JssLink field={props.field} />
      </div>
    </li>
  );
};

const LinkListParent = (props: LinkListProps): JSX.Element => {
  const datasource = props.fields;
  const styles = `component link-list ${props.params.styles}`.trimEnd();
  const id = props.params.RenderingIdentifier;

  if (datasource) {
    const list = datasource.children.results
      .filter((element: ResultsFieldLink) => element?.field?.link)
      .map((element: ResultsFieldLink, key: number) => (
        <LinkListItem
          index={key}
          key={`${key}${element.field.link}`}
          total={datasource.children.results.length}
          field={element.field.link}
        />
      ));

    return (
      <div className={styles} id={id ? id : undefined}>
        <div className="component-content">
          {datasource?.name}
          <ul>{list}</ul>
        </div>
      </div>
    );
  }

  return (
    <div className={styles} id={id ? id : undefined}>
      <div className="component-content">
        <h3>Link List</h3>
      </div>
    </div>
  );
};

export const Default = (props: LinkListFolderProps): JSX.Element => {
  console.log('LinkListParent', props);
  const datasource = props.fields?.data?.datasource;
  const styles = `component link-list ${props.params.styles}`.trimEnd();
  const id = props.params.RenderingIdentifier;

  if (datasource) {
    const list = datasource.children.results
      .filter((element) => element)
      .map((element: LinkListItems, key: number) => (
        <LinkListParent params={props.params} fields={element} key={key} />
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
        <h3>Footer placeholder</h3>
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
