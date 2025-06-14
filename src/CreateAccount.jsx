import styles from './CreateAccount.module.css';

const CreateAccount = ({ pages2 }) => {

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page reload
    pages2(true); // navigate only if validation passes
  }

  return (
    <>
      <div className={styles.fullpage4}>
        <div className={styles.mainpage4}>
          <div className={styles.content4}>
            <div className={styles.heading4}>
              <h3>Create your PopX account</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.top1}>
                <input type="text" className={styles.inp4} placeholder="Enter Name" required />
              </div>
              <div className={styles.top2}>
                <input type="text" className={styles.inp5} placeholder="Phone Number" required />
              </div>
              <div className={styles.top3}>
                <input type="email" className={styles.inp6} placeholder="Email Address" required />
              </div>
              <div className={styles.top4}>
                <input type="password" className={styles.inp7} placeholder="Password" required />
              </div>
              <div className={styles.top5}>
                <input type="text" className={styles.inp8} placeholder="Company Name" />
              </div>
              <div className={styles.tickbox}>
                <p>Are you an agency? </p>
                <div className={styles.radioGroup}>
                  <label>
                    <input type="radio" name="agency" value="yes" required style={{ marginTop: '10px', transform: 'scale(1.5)' }} /> &nbsp;
                    Yes
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <label>
                    <input type="radio" name="agency" value="no" style={{ marginTop: '10px', transform: 'scale(1.5)' }} /> &nbsp;
                    No
                  </label>
                </div>
              </div>
              <button className={styles.btn5} type="submit">Create Account</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
