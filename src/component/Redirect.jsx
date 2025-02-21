import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { databases } from "../lib/appwrite";
import { Query } from "appwrite";
const Redirect = () => {
  const navigate = useNavigate();
  let { shortID } = useParams();

  useEffect(() => {
    const getURL = async () => {
      const response = await databases.listDocuments(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_COLLECTION_ID,
        [Query.equal("shortURL", shortID)]
      );

      const originalURL = response.documents[0]?.originalURL || undefined;
      if (originalURL == undefined) {
        navigate("/");
      } else {
        window.location.replace(originalURL);
      }
    };
    getURL();
  }, [shortID]);

  return (
    <div>
      <h2 className="p-2">Redirecting...</h2>
    </div>
  );
};

export default Redirect;
