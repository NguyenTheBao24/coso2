"use client";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import styles from "@/stype/supply2.module.css";
import Module from "@/compoment/moduls";
import ModuleNew from "@/compoment/modulsNew";
import SideBar from "@/compoment/Sidebar";
const Supply = () => (
  <>
    <SideBar></SideBar>
    <div className={styles.center}>
      <div className={styles.title}>
        <h1>Nguồn Cung Khách Hàng </h1>

        <ModuleNew />
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
              <Module />
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

export default Supply;
