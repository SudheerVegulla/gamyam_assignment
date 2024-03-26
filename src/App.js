import { useEffect, useRef, useState } from "react";
import "./App.css";
// import SiteCard from "./SiteCard";
import SiteCardContainer from "./SiteCardContainer";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef(null);

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  useEffect(() => {
    if (loading) return;
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        getData();
      }
    });

    if (observer.current) {
      observer.current.observe(document.querySelector(".scroll-trigger"));
    }
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [loading]);

  // const getData = async () => {
  //   const response = await fetch(
  //     "https://prod-be.1acre.in/lands/?ordering=-updated_at&page=1&page_size=10"
  //   );
  //   const result = await response.json().then((output) => {
  //     setData(output.results);
  //     console.log(data && data[0]);
  //   });
  //   // console.log(result);
  // };

  const getData = async () => {
    setLoading(true);
    await fetch(
      `https://prod-be.1acre.in/lands/?ordering=-updated_at&page=${page}&page_size=10`
    )
      .then((response) => response.json())
      .then((output) => {
        setData([...data, ...output.results]);
        setPage((prevPage) => prevPage + 1);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
    // setLoading(true);
    // const response = await fetch(
    //   "https://prod-be.1acre.in/lands/?ordering=-updated_at&page=${page}&page_size=10"
    // );
    // const result = await response
    //   .json()
    //   .then((output) => setData(output.results));
    // console.log(result);
    // setData((prevData) => [...prevData, ...result]);
    // setPage((prevPage) => prevPage + 1);
    // setLoading(false);
  };
  // const images = [
  //   "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg",
  //   "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg",
  //   "https://th.bing.com/th/id/R.7383028831604862ec47fefee3e8f43f?rik=JvqjDCfPocchLg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fimages-of-nature-4.jpg&ehk=%2b1REJDS0cEPD0z2IP%2fddCyP9IgFz6xVpp8fyQr78SJ0%3d&risl=&pid=ImgRaw&r=0",
  //   // Add more image URLs as needed
  // ];

  return (
    <div
      style={{
        borderRadius: "8px",
        marginTop: "8px",
        width: "80%",
        paddingLeft: "10%",
        paddingRight: "10%",
      }}
    >
      {data && data.length > 0 && (
        // data.map((item) => (
        //   <SiteCard images={item?.land_media} cardData={item} />
        // ))
        <SiteCardContainer data={data} />
      )}
      {loading && <div>Loading...</div>}
      <div className="scroll-trigger" style={{ height: "20px" }}></div>
    </div>
  );
}

export default App;
