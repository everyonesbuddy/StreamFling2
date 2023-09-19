// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  STRIPE_PUBLISHABLE_KEY:
    'pk_live_51NIGq8BST1i5kHmBukXmXU84zp0Nl05gDXIpDjf2X8NNgtsL89YmjC0ABFnN7sf6Xh7HzwkbSCRaaLDMkZKnajGt00SF0jzyjL',
  contentfulBlog: {
    spaceId: '4jllv2wck7g5',
    token: 'j96zZKe39c2udCC-FBy9XHJBS_bgboMWsLApMcjc7Q0',
    contentTypeIds: {
      product: 'blogPosts',
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
