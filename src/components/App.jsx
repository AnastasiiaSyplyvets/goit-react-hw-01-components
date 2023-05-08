import {UserCard} from './UserProfile/userprofile';
import {Statistics} from './Statistics/Statistics';
import {FriendList} from './FriendList/FriendList';
import {TransactionHistory} from './Transactions/TransactionHistory';
import user from '../../src/user.json';
import data from '../../src/data.json';
import friends from '../../src/friends.json';
import transactions from '../../src/transactions.json';

export const App = () => {
  return (
    <>
    <UserCard
avatar={user.avatar}
username={user.username}
tag={user.tag}
location={user.location}
followers={user.stats.followers}
views={user.stats.views}
likes={user.stats.likes}
    />
    <Statistics
    stats={data}
    />

    <FriendList
    friends={friends}
    />

    <TransactionHistory
    items={transactions} 
    />
    </>
  );
};

// console.log(items)