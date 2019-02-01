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
			ConfigureJsEngine(JsEngineSwitcher.Current);
			ReactSiteConfiguration.Configuration
				// node_modules
				.AddScriptWithoutTransform("~/Client/Dist/vendorBundle.js")
				.AddScriptWithoutTransform("~/Client/Dist/reactVendorBundle.js")
				// exposers
				.AddScriptWithoutTransform("~/Client/Dist/reactExposerBundle.js")
				.AddScriptWithoutTransform("~/App_Start/ReactJs.Net-specific-hack.js")
				// home page
				.AddScriptWithoutTransform("~/Client/Dist/homeBundle.js")
				// already done with webpack
				.SetLoadReact(false)
				.SetLoadBabel(false);
		}

		private static void ConfigureJsEngine(IJsEngineSwitcher instance)
		{
			instance.EngineFactories.Clear();
			instance.EngineFactories.AddV8();
			instance.DefaultEngineName = V8JsEngine.EngineName;
		}
	}
}