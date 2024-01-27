// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  host: "https://3z3r11lnih.execute-api.ap-south-1.amazonaws.com/dev",
  keys: 'qXeYm0FuI4ybQ2jYXzcdbj6nXzdvaKMCmeHZLn88',
  rakey: 'f1e0db20e1msh39bd11326d3021cp1fb9b7jsna317b321434a',
  dashboardTechnical: './assets/data/dashboard-technical.json',
  dashboardCardDetails: '/dashboard-technical/1',
  projectsDetails: './assets/data/projects-details.json',
  introDetails: './assets/data/intro-banner.json',
  noImg: 'https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg',
  companies: {
    barclays: './assets/data/companies/barclays.json',
    hsbc: './assets/data/companies/hsbc.json',
    firmenich: './assets/data/companies/firmenich.json',
    wbs: './assets/data/companies/wbs.json'
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
