import styles from './FriendListItem.module.css';
import propTypes from 'prop-types';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <li className={styles.item}>
        <span className={isOnline ? styles.online : styles.offline}>
          {isOnline}
        </span>
        <img
          className={styles.avatar}
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className={styles.name}>{name}</p>
      </li>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
};

export default FriendListItem;
