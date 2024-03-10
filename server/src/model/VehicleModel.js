// Ngày tháng năm sinh
// Địa chỉ chủ xe(Khai theo hộ khẩu) : Tỉnh/Thành phố  Quận/Huyện Phường Xã
// Chi tiết địa chỉ
// Số CCCD
// Cấp ngày
// Nơi cấp
// Điện thoại
// Email
// Biển số xe
// Số hóa đơn điện tử
// Mã số thuế
// Số seri phiếu KTCLXX
// Số giấy phép kinh doanh vận tại
// Số máy
// Số khung
// Loại xe
// Màu sơn
// Nhãn hiệu
// Số loại
// Giấy tờ đăng kiểm
// ==== còn thiếu
// Số chỗ xe
// Số km lăn bánh
// Cần số: ví dụ số tự động

const mongoose = require("mongoose");
const vehicleSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    image: { type: [String], require: true },
    identifynumber: { type: String, required: true, unique: true },
    dated: { type: Date, require: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    plates: { type: String, require: true, unique: true },
    bill: { type: String, require: true },
    tax: { type: String, require: true },
    seri: { type: String, require: true },
    license: { type: String, require: true },
    // demand: { type: String, require: true },
    engine: { type: String, require: true },
    frame: { type: String, require: true },
    fuel: {type: String, require: true},//
    type: { type: String, require: true },
    color: { type: String, require: true },//
    brand: { type: String, require: true },
    rolling: { type: String, require: true },//
    gear: { type: String, require: true },//
    description: { type: String },
  },
  {
    timestamps: true,
  }
);
const Vehicle = mongoose.model("Vehicle", vehicleSchema);
module.exports = Vehicle;
