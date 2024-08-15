import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className="bg-slate-900 text-white text-base text-center py-5">Copyright &#169; URLShortner | <a href="">Bukunmi</a></div>
  );
};

export default Footer;