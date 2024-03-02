import React, { useState, useRef, useEffect } from "react";
import {
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import InputComponent from "../../InputComponent/InputComponent";
import { getBase64, renderOptions } from "../../../utils";
import * as message from "../../../components/Message/Message";
import TableComponent from "../../TableComponent/TableComponent";
import Loading from "../../../components/LoadingComponent/Loading";
import { useQuery } from "@tanstack/react-query";
import DrawerComponent from "../../DrawerComponent/DrawerComponent";
import * as VehicleService from "../../../services/VehicleService";
import { useSelector } from "react-redux";
import { useMutationHooks } from "../../hooks/useMutationHook";
import {
  Button,
  Form,
  Modal,
  Select,
  Row,
  Col,
  InputNumber,
  Space,
  DatePicker,
  Input,
} from "antd";
const Vehicle = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingVehicleId, setEditingVehicleId] = useState(null);
  const [rowSelected, setRowSelected] = useState("");
  const [form] = Form.useForm();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const searchInput = useRef(null);
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [deletingVehicleId, setDeletingVehicleId] = useState(null);
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [image, setImage] = useState([]);
  const user = useSelector((state) => state?.user);
  const getAllVehicle = async () => {
    const res = await VehicleService.getAllVehicle();
    return res;
  };
  const querryVehicle = useQuery({
    queryKey: ["vehicles"],
    queryFn: getAllVehicle,
  });
  const { isLoading: isLoadingVehicles, data: vehicles } = querryVehicle;
  console.log("Data ben Vehicle: ", vehicles);
  const inittial = () => ({
    name: "", //
    identifynumber: "", //
    dated: "", //
    email: "", //
    phone: "", //
    address: "", //
    plates: "", //
    bill: "", //
    tax: "", //
    seri: "", //
    license: "", //
    engine: "", //
    frame: "", //
    type: "", //
    brand: "", //
    description: "", //
  });
  const handleOnchange = (e) => {
    setStateVehicle({
      ...stateVehicle,
      [e.target.name]: e.target.value,
    });
  };
  const fetchAllTypeProduct = async () => {
    const res = await VehicleService.getAllTypeVehicle();
    return res;
  };
  const handleCancelDelete = () => {
    setIsModalOpenDelete(false);
  };
  const typeProduct = useQuery({
    queryKey: ["type-vehicle"],
    queryFn: fetchAllTypeProduct,
  });

  const handleChangeSelect = (value) => {
    setStateProduct({
      ...stateProduct,
      type: value,
    });
  };
  const [stateVehicle, setStateVehicle] = useState(inittial());
  const mutationUpdate = useMutationHooks((data) => {
    const { id, token, ...rests } = data;
    const res = VehicleService.updateVehicle(id, token, { ...rests });
    return res;
  });
  const renderAction = () => {
    return (
      <div>
        <DeleteOutlined
          style={{ color: "red", fontSize: "30px", cursor: "pointer" }}
          onClick={() => setIsModalOpenDelete(true)}
        />
        <EditOutlined
          style={{ color: "orange", fontSize: "30px", cursor: "pointer" }}
          onClick={handleDetailsProduct}
        />
      </div>
    );
  };
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    // setSearchText(selectedKeys[0]);
    // setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    // setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <InputComponent
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
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
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    // render: (text) =>
    //   searchedColumn === dataIndex ? (
    //     // <Highlighter
    //     //   highlightStyle={{
    //     //     backgroundColor: '#ffc069',
    //     //     padding: 0,
    //     //   }}
    //     //   searchWords={[searchText]}
    //     //   autoEscape
    //     //   textToHighlight={text ? text.toString() : ''}
    //     // />
    //   ) : (
    //     text
    //   ),
  });
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      ...getColumnSearchProps("name"),
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: renderAction,
    },
  ];
  const mutationDeleted = useMutationHooks((data) => {
    const { id, token } = data;
    const res = VehicleService.deleteVehicle(id, token);
    return res;
  });
  const {
    data: dataDeleted,
    isLoading: isLoadingDeleted,
    isSuccess: isSuccessDelected,
    isError: isErrorDeleted,
  } = mutationDeleted;
  const onUpdateVehicle = () => {
    mutationUpdate.mutate(
      { id: rowSelected, token: user?.access_token, ...stateProductDetails },
      {
        onSettled: () => {
          queryProduct.refetch();
        },
      }
    );
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleDetailsProduct = () => {
    setIsOpenDrawer(true);
  };
  const handleDeleteVehicle = () => {
    mutationDeleted.mutate(
      { id: rowSelected, token: user?.access_token },
      {
        onSettled: () => {
          querryVehicle.refetch();
        },
      }
    );
  };
  const dataTable =
    vehicles?.data?.length &&
    vehicles?.data?.map((vehicle) => {
      return { ...vehicle, key: vehicle._id };
    });
  useEffect(() => {
    if (isSuccessDelected && dataDeleted?.status === "OK") {
      message.success();
      handleCancelDelete();
    } else if (isErrorDeleted) {
      message.error();
    }
  }, [isSuccessDelected]);
  return (
    <div>
      <div style={{ marginTop: "10px" }}>
        <Button
          style={{
            height: "70px",
            width: "70px",
            borderRadius: "6px",
            borderStyle: "solid",
          }}
          onClick={() => setIsModalOpen(true)}
        >
          <PlusOutlined style={{ fontSize: "20px" }} />
        </Button>
        <div style={{ marginTop: "20px" }}>
          <TableComponent
            // handleDelteMany={handleDelteManyProducts}
            columns={columns}
            data={dataTable}
            isLoading={isLoadingVehicles}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  console.log("Row id selected: ", record._id);
                  setRowSelected(record._id);
                },
              };
            }}
          />
        </div>
        <Modal
          title="Thêm mới super idol car"
          open={isModalOpen}
          width={800}
          // onOk={handleOk}
          onCancel={handleCancel}
        >
          <Loading isLoading={false}>
            <Form
              name="basic"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 18 }}
              // onFinish={onFinish}
              autoComplete="on"
              form={form}
            >
              <Form.Item
                label="Tên chủ sở hữu"
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <InputComponent
                  value={stateVehicle.name}
                  onChange={handleOnchange}
                  name="name"
                />
              </Form.Item>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item
                    label="Cccd"
                    name="identifynumber"
                    rules={[
                      {
                        required: true,
                        message: "Please input your identifynumber!",
                      },
                    ]}
                  >
                    <InputComponent
                      value={stateVehicle.identifynumber}
                      onChange={handleOnchange}
                      name="identifynumber"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Giấy phép"
                    name="license"
                    rules={[
                      {
                        required: true,
                        message: "Please input your license!",
                      },
                    ]}
                  >
                    <InputComponent
                      value={stateVehicle.license}
                      onChange={handleOnchange}
                      name="license"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item
                    label="Sđt"
                    name="phone"
                    rules={[
                      { required: true, message: "Please input your phone!" },
                    ]}
                  >
                    <InputComponent
                      value={stateVehicle.phone}
                      onChange={handleOnchange}
                      name="phone"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your count email!",
                      },
                    ]}
                  >
                    <InputComponent
                      value={stateVehicle.email}
                      onChange={handleOnchange}
                      name="email"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item
                    label="Type"
                    name="type"
                    rules={[
                      { required: true, message: "Please input your type!" },
                    ]}
                  >
                    <Select
                      name="type"
                      // defaultValue="lucy"
                      // style={{ width: 120 }}
                      value={stateVehicle.type}
                      onChange={handleChangeSelect}
                      options={renderOptions(typeProduct?.data?.data)}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Địa chỉ"
                    name="address"
                    rules={[
                      {
                        required: true,
                        message: "Please input your count address!",
                      },
                    ]}
                  >
                    <InputComponent
                      value={stateVehicle.address}
                      onChange={handleOnchange}
                      name="address"
                    />
                  </Form.Item>
                </Col>
              </Row>
              {/* <Row gutter={[16, 16]}>
              <Col span={12}></Col>
              <Col span={12}></Col>
              </Row> */}
              <Row gutter={[16, 16]}>
                {" "}
                {/* gutter là khoảng cách giữa các cột */}
                <Col span={12}>
                  <Form.Item
                    label="Bill"
                    name="bill"
                    rules={[
                      {
                        required: true,
                        message: "Please input your count bill!",
                      },
                    ]}
                  >
                    <InputComponent
                      value={stateVehicle.bill}
                      onChange={handleOnchange}
                      name="bill"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Nhãn hàng"
                    name="brand"
                    rules={[
                      {
                        required: true,
                        message: "Please input your count brand!",
                      },
                    ]}
                  >
                    <InputComponent
                      value={stateVehicle.brand}
                      onChange={handleOnchange}
                      name="brand"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item
                    label="Biển số xe"
                    name="plates"
                    rules={[
                      {
                        required: true,
                        message: "Please input your count plates!",
                      },
                    ]}
                  >
                    <InputComponent
                      value={stateVehicle.plates}
                      onChange={handleOnchange}
                      name="plates"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Động cơ"
                    name="engine"
                    rules={[
                      {
                        required: true,
                        message: "Please input your count engine!",
                      },
                    ]}
                  >
                    <InputComponent
                      value={stateVehicle.engine}
                      onChange={handleOnchange}
                      name="engine"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item
                    label="Mã số thuế"
                    name="tax"
                    rules={[
                      {
                        required: true,
                        message: "Please input your count tax!",
                      },
                    ]}
                  >
                    <InputComponent
                      value={stateVehicle.tax}
                      onChange={handleOnchange}
                      name="tax"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Seri"
                    name="engine"
                    rules={[
                      {
                        required: true,
                        message: "Please input your count seri!",
                      },
                    ]}
                  >
                    <InputComponent
                      value={stateVehicle.seri}
                      onChange={handleOnchange}
                      name="seri"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item
                    label="Ngày kí"
                    name="dated"
                    rules={[
                      {
                        required: true,
                        message: "Please input your count dated!",
                      },
                    ]}
                  >
                    <DatePicker
                      value={stateVehicle.dated}
                      onChange={handleOnchange}
                      name="dated"
                      format="DD/MM/YYYY" // Định dạng ngày tháng năm
                      placeholder="Select date"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Số khung"
                    name="frame"
                    rules={[
                      {
                        required: true,
                        message: "Please input your count frame!",
                      },
                    ]}
                  >
                    <InputComponent
                      value={stateVehicle.frame}
                      onChange={handleOnchange}
                      name="frame"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item label="Mô tả" name="description">
                <Input.TextArea
                  value={stateVehicle.description}
                  onChange={handleOnchange}
                  name="description"
                />
              </Form.Item>
            </Form>
          </Loading>
        </Modal>
        {/* <DrawerComponent
          title="Chi tiết sản phẩm"
          isOpen={isOpenDrawer}
          onClose={() => setIsOpenDrawer(false)}
          width="90%"
          >
          <Loading isLoading={false}></Loading>
          <Form
          name="basic"
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 22 }}
            onFinish={onUpdateVehicle}
            autoComplete="on"
            form={form}
          ></Form>
        </DrawerComponent> */}
        <Modal
          title="Xóa sản phẩm"
          open={isModalOpenDelete}
          onCancel={handleCancelDelete}
          onOk={handleDeleteVehicle}
        >
          <Loading isLoading={isLoadingDeleted}>
            <div>Bạn có chắc xóa sản phẩm này không?</div>
          </Loading>
        </Modal>
      </div>
    </div>
  );
};

export default Vehicle;
