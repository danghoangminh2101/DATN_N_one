'use client';

import React from "react";
import { Layout } from "antd";
import { Row } from "antd";
import { Col } from "antd";
import { Card } from "antd";
import { Carousel } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

const { Content } = Layout;

const GioithieuClient = () => {
  return (
    <Layout className="min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] bg-[url('/public/background@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-semibold mb-4">About Us</h1>
          <div className="flex items-center space-x-2">
            <span>Home</span>
            <span>//</span>
            <span>About Us</span>
          </div>
        </div>
      </div>

      <Content>
        {/* Smart Fashion Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <Row justify="center">
              <Col xs={24} lg={16} className="text-center">
                <h3 className="text-4xl font-light mb-2">Smart Fashion</h3>
                <h2 className="text-5xl font-bold mb-8">With Smart Devices</h2>
                <p className="text-gray-600 mb-12">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua...
                </p>
              </Col>
            </Row>
            
            <div className="relative max-w-5xl mx-auto">
              <img 
                src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/about/promo-video-img.webp"
                alt="promo video"
                className="w-full rounded-2xl"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <PlayCircleOutlined className="text-6xl text-white hover:text-blue-500 transition-colors" />
              </div>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold mb-4">Team Member</h2>
              <p className="text-gray-600">
                There are many variations of passages of Lorem Ipsum available
              </p>
            </div>

            <Row gutter={[32, 32]} justify="center">
              {[
                { name: "Sara Koivisto", image: "1.webp" },
                { name: "Anaiah Whitten", image: "1.webp" },
                { name: "Rachel Leonard", image: "1.webp" },
              ].map((member, index) => (
                <Col key={index} xs={24} sm={12} lg={8}>
                  <Card 
                    bordered={false} 
                    className="text-center hover:shadow-lg transition-shadow"
                    cover={
                      <div className="relative">
                        <img
                          alt={member.name}
                          src={`https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/team/${member.image}`}
                          className="w-full h-[400px] object-cover"
                        />
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[200px] h-1 bg-blue-500" />
                      </div>
                    }
                  >
                    <h3 className="text-xl font-medium mb-2">{member.name}</h3>
                    <p className="text-gray-500 uppercase text-sm">Team Member</p>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* Client Feedback Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold mb-4">Client Feedback</h2>
              <p className="text-gray-600">
                There are many variations of passages of Lorem Ipsum available
              </p>
            </div>

            <Carousel autoplay className="max-w-4xl mx-auto">
              {[1, 2].map((item) => (
                <div key={item} className="px-8">
                  <Card className="bg-white p-8">
                    <p className="text-lg italic mb-8">
                      Lorem ipsum dolor sit amel adipiscing elit, sed do eiusll tempor 
                      incididunt ut laborj et dolore magna sed do eiusll tempor dolore.
                    </p>
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/testimonial/1.png"
                        alt="client"
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <h4 className="font-semibold">Regan Rosen</h4>
                        <p className="text-gray-500">Client</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Row gutter={[32, 32]} justify="center">
              {[
                {
                  icon: "1.png",
                  title: "Free Shipping",
                  desc: "Capped at $39 per order"
                },
                {
                  icon: "2.png",
                  title: "Card Payments",
                  desc: "12 Months Installments"
                },
                {
                  icon: "3.png",
                  title: "Easy Returns",
                  desc: "Shop With Confidence"
                }
              ].map((feature, index) => (
                <Col key={index} xs={24} sm={12} lg={8}>
                  <Card bordered={false} className="text-center hover:shadow-lg transition-shadow">
                    <img
                      src={`https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/icons/${feature.icon}`}
                      alt={feature.title}
                      className="w-16 h-16 mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>
      </Content>
    </Layout>
  );
};

export default GioithieuClient; 