function FruitList() {
  const fruits = ["りんご", "バナナ", "オレンジ","マンゴー", "ぶどう"];

  return (
    <div>
      <h2>果物リスト</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
