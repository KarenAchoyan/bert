import React, {useEffect, useState} from 'react';
import {Button, Form, message, Upload, Image} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import App from '../layouts/app';
import {useDispatch, useSelector} from 'react-redux';
import {addCostume} from '../../../store/costume/actions';
import dynamic from 'next/dynamic';

import 'react-quill/dist/quill.snow.css';
import {getContent, updateContent} from "../../../store/content/actions";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const ReactQuill = dynamic(import('react-quill'), {ssr: false});

const AddCostumePage = () => {
    const dispatch = useDispatch();

    const [form] = Form.useForm();
    const [form2] = Form.useForm();
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const [videoFile, setVideoFile] = useState(null);
    const [videoPreview, setVideoPreview] = useState(null);

    const content = useSelector(state => state.content.content)

    useEffect(() => {
        dispatch(getContent.request({id:1}))
    }, [dispatch])


    useEffect(() => {
        if (content) {
            form2.setFieldsValue({
                content: content.content, // Assuming 'content' field is the content for ReactQuill
                video: content.video, // Assuming 'video' is the URL or file information
            });

            setVideoPreview(process.env.IMAGE_URL + content.video);
        }
    }, [content, form]);

    const handleImageChange = async (info) => {
        const file = info.fileList[0]?.originFileObj;
        if (file instanceof Blob) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleVideoChange = async (info) => {
        const file = info.fileList[0]?.originFileObj;
        if (file instanceof Blob) {
            setVideoFile(file);
            const videoURL = URL.createObjectURL(file);
            setVideoPreview(videoURL);
        }
    };

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('image', imageFile); // Append image
        dispatch(addCostume.request(formData));
        message.success('Costume successfully added!');
        form.resetFields();
        setImagePreview(null);
        setVideoPreview(null);
    };

    function handleUpdate(values) {
        const formData = new FormData();
        formData.append('video', videoFile); // Append video
        formData.append('content', values.content);

        dispatch(updateContent.request({id:1, formData}))
        message.success('Costume successfully added!');

    }

    return (
        <App>
            <h1>Add New Costume</h1>
            <div style={{margin: '24px'}}>
                <Form form={form} onFinish={handleSubmit}>
                    {/* Costume Image Upload */}
                    <Form.Item name="image"
                               rules={[{required: true, message: 'Please upload an image'}]}>
                        <Upload
                            accept="image/*"  // Accept only image files
                            showUploadList={false}
                            beforeUpload={() => false}
                            onChange={handleImageChange}
                        >
                            {imagePreview ? (
                                <Image
                                    src={imagePreview}
                                    alt="Costume Image"
                                    style={{maxWidth: '100%', maxHeight: '200px'}}
                                />
                            ) : (
                                <Button icon={<UploadOutlined/>}>Upload Image</Button>
                            )}
                        </Upload>
                    </Form.Item>

                    {/* Costume Video Upload */}

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Add Costume
                        </Button>
                    </Form.Item>
                </Form>
                <hr/>
                <br/>
                {/* Form for additional content (if needed) */}
                <Form form={form2} onFinish={handleUpdate}>
                    <Form.Item name="content">
                        <ReactQuill/>
                    </Form.Item>
                    <Form.Item  name="video"
                               rules={[{required: true, message: 'Please upload a video'}]}>
                        <Upload
                            accept="video/*"  // Accept only video files
                            showUploadList={false}
                            beforeUpload={() => false}
                            onChange={handleVideoChange}
                        >
                            <Button icon={<UploadOutlined/>}>Upload Video</Button>
                        </Upload>
                        <br/>
                        {videoPreview ? (
                            <video
                                controls
                                style={{maxWidth: '100%', maxHeight: '200px'}}
                            >
                                <source src={videoPreview} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        ) : null}
                    < /Form.Item>


                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </App>
    );
};

export default AddCostumePage;
