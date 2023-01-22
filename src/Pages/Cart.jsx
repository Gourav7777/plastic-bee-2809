import axios from "axios";
import "./Cart.css";
import React from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import { useNavigate } from "react-router";
import { useToast } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  Input,
  Flex,
} from "@chakra-ui/react";
const MyCart = () => {
  const toast = useToast();
  const mynav = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, Setdata] = React.useState([]);
  const [isdata, Setisdata] = React.useState(true);
  React.useEffect(() => {
    fetchData();
  }, [data]);

  const delData = async (id) => {
    let res = await axios({
      method: "delete",
      url: `https://misty-tie-boa.cyclic.app/shoppingCart/${id}`,
    });
  };

  //  const Open=(i)=>{
  //    onOpen()
  //    delData()
  //  }

  const Checkout = (id) => {
    mynav("/");
    toast({
      title: "Payment Successfull ",
      description: "Redirecting to Home page",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    onClose();

    delData(id);
  };

  const fetchData = async () => {
    try {
      let res = await axios({
        method: "get",
        url: `https://misty-tie-boa.cyclic.app/shoppingCart`,
      });

      Setdata(res.data);
      Setisdata(false);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);

  if (data.length === 0) {
    return (
      <h1 style={{ fontSize: "26px", fontWeight: "bold" }}>
        Your Cart is Empty....
      </h1>
    );
  }

  return (
    <>
      <div>
        {/* <button  style={{padding:"5px",color:"white",backgroundColor:"#000",cursor:"pointer",fontSize:"18px"}}    onClick={onOpen} > Procced to Buy </button> */}

        {
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "20px",
              padding: "10px",
              justifyContent: "center",
            }}
          >
            {data?.map((el) => {
              return (
                <>
                  <div
                    style={{
                      height: "470px",
                      border: "0px solid black",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      fontWeight: "bold",
                      fontSize: "16px",
                      padding: "3px",
                      boxShadow:
                        "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)",
                      lineHeight: "30px",
                    }}
                  >
                    <img
                      style={{ width: "200px" }}
                      src={el.img}
                      alt={el.color}
                    />
                    <h1>{el.color}</h1>
                    <h3>{el.desc}</h3>
                    <h3>{el.price}</h3>

                    <div style={{ display: "flex", gap: "20px" }}>
                      <button
                        style={{
                          padding: "5px",
                          color: "white",
                          backgroundColor: "#000",
                          cursor: "pointer",
                          fontSize: "18px",
                        }}
                        onClick={onOpen}
                      >
                        {" "}
                        Procced to Buy{" "}
                      </button>

                      <button
                        style={{
                          padding: "5px",
                          color: "white",
                          backgroundColor: "#000",
                          cursor: "pointer",
                          fontSize: "18px",
                        }}
                        onClick={() => delData(el.id)}
                      >
                        {" "}
                        Delete from Cart{" "}
                      </button>
                    </div>
                  </div>

                  <Modal
                    blockScrollOnMount={false}
                    isOpen={isOpen}
                    onClose={onClose}
                  >
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Modal Title</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <Text fontWeight="bold" mb="1rem">
                          Enter Card Details
                        </Text>

                        <Flex direction={"column"}>
                          <Input placeholder="Enter Name" size="sm" />
                          <Input placeholder="Enter Card Number" size="sm" />

                          <Flex>
                            <Input placeholder="Enter CVV" size="sm" />
                            <Input placeholder="Security Code" size="sm" />
                          </Flex>
                        </Flex>
                      </ModalBody>

                      <ModalFooter>
                        <Button
                          colorScheme="blue"
                          mr={3}
                          onClick={() => Checkout(el.id)}
                        >
                          Submit
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </>
              );
            })}
          </div>
        }
        {/* <button  style={{padding:"5px",color:"white",backgroundColor:"#000",cursor:"pointer",fontSize:"18px"}}    onClick={onOpen} > Procced to Buy </button> */}
      </div>

      {/* <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
<ModalOverlay />
<ModalContent>
  <ModalHeader>Modal Title</ModalHeader>
  <ModalCloseButton />
  <ModalBody>
    <Text fontWeight='bold' mb='1rem'>
      Enter Card Details


    </Text>
   
   <Flex direction={"column"}>
    
   <Input placeholder='Enter Name' size='sm' />
   <Input placeholder='Enter Card Number' size='sm' />
   
   <Flex>
   <Input placeholder='Enter CVV' size='sm' />
   <Input placeholder='Security Code' size='sm' />
   </Flex>
    


   </Flex>


   
  </ModalBody>

  <ModalFooter>
    <Button colorScheme='blue' mr={3} onClick={()=>Checkout()}>
      Submit
    </Button>
    
  </ModalFooter>
</ModalContent>
</Modal>
</> */}
    </>
  );
};

export default MyCart;
