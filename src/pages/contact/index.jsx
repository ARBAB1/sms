
import { Breadcrumb } from "@/Common";
import Contact from "@/components/Contact";


export const metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Feel Free to contact 24/7 available for your query"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
