import {UserCard} from './UserProfile/userprofile';
import {Statistics} from './Statistics/Statistics';
import {FriendList} from './FriendList/FriendList';
import {TransactionHistory} from './Transactions/TransactionHistory';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
    <UserCard
avatar={user.avatar}
username={user.username}
tag={user.tag}
location={user.location}
stats={user.stats}
    />
    <Statistics title="Upload stats"
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