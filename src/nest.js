import React from "react";


const Nested = (props) => {
  const ninjas = props.ninjas;
  const deleteNinja = props.deleteNinja;




  const ninjaList = ninjas.map(ninja => {

    return (

      <div className="nested" key={ninja.id}>
        <div> Name:{ninja.name}</div>
        <div> Name:{ninja.age}</div>
        <div> Belt:{ninja.belt}</div>
        <button onClick={() => { deleteNinja(ninja.id) }}>DeleteNinja</button>

      </div>
    )
  });





  return (
    <div className="list-ninjs" >
      {ninjaList}

    </div>

  );

}


export default Nested;
