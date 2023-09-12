import "./styles/global.css";
import { Navigate, Route, Routes } from "react-router-dom";
import SplashScreen from "./pages/app/SplashScreen";
import ChooseLanguage from "./pages/app/ChooseLanguage";
import Onboarding from "./pages/app/Onboarding";
import ChooseAccount from "./pages/app/ChooseAccount";
import Signup from "./pages/app/Signup";
import Login from "./pages/app/Login";
import VerifyNewAccount from "./pages/app/VerifyNewAccount";
import VerifyAccount from "./pages/app/VerifyAccount";
import ChangePassword from "./pages/app/ChangePassword";
import ForgotPassword from "./pages/app/ForgotPassword";
import Home from "./pages/app/Home";
{
  /* Advisory */
}
import Advisory from "./pages/app/Advisory";
import RegisterFarm from "./pages/app/RegisterFarm";
import Community from "./pages/app/Community";
import Messages from "./pages/app/Messages";
import ConnectionsProfile from "./pages/app/ConnectionsProfile";
// import { FC, ReactNode } from "react";
import Farms from "./pages/app/Farms";
import Schedule from "./pages/app/Schedule";
import BookConsultation from "./pages/app/BookConsultation";
import PlotAdvisory from "./pages/app/PlotAdvisory";
import AdvisoryPlan from "./pages/app/AdvisoryPlan";
import Payment from "./pages/app/Payment";
import QRCode from "./pages/app/QRCode";
import QRinfo from "./pages/app/QRinfo";
import ConsultationDate from "./pages/app/ConsultationDate";
import AdvisoryReview from "./pages/app/AdvisoryReview";
import Successful from "./pages/app/Successful";
{
  /*CropSchedule */
}
import CropSchedule from "./pages/app/CropSchedule";
import MYFarms from "./pages/app/MyPlots";
import Plot from "./pages/app/Plot";
import PlotSchedule from "./pages/app/PlotSchedule";
import Irrigation from "./pages/app/Irrigation";
import TermsOfService from "./pages/app/TermsOfService";
import Notifications from "./pages/app/Notifications";
import CommunityProfile from "./pages/app/CommunityProfile";
import CommunityProfileBasic from "./pages/app/CommunityProfileBasic";
import UserSubscriptions from "./pages/app/UserSubscriptions";
import PaymentValidation from "./pages/app/PaymentValidation";
import CreatePost from "./pages/app/CreatePost";
import ManageNetwork from "./pages/app/ManageNetwork";
{
  /* Community */
}
export const URL_PREFIX = "app";
const App: any = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/app" />} />
      <Route path={`/${URL_PREFIX}/`} Component={Home} />
      <Route path={`/${URL_PREFIX}/splashScreen`} Component={SplashScreen} />

      { /*Login */ }
      <Route path={`/${URL_PREFIX}/chooseLanguage`} Component={ChooseLanguage} />
      <Route path={`/${URL_PREFIX}/onboarding`} Component={Onboarding} />
      <Route path={`/${URL_PREFIX}/chooseAccount`} Component={ChooseAccount} />
      <Route path={`/${URL_PREFIX}/signup`} Component={Signup} />
      <Route path={`/${URL_PREFIX}/verifyNewAccount`} Component={VerifyNewAccount} />
      <Route path={`/${URL_PREFIX}/login`} Component={Login} />
      <Route path={`/${URL_PREFIX}/verifyAccount`} Component={VerifyAccount} />
      <Route path={`/${URL_PREFIX}/changePassword`} Component={ChangePassword} />
      <Route path={`/${URL_PREFIX}/forgotPassword`} Component={ForgotPassword} />

      {/* Advisory */}
      <Route  path={`/${URL_PREFIX}/advisory`} Component={Advisory} />
      <Route  path={`/${URL_PREFIX}/advisory/registerFarm`}  Component={RegisterFarm}/>
      <Route  path={`/${URL_PREFIX}/advisory/farms`}  Component={Farms}/>
      <Route  path={`/${URL_PREFIX}/advisory/schedule`}  Component={Schedule}/>
      <Route  path={`/${URL_PREFIX}/advisory/bookConsultation`}  Component={BookConsultation}/>
      <Route  path={`/${URL_PREFIX}/advisory/PlotAdvisory`}  Component={PlotAdvisory}/>
      <Route  path={`/${URL_PREFIX}/advisory/advisoryPlan`}  Component={AdvisoryPlan}/>
      <Route  path={`/${URL_PREFIX}/advisory/payment`}  Component={Payment}/>
      <Route  path={`/${URL_PREFIX}/advisory/payment/qrcode`}  Component={QRCode}/>
      <Route  path={`/${URL_PREFIX}/advisory/payment/qrinfo`}  Component={QRinfo}/>
      <Route  path={`/${URL_PREFIX}/advisory/payment/consultationdate`}  Component={ConsultationDate}/>
      <Route  path={`/${URL_PREFIX}/advisory/payment/advisoryreview`}  Component={AdvisoryReview}/>
      <Route  path={`/${URL_PREFIX}/advisory/payment/successful`}  Component={Successful}/>

      {/* CropSchedule */}
      <Route  path={`/${URL_PREFIX}/cropschedule`}  Component={CropSchedule}/>
      <Route  path={`/${URL_PREFIX}/myplots`}  Component={MYFarms}/>
      <Route  path={`/${URL_PREFIX}/plotdetails`}  Component={Plot}/>
      <Route  path={`/${URL_PREFIX}/plotSchedule`}  Component={PlotSchedule}/>
      <Route  path={`/${URL_PREFIX}/irrigation`}  Component={Irrigation}/>

      {/* Community */}
      <Route path={`/${URL_PREFIX}/community`} Component={Community} />
      <Route  path={`/${URL_PREFIX}/community/messages`}  Component={Messages}/>
      <Route  path={`/${URL_PREFIX}/community/connectionProfile`}  Component={ConnectionsProfile}/>
      <Route  path={`/${URL_PREFIX}/community/createPost`}  Component={CreatePost}/>
      <Route  path={`/${URL_PREFIX}/community/terms`}  Component={TermsOfService}/>
      <Route  path={`/${URL_PREFIX}/community/notifications`}  Component={Notifications}/>

      {/* User */}
      <Route path={`/${URL_PREFIX}/community/UserCommunityProfile`} Component={CommunityProfile} />
      <Route path={`/${URL_PREFIX}/community/CommunityProfile`} Component={CommunityProfileBasic}/>
      <Route  path={`/${URL_PREFIX}/community/UserSubscriptions`}  Component={UserSubscriptions}/>
      <Route  path={`/${URL_PREFIX}/community/paymentValidation`}  Component={PaymentValidation}/>
      <Route  path={`/${URL_PREFIX}/community/managenetwork`}  Component={ManageNetwork}/>

    </Routes>
  );
};

export default App;
