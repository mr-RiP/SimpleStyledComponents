using JavaScriptEngineSwitcher.Core;
using JavaScriptEngineSwitcher.V8;
using React;
using React.TinyIoC;
using React.Web.TinyIoC;
using System;
using System.Web;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(WebApp.ReactConfig), "Configure")]

namespace WebApp
{
	public static class ReactConfig
	{
		public static void Configure()
		{
			// If you want to use server-side rendering of React components, 
			// add all the necessary JavaScript files here. This includes 
			// your components as well as all of their dependencies.
			// See http://reactjs.net/ for more information. Example:
			//ReactSiteConfiguration.Configuration
			//	.AddScript("~/Scripts/First.jsx")
			//	.AddScript("~/Scripts/Second.jsx");

			// If you use an external build too (for example, Babel, Webpack,
			// Browserify or Gulp), you can improve performance by disabling 
			// ReactJS.NET's version of Babel and loading the pre-transpiled 
			// scripts. Example:
			//ReactSiteConfiguration.Configuration
			//	.SetLoadBabel(false)
			//	.AddScriptWithoutTransform("~/Scripts/bundle.server.js")

			ConfigureJsEngine(JsEngineSwitcher.Current);
			ReactSiteConfiguration.Configuration
				.AddScriptWithoutTransform("~/Client/Dist/vendorBundle.js")
				.AddScriptWithoutTransform("~/Client/Dist/reactVendorBundle.js")
				.AddScriptWithoutTransform("~/Client/Dist/reactExposerBundle.js")
				.AddScriptWithoutTransform("~/App_Start/ReactJs.Net-specific-hack.js")
				.AddScriptWithoutTransform("~/Client/Dist/homeBundle.js")
				.SetLoadReact(false)
				.SetLoadBabel(false);

			// Initializer.Initialize(AsPerRequestSingleton);
		}

		private static void ConfigureJsEngine(IJsEngineSwitcher instance)
		{
			instance.EngineFactories.Clear();
			instance.EngineFactories.AddV8();
			instance.DefaultEngineName = V8JsEngine.EngineName;
		}

		private static TinyIoCContainer.RegisterOptions AsPerRequestSingleton(TinyIoCContainer.RegisterOptions registerOptions)
		{
			return TinyIoCContainer.RegisterOptions.ToCustomLifetimeManager(
				registerOptions,
				new HttpContextLifetimeProvider(),
				"per request singleton");
		}
	}
}