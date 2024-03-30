import React from "react";
import DrawerComponent from "../../DrawerComponent/DrawerComponent";
import Loading from "../../LoadingComponent/Loading";
import TextArea from "antd/es/input/TextArea";
import {
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
  HistoryOutlined,
  SearchOutlined,
} from "@ant-design/icons";
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
import InputComponent from "../../InputComponent/InputComponent";
const Contract = (props) => {
  return (
    <div>
      <DrawerComponent
        title="Lịch sử đăng kiểm"
        width="90%"
        isOpen={props.isOpenDrawer2}
        onClose={props.handleOnclose}
      >
        <Loading isLoading={false}>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h6>Thêm lịch sử bảo dưỡng</h6>
                <Button
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "6px",
                    borderStyle: "solid",
                  }}
                  onClick={props.HistoryOpen}
                >
                  <PlusOutlined style={{ fontSize: "15px" }} />
                </Button>
              </div>
              <div className="col-md-4">
                <h6>Thêm lịch sử tai nạn</h6>
                <Button
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "6px",
                    borderStyle: "solid",
                  }}
                  onClick={props.AccidentOpen}
                >
                  <PlusOutlined style={{ fontSize: "15px" }} />
                </Button>
              </div>
              <div className="col-md-4">
                <h6>Thêm lịch sử Mua bán</h6>
                <Button
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "6px",
                    borderStyle: "solid",
                  }}
                  onClick={props.SoldOpen}
                >
                  <PlusOutlined style={{ fontSize: "15px" }} />
                </Button>
              </div>
            </div>
          </div>

          <Modal
            title="Thêm mới lịch sử bảo dưỡng"
            open={props.isHistoryOpen}
            width={800}
            onCancel={props.handleCancel}
          >
            <Form
              name="history"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 18 }}
              // onFinish={onFinish}
              autoComplete="on"
              form={props.form}
            >
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item
                    label="Thời gian"
                    name="identifynumber"
                    rules={[
                      {
                        required: true,
                        message: "Please input your identifynumber!",
                      },
                    ]}
                  >
                    <InputComponent
                      // value={stateVehicle.identifynumber}
                      // onChange={handleOnchange}
                      name="identifynumber"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Lăn bánh"
                    name="license"
                    rules={[
                      {
                        required: true,
                        message: "Please input your license!",
                      },
                    ]}
                  >
                    <InputComponent
                      // value={stateVehicle.license}
                      // onChange={handleOnchange}
                      name="license"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item
                    label="Bảo dưỡng"
                    name="identifynumber"
                    rules={[
                      {
                        required: true,
                        message: "Please input your identifynumber!",
                      },
                    ]}
                  >
                    <InputComponent
                      // value={stateVehicle.identifynumber}
                      // onChange={handleOnchange}
                      name="identifynumber"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Địa điểm"
                    name="license"
                    rules={[
                      {
                        required: true,
                        message: "Please input your license!",
                      },
                    ]}
                  >
                    <InputComponent
                      // value={stateVehicle.license}
                      // onChange={handleOnchange}
                      name="license"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                label="Kết quả"
                name="license"
                rules={[
                  {
                    required: true,
                    message: "Please input your license!",
                  },
                ]}
              >
                <InputComponent
                  // value={stateVehicle.license}
                  // onChange={handleOnchange}
                  name="license"
                />
              </Form.Item>
            </Form>
          </Modal>
          <Modal
            title="Thêm mới lịch sử bốc đầu"
            open={props.isAccidentOpen}
            width={800}
            onCancel={props.handleCancel}
          >
            <Form
              name="history"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 18 }}
              // onFinish={onFinish}
              autoComplete="on"
              form={props.form}
            >
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item
                    label="Thời gian"
                    name="identifynumber"
                    rules={[
                      {
                        required: true,
                        message: "Please input your identifynumber!",
                      },
                    ]}
                  >
                    <InputComponent
                      // value={stateVehicle.identifynumber}
                      // onChange={handleOnchange}
                      name="identifynumber"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Ảnh"
                    name="license"
                    rules={[
                      {
                        required: true,
                        message: "Please input your license!",
                      },
                    ]}
                  >
                    <InputComponent
                      // value={stateVehicle.name}
                      // onChange={(ev) => {
                      //   uploadPhoto(ev);
                      //   // handleOnchange;
                      // }}
                      type="file"
                      multiple
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                label="Mô tả"
                name="identifynumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your identifynumber!",
                  },
                ]}
              >
                <TextArea
                  // value={stateVehicle.identifynumber}
                  // onChange={handleOnchange}
                  name="identifynumber"
                />
              </Form.Item>
              <Form.Item
                label="Vấn đề"
                name="license"
                rules={[
                  {
                    required: true,
                    message: "Please input your license!",
                  },
                ]}
              >
                <TextArea
                  // value={stateVehicle.license}
                  // onChange={handleOnchange}
                  name="license"
                />
              </Form.Item>
              <Form.Item
                label="Linh kiện thay thế"
                name="license"
                rules={[
                  {
                    required: true,
                    message: "Please input your license!",
                  },
                ]}
              >
                <InputComponent
                  // value={stateVehicle.license}
                  // onChange={handleOnchange}
                  name="license"
                />
              </Form.Item>
            </Form>
          </Modal>
          <Modal
            title="Thêm mới lịch sử mua bán"
            open={props.isSoldOpen}
            width={800}
            onCancel={props.handleCancel}
          ></Modal>
        </Loading>
      </DrawerComponent>
    </div>
  );
};

export default Contract;
