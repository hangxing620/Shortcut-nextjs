import { BiPlus } from "react-icons/bi";
import { Modal, Form, Input } from "antd";
import { useState } from "react";
// import axios from 'axios'

const layout = {
	labelCol: { span: 4 },
	wrapperCol: { span: 16 },
};
const list = [
  {
    imgLink: 'https://besticon-demo.herokuapp.com/icon?url=www.baidu.com&size=32..50..120',
    url: 'www.baidu.com',
    name: '百度'
  },
  {
    imgLink: 'https://besticon-demo.herokuapp.com/icon?url=cn.vuejs.org&size=32..50..120',
    url: 'cn.vuejs.org',
    name: 'Vue'
  },
  {
    imgLink: 'https://besticon-demo.herokuapp.com/icon?url=edu.lagou.com&size=32..50..120',
    url: 'edu.lagou.com',
    name: '拉勾教育'
  }
]

export default function Card() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [form] = Form.useForm();
	const [urls, setUrls] = useState([...list]);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = async () => {
		try {
			const values = await form.validateFields();
			console.log("Success:", values);
      const url = values.url
			if (values.url && values.url.includes("//")) {
				values.url = values.url.split("//")[1];
			}
			if (!values.url) {
				setIsModalVisible(false);
				return false;
			}
			const imgLink = `https://besticon-demo.herokuapp.com/icon?url=${values.url}&size=32..50..120`;
			setUrls([
				...urls,
				{
					url,
          imgLink,
					name: values.name,
				},
			]);
			form.resetFields();
			setIsModalVisible(false);
		} catch (errorInfo) {
			console.log("Failed:", errorInfo);
		}
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<>
			<div className="box-wraper">
				{urls.map((item) => (
					<a target="_blank" href={item.url.includes('//') ? item.url : `http://${item.url}`} className="box-item" key={item.url}>
						<div className="image-box">
							<img src={item.imgLink} />
						</div>
						<div className="text-box">{item.name}</div>
					</a>
				))}
				<div className="box-item" onClick={showModal}>
					<div className="image-box">
						<BiPlus />
					</div>
					<div className="text-box">添加快捷方式</div>
				</div>
			</div>
			<Modal
				title="添加快捷方式"
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<Form
					form={form}
					{...layout}
					name="basic"
					initialValues={{ remember: true }}
				>
					<Form.Item
						label="名称"
						name="name"
						rules={[{ required: true, message: "请输入网址名称" }]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="网址"
						name="url"
						rules={[{ required: true, message: "请输入网址！" }]}
					>
						<Input />
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
}


// export function loadQuick() {
//   return axios.get('/api/quick', { baseURL: 'http://localhost:3000' })
// }