// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  keys: 'qXeYm0FuI4ybQ2jYXzcdbj6nXzdvaKMCmeHZLn88',
  dashboardTechnical: './assets/data/dashboard-technical.json',
  dashboardCardDetails: './assets/data/dashboard-carddetails.json',
  projectsDetails: './assets/data/projects-details.json',
  introDetails: './assets/data/intro-banner.json',
  companies: {
    barclays: './assets/data/companies/barclays.json',
    hsbc: './assets/data/companies/hsbc.json',
    firmenich: './assets/data/companies/firmenich.json'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
