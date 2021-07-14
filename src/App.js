import React from 'react'
import New from '../src/new'
import Change from '../src/change'
export default function App() {
  return (
    <div>
      <New />

    </div>
  )
}




// import { Radio } from '@material-ui/core';
// import React, { useState } from 'react';

// export default function App() {
//   const [gender, setGender] = useState([
//     { key: "Get More Shampoo", status: "incomplete" },
//     { key: "Drink More Cofee", status: "incomplete" },
//   ]);

//   const handle = () => {
//     setGender([...gender, { status: 'complete' }])
//   }
//   console.log("gender", gender)
//   return (
//     <>
//       <label>Gender</label>
//       <Radio label="Complete" checked={gender === 'Complete'} value="Complete" onClick={() => handle()} />
//       {/* <Radio label="InComplete" checked={gender === 'InComplete'} value="InComplete" onClick={() => setGender('InComplete')} /> */}
//     </>
//   );
// }