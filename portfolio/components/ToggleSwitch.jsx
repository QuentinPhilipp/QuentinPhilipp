import {useState} from 'react';
import styles from "../styles/ToggleSwitch.module.css";

const ToggleSwitch = ({ isOn, handleToggle, checkedText, uncheckedText }) => {
    return (
      <div className={styles.buttonContainer}>
        <input
          checked={isOn}
          onChange={handleToggle}
          className={styles.switchCheckbox}
          id={`react-switch`}
          type="checkbox"
        />
        <label
          style={{ background: isOn && '#e99b26' }}
          className={styles.switchLabel}
          htmlFor={`react-switch`}
        />
        <div className={styles.detailText}>{isOn ? checkedText : uncheckedText}</div>
      </div>
    );
  };
  
  export default ToggleSwitch;