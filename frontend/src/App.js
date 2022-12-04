
import GetCategory from "./components/GetCategory";
import CreateCategory from "./components/CreateCategory";
import CreateItem from "./components/CreateItem";
 function App() {
  
  return (
    <div className="font=extrabold bg-yellow-500 text-center">
      <div className="flex flex-row justify-around ">
        <div>
              <CreateCategory />
        </div>
        <div >
              <CreateItem />
        </div>
      </div>
      <div>
          <GetCategory />
      </div>
    </div>
  );
}

export default App;
