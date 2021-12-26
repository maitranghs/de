Mã nguồn bao gồm các phần sau:
1. client: nơi giả lập các RFID Clients
    - Tập data set trong các files định dạng json
    - get_client.js mô phỏng request truy vấn thông tin theo read_point và event_time
    - post_client_*.js mô phỏng request lưu trữ thông tin RFID
2. mongodb_config: nơi mô tả các bước cài đặt; cấu hình các thành phần mongos, mongod và config server của mongodb
3. Các thư mục còn lại: hiện thực RESTful API và kết nối vào mongos tại localhost:50000