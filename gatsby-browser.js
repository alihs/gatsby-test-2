/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
export const onClientEntry = () => {
    window.onload = () => {
        (function() {
            var s = document.createElement('script');
            s.src = 'https://cdn-prod.securiti.ai/consent/cookie-consent-sdk.js';
            s.setAttribute('data-tenant-uuid', 'ac148030-769c-49c3-95d9-312b84bb140d');
            s.setAttribute('data-domain-uuid', '552e3395-4ef0-43a2-aa73-5b88837093d7');
            s.setAttribute('data-backend-url', 'https://app.securiti.ai');
            s.defer = true;
            var parent_node = document.head || document.body;
            parent_node.appendChild(s);
            s.addEventListener('load', function() {
                window.initCmp();
            });
        })()
    }
}