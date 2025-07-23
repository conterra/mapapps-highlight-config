# Highlight Config

The Highlight Config bundle adds the possibility to set highlightOptions via configuration.

![Screenshot App](https://github.com/conterra/mapapps-highlight-config/blob/main/screenshot.png)


## Sample App
https://demos.conterra.de/mapapps/resources/apps/public_demo_highlightconfig/index.html

## Installation Guide
**Requirement: map.apps 4.14.0**

[dn_highlightconfig Documentation](https://github.com/conterra/mapapps-highlight-config/tree/master/src/main/js/bundles/dn_highlightconfig)

## Quick start

Clone this project and ensure that you have all required dependencies installed correctly (see [Documentation](https://docs.conterra.de/en/mapapps/latest/developersguide/getting-started/set-up-development-environment.html)).

Then run the following commands from the project root directory to start a local development server:

```bash
# install all required node modules
$ mvn initialize

# start dev server
$ mvn compile -Denv=dev -Pinclude-mapapps-deps

# run unit tests
$ mvn test -P run-js-tests,include-mapapps-deps
```
