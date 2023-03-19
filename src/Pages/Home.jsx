import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import FormField from "../Components/FormField";
import Loader from "../Components/Loader";
import Quality from "../Components/Quality";
import Welcome from "../Components/Welcome";
import RenderCards from "../Components/RenderCards";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://ai-server-six.vercel.app/api/v1/post",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
      }
    } catch (err) {
      Swal.fire(`${err}`, "", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPosts.filter(
          (item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.prompt.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1
          data-aos="fade-right"
          data-aos-delay="300"
          data-a
          className="font-extrabold text-[#FFFFFF] text-[32px]"
        >
          Unlock your inner creator
        </h1>
        <p
          data-aos="fade-right"
          data-aos-delay="400"
          className="mt-2 text-[#666e75] text-[14px] max-w-[500px]"
        >
          Get the inspiration you need with these collections carefully selected
          to boost your project's engagement.
        </p>
      </div>

      <div className="mt-16">
        <FormField
          labelName="Search posts"
          type="text"
          name="text"
          placeholder="Search something..."
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Showing Resuls for{" "}
                <span className="text-[#222328]">{searchText}</span>:
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards
                  data={searchedResults}
                  title="No Search Results Found"
                />
              ) : (
                <RenderCards data={allPosts} title="No Posts Yet" />
              )}
            </div>
          </>
        )}
      </div>

      <Link
        data-aos="zoom-in-up"
        to={"/showcase"}
        className="flex justify-center w-auto text-xl text-white mt-3 bg-slate-800 p-3 rounded-lg"
      >
        See All Photos
      </Link>
      <Quality />
      <Welcome />
    </section>
  );
};

export default Home;
