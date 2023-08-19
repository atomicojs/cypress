const { defineFrameworkDefinition } = require("cypress");

const atomicoDep = {
    // Unique, semantic identifier.
    type: "atomico",

    // Human readable name.
    name: "Atomico",

    // Package name install from `npm`.
    package: "atomico",

    /**
     * Similar to package, but can include a version or tag.
     * Used during setup to generate an install command for users.
     * Eg: `solid-js@next`
     */
    installer: "atomico",

    // Human readable description.
    description:
        "A declarative, efficient, and flexible JavaScript library for building user interfaces.",

    // Minimum supported version.
    minVersion: "^1.6.0",
};

/**
 * Similar to above. Create an smooth, seamless setup experience
 * by ensuring the user has all the necessary dependencies.
 * @type {Cypress.CypressComponentDependency}
 */
const atomicoVitePlugin = {
    type: "@atomico/vite",
    name: "@atomico/vite",
    package: "@atomico/vite",
    installer: "@atomico/vite",
    description: "A simple integration to run Atomico with vite",
    minVersion: "*",
};

/**
 * The actual definition.
 */
module.exports = defineFrameworkDefinition({
    /**
     * This should match the `npm` package name.
     * The convention required to ensure your Definition is processed
     * by Cypress is `cypress-ct-*` for global packages, or
     * `@org/cypress-ct-*` for organization level packages.
     */
    type: "@atomico/cypress",

    /**
     * The label that shows up when configuring Component Testing
     * for the first time.
     */
    name: "Atomico",

    /**
     * Supported bundlers. Can be "webpack" and/or "vite".
     * In this example we only support Solid.js with Vite.
     */
    supportedBundlers: ["vite"],

    /**
     * Used by Cypress to automatically detect the correct Framework Definition
     * based on the user's project.
     * In this example, if a module matching `atomicoDep`
     * is found in the user's project,
     * Solid.js will automatically be selected when configuring Component Testing.
     */
    detectors: [atomicoDep],

    /**
     * Supply a set of dependencies a project should have to use this Framework Definition. The user will be prompted to install them if they are not found.
     * Optionally, supply different dependencies based on the chosen bundler.
     */
    dependencies: (bundler) => {
        return [atomicoDep, atomicoVitePlugin];
    },

    /**
     * An SVG icon. Shown when configuring Component Testing for the first time.
     * Optional, but good for branding your Framework Definition.
     */
    icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 48 48"><g transform="translate(-9.193 109.917)"><rect width="48" height="48" transform="translate(9.193 -109.917)" fill="#fff" opacity="0"/><g transform="translate(17.196 -104.918)"><path d="M79.2-43.173a6.91,6.91,0,0,1-.705.615H72.178c.4-.265.8-.553,1.181-.856h6.068A2.439,2.439,0,0,1,79.2-43.173Zm.84-1.019H74.273c.153-.142.308-.29.458-.44s.271-.275.4-.416h5.4a6.868,6.868,0,0,1-.491.856Zm-2.859,2.418a6.8,6.8,0,0,1-2.825.608,6.8,6.8,0,0,1-2.826-.608h5.651Zm3.668-4.056h-5.04c.227-.276.447-.563.654-.856h4.614a6.824,6.824,0,0,1-.227.856Zm.336-1.636h-4.2c.175-.278.343-.566.5-.856H81.2c0,.1.006.2.007.3,0,.184-.008.37-.022.552ZM81.127-49.1H77.889c.132-.279.259-.567.376-.856h2.669a6.838,6.838,0,0,1,.193.857Zm-.476-1.637H78.557c.1-.281.187-.568.269-.856H80.2a6.86,6.86,0,0,1,.446.855Zm-1-1.639h-.622c.041-.18.081-.364.116-.548a6.919,6.919,0,0,1,.5.548Z" transform="translate(-48.142 75.758)"/><path d="M41.2-71.247a15.353,15.353,0,0,1-2.393,1.952,15.25,15.25,0,0,1-16.759,0A15.388,15.388,0,0,1,17.7-73.641a15.253,15.253,0,0,1,0-16.757,15.367,15.367,0,0,1,4.844-4.661,15.185,15.185,0,0,1,6.68-2.145,15.338,15.338,0,0,1,3.492.126A9.639,9.639,0,0,0,34.65-86.246a9.639,9.639,0,0,0,10.832,1.934A15.218,15.218,0,0,1,41.2-71.247Z" transform="translate(-15.196 101.68)"/><path d="M69.243-91.312l5-5a8.606,8.606,0,0,1-5,5Zm-1.852.468a8.633,8.633,0,0,1-1.586.07l8.979-8.979a8.633,8.633,0,0,1-.07,1.586Zm-2.819-.078a8.573,8.573,0,0,1-1.192-.324l10.933-10.933a8.565,8.565,0,0,1,.324,1.192ZM62.4-91.653a8.5,8.5,0,0,1-.96-.555l11.9-11.9a8.518,8.518,0,0,1,.555.96Zm-1.744-1.154q-.261-.222-.508-.469-.136-.136-.264-.275l12.118-12.118q.139.128.275.263.247.247.469.508Zm-1.393-1.5a8.526,8.526,0,0,1-.586-.929l11.636-11.635a8.529,8.529,0,0,1,.929.586Zm-1.027-1.871a8.552,8.552,0,0,1-.364-1.151L68.223-107.68a8.542,8.542,0,0,1,1.152.363ZM57.68-98.52a8.626,8.626,0,0,1-.012-1.5l7.87-7.87a8.651,8.651,0,0,1,1.5.012Zm.293-3.191a8.6,8.6,0,0,1,5.874-5.874Z" transform="translate(-40.017 107.918)"/></g></g></svg>
  `,
});
