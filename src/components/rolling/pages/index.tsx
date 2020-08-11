import loadable from '@loadable/component';

export const Welcome = loadable(() =>
  import(
    /* webpackChunkName: "lucy_welcome" */
    /* webpackPrefetch: true */
    './Welcome'
  ),
);
