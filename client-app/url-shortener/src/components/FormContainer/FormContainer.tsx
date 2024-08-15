import * as React from "react";
import axios from "axios";
import { serverUrl } from "../../helpers/Constants";

interface IFormContainerProps {
  updateReloadState: () => void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
  const { updateReloadState } = props;
  const [fullUrl, setFullUrl] = React.useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${serverUrl}/shorturl`, {
        fullUrl: fullUrl,
      });
      setFullUrl("");
      updateReloadState();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto py-8">
      <div className="bg-white my-6">
        <h1 className="text-black text-3xl text-center font-medium pb-3">
          Shorten links without limitations super fast!
        </h1>
        <p className="text-black text-center text-sm pb-2 font-normal">
          The simplest URL Shortener you've been looking for!
        </p>
        <p className="text-black text-center text-sm pb-2 font-normal">
          Enter your link now to shorten it
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-gray-900 text-sm">
                link /
              </div>
              <input
                type="text"
                placeholder="Type or Paste a link (url)"
                required
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300  bg-white focus:ring-orange-600 focus:border-orange-600"
                value={fullUrl}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFullUrl(e.target.value)
                }
              />
              <button
                type="submit"
                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-orange-600 border border-orange-600"
              >
                Shorten URL
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormContainer;
