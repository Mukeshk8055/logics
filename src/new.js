import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import { Typography, IconButton, Divider, Button, Radio, TextField, Checkbox } from '@material-ui/core';
import { Add, Check, SettingsRemoteSharp } from '@material-ui/icons';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function New() {
    const [state, setstate] = useState('');
    const [item, setitem] = React.useState([
        { id: 1, key: "Get More Shampoo", status: false, },
        { id: 2, key: "Drink More Cofee", status: true },
        { id: 3, key: "Sleep Less", status: false },
    ]);

    const incomplete =
        item.filter(b => {
            if (b.status == false) {
                return b;
            }
        })

    const complete =
        item.filter(a => {
            if (a.status == true) {
                return a;
            }
        })


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handle = () => {
        setitem([...item, { id: Math.floor(Math.random() * 100 + 1), key: state, 
            status: false }])
        setstate('')
    }
    const handleClose = () => {
        setOpen(false);
    };

    const click = (a) => {
        const newitem = item.map((i, id) => {
            return id === a ? { ...i, status: !i.status } : { ...i }
        });
        setitem(newitem);
    }

    console.log("item", item)
    return (
        <div style={{ background: "black", height: "100vh" }}>
            <Card style={{
                width: '800px', flexDirection: 'column', marginTop: '10px', paddingTop: '10px',
                height: '600px', justifyContent: 'center', display: 'flex', alignItems: 'center',
                margin: 'auto', position: "relative", background: 'black'
            }}>

                <div style={{ background: "#4357FF", width: "100%", height: "55%" }}>
                    <Typography style={{
                        fontSize: "32px", textAlign: "center", color: "white",
                        marginTop: "100px", fontWeight: 'bold'
                    }}>Todo</Typography>
                </div>
                <div style={{ background: "#3746AF", width: "100%", height: "45%" }}></div>
                <Card style={{
                    position: "absolute", width: "500px", height: "300px",
                    justifyContent: "center", alignItems: "center"
                }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography style={{
                            color: 'grey', fontSize: '18px', padding: '10px',
                            marginLeft: '5px'
                        }}>
                            Create Some Tasks...
                        </Typography>
                        <IconButton style={{
                            color: 'white',
                            background: "#4357FF", width: '35px', height: '35px',
                            marginTop: '7px',
                            marginRight: '20px', padding: '15px', marginBottom: '8px'
                        }} ><Add onClick={() => { handleClickOpen() }} style={{ fontSize: '18px' }} />
                        </IconButton>
                    </div>
                    <Divider></Divider>
                    <div style={{ padding: '10px', display: "flex", flexDirection: "row", marginLeft: '6px' }}>
                        <div style={{
                            background: '#00A7F7', color: 'white', width: '68px', height: '18px',
                            fontSize: '10px', textAlign: "center", borderRadius: "4px", fontWeight: "bold",
                            marginRight: '5px', paddingTop: '4px'
                        }}>
                            All Tasks : {item.length}</div>
                        <div style={{
                            background: '#F33A6D', color: 'white', width: '75px', height: '18px',
                            fontSize: '10px', textAlign: "center", borderRadius: "4px", fontWeight: "bold",
                            marginRight: '5px', paddingTop: '4px'
                        }}>
                            Incomplete : {incomplete.length}</div>
                        <div style={{
                            background: '#25B499', color: 'white', width: '70px', height: '18px',
                            fontSize: '10px', textAlign: "center", borderRadius: "4px", fontWeight: "bold",
                            marginRight: '5px', paddingTop: '4px'
                        }}
                            size="small">
                            Complete : {complete.length}</div>
                    </div>
                    <Divider></Divider>

                    {
                        item.map((a, id) => (
                            <>
                                <div style={{
                                    display: 'flex', flexDirection: 'row',
                                    overflow: 'auto'
                                }}>
                                    {a.status === false ?
                                        <input type="radio" onChange={() => click(id)}
                                            style={{ margin: "0.8rem",  }} />

                                        : <Check style={{ fontSize: "14px", margin: "0.8rem", 
                                        color: "darkgreen" }} />}
                                    <Typography style={{ padding: '5px', fontSize: '18px',
                                 }}>
                                        {a.key}</Typography>
                                </div>
                                <Divider></Divider>
                            </>
                        ))
                    }

                    {/* <div style={{
            display: 'flex', flexDirection: 'row', padding: '0px', marginTop: '0px'
          }}>
            {<Radio size='small' style={{color:'grey',
              marginLeft: '8px', fontSize: '10px',marginTop:"5px",
              width: '10px', height: '10px',padding:'11px'
            }} />}
            <Typography style={{
              color: 'grey', padding: '5px', fontSize: '16px',
              marginTop: '4px',marginLeft:'0px'
            }}>
              Get More Shampoo</Typography>
          </div>
          <Divider></Divider>
          <div style={{
            padding: '5px', display: 'flex', flexDirection: 'row',
            background: '#F5F5F5'
          }}>
            {<Check style={{ color: 'green', marginLeft: '10px', marginTop: '5px',
             fontSize: '18px' }} />}
            <Typography style={{
              color: 'lightgrey', padding: '2px',
              fontSize: '16px', marginLeft: '10px'
            }}>
              Drink More Coffee
            </Typography>
          </div>
          <Divider></Divider>
          <div style={{
            padding: '5px', display: 'flex', flexDirection: 'row',
            background: '#F5F5F5'
          }}>
            {<Check style={{ color: 'green', marginLeft: '10px', marginTop: '5px', fontSize: '18px' }} />}
            <Typography style={{
              color: 'lightgrey', padding: '3px', marginLeft: '10px',
              fontSize: '16px'
            }}>Sleep Less</Typography>
          </div>
          <Divider></Divider>
  */}
                    <div>
                        <Typography style={{
                            color: 'grey', padding: '4px', textAlign: 'center',
                            fontSize: '16px', marginTop: '9px'
                        }}>
                            Clear Completed Tasks</Typography>
                    </div>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{"Add Tasks"}</DialogTitle>
                        <DialogContent>
                            <TextField label="Enter the Tasks" variant="filled" size="small" value={state}
                                style={{ width: "300px" }} onChange={(e) => setstate(e.target.value)} />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => { handle(); handleClose() }} color="primary"
                                variant="contained">Add</Button>
                        </DialogActions>
                    </Dialog>
                </Card>
            </Card>
        </div>
    );
}
export default New;
