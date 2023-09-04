import React from "react";
import PostNewItem from "./postNewItem";
import  Styles from "./side-bar.module.css"
const postNew = ()=>{
    return(
        <div className={`${Styles.postNew}`}>
            <h3 className={`${Styles.postNew_title}`}>BÀI VIẾT MỚI</h3>
            <PostNewItem
                imageSrc = "https://cdn.dribbble.com/userupload/9778421/file/original-8a054951f3064fd64f9fc5820e5ac92e.png?resize=752x"
                title = "Kinh nghiệm học lập trình hiệu quả"
                description = "Khóa học “Lập trình cơ bản” nhằm cung cấp kiến thức cơ bản."

            />
           <PostNewItem
                imageSrc = "https://cdn.dribbble.com/userupload/9776761/file/original-0d4f51080f74283291310f3b4b5d46fc.jpg?resize=1024x767"
                title = "Kinh nghiệm học lập trình hiệu quả"
                description = "Khóa học “Lập trình cơ bản” nhằm cung cấp kiến thức cơ bản."

            />
            <PostNewItem
                imageSrc = "https://cdn.dribbble.com/userupload/9778885/file/original-8956ea28b1df36ea2d28d25034b2e248.jpg?resize=1024x768"
                title = "Kinh nghiệm học lập trình hiệu quả"
                description = "Khóa học “Lập trình cơ bản” nhằm cung cấp kiến thức cơ bản."

            />
            <PostNewItem
                imageSrc = "https://cdn.dribbble.com/userupload/9776835/file/original-d705eed88a6f9422017be7c22a356c90.jpg?resize=1024x748"
                title = "Kinh nghiệm học lập trình hiệu quả"
                description = "Khóa học “Lập trình cơ bản” nhằm cung cấp kiến thức cơ bản."

            />
            <PostNewItem
                imageSrc = "https://cdn.dribbble.com/userupload/9779086/file/original-912b3612e21142dec01b2fc41a759f99.jpg?resize=1024x768"
                title = "Kinh nghiệm học lập trình hiệu quả"
                description = "Khóa học “Lập trình cơ bản” nhằm cung cấp kiến thức cơ bản."

            />

        </div>

    );
}

export default postNew;