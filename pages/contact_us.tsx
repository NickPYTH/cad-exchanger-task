import React, {useState} from "react";
import {Form, FormProps, Input} from "antd";
import {Navbar} from "@/component/Navbar";
import {Footer} from "@/component/Footer";
import TextArea from "antd/es/input/TextArea";

type LayoutType = Parameters<typeof Form>[0]['layout'];

type FieldType = {
    name?: string;
    email?: string;
    message?: string;
};

function Contact_us() {
    const [form] = Form.useForm();
    const [responseName, setResponseName] = useState<string | null>(null);
    const [formLayout, setFormLayout] = useState<LayoutType>('vertical');
    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        console.log('Success:', values);
        if (values.message && values.email && values.name) {
            const params = new URLSearchParams({
                name: values.name,
                email: values.email,
                message: values.message,
            });

            const url = `http://83.222.9.213:7999/api/generate_simple_response?${params.toString()}`;

            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`Error! status: ${response.status}`);
                }

                const data = JSON.parse(await response.text()); // or response.json() if the server returns JSON
                setResponseName(data.name)
            } catch (error) {
                console.error('Fetch error:', error);
            }
        }
    };
    return (
        <div className="flex-col">
            <Navbar/>
            <div className="flex-col w-full min-h-screen h-150 justify-items-center content-center bg-[#f5f5f5]">
                {responseName ?
                <div className="text-4xl lg:text-5xl font-bold">
                    Thank you for
                    your interest, {responseName}
                </div>
                    :
                    <>
                        <div className="text-4xl lg:text-7xl font-bold mb-10">
                            Only CTA on the page
                        </div>
                        <Form
                            layout={formLayout}
                            form={form}
                            initialValues={{ layout: formLayout }}
                            onFinish={onFinish}
                            style={{ maxWidth: 600, padding: "25px 30px 10px 30px", borderRadius: 10 }}
                            className="bg-white border-1 border-[#d9d9d9]"
                        >
                            <Form.Item name="name" label="Name">
                                <Input size={'large'} style={{width: 272}} placeholder="Value" />
                            </Form.Item>
                            <Form.Item name="email" label="Email">
                                <Input size={'large'} style={{width: 272}} placeholder="Value" />
                            </Form.Item>
                            <Form.Item name="message" label="Message">
                                <TextArea style={{width: 272}} rows={4} placeholder="Value" />
                            </Form.Item>
                            <Form.Item>
                                <button type="submit" style={{width: 272}} className="flex justify-center items-center text-white hover:bg-[#595959] bg-[#2c2c2c] h-10 rounded-lg cursor-pointer" title={'Submit'}>Submit</button>
                            </Form.Item>
                        </Form>
                    </>
                }
            </div>
            <Footer />
        </div>
    )
}
export default Contact_us