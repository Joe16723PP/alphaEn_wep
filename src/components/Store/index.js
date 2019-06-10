import React from 'react';
import './index.css';

class StorePage extends React.Component {
    constructor(props){
      super(props)
      this.state={
      }
    }
    render() {
        return (
        <div className="product-page">
            <div className="header"style = {{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)), url(../../images/store-img.jpg)" }}>
                <div className="storeHeader">AlphaEn Store</div>
                <div className="storePara">พบกับมาตรฐานและความสดใหม่ของความรู้ทั้งหมดที่เรามีได้ที่นี่</div>    
            </div>
            <div className="grid-product">
                <div className="product-card">
                    <div className="wrapper">
                        <div className="product-img">
                        <img src={"http://bit.ly/2tMBBTd"} height="420" width="327" alt="productImg"/>
                        </div>
                        <div className="product-info">
                            <div className="product-text">
                                <div className="product-name">ชื่อสินค้า</div>
                                <h2>รายละเอียด</h2>
                                <p>more and more detail<br></br>more and more detail<br></br>more and more detail<br></br>more and more detail<br></br></p>
                            </div>
                            <div className="product-price-btn">
                                <p>799฿</p>
                                <a href="https://m.me/1681379355205829" target="_blank" rel="noopener noreferrer">สั่งซื้อทันที</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-card">
                    <div className="wrapper">
                        <div className="product-img">
                        <img src={"http://bit.ly/2tMBBTd"} height="420" width="327" alt="productImg"/>
                        </div>
                        <div className="product-info">
                            <div className="product-text">
                                <div className="product-name">ชื่อสินค้า</div>
                                <h2>รายละเอียด</h2>
                                <p>more and more detail<br></br>more and more detail<br></br>more and more detail<br></br>more and more detail<br></br></p>
                            </div>
                            <div className="product-price-btn">
                                <p>799฿</p>
                                <a href="https://m.me/1681379355205829" target="_blank" rel="noopener noreferrer">สั่งซื้อทันที</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-card">
                    <div className="wrapper">
                        <div className="product-img">
                        <img src={"http://bit.ly/2tMBBTd"} height="420" width="327" alt="productImg"/>
                        </div>
                        <div className="product-info">
                            <div className="product-text">
                                <div className="product-name">ชื่อสินค้า</div>
                                <h2>รายละเอียด</h2>
                                <p>more and more detail<br></br>more and more detail<br></br>more and more detail<br></br>more and more detail<br></br></p>
                            </div>
                            <div className="product-price-btn">
                                <p>799฿</p>
                                <a href="https://m.me/1681379355205829" target="_blank" rel="noopener noreferrer">สั่งซื้อทันที</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-card">
                    <div className="wrapper">
                        <div className="product-img">
                        <img src={"http://bit.ly/2tMBBTd"} height="420" width="327" alt="productImg" />
                        </div>
                        <div className="product-info">
                            <div className="product-text">
                                <div className="product-name">ชื่อสินค้า</div>
                                <h2>รายละเอียด</h2>
                                <p>more and more detail<br></br>more and more detail<br></br>more and more detail<br></br>more and more detail<br></br></p>
                            </div>
                            <div className="product-price-btn">
                                <p>799฿</p>
                                <a href="https://m.me/1681379355205829" target="_blank" rel="noopener noreferrer">สั่งซื้อทันที</a>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
        </div>
        );
    }
}

export default StorePage;