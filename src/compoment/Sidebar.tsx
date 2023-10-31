// SideBar.js
"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faShapes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../stype/sidebar.module.css";
import Link from "next/link";

const SideBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
    setShowSearchBar(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={styles.sidebar}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {isHovered ? (
        <>
          <div className={styles.side}>
            <ul className={styles.ul}>
              
              <li>
                <Link href="/user" className={styles.icon}>
                  <FontAwesomeIcon icon={faUser} />
                  Khách hàng tiềm năng
                </Link>
              </li>
              <li>
                <Link href="/supply" className={styles.icon}>
                  <FontAwesomeIcon icon={faShapes} />
                  Nguồn cung khách hàng
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <div className={styles.side}>
          <ul className={styles.ul}>
            
            <li>
              <FontAwesomeIcon icon={faUser} />
            </li>
            <li>
              <FontAwesomeIcon icon={faShapes} />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideBar;
