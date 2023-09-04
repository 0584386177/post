import React from "react";
import PostMainItem from "./postMainItem.js";
import Styles from './post-main.module.css'
const title = "HƯỚNG DẪN LẬP TRÌNH CƠ BẢN ĐẾN NÂNG CAO"
const postMain = ()=>{
    return (
        <div className={`${Styles.postMain}`}>
            <h1 className={`${Styles.postMain_title}`}>
               {title}
            </h1>
            <PostMainItem
                title = "Hướng dẫn học React Js"
                imageSrc = "https://cdn.dribbble.com/userupload/9752361/file/original-6fb41aff241286b455f094b4db9283fe.png?resize=1024x1024"
                description = "Hướng dẫn học React.js, nội dung bài học đơn giản, khoa học giúp bạn cài đặt, làm quen với các nội dung của React.js một cách nhanh chóng và dễ hiểu nhất."
                more = "READ MORE"

            />
            <PostMainItem
                title = "Hướng dẫn học Javascript"
                imageSrc ="https://cdn.dribbble.com/userupload/9771015/file/original-162793ba6ff5c89d3fb30a3a95328117.jpg?resize=1024x1024"
                description = "Hướng dẫn học React.js, nội dung bài học đơn giản, khoa học giúp bạn cài đặt, làm quen với các nội dung của React.js một cách nhanh chóng và dễ hiểu nhất."
                more = "READ MORE"
            />
            <PostMainItem
                title = "Hướng dẫn học PHP"
                imageSrc = "https://cdn.dribbble.com/userupload/9751058/file/original-eb5d9ec952f0b30ece8ac1a92ee0fae5.jpg?resize=1024x1367"
                description = "Hướng dẫn học React.js, nội dung bài học đơn giản, khoa học giúp bạn cài đặt, làm quen với các nội dung của React.js một cách nhanh chóng và dễ hiểu nhất."
                more = "READ MORE"            

            />
            <PostMainItem
                title = "Hướng dẫn học Java Spring Boot"
                imageSrc = "https://cdn.dribbble.com/userupload/9744554/file/original-d94c4f9eda8827302083ea2c7594814e.jpg?resize=1024x768"
                description = "Hướng dẫn học React.js, nội dung bài học đơn giản, khoa học giúp bạn cài đặt, làm quen với các nội dung của React.js một cách nhanh chóng và dễ hiểu nhất."
                more = "READ MORE"
            />
            <PostMainItem
                title = "Hướng dẫn học C++"
                imageSrc ="https://cdn.dribbble.com/userupload/9749492/file/original-ae759bc4600c44b60e76c4a88d622c5b.jpg?resize=1024x782"
                description = "Hướng dẫn học React.js, nội dung bài học đơn giản, khoa học giúp bạn cài đặt, làm quen với các nội dung của React.js một cách nhanh chóng và dễ hiểu nhất."
                more = "READ MORE"
            />

        </div>
    );
}

export default postMain;