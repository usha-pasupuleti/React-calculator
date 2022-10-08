import { CardContent ,Card,Box,Stack,Button, TextField} from '@mui/material'
import { useReducer, useState } from 'react'
import React  from 'react'
import { clear } from '@testing-library/user-event/dist/clear';
import { Calculate } from '@mui/icons-material';





export default function Calculator() {

    const [result,setResult]=useState('');

    const handleClick =(e) =>{
        setResult(result.concat(e.target.name))

    }

    const clear= ()=>{
        setResult("");
    }

    const backSpace=()=>{
        setResult(result.slice(0, result.length-1))

    }

    const Calculate = () =>{
        try {

        setResult(eval(result).toString())
        } catch(error) {
            setResult("error")
        }
    }
   
  return (
    <div>

        <Stack sx={{ display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',marginTop:"7%"}}>

    <Card sx={{width:"450px" ,height:"550px" ,border:"1px solid black",borderRadius:"15px",backgroundColor:"black"}}>

        <Card sx={{width:"450px",height:"150px",borderBottom:"1px solid black",textAlign:"right",fontSize:"25px",justifyContent:"space-around",display:"flex",backgroundColor:"#d9d9d9"}}
        >{result}
        
               </Card>
        
    
        <Box spacing={2} sx={{marginTop:"30px",direction:"row"}}>
         <Button variant='contained' sx={{width:"170px",marginRight:"20px"}} onClick={clear}>Clear</Button>
         <Button variant='contained' color='error' sx={{width:"170px"}} onClick={backSpace}>Delete</Button>
        </Box>
        <Box spacing={3} mt={3}>
            <Button variant='contained' name='9' sx={{width:"80px",marginRight:"10px",height:"50px"}} onClick={handleClick}>9</Button>
            <Button variant='contained' name='8' sx={{width:"80px",marginRight:"10px",height:"50px"}} onClick={handleClick}>8</Button>
            <Button variant='contained' name='7' sx={{width:"80px",marginRight:"40px",height:"50px"}} onClick={handleClick}>7</Button>
            <Button variant='contained' name='+' color="secondary" sx={{width:"100px",height:"50px"}} onClick={handleClick}>+</Button>
        </Box>
        <Box mt={3}>
        <Button variant='contained' name='6' sx={{width:"80px",marginRight:"10px",height:"50px"}} onClick={handleClick}>6</Button>
            <Button variant='contained' name='5' sx={{width:"80px",marginRight:"10px",height:"50px"}} onClick={handleClick}>5</Button>
            <Button variant='contained' name='4' sx={{width:"80px",marginRight:"40px",height:"50px"}} onClick={handleClick}>4</Button>
            <Button variant='contained' name='-' color='secondary' sx={{width:"100px",height:"50px"}} onClick={handleClick}>-</Button>

        </Box>
        <Box mt={3}>
        <Button variant='contained' name='3' sx={{width:"80px",marginRight:"10px",height:"50px"}} onClick={handleClick}>3</Button>
            <Button variant='contained' name='2' sx={{width:"80px",marginRight:"10px",height:"50px"}} onClick={handleClick}>2</Button>
            <Button variant='contained' name='1' sx={{width:"80px",marginRight:"40px",height:"50px"}} onClick={handleClick}>1</Button>
            <Button variant='contained' name='*' color="secondary" sx={{width:"100px",height:"50px"}} onClick={handleClick}>*</Button>
        </Box>
        <Box mt={3}>
            {/* {createDigits()} */}
        <Button variant='contained' name='/' sx={{width:"80px",marginRight:"10px",height:"50px"}} onClick={handleClick}>/</Button>
            <Button variant='contained'name='0' sx={{width:"80px",marginRight:"10px",height:"50px"}} onClick={handleClick}>0</Button>
            <Button variant='contained' name='.' sx={{width:"80px",marginRight:"40px",height:"50px"}} onClick={handleClick}>.</Button>
            <Button variant='contained' name='=' color='success' sx={{width:"100px",height:"50px"}} onClick={Calculate}>=</Button>

        </Box>
        </Card>
    

    </Stack>


    
    </div>
  )
}
