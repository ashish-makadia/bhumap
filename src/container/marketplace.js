import Header from "./header";
import MaterialCard from "../component/materialCard";

function Marketplace() {

const items = [
  { id: 1, name: "Tiles", title:"test1",description:"test description", image:"https://img.icons8.com/?size=100&id=21936&format=png&color=000000" },
  { id: 1, name: "Cement", title:"test1",description:"test description", image:"https://img.icons8.com/?size=100&id=FSU2NoyEB9uz&format=png&color=000000" },
  { id: 2, name: "Timber", title:"test1",description:"test description", image:"https://img.icons8.com/?size=100&id=6530&format=png&color=000000" },
  { id: 3, name: "Wood", title:"test1",description:"test description", image:"https://img.icons8.com/?size=100&id=BEB8PPSQeZIx&format=png&color=000000" },
  { id: 4, name: "Plywood", title:"test1",description:"test description", image:"https://img.icons8.com/?size=100&id=GsXSGKwhXkad&format=png&color=000000" },
  { id: 5, name: "Brick", title:"test1",description:"test description", image:"https://img.icons8.com/?size=100&id=u7VLUZ413KGF&format=png&color=000000" },
  { id: 6, name: "Glass", title:"test1",description:"test description", image:"https://icons.veryicon.com/png/o/commerce-shopping/e-commerce-icon-4/category-49.png" },
  { id: 6, name: "Sand", title:"test1",description:"test description", image:"https://icons.veryicon.com/png/o/commerce-shopping/e-commerce-icon-4/category-49.png" },
  { id: 6, name: "Stone", title:"test1",description:"test description", image:"https://img.icons8.com/?size=100&id=32185&format=png&color=000000" },
  { id: 6, name: "Mortar", title:"test1",description:"test description", image:"https://img.icons8.com/?size=100&id=31639&format=png&color=000000" },
  { id: 6, name: "Ceramic", title:"test1",description:"test description", image:"https://icons.veryicon.com/png/o/commerce-shopping/e-commerce-icon-4/category-49.png" },
  { id: 6, name: "Marble", title:"test1",description:"test description", image:"https://icons.veryicon.com/png/o/commerce-shopping/e-commerce-icon-4/category-49.png" },
  { id: 6, name: "Plaster", title:"test1",description:"test description", image:"https://icons.veryicon.com/png/o/commerce-shopping/e-commerce-icon-4/category-49.png" },
  { id: 6, name: "Paint", title:"test1",description:"test description", image:"https://img.icons8.com/?size=100&id=O9TF9KJi_P_w&format=png&color=000000" },
  { id: 6, name: "Granite", title:"test1",description:"test description", image:"https://icons.veryicon.com/png/o/commerce-shopping/e-commerce-icon-4/category-49.png" },
  { id: 6, name: "Limestone", title:"test1",description:"test description", image:"https://icons.veryicon.com/png/o/commerce-shopping/e-commerce-icon-4/category-49.png" },
  { id: 6, name: "POP", title:"test1",description:"test description", image:"https://icons.veryicon.com/png/o/commerce-shopping/e-commerce-icon-4/category-49.png" },
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
