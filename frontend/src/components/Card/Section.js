const Section = (prop) => {
  return (
    <div className="flex flex-col justify-center items-center w-full sm:w-[60%] space-y-2">
      <h1 className={prop.styleTitle}>{prop.data.title}</h1>
      <p className={prop.styleDescription}>{prop.data.description}</p>
      <button className={prop.styleBtn}>{prop.data.text}</button>
    </div>
  );
};

export default Section;
