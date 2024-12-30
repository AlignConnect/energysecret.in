import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "./statemanage/context";
import Script from "next/script";
import dynamic from "next/dynamic";

const Wrapper = dynamic(() => import("@/app/wrapper/page"));

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Horse Fire Tablet",
  description: "Horse Fire Tablet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href={"/main/hft_home/faviconhft.webp"} />

      <input type="hidden" value="arayurveda.shop" id="sellerDomain" />

      <script
        src="https://fastrr-boost-ui.pickrr.com/assets/js/channels/shopify.js"
        defer
      ></script>

      <link
        rel="stylesheet"
        href="https://fastrr-boost-ui.pickrr.com/assets/styles/shopify.css"
      ></link>

      <Script strategy="lazyOnload">
        {`
                 !function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              }(window, document, "clarity", "script", "m9z74qljus");
                `}
      </Script>

      <Script strategy="lazyOnload">
        {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "m9z74qljus");
                `}
      </Script>

      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-KW3E2VPYS2`}
      />
      <Script strategy="lazyOnload">
        {`
                   window.dataLayer = window.dataLayer || [];
                   function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                 
                   gtag('config', 'G-KW3E2VPYS2');
                `}
      </Script>

      {/* meta pixel facebook tag start  */}
      <Script strategy="lazyOnload">
        {`
         !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '990087449249435');
          fbq('track', 'PageView');
        `}
      </Script>

      <Script
        strategy="lazyOnload"
        src={`https://www.facebook.com/tr?id=990087449249435&ev=PageView&noscript=1`}
      />
      {/* meta pixel facebook tag end  */}

      {/* Mgid Sensor  */}
      <Script strategy="lazyOnload">
        {`
         (function() { var d = document, w = window; w.MgSensorData = w.MgSensorData || []; w.MgSensorData.push({ cid:847503, project: "a.mgid.com" }); var l = "a.mgid.com"; var n = d.getElementsByTagName("script")[0]; var s = d.createElement("script"); s.type = "text/javascript"; s.async = true; var dt = !Date.now?new Date().valueOf():Date.now(); s.src = "https://" + l + "/mgsensor.js?d=" + dt; n.parentNode.insertBefore(s, n); })();
        `}
      </Script>
      {/* Mgid Sensor  */}

      <body className={inter.className}>
        <GlobalContextProvider>
          <Wrapper>{children}</Wrapper>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
