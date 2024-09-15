import React, {useEffect, useState} from 'react';
import {Button, Form, Image, message, Modal, Popconfirm, Space, Table, Upload} from 'antd';
import {DeleteOutlined, EditOutlined, UploadOutlined} from '@ant-design/icons';
import App from "../layouts/app";
import {useDispatch, useSelector} from "react-redux";
import {getCostumes,deleteCostume,updateCostume} from "../../../store/costume/actions";

const AllCostumesPage = () => {
    const dispatch = useDispatch();
    const costumes = useSelector((state) => state?.costume?.costumes);

    const [editingCostume, setEditingCostume] = useState(null);
    const [editModalVisible, setEditModalVisible] = useState(false);

    const [form] = Form.useForm();
    const [avatarFile, setAvatarFile] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState(null);

    useEffect(() => {
        dispatch(getCostumes.request());
    }, [dispatch]);

    const handleDeleteCostume = (id) => {
        dispatch(deleteCostume.request(id));
        message.success('Costume deleted successfully');
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (image) => (
                <div>
                    <Image preview={false} src={process.env.IMAGE_URL + image} style={{width: '150px'}} alt="Costume"/>
                </div>
            ),
        },
        {
            title: 'Action',
            dataIndex: 'id',
            key: 'action',
            render: (id) => (
                <Space size="small">
                    <Popconfirm
                        title="Are you sure you want to delete this costume?"
                        onConfirm={() => handleDeleteCostume(id)}
                        okText="Yes"
                        cancelText="No"
                        key={`delete_${id}`}
                    >
                        <Button type="primary" danger icon={<DeleteOutlined/>} key={`confirm_${id}`}>
                            Delete
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        }
    ];

    return (
        <App>
            <h1>All Costumes</h1>
            <div style={{margin: '24px'}}>
                <Table dataSource={costumes} columns={columns} rowKey="id"/>
            </div>
        </App>
    );
};

export default AllCostumesPage;
