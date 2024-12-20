import { Image } from "react-bootstrap";


const MaterialCard = ({ category }) => {
    return (
      <>
      <div className="card">
      <h2>{category.name}</h2>
      <p class="symbol"><img style={{width:"100px"}} src={category.image} alt=""/></p>
      <p>{category.description}</p>
      </div>
      {/* <article class="card">
                <div class="card__img">
                    <img src={category.image} alt=""/>
                </div>
                <div class="card__precis">
                    <div>
                        <span class="card__preci">{category.description}</span>
                    </div>
                </div>
                <div class="card__name">
                    <p>{category.name}</p>
                </div>
            </article> */}
        {/* <div className="card">
        <img src={category.image} alt={category.title} className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{category.title}</h3>
          <p className="card-description">{category.description}</p>
          <button className="card-button">View Products</button>
        </div>
      </div> */}
      {/* <div key={item.id} className="grid-item">
      <Image
            src="https://icons.veryicon.com/png/o/commerce-shopping/e-commerce-icon-4/category-49.png"
            alt={item.name}
            width={40}
            height={40}
          />
      {item.name}
    </div> */}
    </>
    );
  };

  export default MaterialCard;