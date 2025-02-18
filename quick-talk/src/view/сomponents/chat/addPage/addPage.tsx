import Search from '@/view/ui/search/search';
import style from './addPage.module.scss';
import AddUser from '../addUser/addUser';
import { fetchAllUsers } from '@/actions/server-actions';

const AddPage = async () => {
  const users = await fetchAllUsers();

  return (
    <div className={style.addPage__container}>
      <div className={style.addPage__search_wrapper}>
        <Search placeholder="Search new friend..." />
      </div>
      <div className={style.addPage__users_list}>
        {users?.map((user) => {
          return (
            <AddUser key={user.uid} uid={user.uid} username={user.nickname} />
          );
        })}
      </div>
    </div>
  );
};

export default AddPage;
