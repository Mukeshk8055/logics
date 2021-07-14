// import React, { useState } from 'react'
// import Card from '@material-ui/core/Card';
// import { Typography, IconButton, Divider, Button, Radio, TextField } from '@material-ui/core';
// import { Add, Check } from '@material-ui/icons';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogTitle from '@material-ui/core/DialogTitle';

// function App() {
//   const [state, setstate] = useState('');  
//   const [item, setitem] = React.useState([
//     { key: "Get More Shampoo",status:"incomplete"},
//     { key: "Drink More Cofee",status:"incomplete" },
//     { key: "Sleep Less",status:"incomplete" },
//   ]);
//   const [open, setOpen] = React.useState(false);
//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handle = () => {
//     setitem([...item, { key: state }])
//     setstate('')
//   }
//   const handleClose = () => {
//     setOpen(false);
//   };
//   return (
//     <div style={{ background: "black", height: "100vh" }}>
//       <Card style={{
//         width: '800px', flexDirection: 'column', marginTop: '10px', paddingTop: '10px',
//         height: '600px', justifyContent: 'center', display: 'flex', alignItems: 'center',
//         margin: 'auto', position: "relative", background: 'black'
//       }}>

//         <div style={{ background: "#4357FF", width: "100%", height: "55%" }}>
//           <Typography style={{
//             fontSize: "30px", textAlign: "center", color: "white",
//             marginTop: "100px"
//           }}>Todo</Typography>
//         </div>
//         <div style={{ background: "#3746AF", width: "100%", height: "45%" }}></div>
//         <Card style={{
//           position: "absolute", width: "450px",
//           justifyContent: "center", alignItems: "center"
//         }}>
//           <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
//             <Typography style={{ color: 'grey', fontSize: '18px', padding: '10px' }}>
//               Create Some Tasks...
//             </Typography>
//             <IconButton style={{
//               color: 'white',
//               background: "#4357FF", width: '35px', height: '35px',
//               marginTop: '7px',
//               marginRight: '20px', padding: '15px'
//             }} ><Add onClick={() => { handleClickOpen() }} style={{ fontSize: "18px" }} />
//             </IconButton>
//           </div>
//           <Divider></Divider>
//           <div style={{ padding: '10px', display: "flex", flexDirection: "row" }}>
//             <div style={{
//               background: '#00A7F7', color: 'white', width: '78px', height: '14px',
//               fontSize: '10px', textAlign: "center", borderRadius: "4px", fontWeight: "bold",
//               marginRight: '5px', paddingTop: '5px'
//             }}>
//               All Tasks : {item.length}</div>
//             <div style={{
//               background: '#F33A6D', color: 'white', width: '78px', height: '14px',
//               fontSize: '10px', textAlign: "center", borderRadius: "4px", fontWeight: "bold",
//               marginRight: '5px', paddingTop: '5px'
//             }}>
//               Incomplete:1</div>
//             <div style={{
//               background: '#25B499', color: 'white', width: '78px', height: '14px',
//               fontSize: '10px', textAlign: "center", borderRadius: "4px", fontWeight: "bold",
//               marginRight: '5px', paddingTop: '5px'
//             }}
//               size="small">
//               Complete:2</div>
//           </div>
//           <Divider></Divider>
//           {item.map(item => (
//             <>
//               <div style={{
   
//                 display: 'flex', flexDirection: 'row', padding: '0px', marginTop: '0px',
//                 overflow:"auto"
//               }}>
//                 {<Radio style={{ marginLeft: '4px' }} />}
//                 <Typography style={{color: 'grey', padding: '5px', fontSize: '16px',
//                 marginTop: '4px'
//                 }}>
//                   {item.key}
//                 </Typography>
//               </div>
//               <Divider></Divider></>
//           ))}

//           {/* <div style={{
//             padding: '5px', display: 'flex', flexDirection: 'row',
//             background: '#F5F5F5'
//           }} >
//             {<Check style={{
//               color: 'green', marginLeft: '10px', fontSize: '18px',
//               marginTop: '5px'
//             }} />}
//             <Typography style={{
//               color: 'lightgrey', padding: '2px',
//               fontSize: '16px', marginLeft: '10px'
//             }}>
//               Drink More Coffee
//             </Typography>
//           </div> */}
//           {/* <Divider></Divider>
//           <div style={{
//             padding: '5px', display: 'flex', flexDirection: 'row',
//             background: '#F5F5F5'
//           }}>
//             {<Check style={{ color: 'green', marginLeft: '10px', marginTop: '5px', fontSize: '18px' }} />}
//             <Typography style={{
//               color: 'lightgrey', padding: '3px', marginLeft: '10px',
//               fontSize: '16px'
//             }}>Sleep Less</Typography>
//           </div>
//           <Divider></Divider> */}
//            {/* {
//             item.map(a => (
//               <>
//                 <div style={{ display: 'flex', flexDirection: 'row' }}>
//                   <Radio />
//                   <Typography style={{ padding: '5px', fontSize: '18px', }}>
//                     {a.key[0]}</Typography>
//                 </div>
//                 <Divider></Divider>
//               </>
//             ))
//           }  */}
//           <div>
//             <Typography style={{
//               color: 'grey', padding: '8px', textAlign: 'center',
//               fontSize: '16px', marginTop: '3px'
//             }}>
//               Clear Completed Tasks</Typography>
//           </div>
//           <Dialog
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="alert-dialog-title"
//             aria-describedby="alert-dialog-description"
//           >
//             <DialogTitle id="alert-dialog-title">{"Add Tasks"}</DialogTitle>
//             <DialogContent>
//               <TextField label="Enter the Tasks" variant="filled" size="small" value={state}
//                 style={{ width: "300px" }} onChange={(e) => setstate(e.target.value)} />
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={() => { handle(); handleClose() }} color="primary"
//                 variant="contained">Add</Button>
//             </DialogActions>
//           </Dialog>
//         </Card>
//       </Card>


//     </div>
//   );
// }
// export default App
