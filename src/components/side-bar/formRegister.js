import React from 'react'
import Styles from './side-bar.module.css'
function FormRegister() {
    return (
      <div className={Styles.FormRegister} >
        <h1 className={`${Styles.register_title}`}>ĐĂNG KÍ NHẬN BÀI VIẾT MỚI</h1>
        <p className={`${Styles.register_review}`}>Công nghệ đang dần thay đổi nhanh chóng, hãy cùng vươn ra thế giới với những bài viết chất lượng.</p>
        <form className= {Styles.register_form}>
          <input type='text' placeholder='Tên của bạn' className={`${Styles.input} ${Styles.register_form_user} `} ></input>
          <input type='text' placeholder='Email của bạn' className={`${Styles.register_form_email} ${Styles.input}`}></input>
        <button className={`${Styles.input} ${Styles.register_form_submit}`}>ĐĂNG KÝ</button>
       </form>
      </div>
    );
  }
  export default FormRegister;