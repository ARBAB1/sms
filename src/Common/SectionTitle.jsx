const SectionTitle = ({
    title,
    paragraph,
    width = "100%",
    center,
    mb = "100px",
  }) => {
    return (
      <>
        <div
          className=" flex-col w-screen bg-slate-200"
          style={{ width:"100%",display:'flex',alignItems:'center',justifyContent:'center', marginBottom: mb }}
        >
         <h2 style={{fontSize:40,fontWeight:'bold'}}>{title}</h2>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            {paragraph}
          </p>
        </div>
      </>
    );
  };
  
  export default SectionTitle;
  