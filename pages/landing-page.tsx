// import dynamic from "next/dynamic";

import dynamic from "next/dynamic";

const LandingPageSection1 = dynamic(
  () => import("../app/components/pages/landing_page/Section1"),
  { ssr: false }
);

const LandingPageSection2 = dynamic(
  () => import("../app/components/pages/landing_page/Section2"),
  { ssr: false }
);

const LandingPage = () => {
  return (
    <div>
      <LandingPageSection1 />
      <LandingPageSection2 />
    </div>
  );
};

export default LandingPage;

// export default function Home() {
//   return (
//     <div>
//       <LandingPageSection1 />
//       <LandingPageSection2 />
//     </div>
//   );
// }
