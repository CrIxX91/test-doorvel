import { Layout, RickList } from '@/components'
import { NextPage } from 'next';
import { Container } from '@mui/material';

const HomePage:NextPage= ()=> {


  return (
    <Layout >
      <Container>
        <RickList/>
      </Container>
    </Layout>
  )
}
export default HomePage;
