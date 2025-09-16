import { BsArrowUp } from "react-icons/bs";


const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className=" text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Spydrooweb.co. All right reserved.
      </p>
      <a
        href="#hero"
        className="p-2 hover bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all "
      >
        <BsArrowUp size={20} />
    
      </a>
    </footer>
  );
};
 export default Footer