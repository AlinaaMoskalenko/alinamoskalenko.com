import React from 'react';
import PropTypes from 'prop-types';

import styles from './skill-bar.module.scss';

const SkillBar = ({ skills }) => {
    const skillsBlock = skills.map(({ value, label }) => (
        <div key={label} className={styles.skillsBar}>
            <div className={styles.topBlock}>
                <span className={styles.skillValue}>{value}%</span>
                <label className={`${styles.skillLabel} ${styles.mob}`}>{ label }</label>
            </div>
            <div className={styles.bottomBlock}>
                <div className={styles.skillBg}>
                    <div className={styles.skillLine} style={{'width': `${value}%`}}></div>
                </div>
                <label>{ label }</label>
            </div>
        </div>
    ));

    return skillsBlock;
};

SkillBar.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    })).isRequired
};

export default SkillBar;