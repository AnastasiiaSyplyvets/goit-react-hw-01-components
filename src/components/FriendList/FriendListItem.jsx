import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';


export const FriendListItem=(props)=> {
    const {avatar, name, isOnline } = props;
    return (
        <li className={css.item}>
  <span className={`${css.status} ${css[isOnline]} `}>{isOnline}</span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
</li>
    )
}

FriendListItem.propTypes ={
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
}

