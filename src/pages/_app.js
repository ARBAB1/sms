import { Footer, FooterAdmin, Header, HeaderAdmin } from "@/components";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  let path = ""
  useEffect(() => {
    
    const path = localStorage.getItem("token");
    setToken(path);
  }, [])
  const [token, setToken] = useState(path ?? "");
  return (
   
  <>

      {token ? <HeaderAdmin /> : <Header />}
      <Component {...pageProps} />
      {token ? <FooterAdmin /> : <Footer />}
    </>
      
  );
}