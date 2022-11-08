import { useEffect, useState } from "react";
import { get_users } from "./AxiosRequest";
import Card from "./Cards";
function Github() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("KKshakya");
  const url = "https://api.github.com/search/users";
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUsers(url, name, page);
    setPage(1);
  };

  useEffect(() => {
    setLoading(true);
    fetchUsers(url, name, page);
  }, [page]);

  const fetchUsers = (url, name, page) => {
    get_users(url, name, page)
      .then((res) => {
        if (res) {
          setData(res.data.items);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(true);
      });
  };

  if (loading) return <h1>Fetching users...</h1>;

  console.log(name);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter user name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>

      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      {page}
      <button disabled={page === 5} onClick={() => setPage(page + 1)}>
        Next
      </button>

      <div style={{ width: "40%", margin: "0 auto" }}>
        <h1>Hello Github users</h1>
        {data.map((item) => (
          <Card key={item.id} img={item.avatar_url} user_name={item.login} />
        ))}
      </div>
    </>
  );
}

export default Github;
