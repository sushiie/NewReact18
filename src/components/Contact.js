const Contact = () => {
  return (
    <div className="w-6/12 text-center m-auto">
      <h1 className="text-3xl font-bold m-4">Contact Us Page</h1>
      <input type="text" placeholder="name" className="p-4 m-2 border border-gray-300"/>
      <input type="text" placeholder="email" className="p-4 m-2 border border-gray-300"/>
      <button className="p-4 m-2 border border-gray-300 bg-slate-300 rounded-lg"> Submit </button>
    </div>
  );
};

export default Contact;
