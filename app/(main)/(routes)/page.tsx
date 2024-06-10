import { BecomeDasher } from "@/components/become-dasher";
import { BecomePartner } from "@/components/beome-partner";
import { DashPassDesirables } from "@/components/dash-pass-desrirables";
import { FindRestaurants } from "@/components/find-restaurants";
import { GetDashPass } from "@/components/get-dash-pass";
import { Hero } from "@/components/hero/hero";
import { Services } from "@/components/services";
import { ShopGroceries } from "@/components/shop-groceries";
import { ShopNow } from "@/components/shop-now";
import { UnlockDashers } from "@/components/unlock-dashers";


export default function Home() {
  return (
   <main className="w-full h-full flex-col items-center gap-y-10">
      <Hero />
      <BecomeDasher />
      <FindRestaurants />
      <GetDashPass />
      <ShopGroceries />
      <ShopNow />
      <DashPassDesirables />
      <UnlockDashers />
      <BecomePartner />
      <Services />
   </main>
  );
}
