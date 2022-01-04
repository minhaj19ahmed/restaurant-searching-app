import { useEffect, useState } from "react";
import Yelp from "../API/Yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
  
    const SearchApi = async (searchTerm) => {
      try {
        const response = await Yelp.get("/search", {
          params: {
            limit: 50,
            term: searchTerm,
            location: "san jose",
          },
        });
  
        setResults(response.data.businesses);
      } catch (err) {
        setErrorMessage("Something went wrong");
      }
    };
  
   useEffect(() => {
   SearchApi('biriyani');
   },  []);
   return [SearchApi, results, errorMessage];
}