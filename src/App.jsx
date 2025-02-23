import { useState, useRef } from "react";
import { ID, databases } from "./lib/appwrite.js";
const App = () => {
  let copy = useRef();
  const [originalURL, setOriginalURL] = useState("");
  const [shortID, setShortID] = useState("");
  const [urlSaved, setUrlSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const generateShortID = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for (let i = 0; i < 9; i++) {
      const randomNumber = Math.floor(Math.random() * characters.length);
      id += characters.charAt(randomNumber);
    }
    setShortID(id);
    handleSubmit(id);
  };

  const handleSubmit = async (shortID) => {
    let response = await databases.createDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      import.meta.env.VITE_APPWRITE_COLLECTION_ID,
      ID.unique(),
      {
        originalURL,
        shortURL: shortID,
      }
    );

    setUrlSaved(true);
  };

  const handleCopy = () => {
    copy.current.select();
    navigator.clipboard.writeText(copy.current.value);
  };

  return (
    <div>
      <header className="h-20 p-5 flex items-center justify-center md:block md:h-16 ">
        <h1 className="text-3xl text-center  md:text-left font-serif font-semibold">
          URL Shortner
        </h1>
      </header>

      <main className="flex justify-center items-center flex-col ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            generateShortID();
          }}
          className="h-36 flex items-center justify-center gap-3 p-2"
        >
          <input
            title="Enter Your URL"
            type="url"
            className="h-12 p-2 rounded-md outline-none  text-lg border-2 border-yellow-300 shadow-md shadow-blue-600 font-semibold"
            placeholder="Enter Your URL"
            value={originalURL}
            onChange={(e) => {
              setOriginalURL(e.target.value);
            }}
            required
          />
          <button
            className="h-12 p-2 rounded-md outline-none border-2 border-yellow-300 cursor-pointer shadow-md shadow-pink-600 text-lg font-semibold"
            type="submit"
            title="Shorten"
          >
            Shorten
          </button>
        </form>
        {/* for shortned url */}
        {urlSaved ? (
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-medium">Your Shortned URL</h3>
            <div className="flex gap-2">
              <input
                title="Short URL"
                className="h-12 p-2 rounded-md outline-none  text-lg border-2 border-yellow-300  font-semibold w-80 hover:bg-amber-100 transition-all ease-in hover:shadow-sm hover:shadow-orange-950 "
                type="text"
                readOnly
                value={`https://narendramahara.me/${shortID}`}
                ref={copy}
              />
              <button
                className="h-12 p-2 rounded-md outline-none border-2 border-yellow-300 cursor-pointer text-xl font-semibold hover:bg-amber-100 transition-all ease-in hover:shadow-sm hover:shadow-orange-950  "
                title="Copy"
                onClick={() => {
                  handleCopy();
                  setCopied(true);
                  setTimeout(() => {
                    setCopied(false);
                  }, 3000);
                }}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
};

export default App;
