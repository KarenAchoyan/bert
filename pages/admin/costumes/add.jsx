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
    const [videoFile, setVideoFile] = useState(null);
    const [videoPreview, setVideoPreview] = useState(null);

    const content = useSelector(state => state.content.content)

    useEffect(() => {
        dispatch(getContent.request({id: 1}))
    }, [dispatch])


    useEffect(() => {
        if (content) {
            form2.setFieldsValue({
                content: content.content,
                video: content.video,
            });

            setVideoPreview(process.env.IMAGE_URL + content.video);
        }
    }, [content, form2]);


    const handleVideoChange = async (info) => {
        const file = info.fileList[0]?.originFileObj;
        if (file instanceof Blob) {
            setVideoFile(file);
            const videoURL = URL.createObjectURL(file);
            setVideoPreview(videoURL);
        }
    };

    function handleUpdate(values) {
        const formData = new FormData();
        formData.append('video', videoFile); // Append video
        formData.append('content', values.content);

        dispatch(updateContent.request({id: 1, formData}))
        message.success('Costume successfully added!');
    }

    return (
        <App>
            <div style={{margin: '24px'}}>
                <Form form={form2} onFinish={handleUpdate}>
                    <Form.Item name="content">
                        <ReactQuill/>
                    </Form.Item>
                    <Form.Item name="video"
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
