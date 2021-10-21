import './App.css';
import imageInSrc from "./imageInSrc.jpg"
import './Style.css'
function App() {
  return (
  <div>
 
 <div style = {{border: "solid 1px black", maxWidth: "100vw"}}>

<h1 className = "title red"> Amira </h1>



<img className="image1" src = { imageInSrc} alt='imageInSrc'/> 



<img className="image2" src = "/imageInPublic.jpg" alt="imageInPublic.jpg"/> 

</div>
<video className="video1" width="750" height="500" controls >
      <source src="/myVideo.mp4" type="video/mp4"/>
</video>


    </div>
  );
};



export default App;