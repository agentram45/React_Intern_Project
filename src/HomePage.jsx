import styles from './HomePage.module.css';

const HomePage = ({pages, pages3}) => {
    return(
        <>
          <div className= {styles.fullpage1}>
            <div className= {styles.mainpage1}>
                <div className= {styles.content1}>
                    <div className= {styles.heading1}>
                        <h2>Welcome to PopX</h2>
                    </div>
                    <div className= {styles.text1}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </div>
                    <button className= {styles.btn1} onClick={() => pages3(true)}>Create Account</button>
                    <button className= {styles.btn2} onClick={() => pages(true)}>Already Registered? Login</button>
                </div>
            </div>
          </div>
        </>
    )
}

export default HomePage;