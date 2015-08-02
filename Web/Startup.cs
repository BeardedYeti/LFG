using LFG;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(Startup))]

namespace LFG
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {

        }
    }
}
