import React, { useRef, useState } from "react";
import { Button, Input, Space, Table, Modal } from "antd";
import styles from "./home.module.css";
import SideBar from "../../components/module/sidebar";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import dataJson from "../../data.json";
import "antd/dist/antd.css";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataDetail, setDataDetail] = useState({
    key: "",
    name: "",
    price: 0,
    no: 0,
    qty: 0,
    categ: "",
  });

  const showModal = (record) => {
    setIsModalVisible(true);
    setDataDetail(record);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
      width: "5%",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.no - b.no,
      responsive: ["lg"],
      align: "center",
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "30%",
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
      align: "center",
      width: "25%",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Qty",
      dataIndex: "qty",
      width: "20%",
      align: "center",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.qty - b.qty,
    },
    {
      title: "Category",
      dataIndex: "categ",
      width: "30%",
      align: "center",
      filters: [
        {
          text: "Alat Sekolah",
          value: "Alat Sekolah",
        },
        {
          text: "Elektronik",
          value: "Elektronik",
        },
        {
          text: "Meubel",
          value: "Meubel",
        },
      ],
      onFilter: (value, record) => record.categ.indexOf(value) === 0,
      defaultSortOrder: "descend",
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  console.log(dataJson[0]);
  return (
    <div className={styles.pageHome}>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.content}>
        <div className={styles.table}>
          <Table
            dataSource={dataJson}
            columns={columns}
            bordered
            onChange={onChange}
            pagination={"topRight"}
            onRow={(record, rowIndex) => ({
              onClick: (e) => showModal(record),
            })}
          />
          <Modal title={("Data Product", dataDetail.key)} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>No : {dataDetail.key}</p>
            <p>Name : {dataDetail.name}</p>
            <p>Price : {dataDetail.price}</p>
            <p>Qty : {dataDetail.qty}</p>
            <p>Category : {dataDetail.categ}</p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Home;
