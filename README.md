Mã nguồn bao gồm các phần sau:
1. client: nơi giả lập các RFID Clients
    - Tập data set trong các files định dạng json
    - get_client.js mô phỏng request truy vấn thông tin theo read_point và event_time
    - get_client*.js mô phỏng request lưu trữ thông tin RFID
2. mongodb_config: nơi mô tả các bước install, cấu hình các thành phần mongos, mongod và confic server của mongodb
3. Các thư mục còn lại: hiện thực RESTful API và kết nối vào mongos tại localhost:50000