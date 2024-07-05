import sys
import json
import pandas as pd
from catboost import CatBoostRegressor
import numpy as np

# Load đường dẫn đến file model đã train

# Hàm dự đoán giá
def predict_price(input_data):
    try:
        # Chuyển đổi dữ liệu JSON từ Node.js thành DataFrame
        input_df = pd.DataFrame([input_data])

        # Load mô hình CatBoost từ file đã train
        model = CatBoostRegressor()
        model.load_model('best_model')

        # Dự đoán giá
        prediction = model.predict(input_df)

        # Chuyển đổi kết quả dự đoán và trả về
        predicted_price = np.power(10, prediction[0])
        return predicted_price

    except Exception as e:
        print(f"Error during prediction: {str(e)}")
        return None

# Đọc dữ liệu đầu vào từ Node.js
input_data = json.loads(sys.argv[1])

# Gọi hàm dự đoán và in kết quả dự đoán ra stdout
predicted_price = predict_price(input_data)
if predicted_price is not None:
    print(predicted_price)
