import React from 'react';
import BookDetailImage from "../../Images/book_detail.jpg";
import Title from "../Compornents/Title";


export default function BookDetail() {
    return (
        <div className="flex justify-center" style={{gap:"60px"}}>
            <div className="w-full">
                <img className="object-cover w-full h-full max-h-80" src={BookDetailImage} alt="book detail" />
            </div>
            <div className="w-full">
                <Title text="BookTitle" />
                {/* Book info */}
                <div className="my-3 py-3 border-y border-gray-200 text-sm">
                    <div className="flex">
                        <div className="w-16">著書</div>
                        <div className="flex-none">小沢 諭吉丸</div>
                    </div>
                    <div className="flex">
                        <div className="w-16">出版社</div>
                        <div className="flex-none">エメラルド社</div>
                    </div>
                    <div className="flex">
                        <div className="w-16">発行年</div>
                        <div className="flex-none">2023/06/31</div>
                    </div>
                </div>
                <div className="text-sm">
                    本の詳細はコチラに記載されております。テキストテキスト...
                </div>
                <div className="text-sm" style={{marginTop:"20px"}}>
                    <a className="border-b border-gray-900" href="#">オンラインストアで見る</a>
                </div>
            </div>
        </div>
    )
}
