"use client";

import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import styles from "@/stype/supply2.module.css";
import Module from "@/compoment/moduls";
import SideBar from "@/compoment/Sidebar";
import { apisupply, deleteSupply } from "@/sever/suply";
import ModuleNew from "@/compoment/modulsNew";

export default function Home() {
  const [userData, setUserData] = useState<any[]>([]);
  const fetchData = async () => {
    try {
      const data = await apisupply(); // Gọi hàm API từ apiUser
      setUserData(data); // Lưu dữ liệu từ API vào state
    } catch (error) {
      console.error("Đã xảy ra lỗi khi lấy dữ liệu:", error);
    }
  };
  useEffect(() => {
    fetchData(); // Gọi hàm fetchData khi component được render
  }, []);

  const handleUpdate = () => {
    fetchData(); // Đảo ngược giá trị của biến check để kích hoạt useEffect
  };
  console.log(userData);
  const handleDelete = (id: any) => {
    const handleDeleteAsync = async () => {
      try {
        await deleteSupply(id);
        const updatedData = userData.filter((user) => user.ID !== id);
        setUserData(updatedData);
      } catch (error) {
        console.error("Đã xảy ra lỗi khi xoá dữ liệu khách hàng:", error);
        // Xử lý lỗi tại đây (nếu cần)
      }
    };

    return handleDeleteAsync;
  };

  return (
    <>
      <SideBar></SideBar>
      <div className={styles.center}>
        <div className={styles.title}>
          <h1>Nguồn Cung Khách Hàng</h1>
          <ModuleNew onUpdate={handleUpdate}/>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th colSpan={2}>Tên nguồn cung khách hàng </th>
              <th colSpan={2}>Địa Chỉ </th>
              <th>Hành động </th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td colSpan={2}>{user.Ten}</td>
                <td colSpan={2}>{user.DiaChi}</td>
                <td>
                  <Module data={user} onUpdate={handleUpdate} />
                  <Button
                    className={styles.btn_l}
                    variant="danger"
                    onClick={handleDelete(user.ID)}
                  >
                    xoá
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
