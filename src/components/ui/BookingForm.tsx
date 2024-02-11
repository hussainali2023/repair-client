"use client";

import { Button, Form, Input } from "antd";
import { TService } from "./Services";

const BookingForm = ({ service }: { service: TService }) => {
  return (
    <div className="flex justify-center py-12">
      <div className="lg:w-[50%] md:[60%] w-[90%] shadow-xl bg-white">
        <h1 className="text-center text-xl py-6 ">Booking Form</h1>
        <Form
          layout="vertical"
          name="basic"
          initialValues={{
            serviceName: service.name,
            price: service.price,
            status: "Pending",
          }}
          autoComplete="off"
          className="p-5"
        >
          <Form.Item label="Service Name" name="serviceName">
            <Input type="text" size="large" disabled className="text-black" />
          </Form.Item>
          <Form.Item label="Service Price" name="price">
            <Input type="text" size="large" disabled className="text-black" />
          </Form.Item>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input type="text" size="large" className="text-black" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email address!" },
            ]}
          >
            <Input type="email" size="large" className="text-black" />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              { required: true, message: "Please input your Phone Number!" },
            ]}
          >
            <Input type="text" size="large" />
          </Form.Item>
          <Form.Item className="hidden" name="status">
            <Input type="hidden" size="large" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              Confirm Now
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default BookingForm;
