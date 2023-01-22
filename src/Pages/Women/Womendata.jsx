import React from "react";

import WomenList from "./WomenList";
import Loader from "../Mens/Loader";

const Womendata = (props) => {

  const [load, setLoad] = React.useState(false);
  const [data, setData] = React.useState([]);

  

  const { sort, type } = props;

  React.useEffect(() => {
    fetchData(sort, type);
  }, [sort, type]);

  const fetchData = async (sort, type) => {
    setLoad(true);
    let url = `http://localhost:8000/women`;
    if (sort) {
      url = `http://localhost:8000/women?_sort=price&_order=${sort}`;
    }
    if (type) {
      url = `http://localhost:8000/women?type=${type}`;
    }
   
    if(type&&sort){
        url=`http://localhost:8000/women?_sort=price&_order=${sort}&type=${type}`
    }
    try {
      let res = await fetch(url);

      res = await res.json();

      setData(res);
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(sort, type);
  return (
    <div>{load ? <Loader></Loader> : <WomenList products={data} />}</div>
  );
};

export default Womendata;