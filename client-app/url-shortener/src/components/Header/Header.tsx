import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className="bg-white overflow-x-hidden">
      <div className="container p-2 mx-auto">
        <nav className="py-3 flex justify-between items-center">
          <div className="text-base font-bold text-black uppercase"><a href="">Scissors</a></div>
          <ul className="inline-block">
            <li className="inline-block text-sm font-medium cursor-pointer hover:underline hover:decoration-solid hover:decoration-orange-600 hover:decoration-2"><a href="">Login</a></li>
            <li className="inline-block ml-4 text-sm font-medium cursor-pointer hover:underline hover:decoration-solid hover:decoration-orange-600 hover:decoration-2"><a href="">Sign up</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
