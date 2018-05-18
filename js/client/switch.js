import React from 'react';
import styles from '../../sass/components/switch.scss';

const Switch = ({ on, toggle }) => (
  <div className="switch">
    <button
      className={`btn ${on ? 'btn-on' : 'btn-off'}`}
      onClick={toggle}
    />
  </div>);

module.exports = Switch;
