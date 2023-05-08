import PropTypes from 'prop-types';

export const FriendListItem=(props)=> {
    // const {avatar, name, isOnline } = props;
    return (
        <li class="item">
  <span class="status">{props.isOnline}</span>
  <img class="avatar" src={props.avatar} alt="User avatar" width="48" />
  <p class="name">{props.name}</p>
</li>
    )
}

FriendListItem.propTypes ={
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
}