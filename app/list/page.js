

export default function List() {
  let 상품=['Tomatoes','Pasta','Coconut']

  return (
    <div>
      <h2 className="title">상품목록</h2>
      {
        상품.map((ele,idx)=>{
          return(
            <div className="food" key={idx}>
              <img src={`/food${idx}.png`}
               className="food-img"/>
            <h4>상품 {ele } $50</h4>
          </div>
          )
        })
      }
    </div>
  )
}
