import { useState } from "react";

const App = () => {
  const [originalURL, setOriginalURL] = useState();
  const [shortID, setShortID] = useState();

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
          }}
          action=""
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
            title="shorten"
          >
            Shorten
          </button>
        </form>
        {/* for shortned url */}
        {shortID ? (
          <div className="flex flex-col gap-2">
            <h3>Your Shortned URL</h3>
            <div className="flex gap-2">
              <input
                title="Your Short URL"
                className="h-12 p-2 rounded-md outline-none  text-lg border-2 border-yellow-300  font-semibold"
                type="text"
                readOnly
                value={shortID}
              />
              <button
                className="h-12 p-2 rounded-md outline-none border-2 border-yellow-300 cursor-pointer text-lg font-semibold"
                title="Copy"
              >
                copy
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
