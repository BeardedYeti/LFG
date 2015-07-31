using System.Web.Optimization;
using LFG;

[assembly: WebActivator.PostApplicationStartMethod(
    typeof(DurandalConfig), "PreStart")]

namespace LFG
{
    public static class DurandalConfig
    {
        public static void PreStart()
        {
            // Add your start logic here
            DurandalBundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}