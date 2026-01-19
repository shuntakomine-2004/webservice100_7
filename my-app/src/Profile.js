function Profile(props) {
  return (
    <div>
      <h2>自己紹介</h2>
      <p>名前：{props.name}</p>
      <p>年齢：{props.age}歳</p>
    </div>
  );
}

export default Profile;
