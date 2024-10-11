/* eslint-disable @next/next/no-img-element */

"use client";
import "../sanpham/css/globals.css";
import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../sanpham/css/animate.min.css';
import '../sanpham/css/bootstrap.min.css';
//import '../sanpham/css/font.awesome.css';
import '../sanpham/css/jquery-ui.min.css';
import './css/style.css';
import './css/venobox.css';
import './css/swiper-bundle.min.css'

export default function product() {
    return (
        <><div className="breadcrumb-area">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-12 text-center">
                        <h2 className="breadcrumb-title">Product Page</h2>
                        <ul className="breadcrumb-list">
                            <li className="breadcrumb-item">
                                <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item active">Shop</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div><div class="shop-category-area pt-100px pb-100px">
                <div class="container">

                    <div class="row">
                        <div class="col-md-12">
                            <div class="shop-top-bar d-flex">
                                <p class="compare-product"> <span>12</span> Product Found of <span>30</span></p>
                                <div class="shop-tab nav" role="tablist">
                                    <button class="active" data-bs-target="#shop-grid" data-bs-toggle="tab" aria-selected="true" role="tab">
                                        <i class="fa fa-th" aria-hidden="true"></i>
                                    </button>
                                    <button data-bs-target="#shop-list" data-bs-toggle="tab" aria-selected="false" role="tab" class="" tabindex="-1">
                                        <i class="fa fa-list" aria-hidden="true"></i>
                                    </button>
                                </div>
                                <div class="select-shoing-wrap d-flex align-items-center">
                                    <div class="shot-product">
                                        <p>Sort By:</p>
                                    </div>
                                    <div class="header-bottom-set dropdown">
                                        <button class="dropdown-toggle header-action-btn" data-bs-toggle="dropdown">Default <i class="fa fa-angle-down"></i></button>
                                        <ul class="dropdown-menu dropdown-menu-right">
                                            <li><a class="dropdown-item" href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/shop-3-column.html#">Name, A to Z</a></li>
                                            <li><a class="dropdown-item" href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/shop-3-column.html#">Name, Z to A</a></li>
                                            <li><a class="dropdown-item" href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/shop-3-column.html#">Price, low to high</a></li>
                                            <li><a class="dropdown-item" href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/shop-3-column.html#">Price, high to low</a></li>
                                            <li><a class="dropdown-item" href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/shop-3-column.html#">Sort By new</a></li>
                                            <li><a class="dropdown-item" href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/shop-3-column.html#">Sort By old</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="shop-bottom-area">
                                <div class="row">
                                    <div class="col">
                                        <div class="tab-content">
                                            {/* update */}
                                            <div class="tab-pane fade active show" id="shop-grid" role="tabpanel">
                                                <div class="row mb-n-30px">
                                                    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                                        <div className="product">
                                                            <span className="badges">
                                                                <span className="new">New</span>
                                                            </span>
                                                            <div className="thumb">
                                                                <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/single-product.html" className="image">
                                                                    <img src="../sanpham/images/blog-image/1.webp" alt="Product" />
                                                                    <img className="hover-image" src="./images/blog-image/1.webp" alt="Product" />
                                                                </a>
                                                            </div>
                                                            <div className="content">
                                                                <span className="category">
                                                                    <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/shop-3-column.html#">Accessories</a>
                                                                </span>
                                                                <h5 className="title">
                                                                    <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/single-product.html">Modern Smart Phone</a>
                                                                </h5>
                                                                <span className="price">
                                                                    <span className="new">$38.50</span>
                                                                </span>
                                                            </div>
                                                            <div className="actions">
                                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart">
                                                                    <i className="pe-7s-shopbag"></i>
                                                                </button>
                                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist">
                                                                    <i className="pe-7s-like"></i>
                                                                </button>
                                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i className="pe-7s-look"></i>
                                                                </button>
                                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare">
                                                                    <i className="pe-7s-refresh-2"></i>
                                                                </button>
                                                            </div>
                                                        </div>


                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                                        <div className="product">
                                                            <span className="badges">
                                                                <span className="sale">-10%</span>
                                                                <span className="new">New</span>
                                                            </span>
                                                            <div className="thumb">
                                                                <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/single-product.html" className="image">
                                                                    <img src="./images/blog-image/2.webp" alt="Product" />
                                                                    <img className="hover-image" src="./images/blog-image/2.webp" alt="Product" />
                                                                </a>
                                                            </div>
                                                            <div className="content">
                                                                <span className="category">
                                                                    <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/shop-3-column.html#">Accessories</a>
                                                                </span>
                                                                <h5 className="title">
                                                                    <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/single-product.html">Bluetooth Headphone</a>
                                                                </h5>
                                                                <span className="price">
                                                                    <span className="old">$48.50</span>
                                                                    <span className="new">$38.50</span>
                                                                </span>
                                                            </div>
                                                            <div className="actions">
                                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart">
                                                                    <i className="pe-7s-shopbag"></i>
                                                                </button>
                                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist">
                                                                    <i className="pe-7s-like"></i>
                                                                </button>
                                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i className="pe-7s-look"></i>
                                                                </button>
                                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare">
                                                                    <i className="pe-7s-refresh-2"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                                        <div className="product">
                                                            <span className="badges">
                                                                <span className="sale">-10%</span>
                                                                <span className="new">New</span>
                                                            </span>
                                                            <div className="thumb">
                                                                <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/single-product.html" className="image">
                                                                    <img src="./images/blog-image/2.webp" alt="Product" />
                                                                    <img className="hover-image" src="./images/blog-image/2.webp" alt="Product" />
                                                                </a>
                                                            </div>
                                                            <div className="content">
                                                                <span className="category">
                                                                    <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/shop-3-column.html#">Accessories</a>
                                                                </span>
                                                                <h5 className="title">
                                                                    <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/single-product.html">Bluetooth Headphone</a>
                                                                </h5>
                                                                <span className="price">
                                                                    <span className="old">$48.50</span>
                                                                    <span className="new">$38.50</span>
                                                                </span>
                                                            </div>
                                                            <div className="actions">
                                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart">
                                                                    <i className="pe-7s-shopbag"></i>
                                                                </button>
                                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist">
                                                                    <i className="pe-7s-like"></i>
                                                                </button>
                                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i className="pe-7s-look"></i>
                                                                </button>
                                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare">
                                                                    <i className="pe-7s-refresh-2"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                                        <div className="product">
                                                            <span className="badges">
                                                                <span className="sale">-10%</span>
                                                                <span className="new">New</span>
                                                            </span>
                                                            <div className="thumb">
                                                                <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/single-product.html" className="image">
                                                                    <img src="./images/blog-image/2.webp" alt="Product" />
                                                                    <img className="hover-image" src="./images/blog-image/2.webp" alt="Product" />
                                                                </a>
                                                            </div>
                                                            <div className="content">
                                                                <span className="category">
                                                                    <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/shop-3-column.html#">Accessories</a>
                                                                </span>
                                                                <h5 className="title">
                                                                    <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/single-product.html">Bluetooth Headphone</a>
                                                                </h5>
                                                                <span className="price">
                                                                    <span className="old">$48.50</span>
                                                                    <span className="new">$38.50</span>
                                                                </span>
                                                            </div>
                                                            <div className="actions">
                                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart">
                                                                    <i className="pe-7s-shopbag"></i>
                                                                </button>
                                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist">
                                                                    <i className="pe-7s-like"></i>
                                                                </button>
                                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i className="pe-7s-look"></i>
                                                                </button>
                                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare">
                                                                    <i className="pe-7s-refresh-2"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                                        <div className="product">
                                                            <span className="badges">
                                                                <span className="sale">-10%</span>
                                                                <span className="new">New</span>
                                                            </span>
                                                            <div className="thumb">
                                                                <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/single-product.html" className="image">
                                                                    <img src="./images/blog-image/2.webp" alt="Product" />
                                                                    <img className="hover-image" src="./images/blog-image/2.webp" alt="Product" />
                                                                </a>
                                                            </div>
                                                            <div className="content">
                                                                <span className="category">
                                                                    <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/shop-3-column.html#">Accessories</a>
                                                                </span>
                                                                <h5 className="title">
                                                                    <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/single-product.html">Bluetooth Headphone</a>
                                                                </h5>
                                                                <span className="price">
                                                                    <span className="old">$48.50</span>
                                                                    <span className="new">$38.50</span>
                                                                </span>
                                                            </div>
                                                            <div className="actions">
                                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart">
                                                                    <i className="pe-7s-shopbag"></i>
                                                                </button>
                                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist">
                                                                    <i className="pe-7s-like"></i>
                                                                </button>
                                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i className="pe-7s-look"></i>
                                                                </button>
                                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare">
                                                                    <i className="pe-7s-refresh-2"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                                        <div className="product">
                                                            <span className="badges">
                                                                <span className="new">Sale</span>
                                                            </span>
                                                            <div className="thumb">
                                                                <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/single-product.html" className="image">
                                                                    <img src="./Hmart - Product page_files/3.webp" alt="Product" />
                                                                    <img className="hover-image" src="./Hmart - Product page_files/3.webp" alt="Product" />
                                                                </a>
                                                            </div>
                                                            <div className="content">
                                                                <span className="category">
                                                                    <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/shop-3-column.html#">Accessories</a>
                                                                </span>
                                                                <h5 className="title">
                                                                    <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/single-product.html">Smart Music Box</a>
                                                                </h5>
                                                                <span className="price">
                                                                    <span className="new">$38.50</span>
                                                                </span>
                                                            </div>
                                                            <div className="actions">
                                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart">
                                                                    <i className="pe-7s-shopbag"></i>
                                                                </button>
                                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist">
                                                                    <i className="pe-7s-like"></i>
                                                                </button>
                                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i className="pe-7s-look"></i>
                                                                </button>
                                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare">
                                                                    <i className="pe-7s-refresh-2"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                                        <div className="product">
                                                            <span className="badges">
                                                                <span className="new">New</span>
                                                            </span>
                                                            <div className="thumb">
                                                                <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/single-product.html" className="image">
                                                                    <img src="./Hmart - Product page_files/4.webp" alt="Product" />
                                                                    <img className="hover-image" src="./Hmart - Product page_files/1.webp" alt="Product" />
                                                                </a>
                                                            </div>
                                                            <div className="content">
                                                                <span className="category">
                                                                    <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/shop-3-column.html#">Accessories</a>
                                                                </span>
                                                                <h5 className="title">
                                                                    <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/single-product.html">Air Pods 25Hjkl Black</a>
                                                                </h5>
                                                                <span className="price">
                                                                    <span className="new">$38.50</span>
                                                                </span>
                                                            </div>
                                                            <div className="actions">
                                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart">
                                                                    <i className="pe-7s-shopbag"></i>
                                                                </button>
                                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist">
                                                                    <i className="pe-7s-like"></i>
                                                                </button>
                                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i className="pe-7s-look"></i>
                                                                </button>
                                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare">
                                                                    <i className="pe-7s-refresh-2"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                                        <div className="product">
                                                            <span className="badges">
                                                                <span className="new">New</span>
                                                            </span>
                                                            <div className="thumb">
                                                                <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/single-product.html" className="image">
                                                                    <img src="../sanpham/images/blog-image/1(1).webp" alt="Product" />
                                                                    <img className="hover-image" src="./images/blog-image/1.webp" alt="Product" />
                                                                </a>
                                                            </div>
                                                            <div className="content">
                                                                <span className="category">
                                                                    <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/shop-3-column.html#">Accessories</a>
                                                                </span>
                                                                <h5 className="title">
                                                                    <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/single-product.html">Modern Smart Phone</a>
                                                                </h5>
                                                                <span className="price">
                                                                    <span className="new">$38.50</span>
                                                                </span>
                                                            </div>
                                                            <div className="actions">
                                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart">
                                                                    <i className="pe-7s-shopbag"></i>
                                                                </button>
                                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist">
                                                                    <i className="pe-7s-like"></i>
                                                                </button>
                                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i className="pe-7s-look"></i>
                                                                </button>
                                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare">
                                                                    <i className="pe-7s-refresh-2"></i>
                                                                </button>
                                                            </div>
                                                        </div>


                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                                        <div className="product">
                                                            <span className="badges">
                                                                <span className="sale">-10%</span>
                                                                <span className="new">New</span>
                                                            </span>
                                                            <div className="thumb">
                                                                <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/single-product.html" className="image">
                                                                    <img src="./images/blog-image/2.webp" alt="Product" />
                                                                    <img className="hover-image" src="./images/blog-image/2.webp" alt="Product" />
                                                                </a>
                                                            </div>
                                                            <div className="content">
                                                                <span className="category">
                                                                    <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/shop-3-column.html#">Accessories</a>
                                                                </span>
                                                                <h5 className="title">
                                                                    <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/single-product.html">Bluetooth Headphone</a>
                                                                </h5>
                                                                <span className="price">
                                                                    <span className="old">$48.50</span>
                                                                    <span className="new">$38.50</span>
                                                                </span>
                                                            </div>
                                                            <div className="actions">
                                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart">
                                                                    <i className="pe-7s-shopbag"></i>
                                                                </button>
                                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist">
                                                                    <i className="pe-7s-like"></i>
                                                                </button>
                                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i className="pe-7s-look"></i>
                                                                </button>
                                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare">
                                                                    <i className="pe-7s-refresh-2"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                                        <div className="product">
                                                            <span className="badges">
                                                                <span className="sale">-10%</span>
                                                                <span className="new">New</span>
                                                            </span>
                                                            <div className="thumb">
                                                                <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/single-product.html" className="image">
                                                                    <img src="./images/blog-image/2.webp" alt="Product" />
                                                                    <img className="hover-image" src="./images/blog-image/2.webp" alt="Product" />
                                                                </a>
                                                            </div>
                                                            <div className="content">
                                                                <span className="category">
                                                                    <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/shop-3-column.html#">Accessories</a>
                                                                </span>
                                                                <h5 className="title">
                                                                    <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/single-product.html">Bluetooth Headphone</a>
                                                                </h5>
                                                                <span className="price">
                                                                    <span className="old">$48.50</span>
                                                                    <span className="new">$38.50</span>
                                                                </span>
                                                            </div>
                                                            <div className="actions">
                                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart">
                                                                    <i className="pe-7s-shopbag"></i>
                                                                </button>
                                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist">
                                                                    <i className="pe-7s-like"></i>
                                                                </button>
                                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i className="pe-7s-look"></i>
                                                                </button>
                                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare">
                                                                    <i className="pe-7s-refresh-2"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                                        <div className="product">
                                                            <span className="badges">
                                                                <span className="sale">-10%</span>
                                                                <span className="new">New</span>
                                                            </span>
                                                            <div className="thumb">
                                                                <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/single-product.html" className="image">
                                                                    <img src="./images/blog-image/2.webp" alt="Product" />
                                                                    <img className="hover-image" src="./images/blog-image/2.webp" alt="Product" />
                                                                </a>
                                                            </div>
                                                            <div className="content">
                                                                <span className="category">
                                                                    <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/shop-3-column.html#">Accessories</a>
                                                                </span>
                                                                <h5 className="title">
                                                                    <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/single-product.html">Bluetooth Headphone</a>
                                                                </h5>
                                                                <span className="price">
                                                                    <span className="old">$48.50</span>
                                                                    <span className="new">$38.50</span>
                                                                </span>
                                                            </div>
                                                            <div className="actions">
                                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart">
                                                                    <i className="pe-7s-shopbag"></i>
                                                                </button>
                                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist">
                                                                    <i className="pe-7s-like"></i>
                                                                </button>
                                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i className="pe-7s-look"></i>
                                                                </button>
                                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare">
                                                                    <i className="pe-7s-refresh-2"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                                        <div className="product">
                                                            <span className="badges">
                                                                <span className="sale">-10%</span>
                                                                <span className="new">New</span>
                                                            </span>
                                                            <div className="thumb">
                                                                <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/single-product.html" className="image">
                                                                    <img src="./images/blog-image/2.webp" alt="Product" />
                                                                    <img className="hover-image" src="./images/blog-image/2.webp" alt="Product" />
                                                                </a>
                                                            </div>
                                                            <div className="content">
                                                                <span className="category">
                                                                    <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/shop-3-column.html#">Accessories</a>
                                                                </span>
                                                                <h5 className="title">
                                                                    <a href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/single-product.html">Bluetooth Headphone</a>
                                                                </h5>
                                                                <span className="price">
                                                                    <span className="old">$48.50</span>
                                                                    <span className="new">$38.50</span>
                                                                </span>
                                                            </div>
                                                            <div className="actions">
                                                                <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart">
                                                                    <i className="pe-7s-shopbag"></i>
                                                                </button>
                                                                <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist">
                                                                    <i className="pe-7s-like"></i>
                                                                </button>
                                                                <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i className="pe-7s-look"></i>
                                                                </button>
                                                                <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare">
                                                                    <i className="pe-7s-refresh-2"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            {/* end update */}
                                        </div>
                                    </div>
                                </div>
                                <div class="pro-pagination-style text-center text-lg-end" data-aos="fade-up" data-aos-delay="200">
                                    <div class="pages">
                                        <ul>
                                            <li class="li"><a class="page-link" href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/shop-3-column.html#"><i class="fa fa-angle-left"></i></a>
                                            </li>
                                            <li class="li"><a class="page-link" href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/shop-3-column.html#">1</a></li>
                                            <li class="li"><a class="page-link active" href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/shop-3-column.html#">2</a></li>
                                            <li class="li"><a class="page-link" href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/shop-3-column.html#">3</a></li>
                                            <li class="li"><a class="page-link" href="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/shop-3-column.html#"><i class="fa fa-angle-right"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    );
}
