// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  shopListAPI:"https://run.mocky.io/v3/178c994d-8c3d-45e6-a093-e308773c0b65",
  productCategoryListAPI:"https://run.mocky.io/v3/4069d7f0-509c-47bb-98ae-ef2654efba57",
  productListAPI:"https://run.mocky.io/v3/93fc0914-208a-4c5d-9db2-b70b5a576ea1",
  shopAPI:"",
  
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
