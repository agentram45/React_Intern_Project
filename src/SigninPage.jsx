import styles from './SigninPage.module.css';

const SigninPage = ({pages, pages2}) => {
    
    return (
        <> 
          <div className= {styles.fullpage2}>
            <div className= {styles.mainpage2}>
                <div className= {styles.heading2}>
                    <p>Signin to your PopX account</p>
                </div>
                <div className= {styles.text2}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                </div>
                <div className= {styles.inputs}>
                    <input type="text" className= {styles.inp1} placeholder='Enter email address'/>
                    <input type="password" className= {styles.inp2} placeholder='Enter password'/>
                </div>
                <button className= {styles.btn3} onClick={() => {pages2(true)}}>Login</button>
                <button className= {styles.btn4} onClick={() => {pages(false)}}>Back to home page</button>
            </div>
          </div>
        </>
    ) 
}

export default SigninPage;