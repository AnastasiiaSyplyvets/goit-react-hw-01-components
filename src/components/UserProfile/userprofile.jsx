import PropTypes from 'prop-types';
import css from './UserProfile.module.css';

export const UserCard = (props)=> {

    const {avatar, username, tag, location, followers, views, likes } = props;
return (

<div className={css.profile}>

<div className={css.description}>
  <img
    src={avatar}
    alt={username}
    className={css.image}
  />
  <p className={css.userName}>{username}</p>
  <p className={css.tag}>@{tag}</p>
  <p className={css.location}>{location}</p>
</div>

<ul className={css.stats}>
  <li className={css.listItem}>
    <span className={css.label}>Followers</span>
    <span className={css.quantity}> {followers}</span>
  </li>
  <li className={css.listItem}>
    <span className={css.label}>Views</span>
    <span className={css.quantity}> {views}</span>
  </li>
  <li className={css.listItem}>
    <span className={css.label}>Likes</span>
    <span className={css.quantity}> {likes}</span>
  </li>
</ul>

</div>)};

console.log(UserCard)

UserCard.propTypes ={
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
}
