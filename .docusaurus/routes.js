import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/__docusaurus/debug',
    component: ComponentCreator('/docs/__docusaurus/debug', 'e58'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/config',
    component: ComponentCreator('/docs/__docusaurus/debug/config', '2ce'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/content',
    component: ComponentCreator('/docs/__docusaurus/debug/content', '11b'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/docs/__docusaurus/debug/globalData', 'f13'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/docs/__docusaurus/debug/metadata', 'bff'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/registry',
    component: ComponentCreator('/docs/__docusaurus/debug/registry', '830'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/routes',
    component: ComponentCreator('/docs/__docusaurus/debug/routes', '13e'),
    exact: true
  },
  {
    path: '/docs/calendar/',
    component: ComponentCreator('/docs/calendar/', '555'),
    exact: true
  },
  {
    path: '/docs/markdown-page',
    component: ComponentCreator('/docs/markdown-page', '1e2'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '6fa'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', 'b40'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '88f'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', '1d5'),
            routes: [
              {
                path: '/docs/milestones',
                component: ComponentCreator('/docs/milestones', '182'),
                exact: true,
                sidebar: "milestonesSidebar"
              },
              {
                path: '/docs/milestones/checkpoint',
                component: ComponentCreator('/docs/milestones/checkpoint', 'cc9'),
                exact: true,
                sidebar: "milestonesSidebar"
              },
              {
                path: '/docs/milestones/milestone1',
                component: ComponentCreator('/docs/milestones/milestone1', '873'),
                exact: true,
                sidebar: "milestonesSidebar"
              },
              {
                path: '/docs/milestones/milestone2/',
                component: ComponentCreator('/docs/milestones/milestone2/', 'afe'),
                exact: true,
                sidebar: "milestonesSidebar"
              },
              {
                path: '/docs/milestones/milestone2/archicteture',
                component: ComponentCreator('/docs/milestones/milestone2/archicteture', '232'),
                exact: true,
                sidebar: "milestonesSidebar"
              },
              {
                path: '/docs/milestones/milestone2/domain_model',
                component: ComponentCreator('/docs/milestones/milestone2/domain_model', 'd50'),
                exact: true,
                sidebar: "milestonesSidebar"
              },
              {
                path: '/docs/milestones/milestone2/flowcharts',
                component: ComponentCreator('/docs/milestones/milestone2/flowcharts', 'b99'),
                exact: true,
                sidebar: "milestonesSidebar"
              },
              {
                path: '/docs/milestones/milestone3',
                component: ComponentCreator('/docs/milestones/milestone3', '2d3'),
                exact: true,
                sidebar: "milestonesSidebar"
              },
              {
                path: '/docs/minutes',
                component: ComponentCreator('/docs/minutes', '7e9'),
                exact: true,
                sidebar: "minutesSidebar"
              },
              {
                path: '/docs/minutes/minutes1',
                component: ComponentCreator('/docs/minutes/minutes1', 'd79'),
                exact: true,
                sidebar: "minutesSidebar"
              },
              {
                path: '/docs/minutes/minutes10',
                component: ComponentCreator('/docs/minutes/minutes10', 'e46'),
                exact: true,
                sidebar: "minutesSidebar"
              },
              {
                path: '/docs/minutes/minutes11',
                component: ComponentCreator('/docs/minutes/minutes11', '4c8'),
                exact: true,
                sidebar: "minutesSidebar"
              },
              {
                path: '/docs/minutes/minutes12',
                component: ComponentCreator('/docs/minutes/minutes12', '58a'),
                exact: true,
                sidebar: "minutesSidebar"
              },
              {
                path: '/docs/minutes/minutes13',
                component: ComponentCreator('/docs/minutes/minutes13', '218'),
                exact: true,
                sidebar: "minutesSidebar"
              },
              {
                path: '/docs/minutes/minutes14',
                component: ComponentCreator('/docs/minutes/minutes14', '584'),
                exact: true,
                sidebar: "minutesSidebar"
              },
              {
                path: '/docs/minutes/minutes15',
                component: ComponentCreator('/docs/minutes/minutes15', '824'),
                exact: true,
                sidebar: "minutesSidebar"
              },
              {
                path: '/docs/minutes/minutes2',
                component: ComponentCreator('/docs/minutes/minutes2', '17f'),
                exact: true,
                sidebar: "minutesSidebar"
              },
              {
                path: '/docs/minutes/minutes3',
                component: ComponentCreator('/docs/minutes/minutes3', '4c6'),
                exact: true,
                sidebar: "minutesSidebar"
              },
              {
                path: '/docs/minutes/minutes4',
                component: ComponentCreator('/docs/minutes/minutes4', '24a'),
                exact: true,
                sidebar: "minutesSidebar"
              },
              {
                path: '/docs/minutes/minutes5',
                component: ComponentCreator('/docs/minutes/minutes5', 'ec8'),
                exact: true,
                sidebar: "minutesSidebar"
              },
              {
                path: '/docs/minutes/minutes6',
                component: ComponentCreator('/docs/minutes/minutes6', '615'),
                exact: true,
                sidebar: "minutesSidebar"
              },
              {
                path: '/docs/minutes/minutes7',
                component: ComponentCreator('/docs/minutes/minutes7', 'b78'),
                exact: true,
                sidebar: "minutesSidebar"
              },
              {
                path: '/docs/minutes/minutes8',
                component: ComponentCreator('/docs/minutes/minutes8', '0c5'),
                exact: true,
                sidebar: "minutesSidebar"
              },
              {
                path: '/docs/minutes/minutes9',
                component: ComponentCreator('/docs/minutes/minutes9', 'd54'),
                exact: true,
                sidebar: "minutesSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
