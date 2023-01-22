import React from "react";

import ProductList from "./ProductList";
import Loader from "./Loader";

const Mensdata = (props) => {
  const [load, setLoad] = React.useState(false);
  const [data, setData] = React.useState([]);

  const [current, setCurrent] = React.useState(1);
  const [totalPage, settotalPage] = React.useState(0);

  const { sort, type } = props;

  React.useEffect(() => {
    fetchData(sort, type);
  }, [sort, type]);

  const fetchData = async (sort, type) => {
    setLoad(true);
    let url=`https://misty-tie-boa.cyclic.app/men` ;
    if (sort) {
      url = `https://misty-tie-boa.cyclic.app/men?_sort=price&_order=${sort}`;
    }
   if (type) {
      url = `https://misty-tie-boa.cyclic.app/men?type=${type}`;
    }
    if(type&&sort){
      url=`https://misty-tie-boa.cyclic.app/men?_sort=price&_order=${sort}&type=${type}`
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
    <div>{load ? <Loader></Loader> : <ProductList products={data} />}</div>
  );
};

export default Mensdata;
