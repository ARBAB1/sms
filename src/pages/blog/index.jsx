import { Breadcrumb, SectionTitle } from "@/Common";
import SingleBlog from "@/components/Blog/SingleBlog";

import { blogData } from "@/constant";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
      <Breadcrumb
      pageName="Blog"
      description="A leading Payment Aggregator Company In Pakistan, operating since 2021."
    />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
        <SingleBlog blog={blog}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
