// Exposing required modules or classes to ReactJS.NET
// See ~/Client/ReactApps/webpack.config.js and ~/Client/ReactApps/ReactExposers/* for more details.

(new Function("return this")()).setTimeout = function () { };
(new Function("return this")()).React = (new Function("return this")()).React.default;
(new Function("return this")()).ReactDOM = (new Function("return this")()).ReactDOM.default;
(new Function("return this")()).ReactDOMServer = (new Function("return this")()).ReactDOMServer.default;
(new Function("return this")()).Styled = (new Function("return this")()).Styled;