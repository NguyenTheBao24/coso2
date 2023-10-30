"use client";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import styles from "@/stype/supply2.module.css";
import ModuleUse from "@/compoment/modulsUse";
import SideBar from "@/compoment/Sidebar";
export default function Home() {
  return (
    <>
      <SideBar></SideBar>
      <div className={styles.center}>
        <div className={styles.title}>
          <h1>Khách Hàng Tiềm Năng</h1>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th colSpan={2}>Tên nguồn cung khách hàng </th>
              <th>Hành động </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td colSpan={2}>Mark</td>
              <td>
                <ModuleUse />
                <Button className={styles.btn_l} variant="danger">
                  xoá
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
