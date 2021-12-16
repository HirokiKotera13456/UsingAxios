import "./styles.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

const user = {
  id: 1,
  name: "じゃけぇ",
  email: "1234@aaa.com",
  address: "ADDRESS"
};

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  const onClickFeatchUser = () => getUsers();
  return (
    <div className="App">
      <button onClick={onClickFeatchUser}>データ取得</button>
      <br />
      {error ? (
        <p>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}

      <UserCard user={user} />
    </div>
  );
}
