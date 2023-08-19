import { getContainerEl, setupHooks } from "@cypress/mount-utils";
import { createElement, render } from "atomico";

/**
 * @type {()=>void}
 */
let dispose;

function cleanup() {
    dispose?.();
}
/**
 *
 * @param {*} component
 * @param {{log?:boolean}} options
 * @returns
 */
export function mount(component, options = {}) {
    // rendering/mounting function.
    const root = getContainerEl();

    // Render component with your library's relevant
    render(
        createElement("host", {
            children: component,
        }),
        root
    );

    dispose = () => render(createElement("host"), root);

    return cy.wait(0, { log: false }).then(() => {
        if (options.log !== false) {
            Cypress.log({
                name: "mount",
                message: "Mounted component",
            });
        }
    });
}

setupHooks(cleanup);
