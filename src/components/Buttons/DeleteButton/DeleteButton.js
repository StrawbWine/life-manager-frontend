import React from "react"
import ClearIcon from '@mui/icons-material/Clear';

const DeleteButton = ({ onClick }) => {
  return (
    <ClearIcon onClick={onClick} />
  )
}

export default DeleteButton