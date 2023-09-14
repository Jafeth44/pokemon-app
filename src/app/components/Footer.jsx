import { Box } from "@mui/material"

export const Footer = () => {
  return (
    <Box 
      height={'50px'}
      width={'100%'}
      position={'static'}
      bottom={0}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      color={'white'}
      sx={{
        backgroundColor: 'rgb(45, 112, 189)'
      }}
    >
      extra info footer *link to about and social media*
    </Box>
  )
}