import React, { useRef, useState } from "react";
import { Button, Input, Space, Table, Pagination } from "antd";
import styles from "./home.module.css";
import SideBar from "../../components/module/sidebar";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import dataJson from "../../data.json";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "No",
      dataIndex: "no",
      width: "10%",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.no - b.no,
      responsive: ["lg"],
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "50%",
      filters: [
        {
          text: "Pensil",
          value: "Pensil",
        },
        {
          text: "Pulpen",
          value: "pulpen",
        },
      ],
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      defaultSortOrder: "descend",
      sorter: (a, b) => a.name.length - b.name.length,
      key: "name",
      ...getColumnSearchProps("name"),
      responsive: ["lg"],
    },
    {
      title: "Price",
      dataIndex: "price",
      width: "20%",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Qty",
      dataIndex: "qty",
      width: "10%",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.qty - b.qty,
    },
    {
      title: "Category",
      dataIndex: "categ",
      width: "30%",
      filters: [
        {
          text: "Alat Sekolah",
          value: "Alat Sekolah",
        },
        {
          text: "Pulpen",
          value: "pulpen",
        },
      ],
      onFilter: (value, record) => record.categ.indexOf(value) === 0,
      defaultSortOrder: "descend",
      // sorter: (a, b) => a.name.length - b.name.length,
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div className={styles.pageHome}>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.content}>
        {/* <div>Products List</div> */}
        <div className={styles.table}>
          <Table
            dataSource={dataJson}
            columns={columns}
            pagination={{
              position: "bottomRight",
            }}
            bordered
            title={() => "Products List"}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
