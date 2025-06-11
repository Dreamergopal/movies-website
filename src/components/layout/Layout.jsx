import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "./Loading";

function Layout() {

  const navigation = useNavigation()
  console.log(navigation)
 if(navigation.state === "loading") {
  return (<Loading />)
 }

  return (
    <>
      <Header />
      <Outlet />   {/* -- to render children elements it is required -- */}
      <Footer />
    </>
  );
}

export default Layout;


