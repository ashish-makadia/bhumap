import Header from "./header";
import MaterialCard from "../component/materialCard";

function Marketplace() {

  const items = [
    { id: 1, name: "Tiles", description: "description", image: "https://img.icons8.com/?size=100&id=21936&format=png&color=000000" },
    { id: 2, name: "Cement", description: "description", image: "https://img.icons8.com/?size=100&id=FSU2NoyEB9uz&format=png&color=000000" },
    { id: 3, name: "Timber", description: "description", image: "https://img.icons8.com/?size=100&id=6530&format=png&color=000000" },
    { id: 4, name: "Wood", description: "description", image: "https://img.icons8.com/?size=100&id=BEB8PPSQeZIx&format=png&color=000000" },
    { id: 5, name: "Plywood", description: "description", image: "https://img.icons8.com/?size=100&id=GsXSGKwhXkad&format=png&color=000000" },
    { id: 6, name: "Brick", description: "description", image: "https://img.icons8.com/?size=100&id=u7VLUZ413KGF&format=png&color=000000" },
    { id: 7, name: "Glass", description: "description", image: "https://icons.veryicon.com/png/o/commerce-shopping/e-commerce-icon-4/category-49.png" },
    { id: 8, name: "Sand", description: "description", image: "https://icons.veryicon.com/png/o/commerce-shopping/e-commerce-icon-4/category-49.png" },
    { id: 9, name: "Stone", description: "description", image: "https://img.icons8.com/?size=100&id=32185&format=png&color=000000" },
    { id: 10, name: "Mortar", description: "description", image: "https://img.icons8.com/?size=100&id=31639&format=png&color=000000" },
    { id: 11, name: "Ceramic", description: "description", image: "https://icons.veryicon.com/png/o/commerce-shopping/e-commerce-icon-4/category-49.png" },
    { id: 12, name: "Marble", description: "description", image: "https://icons.veryicon.com/png/o/commerce-shopping/e-commerce-icon-4/category-49.png" },
    { id: 13, name: "Plaster", description: "description", image: "https://icons.veryicon.com/png/o/commerce-shopping/e-commerce-icon-4/category-49.png" },
    { id: 14, name: "Paint", description: "description", image: "https://img.icons8.com/?size=100&id=O9TF9KJi_P_w&format=png&color=000000" },
    { id: 15, name: "Granite", description: "description", image: "https://icons.veryicon.com/png/o/commerce-shopping/e-commerce-icon-4/category-49.png" },
    { id: 16, name: "Limestone", description: "description", image: "https://icons.veryicon.com/png/o/commerce-shopping/e-commerce-icon-4/category-49.png" },
    { id: 17, name: "POP", description: "description", image: "https://icons.veryicon.com/png/o/commerce-shopping/e-commerce-icon-4/category-49.png" },
  ];

  return (
    <>
      <Header />
      <h1 className="heading">A WIDE RANGE OF BUILDING MATERIALS</h1>
      <main class="card-container">
        {items.map((item) => (
          <MaterialCard category={item} />
        ))}
      </main>
    </>
  );
}

export default Marketplace;
