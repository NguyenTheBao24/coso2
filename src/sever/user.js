import axios from 'axios';




export const apiUser = async () => {
    try {
      const response = await axios.get(
        "http://20.212.111.173:5000/khachhangtiemnang"
        
      );
    //   console.log(response)
      return response.data;
    } catch (error) {
      
      throw error;
    }
  };


  export  const deleteCustomer = async (customerId) => {
    const url = `http://20.212.111.173:5000/khachhangtiemnang/${customerId}`;
  
    try {
      const response = await axios.delete(url);
      console.log('Dữ liệu khách hàng đã được xoá:', response.data);
      // Add any logic you want after deleting the customer data
    } catch (error) {
      console.error('Đã xảy ra lỗi khi xoá dữ liệu khách hàng:', error);
      // Add any error handling logic here
    }
  };
  